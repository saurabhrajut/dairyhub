/**
 * Compositional Analysis: Meat, Poultry, Fish, Seafood & Eggs
 * Independent product module for easy future updates and extensions.
 */

export const meatPoultryHi = {
        title: "मांस, पोल्ट्री, मछली और अंडा उत्पाद (Meat, Poultry, Fish, Seafood, Sausages, Canned Meat & Eggs)",
        tests: [
          {
            title: "Total Volatile Basic Nitrogen (TVB-N) ka Determination (Meat aur Fish Spoilage)",
            purpose: `<div class="bg-rose-50 border border-rose-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Bacterial Spoilage & Protein Breakdown Index:</strong> Meat (mutton, chicken, beef) aur fish ke store hone par spoilage bacteria (Pseudomonas, Shewanella putrefaciens) endogenous proteases ke sath milkar muscle protein ko todte hain. Isse volatile basic nitrogenous compounds—Ammonia (NH3), Dimethylamine (DMA), aur Trimethylamine (TMA) bante hain.</li>
                  <li><strong>FSSAI aur European Commission (EC 2074/2005) Statutory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fresh Dressed Chicken / Mutton:</strong> Max <strong>20.0 mg N / 100g</strong> (Strictly Fresh); 20–30 mg/100g (Acceptable); > 30 mg/100g (Decomposed / Condemned).</li>
                      <li><strong>Fresh White Fish (Cod, Haddock, Rohu, Katla):</strong> Max <strong>25.0 to 30.0 mg N / 100g</strong>.</li>
                      <li><strong>Pelagic Fatty Fish (Mackerel, Sardine, Tuna):</strong> Max <strong>35.0 mg N / 100g</strong>.</li>
                    </ul>
                  </li>
                  <li><strong>Consumer Safety:</strong> High TVB-N wala meat khane se severe food poisoning, nausea, vomiting aur histamine toxicity ka risk hota hai.</li>
                </ul>
              </div>`,
            reference: "ISO 937 / EC Regulation 2074/2005 / IS 5960 / FSSAI Meat Manual 05",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>10.0g homogenized meat sample ko 90 mL 6% Perchloric acid (HClO4) ya 7.5% Trichloroacetic acid (TCA) ke sath homogenize karke proteins ko precipitate kiya jaata hai. Filtered deproteinized acid extract ko Kjeldahl distillation unit mein Magnesium Oxide (MgO) suspension ke sath mildly alkalize kiya jaata hai (pH 9.5). Liberated volatile basic nitrogen (NH3, DMA, TMA) steam ke sath distill hokar 25 mL 3% Boric acid solution (Tashiro indicator) mein collect hota hai. 0.01 N standardized H2SO4 ya HCl se titrate karke TVB-N quantify kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                TVB-N (mg N / 100g meat) = [ (V_sample - V_blank) × Normality_acid × 14.007 × Dilution Factor × 100 ] / W_sample
              </div>
              <p class="mt-2">10.0g fresh chicken breast extract: Titrant consumed = 8.20 mL 0.0102 N H2SO4 (Blank = 0.35 mL). Net = 7.85 mL. TVB-N = [ 7.85 × 0.0102 × 14.007 × 10 × 100 ] / 10.0 = 11.22 mg N/100g. Freshness grade: Completely FRESH (FSSAI limit ≤ 20.0 mg/100g).</p>`
          },
          {
            title: "Trimethylamine Nitrogen (TMA-N) ka Determination (Marine Fish & Seafood mein Dyer Picrate Method)",
            purpose: `<div class="bg-cyan-50 border border-cyan-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Marine Fish Spoilage Specificity:</strong> Marine fish aur cephalopods (squid, octopus) mein Trimethylamine Oxide (TMAO) osmoregulation ke liye natural osmolyte hota hai. Post-mortem storage par psychrotrophic bacteria (Shewanella putrefaciens, Photobacterium phosphoreum) TMAO reductase enzyme se TMAO ko pungent-smelling Trimethylamine (TMA) mein reduce karte hain.</li>
                  <li><strong>'Fishy' Stale Odor Index:</strong> TMA hi wo chemical compound hai jo baasi machhli ki badboodar fishy odor ke liye 90% responsible hota hai. Fresh fish mein TMA zero hota hai.</li>
                  <li><strong>Statutory & Regulatory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Prime Quality Fresh Fish:</strong> TMA-N < <strong>1.5 mg N / 100g</strong>.</li>
                      <li><strong>Acceptable Freshness:</strong> TMA-N 1.5 to <strong>5.0 mg N / 100g</strong>.</li>
                      <li><strong>Spoiled / Condemned Fish:</strong> TMA-N > <strong>10.0 to 15.0 mg N / 100g</strong> (Trade embargo & unfit for consumption).</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "AOAC 971.14 / Dyer Picrate Colorimetric Method / FSSAI Fish Manual 06",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>TCA deproteinized fish extract ko formaldehyde ke sath treat kiya jaata hai jo interfering primary (ammonia) aur secondary amines ko bind kar leta hai. Alkali (50% K2CO3) add karke tertiary amine (TMA) ko release karke toluene phase mein extract kiya jaata hai. Toluene layer ko anhydrous picric acid ke sath react karwaya jaata hai jisse brilliant yellow Trimethylamine Picrate salt banta hai. Iski optical density 410 nm par spectrophotometer mein measure ki jaati hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                TMA-N (mg N / 100g fish) = [ (Absorbance at 410 nm × Calibration Slope mg N) / W_sample in g ] × 100
              </div>
              <p class="mt-2">Ice-stored Pomfret sample ka 410 nm par Absorbance = 0.185 (Standard curve slope factor = 0.0125 mg N / AU). Sample mass = 10.0g. TMA-N = [ (0.185 × 0.0125) / 10.0 ] × 100 = 2.31 mg N/100g. Freshness Grade: Acceptable for immediate sale (Limit ≤ 5.0 mg N/100g).</p>`
          },
          {
            title: "Histamine Biogenic Amine Quantification in Scombroid Fish (RP-HPLC-UV / Enzymatic Assay)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Scombroid Fish Poisoning (Histamine Toxicity):</strong> Scombroid family ki fish (Tuna, Mackerel, Bonito, Kingfish, Mahi-mahi) ke dark muscle mein free amino acid L-histidine bahut high hota hai. Post-catch temperature abuse (> 4°C) hone par bacteria (Morganella morganii, Enterobacter aerogenes) ke histidine decarboxylase enzyme histidine ko toxic histamine mein convert kar dete hain.</li>
                  <li><strong>Thermal Stability (Cooking Cannot Destroy):</strong> Histamine heat-stable hota hai — canning, cooking, ya deep-frying se ye bilkul destroy nahi hota! Ingestion se 10 se 30 minute ke andar severe throbbing headache, facial flushing, cutaneous rash, hypotension, bronchospasm, aur anaphylactoid shock ho sakta hai.</li>
                  <li><strong>FSSAI & US FDA Statutory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>FSSAI Statutory Ceiling:</strong> Max <strong>100 mg/kg (ppm)</strong> for fish; Max 200 mg/kg in fish sauce.</li>
                      <li><strong>US FDA Action Defect Level:</strong> Defect level <strong>50 ppm</strong>; Toxic hazard level <strong>200 ppm</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "AOAC 977.13 / ISO 19343:2017 / FSSAI Fish Manual 06 / Codex Stan 302",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Finely ground fish fillet (10.0g) ko 75% methanol mein 60°C water bath par ultrasonic extraction se exhaustively extract kiya jaata hai. Matrix clean-up ke liye extract ko ion-exchange resin (Dowex 1-X8 ya C18 SPE cartridge) se pass kiya jaata hai. Eluate ko Dansyl chloride ya o-Phthalaldehyde (OPA) ke sath derivatize kiya jaata hai. Reverse-Phase C18 HPLC column (250 × 4.6 mm) par gradient elution (Water:Acetonitrile) se separate karke UV detector (254 nm) ya Fluorescence detector (Ex 340 nm, Em 450 nm) par quantify kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Histamine Content (mg/kg ya ppm) = [ (Peak Area_sample × Standard Conc. µg/mL × Final Vol. mL) / (Peak Area_std × W_sample in g) ]
              </div>
              <p class="mt-2">Yellowfin Tuna sample mein HPLC Peak Area se calculated concentration = 18.5 mg/kg (ppm). FSSAI safety threshold (Max 100 ppm) ke andar hai, batch safe for export & human consumption.</p>`
          },
          {
            title: "Ultimate Flesh pH Determination aur DFD / PSE Meat Quality Grading (ISO 2917)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Post-Mortem Glycolysis & Meat Texture:</strong> Slaughter ke baad muscle tissue mein anaerobic glycolysis hoti hai jisse glycogen lactic acid mein convert hota hai, aur living muscle ka pH 7.2 se girkar ultimate pH (pH_u, 24 ghante baad) 5.4–5.8 par stabilize hota hai.</li>
                  <li><strong>PSE (Pale, Soft, Exudative) Meat:</strong> Pre-slaughter acute stress se rapid lactic acid build-up hota hai jab carcass abhi warm (> 35°C) hoti hai. Isse pH drop hokar < 5.4 ho jaata hai, myofibrillar proteins denature ho jaati hain, meat pale aur watery ho jaata hai (high drip loss).</li>
                  <li><strong>DFD (Dark, Firm, Dry) Meat:</strong> Chronic long-term starvation/stress se muscle glycogen pehle hi deplete ho jaata hai. Slaughter ke baad lactic acid nahi banta aur pH_u > 6.0–6.2 reh jaata hai. DFD meat dark red, sticky hota hai aur bacterial spoilage ke liye extremely vulnerable hota hai.</li>
                  <li><strong>Quality Thresholds:</strong> Normal high-grade fresh meat: <strong>pH 5.4 to 5.8</strong>; PSE meat: <strong>pH < 5.3</strong>; DFD meat: <strong>pH > 6.0</strong>.</li>
                </ul>
              </div>`,
            reference: "ISO 2917:1999 / IS 5960 (Part 1) / AOAC 981.12",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Direct insertion Spear-type solid-glass combination pH electrode ko meat carcass (Longissimus dorsi ya Pectoralis major muscle) mein 2.0 cm depth par 24 hours post-mortem insert kiya jaata hai. Ya lab homogenization method: 10.0g minced meat ko 90 mL neutral 0.15 M Potassium Chloride (KCl) solution ke sath homogenize karke calibrated digital benchtop pH meter (calibrated at pH 4.01 aur 7.00) se reading li jaati hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Grading Criteria:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                pH 5.4 se 5.8: Normal Prime Quality Meat (Ideal Water Holding & Tenderness)<br>
                pH < 5.3: PSE Meat Defect (Reject for processing / high drip loss)<br>
                pH > 6.0: DFD Meat Defect (High microbial spoilage risk, shelf-life truncated)
              </div>
              <p class="mt-2">Broiler chicken breast 24h post-mortem reading: pH = 5.68. Completely normal quality meat; optimal myofibrillar water binding and juiciness.</p>`
          },
          {
            title: "Water Holding Capacity (WHC) aur Drip Loss ka Determination (Grau-Hamm Method)",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Juiciness, Tenderness & Yield Metric:</strong> Water Holding Capacity (WHC) meat tissue ki wo ability hai jisse wo cutting, heating, ya pressing ke dauran apne intra-myofibrillar water ko hold karke rakhta hai. Meat mein 75% paani hota hai jo actin-myosin filaments ke spatial lattice mein trapped rehta hai.</li>
                  <li><strong>Economic & Thaw Loss Evaluation:</strong> Poor WHC se package ke andar excessive bloody drip loss collect hota hai, jisse weight loss hota hai, cooked meat dry aur chewy ban jaata hai, aur sausage emulsification fail ho jaati hai.</li>
                  <li><strong>Quality Limits:</strong> Drip loss in fresh poultry/mutton after 48h at 4°C: <strong>Max 1.5% to 3.0%</strong>. Grau-Hamm WHC Expressed Juice Area: Low drip meat < 30% area; PSE defective meat > 50% expressed water area.</li>
                </ul>
              </div>`,
            reference: "Grau-Hamm Filter Paper Press Method (1953) / ISO 1442 / Honikel Bag Method (1998)",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Grau-Hamm Press Method):</h4>
              <p>Accurately weighed 300 mg (0.300g ± 0.005g) fresh intact meat core ko Whatman No. 1 filter paper disc par rakha jaata hai. Isse do plexiglass plates ke beech 1.0 kg standard weight (ya mechanical hydraulic press at 35 kg/cm2) ke under exactly 5.0 minutes tak press kiya jaata hai. Filter paper par do rings bante hain: andar ka flattened meat film area (M) aur bahar ka absorbed free water juice ring (T). Dono areas ko digital planimeter ya image analysis software se measure kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Expressed Juice Area (cm2) = Total Moisture Wetted Area (T) - Meat Film Area (M)<br><br>
                Free Water % = [ (T - M) × 8.44 / Total Meat Moisture mg ] × 100<br><br>
                Water Holding Capacity (WHC %) = 100 - Free Water %
              </div>
              <p class="mt-2">0.300g mutton sample: Total moisture = 225 mg (75%). Pressed wetted ring = 8.5 cm2, meat film = 4.2 cm2. Net juice area = 4.3 cm2. Free water = (4.3 × 8.44 / 225) × 100 = 16.13%. WHC = 100 - 16.13 = 83.87%. Excellent high-yield meat.</p>`
          },
          {
            title: "Moisture Content aur Moisture-to-Protein (M/P Ratio) - Added Water Adulteration Screening",
            purpose: `<div class="bg-sky-50 border border-sky-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Economic Adulteration via Water Plumping:</strong> Poultry processing mein broiler carcasses ko chilled spin chillers mein soak kiya jaata hai ya multi-needle injectors se phosphate-saline brine inject karke unka weight 15% se 30% tak artificially badha diya jaata hai (Water plumping fraud).</li>
                  <li><strong>Moisture-to-Protein (M/P) Ratio as Invariant Biological Standard:</strong> Unadulterated fresh raw muscle tissue mein water aur protein ka natural ratio physiologically strictly fixed hota hai (approx 3.5 to 3.8). Water injection se moisture badhta hai aur protein dilute hota hai, jisse M/P ratio 4.0 se upar jump kar jaata hai.</li>
                  <li><strong>Statutory Limits (FSSAI & USDA FSIS):</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fresh Chicken Breast:</strong> M/P Ratio <strong>Max 3.6 to 3.8</strong>; Total Moisture Max 75.0%.</li>
                      <li><strong>Fresh Chicken Thigh:</strong> M/P Ratio <strong>Max 3.8 to 4.0</strong>.</li>
                      <li><strong>Raw Red Meat (Mutton, Beef):</strong> M/P Ratio <strong>Max 3.5 to 3.7</strong>.</li>
                      <li><strong>Added Water %:</strong> Unlabelled added water must be <strong>0.0% (Zero)</strong>; spin-chilled poultry retained moisture Max 8.0% by USDA.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 1442:1997 (Moisture) / ISO 937 (Protein) / USDA FSIS Chemistry Guide / IS 5960",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>5.0g finely minced meat sample ko pre-dried sand ke sath porcelain dish mein mix karke 105°C ± 2°C hot air oven mein constant mass aane tak (4-5 hours) dry kiya jaata hai gravimetric moisture nikalne ke liye. Dusre 1.0g sample ka Kjeldahl method se Total Crude Protein (N × 6.25) determine kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                M/P Ratio = Moisture % / Crude Protein %<br><br>
                Added Water % = Moisture % - (Natural Physiological M/P Factor × Crude Protein %)
              </div>
              <p class="mt-2">Chicken breast sample: Moisture = 74.2%, Protein = 21.8%. M/P Ratio = 74.2 / 21.8 = 3.40. Added water = 74.2 - (3.6 × 21.8) = 74.2 - 78.48 = -4.28 (Zero added water). Pure, un-injected genuine chicken.</p>`
          },
          {
            title: "Total Crude Protein Content in Meat & Poultry Products (Macro-Kjeldahl Method, N × 6.25)",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Nutritional Grading & Meat Flesh Purity:</strong> Protein meat ka sabse valuable macronutrient hai. Communitated meat products (sausages, patties, nuggets, luncheon meats) mein animal flesh ko saste collagenous fillers (tendons, skin), cereal starches, ya soya isolate se dilute kiya jaata hai.</li>
                  <li><strong>Lean Meat Flesh Equivalent (LFE):</strong> FSSAI statutory regulations processed meats mein minimum pure meat protein mandate karti hain.</li>
                  <li><strong>FSSAI Statutory Protein Minimums:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Raw Dressed Chicken Breast:</strong> Min <strong>20.0% to 22.0% (w/w)</strong>.</li>
                      <li><strong>Raw Mutton / Chevon:</strong> Min <strong>18.0% to 20.0% (w/w)</strong>.</li>
                      <li><strong>Canned Meat / Corned Beef:</strong> Min <strong>16.0% (w/w)</strong>.</li>
                      <li><strong>Cooked Sausages / Frankfurters:</strong> Min <strong>12.0% (w/w)</strong> pure meat protein.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 937:1978 / AOAC 928.08 / IS 5960 (Part 3) / FSSAI Meat Manual 05",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>2.0g homogenized meat sample ko 25 mL concentrated H2SO4 aur catalytic salt mixture (10g K2SO4 + 0.5g CuSO4·5H2O) ke sath Kjeldahl digestion block par 420°C par 90 minutes digest kiya jaata hai jab tak solution clear pale green na ho jaye. Cool karke 40% NaOH add karke steam distill kiya jaata hai. Liberated ammonia 25 mL 4% Boric acid mein collect hota hai aur standardized 0.1 N HCl se titrate hota hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Total Nitrogen % = [ (V_sample - V_blank) × Normality_HCl × 0.014007 / W_sample in g ] × 100<br><br>
                Crude Protein % (w/w) = Total Nitrogen % × 6.25 (Standard Meat Protein Factor)
              </div>
              <p class="mt-2">2.000g lean mutton mince: Consumed HCl = 46.50 mL 0.1005 N (Blank = 0.20 mL). Nitrogen % = [ (46.30 × 0.1005 × 0.014007) / 2.000 ] × 100 = 3.258% N. Crude Protein = 3.258 × 6.25 = 20.36% (w/w). Conforms to high-grade meat standard.</p>`
          },
          {
            title: "Total Fat (Total Lipids) Determination by Acid Hydrolysis & Weibull-Stoldt Method (ISO 1443)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Bound Lipids & Phospholipids Extraction:</strong> Direct Soxhlet extraction meat matrix par fail ho jaati hai kyunki meat fat sirf neutral adipose triglycerides nahi hota; substantial fraction structural membrane phospholipids (lecithin, sphingomyelin) aur lipo-proteins ke roop mein myofibrillar proteins ke sath tightly chemically bound hota hai.</li>
                  <li><strong>Weibull-Stoldt Acid Digestion Mandate:</strong> Boiling 4 N HCl protein-lipid matrix ko completely hydrolyze karke 100% bound fat ko free kar deta hai, jisse accurate total fat extract hota hai.</li>
                  <li><strong>FSSAI Statutory Fat Ceilings:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Minced Meat / Ground Beef:</strong> Fat <strong>Max 20.0% to 25.0% (w/w)</strong>.</li>
                      <li><strong>Cooked Sausages / Frankfurters:</strong> Fat <strong>Max 25.0% to 30.0% (w/w)</strong>.</li>
                      <li><strong>Lean Chicken Cuts:</strong> Typically 1.5% to 3.0% (Breast), 6.0% to 9.0% (Thigh).</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 1443:1973 / IS 5960 (Part 2) / AOAC 991.36 (Weibull-Stoldt Method)",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>5.0g minced meat ko 50 mL 4 N HCl ke sath 60 minutes reflux karke digest kiya jaata hai. Digest ko boiling deionized water se dilute karke wet fluted Whatman No. 541 filter paper par filter kiya jaata hai aur chloride-free hone tak wash kiya jaata hai. Filter paper aur fat residue ko 100°C oven mein 1 hour dry karke Soxhlet apparatus mein petroleum ether (40-60°C) ke sath 4 hours extract kiya jaata hai. Solvent evaporate karke residual fat ko 102°C par dry aur weigh kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Total Fat % (w/w) = [ (W_flask_with_fat - W_empty_flask) / W_sample in g ] × 100
              </div>
              <p class="mt-2">5.000g Pork Sausage sample: Empty flask = 112.4350g, Flask + extracted dry fat = 113.6250g. Fat mass = 1.1900g. Total Fat % = (1.1900 / 5.000) × 100 = 23.80% (w/w). Conforms to FSSAI statutory maximum ceiling of ≤ 25.0%.</p>`
          },
          {
            title: "Total Ash aur Bone Fragment Content (Calcium Index) in Meat Products (ISO 936)",
            purpose: `<div class="bg-stone-50 border border-stone-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Mechanically Separated Meat (MSM) Bone Adulteration:</strong> Mechanically Deboned / Separated Meat (MDM/MSM) machines carcasses se bacha hua meat scrap karti hain. High pressure par bones crush hokar microscopic bone fragments aur calcium phosphate ke roop mein meat paste mein enter ho jaate hain.</li>
                  <li><strong>Health & Dental Hazards:</strong> Microscopic sharp bone shards consumer ke oral cavity, esophagus aur gastrointestinal mucosal lining ko puncture kar sakte hain.</li>
                  <li><strong>Statutory Thresholds:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fresh Pure Meat:</strong> Total Ash <strong>0.8% to 1.2%</strong>; Calcium Max <strong>0.015% (150 mg/kg)</strong>.</li>
                      <li><strong>MSM Meat (FSSAI & EC 853/2004 Limit):</strong> Calcium content strictly <strong>Max 0.10% (1000 mg/kg)</strong>. Anything higher proves illegal high-pressure bone crushing.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 936:1998 / IS 5960 / AOAC 920.153 / EC Regulation 853/2004",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>5.0g meat sample ko porcelain crucible mein 2 mL pure olive oil ke sath char kiya jaata hai aur muffle furnace mein 550°C ± 20°C par 6 hours calcine kiya jaata hai jab tak white carbon-free mineral ash na mile. Gravimetric total ash calculate hota hai. Ash ko 10 mL 6 N HCl mein dissolve karke ICP-OES ya EDTA complexometric titration se Calcium ion (Ca2+) quantify kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Total Ash % (w/w) = [ (W_dish_ash - W_empty_dish) / W_sample ] × 100<br><br>
                Bone Equivalent % = Calcium Content % × 3.57 (Hydroxylapatite mineral factor)
              </div>
              <p class="mt-2">Chicken sausage sample: 5.000g sample yields 0.055g ash (1.10%). ICP-OES Calcium analysis = 420 mg/kg (0.042%). Bone content equivalent = 0.15%. Conforms strictly to MSM ceiling (< 0.10% Ca).</p>`
          },
          {
            title: "Lipid Oxidation & Secondary Rancidity by TBARS Test (Malondialdehyde at 532 nm in Meat)",
            purpose: `<div class="bg-orange-50 border border-orange-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Warmed-Over Flavor (WOF) & Secondary Oxidation:</strong> Cooked, frozen, ya restructured meats (patties, kebabs) mein heme iron (Fe2+) aur cooking temperature phospholipids ke polyunsaturated fatty acids (PUFA) ke auto-oxidation ko trigger karte hain. Hydroperoxides decompose hokar cytotoxic aldehydes banate hain—chiefly Malondialdehyde (MDA).</li>
                  <li><strong>Cardiovascular Toxicity & Off-Flavors:</strong> Malondialdehyde ek reactive mutagen hai jo proteins ke lysine residues ke sath cross-links banata hai aur cardiovascular atherogenesis ko accelerate karta hai. MDA sensory 'cardboard-like / warmed-over' rancid off-flavor cause karta hai.</li>
                  <li><strong>Sensory & Statutory Thresholds:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fresh Freshly Slain Meat:</strong> TBARS < <strong>0.5 mg MDA / kg</strong> meat.</li>
                      <li><strong>Acceptable Fresh Frozen Meat:</strong> TBARS < <strong>1.0 mg MDA / kg</strong>.</li>
                      <li><strong>Rancid / Unfit for Consumption:</strong> TBARS > <strong>2.0 to 2.5 mg MDA / kg</strong> (Immediate consumer sensory rejection).</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "Witte et al. (1970) / Tarladgis Steam Distillation / ISO / FSSAI Meat Manual 05",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>5.0g minced meat ko 20 mL 10% Trichloroacetic acid (TCA) ke sath homogenize karke filter kiya jaata hai (acid extraction method). 5.0 mL clear filtrate ko 5.0 mL 0.02 M 2-Thiobarbituric Acid (TBA) reagent ke sath mix karke 95°C boiling water bath mein exactly 30 minutes heat kiya jaata hai. Malondialdehyde (MDA) ke 1 molecule ke sath 2 molecules TBA react karke brilliant pink-red TBA-MDA coordination complex banate hain. Absorbance 532 nm par spectrophotometer mein read kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                TBARS Value (mg Malondialdehyde / kg meat) = Absorbance at 532 nm × 7.8 (Calibration Constant)
              </div>
              <p class="mt-2">Frozen mutton patty sample after 60 days storage: Absorbance at 532 nm = 0.115. TBARS = 0.115 × 7.8 = 0.897 mg MDA/kg. Acceptable freshness (Threshold ≤ 1.0 mg/kg).</p>`
          },
          {
            title: "Nitrite aur Nitrate Preservative Residues in Cured Meats by Griess Diazotization (ISO 2918 & 3091)",
            purpose: `<div class="bg-purple-50 border border-purple-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Botulism Prevention vs Carcinogenic Nitrosamines:</strong> Sodium nitrite (NaNO2) aur nitrate (NaNO3) cured meats (bacon, ham, salami, sausages) mein Clostridium botulinum spore outgrowth aur neurotoxin production ko rokne ke liye add kiye jaate hain. Ye myoglobin ke sath react karke attractive cured-pink nitrosyl-hemochrome color dete hain.</li>
                  <li><strong>Carcinogenic Nitrosamine Hazard:</strong> Frying ya high heat par excess residual nitrite secondary amines ke sath react karke N-Nitrosamines (NDMA, N-nitrosodimethylamine) banata hai jo potent liver aur esophageal carcinogens hain.</li>
                  <li><strong>FSSAI & Codex Statutory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Residual Sodium Nitrite (NaNO2):</strong> Max <strong>100 mg/kg (ppm)</strong> in cured meat products (Codex limit 80–100 ppm).</li>
                      <li><strong>Residual Sodium Nitrate (NaNO3):</strong> Max <strong>250 mg/kg (ppm)</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 2918:1975 (Nitrite) / ISO 3091:1975 (Nitrate) / AOAC 973.31 / FSSAI Meat Manual 05",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Griess Diazotization Reaction):</h4>
              <p>Deproteinized meat extract mein present Nitrite (NO2-) acidic medium mein Sulfanilamide ko diazotize karke diazonium salt banata hai. Ye diazonium cation N-(1-Naphthyl)ethylenediamine dihydrochloride (NED) ke sath azo-coupling karke intense magenta-pink azo dye banata hai. Absorbance 540 nm par spectrophotometer mein measure ki jaati hai. Nitrate (NO3-) ke liye extract ko pehle Cadmium reduction column se pass karke nitrite mein convert kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Sodium Nitrite (mg/kg or ppm) = [ (Absorbance at 540 nm × Standard Slope mg/L × Dilution Vol. mL) / W_sample in g ]
              </div>
              <p class="mt-2">10.0g Chicken Salami sample: 540 nm Absorbance = 0.285 (Standard curve gives 4.8 mg/L in 100 mL flask). Nitrite = (4.8 × 100) / 10.0 = 48.0 mg/kg (ppm). Well within FSSAI statutory limit of ≤ 100 ppm.</p>`
          },
          {
            title: "Added Polyphosphates aur Total Phosphorus as P2O5 in Meat Products (ISO 13730)",
            purpose: `<div class="bg-teal-50 border border-teal-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Water-Binding Chemical Fraud:</strong> Alkaline polyphosphates (Sodium tripolyphosphate STPP, Tetrasodium pyrophosphate TSPP) meat filaments ke actomyosin cross-links ko dissociate karke electrostatic repulsion badhate hain. Isse meat 20% se 35% tak extra water absorb karke hold kar leta hai.</li>
                  <li><strong>Calcium Leaching & Renal Calcification:</strong> Excessive dietary phosphate calcium-phosphorus homeostasis ko disrupt karta hai, jisse hyperphosphatemia, parathyroid hormone release, bone mineral loss (osteoporosis), aur vascular calcification hoti hai.</li>
                  <li><strong>FSSAI & Codex Statutory Ceilings:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Total Added Phosphates:</strong> Max <strong>5.0 g/kg (0.5% or 5000 ppm)</strong> expressed as P2O5 in meat and poultry products.</li>
                      <li><strong>Fresh Unprocessed Meat:</strong> Natural physiological phosphorus is approx <strong>1.5 to 2.2 g P2O5 / kg</strong>. Added phosphate = Total P2O5 - Natural physiological baseline.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 13730:1996 / IS 5960 / AOAC 969.31 (Molybdenum Blue Spectrophotometry)",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Meat sample ko dry ashing ya sulfuric-nitric wet acid digestion se total orthophosphates mein convert kiya jaata hai. Orthophosphate acidic medium mein ammonium molybdate ke sath react karke phosphomolybdic acid banata hai, jo ascorbic acid ya hydroquinone se reduce hokar intense deep blue Molybdenum Blue coordination complex banata hai. Absorbance 690 nm ya 820 nm par spectrophotometer mein read ki jaati hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Total Phosphorus as P2O5 (g/kg) = [ (Absorbance × Curve Factor mg P2O5 × Dilution Vol. mL) / (W_sample in g × 1000) ]<br><br>
                Added Phosphate g/kg = Total P2O5 - (Crude Protein % × 0.0106)
              </div>
              <p class="mt-2">Cooked Ham sample: Total P2O5 = 4.20 g/kg; Protein = 18.0% (Natural baseline P2O5 = 18.0 × 0.106 = 1.91 g/kg). Added phosphate = 4.20 - 1.91 = 2.29 g/kg. Conforms cleanly to FSSAI statutory ceiling (≤ 5.0 g/kg).</p>`
          },
          {
            title: "Multi-Class Veterinary Antibiotic Residues by LC-MS/MS in Meat, Poultry & Seafood",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Antimicrobial Resistance (AMR) Global Threat:</strong> Commercial poultry, piggery aur aquaculture mein antibiotics (Tetracyclines, Fluoroquinolones, Sulfonamides, Macrolides, Beta-lactams) non-therapeutic growth promoters ki tarah misuse hote hain. Inadequate withdrawal periods ke karan residues meat mein bache rehte hain.</li>
                  <li><strong>Human Health Catastrophe:</strong> Antibiotic residues consume karne se human gut flora disrupt hoti hai, severe allergic anaphylaxis hota hai (penicillin hypersensitivity), bone marrow suppression (chloramphenicol aplastic anemia), aur Multi-Drug Resistant Superbugs (MRSA, CRE) evolve hote hain.</li>
                  <li><strong>FSSAI MRL Statutory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Banned Antibiotics (Zero Tolerance):</strong> Chloramphenicol, Nitrofurans (AOZ, AMOZ, AHD, SEM), Nitroimidazoles — Strictly <strong>NOT DETECTED (< 0.3 ppb)</strong>.</li>
                      <li><strong>Tetracyclines (Oxytetracycline, Chlortetracycline):</strong> Max Residue Limit (MRL) <strong>100 µg/kg (ppb)</strong>.</li>
                      <li><strong>Sulfonamides (Sulfadiazine, Sulfamethazine):</strong> Total MRL <strong>100 µg/kg</strong>.</li>
                      <li><strong>Fluoroquinolones (Enrofloxacin, Ciprofloxacin):</strong> MRL <strong>100 µg/kg</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 22174 / AOAC 2020.04 / FSSAI Contaminants Regulations / EU Method",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (QuEChERS & LC-MS/MS Triple Quadrupole):</h4>
              <p>5.0g homogenized meat sample ko 10 mL 0.1% formic acid in acetonitrile:water (80:20) ke sath extract kiya jaata hai. QuEChERS salt mixture (4g MgSO4 + 1g NaCl) se phase separation ki jaati hai. Dispersive SPE (d-SPE) cleanup cartridge (C18 + Primary Secondary Amine PSA) se co-extracted lipids aur cholesterol ko absorb karke remove kiya jaata hai. Purified extract ko C18 reversed-phase column par separate karke Triple-Quadrupole Mass Spectrometer (ESI+ / MRM mode) par target precursor-product ion transitions monitor karke quantify kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">MRM Transitions & Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Oxytetracycline: m/z 461.1 ⟶ 426.1 / 443.1<br>
                Enrofloxacin: m/z 360.2 ⟶ 316.2 / 245.2<br>
                Compliant: All regulated antibiotics ≤ 100 µg/kg; Banned drugs NOT DETECTED (< 0.3 µg/kg).
              </div>
              <p class="mt-2">Broiler chicken meat consignment: Oxytetracycline detected at 14.2 µg/kg (well below 100 µg/kg MRL); Chloramphenicol: Not Detected. Batch compliant with FSSAI regulations.</p>`
          },
          {
            title: "Toxic Heavy Metals (Lead Pb, Cadmium Cd, Arsenic As, Mercury Hg) in Meat & Seafood by ICP-MS",
            purpose: `<div class="bg-zinc-50 border border-zinc-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Bioaccumulation in Marine & Terrestrial Food Chains:</strong> Marine fish (Tuna, Swordfish, Shark) biomagnification ke zariye methylmercury accumulate karte hain. Grazing animals aur poultry polluted fodder aur industrial effluent water se Lead (Pb) aur Cadmium (Cd) absorb karke apne kidney aur liver mein concentrate karte hain.</li>
                  <li><strong>Severe Chronic Toxicities:</strong> Methylmercury irreversibly central nervous system ko destroy karta hai (Minamata disease); Cadmium kidney proximal tubules ko damage karke renal failure aur bone softening (Itai-itai disease) cause karta hai; Lead neurotoxic encephalopathy aur cognitive decline trigger karta hai.</li>
                  <li><strong>FSSAI Statutory Maximum Limits (mg/kg or ppm):</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fish & Seafood:</strong> Total Mercury <strong>Max 0.5 mg/kg</strong> (Predatory fish Max 1.0 mg/kg); Cadmium <strong>Max 0.1 to 0.3 mg/kg</strong>; Lead <strong>Max 0.3 mg/kg</strong>.</li>
                      <li><strong>Meat & Poultry Flesh:</strong> Lead Max <strong>0.1 mg/kg</strong>; Cadmium Max <strong>0.05 mg/kg</strong>; Arsenic Max <strong>0.1 mg/kg</strong>.</li>
                      <li><strong>Animal Liver & Kidney:</strong> Lead Max <strong>0.5 mg/kg</strong>; Cadmium Max <strong>1.0 mg/kg</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 17294-2:2016 / AOAC 2015.01 / FSSAI Contaminants Reg 2011 / EPA 6020B",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Microwave Digestion & ICP-MS):</h4>
              <p>0.500g homogenized meat fillet ya offal sample ko high-pressure PTFE digestion vessel mein 6 mL concentrated sub-boiling HNO3 (65%) aur 2 mL H2O2 (30%) ke sath charge kiya jaata hai. Closed-vessel Microwave Digestion system mein 200°C par 30 minutes digest kiya jaata hai. Digest ko ultrapure Milli-Q water se 50 mL tak dilute karke Inductively Coupled Plasma Mass Spectrometer (ICP-MS) ke argon plasma torch (6000–8000 K) mein nebulize kiya jaata hai. Internal standards (Sc, Y, In, Bi) se matrix drift correct karke trace mass peaks monitor kiye jaate hain.</p>

              <h4 class="font-semibold mt-4 mb-2">Mass Signals & Calibration:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Monitored Isotopes: 208Pb, 111Cd, 75As (Helium collision cell KED mode), 202Hg<br><br>
                Metal Conc. (mg/kg) = [ Measured Conc. µg/L × Final Vol. L ] / W_sample in g
              </div>
              <p class="mt-2">Prawns (Shrimp) export sample: Pb = 0.082 mg/kg (Limit 0.30), Cd = 0.045 mg/kg (Limit 0.10), Hg = 0.065 mg/kg (Limit 0.50). Fully compliant with international FSSAI and European Union export standards.</p>`
          },
          {
            title: "Meat Species Adulteration & Authenticity Identification by Real-Time PCR (ISO 20818)",
            purpose: `<div class="bg-rose-50 border border-rose-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Religious, Cultural & Legal Authenticity:</strong> Meat sector mein sabse bada fraudulent issue species substitution hai—jaise Mutton ya Chicken mein cheap Pork (suar ka maans), Horse meat (ghode ka maans), ya Beef (gay ka maans) ki illegal blending karna. Halal, Kosher, aur Hindu religious dietary restrictions ke violate hone par massive social unrest aur communal violence ho sakta hai.</li>
                  <li><strong>Economic Fraud Prevention:</strong> Saste cow/buffalo meat ko expensive goat (chevon) ya sheep (mutton) bolkar 3x price par becha jaata hai. Processing, cooking aur spicing ke baad visual inspection 100% impossible ho jaati hai.</li>
                  <li><strong>Statutory Mandate:</strong> Label declaration must match 100% genetic species. <strong>Strictly Zero Tolerance (0.0% undeclared meat species)</strong> with limit of detection down to <strong>0.1% (w/w)</strong>.</li>
                </ul>
              </div>`,
            reference: "ISO 20818:2018 / ISO 21571 / AOAC 2016.02 / FSSAI Meat Manual 05",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Mitochondrial DNA Extraction & Real-Time TaqMan PCR):</h4>
              <p>200 mg minced meat sample se CTAB ya silica-membrane spin column method se high-molecular-weight genomic/mitochondrial DNA extract kiya jaata hai. Mitochondrial genes (Cytochrome b, D-loop, 16S rRNA) select kiye jaate hain kyunki muscle cells mein per cell thousands of mitochondrial copies hoti hain jo cooked/canned meats mein bhi survive karti hain. Species-specific primers aur dual-labeled fluorogenic TaqMan probes (FAM, VIC, CY5, ROX) ke sath multiplex Real-Time PCR instrument par 40 cycles amplify kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Species Targets & Ct Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Pork (Sus scrofa) Target: FAM Channel | Beef (Bos taurus): VIC Channel<br>
                Mutton (Ovis aries): CY5 Channel | Internal Positive Control (IPC): HEX Channel<br><br>
                Ct < 35.0 with sigmoidal amplification: Target Species POSITIVE.<br>
                Ct ≥ 38.0 or flat baseline: Target Species NEGATIVE (Limit of Detection 0.1% w/w).
              </div>
              <p class="mt-2">Labelled Halal Dressed Chicken Keema sample: Chicken probe amplified strongly at Ct = 18.2; Pork (Sus scrofa) probe showed flat baseline (Ct > 40.0); Beef probe showed flat baseline. Authenticity certified: 100% Pure Chicken, Zero Porcine DNA.</p>`
          },
          {
            title: "Table Egg Freshness & Quality: Haugh Unit, Yolk Index & Air Cell Depth (USDA / ISO)",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Internal Albumen Breakdown & Aging:</strong> Freshly laid egg mein thick albumen (egg white) gel-like aur viscous hota hai jiska ovomucin-lysozyme complex intact hota hai. Storage ke dauran shell pores se CO2 aur water loss hota hai, egg pH 7.6 se badhkar 9.5 ho jaata hai, aur ovomucin break hokar thick white watery liquid mein convert ho jaata hai.</li>
                  <li><strong>Yolk Flattening & Vitelline Membrane Weakening:</strong> Baasi ande mein paani albumen se yolk mein migrate karta hai, jisse vitelline membrane weaken ho jaati hai aur todne par yolk flat spread ho kar phat jaata hai.</li>
                  <li><strong>USDA & FSSAI Egg Grading Standards:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Grade AA (Super Fresh):</strong> Haugh Unit <strong>≥ 72</strong>; Air cell depth < 3.2 mm.</li>
                      <li><strong>Grade A (High Quality Commercial):</strong> Haugh Unit <strong>60 to 71</strong>; Air cell depth 3.2 to 4.8 mm.</li>
                      <li><strong>Grade B (Standard):</strong> Haugh Unit <strong>31 to 59</strong>; Air cell depth > 4.8 mm.</li>
                      <li><strong>Reject / Inedible (Stale):</strong> Haugh Unit < <strong>31</strong>; Yolk Index < 0.25 (Rotten/decomposed).</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "USDA Agricultural Handbook No. 75 / IS 10382 / ISO Standards",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Egg ko analytical balance par weigh kiya jaata hai (W in grams). Air cell depth ko candling lamp aur millimeter gauge se measure kiya jaata hai. Ande ko clean, level glass breakout table par carefully break kiya jaata hai. Precision digital micrometer (Haugh gauge) se yolk ke edge se 1.0 cm door thick albumen ki height (H in mm) measure ki jaati hai. Spherometer se yolk height aur diameter measure karke Yolk Index calculate kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Haugh Unit Formula:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Haugh Unit (HU) = 100 × log10 [ H - 1.7 × W^0.37 + 7.6 ]<br><br>
                Yolk Index (YI) = Yolk Height (mm) / Yolk Mean Diameter (mm)
              </div>
              <p class="mt-2">Egg weight W = 58.5g. Thick albumen height H = 6.8 mm. HU = 100 × log10 [ 6.8 - 1.7 × (58.5)^0.37 + 7.6 ] = 100 × log10 [ 6.8 - 7.67 + 7.6 ] = 100 × log10 (6.73) = 100 × 0.828 = 82.8 HU. Commercial Grade: USDA Grade AA (Exceptional Freshness).</p>`
          },
          {
            title: "Total Aerobic Mesophilic & Psychrotrophic Plate Count in Chilled Meat (ISO 4833-1 & ISO 17410)",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>General Sanitary Hygiene & Shelf-Life Forecasting:</strong> Aerobic Plate Count (APC / TPC at 30°C) slaughterhouse evisceration hygiene, water quality, aur worker cleanliness ka benchmark hai.</li>
                  <li><strong>Psychrotrophic Spoilage Flora (4°C to 7°C):</strong> Chilled fresh meat aur vacuum-packed cuts mein refrigeration temperature par sirf psychrotrophic bacteria (Pseudomonas fragi, Pseudomonas fluorescens, Brochothrix thermosphacta) multiply karte hain. Jab count 10^7 CFU/g reach karta hai, meat surface par off-odor develop hoti hai; 10^8 CFU/g par visual surface slime banta hai.</li>
                  <li><strong>FSSAI & European Union Process Hygiene Criteria:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Raw Poultry Carcasses:</strong> Satisfactory: < <strong>5.0 × 10^5 CFU/g</strong> (5.7 log); Unsatisfactory: > <strong>5.0 × 10^6 CFU/g</strong>.</li>
                      <li><strong>Minced Meat / Dressed Mutton:</strong> Satisfactory: < <strong>5.0 × 10^5 CFU/g</strong>; Max limit <strong>5.0 × 10^6 CFU/g</strong>.</li>
                      <li><strong>Ready-to-Eat Cooked Meats:</strong> Max <strong>1.0 × 10^4 CFU/g</strong> (4.0 log).</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 4833-1:2013 (Mesophiles at 30°C) / ISO 17410:2019 (Psychrotrophs at 6.5°C) / FSSAI Manual 14",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Aseptically 25.0g meat sample ko 225 mL sterile Peptone Salt Diluent mein stomacher blender mein 2 minutes homogenize karke 10^-1 suspension banayi jaati hai. Serial decimal dilutions (10^-2 se 10^-6) prepare ki jaati hain. 1.0 mL aliquot ko duplicate sterile Petri dishes mein molten Plate Count Agar (PCA, tempered at 45°C) ke sath pour plate kiya jaata hai. Mesophiles ke liye 30°C ± 1°C par 72 hours; Psychrotrophs ke liye 6.5°C par 10 days incubate karke automated colony counter se count kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                N (CFU / g) = Σ C / [ (n1 + 0.1 × n2) × d ]
              </div>
              <p class="mt-2">Chilled broiler breast sample: Dilution 10^-3 plates count = 142 aur 150 colonies; 10^-4 plates count = 16 aur 14 colonies. N = (142 + 150 + 16 + 14) / [ (2 + 0.2) × 0.001 ] = 322 / 0.0022 = 1.46 × 10^5 CFU/g (5.16 log10). Well within FSSAI satisfactory threshold (< 5.0 × 10^5 CFU/g).</p>`
          },
          {
            title: "Escherichia coli & Fecal Coliforms Enumeration by TBX Chromogenic Agar (ISO 16649-2 / FSSAI)",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Direct Fecal Pollution & Slaughterhouse Gut Rupture:</strong> E. coli warm-blooded animals ke gastrointestinal tract ka obligate commensal organism hai. Meat par E. coli ki presence proves karti hai ki slaughter ke dauran animal ke intestine rupture huye hain ya carcass par cow dung, chicken cecal droppings, ya sewage contaminated water laga hai.</li>
                  <li><strong>Surrogate for Enteric Pathogens:</strong> High E. coli count directly correlate karta hai Salmonella, Shiga-toxin E. coli (STEC O157:H7), aur Campylobacter ke high contamination risk ke sath.</li>
                  <li><strong>FSSAI & EC Process Hygiene Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Raw Poultry / Mutton Carcasses:</strong> Satisfactory: < <strong>100 CFU/g</strong>; Marginal: 100 to <strong>500 CFU/g</strong>; Unsatisfactory: > <strong>500 CFU/g</strong>.</li>
                      <li><strong>Ready-to-Eat Cooked Meats, Ham, Sausages:</strong> Strictly <strong>ABSENT in 1.0 gram (Zero Tolerance)</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 16649-2:2001 / ISO 7251 / FSSAI Microbiological Manual 14",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Homogenized meat dilution (1.0 mL) ko Tryptone Bile X-Glucuronide (TBX) Agar ke sath pour-plate kiya jaata hai. TBX mein bile salts non-enteric Gram-positive organisms ko suppress karte hain. E. coli ke paas specific enzyme beta-D-glucuronidase hota hai jo chromogenic substrate 5-bromo-4-chloro-3-indolyl-beta-D-glucuronide (BCIG) ko cleave karke insoluble turquoise-blue/blue-green indigo dimer banata hai. Plates ko thermotolerant temperature strictly 44.0°C ± 1.0°C par 24 hours incubate kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Colony Profile & Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Characteristic Colonies: Distinct circular Turquoise-Blue to Blue-Green colonies.<br><br>
                E. coli Count (CFU/g) = Σ Blue Colonies / [ (n1 + 0.1 × n2) × d ]
              </div>
              <p class="mt-2">Raw dressed chicken skin sample: 10^-1 dilution plates par 24 aur 28 blue-green colonies count huye. Average = 26 colonies × 10 = 260 CFU/g. Category: Marginal (Acceptable but requires slaughterhouse gut evisceration sanitation review, Limit < 500 CFU/g).</p>`
          },
          {
            title: "Salmonella enterica (Typhimurium & Enteritidis) Detection in 25g Meat (ISO 6579-1 / FSSAI)",
            purpose: `<div class="bg-rose-50 border border-rose-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Leading Cause of Hospitalized Food Poisoning:</strong> Salmonella enterica serovars (Enteritidis, Typhimurium, Heidelberg) poultry aur swine ke systemic digestive reservoirs mein exist karte hain. Undercooked chicken, raw minced meat, aur unpasteurized eggs se acute Salmonellosis enteritis hota hai—high fever, bloody dysentery, severe dehydration, aur immunocompromised patients mein fatal bacteremia.</li>
                  <li><strong>Absolute Zero Tolerance Mandate:</strong> FSSAI, US USDA-FSIS, aur Codex Alimentarius sabhi raw dressed meats, poultry cuts, aur egg products mein <strong>Strictly ABSENT in 25 grams (Zero Tolerance)</strong> enforce karte hain. Single colony ki presence batch ko legally unfit for human consumption declare karti hai.</li>
                </ul>
              </div>`,
            reference: "ISO 6579-1:2017 / FSSAI Microbiological Manual 14 / AOAC 967.26 / USDA FSIS MLG 4",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (ISO 4-Phase Culture Protocol):</h4>
              <p><strong>1. Pre-enrichment:</strong> 25.0g meat ko 225 mL Buffered Peptone Water (BPW) mein 37°C par 18 ghante incubate kiya jaata hai sub-lethally injured cells ko revive karne ke liye.<br>
              <strong>2. Selective Enrichment:</strong> 0.1 mL BPW ko 10 mL Rappaport-Vassiliadis Soya (RVS) broth mein 41.5°C par, aur 1.0 mL ko Muller-Kauffmann Tetrathionate-Novobiocin (MKTTn) broth mein 37°C par 24 ghante incubate kiya jaata hai.<br>
              <strong>3. Selective Plating:</strong> RVS aur MKTTn se loopful Xylose Lysine Deoxycholate (XLD) agar aur Brilliant Green Agar (BGA) par streak kiya jaata hai.<br>
              <strong>4. Confirmation:</strong> XLD par characteristic red colonies with black center (H2S production) ko Triple Sugar Iron (TSI), Urea agar (Negative), Polyvalent O & H antisera agglutination, aur MALDI-TOF/PCR se confirm kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Compliance Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                No characteristic red colonies with black centers on XLD: Salmonella ABSENT in 25g (COMPLIANT).<br>
                Agglutination positive / TSI alkaline slant with H2S blackening: Salmonella DETECTED (REJECT & DESTROY).
              </div>
              <p class="mt-2">Tested dressed broiler carcass sample: BPW, RVS, MKTTn enriched; XLD agar showed zero black-centered colonies after 24h at 37°C. Result: Salmonella ABSENT in 25g. Fully compliant with FSSAI regulations.</p>`
          },
          {
            title: "Listeria monocytogenes Detection & Enumeration in 25g Ready-to-Eat Meats (ISO 11290-1 & 2)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Psychrotrophic Super-Pathogen in Cold Chains:</strong> Listeria monocytogenes ek gram-positive intracellular pathogen hai jo normal refrigeration temperatures (2°C to 4°C) par aur vacuum-sealed modified atmosphere packaging (MAP) mein bhi continuously multiply kar sakta hai! Cooked ready-to-eat meats (ham, salami, frankfurters, smoked fish) post-lethality packaging line par cross-contaminate hote hain.</li>
                  <li><strong>Highest Fatality Rate (20% to 30%):</strong> Foodborne pathogens mein Listeriosis ka mortality rate sabse deadly hai! Pregnant women mein ye placenta cross karke spontaneous abortion/stillbirth cause karta hai; elderly aur infants mein fatal purulent meningitis aur septicemia karta hai.</li>
                  <li><strong>Regulatory Mandate:</strong> Ready-to-eat cooked meats that support growth: <strong>Strictly ABSENT in 25 grams</strong>; products that do not support growth: Max <strong>100 CFU/g</strong> throughout shelf life (EC 2073/2005 & FSSAI).</li>
                </ul>
              </div>`,
            reference: "ISO 11290-1:2017 (Detection) / ISO 11290-2:2017 (Enumeration) / FSSAI Manual 14",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Two-Stage Enrichment & Chromogenic ALOA Agar):</h4>
              <p>25.0g RTE meat sample ko 225 mL Half-Fraser broth mein 30°C par 24 hours incubate kiya jaata hai (primary selective enrichment). 0.1 mL culture ko 10 mL Full-Fraser broth mein transfer karke 37°C par 24 hours incubate kiya jaata hai (esculin hydrolysis se broth jet black turn ho jaata hai). Culture ko Agar Listeria according to Ottaviani and Agosti (ALOA / OCLA) chromogenic agar par streak kiya jaata hai. L. monocytogenes beta-glucosidase enzyme se blue-green colonies banata hai, aur phosphatidylinositol-specific phospholipase C (PI-PLC) enzyme se colony ke charon taraf distinct opaque halo precipitate banata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Confirmation Tests:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                ALOA Agar: Blue-green colonies surrounded by distinct opaque precipitation halo.<br>
                Confirmatory Profile: Gram-positive short rods, Catalase (+), Tumbling motility at 25°C, Hemolysis on Horse Blood (+), CAMP test with S. aureus (+).
              </div>
              <p class="mt-2">Cooked Sliced Ham package: Fraser broth remained yellow-straw (no blackening); ALOA agar showed zero blue-green haloed colonies. Result: Listeria monocytogenes ABSENT in 25g. Safe for public distribution.</p>`
          },
          {
            title: "Campylobacter jejuni & Campylobacter coli Detection in Poultry Carcasses (ISO 10272-1:2017)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Leading Cause of Bacterial Gastroenteritis Worldwide:</strong> Campylobacter jejuni aur Campylobacter coli poultry meat ke primary contamination vectors hain (> 70% human cases). Broiler chicken ke intestine aur ceca mein 10^8 CFU/g tak Campylobacter normal commensal ki tarah rehta hai bina chicken ko beemar kiye. Mechanical feather plucking aur evisceration ke dauran chicken skin aur flesh heavily contaminate ho jaate hain.</li>
                  <li><strong>Microaerophilic & Autoimmune Paralysis:</strong> Campylobacter ko grow karne ke liye strictly low oxygen (5% O2, 10% CO2) chahiye hoti hai. Ingesting undercooked chicken causing campylobacteriosis triggers bloody diarrhea, high fever, aur 1 in 1000 patients mein autoimmune Guillain-Barré Syndrome (acute ascending neuromuscular paralysis jisme respiratory arrest hota hai).</li>
                  <li><strong>Statutory Criteria:</strong> EU Process Hygiene Criterion: <strong>Max 1000 CFU/g</strong> on neck skin; FSSAI process hygiene target: <strong>Strictly Absent / Low</strong>.</li>
                </ul>
              </div>`,
            reference: "ISO 10272-1:2017 / ISO 10272-2 / FSSAI Microbiological Manual 14 / EC 2073/2005",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Bolton Broth & mCCDA Charcoal Culture):</h4>
              <p>25.0g broiler neck skin aur muscle ko 225 mL Bolton Enrichment Broth (oxygen radical scavengers: sodium pyruvate, metabisulfite, FeSO4 + antibiotics: cefoperazone, vancomycin, trimethoprim, amphotericin B) mein mix kiya jaata hai. Microaerophilic jar (5% O2, 10% CO2, 85% N2) mein 37°C par 5 hours pre-incubate karke 41.5°C par 44 hours incubate kiya jaata hai. Culture ko modified Charcoal Cefoperazone Deoxycholate Agar (mCCDA) par streak kiya jaata hai. Characteristic flat, moist, greyish spreading colonies with metallic sheen confirm kiye jaate hain phase-contrast corkscrew motility, oxidase (+), catalase (+), aur Hippurate hydrolysis (purple color confirms C. jejuni; colorless confirms C. coli).</p>

              <h4 class="font-semibold mt-4 mb-2">Compliance Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                No grey spreading colonies on mCCDA: Campylobacter ABSENT in 25g (Satisfactory).<br>
                Spreading metallic colonies + positive oxidase/hippurate: Campylobacter jejuni POSITIVE.
              </div>
              <p class="mt-2">Dressed poultry carcass skin: Bolton broth microaerophilic enrichment; mCCDA plates showed no characteristic spreading colonies. Oxidase negative. Result: Campylobacter ABSENT in 25g.</p>`
          },
          {
            title: "Coagulase-Positive Staphylococci (Staphylococcus aureus) Enumeration by Baird-Parker Agar (ISO 6888-1)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Food Handler Contamination & Heat-Stable Enterotoxins:</strong> Staphylococcus aureus human skin, nasal passages, aur infected cuts mein naturally present hota hai. Meat handling, deboning, aur sausage preparation ke dauran workers ke hathon se meat contaminate hota hai.</li>
                  <li><strong>Thermal-Resistant Staphylococcal Enterotoxins:</strong> S. aureus room temperature par multiply karke pre-formed enterotoxins (Enterotoxin A, B, C, D) synthesize karta hai. Ye enterotoxins super-antigens hote hain jo boiling, cooking, ya canning se bhi destroy nahi hote! Ingestion se 2 se 4 ghante ke andar severe explosive vomiting, violent abdominal cramps, aur prostration hota hai.</li>
                  <li><strong>FSSAI Statutory Thresholds:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Raw Meat & Poultry Cuts:</strong> Satisfactory: < <strong>100 CFU/g</strong>; Max Limit: <strong>1000 CFU/g</strong>.</li>
                      <li><strong>Cooked Meats & Sausages:</strong> Max <strong>10 to 100 CFU/g</strong>. Values > 10^5 CFU/g indicate imminent lethal enterotoxin hazard.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 6888-1:2021 (Baird-Parker) / ISO 6888-2 (Rabbit Plasma Fibrinogen) / FSSAI Manual 14",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Baird-Parker Egg Yolk Tellurite Agar):</h4>
              <p>1.0 mL serial meat dilutions ko Baird-Parker agar plates par spread plate kiya jaata hai. Medium mein potassium tellurite hota hai jise S. aureus reduce karke jet-black/grey shiny convex colonies banata hai. Egg yolk emulsion mein present lecithin ko staphylococcal lecithinase (lipase) hydrolyze karta hai, jisse black colony ke charon taraf 2 to 5 mm wide distinct clear transparent clearing zone banta hai, surrounded by an outer opaque ring. 37°C par 48 hours incubate karke colonies count kiye jaate hain aur Rabbit Plasma Coagulase test (clot formation within 4h at 37°C) se confirm kiye jaate hain.</p>

              <h4 class="font-semibold mt-4 mb-2">Colony Profile & Formula:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Colony Type: Jet-black, shiny convex colonies with clear halo zone and opaque inner ring.<br><br>
                S. aureus Count (CFU/g) = Σ Confirmed Black Halo Colonies / [ (n1 + 0.1 × n2) × d ]
              </div>
              <p class="mt-2">Cooked chicken kebab sample: 10^-1 dilution plates par 4 aur 6 black halo colonies count huye (Average = 5 colonies × 10 = 50 CFU/g). Coagulase test positive. Well below FSSAI threshold of 100 CFU/g (Satisfactory hygiene).</p>`
          },
          {
            title: "Clostridium perfringens Spore & Vegetative Cell Enumeration by TSC Agar (ISO 7937:2004)",
            purpose: `<div class="bg-zinc-50 border border-zinc-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Slow Cooling & Temperature Abuse in Cooked Meats:</strong> Clostridium perfringens ek spore-forming anaerobic bacterium hai jo soil aur animal feces mein paya jata hai. Large meat roasts, gravies, meat stews, aur cooked sausages mein normal cooking vegetative cells ko kill kar deti hai lekin heat-resistant spores survive kar jaate hain.</li>
                  <li><strong>Explosive Bacterial Multiplication:</strong> Slow cooling (between 43°C and 50°C) ke dauran spores germinate karte hain aur world ka fastest doubling time (every 10 to 12 minutes!) exhibit karte hain. Human intestine mein enterotoxin (CPE) liberate hota hai jisse severe explosive gas diarrheal illness hoti hai.</li>
                  <li><strong>FSSAI & Codex Statutory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Cooked Ready-to-Eat Meats, Canned Gravies:</strong> Satisfactory: < <strong>10 CFU/g</strong>; Max Limit: <strong>100 CFU/g</strong>.</li>
                      <li>Counts > 10^5 CFU/g confirm massive food poisoning outbreak hazard.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 7937:2004 / FSSAI Microbiological Manual 14 / AOAC 976.30",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Tryptose Sulfite Cycloserine Agar in Anaerobiosis):</h4>
              <p>Meat homogenate dilutions ko Tryptose Sulfite Cycloserine (TSC) Agar ke sath pour-plate kiya jaata hai. Solidify hone ke baad 10 mL additional TSC agar ka overlayer pour kiya jaata hai taaki anaerobic conditions create hon aur surface colonies spread na hon. C. perfringens sodium sulfite ko reduce karke ferrous sulfide banata hai jo colonies ko intense jet-black color deta hai. D-Cycloserine non-clostridial background flora ko suppress karta hai. Plates ko Anaerobic Gas-Pak jars (85% N2, 10% CO2, 5% H2) mein 37°C par 24 hours incubate kiya jaata hai. Confirmation: Non-motile, nitrate reduction (+), lactose fermentation with stormy milk clot.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                C. perfringens Count (CFU/g) = Σ Black Colonies / [ (n1 + 0.1 × n2) × d ]
              </div>
              <p class="mt-2">Cooked meat stew sample: 10^-1 dilution plates showed zero black colonies under anaerobic incubation. Count < 10 CFU/g. Fully compliant with FSSAI catering safety standards.</p>`
          },
          {
            title: "Meat, Poultry, Fish & Egg Sector Complete Statutory & Quality Testing Battery Summary",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Master Sectoral Blueprint & Compliance Guide:</strong></p>
                <p class="mt-1">Ye master matrix meat, poultry, fish, seafood aur table egg sector ke sabhi critical statutory parameters, legal limit thresholds, reference test methods, aur food safety risk profiles ko FSSAI, BIS, European Commission (EC 2073/2005), aur US FDA/USDA guidelines ke anuroop ek jagah summarize karti hai.</p>
              </div>`,
            reference: "FSSAI (Food Product Standards & Food Additives) Reg 2011 / EC 2073/2005 / ISO Standards",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Master Statutory Quality Matrix:</h4>
              <div class="overflow-x-auto my-3">
                <table class="min-w-full text-xs border border-gray-300 divide-y divide-gray-200">
                  <thead class="bg-gray-100 font-bold text-gray-700">
                    <tr>
                      <th class="p-2 border">Commodity Pillar</th>
                      <th class="p-2 border">Key Testing Parameter</th>
                      <th class="p-2 border">FSSAI / EC / USDA Limit</th>
                      <th class="p-2 border">Standard Method</th>
                      <th class="p-2 border">Significance & Risk Profile</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr>
                      <td class="p-2 border font-semibold">Fresh Meat & Poultry</td>
                      <td class="p-2 border">TVB-N (Volatile Bases)</td>
                      <td class="p-2 border">Max 20.0 mg N / 100g (Fresh)</td>
                      <td class="p-2 border">ISO 937 / EC 2074/2005</td>
                      <td class="p-2 border">Proteolytic bacterial decomposition index</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Fresh Meat & Poultry</td>
                      <td class="p-2 border">Ultimate pH (DFD/PSE)</td>
                      <td class="p-2 border">pH 5.4 - 5.8 (Normal)</td>
                      <td class="p-2 border">ISO 2917 / Spear Electrode</td>
                      <td class="p-2 border">PSE watery defect (< 5.4) / DFD spoilage (> 6.0)</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Fresh Meat & Poultry</td>
                      <td class="p-2 border">M/P Added Water Ratio</td>
                      <td class="p-2 border">Max 3.6 - 3.8 (Zero added water)</td>
                      <td class="p-2 border">ISO 1442 / Kjeldahl ISO 937</td>
                      <td class="p-2 border">Brine injection & spin chiller plumping fraud</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Fresh Meat & Poultry</td>
                      <td class="p-2 border">Crude Protein (N×6.25)</td>
                      <td class="p-2 border">Min 18.0% - 22.0% (w/w)</td>
                      <td class="p-2 border">Macro-Kjeldahl / ISO 937</td>
                      <td class="p-2 border">Lean meat tissue nutritional benchmark</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Fresh Meat & Poultry</td>
                      <td class="p-2 border">Total Fat (Weibull-Stoldt)</td>
                      <td class="p-2 border">Minced Meat Max 20.0% - 25.0%</td>
                      <td class="p-2 border">ISO 1443 / Acid Hydrolysis</td>
                      <td class="p-2 border">Extracts membrane structural phospholipids</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Meat & Seafood</td>
                      <td class="p-2 border">Species Authenticity PCR</td>
                      <td class="p-2 border font-bold text-red-600">Strictly 0.0% Undeclared (Zero)</td>
                      <td class="p-2 border">ISO 20818 / Real-Time PCR</td>
                      <td class="p-2 border font-semibold text-red-600">Halal/Kosher integrity; pork/horse adulteration</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Meat & Seafood</td>
                      <td class="p-2 border">Antibiotic Residues</td>
                      <td class="p-2 border">MRL ≤ 100 µg/kg; Banned: Zero</td>
                      <td class="p-2 border">LC-MS/MS Multi-Residue</td>
                      <td class="p-2 border">AMR Superbug evolution & bone marrow toxicity</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Fish & Seafood</td>
                      <td class="p-2 border">TMA-N (Trimethylamine)</td>
                      <td class="p-2 border">Max 5.0 - 10.0 mg N / 100g</td>
                      <td class="p-2 border">Dyer Picrate Method at 410 nm</td>
                      <td class="p-2 border">Marine TMAO bacterial reduction; stale odor</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Fish & Seafood</td>
                      <td class="p-2 border">Histamine Biogenic Amine</td>
                      <td class="p-2 border font-bold text-red-600">Max 100 ppm (Scombroid fish)</td>
                      <td class="p-2 border">RP-HPLC-UV / ISO 19343</td>
                      <td class="p-2 border font-semibold text-red-600">Scombroid food poisoning; heat-stable toxin</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Fish & Seafood</td>
                      <td class="p-2 border">Toxic Heavy Metals</td>
                      <td class="p-2 border">Hg ≤ 0.5 ppm, Pb ≤ 0.3, Cd ≤ 0.1</td>
                      <td class="p-2 border">Microwave ICP-MS ISO 17294</td>
                      <td class="p-2 border">Minamata methylmercury & renal toxicities</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Cured / Processed Meats</td>
                      <td class="p-2 border">Sodium Nitrite Residue</td>
                      <td class="p-2 border">Max 100 mg/kg (ppm)</td>
                      <td class="p-2 border">ISO 2918 / Griess Diazotization</td>
                      <td class="p-2 border">Prevents carcinogenic N-Nitrosamine formation</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Cured / Processed Meats</td>
                      <td class="p-2 border">Added Phosphates (P2O5)</td>
                      <td class="p-2 border">Max 5.0 g/kg (0.5%)</td>
                      <td class="p-2 border">ISO 13730 / Molybdenum Blue</td>
                      <td class="p-2 border">Hyperphosphatemia & water retention fraud</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Processed Meats</td>
                      <td class="p-2 border">TBARS Secondary Rancidity</td>
                      <td class="p-2 border">Max 1.0 - 2.0 mg MDA / kg</td>
                      <td class="p-2 border">TBA Reaction at 532 nm</td>
                      <td class="p-2 border">Warmed-over flavor (WOF) & cytotoxic aldehydes</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Table Eggs</td>
                      <td class="p-2 border">Haugh Unit & Freshness</td>
                      <td class="p-2 border">Grade AA ≥ 72 HU; Grade A ≥ 60</td>
                      <td class="p-2 border">USDA Haugh Gauge & Weight</td>
                      <td class="p-2 border">Albumen degradation & vitelline membrane strength</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Microbiology - Hygiene</td>
                      <td class="p-2 border">Aerobic Plate Count (TPC)</td>
                      <td class="p-2 border">Carcass Max 5.0 × 10^6 CFU/g</td>
                      <td class="p-2 border">ISO 4833-1 / PCA Agar 30°C</td>
                      <td class="p-2 border">Slaughterhouse sanitary control & shelf-life</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Microbiology - Hygiene</td>
                      <td class="p-2 border">E. coli Fecal Hygiene</td>
                      <td class="p-2 border">Carcass Max 500 CFU/g; RTE Zero</td>
                      <td class="p-2 border">ISO 16649-2 / TBX Agar 44°C</td>
                      <td class="p-2 border">Visceral gut rupture & abattoir fecal pollution</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Microbiology - Pathogen</td>
                      <td class="p-2 border">Salmonella enterica</td>
                      <td class="p-2 border font-bold text-red-600">ABSENT in 25 grams (Zero)</td>
                      <td class="p-2 border">ISO 6579-1 / XLD & BGA</td>
                      <td class="p-2 border font-semibold text-red-600">Acute enteritis, bloody dysentery & bacteremia</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Microbiology - Pathogen</td>
                      <td class="p-2 border">Listeria monocytogenes</td>
                      <td class="p-2 border font-bold text-red-600">ABSENT in 25g (RTE Meats)</td>
                      <td class="p-2 border">ISO 11290-1 / ALOA Agar</td>
                      <td class="p-2 border font-semibold text-red-600">Cold chain pathogen; 30% mortality meningitis</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Microbiology - Pathogen</td>
                      <td class="p-2 border">Campylobacter jejuni/coli</td>
                      <td class="p-2 border font-bold text-red-600">ABSENT in 25g / Max 1000 CFU/g</td>
                      <td class="p-2 border">ISO 10272-1 / mCCDA 41.5°C</td>
                      <td class="p-2 border font-semibold text-red-600">Poultry diarrhea & Guillain-Barré paralysis</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Microbiology - Pathogen</td>
                      <td class="p-2 border">Staphylococcus aureus</td>
                      <td class="p-2 border">Max 100 to 1000 CFU/g</td>
                      <td class="p-2 border">ISO 6888-1 / Baird-Parker</td>
                      <td class="p-2 border">Heat-stable pre-formed enterotoxins</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Microbiology - Pathogen</td>
                      <td class="p-2 border">Clostridium perfringens</td>
                      <td class="p-2 border">Cooked Meats Max 100 CFU/g</td>
                      <td class="p-2 border">ISO 7937 / TSC Anaerobic</td>
                      <td class="p-2 border">Spore germination during slow cooling</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-xs text-gray-500 mt-2">*Note: This master testing battery represents standard statutory compliance requirements under FSSAI, BIS, European Commission (EC 2073/2005), and US FSIS. Consignments failing any zero-tolerance pathogen (Salmonella, Listeria) or drug residue are subject to immediate legal rejection, seizure, and destruction.</p>`
          }
        ]
      };

export const meatPoultryEn = {
        title: "Meat, Poultry, Fish, Seafood & Egg Products (Fresh Meat, Dressed Chicken, Mutton, Fish, Marine Seafood, Cured Meats & Eggs)",
        tests: [
          {
            title: "Determination of Total Volatile Basic Nitrogen (TVB-N) by Steam Distillation in Meat & Fish",
            purpose: `<div class="bg-rose-50 border border-rose-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Proteolytic Spoilage & Microbial Decomposition:</strong> Post-mortem storage of meat (chicken, mutton, beef) and fish allows psychrotrophic spoilage bacteria (Pseudomonas, Shewanella putrefaciens) and endogenous cellular proteases to break down muscle proteins and free amino acids, generating volatile basic nitrogenous compounds—chiefly Ammonia (NH3), Dimethylamine (DMA), and Trimethylamine (TMA).</li>
                  <li><strong>FSSAI & European Commission (EC 2074/2005) Statutory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fresh Dressed Poultry / Mutton:</strong> Max <strong>20.0 mg N / 100g</strong> (Completely Fresh); 20–30 mg/100g (Acceptable for immediate processing); > 30 mg/100g (Decomposed / Unfit for consumption).</li>
                      <li><strong>Fresh White Fish (Cod, Haddock, Carp, Rohu, Katla):</strong> Max <strong>25.0 to 30.0 mg N / 100g</strong>.</li>
                      <li><strong>Fatty Pelagic Fish (Mackerel, Sardine, Tuna):</strong> Max <strong>35.0 mg N / 100g</strong>.</li>
                    </ul>
                  </li>
                  <li><strong>Consumer Health Risks:</strong> High TVB-N indicates advanced proteolytic breakdown, high biogenic amine formation, and risks of severe gastroenteritis and histamine toxicity.</li>
                </ul>
              </div>`,
            reference: "ISO 937 / EC Regulation 2074/2005 / IS 5960 / FSSAI Meat Manual 05",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>A 10.0g homogenized meat or fish portion is blended with 90 mL of 6% perchloric acid (HClO4) or 7.5% trichloroacetic acid (TCA) to completely precipitate structural proteins. The filtered, deproteinized acid extract is transferred to a Kjeldahl steam distillation unit and mildly alkalized with a magnesium oxide (MgO) suspension to pH 9.5 (avoiding strong NaOH to prevent non-enzymatic alkaline hydrolysis of intact peptide bonds). Liberated volatile bases are steam-distilled into 25 mL of 3% boric acid containing Tashiro indicator, and titrated against standardized 0.01 N H2SO4 or HCl.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                TVB-N (mg N / 100g meat) = [ (V_sample - V_blank) × Normality_acid × 14.007 × Dilution Factor × 100 ] / W_sample
              </div>
              <p class="mt-2">Example: 10.0g fresh chicken breast extract requires 8.20 mL of 0.0102 N H2SO4 (Blank = 0.35 mL). Net volume = 7.85 mL. TVB-N = [ 7.85 × 0.0102 × 14.007 × 10 × 100 ] / 10.0 = 11.22 mg N / 100g. Freshness status: Completely FRESH (FSSAI statutory ceiling ≤ 20.0 mg N / 100g).</p>`
          },
          {
            title: "Determination of Trimethylamine Nitrogen (TMA-N) in Marine Fish & Seafood (Dyer Picrate Method)",
            purpose: `<div class="bg-cyan-50 border border-cyan-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Marine Fish Spoilage Specificity:</strong> Marine teleost fish and cephalopods accumulate natural Trimethylamine Oxide (TMAO) for cellular osmoregulation. During chilled post-mortem storage, psychrotrophic bacteria (Shewanella putrefaciens, Photobacterium phosphoreum) utilize TMAO as an alternative terminal electron acceptor in anaerobic respiration, reducing it to volatile Trimethylamine (TMA).</li>
                  <li><strong>Characteristic 'Stale Fishy' Odor:</strong> Volatile TMA is the single chemical molecule responsible for the pungent, stale 'fishy' odor of decomposing seafood. Freshly landed fish contains zero or negligible TMA.</li>
                  <li><strong>Statutory & Freshness Grading:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Prime Quality Fresh Fish:</strong> TMA-N < <strong>1.5 mg N / 100g</strong>.</li>
                      <li><strong>Acceptable Freshness:</strong> TMA-N 1.5 to <strong>5.0 mg N / 100g</strong>.</li>
                      <li><strong>Spoiled / Condemned Fish:</strong> TMA-N > <strong>10.0 to 15.0 mg N / 100g</strong> (Immediate trade rejection).</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "AOAC 971.14 / Dyer Picrate Spectrophotometric Method / FSSAI Fish Manual 06",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>Deproteinized fish muscle extract in 7.5% TCA is treated with neutral formaldehyde solution, which reacts with and masks primary (ammonia) and secondary amines, preventing interference. Addition of 50% potassium carbonate (K2CO3) alkalizes the solution, releasing free tertiary amine (TMA), which is extracted into anhydrous toluene. The dehydrated toluene layer reacts with anhydrous 0.02% picric acid, forming yellow Trimethylamine Picrate salt whose optical absorbance is read at 410 nm.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                TMA-N (mg N / 100g fish) = [ (Absorbance at 410 nm × Calibration Slope Factor mg N) / W_sample in g ] × 100
              </div>
              <p class="mt-2">Example: Chilled Pomfret sample shows Absorbance = 0.185 at 410 nm (Standard curve slope factor = 0.0125 mg N/AU). Sample mass = 10.0g. TMA-N = [ (0.185 × 0.0125) / 10.0 ] × 100 = 2.31 mg N / 100g. Freshness Grade: Acceptable for immediate sale (Statutory limit ≤ 5.0 mg N / 100g).</p>`
          },
          {
            title: "Quantification of Histamine Biogenic Amine in Scombroid Fish by Reversed-Phase HPLC-UV",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Scombroid Fish Poisoning Prevention:</strong> Pelagic scombroid fish (Tuna, Mackerel, Bonito, Kingfish, Mahi-mahi) contain abundant free L-histidine in their dark muscle. Temperature abuse above 4°C allows bacteria (Morganella morganii, Enterobacter aerogenes) to express histidine decarboxylase, converting histidine into toxic Histamine.</li>
                  <li><strong>Heat Stability:</strong> Histamine is completely heat-stable — canning, autoclaving, boiling, or frying does NOT destroy it! Ingestion triggers acute scombroid poisoning: intense throbbing headaches, facial flushing, cutaneous erythema, bronchospasm, and cardiac arrhythmias within minutes.</li>
                  <li><strong>FSSAI & US FDA Statutory Action Thresholds:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>FSSAI Statutory Ceiling:</strong> Max <strong>100 mg/kg (ppm)</strong> for fish; Max 200 mg/kg in fermented fish sauce.</li>
                      <li><strong>US FDA Action Defect Level:</strong> Defect level <strong>50 ppm</strong>; Toxicity threshold <strong>200 ppm</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "AOAC 977.13 / ISO 19343:2017 / FSSAI Fish Manual 06 / Codex Stan 302",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle (HPLC-UV / DAD):</h4>
              <p>10.0g homogenized fish fillet is extracted with 75% methanol at 60°C in an ultrasonic bath for 30 minutes. The extract is passed through an ion-exchange or C18 solid phase extraction (SPE) cartridge to eliminate matrix interferences. Purified biogenic amines are derivatized with dansyl chloride or o-phthalaldehyde (OPA). Separation is performed on a C18 reverse-phase column (250 × 4.6 mm, 5 µm) with a water:acetonitrile gradient at 1.0 mL/min and UV detection at 254 nm or fluorescence detection (Ex 340 nm, Em 450 nm).</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Histamine Concentration (mg/kg or ppm) = [ (Peak Area_sample × Standard Conc. µg/mL × Final Vol. mL) / (Peak Area_std × W_sample in g) ]
              </div>
              <p class="mt-2">Example: Yellowfin Tuna loin sample yields an HPLC peak area corresponding to 18.5 mg/kg (ppm) histamine. Well within the statutory ceiling of 100 mg/kg; certified safe for export and commercial distribution.</p>`
          },
          {
            title: "Determination of Ultimate Muscle pH and DFD / PSE Meat Quality Grading (ISO 2917)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Post-Mortem Glycolysis & Meat Texture:</strong> Following slaughter, anaerobic glycogen breakdown generates lactic acid, driving the pH of living muscle down from 7.2 to an ultimate pH (pH_u) of 5.4–5.8 after 24 hours at chilling temperatures.</li>
                  <li><strong>PSE (Pale, Soft, Exudative) Meat Defect:</strong> Acute pre-slaughter stress triggers rapid lactic acid accumulation while carcass temperature is still warm (> 35°C), denaturing myofibrillar proteins. The meat becomes pale, soft, and watery with severe drip loss.</li>
                  <li><strong>DFD (Dark, Firm, Dry) Meat Defect:</strong> Chronic exhaustion or long transport depletes glycogen before slaughter. Minimal lactic acid forms post-mortem, leaving pH_u > 6.0–6.2. DFD meat has a high water-binding capacity but suffers rapid microbial spoilage.</li>
                  <li><strong>Grading Benchmarks:</strong> Normal prime meat: <strong>pH 5.4 to 5.8</strong>; PSE defective meat: <strong>pH < 5.3</strong>; DFD defective meat: <strong>pH > 6.0</strong>.</li>
                </ul>
              </div>`,
            reference: "ISO 2917:1999 / IS 5960 (Part 1) / AOAC 981.12",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>A spear-type solid glass combination puncture pH electrode with automatic temperature compensation (calibrated at pH 4.01 and 7.00) is inserted directly 2.0 cm into the carcass core (Longissimus dorsi in red meat or Pectoralis major in poultry) 24 hours post-mortem. Alternatively, 10.0g homogenized meat is dispersed in 90 mL of neutral 0.15 M KCl solution, and electrometric pH is recorded on a digital benchtop pH meter.</p>

              <h4 class="font-semibold mt-4 mb-2">Grading Criteria:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                pH 5.4 to 5.8: Normal High-Quality Meat (Optimal tenderness, juiciness, and curing properties)<br>
                pH < 5.3: PSE Meat Defect (High drip loss, poor emulsification capacity)<br>
                pH > 6.0: DFD Meat Defect (High risk of bacterial spoilage; truncated shelf-life)
              </div>
              <p class="mt-2">Example: Chilled broiler chicken breast measured 24 hours post-mortem exhibits pH = 5.68. Classified as normal high-grade meat with optimal myofibrillar water binding.</p>`
          },
          {
            title: "Determination of Water Holding Capacity (WHC) and Drip Loss in Meat (Grau-Hamm Method)",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Juiciness, Tenderness & Processing Yield:</strong> Muscle tissue contains approximately 75% water held within the steric lattice of actin-myosin filaments. Water Holding Capacity (WHC) measures muscle tissue's ability to retain its intrinsic water during cutting, storage, and cooking.</li>
                  <li><strong>Economic Purge & Texture Defects:</strong> Poor WHC leads to excessive weeping of reddish purge fluid in retail trays, high cooking loss, rubbery dry cooked texture, and emulsion breakdown during sausage manufacturing.</li>
                  <li><strong>Standard Quality Limits:</strong> Drip loss in fresh poultry/mutton after 48h at 4°C: <strong>Max 1.5% to 3.0%</strong>. Grau-Hamm WHC: High-quality meat expresses < 30% free water area; PSE meat expresses > 50% free water area.</li>
                </ul>
              </div>`,
            reference: "Grau-Hamm Filter Paper Press Method (1953) / ISO 1442 / Honikel Bag Method (1998)",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle (Grau-Hamm Method):</h4>
              <p>An accurately weighed 300 mg (0.300g ± 0.005g) fresh intact meat core is placed on a pre-conditioned Whatman No. 1 filter paper disc between two plexiglass plates. A standard 1.0 kg load (or 35 kg/cm2 mechanical press) is applied for exactly 5.0 minutes. Free capillary water is squeezed out, forming two concentric rings: an inner compressed meat film area (M) and an outer wetted ring (T). Areas are quantified using a digital planimeter or image analysis software.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Expressed Juice Area (cm2) = Total Moisture Wetted Area (T) - Meat Film Area (M)<br><br>
                Free Water % = [ (T - M) × 8.44 / Total Sample Moisture mg ] × 100<br><br>
                Water Holding Capacity (WHC %) = 100 - Free Water %
              </div>
              <p class="mt-2">Example: 0.300g mutton sample containing 225 mg moisture (75%). Pressed wetted ring = 8.5 cm2, meat film = 4.2 cm2. Net juice area = 4.3 cm2. Free water = (4.3 × 8.44 / 225) × 100 = 16.13%. WHC = 100 - 16.13 = 83.87%. Demonstrates superior water binding capacity.</p>`
          },
          {
            title: "Moisture Content and Moisture-to-Protein (M/P) Ratio for Added Water Adulteration Screening",
            purpose: `<div class="bg-sky-50 border border-sky-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Detection of Water Injection / Plumping Fraud:</strong> Carcasses and boneless cuts are frequently soaked in cold chill tanks or injected with polyphosphate-brine solutions using multi-needle injectors, artificially inflating meat weight by 15% to 30%.</li>
                  <li><strong>Physiologically Invariant M/P Ratio:</strong> In genuine unadulterated muscle tissue, the biological ratio of moisture to protein is strictly conserved within narrow limits (typically 3.5 to 3.8). Water injection elevates moisture and dilutes protein, driving the M/P ratio well above 4.0.</li>
                  <li><strong>Statutory Standards (FSSAI & USDA FSIS):</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fresh Chicken Breast:</strong> M/P Ratio <strong>Max 3.6 to 3.8</strong>; Total Moisture Max 75.0%.</li>
                      <li><strong>Fresh Chicken Thigh:</strong> M/P Ratio <strong>Max 3.8 to 4.0</strong>.</li>
                      <li><strong>Fresh Red Meat (Mutton, Beef):</strong> M/P Ratio <strong>Max 3.5 to 3.7</strong>.</li>
                      <li><strong>Added Water:</strong> Unlabelled added water must be <strong>0.0% (Strictly Zero)</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 1442:1997 / ISO 937 (Protein) / USDA FSIS Chemistry Guide / IS 5960",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>5.0g minced meat mixed with pre-calcined acid-washed sea sand is dried in an air oven at 105°C ± 2°C to constant mass (4 to 5 hours) to determine gravimetric moisture. Total crude protein (N × 6.25) is quantified in duplicate on a 1.0g portion via the Kjeldahl method.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                M/P Ratio = Moisture % / Crude Protein %<br><br>
                Added Water % = Moisture % - (Natural Physiological Factor × Crude Protein %)
              </div>
              <p class="mt-2">Example: Chicken breast sample shows Moisture = 74.2%, Protein = 21.8%. M/P Ratio = 74.2 / 21.8 = 3.40. Added water = 74.2 - (3.6 × 21.8) = -4.28 (Zero added water). Certified genuine, un-injected natural chicken.</p>`
          },
          {
            title: "Determination of Total Crude Protein in Meat & Poultry Products (Macro-Kjeldahl Method, N × 6.25)",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Nutritional Grading & Meat Flesh Purity:</strong> Protein is the defining nutritional constituent of meat. In comminuted meat products (sausages, patties, nuggets), expensive lean muscle meat is frequently replaced with cheap collagenous connective tissue (trachea, skin, tendons), cereal starches, or soy protein isolate.</li>
                  <li><strong>Lean Meat Flesh Equivalent (LFE):</strong> FSSAI and Codex enforce strict protein floors to protect consumer nutrition and eliminate economic adulteration.</li>
                  <li><strong>FSSAI Statutory Minimums:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Raw Dressed Chicken Breast:</strong> Min <strong>20.0% to 22.0% (w/w)</strong>.</li>
                      <li><strong>Raw Mutton / Chevon:</strong> Min <strong>18.0% to 20.0% (w/w)</strong>.</li>
                      <li><strong>Canned Meat Products:</strong> Min <strong>16.0% (w/w)</strong>.</li>
                      <li><strong>Cooked Sausages / Frankfurters:</strong> Min <strong>12.0% (w/w)</strong> pure meat protein.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 937:1978 / AOAC 928.08 / IS 5960 (Part 3) / FSSAI Meat Manual 05",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>2.0g homogenized meat is digested with 25 mL concentrated H2SO4 and 10g K2SO4 + 0.5g CuSO4·5H2O catalyst on a digestion block at 420°C for 90 minutes until transparent pale-green. Organic nitrogen converts to (NH4)2SO4. The cooled digest is treated with 40% NaOH and steam-distilled into 25 mL 4% boric acid with Tashiro indicator. Titration against standardized 0.1 N HCl quantifies total nitrogen.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Total Nitrogen % = [ (V_sample - V_blank) × Normality_HCl × 0.014007 / W_sample in g ] × 100<br><br>
                Crude Protein % (w/w) = Total Nitrogen % × 6.25 (Meat Standard Conversion Factor)
              </div>
              <p class="mt-2">Example: 2.000g lean mutton sample requires 46.50 mL 0.1005 N HCl (Blank = 0.20 mL). Nitrogen = [ (46.30 × 0.1005 × 0.014007) / 2.000 ] × 100 = 3.258% N. Crude Protein = 3.258 × 6.25 = 20.36% (w/w). Conforms to high-grade mutton standard.</p>`
          },
          {
            title: "Determination of Total Fat (Total Lipids) by Acid Hydrolysis & Weibull-Stoldt Method (ISO 1443)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Exhaustive Extraction of Chemically Bound Lipids:</strong> Direct Soxhlet extraction with non-polar solvents fails on meat because substantial lipids exist as structural membrane phospholipids (lecithin, sphingomyelin) tightly cross-linked to myofibrillar proteins.</li>
                  <li><strong>Weibull-Stoldt Hydrolysis:</strong> Digestion with boiling 4 N HCl breaks protein-lipid complexes, releasing 100% of bound structural lipids for quantitative petroleum ether extraction.</li>
                  <li><strong>FSSAI Statutory Ceilings:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Minced Meat / Ground Meat:</strong> Fat Max <strong>20.0% to 25.0% (w/w)</strong>.</li>
                      <li><strong>Cooked Sausages / Frankfurters:</strong> Fat Max <strong>25.0% to 30.0% (w/w)</strong>.</li>
                      <li><strong>Lean Poultry Cuts:</strong> Breast 1.5% to 3.0%; Thigh 6.0% to 9.0%.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 1443:1973 / IS 5960 (Part 2) / AOAC 991.36 (Weibull-Stoldt Method)",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>5.0g minced meat is boiled under reflux with 50 mL 4 N HCl for 60 minutes. The hot digest is diluted with boiling water and filtered through wet Whatman No. 541 filter paper until chloride-free. The paper and fat residue are dried at 100°C for 1 hour, placed in a Soxhlet thimble, and extracted with petroleum ether (40-60°C) for 4 hours. Solvent is distilled off, and the extracted fat is dried at 102°C to constant mass.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Total Fat % (w/w) = [ (W_flask_fat - W_empty_flask) / W_sample in g ] × 100
              </div>
              <p class="mt-2">Example: 5.000g Pork Sausage yields 1.1900g extracted dry fat. Total Fat % = (1.1900 / 5.000) × 100 = 23.80% (w/w). Conforms to FSSAI maximum ceiling (≤ 25.0%).</p>`
          },
          {
            title: "Determination of Total Ash and Bone Fragment Content (Calcium Index) in Meat Products (ISO 936)",
            purpose: `<div class="bg-stone-50 border border-stone-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Mechanically Separated Meat (MSM) Adulteration:</strong> Mechanically Deboned/Separated Meat (MDM/MSM) machines scrape bone frames under intense pressure. Bone matrix fractures, releasing microscopic bone fragments and elevated calcium phosphate into comminuted meat.</li>
                  <li><strong>Health & Dental Hazards:</strong> Microscopic sharp bone shards can damage teeth and cause gastrointestinal abrasions. High bone ash indicates low-quality scrap meat substitution.</li>
                  <li><strong>Statutory Standards:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Pure Hand-Deboned Meat:</strong> Total Ash <strong>0.8% to 1.2%</strong>; Calcium Max <strong>0.015% (150 mg/kg)</strong>.</li>
                      <li><strong>MSM Meat (FSSAI & EC 853/2004 Limit):</strong> Calcium content strictly <strong>Max 0.10% (1000 mg/kg)</strong>. Higher levels confirm unlawful bone crushing.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 936:1998 / IS 5960 / AOAC 920.153 / EC Regulation 853/2004",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>5.0g homogenized meat in a porcelain crucible is pre-charred with 2 mL olive oil and calcined in a muffle furnace at 550°C ± 20°C for 6 hours until white carbon-free ash is obtained. Total ash is weighed gravimetrically. The ash is dissolved in 10 mL 6 N HCl, and Calcium ion (Ca2+) is quantified via ICP-OES or EDTA complexometric titration.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Total Ash % (w/w) = [ (W_ash - W_dish) / W_sample ] × 100<br><br>
                Bone Equivalent % = Calcium Content % × 3.57 (Hydroxylapatite factor)
              </div>
              <p class="mt-2">Example: Chicken sausage sample yields 1.10% total ash and 420 mg/kg Calcium (0.042%). Bone equivalent = 0.15%. Conforms strictly to MSM ceiling (< 0.10% Ca).</p>`
          },
          {
            title: "Lipid Oxidation & Secondary Rancidity by TBARS Test (Malondialdehyde at 532 nm in Meat)",
            purpose: `<div class="bg-orange-50 border border-orange-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Warmed-Over Flavor (WOF) & Secondary Oxidation:</strong> In cooked, restructured, or frozen meats, heme iron (Fe2+) and thermal processing catalyze the autoxidation of polyunsaturated membrane phospholipids. Hydroperoxides break down into cytotoxic aldehydes, predominantly Malondialdehyde (MDA).</li>
                  <li><strong>Cytotoxicity & Off-Flavors:</strong> MDA cross-links muscle proteins and accelerates arterial atherogenesis. Sensory 'cardboard-like' warmed-over flavor develops when TBARS exceeds sensory thresholds.</li>
                  <li><strong>Sensory & Quality Thresholds:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fresh Chilled Meat:</strong> TBARS < <strong>0.5 mg MDA / kg</strong> meat.</li>
                      <li><strong>Acceptable Frozen Storage:</strong> TBARS < <strong>1.0 mg MDA / kg</strong>.</li>
                      <li><strong>Rancid / Unfit for Consumption:</strong> TBARS > <strong>2.0 to 2.5 mg MDA / kg</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "Witte et al. (1970) / Tarladgis Steam Distillation / ISO / FSSAI Meat Manual 05",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>5.0g minced meat is homogenized with 20 mL 10% trichloroacetic acid (TCA) and filtered. 5.0 mL of clear filtrate is mixed with 5.0 mL 0.02 M 2-thiobarbituric acid (TBA) reagent and heated in a boiling water bath at 95°C for 30 minutes. One molecule of MDA reacts with two molecules of TBA, forming a pink-red chromogen. Absorbance is measured at 532 nm against a reagent blank.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                TBARS Value (mg Malondialdehyde / kg meat) = Absorbance at 532 nm × 7.8 (Calibration Constant)
              </div>
              <p class="mt-2">Example: Frozen mutton patty stored for 60 days gives Absorbance = 0.115 at 532 nm. TBARS = 0.115 × 7.8 = 0.897 mg MDA / kg. Within acceptable shelf-life threshold (≤ 1.0 mg/kg).</p>`
          },
          {
            title: "Quantification of Nitrite and Nitrate Preservatives in Cured Meats by Griess Diazotization (ISO 2918 & 3091)",
            purpose: `<div class="bg-purple-50 border border-purple-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Botulism Inhibition vs Carcinogenic Nitrosamines:</strong> Sodium nitrite (NaNO2) and nitrate (NaNO3) are curing salts added to ham, bacon, and sausages to inhibit Clostridium botulinum spore outgrowth and generate cured-pink nitrosyl-hemochrome.</li>
                  <li><strong>Nitrosamine Cancer Hazard:</strong> Excess residual nitrite reacts with secondary amines during high-heat cooking (frying), forming volatile N-Nitrosamines (NDMA), which are potent hepatocarcinogens.</li>
                  <li><strong>FSSAI & Codex Statutory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Residual Sodium Nitrite (NaNO2):</strong> Max <strong>100 mg/kg (ppm)</strong> in cured meat products.</li>
                      <li><strong>Residual Sodium Nitrate (NaNO3):</strong> Max <strong>250 mg/kg (ppm)</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 2918:1975 (Nitrite) / ISO 3091:1975 (Nitrate) / AOAC 973.31 / FSSAI Meat Manual 05",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle (Griess Reaction):</h4>
              <p>Nitrite (NO2-) in deproteinized meat extract diazotizes sulfanilamide in acidic medium, forming a diazonium salt. Coupling with N-(1-naphthyl)ethylenediamine dihydrochloride (NED) produces a bright magenta azo dye. Absorbance is measured at 540 nm. For nitrate determination, the extract is reduced to nitrite via a metallic cadmium reduction column prior to diazotization.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Sodium Nitrite (mg/kg or ppm) = [ (Absorbance at 540 nm × Standard Slope mg/L × Dilution Vol. mL) / W_sample in g ]
              </div>
              <p class="mt-2">Example: 10.0g Chicken Salami sample: Absorbance = 0.285 (Calibration curve gives 4.8 mg/L in 100 mL flask). Nitrite = (4.8 × 100) / 10.0 = 48.0 mg/kg (ppm). Well within the FSSAI ceiling limit of ≤ 100 ppm.</p>`
          },
          {
            title: "Determination of Added Polyphosphates and Total Phosphorus as P2O5 in Meat Products (ISO 13730)",
            purpose: `<div class="bg-teal-50 border border-teal-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Water Retention Chemical Adulteration:</strong> Polyphosphates (STPP, TSPP) dissociate actomyosin cross-bridges, expanding myofibrillar filament spacing and allowing comminuted meats to retain 20% to 35% excess water.</li>
                  <li><strong>Cardiovascular & Mineral Leaching Hazards:</strong> Excessive dietary phosphate impairs calcium-phosphorus metabolism, promoting bone demineralization and vascular calcification.</li>
                  <li><strong>FSSAI & Codex Statutory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Total Added Phosphates:</strong> Max <strong>5.0 g/kg (0.5% or 5000 ppm)</strong> as P2O5.</li>
                      <li><strong>Natural Physiological Baseline:</strong> Approximately <strong>1.5 to 2.2 g P2O5 / kg</strong> in unprocessed lean meat.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 13730:1996 / IS 5960 / AOAC 969.31 (Molybdenum Blue Spectrophotometry)",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>Meat sample is converted to orthophosphate via dry ashing or nitric-sulfuric acid wet digestion. Orthophosphate reacts with ammonium molybdate in acidic medium, forming phosphomolybdic acid, which is reduced by ascorbic acid to deep blue Molybdenum Blue. Absorbance is measured at 690 nm or 820 nm.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Total Phosphorus as P2O5 (g/kg) = [ (Absorbance × Factor mg P2O5 × Dilution mL) / (W_sample in g × 1000) ]<br><br>
                Added Phosphate g/kg = Total P2O5 - (Crude Protein % × 0.0106)
              </div>
              <p class="mt-2">Example: Cooked Ham sample: Total P2O5 = 4.20 g/kg, Protein = 18.0% (Natural baseline P2O5 = 1.91 g/kg). Added phosphate = 4.20 - 1.91 = 2.29 g/kg. Conforms to FSSAI limit of ≤ 5.0 g/kg.</p>`
          },
          {
            title: "Determination of Multi-Class Veterinary Antibiotic Residues in Meat by LC-MS/MS",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Antimicrobial Resistance (AMR) Threat:</strong> Misuse of veterinary antibiotics (Tetracyclines, Sulfonamides, Fluoroquinolones, Beta-lactams) as growth promoters without observing withdrawal periods leaves toxic residues in commercial meat.</li>
                  <li><strong>Human Health Hazards:</strong> Ingesting antibiotic residues causes gut dysbiosis, allergic anaphylaxis, aplastic anemia (chloramphenicol), and drives the selection of Multi-Drug Resistant superbugs.</li>
                  <li><strong>FSSAI Maximum Residue Limits (MRLs):</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Banned Substances (Zero Tolerance):</strong> Chloramphenicol, Nitrofurans — Strictly <strong>NOT DETECTED (< 0.3 ppb)</strong>.</li>
                      <li><strong>Tetracyclines & Sulfonamides:</strong> MRL Max <strong>100 µg/kg (ppb)</strong>.</li>
                      <li><strong>Fluoroquinolones:</strong> MRL Max <strong>100 µg/kg (ppb)</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 22174 / AOAC 2020.04 / FSSAI Contaminants Regulations",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle (QuEChERS & LC-MS/MS):</h4>
              <p>5.0g homogenized meat is extracted with 0.1% formic acid in acetonitrile:water (80:20) using QuEChERS partitioning salts (MgSO4 + NaCl). Lipids are removed via dispersive SPE with C18 and PSA sorbents. Target residues are separated on an RP-C18 column and detected on a Triple-Quadrupole Mass Spectrometer operating in positive electrospray ionization (ESI+) MRM mode.</p>

              <h4 class="font-semibold mt-4 mb-2">Compliance Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Regulated antibiotics: Concentration ≤ 100 µg/kg MRL.<br>
                Banned substances (Chloramphenicol, Nitrofurans): NOT DETECTED (< 0.3 µg/kg).
              </div>
              <p class="mt-2">Example: Broiler chicken breast shows Oxytetracycline = 14.2 µg/kg (below 100 µg/kg MRL); Chloramphenicol = Not Detected. Batch conforms to statutory regulations.</p>`
          },
          {
            title: "Determination of Toxic Heavy Metals (Pb, Cd, As, Hg) in Meat & Seafood by Microwave ICP-MS",
            purpose: `<div class="bg-zinc-50 border border-zinc-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Bioaccumulation & Biomagnification:</strong> Predatory marine fish (Tuna, Swordfish) accumulate organic methylmercury. Livestock and poultry bioaccumulate Lead (Pb) and Cadmium (Cd) from industrial fodder and water into their liver and kidneys.</li>
                  <li><strong>Chronic Neurotoxic & Renal Pathologies:</strong> Methylmercury causes severe central nervous system degeneration; Cadmium causes proximal renal tubular dysfunction (Itai-itai disease); Lead induces encephalopathy and cognitive decline.</li>
                  <li><strong>FSSAI Maximum Statutory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fish & Seafood:</strong> Total Mercury Max <strong>0.5 mg/kg</strong> (Predatory fish 1.0 mg/kg); Cadmium Max <strong>0.1 to 0.3 mg/kg</strong>; Lead Max <strong>0.3 mg/kg</strong>.</li>
                      <li><strong>Meat & Poultry Flesh:</strong> Lead Max <strong>0.1 mg/kg</strong>; Cadmium Max <strong>0.05 mg/kg</strong>.</li>
                      <li><strong>Liver & Kidney Offal:</strong> Lead Max <strong>0.5 mg/kg</strong>; Cadmium Max <strong>1.0 mg/kg</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 17294-2:2016 / AOAC 2015.01 / FSSAI Contaminants Regulations",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>0.500g sample is digested with 6 mL sub-boiling HNO3 and 2 mL H2O2 in a high-pressure microwave digestion vessel at 200°C for 30 minutes. Diluted digest is analyzed on an Inductively Coupled Plasma Mass Spectrometer (ICP-MS) with an argon plasma torch (6000–8000 K) and helium collision cell (KED mode) to remove polyatomic interferences (40Ar35Cl on 75As).</p>

              <h4 class="font-semibold mt-4 mb-2">Compliance Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Isotopes Monitored: 208Pb, 111Cd, 75As, 202Hg.<br>
                Result: All heavy metals below FSSAI statutory maximum limits.
              </div>
              <p class="mt-2">Example: Export Tiger Prawn sample: Pb = 0.082 mg/kg (Limit 0.30), Cd = 0.045 mg/kg (Limit 0.10), Hg = 0.065 mg/kg (Limit 0.50). Conforms fully to FSSAI and European Union import standards.</p>`
          },
          {
            title: "Identification of Meat Species Adulteration & Authenticity by Real-Time PCR (ISO 20818)",
            purpose: `<div class="bg-rose-50 border border-rose-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Religious, Cultural & Ethical Authenticity:</strong> Unlawful substitution of meat species—such as blending cheap Pork (porcine) into Halal/Kosher Mutton or Chicken, or Horse meat into Beef—violates religious laws and triggers social unrest.</li>
                  <li><strong>Economic Fraud Prevention:</strong> Cheap buffalo/cow meat is fraudulently substituted for premium goat (chevon) or sheep (mutton) in minced meats and cooked products where visual discrimination is impossible.</li>
                  <li><strong>Statutory Mandate:</strong> <strong>Strictly 0.0% Undeclared Foreign Species (Zero Tolerance)</strong> with analytical detection sensitivity down to <strong>0.1% (w/w)</strong>.</li>
                </ul>
              </div>`,
            reference: "ISO 20818:2018 / ISO 21571 / AOAC 2016.02 / FSSAI Meat Manual 05",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle (TaqMan Real-Time PCR):</h4>
              <p>Genomic and mitochondrial DNA is extracted from 200 mg meat using CTAB or silica spin columns. High-copy mitochondrial targets (Cytochrome b, 16S rRNA) are amplified in a multiplex Real-Time PCR instrument using species-specific primers and dual-labeled fluorogenic TaqMan probes (FAM for Pork, VIC for Beef, CY5 for Mutton, ROX for Horse, HEX for Internal Positive Control).</p>

              <h4 class="font-semibold mt-4 mb-2">Diagnostic Thresholds:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Ct < 35.0 with sigmoidal amplification curve: Target Species DETECTED.<br>
                Ct ≥ 38.0 or flat baseline: Target Species NOT DETECTED (Limit of Detection 0.1% w/w).
              </div>
              <p class="mt-2">Example: Minced Chicken Keema sample: Chicken probe amplified at Ct = 18.2; Porcine (Sus scrofa) probe showed flat baseline (Ct > 40.0); Bovine probe showed flat baseline. Authenticity certified: 100% Pure Chicken.</p>`
          },
          {
            title: "Evaluation of Table Egg Freshness & Quality: Haugh Unit, Yolk Index & Air Cell Depth (USDA / ISO)",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Internal Albumen Degradation & Aging:</strong> In freshly laid eggs, thick albumen is a firm gel maintained by the ovomucin-lysozyme complex. During storage, CO2 and moisture escape through shell pores, elevating internal pH from 7.6 to 9.5 and hydrolyzing ovomucin into watery thin albumen.</li>
                  <li><strong>Yolk Flattening & Membrane Weakening:</strong> Water migrates from albumen into the yolk, stretching and weakening the vitelline membrane until the yolk flattens and ruptures upon cracking.</li>
                  <li><strong>USDA & FSSAI Quality Grades:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Grade AA (Super Fresh):</strong> Haugh Unit <strong>≥ 72</strong>; Air cell depth < 3.2 mm.</li>
                      <li><strong>Grade A (High Quality Commercial):</strong> Haugh Unit <strong>60 to 71</strong>; Air cell depth 3.2 to 4.8 mm.</li>
                      <li><strong>Grade B (Standard):</strong> Haugh Unit <strong>31 to 59</strong>; Air cell depth > 4.8 mm.</li>
                      <li><strong>Inedible / Stale:</strong> Haugh Unit < <strong>31</strong>; Yolk Index < 0.25 (Rotten).</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "USDA Agricultural Handbook No. 75 / IS 10382 / ISO Standards",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>Egg mass (W in grams) is recorded. Air cell depth is measured via candling. The egg is cracked onto a level glass breakout table. Thick albumen height (H in mm) is measured 1.0 cm from the yolk margin using a precision digital micrometer Haugh gauge. Yolk height and diameter are measured to determine Yolk Index.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Haugh Unit (HU) = 100 × log10 [ H - 1.7 × W^0.37 + 7.6 ]<br><br>
                Yolk Index (YI) = Yolk Height (mm) / Mean Yolk Diameter (mm)
              </div>
              <p class="mt-2">Example: Egg weight W = 58.5g; thick albumen height H = 6.8 mm. HU = 100 × log10 [ 6.8 - 1.7 × (58.5)^0.37 + 7.6 ] = 82.8 HU. Commercial Grade: USDA Grade AA (Exceptional Freshness).</p>`
          },
          {
            title: "Enumeration of Total Aerobic Mesophilic & Psychrotrophic Plate Count in Chilled Meat (ISO 4833-1)",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Sanitary Hygiene & Process Control:</strong> Aerobic Plate Count (APC at 30°C) evaluates abattoir slaughterhouse sanitation, carcass dressing hygiene, and cold chain maintenance.</li>
                  <li><strong>Psychrotrophic Spoilage at 4°C:</strong> Under refrigeration, psychrotrophs (Pseudomonas fragi, Brochothrix thermosphacta) multiply. When counts reach 10^7 CFU/g, off-odors emerge; at 10^8 CFU/g, visual surface slime appears.</li>
                  <li><strong>FSSAI & EU Process Hygiene Thresholds:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Raw Poultry / Mutton Carcasses:</strong> Satisfactory: < <strong>5.0 × 10^5 CFU/g</strong>; Max limit: <strong>5.0 × 10^6 CFU/g</strong>.</li>
                      <li><strong>Cooked Ready-to-Eat Meats:</strong> Max <strong>1.0 × 10^4 CFU/g</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 4833-1:2013 / ISO 17410:2019 / FSSAI Microbiological Manual 14",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>25.0g meat is homogenized in 225 mL sterile Peptone Salt Diluent. Serial decimal dilutions are pour-plated in duplicate with molten Plate Count Agar (PCA, 45°C). Mesophiles are incubated at 30°C ± 1°C for 72 hours; psychrotrophs at 6.5°C for 10 days.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                N (CFU/g) = Σ C / [ (n1 + 0.1 × n2) × d ]
              </div>
              <p class="mt-2">Example: Chilled broiler breast sample yields 1.46 × 10^5 CFU/g (5.16 log10). Well within the FSSAI satisfactory threshold (< 5.0 × 10^5 CFU/g).</p>`
          },
          {
            title: "Enumeration of Escherichia coli & Fecal Hygiene Indicator by TBX Chromogenic Agar (ISO 16649-2)",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Direct Fecal Pollution & Evisceration Rupture:</strong> E. coli is an obligate enteric organism. Its presence on carcasses indicates visceral gut rupture or fecal contact during slaughter.</li>
                  <li><strong>Surrogate for Enteric Pathogens:</strong> Correlates directly with risks of Salmonella and Shiga-toxin E. coli (STEC O157:H7) contamination.</li>
                  <li><strong>Statutory Process Hygiene Criteria:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Raw Poultry / Meat Carcasses:</strong> Satisfactory: < <strong>100 CFU/g</strong>; Max limit: <strong>500 CFU/g</strong>.</li>
                      <li><strong>Ready-to-Eat Cooked Meats:</strong> Strictly <strong>ABSENT in 1.0g (Zero Tolerance)</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 16649-2:2001 / ISO 7251 / FSSAI Microbiological Manual 14",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>Meat dilutions are pour-plated with Tryptone Bile X-Glucuronide (TBX) Agar. E. coli's beta-D-glucuronidase cleaves BCIG, forming insoluble turquoise-blue colonies. Plates are incubated at a thermotolerant temperature of 44.0°C ± 1.0°C for 24 hours.</p>

              <h4 class="font-semibold mt-4 mb-2">Colony Profile & Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Distinct circular turquoise-blue to blue-green colonies.<br><br>
                E. coli Count (CFU/g) = Σ Blue Colonies / [ (n1 + 0.1 × n2) × d ]
              </div>
              <p class="mt-2">Example: Raw dressed chicken skin shows 260 CFU/g E. coli. Classified as marginal hygiene (requires evisceration process review; Limit < 500 CFU/g).</p>`
          },
          {
            title: "Detection of Salmonella enterica in 25g Meat & Poultry Products (ISO 6579-1 / FSSAI)",
            purpose: `<div class="bg-rose-50 border border-rose-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Major Foodborne Pathogen:</strong> Salmonella enterica serovars (Enteritidis, Typhimurium) cause acute salmonellosis: high fever, bloody diarrhea, vomiting, and life-threatening septicemia.</li>
                  <li><strong>Absolute Zero Tolerance:</strong> Mandated <strong>Strictly ABSENT in 25 grams</strong> in raw meat, poultry cuts, and egg products under FSSAI, USDA-FSIS, and Codex Alimentarius.</li>
                </ul>
              </div>`,
            reference: "ISO 6579-1:2017 / FSSAI Microbiological Manual 14 / AOAC 967.26 / USDA MLG 4",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle (4-Phase ISO Protocol):</h4>
              <p>1. Pre-enrichment in Buffered Peptone Water (BPW) at 37°C for 18h.<br>
              2. Selective enrichment in RVS broth (41.5°C) and MKTTn broth (37°C) for 24h.<br>
              3. Selective plating on XLD and BGA agars.<br>
              4. Confirmation of red colonies with black centers (H2S) via TSI, Urea broth (-), and polyvalent antisera agglutination.</p>

              <h4 class="font-semibold mt-4 mb-2">Compliance Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                No characteristic black-centered red colonies on XLD: Salmonella ABSENT in 25g (Compliant).<br>
                Positive agglutination/biochemical profile: Salmonella DETECTED (Immediate Recall).
              </div>
              <p class="mt-2">Example: Tested dressed broiler carcass: XLD plates show zero black-centered colonies. Result: Salmonella ABSENT in 25g. Fully compliant.</p>`
          },
          {
            title: "Detection & Enumeration of Listeria monocytogenes in Ready-to-Eat Meats (ISO 11290-1 & 2)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Psychrotrophic High-Fatality Pathogen:</strong> Listeria monocytogenes grows at refrigeration temperatures (2°C to 4°C) and in vacuum/MAP packaging. Listeriosis has a 20% to 30% mortality rate, causing purulent meningitis, septicemia, and spontaneous abortions in pregnant women.</li>
                  <li><strong>Regulatory Mandate:</strong> <strong>Strictly ABSENT in 25 grams</strong> in RTE meats supporting growth; Max <strong>100 CFU/g</strong> in products not supporting growth.</li>
                </ul>
              </div>`,
            reference: "ISO 11290-1:2017 / ISO 11290-2:2017 / FSSAI Manual 14 / EC 2073/2005",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle (ALOA Chromogenic Media):</h4>
              <p>25.0g RTE meat is enriched in Half-Fraser broth (30°C, 24h) and Full-Fraser broth (37°C, 24h). Streaked onto ALOA chromogenic agar: L. monocytogenes forms blue-green colonies with opaque halos due to beta-glucosidase and PI-PLC enzymes. Confirmed via Gram stain, catalase (+), tumbling motility at 25°C, and beta-hemolysis on horse blood agar.</p>

              <h4 class="font-semibold mt-4 mb-2">Compliance Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                No blue-green colonies with halos on ALOA: Listeria monocytogenes ABSENT in 25g (Compliant).
              </div>
              <p class="mt-2">Example: Cooked Sliced Ham package: ALOA plates show zero blue-green haloed colonies. Result: Listeria monocytogenes ABSENT in 25g.</p>`
          },
          {
            title: "Detection of Campylobacter jejuni & Campylobacter coli in Poultry Carcasses (ISO 10272-1:2017)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Leading Cause of Bacterial Enteritis:</strong> Over 70% of human campylobacteriosis cases originate from poultry. Ingesting undercooked chicken causes bloody diarrhea, severe cramps, and in 1 in 1000 patients, triggers autoimmune Guillain-Barré neuromuscular paralysis.</li>
                  <li><strong>Statutory Criteria:</strong> EU Process Hygiene Criterion: Max <strong>1000 CFU/g</strong> on neck skin; FSSAI target: Strictly Absent / Low.</li>
                </ul>
              </div>`,
            reference: "ISO 10272-1:2017 / ISO 10272-2 / FSSAI Microbiological Manual 14",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>25.0g poultry neck skin is enriched in Bolton Broth under microaerophilic conditions (5% O2, 10% CO2, 85% N2) at 41.5°C for 44h. Streaked onto mCCDA agar: flat greyish spreading colonies with metallic sheen are confirmed via corkscrew motility, oxidase (+), and Hippurate hydrolysis (purple for C. jejuni; colorless for C. coli).</p>

              <h4 class="font-semibold mt-4 mb-2">Compliance Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                No characteristic spreading colonies on mCCDA: Campylobacter ABSENT in 25g (Compliant).
              </div>
              <p class="mt-2">Example: Tested broiler carcass skin shows zero characteristic spreading colonies on mCCDA. Result: Campylobacter ABSENT in 25g.</p>`
          },
          {
            title: "Enumeration of Coagulase-Positive Staphylococci (Staphylococcus aureus) by Baird-Parker Agar (ISO 6888-1)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Food Handler Contamination & Heat-Stable Enterotoxins:</strong> S. aureus produces heat-stable enterotoxins (A, B, C, D) that survive boiling and cooking. Ingestion triggers violent vomiting, cramps, and prostration within 2 to 4 hours.</li>
                  <li><strong>FSSAI Statutory Ceilings:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Raw Meats:</strong> Max <strong>100 to 1000 CFU/g</strong>.</li>
                      <li><strong>Cooked Meats & Sausages:</strong> Max <strong>10 to 100 CFU/g</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 6888-1:2021 / ISO 6888-2 / FSSAI Microbiological Manual 14",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>Dilutions are spread-plated on Baird-Parker egg yolk tellurite agar. S. aureus forms black shiny convex colonies surrounded by a 2-5 mm clear halo (lecithinase activity). Confirmed by rabbit plasma coagulase test.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                S. aureus Count (CFU/g) = Σ Black Halo Colonies / [ (n1 + 0.1 × n2) × d ]
              </div>
              <p class="mt-2">Example: Cooked chicken kebab sample yields 50 CFU/g confirmed S. aureus. Well below the FSSAI threshold of 100 CFU/g (Satisfactory).</p>`
          },
          {
            title: "Enumeration of Clostridium perfringens in Cooked Meats by TSC Agar (ISO 7937:2004)",
            purpose: `<div class="bg-zinc-50 border border-zinc-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Spore Germination During Slow Cooling:</strong> Heat-resistant spores survive cooking in large meat roasts and gravies. Slow cooling (43°C to 50°C) triggers rapid germination (10 min doubling time). In vivo enterotoxin release causes explosive diarrhea.</li>
                  <li><strong>FSSAI Statutory Ceilings:</strong> Cooked Ready-to-Eat Meats: Satisfactory < <strong>10 CFU/g</strong>; Max limit: <strong>100 CFU/g</strong>.</li>
                </ul>
              </div>`,
            reference: "ISO 7937:2004 / FSSAI Microbiological Manual 14 / AOAC 976.30",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>Meat dilutions are pour-plated with Tryptose Sulfite Cycloserine (TSC) Agar and an anaerobic overlayer. C. perfringens reduces sulfite to ferrous sulfide, forming jet-black colonies under anaerobic incubation at 37°C for 24h.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                C. perfringens Count (CFU/g) = Σ Black Colonies / [ (n1 + 0.1 × n2) × d ]
              </div>
              <p class="mt-2">Example: Cooked meat stew sample: Zero black colonies observed under anaerobic conditions. Count < 10 CFU/g. Compliant.</p>`
          },
          {
            title: "Comprehensive Statutory Standards & Quality Testing Battery Matrix for Meat, Poultry, Fish & Egg Sector",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Master Sectoral Blueprint & Compliance Guide:</strong></p>
                <p class="mt-1">This consolidated master matrix cross-references all critical statutory parameters, legal limit thresholds, reference test methods, and food safety risk profiles across fresh meat, poultry, fish, seafood, processed meats, and table eggs under FSSAI, BIS, European Commission (EC 2073/2005), and US FSIS regulations.</p>
              </div>`,
            reference: "FSSAI (Food Product Standards & Food Additives) Reg 2011 / EC 2073/2005 / ISO Standards",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Master Statutory Quality Matrix:</h4>
              <div class="overflow-x-auto my-3">
                <table class="min-w-full text-xs border border-gray-300 divide-y divide-gray-200">
                  <thead class="bg-gray-100 font-bold text-gray-700">
                    <tr>
                      <th class="p-2 border">Commodity Pillar</th>
                      <th class="p-2 border">Key Testing Parameter</th>
                      <th class="p-2 border">FSSAI / EC / USDA Limit</th>
                      <th class="p-2 border">Standard Method</th>
                      <th class="p-2 border">Significance & Risk Profile</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr>
                      <td class="p-2 border font-semibold">Fresh Meat & Poultry</td>
                      <td class="p-2 border">TVB-N (Volatile Bases)</td>
                      <td class="p-2 border">Max 20.0 mg N / 100g (Fresh)</td>
                      <td class="p-2 border">ISO 937 / EC 2074/2005</td>
                      <td class="p-2 border">Proteolytic bacterial decomposition index</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Fresh Meat & Poultry</td>
                      <td class="p-2 border">Ultimate pH (DFD/PSE)</td>
                      <td class="p-2 border">pH 5.4 - 5.8 (Normal)</td>
                      <td class="p-2 border">ISO 2917 / Spear Electrode</td>
                      <td class="p-2 border">PSE watery defect (< 5.4) / DFD spoilage (> 6.0)</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Fresh Meat & Poultry</td>
                      <td class="p-2 border">M/P Added Water Ratio</td>
                      <td class="p-2 border">Max 3.6 - 3.8 (Zero added water)</td>
                      <td class="p-2 border">ISO 1442 / Kjeldahl ISO 937</td>
                      <td class="p-2 border">Brine injection & spin chiller plumping fraud</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Fresh Meat & Poultry</td>
                      <td class="p-2 border">Crude Protein (N×6.25)</td>
                      <td class="p-2 border">Min 18.0% - 22.0% (w/w)</td>
                      <td class="p-2 border">Macro-Kjeldahl / ISO 937</td>
                      <td class="p-2 border">Lean meat tissue nutritional benchmark</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Fresh Meat & Poultry</td>
                      <td class="p-2 border">Total Fat (Weibull-Stoldt)</td>
                      <td class="p-2 border">Minced Meat Max 20.0% - 25.0%</td>
                      <td class="p-2 border">ISO 1443 / Acid Hydrolysis</td>
                      <td class="p-2 border">Extracts membrane structural phospholipids</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Meat & Seafood</td>
                      <td class="p-2 border">Species Authenticity PCR</td>
                      <td class="p-2 border font-bold text-red-600">Strictly 0.0% Undeclared (Zero)</td>
                      <td class="p-2 border">ISO 20818 / Real-Time PCR</td>
                      <td class="p-2 border font-semibold text-red-600">Halal/Kosher integrity; pork/horse adulteration</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Meat & Seafood</td>
                      <td class="p-2 border">Antibiotic Residues</td>
                      <td class="p-2 border">MRL ≤ 100 µg/kg; Banned: Zero</td>
                      <td class="p-2 border">LC-MS/MS Multi-Residue</td>
                      <td class="p-2 border">AMR Superbug evolution & bone marrow toxicity</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Fish & Seafood</td>
                      <td class="p-2 border">TMA-N (Trimethylamine)</td>
                      <td class="p-2 border">Max 5.0 - 10.0 mg N / 100g</td>
                      <td class="p-2 border">Dyer Picrate Method at 410 nm</td>
                      <td class="p-2 border">Marine TMAO bacterial reduction; stale odor</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Fish & Seafood</td>
                      <td class="p-2 border">Histamine Biogenic Amine</td>
                      <td class="p-2 border font-bold text-red-600">Max 100 ppm (Scombroid fish)</td>
                      <td class="p-2 border">RP-HPLC-UV / ISO 19343</td>
                      <td class="p-2 border font-semibold text-red-600">Scombroid food poisoning; heat-stable toxin</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Fish & Seafood</td>
                      <td class="p-2 border">Toxic Heavy Metals</td>
                      <td class="p-2 border">Hg ≤ 0.5 ppm, Pb ≤ 0.3, Cd ≤ 0.1</td>
                      <td class="p-2 border">Microwave ICP-MS ISO 17294</td>
                      <td class="p-2 border">Minamata methylmercury & renal toxicities</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Cured / Processed Meats</td>
                      <td class="p-2 border">Sodium Nitrite Residue</td>
                      <td class="p-2 border">Max 100 mg/kg (ppm)</td>
                      <td class="p-2 border">ISO 2918 / Griess Diazotization</td>
                      <td class="p-2 border">Prevents carcinogenic N-Nitrosamine formation</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Cured / Processed Meats</td>
                      <td class="p-2 border">Added Phosphates (P2O5)</td>
                      <td class="p-2 border">Max 5.0 g/kg (0.5%)</td>
                      <td class="p-2 border">ISO 13730 / Molybdenum Blue</td>
                      <td class="p-2 border">Hyperphosphatemia & water retention fraud</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Processed Meats</td>
                      <td class="p-2 border">TBARS Secondary Rancidity</td>
                      <td class="p-2 border">Max 1.0 - 2.0 mg MDA / kg</td>
                      <td class="p-2 border">TBA Reaction at 532 nm</td>
                      <td class="p-2 border">Warmed-over flavor (WOF) & cytotoxic aldehydes</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Table Eggs</td>
                      <td class="p-2 border">Haugh Unit & Freshness</td>
                      <td class="p-2 border">Grade AA ≥ 72 HU; Grade A ≥ 60</td>
                      <td class="p-2 border">USDA Haugh Gauge & Weight</td>
                      <td class="p-2 border">Albumen degradation & vitelline membrane strength</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Microbiology - Hygiene</td>
                      <td class="p-2 border">Aerobic Plate Count (TPC)</td>
                      <td class="p-2 border">Carcass Max 5.0 × 10^6 CFU/g</td>
                      <td class="p-2 border">ISO 4833-1 / PCA Agar 30°C</td>
                      <td class="p-2 border">Slaughterhouse sanitary control & shelf-life</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Microbiology - Hygiene</td>
                      <td class="p-2 border">E. coli Fecal Hygiene</td>
                      <td class="p-2 border">Carcass Max 500 CFU/g; RTE Zero</td>
                      <td class="p-2 border">ISO 16649-2 / TBX Agar 44°C</td>
                      <td class="p-2 border">Visceral gut rupture & abattoir fecal pollution</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Microbiology - Pathogen</td>
                      <td class="p-2 border">Salmonella enterica</td>
                      <td class="p-2 border font-bold text-red-600">ABSENT in 25 grams (Zero)</td>
                      <td class="p-2 border">ISO 6579-1 / XLD & BGA</td>
                      <td class="p-2 border font-semibold text-red-600">Acute enteritis, bloody dysentery & bacteremia</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Microbiology - Pathogen</td>
                      <td class="p-2 border">Listeria monocytogenes</td>
                      <td class="p-2 border font-bold text-red-600">ABSENT in 25g (RTE Meats)</td>
                      <td class="p-2 border">ISO 11290-1 / ALOA Agar</td>
                      <td class="p-2 border font-semibold text-red-600">Cold chain pathogen; 30% mortality meningitis</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Microbiology - Pathogen</td>
                      <td class="p-2 border">Campylobacter jejuni/coli</td>
                      <td class="p-2 border font-bold text-red-600">ABSENT in 25g / Max 1000 CFU/g</td>
                      <td class="p-2 border">ISO 10272-1 / mCCDA 41.5°C</td>
                      <td class="p-2 border font-semibold text-red-600">Poultry diarrhea & Guillain-Barré paralysis</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Microbiology - Pathogen</td>
                      <td class="p-2 border">Staphylococcus aureus</td>
                      <td class="p-2 border">Max 100 to 1000 CFU/g</td>
                      <td class="p-2 border">ISO 6888-1 / Baird-Parker</td>
                      <td class="p-2 border">Heat-stable pre-formed enterotoxins</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Microbiology - Pathogen</td>
                      <td class="p-2 border">Clostridium perfringens</td>
                      <td class="p-2 border">Cooked Meats Max 100 CFU/g</td>
                      <td class="p-2 border">ISO 7937 / TSC Anaerobic</td>
                      <td class="p-2 border">Spore germination during slow cooling</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-xs text-gray-500 mt-2">*Note: This master testing battery represents standard statutory compliance requirements under FSSAI, BIS, European Commission (EC 2073/2005), and US FSIS. Consignments failing any zero-tolerance pathogen (Salmonella, Listeria) or drug residue are subject to immediate legal rejection, seizure, and destruction.</p>`
          }
        ]
      };
