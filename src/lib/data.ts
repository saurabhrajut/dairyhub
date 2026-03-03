
export const milkStandards = {
  toned: { name: "Toned Milk", fat: 3.0, snf: 8.5, clr: 28 },
  double_toned: { name: "Double Toned Milk", fat: 1.3, snf: 9.0, clr: 29 },
  standardized: { name: "Standardized Milk", fat: 4.5, snf: 8.5, clr: 28 },
  full_cream: { name: "Full Cream Milk", fat: 6.0, snf: 9.0, clr: 29 },
  skimmed_milk: { name: "Skimmed Milk", fat: 0.5, snf: 8.7, clr: 33 },
};

export const snfFormulas: Record<string, { name: string; formulaText: string; calc: (clr: number, fat: number, c?: number) => number; inverse: (snf: number, fat: number, c?: number) => number }> = {
    'isi': { name: 'ISI / BIS (Official)', formulaText: 'SNF % = (CLR/4) + (0.25 * Fat) + 0.44', calc: (clr, fat) => (clr / 4) + (0.25 * fat) + 0.44, inverse: (snf, fat) => (snf - (0.25 * fat) - 0.44) * 4 },
    'richmond': { name: 'Richmond’s Formula', formulaText: 'SNF % = (CLR/4) + (0.21 * Fat) + 0.36', calc: (clr, fat) => (clr / 4) + (0.21 * fat) + 0.36, inverse: (snf, fat) => (snf - (0.21 * fat) - 0.36) * 4 },
    'new_formula': { name: 'New Formula', formulaText: 'SNF % = (CLR/4) + (0.21 * Fat) + 0.29', calc: (clr, fat) => (clr / 4) + (0.21 * fat) + 0.29, inverse: (snf, fat) => (snf - (0.21 * fat) - 0.29) * 4 },
    'cooperative': { name: 'Modified ISI / Cooperative', formulaText: 'SNF % = (CLR/4) + (0.25 * Fat) + 0.14', calc: (clr, fat) => (clr / 4) + (0.25 * fat) + 0.14, inverse: (snf, fat) => (snf - (0.25 * fat) - 0.14) * 4 },
    'dairy_union': { name: 'Simplified Dairy Union', formulaText: 'SNF % = (CLR/4) + (Fat/5) + 0.44', calc: (clr, fat) => (clr / 4) + (fat / 5) + 0.44, inverse: (snf, fat) => (snf - (fat/5) - 0.44) * 4 },
    'punjab_haryana': { name: 'Punjab / Haryana Variation', formulaText: 'SNF % = (CLR/4) + (0.22 * Fat) + 0.36', calc: (clr, fat) => (clr / 4) + (0.22 * fat) + 0.36, inverse: (snf, fat) => (snf - (0.22 * fat) - 0.36) * 4 },
    'andhra': { name: 'Andhra Pradesh Practice', formulaText: 'SNF % = (CLR/4) + (0.21 * Fat) + 0.35', calc: (clr, fat) => (clr / 4) + (0.21 * fat) + 0.35, inverse: (snf, fat) => (snf - (0.21 * fat) - 0.35) * 4 },
    'karnataka_tamil': { name: 'Karnataka / Tamil Nadu Practice', formulaText: 'SNF % = (CLR/4) + (0.25 * Fat) + 0.20', calc: (clr, fat) => (clr / 4) + (0.25 * fat) + 0.20, inverse: (snf, fat) => (snf - (0.25 * fat) - 0.20) * 4 },
    'general': { name: 'General Shortcut (Variable C)', formulaText: 'SNF % = (CLR/4) + (0.25 * Fat) + C', calc: (clr, fat, c = 0.72) => (clr / 4) + (0.25 * fat) + c, inverse: (snf, fat, c = 0.72) => (snf - (0.25 * fat) - c) * 4 },
};

export const componentProps = {
  cream: { fat: 40.0, snf: 5.4 },
  skimmed_milk: { fat: 0.05, snf: 8.8, clr: 34 },
  smp: { fat: 1.0, snf: 95.0, ts: 96.0},
  water: { fat: 0.0, snf: 0.0 },
  milkDensity: 1.03,
};

export const chemicals = {
  acids: {
    h2so4: { name: "Sulphuric Acid (H₂SO₄)", molarMass: 98.07, nFactor: 2, type: "liquid", purity: 98, density: 1.84 },
    hcl: { name: "Hydrochloric Acid (HCl)", molarMass: 36.46, nFactor: 1, type: "liquid", purity: 37, density: 1.18 },
    nitric: { name: 'Nitric Acid (HNO₃)', molarMass: 63.01, nFactor: 1, type: 'liquid', purity: 70, density: 1.42 },
    lactic: { name: "Lactic Acid (C₃H₆O₃)", molarMass: 90.08, nFactor: 1, type: "liquid", purity: 88, density: 1.2 },
    acetic: { name: "Acetic Acid (CH₃COOH)", molarMass: 60.05, nFactor: 1, type: "liquid", purity: 99.8, density: 1.05 },
    phosphoric: { name: 'Phosphoric Acid (H₃PO₄)', molarMass: 98.00, nFactor: 3, type: 'liquid', purity: 85, density: 1.69 },
    formic: { name: 'Formic Acid (CH₂O₂)', molarMass: 46.03, nFactor: 1, type: 'liquid', purity: 85, density: 1.18 },
    perchloric: { name: 'Perchloric Acid (HClO₄)', molarMass: 100.46, nFactor: 1, type: 'liquid', purity: 70, density: 1.67 },
    citric: { name: "Citric Acid (C₆H₈O₇)", molarMass: 192.12, nFactor: 3, type: "solid" },
    oxalic: { name: "Oxalic Acid (C₂H₂O₄·2H₂O)", molarMass: 126.07, nFactor: 2, type: "solid" },
    tartaric: { name: 'Tartaric Acid (C₄H₆O₆)', molarMass: 150.09, nFactor: 2, type: 'solid' },
    malic: { name: 'Malic Acid (C₄H₆O₅)', molarMass: 134.09, nFactor: 2, type: 'solid' },
    boric: { name: 'Boric Acid (H₃BO₃)', molarMass: 61.83, nFactor: 1, type: 'solid' },
    sulfamic: { name: 'Sulfamic Acid (H₃NSO₃)', molarMass: 97.09, nFactor: 1, type: 'solid' },
    benzoic: { name: 'Benzoic Acid (C₇H₆O₂)', molarMass: 122.12, nFactor: 1, type: 'solid' },
    succinic: { name: 'Succinic Acid (C₄H₆O₄)', molarMass: 118.09, nFactor: 2, type: 'solid' },
    ascorbic: { name: 'Ascorbic Acid (C₆H₈O₆)', molarMass: 176.12, nFactor: 2, type: 'solid' }, 
  },
  bases: {
    naoh: { name: "Sodium Hydroxide (NaOH)", molarMass: 40.0, nFactor: 1, type: "solid" },
    koh: { name: "Potassium Hydroxide (KOH)", molarMass: 56.11, nFactor: 1, type: "solid" },
    na2co3: { name: "Sodium Carbonate (Na₂CO₃)", molarMass: 105.99, nFactor: 2, type: "solid" },
    caoh2: { name: 'Calcium Hydroxide (Ca(OH)₂)', molarMass: 74.09, nFactor: 2, type: 'solid' },
    nahco3: { name: 'Sodium Bicarbonate (NaHCO₃)', molarMass: 84.01, nFactor: 1, type: 'solid' },
    nh4oh: { name: "Ammonium Hydroxide (NH₄OH)", molarMass: 35.05, nFactor: 1, type: "liquid", purity: 25, density: 0.91 },
    tris: { name: 'Tris(hydroxymethyl)aminomethane', molarMass: 121.14, nFactor: 1, type: 'solid' },
    na_borate: { name: 'Sodium Borate (Borax)', molarMass: 381.37, nFactor: 2, type: 'solid' },
    na_phosphate_di: { name: 'Disodium Phosphate (Na₂HPO₄)', molarMass: 141.96, nFactor: 2, type: 'solid' },
    na_phosphate_tri: { name: 'Trisodium Phosphate (Na₃PO₄)', molarMass: 163.94, nFactor: 3, type: 'solid' },
    lithium_hydroxide: { name: 'Lithium Hydroxide (LiOH)', molarMass: 23.95, nFactor: 1, type: 'solid' },
    barium_hydroxide: { name: 'Barium Hydroxide (Ba(OH)₂)', molarMass: 171.34, nFactor: 2, type: 'solid' },
    sodium_silicate: { name: 'Sodium Silicate (Na₂SiO₃)', molarMass: 122.06, nFactor: 2, type: 'solid' },
    potassium_carbonate: { name: 'Potassium Carbonate (K₂CO₃)', molarMass: 138.21, nFactor: 2, type: 'solid' },
  },
  other_reagents: {
    sodium_thiosulphate: { name: 'Sodium Thiosulphate (Na₂S₂O₃·5H₂O)', molarMass: 248.18, nFactor: 1, type: 'solid' },
    silver_nitrate: { name: 'Silver Nitrate (AgNO₃)', molarMass: 169.87, nFactor: 1, type: 'solid' },
    edta: { name: 'EDTA Disodium Salt', molarMass: 372.24, nFactor: 2, type: 'solid' },
    potassium_dichromate: { name: 'Potassium Dichromate (K₂Cr₂O₇)', molarMass: 294.18, nFactor: 6, type: 'solid' }, 
    potassium_permanganate: { name: 'Potassium Permanganate (KMnO₄)', molarMass: 158.03, nFactor: 5, type: 'solid' }, 
  },
  indicators: {
    phenolphthalein: { name: "Phenolphthalein", type: "w/v", weight: 1, solvent: "95% ethanol", baseVolume: 100, note: 'Weigh 1g, dissolve in 100mL of 95% ethanol.' },
    'methyl-orange': { name: "Methyl Orange", type: "w/v", weight: 0.1, solvent: "water", baseVolume: 100, note: 'Weigh 0.1g, dissolve in 100mL of water.' },
    murexide: { name: 'Murexide', type: 'w/v', weight: 0.2, solvent: 'ethylene glycol', baseVolume: 100, note: 'Weigh 0.2g, dissolve in 100mL of ethylene glycol. Stable for 6 months.' },
    'kjeldahl-mixed': { name: 'Kjeldahl Mixed Indicator', type: 'mixed', solvent: '95% ethanol', note: 'Dissolve 0.1g Bromocresol Green + 0.02g Methyl Red in 100mL of 95% ethanol.'},

    'thymol-blue-acid': { name: 'Thymol Blue (Acid Range)', type: 'complex_liquid', weight: 0.10, naohVolume: 10.75, baseVolume: 250 },
    'bromophenol-blue': { name: 'Bromophenol Blue', type: 'complex_liquid', weight: 0.10, naohVolume: 7.45, baseVolume: 250 },
    'bromocresol-green': { name: 'Bromocresol Green', type: 'complex_liquid', weight: 0.10, naohVolume: 7.15, baseVolume: 250 },
    'methyl-red': { name: 'Methyl Red', type: 'complex_liquid', weight: 0.10, naohVolume: 18.60, baseVolume: 250 },
    'bromocresol-purple': { name: 'Bromocresol Purple', type: 'complex_liquid', weight: 0.10, naohVolume: 9.25, baseVolume: 250 },
    'bromothymol-blue': { name: 'Bromothymol Blue', type: 'complex_liquid', weight: 0.10, naohVolume: 8.00, baseVolume: 250 },
    'phenol-red': { name: 'Phenol Red', type: 'complex_liquid', weight: 0.10, naohVolume: 14.20, baseVolume: 250 },
    'cresol-red': { name: 'Cresol Red', type: 'complex_liquid', weight: 0.10, naohVolume: 13.10, baseVolume: 250 },
    'thymol-blue-alkaline': { name: 'Thymol Blue (Alkaline Range)', type: 'complex_liquid', weight: 0.10, naohVolume: 10.75, baseVolume: 250 },
    'thymolphthalein': { name: 'Thymolphthalein', type: 'w/v', weight: 0.10, solvent: 'rectified spirit', baseVolume: 100, note: 'Dissolve 0.10gm in 100mL of rectified spirit.' },
    'thymol-violet': { name: 'Thymol Violet', type: 'mixed', note: 'Dissolve 0.10gm of tropaeolin O in 100mL of water. Dissolve 0.04gm of thymolphthalein in 50mL of water. Mix one part of tropaeolin O solution with 4 parts of thymolphthalein solution' }
  },
  primaryStandards: {
    khp: { name: "Potassium Hydrogen Phthalate (KHP)", molarMass: 204.22, nFactor: 1, type: 'base' },
    na2co3_std: { name: "Anhydrous Sodium Carbonate (Na₂CO₃)", molarMass: 105.99, nFactor: 2, type: 'base' },
    oxalic_acid_std: { name: "Oxalic Acid (H₂C₂O₄·2H₂O)", molarMass: 126.07, nFactor: 2, type: 'acid' },
    k2cr2o7_std: { name: "Potassium Dichromate (K₂Cr₂O₇)", molarMass: 294.18, nFactor: 6, type: 'oxidizing' },
  },
  spirits: {
    ethanol: { name: "Ethanol (Ethyl Alcohol)", stockPurity: 95 },
    ipa: { name: "IPA (Isopropyl Alcohol)", stockPurity: 99.9 },
    propanol: { name: 'Propanol', stockPurity: 99.5 },
    methanol: { name: 'Methanol (Methyl Alcohol)', stockPurity: 99.8 }
  },
};

export const funFacts = [
  { q: "Doodh ubalne par upar kyu aata hai? (Why does milk boil over?)", a: "Doodh mein protein (casein aur whey), fat, aur paani hota hai. Jab doodh garam hota hai, to protein aur fat upar ek patli si layer (malai) bana lete hain. Neeche ka paani bhaap (steam) banta hai, lekin ye steam malai ki layer ki vajah se bahar nahi nikal paati. Jab steam ka pressure badhta hai, to woh malai ki layer ko upar utha deta hai, aur doodh ubal kar bahar aa jaata hai." },
  { q: "Paneer banane mein nimbu ya sirka (vinegar) kyu daalte hain? (Why are lemon or vinegar used to make paneer?)", a: "Doodh mein casein naam ka protein hota hai. Nimbu ya sirka (vinegar) acid hote hain. Jab acid doodh mein milaya jaata hai, to yeh doodh ka pH level kam kar deta hai. Isse casein protein aapas mein judkar thos (solid) ho jaata hai, jise hum paneer ya chhena kehte hain. Is process ko 'coagulation' ya 'acid coagulation' kehte hain." },
  { q: "Dahi kaise jamta hai? (How is curd/yogurt formed?)", a: "Dahi jamne ka kaaran bacteria hote hain, jinko 'Lactobacillus' kehte hain. Ye bacteria doodh mein maujood lactose sugar ko khaa kar Lactic Acid banate hain. Ye lactic acid doodh ke casein protein ko jamakar (coagulate) dahi bana deta hai. Is process ko 'fermentation' kehte hain." },
  { q: "Ghee mein vanaspati ki milawat ka test kaise karte hain? (How to test for vanaspati adulteration in ghee?)", a: "Iske liye <strong>Baudouin Test</strong> kiya jaata hai. Ek test tube mein thoda sa pighla hua ghee lein, usme concentrated Hydrochloric Acid (HCl) aur 2% furfural solution (alcohol mein) milayein. Agar 10 minute ke andar gulabi ya laal rang (pink or red color) aata hai, to iska matlab ghee mein vanaspati milaya gaya hai. Shuddh ghee mein koi rang nahi aayega." },
  { q: "Homogenization kya hota hai? (What is Homogenization?)", a: "Homogenization ek mechanical process hai jisme doodh ke bade fat globules (vasa ke kan) ko bahut high pressure par chote-chote tukdo me toda jaata hai. Isse fat doodh me evenly mix ho jaata hai aur upar malai ki layer nahi banti, jisse doodh ka texture smooth ho jaata hai." },
  { q: "Milk pasteurization kya hai aur kyu zaroori hai? (What is milk pasteurization and why is it important?)", a: "Pasteurization ek process hai jisme doodh ko ek specific temperature (jaise 72°C) par 15 second ke liye garam karke turant thanda kar diya jaata hai. Aisa karne se doodh mein maujood hanikarak bacteria (harmful bacteria) mar jaate hain, jisse doodh peene ke liye safe ho jaata hai aur uski shelf life (rakhne ki avadhi) badh jaati hai." },
  { q: "CIP (Cleaning-In-Place) me Kaustic (NaOH) ka kya kaam hai? (What is the role of Caustic in CIP?)", a: "Dairy plant me, CIP ke dauran Sodium Hydroxide (NaOH) ek powerful cleaning agent hai. Yeh equipment ki satah (surface) se chipke hue fat (charbi) aur protein ko saponify aur hydrolyze karke nikal deta hai, jisse machine saaf aur sanitized rehti hai." }
];

// Add these new types/constants to your data.ts file

export const reagentCategoryInfo: Record<string, { label: string; emoji: string; color: string }> = {
    dairy: { label: 'Dairy Testing', emoji: '🥛', color: 'bg-blue-100 text-blue-800 border-blue-300' },
    water: { label: 'Water Testing', emoji: '💧', color: 'bg-cyan-100 text-cyan-800 border-cyan-300' },
    food: { label: 'Food Analysis', emoji: '🍎', color: 'bg-green-100 text-green-800 border-green-300' },
    micro: { label: 'Microbiology', emoji: '🔬', color: 'bg-purple-100 text-purple-800 border-purple-300' },
    standard: { label: 'Standards', emoji: '📏', color: 'bg-amber-100 text-amber-800 border-amber-300' },
    staining: { label: 'Staining', emoji: '🎨', color: 'bg-pink-100 text-pink-800 border-pink-300' },
    buffer: { label: 'Buffers', emoji: '⚗️', color: 'bg-indigo-100 text-indigo-800 border-indigo-300' },
    general: { label: 'General Lab', emoji: '🧫', color: 'bg-gray-100 text-gray-800 border-gray-300' },
  };
  
  export const safetyLevelInfo: Record<string, { label: string; emoji: string; color: string }> = {
    low: { label: 'Low Hazard', emoji: '🟢', color: 'bg-green-100 text-green-800 border-green-400' },
    medium: { label: 'Moderate', emoji: '🟡', color: 'bg-yellow-100 text-yellow-800 border-yellow-400' },
    high: { label: 'High Hazard', emoji: '🟠', color: 'bg-orange-100 text-orange-800 border-orange-400' },
    critical: { label: 'Critical', emoji: '🔴', color: 'bg-red-100 text-red-800 border-red-400' },
  };
  
  // REPLACE your existing reagentRecipes with this complete version:
  export const reagentRecipes: Record<string, {
    name: string;
    testName: string;
    type: 'w/v' | 'v/v' | 'w/v_in_acid' | 'complex' | 'ratio' | 'fixed';
    category: string;
    safetyLevel: string;
    storageInfo?: string;
    shelfLife?: string;
    components: any[];
    instructions: string;
  }> = {
      // ──────────────────────────────────────────
      // 🥛 DAIRY TESTING REAGENTS
      // ──────────────────────────────────────────
      'alcohol_alizarin': {
          name: 'Alcohol Alizarin Reagent (0.2%)',
          testName: 'Alcohol / COB Test',
          type: 'w/v',
          category: 'dairy',
          safetyLevel: 'medium',
          storageInfo: 'Amber bottle, room temperature',
          shelfLife: '6 months',
          components: [{ name: 'Alizarin', amount: 0.2, unit: 'g' }],
          instructions: '0.2g Alizarin ko 100ml 68% Ethyl Alcohol mein gholein. Iska istemal COB test mein hota hai.'
      },
      'amyl_alcohol': {
          name: 'Amyl Alcohol (Isoamyl Alcohol)',
          testName: 'Gerber Fat Test',
          type: 'fixed',
          category: 'dairy',
          safetyLevel: 'medium',
          storageInfo: 'Tightly sealed bottle, cool dry place',
          shelfLife: '12 months',
          components: [],
          instructions: 'Gerber test ke liye pure Isoamyl Alcohol (density 0.811-0.813 g/mL at 20°C) use karein. Har test ke liye 1 mL Amyl Alcohol daalna hota hai butyrometer mein. Yeh reagent scale nahi hota, seedha bottle se use hota hai.'
      },
      'gerber_h2so4': {
          name: 'Gerber Grade Sulphuric Acid (sp.gr. 1.820)',
          testName: 'Gerber Fat Test',
          type: 'fixed',
          category: 'dairy',
          safetyLevel: 'critical',
          storageInfo: 'Acid cabinet, acid-resistant bottle',
          shelfLife: '24 months',
          components: [],
          instructions: 'Gerber test ke liye Specific Gravity 1.820 ± 0.005 wala H₂SO₄ use karein (approx 90-91%). Har test ke liye 10 mL Gerber acid use hota hai. Yeh standard grade acid hai, lab-grade conc. H₂SO₄ se banane ke liye: approximately 90 parts conc. H₂SO₄ (98%) + 10 parts distilled water mix karein (ACID KO PAANI MEIN DAALEIN). Specific gravity hydrometer se check karein.'
      },
      'sodium_citrate_2': {
          name: 'Sodium Citrate Solution (2% w/v)',
          testName: 'Casein / Protein Test',
          type: 'w/v',
          category: 'dairy',
          safetyLevel: 'low',
          storageInfo: 'Room temperature, clean bottle',
          shelfLife: '3 months',
          components: [{ name: 'Trisodium Citrate Dihydrate', amount: 2, unit: 'g' }],
          instructions: '2g Trisodium Citrate ko distilled water mein gholkar 100ml banayein.'
      },
      'potassium_oxalate_sat': {
          name: 'Saturated Potassium Oxalate Solution',
          testName: 'Milk Protein Test',
          type: 'w/v',
          category: 'dairy',
          safetyLevel: 'high',
          storageInfo: 'Room temperature, labeled as TOXIC',
          shelfLife: '6 months',
          components: [{ name: 'Potassium Oxalate', amount: 36, unit: 'g' }],
          instructions: '36g Potassium Oxalate ko 100ml distilled water mein gholein (saturation at 20°C). Filter karke saaf solution use karein.'
      },
      'formaldehyde_40': {
          name: 'Formaldehyde Solution (40% / Formalin)',
          testName: 'Formal Titration (Protein)',
          type: 'fixed',
          category: 'dairy',
          safetyLevel: 'critical',
          storageInfo: 'Fume hood, tightly sealed, 15-25°C',
          shelfLife: '12 months',
          components: [],
          instructions: 'Commercial Formalin (37-40% formaldehyde) seedha use hota hai. Formal titration ke liye: 2ml neutralized formalin ko 10ml milk sample mein milayein aur 0.1N NaOH se titrate karein. Formalin ko neutralize karne ke liye: formalin mein phenolphthalein milayein aur 0.1N NaOH se pink endpoint tak neutralize karein.'
      },
      'boric_acid_4_kjeldahl': {
          name: 'Boric Acid Solution (4% w/v, Kjeldahl)',
          testName: 'Kjeldahl Protein Test',
          type: 'w/v',
          category: 'dairy',
          safetyLevel: 'low',
          storageInfo: 'Room temperature',
          shelfLife: '6 months',
          components: [{ name: 'Boric Acid (H₃BO₃)', amount: 4, unit: 'g' }],
          instructions: '4g Boric Acid ko garam distilled water mein gholkar thanda hone ke baad 100ml banayein. Kjeldahl distillation mein ammonia absorb karne ke liye use hota hai. Mixed indicator (bromocresol green + methyl red) ki kuch boondein daalein.'
      },
      'kjeldahl_catalyst': {
          name: 'Kjeldahl Catalyst Mixture',
          testName: 'Kjeldahl Protein Test',
          type: 'ratio',
          category: 'dairy',
          safetyLevel: 'high',
          storageInfo: 'Dry, airtight container',
          shelfLife: '12 months',
          components: [
              { name: 'Potassium Sulphate (K₂SO₄)', ratio: 100 },
              { name: 'Copper Sulphate (CuSO₄·5H₂O)', ratio: 10 },
              { name: 'Selenium Powder', ratio: 1 }
          ],
          instructions: 'Diye gaye anupaat mein teeno chemicals ko mortar & pestle se achhe se mix karein. Har Kjeldahl digestion ke liye approx 5-7g mixture use karein.'
      },
      'naoh_40_kjeldahl': {
          name: 'Sodium Hydroxide Solution (40% w/v)',
          testName: 'Kjeldahl Distillation',
          type: 'w/v',
          category: 'dairy',
          safetyLevel: 'critical',
          storageInfo: 'Plastic/HDPE bottle, avoid glass stopper',
          shelfLife: '6 months',
          components: [{ name: 'Sodium Hydroxide (NaOH)', amount: 40, unit: 'g' }],
          instructions: '40g NaOH pellets ko DHEERE DHEERE thode distilled water mein gholein (BAHUT GARAM HOGA!). Thanda hone ke baad 100ml tak poora karein. Kjeldahl distillation mein acid digest ko alkaline banane ke liye use hota hai.'
      },
      'chromotropic_acid': {
          name: 'Chromotropic Acid Reagent',
          testName: 'Formalin Detection',
          type: 'w/v_in_acid',
          category: 'dairy',
          safetyLevel: 'critical',
          storageInfo: 'Amber bottle, refrigerate',
          shelfLife: '1 month',
          components: [{ name: '1,8-dihydroxynaphthalene-3,6-disulfonic acid', amount: 0.5, unit: 'g' }],
          instructions: '0.5g (500mg) Chromotropic acid ko 72% Sulfuric Acid mein gholkar final volume 100ml poora karein. Freshly prepare recommended.'
      },
      'color_dev_reagent': {
          name: 'Color Developing Reagent (Veg. Fat)',
          testName: 'Vegetable Fat Detection',
          type: 'ratio',
          category: 'dairy',
          safetyLevel: 'critical',
          components: [
              { name: 'Distilled Water', ratio: 20 },
              { name: 'Nitric Acid', ratio: 14 },
              { name: 'Sulfuric Acid', ratio: 6 }
          ],
          instructions: 'Diye gaye anupaat (ratio) mein teeno cheezon ko mix karein. HAMESHA ACID KO PAANI MEIN MILAYEIN.'
      },
      'dmab': {
          name: 'DMAB Reagent (Urea Test)',
          testName: 'Urea Detection',
          type: 'complex',
          category: 'dairy',
          safetyLevel: 'high',
          storageInfo: 'Amber bottle, 4°C',
          shelfLife: '1 month',
          components: [
              { name: 'DMAB (p-Dimethylaminobenzaldehyde)', amount: 1.6, unit: 'g' },
              { name: 'Ethyl Alcohol', amount: 90, unit: 'ml' },
              { name: 'Concentrated HCl', amount: 10, unit: 'ml' }
          ],
          instructions: '1.6g DMAB ko 90ml ethyl alcohol mein gholein aur phir 10ml concentrated HCl milayein.'
      },
      'ferric_chloride_10': {
          name: 'Ferric Chloride Solution (10% w/v)',
          testName: 'Formalin / Leach Test',
          type: 'w/v',
          category: 'dairy',
          safetyLevel: 'medium',
          storageInfo: 'Dark bottle, room temperature',
          shelfLife: '6 months',
          components: [{ name: 'Ferric Chloride (FeCl₃)', amount: 10, unit: 'g' }],
          instructions: '10g Ferric Chloride ko 100ml distilled water me gholein.'
      },
      'furfural_2': {
          name: 'Furfural Solution (2% v/v)',
          testName: 'Baudouin Test (Vanaspati)',
          type: 'v/v',
          category: 'dairy',
          safetyLevel: 'high',
          storageInfo: 'Amber bottle, refrigerate',
          shelfLife: '3 months',
          components: [{ name: 'Furfural', amount: 2, unit: 'ml' }],
          instructions: '2ml Furfural ko 98ml Ethyl Alcohol mein milakar 100ml solution banayein.'
      },
      'iodine_maltodextrin': {
          name: 'Iodine Solution (0.05 N)',
          testName: 'Maltodextrin Detection',
          type: 'fixed',
          category: 'dairy',
          safetyLevel: 'medium',
          components: [],
          instructions: '0.05 N Iodine solution taiyar karna ek standard lab procedure hai. Standard lab manual refer karein.'
      },
      'iodine_starch': {
          name: 'Iodine Solution (Starch Test)',
          testName: 'Starch Detection',
          type: 'w/v',
          category: 'dairy',
          safetyLevel: 'medium',
          storageInfo: 'Amber bottle',
          shelfLife: '3 months',
          components: [
              { name: 'Potassium Iodide (KI)', amount: 2.5, unit: 'g' },
              { name: 'Iodine Crystal', amount: 1, unit: 'g' }
          ],
          instructions: 'Pehle KI ko thode paani mein gholein, phir Iodine crystals milayein (iodine KI solution mein hi ghulta hai). Volume poora karein.'
      },
      'mbrt_solution': {
          name: 'MBRT Solution (Methylene Blue)',
          testName: 'MBRT Test',
          type: 'fixed',
          category: 'dairy',
          safetyLevel: 'low',
          storageInfo: 'Amber bottle, 4°C, dark place',
          shelfLife: '1 month',
          components: [],
          instructions: 'Standard MBRT tablet (R-58) ko 200ml sterile uble hue distilled water mein gholein. Thanda hone ke baad, sterile distilled water se volume 800ml tak poora karein.'
      },
      'methylene_blue': {
          name: 'Methylene Blue Solution (Detergent Test)',
          testName: 'Detergent Detection',
          type: 'w/v',
          category: 'dairy',
          safetyLevel: 'low',
          storageInfo: 'Room temperature',
          shelfLife: '6 months',
          components: [{ name: 'Methylene Blue', amount: 0.0125, unit: 'g' }],
          instructions: '12.5mg (0.0125g) Methylene Blue ko 100ml distilled water mein gholein.'
      },
      'neutral_ferric_chloride_05': {
          name: 'Neutral Ferric Chloride Solution (0.5% w/v)',
          testName: 'Salicylic Acid Detection',
          type: 'w/v',
          category: 'dairy',
          safetyLevel: 'medium',
          storageInfo: 'Dark bottle',
          shelfLife: '3 months',
          components: [{ name: 'Ferric Chloride (FeCl₃)', amount: 0.5, unit: 'g' }],
          instructions: 'FeCl₃ ko distilled water mein gholkar final volume poora karein.'
      },
      'para_phenylenediamine_2': {
          name: 'Para-phenylenediamine Solution (2% w/v)',
          testName: 'H₂O₂ Detection',
          type: 'w/v',
          category: 'dairy',
          safetyLevel: 'high',
          storageInfo: 'Dark bottle, freshly prepared preferred',
          shelfLife: '1 week',
          components: [{ name: 'Para-phenylenediamine', amount: 2, unit: 'g' }],
          instructions: 'Para-phenylenediamine ko distilled water mein gholkar final volume poora karein. Freshly prepare karein.'
      },
      'rosolic_acid': {
          name: 'Rosolic Acid Solution (0.1%)',
          testName: 'Neutralizer (Soda) Detection',
          type: 'complex',
          category: 'dairy',
          safetyLevel: 'medium',
          storageInfo: 'Amber bottle, room temperature',
          shelfLife: '3 months',
          components: [
              { name: 'Rosolic Acid', amount: 0.1, unit: 'g' },
              { name: 'Ethyl Alcohol (95%)', amount: 30, unit: 'ml' }
          ],
          instructions: 'Rosolic acid ko ethyl alcohol mein gholein aur phir distilled water milakar final volume 100ml poora karein.'
      },
      'tca_24': {
          name: 'Trichloroacetic Acid (TCA) 24% w/v',
          testName: 'Urea / Protein Precipitation',
          type: 'w/v',
          category: 'dairy',
          safetyLevel: 'high',
          storageInfo: 'Refrigerate',
          shelfLife: '6 months',
          components: [{ name: 'Trichloroacetic Acid', amount: 24, unit: 'g' }],
          instructions: '24g TCA ko distilled water mein gholkar 100ml solution banayein.'
      },
      'urease_2': {
          name: 'Urease Solution (2% w/v)',
          testName: 'Urea Estimation',
          type: 'w/v',
          category: 'dairy',
          safetyLevel: 'low',
          storageInfo: 'Refrigerate at 2-8°C',
          shelfLife: '2 weeks',
          components: [{ name: 'Urease Enzyme', amount: 2, unit: 'g' }],
          instructions: 'Urease enzyme ko thande distilled water mein gholkar final volume poora karein. Freshly prepare karein.'
      },
      'zinc_copper_precipitant': {
          name: 'Zinc-Copper Precipitant (Phosphatase)',
          testName: 'Phosphatase Test',
          type: 'complex',
          category: 'dairy',
          safetyLevel: 'medium',
          storageInfo: 'Room temperature',
          shelfLife: '6 months',
          components: [
              { name: 'Zinc Sulphate (ZnSO₄·7H₂O)', amount: 25, unit: 'g' },
              { name: 'Copper Sulphate (CuSO₄·5H₂O)', amount: 6, unit: 'g' }
          ],
          instructions: 'Dono chemicals ko distilled water me gholkar 100ml banayein.'
      },
      'buffer_substrate_phos': {
          name: 'Buffer Substrate (Phosphatase Test)',
          testName: 'Phosphatase Test',
          type: 'complex',
          category: 'dairy',
          safetyLevel: 'low',
          storageInfo: '4°C, discard if brown',
          shelfLife: '2 months',
          components: [
              { name: 'Carbonate/Bicarbonate Buffer', amount: 1000, unit: 'ml' },
              { name: 'Disodium p-nitrophenyl phosphate', amount: 1.5, unit: 'g' },
          ],
          instructions: 'Pehle Carbonate/Bicarbonate Buffer banayein. Phir 1.5g Disodium p-nitrophenyl phosphate ko us buffer mein gholkar 1 litre banayein.'
      },
      'acetic_acid_10': {
          name: 'Acetic Acid Solution (10% v/v)',
          testName: 'Casein / Protein Precipitation',
          type: 'v/v',
          category: 'dairy',
          safetyLevel: 'medium',
          storageInfo: 'Room temperature, glass bottle',
          shelfLife: '12 months',
          components: [{ name: 'Glacial Acetic Acid', amount: 10, unit: 'ml' }],
          instructions: '10ml Glacial Acetic Acid ko distilled water mein milakar 100ml banayein.'
      },
      'lead_acetate_basic': {
          name: 'Basic Lead Acetate Solution (Horne)',
          testName: 'Clarification (Sugar Estimation)',
          type: 'w/v',
          category: 'dairy',
          safetyLevel: 'critical',
          storageInfo: 'TOXIC - Locked cabinet, labeled POISON',
          shelfLife: '6 months',
          components: [{ name: 'Basic Lead Acetate Pb(CH₃COO)₂·3Pb(OH)₂', amount: 54, unit: 'g' }],
          instructions: '54g Basic Lead Acetate ko distilled water mein gholkar 100ml banayein. ⚠️ ZEHER: PPE zaroor pehnein. Mouth pipetting bilkul mat karein.'
      },
      'zinc_acetate_30': {
          name: 'Zinc Acetate Solution (30% w/v)',
          testName: 'Milk Protein / Carrez Reagent',
          type: 'w/v',
          category: 'dairy',
          safetyLevel: 'medium',
          storageInfo: 'Room temperature',
          shelfLife: '6 months',
          components: [{ name: 'Zinc Acetate Zn(CH₃COO)₂·2H₂O', amount: 30, unit: 'g' }],
          instructions: '30g Zinc Acetate ko distilled water mein gholkar 100ml banayein.'
      },
      'potassium_ferrocyanide_15': {
          name: 'Potassium Ferrocyanide (15% w/v, Carrez II)',
          testName: 'Clarification (Carrez Method)',
          type: 'w/v',
          category: 'dairy',
          safetyLevel: 'medium',
          storageInfo: 'Dark bottle, room temperature',
          shelfLife: '6 months',
          components: [{ name: 'Potassium Ferrocyanide K₄[Fe(CN)₆]·3H₂O', amount: 15, unit: 'g' }],
          instructions: '15g Potassium Ferrocyanide ko distilled water mein gholkar 100ml banayein.'
      },
  
      // ──────────────────────────────────────────
      // 💧 WATER TESTING REAGENTS
      // ──────────────────────────────────────────
      'barium_chloride_5': {
          name: 'Barium Chloride Solution (5% w/v)',
          testName: 'Sulphate Test',
          type: 'w/v',
          category: 'water',
          safetyLevel: 'high',
          storageInfo: 'TOXIC - labeled bottle',
          shelfLife: '12 months',
          components: [{ name: 'Barium Chloride (BaCl₂·2H₂O)', amount: 5, unit: 'g' }],
          instructions: '5g Barium Chloride ko distilled water mein gholkar 100ml solution banayein.'
      },
      'diphenylamine_2': {
          name: 'Diphenylamine Solution (2% w/v in H₂SO₄)',
          testName: 'Nitrate Test',
          type: 'w/v_in_acid',
          category: 'water',
          safetyLevel: 'critical',
          components: [{ name: 'Diphenylamine', amount: 2, unit: 'g' }],
          instructions: '2g Diphenylamine ko dhyan se 100ml concentrated H₂SO₄ mein gholein. Suraksha upkaran pehnein.'
      },
      'erichrome_black_t': {
          name: 'Erichrome Black T Indicator',
          testName: 'Total Hardness Test',
          type: 'complex',
          category: 'water',
          safetyLevel: 'medium',
          storageInfo: 'Amber bottle, refrigerate',
          shelfLife: '3 months',
          components: [
              { name: 'Erichrome Black T', amount: 0.5, unit: 'g' },
              { name: 'Hydroxylamine HCl', amount: 4.5, unit: 'g' },
              { name: 'Ethyl Alcohol (95%)', amount: 100, unit: 'ml' }
          ],
          instructions: '0.5g EBT aur 4.5g Hydroxylamine HCl ko 100ml 95% Ethyl Alcohol mein gholein.'
      },
      'nesslers_reagent': {
          name: "Nessler's Reagent (Ammonium Test)",
          testName: 'Ammonia / Ammonium Detection',
          type: 'complex',
          category: 'water',
          safetyLevel: 'critical',
          storageInfo: 'Dark bottle, labeled MERCURY COMPOUND - TOXIC',
          shelfLife: '6 months',
          components: [
              { name: 'Mercuric Chloride (8g in 150ml water)', amount: 1, unit: 'part' },
              { name: 'Sodium Hydroxide (60g in 150ml water)', amount: 1, unit: 'part' },
              { name: 'Potassium Iodide (16g in 150ml water)', amount: 1, unit: 'part' }
          ],
          instructions: 'Teen alag solutions banayein. A ko B me milayein. Is mixture me C milayein. Volume 500ml tak poora karein.'
      },
      'potassium_chromate_10': {
          name: 'Potassium Chromate Solution (10% w/v)',
          testName: 'Chloride Test (Mohr)',
          type: 'w/v',
          category: 'water',
          safetyLevel: 'high',
          storageInfo: 'CARCINOGENIC - Special storage',
          shelfLife: '12 months',
          components: [{ name: 'Potassium Chromate (K₂CrO₄)', amount: 10, unit: 'g' }],
          instructions: '10g Potassium Chromate ko distilled water mein gholkar 100ml solution banayein.'
      },
      'silver_nitrate_01n': {
          name: 'Silver Nitrate Solution (0.1 N)',
          testName: 'Chloride Titration',
          type: 'w/v',
          category: 'water',
          safetyLevel: 'high',
          storageInfo: 'Brown/amber bottle, avoid light',
          shelfLife: '6 months',
          components: [{ name: 'Silver Nitrate (AgNO₃)', amount: 1.7, unit: 'g' }],
          instructions: '1.7g Silver Nitrate ko 100ml distilled water mein gholein. Brown bottle mein store karein.'
      },
      'cod_dichromate': {
          name: 'K₂Cr₂O₇ Digestion Solution (0.25N COD)',
          testName: 'COD Test',
          type: 'w/v',
          category: 'water',
          safetyLevel: 'critical',
          storageInfo: 'Glass bottle, labeled CARCINOGENIC',
          shelfLife: '6 months',
          components: [
              { name: 'Potassium Dichromate (K₂Cr₂O₇, dried)', amount: 12.259, unit: 'g' },
              { name: 'Mercuric Sulfate (HgSO₄)', amount: 20, unit: 'g' }
          ],
          instructions: 'K₂Cr₂O₇ aur HgSO₄ ko distilled water me gholkar 1 litre tak poora karein.'
      },
      'cod_acid_reagent': {
          name: 'Sulfuric Acid Reagent (COD)',
          testName: 'COD Test',
          type: 'w/v_in_acid',
          category: 'water',
          safetyLevel: 'critical',
          storageInfo: 'Acid cabinet',
          shelfLife: '12 months',
          components: [{ name: 'Silver Sulfate (Ag₂SO₄)', amount: 10, unit: 'g' }],
          instructions: '10g Ag₂SO₄ ko 1 litre conc. H₂SO₄ me gholein. 1-2 din stir karke ghulne dein.'
      },
      'cod_fas_025m': {
          name: 'Ferrous Ammonium Sulphate (0.25M, COD)',
          testName: 'COD Test',
          type: 'complex',
          category: 'water',
          safetyLevel: 'high',
          storageInfo: 'Room temperature, standardize daily',
          shelfLife: '1 week (standardize daily)',
          components: [
              { name: 'Ferrous Ammonium Sulphate', amount: 98, unit: 'g' },
              { name: 'Concentrated H₂SO₄', amount: 20, unit: 'ml' },
          ],
          instructions: '98g FAS ko distilled water me gholein, 20ml conc. H₂SO₄ milayein, thanda karein aur 1 litre tak poora karein.'
      },
      'bod_phosphate_buffer': {
          name: 'Phosphate Buffer (BOD)',
          testName: 'BOD Test',
          type: 'complex',
          category: 'water',
          safetyLevel: 'low',
          storageInfo: 'Refrigerate',
          shelfLife: '3 months',
          components: [
              { name: 'KH₂PO₄', amount: 8.5, unit: 'g' },
              { name: 'K₂HPO₄', amount: 21.75, unit: 'g' },
              { name: 'Na₂HPO₄·7H₂O', amount: 33.4, unit: 'g' },
              { name: 'NH₄Cl', amount: 1.7, unit: 'g' }
          ],
          instructions: 'Sabhi chemicals ko distilled water me gholkar 1 litre banayein. pH 7.2 hona chahiye.'
      },
      'bod_mgso4': {
          name: 'MgSO₄ Solution (BOD)',
          testName: 'BOD Test',
          type: 'w/v',
          category: 'water',
          safetyLevel: 'low',
          components: [{ name: 'MgSO₄·7H₂O', amount: 22.5, unit: 'g' }],
          instructions: '22.5g MgSO₄·7H₂O ko distilled water me gholkar 1 litre banayein.'
      },
      'bod_cacl2': {
          name: 'CaCl₂ Solution (BOD)',
          testName: 'BOD Test',
          type: 'w/v',
          category: 'water',
          safetyLevel: 'low',
          components: [{ name: 'CaCl₂ (anhydrous)', amount: 27.5, unit: 'g' }],
          instructions: '27.5g anhydrous CaCl₂ ko distilled water me gholkar 1 litre banayein.'
      },
      'bod_fecl3': {
          name: 'FeCl₃ Solution (BOD)',
          testName: 'BOD Test',
          type: 'w/v',
          category: 'water',
          safetyLevel: 'low',
          components: [{ name: 'FeCl₃·6H₂O', amount: 0.25, unit: 'g' }],
          instructions: '0.25g FeCl₃·6H₂O ko distilled water me gholkar 1 litre banayein.'
      },
      'do_manganese_sulfate': {
          name: 'Manganese Sulfate Solution (DO)',
          testName: 'Dissolved Oxygen (Winkler)',
          type: 'w/v',
          category: 'water',
          safetyLevel: 'medium',
          components: [{ name: 'MnSO₄·4H₂O', amount: 48, unit: 'g' }],
          instructions: '48g MnSO₄·4H₂O ko distilled water me gholkar 100ml banayein.'
      },
      'do_alkali_iodide_azide': {
          name: 'Alkali-Iodide-Azide Reagent (DO)',
          testName: 'Dissolved Oxygen (Winkler)',
          type: 'complex',
          category: 'water',
          safetyLevel: 'critical',
          storageInfo: 'AZIDE IS TOXIC - proper labeling required',
          shelfLife: '3 months',
          components: [
              { name: 'Sodium Hydroxide (NaOH)', amount: 50, unit: 'g' },
              { name: 'Potassium Iodide (KI)', amount: 15, unit: 'g' },
              { name: 'Sodium Azide (NaN₃)', amount: 1, unit: 'g' }
          ],
          instructions: '50g NaOH aur 15g KI ko distilled water me gholein. 1g Sodium Azide alag se 40ml water me gholein. Dono mix karke 100ml poora karein.'
      },
      'starch_indicator_1': {
          name: 'Starch Indicator Solution (1%)',
          testName: 'Iodometric Titration / DO',
          type: 'w/v',
          category: 'water',
          safetyLevel: 'low',
          storageInfo: 'Refrigerate, use fresh',
          shelfLife: '2 weeks',
          components: [{ name: 'Soluble Starch', amount: 1, unit: 'g' }],
          instructions: '1g Soluble Starch ko 10ml thande paani se paste banayein. Ye paste 90ml ubalte paani mein daalein. Ubaalein jab tak clear na ho jaaye. Thanda karein. Preservative ke liye 1-2 drops chloroform daal saktay hain.'
      },
      'ferroin_indicator': {
          name: 'Ferroin Indicator (COD)',
          testName: 'COD Titration',
          type: 'complex',
          category: 'water',
          safetyLevel: 'medium',
          storageInfo: 'Amber bottle',
          shelfLife: '12 months',
          components: [
              { name: '1,10-Phenanthroline monohydrate', amount: 1.485, unit: 'g' },
              { name: 'Ferrous Sulphate (FeSO₄·7H₂O)', amount: 0.695, unit: 'g' }
          ],
          instructions: 'Dono chemicals ko distilled water mein gholkar 100ml banayein. Red color aayega.'
      },
      'sulfanilic_acid_neda': {
          name: 'Sulfanilic Acid + NEDA (Nitrite Test)',
          testName: 'Nitrite Detection',
          type: 'complex',
          category: 'water',
          safetyLevel: 'medium',
          storageInfo: 'Dark bottles, separate solutions',
          shelfLife: '1 month',
          components: [
              { name: 'Sulfanilic Acid', amount: 0.6, unit: 'g' },
              { name: 'Concentrated HCl', amount: 7, unit: 'ml' },
              { name: 'N-(1-Naphthyl) ethylenediamine (NEDA)', amount: 0.6, unit: 'g' }
          ],
          instructions: 'Solution A: 0.6g Sulfanilic Acid ko 7ml HCl + 93ml water mein gholein. Solution B: 0.6g NEDA ko 100ml distilled water mein gholein. Dono alag rakhein, test ke waqt equal volume mix karein.'
      },
      'ammonium_molybdate_phosphate': {
          name: 'Ammonium Molybdate Reagent (Phosphate)',
          testName: 'Phosphate Detection',
          type: 'complex',
          category: 'water',
          safetyLevel: 'high',
          storageInfo: 'Dark bottle',
          shelfLife: '6 months',
          components: [
              { name: 'Ammonium Molybdate (NH₄)₆Mo₇O₂₄·4H₂O', amount: 2.5, unit: 'g' },
              { name: 'Concentrated H₂SO₄', amount: 14, unit: 'ml' }
          ],
          instructions: '2.5g Ammonium Molybdate ko 20ml distilled water me gholein. Alag se 14ml conc. H₂SO₄ ko 60ml water me mix karein (ACID KO PAANI MEIN). Thanda hone par dono mix karein aur 100ml banayein.'
      },
      'ascorbic_acid_2': {
          name: 'Ascorbic Acid Solution (2%)',
          testName: 'Phosphate Test (Reducing Agent)',
          type: 'w/v',
          category: 'water',
          safetyLevel: 'low',
          storageInfo: 'Refrigerate, prepare fresh weekly',
          shelfLife: '1 week',
          components: [{ name: 'Ascorbic Acid (Vitamin C)', amount: 2, unit: 'g' }],
          instructions: '2g Ascorbic Acid ko 100ml distilled water mein gholein. Freshly prepare karein.'
      },
      'potassium_iodide_10': {
          name: 'Potassium Iodide Solution (10% w/v)',
          testName: 'DO / Iodometric Tests',
          type: 'w/v',
          category: 'water',
          safetyLevel: 'low',
          storageInfo: 'Dark bottle',
          shelfLife: '3 months',
          components: [{ name: 'Potassium Iodide (KI)', amount: 10, unit: 'g' }],
          instructions: '10g KI ko distilled water mein gholkar 100ml banayein. Dark bottle mein store karein.'
      },
      'phenanthroline_01': {
          name: '1,10-Phenanthroline Solution (0.1%)',
          testName: 'Iron (Fe) Estimation',
          type: 'w/v',
          category: 'water',
          safetyLevel: 'medium',
          storageInfo: 'Dark bottle',
          shelfLife: '6 months',
          components: [{ name: '1,10-Phenanthroline monohydrate', amount: 0.1, unit: 'g' }],
          instructions: '0.1g 1,10-Phenanthroline ko thode garam distilled water (80°C) mein gholein. Thanda karke 100ml poora karein.'
      },
      'hydroxylamine_hcl_10': {
          name: 'Hydroxylamine HCl Solution (10%)',
          testName: 'Iron Test (Reducing Agent)',
          type: 'w/v',
          category: 'water',
          safetyLevel: 'medium',
          storageInfo: 'Room temperature',
          shelfLife: '3 months',
          components: [{ name: 'Hydroxylamine Hydrochloride (NH₂OH·HCl)', amount: 10, unit: 'g' }],
          instructions: '10g Hydroxylamine HCl ko 100ml distilled water mein gholein.'
      },
      'dpd_free_chlorine': {
          name: 'DPD Indicator (Free Chlorine)',
          testName: 'Free Chlorine Test',
          type: 'complex',
          category: 'water',
          safetyLevel: 'medium',
          storageInfo: 'Dark bottle, refrigerate',
          shelfLife: '1 month',
          components: [
              { name: 'DPD (N,N-diethyl-p-phenylenediamine) sulphate', amount: 1.1, unit: 'g' },
              { name: 'Distilled Water (chlorine-free)', amount: 8, unit: 'ml' },
              { name: '1+3 H₂SO₄ solution', amount: 2, unit: 'ml' },
              { name: 'Disodium EDTA', amount: 0.025, unit: 'g' }
          ],
          instructions: '8ml chlorine-free distilled water mein 2ml 1+3 H₂SO₄ milayein. 1.1g DPD sulphate gholein. 0.025g EDTA milayein aur 100ml poora karein.'
      },
  
      // ──────────────────────────────────────────
      // 🍎 FOOD ANALYSIS REAGENTS
      // ──────────────────────────────────────────
      'barfoed': {
          name: "Barfoed's Reagent",
          testName: 'Monosaccharide Detection',
          type: 'fixed',
          category: 'food',
          safetyLevel: 'medium',
          components: [],
          instructions: '24g cupric acetate ko 450ml ubalte hue distilled water mein gholein. 25ml 8.5% lactic acid milayein. Thanda karke 500ml banayein. Scale nahi hota.'
      },
      'benedict': {
          name: "Benedict's Reagent",
          testName: 'Reducing Sugar Detection',
          type: 'complex',
          category: 'food',
          safetyLevel: 'medium',
          storageInfo: 'Room temperature, glass bottle',
          shelfLife: '12 months',
          components: [
              { name: 'Sodium Citrate', amount: 173, unit: 'g' },
              { name: 'Sodium Carbonate (Anhydrous)', amount: 100, unit: 'g' },
              { name: 'Copper Sulfate (CuSO₄·5H₂O)', amount: 17.3, unit: 'g' }
          ],
          instructions: 'Na Citrate aur Na₂CO₃ ko 800ml garam paani mein gholein. Alag se CuSO₄ ko 100ml paani mein gholein. Dheere se mix karein aur 1L banayein.'
      },
      'enzyme_glucoamylase': {
          name: 'Alpha Glucoamylase Enzyme Solution',
          testName: 'Starch Estimation',
          type: 'w/v',
          category: 'food',
          safetyLevel: 'low',
          storageInfo: 'Refrigerate at 2-8°C',
          shelfLife: '1 month',
          components: [{ name: 'Alpha Glucoamylase Enzyme', amount: 0.2, unit: 'g' }],
          instructions: 'Enzyme ko thande distilled water mein gholkar final volume poora karein.'
      },
      'ethanolic_koh_05': {
          name: 'Ethanolic KOH (0.5 N)',
          testName: 'Saponification Value',
          type: 'w/v',
          category: 'food',
          safetyLevel: 'high',
          storageInfo: 'Tightly sealed, avoid moisture',
          shelfLife: '1 month',
          components: [{ name: 'Potassium Hydroxide (KOH)', amount: 2.8, unit: 'g' }],
          instructions: '2.8g KOH ko 95% ethanol mein gholkar 100ml banayein.'
      },
      'fehlings_a': {
          name: "Fehling's Solution A",
          testName: 'Reducing Sugar (Quantitative)',
          type: 'w/v',
          category: 'food',
          safetyLevel: 'medium',
          storageInfo: 'Room temperature',
          shelfLife: '12 months',
          components: [{ name: 'Copper(II) sulfate pentahydrate (CuSO₄·5H₂O)', amount: 6.928, unit: 'g' }],
          instructions: '6.928g CuSO₄·5H₂O ko distilled water mein gholkar 100ml banayein.'
      },
      'fehlings_b': {
          name: "Fehling's Solution B",
          testName: 'Reducing Sugar (Quantitative)',
          type: 'complex',
          category: 'food',
          safetyLevel: 'high',
          storageInfo: 'Room temperature',
          shelfLife: '12 months',
          components: [
              { name: 'Potassium Sodium Tartrate (Rochelle salt)', amount: 34.6, unit: 'g' },
              { name: 'Sodium Hydroxide (NaOH)', amount: 10, unit: 'g' }
          ],
          instructions: 'Dono chemicals ko distilled water mein gholkar 100ml banayein.'
      },
      'phosphomolybdic_acid': {
          name: 'Phosphomolybdic Acid Reagent',
          testName: 'Glucose Estimation',
          type: 'fixed',
          category: 'food',
          safetyLevel: 'high',
          components: [],
          instructions: '35g ammonium molybdate + 5g sodium tungstate ko 400ml 5% NaOH mein gholein. 20-40 min ubaalein. Thanda karke 350ml karein. 125ml conc. H₃PO₄ milayein. 500ml banayein.'
      },
      'seliwanoff': {
          name: "Seliwanoff's Reagent",
          testName: 'Sucrose / Fructose Detection',
          type: 'complex',
          category: 'food',
          safetyLevel: 'high',
          storageInfo: 'Amber bottle',
          shelfLife: '3 months',
          components: [
              { name: 'Resorcinol', amount: 0.5, unit: 'g' },
              { name: 'Distilled Water', amount: 40, unit: 'ml' },
              { name: 'Concentrated HCl', amount: 35, unit: 'ml' }
          ],
          instructions: 'Resorcinol ko 40ml water mein gholein, phir 35ml conc. HCl milayein. 100ml poora karein.'
      },
      'dns_reagent': {
          name: 'DNS (3,5-Dinitrosalicylic Acid) Reagent',
          testName: 'Reducing Sugar Estimation',
          type: 'complex',
          category: 'food',
          safetyLevel: 'high',
          storageInfo: 'Dark bottle, 4°C',
          shelfLife: '3 months',
          components: [
              { name: 'DNS (3,5-Dinitrosalicylic Acid)', amount: 1, unit: 'g' },
              { name: 'Sodium Hydroxide (NaOH)', amount: 1.6, unit: 'g' },
              { name: 'Sodium Potassium Tartrate (Rochelle salt)', amount: 30, unit: 'g' }
          ],
          instructions: 'NaOH ko 50ml water mein gholein. DNS ko is NaOH solution mein gholein (garam karke). Alag se Rochelle salt ko 20ml water mein gholein. Dono mix karein aur 100ml banayein. Dark bottle mein store karein.'
      },
      'anthrone_reagent': {
          name: 'Anthrone Reagent (Total Carbohydrate)',
          testName: 'Total Carbohydrate Estimation',
          type: 'w/v_in_acid',
          category: 'food',
          safetyLevel: 'critical',
          storageInfo: 'Prepare fresh, refrigerate for max 1 week',
          shelfLife: '1 week',
          components: [{ name: 'Anthrone', amount: 0.2, unit: 'g' }],
          instructions: '0.2g Anthrone ko 100ml ice-cold concentrated H₂SO₄ mein gholein. BAHUT SAVDHAANI SE, ICE BATH PAR KAAM KAREIN.'
      },
      'ninhydrin_02': {
          name: 'Ninhydrin Solution (0.2%)',
          testName: 'Amino Acid / Protein Detection',
          type: 'w/v',
          category: 'food',
          safetyLevel: 'medium',
          storageInfo: 'Dark bottle, refrigerate',
          shelfLife: '1 month',
          components: [{ name: 'Ninhydrin', amount: 0.2, unit: 'g' }],
          instructions: '0.2g Ninhydrin ko 100ml acetone ya n-butanol mein gholein.'
      },
      'biuret_reagent': {
          name: 'Biuret Reagent (Protein Detection)',
          testName: 'Total Protein Detection',
          type: 'complex',
          category: 'food',
          safetyLevel: 'high',
          storageInfo: 'Plastic bottle, room temperature',
          shelfLife: '6 months',
          components: [
              { name: 'Copper Sulphate (CuSO₄·5H₂O)', amount: 0.15, unit: 'g' },
              { name: 'Sodium Potassium Tartrate', amount: 0.6, unit: 'g' },
              { name: 'Sodium Hydroxide (NaOH, 10%)', amount: 30, unit: 'ml' },
              { name: 'Potassium Iodide (KI)', amount: 0.1, unit: 'g' }
          ],
          instructions: 'CuSO₄ aur Tartrate ko 50ml water mein gholein. 30ml 10% NaOH milayein. 0.1g KI milayein. 100ml banayein.'
      },
      'sudan_iii_01': {
          name: 'Sudan III Solution (0.1%)',
          testName: 'Fat / Lipid Detection',
          type: 'w/v',
          category: 'food',
          safetyLevel: 'medium',
          storageInfo: 'Amber bottle',
          shelfLife: '12 months',
          components: [{ name: 'Sudan III dye', amount: 0.1, unit: 'g' }],
          instructions: '0.1g Sudan III ko 100ml 70% ethanol ya isopropanol mein gholein.'
      },
      'molisch_reagent': {
          name: "Molisch's Reagent (Carbohydrate)",
          testName: 'Carbohydrate Detection',
          type: 'w/v',
          category: 'food',
          safetyLevel: 'medium',
          storageInfo: 'Amber bottle',
          shelfLife: '3 months',
          components: [{ name: 'α-Naphthol', amount: 5, unit: 'g' }],
          instructions: '5g α-Naphthol ko 100ml 95% ethanol mein gholein.'
      },
      'tba_reagent': {
          name: 'TBA (Thiobarbituric Acid) Reagent',
          testName: 'Rancidity / MDA Estimation',
          type: 'w/v_in_acid',
          category: 'food',
          safetyLevel: 'high',
          storageInfo: 'Dark bottle, refrigerate',
          shelfLife: '2 weeks',
          components: [{ name: 'Thiobarbituric Acid (TBA)', amount: 0.67, unit: 'g' }],
          instructions: '0.67g TBA ko 100ml glacial acetic acid mein gholein (ya 50ml water + 50ml acetic acid). Garam karke ghulayein agar zaroorat ho.'
      },
      'dpph_solution': {
          name: 'DPPH Solution (0.1 mM)',
          testName: 'Antioxidant Activity',
          type: 'w/v',
          category: 'food',
          safetyLevel: 'medium',
          storageInfo: 'Dark/amber bottle, -20°C, prepare fresh',
          shelfLife: '1 week',
          components: [{ name: 'DPPH (2,2-diphenyl-1-picrylhydrazyl)', amount: 0.00394, unit: 'g' }],
          instructions: '3.94mg DPPH ko 100ml methanol mein gholein. Dark condition mein prepare karein. Absorbance ~0.9 at 517nm hona chahiye.'
      },
      'folin_ciocalteu_info': {
          name: 'Folin-Ciocalteu Reagent (Diluted)',
          testName: 'Total Phenol Estimation',
          type: 'ratio',
          category: 'food',
          safetyLevel: 'high',
          storageInfo: 'Dark bottle, refrigerate',
          shelfLife: '6 months (concentrated)',
          components: [
              { name: 'Folin-Ciocalteu Reagent (commercial)', ratio: 1 },
              { name: 'Distilled Water', ratio: 10 }
          ],
          instructions: 'Commercial Folin-Ciocalteu reagent ko 1:10 ratio mein distilled water se dilute karein. Use ke waqt freshly dilute karein.'
      },
      'gallic_acid_std': {
          name: 'Gallic Acid Standard (1000 ppm)',
          testName: 'Total Phenol Standard Curve',
          type: 'w/v',
          category: 'food',
          safetyLevel: 'low',
          storageInfo: 'Refrigerate',
          shelfLife: '1 month',
          components: [{ name: 'Gallic Acid (anhydrous)', amount: 0.1, unit: 'g' }],
          instructions: '0.1g (100mg) Gallic Acid ko 10ml methanol mein gholein, phir distilled water se 100ml poora karein. Working standards dilution se banayein.'
      },
  
      // ──────────────────────────────────────────
      // 🔬 MICROBIOLOGY REAGENTS
      // ──────────────────────────────────────────
      'crystal_violet': {
          name: "Gram's Crystal Violet",
          testName: 'Gram Staining',
          type: 'complex',
          category: 'staining',
          safetyLevel: 'medium',
          storageInfo: 'Room temperature, staining tray area',
          shelfLife: '12 months',
          components: [
              { name: 'Crystal Violet (90% dye content)', amount: 2, unit: 'g' },
              { name: 'Ethyl Alcohol (95%)', amount: 20, unit: 'ml' },
              { name: 'Ammonium Oxalate', amount: 0.8, unit: 'g' },
              { name: 'Distilled Water (for oxalate)', amount: 80, unit: 'ml' }
          ],
          instructions: 'Crystal violet ko alcohol mein gholein. Ammonium oxalate ko paani mein gholein. Dono mix karein.'
      },
      'grams_iodine': {
          name: "Gram's Iodine",
          testName: 'Gram Staining',
          type: 'complex',
          category: 'staining',
          safetyLevel: 'medium',
          storageInfo: 'Amber bottle',
          shelfLife: '6 months',
          components: [
              { name: 'Iodine Crystals', amount: 1, unit: 'g' },
              { name: 'Potassium Iodide (KI)', amount: 2, unit: 'g' },
              { name: 'Distilled Water', amount: 300, unit: 'ml' }
          ],
          instructions: 'Pehle KI ko thode water mein gholein, phir Iodine milayein. Final volume 300ml poora karein.'
      },
      'safranin': {
          name: "Gram's Safranin (Counter-stain)",
          testName: 'Gram Staining',
          type: 'complex',
          category: 'staining',
          safetyLevel: 'medium',
          storageInfo: 'Room temperature',
          shelfLife: '12 months',
          components: [
              { name: 'Safranin O (2.5% in 95% ethanol)', amount: 10, unit: 'ml' },
              { name: 'Distilled Water', amount: 100, unit: 'ml' }
          ],
          instructions: 'Dono ko mix karein. Final concentration ~0.25% Safranin.'
      },
      'decolorizer_gram': {
          name: "Gram's Decolorizer",
          testName: 'Gram Staining',
          type: 'ratio',
          category: 'staining',
          safetyLevel: 'medium',
          storageInfo: 'Tightly sealed, room temperature',
          shelfLife: '12 months',
          components: [
              { name: '95% Ethyl Alcohol', ratio: 3 },
              { name: 'Acetone', ratio: 1 }
          ],
          instructions: '95% Ethanol aur Acetone ko 3:1 ratio mein mix karein. Kuch protocols mein sirf 95% ethanol ya sirf acetone bhi use hota hai.'
      },
      'lactophenol_cotton_blue': {
          name: 'Lactophenol Cotton Blue (LPCB)',
          testName: 'Fungal Staining',
          type: 'complex',
          category: 'staining',
          safetyLevel: 'high',
          storageInfo: 'Room temperature, labeled',
          shelfLife: '12 months',
          components: [
              { name: 'Phenol (crystals)', amount: 20, unit: 'g' },
              { name: 'Lactic Acid', amount: 20, unit: 'ml' },
              { name: 'Glycerol', amount: 40, unit: 'ml' },
              { name: 'Cotton Blue (Methyl Blue / Aniline Blue)', amount: 0.05, unit: 'g' },
              { name: 'Distilled Water', amount: 20, unit: 'ml' }
          ],
          instructions: 'Phenol ko garam paani mein gholein. Lactic acid, glycerol, aur water milayein. Ant mein cotton blue dye milayein. Filter karein.'
      },
      'malachite_green_5': {
          name: 'Malachite Green Solution (5%)',
          testName: 'Endospore Staining',
          type: 'w/v',
          category: 'staining',
          safetyLevel: 'medium',
          storageInfo: 'Room temperature',
          shelfLife: '6 months',
          components: [{ name: 'Malachite Green oxalate', amount: 5, unit: 'g' }],
          instructions: '5g Malachite Green ko 100ml distilled water mein gholein. Spore staining mein steam ke saath use hota hai.'
      },
      'carbol_fuchsin': {
          name: 'Carbol Fuchsin (Ziehl-Neelsen)',
          testName: 'AFB / Acid Fast Staining',
          type: 'complex',
          category: 'staining',
          safetyLevel: 'high',
          storageInfo: 'Room temperature',
          shelfLife: '6 months',
          components: [
              { name: 'Basic Fuchsin', amount: 1, unit: 'g' },
              { name: '95% Ethyl Alcohol', amount: 10, unit: 'ml' },
              { name: 'Phenol (crystals, melted)', amount: 5, unit: 'g' },
              { name: 'Distilled Water', amount: 100, unit: 'ml' }
          ],
          instructions: 'Basic fuchsin ko ethanol mein gholein. Phenol ko garam paani mein gholein. Dono mix karein. 24 ghante baad filter karein.'
      },
      'normal_saline': {
          name: 'Normal Saline (0.85% w/v)',
          testName: 'Microbiology / Dilution',
          type: 'w/v',
          category: 'micro',
          safetyLevel: 'low',
          storageInfo: 'Sterilize, room temperature',
          shelfLife: '3 months (sterile)',
          components: [{ name: 'Sodium Chloride (NaCl)', amount: 0.85, unit: 'g' }],
          instructions: '0.85g NaCl ko 100ml distilled water mein gholein. Autoclave karein (121°C, 15 min, 15 psi).'
      },
      'peptone_water': {
          name: 'Peptone Water (0.1% Buffered)',
          testName: 'Microbiology Dilution Blank',
          type: 'complex',
          category: 'micro',
          safetyLevel: 'low',
          storageInfo: 'Sterilize, room temperature',
          shelfLife: '3 months (sterile)',
          components: [
              { name: 'Bacteriological Peptone', amount: 0.1, unit: 'g' },
              { name: 'Sodium Chloride (NaCl)', amount: 0.85, unit: 'g' }
          ],
          instructions: 'Dono chemicals ko 100ml distilled water mein gholein. pH 7.0 ± 0.2 adjust karein. 9ml aliquots mein test tubes mein daalein. Autoclave karein.'
      },
      'koh_10_micro': {
          name: 'KOH Solution (10% w/v)',
          testName: 'Fungal Wet Mount',
          type: 'w/v',
          category: 'micro',
          safetyLevel: 'high',
          storageInfo: 'Plastic bottle',
          shelfLife: '6 months',
          components: [{ name: 'Potassium Hydroxide (KOH)', amount: 10, unit: 'g' }],
          instructions: '10g KOH ko 100ml distilled water mein gholein. CAUSTIC - savdhaan rahein.'
      },
  
      // ──────────────────────────────────────────
      // ⚗️ BUFFER SOLUTIONS
      // ──────────────────────────────────────────
      'buffer_sol_ph10': {
          name: 'Buffer Solution (pH 10, Hardness)',
          testName: 'Total Hardness Test',
          type: 'complex',
          category: 'buffer',
          safetyLevel: 'high',
          storageInfo: 'Tightly sealed plastic bottle',
          shelfLife: '1 month',
          components: [
              { name: 'Ammonium Chloride (NH₄Cl)', amount: 67.5, unit: 'g' },
              { name: 'Ammonium Hydroxide (NH₄OH, sp. gr. 0.88)', amount: 570, unit: 'ml' }
          ],
          instructions: '67.5g NH₄Cl ko 570ml NH₄OH me gholein, distilled water se 1 litre banayein. FUME HOOD mein kaam karein!'
      },
      'buffer_carbonate_bicarbonate': {
          name: 'Carbonate/Bicarbonate Buffer (pH 9.8)',
          testName: 'Phosphatase Test',
          type: 'complex',
          category: 'buffer',
          safetyLevel: 'low',
          storageInfo: 'Room temperature',
          shelfLife: '3 months',
          components: [
              { name: 'Sodium Carbonate (anhydrous)', amount: 3.5, unit: 'g' },
              { name: 'Sodium Bicarbonate', amount: 1.5, unit: 'g' }
          ],
          instructions: '3.5g Na₂CO₃ aur 1.5g NaHCO₃ ko distilled water me gholkar 1 litre banayein. pH 9.8.'
      },
      'phosphate_buffer_ph7': {
          name: 'Phosphate Buffer (pH 7.0)',
          testName: 'General Purpose Buffer',
          type: 'complex',
          category: 'buffer',
          safetyLevel: 'low',
          storageInfo: 'Refrigerate',
          shelfLife: '3 months',
          components: [
              { name: 'KH₂PO₄ (monobasic)', amount: 3.39, unit: 'g' },
              { name: 'Na₂HPO₄ (dibasic anhydrous)', amount: 3.53, unit: 'g' }
          ],
          instructions: 'Dono salts ko distilled water mein gholkar 1 litre banayein. pH meter se verify karein.'
      },
      'phosphate_buffer_ph74': {
          name: 'Phosphate Buffer Saline - PBS (pH 7.4)',
          testName: 'Cell Biology / Immunology',
          type: 'complex',
          category: 'buffer',
          safetyLevel: 'low',
          storageInfo: 'Refrigerate, sterilize if needed',
          shelfLife: '3 months',
          components: [
              { name: 'NaCl', amount: 8, unit: 'g' },
              { name: 'KCl', amount: 0.2, unit: 'g' },
              { name: 'Na₂HPO₄', amount: 1.44, unit: 'g' },
              { name: 'KH₂PO₄', amount: 0.24, unit: 'g' }
          ],
          instructions: 'Sabhi salts ko 800ml distilled water mein gholein. pH 7.4 adjust karein HCl/NaOH se. Volume 1 litre poora karein.'
      },
      'acetate_buffer_ph46': {
          name: 'Acetate Buffer (pH 4.6)',
          testName: 'Enzyme / Protein Analysis',
          type: 'complex',
          category: 'buffer',
          safetyLevel: 'medium',
          storageInfo: 'Refrigerate',
          shelfLife: '3 months',
          components: [
              { name: 'Sodium Acetate (CH₃COONa·3H₂O)', amount: 5.44, unit: 'g' },
              { name: 'Glacial Acetic Acid', amount: 2.4, unit: 'ml' }
          ],
          instructions: 'Sodium Acetate ko 80ml water mein gholein. 2.4ml glacial acetic acid milayein. pH check karein aur 100ml banayein.'
      },
      'acetate_buffer_ph56': {
          name: 'Acetate Buffer (pH 5.6)',
          testName: 'Enzyme Assays',
          type: 'complex',
          category: 'buffer',
          safetyLevel: 'medium',
          storageInfo: 'Refrigerate',
          shelfLife: '3 months',
          components: [
              { name: 'Sodium Acetate (CH₃COONa·3H₂O)', amount: 8.2, unit: 'g' },
              { name: 'Glacial Acetic Acid', amount: 0.6, unit: 'ml' }
          ],
          instructions: 'Sodium Acetate ko 80ml water mein gholein. Acetic acid milayein. pH check karein aur 100ml banayein.'
      },
      'citrate_buffer_ph30': {
          name: 'Citrate Buffer (pH 3.0)',
          testName: 'Enzyme / Protein Analysis',
          type: 'complex',
          category: 'buffer',
          safetyLevel: 'low',
          storageInfo: 'Refrigerate',
          shelfLife: '3 months',
          components: [
              { name: 'Citric Acid Monohydrate', amount: 2.1, unit: 'g' },
              { name: 'Trisodium Citrate Dihydrate', amount: 0.18, unit: 'g' }
          ],
          instructions: 'Dono ko 100ml distilled water mein gholein. pH check karein.'
      },
  
      // ──────────────────────────────────────────
      // 📏 STANDARD / STANDARDIZATION SOLUTIONS
      // ──────────────────────────────────────────
      'kmno4_01n': {
          name: 'Potassium Permanganate (0.1 N)',
          testName: 'Redox Titration',
          type: 'w/v',
          category: 'standard',
          safetyLevel: 'high',
          storageInfo: 'Dark/amber bottle, avoid rubber stoppers',
          shelfLife: '3 months',
          components: [{ name: 'KMnO₄', amount: 3.16, unit: 'g' }],
          instructions: '3.16g KMnO₄ ko distilled water mein gholkar 100ml banayein. Use se pehle standardize karein.'
      },
      'na_thio_01n': {
          name: 'Sodium Thiosulfate (0.1 N)',
          testName: 'Iodometric Titration',
          type: 'w/v',
          category: 'standard',
          safetyLevel: 'low',
          storageInfo: 'Dark bottle, add 0.1g Na₂CO₃ as preservative',
          shelfLife: '1 month',
          components: [{ name: 'Na₂S₂O₃·5H₂O', amount: 24.8, unit: 'g' }],
          instructions: '24.8g Na₂S₂O₃·5H₂O ko freshly boiled & cooled distilled water mein gholkar 1 litre banayein.'
      },
      'na_stock_1000ppm': {
          name: 'Sodium Standard (1000 ppm)',
          testName: 'Flame Photometry',
          type: 'w/v',
          category: 'standard',
          safetyLevel: 'low',
          components: [{ name: 'NaCl (dried at 110°C)', amount: 0.2542, unit: 'g' }],
          instructions: '0.2542g dried NaCl ko distilled water mein gholkar 100ml banayein = 1000 ppm Na.'
      },
      'k_stock_1000ppm': {
          name: 'Potassium Standard (1000 ppm)',
          testName: 'Flame Photometry',
          type: 'w/v',
          category: 'standard',
          safetyLevel: 'low',
          components: [{ name: 'KCl (dried at 110°C)', amount: 0.1907, unit: 'g' }],
          instructions: '0.1907g dried KCl ko distilled water mein gholkar 100ml banayein = 1000 ppm K.'
      },
      'std_na2co3_005n': {
          name: 'Standard Na₂CO₃ (0.05 N)',
          testName: 'HCl/H₂SO₄ Standardization',
          type: 'w/v',
          category: 'standard',
          safetyLevel: 'low',
          storageInfo: 'Sealed, room temperature',
          shelfLife: '3 months',
          components: [{ name: 'Anhydrous Na₂CO₃ (dried at 250°C)', amount: 2.5, unit: 'g' }],
          instructions: '2.5g dried Na₂CO₃ ko distilled water me gholkar 1 litre banayein.'
      },
      'std_h2so4_01n': {
          name: 'Standard H₂SO₄ (approx. 0.1 N)',
          testName: 'Standardization',
          type: 'v/v',
          category: 'standard',
          safetyLevel: 'high',
          components: [{ name: 'Concentrated H₂SO₄', amount: 2.8, unit: 'ml' }],
          instructions: '2.8ml conc. H₂SO₄ ko distilled water me milakar 1 litre banayein. Na₂CO₃ se standardize karein.'
      },
      'std_khp_cod': {
          name: 'KHP Standard (500 µg O₂/mL COD)',
          testName: 'COD Method Verification',
          type: 'w/v',
          category: 'standard',
          safetyLevel: 'low',
          components: [{ name: 'KHP (dried at 110°C)', amount: 0.425, unit: 'g' }],
          instructions: '425mg dried KHP ko distilled water me gholkar 1 litre banayein. Theoretical COD = 500 µgO₂/mL.'
      },
      'std_ag_nitrate_00141n': {
          name: 'Standard AgNO₃ (0.0141N)',
          testName: 'Chloride Titration',
          type: 'w/v',
          category: 'standard',
          safetyLevel: 'high',
          storageInfo: 'Amber bottle',
          components: [{ name: 'AgNO₃', amount: 2.395, unit: 'g' }],
          instructions: '2.395g AgNO₃ ko distilled water me gholkar 1 litre banayein.'
      },
      'std_nacl_00141n': {
          name: 'Standard NaCl (0.0141N)',
          testName: 'AgNO₃ Standardization',
          type: 'w/v',
          category: 'standard',
          safetyLevel: 'low',
          components: [{ name: 'NaCl (dried at 110°C)', amount: 0.824, unit: 'g' }],
          instructions: '824mg dried NaCl ko distilled water me gholkar 1 litre banayein.'
      },
      'std_edta_001m': {
          name: 'Standard EDTA (0.01M)',
          testName: 'Hardness Titration',
          type: 'w/v',
          category: 'standard',
          safetyLevel: 'low',
          storageInfo: 'Plastic bottle (EDTA chelates metals from glass)',
          shelfLife: '6 months',
          components: [{ name: 'EDTA Disodium Salt Dihydrate', amount: 3.723, unit: 'g' }],
          instructions: '3.723g EDTA ko distilled water me gholkar 1 litre banayein.'
      },
      'std_calcium_sol': {
          name: 'Standard Calcium Solution (Hardness)',
          testName: 'EDTA Standardization',
          type: 'w/v',
          category: 'standard',
          safetyLevel: 'medium',
          components: [{ name: 'Anhydrous CaCO₃', amount: 1.000, unit: 'g' }],
          instructions: '1.000g CaCO₃ ko thode 1+1 HCl me gholein, 200ml water milakar ubaalein, thanda karein, 1 litre banayein.'
      },
      'std_oxalic_acid_01n': {
          name: 'Standard Oxalic Acid (0.1 N)',
          testName: 'KMnO₄ Standardization',
          type: 'w/v',
          category: 'standard',
          safetyLevel: 'medium',
          storageInfo: 'Glass bottle, room temperature',
          shelfLife: '3 months',
          components: [{ name: 'Oxalic Acid (H₂C₂O₄·2H₂O)', amount: 6.3, unit: 'g' }],
          instructions: '6.3g Oxalic Acid ko distilled water mein gholkar 1 litre banayein. Primary standard hai.'
      },
      'std_khp_01n': {
          name: 'Standard KHP (0.1 N)',
          testName: 'NaOH Standardization',
          type: 'w/v',
          category: 'standard',
          safetyLevel: 'low',
          storageInfo: 'Sealed, room temperature',
          shelfLife: '6 months',
          components: [{ name: 'KHP (dried at 110°C, 2 hours)', amount: 20.42, unit: 'g' }],
          instructions: '20.42g dried KHP ko distilled water mein gholkar 1 litre banayein. Primary standard hai.'
      },
  
      // ──────────────────────────────────────────
      // 🧫 GENERAL LAB REAGENTS
      // ──────────────────────────────────────────
      'bromothymol_blue_02': {
          name: 'Bromothymol Blue Solution (0.2%)',
          testName: 'pH Indicator',
          type: 'w/v',
          category: 'general',
          safetyLevel: 'low',
          components: [{ name: 'Bromothymol Blue', amount: 0.2, unit: 'g' }],
          instructions: '0.2g BTB ko 20ml 95% Ethanol mein gholein aur distilled water se 100ml poora karein.'
      },
      'hcl_1_3': {
          name: 'Diluted HCl (1:3)',
          testName: 'General Purpose',
          type: 'ratio',
          category: 'general',
          safetyLevel: 'high',
          components: [
              { name: 'Concentrated HCl', ratio: 1 },
              { name: 'Distilled Water', ratio: 3 }
          ],
          instructions: 'Pehle 3 parts water lein, phir 1 part conc. HCl dheere dheere milayein. ACID KO PAANI MEIN DAALEIN.'
      },
      'lactic_acid_10': {
          name: 'Lactic Acid Solution (10% v/v)',
          testName: 'General Purpose',
          type: 'v/v',
          category: 'general',
          safetyLevel: 'low',
          components: [{ name: 'Concentrated Lactic Acid', amount: 10, unit: 'ml' }],
          instructions: 'Lactic Acid ko distilled water se 100ml poora karein.'
      },
      'naoh_10': {
          name: 'Sodium Hydroxide Solution (10% w/v)',
          testName: 'General Purpose',
          type: 'w/v',
          category: 'general',
          safetyLevel: 'high',
          storageInfo: 'Plastic/HDPE bottle',
          shelfLife: '6 months',
          components: [{ name: 'NaOH', amount: 10, unit: 'g' }],
          instructions: 'NaOH pellets ko dhyan se distilled water mein gholein aur 100ml banayein. Solution garam hota hai.'
      },
      'stannous_chloride_0025': {
          name: 'Stannous Chloride Solution (0.025%)',
          testName: 'Reducing Agent',
          type: 'w/v',
          category: 'general',
          safetyLevel: 'medium',
          components: [{ name: 'SnCl₂', amount: 0.025, unit: 'g' }],
          instructions: 'SnCl₂ ko distilled water mein gholkar 100ml poora karein.'
      },
      'naoh_01n': {
          name: 'Sodium Hydroxide (0.1 N)',
          testName: 'Acidity Titration',
          type: 'w/v',
          category: 'general',
          safetyLevel: 'medium',
          storageInfo: 'Plastic bottle, CO₂-free conditions',
          shelfLife: '1 month (standardize weekly)',
          components: [{ name: 'NaOH', amount: 0.4, unit: 'g' }],
          instructions: '0.4g NaOH ko CO₂-free distilled water mein gholkar 100ml banayein. KHP se standardize karein.'
      },
      'hcl_01n': {
          name: 'Hydrochloric Acid (0.1 N)',
          testName: 'Alkalinity Titration',
          type: 'v/v',
          category: 'general',
          safetyLevel: 'medium',
          storageInfo: 'Glass bottle',
          shelfLife: '3 months (standardize monthly)',
          components: [{ name: 'Concentrated HCl (37%)', amount: 0.86, unit: 'ml' }],
          instructions: '0.86ml conc. HCl ko distilled water mein milakar 100ml banayein. Na₂CO₃ se standardize karein.'
      },
      'sodium_carbonate_7': {
          name: 'Sodium Carbonate Solution (7.5% w/v)',
          testName: 'Folin-Ciocalteu / Phenol Test',
          type: 'w/v',
          category: 'general',
          safetyLevel: 'low',
          storageInfo: 'Room temperature',
          shelfLife: '6 months',
          components: [{ name: 'Anhydrous Na₂CO₃', amount: 7.5, unit: 'g' }],
          instructions: '7.5g Na₂CO₃ ko distilled water mein gholkar 100ml banayein.'
      },
      'h2so4_dilute_1_4': {
          name: 'Dilute Sulphuric Acid (1:4)',
          testName: 'DO Titration / General',
          type: 'ratio',
          category: 'general',
          safetyLevel: 'high',
          components: [
              { name: 'Concentrated H₂SO₄', ratio: 1 },
              { name: 'Distilled Water', ratio: 4 }
          ],
          instructions: 'Pehle 4 parts water lein. Phir 1 part conc. H₂SO₄ bahut DHEERE se milayein. ACID KO PAANI MEIN DAALEIN.'
      },
  };
