/**
 * Compositional Analysis: Cereals & Grain Products (Atta, Maida, Suji, Besan, Rice, Oats, Poha)
 * Independent product module for easy future updates and extensions.
 */

export const cerealsGrainsHi = {
        title: "अनाज और अनाज उत्पाद (Cereals & Grain Products: Atta, Maida, Suji, Besan, Rice, Oats, Poha)",
        tests: [
          {
            title: "Moisture (Nami) ka Determination (130°C Rapid Air Oven / 105°C Method)",
            purpose: `<div class="bg-cyan-50 border border-cyan-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Water Activity aur Shelf Life:</strong> Nami (Moisture) grain aur flour ki storage life ka sabse critical factor hai. Agar moisture 14.0% se zyada hoti hai, to water activity (a_w > 0.65) badh jaati hai, jisse mold (phaphoond) aur Aspergillus flavus ki growth shuru ho jaati hai jo poisonous Aflatoxins paida karte hain.</li>
                  <li><strong>Enzymatic Breakdown aur Souring:</strong> High moisture par flour ke endogenous lipases activate ho jaate hain aur triglycerides ko todkar Free Fatty Acids (FFA) banate hain, jisse atta khatta (sour) aur rancid ho jaata hai.</li>
                  <li><strong>Insect Weevil Infestation:</strong> Nami zyada hone par ghoon (Tribolium castaneum / Sitophilus oryzae) tezi se multiply karte hain aur flour ko kharab kar dete hain.</li>
                  <li><strong>Statutory Mandate:</strong> FSSAI statutory limits ke mutabiq Atta mein moisture maximum 14.0%, Maida mein 13.0%, Suji mein 13.5%, aur Besan mein 11.5% hona chahiye.</li>
                </ul>
              </div>`,
            reference: "IS 4333 (Part II) 2002 / IS 1155:1968 / ISO 712:2009 / FSSAI Manual 03 (Cereals)",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Sample ko isothermal forced-air convection oven mein 130°C ± 2°C par 60 minutes tak (ya 105°C par constant weight tak) heat kiya jaata hai. Thermal energy capillary spaces aur starch-protein matrix mein mojud unbound free water molecules ke hydrogen bonds ko tod deti hai, jisse paani vaporize hokar udd jaata hai bina carbohydrate polymers (starch/fiber) ko decompose kiye. Gravimetric weight loss se percentage moisture calculate hoti hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Reagents aur Apparatus:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Forced Convection Hot Air Oven:</strong> 130°C ± 2°C (ya 105°C ± 1°C) par calibrated.</li>
                <li><strong>Analytical Balance:</strong> 0.0001 g (0.1 mg) sensitivity wala.</li>
                <li><strong>Moisture Dishes:</strong> Tight slip-over lids ke saath aluminum ya stainless steel dishes (diameter ~70-80 mm, depth ~20-25 mm).</li>
                <li><strong>Desiccator:</strong> Active cobalt chloride silica gel (blue indicator) ke saath charg kiya hua.</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Step-by-Step Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Empty clean dish aur lid ko oven mein 130°C par 30 minutes heat karein, desiccator mein 30 minute thanda karein aur tare weight (W0) note karein.</li>
                <li>Accurately 5.0000 g homogenized flour sample weigh karein aur dish mein evenly spread karein (W1 = W0 + sample weight).</li>
                <li>Dish ka lid kholkar dish ke neeche ya bagal mein rakhein aur oven mein 130°C ± 2°C par exactly 60 minutes ke liye rakhein (jab oven dubara 130°C reach kar le).</li>
                <li>60 minutes poore hone par oven ke andar hi dish par lid laga dein, turant desiccator mein transfer karein aur room temperature par 30-45 minutes cool hone dein.</li>
                <li>Cooled dish ko turant weigh karein (W2) aur calculation formula apply karein.</li>
              </ol>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Har Number Kyun? — Factors & Constants ki Complete Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ 130°C par 60 minute vs 105°C par 4 ghante kyun?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>130°C Rapid Method:</strong> Wheat flour mein starch granules capillary water ko tight hold karte hain. 130°C thermal energy activation barrier ko quickly overcome karti hai aur 60 minutes mein saara free moisture vaporize kar deti hai. 130°C temperature sugar caramelization (~160°C) aur protein thermal pyrolysis se neeche rehta hai.</li>
                  <li><strong>105°C Method:</strong> Reference method hai jisme 4-5 ghante lagte hain jab tak do successive weighings mein antar < 0.001 g na reh jaye.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Desiccator mein cobalt chloride silica gel ka kya role hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li>Dried starch powder extremely hygroscopic (paani kheenchne wala) hota hai. Oven se nikaalne ke baad agar hawa mein thanda kiya to 0.5-1.0% atmospheric moisture turant absorb kar lega, jisse reading false low aayegi.</li>
                  <li>Active silica gel (blue color) desiccator ke andar humidity < 10% maintain karta hai. Agar pink ho gaya ho to reuse se pehle use 120°C par bake karke recharge karein.</li>
                </ul>

                <div class="bg-white p-3 rounded mt-2 text-sm font-mono border border-blue-200">
                  <p><strong>Formula:</strong> % Moisture (w/w) = [(W1 - W2) / (W1 - W0)] × 100</p>
                  <p>Jahan:</p>
                  <p>W0 = Empty dish + lid ka tare weight (g)</p>
                  <p>W1 = Dish + lid + wet sample drying se pehle (g)</p>
                  <p>W2 = Dish + lid + dried sample desiccator cooling ke baad (g)</p>
                  <p>Sample weight = W1 - W0 (typically 5.0000 g)</p>
                  <p class="mt-2 text-blue-900"><strong>Practical Example:</strong></p>
                  <p>W0 = 24.1250 g, W1 = 29.1250 g (5.0000 g Atta), W2 = 28.5250 g</p>
                  <p>Moisture Loss = 29.1250 - 28.5250 = 0.6000 g</p>
                  <p>% Moisture = (0.6000 / 5.0000) × 100 = <strong>12.00%</strong> (Passes FSSAI Max 14.0% limit ✓)</p>
                </div>
              </div>

              <h4 class="font-semibold mt-4 mb-2">📊 Acceptance Criteria & Standards (FSSAI / BIS Mandates):</h4>
              <div class="overflow-x-auto my-2">
                <table class="min-w-full text-xs border border-gray-300">
                  <thead class="bg-gray-100">
                    <tr><th class="border p-2 text-left">Product</th><th class="border p-2 text-left">FSSAI Standard Limit</th><th class="border p-2 text-left">Risk if Failed</th></tr>
                  </thead>
                  <tbody>
                    <tr><td class="border p-2 font-semibold">Atta (Whole Wheat Flour)</td><td class="border p-2">Not more than 14.0%</td><td class="border p-2 text-red-600">Lumping, caking, mold sporulation, rancidity</td></tr>
                    <tr><td class="border p-2 font-semibold">Maida (Refined Wheat Flour)</td><td class="border p-2">Not more than 13.0%</td><td class="border p-2 text-red-600">Gluten degradation, rope spore proliferation</td></tr>
                    <tr><td class="border p-2 font-semibold">Suji / Rawa (Semolina)</td><td class="border p-2">Not more than 13.5%</td><td class="border p-2 text-red-600">Granule softening, insect growth, fungal souring</td></tr>
                    <tr><td class="border p-2 font-semibold">Besan (Gram Flour)</td><td class="border p-2">Not more than 11.5%</td><td class="border p-2 text-red-600">Lipase rancidity, fungal mycotoxins, bitter taste</td></tr>
                    <tr><td class="border p-2 font-semibold">Rice Grain / Milled Rice</td><td class="border p-2">Not more than 14.0%</td><td class="border p-2 text-red-600">Yellowing, broken grain increase during milling</td></tr>
                    <tr><td class="border p-2 font-semibold">Rolled Oats / Flakes</td><td class="border p-2">Not more than 12.0%</td><td class="border p-2 text-red-600">Rapid lipid oxidation (oat oil contains high PUFA)</td></tr>
                    <tr><td class="border p-2 font-semibold">Poha (Flattened Rice)</td><td class="border p-2">Not more than 13.0%</td><td class="border p-2 text-red-600">Flake breakage, mold spoilage</td></tr>
                  </tbody>
                </table>
              </div>`
          },
          {
            title: "Total Ash (Bhasm) ka Determination (Muffle Furnace 550°C - 600°C Method)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Extraction Rate aur Milling Purity:</strong> Wheat grain mein minerals (potassium, phosphorus, magnesium, calcium) sabse zyada outer bran (choker) aur aleurone layer mein concentrated hote hain (~6-8% ash), jabki starchy inner endosperm mein sirf ~0.35-0.45% ash hota hai.</li>
                  <li><strong>Maida vs Atta Differentiation:</strong> High grade Maida mein choker nahi hona chahiye (Ash < 1.0%), jabki Chakki Atta mein poora bran hota hai isliye Total Ash 1.5% se 2.0% ke beech hota hai.</li>
                  <li><strong>Mineral Adulteration Detection:</strong> Agar Maida ya Atta mein chalk powder (calcium carbonate), gypsum, ya marble dust milaya gaya hai to Ash value dramatically statutory limit (2.0%) se upar nikal jayegi.</li>
                </ul>
              </div>`,
            reference: "IS 1155:1968 (Whole Wheat Atta) / IS 1009:1979 (Maida) / AOAC 923.03 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Flour sample ko silica ya platinum crucible mein pehle slow flame par smoke-free char kiya jaata hai, phir muffle furnace mein 550°C - 600°C par incinerate kiya jaata hai. Saara organic matter (starch, protein, fat, fiber) carbon dioxide (CO2), nitrogen oxides aur water vapor mein oxidize hokar udd jaata hai. Jo inorganic mineral residue bachta hai wo 'Total Ash' kehlata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Reagents aur Apparatus:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Muffle Furnace:</strong> Pyrometer aur PID temperature controller ke saath (550°C ± 10°C).</li>
                <li><strong>Silica / Porcelain Crucibles:</strong> Pre-ignited aur constant weight kiye huye (shallow, flat bottom, 50 ml).</li>
                <li><strong>Bunsen Burner / Hot Plate:</strong> Fume hood ke andar initial charring ke liye.</li>
                <li><strong>Desiccator:</strong> Active silica gel ke saath.</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Step-by-Step Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Silica crucible ko 600°C par 1 ghanta ignite karein, desiccator mein cool karein aur tare weight (W0) accurately note karein.</li>
                <li>Crucible mein 3.0000 g se 5.0000 g sample weigh karein (W1 = crucible + sample weight).</li>
                <li>Crucible ko burner par low flame par tab tak heat karein jab tak sample poori tarah carbonize (kala/char) na ho jaye aur dhuan nikalna band na ho jaye. <span class="text-xs text-gray-500">(Direct furnace mein rakhne par aggressive burning se sample ud sakta hai)</span>.</li>
                <li>Carbonized crucible ko muffle furnace mein 550°C - 600°C par transfer karein aur 3-4 ghante tak burn karein jab tak ash uniform light grey ya white na ho jaye (koi black carbon particle na bache).</li>
                <li>Furnace ko 200°C tak cool hone dein, crucible ko tongs se desiccator mein transfer karein, 45 minute cool karein aur immediately weigh karein (W2).</li>
              </ol>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Har Number Kyun? — Factors & Constants ki Complete Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ 550°C - 600°C hi kyun? 700°C ya 800°C kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Volatilization of Alkali Chlorides:</strong> Sodium chloride (NaCl) aur Potassium chloride (KCl) 650°C se upar volatilize (vaporize) hona shuru kar dete hain. Agar temperature 650°C se zyada rakha to mineral chlorides udd jayenge aur Ash percentage false low aayegi.</li>
                  <li><strong>Incomplete Carbon Oxidation:</strong> 500°C se kam par black elemental carbon poori tarah oxidize nahi ho paata. 550°C - 600°C sweet spot hai jahan carbon complete burn hota hai bina inorganic salts ko loss kiye.</li>
                </ul>

                <div class="bg-white p-3 rounded mt-2 text-sm font-mono border border-blue-200">
                  <p><strong>Formula:</strong> % Total Ash (dry basis) = [ (W2 - W0) / (W1 - W0) ] × [ 100 / (100 - M) ] × 100</p>
                  <p>Jahan:</p>
                  <p>W0 = Empty ignited crucible ka tare weight (g)</p>
                  <p>W1 = Crucible + sample ka weight ashing se pehle (g)</p>
                  <p>W2 = Crucible + white ash ka final weight (g)</p>
                  <p>M = Sample ka moisture percentage (%)</p>
                  <p class="mt-2 text-blue-900"><strong>Practical Example:</strong></p>
                  <p>Sample weight = 5.0000 g, Moisture M = 11.5%</p>
                  <p>Ash weight (W2 - W0) = 0.0825 g</p>
                  <p>% Ash (as is) = (0.0825 / 5.0000) × 100 = 1.65%</p>
                  <p>% Ash (dry basis) = 1.65 × [100 / (100 - 11.5)] = <strong>1.86%</strong> (Passes FSSAI Chakki Atta Max 2.0% limit ✓)</p>
                </div>
              </div>

              <h4 class="font-semibold mt-4 mb-2">📊 Acceptance Criteria & Standards (FSSAI / BIS Mandates):</h4>
              <div class="overflow-x-auto my-2">
                <table class="min-w-full text-xs border border-gray-300">
                  <thead class="bg-gray-100">
                    <tr><th class="border p-2 text-left">Product</th><th class="border p-2 text-left">FSSAI Limit (Dry Basis)</th><th class="border p-2 text-left">Quality Interpretation</th></tr>
                  </thead>
                  <tbody>
                    <tr><td class="border p-2 font-semibold">Atta (Whole Wheat Flour)</td><td class="border p-2">Not more than 2.0%</td><td class="border p-2">Standard whole meal wheat flour with bran</td></tr>
                    <tr><td class="border p-2 font-semibold">Maida (Refined Flour)</td><td class="border p-2">Not more than 1.0%</td><td class="border p-2">High purity endosperm; higher = bran or chalk leak</td></tr>
                    <tr><td class="border p-2 font-semibold">Suji / Rawa (Semolina)</td><td class="border p-2">Not more than 1.0%</td><td class="border p-2">Pure durum semolina coarse particles</td></tr>
                    <tr><td class="border p-2 font-semibold">Besan (Chickpea Flour)</td><td class="border p-2">Not more than 3.0%</td><td class="border p-2">Pure chana dal flour; higher = husk / dirt admixture</td></tr>
                  </tbody>
                </table>
              </div>`
          },
          {
            title: "Acid Insoluble Ash (AIA / Sand & Silica) ka Determination",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Rait aur Mitti ki Contamination (Sand & Dirt):</strong> Wheat harvesting aur threshing ke dauran zameen se mitti, patthar aur rait gehu ke saath mix ho jaate hain. Agar cleaning section (destoner, aspirator, scourer) properly na chale to ye rait aate mein pis jaati hai.</li>
                  <li><strong>Chakki Stone Grinding Wear:</strong> Chakki stone ke continuous friction se stone ke micro-particles girte hain jo pure silicon dioxide (silica) hote hain.</li>
                  <li><strong>Health Hazard:</strong> Sand aur silica khane par daanton mein kirkiraahat (grittiness) aati hai aur stomach lining ko irritate karti hai.</li>
                  <li><strong>Statutory Limit:</strong> FSSAI statutory limit Chakki Atta ke liye maximum 0.15%, Maida ke liye 0.10%, aur Besan ke liye 0.50% hai.</li>
                </ul>
              </div>`,
            reference: "IS 1155:1968 / IS 1009:1979 / FSSAI Manual 03 / AOAC 941.12",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Total ash mein 10% dilute hydrochloric acid (HCl) add karke boil kiya jaata hai. Dilute HCl physiological minerals (calcium, magnesium, potassium salts, oxides) ko completely dissolve kar deta hai soluble chlorides mein ($CaCO_3 + 2HCl → CaCl_2 + H_2O + CO_2$). Sirf crystalline silica, quartz aur insoluble sand particles dissolve nahi hote. Inhe ashless filter paper se filter karke dobara incinerate kiya jaata hai aur weigh kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Reagents aur Apparatus:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Dilute Hydrochloric Acid (10% v/v):</strong> Sp. gr. ~1.05. Conc HCl ko distilled water mein 1:2.5 dilute karein.</li>
                <li><strong>Whatman No. 41 ya 42 Ashless Filter Paper:</strong> Ash content < 0.0001 g.</li>
                <li><strong>Water Bath:</strong> Boiling water bath.</li>
                <li><strong>Muffle Furnace:</strong> 600°C par maintained.</li>
                <li><strong>Silver Nitrate Solution (0.1 N):</strong> Acid washing check karne ke liye.</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Step-by-Step Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Total ash wale crucible mein 25 ml 10% dilute HCl dalein.</li>
                <li>Crucible par watch glass dhak kar boiling water bath par 15 minute heat karein.</li>
                <li>Hot liquid ko Whatman 41/42 ashless filter paper par filter karein aur residue ko hot distilled water se wash karein.</li>
                <li>Residue ko tab tak wash karein jab tak filtrate mein silver nitrate ($AgNO_3$) daalne par white precipitate ($AgCl$) banna band na ho jaye (acid-free filtrate).</li>
                <li>Filter paper ko fold karke original crucible mein transfer karein, burner par dry karke char karein, phir muffle furnace mein 600°C par 1-2 ghante re-ash karein.</li>
                <li>Desiccator mein cool karein aur final ash weight (W_aia) note karein.</li>
              </ol>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Har Number Kyun? — Factors & Constants ki Complete Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ 10% HCl hi kyun? Nitric ya Sulphuric Acid kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li>HCl metal cations ke saath highly soluble chloride salts banata hai ($CaCl_2, MgCl_2, KCl$), jo aasaani se wash ho jaate hain.</li>
                  <li>Sulphuric acid use karne par Insoluble Calcium Sulphate ($CaSO_4$) precipitate ho jayega aur silica ke saath filter paper par reh jayega, jisse AIA reading galat high aayegi!</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Ashless filter paper (Whatman 41/42) hi kyun?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li>Ashless filter paper acid-washed cellulose hota hai jisme burning ke baad inorganic ash 0.00008 g se bhi kam rehti hai. Agar normal filter paper use kiya to paper ka apna ash 0.015 g tak aa jayega jo pure sand se 10 guna zyada hoga!</li>
                </ul>

                <div class="bg-white p-3 rounded mt-2 text-sm font-mono border border-blue-200">
                  <p><strong>Formula:</strong> % Acid Insoluble Ash (AIA, dry basis) = [ W_aia / W_sample ] × [ 100 / (100 - M) ] × 100</p>
                  <p>Jahan: W_aia = Final silica ash ka net weight (g), W_sample = Original flour sample weight (g), M = Moisture %</p>
                  <p class="mt-2 text-blue-900"><strong>Practical Example:</strong></p>
                  <p>W_sample = 5.0000 g, Moisture = 12.0%, W_aia = 0.0035 g</p>
                  <p>% AIA (as is) = (0.0035 / 5.0000) × 100 = 0.070%</p>
                  <p>% AIA (dry basis) = 0.070 × [100 / 88.0] = <strong>0.079%</strong> (Well within FSSAI max 0.15% limit ✓)</p>
                </div>
              </div>

              <h4 class="font-semibold mt-4 mb-2">📊 Statutory FSSAI Limits for Acid Insoluble Ash:</h4>
              <p class="text-xs">Chakki Atta: Max 0.15% | Maida: Max 0.10% | Suji: Max 0.10% | Besan: Max 0.50% | Poha: Max 0.20% | Rice: Max 0.15%</p>`
          },
          {
            title: "Gluten Content (Wet & Dry Gluten) ka Determination (Hand Washing & Glutomatic Method)",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Baking Strength aur Elasticity:</strong> Gluten wheat proteins (Gliadin aur Glutenin) ka water-insoluble viscoelastic complex hai. Gliadin viscosity aur extensibility deta hai, jabki Glutenin elasticity aur dough strength deta hai. Ye gas retention (CO2 holding) karta hai jisse roti/bread phoolti hai.</li>
                  <li><strong>Flour Grading:</strong> Bread making ke liye high gluten (> 28% wet gluten), Chapati ke liye medium gluten (22-26% wet gluten), aur Biscuits/Cakes ke liye weak gluten (< 20% wet gluten) chahiye hota hai.</li>
                  <li><strong>FSSAI Mandate:</strong> FSSAI ke mutabiq Whole Wheat Atta mein Dry Gluten kam se kam 6.0% (dry basis) aur Maida mein kam se kam 7.5% hona anivarya hai.</li>
                </ul>
              </div>`,
            reference: "IS 1155:1968 / IS 1009:1979 / AACC 38-12.02 / ICC 137/1 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Wheat flour ko dilute 2% sodium chloride (NaCl) solution ke saath knead karke dough ball banayi jaati hai. 20-30 minutes hydration ke baad dough ball ko 2% NaCl wash solution ya running water ke neeche gently wash kiya jaata hai. Starch granules, soluble albumins aur globulins wash hokar nikal jaate hain, jabki insoluble gluten proteins aapas mein cross-link hokar ek cohesive, elastic rubber-like ball bana lete hain. Starch ka complete removal iodine solution se verify kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Reagents aur Apparatus:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>2% Sodium Chloride Wash Solution:</strong> 20 g NaCl per liter distilled water (room temp 22-25°C).</li>
                <li><strong>Glutomatic 2200 / Hand Wash Basin:</strong> 80-mesh fine bolting silk sieve ke saath.</li>
                <li><strong>Glutork 2020 / Air Oven:</strong> 130°C par dry gluten bake karne ke liye.</li>
                <li><strong>0.005 N Iodine Solution:</strong> Starch presence test ke liye (Lugol's iodine).</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Step-by-Step Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Accurately 25.00 g flour weigh karein aur porcelain mortar mein lagbhag 15 ml 2% NaCl solution daalkar spatula se smooth dough ball banayein.</li>
                <li>Dough ball ko 2% NaCl solution ke andar bowl mein 30 minutes ke liye rest (hydrate) karne dein (25°C par).</li>
                <li>Dough ball ko haath se ya bolting silk sieve par gently squeeze aur wash karein 2% NaCl solution se jab tak saara starch milky washings ke roop mein nikal na jaye.</li>
                <li>Washings ki aakhri drop par ek drop iodine solution dalein. Agar blue color nahi aata to confirm hai ki starch completely wash ho chuka hai.</li>
                <li>Isolated wet gluten ball ko dono hatheliyon ke beech squeeze karke excess water press out karein jab tak sticky feel na ho, aur turant analytical balance par weigh karein (Wet Gluten Weight, W_wet).</li>
                <li>Wet gluten ball ko 130°C hot air oven mein (ya Glutork dryer mein 4 minute) dry karein jab tak crisp wafer na ban jaye, desiccator mein cool karein aur weigh karein (Dry Gluten Weight, W_dry).</li>
              </ol>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Har Number Kyun? — Factors & Constants ki Complete Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ 2% NaCl wash solution kyun? Simple tap water kyun nahi?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Prevents Gluten Solubilization:</strong> Plain distilled water ya soft tap water low ionic strength par gluten matrix ko peptize (dissolve/break) kar deta hai, jisse gluten strands wash water mein leak ho jaati hain.</li>
                  <li>2% NaCl solution electrostatic repulsion ko suppress karta hai aur hydrophobic interactions ko promote karta hai, jisse tight cohesive gluten ball banti hai.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Wet Gluten aur Dry Gluten ka ratio lagbhag 3:1 kyun hota hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li>Gluten protein matrix intensely hydrophilic hydration sites rakhta hai. 1 g dry gluten protein apne wajan se lagbhag 2 g paani bind karta hai (Hydration capacity ~200%). Isliye Wet Gluten percentage hamesha Dry Gluten ka ~2.8 se 3.2 guna hota hai.</li>
                </ul>

                <div class="bg-white p-3 rounded mt-2 text-sm font-mono border border-blue-200">
                  <p><strong>Formulas:</strong></p>
                  <p>% Wet Gluten = (W_wet / Sample Weight) × 100</p>
                  <p>% Dry Gluten (dry basis) = [ W_dry / Sample Weight ] × [ 100 / (100 - M) ] × 100</p>
                  <p class="mt-2 text-blue-900"><strong>Practical Example:</strong></p>
                  <p>Flour Sample = 25.00 g, Moisture = 12.0%</p>
                  <p>W_wet = 6.75 g  ⟶  % Wet Gluten = (6.75 / 25.00) × 100 = <strong>27.0%</strong></p>
                  <p>W_dry = 2.15 g  ⟶  % Dry Gluten (as is) = (2.15 / 25.00) × 100 = 8.60%</p>
                  <p>% Dry Gluten (dry basis) = 8.60 × [100 / 88.0] = <strong>9.77%</strong> (Exceeds FSSAI Min 6.0% limit ✓)</p>
                </div>
              </div>`
          },
          {
            title: "Gluten Index (GI) ka Determination (Gluten Quality & Strength Test)",
            purpose: `<div class="bg-indigo-50 border border-indigo-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Gluten Quality Index:</strong> Sirf gluten quantity (amount) jaan lena kaafi nahi hai — gluten ki quality (strength aur elasticity) baking ke liye sabse important hoti hai.</li>
                  <li><strong>Centrifugal Sieve Resistance:</strong> Gluten Index batata hai ki kitna percent gluten centrifugal force ko withstand karke sieve ke upar retain hota hai (elastic glutenin fraction) aur kitna mesh ke chhedon se nikal jaata hai (weak/extensible gliadin fraction).</li>
                  <li><strong>Application Suitability:</strong> GI < 60 = Weak gluten (Biscuits / Cookies); GI 60-80 = Medium gluten (Roti / Chapati / Flatbreads); GI 80-95 = Strong gluten (Leavened Bread / Buns); GI > 98 = Extremely strong (Durum pasta).</li>
                </ul>
              </div>`,
            reference: "AACC Method 38-12.02 / ICC Standard No. 155",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Glutomatic mein prepared wet gluten ko ek specially designed standardized centrifuge cassette sieve (perforated metal sieve) par rakha jaata hai aur precisely 6000 rpm (2000 g force) par 60 seconds ke liye centrifuge kiya jaata hai. Strong elastic glutenin cross-linked polymers sieve screen par retain ho jaate hain, jabki weak non-crosslinked extensible gliadins sieve ke pores se centrifuge bucket mein force ho jaate hain. Sieve ke upar bache gluten ka total gluten se ratio Gluten Index kehlata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Reagents aur Apparatus:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Glutomatic 2200 System:</strong> Automatic gluten washer.</li>
                <li><strong>Centrifuge 2015:</strong> 6000 ± 5 rpm speed capability with electronic timer.</li>
                <li><strong>Gluten Index Sieve Cassettes:</strong> Certified metal screen with precision holes.</li>
                <li><strong>Precision Balance:</strong> 0.01 g sensitivity.</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Step-by-Step Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>10.00 g flour sample ko Glutomatic mein 4.8 ml 2% NaCl solution ke saath 20 second mix karein aur 5 minute wash karke wet gluten isolate karein.</li>
                <li>Isolate kiye gaye wet gluten ko turant Centrifuge Sieve Cassette ke center mein rakhein.</li>
                <li>Centrifuge ko run karein: 6000 rpm par exactly 60 seconds.</li>
                <li>Cassette nikaalein. Sieve ke through centrifuge cup mein pass huye gluten ko spatula se scrape karein aur alag weigh karein (W_passed).</li>
                <li>Sieve ke upar bache gluten ko scrape karein aur weigh karein (W_retained). Total wet gluten = W_retained + W_passed.</li>
              </ol>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Har Number Kyun? — Factors & Constants ki Complete Scientific Explanation:</h4>

                <div class="bg-white p-3 rounded mt-2 text-sm font-mono border border-blue-200">
                  <p><strong>Formula:</strong> Gluten Index (GI) = [ W_retained / (W_retained + W_passed) ] × 100</p>
                  <p class="mt-2 text-blue-900"><strong>Practical Example:</strong></p>
                  <p>Gluten retained on sieve (W_retained) = 2.45 g</p>
                  <p>Gluten passed through sieve (W_passed) = 0.55 g</p>
                  <p>Total Wet Gluten = 2.45 + 0.55 = 3.00 g</p>
                  <p>Gluten Index = (2.45 / 3.00) × 100 = <strong>81.7</strong> (High Quality Bread / Chapati Grade Gluten ✓)</p>
                </div>
              </div>`
          },
          {
            title: "Crude Protein ka Determination (Macro Kjeldahl Nitrogen Digestion Method)",
            purpose: `<div class="bg-purple-50 border border-purple-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Nutritional Value & Grain Quality:</strong> Protein grains aur flours ka primary quality grading metric hai. Whole wheat atta mein protein gluten matrix, enzyme systems aur aleurone layer mein hota hai.</li>
                  <li><strong>Besan vs Atta Differentiation:</strong> Chickpea (Besan) ek legume (daal) hai jisme protein naturally high hota hai (FSSAI Mandate: Min 22.0%), jabki Wheat Atta mein protein 10.0% se 14.0% hota hai.</li>
                  <li><strong>Adulteration Check:</strong> Agar Besan mein maida ya raw starch milaya gaya hai to protein 22% se drastically drop ho jayega.</li>
                </ul>
              </div>`,
            reference: "IS 7219:1973 / AOAC 979.09 / ISO 20483 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Sample ko concentrated sulphuric acid ($H_2SO_4$) aur catalyst mixture ($K_2SO_4 + CuSO_4$) ke saath 420°C par digest kiya jaata hai. Organic nitrogen ammonium sulphate $[(NH_4)_2SO_4]$ mein convert hota hai. Concentrated NaOH daalkar ammonia gas liberate ki jaati hai jo boric acid solution mein trap hoti hai, aur standardized 0.1 N HCl / H2SO4 se titrate ki jaati hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Reagents aur Apparatus:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Concentrated H2SO4:</strong> 98%, nitrogen-free.</li>
                <li><strong>Catalyst Mixture:</strong> Potassium sulphate ($K_2SO_4$) aur Copper sulphate ($CuSO_4· 5H_2O$) ratio 9:1 w/w.</li>
                <li><strong>Sodium Hydroxide Solution (40% w/v):</strong> 400 g NaOH per liter.</li>
                <li><strong>Boric Acid Solution (4% w/v):</strong> Mixed indicator (methyl red + bromocresol green) ke saath.</li>
                <li><strong>Standardized 0.1 N HCl ya 0.1 N H2SO4:</strong> Titrant.</li>
              </ul>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Har Number Kyun? — Factors & Constants ki Complete Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Wheat ke liye factor 5.70 aur Besan ke liye 6.25 kyun? (Most Important Question)</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Standard Food Factor 6.25:</strong> Average proteins mein 16.0% Nitrogen hota hai ($100 / 16.0 = 6.25$).</li>
                  <li><strong>Wheat Gluten Factor 5.70:</strong> Wheat protein (gliadin + glutenin) mein glutamine aur glutamic acid bahut high amount mein hote hain (amido nitrogen). Wheat gluten protein mein nitrogen content <strong>17.54%</strong> hota hai. Isliye factor = $100 / 17.54 = \mathbf{5.70}$ hota hai! Agar wheat par 6.25 lagaya to protein 10% overestimate ho jayega.</li>
                  <li><strong>Besan / Legumes Factor 6.25:</strong> Legume proteins mein nitrogen content standard 16.0% rehta hai, isliye 6.25 factor use hota hai.</li>
                  <li><strong>Rice Factor 5.95:</strong> Rice glutelin mein nitrogen content 16.8% hota hai ($100 / 16.8 = 5.95$).</li>
                </ul>

                <div class="bg-white p-3 rounded mt-2 text-sm font-mono border border-blue-200">
                  <p><strong>Formulas:</strong></p>
                  <p>% Nitrogen = [ (V_sample - V_blank) × N_acid × 1.4007 ] / Sample Weight (g)</p>
                  <p>% Crude Protein = % Nitrogen × Specific Factor (Wheat: 5.70, Besan: 6.25, Rice: 5.95)</p>
                  <p class="mt-2 text-blue-900"><strong>Practical Example (Atta):</strong></p>
                  <p>Sample = 1.0000 g, N_acid = 0.1000 N HCl, V_sample = 15.2 ml, V_blank = 0.2 ml</p>
                  <p>% Nitrogen = [ (15.2 - 0.2) × 0.1000 × 1.4007 ] / 1.0000 = 2.101%</p>
                  <p>% Protein (Wheat) = 2.101 × 5.70 = <strong>11.98%</strong> (Passes FSSAI Min 10.0% Atta limit ✓)</p>
                </div>
              </div>`
          },
          {
            title: "Alcoholic Acidity ka Determination (Deterioration & Storage Freshness Index)",
            purpose: `<div class="bg-orange-50 border border-orange-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Flour Freshness aur Ageing:</strong> Atta pisne ke baad usme mojud wheat germ lipases triglycerides ko todkar Free Fatty Acids (FFA) release karte hain.</li>
                  <li><strong>Sour Taste aur Gluten Damage:</strong> High alcoholic acidity flour mein bitter sour taste laati hai aur gluten network ko chemically weaken kar deti hai, jisse dough chipchipa banta hai aur roti phoolti nahi.</li>
                  <li><strong>FSSAI Statutory Mandate:</strong> FSSAI ke anusaar Chakki Atta mein Alcoholic Acidity maximum 0.18% (as H2SO4) aur Maida mein maximum 0.12% honi chahiye. Isse zyada hona poor storage, purana stock ya damp grain milling ko darshata hai.</li>
                </ul>
              </div>`,
            reference: "IS 1155:1968 / IS 1009:1979 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Flour sample ko 90% neutral ethyl alcohol ke saath 24 ghante extract kiya jaata hai (occasional shaking ke saath). Neutral alcohol lipid breakdown se bane free organic fatty acids ko dissolve karta hai bina cereal mineral phytates aur phosphates ko extract kiye. Clear extract ko phenolphthalein indicator ki presence mein standardized 0.05 N sodium hydroxide (NaOH) se titrate kiya jaata hai aur acidity ko equivalent % H2SO4 mein calculate kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Reagents aur Apparatus:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>90% Neutral Ethyl Alcohol:</strong> Rectified spirit ko phenolphthalein daalkar 0.05N NaOH se faint pink neutralize kiya hua.</li>
                <li><strong>Standardized 0.05 N NaOH Solution.</strong></li>
                <li><strong>Phenolphthalein Indicator:</strong> 1% in ethanol.</li>
                <li><strong>Glass Stoppered Conical Flasks:</strong> 250 ml.</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Step-by-Step Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Accurately 5.0000 g flour weigh karke 250 ml glass stoppered conical flask mein dalein.</li>
                <li>Flask mein 100 ml 90% neutralized alcohol dalein aur stopper laga kar achhe se shake karein.</li>
                <li>Flask ko room temperature (25°C - 27°C) par exactly 24 ghante ke liye chhod dein, beech-beech mein shuru ke ghanton mein occasional swirling karein.</li>
                <li>24 ghante baad clear supernatant liquid ko Whatman 1 filter paper se filter karein (evaporation prevent karne ke liye funnel par watch glass dhakein).</li>
                <li>50 ml clear filtrate pipette out karke conical flask mein lein (equivalent to 2.50 g flour).</li>
                <li>0.5 ml phenolphthalein indicator add karein aur 0.05 N NaOH se tab tak titrate karein jab tak faint persistent pink color (30 second tak permanent) na aa jaye. Titre reading (V) note karein.</li>
              </ol>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Har Number Kyun? — Factors & Constants ki Complete Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ 90% Neutral Alcohol hi kyun? Paani kyun nahi use karte?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li>Flour mein acid phosphates, phytin aur soluble amino acids hote hain jo paani mein easily dissolve ho jaate hain. Agar paani use kiya to wo titrate hokar artificial high acidity dikhayenge jo lipid spoilage ka indicator nahi hai.</li>
                  <li>90% ethanol selectively sirf lipid breakdown se nikli free fatty acids ko extract karta hai. Neutralization isliye zaroori hai taaki solvent ka apna inherent acidity zero ho.</li>
                </ul>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Acidity ko % H2SO4 ke roop mein kyun express karte hain?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li>Indian Standards (IS 1155) aur British cereal chemistry standards historically total neutralizable acidity ko standard mineral dibasic acid (Sulphuric acid, Equivalent weight = 49.04) ke equivalent factor mein standardize karte hain.</li>
                  <li>Factor 0.002452 g: 1 ml of 0.05 N NaOH neutralizes exactly $0.05 	imes 0.04904 = 0.002452$ g H2SO4.</li>
                </ul>

                <div class="bg-white p-3 rounded mt-2 text-sm font-mono border border-blue-200">
                  <p><strong>Formula:</strong></p>
                  <p>% Alcoholic Acidity (as H2SO4, dry basis) = [ (V × N × 0.04904 × 100) / W_aliquot ] × [ 100 / (100 - M) ]</p>
                  <p>Or simplified: % Alcoholic Acidity = [ (V × 0.002452) / 2.50 ] × [ 100 / (100 - M) ] × 100</p>
                  <p class="mt-2 text-blue-900"><strong>Practical Example:</strong></p>
                  <p>V = 1.20 ml of 0.05 N NaOH, Sample aliquot = 2.50 g, Moisture M = 11.5%</p>
                  <p>Acidity (as is) = (1.20 × 0.05 × 0.04904 / 2.50) × 100 = 0.1177%</p>
                  <p>Acidity (dry basis) = 0.1177 × [100 / 88.5] = <strong>0.133%</strong> (Passes FSSAI Max 0.18% limit ✓)</p>
                </div>
              </div>`
          },
          {
            title: "Crude Fiber ka Determination (Sequential Acid & Alkali Digestion Method)",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Bran Content Verification:</strong> Crude fiber wheat grain ki outer pericarp aur seed coat (bran/choker) se aata hai, jisme cellulose, hemicellulose aur lignin hote hain.</li>
                  <li><strong>Atta vs Maida Verification:</strong> Pure Maida mein fiber negligible (< 0.3%) hota hai, jabki Chakki Whole Wheat Atta mein fiber 1.8% se 2.5% tak hota hai. Agar Atta mein fiber 1.0% se kam hai to usme maida ki milaawat hai; agar 2.5% se zyada hai to extra choker add kiya gaya hai.</li>
                </ul>
              </div>`,
            reference: "IS 1155:1968 / AOAC 962.09 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Defatted flour sample ko pehle boiling 1.25% (0.255 N) sulphuric acid ($H_2SO_4$) ke saath digest kiya jaata hai jisse starch aur soluble sugars hydrolyze ho jaate hain. Filter karke residue ko boiling 1.25% (0.313 N) sodium hydroxide (NaOH) solution se digest kiya jaata hai jisse proteins aur fats dissolve ho jaate hain. Bacha hua insoluble organic residue dry karke weigh kiya jaata hai, phir muffle furnace mein 550°C par ash kiya jaata hai. Burning par hone wala loss Crude Fiber kehlata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Reagents aur Apparatus:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>1.25% w/v H2SO4 Solution:</strong> Exactly 0.255 N (12.5 g per liter).</li>
                <li><strong>1.25% w/v NaOH Solution:</strong> Exactly 0.313 N, carbonate-free.</li>
                <li><strong>Fibertech System / Crude Fiber Digestion Flasks.</strong></li>
                <li><strong>Gooch Crucible / Sintered Glass Crucible (Porosity 1 or 2).</strong></li>
              </ul>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Har Number Kyun? — Factors & Constants ki Complete Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ 1.25% Acid aur 1.25% Alkali hi kyun?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li>Ye standardized Weende method mammalian digestion tract (pet ke acid aur intestine ke alkaline environment) ko closely simulate karta hai. Zyada strong acid lene par fiber ka cellulose bhi dissolve ho jayega; kam lene par starch completely hydrolyze nahi hoga.</li>
                </ul>

                <div class="bg-white p-3 rounded mt-2 text-sm font-mono border border-blue-200">
                  <p><strong>Formula:</strong> % Crude Fiber (dry basis) = [ (W1 - W2) / Sample Weight ] × [ 100 / (100 - M) ] × 100</p>
                  <p>Jahan: W1 = Crucible + dried fiber residue (g), W2 = Crucible + incinerated ash (g)</p>
                </div>
              </div>`
          },
          {
            title: "Granularity aur Particle Size Distribution (Standard Sieve Shaker Analysis)",
            purpose: `<div class="bg-teal-50 border border-teal-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Dough Water Absorption & Kneading:</strong> Particle size aate ke water absorption rate aur chapati ke texture ko decide karta hai. Bahut coarse particle hone par roti karkash banti hai aur edges crack ho jaate hain; bahut fine powder hone par dough sticky ho jaata hai.</li>
                  <li><strong>FSSAI Statutory Mandate:</strong> Whole wheat atta ko 40-mesh (425 micron) sieve se minimum 98% pass hona chahiye, aur 100-mesh (150 micron) sieve par maximum 50% retain hona chahiye.</li>
                </ul>
              </div>`,
            reference: "IS 460 (Part I) / IS 1155:1968 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Known mass of flour ko calibrated test sieves ke stack par rakha jaata hai aur motorized sieve shaker par mechanically vibrate kiya jaata hai. Particles apne physical diameter ke anusaar respective sieve meshes par separate ho jaate hain aur gravimetrically quantitate kiye jaate hain.</p>

              <h4 class="font-semibold mt-4 mb-2">Standard Sieve Stack:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>IS Sieve 425 micron (IS 40 mesh) - Top sieve</li>
                <li>IS Sieve 250 micron (IS 60 mesh) - Intermediate sieve</li>
                <li>IS Sieve 150 micron (IS 100 mesh) - Fine sieve</li>
                <li>Collecting Bottom Pan</li>
              </ul>`
          },
          {
            title: "Water Absorption Capacity (WAC) aur Dough Rheology (Brabender Farinograph Test)",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Commercial Yield:</strong> Aata kitna paani pee sakta hai bina dough ko loose ya sticky banaye. Zyada water absorption = zyada roti yield aur der tak soft rehne wali rotis.</li>
                  <li><strong>Rheological Parameters:</strong> Dough Development Time (DDT), Dough Stability, aur Mixing Tolerance Index (MTI) assess karta hai.</li>
                  <li>Standard chapati atta water absorption typically 60% se 68% hota hai.</li>
                </ul>
              </div>`,
            reference: "AACC Method 54-21.02 / ICC Standard 115/1 / ISO 5530-1",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Flour sample ko temperature-controlled (30°C) Farinograph mixing bowl mein rotating z-blades ke beech knead kiya jaata hai aur buret se paani add kiya jaata hai jab tak resistance curve center line par precisely 500 Brabender Units (BU) line ko touch na kare. 500 BU line par reach karne ke liye required total water percentage Water Absorption Capacity kehlati hai.</p>`
          },
          {
            title: "Falling Number Determination (Alpha-Amylase Activity & Sprout Damage Assay)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Sprout Damage Detection:</strong> Khet mein gehu katne se pehle agar be-mausam baarish ho jaye to gehu ugna (sprout) shuru kar deta hai, jisse alpha-amylase enzyme thousand-fold increase ho jaata hai.</li>
                  <li><strong>Sticky Gummy Dough Risk:</strong> Excess alpha-amylase baking ke dauran starch ko todkar maltose aur dextrins bana deta hai, jisse dough chipchipa ho jaata hai, roti flat rehti hai aur bread ka crumb soggy aur gummy ho jaata hai.</li>
                  <li><strong>Optimum Baking Range:</strong> 250 - 350 seconds ideal hota hai. < 200 s = severely sprout damaged; > 400 s = very low enzyme activity (sluggish fermentation).</li>
                </ul>
              </div>`,
            reference: "IS 4333 (Part V) 1970 / ISO 3093:2009 / AACC 56-81.03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Flour aur water suspension ko boiling water bath (100°C) mein viscometer tube mein tezi se heat kiya jaata hai jisse starch paste gelatinize ho jaata hai. Sample mein mojud active alpha-amylase enzyme gelatinized starch paste ko rapidly liquefy karta hai. Stirrer ka free fall time (seconds mein) measure kiya jaata hai. Enzyme jitna zyada active hoga, paste utna patla hoga aur stirrer utni jaldi neeche girega (Low Falling Number = High Enzyme Activity).</p>`
          },
          {
            title: "Sedimentation Value ka Determination (Zeleny Test for Breadmaking Gluten Quality)",
            purpose: `<div class="bg-cyan-50 border border-cyan-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Gluten protein ki swelling quality aur quantity ko rapid test se determine karna. High sedimentation value (> 30 ml) superior bread-making wheat flour ko indicate karti hai.</li>
                </ul>
              </div>`,
            reference: "IS 4333 (Part IV) 1971 / AACC 56-60.01 / ISO 5529",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Flour suspension ko lactic acid aur SDS (sodium dodecyl sulphate) solution ke saath mix kiya jaata hai. Gluten proteins lactic acid absorb karke swell ho jaate hain aur flocculate hote hain. Sedimented layer ka volume (ml) measure kiya jaata hai.</p>`
          },
          {
            title: "Starch Damage ka Determination (Chakki Grinding Severity Test)",
            purpose: `<div class="bg-rose-50 border border-rose-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Chakki stone grinding pressure se starch granules physically fracture hote hain. Controlled starch damage (7-10%) chapati ke liye desirable hai kyunki ye water absorption badhata hai. Lekin > 12% starch damage par dough weeping aur sticky crumb aata hai.</li>
                </ul>
              </div>`,
            reference: "AACC Method 76-31.01 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Fungal alpha-amylase damaged starch granules ko preferentially digest karta hai jabki intact starch granules resist karte hain. Digestion ke baad bane reducing sugars ko spectrophotometrically quantify kiya jaata hai.</p>`
          },
          {
            title: "Uric Acid Content ka Determination (Storage Insect Weevil & Pest Infestation Index)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Insect Excreta Contamination:</strong> Stored grain pests (ghoon, susri, weevils) nitrogenous waste ko insoluble Uric Acid ke roop mein excrete karte hain. Cleaning se dead insects to nikal sakte hain lekin unka excreta aate mein pis jaata hai.</li>
                  <li><strong>FSSAI Statutory Mandate:</strong> FSSAI statutory limit grains aur flours ke liye <strong>maximum 100 mg/kg (ppm)</strong> hai. Isse zyada hona heavily infested unhygienic raw material ka pakka proof hai.</li>
                </ul>
              </div>`,
            reference: "AOAC 969.46 / FSSAI Manual 03 (Cereals)",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Flour sample se uric acid ko alkaline buffer solution se extract kiya jaata hai. Uric acid 292 nm UV wavelength par characteristic optical absorption peak deta hai. Uricase enzyme add karke uric acid ko allantoin mein degrade kiya jaata hai aur absorbance drop ($Δ A_{292}$) se absolute concentration calculate ki jaati hai.</p>`
          },
          {
            title: "Rodent Hair aur Insect Fragments ka Inspection (Wildman Trap Flask Method)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Aate mein chuhe ke baal (rodent hair) aur keedon ke body fragments (wings, legs, head capsules) ki microscopic regulatory filth examination. Food hygiene compliance ka direct measure.</li>
                </ul>
              </div>`,
            reference: "AOAC 972.32 / IS 4333 (Part I)",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Flour sample ko dilute acid ke saath digest kiya jaata hai taaki starch gelatinize hokar dissolve ho jaye. Mineral oil (light liquid paraffin) add karke Wildman trap flask mein partition kiya jaata hai. Insect cuticles aur rodent hairs lipophilic hote hain isliye oil phase mein migrate karte hain aur trap flask ke stopper se skim karke ruled filter paper par microscope (30x-100x) ke neeche count kiye jaate hain.</p>`
          },
          {
            title: "Aflatoxins (B1, B2, G1, G2) aur Total Mycotoxins ka Analysis (HPLC-FLD / ELISA Method)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Potent Carcinogen:</strong> Aflatoxin B1 world ka sabse powerful natural liver carcinogen (cancer-causing agent) hai jo fungus Aspergillus flavus moist grain storage mein produce karta hai.</li>
                  <li><strong>FSSAI Statutory Mandate:</strong> Aflatoxin B1 maximum 15 µg/kg (ppb) aur Total Aflatoxins (B1+B2+G1+G2) maximum 30 µg/kg (ppb) allowed hain. Non-compliance par entire batch mandatory reject aur destroy hota hai.</li>
                </ul>
              </div>`,
            reference: "FSSAI Manual 03 / AOAC 999.07 / ISO 16050",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Flour sample ko methanol:water (80:20) solvent se extract kiya jaata hai. Extract ko Immunoaffinity Column (IAC) ke specific monoclonal antibodies par pass kiya jaata hai jahan aflatoxins bind ho jaate hain aur baaki impurities wash ho jaati hain. Pure aflatoxins ko acetonitrile se elute karke Kobra cell electrochemical derivatization ke saath HPLC Fluorescence Detector (Ex 365 nm, Em 440 nm) par quantify kiya jaata hai.</p>`
          },
          {
            title: "Adulteration Check: Metanil Yellow aur Synthetic Dyes ka Test (Besan mein Peela Rang)",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Besan mein kharab daal ya maida milaakar use chana dal jaisa bright yellow dikhane ke liye toxic industrial dye 'Metanil Yellow' milayi jaati hai jo highly neurotoxic aur carcinogenic hai. FSSAI ke mutabiq zero tolerance ban hai.</li>
                </ul>
              </div>`,
            reference: "FSSAI Manual 03 / DGHS Manual / IS 2400",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Metanil yellow ek azo dye hai. Sample mein concentrated hydrochloric acid (HCl) add karne par azo group protonate ho jaata hai aur intensely bright magenta/pink color banta hai jo paani daalne par gayab nahi hota. Normal turmeric ya natural pigment acid mein red hota hai lekin paani daalne par dilute ho jaata hai.</p>`
          },
          {
            title: "Adulteration Check: Khesari Dal (Lathyrus sativus / BOAA) ka Test Besan mein",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Sasti Khesari dal ko Besan mein milaya jaata hai. Khesari dal mein beta-N-oxalyl-alpha,beta-diaminopropionic acid (BOAA) neurotoxin hota hai jo regular consumption se Lathyrism (lower limbs ka permanent paralysis) paida karta hai.</li>
                </ul>
              </div>`,
            reference: "IS 2400:1976 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Sample ko dilute hydrochloric acid ke saath boil karke extract kiya jaata hai. Khesari dal ke unique phytocompounds concentrated acid digestion par intense pink-red color produce karte hain jo pure chana dal besan mein negative rehta hai.</p>`
          },
          {
            title: "Adulteration Check: Added Chalk, Chuna aur Calcium Carbonate ka Test",
            purpose: `<div class="bg-stone-50 border border-stone-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Aate ya maida ka wajan badhane aur use artificially white dikhane ke liye sasta chalk powder (calcium carbonate / limestone) milaya jaata hai.</li>
                </ul>
              </div>`,
            reference: "FSSAI Manual 03 / IS 1155",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Sample mein dilute hydrochloric acid (HCl) add karne par calcium carbonate instant chemical reaction karta hai: $CaCO_3 + 2HCl → CaCl_2 + H_2O + CO_2 ↑$. Vigorous effervescence (tez gas ke bulbule) added chalk adulteration ka direct confirmation hai.</p>`
          },
          {
            title: "Adulteration Check: Talc, Soapstone aur Heavy Minerals (Chloroform Flotation Test)",
            purpose: `<div class="bg-gray-50 border border-gray-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Flour mein talcum powder, soapstone ya marble dust milawat ki rapid screening.</li>
                </ul>
              </div>`,
            reference: "FSSAI Manual 03 / IS 1155",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Density gradient separation: Pure flour organic starch particles ki density ~1.40 g/ml hoti hai, jabki pure Chloroform ki specific gravity 1.48 g/ml hoti hai. Isliye flour surface par float karta hai, jabki inorganic talc aur minerals (density 2.5-2.8 g/ml) bottom par sink ho jaate hain.</p>`
          },
          {
            title: "Fortified Atta mein Iron Content ka Determination (o-Phenanthroline Colorimetric Method)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>FSSAI +F Fortification Mandate:</strong> Anemia eradication ke liye FSSAI mandate ke anusaar Fortified Wheat Flour mein 28.0 mg se 42.5 mg Iron per kg add karna anivarya hai (as Ferric Pyrophosphate ya Sodium Iron EDTA). Is compliance ko verify karne ke liye ye standard quantitative test hai.</li>
                </ul>
              </div>`,
            reference: "AOAC 944.02 / FSSAI Fortification Regulations / Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Sample ko dry ash karke dilute HCl mein dissolve kiya jaata hai. Hydroxylamine hydrochloride ($NH_2OH· HCl$) add karke saare $Fe^{3+}$ ferric ions ko $Fe^{2+}$ ferrous ions mein reduce kiya jaata hai. Sodium acetate buffer (pH 4.5) ki presence mein 1,10-ortho-phenanthroline reagent add kiya jaata hai jo ferrous ions ke saath intensely orange-red coordination complex $[Fe(phen)_3]^{2+}$ banata hai. Is complex ki absorbance spectrophotometer par 510 nm wavelength par measure ki jaati hai.</p>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Har Number Kyun? — Factors & Constants ki Complete Scientific Explanation:</h4>
                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ 510 nm wavelength aur Hydroxylamine reduction kyun?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li>Ortho-phenanthroline sirf divalent ferrous ($Fe^{2+}$) state ke saath stable chromophore banata hai. Food sample mein iron oxidized ferric ($Fe^{3+}$) state mein hota hai, isliye hydroxylamine ka addition reduction complete karta hai.</li>
                  <li>Tris-phenanthroline ferrous complex ka maximum molar absorptivity peak precisely 510 nm par hota hai.</li>
                </ul>
              </div>`
          },
          {
            title: "Fortified Atta mein Folic Acid (Vitamin B9) ka Assay (Reverse Phase HPLC-UV Method)",
            purpose: `<div class="bg-green-50 border border-green-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Neural Tube Defect Prevention:</strong> FSSAI +F statutory mandate ke mutabiq fortified atta mein 75 µg se 125 µg Folic Acid per 100 g hona mandatory hai.</li>
                </ul>
              </div>`,
            reference: "AOAC 944.12 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Flour sample se folic acid ko phosphate buffer se extract karke C18 Solid Phase Extraction (SPE) cartridge se clean kiya jaata hai. Reverse phase C18 column par isocratic mobile phase (potassium dihydrogen phosphate buffer + acetonitrile) ke saath separate karke UV-Vis detector par 280 nm par calibrate kiya jaata hai.</p>`
          },
          {
            title: "Heavy Metals (Lead, Cadmium, Arsenic) ka Determination (ICP-MS / AAS Method)",
            purpose: `<div class="bg-slate-50 border border-slate-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Agricultural soil, irrigation water aur industrial emissions se cereals mein heavy metals accumulate ho jaate hain. FSSAI limit: Lead max 0.2 mg/kg, Cadmium max 0.1 mg/kg, Arsenic max 0.1 mg/kg.</li>
                </ul>
              </div>`,
            reference: "AOAC 999.10 / FSSAI Manual 03 / ISO 17294",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Sample ko trace-metal grade nitric acid ($HNO_3$) aur hydrogen peroxide ($H_2O_2$) ke saath closed PTFE vessels mein microwave digestion system mein 200°C par digest kiya jaata hai. Digested solution ko Inductively Coupled Plasma Mass Spectrometry (ICP-MS) ya Graphite Furnace Atomic Absorption Spectrometry (GFAAS) par quantify kiya jaata hai.</p>`
          },
          {
            title: "Cereals & Grain Products Master Quality & Statutory Testing Battery Summary",
            purpose: `<div class="bg-indigo-50 border border-indigo-200 p-3 rounded my-2">
                <p><strong>Complete Quality Assurance Reference Matrix:</strong> Atta, Maida, Suji, Besan, Rice, Oats aur Poha ke sabhi 23 testing SOPs, unke BIS/FSSAI standard references, prescribed statutory limits aur industrial laboratory testing frequency ki ek single comprehensive ready-reckoner master table.</p>
              </div>`,
            reference: "FSSAI Food Safety and Standards (Food Products Standards and Food Additives) Regulations / BIS Specifications",
            procedure: `<div class="overflow-x-auto my-4">
                <table class="min-w-full text-xs border border-gray-300">
                  <thead class="bg-indigo-700 text-white font-semibold">
                    <tr>
                      <th class="border border-indigo-800 p-2 text-left">Test Parameter</th>
                      <th class="border border-indigo-800 p-2 text-left">Standard Reference</th>
                      <th class="border border-indigo-800 p-2 text-left">Atta Limit</th>
                      <th class="border border-indigo-800 p-2 text-left">Maida Limit</th>
                      <th class="border border-indigo-800 p-2 text-left">Suji Limit</th>
                      <th class="border border-indigo-800 p-2 text-left">Besan Limit</th>
                      <th class="border border-indigo-800 p-2 text-left">Testing Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Moisture Content</td><td class="border p-2">IS 4333 (Pt 2)</td><td class="border p-2">Max 14.0%</td><td class="border p-2">Max 13.0%</td><td class="border p-2">Max 13.5%</td><td class="border p-2">Max 11.5%</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Total Ash (dry basis)</td><td class="border p-2">IS 1155 / IS 1009</td><td class="border p-2">Max 2.0%</td><td class="border p-2">Max 1.0%</td><td class="border p-2">Max 1.0%</td><td class="border p-2">Max 3.0%</td><td class="border p-2 text-indigo-700 font-semibold">Daily / Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Acid Insoluble Ash (AIA)</td><td class="border p-2">IS 1155</td><td class="border p-2">Max 0.15%</td><td class="border p-2">Max 0.10%</td><td class="border p-2">Max 0.10%</td><td class="border p-2">Max 0.50%</td><td class="border p-2 text-indigo-700 font-semibold">Daily / Shift</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Gluten (Dry Basis)</td><td class="border p-2">IS 1155 / AACC 38-12</td><td class="border p-2">Min 6.0%</td><td class="border p-2">Min 7.5%</td><td class="border p-2">Min 6.0%</td><td class="border p-2">N/A (Gluten-Free)</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Gluten Index</td><td class="border p-2">AACC 38-12.02</td><td class="border p-2">60 - 85</td><td class="border p-2">75 - 95</td><td class="border p-2">80 - 95</td><td class="border p-2">N/A</td><td class="border p-2">Weekly</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Crude Protein</td><td class="border p-2">IS 7219</td><td class="border p-2">Min 10.0%</td><td class="border p-2">Min 10.0%</td><td class="border p-2">Min 10.0%</td><td class="border p-2 font-bold text-emerald-700">Min 22.0%</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Alcoholic Acidity (as H2SO4)</td><td class="border p-2">IS 1155</td><td class="border p-2">Max 0.18%</td><td class="border p-2">Max 0.12%</td><td class="border p-2">Max 0.18%</td><td class="border p-2">Max 0.18%</td><td class="border p-2 text-indigo-700 font-semibold">Daily</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Crude Fiber</td><td class="border p-2">IS 1155</td><td class="border p-2">Max 2.5%</td><td class="border p-2">Max 0.3%</td><td class="border p-2">Max 0.5%</td><td class="border p-2">Max 3.0%</td><td class="border p-2">Weekly</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Granularity (IS 40 mesh)</td><td class="border p-2">IS 460</td><td class="border p-2">Min 98% pass</td><td class="border p-2">100% pass</td><td class="border p-2">Retained >95%</td><td class="border p-2">Min 98% pass</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Falling Number</td><td class="border p-2">ISO 3093</td><td class="border p-2">Min 250 s</td><td class="border p-2">Min 250 s</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Raw Material Lot</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Uric Acid</td><td class="border p-2">AOAC 969.46</td><td class="border p-2">Max 100 mg/kg</td><td class="border p-2">Max 100 mg/kg</td><td class="border p-2">Max 100 mg/kg</td><td class="border p-2">Max 100 mg/kg</td><td class="border p-2">Fortnightly</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Aflatoxin B1 / Total</td><td class="border p-2">FSSAI Manual 03</td><td class="border p-2">15 / 30 µg/kg</td><td class="border p-2">15 / 30 µg/kg</td><td class="border p-2">15 / 30 µg/kg</td><td class="border p-2">15 / 30 µg/kg</td><td class="border p-2">Monthly</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Metanil Yellow & Azo Dyes</td><td class="border p-2">DGHS Method</td><td class="border p-2">Negative</td><td class="border p-2">Negative</td><td class="border p-2">Negative</td><td class="border p-2 text-red-600 font-bold">Negative (Zero)</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Khesari Dal (BOAA)</td><td class="border p-2">IS 2400</td><td class="border p-2">Negative</td><td class="border p-2">Negative</td><td class="border p-2">Negative</td><td class="border p-2 text-red-600 font-bold">Negative (Zero)</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Fortificant Iron (+F)</td><td class="border p-2">AOAC 944.02</td><td class="border p-2">28 - 42.5 mg/kg</td><td class="border p-2">28 - 42.5 mg/kg</td><td class="border p-2">Optional</td><td class="border p-2">N/A</td><td class="border p-2 text-indigo-700 font-semibold">Daily (Fortified)</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Fortificant Folic Acid (+F)</td><td class="border p-2">AOAC 944.12</td><td class="border p-2">75 - 125 µg/100g</td><td class="border p-2">75 - 125 µg/100g</td><td class="border p-2">Optional</td><td class="border p-2">N/A</td><td class="border p-2 text-indigo-700 font-semibold">Weekly (Fortified)</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Heavy Metals (Pb, Cd, As)</td><td class="border p-2">AOAC 999.10</td><td class="border p-2">< 0.2 / 0.1 ppm</td><td class="border p-2">< 0.2 / 0.1 ppm</td><td class="border p-2">< 0.2 / 0.1 ppm</td><td class="border p-2">< 0.2 / 0.1 ppm</td><td class="border p-2">Quarterly</td></tr>
                  </tbody>
                </table>
              </div>`
          }
        ]
      };

export const cerealsGrainsEn = {
        title: "Cereals & Grain Products (Atta, Maida, Suji, Besan, Rice, Oats, Poha)",
        tests: [
          {
            title: "Determination of Moisture Content (130°C Rapid Air Oven / 105°C Isothermal Method)",
            purpose: `<div class="bg-cyan-50 border border-cyan-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Thermodynamic Water Activity & Shelf Stability:</strong> Moisture content governs water activity (a_w). When flour moisture exceeds statutory thresholds (> 14.0%, a_w > 0.65), storage mold (Aspergillus flavus, Penicillium spp.) proliferate exponentially, synthesizing carcinogenic Aflatoxins (B1, B2, G1, G2).</li>
                  <li><strong>Lipolytic Rancidity Prevention:</strong> Endogenous lipases in the germ and aleurone layer activate at high moisture, hydrolyzing triglycerides into unesterified Free Fatty Acids (FFA), leading to flour souring, bitter taste, and gluten deterioration.</li>
                  <li><strong>Commercial & Statutory Compliance:</strong> Mandated under FSSAI Regulations: Atta Max 14.0%, Maida Max 13.0%, Suji Max 13.5%, Besan Max 11.5%.</li>
                </ul>
              </div>`,
            reference: "IS 4333 (Part II) 2002 / IS 1155:1968 / ISO 712:2009 / FSSAI Manual 03 (Cereals)",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>The flour sample is dried in an isothermal forced-air convection oven at 130°C ± 2°C for exactly 60 minutes (or at 105°C to constant weight). Thermal energy severs hydrogen bonds holding free and capillary water within the starch-protein matrix, vaporizing moisture without thermal decomposition of carbohydrate polymers. Moisture is determined gravimetrically from the mass loss on drying.</p>

              <h4 class="font-semibold mt-4 mb-2">Reagents and Apparatus:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Forced Air Convection Oven:</strong> Calibrated at 130°C ± 2°C or 105°C ± 1°C.</li>
                <li><strong>Analytical Balance:</strong> Readability 0.0001 g (0.1 mg).</li>
                <li><strong>Moisture Dishes:</strong> Non-corrosive aluminum or stainless steel with tight slip-over lids.</li>
                <li><strong>Desiccator:</strong> Charged with active cobalt blue silica gel indicator.</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Step-by-Step Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Pre-condition clean moisture dish and lid at 130°C for 30 minutes, cool in a desiccator for 30 minutes, and record tare weight (W0).</li>
                <li>Weigh accurately 5.0000 g of thoroughly mixed sample into the dish, distributing evenly (W1 = W0 + sample weight).</li>
                <li>Uncover dish and place inside oven preheated to 130°C ± 2°C for exactly 60 minutes once temperature recovers.</li>
                <li>Cover dish inside oven before removal, immediately transfer to desiccator, and cool for 30-45 minutes to ambient temperature.</li>
                <li>Weigh the cooled dish immediately (W2) to prevent hygroscopic atmospheric re-absorption.</li>
              </ol>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Why Each Number? — Scientific Explanation of Factors & Constants:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Why 130°C for 60 minutes vs 105°C for 4 hours?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>130°C Rapid Method:</strong> Overcomes the desorption activation barrier of capillary-bound moisture within dense starch granules rapidly within 60 minutes. 130°C remains well below the pyrolysis and caramelization temperature of cereal sugars (~160°C).</li>
                  <li><strong>Desiccator Silica Gel:</strong> Oven-dried flour starch is fiercely hygroscopic; cooling in ambient air would lead to rapid absorption of 0.5-1.0% atmospheric moisture, resulting in falsely depressed moisture values.</li>
                </ul>

                <div class="bg-white p-3 rounded mt-2 text-sm font-mono border border-blue-200">
                  <p><strong>Formula:</strong> % Moisture (w/w) = [(W1 - W2) / (W1 - W0)] × 100</p>
                  <p class="mt-2 text-blue-900"><strong>Practical Example:</strong></p>
                  <p>W0 = 24.1250 g, W1 = 29.1250 g (5.0000 g sample), W2 = 28.5250 g</p>
                  <p>Moisture Loss = 0.6000 g  ⟶  % Moisture = (0.6000 / 5.0000) × 100 = <strong>12.00%</strong> (Passes FSSAI Max 14.0% limit ✓)</p>
                </div>
              </div>`
          },
          {
            title: "Determination of Total Ash (High Temperature Muffle Furnace 550°C - 600°C Method)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Milling Extraction & Bran Separation Index:</strong> Mineral elements (potassium, magnesium, phosphorus, calcium) reside primarily in the outer pericarp and aleurone layer (bran ash ~6-8%), whereas starchy endosperm has only ~0.35-0.45% ash. Total ash directly measures milling cleanliness and separation efficiency.</li>
                  <li><strong>Adulteration Screening:</strong> Added chalk (calcium carbonate), gypsum, or marble powder dramatically elevates total ash beyond statutory limits (Atta max 2.0%, Maida max 1.0%).</li>
                </ul>
              </div>`,
            reference: "IS 1155:1968 / IS 1009:1979 / AOAC 923.03 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>The flour sample is charred over a gentle flame and then incinerated in a muffle furnace at 550°C - 600°C until free from carbonaceous matter. Organic substances (starch, protein, lipids) oxidize into CO2, H2O, and nitrogen oxides. The remaining inorganic mineral residue represents Total Ash.</p>

              <h4 class="font-semibold mt-4 mb-2">Step-by-Step Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Ignite silica crucible at 600°C for 1 hour, cool in desiccator, and record tare weight (W0).</li>
                <li>Weigh accurately 3.0000 g to 5.0000 g flour into crucible (W1 = crucible + sample).</li>
                <li>Pre-char over a low Bunsen flame inside fume hood until sample is thoroughly carbonized and smoking ceases.</li>
                <li>Transfer crucible to muffle furnace preheated to 550°C - 600°C; incinerate for 3-4 hours until ash is light grey or white with zero dark carbon specks.</li>
                <li>Cool in desiccator for 45 minutes and weigh immediately (W2).</li>
              </ol>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Scientific Explanation of Factors & Constants:</h4>
                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Why 550°C - 600°C? Why not 750°C?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li>Sodium chloride and potassium chloride begin to volatilize at temperatures exceeding 650°C. Maintaining furnace temperature at 550°C - 600°C guarantees complete carbon oxidation without mineral chloride loss.</li>
                </ul>

                <div class="bg-white p-3 rounded mt-2 text-sm font-mono border border-blue-200">
                  <p><strong>Formula:</strong> % Total Ash (dry basis) = [ (W2 - W0) / (W1 - W0) ] × [ 100 / (100 - M) ] × 100</p>
                  <p class="mt-2 text-blue-900"><strong>Practical Example:</strong></p>
                  <p>Sample = 5.0000 g, Moisture = 11.5%, Ash net weight = 0.0825 g</p>
                  <p>% Ash (dry basis) = (0.0825 / 5.0000) × 100 × [100 / 88.5] = <strong>1.86%</strong> (Passes FSSAI Atta Max 2.0% limit ✓)</p>
                </div>
              </div>`
          },
          {
            title: "Determination of Acid Insoluble Ash (AIA / Sand & Silica Contamination)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Sand, Grit & Earthy Dirt:</strong> Inadequate pre-cleaning, field soil pickup during threshing, and stone wear during chakki grinding introduce silica and sand into flour.</li>
                  <li><strong>Statutory Limit:</strong> FSSAI statutory maximum: Atta 0.15%, Maida 0.10%, Besan 0.50%. Higher levels indicate grit, dental hazard, and digestive irritation.</li>
                </ul>
              </div>`,
            reference: "IS 1155:1968 / IS 1009:1979 / FSSAI Manual 03 / AOAC 941.12",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Total ash is boiled with 10% dilute hydrochloric acid (HCl). Dilute HCl quantitatively dissolves all physiological inorganic minerals (calcium, magnesium, potassium phosphates and oxides). Insoluble crystalline silica and sand particles remain undissolved. Residue is filtered through ashless filter paper, washed acid-free, re-ignited at 600°C, and weighed.</p>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Scientific Explanation of Factors & Constants:</h4>
                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Why 10% HCl and Ashless Filter Paper (Whatman 41/42)?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li>HCl forms soluble chloride salts with metal cations. Sulphuric acid would form insoluble Calcium Sulphate precipitate, leading to false high sand values.</li>
                  <li>Ashless filter paper burns away completely, leaving < 0.0001 g ash residue, ensuring zero gravimetric blank distortion.</li>
                </ul>
              </div>`
          },
          {
            title: "Determination of Gluten Content (Wet & Dry Gluten — Hand Washing & Glutomatic Method)",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Viscoelastic Baking Quality:</strong> Gluten is the cohesive, elastic protein network formed by hydration of Gliadin (extensibility) and Glutenin (elasticity/tenacity). It entraps CO2 gas during fermentation and cooking, enabling bread rising and chapati puffing.</li>
                  <li><strong>FSSAI Mandate:</strong> Whole Wheat Atta must contain minimum 6.0% Dry Gluten (dry basis); Maida must contain minimum 7.5% Dry Gluten.</li>
                </ul>
              </div>`,
            reference: "IS 1155:1968 / IS 1009:1979 / AACC 38-12.02 / ICC 137/1",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Flour is kneaded with 2% NaCl wash solution to form a cohesive dough. After resting for 30 minutes, starch granules, albumins, and globulins are washed away under a stream of 2% NaCl solution until washings test negative for starch with iodine solution. The isolated wet gluten ball is weighed, then dried at 130°C to determine dry gluten.</p>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Scientific Explanation of Factors & Constants:</h4>
                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Why 2% NaCl wash solution?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li>Tap water or pure distilled water peptizes (dissolves) gluten strands at low ionic strength. 2% NaCl solution stabilizes hydrophobic bonds and prevents gluten loss during washing.</li>
                  <li>Wet to dry gluten ratio is ~3:1 because 1 g dry gluten protein binds approximately 2 g of capillary water (200% hydration capacity).</li>
                </ul>
              </div>`
          },
          {
            title: "Determination of Gluten Index (Gluten Quality & Strength Test via Centrifugation)",
            purpose: `<div class="bg-indigo-50 border border-indigo-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Measures gluten strength and viscoelastic balance. Identifies flour suitability: GI < 60 = Weak (Biscuits); GI 60-80 = Medium (Chapatis / Flatbreads); GI 80-95 = Strong (Leavened Bread); GI > 98 = Extremely strong (Durum pasta).</li>
                </ul>
              </div>`,
            reference: "AACC Method 38-12.02 / ICC Standard 155",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Wet gluten isolated from the Glutomatic is placed onto a standardized sieve cassette and centrifuged at 6000 rpm for 60 seconds. Strong elastic glutenin crosslinks are retained on top of the sieve, while weak extensible gliadin fraction is forced through the sieve holes. Gluten Index is calculated as: (Gluten on sieve / Total gluten) × 100.</p>`
          },
          {
            title: "Determination of Crude Protein (Macro Kjeldahl Nitrogen Digestion Method)",
            purpose: `<div class="bg-purple-50 border border-purple-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Primary nutritional parameter. FSSAI statutory standards: Atta Min 10.0% (dry basis), Besan Min 22.0%, Maida Min 10.0%. Besan adulteration with maida or starch is detected by a sharp drop below 22.0%.</li>
                </ul>
              </div>`,
            reference: "IS 7219:1973 / AOAC 979.09 / ISO 20483 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Flour is digested with concentrated H2SO4 in the presence of K2SO4 and CuSO4 catalysts at 420°C. Organic nitrogen is converted into ammonium sulphate. Alkali (40% NaOH) is added to liberate NH3 into 4% boric acid, followed by titration with standardized 0.1 N HCl.</p>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Scientific Explanation of Factors & Constants:</h4>
                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Why Factor 5.70 for Wheat and 6.25 for Besan?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Wheat Factor 5.70:</strong> Wheat gluten proteins contain high levels of glutamine and glutamic acid, giving an average Nitrogen content of <strong>17.54%</strong>. Factor = 100 / 17.54 = <strong>5.70</strong>.</li>
                  <li><strong>Besan Factor 6.25:</strong> Chickpea legume proteins contain 16.0% Nitrogen. Factor = 100 / 16.0 = <strong>6.25</strong>.</li>
                  <li><strong>Rice Factor 5.95:</strong> Rice glutelin contains 16.8% Nitrogen. Factor = 100 / 16.8 = <strong>5.95</strong>.</li>
                </ul>
              </div>`
          },
          {
            title: "Determination of Alcoholic Acidity (Lipolytic Deterioration & Storage Freshness Index)",
            purpose: `<div class="bg-orange-50 border border-orange-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Flour lipases break down wheat germ lipids into Free Fatty Acids over time. High alcoholic acidity imparts sour, bitter flavor and impairs gluten gas retention. FSSAI limit: Atta Max 0.18%, Maida Max 0.12% (as H2SO4).</li>
                </ul>
              </div>`,
            reference: "IS 1155:1968 / IS 1009:1979 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Flour is extracted with 90% neutral ethanol for 24 hours. Neutral alcohol selectively dissolves free fatty acids from lipid hydrolysis without extracting cereal mineral phytates or phosphates. The filtered extract is titrated against standardized 0.05 N NaOH using phenolphthalein indicator.</p>`
          },
          {
            title: "Determination of Crude Fiber (Sequential Acid & Alkali Digestion Method)",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Quantifies insoluble structural cell wall components (cellulose, lignin, hemicellulose). Verifies genuine whole wheat atta (1.8 - 2.5%) vs refined maida (< 0.3%). FSSAI limit for Atta: Max 2.5% (dry basis).</li>
                </ul>
              </div>`,
            reference: "IS 1155:1968 / AOAC 962.09 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Sequential boiling in 1.25% H2SO4 followed by 1.25% NaOH removes starch, sugars, and proteins. The remaining indigestible organic residue is weighed, then incinerated at 550°C. Loss in weight on ashing represents Crude Fiber.</p>`
          },
          {
            title: "Granularity & Particle Size Distribution (Standard Sieve Shaker Analysis)",
            purpose: `<div class="bg-teal-50 border border-teal-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Controls water absorption rate, kneading properties, and chapati puffing. FSSAI mandate: Min 98% whole wheat atta must pass through IS Sieve 425 micron (40 mesh); max 50% retained on 150 micron (100 mesh).</li>
                </ul>
              </div>`,
            reference: "IS 460 / IS 1155:1968 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>A known mass of flour is placed on a standardized sieve nest (IS 425µm, 250µm, 150µm, pan) and shaken on a mechanical sieve shaker for 5-10 minutes. Retained fractions are weighed to compute particle size distribution.</p>`
          },
          {
            title: "Water Absorption Capacity & Dough Rheology (Brabender Farinograph Method)",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Evaluates commercial dough yield and dough stability. Higher water absorption (typically 60-68% for good chapati atta) yields more chapatis per bag and preserves crumb freshness.</li>
                </ul>
              </div>`,
            reference: "AACC Method 54-21.02 / ICC 115/1 / ISO 5530-1",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Flour is mixed at 30°C in a Farinograph mixing bowl while water is titrated until dough consistency centers precisely on the 500 Brabender Units (BU) line. Water Absorption (%), Dough Development Time (DDT), and Stability are recorded.</p>`
          },
          {
            title: "Determination of Falling Number (Hagberg-Perten Alpha-Amylase & Sprout Damage Assay)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Detects weather sprout damage. High alpha-amylase activity degrades starch into maltodextrins, yielding sticky gummy dough, collapsed bread, and flat rotis. Ideal range: 250 - 350 seconds.</li>
                </ul>
              </div>`,
            reference: "IS 4333 (Part V) 1970 / ISO 3093:2009 / AACC 56-81.03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Flour suspension is gelatinized in a boiling water bath (100°C) and stirred for 60 seconds. The time (in seconds) required for the viscometer stirrer to fall through the liquefied starch paste under gravity is the Falling Number.</p>`
          },
          {
            title: "Determination of Sedimentation Value (Zeleny SDS Method for Gluten Swelling)",
            purpose: `<div class="bg-cyan-50 border border-cyan-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Rapidly tests both gluten quantity and quality. High sedimentation volume (> 30 ml) indicates superior breadmaking potential with high gluten strength.</li>
                </ul>
              </div>`,
            reference: "IS 4333 (Part IV) 1971 / AACC 56-60.01 / ISO 5529",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Flour suspension is treated with lactic acid-SDS reagent. Gluten proteins swell into large flocculent structures and resist sedimentation. Sediment volume is read directly after standardized settling time.</p>`
          },
          {
            title: "Determination of Starch Damage (Megazyme Enzymatic Method)",
            purpose: `<div class="bg-rose-50 border border-rose-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Grinding shear fractures starch granules. Moderate damaged starch (7-10%) enhances water absorption in chapatis; > 12% causes excessive amylolysis and sticky dough.</li>
                </ul>
              </div>`,
            reference: "AACC Method 76-31.01 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Fungal alpha-amylase selectively hydrolyzes mechanically cracked starch granules into maltosaccharides without attacking intact crystalline starch. Liberated sugars are quantified spectrophotometrically.</p>`
          },
          {
            title: "Determination of Uric Acid Content (Storage Insect Weevil & Pest Infestation Index)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Storage pests (weevils, beetles) excrete metabolic nitrogen primarily as insoluble Uric Acid. FSSAI statutory maximum limit: 100 mg/kg (ppm). Serves as an unforgeable index of grain insect infestation.</li>
                </ul>
              </div>`,
            reference: "AOAC 969.46 / FSSAI Manual 03 (Cereals)",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Uric acid is extracted in alkaline buffer and measured spectrophotometrically at 292 nm before and after enzymatic destruction with uricase.</p>`
          },
          {
            title: "Detection of Rodent Hair & Insect Fragments (Acid Hydrolysis & Mineral Oil Flotation)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Microscopic filth examination verifying GMP compliance and absence of rodent hairs and insect body fragments.</li>
                </ul>
              </div>`,
            reference: "AOAC 972.32 / IS 4333 (Part I)",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Flour is digested with dilute acid to solubilize starch, mixed with light mineral oil in a Wildman trap flask, and floated. Lipophilic hairs and insect fragments partition into the oil layer and are filtered and enumerated under 30x-100x magnification.</p>`
          },
          {
            title: "Aflatoxins (B1, B2, G1, G2) & Total Mycotoxins Analysis (IAC Cleanup + HPLC-FLD)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Aflatoxins synthesized by Aspergillus flavus are Group 1 human carcinogens. FSSAI statutory maximum: Aflatoxin B1 max 15 µg/kg, Total Aflatoxins max 30 µg/kg.</li>
                </ul>
              </div>`,
            reference: "FSSAI Manual 03 / AOAC 999.07 / ISO 16050",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Sample is extracted with methanol:water (80:20), purified over an Immunoaffinity Column (IAC), post-column brominated via a Kobra cell, and quantified on HPLC with Fluorescence Detection (Ex 365 nm / Em 440 nm).</p>`
          },
          {
            title: "Detection of Metanil Yellow & Non-Permitted Azo Dyes in Besan / Atta",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Toxic non-permitted industrial dye added to fake or low-grade besan to impart an intense golden-yellow appearance. Completely banned under FSSAI.</li>
                </ul>
              </div>`,
            reference: "FSSAI Manual 03 / DGHS Manual / IS 2400",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Addition of concentrated HCl protonates the azo group of Metanil Yellow, producing an intense magenta-pink coloration that persists upon dilution with water.</p>`
          },
          {
            title: "Detection of Khesari Dal (Lathyrus sativus / BOAA Neurotoxin) in Chickpea Besan",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Detects adulteration with cheap Khesari dal containing neurotoxin BOAA which causes incurable neurolathyrism (spastic paraplegia of lower limbs).</li>
                </ul>
              </div>`,
            reference: "IS 2400:1976 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Acid extraction and reaction producing a characteristic pink-red color upon heating with concentrated HCl.</p>`
          },
          {
            title: "Detection of Added Chalk / Calcium Carbonate / Lime in Wheat Flour",
            purpose: `<div class="bg-stone-50 border border-stone-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Detects fraudulent addition of mineral chalk (CaCO3) used to artificially whiten flour and increase bag weight.</li>
                </ul>
              </div>`,
            reference: "FSSAI Manual 03 / IS 1155",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Addition of dilute HCl produces rapid carbon dioxide gas effervescence: CaCO3 + 2HCl ⟶ CaCl2 + H2O + CO2 ↑.</p>`
          },
          {
            title: "Detection of Talc, Soapstone & Heavy Minerals (Chloroform Flotation Method)",
            purpose: `<div class="bg-gray-50 border border-gray-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Rapid screening for talcum powder and soapstone mineral adulterants in flours based on specific gravity differentiation.</li>
                </ul>
              </div>`,
            reference: "FSSAI Manual 03 / IS 1155",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Starch flour particles (density ~1.40 g/ml) float on Chloroform (sp. gr. 1.48 g/ml), whereas heavy mineral adulterants (density 2.5 - 2.8 g/ml) settle to the bottom.</p>`
          },
          {
            title: "Determination of Fortificant Iron in Fortified Atta (o-Phenanthroline Spectrophotometry)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Verifies national +F fortification compliance. Statutory mandate: 28.0 to 42.5 mg Iron per kg of fortified wheat flour.</li>
                </ul>
              </div>`,
            reference: "AOAC 944.02 / FSSAI Fortification Regulations / Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Sample is ashed, reduced with hydroxylamine hydrochloride to ferrous iron (Fe2+), and complexed with 1,10-ortho-phenanthroline to form an orange-red tris-phenanthroline complex measured at 510 nm.</p>`
          },
          {
            title: "Determination of Fortificant Folic Acid in Fortified Atta (Reverse Phase HPLC-UV Method)",
            purpose: `<div class="bg-green-50 border border-green-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Verifies +F fortification compliance: 75 to 125 µg Folic Acid per 100g of fortified atta for neural tube defect prevention.</li>
                </ul>
              </div>`,
            reference: "AOAC 944.12 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Phosphate buffer extraction, C18 solid phase cleanup, reverse phase HPLC separation, and UV detection at 280 nm.</p>`
          },
          {
            title: "Determination of Heavy Metals (Lead, Cadmium, Arsenic) via ICP-MS / AAS",
            purpose: `<div class="bg-slate-50 border border-slate-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Assesses toxic environmental contaminants bioaccumulated in grains. FSSAI limits: Lead max 0.2 mg/kg, Cadmium max 0.1 mg/kg, Arsenic max 0.1 mg/kg.</li>
                </ul>
              </div>`,
            reference: "AOAC 999.10 / FSSAI Manual 03 / ISO 17294",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Closed-vessel microwave digestion in trace-grade HNO3 + H2O2, followed by ICP-MS or graphite furnace AAS quantification.</p>`
          },
          {
            title: "Cereals & Grain Products Master Quality & Statutory Testing Battery Summary",
            purpose: `<div class="bg-indigo-50 border border-indigo-200 p-3 rounded my-2">
                <p><strong>Comprehensive Quality Assurance Reference Matrix:</strong> Complete 23 testing SOP battery across Atta, Maida, Suji, Besan, Rice, Oats, and Poha with statutory FSSAI/BIS limits and mandated factory testing frequencies.</p>
              </div>`,
            reference: "FSSAI Food Safety and Standards Regulations / BIS Specifications",
            procedure: `<div class="overflow-x-auto my-4">
                <table class="min-w-full text-xs border border-gray-300">
                  <thead class="bg-indigo-700 text-white font-semibold">
                    <tr>
                      <th class="border border-indigo-800 p-2 text-left">Test Parameter</th>
                      <th class="border border-indigo-800 p-2 text-left">Standard Reference</th>
                      <th class="border border-indigo-800 p-2 text-left">Atta Limit</th>
                      <th class="border border-indigo-800 p-2 text-left">Maida Limit</th>
                      <th class="border border-indigo-800 p-2 text-left">Suji Limit</th>
                      <th class="border border-indigo-800 p-2 text-left">Besan Limit</th>
                      <th class="border border-indigo-800 p-2 text-left">Testing Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Moisture Content</td><td class="border p-2">IS 4333 (Pt 2)</td><td class="border p-2">Max 14.0%</td><td class="border p-2">Max 13.0%</td><td class="border p-2">Max 13.5%</td><td class="border p-2">Max 11.5%</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Total Ash (dry basis)</td><td class="border p-2">IS 1155 / IS 1009</td><td class="border p-2">Max 2.0%</td><td class="border p-2">Max 1.0%</td><td class="border p-2">Max 1.0%</td><td class="border p-2">Max 3.0%</td><td class="border p-2 text-indigo-700 font-semibold">Daily / Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Acid Insoluble Ash (AIA)</td><td class="border p-2">IS 1155</td><td class="border p-2">Max 0.15%</td><td class="border p-2">Max 0.10%</td><td class="border p-2">Max 0.10%</td><td class="border p-2">Max 0.50%</td><td class="border p-2 text-indigo-700 font-semibold">Daily / Shift</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Gluten (Dry Basis)</td><td class="border p-2">IS 1155 / AACC 38-12</td><td class="border p-2">Min 6.0%</td><td class="border p-2">Min 7.5%</td><td class="border p-2">Min 6.0%</td><td class="border p-2">N/A (Gluten-Free)</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Gluten Index</td><td class="border p-2">AACC 38-12.02</td><td class="border p-2">60 - 85</td><td class="border p-2">75 - 95</td><td class="border p-2">80 - 95</td><td class="border p-2">N/A</td><td class="border p-2">Weekly</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Crude Protein</td><td class="border p-2">IS 7219</td><td class="border p-2">Min 10.0%</td><td class="border p-2">Min 10.0%</td><td class="border p-2">Min 10.0%</td><td class="border p-2 font-bold text-emerald-700">Min 22.0%</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Alcoholic Acidity (as H2SO4)</td><td class="border p-2">IS 1155</td><td class="border p-2">Max 0.18%</td><td class="border p-2">Max 0.12%</td><td class="border p-2">Max 0.18%</td><td class="border p-2">Max 0.18%</td><td class="border p-2 text-indigo-700 font-semibold">Daily</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Crude Fiber</td><td class="border p-2">IS 1155</td><td class="border p-2">Max 2.5%</td><td class="border p-2">Max 0.3%</td><td class="border p-2">Max 0.5%</td><td class="border p-2">Max 3.0%</td><td class="border p-2">Weekly</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Granularity (IS 40 mesh)</td><td class="border p-2">IS 460</td><td class="border p-2">Min 98% pass</td><td class="border p-2">100% pass</td><td class="border p-2">Retained >95%</td><td class="border p-2">Min 98% pass</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Falling Number</td><td class="border p-2">ISO 3093</td><td class="border p-2">Min 250 s</td><td class="border p-2">Min 250 s</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Raw Material Lot</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Uric Acid</td><td class="border p-2">AOAC 969.46</td><td class="border p-2">Max 100 mg/kg</td><td class="border p-2">Max 100 mg/kg</td><td class="border p-2">Max 100 mg/kg</td><td class="border p-2">Max 100 mg/kg</td><td class="border p-2">Fortnightly</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Aflatoxin B1 / Total</td><td class="border p-2">FSSAI Manual 03</td><td class="border p-2">15 / 30 µg/kg</td><td class="border p-2">15 / 30 µg/kg</td><td class="border p-2">15 / 30 µg/kg</td><td class="border p-2">15 / 30 µg/kg</td><td class="border p-2">Monthly</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Metanil Yellow & Azo Dyes</td><td class="border p-2">DGHS Method</td><td class="border p-2">Negative</td><td class="border p-2">Negative</td><td class="border p-2">Negative</td><td class="border p-2 text-red-600 font-bold">Negative (Zero)</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Khesari Dal (BOAA)</td><td class="border p-2">IS 2400</td><td class="border p-2">Negative</td><td class="border p-2">Negative</td><td class="border p-2">Negative</td><td class="border p-2 text-red-600 font-bold">Negative (Zero)</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Fortificant Iron (+F)</td><td class="border p-2">AOAC 944.02</td><td class="border p-2">28 - 42.5 mg/kg</td><td class="border p-2">28 - 42.5 mg/kg</td><td class="border p-2">Optional</td><td class="border p-2">N/A</td><td class="border p-2 text-indigo-700 font-semibold">Daily (Fortified)</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Fortificant Folic Acid (+F)</td><td class="border p-2">AOAC 944.12</td><td class="border p-2">75 - 125 µg/100g</td><td class="border p-2">75 - 125 µg/100g</td><td class="border p-2">Optional</td><td class="border p-2">N/A</td><td class="border p-2 text-indigo-700 font-semibold">Weekly (Fortified)</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Heavy Metals (Pb, Cd, As)</td><td class="border p-2">AOAC 999.10</td><td class="border p-2">< 0.2 / 0.1 ppm</td><td class="border p-2">< 0.2 / 0.1 ppm</td><td class="border p-2">< 0.2 / 0.1 ppm</td><td class="border p-2">< 0.2 / 0.1 ppm</td><td class="border p-2">Quarterly</td></tr>
                  </tbody>
                </table>
              </div>`
          }
        ]
      };
