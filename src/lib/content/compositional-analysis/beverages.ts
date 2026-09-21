/**
 * Compositional Analysis: Beverages (Fruit Juices, Squashes, Carbonated Drinks, Energy Drinks)
 * Independent product module for easy future updates and extensions.
 */

export const beveragesHi = {
        title: "पेय पदार्थ (Beverages: Packaged Water, Mineral Water, Soft Drinks, Fruit Juices, Squashes, Tea, Coffee, Energy Drinks)",
        tests: [
          {
            title: "Total Dissolved Solids (TDS), Electrical Conductivity aur pH ka Determination (Packaged Water)",
            purpose: `<div class="bg-cyan-50 border border-cyan-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Mineral Balance & Taste:</strong> Packaged Drinking Water aur Natural Mineral Water mein Total Dissolved Solids (TDS) dissolved inorganic salts (Calcium, Magnesium, Sodium, Potassium, Chlorides, Sulfates, Bicarbonates) ki matra batata hai.</li>
                  <li><strong>FSSAI & BIS Statutory Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Packaged Drinking Water (IS 14543):</strong> TDS <strong>75 se 500 mg/L</strong>; pH <strong>6.50 se 8.50</strong>.</li>
                      <li><strong>Natural Mineral Water (IS 13428):</strong> TDS <strong>150 se 700 mg/L</strong>; pH <strong>6.50 se 8.50</strong>.</li>
                      <li><strong>Carbonated Soft Drinks (CSD):</strong> pH <strong>2.50 se 3.50</strong> (sharp tartness aur microbial barrier).</li>
                    </ul>
                  </li>
                  <li><strong>Physiological Impact:</strong> TDS < 75 mg/L hone par paani bilkul 'flat/demineralized' taste karta hai aur sharir se electrolytes leach karta hai; TDS > 500 mg/L hone par paani heavy, salty aur kidney stone load badhata hai.</li>
                </ul>
              </div>
              <div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Deep Science: Har Constant aur Factor ka Kaaran:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Gravimetric 180°C Temperature:</strong> Gravimetric TDS mein evaporating dish ko 100°C par nahi, balki <strong>180°C ± 2°C</strong> par dry kiya jaata hai kyunki 100°C par mineral salts ke interstitial pores mein phasa bound water nahi nikalta. 180°C par sabhi occluded water molecules evaporate ho jaate hain, jabki 200°C se upar bicarbonates decompose ho kar volatile CO2 chhodte hain jo result ko galat kar deta hai (APHA 2540C).</li>
                  <li><strong>EC to TDS Factor 0.65:</strong> Dissolved inorganic ions charge carriers hote hain. Mixed natural drinking water mein average ionic mobility factor 25°C par <strong>0.65</strong> hota hai: <code>TDS (mg/L) ≈ EC (µS/cm) × 0.65</code>. Pure NaCl ke liye ye 0.50 aur high sulfate ke liye 0.75 hota hai.</li>
                  <li><strong>pH Nernstian Response:</strong> Glass electrode 25°C par per pH unit 59.16 mV ka potential generate karta hai. Buffer calibration 4.01 aur 7.00 se slope 95-102% verify ki jaati hai.</li>
                </ul>
              </div>`,
            reference: "IS 14543:2016 / IS 13428:2005 / IS 3025 (Part 16 & 11) / APHA 2540C / FSSAI Manual 02",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant (Principle):</h4>
              <p>Filter kiye gaye paani ko pre-weighed platinum ya porcelain dish mein dry karke 180°C ± 2°C par oven mein constant mass tak heat kiya jaata hai (Gravimetric TDS). Electrometric method mein 1413 µS/cm KCl standard se calibrated conductivity cell dwara specific conductance measure karke standard ionic factor 0.65 se TDS calculate kiya jaata hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Reagents aur Apparatus:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Digital Conductivity / TDS Meter (Temperature compensated at 25.0°C ± 0.1°C)</li>
                <li>Primary Standard: 0.01 M KCl Solution (Conductivity = 1413 µS/cm at 25°C)</li>
                <li>High-Silica Porcelain ya Platinum Evaporating Dishes (100 mL capacity)</li>
                <li>Hot Air Oven (calibrated at 180°C ± 2°C) aur Vacuum Desiccator active silica gel ke saath</li>
                <li>Analytical Balance (accuracy ±0.0001 g) aur Whatman 0.45 µm Membrane Filters</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Karyavidhi (Step-by-Step Procedure):</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li><strong>Electrometric Calibration:</strong> Conductivity probe ko deionized water se rinse karein. 1413 µS/cm KCl standard mein dip karke 25.0°C par calibrate karein.</li>
                <li><strong>Electrometric Measurement:</strong> 100 mL fresh water sample mein probe daalein, bubble remove karne ke liye swirl karein, aur stabilized Conductivity (µS/cm) aur TDS (mg/L) note karein.</li>
                <li><strong>Gravimetric Method (Referee Method):</strong> 100 mL sample ko 0.45 µm membrane filter se pass karein taaki suspended matter nikal jaaye. Pre-ignited tared evaporating dish (W_dish) mein filtrate daalein.</li>
                <li>Water bath par complete dry hone tak evaporate karein. Uske baad 180°C ± 2°C oven mein exactly 1 ghante dry karein.</li>
                <li>Desiccator mein room temperature tak cool karein aur analytical balance par weigh karein (W_final).</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Formula aur Calculations:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Gravimetric TDS (mg/L) = [ (W_final - W_dish) × 1,000,000 ] / Sample Volume V (mL)<br><br>
                Electrometric Approximation:<br>
                TDS (mg/L) = Electrical Conductivity at 25°C (µS/cm) × 0.65
              </div>

              <h4 class="font-semibold mt-4 mb-2">Practical Numerical Example:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Empty dish tare mass (W_dish) = 48.2150 g</li>
                <li>Dish + dried mineral residue (W_final) after 180°C = 48.2390 g</li>
                <li>Filtered sample volume = 100 mL</li>
                <li>TDS = [ (48.2390 - 48.2150) × 1,000,000 ] / 100 = [ 0.0240 × 10,000 ] = <strong>240.0 mg/L</strong></li>
                <li><em>Nishkarsh:</em> Packaged drinking water standard 75-500 mg/L ke bilkul anukool hai.</li>
              </ul>`
          },
          {
            title: "Nephelometric Turbidity ka Determination (Optical Clarity & Suspended Colloids)",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Disinfection Efficiency:</strong> Suspended colloidal clay, silica, aur organic matter paani mein aane wali UV rays aur ozone/chlorine ko block karke bacteria ko shield karte hain.</li>
                  <li><strong>Statutory Limits:</strong> IS 14543 aur IS 13428 ke mutabiq Packaged Drinking Water ki turbidity <strong>Maximum 2.0 NTU</strong> (Desirable limit <strong>< 1.0 NTU</strong>) honi chahiye.</li>
                </ul>
              </div>
              <div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Deep Science: 90° Nephelometry aur Formazin Polymer:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>90° Scattering vs Direct Absorption:</strong> Low turbidity (< 2 NTU) par transmitted beam mein absorption drop negligible (< 0.01%) hota hai. Par 90° angle par detector pure water ke zero-signal background ke samne single particle se scatter hui light ko ultra-high sensitivity se detect karta hai (ISO 7027).</li>
                  <li><strong>Formazin Primary Standard:</strong> Hydrazine sulfate aur hexamethylenetetramine ke reaction se banne wala insoluble white Formazin polymer perfectly spherical aur reproducible cross-linked particles banata hai jo world standard 400 NTU define karta hai.</li>
                </ul>
              </div>`,
            reference: "ISO 7027-1 / IS 3025 (Part 10) / APHA 2130B / IS 14543",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Siddhant:</h4>
              <p>Sample mein mojud colloidal particles 860 nm IR incident beam ko 90° angle par scatter karte hain. Scattered light ki intensity standard Formazin suspension ke comparison mein Nephelometric Turbidity Units (NTU) mein measure hoti hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Reagents aur Karyavidhi:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Nephelometer ko zero NTU (particle-free distilled water) aur 10.0 NTU Formazin standard se calibrate karein.</li>
                <li>Sample cuvette ko silicone oil aur lint-free optical paper se wipe karein taaki glass surface par scratch ya fingerprint reflection na aaye.</li>
                <li>Sample bottle ko bina air bubbles banaye gently invert karein aur cuvette mein fill karein.</li>
                <li>Cuvette well mein insert karein, index mark align karein aur digital NTU reading note karein.</li>
              </ol>`
          },
          {
            title: "Total Soluble Solids (°Brix) ka Determination (Fruit Juices, Nectars, CSD, Squashes)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Fruit Sugar Solids Mandate:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>100% Pure Fruit Juices:</strong> Minimum <strong>10.0° se 13.5° Brix</strong> (Apple ≥ 11.5°, Orange ≥ 10.0°, Mango ≥ 12.0°).</li>
                      <li><strong>Fruit Nectars:</strong> Minimum <strong>15.0° Brix</strong>.</li>
                      <li><strong>Fruit Squashes & Crushes:</strong> Minimum <strong>40.0° Brix</strong> aur <strong>55.0° Brix</strong>.</li>
                      <li><strong>Carbonated Soft Drinks (Colas / Lemon):</strong> <strong>8.0° se 12.0° Brix</strong>.</li>
                    </ul>
                  </li>
                  <li><strong>Water Dilution Detection:</strong> Juice mein paani milane par Brix drop ho jaata hai jo statutory fraud hai.</li>
                </ul>
              </div>`,
            reference: "IS 2860 / AOAC 932.12 / IFU Method No. 8 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure & Acid Correction:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Digital Abbe/benchtop refractometer ko deionized water se 20.0°C par zero (0.00° Brix) calibrate karein.</li>
                <li>Juice sample ko centrifuge karein (3000 rpm, 5 min) taaki insoluble fruit pulp cells optical beam ko scatter na karein.</li>
                <li>Clear serum ke 2-3 drops prism par daalein aur 20.0°C par stabilized °Brix note karein.</li>
                <li><strong>Acid Correction:</strong> High-acid fruit drinks mein organic acids ke karan refractive index change hota hai: <code>Corrected °Brix = Uncorrected °Brix + (0.18 × Titratable Acidity %)</code>.</li>
              </ol>`
          },
          {
            title: "Titratable Acidity aur pH Balance ka Determination (as Citric / Phosphoric Acid)",
            purpose: `<div class="bg-purple-50 border border-purple-200 p-3 rounded my-2">
                <p><strong>Beverage Acidity Profile:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Carbonated Colas:</strong> Sharp pungency ke liye <strong>Orthophosphoric Acid (H3PO4)</strong> use hota hai (FSSAI statutory ceiling: <strong>Max 700 ppm</strong>).</li>
                  <li><strong>Fruit Juices & Squashes:</strong> Tartness aur microbial stability <strong>Citric Acid</strong> ya <strong>Malic Acid</strong> se aati hai (Juices typically 0.3% - 1.5% as anhydrous citric).</li>
                </ul>
              </div>`,
            reference: "IS 2860 / IS 2346 / AOAC 942.15 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <p>Decarbonated sample (CSD ko ultrasonic bath mein 15 minute degas karein) ke 25 mL aliquot ko boiled distilled water se dilute karein. Phenolphthalein indicator (pH 8.1 - 8.3) ya digital pH electrode use karke standardized 0.1 N NaOH se titrate karein.</p>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Acidity % as Citric Acid = [ V_NaOH × N_NaOH × 0.064 × 100 ] / Sample Volume (mL)<br><br>
                Phosphoric Acid (mg/L or ppm) = [ V_NaOH × N_NaOH × 49.0 × 1000 ] / Sample Volume (mL)
              </div>`
          },
          {
            title: "Carbonation Volume aur Gas Pressure ($CO_2$ Gas Volumes) in Carbonated Beverages (CSD)",
            purpose: `<div class="bg-indigo-50 border border-indigo-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Effervescence & Tingling Sensation:</strong> Carbon dioxide ($CO_2$) gas paani mein dissolve hokar Carbonic Acid ($H_2CO_3$) banati hai jo tongue ke sour receptors ko stimulate karke signature fizz deta hai.</li>
                  <li><strong>Commercial Industry Standards:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Colas:</strong> <strong>3.5 se 4.0 Gas Volumes</strong> (high carbonation).</li>
                      <li><strong>Lemon-Lime / Clear Sodas:</strong> <strong>3.0 se 3.5 Gas Volumes</strong>.</li>
                      <li><strong>Fruit Juice Carbonated Drinks:</strong> <strong>1.5 se 2.5 Gas Volumes</strong>.</li>
                      <li><strong>Soda Water / Club Soda:</strong> <strong>3.8 se 4.5 Gas Volumes</strong>.</li>
                    </ul>
                  </li>
                  <li><strong>Microbial Barrier:</strong> High dissolved $CO_2$ anaerobic environment banata hai aur cytoplasmic acidification karta hai jisse bacteria grow nahi ho paate.</li>
                </ul>
              </div>
              <div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Deep Science: Zahm & Nagel Pressure-Temperature Snifting Method:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Headspace Air Snifting (Bleeding):</strong> Sealed bottle ke headspace mein air ($N_2 + O_2$) trapped hoti hai jo pressure gauge par artificial high reading deti hai (Dalton's Law of Partial Pressures). Pierce karne ke turant baad snift valve ko 1-2 second open karke trapped air bleed ki jaati hai.</li>
                  <li><strong>Henry's Law Vapor-Liquid Equilibrium:</strong> Snifting ke baad bottle ko vigorously shake kiya jaata hai jab tak liquid aur headspace ke beech dissolved $CO_2$ gas equilibrium na aa jaaye aur gauge needle stationary ho jaaye. Pressure (psi) aur temperature (°F) ko Zahm & Nagel chart par match karke exact Gas Volumes determine kiye jaate hain.</li>
                </ul>
              </div>`,
            reference: "IS 2346:1992 / FSSAI Carbonated Beverages Standard / Zahm & Nagel Technical Manual",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Apparatus & Testing Steps:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li><strong>Equipment:</strong> Calibrated Zahm & Nagel Piercing Device (0-100 psi gauge, dialed thermometer with penetrating probe).</li>
                <li><strong>Clamping & Piercing:</strong> CSD bottle/can ko clamping platform par fit karein. Piercing needle ko bottle cap ke center par penetrate karein bina seal leak kiye.</li>
                <li><strong>Snifting (Air Release):</strong> Pressure valve ko gently open karke headspace air ko bleed karein, phir valve band karein.</li>
                <li><strong>Shaking to Equilibrium:</strong> Device aur bottle ko horizontally 60 seconds tak vigorously shake karein jab tak maximum pressure reading stabilize na ho jaaye. Stabilized pressure ($P$ in psi) record karein.</li>
                <li>Penetrating dial thermometer probe ko liquid ke andar push karein aur exact temperature ($T$ in °F) measure karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Formula & Chart Calculation:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Gas Volumes of CO2 = (P + 14.696) × [ 0.01976 - (0.0001078 × T) ]<br><br>
                Where:<br>
                - P = Gauge Pressure (psi)<br>
                - T = Liquid Temperature (°F)<br>
                - 14.696 = Atmospheric pressure at sea level (psi)
              </div>
              <p class="mt-2">Agar Cola sample 40.0°F par 38.0 psi pressure dikhata hai: <code>Gas Volumes = (38.0 + 14.696) × [0.01976 - (0.0001078 × 40)] = 52.696 × 0.015448 = 3.82 Volumes</code> (Grade A compliant).</p>`
          },
          {
            title: "Caffeine Content ka Determination (RP-HPLC-UV Method) in CSD, Energy Drinks & Tea",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Central Nervous System Stimulant Limits:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Carbonated Soft Drinks (Colas):</strong> Maximum <strong>145 ppm (mg/L)</strong> (FSSAI mandatory ceiling).</li>
                      <li><strong>Caffeinated Beverages / Energy Drinks:</strong> Minimum <strong>145 ppm</strong> aur Maximum <strong>300 ppm</strong> (Mandatory front-of-pack advisory: "Contains high caffeine, not recommended for children, pregnant women").</li>
                      <li><strong>Decaffeinated Tea / Coffee:</strong> Maximum <strong>0.1%</strong> dry basis.</li>
                    </ul>
                  </li>
                  <li><strong>Toxicity Warning:</strong> Excess caffeine consumption tachycardia, insomnia, anxiety aur cardiac arrhythmias cause karta hai.</li>
                </ul>
              </div>`,
            reference: "IS 13428 / AOAC 979.11 / ISO 20481 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">RP-HPLC Chromatographic Parameters:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Stationary Phase: C18 Reverse Phase Column (250 mm × 4.6 mm, 5 µm)</li>
                <li>Mobile Phase: Methanol : HPLC Grade Water (30:70 v/v), Isocratic flow 1.0 mL/min</li>
                <li>Detector: UV-Visible Absorption at <strong>272 nm</strong> (purine chromophore absorption maximum)</li>
                <li>Column Temp: 30°C; Injection Volume: 10 µL; Retention Time: ~4.5 minutes</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Procedure & Calculation:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>CSD sample ko ultrasonic bath mein 15 minute degas karein.</li>
                <li>0.45 µm nylon syringe filter se pass karke directly autosampler vial mein bharein (Energy drinks ko 1:5 dilute karein).</li>
                <li>Caffeine primary standard curve (10 - 200 mg/L) plot karke peak area response factor se concentration nikaalein.</li>
              </ol>`
          },
          {
            title: "Non-Nutritive Artificial Sweeteners ka Simultaneous Determination (Aspartame, Ace-K, Sucralose)",
            purpose: `<div class="bg-green-50 border border-green-200 p-3 rounded my-2">
                <p><strong>Statutory Sweetener Limits (FSSAI Regulations):</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Aspartame:</strong> Maximum <strong>700 ppm</strong> (Phenylketonurics warning mandatory).</li>
                  <li><strong>Acesulfame Potassium (Ace-K):</strong> Maximum <strong>300 ppm</strong>.</li>
                  <li><strong>Sucralose:</strong> Maximum <strong>300 ppm</strong>.</li>
                  <li><strong>Sodium Saccharin:</strong> Maximum <strong>100 ppm</strong>.</li>
                </ul>
              </div>`,
            reference: "AOAC 996.11 / ISO 22855 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle & HPLC Detection:</h4>
              <p>Degassed drink sample ko Carrez reagents se clarify karke C18 column par separate kiya jaata hai. Mobile phase: Acetonitrile : 0.02 M Potassium Dihydrogen Phosphate (KH2PO4) buffer pH 4.0. UV detection Ace-K ke liye 227 nm, Aspartame ke liye 210 nm, aur Saccharin ke liye 220 nm par hoti hai.</p>`
          },
          {
            title: "Preservative Assay: Sodium Benzoate aur Potassium Sorbate (RP-HPLC-UV Method)",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Kyun karte hain ye test?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Yeast Spoilage Control:</strong> Acidic drinks (pH 2.8 - 3.8) mein osmophilic yeasts (<em>Zygosaccharomyces bailii</em>) gas bana kar bottles ko burst kar sakti hain.</li>
                  <li><strong>FSSAI Limits:</strong> CSD mein Benzoate <strong>Max 120 ppm</strong>; Fruit Squashes mein <strong>Max 600 ppm</strong>; Juices mein Sorbate <strong>Max 500 ppm</strong>.</li>
                  <li><strong>Benzene Risk:</strong> Benzoate Vitamin C ke sath react karke carcinogenic Benzene na banaye, isliye CSD formulation mein strict control zaruri hai.</li>
                </ul>
              </div>`,
            reference: "ISO 22855 / AOAC 994.11 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Simultaneous HPLC Analysis:</h4>
              <p>C18 column par Methanol : 0.02 M Ammonium Acetate buffer (30:70, pH 4.5) se isocratic run karein. Benzoate 228 nm aur Sorbate 254 nm par detect hota hai. Retention times: Benzoate ~4.2 min, Sorbate ~5.8 min.</p>`
          },
          {
            title: "Free aur Total Sulphur Dioxide ($SO_2$) Residue (Ripper & Monier-Williams Method in Squashes)",
            purpose: `<div class="bg-gray-100 border border-gray-300 p-3 rounded my-2">
                <p><strong>Antioxidant & Allergen Control:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Fruit Squashes aur Cordials mein browning aur fermentation rokne ke liye Potassium Metabisulphite (KMS) add kiya jaata hai.</li>
                  <li><strong>FSSAI Legal Limit:</strong> Fruit Squashes, Crushes, Cordials mein <strong>Max 350 ppm</strong> $SO_2$. Agar $SO_2 > 10$ ppm ho toh "Contains Sulphites" allergen declaration mandatory hai.</li>
                </ul>
              </div>`,
            reference: "IS 2860 / AOAC 990.28 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Ripper Iodometric Titration:</h4>
              <p>1. Sample aliquot mein dilute H2SO4 daal kar free $SO_2$ liberate karein. Starch indicator daal kar 0.02 N Iodine solution se titrate karein (Blue endpoint).<br>
              2. Total $SO_2$ ke liye sample ko 1.0 N KOH se alkaline hydrolysis karke bound aldehydes release karein, phir acidify karke titrate karein.<br>
              Reaction: <code>SO2 + I2 + 2 H2O ⟶ H2SO4 + 2 HI</code> (1 mL 0.02 N I2 = 0.64 mg SO2).</p>`
          },
          {
            title: "Vitamin C (L-Ascorbic Acid) Assay (DCPIP Titration & HPLC in Fortified Juices)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Nutritional Claim & Oxidation Index:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Fruit juices aur fortified waters mein nutritional label claim (e.g. 100% Daily Value Vitamin C) verify karta hai.</li>
                  <li>Vitamin C light aur oxygen se dehydroascorbic acid mein oxidize hota hai, isliye shelf-life freshness index hai.</li>
                </ul>
              </div>`,
            reference: "AOAC 967.21 / IS 2860 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">DCPIP Redox Titration:</h4>
              <p>Juice sample ko 3% Metaphosphoric acid (HPO3) mein stabilize karein (HPO3 trace metals ko chelate karke ascorbic acid oxidation rokti hai). Standardized 2,6-Dichlorophenolindophenol (DCPIP) dye se titrate karein. Ascorbic acid dye ko colorless leucobase banata hai; stoichiometric endpoint par excess dye faint pink color (15 second stable) deti hai.</p>`
          },
          {
            title: "Formol Number aur Amino Acid Index (Fruit Juice Authenticity & Adulteration Check)",
            purpose: `<div class="bg-purple-50 border border-purple-200 p-3 rounded my-2">
                <p><strong>Detection of Synthetic & Watered-Down Juices:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Asli fruit juice mein natural amino acids (proline, arginine, asparagine) hote hain. Agar juice ko paani aur synthetic sugar/acid se adulterate kiya gaya hai toh Formol Number drastically drop ho jaata hai.</li>
                  <li><strong>Standard AIJN / IFU Values:</strong> Pure Orange Juice Formol No. = <strong>18 se 26</strong>; Pure Apple Juice = <strong>3 se 8</strong>.</li>
                </ul>
              </div>`,
            reference: "IFU Method No. 29 / ISO 5518 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Sorenson's Formol Titration:</h4>
              <p>25 mL juice ko 0.1 N NaOH se pH 8.1 par neutralize karein. 10 mL neutralized 37% Formaldehyde solution add karein. Formaldehyde amino groups (-NH3+) se react karke neutral dimethylol banata hai aur H+ ions release karta hai. In released protons ko 0.1 N NaOH se wapas pH 8.10 tak titrate karein.<br>
              <code>Formol Number = mL 0.1 N NaOH consumed per 100 mL juice</code>.</p>`
          },
          {
            title: "Patulin Mycotoxin in Apple Juice & Nectars (RP-HPLC-UV Method)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Rotten Apple Fungus Toxin:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><em>Penicillium expansum</em> fungus sड़े-gale seb (damaged apples) mein Patulin mycotoxin produce karta hai jo immunotoxic aur neurotoxic hai.</li>
                  <li><strong>FSSAI & Codex Statutory Ceiling:</strong> Maximum <strong>50 µg/kg (50 ppb)</strong> in apple juice.</li>
                </ul>
              </div>`,
            reference: "AOAC 995.10 / ISO 8128 / FSSAI Contaminants Regulations",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Extraction & HPLC:</h4>
              <p>Sample ko ethyl acetate se extract karein, 1.5% Na2CO3 solution se wash karke acidic impurities remove karein. Anhydrous Na2SO4 se dry karke SPE column clean-up karein. C18 column par Acetonitrile : Water (10:90) mobile phase se run karein. UV detection exactly <strong>276 nm</strong> par karein (LOD < 5 ppb).</p>`
          },
          {
            title: "Synthetic Food Colors aur Prohibited Dyes Screening (Tartrazine, Sunset Yellow, Sudan, Metanil)",
            purpose: `<div class="bg-rose-50 border border-rose-200 p-3 rounded my-2">
                <p><strong>Coal-Tar Dye Regulatory Verification:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Permitted food colors (Tartrazine, Sunset Yellow, Ponceau 4R, Brilliant Blue) flavored drinks mein <strong>Max 100 ppm</strong> allowed hain (declaration mandatory).</li>
                  <li>Banned carcinogenic industrial dyes (Metanil Yellow, Rhodamine B) strictly prohibited hain (Zero tolerance).</li>
                </ul>
              </div>`,
            reference: "FSSAI Manual 03 / AOAC 995.11 / ISO 21870",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <p>Acidified drink se pure wool fiber par dyes absorb karein, dilute ammonia se strip karein, aur Silica Gel G60 TLC plate par develop karein (n-Butanol : Acetic acid : Water 4:1:5). Confirmatory quantification RP-HPLC-DAD dwara certified multi-dye standards ke comparison mein karein.</p>`
          },
          {
            title: "Total Polyphenols aur Catechins ka Determination in Ready-to-Drink Tea & Coffee",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Antioxidant Bioactive Profiling:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Green Tea aur Black Tea drinks mein health claims verify karta hai (EGCG, EGC, EC catechins).</li>
                  <li>Green tea extract drinks mein minimum 100 mg/L total polyphenols hone chahiye.</li>
                </ul>
              </div>`,
            reference: "ISO 14502-1 / ISO 14502-2 / AOAC 2017.06",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Folin-Ciocalteu Method:</h4>
              <p>Sample aliquot mein 10% Folin-Ciocalteu reagent aur 7.5% Na2CO3 solution add karein. 45°C par 30 minutes incubate karein. Phosphomolybdate-phosphotungstate complex polyphenolic hydroxyl groups dwara reduce hokar deep blue color deta hai. Absorbance <strong>765 nm</strong> par measure karein aur Gallic Acid Equivalent (GAE mg/L) mein express karein.</p>`
          },
          {
            title: "Energy Drink Stimulants Assay: Taurine, Inositol & Glucuronolactone (HPLC Method)",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>FSSAI Caffeinated Beverage Statutory Ceilings:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Taurine:</strong> Maximum <strong>2000 mg/L</strong>.</li>
                  <li><strong>Inositol:</strong> Maximum <strong>100 mg/L</strong>.</li>
                  <li><strong>D-Glucuronolactone:</strong> Maximum <strong>1200 mg/L</strong>.</li>
                </ul>
              </div>`,
            reference: "FSSAI Standards for Caffeinated Beverages / AOAC 997.05",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Chromatographic Assay:</h4>
              <p>Inositol aur Glucuronolactone ko Amino/Carbohydrate column par HPLC-RID (Refractive Index Detector) se measure karein. Taurine amino sulfonic acid ko o-Phthalaldehyde (OPA) + 2-Mercaptoethanol se pre-column derivatize karke C18 column par Fluorescence Detector (Ex 340 nm, Em 450 nm) se quantify karein.</p>`
          },
          {
            title: "Pseudomonas aeruginosa ka Determination (Membrane Filtration Method in Packaged Water)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Critical Opportunistic Pathogen:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><em>Pseudomonas aeruginosa</em> hospital-acquired infections, folliculitis aur respiratory illness failata hai. Bottling plant pipelines mein ye resilient biofilm banata hai jo standard disinfection ko resist karta hai.</li>
                  <li><strong>FSSAI & BIS Mandate (IS 14543 & IS 13428):</strong> <strong>STRICTLY ABSENT in 250 mL (0 CFU / 250 mL)</strong>. Zero tolerance!</li>
                </ul>
              </div>`,
            reference: "IS 13428:2005 (Annex B) / ISO 16266 / FSSAI Manual 02",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Membrane Filtration SOP:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Laminar airflow biosafety cabinet mein sterile filtration apparatus par 0.45 µm cellulose nitrate membrane place karein.</li>
                <li>Exactly <strong>250 mL</strong> packaged drinking water sample ko vacuum dwara filter karein.</li>
                <li>Membrane ko sterile forceps se Cetrimide Agar (ya Pseudomonas Agar Base with C-N supplement) par place karein.</li>
                <li>Invert karke <strong>36°C ± 1°C par 40-48 ghante</strong> incubate karein.</li>
                <li>Plates ko Wood's UV Lamp (365 nm) ke under examine karein. Blue-green (Pyocyanin) ya yellow-green fluorescent colonies ko Oxidase Test (+ve) aur King's B medium se confirm karein. Growth = <strong>TEST FAILED</strong>.</li>
              </ol>`
          },
          {
            title: "Coliforms, E. coli aur Faecal Streptococci by Membrane Filtration (0.45 µm) in Beverages",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Fecal Contamination Indicators:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Sewage contamination aur treatment plant breakdown ka primary signal.</li>
                  <li><strong>Statutory Standard:</strong> Packaged water mein <strong>Absent in 250 mL</strong>; CSD aur juices mein <strong>Absent in 100 mL</strong>.</li>
                </ul>
              </div>`,
            reference: "IS 15185 / ISO 9308-1 / ISO 7899-2 / IS 14543",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Filtration & Incubation:</h4>
              <p>250 mL water ko 0.45 µm membrane se filter karein. Coliforms ke liye m-Endo agar par 37°C par 24h incubate karein (golden-green metallic sheen colonies). Faecal Streptococci ke liye Slanetz & Bartley agar par 37°C par 48h incubate karein (red-maroon colonies).</p>`
          },
          {
            title: "Total Viable Count (TVC / Aerobic Plate Count) at 20-22°C and 37°C in Bottled Water",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Dual Incubation Hygiene Index (IS 14543 / ISO 6222):</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>37°C for 24 hours:</strong> Human body temperature flora indicator — <strong>Max 20 CFU/mL</strong>.</li>
                  <li><strong>20-22°C for 72 hours:</strong> Psychrophilic natural water flora — <strong>Max 100 CFU/mL</strong>.</li>
                </ul>
              </div>`,
            reference: "IS 5402 / ISO 6222 / IS 14543:2016",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Pour Plate Method:</h4>
              <p>1 mL water sample ko sterile petri dish mein Yeast Extract Agar (YEA) ke sath mix karein. Ek set ko 37°C par 24h aur doosre set ko 22°C par 72h incubate karein. Colony counter par sabhi colonies count karein.</p>`
          },
          {
            title: "Thermophilic Acidophilic Bacteria (Alicyclobacillus acidoterrestris - TAB) in Fruit Juices",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Smoky / Disinfectant Off-Flavor Spoilage:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><em>Alicyclobacillus</em> endospores acidic environment (pH 2.5 - 4.5) aur commercial hot-fill pasteurization (85-95°C) ko survive kar lete hain.</li>
                  <li>Germinate hokar ye <strong>Guaiacol</strong> banate hain jo juice mein severe medicinal, chemical, disinfectant smell paida karta hai bina gas ya pack swelling ke.</li>
                </ul>
              </div>`,
            reference: "IFU Method No. 12 / AIJN Code of Practice / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Heat-Shock & BAT Agar Culture:</h4>
              <p>Juice sample ko 80°C par 10 minutes heat-shock karein taaki dormant spores activate ho jaayein aur vegetative flora kill ho. BAT (Bacillus Acidoterrestris) Agar (pH 4.0 ± 0.2) par spread plate karein aur <strong>45°C par 3-5 din</strong> incubate karein. Guaiacol formation peroxidase-guaiacol color test se confirm karein.</p>`
          },
          {
            title: "Yeast & Mold Enumeration in Acidic Fruit Juices & Carbonated Drinks",
            purpose: `<div class="bg-purple-50 border border-purple-200 p-3 rounded my-2">
                <p><strong>Fermentative Spoilage in High-Acid Drinks:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><em>Zygosaccharomyces bailii</em> preservatives (benzoate/sorbate) ko metabolize karke CO2 gas generate karta hai, jisse bottles deform ya burst ho jaati hain.</li>
                  <li><strong>FSSAI Limits:</strong> Ready-to-drink juices <strong>Max 100 CFU/mL</strong>; Carbonated soft drinks <strong>Max 2 CFU/mL</strong>.</li>
                </ul>
              </div>`,
            reference: "IS 5403 / ISO 21527-1 / FSSAI Microbiological Standards",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <p>0.1 mL sample ko DRBC (Dichloran Rose Bengal Chloramphenicol) agar ya Acidified PDA (pH 3.5) par spread karein. 25°C ± 1°C par 5 din incubate karein aur yeast/mold colonies enumerate karein.</p>`
          },
          {
            title: "Heavy Metals Contamination: Lead (Pb), Arsenic (As), Cadmium (Cd), Mercury (Hg) by ICP-MS",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Toxic Trace Metal Poisoning Limits (IS 14543 / FSSAI):</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Lead (Pb):</strong> Maximum <strong>0.01 mg/L (10 ppb)</strong>.</li>
                  <li><strong>Arsenic (As):</strong> Maximum <strong>0.01 mg/L (10 ppb)</strong>.</li>
                  <li><strong>Cadmium (Cd):</strong> Maximum <strong>0.003 mg/L (3 ppb)</strong>.</li>
                  <li><strong>Mercury (Hg):</strong> Maximum <strong>0.001 mg/L (1 ppb)</strong>.</li>
                </ul>
              </div>`,
            reference: "IS 14543:2016 / ISO 17294-2 / AOAC 2015.01 / APHA 3125B",
            procedure: `<h4 class="font-semibold mt-4 mb-2">ICP-MS Multi-Element Analysis:</h4>
              <p>Sample ko 2% ultra-pure trace metal grade HNO3 se acidify karein. Inductively Coupled Plasma Mass Spectrometer (ICP-MS) par aspirate karein. Argon plasma (6000-8000 K) elements ko ionize karta hai. Quadrupole mass filter m/z 208 (Pb), 75 (As), 111 (Cd), 202 (Hg) par collision cell (He gas) mode mein spectral polyatomic interferences ko eliminate karke ppb level par quantify karta hai.</p>`
          },
          {
            title: "Nitrate ($NO_3^-$) aur Nitrite ($NO_2^-$) Contamination in Bottled Water (Cadmium Reduction & Griess)",
            purpose: `<div class="bg-orange-50 border border-orange-200 p-3 rounded my-2">
                <p><strong>Agricultural Runoff & Blue Baby Syndrome:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Fertilizer runoff aur groundwater sewage leaching se paani mein nitrates aate hain. Infants mein ye hemoglobin se bind karke infantile methemoglobinemia cause karta hai.</li>
                  <li><strong>FSSAI & IS 14543 Statutory Ceilings:</strong> Nitrate ($NO_3^-$) <strong>Max 45 mg/L</strong>; Nitrite ($NO_2^-$) <strong>Max 0.02 mg/L</strong>.</li>
                </ul>
              </div>`,
            reference: "IS 3025 (Part 34) / APHA 4500-NO3- / IS 14543",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Cadmium Reduction & Griess Reaction:</h4>
              <p>Sample ko granulated Copper-Cadmium reduction column se pass karein jahan Nitrate quantitative Nitrite mein reduce hota hai: <code>NO3- + Cd + 2H+ ⟶ NO2- + Cd2+ + H2O</code>. Acidic medium mein Sulfanilamide ke sath diazotize karein aur NED dihydrochloride se couple karke reddish-purple azo dye banayein. Absorbance <strong>543 nm</strong> par spectrophotometer se measure karein.</p>`
          },
          {
            title: "Alcohol by Volume (ABV) aur Inadvertent Fermentation Check in Non-Alcoholic Drinks",
            purpose: `<div class="bg-cyan-50 border border-cyan-200 p-3 rounded my-2">
                <p><strong>Non-Alcoholic Regulatory Ceiling:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Soft drinks, fruit juices aur energy drinks ko legally 'Non-Alcoholic' qualify karne ke liye Alcohol (Ethanol) content <strong>Strictly < 0.5% v/v</strong> hona mandatory hai (Halal certification ke liye < 0.1%).</li>
                  <li>Spontaneous yeast fermentation se banne wala alcohol product spoilage aur legal violation signal karta hai.</li>
                </ul>
              </div>`,
            reference: "AOAC 969.12 / IS 2346 / Anton Paar Digital Densitometry",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Distillation & Digital Densitometry:</h4>
              <p>100 mL drink sample ko direct laboratory distillation unit se distill karein taaki sugars aur solids peeche reh jaayein aur alcohol evaporate hokar distillate mein condense ho jaaye. Anton Paar DMA 4500 Oscillating U-Tube Densitometer par exactly 20.00°C par specific gravity measure karein aur standard OIML / AOAC table se ABV % calculate karein.</p>`
          },
          {
            title: "Beverages Sector Complete Statutory & Quality Testing Battery Summary",
            purpose: `<div class="bg-gray-100 border border-gray-300 p-3 rounded my-2">
                <p><strong>Master Reference Matrix for Beverage QC & Regulatory Audits:</strong></p>
                <p class="text-sm text-gray-700 mt-1">Ye master matrix Packaged Drinking Water, Mineral Water, Carbonated Soft Drinks, Fruit Juices, Squashes, aur Energy Drinks ke FSSAI / BIS standards aur testing frequencies ko ek jagah summarize karta hai.</p>
              </div>`,
            reference: "FSSAI Food Safety and Standards (Food Products Standards) Regulations / IS 14543, IS 13428, IS 2346",
            procedure: `<div class="overflow-x-auto my-4">
                <table class="min-w-full text-xs border border-gray-300">
                  <thead class="bg-cyan-800 text-white font-semibold">
                    <tr>
                      <th class="border border-cyan-900 p-2 text-left">Test Parameter</th>
                      <th class="border border-cyan-900 p-2 text-left">Standard Reference</th>
                      <th class="border border-cyan-900 p-2 text-left">Packaged Water (IS 14543)</th>
                      <th class="border border-cyan-900 p-2 text-left">Carbonated Drinks (CSD)</th>
                      <th class="border border-cyan-900 p-2 text-left">100% Fruit Juice</th>
                      <th class="border border-cyan-900 p-2 text-left">Energy Drinks</th>
                      <th class="border border-cyan-900 p-2 text-left">Testing Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">TDS (Total Dissolved Solids)</td><td class="border p-2">IS 3025 (Pt 16) / APHA</td><td class="border p-2 font-bold text-cyan-700">75 - 500 mg/L</td><td class="border p-2">As formulated</td><td class="border p-2">N/A (°Brix used)</td><td class="border p-2">As declared</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch / Online</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Turbidity (NTU)</td><td class="border p-2">ISO 7027 / IS 3025</td><td class="border p-2 font-bold text-emerald-700">Max 2.0 NTU (<1.0)</td><td class="border p-2">Clear / Cloud std</td><td class="border p-2">Natural cloudiness</td><td class="border p-2">Max 2.0 NTU</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">pH Value at 25°C</td><td class="border p-2">IS 3025 (Pt 11)</td><td class="border p-2 font-bold text-blue-700">6.50 - 8.50</td><td class="border p-2 font-bold text-red-700">2.50 - 3.50</td><td class="border p-2">3.20 - 4.20</td><td class="border p-2">2.80 - 3.80</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Total Soluble Solids (°Brix)</td><td class="border p-2">IS 2860 / AOAC 932.12</td><td class="border p-2">0.00° Brix</td><td class="border p-2">8.0 - 12.0° Brix</td><td class="border p-2 font-bold text-amber-700">Min 10.0 - 13.5°</td><td class="border p-2">10.0 - 14.0° Brix</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Carbonation (CO2 Volumes)</td><td class="border p-2">IS 2346 / Zahm & Nagel</td><td class="border p-2">N/A (Still)</td><td class="border p-2 font-bold text-purple-700">3.0 - 4.0 Gas Vols</td><td class="border p-2">N/A (Sparkling 1.5-2.5)</td><td class="border p-2">2.5 - 3.5 Gas Vols</td><td class="border p-2 text-indigo-700 font-semibold">Hourly on Line</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Caffeine Content (ppm)</td><td class="border p-2">RP-HPLC at 272 nm</td><td class="border p-2">Absent</td><td class="border p-2 font-bold text-amber-700">Max 145 ppm</td><td class="border p-2">Absent</td><td class="border p-2 font-bold text-red-700">145 - 300 ppm</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Sodium Benzoate Preservative</td><td class="border p-2">RP-HPLC-UV at 228 nm</td><td class="border p-2 font-bold text-red-700">Prohibited (0 ppm)</td><td class="border p-2">Max 120 ppm</td><td class="border p-2">Max 500 ppm (Sorbate)</td><td class="border p-2">Max 150 ppm</td><td class="border p-2 text-indigo-700 font-semibold">Weekly / Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Pseudomonas aeruginosa</td><td class="border p-2">IS 13428 (Annex B)</td><td class="border p-2 font-bold text-red-700">Absent in 250 mL</td><td class="border p-2">Absent</td><td class="border p-2">Absent</td><td class="border p-2">Absent in 250 mL</td><td class="border p-2 text-indigo-700 font-semibold">Daily Membrane Test</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Coliforms & E. coli</td><td class="border p-2">IS 15185 (0.45µm)</td><td class="border p-2 font-bold text-red-700">Absent in 250 mL</td><td class="border p-2">Absent in 100 mL</td><td class="border p-2">Absent in 100 mL</td><td class="border p-2">Absent in 250 mL</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Aerobic Plate Count (TVC)</td><td class="border p-2">IS 5402 / ISO 6222</td><td class="border p-2">22°C ≤100, 37°C ≤20</td><td class="border p-2">Max 50 CFU/mL</td><td class="border p-2">Max 100 CFU/mL</td><td class="border p-2">Max 20 CFU/mL</td><td class="border p-2 text-indigo-700 font-semibold">Daily</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Yeast & Mold Enumeration</td><td class="border p-2">IS 5403 / ISO 21527</td><td class="border p-2">Absent in 250 mL</td><td class="border p-2">Max 2 CFU/mL</td><td class="border p-2 font-bold text-amber-700">Max 100 CFU/mL</td><td class="border p-2">Max 5 CFU/mL</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Alicyclobacillus (TAB)</td><td class="border p-2">IFU Method No. 12</td><td class="border p-2">N/A</td><td class="border p-2">Absent</td><td class="border p-2 font-bold text-red-700">Absent in 10 mL</td><td class="border p-2">Absent</td><td class="border p-2">Weekly</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Lead (Pb) Heavy Metal</td><td class="border p-2">ICP-MS at m/z 208</td><td class="border p-2 font-bold text-red-700">Max 0.01 mg/L (10 ppb)</td><td class="border p-2">Max 0.01 mg/L</td><td class="border p-2">Max 0.05 mg/kg</td><td class="border p-2">Max 0.01 mg/L</td><td class="border p-2">Monthly / Quarterly</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Arsenic (As) Heavy Metal</td><td class="border p-2">ICP-MS at m/z 75</td><td class="border p-2 font-bold text-red-700">Max 0.01 mg/L (10 ppb)</td><td class="border p-2">Max 0.01 mg/L</td><td class="border p-2">Max 0.05 mg/kg</td><td class="border p-2">Max 0.01 mg/L</td><td class="border p-2">Monthly / Quarterly</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Nitrate (NO3-) Content</td><td class="border p-2">IS 3025 (Pt 34)</td><td class="border p-2 font-bold text-blue-700">Max 45.0 mg/L</td><td class="border p-2">As source water</td><td class="border p-2">Natural trace</td><td class="border p-2">Max 45.0 mg/L</td><td class="border p-2 text-indigo-700 font-semibold">Weekly</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Alcohol by Volume (ABV)</td><td class="border p-2">AOAC 969.12 / Densitometry</td><td class="border p-2">0.00%</td><td class="border p-2 font-bold text-red-700">Max 0.5% v/v</td><td class="border p-2 font-bold text-red-700">Max 0.5% v/v</td><td class="border p-2 font-bold text-red-700">Max 0.5% v/v</td><td class="border p-2">Every Batch</td></tr>
                  </tbody>
                </table>
              </div>`
          }
        ]
      };

export const beveragesEn = {
        title: "Beverages (Packaged Drinking Water, Mineral Water, Carbonated Drinks, Fruit Juices, Squashes, Tea, Coffee, Energy Drinks)",
        tests: [
          {
            title: "Determination of Total Dissolved Solids (TDS), Electrical Conductivity & pH in Packaged Water",
            purpose: `<div class="bg-cyan-50 border border-cyan-200 p-3 rounded my-2">
                <p><strong>Why is this test performed?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Mineral Balance & Palatability:</strong> In Packaged Drinking Water and Natural Mineral Water, Total Dissolved Solids (TDS) quantifies the concentration of dissolved inorganic mineral salts (Calcium, Magnesium, Sodium, Potassium, Chlorides, Sulfates, Bicarbonates).</li>
                  <li><strong>FSSAI & BIS Statutory Specifications:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Packaged Drinking Water (IS 14543):</strong> TDS <strong>75 to 500 mg/L</strong>; pH <strong>6.50 to 8.50</strong>.</li>
                      <li><strong>Natural Mineral Water (IS 13428):</strong> TDS <strong>150 to 700 mg/L</strong>; pH <strong>6.50 to 8.50</strong>.</li>
                      <li><strong>Carbonated Soft Drinks (CSD):</strong> pH <strong>2.50 to 3.50</strong> (acidic microbial hurdle and pungent sharpness).</li>
                    </ul>
                  </li>
                  <li><strong>Physiological Impact:</strong> Water with TDS < 75 mg/L tastes flat, aggressively leaches electrolytes from body tissues, and corrodes pipes; water with TDS > 500 mg/L tastes brackish, increases renal osmolar load, and causes gastrointestinal irritation.</li>
                </ul>
              </div>
              <div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Deep Science & Operational Principles:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>180°C Gravimetric Oven Drying:</strong> In standard referee gravimetric testing, the filtered water residue is heated to <strong>180°C ± 2°C</strong> (APHA 2540C). At 100°C, mechanically occluded water trapped in interstitial salt lattices does not evaporate. At 180°C, all bound moisture is removed, while staying below 200°C to prevent thermal decomposition of mineral bicarbonates into volatile CO2.</li>
                  <li><strong>EC-TDS Empirical Coefficient 0.65:</strong> Dissolved mineral ions conduct electricity. In natural potable water, the average ratio of TDS to Electrical Conductivity (EC) at 25.0°C is <strong>0.65</strong>: <code>TDS (mg/L) ≈ EC (µS/cm) × 0.65</code>. Pure NaCl solutions exhibit 0.50, whereas high-sulfate waters exhibit 0.75.</li>
                  <li><strong>Electrode Nernstian Response:</strong> A combination glass electrode generates an electromotive force of 59.16 mV per pH unit at 25°C. Meter slope calibration with pH 4.01, 7.00, and 9.18 buffers must verify 95% to 102% efficiency.</li>
                </ul>
              </div>`,
            reference: "IS 14543:2016 / IS 13428:2005 / IS 3025 (Part 16 & 11) / APHA 2540C / FSSAI Manual 02",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Filtered water is evaporated in a tared platinum/porcelain dish and dried to constant weight at 180°C ± 2°C (Gravimetric Method). Alternatively, specific electrical conductance of dissolved ions is measured at 25.0°C using a calibrated platinum conductivity cell and converted to TDS using empirical mobility factors.</p>

              <h4 class="font-semibold mt-4 mb-2">Apparatus & Reagents:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Digital Benchtop Conductivity / TDS Meter with ATC at 25.0°C ± 0.1°C</li>
                <li>Conductivity Standard: 0.01 M KCl Solution (1413 µS/cm at 25°C)</li>
                <li>Platinum or High-Silica Porcelain Evaporating Dishes (100 mL capacity)</li>
                <li>Drying Oven calibrated at 180°C ± 2°C and Desiccator with active blue silica gel</li>
                <li>Analytical Balance (±0.0001 g) and Whatman 0.45 µm Membrane Filters</li>
              </ul>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li><strong>Electrometric Calibration:</strong> Rinse conductivity cell with deionized water. Calibrate with 1413 µS/cm KCl standard at 25.0°C.</li>
                <li><strong>Electrometric Measurement:</strong> Dip probe into 100 mL water sample, swirl to remove bubbles, and record stabilized EC (µS/cm) and TDS (mg/L).</li>
                <li><strong>Gravimetric Referee Method:</strong> Filter 100 mL sample through 0.45 µm membrane filter. Transfer to pre-weighed tared dish (W_dish).</li>
                <li>Evaporate to dryness on a boiling water bath. Transfer to hot air oven at 180°C ± 2°C for exactly 1 hour.</li>
                <li>Cool in desiccator for 30 minutes and weigh dry residue (W_final).</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Calculations & Formula:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Gravimetric TDS (mg/L) = [ (W_final - W_dish) × 1,000,000 ] / Sample Volume V (mL)<br><br>
                Electrometric TDS (mg/L) = EC at 25°C (µS/cm) × 0.65
              </div>

              <h4 class="font-semibold mt-4 mb-2">Worked Practical Example:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Dish tare mass (W_dish) = 45.1200 g</li>
                <li>Dish + residue (W_final) after 180°C = 45.1485 g</li>
                <li>Sample volume evaporated = 100 mL</li>
                <li>TDS = [ (45.1485 - 45.1200) × 1,000,000 ] / 100 = [ 0.0285 × 10,000 ] = <strong>285.0 mg/L</strong></li>
                <li><em>Verdict:</em> Fully compliant with IS 14543 standard range of 75 - 500 mg/L.</li>
              </ul>`
          },
          {
            title: "Nephelometric Turbidity Determination (< 2.0 NTU) in Potable Water & Drinks",
            purpose: `<div class="bg-blue-50 border border-blue-200 p-3 rounded my-2">
                <p><strong>Why is Turbidity critical?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Pathogen Shielding Risk:</strong> Colloidal clay, silt, silica, and organic particles scatter light and shelter pathogenic bacteria, viruses, and cryptosporidium cysts from ultraviolet disinfection, ozonation, and chlorine action.</li>
                  <li><strong>Statutory Limits:</strong> IS 14543 & IS 13428 mandate Turbidity <strong>Maximum 2.0 NTU</strong> (Desirable limit <strong>< 1.0 NTU</strong>).</li>
                </ul>
              </div>
              <div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Deep Science: 90° Light Scattering & Formazin Polymer:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>90° Scattering vs Direct Transmittance:</strong> In clear water (< 2 NTU), light attenuation is too minute (< 0.01%) for direct spectrophotometric absorption. By measuring 90° scattered light against a pitch-black baseline, photodiode detectors achieve parts-per-billion sensitivity (ISO 7027).</li>
                  <li><strong>Formazin Primary Standard:</strong> Polymeric condensation of hexamethylenetetramine and hydrazine sulfate generates perfectly uniform, stable spherical particles defining 400 NTU.</li>
                </ul>
              </div>`,
            reference: "ISO 7027-1 / IS 3025 (Part 10) / APHA 2130B / IS 14543",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Sample particles scatter incident 860 nm infrared light at 90°. Photodetectors measure scattered light intensity relative to calibrated Formazin standards in Nephelometric Turbidity Units (NTU).</p>

              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Calibrate Nephelometer with 0.02 NTU (distilled water blank) and 10.0 NTU Formazin standard.</li>
                <li>Apply silicone oil to clean cuvette exterior and wipe with lint-free optical lens tissue to prevent scratch scattering.</li>
                <li>Gently invert water sample bottle to avoid generating micro air bubbles. Fill cuvette to graduation line.</li>
                <li>Insert cuvette into optical chamber, align orientation index mark, and record stabilized NTU reading.</li>
              </ol>`
          },
          {
            title: "Determination of Total Soluble Solids (°Brix) by Digital Refractometer",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Statutory Fruit Solids & Sugar Ceilings:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>100% Pure Fruit Juices:</strong> Minimum <strong>10.0° to 13.5° Brix</strong> (Apple ≥ 11.5°, Orange ≥ 10.0°, Mango ≥ 12.0°).</li>
                  <li><strong>Fruit Nectars:</strong> Minimum <strong>15.0° Brix</strong>.</li>
                  <li><strong>Fruit Squashes & Crushes:</strong> Minimum <strong>40.0° Brix</strong> and <strong>55.0° Brix</strong>.</li>
                  <li><strong>Carbonated Soft Drinks:</strong> <strong>8.0° to 12.0° Brix</strong>.</li>
                </ul>
              </div>`,
            reference: "IS 2860 / AOAC 932.12 / IFU Method No. 8 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure & Acid Correction:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Calibrate digital refractometer zero with double-distilled deionized water at 20.0°C (0.00° Brix).</li>
                <li>Centrifuge cloudy fruit juices at 3000 rpm for 5 minutes to separate pulp fibers from clear serum.</li>
                <li>Apply 2-3 drops of clear serum to prism; record reading at 20.0°C.</li>
                <li><strong>Acid Correction (IS 2860):</strong> Corrected °Brix = Uncorrected °Brix + (0.18 × Titratable Acidity % as Citric Acid).</li>
              </ol>`
          },
          {
            title: "Determination of Titratable Acidity & pH Balance (as Citric / Phosphoric Acid)",
            purpose: `<div class="bg-purple-50 border border-purple-200 p-3 rounded my-2">
                <p><strong>Beverage Acidity Architecture:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Colas:</strong> Use <strong>Orthophosphoric Acid (H3PO4)</strong> for sharp bite (FSSAI statutory ceiling: <strong>Max 700 ppm</strong>).</li>
                  <li><strong>Fruit Drinks & Squashes:</strong> Formulated with <strong>Citric Acid</strong> or <strong>Malic Acid</strong> (0.3% - 1.5% as citric acid).</li>
                </ul>
              </div>`,
            reference: "IS 2860 / IS 2346 / AOAC 942.15 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Titrimetric Procedure:</h4>
              <p>Degas carbonated drinks in an ultrasonic water bath for 15 minutes. Pipette 25 mL aliquot, dilute with 50 mL CO2-free distilled water, and titrate against standardized 0.1 N NaOH to phenolphthalein endpoint (pH 8.1 - 8.3) or potentiometrically.</p>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Acidity % as Citric Acid = [ V_NaOH × N_NaOH × 0.064 × 100 ] / Sample Volume (mL)<br><br>
                Phosphoric Acid (mg/L or ppm) = [ V_NaOH × N_NaOH × 49.0 × 1000 ] / Sample Volume (mL)
              </div>`
          },
          {
            title: "Determination of Carbonation Volume & Gas Pressure ($CO_2$ Gas Volumes) in CSD",
            purpose: `<div class="bg-indigo-50 border border-indigo-200 p-3 rounded my-2">
                <p><strong>Why is Carbonation tested?</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Fizz, Tingling Mouthfeel & Preservation:</strong> Dissolved $CO_2$ hydrates to carbonic acid ($H_2CO_3$), providing mouthfeel sharpness and establishing an anaerobic, antimicrobial environment.</li>
                  <li><strong>Industry Carbonation Benchmarks:</strong>
                    <ul class="list-disc pl-5 mt-1">
                      <li><strong>Colas:</strong> <strong>3.5 to 4.0 Gas Volumes</strong>.</li>
                      <li><strong>Lemon-Lime Drinks:</strong> <strong>3.0 to 3.5 Gas Volumes</strong>.</li>
                      <li><strong>Carbonated Fruit Juices:</strong> <strong>1.5 to 2.5 Gas Volumes</strong>.</li>
                      <li><strong>Soda Water / Club Soda:</strong> <strong>3.8 to 4.5 Gas Volumes</strong>.</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Deep Science: Zahm & Nagel Snifting & Henry's Law Equilibrium:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Headspace Air Snifting:</strong> Air ($N_2 + O_2$) trapped in the container headspace creates false partial pressure, skewing the gauge upward. Puncturing is followed by a 1-second snift valve opening to vent non-condensable air.</li>
                  <li><strong>Henry's Law Vapor-Liquid Equilibrium:</strong> Shaking achieves thermodynamic equilibrium between dissolved liquid $CO_2$ and gaseous headspace $CO_2$. Gauge pressure (psi) and liquid temperature (°F) are recorded and converted using Henry's solubility formula.</li>
                </ul>
              </div>`,
            reference: "IS 2346:1992 / FSSAI Carbonated Beverages Standard / Zahm & Nagel Manual",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Mount sealed bottle/can on Zahm & Nagel piercing device clamping platform.</li>
                <li>Drive piercing needle through center of cap/end without disturbing container.</li>
                <li>Crack snift valve for 1-2 seconds to vent headspace air; close valve.</li>
                <li>Shake apparatus vigorously for 60 seconds until pressure gauge reaches constant plateau. Record pressure $P$ (psi).</li>
                <li>Insert dial thermometer probe directly into liquid beverage; record temperature $T$ (°F).</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Formula:</h4>
              <div class="bg-gray-50 border p-3 rounded font-mono text-sm my-2">
                Gas Volumes of CO2 = (P + 14.696) × [ 0.01976 - (0.0001078 × T) ]<br><br>
                Where P = Gauge Pressure (psi) and T = Temperature (°F)
              </div>
              <p class="mt-2">Example: 40.0°F at 38.0 psi yields <strong>3.82 Gas Volumes</strong> (Grade A Cola specification).</p>`
          },
          {
            title: "Caffeine Content Determination (RP-HPLC-UV Method) in CSD, Energy Drinks & Tea",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>Statutory Ceilings (FSSAI Regulations):</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Carbonated Soft Drinks (Colas):</strong> Maximum <strong>145 ppm (mg/L)</strong>.</li>
                  <li><strong>Caffeinated Beverages / Energy Drinks:</strong> Minimum <strong>145 ppm</strong> and Maximum <strong>300 ppm</strong> (Mandatory advisory label: "Contains caffeine, not recommended for children, pregnant women").</li>
                  <li><strong>Decaffeinated Tea / Coffee:</strong> Maximum <strong>0.1%</strong> dry basis.</li>
                </ul>
              </div>`,
            reference: "IS 13428 / AOAC 979.11 / ISO 20481 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Chromatographic Conditions:</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Column: Reverse Phase C18 (250 mm × 4.6 mm, 5 µm)</li>
                <li>Mobile Phase: Methanol : Water (30:70 v/v), Flow rate 1.0 mL/min</li>
                <li>Detection: UV absorbance at <strong>272 nm</strong> (purine chromophore absorption peak)</li>
                <li>Sample Prep: Degas sample in sonicator for 15 min; filter through 0.45 µm nylon filter into HPLC vial.</li>
              </ul>`
          },
          {
            title: "Simultaneous Determination of Non-Nutritive Artificial Sweeteners (Aspartame, Ace-K, Sucralose)",
            purpose: `<div class="bg-green-50 border border-green-200 p-3 rounded my-2">
                <p><strong>FSSAI Maximum Residual Limits:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Aspartame:</strong> Max <strong>700 ppm</strong> (Phenylketonurics warning mandatory).</li>
                  <li><strong>Acesulfame Potassium (Ace-K):</strong> Max <strong>300 ppm</strong>.</li>
                  <li><strong>Sucralose:</strong> Max <strong>300 ppm</strong>.</li>
                  <li><strong>Sodium Saccharin:</strong> Max <strong>100 ppm</strong>.</li>
                </ul>
              </div>`,
            reference: "AOAC 996.11 / ISO 22855 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Principle:</h4>
              <p>Degassed drink is clarified with Carrez reagents and separated on a C18 column using Acetonitrile : 0.02 M KH2PO4 buffer pH 4.0. Photodiode array monitors Ace-K at 227 nm, Aspartame at 210 nm, and Saccharin at 220 nm.</p>`
          },
          {
            title: "Preservative Assay: Sodium Benzoate & Potassium Sorbate by RP-HPLC-UV",
            purpose: `<div class="bg-yellow-50 border border-yellow-200 p-3 rounded my-2">
                <p><strong>FSSAI Preservative Limits:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>Carbonated Soft Drinks:</strong> Benzoate <strong>Max 120 ppm</strong>.</li>
                  <li><strong>Fruit Squashes & Crushes:</strong> Benzoate <strong>Max 600 ppm</strong>.</li>
                  <li><strong>Ready-to-Drink Fruit Juices:</strong> Sorbate <strong>Max 500 ppm</strong>.</li>
                </ul>
              </div>`,
            reference: "ISO 22855 / AOAC 994.11 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">HPLC Parameters:</h4>
              <p>C18 column (250 × 4.6 mm, 5 µm) with Methanol : 0.02 M Ammonium Acetate buffer pH 4.5 (30:70 v/v). UV detection at 228 nm (benzoate) and 254 nm (sorbate). Run time < 8 minutes.</p>`
          },
          {
            title: "Free & Total Sulphur Dioxide ($SO_2$) Residue in Squashes & Cordials (Ripper & Monier-Williams)",
            purpose: `<div class="bg-gray-100 border border-gray-300 p-3 rounded my-2">
                <p><strong>Antioxidant & Allergen Verification:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><strong>FSSAI Limit:</strong> Fruit Squashes, Crushes, and Cordials: <strong>Max 350 ppm</strong> $SO_2$. Mandatory label warning if > 10 ppm.</li>
                </ul>
              </div>`,
            reference: "IS 2860 / AOAC 990.28 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Ripper Iodometric Titration:</h4>
              <p>Acidify sample with dilute H2SO4; titrate free $SO_2$ with 0.02 N Iodine solution using starch indicator to blue endpoint. For total $SO_2$, hydrolyze bound aldehyde adducts with 1.0 N KOH before acidification.<br>
              <code>SO2 + I2 + 2 H2O ⟶ H2SO4 + 2 HI</code> (1 mL 0.02 N I2 = 0.64 mg SO2).</p>`
          },
          {
            title: "Vitamin C (L-Ascorbic Acid) Assay by DCPIP Titration in Fortified Juices",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Nutritional Claim & Freshness Index:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Verifies label declaration in fortified juices and energy waters. Quantifies oxidative degradation during storage.</li>
                </ul>
              </div>`,
            reference: "AOAC 967.21 / IS 2860 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">DCPIP Titration:</h4>
              <p>Stabilize sample in 3% Metaphosphoric acid (HPO3) to precipitate proteins and inhibit copper-catalyzed oxidation. Titrate with 2,6-Dichlorophenolindophenol dye until a persistent faint rose-pink color persists for 15 seconds.</p>`
          },
          {
            title: "Formol Number & Amino Acid Index for Fruit Juice Authenticity (IFU Method No. 29)",
            purpose: `<div class="bg-purple-50 border border-purple-200 p-3 rounded my-2">
                <p><strong>Detection of Synthetic & Diluted Juices:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li>Authentic fruit juice contains natural amino acids. Dilution with water and sugar-acid syrups causes Formol Number to plummet.</li>
                  <li><strong>AIJN Reference Standards:</strong> Pure Orange Juice Formol No. = <strong>18 to 26</strong>; Pure Apple Juice = <strong>3 to 8</strong>.</li>
                </ul>
              </div>`,
            reference: "IFU Method No. 29 / ISO 5518 / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Sorenson's Formol Titration:</h4>
              <p>Neutralize 25 mL juice to pH 8.10 with 0.1 N NaOH. Add 10 mL neutralized 37% Formaldehyde. Formaldehyde converts amino groups to neutral dimethylol adducts, releasing free H+ ions. Titrate released protons back to pH 8.10 with 0.1 N NaOH.<br>
              <code>Formol Number = mL 0.1 N NaOH consumed per 100 mL juice</code>.</p>`
          },
          {
            title: "Determination of Patulin Mycotoxin in Apple Juice & Nectars (RP-HPLC-UV)",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Rotten Apple Fungus Toxin:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><em>Penicillium expansum</em> produces patulin in damaged apples. FSSAI & Codex limit: <strong>Max 50 µg/kg (50 ppb)</strong>.</li>
                </ul>
              </div>`,
            reference: "AOAC 995.10 / ISO 8128 / FSSAI Contaminants Regulations",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Extraction & HPLC:</h4>
              <p>Extract sample with ethyl acetate, wash with 1.5% Na2CO3, dry over Na2SO4, and clean up on SPE column. Analyze on C18 column with Acetonitrile : Water (10:90) at <strong>276 nm</strong> (LOD < 5 ppb).</p>`
          },
          {
            title: "Screening of Synthetic Food Colors and Prohibited Dyes (Tartrazine, Sunset Yellow, Sudan)",
            purpose: `<div class="bg-rose-50 border border-rose-200 p-3 rounded my-2">
                <p><strong>Dye Safety:</strong> Permitted colors max 100 ppm; industrial azo dyes (Metanil Yellow, Rhodamine B) strictly banned (Zero tolerance).</p>
              </div>`,
            reference: "FSSAI Manual 03 / AOAC 995.11 / ISO 21870",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <p>Absorb dyes on defatted wool fiber in acidic solution, strip with dilute ammonia, and separate on Silica Gel G60 TLC plate (n-Butanol : Acetic acid : Water 4:1:5). Confirm by RP-HPLC-DAD.</p>`
          },
          {
            title: "Determination of Total Polyphenols & Catechins in Ready-to-Drink Tea & Coffee",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Bioactive Catechins:</strong> Verifies antioxidant health claims (EGCG) in green and black tea RTD beverages (Min 100 mg/L total polyphenols).</p>
              </div>`,
            reference: "ISO 14502-1 / ISO 14502-2 / AOAC 2017.06",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Folin-Ciocalteu Method:</h4>
              <p>React sample aliquot with 10% Folin-Ciocalteu reagent and 7.5% Na2CO3. Incubate at 45°C for 30 minutes. Measure absorbance at <strong>765 nm</strong> against gallic acid standard calibration curve (expressed as mg GAE/L).</p>`
          },
          {
            title: "Energy Drink Stimulants Assay: Taurine, Inositol & Glucuronolactone by HPLC",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>FSSAI Limits for Caffeinated Drinks:</strong> Taurine max 2000 mg/L; Inositol max 100 mg/L; D-Glucuronolactone max 1200 mg/L.</p>
              </div>`,
            reference: "FSSAI Standards for Caffeinated Beverages / AOAC 997.05",
            procedure: `<h4 class="font-semibold mt-4 mb-2">HPLC Analysis:</h4>
              <p>Analyze Inositol and Glucuronolactone on Amino column with HPLC-RID. Quantify Taurine via OPA pre-column derivatization on C18 column with Fluorescence detection (Ex 340 nm, Em 450 nm).</p>`
          },
          {
            title: "Enumeration of Pseudomonas aeruginosa by 0.45 µm Membrane Filtration in Bottled Water",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Opportunistic Pathogen Zero-Tolerance:</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-1">
                  <li><em>Pseudomonas aeruginosa</em> forms resilient biofilms in processing pipelines.</li>
                  <li><strong>FSSAI & BIS Standard (IS 14543 & IS 13428):</strong> <strong>STRICTLY ABSENT in 250 mL (0 CFU / 250 mL)</strong>.</li>
                </ul>
              </div>`,
            reference: "IS 13428:2005 (Annex B) / ISO 16266 / FSSAI Manual 02",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Filter 250 mL packaged water through sterile 0.45 µm cellulose nitrate membrane.</li>
                <li>Place membrane on Cetrimide Agar (or Pseudomonas Agar Base with C-N supplement).</li>
                <li>Incubate at 36°C ± 1°C for 40-48 hours.</li>
                <li>Examine under 365 nm Wood's UV lamp for pyocyanin blue-green pigment and fluorescence. Confirm with Oxidase test (+ve). Growth = <strong>FAILURE</strong>.</li>
              </ol>`
          },
          {
            title: "Coliforms, E. coli & Faecal Streptococci by Membrane Filtration (0.45 µm) in Beverages",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>Fecal Hygiene Indicator:</strong> Mandatory limit: <strong>Absent in 250 mL</strong> in water; Absent in 100 mL in CSD and juices.</p>
              </div>`,
            reference: "IS 15185 / ISO 9308-1 / ISO 7899-2 / IS 14543",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <p>Filter 250 mL sample through 0.45 µm membrane. Incubate on m-Endo agar at 37°C for 24 hours (golden-green metallic sheen coliform colonies). Incubate on Slanetz & Bartley agar at 37°C for 48 hours for Faecal Streptococci (maroon colonies).</p>`
          },
          {
            title: "Total Viable Count (TVC / Aerobic Plate Count) at 20-22°C and 37°C in Bottled Water",
            purpose: `<div class="bg-emerald-50 border border-emerald-200 p-3 rounded my-2">
                <p><strong>Dual Incubation Hygiene Index (IS 14543 / ISO 6222):</strong> 37°C for 24h: Max 20 CFU/mL; 20-22°C for 72h: Max 100 CFU/mL.</p>
              </div>`,
            reference: "IS 5402 / ISO 6222 / IS 14543:2016",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <p>Inoculate 1 mL water into sterile plates with Yeast Extract Agar (YEA). Incubate Set 1 at 37°C for 24 hours and Set 2 at 22°C for 72 hours. Enumerate colonies.</p>`
          },
          {
            title: "Thermophilic Acidophilic Bacteria (Alicyclobacillus acidoterrestris - TAB) in Fruit Juices",
            purpose: `<div class="bg-amber-50 border border-amber-200 p-3 rounded my-2">
                <p><strong>Smoky Guaiacol Spoilage:</strong> Spores survive 95°C pasteurization in acidic juice (pH 2.5-4.5) and produce medicinal guaiacol taint without swelling.</p>
              </div>`,
            reference: "IFU Method No. 12 / AIJN Code of Practice / FSSAI Manual 03",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Heat-Shock & BAT Agar:</h4>
              <p>Heat-shock juice at 80°C for 10 min. Spread onto BAT Agar (pH 4.0 ± 0.2). Incubate at <strong>45°C for 3-5 days</strong>. Confirm guaiacol taint with vanillin-peroxidase test.</p>`
          },
          {
            title: "Yeast & Mold Enumeration in Acidic Juices & Carbonated Soft Drinks",
            purpose: `<div class="bg-purple-50 border border-purple-200 p-3 rounded my-2">
                <p><strong>Fermentation Spoilage:</strong> FSSAI limits: Juices max 100 CFU/mL; Carbonated soft drinks max 2 CFU/mL.</p>
              </div>`,
            reference: "IS 5403 / ISO 21527-1 / FSSAI Microbiological Standards",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <p>Spread 0.1 mL onto DRBC agar or Acidified PDA (pH 3.5). Incubate at 25°C ± 1°C for 5 days. Enumerate yeast and mold colonies.</p>`
          },
          {
            title: "Heavy Metals Contamination: Lead (Pb), Arsenic (As), Cadmium (Cd), Mercury (Hg) by ICP-MS",
            purpose: `<div class="bg-red-50 border border-red-200 p-3 rounded my-2">
                <p><strong>FSSAI & IS 14543 Statutory Limits:</strong> Lead max 0.01 mg/L (10 ppb); Arsenic max 0.01 mg/L (10 ppb); Cadmium max 0.003 mg/L (3 ppb); Mercury max 0.001 mg/L (1 ppb).</p>
              </div>`,
            reference: "IS 14543:2016 / ISO 17294-2 / AOAC 2015.01 / APHA 3125B",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <p>Acidify sample with 2% ultra-pure HNO3. Aspirate into ICP-MS. Measure m/z 208 (Pb), 75 (As), 111 (Cd), 202 (Hg) using helium collision cell mode to eliminate polyatomic interferences.</p>`
          },
          {
            title: "Nitrate ($NO_3^-$) & Nitrite ($NO_2^-$) Contamination in Bottled Water (Cadmium Reduction & Griess)",
            purpose: `<div class="bg-orange-50 border border-orange-200 p-3 rounded my-2">
                <p><strong>Agricultural Leaching & Methemoglobinemia:</strong> FSSAI & IS 14543 limits: Nitrate ($NO_3^-$) max 45 mg/L; Nitrite ($NO_2^-$) max 0.02 mg/L.</p>
              </div>`,
            reference: "IS 3025 (Part 34) / APHA 4500-NO3- / IS 14543",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <p>Pass water through Copper-Cadmium reduction column (NO3- reduced to NO2-). React with Sulfanilamide and NED dihydrochloride forming pink azo dye. Measure absorbance at <strong>543 nm</strong>.</p>`
          },
          {
            title: "Alcohol by Volume (ABV) & Inadvertent Fermentation Check in Non-Alcoholic Drinks",
            purpose: `<div class="bg-cyan-50 border border-cyan-200 p-3 rounded my-2">
                <p><strong>Non-Alcoholic Regulatory Threshold:</strong> Soft drinks, juices, and energy drinks must contain <strong>Strictly < 0.5% v/v</strong> ethanol (or < 0.1% for halal certification).</p>
              </div>`,
            reference: "AOAC 969.12 / IS 2346 / Anton Paar Digital Densitometry",
            procedure: `<h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <p>Distill 100 mL beverage in laboratory distillation unit. Measure specific gravity of distillate on Anton Paar DMA 4500 Oscillating U-Tube Densitometer at 20.00°C; calculate ABV %.</p>`
          },
          {
            title: "Beverages Sector Complete Statutory & Quality Testing Battery Summary",
            purpose: `<div class="bg-gray-100 border border-gray-300 p-3 rounded my-2">
                <p><strong>Master Reference Matrix for Beverage QC & Regulatory Audits:</strong></p>
                <p class="text-sm text-gray-700 mt-1">This master reference matrix provides statutory limits, FSSAI / BIS references, and testing frequencies for key beverage categories.</p>
              </div>`,
            reference: "FSSAI Food Safety and Standards (Food Products Standards) Regulations / IS 14543, IS 13428, IS 2346",
            procedure: `<div class="overflow-x-auto my-4">
                <table class="min-w-full text-xs border border-gray-300">
                  <thead class="bg-cyan-800 text-white font-semibold">
                    <tr>
                      <th class="border border-cyan-900 p-2 text-left">Test Parameter</th>
                      <th class="border border-cyan-900 p-2 text-left">Standard Reference</th>
                      <th class="border border-cyan-900 p-2 text-left">Packaged Water (IS 14543)</th>
                      <th class="border border-cyan-900 p-2 text-left">Carbonated Drinks (CSD)</th>
                      <th class="border border-cyan-900 p-2 text-left">100% Fruit Juice</th>
                      <th class="border border-cyan-900 p-2 text-left">Energy Drinks</th>
                      <th class="border border-cyan-900 p-2 text-left">Testing Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">TDS (Total Dissolved Solids)</td><td class="border p-2">IS 3025 (Pt 16) / APHA</td><td class="border p-2 font-bold text-cyan-700">75 - 500 mg/L</td><td class="border p-2">As formulated</td><td class="border p-2">N/A (°Brix used)</td><td class="border p-2">As declared</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch / Online</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Turbidity (NTU)</td><td class="border p-2">ISO 7027 / IS 3025</td><td class="border p-2 font-bold text-emerald-700">Max 2.0 NTU (<1.0)</td><td class="border p-2">Clear / Cloud std</td><td class="border p-2">Natural cloudiness</td><td class="border p-2">Max 2.0 NTU</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">pH Value at 25°C</td><td class="border p-2">IS 3025 (Pt 11)</td><td class="border p-2 font-bold text-blue-700">6.50 - 8.50</td><td class="border p-2 font-bold text-red-700">2.50 - 3.50</td><td class="border p-2">3.20 - 4.20</td><td class="border p-2">2.80 - 3.80</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Total Soluble Solids (°Brix)</td><td class="border p-2">IS 2860 / AOAC 932.12</td><td class="border p-2">0.00° Brix</td><td class="border p-2">8.0 - 12.0° Brix</td><td class="border p-2 font-bold text-amber-700">Min 10.0 - 13.5°</td><td class="border p-2">10.0 - 14.0° Brix</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Carbonation (CO2 Volumes)</td><td class="border p-2">IS 2346 / Zahm & Nagel</td><td class="border p-2">N/A (Still)</td><td class="border p-2 font-bold text-purple-700">3.0 - 4.0 Gas Vols</td><td class="border p-2">N/A (Sparkling 1.5-2.5)</td><td class="border p-2">2.5 - 3.5 Gas Vols</td><td class="border p-2 text-indigo-700 font-semibold">Hourly on Line</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Caffeine Content (ppm)</td><td class="border p-2">RP-HPLC at 272 nm</td><td class="border p-2">Absent</td><td class="border p-2 font-bold text-amber-700">Max 145 ppm</td><td class="border p-2">Absent</td><td class="border p-2 font-bold text-red-700">145 - 300 ppm</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Sodium Benzoate Preservative</td><td class="border p-2">RP-HPLC-UV at 228 nm</td><td class="border p-2 font-bold text-red-700">Prohibited (0 ppm)</td><td class="border p-2">Max 120 ppm</td><td class="border p-2">Max 500 ppm (Sorbate)</td><td class="border p-2">Max 150 ppm</td><td class="border p-2 text-indigo-700 font-semibold">Weekly / Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Pseudomonas aeruginosa</td><td class="border p-2">IS 13428 (Annex B)</td><td class="border p-2 font-bold text-red-700">Absent in 250 mL</td><td class="border p-2">Absent</td><td class="border p-2">Absent</td><td class="border p-2">Absent in 250 mL</td><td class="border p-2 text-indigo-700 font-semibold">Daily Membrane Test</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Coliforms & E. coli</td><td class="border p-2">IS 15185 (0.45µm)</td><td class="border p-2 font-bold text-red-700">Absent in 250 mL</td><td class="border p-2">Absent in 100 mL</td><td class="border p-2">Absent in 100 mL</td><td class="border p-2">Absent in 250 mL</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Aerobic Plate Count (TVC)</td><td class="border p-2">IS 5402 / ISO 6222</td><td class="border p-2">22°C ≤100, 37°C ≤20</td><td class="border p-2">Max 50 CFU/mL</td><td class="border p-2">Max 100 CFU/mL</td><td class="border p-2">Max 20 CFU/mL</td><td class="border p-2 text-indigo-700 font-semibold">Daily</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Yeast & Mold Enumeration</td><td class="border p-2">IS 5403 / ISO 21527</td><td class="border p-2">Absent in 250 mL</td><td class="border p-2">Max 2 CFU/mL</td><td class="border p-2 font-bold text-amber-700">Max 100 CFU/mL</td><td class="border p-2">Max 5 CFU/mL</td><td class="border p-2 text-indigo-700 font-semibold">Every Batch</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Alicyclobacillus (TAB)</td><td class="border p-2">IFU Method No. 12</td><td class="border p-2">N/A</td><td class="border p-2">Absent</td><td class="border p-2 font-bold text-red-700">Absent in 10 mL</td><td class="border p-2">Absent</td><td class="border p-2">Weekly</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Lead (Pb) Heavy Metal</td><td class="border p-2">ICP-MS at m/z 208</td><td class="border p-2 font-bold text-red-700">Max 0.01 mg/L (10 ppb)</td><td class="border p-2">Max 0.01 mg/L</td><td class="border p-2">Max 0.05 mg/kg</td><td class="border p-2">Max 0.01 mg/L</td><td class="border p-2">Monthly / Quarterly</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Arsenic (As) Heavy Metal</td><td class="border p-2">ICP-MS at m/z 75</td><td class="border p-2 font-bold text-red-700">Max 0.01 mg/L (10 ppb)</td><td class="border p-2">Max 0.01 mg/L</td><td class="border p-2">Max 0.05 mg/kg</td><td class="border p-2">Max 0.01 mg/L</td><td class="border p-2">Monthly / Quarterly</td></tr>
                    <tr class="bg-white hover:bg-gray-50"><td class="border p-2 font-semibold">Nitrate (NO3-) Content</td><td class="border p-2">IS 3025 (Pt 34)</td><td class="border p-2 font-bold text-blue-700">Max 45.0 mg/L</td><td class="border p-2">As source water</td><td class="border p-2">Natural trace</td><td class="border p-2">Max 45.0 mg/L</td><td class="border p-2 text-indigo-700 font-semibold">Weekly</td></tr>
                    <tr class="bg-gray-50 hover:bg-gray-100"><td class="border p-2 font-semibold">Alcohol by Volume (ABV)</td><td class="border p-2">AOAC 969.12 / Densitometry</td><td class="border p-2">0.00%</td><td class="border p-2 font-bold text-red-700">Max 0.5% v/v</td><td class="border p-2 font-bold text-red-700">Max 0.5% v/v</td><td class="border p-2 font-bold text-red-700">Max 0.5% v/v</td><td class="border p-2">Every Batch</td></tr>
                  </tbody>
                </table>
              </div>`
          }
        ]
      };
