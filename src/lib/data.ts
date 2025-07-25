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
    lactic: { name: "Lactic Acid (C₃H₆O₃)", molarMass: 90.08, nFactor: 1, type: "liquid", purity: 88, density: 1.2 },
    acetic: { name: "Acetic Acid (CH₃COOH)", molarMass: 60.05, nFactor: 1, type: "liquid", purity: 99.8, density: 1.05 },
    nitric: { name: 'Nitric Acid (HNO₃)', molarMass: 63.01, nFactor: 1, type: 'liquid', purity: 70, density: 1.42 },
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
  },
  bases: {
    naoh: { name: "Sodium Hydroxide (NaOH)", molarMass: 40.0, nFactor: 1, type: "solid" },
    koh: { name: "Potassium Hydroxide (KOH)", molarMass: 56.11, nFactor: 1, type: "solid" },
    na2co3: { name: "Sodium Carbonate (Na₂CO₃)", molarMass: 105.99, nFactor: 2, type: "solid" },
    caoh2: { name: 'Calcium Hydroxide (Ca(OH)₂)', molarMass: 74.09, nFactor: 2, type: 'solid' },
    nahco3: { name: 'Sodium Bicarbonate (NaHCO₃)', molarMass: 84.01, nFactor: 1, type: 'solid' },
    nh4oh: { name: "Ammonium Hydroxide (NH₄OH)", molarMass: 35.05, nFactor: 1, type: "liquid", purity: 25, density: 0.91 },
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
    na2co3_std: { name: "Sodium Carbonate (Na₂CO₃)", molarMass: 105.99, nFactor: 2 },
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

export const preservativesData = [
    { title: 'Neutralizers', content: `<p>Doodh mein acidity ko kam karne ke liye, NaOH, Na2CO3, aur NaHCO3 jaise padarth milaye jaate hain. Inka pata pH indicators ya raakh ki alkalinity maap kar lagaya jaata hai.</p><h4>(a) Rosolic Acid Test</h4><ol><li>Ek test tube mein 10 ml doodh lein aur utni hi matra mein ethyl alcohol (95%) milayein.</li><li>Kuch boondein rosolic acid solution (0.1%) ki daalein aur mix karein.</li><li>Agar <strong>gulabi-laal rang</strong> aata hai toh neutralizer maujood hai, jabki shuddh doodh bhoora ho jaata hai.</li></ol>` },
    { title: 'Boric Acid aur Borates', content: `<p><strong>Siddhant:</strong> Boric acid aur uske salts haldi paper ke saath laal rang dete hain.</p><ol><li>Ek test tube mein 5 ml doodh lein aur 1 ml concentrated HCl milayein.</li><li>Achhe se mix karein, phir haldi paper ki ek strip ko ismein duboye.</li><li>Paper strip ko sukhayein. <strong>Laal rang</strong> boric acid ki maujoodgi batata hai.</li><li>Phir ek boond ammonium hydroxide solution daalein. Laal se <strong>gehra-hara rang</strong> hona confirm karta hai.</li></ol>` },
    { title: 'Formalin', content: `<p>Formalin (formaldehyde ka 40% solution) ferric salts ke saath baingani rang deta hai.</p><h4>Hehner Test</h4><ol><li>Ek test tube mein 10 ml doodh ka sample lein.</li><li>Dheere se 0.5 ml 10% ferric chloride solution daalein.</li><li>5 ml concentrated sulfuric acid ko test tube ke kinare se daalein.</li><li>Dono liquids ke jod par <strong>baingani se jaamuni rang ka ring</strong> banna formalin ki maujoodgi batata hai.</li></ol>`},
    { title: 'Hydrogen Peroxide', content: `<p><strong>Siddhant:</strong> Hydrogen peroxide para-phenylenediamine ko oxidize karke uska rang peele se neela kar deta hai.</p><ol><li>Ek test tube mein 2 ml doodh lein, 2ml alcohol milayein.</li><li>5 boondein 2% para-phenylenediamine solution ki daalein aur achhe se hilayein.</li><li><strong>Neela rang</strong> aana confirm karta hai ki doodh mein hydrogen peroxide hai.</li></ol>`}
];

export const adulterantsData = [
    { title: 'Sucrose ya Ganne ki Chini', content: `<p><strong>Siddhant:</strong> Seliwanoff’s reagent ka istemal hota hai. Garam karne par fructose resorcinol ke saath milkar laal rang banata hai.</p><ol><li>1 ml doodh ka sample lein aur usmein 1 ml 0.5% resorcinol solution milayein.</li><li>Mix karein aur test tube ko 5 minute tak ubalte paani mein garam karein.</li><li>Agar <strong>gulabi-laal rang</strong> banta hai toh doodh mein chini hai.</li></ol>` },
    { title: 'Starch ya Anaaj ke Aate', content: `<p><strong>Siddhant:</strong> Starch iodine ke saath milkar baingani-neela rang ka complex banata hai.</p><ol><li>Ek test tube mein 5.0 ml doodh lein aur ubaal lein.</li><li>Kamre ke taapman par thanda karein.</li><li>1-2 boondein iodine solution ki daalein. <strong>Neela rang</strong> aana starch ki maujoodgi batata hai.</li></ol>` },
    { title: 'Urea', content: `<p>Doodh mein natural urea 200-700 ppm hota hai. Isse zyada hona "milawati urea" batata hai.</p><h4>DMAB reagent se</h4><ol><li>Ek test tube mein 5 ml doodh lein.</li><li>Usmein 5 ml 1.6% DMAB reagent milayein.</li><li><strong>Gehra peela rang</strong> aana milawati urea ki nishani hai.</li></ol>`},
    { title: 'Detergent', content: `<p><strong>Siddhant:</strong> Methylene blue detergent ke saath milkar neela complex banata hai jo chloroform mein ghulansheel hai.</p><ol><li>1 ml doodh lein, 1 ml methylene blue solution aur phir 2 ml chloroform milayein.</li><li>15 second tak vortex karein aur centrifuge karein.</li><li>Neeche wali (chloroform) layer mein zyada <strong>gehra neela rang</strong> aana detergent ki maujoodgi batata hai.</li></ol>`},
    { title: 'Vanaspati Tel (Baudouin Test)', content: `
      <p><strong>Siddhant:</strong> Vanaspati mein 5% til ka tel milana anivarya hai. Tel se nikla Sesamol furfural ke saath milkar laal rang banata hai.</p>
      <ol>
        <li>Doodh ke sample se ghee banayein.</li>
        <li>Ek test tube mein 5 g pighla hua fat lein, 5 ml concentrated HCl aur 0.4 ml 2% furfural solution daalein. 2 minute tak vortex karein.</li>
        <li>Tube ko khada rehne dein. <strong>Gulabi ya laal rang</strong> aana vanaspati ki maujoodgi batata hai.</li>
      </ol>
    `},
    { title: 'Mineral Oil', content: `
      <p><strong>Siddhant:</strong> Mineral oil (jo khane layak nahi hote) alkali ke saath saponify (saabun mein badalna) nahi hote, jabki khane wale tel ho jaate hain. Isse dhundhlapan (turbidity) paida hota hai.</p>
      <ol>
        <li>Ek test tube mein 1 g saaf fat lein aur 5 ml 0.5 N ethanolic KOH solution daalein.</li>
        <li>10 minute tak ubalte paani mein reflux karein.</li>
        <li>Saponified solution mein 5 ml distilled water daalein.</li>
        <li><strong>Dhundhlapan</strong> aana mineral oil ki maujoodgi batata hai.</li>
      </ol>
    `}
];
