/**
 * Compositional Analysis: Namkeens, Chips, Bhujia, Extruded & Roasted Snacks
 * Independent product module for easy future updates and extensions.
 */

export const namkeensSnacksHi = {
        title: "नमकीन, चिप्स और स्नैक्स (Namkeens, Chips, Bhujia, Extruded & Roasted Snacks)",
        tests: [
          {
            title: "Total Fat (Crude Lipids) ka Determination (Soxhlet Solvent Extraction Method - Bhujia, Chips & Sev)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Nutritional Declaration & Deep Frying Uptake:</strong> Namkeens (Besan Bhujia, Aloo Bhujia, Sev, Gathiya) aur Potato Chips deep-fat frying process se bante hain jahan water vaporize hota hai aur frying oil porous capillary voids mein absorb hota hai. Fat content 20% se lekar 45% tak ho sakta hai.</li>
                  <li><strong>Caloric Density & Sensory Crispness:</strong> Fat mouthfeel, flavor release aur characteristic crispy texture provide karta hai. Excess fat product ko greasy banata hai aur rapid oxidative rancidity trigger karta hai.</li>
                  <li><strong>FSSAI & BIS (IS 12566) Statutory Ceilings:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fried Namkeens & Bhujia:</strong> Total Fat <strong>Max 35.0% to 42.0% (w/w)</strong> (dry basis).</li>
                      <li><strong>Potato Chips (IS 12575):</strong> Total Fat <strong>Max 35.0% to 38.0% (w/w)</strong>.</li>
                      <li><strong>Roasted / Baked Namkeens:</strong> Typically <strong>5.0% to 15.0% (w/w)</strong>.</li>
                    </ul>
                  </li>
                  <li><strong>Economic & Regulatory Compliance:</strong> Mandatory nutritional label claim verification under FSSAI (Labelling and Display) Regulations.</li>
                </ul>
              </div>`,
            reference: "IS 12566:1989 / IS 12575:1989 / ISO 1443 / AOAC 945.16 / AOAC 960.39",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>5.0g finely ground moisture-free namkeen sample ko cellulose extraction thimble mein pack kiya jaata hai. Soxhlet extraction unit mein analytical-grade petroleum ether (boiling range 40–60°C) ya n-hexane ke sath continuous reflux extraction kiya jaata hai for 16 hours (ya automated Soxtec system par 2 hours). Solvent evaporate karke pre-weighed round bottom flask mein bache huye dry fat ko 100°C oven mein 30 minutes desolventize karke analytical balance par weigh kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Total Fat % (w/w) = [ (W_flask_with_fat - W_empty_flask) / W_sample in g ] × 100
              </div>
              <p class="mt-2">5.000g Bikaneri Bhujia sample: Empty dry flask = 118.3240g, Flask + extracted fat = 120.0840g. Extracted fat = 1.7600g. Total Fat % = (1.7600 / 5.000) × 100 = 35.20% (w/w). Conforms to FSSAI & IS 12566 statutory limit (≤ 40.0%).</p>`
          },
          {
            title: "Acid Value aur Free Fatty Acids (FFA % as Oleic) of Extracted Frying Fat (Hydrolytic Rancidity)",
            purpose: `<div class="bg-rose-50 border border-rose-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Hydrolytic Breakdown of Frying Oil:</strong> High-temperature commercial frying (175°C to 190°C) ke dauran continuous moisture release (potatoes/dough se) triglycerides ke ester linkages ko hydrolyze karta hai, jisse Free Fatty Acids (FFA), monoglycerides aur diglycerides bante hain.</li>
                  <li><strong>Smoke Point Depression & Sensory Acridity:</strong> High FFA frying oil ke smoke point ko dangerously girata hai ( जिससे blue acrid smoke nikalta hai), oil foaming hoti hai, aur namkeen mein bitter soapy off-flavor aata hai.</li>
                  <li><strong>FSSAI Mandatory Statutory Ceilings:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Extracted Fat from Fried Namkeens & Potato Chips (FSSAI Reg 2.4.15):</strong> Acid Value <strong>Max 2.0 mg KOH / g</strong> oil (Equivalent to <strong>Max 1.0% FFA as Oleic</strong>).</li>
                      <li>Acid Value > 2.0 indicates abused, over-used, or degraded frying fat—illegal under FSSAI.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 1):1964 / ISO 660:2020 / AOAC 940.28 / FSSAI Oils & Fats Manual 04",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Soxhlet se extract kiye gaye solvent-free fat (5.0g) ko 50 mL pre-neutralized neutral ethyl alcohol:diethyl ether (1:1 v/v) solvent mixture mein dissolve kiya jaata hai. Free carboxylic acid groups (-COOH) ko standardized 0.1 N Potassium Hydroxide (KOH) solution ke sath phenolphthalein indicator (faint persistent pink endpoint lasting 15 seconds) tak titrate kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Acid Value (mg KOH / g oil) = [ V_KOH in mL × Normality_KOH × 56.11 ] / W_fat in g<br><br>
                FFA % (as Oleic Acid) = Acid Value × 0.503 = [ V_KOH × Normality_KOH × 28.2 ] / W_fat
              </div>
              <p class="mt-2">5.00g extracted potato chips fat requires 1.15 mL 0.1010 N KOH. Acid Value = (1.15 × 0.1010 × 56.11) / 5.00 = 1.30 mg KOH/g. FFA % = 1.30 × 0.503 = 0.65% (as Oleic). Conforms strictly to FSSAI statutory maximum ceiling of ≤ 2.0 mg KOH/g.</p>`
          },
          {
            title: "Peroxide Value (PV by Iodometric Titration) of Extracted Snack Fat (Primary Oxidative Rancidity)",
            purpose: `<div class="bg-orange-50 border border-orange-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Primary Oxidative Rancidity Monitoring:</strong> Fried namkeens aur chips mein high surface area-to-volume ratio aur atmospheric oxygen exposure ke karan unsaturated fatty acids par free radical chain auto-oxidation hoti hai, jisse lipid hydroperoxides (ROOH) bante hain.</li>
                  <li><strong>Shelf-Life Forecasting & Off-Flavors:</strong> High PV early rancidity ko indicate karta hai. Hydroperoxides aage break hokar malodorous aldehydes aur ketones mein decompose hote hain jo fried snacks ko stale aur inedible bana dete hain.</li>
                  <li><strong>FSSAI Statutory Ceilings:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Extracted Fat from Packaged Fried Snacks (FSSAI Reg):</strong> Peroxide Value <strong>Max 10.0 meq O2 / kg</strong> fat (Freshly packed snacks typically < 3.0 to 5.0 meq/kg).</li>
                      <li>PV > 10.0 meq/kg indicates advanced oxidation and impending shelf-life expiry.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 1):1964 / ISO 3960:2017 / AOAC 965.33 / AOCS Cd 8b-90",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Iodometric Titration):</h4>
              <p>5.000g solvent-free extracted snack fat ko 30 mL glacial acetic acid:chloroform (3:2 v/v) ya acetic acid:isooctane mein dissolve kiya jaata hai. 0.5 mL freshly prepared saturated Potassium Iodide (KI) solution add karke dark cabinet mein exactly 60 seconds swirl karke 5 minutes react karwaya jaata hai. Hydroperoxides quantitatively iodide ko free iodine mein oxidize karte hain: ROOH + 2 I- + 2 H+ ⟶ ROH + I2 + H2O. 30 mL deionized water add karke liberated iodine ko standardized 0.01 N Sodium Thiosulfate (Na2S2O3) se starch indicator ki presence mein titrate kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Peroxide Value (meq active O2 / kg fat) = [ (V_sample - V_blank) × Normality_Na2S2O3 × 1000 ] / W_fat in g
              </div>
              <p class="mt-2">5.020g extracted bhujia fat: Titre = 1.95 mL 0.0102 N Na2S2O3 (Blank = 0.05 mL). Difference = 1.90 mL. PV = [ 1.90 × 0.0102 × 1000 ] / 5.020 = 3.86 meq O2/kg. Well within the FSSAI threshold (≤ 10.0 meq/kg).</p>`
          },
          {
            title: "Secondary Lipid Oxidation: p-Anisidine Value (p-AV) aur Totox Value (ISO 6885 in Snack Fat)",
            purpose: `<div class="bg-stone-50 border border-stone-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Secondary Oxidation Aldehydic By-Products:</strong> High-temperature frying ke dauran hydroperoxides thermally unstable hote hain aur rapidly decompose ho jaate hain volatile aur non-volatile alpha,beta-unsaturated aldehydes (2-alkenals, 2,4-dienals) mein.</li>
                  <li><strong>Deceptive PV in Aged Snacks:</strong> Purane ya over-fried snacks mein hydroperoxides decompose ho chuke hote hain jisse Peroxide Value artificially low dikhti hai! p-Anisidine Value (p-AV) secondary aldehydes ko quantify karke true oxidative history reveal karti hai.</li>
                  <li><strong>Totox Value (Total Oxidation Index):</strong> Overall total rancidity index: <code>Totox = 2 × PV + p-AV</code>.</li>
                  <li><strong>Quality Limits:</strong> High quality fresh snack fat: p-AV < <strong>10.0</strong>; Totox Value < <strong>20.0 to 26.0</strong>.</li>
                </ul>
              </div>`,
            reference: "ISO 6885:2016 / AOCS Cd 18-90 / FSSAI Lab Manual 04",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>1.000g extracted dehydrated snack fat ko 25 mL HPLC-grade isooctane mein dissolve kiya jaata hai. Initial absorbance A1 350 nm par read ki jaati hai. 5.0 mL fat solution ko 1.0 mL 0.25% (w/v) p-anisidine in glacial acetic acid ke sath dark mein 23°C par exactly 10 minutes react karwaya jaata hai. Aldehydes p-anisidine ke amino group ke sath react karke yellow Schiff base chromophore banate hain. Absorbance A2 350 nm par isooctane-reagent blank ke against measure ki jaati hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                p-Anisidine Value (p-AV) = [ 25 × (1.2 × A2 - A1) ] / W_fat in g<br><br>
                Totox Value = (2 × PV) + p-AV
              </div>
              <p class="mt-2">Extracted potato chips fat: PV = 4.2 meq/kg; A1 = 0.08, A2 = 0.31 for 1.00g sample. p-AV = [ 25 × (1.2 × 0.31 - 0.08) ] / 1.00 = 7.30. Totox = (2 × 4.2) + 7.30 = 15.70. Acceptable fresh snack quality (Totox < 20.0).</p>`
          },
          {
            title: "Total Polar Compounds (TPC %) in Frying Oil & Snack Fat (Dielectric Sensor & Silica Column)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Thermal Polymerization & Degradation:</strong> Commercial deep-frying mein repeated heating aur continuous high temperature (180°C) frying oil ke triglycerides ko degrade karke polar compounds banate hain—dimers, trimers, oxidized fatty acids, cyclic monomers, aur epoxy compounds.</li>
                  <li><strong>Cardiovascular Toxicity & Carcinogenicity:</strong> Polar degradation products liver hypertrophy, cellular damage, gastrointestinal inflammation, endothelial dysfunction aur atherosclerosis trigger karte hain.</li>
                  <li><strong>FSSAI Mandatory 25% Discard Limit (RUCO - Repurpose Used Cooking Oil):</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li>FSSAI Food Safety and Standards Regulations ke tehat: <strong>Total Polar Compounds (TPC) strictly Max 25.0% (w/w)</strong>.</li>
                      <li>Jis frying oil ka TPC > 25.0% ho jaye, use food use se discard karna legally mandatory hai!</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 8420:2002 / AOAC 982.27 / FSSAI Frying Oil Regulations (RUCO Guidelines)",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Silica Gel Chromatography & Capacitive Sensor):</h4>
              <p><strong>1. Reference Column Method (ISO 8420):</strong> 1.0g extracted fat ko silica gel chromatographic column (mesh 70-230, water-adjusted to 5%) par load kiya jaata hai. Non-polar triglycerides ko petroleum ether:diethyl ether (87:13 v/v) se elute karke separate kiya jaata hai. Polar compounds silica gel par tightly retain ho jaate hain. Non-polar fraction ko evaporate karke weigh kiya jaata hai aur difference se % TPC calculate hota hai.<br>
              <strong>2. Screening Method:</strong> Calibrated capacitive dielectric constant sensor (Testo 270 oil tester) ko 40–50°C warm oil sample mein dip karke dielectric shift se directly % TPC read kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Total Polar Compounds % (TPC) = [ (W_sample - W_non_polar_fraction) / W_sample ] × 100
              </div>
              <p class="mt-2">1.050g snack frying oil sample yields 0.865g non-polar triglycerides. Polar fraction = 1.050 - 0.865 = 0.185g. TPC % = (0.185 / 1.050) × 100 = 17.62% (w/w). Conforms to FSSAI mandatory threshold (≤ 25.0%).</p>`
          },
          {
            title: "Trans Fatty Acids (% of Total Fat) Determination by Capillary Gas Chromatography (GC-FID)",
            purpose: `<div class="bg-indigo-50 border border-indigo-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Elimination of Industrial Trans Fats (iTFA):</strong> Partially hydrogenated vegetable oils (Vanaspati) aur repeated high-heat frying natural cis-double bonds (-CH=CH-) ko trans-isomers (Elaidic acid C18:1t, Linoelaidic acid C18:2t) mein convert karte hain.</li>
                  <li><strong>Coronary Heart Disease (CHD) Mortality:</strong> Trans fatty acids human body mein LDL ('bad' cholesterol) ko badhate hain aur protective HDL ('good' cholesterol) ko drop karte hain, systemic vascular inflammation aur heart attack ka risk drastically badhate hain.</li>
                  <li><strong>FSSAI & WHO Global Mandatory Mandate:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li>FSSAI statutory regulation (effective Jan 2022): <strong>Trans Fatty Acids Max 2.0% of Total Fat</strong> across all fats, oils, and packaged foods/namkeens.</li>
                      <li>'Trans Fat Free' claim ke liye: <strong>< 0.2g trans fat per 100g</strong> product.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "AOAC 996.06 / ISO 12966-2 & 4 / AOCS Ce 1h-05 / FSSAI Regulations 2021",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (FAME Preparation & GC-FID Analysis):</h4>
              <p>100 mg extracted snack fat ko methanolic NaOH ke sath saponify karke 14% Boron Trifluoride in methanol (BF3-MeOH) ke sath transesterify karke Fatty Acid Methyl Esters (FAME) banaye jaate hain. FAMEs ko high-polarity 100-meter SP-2560 ya CP-Sil 88 capillary column (100 m × 0.25 mm ID × 0.20 µm film thickness) par Gas Chromatograph with Flame Ionization Detector (GC-FID) par separate kiya jaata hai. Split ratio 100:1, carrier gas hydrogen/helium at 1.0 mL/min, oven program 140°C to 240°C. Trans-isomers (C18:1t, C18:2tt, C18:2ct) unke corresponding cis-isomers se pehle elute hote hain.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Trans Fatty Acids % (of Total Fat) = [ Σ Peak Area of all Trans FAMEs / Σ Total FAME Peak Area ] × 100
              </div>
              <p class="mt-2">Extracted Bhujia fat FAME profile: Total trans peaks area = 1.35%, Total cis and saturated peaks = 98.65%. Total Trans Fat = 1.35% of total fat. Conforms strictly to FSSAI national ceiling of ≤ 2.0%.</p>`
          },
          {
            title: "Salt (Sodium Chloride, NaCl) Content Determination by Mohr's / Volhard Argentometric Titration",
            purpose: `<div class="bg-slate-50 border border-slate-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Palatability, Sodium Burden & Hypertension:</strong> Salt namkeens aur snacks ka primary flavor enhancer aur seasoning component hai. High sodium intake hypertension, cardiovascular diseases, kidney load, aur stroke ka major causative factor hai.</li>
                  <li><strong>FSSAI Mandatory Sodium Labelling:</strong> FSSAI (Labelling and Display) Regulations ke tehat har packet par Sodium (mg per 100g aur per serve) declare karna statutory obligation hai.</li>
                  <li><strong>FSSAI & BIS (IS 12566) Standards:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Bhujia & Sev (IS 12566):</strong> Salt (as NaCl) <strong>Max 1.5% to 3.0% (w/w)</strong> (dry basis).</li>
                      <li><strong>Potato Chips (IS 12575):</strong> Salt <strong>Max 2.0% (w/w)</strong>.</li>
                      <li><strong>Spiced Mixtures & Namkeens:</strong> Typically <strong>1.5% to 2.5%</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 12566:1989 / IS 12575 / AOAC 937.09 (Volhard Method) / AOAC 971.27",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Mohr's & Volhard Argentometric Methods):</h4>
              <p>5.0g crushed namkeen sample ko 100 mL hot deionized water ke sath boil karke water-soluble chlorides (Cl-) ko exhaustively extract kiya jaata hai. Filtered aqueous extract ko 1.0 mL 5% Potassium Chromate (K2CrO4) indicator ke sath standardized 0.1 N Silver Nitrate (AgNO3) se titrate kiya jaata hai. White Silver Chloride (AgCl) precipitate pehle banta hai: Ag+ + Cl- ⟶ AgCl(s). Jaise hi saare chloride ions exhaust hote hain, silver ions chromate ke sath react karke brick-red Silver Chromate (Ag2CrO4) precipitate banate hain jo sharp endpoint show karta hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Sodium Chloride % (NaCl w/w) = [ V_AgNO3 in mL × Normality_AgNO3 × 0.05844 / W_sample in g ] × 100<br><br>
                Sodium Content (mg / 100g) = NaCl % × 393.4
              </div>
              <p class="mt-2">5.000g Potato Chips sample: Consumed AgNO3 = 14.80 mL of 0.1002 N (Blank = 0.10 mL). Net = 14.70 mL. NaCl % = [ (14.70 × 0.1002 × 0.05844) / 5.000 ] × 100 = 1.72% (w/w). Sodium = 1.72 × 393.4 = 676.6 mg Na/100g. Conforms to FSSAI & IS 12575 standards (≤ 2.0%).</p>`
          },
          {
            title: "Moisture Content Determination in Fried & Roasted Snacks (105°C Forced-Air Oven Method)",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Crispness, Glass Transition & Texture Loss:</strong> Fried snacks ka signature crispy brittle bite unke ultra-low moisture starch-protein glassy matrix ki wajah se hota hai. High moisture par starch matrix glassy state se rubbery state mein transition kar jaata hai, jisse snack soggy aur stale ho jaata hai.</li>
                  <li><strong>Microbial Stability & Fungal Control:</strong> Excess moisture hydrolytic rancidity accelerate karta hai aur xerophilic molds (Aspergillus) ki growth ko promote karta hai.</li>
                  <li><strong>FSSAI & BIS Statutory Standards:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fried Namkeens, Bhujia & Sev (IS 12566):</strong> Moisture <strong>Max 1.5% to 3.0% (w/w)</strong>.</li>
                      <li><strong>Potato Chips (IS 12575):</strong> Moisture <strong>Max 2.0% to 3.0% (w/w)</strong>.</li>
                      <li><strong>Roasted Grain Snacks:</strong> Moisture <strong>Max 4.0% to 6.0% (w/w)</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 12566:1989 / IS 12575 / ISO 1442 / AOAC 925.10 / AOAC 930.15",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>5.0g finely crushed namkeen sample ko pre-dried tared flat-bottom aluminium/glass moisture dish mein evenly spread kiya jaata hai. Sample ko forced-air convection oven mein 105°C ± 2°C par 3 hours heat kiya jaata hai. Dish ko desiccator (freshly activated silica gel) mein 30 minutes cool karke analytical balance (±0.0001g) par weigh kiya jaata hai jab tak successive weighings mein difference < 1 mg na ho.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Moisture % (w/w) = [ (W_dish_initial - W_dish_dried) / W_sample in g ] × 100
              </div>
              <p class="mt-2">5.000g Potato Chips: Dish + sample initial = 32.4500g, Dish + sample after 105°C drying = 32.3650g. Loss = 0.0850g. Moisture % = (0.0850 / 5.000) × 100 = 1.70% (w/w). Conforms to FSSAI & IS 12575 standard (≤ 3.0%).</p>`
          },
          {
            title: "Water Activity (aw) at 25°C by Chilled-Mirror Dewpoint Method (ISO 18787 in Dry Snacks)",
            purpose: `<div class="bg-teal-50 border border-teal-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>True Thermodynamic Spoilage & Crispness Boundary:</strong> Total moisture se zyada Water Activity (aw) determine karti hai ki snack crispy rahega ya soggy. At 25°C, jab aw critical water activity (aw_c = 0.35 to 0.40) ko cross karti hai, potato chips aur bhujia ka crispness index collapse ho jaata hai.</li>
                  <li><strong>Microbial Absolute Barrier:</strong> aw < 0.60 par koi bhi bacteria, yeast ya mold biologically reproduce nahi kar sakta. Maintaining aw < 0.30 guarantees indefinite shelf-life against bacterial and mold spoilage.</li>
                  <li><strong>Quality Thresholds:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Crispy Fried Potato Chips & Bhujia:</strong> aw <strong>0.15 to 0.28</strong> (Optimal glass-state crispness).</li>
                      <li><strong>Critical Sensory Crispness Loss Threshold:</strong> aw = <strong>0.38 to 0.42</strong> (Product becomes unacceptable).</li>
                      <li><strong>Maximum Allowed aw in Dry Packaged Snacks:</strong> Max <strong>0.30 to 0.45</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 18787:2017 / AOAC 978.18 / Decagon AquaLab Technical Protocols",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Chilled-Mirror Dewpoint Psychrometry):</h4>
              <p>Crushed snack sample ko disposable sample cup mein half-fill karke sealed sensor chamber mein place kiya jaata hai. Thermoelectric Peltier cooler ek precision optical mirror ko chill karta hai. Jaise hi chamber ke equilibrium headspace vapor se mirror par microscopic dew condense hoti hai, photoelectric cell condensation point detect karta hai. Chilled-mirror temperature aur sample surface infrared temperature se water activity aw calculate hoti hai (accuracy ±0.003 aw).</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                aw = p / p0 = Saturation Vapor Pressure at Dewpoint / Saturation Vapor Pressure at Sample Temp
              </div>
              <p class="mt-2">Packaged Aloo Bhujia sample tested at 25.0°C ± 0.1°C: Instrument reading aw = 0.224. Well below critical softening boundary (0.38); guarantees maximum crispness and zero microbial activity.</p>`
          },
          {
            title: "Total Ash aur Acid Insoluble Ash (AIA - Sand & Silica Contamination) in Namkeens (IS 12566)",
            purpose: `<div class="bg-stone-50 border border-stone-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Detection of Dirt, Sand, and Earthy Adulteration:</strong> Raw ingredients (gram flour/besan, spices like cumin, coriander, red chilli, rock salt) sun-drying aur threshing ke dauran mitti, river sand, aur stone dust se contaminate hote hain.</li>
                  <li><strong>Acid Insoluble Ash as Pure Siliceous Dirt Index:</strong> Normal plant minerals (potassium, sodium, calcium) dilute HCl mein dissolve ho jaate hain. Jo residue nahi ghulta wo pure siliceous sand, dirt, aur quartz powder hota hai.</li>
                  <li><strong>FSSAI & BIS Statutory Standards (IS 12566):</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Namkeens, Bhujia & Sev:</strong> Acid Insoluble Ash <strong>Max 0.10% (w/w)</strong> (dry basis).</li>
                      <li><strong>Potato Chips (IS 12575):</strong> AIA <strong>Max 0.05% to 0.10% (w/w)</strong>.</li>
                      <li><strong>Total Ash:</strong> Max <strong>4.0% to 5.0% (w/w)</strong> (dry basis, excluding salt).</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 12566:1989 / IS 12575 / IS 1155 / ISO 930 / AOAC 941.12",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>5.0g finely ground sample ko porcelain crucible mein pre-char karke muffle furnace mein 550°C ± 20°C par 4 hours incinerate kiya jaata hai jab tak carbon-free ash na mile. Total ash weigh kiya jaata hai. Ash mein 25 mL 10% dilute HCl (approx 3 N) add karke 10 minutes steam bath par boil kiya jaata hai. Whatman No. 42 ashless filter paper par filter karke boiling deionized water se chloride-free hone tak wash kiya jaata hai. Filter paper ko dry karke wapas muffle furnace mein 550°C par calcine kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Acid Insoluble Ash % (dry basis) = [ (W_crucible_AIA - W_empty_crucible) / W_sample_dry ] × 100
              </div>
              <p class="mt-2">5.000g Ratlami Sev sample yields 0.0035g insoluble siliceous residue. AIA % = (0.0035 / 5.000) × 100 = 0.070% (w/w). Conforms to FSSAI statutory maximum limit of ≤ 0.10%.</p>`
          },
          {
            title: "Synthetic Antioxidants (TBHQ, BHA, BHT) Quantification in Snack Fat by RP-HPLC-DAD",
            purpose: `<div class="bg-purple-50 border border-purple-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Rancidity Prevention vs Cytotoxicity:</strong> Commercial frying oils aur packaged namkeens mein lipid auto-oxidation ko delay karne ke liye synthetic phenolic antioxidants—Tertiary Butylhydroquinone (TBHQ), Butylated Hydroxyanisole (BHA), aur Butylated Hydroxytoluene (BHT) add kiye jaate hain.</li>
                  <li><strong>Toxicological Limits:</strong> Excessive doses mein TBHQ cellular DNA damage, hepatic enzyme induction, aur potential carcinogenicity show karta hai. Over-dosing strictly illegal hai.</li>
                  <li><strong>FSSAI & Codex Statutory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>TBHQ in Edible Oils and Fried Snacks:</strong> Max <strong>200 mg/kg (ppm)</strong> based on fat content.</li>
                      <li><strong>BHA:</strong> Max <strong>200 mg/kg (ppm)</strong>.</li>
                      <li><strong>Combined Antioxidants (TBHQ + BHA + BHT):</strong> Total combination <strong>Max 200 mg/kg</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "AOAC 983.15 / ISO 16931:2009 / FSSAI Lab Manual 08 (Food Additives)",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (RP-HPLC-DAD Separation):</h4>
              <p>5.0g extracted snack fat ko 20 mL n-hexane mein dissolve kiya jaata hai. Hexane solution ko 3 × 10 mL acetonitrile se partition extract kiya jaata hai. Acetonitrile layer (jisme polar synthetic antioxidants extract ho jaate hain jabki non-polar triglycerides hexane layer mein rehte hain) ko concentrate kiya jaata hai. Extract ko C18 reversed-phase column (150 × 4.6 mm, 5 µm) par Water:Acetonitrile:Acetic acid (50:48:2 v/v) isocratic mobile phase ke sath separate karke UV-DAD detector par 280 nm par quantify kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Antioxidant Conc. (mg/kg or ppm in fat) = [ (Peak Area_sample × Standard Conc. µg/mL × Final Vol. mL) / (Peak Area_std × W_fat in g) ]
              </div>
              <p class="mt-2">Extracted snack fat sample shows TBHQ peak at retention time 4.2 min. Calculated TBHQ = 142.5 mg/kg (ppm in fat); BHA = Not Detected. Complies with FSSAI statutory maximum limit of ≤ 200 ppm.</p>`
          },
          {
            title: "Detection & Chromatographic Identification of Added Synthetic Coal-Tar Food Colors in Snacks",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Color Polish Fraud & Non-Permitted Dyes:</strong> Namkeens (sev, bhujia, spicy mixture, dalmoth) ko visually bright aur attractive banane ke liye artificial colors add kiye jaate hain. Fraudsters expensive natural spices (turmeric, paprika) ki jagah saste toxic industrial dyes (Metanil Yellow, Rhodamine B, Auramine, Sudan dyes) use karte hain.</li>
                  <li><strong>Carcinogenicity & Testicular Atrophy:</strong> Metanil Yellow spermatogenesis ko arrest karta hai aur testicular atrophy cause karta hai; Rhodamine B ek potent mutagen aur suspected human carcinogen hai.</li>
                  <li><strong>FSSAI Statutory Mandate:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Traditional Besan Namkeens & Bhujia (IS 12566):</strong> Synthetic food colors strictly <strong>NOT PERMITTED / ZERO TOLERANCE</strong> (Natural color from spices like turmeric and chilli only).</li>
                      <li><strong>Certain Extruded / Seasoned Snacks (where permitted):</strong> Permitted synthetic food colors (Sunset Yellow FCF, Tartrazine) <strong>Max 100 mg/kg (ppm)</strong> with mandatory label declaration.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 12566 / FSSAI Lab Manual 08 (Food Additives) / AOAC 995.11 / Paper Chromatography",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Wool Dyeing & Paper Chromatography):</h4>
              <p>10.0g crushed namkeen sample ko 50 mL 2% ammonia in 70% alcohol ke sath extract karke colors ko dissolve kiya jaata hai. Extract ko dilute acetic acid se acidify karke pure degreased white wool thread ke sath 30 minutes boil kiya jaata hai. Synthetic coal-tar acid dyes wool fiber par firmly bind ho jaate hain jabki natural food colors wash ho jaate hain. Wool thread ko dilute NH4OH se boil karke dye ko strip kiya jaata hai. Stripped color ko Whatman No. 1 chromatography paper ya TLC plate par spot karke standard solvent (n-Butanol:Ethanol:Water 2:1:1) mein develop kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Compliance Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Wool strip test colorless & zero synthetic spots on TLC: Permitted & Natural (COMPLIANT).<br>
                Metanil Yellow (Conc. HCl pink reaction) or Rhodamine B detected: REJECT BATCH IMMEDIATELY.
              </div>
              <p class="mt-2">Tested Bikaneri Bhujia sample: Wool dyeing test completely negative; acidified extract showed zero pink response with conc. HCl. 100% free from added synthetic dyes.</p>`
          },
          {
            title: "Acrylamide Quantification in Potato Chips & Fried Snacks by LC-MS/MS (Process Contaminant)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Thermal Process-Induced Carcinogen:</strong> Potato chips, potato sticks, aur high-temperature fried starch snacks mein 120°C se upar frying ke dauran free amino acid L-asparagine aur reducing sugars (glucose, fructose) Maillard reaction ke through neurotoxic aur carcinogenic Acrylamide (2-propenamide) banate hain.</li>
                  <li><strong>Genotoxicity & Peripheral Neuropathy:</strong> Acrylamide in vivo metabolic conversion se glycidamide banata hai jo DNA bases ke sath covalent adducts form karta hai. IARC ne ise Group 2A 'Probable Human Carcinogen' classify kiya hai.</li>
                  <li><strong>FSSAI & European Commission (EU 2017/2158) Benchmark Levels:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Potato Chips (Crisps) from fresh potatoes:</strong> Benchmark Level <strong>Max 750 µg/kg (ppb)</strong>.</li>
                      <li><strong>Potato crisps from dough:</strong> Benchmark Level <strong>Max 750 µg/kg</strong>.</li>
                      <li>Continuous mitigation monitoring (asparaginase treatment, low-temperature vacuum frying) mandated.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 18862:2016 / AOAC 2010.01 / FDA Acrylamide Method / EU Regulation 2017/2158",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Isotope Dilution LC-MS/MS):</h4>
              <p>2.00g finely powdered potato chips sample mein internal standard 13C3-Acrylamide spike kiya jaata hai. Sample ko 20 mL deionized water ke sath ultrasonic bath mein extract karke defat karne ke liye n-hexane se wash kiya jaata hai. Aqueous extract ko Carrez reagents I & II se clarify karke Multimode SPE (Oasis HLB + MCX) cartridge se clean kiya jaata hai. Purified extract ko Hypercarb porous graphitic carbon (PGC) column par separate karke Triple-Quadrupole Mass Spectrometer (ESI+ MRM mode) par precursor-to-product ion transition m/z 72 ⟶ 55 (quantifier) aur 72 ⟶ 27 (qualifier) monitor karke quantify kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Acrylamide (µg/kg or ppb) = [ (Area_native / Area_labeled) × Conc._labeled_std ng/mL × Vol. mL ] / W_sample in g
              </div>
              <p class="mt-2">Tested commercial salted potato chips sample: Acrylamide quantified at 320 µg/kg (ppb). Well below the European Commission and FSSAI benchmark action level of 750 µg/kg.</p>`
          },
          {
            title: "Total Aflatoxins (B1, B2, G1, G2) Determination by Immunoaffinity Column & HPLC-FLD in Snacks",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Peanut, Corn & Pulse Toxin Vulnerability:</strong> Peanuts (moongphali in mixtures, salted peanuts), corn grits (extruded puffs), aur pulses Aspergillus flavus aur Aspergillus parasiticus mold contamination ke liye extremely vulnerable hote hain agar harvesting ya storage par moisture high ho.</li>
                  <li><strong>Hepatocellular Carcinoma Risk:</strong> Aflatoxin B1 world ka most potent natural chemical carcinogen hai jo liver DNA ke p53 suppressor gene ko mutate karta hai. Deep frying ya roasting aflatoxins ko destroy nahi karti kyunki inka thermal decomposition point > 250°C hota hai!</li>
                  <li><strong>FSSAI & Codex Statutory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Peanuts, Corn & Fried Snacks:</strong> Total Aflatoxins (B1 + B2 + G1 + G2) <strong>Max 15.0 µg/kg (ppb)</strong>.</li>
                      <li><strong>Aflatoxin B1:</strong> Max <strong>10.0 µg/kg (ppb)</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 16287:2014 / AOAC 999.07 / ISO 16050 / FSSAI Contaminants Regulations 2011",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (IAC Clean-up & HPLC-PHRED-FLD):</h4>
              <p>25.0g finely ground snack sample ko 100 mL Methanol:Water (70:30 v/v) + 5g NaCl ke sath high-speed blender mein 3 minutes blend kiya jaata hai. Diluted extract ko monoclonal antibody Aflatest immunoaffinity column se pass kiya jaata hai. Toxins antibody se bind hote hain aur matrix impurities wash ho jaati hain. Eluted aflatoxins ko C18 column par post-column photochemical derivatization (PHRED) ke sath Fluorescence Detector (FLD: Ex 365 nm, Em 440 nm) par quantify kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Total Aflatoxins (µg/kg or ppb) = Conc.(B1) + Conc.(B2) + Conc.(G1) + Conc.(G2)
              </div>
              <p class="mt-2">Tested Masala Peanut Namkeen sample: Aflatoxin B1 = 2.10 ppb, B2 = 0.45 ppb, G1/G2 = Not Detected. Total Aflatoxins = 2.55 ppb. Conforms safely to FSSAI statutory limit of ≤ 15.0 ppb.</p>`
          },
          {
            title: "Toxic Heavy Metals Contamination (Lead Pb, Cadmium Cd, Arsenic As) in Namkeens by Microwave ICP-MS",
            purpose: `<div class="bg-zinc-50 border border-zinc-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Environmental & Raw Material Influx:</strong> Potato crops soil se Cadmium (Cd) aur Arsenic (As) bioaccumulate karte hain; besan/pulses contaminated agricultural soil aur rock salts (Kala namak, Sendha namak) se Lead (Pb) aur trace heavy metals carry karte hain.</li>
                  <li><strong>Chronic Neurotoxicity & Organ Damage:</strong> Lead pediatric neurological impairment aur cognitive deficit karta hai; Cadmium renal dysfunction karta hai; Arsenic skin lesions aur bladder cancer karta hai.</li>
                  <li><strong>FSSAI Statutory Maximum Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Foods Not Specified (Fried Namkeens & Chips):</strong> Lead (Pb) <strong>Max 2.5 mg/kg (ppm)</strong>.</li>
                      <li><strong>Cadmium (Cd):</strong> Max <strong>0.1 to 0.5 mg/kg (ppm)</strong>.</li>
                      <li><strong>Arsenic (As):</strong> Max <strong>1.1 mg/kg (ppm)</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 17294-2:2016 / AOAC 2015.01 / FSSAI Contaminants Regulations 2011",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Microwave Acid Digestion & ICP-MS):</h4>
              <p>0.500g homogenized snack sample ko closed PTFE microwave vessel mein 6 mL concentrated HNO3 (65%) aur 2 mL H2O2 (30%) ke sath 200°C par 30 minutes digest kiya jaata hai. Clear digest ko ultrapure Milli-Q water se 50 mL tak dilute karke Inductively Coupled Plasma Mass Spectrometer (ICP-MS) ke argon plasma mein nebulize kiya jaata hai. Helium collision cell (KED mode) se 208Pb, 111Cd, aur 75As isotopes monitor kiye jaate hain.</p>

              <h4 class="font-semibold mt-4 mb-2">Compliance Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Concentration of all toxic elements below FSSAI statutory ceilings: COMPLIANT.
              </div>
              <p class="mt-2">Commercial Besan Sev sample: Pb = 0.18 mg/kg (Limit 2.5), Cd = 0.035 mg/kg (Limit 0.50), As = 0.040 mg/kg (Limit 1.10). Conforms cleanly to FSSAI statutory standards.</p>`
          },
          {
            title: "Crude Protein Determination in Besan Namkeens & Bhujia (Micro-Kjeldahl Method, N × 6.25)",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Authenticity & Starch Dilution Screening:</strong> Authentic Bhujia aur Sev pure Bengal Gram Flour (Chana Dal Besan) ya Moth Dal Besan se bante hain jisme natural protein 20–24% hota hai. Fraudulent manufacturers besan ko saste maida, tapioca starch, ya rice flour se dilute karte hain jisse protein content drastically gir jaata hai.</li>
                  <li><strong>FSSAI & BIS (IS 12566) Statutory Protein Floors:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fried Sev & Bhujia (IS 12566):</strong> Crude Protein <strong>Min 9.0% to 12.0% (w/w)</strong> (dry, fat-free basis).</li>
                      <li>Protein < 9.0% proves illegal dilution with non-pulse starchy flours.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 12566:1989 / IS 4333 (Part 4) / AOAC 979.09 / ISO 20483",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Defatted dry namkeen sample (1.000g) ko 20 mL concentrated H2SO4 aur catalyst mixture (10g K2SO4 + 0.5g CuSO4) ke sath 420°C par 90 minutes digest kiya jaata hai. Cooled digest ko excess 40% NaOH ke sath steam distill karke liberated ammonia 25 mL 4% boric acid mein collect kiya jaata hai aur standardized 0.1 N HCl se titrate kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Crude Protein % (w/w) = [ (V_sample - V_blank) × Normality_HCl × 0.014007 / W_sample in g ] × 100 × 6.25
              </div>
              <p class="mt-2">1.000g defatted Bikaneri Bhujia: Titrant consumed = 14.20 mL 0.1005 N HCl (Blank = 0.15 mL). Net = 14.05 mL. Nitrogen = 1.977% N. Crude Protein = 1.977 × 6.25 = 12.36% (w/w). Conforms to FSSAI & IS 12566 standard (≥ 9.0%).</p>`
          },
          {
            title: "Instrumental Crispness, Hardness & Fracture Force by Texture Analyzer (3-Point Bend & Shear Test)",
            purpose: `<div class="bg-cyan-50 border border-cyan-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Sensory Crunchiness Quantification:</strong> Consumer potato chips aur namkeens unke signature snappy crunch aur auditory acoustic fracture ke liye khareedte hain. Texture Analyzer sensory panel ke human biting action ko objectively simulate karta hai.</li>
                  <li><strong>Staling & Softening Detection:</strong> Package seal defect ya moisture absorption se peak fracture force badh jaata hai (snack chewy/rubbery ho jaata hai) aur fracture events (spatial acoustic jagged peaks) drop ho jaate hain.</li>
                  <li><strong>Standard Quality Indices:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Crisp Potato Chips (3-Point Bend Rig):</strong> Sharp fracture peak at <strong>2.5 to 5.5 Newtons (N)</strong> with zero plastic deformation.</li>
                      <li><strong>Stale / Soggy Chips:</strong> Failure to snap, bending without fracturing, peak force > 8.0 N.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 11036 (Texture Profile Analysis) / ASTM E1871 / Texture Technologies Protocols",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (3-Point Bending & Ottawa Cell):</h4>
              <p>Individual potato chip ko 3-point bend rig ke do support anvils (span 20 mm) par horizontally balance kiya jaata hai. Knife-edge blade probe 1.0 mm/sec test speed par central point par descend karta hai. Load cell force-versus-distance curve plot karta hai. High-frequency data acquisition (500 pps) se number of acoustic force fractures (jagged micro-peaks) aur peak snap force (Hardness in Newtons) measure kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Fracture Parameters:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Peak Fracture Force (Hardness, N) = Maximum force required for snap fracture.<br>
                Crispness Work (N·mm) = Area under the curve during fracturing phase.
              </div>
              <p class="mt-2">Fresh potato chip: Peak fracture force = 3.42 N at 1.1 mm displacement, followed by catastrophic clean snap (8 jagged fracture peaks). Certified prime commercial crispness.</p>`
          },
          {
            title: "Total Aerobic Mesophilic Plate Count (TPC / APC) on PCA (IS 5402 / ISO 4833-1 in Snacks)",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Post-Frying Packaging Hygiene Audit:</strong> Frying temperatures (180°C) snack ko completely sterile bana dete hain. Post-frying cooling conveyor, seasoning drum, aur packing machine par air-borne microbial contamination aur worker handling hygiene ko TPC monitor karta hai.</li>
                  <li><strong>FSSAI & BIS Statutory Standards:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fried Namkeens, Bhujia & Potato Chips:</strong> Total Plate Count <strong>Max 1.0 × 10^4 CFU / g</strong> (4.0 log10).</li>
                      <li>TPC > 10^4 CFU/g indicates poor plant hygiene, dirty seasoning applicators, or unhygienic packaging environment.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 5402:2012 / ISO 4833-1:2013 / FSSAI Microbiological Manual 14",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>25.0g crushed snack sample ko 225 mL sterile Peptone Salt Diluent mein stomacher blender mein 2 minutes homogenize kiya jaata hai (10^-1 initial dilution). Serial decimal dilutions (10^-2 to 10^-4) prepare kiye jaate hain. 1.0 mL aliquot ko duplicate Petri dishes mein molten Plate Count Agar (PCA, tempered at 45°C) ke sath pour plate karke 30°C ± 1°C par 72 hours incubate kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                TPC (CFU / g) = Σ C / [ (n1 + 0.1 × n2) × d ]
              </div>
              <p class="mt-2">Potato chips sample: 10^-2 dilution plates count = 32 aur 38 colonies. Average = 35 colonies × 100 = 3.5 × 10^3 CFU/g (3.54 log10). Conforms strictly to FSSAI limit of ≤ 1.0 × 10^4 CFU/g.</p>`
          },
          {
            title: "Yeast & Mold Enumeration in Dry Snacks (DRBC / DG18 Agar - ISO 21527-2 / IS 5403)",
            purpose: `<div class="bg-rose-50 border border-rose-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Xerophilic Fungal Spoilage in Low-Moisture Foods:</strong> Dry snacks mein xerophilic molds (Aspergillus, Penicillium, Wallemia sebi) low water activity par bhi survive aur proliferate kar sakte hain agar packaging humidity barrier fail ho jaye.</li>
                  <li><strong>FSSAI Statutory Standards:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fried Namkeens & Potato Chips:</strong> Yeast & Mold Count <strong>Max 100 CFU / g</strong>.</li>
                      <li>Counts > 100 CFU/g indicate high humidity storage, damp raw spices, or hermetic packaging seal failure.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 21527-2:2008 (Low Water Activity Foods) / IS 5403 / FSSAI Manual 14",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (DG18 & DRBC Spread Plating):</h4>
              <p>Low-moisture foods ke liye Dichloran 18% Glycerol (DG18) Agar use kiya jaata hai kyunki 18% glycerol water activity ko 0.95 tak drop karke xerophilic molds ki recovery maximize karta hai. 0.1 mL serial dilutions ko DG18 plates par spread plate kiya jaata hai aur upright position mein 25°C ± 1°C par 5 to 7 days incubate kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Yeast & Mold Count (CFU / g) = Σ Colonies / [ V_inoculum (0.1 mL) × Dilution Factor ]
              </div>
              <p class="mt-2">Extruded snack sample: 10^-1 dilution plates par zero mold colonies develop huye. Result: < 10 CFU/g. Conforms safely to FSSAI statutory standard of ≤ 100 CFU/g.</p>`
          },
          {
            title: "Salmonella spp. Detection in 25g Packaged Snacks (ISO 6579-1 / FSSAI Absolute Zero Tolerance)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Desiccation Resistance & Global Recall Risk:</strong> Salmonella low-moisture foods (peanut butter, roasted nuts, dry namkeens, spices) mein extreme desiccation resistance acquire kar leta hai. Low water activity matrix mein Salmonella ki thermal tolerance (heat resistance) drastically badh jaati hai!</li>
                  <li><strong>Severe Outbreak Hazard:</strong> Low-moisture matrix mein fat globules bacteria ko stomach gastric acid se protect karte hain, jisse as few as 10 to 100 bacterial cells severe salmonellosis enteritis trigger kar sakte hain.</li>
                  <li><strong>FSSAI & Global Statutory Mandate:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>All Packaged Namkeens, Chips & Snacks:</strong> Strictly <strong>ABSENT in 25 grams (Zero Tolerance)</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 6579-1:2017 / FSSAI Microbiological Manual 14 / AOAC 967.26 / US FDA BAM Ch 5",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Standard 4-Phase Culture Protocol):</h4>
              <p>25.0g snack sample ko 225 mL Buffered Peptone Water (BPW) mein 37°C par 18 hours pre-enrich kiya jaata hai. 0.1 mL ko Rappaport-Vassiliadis Soya (RVS) broth mein 41.5°C par aur 1.0 mL ko MKTTn broth mein 37°C par 24 hours selectively enrich kiya jaata hai. Loopful culture ko Xylose Lysine Deoxycholate (XLD) aur BGA agar par streak kiya jaata hai. Characteristic red colonies with black centers (H2S positive) ko biochemical (TSI, Urea) aur polyvalent antisera agglutination se confirm kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Compliance Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                No characteristic black-centered red colonies on XLD: Salmonella ABSENT in 25g (COMPLIANT).<br>
                Agglutination positive / biochemical confirmation: Salmonella DETECTED (IMMEDIATE RECALL).
              </div>
              <p class="mt-2">Tested Spiced Mixture consignment: BPW, RVS, MKTTn enriched; XLD agar showed zero characteristic black-centered colonies after 24h at 37°C. Result: Salmonella ABSENT in 25g.</p>`
          },
          {
            title: "Coliforms & Escherichia coli Enumeration by VRBL & TBX Agar (ISO 4832 & ISO 16649-2)",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Post-Process Fecal Contamination Indicator:</strong> Fried snacks completely sterile exit karte hain fryer se. Seasoning mixing aur manual packaging ke dauran agar workers poor hand hygiene maintain karein ya untreated water seasoning spray mein use ho, toh coliforms aur E. coli product mein introduce ho jaate hain.</li>
                  <li><strong>FSSAI Statutory Standards:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Packaged Fried Namkeens & Chips:</strong> Coliforms <strong>Max 10 CFU / g</strong>.</li>
                      <li><strong>Escherichia coli:</strong> Strictly <strong>ABSENT in 1.0 gram (Zero Tolerance)</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 4832:2006 (Coliforms on VRBL) / ISO 16649-2:2001 (E. coli on TBX) / FSSAI Manual 14",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (VRBL & TBX Plating):</h4>
              <p>1.0 mL serial dilutions ko Violet Red Bile Lactose (VRBL) Agar ke sath pour plate kiya jaata hai with an agar overlayer; 37°C par 24h incubate karke purplish-red colonies with bile precipitation zone (Coliforms) count kiye jaate hain. E. coli ke liye dilutions ko Tryptone Bile X-Glucuronide (TBX) Agar par pour plate karke 44.0°C par incubate kiya jaata hai; beta-glucuronidase cleaves BCIG forming turquoise-blue colonies.</p>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Coliform Count (CFU / g) = Σ Purplish-red Colonies / [ (n1 + 0.1 × n2) × d ]<br><br>
                E. coli Status: Absent or Present in 1.0g
              </div>
              <p class="mt-2">Tested Potato Chips sample: VRBL plates show zero colonies at 10^-1 dilution (Coliforms < 10 CFU/g); TBX plates show zero blue colonies (E. coli ABSENT). Fully compliant with FSSAI regulations.</p>`
          },
          {
            title: "Coagulase-Positive Staphylococci (Staphylococcus aureus) in Seasoned Snacks (ISO 6888-1)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Human Skin & Nasal Shedding in Seasoning Line:</strong> S. aureus human skin, hands, aur respiratory droplets mein naturally colonize karta hai. Workers dwara manual seasoning dusting, handling, aur packaging ke dauran snacks contaminate hote hain.</li>
                  <li><strong>Heat-Stable Enterotoxin Threat:</strong> Agar seasoned snacks moisture absorb kar lein, toh S. aureus enterotoxins synthesize karta hai jo gastrointestinal prostration aur explosive vomiting cause karte hain.</li>
                  <li><strong>FSSAI Statutory Ceilings:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Ready-to-Eat Namkeens & Seasoned Chips:</strong> Max <strong>10 to 100 CFU / g</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 6888-1:2021 (Baird-Parker) / FSSAI Microbiological Manual 14",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Baird-Parker Agar):</h4>
              <p>1.0 mL dilution aliquot ko Baird-Parker egg yolk tellurite agar plates par spread plate kiya jaata hai. Potassium tellurite reduction se jet-black convex colonies banti hain, aur egg yolk lecithinase hydrolysis se colony ke charon taraf clear transparent halo zone banta hai. 37°C par 48 hours incubate karke Rabbit Plasma Coagulase test se confirm kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Colony Profile:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Black shiny convex colonies surrounded by 2–5 mm clear halo zone.<br>
                S. aureus Count (CFU/g) = Σ Black Halo Colonies / [ (n1 + 0.1 × n2) × d ]
              </div>
              <p class="mt-2">Seasoned Masala Sev sample: 10^-1 dilution plates showed zero black halo colonies. Result: < 10 CFU/g. Conforms strictly to FSSAI hygiene criteria.</p>`
          },
          {
            title: "Sensory Panel Evaluation & Staling Profile: Crispness, Odor & Rancidity (ISO 8586 / Hedonic Scale)",
            purpose: `<div class="bg-cyan-50 border border-cyan-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Human Sensory Correlation with Chemical Rancidity:</strong> Chemical tests (PV, AV, TBARS) values dete hain, lekin consumer acceptance human sensory palate par depend karti hai. Trained sensory panelists hexanal aur oxidative off-notes ko 0.1 ppm level par smell kar sakte hain.</li>
                  <li><strong>Sensory Attributes:</strong> Crispness (auditory snap on first molar bite), Greasiness (residual oiliness on palate), Odor (fresh fried aroma vs cardboard/painty oxidized odor), aur Taste (balanced salt/spice vs acrid/soapy aftertaste).</li>
                  <li><strong>Standard Sensory Passing Criteria:</strong> Overall Acceptance Score <strong>Min 7.0 out of 9.0</strong> on 9-point Hedonic Scale with zero rancid/painty off-flavor defects.</li>
                </ul>
              </div>`,
            reference: "ISO 8586:2012 / ISO 4121 / IS 6273 / Sensory Analysis Protocols",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Descriptive Sensory Analysis):</h4>
              <p>Trained sensory panel (minimum 8 screened panellists) ko individual sensory booths (illumination 500 lux, 22°C ± 1°C) mein 3-digit randomized coded samples present kiye jaate hain. Panelists 9-point Hedonic scale (1 = Dislike extremely, 9 = Like extremely) aur structured 10-cm visual analogue scale par Crispness, Rancidity Odor, Greasiness, aur Flavor Intensity rate karte hain.</p>

              <h4 class="font-semibold mt-4 mb-2">Hedonic Scoring Criteria:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Score ≥ 7.0: Prime Commercial Quality (Excellent Crispness, Zero Off-Flavor)<br>
                Score 5.0–6.9: Marginal Quality (Slight loss of crispness, requires monitoring)<br>
                Score < 5.0: Sensory Rejection (Stale, soggy, or rancid painty odor detected)
              </div>
              <p class="mt-2">Fresh Potato Chips batch evaluation: Mean Crispness = 8.6, Odor = 8.4, Overall Acceptance = 8.5/9.0. Passed sensory release gate with exceptional ratings.</p>`
          },
          {
            title: "Namkeens, Chips & Snacks Sector Complete Statutory & Quality Testing Battery Summary",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Master Sectoral Blueprint & Compliance Guide:</strong></p>
                <p class="mt-1">Ye master matrix fried namkeens, besan bhujia, sev, potato chips, extruded snacks, aur roasted grain mixtures ke sabhi critical statutory parameters, legal limit thresholds, reference test methods, aur food safety risk profiles ko FSSAI, BIS (IS 12566 / IS 12575), aur European Commission guidelines ke anuroop ek jagah summarize karti hai.</p>
              </div>`,
            reference: "FSSAI (Food Product Standards & Food Additives) Reg 2011 / BIS IS 12566 & IS 12575 / Codex Standards",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Master Statutory Quality Matrix:</h4>
              <div class="overflow-x-auto my-3">
                <table class="min-w-full text-xs border border-gray-300 divide-y divide-gray-200">
                  <thead class="bg-gray-100 font-bold text-gray-700">
                    <tr>
                      <th class="p-2 border">Commodity Pillar</th>
                      <th class="p-2 border">Key Testing Parameter</th>
                      <th class="p-2 border">FSSAI / BIS / EU Limit</th>
                      <th class="p-2 border">Standard Method</th>
                      <th class="p-2 border">Significance & Risk Profile</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr>
                      <td class="p-2 border font-semibold">Fried Namkeens & Chips</td>
                      <td class="p-2 border">Total Fat (Crude Lipids)</td>
                      <td class="p-2 border">Max 35.0% - 42.0% (w/w)</td>
                      <td class="p-2 border">ISO 1443 / Soxhlet Extraction</td>
                      <td class="p-2 border">Frying oil uptake & nutritional label verification</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Fried Namkeens & Chips</td>
                      <td class="p-2 border">Acid Value of Extracted Fat</td>
                      <td class="p-2 border font-bold text-red-600">Max 2.0 mg KOH / g (1% FFA)</td>
                      <td class="p-2 border">IS 548 (Pt 1) / Titration</td>
                      <td class="p-2 border font-semibold text-red-600">Hydrolytic rancidity & degraded frying oil screen</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Fried Namkeens & Chips</td>
                      <td class="p-2 border">Peroxide Value (PV)</td>
                      <td class="p-2 border">Max 10.0 meq O2 / kg fat</td>
                      <td class="p-2 border">ISO 3960 / Iodometric Titration</td>
                      <td class="p-2 border">Primary auto-oxidation & hydroperoxide level</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Fried Namkeens & Chips</td>
                      <td class="p-2 border">p-Anisidine & Totox Value</td>
                      <td class="p-2 border">p-AV ≤ 10.0; Totox ≤ 20.0 - 26.0</td>
                      <td class="p-2 border">ISO 6885 / Spectrophotometry</td>
                      <td class="p-2 border">Secondary aldehyde decomposition in aged snacks</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Frying Oil & Snacks</td>
                      <td class="p-2 border">Total Polar Compounds (TPC)</td>
                      <td class="p-2 border font-bold text-red-600">Max 25.0% (Mandatory RUCO)</td>
                      <td class="p-2 border">ISO 8420 / Column & Dielectric</td>
                      <td class="p-2 border font-semibold text-red-600">Thermal degradation polymers & cardiovascular risk</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">All Namkeens & Snacks</td>
                      <td class="p-2 border">Trans Fatty Acids (iTFA)</td>
                      <td class="p-2 border font-bold text-red-600">Max 2.0% of Total Fat</td>
                      <td class="p-2 border">AOAC 996.06 / GC-FID</td>
                      <td class="p-2 border font-semibold text-red-600">Coronary heart disease & industrial trans fat ban</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">All Namkeens & Snacks</td>
                      <td class="p-2 border">Salt (NaCl Content)</td>
                      <td class="p-2 border">Max 1.5% - 3.0% (w/w)</td>
                      <td class="p-2 border">IS 12566 / Mohr's Argentometry</td>
                      <td class="p-2 border">Dietary sodium declaration & blood pressure load</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">All Namkeens & Snacks</td>
                      <td class="p-2 border">Moisture Content</td>
                      <td class="p-2 border">Max 1.5% - 3.0% (w/w)</td>
                      <td class="p-2 border">IS 12566 / 105°C Forced Air</td>
                      <td class="p-2 border">Crispness retention & staling sogginess control</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Dry Namkeens & Chips</td>
                      <td class="p-2 border">Water Activity (aw at 25°C)</td>
                      <td class="p-2 border">aw 0.15 - 0.28 (Max 0.35)</td>
                      <td class="p-2 border">ISO 18787 / Chilled Mirror</td>
                      <td class="p-2 border">Glass transition texture & zero microbial boundary</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">All Namkeens & Snacks</td>
                      <td class="p-2 border">Acid Insoluble Ash (AIA)</td>
                      <td class="p-2 border">Max 0.10% (w/w dry basis)</td>
                      <td class="p-2 border">IS 12566 / 550°C Furnace & HCl</td>
                      <td class="p-2 border">Siliceous dirt, river sand, & stone dust screening</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Fried Snacks</td>
                      <td class="p-2 border">Synthetic Antioxidants (TBHQ)</td>
                      <td class="p-2 border">Max 200 mg/kg (in fat)</td>
                      <td class="p-2 border">AOAC 983.15 / RP-HPLC-DAD</td>
                      <td class="p-2 border">Preservative ceiling preventing toxic over-dosing</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Namkeens & Bhujia</td>
                      <td class="p-2 border">Synthetic Food Colors</td>
                      <td class="p-2 border font-bold text-red-600">Strictly NOT PERMITTED (Zero)</td>
                      <td class="p-2 border">Wool Dyeing & TLC Test</td>
                      <td class="p-2 border font-semibold text-red-600">Banned Metanil Yellow & toxic coal-tar dye fraud</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Potato Chips & Snacks</td>
                      <td class="p-2 border">Acrylamide (Process Toxin)</td>
                      <td class="p-2 border">Benchmark Max 750 µg/kg (ppb)</td>
                      <td class="p-2 border">ISO 18862 / LC-MS/MS</td>
                      <td class="p-2 border">High-heat Maillard carcinogen from asparagine</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Peanut & Corn Snacks</td>
                      <td class="p-2 border">Total Aflatoxins (B1+B2+G1+G2)</td>
                      <td class="p-2 border font-bold text-red-600">Max 15.0 µg/kg (ppb)</td>
                      <td class="p-2 border">IS 16287 / IAC-HPLC-FLD</td>
                      <td class="p-2 border font-semibold text-red-600">Hepatocellular carcinoma prevention in peanuts/corn</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">All Namkeens & Snacks</td>
                      <td class="p-2 border">Toxic Heavy Metals</td>
                      <td class="p-2 border">Pb ≤ 2.5 ppm, Cd ≤ 0.5, As ≤ 1.1</td>
                      <td class="p-2 border">ISO 17294-2 / Microwave ICP-MS</td>
                      <td class="p-2 border">Environmental soil contaminants & rock salt purity</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Besan Namkeens & Sev</td>
                      <td class="p-2 border">Crude Protein (N×6.25)</td>
                      <td class="p-2 border">Min 9.0% - 12.0% (w/w dry basis)</td>
                      <td class="p-2 border">IS 12566 / Macro-Kjeldahl</td>
                      <td class="p-2 border">Detects cheap maida/tapioca starch adulteration</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Potato Chips & Snacks</td>
                      <td class="p-2 border">Instrumental Crispness</td>
                      <td class="p-2 border">Peak Fracture Force 2.5 - 5.5 N</td>
                      <td class="p-2 border">Texture Analyzer 3-Point Bend</td>
                      <td class="p-2 border">Objective mechanical crunch & staling evaluation</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Microbiology - Hygiene</td>
                      <td class="p-2 border">Total Plate Count (TPC)</td>
                      <td class="p-2 border">Max 1.0 × 10^4 CFU / g</td>
                      <td class="p-2 border">IS 5402 / PCA Agar 30°C</td>
                      <td class="p-2 border">Post-frying seasoning & packaging room hygiene</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Microbiology - Hygiene</td>
                      <td class="p-2 border">Yeast & Mold Count</td>
                      <td class="p-2 border">Max 100 CFU / g</td>
                      <td class="p-2 border">ISO 21527-2 / DG18 Agar</td>
                      <td class="p-2 border">Xerophilic mold spoilage & package hermetic seal</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Microbiology - Pathogen</td>
                      <td class="p-2 border">Salmonella enterica</td>
                      <td class="p-2 border font-bold text-red-600">ABSENT in 25 grams (Zero)</td>
                      <td class="p-2 border">ISO 6579-1 / XLD & BGA</td>
                      <td class="p-2 border font-semibold text-red-600">Desiccation-resistant enteritis in low-aw foods</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Microbiology - Hygiene</td>
                      <td class="p-2 border">Coliforms & E. coli</td>
                      <td class="p-2 border">Coliforms ≤ 10 CFU/g; E. coli Zero</td>
                      <td class="p-2 border">ISO 4832 / TBX Agar 44°C</td>
                      <td class="p-2 border">Post-lethality environmental fecal contamination</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-semibold">Microbiology - Pathogen</td>
                      <td class="p-2 border">Staphylococcus aureus</td>
                      <td class="p-2 border">Max 10 to 100 CFU / g</td>
                      <td class="p-2 border">ISO 6888-1 / Baird-Parker</td>
                      <td class="p-2 border">Manual seasoning handling & enterotoxin hazard</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-semibold">Sensory Quality</td>
                      <td class="p-2 border">Sensory Acceptance Score</td>
                      <td class="p-2 border">Min 7.0 / 9.0 (Hedonic Scale)</td>
                      <td class="p-2 border">ISO 8586 / Trained Panel</td>
                      <td class="p-2 border">Fresh fried flavor vs cardboard/painty rancidity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-xs text-gray-500 mt-2">*Note: This master testing battery represents standard statutory compliance requirements under FSSAI, BIS (IS 12566 for Namkeens & IS 12575 for Potato Chips), and Codex Alimentarius. Consignments failing statutory discard criteria (TPC > 25%, Trans fat > 2%, unapproved dyes, or excessive aflatoxins) are subject to immediate legal rejection, seizure, and destruction.</p>`
          }
        ]
      };

export const namkeensSnacksEn = {
        title: "Namkeens, Chips, Bhujia, Extruded & Roasted Snacks (Fried Namkeens, Potato Chips, Extruded Puffs & Roasted Snacks)",
        tests: [
          {
            title: "Determination of Total Fat (Crude Lipids) by Soxhlet Solvent Extraction (Bhujia, Chips & Sev)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Nutritional Declaration & Deep Frying Upup toe:</strong> Namkeens (Besan Bhujia, Aloo Bhujia, Sev, Gathiya) and Potato Chips deep-fat frying process are manufactured from jahan water vaporize occurs and frying oil porous capillary voids in absorb occurs. Fat content 20% from lekar 45% up to can be prefromnt.</li>
                  <li><strong>Caloric Density & Sensory Crispness:</strong> Fat mouthfeel, flavor releafrom and characteristic crispy texture provide induces. Excess fat product the greasy banata hai and rapid oxidative rancidity trigger induces.</li>
                  <li><strong>FSSAI & BIS (IS 12566) Statutory Ceilings:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fried Namkeens & Bhujia:</strong> Total Fat <strong>Max 35.0% to 42.0% (w/w)</strong> (dry basis).</li>
                      <li><strong>Potato Chips (IS 12575):</strong> Total Fat <strong>Max 35.0% to 38.0% (w/w)</strong>.</li>
                      <li><strong>Roasted / Baked Namkeens:</strong> Typically <strong>5.0% to 15.0% (w/w)</strong>.</li>
                    </ul>
                  </li>
                  <li><strong>Economic & Regulatory Compliance:</strong> Mandatory nutritional label claim verification under FSSAI (Labelling and Display) Regulations.</li>
                </ul>
              </div>`,
            reference: "IS 12566:1989 / IS 12575:1989 / ISO 1443 / AOAC 945.16 / AOAC 960.39",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Scientific Principle:</h4>
              <p>5.0g finely ground moisture-free namkeen sample the cellulofrom extraction thimble in pack is performed. Soxhlet extraction unit in analytical-grade petroleum ether (boiling range 40–60°C) ya n-hexane with continuous reflux extraction is performed for 16 hours (ya automated Soxtec system on 2 hours). Solvent evaporate by pre-weighed round bottom flask in residual remaining dry fat the 100°C oven in 30 minutes desolventize by analytical balance on weigh is performed.</p>

              <h4 class="font-frommibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Total Fat % (w/w) = [ (W_flask_with_fat - W_empty_flask) / W_sample in g ] × 100
              </div>
              <p class="mt-2">5.000g Bikaneri Bhujia sample: Empty dry flask = 118.3240g, Flask + extracted fat = 120.0840g. Extracted fat = 1.7600g. Total Fat % = (1.7600 / 5.000) × 100 = 35.20% (w/w). Conforms to FSSAI & IS 12566 statutory limit (≤ 40.0%).</p>`
          },
          {
            title: "Determination of Acid Value and Free Fatty Acids (FFA % as Oleic) of Extracted Frying Fat (Hydrolytic Rancidity)",
            purpose: `<div class="bg-rofrom-50 border border-rofrom-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Hydrolytic Breakdown of Frying Oil:</strong> High-temperature commercial frying (175°C to 190°C) during continuous moisture releafrom (potatoes/dough from) triglycerides ke ester linkages the hydrolyze induces, jisfrom Free Fatty Acids (FFA), monoglycerides and diglycerides bante hain.</li>
                  <li><strong>Smoke Point Depression & Sensory Acridity:</strong> High FFA frying oil ke smoke point the dangerously depresfroms ( जिससे blue acrid smoke is emitted), oil foaming occurs, and namkeen in bitter soapy off-flavor develops.</li>
                  <li><strong>FSSAI Mandatory Statutory Ceilings:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Extracted Fat from Fried Namkeens & Potato Chips (FSSAI Reg 2.4.15):</strong> Acid Value <strong>Max 2.0 mg KOH / g</strong> oil (Equivalent to <strong>Max 1.0% FFA as Oleic</strong>).</li>
                      <li>Acid Value > 2.0 indicates abufromd, over-ufromd, or degraded frying fat—illegal under FSSAI.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 1):1964 / ISO 660:2020 / AOAC 940.28 / FSSAI Oils & Fats Manual 04",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Scientific Principle:</h4>
              <p>Soxhlet from extract kiye obtained solvent-free fat (5.0g) the 50 mL pre-neutralized neutral ethyl alcohol:diethyl ether (1:1 v/v) solvent mixture in dissolve is performed. Free carboxylic acid groups (-COOH) the standardized 0.1 N Potassium Hydroxide (KOH) solution with phenolphthalein indicator (faint persistent pink endpoint lasting 15 fromconds) up to titrate is performed.</p>

              <h4 class="font-frommibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Acid Value (mg KOH / g oil) = [ V_KOH in mL × Normality_KOH × 56.11 ] / W_fat in g<br><br>
                FFA % (as Oleic Acid) = Acid Value × 0.503 = [ V_KOH × Normality_KOH × 28.2 ] / W_fat
              </div>
              <p class="mt-2">5.00g extracted potato chips fat requires 1.15 mL 0.1010 N KOH. Acid Value = (1.15 × 0.1010 × 56.11) / 5.00 = 1.30 mg KOH/g. FFA % = 1.30 × 0.503 = 0.65% (as Oleic). Conforms strictly to FSSAI statutory maximum ceiling of ≤ 2.0 mg KOH/g.</p>`
          },
          {
            title: "Determination of Peroxide Value (PV by Iodometric Titration) of Extracted Snack Fat (Primary Oxidative Rancidity)",
            purpose: `<div class="bg-orange-50 border border-orange-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Primary Oxidative Rancidity Monitoring:</strong> Fried namkeens and chips in high surface area-to-volume ratio and atmospheric oxygen exposure ke karan unsaturated fatty acids on free radical chain auto-oxidation occurs, jisfrom lipid hydroperoxides (ROOH) bante hain.</li>
                  <li><strong>Shelf-Life Forecasting & Off-Flavors:</strong> High PV early rancidity the indicate induces. Hydroperoxides aage break hokar malodorous aldehydes and ketones in decompofrom are formed jo fried snacks the stale and inedible bana exhibit.</li>
                  <li><strong>FSSAI Statutory Ceilings:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Extracted Fat from Packaged Fried Snacks (FSSAI Reg):</strong> Peroxide Value <strong>Max 10.0 meq O2 / kg</strong> fat (Freshly packed snacks typically < 3.0 to 5.0 meq/kg).</li>
                      <li>PV > 10.0 meq/kg indicates advanced oxidation and impending shelf-life expiry.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 548 (Part 1):1964 / ISO 3960:2017 / AOAC 965.33 / AOCS Cd 8b-90",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Siddhant (Iodometric Titration):</h4>
              <p>5.000g solvent-free extracted snack fat the 30 mL glacial acetic acid:chloroform (3:2 v/v) ya acetic acid:isooctane in dissolve is performed. 0.5 mL freshly preoned saturated Potassium Iodide (KI) solution add by dark cabinet in exactly 60 fromconds swirl by 5 minutes react karwaya jdevelops. Hydroperoxides quantitatively iodide the free iodine in oxidize karte hain: ROOH + 2 I- + 2 H+ ⟶ ROH + I2 + H2O. 30 mL deionized water add by liberated iodine the standardized 0.01 N Sodium Thiosulfate (Na2S2O3) from starch indicator ki prefromnce in titrate is performed.</p>

              <h4 class="font-frommibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Peroxide Value (meq active O2 / kg fat) = [ (V_sample - V_blank) × Normality_Na2S2O3 × 1000 ] / W_fat in g
              </div>
              <p class="mt-2">5.020g extracted bhujia fat: Titre = 1.95 mL 0.0102 N Na2S2O3 (Blank = 0.05 mL). Difference = 1.90 mL. PV = [ 1.90 × 0.0102 × 1000 ] / 5.020 = 3.86 meq O2/kg. Well within the FSSAI threshold (≤ 10.0 meq/kg).</p>`
          },
          {
            title: "Determination of Secondary Lipid Oxidation: p-Anisidine Value (p-AV) and Totox Value in Snack Fat (ISO 6885)",
            purpose: `<div class="bg-stone-50 border border-stone-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Secondary Oxidation Aldehydic By-Products:</strong> High-temperature frying during hydroperoxides thermally unstable are formed and rapidly decompofrom ho jaate hain volatile and non-volatile alpha,beta-unsaturated aldehydes (2-alkenals, 2,4-dienals) in.</li>
                  <li><strong>Deceptive PV in Aged Snacks:</strong> Purane ya over-fried snacks in hydroperoxides decompofrom ho chuke are formed jisfrom Peroxide Value artificially low dikhti hai! p-Anisidine Value (p-AV) fromcondary aldehydes the quantify by true oxidative history reveal induces.</li>
                  <li><strong>Totox Value (Total Oxidation Index):</strong> Overall total rancidity index: <code>Totox = 2 × PV + p-AV</code>.</li>
                  <li><strong>Quality Limits:</strong> High quality fresh snack fat: p-AV < <strong>10.0</strong>; Totox Value < <strong>20.0 to 26.0</strong>.</li>
                </ul>
              </div>`,
            reference: "ISO 6885:2016 / AOCS Cd 18-90 / FSSAI Lab Manual 04",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Scientific Principle:</h4>
              <p>1.000g extracted dehydrated snack fat the 25 mL HPLC-grade isooctane in dissolve is performed. Initial absorbance A1 350 nm on read ki is executed. 5.0 mL fat solution the 1.0 mL 0.25% (w/v) p-anisidine in glacial acetic acid with dark in 23°C on exactly 10 minutes react karwaya jdevelops. Aldehydes p-anisidine ke amino group with react by yellow Schiff bafrom chromophore banate hain. Absorbance A2 350 nm on isooctane-reagent blank ke against measure ki is executed.</p>

              <h4 class="font-frommibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                p-Anisidine Value (p-AV) = [ 25 × (1.2 × A2 - A1) ] / W_fat in g<br><br>
                Totox Value = (2 × PV) + p-AV
              </div>
              <p class="mt-2">Extracted potato chips fat: PV = 4.2 meq/kg; A1 = 0.08, A2 = 0.31 for 1.00g sample. p-AV = [ 25 × (1.2 × 0.31 - 0.08) ] / 1.00 = 7.30. Totox = (2 × 4.2) + 7.30 = 15.70. Acceptable fresh snack quality (Totox < 20.0).</p>`
          },
          {
            title: "Determination of Total Polar Compounds (TPC %) in Frying Oil & Extracted Snack Fat (Dielectric Sensor & Silica Column)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Thermal Polymerization & Degradation:</strong> Commercial deep-frying in repeated heating and continuous high temperature (180°C) frying oil ke triglycerides the degrade by polar compounds banate hain—dimers, trimers, oxidized fatty acids, cyclic monomers, and epoxy compounds.</li>
                  <li><strong>Cardiovascular Toxicity & Carcinogenicity:</strong> Polar degradation products liver hypertrophy, cellular damage, gastrointestinal inflammation, endothelial dysfunction and atherosclerosis trigger karte hain.</li>
                  <li><strong>FSSAI Mandatory 25% Discard Limit (RUCO - Repurpofrom Ufromd Cooking Oil):</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li>FSSAI Food Safety and Standards Regulations ke tehat: <strong>Total Polar Compounds (TPC) strictly Max 25.0% (w/w)</strong>.</li>
                      <li>Jis frying oil ka TPC > 25.0% ho jaye, ufrom food ufrom from discard karna legally mandatory hai!</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 8420:2002 / AOAC 982.27 / FSSAI Frying Oil Regulations (RUCO Guidelines)",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Siddhant (Silica Gel Chromatography & Capacitive Sensor):</h4>
              <p><strong>1. Reference Column Method (ISO 8420):</strong> 1.0g extracted fat the silica gel chromatographic column (mesh 70-230, water-adjusted to 5%) on load is performed. Non-polar triglycerides the petroleum ether:diethyl ether (87:13 v/v) from elute by fromonate is performed. Polar compounds silica gel on tightly retain ho jaate hain. Non-polar fraction the evaporate by weigh is performed and difference from % TPC calculate occurs.<br>
              <strong>2. Screening Method:</strong> Calibrated capacitive dielectric constant fromnsor (Testo 270 oil tester) the 40–50°C warm oil sample in dip by dielectric shift from directly % TPC read is performed.</p>

              <h4 class="font-frommibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Total Polar Compounds % (TPC) = [ (W_sample - W_non_polar_fraction) / W_sample ] × 100
              </div>
              <p class="mt-2">1.050g snack frying oil sample yields 0.865g non-polar triglycerides. Polar fraction = 1.050 - 0.865 = 0.185g. TPC % = (0.185 / 1.050) × 100 = 17.62% (w/w). Conforms to FSSAI mandatory threshold (≤ 25.0%).</p>`
          },
          {
            title: "Determination of Trans Fatty Acids (% of Total Fat) by Capillary Gas Chromatography (GC-FID)",
            purpose: `<div class="bg-indigo-50 border border-indigo-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Elimination of Industrial Trans Fats (iTFA):</strong> Partially hydrogenated vegetable oils (Vanaspati) and repeated high-heat frying natural cis-double bonds (-CH=CH-) the trans-isomers (Elaidic acid C18:1t, Linoelaidic acid C18:2t) in convert karte hain.</li>
                  <li><strong>Coronary Heart Difromafrom (CHD) Mortality:</strong> Trans fatty acids human body in LDL ('bad' cholesterol) the badhate hain and protective HDL ('good' cholesterol) the drop karte hain, systemic vascular inflammation and heart attack ka risk drastically badhate hain.</li>
                  <li><strong>FSSAI & WHO Global Mandatory Mandate:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li>FSSAI statutory regulation (effective Jan 2022): <strong>Trans Fatty Acids Max 2.0% of Total Fat</strong> across all fats, oils, and packaged foods/namkeens.</li>
                      <li>'Trans Fat Free' claim for: <strong>< 0.2g trans fat per 100g</strong> product.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "AOAC 996.06 / ISO 12966-2 & 4 / AOCS Ce 1h-05 / FSSAI Regulations 2021",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Siddhant (FAME Preonation & GC-FID Analysis):</h4>
              <p>100 mg extracted snack fat the methanolic NaOH with saponify by 14% Boron Trifluoride in methanol (BF3-MeOH) with tranfromsterify by Fatty Acid Methyl Esters (FAME) banaye jaate hain. FAMEs the high-polarity 100-meter SP-2560 ya CP-Sil 88 capillary column (100 m × 0.25 mm ID × 0.20 µm film thickness) on Gas Chromatograph with Flame Ionization Detector (GC-FID) on fromonate is performed. Split ratio 100:1, carrier gas hydrogen/helium at 1.0 mL/min, oven program 140°C to 240°C. Trans-isomers (C18:1t, C18:2tt, C18:2ct) unke corresponding cis-isomers from pehle elute are formed.</p>

              <h4 class="font-frommibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Trans Fatty Acids % (of Total Fat) = [ Σ Peak Area of all Trans FAMEs / Σ Total FAME Peak Area ] × 100
              </div>
              <p class="mt-2">Extracted Bhujia fat FAME profile: Total trans peaks area = 1.35%, Total cis and saturated peaks = 98.65%. Total Trans Fat = 1.35% of total fat. Conforms strictly to FSSAI national ceiling of ≤ 2.0%.</p>`
          },
          {
            title: "Determination of Salt (Sodium Chloride, NaCl) Content by Mohr's and Volhard Argentometric Titration",
            purpose: `<div class="bg-slate-50 border border-slate-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Palatability, Sodium Burden & Hypertension:</strong> Salt namkeens and snacks ka primary flavor enhancer and fromasoning component hai. High sodium inup toe hypertension, cardiovascular difromafroms, kidney load, and stroke ka major causative factor hai.</li>
                  <li><strong>FSSAI Mandatory Sodium Labelling:</strong> FSSAI (Labelling and Display) Regulations ke tehat har packet on Sodium (mg per 100g and per fromrve) declare karna statutory obligation hai.</li>
                  <li><strong>FSSAI & BIS (IS 12566) Standards:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Bhujia & Sev (IS 12566):</strong> Salt (as NaCl) <strong>Max 1.5% to 3.0% (w/w)</strong> (dry basis).</li>
                      <li><strong>Potato Chips (IS 12575):</strong> Salt <strong>Max 2.0% (w/w)</strong>.</li>
                      <li><strong>Spiced Mixtures & Namkeens:</strong> Typically <strong>1.5% to 2.5%</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 12566:1989 / IS 12575 / AOAC 937.09 (Volhard Method) / AOAC 971.27",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Siddhant (Mohr's & Volhard Argentometric Methods):</h4>
              <p>5.0g crushed namkeen sample the 100 mL hot deionized water with boil by water-soluble chlorides (Cl-) the exhaustively extract is performed. Filtered aqueous extract the 1.0 mL 5% Potassium Chromate (K2CrO4) indicator with standardized 0.1 N Silver Nitrate (AgNO3) from titrate is performed. White Silver Chloride (AgCl) precipitate pehle banta hai: Ag+ + Cl- ⟶ AgCl(s). Jaifrom hi saare chloride ions exhaust are formed, silver ions chromate with react by brick-red Silver Chromate (Ag2CrO4) precipitate banate hain jo sharp endpoint show induces.</p>

              <h4 class="font-frommibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Sodium Chloride % (NaCl w/w) = [ V_AgNO3 in mL × Normality_AgNO3 × 0.05844 / W_sample in g ] × 100<br><br>
                Sodium Content (mg / 100g) = NaCl % × 393.4
              </div>
              <p class="mt-2">5.000g Potato Chips sample: Consumed AgNO3 = 14.80 mL of 0.1002 N (Blank = 0.10 mL). Net = 14.70 mL. NaCl % = [ (14.70 × 0.1002 × 0.05844) / 5.000 ] × 100 = 1.72% (w/w). Sodium = 1.72 × 393.4 = 676.6 mg Na/100g. Conforms to FSSAI & IS 12575 standards (≤ 2.0%).</p>`
          },
          {
            title: "Determination of Moisture Content in Fried and Roasted Snacks (105°C Forced-Air Oven Method)",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Crispness, Glass Transition & Texture Loss:</strong> Fried snacks ka signature crispy brittle bite unke ultra-low moisture starch-protein glassy matrix ki wajah from occurs. High moisture on starch matrix glassy state from rubbery state in transition kar jdevelops, jisfrom snack soggy and stale ho jdevelops.</li>
                  <li><strong>Microbial Stability & Fungal Control:</strong> Excess moisture hydrolytic rancidity accelerate induces and xerophilic molds (Aspergillus) ki growth the promote induces.</li>
                  <li><strong>FSSAI & BIS Statutory Standards:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fried Namkeens, Bhujia & Sev (IS 12566):</strong> Moisture <strong>Max 1.5% to 3.0% (w/w)</strong>.</li>
                      <li><strong>Potato Chips (IS 12575):</strong> Moisture <strong>Max 2.0% to 3.0% (w/w)</strong>.</li>
                      <li><strong>Roasted Grain Snacks:</strong> Moisture <strong>Max 4.0% to 6.0% (w/w)</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 12566:1989 / IS 12575 / ISO 1442 / AOAC 925.10 / AOAC 930.15",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Scientific Principle:</h4>
              <p>5.0g finely crushed namkeen sample the pre-dried tared flat-bottom aluminium/glass moisture dish in evenly spread is performed. Sample the forced-air convection oven in 105°C ± 2°C on 3 hours heat is performed. Dish the desiccator (freshly activated silica gel) in 30 minutes cool by analytical balance (±0.0001g) on weigh is performed jab up to successive weighings in difference < 1 mg na ho.</p>

              <h4 class="font-frommibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Moisture % (w/w) = [ (W_dish_initial - W_dish_dried) / W_sample in g ] × 100
              </div>
              <p class="mt-2">5.000g Potato Chips: Dish + sample initial = 32.4500g, Dish + sample after 105°C drying = 32.3650g. Loss = 0.0850g. Moisture % = (0.0850 / 5.000) × 100 = 1.70% (w/w). Conforms to FSSAI & IS 12575 standard (≤ 3.0%).</p>`
          },
          {
            title: "Determination of Water Activity (aw at 25°C) by Chilled-Mirror Dewpoint Method in Dry Snacks (ISO 18787)",
            purpose: `<div class="bg-teal-50 border border-teal-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>True Thermodynamic Spoilage & Crispness Boundary:</strong> Total moisture from zyada Water Activity (aw) determine induces ki snack crispy rahega ya soggy. At 25°C, jab aw critical water activity (aw_c = 0.35 to 0.40) the cross induces, potato chips and bhujia ka crispness index collapfrom ho jdevelops.</li>
                  <li><strong>Microbial Absolute Barrier:</strong> aw < 0.60 on thei bhi bacteria, yeast ya mold biologically reproduce nahi kar sakta. Maintaining aw < 0.30 guarantees indefinite shelf-life against bacterial and mold spoilage.</li>
                  <li><strong>Quality Thresholds:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Crispy Fried Potato Chips & Bhujia:</strong> aw <strong>0.15 to 0.28</strong> (Optimal glass-state crispness).</li>
                      <li><strong>Critical Sensory Crispness Loss Threshold:</strong> aw = <strong>0.38 to 0.42</strong> (Product becomes unacceptable).</li>
                      <li><strong>Maximum Allowed aw in Dry Packaged Snacks:</strong> Max <strong>0.30 to 0.45</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 18787:2017 / AOAC 978.18 / Decagon AquaLab Technical Protocols",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Siddhant (Chilled-Mirror Dewpoint Psychrometry):</h4>
              <p>Crushed snack sample the disposable sample cup in half-fill by fromaled fromnsor chamber in place is performed. Thermoelectric Peltier cooler ek precision optical mirror the chill induces. Jaifrom hi chamber ke equilibrium headspace vapor from mirror on microscopic dew condenfrom occurs, photoelectric cell condensation point detect induces. Chilled-mirror temperature and sample surface infrared temperature from water activity aw calculate occurs (accuracy ±0.003 aw).</p>

              <h4 class="font-frommibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                aw = p / p0 = Saturation Vapor Pressure at Dewpoint / Saturation Vapor Pressure at Sample Temp
              </div>
              <p class="mt-2">Packaged Aloo Bhujia sample tested at 25.0°C ± 0.1°C: Instrument reading aw = 0.224. Well below critical softening boundary (0.38); guarantees maximum crispness and zero microbial activity.</p>`
          },
          {
            title: "Determination of Total Ash and Acid Insoluble Ash (AIA - Sand & Silica Contamination) in Namkeens (IS 12566)",
            purpose: `<div class="bg-stone-50 border border-stone-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Detection of Dirt, Sand, and Earthy Adulteration:</strong> Raw ingredients (gram flour/besan, spices like cumin, coriander, red chilli, rock salt) sun-drying and threshing during mitti, river sand, and stone dust from contaminate are formed.</li>
                  <li><strong>Acid Insoluble Ash as Pure Siliceous Dirt Index:</strong> Normal plant minerals (potassium, sodium, calcium) dilute HCl in dissolve ho jaate hain. Jo residue nahi ghulta wo pure siliceous sand, dirt, and quartz powder occurs.</li>
                  <li><strong>FSSAI & BIS Statutory Standards (IS 12566):</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Namkeens, Bhujia & Sev:</strong> Acid Insoluble Ash <strong>Max 0.10% (w/w)</strong> (dry basis).</li>
                      <li><strong>Potato Chips (IS 12575):</strong> AIA <strong>Max 0.05% to 0.10% (w/w)</strong>.</li>
                      <li><strong>Total Ash:</strong> Max <strong>4.0% to 5.0% (w/w)</strong> (dry basis, excluding salt).</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 12566:1989 / IS 12575 / IS 1155 / ISO 930 / AOAC 941.12",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Scientific Principle:</h4>
              <p>5.0g finely ground sample the porcelain crucible in pre-char by muffle furnace in 550°C ± 20°C on 4 hours incinerate is performed jab up to carbon-free ash na mile. Total ash weigh is performed. Ash in 25 mL 10% dilute HCl (approx 3 N) add by 10 minutes steam bath on boil is performed. Whatman No. 42 ashless filter paper on filter by boiling deionized water from chloride-free hone up to wash is performed. Filter paper the dry by wapas muffle furnace in 550°C on calcine is performed.</p>

              <h4 class="font-frommibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Acid Insoluble Ash % (dry basis) = [ (W_crucible_AIA - W_empty_crucible) / W_sample_dry ] × 100
              </div>
              <p class="mt-2">5.000g Ratlami Sev sample yields 0.0035g insoluble siliceous residue. AIA % = (0.0035 / 5.000) × 100 = 0.070% (w/w). Conforms to FSSAI statutory maximum limit of ≤ 0.10%.</p>`
          },
          {
            title: "Quantification of Synthetic Phenolic Antioxidants (TBHQ, BHA, BHT) in Snack Fat by RP-HPLC-DAD",
            purpose: `<div class="bg-purple-50 border border-purple-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Rancidity Prevention vs Cytotoxicity:</strong> Commercial frying oils and packaged namkeens in lipid auto-oxidation the delay karne for synthetic phenolic antioxidants—Tertiary Butylhydroquinone (TBHQ), Butylated Hydroxyanisole (BHA), and Butylated Hydroxytoluene (BHT) add kiye jaate hain.</li>
                  <li><strong>Toxicological Limits:</strong> Excessive dofroms in TBHQ cellular DNA damage, hepatic enzyme induction, and potential carcinogenicity show induces. Over-dosing strictly illegal hai.</li>
                  <li><strong>FSSAI & Codex Statutory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>TBHQ in Edible Oils and Fried Snacks:</strong> Max <strong>200 mg/kg (ppm)</strong> bafromd on fat content.</li>
                      <li><strong>BHA:</strong> Max <strong>200 mg/kg (ppm)</strong>.</li>
                      <li><strong>Combined Antioxidants (TBHQ + BHA + BHT):</strong> Total combination <strong>Max 200 mg/kg</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "AOAC 983.15 / ISO 16931:2009 / FSSAI Lab Manual 08 (Food Additives)",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Siddhant (RP-HPLC-DAD Seonation):</h4>
              <p>5.0g extracted snack fat the 20 mL n-hexane in dissolve is performed. Hexane solution the 3 × 10 mL acetonitrile from ontition extract is performed. Acetonitrile layer (jisme polar synthetic antioxidants extract ho jaate hain jabki non-polar triglycerides hexane layer in rehte hain) the concentrate is performed. Extract the C18 reverfromd-phafrom column (150 × 4.6 mm, 5 µm) on Water:Acetonitrile:Acetic acid (50:48:2 v/v) isocratic mobile phafrom with fromonate by UV-DAD detector on 280 nm on quantify is performed.</p>

              <h4 class="font-frommibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Antioxidant Conc. (mg/kg or ppm in fat) = [ (Peak Area_sample × Standard Conc. µg/mL × Final Vol. mL) / (Peak Area_std × W_fat in g) ]
              </div>
              <p class="mt-2">Extracted snack fat sample shows TBHQ peak at retention time 4.2 min. Calculated TBHQ = 142.5 mg/kg (ppm in fat); BHA = Not Detected. Complies with FSSAI statutory maximum limit of ≤ 200 ppm.</p>`
          },
          {
            title: "Detection and Chromatographic Identification of Added Synthetic Coal-Tar Food Colors in Snacks",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Color Polish Fraud & Non-Permitted Dyes:</strong> Namkeens (fromv, bhujia, spicy mixture, dalmoth) the visually bright and attractive banane for artificial colors add kiye jaate hain. Fraudsters expensive natural spices (turmeric, paprika) ki jagah saste toxic industrial dyes (Metanil Yellow, Rhodamine B, Auramine, Sudan dyes) ufrom karte hain.</li>
                  <li><strong>Carcinogenicity & Testicular Atrophy:</strong> Metanil Yellow spermatogenesis the arrest induces and testicular atrophy caufrom induces; Rhodamine B ek potent mutagen and suspected human carcinogen hai.</li>
                  <li><strong>FSSAI Statutory Mandate:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Traditional Besan Namkeens & Bhujia (IS 12566):</strong> Synthetic food colors strictly <strong>NOT PERMITTED / ZERO TOLERANCE</strong> (Natural color from spices like turmeric and chilli only).</li>
                      <li><strong>Certain Extruded / Seasoned Snacks (where permitted):</strong> Permitted synthetic food colors (Sunfromt Yellow FCF, Tartrazine) <strong>Max 100 mg/kg (ppm)</strong> with mandatory label declaration.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 12566 / FSSAI Lab Manual 08 (Food Additives) / AOAC 995.11 / Paper Chromatography",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Siddhant (Wool Dyeing & Paper Chromatography):</h4>
              <p>10.0g crushed namkeen sample the 50 mL 2% ammonia in 70% alcohol with extract by colors the dissolve is performed. Extract the dilute acetic acid from acidify by pure degreafromd white wool thread with 30 minutes boil is performed. Synthetic coal-tar acid dyes wool fiber on firmly bind ho jaate hain jabki natural food colors wash ho jaate hain. Wool thread the dilute NH4OH from boil by dye the strip is performed. Stripped color the Whatman No. 1 chromatography paper ya TLC plate on spot by standard solvent (n-Butanol:Ethanol:Water 2:1:1) in develop is performed.</p>

              <h4 class="font-frommibold mt-4 mb-2">Compliance Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Wool strip test colorless & zero synthetic spots on TLC: Permitted & Natural (COMPLIANT).<br>
                Metanil Yellow (Conc. HCl pink reaction) or Rhodamine B detected: REJECT BATCH IMMEDIATELY.
              </div>
              <p class="mt-2">Tested Bikaneri Bhujia sample: Wool dyeing test completely negative; acidified extract showed zero pink responfrom with conc. HCl. 100% free from added synthetic dyes.</p>`
          },
          {
            title: "Quantification of Acrylamide in Potato Chips & Fried Snacks by LC-MS/MS (Process Contaminant)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Thermal Process-Induced Carcinogen:</strong> Potato chips, potato sticks, and high-temperature fried starch snacks in 120°C from uon frying during free amino acid L-asonagine and reducing sugars (glucofrom, fructofrom) Maillard reaction ke through neurotoxic and carcinogenic Acrylamide (2-propenamide) banate hain.</li>
                  <li><strong>Genotoxicity & Peripheral Neuropathy:</strong> Acrylamide in vivo metabolic conversion from glycidamide banata hai jo DNA bafroms with covalent adducts form induces. IARC ne ifrom Group 2A 'Probable Human Carcinogen' classify kiya hai.</li>
                  <li><strong>FSSAI & European Commission (EU 2017/2158) Benchmark Levels:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Potato Chips (Crisps) from fresh potatoes:</strong> Benchmark Level <strong>Max 750 µg/kg (ppb)</strong>.</li>
                      <li><strong>Potato crisps from dough:</strong> Benchmark Level <strong>Max 750 µg/kg</strong>.</li>
                      <li>Continuous mitigation monitoring (asonaginafrom treatment, low-temperature vacuum frying) mandated.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 18862:2016 / AOAC 2010.01 / FDA Acrylamide Method / EU Regulation 2017/2158",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Siddhant (Isotope Dilution LC-MS/MS):</h4>
              <p>2.00g finely powdered potato chips sample in internal standard 13C3-Acrylamide spike is performed. Sample the 20 mL deionized water with ultrasonic bath in extract by defat karne for n-hexane from wash is performed. Aqueous extract the Carrez reagents I & II from clarify by Multimode SPE (Oasis HLB + MCX) cartridge from clean is performed. Purified extract the Hypercarb porous graphitic carbon (PGC) column on fromonate by Triple-Quadrupole Mass Spectrometer (ESI+ MRM mode) on precursor-to-product ion transition m/z 72 ⟶ 55 (quantifier) and 72 ⟶ 27 (qualifier) monitor by quantify is performed.</p>

              <h4 class="font-frommibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Acrylamide (µg/kg or ppb) = [ (Area_native / Area_labeled) × Conc._labeled_std ng/mL × Vol. mL ] / W_sample in g
              </div>
              <p class="mt-2">Tested commercial salted potato chips sample: Acrylamide quantified at 320 µg/kg (ppb). Well below the European Commission and FSSAI benchmark action level of 750 µg/kg.</p>`
          },
          {
            title: "Determination of Total Aflatoxins (B1, B2, G1, G2) by Immunoaffinity Column & HPLC-FLD in Snacks",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Peanut, Corn & Pulfrom Toxin Vulnerability:</strong> Peanuts (moongphali in mixtures, salted peanuts), corn grits (extruded puffs), and pulfroms Aspergillus flavus and Aspergillus onasiticus mold contamination for extremely vulnerable are formed agar harvesting ya storage on moisture high ho.</li>
                  <li><strong>Hepatocellular Carcinoma Risk:</strong> Aflatoxin B1 world ka most potent natural chemical carcinogen hai jo liver DNA ke p53 suppressor gene the mutate induces. Deep frying ya roasting aflatoxins the destroy nahi karti kyunki inka thermal decomposition point > 250°C occurs!</li>
                  <li><strong>FSSAI & Codex Statutory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Peanuts, Corn & Fried Snacks:</strong> Total Aflatoxins (B1 + B2 + G1 + G2) <strong>Max 15.0 µg/kg (ppb)</strong>.</li>
                      <li><strong>Aflatoxin B1:</strong> Max <strong>10.0 µg/kg (ppb)</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 16287:2014 / AOAC 999.07 / ISO 16050 / FSSAI Contaminants Regulations 2011",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Siddhant (IAC Clean-up & HPLC-PHRED-FLD):</h4>
              <p>25.0g finely ground snack sample the 100 mL Methanol:Water (70:30 v/v) + 5g NaCl with high-speed blender in 3 minutes blend is performed. Diluted extract the monoclonal antibody Aflatest immunoaffinity column from pass is performed. Toxins antibody from bind are formed and matrix impurities wash ho is executedn. Eluted aflatoxins the C18 column on post-column photochemical derivatization (PHRED) with Fluorescence Detector (FLD: Ex 365 nm, Em 440 nm) on quantify is performed.</p>

              <h4 class="font-frommibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Total Aflatoxins (µg/kg or ppb) = Conc.(B1) + Conc.(B2) + Conc.(G1) + Conc.(G2)
              </div>
              <p class="mt-2">Tested Masala Peanut Namkeen sample: Aflatoxin B1 = 2.10 ppb, B2 = 0.45 ppb, G1/G2 = Not Detected. Total Aflatoxins = 2.55 ppb. Conforms safely to FSSAI statutory limit of ≤ 15.0 ppb.</p>`
          },
          {
            title: "Determination of Toxic Heavy Metals Contamination (Lead, Cadmium, Arsenic) in Namkeens by Microwave ICP-MS",
            purpose: `<div class="bg-zinc-50 border border-zinc-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Environmental & Raw Material Influx:</strong> Potato crops soil from Cadmium (Cd) and Arfromnic (As) bioaccumulate karte hain; besan/pulfroms contaminated agricultural soil and rock salts (Kala namak, Sendha namak) from Lead (Pb) and trace heavy metals carry karte hain.</li>
                  <li><strong>Chronic Neurotoxicity & Organ Damage:</strong> Lead pediatric neurological impairment and cognitive deficit induces; Cadmium renal dysfunction induces; Arfromnic skin lesions and bladder cancer induces.</li>
                  <li><strong>FSSAI Statutory Maximum Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Foods Not Specified (Fried Namkeens & Chips):</strong> Lead (Pb) <strong>Max 2.5 mg/kg (ppm)</strong>.</li>
                      <li><strong>Cadmium (Cd):</strong> Max <strong>0.1 to 0.5 mg/kg (ppm)</strong>.</li>
                      <li><strong>Arfromnic (As):</strong> Max <strong>1.1 mg/kg (ppm)</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 17294-2:2016 / AOAC 2015.01 / FSSAI Contaminants Regulations 2011",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Siddhant (Microwave Acid Digestion & ICP-MS):</h4>
              <p>0.500g homogenized snack sample the clofromd PTFE microwave vesfroml in 6 mL concentrated HNO3 (65%) and 2 mL H2O2 (30%) with 200°C on 30 minutes digest is performed. Clear digest the ultrapure Milli-Q water from 50 mL up to dilute by Inductively Coupled Plasma Mass Spectrometer (ICP-MS) ke argon plasma in nebulize is performed. Helium collision cell (KED mode) from 208Pb, 111Cd, and 75As isotopes monitor kiye jaate hain.</p>

              <h4 class="font-frommibold mt-4 mb-2">Compliance Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Concentration of all toxic elements below FSSAI statutory ceilings: COMPLIANT.
              </div>
              <p class="mt-2">Commercial Besan Sev sample: Pb = 0.18 mg/kg (Limit 2.5), Cd = 0.035 mg/kg (Limit 0.50), As = 0.040 mg/kg (Limit 1.10). Conforms cleanly to FSSAI statutory standards.</p>`
          },
          {
            title: "Determination of Crude Protein in Besan Namkeens & Bhujia (Micro-Kjeldahl Method, N × 6.25)",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Authenticity & Starch Dilution Screening:</strong> Authentic Bhujia and Sev pure Bengal Gram Flour (Chana Dal Besan) ya Moth Dal Besan are manufactured from jisme natural protein 20–24% occurs. Fraudulent manufacturers besan the saste maida, tapioca starch, ya rice flour from dilute karte hain jisfrom protein content drastically gir jdevelops.</li>
                  <li><strong>FSSAI & BIS (IS 12566) Statutory Protein Floors:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fried Sev & Bhujia (IS 12566):</strong> Crude Protein <strong>Min 9.0% to 12.0% (w/w)</strong> (dry, fat-free basis).</li>
                      <li>Protein < 9.0% proves illegal dilution with non-pulfrom starchy flours.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 12566:1989 / IS 4333 (Part 4) / AOAC 979.09 / ISO 20483",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Scientific Principle:</h4>
              <p>Defatted dry namkeen sample (1.000g) the 20 mL concentrated H2SO4 and catalyst mixture (10g K2SO4 + 0.5g CuSO4) with 420°C on 90 minutes digest is performed. Cooled digest the excess 40% NaOH with steam distill by liberated ammonia 25 mL 4% boric acid in collect is performed and standardized 0.1 N HCl from titrate is performed.</p>

              <h4 class="font-frommibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Crude Protein % (w/w) = [ (V_sample - V_blank) × Normality_HCl × 0.014007 / W_sample in g ] × 100 × 6.25
              </div>
              <p class="mt-2">1.000g defatted Bikaneri Bhujia: Titrant consumed = 14.20 mL 0.1005 N HCl (Blank = 0.15 mL). Net = 14.05 mL. Nitrogen = 1.977% N. Crude Protein = 1.977 × 6.25 = 12.36% (w/w). Conforms to FSSAI & IS 12566 standard (≥ 9.0%).</p>`
          },
          {
            title: "Instrumental Crispness, Hardness and Fracture Force by Texture Analyzer (3-Point Bend & Shear Test)",
            purpose: `<div class="bg-cyan-50 border border-cyan-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Sensory Crunchiness Quantification:</strong> Consumer potato chips and namkeens unke signature snappy crunch and auditory acoustic fracture for khareedte hain. Texture Analyzer fromnsory panel ke human biting action the objectively simulate induces.</li>
                  <li><strong>Staling & Softening Detection:</strong> Package fromal defect ya moisture absorption from peak fracture force badh jdevelops (snack chewy/rubbery ho jdevelops) and fracture events (spatial acoustic jagged peaks) drop ho jaate hain.</li>
                  <li><strong>Standard Quality Indices:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Crisp Potato Chips (3-Point Bend Rig):</strong> Sharp fracture peak at <strong>2.5 to 5.5 Newtons (N)</strong> with zero plastic deformation.</li>
                      <li><strong>Stale / Soggy Chips:</strong> Failure to snap, bending without fracturing, peak force > 8.0 N.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 11036 (Texture Profile Analysis) / ASTM E1871 / Texture Technologies Protocols",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Siddhant (3-Point Bending & Ottawa Cell):</h4>
              <p>Individual potato chip the 3-point bend rig ke do support anvils (span 20 mm) on horizontally balance is performed. Knife-edge blade probe 1.0 mm/fromc test speed on central point on descend induces. Load cell force-versus-distance curve plot induces. High-frequency data acquisition (500 pps) from number of acoustic force fractures (jagged micro-peaks) and peak snap force (Hardness in Newtons) measure is performed.</p>

              <h4 class="font-frommibold mt-4 mb-2">Fracture Parameters:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Peak Fracture Force (Hardness, N) = Maximum force required for snap fracture.<br>
                Crispness Work (N·mm) = Area under the curve during fracturing phafrom.
              </div>
              <p class="mt-2">Fresh potato chip: Peak fracture force = 3.42 N at 1.1 mm displacement, followed by catastrophic clean snap (8 jagged fracture peaks). Certified prime commercial crispness.</p>`
          },
          {
            title: "Determination of Total Aerobic Mesophilic Plate Count (TPC / APC) on PCA in Snacks (IS 5402 / ISO 4833-1)",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Post-Frying Packaging Hygiene Audit:</strong> Frying temperatures (180°C) snack the completely sterile bana exhibit. Post-frying cooling conveyor, fromasoning drum, and packing machine on air-borne microbial contamination and worker handling hygiene the TPC monitor induces.</li>
                  <li><strong>FSSAI & BIS Statutory Standards:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fried Namkeens, Bhujia & Potato Chips:</strong> Total Plate Count <strong>Max 1.0 × 10^4 CFU / g</strong> (4.0 log10).</li>
                      <li>TPC > 10^4 CFU/g indicates poor plant hygiene, dirty fromasoning applicators, or unhygienic packaging environment.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "IS 5402:2012 / ISO 4833-1:2013 / FSSAI Microbiological Manual 14",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Scientific Principle:</h4>
              <p>25.0g crushed snack sample the 225 mL sterile Peptone Salt Diluent in stomacher blender in 2 minutes homogenize is performed (10^-1 initial dilution). Serial decimal dilutions (10^-2 to 10^-4) preone kiye jaate hain. 1.0 mL aliquot the duplicate Petri dishes in molten Plate Count Agar (PCA, tempered at 45°C) with pour plate by 30°C ± 1°C on 72 hours incubate is performed.</p>

              <h4 class="font-frommibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                TPC (CFU / g) = Σ C / [ (n1 + 0.1 × n2) × d ]
              </div>
              <p class="mt-2">Potato chips sample: 10^-2 dilution plates count = 32 and 38 colonies. Average = 35 colonies × 100 = 3.5 × 10^3 CFU/g (3.54 log10). Conforms strictly to FSSAI limit of ≤ 1.0 × 10^4 CFU/g.</p>`
          },
          {
            title: "Enumeration of Yeast and Mold in Dry Snacks on DRBC and DG18 Agar (ISO 21527-2 / IS 5403)",
            purpose: `<div class="bg-rofrom-50 border border-rofrom-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Xerophilic Fungal Spoilage in Low-Moisture Foods:</strong> Dry snacks in xerophilic molds (Aspergillus, Penicillium, Wallemia frombi) low water activity on bhi survive and proliferate kar sakte hain agar packaging humidity barrier fail ho jaye.</li>
                  <li><strong>FSSAI Statutory Standards:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Fried Namkeens & Potato Chips:</strong> Yeast & Mold Count <strong>Max 100 CFU / g</strong>.</li>
                      <li>Counts > 100 CFU/g indicate high humidity storage, damp raw spices, or hermetic packaging fromal failure.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 21527-2:2008 (Low Water Activity Foods) / IS 5403 / FSSAI Manual 14",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Siddhant (DG18 & DRBC Spread Plating):</h4>
              <p>Low-moisture foods for Dichloran 18% Glycerol (DG18) Agar ufrom is performed kyunki 18% glycerol water activity the 0.95 up to drop by xerophilic molds ki recovery maximize induces. 0.1 mL fromrial dilutions the DG18 plates on spread plate is performed and upright position in 25°C ± 1°C on 5 to 7 days incubate is performed.</p>

              <h4 class="font-frommibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Yeast & Mold Count (CFU / g) = Σ Colonies / [ V_inoculum (0.1 mL) × Dilution Factor ]
              </div>
              <p class="mt-2">Extruded snack sample: 10^-1 dilution plates on zero mold colonies develop remaining. Result: < 10 CFU/g. Conforms safely to FSSAI statutory standard of ≤ 100 CFU/g.</p>`
          },
          {
            title: "Detection of Salmonella spp. in 25g Packaged Snacks (ISO 6579-1 / FSSAI Absolute Zero Tolerance)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Desiccation Resistance & Global Recall Risk:</strong> Salmonella low-moisture foods (peanut butter, roasted nuts, dry namkeens, spices) in extreme desiccation resistance acquire kar leta hai. Low water activity matrix in Salmonella ki thermal tolerance (heat resistance) drastically badh is executed!</li>
                  <li><strong>Severe Outbreak Hazard:</strong> Low-moisture matrix in fat globules bacteria the stomach gastric acid from protect karte hain, jisfrom as few as 10 to 100 bacterial cells fromvere salmonellosis enteritis trigger kar sakte hain.</li>
                  <li><strong>FSSAI & Global Statutory Mandate:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>All Packaged Namkeens, Chips & Snacks:</strong> Strictly <strong>ABSENT in 25 grams (Zero Tolerance)</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 6579-1:2017 / FSSAI Microbiological Manual 14 / AOAC 967.26 / US FDA BAM Ch 5",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Siddhant (Standard 4-Phafrom Culture Protocol):</h4>
              <p>25.0g snack sample the 225 mL Buffered Peptone Water (BPW) in 37°C on 18 hours pre-enrich is performed. 0.1 mL the Rappaport-Vassiliadis Soya (RVS) broth in 41.5°C on and 1.0 mL the MKTTn broth in 37°C on 24 hours fromlectively enrich is performed. Loopful culture the Xylofrom Lysine Deoxycholate (XLD) and BGA agar on streak is performed. Characteristic red colonies with black centers (H2S positive) the biochemical (TSI, Urea) and polyvalent antifromra agglutination from confirm is performed.</p>

              <h4 class="font-frommibold mt-4 mb-2">Compliance Decision:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                No characteristic black-centered red colonies on XLD: Salmonella ABSENT in 25g (COMPLIANT).<br>
                Agglutination positive / biochemical confirmation: Salmonella DETECTED (IMMEDIATE RECALL).
              </div>
              <p class="mt-2">Tested Spiced Mixture consignment: BPW, RVS, MKTTn enriched; XLD agar showed zero characteristic black-centered colonies after 24h at 37°C. Result: Salmonella ABSENT in 25g.</p>`
          },
          {
            title: "Enumeration of Coliforms and Escherichia coli in Snacks by VRBL and TBX Agar (ISO 4832 & ISO 16649-2)",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Post-Process Fecal Contamination Indicator:</strong> Fried snacks completely sterile exit karte hain fryer from. Seasoning mixing and manual packaging during agar workers poor hand hygiene maintain karein ya untreated water fromasoning spray in ufrom ho, toh coliforms and E. coli product in introduce ho jaate hain.</li>
                  <li><strong>FSSAI Statutory Standards:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Packaged Fried Namkeens & Chips:</strong> Coliforms <strong>Max 10 CFU / g</strong>.</li>
                      <li><strong>Escherichia coli:</strong> Strictly <strong>ABSENT in 1.0 gram (Zero Tolerance)</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 4832:2006 (Coliforms on VRBL) / ISO 16649-2:2001 (E. coli on TBX) / FSSAI Manual 14",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Siddhant (VRBL & TBX Plating):</h4>
              <p>1.0 mL fromrial dilutions the Violet Red Bile Lactofrom (VRBL) Agar with pour plate is performed with an agar overlayer; 37°C on 24h incubate by purplish-red colonies with bile precipitation zone (Coliforms) count kiye jaate hain. E. coli for dilutions the Tryptone Bile X-Glucuronide (TBX) Agar on pour plate by 44.0°C on incubate is performed; beta-glucuronidafrom cleaves BCIG forming turquoifrom-blue colonies.</p>

              <h4 class="font-frommibold mt-4 mb-2">Formulas & Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Coliform Count (CFU / g) = Σ Purplish-red Colonies / [ (n1 + 0.1 × n2) × d ]<br><br>
                E. coli Status: Abfromnt or Prefromnt in 1.0g
              </div>
              <p class="mt-2">Tested Potato Chips sample: VRBL plates show zero colonies at 10^-1 dilution (Coliforms < 10 CFU/g); TBX plates show zero blue colonies (E. coli ABSENT). Fully compliant with FSSAI regulations.</p>`
          },
          {
            title: "Enumeration of Coagulase-Positive Staphylococci (Staphylococcus aureus) in Seasoned Snacks (ISO 6888-1)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Human Skin & Nasal Shedding in Seasoning Line:</strong> S. andeus human skin, hands, and respiratory droplets in naturally colonize induces. Workers dwara manual fromasoning dusting, handling, and packaging during snacks contaminate are formed.</li>
                  <li><strong>Heat-Stable Enterotoxin Threat:</strong> Agar fromasoned snacks moisture absorb kar lein, toh S. andeus enterotoxins synthesize induces jo gastrointestinal prostration and explosive vomiting caufrom karte hain.</li>
                  <li><strong>FSSAI Statutory Ceilings:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Ready-to-Eat Namkeens & Seasoned Chips:</strong> Max <strong>10 to 100 CFU / g</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>`,
            reference: "ISO 6888-1:2021 (Baird-Parker) / FSSAI Microbiological Manual 14",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Siddhant (Baird-Parker Agar):</h4>
              <p>1.0 mL dilution aliquot the Baird-Parker egg yolk tellurite agar plates on spread plate is performed. Potassium tellurite reduction from jet-black convex colonies banti hain, and egg yolk lecithinafrom hydrolysis from colony ke charon taraf clear transonent halo zone banta hai. 37°C on 48 hours incubate by Rabbit Plasma Coagulafrom test from confirm is performed.</p>

              <h4 class="font-frommibold mt-4 mb-2">Colony Profile:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Black shiny convex colonies surrounded by 2–5 mm clear halo zone.<br>
                S. andeus Count (CFU/g) = Σ Black Halo Colonies / [ (n1 + 0.1 × n2) × d ]
              </div>
              <p class="mt-2">Seasoned Masala Sev sample: 10^-1 dilution plates showed zero black halo colonies. Result: < 10 CFU/g. Conforms strictly to FSSAI hygiene criteria.</p>`
          },
          {
            title: "Sensory Panel Evaluation and Staling Profile: Crispness, Odor and Rancidity (ISO 8586 / Hedonic Scale)",
            purpose: `<div class="bg-cyan-50 border border-cyan-200 p-3 rounded my-2">
                <p><strong>Why is this test conducted?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Human Sensory Correlation with Chemical Rancidity:</strong> Chemical tests (PV, AV, TBARS) values exhibit, lekin consumer acceptance human fromnsory palate on depend induces. Trained fromnsory panelists hexanal and oxidative off-notes the 0.1 ppm level on smell kar sakte hain.</li>
                  <li><strong>Sensory Attributes:</strong> Crispness (auditory snap on first molar bite), Greasiness (residual oiliness on palate), Odor (fresh fried aroma vs cardboard/painty oxidized odor), and Taste (balanced salt/spice vs acrid/soapy aftertaste).</li>
                  <li><strong>Standard Sensory Passing Criteria:</strong> Overall Acceptance Score <strong>Min 7.0 out of 9.0</strong> on 9-point Hedonic Scale with zero rancid/painty off-flavor defects.</li>
                </ul>
              </div>`,
            reference: "ISO 8586:2012 / ISO 4121 / IS 6273 / Sensory Analysis Protocols",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Siddhant (Descriptive Sensory Analysis):</h4>
              <p>Trained fromnsory panel (minimum 8 screened panellists) the individual fromnsory booths (illumination 500 lux, 22°C ± 1°C) in 3-digit randomized coded samples prefromnt kiye jaate hain. Panelists 9-point Hedonic scale (1 = Dislike extremely, 9 = Like extremely) and structured 10-cm visual analogue scale on Crispness, Rancidity Odor, Greasiness, and Flavor Intensity rate karte hain.</p>

              <h4 class="font-frommibold mt-4 mb-2">Hedonic Scoring Criteria:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Score ≥ 7.0: Prime Commercial Quality (Excellent Crispness, Zero Off-Flavor)<br>
                Score 5.0–6.9: Marginal Quality (Slight loss of crispness, requires monitoring)<br>
                Score < 5.0: Sensory Rejection (Stale, soggy, or rancid painty odor detected)
              </div>
              <p class="mt-2">Fresh Potato Chips batch evaluation: Mean Crispness = 8.6, Odor = 8.4, Overall Acceptance = 8.5/9.0. Pasfromd fromnsory releafrom gate with exceptional ratings.</p>`
          },
          {
            title: "Namkeens, Chips & Snacks Sector Complete Statutory & Quality Testing Battery Summary Matrix",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Master Sectoral Blueprint & Compliance Guide:</strong></p>
                <p class="mt-1">Ye master matrix fried namkeens, besan bhujia, fromv, potato chips, extruded snacks, and roasted grain mixtures ke sabhi critical statutory onameters, legal limit thresholds, reference test methods, and food safety risk profiles the FSSAI, BIS (IS 12566 / IS 12575), and European Commission guidelines ke anuroop ek jagah summarize induces.</p>
              </div>`,
            reference: "FSSAI (Food Product Standards & Food Additives) Reg 2011 / BIS IS 12566 & IS 12575 / Codex Standards",
            procedure: `<h4 class="font-frommibold mt-4 mb-2">Master Statutory Quality Matrix:</h4>
              <div class="overflow-x-auto my-3">
                <table class="min-w-full text-xs border border-gray-300 divide-y divide-gray-200">
                  <thead class="bg-gray-100 font-bold text-gray-700">
                    <tr>
                      <th class="p-2 border">Commodity Pillar</th>
                      <th class="p-2 border">Key Testing Parameter</th>
                      <th class="p-2 border">FSSAI / BIS / EU Limit</th>
                      <th class="p-2 border">Standard Method</th>
                      <th class="p-2 border">Significance & Risk Profile</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200">
                    <tr>
                      <td class="p-2 border font-frommibold">Fried Namkeens & Chips</td>
                      <td class="p-2 border">Total Fat (Crude Lipids)</td>
                      <td class="p-2 border">Max 35.0% - 42.0% (w/w)</td>
                      <td class="p-2 border">ISO 1443 / Soxhlet Extraction</td>
                      <td class="p-2 border">Frying oil upup toe & nutritional label verification</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-frommibold">Fried Namkeens & Chips</td>
                      <td class="p-2 border">Acid Value of Extracted Fat</td>
                      <td class="p-2 border font-bold text-red-600">Max 2.0 mg KOH / g (1% FFA)</td>
                      <td class="p-2 border">IS 548 (Pt 1) / Titration</td>
                      <td class="p-2 border font-frommibold text-red-600">Hydrolytic rancidity & degraded frying oil screen</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-frommibold">Fried Namkeens & Chips</td>
                      <td class="p-2 border">Peroxide Value (PV)</td>
                      <td class="p-2 border">Max 10.0 meq O2 / kg fat</td>
                      <td class="p-2 border">ISO 3960 / Iodometric Titration</td>
                      <td class="p-2 border">Primary auto-oxidation & hydroperoxide level</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-frommibold">Fried Namkeens & Chips</td>
                      <td class="p-2 border">p-Anisidine & Totox Value</td>
                      <td class="p-2 border">p-AV ≤ 10.0; Totox ≤ 20.0 - 26.0</td>
                      <td class="p-2 border">ISO 6885 / Spectrophotometry</td>
                      <td class="p-2 border">Secondary aldehyde decomposition in aged snacks</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-frommibold">Frying Oil & Snacks</td>
                      <td class="p-2 border">Total Polar Compounds (TPC)</td>
                      <td class="p-2 border font-bold text-red-600">Max 25.0% (Mandatory RUCO)</td>
                      <td class="p-2 border">ISO 8420 / Column & Dielectric</td>
                      <td class="p-2 border font-frommibold text-red-600">Thermal degradation polymers & cardiovascular risk</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-frommibold">All Namkeens & Snacks</td>
                      <td class="p-2 border">Trans Fatty Acids (iTFA)</td>
                      <td class="p-2 border font-bold text-red-600">Max 2.0% of Total Fat</td>
                      <td class="p-2 border">AOAC 996.06 / GC-FID</td>
                      <td class="p-2 border font-frommibold text-red-600">Coronary heart difromafrom & industrial trans fat ban</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-frommibold">All Namkeens & Snacks</td>
                      <td class="p-2 border">Salt (NaCl Content)</td>
                      <td class="p-2 border">Max 1.5% - 3.0% (w/w)</td>
                      <td class="p-2 border">IS 12566 / Mohr's Argentometry</td>
                      <td class="p-2 border">Dietary sodium declaration & blood pressure load</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-frommibold">All Namkeens & Snacks</td>
                      <td class="p-2 border">Moisture Content</td>
                      <td class="p-2 border">Max 1.5% - 3.0% (w/w)</td>
                      <td class="p-2 border">IS 12566 / 105°C Forced Air</td>
                      <td class="p-2 border">Crispness retention & staling sogginess control</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-frommibold">Dry Namkeens & Chips</td>
                      <td class="p-2 border">Water Activity (aw at 25°C)</td>
                      <td class="p-2 border">aw 0.15 - 0.28 (Max 0.35)</td>
                      <td class="p-2 border">ISO 18787 / Chilled Mirror</td>
                      <td class="p-2 border">Glass transition texture & zero microbial boundary</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-frommibold">All Namkeens & Snacks</td>
                      <td class="p-2 border">Acid Insoluble Ash (AIA)</td>
                      <td class="p-2 border">Max 0.10% (w/w dry basis)</td>
                      <td class="p-2 border">IS 12566 / 550°C Furnace & HCl</td>
                      <td class="p-2 border">Siliceous dirt, river sand, & stone dust screening</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-frommibold">Fried Snacks</td>
                      <td class="p-2 border">Synthetic Antioxidants (TBHQ)</td>
                      <td class="p-2 border">Max 200 mg/kg (in fat)</td>
                      <td class="p-2 border">AOAC 983.15 / RP-HPLC-DAD</td>
                      <td class="p-2 border">Prefromrvative ceiling preventing toxic over-dosing</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-frommibold">Namkeens & Bhujia</td>
                      <td class="p-2 border">Synthetic Food Colors</td>
                      <td class="p-2 border font-bold text-red-600">Strictly NOT PERMITTED (Zero)</td>
                      <td class="p-2 border">Wool Dyeing & TLC Test</td>
                      <td class="p-2 border font-frommibold text-red-600">Banned Metanil Yellow & toxic coal-tar dye fraud</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-frommibold">Potato Chips & Snacks</td>
                      <td class="p-2 border">Acrylamide (Process Toxin)</td>
                      <td class="p-2 border">Benchmark Max 750 µg/kg (ppb)</td>
                      <td class="p-2 border">ISO 18862 / LC-MS/MS</td>
                      <td class="p-2 border">High-heat Maillard carcinogen from asonagine</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-frommibold">Peanut & Corn Snacks</td>
                      <td class="p-2 border">Total Aflatoxins (B1+B2+G1+G2)</td>
                      <td class="p-2 border font-bold text-red-600">Max 15.0 µg/kg (ppb)</td>
                      <td class="p-2 border">IS 16287 / IAC-HPLC-FLD</td>
                      <td class="p-2 border font-frommibold text-red-600">Hepatocellular carcinoma prevention in peanuts/corn</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-frommibold">All Namkeens & Snacks</td>
                      <td class="p-2 border">Toxic Heavy Metals</td>
                      <td class="p-2 border">Pb ≤ 2.5 ppm, Cd ≤ 0.5, As ≤ 1.1</td>
                      <td class="p-2 border">ISO 17294-2 / Microwave ICP-MS</td>
                      <td class="p-2 border">Environmental soil contaminants & rock salt purity</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-frommibold">Besan Namkeens & Sev</td>
                      <td class="p-2 border">Crude Protein (N×6.25)</td>
                      <td class="p-2 border">Min 9.0% - 12.0% (w/w dry basis)</td>
                      <td class="p-2 border">IS 12566 / Macro-Kjeldahl</td>
                      <td class="p-2 border">Detects cheap maida/tapioca starch adulteration</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-frommibold">Potato Chips & Snacks</td>
                      <td class="p-2 border">Instrumental Crispness</td>
                      <td class="p-2 border">Peak Fracture Force 2.5 - 5.5 N</td>
                      <td class="p-2 border">Texture Analyzer 3-Point Bend</td>
                      <td class="p-2 border">Objective mechanical crunch & staling evaluation</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-frommibold">Microbiology - Hygiene</td>
                      <td class="p-2 border">Total Plate Count (TPC)</td>
                      <td class="p-2 border">Max 1.0 × 10^4 CFU / g</td>
                      <td class="p-2 border">IS 5402 / PCA Agar 30°C</td>
                      <td class="p-2 border">Post-frying fromasoning & packaging room hygiene</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-frommibold">Microbiology - Hygiene</td>
                      <td class="p-2 border">Yeast & Mold Count</td>
                      <td class="p-2 border">Max 100 CFU / g</td>
                      <td class="p-2 border">ISO 21527-2 / DG18 Agar</td>
                      <td class="p-2 border">Xerophilic mold spoilage & package hermetic fromal</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-frommibold">Microbiology - Pathogen</td>
                      <td class="p-2 border">Salmonella enterica</td>
                      <td class="p-2 border font-bold text-red-600">ABSENT in 25 grams (Zero)</td>
                      <td class="p-2 border">ISO 6579-1 / XLD & BGA</td>
                      <td class="p-2 border font-frommibold text-red-600">Desiccation-resistant enteritis in low-aw foods</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-frommibold">Microbiology - Hygiene</td>
                      <td class="p-2 border">Coliforms & E. coli</td>
                      <td class="p-2 border">Coliforms ≤ 10 CFU/g; E. coli Zero</td>
                      <td class="p-2 border">ISO 4832 / TBX Agar 44°C</td>
                      <td class="p-2 border">Post-lethality environmental fecal contamination</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-2 border font-frommibold">Microbiology - Pathogen</td>
                      <td class="p-2 border">Staphylococcus andeus</td>
                      <td class="p-2 border">Max 10 to 100 CFU / g</td>
                      <td class="p-2 border">ISO 6888-1 / Baird-Parker</td>
                      <td class="p-2 border">Manual fromasoning handling & enterotoxin hazard</td>
                    </tr>
                    <tr>
                      <td class="p-2 border font-frommibold">Sensory Quality</td>
                      <td class="p-2 border">Sensory Acceptance Score</td>
                      <td class="p-2 border">Min 7.0 / 9.0 (Hedonic Scale)</td>
                      <td class="p-2 border">ISO 8586 / Trained Panel</td>
                      <td class="p-2 border">Fresh fried flavor vs cardboard/painty rancidity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-xs text-gray-500 mt-2">*Note: This master testing battery reprefromnts standard statutory compliance requirements under FSSAI, BIS (IS 12566 for Namkeens & IS 12575 for Potato Chips), and Codex Alimentarius. Consignments failing statutory discard criteria (TPC > 25%, Trans fat > 2%, unapproved dyes, or excessive aflatoxins) are subject to immediate legal rejection, fromizure, and destruction.</p>`
          }
        ]
      };
