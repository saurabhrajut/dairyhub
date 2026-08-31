import { FoodTestItem } from "./types";

export const MEAT_POULTRY_TESTS: FoodTestItem[] = [
  // 1. PHYSICAL TEST: TVB-N & pH in Fresh & Frozen Meat/Fish
  {
    id: "meat-phys-1",
    category: "Meat & Other Products",
    testType: "Physical",
    productName: "Chicken, Meat, Fish, Egg, Sausage, Frozen Meat Products",
    testName: "Total Volatile Basic Nitrogen (TVB-N) & Flesh pH Determination",
    shortSummary: "Determines protein decomposition, bacterial putrefaction, and trimethylamine formation in fresh and frozen poultry, meat, and seafood.",
    detailedScientificRationale:
      "Meat, Poultry, and Seafood are highly perishable proteinaceous foods. Upon slaughter, post-mortem glycolysis consumes muscle glycogen, producing lactic acid and dropping muscle pH from ~7.2 down to 5.4 - 5.8 (Ultimate pH). If animal stress depletes glycogen, pH remains elevated (> 6.2), resulting in Dark, Firm, and Dry (DFD) meat prone to rapid bacterial spoilage.\n\nAs bacterial spoilage (Pseudomonas, Shewanella putrefaciens) progresses, proteolytic enzymes break down muscle proteins and amino acids into volatile nitrogenous bases — specifically Ammonia (NH3), Trimethylamine (TMA - derived from trimethylamine oxide TMAO in marine fish), and Dimethylamine (DMA). Total Volatile Basic Nitrogen (TVB-N) serves as the primary global chemical indicator of meat and fish freshness.",
    detailedTestPrinciple:
      "10.0g homogenized meat/fish sample is extracted with 6% Perchloric Acid (or 7.5% Trichloroacetic Acid). An aliquot of the filtered extract is alkalinized with 2 M Sodium Hydroxide (NaOH) and subjected to steam distillation in a Kjeldahl / Conway micro-diffusion apparatus. Volatile basic nitrogenous compounds are distilled into a boric acid receiving solution containing Tashiro's indicator and titrated against standard 0.01 N Hydrochloric Acid (HCl).",
    chemicalEquation: "TMAO (Fish Tissue) ⟶ TMA (Trimethylamine) + NH3 (Ammonia ↑) + HCl Titrant ⟶ NH4Cl + TMA·HCl [Endpoint pH 4.8]",
    formulaBreakdown: {
      formula: "TVB-N (mg N / 100g sample) = [(V1 - V0) × N × 14.007 × 100] / W",
      variables: [
        { symbol: "V1", description: "Volume of 0.01 N HCl consumed in sample titration (mL)" },
        { symbol: "V0", description: "Volume of 0.01 N HCl consumed in blank titration (mL)" },
        { symbol: "N", description: "Exact Normality of HCl titrant (0.01 N)" },
        { symbol: "14.007", description: "Atomic weight of Nitrogen (g/mol)" },
        { symbol: "W", description: "Mass of meat/fish sample represented in distilled aliquot (g)" }
      ]
    },
    referenceStandard: "FSSAI Manual 08 (Meat & Fish) / ISO 937 / EC Regulation 2074/2005",
    reagentsAndApparatus: [
      "Steam Distillation Unit / Conway Micro-Diffusion Cell",
      "6% Perchloric Acid (HClO4) or 7.5% Trichloroacetic Acid (TCA)",
      "2 M Sodium Hydroxide (NaOH) & 2% Boric Acid Receiving Solution",
      "Tashiro's Mixed Indicator (Methyl Red + Methylene Blue in ethanol)",
      "0.01 N Standardized Hydrochloric Acid (HCl) Titrant"
    ],
    prescribedLimit: "Fresh Meat/Poultry TVB-N: Max 20.0 mg N/100g | Fresh Fish TVB-N: Max 25 - 35 mg N/100g | Fresh Meat pH: 5.5 - 6.2",
    riskIfFailed: "Putrefactive meat spoilage, foul ammonia-like odor, histamine food poisoning in scombroid fish, and consumption of decomposed tissue.",
    procedureSteps: [
      "Homogenize 10.0g meat/fish in 90mL 6% perchloric acid for 2 minutes; filter through Whatman No. 1 paper.",
      "Pipette 50mL clear filtrate into steam distillation flask, add 10mL 2 M NaOH to liberate volatile bases.",
      "Steam distill volatile nitrogen into 10mL 2% Boric acid receiving solution containing Tashiro's indicator for 5 minutes.",
      "Titrate boric acid solution against 0.01 N HCl until violet-pink endpoint. Run reagent blank.",
      "Calculate TVB-N in mg N per 100g sample."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Deproteinization Extraction",
        title: "Perchloric Acid Tissue Deproteinization",
        action: "Homogenize 10g meat with 90mL 6% HClO4; filter through Whatman No. 1.",
        scientificMechanism: "Precipitates muscle proteins while quantitative extracting water-soluble volatile nitrogen bases.",
        controlPoint: "CCP 1: Keep sample homogenate chilled at 4°C.",
        reagentsInvolved: ["6% Perchloric Acid"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Alkaline Steam Volatilization",
        title: "Kjeldahl Steam Distillation",
        action: "Add 10mL 2M NaOH to 50mL filtrate; steam distill into 2% Boric acid for 5 min.",
        scientificMechanism: "NaOH converts volatile ammonium and amine salts into free volatile ammonia (NH3) and TMA gas.",
        controlPoint: "CCP 2: Ensure distillation condenser water temp < 15°C.",
        reagentsInvolved: ["2M NaOH", "Steam Distiller"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Boric Acid Absorption",
        title: "Volatile Base Trapping",
        action: "Traps volatile nitrogen gases in 10mL 2% Boric acid containing Tashiro indicator.",
        scientificMechanism: "Ammonia reacts with boric acid forming borate anions: NH3 + H3BO3 ⟶ NH4+ + H2BO3-.",
        controlPoint: "CCP 3: Receiver tip must remain submerged below liquid level.",
        reagentsInvolved: ["2% Boric Acid", "Tashiro Indicator"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Acidimetric Titration",
        title: "Volumetric HCl Titration",
        action: "Titrate borate solution against 0.01N HCl to green-to-pink endpoint.",
        scientificMechanism: "Hydronium ions neutralize borate anions stoichiometrically: H2BO3- + H+ ⟶ H3BO3.",
        controlPoint: "CCP 4: Microburette precision must be 0.01mL.",
        reagentsInvolved: ["0.01N HCl Titrant"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Freshness Index Computation",
        title: "TVB-N Calculation & Putrefaction Gate",
        action: "Calculate mg N / 100g. Verify Fresh Meat TVB-N <= 20.0 mg/100g.",
        scientificMechanism: "Quantifies total volatile nitrogenous breakdown products per 100g muscle tissue.",
        controlPoint: "Quality Gate: Fish TVB-N > 35 mg N/100g indicates advanced putrefaction.",
        reagentsInvolved: ["Calculation Formula"]
      }
    ]
  },

  // 2. MICROBIOLOGICAL TEST: Salmonella & Listeria monocytogenes in Poultry & Frozen Meat
  {
    id: "meat-micro-1",
    category: "Meat & Other Products",
    testType: "Microbiological",
    productName: "Chicken, Meat, Fish, Egg, Egg Products, Sausage, Frozen Meat Products",
    testName: "Listeria monocytogenes & Salmonella Detection (ISO 11290 / FSSAI Method)",
    shortSummary: "Detects psychrotrophic invasive pathogen Listeria monocytogenes and Salmonella in fresh, frozen, and processed meat products.",
    detailedScientificRationale:
      "Meat, Poultry, Raw Eggs, and Ready-to-Eat Sausages are critical vectors for two severe foodborne bacterial pathogens: 1) Salmonella enterica (serovars Typhimurium and Enteritidis), and 2) Listeria monocytogenes. Listeria monocytogenes is a psychrotrophic Gram-positive bacterium capable of multiplying at refrigeration temperatures (4°C) and high salt concentrations (up to 10% NaCl).\n\nL. monocytogenes produces a pore-forming hemolytic exotoxin called Listeriolysin O (LLO), enabling the bacterium to escape phagosomes, invade host intestinal epithelial cells, and cross the blood-brain barrier and placental barrier. Listeriosis causes high mortality (~20-30%), septicemia, meningitis, and spontaneous abortions in pregnant women. FSSAI mandates absolute zero tolerance (Absence in 25g sample).",
    detailedTestPrinciple:
      "25g meat sample is pre-enriched in 225mL Half-Fraser Broth at 30°C for 24 hours. 0.1mL is transferred to Full-Fraser Broth and incubated at 37°C for 24 hours. Fraser broth contains Lithium Chloride, Nalidixic acid, and Acriflavine to inhibit competing flora, plus Aesculin. Listeria hydrolyzes aesculin to 6,7-dihydroxycoumarin, which reacts with ferric ions to turn broth black. Subcultures are streaked onto Chromogenic Listeria Agar (ALOA). Blue-green colonies surrounded by an opaque halo (phospholipase activity) confirm L. monocytogenes.",
    chemicalEquation: "Aesculin (Fraser Broth) + Listeria Beta-Glucosidase ⟶ Aesculetin + Ferric Ions ⟶ Black Complex (24h at 37°C)",
    formulaBreakdown: {
      formula: "Listeria monocytogenes Result = Absence / Presence in 25g Meat Sample",
      variables: [
        { symbol: "Primary Enrichment", description: "Half-Fraser Broth (225mL per 25g sample, 30°C / 24h)" },
        { symbol: "Secondary Enrichment", description: "Full-Fraser Broth (10mL, 37°C / 24h)" },
        { symbol: "Chromogenic Isolation", description: "ALOA Agar (Ottaviani & Agosti, 37°C / 24-48h)" }
      ]
    },
    referenceStandard: "FSSAI Manual 14 (Microbiology) / ISO 11290-1 / AOAC 2003.12",
    reagentsAndApparatus: [
      "Half-Fraser Broth & Full-Fraser Broth (containing Acriflavine, Nalidixic Acid, Ferric Ammonium Citrate)",
      "Chromogenic Listeria Agar (ALOA) & PALCAM Agar Plates",
      "Sterile Stomacher Bags & Homogenizer",
      "Gram Stain Kit & Catalase Test Reagent (3% H2O2)",
      "Incubators (30°C ± 1°C & 37°C ± 1°C)"
    ],
    prescribedLimit: "Absent in 25g sample (Statutory Zero Tolerance for Listeria monocytogenes & Salmonella across all ready-to-eat meat/poultry)",
    riskIfFailed: "Listeriosis (septicemia, encephalitis, meningitis), high fetal mortality/abortions, severe salmonellosis, international product bans.",
    procedureSteps: [
      "Aseptically add 25g meat sample to 225mL Half-Fraser Broth in stomacher bag; homogenize for 2 minutes and incubate at 30°C for 24 hours.",
      "Transfer 0.1mL Half-Fraser broth to 10mL Full-Fraser Broth; incubate at 37°C for 24 hours. Observe for blackening.",
      "Streak loopful from Half-Fraser and Full-Fraser onto Chromogenic Listeria Agar (ALOA) plates; incubate at 37°C for 24-48 hours.",
      "Examine ALOA plates for blue-green colonies with an opaque halo ( phosphatidylinositol phospholipase C positive).",
      "Confirm suspect colonies biochemically: Gram-positive tumbling motility rods, Catalase positive (+), Beta-hemolysis positive on Sheep Blood Agar."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Half-Fraser Selective Primary Enrichment",
        title: "Psychrotrophic Selective Resuscitation",
        action: "Homogenize 25g meat in 225mL Half-Fraser Broth; incubate at 30°C for 24 hours.",
        scientificMechanism: "Low acriflavine concentration resuscitates cold-stressed Listeria cells while inhibiting Gram-negative bacteria.",
        controlPoint: "CCP 1: Incubate strictly at 30°C ± 1°C for 24h.",
        reagentsInvolved: ["Half-Fraser Broth"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Full-Fraser Aesculin Hydrolysis",
        title: "Secondary Enrichment & Aesculin Blackening",
        action: "Transfer 0.1mL to 10mL Full-Fraser Broth; incubate at 37°C for 24 hours.",
        scientificMechanism: "Listeria hydrolyzes aesculin to aesculetin, forming black iron complex with ferric ammonium citrate.",
        controlPoint: "CCP 2: Blackened broth indicates strong presumptive Listeria presence.",
        reagentsInvolved: ["Full-Fraser Broth"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: ALOA Chromogenic Differential Isolation",
        title: "Chromogenic ALOA Agar Plating",
        action: "Streak loopful onto ALOA Agar; incubate at 37°C for 24-48 hours.",
        scientificMechanism: "Chromogenic substrate (X-glucoside) yields blue-green colonies; lecithin substrate yields opaque halo via phospholipase C.",
        controlPoint: "CCP 3: Blue-green colonies WITHOUT halo are non-pathogenic Listeria innocua. Discard.",
        reagentsInvolved: ["ALOA Chromogenic Agar"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Morphological & Catalase Confirmation",
        title: "Tumbling Motility & Hemolysis Diagnostic",
        action: "Perform Gram stain (short Gram+ rods), Catalase test (3% H2O2 bubbles), and Blood Agar Beta-hemolysis.",
        scientificMechanism: "Listeria monocytogenes expresses Listeriolysin O causing narrow zone Beta-hemolysis on sheep blood agar.",
        controlPoint: "CCP 4: Catalase positive (+) and Beta-hemolytic confirms L. monocytogenes.",
        reagentsInvolved: ["3% H2O2", "Sheep Blood Agar"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Pathogen Safety Audit Gate",
        title: "Zero-Tolerance Statutory Audit Gate",
        action: "Report Presence/Absence in 25g. Verify absolute absence.",
        scientificMechanism: "Ensures zero risk of invasive listeriosis or septicemia in commercial meat supply.",
        controlPoint: "Quality Gate: Detection of Listeria monocytogenes in 25g RTE meat triggers immediate product recall.",
        reagentsInvolved: ["FSSAI Manual 14"]
      }
    ]
  }
];
