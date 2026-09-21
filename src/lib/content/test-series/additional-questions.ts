import { Question } from "./types";

export const ADDITIONAL_MASTER_QUESTIONS: Omit<Question, "id">[] = [
  {
    question: "In the Gerber method for determining milk fat, what is the specific gravity of the concentrated sulfuric acid required?",
    options: ["1.820 to 1.825 at 20°C", "1.720 to 1.725 at 20°C", "1.900 to 1.910 at 20°C", "1.650 to 1.660 at 20°C"],
    correctAnswer: 0,
    explanation: "Gerber sulfuric acid must have a specific gravity of 1.820 - 1.825 at 20°C (approx 90-91% H2SO4) to digest milk proteins without charring the fat.",
    category: "Dairy Quality Control"
  },
  {
    question: "In Gerber fat testing, what is the exact volume of Isoamyl alcohol (amyl alcohol) pipetted into the butyrometer?",
    options: ["1.0 mL", "0.5 mL", "2.0 mL", "10.0 mL"],
    correctAnswer: 0,
    explanation: "FSSAI and BIS protocols require exactly 1.0 mL of isoamyl alcohol to assist in clear separation of the fat column.",
    category: "Dairy Quality Control"
  },
  {
    question: "What is the Richmond's modified formula for calculating Solids-Not-Fat (SNF) from Fat and Corrected Lactometer Reading (CLR)?",
    options: [
      "SNF% = 0.25 CLR + 0.20 Fat + 0.36",
      "SNF% = 0.25 CLR + 0.25 Fat + 0.14",
      "SNF% = 0.30 CLR + 0.18 Fat + 0.50",
      "SNF% = 0.20 CLR + 0.25 Fat + 0.85"
    ],
    correctAnswer: 0,
    explanation: "Richmond's formula used in India for milk calibrated at 20°C (68°F) or 29°C (84°F) is SNF% = 0.25(CLR) + 0.20(Fat) + 0.36.",
    category: "Dairy Calculations"
  },
  {
    question: "The presence of urea in adulterated milk is detected by yellow color formation using which reagent?",
    options: [
      "p-Dimethylaminobenzaldehyde (DMAB)",
      "Resorcinol reagent",
      "Ferric chloride reagent",
      "Bromothymol blue indicator"
    ],
    correctAnswer: 0,
    explanation: "DMAB (1.6% in ethanol with 10% HCl) reacts with urea to form a distinct yellow to deep yellow colored complex.",
    category: "Adulteration Testing"
  },
  {
    question: "Which test is utilized to detect the presence of neutralizers (sodium hydroxide, carbonates, bicarbonates) in milk?",
    options: ["Rosolic Acid Test", "Hehner Test", "Baudouin Test", "Halphen Test"],
    correctAnswer: 0,
    explanation: "Rosolic acid (0.1% alcoholic solution) produces a rose-red color in the presence of carbonates or bicarbonates, whereas pure milk gives a brownish-orange color.",
    category: "Adulteration Testing"
  },
  {
    question: "The Hehner test is a specific qualitative chemical test used to detect which milk preservative?",
    options: ["Formalin (Formaldehyde)", "Hydrogen Peroxide", "Boric Acid", "Salicylic Acid"],
    correctAnswer: 0,
    explanation: "Hehner test detects formaldehyde by adding concentrated H2SO4 containing traces of FeCl3 to milk; a violet or purple ring at the interface indicates formalin.",
    category: "Adulteration Testing"
  },
  {
    question: "Which test is statutorily used to identify vanaspati adulteration in pure Desi Ghee?",
    options: ["Baudouin Test", "Halphen Test", "Reichert-Meissl Test", "Polenske Test"],
    correctAnswer: 0,
    explanation: "By Government of India mandate, all vanaspati must contain at least 5% sesame oil. The Baudouin test (furfural + concentrated HCl) detects sesamol giving a persistent crimson red color.",
    category: "Ghee & Fats"
  },
  {
    question: "What is the normal Freezing Point Depression range of genuine bovine milk?",
    options: [
      "-0.525°C to -0.550°C (Hortvet scale)",
      "-0.250°C to -0.300°C",
      "-0.700°C to -0.800°C",
      "-0.100°C to -0.150°C"
    ],
    correctAnswer: 0,
    explanation: "Genuine bovine milk has a consistent freezing point depression of -0.525°C to -0.550°C, primarily determined by dissolved lactose and mineral salts.",
    category: "Milk Chemistry"
  },
  {
    question: "Addition of 1% water to pure milk causes the freezing point of milk to:",
    options: [
      "Rise towards 0°C by approximately 0.0055°C",
      "Depress further down by 0.0055°C",
      "Remain unchanged",
      "Drop below -1.0°C"
    ],
    correctAnswer: 0,
    explanation: "Extraneous water dilutes soluble minerals and lactose, raising the freezing point closer to 0°C (approx 0.0055°C rise for each 1% added water).",
    category: "Dairy Physics"
  },
  {
    question: "According to USPHS standards, what is the maximum permissible difference in fat test between top 100 mL and the remaining milk in a quart bottle for properly homogenized milk?",
    options: ["Not more than 10%", "Not more than 5%", "Not more than 20%", "Not more than 1%"],
    correctAnswer: 0,
    explanation: "United States Public Health Service (USPHS) requires that after 48 hours of quiescent storage at 4°C, the top 100 mL fat percentage does not differ by more than 10% from the remainder.",
    category: "Dairy Engineering"
  },
  {
    question: "What is the typical working pressure combination in a standard two-stage milk homogenizer?",
    options: [
      "First stage: 150-200 bar (2000-2500 psi); Second stage: 30-50 bar (500 psi)",
      "First stage: 50 bar; Second stage: 200 bar",
      "First stage: 500 bar; Second stage: 500 bar",
      "First stage: 10 bar; Second stage: 20 bar"
    ],
    correctAnswer: 0,
    explanation: "The first stage utilizes high pressure (150-200 bar) to shear fat globules into sub-micron sizes, while the second stage (35-50 bar) breaks up clumps/clusters.",
    category: "Dairy Engineering"
  },
  {
    question: "In automated Clean-in-Place (CIP) systems for dairy pasteurizers, what is the standard concentration and temperature for Caustic Wash?",
    options: [
      "1.5% to 2.0% NaOH at 70°C to 75°C",
      "5.0% to 10% NaOH at 100°C",
      "0.1% NaOH at 25°C",
      "0.5% NaOH at 40°C"
    ],
    correctAnswer: 0,
    explanation: "Alkali wash dissolves protein and fat deposits using 1.5 - 2.0% caustic soda (sodium hydroxide) recirculated at 70 - 75°C for 20 - 30 minutes.",
    category: "Plant Operations"
  },
  {
    question: "Which acid and concentration is recommended in dairy CIP for dissolving milk stone (calcium phosphate deposits)?",
    options: [
      "0.5% to 1.0% Nitric Acid (HNO3) or Phosphoric Acid at 60°C to 65°C",
      "5.0% Hydrochloric acid at 90°C",
      "10% Acetic acid at 20°C",
      "0.1% Sulfuric acid at 100°C"
    ],
    correctAnswer: 0,
    explanation: "Dilute Nitric acid (0.5-1.0%) or Phosphoric acid at 60-65°C dissolves inorganic mineral scales (milk stone) without pitting stainless steel.",
    category: "Plant Operations"
  },
  {
    question: "What is the primary operational advantage of a Falling Film Evaporator over a Rising Film Evaporator in dairy plants?",
    options: [
      "Shorter residence time (5-15 seconds) and lower temperature difference, minimizing thermal degradation",
      "Higher electrical power consumption",
      "Ability to handle high-viscosity sugar syrups only",
      "Eliminates the need for steam"
    ],
    correctAnswer: 0,
    explanation: "Falling film evaporators operate with a thin falling liquid film under vacuum, providing very short residence time and high heat transfer coefficients.",
    category: "Dairy Engineering"
  },
  {
    question: "In milk spray drying, what are the typical inlet and outlet air temperatures for producing Skim Milk Powder (SMP)?",
    options: [
      "Inlet: 180°C - 210°C; Outlet: 80°C - 95°C",
      "Inlet: 100°C - 110°C; Outlet: 40°C - 50°C",
      "Inlet: 300°C - 350°C; Outlet: 150°C - 180°C",
      "Inlet: 70°C - 80°C; Outlet: 60°C - 65°C"
    ],
    correctAnswer: 0,
    explanation: "Spray dryers typically intake hot air at 180-210°C and exhaust at 80-95°C to control final powder moisture (3.5-4.0%) and preserve protein solubility.",
    category: "Dairy Technology"
  },
  {
    question: "The Wheaten Protein Nitrogen Index (WPNI) is used to classify milk powder based on heat treatment into which categories?",
    options: [
      "High heat (≤1.5 mg/g), Medium heat (1.51-5.99 mg/g), Low heat (≥6.0 mg/g)",
      "High heat (>10 mg/g), Medium heat (5 mg/g), Low heat (<2 mg/g)",
      "Grade A, Grade B, Grade C",
      "Cooked, Pasteurized, Sterilized"
    ],
    correctAnswer: 0,
    explanation: "WPNI measures undenatured whey protein nitrogen in mg/g of powder. Low-heat powder has ≥6.0 mg/g, medium-heat has 1.51-5.99 mg/g, and high-heat has ≤1.5 mg/g.",
    category: "Dairy Chemistry"
  },
  {
    question: "In UHT (Ultra-High Temperature) continuous sterilization of milk, what are the standard processing conditions?",
    options: [
      "135°C to 150°C for 1 to 4 seconds",
      "100°C for 15 minutes",
      "121°C for 30 seconds",
      "85°C for 10 minutes"
    ],
    correctAnswer: 0,
    explanation: "Commercial UHT processing subjects milk to 135-150°C for 1-4 seconds followed by aseptic packaging in multilayer sterile containers.",
    category: "Dairy Processing"
  },
  {
    question: "Which packaging material layer in an aseptic carton (Tetra Pak) provides the absolute barrier against light and oxygen?",
    options: [
      "Aluminum foil (approx. 6.3 microns)",
      "Polyethylene outer layer",
      "Bleached paperboard",
      "MOPP film"
    ],
    correctAnswer: 0,
    explanation: "The ultrathin aluminum foil layer acts as a complete gas, moisture, and light barrier, giving aseptic milk a shelf life of 6-9 months without refrigeration.",
    category: "Food Packaging"
  },
  {
    question: "What is the starter culture combination used for manufacturing authentic Swiss cheese with eyes (holes)?",
    options: [
      "Streptococcus thermophilus, Lactobacillus helveticus, and Propionibacterium freudenreichii",
      "Lactococcus lactis and Leuconostoc",
      "Penicillium roqueforti and Geotrichum",
      "Lactobacillus acidophilus and Bifidobacterium"
    ],
    correctAnswer: 0,
    explanation: "Propionibacterium freudenreichii ferments lactic acid into propionic acid, acetic acid, and CO2 gas, forming the characteristic holes (eyes).",
    category: "Dairy Microbiology"
  },
  {
    question: "What is the starter organism responsible for veins of blue-green mold inside Roquefort and Blue Stilton cheese?",
    options: ["Penicillium roqueforti", "Penicillium camemberti", "Aspergillus oryzae", "Rhizopus oligosporus"],
    correctAnswer: 0,
    explanation: "Penicillium roqueforti is an aerobic mold that produces methyl ketones through lipolysis, creating the intense piquant flavor and blue-green marbling.",
    category: "Dairy Microbiology"
  },
  {
    question: "What is the critical pore size range for Ultrafiltration (UF) membranes used in milk protein standardization and Paneer yield enhancement?",
    options: [
      "0.001 to 0.02 microns (MWCO 1,000 to 100,000 Da)",
      "0.1 to 10 microns",
      "0.0001 to 0.0005 microns",
      "10 to 50 microns"
    ],
    correctAnswer: 0,
    explanation: "UF membranes retain proteins and fat while allowing lactose, minerals, and water to pass into the permeate (MWCO 1-100 kDa).",
    category: "Membrane Technology"
  },
  {
    question: "Which membrane filtration process operates at the highest hydraulic pressure (40 to 80 bar)?",
    options: ["Reverse Osmosis (RO)", "Nanofiltration (NF)", "Ultrafiltration (UF)", "Microfiltration (MF)"],
    correctAnswer: 0,
    explanation: "Reverse Osmosis must overcome the osmotic pressure of milk/whey (approx 7-8 bar) and requires 40-80 bar to dewater liquid milk.",
    category: "Membrane Technology"
  },
  {
    question: "What is the legal maximum moisture content allowed by FSSAI in Table Butter?",
    options: ["16.0% by weight", "20.0% by weight", "12.0% by weight", "25.0% by weight"],
    correctAnswer: 0,
    explanation: "FSSAI standards mandate a maximum of 16.0% moisture and a minimum of 80.0% milk fat in table (salted) butter.",
    category: "FSSAI Standards"
  },
  {
    question: "What is the legal minimum milk fat percentage required by FSSAI for traditional Indian Ghee?",
    options: ["99.5%", "95.0%", "90.0%", "98.0%"],
    correctAnswer: 0,
    explanation: "FSSAI standards stipulate that Ghee must contain not less than 99.5% milk fat and not more than 0.5% moisture.",
    category: "FSSAI Standards"
  },
  {
    question: "Which index measures the low molecular weight volatile water-soluble fatty acids (principally butyric and caproic acids) in ghee?",
    options: ["Reichert-Meissl (RM) Value", "Polenske Value (PV)", "Iodine Value", "Saponification Value"],
    correctAnswer: 0,
    explanation: "RM value is the number of mL of 0.1 N KOH required to neutralize soluble volatile fatty acids distilled from 5 g of fat (ghee RM value is typically 24-32).",
    category: "Fat Chemistry"
  },
  {
    question: "What does the Polenske Value (PV) of a fat quantify?",
    options: [
      "Steam-volatile water-insoluble fatty acids (caprylic and capric acids)",
      "Free fatty acid percentage",
      "Total unsaturation of fatty acids",
      "Non-saponifiable matter"
    ],
    correctAnswer: 0,
    explanation: "Polenske value measures steam-volatile water-insoluble fatty acids dissolved in alcohol (coconut oil has a high PV of 14-18, whereas pure ghee is 1.0-2.0).",
    category: "Fat Chemistry"
  },
  {
    question: "What is the legal definition of Overrun in Frozen Desserts and Ice Cream under Indian Standards?",
    options: [
      "The percentage increase in volume of finished ice cream over the volume of mix used",
      "The percentage decrease in fat content during freezing",
      "The amount of sugar dissolved in water",
      "The melting rate in grams per minute"
    ],
    correctAnswer: 0,
    explanation: "Overrun is the volume of air incorporated into the mix expressed as a percentage of the original liquid mix volume.",
    category: "Ice Cream Technology"
  },
  {
    question: "What is the maximum limit of Aflatoxin M1 permitted by FSSAI in liquid milk?",
    options: ["0.5 µg/kg (0.5 ppb)", "5.0 µg/kg", "10 µg/kg", "0.05 µg/kg"],
    correctAnswer: 0,
    explanation: "FSSAI sets the maximum residual limit (MRL) for Aflatoxin M1 (carcinogenic metabolite of Aflatoxin B1 ingested by lactating animals) at 0.5 µg/kg.",
    category: "Food Safety & Toxicology"
  },
  {
    question: "Which bacterial spore-former is responsible for 'sweet curdling' without significant acid production in pasteurized milk?",
    options: ["Bacillus cereus", "Clostridium perfringens", "Pseudomonas fluorescens", "Lactobacillus plantarum"],
    correctAnswer: 0,
    explanation: "Psychrotrophic Bacillus cereus produces extracellular rennet-like enzymes (chymosin-like protease) that coagulate milk proteins at neutral pH.",
    category: "Dairy Microbiology"
  },
  {
    question: "Which heat-resistant spore-forming thermophilic bacterium is the causative agent of 'flat sour' spoilage in canned evaporated milk?",
    options: ["Geobacillus stearothermophilus", "Clostridium thermosaccharolyticum", "Desulfotomaculum nigrificans", "Bacillus coagulans"],
    correctAnswer: 0,
    explanation: "Geobacillus stearothermophilus ferments carbohydrates producing lactic acid without producing gas, causing cans to sour with flat ends.",
    category: "Food Microbiology"
  },
  {
    question: "What is the thermal processing F0 value defined as?",
    options: [
      "Equivalent minutes of heating at 121.1°C (250°F) assuming a z-value of 10°C",
      "Time to heat the retort to boiling point",
      "Total cold-spot sterilization time in seconds",
      "Decimal reduction temperature in Kelvin"
    ],
    correctAnswer: 0,
    explanation: "F0 is the integrated lethal effect of heat at 121.1°C (250°F) delivering equivalent spore destruction based on z = 10°C (18°F).",
    category: "Thermal Processing"
  },
  {
    question: "For low-acid canned foods (pH > 4.6), what is the minimum required F0 value for 12-D commercial sterility against Clostridium botulinum?",
    options: ["2.52 to 3.0 minutes", "10.0 minutes", "0.5 minutes", "15.0 minutes"],
    correctAnswer: 0,
    explanation: "With D121.1 of C. botulinum = 0.21 minutes, a 12-decimal reduction (12D process) requires F0 = 12 × 0.21 = 2.52 minutes (practically ≥3.0 min).",
    category: "Food Engineering"
  },
  {
    question: "In food dehydration, what does the Critical Moisture Content (X_c) signify?",
    options: [
      "The boundary transition between Constant Rate drying and Falling Rate drying periods",
      "The equilibrium moisture content at 100% RH",
      "The point where all free moisture has evaporated",
      "The moisture content at initial harvest"
    ],
    correctAnswer: 0,
    explanation: "Above X_c, water evaporates from the wet surface at a constant rate; below X_c, internal moisture diffusion limits drying, initiating the falling rate period.",
    category: "Food Engineering"
  },
  {
    question: "Which non-thermal food processing technology subjects packaged food to hydrostatic pressures up to 600 MPa (6000 bar)?",
    options: [
      "High Pressure Processing (HPP) / Pascalization",
      "Pulsed Electric Field (PEF)",
      "Cold Plasma Treatment",
      "Ohmic Heating"
    ],
    correctAnswer: 0,
    explanation: "High Pressure Processing (HPP) inactivates vegetative bacteria and spoilage enzymes instantaneously and uniformly without breaking covalent bonds.",
    category: "Novel Food Processing"
  },
  {
    question: "Which preservation technology relies on the electrical resistance of the food itself to generate volumetric heat when passing AC current?",
    options: ["Ohmic Heating (Joule Heating)", "Microwave heating", "Radiofrequency heating", "Induction heating"],
    correctAnswer: 0,
    explanation: "In Ohmic heating, an alternating electric current passes directly through conductive food, dissipating electrical energy into internal heat instantaneously.",
    category: "Food Engineering"
  },
  {
    question: "In chocolate manufacturing, what is the critical step of continuous shearing and aeration at 50-80°C to develop velvet texture and aroma?",
    options: ["Conching", "Tempering", "Winnowing", "Dutching"],
    correctAnswer: 0,
    explanation: "Conching smears cocoa particles with cocoa butter, volatilizes harsh volatile acids (acetic acid), and produces a smooth mouthfeel.",
    category: "Food Technology"
  },
  {
    question: "Cocoa butter polymorphic Form V (Beta-form) is desired during tempering because:",
    options: [
      "It provides optimal gloss, sharp snap, and melts cleanly at human body temperature (34-35°C)",
      "It melts at room temperature",
      "It prevents fat oxidation permanently",
      "It has the lowest density"
    ],
    correctAnswer: 0,
    explanation: "Beta-5 (Form V) crystals melt between 34-35°C, giving commercial chocolate its signature snap, glossy surface, and resistance to fat bloom.",
    category: "Food Chemistry"
  },
  {
    question: "In pulse processing, the anti-nutritional factor trypsin inhibitor is predominantly inactivated by:",
    options: ["Moist heat treatment (Autoclaving / Cooking)", "Dry milling", "Cold soaking in brine", "Sun drying"],
    correctAnswer: 0,
    explanation: "Kunitz and Bowman-Birk trypsin inhibitors in soybean and pulses are globular proteins that are readily denatured and inactivated by moist thermal processing.",
    category: "Food Nutrition"
  },
  {
    question: "Which enzyme is commercially used to clarify cloudy apple and fruit juices by breaking down colloidal cloud stabilization?",
    options: ["Pectinase (Pectin lyase / Polygalacturonase)", "Amylase", "Cellulase", "Protease"],
    correctAnswer: 0,
    explanation: "Pectin coats positively charged protein cores, stabilizing haze. Pectinase hydrolyzes pectin, allowing electrostatic flocculation and rapid sedimentation.",
    category: "Bioprocess & Food Tech"
  },
  {
    question: "In edible oil refining, what is the primary objective of Degumming?",
    options: [
      "Removal of hydratable and non-hydratable phospholipids (gums)",
      "Removal of free fatty acids",
      "Bleaching of chlorophyll pigments",
      "Deodorization of volatile aldehydes"
    ],
    correctAnswer: 0,
    explanation: "Water or acid degumming hydrates phosphatides (lecithin), converting them into insoluble gums separated by centrifugation.",
    category: "Oil Technology"
  },
  {
    question: "What is the stationary phase principle in High Performance Liquid Chromatography (HPLC) using a C18 column?",
    options: [
      "Reversed-Phase Chromatography (Hydrophobic non-polar stationary phase, polar mobile phase)",
      "Normal-Phase Chromatography (Polar stationary phase)",
      "Size Exclusion Chromatography",
      "Ion Exchange Chromatography"
    ],
    correctAnswer: 0,
    explanation: "Octadecylsilyl (C18) silica particles form a non-polar stationary phase; polar compounds elute first, followed by non-polar analytes.",
    category: "Food Analysis"
  },
  {
    question: "Which method is the international gold standard for determining total crude protein based on nitrogen digestion?",
    options: ["Kjeldahl Method", "Biuret Method", "Bradford Assay", "Lowry Method"],
    correctAnswer: 0,
    explanation: "Kjeldahl method digests organic matter with sulfuric acid and catalyst to convert nitrogen to ammonium sulfate, titrating with acid (Total Protein = N × 6.25, or 6.38 for milk).",
    category: "Food Chemistry"
  },
  {
    question: "What is the conversion factor used to calculate crude protein from nitrogen content in milk and dairy products?",
    options: ["6.38", "6.25", "5.70", "5.95"],
    correctAnswer: 0,
    explanation: "Milk proteins contain 15.67% nitrogen on average; thus the specific conversion factor is 100 / 15.67 = 6.38 (whereas generic foods use 6.25).",
    category: "Dairy Chemistry"
  },
  {
    question: "In bread baking, the two primary gluten proteins that provide elasticity and extensibility to dough are:",
    options: [
      "Glutenin (elasticity) and Gliadin (extensibility/viscosity)",
      "Albumin and Globulin",
      "Casein and Whey",
      "Zein and Oryzenin"
    ],
    correctAnswer: 0,
    explanation: "High-molecular-weight glutenin subunits form disulfide-bonded networks providing elastic dough strength, while monomeric gliadin imparts viscosity and extensibility.",
    category: "Baking Technology"
  },
  {
    question: "Which chemical leavening acid reacts fast with sodium bicarbonate upon initial dough mixing?",
    options: ["Monocalcium Phosphate (MCP)", "Sodium Acid Pyrophosphate (SAPP)", "Sodium Aluminum Sulfate (SAS)", "Glucono Delta-Lactone (GDL)"],
    correctAnswer: 0,
    explanation: "Monocalcium phosphate monohydrate (MCP) is a fast-acting leavening acid that releases approximately 60% of CO2 during bench mixing at room temperature.",
    category: "Baking Technology"
  },
  {
    question: "Which microorganism is commercially cultivated to produce Single Cell Protein (SCP) known as 'Quorn'?",
    options: ["Fusarium venenatum", "Spirulina platensis", "Saccharomyces cerevisiae", "Chlorella vulgaris"],
    correctAnswer: 0,
    explanation: "Quorn mycoprotein is produced by continuous glucose fermentation of the filamentous fungus Fusarium venenatum in airlift fermenters.",
    category: "Biotechnology"
  },
  {
    question: "In downstream processing of recombinant therapeutic proteins, which tag is utilized for Immobilized Metal Affinity Chromatography (IMAC)?",
    options: ["Polyhistidine tag (6xHis tag) binding to Ni2+ or Co2+", "Glutathione-S-Transferase (GST) tag", "FLAG tag", "c-Myc tag"],
    correctAnswer: 0,
    explanation: "Hexahistidine (6xHis) tags coordinate specifically with chelated divalent metal ions (Ni2+ / NTA matrix) and are eluted with imidazole.",
    category: "Biotechnology"
  },
  {
    question: "What is the function of the Sparger in an industrial stirred tank bioreactor?",
    options: [
      "To introduce sterile compressed air or oxygen bubbles into the liquid culture",
      "To mix the liquid mechanically",
      "To prevent vortex formation",
      "To regulate culture temperature"
    ],
    correctAnswer: 0,
    explanation: "A sparger (ring or perforated pipe) disperses air bubbles below the bottom impeller to maximize gas-liquid mass transfer (kLa).",
    category: "Bioprocess Engineering"
  },
  {
    question: "What dimensionless number indicates the ratio of inertial forces to viscous forces in fluid flow?",
    options: ["Reynolds Number (Re)", "Prandtl Number (Pr)", "Nusselt Number (Nu)", "Froude Number (Fr)"],
    correctAnswer: 0,
    explanation: "Reynolds number Re = (rho * v * D) / mu determines whether fluid flow inside pipes or heat exchangers is laminar (Re < 2100) or turbulent (Re > 4000).",
    category: "Food Engineering"
  },
  {
    question: "What is the critical control point (CCP) in milk processing defined under HACCP system?",
    options: [
      "A step at which control can be applied to prevent, eliminate or reduce a food safety hazard to acceptable levels",
      "The storage warehouse dock",
      "The final billing register",
      "Employee uniform inspection"
    ],
    correctAnswer: 0,
    explanation: "Under Codex Alimentarius HACCP, a CCP (e.g. HTST Pasteurization at 72°C for 15s) is a step where control is essential to prevent or eliminate a biological hazard.",
    category: "Food Safety & QA"
  },
  {
    question: "Which food preservative works effectively only in acidic foods (pH < 4.0) because its undissociated form penetrates microbial cell membranes?",
    options: ["Sodium Benzoate", "Sodium Chloride", "Ascorbic Acid", "Calcium Carbonate"],
    correctAnswer: 0,
    explanation: "Benzoic acid has a pKa of 4.2. Below pH 4.0, it remains largely undissociated, crosses bacterial membranes, and acidifies microbial cytoplasm.",
    category: "Food Preservation"
  },
  {
    question: "In edible fat crystallization, what is the chemical mechanism responsible for 'fat bloom' on chocolate surfaces during temperature fluctuations?",
    options: [
      "Transformation of metastable Form V (Beta) crystals into thermodynamically stable Form VI crystals with fat migration to the surface",
      "Sugar dissolving in atmospheric humidity",
      "Complete evaporation of cocoa butter",
      "Reaction of fat with packaging paper"
    ],
    correctAnswer: 0,
    explanation: "Temperature abuse promotes melting and slow recrystallization of cocoa butter into the dull, large-grained Form VI crystal lattice, scattering light as white bloom.",
    category: "Food Science"
  },
  {
    question: "Which milk carbohydrate is a disaccharide consisting of Beta-D-galactose and Beta-D-glucose linked via a Beta(1->4) glycosidic bond?",
    options: ["Lactose", "Sucrose", "Maltose", "Trehalose"],
    correctAnswer: 0,
    explanation: "Lactose (4-O-beta-D-galactopyranosyl-D-glucopyranose) is the predominant carbohydrate in mammalian milk synthesized in the mammary gland.",
    category: "Dairy Chemistry"
  },
  {
    question: "In sensory analysis of food products, what is the minimum number of samples presented to a panelist in a Triangle Difference Test?",
    options: ["Three samples (two identical, one different)", "Two samples", "Four samples", "Five samples"],
    correctAnswer: 0,
    explanation: "In a triangle test (ISO 4120), panelists receive three coded samples simultaneously (two controls, one test) and identify the odd sample (guessing chance = 33.3%).",
    category: "Sensory Evaluation"
  },
  {
    question: "Which pathogen produces an extremely heat-stable enterotoxin that survives boiling for 30 minutes in custard, cream pastries, and dairy foods?",
    options: ["Staphylococcus aureus", "Campylobacter jejuni", "Listeria monocytogenes", "Vibrio parahaemolyticus"],
    correctAnswer: 0,
    explanation: "Staphylococcal enterotoxin B is pre-formed in food and is remarkably heat stable, resisting normal cooking and pasteurization temperatures.",
    category: "Food Microbiology"
  },
  {
    question: "What is the target pathogen of greatest concern in unpasteurized soft cheeses that can grow at refrigeration temperatures (psychrotrophic pathogen)?",
    options: ["Listeria monocytogenes", "Salmonella typhi", "Shigella dysenteriae", "Clostridium botulinum Type E"],
    correctAnswer: 0,
    explanation: "Listeria monocytogenes is a psychrotrophic foodborne pathogen capable of multiplying at 1°C to 4°C, causing severe listeriosis in pregnant and immunocompromised individuals.",
    category: "Food Safety"
  },
  {
    question: "What is the primary indicator organism used in microbiological testing of water and dairy equipment sanitation?",
    options: ["Coliform bacteria (Escherichia coli)", "Pseudomonas putida", "Lactobacillus casei", "Streptomyces"],
    correctAnswer: 0,
    explanation: "Coliforms ferment lactose with acid and gas production at 35°C within 48 hours, serving as standard indicators of fecal contamination and post-processing sanitation failure.",
    category: "Dairy Microbiology"
  },
  {
    question: "What is the purpose of adding starter cultures to Paneer or Chhana whey in traditional sweets manufacturing?",
    options: [
      "Natural biological souring for acidification in subsequent coagulation batches",
      "To produce carbon dioxide gas",
      "To extend color stability",
      "To add vitamin C"
    ],
    correctAnswer: 0,
    explanation: "Aged sour whey relies on lactic acid produced by lactic acid bacteria to achieve the target pH (5.2 - 5.4) for optimum curd precipitation.",
    category: "Traditional Dairy Products"
  },
  {
    question: "Which pigment is responsible for the deep yellow-orange color of cow milk fat and ghee?",
    options: ["Beta-Carotene", "Riboflavin", "Chlorophyll", "Lycopene"],
    correctAnswer: 0,
    explanation: "Cows convert dietary carotenoids incompletely, secreting fat-soluble Beta-carotene directly into milk fat, whereas buffaloes convert it completely into colorless vitamin A.",
    category: "Dairy Chemistry"
  },
  {
    question: "Which water-soluble vitamin gives milk whey its characteristic greenish-yellow fluorescent tint?",
    options: ["Riboflavin (Vitamin B2)", "Thiamine (Vitamin B1)", "Pyridoxine (Vitamin B6)", "Niacin (Vitamin B3)"],
    correctAnswer: 0,
    explanation: "Riboflavin is a water-soluble B-vitamin that remains in the whey during curd syneresis, exhibiting yellow-green fluorescence under light.",
    category: "Dairy Chemistry"
  },
  {
    question: "What is the critical minimum holding time and temperature for batch (LTLT) pasteurization of milk?",
    options: ["63°C for 30 minutes", "72°C for 15 seconds", "60°C for 10 minutes", "80°C for 5 minutes"],
    correctAnswer: 0,
    explanation: "Low-Temperature Long-Time (LTLT) vat pasteurization requires milk to be heated to at least 63°C (145°F) and held for not less than 30 minutes.",
    category: "Dairy Engineering"
  }
];

