import { FoodTestItem } from "./types";

export const CEREALS_GRAINS_TESTS: FoodTestItem[] = [
  // 1. PHYSICAL TEST: Moisture Content in Wheat Atta & Rice Grains
  {
    id: "cereal-phys-1",
    category: "Cereal & Grain Products",
    testType: "Physical",
    productName: "Wheat, Atta, Maida, Suji, Rice, Oats, Poha, Besan",
    testName: "Moisture Content Determination (Gravimetric Air Oven Method)",
    shortSummary: "Measures free unbound water mass loss in grains and flours to evaluate thermodynamic stability, prevent mold growth, and insect infestation.",
    detailedScientificRationale:
      "Moisture content governs thermodynamic water activity (a_w). Water in cereals exists as free capillary water and bound water. When moisture exceeds statutory thresholds (a_w > 0.65, > 13-14% moisture), endogenous hydrolytic enzymes (lipases, amylases) become active, breaking down triglycerides into unesterified free fatty acids and degrading starch into fermentable sugars.\n\nElevated moisture accelerates growth of storage fungi (Aspergillus flavus, Penicillium species), leading to biosynthesis of carcinogenic Aflatoxins (B1, B2, G1, G2). Controlling moisture below 13.0% ensures structural grain stability, prevents clumping, and maintains flour baking performance.",
    detailedTestPrinciple:
      "Based on thermal gravimetric loss on drying. Homogenized sample is heated in an isothermal forced-air convection oven at 105°C ± 2°C (or 130°C for rapid test). Heat supplies kinetic energy to break hydrogen bonds binding free water within capillary spaces, evaporating H2O into vapor without thermal decomposition of carbohydrate polymers. The resulting mass loss quantifies volatile moisture.",
    chemicalEquation: "H2O (Free Capillary Moisture) + Heat (105°C) ⟶ H2O (Vapor ↑) [Gravimetric Loss = Volatile Moisture]",
    formulaBreakdown: {
      formula: "% Moisture = [(W1 - W2) / (W1 - W0)] × 100",
      variables: [
        { symbol: "W0", description: "Tare mass of empty dry dish + lid (g)" },
        { symbol: "W1", description: "Initial mass of dish + lid + sample before oven drying (g)" },
        { symbol: "W2", description: "Final mass of dish + lid + sample after drying & cooling (g)" },
        { symbol: "W1 - W2", description: "Mass of driven-off water vapor (g)" },
        { symbol: "W1 - W0", description: "Net initial sample mass taken (g, typically 5.0000g)" }
      ],
      derivation: "Derived from Law of Mass Conservation. Mass difference (W1 - W2) represents net mass of water vapor driven off at 105°C. Dividing vapor mass by net wet sample mass (W1 - W0) and multiplying by 100 converts the gravimetric fraction into percentage moisture by mass (% w/w).",
      factorOrigin: "105°C temperature selected because: (1) Overcomes activation energy for evaporating free interstitial water; (2) Remains below 108°C caramelization temperature of sucrose and reducing sugars; (3) Standardized per ISO 712 and IS 4333. Desiccator cooling prevents moisture absorption by dried, highly hygroscopic starch matrix.",
      unitAnalysis: "% Moisture = [g water vapor / g sample] × 100 = % w/w (mass percent)",
      practicalExample: "W0 = 25.1234g (empty dish), W1 = 30.1234g (5.0000g sample), W2 = 29.5234g (dried sample). Vapor loss = 30.1234 - 29.5234 = 0.6000g. % Moisture = (0.6000 / 5.0000) × 100 = 12.00% (Within FSSAI limit of 14.0% for Atta) ✓"
    },
    referenceStandard: "FSSAI Manual 03 (Cereals) / IS 4333 (Part 2) / ISO 712",
    reagentsAndApparatus: [
      "Forced Convection Hot Air Oven (105°C ± 2°C)",
      "Analytical Balance (0.0001g precision)",
      "Glass Desiccator with Active Cobalt Chloride Silica Gel",
      "Aluminum Moisture Dishes with tight lids (75mm diameter)"
    ],
    prescribedLimit: "Atta: Max 14.0% | Maida: Max 13.0% | Suji: Max 13.5% | Rice: Max 14.0% | Besan: Max 11.5% | Poha: Max 13.0%",
    riskIfFailed: "Proliferation of Aspergillus flavus, synthesis of Aflatoxin B1, flour caking, lipolytic rancidity, and insect infestation.",
    procedureSteps: [
      "Dry clean aluminum dish at 105°C for 60 min, cool in desiccator, and record tare weight (W0).",
      "Weigh exactly 5.0000g of homogenized flour/grain into the dish (W1 = W0 + 5.0000g).",
      "Place uncovered dish in oven at 105°C ± 2°C for 4 hours (or 130°C for 60 min).",
      "Cover dish with lid, transfer immediately to desiccator, cool for 30 minutes.",
      "Weigh cooled dish (W2) and compute % Moisture gravimetrically."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Dish Tare Calibration",
        title: "Thermal Dish Dehydration",
        action: "Heat empty aluminum dish + lid at 105°C for 1 hour; cool in desiccator for 30 min and weigh W0.",
        scientificMechanism: "Eliminates adsorbed ambient humidity from metal dish surface for true baseline zeroing.",
        controlPoint: "CCP 1: Ensure balance is calibrated with 20g Class E2 weight.",
        reagentsInvolved: ["Silica Gel Desiccator"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Sample Dosing",
        title: "Uniform Layer Dosing",
        action: "Weigh exactly 5.0000g sample evenly across dish floor (W1).",
        scientificMechanism: "Maximizes exposed surface area to volume ratio for rapid, uniform moisture vapor transport.",
        controlPoint: "CCP 2: Layer thickness must not exceed 4mm.",
        reagentsInvolved: ["Analytical Balance"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Isothermal Drying",
        title: "Thermal Vaporization",
        action: "Dry uncovered dish at 105°C ± 2°C for 4 hours.",
        scientificMechanism: "Thermal energy overcomes hydrogen bonds of free water, driving H2O vapor into oven atmosphere.",
        controlPoint: "CCP 3: Maintain oven strictly at 105°C. Temp > 108°C induces sugar Maillard caramelization.",
        reagentsInvolved: ["Hot Air Oven"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Desiccator Isolation",
        title: "Hygroscopic Cooling Isolation",
        action: "Cover dish, transfer to desiccator containing blue silica gel, cool for 30 min.",
        scientificMechanism: "Prevents highly dry, hygroscopic starch matrix from re-absorbing environmental humidity.",
        controlPoint: "CCP 4: Silica gel must be deep blue. Pink silica indicates moisture saturation.",
        reagentsInvolved: ["Active Silica Gel"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Gravimetric Audit",
        title: "Mass Calculation & Standard Verification",
        action: "Weigh W2 and calculate % Moisture. Compare with FSSAI statutory limit.",
        scientificMechanism: "Quantifies volatile water loss relative to initial sample mass.",
        controlPoint: "Quality Gate: Verify % Moisture <= 14.0% (Atta) / 13.0% (Maida).",
        reagentsInvolved: ["Calculation Formula"]
      }
    ]
  ,
    factorsExplanation: [
    {
        "question": "130°C par 60 minutes vs 105°C par 4 hours — difference kya hai?",
        "answer": "1. 130°C rapid air oven method wheat flours ke liye ISO 712 aur IS 4333 standard method hai jisme 60 minutes mein saara free interstitial water vaporize ho jaata hai bina starch pyrolysis ke.\n2. 105°C method whole grains aur coarse seeds ke liye use hota hai taaki volatile oils ka thermal degradation na ho.\n3. Desiccator cooling with active silica gel zaroori hai kyunki oven-dried flour intensely hygroscopic hota hai aur room air se moisture absorb kar leta hai."
    },
    {
        "question": "Moisture statutory limits se exceed hone par kya risks hain?",
        "answer": "1. Atta mein moisture > 14.0% hone par thermodynamic water activity (a_w > 0.65) badh jaati hai.\n2. Aspergillus flavus mold proliferate karta hai aur carcinogenic Aflatoxins (B1, B2) banata hai.\n3. Native germ lipases activate ho kar triglycerides ko FFA mein convert karte hain, jisse atta sour aur rancid ho jaata hai."
    }
],
    factorsSummaryTable: [
    {
        "parameter": "Oven Temperature",
        "value": "130°C ± 2°C",
        "reason": "Rapid vaporization of capillary water below caramelization threshold"
    },
    {
        "parameter": "Drying Time",
        "value": "60 minutes",
        "reason": "Complete moisture desorption without carbohydrate polymer degradation"
    },
    {
        "parameter": "Desiccator Cooling",
        "value": "30 - 45 min",
        "reason": "Prevents hygroscopic atmospheric moisture reabsorption"
    }
]
  },

  // 2. CHEMICAL TEST: Wet & Dry Gluten Content in Flours
  {
    id: "cereal-chem-1",
    category: "Cereal & Grain Products",
    testType: "Chemical",
    productName: "Wheat Flour, Atta, Maida",
    testName: "Gluten Content & Quality Estimation (Hand Washing & Glutomatic Method)",
    shortSummary: "Isolates viscoelastic protein complexes (Gliadin + Glutenin) in wheat flour responsible for dough gas retention, elasticity, and baking quality.",
    detailedScientificRationale:
      "Gluten is a cohesive viscoelastic protein complex composed of monomeric Gliadins (MW 30,000-80,000 Da) and polymeric Glutenins (MW 100,000 to > 10,000,000 Da linked by inter-chain disulfide bonds). Gliadins impart extensibility and fluidity, while Glutenins impart elasticity and structural resistance to extension.\n\nDuring dough mixing with water, starch granules and water-soluble albumins/globulins are hydrated. Washing the dough ball under running water or 2% NaCl solution selectively solubilizes albumins, globulins, and washes out starch granules, leaving behind the insoluble cohesive rubbery mass called Wet Gluten. Drying this mass at 100-105°C yields Dry Gluten, which reflects the structural baking strength of Maida and Atta.",
    detailedTestPrinciple:
      "A dough ball prepared from 10.0g flour and 5.5mL 2% NaCl solution is allowed to rest for 30 minutes to facilitate full protein hydration and disulfide cross-linking. The dough is gently kneaded under a stream of 2% NaCl solution over a fine silk sieve (150 µm) until starch is washed out (confirmed by negative Iodine test). The residual mass is pressed to remove free water, weighed as Wet Gluten, and then oven-dried at 105°C for 4 hours to determine Dry Gluten.",
    chemicalEquation: "Glutenin (Polymer) + Gliadin (Monomer) + H2O + Disulfide Cross-links (-S-S-) ⟶ Viscoelastic Gluten Matrix (Insoluble in Water/NaCl)",
    formulaBreakdown: {
      formula: "% Wet Gluten = (W_wet / W_sample) × 100   |   % Dry Gluten = (W_dry / W_sample) × 100",
      variables: [
        { symbol: "W_sample", description: "Weight of wheat flour sample taken (typically 10.0g)" },
        { symbol: "W_wet", description: "Mass of washed, pressed rubbery Wet Gluten (g)" },
        { symbol: "W_dry", description: "Mass of oven-dried Gluten after heating at 105°C (g)" }
      ],
      derivation: "Derived from selective protein insolubility. Albumins and globulins dissolve in 2% NaCl, while starch granules pass through 150 µm sieve. Gliadin and glutenin form a water-insoluble rubbery mass. W_wet / W_sample × 100 gives wet gluten yield, while drying at 105°C removes bound water, giving pure dry protein %.",
      factorOrigin: "2% NaCl washing solution used because: (1) Prevents gluten dispersion (pure distilled water causes gluten solubilization); (2) Mimics ionic strength of dough; (3) 150 µm mesh size retains gluten strands while allowing 20-40 µm starch granules to pass freely. Iodine test endpoint ensures 100% starch removal.",
      unitAnalysis: "% Gluten = [g gluten protein / g flour sample] × 100 = % w/w",
      practicalExample: "W_sample = 10.00g Maida. Washed wet gluten W_wet = 2.80g. Dried gluten W_dry = 0.90g. % Wet Gluten = (2.80 / 10.0) × 100 = 28.0%. % Dry Gluten = (0.90 / 10.0) × 100 = 9.0% (Exceeds FSSAI minimum 7.5% Dry Gluten for Maida) ✓"
    },
    referenceStandard: "FSSAI Manual 03 (Cereals) / IS 1155 / ISO 21415",
    reagentsAndApparatus: [
      "2% Sodium Chloride (NaCl) washing solution",
      "0.01 N Iodine Indicator Solution (for starch test)",
      "Silk or Polyester Bolting Cloth Sieve (150 µm aperture)",
      "Gluten Washer / Analytical Balance & Drying Oven (105°C)"
    ],
    prescribedLimit: "Maida: Min 7.5% Dry Gluten (Min 24% Wet Gluten) | Atta: Min 6.0% Dry Gluten",
    riskIfFailed: "Poor dough rise, low loaf volume in bread/rusk, dense gummy texture, and failure of dough gas retention.",
    procedureSteps: [
      "Weigh 10.00g flour into a porcelain mortar, add 5.5mL 2% NaCl solution, and knead into a smooth dough ball.",
      "Submerge dough ball in 2% NaCl solution for 30 min at 25°C to hydrate proteins.",
      "Knead gently between fingers under a slow stream of 2% NaCl over a 150 µm sieve until wash water runs clear.",
      "Test drop of washings with Iodine solution. Absence of blue color confirms complete starch elimination.",
      "Press wet gluten between filter paper sheets, weigh (W_wet), then dry at 105°C for 4 hours to obtain W_dry."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Dough Dosing & Hydration",
        title: "Starch-Protein Hydration Rest",
        action: "Knead 10g flour with 5.5mL 2% NaCl into a ball; rest submerged in 2% NaCl for 30 minutes.",
        scientificMechanism: "Facilitates intermolecular disulfide (-S-S-) bonding between glutenin subunits and gliadin monomer hydration.",
        controlPoint: "CCP 1: Rest temperature must be 25°C ± 2°C.",
        reagentsInvolved: ["2% NaCl Solution"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Washing & Starch Removal",
        title: "Selective Solubilization Washing",
        action: "Knead dough under 2% NaCl stream over 150 µm sieve until starch granules wash through.",
        scientificMechanism: "Water-soluble albumins/globulins and starch wash out; insoluble glutenin/gliadin remain on sieve.",
        controlPoint: "CCP 2: Do not tear dough ball during washing.",
        reagentsInvolved: ["2% NaCl", "150 µm Sieve"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Starch Endpoint Verification",
        title: "Iodine Indicator Starch Test",
        action: "Add 1 drop 0.01N Iodine to washings. Absence of blue color indicates zero remaining starch.",
        scientificMechanism: "Iodine forms blue inclusion complex with amylose. Zero blue color confirms pure protein residue.",
        controlPoint: "CCP 3: If washings turn blue, continue washing for 2 more minutes.",
        reagentsInvolved: ["0.01N Iodine Indicator"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Wet Gluten Measurement",
        title: "Bound Water Dewatering & Weighing",
        action: "Press wet gluten between filter papers under 1kg mass for 1 min; weigh W_wet.",
        scientificMechanism: "Removes un-bound surface water, isolating hydrated wet gluten gel.",
        controlPoint: "CCP 4: Standardize pressing time to 60 seconds.",
        reagentsInvolved: ["Filter Paper"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Thermal Drying & Dry Gluten Audit",
        title: "Oven Drying & Regulatory Audit",
        action: "Dry wet gluten at 105°C for 4 hours; cool and weigh W_dry. Verify Dry Gluten >= 7.5% (Maida).",
        scientificMechanism: "Evaporates hydration water, quantifying net dry wheat protein mass.",
        controlPoint: "Quality Gate: Maida Dry Gluten < 7.5% indicates adulteration with low-protein starch.",
        reagentsInvolved: ["Hot Air Oven"]
      }
    ]
  ,
    factorsExplanation: [
    {
        "question": "Gluten washing ke liye 2% NaCl solution kyun use kiya jaata hai?",
        "answer": "1. 2% NaCl ionic strength provide karta hai jo gluten protein matrix ko stabilize karta hai aur peptization (dissolution) ko prevent karta hai.\n2. Pure distilled water ya soft tap water mein electrostatic repulsion gluten strands ko disperse kar deti hai jisse gluten loss ho jaata hai.\n3. Hydrophobic interactions strengthen hoti hain, resulting in a cohesive, elastic rubber-like gluten ball."
    },
    {
        "question": "Wet Gluten aur Dry Gluten ka ratio lagbhag 3:1 kyun hota hai?",
        "answer": "1. Gluten protein matrix hydrophilic amino acid residues se bana hai jo apne dry mass ka ~200% paani bind karte hain.\n2. Isliye Wet Gluten hamesha Dry Gluten ka lagbhag 2.8 - 3.2 times hota hai."
    }
],
    factorsSummaryTable: [
    {
        "parameter": "Wash Solution",
        "value": "2% w/v NaCl",
        "reason": "Prevents gluten peptization and solubilization during washing"
    },
    {
        "parameter": "Drying Temperature",
        "value": "130°C",
        "reason": "Dehydrates wet gluten ball to constant dry wafer weight"
    },
    {
        "parameter": "Iodine Endpoint Check",
        "value": "0.005 N Lugol's",
        "reason": "Confirms zero residual starch in washings"
    }
]
  },

  // 3. CHEMICAL TEST: Alcoholic Acidity in Flours
  {
    id: "cereal-chem-2",
    category: "Cereal & Grain Products",
    testType: "Chemical",
    productName: "Wheat Atta, Maida, Suji, Besan, Corn Flour",
    testName: "Alcoholic Acidity Determination (Titrimetric Method)",
    shortSummary: "Quantifies free fatty acids and acidic phosphates formed during enzymatic hydrolytic breakdown during improper storage of flours.",
    detailedScientificRationale:
      "Alcoholic acidity is a key biochemical indicator of flour age, storage deterioration, and unsoundness. In freshly milled sound flour, alcoholic acidity is very low (< 0.10% as H2SO4). When flour is stored under high ambient temperatures or high relative humidity, native lipase and phytase enzymes hydrolyze triglycerides and phytin.\n\nThis enzymatic action releases free fatty acids (oleic, linoleic, palmitic acids) and acid phosphate salts. Neutral 90% ethanol selectively extracts these unesterified organic acids while precipitating water-soluble proteins and starch. Titrating the alcoholic extract against standardized 0.05 N NaOH using phenolphthalein measures total liberated acidity.",
    detailedTestPrinciple:
      "5.0g flour sample is extracted with 50mL neutral 90% ethyl alcohol for 24 hours at 25°C (or shaken mechanically for 1 hour). The mixture is filtered, and an aliquot of the clear alcoholic filtrate is titrated with standard 0.05 N Sodium Hydroxide (NaOH) to a persistent faint pink phenolphthalein endpoint. The volume of alkali consumed directly correlates with percentage of acidity calculated as H2SO4 (or sulfuric acid equivalent).",
    chemicalEquation: "R-COOH (Free Fatty Acids in Flour Extract) + NaOH ⟶ R-COONa + H2O [Endpoint pH 8.3 Pink]",
    formulaBreakdown: {
      formula: "% Alcoholic Acidity (as H2SO4) = [(V × N × 0.049 × 100) / W] × (V_total / V_aliquot)",
      variables: [
        { symbol: "V", description: "Volume of 0.05 N NaOH consumed in titration (mL)" },
        { symbol: "N", description: "Exact Normality of NaOH titrant (0.05 N)" },
        { symbol: "0.049", description: "Milliequivalent weight of Sulfuric Acid H2SO4 (49 g/eq ÷ 1000)" },
        { symbol: "W", description: "Mass of flour sample taken (typically 5.0g)" },
        { symbol: "V_total", description: "Total volume of 90% ethanol added (50mL)" },
        { symbol: "V_aliquot", description: "Volume of filtered extract titrated (25mL)" }
      ],
      derivation: "Derived from acid-base neutralization stoichiometry: H2SO4 + 2 NaOH ⟶ Na2SO4 + 2 H2O. Equivalent weight of H2SO4 = MW / 2 = 98.08 / 2 = 49.04 g/eq (0.049 g/meq). Multiplying V × N × 0.049 yields grams of H2SO4 equivalent in the aliquot. Scaling by (V_total / V_aliquot) and dividing by sample mass W gives % w/w acidity.",
      factorOrigin: "90% ethanol used because: (1) Selectively dissolves unesterified free fatty acids (oleic, linoleic) while leaving water-soluble proteins/starches un-extracted; (2) Prevents enzymatic action during extraction. 0.05 N NaOH provides high titration sensitivity.",
      unitAnalysis: "% Acidity = [mL × meq/mL × g/meq × 100] / [g sample] = % w/w (as H2SO4)",
      practicalExample: "W = 5.00g Atta, V_total = 50mL, V_aliquot = 25mL. Titration volume V = 1.00 mL 0.05N NaOH. Acidity = [(1.00 × 0.05 × 0.049 × 100) / 5.00] × (50 / 25) = [0.245 / 5.00] × 2 = 0.098% (Within FSSAI limit of 0.12%) ✓"
    },
    referenceStandard: "FSSAI Manual 03 (Cereals) / IS 1155 / IS 1009",
    reagentsAndApparatus: [
      "Neutral 90% Ethyl Alcohol (neutralized to phenolphthalein pink)",
      "0.05 N Standardized Sodium Hydroxide (NaOH) Solution",
      "1% Phenolphthalein Indicator Solution in 90% ethanol",
      "250mL Stoppered Conical Flasks & Whatman No. 1 Filter Paper"
    ],
    prescribedLimit: "Atta / Maida / Suji: Max 0.12% (calculated as H2SO4 in 90% alcohol) | Besan: Max 0.15%",
    riskIfFailed: "Sour acrid taste, severe lipolytic rancidity, flour heating, unfitness for human consumption, and rejected baking dough.",
    procedureSteps: [
      "Weigh 5.000g flour into a 250mL stoppered conical flask, add 50mL neutral 90% ethanol.",
      "Stopper flask tightly, shake vigorously, and allow to stand for 24 hours at 25°C (with occasional shaking).",
      "Filter extract through Whatman No. 1 paper into a dry flask.",
      "Pipette 25mL clear filtrate into an Erlenmeyer flask, add 3 drops phenolphthalein indicator.",
      "Titrate against 0.05 N NaOH until a faint pink color persists for 30 seconds. Calculate % Alcoholic Acidity."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Solvent Neutralization",
        title: "90% Ethanol Neutralization",
        action: "Add 3 drops phenolphthalein to 100mL 90% ethanol; add 0.05N NaOH dropwise until faint pink.",
        scientificMechanism: "Neutralizes ambient dissolved CO2 and trace acids in ethanol to guarantee zero blank background.",
        controlPoint: "CCP 1: Ensure ethanol concentration is strictly 90% v/v.",
        reagentsInvolved: ["90% Ethanol", "Phenolphthalein"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Maceration & Extraction",
        title: "Lipid Acid Extraction",
        action: "Macerate 5.0g flour with 50mL neutralized 90% ethanol in stoppered flask for 24 hours.",
        scientificMechanism: "90% ethanol selectively extracts unesterified free fatty acids while precipitating starches/proteins.",
        controlPoint: "CCP 2: Stopper tightly to prevent ethanol evaporation.",
        reagentsInvolved: ["Neutral 90% Ethanol"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Filtration Isolation",
        title: "Particulate Phase Separation",
        action: "Filter macerate through Whatman No. 1 paper; discard first 5mL filtrate.",
        scientificMechanism: "Separates solid flour residue from clear alcoholic organic acid solution.",
        controlPoint: "CCP 3: Perform filtration rapidly under cover to prevent solvent loss.",
        reagentsInvolved: ["Whatman No. 1 Paper"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Volumetric Neutralization",
        title: "Alkalimetric Titration",
        action: "Titrate 25mL clear extract against 0.05N NaOH to persistent pink endpoint (pH 8.3).",
        scientificMechanism: "Hydroxyl ions (-OH) react stoichiometrically with carboxyl groups (-COOH) of free fatty acids.",
        controlPoint: "CCP 4: Microburette precision must be 0.02mL.",
        reagentsInvolved: ["0.05N NaOH", "Phenolphthalein"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Statutory Compliance Calculation",
        title: "H2SO4 Equivalent Calculation & Audit",
        action: "Calculate % Alcoholic Acidity as H2SO4. Verify result <= 0.12% (FSSAI statutory limit).",
        scientificMechanism: "Quantifies total free organic acidity normalized to sulfuric acid mass equivalent.",
        controlPoint: "Quality Gate: Result > 0.12% indicates stale, decomposed flour unsuitable for baking.",
        reagentsInvolved: ["Calculation Formula"]
      }
    ]
  ,
    factorsExplanation: [
    {
        "question": "Alcoholic Acidity ke liye 90% neutral ethanol hi kyun use hota hai?",
        "answer": "1. Neutral alcohol selectively lipid breakdown se nikli Free Fatty Acids (FFA) ko extract karta hai.\n2. Aqueous extraction cereal mineral phytates aur phosphates ko dissolve kar degi jisse false high acidity titrate hogi.\n3. Acidity ko % H2SO4 ke equivalent factor (0.002452 g per ml 0.05N NaOH) mein standard Indian Specifications (IS 1155) ke anusaar express kiya jaata hai."
    }
],
    factorsSummaryTable: [
    {
        "parameter": "Extraction Solvent",
        "value": "90% Neutral Ethanol",
        "reason": "Selectively extracts free fatty acids without dissolving phytates"
    },
    {
        "parameter": "Extraction Time",
        "value": "24 hours",
        "reason": "Ensures complete diffusion and equilibrium extraction of lipolytic acids"
    },
    {
        "parameter": "Titrant",
        "value": "0.05 N NaOH",
        "reason": "Standardized alkaline titrant using phenolphthalein indicator"
    }
]
  },

  // 4. CHEMICAL TEST: Total Ash & Acid Insoluble Ash (AIA) in Flours
  {
    id: "cereal-chem-3",
    category: "Cereal & Grain Products",
    testType: "Chemical",
    productName: "Wheat Atta, Maida, Suji, Besan, Rice Flour",
    testName: "Total Ash & Acid Insoluble Ash (AIA / Silica Ash) Determination",
    shortSummary: "Quantifies inorganic mineral content and detects extraneous sand, silica, soil, and adulterant mineral powders in flours via 600°C muffle furnace incineration.",
    detailedScientificRationale:
      "Total Ash represents the total inorganic mineral residue remaining after complete thermal combustion of organic matter (starch, protein, lipids). In sound wheat, minerals (potassium, phosphorus, magnesium) are concentrated in the outer pericarp (bran layer, ash ~6-8%), while the starchy endosperm has very low ash (~0.4-0.5%).\n\nTherefore, Total Ash measures flour extraction rate: Maida (refined endosperm) must have low ash (max 1.0%), while Whole Wheat Atta has higher ash (max 2.0%). Acid Insoluble Ash (AIA) specifically quantifies siliceous matter (sand, dirt, quartz, added soapstone, or chalk). AIA is determined by digesting Total Ash in 10% Hydrochloric Acid (HCl), which dissolves mineral salts (carbonates, phosphates) while leaving insoluble silica (SiO2).",
    detailedTestPrinciple:
      "5.0g sample is carbonized over a burner, then incinerated in a muffle furnace at 550°C-600°C until white/light-grey carbon-free ash is obtained (Total Ash). For Acid Insoluble Ash, the Total Ash is boiled with 25mL 10% HCl, filtered through ashless filter paper (Whatman No. 42), washed free of chlorides, re-ignited at 600°C, and weighed.",
    chemicalEquation: "Organic Matter + O2 (600°C) ⟶ CO2 ↑ + H2O ↑ (Combustion)  |  SiO2 + HCl (10%) ⟶ SiO2 (Insoluble Sand Residue)",
    formulaBreakdown: {
      formula: "% Total Ash = [(W2 - W0) / W_sample] × 100   |   % Acid Insoluble Ash = [(W_AIA - W0) / W_sample] × 100",
      variables: [
        { symbol: "W0", description: "Tare mass of empty ignited silica crucible (g)" },
        { symbol: "W2", description: "Mass of crucible + Total Ash after 600°C incineration (g)" },
        { symbol: "W_AIA", description: "Mass of crucible + Acid Insoluble Ash after HCl digestion & re-ignition (g)" },
        { symbol: "W_sample", description: "Mass of flour sample taken (typically 5.0000g)" }
      ],
      derivation: "Gravimetric mass ratio after high-temperature pyrolysis. Burning at 600°C oxidizes all carbonaceous organic polymers to volatile CO2 and H2O. Inorganic oxides, silicates, and phosphates remain as ash. HCl treatment selectively dissolves calcium/magnesium carbonates and phosphates, isolating acid-insoluble crystalline silica.",
      factorOrigin: "600°C furnace temperature selected to ensure complete carbon oxidation without volatilizing alkali chlorides (NaCl/KCl decompose >650°C). 10% HCl (approx 3N) provides optimal hydrogen ion concentration to dissolve calcium phosphate and metal carbonates.",
      unitAnalysis: "% Ash = [g inorganic residue / g sample] × 100 = % w/w (on dry/as-is basis)",
      practicalExample: "W_sample = 5.0000g Atta. Crucible tare W0 = 20.1234g. Ash + Crucible W2 = 20.2034g. Total Ash = [(20.2034 - 20.1234) / 5.0000] × 100 = (0.0800 / 5.0000) × 100 = 1.60% (Within FSSAI limit max 2.0% for Atta) ✓. AIA = 0.03% (Within limit 0.10%) ✓"
    },
    referenceStandard: "FSSAI Manual 03 (Cereals) / IS 1155 / ISO 2171",
    reagentsAndApparatus: [
      "Muffle Furnace with Pyrometer Control (600°C ± 15°C)",
      "High-Silica Porcelain or Platinum Crucibles (50mL capacity)",
      "10% Hydrochloric Acid (HCl, AR grade)",
      "Ashless Filter Paper (Whatman No. 42, 11cm)",
      "Desiccator with Active Silica Gel & Analytical Balance"
    ],
    prescribedLimit: "Atta: Total Ash Max 2.0%, AIA Max 0.10% | Maida: Total Ash Max 1.0%, AIA Max 0.05% | Suji: Total Ash Max 1.0%, AIA Max 0.05%",
    riskIfFailed: "Excessive sand/grit contamination (dental erosion), adulteration with soapstone/chalk, poor flour color, high bran contamination.",
    procedureSteps: [
      "Ignite clean silica crucible at 600°C for 30 min, cool in desiccator, and record tare weight (W0).",
      "Weigh 5.0000g flour into crucible (W_sample). Char carefully over low Bunsen flame until smoking stops.",
      "Transfer crucible to muffle furnace at 600°C ± 15°C for 3-4 hours until light grey carbon-free ash forms.",
      "Cool in desiccator, weigh Total Ash (W2), and compute % Total Ash.",
      "For AIA: Add 25mL 10% HCl to crucible, cover with watch glass, boil gently for 10 min.",
      "Filter through Whatman 42 paper, wash with hot distilled water until filtrate is chloride-free (silver nitrate test).",
      "Transfer paper to crucible, dry, ash in furnace at 600°C for 1 hour, cool, and weigh Acid Insoluble Ash."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Crucible Ignition Tare",
        title: "Thermal Crucible Conditioning",
        action: "Ignite porcelain crucible at 600°C for 30 min; cool in desiccator and weigh W0.",
        scientificMechanism: "Removes volatile surface contaminants and moisture from ceramic crucible.",
        controlPoint: "CCP 1: Desiccator cooling time standardized to 45 minutes.",
        reagentsInvolved: ["Porcelain Crucible"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Pre-Charring Pyrolysis",
        title: "Bunsen Flame Pre-Charring",
        action: "Char 5.0g flour over low flame until smoke ceases.",
        scientificMechanism: "Volatilizes organic gases slowly, preventing sample swelling and spattering in furnace.",
        controlPoint: "CCP 2: Do not allow sample to catch open flame.",
        reagentsInvolved: ["Bunsen Burner"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: High-Temp Combustion",
        title: "600°C Muffle Incineration",
        action: "Incinerate in furnace at 600°C ± 15°C for 3 hours until grey ash forms; weigh Total Ash W2.",
        scientificMechanism: "Complete thermal oxidation of carbon/hydrogen/nitrogen into CO2, H2O, and NOx gases.",
        controlPoint: "CCP 3: Furnace temp must not exceed 650°C (prevents NaCl volatilization).",
        reagentsInvolved: ["Muffle Furnace"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Acid Digestion & Filtration",
        title: "10% HCl Silica Isolation",
        action: "Boil Total Ash with 25mL 10% HCl for 10 min; filter through Whatman 42 ashless paper; wash chloride-free.",
        scientificMechanism: "HCl dissolves soluble phosphates and carbonates; insolubles (quartz/sand) remain on paper.",
        controlPoint: "CCP 4: Wash with hot water until Silver Nitrate test shows no AgNO3 white precipitate.",
        reagentsInvolved: ["10% HCl", "Whatman 42 Paper", "AgNO3 Indicator"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Re-ignition & AIA Audit",
        title: "Second Ignition & Silica Audit",
        action: "Burn filter paper in crucible at 600°C for 1 hour; cool, weigh W_AIA, and calculate % AIA.",
        scientificMechanism: "Consumes ashless paper, leaving net weight of acid-insoluble sand and silica.",
        controlPoint: "Quality Gate: Atta AIA > 0.10% indicates sand adulteration; batch rejection.",
        reagentsInvolved: ["Muffle Furnace"]
      }
    ]
  ,
    factorsExplanation: [
    {
        "question": "Muffle furnace ka temperature 550°C - 600°C hi kyun rakhte hain?",
        "answer": "1. 550°C par saara carbonaceous organic matter CO2 aur H2O mein complete oxidize ho jaata hai.\n2. Agar temperature 650°C se exceed ho to sodium chloride aur potassium chloride volatilize hone lagte hain, jisse ash content artificially kam aayega.\n3. 10% dilute HCl physiological minerals (Ca, Mg phosphates) ko dissolve karta hai, leaving only insoluble crystalline sand and silica (AIA)."
    }
],
    factorsSummaryTable: [
    {
        "parameter": "Muffle Temperature",
        "value": "550°C - 600°C",
        "reason": "Complete organic carbon oxidation without alkali chloride volatilization"
    },
    {
        "parameter": "HCl Digestion",
        "value": "10% v/v HCl",
        "reason": "Dissolves biological minerals leaving sand and quartz silica"
    },
    {
        "parameter": "Filter Paper",
        "value": "Whatman 41/42 Ashless",
        "reason": "Leaves < 0.0001g ash on burning for zero blank distortion"
    }
]
  },

  // 5. PHYSICAL TEST: Sedimentation Value (Zeleny Test) in Wheat Flour
  {
    id: "cereal-phys-2",
    category: "Cereal & Grain Products",
    testType: "Physical",
    productName: "Wheat Flour, Atta, Maida",
    testName: "Sedimentation Value Determination (Zeleny Test for Gluten Quality)",
    shortSummary: "Measures swelling capacity of gluten proteins in lactic acid-isopropanol solution to evaluate bread-baking potential and wheat gluten strength.",
    detailedScientificRationale:
      "The Zeleny Sedimentation Test evaluates both gluten quantity and gluten quality in wheat flours. When flour is suspended in an aqueous isopropyl alcohol solution containing lactic acid, gluten proteins (specifically high-molecular-weight glutenin subunits) absorb water and swell rapidly into large flocculent aggregates.\n\nIn contrast, damaged starch and non-gluten proteins swell very little and settle rapidly. High-quality bread wheat with strong gluten forms a large, slowly settling fluffy sediment volume (Zeleny value 40-70 mL). Low-protein soft wheat (suitable only for biscuits/cakes) forms a dense, rapidly settling small sediment volume (Zeleny value 15-25 mL).",
    detailedTestPrinciple:
      "3.2g flour sample is suspended in 50mL Bromophenol Blue solution in a 100mL graduated cylinder, shaken for 5 minutes, then mixed with 25mL Lactic Acid-Isopropanol reagent. After controlled shaking and standing for exactly 5 minutes, the volume of swollen sedimented gluten layer is read directly in milliliters.",
    chemicalEquation: "Glutenin Protein + Lactic Acid / Isopropanol (pH 3.2) ⟶ Swollen Viscoelastic Flocculent Sediment (mL Zeleny Volume)",
    formulaBreakdown: {
      formula: "Zeleny Sedimentation Value = V_sediment (mL, read directly from graduated cylinder)",
      variables: [
        { symbol: "V_sediment", description: "Volume of swollen gluten sediment layer after 5 min standing (mL)" },
        { symbol: "Lactic Acid", description: "Lowers pH to 3.2, expanding glutenin protein tertiary structure" },
        { symbol: "Isopropanol", description: "Denatures soluble proteins while swelling insoluble glutenin matrix" }
      ],
      derivation: "Direct physical volume measurement of swollen gel phase. Lactic acid protonates basic amino acid side chains (-NH3+), generating electrostatic repulsion that expands glutenin coil structures. Isopropanol lowers dielectric constant, facilitating inter-chain aggregation into visible sedimented flocculent layers.",
      factorOrigin: "pH 3.2 optimized by Zeleny (1947) because it maximizes glutenin swelling while minimizing starch gelatinization. Bromophenol blue dye added to stain protein layer blue for sharp visual demarcation of sediment line.",
      unitAnalysis: "Zeleny Value = mL (volume of swollen gluten layer per 3.2g flour)",
      practicalExample: "3.2g Maida sample tested: Sediment layer settles to 48 mL mark after 5 minutes standing. Zeleny Value = 48 mL (High-strength bread flour quality) ✓"
    },
    referenceStandard: "ISO 5529 / ICC Standard 116 / FSSAI Manual 03",
    reagentsAndApparatus: [
      "Lactic Acid Stock Reagent (250mL 85% Lactic Acid + 400mL Isopropanol diluted to 1L)",
      "Bromophenol Blue Solution (4 mg/L in water)",
      "100mL Glass Stoppered Graduated Cylinders (1 mL graduations)",
      "Mechanical Cylinder Shaker (40 strokes/min)"
    ],
    prescribedLimit: "High Bread Strength Wheat: Zeleny > 40 mL | Medium Strength: 30 - 40 mL | Low Strength (Biscuit Wheat): < 25 mL",
    riskIfFailed: "Collapse of dough during bread baking, poor oven spring, dense gummy crumb structure, and incorrect suitability classification.",
    procedureSteps: [
      "Weigh 3.20g flour into a 100mL glass stoppered cylinder, add 50mL Bromophenol Blue solution.",
      "Stopper cylinder, mix by shaking horizontally for 5 minutes (or 40 strokes/min on shaker).",
      "Add 25mL Lactic Acid-Isopropanol reagent, mix by inverting cylinder 10 times in 15 seconds.",
      "Place cylinder strictly vertical on level bench; start 5-minute timer.",
      "Read volume of swollen sediment layer in mL exactly at 5-minute mark. Report as Zeleny Sedimentation Value."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Sample Dosing",
        title: "Flour Suspension Dosing",
        action: "Weigh 3.20g flour into 100mL graduated cylinder; add 50mL Bromophenol Blue solution.",
        scientificMechanism: "Disperses flour particles and stains protein matrix blue for visual boundary detection.",
        controlPoint: "CCP 1: Ensure no dry flour clumps stick to cylinder bottom.",
        reagentsInvolved: ["Bromophenol Blue"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Hydration Shaking",
        title: "5-Minute Dispersal Shake",
        action: "Shake cylinder mechanically at 40 strokes/min for 5 minutes.",
        scientificMechanism: "Hydrates protein molecules and breaks up flour agglomerates.",
        controlPoint: "CCP 2: Maintain constant shaking frequency.",
        reagentsInvolved: ["Mechanical Shaker"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Acid Swelling Reaction",
        title: "Lactic Acid Reagent Addition",
        action: "Add 25mL Lactic Acid-Isopropanol reagent; invert cylinder 10 times in 15 seconds.",
        scientificMechanism: "Lactic acid (pH 3.2) induces electrostatic swelling of glutenin polymers.",
        controlPoint: "CCP 3: Exactly 10 inversions; do not shake vigorously.",
        reagentsInvolved: ["Lactic Acid Reagent"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Quiescent Sedimentation",
        title: "5-Minute Vertical Settling",
        action: "Place cylinder vertical on vibration-free bench; start 5-minute timer.",
        scientificMechanism: "Swollen gluten aggregates settle slowly due to high drag, separating from dense starch particles.",
        controlPoint: "CCP 4: Bench must be completely free of vibration.",
        reagentsInvolved: ["Timer"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Zeleny Readout & Audit",
        title: "Sediment Boundary Readout",
        action: "Read sediment volume in mL at 5 min mark. Classify flour strength.",
        scientificMechanism: "Quantifies structural gluten quality and bread baking potential.",
        controlPoint: "Quality Gate: Zeleny < 25 mL indicates weak wheat suitable only for biscuits, not bread.",
        reagentsInvolved: ["Zeleny Chart"]
      }
    ]
  ,
    factorsExplanation: [
    {
        "question": "Zeleny Sedimentation Test bread-making quality kaise batata hai?",
        "answer": "1. Lactic acid aur SDS solution mein glutenin proteins hydrate hokar swell hote hain aur voluminous flocculent structures banate hain.\n2. Strong gluten proteins sedimentation ko resist karte hain aur unka sediment volume high (> 30 ml) rehta hai.\n3. Weak gluten proteins disperse ho kar collapse ho jaate hain aur low volume (< 20 ml) dete hain."
    }
],
    factorsSummaryTable: [
    {
        "parameter": "Reagent Medium",
        "value": "Lactic Acid + SDS",
        "reason": "Induces selective swelling of glutenin polymers"
    },
    {
        "parameter": "Sedimentation Time",
        "value": "5 minutes",
        "reason": "Standardized gravitational settling interval for layer reading"
    }
]
  },

  // 6. PHYSICAL TEST: Falling Number Determination in Wheat & Flour
  {
    id: "cereal-phys-3",
    category: "Cereal & Grain Products",
    testType: "Physical",
    productName: "Wheat Grains, Atta, Maida",
    testName: "Falling Number Determination (Hagberg-Perten Method for Alpha-Amylase Activity)",
    shortSummary: "Measures endogenous Alpha-Amylase enzyme activity in sprouted wheat and flour by measuring time required for a viscometer stirrer to drop through gelatinized starch paste.",
    detailedScientificRationale:
      "Alpha-Amylase (1,4-alpha-D-glucan glucanohydrolase) is an endo-enzyme that cleaves internal alpha-1,4-glucosidic bonds of starch (amylose and amylopectin), liquefying viscous gelatinized starch pastes into low-molecular-weight dextrins and maltose.\n\nIn sound un-sprouted wheat, Alpha-Amylase activity is very low (Falling Number > 300 seconds). When wheat suffers pre-harvest rain damage ('sprouting'), germinating grains synthesize massive amounts of Alpha-Amylase. High Alpha-Amylase causes starch liquefaction during bread baking, resulting in sticky, gummy bread crumb, dark burnt crust (excessive Maillard sugars), and collapsed loaf structure.",
    detailedTestPrinciple:
      "7.00g flour is suspended in 25mL distilled water in a precision viscometer tube. The tube is placed in a 100°C boiling water bath and agitated with a cassette stirrer for 60 seconds to gelatinize starch into a thick viscous paste. At exactly 60 seconds, the stirrer is released from the top position and allowed to fall by gravity through the liquefied paste. The total time in seconds from immersion to complete fall of the stirrer is the Falling Number.",
    chemicalEquation: "Gelatinized Starch Paste (Viscous) + Alpha-Amylase (100°C) ⟶ Dextrins + Maltose (Liquefied Paste) [Falling Time ∝ 1 / Amylase Activity]",
    formulaBreakdown: {
      formula: "Falling Number (FN) = Total Time (Seconds) = 60s (Gelatinization Shake) + T_fall (Seconds)",
      variables: [
        { symbol: "FN", description: "Falling Number value in seconds (higher = lower enzyme activity = sound wheat)" },
        { symbol: "60s", description: "Constant initial 60-second mechanical stirring phase at 100°C" },
        { symbol: "T_fall", description: "Time taken for metallic viscometer stirrer to drop through starch paste (s)" }
      ],
      derivation: "Inverse relationship to enzyme kinetics: High Alpha-Amylase activity degrades starch polymers rapidly ⟶ low paste viscosity ⟶ fast stirrer fall ⟶ LOW Falling Number (< 150s). Low enzyme activity ⟶ starch remains intact and highly viscous ⟶ slow stirrer fall ⟶ HIGH Falling Number (> 300s).",
      factorOrigin: "100°C boiling bath standard because starch gelatinization temperature for wheat is ~65-75°C. At 100°C, starch gelatinizes instantly, providing a uniform substrate for Alpha-Amylase action before thermal denaturation of the enzyme at ~80-85°C. 7.00g sample mass calibrated for 14.0% moisture basis per Hagberg-Perten standard.",
      unitAnalysis: "Falling Number = Total seconds (s)",
      practicalExample: "Maida sample tested: 60s stirring + 240s fall time = Falling Number 300 seconds. Indicates sound wheat flour with ideal Alpha-Amylase activity for bread baking ✓"
    },
    referenceStandard: "ISO 3093 / ICC Standard 107 / AACCI 56-81.01 / FSSAI Manual 03",
    reagentsAndApparatus: [
      "Perten Falling Number Apparatus (Model 1500 / 1800) with boiling water bath",
      "Precision Calibrated Viscometer Tubes and Metallic Cassette Stirrers",
      "Distilled Water Dispenser (25.0 mL ± 0.2 mL)",
      "Analytical Balance & Laboratory Mill (0.8mm sieve)"
    ],
    prescribedLimit: "Sound Wheat / Maida: Falling Number 250 - 350 seconds | Sprouted Rain-Damaged Wheat: < 150 seconds (REJECT for baking)",
    riskIfFailed: "Sticky gummy bread crumb, poor slicing, dark burnt crust, collapsed loaves, and complete baking process failure.",
    procedureSteps: [
      "Determine sample moisture; weigh exact mass corresponding to 7.00g at 14% moisture basis into viscometer tube.",
      "Add 25.0 mL distilled water at 20°C using precision dispenser.",
      "Insert rubber stopper and shake tube vigorously 20 times to form uniform clump-free suspension.",
      "Scrape down sides with stirrer; place tube with stirrer into boiling water bath of Perten apparatus.",
      "Automated cycle starts: 60s automatic stirring at 100°C, then stirrer released at top.",
      "Record total time in seconds when stirrer reaches bottom sensor. Report as Falling Number (FN)."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Moisture-Adjusted Dosing",
        title: "14% Moisture Basis Dosing",
        action: "Weigh sample mass adjusted for moisture (7.00g at 14% moisture) into viscometer tube.",
        scientificMechanism: "Standardizes dry starch mass to ensure constant substrate-to-water ratio.",
        controlPoint: "CCP 1: Grind grain to pass 0.8mm sieve.",
        reagentsInvolved: ["Distilled Water"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Vigorous Dispensing & Mixing",
        title: "Slurry Homogenization",
        action: "Add 25.0mL distilled water; stopper and shake 20 times to suspend flour.",
        scientificMechanism: "Ensures complete hydration of starch granules without air pocket formation.",
        controlPoint: "CCP 2: Check tube bottom for un-suspended dry flour.",
        reagentsInvolved: ["Viscometer Tube"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Thermal Gelatinization Shake",
        title: "100°C Thermal Gelatinization",
        action: "Insert tube into boiling bath; automatic stirring for 60 seconds at 100°C.",
        scientificMechanism: "Starch granules swell and gelatinize into a viscous paste; Alpha-Amylase degrades starch bonds.",
        controlPoint: "CCP 3: Water bath must boil vigorously (100°C ± 0.5°C).",
        reagentsInvolved: ["Boiling Water Bath"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Gravity Fall Viscometry",
        title: "Stirrer Release & Fall Timing",
        action: "At 60s, stirrer is released; falls by gravity through paste until bottom optical sensor triggers.",
        scientificMechanism: "Fall speed is governed by Stokes' Law of viscosity: lower paste viscosity ⟶ faster fall.",
        controlPoint: "CCP 4: Sensor must trigger cleanly without mechanical friction.",
        reagentsInvolved: ["Metallic Stirrer"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Alpha-Amylase Audit",
        title: "Falling Number Readout & Audit",
        action: "Record total seconds. Verify FN = 250-350s for bread wheat.",
        scientificMechanism: "Quantifies pre-harvest sprouting damage and amylolytic enzyme activity.",
        controlPoint: "Quality Gate: FN < 150s indicates sprouted rain-damaged wheat unfit for baking.",
        reagentsInvolved: ["Perten Software"]
      }
    ]
  ,
    factorsExplanation: [
    {
        "question": "Falling Number sprouted grains mein kam kyun ho jaata hai?",
        "answer": "1. Pre-harvest rain se grain mein alpha-amylase enzyme thousand-fold synthesize hota hai.\n2. 100°C boiling water bath mein starch gelatinize hote hi alpha-amylase tezi se starch paste ko liquefy kar deta hai.\n3. Paste patla hone par viscometer stirrer quickly fall karta hai, resulting in Falling Number < 200 seconds."
    }
],
    factorsSummaryTable: [
    {
        "parameter": "Bath Temperature",
        "value": "100°C Boiling Water",
        "reason": "Rapid starch gelatinization and optimal alpha-amylase liquefaction"
    },
    {
        "parameter": "Stirring Strokes",
        "value": "60 strokes",
        "reason": "Uniform mechanical slurry suspension prior to free-fall timing"
    }
]
  },

  // 7. PHYSICAL TEST: Particle Size Fineness & Sieving Test in Flours
  {
    id: "cereal-phys-4",
    category: "Cereal & Grain Products",
    testType: "Physical",
    productName: "Wheat Atta, Maida, Suji, Besan",
    testName: "Particle Size Granulometry & Sieving Fineness Test",
    shortSummary: "Measures particle size distribution and granulation fineness of flours using standardized woven wire sieves to control water absorption and baking performance.",
    detailedScientificRationale:
      "Particle size distribution (granulometry) governs physical dough handling, hydration kinetics, and finished product texture. Fine particles (< 75 µm) have high surface area, absorbing water rapidly during dough mixing. Coarse particles (> 212 µm) hydrate slowly, causing gritty texture in finished baked goods.\n\nDifferent flours require distinct particle size profiles:\n• **Maida (Refined Wheat Flour)**: Must be fine, 98%+ passing through 180 µm sieve.\n• **Wheat Atta**: Balanced profile containing coarse bran particles (passing 500 µm, retained on 180 µm) for traditional Chapati puffing and chewiness.\n• **Suji / Rava (Semolina)**: Coarse endosperm particles (passing 850 µm, retained on 212 µm) for pasta/seviyan extrusion.",
    detailedTestPrinciple:
      "100.0g flour sample is placed on top of a stacked set of calibrated standard woven wire cloth sieves (e.g. 500 µm, 250 µm, 180 µm, Pan) mounted on a mechanical Ro-Tap sieve shaker. After shaking for 15 minutes, the mass of flour retained on each sieve is weighed and calculated as mass percentage.",
    chemicalEquation: "Flour Sample (100g) ⟶ Ro-Tap Mechanical Sieving ⟶ Fractionation by Mesh Aperture Size (µm)",
    formulaBreakdown: {
      formula: "% Retained on Sieve = (W_sieve_residue / W_total) × 100",
      variables: [
        { symbol: "W_sieve_residue", description: "Mass of flour retained on specific sieve after 15 min shaking (g)" },
        { symbol: "W_total", description: "Total initial mass of flour sample taken (100.0g)" }
      ],
      derivation: "Direct physical mass fractionation. Particle diameter relative to square mesh opening determines passage vs retention. Sum of all fraction masses must equal 100.0g ± 0.5g.",
      factorOrigin: "15 minutes shaking time standardized on Ro-Tap shaker (290 taps/min, 150 oscillations/min) to achieve complete sieving equilibrium without causing particle attrition or static charge aggregation.",
      unitAnalysis: "% Retained = [g retained / g total sample] × 100 = % w/w",
      practicalExample: "100.0g Maida tested: 0.2g retained on 212 µm sieve; 1.5g on 180 µm sieve; 98.3g in pan (<180 µm). % Passing 180 µm = 98.3% (Complies with FSSAI requirement min 98.0% passing 180 µm) ✓"
    },
    referenceStandard: "IS 1155 / IS 1009 / IS 460 (Test Sieves) / FSSAI Manual 03",
    reagentsAndApparatus: [
      "Standard Test Sieves (IS 460 brass/stainless steel, 200mm dia: 850µm, 500µm, 212µm, 180µm, Pan)",
      "Ro-Tap Mechanical Sieve Shaker with tapping hammer",
      "Analytical Balance (0.01g precision) & Soft Sieve Cleaning Brush"
    ],
    prescribedLimit: "Maida: Min 98.0% passing through 180 µm sieve | Suji: Min 95.0% passing 850 µm, Max 10% passing 180 µm | Atta: Min 98.0% passing 500 µm",
    riskIfFailed: "Gritty mouthfeel, uneven dough hydration, poor chapati softness, improper pasta extrusion, and customer quality rejections.",
    procedureSteps: [
      "Clean and dry standard test sieves; nest them in descending order of aperture size with pan at bottom.",
      "Weigh exactly 100.0g flour sample onto the top sieve.",
      "Cover top sieve, clamp assembly into Ro-Tap shaker, and run for 15 minutes.",
      "Carefully remove each sieve; brush undersides with soft brush, and weigh retained flour (W_sieve_residue).",
      "Calculate mass percentage retained on each sieve and percentage passing through target mesh size."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Sieve Stack Assembly",
        title: "Calibrated Sieve Nesting",
        action: "Nest clean sieves (500µm, 250µm, 180µm, Pan) in descending order of aperture size.",
        scientificMechanism: "Establishes multi-stage physical aperture filtration cascade.",
        controlPoint: "CCP 1: Check sieve cloth for tears or clogged wire mesh.",
        reagentsInvolved: ["Standard Test Sieves"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Sample Dosing",
        title: "100.0g Sample Dosing",
        action: "Weigh 100.0g flour sample onto the top coarsest sieve.",
        scientificMechanism: "Standardizes sample mass for direct percentage conversion.",
        controlPoint: "CCP 2: Ensure balance zeroed with 100g Class F weight.",
        reagentsInvolved: ["Analytical Balance"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Mechanical Ro-Tap Sieving",
        title: "15-Minute Mechanical Tapping",
        action: "Clamp nest into Ro-Tap shaker; run for 15 minutes with tapping arm.",
        scientificMechanism: "Combination of orbital oscillation and vertical tapping breaks agglomerates, causing particles < aperture to fall through.",
        controlPoint: "CCP 3: Run time strictly 15 min ± 10 sec.",
        reagentsInvolved: ["Ro-Tap Shaker"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Fraction Weighing",
        title: "Mass Fractionation Weighing",
        action: "Weigh flour retained on each sieve individually to 0.01g precision.",
        scientificMechanism: "Quantifies particle size mass distribution across mesh spectrum.",
        controlPoint: "CCP 4: Total sum of fractions must equal 100.0g ± 0.5g.",
        reagentsInvolved: ["Sieve Brush"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Granulometry Audit",
        title: "% Passing Calculation & Audit",
        action: "Calculate % passing 180 µm (Maida) or 500 µm (Atta). Compare with FSSAI limits.",
        scientificMechanism: "Verifies milling fineness compliance for intended culinary application.",
        controlPoint: "Quality Gate: Maida passing < 98.0% = coarse improper milling; batch rejection.",
        reagentsInvolved: ["Sieving Report"]
      }
    ]
  ,
    factorsExplanation: [
    {
        "question": "Particle size granularity chapati quality ko kaise affect karti hai?",
        "answer": "1. Coarse particles (> 425 micron) water absorption slow karte hain aur chapati dry aur brittle banti hai.\n2. Fine particles (< 150 micron) rapid hydration karte hain lekin excessive fines dough ko sticky banate hain.\n3. IS 1155 standard: Min 98% atta must pass through 40-mesh (425 micron) sieve."
    }
],
    factorsSummaryTable: [
    {
        "parameter": "Top Sieve",
        "value": "IS 425 µm (40 mesh)",
        "reason": "FSSAI threshold: minimum 98% passing required"
    },
    {
        "parameter": "Bottom Sieve",
        "value": "IS 150 µm (100 mesh)",
        "reason": "FSSAI threshold: maximum 50% retained"
    }
]
  },

  // 8. MICROBIOLOGICAL TEST: Yeast & Mold Count in Flours & Grains
  {
    id: "cereal-micro-1",
    category: "Cereal & Grain Products",
    testType: "Microbiological",
    productName: "Wheat, Atta, Maida, Suji, Rice, Oats, Poha, Besan",
    testName: "Yeast and Mold Count (YMC) (DRBC Agar Method)",
    shortSummary: "Enumerates viable fungal spores and molds (Aspergillus, Penicillium, Fusarium) capable of synthesizing dangerous mycotoxins in stored grains.",
    detailedScientificRationale:
      "Cereal grains harvested from agricultural fields carry a diverse microflora consisting of field fungi (Alternaria, Fusarium, Cladosporium) and storage fungi (Aspergillus flavus, Aspergillus niger, Penicillium verrucosum). Molds proliferate when temperature and relative humidity rise above critical thresholds.\n\nMany mold species synthesize extremely potent, heat-stable secondary metabolites termed Mycotoxins: Aspergillus flavus produces Aflatoxin B1 (hepatocarcinogen), Fusarium species produce Deoxynivalenol (DON / Vomitoxin) and T-2 toxin, while Penicillium produces Ochratoxin A (nephrotoxin). Enumerating Yeast & Mold Count (YMC) on selective DRBC agar media provides a direct microbiological safety audit of flour sanitary condition.",
    detailedTestPrinciple:
      "10.0g sample is homogenized in 90mL sterile 0.1% Peptone Water (1:10 initial dilution). Serial decimal dilutions (10^-2, 10^-3) are spread-plated onto DRBC Agar plates containing Rose Bengal dye and Chloramphenicol. Rose Bengal restricts spreading of fast-growing mucoraceous fungi (Rhizopus) and stains colonies pink/red. Chloramphenicol selectively inhibits bacterial growth. Plates are incubated at 25°C ± 1°C for 5 days in the dark.",
    chemicalEquation: "Fungal Spore (Viable) + DRBC Agar + Incubation (25°C / 5 Days) ⟶ Pink/Red Filamentous Mold Colony (CFU/g)",
    formulaBreakdown: {
      formula: "Yeast & Mold Count (CFU/g) = (Sum of Colonies N) / [(n1 + 0.1 × n2) × d]",
      variables: [
        { symbol: "N", description: "Total count of fungal/yeast colonies on counted plates (15-150 colonies)" },
        { symbol: "n1", description: "Number of plates counted at lowest dilution" },
        { symbol: "n2", description: "Number of plates counted at second dilution" },
        { symbol: "d", description: "Dilution factor corresponding to first dilution counted (e.g. 10^-2)" }
      ],
      derivation: "Standard Plate Count Theorem: Each viable fungal propagule (spore/hyphal fragment) produces one visible colony under optimal conditions. Serial dilution reduces concentration to statistically countable range. Multiplication by dilution factor extrapolates back to original sample concentration.",
      factorOrigin: "PDA pH 3.5 optimal for fungi (bacteria require pH 6.5-7.5). Chloramphenicol 100 mg/L in DRBC: broad-spectrum bacterial inhibitor, doesn't affect fungi. Rose Bengal 0.05 g/L: limits mold spread (prevents overgrowth of neighboring colonies). 25°C incubation for mesophilic molds; 5-day duration allows slow-growing species.",
      unitAnalysis: "CFU/g = Colony Forming Units per gram of cereal flour",
      practicalExample: "10.0g Atta homogenized in 90mL peptone water (10^-1). 0.1mL of 10^-2 dilution plated on 2 DRBC plates yields 18 and 22 colonies. Mean = 20 colonies. CFU/g = (20 / 0.1) × 100 = 20,000 / 10 = 200 CFU/g (Within FSSAI limit max 1,000 CFU/g) ✓"
    },
    referenceStandard: "FSSAI Manual 14 (Microbiology) / ISO 21527 Part 1 / IS 5403",
    reagentsAndApparatus: [
      "Dichloran Rose Bengal Chloramphenicol (DRBC) Agar Media",
      "Sterile 0.1% Buffered Peptone Water (Diluent)",
      "Stomacher Homogenizer & Sterile Filter Bags",
      "BOD Incubator (25°C ± 1°C) & Sterile L-shaped Glass Spreaders"
    ],
    prescribedLimit: "Wheat Atta / Maida / Suji: Max 1,000 CFU/g | Rice Grains: Max 500 CFU/g | Besan: Max 1,000 CFU/g",
    riskIfFailed: "Biosynthesis of carcinogenic Aflatoxin B1, Ochratoxin A, Fusarium toxins, grain discoloration, off-odors, and acute gastroenteritis.",
    procedureSteps: [
      "Aseptically weigh 10.0g flour into sterile stomacher bag containing 90mL 0.1% peptone water (10^-1 dilution).",
      "Homogenize in stomacher for 2 minutes at 230 RPM.",
      "Prepare serial dilutions up to 10^-3 by transferring 1.0mL into 9.0mL peptone tubes.",
      "Pipette 0.1mL from dilutions onto duplicate DRBC agar plates; spread evenly using sterile glass spreader.",
      "Incubate plates inverted in dark at 25°C ± 1°C for 5 days. Count colonies and report as CFU/g."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Aseptic Sampling & Homogenization",
        title: "Aseptic Dilution Preparation",
        action: "Aseptically weigh 10.0g flour into 90mL sterile 0.1% Peptone Water in stomacher bag.",
        scientificMechanism: "Rehydrates dormant fungal spores without osmotic shock.",
        controlPoint: "CCP 1: Perform inside Laminar Airflow Hood (Class 100).",
        reagentsInvolved: ["0.1% Peptone Water"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Serial Dilution Cascade",
        title: "Decimal Dilution Cascade",
        action: "Transfer 1.0mL into 9.0mL peptone tubes to prepare 10^-2 and 10^-3 dilutions.",
        scientificMechanism: "Reduces microbial concentration to yield countable plate density (15-150 CFU/plate).",
        controlPoint: "CCP 2: Vortex tubes thoroughly between transfers.",
        reagentsInvolved: ["Peptone Diluent Tubes"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Selective DRBC Inoculation",
        title: "Surface Spread Inoculation",
        action: "Spread 0.1mL dilution on pre-dried DRBC agar plates using sterile L-spreader.",
        scientificMechanism: "Rose Bengal restricts mucoraceous mold spreading; Chloramphenicol inhibits bacteria.",
        controlPoint: "CCP 3: Allow agar surface to absorb liquid inoculum completely before inverting.",
        reagentsInvolved: ["DRBC Agar", "Sterile Glass Spreader"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Psychro-Mesophilic Incubation",
        title: "Dark Incubation Cycle",
        action: "Incubate plates inverted at 25°C ± 1°C in dark for 5 days (120 hours).",
        scientificMechanism: "Optimal temperature and dark environment for vegetative fungal hyphae growth and sporulation.",
        controlPoint: "CCP 4: Keep incubator strictly at 25°C. Light causes photo-degradation of Rose Bengal into toxic compounds.",
        reagentsInvolved: ["BOD Incubator (25°C)"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Colony Enumeration & Risk Audit",
        title: "CFU Calculation & Mycotoxin Risk Gate",
        action: "Count pink/colored colonies; compute CFU/g. Verify YMC <= 1,000 CFU/g.",
        scientificMechanism: "Quantifies viable fungal propagules per gram of cereal flour.",
        controlPoint: "Quality Gate: Count > 1,000 CFU/g triggers mandatory LC-MS/MS Aflatoxin B1 audit.",
        reagentsInvolved: ["Colony Counter"]
      }
    ]
  ,
    factorsExplanation: [
    {
        "question": "DRBC Agar aur Chloramphenicol ka kya role hai?",
        "answer": "1. Dichloran Rose Bengal Chloramphenicol (DRBC) selective medium hai jo bacterial growth ko suppress karta hai.\n2. Dichloran aur Rose Bengal fast-spreading molds (jaise Rhizopus) ki colony diameter ko restrict karte hain taaki slow-growing colonies accurately count ho sakein."
    }
],
    factorsSummaryTable: [
    {
        "parameter": "Incubation Temp",
        "value": "25°C ± 1°C",
        "reason": "Optimal growth temperature for food-borne yeasts and molds"
    },
    {
        "parameter": "Incubation Period",
        "value": "5 days",
        "reason": "Allows mature colony development for accurate enumeration"
    }
]
  },

  // 9. CHEMICAL TEST: Aflatoxin B1 & Total Aflatoxins in Grains & Flours
  {
    id: "cereal-chem-4",
    category: "Cereal & Grain Products",
    testType: "Chemical",
    productName: "Wheat, Atta, Corn Flour, Maize, Besan, Rice, Oats",
    testName: "Aflatoxin B1 & Total Aflatoxin Analysis (IAC Cleanup + HPLC-FLD / ELISA)",
    shortSummary: "Quantifies extremely potent hepatocarcinogenic fungal mycotoxins (Aflatoxin B1, B2, G1, G2) synthesized by Aspergillus flavus in grains to enforce statutory safety limits.",
    detailedScientificRationale:
      "Aflatoxins are difuranocoumarin derivatives synthesized as secondary metabolites by Aspergillus flavus and Aspergillus parasiticus when grains are stored under high moisture (> 14%) and warm temperatures (25-35°C). Aflatoxin B1 (AFB1) is classified by IARC as a Group 1 Human Carcinogen, exhibiting extreme hepatotoxicity and genotoxicity.\n\nIn human hepatocytes, cytochrome P450 enzymes (CYP1A2/3A4) bioactivate AFB1 into Aflatoxin B1-8,9-epoxide, which covalently binds to guanine bases in DNA (forming exo-8,9-epoxide-deoxyguanosine adducts), inducing transversion mutations in the p53 tumor suppressor gene and triggering hepatocellular carcinoma (liver cancer). FSSAI strictly mandates max 10 µg/kg (ppb) Total Aflatoxin in all cereal products.",
    detailedTestPrinciple:
      "Sample is extracted with Methanol:Water (70:30 v/v). The crude extract is diluted with phosphate-buffered saline (PBS), filtered, and passed through an Immunoaffinity Column (IAC) containing monoclonal antibodies specific for Aflatoxins B1, B2, G1, G2. Aflatoxins are selectively bound while matrix interferences are washed away with water. Aflatoxins are eluted with pure methanol, derivatized with photochemical post-column reactor (Phred) or TFA, and quantified using Reverse-Phase HPLC with Fluorescence Detection (Ex: 365 nm, Em: 440 nm).",
    chemicalEquation: "AFB1 (Toxin) + CYP450 ⟶ AFB1-8,9-Epoxide (Reactive Intermediary) + DNA Guanine ⟶ DNA Adduct (Mutagenesis)",
    formulaBreakdown: {
      formula: "Aflatoxin B1 (µg/kg) = (A_sample / A_std) × C_std × (V_eluate / V_equivalent) × (1 / W_sample)",
      variables: [
        { symbol: "A_sample", description: "Fluorescence peak area of Aflatoxin B1 in sample chromatogram" },
        { symbol: "A_std", description: "Fluorescence peak area of certified reference AFB1 standard" },
        { symbol: "C_std", description: "Concentration of AFB1 reference standard (ng/mL or µg/L)" },
        { symbol: "V_eluate", description: "Final volume of methanol eluate from IAC column (mL)" },
        { symbol: "W_sample", description: "Equivalent mass of sample represented by aliquot loaded onto IAC (g)" }
      ],
      derivation: "Based on linear fluorescence intensity response: F = k × C. Immunoaffinity purification isolates 100% of target aflatoxins while eliminating background fluorescent matrix interferences, allowing ultra-trace quantification down to 0.1 µg/kg (ppb).",
      factorOrigin: "Methanol:Water (70:30 v/v) extraction solvent chosen because it breaks hydrogen bonding between aflatoxins and cereal proteins/lipids. 365 nm excitation / 440 nm emission wavelengths correspond to coumarin ring native fluorescence maximum.",
      unitAnalysis: "Aflatoxin B1 = µg/kg = parts per billion (ppb)",
      practicalExample: "25g Besan sample extracted with 100mL 70% MeOH. 10mL extract (= 2.5g sample equivalent) loaded on IAC column. Eluted in 1.5mL MeOH. HPLC analysis yields AFB1 concentration = 4.2 µg/kg. Total Aflatoxin = 6.8 µg/kg (Within FSSAI statutory limit max 10.0 µg/kg) ✓"
    },
    referenceStandard: "FSSAI Manual 03 & 14 / ISO 16050 / AOAC 991.31",
    reagentsAndApparatus: [
      "HPLC System with Fluorescence Detector (Ex 365 nm, Em 440 nm) & Photochemical Post-Column Reactor (Phred)",
      "Immunoaffinity Columns (IAC) for Aflatoxins B1, B2, G1, G2",
      "HPLC-Grade Methanol, Acetonitrile & Ultra-Pure 18.2 MΩ Water",
      "High-Speed Blender / Homogenizer & Glass Fiber Filter Papers (VICAM)"
    ],
    prescribedLimit: "Total Aflatoxins (B1+B2+G1+G2): Max 10.0 µg/kg (ppb) in all Cereal & Grain flours",
    riskIfFailed: "Acute aflatoxicoses, chronic liver cirrhosis, hepatocellular carcinoma (liver cancer), immune suppression, and immediate statutory seizure of grain shipment.",
    procedureSteps: [
      "Weigh 25.0g sample into blender jar, add 100mL 70% Methanol, blend at high speed for 3 minutes.",
      "Filter extract through fluted paper; dilute 10mL filtrate with 40mL Phosphate Buffered Saline (PBS).",
      "Pass diluted extract through IAC column at 1 drop/second rate under gentle vacuum.",
      "Wash IAC column with 10mL water to remove non-bound interferences.",
      "Elute Aflatoxins with 1.5mL HPLC grade methanol into autosampler vial.",
      "Inject 20 µL into HPLC (C18 Column, Water:Methanol:Acetonitrile 60:20:20, FLD Ex 365nm / Em 440nm).",
      "Calculate AFB1 and Total Aflatoxins in µg/kg against linear 0.5-50 ppb calibration curve."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Solvent Extraction",
        title: "70% Methanol Extraction",
        action: "Blend 25.0g flour with 100mL 70% Methanol for 3 minutes.",
        scientificMechanism: "Polar organic solvent extracts lipophilic coumarin aflatoxin molecules from starch/protein matrix.",
        controlPoint: "CCP 1: Blend at high speed (>10,000 RPM) for full 3 minutes.",
        reagentsInvolved: ["70% Methanol"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: PBS Dilution & Filtration",
        title: "PBS Dilution & Glass Fiber Filtration",
        action: "Filter crude extract; dilute 10mL filtrate with 40mL PBS buffer.",
        scientificMechanism: "Reduces methanol concentration to <15% so antibodies on IAC column remain stable.",
        controlPoint: "CCP 2: Ensure diluted extract is crystal clear before loading on IAC.",
        reagentsInvolved: ["PBS Buffer"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Immunoaffinity Cleanup",
        title: "IAC Antibody Cleanup",
        action: "Pass 50mL diluted sample through IAC column; wash with 10mL water.",
        scientificMechanism: "Monoclonal antibodies specifically capture AFB1, AFB2, AFG1, AFG2 via epitope binding.",
        controlPoint: "CCP 3: Flow rate must not exceed 1-2 drops/second.",
        reagentsInvolved: ["Immunoaffinity Column"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Methanol Elution & HPLC FLD",
        title: "Methanol Elution & HPLC Detection",
        action: "Elute aflatoxins with 1.5mL pure Methanol; inject into HPLC-FLD with post-column reactor.",
        scientificMechanism: "Methanol denatures antibodies, releasing bound aflatoxins. Photochemical reactor enhances AFB1 fluorescence.",
        controlPoint: "CCP 4: Verify FLD wavelength calibration at 365nm/440nm.",
        reagentsInvolved: ["HPLC Grade Methanol", "C18 Column"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Carcinogen Safety Audit",
        title: "PPB Computation & Statutory Audit",
        action: "Compute AFB1 and Total Aflatoxins in µg/kg. Verify Total <= 10.0 µg/kg.",
        scientificMechanism: "Guarantees safety against hepatocarcinogenic fungal mycotoxins.",
        controlPoint: "Quality Gate: Total Aflatoxins > 10.0 ppb = immediate product recall + criminal prosecution.",
        reagentsInvolved: ["HPLC Calibration Curve"]
      }
    ]
  ,
    factorsExplanation: [
    {
        "question": "Immunoaffinity Column (IAC) aur Kobra Cell kyun use hote hain?",
        "answer": "1. Immunoaffinity column par immobilized monoclonal antibodies sirf Aflatoxins (B1, B2, G1, G2) ko capture karte hain aur complex cereal matrix ko wash out karte hain.\n2. Kobra cell electrochemically bromine generate karta hai jo Aflatoxin B1 aur G1 ko derivatize karke fluorescence intensity ko 50-fold enhance karta hai."
    }
],
    factorsSummaryTable: [
    {
        "parameter": "Extraction Solvent",
        "value": "Methanol:Water (80:20)",
        "reason": "Quantitative recovery of mycotoxins from cereal matrix"
    },
    {
        "parameter": "Fluorescence Detection",
        "value": "Ex 365 nm / Em 440 nm",
        "reason": "Selective wavelength for derivatized aflatoxin fluorophores"
    }
]
  },

  // 10. PHYSICAL TEST: Extraneous Matter, Damaged & Weeviled Grains in Raw Grains
  {
    id: "cereal-phys-5",
    category: "Cereal & Grain Products",
    testType: "Physical",
    productName: "Wheat Grains, Paddy, Milled Rice, Maize, Barley, Oats",
    testName: "Extraneous Matter, Damaged & Weeviled Grains Inspection",
    shortSummary: "Quantifies physical impurities including organic debris, stones, chaff, insect-damaged, rodent-affected, and weeviled grain kernels by manual sorting and weighing.",
    detailedScientificRationale:
      "Physical grain quality dictates storage stability, milling yield, and statutory safety. Raw grain consignments contain various physical impurities classified under FSSAI rules:\n\n1. **Extraneous Matter (Inorganic)**: Stones, dust, gravel, soil lumps, metallic bits.\n2. **Extraneous Matter (Organic)**: Chaff, straw, weed seeds, stem pieces, insect fragments.\n3. **Damaged Grains**: Kernels damaged by heat, fungi, moisture, or sprouting (discolored/gummy).\n4. **Weeviled Grains**: Kernels bored or hollowed out by storage pests (Sitophilus granarius, Rhyzopertha dominica, Tribolium castaneum).\n5. **Shrivelled & Immature Grains**: Underdeveloped thin kernels that reduce milling yield.\n\nStones damage flour mill rollers, while insect-bored grains carry pest enzymes, elevated uric acid, and fungal spores.",
    detailedTestPrinciple:
      "500.0g representative grain sample obtained using a conical divider is spread on a clean white sorting tray. Foreign matter, broken kernels, damaged grains, and weeviled grains are physically separated using forceps, magnifying glass, and standard sieves, then weighed on an analytical balance to compute mass percentages.",
    chemicalEquation: "Raw Grain Consignment (500g) ⟶ Physical Manual Sorting ⟶ Extraneous Matter % + Weeviled Grains %",
    formulaBreakdown: {
      formula: "% Defect Category = (W_defect / W_sample) × 100",
      variables: [
        { symbol: "W_defect", description: "Mass of separated defect category (stones, weeviled, damaged, organic matter) (g)" },
        { symbol: "W_sample", description: "Total initial representative grain sample mass taken (typically 500.0g)" }
      ],
      derivation: "Gravimetric physical fractionation ratio. Total initial mass W_sample is separated into pure sound grain mass and individual defect category masses.",
      factorOrigin: "500g sample size standardized by IS 4333 (Part 1) to provide statistical confidence across heterogeneous grain shipments.",
      unitAnalysis: "% Defect = [g defect category / g total grain sample] × 100 = % w/w",
      practicalExample: "500.0g Wheat sample inspected: Stones = 1.0g (0.2%); Organic chaff = 1.5g (0.3%); Weeviled grains = 4.0g (0.8%). Total Extraneous Matter = 0.5% (Within FSSAI limit max 1.0%). Weeviled grains = 0.8% (Within FSSAI limit max 1.0%) ✓"
    },
    referenceStandard: "IS 4333 (Part 1) / FSSAI Manual 03 (Cereals) / ISO 520",
    reagentsAndApparatus: [
      "Conical Grain Sample Divider (Boerner Type)",
      "Standard Grain Inspection Sieves (3.35mm, 1.70mm slotted)",
      "Enamelled White Metal Sorting Trays & Forceps",
      "Magnifying Glass (5x / 10x magnification)",
      "Analytical Balance (0.01g precision)"
    ],
    prescribedLimit: "Wheat/Rice: Extraneous Organic Matter Max 1.0%, Inorganic Stones Max 0.5%, Weeviled Grains Max 1.0% count, Damaged Grains Max 2.0%",
    riskIfFailed: "Roller mill machinery damage, elevated insect fragments & uric acid in flour, mold spoilage, and statutory consignment rejection.",
    procedureSteps: [
      "Pass bulk grain consignment through Boerner sample divider to obtain a representative 500.0g lab sample.",
      "Pour sample onto 3.35mm / 1.70mm slotted sieves to separate large foreign matter and dust.",
      "Transfer sieved grain onto white sorting tray under bright illumination.",
      "Using forceps and magnifying glass, separate: (a) Inorganic stones; (b) Organic chaff/seeds; (c) Weeviled grains; (d) Fungi-damaged grains.",
      "Weigh each separated fraction on analytical balance to 0.01g precision; compute mass percentage for each defect category."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Representative Sub-Sampling",
        title: "Boerner Sample Splitting",
        action: "Pass grain lot through Boerner conical divider to draw representative 500.0g sample.",
        scientificMechanism: "Randomized gravity splitting eliminates segregation bias in heterogeneous grain lots.",
        controlPoint: "CCP 1: Ensure divider is clean and level.",
        reagentsInvolved: ["Boerner Sample Divider"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Mechanical Sieve Separation",
        title: "Sieve Dust & Chaff Screening",
        action: "Shake sample over 3.35mm and 1.70mm slotted sieves.",
        scientificMechanism: "Separates oversize chaff and undersize dust/sand by physical size exclusion.",
        controlPoint: "CCP 2: Collect all pan dust into inorganic fraction.",
        reagentsInvolved: ["Grain Sieves"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Visual Sorting Tray Inspection",
        title: "White Tray Manual Sorting",
        action: "Spread grain on white tray; sort stones, weeviled kernels, and fungal damaged grains using forceps.",
        scientificMechanism: "Visual and tactile discrimination of insect exit holes, mold discoloration, and mineral hardness.",
        controlPoint: "CCP 3: Use 5x magnifying lens for micro-insect bored holes.",
        reagentsInvolved: ["Sorting Tray", "Forceps"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Gravimetric Defect Weighing",
        title: "Fraction Mass Determination",
        action: "Weigh each separated defect fraction to 0.01g precision.",
        scientificMechanism: "Quantifies individual physical defect mass fractions.",
        controlPoint: "CCP 4: Balance must be leveled and zeroed.",
        reagentsInvolved: ["Analytical Balance"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: FSSAI Physical Audit",
        title: "Defect Percentage & Safety Gate",
        action: "Calculate % for each defect category. Compare against FSSAI limits.",
        scientificMechanism: "Enforces statutory limits for grain cleanliness and pest infestation.",
        controlPoint: "Quality Gate: Weeviled grains > 1.0% or Stones > 0.5% = consignment rejection.",
        reagentsInvolved: ["Grain Inspection Report"]
      }
    ]
  ,
    factorsExplanation: [
    {
        "question": "Weeviled aur damaged grains ki inspection kyun critical hai?",
        "answer": "1. Insect weevils (Sitophilus oryzae) endosperm ko andar se hollow kar dete hain jisse test weight (hectolitre weight) gir jaata hai.\n2. Damaged grains mein fungal contamination aur uric acid build-up ho jaata hai jo statutory limits exceed kar sakta hai."
    }
],
    factorsSummaryTable: [
    {
        "parameter": "Sample Size",
        "value": "500 g representative",
        "reason": "Statistically valid lot sampling per IS 4333 Part 1"
    },
    {
        "parameter": "Inspection Method",
        "value": "Manual sorting & magnification",
        "reason": "Accurate physical segregation of foreign matter"
    }
]
  }
,
// 11. CHEMICAL TEST: Crude Protein Determination (Macro Kjeldahl)
  {
    id: "cereal-chem-5",
    category: "Cereal & Grain Products",
    testType: "Chemical",
    productName: "Wheat, Atta, Maida, Suji, Besan, Rice, Oats",
    testName: "Crude Protein Determination (Macro Kjeldahl Nitrogen Digestion Method)",
    shortSummary: "Quantifies total nitrogen to determine crude protein content using specific nitrogen-to-protein conversion factors (Wheat: 5.70, Pulses/Besan: 6.25, Rice: 5.95).",
    detailedScientificRationale:
      "Protein content governs the nutritional value, gluten matrix formation, and technical functionality of flours. In wheat, storage proteins (gliadins and glutenins) form the gluten complex upon hydration. In pulses like Bengal gram (Besan), protein is naturally high (FSSAI mandate: min 22.0% dry basis). Measuring protein verifies compliance with statutory standards and unmasks adulteration with low-protein starches or adulterant flours.",
    detailedTestPrinciple:
      "Flour is digested with concentrated H2SO4 at 420°C in the presence of K2SO4 and CuSO4 catalysts. Organic nitrogen is converted into ammonium sulphate. Alkali (40% NaOH) is added to liberate ammonia gas, which is steam distilled into 4% boric acid and titrated against standardized 0.1 N HCl.",
    chemicalEquation: "Organic Nitrogen + H2SO4 ⟶ (NH4)2SO4 ⟶ + 2NaOH ⟶ 2NH3 ↑ + Na2SO4 ⟶ + H3BO3 ⟶ NH4:H2BO3 ⟶ + HCl ⟶ NH4Cl",
    formulaBreakdown: {
      formula: "% Crude Protein (dry basis) = [ % Nitrogen × Factor ] × [ 100 / (100 - M) ]",
      variables: [
        { symbol: "% Nitrogen", description: "[(V_sample - V_blank) × N_acid × 1.4007] / Sample Mass (g)" },
        { symbol: "Factor", description: "Specific Nitrogen conversion factor (Wheat: 5.70, Besan/Pulses: 6.25, Rice: 5.95)" },
        { symbol: "M", description: "Moisture content of flour sample (%)" }
      ],
      derivation: "Based on Kjeldahl nitrogen release. Factor 5.70 is derived because wheat gluten protein contains 17.54% Nitrogen (100 / 17.54 = 5.70). Factor 6.25 applies to standard proteins containing 16.0% Nitrogen (100 / 16.0 = 6.25).",
      factorOrigin: "Wheat proteins are rich in glutamine and glutamic acid (higher amido nitrogen), requiring factor 5.70 per ISO 20483 and IS 7219.",
      unitAnalysis: "% Protein = [g protein / g dry sample] × 100",
      practicalExample: "Sample = 1.0000g Atta, Moisture = 11.5%, V_sample = 15.2 ml 0.1N HCl, V_blank = 0.2 ml. % N = 2.101%. % Protein = 2.101 × 5.70 = 11.98% (dry basis 13.54%) ✓"
    },
    referenceStandard: "IS 7219:1973 / AOAC 979.09 / ISO 20483 / FSSAI Manual 03",
    reagentsAndApparatus: [
      "Concentrated H2SO4 (98%, nitrogen-free)",
      "Catalyst Mixture: K2SO4 : CuSO4.5H2O (9:1 w/w)",
      "40% w/v Sodium Hydroxide Solution",
      "4% w/v Boric Acid Solution with Mixed Indicator",
      "Standardized 0.1 N Hydrochloric Acid Titrant",
      "Kjeldahl Digestion Block (420°C) and Steam Distillation Unit"
    ],
    prescribedLimit: "Atta: Min 10.0% (dry basis) | Maida: Min 10.0% | Besan: Min 22.0% (dry basis)",
    riskIfFailed: "Severe nutritional non-compliance, defective gluten network, chapati tearing, or fraudulent dilution with starches.",
    procedureSteps: [
      "Accurately weigh 1.0000g flour into a dry 250 ml Kjeldahl digestion flask.",
      "Add 7.0g catalyst mixture (K2SO4 + CuSO4) and 15 ml concentrated H2SO4.",
      "Digest on heating block at 420°C for 60-90 minutes until digest is completely clear emerald green.",
      "Cool digest, dilute cautiously with 50 ml distilled water, and connect to distillation unit.",
      "Add 50 ml 40% NaOH; steam distill liberated NH3 into 25 ml 4% boric acid receiver for 4 minutes.",
      "Titrate collected distillate with standardized 0.1 N HCl to violet-pink endpoint; run blank simultaneously."
    ],
    flowchartSteps: [
      { stepNumber: 1, phaseName: "Digestion", title: "Acid Catalyzed Cleavage", action: "Heat at 420°C with H2SO4 + catalyst until clear green.", scientificMechanism: "Converts organic amine nitrogen to (NH4)2SO4.", controlPoint: "420°C digestion block." },
      { stepNumber: 2, phaseName: "Distillation", title: "Alkaline Steam Stripping", action: "Add 40% NaOH and steam distill NH3 into 4% boric acid.", scientificMechanism: "Displaces ammonia into volatile gaseous form.", controlPoint: "Receiver temperature < 30°C." },
      { stepNumber: 3, phaseName: "Titration", title: "Quantitative Acidimetry", action: "Titrate with 0.1N HCl to endpoint.", scientificMechanism: "Neutralizes ammonium borate complex stoichiometrically.", controlPoint: "Calibrated burette." }
    ],
    factorsExplanation: [
      {
        question: "Wheat ke liye factor 5.70 aur Besan ke liye 6.25 kyun use hota hai?",
        answer: "Wheat gluten proteins (gliadins and glutenins) mein glutamic acid aur glutamine amides bahut high proportion mein hote hain, jisse wheat protein mein nitrogen content 17.54% hota hai (100 / 17.54 = 5.70). Agar standard factor 6.25 lagaya to wheat protein 10% overestimate ho jayega. Besan (chickpea) ek legume hai jisme average 16.0% nitrogen hota hai, isliye 6.25 factor lagta hai."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Wheat Factor", value: "5.70", reason: "Accounts for 17.54% high amido nitrogen in wheat gluten" },
      { parameter: "Besan / Pulses Factor", value: "6.25", reason: "Standard 16.0% nitrogen in pulse globulin proteins" },
      { parameter: "Rice Factor", value: "5.95", reason: "Specific 16.8% nitrogen content in rice glutelin" }
    ]
  },

  // 12. CHEMICAL TEST: Crude Fiber Determination
  {
    id: "cereal-chem-6",
    category: "Cereal & Grain Products",
    testType: "Chemical",
    productName: "Wheat, Atta, Maida, Suji, Besan, Oats, Poha",
    testName: "Crude Fiber Determination (Sequential Acid & Alkali Digestion Method)",
    shortSummary: "Determines insoluble structural cellulose and lignin from grain bran layers to distinguish whole wheat flour from refined maida.",
    detailedScientificRationale:
      "Crude fiber consists of structural plant cell wall polysaccharides (cellulose, hemicelluloses, lignin) concentrated in the outer pericarp and seed coat (bran). In genuine whole wheat atta, crude fiber ranges from 1.8% to 2.5% (dry basis). In refined maida, fiber is virtually absent (max 0.3%). Fiber quantification prevents adulteration with non-grain husks or dilution with refined flours.",
    detailedTestPrinciple:
      "Defatted sample is boiled sequentially in 1.25% (0.255 N) H2SO4 to hydrolyze starch and soluble sugars, followed by 1.25% (0.313 N) NaOH to saponify fats and dissolve proteins. The remaining indigestible organic residue is dried, weighed, and incinerated in a muffle furnace at 550°C. Mass loss on ashing quantifies Crude Fiber.",
    chemicalEquation: "Flour Matrix + H2SO4 (1.25%) + NaOH (1.25%) ⟶ Soluble Fraction + Insoluble Fiber Residue ⟶ Incineration (550°C) ⟶ CO2 ↑ + Mineral Ash",
    formulaBreakdown: {
      formula: "% Crude Fiber (dry basis) = [ (W1 - W2) / Sample Weight ] × [ 100 / (100 - M) ] × 100",
      variables: [
        { symbol: "W1", description: "Weight of Gooch crucible + dried fiber residue (g)" },
        { symbol: "W2", description: "Weight of Gooch crucible + incinerated mineral ash (g)" },
        { symbol: "M", description: "Moisture percentage of sample (%)" }
      ],
      derivation: "Standard Weende gravimetric procedure measuring combustible organic cell wall residue.",
      factorOrigin: "1.25% acid and 1.25% alkali simulate mammalian gastrointestinal digestive cleavage.",
      unitAnalysis: "% Crude Fiber = [g combustible fiber / g dry sample] × 100",
      practicalExample: "Sample = 2.0000g Atta, Moisture = 11.0%, W1 - W2 = 0.0410g. % Fiber (as is) = 2.05%. % Fiber (dry basis) = 2.05 × [100 / 89.0] = 2.30% (Passes FSSAI Max 2.5% limit) ✓"
    },
    referenceStandard: "IS 1155:1968 / AOAC 962.09 / FSSAI Manual 03",
    reagentsAndApparatus: [
      "1.25% w/v H2SO4 Solution (0.255 N)",
      "1.25% w/v NaOH Solution (0.313 N)",
      "Fibertec / Reflux Condenser Apparatus",
      "Gooch Crucible or Sintered Glass Filter (Porosity 2)"
    ],
    prescribedLimit: "Atta: Max 2.5% (dry basis) | Maida: Max 0.3% | Suji: Max 0.5% | Besan: Max 3.0%",
    riskIfFailed: "Admixture with excessive woody bran/husk or adulteration with refined maida.",
    procedureSteps: [
      "Extract 2.0000g sample with petroleum ether to remove lipids.",
      "Boil with 200 ml 1.25% H2SO4 for exactly 30 minutes under reflux.",
      "Filter through fine linen / sintered crucible and wash acid-free with boiling water.",
      "Boil residue with 200 ml 1.25% NaOH for exactly 30 minutes under reflux.",
      "Filter, wash with hot water and ethanol, dry at 105°C to constant weight (W1).",
      "Incinerate in muffle furnace at 550°C for 2 hours, cool in desiccator, and reweigh (W2)."
    ],
    flowchartSteps: [
      { stepNumber: 1, phaseName: "Acid Hydrolysis", title: "Carbohydrate Solubilization", action: "Boil with 1.25% H2SO4 for 30 min.", scientificMechanism: "Hydrolyzes starch and sugars.", controlPoint: "Reflux temperature." },
      { stepNumber: 2, phaseName: "Alkali Hydrolysis", title: "Protein & Lipid Solubilization", action: "Boil with 1.25% NaOH for 30 min.", scientificMechanism: "Saponifies lipids and hydrolyzes proteins.", controlPoint: "Alkali strength." },
      { stepNumber: 3, phaseName: "Combustion", title: "Gravimetric Ashing", action: "Incinerate at 550°C for 2 hours.", scientificMechanism: "Burns combustible fiber polymers.", controlPoint: "Analytical balance." }
    ],
    factorsExplanation: [
      {
        question: "Crude fiber test mein petroleum ether se defatting kyun zaroori hai?",
        answer: "Lipids agar sample mein mojud rahein to alkali digestion mein heavy foaming paida hoti hai jo reflux condenser se overflow kar sakti hai, aur un-saponified waxes fiber residue mein jud kar false high reading dete hain."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Acid Digestion", value: "1.25% H2SO4, 30 min", reason: "Hydrolyzes starch, dextrins and soluble hemicelluloses" },
      { parameter: "Alkali Digestion", value: "1.25% NaOH, 30 min", reason: "Dissolves storage proteins and saponifies residual fatty acids" }
    ]
  },

  // 13. CHEMICAL TEST: Uric Acid Content
  {
    id: "cereal-chem-7",
    category: "Cereal & Grain Products",
    testType: "Chemical",
    productName: "Wheat, Atta, Maida, Suji, Besan, Rice, Oats, Poha",
    testName: "Uric Acid Content Determination (Storage Insect Weevil & Filth Index)",
    shortSummary: "Quantifies metabolic insect excreta via spectrophotometry at 292 nm to detect hidden weevil and beetle infestation in grains and flours.",
    detailedScientificRationale:
      "Stored grain insect pests (Tribolium castaneum, Sitophilus oryzae, Rhyzopertha dominica) excrete insoluble nitrogenous waste as Uric Acid. While dead adult insects can be removed by pre-cleaning sieves and aspirators, microscopic insect excreta remain pulverized inside milled flour. FSSAI mandates a strict ceiling of Max 100 mg/kg (ppm) uric acid.",
    detailedTestPrinciple:
      "Uric acid is extracted from flour into alkaline buffer solution. Uric acid possesses a characteristic conjugated double-bond UV absorption peak at 292 nm. The sample is treated with the enzyme Uricase, which selectively oxidizes uric acid into non-absorbing allantoin. The difference in absorbance before and after enzymatic digestion (ΔA_292) directly quantifies uric acid content.",
    chemicalEquation: "Uric Acid (A292 Peak) + O2 + 2H2O ⟶ [Uricase] ⟶ Allantoin (Non-absorbing) + CO2 + H2O2",
    formulaBreakdown: {
      formula: "Uric Acid (mg/kg or ppm) = [ (A_initial - A_final) × V_extract × Factor ] / Sample Mass (g)",
      variables: [
        { symbol: "A_initial", description: "Initial absorbance of extract at 292 nm" },
        { symbol: "A_final", description: "Final absorbance after complete uricase enzyme digestion" },
        { symbol: "Factor", description: "Calibration factor derived from pure potassium urate standards" }
      ],
      derivation: "Based on Beer-Lambert Law: A = ε × c × l at 292 nm with enzymatic blanking.",
      factorOrigin: "Uricase enzyme specificity guarantees zero interference from non-uric UV-absorbing cereal purines.",
      unitAnalysis: "mg uric acid / kg sample = ppm (parts per million)",
      practicalExample: "Sample = 5.0g Atta, ΔA_292 = 0.085. Standard factor = 1250. Uric Acid = 21.25 mg/kg (Well within FSSAI Max 100 mg/kg limit) ✓"
    },
    referenceStandard: "AOAC 969.46 / FSSAI Manual 03 (Cereals)",
    reagentsAndApparatus: [
      "Borate Buffer (pH 9.2)",
      "Purified Uricase Enzyme Solution (from Candida utilis)",
      "Standard Uric Acid / Potassium Urate Stock Solution",
      "UV-Vis Spectrophotometer with 10mm quartz cuvettes (292 nm)"
    ],
    prescribedLimit: "FSSAI Statutory Limit: Not more than 100 mg/kg (ppm)",
    riskIfFailed: "Severe insect pest infestation, unhygienic grain storage, filth contamination.",
    procedureSteps: [
      "Weigh 5.00g flour into centrifuge tube, add 30 ml borate buffer (pH 9.2), shake mechanically for 20 min.",
      "Centrifuge at 4000 rpm for 15 min; collect clear supernatant.",
      "Transfer 3.0 ml aliquot into quartz cuvette; record initial absorbance at 292 nm (A_initial).",
      "Add 0.1 ml active uricase enzyme solution, incubate at 37°C for 20 min until absorbance stabilizes.",
      "Record final absorbance at 292 nm (A_final) and calculate uric acid from standard calibration curve."
    ],
    flowchartSteps: [
      { stepNumber: 1, phaseName: "Extraction", title: "Alkaline Buffer Solubilization", action: "Extract with borate buffer at pH 9.2.", scientificMechanism: "Dissolves insoluble urate salts.", controlPoint: "Buffer pH 9.2." },
      { stepNumber: 2, phaseName: "Enzymatic Destruction", title: "Uricase Cleavage", action: "Digest with uricase enzyme at 37°C.", scientificMechanism: "Specifically converts uric acid to allantoin.", controlPoint: "Complete digestion." },
      { stepNumber: 3, phaseName: "UV Photometry", title: "Differential Absorbance", action: "Measure ΔA at 292 nm.", scientificMechanism: "Quantifies uric acid via molar extinction drop.", controlPoint: "Quartz cuvette." }
    ],
    factorsExplanation: [
      {
        question: "Uric acid test mein direct 292 nm reading kyun nahi le sakte, uricase enzyme kyun zaroori hai?",
        answer: "Cereals mein soluble purines, pyrimidines aur phenolic acids hote hain jo 290-300 nm UV region mein absorb karte hain. Direct UV reading lene se false high result aayega. Uricase enzyme selectively sirf uric acid ko destroy karta hai, isliye enzyme add karne se pehle aur baad ka absorbance difference (ΔA_292) pure uric acid ko accurately quantify karta hai."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Wavelength", value: "292 nm", reason: "Characteristic absorption maximum of conjugated purine ring in uric acid" },
      { parameter: "Extraction pH", value: "9.2 (Borate)", reason: "Ensures complete solubility of uric acid as monovalent urate anion" }
    ]
  },

  // 14. CHEMICAL TEST: Metanil Yellow Adulteration
  {
    id: "cereal-chem-8",
    category: "Cereal & Grain Products",
    testType: "Chemical",
    productName: "Besan (Gram Flour), Atta, Suji",
    testName: "Detection of Metanil Yellow & Non-Permitted Azo Dyes in Besan / Atta",
    shortSummary: "Colorimetric acid spot test and TLC to detect carcinogenic synthetic azo dye Metanil Yellow fraudulently added to besan.",
    detailedScientificRationale:
      "Metanil yellow (Sodium 4-(4-anilinophenylazo)benzenesulphonate) is a non-permitted toxic industrial azo dye. Unscrupulous manufacturers add it to adulterated besan (cut with low-grade dal or wheat flour) to replicate the natural deep yellow tint of pure Bengal gram. Metanil yellow consumption causes neurotoxicity, testicular damage, and bladder carcinogenesis. FSSAI maintains a zero-tolerance absolute prohibition.",
    detailedTestPrinciple:
      "Metanil yellow is an azo dye containing an -N=N- chromophore. Addition of concentrated hydrochloric acid (HCl) protonates the azo nitrogen, forming an intensely colored magenta-pink quinonoid resonant structure. Natural turmeric and carotenoid pigments fade or decompose, whereas synthetic metanil yellow pink color persists even upon subsequent dilution with water.",
    chemicalEquation: "Metanil Yellow (Yellow Azo) + Conc HCl ⟶ Quinonoid Protonated Complex (Intense Magenta Pink Color)",
    formulaBreakdown: {
      formula: "Qualitative Confirmation: Pink/Magenta Color with Conc. HCl = Metanil Yellow Positive (Adulterated)",
      variables: [
        { symbol: "Color Reaction", description: "Development of persistent magenta pink hue with conc HCl" },
        { symbol: "Dilution Check", description: "Color persists on addition of distilled water (confirms synthetic azo dye)" }
      ],
      derivation: "Standard DGHS / FSSAI spot qualitative chemical test for non-permitted water-soluble dyes.",
      factorOrigin: "Natural turmeric turns red in alkaline media but discharges in acid water; metanil yellow retains magenta under acid.",
      unitAnalysis: "Qualitative (Positive / Negative)",
      practicalExample: "5.0g Besan + 5 ml warm water + 2 ml Conc HCl ⟶ No magenta pink color; pale yellow remains ⟶ Negative for Metanil Yellow (Pure Besan) ✓"
    },
    referenceStandard: "FSSAI Manual 03 / DGHS Manual / IS 2400:1976",
    reagentsAndApparatus: [
      "Concentrated Hydrochloric Acid (AR Grade)",
      "Petroleum Ether (60-80°C)",
      "Thin Layer Chromatography (TLC) Silica Gel 60 F254 plates",
      "Solvent System: Petroleum ether : Benzene : Ethanol (50:25:25)"
    ],
    prescribedLimit: "FSSAI Statutory Mandate: Strictly Negative (Zero Tolerance)",
    riskIfFailed: "Severe toxic adulteration, chronic neurotoxicity, bladder carcinogenesis, immediate seizure and legal prosecution.",
    procedureSteps: [
      "Take 5.0g besan sample in a 50 ml test tube and add 10 ml warm distilled water; shake well to form a suspension.",
      "Carefully add 2-3 ml concentrated hydrochloric acid down the side of the test tube.",
      "Observe the color development at the interface immediately.",
      "If a vibrant magenta / pinkish-red color develops, dilute with 5 ml distilled water. If the magenta color persists, Metanil Yellow is confirmed positive.",
      "Verify doubtful samples by TLC using silica gel plate with standard Metanil Yellow reference spot."
    ],
    flowchartSteps: [
      { stepNumber: 1, phaseName: "Extraction", title: "Aqueous Suspension", action: "Mix 5g besan with 10 ml warm water.", scientificMechanism: "Extracts water-soluble synthetic dyes.", controlPoint: "Homogeneous slurry." },
      { stepNumber: 2, phaseName: "Acid Protonation", title: "Conc HCl Addition", action: "Add 2 ml conc HCl down tube wall.", scientificMechanism: "Protonates azo group to magenta quinonoid structure.", controlPoint: "Use fume hood." },
      { stepNumber: 3, phaseName: "Dilution Verification", title: "Water Addition Check", action: "Add 5 ml water; observe color persistence.", scientificMechanism: "Differentiates synthetic azo dye from natural curcuminoids.", controlPoint: "Persistent pink = Adulterated." }
    ],
    factorsExplanation: [
      {
        question: "Metanil yellow acid daalne par pink kyun hota hai aur natural haldi se alag kaise behave karta hai?",
        answer: "Metanil yellow ka chemical structure azo bond (-N=N-) par concentrated HCl ke protons attract karta hai, jisse electron delocalization quinonoid resonance form mein shift hoti hai jo bright magenta/pink dikhti hai. Natural haldi (curcumin) alkaline soap solution mein red hoti hai lekin acid mein neutral yellow rehti hai. Agar HCl daalne par pink color banta hai aur paani daalne par fade nahi hota, to ye 100% synthetic Metanil Yellow adulteration hai."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Reagent", value: "Conc. HCl", reason: "Protonates azo linkage into intensely colored magenta quinonoid resonance form" },
      { parameter: "Threshold", value: "Zero Tolerance (Negative)", reason: "Statutory toxic chemical adulterant ban under FSSAI" }
    ]
  },

  // 15. CHEMICAL TEST: Khesari Dal Adulteration
  {
    id: "cereal-chem-9",
    category: "Cereal & Grain Products",
    testType: "Chemical",
    productName: "Besan (Bengal Gram Flour)",
    testName: "Detection of Khesari Dal (Lathyrus sativus / BOAA Neurotoxin) in Besan",
    shortSummary: "Chemical color test to detect neurotoxic Khesari dal (lathyrus) containing BOAA adulterated into chickpea besan.",
    detailedScientificRationale:
      "Khesari dal (Lathyrus sativus) is an inexpensive pulse containing the neurotoxic non-protein amino acid beta-N-oxalyl-alpha,beta-diaminopropionic acid (BOAA / ODAP). Regular consumption causes Neurolathyrism, an irreversible neurological disorder characterized by spastic paralysis of the lower limbs. Adulteration of pure chana besan with khesari flour is strictly prohibited by FSSAI.",
    detailedTestPrinciple:
      "Sample is extracted with dilute hydrochloric acid. Unique phytochemical glycosides and amines present in Lathyrus sativus react with concentrated hydrochloric acid under boiling conditions, developing an intense pink-to-crimson color. Pure chana besan yields only a pale brownish-yellow color without pink coloration.",
    chemicalEquation: "Lathyrus Phytocompounds + Conc HCl + Heat (100°C) ⟶ Distinct Pink / Crimson Chromophore",
    formulaBreakdown: {
      formula: "Qualitative Confirmation: Intense Pink/Crimson Color on boiling with HCl = Khesari Dal Positive",
      variables: [
        { symbol: "Color Response", description: "Pink/red development indicates presence of Lathyrus sativus" }
      ],
      derivation: "Standard statutory test per IS 2400 (Specification for Besan) and FSSAI Manual 03.",
      factorOrigin: "ODAP / BOAA phytochemical co-extracts develop characteristic color reaction under strong acid hydrolysis.",
      unitAnalysis: "Qualitative (Positive / Negative)",
      practicalExample: "1.0g Besan + 10 ml 10% HCl, heated in boiling water bath for 15 min ⟶ Clear yellow, no pink hue ⟶ Negative for Khesari Dal ✓"
    },
    referenceStandard: "IS 2400:1976 / FSSAI Manual 03 (Cereals & Pulses)",
    reagentsAndApparatus: [
      "10% Dilute Hydrochloric Acid",
      "Concentrated Hydrochloric Acid (AR Grade)",
      "Boiling Water Bath (100°C)",
      "Borosilicate Glass Test Tubes"
    ],
    prescribedLimit: "FSSAI Statutory Mandate: Strictly Negative (Zero Tolerance)",
    riskIfFailed: "Neurolathyrism, permanent spastic lower limb paralysis, immediate product recall.",
    procedureSteps: [
      "Weigh 1.0g besan sample into a boiling test tube.",
      "Add 10 ml of 10% dilute HCl and shake thoroughly.",
      "Immerse the tube in a boiling water bath (100°C) for exactly 15 minutes.",
      "Observe the color: development of a persistent pink, red, or crimson tint indicates presence of Khesari dal.",
      "Pure Bengal gram flour produces a light yellow or light brownish color."
    ],
    flowchartSteps: [
      { stepNumber: 1, phaseName: "Acid Digestion", title: "10% HCl Extraction", action: "Add 10 ml 10% HCl to 1g sample.", scientificMechanism: "Extracts characteristic lathyrus marker compounds.", controlPoint: "Acid ratio." },
      { stepNumber: 2, phaseName: "Thermal Activation", title: "Boiling Water Bath", action: "Heat at 100°C for 15 minutes.", scientificMechanism: "Accelerates chromophore development.", controlPoint: "Water bath at 100°C." },
      { stepNumber: 3, phaseName: "Color Assessment", title: "Visual Inspection", action: "Check for pink / crimson hue.", scientificMechanism: "Positive indicates presence of neurotoxic Lathyrus sativus.", controlPoint: "Zero tolerance." }
    ],
    factorsExplanation: [
      {
        question: "Khesari dal besan mein kyun ban hai aur iska health impact kya hai?",
        answer: "Khesari dal mein BOAA (beta-N-oxalyl-amino-alanine) neurotoxin hota hai jo spinal cord ke motor neurons ko irreversibly damage kar deta hai. Continuous consumption se Neurolathyrism bimari hoti hai jisme pairon ka paralysis ho jaata hai aur insaan bina lathi ke chal nahi paata. Isliye FSSAI ke Food Safety Regulations ke tehat Khesari dal ki bikri aur kisi bhi food mein milawat 100% banned hai."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Active Neurotoxin", value: "BOAA / ODAP", reason: "Causes motor neuron degeneration and permanent spastic paraplegia" },
      { parameter: "Statutory Status", value: "Strictly Prohibited", reason: "Zero tolerance ban under FSSAI Food Safety Regulations" }
    ]
  },

  // 16. CHEMICAL TEST: Added Chalk / Calcium Carbonate
  {
    id: "cereal-chem-10",
    category: "Cereal & Grain Products",
    testType: "Chemical",
    productName: "Atta, Maida, Suji, Besan",
    testName: "Detection of Added Chalk / Calcium Carbonate / Lime in Flour",
    shortSummary: "Rapid chemical effervescence test with dilute HCl to detect fraudulent addition of mineral chalk (CaCO3) in flours.",
    detailedScientificRationale:
      "Chalk (calcium carbonate), limestone powder, or slaked lime are fraudulently added to wheat atta, maida, and suji to artificially whiten dark flours and increase bulk bag weight at zero cost. Mineral chalk is indigestible in excess, alters stomach pH, and dramatically elevates Total Ash values beyond statutory ceilings. Dilute acid testing instantly confirms chalk adulteration.",
    detailedTestPrinciple:
      "Carbonate salts react rapidly with dilute hydrochloric acid to produce calcium chloride, water, and vigorous carbon dioxide gas effervescence: CaCO3 + 2HCl ⟶ CaCl2 + H2O + CO2 ↑. The release of effervescent CO2 gas bubbles confirms the presence of added chalk.",
    chemicalEquation: "CaCO3 (Chalk Adulterant) + 2HCl (Dilute) ⟶ CaCl2 + H2O + CO2 ↑ (Vigorous Effervescence)",
    formulaBreakdown: {
      formula: "Qualitative Effervescence: Immediate gas bubbling upon HCl addition = Chalk / Carbonate Positive",
      variables: [
        { symbol: "CO2 Gas Release", description: "Brisk bubbling / foaming upon acid contact indicates inorganic carbonates" }
      ],
      derivation: "Standard acid-base displacement releasing volatile carbon dioxide gas.",
      factorOrigin: "Flours contain only organic carbon; inorganic carbonates do not naturally exist in unfortified whole grain.",
      unitAnalysis: "Qualitative (Positive / Negative)",
      practicalExample: "2.0g Atta + 5 ml 10% HCl ⟶ No gas evolution, smooth suspension ⟶ Negative for added chalk ✓"
    },
    referenceStandard: "IS 1155:1968 / FSSAI Manual 03",
    reagentsAndApparatus: [
      "10% Dilute Hydrochloric Acid (HCl)",
      "Watch Glass or Porcelain Spotting Plate",
      "Glass Rod"
    ],
    prescribedLimit: "FSSAI Statutory Mandate: Negative (No added inorganic carbonates permitted)",
    riskIfFailed: "Mineral adulteration, deceptive weight fraud, elevated ash content.",
    procedureSteps: [
      "Place 2.0g flour sample onto a clean watch glass or white porcelain spotting plate.",
      "Add 3-5 drops of 10% dilute hydrochloric acid directly onto the flour mound.",
      "Observe immediately under good lighting for brisk effervescence (gas bubbling).",
      "Vigorous bubbling and foaming indicates added chalk (CaCO3) or mineral carbonates.",
      "Pure unadulterated flour produces no effervescence."
    ],
    flowchartSteps: [
      { stepNumber: 1, phaseName: "Dosing", title: "Flour Mound Placement", action: "Place 2g sample on watch glass.", scientificMechanism: "Exposes flour surface for acid contact.", controlPoint: "Dry spotting plate." },
      { stepNumber: 2, phaseName: "Acid Contact", title: "Dilute HCl Addition", action: "Add 5 drops 10% HCl.", scientificMechanism: "Carbonates decompose releasing CO2 gas.", controlPoint: "Immediate observation." },
      { stepNumber: 3, phaseName: "Evaluation", title: "Effervescence Check", action: "Check for bubbling.", scientificMechanism: "Bubbling confirms CaCO3 adulteration.", controlPoint: "Negative = Pure." }
    ],
    factorsExplanation: [
      {
        question: "Added chalk aate ki quality aur bakery performance ko kaise kharab karta hai?",
        answer: "Chalk (calcium carbonate) aate ki natural slightly acidic pH (~6.0-6.4) ko alkaline bana deta hai. Alkalinity badhne se yeast fermentation ruk jaati hai, dough elasticity khatam ho jaati hai aur roti karkash banti hai. Iske alawa Total Ash 2.0% statutory limit se upar nikal jaata hai."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Reagent", value: "10% Dilute HCl", reason: "Instantly reacts with carbonates to release visible CO2 gas bubbles" },
      { parameter: "Statutory Status", value: "Negative", reason: "Zero added mineral carbonates permitted in standardized flours" }
    ]
  },

  // 17. CHEMICAL TEST: Fortificant Iron Assay
  {
    id: "cereal-chem-11",
    category: "Cereal & Grain Products",
    testType: "Chemical",
    productName: "Fortified Atta (+F), Fortified Maida, Fortified Rice",
    testName: "Determination of Fortificant Iron (o-Phenanthroline Colorimetric Spectrophotometry)",
    shortSummary: "Quantifies added elemental or chelated iron at 510 nm to verify compliance with national FSSAI +F fortification mandates (28.0 - 42.5 mg/kg).",
    detailedScientificRationale:
      "Under national food fortification standards (FSSAI +F logo), wheat atta and maida are fortified with iron (as Sodium Iron EDTA, Ferrous Fumarate, or Ferric Pyrophosphate) to eradicate microcytic nutritional anemia. The statutory mandated level is 28.0 mg to 42.5 mg Iron per kg of flour. Spectrophotometric determination ensures precise doser addition without sub-potent or toxic over-fortification.",
    detailedTestPrinciple:
      "Flour is dry-ashed at 550°C and dissolved in dilute HCl. Hydroxylamine hydrochloride is added to reduce all ferric (Fe3+) ions to ferrous (Fe2+) ions. 1,10-ortho-phenanthroline reagent is added in acetate buffer (pH 4.5), forming a stable orange-red coordination complex tris(1,10-phenanthroline)iron(II) [Fe(phen)3]2+. Absorbance is measured spectrophotometrically at 510 nm against an iron calibration curve.",
    chemicalEquation: "Fe3+ + NH2OH.HCl ⟶ Fe2+ ; Fe2+ + 3(C12H8N2) ⟶ [Fe(C12H8N2)3]2+ (Orange-Red Complex, λmax = 510 nm)",
    formulaBreakdown: {
      formula: "Iron Content (mg/kg or ppm) = [ C × V_total × Dilution ] / Sample Mass (g)",
      variables: [
        { symbol: "C", description: "Iron concentration from standard curve (µg/ml)" },
        { symbol: "V_total", description: "Total volumetric solution made up (ml, typically 100 ml)" },
        { symbol: "Sample Mass", description: "Initial flour sample taken for ashing (g, typically 5.00g)" }
      ],
      derivation: "Based on Beer-Lambert Law for tris-ortho-phenanthroline iron complex.",
      factorOrigin: "Complex molar absorptivity ε = 11,100 L·mol⁻¹·cm⁻¹ at precisely 510 nm.",
      unitAnalysis: "mg Iron / kg flour = ppm",
      practicalExample: "Sample = 5.00g Fortified Atta, V = 100 ml. Absorbance at 510 nm = 0.380 (corresponds to 1.75 µg/ml on curve). Iron = (1.75 × 100) / 5.00 = 35.0 mg/kg (Complies with FSSAI 28.0 - 42.5 mg/kg +F range) ✓"
    },
    referenceStandard: "AOAC 944.02 / FSSAI Fortification Regulations / Manual 03",
    reagentsAndApparatus: [
      "Hydroxylamine Hydrochloride Solution (10% w/v)",
      "1,10-Ortho-phenanthroline Monohydrate Solution (0.1% w/v)",
      "Sodium Acetate Buffer Solution (pH 4.5)",
      "Standard Iron Stock Solution (100 µg/ml Fe)",
      "UV-Vis Spectrophotometer with 10mm glass/quartz cells (510 nm)"
    ],
    prescribedLimit: "FSSAI +F Mandate: 28.0 to 42.5 mg Iron per kg (ppm)",
    riskIfFailed: "Fortification regulatory non-compliance, loss of +F certification, or trace mineral toxicity if overdosed.",
    procedureSteps: [
      "Weigh 5.00g fortified flour into silica crucible; pre-char on flame and incinerate at 550°C in muffle furnace for 4 hours.",
      "Dissolve ash in 10 ml 1:1 dilute HCl on boiling water bath; filter through Whatman 41 into 100 ml volumetric flask; make up to mark.",
      "Pipette 10 ml aliquot into 50 ml volumetric flask.",
      "Add 1.0 ml 10% hydroxylamine hydrochloride; mix and wait 5 minutes to complete Fe3+ reduction.",
      "Add 5.0 ml sodium acetate buffer (pH 4.5) and 2.0 ml 0.1% ortho-phenanthroline solution; make up to 50 ml with water.",
      "Allow color development for 15 minutes; measure absorbance at 510 nm against reagent blank.",
      "Read concentration from standard curve prepared with 0 to 5 µg/ml Iron standards."
    ],
    flowchartSteps: [
      { stepNumber: 1, phaseName: "Ashing & Solubilization", title: "Dry Ash Dissolution", action: "Ash 5g at 550°C, dissolve in HCl.", scientificMechanism: "Mineralizes flour matrix and liberates iron salts.", controlPoint: "Ashing temperature." },
      { stepNumber: 2, phaseName: "Reduction", title: "Ferrous State Reduction", action: "Add hydroxylamine hydrochloride.", scientificMechanism: "Reduces all Fe3+ to reactive Fe2+ state.", controlPoint: "Wait 5 minutes." },
      { stepNumber: 3, phaseName: "Chromophore Formation", title: "Phenanthroline Complexation", action: "Add buffer pH 4.5 + phenanthroline.", scientificMechanism: "Forms stable orange-red [Fe(phen)3]2+ complex.", controlPoint: "pH 4.5 buffer." },
      { stepNumber: 4, phaseName: "Spectrophotometry", title: "510 nm Quantitation", action: "Read absorbance at 510 nm.", scientificMechanism: "Quantifies iron via standard curve.", controlPoint: "Calibrated spectrophotometer." }
    ],
    factorsExplanation: [
      {
        question: "Hydroxylamine hydrochloride kyun daalte hain aur wavelength 510 nm hi kyun chuni gayi?",
        answer: "1,10-ortho-phenanthroline sirf divalent ferrous (Fe2+) state ke saath stable colored complex banata hai. Cereal ash mein iron oxidized ferric (Fe3+) state mein hota hai jo phenanthroline ke saath react nahi karta. Hydroxylamine Fe3+ ko quantitatively Fe2+ mein reduce karta hai. Tris-phenanthroline iron(II) complex ka optical absorption maximum precisely 510 nm par hota hai jahan molar absorptivity highest hoti hai."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Wavelength", value: "510 nm", reason: "Molar absorptivity peak of orange-red tris-phenanthroline iron(II) complex" },
      { parameter: "Buffer pH", value: "4.5", reason: "Maintains optimal pH for quantitative complex stability" },
      { parameter: "Reducing Agent", value: "Hydroxylamine HCl", reason: "Quantitatively reduces Fe3+ to reactive Fe2+ state" }
    ]
  },

  // 18. CHEMICAL TEST: Fortificant Folic Acid Assay
  {
    id: "cereal-chem-12",
    category: "Cereal & Grain Products",
    testType: "Chemical",
    productName: "Fortified Atta (+F), Fortified Maida",
    testName: "Determination of Fortificant Folic Acid (Reverse Phase HPLC-UV Method)",
    shortSummary: "HPLC assay to quantify added pteroylglutamic acid (Folic Acid / Vitamin B9) to verify FSSAI +F mandate (75 - 125 µg/100g).",
    detailedScientificRationale:
      "Folic Acid (Vitamin B9) fortification of wheat flour prevents Neural Tube Defects (NTD, such as spina bifida and anencephaly) in developing fetuses. FSSAI statutory regulations mandate fortification with 75 µg to 125 µg Folic Acid per 100 g of wheat flour. Precision reverse-phase HPLC with UV detection separates added synthetic folic acid from interfering cereal matrix components.",
    detailedTestPrinciple:
      "Folic acid is extracted in potassium phosphate buffer (pH 7.0) with thermal treatment to release bound vitamins. Clean-up is performed on a C18 Solid Phase Extraction (SPE) cartridge. Separation is achieved on a reverse-phase C18 analytical column using isocratic phosphate buffer-acetonitrile mobile phase with UV detection at 280 nm.",
    chemicalEquation: "Folic Acid Extract ⟶ C18 SPE Cleanup ⟶ RP-HPLC (C18 Column, Isocratic Elution) ⟶ UV Detection (280 nm)",
    formulaBreakdown: {
      formula: "Folic Acid (µg/100g) = [ (Area_sample / Area_std) × C_std × V_extract × 100 ] / Sample Mass (g)",
      variables: [
        { symbol: "Area_sample", description: "Peak area of folic acid in sample chromatogram" },
        { symbol: "Area_std", description: "Peak area of certified folic acid working standard" },
        { symbol: "C_std", description: "Concentration of standard solution (µg/ml)" }
      ],
      derivation: "Standard HPLC chromatographic external standard quantitation.",
      factorOrigin: "Folic acid displays intense conjugated pteridine ring UV absorbance at 280 nm.",
      unitAnalysis: "µg Folic Acid / 100g flour",
      practicalExample: "Sample = 5.00g Fortified Atta, Peak Area ratio yields 5.0 µg total extracted in 50 ml. Folic Acid = (5.0 / 5.00) × 100 = 100.0 µg/100g (Right in optimal FSSAI 75 - 125 µg/100g range) ✓"
    },
    referenceStandard: "AOAC 944.12 / FSSAI Manual 03 / European Standard EN 14131",
    reagentsAndApparatus: [
      "HPLC System with Isocratic Pump, Autosampler, and UV-Vis Detector (280 nm)",
      "C18 Reverse Phase Analytical Column (250 × 4.6 mm, 5 µm particle size)",
      "C18 Solid Phase Extraction (SPE) Cartridges (500 mg)",
      "Certified Reference Standard: Folic Acid (Pteroylglutamic acid, >98% purity)"
    ],
    prescribedLimit: "FSSAI +F Mandate: 75 to 125 µg per 100g of flour",
    riskIfFailed: "Fortification non-compliance, vulnerability to neural tube birth defects in public nutrition programs.",
    procedureSteps: [
      "Weigh 5.00g fortified flour, add 40 ml 0.1 M potassium phosphate buffer (pH 7.0), shake in dark for 30 minutes.",
      "Heat at 60°C in water bath for 15 minutes to maximize vitamin release; cool and centrifuge at 4000 rpm for 15 min.",
      "Condition C18 SPE cartridge with methanol and water; load 10 ml supernatant; wash with water and elute folic acid with 5 ml 50% methanol.",
      "Filter eluate through 0.45 µm PTFE syringe filter into amber autosampler vial.",
      "Inject 20 µl into HPLC: mobile phase 0.05 M KH2PO4 (pH 3.5) : Acetonitrile (88:12 v/v) at 1.0 ml/min flow rate, UV detection at 280 nm.",
      "Quantify against certified folic acid calibration curve (0.1 to 2.0 µg/ml)."
    ],
    flowchartSteps: [
      { stepNumber: 1, phaseName: "Extraction", title: "Phosphate Buffer Extraction", action: "Extract 5g sample at pH 7.0 in dark.", scientificMechanism: "Stabilizes light-sensitive pteroylglutamate ring.", controlPoint: "Amber glassware." },
      { stepNumber: 2, phaseName: "SPE Purification", title: "C18 Cartridge Cleanup", action: "Retain folic acid on SPE; wash and elute.", scientificMechanism: "Eliminates polar sugars and non-polar flour lipids.", controlPoint: "SPE elution." },
      { stepNumber: 3, phaseName: "Chromatography", title: "Isocratic HPLC Separation", action: "Separate on C18 column at 280 nm.", scientificMechanism: "Resolves folic acid from endogenous folates.", controlPoint: "Retention time match." }
    ],
    factorsExplanation: [
      {
        question: "Folic acid testing amber glassware mein kyun ki jaati hai aur pH control kyun zaroori hai?",
        answer: "Folic acid (pteroylglutamic acid) intensely light-sensitive (photolabile) hoti hai — direct fluorescent light ya daylight mein ye biologically inactive p-aminobenzoylglutamic acid aur pterin-6-carboxylic acid mein photodegrade ho jaati hai. Amber glassware photodegradation ko rokti hai. pH 7.0 buffer extraction mein folic acid ko fully ionized carboxylate form mein stable rakhta hai."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Wavelength", value: "280 nm", reason: "UV absorption peak of pteridine ring in folic acid" },
      { parameter: "Light Protection", value: "Amber Glassware", reason: "Prevents photolytic degradation into inactive pterin fragments" },
      { parameter: "Mobile Phase", value: "KH2PO4 Buffer : ACN (88:12)", reason: "Ensures sharp chromatographic resolution on C18 stationary phase" }
    ]
  }
];
