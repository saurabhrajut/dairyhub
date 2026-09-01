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
    question: "In Paneer manufacturing, what is the optimum coagulation condition for good yield and body?",
    options: [
      "60°C and pH 6.0",
      "70-75°C and pH 5.30-5.35",
      "95°C and pH 4.6",
      "40°C and pH 6.6"
    ],
    correctAnswer: 1,
    explanation: "Milk is heated to high temperature (82-90°C) before coagulation, but coagulation is carried out around 70-75°C at pH 5.30-5.35 using citric acid for good body, texture and maximum yield.",
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
    explanation: "A 1:1 ratio ensures symbiotic acid and flavor production (protocooperation), yielding optimum lactic acid and acetaldehyde.",
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

  // SET 5: Advanced Calculations & Science
  {
    question: "Using Pearson Square method, how many kg of 40% fat cream and 0.5% fat skim milk are needed to standardize 1000 kg milk to 4.5% fat?",
    options: [
      "101.3 kg Cream & 898.7 kg Skim Milk",
      "50 kg Cream & 950 kg Skim Milk",
      "200 kg Cream & 800 kg Skim Milk",
      "150 kg Cream & 850 kg Skim Milk"
    ],
    correctAnswer: 0,
    explanation: "Parts Cream = (4.5 - 0.5) = 4.0. Parts Skim = (40 - 4.5) = 35.5. Total parts = 39.5. Cream = (4/39.5) × 1000 = 101.26 kg. Skim = 898.7 kg.",
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
    explanation: "Nisin is a polycyclic lantibiotic peptide (34 amino acids) that forms pores in Gram-positive bacterial membranes and is GRAS approved.",
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

  // SET 6: Adulteration & Standards
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
    question: "Which carbohydrate class is present in higher concentration in bovine colostrum than in regular mature milk?",
    options: ["Oligosaccharides", "Lactose", "Sucrose", "Maltose"],
    correctAnswer: 0,
    explanation: "Bovine colostrum contains significantly higher concentrations of sialylated and fucosylated immunomodulatory oligosaccharides compared to regular mature milk, whereas lactose is actually lower in colostrum.",
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
    question: "What enzyme is used in low-lactose milk processing to hydrolyze lactose into Glucose and Galactose?",
    options: ["Beta-Galactosidase (Lactase)", "Alpha-Amylase", "Chymosin", "Glucoamylase"],
    correctAnswer: 0,
    explanation: "Beta-Galactosidase (Lactase derived from Kluyveromyces lactis or Aspergillus niger) cleaves lactose into glucose and galactose, reducing lactose content for lactose-intolerant consumers.",
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
    explanation: "UHT processing at 135-150°C for 2-5 seconds destroys all vegetative microorganisms and most bacterial endospores, achieving commercial sterility for ambient shelf life.",
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
      "Form eyes in cheese"
    ],
    correctAnswer: 0,
    explanation: "Brevibacterium linens forms an orange smear on washed-rind cheeses, secreting proteases and methanethiol for characteristic pungent flavor.",
    category: "Cheese Ripening"
  },
  {
    question: "What centrifugal separator efficiency is expected in modern hermetic disc-bowl cream separators regarding residual fat in skim milk?",
    options: ["< 0.05% fat (0.03 - 0.05%)", "0.5% fat", "1.0% fat", "2.0% fat"],
    correctAnswer: 0,
    explanation: "Hermetic disk bowl cream separators achieve extreme skimming efficiency, leaving < 0.04-0.05% fat in skim milk.",
    category: "Dairy Engineering"
  },

  // SET 7: Advanced Scientific & Brain-Twisting Questions
  {
    question: "What is the isoelectric point (pI) of Casein, at which it precipitates most completely from milk solution?",
    options: ["pH 3.2", "pH 4.6", "pH 6.0", "pH 7.4"],
    correctAnswer: 1,
    explanation: "At pH 4.6 (isoelectric point), casein micelles lose their net negative charge, causing maximum precipitation due to elimination of electrostatic repulsion.",
    category: "Dairy Chemistry"
  },
  {
    question: "In the manufacture of Cheddar cheese, what is the biochemical significance of 'Cheddaring' process at 35°C for 2 hours?",
    options: [
      "Promotes continued acidification by starter lactococci, dehydration of curd, and solubilization of calcium phosphate altering casein structure for body formation",
      "Kills all starter cultures",
      "Converts lactose to ethanol",
      "Crystallizes milk fat"
    ],
    correctAnswer: 0,
    explanation: "Cheddaring allows lactose fermentation to continue (pH drops to 5.1-5.2), whey expulsion, calcium phosphate solubilization giving pliable fibrous texture.",
    category: "Cheese Technology"
  },
  {
    question: "What is the Fo value required for commercial sterility in low-acid canned dairy products (pH > 4.6)?",
    options: ["F0 = 0.5", "F0 = 3 to 5 (minimum 3)", "F0 = 50", "F0 = 100"],
    correctAnswer: 1,
    explanation: "F0 ≥ 3 minutes (121°C equivalent) ensures 12D reduction of Clostridium botulinum spores (12-log reduction) in low-acid canned dairy foods.",
    category: "Thermal Processing"
  },
  {
    question: "Which non-enzymatic browning reaction produces Hydroxymethylfurfural (HMF) as an indicator of heat damage in milk and dairy products?",
    options: ["Lipid Oxidation", "Maillard Reaction between reducing sugars and amino acids", "Caramelization of sucrose", "Strecker Degradation only"],
    correctAnswer: 1,
    explanation: "HMF (5-hydroxymethyl-2-furfuraldehyde) accumulates during advanced Maillard reaction in heated/stored milk and is a marker of heat treatment intensity.",
    category: "Dairy Chemistry"
  },
  {
    question: "In whey protein concentrate (WPC) manufacturing, what is the approximate protein content (% dry basis) of WPC-80?",
    options: ["35 - 45%", "55 - 65%", "75 - 85%", "90 - 95%"],
    correctAnswer: 2,
    explanation: "WPC-80 contains ~80% protein on dry weight basis, achieved by ultrafiltration followed by diafiltration to remove lactose and ash.",
    category: "Whey Technology"
  },
  {
    question: "What is the principle behind Bactofugation of milk, and at what centrifugal force range does it operate?",
    options: [
      "Centrifugal separation of bacteria/spores (density > milk serum) at 10,000 - 20,000 g in hermetic disc centrifuge",
      "Membrane filtration at 0.1 µm",
      "Chemical treatment with H2O2",
      "UV radiation sterilization"
    ],
    correctAnswer: 0,
    explanation: "Bactofuge centrifuges spin at high g-forces (10,000-20,000 g), sedimenting denser bacterial cells and spores into bactofugate (2-3% of milk volume), reducing spore count by 95-99%.",
    category: "Dairy Engineering"
  },
  {
    question: "Which spectroscopic technique is commonly used in automated milk analyzers (like MilkoScan) to determine fat, protein and lactose in liquid milk?",
    options: [
      "FTIR / Mid-Infrared Spectroscopy (MIR)",
      "Gas Chromatography",
      "Atomic Absorption Spectroscopy",
      "X-ray diffraction"
    ],
    correctAnswer: 0,
    explanation: "MilkoScan-type instruments use Fourier Transform Mid-Infrared (FTIR/MIR) spectroscopy to quantify fat, protein and lactose based on characteristic IR absorption bands of C-H, N-H and O-H bonds.",
    category: "Analytical Techniques"
  },
  {
    question: "During spray drying, what is the 'stickiness' phenomenon related to and how is it theoretically explained?",
    options: [
      "When outlet air temperature exceeds amorphous lactose Tg by only 10-20°C, causing viscous flow and powder deposition on dryer walls",
      "Excess fat causing powder to stick",
      "High protein denaturation",
      "Crystalline lactose formation"
    ],
    correctAnswer: 0,
    explanation: "When spray dryer outlet temperature exceeds Tg + 10-20°C, amorphous lactose becomes rubbery (viscous liquid state) causing inter-particle bridging and wall deposition.",
    category: "Powder Technology"
  },
  {
    question: "What is the mathematical expression for D-value (Decimal Reduction Time) in thermal microbiology?",
    options: [
      "D = t / log(N0/N) [time to achieve 1-log (90%) reduction at constant temperature]",
      "D = log(N0) × temperature",
      "D = N0/N × time",
      "D = F0 / z-value"
    ],
    correctAnswer: 0,
    explanation: "D-value is the time in minutes at a specific temperature required to reduce microbial population by 90% (1 log cycle): D = t / [log(N0) - log(N)].",
    category: "Thermal Microbiology"
  },
  {
    question: "In membrane filtration technology, what is the fundamental difference between Nanofiltration (NF) and Reverse Osmosis (RO) membranes used in dairy/whey processing?",
    options: [
      "NF (5-20 bar) partially rejects monovalent ions (NaCl passes) but retains divalent ions and lactose; RO (15-70 bar) rejects nearly all solutes including monovalent salts",
      "NF removes bacteria; RO removes only fat",
      "RO is cheaper than NF",
      "Both are identical in function"
    ],
    correctAnswer: 0,
    explanation: "NF operates at 5-20 bar with partial monovalent ion passage making it useful for whey demineralization; RO at 15-70 bar provides near-complete solute rejection for water recovery.",
    category: "Membrane Technology"
  },
  {
    question: "What is the significance of 'z-value' in dairy thermal processing calculations?",
    options: [
      "Temperature change (°C) required to change D-value by a factor of 10 (one log cycle); typically 10°C for bacterial spores",
      "Time required to sterilize 1 kg milk",
      "pH change during fermentation",
      "Activation energy of enzyme"
    ],
    correctAnswer: 0,
    explanation: "z-value defines the thermal sensitivity of microorganisms. For Clostridium botulinum spores, z = 10°C (18°F). A lower z-value means greater temperature sensitivity.",
    category: "Thermal Microbiology"
  },
  {
    question: "Which indigenous thermostable protease in milk, remaining active after UHT treatment, causes age gelation in UHT milk during storage?",
    options: ["Plasmin (alkaline milk protease)", "Chymosin", "Cathepsin D", "Pepsin"],
    correctAnswer: 0,
    explanation: "Plasmin (fibrinolysin) is a serine protease naturally in milk that survives UHT treatment. It hydrolyzes beta-casein into gamma-caseins and proteose-peptones, causing gel formation during ambient storage.",
    category: "UHT Defects"
  },
  {
    question: "What is the phenomenon called when fat globules in unhomogenized milk rise to the top due to density difference, and what is the Stokes' Law expression for rise velocity?",
    options: [
      "Creaming; v = (2r²(ρ_serum - ρ_fat) × g) / (9η) where r=radius, ρ=density, g=gravity, η=viscosity",
      "Sedimentation; v = mg/6πrη",
      "Coalescence; v = kT/6πrη",
      "Flocculation; v = (4/3)πr³ρg"
    ],
    correctAnswer: 0,
    explanation: "Stokes' Law governs creaming velocity: v = 2r²Δρg/9η. Larger fat globules (r↑) cream faster. Homogenization reduces r, slowing creaming dramatically.",
    category: "Colloidal Chemistry"
  },
  {
    question: "In FSSAI regulatory framework, is addition of whey solids permitted in standardized or toned milk sold as such?",
    options: [
      "No, FSSAI prohibits whey solids addition to standardized/toned milk; whey-added products must be distinctly labeled",
      "Up to 3% WPC addition is permitted",
      "Up to 50% whey replacement is allowed",
      "Unlimited whey addition is permitted"
    ],
    correctAnswer: 0,
    explanation: "FSSAI standards prohibit the addition of whey solids to standardized or toned milk sold as such. Any whey-added products must be labeled distinctly and cannot be marketed as standardized/toned milk.",
    category: "FSSAI Regulations"
  },
  {
    question: "What is the approximate energy consumption (kWh per kg water evaporated) for a modern Mechanical Vapor Recompression (MVR) evaporator in dairy industry?",
    options: ["0.04 - 0.07 kWh/kg water", "0.5 kWh/kg water", "2.5 kWh/kg water", "10 kWh/kg water"],
    correctAnswer: 0,
    explanation: "MVR evaporators use a mechanical compressor to recompress vapors for reuse as heating medium, consuming only 0.04-0.07 kWh/kg water — extremely energy efficient compared to conventional evaporators.",
    category: "Energy Efficiency"
  },
  {
    question: "In quantitative determination of milk proteins by Kjeldahl method, what nitrogen-to-protein conversion factor is used specifically for milk?",
    options: ["6.25", "6.38", "5.70", "6.00"],
    correctAnswer: 1,
    explanation: "The factor 6.38 is used for milk proteins (based on average nitrogen content of 15.67% in milk proteins), while 6.25 is used for general food proteins.",
    category: "Analytical Chemistry"
  },
  {
    question: "What is the critical water activity (aw) below which milk powder must be maintained for microbiological stability during storage?",
    options: ["aw < 0.90", "aw < 0.70", "aw < 0.60", "aw < 0.20"],
    correctAnswer: 2,
    explanation: "Most bacteria require aw > 0.91, yeasts > 0.87, and molds > 0.70 for growth. Milk powder must maintain aw < 0.60 (moisture < 4%) to prevent microbial spoilage during storage.",
    category: "Food Safety Science"
  },
  {
    question: "Which advanced dairy analytical instrument uses time-domain NMR (TD-NMR) technology for rapid simultaneous fat and moisture measurement in butter and cheese?",
    options: ["Minispec MQ-NMR Analyser", "Infrared spectrophotometer", "Gas chromatograph", "HPLC system"],
    correctAnswer: 0,
    explanation: "TD-NMR (Bruker Minispec) measures solid fat content (SFC) and moisture by differentiating NMR relaxation signals of solid vs. liquid fat and water protons — non-destructive and rapid.",
    category: "Analytical Instruments"
  },
  {
    question: "What is the approximate colligative osmotic pressure of bovine milk at 37°C?",
    options: ["700 kPa (~7 atm)", "6.9 MPa (~68 atm)", "0.1 MPa (1 atm)", "100 MPa"],
    correctAnswer: 0,
    explanation: "Bovine milk osmotic pressure is approximately 700 kPa (~7 atm), isotonic with blood plasma, maintained primarily by lactose and soluble salts (Na+, K+, Cl-).",
    category: "Dairy Physics"
  },
  {
    question: "During cheese ripening, what is the primary proteolytic event involving alpha-s1 casein by residual chymosin?",
    options: [
      "Chymosin cleaves alpha-s1 casein at Phe23-Phe24 bond producing alpha-s1-I casein peptide (f1-23)",
      "Complete hydrolysis to free amino acids",
      "Lipolysis of casein",
      "Glycosylation of casein"
    ],
    correctAnswer: 0,
    explanation: "Chymosin cleaves alpha-s1 casein at Phe23-Phe24 bond producing alpha-s1-I casein (f1-23), which is the first and primary proteolytic event in Cheddar-type cheese ripening, softening the texture.",
    category: "Cheese Biochemistry"
  },
  {
    question: "What is the approximate average diameter of native casein micelles in bovine milk as measured by dynamic light scattering (DLS)?",
    options: ["2 - 5 nm", "20 - 50 nm", "50 - 500 nm (average ~150-200 nm)", "1000 - 5000 nm"],
    correctAnswer: 2,
    explanation: "Casein micelles range from 50-500 nm with an average diameter of ~150-200 nm (0.15-0.20 µm), containing approximately 10⁴-10⁵ casein molecules per micelle.",
    category: "Colloidal Science"
  },
  {
    question: "In HACCP system for dairy plants, what is the difference between a Critical Control Point (CCP) and a Control Point (CP)?",
    options: [
      "CCP: A step where control is essential to prevent/eliminate/reduce food safety hazard to acceptable level (e.g., pasteurization). CP: A step controlling quality but not safety-critical hazards.",
      "CCP controls quality; CP controls safety",
      "Both are identical in function",
      "CCP is for chemical hazards only"
    ],
    correctAnswer: 0,
    explanation: "CCP requires mandatory monitoring with corrective actions and critical limits (e.g., pasteurization temperature). CP controls quality parameters but failure doesn't directly cause unacceptable safety hazard.",
    category: "Food Safety Management"
  },
  {
    question: "What is the phenomenon of 'Heat Coagulation Time (HCT)' of concentrated milk and at what pH does it show a characteristic minimum?",
    options: [
      "HCT shows a minimum (most heat sensitive) around pH 6.5-6.7 and maximum (most stable) around pH 6.9-7.0 in whole concentrated milk",
      "HCT increases linearly with pH",
      "HCT is not pH dependent",
      "HCT minimum is at pH 4.6"
    ],
    correctAnswer: 0,
    explanation: "HCT of concentrated milk shows a characteristic bimodal curve with minimum near pH 6.5-6.7 and maximum near pH 6.9-7.0 due to kappa-casein interactions with whey proteins.",
    category: "Concentrated Milk Science"
  },
  {
    question: "Which indigenous milk enzyme has anti-microbial activity and is part of the Lactoperoxidase-Thiocyanate-H2O2 (LP) system?",
    options: ["Lactoperoxidase", "Lysozyme", "Xanthine Oxidase", "Catalase"],
    correctAnswer: 0,
    explanation: "Lactoperoxidase (LP) catalyzes oxidation of thiocyanate (SCN⁻) by H2O2 to produce hypothiocyanite (OSCN⁻), which is bacteriostatic against Gram-negative and bactericidal against Gram-positive organisms.",
    category: "Milk Bioactives"
  },
  {
    question: "What is the 'micellar pathway' theory for casein micelle formation involving colloidal calcium phosphate (CCP)?",
    options: [
      "CCP nanoclusters bind to phosphoserine clusters of alpha-s1, alpha-s2, and beta-caseins, cross-linking them into large colloidal aggregates called micelles (Holt's model)",
      "Casein molecules aggregate due to hydrophobic interactions only",
      "Kappa-casein forms micelle core",
      "Lactose acts as cement between caseins"
    ],
    correctAnswer: 0,
    explanation: "Holt's model proposes CCP nanoclusters (~2.5 nm) bind to phosphoseryl clusters on alpha-s1, alpha-s2, and beta-caseins, creating the internal crosslinked structure of casein micelles with kappa-casein on outer surface.",
    category: "Protein Science"
  },
  {
    question: "In spray freeze drying (SFD) of probiotic dairy cultures, what is the key advantage over conventional spray drying?",
    options: [
      "Preservation of cell membrane integrity and higher viability due to sublimation drying at low temperature (<0°C), avoiding heat and oxidative stress",
      "Faster processing speed",
      "Lower equipment cost",
      "Higher bulk density of powder"
    ],
    correctAnswer: 0,
    explanation: "Spray freeze drying atomizes culture into liquid nitrogen forming frozen droplets that are lyophilized under vacuum. This minimizes thermal and oxidative damage, achieving > 95% cell viability vs ~60-80% in spray drying.",
    category: "Probiotic Technology"
  },
  {
    question: "What is the approximate permeate flux achievable in ceramic microfiltration membranes used for bacteria removal from skim milk at 50°C with 1.4 µm pore size under uniform transmembrane pressure (UTP)?",
    options: ["10 - 20 L/m²/h", "500 - 700 L/m²/h", "5000 L/m²/h", "50,000 L/m²/h"],
    correctAnswer: 1,
    explanation: "Under uniform transmembrane pressure (UTP) conditions at 50°C, 1.4 µm ceramic membranes achieve 500-700 L/m²/h permeate flux for skim milk filtration with minimal protein fouling.",
    category: "Membrane Engineering"
  },
  {
    question: "In the manufacture of Infant Formula, what is the critical Whey Protein to Casein ratio adjusted to mimic human breast milk?",
    options: ["20:80 (as in cow milk)", "60:40 Whey:Casein", "80:20 Whey:Casein", "50:50 Whey:Casein"],
    correctAnswer: 1,
    explanation: "Human breast milk has a 60:40 whey:casein ratio vs. cow milk's 20:80. Infant formula is adjusted to 60:40 by adding alpha-lactalbumin-enriched WPC for better amino acid profile.",
    category: "Infant Nutrition"
  },
  {
    question: "What is the principle of Pulsed Electric Field (PEF) technology applied as non-thermal milk pasteurization?",
    options: [
      "Short high-voltage pulses (25-80 kV/cm) create electroporation of microbial cell membranes, causing irreversible pore formation and cell death at <50°C",
      "Microwave heating to 72°C",
      "UV radiation at 254 nm",
      "High-pressure homogenization at 300 bar"
    ],
    correctAnswer: 0,
    explanation: "PEF applies microsecond pulses at 25-80 kV/cm causing dielectric breakdown of microbial membranes (electroporation), achieving 5-6 log reduction while preserving heat-labile nutrients and fresh flavor.",
    category: "Novel Processing"
  },
  {
    question: "Which advanced High-Pressure Processing (HPP) condition is used for cold pasteurization of dairy beverages without heat?",
    options: ["100-200 MPa for 5 min", "400-600 MPa (4000-6000 bar) for 2-5 minutes at <20°C", "1000 MPa for 1 second", "50 MPa for 30 minutes"],
    correctAnswer: 1,
    explanation: "HPP at 400-600 MPa applied isostatically inactivates vegetative cells by disrupting cell membranes and denaturing proteins without heat, preserving color, flavor and heat-labile vitamins.",
    category: "Novel Processing"
  },
  {
    question: "What is the water activity (aw) of Sweetened Condensed Milk, and how does added sucrose contribute to its preservation?",
    options: [
      "aw ≈ 0.83; high sucrose concentration (44-45%) reduces aw via osmotic effect, inhibiting most pathogens and spoilage organisms",
      "aw ≈ 0.99, preserved by heat only",
      "aw ≈ 0.50, same preservation as milk powder",
      "aw ≈ 0.20, preserved by freeze-drying"
    ],
    correctAnswer: 0,
    explanation: "SCM has aw ~0.83 due to 44-45% sucrose creating high osmotic pressure (plasmolysis), inhibiting most bacteria (except osmotolerant yeasts and molds). No further heat sterilization needed after concentration.",
    category: "Preservation Science"
  },
  {
    question: "In Activated Sludge Process (ASP) for dairy effluent treatment, what is the typical BOD loading rate and expected removal efficiency?",
    options: [
      "0.3-0.6 kg BOD/kg MLSS/day with 85-95% BOD removal efficiency",
      "5 kg BOD/kg MLSS/day with 50% removal",
      "0.01 kg BOD/kg MLSS/day with 30% removal",
      "10 kg BOD/kg MLSS/day with 99% removal"
    ],
    correctAnswer: 0,
    explanation: "Conventional ASP for dairy wastewater operates at 0.3-0.6 kg BOD/kg MLSS/day with F:M ratio 0.2-0.5, achieving 85-95% BOD removal. Dairy effluent BOD typically ranges 1500-4000 mg/L.",
    category: "Environmental Engineering"
  },
  {
    question: "What is the theoretical basis for using Inulin (a prebiotic fructooligosaccharide) as a fat replacer in reduced-fat dairy products?",
    options: [
      "Inulin forms a fat-like creamy particle gel network (0.5-2 µm particles) that mimics fat droplet mouthfeel and contributes only 1.5 kcal/g vs fat's 9 kcal/g",
      "Inulin dissolves all fat in milk",
      "Inulin acts as emulsifier only",
      "Inulin increases fat content"
    ],
    correctAnswer: 0,
    explanation: "When dispersed in water, inulin (DP > 10) self-assembles into submicron gel particles mimicking fat globule lubrication and creaminess (tribological effect) at only 1.5 kcal/g, reducing caloric content significantly.",
    category: "Functional Ingredients"
  },
  {
    question: "In gas chromatography (GC) analysis of milk fatty acid composition, what derivatization step converts triglycerides to volatile fatty acid methyl esters (FAME)?",
    options: [
      "Transesterification with BF3-methanol or NaOCH3 in methanol (acid or base catalyzed methylation)",
      "Saponification with NaOH only",
      "Hydrolysis with water only",
      "Esterification with ethanol"
    ],
    correctAnswer: 0,
    explanation: "FAMEs are prepared by acid-catalyzed (BF3/MeOH) or base-catalyzed (NaOCH3/MeOH) transesterification of milk fat triglycerides for GC-FID analysis of individual fatty acids including short-chain butyric acid.",
    category: "Analytical Chemistry"
  },
  {
    question: "What does a Turbiscan stability analyzer measure in dairy emulsions to detect creaming before visual observation?",
    options: [
      "Backscattering and transmission profiles at multiple heights; decrease in backscattering at bottom and increase at top indicates creaming hours before visual observation",
      "Viscosity changes only",
      "Microbial growth patterns",
      "pH gradient along sample height"
    ],
    correctAnswer: 0,
    explanation: "Turbiscan uses Static Multiple Light Scattering (SMLS); backscattering profiles detect concentration changes due to creaming/sedimentation with sensitivity to 0.1% volume fraction change, predicting shelf-life stability.",
    category: "Analytical Instruments"
  },
  {
    question: "What is the 'Plateau Modulus' (G') significance in oscillatory rheology of set-type yoghurt gels?",
    options: [
      "G' plateau represents elastic storage modulus of protein gel network in linear viscoelastic region (LVR); higher G' = firmer gel",
      "G' plateau indicates viscosity only",
      "G' plateau measures protein denaturation rate",
      "G' plateau quantifies pH of yoghurt"
    ],
    correctAnswer: 0,
    explanation: "In small amplitude oscillatory shear (SAOS) tests, G' (storage modulus) > G'' (loss modulus) confirms gel-like behavior. G' magnitude directly correlates with yoghurt firmness and is affected by SNF content, protein level, and heat treatment intensity.",
    category: "Food Rheology"
  },
  {
    question: "In low-lactose milk, why does the resulting product taste sweeter despite having the same caloric content as regular milk?",
    options: [
      "Glucose and Galactose from lactose hydrolysis have higher sweetness perception (glucose ~74, galactose ~63 relative sweetness) vs lactose at ~16 relative sweetness (sucrose=100)",
      "Lactase enzyme adds sugar molecules",
      "Water activity decreases enhancing sweetness",
      "pH increase causes sweetness perception"
    ],
    correctAnswer: 0,
    explanation: "Lactose has relative sweetness ~16 vs sucrose=100. Upon hydrolysis into equimolar glucose (~74) + galactose (~63), the product tastes sweeter due to monosaccharide sweetness perception despite identical caloric value of 4 kcal/g.",
    category: "Dairy Chemistry"
  },
  {
    question: "What is the electrokinetic zeta potential (ζ) range of stable casein micelles in fresh milk, and why does it matter for stability?",
    options: [
      "ζ = -20 to -30 mV; negative zeta potential provides electrostatic repulsion preventing micelle aggregation. Values approaching 0 mV indicate unstable colloid prone to coagulation.",
      "ζ = +50 mV indicating positive charge",
      "ζ = 0 mV (electrically neutral micelles)",
      "ζ = -100 mV extremely high stability"
    ],
    correctAnswer: 0,
    explanation: "Native casein micelles have ζ ≈ -20 to -30 mV due to kappa-casein's glycomacropeptide (GMP) hairs and phosphoseryl groups. Reducing ζ toward 0 mV (by acidification to pH 4.6, Ca²⁺ addition, or chymosin action) triggers aggregation/coagulation.",
    category: "Colloid Science"
  },

  // SET 8: Additional Advanced Questions
  {
    question: "What is the phenomenon of 'Homogenization Cluster' in milk and under what processing condition does it occur?",
    options: [
      "Aggregation of newly formed small fat globules covered with insufficient native MFGM material, sharing casein micelle coatings; occurs at high fat% without 2nd stage homogenization",
      "Formation of large fat crystals during cooling",
      "Protein aggregation during heating",
      "Lactose crystallization in homogenized milk"
    ],
    correctAnswer: 0,
    explanation: "After 1st stage homogenization, newly formed fat globules have insufficient native MFGM to cover increased surface area, so they adsorb casein micelles. Without 2nd stage (50 bar), these casein-bridged globules form clusters causing viscosity increase.",
    category: "Homogenization Science"
  },
  {
    question: "In dairy plant design, what is the 'Fouling Factor' (Rf) used for in heat exchanger sizing calculations?",
    options: [
      "A resistance term (m²K/W) added to overall heat transfer calculation accounting for milk deposit/scale formation on heat transfer surfaces, reducing effective U value over time",
      "A measure of microbial contamination",
      "A factor for calculating overrun in ice cream",
      "A measurement of pump efficiency"
    ],
    correctAnswer: 0,
    explanation: "Fouling factor (Rf) represents thermal resistance of milk deposits (mainly denatured β-Lg at 70-80°C forming mineral-protein fouling). Typical Rf for milk = 5×10⁻⁵ m²K/W, significantly reducing U-value in PHE pasteurizers.",
    category: "Heat Transfer Engineering"
  },
  {
    question: "What is the principle of Sonocrystallization used in dairy fat fractionation?",
    options: [
      "Ultrasound waves (20-100 kHz) create cavitation bubbles acting as nucleation sites, promoting faster and more uniform fat crystal nucleation and smaller crystal size",
      "Sound waves melt all fat crystals",
      "Ultrasound destroys microbial cells in cream",
      "Sonocrystallization increases lactose solubility"
    ],
    correctAnswer: 0,
    explanation: "Ultrasound-induced cavitation creates microscopic pressure waves that enhance nucleation rate, reduce induction time, narrow crystal size distribution, and allow crystallization at higher temperatures for dairy fat fractionation.",
    category: "Crystallization Technology"
  },
  {
    question: "What does the 'Polenske Value' of Ghee specifically measure, and how does it differentiate from RM value?",
    options: [
      "Polenske Value measures steam-volatile water-INSOLUBLE fatty acids (caprylic, capric acid); RM Value measures steam-volatile water-SOLUBLE fatty acids (butyric, caproic). Pure ghee Polenske Value = 1.0-3.5",
      "Polenske Value measures total fat content",
      "Polenske Value and RM Value measure identical fatty acids",
      "Polenske Value measures unsaturated fatty acids"
    ],
    correctAnswer: 0,
    explanation: "Polenske Value (PV) measures volume of 0.1N KOH to neutralize steam-volatile water-insoluble FAs (C8:0, C10:0). Coconut oil has high PV (>14), helping detect coconut oil adulteration in ghee. Pure ghee PV = 1.0-3.5.",
    category: "Ghee Analytics"
  },
  {
    question: "What is the 'Saponification Value' (SV) of pure Ghee and what does a significantly lower value indicate?",
    options: [
      "SV = 220-233 mg KOH/g fat for pure ghee; lower SV indicates adulteration with high molecular weight vegetable oils (e.g., groundnut, mustard oil) containing longer chain fatty acids",
      "SV = 50 mg KOH/g indicates pure ghee",
      "SV = 500 mg KOH/g for pure ghee",
      "SV has no relevance to ghee quality"
    ],
    correctAnswer: 0,
    explanation: "SV measures mg of KOH needed to saponify 1g fat. Ghee's short-chain fatty acids give high SV (220-233). Vegetable oils with long-chain FAs have lower SV (~185-195), so adulteration decreases ghee's SV significantly.",
    category: "Ghee Analytics"
  },
  {
    question: "In the context of dairy powders, what is 'Insolubility Index' (II) and what causes a high II value?",
    options: [
      "Volume (mL) of sediment after reconstitution and centrifugation; high II (>1.0 mL for spray dried powder) indicates excessive heat treatment causing irreversible protein denaturation and poor dispersibility",
      "II measures fat content of powder",
      "II measures moisture content only",
      "II measures bacterial count"
    ],
    correctAnswer: 0,
    explanation: "Insolubility Index measures mL of sediment per 50 mL reconstituted milk after centrifugation. Spray-dried SMP: < 1.0 mL (Extra Grade), < 1.5 mL (Grade 1). High II caused by excessive heat causing whey protein-casein aggregates.",
    category: "Powder Quality"
  },
  {
    question: "What is the significance of 'Free Fat' content measurement in spray-dried whole milk powder?",
    options: [
      "Free fat (non-encapsulated fat on powder surface, 0.5-3%) causes powder wettability problems, clumping, oxidative rancidity during storage; measured by hexane extraction without mechanical disruption",
      "Free fat indicates protein content",
      "Free fat improves powder flowability",
      "Free fat measurement determines moisture content"
    ],
    correctAnswer: 0,
    explanation: "Surface/free fat in WMP is fat that migrated through fractured MFGM to powder surface during drying. High free fat (>3%) causes poor wettability, clumping, rancidity. Measured as hexane-extractable fat without grinding powder.",
    category: "Powder Technology"
  },
  {
    question: "What biochemical mechanism causes 'Sunlight Flavor' or 'Activated Flavor' defect in milk exposed to light?",
    options: [
      "Riboflavin (vitamin B2) acts as photosensitizer generating singlet oxygen (¹O₂) which oxidizes methionine in whey proteins to methional, and oxidizes unsaturated fatty acids causing off-flavors",
      "Direct photolysis of lactose by UV light",
      "Casein denaturation by visible light",
      "Chlorophyll-induced oxidation"
    ],
    correctAnswer: 0,
    explanation: "Riboflavin absorbs light (420-500 nm) becoming excited, transfers energy to O2 forming singlet oxygen (¹O₂) which oxidizes methionine → methional (cabbage/sunlight flavor) and unsaturated FAs → aldehydes/ketones (tallowy flavor).",
    category: "Photo-oxidation"
  },
  {
    question: "What is the function of 'Dipotassium Hydrogen Phosphate' (K2HPO4) added during milk standardization for UHT processing?",
    options: [
      "Stabilizes milk against UHT heat coagulation by buffering pH, supplementing salt balance, and preventing calcium bridging between denatured whey proteins and casein micelles",
      "Acts as sweetener",
      "Increases fat content",
      "Provides probiotic activity"
    ],
    correctAnswer: 0,
    explanation: "K2HPO4 addition before UHT processing stabilizes the colloidal calcium phosphate equilibrium, buffers pH, and prevents excessive calcium bridging between thermally denatured β-Lg and κ-casein that would cause coagulation.",
    category: "UHT Stabilization"
  },
  {
    question: "In cheese making, what is the 'Syneresis' of curd and what factors enhance it during processing?",
    options: [
      "Contraction of casein gel network expelling whey; enhanced by cutting curd finer, increasing temperature (scalding), stirring/agitation, increasing acidity, and adding NaCl",
      "Absorption of whey by curd",
      "Crystallization of lactose in whey",
      "Growth of surface mold on curd"
    ],
    correctAnswer: 0,
    explanation: "Curd syneresis is driven by casein network rearrangement (fusion of para-casein strands) expelling entrapped whey. Rate enhanced by smaller cut size (more surface area), higher temperature (accel. network fusion), lower pH (< 6.0), agitation, and NaCl addition.",
    category: "Cheese Science"
  },
  {
    question: "What is the theoretical explanation for why buffalo milk Ghee has a higher Reichert-Meissl (RM) value than cow milk Ghee?",
    options: [
      "This is incorrect; cow milk Ghee has higher RM value (28-38) than buffalo milk Ghee (26-34) because cow milk fat contains slightly more short-chain volatile fatty acids (butyric, caproic acid)",
      "Buffalo milk has more protein affecting RM value",
      "Buffalo Ghee has higher RM due to more long-chain fatty acids",
      "Both cow and buffalo Ghee have identical RM values"
    ],
    correctAnswer: 0,
    explanation: "Cow milk fat contains ~3.5-4.0% butyric acid (C4:0) vs buffalo milk fat ~3.0-3.5%. Cow ghee RM = 28-38, buffalo ghee RM = 26-34. Pure ghee RM > 28 by FSSAI standards (common minimum for both species).",
    category: "Ghee Chemistry"
  },
  {
    question: "What is the 'Lactose Mutarotation' phenomenon and why is it important in ice cream manufacturing?",
    options: [
      "Interconversion of alpha-lactose (stable, less soluble) and beta-lactose (more soluble) reaching equilibrium ratio of 38:62 (α:β) at 20°C; important because alpha-lactose monohydrate crystals cause sandiness defect",
      "Lactose converting to glucose and galactose spontaneously",
      "Lactose caramelization during pasteurization",
      "Lactose fermentation by starter cultures"
    ],
    correctAnswer: 0,
    explanation: "Mutarotation equilibrium: α-lactose ⇌ β-lactose (ratio 38:62 at 20°C). In ice cream, when concentration exceeds saturation, less-soluble α-lactose monohydrate crystallizes preferentially forming large (>15 µm) hard crystals causing sandiness.",
    category: "Lactose Chemistry"
  },
  {
    question: "What is the principle and dairy application of 'Electrodialysis' membrane technology?",
    options: [
      "Ion-selective membranes with DC electric current drive cation/anion migration; used for whey demineralization (removing 70-90% ash/salts like NaCl, CaCl2, KCl) without removing proteins/lactose",
      "Electrodialysis is used for fat removal from whey",
      "Electrodialysis sterilizes whey using electric current",
      "Electrodialysis concentrates proteins by electric field"
    ],
    correctAnswer: 0,
    explanation: "Electrodialysis alternates cation-exchange and anion-exchange membranes; DC current drives Na+, K+, Ca2+, Cl-, phosphate ions through membranes into brine stream. Achieves 70-90% demineralization of whey for infant formula WPC production.",
    category: "Membrane Technology"
  },
  {
    question: "In dairy plant, what is the purpose of 'Flow Diversion Valve' (FDV) or 'Divert Valve' in HTST pasteurizer system?",
    options: [
      "Automatically diverts under-pasteurized milk back to balance tank if pasteurization temperature falls below critical limit (72°C), preventing unsafe milk from reaching filling machines",
      "Diverts milk to different flavoring tanks",
      "Controls cream separation flow rate",
      "Regulates CIP chemical flow"
    ],
    correctAnswer: 0,
    explanation: "FDV is a safety-critical device controlled by temperature recorder-controller (TRC). If milk temperature < 72°C at holding tube exit, FDV automatically switches to 'forward flow' position to 'divert' position, recycling milk for re-pasteurization.",
    category: "Process Safety"
  },
  {
    question: "What is the 'Colloidal Calcium Phosphate' (CCP) content of bovine milk casein micelles and what happens when it is removed?",
    options: [
      "CCP constitutes ~7% of casein micelle dry weight; removal by acidification (pH 4.6) or EDTA chelation causes micelle dissociation into individual caseins (sub-micelles) as CCP acts as internal crosslinker",
      "CCP is located only on micelle surface",
      "Removing CCP has no effect on micelle structure",
      "CCP removal causes lactose crystallization"
    ],
    correctAnswer: 0,
    explanation: "CCP (~7% dry weight of micelle) forms crosslinks within casein micelles. Acidification to pH < 5.5 solubilizes CCP, releasing calcium and phosphate into serum, weakening inter-casein crosslinks leading to micelle swelling and eventual dissociation.",
    category: "Casein Micelle Science"
  },
  {
    question: "What is the 'Van Slyke Formula' used for in dairy cheese making calculations?",
    options: [
      "Predicts Cheddar cheese yield based on fat and casein content: Yield% = (Fat × 1.09 + Casein × 0.78 - 0.1) / Total Solids × 100",
      "Calculates milk pasteurization time",
      "Determines butter churning efficiency",
      "Measures yoghurt acidity"
    ],
    correctAnswer: 0,
    explanation: "Van Slyke & Price formula predicts theoretical Cheddar yield: Yield = [Fat recovered × F + Casein recovered × C - constant] considering fat-in-DM and moisture targets. Used for expected vs actual yield loss analysis in cheese plants.",
    category: "Cheese Yield Calculation"
  },
  {
    question: "What is 'Lactulose' content in milk and why is it used as a heat treatment marker?",
    options: [
      "Lactulose (galactose-fructose disaccharide formed by isomerization of lactose) is absent in raw milk; forms proportionally to heat treatment intensity; UHT milk contains 100-600 mg/L, pasteurized milk <10 mg/L",
      "Lactulose is a natural component of raw milk at high levels",
      "Lactulose indicates microbial contamination",
      "Lactulose content measures protein denaturation"
    ],
    correctAnswer: 0,
    explanation: "Lactulose forms by Lobry de Bruyn-Alberda van Ekenstein transformation of lactose at alkaline pH and high temperature. Raw milk: 0 mg/L; HTST pasteurized: <10 mg/L; UHT indirect: 100-300 mg/L; UHT direct: 50-150 mg/L; sterilized: 400-1000 mg/L.",
    category: "Heat Treatment Markers"
  },
  {
    question: "What is the function of 'Carrageenan' in chocolate milk and what type of carrageenan is specifically used?",
    options: [
      "Kappa-carrageenan forms weak gel network with casein micelles (via electrostatic interaction with positive patches on casein) preventing cocoa particle sedimentation at very low concentration (0.01-0.025%)",
      "Lambda-carrageenan is used as thickener at 1% concentration",
      "Carrageenan acts as sweetener replacing sugar",
      "Iota-carrageenan prevents milk fat oxidation"
    ],
    correctAnswer: 0,
    explanation: "Kappa-carrageenan (sulfated galactan from Kappaphycus seaweed) at 0.01-0.025% forms a weak thixotropic gel with casein micelles through electrostatic interaction (negatively charged sulfate groups bind positively charged regions on kappa-casein), suspending cocoa particles.",
    category: "Hydrocolloids in Dairy"
  },
  {
    question: "What is the 'Acid Degree Value' (ADV) test for cream and butter, and what does an elevated value indicate?",
    options: [
      "ADV measures free fatty acids (mEq/100g fat) released by lipase hydrolysis; ADV > 0.4 for cream or >1.1 for butter indicates rancidity/lipolysis; caused by LPL activation through temperature abuse or agitation",
      "ADV measures lactic acid in cream",
      "ADV measures protein denaturation extent",
      "ADV is used to detect antibiotic residues"
    ],
    correctAnswer: 0,
    explanation: "ADV = mEq NaOH per 100g fat to neutralize free fatty acids. Fresh cream ADV < 0.4, butter < 1.1. High ADV indicates lipolytic rancidity from native LPL (activated by cooling-warming cycles, air incorporation) or microbial lipases.",
    category: "Rancidity Testing"
  },
  {
    question: "In the context of milk proteomics, what is the 'Caseinomacropeptide' (CMP) or 'Glycomacropeptide' (GMP) and where does it originate?",
    options: [
      "CMP/GMP is the C-terminal glycopeptide (f106-169) of kappa-casein released into whey after chymosin cleavage of the Phe105-Met106 bond during cheese making; it is the major whey peptide in cheese whey",
      "CMP is a fragment of beta-casein released during pasteurization",
      "GMP is synthesized by starter cultures during fermentation",
      "CMP is a phosphopeptide from alpha-s1 casein hydrolysis"
    ],
    correctAnswer: 0,
    explanation: "Chymosin cleaves κ-casein at Phe105-Met106: para-κ-casein (f1-105) remains in curd, while CMP/GMP (f106-169) releases into whey. GMP contains sialic acid, is unique as it contains no aromatic amino acids (Phe, Tyr, Trp), no histidine. Used in PKU nutrition.",
    category: "Whey Protein Science"
  },
  {
    question: "What is the 'Lactoperoxidase System' (LPS) activation method for raw milk preservation recommended by FAO/WHO for hot climates?",
    options: [
      "Adding 14 ppm sodium thiocyanate + 8.5 ppm H2O2 (from sodium percarbonate) to raw milk at 15-20°C extends keeping quality by 7-8 hours at 30°C by generating bacteriostatic OSCN⁻",
      "Adding 0.1% NaOH to neutralize raw milk acidity",
      "Adding 100 ppm formalin to prevent bacterial growth",
      "Heating milk to 55°C for 30 minutes (thermization)"
    ],
    correctAnswer: 0,
    explanation: "FAO/WHO LPS activation: 14 ppm NaSCN + 8.5 ppm H2O2 (from sodium percarbonate) activates native LP enzyme in milk, generating hypothiocyanite (OSCN⁻) which oxidizes bacterial SH-groups inhibiting glycolysis. Safe, no chemical residues in final product.",
    category: "Raw Milk Preservation"
  }
];
