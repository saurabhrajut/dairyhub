
export const milkStandards = {
  toned: { name: "Toned Milk", fat: 3.0, snf: 8.5 },
  double_toned: { name: "Double Toned Milk", fat: 1.5, snf: 9.0 },
  standardized: { name: "Standardized Milk", fat: 4.5, snf: 8.5 },
  full_cream: { name: "Full Cream Milk", fat: 6.0, snf: 9.0 },
  skimmed_milk: { name: "Skimmed Milk", fat: 0.5, snf: 8.7 },
};

export const componentProps = {
  cream: { fat: 40.0, snf: 5.4 },
  smp: { fat: 1.0, snf: 95.0 },
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
    ascorbic: { name: 'Ascorbic Acid (C₆H₈O₆)', molarMass: 176.12, nFactor: 2, type: 'solid' }, // Note: nFactor can be complex, using 2 for titrations
    potassium_dichromate: { name: 'Potassium Dichromate (K₂Cr₂O₇)', molarMass: 294.18, nFactor: 6, type: 'solid' }, // Used in redox titrations
    potassium_permanganate: { name: 'Potassium Permanganate (KMnO₄)', molarMass: 158.03, nFactor: 5, type: 'solid' }, // Used in redox titrations
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
  },
  indicators: {
    phenolphthalein: { name: "Phenolphthalein", solvent: "ethanol (95%)", type: "w/v" },
    "methyl-orange": { name: "Methyl Orange", solvent: "water", type: "w/v" },
    murexide: { name: 'Murexide', solvent: 'ethylene glycol', type: 'w/v' },
    'methyl-red': { name: 'Methyl Red', solvent: 'ethanol (95%)', type: 'w/v' },
    'bromothymol-blue': { name: 'Bromothymol Blue', solvent: 'ethanol (20%)', type: 'w/v' },
    'kjeldahl-mixed': { name: 'Kjeldahl Mixed Indicator', solvent: 'ethanol (95%)', type: 'mixed', note: '0.1g Bromocresol Green + 0.02g Methyl Red ko 100mL solvent me milayein.'}
  },
  primaryStandards: {
    khp: { name: "Potassium Hydrogen Phthalate (KHP)", molarMass: 204.22, nFactor: 1 },
    na2co3_std: { name: "Anhydrous Sodium Carbonate (Na₂CO₃)", molarMass: 105.99, nFactor: 2 },
    oxalic_acid_std: { name: "Oxalic Acid (H₂C₂O₄·2H₂O)", molarMass: 126.07, nFactor: 2 },
    k2cr2o7_std: { name: "Potassium Dichromate (K₂Cr₂O₇)", molarMass: 294.18, nFactor: 6 },
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

export const reagentRecipes = {
    'alcohol_alizarin': {
        name: 'Alcohol Alizarin Reagent (0.2%)',
        type: 'w/v',
        components: [
            { name: 'Alizarin', amount: 0.2, unit: 'g'}
        ],
        instructions: '0.2g Alizarin ko 100ml 68% Ethyl Alcohol mein gholein. Iska istemal COB test mein hota hai.'
    },
     'barium_chloride_5': {
        name: 'Barium Chloride Solution (5% w/v)',
        type: 'w/v',
        components: [
            { name: 'Barium Chloride (BaCl₂·2H₂O)', amount: 5, unit: 'g'}
        ],
        instructions: '5g Barium Chloride ko distilled water mein gholkar 100ml solution banayein.'
    },
    'barfoed': {
        name: 'Barfoed’s Reagent',
        type: 'fixed',
        instructions: 'Ise banane ke liye, 24g cupric acetate ko 450ml ubalte hue distilled water mein gholein. Turant 25ml 8.5% lactic acid garam solution mein milayein. Thanda karke, distilled water se volume 500ml tak poora karein. Is calculator se iski matra scale nahi ki ja sakti.'
    },
    'benedict': {
        name: "Benedict's Reagent",
        type: 'complex',
        components: [
            { name: 'Sodium Citrate', amount: 173, unit: 'g' },
            { name: 'Sodium Carbonate (Anhydrous)', amount: 100, unit: 'g' },
            { name: 'Copper Sulfate (CuSO₄·5H₂O)', amount: 17.3, unit: 'g' }
        ],
        instructions: 'Sodium citrate aur sodium carbonate ko 800ml garam paani mein gholein. Alag se, copper sulfate ko 100ml paani mein gholein. Dheere-dheere copper solution ko carbonate-citrate solution mein milayein aur paani se 1 litre tak poora karein.'
    },
    'bromothymol_blue_02': {
        name: 'Bromothymol Blue Solution (0.2%)',
        type: 'w/v',
        components: [ { name: 'Bromothymol Blue', amount: 0.2, unit: 'g' } ],
        instructions: '0.2g Bromothymol Blue ko 20ml 95% Ethanol mein gholein aur phir distilled water se volume 100ml tak poora karein.'
    },
    'buffer_sol_ph10': {
        name: 'Buffer Solution (pH 10, Hardness)',
        type: 'complex',
        components: [
            { name: 'Ammonium Chloride (NH4Cl)', amount: 67.5, unit: 'g'},
            { name: 'Ammonium Hydroxide (NH4OH, sp. gr. 0.88)', amount: 570, unit: 'ml'}
        ],
        instructions: '67.5g Ammonium Chloride ko 570ml Ammonium Hydroxide me gholein, aur phir distilled water se 1 litre tak poora karein.'
    },
    'buffer_carbonate_bicarbonate': {
        name: 'Buffer (Sodium Carbonate/Bicarbonate)',
        type: 'complex',
        components: [
            { name: 'Sodium Carbonate (anhydrous)', amount: 3.5, unit: 'g'},
            { name: 'Sodium Bicarbonate', amount: 1.5, unit: 'g'}
        ],
        instructions: '3.5g Sodium Carbonate aur 1.5g Sodium Bicarbonate ko distilled water me gholkar 1 litre banayein. pH 9.8 hona chahiye.'
    },
    'buffer_substrate_phos': {
        name: 'Buffer Substrate (Phosphatase Test)',
        type: 'complex',
        components: [
            { name: 'Carbonate/Bicarbonate Buffer', amount: 1000, unit: 'ml' },
            { name: 'Disodium p-nitrophenyl phosphate', amount: 1.5, unit: 'g' },
        ],
        instructions: 'Pehle Carbonate/Bicarbonate Buffer banayein. Phir 1.5g Disodium p-nitrophenyl phosphate ko us buffer mein gholkar 1 litre banayein. Stable rehta hai agar 4°C par rakha jaaye. Brown hone par discard karein.'
    },
    'chromotropic_acid': {
        name: 'Chromotropic Acid Reagent',
        type: 'w/v_in_acid',
        components: [ { name: '1,8-dihydroxynaphthalene-3,6-disulfonic acid', amount: 0.5, unit: 'g' } ],
        instructions: '0.5g (500mg) Chromotropic acid ko 72% Sulfuric Acid mein gholkar final volume 100ml poora karein. Yeh ek saturated solution hai.'
    },
    'color_dev_reagent': {
        name: 'Color Developing Reagent (Veg. Fat)',
        type: 'ratio',
        components: [
            { name: 'Water', ratio: 20 },
            { name: 'Nitric Acid', ratio: 14 },
            { name: 'Sulfuric Acid', ratio: 6 }
        ],
        instructions: 'Diye gaye anupaat (ratio) mein teeno cheezon ko mix karein.'
    },
    'crystal_violet': {
        name: "Gram's Crystal Violet",
        type: 'complex',
        components: [
            { name: 'Crystal Violet (90% dye content)', amount: 2, unit: 'g' },
            { name: 'Ethyl Alcohol (95%)', amount: 20, unit: 'ml' },
            { name: 'Ammonium Oxalate', amount: 0.8, unit: 'g' },
            { name: 'Distilled Water (for oxalate)', amount: 80, unit: 'ml' }
        ],
        instructions: 'Crystal violet ko alcohol mein gholein. Ammonium oxalate ko paani mein gholein. Dono solutions ko mix karein.'
    },
    'diphenylamine_2': {
        name: 'Diphenylamine Solution (2% w/v in H₂SO₄)',
        type: 'w/v_in_acid',
        components: [ { name: 'Diphenylamine', amount: 2, unit: 'g' } ],
        instructions: '2g Diphenylamine ko dhyan se 100ml concentrated Sulfuric Acid mein gholein. <strong>Savdhani: Hamesha acid ko paani mein milayein, na ki paani ko acid mein. Suraksha upkaran pehnein.</strong>'
    },
    'dmab': {
        name: 'DMAB Reagent (Urea Test)',
        type: 'complex',
        components: [
            { name: 'DMAB', amount: 1.6, unit: 'g' },
            { name: 'Ethyl Alcohol', amount: 90, unit: 'ml' },
            { name: 'Concentrated HCl', amount: 10, unit: 'ml' }
        ],
        instructions: '1.6g DMAB ko 90ml ethyl alcohol mein gholein aur phir 10ml concentrated HCl milayein. Zaroorat ho toh ethyl alcohol se final volume poora karein.'
    },
    'enzyme_glucoamylase': {
        name: 'Alpha Glucoamylase Enzyme Solution',
        type: 'w/v',
        components: [ { name: 'Alpha Glucoamylase Enzyme', amount: 0.2, unit: 'g' } ],
        instructions: 'Enzyme ko distilled water mein gholkar final volume poora karein.'
    },
    'erichrome_black_t': {
        name: 'Erichrome Black T Indicator',
        type: 'complex',
        components: [
            { name: 'Erichrome Black T', amount: 0.4, unit: 'g'},
            { name: 'Hydroxylamine HCl', amount: 4.5, unit: 'g'},
            { name: 'Ethyl Alcohol (95%)', amount: 100, unit: 'ml'}
        ],
        instructions: 'Chemicals ko ethyl alcohol me gholkar 100ml banayein.'
    },
    'ethanolic_koh_05': {
        name: 'Ethanolic KOH (0.5 N)',
        type: 'w/v',
        components: [ { name: 'Potassium Hydroxide (KOH)', amount: 2.8, unit: 'g' } ],
        instructions: '2.8g KOH ko thode 95% ethanol mein gholein aur phir ethanol se final volume 100ml tak poora karein.'
    },
    'fehlings_a': {
        name: "Fehling's Solution A",
        type: 'w/v',
        components: [{ name: 'Copper(II) sulfate pentahydrate (CuSO₄·5H₂O)', amount: 6.928, unit: 'g' }],
        instructions: '6.928g Copper sulfate ko distilled water mein gholkar 100ml banayein.'
    },
    'fehlings_b': {
        name: "Fehling's Solution B",
        type: 'complex',
        components: [
            { name: 'Potassium sodium tartrate (Rochelle salt)', amount: 34.6, unit: 'g' },
            { name: 'Sodium Hydroxide (NaOH)', amount: 10, unit: 'g' }
        ],
        instructions: 'Dono chemicals ko distilled water mein gholkar 100ml banayein.'
    },
    'ferric_chloride_10': {
        name: 'Ferric Chloride Solution (10% w/v)',
        type: 'w/v',
        components: [
            { name: 'Ferric Chloride (FeCl3)', amount: 10, unit: 'g' }
        ],
        instructions: '10g Ferric Chloride ko 100ml distilled water me gholein. Ye reagent Leach Test for Formalin me istemal hota hai.'
    },
    'furfural_2': {
        name: 'Furfural Solution (2% v/v)',
        type: 'v/v',
        components: [ { name: 'Furfural', amount: 2, unit: 'ml' } ],
        instructions: '2ml Furfural ko 98ml Ethyl Alcohol mein milakar 100ml solution banayein.'
    },
    'grams_iodine': {
        name: "Gram's Iodine",
        type: 'complex',
        components: [
            { name: 'Iodine', amount: 1, unit: 'g' },
            { name: 'Potassium Iodide (KI)', amount: 2, unit: 'g' },
            { name: 'Distilled Water', amount: 300, unit: 'ml' }
        ],
        instructions: 'Iodine aur Potassium Iodide ko paani mein gholein.'
    },
    'hcl_1_3': {
        name: 'Diluted HCl (1:3)',
        type: 'ratio',
        components: [
            { name: 'Concentrated HCl', ratio: 1 },
            { name: 'Distilled Water', ratio: 3 }
        ],
        instructions: '1 hissa Concentrated HCl ko 3 hisse Distilled Water mein dhyan se milayein. Hamesha acid ko paani mein daalein.'
    },
    'iodine_maltodextrin': {
        name: 'Iodine Solution (0.05 N)',
        type: 'fixed',
        instructions: '0.05 N Iodine solution taiyar karna ek standard lab procedure hai. Iske liye aam taur par Potassium Iodate (KIO3) aur Potassium Iodide (KI) ka istemal hota hai. Iski calculation thodi complex hai, isliye standard lab manual refer karein.'
    },
    'iodine_starch': {
        name: 'Iodine Solution (Starch Test)',
        type: 'w/v',
        components: [
            { name: 'Potassium Iodide (KI)', amount: 2.5, unit: 'g' },
            { name: 'Iodine Crystal', amount: 1, unit: 'g' }
        ],
        instructions: 'Potassium Iodide aur Iodine ko thode distilled water mein gholein aur phir paani milakar final volume poora karein.'
    },
    'kmno4_01n': {
        name: 'Potassium Permanganate (0.1 N)',
        type: 'w/v',
        components: [{ name: 'Potassium Permanganate (KMnO₄)', amount: 3.16, unit: 'g' }],
        instructions: '3.16g Potassium Permanganate ko distilled water mein gholkar 100ml banayein.'
    },
    'lactic_acid_10': {
        name: 'Lactic Acid Solution (10%)',
        type: 'v/v',
        components: [ { name: 'Concentrated Lactic Acid', amount: 10, unit: 'ml' } ],
        instructions: 'Concentrated Lactic Acid ko volumetric flask mein lein aur distilled water se final volume poora karein.'
    },
    'mbrt_solution': {
        name: 'MBRT Solution',
        type: 'fixed',
        instructions: 'Standard Methylene Blue Thiocyanate tablet (jaise R-58) ko 200ml sterile ubalte hue distilled water mein gholein. Thanda hone ke baad, sterile distilled water se volume 800ml tak poora karein. Solution ko andhere, thande sthan par rakhein.'
    },
    'methylene_blue': {
        name: 'Methylene Blue Solution (Detergent Test)',
        type: 'w/v',
        components: [ { name: 'Methylene Blue', amount: 0.0125, unit: 'g' } ],
        instructions: '12.5mg (ya 0.0125g) Methylene Blue ko 100ml distilled water mein gholkar solution banayein.'
    },
     'nesslers_reagent': {
        name: 'Nessler’s Reagent (Ammonium Test)',
        type: 'complex',
        components: [
            { name: 'Mercuric Chloride (8g in 150ml water)', amount: 1, unit: 'part' },
            { name: 'Sodium Hydroxide (60g in 150ml water)', amount: 1, unit: 'part' },
            { name: 'Potassium Iodide (16g in 150ml water)', amount: 1, unit: 'part' }
        ],
        instructions: 'Teen alag solutions banayein. Phir solution A ko B me milayein. Is mixture me solution C milayein. Ant me volume ko 500ml tak distilled water se poora karein aur aaram se upar ka saaf hissa istemal karein.'
    },
    'neutral_ferric_chloride_05': {
        name: 'Neutral Ferric Chloride Solution (0.5% w/v)',
        type: 'w/v',
        components: [
            { name: 'Ferric Chloride (FeCl3)', amount: 0.5, unit: 'g' }
        ],
        instructions: 'Ferric Chloride ko distilled water mein gholkar final volume poora karein.'
    },
    'naoh_10': {
        name: 'Sodium Hydroxide Solution (10% w/v)',
        type: 'w/v',
        components: [ { name: 'Sodium Hydroxide (NaOH)', amount: 10, unit: 'g' } ],
        instructions: 'NaOH pellets ko dhyan se distilled water mein gholein aur final volume poora karein. Solution garam ho sakta hai.'
    },
    'na_thio_01n': {
        name: 'Sodium Thiosulfate (0.1 N)',
        type: 'w/v',
        components: [{ name: 'Sodium Thiosulfate (Na₂S₂O₃·5H₂O)', amount: 24.8, unit: 'g' }],
        instructions: '24.8g Sodium Thiosulfate ko uble hue thande distilled water mein gholkar 100ml banayein. Stability ke liye thoda chloroform ya NaOH daalein.'
    },
    'para_phenylenediamine_2': {
        name: 'Para-phenylenediamine Solution (2% w/v)',
        type: 'w/v',
        components: [
            { name: 'Para-phenylenediamine', amount: 2, unit: 'g' }
        ],
        instructions: 'Para-phenylenediamine ko distilled water mein gholkar final volume poora karein.'
    },
    'phosphomolybdic_acid': {
        name: 'Phosphomolybdic Acid Reagent',
        type: 'fixed',
        instructions: 'Yeh ek complex recipe hai. 35g ammonium molybdate aur 5g sodium tungstate ko 400ml 5% (w/v) NaOH solution mein gholein. 20-40 min tak zor se ubaalein. Thanda karke volume 350ml tak karein aur 125ml concentrated (85%) phosphoric acid milayein. Ant mein, distilled water se volume 500ml tak poora karein. Iski taiyari ke liye lab manual follow karein.'
    },
    'potassium_chromate_10': {
        name: 'Potassium Chromate Solution (10% w/v)',
        type: 'w/v',
        components: [ { name: 'Potassium Chromate (K₂CrO₄)', amount: 10, unit: 'g'} ],
        instructions: '10g Potassium Chromate ko distilled water mein gholkar 100ml solution banayein. Iska istemal chloride test mein indicator ke roop mein hota hai.'
    },
    'rosolic_acid': {
        name: 'Rosolic Acid Solution (0.1%)',
        type: 'complex',
        components: [
            { name: 'Rosolic Acid', amount: 0.1, unit: 'g' },
            { name: 'Ethyl Alcohol (95%)', amount: 30, unit: 'ml' }
        ],
        instructions: 'Rosolic acid ko ethyl alcohol mein gholein aur phir distilled water milakar final volume poora karein.'
    },
    'safranin': {
        name: "Gram's Safranin",
        type: 'complex',
        components: [
            { name: 'Safranin O (2.5% solution in 95% ethanol)', amount: 10, unit: 'ml' },
            { name: 'Distilled Water', amount: 100, unit: 'ml' }
        ],
        instructions: 'Dono ko mix karein.'
    },
    'seliwanoff': {
        name: 'Seliwanoff’s Reagent',
        type: 'complex',
        components: [
            { name: 'Resorcinol', amount: 0.5, unit: 'g' },
            { name: 'Distilled Water', amount: 40, unit: 'ml' },
            { name: 'Concentrated HCl', amount: 35, unit: 'ml' }
        ],
        instructions: 'Resorcinol ko 40ml distilled water mein gholein, phir 35ml concentrated HCl milayein. Ant mein, distilled water se final volume poora karein.'
    },
    'silver_nitrate_01n': {
        name: 'Silver Nitrate Solution (0.1 N)',
        type: 'w/v',
        components: [ { name: 'Silver Nitrate (AgNO₃)', amount: 1.7, unit: 'g'} ],
        instructions: '1.7g Silver Nitrate ko 100ml distilled water mein gholkar 0.1 N solution banayein. Brown bottle mein store karein.'
    },
    'stannous_chloride_0025': {
        name: 'Stannous Chloride Solution (0.025% w/v)',
        type: 'w/v',
        components: [ { name: 'Stannous Chloride (SnCl2)', amount: 0.025, unit: 'g' } ],
        instructions: 'Stannous Chloride ko distilled water mein gholkar final volume poora karein.'
    },
     'tca_24': {
        name: 'Trichloroacetic Acid (TCA) 24% w/v',
        type: 'w/v',
        components: [
            { name: 'Trichloroacetic Acid', amount: 24, unit: 'g' }
        ],
        instructions: '24g Trichloroacetic Acid ko distilled water mein gholkar 100ml solution banayein.'
    },
    'urease_2': {
        name: 'Urease Solution (2% w/v)',
        type: 'w/v',
        components: [ { name: 'Urease Enzyme', amount: 2, unit: 'g' } ],
        instructions: 'Urease enzyme ko distilled water mein gholkar final volume poora karein.'
    },
    'zinc_copper_precipitant': {
        name: 'Zinc-Copper Precipitant (Phosphatase)',
        type: 'complex',
        components: [
            { name: 'Zinc Sulphate (ZnSO4.7H2O)', amount: 25, unit: 'g'},
            { name: 'Copper Sulphate (CuSO4.5H2O)', amount: 6, unit: 'g'}
        ],
        instructions: 'Dono chemicals ko distilled water me gholkar 100ml banayein.'
    }
};
