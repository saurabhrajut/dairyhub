import { Question } from "./types";

export const ALL_FOOD_QUESTIONS: Omit<Question, "id">[] = [
  // SET 1: Thermal Processing & Food Engineering
  {
    question: "What is the D-value (Decimal Reduction Time) in thermal processing of foods?",
    options: [
      "Time required to destroy 100% of bacterial spores at a given temperature",
      "Time required to reduce the microbial population by 90% (1 log cycle) at a given temperature",
      "Temperature change required to change the D-value by a factor of 10",
      "Time required to heat the food to 121.1°C"
    ],
    correctAnswer: 1,
    explanation: "D-value is the heating time in minutes at a specific constant temperature required to kill 90% (1-log cycle) of the microbial population.",
    category: "Food Engineering"
  },
  {
    question: "Which microorganism is used as the target reference organism for commercial sterility of low-acid canned foods (F0 = 3 minutes)?",
    options: ["Escherichia coli", "Bacillus cereus", "Clostridium botulinum", "Salmonella enterica"],
    correctAnswer: 2,
    explanation: "Clostridium botulinum type A and B spores are the target for commercial sterility (12-D process) in low-acid foods (pH > 4.6).",
    category: "Food Microbiology"
  },
  {
    question: "What is water activity (aw) defined as in food thermodynamics?",
    options: [
      "Percentage of total moisture content",
      "Ratio of vapor pressure of water in food to vapor pressure of pure water at the same temperature",
      "Amount of free water in grams",
      "Ratio of bound water to free water"
    ],
    correctAnswer: 1,
    explanation: "Water activity aw = p / p0, measuring available water for chemical and microbial reactions.",
    category: "Food Chemistry"
  },
  {
    question: "In Modified Atmosphere Packaging (MAP) of fresh produce, what gas composition is typically maintained?",
    options: ["High O2 (80%)", "Low O2 (2-5%), High CO2 (3-5%), Balance N2", "100% CO2", "100% O2"],
    correctAnswer: 1,
    explanation: "Lowering O2 (2-5%) and elevating CO2 (3-5%) slows down produce respiration and Senescence.",
    category: "Food Packaging"
  },
  {
    question: "Which enzyme causes rapid enzymatic browning in cut fruits and vegetables?",
    options: ["Lipoxygenase", "Polyphenol Oxidase (PPO)", "Pectinase", "Amylase"],
    correctAnswer: 1,
    explanation: "Polyphenol Oxidase (PPO) oxidizes phenolic compounds into o-quinones, which polymerize to brown melanin pigments.",
    category: "Food Biochemistry"
  },
  {
    question: "Which preservation method uses high hydrostatic pressure (HPP) (400-600 MPa) to pasteurize food without heat?",
    options: ["Pascalization", "Appertization", "Radappertization", "Tyndallization"],
    correctAnswer: 0,
    explanation: "Pascalization (High Pressure Processing - HPP) inactivates microbes by disrupting non-covalent hydrogen bonds.",
    category: "Food Preservation"
  },

  // SET 2: FSSAI Regulations, QA & Oils
  {
    question: "What is the FSSAI maximum permissible limit for Total Polar Compounds (TPC) in frying oil before discard?",
    options: ["10%", "15%", "25%", "40%"],
    correctAnswer: 2,
    explanation: "FSSAI mandates that repeated frying oil must be discarded when Total Polar Compounds (TPC) exceed 25%.",
    category: "FSSAI Regulations"
  },
  {
    question: "Which chemical value measures initial primary oxidation products (hydroperoxides) in fats and oils?",
    options: ["Acid Value", "Peroxide Value (PV)", "Anisidine Value", "Reichert-Meissl Value"],
    correctAnswer: 1,
    explanation: "Peroxide Value (PV) measures milliequivalents of peroxide per kg of oil, indicating early lipid autoxidation.",
    category: "Oil Chemistry"
  },
  {
    question: "What is the main purpose of adding Sodium Benzoate preservative to acidic fruit juices (pH < 4.0)?",
    options: ["Inhibit yeasts and molds", "Inhibit lactic acid bacteria only", "Prevent fat rancidity", "Enhance sweetness"],
    correctAnswer: 0,
    explanation: "Undissociated benzoic acid molecules penetrate yeast and mold cell walls in acidic media.",
    category: "Food Additives"
  },
  {
    question: "In sugar confectionery, what instrument is used to measure Total Soluble Solids (°Brix) of syrup?",
    options: ["Viscometer", "Refractometer", "Texture Analyzer", "Pycnometer"],
    correctAnswer: 1,
    explanation: "Refractometers measure light refraction angle proportional to dissolved sucrose concentration in °Brix.",
    category: "Quality Control"
  },
  {
    question: "What is the critical control point (CCP) definition in HACCP Food Safety System?",
    options: [
      "Any step in food process",
      "A step at which control can be applied to prevent, eliminate, or reduce a food safety hazard to acceptable levels",
      "Quality inspection of final package",
      "Daily floor washing"
    ],
    correctAnswer: 1,
    explanation: "A CCP is a mandatory process step critical to prevent or eliminate safety hazards.",
    category: "HACCP & Safety"
  },
  {
    question: "Which wheat flour protein fraction gives bread dough its characteristic elasticity and gas retention strength?",
    options: ["Albumin", "Globulin", "Glutenin", "Gliadin"],
    correctAnswer: 2,
    explanation: "Glutenin forms high molecular weight disulfide-bonded polymers responsible for dough elasticity.",
    category: "Cereal Science"
  },

  // SET 3: Grains, Fruits & Advanced Food Tech
  {
    question: "What is the z-value in thermal bacteriology?",
    options: [
      "Temperature change required to change the D-value by a factor of 10 (1 log cycle)",
      "Time in minutes to kill 90% microbes",
      "Activation energy in kJ/mol",
      "Decimal reduction time at 100°C"
    ],
    correctAnswer: 0,
    explanation: "z-value is the temperature increase required to reduce D-value by 90% (1-log cycle). For C. botulinum spores, z ≈ 10°C (18°F).",
    category: "Thermal Processing"
  },
  {
    question: "Which processing operation involves brief steam/water heating of vegetables prior to freezing or canning to inactivate enzymes?",
    options: ["Blanching", "Pasteurization", "Liofilization", "Tyndallization"],
    correctAnswer: 0,
    explanation: "Blanching inactivates spoilage enzymes (Catalase and Peroxidase) preventing flavor and color degradation during frozen storage.",
    category: "Vegetable Processing"
  },
  {
    question: "High Methoxyl (HM) Pectin gelation requires which specific conditions?",
    options: [
      "High Soluble Solids (> 65% sugar) and acidic pH (3.0 - 3.5)",
      "Low sugar and high Calcium ions",
      "Alkaline pH 9.0",
      "Boiling temperature above 120°C"
    ],
    correctAnswer: 0,
    explanation: "HM Pectin (degree of esterification > 50%) requires high soluble solids (> 65% Brix) and low pH (3.0-3.5) to form hydrophobic hydrogen-bonded junction zones.",
    category: "Food Hydrocolloids"
  },
  {
    question: "Which mycotoxin produced by Aspergillus flavus is a potent hepatocarcinogen strictly regulated in peanuts and corn?",
    options: ["Aflatoxin B1", "Patulin", "Ochratoxin A", "Fumonisin"],
    correctAnswer: 0,
    explanation: "Aflatoxin B1 is the most toxic naturally occurring mycotoxin, regulated at max 10-15 ppb in food grains by FSSAI.",
    category: "Food Safety"
  },
  {
    question: "During rice parboiling, what gelatinization phenomenon enhances kernel hardness and milling recovery?",
    options: [
      "Starch gelatinization and migration of water-soluble B-vitamins (Thiamine) into endosperm",
      "Protein degradation",
      "Lipid oxidation",
      "Fermentation"
    ],
    correctAnswer: 0,
    explanation: "Parboiling (soaking, steaming, drying) gelatinizes starch granules, filling internal fissures and driving vitamins into the endosperm core.",
    category: "Cereal Technology"
  },
  {
    question: "What non-thermal technology utilizes high intensity short electric pulses (10-80 kV/cm) for cell membrane electroporation?",
    options: ["Pulsed Electric Field (PEF)", "Ohmic Heating", "Irradiation", "Ultrasonic Extraction"],
    correctAnswer: 0,
    explanation: "PEF induces dielectric breakdown of microbial cell membranes (electroporation) without significant thermal damage.",
    category: "Novel Food Processing"
  },

  // SET 4: Food Additives, Packaging & Fats
  {
    question: "What is the primary function of adding Phosphoric Acid during vegetable oil refining (Degumming)?",
    options: [
      "Convert non-hydratable phosphatides into hydratable gums for removal",
      "Bleach dark pigments",
      "Deodorize volatile fatty acids",
      "Hydrogenate double bonds"
    ],
    correctAnswer: 0,
    explanation: "Phosphoric acid chelates Ca/Mg ions bound to non-hydratable phosphatides (phosphatidic acid), turning them into water-soluble hydratable gums.",
    category: "Edible Oil Refining"
  },
  {
    question: "Which lacquer coating is applied inside tinplate cans used for sulfur-rich foods (e.g. fish, meat, pulses) to prevent black staining?",
    options: ["Epoxy Phenolic / Zinc Oxide enamel (S-lacquer)", "Oleoresinous C-enamel", "Polyethylene film", "Varnish"],
    correctAnswer: 0,
    explanation: "Zinc Oxide in S-lacquer reacts with hydrogen sulfide released during retorting to form white Zinc Sulfide instead of unsightly black Iron Sulfide.",
    category: "Food Packaging"
  },
  {
    question: "What is the legal maximum limit for trans-fatty acids in edible fats and oils enforced by FSSAI?",
    options: ["Not more than 2% by weight", "Not more than 5%", "Not more than 10%", "No limit"],
    correctAnswer: 0,
    explanation: "FSSAI capped trans-fatty acids in all fats and oils to a maximum of 2% by weight.",
    category: "FSSAI Regulations"
  },
  {
    question: "Which instrument measures dough rheological properties such as water absorption, arrival time, and dough stability during mixing?",
    options: ["Farinograph", "Extensograph", "Amylograph", "Alveograph"],
    correctAnswer: 0,
    explanation: "Brabender Farinograph measures resistance of dough to mixing blades, yielding Farinograph Quality Number and absorption capacity.",
    category: "Cereal Rheology"
  },
  {
    question: "What is the primary mechanism of action of Sulfur Dioxide (SO2) / Sodium Metabisulfite in food preservation?",
    options: [
      "Inhibit enzymatic browning, non-enzymatic browning, and microbial growth in fruit pulps & wines",
      "Increase pH",
      "Enhance lipid oxidation",
      "Promote Maillard reaction"
    ],
    correctAnswer: 0,
    explanation: "SO2 forms bisulfite adducts with carbonyl groups, blocking Maillard browning, inactivating PPO, and destroying microbial thiamine/enzymes.",
    category: "Food Preservatives"
  },
  {
    question: "What chemical value measures secondary oxidation products (unsaturated aldehydes) in degraded oils?",
    options: ["p-Anisidine Value (p-AV)", "Peroxide Value", "Reichert-Meissl Value", "Polenske Value"],
    correctAnswer: 0,
    explanation: "p-Anisidine Value measures 2-alkenals and 2,4-dienals forming yellow color with p-anisidine, reflecting past lipid oxidation history.",
    category: "Lipid Chemistry"
  },
  {
    question: "Which pathogen produces a potent, heat-stable emetic enterotoxin (Cereulide) in cooked rice left at room temperature?",
    options: ["Bacillus cereus", "Clostridium perfringens", "Salmonella typhi", "Vibrio cholerae"],
    correctAnswer: 0,
    explanation: "Emetic strains of Bacillus cereus produce Cereulide, a cyclic dodecadepsipeptide resistant to 121°C autoclaving for 90 mins.",
    category: "Foodborne Pathogens"
  },
  {
    question: "What heat treatment classification corresponds to radiation doses between 1 kGy and 10 kGy used to kill non-spore pathogens?",
    options: ["Radicidation", "Radurization", "Radappertization", "Thermoradiation"],
    correctAnswer: 0,
    explanation: "Radicidation (1 - 10 kGy) kills non-spore-forming pathogenic bacteria (Salmonella, Listeria) analogous to pasteurization.",
    category: "Food Irradiation"
  },

  // SET 5: Grand Food Tech Mock & Advanced Chemistry
  {
    question: "What parameter defines the temperature required to reduce the D-value of a microorganism by 90% (1-log cycle)?",
    options: ["z-value", "F-value", "C-value", "Q10 temperature coefficient"],
    correctAnswer: 0,
    explanation: "z-value is the slope reciprocal of the thermal death time curve, representing temperature dependence of microbial inactivation rate.",
    category: "Bacteriology"
  },
  {
    question: "In extrusion cooking, what parameter measures the thermal and mechanical energy input per unit mass of extrudate?",
    options: ["Specific Mechanical Energy (SME)", "Overrun", "Expansion ratio", "Degree of gelatinization"],
    correctAnswer: 0,
    explanation: "SME (in Wh/kg or kJ/kg) quantifies motor power dissipated as viscous dissipation heat into dough inside the extruder barrel.",
    category: "Extrusion Tech"
  },
  {
    question: "What is the water activity (aw) minimum limit below which NO pathogenic or spoilage bacteria can grow?",
    options: ["0.60", "0.75", "0.85", "0.91"],
    correctAnswer: 3,
    explanation: "Most spoilage bacteria require aw ≥ 0.91. Staphylococcus aureus can produce toxin down to aw 0.85 under aerobic conditions.",
    category: "Microbial Kinetics"
  },
  {
    question: "Which food hydrocolloid forms a thermoreversible gel upon cooling with Potassium (K+) ions?",
    options: ["Kappa-Carrageenan", "Sodium Alginate", "Guar Gum", "Xanthan Gum"],
    correctAnswer: 0,
    explanation: "Kappa-carrageenan helices aggregate into rigid gel networks specifically promoted by Potassium (K+) cross-linking.",
    category: "Food Gums"
  },
  {
    question: "What structural modification occurs during Hydrogenation of vegetable oils resulting in high melting trans-fatty acids?",
    options: [
      "Isomerization of cis double bonds to trans spatial configuration",
      "Complete saturation of glycerol backbone",
      "Hydrolysis into free fatty acids",
      "Polymerization of triglycerides"
    ],
    correctAnswer: 0,
    explanation: "Partial hydrogenation over Ni catalyst causes reversible double bond double bond rotation, producing high-melting trans isomers (Elaidic acid).",
    category: "Fat Modification"
  },
  {
    question: "In canned food processing, what type of internal container corrosion produces hydrogen gas build-up without microbial growth?",
    options: ["Hydrogen Swell", "Hard Swell", "Flat Sour", "Stack Burning"],
    correctAnswer: 0,
    explanation: "Hydrogen swell occurs when acid food attacks tinplate iron, releasing H2 gas that bulges can ends while remaining sterile.",
    category: "Canning Defects"
  },
  {
    question: "Which carbohydrate reaction is non-enzymatic, requires amino compounds, and proceeds rapidly at low water activity (aw 0.6 - 0.8)?",
    options: ["Maillard Browning Reaction", "Caramelization", "Enzymatic browning", "Ascorbic acid oxidation"],
    correctAnswer: 0,
    explanation: "Maillard browning peaks at intermediate water activity (aw 0.6-0.8) where reactants are concentrated yet mobile.",
    category: "Food Chemistry"
  },
  {
    question: "What is the primary volatile compound responsible for pungent aroma in mustard oil?",
    options: ["Allyl Isothiocyanate", "Allicin", "Capsaicin", "Piperine"],
    correctAnswer: 0,
    explanation: "Myrosinase enzyme hydrolyzes glucosinolate (Sinigrin) in mustard seeds to produce pungent Allyl Isothiocyanate.",
    category: "Flavor Chemistry"
  }
];
