export const waterTestingContent = {
    hi: {
        title: "A to Z Water Testing Guide",
        description: "Paani ki quality check karne ke common parameters, unke simplified procedures aur calculation methods ke baare mein guide.",
        note_title: "Dhyan rahe",
        note_text: "Yeh sirf kuch tests hain, poori 'A to Z' list nahi. Actual laboratory procedures zyada detailed ho sakte hain aur special equipment aur chemicals ki zaroorat pad sakti hai.",
        tests: [
            {
                id: 'alkalinity',
                title: 'Alkalinity (Khaarepan)',
                intro: 'Alkalinity paani ki acids ko neutralize karne ki capacity ko measure karti hai. Yeh mainly bicarbonate, carbonate, aur hydroxide ions ki wajah se hoti hai.',
                procedure: [
                    'Ek clean conical flask mein paani sample ka ek fixed volume (jaise 100 mL) lein.',
                    '2-3 drops phenolphthalein indicator daalein. Agar solution pink ho jaaye, toh standard acid solution (jaise 0.02 N H₂SO₄) se titrate karein jab tak pink color gayab na ho jaaye. Acid ka volume (V₁) note karein.',
                    'Ussi solution mein 2-3 drops methyl orange indicator daalein.',
                    'Standard acid solution se titrate karna continue karein jab tak color yellow se orange/red na ho jaaye. Total acid ka volume (V₂) note karein.',
                ],
                calculation: 'Total Alkalinity (mg/L as CaCO₃) = (V₂ &times; N &times; 50000) / Volume of Sample (mL)'
            },
            {
                id: 'bod',
                title: 'Biochemical Oxygen Demand (BOD)',
                intro: 'BOD paani ke sample mein organic matter ko decompose karne mein microorganisms dwara consume ki gayi oxygen ki amount ko measure karta hai (usually 5 din 20°C par).',
                procedure: [
                    'BOD dilution water use karke paani sample ki alag-alag dilutions banayein.',
                    'Har dilution ke liye do BOD bottles bharein: ek initial DO ke liye aur ek incubation ke liye.',
                    'Initial Dissolved Oxygen (DOᵢ) measure karein.',
                    'Baaki bottles ko 5 din ke liye 20°C par andhere mein incubate karein.',
                    '5 din baad, Final Dissolved Oxygen (DOբ) measure karein.',
                ],
                calculation: 'BOD₅ (mg/L) = [ (DOᵢ - DOբ) - (Bᵢ - Bբ) &times; f ] / Dilution Factor'
            },
            {
                id: 'chloride',
                title: 'Chloride',
                intro: 'Chloride ions paani mein naturally hote hain lekin industrial wastes ya sewage se pollution bhi indicate kar sakte hain.',
                procedure: [
                    'Ek conical flask mein paani sample (jaise 50 mL) lein.',
                    'pH ko 7 se 10 ke beech adjust karein.',
                    '1 mL potassium chromate indicator daalein.',
                    'Standard silver nitrate (AgNO₃) solution se titrate karein jab tak ek persistent reddish-brown precipitate na ban jaaye. Volume (V_sample) note karein.',
                    'Distilled water ke saath ek blank titration bhi karein (V_blank).',
                ],
                calculation: 'Chloride (mg/L) = [ (V_sample - V_blank) &times; N &times; 35.45 &times; 1000 ] / Volume of Sample (mL)'
            },
            {
                id: 'do',
                title: 'Dissolved Oxygen (DO)',
                intro: 'Dissolved oxygen aquatic life ke liye bahut zaruri hai aur paani ki quality ka indicator hai.',
                procedure: [
                    'Ek 300 mL BOD bottle ko paani se carefully bharein.',
                    '2 mL manganese sulfate solution, phir 2 mL alkali-iodide-azide reagent daalein. Mix karein.',
                    'Precipitate ko settle hone dein.',
                    '2 mL concentrated sulfuric acid daalein aur dissolve hone tak mix karein.',
                    '200 mL solution ko titrate karein standard sodium thiosulfate se jab tak pale straw color na reh jaaye.',
                    '1-2 mL starch indicator daalein (solution blue ho jaayega).',
                    'Titrate karna continue karein jab tak blue color gayab na ho jaaye. Volume (V) note karein.',
                ],
                calculation: 'DO (mg/L) = (V &times; N &times; 8000) / Volume of Sample Titrated (mL)'
            },
            {
                id: 'hardness',
                title: 'Total Hardness (Kul Kathorta)',
                intro: 'Paani ki hardness mainly calcium aur magnesium ions ki wajah se hoti hai.',
                procedure: [
                    'Ek conical flask mein paani sample (jaise 50 mL) lein.',
                    '1-2 mL ammonia buffer solution daal kar pH 10 karein.',
                    'Ek chutki Eriochrome Black T (EBT) indicator daalein (solution wine red ho jaayega).',
                    'Standard EDTA solution se titrate karein jab tak wine red color sky blue mein change na ho jaaye. Volume (V) note karein.',
                ],
                calculation: 'Total Hardness (mg/L as CaCO₃) = (V &times; M &times; 100.086 &times; 1000) / Volume of Sample (mL)'
            },
            {
                id: 'cod',
                title: 'Chemical Oxygen Demand (COD)',
                intro: 'COD organic aur inorganic pollutants ko oxidize karne ke liye required oxygen ki total amount ko measure karta hai.',
                procedure: [
                    'Sample ko digestion solution aur sulfuric acid reagent ke saath mix karein.',
                    'Sample ko COD reactor mein 150°C par 2 ghante ke liye reflux karein.',
                    'Thanda karke sample ko standard Ferrous Ammonium Sulfate (FAS) solution se titrate karein. Volume (V_sample) note karein.',
                    'Ek blank titration bhi karein (V_blank).',
                ],
                calculation: 'COD (mg/L) = [ (V_blank - V_sample) &times; N &times; 8000 ] / Volume of Sample (mL)'
            },
            {
                id: 'tss',
                title: 'Total Suspended Solids (TSS)',
                intro: 'TSS paani mein ghule hue solid particles ka measure hai jo filter paper par reh jaate hain.',
                procedure: [
                    'Ek tole huye (weighed) glass fiber filter paper (W₁) se paani ka fixed volume filter karein.',
                    'Filter paper ko solids ke saath 103-105°C par sukhaayein.',
                    'Desiccator mein thanda karke dobara tolein (W₂).',
                ],
                calculation: 'TSS (mg/L) = [ (W₂ - W₁) &times; 1000 ] / Volume of Sample (mL)'
            }
        ],
        important_note: {
            title: "Zaruri Baat:",
            text: "Hamesha safety rules follow karein aur lab mein kaam karte waqt sahi protective gear (PPE) pehnein. Accurate results ke liye, certified labs aur standard methods ko follow karna behtar hai."
        }
    },
    en: {
        title: "A to Z Water Testing Guide",
        description: "A guide to common parameters for checking water quality, their simplified procedures, and calculation methods.",
        note_title: "Please Note",
        note_text: "These are just a few tests, not the complete 'A to Z' list. Actual laboratory procedures may be more detailed and require special equipment and chemicals.",
        tests: [
            {
                id: 'alkalinity',
                title: 'Alkalinity',
                intro: 'Alkalinity measures the capacity of water to neutralize acids. It is mainly due to bicarbonate, carbonate, and hydroxide ions.',
                procedure: [
                    'Take a fixed volume of water sample (e.g., 100 mL) in a clean conical flask.',
                    'Add 2-3 drops of phenolphthalein indicator. If the solution turns pink, titrate with a standard acid solution (e.g., 0.02 N H₂SO₄) until the pink color disappears. Note the volume of acid (V₁).',
                    'Add 2-3 drops of methyl orange indicator to the same solution.',
                    'Continue titrating with the standard acid solution until the color changes from yellow to orange/red. Note the total volume of acid (V₂).',
                ],
                calculation: 'Total Alkalinity (mg/L as CaCO₃) = (V₂ &times; N &times; 50000) / Volume of Sample (mL)'
            },
            {
                id: 'bod',
                title: 'Biochemical Oxygen Demand (BOD)',
                intro: 'BOD measures the amount of oxygen consumed by microorganisms to decompose organic matter in a water sample (usually over 5 days at 20°C).',
                procedure: [
                    'Prepare various dilutions of the water sample using BOD dilution water.',
                    'Fill two BOD bottles for each dilution: one for initial DO and one for incubation.',
                    'Measure the Initial Dissolved Oxygen (DOᵢ).',
                    'Incubate the remaining bottles in the dark at 20°C for 5 days.',
                    'After 5 days, measure the Final Dissolved Oxygen (DOբ).',
                ],
                calculation: 'BOD₅ (mg/L) = [ (DOᵢ - DOբ) - (Bᵢ - Bբ) &times; f ] / Dilution Factor'
            },
            {
                id: 'chloride',
                title: 'Chloride',
                intro: 'Chloride ions are naturally present in water but can also indicate pollution from industrial wastes or sewage.',
                procedure: [
                    'Take a water sample (e.g., 50 mL) in a conical flask.',
                    'Adjust the pH to between 7 and 10.',
                    'Add 1 mL of potassium chromate indicator.',
                    'Titrate with a standard silver nitrate (AgNO₃) solution until a persistent reddish-brown precipitate forms. Note the volume (V_sample).',
                    'Also, perform a blank titration with distilled water (V_blank).',
                ],
                calculation: 'Chloride (mg/L) = [ (V_sample - V_blank) &times; N &times; 35.45 &times; 1000 ] / Volume of Sample (mL)'
            },
            {
                id: 'do',
                title: 'Dissolved Oxygen (DO)',
                intro: 'Dissolved oxygen is essential for aquatic life and is an indicator of water quality.',
                procedure: [
                    'Carefully fill a 300 mL BOD bottle with water.',
                    'Add 2 mL of manganese sulfate solution, then 2 mL of alkali-iodide-azide reagent. Mix.',
                    'Allow the precipitate to settle.',
                    'Add 2 mL of concentrated sulfuric acid and mix until dissolved.',
                    'Titrate 200 mL of the solution with standard sodium thiosulfate until a pale straw color remains.',
                    'Add 1-2 mL of starch indicator (the solution will turn blue).',
                    'Continue titrating until the blue color disappears. Note the volume (V).',
                ],
                calculation: 'DO (mg/L) = (V &times; N &times; 8000) / Volume of Sample Titrated (mL)'
            },
            {
                id: 'hardness',
                title: 'Total Hardness',
                intro: 'Water hardness is mainly due to calcium and magnesium ions.',
                procedure: [
                    'Take a water sample (e.g., 50 mL) in a conical flask.',
                    'Add 1-2 mL of ammonia buffer solution to bring the pH to 10.',
                    'Add a pinch of Eriochrome Black T (EBT) indicator (the solution will turn wine red).',
                    'Titrate with a standard EDTA solution until the wine red color changes to sky blue. Note the volume (V).',
                ],
                calculation: 'Total Hardness (mg/L as CaCO₃) = (V &times; M &times; 100.086 &times; 1000) / Volume of Sample (mL)'
            },
            {
                id: 'cod',
                title: 'Chemical Oxygen Demand (COD)',
                intro: 'COD measures the total amount of oxygen required to oxidize organic and inorganic pollutants.',
                procedure: [
                    'Mix the sample with a digestion solution and sulfuric acid reagent.',
                    'Reflux the sample in a COD reactor at 150°C for 2 hours.',
                    'After cooling, titrate the sample with a standard Ferrous Ammonium Sulfate (FAS) solution. Note the volume (V_sample).',
                    'Also, perform a blank titration (V_blank).',
                ],
                calculation: 'COD (mg/L) = [ (V_blank - V_sample) &times; N &times; 8000 ] / Volume of Sample (mL)'
            },
            {
                id: 'tss',
                title: 'Total Suspended Solids (TSS)',
                intro: 'TSS is a measure of solid particles dissolved in water that remain on a filter paper.',
                procedure: [
                    'Filter a fixed volume of water through a weighed glass fiber filter paper (W₁).',
                    'Dry the filter paper with the solids at 103-105°C.',
                    'Cool in a desiccator and weigh again (W₂).',
                ],
                calculation: 'TSS (mg/L) = [ (W₂ - W₁) &times; 1000 ] / Volume of Sample (mL)'
            }
        ],
        important_note: {
            title: "Important Note:",
            text: "Always follow safety rules and wear appropriate protective gear (PPE) when working in the lab. For accurate results, it is better to follow certified labs and standard methods."
        }
    }
}
