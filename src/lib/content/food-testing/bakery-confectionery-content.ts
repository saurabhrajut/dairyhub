import { FoodTestItem } from "./types";

export const BAKERY_CONFECTIONERY_TESTS: FoodTestItem[] = [
  // 1. PHYSICAL TEST: Moisture & pH in Bread & Cakes
  {
    id: "bakery-phys-1",
    category: "Bakery & Confectionery",
    testType: "Physical",
    productName: "Bread, Biscuit, Cookies, Cake, Rusk, Pastry, Wafer",
    testName: "Moisture Content & pH Evaluation (pH Meter & Gravimetric Oven)",
    shortSummary: "Determines free water percentage and crumb acidity to prevent rope spoilage (Bacillus subtilis) and mold growth in baked goods.",
    detailedScientificRationale:
      "Baked products like Bread and Cakes contain high moisture (crumb moisture ~38-44%), making them prone to two major spoilage phenomena: Mold Spoilage (Eurotium, Penicillium) and Rope Spoilage ('Ropiness'). Rope spoilage is caused by heat-resistant bacterial endospores of Bacillus subtilis and Bacillus licheniformis that survive oven baking temperatures (crumb temp ~95-98°C).\n\nDuring storage, these spores germinate, hydrolyzing starch and proteins into viscous, slimy levan polymers accompanied by a fruity, sickening melon-like odor. Controlling crumb pH between 5.0 - 5.5 (via calcium propionate or vinegar additions) and enforcing strict moisture limits in dry bakery items like Biscuits (< 4.5%) and Rusks (< 5.0%) is critical to prevent bacterial rope and fungal degradation.",
    detailedTestPrinciple:
      "Moisture is determined gravimetrically at 105°C ± 2°C for crumb/biscuit sample. For pH evaluation, 10.0g of finely ground sample is macerated in 100mL freshly boiled and cooled distilled water (pH 7.0) for 30 minutes. The suspension is filtered, and the pH of the filtrate is measured electrometrically using a calibrated glass combination electrode pH meter.",
    chemicalEquation: "Bacillus Endospores (Survive Baking) + High Crumb Moisture (a_w > 0.90) + Neutral pH (pH > 6.0) ⟶ Viscous Levan Slimy Polymer (Rope Spoilage)",
    formulaBreakdown: {
      formula: "% Crumb Moisture = [(W1 - W2) / (W1 - W0)] × 100",
      variables: [
        { symbol: "W0", description: "Tare weight of moisture dish (g)" },
        { symbol: "W1", description: "Weight of dish + fresh bread crumb sample before drying (g)" },
        { symbol: "W2", description: "Weight of dish + sample after oven drying at 105°C for 4 hours (g)" }
      ],
      derivation: "Derived from Law of Conservation of Mass: Total Mass = Solid Mass + Water Mass. Moisture loss occurs as bound water evaporates during heating. (W1 - W2) = mass of water evaporated; (W1 - W0) = original sample mass. Ratio × 100 gives percentage.",
      factorOrigin: "The value 105°C is chosen because: (1) Water boiling point at 1 atm = 100°C; (2) Extra 5°C ensures complete removal of bound/hygroscopic water molecules held by hydrogen bonds to starch/protein; (3) Below 110°C to prevent Maillard browning and caramelization. The 4-hour duration is standardized by AOAC 925.10 based on kinetic studies showing complete water removal from bakery matrix.",
      unitAnalysis: "% Moisture = [g water / g sample] × 100 = dimensionless percentage",
      practicalExample: "W0 = 25.4523g, W1 = 30.4523g (5g sample), W2 = 28.4523g. Then: % Moisture = [(30.4523 - 28.4523)/(30.4523 - 25.4523)] × 100 = [2.0000/5.0000] × 100 = 40.00%"
    },
    referenceStandard: "FSSAI Manual 03 / IS 1483 (Bread) / IS 1011 (Biscuits) / ISO 1841 / AOAC 925.10",
    reagentsAndApparatus: [
      "Calibrated Combination Glass Electrode pH Meter (pH 4.01 & 7.00 buffer standard)",
      "Forced Convection Drying Oven (105°C ± 2°C)",
      "Freshly Boiled & Cooled CO2-Free Distilled Water (pH 7.0)",
      "High-speed Laboratory Blender & Glass Beakers"
    ],
    prescribedLimit: "Bread Crumb Moisture: Max 40.0% | Biscuit Moisture: Max 4.5% | Cake Moisture: Max 22.0% | Crumb pH: 5.0 - 5.5",
    riskIfFailed: "Rope spoilage (Bacillus subtilis slimy threads), mold growth (Rhizopus stolonifer), soggy texture, and off-flavors.",
    procedureSteps: [
      "For Moisture: Take representative crumb/biscuit sample, weigh 5.000g into dried dish, and dry at 105°C for 4 hours.",
      "For pH: Weigh 10.0g sample, transfer to 250mL beaker, add 100mL CO2-free distilled water, and blend for 2 minutes.",
      "Allow suspension to settle for 15 minutes at 25°C.",
      "Calibrate pH meter with pH 4.01 and 7.00 standard buffers.",
      "Immerse glass electrode into clear supernatant and record stable pH reading."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Sample Preparation",
        title: "Crumb Maceration & Homogenization",
        action: "Grind 10.0g fresh bread crumb; slurry with 100mL CO2-free distilled water.",
        scientificMechanism: "Extracts soluble organic acids and hydrogen ions (H+) into aqueous phase.",
        controlPoint: "CCP 1: Use freshly boiled water to eliminate dissolved CO2 (carbonic acid).",
        reagentsInvolved: ["CO2-Free Distilled Water"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: pH Meter Buffer Calibration",
        title: "Two-Point Electrometric Calibration",
        action: "Calibrate pH meter using pH 4.01 and pH 7.00 standard reference buffers.",
        scientificMechanism: "Adjusts Nernstian slope response of glass electrode (59.16 mV/pH unit at 25°C).",
        controlPoint: "CCP 2: Electrode slope must be between 95% - 102%.",
        reagentsInvolved: ["Buffer pH 4.01", "Buffer pH 7.00"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Potentiometric pH Measurement",
        title: "Hydronium Ion Activity Measurement",
        action: "Immerse electrode into supernatant; record pH when reading stabilizes.",
        scientificMechanism: "Glass membrane measures potential difference proportional to log[H+] activity.",
        controlPoint: "CCP 3: Temperature compensation must be set to 25°C.",
        reagentsInvolved: ["Glass Combination Electrode"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Crumb Moisture Oven Drying",
        title: "Thermal Loss-on-Drying",
        action: "Dry 5g sample at 105°C for 4 hours; cool in desiccator and weigh W2.",
        scientificMechanism: "Drives off volatile unbound moisture from hydrated starch gel.",
        controlPoint: "CCP 4: Desiccator silica gel must be active blue.",
        reagentsInvolved: ["Hot Air Oven"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Rope Risk Audit",
        title: "Statutory Compliance & Rope Prevention Gate",
        action: "Verify Crumb pH between 5.0 - 5.5 and Moisture <= 40.0%.",
        scientificMechanism: "Ensures acidity is sufficient to inhibit Bacillus subtilis spore germination.",
        controlPoint: "Quality Gate: pH > 6.0 + Moisture > 40% triggers high risk of Bacillus rope formation.",
        reagentsInvolved: ["Audit Checklist"]
      }
    ]
  ,
    factorsExplanation: [
    {
        "question": "Biscuits aur bread ke liye oven drying temperature aur time different kyun hota hai?",
        "answer": "1. Biscuits low-moisture (< 5%) baked products hain jahan moisture bound capillary form mein hoti hai — 105°C par 4 ghante mein free water complete evaporate ho jaata hai bina sugar caramelization ke.\n2. Bread high-moisture (~38-40%) starchy crumb hai jisme crust remove karke homogenized crumb ko 105°C par constant weight tak dry kiya jaata hai.\n3. High-sugar candies aur cakes ke liye 70°C vacuum oven use hota hai taaki invert sugar aur fructose decompose na ho."
    }
],
    factorsSummaryTable: [
    {
        "parameter": "Drying Temperature",
        "value": "105°C ± 1°C",
        "reason": "Standard isothermal drying avoiding carbohydrate pyrolysis"
    },
    {
        "parameter": "Crumb Sampling",
        "value": "Center of Loaf",
        "reason": "Avoids baked crust which has artificially low moisture"
    }
]
  },

  // 2. CHEMICAL TEST: Reducing & Total Sugars in Confectionery & Chocolate
  {
    id: "bakery-chem-1",
    category: "Bakery & Confectionery",
    testType: "Chemical",
    productName: "Chocolate, Toffee, Candy, Biscuit, Cookies, Wafer",
    testName: "Reducing and Total Sugars Determination (Lane & Eynon Volumetric Fehling Method)",
    shortSummary: "Quantifies invert sugars (glucose, fructose) and total sucrose content in candies and chocolates to monitor crystallization, sweetness, and adulteration.",
    detailedScientificRationale:
      "Confectionery items like Chocolates, Toffees, and Candies contain sucrose (non-reducing disaccharide) and invert sugar syrups (glucose + fructose reducing monosaccharides). Controlling the reducing sugar ratio is essential: excess reducing sugars make candies highly hygroscopic, sticky, and prone to moisture absorption and bloom, whereas insufficient reducing sugars lead to uncontrolled sucrose crystallization ('graining').\n\nFehling's solution contains Cu2+ (Cupric) ions complexed with Sodium Potassium Tartrate (Rochelle Salt). Reducing sugars containing free aldehyde (-CHO) or ketone (-C=O) groups reduce cupric ions (Cu2+) to insoluble cuprous oxide (Cu2O) red precipitate in hot alkaline medium. Titrating inverted non-reducing sucrose reveals Total Sugars.",
    detailedTestPrinciple:
      "Clarified sample solution (treated with Carrez I & II reagents to remove fat and proteins) is titrated against boiling Fehling's A and B solution using Methylene Blue indicator. Methylene Blue is reduced to its colorless leuco-form only after all Cu2+ ions have been completely reduced to brick-red Cu2O precipitate by reducing sugars. For Total Sugars, sucrose in the clarified solution is hydrolyzed (inverted) with HCl at 68-70°C, neutralized with NaOH, and re-titrated.",
    chemicalEquation: "R-CHO (Glucose/Fructose) + 2 Cu2+ (Fehling's Deep Blue) + 5 OH- ⟶ R-COO- + Cu2O ↓ (Brick Red Precipitate) + 3 H2O",
    formulaBreakdown: {
      formula: "% Reducing Sugars = (Fehling Factor × Dilution Volume × 100) / (Titre V × Sample Mass W)",
      variables: [
        { symbol: "Fehling Factor", description: "Mass of invert sugar required to reduce 10mL Fehling's A+B (~0.050g = 50mg)" },
        { symbol: "Titre V", description: "Volume of clarified sugar solution consumed in boiling titration (mL)" },
        { symbol: "Dilution Volume", description: "Total volumetric flask dilution volume (mL, typically 250mL)" },
        { symbol: "Sample Mass W", description: "Mass of confectionery sample taken (g)" }
      ],
      derivation: "Derived from Stoichiometric equivalence: 1 mole reducing sugar reduces exactly 5 moles Cu²⁺. Fehling Factor established empirically by titration with pure invert sugar. Sucrose Conversion: % Sucrose = (Total RS after inversion - RS before inversion) × 0.95",
      factorOrigin: "Fehling Factor (0.050g / 50mg per 10mL Fehling's): Determined empirically using pure invert sugar standard. Historically established by Lane & Eynon (1923) at 49.8 mg for exactly 10.00mL mixed Fehling's. Sucrose Factor 0.95 = 342/360 (MW ratio of sucrose to hydrolyzed products glucose+fructose = 180+180 = 360g/mol). The 68-70°C inversion temperature optimizes acid hydrolysis rate while avoiding fructose decomposition.",
      unitAnalysis: "[mg × mL × 100] / [mL × g × 1000 mg/g] = g/g × 100 = %",
      practicalExample: "10g sample dissolved in 250mL, titrate = 12.5mL, Fehling Factor = 50mg. Then: % RS = (50 × 250 × 100)/(12.5 × 10 × 1000) = 1,250,000/125,000 = 10.0%"
    },
    referenceStandard: "FSSAI Manual 03 / IS 1163 (Chocolate) / IS 1008 (Toffee) / AOAC 923.09 / Lane-Eynon (1923)",
    reagentsAndApparatus: [
      "Fehling's Solution A (7% CuSO4·5H2O) & Fehling's Solution B (35% Rochelle Salt + 10% NaOH)",
      "Carrez Reagent I (15% Potassium Ferrocyanide) & Carrez Reagent II (30% Zinc Acetate)",
      "0.2% Methylene Blue Indicator Solution",
      "Concentrated HCl & 40% NaOH Solution",
      "Boiling Electric Hot Plate & 50mL Class A Burette"
    ],
    prescribedLimit: "Hard Boiled Candy: Reducing Sugar 10-20% | Chocolate Total Sugars: Max 55.0% | Toffee Total Sugars: Max 60.0%",
    riskIfFailed: "Severe candy stickiness, moisture absorption, sugar bloom in chocolate, off-crystallization, and commercial unmarketability.",
    procedureSteps: [
      "Weigh 10.0g ground confectionery into 250mL flask, add 150mL warm water (60°C) to dissolve sugars.",
      "Add 5mL Carrez I and 5mL Carrez II to precipitate proteins and fats. Dilute to 250mL mark and filter.",
      "Pipette 5mL Fehling A + 5mL Fehling B into a 250mL Erlenmeyer flask, add 10mL water, and bring to boil.",
      "Add 3 drops Methylene Blue indicator and titrate boiling solution with clarified filtrate until deep blue color discharges to brick-red Cu2O.",
      "For Total Sugars: Take 50mL filtrate, add 5mL conc. HCl, heat at 68°C for 10 min (Inversion), cool, neutralize with NaOH, dilute to 100mL, and repeat titration."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Clarification & De-fatting",
        title: "Carrez Protein & Fat Defecation",
        action: "Dissolve 10g candy in warm water; add 5mL Carrez I and 5mL Carrez II; filter.",
        scientificMechanism: "Zinc ferrocyanide gelatinous precipitate adsorbs and co-precipitates fat droplets and proteins.",
        controlPoint: "CCP 1: Ensure filtrate is crystal clear before titration.",
        reagentsInvolved: ["Carrez I", "Carrez II"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Fehling Reagent Preparation",
        title: "Cupric Tartrate Complex Preparation",
        action: "Mix 5mL Fehling A (CuSO4) + 5mL Fehling B (Rochelle Salt/NaOH); bring to boil.",
        scientificMechanism: "Tartrate ions complex Cu2+ ions preventing premature Cu(OH)2 precipitation in alkaline medium.",
        controlPoint: "CCP 2: Boil Fehling solution continuously during titration.",
        reagentsInvolved: ["Fehling A", "Fehling B"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Boiling Redox Titration",
        title: "Volumetric Reducing Titration",
        action: "Titrate boiling Fehling mixture with sugar filtrate until blue color discharges to brick-red.",
        scientificMechanism: "Free aldehyde groups of glucose/fructose reduce Cu2+ to insoluble red Cu2O precipitate.",
        controlPoint: "CCP 3: Complete titration within 3 minutes of boiling to prevent re-oxidation by atmospheric O2.",
        reagentsInvolved: ["Clarified Sugar Filtrate"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Acid Inversion (Total Sugars)",
        title: "Sucrose Acid Inversion Hydrolysis",
        action: "Heat 50mL filtrate with 5mL HCl at 68°C for 10 min; cool, neutralize with NaOH, and re-titrate.",
        scientificMechanism: "Hydronium ions cleave alpha-1,2-glycosidic bond of sucrose, yielding equal glucose + fructose (Invert Sugar).",
        controlPoint: "CCP 4: Maintain inversion temperature strictly at 68-70°C for 10 min.",
        reagentsInvolved: ["Conc. HCl", "NaOH"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Sugar Ratio Computation",
        title: "Reducing & Total Sugar Audit",
        action: "Calculate % Reducing Sugars and % Total Sugars. Verify compliance with FSSAI limits.",
        scientificMechanism: "Quantifies sugar balance controlling confectionery shelf-life and crystallization stability.",
        controlPoint: "Quality Gate: Hard candy reducing sugar > 25% causes sticky melting during summer storage.",
        reagentsInvolved: ["Calculation Formula"]
      }
    ]
  ,
    factorsExplanation: [
    {
        "question": "Lane-Eynon method mein Fehling's A aur B alag-alag store kyun karte hain aur boiling par titration kyun karte hain?",
        "answer": "1. Fehling's A (copper sulphate) aur Fehling's B (alkaline sodium potassium tartrate) ko mix karke rakhne par tartrate copper ko slow auto-reduce kar deta hai. Fresh 1:1 mixing zaroori hai.\n2. Boiling temperature (100°C) par cuprous oxide (Cu2O) precipitation reaction rate fast hota hai, jisse sharp methylene blue indicator endpoint milta hai."
    }
],
    factorsSummaryTable: [
    {
        "parameter": "Titration Condition",
        "value": "Continuous Boiling",
        "reason": "Maintains constant cuprous oxide reduction kinetics"
    },
    {
        "parameter": "Inversion Acid",
        "value": "Dilute HCl at 68-70°C",
        "reason": "Inverts non-reducing sucrose into reducing glucose + fructose"
    }
]
  },

  // 3. MICROBIOLOGICAL TEST: Salmonella & Enterobacteriaceae in Chocolate & Bakery
  {
    id: "bakery-micro-1",
    category: "Bakery & Confectionery",
    testType: "Microbiological",
    productName: "Chocolate, Cocoa Powder, Biscuit, Cake, Wafer, Candy",
    testName: "Salmonella Species Detection (ISO 6579 / FSSAI Method)",
    shortSummary: "Detects presence of Salmonella enterica pathogens in cocoa and bakery items to prevent severe foodborne salmonellosis outbreaks.",
    detailedScientificRationale:
      "Chocolate, Cocoa Powder, and Bakery products containing egg/dairy ingredients are high-risk vehicles for Salmonella enterica infection. Cocoa beans imported from tropical farms frequently carry Salmonella contamination. Although chocolate has low water activity (a_w ~ 0.30-0.40), the high fat matrix (cocoa butter) exerts a protective coating on bacterial cells, allowing Salmonella to survive for years in dry chocolate.\n\nFurthermore, the high fat protects Salmonella cells from stomach gastric acid (pH 1.5-2.0), lowering the infectious dose to as few as 1 to 10 bacterial cells. Because FSSAI mandates absolute zero tolerance (Absence in 25g sample), pre-enrichment in Buffered Peptone Water followed by selective enrichment in XLD and BS agar is compulsory.",
    detailedTestPrinciple:
      "25g sample is pre-enriched in 225mL Buffered Peptone Water (BPW) at 37°C for 18-24 hours to revive injured cells. 0.1mL pre-enrichment broth is transferred to Rappaport-Vassiliadis (RVS) broth and 1.0mL to MKTTn broth for selective amplification at 41.5°C. Subcultures are streaked onto Xylose Lysine Deoxycholate (XLD) Agar and Bismuth Sulfite (BS) Agar. Salmonella forms characteristic red colonies with black centers on XLD due to xylose fermentation, lysine decarboxylation, and H2S gas reaction with ferric ammonium citrate.",
    chemicalEquation: "Salmonella H2S Gas + Ferric Ammonium Citrate ⟶ Iron Sulfide (FeS ↓ Black Precipitate Core on Red XLD Agar Colony)",
    formulaBreakdown: {
      formula: "Salmonella Detection = Positive Identification (Biochemical & Serological Agglutination) in 25g Sample",
      variables: [
        { symbol: "Pre-enrichment", description: "Buffered Peptone Water (225mL per 25g sample, 37°C / 24h)" },
        { symbol: "Selective Broth", description: "Rappaport-Vassiliadis (RVS) Broth (41.5°C / 24h)" },
        { symbol: "Selective Plating", description: "XLD Agar & Bismuth Sulfite Agar (37°C / 24h)" }
      ],
      derivation: "Sample-to-broth ratio 1:9 (25g:225mL) optimizes cell resuscitation while maintaining sufficient selectivity. Volume ratio derived from Bacteriological Analytical Manual (BAM) standardization for uniform recovery of sublethally injured cells across all food matrices.",
      factorOrigin: "Temperature 41.5°C is the maximum tolerable growth temperature for Salmonella but inhibitory for most competing coliforms. RVS broth uses Malachite Green (0.036g/L) as selective agent - concentration determined by Rappaport-Vassiliadis (1956) studies. The 25g sample size is statistically derived (based on Poisson distribution) to detect contamination levels as low as 1 CFU/25g with 95% confidence.",
      unitAnalysis: "Qualitative result: Present or Absent per 25g sample (CFU threshold based test)",
      practicalExample: "If Salmonella detected in RVS broth → Red colonies with black centers on XLD → TSI shows K/A + H2S+ → Positive agglutination with Poly-O antisera → Report: Salmonella SPP. DETECTED in 25g. Product Recall Triggered."
    },
    referenceStandard: "FSSAI Manual 14 (Microbiology) / ISO 6579-1 / AOAC 967.26 / BAM Ch. 5",
    reagentsAndApparatus: [
      "Buffered Peptone Water (BPW) & Rappaport-Vassiliadis (RVS) Broth",
      "Xylose Lysine Deoxycholate (XLD) Agar & Bismuth Sulfite (BS) Agar",
      "TSI (Triple Sugar Iron) Agar Slants & Urea Agar Slants",
      "Polyvalent Salmonella Antisera (O & H Antigens)",
      "Incubator (37°C ± 1°C & 41.5°C ± 0.5°C)"
    ],
    prescribedLimit: "Absent in 25g sample (Statutory Zero Tolerance across all confectionery & bakery items)",
    riskIfFailed: "Severe salmonellosis outbreaks, acute gastroenteritis, bloody diarrhea, typhoid fever, international product recalls.",
    procedureSteps: [
      "Aseptically add 25g sample to 225mL sterile BPW in stomacher bag; incubate at 37°C for 18-24 hours (Pre-enrichment).",
      "Transfer 0.1mL BPW into 10mL RVS broth (incubate at 41.5°C for 24h) and 1.0mL to MKTTn broth (37°C for 24h).",
      "Streak a loopful from RVS and MKTTn onto XLD Agar and Bismuth Sulfite Agar plates; incubate at 37°C for 24 hours.",
      "Examine XLD plates for red colonies with black centers (typical Salmonella morphotype).",
      "Confirm suspect colonies biochemically (TSI slant K/A + H2S+, Urea negative) and serologically using Polyvalent O Antisera."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Non-Selective Pre-Enrichment",
        title: "Cellular Resuscitation in BPW",
        action: "Homogenize 25g chocolate in 225mL sterile BPW; incubate at 37°C for 18-24 hours.",
        scientificMechanism: "Provides osmotic buffer and nutrients to repair sublethally injured bacterial cell membranes.",
        controlPoint: "CCP 1: Use sterile stomacher bags and Class 100 Biosafety Cabinet.",
        reagentsInvolved: ["Buffered Peptone Water"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Selective Amplification",
        title: "RVS Selective Broth Amplification",
        action: "Transfer 0.1mL BPW into 10mL RVS broth; incubate at 41.5°C ± 0.5°C for 24 hours.",
        scientificMechanism: "Malachite green, high osmotic pressure, and elevated 41.5°C temperature inhibit non-Salmonella competing flora.",
        controlPoint: "CCP 2: RVS incubator temperature must be strictly 41.5°C ± 0.5°C.",
        reagentsInvolved: ["RVS Broth"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Selective Differential Plating",
        title: "XLD & BS Agar Isolation Streaking",
        action: "Streak loopful RVS onto XLD Agar; incubate at 37°C for 24 hours.",
        scientificMechanism: "Deoxycholate inhibits Gram-positive flora; Xylose/Lysine fermentation + H2S production generates black-centered red colonies.",
        controlPoint: "CCP 3: Do not overheat XLD agar during preparation (causes precipitation).",
        reagentsInvolved: ["XLD Agar", "BS Agar"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Biochemical Confirmation",
        title: "TSI & Urease Differential Screen",
        action: "Inoculate TSI and Urea slants with suspect colony. Invert TSI (K/A + H2S+) and negative Urease confirm Salmonella.",
        scientificMechanism: "Salmonella ferments glucose (acid butt) but not lactose/sucrose (alkaline slant) and produces H2S without splitting urea.",
        controlPoint: "CCP 4: Urea positive colonies are Proteus (not Salmonella). Discard.",
        reagentsInvolved: ["TSI Agar Slant", "Urea Agar Slant"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Serological Agglutination Gate",
        title: "Polyvalent O Antisera Agglutination & Audit",
        action: "Perform slide agglutination with Polyvalent Salmonella O Antisera. Report Presumptive Positive/Negative.",
        scientificMechanism: "Specific O-antigen antibodies bind lipopolysaccharide cell wall surface, forming visible clumped antigen-antibody lattices.",
        controlPoint: "Quality Gate: Any agglutination in 25g sample triggers immediate batch quarantine and statutory reporting.",
        reagentsInvolved: ["Polyvalent O Antisera"]
      }
    ]
  ,
    factorsExplanation: [
    {
        "question": "Chocolate mein Salmonella testing ke liye Buffered Peptone Water (BPW) with Tween 80 kyun zaroori hai?",
        "answer": "1. Chocolate mein high fat (~30-35%) aur low water activity bacterial cells ko hydrophobic lipid coat mein trap kar deti hai.\n2. 1% Tween 80 surfactant fat emulsion ko disperse karta hai taaki dry-stressed sub-lethally injured Salmonella cells rehydrate ho sakein aur pre-enrichment broth mein proliferate kar sakein."
    }
],
    factorsSummaryTable: [
    {
        "parameter": "Pre-enrichment",
        "value": "BPW + 1% Tween 80, 37°C",
        "reason": "Resuscitation of stressed Salmonella in high-fat cocoa matrix"
    },
    {
        "parameter": "Statutory Limit",
        "value": "Absent in 25g",
        "reason": "Strict zero-tolerance food safety mandate under FSSAI"
    }
]
  },

  // 4. CHEMICAL TEST: Fat Content & Acid Value in Bakery Fats
  {
    id: "bakery-chem-2",
    category: "Bakery & Confectionery",
    testType: "Chemical",
    productName: "Biscuits, Cookies, Cake, Pastry, Chocolate, Wafer",
    testName: "Fat Content Determination (Soxhlet Extraction) & Free Fatty Acid Value",
    shortSummary: "Quantifies total lipid content via petroleum ether Soxhlet extraction and measures rancidity development through Free Fatty Acid (FFA) titration.",
    detailedScientificRationale:
      "Fat is a critical shortening ingredient in biscuits (15-25%), cookies (20-30%), and chocolate (30-35% cocoa butter). During storage, triglycerides undergo two major deteriorations: (1) Hydrolytic Rancidity - Lipase enzymes and moisture cleave ester bonds producing free fatty acids (FFA) especially short-chain butyric acid causing soapy off-flavors; (2) Oxidative Rancidity - Unsaturated fatty acids react with atmospheric O2 forming hydroperoxides, aldehydes, and ketones creating painty, cardboard-like off-flavors.\n\nMonitoring both Fat Content (nutritional labeling compliance) and Acid Value (rancidity indicator) is critical for shelf-life prediction, consumer safety, and regulatory compliance with FSSAI standards.",
    detailedTestPrinciple:
      "Fat Content: Dried sample is repeatedly extracted with anhydrous petroleum ether (BP 40-60°C) in a Soxhlet apparatus for 6-8 hours. The non-polar solvent selectively dissolves neutral triglycerides while leaving polar compounds behind. Solvent is distilled off and residual fat is dried at 103°C and weighed.\n\nFFA Determination: Extracted fat is dissolved in neutralized ethanol-ether mixture and titrated against standardized 0.1N KOH using phenolphthalein indicator until persistent pink endpoint.",
    chemicalEquation: "Triglyceride (Fat) + 3 H2O (Lipase) ⟶ Glycerol + 3 R-COOH (Free Fatty Acids)\n\nR-COOH (FFA) + KOH ⟶ R-COOK (Potassium Soap) + H2O",
    formulaBreakdown: {
      formula: "% Fat = [(W2 - W1) / Ws] × 100  |  Acid Value = (V × N × 56.1) / W",
      variables: [
        { symbol: "W1", description: "Weight of empty extraction flask (g)" },
        { symbol: "W2", description: "Weight of flask + extracted fat after drying (g)" },
        { symbol: "Ws", description: "Weight of original dried sample (g)" },
        { symbol: "V", description: "Volume of 0.1N KOH consumed in titration (mL)" },
        { symbol: "N", description: "Normality of KOH solution (typically 0.1N)" },
        { symbol: "56.1", description: "Molecular weight of KOH (g/mol) - conversion factor" },
        { symbol: "W", description: "Weight of fat sample titrated (g)" }
      ],
      derivation: "Fat % from gravimetric mass balance. Acid Value formula derived from acid-base stoichiometry: 1 mole KOH neutralizes 1 mole free carboxylic acid. Acid Value is defined as mg KOH required to neutralize FFA in 1g fat. FFA % (as oleic acid) = Acid Value × 0.503 (where 0.503 = 282/560.9, MW ratio of oleic acid to 10×KOH).",
      factorOrigin: "56.1 = Molecular weight of KOH (K=39.1 + O=16 + H=1 = 56.1 g/mol). The 0.503 conversion factor for oleic acid: MW oleic = 282.47 g/mol; ratio = 282.47/(10×56.1) = 0.503. Petroleum ether BP 40-60°C selected because: (1) Low boiling for easy recovery; (2) Selective for non-polar triglycerides; (3) No emulsion formation. Soxhlet 6-8 hours based on kinetic studies showing >99% fat recovery from bakery matrices.",
      unitAnalysis: "% Fat = [g/g] × 100 = %  |  Acid Value = [mL × mol/L × g/mol] / g = mg KOH/g fat",
      practicalExample: "Fat Content: W1=110.5234g, W2=112.5734g, Ws=10.00g. % Fat = [(112.5734-110.5234)/10.00] × 100 = 20.50%\n\nAcid Value: V=2.5mL, N=0.1, W=5g. AV = (2.5 × 0.1 × 56.1)/5 = 2.81 mg KOH/g"
    },
    referenceStandard: "FSSAI Manual 01 / IS 4684 (Fats & Oils) / IS 1011 (Biscuits) / AOAC 920.85 / AOCS Ca 5a-40",
    reagentsAndApparatus: [
      "Soxhlet Extraction Apparatus with Cellulose Thimbles",
      "Petroleum Ether (Analytical Grade, BP 40-60°C, Peroxide-free)",
      "Standardized 0.1N KOH in 95% Ethanol",
      "Phenolphthalein Indicator (1% in Ethanol)",
      "Neutralized Ethanol-Diethyl Ether Mixture (1:1)",
      "Electric Heating Mantle & Rotary Evaporator"
    ],
    prescribedLimit: "Biscuit Fat: 15-25% | Cookies: 20-30% | Chocolate Fat: 30-35% | Acid Value: Max 2.5 mg KOH/g",
    riskIfFailed: "Rancid off-flavors, reduced shelf life, nutritional non-compliance, consumer rejection, gastrointestinal irritation.",
    procedureSteps: [
      "Fat Extraction: Weigh 5g dried powdered sample into cellulose thimble; place in Soxhlet extractor.",
      "Add 150mL petroleum ether to pre-weighed round-bottom flask; assemble apparatus.",
      "Reflux for 6-8 hours at rate of 5-6 siphon cycles per hour.",
      "Distill off solvent; dry flask at 103°C for 30 min; cool in desiccator and weigh (W2).",
      "FFA Test: Dissolve 5g extracted fat in 50mL neutralized ethanol-ether; add 3 drops phenolphthalein.",
      "Titrate with 0.1N KOH until faint pink color persists for 30 seconds."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Sample Drying & Thimble Loading",
        title: "Moisture Removal & Sample Preparation",
        action: "Dry 5g ground sample at 100°C for 1 hour; transfer to cellulose thimble.",
        scientificMechanism: "Removes water which would form emulsion with petroleum ether and reduce extraction efficiency.",
        controlPoint: "CCP 1: Sample must be bone-dry; use anhydrous Na2SO4 if needed.",
        reagentsInvolved: ["Dry Sample", "Cellulose Thimble"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Continuous Soxhlet Extraction",
        title: "Reflux Cycling Extraction",
        action: "Reflux with petroleum ether at 5-6 siphon cycles/hour for 6-8 hours.",
        scientificMechanism: "Repeated distillation-condensation delivers fresh solvent for continuous fat dissolution.",
        controlPoint: "CCP 2: Maintain steady siphon rate; test extraction completeness with drop-on-paper test.",
        reagentsInvolved: ["Petroleum Ether"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Solvent Recovery & Drying",
        title: "Fat Isolation & Constant Weight",
        action: "Distill solvent; dry flask at 103°C until constant weight (±0.5 mg).",
        scientificMechanism: "Ensures complete solvent removal and thermal stability of extracted lipids.",
        controlPoint: "CCP 3: Avoid overheating (>110°C) which causes fat oxidation.",
        reagentsInvolved: ["Rotary Evaporator"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: FFA Solvent Dissolution",
        title: "Fat Dissolution in Neutral Solvent",
        action: "Dissolve 5g fat in 50mL neutralized ethanol-ether mixture.",
        scientificMechanism: "Provides homogeneous phase where FFAs dissociate for accurate acid-base titration.",
        controlPoint: "CCP 4: Solvent must be pre-neutralized to phenolphthalein endpoint.",
        reagentsInvolved: ["Ethanol-Ether Mix", "Phenolphthalein"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Alkaline Titration & Rancidity Audit",
        title: "KOH Titration & FSSAI Compliance",
        action: "Titrate with 0.1N KOH until persistent pink; calculate Acid Value.",
        scientificMechanism: "Alkali neutralizes free carboxylic acid groups; phenolphthalein turns pink at pH 8.3.",
        controlPoint: "Quality Gate: AV > 2.5 mg KOH/g indicates rancidity; batch reject.",
        reagentsInvolved: ["0.1N KOH"]
      }
    ]
  ,
    factorsExplanation: [
    {
        "question": "Baked products mein direct Soxhlet ke bajaye acid hydrolysis kyun anivarya hai?",
        "answer": "1. Baking ke dauran gelatinized starch aur denatured proteins fat ke saath amylose-lipid inclusion complexes bana lete hain.\n2. Direct non-polar solvent extraction (petroleum ether / hexane) se 20-30% fat extract nahi hota.\n3. Dilute HCl acid digestion starch helix ko tod kar 100% bound fat ko release karti hai."
    }
],
    factorsSummaryTable: [
    {
        "parameter": "Acid Digestion",
        "value": "8 N HCl at 70-80°C",
        "reason": "Hydrolyzes amylose-lipid complexes to liberate bound fat"
    },
    {
        "parameter": "Solvent Mixture",
        "value": "Diethyl Ether : Pet Ether (1:1)",
        "reason": "Extracts both polar and neutral lipid fractions quantitatively"
    }
]
  },

  // 5. CHEMICAL TEST: Peroxide Value & Rancidity Assessment
  {
    id: "bakery-chem-3",
    category: "Bakery & Confectionery",
    testType: "Chemical",
    productName: "Biscuits, Cookies, Cake, Chocolate, Pastry, Wafer",
    testName: "Peroxide Value Determination (Iodometric Method - AOCS Cd 8-53)",
    shortSummary: "Quantifies primary oxidation products (hydroperoxides) in bakery fats to detect early-stage oxidative rancidity before sensory detection.",
    detailedScientificRationale:
      "Peroxide Value (PV) measures milliequivalents of active oxygen per kg fat, indicating primary lipid oxidation state. Unsaturated fatty acids (oleic, linoleic, linolenic) react with atmospheric oxygen forming hydroperoxides (ROOH) as the first stable oxidation product. These hydroperoxides are odorless but decompose into aldehydes, ketones, and short-chain acids causing off-flavors (secondary rancidity).\n\nEarly detection via PV enables intervention BEFORE consumer-detectable rancidity develops. PV correlates with shelf-life: fresh oils <5, acceptable <10, rancid >20 meq O2/kg.",
    detailedTestPrinciple:
      "Extracted fat sample is dissolved in acetic acid-chloroform (3:2) mixture. Saturated potassium iodide solution is added; peroxides (ROOH) oxidize iodide (I-) to free iodine (I2) stoichiometrically. Liberated I2 is titrated against standardized 0.01N sodium thiosulfate (Na2S2O3) using starch indicator (blue → colorless endpoint).",
    chemicalEquation: "ROOH + 2 KI + 2 CH3COOH ⟶ ROH + I2 + 2 CH3COOK + H2O\n\nI2 + 2 Na2S2O3 ⟶ 2 NaI + Na2S4O6 (Sodium Tetrathionate)",
    formulaBreakdown: {
      formula: "PV (meq O2/kg fat) = [(Vs - Vb) × N × 1000] / W",
      variables: [
        { symbol: "Vs", description: "Volume of Na2S2O3 consumed for sample (mL)" },
        { symbol: "Vb", description: "Volume of Na2S2O3 consumed for blank (mL)" },
        { symbol: "N", description: "Normality of Na2S2O3 (typically 0.01N)" },
        { symbol: "1000", description: "Conversion factor (g fat to kg fat)" },
        { symbol: "W", description: "Weight of fat sample (g)" }
      ],
      derivation: "Derived from redox stoichiometry: 1 mole ROOH liberates 1 mole I2; 1 mole I2 consumed by 2 moles Na2S2O3. Since 1 mole active oxygen = 2 equivalents, PV = mL × N × (1000/W) yields meq/kg directly.",
      factorOrigin: "1000 factor converts sample weight from grams to kilograms (results per kg oil). Normality 0.01N chosen for high sensitivity (fresh oils PV<5 need dilute titrant for accurate readings). Acetic acid-chloroform 3:2 ratio optimized: acetic acid protonates ROOH increasing reactivity; chloroform dissolves fat; ratio 3:2 gives best phase compatibility. 1-minute dark reaction time prevents excess I2 oxidation by atmospheric O2.",
      unitAnalysis: "[mL × mol/L × 1000] / g = meq / kg (correct dimensional unit for PV)",
      practicalExample: "Vs=1.2mL, Vb=0.05mL, N=0.01, W=2.0g. PV = [(1.2-0.05) × 0.01 × 1000]/2.0 = [1.15 × 10]/2.0 = 5.75 meq O2/kg (Acceptable, fresh)"
    },
    referenceStandard: "AOCS Cd 8-53 / IS 3508 / FSSAI Manual 01 / ISO 3960",
    reagentsAndApparatus: [
      "Acetic Acid : Chloroform (3:2 v/v)",
      "Saturated Potassium Iodide Solution (freshly prepared)",
      "0.01N Sodium Thiosulfate (standardized daily)",
      "1% Starch Indicator (freshly prepared)",
      "250mL Iodine Flask with ground glass stopper",
      "Boiling water bath"
    ],
    prescribedLimit: "Fresh Fat: <5 meq/kg | Acceptable: <10 meq/kg | Rancid Rejected: >20 meq/kg | FSSAI Max: 10 meq/kg",
    riskIfFailed: "Oxidative rancidity, off-flavors, formation of toxic aldehydes (MDA, 4-HNE), reduced antioxidant vitamin content, consumer illness.",
    procedureSteps: [
      "Weigh 2-5g extracted fat into 250mL iodine flask.",
      "Add 30mL acetic acid-chloroform (3:2) mixture; swirl to dissolve.",
      "Add 0.5mL saturated KI solution; stopper and mix by swirling for exactly 1 minute in darkness.",
      "Add 30mL distilled water; shake vigorously to release iodine into aqueous phase.",
      "Titrate liberated I2 with 0.01N Na2S2O3 until pale yellow color.",
      "Add 1mL starch indicator (blue-black color develops); continue titration dropwise until blue disappears completely.",
      "Run reagent blank simultaneously; calculate PV."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Fat Dissolution",
        title: "Non-polar Solvent Dissolution",
        action: "Dissolve 2-5g fat in 30mL acetic acid-chloroform (3:2).",
        scientificMechanism: "Creates homogeneous acidic organic phase for peroxide-iodide reaction.",
        controlPoint: "CCP 1: Solvent must be peroxide-free; test with KI-starch paper.",
        reagentsInvolved: ["Acetic acid", "Chloroform"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Iodide Oxidation",
        title: "Dark Reaction with KI",
        action: "Add 0.5mL saturated KI; stopper and swirl 1 minute in dark.",
        scientificMechanism: "Peroxides oxidize I- to I2 stoichiometrically; darkness prevents photo-oxidation.",
        controlPoint: "CCP 2: Exactly 1 minute reaction time; freshly prepared KI mandatory.",
        reagentsInvolved: ["KI Solution"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Aqueous Phase Transfer",
        title: "Iodine Extraction to Water",
        action: "Add 30mL water; shake vigorously to transfer I2 to aqueous phase.",
        scientificMechanism: "Water dissolves KI3 complex allowing sodium thiosulfate reaction.",
        controlPoint: "CCP 3: Vigorous shaking essential for complete phase separation.",
        reagentsInvolved: ["Distilled Water"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Thiosulfate Titration",
        title: "Iodometric Endpoint Detection",
        action: "Titrate with 0.01N Na2S2O3 to pale yellow; add starch; continue to colorless.",
        scientificMechanism: "Thiosulfate reduces I2 to I-; starch-iodine complex disappears at endpoint.",
        controlPoint: "CCP 4: Add starch only near endpoint (pale yellow) for sharp color change.",
        reagentsInvolved: ["0.01N Na2S2O3", "Starch"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: PV Calculation & Shelf-Life Audit",
        title: "Rancidity Assessment & Compliance Gate",
        action: "Calculate PV; compare against FSSAI limit of 10 meq O2/kg.",
        scientificMechanism: "PV quantifies oxidation state; predicts remaining shelf-life kinetics.",
        controlPoint: "Quality Gate: PV > 10 meq/kg = Batch reject + investigate storage conditions.",
        reagentsInvolved: ["Calculation Sheet"]
      }
    ]
  ,
    factorsExplanation: [
    {
        "question": "Peroxide value testing dark room / subdued light mein kyun ki jaati hai?",
        "answer": "1. Potassium iodide (KI) solution light-sensitive hota hai — direct daylight ya fluorescent light iodide ions (I-) ko air oxidation se free iodine mein convert kar sakti hai, resulting in false high blank.\n2. Acetic acid : isooctane medium fat ko dissolve karta hai aur hydroperoxides ki iodide ke saath stoichiometric reaction ko promote karta hai."
    }
],
    factorsSummaryTable: [
    {
        "parameter": "Reaction Environment",
        "value": "Darkness, exactly 1 min",
        "reason": "Prevents photolytic oxidation of iodide ions"
    },
    {
        "parameter": "Statutory Threshold",
        "value": "Max 10.0 meq/kg",
        "reason": "Primary lipid oxidation limit per FSSAI regulations"
    }
]
  },

  // 6. PHYSICAL TEST: Water Activity (aw) Measurement
  {
    id: "bakery-phys-2",
    category: "Bakery & Confectionery",
    testType: "Physical",
    productName: "Biscuit, Cookies, Chocolate, Candy, Cake, Bread, Wafer",
    testName: "Water Activity (aw) Determination using Dewpoint Hygrometer",
    shortSummary: "Measures the availability of free water in bakery/confectionery products - the critical determinant of microbial growth and shelf life.",
    detailedScientificRationale:
      "Water Activity (aw) is thermodynamically defined as the ratio of vapor pressure of water in food to vapor pressure of pure water at the same temperature. Unlike moisture content (which measures TOTAL water), aw measures ONLY FREE, AVAILABLE water for microbial and chemical reactions.\n\nMicrobial growth thresholds: Bacteria require aw > 0.90; Yeasts > 0.87; Molds > 0.75; Osmophilic yeasts > 0.60. Products with aw < 0.60 (chocolate, hard candy) are microbiologically stable. Bakery products span wide aw range: fresh bread (0.94-0.97), soft cookies (0.5-0.7), hard biscuits (0.2-0.4), chocolate (0.3-0.5).\n\naw also controls non-microbial deterioration: Maillard browning peaks at aw 0.6-0.7; lipid oxidation minimum at aw 0.3; texture crispness lost above aw 0.5.",
    detailedTestPrinciple:
      "Sample is placed in a sealed chamber and allowed to equilibrate with headspace air. Chilled-mirror dewpoint sensor cools mirror surface until condensation forms; optical detector senses dew point. Temperature at which dew forms corresponds to relative humidity of air, which equals aw of sample (in decimal form).",
    chemicalEquation: "aw = P (water vapor pressure in food) / P0 (vapor pressure of pure water at same T) = ERH% / 100",
    formulaBreakdown: {
      formula: "aw = P / P0 = %ERH / 100  |  For dewpoint: aw = e(Td) / e(Ts)",
      variables: [
        { symbol: "aw", description: "Water activity (dimensionless, 0-1)" },
        { symbol: "P", description: "Partial vapor pressure of water in equilibrium with food (Pa)" },
        { symbol: "P0", description: "Saturation vapor pressure of pure water at same temperature (Pa)" },
        { symbol: "%ERH", description: "Equilibrium Relative Humidity (%)" },
        { symbol: "e(Td)", description: "Saturation vapor pressure at dewpoint temperature (Pa)" },
        { symbol: "e(Ts)", description: "Saturation vapor pressure at sample temperature (Pa)" }
      ],
      derivation: "Derived from Raoult's Law and Clausius-Clapeyron equation. When food/air system reaches equilibrium, water chemical potential (μ) equal in both phases. Since μ = μ0 + RT ln(aw), measuring vapor pressure ratio directly gives aw. Dewpoint measurement uses Magnus-Tetens equation: e(T) = 611 × exp[17.27T/(T+237.3)].",
      factorOrigin: "aw scale (0 to 1) established by Scott (1957) as universal microbial stability indicator. Value 0.60 = minimum aw for any microbial growth (osmophilic yeasts). Value 0.85 = FDA limit for shelf-stable foods without preservatives. Chilled-mirror dewpoint accuracy: ±0.003 aw (best available method). Sample equilibration 5-15 minutes based on food matrix - hydrophilic foods (bread) faster than hydrophobic (chocolate).",
      unitAnalysis: "aw = [Pa/Pa] = dimensionless ratio (0 to 1.000)",
      practicalExample: "Fresh bread crumb sample at 25°C. Dewpoint sensor reads 24.2°C (dew forms). aw = e(24.2°C)/e(25°C) = 3021/3169 = 0.953 (High aw, prone to mold - refrigerate!)"
    },
    referenceStandard: "AOAC 978.18 / ISO 21807 / IS 5402 / ASTM E104",
    reagentsAndApparatus: [
      "Chilled-Mirror Dewpoint Water Activity Meter (Aqualab, Rotronic)",
      "Disposable Sample Cups (10-15g capacity)",
      "Standard Salt Solutions for Calibration (LiCl aw=0.113, MgCl2 aw=0.328, NaCl aw=0.753)",
      "Temperature-controlled Environment (25°C ± 0.5°C)"
    ],
    prescribedLimit: "Chocolate: <0.5 | Hard Biscuit: <0.4 | Soft Cookie: 0.5-0.7 | Cake: 0.7-0.9 | Bread: 0.94-0.97 | Shelf-stable: <0.85",
    riskIfFailed: "Mold growth, yeast fermentation, texture defects, Maillard browning, lipid oxidation acceleration, reduced shelf life.",
    procedureSteps: [
      "Turn on aw meter 30 min before use; verify calibration with standard salt solutions.",
      "Grind/homogenize sample if heterogeneous; fill sample cup to 2/3 capacity.",
      "Place cup in measurement chamber; close lid completely.",
      "Allow 5-15 minutes for temperature and moisture equilibration.",
      "Record aw reading when stable (change <0.001 per minute).",
      "Report aw to 3 decimal places along with sample temperature."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Instrument Calibration",
        title: "Multi-point Salt Calibration",
        action: "Verify aw meter with LiCl (0.113), MgCl2 (0.328), NaCl (0.753) standards.",
        scientificMechanism: "Standard salt solutions produce known aw values based on colligative properties.",
        controlPoint: "CCP 1: All 3 salt readings must be within ±0.005 of certified values.",
        reagentsInvolved: ["Salt Standards"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Sample Loading",
        title: "Representative Sample Placement",
        action: "Fill sample cup 2/3 with homogenized sample; place in chamber.",
        scientificMechanism: "Sufficient sample mass ensures headspace vapor pressure reaches true equilibrium.",
        controlPoint: "CCP 2: Sample must cover cup bottom completely; no gaps.",
        reagentsInvolved: ["Sample Cup"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Temperature Equilibration",
        title: "Thermal Stabilization",
        action: "Allow 5-10 min for sample and chamber to reach thermal equilibrium at 25°C.",
        scientificMechanism: "aw is temperature-dependent; equilibration essential for accurate reading.",
        controlPoint: "CCP 3: Sample-chamber ΔT must be <0.5°C.",
        reagentsInvolved: ["Temperature Control"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Dewpoint Measurement",
        title: "Chilled Mirror Vapor Detection",
        action: "Sensor cools mirror until dew forms; optical detector identifies dewpoint.",
        scientificMechanism: "Temperature at first dew formation = dewpoint = direct measure of vapor pressure.",
        controlPoint: "CCP 4: Reading must stabilize; drift <0.001 aw/min.",
        reagentsInvolved: ["Dewpoint Sensor"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Shelf-Life Prediction & Audit",
        title: "Microbial Risk Classification",
        action: "Classify aw against microbial thresholds; determine storage/packaging needs.",
        scientificMechanism: "aw predicts microbial growth potential and non-enzymatic browning rates.",
        controlPoint: "Quality Gate: aw > 0.85 = requires preservatives or refrigeration.",
        reagentsInvolved: ["Classification Chart"]
      }
    ]
  ,
    factorsExplanation: [
    {
        "question": "Water activity (aw) biscuit crispness aur microbial stability ko kaise control karti hai?",
        "answer": "1. Biscuits ka critical crispness limit aw ~0.35-0.40 hota hai. Isse upar starch-protein glassy state se rubbery state mein transition hota hai (glass transition T_g), aur biscuit soggy ho jaata hai.\n2. aw < 0.60 hone par koi bhi mold, yeast ya bacteria metabolically multiply nahi kar sakta."
    }
],
    factorsSummaryTable: [
    {
        "parameter": "Measuring Principle",
        "value": "Chilled-Mirror Dewpoint",
        "reason": "Primary thermodynamic equilibrium vapor pressure determination"
    },
    {
        "parameter": "Chamber Temperature",
        "value": "25.0°C ± 0.2°C",
        "reason": "Strict temperature control eliminates vapor pressure drift"
    }
]
  },

  // 7. CHEMICAL TEST: Ash Content & Alkalinity of Ash
  {
    id: "bakery-chem-4",
    category: "Bakery & Confectionery",
    testType: "Chemical",
    productName: "Biscuits, Cookies, Cake, Chocolate, Cocoa Powder",
    testName: "Total Ash Content & Ash Alkalinity Determination",
    shortSummary: "Determines mineral content by high-temperature incineration and measures ash alkalinity indicating cocoa alkalization treatment level.",
    detailedScientificRationale:
      "Ash represents inorganic residue after complete combustion of organic matter at 550°C. In bakery products, ash content indicates: (1) mineral fortification levels (Ca, Fe, K); (2) adulteration with inorganic fillers (chalk, talc); (3) flour extraction rate (whole wheat vs refined); (4) cocoa alkalization degree (Dutch-processed cocoa).\n\nAsh Alkalinity is critical for Dutch-processed cocoa/chocolate: raw cocoa is naturally acidic (pH 5.0-5.8) with astringent flavor. Alkalization with K2CO3 or NaOH neutralizes acids, darkens color, mellows flavor, and increases solubility. Ash alkalinity quantifies alkalization intensity - typical Dutch cocoa: 20-40 mL 0.1N HCl/g ash.",
    detailedTestPrinciple:
      "Sample is ignited at 550°C in muffle furnace until white/grey ash forms (indicating complete carbon oxidation). Ash is weighed gravimetrically. For alkalinity: ash is dissolved in hot water, indicator added, and titrated against standardized HCl to determine alkaline mineral content.",
    chemicalEquation: "Organic Matter + O2 (550°C) ⟶ CO2 ↑ + H2O ↑ + Inorganic Ash Oxides/Carbonates\n\nK2CO3 (Ash) + 2 HCl ⟶ 2 KCl + H2O + CO2 ↑",
    formulaBreakdown: {
      formula: "% Ash = [(W2 - W0) / (W1 - W0)] × 100  |  Ash Alkalinity = (V × N × 1000) / W",
      variables: [
        { symbol: "W0", description: "Weight of empty crucible (g)" },
        { symbol: "W1", description: "Weight of crucible + sample before ashing (g)" },
        { symbol: "W2", description: "Weight of crucible + ash after ignition (g)" },
        { symbol: "V", description: "Volume of 0.1N HCl consumed (mL)" },
        { symbol: "N", description: "Normality of HCl (typically 0.1N)" },
        { symbol: "1000", description: "Conversion factor (mL to L equivalent basis)" },
        { symbol: "W", description: "Weight of ash titrated (g)" }
      ],
      derivation: "Ash % from gravimetric conservation of inorganic mass. Ash Alkalinity expressed as mL 0.1N HCl required to neutralize 1g ash, derived from stoichiometric neutralization of alkaline earth carbonates and oxides.",
      factorOrigin: "550°C selected because: (1) Complete organic oxidation; (2) Below volatilization of chlorides (NaCl decomposes >800°C); (3) Prevents carbonate decomposition (K2CO3 stable to 891°C); (4) Standardized by AOAC 923.03. Duration 4-6 hours empirically determined for complete carbon burn-out. Ash alkalinity 0.1N HCl chosen for optimum sensitivity in cocoa product range.",
      unitAnalysis: "% Ash = [g/g] × 100 = %  |  Alkalinity = [mL × N × 1000]/g = mL 0.1N HCl / 100g",
      practicalExample: "Cocoa sample: W0=25.4523g, W1=27.4523g, W2=25.5723g. % Ash = [(25.5723-25.4523)/(27.4523-25.4523)] × 100 = [0.12/2.00] × 100 = 6.00%\n\nAlkalinity: V=4.5mL, N=0.1, W=0.5g. AA = (4.5 × 0.1 × 1000)/0.5 = 900 mL 0.1N HCl/100g"
    },
    referenceStandard: "AOAC 923.03 / IS 1155 / IS 1163 (Cocoa) / FSSAI Manual 03 / ISO 2171",
    reagentsAndApparatus: [
      "Muffle Furnace (550°C ± 10°C)",
      "Silica or Porcelain Crucibles (30mL, pre-ignited)",
      "Analytical Balance (0.0001g precision)",
      "Standardized 0.1N HCl",
      "Methyl Orange Indicator (0.1%)",
      "Desiccator with Silica Gel"
    ],
    prescribedLimit: "Biscuits Ash: Max 3.0% | Cocoa Ash: Max 12.0% | Chocolate Ash: 2.5-4.5% | Cocoa Ash Alkalinity: Natural <20 mL, Dutch 20-40 mL 0.1N HCl/100g",
    riskIfFailed: "Adulteration with inorganic fillers, incorrect alkalization causing off-flavors, mineral content non-compliance.",
    procedureSteps: [
      "Ignite empty silica crucible at 550°C for 1 hour; cool in desiccator; weigh (W0).",
      "Accurately weigh 2-5g dried sample into crucible (W1).",
      "Char sample slowly on hot plate until no smoke evolves (avoid flames).",
      "Transfer to muffle furnace at 550°C for 4-6 hours until white/light grey ash forms.",
      "Cool in desiccator for 30 min; weigh (W2). Calculate % Ash.",
      "For Alkalinity: Dissolve ash in 25mL hot distilled water; add 3 drops methyl orange; titrate with 0.1N HCl to pink endpoint."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Crucible Preparation",
        title: "Crucible Constant Weight",
        action: "Pre-ignite silica crucible at 550°C; cool and weigh W0.",
        scientificMechanism: "Eliminates organic contaminants and adsorbed moisture from crucible surface.",
        controlPoint: "CCP 1: Weight must be constant (±0.0002g) between successive ignitions.",
        reagentsInvolved: ["Silica Crucible"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Sample Charring",
        title: "Pre-ashing on Hot Plate",
        action: "Char sample slowly on hot plate until smoke evolution stops.",
        scientificMechanism: "Slow pre-combustion prevents sample loss due to sudden flame-up in muffle furnace.",
        controlPoint: "CCP 2: No open flames; heat gradually to prevent sample loss.",
        reagentsInvolved: ["Hot Plate"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Muffle Furnace Ignition",
        title: "High-temperature Combustion",
        action: "Transfer to muffle at 550°C; ignite for 4-6 hours until white ash forms.",
        scientificMechanism: "Complete combustion oxidizes all organic carbon to CO2 leaving only inorganic residue.",
        controlPoint: "CCP 3: Ash color must be white/light grey; black spots indicate incomplete combustion.",
        reagentsInvolved: ["Muffle Furnace"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Ash Dissolution & Titration",
        title: "Alkalinity Measurement",
        action: "Dissolve ash in hot water; titrate with 0.1N HCl to methyl orange endpoint.",
        scientificMechanism: "HCl neutralizes alkaline carbonates and oxides from cocoa alkalization treatment.",
        controlPoint: "CCP 4: Methyl orange changes yellow → pink at pH 3.1-4.4.",
        reagentsInvolved: ["0.1N HCl", "Methyl Orange"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Adulteration & Alkalization Audit",
        title: "Mineral Compliance Assessment",
        action: "Compare ash % against FSSAI limits; classify cocoa alkalization intensity.",
        scientificMechanism: "Excess ash indicates inorganic filler adulteration; alkalinity confirms Dutching.",
        controlPoint: "Quality Gate: Ash > 3% in refined biscuit = mineral filler adulteration.",
        reagentsInvolved: ["Compliance Records"]
      }
    ]
  ,
    factorsExplanation: [
    {
        "question": "Dutch cocoa powder mein ash alkalinity kyun test ki jaati hai?",
        "answer": "1. Cocoa beans ki natural acidity (pH 5.2-5.6) ko neutralize karne aur rich dark color dene ke liye Dutch processing mein potassium carbonate (K2CO3) use hota hai.\n2. FSSAI limit: Alkalinity of soluble ash maximum 5.0% (as K2CO3 on fat-free dry basis) honi chahiye taaki excessive chemical treatment na ho."
    }
],
    factorsSummaryTable: [
    {
        "parameter": "Muffle Temperature",
        "value": "550°C - 600°C",
        "reason": "Complete organic matter incineration without potassium salt volatilization"
    },
    {
        "parameter": "Titrant",
        "value": "0.1 N HCl (Methyl Orange)",
        "reason": "Measures total alkaline potassium carbonate equivalents"
    }
]
  },

  // 8. MICROBIOLOGICAL TEST: Yeast & Mold Count
  {
    id: "bakery-micro-2",
    category: "Bakery & Confectionery",
    testType: "Microbiological",
    productName: "Bread, Cake, Pastry, Biscuit, Cookies, Cream Filled Products",
    testName: "Yeast & Mold Count (Total Fungal Count) - IS 5403 / ISO 21527",
    shortSummary: "Enumerates viable yeasts and molds in bakery products to assess fungal spoilage potential and hygiene of production environment.",
    detailedScientificRationale:
      "Yeasts and molds are primary spoilage organisms in bakery products due to their ability to grow at lower aw (>0.60) than bacteria (>0.90). Common bakery spoilers include: Rhizopus stolonifer (black bread mold), Penicillium spp. (green/blue mold on cakes), Aspergillus spp. (produces aflatoxin B1 - hepatocarcinogen), Eurotium/Xerophilic molds (grow on jams, dry cakes), Saccharomyces (fermentative yeast in filled products).\n\nContamination sources: raw materials (flour, sugar, dried fruits), airborne spores in bakery, contaminated packaging, cross-contamination from moldy equipment. Molds produce mycotoxins (aflatoxin, ochratoxin) that survive baking and remain toxic even in cooked products.",
    detailedTestPrinciple:
      "Serial dilutions of sample in 0.1% peptone water are plated on selective media - Potato Dextrose Agar (PDA) acidified to pH 3.5 with tartaric acid, or Dichloran Rose Bengal Chloramphenicol (DRBC) agar. Low pH and chloramphenicol suppress bacterial growth while allowing fungal colonies to develop. Plates incubated at 25°C for 5 days; colonies counted and morphology examined.",
    chemicalEquation: "Fungal Spores + Moist Bakery Matrix (aw > 0.7) + Ambient O2 ⟶ Mycelial Growth + Conidia + Mycotoxins (Aflatoxin B1)",
    formulaBreakdown: {
      formula: "CFU/g = (N × D) / V  where reported as CFU per gram sample",
      variables: [
        { symbol: "N", description: "Number of typical colonies counted on plate (10-150 range for statistical validity)" },
        { symbol: "D", description: "Dilution factor (e.g., 10^-2 = 1/100 = 100)" },
        { symbol: "V", description: "Volume of dilution plated (mL, typically 1.0mL)" }
      ],
      derivation: "Standard plate count based on assumption that each viable propagule (spore or hyphal fragment) produces one visible colony (CFU). Serial dilution reduces sample concentration to countable range (10-150 colonies/plate).",
      factorOrigin: "PDA pH 3.5 selected because: (1) pH < 4.0 inhibits most bacteria (require pH 6.5-7.5); (2) Fungi tolerate acidic pH (optimal 3.5-6.0). Chloramphenicol 100mg/L in DRBC: broad-spectrum bacteriostatic, doesn't affect fungi. 25°C ± 1°C incubation optimum for mesophilic bakery molds. 5-day incubation allows slow-growing xerophilic fungi to develop.",
      unitAnalysis: "CFU/g = [colonies × dilution factor] / [mL plated × g/mL sample density] = Colony Forming Units per gram",
      practicalExample: "PDA plate from 10^-3 dilution shows 45 mold colonies + 12 yeast colonies. Total = 57. CFU/g = (57 × 1000)/1.0 = 57,000 CFU/g = 5.7 × 10^4 CFU/g (Exceeds bread limit of 100 CFU/g)"
    },
    referenceStandard: "IS 5403 / ISO 21527-1 (aw > 0.95) / ISO 21527-2 (aw < 0.95) / FSSAI Manual 14 / AOAC 997.02",
    reagentsAndApparatus: [
      "Potato Dextrose Agar (PDA) - acidified to pH 3.5 with 10% tartaric acid",
      "Dichloran Rose Bengal Chloramphenicol (DRBC) Agar",
      "0.1% Peptone Water Diluent",
      "Sterile Petri Dishes, Pipettes, Stomacher Bags",
      "Incubator (25°C ± 1°C)",
      "Colony Counter with Illuminated Base"
    ],
    prescribedLimit: "Bread: Max 100 CFU/g | Biscuits: Max 100 CFU/g | Cream-filled Cakes: Max 100 CFU/g | Chocolate: Max 50 CFU/g | Dry Products: Max 500 CFU/g",
    riskIfFailed: "Visible mold spoilage, mycotoxin (aflatoxin) contamination, allergic reactions, respiratory issues, product recalls.",
    procedureSteps: [
      "Aseptically weigh 25g sample into stomacher bag; add 225mL 0.1% peptone water; homogenize 2 min.",
      "Prepare serial dilutions: 10^-1, 10^-2, 10^-3, 10^-4 in peptone water.",
      "Pipette 1mL of each dilution into duplicate sterile Petri dishes.",
      "Pour ~15-20mL molten PDA (cooled to 45°C, pH 3.5) or DRBC; mix gently by swirling.",
      "Allow to solidify; invert plates and incubate at 25°C for 5 days.",
      "Count colonies daily; final count on day 5. Distinguish yeast (creamy, moist) from mold (fluffy, filamentous)."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Aseptic Sample Preparation",
        title: "Homogenization in Diluent",
        action: "Add 25g sample to 225mL 0.1% peptone water; stomacher 2 min.",
        scientificMechanism: "Peptone provides osmotic protection; homogenization releases embedded fungal propagules.",
        controlPoint: "CCP 1: All operations in Class 100 laminar flow hood.",
        reagentsInvolved: ["0.1% Peptone Water"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Decimal Dilution Series",
        title: "Serial 10-fold Dilutions",
        action: "Prepare 10^-1 to 10^-4 dilutions in sterile peptone water.",
        scientificMechanism: "Reduces microbial load to countable range (30-300 CFU/plate optimal).",
        controlPoint: "CCP 2: Use fresh pipette tip for each dilution to avoid carryover.",
        reagentsInvolved: ["Sterile Pipettes"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Pour Plate Inoculation",
        title: "Fungal Media Plating",
        action: "Pipette 1mL into Petri dish; pour PDA (pH 3.5) or DRBC; swirl gently.",
        scientificMechanism: "Acidified PDA/DRBC selectively supports fungal growth while suppressing bacteria.",
        controlPoint: "CCP 3: Agar temperature must be 45°C (hotter kills cells, cooler solidifies).",
        reagentsInvolved: ["PDA pH 3.5", "DRBC Agar"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Incubation & Growth",
        title: "5-Day Mesophilic Incubation",
        action: "Invert plates; incubate at 25°C ± 1°C for 5 days.",
        scientificMechanism: "Mesophilic temperature optimum for common bakery molds and yeasts.",
        controlPoint: "CCP 4: Do NOT stack more than 6 plates - inhibits O2 diffusion.",
        reagentsInvolved: ["Incubator 25°C"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Enumeration & Fungal ID",
        title: "Colony Counting & Morphology",
        action: "Count all colonies; identify yeast vs mold morphology; report CFU/g.",
        scientificMechanism: "Yeast forms creamy round colonies; mold forms filamentous colored colonies with spores.",
        controlPoint: "Quality Gate: CFU > 100/g in fresh bread = process contamination; investigate.",
        reagentsInvolved: ["Colony Counter"]
      }
    ]
  ,
    factorsExplanation: [
    {
        "question": "Bakery fungal counting mein DRBC medium par 25°C par 5 din kyun rakhte hain?",
        "answer": "1. Food-borne molds (Aspergillus, Penicillium, Eurotium) slow-growing hote hain aur mature spore head formation ke liye 5 din required hote hain.\n2. Dichloran aur Rose Bengal fast-spreading mucoraceous molds ki colony size ko restrict karte hain taaki crowding na ho."
    }
],
    factorsSummaryTable: [
    {
        "parameter": "Incubation Temp",
        "value": "25°C ± 1°C",
        "reason": "Optimum growth range for psychrotrophic and mesophilic fungi"
    },
    {
        "parameter": "Incubation Period",
        "value": "5 days",
        "reason": "Ensures full morphological colony differentiation"
    }
]
  },

  // 9. CHEMICAL TEST: Preservative Analysis (Sorbic & Benzoic Acid)
  {
    id: "bakery-chem-5",
    category: "Bakery & Confectionery",
    testType: "Chemical",
    productName: "Bread, Cake, Pastry, Cream-filled Products, Fruit-based Bakery",
    testName: "Sorbic Acid & Benzoic Acid Preservative Determination (HPLC-UV)",
    shortSummary: "Quantifies permitted chemical preservatives (potassium sorbate, sodium benzoate) in bakery products to verify FSSAI compliance and prevent overdose.",
    detailedScientificRationale:
      "Sorbic acid (E200) and Benzoic acid (E210) are Class II preservatives permitted in bakery products under strict FSSAI limits. Sorbic acid (as potassium sorbate) is antifungal - inhibits mold and yeast by disrupting cell membrane and enzyme systems (dehydrogenases). Benzoic acid (as sodium benzoate) is antibacterial - inhibits by lowering intracellular pH and blocking oxidative phosphorylation.\n\nOveruse causes: allergic reactions, hyperactivity in children (linked to benzoates), potential benzene formation (benzoate + ascorbic acid + heat). FSSAI limits: Sorbic acid max 1000 ppm in bakery, Benzoic acid max 750 ppm. Exceeding limits triggers regulatory action and product recall.",
    detailedTestPrinciple:
      "Sample is extracted with methanol-water (50:50) to solubilize preservatives. Extract is filtered, cleaned via C18 SPE cartridge (removes fats and pigments), and analyzed by reversed-phase HPLC with UV detection at 230nm (sorbic) and 254nm (benzoic). Retention times and peak areas are compared against certified reference standards for identification and quantification.",
    chemicalEquation: "K-Sorbate + Fungal Cell Membrane ⟶ Membrane Disruption + Enzyme Inhibition ⟶ Growth Cessation\n\nNa-Benzoate + Bacterial Cytoplasm (pH<5) ⟶ Undissociated HA form ⟶ Cellular Acidification + Death",
    formulaBreakdown: {
      formula: "Preservative (mg/kg) = (As × Cstd × Vf × D × 1000) / (Astd × W)",
      variables: [
        { symbol: "As", description: "Peak area of preservative in sample chromatogram" },
        { symbol: "Astd", description: "Peak area of certified reference standard" },
        { symbol: "Cstd", description: "Concentration of reference standard (μg/mL)" },
        { symbol: "Vf", description: "Final extract volume after cleanup (mL)" },
        { symbol: "D", description: "Dilution factor if additional dilution performed" },
        { symbol: "1000", description: "Conversion factor (g to kg, μg to mg)" },
        { symbol: "W", description: "Weight of original sample (g)" }
      ],
      derivation: "Based on external standard calibration and Beer-Lambert law. Peak area is directly proportional to analyte concentration passing through UV detector. Ratio of sample area to standard area (both at identical conditions) gives concentration ratio, allowing sample quantification.",
      factorOrigin: "UV wavelengths chosen based on maximum absorbance (λmax): sorbic acid 230nm (conjugated diene chromophore), benzoic acid 254nm (aromatic ring). C18 SPE column: octadecyl silica retains lipophilic contaminants while polar preservatives elute freely. Mobile phase methanol:phosphate buffer pH 4.5 provides optimal peak shape for both analytes. Sample weight 5g balances detection sensitivity with matrix effect minimization.",
      unitAnalysis: "[area × μg/mL × mL × unitless × 1000] / [area × g] = μg/g × 1000 = mg/kg = ppm",
      practicalExample: "Cake sample 5.00g extracted to 50mL. Sorbate peak area = 15,250; standard area (5 μg/mL) = 12,500. Sorbate = (15,250 × 5 × 50 × 1 × 1000)/(12,500 × 5,000) = 61 mg/kg (Well below 1000 ppm limit)"
    },
    referenceStandard: "AOAC 979.08 / IS 3958 / FSSAI Manual 05 / EN 12856",
    reagentsAndApparatus: [
      "HPLC System with UV Detector (200-400nm range)",
      "C18 Reversed-Phase Column (250mm × 4.6mm, 5μm)",
      "Certified Sorbic Acid & Benzoic Acid Standards (99%+ purity)",
      "HPLC-grade Methanol, Phosphate Buffer pH 4.5",
      "C18 SPE Cartridges (500mg/6mL)",
      "0.45μm PTFE Syringe Filters"
    ],
    prescribedLimit: "Sorbic Acid: Max 1000 ppm (mg/kg) | Benzoic Acid: Max 750 ppm | Combined: Total preservatives max 1500 ppm",
    riskIfFailed: "Consumer allergic reactions, hyperactivity (children), potential carcinogenic benzene formation, regulatory violation, product seizure.",
    procedureSteps: [
      "Homogenize 5g sample; extract with 25mL methanol-water (50:50) by shaking 30 min.",
      "Filter extract through Whatman No.1 paper into 50mL volumetric flask; make up to volume.",
      "Condition C18 SPE with 5mL methanol then 5mL water; load 5mL extract; wash 5mL water; elute with 5mL methanol.",
      "Filter eluate through 0.45μm PTFE; transfer to HPLC vial.",
      "Inject 20μL into HPLC; mobile phase methanol:phosphate buffer pH 4.5 (30:70); flow 1.0 mL/min; UV 230nm & 254nm.",
      "Compare retention times and peak areas with standards; quantify preservatives."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Sample Extraction",
        title: "Aqueous-Methanolic Extraction",
        action: "Extract 5g sample with 25mL methanol-water (50:50) for 30 min.",
        scientificMechanism: "Polar-organic mixture dissolves both preservatives while precipitating proteins.",
        controlPoint: "CCP 1: Complete extraction verified by re-extraction test (<5% residual).",
        reagentsInvolved: ["Methanol", "Water"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: SPE Cleanup",
        title: "C18 Solid-Phase Extraction",
        action: "Load extract through C18 SPE; wash and elute with methanol.",
        scientificMechanism: "Removes fats, pigments, and matrix interferences; concentrates target analytes.",
        controlPoint: "CCP 2: SPE cartridge must not run dry between steps.",
        reagentsInvolved: ["C18 SPE Cartridge"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: HPLC Separation",
        title: "Reversed-Phase Chromatography",
        action: "Inject 20μL into HPLC; separate on C18 column with methanol-buffer gradient.",
        scientificMechanism: "Analytes partition between polar mobile phase and non-polar stationary phase.",
        controlPoint: "CCP 3: System suitability - RSD peak area <2%, resolution >1.5.",
        reagentsInvolved: ["Mobile Phase"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: UV Detection & Quantification",
        title: "Dual-Wavelength Detection",
        action: "Monitor sorbate at 230nm, benzoate at 254nm; measure peak areas.",
        scientificMechanism: "Analytes absorb UV at specific wavelengths; area proportional to concentration.",
        controlPoint: "CCP 4: Confirm identity via retention time (±2%) AND spectral match.",
        reagentsInvolved: ["UV Detector"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Regulatory Compliance Audit",
        title: "FSSAI Limit Verification",
        action: "Calculate mg/kg; compare against FSSAI limits (Sorbate 1000, Benzoate 750 ppm).",
        scientificMechanism: "Ensures preservative use within safe consumption levels.",
        controlPoint: "Quality Gate: Any exceedance = batch reject + FBO investigation.",
        reagentsInvolved: ["Calculation Sheet"]
      }
    ]
  ,
    factorsExplanation: [
    {
        "question": "Sorbic acid aur Benzoic acid ko alag-alag UV wavelengths par kyun measure karte hain?",
        "answer": "1. Sorbic acid ek conjugated diene carboxylic acid hai jiska UV absorbance maximum 254 nm par hota hai.\n2. Benzoic acid ek aromatic ring system hai jiska primary absorption maximum 227 nm par hota hai. HPLC photodiode array detector (DAD) dono ko simultaneously baseline resolve karta hai."
    }
],
    factorsSummaryTable: [
    {
        "parameter": "Sorbic Acid Wavelength",
        "value": "254 nm",
        "reason": "Molar absorptivity peak of conjugated diene chromophore"
    },
    {
        "parameter": "Benzoic Acid Wavelength",
        "value": "227 nm",
        "reason": "Characteristic benzene ring UV absorption peak"
    }
]
  },

  // 10. CHEMICAL TEST: Aflatoxin B1 in Cereal-Based Products
  {
    id: "bakery-chem-6",
    category: "Bakery & Confectionery",
    testType: "Chemical",
    productName: "Biscuits, Cookies, Bread, Cake, Cocoa Powder, Chocolate",
    testName: "Aflatoxin B1 Determination (Immunoaffinity Cleanup + HPLC-FLD)",
    shortSummary: "Detects and quantifies carcinogenic mycotoxin Aflatoxin B1 in cereal/cocoa-based bakery products at ppb (μg/kg) levels for consumer safety.",
    detailedScientificRationale:
      "Aflatoxin B1 (AFB1) is a Group 1 carcinogen (IARC classification) produced by Aspergillus flavus and A. parasiticus contaminating cereals (wheat, corn, rice), nuts, and cocoa beans. AFB1 is heat-stable (survives baking 200°C+) and remains toxic in finished bakery products. Chronic exposure causes hepatocellular carcinoma (liver cancer), immune suppression, growth retardation in children.\n\nAFB1 acts by metabolic activation via cytochrome P450 to reactive epoxide, forming DNA adducts causing tumor-initiating mutations. FSSAI limits: 15 μg/kg AFB1 in cereals and derivatives, 10 μg/kg in cocoa. Testing critical for imported raw materials and finished products.",
    detailedTestPrinciple:
      "Sample is extracted with methanol-water (80:20) containing NaCl to release AFB1 from matrix. Extract is filtered and passed through immunoaffinity column (IAC) containing anti-aflatoxin monoclonal antibodies covalently bound to solid support. AFB1 selectively binds antibodies while matrix components pass through. Bound AFB1 is eluted with methanol, derivatized (if needed), and analyzed by HPLC with Fluorescence Detection (FLD) using excitation 360nm, emission 440nm.",
    chemicalEquation: "AFB1 (Aspergillus flavus contamination) + Cytochrome P450 (Liver) ⟶ AFB1-8,9-epoxide ⟶ AFB1-Guanine DNA Adduct ⟶ p53 Mutation ⟶ Hepatocellular Carcinoma",
    formulaBreakdown: {
      formula: "AFB1 (μg/kg) = (As × Cstd × Ve × 1000) / (Astd × Vi × W)",
      variables: [
        { symbol: "As", description: "Peak area of AFB1 in sample" },
        { symbol: "Astd", description: "Peak area of AFB1 in reference standard" },
        { symbol: "Cstd", description: "Concentration of AFB1 standard (ng/mL)" },
        { symbol: "Ve", description: "Final eluate volume from IAC (mL, typically 1.5mL)" },
        { symbol: "Vi", description: "Injection volume (μL, typically 100μL)" },
        { symbol: "1000", description: "Conversion factor (g to kg)" },
        { symbol: "W", description: "Weight of original sample (g)" }
      ],
      derivation: "Based on Beer-Lambert Law for fluorescence emission. Fluorescence intensity is directly proportional to fluorophore concentration at low concentrations (linear range 1-50 ng/mL). External standard calibration converts peak area to concentration.",
      factorOrigin: "Excitation 360nm / Emission 440nm chosen because AFB1's coumarin structure exhibits maximum fluorescence at these wavelengths. Post-column derivatization with bromine or KOBr enhances AFB1 fluorescence 10-fold. Methanol-water 80:20 optimum extraction efficiency (95%+). IAC selectivity: monoclonal antibodies recognize AFB1 specifically (cross-reactivity <5% with AFG1, AFM1). Detection limit 0.05 μg/kg well below regulatory limit of 15 μg/kg.",
      unitAnalysis: "[area × ng/mL × mL × 1000] / [area × μL × g] = ng/g × 1000 = μg/kg = ppb",
      practicalExample: "Cocoa sample 25g extracted, purified via IAC, eluted in 1.5mL, injected 100μL. Sample AFB1 area = 8,750; standard (5 ng/mL) area = 12,500. AFB1 = (8,750 × 5 × 1.5 × 1000)/(12,500 × 100 × 25) = 2.10 μg/kg (Well below 10 ppb limit)"
    },
    referenceStandard: "AOAC 2005.08 / IS 15625 / EU Regulation 401/2006 / FSSAI Manual 12 / ISO 16050",
    reagentsAndApparatus: [
      "HPLC System with Fluorescence Detector (Ex 360nm, Em 440nm)",
      "C18 HPLC Column (150mm × 4.6mm, 5μm)",
      "Immunoaffinity Cleanup Columns (Aflatest, AflaCLEAN)",
      "Certified AFB1 Reference Standard (in acetonitrile)",
      "HPLC-grade Methanol, Acetonitrile, Water",
      "Post-column Derivatization Kobra Cell (electrochemical Br generation)"
    ],
    prescribedLimit: "AFB1 in Cereals/Derivatives: Max 15 μg/kg | Cocoa/Chocolate: Max 10 μg/kg | Infant Foods: Max 0.1 μg/kg (EU strict)",
    riskIfFailed: "Hepatocellular carcinoma (liver cancer), immune suppression, growth retardation in children, immediate product recall, criminal liability.",
    procedureSteps: [
      "Grind 50g sample; extract 25g with 100mL methanol-water (80:20) + 5g NaCl by blending 3 min.",
      "Filter through Whatman No.4; dilute 10mL filtrate with 40mL PBS.",
      "Condition IAC with 10mL PBS; load 50mL diluted extract at 1-2 mL/min flow rate.",
      "Wash IAC with 20mL PBS then 5mL water; dry column briefly with air.",
      "Elute AFB1 with 1.5mL methanol; collect in amber HPLC vial.",
      "Inject 100μL into HPLC; mobile phase water:methanol:acetonitrile (60:20:20); flow 1.0mL/min.",
      "Use post-column bromine derivatization for enhanced fluorescence; quantify via calibration curve."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Sample Extraction",
        title: "Salt-Assisted Methanolic Extraction",
        action: "Extract 25g sample with methanol-water-NaCl by blending 3 min.",
        scientificMechanism: "NaCl salts-out matrix proteins while methanol dissolves lipophilic aflatoxin.",
        controlPoint: "CCP 1: Complete homogenization; avoid emulsion formation.",
        reagentsInvolved: ["Methanol-Water", "NaCl"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Immunoaffinity Purification",
        title: "Antibody-Based Selective Capture",
        action: "Load extract through IAC; wash matrix; elute AFB1 with methanol.",
        scientificMechanism: "Monoclonal antibodies specifically bind AFB1 via 3D antigen-antibody complementarity.",
        controlPoint: "CCP 2: Flow rate 1-2 mL/min; do NOT exceed 3 mL/min (reduces binding).",
        reagentsInvolved: ["IAC Column"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: HPLC Injection & Separation",
        title: "Reversed-Phase Chromatographic Separation",
        action: "Inject 100μL eluate; separate on C18 with water-methanol-acetonitrile.",
        scientificMechanism: "AFB1 partitions between polar mobile and non-polar C18 stationary phases.",
        controlPoint: "CCP 3: Retention time reproducibility ±2% between runs.",
        reagentsInvolved: ["Mobile Phase"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Post-Column Derivatization & FLD",
        title: "Bromine Enhancement of Fluorescence",
        action: "Post-column Kobra cell generates Br2 in situ; enhances AFB1 fluorescence 10-fold.",
        scientificMechanism: "Bromination of AFB1 coumarin ring increases quantum yield of fluorescence emission.",
        controlPoint: "CCP 4: Kobra cell current 100μA; consistent bromine generation.",
        reagentsInvolved: ["Kobra Cell", "FLD"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Safety Compliance & Reporting",
        title: "Regulatory Verification & Risk Assessment",
        action: "Quantify AFB1; compare against FSSAI limits; issue safety certificate.",
        scientificMechanism: "Ensures aflatoxin exposure below carcinogenic threshold.",
        controlPoint: "Quality Gate: AFB1 > 15 μg/kg = Immediate recall + FSSAI notification.",
        reagentsInvolved: ["Safety Certificate"]
      }
    ]
  ,
    factorsExplanation: [
    {
        "question": "Cocoa aur nuts mein Aflatoxin B1 test mein Immunoaffinity Column (IAC) kyun zaroori hai?",
        "answer": "1. Cocoa aur nuts mein polyphenols, tannins aur natural pigments high amounts mein hote hain jo direct HPLC mein fluorescent interference paida karte hain.\n2. IAC columns par immobilized monoclonal antibodies sirf Aflatoxins ko bind karti hain aur saare matrix interferents wash ho jaate hain."
    }
],
    factorsSummaryTable: [
    {
        "parameter": "IAC Specificity",
        "value": "Monoclonal Anti-Aflatoxin",
        "reason": "Selective extraction with 95%+ recovery from complex cocoa matrix"
    },
    {
        "parameter": "FSSAI Limit",
        "value": "Max 15 µg/kg (ppb) B1",
        "reason": "Strict statutory liver carcinogen limit"
    }
]
  },

  // 11. PHYSICAL TEST: Texture Analysis (Hardness, Fracturability)
  {
    id: "bakery-phys-3",
    category: "Bakery & Confectionery",
    testType: "Physical",
    productName: "Biscuits, Cookies, Wafers, Rusk, Hard Candy, Chocolate",
    testName: "Texture Profile Analysis (TPA) - Hardness & Fracturability",
    shortSummary: "Objectively measures mechanical properties (hardness, snap, brittleness) of baked goods using texture analyzer to ensure consistent consumer eating experience.",
    detailedScientificRationale:
      "Texture is a critical quality parameter directly linked to consumer acceptance. Objective texture measurement replaces subjective sensory evaluation, providing reproducible quality control data. Key parameters:\n\n• Hardness: Peak force required to compress/break sample - correlates with sensory 'firmness'\n• Fracturability: Force at first significant break - indicates 'crispness' or 'snap'\n• Chewiness: Energy required for chewing to swallowable consistency\n• Cohesiveness: Extent to which sample deforms before breaking\n\nBiscuit crispness declines with moisture absorption above aw 0.4. Chocolate snap depends on cocoa butter polymorphism (Form V β-crystals give crisp snap; Form IV gives dull texture). Wafer crunchiness relates to layer thickness and air incorporation.",
    detailedTestPrinciple:
      "Sample is placed on a fixed base; a probe (cylindrical, blade, or spherical) moves down at controlled speed (typically 1-5 mm/s) compressing/penetrating sample. Load cell records force (N) versus displacement (mm), generating characteristic force-deformation curve. Peak force = hardness; first significant peak = fracturability; area under curve = work of fracture.",
    chemicalEquation: "Applied Force (N) → Sample Deformation → Structural Failure (fracture) at Yield Point → Peak Force Recorded",
    formulaBreakdown: {
      formula: "Hardness (N) = Peak Force  |  Fracturability (N) = Force at First Peak  |  Work (N·mm) = ∫F·dx",
      variables: [
        { symbol: "F", description: "Force applied by probe (Newtons, N)" },
        { symbol: "d", description: "Distance/displacement of probe (mm)" },
        { symbol: "v", description: "Test speed (mm/s, typically 1-5)" },
        { symbol: "Peak Force", description: "Maximum force recorded during test (N)" },
        { symbol: "Area", description: "Area under Force-Distance curve = Work of Fracture (N·mm = mJ)" }
      ],
      derivation: "Based on Newton's Second Law (F = ma) and Hooke's Law for elastic deformation. Force measured by load cell; distance measured by encoder. Integration of force over displacement gives work (energy) - fundamental thermodynamic property indicating structural strength.",
      factorOrigin: "Test speed 1-5 mm/s optimized to mimic human bite speed (~10 mm/s adjusted for laboratory precision). Probe geometry: Warner-Bratzler blade for biscuit snap, 3-point bend rig for wafer/cookie, cylindrical for chocolate penetration. Load cell 50-500N range covers full bakery product spectrum. Data acquisition 200 Hz captures rapid brittle fractures.",
      unitAnalysis: "Hardness: N (Newton) = kg·m/s²  |  Work: N·mm = mJ (millijoule)",
      practicalExample: "Cream cracker biscuit tested with 3-point bend. Peak force = 45 N; first fracture at 42 N; work of fracture = 85 mJ. Compared to standard (50N ± 8N): Acceptable range. Consumer 'crispy' rating expected."
    },
    referenceStandard: "IS 14758 / ASTM D5227 / AACC 74-09 / Texture Technologies Standard Methods",
    reagentsAndApparatus: [
      "Texture Analyzer (TA-XT Plus, Instron, Shimadzu)",
      "Load Cell (5kg / 50N or 25kg / 250N depending on product)",
      "Probes: Warner-Bratzler Blade, 3-point Bend Rig, Cylindrical (P/2), Spherical (P/0.25)",
      "Sample Cutting Templates for Uniform Dimensions",
      "Data Acquisition Software (Exponent, TrapeziumX)"
    ],
    prescribedLimit: "Marie Biscuit Hardness: 40-60 N | Cream Cracker: 30-45 N | Chocolate Snap: 25-40 N | Rusk: 60-90 N",
    riskIfFailed: "Consumer complaints about texture (too hard/soft), inconsistent product quality, brand image damage, market rejection.",
    procedureSteps: [
      "Calibrate texture analyzer with certified weights (5kg + 10kg standards).",
      "Select appropriate probe (3-point bend for biscuit, P/2 cylindrical for chocolate).",
      "Set test parameters: Pre-test speed 2 mm/s, Test speed 1 mm/s, Post-test 10 mm/s, Distance 5mm.",
      "Prepare sample: Cut to standard dimensions using template (e.g., biscuit 20mm × 20mm).",
      "Place sample on base; probe compresses/penetrates at set speed.",
      "Software records force-time curve; identify peaks and calculate parameters.",
      "Repeat 10 measurements; report mean ± SD for statistical validity."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Instrument Calibration",
        title: "Load Cell Force Verification",
        action: "Calibrate with certified 5kg and 10kg standard weights.",
        scientificMechanism: "Ensures accurate force measurement based on strain gauge deformation.",
        controlPoint: "CCP 1: Calibration error must be <0.5% for regulatory compliance.",
        reagentsInvolved: ["Standard Weights"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Probe & Method Selection",
        title: "Product-Specific Test Configuration",
        action: "Choose probe and speed based on product type (blade for biscuit, cylinder for chocolate).",
        scientificMechanism: "Different geometries stress product in specific modes (bending, compression, penetration).",
        controlPoint: "CCP 2: Method must be validated against sensory panel data.",
        reagentsInvolved: ["Probe Set"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Sample Standardization",
        title: "Dimensional Uniformity Preparation",
        action: "Cut samples to standard size using template; ensure flat surfaces.",
        scientificMechanism: "Uniform geometry eliminates dimensional variability in force measurement.",
        controlPoint: "CCP 3: Dimensional tolerance ±0.5mm; discard non-uniform samples.",
        reagentsInvolved: ["Cutting Template"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Force-Deformation Testing",
        title: "Mechanical Property Measurement",
        action: "Run test; software records force vs. time/distance curve.",
        scientificMechanism: "Probe deforms sample until structural failure; load cell converts to electrical signal.",
        controlPoint: "CCP 4: Test speed constant throughout; no jerky motion.",
        reagentsInvolved: ["Texture Analyzer"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Statistical Analysis & QC Gate",
        title: "Multi-Sample Data Analysis",
        action: "Test 10 replicates; calculate mean, SD; compare against spec limits.",
        scientificMechanism: "Statistical analysis ensures batch texture within consumer acceptance range.",
        controlPoint: "Quality Gate: CV >15% indicates process inconsistency - investigate.",
        reagentsInvolved: ["Statistical Software"]
      }
    ]
  ,
    factorsExplanation: [
    {
        "question": "Texture Analyzer par 3-point bend test biscuit snap quality ko kaise quantify karta hai?",
        "answer": "1. Biscuit ko do parallel supports par rakh kar center mein blade probe se compress kiya jaata hai.\n2. Peak fracture force (Newtons) biscuit ki structural hardness measure karti hai; fracture tak ka displacement biscuit ki brittleness/crispness batata hai."
    }
],
    factorsSummaryTable: [
    {
        "parameter": "Probe Type",
        "value": "3-Point Bending Rig",
        "reason": "Simulates incisor teeth snapping force on biscuits"
    },
    {
        "parameter": "Test Speed",
        "value": "1.0 mm/s",
        "reason": "Standard deformation rate avoiding viscoelastic relaxation"
    }
]
  }
,
// 12. CHEMICAL TEST: Acid Insoluble Ash
  {
    id: "bakery-chem-7",
    category: "Bakery & Confectionery",
    testType: "Chemical",
    productName: "Biscuits, Cookies, Bread, Rusk, Cakes",
    testName: "Acid Insoluble Ash (AIA / Sand & Silica Contamination)",
    shortSummary: "Measures extraneous sand, silica, and grinding stone dust in baked products via 10% dilute HCl digestion.",
    detailedScientificRationale:
      "Acid Insoluble Ash (AIA) quantifies silica, quartz, and earthy grit derived from poorly cleaned grain flour, contaminated dusting starches, or stone wear during milling. FSSAI specifies strict statutory limits (Biscuits: Max 0.05%, Bread: Max 0.10%). Excess grit causes dental damage and gastrointestinal irritation.",
    detailedTestPrinciple:
      "Total ash obtained at 550°C is boiled with 10% dilute hydrochloric acid. Physiological bone and plant minerals dissolve into soluble chlorides, while insoluble crystalline silica particles remain. The residue is filtered through ashless filter paper (Whatman 41), washed acid-free, re-ignited at 600°C, and weighed.",
    chemicalEquation: "Mineral Residue + 10% HCl ⟶ Soluble Chlorides (Ca, Mg, K) + Insoluble Silica (Sand) [Gravimetric Ash]",
    formulaBreakdown: {
      formula: "% Acid Insoluble Ash (dry basis) = [ (W_aia) / Sample Weight ] × [ 100 / (100 - M) ] × 100",
      variables: [
        { symbol: "W_aia", description: "Weight of final re-ignited silica ash residue (g)" },
        { symbol: "Sample Weight", description: "Initial biscuit/bread sample mass taken (g)" },
        { symbol: "M", description: "Moisture content of sample (%)" }
      ],
      derivation: "Standard gravimetric acid-digestion method per IS 1011 and IS 1483.",
      factorOrigin: "10% HCl selectively dissolves biological minerals without attacking quartz silica.",
      unitAnalysis: "% AIA = [g silica / g dry sample] × 100",
      practicalExample: "Sample = 5.00g Biscuits, Moisture = 3.5%, W_aia = 0.0018g. % AIA = (0.0018 / 5.00) × [100 / 96.5] × 100 = 0.037% (Within FSSAI Max 0.05% limit) ✓"
    },
    referenceStandard: "IS 1011:2002 / IS 1483:1988 / FSSAI Manual 03",
    reagentsAndApparatus: [
      "10% v/v Dilute Hydrochloric Acid",
      "Whatman No. 41 / 42 Ashless Filter Paper",
      "Muffle Furnace (600°C)",
      "Silver Nitrate Solution (0.1 N) for acid-free washing check"
    ],
    prescribedLimit: "Biscuits: Max 0.05% | Bread: Max 0.10% | Cakes: Max 0.10%",
    riskIfFailed: "Dental damage from mineral grit, uncleaned raw flour adulteration.",
    procedureSteps: [
      "Ash 5.00g sample in a silica crucible at 550°C for 4 hours.",
      "Add 25 ml 10% dilute HCl to the ash, cover with watch glass, boil on water bath for 15 minutes.",
      "Filter through Whatman 41 ashless paper; wash with boiling distilled water until filtrate tests negative with 0.1N AgNO3.",
      "Fold filter paper, place back into crucible, dry on hot plate, and incinerate in muffle furnace at 600°C for 1 hour.",
      "Cool in desiccator for 30 minutes and weigh the silica ash."
    ],
    flowchartSteps: [
      { stepNumber: 1, phaseName: "Ashing", title: "Organic Combustion", action: "Ash 5g sample at 550°C.", scientificMechanism: "Destroys organic matter.", controlPoint: "Carbon-free ash." },
      { stepNumber: 2, phaseName: "Acid Digestion", title: "HCl Treatment", action: "Boil ash with 10% HCl for 15 min.", scientificMechanism: "Dissolves physiological salts.", controlPoint: "Water bath." },
      { stepNumber: 3, phaseName: "Filtration & Re-ashing", title: "Silica Isolation", action: "Filter on Whatman 41 and re-ash at 600°C.", scientificMechanism: "Isolates pure quartz silica.", controlPoint: "Ashless paper." }
    ],
    factorsExplanation: [
      {
        question: "Biscuits mein AIA ki limit itni strict (0.05%) kyun hoti hai?",
        answer: "Biscuits fine refined flour (maida) aur shortening se bante hain jisme natural mineral content bahut low hota hai. Agar AIA 0.05% se upar jaata hai to ye saaf darshata hai ki chakki stone wear hua hai, dusting flour mein mitti thi, ya cheap mineral filler add kiya gaya hai."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Statutory Limit", value: "Max 0.05% (Biscuits)", "reason": "Strict consumer safety limit against mineral grit and sand" }
    ]
  },

  // 13. MICROBIOLOGICAL TEST: Bacterial Rope Spores Spoilage Test
  {
    id: "bakery-micro-3",
    category: "Bakery & Confectionery",
    testType: "Microbiological",
    productName: "Bread, Buns, Pav, Rusk",
    testName: "Bacterial Rope Spores Spoilage Test (Heat-Shock Method for Bacillus subtilis)",
    shortSummary: "Heat-shock screening of flour and dough to detect thermoresistant Bacillus subtilis endospores causing sticky, melon-smelling rope bread spoilage.",
    detailedScientificRationale:
      "Bread baking core temperature reaches ~98-100°C, which kills vegetative bacteria and molds but fails to destroy endospores of Bacillus subtilis and Bacillus licheniformis. During warm and humid storage (28-35°C), surviving spores germinate, producing aggressive extracellular amylases and proteases. The bread crumb undergoes enzymatic liquefaction, turning sticky, brown, and forming slimy silken ropes with a sickening sweet cantaloupe melon odor. Early screening prevents catastrophic commercial bakery batch spoilage.",
    detailedTestPrinciple:
      "Flour or dough suspension is subjected to a heat-shock treatment at 80°C for 15 minutes. This thermal shock selectively destroys all vegetative cells while heat-activating spore germination. Serial dilutions are pour-plated into Dextrose Tryptone Agar (DTA) containing bromocresol purple and incubated at 37°C for 48 hours to enumerate rope-producing spore-forming units.",
    chemicalEquation: "Bacterial Endospore + Heat Shock (80°C, 15 min) ⟶ Germination ⟶ DTA Culture (37°C, 48h) ⟶ Rope Colony Count",
    formulaBreakdown: {
      formula: "Rope Spore Count (Spores/g) = [ Total Colonies on Plate × Dilution Factor ] / Sample Volume (ml)",
      variables: [
        { symbol: "Colonies", description: "Characteristic acid-producing slimy Bacillus colonies on DTA" },
        { symbol: "Dilution Factor", description: "Reciprocal of serial dilution plated (e.g., 10, 100)" }
      ],
      derivation: "Standard heat-shock thermal activation protocol for bacterial endospore enumeration.",
      factorOrigin: "80°C for 15 min eliminates vegetative flora without inactivating dipicolinic-acid protected endospores.",
      unitAnalysis: "Spores / g of flour or bread",
      practicalExample: "10g flour heat-shocked, 10^-1 dilution shows 1 colony on DTA ⟶ Rope Spores = 10 spores/g (Safe flour threshold < 20 spores/g) ✓"
    },
    referenceStandard: "IS 1483:1988 / Compendium of Methods for the Microbiological Examination of Foods",
    reagentsAndApparatus: [
      "Dextrose Tryptone Agar (DTA) with Bromocresol Purple",
      "Sterile Ringer Solution / Buffered Peptone Water",
      "Water Bath calibrated at exactly 80°C ± 0.5°C",
      "Incubator maintained at 37°C ± 1°C"
    ],
    prescribedLimit: "Finished Bread: Strictly Negative / Absent | Raw Bakery Flour: < 20 spores/g",
    riskIfFailed: "Crumb liquefaction, slimy ropiness, melon-like off-odor, food poisoning risk.",
    procedureSteps: [
      "Aseptically blend 10.0g flour or bread crumb in 90 ml sterile diluent (10^-1 dilution).",
      "Immerse dilution tubes in water bath at 80°C for exactly 15 minutes (timing starts when internal tube temperature reaches 80°C).",
      "Immediately chill tubes in ice water bath to arrest further thermal stress.",
      "Pipette 1.0 ml aliquots into sterile Petri dishes; pour 15 ml molten DTA agar (45°C); mix gently and allow to solidify.",
      "Incubate plates inverted at 37°C for 48 hours.",
      "Count yellow-haloed colonies with mucoid or wrinkled surfaces characteristic of Bacillus subtilis."
    ],
    flowchartSteps: [
      { stepNumber: 1, phaseName: "Heat Shock", title: "Selective Spore Activation", action: "Heat dilution at 80°C for 15 min.", scientificMechanism: "Kills vegetative cells and triggers spore germination.", controlPoint: "80°C water bath." },
      { stepNumber: 2, phaseName: "Plating", title: "DTA Pour Plating", action: "Pour Dextrose Tryptone Agar.", scientificMechanism: "Provides selective nutrients and pH indicator.", controlPoint: "Molten agar at 45°C." },
      { stepNumber: 3, phaseName: "Incubation", title: "Colony Growth", action: "Incubate at 37°C for 48 hours.", scientificMechanism: "Allows vegetative colony development.", controlPoint: "Enumerate yellow colonies." }
    ],
    factorsExplanation: [
      {
        question: "Bread baking ke baad bhi rope bacteria survive kyun kar jaate hain?",
        answer: "Bacillus subtilis bacteria dipicolinic acid aur calcium ions se protected thick keratin-like spore coat banate hain jo high heat (> 100°C) ko withstand kar leti hai. Bread baking ke dauran crust 200°C hoti hai lekin crumb ka core temperature 98-100°C se upar nahi jaata, jisse endospores survive kar jaate hain."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Heat Shock Temp", value: "80°C ± 0.5°C", "reason": "Destroys vegetative cells while preserving and heat-activating endospores" },
      { parameter: "Finished Bread Threshold", value: "Zero / Absent", "reason": "Mandatory statutory compliance to prevent commercial rope spoilage" }
    ]
  },

  // 14. CHEMICAL TEST: Calcium Propionate Preservative in Bread
  {
    id: "bakery-chem-8",
    category: "Bakery & Confectionery",
    testType: "Chemical",
    productName: "Bread, Buns, Pav, Rusk",
    testName: "Preservative Assay: Calcium Propionate in Bread (Steam Distillation Titrimetry)",
    shortSummary: "Quantifies added calcium propionate antimycotic preservative in bread to verify FSSAI compliance (Max 5000 mg/kg).",
    detailedScientificRationale:
      "Calcium propionate is added to commercial bread formulations to suppress fungal mold growth (Rhizopus stolonifer, Penicillium) and inhibit rope bacilli endospores. Propionate functions by entering bacterial and fungal cells in undissociated acid form at bread crumb pH (< 5.5), disrupting carbohydrate metabolism and amino acid transport. Statutory limits (max 5000 mg/kg) prevent chemical over-preservation and bitter pungent taste.",
    detailedTestPrinciple:
      "Acidified bread homogenate is steam-distilled to volatilize propionic acid. The distillate is collected in cold water and titrated against standardized 0.1 N sodium hydroxide using phenolphthalein indicator. Results are expressed as calcium propionate or propionic acid.",
    chemicalEquation: "Ca(C3H5O2)2 + H2SO4 ⟶ 2 C2H5COOH (Steam Volatile ↑) + CaSO4 ; C2H5COOH + NaOH ⟶ C2H5COONa + H2O",
    formulaBreakdown: {
      formula: "Calcium Propionate (mg/kg or ppm) = [ (V × N × 93.1) / Sample Weight (g) ] × 1000",
      variables: [
        { symbol: "V", description: "Titre volume of 0.1 N NaOH consumed by distillate (ml)" },
        { symbol: "N", description: "Exact normality of standardized NaOH titrant" },
        { symbol: "93.1", description: "Equivalent weight factor of Calcium Propionate (186.22 / 2)" }
      ],
      derivation: "Standard steam distillation acidimetry per IS 1483 and AOAC 950.36.",
      factorOrigin: "1 ml of 1.0 N NaOH neutralizes 0.0931 g of calcium propionate.",
      unitAnalysis: "mg / kg (ppm)",
      practicalExample: "Sample = 10.0g Bread, V = 3.20 ml of 0.1000 N NaOH. Propionate = (3.20 × 0.1000 × 93.1 / 10.0) × 1000 = 2979 mg/kg (Passes FSSAI Max 5000 mg/kg limit) ✓"
    },
    referenceStandard: "IS 1483:1988 / AOAC 950.36 / FSSAI Manual 03",
    reagentsAndApparatus: [
      "10% Phosphoric Acid / 2 N Sulphuric Acid",
      "Standardized 0.1 N NaOH Titrant",
      "Phenolphthalein Indicator Solution (1% w/v)",
      "Markham Steam Distillation Apparatus / Kjeldahl Still"
    ],
    prescribedLimit: "FSSAI Statutory Limit: Maximum 5000 mg/kg (0.5% w/w as Calcium Propionate)",
    riskIfFailed: "Overdose causes bitter pungent chemical flavor; underdose leads to premature mold spoilage.",
    procedureSteps: [
      "Homogenize 10.0g bread crumb with 50 ml distilled water.",
      "Transfer to steam distillation flask, acidify with 10 ml 10% phosphoric acid.",
      "Steam distill rapidly, collecting 200 ml distillate in a conical flask cooled in ice water.",
      "Boil distillate gently for 1 minute to expel dissolved CO2 gas.",
      "Add 3 drops phenolphthalein indicator and titrate with 0.1 N NaOH to faint pink endpoint.",
      "Run an identical reagent blank distillation and subtract blank volume."
    ],
    flowchartSteps: [
      { stepNumber: 1, phaseName: "Acidification", title: "Volatilization Pretreatment", action: "Acidify homogenate with H3PO4.", scientificMechanism: "Converts calcium propionate salt to free volatile propionic acid.", controlPoint: "Acidic pH < 2.0." },
      { stepNumber: 2, phaseName: "Steam Distillation", title: "Vapor Stripping", action: "Collect 200 ml steam distillate.", scientificMechanism: "Carries propionic acid vapor into receiver.", controlPoint: "Ice-cold condenser." },
      { stepNumber: 3, phaseName: "Titration", title: "Neutralization Quantitation", action: "Titrate with 0.1N NaOH.", scientificMechanism: "Stoichiometrically neutralizes propionic acid.", controlPoint: "Permanent pink endpoint." }
    ],
    factorsExplanation: [
      {
        question: "Calcium propionate bread mein pH 5.5 se upar hone par kaam kyun nahi karta?",
        answer: "Propionic acid ka pKa 4.88 hota hai. Ye sirf un-dissociated (free acid) state mein hi microbial cell wall ke phospholipid bilayer ko penetrate kar paata hai. Agar bread crumb pH > 6.0 ho to 95% propionate negatively charged ions (C3H5O2-) mein dissociate ho jaata hai jo cell wall ko cross nahi kar paate, jisse preservative effect zero ho jaata hai."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Statutory Ceiling", value: "5000 mg/kg (0.5%)", "reason": "Maximum permitted safety and taste threshold per FSSAI regulations" }
    ]
  },

  // 15. PHYSICAL TEST: Particle Size Fineness in Chocolate
  {
    id: "bakery-phys-4",
    category: "Bakery & Confectionery",
    testType: "Physical",
    productName: "Chocolates, Compound Chocolate, Cocoa Butter Mass",
    testName: "Particle Size Fineness in Chocolate (Micrometer & Hegman Gauge Method)",
    shortSummary: "Measures grinding and conching fineness in chocolate to ensure maximum particle size is below human sensory grittiness threshold (< 20-25 µm).",
    detailedScientificRationale:
      "The human palate can discern solid particles larger than 25-30 microns as gritty or chalky. In premium chocolate manufacture, cocoa solids and sugar crystals are ground and refined using five-roll refiners and conches. Measuring fineness guarantees that solid particles are ground to 15-20 microns, suspended uniformly in molten cocoa butter for a velvety, smooth, melt-in-mouth texture.",
    detailedTestPrinciple:
      "Molten chocolate (40°C) is diluted 1:1 with light paraffin oil to reduce viscosity without dissolving sugar crystals. A drop is placed on a digital micrometer screw gauge or precision dual-channel Hegman grindometer gauge, and the depth at which particle scratches first appear is read in microns.",
    chemicalEquation: "Solid Particle Matrix (Sugar + Cocoa Solids) ⟶ Mechanical Calibrated Shear ⟶ Micro-Depth Dispersion (µm)",
    formulaBreakdown: {
      formula: "Fineness (µm) = Micrometer Reading (with sample) - Zero Tare Reading",
      variables: [
        { symbol: "Reading", description: "Direct optical or digital readout in micrometers (µm)" }
      ],
      derivation: "Standard IOCCC Method 105-1996 for cocoa and chocolate products.",
      factorOrigin: "Threshold of tactile grittiness detection by human tongue papillae is 25-30 µm.",
      unitAnalysis: "microns (µm)",
      practicalExample: "Digital Micrometer: Zero = 0.0 µm, Sample reading = 18.2 µm ⟶ Fineness = 18.2 µm (Premium Conched Chocolate < 20 µm) ✓"
    },
    referenceStandard: "IS 1163:1992 / IOCCC Method 105-1996 / ISO 1524",
    reagentsAndApparatus: [
      "Digital Outside Micrometer with ratchet stop (0.001 mm resolution)",
      "Hegman Precision Grindometer Gauge (0 - 50 µm range) with scraper",
      "Light Liquid Paraffin Oil (refining diluent)",
      "Water Bath at 45°C ± 1°C"
    ],
    prescribedLimit: "High Quality Chocolate: < 20 µm | Standard Commercial: < 25 µm | Compound: < 30 µm",
    riskIfFailed: "Gritty, sandy mouthfeel, poor flow behavior in enrobing and moulding.",
    procedureSteps: [
      "Melt chocolate sample completely in a water bath at 45°C.",
      "Mix equal parts (1:1) of melted chocolate with liquid paraffin on a clean glass plate.",
      "Clean micrometer anvils and verify zero setting.",
      "Place a small drop of diluted mixture onto the anvil.",
      "Close the spindle gently using the ratchet mechanism (3 clicks) to avoid crushing crystalline sugar particles.",
      "Read the thickness in micrometers (µm); repeat across 5 independent drops and take the average."
    ],
    flowchartSteps: [
      { stepNumber: 1, phaseName: "Melting", title: "Thermal Liquefaction", action: "Melt chocolate at 45°C.", scientificMechanism: "Liquefies cocoa butter crystal polymorphs.", controlPoint: "45°C water bath." },
      { stepNumber: 2, phaseName: "Dilution", title: "Viscosity Reduction", action: "Dilute 1:1 with paraffin oil.", scientificMechanism: "Prevents sugar dissolution while thinning suspension.", controlPoint: "Uniform mixing." },
      { stepNumber: 3, phaseName: "Measurement", title: "Micrometer Gauging", action: "Measure between anvils with ratchet stop.", scientificMechanism: "Reads largest solid particle diameter.", controlPoint: "Zero calibration." }
    ],
    factorsExplanation: [
      {
        question: "Chocolate fineness check mein paani kyun use nahi kar sakte, paraffin oil kyun lete hain?",
        answer: "Chocolate mein sugar crystals (sucrose) solid crystalline state mein hote hain. Agar paani use kiya to sugar turant dissolve ho jayegi aur particle size measurement impossible ho jayega. Light paraffin oil hydrophobic hota hai jo sugar ko dissolve kiye bina chocolate matrix ko thin out karta hai."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Sensory Threshold", value: "< 20 - 25 µm", "reason": "Maximum particle size before human tongue detects tactile grittiness" }
    ]
  },

  // 16. CHEMICAL TEST: Sulphur Dioxide (SO2) Residue in Confectionery
  {
    id: "bakery-chem-9",
    category: "Bakery & Confectionery",
    testType: "Chemical",
    productName: "Hard Boiled Candies, Toffees, Sugar Confectionery, Candied Fruits",
    testName: "Sulphur Dioxide (SO2) Residue in Confectionery (Optimized Monier-Williams Method)",
    shortSummary: "Quantifies sulphite bleaching agent residues in sugar candies via acid distillation into hydrogen peroxide and titration against 0.01 N NaOH.",
    detailedScientificRationale:
      "Sulphites (sodium metabisulphite) are used as bleaching agents and antioxidants in glucose syrups, invert sugar, and desiccated coconut used in confectionery manufacturing. However, sulphur dioxide is a potent respiratory allergen that can trigger severe bronchospasm in sensitive asthmatic individuals. FSSAI regulations mandate a strict ceiling of Max 70 mg/kg (ppm) SO2 in hard-boiled sugar confectionery.",
    detailedTestPrinciple:
      "The confectionery sample is acidified with hydrochloric acid and boiled under reflux with a continuous stream of pure nitrogen gas. Released sulphur dioxide gas is swept through a chilled absorption tube containing neutral 3% hydrogen peroxide (H2O2). The H2O2 oxidizes SO2 into Sulphuric Acid (H2SO4), which is then titrated with standardized 0.01 N NaOH using methyl red indicator.",
    chemicalEquation: "SO3(2-) + 2H+ ⟶ SO2 ↑ + H2O ; SO2 + H2O2 ⟶ H2SO4 ; H2SO4 + 2NaOH ⟶ Na2SO4 + 2H2O",
    formulaBreakdown: {
      formula: "SO2 (mg/kg or ppm) = [ (V_sample - V_blank) × N × 32.03 × 1000 ] / Sample Weight (g)",
      variables: [
        { symbol: "V_sample", description: "Volume of 0.01 N NaOH consumed in titration (ml)" },
        { symbol: "V_blank", description: "Volume of 0.01 N NaOH consumed by reagent blank (ml)" },
        { symbol: "32.03", description: "Milliequivalent mass of SO2 (64.06 / 2)" }
      ],
      derivation: "Optimized Monier-Williams procedure per AOAC 990.28 and FSSAI Manual 03.",
      factorOrigin: "1 ml of 0.01 N NaOH neutralizes exactly 0.3203 mg of SO2.",
      unitAnalysis: "mg SO2 / kg sample = ppm",
      practicalExample: "Sample = 50.0g Candy, V = 4.20 ml 0.0100N NaOH, Blank = 0.10 ml. SO2 = [ (4.10 × 0.0100 × 32.03 × 1000) / 50.0 ] = 26.26 ppm (Well within FSSAI Max 70 ppm limit) ✓"
    },
    referenceStandard: "AOAC 990.28 / FSSAI Manual 03 (Food Additives) / IS 1008",
    reagentsAndApparatus: [
      "Optimized Monier-Williams Distillation Apparatus with N2 Gas Purge",
      "3% Hydrogen Peroxide Solution (neutralized to methyl red)",
      "Concentrated Hydrochloric Acid (AR Grade)",
      "Standardized 0.01 N Sodium Hydroxide Solution"
    ],
    prescribedLimit: "FSSAI Statutory Limit: Maximum 70 mg/kg (ppm) in Hard Boiled Sugar Confectionery",
    riskIfFailed: "Severe respiratory bronchospasm in asthmatic consumers, allergen labeling violation.",
    procedureSteps: [
      "Dissolve 50.0g crushed candy in 200 ml deoxygenated water inside the Monier-Williams distillation flask.",
      "Add 90 ml 4 N HCl through the dropping funnel.",
      "Bubble high-purity nitrogen gas through the solution at 200 ml/min.",
      "Immerse delivery tube into 30 ml neutral 3% H2O2 absorption solution.",
      "Boil under reflux for exactly 105 minutes under continuous nitrogen purge.",
      "Wash receiver tube into the flask; add 3 drops methyl red indicator and titrate with 0.01 N NaOH to yellow endpoint."
    ],
    flowchartSteps: [
      { stepNumber: 1, phaseName: "Acidification", title: "SO2 Gas Liberation", action: "Acidify with HCl under N2 purge.", scientificMechanism: "Releases gaseous SO2 from bound sulphite salts.", controlPoint: "Nitrogen flow 200 ml/min." },
      { stepNumber: 2, phaseName: "Oxidation", title: "Peroxide Trapping", action: "Trap in 3% H2O2 solution.", scientificMechanism: "Oxidizes volatile SO2 to non-volatile H2SO4.", controlPoint: "Neutral H2O2 receiver." },
      { stepNumber: 3, phaseName: "Titration", title: "Alkalimetric Titration", action: "Titrate with 0.01N NaOH to yellow.", scientificMechanism: "Quantifies H2SO4 stoichiometrically.", controlPoint: "Methyl red endpoint." }
    ],
    factorsExplanation: [
      {
        question: "Monier-Williams test mein pure nitrogen gas stream kyun zaroori hai?",
        answer: "Nitrogen carrier gas atmospheric oxygen ko distillation flask se displace karta hai. Agar oxygen mojud rahi to SO2 gas receiver tak pahunchne se pehle hi flask ke andar sulphuric acid mein oxidize ho jayegi jo non-volatile hone ke kaaran distill nahi ho payegi, jisse recovery 50% gir jayegi."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Statutory Ceiling", value: "70 mg/kg (ppm)", "reason": "Allergen safety limit for sugar confectionery under FSSAI" }
    ]
  }
];