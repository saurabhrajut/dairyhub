/**
 * Compositional Analysis: Pulses, Edible Oils & Spices (Dals, Mustard/Soybean Oil, Turmeric, Chilli)
 * Independent product module for easy future updates and extensions.
 */

export const pulsesOilsSpicesHi = {
        title: "दालें, खाद्य तेल और मसाले (Pulses, Edible Oils & Spices: Chana, Toor, Moong, Mustard Oil, Groundnut Oil, Turmeric, Chilli, Pepper)",
        tests: [
          {
            title: "Extraneous Matter aur Foreign Seeds ka Determination (Pulses aur Whole Spices mein)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Physical Purity & Safety:</strong> Dal (Toor, Moong, Chana, Urad) aur sabut masalon (Jeera, Dhania, Kali Mirch) mein mitti, patthar, kankad, weed seeds, aur kide lage dane (bruchid-damaged pulses) ki matra verify karna.</li>
                  <li><strong>FSSAI Statutory Mandates:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Pulses (Dals):</strong> Total Extraneous Matter <strong>Max 1.0%</strong> (jisme Inorganic Matter / Kankad <strong>Max 0.25%</strong>).</li>
                      <li><strong>Whole Spices (Jeera, Dhania, Mustard):</strong> Extraneous Matter <strong>Max 1.0% se 2.0%</strong>.</li>
                      <li><strong>Damaged / Weevilled Grains:</strong> Pulses mein <strong>Max 3.0% to 5.0%</strong> by count/mass.</li>
                    </ul>
                  </li>
                  <li><strong>Physical & Toxic Hazards:</strong> Kankad/patthar se daant tootne (dental trauma) ka risk hota hai; weevilled pulses mein uric acid contamination badhta hai jo gout trigger karta hai.</li>
                </ul>
              </div>`,
            reference: "IS 4333 (Part 1):1996 / IS 1797:1985 / ISO 927:2009 / FSSAI Manual 03 & 10",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>500g representative sample ko Riffle divider se divide karke white sorting tray par spread kiya jaata hai. 5x illuminated magnifying glass aur certified standard sieves (1.0 mm, 2.0 mm, 4.0 mm) se inorganic kankad/ret aur organic kachre/weed seeds ko physically alag karke weigh kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Total Extraneous Matter % (w/w) = [ (W_inorganic + W_organic) / W_sample ] × 100<br><br>
                Inorganic Foreign Matter % = [ W_inorganic / W_sample ] × 100
              </div>
              <p class="mt-2">500.0g Chana Dal sample mein: Inorganic kankad = 0.85g, Organic husk/weed = 2.40g. Total = 3.25g (0.65%), Inorganic = 0.17%. FSSAI limit (Total ≤1.0%, Inorganic ≤0.25%) ke anukool hai.</p>`
          },
          {
            title: "Moisture Content ka Determination (Dean & Stark Toluene Distillation / Air Oven / Karl Fischer)",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Storage Stability & Spoilage Prevention:</strong> Pulses mein moisture > 12-14% hone par fungal growth (Aspergillus flavus - Aflatoxin risk) aur bruchid insect infestation tezi se badhta hai.</li>
                  <li><strong>Spices Distillation Mandate:</strong> Ground masalon (Turmeric, Chilli, Coriander, Pepper) mein high volatile oils mojud hote hain jo direct 105°C oven drying mein evaporate ho kar falsely high moisture reading dete hain. Isliye masalon mein <strong>Dean & Stark Toluene Distillation Method</strong> mandatory hota hai (IS 1797).</li>
                  <li><strong>Edible Oils:</strong> Edible oils mein moisture <strong>Max 0.10% to 0.25%</strong> hona chahiye (Karl Fischer titration ya 105°C hot plate method). High moisture se oil mein rapid hydrolytic rancidity (FFA release) hoti hai.</li>
                </ul>
              </div>
              <div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Deep Science: Dean & Stark Toluene Azeotropic Distillation:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Toluene (Boiling Point 110.6°C) paani ke sath immiscible binary azeotrope banata hai jo 85°C par boil hota hai. Toluene vapors paani ke sath condense hokar graduated Dean & Stark trap mein aati hain. Paani ki density (1.00 g/mL) toluene (0.87 g/mL) se zyada hone ke karan paani trap ke bottom mein settle ho jaata hai jabki toluene reflux hokar wapas flask mein chala jaata hai. Volatile oils toluene phase mein dissolve rehte hain aur paani ke volume reading ko disturb nahi karte.</li>
                </ul>
              </div>`,
            reference: "IS 1797:1985 / IS 4333 (Part 2) / IS 548 (Part 1) / AOAC 986.21",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Dean & Stark Toluene Method (Spices):</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Weigh 25.0g to 50.0g ground spice into a 500 mL round-bottom flask.</li>
                <li>Add 200 mL dry analytical grade Toluene and a few pumice boiling stones. Connect to calibrated Dean & Stark receiver trap with water-cooled condenser.</li>
                <li>Heat flask gently on heating mantle so distillation rate is approx 2 to 4 drops per second.</li>
                <li>Distill until no further water droplets collect in the trap (approx 2 to 3 hours).</li>
                <li>Allow trap to cool to 20°C; dislodge any droplets on condenser walls with a copper wire coil.</li>
                <li>Read volume of water (V in mL) directly on graduated trap scale.</li>
              </ol>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Moisture % (v/w) = [ Volume of Water collected (mL) / Sample Mass (g) ] × 100
              </div>`
          },
          {
            title: "Total Ash aur Acid Insoluble Ash (AIA / Sand & Silica) in Spices & Pulses",
            purpose: `<div class="bg-gray-100 border border-gray-300 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Sand, Soil & Earthy Adulteration:</strong> Ground spices (Chilli, Turmeric, Coriander) mein mitti, ret, chalk powder ya brick powder ki milawat detect karna.</li>
                  <li><strong>FSSAI Statutory Ceilings:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Turmeric Powder:</strong> Total Ash Max 9.0%, Acid Insoluble Ash <strong>Max 1.5%</strong>.</li>
                      <li><strong>Red Chilli Powder:</strong> Total Ash Max 8.0%, Acid Insoluble Ash <strong>Max 1.3%</strong>.</li>
                      <li><strong>Coriander Powder:</strong> Total Ash Max 7.0%, Acid Insoluble Ash <strong>Max 1.5%</strong>.</li>
                      <li><strong>Pulses (Dals):</strong> Total Ash Max 3.0%, Acid Insoluble Ash <strong>Max 0.15%</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 1797:1985 / AOAC 941.12 / FSSAI Manual 10",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <p>2.0g to 5.0g sample ko platinum/silica crucible mein 550°C ± 20°C muffle furnace mein 4 ghante ash karein (Total Ash). Ash mein 25 mL 10% dilute HCl add karein, 10 minute boil karein. Whatman 41 ashless filter paper se filter karein, hot water se chloride-free hone tak wash karein (AgNO3 test negative). Filter paper ko crucible mein wapas 800°C par 1 ghante ignite karein. Residue ka weight Acid Insoluble Ash (AIA) deta hai.</p>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Acid Insoluble Ash % (w/w) = [ Mass of Ignited Sand/Silica Residue (g) / Sample Mass (g) ] × 100
              </div>`
          },
          {
            title: "Crude Protein Content in Pulses (Macro-Kjeldahl Method, N × 6.25)",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Protein Quality & Nutritional Verification:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Pulses vegetarian diet ka primary protein source hain. Protein content pulses ki maturity, species grading, aur commercial quality define karta hai.</li>
                  <li><strong>FSSAI & AGMARK Reference Values:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Chana Dal (Bengal Gram):</strong> <strong>20.0% se 24.0%</strong> protein.</li>
                      <li><strong>Toor / Arhar Dal (Red Gram):</strong> <strong>21.0% se 25.0%</strong> protein.</li>
                      <li><strong>Moong Dal (Green Gram):</strong> <strong>23.0% se 26.0%</strong> protein.</li>
                      <li><strong>Soybean:</strong> Minimum <strong>38.0% to 42.0%</strong> protein.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 7219:1973 / AOAC 979.09 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure & Specific Factor:</h4>
              <p>1.000g finely ground pulse sample ko 20 mL conc. H2SO4 aur catalyst mix (K2SO4 + CuSO4 10:1) ke sath Kjeldahl block mein 410°C par 90 minute digest karein jab tak liquid emerald green clear na ho jaaye. 40% NaOH add karke steam distillation karein. Liberated ammonia ko 4% Boric acid mein trap karein aur standardized 0.1 N HCl se titrate karein (Methyl red + Bromocresol green indicator).<br>
              <strong>Factor 6.25:</strong> Pulses ke amino acid profile mein average nitrogen content 16.0% hota hai (100 / 16.0 = 6.25).</p>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Nitrogen % = [ (V_sample - V_blank) × N_HCl × 1.4007 ] / Sample Mass (g)<br><br>
                Crude Protein % = Nitrogen % × 6.25
              </div>`
          },
          {
            title: "Non-Volatile Ether Extract (NVEE) aur Volatile Oil Content (Clevenger Steam Distillation)",
            purpose: `<div class="bg-purple-50 border border-purple-200 p-3 rounded my-2">
                <p><strong>Aroma, Flavor & Exhausted Spice Adulteration:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Exhausted Spices Detection:</strong> Unscrupulous traders masalon se unka mehenga essential oil (steam distillation se) extract kar lete hain aur bache hue 'spent/exhausted' masalon ko market mein bechte hain jisme koi swad ya aroma nahi hota.</li>
                  <li><strong>FSSAI Legal Minimums for Volatile Oil:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Clove (Laung):</strong> Minimum <strong>15.0% v/w</strong> volatile oil.</li>
                      <li><strong>Cardamom (Elaichi):</strong> Minimum <strong>3.5% v/w</strong>.</li>
                      <li><strong>Black Pepper (Kali Mirch):</strong> Minimum <strong>6.0% NVEE</strong> aur <strong>1.5% v/w</strong> volatile oil.</li>
                      <li><strong>Cumin (Jeera):</strong> Minimum <strong>1.5% v/w</strong> volatile oil.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 1797:1985 / ISO 6571 / ASTA Method 5.0",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Clevenger Hydrodistillation SOP:</h4>
              <p>Weigh 50g coarsely crushed spice into 1000 mL round-bottom flask. Add 400 mL distilled water. Connect Clevenger apparatus (trap lighter than water). Boil for 4 to 6 hours until essential oil volume in calibrated trap becomes constant. Cool to 20°C and read essential oil percentage directly as mL/100g (v/w).</p>`
          },
          {
            title: "Refractive Index aur Butyro-Refractometer (BR) Reading at 40°C (Edible Oils)",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Purity, Identification & Cross-Contamination Screen:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Har edible vegetable oil ka fatty acid profile alag hone ke karan unka Refractive Index (nD) aur Butyro-Refractometer (BR) reading at 40.0°C ek unique fingerprint hota hai.</li>
                  <li><strong>FSSAI Statutory Standards at 40°C:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Mustard Oil:</strong> BR <strong>58.0 se 60.5</strong> (nD 1.4646 - 1.4662).</li>
                      <li><strong>Soybean Oil:</strong> BR <strong>58.5 se 68.0</strong> (nD 1.4649 - 1.4710).</li>
                      <li><strong>Groundnut Oil:</strong> BR <strong>54.0 se 57.1</strong> (nD 1.4620 - 1.4640).</li>
                      <li><strong>Palm Oil:</strong> BR <strong>36.0 se 37.5</strong> at 50°C.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 1):1964 / AOAC 921.08 / ISO 6320 / FSSAI Manual 04",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure & Temperature Correction:</h4>
              <p>Water-circulating thermostatic bath se refractometer prism temperature <strong>40.0°C ± 0.1°C</strong> maintain karein. Clear anhydrous oil sample ke 2 drops prism par place karein, daylight plate close karein. Critical line crosshairs align karke reading note karein. Agar temperature T ≠ 40°C ho, toh correction apply karein: <code>BR_40 = BR_T + [0.55 × (T - 40)]</code>.</p>`
          },
          {
            title: "Specific Gravity aur Density ka Determination at 30°C in Edible Oils (Pycnometer Method)",
            purpose: `<div class="bg-cyan-50 border border-cyan-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Oils ki density unke molecular weight aur unsaturation se directly correlate karti hai.</li>
                  <li><strong>FSSAI Limits (at 30°C / 30°C):</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Mustard Oil:</strong> <strong>0.907 se 0.910</strong>.</li>
                      <li><strong>Soybean Oil:</strong> <strong>0.914 se 0.919</strong>.</li>
                      <li><strong>Groundnut Oil:</strong> <strong>0.909 se 0.913</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 1) / ISO 6883 / FSSAI Manual 04",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Pycnometer Procedure:</h4>
              <p>Clean dry 50 mL density bottle ko weigh karein (W0). 30.0°C par freshly boiled and cooled distilled water bharein aur weigh karein (W1). Bottle ko dry karein, dry filtered oil sample se bharein, 30.0°C thermostatic water bath mein 30 minute equilibrate karein, cap lagayein, wipe karein aur weigh karein (W2).<br>
              <code>Specific Gravity (30°C/30°C) = (W2 - W0) / (W1 - W0)</code>.</p>`
          },
          {
            title: "Iodine Value (IV) ka Determination (Wijs Method - Degree of Unsaturation in Edible Oils)",
            purpose: `<div class="bg-indigo-50 border border-indigo-200 p-3 rounded my-2">
                <p><strong>Unsaturation & Adulteration with Cheap Saturated Palm Oil:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Iodine Value 100g tel dwara absorb hone wali halogen (iodine) ki matra (grams mein) hoti hai jo fatty acid chains ke double bonds ($C=C$) ko measure karti hai.</li>
                  <li><strong>FSSAI Statutory Ranges:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Mustard Oil:</strong> <strong>98 se 112</strong> (Erucic acid mono-unsaturated).</li>
                      <li><strong>Soybean Oil:</strong> <strong>120 se 141</strong> (Highly polyunsaturated).</li>
                      <li><strong>Sunflower Oil:</strong> <strong>118 se 141</strong>.</li>
                      <li><strong>Palm Oil:</strong> <strong>50 se 55</strong> (Highly saturated).</li>
                    </ul>
                  </li>
                  <li>Agar Mustard Oil mein sasta Palm Oil milaya jaye toh Iodine value turant 98 se niche gir jaati hai.</li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 1) / AOAC 920.159 / ISO 3961 / AOCS Cd 1-25",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Wijs Iodometric Titration:</h4>
              <p>0.2g oil ko 20 mL carbon tetrachloride/chloroform mein dissolve karein. 25.0 mL Wijs solution (Iodine monochloride ICl in glacial acetic acid) add karein. Stopper flask ko dark mein 30 minute (polyunsaturated ke liye 1 hour) rakhein. 20 mL 10% KI aur 100 mL water add karein. Liberated iodine ko standardized 0.1 N Na2S2O3 se titrate karein (starch indicator). Parallel blank run karein.<br>
              <code>Iodine Value = [ (B - S) × N_thiosulfate × 12.69 ] / Sample Mass (g)</code>.</p>`
          },
          {
            title: "Saponification Value (SV) ka Determination (Mean Fatty Acid Chain Length in Oils)",
            purpose: `<div class="bg-green-50 border border-green-200 p-3 rounded my-2">
                <p><strong>Triglyceride Molecular Weight & Mineral Oil Detection:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>1 gram tel ko completely saponify (soap mein convert) karne ke liye kitne milligram KOH lagte hain.</li>
                  <li><strong>FSSAI Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Mustard Oil:</strong> <strong>169 se 177</strong> (Low SV due to very long chain C22 Erucic acid).</li>
                      <li><strong>Soybean Oil:</strong> <strong>189 se 195</strong> (C18 fatty acids).</li>
                      <li><strong>Coconut Oil:</strong> <strong>250 se 260</strong> (High SV due to short/medium chain C12 Lauric acid).</li>
                    </ul>
                  </li>
                  <li>Non-saponifiable mineral oil milane par SV drasticaly drop hota hai.</li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 1) / AOAC 920.160 / ISO 3657 / FSSAI Manual 04",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <p>2.0g oil ko 25.0 mL 0.5 N Alcoholic KOH ke sath reflux condenser par 1 ghante boil karein jab tak complete clear saponification na ho jaaye. Hot solution ko 0.5 N standardized HCl se phenolphthalein indicator use karke titrate karein. Reagent blank run karein.<br>
              <code>Saponification Value = [ (B - S) × N_HCl × 56.11 ] / Sample Mass (g)</code>.</p>`
          },
          {
            title: "Free Fatty Acids (FFA % as Oleic) aur Acid Value in Edible Oils",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Hydrolytic Rancidity & Oil Freshness:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Triglycerides moisture aur lipase enzyme ke asar se hydrolyze hokar free fatty acids release karte hain jo gala jalane wala sharp acrid taste dete hain.</li>
                  <li><strong>FSSAI Statutory Ceilings:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Refined Edible Oils:</strong> FFA <strong>Max 0.25%</strong> as oleic (Acid Value Max 0.5 mg KOH/g).</li>
                      <li><strong>Virgin / Kachi Ghani Mustard Oil:</strong> FFA <strong>Max 1.5%</strong> (Acid Value Max 3.0).</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 1) / AOAC 940.28 / AOCS Ca 5a-40",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <p>10.0g oil ko 50 mL neutralized hot 95% ethanol mein dissolve karein. 1 mL phenolphthalein indicator daal kar standardized 0.1 N NaOH/KOH se titrate karein jab tak persistent faint pink color na aaye.<br>
              <code>FFA % as Oleic Acid = [ V_NaOH × N_NaOH × 28.2 ] / Sample Mass (g)</code><br>
              <code>Acid Value (mg KOH/g) = [ V_KOH × N_KOH × 56.11 ] / Sample Mass (g)</code>.</p>`
          },
          {
            title: "Peroxide Value (PV by Iodometric Titration) in Edible Oils (Primary Oxidation)",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Primary Oxidative Rancidity Index:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Atmospheric oxygen unsaturated fats par attack karke lipid hydroperoxides banati hai.</li>
                  <li><strong>FSSAI Mandatory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fresh Edible Oils:</strong> <strong>Max 10.0 meq O2/kg</strong>.</li>
                      <li><strong>Frying Oils / Repeatedly Heated Oils:</strong> Maximum <strong>15.0 meq O2/kg</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 3508 / AOAC 965.33 / ISO 3960 / AOCS Cd 8b-90",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <p>5.0g oil ko 30 mL Acetic Acid : Chloroform (3:2 v/v) mein dissolve karein. 0.5 mL saturated KI add karein. Dark mein exactly 1 minute shake karein. 30 mL water add karein aur liberated iodine ko standardized 0.01 N Na2S2O3 se starch indicator use karke titrate karein.<br>
              <code>Peroxide Value (meq O2 / kg) = [ (S - B) × N_thiosulfate × 1000 ] / Sample Mass (g)</code>.</p>`
          },
          {
            title: "Secondary Oxidation: p-Anisidine Value (p-AV) aur Totox Value in Oils",
            purpose: `<div class="bg-rose-50 border border-rose-200 p-3 rounded my-2">
                <p><strong>Advanced Rancidity & Aldehyde Degradation:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Hydroperoxides unstable hote hain aur breakdown hokar foul-smelling secondary aldehydes (2-alkenals, 2,4-dienals) banate hain.</li>
                  <li><strong>Totox Value (Total Oxidation Value):</strong> <code>Totox = 2 × PV + p-AV</code>. Good quality fresh refined oil ka Totox < 10 hona chahiye. Totox > 20 indicates severely deteriorated oil.</li>
                </ul>
              </div>`,
            reference: "AOCS Cd 18-90 / ISO 6885 / FSSAI Manual 04",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Spectrophotometric Reaction:</h4>
              <p>Oil ko iso-octane mein dissolve karein. 1 mL 0.25% p-Anisidine reagent (in glacial acetic acid) add karein. 23°C par 10 minute dark mein react karein. Aldehydes p-anisidine ke sath Schiff base banate hain jo yellow complex deta hai. Absorbance <strong>350 nm</strong> par measure karein.<br>
              <code>p-AV = [ 25 × (1.2 × A_reacted - A_blank) ] / Sample Mass (g)</code>.</p>`
          },
          {
            title: "Curcumin Content ka Spectrophotometric Determination at 425 nm (Turmeric Powder)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Bio-active Polyphenol & Quality Index:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Curcumin (diferuloylmethane) haldi ka primary therapeutic aur coloring compound hai.</li>
                  <li><strong>FSSAI & BIS Mandate (IS 3576):</strong> Turmeric powder mein Curcumin <strong>Minimum 2.0% w/w</strong> hona mandatory hai (High quality Lakadong turmeric mein 5.0% - 7.0% hota hai). Starch/sawdust milane par curcumin < 1.0% drop ho jaata hai.</li>
                </ul>
              </div>`,
            reference: "IS 3576:2010 / ASTA Method 18.0 / FSSAI Manual 10",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <p>Weigh 0.100g turmeric powder. 80 mL 95% ethanol ke sath 1 ghante reflux karein. Cool karke 100 mL volumetric flask mein make-up karein. Is solution ka 5 mL lekar 100 mL tak dilute karein. Absorbance <strong>425 nm</strong> par ethanol blank ke against measure karein.<br>
              Extinction coefficient E(1%, 1cm) of pure Curcumin at 425 nm = <strong>1607</strong>.</p>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Curcumin % (w/w) = [ A_425 × Dilution Factor (2000) × 100 ] / [ 1607 × Sample Mass (g) × 1000 ]<br><br>
                Simplified: Curcumin % = (A_425 × 200) / (1607 × W_sample)
              </div>`
          },
          {
            title: "Capsaicin Content aur Scoville Heat Units (SHU by RP-HPLC) in Red Chilli",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Pungency & Purity Grading:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Capsaicinoids (Capsaicin aur Dihydrocapsaicin) laal mirch ki teekha-pan (pungency) provide karte hain.</li>
                  <li><strong>ASTA / Scoville Conversion:</strong> <code>1 ppm Capsaicinoids = 15 to 16 Scoville Heat Units (SHU)</code>. Standard Indian mirch (Teja/Guntur) 30,000 - 80,000 SHU; Ghost pepper (Bhut Jolokia) > 1,000,000 SHU.</li>
                </ul>
              </div>`,
            reference: "ASTA Method 21.3 / ISO 7543-2 / AOAC 995.03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">HPLC Parameters:</h4>
              <p>5g ground chilli ko 95% ethanol mein reflux/sonicate karein. C18 reverse phase column par Acetonitrile : 1% Acetic acid water (40:60) mobile phase se run karein. UV detection at <strong>280 nm</strong>. Capsaicin aur Dihydrocapsaicin ke peak areas ko certified standards se quantify karein.</p>`
          },
          {
            title: "Piperine Content ka Determination by HPLC / UV at 343 nm (Black Pepper)",
            purpose: `<div class="bg-slate-800 text-white p-3 rounded my-2">
                <p><strong>Black Pepper Pungency Alkaloid:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Piperine kali mirch ka active pungency alkaloid hai jo bio-availability enhancer ke roop mein kaam karta hai.</li>
                  <li><strong>FSSAI & IS 1797 Mandate:</strong> Whole/Ground Black Pepper mein Piperine <strong>Minimum 4.0% w/w</strong> hona chahiye. Papaya seeds ki milawat hone par piperine drop ho jaata hai.</li>
                </ul>
              </div>`,
            reference: "IS 1797 / ISO 5564 / ASTA Method 12.1",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Spectrophotometric UV Method:</h4>
              <p>0.1g ground pepper ko ethanol mein reflux karein, dilute karein. Absorbance <strong>343 nm</strong> par measure karein. Specific extinction coefficient E(1%, 1cm) of piperine at 343 nm = <strong>1350</strong>. Piperine % = (A_343 × Dilution × 100) / (1350 × Sample Mass).</p>`
          },
          {
            title: "Argemone Oil Adulteration in Mustard Oil (Nitric Acid & TLC Sanguinarine Test)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Lethal Epidemic Dropsy Prevention:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Mustard seeds ke sath milne wale Argemone mexicana (Peeli Kateli) seeds ka tel highly toxic alkaloid <strong>Sanguinarine</strong> contain karta hai jo cellular Na+/K+-ATPase pumps ko block kar deta hai.</li>
                  <li>Isse sharir mein paani bhar jaata hai (extreme edema/dropsy), cardiac arrest, glaucoma aur blindness hoti hai. FSSAI mandate: <strong>STRICTLY ABSENT (Zero Tolerance)</strong>.</li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 2) / FSSAI Manual 04",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Nitric Acid Test & TLC:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li><strong>Nitric Acid Test:</strong> 5 mL mustard oil sample ko test tube mein lein. 5 mL concentrated HNO3 (sp gr 1.42) add karein. Boiling water bath mein 2 minute heat karein. Lower acid layer mein crimson-red se reddish-brown color aana Argemone oil adulteration confirm karta hai (Pure mustard oil yellow/orange rehta hai).</li>
                <li><strong>Confirmatory TLC:</strong> Oil ko dilute HCl ke sath shake karke alkaloids extract karein. Silica Gel G plate par spot karein. Mobile phase: Butanol : Acetic acid : Water (4:1:1). 366 nm UV light ke under Sanguinarine bright golden-yellow fluorescent spot deta hai (Sensitivity: 0.005%).</li>
              </ol>`
          },
          {
            title: "Mineral Oil Adulteration in Edible Oils (Holde's Saponification Turbidity Test)",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Non-Edible Hydrocarbon Oil Detection:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Edible oil mein sasta liquid paraffin ya transformer mineral oil milane se severe gastrointestinal irritation aur fat-soluble vitamins (A, D, E, K) ka absorption block hota hai. Limit: <strong>STRICTLY ABSENT</strong>.</li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 2) / FSSAI Manual 04",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Holde's Test:</h4>
              <p>Test tube mein 1 mL oil aur 25 mL 0.5 N Alcoholic KOH lein. Boiling water bath par 15 minute reflux karein jab tak complete saponification na ho jaaye. Ab boiling water add karein. Pure vegetable oil soap ban kar complete clear transparent solution deta hai. Agar 0.5% bhi non-saponifiable mineral oil mojud hai, toh solution instant milky turbid ho jaata hai aur oil droplets float karne lagte hain.</p>`
          },
          {
            title: "Castor Oil aur Cottonseed Oil (Halphen Test) Adulteration in Edible Oils",
            purpose: `<div class="bg-orange-50 border border-orange-200 p-3 rounded my-2">
                <p><strong>Detection of Laxative Castor & Cyclopropenoid Cottonseed Oils:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Castor oil (Ricinoleic acid) potent laxative purgative hai. Cottonseed oil toxic cyclopropenoid fatty acids (Sterculic aur Malvalic acid) contain karta hai.</li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 2) / AOAC 965.34 / FSSAI Manual 04",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Halphen Test for Cottonseed Oil:</h4>
              <p>5 mL oil + 5 mL 1% Sulfur solution (dissolved in Carbon disulfide CS2) + 5 mL Pyridine/Amyl alcohol ko oil bath (110°C - 115°C) par 2 ghante heat karein. Cyclopropene ring sulfur ke sath react karke distinct red/pink color deti hai (Negative = No color change).<br>
              <strong>Castor Oil Test:</strong> Oil ko petroleum ether mein dissolve karke acidified ammonium molybdate add karne par white precipitate/turbidity banna castor oil verify karta hai.</p>`
          },
          {
            title: "Sudan Dyes (Sudan I, II, III, IV & Para Red) Screening by TLC & RP-HPLC-DAD in Chilli",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Banned Genotoxic Carcinogens:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Sudan dyes synthetic industrial azo dyes hain jo leather, plastics aur wax color karne ke liye use hote hain. Ye IARC Category 3 human carcinogens hain.</li>
                  <li>Lal mirch powder ko artificially bright red dikhane ke liye inka use illegal hai. FSSAI & EU Limit: <strong>ABSOLUTE ZERO (Detection limit < 10 ppb)</strong>.</li>
                </ul>
              </div>`,
            reference: "AOAC 995.11 / ISO 21870 / FSSAI Manual 10",
            procedure: `<h4 class="font-semibold mt-4 mb-2">TLC & RP-HPLC-DAD:</h4>
              <p>5g chilli powder ko n-Hexane se extract karein. Silica Gel 60 F254 TLC plate par spot karein. Mobile phase: Hexane : Ethyl acetate (9:1 v/v). Sudan I (Rf ~0.65), Sudan II (Rf ~0.55), Sudan III (Rf ~0.45), Sudan IV (Rf ~0.35) standard spots ke samne match karein. Confirmatory quantification RP-HPLC-DAD dwara <strong>500 nm</strong> wavelength par karein.</p>`
          },
          {
            title: "Lead Chromate aur Added Mineral Pigment Adulteration in Turmeric Powder",
            purpose: `<div class="bg-yellow-100 border border-yellow-300 p-3 rounded my-2">
                <p><strong>Toxic Heavy Metal Neurotoxin Adulteration:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Haldi ko artificially bright golden yellow banane ke liye toxic chemical <strong>Lead Chromate (PbCrO4)</strong> milaya jaata hai. Lead ek permanent neurotoxin hai jo bachon mein brain damage aur adults mein kidney failure karta hai. Limit: <strong>STRICTLY ABSENT</strong>.</li>
                </ul>
              </div>`,
            reference: "FSSAI Manual 10 / IS 3576",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Chemical Spot Test:</h4>
              <p>2g haldi powder ko muffle furnace mein ash karein. Ash mein 5 mL dilute H2SO4 add karein. Usme 2 mL Diphenylcarbazide (0.2% in ethanol) add karein. Chromium (Cr6+) ke sath violet-purple color banna Lead Chromate confirm karta hai. Confirmatory test mein Potassium Iodide (KI) daalne par bright yellow Lead Iodide (PbI2) precipitate banta hai.</p>`
          },
          {
            title: "Metanil Yellow Dye Adulteration in Turmeric Powder aur Arhar Dal (HCl Reaction Test)",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Industrial Dye in Dal Polishing:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Purani ya low-quality Arhar (Toor) dal aur haldi powder ko chamkila peela dikhane ke liye banned azo dye <strong>Metanil Yellow</strong> se polish kiya jaata hai.</li>
                  <li>Metanil yellow testicular atrophy, spermatogenesis arrest aur intestine damage cause karta hai. Limit: <strong>STRICTLY PROHIBITED (Zero Tolerance)</strong>.</li>
                </ul>
              </div>`,
            reference: "DGHS Method / FSSAI Manual 03 & 10",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Concentrated HCl Color Reaction:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>5g dal ya 2g haldi sample ko test tube mein lein, 10 mL warm distilled water add karke shake karein taaki surface color dissolve ho jaaye.</li>
                <li>Test tube ki wall ke sahare 2 to 3 mL <strong>Concentrated Hydrochloric Acid (HCl)</strong> add karein.</li>
                <li><strong>Observation:</strong>
                  <ul class="list-disc pl-5 mt-1">
                    <li><em>Pure Sample:</em> Haldi ka natural curcumin acidic medium mein light yellow rehta hai (no intense magenta).</li>
                    <li><em>Adulterated with Metanil Yellow:</em> Instant intensely persistent <strong>Magenta-Pink to Violet</strong> color develop hota hai jo paani se dilute karne par bhi bana rehta hai (Positive).</li>
                  </ul>
                </li>
              </ol>`
          },
          {
            title: "Khesari Dal (BOAA / ODAP Neurotoxin) Adulteration in Chana aur Toor Dal",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Paralytic Lathyrism Prevention:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Khesari Dal (<em>Lathyrus sativus</em>) sasti hoti hai aur Chana/Toor dal se milti-julti hai. Khesari mein neurotoxic amino acid <strong>BOAA (β-N-oxalyl-α,β-diaminopropionic acid / ODAP)</strong> hota hai.</li>
                  <li>Iske regular consumption se lower limbs ka permanent paralysis (Neurolathyrism) ho jaata hai. FSSAI mandate: <strong>Strictly Prohibited</strong>.</li>
                </ul>
              </div>`,
            reference: "IS 2400 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Morphological & Chemical Screening:</h4>
              <p>1. <strong>Physical Sorting:</strong> Khesari dal ke grains wedge-shaped (chhote pathar jaise slant edges) hote hain, jabki Chana dal round/globular hoti hai.<br>
              2. <strong>Chemical Test:</strong> 5g crushed dal ko 50 mL water mein boil karein, filter karein. Filtrate mein 5 mL concentrated HCl add karein aur 15 minute boil karein. Development of persistent pinkish-red color confirms Khesari dal presence.</p>`
          },
          {
            title: "Aflatoxins (B1, B2, G1, G2) & Ochratoxin A by Immunoaffinity Column & HPLC-FLD",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Potent Carcinogenic Mycotoxins:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><em>Aspergillus flavus</em> aur <em>Aspergillus parasiticus</em> groundnut, oilseeds, chilli, turmeric aur black pepper mein Aflatoxins produce karte hain jo liver cancer (hepatocellular carcinoma) cause karte hain.</li>
                  <li><strong>FSSAI Maximum Statutory Limits:</strong> Aflatoxin B1 <strong>Max 15 µg/kg (ppb)</strong>; Total Aflatoxins (B1+B2+G1+G2) <strong>Max 30 µg/kg (ppb)</strong>.</li>
                </ul>
              </div>`,
            reference: "AOAC 999.07 / ISO 16050 / FSSAI Contaminants Regulations",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Immunoaffinity Cleanup & HPLC-FLD:</h4>
              <p>25g ground sample ko Methanol : Water (80:20) se extract karein, filter karein. Extract ko PBS buffer se dilute karke specific Aflatest Immunoaffinity Column par load karein. Monoclonal antibodies aflatoxins ko selectively bind karti hain. Column ko water se wash karke pure methanol se elute karein. C18 column par Kobra Cell (electrochemical post-column bromination) ya photochemical derivatization ke sath Fluorescence Detector (Ex 365 nm, Em 440 nm) par quantify karein (LOD < 0.5 ppb).</p>`
          },
          {
            title: "Pulses, Edible Oils & Spices Sector Complete Statutory & Quality Testing Battery Summary",
            purpose: `<div class="bg-gray-100 border border-gray-300 p-3 rounded my-2">
                <p><strong>Master Reference Matrix for Laboratory QA/QC & Regulatory Audits:</strong></p>
                <p class="text-sm text-gray-700 mt-1">Ye master matrix Pulses, Edible Oils, aur Whole/Ground Spices ke FSSAI / AGMARK standards aur testing frequencies ko ek comprehensive table mein summarize karta hai.</p>
              </div>`,
            reference: "FSSAI Food Safety and Standards (Food Products Standards) Regulations / IS 4333, IS 548, IS 1797",
            procedure: `<div class="overflow-x-auto my-4">
                <table class="min-w-full text-xs border border-gray-300">
                  <thead class="bg-amber-800 text-white font-semibold">
                    <tr>
                      <th class="border border-amber-900 p-2 text-left">Test Parameter</th>
                      <th class="border border-amber-900 p-2 text-left">Standard Reference</th>
                      <th class="border border-amber-900 p-2 text-left">Pulses (Dal)</th>
                      <th class="border border-amber-900 p-2 text-left">Mustard Oil</th>
                      <th class="border border-amber-900 p-2 text-left">Refined Soybean Oil</th>
                      <th class="border border-amber-900 p-2 text-left">Turmeric / Chilli Powder</th>
                      <th class="border border-amber-900 p-2 text-left">Testing Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Moisture Content</td><td class="border p-2">IS 4333 / IS 1797 / IS 548</td><td class="border p-2 font-bold text-amber-700">Max 12.0 - 14.0%</td><td class="border p-2">Max 0.25%</td><td class="border p-2">Max 0.10%</td><td class="border p-2 font-bold text-red-700">Max 10.0 - 12.0% (Toluene)</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Extraneous Matter</td><td class="border p-2">IS 4333 (Pt 1) / ISO 927</td><td class="border p-2 font-bold text-emerald-700">Max 1.0% (Inorg 0.25%)</td><td class="border p-2">Clear, sediment free</td><td class="border p-2">Clear, sediment free</td><td class="border p-2 font-bold text-emerald-700">Max 1.0 - 2.0% (Whole)</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Total Ash %</td><td class="border p-2">IS 1797 / AOAC 941.12</td><td class="border p-2">Max 3.0%</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-red-700">Max 8.0 - 9.0%</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Acid Insoluble Ash (AIA)</td><td class="border p-2">IS 1797 / AOAC</td><td class="border p-2 font-bold text-blue-700">Max 0.15%</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-red-700">Max 1.3 - 1.5%</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Crude Protein % (N×6.25)</td><td class="border p-2">IS 7219 / AOAC 979.09</td><td class="border p-2 font-bold text-emerald-700">20.0 - 26.0%</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2 text-indigo-700 font-semibold">Weekly / Lot</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">BR Reading at 40°C</td><td class="border p-2">IS 548 (Pt 1)</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-yellow-700">58.0 - 60.5</td><td class="border p-2 font-bold text-yellow-700">58.5 - 68.0</td><td class="border p-2">N/A</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Iodine Value (Wijs)</td><td class="border p-2">AOAC 920.159 / IS 548</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-purple-700">98 - 112</td><td class="border p-2 font-bold text-purple-700">120 - 141</td><td class="border p-2">N/A</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Saponification Value</td><td class="border p-2">AOAC 920.160 / IS 548</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-indigo-700">169 - 177</td><td class="border p-2 font-bold text-indigo-700">189 - 195</td><td class="border p-2">N/A</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Free Fatty Acids (FFA %)</td><td class="border p-2">IS 548 / AOAC 940.28</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-red-700">Max 1.5% (Virgin)</td><td class="border p-2 font-bold text-emerald-700">Max 0.25% (Refined)</td><td class="border p-2">N/A</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Peroxide Value (PV meq/kg)</td><td class="border p-2">IS 3508 / AOAC 965.33</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-red-700">Max 10.0 meq/kg</td><td class="border p-2 font-bold text-red-700">Max 10.0 meq/kg</td><td class="border p-2">N/A</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Curcumin Content %</td><td class="border p-2">IS 3576 / ASTA 18.0</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-amber-700">Min 2.0% (Turmeric)</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Argemone Oil Test</td><td class="border p-2">IS 548 (Pt 2) / Conc HNO3</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-red-700">ABSENT (Zero)</td><td class="border p-2 font-bold text-red-700">ABSENT (Zero)</td><td class="border p-2">N/A</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Mineral Oil (Holde's Test)</td><td class="border p-2">IS 548 (Pt 2)</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-red-700">ABSENT (Zero)</td><td class="border p-2 font-bold text-red-700">ABSENT (Zero)</td><td class="border p-2">N/A</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Sudan Dyes (I-IV)</td><td class="border p-2">TLC & HPLC-DAD 500nm</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-red-700">ABSENT (Zero in Chilli)</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Lead Chromate / Metanil Yellow</td><td class="border p-2">Acid Spot Tests</td><td class="border p-2 font-bold text-red-700">ABSENT (in Arhar Dal)</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2 font-bold text-red-700">ABSENT (in Turmeric)</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Khesari Dal (BOAA / ODAP)</td><td class="border p-2">IS 2400 / FSSAI Manual 03</td><td class="border p-2 font-bold text-red-700">ABSENT (Zero in Dal)</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2">N/A</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Total Aflatoxins (B1+B2+G1+G2)</td><td class="border p-2">HPLC-FLD / ISO 16050</td><td class="border p-2 font-bold text-red-700">Max 30 µg/kg (ppb)</td><td class="border p-2">Max 30 µg/kg (seed)</td><td class="border p-2">Max 30 µg/kg</td><td class="border p-2 font-bold text-red-700">Max 30 µg/kg (ppb)</td><td class="border p-2">Monthly / Lot</td></tr>
                  </tbody>
                </table>
              </div>`
          }
        ]
      };

export const pulsesOilsSpicesEn = {
        title: "Pulses, Edible Oils & Spices (Pulses, Whole & Milled Dals, Mustard Oil, Groundnut Oil, Turmeric, Red Chilli, Black Pepper)",
        tests: [
          {
            title: "Determination of Extraneous Matter and Foreign Seeds in Pulses and Whole Spices",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Physical Purity & Consumer Safety:</strong> Verification of inorganic impurities (stones, dirt, gravel, sand) and organic foreign matter (weed seeds, chaff, stem, insect-damaged seeds, bruchid beetle infestations) in pulses (Toor, Moong, Chana, Urad) and whole spices (Cumin, Coriander, Black Pepper).</li>
                  <li><strong>FSSAI & AGMARK Statutory Thresholds:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Whole Pulses (Dals):</strong> Total Extraneous Matter <strong>Max 1.0% (w/w)</strong>, with Inorganic Foreign Matter (stones/dirt) <strong>Max 0.25% (w/w)</strong>.</li>
                      <li><strong>Whole Spices (Cumin, Coriander, Fennel):</strong> Extraneous Matter <strong>Max 1.0% to 2.0% (w/w)</strong>.</li>
                      <li><strong>Damaged / Weevilled Grains:</strong> Max <strong>3.0% to 5.0%</strong> by count/mass.</li>
                    </ul>
                  </li>
                  <li><strong>Physical Trauma & Health Risks:</strong> Ingesting stones creates dental fracture hazards; weevilled pulses contain elevated insect frass and uric acid, which can trigger acute gout and renal complications.</li>
                </ul>
              </div>`,
            reference: "IS 4333 (Part 1):1996 / IS 1797:1985 / ISO 927:2009 / FSSAI Lab Manual 03 & 10",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>A representative 500g laboratory sample obtained via a Boerner/Riffle divider is spread evenly across an illuminated white inspection tray. Certified nested test sieves (4.0 mm, 2.0 mm, 1.0 mm) and hand sorting under 5x magnification separate inorganic mineral matter (stones, gravel) and organic matter (weed seeds, stalks, chaff) for precision gravimetric quantification (±0.001g).</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Total Extraneous Matter % (w/w) = [ (W_inorganic + W_organic) / W_sample ] × 100<br><br>
                Inorganic Foreign Matter % = [ W_inorganic / W_sample ] × 100
              </div>
              <p class="mt-2">Example: In a 500.0g Chana Dal consignment, inorganic stones = 0.85g, organic chaff/weed seeds = 2.40g. Total foreign matter = 3.25g (0.65%), Inorganic matter = 0.17%. Complies fully with FSSAI statutory limits (Total ≤1.0%, Inorganic ≤0.25%).</p>`
          },
          {
            title: "Determination of Moisture Content (Dean & Stark Toluene Distillation / Air Oven / Karl Fischer)",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Microbial Stability & Mycotoxin Prevention:</strong> In pulses and spices, water activity (a_w > 0.65) and moisture above critical limits promote rapid growth of Aspergillus flavus, triggering lethal aflatoxin contamination and grain heating.</li>
                  <li><strong>Preservation of Volatile Essential Oils:</strong> Standard hot air oven drying (105°C) evaporates essential volatile oils (terpenes, piperine, cuminaldehyde), giving falsely elevated moisture readings. Hence, Dean & Stark azeotropic toluene distillation is strictly mandated for spice matrices.</li>
                  <li><strong>Statutory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Milled Pulses (Dals):</strong> Max 12.0% to 14.0% (w/w).</li>
                      <li><strong>Ground Spices (Turmeric, Chilli, Coriander):</strong> Max 10.0% to 12.0% (w/w).</li>
                      <li><strong>Edible Vegetable Oils:</strong> Max 0.10% to 0.25% (w/w) by Karl Fischer titration.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 1797:1985 / ISO 939:1980 / AOAC 986.21 (Dean & Stark) / AOAC 984.20 (Karl Fischer)",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle (Dean & Stark Toluene Azeotrope):</h4>
              <p>For spices containing volatile oils (Cloves, Cardamom, Cumin, Pepper), 25-50g ground sample is immersed in water-immiscible toluene (b.p. 110.6°C). On boiling, a binary azeotropic mixture of toluene and water vapors condenses and collects into a graduated Dean & Stark receiver. Water (density 1.00 g/mL) separates into the bottom graduated tube while lighter toluene (density 0.867 g/mL) continuously overflows back into the flask.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Moisture % (v/w) [Dean & Stark] = [ V_water collected in mL / W_sample in g ] × 100<br><br>
                Moisture % [Karl Fischer for Oils] = [ (V_titrant × Titer mg H2O/mL) / (W_oil in g × 10) ]
              </div>
              <p class="mt-2">Example: 40.0g ground Cumin seed distilled with 200 mL dry toluene yields 3.60 mL water in the trap. Moisture = (3.60 / 40.0) × 100 = 9.00% (v/w). Complies with FSSAI maximum permissible limit of 10.0%.</p>`
          },
          {
            title: "Determination of Total Ash and Acid Insoluble Ash (AIA / Sand & Silica) in Spices & Pulses",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Detection of Dirt, Sand, and Earthy Adulteration:</strong> Ground spices (Turmeric, Red Chilli, Coriander, Garam Masala) are widely adulterated with exhausted spent spice waste, river sand, brick dust, clay, and talc to increase bulk weight.</li>
                  <li><strong>Acid Insoluble Ash (AIA) as Pure Silica Index:</strong> Plant mineral ash dissolves readily in hot dilute hydrochloric acid (HCl). Any insoluble residue consists strictly of siliceous earth, dirt, sand, and stone dust.</li>
                  <li><strong>Statutory Limits (FSSAI / AGMARK):</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Turmeric Powder:</strong> Total Ash Max 9.0%; Acid Insoluble Ash (AIA) <strong>Max 1.5%</strong>.</li>
                      <li><strong>Chilli Powder:</strong> Total Ash Max 8.0%; AIA <strong>Max 1.3%</strong>.</li>
                      <li><strong>Coriander Powder:</strong> Total Ash Max 7.0%; AIA <strong>Max 1.5%</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 1797:1985 / ISO 928:1997 / ISO 930:1997 / AOAC 941.12",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>2.0-3.0g pulverized sample is charred over a Bunsen flame and incinerated in a muffle furnace at 550°C ± 15°C until gray-white carbon-free ash is obtained. Total ash is weighed gravimetrically. The ash is then boiled with 25 mL 10% dilute HCl (approx. 3N), filtered through Whatman No. 42 ashless filter paper, washed free of acid/chlorides with hot boiling deionized water, charred, and re-calcined at 550°C in the muffle furnace.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Total Ash % (dry basis) = [ (W_dish_ash - W_empty_dish) / W_sample_dry ] × 100<br><br>
                Acid Insoluble Ash (AIA) % = [ (W_dish_insoluble_ash - W_empty_dish) / W_sample_dry ] × 100
              </div>
              <p class="mt-2">Example: 2.500g Turmeric powder yields 0.185g total ash (7.40%). Boiling with 10% HCl and calcining yields 0.022g insoluble residue (0.88% AIA). Well within FSSAI statutory limit (AIA ≤ 1.5%).</p>`
          },
          {
            title: "Determination of Crude Protein Content in Pulses (Macro-Kjeldahl Method, N × 6.25)",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Nutritional Grading & Protein Benchmark:</strong> Pulses (legumes) represent the primary source of dietary protein for vegetarian populations. Protein content verification ensures legal grading and guards against dilution with low-protein starchy fillers or husk.</li>
                  <li><strong>FSSAI & Codex Nutritional Baselines (Dry Basis):</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Chana Dal (Bengal Gram):</strong> Min 20.0% to 22.0% Crude Protein.</li>
                      <li><strong>Toor / Arhar Dal (Pigeon Pea):</strong> Min 21.0% to 24.0% Crude Protein.</li>
                      <li><strong>Moong Dal (Green Gram):</strong> Min 23.0% to 25.0% Crude Protein.</li>
                      <li><strong>Urad Dal (Black Gram):</strong> Min 22.0% to 24.0% Crude Protein.</li>
                    </ul>
                  </li>
                  <li><strong>Detection of Non-Protein Nitrogen (NPN):</strong> Prevents economic adulteration using urea or melamine to artificially inflate Kjeldahl nitrogen.</li>
                </ul>
              </div>`,
            reference: "IS 4333 (Part 4):2002 / AOAC 979.09 / ISO 20483:2013",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>Pulverized pulse sample (0.5-1.0g, passed through 0.5 mm sieve) undergoes acid catalytic wet digestion with 20 mL concentrated H2SO4 using catalyst mixture (10g K2SO4 to elevate boiling point to 370°C + 0.5g CuSO4·5H2O / Selenium catalyst). Organic nitrogen converts to ammonium sulfate ((NH4)2SO4). Digest is cooled, neutralized with excess 40% NaOH, and liberated NH3 steam-distilled into 25 mL 4% boric acid (H3BO3) containing bromocresol green-methyl red indicator. Titration against 0.1 N standardized HCl quantifies total nitrogen.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Total Nitrogen % (N) = [ (V_sample - V_blank) × Normality_HCl × 0.014007 / W_sample ] × 100<br><br>
                Crude Protein % = Total Nitrogen % × 6.25 (Pulse Standard Conversion Factor)
              </div>
              <p class="mt-2">Example: 0.800g Toor Dal sample requires 20.80 mL 0.1005 N HCl (Blank = 0.15 mL). Nitrogen = [ (20.65 × 0.1005 × 0.014007) / 0.800 ] × 100 = 3.633% N. Crude Protein = 3.633 × 6.25 = 22.71% (dry basis). Conforms to high-grade Toor Dal standard.</p>`
          },
          {
            title: "Determination of Non-Volatile Ether Extract (NVEE) and Volatile Essential Oil (Clevenger Method)",
            purpose: `<div class="bg-purple-50 border border-purple-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Aroma, Flavor & Exhaustion Check:</strong> The commercial and therapeutic value of spices lies in their volatile essential oils. Spent spices (from which valuable essential oils have been extracted industrially) look identical to genuine spices and are fraudulently sold in markets.</li>
                  <li><strong>NVEE as Resin & Fixed Oil Metric:</strong> Non-Volatile Ether Extract quantifies fixed oils, pungent resins, and lipophilic active principles (capsaicinoids, piperine, fixed triglycerides).</li>
                  <li><strong>FSSAI & ISO Statutory Standards:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Cumin (Jeera):</strong> Volatile Oil <strong>Min 1.5% to 2.5% (v/w)</strong>.</li>
                      <li><strong>Cardamom (Elaichi):</strong> Volatile Oil <strong>Min 3.5% to 4.0% (v/w)</strong>.</li>
                      <li><strong>Black Pepper:</strong> Volatile Oil <strong>Min 2.0% (v/w)</strong>; NVEE <strong>Min 6.0% (w/w)</strong>.</li>
                      <li><strong>Red Chilli:</strong> NVEE <strong>Min 12.0% (w/w)</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 1797:1985 / ISO 6571:2008 (Volatile Oil) / AOAC 940.18 (NVEE)",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p><strong>Volatile Oil:</strong> 20-50g ground spice in a round-bottom flask with 250 mL water is subjected to steam hydrodistillation in a certified Clevenger apparatus for 4 to 6 hours. Co-condensed oil forms a distinct immiscible layer in the calibrated micro-burette trap above water.<br>
              <strong>NVEE:</strong> 2.0g moisture-free spice is extracted with anhydrous diethyl ether in a Soxhlet apparatus for 16 hours. Ether is evaporated off and residue baked at 100°C for 30 minutes to volatilize any remaining essential oil, leaving pure non-volatile extract.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Volatile Essential Oil % (v/w) = [ Volume of oil in trap (mL) / W_sample (g) ] × 100<br><br>
                NVEE % (w/w) = [ (W_flask_dry_residue - W_empty_flask) / W_sample ] × 100
              </div>
              <p class="mt-2">Example: 30.0g Cumin seed distilled for 4.5 hours yields 0.68 mL volatile oil in the trap = 2.27% (v/w). Exceeds FSSAI minimum limit of 1.5%, proving high essential oil potency without spent spice dilution.</p>`
          },
          {
            title: "Refractive Index (RI) and Butyro-Refractometer (BR) Reading at 40°C in Edible Oils",
            purpose: `<div class="bg-cyan-50 border border-cyan-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Fingerprinting Fatty Acid Architecture:</strong> Refractive Index is directly proportional to mean carbon chain length and the degree of unsaturation (number of double bonds). Highly unsaturated oils (Soybean, Mustard, Linseed) refract light substantially more than saturated fats (Palm oil, Coconut oil).</li>
                  <li><strong>Rapid Screening for Cross-Contamination:</strong> Butyro-Refractometer (BR) reading is the primary screening tool at mill intake gates to detect cheap Palm oil or mineral oil blending in Mustard, Groundnut, or Sunflower oil.</li>
                  <li><strong>FSSAI Standard BR Ranges at 40°C:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Mustard Oil / Rapeseed Oil:</strong> 58.0 to 60.5 (RI 1.4646 to 1.4662) due to long-chain erucic acid (C22:1).</li>
                      <li><strong>Groundnut (Peanut) Oil:</strong> 54.0 to 57.1 (RI 1.4620 to 1.4640).</li>
                      <li><strong>Soybean Oil:</strong> 58.5 to 68.0 (RI 1.4649 to 1.4710).</li>
                      <li><strong>Refined Palm Oil:</strong> 35.5 to 44.0 (RI 1.4491 to 1.4552) - distinctly lower.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 1):1964 / ISO 6320:2017 / AOAC 921.08 / FSSAI Oils Manual 02",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>A precision Abbe or digital benchtop refractometer equipped with a circulating water bath maintained strictly at 40.0°C ± 0.1°C measures the angle of total internal reflection. 2 drops of clear, moisture-free, filtered oil are placed between the double prisms. The boundary line between the light and dark fields is centered on the crosshairs using the dispersion compensator ring, and readings are recorded.</p>

              <h4 class="font-semibold mt-4 mb-2">Temperature Correction Formula:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                R_40 = R_observed + 0.55 × (T_observed - 40.0) [For BR reading]<br><br>
                RI_40 = RI_observed + 0.000385 × (T_observed - 40.0) [For Absolute Refractive Index]
              </div>
              <p class="mt-2">Example: Mustard oil tested at 32.0°C gives BR = 63.8. Corrected BR at 40°C = 63.8 + 0.55 × (32 - 40) = 63.8 - 4.4 = 59.4. Falls cleanly within the FSSAI statutory range of 58.0 - 60.5.</p>`
          },
          {
            title: "Determination of Specific Gravity and Relative Density at 30°C in Edible Oils (Pycnometer Method)",
            purpose: `<div class="bg-indigo-50 border border-indigo-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Physical Purity & Adulteration Screening:</strong> Density and specific gravity reflect molecular packing, double-bond unsaturation, and oxidation state. Adulteration with heavy petroleum lubricants, halogenated solvent residues, or palm stearin significantly alters oil density.</li>
                  <li><strong>FSSAI Statutory Specific Gravity Ranges at 30°C / 30°C:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Mustard Oil:</strong> 0.907 to 0.910 (Lower due to bulky C22:1 erucic chains).</li>
                      <li><strong>Groundnut Oil:</strong> 0.914 to 0.917.</li>
                      <li><strong>Sunflower Oil:</strong> 0.914 to 0.919.</li>
                      <li><strong>Soybean Oil:</strong> 0.919 to 0.925.</li>
                    </ul>
                  </li>
                  <li><strong>Volumetric Packaging Verification:</strong> Mandated for legal metrology compliance when packaging edible oils by volume (Litres) calibrated to weight (Kilograms).</li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 1):1964 / ISO 6883:2017 / AOAC 920.212",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>A certified 50 mL Gay-Lussac capillary stoppered pycnometer calibrated with degassed freshly boiled double-distilled water is filled with clear filtered oil sample. The pycnometer is equilibrated in a thermostatic precision water bath at 30.0°C ± 0.1°C for 30 minutes. The capillary meniscus is adjusted, outer surfaces wiped dry with lint-free tissue, and weighed on an analytical balance (±0.0001g).</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Specific Gravity at 30°C / 30°C = (W_pycnometer_oil - W_empty_pycnometer) / (W_pycnometer_water - W_empty_pycnometer)<br><br>
                Density at 30°C (g/mL) = Specific Gravity × Density_water_at_30°C (0.99565 g/mL)
              </div>
              <p class="mt-2">Example: Empty pycnometer = 24.3120g. With water at 30°C = 74.0620g (water mass = 49.7500g). With Mustard oil at 30°C = 69.5120g (oil mass = 45.2000g). Specific gravity = 45.2000 / 49.7500 = 0.9085. Density = 0.9085 × 0.99565 = 0.9045 g/mL. Confirms pure genuine mustard oil.</p>`
          },
          {
            title: "Determination of Iodine Value (Wijs Method - Degree of Unsaturation in Edible Oils)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Quantitative Index of Unsaturation:</strong> Iodine Value measures the mass of iodine absorbed in grams per 100g of oil, quantifying total olefinic double bonds (-CH=CH-) present in triglycerides.</li>
                  <li><strong>Authenticity & Blend Adulteration:</strong> Because every botanical oil has a strictly conserved fatty acid profile, IV serves as a rock-solid forensic indicator against blending expensive oils with cheap saturated palm oil or hydrogenated fats.</li>
                  <li><strong>FSSAI Statutory IV Specifications:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Mustard / Rapeseed Oil:</strong> 98 to 112.</li>
                      <li><strong>Groundnut Oil:</strong> 85 to 99.</li>
                      <li><strong>Soybean Oil:</strong> 120 to 141 (High linoleic/linolenic unsaturation).</li>
                      <li><strong>Sunflower Oil:</strong> 118 to 141.</li>
                      <li><strong>Refined Palm Oil:</strong> 50 to 55 (Low IV due to saturated palmitic acid).</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 1):1964 / ISO 3961:2018 / AOAC 993.20 / AOCS Cd 1d-92",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle (Wijs Halogen Addition):</h4>
              <p>Accurately weighed oil (0.20-0.25g for drying/semi-drying oils) dissolved in 20 mL carbon tetrachloride or cyclohexane-glacial acetic acid (1:1) reacts with 25.0 mL Wijs solution (Iodine monochloride, ICl, in glacial acetic acid). Halogen electrophilically adds across double bonds: -CH=CH- + ICl → -CHI-CHCl-. Excess unreacted ICl is quenched with 20 mL 10% KI and 100 mL deionized water, liberating free iodine: ICl + KI → I2 + KCl. Liberated I2 is titrated against standardized 0.1 N Na2S2O3 with 1% soluble starch indicator.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Iodine Value (g I2 / 100g oil) = [ (V_blank - V_sample) × Normality_Na2S2O3 × 12.69 ] / W_sample
              </div>
              <p class="mt-2">Example: 0.2250g Mustard oil requires 27.60 mL 0.1002 N Na2S2O3 (Blank = 46.20 mL). Titre difference = 18.60 mL. IV = [ 18.60 × 0.1002 × 12.69 ] / 0.2250 = 105.1 g I2/100g. Conforms strictly to FSSAI Mustard Oil limits (98-112).</p>`
          },
          {
            title: "Determination of Saponification Value (SV) and Mean Fatty Acid Chain Length in Edible Oils",
            purpose: `<div class="bg-teal-50 border border-teal-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Mean Molecular Weight Characterization:</strong> Saponification Value is the number of milligrams of KOH required to saponify 1.0g of oil. SV is inversely proportional to the average molecular weight of fatty acids in triglycerides. Lower molecular weight (shorter chain) fatty acids have more ester bonds per gram, consuming more KOH.</li>
                  <li><strong>Detection of Heavy Mineral Oil & Non-Saponifiable Adulterants:</strong> Mineral oils (liquid paraffin, hydrocarbons) cannot be saponified by KOH; their presence drastically crashes the Saponification Value below legal minimums.</li>
                  <li><strong>FSSAI Statutory SV Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Mustard Oil:</strong> <strong>169 to 177</strong> (Distinctly low because high erucic acid C22:1 has high molecular weight 338.5 g/mol).</li>
                      <li><strong>Groundnut Oil:</strong> 188 to 196.</li>
                      <li><strong>Soybean Oil:</strong> 189 to 195.</li>
                      <li><strong>Coconut Oil:</strong> 250 to 264 (Very high due to short-chain C12 lauric acid).</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 1):1964 / ISO 3657:2020 / AOAC 920.160 / AOCS Cd 3-25",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>2.0g clear oil sample is boiled under reflux with 25.0 mL standardized 0.5 N ethanolic KOH for 60 minutes on a boiling water bath. Triglycerides hydrolyze into glycerol and potassium soaps: C3H5(OOCR)3 + 3 KOH → C3H5(OH)3 + 3 RCOOK. The hot mixture is back-titrated with standardized 0.5 N HCl using 1 mL phenolphthalein indicator (pink to colorless end point) alongside a simultaneous reagent blank.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Saponification Value (mg KOH / g oil) = [ (V_blank - V_sample) × Normality_HCl × 56.11 ] / W_sample
              </div>
              <p class="mt-2">Example: 2.050g Mustard oil requires 37.80 mL 0.5020 N HCl (Blank = 50.40 mL). Titre difference = 12.60 mL. SV = [ 12.60 × 0.5020 × 56.11 ] / 2.050 = 173.2 mg KOH/g. Perfectly fits FSSAI statutory range of 169 - 177.</p>`
          },
          {
            title: "Determination of Free Fatty Acids (FFA % as Oleic) and Acid Value in Edible Oils",
            purpose: `<div class="bg-rose-50 border border-rose-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Hydrolytic Rancidity & Refining Efficiency:</strong> Quantifies free unesterified fatty acids liberated when triglycerides undergo enzymatic (lipase) or chemical hydrolysis due to seed moisture, mold growth, or poor storage.</li>
                  <li><strong>Smoke Point & Sensory Deterioration:</strong> High FFA causes foaming, premature smoking during deep-frying, bitter soapy taste, and accelerates auto-oxidation.</li>
                  <li><strong>FSSAI Statutory Mandatory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Refined Edible Vegetable Oils:</strong> FFA Max <strong>0.25%</strong> as Oleic (Acid Value Max 0.50 mg KOH/g).</li>
                      <li><strong>Cold Pressed / Kachhi Ghani Mustard Oil:</strong> FFA Max <strong>1.50%</strong> (Acid Value Max 3.0 mg KOH/g).</li>
                      <li><strong>Virgin / Cold Pressed Groundnut Oil:</strong> FFA Max <strong>1.50%</strong>.</li>
                      <li><strong>Raw / Crude Degummed Edible Oils:</strong> Max 2.50% to 3.00%.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 1):1964 / ISO 660:2020 / AOAC 940.28 / AOCS Ca 5a-40",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>5.0 to 10.0g homogenized oil is dissolved in 50 mL neutralized ethyl alcohol:diethyl ether (1:1 v/v) solvent mixture (pre-neutralized to phenolphthalein end point with 0.1 N KOH). The free fatty acids are directly titrated against standardized 0.1 N aqueous or ethanolic KOH to a faint persistent pink end point lasting at least 15 seconds.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Acid Value (mg KOH / g oil) = [ V_KOH (mL) × Normality_KOH × 56.11 ] / W_sample<br><br>
                FFA % (as Oleic acid) = Acid Value × 0.503 = [ V_KOH × Normality_KOH × 28.2 ] / W_sample
              </div>
              <p class="mt-2">Example: 10.00g Kachhi Ghani Mustard oil requires 2.10 mL 0.1010 N KOH. Acid Value = (2.10 × 0.1010 × 56.11) / 10.00 = 1.19 mg KOH/g. FFA % = 1.19 × 0.503 = 0.60% (as Oleic). Conforms well within the FSSAI ceiling limit of 1.50%.</p>`
          },
          {
            title: "Determination of Peroxide Value (PV by Iodometric Titration) in Edible Oils (Primary Oxidation)",
            purpose: `<div class="bg-orange-50 border border-orange-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Primary Oxidative Rancidity Index:</strong> Peroxide Value quantifies reactive lipid hydroperoxides (ROOH), the initial transient products generated when unsaturated fatty acids react with atmospheric oxygen via free radical mechanisms.</li>
                  <li><strong>Freshness & Shelf-Life Predictor:</strong> As oxidation progresses, hydroperoxides peak and decompose into offensive secondary volatiles (aldehydes, ketones, hexanal). High PV indicates early rancid degradation and loss of essential fatty acids.</li>
                  <li><strong>FSSAI & Codex Statutory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Refined Vegetable Oils:</strong> Max <strong>10.0 meq O2 / kg</strong> oil.</li>
                      <li><strong>Cold Pressed / Kachhi Ghani Oils:</strong> Max <strong>15.0 meq O2 / kg</strong> oil.</li>
                      <li>Values > 20.0 indicate sensory rancidity; > 30.0 indicate gross oxidative breakdown.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 1):1964 / ISO 3960:2017 / AOAC 965.33 / AOCS Cd 8b-90",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle (Iodometric Titration):</h4>
              <p>5.00g oil dissolved in 30 mL glacial acetic acid:isooctane (or chloroform) mixture (3:2 v/v) is treated with 0.5 mL saturated potassium iodide (KI) solution in the dark for exactly 60 seconds with vigorous swirling. Hydroperoxides quantitatively oxidize iodide to free iodine: ROOH + 2 I- + 2 H+ → ROH + I2 + H2O. The reaction is halted with 30 mL deionized water, and liberated I2 is immediately titrated with standardized 0.01 N Na2S2O3 using 1% starch indicator to the complete discharge of blue color.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Peroxide Value (meq active O2 / kg oil) = [ (V_sample - V_blank) × Normality_Na2S2O3 × 1000 ] / W_sample
              </div>
              <p class="mt-2">Example: 5.010g refined sunflower oil requires 1.85 mL 0.0102 N Na2S2O3 (Blank = 0.05 mL). Difference = 1.80 mL. PV = [ 1.80 × 0.0102 × 1000 ] / 5.010 = 3.66 meq O2/kg. Well within the FSSAI threshold of 10.0 meq/kg.</p>`
          },
          {
            title: "Determination of Secondary Oxidation: p-Anisidine Value (p-AV) and Totox Value in Oils",
            purpose: `<div class="bg-stone-50 border border-stone-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Secondary Oxidation Tracking:</strong> Peroxides are unstable and break down into secondary non-volatile and volatile carbonyls, primarily alpha-beta unsaturated aldehydes (2-alkenals and 2,4-dienals). Peroxide Value alone can give a false sense of security in abused, aged, or deep-fried oils because hydroperoxides have already decomposed.</li>
                  <li><strong>p-Anisidine Value (p-AV):</strong> Measures secondary carbonyls that cause pungent stale rancid odors and cardiovascular toxicities.</li>
                  <li><strong>Totox Value (Total Oxidation Index):</strong> Calculates total oxidative history: <code>Totox = 2 × PV + p-AV</code>.</li>
                  <li><strong>Industry & Statutory Limits:</strong> Good quality refined edible oils maintain p-AV < 10.0 and Totox < 20.0 to 26.0.</li>
                </ul>
              </div>`,
            reference: "ISO 6885:2016 / AOCS Cd 18-90 / FSSAI Lab Manual 02",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>0.5-2.0g clear dehydrated oil sample is dissolved in 25 mL HPLC-grade isooctane. Initial absorbance A1 is recorded at 350 nm against pure isooctane. 5.0 mL of the oil solution is mixed with 1.0 mL 0.25% (w/v) p-anisidine in glacial acetic acid and incubated in darkness at 23°C for exactly 10 minutes. Aldehydes react with the amino group forming a yellow Schiff base chromophore, and absorbance A2 is read at 350 nm against an isooctane-reagent blank.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                p-Anisidine Value (p-AV) = [ 25 × (1.2 × A2 - A1) ] / W_sample in g<br><br>
                Totox Value = (2 × PV) + p-AV
              </div>
              <p class="mt-2">Example: Refined soybean oil has PV = 4.2 meq/kg, A1 = 0.08, A2 = 0.32 for 1.00g sample. p-AV = [ 25 × (1.2 × 0.32 - 0.08) ] / 1.00 = 7.60. Totox = (2 × 4.2) + 7.60 = 16.0. Demonstrates acceptable fresh oil stability.</p>`
          },
          {
            title: "Spectrophotometric Determination of Curcumin Content at 425 nm in Turmeric Powder",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Therapeutic & Bioactive Evaluation:</strong> Curcumin (diferuloylmethane) along with demethoxycurcumin and bisdemethoxycurcumin constitute the primary curcuminoid bioactives imparting signature deep-yellow color, antioxidant, and anti-inflammatory properties to Curcuma longa.</li>
                  <li><strong>Detection of Exhausted Spent Turmeric:</strong> Turmeric oleoresin extraction leaves behind spent turmeric powder that is totally depleted of curcumin. Spent powder is blended into fresh turmeric to cheat consumers.</li>
                  <li><strong>FSSAI & AGMARK Statutory Standards:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Turmeric Powder (Haldi):</strong> Curcumin Content <strong>Min 2.0% to 3.0% (w/w)</strong> on dry basis (High grade Alleppey Turmeric reaches 5.0% to 6.5%).</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 3576:2010 / ASTA Method 18.0 / ISO 5566:1982 / AOAC 975.34",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>Curcuminoids are exhaustively extracted from finely pulverized turmeric powder using spectroscopic-grade 95% ethanol or acetone under reflux or ultrasonic agitation. The clear extract is filtered through Whatman No. 42 filter paper, diluted quantitatively, and absorbance measured at the maximum absorption wavelength (lambda_max = 425 nm) against an ethanol blank. Concentration is calculated using the specific extinction coefficient (A 1% 1cm = 1607) or against a certified standard calibration curve.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Curcumin % (w/w, dry basis) = [ (Absorbance at 425 nm × Dilution Factor) / (1607 × W_sample in g) ] × 100 × [ 100 / (100 - Moisture %) ]
              </div>
              <p class="mt-2">Example: 0.100g Turmeric (Moisture 8.0%) extracted and diluted to 500 mL gives Absorbance = 0.720 at 425 nm. Dilution factor = 500. Curcumin % = [ (0.720 × 500) / (1607 × 0.100) ] × [ 100 / 92 ] = 2.24% × 1.087 = 2.43% (dry basis). Conforms to FSSAI Grade 1 requirements.</p>`
          },
          {
            title: "Determination of Capsaicin Content and Scoville Heat Units (SHU by RP-HPLC) in Red Chilli",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Pungency Grading & Heat Rating:</strong> Capsaicin (8-methyl-N-vanillyl-trans-6-nonenamide) and dihydrocapsaicin account for over 90% of the intense burning sensation in chillies. Pungency grading is critical for consumer products and international export contracts.</li>
                  <li><strong>Detection of Spent Chilli Waste:</strong> Exhausted chilli powder stripped of capsaicin and oleoresin is frequently dyed with carcinogenic Sudan red dyes to mask the fraud.</li>
                  <li><strong>Commercial & FSSAI Standards:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Commercial Chilli Powders:</strong> Typically 15,000 to 60,000 SHU.</li>
                      <li><strong>Guntur / Teja Chillies:</strong> 50,000 to 100,000 SHU.</li>
                      <li><strong>Ghost Pepper / Bhut Jolokia:</strong> > 1,000,000 SHU.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ASTA Method 21.3 / ISO 3513:1995 / AOAC 995.03 (RP-HPLC)",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle (RP-HPLC-DAD):</h4>
              <p>Ground chilli (1.0g) is extracted with 25 mL 95% ethanol in a water bath at 60°C for 5 hours with ultrasonic extraction. The extract is filtered through a 0.45 micron PTFE syringe filter. Injection onto a C18 reverse-phase column (250 × 4.6 mm, 5 micron) running an isocratic mobile phase of acetonitrile:water:acetic acid (40:59:1 v/v) at 1.5 mL/min with UV detection at 280 nm separates capsaicin, dihydrocapsaicin, and nordihydrocapsaicin with baseline resolution.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Total Capsaicinoids (ppm / mg/kg) = Capsaicin ppm + Dihydrocapsaicin ppm + (Nordihydrocapsaicin ppm × 0.8)<br><br>
                Scoville Heat Units (SHU) = Total Capsaicinoids ppm × 16.1
              </div>
              <p class="mt-2">Example: HPLC chromatogram shows Capsaicin = 1850 ppm, Dihydrocapsaicin = 920 ppm. Total capsaicinoids = 2770 ppm. Scoville Heat Units = 2770 × 16.1 = 44,597 SHU (Medium-High Pungency Guntur variety).</p>`
          },
          {
            title: "Determination of Piperine Content by HPLC / UV-Vis Spectrophotometry at 343 nm in Black Pepper",
            purpose: `<div class="bg-zinc-50 border border-zinc-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Primary Pungency & Quality Hallmark:</strong> Piperine ((E,E)-5-(1,3-benzodioxol-5-yl)-1-piperidin-1-ylpenta-2,4-dien-1-one) is the principal pungent trans-trans alkaloid responsible for black pepper's bite and pharmaceutical bioavailability enhancement.</li>
                  <li><strong>Detection of Exhausted / Spent Black Pepper:</strong> Spent black pepper extracted for oleoresin is tasteless, devoid of piperine, and used as a major adulterant in whole pepper corns and powder.</li>
                  <li><strong>FSSAI & ISO 959 Statutory Standards:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Black Pepper Powder:</strong> Piperine Content <strong>Min 4.0% (w/w)</strong> on dry basis.</li>
                      <li><strong>Whole Black Pepper (Malabar/Tellicherry):</strong> Typically 4.5% to 6.5%.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 1797:1985 / ISO 5564:1982 / AOAC 987.07 / ASTA Method 12.1",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle:</h4>
              <p>0.250g finely ground black pepper is extracted in 50 mL spectroscopic-grade ethanol under gentle reflux for 3 hours, shielded from light to prevent photo-isomerization to tasteless isochavicine. The cooled extract is filtered and diluted quantitatively. Absorbance is measured at lambda_max = 343 nm. Specific extinction coefficient (A 1% 1cm = 1350 in ethanol) or calibration against a pure recrystallized piperine reference standard is used for quantification.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Piperine % (w/w, dry basis) = [ (Absorbance at 343 nm × Dilution Factor) / (1350 × W_sample in g) ] × 100 × [ 100 / (100 - Moisture %) ]
              </div>
              <p class="mt-2">Example: 0.150g black pepper (Moisture 10.0%) diluted to 1000 mL yields Absorbance = 0.945 at 343 nm. Piperine % = [ (0.945 × 1000) / (1350 × 0.150) ] × [ 100 / 90 ] = 4.67% × 1.111 = 5.19% (dry basis). Conforms to premium export grade.</p>`
          },
          {
            title: "Detection of Argemone Oil Adulteration in Mustard Oil (Nitric Acid & TLC Sanguinarine Test)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Epidemic Dropsy & Public Health Catastrophe:</strong> Argemone mexicana (prickly poppy) seeds resemble mustard seeds and yield toxic oil containing sanguinarine and dihydrosanguinarine alkaloids. Sanguinarine irreversibly inhibits capillary Na+/K+-ATPase, causing massive endothelial permeability, extensive peripheral edema, cardiac arrest, glaucoma, and bilateral blindness.</li>
                  <li><strong>Absolute Zero Tolerance:</strong> FSSAI and legal safety statutes enforce <strong>Strictly Negative (Zero Tolerance)</strong> in all edible oils.</li>
                  <li><strong>Statutory Dual Testing:</strong> Requires both preliminary chemical screening (Nitric acid test) and definitive regulatory confirmation by Thin Layer Chromatography (TLC) under 366 nm UV fluorescence.</li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 2):1976 / AOAC 974.19 / FSSAI Lab Manual 02 (Oils & Fats)",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle & Protocol:</h4>
              <p><strong>1. Nitric Acid Screening Test:</strong> 5 mL of oil is treated with 5 mL concentrated HNO3 (sp. gr. 1.42) and shaken vigorously. Development of a reddish-brown color in the lower acid layer indicates presence of argemone alkaloids (detection limit ~0.1%).<br>
              <strong>2. Regulatory Confirmatory TLC:</strong> 25 mL oil is extracted with 10 mL 1:1 HCl on a boiling water bath. The acid layer is separated, neutralized with ammonia to pH 9-10, and extracted into 10 mL chloroform. The concentrated chloroform extract is spotted on silica gel G TLC plates along with a certified Sanguinarine standard. Plates are developed in butanol:acetic acid:water (8:1:1) or benzene:acetone (9:1) and viewed under long-wave 366 nm UV light. A brilliant yellow-orange fluorescent spot at Rf ~0.65 confirms sanguinarine (detection limit 5 ppm / 0.0005%).</p>

              <h4 class="font-semibold mt-4 mb-2">Compliance Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Compliant: No yellow-orange fluorescence under 366 nm UV (Sanguinarine NEGATIVE).<br>
                Adulterated: Yellow-orange fluorescent spot at matching standard Rf = REJECT CONSIGNMENT IMMEDIATELY.
              </div>
              <p class="mt-2">Outcome: Tested Kachhi Ghani mustard oil exhibited clear colorless acid layer and zero fluorescence at 366 nm on TLC. Argemone oil is completely ABSENT.</p>`
          },
          {
            title: "Detection of Mineral Oil and Liquid Paraffin Adulteration in Edible Oils (Holde's Test)",
            purpose: `<div class="bg-slate-50 border border-slate-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Economic Fraud & Carcinogenicity:</strong> Mineral oils (liquid paraffin, transformer oils, petroleum lube cuts) are completely non-saponifiable hydrocarbons with no nutritional value. They impair the absorption of fat-soluble vitamins (A, D, E, K) and contain polycyclic aromatic hydrocarbons (PAHs), which are recognized Group 1 human carcinogens.</li>
                  <li><strong>FSSAI Mandate:</strong> Edible vegetable oils must be <strong>100% Free from Mineral Oil</strong> (Holde's test must be strictly NEGATIVE; limit of detection 0.5% by Holde's and 0.05% by TLC).</li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 2):1976 / AOAC 945.102 / FSSAI Lab Manual 02",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle (Holde's Saponification Turbidity):</h4>
              <p>Genuine vegetable oils consist of triglycerides that saponify completely into water-soluble potassium carboxylate soaps (RCOOK) and glycerol when boiled with alcoholic KOH. Mineral oil (petroleum hydrocarbons) contains zero ester linkages and cannot be saponified. Upon dilution of the saponified solution with deionized water, dissolved hydrocarbon droplets crash out of solution, producing an instant milk-white opalescence or turbidity.</p>

              <h4 class="font-semibold mt-4 mb-2">Analytical Steps:</h4>
              <p>1. 1.0 mL (approx. 22 drops) of oil is placed in a clean 50 mL conical flask with 25 mL 0.5 N ethanolic KOH.<br>
              2. Boil gently under reflux on a water bath for 15 minutes until complete saponification is achieved.<br>
              3. While still warm, add distilled water dropwise with gentle swirling. Pure vegetable oil remains crystal clear even after adding 25 mL water. Turbidity or white opalescence indicates mineral oil.<br>
              4. Confirmed by TLC on silica gel G using petroleum ether (60-80°C) as solvent: mineral oil migrates with the solvent front (Rf = 0.95-1.0) and fluoresces violet under UV or chars black with 50% H2SO4.</p>

              <h4 class="font-semibold mt-4 mb-2">Compliance Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Solution remains clear upon dilution: Mineral Oil NEGATIVE (Compliant).<br>
                Instant turbidity / milk-white opalescence: Mineral Oil POSITIVE (Adulterated).
              </div>
              <p class="mt-2">Outcome: Tested refined groundnut oil sample yielded a crystal-clear soap solution upon adding 25 mL deionized water. Mineral oil is completely ABSENT.</p>`
          },
          {
            title: "Detection of Castor Oil and Cottonseed Oil (Halphen Reaction) Adulteration in Edible Oils",
            purpose: `<div class="bg-stone-50 border border-stone-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Castor Oil (Ricinoleic Acid Toxicity):</strong> Castor oil contains high levels of hydroxy fatty acid (ricinoleic acid), which induces severe gastrointestinal purging, severe abdominal cramping, dehydration, and uterine contractions.</li>
                  <li><strong>Cottonseed Oil (Halphen Test):</strong> Cottonseed oil contains toxic cyclopropenoid fatty acids (malvalic and sterculic acids), which alter membrane fatty acid desaturase activity, elevate coronary heart disease risks, and impair reproduction if consumed unrefined.</li>
                  <li><strong>FSSAI Mandate:</strong> Both adulterants must be <strong>Strictly ABSENT / NEGATIVE</strong> in mustard, groundnut, and other premium edible oils.</li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 2):1976 / AOCS Cb 1-25 (Halphen) / AOAC 974.19",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Protocols:</h4>
              <p><strong>1. Castor Oil Detection:</strong> 10 mL oil is acidified with 1 mL concentrated HCl and treated with 5 mL 1% ammonium molybdate in concentrated H2SO4. In the presence of castor oil, an intense dark-blue or turbid precipitate develops within 5 minutes (detection limit 0.5%). Confirmed by TLC on silica gel G developed in hexane:diethyl ether:acetic acid (70:30:1), visualized with 5% phosphomolybdic acid in ethanol, showing ricinoleic acid spot at Rf ~0.25.<br>
              <strong>2. Cottonseed Oil (Halphen Test):</strong> 5 mL oil is mixed with 5 mL of 1% sulfur dissolved in carbon disulfide (CS2) mixed with equal volume of pyridine or amyl alcohol in a pressure-tight boiling tube. The tube is heated in a boiling brine bath (110°C) for 30 minutes. Cyclopropene rings react with sulfur forming a persistent pink to deep-red color (detection limit 0.5%).</p>

              <h4 class="font-semibold mt-4 mb-2">Compliance Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Ammonium molybdate: No dark blue color = Castor Oil NEGATIVE.<br>
                Halphen reaction: No persistent pink/red color = Cottonseed Oil NEGATIVE.
              </div>
              <p class="mt-2">Outcome: Both tests yielded negative results on the evaluated cold-pressed mustard oil sample. Fully compliant with FSSAI purity standards.</p>`
          },
          {
            title: "Screening and Determination of Banned Carcinogenic Sudan Dyes (Sudan I-IV & Para Red) in Red Chilli",
            purpose: `<div class="bg-rose-50 border border-rose-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Genotoxic Carcinogenicity Alert:</strong> Sudan dyes (Sudan I, Sudan II, Sudan III, Sudan IV, Para Red, Rhodamine B) are synthetic industrial azo dyes manufactured for staining plastics, waxes, and shoe polish. In vivo, hepatic azo-reductases cleave Sudan I into aniline and 1-amino-2-naphthol, causing potent DNA adduct formation, bladder carcinoma, and splenic tumors.</li>
                  <li><strong>Global Food Safety Recall Trigger:</strong> Strictly banned worldwide. FSSAI, European Commission, and US FDA enforce a <strong>Zero Tolerance (strictly < 10 to 50 ppb / 0.01 mg/kg)</strong> policy in all spices and oleoresins.</li>
                  <li><strong>Fraud Modus Operandi:</strong> Fraudsters add Sudan dyes to mask spent exhausted chilli powder, brick dust, or saw dust to impart an artificially vibrant red appearance.</li>
                </ul>
              </div>`,
            reference: "FSSAI Manual 10 (Spices) / ISO 21870 / European Commission Decision 2004/92/EC / AOAC 2007.02",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle (TLC Screening & RP-HPLC-DAD Confirmation):</h4>
              <p><strong>Screening TLC:</strong> 5.0g chilli powder is extracted with 25 mL acetonitrile:acetone (1:1). The concentrated extract is spotted on silica gel G TLC plates along with certified reference standards of Sudan I, II, III, IV, and Para Red. The plate is developed in petroleum ether:diethyl ether (80:20) or toluene. Natural carotenoids (capsanthin, capsorubin) remain at lower Rf values (Rf < 0.2), whereas synthetic non-polar Sudan dyes migrate cleanly to high Rf zones (Sudan I Rf ~0.72; Sudan IV Rf ~0.85).<br>
              <strong>Confirmatory RP-HPLC-DAD / LC-MS/MS:</strong> Extracts are filtered through 0.2 micron PTFE and separated on a C18 column (150 × 4.6 mm, 3.5 micron) using gradient elution with water (0.1% formic acid) and acetonitrile at 1.0 mL/min, with diode-array detection at 478 nm and 520 nm.</p>

              <h4 class="font-semibold mt-4 mb-2">Compliance Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                HPLC chromatogram shows zero peaks at Sudan standard retention times: Compliant (NOT DETECTED, Limit of Detection < 10 ppb).<br>
                Any detectable peak: Immediate rejection, seizure, and statutory legal reporting.
              </div>
              <p class="mt-2">Outcome: Tested commercial red chilli powder showed no detectable chromatographic peaks corresponding to Sudan I, II, III, IV, or Para Red. Fully compliant.</p>`
          },
          {
            title: "Detection of Lead Chromate and Added Inorganic Pigment Adulteration in Turmeric Powder",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Severe Heavy Metal Neurotoxicity:</strong> Lead chromate (PbCrO4) is a bright industrial yellow pigment illegally applied to polished turmeric fingers and ground turmeric to mask blemish spots and fake Alleppey golden color.</li>
                  <li><strong>Irreversible Brain & Kidney Damage:</strong> Ingesting lead causes irreversible intellectual disability, childhood encephalopathy, microcytic anemia, severe cognitive decline, and chronic kidney failure. Hexavalent chromium (Cr VI) is a recognized Group 1 carcinogen.</li>
                  <li><strong>FSSAI & Global Statutory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li>Lead (Pb) in Turmeric: <strong>Max 2.5 ppm (mg/kg)</strong>.</li>
                      <li>Chromate: <strong>Strictly NEGATIVE / ZERO TOLERANCE</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 3576:2010 / FSSAI Lab Manual 10 (Spices) / AOAC 974.14",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Chemical Screening Protocol:</h4>
              <p><strong>1. Diphenylcarbazide Chromate Reaction:</strong> 2.0g turmeric is incinerated to ash in a porcelain crucible at 500°C. Ash is treated with 5 mL 1:1 dilute H2SO4 and filtered. The filtrate is mixed with 1 mL of 0.5% (w/v) s-diphenylcarbazide in acetone. In the presence of chromium, an immediate intense violet-purple or magenta coordination complex forms (detection limit 1 ppm).<br>
              <strong>2. Acid Extraction Screening:</strong> 2.0g turmeric shaken in 10 mL concentrated HCl and diluted with water: pure turmeric turns crimson red which instantly reverts to yellow on dilution, whereas lead chromate produces an insoluble bright yellow precipitate and turns potassium iodide paper yellow (PbI2 formation).<br>
              <strong>3. Instrumental ICP-MS / FAAS:</strong> Acid digestion in microwave with HNO3/H2O2 followed by ICP-MS quantifies trace lead and total chromium down to 0.01 ppm.</p>

              <h4 class="font-semibold mt-4 mb-2">Compliance Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Diphenylcarbazide test: No violet/purple coloration = Chromate NEGATIVE.<br>
                ICP-MS Lead content: ≤ 2.5 mg/kg = Compliant.
              </div>
              <p class="mt-2">Outcome: Tested turmeric powder ash produced zero violet coloration with diphenylcarbazide; ICP-MS lead content measured 0.42 ppm (well below 2.5 ppm limit). Clean and compliant.</p>`
          },
          {
            title: "Detection of Metanil Yellow Non-Permitted Azo Dye in Turmeric Powder and Arhar Dal",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Non-Permitted Industrial Azo Dye Fraud:</strong> Metanil Yellow (sodium 4-(4-anilinophenylazo)benzenesulfonate) is an industrial acid dye used for wool, textiles, and paper. Fraudulent millers use it to polish inferior or old dull Arhar (Toor) Dal and adulterate turmeric powder to give them an eye-catching bright canary yellow appearance.</li>
                  <li><strong>Carcinogenicity & Testicular Degeneration:</strong> Ingesting Metanil Yellow causes significant spermatogenic arrest, testicular atrophy, severe degeneration of gastric mucosal lining, neurotoxicity, and tumor development.</li>
                  <li><strong>FSSAI & Codex Mandate:</strong> <strong>Strictly Prohibited / Zero Tolerance</strong>. No synthetic food colors of any kind are permitted in pulses or pure ground spices.</li>
                </ul>
              </div>`,
            reference: "IS 4333 / IS 1797 / FSSAI Lab Manual 08 (Food Additives) & Manual 10",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle (Concentrated HCl Reaction):</h4>
              <p>Natural curcumin and carotenoid pigments in pulses and spices do not maintain a permanent magenta color upon acid treatment. Metanil yellow contains an azo (-N=N-) chromophore that protonates instantly in concentrated hydrochloric acid, forming a resonance-stabilized quinonoid azonium cation displaying an intense pink-magenta color. Upon subsequent dilution with distilled water, the magenta color either persists or turns purple, unlike natural curcumin which instantly returns to yellow.</p>

              <h4 class="font-semibold mt-4 mb-2">Testing Protocol:</h4>
              <p>1. <strong>Pulses (Dals):</strong> Place 5.0g Arhar dal in a 100 mL beaker with 10 mL warm deionized water and swirl for 2 minutes to extract surface color polish. Pour off the extract into a test tube.<br>
              2. <strong>Turmeric Powder:</strong> Dissolve 1.0g turmeric in 5 mL 80% alcohol or warm water.<br>
              3. Slowly add 2 to 3 mL concentrated HCl (sp. gr. 1.18) down the side of the test tube.<br>
              4. Immediate formation of a persistent intense pink to magenta-red color that DOES NOT discharge upon adding 10 mL water confirms Metanil Yellow.<br>
              5. <strong>Confirmation:</strong> Spot the aqueous extract on Whatman No. 1 paper and develop in butanol:ethanol:water (2:1:1) along with a certified Metanil Yellow reference standard.</p>

              <h4 class="font-semibold mt-4 mb-2">Compliance Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                No persistent pink-magenta color on HCl addition: Metanil Yellow NEGATIVE (Compliant).<br>
                Persistent pink/magenta color: Metanil Yellow POSITIVE (ADULTERATED - REJECT).
              </div>
              <p class="mt-2">Outcome: Tested Toor dal and turmeric powder showed no pink-magenta coloration on concentrated HCl addition. 100% free from non-permitted dyes.</p>`
          },
          {
            title: "Detection of Khesari Dal (Lathyrus sativus / BOAA / ODAP Neurotoxin) in Chana and Toor Dal",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Neurolathyrism Prevention:</strong> Khesari dal (Lathyrus sativus / Grass pea) seeds closely resemble Chana dal (Bengal gram) and split Toor dal. Khesari contains beta-N-oxalyl-alpha,beta-diaminopropionic acid (BOAA / ODAP), a potent non-protein neurotoxic amino acid that acts as an agonist at AMPA/glutamate receptors in the spinal cord. Chronic consumption destroys upper motor neurons, causing irreversible spastic paraplegia of the lower limbs (Neurolathyrism).</li>
                  <li><strong>FSSAI & IPC Statutory Prohibition:</strong> Under Food Safety and Standards (Prohibition and Restrictions on Sales) Regulations, <strong>the sale and blending of Khesari dal is strictly illegal</strong>.</li>
                </ul>
              </div>`,
            reference: "IS 4333 / FSSAI Lab Manual 03 (Cereals & Pulses) / AOAC / ICMR Guidelines",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Morphological & Chemical Screening Protocol:</h4>
              <p><strong>1. Morphological Physical Examination:</strong> Khesari dal grains exhibit a characteristic wedge/trapezoidal shape, flat slant sides, and a distinct grayish-yellow tint with marbling, unlike the round/plump morphology of Chana and Toor dal.<br>
              <strong>2. Alkaline Hydrolysis Color Reaction:</strong> Place 5g suspected pulse sample in 10 mL deionized water. Add 2 mL 10 N KOH and heat on a boiling water bath for 30 minutes. Filter the liquid and add 1 mL of 0.1% ninhydrin or 1 mL 5 N HCl followed by 1 mL ferric chloride (FeCl3) solution. Khesari dal containing ODAP/BOAA develops an intense characteristic pinkish-red/purple coloration.<br>
              <strong>3. Paper Chromatography / HPLC Confirmation:</strong> Hydrolyzed extract spotted on Whatman No. 1 chromatography paper developed in phenol:water (4:1) alongside authentic ODAP standard gives a distinct ninhydrin-positive mauve-purple spot at Rf ~0.38.</p>

              <h4 class="font-semibold mt-4 mb-2">Compliance Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Morphology uniform and chemical hydrolysis reaction negative: Khesari Dal ABSENT (Compliant).<br>
                Wedge-shaped grains or positive FeCl3/ninhydrin pink color: Khesari Dal DETECTED (Illegal Adulteration).
              </div>
              <p class="mt-2">Outcome: Physical inspection of 500g Chana dal sample showed zero wedge-shaped grains; chemical hydrolysis and TLC confirmation were completely negative. Fully compliant.</p>`
          },
          {
            title: "Determination of Aflatoxins (B1, B2, G1, G2) and Ochratoxin A by Immunoaffinity Column and HPLC-FLD",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Extreme Hepatic Carcinogenicity:</strong> Aspergillus flavus and Aspergillus parasiticus molds synthesize difuranocoumarin mycotoxins—chiefly Aflatoxin B1—under high heat and humidity during storage of groundnuts, pulses, chillies, and spices. Aflatoxin B1 is classified as a Group 1 human carcinogen by IARC, inducing transversion mutations in the p53 tumor suppressor gene and causing hepatocellular carcinoma.</li>
                  <li><strong>FSSAI & Codex Statutory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Pulses (Whole & Milled Dals):</strong> Total Aflatoxins (B1+B2+G1+G2) <strong>Max 15.0 micro-g/kg (ppb)</strong>.</li>
                      <li><strong>Spices (Chilli, Turmeric, Pepper, Cumin):</strong> Aflatoxin B1 <strong>Max 5.0 to 10.0 ppb</strong>; Total Aflatoxins <strong>Max 10.0 to 15.0 ppb</strong>.</li>
                      <li><strong>Ochratoxin A in Spices:</strong> Max 15.0 to 20.0 micro-g/kg.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 16287:2014 / AOAC 999.07 / ISO 16050:2003 / FSSAI Lab Manual 11",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Scientific Principle (Immunoaffinity Extraction & HPLC-FLD):</h4>
              <p>25.0g finely ground sample is blended with 100 mL methanol:water (70:30 or 80:20 v/v) containing 5g NaCl at high speed (15,000 rpm) for 3 minutes. The extract is filtered and diluted with PBS buffer (pH 7.4). The solution passes through an Aflatest immunoaffinity column packed with monoclonal antibodies specific to aflatoxins B1, B2, G1, and G2. Toxins bind to antibodies while matrix interferences are washed away with deionized water. Bound aflatoxins are eluted with 1.5 mL HPLC-grade methanol.<br>
              <strong>Chromatographic Quantification:</strong> HPLC with post-column photochemical derivatization (PHRED) or Kobra cell bromination couples to a fluorescence detector (FLD: excitation 365 nm, emission 440 nm for B1/B2; 455 nm for G1/G2).</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Aflatoxin Concentration (micro-g/kg or ppb) = [ (Peak Area_sample × Standard Conc. ng/mL × Final Elution Volume mL) / (Peak Area_standard × Effective Sample Mass g) ]<br><br>
                Total Aflatoxins = Conc.(B1) + Conc.(B2) + Conc.(G1) + Conc.(G2)
              </div>
              <p class="mt-2">Example: Tested red chilli powder batch shows Aflatoxin B1 = 1.45 ppb, B2 = 0.22 ppb, G1/G2 = Not Detected. Total Aflatoxins = 1.67 ppb. Well below the FSSAI threshold of 10.0 ppb.</p>`
          },
          {
            title: "Comprehensive Statutory Standards & Quality Testing Battery Matrix for Pulses, Edible Oils & Spices",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Master Sectoral Blueprint & Compliance Guide:</strong></p>
                <p class="mt-1">This consolidated master table cross-references all critical statutory parameters, legal limit thresholds, standard reference test methods, and food safety risk profiles across three essential commodity pillars: <strong>Pulses (Dals), Edible Vegetable Oils, and Spices/Condiments</strong> under FSSAI, AGMARK, and Codex Alimentarius guidelines.</p>
              </div>`,
            reference: "FSSAI (Food Product Standards & Food Additives) Reg 2011 / AGMARK Rules / Codex Alimentarius Standards",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Master Statutory Quality Matrix:</h4>
              <div class="overflow-x-auto my-3">
                <table class="min-w-full text-xs border border-gray-300 divide-y divide-gray-200">
                  <thead class="bg-gray-100 font-bold text-gray-700">
                    <tr>
                      <th class="p-2 border">Commodity Pillar</th>
                      <th class="p-2 border">Key Testing Parameter</th>
                      <th class="p-2 border">FSSAI / AGMARK Limit</th>
                      <th class="p-2 border">Standard Method</th>
                      <th class="p-2 border">Significance & Risk</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr>
                      <td class="p-2 border font-semibold">Pulses (Dals)</td>
                      <td class="p-2 border">Extraneous Matter</td>
                      <td class="p-2 border">Total ≤1.0%, Inorganic ≤0.25%</td>
                      <td class="p-2 border">IS 4333 (Part 1)</td>
                      <td class="p-2 border">Physical purity; dental trauma protection</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Pulses (Dals)</td>
                      <td class="p-2 border">Moisture Content</td>
                      <td class="p-2 border">Max 12.0% - 14.0% (w/w)</td>
                      <td class="p-2 border">IS 4333 (Part 2) / 105°C</td>
                      <td class="p-2 border">Storage shelf-life; mold & weevil control</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Pulses (Dals)</td>
                      <td class="p-2 border">Crude Protein (N×6.25)</td>
                      <td class="p-2 border">Min 20.0% - 24.0% (Dry basis)</td>
                      <td class="p-2 border">IS 4333 (Pt 4) / Kjeldahl</td>
                      <td class="p-2 border">Nutritional authenticity; starch filler check</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Pulses (Dals)</td>
                      <td class="p-2 border">Khesari Dal (BOAA)</td>
                      <td class="p-2 border font-bold text-red-600">Strictly ABSENT (Zero)</td>
                      <td class="p-2 border">IS 4333 / KOH Hydrolysis</td>
                      <td class="p-2 border font-semibold text-red-600">Neurolathyrism & spastic paralysis prevention</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Pulses (Dals)</td>
                      <td class="p-2 border">Metanil Yellow Dye</td>
                      <td class="p-2 border font-bold text-red-600">Strictly ABSENT (Zero)</td>
                      <td class="p-2 border">Conc. HCl / TLC Test</td>
                      <td class="p-2 border">Industrial dye; prevents testicular toxicity</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Pulses (Dals)</td>
                      <td class="p-2 border">Total Aflatoxins</td>
                      <td class="p-2 border">Max 15.0 micro-g/kg (ppb)</td>
                      <td class="p-2 border">AOAC 999.07 / HPLC-FLD</td>
                      <td class="p-2 border">Hepatic cancer protection; storage molds</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Edible Oils</td>
                      <td class="p-2 border">Refractive Index (BR 40°C)</td>
                      <td class="p-2 border">Mustard: 58.0-60.5; G'nut: 54-57.1</td>
                      <td class="p-2 border">IS 548 (Pt 1) / Abbe</td>
                      <td class="p-2 border">Fatty acid unsaturation fingerprint</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Edible Oils</td>
                      <td class="p-2 border">Specific Gravity (30°C)</td>
                      <td class="p-2 border">Mustard: 0.907-0.910</td>
                      <td class="p-2 border">IS 548 (Pt 1) / Pycnometer</td>
                      <td class="p-2 border">Density check; legal metrology compliance</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Edible Oils</td>
                      <td class="p-2 border">Iodine Value (IV)</td>
                      <td class="p-2 border">Mustard: 98-112; Soy: 120-141</td>
                      <td class="p-2 border">IS 548 (Pt 1) / Wijs</td>
                      <td class="p-2 border">Unsaturation degree; screens palm adulteration</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Edible Oils</td>
                      <td class="p-2 border">Saponification Value</td>
                      <td class="p-2 border">Mustard: 169-177; G'nut: 188-196</td>
                      <td class="p-2 border">IS 548 (Pt 1) / KOH</td>
                      <td class="p-2 border">Mean chain length; screens mineral oil</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Edible Oils</td>
                      <td class="p-2 border">Free Fatty Acids (FFA %)</td>
                      <td class="p-2 border">Refined ≤0.25%; Cold-pressed ≤1.5%</td>
                      <td class="p-2 border">IS 548 (Pt 1) / Titration</td>
                      <td class="p-2 border">Hydrolytic rancidity; smoke point stability</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Edible Oils</td>
                      <td class="p-2 border">Peroxide Value (PV)</td>
                      <td class="p-2 border">Refined ≤10; Cold-pressed ≤15 meq/kg</td>
                      <td class="p-2 border">IS 548 (Pt 1) / Iodometry</td>
                      <td class="p-2 border">Primary auto-oxidation; hydroperoxide level</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Edible Oils</td>
                      <td class="p-2 border">p-Anisidine & Totox</td>
                      <td class="p-2 border">p-AV ≤10.0; Totox ≤26.0</td>
                      <td class="p-2 border">ISO 6885 / AOCS Cd 18</td>
                      <td class="p-2 border">Secondary aldehyde rancidity tracking</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Edible Oils</td>
                      <td class="p-2 border">Argemone Oil</td>
                      <td class="p-2 border font-bold text-red-600">Strictly ABSENT (Negative)</td>
                      <td class="p-2 border">IS 548 (Pt 2) / HNO3 & TLC</td>
                      <td class="p-2 border font-semibold text-red-600">Epidemic Dropsy, cardiac arrest & blindness</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Edible Oils</td>
                      <td class="p-2 border">Mineral Oil / Paraffin</td>
                      <td class="p-2 border font-bold text-red-600">Strictly ABSENT (Negative)</td>
                      <td class="p-2 border">Holde's Saponification Test</td>
                      <td class="p-2 border">Carcinogenic hydrocarbons; vitamin depletion</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Edible Oils</td>
                      <td class="p-2 border">Castor & Cottonseed Oil</td>
                      <td class="p-2 border font-bold text-red-600">Strictly ABSENT (Negative)</td>
                      <td class="p-2 border">Molybdate / Halphen Test</td>
                      <td class="p-2 border">Severe purgation & cyclopropenoid toxicity</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Spices</td>
                      <td class="p-2 border">Moisture Content</td>
                      <td class="p-2 border">Max 10.0% - 12.0% (w/w)</td>
                      <td class="p-2 border">IS 1797 / Dean & Stark</td>
                      <td class="p-2 border">Azeotropic toluene; protects essential oils</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Spices</td>
                      <td class="p-2 border">Total Ash & AIA</td>
                      <td class="p-2 border">AIA Max 1.3% - 1.5% (w/w)</td>
                      <td class="p-2 border">IS 1797 / 550°C Furnace</td>
                      <td class="p-2 border">Silica, river sand, dirt & brick dust screen</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Spices</td>
                      <td class="p-2 border">Volatile Oil & NVEE</td>
                      <td class="p-2 border">Cumin Vol. Oil ≥1.5%; Chilli NVEE ≥12%</td>
                      <td class="p-2 border">IS 1797 / Clevenger</td>
                      <td class="p-2 border">Aroma potency; detects spent spice fraud</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Spices</td>
                      <td class="p-2 border">Curcumin in Turmeric</td>
                      <td class="p-2 border">Min 2.0% - 3.0% (Dry basis)</td>
                      <td class="p-2 border">IS 3576 / UV 425 nm</td>
                      <td class="p-2 border">Active bioactive potency & spent waste screen</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Spices</td>
                      <td class="p-2 border">Capsaicin & SHU (Chilli)</td>
                      <td class="p-2 border">Grade-specific (15,000 - 80,000 SHU)</td>
                      <td class="p-2 border">ASTA 21.3 / RP-HPLC</td>
                      <td class="p-2 border">Pungency heat rating & quality grading</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Spices</td>
                      <td class="p-2 border">Piperine in Black Pepper</td>
                      <td class="p-2 border">Min 4.0% (Dry basis)</td>
                      <td class="p-2 border">IS 1797 / UV 343 nm</td>
                      <td class="p-2 border">Alkaloid pungency & authenticity benchmark</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Spices</td>
                      <td class="p-2 border">Sudan Dyes (I-IV, Para Red)</td>
                      <td class="p-2 border font-bold text-red-600">Strictly ABSENT (< 10 ppb)</td>
                      <td class="p-2 border">TLC / RP-HPLC-DAD</td>
                      <td class="p-2 border font-semibold text-red-600">Banned genotoxic bladder carcinogens</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Spices</td>
                      <td class="p-2 border">Lead Chromate in Turmeric</td>
                      <td class="p-2 border font-bold text-red-600">Strictly ABSENT (Pb ≤2.5 ppm)</td>
                      <td class="p-2 border">Diphenylcarbazide / ICP</td>
                      <td class="p-2 border font-semibold text-red-600">Severe neurotoxic lead poisoning prevention</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-xs text-gray-500 mt-2">*Note: This master testing battery represents standard FSSAI statutory testing requirements for commercial and export release. Consignments failing any critical parameter (especially argemone, mineral oil, banned dyes, or excessive aflatoxins) are subject to immediate statutory rejection and legal embargo.</p>`
          }
        ]
      };
