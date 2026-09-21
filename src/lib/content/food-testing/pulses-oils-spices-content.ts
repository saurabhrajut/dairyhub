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
      formula: "Total Extraneous Matter % = [(W_inorganic + W_organic) / W_sample] × 100",
      variables: [
        { symbol: "W_inorganic", description: "Mass of stones, gravel, dirt, clay lumps (g)" },
        { symbol: "W_organic", description: "Mass of chaff, stems, weed seeds, insect-damaged grains (g)" },
        { symbol: "W_sample", description: "Total representative sample mass taken (typically 500.0g)" },
        { symbol: "100", description: "Percentage conversion factor" }
      ],
      derivation: "Extraneous matter represents the non-conforming physical mass fraction relative to initial commodity mass. The sum of inorganic mineral refuse and organic agricultural debris is divided by total sample weight and multiplied by 100 to yield statutory weight-by-weight percentage.",
      factorOrigin: "500g sample size specified in IS 4333 (Part 1) to ensure statistical representation across large heterogeneous grain lots. Sieves of 1.0mm, 2.0mm, and 4.0mm aperture standardize fraction cut-offs. White enamel sorting trays provide optimal contrast under 540 lux illumination.",
      unitAnalysis: "% (w/w) = [ (g + g) / g ] × 100 = dimensionless mass percentage",
      practicalExample: "W_sample = 500.0g Chana Dal. W_inorganic = 0.85g stones; W_organic = 2.40g weed seeds/chaff. Total = [(0.85 + 2.40) / 500.0] × 100 = (3.25 / 500.0) × 100 = 0.65% (w/w). Inorganic = (0.85 / 500.0) × 100 = 0.17%. Complies with FSSAI limits (Total ≤1.0%, Inorganic ≤0.25%)."
    },
    referenceStandard: "FSSAI Manual 03 (Pulses) & Manual 10 (Spices) / IS 4333 (Part 1) / ISO 927",
    reagentsAndApparatus: [
      "Certified Analytical Test Sieves (IS 1.0mm, 2.0mm, 4.0mm)",
      "Illuminated White Enamel Sorting Inspection Tray (5x Magnifier)",
      "Precision Stainless Steel Dissecting Forceps",
      "Analytical Balance (Sensitivity 0.001g)",
      "Boerner Grain Sample Divider / Riffle Sampler"
    ],
    prescribedLimit: "Pulses: Total Foreign Matter Max 1.0% (w/w) [Inorganic stones Max 0.25%] | Spices: Max 1.0% to 2.0%",
    riskIfFailed: "Severe dental fractures, intestinal obstruction/abrasion, high uric acid contamination from bruchid beetles, fungal spoilage, and trade rejection.",
    factorsExplanation: [
      {
        question: "Inorganic foreign matter (kankad/patthar) ki limit 0.25% itni strict kyun rakhi gayi hai?",
        answer: "1. Kankad aur ret human consumption ke liye direct physical injury hazard hain, jisse dental damage aur enamel fracture hota hai.\n2. Grinding ke dauran stones hammer mill ke blades ko damage karte hain aur spark produce karke dust explosion ka risk paida karte hain.\n3. FSSAI ne consumer safety aur machine longevity dono ke liye 0.25% ceiling lagayi hai."
      },
      {
        question: "Extraneous matter testing ke liye 500g sample lena kyun zaroori hai? 10g ya 50g kyun nahi?",
        answer: "1. Grains aur pulses mein patthar aur kachra homogeneously distributed nahi hota, balki random localized clusters mein hota hai.\n2. Chhota sample (10g) lene par sampling bias ka bahut high risk hota hai — ho sakta hai 10g mein ek bhi kankad na aaye ya pure lot ka ek bada kankad aa jaye.\n3. 500g Boerner divider se draw kiya gaya sample statistically 99% confidence level par pure grain consignment ko represent karta hai."
      },
      {
        question: "Bruchid weevil-damaged pulses ko organic foreign matter mein kyun count kiya jaata hai?",
        answer: "1. Weevilled grains andar se hollow hote hain aur unka protein structure insect larva dwara consume ho chuka hota hai.\n2. In hollow grains ke andar insect frass, excreta aur high uric acid accumulate ho jaata hai.\n3. Uric acid consumption se hyperuricemia aur acute gout arthritis trigger ho sakta hai, isliye insect-damaged grains strictly regulated hain (Max 3-5%)."
      },
      {
        question: "White inspection tray aur 5x illuminated magnifier use karna standard SOP mein mandatory kyun hai?",
        answer: "1. Pulses aur foreign seeds ka color contrast white surface par maximum hota hai.\n2. 5x magnification se weed seeds (jaise Datura, Argemone, ya Khesari ke chhote pieces) naked eye se miss hone ke bajaye instantly identify ho jaate hain.\n3. IS 4333 standard lighting (minimum 540 lux) mandate karta hai taaki operator fatigue aur inspection error zero rahe."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Sample Size", value: "500.0g", reason: "Statistical representation across heterogeneous bulk grain lots per IS 4333" },
      { parameter: "Inorganic Matter Ceiling", value: "Max 0.25% (w/w)", reason: "Prevents dental fracture trauma and milling equipment blade damage" },
      { parameter: "Total Extraneous Ceiling", value: "Max 1.0% (w/w)", reason: "FSSAI statutory purity benchmark for premium food-grade pulses" },
      { parameter: "Inspection Illumination", value: "Min 540 Lux / 5x Magnification", reason: "Ensures visual contrast for weed seed and insect damage differentiation" }
    ],
    procedureSteps: [
      "Homogenize bulk pulses lot through Boerner divider to obtain 500.0g working laboratory sample.",
      "Record exact initial mass (W_sample) on analytical balance to ±0.001g.",
      "Pass sample through stacked certified sieves (4.0mm, 2.0mm, 1.0mm) to separate fine dust, sand, and large debris.",
      "Spread retained pulses onto white illuminated sorting tray and inspect systematically under 5x magnifier.",
      "Pick out all inorganic matter (stones, gravel, clay) with forceps into a tared weighing boat (W_inorganic).",
      "Pick out all organic foreign matter (chaff, weed seeds, stems, insect-damaged seeds) into second boat (W_organic).",
      "Weigh both fractions and calculate Total Extraneous Matter % and Inorganic Foreign Matter %."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Boerner Sample Division",
        title: "Representative Sample Isolation",
        action: "Divide consignment through Boerner riffle divider to obtain 500g analytical sample.",
        scientificMechanism: "Eliminates gravitational stratification and particle size segregation during sampling.",
        controlPoint: "CCP 1: Ensure divider chutes are clean and free of stuck residues.",
        reagentsInvolved: ["Boerner Divider", "500g Pulse Sample"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Nested Mechanical Sieving",
        title: "Size-Fractionation Screening",
        action: "Shake sample across 4.0mm, 2.0mm, and 1.0mm sieves for 2 minutes.",
        scientificMechanism: "Mechanically segregates undersized mineral dust and oversized vegetative stalks.",
        controlPoint: "CCP 2: Calibrate sieves per IS 460 standards.",
        reagentsInvolved: ["Nested Test Sieves"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Optical Inspection & Separation",
        title: "Forceps Manual Fractionation",
        action: "Sort sample under 5x illuminated magnifier on white enamel tray; separate inorganic vs organic fractions.",
        scientificMechanism: "Differentiates mineral refractory matter from organic botanic residues.",
        controlPoint: "CCP 3: Inspect 100% of the tray surface systematically without rushing.",
        reagentsInvolved: ["Forceps", "White Sorting Tray"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Precision Gravimetric Weighing",
        title: "Fraction Mass Quantification",
        action: "Weigh separated inorganic stones and organic debris on analytical balance to 0.001g.",
        scientificMechanism: "Quantifies individual contaminant mass ratios.",
        controlPoint: "CCP 4: Analytical balance leveled and calibrated.",
        reagentsInvolved: ["Analytical Balance (±0.001g)"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Statutory Compliance Decision",
        title: "FSSAI Ceiling Gate Audit",
        action: "Calculate % Total Foreign Matter and % Inorganic Matter; compare with legal thresholds.",
        scientificMechanism: "Guarantees food safety and consumer protection against physical trauma.",
        controlPoint: "Quality Gate: Total > 1.0% or Inorganic > 0.25% triggers immediate consignment rejection.",
        reagentsInvolved: ["Calculation Workstation"]
      }
    ]
  },

  // 2. PHYSICAL TEST: Moisture (Dean & Stark) & Volatile Oil (Clevenger) in Spices
  {
    id: "spices-phys-2",
    category: "Pulses, Oil & Spices",
    testType: "Physical",
    productName: "Cumin, Coriander, Black Pepper, Cardamom, Cloves, Turmeric, Chilli",
    testName: "Moisture (Dean & Stark Toluene Azeotrope) & Volatile Oil (Clevenger)",
    shortSummary: "Determines moisture without losing essential oils via toluene azeotropic distillation, and measures volatile essential oil content.",
    detailedScientificRationale:
      "Standard hot air oven drying (105°C) is invalid for whole and ground spices because essential oils (terpenes, pinene, cuminaldehyde, eugenol, piperine) volatilize alongside water, resulting in falsely high moisture values and depleted active residues. The Dean & Stark azeotropic distillation method using water-immiscible toluene (b.p. 110.6°C) distills water without interference from volatile organics.\n\nSimultaneously, Volatile Essential Oil content (determined by Clevenger hydrodistillation) is the defining economic and sensory hallmark of spices. Depleted or 'spent' spices (which have undergone industrial solvent extraction of essential oils) look identical to genuine spices but possess zero volatile oil. FSSAI and ISO enforce minimum volatile oil thresholds (Cumin ≥1.5% v/w, Cardamom ≥3.5% v/w, Pepper ≥2.0% v/w).",
    detailedTestPrinciple:
      "Moisture: 25-50g ground spice is boiled in toluene. Toluene-water azeotropic vapor condenses in a reflux condenser; water (density 1.00 g/mL) separates into the bottom of a graduated Dean & Stark receiver, while toluene (density 0.867 g/mL) overflows back to the boiling flask.\n\nVolatile Oil: 20-50g spice is hydrodistilled with water in a Clevenger apparatus for 4-6 hours. Condensed volatile oil floats on top of the water column in the calibrated micro-trap and is read directly in mL.",
    chemicalEquation: "H2O(l) + Toluene(l) ⟶ [H2O + Toluene] Azeotropic Vapor (b.p. 85°C) ⟶ Condensed Phase Separation in Trap",
    formulaBreakdown: {
      formula: "Moisture % (v/w) = (V_water / W_sample) × 100   |   Volatile Oil % (v/w) = (V_oil / W_sample) × 100",
      variables: [
        { symbol: "V_water", description: "Volume of condensed water collected in Dean & Stark trap (mL)" },
        { symbol: "V_oil", description: "Volume of essential oil collected in Clevenger graduated trap (mL)" },
        { symbol: "W_sample", description: "Mass of ground spice sample taken for distillation (g)" },
        { symbol: "100", description: "Percentage conversion factor" }
      ],
      derivation: "Water density is taken as 1.00 g/mL at 20°C, so volume in mL directly equates to mass in grams. Dividing collected water volume (or essential oil volume) by dry spice sample mass gives volume-by-weight percentage.",
      factorOrigin: "Toluene chosen over xylene because its boiling point (110.6°C) is close to water boiling point, preventing thermal caramelization of spice starches/sugars. Clevenger apparatus return-tube design recycles boiled water continuously, preventing flask dry-out during 6-hour runs.",
      unitAnalysis: "% (v/w) = [ mL / g ] × 100",
      practicalExample: "40.0g Cumin seed distilled with 200 mL toluene yields 3.60 mL water in Dean & Stark trap. Moisture = (3.60 / 40.0) × 100 = 9.00% (v/w) (FSSAI limit ≤ 10.0%). 30.0g sample in Clevenger hydrodistillation yields 0.68 mL volatile oil. Volatile oil = (0.68 / 30.0) × 100 = 2.27% (v/w) (FSSAI min ≥ 1.50%)."
    },
    referenceStandard: "IS 1797:1985 / ISO 939:1980 (Moisture) / ISO 6571:2008 (Volatile Oil) / AOAC 986.21",
    reagentsAndApparatus: [
      "Dean & Stark Distillation Assembly with 500mL Flask and 5mL / 10mL Graduated Trap",
      "Clevenger Essential Oil Hydrodistillation Apparatus (Lighter-than-water trap)",
      "Pure Analytical Reagent Grade Toluene (pre-saturated with water and redistilled)",
      "Heating Mantle with Stepless Voltage Controller",
      "Boiling Chips / Pumice Stones"
    ],
    prescribedLimit: "Moisture: Ground Spices Max 10.0% to 12.0% (w/w) | Volatile Oil: Cumin Min 1.5% (v/w), Cardamom Min 3.5%, Pepper Min 2.0%",
    riskIfFailed: "Microbial spoilage, rapid aflatoxin fungal proliferation, loss of aroma and flavor potency, spent spice adulteration fraud.",
    factorsExplanation: [
      {
        question: "Spices mein moisture test ke liye hot air oven (105°C) kyun use nahi karte? Dean & Stark toluene method hi kyun mandatory hai?",
        answer: "1. Spices mein volatile aromatic essential oils hote hain jinka boiling point 100°C ke aas-paas hota hai.\n2. 105°C air oven mein dry karne par water ke sath-sath valuable essential oils bhi evaporate ho jaate hain.\n3. Isse oven test mein falsely high moisture reading aati hai (masale ka weight loss 15-18% dikhta hai jabki actual moisture sirf 8-9% hota hai).\n4. Dean & Stark method mein toluene ke sath sirf water azeotrope banata hai aur receiver mein density difference se alag ho jaata hai, jabki essential oils toluene layer mein dissolve hokar receiver mein separate water reading ko affect nahi karte."
      },
      {
        question: "Dean & Stark trap mein water aur toluene easily separate kyun ho jaate hain?",
        answer: "1. Water aur toluene completely immiscible liquids hain.\n2. Water ki density 1.00 g/mL hai jabki toluene ki density 0.867 g/mL hai.\n3. Isliye denser water hamesha graduated tube ke bottom mein settle hota hai, jabki lighter toluene upper side overflow arm se wapas boiling flask mein chala jaata hai."
      },
      {
        question: "Volatile oil test mein distillation time 4 se 6 hours itna lamba kyun rakha jaata hai?",
        answer: "1. Spices ke cell structures (oil glands aur glandular trichomes) dense aur fibrous matrix ke andar encapsulated hote hain.\n2. Steam ko plant cells ko rupture karke heavy sesquiterpenes ko release karne mein 4 se 5 hours lagte hain.\n3. Agar distillation 1-2 hours mein band kar di jaye toh 30-40% essential oil unextracted reh jaata hai aur reading falsely low aati hai."
      },
      {
        question: "Spent spice (exhausted spice) adulteration ko volatile oil test se kaise pakda jaata hai?",
        answer: "1. Commercial oleoresin extraction ke baad bacha hua spice powder (spent waste) visually bilkul genuine masale jaisa dikhta hai.\n2. Lekin industrial solvent extraction ke dauran uska 100% volatile oil nikal chuka hota hai.\n3. Jab Clevenger test mein volatile oil 0.1% ya zero aata hai, toh prove ho jaata hai ki consignment adulterated spent spice waste hai."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Azeotropic Solvent", value: "Pure Toluene (b.p. 110.6°C)", reason: "Forms binary azeotrope with water without decomposing delicate spice matrices" },
      { parameter: "Distillation Duration", value: "4 to 6 Hours", reason: "Ensures exhaustive extraction of encapsulated sesquiterpenes from glandular cells" },
      { parameter: "Moisture Ceiling (Spices)", value: "Max 10.0% to 12.0% (v/w)", reason: "Inhibits Aspergillus flavus mold growth and prevents grain heating" },
      { parameter: "Cumin Volatile Oil Minimum", value: "Min 1.5% (v/w)", reason: "Authenticity threshold protecting against blending with exhausted spent cumin" }
    ],
    procedureSteps: [
      "Grind spice sample to pass through 1.0mm sieve immediately before testing to prevent volatile loss.",
      "Weigh 40.0g sample into 500mL round-bottom flask, add 200mL anhydrous toluene and 3 boiling chips.",
      "Assemble Dean & Stark receiver and reflux condenser; fill trap receiver with toluene.",
      "Heat gently on mantle until boiling; regulate boil rate to 2 drops/sec from condenser tip.",
      "Distill for 3 hours until no further water droplets collect in receiver and toluene layer clears.",
      "Cool receiver to 20°C, tap condenser gently with rubber rod, and read water volume directly.",
      "For Volatile Oil: Weigh 30.0g spice into Clevenger flask with 250mL deionized water; boil for 5 hours; read oil volume in micro-trap."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Controlled Particle Milling",
        title: "Fresh Sample Preparation",
        action: "Mill spice sample immediately before testing through 1.0mm screen.",
        scientificMechanism: "Minimizes evaporative loss of delicate monoterpenes during grinding.",
        controlPoint: "CCP 1: Avoid excessive frictional heat during grinding.",
        reagentsInvolved: ["Laboratory Spice Grinder"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Azeotropic Solvent Charge",
        title: "Toluene Flask Assembly",
        action: "Charge 40g sample with 200mL pure toluene and anti-bumping stones into 500mL flask.",
        scientificMechanism: "Toluene establishes low-temperature azeotrope with water at 85°C vapor temperature.",
        controlPoint: "CCP 2: Pre-saturate toluene with water and redistill before use.",
        reagentsInvolved: ["Analytical Toluene", "Boiling Chips"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Reflux Condensation & Trap Separation",
        title: "Azeotropic Boiling & Phase Separation",
        action: "Boil at 2 drops/sec rate; condense azeotrope into graduated Dean & Stark trap.",
        scientificMechanism: "Gravitational phase separation occurs due to density disparity (1.00 vs 0.867 g/mL).",
        controlPoint: "CCP 3: Ensure cold water circulation through condenser jacket.",
        reagentsInvolved: ["Dean & Stark Receiver"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Meniscus Equilibration",
        title: "20°C Thermal Stabilization",
        action: "Cool receiver to 20°C; dislodge adherent droplets with Teflon rod; record meniscus.",
        scientificMechanism: "Eliminates thermal volume expansion of condensed water.",
        controlPoint: "CCP 4: Read calibrated trap at eye level.",
        reagentsInvolved: ["Teflon Scraper Rod"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Quality Certification Gate",
        title: "Moisture & Volatile Potency Gate",
        action: "Calculate Moisture % and Volatile Oil %; compare with statutory minimums.",
        scientificMechanism: "Guarantees full aromatic bioactive potency and microbiological stability.",
        controlPoint: "Quality Gate: High moisture or sub-standard volatile oil triggers consignment rejection.",
        reagentsInvolved: ["FSSAI Standard Reference Chart"]
      }
    ]
  },

  // 3. CHEMICAL TEST: Curcumin Content & Sudan Dye Screen in Spices
  {
    id: "spices-chem-1",
    category: "Pulses, Oil & Spices",
    testType: "Chemical",
    productName: "Turmeric Powder, Red Chilli Powder, Curry Powder",
    testName: "Curcumin Content (UV-Vis) & Sudan Dyes Adulteration Screen",
    shortSummary: "Quantifies bioactive curcumin in turmeric at 425 nm and screens for banned carcinogenic Sudan azo dyes (I-IV) in chilli.",
    detailedScientificRationale:
      "Curcumin (diferuloylmethane) is the principal active polyphenol of turmeric (Curcuma longa), responsible for its yellow pigment, antioxidant, and anti-inflammatory properties. FSSAI mandates minimum 2.0% - 3.0% curcumin on a dry weight basis to ensure pharmacological potency and protect against blending with spent turmeric powder.\n\nRed Chilli powder is frequently adulterated with banned synthetic oil-soluble azo dyes — Sudan I, II, III, IV and Para Red — to impart an intense red color to spent chilli waste, brick dust, or saw dust. Sudan dyes are classified as Group 3 genotoxic carcinogens; in vivo metabolic cleavage produces mutagenic aromatic amines (aniline, 1-amino-2-naphthol). FSSAI and the European Commission enforce strict zero tolerance (< 10 ppb).",
    detailedTestPrinciple:
      "Curcumin: 0.1g turmeric is exhaustively extracted with 95% ethanol under reflux. The filtered extract is diluted, and absorbance is measured at 425 nm against an ethanol blank. Concentration is calculated using specific extinction coefficient (A 1% 1cm = 1607).\n\nSudan Dyes: Chilli powder is extracted with acetonitrile:acetone (1:1). The concentrated extract is screened by TLC on Silica Gel G developed with petroleum ether:ethyl acetate (9:1) or confirmed by RP-HPLC-DAD at 478 nm and 520 nm against certified Sudan I-IV standards.",
    chemicalEquation: "Curcumin + 95% Ethanol ⟶ Solvated Diferuloylmethane (A_max at 425 nm, E 1% 1cm = 1607)",
    formulaBreakdown: {
      formula: "Curcumin % (dry basis) = [(Abs_425 × Dilution Factor) / (1607 × W_sample)] × 100 × [100 / (100 - Moisture %)]",
      variables: [
        { symbol: "Abs_425", description: "Optical density / absorbance of diluted extract at 425 nm in 10mm cuvette" },
        { symbol: "Dilution Factor", description: "Total volumetric dilution volume in mL (typically 500 mL)" },
        { symbol: "1607", description: "Specific extinction coefficient (A 1% 1cm) of pure curcumin in 95% ethanol at 425 nm" },
        { symbol: "W_sample", description: "Mass of turmeric powder sample taken (typically 0.1000g)" },
        { symbol: "Moisture %", description: "Moisture content of sample (w/w) to convert to dry weight basis" }
      ],
      derivation: "Beer-Lambert Law states A = ε × c × l. Rearranging for concentration c (g/100mL) = A / (A 1% 1cm × l). Multiplying by dilution volume and dividing by sample mass yields weight-by-weight percentage. Multiplying by 100/(100 - Moisture) normalizes to dry matter basis.",
      factorOrigin: "1607 extinction coefficient established internationally by ASTA (American Spice Trade Association Method 18.0) and ISO 5566 as universal standard for pure curcumin in 95% ethanol. 425 nm corresponds to conjugated bis-alpha,beta-unsaturated beta-diketone chromophore pi-pi* transition.",
      unitAnalysis: "% (w/w) = [ (Absorbance × mL) / (1607 × g) ] × 100 = dimensionless mass percentage",
      practicalExample: "0.1000g Turmeric (Moisture 8.0%) diluted to 500 mL gives Absorbance = 0.720 at 425 nm. Curcumin % = [(0.720 × 500) / (1607 × 0.1000)] × [100 / 92] = 2.24% × 1.087 = 2.43% (dry basis). Conforms to FSSAI minimum limit (≥ 2.0%)."
    },
    referenceStandard: "IS 3576:2010 / ASTA Method 18.0 / ISO 5566 / AOAC 2007.02 (Sudan Dyes)",
    reagentsAndApparatus: [
      "Double-Beam UV-Vis Spectrophotometer with 10mm Matched Quartz Cuvettes",
      "95% Spectrophotometric-Grade Ethanol (v/v)",
      "Silica Gel G 60 F254 TLC Plates & Developing Chamber",
      "Certified Reference Standards of Sudan I, II, III, IV and Para Red",
      "Reflux Condenser Assembly & 0.45 micron PTFE Syringe Filters"
    ],
    prescribedLimit: "Curcumin: Min 2.0% to 3.0% (w/w dry basis) | Sudan Dyes (I, II, III, IV): STRICTLY ABSENT (Zero Tolerance < 10 ppb)",
    riskIfFailed: "Severe bladder and hepatic carcinogenesis from toxic azo dye cleavage; loss of therapeutic efficacy from exhausted turmeric waste.",
    factorsExplanation: [
      {
        question: "Curcumin analysis ke liye wavelength strictly 425 nm hi kyun select ki jaati hai?",
        answer: "1. Curcuminoid molecule mein bis-alpha,beta-unsaturated beta-diketone conjugated double bond system hota hai.\n2. Ye conjugated pi-electron cloud visible blue light ko absorb karta hai aur 425 nm par distinct maximum absorption peak (lambda_max) show karta hai.\n3. 425 nm par specific extinction coefficient (1607) globally standardized hai."
      },
      {
        question: "Curcumin extraction ke dauran light exposure se sample ko bachana kyun zaroori hai?",
        answer: "1. Curcumin highly photo-sensitive polyphenol hai.\n2. Sunlight ya bright UV light mein solution mein dissolved curcumin rapid photo-degradation undergo karta hai, jisse ferulic acid, vanillin, aur brown condensation products ban jaate hain.\n3. Isliye extraction amber glassware mein ya aluminium foil se wrap karke conduct ki jaati hai."
      },
      {
        question: "Sudan dyes ko TLC par natural chilli carotenoids (capsanthin) se kaise distinguish karte hain?",
        answer: "1. Natural chilli pigments (capsanthin, capsorubin) highly polar poly-hydroxylated xanthophylls hote hain.\n2. Petroleum ether:ethyl acetate (9:1) solvent system mein natural pigments silica gel par tightly adsorb hokar lower Rf (< 0.2) par reh jaate hain.\n3. Synthetic Sudan dyes non-polar lipophilic azo compounds hain, jo solvent front ke sath upar migrate karte hain (Sudan I Rf ~0.72; Sudan IV Rf ~0.85), jisse separation sharp aur unequivocal hoti hai."
      },
      {
        question: "Sudan dyes food products mein zero tolerance (< 10 ppb) kyun hain?",
        answer: "1. Sudan dyes industrial chemical dyes hain jo solvent wax, plastic, aur shoe polish ke liye banaye gaye the, food ke liye nahi.\n2. Human liver mein cytochrome P450 enzymes azo bond ko todkar aniline aur 1-amino-2-naphthol produce karte hain jo DNA ke guanine bases ke sath covalent adducts banate hain.\n3. Ye genotoxic carcinogens hain jinki koi safe daily intake limit (ADI) nahi ho sakti, isliye international law zero tolerance enforce karta hai."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Analytical Wavelength", value: "425 nm (Quartz Cuvette)", reason: "Maximum pi-pi* electronic transition peak for conjugated diferuloylmethane" },
      { parameter: "Extinction Coefficient", value: "A 1% 1cm = 1607", reason: "Standardized molar absorptivity factor in 95% ethanol per ASTA Method 18.0" },
      { parameter: "Curcumin Statutory Minimum", value: "Min 2.0% - 3.0% (Dry basis)", reason: "FSSAI legal threshold preventing spent turmeric waste dilution" },
      { parameter: "Sudan Dye Action Limit", value: "Strictly ABSENT (< 10 ppb)", reason: "Zero tolerance for banned genotoxic and carcinogenic industrial azo dyes" }
    ],
    procedureSteps: [
      "Weigh 0.1000g finely powdered turmeric into a 100mL round-bottom flask, add 30mL 95% ethanol.",
      "Reflux gently for 2.5 hours on a heating mantle, shielded from light.",
      "Cool extract to room temperature and quantitatively filter through Whatman No. 42 into a 100mL volumetric flask; make up to volume.",
      "Pipette 2.0mL of filtrate into a 50mL volumetric flask and dilute to mark with 95% ethanol (Dilution Factor = 50 × 100 / 2 = 2500).",
      "Measure absorbance at 425 nm against 95% ethanol blank in 10mm matched quartz cuvettes.",
      "Calculate % Curcumin on dry matter basis.",
      "For Sudan Dyes: Extract 5g chilli with 25mL acetonitrile:acetone (1:1); spot on Silica TLC; develop in 9:1 Hexane:Ethyl Acetate; observe Rf matching Sudan standards."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Light-Shielded Extraction",
        title: "Ethanolic Curcuminoid Leaching",
        action: "Reflux 0.1g sample in 95% ethanol for 2.5 hours in foil-wrapped amber glassware.",
        scientificMechanism: "Exhaustively leaches hydrophobic curcuminoids into ethanolic solvent.",
        controlPoint: "CCP 1: Ensure total darkness/foil shielding to prevent photodegradation.",
        reagentsInvolved: ["95% Ethanol", "Amber Reflux Flask"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Serial Volumetric Dilution",
        title: "Spectrophotometric Concentration Adjustment",
        action: "Filter extract and dilute serially to bring absorbance within 0.2 - 0.8 range.",
        scientificMechanism: "Operates strictly within Beer-Lambert linear absorption domain.",
        controlPoint: "CCP 2: Use Grade A volumetric flasks and precision pipettes.",
        reagentsInvolved: ["Grade A Volumetric Glassware"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: 425 nm Spectrophotometry",
        title: "Peak Absorbance Measurement",
        action: "Measure absorbance at 425 nm in 10mm quartz cuvettes against ethanol blank.",
        scientificMechanism: "Quantifies conjugated chromophore electron excitation.",
        controlPoint: "CCP 3: Verify zero drift and baseline flatness before reading.",
        reagentsInvolved: ["UV-Vis Spectrophotometer", "Quartz Cuvettes"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: TLC Sudan Dye Screening",
        title: "Silica Plate Chromatographic Separation",
        action: "Spot concentrated chilli extract on Silica Gel TLC; develop in 9:1 Hexane:Ethyl Acetate.",
        scientificMechanism: "Separates polar carotenoids from non-polar synthetic Sudan azo dyes.",
        controlPoint: "CCP 4: Run certified Sudan I, II, III, IV reference spots concurrently.",
        reagentsInvolved: ["Silica Gel G Plates", "Sudan Standards"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Bioactive & Toxin Compliance Gate",
        title: "Statutory Potency & Carcinogen Gate",
        action: "Calculate Curcumin % on dry basis. Audit for complete absence of Sudan dye spots.",
        scientificMechanism: "Verifies bioactive authenticity and confirms zero carcinogenic dye adulteration.",
        controlPoint: "Quality Gate: Detection of any Sudan dye spot triggers immediate statutory seizure.",
        reagentsInvolved: ["FSSAI Food Safety Act Manual"]
      }
    ]
  },

  // 4. CHEMICAL TEST: Peroxide Value (PV) & Argemone Oil in Mustard Oil
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
      "For PV: 5.0g oil is dissolved in Acetic Acid : Chloroform solvent (3:2 v/v) and reacted with 1mL saturated Potassium Iodide (KI). Peroxides oxidize iodide ions (I-) to free Iodine (I2). The liberated iodine is titrated against standardized 0.01 N Sodium Thiosulfate (Na2S2O3) using starch indicator.\n\nFor Argemone Oil (FSSAI / Nitric Acid Test): 5mL oil is treated with 5mL concentrated Nitric Acid (HNO3) in a test tube and heated in boiling water bath for 2 minutes. Development of a distinct crimson-red color in the acid layer confirms sanguinarine alkaloid presence. Confirmed by TLC under 366 nm UV.",
    chemicalEquation: "R-OOH (Hydroperoxide) + 2 I- + 2 H+ ⟶ R-OH + I2 (Free Iodine) + H2O   |   I2 + 2 Na2S2O3 ⟶ 2 NaI + Na2S4O6",
    formulaBreakdown: {
      formula: "Peroxide Value (meq O2 / kg oil) = [(S - B) × N × 1000] / W",
      variables: [
        { symbol: "S", description: "Volume of 0.01 N Na2S2O3 titrant consumed by oil sample (mL)" },
        { symbol: "B", description: "Volume of 0.01 N Na2S2O3 consumed by reagent blank (mL)" },
        { symbol: "N", description: "Exact Normality of Sodium Thiosulfate (0.0100 N)" },
        { symbol: "W", description: "Mass of oil sample taken (typically 5.000g)" },
        { symbol: "1000", description: "Conversion factor to express result per 1000g (1 kg) of oil" }
      ],
      derivation: "Each mole of hydroperoxide (ROOH) liberates one mole of iodine (I2), which consumes 2 equivalents of thiosulfate. Milliequivalents of active oxygen = (S - B) × N. Dividing by sample mass W in grams and multiplying by 1000 scales result to 1 kilogram of oil.",
      factorOrigin: "1000 factor standardizes reporting units to meq per kilogram. Reaction carried out in 3:2 acetic acid:chloroform to completely dissolve non-polar triglycerides while maintaining sufficient dielectric polarity for rapid ionic iodide oxidation.",
      unitAnalysis: "meq O2 / kg = [ mL × (meq / mL) × 1000 g/kg ] / g = meq / kg",
      practicalExample: "W = 5.010g refined soybean oil; S = 1.85 mL 0.0102 N Na2S2O3; B = 0.05 mL. PV = [ (1.85 - 0.05) × 0.0102 × 1000 ] / 5.010 = [ 1.80 × 0.0102 × 1000 ] / 5.010 = 3.66 meq O2/kg. Well within the FSSAI threshold (≤ 10.0 meq/kg)."
    },
    referenceStandard: "FSSAI Manual 04 (Oils & Fats) / IS 548 (Part 1 & 2) / ISO 3960 / AOAC 965.33",
    reagentsAndApparatus: [
      "Glacial Acetic Acid : Chloroform Mixture (3:2 v/v) or Acetic Acid:Isooctane",
      "Saturated Potassium Iodide (KI) Solution (freshly prepared, iodine-free)",
      "0.01 N Standardized Sodium Thiosulfate (Na2S2O3) Solution",
      "1% Soluble Starch Indicator Solution",
      "Concentrated Nitric Acid (HNO3, sp gr 1.42)",
      "Silica Gel G TLC Plates and 366 nm UV Inspection Lamp"
    ],
    prescribedLimit: "Peroxide Value: Refined Oils Max 10.0 meq O2/kg | Cold-Pressed Max 15.0 meq O2/kg | Argemone Oil: ABSENT (Zero Tolerance)",
    riskIfFailed: "Epidemic Dropsy (cardiac arrest, glaucoma, bilateral blindness due to Sanguinarine toxin), mutagenic lipid peroxides, severe liver toxicity.",
    factorsExplanation: [
      {
        question: "Peroxide Value test mein Potassium Iodide (KI) addition ke baad flask ko dark mein kyun rakhte hain?",
        answer: "1. Potassium Iodide (KI) light-sensitive reagent hai.\n2. Normal daylight ya direct laboratory lighting mein atmospheric oxygen iodide ions (I-) ko spontaneously molecular iodine (I2) mein oxidize kar deti hai (photo-oxidation).\n3. Isse blank aur sample dono mein false titration reading aati hai, isliye 5 minute reaction period strictly darkness mein perform kiya jaata hai."
      },
      {
        question: "Peroxide Value test mein starch indicator titration ke bilkul end mein (pale yellow par) hi kyun add karte hain?",
        answer: "1. Agar starch indicator shuruat mein (high iodine concentration par) daal diya jaye, toh starch-iodine complex irreversible ban jaata hai.\n2. High iodine concentration starch ke helical amylose chains ke andar tightly trap ho jaati hai aur thiosulfate titration ke dauran easily release nahi hoti.\n3. Isliye jab solution titration se straw-yellow ho jaye, tabhi starch add kiya jaata hai taaki sharp endpoint mile."
      },
      {
        question: "Mustard oil mein Argemone oil adulteration itna khatarnak kyun mana jaata hai?",
        answer: "1. Argemone mexicana (satyanashi) ke beej mustard seeds jaise dikhte hain aur unka tel sasta hota hai.\n2. Argemone oil mein sanguinarine aur dihydrosanguinarine toxic alkaloids hote hain jo human body ke cellular Na+/K+-ATPase pump ko block kar dete hain.\n3. Isse blood vessels ki permeability drastically badh jaati hai, jisse body mein massive water retention (edema), cardiac failure, aur optic nerve damage se permanent blindness ho jaati hai (Epidemic Dropsy)."
      },
      {
        question: "Argemone oil ke liye Nitric Acid test ke baad TLC confirmation kyun zaroori hai?",
        answer: "1. Nitric acid screening test mein purana ya highly oxidized mustard oil kabhi-kabhi false faint reddish tint de sakta hai.\n2. Regulatory legal prosecution ke liye statutory confirmation TLC par hoti hai, jahan sanguinarine alkaloid 366 nm UV light ke neeche brilliant yellow-orange fluorescent spot show karta hai."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Reaction Environment", value: "Complete Darkness (5 min)", reason: "Prevents photochemical auto-oxidation of potassium iodide by ambient room light" },
      { parameter: "Solvent Mixture", value: "Acetic Acid:Chloroform (3:2 v/v)", reason: "Dissolves lipid triglycerides while providing ionic dissociation medium" },
      { parameter: "PV Statutory Ceiling (Refined)", value: "Max 10.0 meq O2/kg", reason: "FSSAI legal threshold for primary oxidative freshness in refined oils" },
      { parameter: "Argemone Limit", value: "Strictly NEGATIVE / ZERO", reason: "Prevents fatal Epidemic Dropsy public health disasters" }
    ],
    procedureSteps: [
      "Weigh 5.000g oil into 250mL glass-stoppered conical flask, add 30mL Acetic Acid:Chloroform (3:2 v/v).",
      "Add 0.5mL freshly prepared saturated KI solution; stopper and swirl for exactly 1 minute.",
      "Place flask in complete darkness (cabinet) for exactly 5 minutes.",
      "Add 30mL deionized water; titrate liberated iodine with 0.01 N standardized Na2S2O3 until pale straw-yellow.",
      "Add 1mL 1% starch indicator (turns dark blue) and continue titration dropwise until blue color completely disappears.",
      "Perform simultaneous reagent blank and calculate Peroxide Value.",
      "For Argemone: Pipette 5mL oil + 5mL conc. HNO3 into test tube, shake, heat in boiling water bath 2 min; observe acid layer for crimson-red color; confirm by TLC under 366 nm UV."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Non-Polar Solvent Dissolution",
        title: "Triglyceride Solubilization",
        action: "Dissolve 5.0g oil in 30mL Acetic:Chloroform; add 0.5mL saturated KI.",
        scientificMechanism: "Solubilizes lipid matrix and introduces stoichiometric iodide ions.",
        controlPoint: "CCP 1: Saturated KI must be colorless (free of pre-formed iodine).",
        reagentsInvolved: ["Acetic:Chloroform", "Saturated KI"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Dark Iodide Oxidation",
        title: "Stoichiometric Iodine Liberation",
        action: "Incubate in complete darkness for exactly 5 minutes with periodic swirling.",
        scientificMechanism: "Lipid hydroperoxides quantitatively oxidize I- to free I2.",
        controlPoint: "CCP 2: Maintain strict 5-minute timing in total darkness.",
        reagentsInvolved: ["Dark Reaction Cabinet"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Iodometric Thiosulfate Titration",
        title: "Endpoint Redox Titration",
        action: "Add 30mL water; titrate with 0.01N Na2S2O3; add starch near endpoint; titrate to clear.",
        scientificMechanism: "Thiosulfate quantitatively reduces free iodine back to iodide.",
        controlPoint: "CCP 3: Discharge of blue starch-iodine complex must persist 30 seconds.",
        reagentsInvolved: ["0.01N Na2S2O3", "1% Starch Indicator"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Nitric Acid Argemone Screen",
        title: "Sanguinarine Nitration Reaction",
        action: "Heat 5mL oil + 5mL conc. HNO3 in boiling water bath for 2 minutes.",
        scientificMechanism: "Sanguinarine alkaloid forms crimson-red nitrated chromophore.",
        controlPoint: "CCP 4: Handle concentrated HNO3 inside certified fume exhaust hood.",
        reagentsInvolved: ["Conc. Nitric Acid"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Rancidity & Toxicity Gate",
        title: "Statutory Release & Zero-Tolerance Gate",
        action: "Verify PV ≤ 10 meq/kg and Argemone Oil ABSENT. Spot TLC if acid layer is pink.",
        scientificMechanism: "Guarantees oxidative safety and absolute protection from Epidemic Dropsy.",
        controlPoint: "Quality Gate: Positive Argemone test triggers immediate police report & seizure.",
        reagentsInvolved: ["FSSAI Regulatory Protocol"]
      }
    ]
  },

  // 5. CHEMICAL TEST: Iodine Value (IV) by Wijs Method
  {
    id: "oils-chem-2",
    category: "Pulses, Oil & Spices",
    testType: "Chemical",
    productName: "Mustard Oil, Groundnut Oil, Soybean Oil, Sunflower Oil, Palm Oil",
    testName: "Iodine Value (IV) Determination by Wijs Method",
    shortSummary: "Quantifies the degree of unsaturation and total double bonds in edible vegetable oils using Wijs halogen addition.",
    detailedScientificRationale:
      "Iodine Value (IV) is the mass of halogen (calculated as iodine) absorbed by 100 grams of fat or oil. It provides a direct stoichiometric measure of olefinic carbon-carbon double bonds (-CH=CH-) present in fatty acid chains. Saturated fats (like Palm Stearin, Coconut oil) have low IV (10-55), whereas monounsaturated oils (Mustard, Groundnut) have intermediate IV (85-112), and polyunsaturated oils (Soybean, Sunflower) possess high IV (120-141).\n\nBecause every botanical oil displays a genetically conserved fatty acid spectrum, IV is the primary screening parameter for detecting economic adulteration — such as blending cheap low-IV Palm Olein into expensive Mustard or Groundnut oil.",
    detailedTestPrinciple:
      "Accurately weighed oil dissolved in carbon tetrachloride or cyclohexane:glacial acetic acid (1:1) is reacted with an excess of Wijs solution (Iodine Monochloride, ICl, in glacial acetic acid). Halogen electrophilically adds across double bonds. Unreacted ICl is quenched with potassium iodide (KI), liberating free iodine, which is titrated with standardized 0.1 N Sodium Thiosulfate using starch indicator.",
    chemicalEquation: "-CH=CH- + ICl ⟶ -CHI-CHCl-   |   ICl (excess) + KI ⟶ I2 + KCl   |   I2 + 2 Na2S2O3 ⟶ 2 NaI + Na2S4O6",
    formulaBreakdown: {
      formula: "Iodine Value (g I2 / 100g oil) = [(B - S) × N × 12.69] / W",
      variables: [
        { symbol: "B", description: "Volume of 0.1 N Na2S2O3 consumed by blank determination (mL)" },
        { symbol: "S", description: "Volume of 0.1 N Na2S2O3 consumed by oil sample (mL)" },
        { symbol: "N", description: "Exact Normality of standardized Sodium Thiosulfate solution (0.1000 N)" },
        { symbol: "12.69", description: "Milliequivalent weight of iodine (126.90 g/mol / 1000) × 100 to convert to g/100g" },
        { symbol: "W", description: "Mass of oil sample taken in grams (0.20g - 0.25g)" }
      ],
      derivation: "Difference (B - S) represents halogen consumed by double bonds in mL of thiosulfate. Multiplying by normality N gives milliequivalents of halogen. Multiplying by milliequivalent weight of iodine (0.1269 g/meq) gives grams of I2 absorbed. Dividing by sample mass W and multiplying by 100 expresses result per 100g of oil: (0.1269 × 100 = 12.69).",
      factorOrigin: "12.69 is derived from atomic weight of iodine (126.90) divided by 10. Sample weight (0.20-0.25g) is calculated to ensure 50-60% excess Wijs reagent remains unreacted, maintaining first-order addition kinetics.",
      unitAnalysis: "g I2 / 100g = [ mL × (meq/mL) × (0.1269 g/meq × 100) ] / g = g I2 / 100g oil",
      practicalExample: "W = 0.2250g Mustard oil; B = 46.20 mL; S = 27.60 mL 0.1002 N Na2S2O3. Titre difference = 18.60 mL. IV = [ 18.60 × 0.1002 × 12.69 ] / 0.2250 = 23.652 / 0.2250 = 105.1 g I2/100g. Conforms to FSSAI Mustard Oil standard (98 - 112)."
    },
    referenceStandard: "IS 548 (Part 1):1964 / ISO 3961:2018 / AOAC 993.20 / AOCS Cd 1d-92",
    reagentsAndApparatus: [
      "Wijs Iodine Monochloride Reagent (in Glacial Acetic Acid, 0.2 N)",
      "0.1 N Standardized Sodium Thiosulfate (Na2S2O3) Solution",
      "10% Potassium Iodide (KI) Solution (freshly prepared)",
      "Cyclohexane : Glacial Acetic Acid (1:1 v/v) Solvent",
      "500mL Iodine Flasks with Ground Glass Stoppers and Liquid Seals",
      "1% Starch Indicator Solution"
    ],
    prescribedLimit: "Mustard Oil: 98 - 112 | Groundnut Oil: 85 - 99 | Soybean Oil: 120 - 141 | Sunflower Oil: 118 - 141 | Palm Oil: 50 - 55",
    riskIfFailed: "Severe economic adulteration with cheap palm oil or animal tallow, altered nutritional fatty acid profile, and non-compliance with statutory standards.",
    factorsExplanation: [
      {
        question: "Wijs test mein reagent ka excess 50% se 60% hona kyun zaroori hai?",
        answer: "1. Halogen addition across olefinic double bonds reversible equilibrium reaction hoti hai.\n2. Agar Wijs reagent ka excess kam (< 50%) ho, toh reaction rate slow ho jaata hai aur double bonds ka complete halogenation nahi ho pata.\n3. Isse Iodine Value falsely low aati hai, isliye sample weight ko expected IV ke according adjust karke 50-60% excess ensure kiya jaata hai."
      },
      {
        question: "Iodine flask mein ground glass stopper par liquid seal kyun lagayi jaati hai?",
        answer: "1. Iodine monochloride (ICl) aur free iodine highly volatile substances hain.\n2. Reaction ke 30 minute dark incubation ke dauran iodine vapors flask ke neck se leak ho sakti hain.\n3. Glass stopper ke well mein 5 mL 10% KI solution daal kar liquid seal banayi jaati hai jo kisi bhi escaping vapor ko trap kar leti hai."
      },
      {
        question: "Mustard oil ka Iodine Value (98-112) soybean oil (120-141) se kam kyun hota hai?",
        answer: "1. Mustard oil mein predominantly monounsaturated erucic acid (C22:1, ~45%) aur oleic acid (C18:1, ~15%) hote hain jinme per fatty acid chain sirf ek double bond hota hai.\n2. Soybean oil mein polyunsaturated linoleic acid (C18:2, ~53%) aur linolenic acid (C18:3, ~8%) hote hain jinme per molecule 2 se 3 double bonds hote hain.\n3. Double bonds ki sankhya zyada hone ke karan soybean oil substantially zyada iodine absorb karta hai."
      },
      {
        question: "Mustard oil mein Palm Olein ki milawat ko Iodine Value se kaise pakda jaata hai?",
        answer: "1. Pure mustard oil ka statutory IV range 98 se 112 hai.\n2. Palm olein ka IV sirf 50 se 55 hota hai kyunki usme high saturated palmitic acid (C16:0) hota hai.\n3. Agar mustard oil mein 20-30% palm oil mila diya jaye, toh blended oil ka IV girkar 80-88 ho jaata hai, jo gate inspection par instantly adulteration prove kar deta hai."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Wijs Halogen Reagent", value: "0.2 N ICl in Glacial Acetic Acid", reason: "Provides reactive electrophilic iodine monochloride for double bond addition" },
      { parameter: "Reagent Excess Requirement", value: "50% to 60% unreacted excess", reason: "Ensures complete quantitative addition across all unsaturated double bonds" },
      { parameter: "Mustard Oil IV Range", value: "98 to 112 g I2 / 100g", reason: "FSSAI statutory fingerprint reflecting natural erucic/oleic acid architecture" },
      { parameter: "Liquid Gutter Seal", value: "5 mL 10% KI on stopper neck", reason: "Traps volatile halogen vapors preventing escape from reaction flask" }
    ],
    procedureSteps: [
      "Weigh 0.20g to 0.25g clear moisture-free oil into clean dry 500mL iodine flask.",
      "Add 20mL cyclohexane:glacial acetic acid (1:1) to dissolve oil completely.",
      "Pipette exactly 25.0mL Wijs solution into flask using safety bulb; stopper and swirl.",
      "Moisten stopper neck with 5mL 10% KI solution to form a liquid vapor seal.",
      "Store flask in complete darkness at 20°C - 25°C for exactly 30 minutes.",
      "Add 20mL 10% KI solution and 100mL cold deionized water to rinse stopper and walls.",
      "Titrate liberated iodine with 0.1 N standardized Na2S2O3 until pale yellow; add 1mL starch indicator; titrate until blue discharges.",
      "Run concurrent blank (without oil) and calculate Iodine Value."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Precision Micro-Weighing",
        title: "Sample Weight Optimization",
        action: "Weigh 0.20 - 0.25g oil into 500mL iodine flask; dissolve in 20mL cyclohexane:acetic acid.",
        scientificMechanism: "Ensures optimal sample-to-reagent ratio maintaining 50-60% excess halogen.",
        controlPoint: "CCP 1: Weigh to ±0.0001g on calibrated analytical balance.",
        reagentsInvolved: ["Cyclohexane:Acetic Acid (1:1)"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Wijs Reagent Addition & Liquid Seal",
        title: "Halogen Dispensing & Vapor Containment",
        action: "Dispense 25.0mL Wijs reagent; seal stopper well with 5mL 10% KI liquid seal.",
        scientificMechanism: "Introduces stoichiometric iodine monochloride while preventing vapor loss.",
        controlPoint: "CCP 2: Dispense Wijs reagent using volumetric dispenser inside fume hood.",
        reagentsInvolved: ["Wijs Reagent", "10% KI Solution"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Dark Electrophilic Halogenation",
        title: "Double Bond Addition Reaction",
        action: "Incubate in darkness for exactly 30 minutes at 20-25°C.",
        scientificMechanism: "Electrophilic addition of ICl across carbon-carbon double bonds.",
        controlPoint: "CCP 3: Maintain strict 30-minute timing in dark cabinet.",
        reagentsInvolved: ["Dark Incubator"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Iodide Quenching & Titration",
        title: "Back-Titration of Residual Halogen",
        action: "Add 20mL KI and 100mL water; titrate unreacted iodine with 0.1N Na2S2O3 using starch.",
        scientificMechanism: "Quenches excess ICl to I2; thiosulfate stoichiometrically reduces free iodine.",
        controlPoint: "CCP 4: Titrate until blue color disappearance is permanent for 30 seconds.",
        reagentsInvolved: ["0.1N Na2S2O3", "1% Starch Indicator"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Unsaturation & Purity Verification",
        title: "Iodine Value Compliance Gate",
        action: "Calculate IV; cross-check against statutory commodity ranges.",
        scientificMechanism: "Confirms authentic fatty acid unsaturation and detects foreign fat adulteration.",
        controlPoint: "Quality Gate: Deviation outside statutory range triggers GC-FAME fatty acid profile.",
        reagentsInvolved: ["Statutory Compliance Standards"]
      }
    ]
  },

  // 6. CHEMICAL TEST: Saponification Value (SV) in Edible Oils
  {
    id: "oils-chem-3",
    category: "Pulses, Oil & Spices",
    testType: "Chemical",
    productName: "Mustard Oil, Groundnut Oil, Soybean Oil, Coconut Oil, Vanaspati",
    testName: "Saponification Value (SV) Determination",
    shortSummary: "Determines the mean molecular weight of fatty acids in triglycerides and screens for non-saponifiable mineral oil adulteration.",
    detailedScientificRationale:
      "Saponification Value (SV) is defined as the number of milligrams of Potassium Hydroxide (KOH) required to completely saponify 1.0 gram of fat or oil. Triglycerides are tri-esters of glycerol with three fatty acids. During saponification, ester bonds are hydrolyzed by alcoholic alkali to yield glycerol and potassium soaps.\n\nSV is inversely proportional to the average molecular weight (or carbon chain length) of the fatty acids present in the oil. Short-chain fatty acids (e.g., in Coconut oil) possess more ester linkages per gram, giving a high SV (250-264 mg KOH/g). Long-chain fatty acids (e.g., erucic acid C22:1 in Mustard oil) possess fewer ester linkages per gram, yielding a low SV (169-177 mg KOH/g). Mineral oils and liquid paraffin have zero ester bonds (SV = 0); their adulteration sharply drops the SV.",
    detailedTestPrinciple:
      "2.0g oil is refluxed with 25.0mL standardized 0.5 N ethanolic KOH on a boiling water bath for 60 minutes. The excess unreacted alkali is back-titrated with standardized 0.5 N Hydrochloric Acid (HCl) using phenolphthalein indicator. A blank determination is run under identical conditions without oil.",
    chemicalEquation: "C3H5(OOCR)3 (Triglyceride) + 3 KOH ⟶ C3H5(OH)3 (Glycerol) + 3 RCOOK (Potassium Soap)   |   KOH (excess) + HCl ⟶ KCl + H2O",
    formulaBreakdown: {
      formula: "Saponification Value (mg KOH / g oil) = [(B - S) × N × 56.11] / W",
      variables: [
        { symbol: "B", description: "Volume of 0.5 N HCl consumed by blank determination (mL)" },
        { symbol: "S", description: "Volume of 0.5 N HCl consumed by saponified oil sample (mL)" },
        { symbol: "N", description: "Exact Normality of standardized Hydrochloric Acid (0.5000 N)" },
        { symbol: "56.11", description: "Molecular weight of Potassium Hydroxide (KOH in g/mol)" },
        { symbol: "W", description: "Mass of oil sample taken in grams (typically 2.000g)" }
      ],
      derivation: "Difference (B - S) in mL represents KOH consumed in hydrolyzing triglyceride ester bonds. Multiplying by normality N yields milliequivalents of KOH consumed. Multiplying by 56.11 (equivalent weight of KOH in mg/meq) gives total milligrams of KOH consumed. Dividing by oil mass W gives SV in mg KOH per gram of oil.",
      factorOrigin: "56.11 is the precise molecular weight of KOH. Ethanolic KOH (rather than aqueous KOH) is used because ethanol is miscible with both hydrophobic oil triglycerides and hydrophilic alkali, creating a single homogeneous reaction phase.",
      unitAnalysis: "mg KOH / g = [ mL × (meq/mL) × (56.11 mg/meq) ] / g = mg KOH / g oil",
      practicalExample: "W = 2.050g Mustard oil; B = 50.40 mL; S = 37.80 mL 0.5020 N HCl. Titre difference = 12.60 mL. SV = [ 12.60 × 0.5020 × 56.11 ] / 2.050 = 354.91 / 2.050 = 173.1 mg KOH/g. Perfectly conforms to FSSAI statutory range for Mustard Oil (169 - 177)."
    },
    referenceStandard: "IS 548 (Part 1):1964 / ISO 3657:2020 / AOAC 920.160 / AOCS Cd 3-25",
    reagentsAndApparatus: [
      "0.5 N Standardized Ethanolic Potassium Hydroxide (KOH) Solution",
      "0.5 N Standardized Hydrochloric Acid (HCl) Solution",
      "Phenolphthalein Indicator Solution (1% in 95% ethanol)",
      "250mL Erlenmeyer Flasks with 24/40 Ground Glass Joint Reflux Air/Water Condensers",
      "Thermostatic Boiling Water Bath"
    ],
    prescribedLimit: "Mustard Oil: 169 - 177 | Groundnut Oil: 188 - 196 | Soybean Oil: 189 - 195 | Coconut Oil: 250 - 264 mg KOH/g",
    riskIfFailed: "Severe blending with non-saponifiable mineral lubricants or diesel fuel, gross misbranding, and non-compliance with legal standards.",
    factorsExplanation: [
      {
        question: "Saponification reaction ke liye aqueous KOH ke bajaye ethanolic KOH kyun use karte hain?",
        answer: "1. Triglyceride fats completely hydrophobic (water-insoluble) hote hain, jabki aqueous KOH hydrophilic hota hai.\n2. Paani mein oil immiscible hone ke karan alkali aur ester bonds ka physical contact nahi ho pata, jisse hydrolysis extremely slow hoti hai.\n3. Ethanol ek amphiphilic solvent hai jo oil aur KOH dono ko mutually dissolve karke homogeneous single phase bana deta hai, jisse rapid aur quantitative saponification hoti hai."
      },
      {
        question: "Reflux duration strictly 60 minutes kyun rakhi jaati hai?",
        answer: "1. Triglyceride ke teeno ester bonds sequentially hydrolyze hote hain (Triglyceride ⟶ Diglyceride ⟶ Monoglyceride ⟶ Glycerol).\n2. Bulky long-chain fatty acids (jaise erucic acid C22:1) steric hindrance show karte hain.\n3. Complete stoichiometric saponification achieve karne ke liye minimum 60 minutes boiling water bath par reflux zaroori hai."
      },
      {
        question: "Mustard oil ka Saponification Value (169-177) itna low kyun hota hai jabki Coconut oil ka (250-264) itna high hota hai?",
        answer: "1. Saponification value fatty acid chain length ke inversely proportional hoti hai.\n2. Mustard oil mein C22:1 erucic acid dominate karta hai jiska molecular weight high (338.5 g/mol) hai, isliye 1 gram oil mein kam ester molecules hote hain jo kam KOH consume karte hain.\n3. Coconut oil mein short-chain lauric acid (C12:0, 200.3 g/mol) dominate karta hai, isliye 1 gram mein zyada ester linkages hote hain jo zyada KOH consume karte hain."
      },
      {
        question: "Mineral oil adulteration hone par Saponification Value par kya effect padta hai?",
        answer: "1. Mineral oil (petroleum paraffin) pure hydrocarbons hote hain jinme zero ester (-COO-) bonds hote hain.\n2. Hydrocarbons KOH ke sath react nahi karte (SV = 0).\n3. Agar edible oil mein 20% mineral oil mila diya jaye, toh SV 20% drop ho kar legal limit se bahar nikal jaati hai."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Alkali Reagent", value: "0.5 N Ethanolic KOH", reason: "Homogenizes hydrophobic triglycerides and hydrophilic alkali into single phase" },
      { parameter: "Reflux Time & Temp", value: "60 min at 100°C (Water Bath)", reason: "Ensures complete quantitative hydrolysis of sterically hindered ester linkages" },
      { parameter: "Mustard Oil SV Limit", value: "169 to 177 mg KOH/g", reason: "FSSAI legal fingerprint reflecting natural C22:1 erucic acid chain length" },
      { parameter: "Indicator Endpoint", value: "Phenolphthalein (Pink to Clear)", reason: "Accurately identifies neutral point of strong base (KOH) / strong acid (HCl) system" }
    ],
    procedureSteps: [
      "Weigh accurately 2.000g of clear filtered oil into a 250mL ground-glass Erlenmeyer flask.",
      "Pipette exactly 25.0mL of 0.5 N ethanolic KOH into the flask using a volumetric pipette.",
      "Connect flask to a vertical reflux condenser and place in a boiling water bath.",
      "Boil gently for exactly 60 minutes, swirling periodically to ensure complete saponification.",
      "Disconnect condenser and cool flask slightly under running tap water.",
      "Add 1mL phenolphthalein indicator solution (solution turns intense pink).",
      "Titrate hot mixture immediately against standardized 0.5 N HCl until pink color just disappears.",
      "Run concurrent blank determination (25.0mL ethanolic KOH without oil) and calculate Saponification Value."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Homogeneous Sample Charge",
        title: "Ethanolic Alkali Addition",
        action: "Weigh 2.0g oil into 250mL flask; pipette 25.0mL 0.5N ethanolic KOH.",
        scientificMechanism: "Establishes single-phase mutual solution of triglycerides and potassium hydroxide.",
        controlPoint: "CCP 1: Pipette ethanolic KOH accurately using certified bulb pipette.",
        reagentsInvolved: ["0.5N Ethanolic KOH", "Analytical Balance"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Boiling Water Bath Reflux",
        title: "Alkaline Ester Hydrolysis",
        action: "Reflux for 60 minutes on boiling water bath with periodic swirling.",
        scientificMechanism: "Triglycerides undergo nucleophilic acyl substitution converting to glycerol and soaps.",
        controlPoint: "CCP 2: Ensure condenser water flows continuously to prevent alcohol evaporation.",
        reagentsInvolved: ["Reflux Condenser", "Water Bath"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Thermal Equilibration & Indicator",
        title: "Phenolphthalein Addition",
        action: "Cool flask slightly; add 1mL 1% phenolphthalein indicator.",
        scientificMechanism: "Phenolphthalein deprotonates into bright pink dianion in alkaline medium.",
        controlPoint: "CCP 3: Titrate while warm to prevent potassium soap gelatinization.",
        reagentsInvolved: ["1% Phenolphthalein"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Acidic Back-Titration",
        title: "Residual Alkali Neutralization",
        action: "Titrate residual KOH with standardized 0.5N HCl until pink discharges.",
        scientificMechanism: "Hydrochloric acid stoichiometrically neutralizes unconsumed potassium hydroxide.",
        controlPoint: "CCP 4: Record titre at sharp pink-to-colorless transition.",
        reagentsInvolved: ["0.5N HCl Titrant"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Chain-Length & Purity Audit",
        title: "Saponification Value Gate",
        action: "Calculate SV; verify against FSSAI statutory commodity standard.",
        scientificMechanism: "Verifies mean fatty acid chain length and screens out non-saponifiable mineral oils.",
        controlPoint: "Quality Gate: SV below minimum threshold mandates immediate Holde's mineral oil test.",
        reagentsInvolved: ["FSSAI Specification Table"]
      }
    ]
  },

  // 7. CHEMICAL TEST: Free Fatty Acids (FFA) & Acid Value
  {
    id: "oils-chem-4",
    category: "Pulses, Oil & Spices",
    testType: "Chemical",
    productName: "Edible Vegetable Oils, Mustard Oil, Groundnut Oil, Soybean Oil, Sunflower Oil",
    testName: "Free Fatty Acids (FFA % as Oleic) & Acid Value Determination",
    shortSummary: "Measures hydrolytic rancidity and unesterified free fatty acids resulting from moisture and lipase breakdown.",
    detailedScientificRationale:
      "Acid Value is defined as the number of milligrams of Potassium Hydroxide (KOH) required to neutralize the free fatty acids present in 1.0 gram of fat or oil. Free Fatty Acids (FFA) are expressed as a percentage of oleic acid (or erucic acid in mustard oil, lauric acid in coconut oil).\n\nIn fresh oilseeds, fatty acids are bonded as neutral triglycerides. Exposure to seed moisture, mechanical bruising, and fungal/endogenous lipase enzymes hydrolyzes ester bonds, releasing free fatty acids. High FFA causes smoke point depression during frying, foaming, unpleasant acrid/soapy off-flavors, and accelerates primary auto-oxidation. FSSAI mandates strict FFA limits (Refined Oils Max 0.25%, Cold Pressed Max 1.50%).",
    detailedTestPrinciple:
      "5.0g to 10.0g homogenized oil is dissolved in 50mL neutral ethyl alcohol:diethyl ether solvent mixture (pre-neutralized to phenolphthalein end point). Free carboxylic acid groups (-COOH) are directly titrated against standardized 0.1 N Potassium Hydroxide (KOH) to a faint pink persistent endpoint.",
    chemicalEquation: "R-COOH (Free Fatty Acid) + KOH ⟶ R-COOK (Potassium Soap) + H2O",
    formulaBreakdown: {
      formula: "Acid Value = (V × N × 56.11) / W   |   FFA % (as Oleic) = (V × N × 28.2) / W",
      variables: [
        { symbol: "V", description: "Volume of standardized 0.1 N KOH consumed in titration (mL)" },
        { symbol: "N", description: "Exact Normality of Potassium Hydroxide titrant (0.1000 N)" },
        { symbol: "56.11", description: "Molecular weight of Potassium Hydroxide (KOH in g/mol)" },
        { symbol: "28.2", description: "Equivalent weight factor of Oleic Acid (MW 282.46 g/mol / 10)" },
        { symbol: "W", description: "Mass of edible oil sample taken in grams (5.0g - 10.0g)" }
      ],
      derivation: "Acid Value represents mg KOH consumed per gram oil: V × N gives meq of KOH; multiplying by 56.11 gives mg KOH. Dividing by W yields Acid Value. For FFA % as oleic acid (MW 282.46): mass of oleic acid = V × N × 0.28246g. Percentage = (mass / W) × 100 = (V × N × 28.246) / W. Hence, FFA % ≈ Acid Value × 0.503.",
      factorOrigin: "28.2 factor originates from the molecular weight of oleic acid (282.46) divided by 10. Pre-neutralization of the alcohol-ether solvent is critical to cancel out any background acidity in commercial solvents.",
      unitAnalysis: "Acid Value = mg KOH / g   |   FFA % = [ mL × (meq/mL) × (0.282 g/meq) × 100 ] / g = % (w/w)",
      practicalExample: "W = 10.00g Kachhi Ghani Mustard oil; V = 2.10 mL 0.1010 N KOH. Acid Value = (2.10 × 0.1010 × 56.11) / 10.00 = 1.19 mg KOH/g. FFA % (as Oleic) = 1.19 × 0.503 = 0.60%. Well within the FSSAI threshold for cold-pressed oils (≤ 1.50%)."
    },
    referenceStandard: "IS 548 (Part 1):1964 / ISO 660:2020 / AOAC 940.28 / AOCS Ca 5a-40",
    reagentsAndApparatus: [
      "0.1 N Standardized Potassium Hydroxide (KOH) or Sodium Hydroxide (NaOH)",
      "Neutral Ethyl Alcohol : Diethyl Ether (1:1 v/v) Solvent Mixture",
      "Phenolphthalein Indicator Solution (1% in 95% ethanol)",
      "250mL Conical Flasks and 10mL Precision Micro-Burette (0.02mL divisions)"
    ],
    prescribedLimit: "Refined Vegetable Oils: Max 0.25% FFA (Acid Value Max 0.50) | Cold-Pressed / Kachhi Ghani Oils: Max 1.50% FFA",
    riskIfFailed: "Severe hydrolytic rancidity, acrid off-flavor, low smoke point causing toxic acrolein emissions during cooking, and rapid oxidative deterioration.",
    factorsExplanation: [
      {
        question: "Oil sample add karne se pehle alcohol-ether solvent ko neutralize karna kyun zaroori hai?",
        answer: "1. Commercial ethyl alcohol aur diethyl ether solvents atmospheric CO2 absorb kar lete hain jisse carbonic acid banta hai, ya oxidation se trace acetic acid ban jata hai.\n2. Agar solvent ko pehle se neutralize na kiya jaye, toh solvent ki apni acidity oil ki FFA mein jud kar falsely high reading degi.\n3. Isliye solvent mixture mein indicator daal kar 0.1 N KOH se faint pink aane tak pre-neutralize kiya jaata hai."
      },
      {
        question: "Refined oil aur Cold-pressed (Kachhi Ghani) oil ke FFA limits mein itna farq kyun hai?",
        answer: "1. Refined oils industrial alkali neutralization (caustic refining) aur deodorization se guzarte hain, jahan 100% free fatty acids soapstock bankar remove ho jaate hain (Limit ≤ 0.25%).\n2. Cold-pressed (Kachhi Ghani) oils natural mechanical pressing se bante hain bina kisi chemical refining ke.\n3. Seed moisture aur natural enzyme activity ke karan cold-pressed oils mein minor natural FFA banta hai, isliye statutory tolerance 1.50% tak allow ki gayi hai."
      },
      {
        question: "FFA % ko standard taur par Oleic Acid ke terms mein hi kyun express karte hain?",
        answer: "1. Most edible vegetable oils (Groundnut, Mustard, Soybean, Olive) mein 18-carbon unsaturated fatty acids dominate karte hain.\n2. Oleic acid (C18:1, MW 282.46) universal standard surrogate reference molecule consider kiya jaata hai.\n3. Coconut oil mein C12 lauric acid (factor 20.0) aur Palm oil mein C16 palmitic acid (factor 25.6) use hota hai."
      },
      {
        question: "Titration ka pink endpoint 15 seconds tak persistent hona kyun zaroori hai?",
        answer: "1. Titration ke dauran atmospheric carbon dioxide (CO2) flask ke open neck se absorb hokar carbonic acid banati hai.\n2. Slow CO2 absorption pink color ko discharge kar sakti hai.\n3. Sharp true chemical endpoint wo hota hai jo swirling ke baad kam se kam 15 seconds tak faint pink persist kare."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Solvent Matrix", value: "Neutral Alcohol:Ether (1:1 v/v)", reason: "Dissolves oil completely while allowing proton transfer to basic titrant" },
      { parameter: "Pre-Neutralization", value: "Mandatory to faint pink", reason: "Eliminates blank solvent acidity from atmospheric CO2 and trace acetic acid" },
      { parameter: "Refined Oil FFA Limit", value: "Max 0.25% (as Oleic)", reason: "FSSAI statutory ceiling verifying complete alkali refining efficiency" },
      { parameter: "Cold-Pressed FFA Limit", value: "Max 1.50% (as Oleic)", reason: "Statutory threshold for natural virgin unrefined edible oils" }
    ],
    procedureSteps: [
      "Prepare solvent mixture by mixing equal volumes of 95% ethanol and diethyl ether (1:1 v/v).",
      "Add 1mL phenolphthalein to 50mL solvent; titrate with 0.1 N KOH until faint persistent pink appears (pre-neutralization).",
      "Weigh accurately 5.0g to 10.0g of oil into the neutralized solvent flask; swirl until completely dissolved.",
      "Titrate immediately with standardized 0.1 N KOH from micro-burette with continuous swirling.",
      "Stop titration at the appearance of the first faint pink color that persists for at least 15 seconds.",
      "Record consumed volume V (mL) and calculate Acid Value and FFA % (as Oleic)."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Solvent Pre-Neutralization",
        title: "Blank Solvent Acidity Elimination",
        action: "Take 50mL 1:1 Alcohol:Ether, add 1mL phenolphthalein, neutralize with 0.1N KOH to faint pink.",
        scientificMechanism: "Cancels out background hydronium ions from dissolved CO2 and solvent traces.",
        controlPoint: "CCP 1: Solvent must show faint pink hue before oil addition.",
        reagentsInvolved: ["Alcohol:Ether (1:1)", "0.1N KOH"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Oil Dissolution",
        title: "Triglyceride Solubilization",
        action: "Weigh 10.0g oil into neutralized solvent; swirl until completely transparent.",
        scientificMechanism: "Disperses hydrophobic lipid carboxylic acids into active solvated phase.",
        controlPoint: "CCP 2: Ensure complete dissolution without phase separation.",
        reagentsInvolved: ["Edible Oil Sample"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Micro-Burette Titration",
        title: "Direct Carboxylic Neutralization",
        action: "Titrate dropwise with standardized 0.1N KOH with continuous vigorous agitation.",
        scientificMechanism: "Hydroxide ions neutralize unesterified fatty acid carboxyl groups.",
        controlPoint: "CCP 3: Use precision micro-burette calibrated in 0.02mL increments.",
        reagentsInvolved: ["0.1N Standardized KOH"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Endpoint Discrimination",
        title: "15-Second Persistence Audit",
        action: "Identify faint pink endpoint persisting for minimum 15 seconds.",
        scientificMechanism: "Signals complete neutralization of fatty acid protons.",
        controlPoint: "CCP 4: Distinguish true endpoint from atmospheric CO2 color fading.",
        reagentsInvolved: ["Phenolphthalein Indicator"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Hydrolytic Quality Decision",
        title: "Statutory FFA Quality Gate",
        action: "Calculate FFA % and Acid Value; compare against statutory limits.",
        scientificMechanism: "Guarantees low hydrolytic rancidity and adequate frying smoke point.",
        controlPoint: "Quality Gate: FFA > 0.25% (Refined) or > 1.50% (Cold-Pressed) fails consignment.",
        reagentsInvolved: ["FSSAI Specification Index"]
      }
    ]
  },

  // 8. CHEMICAL TEST: Mineral Oil / Liquid Paraffin (Holde's Test)
  {
    id: "oils-adulteration-1",
    category: "Pulses, Oil & Spices",
    testType: "Chemical",
    productName: "Mustard Oil, Groundnut Oil, Soybean Oil, Sesame Oil, Refined Oils",
    testName: "Mineral Oil & Liquid Paraffin Adulteration Detection (Holde's Test)",
    shortSummary: "Detects fraudulent adulteration with non-saponifiable petroleum mineral oils and liquid paraffin via saponification turbidity.",
    detailedScientificRationale:
      "Mineral oils (liquid paraffin, white oils, technical petroleum lube cuts) are cheap, non-biodegradable petroleum hydrocarbons completely devoid of nutritional value. They are fraudulently blended into edible vegetable oils to illegally inflate profit margins.\n\nIngestion of mineral oil severely inhibits the intestinal absorption of essential fat-soluble vitamins (A, D, E, K), leading to systemic vitamin deficiencies. Furthermore, technical mineral oils contain toxic Polycyclic Aromatic Hydrocarbons (PAHs) which are potent Group 1 human carcinogens. FSSAI enforces a strict zero tolerance policy — edible oils must be 100% free from any trace of mineral oil.",
    detailedTestPrinciple:
      "Genuine vegetable oils consist of triglycerides that saponify completely into water-soluble potassium soaps (RCOOK) and glycerol when refluxed with ethanolic KOH. Mineral oils consist entirely of saturated and aromatic hydrocarbons without ester linkages, which cannot be saponified. When the saponified reaction mixture is diluted with deionized water, insoluble petroleum hydrocarbon droplets instantly precipitate out of solution, producing a distinct milk-white opalescence or heavy turbidity.",
    chemicalEquation: "Vegetable Oil + KOH ⟶ Soluble Soaps (Clear Solution)   |   Mineral Oil (Hydrocarbons) + H2O ⟶ Insoluble Colloidal Turbidity (Milk-White)",
    formulaBreakdown: {
      formula: "Visual Turbidity Threshold: Clear = NEGATIVE (Compliant)   |   Milk-White Opalescence = POSITIVE (Adulterated)",
      variables: [
        { symbol: "Clear Solution", description: "Complete saponification into water-soluble potassium soaps (100% Vegetable Oil)" },
        { symbol: "Turbid / Opalescent", description: "Presence of insoluble unreacted petroleum hydrocarbons (> 0.5% detection limit)" }
      ],
      derivation: "Qualitative solubility discrimination based on Gibbs free energy of mixing: potassium carboxylate soaps are highly amphiphilic and form clear aqueous micellar solutions. Non-polar paraffin hydrocarbons have extreme positive free energy of hydration, causing immediate phase separation as light-scattering colloidal droplets.",
      factorOrigin: "Holde's test is the official statutory method specified in IS 548 (Part 2) and FSSAI Manual 04. Detection sensitivity is 0.5% by visual turbidity, and can be extended down to 0.05% using TLC on Silica Gel G with petroleum ether (60-80°C).",
      unitAnalysis: "Qualitative Compliance (ABSENT / PRESENT)",
      practicalExample: "1.0 mL cold-pressed mustard oil saponified with 25 mL 0.5 N ethanolic KOH. 25 mL distilled water added in 5 mL increments. Solution remains crystal clear with zero haze. Result: Mineral Oil NEGATIVE. Fully compliant with FSSAI regulations."
    },
    referenceStandard: "IS 548 (Part 2):1976 / AOAC 945.102 / FSSAI Lab Manual 04 (Oils & Fats)",
    reagentsAndApparatus: [
      "0.5 N Standardized Ethanolic Potassium Hydroxide (KOH)",
      "Boiling Water Bath & Reflux Condenser Assembly",
      "Freshly Boiled and Cooled Deionized Water",
      "Clean 50mL Test Tubes / Erlenmeyer Flasks",
      "Silica Gel G 60 TLC Plates (for confirmatory testing)"
    ],
    prescribedLimit: "STRICTLY ABSENT / ZERO TOLERANCE (Holde's test must be negative)",
    riskIfFailed: "Severe malabsorption of fat-soluble vitamins (A, D, E, K), chronic gastrointestinal distress, and ingestion of carcinogenic Polycyclic Aromatic Hydrocarbons (PAHs).",
    factorsExplanation: [
      {
        question: "Holde's test mein water add karne par mineral oil milky turbidity kyun create karta hai?",
        answer: "1. Pure vegetable oil alcoholic KOH ke sath react karke potassium soaps banata hai jo paani mein completely soluble hote hain.\n2. Mineral oil petroleum hydrocarbons se bana hota hai jisme koi ester bond nahi hota, isliye wo KOH ke sath react nahi karta.\n3. Jab paani daala jaata hai, toh alcohol dilute ho jata hai aur hydrophobic hydrocarbon droplets aqueous phase se alag hokar light scatter karte hain, jisse milk-white turbidity banti hai."
      },
      {
        question: "Holde's test ki limit of detection (LOD) kya hai aur isse zyada sensitive test kaun sa hai?",
        answer: "1. Holde's visual turbidity test ki detection limit approx 0.5% (5000 ppm) mineral oil hai.\n2. Agar milawat 0.1% ya 0.05% ho, toh solution mein faint opalescence visually miss ho sakti hai.\n3. Aise cases mein Silica Gel G TLC test kiya jaata hai (petroleum ether 60-80°C solvent system), jisme mineral oil solvent front (Rf = 0.95-1.0) par migrate karke 50% H2SO4 charring ya UV light ke under 0.05% tak detect ho jaata hai."
      },
      {
        question: "Edible oil mein mineral oil milana criminal offence kyun mana jaata hai?",
        answer: "1. Mineral oil human digestive tract mein absorb nahi hota aur fat-soluble vitamins (A, D, E, K) ko dissolve karke body se bahar nikal deta hai, jisse severe vitamin deficiency hoti hai.\n2. Industrial lubricants mein carcinogenic PAHs (Benzo[a]pyrene) hote hain jo directly stomach aur liver cancer cause karte hain.\n3. Isliye FSS Act ke tehat ye non-bailable food adulteration offence hai."
      },
      {
        question: "Test tube mein water ko dropwise add karna kyun zaroori hai?",
        answer: "1. Saponified soap solution mein ekdum se zyada paani daalne par soap curdling ho sakti hai jo false positive turbidity lag sakti hai.\n2. Dropwise swirling ke sath paani add karne par soap solution transparent rehta hai aur sirf genuine hydrocarbon droplets hi insoluble haze form karte hain."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Reagent Solution", value: "0.5 N Ethanolic KOH", reason: "Saponifies genuine triglycerides into soluble soaps while leaving mineral oil unreacted" },
      { parameter: "Reflux Time", value: "15 to 20 minutes", reason: "Ensures complete 100% conversion of natural fatty acid esters into soap molecules" },
      { parameter: "Detection Criterion", value: "Absence of turbidity on water dilution", reason: "Physical solubility discriminator between soluble soaps and insoluble hydrocarbons" },
      { parameter: "Statutory Mandate", value: "Strictly ABSENT / Zero Tolerance", reason: "Protects consumers from toxic petroleum carcinogens and vitamin depletion" }
    ],
    procedureSteps: [
      "Pipette 1.0mL (approx. 22 drops) of oil into a clean dry 100mL Erlenmeyer flask.",
      "Add 25.0mL of 0.5 N ethanolic KOH solution.",
      "Attach an air/water condenser and boil gently on a boiling water bath for 15-20 minutes until complete saponification is achieved.",
      "While the solution is still warm, add deionized water in 1mL increments with continuous swirling.",
      "Observe optical clarity after adding up to 25mL water.",
      "If the solution remains crystal clear: Mineral Oil is NEGATIVE.",
      "If distinct turbidity, cloudiness, or milk-white opalescence develops: Mineral Oil is POSITIVE (Adulterated).",
      "Confirm positive samples on Silica Gel TLC plates developed with petroleum ether (60-80°C)."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Ethanolic Saponification",
        title: "Triglyceride Hydrolysis",
        action: "Boil 1.0mL oil with 25mL 0.5N ethanolic KOH for 15-20 minutes.",
        scientificMechanism: "Hydrolyzes all natural ester linkages into water-soluble carboxylate soaps.",
        controlPoint: "CCP 1: Saponification must be complete before water addition.",
        reagentsInvolved: ["0.5N Ethanolic KOH"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Stepwise Aqueous Dilution",
        title: "Hydrophobic Hydrocarbon Precipitation",
        action: "Add distilled water dropwise with swirling up to 25mL volume.",
        scientificMechanism: "Dilutes ethanol dielectric constant, forcing non-polar hydrocarbons out of solution.",
        controlPoint: "CCP 2: Add water gradually while swirling to avoid thermal shock.",
        reagentsInvolved: ["Deionized Water"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Optical Turbidity Inspection",
        title: "Opalescence Discrimination",
        action: "Inspect tube against black background under illuminated bench light.",
        scientificMechanism: "Insoluble colloidal hydrocarbon droplets scatter incident light (Tyndall effect).",
        controlPoint: "CCP 3: Verify against pure reference vegetable oil blank.",
        reagentsInvolved: ["Inspection Light"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: TLC Confirmatory Migration",
        title: "Silica Plate Hydrocarbon Separation",
        action: "Spot sample on Silica Gel G; develop in petroleum ether (60-80°C); visualize with 50% H2SO4.",
        scientificMechanism: "Non-polar mineral oil migrates with solvent front (Rf = 0.95-1.0) and chars black.",
        controlPoint: "CCP 4: Run authentic liquid paraffin reference standard.",
        reagentsInvolved: ["Silica Gel G", "Petroleum Ether"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Zero-Tolerance Compliance Gate",
        title: "Mineral Oil Seizure Gate",
        action: "Verify complete absence of turbidity and zero TLC spot.",
        scientificMechanism: "Guarantees 100% pure botanical oil free from petroleum contamination.",
        controlPoint: "Quality Gate: Positive turbidity mandates immediate batch recall and legal embargo.",
        reagentsInvolved: ["FSSAI Regulatory Enforcement Index"]
      }
    ]
  },

  // 9. CHEMICAL TEST: Metanil Yellow in Pulses & Turmeric
  {
    id: "spices-adulteration-1",
    category: "Pulses, Oil & Spices",
    testType: "Chemical",
    productName: "Arhar Dal, Toor Dal, Chana Dal, Turmeric Powder",
    testName: "Metanil Yellow Non-Permitted Azo Dye Detection",
    shortSummary: "Detects fraudulent polishing of pulses and adulteration of turmeric with carcinogenic synthetic industrial azo dye Metanil Yellow.",
    detailedScientificRationale:
      "Metanil Yellow (Sodium 4-(4-anilinophenylazo)benzenesulfonate) is an industrial acid azo dye widely manufactured for dyeing wool, nylon, paper, and leather. Fraudulent grain millers illegally use Metanil Yellow to polish inferior, insect-damaged, or aged dull Arhar (Toor) Dal and Chana Dal to give them a brilliant canary-yellow marketable sheen. It is also used to color spent turmeric powder.\n\nMetanil Yellow is strictly non-permitted in food. Chronic ingestion causes severe testicular lesions (spermatogenic arrest, tubular atrophy, infertility), gastric mucosal degeneration, hepatotoxicity, and tumor formation. FSSAI and international food safety laws enforce a strict zero tolerance policy.",
    detailedTestPrinciple:
      "Natural curcumin and pulse carotenoid pigments do not produce a permanent magenta-red color upon strong acidification. Metanil Yellow contains a mono-azo (-N=N-) chromophore. In the presence of concentrated Hydrochloric Acid (HCl), the azo nitrogen protonates instantly, forming a resonance-stabilized quinonoid azonium cation displaying an intense magenta-pink/purple coloration. When diluted with distilled water, the magenta color persists or shifts to violet, whereas natural curcumin reverts instantly to yellow.",
    chemicalEquation: "Metanil Yellow (Yellow Azo Base) + H+ (Conc. HCl) ⟶ Resonance Quinonoid Azonium Cation (Intense Magenta-Pink)",
    formulaBreakdown: {
      formula: "Visual Acid Chromophore Reaction: No Persistent Pink = NEGATIVE (Compliant)   |   Persistent Magenta-Pink = POSITIVE (Metanil Yellow)",
      variables: [
        { symbol: "No Persistent Pink", description: "Absence of synthetic azo dye; natural carotenoid/curcumin pigments present" },
        { symbol: "Persistent Magenta-Pink", description: "Presence of protonated quinonoid Metanil Yellow dye (> 1 ppm detection limit)" }
      ],
      derivation: "Qualitative chemical discrimination based on pH-dependent chromophoric protonation: natural diferuloylmethane shifts to reddish-brown in acid but immediately discharges to yellow upon water dilution. In contrast, the quinonoid cation of Metanil Yellow is chemically stable and resists hydrolytic deprotonation under moderate water dilution.",
      factorOrigin: "Standardized chemical screening test specified in FSSAI Lab Manual 03 (Cereals & Pulses), Manual 08 (Food Additives), and Manual 10 (Spices). Limit of detection is 1 to 2 ppm by chemical tube test, and 0.1 ppm by paper chromatography.",
      unitAnalysis: "Qualitative Compliance (ABSENT / PRESENT)",
      practicalExample: "5.0g polished Toor Dal shaken with 10 mL warm water. 2 mL concentrated HCl added. Liquid turns bright yellow with no pink tint; dilution with water yields clear yellow extract. Result: Metanil Yellow ABSENT. Complies with FSSAI regulations."
    },
    referenceStandard: "IS 4333 / IS 1797 / FSSAI Lab Manual 03, 08 & 10",
    reagentsAndApparatus: [
      "Concentrated Hydrochloric Acid (HCl, sp. gr. 1.18, Analytical Reagent Grade)",
      "Warm Deionized Water (approx. 50°C)",
      "Clean 50mL Borosilicate Test Tubes and Rack",
      "Whatman No. 1 Chromatography Paper",
      "Developing Solvent: n-Butanol : Ethanol : Water (2:1:1 v/v)",
      "Certified Metanil Yellow Reference Standard"
    ],
    prescribedLimit: "STRICTLY ABSENT / ZERO TOLERANCE (No synthetic colors permitted in pulses or pure spices)",
    riskIfFailed: "Severe testicular degeneration and male infertility, chronic gastric mucosal damage, hepatotoxicity, and carcinogenesis.",
    factorsExplanation: [
      {
        question: "Metanil Yellow conc. HCl daalne par magenta-pink kyun turn ho jaata hai?",
        answer: "1. Metanil Yellow ek synthetic azo dye (-N=N-) hai.\n2. Jab concentrated hydrochloric acid daala jaata hai, toh strong hydronium ions (H+) azo bond ke nitrogen atom ko protonate kar dete hain.\n3. Ye protonation molecule ko resonance-stabilized quinonoid azonium cation structure mein convert kar deti hai, jo visible light ke green spectrum ko absorb karke intense magenta-pink/red color reflect karta hai."
      },
      {
        question: "Natural haldi (curcumin) aur Metanil Yellow ke color reaction mein kya difference hota hai?",
        answer: "1. Haldi mein acid daalne par bhi color temporarily reddish-brown hota hai.\n2. Lekin jaise hi usme paani (water) daala jaata hai, acid dilute ho jata hai aur haldi instantly wapas bright yellow color mein aa jaati hai.\n3. Metanil Yellow ka magenta-pink color paani daalne ke baad bhi persist karta hai aur bilkul fade nahi hota."
      },
      {
        question: "Dals (Arhar/Toor dal) par Metanil Yellow polish kyun kiya jaata hai?",
        answer: "1. Purani, insect-damaged, ya off-color dal visually dull aur faded dikhti hai jise consumer khareedna pasand nahi karte.\n2. Fraudulent millers dal ko oil aur Metanil Yellow dye ke water solution ke sath polish drum mein ghumate hain.\n3. Isse dal par bright attractive yellow shine aa jaati hai jisse wo premium fresh crop jaisi lagti hai."
      },
      {
        question: "Metanil Yellow consumption se human reproductive health par kya asar padta hai?",
        answer: "1. Toxicological studies prove karti hain ki Metanil Yellow blood-testis barrier ko cross karta hai.\n2. Ye testicular seminiferous tubules ko severely damage karta hai, jisse spermatogenesis process permanently arrest ho jaati hai aur mature sperm count drop ho jata hai.\n3. Isliye FSSAI ne pulses aur ground spices mein iske use par complete statutory ban lagaya hai."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Diagnostic Reagent", value: "Concentrated HCl (sp. gr. 1.18)", reason: "Protonates azo chromophore forming resonance-stabilized magenta quinonoid cation" },
      { parameter: "Water Dilution Test", value: "Persistence of magenta-pink color", reason: "Differentiates stable synthetic azo dye from reversibly hydrolyzable natural curcumin" },
      { parameter: "Chromatographic System", value: "Whatman No. 1 / Butanol:Ethanol:Water", reason: "Confirmatory separation against certified reference standard with matching Rf" },
      { parameter: "Statutory Requirement", value: "Strictly ABSENT / Zero Tolerance", reason: "Prevents industrial azo dye adulteration and male reproductive toxicity" }
    ],
    procedureSteps: [
      "For Pulses (Dals): Place 5.0g Arhar / Toor Dal in a test tube, add 10mL warm deionized water (50°C), and shake vigorously for 2 minutes to extract surface color polish.",
      "Decant 5mL of the yellow aqueous extract into a second clean test tube.",
      "For Turmeric: Dissolve 1.0g turmeric powder in 5mL warm water or 80% alcohol.",
      "Add 2 to 3 mL of concentrated HCl slowly down the side of the test tube.",
      "Observe initial color change: development of an immediate intense magenta-pink/red indicates positive azo dye reaction.",
      "Add 10mL deionized water and mix: if magenta-pink color persists, Metanil Yellow is POSITIVE.",
      "If the color instantly reverts to normal yellow: sample contains only natural pigments (NEGATIVE).",
      "For Confirmation: Spot extract on Whatman No. 1 paper and run alongside certified Metanil Yellow standard in Butanol:Ethanol:Water (2:1:1)."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Warm Surface Extraction",
        title: "Aqueous Polish Leaching",
        action: "Swirl 5.0g dal with 10mL warm water (50°C) for 2 minutes; decant extract.",
        scientificMechanism: "Selectively leaches water-soluble synthetic dye coatings from grain surface.",
        controlPoint: "CCP 1: Use warm water to maximize dissolution of surface polish.",
        reagentsInvolved: ["Warm Deionized Water"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Acidic Protonation Reaction",
        title: "Concentrated HCl Addition",
        action: "Add 2-3mL concentrated HCl down test tube wall; observe color change.",
        scientificMechanism: "Protonates azo chromophore into deep-magenta quinonoid cation.",
        controlPoint: "CCP 2: Handle concentrated HCl with protective gloves in fume hood.",
        reagentsInvolved: ["Concentrated HCl"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Aqueous Dilution Discrimination",
        title: "Curcumin Discharging Check",
        action: "Add 10mL water to test tube; check if magenta color persists or reverts to yellow.",
        scientificMechanism: "Reversible protonation discharges natural curcumin; synthetic azo cation persists.",
        controlPoint: "CCP 3: Mix thoroughly before recording color persistence.",
        reagentsInvolved: ["Deionized Water"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Paper Chromatography Confirmation",
        title: "Rf Value Standard Matching",
        action: "Spot extract on Whatman No. 1; develop in Butanol:Ethanol:Water (2:1:1); verify matching Rf.",
        scientificMechanism: "Separates distinct synthetic dye fraction based on partition chromatography.",
        controlPoint: "CCP 4: Run certified Metanil Yellow standard spot concurrently.",
        reagentsInvolved: ["Whatman No. 1 Paper", "Metanil Yellow Standard"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Non-Permitted Dye Gate",
        title: "Statutory Adulteration Seizure Gate",
        action: "Confirm complete absence of Metanil Yellow dye; verify zero tolerance compliance.",
        scientificMechanism: "Guarantees freedom from toxic industrial dyes and protects reproductive health.",
        controlPoint: "Quality Gate: Positive Metanil Yellow triggers immediate seizure and legal prosecution.",
        reagentsInvolved: ["FSSAI Legal Protocol"]
      }
    ]
  },

  // 10. CHEMICAL TEST: Khesari Dal (BOAA / ODAP Neurotoxin)
  {
    id: "pulses-toxin-1",
    category: "Pulses, Oil & Spices",
    testType: "Chemical",
    productName: "Chana Dal, Toor Dal, Milled Pulses, Besan (Gram Flour)",
    testName: "Khesari Dal (BOAA / ODAP Neurotoxin) Adulteration Detection",
    shortSummary: "Detects fraudulent blending of neurotoxic Khesari dal (Lathyrus sativus) containing paralytic ODAP toxin into Chana and Toor dal.",
    detailedScientificRationale:
      "Khesari dal (Lathyrus sativus / Grass pea / Batla) is a hardy, drought-resistant legume that is commercially cheap but contains a lethal non-protein neurotoxic amino acid: beta-N-oxalyl-alpha,beta-diaminopropionic acid (BOAA), also known as beta-ODAP (oxalyl-diaminopropionic acid).\n\nODAP acts as a potent structural analogue of L-glutamate, over-activating AMPA and kainate receptors in motor neurons of the lumbar spinal cord, leading to excitotoxic mitochondrial failure and irreversible degeneration of upper motor neurons. Chronic dietary consumption (exceeding 20-30% of diet for 2 to 3 months) causes Neurolathyrism — a crippling, permanent spastic paralysis of the lower limbs, characterized by spastic gait, scissoring leg movements, and lifelong wheelchair confinement. Under Food Safety and Standards (Prohibition and Restrictions on Sales) Regulations, Khesari dal is strictly banned from sale and blending.",
    detailedTestPrinciple:
      "Physical: Khesari dal seeds exhibit an unmistakable morphological signature — wedge-shaped/trapezoidal grains with flat slanted faces, distinct grayish-yellow color with mottled marbling, easily distinguished from round/plump Chana and Toor dal.\n\nChemical: 5g suspected pulse is hydrolyzed with 10 N KOH at 100°C for 30 minutes, cleaving ODAP into oxalyl and diaminopropionic acid. The neutralized hydrolysate reacts with ninhydrin or ferric chloride (FeCl3), developing an intense purple-pink/violet coordination complex. Confirmed by paper chromatography or HPLC at 420 nm against authentic ODAP standard.",
    chemicalEquation: "beta-ODAP (BOAA) + 10 N KOH (100°C) ⟶ Alkaline Hydrolysate ⟶ Ninhydrin / FeCl3 ⟶ Intense Purple Complex (lambda_max 570 nm)",
    formulaBreakdown: {
      formula: "Morphological & Chemical Gate: Wedge-Shaped Grains = ADULTERATED   |   FeCl3 / Ninhydrin Color = POSITIVE (Khesari Dal Present)",
      variables: [
        { symbol: "Uniform Round Morphology", description: "Absence of wedge-shaped trapezoidal grains (Genuine Chana / Toor Dal)" },
        { symbol: "Wedge Grains / Pink Color", description: "Presence of Lathyrus sativus / ODAP neurotoxin (Adulteration detected)" }
      ],
      derivation: "Qualitative multi-phase screening: physical macro-inspection utilizes geometric seed asymmetry. Chemical testing exploits the unique oxalyl-amino crosslinkage of ODAP which hydrolyzes under strong caustic digestion to yield complexing diamine residues.",
      factorOrigin: "Official statutory testing protocol prescribed under FSSAI Lab Manual 03 (Cereals & Pulses) and Indian Council of Medical Research (ICMR) neurological guidelines. Limit of detection is 0.5% by physical sorting and 0.1% by chemical hydrolysis.",
      unitAnalysis: "Qualitative Compliance (STRICTLY ABSENT / PRESENT)",
      practicalExample: "500.0g Chana Dal inspected on white illuminated tray: zero wedge-shaped grains identified. Chemical alkaline hydrolysis and ninhydrin reaction: completely negative. Result: Khesari Dal ABSENT. Fully compliant with statutory food safety regulations."
    },
    referenceStandard: "IS 4333 / FSSAI Lab Manual 03 (Cereals & Pulses) / ICMR Lathyrism Protocols",
    reagentsAndApparatus: [
      "10 N Potassium Hydroxide (KOH) Solution",
      "5 N Hydrochloric Acid (HCl) Solution",
      "1% Ferric Chloride (FeCl3) Solution",
      "0.1% Ninhydrin Solution in Acetone",
      "Boiling Water Bath and Sealed Digestion Tubes",
      "Whatman No. 1 Chromatography Paper & Phenol:Water (4:1 v/v) Solvent",
      "Certified Reference Standard of beta-ODAP (BOAA)"
    ],
    prescribedLimit: "STRICTLY PROHIBITED / ZERO TOLERANCE (Must be 100% ABSENT under FSS Regulations)",
    riskIfFailed: "Neurolathyrism — irreversible spastic paraplegia of lower limbs, total loss of walking ability, and permanent motor neuron destruction.",
    factorsExplanation: [
      {
        question: "Khesari dal (Lathyrus sativus) ko physically Chana dal aur Toor dal se kaise pehchante hain?",
        answer: "1. Chana dal plump, round, aur hemispherical hoti hai jiske edges rounded hote hain.\n2. Toor dal concave-convex circular disc shape hoti hai.\n3. Khesari dal bilkul different wedge-shaped (trapezoidal / slant-faced) hoti hai jisme flat angled cuts hote hain aur grayish-yellow surface par marble-like patches hote hain."
      },
      {
        question: "BOAA / ODAP neurotoxin human body mein paralysis (Neurolathyrism) kaise cause karta hai?",
        answer: "1. beta-ODAP human neurotransmitter glutamate ka structural analogue hai.\n2. Ye spinal cord ke lower lumbar region mein glutamate AMPA receptors par excessively bind hokar unhe continuously over-stimulate karta hai (excitotoxicity).\n3. Isse cells ke andar massive calcium influx hota hai, jisse motor neurons destroy ho jaate hain aur legs ki voluntary muscle control permanently khatam ho jaati hai (spastic paraplegia)."
      },
      {
        question: "Chemical hydrolysis test mein 10 N KOH kyun use kiya jaata hai?",
        answer: "1. ODAP molecule (beta-N-oxalyl-alpha,beta-diaminopropionic acid) mein oxalyl group peptide-like amide linkage se bonded hota hai.\n2. Normal room temperature par ye linkage easily break nahi hoti.\n3. 10 N strong alkali aur 100°C water bath par 30 minutes heat karne par amide linkage cleave hokar free diaminopropionic acid chhodti hai, jo ninhydrin aur ferric chloride ke sath intense chromophoric reaction deti hai."
      },
      {
        question: "Khesari dal ka Indian market mein sale aur blending legally banned kyun hai?",
        answer: "1. Historical droughts mein jab Khesari dal poor population dwara staple diet ki tarah khai gayi, toh hazaron log permanent cripple ho gaye.\n2. Food Safety and Standards (Prohibition and Restrictions on Sales) Regulations 2011 ke Clause 2.4.4 ke tehat Khesari dal ka kisi bhi roop mein bechna ya dusri dalon/besan mein milana criminal offense hai."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Seed Morphology", value: "Wedge-shaped / Trapezoidal slant", reason: "Macroscopic visual signature distinguishing Khesari from round Chana and Toor" },
      { parameter: "Alkaline Hydrolysis", value: "10 N KOH at 100°C (30 min)", reason: "Cleaves oxalyl-amide linkage releasing complexable diaminopropionic acid" },
      { parameter: "Chromatographic Confirmation", value: "Whatman No. 1 / Phenol:Water (4:1)", reason: "Resolves authentic ODAP spot at Rf ~0.38 against reference standard" },
      { parameter: "Statutory Prohibition", value: "Strictly PROHIBITED (Zero)", reason: "Prevents incurable Neurolathyrism and irreversible motor paralysis" }
    ],
    procedureSteps: [
      "Physical Macro-Inspection: Spread 500.0g Chana Dal or Toor Dal on white inspection tray and inspect under 5x magnifier.",
      "Check for presence of characteristic wedge-shaped, trapezoidal grains with slanted flat faces and grayish tint.",
      "Chemical Test: Grind 10g pulse into coarse flour; place 5.0g in a 100mL beaker, add 10mL water and 2mL 10 N KOH.",
      "Heat beaker on a boiling water bath for 30 minutes to achieve alkaline hydrolysis.",
      "Cool, neutralize with 5 N HCl to pH 6-7, and filter through Whatman No. 1.",
      "Take 2mL filtrate, add 1mL 1% ferric chloride (FeCl3) or 1mL 0.1% ninhydrin and warm for 5 minutes.",
      "Development of an intense pink-violet or purple color confirms presence of ODAP/BOAA neurotoxin (Khesari Dal POSITIVE).",
      "Confirm on chromatography paper developed in phenol:water (4:1) with authentic ODAP standard spot."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: Macroscopic Geometry Audit",
        title: "Seed Shape Discrimination",
        action: "Inspect 500g sample on illuminated tray for trapezoidal wedge-shaped grains.",
        scientificMechanism: "Leverages distinct geometric morphological differences of Lathyrus sativus.",
        controlPoint: "CCP 1: Inspect entire sample under 5x illuminated magnifier.",
        reagentsInvolved: ["White Sorting Tray"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: Caustic Thermal Digestion",
        title: "Alkaline Amide Hydrolysis",
        action: "Heat 5g ground pulse with 10mL water and 2mL 10N KOH at 100°C for 30 min.",
        scientificMechanism: "Alkaline cleavage of oxalyl-diaminopropionic acid linkage.",
        controlPoint: "CCP 2: Maintain boiling water bath temperature strictly at 100°C.",
        reagentsInvolved: ["10N KOH Solution"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Neutralization & Filtration",
        title: "Acidic pH Adjustment",
        action: "Cool digest, neutralize with 5N HCl to pH 6.5, and filter through Whatman No. 1.",
        scientificMechanism: "Prepares clear aqueous hydrolysate for chromogenic complexation.",
        controlPoint: "CCP 3: Verify pH with calibrated pH test paper.",
        reagentsInvolved: ["5N HCl Titrant"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Chromogenic Complexation",
        title: "Ninhydrin / FeCl3 Color Reaction",
        action: "Treat filtrate with 1mL FeCl3 or ninhydrin; warm 5 min; observe for pink-purple complex.",
        scientificMechanism: "Diaminopropionic acid forms intense colored chelate complex.",
        controlPoint: "CCP 4: Run pure Chana Dal negative control in parallel.",
        reagentsInvolved: ["1% FeCl3", "0.1% Ninhydrin"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Neurolathyrism Zero Gate",
        title: "Statutory Prohibition Compliance Gate",
        action: "Verify zero wedge grains and completely negative chemical reaction.",
        scientificMechanism: "Guarantees complete freedom from paralytic ODAP neurotoxin.",
        controlPoint: "Quality Gate: Detection of Khesari dal triggers mandatory criminal filing & lot destruction.",
        reagentsInvolved: ["FSSAI Prohibition Regulations"]
      }
    ]
  },

  // 11. CHEMICAL TEST: Aflatoxins in Pulses & Spices
  {
    id: "pulses-mycotoxin-1",
    category: "Pulses, Oil & Spices",
    testType: "Chemical",
    productName: "Chana, Toor, Moong, Groundnut, Red Chilli, Turmeric, Black Pepper",
    testName: "Aflatoxins (B1, B2, G1, G2) Determination by Immunoaffinity Column & HPLC-FLD",
    shortSummary: "Determines highly carcinogenic Aspergillus mycotoxins (B1, B2, G1, G2) in pulses, groundnuts, and spices via clean-up and HPLC fluorescence.",
    detailedScientificRationale:
      "Aflatoxins are highly toxic, mutagenic, and carcinogenic difuranocoumarin secondary metabolites produced by Aspergillus flavus and Aspergillus parasiticus molds during warm, humid storage of pulses, oilseeds, and spices. Aflatoxin B1 is classified as a Group 1 human carcinogen by the International Agency for Research on Cancer (IARC).\n\nIn vivo, hepatic cytochrome P450 enzymes (CYP1A2, CYP3A4) bioactivate Aflatoxin B1 into an extremely reactive exo-8,9-epoxide, which forms covalent transversion adducts with the N7 guanine position of DNA (specifically codon 249 of the p53 tumor suppressor gene). This induces hepatocellular carcinoma (liver cancer), acute aflatoxicosis, and immune suppression. FSSAI mandates strict statutory ceilings (Total Aflatoxins Max 15.0 ppb in pulses, Max 10.0-15.0 ppb in spices).",
    detailedTestPrinciple:
      "25.0g finely pulverized sample is extracted with methanol:water (70:30 v/v) in the presence of NaCl. The extract is diluted with PBS buffer (pH 7.4) and passed through an Aflatest Immunoaffinity Column packed with monoclonal antibodies specific to aflatoxins B1, B2, G1, and G2. Toxins bind to antibodies while matrix interferences are washed away. Purified aflatoxins are eluted with HPLC-grade methanol.\n\nSeparation is performed on an RP-C18 column. Post-column photochemical derivatization (PHRED) or electrochemical Kobra cell bromination converts non-fluorescent B1 and G1 into highly fluorescent hemiacetals/bromoderivatives, detected by Fluorescence Detector (FLD: Ex 365 nm, Em 440 nm for B1/B2; Em 455 nm for G1/G2).",
    chemicalEquation: "Aflatoxin B1 (Ex 365 nm) ⟶ Photochemical UV Derivatization (PHRED) ⟶ Fluorescent Hydrated Derivative (Em 440 nm)",
    formulaBreakdown: {
      formula: "Aflatoxin Conc. (µg/kg or ppb) = [(A_sample × C_std × V_elute) / (A_std × W_eff)]",
      variables: [
        { symbol: "A_sample", description: "Peak area of individual aflatoxin in HPLC chromatogram" },
        { symbol: "C_std", description: "Concentration of certified aflatoxin calibration standard (ng/mL)" },
        { symbol: "V_elute", description: "Final elution volume of purified extract in mL (typically 1.5 mL)" },
        { symbol: "A_std", description: "Peak area of certified aflatoxin calibration standard" },
        { symbol: "W_eff", description: "Effective sample mass equivalent loaded onto immunoaffinity column (g)" }
      ],
      derivation: "Based on linear chromatographic detector response: peak area is directly proportional to mass of analyte injected. Ratio of sample peak area to standard peak area multiplied by standard concentration yields analyte mass concentration. Dividing by effective sample weight expresses result as µg/kg (parts per billion).",
      factorOrigin: "Immunoaffinity extraction provides > 90% recovery with exceptional matrix clean-up, removing interfering pigments and lipids. Post-column derivatization is essential because native Aflatoxins B1 and G1 exhibit fluorescence quenching in reversed-phase aqueous mobile phases.",
      unitAnalysis: "µg/kg (ppb) = [ (Area × ng/mL × mL) / (Area × g) ] = ng/g = µg/kg",
      practicalExample: "Tested red chilli powder sample yields Aflatoxin B1 = 1.45 ppb, B2 = 0.22 ppb, G1 = Not Detected, G2 = Not Detected. Total Aflatoxins = 1.45 + 0.22 = 1.67 ppb. Well below the FSSAI statutory threshold of 10.0 ppb."
    },
    referenceStandard: "IS 16287:2014 / AOAC 999.07 / ISO 16050:2003 / FSSAI Lab Manual 11",
    reagentsAndApparatus: [
      "High-Performance Liquid Chromatograph (HPLC) with Fluorescence Detector (FLD)",
      "Photochemical Post-Column Derivatization Cell (PHRED) or Electrochemical Kobra Cell",
      "Aflatoxin Immunoaffinity Columns (Aflatest or equivalent monoclonal antibody)",
      "Certified Multi-Aflatoxin Reference Standard (Mix of B1, B2, G1, G2)",
      "HPLC-Grade Methanol, Acetonitrile, and Ultrapure Milli-Q Water",
      "High-Speed Explosion-Proof Laboratory Blender (15,000 rpm)"
    ],
    prescribedLimit: "Pulses: Total Aflatoxins Max 15.0 µg/kg (ppb) | Spices: B1 Max 5.0 - 10.0 ppb, Total Max 10.0 - 15.0 ppb",
    riskIfFailed: "Hepatocellular carcinoma (liver cancer via p53 gene mutation), acute hepatic necrosis/failure, growth stunting in children, and trade embargo.",
    factorsExplanation: [
      {
        question: "Aflatoxin extraction ke baad Immunoaffinity Column (IAC) use karna kyun mandatory hai?",
        answer: "1. Spices aur pulses mein complex matrix components (curcumin, capsaicin, lipids, pigments) hote hain.\n2. Ye matrix compounds HPLC column par co-elute hokar detector baseline par massive background noise create karte hain.\n3. Immunoaffinity column mein specific monoclonal antibodies hoti hain jo sirf Aflatoxins B1, B2, G1, G2 ko pakad leti hain aur baaki saare pigments ko paani se wash-out kar deti hain, jisse 99% pure extract milta hai."
      },
      {
        question: "HPLC analysis mein post-column derivatization (PHRED ya Kobra cell) kyun zaroori hai?",
        answer: "1. Aflatoxins B2 aur G2 naturally fluorescent hote hain.\n2. Lekin Aflatoxins B1 aur G1 reversed-phase water/methanol mobile phase mein natural fluorescence quenching show karte hain (unka signal 95% suppressed rehta hai).\n3. Post-column photochemical derivatization (UV radiation) ya bromination B1 aur G1 ke furan ring par water/bromine add karke unhe highly fluorescent bana deti hai, jisse 0.1 ppb sensitivity milti hai."
      },
      {
        question: "Aflatoxin B1 ko world ka most potent natural carcinogen kyun mana jaata hai?",
        answer: "1. IARC ne Aflatoxin B1 ko Group 1 Human Carcinogen classify kiya hai.\n2. Liver mein CYP450 enzymes isse reactive exo-8,9-epoxide mein convert karte hain.\n3. Ye epoxide DNA ke codon 249 (p53 tumor suppressor gene) par direct G-to-T transversion mutation karta hai, jisse cellular tumor suppression mechanism permanently fail ho jata hai aur liver cancer develop hota hai."
      },
      {
        question: "Pulses aur spices mein aflatoxin contamination prevent karne ke liye critical moisture level kya hai?",
        answer: "1. Aspergillus flavus mold growth ke liye minimum water activity (a_w) 0.80 aur moisture > 13-14% required hoti hai.\n2. Agar pulses ko moisture < 12% aur spices ko moisture < 10% par maintain kiya jaye, toh fungal spores dormant rehte hain aur aflatoxin production zero rehti hai."
      }
    ],
    factorsSummaryTable: [
      { parameter: "Extraction Solvent", value: "Methanol:Water (70:30) + NaCl", reason: "Exhaustively leaches hydrophobic difuranocoumarin toxins while salting out proteins" },
      { parameter: "Clean-up Column", value: "Monoclonal Immunoaffinity Column", reason: "Provides selective antibody binding eliminating 99% of interfering spice pigments" },
      { parameter: "Detector System", value: "FLD (Ex 365 nm, Em 440/455 nm)", reason: "Selective picogram-level fluorometric quantification of derivatized aflatoxins" },
      { parameter: "FSSAI Total Aflatoxin Limit", value: "Max 10.0 to 15.0 µg/kg (ppb)", reason: "Statutory ceiling protecting public from hepatocellular carcinoma" }
    ],
    procedureSteps: [
      "Weigh 25.0g finely pulverized sample into blender jar, add 5.0g NaCl and 100mL Methanol:Water (70:30 v/v).",
      "Blend at high speed (15,000 rpm) for exactly 3 minutes; filter extract through Whatman No. 4 filter paper.",
      "Pipette 10.0mL of filtered extract and dilute with 40.0mL PBS buffer (pH 7.4); filter through microfiber filter.",
      "Pass 10.0mL of diluted filtrate through Aflatest Immunoaffinity Column at a steady flow rate of 1-2 drops/sec.",
      "Wash column with 2 × 10mL ultrapure Milli-Q water to remove all non-bound matrix impurities.",
      "Elute bound aflatoxins by passing 1.5mL HPLC-grade methanol through column into a certified amber vial.",
      "Inject 20 µL into HPLC-PHRED-FLD system; separate on C18 column running Water:Methanol:Acetonitrile (60:20:20).",
      "Quantify individual peaks (B1, B2, G1, G2) against certified standard calibration curve and calculate Total Aflatoxins in µg/kg."
    ],
    flowchartSteps: [
      {
        stepNumber: 1,
        phaseName: "Phase 1: High-Speed Solvent Extraction",
        title: "Methanolic Toxin Leaching",
        action: "Blend 25g sample + 5g NaCl with 100mL Methanol:Water (70:30) at 15,000 rpm for 3 min.",
        scientificMechanism: "Exhaustively extracts hydrophobic mycotoxins while precipitating plant proteins.",
        controlPoint: "CCP 1: Use explosion-proof blender under exhaust hood.",
        reagentsInvolved: ["Methanol:Water (70:30)", "Analytical NaCl"]
      },
      {
        stepNumber: 2,
        phaseName: "Phase 2: PBS Dilution & Microfiltration",
        title: "Aqueous Buffer Conditioning",
        action: "Dilute 10mL extract with 40mL PBS buffer; filter through glass microfiber filter.",
        scientificMechanism: "Reduces methanol concentration to < 15% preserving antibody binding affinity.",
        controlPoint: "CCP 2: Ensure diluted filtrate is completely transparent.",
        reagentsInvolved: ["PBS Buffer (pH 7.4)"]
      },
      {
        stepNumber: 3,
        phaseName: "Phase 3: Immunoaffinity Capture & Wash",
        title: "Monoclonal Antibody Clean-up",
        action: "Pass 10mL diluted filtrate through column at 1-2 drops/sec; wash with 20mL water.",
        scientificMechanism: "Monoclonal antibodies selectively capture aflatoxin antigens; impurities wash away.",
        controlPoint: "CCP 3: Maintain gravity drip rate (do not exceed 2 mL/min).",
        reagentsInvolved: ["Aflatest IAC Column"]
      },
      {
        stepNumber: 4,
        phaseName: "Phase 4: Methanol Elution & PHRED-HPLC",
        title: "Photochemical FLD Chromatography",
        action: "Elute toxins with 1.5mL pure methanol; inject 20 µL onto HPLC-PHRED-FLD system.",
        scientificMechanism: "Photochemical hydration converts B1/G1 into intense fluorescent derivatives.",
        controlPoint: "CCP 4: Calibrate FLD with 4-point certified B1, B2, G1, G2 standard curve.",
        reagentsInvolved: ["HPLC Methanol", "PHRED Photochemical Cell"]
      },
      {
        stepNumber: 5,
        phaseName: "Phase 5: Carcinogen Safety Decision",
        title: "Statutory Aflatoxin Ceiling Gate",
        action: "Calculate individual B1 and Total Aflatoxins (B1+B2+G1+G2); compare against legal limits.",
        scientificMechanism: "Guarantees food safety against hepatocellular carcinoma and acute aflatoxicosis.",
        controlPoint: "Quality Gate: Total > 15 ppb (pulses) or B1 > 5 ppb (spices) triggers immediate destruction.",
        reagentsInvolved: ["FSSAI Contaminants Regulations"]
      }
    ]
  }
];
