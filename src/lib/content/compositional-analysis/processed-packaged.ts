/**
 * Compositional Analysis: Processed & Packaged Foods (Jams, Jellies, Ketchups, Canned Foods, RTE)
 * Independent product module for easy future updates and extensions.
 */

export const processedPackagedHi = {
        title: "प्रसंस्कृत और पैकेज्ड खाद्य उत्पाद (Processed & Packaged Foods: Ketchup, Jam, Pickles, Canned Foods, RTE, Noodles)",
        tests: [
          {
            title: "Total Soluble Solids (°Brix) ka Determination (Digital Refractometer Method)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Sugar Solids & Yield Verification:</strong> Jams, jellies, tomato ketchup, aur sauces mein Total Soluble Solids (°Brix) dissolved sugars, fruit solids aur organic acids ki total concentration batata hai.</li>
                  <li><strong>FSSAI Statutory Mandates:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fruit Jam & Marmalade:</strong> Minimum 65.0° Brix (lower brix par water activity badh jaati hai aur mold sporulation ho jaata hai).</li>
                      <li><strong>Tomato Ketchup / Sauce:</strong> Minimum 25.0° Brix (plant solids + added sugar).</li>
                      <li><strong>Tomato Puree:</strong> Minimum 9.0° Brix; <strong>Tomato Paste:</strong> Minimum 24.0° Brix.</li>
                    </ul>
                  </li>
                  <li><strong>Texture & Gelation:</strong> Jam mein High Methoxyl (HM) Pectin gel network tabhi form hota hai jab °Brix ≥ 65° aur pH 3.0-3.3 ho.</li>
                </ul>
              </div>`,
            reference: "IS 2860:1964 / IS 3882:1966 / AOAC 932.12 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Sample mein mojud dissolved solutes (sugars, acids, salts) light beam ki velocity ko slow karte hain aur light ray ko refract (bend) karte hain. Critical angle of total internal reflection refractive index (nD) ko measure karta hai. Refractive index scale ko pure sucrose standard ke basis par degree Brix (°Brix = g sucrose per 100g solution at 20°C) mein calibrate kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Reagents aur Apparatus:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Digital Handheld / Abbe Refractometer:</strong> 0-32° Brix aur 28-62° / 58-92° Brix ranges, Automatic Temperature Compensation (ATC at 20°C) ke saath.</li>
                <li><strong>Distilled Water:</strong> Zero adjustment calibration (0.0° Brix at 20°C).</li>
                <li><strong>Whatman No. 4 Filter Paper / Muslin Cloth:</strong> Particulate matter filtration ke liye.</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Step-by-Step Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Refractometer prism ko distilled water aur soft tissue se clean karein aur distilled water daal kar 0.0° Brix par zero calibrate karein.</li>
                <li>Sample Preparation:
                  <ul class="list-disc pl-5 mt-1">
                    <li><strong>Tomato Ketchup / Sauce:</strong> Sample ko achhe se mix karein; agar seeds ya large fiber clumps hon to muslin cloth se squeeze karke clear serum prism par dalein.</li>
                    <li><strong>Jam / Jelly:</strong> 10g jam ko beaker mein lein, spatula se homogenize karein, aur 1-2 drops optical prism par rakhein.</li>
                  </ul>
                </li>
                <li>Prism cover plate gently band karein taaki koi air bubble na bache.</li>
                <li>Digital read button press karein ya shadow boundary line ko crosshair ke intersection par align karke scale reading note karein.</li>
                <li>Temperature record karein: Agar refractometer non-ATC hai to standard correction factor add/subtract karein (+0.07° Brix per °C above 20°C).</li>
              </ol>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Har Number Kyun? — Factors & Constants ki Complete Scientific Explanation:</h4>
                <h5 class="font-semibold mt-3 mb-1 text-blue-700">❓ Jam ke liye exactly 65.0° Brix hi kyun mandatory hai?</h5>
                <ul class="list-disc list-outside pl-5 space-y-1 my-2">
                  <li><strong>Pectin-Sugar-Acid Equilibrium:</strong> High-methoxyl (HM) pectin chains naturally negatively charged hoti hain jo water molecules se surrounded rehti hain. 65% sugar molecules water ko dehydrate kar dete hain, jisse pectin chains hydrophobic junctions bana kar rigid 3D viscoelastic gel network trap kar leti hain.</li>
                  <li><strong>Osmotic Preservation:</strong> 65° Brix par osmotic pressure itna high hota hai ki water activity (aw) drop hokar ~0.75-0.80 ho jaati hai, jisse bacterial spoilage completely inhibit ho jaati hai.</li>
                </ul>
              </div>`
          },
          {
            title: "Drained Weight aur Fill of Container ka Determination (Canned & Pickled Foods)",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Consumer Protection & Net Solid Mandate:</strong> Canned fruits (pineapple slices, fruit cocktail), canned vegetables (sweet corn, mushrooms), pickles aur ready-to-eat meals mein liquid brine/syrup/oil ke andar actual edible solid food percentage check karna.</li>
                  <li><strong>FSSAI Statutory Mandate:</strong> Canned fruits aur vegetables mein Drained Weight container ke declared net weight ka <strong>minimum 50% to 60%</strong> (mushrooms mein min 50%, pineapple min 58%) hona anivarya hai. Headspace maximum 10% of can height allowed hai.</li>
                </ul>
              </div>`,
            reference: "IS 2860:1964 / FSSAI Food Safety and Standards (Packaging and Labelling) Regulations / CODEX STAN 13-1981",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Can ya retort pouch ke contents ko standardized circular sieve (IS Sieve 2.8 mm mesh for pieces > 3mm; IS 1.4 mm for small berries) par 2 minute tak 17-20° tilt angle par drain kiya jaata hai. Liquid gravitational force se drain out ho jaata hai aur sieve par bacha solid drained weight gravimetrically weigh hota hai.</p>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Har Number Kyun? — Factors & Constants ki Complete Scientific Explanation:</h4>
                <div class="bg-white p-3 rounded mt-2 text-sm font-mono border border-blue-200">
                  <p><strong>Formula:</strong> % Drained Weight = [ (W_sieve+solid - W_empty_sieve) / Net Contents Weight ] × 100</p>
                  <p class="mt-2 text-blue-900"><strong>Practical Example (Canned Pineapple):</strong></p>
                  <p>Net Can Weight = 850 g, Tare Sieve = 420.0 g, Sieve + Drained Fruit = 930.0 g</p>
                  <p>Drained Fruit Solid = 930.0 - 420.0 = 510.0 g</p>
                  <p>% Drained Weight = (510.0 / 850.0) × 100 = <strong>60.0%</strong> (Complies with FSSAI Min 58% limit ✓)</p>
                </div>
              </div>`
          },
          {
            title: "pH Value aur Active Acidity ka Determination (Clostridium botulinum Safety Barrier)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>The Critical pH 4.6 Safety Line:</strong> Canning aur packaging science mein pH 4.6 world ki sabse critical biological boundary hai. Deadly spore-forming anaerobe bacterium <em>Clostridium botulinum</em> pH ≤ 4.6 par grow nahi kar sakta aur lethal neurotoxin produce nahi kar sakta.</li>
                  <li><strong>Acid Food vs Low-Acid Food Classification:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li>Acidified / High-Acid Foods (Tomato ketchup, jams, pickles): pH ≤ 4.0 (Mild boiling water pasteurization 85-95°C kaafi hai).</li>
                      <li>Low-Acid Retorted Canned Foods (Curries, ready-to-eat meals): pH > 4.6 (Mandatory pressurized retort sterilization at 121.1°C with F0 ≥ 3.0 minutes).</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 2860 / AOAC 981.12 / 21 CFR 114 (Acidified Foods) / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Calibrated combination glass-calomel electrode hydrogen ion activity (aH+) ko potentiometrically measure karta hai. Standard buffer solutions (pH 4.00, pH 7.00, pH 9.20) se two-point calibration kiya jaata hai 25°C par.</p>`
          },
          {
            title: "Titratable Acidity ka Determination (Total Acidity as Citric / Acetic Acid)",
            purpose: `<div class="bg-teal-50 border border-teal-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Flavor, Microbial Preservation & Statutory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Tomato Ketchup:</strong> Minimum 1.0% (as acetic acid) — tanginess aur preservative action ke liye.</li>
                      <li><strong>Fruit Jam:</strong> 0.5% se 1.2% (as anhydrous citric acid) — pectin gel setting ke liye optimal.</li>
                      <li><strong>Pickles in Brine / Oil:</strong> Minimum 1.2% to 2.0% (as acetic acid) — microbial spoilage prevention.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 2860:1964 / IS 3882 / AOAC 942.15 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Aqueous sample extract mein mojud organic acids (acetic, citric, malic) ko phenolphthalein indicator ki presence mein standardized 0.1 N sodium hydroxide (NaOH) se titrate kiya jaata hai (faint persistent pink color endpoint at pH 8.1 - 8.3).</p>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Scientific Explanation of Equivalence Factors:</h4>
                <div class="bg-white p-3 rounded mt-2 text-sm font-mono border border-blue-200">
                  <p><strong>Formulas:</strong></p>
                  <p>% Acidity (as Acetic Acid in Ketchup/Pickle) = [ (V × N × 0.06005 × 100) ] / Sample Mass (g)</p>
                  <p>% Acidity (as Citric Acid in Jam/Jelly) = [ (V × N × 0.06404 × 100) ] / Sample Mass (g)</p>
                  <p>Jahan: 0.06005 = Acetic acid ka milliequivalent weight (60.05 / 1000)</p>
                  <p>0.06404 = Anhydrous Citric acid ka milliequivalent weight (192.12 / 3 / 1000)</p>
                  <p class="mt-2 text-blue-900"><strong>Practical Example (Tomato Ketchup):</strong></p>
                  <p>Sample = 10.0g Ketchup, Titre V = 21.5 ml of 0.1000 N NaOH</p>
                  <p>% Acidity (as acetic) = (21.5 × 0.1000 × 0.06005 × 100) / 10.0 = <strong>1.29%</strong> (Passes FSSAI Min 1.0% limit ✓)</p>
                </div>
              </div>`
          },
          {
            title: "Preservative Assay: Sodium Benzoate / Benzoic Acid (Spectrophotometry & RP-HPLC-UV)",
            purpose: `<div class="bg-rose-50 border border-rose-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Antimicrobial Preservation in Acid Foods:</strong> Sodium benzoate ($C_7H_5NaO_2$) acidic pH (< 4.0) par undissociated benzoic acid mein convert hota hai jo yeasts aur bacteria ki cellular respiration inhibit karta hai.</li>
                  <li><strong>FSSAI Statutory Ceilings:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Tomato Ketchup & Sauces:</strong> Maximum 750 mg/kg (ppm).</li>
                      <li><strong>Fruit Jams, Jellies & Marmalades:</strong> Maximum 200 mg/kg (ppm).</li>
                      <li><strong>Pickles & Chutneys:</strong> Maximum 250 mg/kg (ppm).</li>
                    </ul>
                  </li>
                  <li>Overdose hone par throat-burning irritation aur chemical off-taste aata hai.</li>
                </ul>
              </div>`,
            reference: "IS 2860 / AOAC 994.11 / ISO 22855 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Sample ko sodium chloride aur hydrochloric acid ke saath saturate karke diethyl ether se extract kiya jaata hai. Ether layer ko dilute sodium hydroxide se wash karke aqueous phase mein convert kiya jaata hai. Benzoate ion 227 nm UV wavelength par strong optical absorption peak deta hai ($E_{1cm}^{1\%} = 930$). Alternatively, C18 reverse-phase HPLC with UV detector at 227 nm par accurately baseline resolve kiya jaata hai.</p>`
          },
          {
            title: "Preservative Assay: Potassium Sorbate / Sorbic Acid (RP-HPLC-UV Method)",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Mold & Yeast Suppression in Dressings & Purees:</strong> Sorbic acid catalase aur dehydrogenase enzymes ko block karta hai. Mayonnaise, salad dressings aur fruit spreads mein FSSAI statutory limits (500 to 1000 ppm) compliance verify karna.</li>
                </ul>
              </div>`,
            reference: "ISO 22855 / AOAC 994.11 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Carrez clarified sample extract ko C18 reverse-phase column par isocratic acetate buffer-methanol mobile phase ke saath separate kiya jaata hai. Sorbic acid 254 nm UV wavelength par calibrate kiya jaata hai.</p>`
          },
          {
            title: "Commercial Sterility aur Thermal Incubation Test (Canned & Retort Pouches mein)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Public Health Safety Barrier:</strong> Hermetically sealed cans aur retort pouches (ready-to-eat curries, vegetables, meat) commercially sterile hone chahiye — yaani koi viable microorganism ya toxin-producing spore ambient storage mein germinate na kar sake.</li>
                  <li><strong>Spoilage Types Unmasked:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Flat Sour Spoilage:</strong> <em>Geobacillus stearothermophilus</em> acid produce karta hai bina gas ke (can looks normal but food is sour).</li>
                      <li><strong>Thermophilic Gas Spoilage:</strong> <em>Thermoanaerobacterium saccharolyticum</em> can ends ko bulge (swell) kar deta hai (flipper, springer, hard swell).</li>
                      <li><strong>Putrefactive Anaerobes:</strong> <em>Clostridium sporogenes / C. botulinum</em> protein putrefaction aur foul odor produce karte hain.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 2168:1971 / US FDA BAM Chapter 21 / FSSAI Microbiological Standards",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Random representative cans/pouches ko do batches mein incubate kiya jaata hai: Mesophilic incubation (37°C ± 1°C for 14 days) aur Thermophilic incubation (55°C ± 1°C for 7 days). Daily physical inspection ki jaati hai can swelling, leakage ya seam deformation ke liye. Incubation ke baad aseptically open karke pH change, odor, aur microbiological culture media (DTA, RCM, Nutrient Broth) par sterility verify ki jaati hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Acceptance Criteria:</h4>
              <p class="text-xs">No swelling, no leakage, no significant pH drop (ΔpH < 0.2 units), zero viable microbial growth in aerobic and anaerobic culture tubes. Must be Commercially Sterile.</p>`
          },
          {
            title: "Clostridium botulinum aur Spore-Forming Anaerobes Test (Retorted RTE Foods)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Low-acid canned foods (pH > 4.6) mein Clostridium botulinum neurotoxin type A, B, E fatal paralysis (botulism) paida karta hai. Retort processing 12D cook reduction (F0 ≥ 3.0 min) ensure karti hai.</li>
                </ul>
              </div>`,
            reference: "US FDA BAM Chapter 17 / FSSAI Microbiological Manual",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Cooked Meat Medium (CMM) aur Fluid Thioglycollate Medium (FTM) mein anaerobic incubation (35°C par 5 days) karke proteolytic gas formation aur Gram-positive sub-terminal oval spores ka microscopic examination kiya jaata hai.</p>`
          },
          {
            title: "Howard Mold Count (HMC) ka Determination (Tomato Paste, Puree & Ketchup mein Rot Index)",
            purpose: `<div class="bg-orange-50 border border-orange-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Decomposed / Rotten Tomato Detection:</strong> Molds tomato skin aur flesh par rot paida karte hain. Processing ke dauran heat-treatment mold ko kill kar deta hai lekin unke microscopic cell wall hyphae (taar) paste mein intact rehte hain.</li>
                  <li><strong>FSSAI Statutory Ceilings:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li>Tomato Ketchup & Sauce: Maximum 50% positive fields.</li>
                      <li>Tomato Puree: Maximum 45% positive fields.</li>
                      <li>Tomato Paste: Maximum 50% positive fields (diluted to 8.5% total solids).</li>
                    </ul>
                  </li>
                  <li>HMC limit cross hona batata hai ki manufacturing mein sadhe huye (rotten/decayed) tamatar use kiye gaye the.</li>
                </ul>
              </div>`,
            reference: "AOAC 965.41 / IS 3882:1966 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Specially standardized Howard Mold Counting Chamber (calibrated depth exactly 0.100 mm) par sample drop rakha jaata hai. Compound microscope (100x magnification) ke circle of view (diameter exactly 1.382 mm, area 1.5 sq mm) ke andar 25 standardized fields inspect kiye jaate hain. Field ko 'Positive' tab mana jaata hai jab usme mojud mold hyphae ki combined length field diameter ke 1/6th (~0.23 mm) se zyada ho aur characteristic cross-walls (septa), branched structure ya granulated protoplasm visible ho.</p>

              <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded">
                <h4 class="font-bold text-blue-800 mb-3">🔬 Har Number Kyun? — Factors & Constants ki Complete Scientific Explanation:</h4>
                <div class="bg-white p-3 rounded mt-2 text-sm font-mono border border-blue-200">
                  <p><strong>Formula:</strong> % Howard Mold Count = (Number of Positive Fields / Total Fields Examined) × 100</p>
                  <p class="mt-2 text-blue-900"><strong>Practical Example:</strong></p>
                  <p>50 standardized fields examine kiye gaye; 16 fields mein genuine mold filaments paaye gaye.</p>
                  <p>% HMC = (16 / 50) × 100 = <strong>32.0%</strong> (Passes FSSAI Max 50% positive fields limit ✓)</p>
                </div>
              </div>`
          },
          {
            title: "Lycopene Content ka Determination (Tomato Processing Quality & Pulp Content Index)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Lycopene natural acyclic carotenoid red pigment hai jo tomato purity aur genuine tomato solids ka direct biological marker hai. Ketchup mein pumpkin ya carrot pulp ki milaawat ko identify karta hai.</li>
                </ul>
              </div>`,
            reference: "AOAC 944.07 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Sample se lycopene ko hexane:acetone:ethanol (2:1:1) solvent mixture se extract kiya jaata hai. Hexane phase ko separate karke spectrophotometer par 503 nm wavelength par absorbance measure ki jaati hai ($E_{1cm}^{1\%} = 3450$ in hexane).</p>`
          },
          {
            title: "Salt (Sodium Chloride) Content ka Determination (Volhard's Argentometric Titration)",
            purpose: `<div class="bg-cyan-50 border border-cyan-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Preservative Action in Pickles:</strong> Oil pickles mein salt 10-12% aur brine pickles mein 8-10% osmophilic yeast spoilage ko rokne ke liye mandatory hota hai. Sauces mein salt 1.5-3.0% rehta hai.</li>
                </ul>
              </div>`,
            reference: "IS 2860 / AOAC 937.09 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Volhard's Back Titration: Chloride ions ($Cl^-$) ko excess standard silver nitrate ($AgNO_3$) se silver chloride ($AgCl$) ke roop mein precipitate kiya jaata hai ($Cl^- + Ag^+ → AgCl \downarrow$). Nitrobenzene add karke AgCl precipitate ko coat kiya jaata hai. Unreacted excess silver ions ko ferric alum indicator ki presence mein standardized 0.1 N potassium thiocyanate ($KSCN$) se titrate kiya jaata hai (reddish-brown ferric thiocyanate endpoint).</p>`
          },
          {
            title: "Adulteration Check: Added Starch aur Synthetic Gums ka Test (Tomato Ketchup mein)",
            purpose: `<div class="bg-stone-50 border border-stone-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Tomato ketchup mein genuine tomato solids kam daal kar consistency badhane ke liye sasta potato starch, corn flour ya excessive carboxy methyl cellulose (CMC) milaya jaata hai. FSSAI ke mutabiq standard tomato ketchup mein added starch banned hai.</li>
                </ul>
              </div>`,
            reference: "IS 3882:1966 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Sample ko dilute karke boil kiya jaata hai aur cool karke 0.01 N Lugol's Iodine solution add kiya jaata hai. Tomato pulp mein natural starch zero hota hai. Intense blue/violet coloration added cereal/potato starch adulteration confirm karti hai.</p>`
          },
          {
            title: "Reducing Sugars aur Total Sugars ka Determination (Lane & Eynon Method)",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Jams mein Invert Sugar (reducing sugar) 25% se 35% ke beech honi chahiye. Agar reducing sugar < 20% ho to cane sugar crystallize ho jaati hai; agar > 40% ho to glucose micro-crystals granulate ho jaate hain.</li>
                </ul>
              </div>`,
            reference: "IS 2860 / AOAC 923.09 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Carrez clarified solution se Fehling's A & B mixture ko boiling condition par methylene blue indicator ke saath titrate kiya jaata hai. Inversion with dilute HCl at 68°C determines total sugars.</p>`
          },
          {
            title: "Pectin Content aur Jelly Grade ka Determination (Calcium Pectate Gravimetric Method)",
            purpose: `<div class="bg-indigo-50 border border-indigo-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Fruit pulps aur commercial pectin powder ki jelly forming capacity check karna. Genuine fruit jam mein minimum 0.5-1.0% natural pectin hona chahiye.</li>
                </ul>
              </div>`,
            reference: "AOAC 924.09 / IS 2860 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Pectin ko alkaline saponification (NaOH) se pectic acid mein badla jaata hai, phir calcium chloride ($CaCl_2$) daal kar insoluble Calcium Pectate ke roop mein precipitate kiya jaata hai, filter karke dry karke weigh kiya jaata hai.</p>`
          },
          {
            title: "Total Fat Content aur Emulsion Stability Test (Mayonnaise & Salad Dressings)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Standard Food Identity:</strong> FSSAI statutory regulations ke mutabiq standard Mayonnaise mein <strong>minimum 65.0% Vegetable Oil</strong> hona anivarya hai (egg yolk emulsifier ke saath). Emulsion cracking test heat stability verify karta hai.</li>
                </ul>
              </div>`,
            reference: "AOAC 935.43 / 21 CFR 169.140 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Acid hydrolysis Mojonnier ether extraction se total fat weigh hota hai. Emulsion stability: Mayonnaise ko 50°C incubator mein 48 ghante rakh kar centrifugal separation (3000 rpm, 10 min) par separated oil volume percentage measure kiya jaata hai (Limit: < 2% oil separation).</p>`
          },
          {
            title: "Moisture Content aur Extracted Fat ka FFA in Instant Noodles / Pasta",
            purpose: `<div class="bg-orange-50 border border-orange-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Shelf Life & Frying Oil Quality:</strong> Fried instant noodle blocks mein palm oil use hota hai. Moisture strictly ≤ 10.0% aur extracted fat ka Free Fatty Acids (FFA) maximum 1.0% (as oleic acid) hona chahiye per FSSAI regulations.</li>
                </ul>
              </div>`,
            reference: "FSSAI Standards for Instant Noodles / IS 1484",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Noodle cake ko crush karke 105°C air oven mein dry karke moisture nikaalte hain. Soxhlet solvent extraction se fat nikal kar 0.1 N KOH se FFA titrate kiya jaata hai.</p>`
          },
          {
            title: "Total Ash aur Acid Insoluble Ash (AIA / Sand & Silica) in Pickles & Chutneys",
            purpose: `<div class="bg-stone-50 border border-stone-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Pickles mein use hone wale raw mangoes, chillies aur ground spices mein field sand aur dust ki screening. FSSAI limit: AIA maximum 0.3% to 0.5% (dry basis).</li>
                </ul>
              </div>`,
            reference: "IS 2860 / IS 3565 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Muffle furnace mein 550°C par ash bana kar 10% dilute HCl se digest kiya jaata hai aur Whatman 41 ashless filter paper par silica isolate karke weigh kiya jaata hai.</p>`
          },
          {
            title: "Synthetic Food Colors aur Non-Permitted Dyes Screening (Sudan Dyes & Metanil Yellow in Sauces)",
            purpose: `<div class="bg-pink-50 border border-pink-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Red chilli sauce aur tomato sauces mein illegal carcinogenic red dyes (Sudan I, II, III, IV, Rhodamine B) aur pickles mein Metanil Yellow ki zero-tolerance screening.</li>
                </ul>
              </div>`,
            reference: "FSSAI Manual 03 / AOAC 995.11 / ISO 21870",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Solvent extraction aur C18 reverse-phase HPLC with Diode Array Detector (DAD) par retention time aur UV-Vis spectral scanning (400-600 nm) se verify kiya jaata hai.</p>`
          },
          {
            title: "Heavy Metals Contamination: Tin (Sn), Lead (Pb), Arsenic (As) in Canned Foods (ICP-MS / AAS)",
            purpose: `<div class="bg-slate-50 border border-slate-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Can Corrosion & Tin Toxicity:</strong> High-acid canned foods (pineapple, tomato puree) unlacquered tinplate can ki inner tin coating ko dissolve kar dete hain. Excess tin consumption severe acute gastrointestinal irritation aur vomiting trigger karta hai.</li>
                  <li><strong>FSSAI Statutory Ceilings:</strong> Tin (Sn) maximum <strong>250 mg/kg (ppm)</strong> in canned foods; Lead (Pb) maximum <strong>1.0 mg/kg</strong>.</li>
                </ul>
              </div>`,
            reference: "IS 2860 / AOAC 985.16 / ISO 17294 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Sample ko concentrated HNO3 aur HCl ke saath closed vessel microwave digestion mein digest kiya jaata hai aur Flame Atomic Absorption Spectrometry (FAAS at 235.5 nm) ya ICP-MS par quantify kiya jaata hai.</p>`
          },
          {
            title: "Can Seam Seal Integrity aur Vacuum Inspection (Double Seam Micrometer Examination)",
            purpose: `<div class="bg-gray-50 border border-gray-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Canned foods mein post-process leaker contamination ko rokna. Double seam overlap percentage (> 55%), seam tightness rating (> 70%), aur can internal vacuum (min 10-15 inches of Hg) verify karna.</li>
                </ul>
              </div>`,
            reference: "US FDA BAM Chapter 22 / Can Manufacturers Institute Standards / IS 2168",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Puncture vacuum gauge se internal negative pressure read kiya jaata hai. Can seam saw se cross-section cut karke optical seam projector microscope par body hook, cover hook, seam thickness aur actual overlap percentage inspect ki jaati hai.</p>`
          },
          {
            title: "Consistency aur Flow Rheology (Bostwick Consistometer Method for Ketchup & Sauces)",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Tomato ketchup aur purees ki commercial pouring quality aur serum separation (syneresis) control karna. FSSAI/USDA standard: Ketchup flow distance 20°C par 30 seconds mein <strong>3.0 to 7.0 cm</strong> hona chahiye.</li>
                </ul>
              </div>`,
            reference: "USDA Tomato Products Standards / ASTM F1080 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Level kiye gaye Bostwick Consistometer ke reservoir chamber mein 20°C equilibrated ketchup fill kiya jaata hai. Spring-loaded gate release karte hi sample 0.5 cm graduated inclined trough par flow karta hai. Exactly 30 seconds par flow distance (cm) read kiya jaata hai.</p>`
          },
          {
            title: "Total Plate Count (TPC) aur Coliforms Enumeration (Pasteurized Sauces & Ready Foods)",
            purpose: `<div class="bg-lime-50 border border-lime-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Pasteurized sauces, mayonnaise aur ready spreads ki overall microbiological hygiene verify karna. FSSAI limit: TPC < 10,000 CFU/g, Coliforms < 10 CFU/g.</li>
                </ul>
              </div>`,
            reference: "IS 5402:2012 / IS 5401:2002 / ISO 4833",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Serial dilutions ko Plate Count Agar (PCA at 30°C for 72h) aur Violet Red Bile Agar (VRBA at 37°C for 24h) par pour plate karke colonies enumerate ki jaati hain.</p>`
          },
          {
            title: "Yeast & Mold Enumeration in High-Acid Foods (DRBC / PDA Method)",
            purpose: `<div class="bg-rose-50 border border-rose-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Jams, jellies aur pickles mein osmophilic yeasts (Zygosaccharomyces bailii) aur acid-tolerant molds ki colony count karna jo gas production aur lid bulging paida karte hain. FSSAI limit: < 50-100 CFU/g.</li>
                </ul>
              </div>`,
            reference: "IS 5403 / ISO 21527-1 / FSSAI Microbiological Standards",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Dichloran Rose Bengal Chloramphenicol (DRBC) agar par pour plate karke 25°C par 5 din incubate karke colonies count ki jaati hain.</p>`
          },
          {
            title: "Processed & Packaged Foods Complete Quality & Statutory Testing Battery Summary",
            purpose: `<div class="bg-indigo-50 border border-indigo-200 p-3 rounded my-2">
                <p><strong>Comprehensive Quality Assurance Reference Matrix:</strong> Tomato Ketchup, Fruit Jam, Pickles, Mayonnaise, Canned Foods aur Instant Noodles ke sabhi 23 testing SOPs, unke BIS/FSSAI standard references, statutory limits aur laboratory testing frequency ki ek single comprehensive ready-reckoner master table.</p>
              </div>`,
            reference: "FSSAI Food Safety and Standards (Food Products Standards and Food Additives) Regulations / BIS IS 2860, IS 3882, IS 2168",
            procedure: `<div class="overflow-x-auto my-4">
                <table class="min-w-full text-xs border border-gray-300">
                  <thead class="bg-red-800 text-white font-semibold">
                    <tr>
                      <th class="border border-red-900 p-2 text-left">Test Parameter</th>
                      <th class="border border-red-900 p-2 text-left">Standard Reference</th>
                      <th class="border border-red-900 p-2 text-left">Tomato Ketchup</th>
                      <th class="border border-red-900 p-2 text-left">Fruit Jam / Jelly</th>
                      <th class="border border-red-900 p-2 text-left">Pickles & Chutneys</th>
                      <th class="border border-red-900 p-2 text-left">Canned / RTE Food</th>
                      <th class="border border-red-900 p-2 text-left">Testing Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Total Soluble Solids (°Brix)</td><td class="border p-2">IS 2860 / AOAC 932.12</td><td class="border p-2 font-bold text-red-700">Min 25.0° Brix</td><td class="border p-2 font-bold text-red-700">Min 65.0° Brix</td><td class="border p-2">As declared</td><td class="border p-2">Syrup 14-22° Brix</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Drained Weight %</td><td class="border p-2">IS 2860</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Min 60.0%</td><td class="border p-2 font-bold text-emerald-700">Min 50 - 60%</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">pH Value</td><td class="border p-2">AOAC 981.12</td><td class="border p-2">3.5 - 3.9</td><td class="border p-2">3.0 - 3.5</td><td class="border p-2">< 4.0 (Brine)</td><td class="border p-2">Acid ≤4.6, Low-acid >4.6</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Titratable Acidity %</td><td class="border p-2">IS 2860 / AOAC</td><td class="border p-2">Min 1.0% (acetic)</td><td class="border p-2">0.5 - 1.2% (citric)</td><td class="border p-2">Min 1.2% (acetic)</td><td class="border p-2">Product specific</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Sodium Benzoate Preservative</td><td class="border p-2">HPLC-UV / AOAC</td><td class="border p-2">Max 750 ppm</td><td class="border p-2">Max 200 ppm</td><td class="border p-2">Max 250 ppm</td><td class="border p-2">Not Permitted in Cans</td><td class="border p-2 text-indigo-700 font-semibold">Weekly / Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Commercial Sterility</td><td class="border p-2">IS 2168 (37°C & 55°C)</td><td class="border p-2">N/A (Pasteurized)</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-red-700">Commercially Sterile</td><td class="border p-2 text-indigo-700 font-semibold">Every Retort Lot</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Howard Mold Count (HMC)</td><td class="border p-2">AOAC 965.41 / IS 3882</td><td class="border p-2 font-bold text-red-700">Max 50% pos fields</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Puree Max 45%</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Lycopene Content</td><td class="border p-2">Spectrophotometric 503nm</td><td class="border p-2">Min 10 mg/100g</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Paste Min 25 mg/100g</td><td class="border p-2">Weekly</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Salt (NaCl) Content</td><td class="border p-2">Volhard Titration</td><td class="border p-2">1.5 - 3.0%</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-emerald-700">8.0 - 12.0%</td><td class="border p-2">1.0 - 2.0% (Brine)</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Added Starch Adulteration</td><td class="border p-2">Iodine Color Test</td><td class="border p-2 font-bold text-red-600">Negative (Absent)</td><td class="border p-2">Negative</td><td class="border p-2">Negative</td><td class="border p-2">N/A (Noodles Starch std)</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Total / Invert Sugars</td><td class="border p-2">Lane-Eynon Fehling</td><td class="border p-2">Total 15 - 25%</td><td class="border p-2">Reducing 25 - 35%</td><td class="border p-2">As declared</td><td class="border p-2">Syrup as declared</td><td class="border p-2">Weekly</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Mayonnaise Fat %</td><td class="border p-2">AOAC 935.43</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-amber-700">Min 65.0% (Mayo)</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Instant Noodle Moisture & FFA</td><td class="border p-2">FSSAI Noodle Standard</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Moisture ≤10%, FFA ≤1%</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Tin (Sn) Dissolution</td><td class="border p-2">AAS at 235.5 nm</td><td class="border p-2">N/A (Glass/Pouch)</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-red-700">Max 250 ppm</td><td class="border p-2">Monthly / Shelf Life</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Can Seam Overlap %</td><td class="border p-2">Seam Projector</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Min 55% Overlap</td><td class="border p-2 text-indigo-700 font-semibold">Hourly on Seamer</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Bostwick Consistency</td><td class="border p-2">Bostwick 30s at 20°C</td><td class="border p-2 font-bold text-blue-700">3.0 - 7.0 cm / 30s</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Sauces 4 - 8 cm</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Lead (Pb) Heavy Metal</td><td class="border p-2">ICP-MS / AAS</td><td class="border p-2">Max 1.0 ppm</td><td class="border p-2">Max 1.0 ppm</td><td class="border p-2">Max 1.0 ppm</td><td class="border p-2">Max 1.0 ppm</td><td class="border p-2">Quarterly</td></tr>
                  </tbody>
                </table>
              </div>`
          }
        ]
      };

export const processedPackagedEn = {
        title: "Processed & Packaged Foods (Ketchup, Jam, Pickles, Canned Foods, RTE, Noodles)",
        tests: [
          {
            title: "Determination of Total Soluble Solids (°Brix) by Digital Refractometer",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is this test performed?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Sugar Solids & Yield Verification:</strong> In fruit jams, jellies, tomato ketchup, and table sauces, Total Soluble Solids (°Brix) quantifies the concentration of dissolved sugars, soluble fruit solids, and organic acids.</li>
                  <li><strong>FSSAI Statutory Mandates:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fruit Jam / Jelly / Marmalade:</strong> Minimum <strong>65.0° Brix</strong>.</li>
                      <li><strong>Tomato Ketchup / Sauce:</strong> Minimum <strong>25.0° Brix</strong>.</li>
                      <li><strong>Tomato Puree:</strong> Minimum <strong>9.0° Brix</strong>; <strong>Tomato Paste:</strong> Minimum <strong>24.0° Brix</strong>.</li>
                      <li><strong>Synthetic Syrups & Cordials:</strong> Minimum <strong>65.0° Brix</strong> and <strong>30.0° Brix</strong> respectively.</li>
                    </ul>
                  </li>
                  <li><strong>Microbial Osmotic Stability:</strong> High °Brix (≥65°) reduces water activity (a_w < 0.80), inhibiting pathogenic bacteria and spoilage microorganisms by osmotic plasmolysis.</li>
                </ul>
              </div>
              <div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Deep Science & Operational Principles:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Refractive Index vs °Brix:</strong> Refraction occurs because dissolved solute molecules slow light velocity through the solution. By international ICUMSA convention, 1.0° Brix equals 1.0 g sucrose dissolved in 100 g aqueous solution at 20.0°C.</li>
                  <li><strong>Temperature Dependency:</strong> Refractive index exhibits high temperature sensitivity (~0.07° Brix per °C). Modern digital refractometers employ internal Peltier heating/cooling modules or automated algorithmic ICUMSA temperature correction coefficients.</li>
                  <li><strong>Insoluble Pulp Interference:</strong> In tomato pulp or fruit purees, suspended insoluble fiber particles scatter the critical optical reflection angle, producing blurred shadowlines. Centrifugation (3000 rpm for 5 min) or muslin filtration of serum is mandatory.</li>
                  <li><strong>Acid Correction Factor:</strong> Organic acids (citric, malic, acetic) bend light slightly differently than sucrose. For rigorous official testing, an acid correction of ~0.18° Brix per 1% titratable acidity is applied to the observed reading.</li>
                </ul>
              </div>`,
            reference: "IS 2860:1964 / IS 3882:1966 / AOAC 932.12 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>The instrument measures the critical angle of total internal reflection at the sample-prism boundary. The critical angle is mathematically translated to refractive index (nD) and converted to degrees Brix (°Brix at 20°C) calibrated against primary sucrose standards.</p>

              <h4 class="font-semibold mt-4 mb-2">Apparatus & Reagents:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Digital Benchtop / Abbe Refractometer (precision ±0.01° Brix with Peltier temperature control at 20.0°C ± 0.1°C)</li>
                <li>Analytical Grade Double-Distilled Deionized Water (Refractive Index nD = 1.33300 at 20°C, 0.00° Brix)</li>
                <li>Certified Sucrose Calibration Standards (10.0%, 30.0%, 65.0° Brix)</li>
                <li>Laboratory Benchtop Centrifuge (3000 rpm) & High-Speed Homogenizer</li>
                <li>Double-layered Muslin Cloth & Lens Cleaning Tissue</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li><strong>Prism Cleaning & Zero Verification:</strong> Clean the sapphire prism surface with ethanol, rinse with deionized water, and wipe gently with non-abrasive lens tissue. Apply 2-3 drops of distilled water; calibrate zero (0.00° Brix at 20.0°C).</li>
                <li><strong>Sample Homogenization:</strong>
                  <ul class="list-disc pl-5 mt-1">
                    <li><em>Clear Syrups / Juices:</em> Mix thoroughly and place directly on prism.</li>
                    <li><em>Tomato Ketchup / Puree:</em> Centrifuge 20 g sample at 3000 rpm for 5 minutes or filter through 4-fold muslin cloth to isolate clear serum.</li>
                    <li><em>Jams / Marmalades:</em> Weigh 20 g jam, mix with 20 g warm distilled water (1:1 w/w), stir to dissolve all pectin-sugar lumps, cool to 20°C, and filter serum. Multiply reading by dilution factor 2.0.</li>
                  </ul>
                </li>
                <li><strong>Measurement:</strong> Place 3-4 drops of prepared clear serum onto prism avoiding air bubbles. Allow 30 seconds for thermal equilibration at 20.0°C and record reading in triplicate.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculations & Formula:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Direct Reading (Undiluted):<br>
                Total Soluble Solids (°Brix) = Observed Reading (°Brix at 20°C) + Acid Correction<br><br>
                For 1:1 Diluted Jams:<br>
                Total Soluble Solids (°Brix) = Observed Serum Brix × 2.0<br><br>
                Acid Correction (IS 2860):<br>
                Corrected °Brix = Uncorrected °Brix + (0.18 × Titratable Acidity % as Citric Acid)
              </div>

              <h4 class="font-semibold mt-4 mb-2">Practical Numerical Example:</h4>
              <p>A tomato ketchup sample was tested at 20.0°C:</p>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Centrifuged serum observed reading = <strong>28.40° Brix</strong></li>
                <li>Titratable acidity of ketchup = 1.30% (as acetic acid)</li>
                <li>Since ketchup exceeds the minimum 25.0° Brix statutory threshold, the product complies with FSSAI regulations.</li>
              </ul>`
          },
          {
            title: "Determination of Drained Weight and Fill of Container in Canned & Pickled Foods",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Why is this test performed?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Statutory Consumer Protection:</strong> Verifies that consumers receive the stated quantity of solid food rather than excessive packing liquid (brine, syrup, or oil).</li>
                  <li><strong>Legal Requirements:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Canned Fruits & Vegetables:</strong> Drained weight must be minimum <strong>50.0% to 60.0%</strong> of declared net weight (IS 2860).</li>
                      <li><strong>Pickles in Oil / Brine:</strong> Drained solid contents must be minimum <strong>60.0%</strong> by mass.</li>
                      <li><strong>Canned Mushrooms (Button):</strong> Minimum <strong>50.0%</strong> drained weight.</li>
                      <li><strong>Fill of Container:</strong> Container must be filled to not less than <strong>90.0%</strong> of total water capacity (IS 2860).</li>
                    </ul>
                  </li>
                  <li><strong>Retort Thermal Process Impact:</strong> Adequate headspace (approx 6-10 mm) is mandatory during canning to permit expansion and prevent seam strain or under-processing.</li>
                </ul>
              </div>`,
            reference: "IS 2860:1964 / FSSAI Food Safety and Standards (Packaging & Labelling) Regulations / AOAC 968.30",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>The contents of the container are emptied over a standardized circular test sieve inclined at a specified angle (17° to 20°) for exactly 2 minutes without disturbing the solid particles. The drained solid mass is determined gravimetrically.</p>

              <h4 class="font-semibold mt-4 mb-2">Apparatus:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Standard Circular Sieve (200 mm diameter, IS sieve 2.8 mm / No. 8 mesh for containers < 1.5 kg; 11.2 mm mesh for large fruit pieces)</li>
                <li>Digital Precision Balance (capacity 5 kg, accuracy ±0.1 g)</li>
                <li>Stopwatch / Digital Timer (calibrated in seconds)</li>
                <li>Sieve receiving pan and drainage rack inclined at 17° to 20°</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li><strong>Gross Weight:</strong> Weigh the intact, unopened can or jar (W1).</li>
                <li><strong>Opening & Draining:</strong> Open container completely without spilling liquid. Invert contents evenly onto the pre-weighed standard sieve (Ws). Do not shake or press solid pieces.</li>
                <li><strong>Drainage Period:</strong> Incline sieve at 17° to 20° angle on receiving pan and allow to drain for exactly <strong>2 minutes (120 seconds)</strong>.</li>
                <li><strong>Weighing Solids:</strong> Weigh sieve containing drained solid food product (W2).</li>
                <li><strong>Tare Weight of Can:</strong> Empty the container, wash thoroughly, dry in hot air oven, cool, and weigh dry empty container including lid (Wc).</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculations & Formula:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Net Contents Mass (W_net) = W1 - Wc<br><br>
                Drained Solids Mass (W_drained) = W2 - Ws<br><br>
                Drained Weight % = (W_drained / W_net) × 100
              </div>

              <h4 class="font-semibold mt-4 mb-2">Worked Practical Example:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Unopened canned pineapple gross weight (W1) = 960.0 g</li>
                <li>Cleaned, dried empty tin can tare weight (Wc) = 110.0 g</li>
                <li>Net Contents Weight = 960.0 - 110.0 = <strong>850.0 g</strong></li>
                <li>Empty sieve tare (Ws) = 320.0 g; Sieve + drained pineapple after 2 min (W2) = 805.0 g</li>
                <li>Drained pineapple weight = 805.0 - 320.0 = <strong>485.0 g</strong></li>
                <li>Drained Weight % = (485.0 / 850.0) × 100 = <strong>57.06%</strong></li>
                <li><em>Evaluation:</em> Exceeds the 50.0% statutory threshold; compliant.</li>
              </ul>`
          },
          {
            title: "pH Value and Active Acidity Determination (Clostridium botulinum Safety Barrier at pH 4.6)",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Why is this test critical?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>The pH 4.60 Critical Safety Line:</strong> In food processing science, <strong>pH 4.60</strong> is the definitive regulatory dividing line between Acid/Acidified Foods and Low-Acid Foods (US FDA 21 CFR 114 & FSSAI).</li>
                  <li><strong>Clostridium botulinum Prevention:</strong> Below pH 4.60, spores of <em>Clostridium botulinum</em> are biologically incapable of germination, vegetative outgrowth, or lethal neurotoxin synthesis. Therefore, products with equilibrium pH ≤ 4.60 can be safely pasteurized at atmospheric boiling temperatures (85-95°C).</li>
                  <li><strong>Low-Acid Food Mandate (pH > 4.60):</strong> Products exceeding pH 4.60 must undergo pressurized retort thermal processing (121.1°C, minimum F0 = 3.0 minutes) to eliminate heat-resistant botulinum spores.</li>
                  <li><strong>Sensory & Preservation Standards:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Tomato Ketchup:</strong> pH 3.50 – 3.90.</li>
                      <li><strong>Fruit Jams:</strong> pH 3.00 – 3.30 (critical for pectin gel formation).</li>
                      <li><strong>Pickles in Brine/Oil:</strong> Equilibrium pH < 4.00.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 2860 / AOAC 981.12 / US FDA 21 CFR 114 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Active hydrogen ion concentration ([H+]) is measured potentiometrically using a combination glass electrode and reference calomel/Ag-AgCl electrode system adhering to the Nernstian electromotive response.</p>

              <h4 class="font-semibold mt-4 mb-2">Apparatus & Reagents:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Digital pH Meter (resolution 0.01 pH with Automatic Temperature Compensation ATC)</li>
                <li>Combination pH Glass Electrode with sleeve junction (designed for viscous/particulate food matrices)</li>
                <li>Standard Certified Buffer Solutions (pH 4.01, 7.00, and 10.01 at 25°C)</li>
                <li>High-Speed Laboratory Homogenizer / Blender</li>
                <li>Freshly Boiled and Cooled Carbon Dioxide-Free Deionized Water</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li><strong>Calibration:</strong> Perform 2-point or 3-point calibration using freshly poured standard buffers (pH 4.01 and 7.00). Ensure electrode slope is within 95.0% – 102.0%.</li>
                <li><strong>Sample Preparation:</strong>
                  <ul class="list-disc pl-5 mt-1">
                    <li><em>Liquid / Puree Foods:</em> Measure directly on thoroughly mixed homogeneous sample at 25°C ± 1°C.</li>
                    <li><em>Solid / Particulate Foods (Pickles, Canned Veg):</em> Homogenize 50 g drained sample with 50 g CO2-free distilled water (1:1 w/w) in a high-speed blender until a uniform slurry forms. Equilibrium pH of acidified foods must be measured after complete acid penetration (minimum 24-48 hours post-canning).</li>
                    <li><em>Oily Pickles:</em> Allow phases to separate or centrifuge; insert electrode into aqueous/brine phase.</li>
                  </ul>
                </li>
                <li><strong>Measurement:</strong> Immerse cleaned electrode into sample slurry. Swirl gently, allow reading to stabilize for 60 seconds, and record equilibrium pH.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Interpretation & Acceptance Criteria:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Acidified Food Compliance:</strong> Equilibrium pH must strictly measure <strong>≤ 4.60</strong> (safety target ≤ 4.20 to provide operational buffer).</li>
                <li><strong>Commercial Tomato Ketchup:</strong> Typical specification is <strong>3.60 – 3.85</strong>. A reading > 4.00 indicates insufficient vinegar/acid formulation risking bacterial fermentation.</li>
              </ul>`
          },
          {
            title: "Determination of Titratable Acidity (Total Acidity as Citric / Acetic Acid)",
            purpose: `<div class="bg-purple-50 border border-purple-200 p-3 rounded my-2">
                <p><strong>Why is this test performed?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Taste Profile & Sharpness:</strong> Organic acidity dictates tartness, sugar-to-acid flavor balance, and palatability.</li>
                  <li><strong>FSSAI Legal Standards:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Tomato Ketchup / Sauce:</strong> Minimum <strong>1.0%</strong> acidity calculated as acetic acid.</li>
                      <li><strong>Fruit Jam / Jelly:</strong> <strong>0.5% to 1.2%</strong> calculated as citric acid.</li>
                      <li><strong>Pickles in Vinegar:</strong> Minimum <strong>1.2%</strong> acidity as acetic acid.</li>
                    </ul>
                  </li>
                  <li><strong>Buffering Capacity:</strong> Titratable acidity indicates total reserve acid available to resist spoilage over product shelf life.</li>
                </ul>
              </div>`,
            reference: "IS 2860:1964 / IS 3882 / AOAC 942.15 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>The total concentration of free organic acids in the food matrix is quantified by neutralizing with standardized alkaline solution (0.1 N NaOH) to the phenolphthalein end-point (pH 8.1 - 8.3) or potentiometrically.</p>

              <h4 class="font-semibold mt-4 mb-2">Apparatus & Reagents:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Standardized 0.1 N Sodium Hydroxide (NaOH) Solution (standardized with potassium hydrogen phthalate)</li>
                <li>Phenolphthalein Indicator Solution (1.0% in 95% ethanol)</li>
                <li>Calibrated Digital Burette (50 mL capacity, 0.05 mL graduation)</li>
                <li>Digital pH Meter with combination glass electrode (for colored matrices like tomato ketchup)</li>
                <li>Analytical Balance (±0.001 g) & Volumetric Flasks (100 mL, 250 mL)</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li><strong>Sample Weighing:</strong> Accurately weigh 5.0 to 10.0 g of homogeneous sample into a 250 mL beaker.</li>
                <li><strong>Dissolution:</strong> Add approximately 100 mL of boiling CO2-free distilled water. Heat on water bath for 5 minutes with stirring to release trapped organic acids.</li>
                <li><strong>Filtration:</strong> Cool to 20°C, transfer quantitatively to 250 mL volumetric flask, make up to volume with distilled water, mix, and filter through Whatman No. 4 filter paper.</li>
                <li><strong>Titration:</strong> Pipette 50 mL filtrate into conical flask. Add 3 drops phenolphthalein indicator. Titrate against standardized 0.1 N NaOH until persistent faint pink color appears for 30 seconds.
                <br><em>Note:</em> For tomato ketchup or dark berry jams, perform potentiometric titration using pH meter to exactly <strong>pH 8.10</strong>.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculations & Equivalent Weights:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Titratable Acidity % (w/w) = [V × N × Eq_Factor × Dilution_Factor × 100] / Sample Mass (g)<br><br>
                Where:<br>
                - V = Volume of NaOH consumed (mL)<br>
                - N = Normality of NaOH (typically 0.1000 N)<br>
                - Eq_Factor (meq):<br>
                  • Citric Acid Monohydrate (Jams, Squashes): 0.0700 g/meq (MW 210.14 / 3)<br>
                  • Anhydrous Citric Acid: 0.0640 g/meq (MW 192.12 / 3)<br>
                  • Acetic Acid (Ketchup, Pickles): 0.0600 g/meq (MW 60.05 / 1)<br>
                  • Lactic Acid (Fermented Foods): 0.0900 g/meq (MW 90.08 / 1)
              </div>

              <h4 class="font-semibold mt-4 mb-2">Worked Practical Example:</h4>
              <p>Testing a 10.00 g sample of commercial tomato ketchup:</p>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Sample diluted to 250 mL; 50 mL aliquot titrated (Dilution factor = 250/50 = 5)</li>
                <li>0.100 N NaOH consumed (V) = 4.20 mL</li>
                <li>Acidity % as Acetic Acid = [4.20 × 0.100 × 0.0600 × 5 × 100] / 10.00 = <strong>1.26%</strong></li>
                <li><em>Standard:</em> FSSAI mandates min 1.0% titratable acidity for tomato ketchup. Result is compliant.</li>
              </ul>`
          },
          {
            title: "Preservative Assay: Sodium Benzoate / Benzoic Acid (Spectrophotometry & RP-HPLC-UV)",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Why is this test critical?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Antimicrobial Control:</strong> Sodium benzoate (E211) effectively inhibits yeasts and molds in acidic foods (pH < 4.5) where the undissociated benzoic acid molecule crosses cell membranes.</li>
                  <li><strong>Statutory Safety Limits (FSSAI Regulations):</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Tomato Ketchup / Sauces:</strong> Maximum <strong>750 ppm (mg/kg)</strong>.</li>
                      <li><strong>Fruit Jams / Jellies:</strong> Maximum <strong>200 ppm (mg/kg)</strong>.</li>
                      <li><strong>Pickles & Chutneys:</strong> Maximum <strong>250 ppm (mg/kg)</strong>.</li>
                      <li><strong>Canned Retorted Foods:</strong> Strictly <strong>PROHIBITED (0 ppm)</strong>.</li>
                    </ul>
                  </li>
                  <li><strong>Benzene Health Hazard:</strong> In the presence of ascorbic acid (Vitamin C) and trace metal catalysts, excessive sodium benzoate can undergo decarboxylation to form traces of benzene (a known carcinogen). Strict adherence to dosage is essential.</li>
                </ul>
              </div>`,
            reference: "IS 2860 / AOAC 994.11 / ISO 22855 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Benzoic acid is extracted from the acidified sample matrix and quantified using Reverse-Phase High Performance Liquid Chromatography (RP-HPLC) coupled with a Photodiode Array (PDA) or UV-Visible detector set at 228 nm.</p>

              <h4 class="font-semibold mt-4 mb-2">Reagents & Chromatographic Conditions:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>HPLC Grade Methanol, Acetonitrile, and Glacial Acetic Acid</li>
                <li>Ammonium Acetate Buffer (0.02 M, adjusted to pH 4.5 with acetic acid)</li>
                <li>Certified Reference Standard: Sodium Benzoate (purity ≥ 99.5%)</li>
                <li>Stationary Phase: C18 Reverse-Phase Column (250 mm × 4.6 mm, 5 µm particle size)</li>
                <li>Mobile Phase: Acetonitrile : 0.02 M Ammonium Acetate buffer (20:80 v/v), Flow rate 1.0 mL/min</li>
                <li>Detector: UV absorption at <strong>228 nm</strong>; Column temperature 30°C; Injection volume 10 µL</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Sample Preparation Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Accurately weigh 5.00 g of homogeneous ketchup or sauce into a 100 mL volumetric flask.</li>
                <li>Add 50 mL extraction solvent (Methanol : Water 50:50 v/v), sonicate for 15 minutes to release bound preservatives.</li>
                <li>Add 2 mL Carrez Solution I (Potassium ferrocyanide) and 2 mL Carrez Solution II (Zinc sulfate) to precipitate proteins and colloidal pectin. Shake well.</li>
                <li>Make up to 100 mL mark with mobile phase, mix thoroughly, and centrifuge at 4000 rpm for 10 minutes.</li>
                <li>Filter supernatant through 0.45 µm PTFE syringe membrane filter directly into HPLC autosampler vial.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Quantification & Acceptance:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Benzoic Acid (mg/kg or ppm) = [C_std × A_sample × V_final × D] / [A_std × W_sample]<br><br>
                Sodium Benzoate (ppm) = Benzoic Acid (ppm) × 1.180
              </div>
              <p class="mt-2"><strong>Standard Compliance:</strong> A measured value of 640 ppm in tomato sauce complies with the FSSAI maximum limit of 750 ppm.</p>`
          },
          {
            title: "Preservative Assay: Potassium Sorbate / Sorbic Acid by RP-HPLC-UV",
            purpose: `<div class="bg-green-50 border border-green-200 p-3 rounded my-2">
                <p><strong>Why is this test performed?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Fungistatic Protection:</strong> Potassium sorbate (E202) is a polyunsaturated fatty acid preservative highly effective against molds and yeasts in salad dressings, mayonnaise, bakery fruit fillings, and sauces.</li>
                  <li><strong>FSSAI Maximum Permissible Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Salad Dressings & Mayonnaise:</strong> Maximum <strong>1000 ppm</strong>.</li>
                      <li><strong>Fruit Toppings & Bakery Fillings:</strong> Maximum <strong>1000 ppm</strong>.</li>
                      <li><strong>Fruit Jam / Jelly:</strong> Maximum <strong>500 ppm</strong> (when used alone).</li>
                    </ul>
                  </li>
                  <li><strong>Dual Preservative Rule:</strong> When benzoic acid and sorbic acid are used in combination, the sum of fractions (C1/L1 + C2/L2) must strictly not exceed 1.0 under FSSAI regulations.</li>
                </ul>
              </div>`,
            reference: "ISO 22855 / AOAC 994.11 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Sorbic acid exhibits strong UV conjugated diene absorption at <strong>254 nm</strong>. Following protein deproteinization, sorbate is separated on a C18 RP-HPLC column and quantified against certified potassium sorbate standards.</p>

              <h4 class="font-semibold mt-4 mb-2">Chromatographic Conditions:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Column: Reverse Phase C18 (150 mm × 4.6 mm, 5 µm)</li>
                <li>Mobile Phase: Methanol : 0.05 M Potassium Dihydrogen Phosphate (KH2PO4) buffer pH 4.0 (35:65 v/v)</li>
                <li>Flow Rate: 1.0 mL/min; Detection Wavelength: 254 nm</li>
                <li>Retention time of sorbic acid: ~5.8 minutes (well resolved from benzoic acid at ~4.2 minutes)</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Calculation & Molecular Factor:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Potassium Sorbate (ppm) = Sorbic Acid (ppm) × 1.339<br><br>
                Conversion Factor: MW Potassium Sorbate (150.22) / MW Sorbic Acid (112.13) = 1.339
              </div>`
          },
          {
            title: "Commercial Sterility and Thermal Incubation Test in Canned & Retort Pouches",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is this test mandatory?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Statutory Clearance for Canned Foods:</strong> Every commercial retort batch of canned vegetables, ready-to-eat curries, and soups must be certified commercially sterile before release to market (IS 2168 & FSSAI).</li>
                  <li><strong>Definition of Commercial Sterility:</strong> The complete absence of viable microorganisms capable of growing in the food under normal non-refrigerated conditions of storage and distribution.</li>
                  <li><strong>Detection of Spoilage Organisms:</strong> Identifies under-processing (survival of mesophilic/thermophilic spores) or container integrity failure (post-process leaker contamination).</li>
                </ul>
              </div>`,
            reference: "IS 2168:1971 / US FDA BAM Chapter 21 / FSSAI Microbiological Manual",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Incubation Protocol:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li><strong>Sampling:</strong> Select representative sealed containers from each retort cycle.</li>
                <li><strong>Thermal Incubation:</strong>
                  <ul class="list-disc pl-5 mt-1">
                    <li><em>Mesophilic Incubation:</em> Incubate cans at <strong>37°C ± 1°C for 14 days</strong> (detects mesophiles like <em>Bacillus subtilis</em>, <em>Clostridium sporogenes</em>, leakers).</li>
                    <li><em>Thermophilic Incubation:</em> Incubate cans at <strong>55°C ± 1°C for 10 days</strong> (detects flat-sour spores like <em>Geobacillus stearothermophilus</em>).</li>
                  </ul>
                </li>
                <li><strong>Daily Inspection:</strong> Inspect containers daily for physical swelling defects:
                  <ul class="list-disc pl-5 mt-1">
                    <li><strong>Flipper:</strong> Flat can that pops out when struck.</li>
                    <li><strong>Springer:</strong> One end bulging permanently.</li>
                    <li><strong>Soft Swell:</strong> Both ends bulged but can be depressed with thumbs.</li>
                    <li><strong>Hard Swell:</strong> Both ends rigidly distended by microbial gas (CO2, H2).</li>
                  </ul>
                </li>
                <li><strong>Aseptic Opening & Subculturing:</strong> Disinfect can surface with 70% alcohol and flame. Puncture aseptically under laminar flow. Measure pH and inoculate into Dextrose Tryptone Agar (DTA) and Cooked Meat Medium (CMM).</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Acceptance Standard:</h4>
              <p>Zero gas production, zero swelling, pH change < 0.2 units from unincubated control, and negative microbial growth confirm <strong>Commercial Sterility</strong>.</p>`
          },
          {
            title: "Clostridium botulinum & Spore-Forming Anaerobes Test in Retorted Ready-to-Eat Foods",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Critical Biological Hazard:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><em>Clostridium botulinum</em> produces the most potent biological neurotoxin known to humankind (botulinum neurotoxin types A, B, E, F). A lethal dose for an adult human is less than 1 microgram.</li>
                  <li>In hermetically sealed, low-acid, oxygen-depleted canned foods, surviving spores can germinate and produce toxin without obvious bulging or odor. Zero tolerance is absolute.</li>
                </ul>
              </div>`,
            reference: "US FDA BAM Chapter 17 / FSSAI Microbiological Manual / ISO 7937",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle & Spore Heat-Shock:</h4>
              <p>Samples are heat-shocked at 80°C for 10 minutes to eliminate vegetative flora and activate dormant clostridial spores, followed by anaerobic incubation in enriched media.</p>

              <h4 class="font-semibold mt-4 mb-2">Apparatus & Culture Media:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Anaerobic Workstation / Anaerobic Jar with palladium catalyst and GasPak generator (<0.1% O2)</li>
                <li>Cooked Meat Medium (CMM) pre-reduced and overlaid with sterile mineral oil</li>
                <li>Reinforced Clostridial Medium (RCM) & Trypticase Peptone Glucose Yeast Extract (TPGY) broth</li>
                <li>Real-Time PCR Thermal Cycler for BoNT genes (A, B, E, F)</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Inoculate 1-2 g of food sample into tubes of pre-reduced Cooked Meat Medium.</li>
                <li>Heat-shock tubes in water bath at <strong>80°C for 10 minutes</strong>. Cool immediately in ice water.</li>
                <li>Incubate anaerobically at <strong>35°C for 5 to 7 days</strong>.</li>
                <li>Examine for turbidity, gas formation, and digestion of meat particles. Confirm presence/absence via Multiplex Real-Time PCR targeting neurotoxin gene sequences.</li>
              </ol>`
          },
          {
            title: "Howard Mold Count (HMC) Determination in Tomato Paste, Puree & Ketchup",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Why is this test performed?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Rotten Raw Material Index:</strong> Detects whether decayed, rotten, or mold-infested tomatoes were used in processing.</li>
                  <li><strong>Heat Stability of Mold Hyphae:</strong> While thermal pasteurization and canning kill mold spores and vegetative fungi, the structural fungal hyphae (cell walls composed of chitin and β-1,3-glucan) remain morphologically intact.</li>
                  <li><strong>FSSAI & US FDA Statutory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Tomato Ketchup / Sauces:</strong> Positive fields must not exceed <strong>50%</strong>.</li>
                      <li><strong>Tomato Puree:</strong> Positive fields must not exceed <strong>45%</strong>.</li>
                      <li><strong>Tomato Paste:</strong> Positive fields must not exceed <strong>40%</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "AOAC 965.41 / IS 3882:1966 / US FDA Macroanalytical Manual",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Standardized tomato serum is loaded onto a specialized Howard Mold Counting Chamber. The proportion of microscopic fields containing definitive mold filaments is quantified at 100× magnification.</p>

              <h4 class="font-semibold mt-4 mb-2">Apparatus:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Standard Howard Cell (depth exactly 0.100 mm ± 0.002 mm, with calibrated central viewing plateau)</li>
                <li>Calibrated Howard Cover Glass (thickness 0.5 mm) displaying Newton's rings when seated</li>
                <li>Compound Microscope with 10× eyepiece and 10× objective (calibrated field diameter 1.382 mm, area 1.5 sq mm)</li>
                <li>Standard Dissecting Needle and Pasteur Pipettes</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Standard Dilution & Mounting:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li><strong>Dilution:</strong> Dilute tomato paste or ketchup with distilled water to standard <strong>8.0% to 8.5% total solids</strong> (approx Refractive Index reading 1.3440 to 1.3460 at 20°C). Mix thoroughly without incorporating air bubbles.</li>
                <li><strong>Loading Howard Cell:</strong> Place a drop of diluted pulp on the central plateau of clean Howard cell using a glass rod. Cover immediately with cover glass. Press edges until colored interference bands (<strong>Newton's rings</strong>) appear between cover and rails.</li>
                <li><strong>Microscopic Examination:</strong> Examine at 100× magnification. A field is scored <strong>POSITIVE</strong> if it contains mold filaments whose aggregate length exceeds <strong>one-sixth (1/6)</strong> of the field diameter (approx 0.23 mm), or contains clumps of 3 or more interconnected filaments.</li>
                <li>Examine 25 fields on each of two mounts (minimum <strong>50 fields</strong> total).</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculation:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Howard Mold Count (%) = [Number of Positive Fields / Total Fields Examined] × 100
              </div>
              <p class="mt-2">If 18 fields out of 50 examined are positive: HMC = (18 / 50) × 100 = <strong>36.0%</strong> (Compliant with FSSAI ≤50% limit).</p>`
          },
          {
            title: "Determination of Lycopene Content in Tomato Products by Spectrophotometry",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is Lycopene measured?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Authentic Tomato Pulp Index:</strong> Lycopene is the primary natural carotenoid pigment in ripe red tomatoes. Measuring lycopene verifies genuine tomato pulp content and exposes dilution with pumpkin, papaya, or synthetic red dyes.</li>
                  <li><strong>Standard Benchmark:</strong> High quality tomato paste contains 40 to 70 mg lycopene per 100 g; standard commercial ketchup contains minimum 10 mg/100 g.</li>
                </ul>
              </div>`,
            reference: "AOAC 944.07 / Ranganna S. (Handbook of Analysis) / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Lycopene is extracted using an organic solvent mixture (Hexane : Ethanol : Acetone 2:1:1 v/v) containing BHT antioxidant. Absorbance is measured at <strong>503 nm</strong> where lycopene has its maximum extinction coefficient and beta-carotene absorbance is negligible.</p>

              <h4 class="font-semibold mt-4 mb-2">Apparatus & Reagents:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Double-beam UV-Vis Spectrophotometer with 1 cm matched quartz/glass cuvettes</li>
                <li>Extraction Solvent: Hexane : Ethanol : Acetone (50:25:25 v/v) containing 0.05% BHT</li>
                <li>Deionized Water, Separating Funnels, and Vortex Mixer</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Procedure & Calculation:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Weigh 0.500 g homogeneous sample into 50 mL centrifuge tube.</li>
                <li>Add 5.0 mL of 0.05% BHT in acetone, 5.0 mL 95% ethanol, and 10.0 mL analytical grade hexane.</li>
                <li>Vortex vigorously for 1 minute; allow to stand for 15 minutes in dark.</li>
                <li>Add 3.0 mL deionized water and agitate to induce distinct phase separation. Allow upper hexane layer to clarify.</li>
                <li>Measure absorbance of upper hexane layer at <strong>503 nm</strong> against hexane blank.</li>
              </ol>

              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Lycopene Content (mg/kg) = [A503 × Volume of Hexane (mL) × 1000 × 536.9] / [Sample Mass (g) × 3450 × 100]<br><br>
                Simplified:<br>
                Lycopene (mg/kg) = (A503 × V_hexane × 31.18) / Sample Mass (g)
              </div>`
          },
          {
            title: "Determination of Salt (Sodium Chloride) Content by Volhard's Argentometric Titration",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Why is Volhard's Method preferred over Mohr's Method?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Interference Resistance:</strong> Processed foods like tomato ketchup, pickles, and sauces contain heavy pigments, sugars, and proteins that obscure Mohr's chromate endpoint.</li>
                  <li><strong>Acid Medium Advantage:</strong> Volhard titration operates in strongly acidic nitric acid (HNO3) media, preventing precipitation of interfering carbonates and phosphates.</li>
                  <li><strong>FSSAI Legal Specifications:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Pickles in Brine / Oil:</strong> Salt content typically <strong>8.0% to 12.0%</strong> (preservative osmotic hurdle).</li>
                      <li><strong>Tomato Ketchup / Sauces:</strong> Salt content typically <strong>1.5% to 3.0%</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 2860 / AOAC 937.09 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Chemical Reactions:</h4>
              <p>1. Ag+ (excess) + Cl- → AgCl (white precipitate)<br>
              2. Ag+ (remaining) + SCN- → AgSCN (white precipitate)<br>
              3. Fe3+ + SCN- → [Fe(SCN)]2+ (blood-red ferric thiocyanate complex endpoint)</p>

              <h4 class="font-semibold mt-4 mb-2">Apparatus & Reagents:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Standardized 0.1 N Silver Nitrate (AgNO3) & 0.1 N Potassium/Ammonium Thiocyanate (KSCN)</li>
                <li>Concentrated Nitric Acid (HNO3, free from nitrous fumes)</li>
                <li>Nitrobenzene or 1-Butanol (coagulant to coat AgCl and prevent SCN- displacement)</li>
                <li>Saturated Ferric Ammonium Sulfate Indicator Solution (FeNH4(SO4)2·12H2O)</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Weigh 2.0 to 5.0 g sample into 250 mL conical flask. Add 50 mL distilled water.</li>
                <li>Add 5.0 mL conc. HNO3 and exactly 25.00 mL standardized 0.1 N AgNO3 from a burette.</li>
                <li>Add 5 mL nitrobenzene and shake vigorously for 1 minute until AgCl curdles.</li>
                <li>Add 2 mL ferric indicator. Titrate excess unreacted AgNO3 with 0.1 N KSCN until persistent faint red-brown color persists for 30 seconds.</li>
                <li>Perform blank titration using identical reagents without sample.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                NaCl % = [(V_blank - V_sample) × N_KSCN × 0.05844 × 100] / Sample Mass (g)<br><br>
                Where 0.05844 g = 1 meq of NaCl (MW 58.44)
              </div>`
          },
          {
            title: "Adulteration Check: Added Starch and Synthetic Gums in Tomato Ketchup",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Regulatory Adulteration Prohibition:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>FSSAI Mandate:</strong> Standard Tomato Ketchup must be prepared exclusively from genuine tomato juice/paste and must be <strong>FREE FROM ADDED STARCH</strong> (IS 3882). Unscrupulous manufacturers add cheap cereal, potato, or modified starch to artificially boost consistency.</li>
                  <li><strong>Sensory Impact:</strong> Added starch causes pasty mouthfeel, retrogradation (gelation upon chilling), and serum separation.</li>
                </ul>
              </div>`,
            reference: "IS 3882:1966 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Chemical Principle:</h4>
              <p>Amylose in added starch reacts with triiodide ions (I3-) forming an intensely colored blue-black inclusion complex. Natural ripe tomato solids contain negligible starch as enzymes convert starch to sugars during ripening.</p>

              <h4 class="font-semibold mt-4 mb-2">Procedure & Microscopic Confirmation:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Weigh 5 g of ketchup in a test tube, add 20 mL distilled water, and boil for 2 minutes to gelatinize starch granules.</li>
                <li>Cool completely to room temperature (20-25°C).</li>
                <li>Add 2-3 drops of 0.1 N Lugol's Iodine solution (I2/KI).</li>
                <li><strong>Observation:</strong>
                  <ul class="list-disc pl-5 mt-1">
                    <li><em>Pure Ketchup:</em> Yellowish-brown color of reagent (Negative).</li>
                    <li><em>Adulterated with Starch:</em> Instant appearance of deep blue to purple-blue color (Positive).</li>
                  </ul>
                </li>
                <li><strong>Microscopy:</strong> Mount drop under polarizing microscope. Birefringent Maltese cross patterns confirm cereal or tuber starch adulteration.</li>
              </ol>`
          },
          {
            title: "Determination of Reducing Sugars and Total Sugars by Lane & Eynon Method",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Why is Sugar Profiling critical?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Invert Sugar Ratio:</strong> In fruit jams, reducing sugars (invert sugar: glucose + fructose) must be <strong>25.0% to 35.0%</strong>. If reducing sugars are < 25%, sucrose crystallizes during storage; if > 40%, dextrose granulation occurs.</li>
                  <li><strong>Total Sugar Verification:</strong> Validates declared nutritional sugar values and total soluble solid formulation.</li>
                </ul>
              </div>`,
            reference: "IS 2860 / AOAC 923.09 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Reducing sugars reduce copper(II) tartrate complex in boiling alkaline Fehling's solution to red cuprous oxide (Cu2O) precipitate. Non-reducing sucrose is inverted by hot acid hydrolysis and titrated to determine total sugars.</p>

              <h4 class="font-semibold mt-4 mb-2">Reagents:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Fehling's Solution A (CuSO4·5H2O, 69.28 g/L) & Solution B (Sodium potassium tartrate 346 g + NaOH 100 g/L)</li>
                <li>Standard Invert Sugar Solution (standardized against Fehling's mix, Factor ~0.050 g)</li>
                <li>Methylene Blue Indicator (0.2% aqueous) & Hydrochloric Acid (6.34 N HCl)</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li><strong>Clarification:</strong> Clarify 10 g sample with Neutral Lead Acetate and Potassium Oxalate. Make up to 250 mL and filter.</li>
                <li><strong>Initial Reducing Sugars:</strong> Titrate 5 mL Fehling A + 5 mL Fehling B boiling with clarified solution using methylene blue indicator to brick-red cuprous oxide endpoint.</li>
                <li><strong>Inversion for Total Sugars:</strong> Pipette 50 mL clarified solution, add 5 mL conc. HCl, heat in water bath at 68-70°C for 10 minutes. Cool, neutralize with NaOH, dilute to 100 mL, and titrate.</li>
              </ol>

              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Reducing Sugars % = [Fehling Factor × Dilution × 100] / [Titre (mL) × Sample Mass (g)]<br><br>
                Sucrose % = (Total Invert Sugars % - Initial Reducing Sugars %) × 0.95
              </div>`
          },
          {
            title: "Determination of Pectin Content and Jelly Grade (Calcium Pectate Gravimetric Method)",
            purpose: `<div class="bg-indigo-50 border border-indigo-200 p-3 rounded my-2">
                <p><strong>Why is Pectin analyzed?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Gelling Capacity:</strong> Pectin (polygalacturonic acid) forms the structural three-dimensional gel network in jams, jellies, and marmalades.</li>
                  <li><strong>Jelly Grade:</strong> The number of parts of sucrose that 1 part of pectin will turn into a standard commercial jelly (65° Brix, pH 3.2). Commercial grade standard is 100 to 150 grade pectin.</li>
                </ul>
              </div>`,
            reference: "AOAC 924.09 / IS 2860 / Carré-Haynes Method",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Pectin is extracted with hot dilute acid, saponified with dilute sodium hydroxide to sodium pectate, and precipitated quantitatively with calcium chloride as insoluble calcium pectate gel.</p>

              <h4 class="font-semibold mt-4 mb-2">Procedure & Calculation:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Boil 25 g sample with 200 mL water and 5 mL dilute HCl for 30 minutes. Filter and make up to 500 mL.</li>
                <li>Take 100 mL aliquot, add 100 mL 0.1 N NaOH, and allow to stand overnight (16 hours) for complete de-esterification.</li>
                <li>Add 50 mL 1.0 N acetic acid and 25 mL 10% Calcium Chloride (CaCl2) solution. Allow calcium pectate gel to coagulate for 1 hour.</li>
                <li>Boil for 2 minutes, filter through pre-weighed Whatman No. 41 filter paper, wash with hot water until chloride-free (AgNO3 test), and dry at 100°C to constant weight.</li>
              </ol>

              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Pectin as Calcium Pectate % = [Mass of Dried Calcium Pectate (g) / Aliquot Sample Mass (g)] × 100
              </div>`
          },
          {
            title: "Total Fat Content and Emulsion Stability Test in Mayonnaise & Salad Dressings",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Regulatory & Quality Standards:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>FSSAI & US FDA Standards of Identity:</strong> Real Mayonnaise must contain minimum <strong>65.0% vegetable oil</strong> by weight; Salad Dressing must contain minimum <strong>30.0% vegetable oil</strong>.</li>
                  <li><strong>Emulsion Stability:</strong> Tests the resistance of oil-in-water (O/W) emulsion stabilized by egg yolk lecithin against coalescence and oil bleeding under thermal and centrifugal stress.</li>
                </ul>
              </div>`,
            reference: "AOAC 935.43 / US FDA 21 CFR 169.140 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Direct solvent extraction fails because oil droplets are encapsulated in egg yolk lipoproteins. Acid digestion with 8 M HCl hydrolyzes proteinaceous emulsifying membranes, liberating all bound lipids for extraction with diethyl ether and petroleum ether.</p>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Weigh 2.0 g mayonnaise into Mojonnier extraction flask. Add 5 mL 8 M HCl.</li>
                <li>Heat in water bath at 70°C for 20 minutes with frequent swirling until emulsion breaks.</li>
                <li>Cool to room temperature. Add 10 mL 95% ethanol, 25 mL diethyl ether, shake vigorously for 1 minute. Add 25 mL petroleum ether, shake 1 minute.</li>
                <li>Allow phases to separate. Decant ether layer into pre-weighed dry beaker. Repeat extraction twice.</li>
                <li>Evaporate solvent on steam bath, dry flask in 102°C oven for 1 hour, cool, and weigh extracted oil.</li>
              </ol>

              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Total Fat % = [Mass of Extracted Lipid (g) / Sample Mass (g)] × 100
              </div>`
          },
          {
            title: "Determination of Moisture Content and Extracted Fat FFA in Instant Noodles & Pasta",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Why is this test critical?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Deep-Fried Noodle Quality:</strong> Fried instant noodles absorb 15% to 22% palm oil during flash frying. Excess moisture causes rapid hydrolytic rancidity and soggy texture.</li>
                  <li><strong>FSSAI Statutory Limits for Instant Noodles:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Moisture Content:</strong> Maximum <strong>10.0%</strong> (fried noodles typically 2.0% - 4.5%).</li>
                      <li><strong>Free Fatty Acids (FFA) of Extracted Fat:</strong> Maximum <strong>1.0%</strong> as oleic acid.</li>
                      <li><strong>Acid Value of Extracted Fat:</strong> Maximum <strong>2.0 mg KOH/g</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "FSSAI Standards for Instant Noodles / IS 14842 / AOAC 940.28",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Moisture Determination:</h4>
              <p>Dry 5 g ground noodles at 105°C ± 1°C in hot air oven for 4 hours to constant weight.</p>

              <h4 class="font-semibold mt-4 mb-2">Fat Extraction & FFA Titration:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Grind 50 g noodle cake, extract lipid using cold petroleum ether in an extraction jar or Soxhlet apparatus.</li>
                <li>Filter solvent through anhydrous Na2SO4, evaporate solvent at < 50°C under rotary vacuum or nitrogen purge.</li>
                <li>Weigh 5.0 g extracted clear oil into conical flask, add 50 mL neutralized warm ethanol (95%).</li>
                <li>Add 3 drops phenolphthalein indicator and titrate against standardized 0.1 N KOH to persistent faint pink endpoint.</li>
              </ol>

              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Free Fatty Acids (FFA % as Oleic Acid) = [V_KOH × N_KOH × 28.2] / Fat Sample Mass (g)<br><br>
                Acid Value (mg KOH/g) = [V_KOH × N_KOH × 56.11] / Fat Sample Mass (g)
              </div>`
          },
          {
            title: "Determination of Total Ash and Acid Insoluble Ash (Sand & Silica) in Pickles & Chutneys",
            purpose: `<div class="bg-gray-50 border border-gray-200 p-3 rounded my-2">
                <p><strong>Detection of Dirt, Sand, and Earthy Impurities:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Acid Insoluble Ash (AIA):</strong> Measures insoluble siliceous matter (sand, soil, grit, clay) originating from improper washing of raw fruits/vegetables or adulteration.</li>
                  <li><strong>FSSAI Legal Limit:</strong> Acid Insoluble Ash must not exceed <strong>0.3% to 0.5%</strong> in processed vegetable products and pickles.</li>
                </ul>
              </div>`,
            reference: "IS 2860 / IS 3565 / AOAC 941.12 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Weigh 5.0 g sample in a pre-ignited, tared platinum or silica dish. Char over Bunsen flame until smoking ceases.</li>
                <li>Ash in muffle furnace at <strong>550°C ± 25°C</strong> for 4 hours until carbon-free white/grey ash is obtained. Cool in desiccator and weigh for <strong>Total Ash</strong>.</li>
                <li>Add 25 mL dilute hydrochloric acid (10% v/v) to the ash in the crucible. Cover with watch glass and boil gently for 10 minutes.</li>
                <li>Filter through ashless Whatman No. 41 filter paper. Wash residue with hot distilled water until filtrate is chloride-free (tested with AgNO3).</li>
                <li>Place filter paper and residue back into crucible, dry, and incinerate in muffle furnace at <strong>800°C</strong> for 1 hour. Cool and weigh.</li>
              </ol>

              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Acid Insoluble Ash (AIA %) = [Mass of Ignited Insoluble Residue (g) / Sample Mass (g)] × 100
              </div>`
          },
          {
            title: "Screening of Synthetic Food Colors and Non-Permitted Dyes (Sudan Dyes & Metanil Yellow)",
            purpose: `<div class="bg-rose-50 border border-rose-200 p-3 rounded my-2">
                <p><strong>Toxicology & Adulteration Screening:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Prohibited Carcinogenic Dyes:</strong> Industrial azo dyes like <strong>Sudan I, II, III, IV, Para Red, Rhodamine B, and Metanil Yellow</strong> are strictly banned due to genotoxicity and carcinogenicity. They are illegally added to mimic rich red chili/tomato pulp color.</li>
                  <li><strong>Permitted Colors Regulation:</strong> Under FSSAI, permitted synthetic colors (Tartrazine, Sunset Yellow, Ponceau 4R, Carmoisine) must not exceed <strong>100 ppm</strong> and are prohibited in standard tomato ketchup.</li>
                </ul>
              </div>`,
            reference: "FSSAI Manual 03 / AOAC 995.11 / ISO 21870",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Screening Principle:</h4>
              <p>Synthetic water-soluble dyes are isolated by wool dyeing or solid phase extraction (SPE) and identified by Thin Layer Chromatography (TLC). Lipid-soluble Sudan dyes are extracted with acetonitrile and analyzed by RP-HPLC-DAD / LC-MS/MS.</p>

              <h4 class="font-semibold mt-4 mb-2">TLC Identification:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Adsorbent: Silica Gel G60 TLC plate (20 × 20 cm)</li>
                <li>Mobile Phase: n-Butanol : Glacial Acetic Acid : Water (4:1:5 v/v, upper phase)</li>
                <li>Compare Rf values against certified reference standards (Tartrazine, Sunset Yellow, Ponceau 4R, Metanil Yellow).</li>
              </ul>`
          },
          {
            title: "Heavy Metals Contamination: Tin (Sn), Lead (Pb), and Arsenic (As) in Canned Foods (ICP-MS / AAS)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is Heavy Metal Analysis critical?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Tin (Sn) Dissolution in Cans:</strong> In plain tinplate cans, acidic food acids (citric, malic) and nitrates dissolve tin from the can lining into the food product. Excess tin causes acute gastrointestinal irritation.</li>
                  <li><strong>FSSAI Maximum Residual Limits (MRL):</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Tin (Sn) in Canned Food:</strong> Maximum <strong>250 mg/kg (ppm)</strong>.</li>
                      <li><strong>Lead (Pb):</strong> Maximum <strong>1.0 mg/kg (ppm)</strong>.</li>
                      <li><strong>Arsenic (As):</strong> Maximum <strong>0.1 mg/kg (ppm)</strong>.</li>
                      <li><strong>Cadmium (Cd):</strong> Maximum <strong>0.1 mg/kg (ppm)</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 2860 / AOAC 985.16 / ISO 17294 / FSSAI Contaminants Regulations",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Microwave Acid Digestion:</h4>
              <p>Digest 0.500 g homogenized sample with 6 mL ultra-pure concentrated HNO3 and 2 mL 30% H2O2 in closed PTFE microwave digestion vessels at 180°C for 25 minutes until transparent.</p>

              <h4 class="font-semibold mt-4 mb-2">Measurement:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Tin (Sn):</strong> Atomic Absorption Spectrometer (AAS) with nitrous oxide-acetylene reducing flame at <strong>235.5 nm</strong> or ICP-MS (m/z 118, 120).</li>
                <li><strong>Lead (Pb) & Arsenic (As):</strong> Graphite Furnace AAS (GFAAS) or ICP-MS using multi-element internal standard calibration.</li>
              </ul>`
          },
          {
            title: "Can Seam Seal Integrity and Vacuum Inspection (Double Seam Micrometer Examination)",
            purpose: `<div class="bg-cyan-50 border border-cyan-200 p-3 rounded my-2">
                <p><strong>Primary Cause of Canned Food Spoilage Outbreaks:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Over 90% of microbial spoilage in canned food results from mechanical seam defects allowing cooling water micro-leakage (post-process leaker contamination).</li>
                  <li>A proper hermetic double seam mechanically interlocks the can body hook and end cover hook with sealant compound.</li>
                  <li><strong>Mandatory Seam Criteria:</strong> Overlap % must be minimum <strong>55% (preferably ≥ 60%)</strong>, and tightness rating ≥ 80%.</li>
                </ul>
              </div>`,
            reference: "US FDA BAM Chapter 22 / Can Manufacturers Institute (CMI) Double Seam Manual",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Key Seam Dimensions:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Seam Thickness (ST), Seam Length/Width (SL), Countersink Depth (CS)</li>
                <li>Body Hook Length (BH), Cover Hook Length (CH)</li>
                <li>Body Plate Thickness (BPT), End Plate Thickness (EPT)</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Procedure & Calculation:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Measure internal can vacuum using a calibrated puncture vacuum gauge.</li>
                <li>Perform visual inspection for external seam defects (Cutover, Droop, Vee, Fractured seam, False seam).</li>
                <li>Section seam using twin-blade seam saw; project image onto calibrated Seam Projector / Optical Comparator.</li>
                <li>Strip double seam mechanically to examine Cover Hook Wrinkle (Tightness rating: 0 to 20% looseness = compliant).</li>
              </ol>

              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Theoretical Overlap (OL) = BH + CH + EPT - SL<br><br>
                Overlap % = [ (BH + CH + EPT - SL) / (SL - (2 × EPT + BPT)) ] × 100
              </div>`
          },
          {
            title: "Consistency and Flow Rheology by Bostwick Consistometer (Tomato Ketchup & Sauces)",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Why is Bostwick Consistency standardized?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Grade & Texture Verification:</strong> Ketchup is a non-Newtonian pseudoplastic fluid exhibiting yield stress. Correct consistency prevents watery serum separation and ensures desirable plate clinging.</li>
                  <li><strong>USDA & Industry Standards for Tomato Ketchup:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Grade A Ketchup:</strong> Bostwick flow distance <strong>3.0 to 7.0 cm in 30 seconds at 20.0°C</strong>.</li>
                      <li><strong>Grade B Ketchup:</strong> Bostwick flow distance <strong>7.1 to 10.0 cm in 30 seconds</strong>.</li>
                      <li>Excess flow (>10 cm) indicates watery dilution; insufficient flow (<3 cm) indicates over-thickening or scorching.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "USDA Standards for Grades of Tomato Ketchup / ASTM F1080 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Apparatus & Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li><strong>Equipment:</strong> Standard Bostwick Consistometer (trough length 24 cm with 0.5 cm graduations, spring-loaded gate) and digital stopwatch.</li>
                <li><strong>Temperature Equilibration:</strong> Sample temperature MUST be equilibrated precisely to <strong>20.0°C ± 0.5°C</strong> (viscosity changes ~2% per °C).</li>
                <li><strong>Leveling:</strong> Level the consistometer using the leveling screws and circular spirit bubble.</li>
                <li><strong>Filling:</strong> Close gate and lock in position. Fill sample reservoir completely with 100 mL ketchup. Scrape excess flush with top using a straight spatula.</li>
                <li><strong>Release & Timing:</strong> Depress trigger to instantly snap gate open and simultaneously start stopwatch.</li>
                <li><strong>Reading:</strong> Record the maximum distance traveled along the trough bottom at exactly <strong>30.0 seconds</strong>.</li>
              </ol>`
          },
          {
            title: "Total Plate Count (TPC) and Coliforms Enumeration in Ready-to-Eat Sauces & Foods",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Sanitation & Hygiene Indicators:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Quantifies overall microbial load and post-thermal hygiene compliance in pasteurized packaged foods.</li>
                  <li><strong>FSSAI Microbiological Standards:</strong> Ready-to-eat sauces and gravies: TPC maximum 10,000 CFU/g; Coliforms < 10 CFU/g; <em>E. coli</em> Absent in 25 g.</li>
                </ul>
              </div>`,
            reference: "IS 5402:2012 / IS 5401:2002 / ISO 4833",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Aseptically homogenize 25 g sample with 225 mL 0.1% Buffered Peptone Water (10^-1 dilution).</li>
                <li>Prepare serial decimal dilutions up to 10^-4.</li>
                <li><strong>TPC:</strong> Pour plate 1 mL aliquot with Plate Count Agar (PCA). Incubate at <strong>30°C / 37°C for 48 ± 2 hours</strong>.</li>
                <li><strong>Coliforms:</strong> Pour plate with Violet Red Bile Agar (VRBA) overlaid with thin layer of VRBA. Incubate at <strong>37°C for 24 hours</strong>. Count dark red/purple colonies with bile precipitation rings.</li>
              </ol>`
          },
          {
            title: "Yeast & Mold Enumeration in High-Acid Processed Foods (DRBC / PDA Method)",
            purpose: `<div class="bg-purple-50 border border-purple-200 p-3 rounded my-2">
                <p><strong>Target Spoilage Flora in Acid Environments:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>In high-acid foods (pH 3.0 to 4.2) and high-sugar spreads (65° Brix), bacteria are inhibited, but osmophilic/xerophilic yeasts (<em>Zygosaccharomyces bailii</em>) and heat-resistant molds (<em>Byssochlamys fulva</em>, <em>Neosartorya fischeri</em>) can proliferate, generating CO2 gas, off-odors, and visual mold colonies.</li>
                  <li><strong>FSSAI Microbiological Limit:</strong> Yeast & Mold count must not exceed <strong>100 CFU/g</strong> in pasteurized fruit/vegetable products.</li>
                </ul>
              </div>`,
            reference: "IS 5403 / ISO 21527-1 / FSSAI Microbiological Standards",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Culture Media & Incubation:</h4>
              <p>Dichloran Rose Bengal Chloramphenicol (DRBC) agar or Acidified Potato Dextrose Agar (PDA, acidified with 10% sterile tartaric acid to pH 3.5 ± 0.1). Chloramphenicol (100 mg/L) suppresses all bacterial growth.</p>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Spread-plate 0.1 mL of serial dilutions onto pre-poured DRBC agar plates.</li>
                <li>Incubate plates upright at <strong>25°C ± 1°C for 5 days</strong> in the dark without moving.</li>
                <li>Count yeast colonies (smooth, glistening, rounded) and mold colonies (cottony, spreading, velvety) on plates containing 10 to 150 colonies.</li>
              </ol>`
          },
          {
            title: "Processed & Packaged Foods Complete Quality & Statutory Testing Battery Summary",
            purpose: `<div class="bg-gray-100 border border-gray-300 p-3 rounded my-2">
                <p><strong>Master Reference Matrix for Laboratory QA/QC & Regulatory Audits:</strong></p>
                <p class="text-sm text-gray-700 mt-1">This master reference matrix provides standard statutory limits, FSSAI / BIS references, and testing frequencies for key processed and packaged food categories.</p>
              </div>`,
            reference: "FSSAI Food Safety and Standards (Food Products Standards and Food Additives) Regulations / BIS IS 2860, IS 3882, IS 2168",
            procedure: `<div class="overflow-x-auto my-4">
                <table class="min-w-full text-xs border border-gray-300">
                  <thead class="bg-red-800 text-white font-semibold">
                    <tr>
                      <th class="border border-red-900 p-2 text-left">Test Parameter</th>
                      <th class="border border-red-900 p-2 text-left">Standard Reference</th>
                      <th class="border border-red-900 p-2 text-left">Tomato Ketchup</th>
                      <th class="border border-red-900 p-2 text-left">Fruit Jam / Jelly</th>
                      <th class="border border-red-900 p-2 text-left">Pickles & Chutneys</th>
                      <th class="border border-red-900 p-2 text-left">Canned / RTE Food</th>
                      <th class="border border-red-900 p-2 text-left">Testing Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Total Soluble Solids (°Brix)</td><td class="border p-2">IS 2860 / AOAC 932.12</td><td class="border p-2 font-bold text-red-700">Min 25.0° Brix</td><td class="border p-2 font-bold text-red-700">Min 65.0° Brix</td><td class="border p-2">As declared</td><td class="border p-2">Syrup 14-22° Brix</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Drained Weight %</td><td class="border p-2">IS 2860 / AOAC 968.30</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-emerald-700">Min 60.0%</td><td class="border p-2 font-bold text-emerald-700">Min 50.0 - 60.0%</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">pH Value (Botulinum Barrier)</td><td class="border p-2">AOAC 981.12 / 21 CFR 114</td><td class="border p-2">3.50 - 3.90</td><td class="border p-2">3.00 - 3.30</td><td class="border p-2">< 4.00 (Brine)</td><td class="border p-2">Acid ≤4.60, Low-acid >4.60</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Titratable Acidity %</td><td class="border p-2">IS 2860 / AOAC 942.15</td><td class="border p-2">Min 1.0% (acetic)</td><td class="border p-2">0.5 - 1.2% (citric)</td><td class="border p-2">Min 1.2% (acetic)</td><td class="border p-2">Product specific</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Sodium Benzoate Preservative</td><td class="border p-2">RP-HPLC / ISO 22855</td><td class="border p-2">Max 750 ppm</td><td class="border p-2">Max 200 ppm</td><td class="border p-2">Max 250 ppm</td><td class="border p-2 font-bold text-red-700">Strictly Prohibited</td><td class="border p-2 text-indigo-700 font-semibold">Weekly / Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Commercial Sterility</td><td class="border p-2">IS 2168 (37°C & 55°C)</td><td class="border p-2">N/A (Pasteurized)</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-red-700">Commercially Sterile</td><td class="border p-2 text-indigo-700 font-semibold">Every Retort Lot</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Howard Mold Count (HMC)</td><td class="border p-2">AOAC 965.41 / IS 3882</td><td class="border p-2 font-bold text-red-700">Max 50% pos fields</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Puree Max 45%</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Lycopene Content</td><td class="border p-2">Spectrophotometric 503nm</td><td class="border p-2">Min 10 mg/100g</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Paste Min 25 mg/100g</td><td class="border p-2">Weekly</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Salt (NaCl) Content</td><td class="border p-2">Volhard Titration</td><td class="border p-2">1.5 - 3.0%</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-emerald-700">8.0 - 12.0%</td><td class="border p-2">1.0 - 2.0% (Brine)</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Added Starch Adulteration</td><td class="border p-2">Iodine Color Reaction</td><td class="border p-2 font-bold text-red-600">Negative (Absent)</td><td class="border p-2">Negative</td><td class="border p-2">Negative</td><td class="border p-2">N/A</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Sugar Profile (Lane-Eynon)</td><td class="border p-2">IS 2860 / AOAC 923.09</td><td class="border p-2">Total 15 - 25%</td><td class="border p-2">Invert 25 - 35%</td><td class="border p-2">As declared</td><td class="border p-2">Syrup as declared</td><td class="border p-2">Weekly</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Mayonnaise Fat %</td><td class="border p-2">AOAC 935.43</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-amber-700">Min 65.0% (Mayo)</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Instant Noodle Moisture & FFA</td><td class="border p-2">FSSAI Standards</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Moisture ≤10%, FFA ≤1%</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Tin (Sn) Dissolution</td><td class="border p-2">AAS at 235.5 nm / ICP-MS</td><td class="border p-2">N/A (Pouch/Bottle)</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-red-700">Max 250 ppm</td><td class="border p-2">Monthly / Shelf Life</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Can Seam Overlap %</td><td class="border p-2">Double Seam Examination</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Min 55% Overlap</td><td class="border p-2 text-indigo-700 font-semibold">Hourly on Seamer</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Bostwick Consistency</td><td class="border p-2">Bostwick 30s at 20°C</td><td class="border p-2 font-bold text-blue-700">3.0 - 7.0 cm / 30s</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">Sauces 4.0 - 8.0 cm</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Lead (Pb) Heavy Metal</td><td class="border p-2">ICP-MS / GFAAS</td><td class="border p-2">Max 1.0 ppm</td><td class="border p-2">Max 1.0 ppm</td><td class="border p-2">Max 1.0 ppm</td><td class="border p-2">Max 1.0 ppm</td><td class="border p-2">Quarterly</td></tr>
                  </tbody>
                </table>
              </div>`
          }
        ]
      };
