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
  }
];
