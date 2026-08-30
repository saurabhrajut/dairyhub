import { FoodTestItem } from "./types";

export const BEVERAGES_TESTS: FoodTestItem[] = [
  // 1. PHYSICAL TEST: Total Dissolved Solids (TDS), pH & Turbidity in Packaged Water & Drinks
  {
    id: "bev-phys-1",
    category: "Beverages",
    testType: "Physical",
    productName: "Packaged Drinking Water, Mineral Water, Soft Drink, Energy Drink, Tea, Coffee",
    testName: "TDS, Electrical Conductivity, Turbidity & pH Determination",
    shortSummary: "Measures mineral content, ionic conductivity, optical clarity, and acidity in drinking water and commercial beverages.",
    detailedScientificRationale:
      "Packaged Drinking Water and Mineral Water must comply with strict physical parameters (IS 14543 / IS 13428). Total Dissolved Solids (TDS) quantifies inorganic salts (calcium, magnesium, sodium, potassium, bicarbonates, chlorides, sulfates) dissolved in water. Electrical Conductivity (EC) directly correlates with TDS, as dissolved mineral ions act as charge carriers.\n\nTurbidity measures optical clarity caused by suspended colloidal particles (clay, silica, organic matter) using nephelometric light scattering at 90° (NTU). Excess turbidity shields microorganisms from UV disinfection and chlorine treatment. In Carbonated Drinks and Energy Drinks, pH must be maintained at 2.5 - 3.5 (via phosphoric/citric acid) to impart sharp tartness and inhibit bacterial growth.",
    detailedTestPrinciple:
      "TDS is measured electrometrically using a calibrated Conductivity/TDS meter (or gravimetrically by evaporating filtered water at 180°C ± 2°C). Turbidity is measured using a Nephelometer calibrated with Formazin turbidity standards (0.0 - 10.0 NTU). Light scattered at 90° to the incident beam is detected by a photoelectric cell.",
    chemicalEquation: "TDS (mg/L) ≈ Electrical Conductivity (µS/cm at 25°C) × 0.65 [Ionic Mobility Factor]",
    formulaBreakdown: {
      formula: "TDS (mg/L) = [(W_final - W_dish) × 1,000,000] / Sample Volume V (mL)",
      variables: [
        { symbol: "W_dish", description: "Tare mass of platinum/porcelain evaporating dish (g)" },
        { symbol: "W_final", description: "Mass of dish + dried mineral residue after heating at 180°C (g)" },
        { symbol: "V", description: "Volume of filtered water sample evaporated (typically 100mL)" },
        { symbol: "1,000,000", description: "Unit conversion factor: g to mg (×1000) AND mL to L (×1000)" },
        { symbol: "0.65", description: "TDS-EC conversion factor (ionic mobility coefficient at 25°C)" }
      ],
      derivation: "Derived from Mass Conservation Law: TDS represents total inorganic residue remaining after complete water evaporation. Mass difference (W_final - W_dish) yields dry residue mass in grams. Multiplication by 1,000,000 and division by volume (mL) converts to mg/L (parts per million). EC-TDS relationship stems from Kohlrausch's Law of Independent Migration of Ions.",
      factorOrigin: "180°C temperature selected because: (1) Ensures complete water evaporation including bound moisture; (2) Below 200°C to prevent thermal decomposition of bicarbonates to carbonates; (3) Standardized per APHA Method 2540C. The 0.65 factor is empirical average for natural water: derived from ratio of TDS to EC across thousands of water samples; ranges 0.55-0.75 depending on ionic composition. NaCl-dominated waters: 0.5; Mixed mineral waters: 0.65; CaSO4 waters: 0.75. Formazin standards established by ISO 7027 as universal turbidity reference (chemically stable, reproducible synthesis).",
      unitAnalysis: "TDS = [g × 10^6 mg/g × mg/g] / [mL × 10^-3 L/mL] = mg/L (correct unit for water quality)",
      practicalExample: "W_dish = 45.2345g, W_final = 45.2745g (100mL sample evaporated). TDS = [(45.2745 - 45.2345) × 1,000,000]/100 = [0.0400 × 1,000,000]/100 = 400 mg/L (Well within 75-500 mg/L limit)"
    },
    referenceStandard: "FSSAI Manual 02 (Water) / IS 14543 / IS 13428 / ISO 7027 / APHA 2540C",
    reagentsAndApparatus: [
      "Nephelometric Turbidimeter with Formazin 400 NTU Stock Standard",
      "Digital TDS & Conductivity Meter (calibrated with 1413 µS/cm KCl standard)",
      "Platinum or High-Silica Porcelain Evaporating Dish",
      "Drying Oven (180°C ± 2°C) & Analytical Balance"
    ],
    prescribedLimit: "Packaged Water TDS: 75 - 500 mg/L | Turbidity: Max 2.0 NTU (Desirable < 1.0 NTU) | Water pH: 6.5 - 8.5 | Soft Drink pH: 2.5 - 3.5",
    riskIfFailed: "Gastrointestinal disturbances, mineral imbalance, heavy metal contamination, bacterial shielding during UV sterilization, unpleasant metallic taste.",
    procedureSteps: [
      "For TDS (Electrometric): Calibrate TDS probe with 1413 µS/cm KCl standard at 25°C. Rinse probe with deionized water.",
      "Immerse probe into 100mL water sample, allow reading to stabilize, and record TDS in mg/L (ppm).",
      "For Turbidity: Zero Nephelometer with ultra-pure zero-turbidity water. Insert sample cuvette into cell holder.",
      "Record Turbidity reading directly in Nephelometric Turbidity Units (NTU).",
      "For pH: Calibrate pH meter with pH 4.01, 7.00, and 9.18 buffers. Measure sample at 25°C."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Meter Calibration",
        title: "Standard Potassium Chloride Calibration",
        action: "Calibrate TDS/EC probe with 1413 µS/cm KCl reference solution at 25°C.",
        scientificMechanism: "Establishes linear cell constant factor k = L / A for ionic conductance.",
        controlPoint: "CCP 1: Temperature compensation must be set to 25.0°C.",
        reagentsInvolved: ["1413 µS/cm KCl Standard"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Electrometric TDS & EC Measurement",
        title: "Ionic Conductance Measurement",
        action: "Immerse probe in 100mL water sample; record EC (µS/cm) and TDS (mg/L).",
        scientificMechanism: "Dissolved mineral ions (Na+, Ca2+, Cl-, HCO3-) migrate under electric field.",
        controlPoint: "CCP 2: Ensure zero air bubbles trapped on probe electrodes.",
        reagentsInvolved: ["Water Sample"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Formazin Nephelometer Calibration",
        title: "Optical Formazin Calibration",
        action: "Calibrate Nephelometer using 0.0 and 10.0 NTU Formazin polymer standards.",
        scientificMechanism: "Formazin suspension scatters incident 860nm light at 90° angle.",
        controlPoint: "CCP 3: Wipe cuvette glass with lint-free silicone cloth.",
        reagentsInvolved: ["Formazin Standards"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Nephelometric Turbidity Measurement",
        title: "90° Light Scatter Detection",
        action: "Insert sample cuvette into Nephelometer; record Turbidity in NTU.",
        scientificMechanism: "Quantifies colloidal suspended micro-particulates scattering light.",
        controlPoint: "CCP 4: Turbidity > 2.0 NTU indicates filtration failure.",
        reagentsInvolved: ["Sample Cuvette"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Statutory Water Compliance Gate",
        title: "IS 14543 Statutory Audit",
        action: "Verify TDS between 75-500 mg/L, Turbidity <= 2.0 NTU, and pH 6.5-8.5.",
        scientificMechanism: "Ensures water palatability, ionic balance, and absence of physical foulants.",
        controlPoint: "Quality Gate: TDS < 75 mg/L indicates over-demineralization; > 500 mg/L violates FSSAI limits.",
        reagentsInvolved: ["IS 14543 Standard"]
      }
    ]
  },

  // 2. CHEMICAL TEST: Caffeine in Energy Drinks, Tea, Coffee & Carbonated Soft Drinks
  {
    id: "bev-chem-1",
    category: "Beverages",
    testType: "Chemical",
    productName: "Energy Drink, Carbonated Soft Drink, Tea, Coffee, Fruit Drink, Syrup",
    testName: "Caffeine Content Quantification (HPLC-UV / Spectrophotometric Method)",
    shortSummary: "Quantifies central nervous system stimulant Caffeine (1,3,7-trimethylxanthine) to enforce statutory maximum safety limits in energy drinks and cola beverages.",
    detailedScientificRationale:
      "Caffeine (1,3,7-trimethylxanthine, C8H10N4O2) is a purine alkaloid naturally found in tea leaves (Camellia sinensis) and coffee beans (Coffea arabica), and added as a functional stimulant in Energy Drinks and Cola Soft Drinks. Caffeine acts as a competitive antagonist at central adenosine A1 and A2A receptors, preventing adenosine-induced drowsiness, promoting alertness, and elevating heart rate and blood pressure.\n\nHowever, excessive caffeine intake causes cardiovascular arrhythmias, insomnia, acute anxiety, and developmental risks in pregnant women. FSSAI strictly regulates added caffeine: Carbonated Cola beverages must not exceed 145 ppm (mg/kg), while Energy Drinks must contain between 145 ppm and 300 ppm with compulsory warnings.",
    detailedTestPrinciple:
      "Caffeine is extracted from degassed beverage sample using chloroform or liquid-liquid extraction. The purified extract is analyzed by High-Performance Liquid Chromatography (HPLC) equipped with a Reverse-Phase C18 column (250mm × 4.6mm, 5 µm) and UV/Vis detector set at 272 nm. Isocratic mobile phase consists of Methanol : Water (30:70 v/v) at a flow rate of 1.0 mL/min. Quantification is achieved by comparing sample peak area against a certified caffeine standard calibration curve.",
    chemicalEquation: "C8H10N4O2 (Caffeine Molecule) + UV Light (λ = 272 nm) ⟶ Pi ⟶ Pi* Chromophore Absorbance (Beer-Lambert Law)",
    formulaBreakdown: {
      formula: "Caffeine (ppm / mg/L) = (A_sample / A_standard) × C_standard × Dilution Factor",
      variables: [
        { symbol: "A_sample", description: "HPLC peak area or UV absorbance of sample at 272 nm" },
        { symbol: "A_standard", description: "HPLC peak area of certified 100 mg/L caffeine standard" },
        { symbol: "C_standard", description: "Concentration of reference caffeine standard (mg/L)" },
        { symbol: "Dilution Factor", description: "Volumetric sample dilution factor (V_final / V_sample)" },
        { symbol: "272 nm", description: "Wavelength of maximum absorbance (λmax) of caffeine chromophore" }
      ],
      derivation: "Based on Beer-Lambert Law: A = ε·c·l, where absorbance is directly proportional to concentration at fixed path length. Ratio of sample to standard peak areas eliminates path length and molar absorptivity, allowing direct concentration calculation via external standard method.",
      factorOrigin: "272 nm wavelength selected because caffeine's fused xanthine ring system exhibits maximum UV absorbance at this wavelength due to π→π* electronic transitions of the conjugated carbonyl-imidazole chromophore (molar absorptivity ε = 9,700 L/mol·cm). C18 column choice: octadecyl silane provides optimal hydrophobic retention for moderately polar caffeine (log P = -0.07). Mobile phase 30:70 methanol:water empirically optimized for retention time ~4.5 min (adequate separation from theobromine and theophylline). Flow rate 1.0 mL/min balances resolution with analysis time. FSSAI limit 145 ppm derived from safe daily caffeine intake (400 mg/day for adults) divided by typical serving volumes.",
      unitAnalysis: "ppm = mg/L = [area ratio × mg/L × unitless] = mg/L (parts per million by mass)",
      practicalExample: "Cola sample analysis: A_sample = 25,400 area units; A_standard (100 mg/L) = 21,000; Dilution Factor = 1 (no dilution). Caffeine = (25,400/21,000) × 100 × 1 = 121 mg/L = 121 ppm (Within FSSAI cola limit of 145 ppm) ✓"
    },
    referenceStandard: "FSSAI Manual 06 (Beverages) / ISO 20481 (Coffee/Caffeine) / AOAC 962.13",
    reagentsAndApparatus: [
      "HPLC System with C18 Reverse-Phase Column & UV-Vis Detector (272 nm)",
      "HPLC Grade Methanol & Ultra-Pure 18.2 MΩ·cm Water",
      "Certified Reference Standard Caffeine (USP / Sigma-Aldrich >= 99.5% purity)",
      "0.45 µm PTFE Membrane Syringe Filters & Ultrasonic Degasser Bath"
    ],
    prescribedLimit: "Cola Carbonated Drinks: Max 145 ppm (mg/L) | Energy Drinks: 145 - 300 ppm (mg/L) | Tea/Coffee: Natural occurrence",
    riskIfFailed: "Cardiovascular tachycardia, hypertension, panic attacks, sleep disorders, non-compliance with mandatory advisory warning labels.",
    procedureSteps: [
      "For Carbonated Drinks: Degas 50mL beverage in ultrasonic bath for 15 minutes to remove CO2 gas completely.",
      "Filter 5mL sample through 0.45 µm PTFE syringe filter into HPLC autosampler vial.",
      "Prepare standard caffeine calibration solutions (10, 50, 100, 200, 300 mg/L) in HPLC mobile phase.",
      "Inject 10 µL standard and sample into HPLC (C18 Column, 30:70 Methanol:Water, 1.0 mL/min, 272 nm).",
      "Record retention time (~4.5 min) and calculate Caffeine concentration from linear regression curve."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Ultrasonic Degassing & Clarification",
        title: "CO2 Gas Removal & Micro-Filtration",
        action: "Degas 50mL beverage in ultrasonic bath for 15 min; filter through 0.45 µm PTFE filter.",
        scientificMechanism: "Removes dissolved carbonic acid gas bubbles that cause HPLC pump pressure fluctuations.",
        controlPoint: "CCP 1: Ensure zero residual gas bubbles in sample.",
        reagentsInvolved: ["Ultrasonic Bath", "0.45 µm PTFE Filter"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Standard Calibration Curve Setup",
        title: "Reference Standard Dilution Series",
        action: "Prepare 10, 50, 100, 200, 300 mg/L pure caffeine standards in mobile phase.",
        scientificMechanism: "Establishes linear Beer-Lambert absorbance response curve (R² >= 0.999).",
        controlPoint: "CCP 2: Standard purity must be certified >= 99.5%.",
        reagentsInvolved: ["USP Caffeine Standard"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Isocratic HPLC Chromatographic Separation",
        title: "C18 Reverse-Phase Separation",
        action: "Inject 10 µL into HPLC; elute with 30:70 Methanol:Water at 1.0 mL/min.",
        scientificMechanism: "Hydrophobic C18 stationary phase retains non-polar caffeine molecule; elution occurs at ~4.5 min.",
        controlPoint: "CCP 3: Maintain column temperature at 30°C ± 1°C.",
        reagentsInvolved: ["HPLC Grade Methanol", "C18 Column"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Photometric UV Detection",
        title: "272 nm UV Photometric Detection",
        action: "Detect caffeine chromophore absorbance at 272 nm peak maximum.",
        scientificMechanism: "Xanthine ring conjugated double bonds absorb UV light strongly at 272 nm wavelength.",
        controlPoint: "CCP 4: Verify baseline stability and zero peak tailing.",
        reagentsInvolved: ["UV Detector (272 nm)"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Concentration Audit & Advisory Gate",
        title: "PPM Computation & FSSAI Advisory Audit",
        action: "Calculate caffeine ppm. Verify Cola <= 145 ppm / Energy Drink 145-300 ppm.",
        scientificMechanism: "Quantifies central nervous system stimulant dosage per container volume.",
        controlPoint: "Quality Gate: Energy Drink > 300 ppm or missing mandatory cautionary label triggers immediate prosecution.",
        reagentsInvolved: ["HPLC Software"]
      }
    ]
  },

  // 3. MICROBIOLOGICAL TEST: Pseudomonas aeruginosa & Coliforms in Packaged Drinking Water
  {
    id: "bev-micro-1",
    category: "Beverages",
    testType: "Microbiological",
    productName: "Packaged Drinking Water, Packaged Natural Mineral Water, Fruit Juice",
    testName: "Pseudomonas aeruginosa & Total Coliform Detection (Membrane Filtration Method)",
    shortSummary: "Detects opportunistic pathogen Pseudomonas aeruginosa and coliform indicator bacteria in packaged water using 0.45 µm membrane filtration.",
    detailedScientificRationale:
      "Packaged Drinking Water (IS 14543) and Mineral Water (IS 13428) require absolute microbiological purity. Pseudomonas aeruginosa is an opportunistic Gram-negative pathogenic bacterium capable of colonizing water bottling equipment, pipes, and RO membranes by forming resilient polysaccharides Biofilms.\n\nP. aeruginosa synthesizes extracellular virulence pigments Pyocyanin (blue-green) and Pyoverdine (fluorescent yellow-green), causing severe hospital-acquired infections, otitis media, respiratory distress in immunocompromised individuals, and endocarditis. FSSAI mandates absolute zero tolerance (Absence in 250mL sample). Membrane filtration using 0.45 µm cellulose acetate membranes followed by culture on Cetrimide Agar is the official gold-standard test.",
    detailedTestPrinciple:
      "250mL packaged water sample is filtered through a sterile 0.45 µm membrane filter under vacuum. The membrane retaining bacterial cells is placed onto Cetrimide Agar (containing Cetyltrimethylammonium bromide) and incubated at 37°C ± 1°C for 24-48 hours. Cetrimide acts as a quaternary ammonium selective agent inhibiting all non-Pseudomonas bacteria. Blue-green colonies exhibiting yellow-green fluorescence under 366 nm UV light confirm P. aeruginosa.",
    chemicalEquation: "Pyocyanin Virulence Pigment + Cetrimide Selective Agar + 366nm UV ⟶ Fluorescent Blue-Green Colony (Absence Required in 250mL)",
    formulaBreakdown: {
      formula: "Pseudomonas aeruginosa Result = Absence / Presence in 250mL Filtered Volume",
      variables: [
        { symbol: "Filtered Volume", description: "250mL Packaged Water filtered through 0.45 µm membrane" },
        { symbol: "Selective Media", description: "Cetrimide Agar incubated at 37°C for 24-48 hours" },
        { symbol: "UV Confirmation", description: "Fluorescence under 366 nm Ultraviolet Light" },
        { symbol: "0.45 µm", description: "Pore size of membrane filter - retains all bacteria while allowing water passage" }
      ],
      derivation: "Membrane filtration principle based on physical size exclusion: bacterial cells (0.5-5 µm) are retained on 0.45 µm membrane while water passes through. Concentration factor: 250mL water reduced to visible colonies on 47mm membrane = ~140-fold visual concentration enabling detection of very low bacterial loads (1 CFU/250mL).",
      factorOrigin: "0.45 µm pore size is international standard (ISO/APHA) because: (1) Smaller than smallest bacteria (~0.5 µm); (2) Larger pores allow passage; (3) Optimal filtration speed vs. retention balance. 250mL volume statistically derived from Poisson distribution: gives 95% confidence of detecting 1 CFU when contamination is >4 CFU/L. Cetrimide concentration 0.3 g/L: minimum inhibitory concentration for non-Pseudomonas species while sub-inhibitory for P. aeruginosa (which has intrinsic resistance via MexAB-OprM efflux pumps). 366 nm UV wavelength triggers pyoverdine fluorescence (fluorescent siderophore for iron scavenging). 37°C incubation optimal for pathogenic bacterial growth.",
      unitAnalysis: "Qualitative binary result: PRESENT/ABSENT per 250mL sample volume",
      practicalExample: "250mL PDW filtered through 0.45 µm membrane → placed on Cetrimide Agar → incubated 48h at 37°C → Zero blue-green fluorescent colonies observed under 366nm UV → ABSENT in 250mL → COMPLIANT with IS 14543. If even 1 CFU detected → PRESENT → BATCH REJECT + Plant sanitization required."
    },
    referenceStandard: "FSSAI Manual 02 (Water) / IS 14543 / IS 13428 / ISO 16266 / APHA 9213E",
    reagentsAndApparatus: [
      "Sterile 0.45 µm Grid Cellulose Acetate Membrane Filters (47mm diameter)",
      "Stainless Steel 3-Place Membrane Filtration Vacuum Manifold & Pump",
      "Cetrimide Agar Plates & Nutrient Agar Slants",
      "Wood's Lamp / 366 nm UV Transilluminator",
      "Oxidase Test Reagent (1% N,N,N',N'-tetramethyl-p-phenylenediamine dihydrochloride)"
    ],
    prescribedLimit: "Absent in 250mL sample (Statutory Zero Tolerance for Pseudomonas aeruginosa, Coliforms, E. coli, & Enterococci)",
    riskIfFailed: "Opportunistic respiratory and ear infections, bio-fouling of water bottling plants, green water discoloration, product rejection.",
    procedureSteps: [
      "Assemble sterile membrane filtration unit inside Laminar Airflow Hood; place sterile 0.45 µm grid membrane on filter support.",
      "Aseptically pour 250mL packaged water sample into funnel; apply vacuum to filter entire volume.",
      "Using sterile forceps, transfer membrane grid-side up onto Cetrimide Agar plate.",
      "Incubate plate inverted at 37°C ± 1°C for 24 to 48 hours.",
      "Examine colonies under 366 nm UV light for blue-green fluorescence. Confirm suspect colonies with positive Oxidase Test (turns purple in 10 sec)."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Vacuum Membrane Filtration",
        title: "0.45 µm Membrane Concentration",
        action: "Filter 250mL packaged water through sterile 0.45 µm membrane under vacuum.",
        scientificMechanism: "Concentrates low microbial populations onto membrane surface by physical size exclusion.",
        controlPoint: "CCP 1: Perform inside Class 100 Laminar Airflow Cabinet.",
        reagentsInvolved: ["0.45 µm Membrane Filter", "Vacuum Manifold"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Cetrimide Agar Plating",
        title: "Selective Media Transfer",
        action: "Transfer membrane grid-side up onto Cetrimide Agar plate.",
        scientificMechanism: "Cetrimide (quaternary ammonium detergent) disrupts non-Pseudomonas bacterial cell walls.",
        controlPoint: "CCP 2: Ensure zero air bubbles trapped between membrane and agar.",
        reagentsInvolved: ["Cetrimide Agar Plate"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Thermophilic Incubation",
        title: "37°C Incubation Cycle",
        action: "Incubate plate inverted at 37°C ± 1°C for 24 - 48 hours.",
        scientificMechanism: "Promotes pyocyanin and pyoverdine pigment production by P. aeruginosa.",
        controlPoint: "CCP 3: Incubate for full 48 hours before reporting negative result.",
        reagentsInvolved: ["Incubator (37°C)"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: UV Fluorescence & Oxidase Confirmation",
        title: "366nm UV & Oxidase Diagnostic",
        action: "Inspect colonies under 366nm UV light; perform Oxidase reagent test on colony.",
        scientificMechanism: "Cytochrome c oxidase enzyme oxidizes reagent to deep purple indophenol blue within 10 sec.",
        controlPoint: "CCP 4: Oxidase positive + UV fluorescent colonies confirm P. aeruginosa.",
        reagentsInvolved: ["366nm UV Lamp", "Oxidase Reagent"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Statutory Safety Audit Gate",
        title: "Absence Audit & Compliance Gate",
        action: "Report Presence/Absence in 250mL. Verify zero colonies.",
        scientificMechanism: "Guarantees complete absence of opportunistic waterborne pathogens.",
        controlPoint: "Quality Gate: Presence of 1 CFU in 250mL mandates immediate plant shutdown and recall.",
        reagentsInvolved: ["IS 14543 Audit Form"]
      }
    ]
  },

  // 4. CHEMICAL TEST: Titratable Acidity in Fruit Juices & Soft Drinks
  {
    id: "bev-chem-2",
    category: "Beverages",
    testType: "Chemical",
    productName: "Fruit Juice, Nectar, Squash, Ready-to-Serve Beverage, Lemonade, Soft Drink",
    testName: "Titratable Acidity Determination (Volumetric NaOH Titration)",
    shortSummary: "Measures total titratable acids (citric, malic, tartaric, phosphoric) in beverages to assess flavor balance, ripeness, and preservation stability.",
    detailedScientificRationale:
      "Titratable Acidity (TA) quantifies total organic acids in beverages, directly influencing perceived tartness, microbial stability, and consumer acceptance. Predominant acids: Citric acid (citrus juices, dominant in oranges/lemons), Malic acid (apple, grape juices), Tartaric acid (grape juice, wine), Phosphoric acid (cola soft drinks), Lactic acid (fermented beverages).\n\nTA differs from pH: pH measures free H+ ion concentration (activity), while TA measures TOTAL acid content (undissociated + dissociated). Beverages can have same pH but different TA depending on buffering capacity. FSSAI mandates minimum TA levels in fruit juices to prevent dilution fraud (e.g., orange juice min 0.6% w/v as anhydrous citric acid).\n\nTA controls: (1) Flavor balance (Brix-to-acid ratio); (2) Microbial stability (pH < 4.5 inhibits pathogens); (3) Preservative efficacy (benzoate/sorbate active only at low pH); (4) Enzymatic browning prevention.",
    detailedTestPrinciple:
      "Sample is neutralized with standardized 0.1N NaOH using phenolphthalein indicator to endpoint pH 8.2 (persistent pink color). All titratable acids are converted to their sodium salts. Volume of NaOH consumed is stoichiometrically related to total acid content, expressed as the predominant acid based on juice type.",
    chemicalEquation: "R-COOH (Organic Acid) + NaOH ⟶ R-COONa (Sodium Salt) + H2O\n\nSpecific: C6H8O7 (Citric Acid) + 3 NaOH ⟶ C6H5Na3O7 (Trisodium Citrate) + 3 H2O",
    formulaBreakdown: {
      formula: "% Acidity (w/v) = (V × N × Equivalent Weight × 100) / (W × 1000)",
      variables: [
        { symbol: "V", description: "Volume of standardized NaOH consumed (mL)" },
        { symbol: "N", description: "Normality of NaOH solution (typically 0.1N)" },
        { symbol: "Equivalent Weight", description: "Meq weight of predominant acid (mg/meq)" },
        { symbol: "W", description: "Weight/volume of sample titrated (g or mL)" },
        { symbol: "100", description: "Percentage conversion factor" },
        { symbol: "1000", description: "Milliequivalent to equivalent conversion" }
      ],
      derivation: "Derived from acid-base neutralization stoichiometry: 1 equivalent of NaOH neutralizes 1 equivalent of any acid regardless of polyprotic character. Each mole of NaOH neutralizes one -COOH group. Multiplication by equivalent weight converts moles of acid to mass, and division by sample weight gives mass percentage.",
      factorOrigin: "Equivalent weights derived from molecular weight divided by number of ionizable H+ groups:\n• Citric acid (C6H8O7, MW 192.12, tribasic): EW = 192.12/3 = 64.04 g/eq (mg/meq)\n• Malic acid (C4H6O5, MW 134.09, dibasic): EW = 134.09/2 = 67.05 mg/meq\n• Tartaric acid (C4H6O6, MW 150.09, dibasic): EW = 150.09/2 = 75.05 mg/meq\n• Acetic acid (C2H4O2, MW 60.05, monobasic): EW = 60.05 mg/meq\n• Lactic acid (C3H6O3, MW 90.08, monobasic): EW = 90.08 mg/meq\n\nEndpoint pH 8.2 chosen because phenolphthalein color change (pKa 9.4) matches complete neutralization of weak organic acids (pKa 3-5). 0.1N NaOH provides optimal sensitivity for beverage acid range (0.1-2%).",
      unitAnalysis: "% w/v = [mL × meq/mL × mg/meq × 100] / [mL × 1000 mg/g] = g/mL × 100 = % w/v",
      practicalExample: "Orange juice: 10mL sample titrated with 0.1N NaOH; endpoint at 8.5 mL. Citric acid EW = 64.04. TA = (8.5 × 0.1 × 64.04 × 100)/(10 × 1000) = 0.544% as citric acid (Below FSSAI minimum 0.6% - suggests dilution!)"
    },
    referenceStandard: "AOAC 942.15 / IS 5861 / FSSAI Manual 06 / ISO 750",
    reagentsAndApparatus: [
      "Standardized 0.1N NaOH (CO2-free, freshly standardized against KHP)",
      "1% Phenolphthalein Indicator in 95% Ethanol",
      "50mL Class A Burette with Teflon Stopcock",
      "250mL Erlenmeyer Flasks",
      "CO2-free Distilled Water",
      "Digital pH Meter (for confirmation)"
    ],
    prescribedLimit: "Orange Juice: Min 0.6% (as citric acid) | Lemon Juice: Min 5.0% | Apple Juice: Min 0.3% (as malic) | Grape Juice: Min 0.4% (as tartaric) | Cola: 0.05-0.09% (as phosphoric)",
    riskIfFailed: "Fraudulent water dilution, altered flavor profile, compromised preservation, microbial spoilage risk, mislabeling violation.",
    procedureSteps: [
      "Pipette 10mL clear juice/beverage sample into 250mL Erlenmeyer flask.",
      "Add 50mL CO2-free distilled water and 3 drops phenolphthalein indicator.",
      "Titrate against standardized 0.1N NaOH with continuous swirling.",
      "Continue titration until faint pink color persists for 30 seconds.",
      "Record burette reading; calculate % acidity based on predominant acid in beverage type.",
      "For colored beverages: Use pH meter endpoint at pH 8.2 instead of indicator."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: NaOH Standardization",
        title: "Primary Standard KHP Titration",
        action: "Standardize 0.1N NaOH against potassium hydrogen phthalate (KHP) primary standard.",
        scientificMechanism: "KHP (pure, non-hygroscopic acid) provides exact NaOH normality verification.",
        controlPoint: "CCP 1: NaOH must be CO2-free; boil water before dissolving.",
        reagentsInvolved: ["KHP Primary Standard"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Sample Aliquot Preparation",
        title: "Beverage Sample Loading",
        action: "Pipette 10mL sample; dilute with 50mL CO2-free water; add phenolphthalein.",
        scientificMechanism: "Dilution facilitates endpoint visualization; CO2-free water prevents false endpoint.",
        controlPoint: "CCP 2: Use freshly boiled and cooled water only.",
        reagentsInvolved: ["Sample", "Phenolphthalein"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Volumetric Titration",
        title: "Drop-wise NaOH Addition",
        action: "Titrate with 0.1N NaOH while swirling until first persistent pink color.",
        scientificMechanism: "OH- ions progressively neutralize organic acid H+ ions to form water and salts.",
        controlPoint: "CCP 3: Titrate slowly near endpoint (0.05 mL increments).",
        reagentsInvolved: ["0.1N NaOH"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Endpoint Confirmation",
        title: "Persistent Pink Endpoint (30 sec)",
        action: "Confirm pink color persists for 30 seconds without fading.",
        scientificMechanism: "Phenolphthalein color change at pH 8.2-10.0 signals complete acid neutralization.",
        controlPoint: "CCP 4: If color fades within 30 sec, continue titration cautiously.",
        reagentsInvolved: ["Phenolphthalein"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Acidity Compliance Audit",
        title: "FSSAI Regulatory Compliance",
        action: "Calculate % acidity as predominant acid; verify against FSSAI minimum limits.",
        scientificMechanism: "Ensures juice authenticity and prevents dilution fraud.",
        controlPoint: "Quality Gate: TA below FSSAI limit = suspected water dilution + batch investigation.",
        reagentsInvolved: ["Calculation Sheet"]
      }
    ]
  },

  // 5. CHEMICAL TEST: Brix (Total Soluble Solids) in Sugar Beverages
  {
    id: "bev-chem-3",
    category: "Beverages",
    testType: "Chemical",
    productName: "Fruit Juice, Squash, Syrup, Soft Drink, Nectar, Sugar Solution, Concentrate",
    testName: "Total Soluble Solids (°Brix) Determination by Digital Refractometer",
    shortSummary: "Quantifies total dissolved sugar and soluble solids content via refractive index measurement to verify sweetness, dilution, and concentration standards.",
    detailedScientificRationale:
      "Total Soluble Solids (TSS), expressed in degrees Brix (°Bx), measures the total percentage of dissolved solids (predominantly sugars: sucrose, glucose, fructose) in aqueous solution. One °Brix = 1 gram of sucrose per 100 grams of solution at 20°C.\n\nBrix is a critical quality parameter: (1) Fruit Ripeness Index - determines optimal harvest timing; (2) Juice Authenticity - detects water dilution or sugar addition; (3) Beverage Formulation - ensures consistent sweetness; (4) Concentrate Standards - verifies fold strength (e.g., 60°Brix = 5-fold orange concentrate); (5) Fermentation Monitoring - tracks sugar depletion in wine/beer.\n\nBrix-to-Acid Ratio is the gold-standard flavor quality metric: Orange juice ideal 12-15:1; below 10:1 = too tart; above 20:1 = too flat/insipid. Measurement based on Snell's Law of light refraction through sugar solutions.",
    detailedTestPrinciple:
      "Sugar dissolved in water changes the refractive index (n) of the solution proportionally to concentration. A digital refractometer measures the critical angle at which light undergoes total internal reflection at the prism-sample interface. Modern instruments use CCD/photodiode arrays to precisely detect the shadow line position and convert refractive index to °Brix using ICUMSA sugar refractive index tables.",
    chemicalEquation: "Snell's Law: n1·sin(θ1) = n2·sin(θ2)  |  Critical angle: sin(θc) = n_air/n_solution  |  Refractive Index ↑ with Sugar Concentration ↑",
    formulaBreakdown: {
      formula: "°Brix = f(Refractive Index) using ICUMSA Table 1  |  Temperature Corrected °Brix = Measured °Brix ± TCF",
      variables: [
        { symbol: "n", description: "Refractive index of sample solution (dimensionless, typically 1.333-1.500)" },
        { symbol: "°Brix", description: "Sucrose concentration % w/w (g sucrose per 100g solution)" },
        { symbol: "TCF", description: "Temperature Correction Factor (Brix decreases 0.045°Bx per °C above 20°C)" },
        { symbol: "20°C", description: "Reference calibration temperature (ICUMSA standard)" },
        { symbol: "ICUMSA", description: "International Commission for Uniform Methods of Sugar Analysis lookup table" }
      ],
      derivation: "Based on Snell's Law of Refraction: when light passes from less dense (air, n=1.000) to denser medium (sugar solution, n>1.333), it bends toward the normal. Refractive index increases linearly with dissolved solids: Δn ≈ 0.00142 per 1% sucrose. Empirical ICUMSA tables (established 1936-1974) provide precise sucrose concentration for each refractive index value at 20°C.",
      factorOrigin: "20°C reference temperature standardized by ICUMSA because: (1) Room temperature stability; (2) Historical precedent from sugar industry; (3) Optimal balance between measurement precision and practicality. Temperature correction factor 0.045°Bx/°C empirically derived from thermal expansion coefficient of sugar solutions. Refractive index 1.3330 = 0.0°Bx (pure water at 20°C); n = 1.3403 = 5.00°Bx; n = 1.4200 = 60.00°Bx. Modern refractometers use 589.3 nm (sodium D-line) wavelength for consistency with historical measurements.",
      unitAnalysis: "°Brix = g sucrose / 100g solution = % w/w (mass percentage)",
      practicalExample: "Orange juice at 25°C shows refractometer reading 11.5°Bx. Temperature correction: (25°C - 20°C) × 0.045 = +0.225°Bx addition. Corrected Brix = 11.5 + 0.225 = 11.725°Bx. Combined with TA = 0.9%, Brix:Acid ratio = 13.03 (Ideal for orange juice quality)."
    },
    referenceStandard: "AOAC 932.14 / IS 5861 / ICUMSA Method GS4-13 / ISO 2173 / FSSAI Manual 06",
    reagentsAndApparatus: [
      "Digital Automatic Temperature Compensated (ATC) Refractometer (0-95°Brix range, ±0.1°Bx accuracy)",
      "Bench-top Abbe Refractometer (Reference method)",
      "Calibration Standards: Distilled Water (0°Bx), 5% Sucrose (5°Bx), 10% Sucrose (10°Bx)",
      "Muslin Cloth for Sample Filtration",
      "Constant Temperature Water Bath (20°C ± 0.5°C)",
      "Lint-free Optical Cleaning Wipes"
    ],
    prescribedLimit: "Orange Juice: 11.2°Bx min (single strength) | Apple Juice: 11.5°Bx min | Grape Juice: 16°Bx min | Cola Soft Drink: 10-12°Bx | Squash: 40-45°Bx | Fruit Concentrate: 55-70°Bx",
    riskIfFailed: "Water dilution fraud, mislabeled juice concentration, altered sweetness perception, non-compliance with FSSAI juice authenticity standards.",
    procedureSteps: [
      "Calibrate refractometer with distilled water (should read 0.00°Bx) at 20°C.",
      "Filter beverage sample through muslin cloth to remove pulp/particles (if pulpy juice).",
      "Clean refractometer prism with distilled water and dry with lint-free tissue.",
      "Place 2-3 drops of sample on prism; close cover plate ensuring no air bubbles.",
      "Wait 30 seconds for temperature equilibration; read °Brix directly from display.",
      "Apply temperature correction if not using ATC model: Add 0.045°Bx per °C above 20°C.",
      "For high-Brix samples (>60): Dilute with water in known ratio and multiply back."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Refractometer Calibration",
        title: "Zero-Point Water Calibration",
        action: "Calibrate with distilled water; verify reading = 0.00°Bx at 20°C.",
        scientificMechanism: "Establishes baseline refractive index (n = 1.3330) for pure water reference.",
        controlPoint: "CCP 1: Calibrate daily; use freshly distilled water only.",
        reagentsInvolved: ["Distilled Water"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Sample Preparation",
        title: "Filtration & Homogenization",
        action: "Filter pulpy samples through muslin; ensure uniform, bubble-free liquid.",
        scientificMechanism: "Removes light-scattering particles that would distort refractive index reading.",
        controlPoint: "CCP 2: Filtered sample must be crystal clear.",
        reagentsInvolved: ["Muslin Cloth"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Prism Loading & Optical Measurement",
        title: "Sample Application to Prism",
        action: "Apply 2-3 drops to prism; close cover; allow 30 sec for equilibration.",
        scientificMechanism: "Light passing through sample bends at prism-sample interface based on n.",
        controlPoint: "CCP 3: No air bubbles trapped under cover plate.",
        reagentsInvolved: ["Sample Aliquot"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Reading & Temperature Correction",
        title: "Digital Display Recording",
        action: "Read °Brix from digital display; apply TCF if manual instrument.",
        scientificMechanism: "CCD sensor detects shadow line; algorithm converts to °Brix via ICUMSA table.",
        controlPoint: "CCP 4: ATC models auto-correct; manual models need +0.045°Bx per °C >20°C.",
        reagentsInvolved: ["Refractometer"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Authenticity & Compliance Audit",
        title: "FSSAI Fruit Juice Verification",
        action: "Compare °Brix against FSSAI minimum limits; calculate Brix:Acid ratio.",
        scientificMechanism: "Verifies juice concentration authenticity and flavor quality balance.",
        controlPoint: "Quality Gate: Brix below limit = water dilution fraud; investigate + recall.",
        reagentsInvolved: ["FSSAI Standards"]
      }
    ]
  },

  // 6. CHEMICAL TEST: Carbon Dioxide (CO2) Content in Carbonated Beverages
  {
    id: "bev-chem-4",
    category: "Beverages",
    testType: "Chemical",
    productName: "Carbonated Soft Drink, Sparkling Water, Beer, Cider, Champagne, Energy Drink",
    testName: "CO2 (Carbonation) Volume Determination by Pressure-Temperature Method",
    shortSummary: "Measures dissolved CO2 volume in carbonated beverages via pressure-temperature relationship using Zahm-Nagel meter to ensure fizz consistency and shelf-life.",
    detailedScientificRationale:
      "Carbon Dioxide (CO2) is the essential ingredient that gives carbonated beverages their characteristic fizz, tangy mouthfeel, and enhanced flavor perception. CO2 dissolution creates carbonic acid (H2CO3, pKa 6.35) contributing to beverage acidity. Consumer preference: Soft drinks typically 3.5-4.5 vol CO2; Beer 2.4-2.8 vol; Champagne 5-6 vol.\n\nUnder-carbonation: Flat taste, reduced consumer acceptance, shortened perceived shelf-life.\nOver-carbonation: Excessive foaming during filling (fill height issues), container burst risk, harsh mouthfeel.\n\nCO2 content is regulated by Henry's Law: solubility depends on temperature and pressure. Warmer beverages hold less CO2 (Le Chatelier's principle). This is why cold beverages fizz less when opened - CO2 stays dissolved better at lower temperatures.\n\nManufacturers must precisely control CO2 injection during carbonation to achieve target 'volume' (V = volume of CO2 gas per volume of liquid at STP).",
    detailedTestPrinciple:
      "Sealed beverage container is punctured and connected to Zahm-Nagel CO2 tester. The container is shaken vigorously to release dissolved CO2 into headspace until equilibrium pressure is reached. Pressure gauge records equilibrium pressure (psi); temperature is measured with built-in thermometer. Volume of dissolved CO2 is determined from calibrated Zahm-Nagel chart using pressure and temperature values, based on Henry's Law solubility coefficients.",
    chemicalEquation: "CO2 (gas) ⇌ CO2 (dissolved)  |  Henry's Law: [CO2] = kH × P(CO2)\n\nCO2 + H2O ⇌ H2CO3 ⇌ H+ + HCO3-  (carbonic acid equilibrium)",
    formulaBreakdown: {
      formula: "CO2 Volumes = (P + 14.7) × f(T)  where f(T) from Zahm-Nagel chart",
      variables: [
        { symbol: "P", description: "Equilibrium gauge pressure after shaking (psi/kPa)" },
        { symbol: "14.7", description: "Atmospheric pressure (psi) - converts gauge to absolute pressure" },
        { symbol: "T", description: "Sample temperature at measurement (°C or °F)" },
        { symbol: "f(T)", description: "Temperature-dependent Henry's Law constant from Zahm-Nagel chart" },
        { symbol: "Volumes", description: "Standard unit: volume of CO2 gas (at STP) dissolved per volume of liquid" },
        { symbol: "1 vol = 1.96 g/L", description: "Conversion: 1 volume CO2 = 1.96 g/L = 0.196% w/v" }
      ],
      derivation: "Based on Henry's Law: solubility of gas is proportional to partial pressure above liquid. At equilibrium, CO2 in headspace equals CO2 dissolved. Combined with Ideal Gas Law (PV=nRT), volume of CO2 gas released can be calculated at STP conditions. Zahm-Nagel empirically established charts by measuring CO2 solubility across pressure-temperature matrix.",
      factorOrigin: "14.7 psi = standard atmospheric pressure at sea level (1 atm = 101.325 kPa = 14.696 psi) - used to convert gauge pressure (relative to atmosphere) to absolute pressure required for Henry's Law calculations. 1 volume CO2 = 1.96 g/L derived from molar mass CO2 (44.01 g/mol) and molar volume at STP (22.4 L/mol): 44.01/22.4 = 1.964 g/L. Zahm-Nagel charts developed 1950s-60s using calibrated CO2 injection into water at controlled T-P conditions. Standard temperature 20°C chosen for measurement consistency. Shake time 60 seconds empirically determined for headspace equilibrium.",
      unitAnalysis: "CO2 Volumes = [psi × unitless] = dimensionless ratio (vol/vol at STP)",
      practicalExample: "Cola sample: measured pressure = 45 psi; temperature = 20°C. From Zahm-Nagel chart at these values: CO2 = 4.2 volumes = 8.23 g/L = 0.823% w/v. This is within standard cola specification (3.8-4.5 volumes). ✓ COMPLIANT"
    },
    referenceStandard: "ASBC Beer-13 / MEBAK 2.19.3 / ISBT Method 5.3 / FSSAI Manual 06",
    reagentsAndApparatus: [
      "Zahm-Nagel CO2 Volume Meter with Piercing Device",
      "Calibrated Pressure Gauge (0-100 psi, ±0.5 psi accuracy)",
      "Digital Thermometer (0-30°C, ±0.1°C accuracy)",
      "Zahm-Nagel Temperature-Pressure Volume Conversion Chart",
      "Sample Conditioning at 20°C (± 0.5°C water bath)",
      "Sealed Beverage Container (unopened bottle/can)"
    ],
    prescribedLimit: "Cola/Regular Soda: 3.5-4.5 vol | Diet Soda: 3.7-4.7 vol | Beer (Lager): 2.4-2.8 vol | Sparkling Water: 3.0-5.0 vol | Champagne: 5.5-6.5 vol",
    riskIfFailed: "Flat product (under-carbonation), excessive foam/burst hazard (over-carbonation), consumer complaints, product recall, shortened shelf-life.",
    procedureSteps: [
      "Equilibrate sealed container in water bath at 20°C ± 0.5°C for 30 minutes.",
      "Wipe container dry; secure in Zahm-Nagel meter clamp with piercing needle above cap.",
      "Screw piercing device to puncture the container seal, connecting headspace to pressure gauge.",
      "Shake container vigorously in horizontal position for exactly 60 seconds.",
      "Allow pressure to stabilize (30 seconds); record equilibrium pressure and temperature.",
      "Read CO2 volumes directly from Zahm-Nagel temperature-pressure conversion chart.",
      "Perform 3 replicate measurements; report mean CO2 volumes ± SD."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Temperature Equilibration",
        title: "20°C Sample Conditioning",
        action: "Immerse sealed container in 20°C water bath for 30 min.",
        scientificMechanism: "Standardizes temperature-dependent CO2 solubility for accurate comparison.",
        controlPoint: "CCP 1: Temperature must be exactly 20°C ± 0.5°C.",
        reagentsInvolved: ["Water Bath"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Meter Attachment & Puncture",
        title: "Zahm-Nagel Setup",
        action: "Clamp container; puncture cap with piercing needle to access headspace.",
        scientificMechanism: "Creates sealed connection between beverage headspace and pressure sensor.",
        controlPoint: "CCP 2: Verify no gas leakage at puncture point.",
        reagentsInvolved: ["Zahm-Nagel Meter"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Vigorous Shaking Equilibration",
        title: "60-Second Horizontal Shake",
        action: "Shake horizontally 60 sec to release dissolved CO2 into headspace.",
        scientificMechanism: "Mechanical agitation accelerates CO2 desorption to equilibrium.",
        controlPoint: "CCP 3: Consistent 60-sec shake; vigorous back-forth motion.",
        reagentsInvolved: ["Sample Container"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Pressure & Temperature Recording",
        title: "Equilibrium Reading",
        action: "Wait 30 sec for pressure stabilization; record P and T values.",
        scientificMechanism: "At equilibrium, headspace CO2 pressure directly proportional to dissolved CO2.",
        controlPoint: "CCP 4: Pressure must be stable (no drift) before recording.",
        reagentsInvolved: ["Pressure Gauge", "Thermometer"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Chart Conversion & Spec Audit",
        title: "CO2 Volumes Calculation",
        action: "Convert P-T to CO2 volumes via Zahm-Nagel chart; verify spec compliance.",
        scientificMechanism: "Empirical chart correlates P-T to Henry's Law CO2 solubility.",
        controlPoint: "Quality Gate: CO2 outside spec range = process/carbonation issue; investigate.",
        reagentsInvolved: ["Zahm-Nagel Chart"]
      }
    ]
  },

  // 7. PHYSICAL TEST: Alcohol Content in Alcoholic Beverages
  {
    id: "bev-phys-2",
    category: "Beverages",
    testType: "Physical",
    productName: "Beer, Wine, Whiskey, Rum, Vodka, Brandy, Cider, Fermented Beverages",
    testName: "Alcohol by Volume (ABV) Determination by Distillation + Densitometry",
    shortSummary: "Precisely measures ethanol content in alcoholic beverages via distillation followed by density measurement using digital densitometer or pycnometer.",
    detailedScientificRationale:
      "Alcohol by Volume (ABV %) is the fundamental parameter for alcoholic beverages, determining taxation, labeling, consumer information, and legal drinking limits. Accurate ABV measurement is critical because:\n\n1. **Legal Requirements**: FSSAI mandates label ABV declaration within ±0.5% actual value; excise duties tied to ABV.\n2. **Consumer Safety**: Above-labeled ABV causes intoxication miscalculation, DUI incidents.\n3. **Product Quality**: ABV affects flavor, mouthfeel, shelf-life, microbial stability.\n4. **Standard Ranges**: Beer 3-8%, Wine 8-15%, Fortified Wine 15-22%, Spirits 35-50%.\n\nEthanol (C2H5OH) is less dense (0.789 g/mL at 20°C) than water (0.998 g/mL), so ethanol-water mixtures have density between these values. However, ethanol-water mixtures exhibit non-ideal behavior (volume contraction upon mixing), requiring OIML-established alcoholometric tables for accurate ABV determination from density.",
    detailedTestPrinciple:
      "Sample is distilled to separate ethanol (BP 78.4°C) from dissolved solids, sugars, and non-volatile compounds. Distillate is collected in a volumetric flask, made up to original sample volume with distilled water. Density of the aqueous ethanol distillate is measured using a Digital Density Meter (oscillating U-tube principle) at 20°C. ABV% is calculated from density using OIML International Alcoholometric Tables.",
    chemicalEquation: "C2H5OH (Ethanol, BP 78.4°C) → Distillation → Pure Ethanol-Water Distillate\n\nDensity Measurement: ρ_20°C → OIML Table Lookup → % ABV",
    formulaBreakdown: {
      formula: "% ABV = f(ρ_20°C) from OIML Alcoholometric Table I  |  % Alcohol Weight (ABW) = ABV × ρ_ethanol / ρ_solution",
      variables: [
        { symbol: "ρ_20°C", description: "Density of distillate at 20°C (g/mL or kg/m³)" },
        { symbol: "% ABV", description: "Alcohol by Volume (mL ethanol per 100 mL solution at 20°C)" },
        { symbol: "% ABW", description: "Alcohol by Weight (g ethanol per 100 g solution)" },
        { symbol: "0.789 g/mL", description: "Density of pure ethanol at 20°C" },
        { symbol: "0.998 g/mL", description: "Density of pure water at 20°C" },
        { symbol: "OIML", description: "International Organization of Legal Metrology (established 1975 tables)" }
      ],
      derivation: "Ethanol-water mixtures do not follow ideal mixing rules due to hydrogen bonding differences. When ethanol and water mix, total volume contracts by ~3-4% at 50% ABV. Direct density measurement combined with empirical OIML tables (established through thousands of precision measurements) provides accurate ABV determination accounting for this non-ideality.",
      factorOrigin: "20°C reference temperature standardized internationally by OIML (International Organization of Legal Metrology) for alcoholometry. Boiling point 78.4°C for ethanol enables clean distillation separation from water (100°C). Distillation collection to original volume compensates for water content. Density-ABV relationship is non-linear: pure ethanol ρ = 0.789 g/mL, 50% ABV mixture ρ = 0.923 g/mL, pure water ρ = 0.998 g/mL. Digital density meters achieve 5-decimal precision (0.00001 g/mL) using oscillating U-tube frequency shifts. OIML tables constructed 1972-1975 through international collaboration to standardize legal alcohol measurement.",
      unitAnalysis: "% ABV = [mL ethanol × 100] / [mL solution] = volume percent at 20°C",
      practicalExample: "Wine sample: 100mL distilled to yield 100mL distillate. Density at 20°C = 0.9865 g/mL. OIML table lookup at ρ = 0.9865 → ABV = 12.5%. This matches label declaration (12.5%) within ±0.5% tolerance. ✓ COMPLIANT with FSSAI."
    },
    referenceStandard: "OIML R22 / AOAC 942.06 / EU Regulation 2870/2000 / IS 3752 / FSSAI Manual 06",
    reagentsAndApparatus: [
      "Digital Density Meter (Anton Paar DMA, oscillating U-tube, ±0.00001 g/mL)",
      "Distillation Apparatus (500mL round-bottom flask, Liebig condenser)",
      "100mL Class A Volumetric Flask (calibrated at 20°C)",
      "Constant Temperature Water Bath (20°C ± 0.1°C)",
      "OIML International Alcoholometric Tables (2007 edition)",
      "Anti-bumping granules; boiling stones"
    ],
    prescribedLimit: "Beer: 3.5-8.0% ABV | Wine: 8-15% ABV | Fortified Wine: 15-22% ABV | Spirits: 35-50% ABV | Label tolerance: ±0.5% ABV | Country liquor: max declared ABV",
    riskIfFailed: "Consumer intoxication mis-estimation, excise duty evasion, DUI legal issues, mislabeling penalties, product recall.",
    procedureSteps: [
      "Measure 100.0 mL sample at 20°C into 500mL distillation flask; add 50mL distilled water + boiling chips.",
      "Distill at moderate rate; collect ~95mL distillate in 100mL volumetric flask cooled in ice bath.",
      "Bring distillate to 20°C in water bath; make up to 100.0 mL with distilled water.",
      "Mix thoroughly; transfer to Digital Density Meter cell (avoid air bubbles).",
      "Record density at 20.00°C; look up % ABV in OIML Alcoholometric Table I.",
      "Perform duplicate distillations; report mean ABV to 0.1% precision."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Precise Sample Measurement",
        title: "Volumetric Sample Aliquot",
        action: "Measure 100.0 mL sample at exactly 20°C using volumetric flask.",
        scientificMechanism: "Precise volume measurement essential for accurate ABV back-calculation.",
        controlPoint: "CCP 1: Sample and glassware equilibrated to 20°C.",
        reagentsInvolved: ["Sample", "Volumetric Flask"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Ethanol Distillation",
        title: "Fractional Distillation Separation",
        action: "Distill sample; collect 95% of volume in 100mL volumetric flask.",
        scientificMechanism: "Ethanol (BP 78.4°C) volatilizes preferentially, separating from non-volatile solids.",
        controlPoint: "CCP 2: Moderate distillation rate; avoid superheating.",
        reagentsInvolved: ["Distillation Apparatus"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Volume Adjustment",
        title: "Distillate Dilution to Original Volume",
        action: "Cool distillate to 20°C; adjust to 100.0 mL with distilled water.",
        scientificMechanism: "Restores original volume; distillate now represents alcohol-water only.",
        controlPoint: "CCP 3: Final temperature exactly 20°C during volume adjustment.",
        reagentsInvolved: ["Distilled Water"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Density Measurement",
        title: "Digital Densitometry at 20°C",
        action: "Load distillate into density meter; record ρ at 20°C to 5 decimals.",
        scientificMechanism: "U-tube oscillation frequency shift proportional to density difference.",
        controlPoint: "CCP 4: No air bubbles in cell; temperature stable ±0.01°C.",
        reagentsInvolved: ["Density Meter"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: OIML Table Lookup & Compliance",
        title: "ABV Calculation & Label Verification",
        action: "Look up % ABV from density using OIML Table; verify label match ±0.5%.",
        scientificMechanism: "Empirical tables account for non-ideal ethanol-water mixing behavior.",
        controlPoint: "Quality Gate: ABV deviation >0.5% from label = mislabeling violation.",
        reagentsInvolved: ["OIML Table"]
      }
    ]
  },

  // 8. CHEMICAL TEST: Artificial Sweeteners (Aspartame, Saccharin, Acesulfame-K)
  {
    id: "bev-chem-5",
    category: "Beverages",
    testType: "Chemical",
    productName: "Diet Soft Drink, Sugar-Free Beverage, Low-Calorie Juice, Sports Drink",
    testName: "Artificial Sweetener Determination (HPLC-UV Simultaneous Analysis)",
    shortSummary: "Simultaneously quantifies multiple synthetic sweeteners (aspartame, saccharin, acesulfame-K, sucralose) in low-calorie beverages via HPLC to verify FSSAI safety limits.",
    detailedScientificRationale:
      "Artificial sweeteners provide sweetness with minimal calories, essential for diabetic patients, weight-management consumers, and low-calorie beverage formulations. Common commercial sweeteners:\n\n• **Aspartame (E951)**: 200x sweeter than sucrose; degrades at high temperature/pH; produces phenylalanine (danger for PKU patients - mandatory warning label)\n• **Saccharin (E954)**: 300-400x sweeter; heat-stable; bitter aftertaste; controversial cancer link (now rejected)\n• **Acesulfame-K (E950)**: 200x sweeter; heat/pH stable; synergistic with aspartame\n• **Sucralose (E955)**: 600x sweeter; extremely stable; chlorinated sucrose derivative\n\nFSSAI limits (mg/kg): Aspartame 750, Saccharin 100, Acesulfame-K 350, Sucralose 300. Excess consumption causes: metabolic disruption, gut microbiota alteration, potential neurotoxicity, and specifically for aspartame - phenylketonuria (PKU) crisis in susceptible individuals.\n\nMultiple sweeteners often used together (synergistic sweetening + cost optimization), necessitating simultaneous multi-analyte HPLC methods.",
    detailedTestPrinciple:
      "Beverage sample is degassed, filtered, and directly injected into HPLC (or diluted for high-concentration samples). Reversed-phase C18 column separates sweeteners based on polarity differences using gradient elution with acidified aqueous mobile phase and methanol. Diode Array Detector (DAD) records UV absorbance at multiple wavelengths: acesulfame-K at 227nm, saccharin at 202nm, aspartame at 210nm (peptide bond). Sucralose requires ELSD (Evaporative Light Scattering Detector) as it lacks UV chromophore.",
    chemicalEquation: "R-SO2-NH-CO-R' (Saccharin) + UV 202nm ⟶ Sulfonamide π→π* Absorption\n\nAsp-Phe-OMe (Aspartame) + UV 210nm ⟶ Peptide Bond n→π* Absorption",
    formulaBreakdown: {
      formula: "Sweetener (mg/L) = (A_sample × C_std × D) / (A_std)  |  For each sweetener individually",
      variables: [
        { symbol: "A_sample", description: "Peak area of sweetener in sample chromatogram" },
        { symbol: "A_std", description: "Peak area of certified reference standard" },
        { symbol: "C_std", description: "Concentration of standard (mg/L)" },
        { symbol: "D", description: "Sample dilution factor" },
        { symbol: "λ selection", description: "Optimum UV wavelength for each sweetener (200-227 nm)" }
      ],
      derivation: "External standard calibration based on Beer-Lambert Law. Each sweetener has unique retention time (identification) and characteristic UV absorbance (quantification). Peak area proportional to concentration at fixed injection volume. Multi-wavelength DAD allows simultaneous quantification without changing detector settings.",
      factorOrigin: "UV wavelengths chosen for each sweetener based on λmax:\n• Acesulfame-K: 227 nm (isothiazole ring chromophore)\n• Saccharin: 202 nm (sulfonamide + aromatic ring)\n• Aspartame: 210 nm (peptide bond n→π* transition)\n• Sucralose: No UV chromophore - requires ELSD/refractive index/MS detection\n\nC18 column selectivity based on log P values: Acesulfame-K (log P = -1.3) elutes first; Aspartame (log P = 0.5) middle; Saccharin (log P = 0.9) last. Acidified mobile phase (pH 3.5 phosphate buffer) suppresses ionization of sulfonamides for sharper peaks. Gradient elution improves resolution for complex mixtures. FSSAI limits derived from Acceptable Daily Intake (ADI): Aspartame 40 mg/kg BW/day; based on animal chronic toxicity studies with 100x safety factor.",
      unitAnalysis: "mg/L = [area × mg/L × unitless] / [area] = mg/L (correct concentration unit)",
      practicalExample: "Diet cola sample: Aspartame peak area = 15,000; standard (100 mg/L) area = 12,000; no dilution. Aspartame = (15,000 × 100 × 1)/12,000 = 125 mg/L (Below FSSAI limit 750 mg/L). Similarly Acesulfame-K = 90 mg/L (below 350). ✓ COMPLIANT for both."
    },
    referenceStandard: "AOAC 979.08 / IS 3958 / EU Regulation 1129/2011 / FSSAI Manual 06 / EN 12856",
    reagentsAndApparatus: [
      "HPLC System with Diode Array Detector (DAD, 190-400 nm scanning)",
      "C18 Reversed-Phase Column (250mm × 4.6mm, 5μm)",
      "Certified Sweetener Standards: Aspartame, Saccharin, Acesulfame-K, Sucralose (99%+ purity)",
      "HPLC-Grade Methanol, Water, Phosphate Buffer pH 3.5",
      "0.45 μm PVDF Syringe Filters",
      "Ultrasonic Bath for Degassing"
    ],
    prescribedLimit: "Aspartame: Max 750 mg/kg | Saccharin: Max 100 mg/kg | Acesulfame-K: Max 350 mg/kg | Sucralose: Max 300 mg/kg (all in non-alcoholic beverages)",
    riskIfFailed: "Consumer health risks (PKU crisis from aspartame), metabolic disorders, mandatory warning label omission, FSSAI regulatory violation, product seizure.",
    procedureSteps: [
      "Degas 100mL beverage in ultrasonic bath for 15 min (remove CO2 if carbonated).",
      "Filter 5mL sample through 0.45 μm PVDF filter into HPLC vial.",
      "Prepare mixed standard: Aspartame, Saccharin, Ace-K each at 25, 50, 100, 200 mg/L in mobile phase.",
      "HPLC conditions: C18 column, gradient A (10mM K2HPO4 pH 3.5) - B (methanol) from 5% to 40% B over 15 min, flow 1.0 mL/min.",
      "Inject 20 μL; monitor UV at 227 nm (Ace-K), 202 nm (Saccharin), 210 nm (Aspartame).",
      "Identify by retention time (±2%); quantify by peak area against calibration curve.",
      "Report each sweetener in mg/kg; verify individual and combined FSSAI compliance."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Sample Degassing",
        title: "CO2 Removal & Micro-filtration",
        action: "Degas 100mL beverage; filter through 0.45 μm PVDF filter.",
        scientificMechanism: "Removes CO2 gas bubbles that cause pump pressure instability.",
        controlPoint: "CCP 1: Complete degassing verified visually.",
        reagentsInvolved: ["Ultrasonic Bath"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Multi-Standard Calibration",
        title: "Mixed Sweetener Standards",
        action: "Prepare mixed standards at 25, 50, 100, 200 mg/L in mobile phase.",
        scientificMechanism: "Establishes linear calibration for each analyte (R² > 0.999).",
        controlPoint: "CCP 2: Fresh standards prepared daily (aspartame degrades).",
        reagentsInvolved: ["Certified Standards"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Gradient HPLC Separation",
        title: "C18 Reversed-Phase Gradient",
        action: "Inject 20 μL; run gradient methanol-buffer over 15 min.",
        scientificMechanism: "Different polarities separate sweeteners based on hydrophobic retention.",
        controlPoint: "CCP 3: Retention times reproducible ±2%; resolution >1.5.",
        reagentsInvolved: ["C18 Column", "Mobile Phase"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Multi-Wavelength UV Detection",
        title: "DAD Simultaneous Detection",
        action: "Monitor Ace-K at 227nm, Saccharin at 202nm, Aspartame at 210nm.",
        scientificMechanism: "Diode array simultaneously records all wavelengths; extracts optimum for each.",
        controlPoint: "CCP 4: Confirm identity via spectral match to standards.",
        reagentsInvolved: ["DAD Detector"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: FSSAI Multi-Compliance Audit",
        title: "Individual & Combined Limits Check",
        action: "Calculate each sweetener; verify against FSSAI individual limits.",
        scientificMechanism: "Ensures no single sweetener exceeds safe daily intake threshold.",
        controlPoint: "Quality Gate: Any exceedance + missing PKU warning = product reject.",
        reagentsInvolved: ["Compliance Report"]
      }
    ]
  },

  // 9. MICROBIOLOGICAL TEST: Yeast & Mold in Fruit Juices
  {
    id: "bev-micro-2",
    category: "Beverages",
    testType: "Microbiological",
    productName: "Fruit Juice, Nectar, Squash, RTS Beverage, Concentrate, Puree",
    testName: "Yeast & Mold Enumeration (Pour Plate on PDA - IS 5403)",
    shortSummary: "Enumerates viable yeasts and molds in fruit juices to detect fermentative spoilage, mycotoxin risk, and process hygiene failures.",
    detailedScientificRationale:
      "Fruit juices are highly susceptible to yeast and mold spoilage due to:\n1. **Low pH** (3.0-4.5): Selects for acid-tolerant fungi over bacteria\n2. **High sugar content** (10-15% Brix): Provides fermentation substrate\n3. **Water activity 0.95-0.99**: Optimal for fungal growth\n4. **Ambient temperature storage**: Enables mesophilic fungi\n\n**Primary Spoilage Organisms**:\n• **Saccharomyces cerevisiae**: Fermentative yeast → produces CO2 (bloated packages), ethanol, off-flavors\n• **Zygosaccharomyces bailii**: Preservative-resistant (survives sorbate/benzoate)\n• **Byssochlamys fulva**: Heat-resistant ascospores (survive pasteurization); produces patulin mycotoxin\n• **Alicyclobacillus acidoterrestris**: Not fungal but critical - heat-resistant spore-former; produces guaiacol off-flavor\n• **Penicillium expansum**: Produces patulin mycotoxin in apple juice\n\nMycotoxin concern: Patulin (produced by Penicillium in rotten apples) is neurotoxic and carcinogenic - FSSAI limit 50 μg/kg in apple juice. Yeast contamination indicates: raw material spoilage, inadequate pasteurization, post-processing contamination, package integrity failure.",
    detailedTestPrinciple:
      "Sample dilutions are pour-plated with acidified Potato Dextrose Agar (aPDA, pH 3.5 via tartaric acid) or Dichloran Rose Bengal Chloramphenicol (DRBC) agar. Acidic pH and antibiotics suppress bacterial growth while promoting fungal colonies. Plates incubated at 25°C for 5 days (mesophilic fungi) or 30°C for 5-7 days (thermotolerant fungi). Colonies enumerated and morphology recorded.",
    chemicalEquation: "Fructose/Glucose + Yeast Fermentation (anaerobic) ⟶ 2 Ethanol + 2 CO2 + Off-flavors\n\nPatulin (Toxin) + DNA ⟶ Adduct Formation ⟶ Genotoxicity",
    formulaBreakdown: {
      formula: "CFU/mL = (N × D) / V  where N = colonies, D = dilution factor, V = plated volume",
      variables: [
        { symbol: "N", description: "Number of typical fungal colonies (10-150 range statistically valid)" },
        { symbol: "D", description: "Dilution factor (e.g., 10^-3 = 1000)" },
        { symbol: "V", description: "Volume of dilution plated (mL, typically 1.0)" },
        { symbol: "CFU", description: "Colony Forming Units per mL of original sample" },
        { symbol: "Countable Range", description: "30-300 CFU/plate for statistical accuracy" }
      ],
      derivation: "Standard Plate Count Theorem: Each viable fungal propagule (spore/hyphal fragment) produces one visible colony under optimal conditions. Serial dilution reduces concentration to statistically countable range. Multiplication by dilution factor extrapolates back to original sample concentration.",
      factorOrigin: "PDA pH 3.5 optimal for fungi (bacteria require pH 6.5-7.5). Tartaric acid chosen for acidification (natural in grapes, non-toxic). Chloramphenicol 100 mg/L in DRBC: broad-spectrum bacterial inhibitor, doesn't affect fungi. Rose Bengal 0.05 g/L: limits mold spread (prevents overgrowth of neighboring colonies). Dichloran 2 mg/L: further mold spread control. 25°C incubation for mesophilic bakery/beverage molds; 5-day duration allows slow-growing xerophilic species. Sample volume 1mL provides optimum detection sensitivity balanced with statistical validity.",
      unitAnalysis: "CFU/mL = [colonies × dilution] / [mL plated] = Colony Forming Units per mL",
      practicalExample: "Orange juice: 10^-2 dilution plate shows 45 yeast + 8 mold colonies = 53 total. CFU/mL = (53 × 100)/1.0 = 5,300 CFU/mL = 5.3 × 10^3 CFU/mL (Exceeds FSSAI limit of 20 CFU/mL for pasteurized juice - REJECT + investigate contamination source)"
    },
    referenceStandard: "IS 5403 / ISO 21527-1 / FSSAI Manual 14 / AOAC 997.02",
    reagentsAndApparatus: [
      "Potato Dextrose Agar (PDA) acidified to pH 3.5 with sterile 10% tartaric acid",
      "Dichloran Rose Bengal Chloramphenicol Agar (DRBC, ready-made)",
      "0.1% Peptone Water Diluent (sterile)",
      "Sterile Petri Dishes, Pipettes, Stomacher Bags",
      "Incubator (25°C ± 1°C)",
      "Colony Counter with Illuminated Base",
      "Microscope for Fungal Morphology"
    ],
    prescribedLimit: "Pasteurized Fruit Juice: Max 20 CFU/mL | Unpasteurized: Max 100 CFU/mL | Concentrates: Max 100 CFU/g | Nectars: Max 50 CFU/mL",
    riskIfFailed: "Fermentative spoilage, bloated packages, patulin mycotoxin, off-flavors (guaiacol), health risks (mycotoxicoses), product recall.",
    procedureSteps: [
      "Aseptically pipette 25mL juice sample into 225mL 0.1% peptone water; mix thoroughly (10^-1 dilution).",
      "Prepare serial dilutions: 10^-2, 10^-3, 10^-4 by transferring 1mL to 9mL peptone water.",
      "Pipette 1mL of each dilution into duplicate sterile Petri dishes.",
      "Pour ~15-20mL molten aPDA (cooled to 45°C, pH 3.5); mix by gentle swirling in figure-8 pattern.",
      "Allow to solidify; invert plates; incubate at 25°C ± 1°C for 5 days.",
      "Count colonies daily; final count on Day 5; distinguish yeasts (creamy, round) from molds (fluffy, colored).",
      "Report as CFU/mL; identify predominant fungi by morphology if counts exceed limits."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Aseptic Dilution",
        title: "Sample Dilution Series",
        action: "Prepare 10^-1 to 10^-4 serial dilutions in 0.1% peptone water.",
        scientificMechanism: "Reduces microbial load to countable range (30-300 CFU/plate).",
        controlPoint: "CCP 1: Fresh pipette tip for each dilution; work in Class 100 hood.",
        reagentsInvolved: ["Peptone Water"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Pour Plate Inoculation",
        title: "Acidified PDA Pour Plating",
        action: "Pipette 1mL to plates; pour molten aPDA at 45°C; swirl gently.",
        scientificMechanism: "Acidic pH selectively promotes fungal growth over bacteria.",
        controlPoint: "CCP 2: Agar temperature 45°C (hotter kills cells, cooler solidifies).",
        reagentsInvolved: ["aPDA pH 3.5"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Mesophilic Incubation",
        title: "25°C 5-Day Incubation",
        action: "Invert solidified plates; incubate at 25°C ± 1°C for 5 days.",
        scientificMechanism: "Mesophilic temperature optimum for common beverage-spoiling fungi.",
        controlPoint: "CCP 3: Do NOT stack more than 6 plates - inhibits O2.",
        reagentsInvolved: ["Incubator 25°C"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Colony Enumeration",
        title: "Yeast vs Mold Differentiation",
        action: "Count all colonies; distinguish yeast (creamy) vs mold (filamentous).",
        scientificMechanism: "Yeast unicellular budding forms round colonies; molds hyphal filaments.",
        controlPoint: "CCP 4: Count between 30-300 CFU for statistical validity.",
        reagentsInvolved: ["Colony Counter"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Spoilage Risk Audit",
        title: "FSSAI Compliance & Investigation",
        action: "Calculate CFU/mL; verify against FSSAI limits; identify contamination source.",
        scientificMechanism: "Fungal load predicts spoilage timeline and mycotoxin risk.",
        controlPoint: "Quality Gate: >20 CFU/mL in pasteurized juice = process failure investigation.",
        reagentsInvolved: ["Investigation Report"]
      }
    ]
  },

  // 10. CHEMICAL TEST: Heavy Metals (Lead, Cadmium, Arsenic, Mercury) in Beverages
  {
    id: "bev-chem-6",
    category: "Beverages",
    testType: "Chemical",
    productName: "Packaged Water, Fruit Juice, Soft Drink, Tea, Coffee, Alcoholic Beverages",
    testName: "Heavy Metals Determination by ICP-MS (Pb, Cd, As, Hg)",
    shortSummary: "Detects toxic heavy metals at trace ppb levels in beverages using ICP-MS to ensure consumer safety against neurotoxicity, carcinogenicity, and organ damage.",
    detailedScientificRationale:
      "Heavy metal contamination in beverages is a critical public health concern due to bioaccumulation and irreversible toxic effects. Sources include:\n\n1. **Water Sources**: Contaminated groundwater (arsenic in West Bengal, Bihar), industrial pollution\n2. **Raw Materials**: Fruits from contaminated soil, tea leaves (Sri Lanka lead), sugar processing\n3. **Processing Equipment**: Corroded metal contact surfaces, brass fittings (lead)\n4. **Packaging Migration**: Cans (aluminum, tin), glass decorative paints, plastic additives\n5. **Environmental**: Volcanic activity, mining runoff\n\n**Toxicity Profile**:\n• **Lead (Pb)**: Neurotoxin; IQ reduction in children; bioaccumulates in bones; no safe threshold\n• **Cadmium (Cd)**: Kidney damage (Itai-itai disease); Group 1 carcinogen; osteoporosis\n• **Arsenic (As)**: Skin/lung/bladder cancer; peripheral neuropathy; cardiovascular disease\n• **Mercury (Hg)**: Neurotoxin (Minamata disease); developmental toxicity; fetal brain damage\n\nFSSAI limits (Water/Beverages): Pb 10 μg/L, Cd 3 μg/L, As 10 μg/L, Hg 1 μg/L. ICP-MS provides multi-element detection at 0.001-0.1 μg/L (ppt-ppb) - 1000x more sensitive than AAS.",
    detailedTestPrinciple:
      "Beverage sample is digested with concentrated nitric acid (HNO3) and hydrogen peroxide (H2O2) via microwave digestion to destroy organic matrix and convert all metals to soluble ionic form (metal-nitrate complexes). Digested sample is aspirated into ICP-MS: Inductively Coupled Plasma (argon plasma at 6,000-10,000 K) atomizes and ionizes metals; Mass Spectrometer separates ions by mass-to-charge ratio (m/z); Detector counts ions to quantify concentrations.",
    chemicalEquation: "Beverage Matrix + HNO3 + H2O2 + Microwave ⟶ Metal(NO3)n + CO2 + H2O\n\nMetal Ions + Ar Plasma (7500K) ⟶ M+ Ions → Mass Filter → Detector Counts",
    formulaBreakdown: {
      formula: "Metal (μg/L) = [(C_sample - C_blank) × Vf × D × 1000] / V_sample",
      variables: [
        { symbol: "C_sample", description: "Concentration from ICP-MS calibration curve (μg/L)" },
        { symbol: "C_blank", description: "Blank reagent concentration (μg/L, background correction)" },
        { symbol: "Vf", description: "Final digest volume after dilution (mL, typically 50mL)" },
        { symbol: "D", description: "Additional dilution factor (if any)" },
        { symbol: "V_sample", description: "Original sample volume digested (mL, typically 10mL)" },
        { symbol: "1000", description: "Unit conversion (mL to L)" }
      ],
      derivation: "Based on Beer-Lambert Law equivalent for mass spectrometry: signal intensity directly proportional to ion concentration at fixed operating conditions. External standard calibration establishes signal-concentration relationship (typically linear over 5-6 orders of magnitude). Isotope selection minimizes polyatomic interferences.",
      factorOrigin: "**Isotope Selection**:\n• Lead: 208Pb (52.4% natural abundance, most abundant)\n• Cadmium: 111Cd (12.8%) - avoids 114Cd/114Sn interference\n• Arsenic: 75As (100% mono-isotopic) - avoids 40Ar35Cl polyatomic\n• Mercury: 202Hg (29.9%) - avoids 200Hg interference\n\n**Detection Limits** (ICP-MS): Pb 0.001, Cd 0.001, As 0.01, Hg 0.01 μg/L - 100-1000x better than FAAS. **Internal Standards** (In, Bi, Rh) correct for matrix effects and instrumental drift. **Collision Cell** (He gas) removes polyatomic interferences via kinetic energy discrimination. FSSAI limits based on WHO/JECFA provisional tolerable weekly intake (PTWI): Pb 25 μg/kg BW/week; adjusted 10x safety factor for children.",
      unitAnalysis: "μg/L = [(μg/L × mL × unitless × 1000)/mL] = μg/L = ppb (parts per billion)",
      practicalExample: "Packaged water: 10mL digested and diluted to 50mL. ICP-MS reads: Pb = 4.2 μg/L, Cd = 0.8 μg/L, As = 6.5 μg/L, Hg = 0.3 μg/L. All below FSSAI limits (Pb 10, Cd 3, As 10, Hg 1). ✓ COMPLIANT. Multiply by 5 (dilution): actual water contains Pb 21 ppb (Wait - exceeds limit!) → Product REJECTED."
    },
    referenceStandard: "AOAC 2015.01 / IS 3025 / ISO 17294-2 / EPA Method 200.8 / FSSAI Manual 07",
    reagentsAndApparatus: [
      "ICP-MS System (Agilent 7900, PerkinElmer NexION, Thermo iCAP-Q)",
      "Microwave Digestion System (CEM MARS, Milestone UltraWAVE)",
      "Ultra-pure HNO3 (Suprapur/Trace metal grade), 30% H2O2",
      "18.2 MΩ·cm Ultra-Pure Water (Milli-Q)",
      "Multi-Element Calibration Standards (NIST-traceable)",
      "Internal Standards: In (115), Bi (209), Rh (103)",
      "PFA/Teflon Digestion Vessels"
    ],
    prescribedLimit: "Lead (Pb): Max 10 μg/L | Cadmium (Cd): Max 3 μg/L | Arsenic (As): Max 10 μg/L | Mercury (Hg): Max 1 μg/L (FSSAI/BIS Water) | Fruit Juices: Similar limits + specific commodity limits",
    riskIfFailed: "Chronic heavy metal poisoning, cancer, neurological damage (especially children), organ failure, birth defects, immediate product recall + criminal prosecution.",
    procedureSteps: [
      "Weigh 10.0 mL beverage sample into clean PFA digestion vessel; add 5mL ultra-pure HNO3 + 2mL H2O2.",
      "Microwave digest: Ramp to 200°C over 15 min; hold 200°C for 20 min; cool to room temp.",
      "Quantitatively transfer digest to 50mL volumetric flask; add internal standard (In, Bi 10 μg/L each); dilute with ultra-pure water.",
      "Prepare calibration standards: 0, 1, 5, 10, 25, 50 μg/L multi-element standards in 2% HNO3.",
      "Aspirate calibration standards into ICP-MS; establish calibration curves for each element (R² > 0.999).",
      "Analyze samples in sequence with QC checks every 10 samples; monitor internal standard recovery (80-120%).",
      "Calculate concentrations from calibration; apply blank correction; verify against FSSAI limits."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Microwave Acid Digestion",
        title: "Matrix Destruction & Metal Solubilization",
        action: "Digest 10mL sample with HNO3 + H2O2 at 200°C for 20 min in microwave.",
        scientificMechanism: "Nitric acid oxidizes organic matter; converts metals to soluble nitrates.",
        controlPoint: "CCP 1: Use trace-metal grade reagents to avoid contamination.",
        reagentsInvolved: ["HNO3 Ultra-pure", "H2O2"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Internal Standard Addition",
        title: "IS Spike for Matrix Correction",
        action: "Add In/Bi/Rh internal standards to sample and calibrants alike.",
        scientificMechanism: "Corrects for instrumental drift and matrix suppression effects.",
        controlPoint: "CCP 2: IS recovery must be 80-120% throughout run.",
        reagentsInvolved: ["Internal Standards"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Multi-Element Calibration",
        title: "NIST-Traceable Standard Curve",
        action: "Analyze 0-50 μg/L calibration standards; establish R² > 0.999.",
        scientificMechanism: "Linear signal-concentration response over 5+ orders of magnitude.",
        controlPoint: "CCP 3: Calibration blank <detection limit (2 SD above blank).",
        reagentsInvolved: ["Multi-Element Standards"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: ICP-MS Ion Detection",
        title: "Plasma Ionization & Mass Analysis",
        action: "Aspirate sample; plasma at 7500K ionizes metals; MS separates by m/z.",
        scientificMechanism: "Argon plasma atomizes/ionizes analytes; quadrupole selects specific isotopes.",
        controlPoint: "CCP 4: Optimize collision cell for polyatomic interference removal.",
        reagentsInvolved: ["Argon Plasma", "MS Detector"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Consumer Safety Compliance",
        title: "FSSAI Multi-Metal Verification",
        action: "Calculate each metal concentration; verify against FSSAI/BIS limits.",
        scientificMechanism: "Ensures cumulative heavy metal exposure below toxicological thresholds.",
        controlPoint: "Quality Gate: Any metal exceeding limit = immediate recall + investigation.",
        reagentsInvolved: ["Compliance Report"]
      }
    ]
  },

  // 11. CHEMICAL TEST: Preservatives (Sorbic & Benzoic Acid) in Beverages
  {
    id: "bev-chem-7",
    category: "Beverages",
    testType: "Chemical",
    productName: "Soft Drink, Fruit Juice, Squash, Nectar, RTS Beverage, Concentrate",
    testName: "Sorbic & Benzoic Acid Preservative Analysis (HPLC-UV)",
    shortSummary: "Quantifies permitted chemical preservatives (sodium benzoate, potassium sorbate) in beverages to verify FSSAI safety limits and prevent overdose.",
    detailedScientificRationale:
      "Sorbic acid (E200) and Benzoic acid (E210) are the most commonly used Class II preservatives in beverages for their antimicrobial efficacy against yeasts, molds, and bacteria at acidic pH.\n\n**Mechanism**:\n• **Sorbic Acid**: Enters microbial cells in undissociated form; inhibits enzyme dehydrogenases; disrupts cell membrane\n• **Benzoic Acid**: Lowers intracellular pH; blocks oxidative phosphorylation; inhibits α-ketoglutarate dehydrogenase\n\n**pH Dependency**: Both preservatives active only in undissociated form (pKa Sorbic 4.76; Benzoic 4.19). At pH <4.5, >50% remains undissociated (active); above pH 5, activity drops dramatically. Hence effective only in acidic beverages.\n\n**Safety Concerns**:\n• Benzoate + Ascorbic Acid + Heat/Light → Benzene formation (Group 1 carcinogen) - major food safety scandal 2005-2006\n• Hyperactivity in children (linked to combined sodium benzoate + artificial colors)\n• Allergic reactions in asthmatic patients\n• Aspirin allergy sufferers must avoid benzoate\n\n**FSSAI Limits**: Sorbic acid 250 mg/kg (soft drinks), Benzoic acid 200 mg/kg (fruit-based drinks). Combined use permitted but total must not exceed higher individual limit.",
    detailedTestPrinciple:
      "Beverage sample is degassed, diluted, filtered, and directly injected into HPLC. Reversed-phase C18 column separates sorbic and benzoic acids using isocratic mobile phase (acidified methanol-water). UV detection at dual wavelengths: sorbic acid 230nm (conjugated diene chromophore), benzoic acid 254nm (aromatic ring). Peak identification by retention time; quantification by external standard calibration.",
    chemicalEquation: "K-Sorbate (Undissociated at pH<4.5) + Fungal Cell ⟶ Enzyme Inhibition + Growth Cessation\n\nNa-Benzoate + Ascorbic Acid + Cu²⁺/Fe²⁺ + Heat ⟶ Benzene (Carcinogen) + CO2 (RISK!)",
    formulaBreakdown: {
      formula: "Preservative (mg/kg) = (A_sample × C_std × Vf × D × 1000) / (A_std × W × Vi)",
      variables: [
        { symbol: "A_sample", description: "Peak area of preservative in sample chromatogram" },
        { symbol: "A_std", description: "Peak area of reference standard" },
        { symbol: "C_std", description: "Concentration of standard (μg/mL)" },
        { symbol: "Vf", description: "Final sample volume after dilution (mL)" },
        { symbol: "Vi", description: "Injection volume (μL)" },
        { symbol: "D", description: "Additional dilution factor" },
        { symbol: "W", description: "Sample volume (mL, treated as g for aqueous beverages)" },
        { symbol: "1000", description: "Conversion factor (μg to mg AND g to kg)" }
      ],
      derivation: "External standard calibration based on Beer-Lambert Law for UV absorbance. Ratio of sample to standard peak areas eliminates instrumental variables. Concentrations in mg/kg (ppm) standardized to enable direct comparison with FSSAI limits.",
      factorOrigin: "**UV Wavelengths**: 230 nm for sorbic acid captures maximum absorbance of conjugated diene system (C=C-C=C); 254 nm for benzoic acid detects aromatic ring π→π* transition. **C18 Column**: retains both preservatives via hydrophobic interaction; sorbic (log P 1.33) elutes before benzoic (log P 1.87). **Mobile Phase pH 3.5**: keeps preservatives in undissociated form for sharp peaks (suppresses ionization). **FSSAI Limits** derived from Acceptable Daily Intake (ADI): Sorbic acid ADI 25 mg/kg BW/day; Benzoic acid ADI 5 mg/kg BW/day. Sample volume 20 μL optimal balance of sensitivity and column loading.",
      unitAnalysis: "mg/kg = [area × μg/mL × mL × unitless × 1000] / [area × mL × μL × 1000] = mg/kg = ppm",
      practicalExample: "Orange squash: 5mL diluted to 50mL, injected 20μL. Benzoic acid peak area 18,500; standard (50 μg/mL) area 12,000; no additional dilution. Benzoic acid = (18,500 × 50 × 50 × 1 × 1000) / (12,000 × 5 × 20) = 385 mg/kg (Below FSSAI limit 500 mg/kg for squashes). ✓ COMPLIANT"
    },
    referenceStandard: "AOAC 979.08 / IS 3958 / FSSAI Manual 06 / EN 12856 / EU Regulation 1129/2011",
    reagentsAndApparatus: [
      "HPLC System with UV-Visible Detector (dual wavelength capability)",
      "C18 Reversed-Phase Column (250mm × 4.6mm, 5μm)",
      "Certified Sorbic Acid & Benzoic Acid Standards (99%+ purity, USP grade)",
      "HPLC-Grade Methanol, Phosphate Buffer pH 3.5",
      "0.45 μm PVDF Syringe Filters",
      "Ultrasonic Bath for Sample Degassing"
    ],
    prescribedLimit: "Sorbic Acid: Max 250 mg/kg (soft drinks), 500 mg/kg (squashes) | Benzoic Acid: Max 200 mg/kg (fruit drinks), 600 mg/kg (concentrates) | Combined Total: Not exceeding higher individual limit",
    riskIfFailed: "Benzene formation (carcinogen), children hyperactivity, asthma exacerbation, aspirin allergy reactions, regulatory violation, product seizure.",
    procedureSteps: [
      "Degas 50mL beverage sample in ultrasonic bath for 15 min.",
      "Pipette 5mL sample into 50mL volumetric flask; dilute with mobile phase; mix thoroughly.",
      "Filter through 0.45 μm PVDF filter into HPLC vial.",
      "Prepare standards: Sorbic + Benzoic acid at 10, 25, 50, 100, 200 μg/mL in mobile phase.",
      "HPLC conditions: C18 column, mobile phase methanol:phosphate buffer pH 3.5 (30:70 v/v), flow 1.0 mL/min.",
      "Inject 20 μL; monitor UV at 230 nm (sorbic) and 254 nm (benzoic); RT ~4 min sorbic, ~6 min benzoic.",
      "Calculate mg/kg for each preservative; verify against FSSAI limits."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Sample Preparation",
        title: "Degassing & Dilution",
        action: "Degas 50mL sample; dilute 5mL to 50mL with mobile phase.",
        scientificMechanism: "Removes CO2 gas; brings concentration into HPLC linear range.",
        controlPoint: "CCP 1: Complete degassing verified visually.",
        reagentsInvolved: ["Mobile Phase"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Standard Calibration",
        title: "Multi-Level Calibration",
        action: "Prepare 10-200 μg/mL standards; establish linear calibration (R² > 0.999).",
        scientificMechanism: "External standard method for quantitative determination.",
        controlPoint: "CCP 2: Fresh standards weekly; check for degradation.",
        reagentsInvolved: ["Certified Standards"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: HPLC Separation",
        title: "C18 Isocratic Separation",
        action: "Inject 20 μL; separate on C18 with methanol-buffer at 1.0 mL/min.",
        scientificMechanism: "Different polarities give distinct retention times.",
        controlPoint: "CCP 3: RT reproducibility ±2%; resolution >1.5.",
        reagentsInvolved: ["HPLC System"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Dual UV Detection",
        title: "230nm & 254nm Monitoring",
        action: "Detect sorbic at 230nm and benzoic at 254nm simultaneously.",
        scientificMechanism: "Wavelength selection optimizes sensitivity for each analyte.",
        controlPoint: "CCP 4: Peak identity confirmed by spectral match.",
        reagentsInvolved: ["UV Detector"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: FSSAI Compliance Audit",
        title: "Individual & Combined Limits",
        action: "Calculate each preservative; verify against FSSAI limits.",
        scientificMechanism: "Ensures preservative use within safe consumption levels.",
        controlPoint: "Quality Gate: Any exceedance = batch reject + investigation.",
        reagentsInvolved: ["Compliance Report"]
      }
    ]
  },

  // 12. PHYSICAL TEST: Color Intensity in Beverages
  {
    id: "bev-phys-3",
    category: "Beverages",
    testType: "Physical",
    productName: "Fruit Juice, Soft Drink, Wine, Beer, Tea, Coffee, Colored Beverages",
    testName: "Color Determination by Tristimulus Colorimetry (CIE L*a*b* / EBC Method)",
    shortSummary: "Objectively quantifies beverage color using CIE L*a*b* color space or EBC scale to ensure batch consistency, quality control, and consumer acceptance.",
    detailedScientificRationale:
      "Color is the FIRST quality attribute consumers perceive - directly influencing purchase decisions and taste expectations. Subjective visual assessment is unreliable due to lighting variations, observer differences, and psychological bias. Objective instrumental color measurement provides reproducible, quantitative data.\n\n**CIE L*a*b* Color Space** (established 1976):\n• **L*** (Lightness): 0 (black) to 100 (white)\n• **a*** (Red-Green axis): +a red; -a green\n• **b*** (Yellow-Blue axis): +b yellow; -b blue\n• **ΔE** (Color Difference): √[(ΔL*)² + (Δa*)² + (Δb*)²]; ΔE > 3 visible to human eye\n\n**Applications**:\n• Fruit Juice: Verify natural color from raw fruits\n• Wine: Assess aging, tannin oxidation, browning\n• Beer: EBC color scale (2-40 EBC): Pale lager 4-8, IPA 12-20, Stout 40+\n• Cola: Caramel color consistency batch-to-batch\n• Tea: Theaflavin/thearubigin extraction efficiency\n\n**Color Changes Indicate**:\n1. **Enzymatic Browning**: PPO oxidation in fruit juices\n2. **Non-enzymatic Browning**: Maillard reaction (Cola, coffee)\n3. **Anthocyanin Degradation**: Red wine color loss\n4. **Chlorophyll Loss**: Green vegetable juices during processing\n5. **Adulteration Detection**: Illegal color additives, dilution",
    detailedTestPrinciple:
      "Sample is placed in a specified cuvette (typically 10mm path length) and analyzed by tristimulus colorimeter or spectrophotometer with color measurement software. Instrument measures reflectance/transmittance across visible spectrum (380-780 nm) and calculates CIE L*a*b* values using CIE 1976 color space equations and D65/A/F2 standard illuminants. For beer, transmittance at 430 nm is measured and converted to EBC units via standardized formula.",
    chemicalEquation: "Anthocyanin (Red) → Chalcone (Colorless) at pH>4 [Reversible]  |  Fe²⁺ + Polyphenols → Black-Blue Complex (Beverage Discoloration)",
    formulaBreakdown: {
      formula: "L* = 116(Y/Yn)^(1/3) - 16  |  a* = 500[(X/Xn)^(1/3) - (Y/Yn)^(1/3)]  |  b* = 200[(Y/Yn)^(1/3) - (Z/Zn)^(1/3)]  |  EBC = A_430 × 25 (for beer)",
      variables: [
        { symbol: "L*", description: "Lightness (0-100 scale)" },
        { symbol: "a*", description: "Red-Green chromaticity coordinate (-128 to +127)" },
        { symbol: "b*", description: "Yellow-Blue chromaticity coordinate (-128 to +127)" },
        { symbol: "X, Y, Z", description: "CIE Tristimulus values from spectral data" },
        { symbol: "Xn, Yn, Zn", description: "Standard illuminant tristimulus values (D65: Xn=95.04, Yn=100.00, Zn=108.88)" },
        { symbol: "A_430", description: "Absorbance at 430 nm (10mm path length)" },
        { symbol: "25", description: "EBC beer color conversion factor (empirical)" },
        { symbol: "ΔE", description: "Total color difference between samples/reference" }
      ],
      derivation: "CIE L*a*b* derived from XYZ tristimulus system using cubic root transformation to approximate human visual perception (Weber-Fechner logarithmic response). CIE 1976 formula creates perceptually uniform color space where equal numerical differences correspond to equal perceived differences. EBC scale for beer developed empirically to correlate absorbance at 430 nm with visual color intensity across pale to dark beers.",
      factorOrigin: "**L*a*b* Cubic Root Function**: mimics human eye's non-linear response to lightness (perceived doubling of lightness requires 8x actual luminance). **D65 Illuminant**: represents average daylight at 6500K color temperature - most common global standard. **Coefficients 116, 500, 200**: chosen to give white point L*=100, and reasonable ranges for a* and b* axes. **EBC 430 nm**: wavelength where beer color pigments (melanoidins from malt) show maximum sensitivity to concentration changes. **EBC Factor 25**: derived empirically from correlation studies between spectrophotometric readings and visual EBC color standards. **ΔE Threshold**: 1 = imperceptible, 2-3 = perceivable by trained observers, >3 = visible to average consumers, >6 = clearly different colors.",
      unitAnalysis: "L*a*b* = dimensionless coordinates; EBC = dimensionless intensity units",
      practicalExample: "Cola sample: L* = 15.2, a* = 2.5, b* = 8.3. Reference standard: L* = 14.8, a* = 2.7, b* = 8.5. ΔE = √[(0.4)² + (0.2)² + (0.2)²] = √0.24 = 0.49 (Below perceptible threshold - COMPLIANT for batch consistency). For Beer: A_430 = 0.32; EBC = 0.32 × 25 = 8.0 EBC (Pale lager range 4-8 - COMPLIANT)"
    },
    referenceStandard: "CIE 1976 L*a*b* / EBC 9.6 / ASBC Beer-10A / ISO 11664 / AACC 14-22",
    reagentsAndApparatus: [
      "Tristimulus Colorimeter (Konica Minolta CR-400, HunterLab, Chroma Meter)",
      "UV-Visible Spectrophotometer with Color Measurement Software",
      "Standard White Calibration Tile & Black Zero Cap",
      "Quartz Cuvettes (10mm, 20mm path length options)",
      "Color Reference Standards (Beer EBC 2, 8, 15, 25, 40; Munsell Color Chart)",
      "Standard Illuminants: D65 (daylight), A (tungsten), F2 (cool white fluorescent)"
    ],
    prescribedLimit: "Cola: L*<20, dark brown | Orange Juice: L*=45-55, a*=5-15, b*=25-40 | Beer Lager: 4-8 EBC | Beer Stout: 40+ EBC | Wine Red: Anthocyanin dependent | Batch ΔE variance: <3",
    riskIfFailed: "Batch color variance, consumer rejection, brand consistency loss, indication of process deviations (temperature, oxidation), potential adulteration.",
    procedureSteps: [
      "Turn on colorimeter/spectrophotometer 30 min for lamp warmup and stability.",
      "Calibrate with certified white tile (100% reflectance) and black cap (0%).",
      "Fill quartz cuvette with degassed beverage sample; avoid air bubbles.",
      "Place cuvette in measurement port; select D65 illuminant, 10° observer angle.",
      "Record L*, a*, b* values (average 3 replicate readings).",
      "For beer: Measure absorbance at 430 nm; calculate EBC = A_430 × 25 × dilution factor.",
      "Calculate ΔE from reference batch; verify color acceptance within specification."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Instrument Calibration",
        title: "White & Black Reference Setup",
        action: "Calibrate with white tile and black cap; verify calibration standards.",
        scientificMechanism: "Establishes 0% and 100% reflectance/transmittance references.",
        controlPoint: "CCP 1: Daily calibration; verify with color check standards.",
        reagentsInvolved: ["Calibration Tiles"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Sample Loading",
        title: "Cuvette Preparation",
        action: "Fill degassed sample in 10mm cuvette; ensure no air bubbles.",
        scientificMechanism: "Standard path length ensures reproducible measurements.",
        controlPoint: "CCP 2: Clean cuvette walls; no fingerprints or scratches.",
        reagentsInvolved: ["Sample"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Spectral Measurement",
        title: "Visible Spectrum Scanning",
        action: "Measure reflectance/transmittance across 380-780 nm at 10 nm intervals.",
        scientificMechanism: "Full spectral data enables accurate color coordinate calculation.",
        controlPoint: "CCP 3: 3 replicate measurements; report mean ± SD.",
        reagentsInvolved: ["Spectrophotometer"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Color Space Conversion",
        title: "L*a*b* / EBC Calculation",
        action: "Software converts spectra to L*a*b* using CIE 1976 formulas.",
        scientificMechanism: "Cubic root transformation gives perceptually uniform color space.",
        controlPoint: "CCP 4: Use D65 illuminant and 10° observer consistently.",
        reagentsInvolved: ["Color Software"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Quality Control Audit",
        title: "Batch Consistency Verification",
        action: "Compare against reference; calculate ΔE; verify within spec.",
        scientificMechanism: "ΔE > 3 indicates visually perceptible color deviation.",
        controlPoint: "Quality Gate: ΔE > 3 = process investigation + potential batch reject.",
        reagentsInvolved: ["Reference Standard"]
      }
    ]
  }
];