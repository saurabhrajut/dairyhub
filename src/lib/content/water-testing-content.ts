export const waterTestingContent = {
    hi: {
        title: "Water Testing Guide",
        description: "Paani ki quality check karne ke common parameters, unke simplified procedures aur calculation methods ke baare mein guide.",
        note_title: "Dhyan rahe",
        note_text: "Yeh sirf kuch tests hain. Actual laboratory procedures zyada detailed ho sakte hain aur special equipment aur chemicals ki zaroorat pad sakti hai.",
        tests: [
            {
                id: 'alkalinity',
                title: 'Alkalinity (Kshaareeyata)',
                intro: 'Alkalinity paani ki acids ko neutralize karne ki capacity ko measure karti hai. Yeh mainly bicarbonate, carbonate, aur hydroxide ions ki wajah se hoti hai.',
                procedure: [
                    'Ek clean conical flask mein paani sample ka ek fixed volume (jaise 100 mL) lein.',
                    '2-3 drops phenolphthalein indicator daalein. Agar solution pink ho jaaye, toh standard acid solution (jaise 0.02 N H₂SO₄) se titrate karein jab tak pink color gayab na ho jaaye. Acid ka volume (P) note karein.',
                    'Ussi solution mein 2-3 drops methyl orange indicator daalein.',
                    'Standard acid solution se titrate karna continue karein jab tak color yellow se orange/red na ho jaaye. Kul istemaal hue acid ka volume (T) note karein.',
                ],
                calculation: 'Total Alkalinity (mg/L as CaCO₃) = (T &times; Normality of Acid &times; 50000) / Volume of Sample (mL)'
            },
            {
                id: 'bod',
                title: 'Biochemical Oxygen Demand (BOD)',
                intro: 'BOD paani ke sample mein organic matter ko decompose karne mein microorganisms dwara 5 din mein 20°C par consume ki gayi oxygen ki matra ko maapta hai. Yeh paani ke pollution level ka ek mahatvapurna indicator hai.',
                procedure: [
                    'BOD dilution water ka istemal karke paani ke sample ki alag-alag dilutions banayein.',
                    'Har dilution ke liye do BOD bottles bharein: ek initial DO ke liye aur ek incubation ke liye.',
                    'Pehli bottle mein turant Dissolved Oxygen (DO₁) maapein.',
                    'Doosri bottles ko 5 din ke liye 20°C par andhere mein incubate karein.',
                    '5 din baad, doosri bottles mein Dissolved Oxygen (DO₅) maapein.',
                    'Ek blank sample (sirf dilution water) ke liye bhi yahi process repeat karein (B₁ aur B₅).',
                ],
                calculation: 'BOD₅ (mg/L) = [ (DO₁ - DO₅) - (B₁ - B₅) ] &times; Dilution Factor'
            },
            {
                id: 'chloride',
                title: 'Chloride',
                intro: 'Chloride ions paani mein naturally hote hain lekin inki adhik matra industrial wastes ya sewage se pollution ka sanket de sakti hai. Iska test Mohr\'s method se kiya jaata hai.',
                procedure: [
                    'Ek conical flask mein paani sample (jaise 50 mL) lein.',
                    'pH ko 7 se 10 ke beech adjust karein.',
                    '1 mL potassium chromate indicator daalein.',
                    'Standard silver nitrate (AgNO₃) solution se titrate karein jab tak ek persistent reddish-brown precipitate na ban jaaye. Volume (V_sample) note karein.',
                    'Distilled water ke saath ek blank titration bhi karein (V_blank).',
                ],
                calculation: 'Chloride (mg/L) = [ (V_sample - V_blank) &times; N of AgNO₃ &times; 35.45 &times; 1000 ] / Volume of Sample (mL)'
            },
             {
                id: 'cod',
                title: 'Chemical Oxygen Demand (COD)',
                intro: 'COD organic aur inorganic pollutants ko ek strong chemical oxidant (potassium dichromate) se oxidize karne ke liye zaruri oxygen ki kul matra ko maapta hai. Yeh BOD se zyada tezi se result deta hai.',
                procedure: [
                    'Sample ko ek digestion flask mein lein.',
                    'Usmein potassium dichromate solution aur sulfuric acid reagent (silver sulfate ke saath) daalein.',
                    'Sample ko COD reactor mein 150°C par 2 ghante ke liye reflux (digest) karein.',
                    'Thanda hone ke baad, bache hue unreacted dichromate ko standard Ferrous Ammonium Sulfate (FAS) solution se titrate karein. Volume (V_sample) note karein.',
                    'Ek blank titration (bina sample ke) bhi karein (V_blank).',
                ],
                calculation: 'COD (mg/L) = [ (V_blank - V_sample) &times; Normality of FAS &times; 8000 ] / Volume of Sample (mL)'
            },
            {
                id: 'do',
                title: 'Dissolved Oxygen (DO)',
                intro: 'Dissolved oxygen aquatic life ke liye bahut zaruri hai aur paani ki quality ka ek mukhya indicator hai. Iska test Winkler method se kiya jaata hai.',
                procedure: [
                    'Ek 300 mL BOD bottle ko paani se carefully bharein, air bubbles na aane dein.',
                    '2 mL manganese sulfate solution, phir 2 mL alkali-iodide-azide reagent daalein. Bottle band karke mix karein.',
                    'Bane hue precipitate ko settle hone dein.',
                    '2 mL concentrated sulfuric acid daalein aur poori tarah dissolve hone tak mix karein.',
                    'Ek nishchit volume (jaise 200 mL) ko standard sodium thiosulfate (0.025N) se titrate karein jab tak pale straw color na reh jaaye.',
                    '1-2 mL starch indicator daalein (solution neela ho jaayega).',
                    'Titrate karna continue karein jab tak neela rang poori tarah gayab na ho jaaye. Volume (V) note karein.',
                ],
                calculation: 'DO (mg/L) = (V of Titrant &times; N of Titrant &times; 8 &times; 1000) / Volume of Sample Titrated (mL)'
            },
            {
                id: 'hardness',
                title: 'Total Hardness (Kul Kathorta)',
                intro: 'Paani ki hardness mainly calcium aur magnesium ions ki wajah se hoti hai. Iska test EDTA titration method se kiya jaata hai.',
                procedure: [
                    'Ek conical flask mein paani sample (jaise 50 mL) lein.',
                    '1-2 mL ammonia buffer solution daal kar pH ko 10 par set karein.',
                    'Ek chutki Eriochrome Black T (EBT) indicator daalein (solution wine red ho jaayega).',
                    'Standard EDTA solution (0.01M) se titrate karein jab tak wine red color sky blue mein change na ho jaaye. Volume (V) note karein.',
                ],
                calculation: 'Total Hardness (mg/L as CaCO₃) = (V of EDTA &times; Molarity of EDTA &times; 100.086 &times; 1000) / Volume of Sample (mL)'
            },
            {
                id: 'tds',
                title: 'Total Dissolved Solids (TDS)',
                intro: 'TDS paani mein ghule hue sabhi organic aur inorganic solids ki kul matra hai. Iska test gravimetric method se hota hai.',
                procedure: [
                    'Ek saaf, sukhe, aur pehle se tole hue beaker (W₁) ko lein.',
                    'Ek nishchit volume (jaise 100 mL) filter kiye hue paani ko beaker mein lein.',
                    'Beaker ko hot plate ya water bath par rakhein taaki paani poori tarah evaporate ho jaaye.',
                    'Beaker ko 180°C par hot air oven mein 1 ghante ke liye rakhein.',
                    'Beaker ko desiccator mein thanda karke dobara tolein (W₂).',
                ],
                calculation: 'TDS (mg/L) = [ (W₂ - W₁) in mg &times; 1000 ] / Volume of Sample (mL)'
            },
            {
                id: 'tss',
                title: 'Total Suspended Solids (TSS)',
                intro: 'TSS paani mein ghule hue solid particles ka measure hai jo filter paper par reh jaate hain.',
                procedure: [
                    'Ek pehle se tole hue (weighed) glass fiber filter paper (W₁) se paani ka ek nishchit volume filter karein.',
                    'Filter paper ko solids ke saath 103-105°C par hot air oven mein 1 ghante ke liye sukhaayein.',
                    'Desiccator mein thanda karke dobara tolein (W₂).',
                ],
                calculation: 'TSS (mg/L) = [ (W₂ - W₁) in mg &times; 1000 ] / Volume of Sample (mL)'
            }
        ],
        important_note: {
            title: "Zaruri Baat:",
            text: "Hamesha safety rules follow karein aur lab mein kaam karte waqt sahi protective gear (PPE) pehnein. Accurate results ke liye, certified labs aur standard methods ko follow karna behtar hai."
        }
    },
    en: {
        title: "Water Testing Guide",
        description: "A guide to common parameters for checking water quality, their simplified procedures, and calculation methods.",
        note_title: "Please Note",
        note_text: "These are just a few tests. Actual laboratory procedures may be more detailed and require special equipment and chemicals.",
        tests: [
            {
                id: 'alkalinity',
                title: 'Alkalinity',
                intro: 'Alkalinity measures the capacity of water to neutralize acids. It is mainly due to bicarbonate, carbonate, and hydroxide ions.',
                procedure: [
                    'Take a fixed volume of water sample (e.g., 100 mL) in a clean conical flask.',
                    'Add 2-3 drops of phenolphthalein indicator. If the solution turns pink, titrate with a standard acid solution (e.g., 0.02 N H₂SO₄) until the pink color disappears. Note the volume of acid (P).',
                    'Add 2-3 drops of methyl orange indicator to the same solution.',
                    'Continue titrating with the standard acid solution until the color changes from yellow to orange/red. Note the total volume of acid used (T).',
                ],
                calculation: 'Total Alkalinity (mg/L as CaCO₃) = (T &times; Normality of Acid &times; 50000) / Volume of Sample (mL)'
            },
            {
                id: 'bod',
                title: 'Biochemical Oxygen Demand (BOD)',
                intro: 'BOD measures the amount of oxygen consumed by microorganisms to decompose organic matter in a water sample over 5 days at 20°C. It is a crucial indicator of water pollution.',
                procedure: [
                    'Prepare various dilutions of the water sample using BOD dilution water.',
                    'Fill two BOD bottles for each dilution: one for initial DO and one for incubation.',
                    'Measure the Initial Dissolved Oxygen (DO₁) in the first bottle immediately.',
                    'Incubate the second set of bottles in the dark at 20°C for 5 days.',
                    'After 5 days, measure the Final Dissolved Oxygen (DO₅) in the second set of bottles.',
                    'Repeat the same process for a blank sample (only dilution water) to find its initial (B₁) and final (B₅) DO values.',
                ],
                calculation: 'BOD₅ (mg/L) = [ (DO₁ - DO₅) - (B₁ - B₅) ] &times; Dilution Factor'
            },
            {
                id: 'chloride',
                title: 'Chloride',
                intro: 'Chloride ions are naturally present in water but high concentrations can indicate pollution from industrial wastes or sewage. The test is performed using Mohr\'s method.',
                procedure: [
                    'Take a water sample (e.g., 50 mL) in a conical flask.',
                    'Adjust the pH to between 7 and 10.',
                    'Add 1 mL of potassium chromate indicator.',
                    'Titrate with a standard silver nitrate (AgNO₃) solution until a persistent reddish-brown precipitate forms. Note the volume (V_sample).',
                    'Also, perform a blank titration with distilled water (V_blank).',
                ],
                calculation: 'Chloride (mg/L) = [ (V_sample - V_blank) &times; N of AgNO₃ &times; 35.45 &times; 1000 ] / Volume of Sample (mL)'
            },
            {
                id: 'cod',
                title: 'Chemical Oxygen Demand (COD)',
                intro: 'COD measures the total amount of oxygen required to oxidize both organic and inorganic pollutants using a strong chemical oxidant (potassium dichromate). It provides faster results than BOD.',
                procedure: [
                    'Take the sample in a digestion flask.',
                    'Add potassium dichromate solution and a sulfuric acid reagent (containing silver sulfate).',
                    'Reflux (digest) the sample in a COD reactor at 150°C for 2 hours.',
                    'After cooling, titrate the excess unreacted dichromate with a standard Ferrous Ammonium Sulfate (FAS) solution. Note the volume (V_sample).',
                    'Also, perform a blank titration (without the sample) (V_blank).',
                ],
                calculation: 'COD (mg/L) = [ (V_blank - V_sample) &times; Normality of FAS &times; 8000 ] / Volume of Sample (mL)'
            },
            {
                id: 'do',
                title: 'Dissolved Oxygen (DO)',
                intro: 'Dissolved oxygen is essential for aquatic life and is a key indicator of water quality. It is tested using the Winkler method.',
                procedure: [
                    'Carefully fill a 300 mL BOD bottle with water, avoiding air bubbles.',
                    'Add 2 mL of manganese sulfate solution, then 2 mL of alkali-iodide-azide reagent. Stopper and mix.',
                    'Allow the precipitate to settle.',
                    'Add 2 mL of concentrated sulfuric acid and mix until completely dissolved.',
                    'Titrate a specific volume (e.g., 200 mL) with standard sodium thiosulfate (0.025N) until a pale straw color remains.',
                    'Add 1-2 mL of starch indicator (the solution will turn blue).',
                    'Continue titrating until the blue color disappears completely. Note the volume (V).',
                ],
                calculation: 'DO (mg/L) = (V of Titrant &times; N of Titrant &times; 8 &times; 1000) / Volume of Sample Titrated (mL)'
            },
            {
                id: 'hardness',
                title: 'Total Hardness',
                intro: 'Water hardness is mainly due to calcium and magnesium ions. It is tested using the EDTA titration method.',
                procedure: [
                    'Take a water sample (e.g., 50 mL) in a conical flask.',
                    'Add 1-2 mL of ammonia buffer solution to set the pH at 10.',
                    'Add a pinch of Eriochrome Black T (EBT) indicator (the solution will turn wine red).',
                    'Titrate with a standard EDTA solution (0.01M) until the wine red color changes to sky blue. Note the volume (V).',
                ],
                calculation: 'Total Hardness (mg/L as CaCO₃) = (V of EDTA &times; Molarity of EDTA &times; 100.086 &times; 1000) / Volume of Sample (mL)'
            },
            {
                id: 'tds',
                title: 'Total Dissolved Solids (TDS)',
                intro: 'TDS is the total amount of all dissolved organic and inorganic solids in water. It is tested using the gravimetric method.',
                procedure: [
                    'Take a clean, dry, pre-weighed beaker (W₁).',
                    'Place a known volume (e.g., 100 mL) of filtered water into the beaker.',
                    'Evaporate the water completely on a hot plate or water bath.',
                    'Dry the beaker in a hot air oven at 180°C for one hour.',
                    'Cool the beaker in a desiccator and weigh it again (W₂).',
                ],
                calculation: 'TDS (mg/L) = [ (W₂ - W₁) in mg &times; 1000 ] / Volume of Sample (mL)'
            },
            {
                id: 'tss',
                title: 'Total Suspended Solids (TSS)',
                intro: 'TSS is a measure of solid particles that remain on a filter paper.',
                procedure: [
                    'Filter a known volume of water through a pre-weighed glass fiber filter paper (W₁).',
                    'Dry the filter paper with the retained solids in a hot air oven at 103-105°C for one hour.',
                    'Cool in a desiccator and weigh again (W₂).',
                ],
                calculation: 'TSS (mg/L) = [ (W₂ - W₁) in mg &times; 1000 ] / Volume of Sample (mL)'
            }
        ],
        important_note: {
            title: "Important Note:",
            text: "Always follow safety rules and wear appropriate protective gear (PPE) when working in the lab. For accurate results, it is better to follow certified labs and standard methods."
        }
    }
}
