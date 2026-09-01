import { Question } from "./types";

export const ALL_DAIRY_QUESTIONS: Omit<Question, "id">[] = [
  // SET 1: GATE & ICAR Core Technical
  {
    question: "What is the primary protein fraction responsible for curd formation during chymosin (rennet) coagulation of milk?",
    options: ["Alpha-s1 Casein", "Beta-Casein", "Kappa-Casein", "Gamma-Casein"],
    correctAnswer: 2,
    explanation: "Chymosin specifically cleaves the Phe105-Met106 peptide bond of Kappa-casein, destroying steric stabilization and causing casein micelles to aggregate.",
    category: "Dairy Chemistry"
  },
  {
    question: "In HTST pasteurization of milk, what is the minimum temperature-time combination prescribed by FSSAI?",
    options: ["63°C for 30 minutes", "72°C for 15 seconds", "85°C for 5 seconds", "135°C for 2 seconds"],
    correctAnswer: 1,
    explanation: "FSSAI standards mandate HTST pasteurization at a minimum of 72°C (161°F) for at least 15 seconds to ensure destruction of Coxiella burnetii.",
    category: "Dairy Engineering"
  },
  {
    question: "Which enzyme is tested to verify the efficiency of milk pasteurization?",
    options: ["Lipase", "Alkaline Phosphatase", "Peroxidase", "Lactase"],
    correctAnswer: 1,
    explanation: "Alkaline Phosphatase is slightly more heat resistant than pathogenic microorganisms (like Coxiella burnetii). Its complete destruction indicates effective pasteurization.",
    category: "Quality Control"
  },
  {
    question: "What is the characteristic flavor compound responsible for the typical buttery aroma in Dahi and cultured butter?",
    options: ["Acetaldehyde", "Diacetyl", "Lactic Acid", "Acetone"],
    correctAnswer: 1,
    explanation: "Diacetyl (2,3-butanedione) is synthesized by Leuconostoc mesenteroides subsp. cremoris and Lactococcus lactis subsp. diacetylactis, producing buttery aroma.",
    category: "Dairy Microbiology"
  },
  {
    question: "Which defect in milk powder is caused by Maillard browning reactions during storage?",
    options: ["Tallowy flavor", "Stale / Browning defect", "Rancidity", "Fishy off-flavor"],
    correctAnswer: 1,
    explanation: "Maillard reaction occurs between amino groups of lysine in casein and reducing sugar lactose at high ambient storage temperatures and elevated moisture.",
    category: "Dairy Chemistry"
  },
  {
    question: "What is the minimum Milk Fat percentage required by FSSAI for Standardized Milk in India?",
    options: ["3.0%", "3.5%", "4.5%", "6.0%"],
    correctAnswer: 2,
    explanation: "FSSAI prescribes a minimum of 4.5% Milk Fat and 8.5% Milk SNF for Standardized Milk across India.",
    category: "FSSAI Standards"
  },
  {
    question: "The overrun in Ice Cream is calculated using which formula based on volume?",
    options: [
      "[(Volume of Ice Cream - Volume of Mix) / Volume of Mix] × 100",
      "[(Volume of Mix - Volume of Ice Cream) / Volume of Ice Cream] × 100",
      "[(Weight of Ice Cream - Weight of Mix) / Weight of Mix] × 100",
      "[(Volume of Mix / Volume of Ice Cream)] × 100"
    ],
    correctAnswer: 0,
    explanation: "Percent Overrun (by volume) = [(Vol of Ice Cream produced - Vol of liquid Mix used) / Vol of liquid Mix used] × 100.",
    category: "Dairy Technology"
  },
  {
    question: "Which homogenizer valve stage is primarily responsible for breaking down fat globule aggregates after initial size reduction?",
    options: ["First Stage", "Second Stage", "Third Stage", "Homogenization bypass"],
    correctAnswer: 1,
    explanation: "The 1st stage valve operates at high pressure (150-200 bar) to disrupt fat globules. The 2nd stage valve operates at lower pressure (30-50 bar) to separate clustered fat globules.",
    category: "Dairy Engineering"
  },
  {
    question: "In Paneer manufacturing, what is the optimum milk coagulation temperature and pH for maximum yield and body?",
    options: ["60°C and pH 6.0", "70°C and pH 5.0", "80-85°C and pH 5.30-5.35", "95°C and pH 4.6"],
    correctAnswer: 2,
    explanation: "Coagulating milk at 80-85°C with 1-2% citric acid at pH 5.30-5.35 yields Paneer with ideal moisture retention, smooth body, and low fat loss in whey.",
    category: "Dairy Technology"
  },
  {
    question: "What is the average specific gravity of fresh whole cow milk at 15.5°C?",
    options: ["1.018 - 1.022", "1.028 - 1.032", "1.036 - 1.040", "1.045 - 1.050"],
    correctAnswer: 1,
    explanation: "Fresh cow milk has an average specific gravity of 1.028 - 1.032, whereas buffalo milk ranges from 1.030 - 1.034.",
    category: "Dairy Physics"
  },
  {
    question: "Which microorganism is responsible for 'ropy milk' defect characterized by viscous slimy strands?",
    options: ["Alcaligenes viscolactis", "Bacillus cereus", "Pseudomonas putida", "Streptococcus agalactiae"],
    correctAnswer: 0,
    explanation: "Alcaligenes viscolactis (and some capsular strains of Klebsiella) produce extracellular mucopolysaccharides causing ropy or slimy milk.",
    category: "Dairy Microbiology"
  },
  {
    question: "Which packaging film is commonly used for UHT milk tetra aseptic packaging for barrier against oxygen and light?",
    options: ["LDPE only", "Aluminum Foil layer in 6-layer laminate", "BOPP layer", "Cellophane"],
    correctAnswer: 1,
    explanation: "Aseptic Tetra Pak packaging comprises 6 layers: Polyethylene (waterproof/adhesion), Paperboard (stability), Polyethylene, Aluminum Foil (oxygen & light barrier), Polyethylene, PET/PE (sealant).",
    category: "Packaging Tech"
  },

  // SET 2: FSSAI CFSO/TO & QA
  {
    question: "In the Gerber method for fat determination in milk, what is the specific gravity of the concentrated sulfuric acid required?",
    options: ["1.500 - 1.520", "1.820 - 1.825", "1.140 - 1.150", "2.000 - 2.050"],
    correctAnswer: 1,
    explanation: "Gerber sulfuric acid must have a specific gravity of 1.820 to 1.825 at 20°C (approx 90-91% H2SO4) to dissolve proteins without charring fat.",
    category: "QA & Adulteration"
  },
  {
    question: "In Methylene Blue Reduction Test (MBRT), raw milk reducing methylene blue color in less than 30 minutes is classified as:",
    options: ["Very Good", "Good", "Fair", "Very Poor / Bad"],
    correctAnswer: 3,
    explanation: "MBRT decolorization in < 30 mins indicates heavy bacterial contamination (> 10 million cfu/ml) and is graded as Very Poor.",
    category: "Milk Quality"
  },
  {
    question: "Which reagent is used in the Rosolic Acid test to detect neutralizing agents like Sodium Carbonate/Bicarbonate in milk?",
    options: ["0.1% Rosolic acid in ethyl alcohol", "1% Phenolphthalein", "Methyl Red", "Bromothymol Blue"],
    correctAnswer: 0,
    explanation: "Rosolic acid solution gives a rose-red or deep pink color in the presence of added neutralizers (carbonates/hydroxides), whereas unadulterated milk remains brownish-orange.",
    category: "Adulteration Tests"
  },
  {
    question: "Addition of starch as an adulterant in milk is confirmed by the appearance of which color upon adding 1% Iodine solution?",
    options: ["Deep Pink", "Canary Yellow", "Deep Blue", "Brick Red"],
    correctAnswer: 2,
    explanation: "Iodine reacts with amylose in starch to form a dark blue to purple starch-iodine inclusion complex.",
    category: "Adulteration Tests"
  },
  {
    question: "Which chemical reagent is used in the DMAB test for rapid detection of added Urea in synthetic milk?",
    options: ["p-Dimethylaminobenzaldehyde", "Diphenylamine", "Resorcinol", "Phosphomolybdic acid"],
    correctAnswer: 0,
    explanation: "DMAB (p-Dimethylaminobenzaldehyde) in acidic medium reacts with urea to form a distinct bright yellow colored complex.",
    category: "Adulteration Tests"
  },
  {
    question: "What is the FSSAI maximum permissible limit for Aflatoxin M1 in raw and pasteurized milk?",
    options: ["0.05 µg/kg", "0.5 µg/kg", "5.0 µg/kg", "10.0 µg/kg"],
    correctAnswer: 1,
    explanation: "FSSAI mandates a maximum tolerance limit of 0.5 µg/kg (0.5 ppb) for Aflatoxin M1 in milk.",
    category: "FSSAI Safety"
  },
  {
    question: "The Reichert-Meissl (RM) value of pure Ghee evaluates the presence of which specific fatty acids?",
    options: [
      "Insoluble long-chain fatty acids",
      "Steam-volatile, water-soluble fatty acids (mainly Butyric and Caproic acid)",
      "Unsaturated fatty acids (Oleic acid)",
      "Phospholipids and Sterols"
    ],
    correctAnswer: 1,
    explanation: "RM value measures the volume of 0.1N KOH required to neutralize steam-volatile water-soluble fatty acids distilled from 5g fat. Pure Ghee RM value is typically > 28.",
    category: "Ghee Chemistry"
  },
  {
    question: "Which indicator is used to detect the presence of synthetic detergent adulterants in milk?",
    options: ["Methylene Blue in chloroform / anionic dye test", "Nessler reagent", "Curcumin", "Eosin Y"],
    correctAnswer: 0,
    explanation: "Anionic detergents form a chloroform-soluble blue complex with cationic methylene blue dye, turning the lower chloroform layer blue.",
    category: "Adulteration Tests"
  },
  {
    question: "What is the standard freezing point range of unadulterated fresh bovine milk measured using a Cryoscope?",
    options: ["0.000°C to -0.200°C", "-0.520°C to -0.555°C", "-0.850°C to -0.900°C", "-1.200°C to -1.500°C"],
    correctAnswer: 1,
    explanation: "Pure cow/buffalo milk freezes in the tight range of -0.520°C to -0.555°C due to dissolved lactose and soluble salts.",
    category: "Milk Physics"
  },
  {
    question: "The California Mastitis Test (CMT) estimates the somatic cell count by reacting with which intracellular component?",
    options: ["Bacterial cell wall peptidoglycan", "Nuclear DNA of somatic cells (leukocytes)", "Cell membrane phospholipids", "Mitochondrial ATP"],
    correctAnswer: 1,
    explanation: "CMT reagent (alkyl aryl sulfonate) lyses somatic cells, releasing nuclear DNA which forms a gel-like precipitate proportional to cell count.",
    category: "Mastitis Diagnosis"
  },

  // SET 3: Plant Operations & Engineering
  {
    question: "In a triple-effect evaporator operating in a milk powder plant, what is the approximate steam economy achieved?",
    options: ["0.8 kg water evaporated per kg steam", "1.5 kg water evaporated per kg steam", "2.4 to 2.8 kg water evaporated per kg steam", "5.0 kg water evaporated per kg steam"],
    correctAnswer: 2,
    explanation: "A triple-effect evaporator reuses vapor from preceding effects to heat subsequent effects, achieving ~2.4 to 2.8 kg evaporation per kg steam consumed.",
    category: "Evaporation Tech"
  },
  {
    question: "What is the standard 5-stage cleaning sequence in automatic Dairy CIP (Clean-In-Place) systems?",
    options: [
      "Cold Rinse -> Caustic Wash (1.5-2.0% NaOH @ 75°C) -> Intermediate Rinse -> Acid Wash (0.5-1.0% HNO3 @ 65°C) -> Final Sanitizing Rinse",
      "Acid Wash -> Caustic Wash -> Hot Rinse -> Cold Rinse -> Steam",
      "Steam -> Caustic Wash -> Acid Wash -> Detergent -> Sanitizer",
      "Hot Rinse -> Detergent -> Sanitizer -> Cold Rinse -> Acid Wash"
    ],
    correctAnswer: 0,
    explanation: "Standard Dairy CIP uses pre-rinse, hot alkali (NaOH to saponify fat/protein), intermediate rinse, warm acid (HNO3 to dissolve milkstone scale), and final rinse.",
    category: "Dairy Engineering"
  },
  {
    question: "In a Plate Heat Exchanger (PHE) pasteurizer, how is Regeneration Efficiency calculated?",
    options: [
      "[(Temp of Pasteurized Milk leaving regenerator - Temp of Raw Milk entering) / (Max Pasteurization Temp - Temp of Raw Milk entering)] × 100",
      "[(Max Temp - Min Temp) / Max Temp] × 100",
      "[(Flow Rate in - Flow Rate out) / Flow Rate in] × 100",
      "[(Holding Time / Cooling Time)] × 100"
    ],
    correctAnswer: 0,
    explanation: "Regeneration % measures the heat recovered between outgoing hot pasteurized milk and incoming cold raw milk, typically achieving 90-94% efficiency.",
    category: "Heat Transfer"
  },
  {
    question: "Which refrigerant is most widely used in large industrial dairy processing plants due to its high latent heat of vaporization?",
    options: ["R-134a", "R-410A", "Anhydrous Ammonia (R-717)", "Carbon Dioxide (R-744)"],
    correctAnswer: 2,
    explanation: "Ammonia (R-717) has an exceptionally high latent heat of vaporization (~1370 kJ/kg), zero ODP, and zero GWP, making it ideal for central dairy refrigeration.",
    category: "Refrigeration"
  },
  {
    question: "In a continuous spray drying tower for milk, what type of atomizer uses high centrifugal speed (10,000 to 25,000 RPM)?",
    options: ["High-pressure nozzle atomizer", "Pneumatic nozzle", "Rotary disc / wheel atomizer", "Ultrasonic transducer"],
    correctAnswer: 2,
    explanation: "Rotary wheel atomizers use high rotational speeds (10,000 - 25,000 RPM) to fling concentrated milk liquid into fine uniform droplets.",
    category: "Drying Technology"
  },
  {
    question: "What centrifugal force (g-force) range is generated inside a commercial dairy disc-bowl cream separator?",
    options: ["100 - 500 g", "5,000 - 10,000 g", "50,000 - 100,000 g", "500,000 g"],
    correctAnswer: 1,
    explanation: "Disc stack cream separators spin at 4,000-6,000 RPM, generating 5,000 to 10,000 g centrifugal force to separate light fat globules from skim milk.",
    category: "Separation Tech"
  },
  {
    question: "What HEPA air filter efficiency is required in the Air Handling Unit (AHU) of aseptic dairy packaging rooms?",
    options: ["85% at 5 µm", "95% at 1 µm", "99.97% at 0.3 µm", "100% at 0.01 µm"],
    correctAnswer: 2,
    explanation: "HEPA filters in aseptic filling cleanrooms must filter at least 99.97% of airborne particles 0.3 µm in size.",
    category: "Plant Utilities"
  },
  {
    question: "In a high-pressure milk homogenizer, what is the operating pressure range of the First Stage homogenizing valve?",
    options: ["10 - 20 bar", "150 - 200 bar (15-20 MPa)", "500 - 800 bar", "1500 bar"],
    correctAnswer: 1,
    explanation: "The 1st stage valve operates at 150-200 bar to reduce fat globule diameter from ~3.5 µm down to < 1.0 µm via cavitation and shear.",
    category: "Dairy Engineering"
  },

  // SET 4: Chemistry, Microbiology & Processing
  {
    question: "At what temperature does major whey protein Beta-Lactoglobulin undergo thermal denaturation, releasing free sulfhydryl (-SH) groups?",
    options: ["55°C", "65°C", "78 - 85°C", "121°C"],
    correctAnswer: 2,
    explanation: "Beta-lactoglobulin unfolds around 78-85°C, exposing hidden cysteine -SH groups that impart cooked flavor to heated milk.",
    category: "Dairy Chemistry"
  },
  {
    question: "What is the standard ratio of starter cultures Streptococcus thermophilus and Lactobacillus delbrueckii subsp. bulgaricus in Yoghurt manufacturing?",
    options: ["10:1", "1:1 (Equal proportions)", "1:5", "1:20"],
    correctAnswer: 1,
    explanation: "A 1:1 ratio ensures symbiotic acid and flavor production (protocooperation), yielding optimum lactic acid and acetalhehyde.",
    category: "Fermented Products"
  },
  {
    question: "What defect occurs in Yoghurt when whey liquid separates out on the surface during storage?",
    options: ["Sandiness", "Syneresis (Wheying-off)", "Late blowing", "Rancidity"],
    correctAnswer: 1,
    explanation: "Syneresis is the shrinkage of the protein gel network resulting in whey expulsion, caused by low SNF, high disturbance during setting, or high acid.",
    category: "Yoghurt Defect"
  },
  {
    question: "During Mozzarella cheese manufacturing, at what curd pH does the curd exhibit characteristic stretchability in hot water (70-80°C)?",
    options: ["pH 6.5 - 6.7", "pH 5.2 - 5.4", "pH 4.0 - 4.2", "pH 3.5"],
    correctAnswer: 1,
    explanation: "Demineralization of casein micelles at pH 5.2-5.4 creates dicalcium phosphate cross-links optimal for stretching into fibers.",
    category: "Cheese Technology"
  },
  {
    question: "In Ghee manufacturing, what ripening/cooling temperature range promotes optimum fat crystallization and uniform granular structure?",
    options: ["4°C", "15°C", "26 - 28°C", "45°C"],
    correctAnswer: 2,
    explanation: "Holding Ghee at 26-28°C for 24-48 hours allows high-melting liquid glycerides to slowly form large, uniform fat granules.",
    category: "Ghee Processing"
  },
  {
    question: "Which native milk enzyme hydrolyzes milk fat into free fatty acids (butyric acid) if milk is improperly agitated?",
    options: ["Lipoprotein Lipase (LPL)", "Alkaline Phosphatase", "Plasmin", "Catalase"],
    correctAnswer: 0,
    explanation: "Native Lipoprotein Lipase (LPL) hydrolyzes triglycerides at the fat globule interface, causing hydrolytic rancidity and bitter/soapy flavor.",
    category: "Enzymology"
  },
  {
    question: "In Shrikhand production, what is the concentrated curd mass called after draining whey through muslin cloth?",
    options: ["Paneer", "Chakka", "Khoa", "Rabri"],
    correctAnswer: 1,
    explanation: "Chakka is the concentrated dahi obtained after partial removal of whey, containing ~60% moisture, used as the base for Shrikhand.",
    category: "Traditional Dairy"
  },
  {
    question: "What is the maximum permissible moisture content in FSSAI standardized Butter?",
    options: ["12%", "16%", "20%", "25%"],
    correctAnswer: 1,
    explanation: "FSSAI standards stipulate a maximum of 16% moisture and a minimum of 80% milk fat in table butter.",
    category: "Butter Standards"
  },

  // SET 5: Grand All-India Mock & Advanced Calculations
  {
    question: "Using Pearson Square method, how many kg of 40% fat cream and 0.5% fat skim milk are needed to standardize 1000 kg milk to 4.5% fat?",
    options: [
      "101.3 kg Cream & 898.7 kg Skim Milk",
      "50 kg Cream & 950 kg Skim Milk",
      "200 kg Cream & 800 kg Skim Milk",
      "150 kg Cream & 850 kg Skim Milk"
    ],
    correctAnswer: 0,
    explanation: "Parts Cream = (4.5 - 0.5) = 4.0. Parts Skim = (40 - 4.5) = 35.5. Total parts = 39.5. Cream % = (4/39.5)*1000 = 101.26 kg.",
    category: "Standardization Math"
  },
  {
    question: "What is the Glass Transition Temperature (Tg) of amorphous spray-dried lactose powder?",
    options: ["101°C", "49°C", "-10°C", "180°C"],
    correctAnswer: 1,
    explanation: "Amorphous lactose has a Tg of ~49°C. Exceeding Tg due to moisture absorption causes sticky powder and caking in milk powder.",
    category: "Dairy Physics"
  },
  {
    question: "What is the specific heat capacity of skim milk (9% SNF) at 20°C?",
    options: ["2.10 kJ/kg·K", "3.93 kJ/kg·K", "4.18 kJ/kg·K", "1.50 kJ/kg·K"],
    correctAnswer: 1,
    explanation: "Water is 4.18 kJ/kg·K. Skim milk with 9% dissolved solids has a specific heat capacity of approx 3.93 kJ/kg·K.",
    category: "Thermodynamics"
  },
  {
    question: "Which microfiltration membrane pore size is specifically utilized for cold physical removal of bacteria from milk?",
    options: ["0.001 µm", "0.01 µm", "1.4 µm", "10 µm"],
    correctAnswer: 2,
    explanation: "Microfiltration with 1.4 µm ceramic membranes retains 99.5-99.9% of bacteria and spores without denaturing whey proteins.",
    category: "Membrane Tech"
  },
  {
    question: "Which natural polypeptide bacteriocin produced by Lactococcus lactis is GRAS-approved as a bio-preservative in cheese?",
    options: ["Nisin", "Natamycin", "Reuterin", "Pediocin"],
    correctAnswer: 0,
    explanation: "Nisin is a polycyclic lantibiotic peptide (34 amino acids) that forms pores in Gram-positive bacterial membranes.",
    category: "Bio-preservatives"
  },
  {
    question: "What rheological behavior is exhibited by Sweetened Condensed Milk during storage?",
    options: ["Newtonian fluid", "Thixotropic / Pseudoplastic with yield stress", "Dilatant (shear-thickening)", "Bingham plastic"],
    correctAnswer: 1,
    explanation: "Sweetened condensed milk shows shear-thinning (pseudoplastic) and thixotropic behavior due to reversible protein network structural breakdown.",
    category: "Dairy Rheology"
  },
  {
    question: "In UHT Direct Steam Injection (DSI) plant, what is the purpose of the vacuum flash vessel immediately after heating?",
    options: [
      "Cool milk instantaneously and remove condensed steam water equivalent to injected steam",
      "Increase fat globule size",
      "Preheat incoming milk",
      "Add carbonation"
    ],
    correctAnswer: 0,
    explanation: "Flash evaporation in a vacuum chamber instantly drops temperature and removes the exact amount of water added as culinary steam during injection.",
    category: "UHT Engineering"
  },
  {
    question: "What is the primary cause of 'sandiness' defect in Ice Cream and Condensed Milk?",
    options: [
      "Large Alpha-lactose monohydrate crystal growth (> 15 µm)",
      "High milk fat content",
      "Over-churning of butterfat",
      "Presence of sucrose crystals"
    ],
    correctAnswer: 0,
    explanation: "When lactose concentration exceeds saturation, it crystallizes into hard, tomahawk-shaped alpha-lactose monohydrate crystals (> 15-30 µm), causing gritty sandiness.",
    category: "Product Defects"
  },

  // ADDITIONAL EXTENDED UNIQUE DAIRY QUESTIONS
  {
    question: "Which chemical test is used to detect the presence of added Formalin (formaldehyde) in milk as a preservative?",
    options: ["Hehner Test (concentrated H2SO4 with FeCl3 forming violet ring)", "Rosolic acid test", "Resorcinol test", "Baudouin test"],
    correctAnswer: 0,
    explanation: "Hehner test forms a distinct violet or purple ring at the junction of milk and concentrated sulfuric acid containing trace ferric chloride.",
    category: "Adulteration Tests"
  },
  {
    question: "What is the maximum limit of titratable acidity (% Lactic Acid) allowed for fresh Cow Milk by FSSAI?",
    options: ["0.15%", "0.25%", "0.35%", "0.50%"],
    correctAnswer: 0,
    explanation: "Fresh unadulterated cow milk has a natural titratable acidity of 0.13 - 0.15% lactic acid equivalent, mainly due to proteins, citrates, and phosphates.",
    category: "Milk Chemistry"
  },
  {
    question: "The Baudouin Test is used to detect adulteration of Ghee with which substance?",
    options: ["Vanaspati (Hydrogenated Vegetable Oil containing Sesame Oil)", "Starch", "Mineral Oil", "Lard"],
    correctAnswer: 0,
    explanation: "Baudouin test detects Sesamin present in mandatory 5% sesame oil added to Vanaspati, forming a crimson red color with HCl and Furfural.",
    category: "Adulteration Tests"
  },
  {
    question: "Which major casein fraction exhibits high sensitivity to calcium precipitation and lacks carbohydrate moieties?",
    options: ["Alpha-s1 Casein", "Kappa-Casein", "Beta-Lactoglobulin", "Alpha-Lactalbumin"],
    correctAnswer: 0,
    explanation: "Alpha-s1 casein contains 8-9 phosphate groups and precipitates readily in the presence of Ca2+ ions, unlike glycosylated Kappa-casein.",
    category: "Protein Chemistry"
  },
  {
    question: "In Khoa production, what is the moisture content range for 'Dhapa' variety Khoa used for making Gulab Jamun?",
    options: ["20 - 25%", "37 - 44%", "15%", "50 - 60%"],
    correctAnswer: 1,
    explanation: "Dhapa Khoa has 37-44% moisture, loose body and smooth texture ideal for Gulab Jamun, while Pindi has ~31-33% moisture for Peda/Burfi.",
    category: "Traditional Products"
  },
  {
    question: "Which thermal processing index evaluates the extent of milk heat treatment by measuring undenatured whey protein nitrogen in mg per g powder?",
    options: ["WPNI (Whey Protein Nitrogen Index)", "HMF Index", "F0 Value", "Insolubility Index"],
    correctAnswer: 0,
    explanation: "WPNI classifies skim milk powder: Low-Heat (> 6.0 mg/g), Medium-Heat (1.51 - 5.99 mg/g), and High-Heat (< 1.50 mg/g).",
    category: "Powder Quality"
  },
  {
    question: "What is the primary function of adding Sodium Citrate or Disodium Phosphate as emulsifying salts in Processed Cheese manufacture?",
    options: [
      "Solubilize casein by chelating calcium and converting insoluble paracaseinate to soluble sodium paracaseinate",
      "Lower pH to 3.0",
      "Act as sweetening agent",
      "Inhibit yeast growth"
    ],
    correctAnswer: 0,
    explanation: "Emulsifying salts sequester Ca2+ ions, transforming hydrophobic calcium paracaseinate matrix into smooth, emulsified sodium paracaseinate melt.",
    category: "Cheese Chemistry"
  },
  {
    question: "Which defect in Butter is caused by oxidation of unsaturated fatty acids catalysed by copper or iron ions?",
    options: ["Tallowy / Metallic flavor defect", "Cheesy defect", "Ropy defect", "Bitty cream"],
    correctAnswer: 0,
    explanation: "Traces of heavy metals (Cu > 0.05 ppm, Fe > 0.5 ppm) accelerate free radical autoxidation of linoleic and oleic acids, generating metallic/tallowy flavor.",
    category: "Butter Quality"
  },
  {
    question: "What is the main carbohydrate present in Bovine Colostrum in higher concentration than regular milk?",
    options: ["Oligosaccharides", "Lactose", "Sucrose", "Maltose"],
    correctAnswer: 0,
    explanation: "Colostrum contains significantly higher concentrations of sialylated and fucosylated immunomodulatory oligosaccharides, whereas lactose is lower.",
    category: "Colostrum Chemistry"
  },
  {
    question: "In Ultrafiltration of whey, what membrane cut-off (MWCO) is selected to retain whey proteins (Alpha-lactalbumin and Beta-lactoglobulin)?",
    options: ["100 Da", "10,000 - 30,000 Da (10-30 kDa)", "500,000 Da", "5,000,000 Da"],
    correctAnswer: 1,
    explanation: "Alpha-lactalbumin (~14.2 kDa) and Beta-lactoglobulin (~18.4 kDa) are retained by 10-30 kDa MWCO membranes, letting lactose and salts pass through.",
    category: "Membrane Tech"
  },
  {
    question: "What enzyme is used in cold-sterilized or low-lactose milk processing to hydrolyze lactose into Glucose and Galactose?",
    options: ["Beta-Galactosidase (Lactase)", "Alpha-Amylase", "Chymosin", "Glucoamylase"],
    correctAnswer: 0,
    explanation: "Beta-Galactosidase (Lactase derived from Kluyveromyces lactis or Aspergillus niger) cleaves lactose into glucose and galactose.",
    category: "Dairy Enzymes"
  },
  {
    question: "In Dahi manufacturing, what level of acidity (% Lactic Acid) indicates ideal setting and firm curd structure?",
    options: ["0.2%", "0.75 - 0.90%", "2.5%", "4.0%"],
    correctAnswer: 1,
    explanation: "Dahi reaches optimal firm body and balanced mild acidic flavor at 0.75-0.90% titratable acidity (pH 4.4 - 4.6).",
    category: "Fermented Products"
  },
  {
    question: "Which thermal evaporator component creates high vacuum inside the vapor chamber to lower the boiling point of milk?",
    options: ["Barometric Condenser with Steam Ejector or Vacuum Pump", "Homogenizer valve", "Plate heat exchanger", "Fluidized bed"],
    correctAnswer: 0,
    explanation: "Barometric condensers coupled with steam jet ejectors or liquid ring vacuum pumps pull vacuum (70-85 kPa), dropping milk boiling point to 50-65°C.",
    category: "Evaporator Design"
  },
  {
    question: "What is the principal phospholipid constituent of the Milk Fat Globule Membrane (MFGM)?",
    options: ["Sphingomyelin, Phosphatidylcholine & Phosphatidylethanolamine", "Triacylglycerol", "Free cholesterol", "Lecithin only"],
    correctAnswer: 0,
    explanation: "MFGM trilayer is rich in polar lipids: Sphingomyelin (25-35%), Phosphatidylcholine (25-35%), and Phosphatidylethanolamine (20-30%).",
    category: "MFGM Chemistry"
  },
  {
    question: "Which heat treatment method applies 135-150°C for 2 to 5 seconds to achieve commercial sterility in liquid milk?",
    options: ["LTLT Pasteurization", "HTST Pasteurization", "UHT (Ultra-High Temperature) Processing", "Thermization"],
    correctAnswer: 2,
    explanation: "UHT processing at 135-150°C for 2-5 seconds destroys all vegetative microorganisms and bacterial endospores (F0 > 5-6).",
    category: "Thermal Processing"
  },
  {
    question: "In continuous butter making machine (Fritz process), what phase transformation occurs during high-speed churning?",
    options: [
      "Phase inversion from Oil-in-Water (O/W) emulsion to Water-in-Oil (W/O) emulsion",
      "Gelation of casein",
      "Crystallization of lactose",
      "Evaporation of moisture"
    ],
    correctAnswer: 0,
    explanation: "High speed beaters rupture MFGM, releasing liquid fat that cements fat crystals into butter granules, inverting O/W cream to W/O butter.",
    category: "Butter Technology"
  },
  {
    question: "What is the minimum Milk Solids-Not-Fat (SNF) percentage prescribed by FSSAI for Double Toned Milk?",
    options: ["8.5%", "9.0%", "10.0%", "11.0%"],
    correctAnswer: 1,
    explanation: "FSSAI standards mandate 1.5% Fat and 9.0% SNF for Double Toned Milk.",
    category: "FSSAI Standards"
  },
  {
    question: "Which microorganism causes 'late blowing' defect in Swiss and Gouda cheese characterized by gas cracks and butyric off-odor?",
    options: ["Clostridium tyrobutyricum", "Lactococcus lactis", "Penicillium roqueforti", "Streptococcus thermophilus"],
    correctAnswer: 0,
    explanation: "Clostridium tyrobutyricum endospores survive pasteurization and ferment lactate into butyric acid, CO2, and H2 gas during ripening.",
    category: "Cheese Microbiology"
  },
  {
    question: "What is the purpose of adding starter culture Brevibacterium linens during surface-ripened cheese production (e.g. Tilsit, Brick)?",
    options: [
      "Produce reddish-orange smear coating and characteristic pungent aroma via protein hydrolysis",
      "Inhibit mold",
      "Coagulate milk",
      "Form eyes"
    ],
    correctAnswer: 0,
    explanation: "Brevibacterium linens forms an orange smear on washed-rind cheeses, secreting proteases and methanethiol for pungent flavor.",
    category: "Cheese Ripening"
  },
  {
    question: "What centrifugal separator efficiency is expected in modern hermetic disc-bowl cream separators regarding residual fat in skim milk?",
    options: ["< 0.05% fat (0.03 - 0.05%)", "0.5% fat", "1.0% fat", "2.0% fat"],
    correctAnswer: 0,
    explanation: "Hermetic disk bowl cream separators achieve extreme skimming efficiency, leaving < 0.04-0.05% fat in skim milk.",
    category: "Dairy Engineering"
  }
];
