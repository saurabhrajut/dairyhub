import { FoodTestItem } from "./types";
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
  LucideIcon
} from "lucide-react";

export interface FoodProductItem {
  id: string;
  categoryGroup:
    | "🌾 Cereal & Grain Products"
    | "🍪 Bakery & Confectionery"
    | "🥫 Processed & Packaged Foods"
    | "🥤 Beverages"
    | "🫘 Pulses, Oil & Spices"
    | "🍗 Meat & Other Products"
    | "🍟 Namkeens & Snacks";
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
  // 1. CEREAL & GRAIN PRODUCTS
  {
    id: "prod-wheat-atta-maida",
    categoryGroup: "🌾 Cereal & Grain Products",
    title: "Wheat, Atta & Maida",
    subtitle: "Moisture, Gluten, Acidity, Ash, Zeleny Test, Falling Number & Aflatoxins",
    description: "Comprehensive quality & safety testing of harvested wheat grains, whole wheat Atta, and refined Maida flour.",
    icon: Wheat,
    colorClass: "text-amber-700",
    bgClass: "bg-amber-50 hover:bg-amber-100",
    borderClass: "border-amber-200 hover:border-amber-400",
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
      "cereal-phys-5"
    ]
  },
  {
    id: "prod-suji-semolina",
    categoryGroup: "🌾 Cereal & Grain Products",
    title: "Suji / Semolina",
    subtitle: "Particle Size Sieving, Moisture, Ash, Acidity & Mold Count",
    description: "Sieve particle size analysis, total ash, acidity, and fungal spore safety in durum wheat Suji.",
    icon: Wheat,
    colorClass: "text-amber-600",
    bgClass: "bg-amber-50/70 hover:bg-amber-100/70",
    borderClass: "border-amber-200 hover:border-amber-400",
    testIds: [
      "cereal-phys-1",
      "cereal-chem-2",
      "cereal-chem-3",
      "cereal-phys-4",
      "cereal-micro-1",
      "cereal-chem-4"
    ]
  },
  {
    id: "prod-rice-rice-flour",
    categoryGroup: "🌾 Cereal & Grain Products",
    title: "Rice & Rice Flour",
    subtitle: "Moisture Content, Extraneous Matter, Aflatoxins & Mold Count",
    description: "Testing raw paddy, milled rice grains, and rice flour for moisture stability, broken/weeviled kernels, and storage molds.",
    icon: Wheat,
    colorClass: "text-emerald-700",
    bgClass: "bg-emerald-50 hover:bg-emerald-100",
    borderClass: "border-emerald-200 hover:border-emerald-400",
    testIds: [
      "cereal-phys-1",
      "cereal-chem-3",
      "cereal-micro-1",
      "cereal-chem-4",
      "cereal-phys-5"
    ]
  },
  {
    id: "prod-corn-flour-besan",
    categoryGroup: "🌾 Cereal & Grain Products",
    title: "Corn Flour & Besan (Gram Flour)",
    subtitle: "Moisture Content, Alcoholic Acidity, Ash, Aflatoxins & Mold",
    description: "Testing chickpea Besan and maize Corn Flour for lipolytic acidity, total ash, and fungal aflatoxins.",
    icon: Wheat,
    colorClass: "text-yellow-700",
    bgClass: "bg-yellow-50 hover:bg-yellow-100",
    borderClass: "border-yellow-200 hover:border-yellow-400",
    testIds: [
      "cereal-phys-1",
      "cereal-chem-2",
      "cereal-chem-3",
      "cereal-phys-4",
      "cereal-micro-1",
      "cereal-chem-4"
    ]
  },
  {
    id: "prod-oats-poha",
    categoryGroup: "🌾 Cereal & Grain Products",
    title: "Oats & Poha (Flattened Rice)",
    subtitle: "Moisture Content, Extraneous Debris & Fungal Spore Count",
    description: "Safety evaluation of processed breakfast cereal oats and flattened rice poha flakes for moisture and mold contamination.",
    icon: Wheat,
    colorClass: "text-orange-700",
    bgClass: "bg-orange-50 hover:bg-orange-100",
    borderClass: "border-orange-200 hover:border-orange-400",
    testIds: [
      "cereal-phys-1",
      "cereal-micro-1",
      "cereal-chem-4",
      "cereal-phys-5"
    ]
  },

  // 2. BAKERY & CONFECTIONERY
  {
    id: "prod-bread-rusk",
    categoryGroup: "🍪 Bakery & Confectionery",
    title: "Bread & Rusk",
    subtitle: "Crumb Moisture, pH, Water Activity (aw) & Rope Spoilage",
    description: "Testing commercial white/wheat bread and toast rusks for crumb acidity, moisture, water activity, and rope Bacillus spores.",
    icon: Cookie,
    colorClass: "text-amber-800",
    bgClass: "bg-amber-50 hover:bg-amber-100",
    borderClass: "border-amber-300 hover:border-amber-500",
    testIds: ["bakery-phys-1", "bakery-phys-2", "bakery-micro-1", "bakery-micro-2", "bakery-chem-5"]
  },
  {
    id: "prod-biscuit-cookies-wafer",
    categoryGroup: "🍪 Bakery & Confectionery",
    title: "Biscuit, Cookies & Wafer",
    subtitle: "Moisture, Sugars, Soxhlet Fat %, Rancidity PV & Salmonella",
    description: "Testing baked biscuits, butter cookies, and crisp wafers for fat content, acid value, peroxide value, and mycotoxins.",
    icon: Cookie,
    colorClass: "text-orange-800",
    bgClass: "bg-orange-50 hover:bg-orange-100",
    borderClass: "border-orange-300 hover:border-orange-500",
    testIds: ["bakery-phys-1", "bakery-phys-2", "bakery-chem-1", "bakery-chem-2", "bakery-chem-3", "bakery-chem-4", "bakery-micro-1", "bakery-micro-2"]
  },
  {
    id: "prod-cake-pastry",
    categoryGroup: "🍪 Bakery & Confectionery",
    title: "Cake & Pastry",
    subtitle: "Moisture, Sugars, Sorbic Acid, Fat & Mold Count",
    description: "Quality testing of sponge cakes and iced pastries for crumb moisture, sugar invert, preservatives, and mold microflora.",
    icon: Cookie,
    colorClass: "text-rose-700",
    bgClass: "bg-rose-50 hover:bg-rose-100",
    borderClass: "border-rose-200 hover:border-rose-400",
    testIds: ["bakery-phys-1", "bakery-phys-2", "bakery-chem-1", "bakery-chem-2", "bakery-chem-5", "bakery-micro-1", "bakery-micro-2"]
  },
  {
    id: "prod-chocolate-candy-toffee",
    categoryGroup: "🍪 Bakery & Confectionery",
    title: "Chocolate, Candy & Toffee",
    subtitle: "Sugars, Ash Alkalinity, Aflatoxin B1 & Salmonella in 25g",
    description: "Testing cocoa chocolate bars, hardboiled candies, and chewy toffees for ash alkalinity, Aflatoxin B1, and Salmonella.",
    icon: Cookie,
    colorClass: "text-purple-800",
    bgClass: "bg-purple-50 hover:bg-purple-100",
    borderClass: "border-purple-200 hover:border-purple-400",
    testIds: ["bakery-chem-1", "bakery-chem-2", "bakery-chem-4", "bakery-chem-6", "bakery-micro-1", "bakery-micro-2"]
  },

  // 3. PROCESSED & PACKAGED FOODS
  {
    id: "prod-pickle-chutney",
    categoryGroup: "🥫 Processed & Packaged Foods",
    title: "Pickle & Chutney",
    subtitle: "Drained Weight %, Benzoic Acid & Acidity",
    description: "Testing oil and brine pickles, mango chutney, and spicy preserves for drained weight and sodium benzoate.",
    icon: UtensilsCrossed,
    colorClass: "text-emerald-800",
    bgClass: "bg-emerald-50 hover:bg-emerald-100",
    borderClass: "border-emerald-300 hover:border-emerald-500",
    testIds: ["processed-phys-1", "processed-chem-1"]
  },
  {
    id: "prod-jam-jelly",
    categoryGroup: "🥫 Processed & Packaged Foods",
    title: "Jam & Jelly",
    subtitle: "Refractometric °Brix (Min 65°), Benzoic Acid Preservative",
    description: "Testing fruit jams and translucent jellies for minimum °Brix sugar solids, HM pectin gel, and benzoate limits.",
    icon: UtensilsCrossed,
    colorClass: "text-red-700",
    bgClass: "bg-red-50 hover:bg-red-100",
    borderClass: "border-red-200 hover:border-red-400",
    testIds: ["processed-phys-1", "processed-chem-1"]
  },
  {
    id: "prod-ketchup-tomato-sauce",
    categoryGroup: "🥫 Processed & Packaged Foods",
    title: "Ketchup & Tomato Sauce",
    subtitle: "Total Soluble Solids °Brix (Min 25°) & Benzoic Acid (Max 750 ppm)",
    description: "Evaluating tomato ketchup and seasoned sauces for statutory °Brix solids and Sodium Benzoate preservative.",
    icon: UtensilsCrossed,
    colorClass: "text-rose-800",
    bgClass: "bg-rose-50 hover:bg-rose-100",
    borderClass: "border-rose-300 hover:border-rose-500",
    testIds: ["processed-phys-1", "processed-chem-1"]
  },
  {
    id: "prod-mayonnaise",
    categoryGroup: "🥫 Processed & Packaged Foods",
    title: "Mayonnaise & Salad Dressings",
    subtitle: "Benzoic Acid Quantification & Emulsion Stability",
    description: "Chemical preservative and emulsion safety analysis in commercial mayonnaise and salad dressings.",
    icon: UtensilsCrossed,
    colorClass: "text-amber-700",
    bgClass: "bg-amber-50 hover:bg-amber-100",
    borderClass: "border-amber-200 hover:border-amber-400",
    testIds: ["processed-chem-1"]
  },
  {
    id: "prod-canned-rte-food",
    categoryGroup: "🥫 Processed & Packaged Foods",
    title: "Ready-to-Eat Food & Canned Food",
    subtitle: "Commercial Sterility (37°C & 55°C) & Drained Weight",
    description: "Testing retorted pouches and low-acid cans for commercial sterility, seam seal integrity, and Clostridium spores.",
    icon: UtensilsCrossed,
    colorClass: "text-slate-800",
    bgClass: "bg-slate-100 hover:bg-slate-200",
    borderClass: "border-slate-300 hover:border-slate-500",
    testIds: ["processed-phys-1", "processed-micro-1"]
  },
  {
    id: "prod-instant-noodles-pasta-soup",
    categoryGroup: "🥫 Processed & Packaged Foods",
    title: "Instant Noodles, Pasta & Soup",
    subtitle: "Drained Weight, Preservatives & Commercial Sterility",
    description: "Testing dried instant noodles, pasta, and dehydrated soup mixes for moisture, additives, and sterility.",
    icon: UtensilsCrossed,
    colorClass: "text-indigo-700",
    bgClass: "bg-indigo-50 hover:bg-indigo-100",
    borderClass: "border-indigo-200 hover:border-indigo-400",
    testIds: ["processed-phys-1", "processed-chem-1", "processed-micro-1"]
  },

  // 4. BEVERAGES
  {
    id: "prod-packaged-drinking-water",
    categoryGroup: "🥤 Beverages",
    title: "Packaged Drinking Water & Mineral Water",
    subtitle: "TDS, Conductance, Turbidity & Pseudomonas aeruginosa",
    description: "Statutory IS 14543 & IS 13428 testing for mineral TDS, turbidity NTU, and 0.45µm Pseudomonas membrane filter test.",
    icon: GlassWater,
    colorClass: "text-cyan-700",
    bgClass: "bg-cyan-50 hover:bg-cyan-100",
    borderClass: "border-cyan-200 hover:border-cyan-400",
    testIds: ["bev-phys-1", "bev-micro-1"]
  },
  {
    id: "prod-fruit-juice-squash",
    categoryGroup: "🥤 Beverages",
    title: "Fruit Juice, Fruit Drink & Squash",
    subtitle: "TSS °Brix, Titratable Acidity, Yeast & Mold & Preservatives",
    description: "Testing natural fruit juices, nectars, and concentrated squashes for °Brix soluble solids, citric/malic acidity, and yeast microflora.",
    icon: GlassWater,
    colorClass: "text-orange-600",
    bgClass: "bg-orange-50 hover:bg-orange-100",
    borderClass: "border-orange-200 hover:border-orange-400",
    testIds: ["bev-phys-1", "bev-chem-1", "bev-chem-2", "bev-chem-3", "bev-chem-5", "bev-micro-1", "bev-micro-2"]
  },
  {
    id: "prod-soft-drinks-energy-drinks",
    categoryGroup: "🥤 Beverages",
    title: "Carbonated Soft Drink & Energy Drink",
    subtitle: "Caffeine HPLC, CO2 Volumes, Sweeteners & pH",
    description: "Testing CO2 volumes (Zahm-Nagel), Caffeine HPLC (Max 145ppm Cola / 300ppm Energy), artificial sweeteners, and acidity.",
    icon: GlassWater,
    colorClass: "text-purple-700",
    bgClass: "bg-purple-50 hover:bg-purple-100",
    borderClass: "border-purple-200 hover:border-purple-400",
    testIds: ["bev-phys-1", "bev-chem-1", "bev-chem-2", "bev-chem-3", "bev-chem-4", "bev-chem-5"]
  },
  {
    id: "prod-tea-coffee",
    categoryGroup: "🥤 Beverages",
    title: "Tea, Coffee & Alcoholic Beverages",
    subtitle: "Caffeine Content, Alcohol ABV % & Quality Standards",
    description: "Testing tea/coffee caffeine content, and beer, wine, and spirits for Alcohol by Volume (ABV %) via distillation densitometry.",
    icon: GlassWater,
    colorClass: "text-amber-800",
    bgClass: "bg-amber-50 hover:bg-amber-100",
    borderClass: "border-amber-200 hover:border-amber-400",
    testIds: ["bev-phys-1", "bev-chem-1", "bev-phys-2"]
  },

  // 5. PULSES, OIL & SPICES
  {
    id: "prod-dal-pulses",
    categoryGroup: "🫘 Pulses, Oil & Spices",
    title: "Dal & Pulses",
    subtitle: "Extraneous Matter %, Foreign Stones & Damaged Grains",
    description: "Physical purity sorting of split pulses (Toor, Moong, Chana Dal) for inorganic stones and weeviled damaged grains.",
    icon: Bean,
    colorClass: "text-amber-800",
    bgClass: "bg-amber-50 hover:bg-amber-100",
    borderClass: "border-amber-300 hover:border-amber-500",
    testIds: ["spices-phys-1"]
  },
  {
    id: "prod-edible-oil-soybean-groundnut",
    categoryGroup: "🫘 Pulses, Oil & Spices",
    title: "Edible Oil, Soybean & Groundnut Oil",
    subtitle: "Peroxide Value (PV), FFA Acid Value & Mineral Oil",
    description: "Chemical testing of refined soybean, groundnut, and vegetable oils for lipid hydroperoxides and rancidity.",
    icon: Droplet,
    colorClass: "text-yellow-700",
    bgClass: "bg-yellow-50 hover:bg-yellow-100",
    borderClass: "border-yellow-200 hover:border-yellow-400",
    testIds: ["oils-chem-1"]
  },
  {
    id: "prod-mustard-oil",
    categoryGroup: "🫘 Pulses, Oil & Spices",
    title: "Mustard Oil",
    subtitle: "Peroxide Value & Argemone Oil Nitric Acid Test",
    description: "Safety screening of raw and refined mustard oil for toxic Sanguinarine alkaloid from Argemone mexicana seeds.",
    icon: Droplet,
    colorClass: "text-yellow-800",
    bgClass: "bg-yellow-100/70 hover:bg-yellow-100",
    borderClass: "border-yellow-400 hover:border-yellow-600",
    testIds: ["oils-chem-1"]
  },
  {
    id: "prod-turmeric-spices",
    categoryGroup: "🫘 Pulses, Oil & Spices",
    title: "Turmeric & Whole Spices",
    subtitle: "Curcumin Spectrophotometry (425nm) & Extraneous Matter",
    description: "Quantifying bio-active Curcumin polyphenol (Min 2.0%) in turmeric powder and evaluating whole spice physical purity.",
    icon: ChiliIcon,
    colorClass: "text-amber-600",
    bgClass: "bg-amber-50 hover:bg-amber-100",
    borderClass: "border-amber-300 hover:border-amber-500",
    testIds: ["spices-phys-1", "spices-chem-1"]
  },
  {
    id: "prod-chilli-coriander-garam-masala",
    categoryGroup: "🫘 Pulses, Oil & Spices",
    title: "Red Chilli, Coriander & Garam Masala",
    subtitle: "Sudan Dye I-IV TLC Screening & Extraneous Matter",
    description: "Screening red chilli powder for illegal carcinogenic synthetic Sudan dyes via Thin Layer Chromatography.",
    icon: ChiliIcon,
    colorClass: "text-red-700",
    bgClass: "bg-red-50 hover:bg-red-100",
    borderClass: "border-red-200 hover:border-red-400",
    testIds: ["spices-phys-1", "spices-chem-1"]
  },

  // 6. MEAT & OTHER PRODUCTS
  {
    id: "prod-chicken-meat",
    categoryGroup: "🍗 Meat & Other Products",
    title: "Chicken & Fresh Meat",
    subtitle: "TVB-N Volatile Nitrogen, Flesh pH & Listeria monocytogenes",
    description: "Freshness testing of raw chicken and meat via TVB-N steam distillation and zero-tolerance Listeria pathogen screen.",
    icon: Drumstick,
    colorClass: "text-rose-800",
    bgClass: "bg-rose-50 hover:bg-rose-100",
    borderClass: "border-rose-300 hover:border-rose-500",
    testIds: ["meat-phys-1", "meat-micro-1"]
  },
  {
    id: "prod-fish-seafood",
    categoryGroup: "🍗 Meat & Other Products",
    title: "Fish & Seafood",
    subtitle: "TVB-N Trimethylamine, pH & Pathogen Screen",
    description: "Testing marine and freshwater fish for Trimethylamine (TMA) putrefactive breakdown and bacterial safety.",
    icon: Drumstick,
    colorClass: "text-cyan-800",
    bgClass: "bg-cyan-50 hover:bg-cyan-100",
    borderClass: "border-cyan-200 hover:border-cyan-400",
    testIds: ["meat-phys-1", "meat-micro-1"]
  },
  {
    id: "prod-egg-egg-products",
    categoryGroup: "🍗 Meat & Other Products",
    title: "Egg & Egg Products",
    subtitle: "Haugh Unit, Freshness pH & Salmonella Detection",
    description: "Quality evaluation of fresh table eggs and liquid/powdered egg products for Salmonella enteritidis in 25g.",
    icon: Drumstick,
    colorClass: "text-yellow-700",
    bgClass: "bg-yellow-50 hover:bg-yellow-100",
    borderClass: "border-yellow-200 hover:border-yellow-400",
    testIds: ["meat-phys-1", "meat-micro-1"]
  },
  {
    id: "prod-sausage-frozen-meat",
    categoryGroup: "🍗 Meat & Other Products",
    title: "Sausage & Frozen Meat Products",
    subtitle: "TVB-N Volatile Bases & Listeria monocytogenes Screen",
    description: "Microbiological and chemical safety testing of processed sausages, frankfurters, and frozen meat patties.",
    icon: Drumstick,
    colorClass: "text-red-800",
    bgClass: "bg-red-50 hover:bg-red-100",
    borderClass: "border-red-300 hover:border-red-500",
    testIds: ["meat-phys-1", "meat-micro-1"]
  },

  // 7. NAMKEENS & SNACKS
  {
    id: "prod-bhujia-mixture-chanachur",
    categoryGroup: "🍟 Namkeens & Snacks",
    title: "Bhujia & Mixture / Chanachur",
    subtitle: "Total Fat Soxhlet Extraction, Acid Value of Fat & Salt NaCl %",
    description: "Chemical testing of fried besan bhujia and spiced mixture/chanachur for lipid content, frying oil degradation, and salt.",
    icon: SaltIcon,
    colorClass: "text-orange-800",
    bgClass: "bg-orange-50 hover:bg-orange-100",
    borderClass: "border-orange-300 hover:border-orange-500",
    testIds: ["snack-chem-1"]
  },
  {
    id: "prod-potato-chips-fried-snacks",
    categoryGroup: "🍟 Namkeens & Snacks",
    title: "Potato Chips & Fried Snacks",
    subtitle: "Fat %, Acid Value of Frying Oil (Max 2.0) & Salt %",
    description: "Evaluating fried potato chips and extruded fried snacks for acid value of extracted oil and sodium chloride %.",
    icon: SaltIcon,
    colorClass: "text-amber-800",
    bgClass: "bg-amber-50 hover:bg-amber-100",
    borderClass: "border-amber-300 hover:border-amber-500",
    testIds: ["snack-chem-1"]
  },
  {
    id: "prod-roasted-namkeen",
    categoryGroup: "🍟 Namkeens & Snacks",
    title: "Roasted Namkeen",
    subtitle: "Moisture %, Total Fat %, Salt NaCl % & Peroxide Value",
    description: "Quality analysis of non-fried roasted grain namkeens for moisture stability, fat percentage, and salt.",
    icon: SaltIcon,
    colorClass: "text-yellow-800",
    bgClass: "bg-yellow-50 hover:bg-yellow-100",
    borderClass: "border-yellow-200 hover:border-yellow-400",
    testIds: ["snack-chem-1"]
  }
];
