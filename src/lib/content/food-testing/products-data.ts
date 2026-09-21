import {
  Wheat,
  Cookie,
  UtensilsCrossed,
  GlassWater,
  Bean,
  Drumstick,
  Container as SaltIcon,
  Droplet,
  Flame as ChiliIcon,
  Scale,
  FlaskConical,
  Microscope,
  Award,
  Sparkles,
  ShieldAlert,
  Coffee,
  Fish,
  Egg,
  LucideIcon
} from "lucide-react";

export type FoodCategoryGroup =
  | "🥛 Non-Dairy Cream (NDC) / Whipping Cream"
  | "🌾 Cereal & Grain Products"
  | "🍪 Bakery & Confectionery"
  | "🥫 Processed & Packaged Foods"
  | "🥤 Beverages"
  | "🫘 Pulses, Oil & Spices"
  | "🍗 Meat & Other Products"
  | "🍟 Namkeens & Snacks";

export interface FoodProductItem {
  id: string;
  categoryGroup: FoodCategoryGroup;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  testIds: string[]; // Maps to IDs in FOOD_TESTING_DATABASE
}

export const FOOD_PRODUCT_CATALOG: FoodProductItem[] = [
  // ─────────────────────────────────────────────
  // 1. NON-DAIRY CREAM (NDC) / WHIPPING CREAM
  // ─────────────────────────────────────────────
  {
    id: "prod-ndc-master",
    categoryGroup: "🥛 Non-Dairy Cream (NDC) / Whipping Cream",
    title: "Non-Dairy Cream (NDC) & Whipping Topping (Master Battery)",
    subtitle: "22 SOPs: Overrun %, Whip Time, Fat (Mojonnier), FFA, PV, SFC NMR, Emulsifiers, WPNI & Micro",
    description: "Comprehensive testing battery for Non-Dairy Cream (NDC), bakery whipping toppings, and vegetable fat creams per IS 1224, AOCS, ISO & FSSAI standards.",
    icon: Droplet,
    colorClass: "text-indigo-700",
    bgClass: "bg-indigo-50 hover:bg-indigo-100",
    borderClass: "border-indigo-300 hover:border-indigo-500",
    testIds: [
      "ndc-test-1",
      "ndc-test-2",
      "ndc-test-3",
      "ndc-test-4",
      "ndc-test-5",
      "ndc-test-6",
      "ndc-test-7",
      "ndc-test-8",
      "ndc-test-9",
      "ndc-test-10",
      "ndc-test-11",
      "ndc-test-12",
      "ndc-test-13",
      "ndc-test-14",
      "ndc-test-15",
      "ndc-test-16",
      "ndc-test-17",
      "ndc-test-18",
      "ndc-test-19",
      "ndc-test-20",
      "ndc-test-21",
      "ndc-test-22"
    ]
  },
  {
    id: "prod-ndc-whipping-performance",
    categoryGroup: "🥛 Non-Dairy Cream (NDC) / Whipping Cream",
    title: "Whipping & Physical Rheology Suite",
    subtitle: "Overrun %, Whip Time, Foam Stability, Syneresis & Brookfield Viscosity",
    description: "Physical whipping and structural stability parameters determining foam volume expansion, piping stiffness, and refrigeration drainage.",
    icon: Droplet,
    colorClass: "text-blue-700",
    bgClass: "bg-blue-50 hover:bg-blue-100",
    borderClass: "border-blue-200 hover:border-blue-400",
    testIds: ["ndc-test-7", "ndc-test-8", "ndc-test-11", "ndc-test-12", "ndc-test-13", "ndc-test-14"]
  },
  {
    id: "prod-ndc-lipid-chemistry",
    categoryGroup: "🥛 Non-Dairy Cream (NDC) / Whipping Cream",
    title: "Lipid Chemistry & Oxidation Quality",
    subtitle: "Fat % (Mojonnier), Free Fatty Acids, Peroxide Value, Saponification & Iodine Value",
    description: "Evaluation of fat content, triglyceride purity, unsaturation degree, and hydrolytic/oxidative rancidity development in vegetable fat matrices.",
    icon: FlaskConical,
    colorClass: "text-amber-700",
    bgClass: "bg-amber-50 hover:bg-amber-100",
    borderClass: "border-amber-200 hover:border-amber-400",
    testIds: ["ndc-test-1", "ndc-test-2", "ndc-test-4", "ndc-test-5", "ndc-test-6", "ndc-test-9", "ndc-test-10"]
  },
  {
    id: "prod-ndc-micro-safety",
    categoryGroup: "🥛 Non-Dairy Cream (NDC) / Whipping Cream",
    title: "Emulsifiers, Heat Markers & Microbial Safety",
    subtitle: "Polysorbate/SSL Blend, WPNI, HMF, TPC, Coliforms, Yeast & Mold, Salmonella",
    description: "Assessment of synthetic emulsifier ratios, whey protein denaturation, heat thermal history (HMF), and statutory microbial safety standards.",
    icon: Microscope,
    colorClass: "text-emerald-700",
    bgClass: "bg-emerald-50 hover:bg-emerald-100",
    borderClass: "border-emerald-200 hover:border-emerald-400",
    testIds: ["ndc-test-3", "ndc-test-15", "ndc-test-16", "ndc-test-17", "ndc-test-18", "ndc-test-19", "ndc-test-20", "ndc-test-21", "ndc-test-22"]
  },

  // ─────────────────────────────────────────────
  // 2. CEREAL & GRAIN PRODUCTS
  // ─────────────────────────────────────────────
  {
    id: "prod-cereals-grains-master",
    categoryGroup: "🌾 Cereal & Grain Products",
    title: "Cereals & Grain Products (Universal Battery)",
    subtitle: "18 Universal SOPs: Moisture, Ash, Gluten, Acidity, Farinograph, Toxins & Fortification",
    description: "Exhaustive cross-grain master testing SOP battery for Atta, Maida, Suji, Besan, Rice, Oats, and Poha with scientific factors & standards.",
    icon: Wheat,
    colorClass: "text-amber-800",
    bgClass: "bg-amber-50 hover:bg-amber-100",
    borderClass: "border-amber-300 hover:border-amber-500",
    testIds: [
      "cereal-phys-1",
      "cereal-chem-1",
      "cereal-chem-2",
      "cereal-chem-3",
      "cereal-phys-2",
      "cereal-phys-3",
      "cereal-phys-4",
      "cereal-micro-1",
      "cereal-chem-4",
      "cereal-phys-5",
      "cereal-chem-5",
      "cereal-chem-6",
      "cereal-chem-7",
      "cereal-chem-8",
      "cereal-chem-9",
      "cereal-chem-10",
      "cereal-chem-11",
      "cereal-chem-12"
    ]
  },
  {
    id: "prod-atta-flour-suite",
    categoryGroup: "🌾 Cereal & Grain Products",
    title: "Whole Wheat Atta & Chakki Flour Quality",
    subtitle: "Moisture, Ash, AIA, Wet/Dry Gluten, Alcoholic Acidity, Crude Fiber & Iron Fortification",
    description: "Statutory FSSAI & IS 1155 compliance testing suite for whole wheat flour, milling efficiency, and fortification premix validation.",
    icon: Wheat,
    colorClass: "text-amber-700",
    bgClass: "bg-amber-50 hover:bg-amber-100",
    borderClass: "border-amber-200 hover:border-amber-400",
    testIds: ["cereal-phys-1", "cereal-chem-1", "cereal-chem-2", "cereal-chem-3", "cereal-chem-4", "cereal-chem-5", "cereal-chem-11", "cereal-micro-1"]
  },
  {
    id: "prod-maida-suji-suite",
    categoryGroup: "🌾 Cereal & Grain Products",
    title: "Maida & Suji Semolina Rheology",
    subtitle: "Gluten Index, Falling Number, Farinograph Dough Stability, Sedimentation & Starch Damage",
    description: "Baking flour functionality, alpha-amylase activity, water absorption index, and mechanical dough development evaluation per ICC/AACC standards.",
    icon: Scale,
    colorClass: "text-yellow-700",
    bgClass: "bg-yellow-50 hover:bg-yellow-100",
    borderClass: "border-yellow-200 hover:border-yellow-400",
    testIds: ["cereal-phys-1", "cereal-chem-1", "cereal-chem-3", "cereal-phys-2", "cereal-phys-3", "cereal-phys-4", "cereal-chem-6", "cereal-chem-12"]
  },
  {
    id: "prod-grain-safety-toxins",
    categoryGroup: "🌾 Cereal & Grain Products",
    title: "Grain Safety, Mycotoxins & Residues",
    subtitle: "Aflatoxin B1/B2/G1/G2, Ochratoxin A, Pesticide Residues (GC-MS/MS), Heavy Metals & Besan Purity",
    description: "Food safety contaminant testing for fungal toxins, agrochemical residues, broken rice grading, and adulteration detection in besan.",
    icon: ShieldAlert,
    colorClass: "text-red-700",
    bgClass: "bg-red-50 hover:bg-red-100",
    borderClass: "border-red-200 hover:border-red-400",
    testIds: ["cereal-phys-5", "cereal-chem-7", "cereal-chem-8", "cereal-chem-9", "cereal-chem-10", "cereal-micro-1"]
  },

  // ─────────────────────────────────────────────
  // 3. BAKERY & CONFECTIONERY
  // ─────────────────────────────────────────────
  {
    id: "prod-bakery-confectionery-master",
    categoryGroup: "🍪 Bakery & Confectionery",
    title: "Bakery & Confectionery (Universal Quality Battery)",
    subtitle: "16 Universal SOPs: Moisture, aw, Fat, PV, Sugars, Rope Spores, Salmonella, Sorbates & SO2",
    description: "Exhaustive quality & statutory testing battery for Bread, Biscuits, Cookies, Cakes, Chocolates, and Candies per FSSAI & BIS standards.",
    icon: Cookie,
    colorClass: "text-amber-900",
    bgClass: "bg-amber-50 hover:bg-amber-100",
    borderClass: "border-amber-300 hover:border-amber-500",
    testIds: [
      "bakery-phys-1",
      "bakery-phys-2",
      "bakery-chem-1",
      "bakery-chem-2",
      "bakery-chem-3",
      "bakery-chem-4",
      "bakery-chem-5",
      "bakery-chem-6",
      "bakery-phys-3",
      "bakery-micro-1",
      "bakery-micro-2",
      "bakery-chem-7",
      "bakery-micro-3",
      "bakery-chem-8",
      "bakery-phys-4",
      "bakery-chem-9"
    ]
  },
  {
    id: "prod-bread-rusk",
    categoryGroup: "🍪 Bakery & Confectionery",
    title: "Bread, Buns & Toast Rusk",
    subtitle: "Crumb Moisture, pH, Water Activity (aw), Acid Insoluble Ash & Rope Spoilage",
    description: "Testing commercial white/wheat bread, burger buns, and toast rusks for crumb acidity, moisture, water activity, and rope Bacillus subtilis spores.",
    icon: Cookie,
    colorClass: "text-amber-800",
    bgClass: "bg-amber-50 hover:bg-amber-100",
    borderClass: "border-amber-300 hover:border-amber-500",
    testIds: ["bakery-phys-1", "bakery-phys-2", "bakery-chem-3", "bakery-chem-5", "bakery-micro-1", "bakery-micro-2"]
  },
  {
    id: "prod-biscuit-cookies-wafer",
    categoryGroup: "🍪 Bakery & Confectionery",
    title: "Biscuits, Cookies & Crisp Wafers",
    subtitle: "Moisture, Reducing/Total Sugars, Soxhlet Fat %, Rancidity PV & Salmonella",
    description: "Testing baked biscuits, glucose biscuits, butter cookies, and crisp wafers for fat content, acid value, peroxide value, and pathogenic microflora.",
    icon: Cookie,
    colorClass: "text-orange-800",
    bgClass: "bg-orange-50 hover:bg-orange-100",
    borderClass: "border-orange-300 hover:border-orange-500",
    testIds: ["bakery-phys-1", "bakery-phys-2", "bakery-chem-1", "bakery-chem-2", "bakery-chem-4", "bakery-micro-1", "bakery-micro-2"]
  },
  {
    id: "prod-cake-pastry",
    categoryGroup: "🍪 Bakery & Confectionery",
    title: "Cakes, Muffins & Pastries",
    subtitle: "Crumb Moisture, Sugars, Sorbic Acid / Benzoate, Fat & Yeast/Mold Count",
    description: "Quality testing of sponge cakes, pound cakes, and iced pastries for crumb moisture, invert sugars, chemical preservatives, and fungal stability.",
    icon: Cookie,
    colorClass: "text-rose-700",
    bgClass: "bg-rose-50 hover:bg-rose-100",
    borderClass: "border-rose-200 hover:border-rose-400",
    testIds: ["bakery-phys-1", "bakery-phys-2", "bakery-chem-1", "bakery-chem-2", "bakery-chem-5", "bakery-chem-7", "bakery-micro-1", "bakery-micro-2"]
  },
  {
    id: "prod-chocolate-candy-toffee",
    categoryGroup: "🍪 Bakery & Confectionery",
    title: "Chocolates, Cocoa & Sugar Candies",
    subtitle: "Total Sugars, Ash Alkalinity, Aflatoxin B1, Cocoa Fineness Micrometer & Salmonella in 25g",
    description: "Testing cocoa chocolate bars, milk chocolates, hard-boiled candies, and chewy toffees for ash alkalinity, particle fineness, and Salmonella.",
    icon: Cookie,
    colorClass: "text-purple-800",
    bgClass: "bg-purple-50 hover:bg-purple-100",
    borderClass: "border-purple-200 hover:border-purple-400",
    testIds: ["bakery-chem-1", "bakery-chem-2", "bakery-chem-4", "bakery-chem-6", "bakery-phys-4", "bakery-chem-9", "bakery-micro-1", "bakery-micro-2"]
  },

  // ─────────────────────────────────────────────
  // 4. PROCESSED & PACKAGED FOODS
  // ─────────────────────────────────────────────
  {
    id: "prod-processed-packaged-master",
    categoryGroup: "🥫 Processed & Packaged Foods",
    title: "Processed & Packaged Foods (Master Suite)",
    subtitle: "9 Exhaustive SOPs: °Brix, Acidity, Salt, Lycopene, Howard Mold Count, Bostwick, Seams & Tin",
    description: "Comprehensive testing suite for Tomato Ketchup, Sauces, Pickles, Jams, Canned Retort Foods, and Packaged Goods per FSSAI & BIS regulations.",
    icon: UtensilsCrossed,
    colorClass: "text-rose-800",
    bgClass: "bg-rose-50 hover:bg-rose-100",
    borderClass: "border-rose-300 hover:border-rose-500",
    testIds: [
      "processed-phys-1",
      "processed-chem-1",
      "processed-micro-1",
      "processed-chem-salt",
      "processed-chem-lycopene",
      "processed-micro-hmc",
      "processed-phys-bostwick",
      "processed-phys-seam",
      "processed-chem-tin"
    ]
  },
  {
    id: "prod-ketchup-sauces",
    categoryGroup: "🥫 Processed & Packaged Foods",
    title: "Tomato Ketchup, Puree & Sauces",
    subtitle: "°Brix TSS, Acidity, Salt, Lycopene Spectrophotometry, Howard Mold Count (HMC) & Bostwick",
    description: "Tomato solids verification, color index, microbial mold field percentage, and consistency flow distance testing for tomato products per FSSAI.",
    icon: UtensilsCrossed,
    colorClass: "text-red-700",
    bgClass: "bg-red-50 hover:bg-red-100",
    borderClass: "border-red-200 hover:border-red-400",
    testIds: ["processed-phys-1", "processed-chem-1", "processed-chem-salt", "processed-chem-lycopene", "processed-micro-hmc", "processed-phys-bostwick"]
  },
  {
    id: "prod-pickle-chutney-jams",
    categoryGroup: "🥫 Processed & Packaged Foods",
    title: "Pickles, Chutneys, Jams & Jellies",
    subtitle: "Refractometric Brix, Titratable Acidity, Salt (Mohr) & Microbial Spoilage",
    description: "Sugar concentration, organic acid preservative equilibrium, sodium chloride levels, and shelf-stability checks in acid/sugar preserves.",
    icon: UtensilsCrossed,
    colorClass: "text-amber-700",
    bgClass: "bg-amber-50 hover:bg-amber-100",
    borderClass: "border-amber-200 hover:border-amber-400",
    testIds: ["processed-phys-1", "processed-chem-1", "processed-chem-salt", "processed-micro-1"]
  },
  {
    id: "prod-canned-retort-foods",
    categoryGroup: "🥫 Processed & Packaged Foods",
    title: "Canned Foods & Retort Pouch RTE Meals",
    subtitle: "Commercial Sterility, Can Double Seam Teardown & Dissolved Tin Coating (ICP-OES)",
    description: "Hermetic seal integrity (% overlap, tightness rating), Clostridium botulinum incubation sterility, and container metal migration analysis.",
    icon: UtensilsCrossed,
    colorClass: "text-slate-700",
    bgClass: "bg-slate-50 hover:bg-slate-100",
    borderClass: "border-slate-200 hover:border-slate-400",
    testIds: ["processed-micro-1", "processed-phys-seam", "processed-chem-tin"]
  },

  // ─────────────────────────────────────────────
  // 5. BEVERAGES
  // ─────────────────────────────────────────────
  {
    id: "prod-beverages-master",
    categoryGroup: "🥤 Beverages",
    title: "Beverages & Packaged Drinking Water (Master Battery)",
    subtitle: "22 SOPs: TDS, Turbidity, °Brix, CO2 Vol, Caffeine, Sweeteners, Preservatives, Micro & Metals",
    description: "Exhaustive statutory testing protocols for Packaged Drinking Water, Mineral Water, Carbonated Soft Drinks, Juices, Energy Drinks, Tea and Coffee.",
    icon: GlassWater,
    colorClass: "text-cyan-800",
    bgClass: "bg-cyan-50 hover:bg-cyan-100",
    borderClass: "border-cyan-300 hover:border-cyan-500",
    testIds: [
      "bev-phys-1",
      "bev-chem-1",
      "bev-micro-1",
      "bev-chem-2",
      "bev-chem-3",
      "bev-chem-4",
      "bev-phys-2",
      "bev-chem-5",
      "bev-micro-2",
      "bev-chem-6",
      "bev-chem-7",
      "bev-phys-3",
      "bev-chem-8",
      "bev-chem-9",
      "bev-micro-3",
      "bev-chem-10",
      "bev-phys-4",
      "bev-chem-11",
      "bev-phys-5",
      "bev-chem-12",
      "bev-micro-4",
      "bev-chem-13"
    ]
  },
  {
    id: "prod-packaged-water",
    categoryGroup: "🥤 Beverages",
    title: "Packaged Drinking Water & Natural Mineral Water",
    subtitle: "TDS, Turbidity, Coliforms, E. coli, Pseudomonas aeruginosa, Heavy Metals (ICP-MS) & Pesticides",
    description: "Rigorous statutory testing per IS 14543 and IS 13428 covering physical clarity, mineral salts, pathogenic bacteria, and trace contaminants.",
    icon: Droplet,
    colorClass: "text-blue-700",
    bgClass: "bg-blue-50 hover:bg-blue-100",
    borderClass: "border-blue-200 hover:border-blue-400",
    testIds: ["bev-phys-1", "bev-chem-1", "bev-micro-1", "bev-phys-3", "bev-chem-7", "bev-chem-8", "bev-chem-9", "bev-micro-3", "bev-chem-13"]
  },
  {
    id: "prod-carbonated-soft-drinks",
    categoryGroup: "🥤 Beverages",
    title: "Carbonated Soft Drinks (CSD) & Soda",
    subtitle: "Carbonation Volume (Gas Pressure), °Brix, Caffeine HPLC, Artificial Sweeteners & Preservatives",
    description: "CO2 gas volume calculation (temperature/pressure chart), invert syrup solids, intense sweeteners (aspartame, acesulfame-K), and benzoate levels.",
    icon: GlassWater,
    colorClass: "text-sky-700",
    bgClass: "bg-sky-50 hover:bg-sky-100",
    borderClass: "border-sky-200 hover:border-sky-400",
    testIds: ["bev-phys-2", "bev-chem-2", "bev-chem-3", "bev-chem-4", "bev-chem-5", "bev-chem-6"]
  },
  {
    id: "prod-fruit-juices-energy-drinks",
    categoryGroup: "🥤 Beverages",
    title: "Fruit Juices, Nectars & Energy Drinks",
    subtitle: "Fruit TSS °Brix, Titratable Acidity, Vitamin C, Taurine HPLC, Yeast/Mold & Alicyclobacillus",
    description: "Authenticity verification of fruit pulp content, ascorbic acid stability, energy drink active ingredients, and thermo-acidophilic spoilage bacteria.",
    icon: GlassWater,
    colorClass: "text-orange-700",
    bgClass: "bg-orange-50 hover:bg-orange-100",
    borderClass: "border-orange-200 hover:border-orange-400",
    testIds: ["bev-chem-2", "bev-chem-3", "bev-chem-10", "bev-chem-11", "bev-micro-2", "bev-micro-4"]
  },
  {
    id: "prod-tea-coffee",
    categoryGroup: "🥤 Beverages",
    title: "Packaged Tea, Roast & Instant Coffee",
    subtitle: "Moisture (Dean & Stark), Total Ash, Water Soluble Extract & Caffeine HPLC",
    description: "Extraction yield, ash alkalinity, moisture evaporation, and natural purine alkaloid quantification in CTC tea and spray-dried coffee.",
    icon: Coffee,
    colorClass: "text-amber-800",
    bgClass: "bg-amber-50 hover:bg-amber-100",
    borderClass: "border-amber-200 hover:border-amber-400",
    testIds: ["bev-phys-4", "bev-phys-5", "bev-chem-12", "bev-chem-3"]
  },

  // ─────────────────────────────────────────────
  // 6. PULSES, OIL & SPICES
  // ─────────────────────────────────────────────
  {
    id: "prod-pulses-oils-spices-master",
    categoryGroup: "🫘 Pulses, Oil & Spices",
    title: "Pulses, Edible Oils & Spices (Universal Battery)",
    subtitle: "11 Exhaustive SOPs: Extraneous Matter, Dean-Stark Moisture, AIA, FFA, PV, IV, SV & Adulteration",
    description: "Master testing battery for Raw & Split Pulses, Edible Vegetable Oils, and Pure Whole/Ground Spices per FSSAI, Agmark & ISO standards.",
    icon: Bean,
    colorClass: "text-yellow-800",
    bgClass: "bg-yellow-50 hover:bg-yellow-100",
    borderClass: "border-yellow-300 hover:border-yellow-500",
    testIds: [
      "spices-phys-1",
      "spices-phys-2",
      "spices-chem-1",
      "oils-chem-1",
      "oils-chem-2",
      "oils-chem-3",
      "oils-chem-4",
      "oils-adulteration-1",
      "spices-adulteration-1",
      "pulses-toxin-1",
      "pulses-mycotoxin-1"
    ]
  },
  {
    id: "prod-dal-pulses",
    categoryGroup: "🫘 Pulses, Oil & Spices",
    title: "Whole & Split Pulses (Dal) Quality",
    subtitle: "Extraneous Matter, Khesari Dal (BOAA Neurotoxin) & Aflatoxin B1/G1 Fluorometry",
    description: "Physical purity grading, toxic Lathyrus sativus adulteration detection via diazo coupling, and storage mycotoxin contamination analysis in pulses.",
    icon: Bean,
    colorClass: "text-amber-700",
    bgClass: "bg-amber-50 hover:bg-amber-100",
    borderClass: "border-amber-200 hover:border-amber-400",
    testIds: ["spices-phys-1", "pulses-toxin-1", "pulses-mycotoxin-1"]
  },
  {
    id: "prod-edible-oils",
    categoryGroup: "🫘 Pulses, Oil & Spices",
    title: "Edible Vegetable Oils (Mustard, Soybean, Groundnut)",
    subtitle: "Free Fatty Acids (FFA), Peroxide Value (PV), Iodine Value (Wijs), Saponification & Argemone/Mineral Oil",
    description: "Hydrolytic rancidity, oxidative peroxides, fatty acid chain length, degree of unsaturation, and toxic adulterant detection in edible cooking oils.",
    icon: Droplet,
    colorClass: "text-yellow-700",
    bgClass: "bg-yellow-50 hover:bg-yellow-100",
    borderClass: "border-yellow-200 hover:border-yellow-400",
    testIds: ["oils-chem-1", "oils-chem-2", "oils-chem-3", "oils-chem-4", "oils-adulteration-1"]
  },
  {
    id: "prod-ground-spices",
    categoryGroup: "🫘 Pulses, Oil & Spices",
    title: "Ground & Whole Spices (Haldi, Mirch, Dhaniya)",
    subtitle: "Toluene Distillation Moisture, Acid Insoluble Ash, Non-Volatile Ether Extract & Lead Chromate / Sudan Dyes",
    description: "Volatile oil preservation moisture, silica contamination AIA, flavor active compounds NVEE, and toxic dye detection in spice powders.",
    icon: ChiliIcon,
    colorClass: "text-orange-700",
    bgClass: "bg-orange-50 hover:bg-orange-100",
    borderClass: "border-orange-200 hover:border-orange-400",
    testIds: ["spices-phys-1", "spices-phys-2", "spices-chem-1", "spices-adulteration-1", "pulses-mycotoxin-1"]
  },

  // ─────────────────────────────────────────────
  // 7. MEAT & OTHER PRODUCTS
  // ─────────────────────────────────────────────
  {
    id: "prod-meat-master-suite",
    categoryGroup: "🍗 Meat & Other Products",
    title: "Meat, Poultry, Fish & Seafood (Master Battery)",
    subtitle: "22 Exhaustive SOPs: TVB-N, TMA-N, Histamine, pH/PSE, WHC, Fat, TBARS, Antibiotics & Pathogens",
    description: "Comprehensive statutory quality and food safety testing battery for fresh chicken, mutton, marine fish, eggs, and processed meats per FSSAI & EC.",
    icon: Drumstick,
    colorClass: "text-rose-900",
    bgClass: "bg-rose-50 hover:bg-rose-100",
    borderClass: "border-rose-300 hover:border-rose-500",
    testIds: [
      "meat-chem-1",
      "meat-chem-2",
      "meat-chem-3",
      "meat-chem-4",
      "meat-chem-5",
      "meat-chem-6",
      "meat-chem-7",
      "meat-phys-1",
      "meat-phys-2",
      "meat-phys-3",
      "meat-chem-8",
      "meat-chem-9",
      "meat-chem-10",
      "meat-chem-11",
      "meat-chem-12",
      "meat-micro-1",
      "meat-micro-2",
      "meat-micro-3",
      "meat-micro-4",
      "meat-micro-5",
      "meat-micro-6",
      "meat-micro-7"
    ]
  },
  {
    id: "prod-chicken-poultry",
    categoryGroup: "🍗 Meat & Other Products",
    title: "Fresh Chicken & Dressed Poultry Meat",
    subtitle: "TVB-N Freshness, Ultimate pH (PSE/DFD), WHC Drip Loss, Moisture-Protein Ratio, TPC & Antibiotics",
    description: "Post-mortem proteolytic spoilage markers, rigor mortis glycolysis defects, muscle water holding capacity, and veterinary drug residue screening.",
    icon: Drumstick,
    colorClass: "text-red-700",
    bgClass: "bg-red-50 hover:bg-red-100",
    borderClass: "border-red-200 hover:border-red-400",
    testIds: ["meat-chem-1", "meat-phys-1", "meat-phys-2", "meat-phys-3", "meat-micro-1", "meat-micro-2", "meat-micro-3", "meat-micro-4", "meat-chem-10"]
  },
  {
    id: "prod-fish-seafood",
    categoryGroup: "🍗 Meat & Other Products",
    title: "Marine Fish, Shrimps & Frozen Seafood",
    subtitle: "TVB-N, Trimethylamine (TMA-N), Histamine HPLC in Pelagic Fish, Heavy Metals (ICP-MS) & Vibrio",
    description: "Marine bacterial amine reduction testing, scombroid poisoning prevention, heavy metal bioaccumulation (mercury, cadmium), and halophilic Vibrio isolation.",
    icon: Fish,
    colorClass: "text-cyan-800",
    bgClass: "bg-cyan-50 hover:bg-cyan-100",
    borderClass: "border-cyan-200 hover:border-cyan-400",
    testIds: ["meat-chem-1", "meat-chem-2", "meat-chem-3", "meat-chem-7", "meat-chem-11", "meat-micro-2", "meat-micro-5"]
  },
  {
    id: "prod-egg-products",
    categoryGroup: "🍗 Meat & Other Products",
    title: "Table Eggs & Liquid Egg Products",
    subtitle: "Haugh Unit Albumen Quality, Eggshell Specific Gravity, TPC & Salmonella enteritidis in 25g",
    description: "Egg freshness micrometer indexing, thick-albumen height measurement, shell pore contamination, and transovarian Salmonella surveillance.",
    icon: Egg,
    colorClass: "text-yellow-700",
    bgClass: "bg-yellow-50 hover:bg-yellow-100",
    borderClass: "border-yellow-200 hover:border-yellow-400",
    testIds: ["meat-phys-3", "meat-micro-1", "meat-micro-3"]
  },
  {
    id: "prod-processed-frozen-meat",
    categoryGroup: "🍗 Meat & Other Products",
    title: "Sausages, Salami, Ham & Processed Canned Meats",
    subtitle: "Weibull-Stoldt Fat %, Bone Fragments, TBARS Rancidity, Sodium Nitrite, Phosphates & Listeria",
    description: "Hydrolyzed lipid quantification, mechanical deboning bone grit determination, secondary oxidation malondialdehyde, curing salts, and Listeria monocytogenes.",
    icon: Drumstick,
    colorClass: "text-rose-800",
    bgClass: "bg-rose-50 hover:bg-rose-100",
    borderClass: "border-rose-200 hover:border-rose-400",
    testIds: ["meat-chem-4", "meat-chem-5", "meat-chem-6", "meat-chem-8", "meat-chem-9", "meat-chem-12", "meat-micro-6"]
  },

  // ─────────────────────────────────────────────
  // 8. NAMKEENS & SNACKS
  // ─────────────────────────────────────────────
  {
    id: "prod-namkeens-master-suite",
    categoryGroup: "🍟 Namkeens & Snacks",
    title: "Namkeens, Chips & Fried Snacks (Master Battery)",
    subtitle: "22 Exhaustive SOPs: Soxhlet Fat, FFA, PV, p-Anisidine, Trans Fat, Salt, aw, TBHQ, Acrylamide & Micro",
    description: "Master quality & regulatory testing battery for Besan Bhujia, Sev, Potato Chips, Extruded Snacks, and Roasted Namkeens per FSSAI & IS 15271.",
    icon: SaltIcon,
    colorClass: "text-orange-800",
    bgClass: "bg-orange-50 hover:bg-orange-100",
    borderClass: "border-orange-300 hover:border-orange-500",
    testIds: [
      "snack-chem-1",
      "snack-chem-2",
      "snack-chem-3",
      "snack-chem-4",
      "snack-phys-1",
      "snack-chem-5",
      "snack-chem-6",
      "snack-chem-7",
      "snack-chem-8",
      "snack-chem-9",
      "snack-chem-10",
      "snack-chem-11",
      "snack-chem-12",
      "snack-chem-13",
      "snack-chem-14",
      "snack-chem-15",
      "snack-phys-2",
      "snack-phys-3",
      "snack-micro-1",
      "snack-micro-2",
      "snack-micro-3",
      "snack-micro-4"
    ]
  },
  {
    id: "prod-bhujia-sev-mixture",
    categoryGroup: "🍟 Namkeens & Snacks",
    title: "Bhujia, Sev, Mixture & Fried Dal Snacks",
    subtitle: "Total Fat % (Soxhlet), Acid Value & FFA, Peroxide Value (PV), Salt Content, Moisture & TBHQ",
    description: "Frying oil absorption, secondary lipid degradation, sodium chloride formulation compliance, and synthetic antioxidant retention in fried namkeens.",
    icon: SaltIcon,
    colorClass: "text-orange-700",
    bgClass: "bg-orange-50 hover:bg-orange-100",
    borderClass: "border-orange-200 hover:border-orange-400",
    testIds: ["snack-chem-1", "snack-chem-2", "snack-chem-3", "snack-chem-5", "snack-chem-6", "snack-chem-8", "snack-chem-9", "snack-micro-1", "snack-micro-3"]
  },
  {
    id: "prod-potato-chips-wafers",
    categoryGroup: "🍟 Namkeens & Snacks",
    title: "Potato Chips, Banana Wafers & Extruded Snacks",
    subtitle: "Total Fat %, Totox Index, Trans Fatty Acids (GC-FID), Acrylamide (LC-MS/MS) & Texture Crispness",
    description: "Testing crispness fracture force via Texture Analyzer, industrial trans fat statutory limits (<2%), and Maillard reaction acrylamide carcinogen levels.",
    icon: SaltIcon,
    colorClass: "text-amber-700",
    bgClass: "bg-amber-50 hover:bg-amber-100",
    borderClass: "border-amber-200 hover:border-amber-400",
    testIds: ["snack-chem-1", "snack-chem-3", "snack-chem-4", "snack-chem-7", "snack-chem-11", "snack-phys-1", "snack-phys-2"]
  },
  {
    id: "prod-roasted-namkeen-nuts",
    categoryGroup: "🍟 Namkeens & Snacks",
    title: "Roasted Namkeens, Makhana & Spiced Nuts",
    subtitle: "Salt Content, Moisture 105°C, Aflatoxins HPLC-FLD, Protein (Kjeldahl), aw & Fungal Microflora",
    description: "Testing dry roasted snacks, spiced peanuts, and foxnuts for water activity stability, roasted protein integrity, and mycotoxin safety.",
    icon: SaltIcon,
    colorClass: "text-yellow-800",
    bgClass: "bg-yellow-50 hover:bg-yellow-100",
    borderClass: "border-yellow-200 hover:border-yellow-400",
    testIds: ["snack-chem-5", "snack-chem-8", "snack-chem-12", "snack-chem-14", "snack-phys-1", "snack-micro-2"]
  }
];
