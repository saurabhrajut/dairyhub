/**
 * Compositional Analysis: Bakery & Confectionery (Bread, Biscuits, Cakes, Chocolates)
 * Independent product module for easy future updates and extensions.
 */

export const bakeryConfectioneryHi = {
        title: "बेकरी और कन्फेक्शनरी उत्पाद (Bakery & Confectionery: Bread, Biscuits, Cake, Chocolate, Candy)",
        tests: [
          {
            title: "Moisture Content (Nami) ka Determination (Air Oven & Vacuum Oven Method)",
            purpose: `<div class="bg-cyan-50 border border-cyan-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Crispness vs Softness Balance:</strong> Biscuits aur cookies mein moisture < 5.0% (preferably 2.0-4.0%) hona zaroori hai taaki crisp texture bani rahe; agar moisture badhe to biscuit soggy/soggy ho jaata hai aur fat hydrolysis se rancidity shuru ho jaati hai.</li>
                  <li><strong>Bread Crumb Staling & Mold:</strong> Bread crumb mein moisture 38.0% se 42.0% ke beech maintain karni hoti hai. Bahut kam moisture bread ko dry aur hard bana deti hai; bahut zyada moisture (> 40%) hone par mold (Rhizopus stolonifer) aur rope spores rapidly proliferate karte hain.</li>
                  <li><strong>Sugar Confectionery & Candies:</strong> Hard-boiled candies mein moisture strictly < 2.0% honi chahiye, warna candy hygroscopic hokar wrapper se chipak jaati hai aur graining (crystallization) ho jaati hai.</li>
                  <li><strong>FSSAI Mandates:</strong> Biscuits: Max 6.0% (IS 1011: Max 5.0%), White Bread: Max 40.0% (IS 1483), Hard Boiled Sugar Confectionery: Max 3.0%.</li>
                </ul>
              </div>`,
            reference: "IS 1011:2002 (Biscuits) / IS 1483:1988 (White Bread) / IS 1008 (Hard Boiled Sugar Confectionery) / AOAC 925.45",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Sample ko isothermal forced-air convection oven mein (biscuits aur bread ke liye 105°C ± 2°C) ya vacuum oven mein 70°C par 25-50 mm Hg pressure par (sugary confectionery ke liye taaki fructose/glucose caramelize na ho) dry kiya jaata hai. Free water vaporize ho jaata hai aur mass loss se percentage moisture gravimetrically calculate hoti hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Reagents aur Apparatus:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Forced Air Convection Oven:</strong> 105°C ± 1°C par calibrated.</li>
                <li><strong>Vacuum Oven:</strong> 70°C par vacuum pump (< 50 mm Hg) ke saath (candies aur high-sugar cakes ke liye).</li>
                <li><strong>Analytical Balance:</strong> 0.0001 g readability.</li>
                <li><strong>Desiccator:</strong> Active cobalt blue silica gel ke saath.</li>
                <li><strong>Moisture Dishes:</strong> Tight slip-over aluminum dishes.</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Step-by-Step Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Empty dish aur lid ko oven mein 105°C par 30 min heat karein, desiccator mein 30 min cool karein aur tare weight (W0) note karein.</li>
                <li>Sample preparation:
                  <ul class="list-disc pl-5 mt-1">
                    <li><strong>Biscuits:</strong> Mixer grinder mein 5-10 biscuits ko fine powder mein crush karein. 5.0000 g weigh karein (W1).</li>
                    <li><strong>Bread:</strong> Loaf ke center se crust hata kar crumb ka sample lein aur crumble karke turant weigh karein (5.0000 g).</li>
                    <li><strong>Hard Candies:</strong> Mortar mein rapidly crush karein aur 70°C vacuum oven mein dry karein.</li>
                  </ul>
                </li>
                <li>Dish ko oven mein 105°C par 4 ghante (biscuits ke liye) ya 3 ghante (bread ke liye) dry hone dein.</li>
                <li>Lid band karke desiccator mein transfer karein, 30-45 minute room temperature tak cool karein aur turant weigh karein (W2).</li>
              </ol>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Har Number Kyun? — Factors & Constants ki Complete Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Candies aur sweet biscuits ke liye 130°C ke bajaye 105°C ya 70°C vacuum oven kyun?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Sugar Caramelization & Thermal Decomposition:</strong> Biscuits aur confectioneries mein inverted sugar, glucose syrup aur sucrose high amounts mein hote hain. Fructose 105°C se upar aur sucrose 160°C par caramelize hokar volatile decomposition products (HMF, organic acids) release karte hain jo evaporate ho jaate hain, jisse mass loss false high (galat moisture) aayega. Isliye vacuum oven 70°C par dry karna scientific gold standard hai.</li>
                </ul>

                <div class="bg-white p-3 rounded mt-2 text-sm font-mono border border-blue-200">
                  <p><strong>Formula:</strong> % Moisture (w/w) = [ (W1 - W2) / (W1 - W0) ] × 100</p>
                  <p class="mt-2 text-blue-900"><strong>Practical Example (Biscuits):</strong></p>
                  <p>W0 = 26.5412 g, W1 = 31.5412 g (5.0000 g sample), W2 = 31.3662 g</p>
                  <p>Loss = 31.5412 - 31.3662 = 0.1750 g</p>
                  <p>% Moisture = (0.1750 / 5.0000) × 100 = <strong>3.50%</strong> (Passes FSSAI / IS 1011 Max 5.0% limit ✓)</p>
                </div>
              </div>`
          },
          {
            title: "Water Activity (aw) ka Determination (Chilled-Mirror Dewpoint Hygrometer)",
            purpose: `<div class="bg-indigo-50 border border-indigo-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Microbial Growth Thresholds:</strong> Bacteria ko grow karne ke liye aw > 0.91, Yeasts ko aw > 0.88, aur Molds (Aspergillus, Penicillium) ko aw > 0.70 chahiye hota hai.</li>
                  <li><strong>Bakery Products aw Stability:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li>Biscuits & Crackers: aw 0.20 - 0.35 (No microbial growth possible, strictly shelf stable).</li>
                      <li>Cakes & Muffins: aw 0.75 - 0.85 (Intermediate moisture; mold risk high; requires preservatives like potassium sorbate).</li>
                      <li>Bread Crumb: aw 0.94 - 0.97 (High water activity; mold sporulation within 3-5 days without calcium propionate).</li>
                      <li>Chocolates & Candies: aw < 0.50 (Completely safe from mold, but condensation causes sugar bloom).</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 18787:2017 / AOAC 978.18 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Chilled-mirror dewpoint hygrometer (jaise AquaLab) sample chamber mein sealed air aur sample ke beech thermodynamic vapor pressure equilibrium measure karta hai. Chilled mirror par condensation dew point temperature optically infrared photodiode se detect hota hai. Sample surface temperature aur dewpoint temperature se equilibrium relative humidity (ERH) calculate hoti hai: $a_w = p / p_0 = ERH / 100$.</p>

              <h4 class="font-semibold mt-4 mb-2">Standard Calibration Salts:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>0.50 mol/kg KCl standard: aw = 0.984 ± 0.003 at 25°C</li>
                <li>6.00 mol/kg NaCl standard: aw = 0.760 ± 0.003 at 25°C</li>
                <li>8.57 mol/kg LiCl standard: aw = 0.500 ± 0.003 at 25°C</li>
              </ul>`
          },
          {
            title: "Total Fat Content ka Determination (Acid Hydrolysis Werner-Schmid / Mojonnier & Soxhlet Method)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Shortening & Butter Quantification:</strong> Biscuits (12-25% fat), cookies (up to 30% fat), cakes (15-22% fat) aur chocolates (minimum 25-35% cocoa butter + milk fat) mein fat richness, tenderness aur mouthfeel deta hai.</li>
                  <li><strong>Direct Soxhlet ki Inefficiency (Critical Lab Fact):</strong> Baked products mein baking oven ke high heat par fat gelatinized starch aur denatured gluten proteins ke saath amylose-lipid complexes (inclusion complexes) bana leta hai. Direct solvent extraction (Soxhlet) se 20-30% fat extract nahi ho paata!</li>
                  <li><strong>Mandatory Acid Digestion:</strong> Acid hydrolysis (HCl) starch matrix aur protein cross-links ko completely hydrolyze karke bound fat ko release karti hai.</li>
                </ul>
              </div>`,
            reference: "IS 1011:2002 / AOAC 922.06 (Acid Hydrolysis for Cereal Foods) / ISO 11085",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Crushed bakery sample ko dilute hydrochloric acid (8 N HCl) ke saath 70°C - 80°C par 30-40 minute digest kiya jaata hai. Acid gelatinized starch chains aur protein complexes ko tod kar bound lipids ko free karta hai. Digested mixture ko Mojonnier tube ya Werner-Schmid tube mein transfer karke ethanol, diethyl ether aur petroleum ether se triple extract kiya jaata hai. Solvents evaporate karke pure fat gravimetrically weigh hota hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Step-by-Step Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Finely crushed sample (2.0000 g biscuits ya cake) 100 ml beaker mein weigh karein.</li>
                <li>2 ml 95% ethanol add karke paste banayein (sample lumping avoid karne ke liye), phir 10 ml 8 N HCl (25 ml conc HCl + 11 ml water) add karein.</li>
                <li>Beaker ko 70°C - 80°C water bath mein 30-40 minute heat karein, frequent stirring karein jab tak mixture completely fluid aur translucent brown na ho jaye.</li>
                <li>Beaker ko room temperature par cool karein aur 10 ml 95% ethanol add karein.</li>
                <li>Content ko Mojonnier extraction tube mein transfer karein. 25 ml Diethyl Ether add karein aur 1 minute vigorously shake karein.</li>
                <li>25 ml Petroleum Ether (b.p. 40-60°C) add karein aur 1 minute shake karein. Tubes ko 20 minute settle hone dein jab tak upper ether layer completely clear na ho jaye.</li>
                <li>Upper ether layer ko pre-weighed dried round-bottom flask (W1) mein siphon out karein.</li>
                <li>Lower aqueous layer ko 15 ml Diethyl ether + 15 ml Petroleum ether se 2 baar aur re-extract karein.</li>
                <li>Rotary evaporator par solvent distill off karein, flask ko 100°C oven mein 60 minute dry karein, desiccator mein cool karein aur weigh karein (W2).</li>
              </ol>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Har Number Kyun? — Factors & Constants ki Complete Scientific Explanation:</h4>

                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Direct Soxhlet extraction baked products mein fail kyun ho jaati hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li>Baking ke dauran flour starch gelatinize hota hai aur linear amylose helices lipids (fatty acids, monoglycerides) ke saath inclusion complexes bana leti hain jo non-polar solvents (hexane, ether) mein impenetrable hoti hain. HCl acid bond tod kar starch ko soluble maltodextrins mein badalta hai, jisse 100% fat recovery hoti hai.</li>
                </ul>

                <div class="bg-white p-3 rounded mt-2 text-sm font-mono border border-blue-200">
                  <p><strong>Formula:</strong> % Total Fat (w/w) = [ (W2 - W1) / Sample Weight (g) ] × 100</p>
                  <p class="mt-2 text-blue-900"><strong>Practical Example (Biscuits):</strong></p>
                  <p>Sample = 2.0000 g, Empty Flask W1 = 112.4500 g, Flask + Extracted Fat W2 = 112.8250 g</p>
                  <p>Extracted Fat = 112.8250 - 112.4500 = 0.3750 g</p>
                  <p>% Total Fat = (0.3750 / 2.0000) × 100 = <strong>18.75%</strong> (Complies with biscuit label specification ✓)</p>
                </div>
              </div>`
          },
          {
            title: "Free Fatty Acids (FFA) aur Acid Value ka Determination (Extracted Bakery Fat)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Lipolytic Spoilage:</strong> Biscuits aur cakes mein fat storage ke dauran water aur heat ke exposure se hydrolyze ho jaata hai, jisse free fatty acids release hoti hain.</li>
                  <li><strong>Off-Flavor & Bitter Taste:</strong> FFA badhne se biscuit ka swaad kadwa aur throat-burning ho jaata hai.</li>
                  <li><strong>FSSAI Statutory Mandate:</strong> Biscuits aur bakery products se nikale gaye fat ka Acid Value <strong>maximum 2.0 mg KOH/g fat</strong> (ya FFA max 1.0% as oleic acid) hona chahiye per FSSAI regulations.</li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 1):1964 / AOAC 940.28 / AOCS Ca 5a-40 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Bakery sample se cold petroleum ether se extract kiye gaye fat ko neutralized hot ethanol:ether (1:1 v/v) solvent mixture mein dissolve kiya jaata hai. Free carboxylic acid (-COOH) groups ko phenolphthalein indicator ki presence mein standardized 0.1 N potassium hydroxide (KOH) ya sodium hydroxide (NaOH) se titrate kiya jaata hai.</p>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Scientific Explanation of Formulas & Factors:</h4>
                <div class="bg-white p-3 rounded mt-2 text-sm font-mono border border-blue-200">
                  <p><strong>Formulas:</strong></p>
                  <p>Acid Value (mg KOH/g fat) = (V × N × 56.11) / Fat Weight (g)</p>
                  <p>% FFA (as Oleic Acid) = (V × N × 28.2) / Fat Weight (g)</p>
                  <p>Jahan: 56.11 = KOH ka molecular weight; 28.2 = Oleic acid ka milliequivalent factor (282.4 / 10)</p>
                  <p class="mt-2 text-blue-900"><strong>Practical Example:</strong></p>
                  <p>Fat taken = 5.00 g, Titre V = 1.20 ml of 0.1000 N KOH</p>
                  <p>Acid Value = (1.20 × 0.1000 × 56.11) / 5.00 = <strong>1.35 mg KOH/g</strong> (Passes FSSAI Max 2.0 limit ✓)</p>
                  <p>% FFA (as oleic) = (1.20 × 0.1000 × 28.2) / 5.00 = <strong>0.68%</strong> ✓</p>
                </div>
              </div>`
          },
          {
            title: "Peroxide Value (PV) ka Determination (Lipid Auto-oxidation & Rancidity Test)",
            purpose: `<div class="bg-rose-50 border border-rose-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Primary Oxidative Rancidity Marker:</strong> Atmospheric oxygen unsaturated fatty acid double bonds par attack karke hydroperoxides (-OOH) banati hai. Ye hydroperoxides baad mein break hokar foul-smelling aldehydes aur ketones banate hain.</li>
                  <li><strong>Shelf Life Prediction:</strong> Fresh bakery fat ka PV < 2.0 meq/kg hona chahiye. PV > 10.0 meq/kg hone par biscuit stale aur rancid smell karne lagta hai. FSSAI limit for bakery fat: Max 10.0 meq O2/kg fat.</li>
                </ul>
              </div>`,
            reference: "IS 3508 / AOAC 965.33 / AOCS Cd 8b-90 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Extracted fat ko glacial acetic acid aur isooctane (3:2 v/v) solvent mixture mein dissolve kiya jaata hai. Excess saturated Potassium Iodide (KI) solution add kiya jaata hai. Lipid hydroperoxides iodide ions ($I^-$) ko iodine ($I_2$) mein quantitatively oxidize karte hain ($ROOH + 2I^- + 2H^+ → ROH + I_2 + H_2O$). Liberated iodine ko starch indicator ki presence mein standardized 0.01 N sodium thiosulphate ($Na_2S_2O_3$) se titrate kiya jaata hai.</p>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Scientific Explanation of Factors & Constants:</h4>
                <div class="bg-white p-3 rounded mt-2 text-sm font-mono border border-blue-200">
                  <p><strong>Formula:</strong> Peroxide Value (meq O2 / kg fat) = [ (V_sample - V_blank) × N × 1000 ] / Fat Mass (g)</p>
                  <p class="mt-2 text-blue-900"><strong>Practical Example:</strong></p>
                  <p>Fat = 5.00 g, V_sample = 2.45 ml 0.01 N thiosulphate, V_blank = 0.05 ml</p>
                  <p>PV = [ (2.45 - 0.05) × 0.0100 × 1000 ] / 5.00 = <strong>4.80 meq/kg</strong> (Within safe fresh range < 10 meq/kg ✓)</p>
                </div>
              </div>`
          },
          {
            title: "Rancidity Index: Kreis Test aur p-Anisidine Value (p-AV) (Secondary Oxidation Assay)",
            purpose: `<div class="bg-orange-50 border border-orange-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Advanced Rancidity Detection:</strong> Hydroperoxides unstable hote hain aur time ke saath decompose hokar secondary aldehydes (malonaldehyde, 2-alkenals, 2,4-dienals) banate hain. Agar purane sample mein peroxides decompose ho chuke hon to PV false low aa sakti hai, lekin Kreis test aur p-Anisidine Value secondary products ko detect karke true rancidity unmask karti hain.</li>
                  <li><strong>Kreis Color Response:</strong> Phloroglucinol reagent malonaldehyde ke saath react karke distinct pink/red chromophore deta hai. Red color = Advanced rancidity (unfit for consumption).</li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 1) / AOCS Cd 18-90 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Kreis test: Fat ko concentrated HCl aur 0.1% phloroglucinol in diethyl ether solution ke saath 1 minute vigorously shake kiya jaata hai. Epihydrin aldehyde (malonaldehyde) phloroglucinol ke saath condense hokar pink-to-red colored complex banata hai. p-Anisidine value: Fat isooctane mein dissolve karke p-anisidine reagent ke saath react karta hai aur 350 nm par absorbance measure hoti hai.</p>`
          },
          {
            title: "Reducing Sugars aur Total Sugars ka Determination (Lane & Eynon Volumetric Fehling Method)",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Browning, Sweetness & Shelf Life:</strong> Biscuits aur cookies mein reducing sugars (glucose, fructose, maltose) baking ke dauran Maillard reaction mein amino acids ke saath golden crust color aur aroma banati hain.</li>
                  <li><strong>Hard Boiled Candies:</strong> Candy mein reducing sugar (invert sugar / liquid glucose) 12% se 18% ke beech maintain honi chahiye. Agar reducing sugars < 10% ho to sucrose crystallize ho jaata hai (graining); agar > 20% ho to candy sticky aur hygroscopic ho jaati hai.</li>
                  <li><strong>FSSAI Mandates:</strong> Biscuits Total Sugars: Max 30% w/w; Hard Candies: Reducing Sugar 12-25%, Total Sugars min 90%.</li>
                </ul>
              </div>`,
            reference: "IS 1011:2002 / IS 1008 / AOAC 923.09 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Alkaline tartrate medium mein cupric ions ($Cu^{2+}$, Fehling's solution blue) boiling temperature par reducing sugars dwara cuprous oxide ($Cu_2O$, red precipitate) mein reduce hote hain. Boiling solution mein methylene blue indicator add kiya jaata hai; jaise hi saara copper reduce hota hai, next drop reducing sugar indicator ko colorless leuco-form mein reduce kar deti hai. Non-reducing sucrose ko dilute HCl ke saath 68°C - 70°C par invert sugars (glucose + fructose) mein hydrolyze karke Total Invert Sugars determine kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Reagents:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Fehling's Solution A:</strong> 69.28 g Copper Sulphate pentahydrate ($CuSO_4· 5H_2O$) per liter.</li>
                <li><strong>Fehling's Solution B:</strong> 346 g Potassium Sodium Tartrate (Rochelle salt) + 100 g NaOH per liter.</li>
                <li><strong>Methylene Blue Indicator (0.2% w/v aqueous).</strong></li>
                <li><strong>Carrez Reagents I & II:</strong> Protein aur fat clarification ke liye.</li>
              </ul>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Scientific Explanation of Inversion & Calculations:</h4>
                <div class="bg-white p-3 rounded mt-2 text-sm font-mono border border-blue-200">
                  <p><strong>Formulas:</strong></p>
                  <p>% Reducing Sugars = (Factor × Dilution × 100) / (Titre V1 × Sample Weight)</p>
                  <p>% Total Invert Sugars = (Factor × Dilution × 100) / (Titre V2 × Sample Weight)</p>
                  <p>% Sucrose = ( % Total Invert Sugars - % Reducing Sugars ) × 0.95</p>
                  <p>Jahan: 0.95 = Molecular weight ratio of Sucrose (342.3) to Invert Sugar (360.3) = 342.3 / 360.3 = 0.95</p>
                </div>
              </div>`
          },
          {
            title: "Sugar Profile Determination by HPLC-RI (Glucose, Fructose, Sucrose, Lactose, Maltose)",
            purpose: `<div class="bg-purple-50 border border-purple-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Milk Chocolate & Confectionery Authentication:</strong> Milk chocolate mein lactose content milk solids percentage verify karta hai. Synthetic syrup adulteration (high fructose corn syrup / invert syrup) detect hoti hai.</li>
                </ul>
              </div>`,
            reference: "AOAC 977.20 / ISO 22184 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Aqueous alcoholic extract ko defat aur clarify karke amino-bonded silica column (NH2 column) par separate kiya jaata hai. Acetonitrile : Water (80:20 v/v) mobile phase use hota hai. Individual carbohydrates Refractive Index (RI) detector par detect aur quantify hote hain.</p>`
          },
          {
            title: "Total Ash aur Acid Insoluble Ash (AIA / Sand & Silica) ka Determination",
            purpose: `<div class="bg-stone-50 border border-stone-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Flour & Ingredient Purity:</strong> Biscuits aur bread mein mineral salt (NaCl, baking powder NaHCO3) aur flour bran ash contribute karte hain.</li>
                  <li><strong>Sand / Silica Contamination:</strong> Acid Insoluble Ash (AIA) 10% HCl mein sand aur silica measure karta hai. FSSAI limit: Biscuits AIA max 0.05% (or 0.10%), Bread max 0.10%. Higher value grinding stone wear ya uncleaned grain flour darshata hai.</li>
                </ul>
              </div>`,
            reference: "IS 1011 / IS 1483 / AOAC 923.03 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Sample ko muffle furnace mein 550°C par incinerate karke Total Ash calculate hoti hai. Ash ko 10% dilute HCl ke saath boil karke Whatman 41 ashless filter paper par filter kiya jaata hai aur re-ignite karke Acid Insoluble Ash (AIA) calculate hoti hai.</p>`
          },
          {
            title: "Cocoa Ash Purity aur Alkalinity of Soluble Ash (Dutch-Process Alkalization Index)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Cocoa & Chocolate Verification:</strong> Dutch process cocoa powder mein acidity neutralize karne aur dark color ke liye potassium carbonate ($K_2CO_3$) add kiya jaata hai. FSSAI mandate: Alkalinity of soluble ash maximum 5.0% (as K2CO3 on fat-free dry basis).</li>
                </ul>
              </div>`,
            reference: "IS 1163:1992 (Chocolates) / AOAC 972.15 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Water-soluble ash fraction ko standardized 0.1 N HCl se methyl orange indicator ki presence mein titrate kiya jaata hai aur alkalinity ko equivalent % K2CO3 mein express kiya jaata hai.</p>`
          },
          {
            title: "Crumb pH aur Titratable Acidity ka Determination (Bread Fermentation Quality Test)",
            purpose: `<div class="bg-teal-50 border border-teal-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Fermentation Balance:</strong> Yeast aur lactic acid bacteria fermentation se crumb pH 5.3 se 5.8 ke beech settle hota hai.</li>
                  <li><strong>Over-Fermentation vs Rope Risk:</strong> Agar pH < 5.0 ho to bread sour/khatti ho jaati hai aur crumb structure collapse ho jaata hai. Agar pH > 6.0 ho to calcium propionate preservative inactive ho jaata hai aur rope bacteria (Bacillus subtilis) tezi se panapne lagte hain.</li>
                  <li><strong>FSSAI Mandate (IS 1483):</strong> White Bread ka pH 5.3 se 5.8 ke beech hona chahiye; total titratable acidity max 0.25% (as lactic acid).</li>
                </ul>
              </div>`,
            reference: "IS 1483:1988 (White Bread Specification) / AACC 02-52.01",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>10.0 g fresh bread crumb ko 100 ml CO2-free distilled water ke saath homogenize kiya jaata hai. Suspension ko calibrated pH meter (glass-calomel combined electrode) se 25°C par read kiya jaata hai. Phir 0.1 N NaOH se phenolphthalein endpoint tak titrate karke acidity measure hoti hai.</p>`
          },
          {
            title: "Rope Spores Spoilage Test (Bacillus subtilis / B. licheniformis in Bread)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Bacterial Rope Spoilage:</strong> Bread baking mein oven ka center temperature ~98-100°C reach karta hai jo vegetative cells ko kill karta hai lekin Bacillus subtilis aur B. licheniformis ke heat-resistant bacterial endospores survive kar jaate hain.</li>
                  <li><strong>Rope Manifestation:</strong> Warm humid storage (28-35°C) mein ye spores germinate karte hain aur potent proteolytic aur amylolytic enzymes secrete karte hain. Bread ka crumb sticky, soft, brown ho jaata hai aur khinchne par slimy silken ropes (taar) bante hain jisme ripe cantaloupe melon jaisi foul smell aati hai.</li>
                  <li><strong>Commercial Rejection:</strong> Rope-infected bread toxic bacterial metabolites contain karti hai aur food poisoning risk banati hai.</li>
                </ul>
              </div>`,
            reference: "IS 1483:1988 / Compendium of Methods for the Microbiological Examination of Foods",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Heat-Shock Method: Flour ya dough sample suspension ko 80°C par 10-15 minute pasteurize kiya jaata hai taaki all vegetative cells destroy ho jayein aur sirf thermo-resistant endospores survive karein. Serial dilutions ko Dextrose Tryptone Agar (DTA) par pour plate kiya jaata hai aur 37°C par 48 hours incubate kiya jaata hai. Rope spore count per gram calculate kiya jaata hai (Flour limit: < 10-20 spores/g to prevent rope outbreak).</p>`
          },
          {
            title: "Preservative Assay: Calcium Propionate aur Sodium Diacetate ka Determination (Bread mein)",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Mold & Rope Inhibition:</strong> Calcium propionate ($Ca(C_3H_5O_2)_2$) bread mein mold aur rope bacteria ko rokne ka primary statutory antimycotic preservative hai.</li>
                  <li><strong>FSSAI Statutory Ceiling:</strong> FSSAI Regulations ke mutabiq Bread mein Calcium Propionate <strong>maximum 5000 mg/kg (0.5% w/w)</strong> (as propionic acid max 3200 ppm) allowed hai. Overdose karne par bread mein bitter chemical aftertaste aur pungent smell aati hai.</li>
                </ul>
              </div>`,
            reference: "IS 1483 / AOAC 950.36 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Acidified bread homogenate se propionic acid ko steam distillation apparatus mein distill karke collect kiya jaata hai aur standardized 0.1 N NaOH se titrate kiya jaata hai, ya Gas Chromatography (GC-FID) par quantify kiya jaata hai.</p>`
          },
          {
            title: "Preservative Assay: Sorbic Acid aur Benzoic Acid ka Determination (Cakes & Pastries mein HPLC-UV)",
            purpose: `<div class="bg-green-50 border border-green-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Fungal Shelf Life in Moist Cakes:</strong> Sponge cakes, fruit cakes aur icings mein high moisture (aw 0.75-0.85) mold growth ko support karti hai. Potassium sorbate / Sorbic acid mold membranes ko disrupt karke 30-45 din ki shelf life deta hai.</li>
                  <li><strong>FSSAI Limit:</strong> Cakes mein Sorbic Acid maximum 1000 mg/kg (ppm) allowed hai. Benzoic acid baked goods mein normally permitted nahi hota (zero tolerance).</li>
                </ul>
              </div>`,
            reference: "ISO 22855 / AOAC 994.11 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Cake sample se preservatives ko methanol:water mixture se ultrasonic bath mein extract kiya jaata hai, Carrez reagents se protein/fat clarify kiya jaata hai, aur C18 reverse-phase column par separate kiya jaata hai. Sorbic acid 254 nm par aur benzoic acid 227 nm UV wavelength par detect hote hain.</p>`
          },
          {
            title: "Total Yeast & Mold Count (YMC) ka Enumeration (Fungal Spoilage Testing)",
            purpose: `<div class="bg-lime-50 border border-lime-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Bakery products ka primary biological spoilage mode mold colonization hai (Rhizopus, Aspergillus, Penicillium, Eurotium). Statutory limit: Biscuits & Cakes < 50 to 100 CFU/g.</li>
                </ul>
              </div>`,
            reference: "IS 5403:1999 / ISO 21527-2 / FSSAI Microbiological Standards",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Sample ko sterile buffered peptone water mein homogenize karke serial 10-fold dilutions banaye jaate hain. DRBC (Dichloran Rose Bengal Chloramphenicol Agar) plates par pour plate karke 25°C ± 1°C par 5 din incubate kiya jaata hai.</p>`
          },
          {
            title: "Salmonella Species ka Detection (Chocolates, Cocoa & Bakery Products mein)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>High-Risk Pathogen in Chocolate:</strong> Chocolate mein low water activity (aw < 0.5) aur high fat (~30%) Salmonella bacteria ko heat aur stomach gastric acid se shield karti hai. Salmonella ki extremely low infective dose (even 1-10 cells) severe salmonellosis gastrointestinal infection paida kar sakti hai.</li>
                  <li><strong>FSSAI Statutory Mandate:</strong> Salmonella must be <strong>Absent in 25 g</strong> of chocolate, cocoa powder, biscuits, and confectionery. Zero tolerance!</li>
                </ul>
              </div>`,
            reference: "ISO 6579-1:2017 / IS 5887 (Part 3) / FSSAI Microbiological Standards",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Chocolate sample ko pre-warmed sterile Buffered Peptone Water (BPW) with 1% Tween 80 ya non-fat dry milk mein 37°C par 24h pre-enrich kiya jaata hai. Rappaport-Vassiliadis Soya (RVS) broth aur MKTTn broth mein 41.5°C par selective enrichment hoti hai. XLD (Xylose Lysine Deoxycholate) aur Hektoen Enteric (HE) agar par streak karke characteristic black-centered colonies inspect ki jaati hain aur polyvalent somatic O/H antisera se serologically confirm kiya jaata hai.</p>`
          },
          {
            title: "Aflatoxins (B1, B2, G1, G2) ka Analysis (Cocoa, Nuts, Biscuits mein HPLC-FLD)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Nut biscuits (peanut, almond cookies) aur cocoa beans mein Aspergillus flavus fungus Aflatoxins synthesize karta hai jo human liver carcinogens hain. FSSAI limit: Aflatoxin B1 max 15 ppb, Total Aflatoxins max 30 ppb.</li>
                </ul>
              </div>`,
            reference: "AOAC 999.07 / FSSAI Manual 03 / ISO 16050",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Sample ko methanol:water se extract karke immunoaffinity column (IAC) se clean kiya jaata hai aur post-column photochemical/electrochemical derivatization ke saath HPLC-FLD (Ex 365 nm / Em 440 nm) par quantify kiya jaata hai.</p>`
          },
          {
            title: "Particle Size Fineness ka Determination (Chocolate Mouthfeel & Conching Test)",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Sensory Smoothness vs Grittiness:</strong> Human tongue 25-30 micron se bade solid particles ko as 'gritty / sandy' detect karti hai. High quality chocolate mein refining aur conching ke baad maximum particle size < 20 microns (preferably 15-18 µm) hona chahiye taaki luxurious melt-in-mouth velvety texture mile.</li>
                </ul>
              </div>`,
            reference: "IOCCC Method 105-1996 / IS 1163",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Melted chocolate (40°C) ko refined mineral oil mein 1:1 dilute karke calibrated digital micrometer screw gauge (anvils flat) ya Hegman precision gauge groove par spread karke micro-grittiness depth read ki jaati hai.</p>`
          },
          {
            title: "Sulphur Dioxide (SO2) Residue ka Determination (Optimized Monier-Williams Method)",
            purpose: `<div class="bg-slate-50 border border-slate-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Bleaching Agent & Allergen:</strong> Confectionery mein use hone wale starch hydrolysates (liquid glucose syrup, invert sugar) aur desiccated coconut mein sodium metabisulphite bleaching aur antioxidant ke roop mein use hota hai.</li>
                  <li><strong>FSSAI Statutory Limit:</strong> Hard Boiled Sugar Confectionery mein SO2 residue <strong>maximum 70 mg/kg (ppm)</strong> allowed hai. Asthmatic patients ke liye SO2 severe bronchospasm trigger kar sakti hai isliye strict monitoring mandatory hai.</li>
                </ul>
              </div>`,
            reference: "AOAC 990.28 (Optimized Monier-Williams Method) / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Sample ko boiling hydrochloric acid ke saath reflux kiya jaata hai nitrogen stream ke under. SO2 gas displace hokar neutral 3% hydrogen peroxide ($H_2O_2$) solution mein trap hoti hai jahan wo Sulphuric Acid ($H_2SO_4$) mein oxidize hoti hai: $SO_2 + H_2O_2 → H_2SO_4$. Bante huye acid ko standardized 0.01 N NaOH se methyl red indicator par titrate kiya jaata hai.</p>`
          },
          {
            title: "Synthetic Food Colors aur Non-Permitted Dyes ka Screening (HPLC-DAD / TLC)",
            purpose: `<div class="bg-pink-50 border border-pink-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Candies, biscuits icings aur cake decorations mein permitted synthetic food colors (Tartrazine, Sunset Yellow, Ponceau 4R, Brilliant Blue) FSSAI statutory limit (maximum 100 mg/kg in finished food) ke andar hone chahiye. Non-permitted dyes (Metanil Yellow, Rhodamine B, Auramine, Sudan dyes) completely banned hain.</li>
                </ul>
              </div>`,
            reference: "FSSAI Manual 03 / AOAC 995.11 / ISO 21870",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Water-soluble dyes ko wool fiber dye-bath absorption method se extract karke dilute ammonia se elute kiya jaata hai. Eluted colors ko C18 reverse phase HPLC Diode Array Detector (DAD) par 400-650 nm par certified dye standards ke saath identify aur quantify kiya jaata hai.</p>`
          },
          {
            title: "Texture Profile Analysis (TPA) aur Breaking Snap Force (Texture Analyzer Method)",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Biscuits ki snap hardness (fracturability) aur bread crumb ki springiness aur staling rate ko objective mechanical load cell (Newtons force) se measure karna.</li>
                </ul>
              </div>`,
            reference: "AACC Method 74-09.01 / ISO 11036",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Biscuits ko 3-point bending rig support par rakhkar blade probe se compress kiya jaata hai. Peak fracture force (N) biscuit crispness quantify karti hai. Bread crumb ko cylindrical probe se two-cycle compression dekar hardness, gumminess aur chewiness calculate ki jaati hai.</p>`
          },
          {
            title: "Heavy Metals Contamination: Lead (Pb) aur Cadmium (Cd) in Cocoa Products (ICP-MS / AAS)",
            purpose: `<div class="bg-stone-50 border border-stone-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Cocoa Cadmium Bioaccumulation:</strong> Cocoa tree soil se Cadmium ko preferentially absorb karti hai. FSSAI Regulations ke anusaar Chocolates mein Cadmium 0.1 to 0.8 mg/kg aur Lead maximum 0.5 to 1.0 mg/kg allowed hai.</li>
                </ul>
              </div>`,
            reference: "AOAC 999.10 / FSSAI Manual 03 / ISO 17294",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Cocoa/Chocolate sample ko microwave digestion system mein concentrated ultra-pure HNO3 aur H2O2 ke saath digest kiya jaata hai aur Inductively Coupled Plasma Mass Spectrometry (ICP-MS) par trace levels par measure kiya jaata hai.</p>`
          },
          {
            title: "Specific Bread Volume aur Loaf Expansion Index (Rapeseed Displacement Method)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Loaf volume yeast gas production aur gluten gas retention ka ultimate proof hai. Specific Volume = Loaf Volume (ml) / Loaf Weight (g). White sandwich bread ke liye minimum 3.5 - 4.5 ml/g hona chahiye.</li>
                </ul>
              </div>`,
            reference: "AACC Method 10-05.01 / IS 1483",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Bread loaf ko calibrated container mein rakha jaata hai aur small uniform rapeseeds (ya mustard seeds) se fill kiya jaata hai. Displaced seeds ka volume graduated cylinder mein measure karke loaf volume determine hota hai.</p>`
          },
          {
            title: "Bakery & Confectionery Complete Quality & Statutory Testing Battery Summary",
            purpose: `<div class="bg-indigo-50 border border-indigo-200 p-3 rounded my-2">
                <p><strong>Complete Quality Assurance Reference Matrix:</strong> Bread, Biscuits, Cake, Chocolate aur Sugar Confectionery ke sabhi 23 testing SOPs, unke BIS/FSSAI standard references, statutory limits aur laboratory testing frequency ki ek single comprehensive ready-reckoner master table.</p>
              </div>`,
            reference: "FSSAI Food Safety and Standards Regulations / BIS IS 1483, IS 1011, IS 1163, IS 1008",
            procedure: `<div class="overflow-x-auto my-4">
                <table class="min-w-full text-xs border border-gray-300">
                  <thead class="bg-amber-800 text-white font-semibold">
                    <tr>
                      <th class="border border-amber-900 p-2 text-left">Test Parameter</th>
                      <th class="border border-amber-900 p-2 text-left">Standard Reference</th>
                      <th class="border border-amber-900 p-2 text-left">Biscuits Limit</th>
                      <th class="border border-amber-900 p-2 text-left">Bread Limit</th>
                      <th class="border border-amber-900 p-2 text-left">Cake Limit</th>
                      <th class="border border-amber-900 p-2 text-left">Chocolate / Candy</th>
                      <th class="border border-amber-900 p-2 text-left">Lab Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Moisture Content</td><td class="border p-2">IS 1011 / IS 1483</td><td class="border p-2">Max 5.0% (FSSAI 6.0%)</td><td class="border p-2">Max 40.0%</td><td class="border p-2">20.0 - 25.0%</td><td class="border p-2">< 2.0% (Candy Max 3%)</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Water Activity (aw)</td><td class="border p-2">ISO 18787</td><td class="border p-2">< 0.35</td><td class="border p-2">0.94 - 0.96</td><td class="border p-2">0.75 - 0.85</td><td class="border p-2">< 0.50</td><td class="border p-2">Daily / Line</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Total Fat Content</td><td class="border p-2">AOAC 922.06 (Acid Hyd)</td><td class="border p-2">As declared (±1.5%)</td><td class="border p-2">Optional (1-3%)</td><td class="border p-2">As declared</td><td class="border p-2">Min 25% (Cocoa+Milk)</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Acid Value of Fat</td><td class="border p-2">IS 548 (Pt 1)</td><td class="border p-2">Max 2.0 mg KOH/g</td><td class="border p-2">N/A</td><td class="border p-2">Max 2.0 mg KOH/g</td><td class="border p-2">Max 1.5 mg KOH/g</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Peroxide Value (PV)</td><td class="border p-2">AOAC 965.33</td><td class="border p-2">Max 10.0 meq/kg</td><td class="border p-2">N/A</td><td class="border p-2">Max 10.0 meq/kg</td><td class="border p-2">Max 5.0 meq/kg</td><td class="border p-2 text-indigo-700 font-semibold">Weekly / Lot</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Reducing & Total Sugars</td><td class="border p-2">IS 1011 (Lane-Eynon)</td><td class="border p-2">Total Max 30%</td><td class="border p-2">N/A</td><td class="border p-2">Total 25 - 40%</td><td class="border p-2">Reducing 12-25% (Candy)</td><td class="border p-2">Weekly</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Acid Insoluble Ash (AIA)</td><td class="border p-2">IS 1011 / IS 1483</td><td class="border p-2">Max 0.05%</td><td class="border p-2">Max 0.10%</td><td class="border p-2">Max 0.10%</td><td class="border p-2">Max 0.20%</td><td class="border p-2">Daily / Shift</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Crumb pH</td><td class="border p-2">IS 1483 (Bread)</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-emerald-700">5.3 - 5.8</td><td class="border p-2">6.5 - 7.5</td><td class="border p-2">5.5 - 6.5</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Rope Spores Spoilage</td><td class="border p-2">IS 1483 Heat Shock</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-red-600">Negative / Absent</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Weekly / Flour Lot</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Calcium Propionate</td><td class="border p-2">IS 1483 / AOAC</td><td class="border p-2">N/A</td><td class="border p-2">Max 5000 ppm</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Monthly</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Sorbic Acid Preservative</td><td class="border p-2">HPLC-UV 254nm</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Max 1000 ppm</td><td class="border p-2">N/A</td><td class="border p-2">Weekly</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Salmonella in 25g</td><td class="border p-2">ISO 6579 / FSSAI</td><td class="border p-2 text-red-600 font-bold">Absent in 25g</td><td class="border p-2 text-red-600 font-bold">Absent in 25g</td><td class="border p-2 text-red-600 font-bold">Absent in 25g</td><td class="border p-2 text-red-600 font-bold">Absent in 25g</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Total Yeast & Mold Count</td><td class="border p-2">ISO 21527 (DRBC)</td><td class="border p-2">< 50 CFU/g</td><td class="border p-2">< 100 CFU/g</td><td class="border p-2">< 100 CFU/g</td><td class="border p-2">< 100 CFU/g</td><td class="border p-2">Batch Release</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Chocolate Fineness</td><td class="border p-2">Micrometer / Hegman</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">< 20 microns</td><td class="border p-2">Conching Line</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">SO2 Residue</td><td class="border p-2">Monier-Williams</td><td class="border p-2">Max 50 ppm</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Max 70 ppm (Candy)</td><td class="border p-2">Raw Material Lot</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Synthetic Food Colors</td><td class="border p-2">HPLC-DAD / TLC</td><td class="border p-2">Permitted only < 100ppm</td><td class="border p-2">Not Permitted</td><td class="border p-2">Permitted only < 100ppm</td><td class="border p-2">Permitted only < 100ppm</td><td class="border p-2">Batch Check</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Cadmium & Lead in Cocoa</td><td class="border p-2">ICP-MS</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Cd < 0.8, Pb < 1.0 ppm</td><td class="border p-2">Quarterly</td></tr>
                  </tbody>
                </table>
              </div>`
          }
        ]
      };

export const bakeryConfectioneryEn = {
        title: "Bakery & Confectionery Products (Bread, Biscuits, Cake, Chocolate, Candy)",
        tests: [
          {
            title: "Determination of Moisture Content (Forced Air Convection & Vacuum Oven Method)",
            purpose: `<div class="bg-cyan-50 border border-cyan-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Crispness vs Softness Balance:</strong> Biscuits and cookies require low moisture (< 5.0%, typically 2.0-4.0%) to preserve crisp texture; elevated moisture causes sogginess and initiates lipolytic rancidity.</li>
                  <li><strong>Bread Crumb Staling & Microbial Shelf Life:</strong> Bread crumb requires 38.0% to 42.0% moisture. Excess moisture (> 40.0%) rapidly accelerates fungal mold sporulation and rope spore germination.</li>
                  <li><strong>Hard Boiled Candies & Toffees:</strong> Moisture must be kept strictly below 2.0% to avoid moisture-induced stickiness and crystallization (graining).</li>
                  <li><strong>Statutory Limits:</strong> Biscuits: Max 5.0% (IS 1011) / Max 6.0% (FSSAI), White Bread: Max 40.0% (IS 1483), Hard Boiled Confectionery: Max 3.0%.</li>
                </ul>
              </div>`,
            reference: "IS 1011:2002 (Biscuits) / IS 1483:1988 (White Bread) / IS 1008 / AOAC 925.45",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>The homogenized sample is dried in an isothermal convection oven at 105°C ± 1°C (for bread and biscuits) or in a vacuum oven at 70°C at < 50 mm Hg pressure (for confectionery and high-sugar cakes to prevent caramelization). Free water evaporates and mass loss is quantified gravimetrically.</p>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Scientific Explanation of Factors & Constants:</h4>
                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Why 70°C vacuum oven for high-sugar confectionery?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li>Fructose and invert sugars decompose and caramelize above 105°C, generating volatile organic breakdown compounds that cause falsely elevated moisture loss. Vacuum drying at 70°C preserves sugar integrity while removing free water.</li>
                </ul>

                <div class="bg-white p-3 rounded mt-2 text-sm font-mono border border-blue-200">
                  <p><strong>Formula:</strong> % Moisture (w/w) = [ (W1 - W2) / (W1 - W0) ] × 100</p>
                  <p class="mt-2 text-blue-900"><strong>Practical Example (Biscuits):</strong></p>
                  <p>W0 = 26.5412 g, W1 = 31.5412 g (5.0000 g sample), W2 = 31.3662 g</p>
                  <p>Loss = 0.1750 g ⟶ % Moisture = (0.1750 / 5.0000) × 100 = <strong>3.50%</strong> (Passes IS 1011 Max 5.0% limit ✓)</p>
                </div>
              </div>`
          },
          {
            title: "Determination of Water Activity (aw) (Chilled-Mirror Dewpoint Hygrometer)",
            purpose: `<div class="bg-indigo-50 border border-indigo-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Microbial Safety Critical Control Point:</strong> Measures chemical potential of free water available for microbial proliferation. Biscuits (aw < 0.35) are inherently shelf-stable; cakes (aw 0.75-0.85) require sorbates; bread (aw ~0.95) requires antimycotics.</li>
                </ul>
              </div>`,
            reference: "ISO 18787:2017 / AOAC 978.18 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Chilled-mirror dewpoint sensor equilibrates sample headspace and detects the exact temperature at which condensation forms on an optical mirror. Surface temperature and dew point calculate equilibrium relative humidity: aw = ERH / 100.</p>`
          },
          {
            title: "Determination of Total Fat Content (Acid Hydrolysis Werner-Schmid & Mojonnier Method)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Liberation of Bound Lipids:</strong> Oven baking binds up to 30% of shortening lipids inside amylose-lipid helices and protein matrices. Direct non-polar solvent Soxhlet extraction fails to extract this encapsulated fat.</li>
                  <li><strong>Acid Digestion:</strong> Digestion with 8 N HCl hydrolyzes carbohydrate polymers and denatures proteins, releasing 100% of bound triglycerides for ether extraction.</li>
                </ul>
              </div>`,
            reference: "IS 1011:2002 / AOAC 922.06 / ISO 11085",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Sample is digested in 8 N HCl at 70°C - 80°C for 30-40 minutes to hydrolyze starch-lipid inclusion complexes. The digest is extracted in a Mojonnier flask with ethanol, diethyl ether, and petroleum ether. Solvents are distilled off and the isolated fat is weighed gravimetrically.</p>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Scientific Explanation of Acid Hydrolysis:</h4>
                <div class="bg-white p-3 rounded mt-2 text-sm font-mono border border-blue-200">
                  <p><strong>Formula:</strong> % Total Fat (w/w) = [ (W2 - W1) / Sample Weight (g) ] × 100</p>
                  <p class="mt-2 text-blue-900"><strong>Practical Example:</strong></p>
                  <p>Sample = 2.0000 g, Empty Flask = 112.4500 g, Flask + Fat = 112.8250 g</p>
                  <p>% Fat = (0.3750 / 2.0000) × 100 = <strong>18.75%</strong> (Complies with biscuit specification ✓)</p>
                </div>
              </div>`
          },
          {
            title: "Determination of Free Fatty Acids (FFA) & Acid Value (Extracted Bakery Fat)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Hydrolytic Spoilage Indicator:</strong> Measures unesterified fatty acids liberated from shortening/butter during storage. High FFA produces throat irritation and bitter off-flavor.</li>
                  <li><strong>FSSAI Statutory Ceiling:</strong> Acid Value of fat extracted from biscuits and bakery products must not exceed <strong>2.0 mg KOH/g fat</strong> (FFA max 1.0% as oleic).</li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 1):1964 / AOAC 940.28 / AOCS Ca 5a-40",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Extracted bakery fat is dissolved in neutralized hot ethanol:ether (1:1 v/v) and titrated against standardized 0.1 N KOH using phenolphthalein indicator.</p>`
          },
          {
            title: "Determination of Peroxide Value (PV) (Lipid Auto-oxidation & Primary Rancidity)",
            purpose: `<div class="bg-rose-50 border border-rose-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Quantifies lipid hydroperoxides formed by free radical auto-oxidation. FSSAI statutory limit: Max 10.0 meq O2 / kg fat. Values > 10 indicate perceptible cardboard/paint rancidity.</li>
                </ul>
              </div>`,
            reference: "IS 3508 / AOAC 965.33 / AOCS Cd 8b-90",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Fat in glacial acetic acid : isooctane reacts with saturated potassium iodide (KI) in darkness. Hydroperoxides liberate stoichiometric iodine (I2), titrated against 0.01 N sodium thiosulphate with starch indicator.</p>`
          },
          {
            title: "Rancidity Index: Kreis Test & p-Anisidine Value (Secondary Aldehyde Oxidation)",
            purpose: `<div class="bg-orange-50 border border-orange-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Detects secondary oxidation products (malonaldehyde, 2-alkenals) that remain even after primary peroxides have decomposed. Positive Kreis pink/red color confirms advanced unpalatable rancidity.</li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 1) / AOCS Cd 18-90 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Fat reacts with concentrated HCl and 0.1% phloroglucinol in ether. Malonaldehyde condenses to form a distinct pink/red chromophore indicating secondary rancidity.</p>`
          },
          {
            title: "Determination of Reducing & Total Sugars (Lane & Eynon Volumetric Fehling Method)",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Controls baking color, Maillard reaction, and crispness. In hard candies, reducing sugar must be 12-25% to prevent sucrose graining (crystallization) and excessive hygroscopicity.</li>
                </ul>
              </div>`,
            reference: "IS 1011:2002 / IS 1008 / AOAC 923.09 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Cupric ions in alkaline Rochelle salt (Fehling's solution) are reduced to red cuprous oxide (Cu2O) at boiling temperature by reducing sugars, using methylene blue redox indicator. Non-reducing sucrose is inverted with HCl at 68°C - 70°C to determine Total Invert Sugars.</p>`
          },
          {
            title: "Sugar Profile Analysis by HPLC-RI (Glucose, Fructose, Sucrose, Lactose, Maltose)",
            purpose: `<div class="bg-purple-50 border border-purple-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Quantifies individual saccharides. In milk chocolate, lactose verifies genuine milk solid addition. Detects unauthorized adulteration with high-fructose corn syrup.</li>
                </ul>
              </div>`,
            reference: "AOAC 977.20 / ISO 22184 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Defatted, clarified aqueous extract is separated on an amino-bonded (NH2) silica column using acetonitrile:water (80:20 v/v) mobile phase with Refractive Index (RI) detection.</p>`
          },
          {
            title: "Determination of Total Ash & Acid Insoluble Ash (AIA / Sand & Silica)",
            purpose: `<div class="bg-stone-50 border border-stone-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Quantifies inorganic mineral residues. Acid Insoluble Ash (AIA) measures extraneous sand, dirt, and grinding stone dust. FSSAI limit: Biscuits AIA max 0.05%, Bread max 0.10%.</li>
                </ul>
              </div>`,
            reference: "IS 1011 / IS 1483 / AOAC 923.03 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Incineration in a muffle furnace at 550°C yields Total Ash. Boiling with 10% dilute HCl dissolves physiological minerals; insoluble silica is collected on Whatman 41 filter paper and re-ignited.</p>`
          },
          {
            title: "Alkalinity of Soluble Ash in Cocoa & Chocolate (Dutch-Process Alkalization Index)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Verifies potassium carbonate treatment during cocoa alkalization. FSSAI limit: Alkalinity of soluble ash max 5.0% (as K2CO3 on fat-free dry basis).</li>
                </ul>
              </div>`,
            reference: "IS 1163:1992 / AOAC 972.15 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Water-soluble ash extract is titrated against standardized 0.1 N HCl using methyl orange indicator.</p>`
          },
          {
            title: "Determination of Crumb pH & Titratable Acidity in Bread (Fermentation Quality)",
            purpose: `<div class="bg-teal-50 border border-teal-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Normal bread crumb pH must lie between 5.3 and 5.8 per IS 1483. pH < 5.0 indicates sour over-fermentation; pH > 6.0 inactivates calcium propionate and triggers bacterial rope spoilage.</li>
                </ul>
              </div>`,
            reference: "IS 1483:1988 (White Bread Specification) / AACC 02-52.01",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>10.0g crumb is blended with 100 ml CO2-free distilled water. Potentiometric pH is read with a combined glass electrode at 25°C, followed by titration with 0.1 N NaOH.</p>`
          },
          {
            title: "Rope Spores Spoilage Test (Bacillus subtilis / B. licheniformis Endospores in Bread)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Baking center temperature (98-100°C) allows bacterial endospores of Bacillus subtilis to survive. Spores germinate in warm storage, hydrolyzing crumb into brown, sticky, viscous silken ropes with foul cantaloupe odor.</li>
                </ul>
              </div>`,
            reference: "IS 1483:1988 / AACC 56-81 / Compendium of Microbiological Methods",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Heat-shock pasteurization at 80°C for 15 minutes destroys vegetative cells while preserving spores. Serial dilutions are plated on Dextrose Tryptone Agar (DTA) and incubated at 37°C for 48 hours.</p>`
          },
          {
            title: "Preservative Assay: Calcium Propionate & Sodium Diacetate in Bread",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Primary antimycotic agent in bread. FSSAI statutory maximum limit: <strong>5000 mg/kg (0.5% w/w)</strong> (as propionic acid max 3200 ppm). Excess imparts pungent chemical taste.</li>
                </ul>
              </div>`,
            reference: "IS 1483 / AOAC 950.36 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Steam distillation of acidified bread slurry followed by titration with standardized 0.1 N NaOH or GC-FID quantification.</p>`
          },
          {
            title: "Preservative Assay: Sorbic Acid & Benzoic Acid in Cakes by HPLC-UV",
            purpose: `<div class="bg-green-50 border border-green-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Inhibits mold in moist cakes (aw 0.75-0.85). FSSAI limit: Sorbic acid max 1000 mg/kg; Benzoic acid is non-permitted in baked goods.</li>
                </ul>
              </div>`,
            reference: "ISO 22855 / AOAC 994.11 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Ultrasonic extraction in methanol:water, Carrez clarification, C18 reverse-phase HPLC separation, and UV detection at 254 nm (sorbic) and 227 nm (benzoic).</p>`
          },
          {
            title: "Enumeration of Total Yeast & Mold Count (YMC) (DRBC Agar Method)",
            purpose: `<div class="bg-lime-50 border border-lime-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Primary biological spoilage indicator in baked foods. Statutory limit: Biscuits & Cakes < 50 to 100 CFU/g.</li>
                </ul>
              </div>`,
            reference: "IS 5403:1999 / ISO 21527-2 / FSSAI Microbiological Standards",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Pour plate culture on Dichloran Rose Bengal Chloramphenicol (DRBC) agar with incubation at 25°C ± 1°C for 5 days.</p>`
          },
          {
            title: "Detection of Salmonella Species in Chocolate, Cocoa & Bakery Products (ISO 6579)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>High-risk pathogen. High fat and low water activity in chocolate protect Salmonella against heat and gastric acid. FSSAI mandate: <strong>Absent in 25g</strong> (Strict Zero Tolerance).</li>
                </ul>
              </div>`,
            reference: "ISO 6579-1:2017 / IS 5887 (Part 3) / FSSAI Standards",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Pre-enrichment in BPW with 1% Tween 80 at 37°C for 24h, selective enrichment in RVS and MKTTn broths, plating on XLD and HE agar, and somatic O/H serological confirmation.</p>`
          },
          {
            title: "Determination of Aflatoxins (B1, B2, G1, G2) in Cocoa, Nuts & Biscuits (HPLC-FLD)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Potent liver carcinogens synthesized by Aspergillus flavus in cocoa beans and nuts. FSSAI limit: B1 max 15 ppb, Total max 30 ppb.</li>
                </ul>
              </div>`,
            reference: "AOAC 999.07 / FSSAI Manual 03 / ISO 16050",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Methanol:water extraction, immunoaffinity cleanup, post-column derivatization, and HPLC fluorescence detection (Ex 365 nm / Em 440 nm).</p>`
          },
          {
            title: "Determination of Particle Size Fineness in Chocolate (Micrometer & Hegman Gauge)",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Mouthfeel threshold: Human palate perceives particles > 25 µm as gritty. Conching and refining must achieve maximum particle size < 20 µm for velvety melt-in-mouth texture.</li>
                </ul>
              </div>`,
            reference: "IOCCC Method 105-1996 / IS 1163",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Diluted chocolate (40°C in mineral oil) is spread onto a Hegman gauge or digital micrometer anvils to measure fineness depth in microns.</p>`
          },
          {
            title: "Determination of Sulphur Dioxide (SO2) Residue (Optimized Monier-Williams Method)",
            purpose: `<div class="bg-slate-50 border border-slate-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Bleaching agent residue from liquid glucose and invert syrups in confectionery. FSSAI statutory limit: <strong>Max 70 mg/kg (ppm)</strong> in hard boiled sugar candy.</li>
                </ul>
              </div>`,
            reference: "AOAC 990.28 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Acid reflux under nitrogen sweeps SO2 into neutral 3% H2O2, oxidizing it to H2SO4, which is titrated against 0.01 N NaOH.</p>`
          },
          {
            title: "Screening of Synthetic Food Colors & Non-Permitted Dyes (HPLC-DAD & TLC)",
            purpose: `<div class="bg-pink-50 border border-pink-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Permitted coal-tar colors must not exceed 100 mg/kg in finished confectionery. Non-permitted toxic industrial dyes (Metanil Yellow, Rhodamine B) are strictly prohibited.</li>
                </ul>
              </div>`,
            reference: "FSSAI Manual 03 / AOAC 995.11 / ISO 21870",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Wool fiber absorption extraction followed by reverse-phase HPLC with photodiode array detection across 400-650 nm.</p>`
          },
          {
            title: "Texture Profile Analysis (TPA) & Breaking Snap Force (Texture Analyzer Method)",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Quantifies mechanical snap crispness in biscuits (3-point bending rig) and crumb firmness/springiness in bread loaves (two-cycle compression).</li>
                </ul>
              </div>`,
            reference: "AACC Method 74-09.01 / ISO 11036",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Precision load cell measures fracture peak force (Newtons) during blade bending or cylindrical probe compression.</p>`
          },
          {
            title: "Heavy Metals Contamination: Lead (Pb) & Cadmium (Cd) in Cocoa Products (ICP-MS)",
            purpose: `<div class="bg-stone-50 border border-stone-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Soil cadmium is hyper-accumulated by the cacao tree. FSSAI & EU limits: Cadmium 0.1 to 0.8 mg/kg and Lead max 0.5 to 1.0 mg/kg in chocolates.</li>
                </ul>
              </div>`,
            reference: "AOAC 999.10 / FSSAI Manual 03 / ISO 17294",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Microwave-assisted closed vessel digestion with trace-pure HNO3 + H2O2 followed by ICP-MS quantification.</p>`
          },
          {
            title: "Specific Bread Volume & Loaf Expansion Index (Rapeseed Displacement Method)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Primary metric of gas retention and gluten network expansion. Specific Volume = Loaf Volume (ml) / Weight (g). Standard commercial bread requires 3.5 - 4.5 ml/g.</li>
                </ul>
              </div>`,
            reference: "AACC Method 10-05.01 / IS 1483",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Loaf is immersed in a calibrated chamber filled with rapeseeds; the displaced seed volume is measured in a graduated cylinder.</p>`
          },
          {
            title: "Bakery & Confectionery Complete Quality & Statutory Testing Battery Summary",
            purpose: `<div class="bg-indigo-50 border border-indigo-200 p-3 rounded my-2">
                <p><strong>Comprehensive Quality Assurance Reference Matrix:</strong> Complete 23 testing SOP battery across Bread, Biscuits, Cake, Chocolate, and Confectionery with statutory FSSAI/BIS limits and mandated factory testing frequencies.</p>
              </div>`,
            reference: "FSSAI Food Safety and Standards Regulations / BIS IS 1483, IS 1011, IS 1163, IS 1008",
            procedure: `<div class="overflow-x-auto my-4">
                <table class="min-w-full text-xs border border-gray-300">
                  <thead class="bg-amber-800 text-white font-semibold">
                    <tr>
                      <th class="border border-amber-900 p-2 text-left">Test Parameter</th>
                      <th class="border border-amber-900 p-2 text-left">Standard Reference</th>
                      <th class="border border-amber-900 p-2 text-left">Biscuits Limit</th>
                      <th class="border border-amber-900 p-2 text-left">Bread Limit</th>
                      <th class="border border-amber-900 p-2 text-left">Cake Limit</th>
                      <th class="border border-amber-900 p-2 text-left">Chocolate / Candy</th>
                      <th class="border border-amber-900 p-2 text-left">Lab Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Moisture Content</td><td class="border p-2">IS 1011 / IS 1483</td><td class="border p-2">Max 5.0% (FSSAI 6.0%)</td><td class="border p-2">Max 40.0%</td><td class="border p-2">20.0 - 25.0%</td><td class="border p-2">< 2.0% (Candy Max 3%)</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Water Activity (aw)</td><td class="border p-2">ISO 18787</td><td class="border p-2">< 0.35</td><td class="border p-2">0.94 - 0.96</td><td class="border p-2">0.75 - 0.85</td><td class="border p-2">< 0.50</td><td class="border p-2">Daily / Line</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Total Fat Content</td><td class="border p-2">AOAC 922.06 (Acid Hyd)</td><td class="border p-2">As declared (±1.5%)</td><td class="border p-2">Optional (1-3%)</td><td class="border p-2">As declared</td><td class="border p-2">Min 25% (Cocoa+Milk)</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Acid Value of Fat</td><td class="border p-2">IS 548 (Pt 1)</td><td class="border p-2">Max 2.0 mg KOH/g</td><td class="border p-2">N/A</td><td class="border p-2">Max 2.0 mg KOH/g</td><td class="border p-2">Max 1.5 mg KOH/g</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Peroxide Value (PV)</td><td class="border p-2">AOAC 965.33</td><td class="border p-2">Max 10.0 meq/kg</td><td class="border p-2">N/A</td><td class="border p-2">Max 10.0 meq/kg</td><td class="border p-2">Max 5.0 meq/kg</td><td class="border p-2 text-indigo-700 font-semibold">Weekly / Lot</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Reducing & Total Sugars</td><td class="border p-2">IS 1011 (Lane-Eynon)</td><td class="border p-2">Total Max 30%</td><td class="border p-2">N/A</td><td class="border p-2">Total 25 - 40%</td><td class="border p-2">Reducing 12-25% (Candy)</td><td class="border p-2">Weekly</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Acid Insoluble Ash (AIA)</td><td class="border p-2">IS 1011 / IS 1483</td><td class="border p-2">Max 0.05%</td><td class="border p-2">Max 0.10%</td><td class="border p-2">Max 0.10%</td><td class="border p-2">Max 0.20%</td><td class="border p-2">Daily / Shift</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Crumb pH</td><td class="border p-2">IS 1483 (Bread)</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-emerald-700">5.3 - 5.8</td><td class="border p-2">6.5 - 7.5</td><td class="border p-2">5.5 - 6.5</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Rope Spores Spoilage</td><td class="border p-2">IS 1483 Heat Shock</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-red-600">Negative / Absent</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Weekly / Flour Lot</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Calcium Propionate</td><td class="border p-2">IS 1483 / AOAC</td><td class="border p-2">N/A</td><td class="border p-2">Max 5000 ppm</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Monthly</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Sorbic Acid Preservative</td><td class="border p-2">HPLC-UV 254nm</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Max 1000 ppm</td><td class="border p-2">N/A</td><td class="border p-2">Weekly</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Salmonella in 25g</td><td class="border p-2">ISO 6579 / FSSAI</td><td class="border p-2 text-red-600 font-bold">Absent in 25g</td><td class="border p-2 text-red-600 font-bold">Absent in 25g</td><td class="border p-2 text-red-600 font-bold">Absent in 25g</td><td class="border p-2 text-red-600 font-bold">Absent in 25g</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Total Yeast & Mold Count</td><td class="border p-2">ISO 21527 (DRBC)</td><td class="border p-2">< 50 CFU/g</td><td class="border p-2">< 100 CFU/g</td><td class="border p-2">< 100 CFU/g</td><td class="border p-2">< 100 CFU/g</td><td class="border p-2">Batch Release</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Chocolate Fineness</td><td class="border p-2">Micrometer / Hegman</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">< 20 microns</td><td class="border p-2">Conching Line</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">SO2 Residue</td><td class="border p-2">Monier-Williams</td><td class="border p-2">Max 50 ppm</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Max 70 ppm (Candy)</td><td class="border p-2">Raw Material Lot</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Synthetic Food Colors</td><td class="border p-2">HPLC-DAD / TLC</td><td class="border p-2">Permitted only < 100ppm</td><td class="border p-2">Not Permitted</td><td class="border p-2">Permitted only < 100ppm</td><td class="border p-2">Permitted only < 100ppm</td><td class="border p-2">Batch Check</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Cadmium & Lead in Cocoa</td><td class="border p-2">ICP-MS</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Cd < 0.8, Pb < 1.0 ppm</td><td class="border p-2">Quarterly</td></tr>
                  </tbody>
                </table>
              </div>`
          }
        ]
      };
