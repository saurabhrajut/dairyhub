
export const microbiologyTestMethodsContent = {
    hi: {
        title: "Common Microbiological Test Methods",
        intro:
            "Dairy products ki safety aur quality ensure karne ke liye kai standard microbiological tests kiye jaate hain. Yahaan kuch important test methods ka comprehensive scientific overview diya gaya hai:",
        tests: [
            {
                id: "spc",
                title: "Standard Plate Count (SPC) of Milk",
                principle:
                    "Standard Plate Count (SPC) – jise Total Plate Count (TPC), Aerobic Plate Count (APC), ya Total Viable Count (TVC) bhi kaha jaata hai – milk mein zinda aerobic bacteria ki sankhya ka anuman lagaane ke liye sabse fundamental aur widely accepted reference method hai. Iska principle simple hai: diluted milk ke known volume ko agar medium par plate kiya jaata hai; har zinda bacterium ek visible colony banata hai jo incubation ke baad count ki jaati hai. SPC fresh milk ki microbial quality ka most reliable absolute measure hai. Ye method colony enumeration par based hai, isliye sirf culturable organisms count hote hain – non-culturable viable organisms (VBNC) missed ho sakte hain, jo ek limitation hai. SPC se anya rapid screening tests (MBRT, Resazurin, impedance) calibrate kiye jaate hain.",
                procedure: `
              <h4 class="font-semibold mt-4 mb-2">Step 1: Diluent – Phosphate Buffer Solution (PBS) ki Taiyari</h4>
              <p><strong>Stock Solution (1X concentrate):</strong></p>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Potassium dihydrogen phosphate (KH₂PO₄): 42.5 g</li>
                <li>Distilled Water: 1000 ml</li>
              </ul>
              <p>KH₂PO₄ ko 500 ml distilled water mein dissolve karein. 1N NaOH ya 1N HCl se pH 7.2 ± 0.1 at 25°C par adjust karein (sterilization ke baad slightly decrease hoga). 1000 ml tak volume banayein. Screw-capped glass bottles mein aliquot karein. 121°C par 15 minutes autoclaving se sterilize karein. 2–8°C par store karein (maximum 3 months).</p>
              <p><strong>Working Diluent (Bench Solution):</strong> 1 ml stock solution ko 999 ml sterile distilled water mein add karein (1:1000 dilution). Alternatively, direct preparation: 0.0425 g KH₂PO₄ / litre. 9 ml aliquots mein dispense karein clean, plugged test tubes mein. 121°C / 15 min autoclave karein.</p>
              <p><em>Scientific Rationale:</em> Phosphate buffer isotonic conditions maintain karta hai (osmotic stress se bacterial death prevent) aur pH 7.2 par optimal survival conditions provide karta hai. Milk proteins ke chelating effect se bacterial clumping bhi prevent hoti hai.</p>

              <h4 class="font-semibold mt-4 mb-2">Step 2: Plate Count Agar (PCA) Medium ki Taiyari</h4>
              <p>PCA ya Standard Method Agar (SMA) composition:</p>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Tryptone (peptone): 5.0 g/L</li>
                <li>Yeast extract: 2.5 g/L</li>
                <li>Dextrose (glucose): 1.0 g/L</li>
                <li>Agar: 15.0 g/L</li>
                <li>Distilled water: 1000 ml</li>
                <li>Final pH: 7.0 ± 0.2 at 25°C</li>
              </ul>
              <p>Ingredients ko distilled water mein dissolve karein, gently heat karke boil aayein. 121°C / 15 min autoclave karein. Use se pehle 44–46°C water bath mein maintain karein (45°C: bacteria nahi marenge, agar set nahi hoga).</p>
              <p><em>Scientific Rationale:</em> Tryptone aur yeast extract broad spectrum amino acids, B-vitamins aur growth factors provide karte hain. Glucose carbon source hai. Non-selective medium hai – sabhi aerobic organisms grow kar sakte hain.</p>

              <h4 class="font-semibold mt-4 mb-2">Step 3: Sample Preparation</h4>
              <p>Raw ya pasteurized milk ke sample ko 25 times rapidly invert karein (5 seconds mein 25 inversions) taaki microorganisms homogeneously distribute ho jaayein. Temperature: 15–20°C (ice-cold milk mein fat solidifies aur pour plate ke saath mix nahi hoti). Sample analysis test collect hone ke 4 ghante ke andar honi chahiye, 4°C par store karein.</p>

              <h4 class="font-semibold mt-4 mb-2">Step 4: Serial Decimal Dilutions</h4>
              <p>1 ml test sample ko 9 ml PBS mein add karein = 10⁻¹ dilution. Vortex 5–10 sec. Nayi sterile pipette se 1 ml is dilution se lekar 9 ml PBS mein add karein = 10⁻² dilution. Continue: 10⁻³, 10⁻⁴, 10⁻⁵ (expected count ke anusaar). Raw milk ke liye typically 10⁻³ to 10⁻⁵ plates lagayein. Pasteurized milk ke liye 10⁻¹ to 10⁻³.</p>
              <p><em>Critical Note:</em> Har dilution ke liye nayi calibrated pipette use karein – same pipette se serial transfer karne par mathematical error propagate hoti hai. Pipetting technique consistent (no air bubbles) honi chahiye.</p>

              <h4 class="font-semibold mt-4 mb-2">Step 5: Pour Plate Technique (Inoculation)</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Har dilution se 1 ml ko duplicate (do) labeled sterile Petri dishes (90 mm diameter) mein transfer karein.</li>
                <li>15 ml melted PCA (45°C) turant add karein (delay se agar set ho jaata hai ya bacteria heat se mar sakte hain).</li>
                <li>Gentle figure-8 motion se thoroughly mix karein (inoculum proper distribution ke liye).</li>
                <li>Horizontal surface par solidify hone dein (approx. 10 min).</li>
                <li>Solidification ke baad dishes invert karein (condensation moisture se colony spreading prevent karne ke liye).</li>
                <li>37°C par 48 ± 3 hours incubate karein (psychrotrophs ke liye additional 7°C / 10 day plates bhi lagaayein).</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Step 6: Colony Counting</h4>
              <p>15–300 colonies wali dishes count karein (statistical validity ke liye: &lt;15 TNTC too few to count, &gt;300 TFTC too many to count / confluent growth). Colony counter aur magnifying lens use karein. Pinpoint colonies bhi count karein (&gt;0.5 mm). Spreading colonies ko ek colony count karein.</p>
            `,
                calculation: `
              <h4 class="font-semibold mt-4 mb-2">Calculation: N Formula</h4>
              <code class="block p-3 bg-gray-100 rounded">N = ΣC / [ (n₁ + 0.1 × n₂) × d ]</code>
              <ul class="list-disc list-outside pl-5 space-y-1 mt-2 text-sm">
                <li><strong>ΣC</strong> = sabhi counted dishes ki total colonies ka sum</li>
                <li><strong>n₁</strong> = lower dilution (pehli counted dilution) mein dish count (usually 2)</li>
                <li><strong>n₂</strong> = higher dilution mein dish count (usually 2)</li>
                <li><strong>d</strong> = lower dilution ka dilution factor (e.g., 10⁻³ = 0.001)</li>
              </ul>
              <p class="mt-2"><strong>Example:</strong> 10⁻³ dilution mein 216 + 242 = 458 colonies, 10⁻⁴ dilution mein 22 + 19 = 41 colonies.</p>
              <code class="block p-3 bg-gray-100 rounded">N = (458 + 41) / [(2 + 0.1×2) × 0.001] = 499 / 0.0022 = 2.27 × 10⁵ cfu/mL</code>
              <p>Result do significant figures mein round off karein: 2.3 × 10⁵ cfu/mL.</p>

              <h4 class="font-semibold mt-4 mb-2">Raw Milk Grading Standards</h4>
              <div class="overflow-x-auto mt-2">
                <table class="min-w-full text-sm border border-gray-300">
                  <thead class="bg-gray-100"><tr><th class="border px-3 py-2">Grade</th><th class="border px-3 py-2">SPC (cfu/mL)</th><th class="border px-3 py-2">Acceptable Use</th></tr></thead>
                  <tbody>
                    <tr><td class="border px-3 py-2">Bahut Accha</td><td class="border px-3 py-2">&lt; 2,00,000</td><td class="border px-3 py-2">Drinking milk, all dairy products</td></tr>
                    <tr><td class="border px-3 py-2">Accha</td><td class="border px-3 py-2">2,00,000 – 10,00,000</td><td class="border px-3 py-2">Processed products (pasteurized, UHT)</td></tr>
                    <tr><td class="border px-3 py-2">Santoshjanak</td><td class="border px-3 py-2">10,00,000 – 50,00,000</td><td class="border px-3 py-2">Marginal – immediate processing needed</td></tr>
                    <tr><td class="border px-3 py-2">Kharaab</td><td class="border px-3 py-2">&gt; 50,00,000</td><td class="border px-3 py-2">Reject / non-dairy use only</td></tr>
                  </tbody>
                </table>
              </div>
              <p class="mt-2">Pasteurized milk ke liye standard: &lt;35,000 cfu/mL (35°C/48h) – higher count indicates inadequate pasteurization ya post-pasteurization contamination (PPC).</p>
            `,
            },
            {
                id: "coliform",
                title: "Coliform Count (VRBA Method)",
                principle:
                    "Coliform group ka microbiological definition: Gram-negative, non-spore forming, facultative anaerobic rods jo 30°C, 35°C ya 37°C par 48 ghante ke andar lactose ferment karke acid aur gas produce karte hain. Coliforms dairy products mein unsanitary conditions ya post-pasteurization contamination ke indicators hain. VRBA (Violet Red Bile Agar) selective aur differential medium hai: bile salts non-coliform organisms ki growth inhibit karte hain, crystal violet Gram-positive bacteria inhibit karta hai, aur neutral red pH indicator acid production se pink/red colonies indicate karta hai. Dark red/purple colonies bile precipitate se ghiri hoti hain.",
                procedure: `
              <h4 class="font-semibold mt-4 mb-2">VRBA Medium Composition aur Taiyari</h4>
              <p>VRBA composition (per litre):</p>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Yeast extract: 3.0 g</li>
                <li>Peptone: 7.0 g</li>
                <li>Sodium chloride: 5.0 g</li>
                <li>Bile salts No. 3 (sodium taurocholate): 1.5 g</li>
                <li>Lactose: 10.0 g</li>
                <li>Neutral Red: 0.03 g</li>
                <li>Crystal Violet: 0.002 g</li>
                <li>Agar: 15.0 g</li>
                <li>Final pH: 7.4 ± 0.2</li>
              </ul>
              <p><strong>CRITICAL: VRBA ko autoclave mat karein!</strong> Overheating bile salts ko precipitate karke medium turbid bana deta hai aur selectivity reduce ho jaati hai. Ingredients dissolve karein, boil aayein, turant use karein (45°C par). Do not reuse leftover melted VRBA.</p>

              <h4 class="font-semibold mt-4 mb-2">Double Layer Pour Plate Technique</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Appropriate dilutions se 1 ml duplicate sterile Petri dishes mein transfer karein.</li>
                <li>15 ml VRBA (45°C) add karein, mix karein, solidify hone dein.</li>
                <li><strong>Double overlay:</strong> Set hone ke baad surface par 4 ml additional VRBA daalein (thin overlay layer). Yeh coliforms ko anaerobic-like conditions mein gas produce karne mein help karta hai aur surface contamination se protect karta hai.</li>
                <li>37°C par 24 ± 2 hours incubate karein.</li>
                <li>Characteristic colonies: Dark red/purplish-red, diameter &ge;0.5 mm, surrounding zone of bile precipitation. 150 se kam colonies wali plates count karein.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Confirmatory Test (Doubtful Colonies ke Liye)</h4>
              <p>Suspect colonies ko BGLB (Brilliant Green Lactose Bile) broth mein transfer karein. 37°C / 48 h incubate karein. Gas production in Durham tube = confirmed coliform.</p>
            `,
                calculation: `
              <h4 class="font-semibold mt-4 mb-2">Calculation</h4>
              <code class="block p-3 bg-gray-100 rounded">N = ΣC / [ (n₁ + 0.1 × n₂) × d ]</code>
              <p class="mt-2">Same formula as SPC but sirf coliform-typical colonies count karein.</p>

              <h4 class="font-semibold mt-4 mb-2">Interpretation Standards</h4>
              <div class="overflow-x-auto mt-2">
                <table class="min-w-full text-sm border border-gray-300">
                  <thead class="bg-gray-100"><tr><th class="border px-3 py-2">Milk Type</th><th class="border px-3 py-2">Acceptable Limit</th><th class="border px-3 py-2">Significance</th></tr></thead>
                  <tbody>
                    <tr><td class="border px-3 py-2">Raw Milk</td><td class="border px-3 py-2">Absent in 0.01 mL</td><td class="border px-3 py-2">Good hygiene indicator</td></tr>
                    <tr><td class="border px-3 py-2">Pasteurized Milk</td><td class="border px-3 py-2">Absent in 0.1 mL</td><td class="border px-3 py-2">Confirms effective pasteurization + no PPC</td></tr>
                    <tr><td class="border px-3 py-2">UHT Milk</td><td class="border px-3 py-2">Zero tolerance</td><td class="border px-3 py-2">Commercially sterile product</td></tr>
                  </tbody>
                </table>
              </div>
              <p class="mt-2">FSSAI regulation: Pasteurized milk mein coliform count &lt;10 cfu/mL (acceptable), absent preferred. E. coli presence ka matlab unambiguously fecal contamination hai.</p>
            `,
            },
            {
                id: "dmscc",
                title: "Direct Microscopic Somatic Cell Count (DMSCC)",
                principle:
                    "Somatic cells (SC) blood cells hain (primarily neutrophils/polymorphonuclear leukocytes – PMN ~70–80%, macrophages ~10–20%, lymphocytes ~10%, epithelial cells) jo udder inflammation ke response mein milk mein invade karte hain. Raw milk mein somatic cell count (SCC) mastitis aur udder health ka direct marker hai. Normal healthy cow ka SCC &lt;200,000 cells/mL; subclinical mastitis par SCC &gt;200,000 cells/mL; clinical mastitis par &gt;1,000,000 cells/mL. High SCC economic impact: reduced milk yield (10–25% reduction per quarter), altered milk composition (higher Na, Cl; lower K, Ca, lactose), reduced cheese yield, decreased shelf life of processed products (proteolytic aur lipolytic enzymes SCC cells release karte hain).",
                procedure: `
              <h4 class="font-semibold mt-4 mb-2">Single Strip Factor (SSF) Ka Anumaan</h4>
              <p>SSF ek conversion factor hai jo strip count ko cells/mL mein convert karta hai.</p>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Stage micrometer microscope par rakhein. Oil immersion objective (100×) focus karein.</li>
                <li>Single strip width = diameter of microscopic field (d). Stage micrometer se mm mein measure karein.</li>
                <li>Single strip area = d × 10 mm (kyonki milk film 1 cm × 1 cm = 10mm square area par spread ki jaati hai, aur strip 10 mm lambi hoti hai width ke direction mein d × 10 = area in mm²).</li>
                <li><code>SSF = 100 / (strip area in mm²)</code> – yeh formula 0.01 mL film volume aur strip geometry par based hai</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Milk Film Preparation (Newman-Lampert Staining)</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Milk sample 40°C par warm karein (15 min).</li>
                <li>Inversion se mix karein (25 bar).</li>
                <li>Calibrated loop (0.01 mL) ya micropipette se exactly 0.01 mL sample lein.</li>
                <li>Pre-marked 1 cm² area (clean glass slide par marker se mark karein) par evenly spread karein. Circular motion se uniform film banayein.</li>
                <li>40–45°C par 5 min mein dry karein (hot plate ya drying oven).</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Defatting, Fixing aur Staining</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li><strong>Defatting:</strong> Xylene bath mein 5 min immerse karein. Fat dissolves → clear film milti hai. Air dry karein.</li>
                <li><strong>Fixing:</strong> Methanol mein 2 min fix karein. Cells ko slide par bind karta hai.</li>
                <li><strong>Staining:</strong> Newman-Lampert stain (methylene blue + eosin in isopropanol) jar mein 10 min immerse karein. Nucleus (DNA) dark blue/purple stain hoti hai, cytoplasm lighter.</li>
                <li>Excess stain tap water se gentle wash karein. Air dry karein (heat apply nahi karein).</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Microscopic Examination</h4>
              <p>100× oil immersion objective use karein. Traverse karo film ke ek end se dusre end tak ek complete strip mein. Count karo cells jinmein stained nucleus clearly visible ho (nuclear staining must be identifiable). Epithelial cells large aur irregular, neutrophils rounded with lobulated nucleus, macrophages large with irregular nucleus. Smudge cells count karo ya nahi – IDF guidelines: cells with recognizable nucleus hi count karein. 3 strips count karein average lene ke liye.</p>
            `,
                calculation: `
              <h4 class="font-semibold mt-4 mb-2">Calculation</h4>
              <code class="block p-3 bg-gray-100 rounded">DMSCC (cells/mL) = Average Single Strip Count × SSF</code>
              <p class="mt-2 text-sm"><strong>Example:</strong> 3 strips mein 45, 52, 48 cells counted. Average = 48.3. SSF = 20,000. DMSCC = 48.3 × 20,000 = 9.66 × 10⁵ cells/mL ≈ 1.0 × 10⁶ cells/mL (2 significant figures).</p>

              <h4 class="font-semibold mt-4 mb-2">Interpretation Table</h4>
              <div class="overflow-x-auto mt-2">
                <table class="min-w-full text-sm border border-gray-300">
                  <thead class="bg-gray-100"><tr><th class="border px-3 py-2">SCC (cells/mL)</th><th class="border px-3 py-2">Udder Health Status</th><th class="border px-3 py-2">Mastitis Probability</th></tr></thead>
                  <tbody>
                    <tr><td class="border px-3 py-2">&lt; 100,000</td><td class="border px-3 py-2">Excellent</td><td class="border px-3 py-2">Very unlikely</td></tr>
                    <tr><td class="border px-3 py-2">100,000–200,000</td><td class="border px-3 py-2">Good</td><td class="border px-3 py-2">Low</td></tr>
                    <tr><td class="border px-3 py-2">200,000–500,000</td><td class="border px-3 py-2">Borderline / Subclinical suspicion</td><td class="border px-3 py-2">Possible subclinical mastitis</td></tr>
                    <tr><td class="border px-3 py-2">500,000–1,000,000</td><td class="border px-3 py-2">Subclinical Mastitis</td><td class="border px-3 py-2">High – investigate</td></tr>
                    <tr><td class="border px-3 py-2">&gt; 1,000,000</td><td class="border px-3 py-2">Severe Mastitis</td><td class="border px-3 py-2">Almost certain – clinical signs check</td></tr>
                  </tbody>
                </table>
              </div>
              <p class="mt-2">EU Legal limit: bulk milk &lt;400,000 cells/mL. FSSAI India: &lt;500,000 cells/mL for raw milk to dairy. Automatic methods (FOSSOMATIC Flow Cytometry) DMSCC se more accurate aur faster hain for bulk milk testing.</p>
            `,
            },
            {
                id: "drug_residues",
                title: "Veterinary Drug Residues – Delvotest aur Other Methods",
                principle:
                    "Dairy cows mein antibiotic treatment ke baad, antibiotic residues milk mein secreted hote hain ek certain period ke liye (withdrawal period). Inhe 'Inhibitory Substances' ya 'Antibiotic Residues' kehte hain. Milk mein antibiotic residues ki presence serious problems paida karti hai: (1) Public Health: Allergic reactions (penicillin allergy), antibiotic resistance development, gut microbiome disruption. (2) Technological: Starter culture inhibition in cheese/yoghurt making – delayed/failed acidification. (3) Legal: Regulatory non-compliance, economic penalties. Delvotest SP-NT ek internationally recognized microbiological inhibition test hai jo Bacillus stearothermophilus var. calidolactis spores ki growth inhibition par based hai. Ye beta-lactams, tetracyclines, aminoglycosides, macrolides, sulfonamides (at varying sensitivities) detect karta hai. Minimum Detection Limits (MDLs): Penicillin G ~3–4 ppb (µg/kg), Amoxicillin ~4 ppb, Tetracycline ~100 ppb.",
                procedure: `
              <h4 class="font-semibold mt-4 mb-2">Delvotest SP-NT Procedure</h4>
              <p>Delvotest kit mein microwell strips ya ampoules hote hain jisme agar gel embedded hai jisme B. stearothermophilus spores, nutrients, aur pH indicator (bromocresol purple – purple at neutral/alkaline, yellow at acidic) hote hain.</p>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Sample preparation: Representative milk sample well-mixed. 10 min room temperature.</li>
                <li>Inoculation: 0.1 mL milk sample ampoule/well mein pipette karein (manufacturer instructions ke anusaar).</li>
                <li>Incubation: 63–64°C par exactly 2.5 hours (incubator temperature ±0.5°C maintain karein).</li>
                <li>Reading: Incubation ke baad turant read karein (before cooling).</li>
              </ol>
              <p><strong>Control Setup:</strong> Positive control (antibiotic-spiked milk), Negative control (antibiotic-free milk), blank (diluent). Har batch mein controls run karein.</p>

              <h4 class="font-semibold mt-4 mb-2">Mechanism of Action</h4>
              <p>Antibiotic-free milk mein: B. stearothermophilus spores 63°C par germinate aur grow karte hain → Lactose ferment karke lactic acid produce karte hain → pH drop hota hai → Purple → Yellow colour change (Negative result = no inhibition).</p>
              <p>Antibiotic-present milk mein: Antibiotics agar mein diffuse karte hain → Bacterial growth inhibit hoti hai → No acid production → pH unchanged → Purple colour remains (Positive result = inhibition = antibiotic detected).</p>

              <h4 class="font-semibold mt-4 mb-2">Other Antibiotic Detection Methods</h4>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>SNAP Beta-Lactam Test:</strong> Lateral flow immunoassay. Specific for beta-lactam antibiotics (penicillins, cephalosporins). 5 minutes result. Highly sensitive (Penicillin G ~2 ppb). On-farm testing possible.</li>
                <li><strong>Charm II Radioimmuno-assay:</strong> Radiolabelled antibiotics compete with residues for antibody binding. Very sensitive. Multi-drug detection possible. Radiation hazard – specialized lab required.</li>
                <li><strong>ELISA kits:</strong> Specific antibody-based detection. Semi-quantitative. 1–2 hour test. Multiple drug classes available.</li>
                <li><strong>HPLC/LC-MS/MS:</strong> Gold standard confirmatory method. Simultaneous detection of multiple residues at ppb level. Expensive equipment, trained personnel needed.</li>
              </ul>
            `,
                calculation: `
              <h4 class="font-semibold mt-4 mb-2">Result Interpretation</h4>
              <div class="overflow-x-auto mt-2">
                <table class="min-w-full text-sm border border-gray-300">
                  <thead class="bg-gray-100"><tr><th class="border px-3 py-2">Colour After Incubation</th><th class="border px-3 py-2">Result</th><th class="border px-3 py-2">Interpretation</th></tr></thead>
                  <tbody>
                    <tr><td class="border px-3 py-2">Completely Yellow</td><td class="border px-3 py-2">NEGATIVE</td><td class="border px-3 py-2">No inhibitory substances – Milk acceptable</td></tr>
                    <tr><td class="border px-3 py-2">Partially Yellow / Pale Yellow</td><td class="border px-3 py-2">DOUBTFUL</td><td class="border px-3 py-2">Borderline – Retest ya confirmatory test lagaayein</td></tr>
                    <tr><td class="border px-3 py-2">Purple (unchanged)</td><td class="border px-3 py-2">POSITIVE</td><td class="border px-3 py-2">Inhibitory substances present – Milk REJECT karein</td></tr>
                  </tbody>
                </table>
              </div>
              <p class="mt-2"><strong>False Positives:</strong> High natural antibody content (mastitis milk), neutralizers (formaldehyde, hydrogen peroxide adulterants), extremely high SCC milk. Confirmatory test (SNAP, HPLC) always run karein positive results par before rejection.</p>
              <p><strong>Regulatory:</strong> FSSAI India mein antibiotics milk mein completely absent hone chahiye (zero tolerance). EU MRL (Maximum Residue Limit) penicillin G ke liye 4 µg/kg hai.</p>
            `,
            },
            {
                id: "mbrt",
                title: "Methylene Blue Reduction Test (MBRT)",
                principle:
                    "MBRT ek indirect bulk milk quality test hai jo bacterial metabolic activity measure karta hai by monitoring redox potential change. Methylene Blue ek redox indicator dye hai: oxidized (blue) form mein colored, reduced (leuco form) mein colorless. Milk mein bacteria (aur milk cells) aerobic respiration aur fermentation ke through oxygen consume karte hain aur reducing metabolites produce karte hain. Jaise hi oxygen depletes, Oxidation-Reduction Potential (ORP) girata hai. Enough reducing conditions pe methylene blue reduced hokar colorless ho jaata hai. Decolorization time inversely related hai bacterial count se: zyada bacteria = faster decolorization = poor quality milk. Ye test cheap, simple, equipment-free hai lekin imprecise – fat globule interference, LAB vs. Pseudomonas (different reducing power), mastitis milk (PMN cells reduce MB) variations cause kar sakte hain.",
                procedure: `
              <h4 class="font-semibold mt-4 mb-2">Reagent Preparation</h4>
              <p><strong>Methylene Blue Stock Solution:</strong> Methylene blue dye (certified) 5 mg ko 200 mL sterile distilled water mein dissolve karein (25 µg/mL = 0.025% solution). Amber bottle mein dark cool place par store karein (stable 1 month).</p>
              <p><strong>Working Solution:</strong> Stock solution hi directly use hoti hai (some protocols 1:1000 dilution use karte hain – per laboratory standardize karein).</p>

              <h4 class="font-semibold mt-4 mb-2">Test Procedure</h4>
              <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Sterile test tube mein 10 mL fresh milk lein (well-mixed sample, 15–20°C par).</li>
                <li>1 mL methylene blue working solution add karein.</li>
                <li>Tube ke munh ko sterilized rubber stopper ya parafilm se band karein. Mix karein (gentle inversion 3 times).</li>
                <li>Immediately 37°C water bath mein upright position mein rakhein.</li>
                <li>First 5 minutes ke baad read karein, phir 30 min intervals par. Record karo jab tube ki milk nearly colorless ho jaaye (top 2 mm ring ignore karein – fat layer oxygen-containing hoti hai).</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Control</h4>
              <p>Boiled milk (bacteria-free) parallel run karein – should NOT decolorize (confirms test validity).</p>
            `,
                calculation: `
              <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
              <div class="overflow-x-auto mt-2">
                <table class="min-w-full text-sm border border-gray-300">
                  <thead class="bg-gray-100"><tr><th class="border px-3 py-2">Decolorization Time</th><th class="border px-3 py-2">Milk Grade</th><th class="border px-3 py-2">Approximate Bacterial Count</th></tr></thead>
                  <tbody>
                    <tr><td class="border px-3 py-2">&gt; 5.5 hours</td><td class="border px-3 py-2">Bahut Accha (Excellent)</td><td class="border px-3 py-2">&lt; 2,00,000 cfu/mL</td></tr>
                    <tr><td class="border px-3 py-2">2–5.5 hours</td><td class="border px-3 py-2">Accha (Good)</td><td class="border px-3 py-2">2,00,000–20,00,000 cfu/mL</td></tr>
                    <tr><td class="border px-3 py-2">30 min–2 hours</td><td class="border px-3 py-2">Mela (Fair)</td><td class="border px-3 py-2">20,00,000–2,00,00,000 cfu/mL</td></tr>
                    <tr><td class="border px-3 py-2">&lt; 30 minutes</td><td class="border px-3 py-2">Kharab (Poor)</td><td class="border px-3 py-2">&gt; 2,00,00,000 cfu/mL</td></tr>
                  </tbody>
                </table>
              </div>
              <p class="mt-2">Limitations: High SCC milk (mastitis) MBRT mein falsely poor grade de sakta hai. LAB high reducing power wali hoti hain, Pseudomonas kam – same bacterial count par alag MBRT result. MBRT screening ke liye use karein, final grading SPC se confirm karein.</p>
            `,
            },
            {
                id: "yeast_mould",
                title: "Yeast and Mould Count",
                principle:
                    "Yeasts aur moulds fungi hai jo dairy products mein spoilage cause karte hain. Ye acidic pH par grow kar sakte hain (pH 3.0–6.0) aur NaCl, low water activity, low temperatures tolerate karte hain. Selective media mein: acidified media bacteria ki growth inhibit karta hai (bacteria low pH tolerate nahi karte), jabki fungi acid-tolerant hoti hain. Potato Dextrose Agar (PDA) aur Dichloran Rose Bengal Chloramphenicol Agar (DRBC) common selective media hain. Chloramphenicol (antibiotic) bacterial growth completely inhibit karta hai. Rose Bengal (dye) mold colony spread limit karta hai. Dairy products mein yeast & mould count: yoghurt, soft cheese, butter ki quality indicator, surface mold on hard cheese, aflatoxin-producing mold contamination ka risk.",
                procedure: `
               <h4 class="font-semibold mt-4 mb-2">Media ki Taiyari</h4>
               <p><strong>Option 1 – Potato Dextrose Agar (PDA) Acidified:</strong></p>
               <ul class="list-disc list-outside pl-5 space-y-1">
                 <li>Commercially available PDA: 39 g/L in distilled water. Autoclave 121°C/15 min.</li>
                 <li>50°C tak thanda karo. Tartaric acid solution (10%) se pH 3.5 adjust karo (approx. 1.4 mL/L).</li>
                 <li>Plates pour karo, allow to set. Pre-poured plates 4°C par 2 weeks store kar sakte hain.</li>
               </ul>
               <p class="mt-2"><strong>Option 2 – DRBC Agar (Preferred for Food Samples):</strong></p>
               <ul class="list-disc list-outside pl-5 space-y-1">
                 <li>Peptone 5g, Glucose 10g, KH₂PO₄ 1g, MgSO₄·7H₂O 0.5g, Rose Bengal 0.025g, Dichloran 0.002g, Agar 15g, Chloramphenicol 0.1g per litre.</li>
                 <li>pH 5.6. Autoclave 121°C/15 min. Light se bachao (rose bengal photosensitive).</li>
               </ul>

               <h4 class="font-semibold mt-4 mb-2">Plating Technique – Spread Plate (Preferred)</h4>
               <ol class="list-decimal list-outside pl-5 space-y-1">
                <li>Serial decimal dilutions PBS mein taiyaar karein (dairy products ke liye 10⁻¹ to 10⁻³ typically).</li>
                <li>0.1 mL (100 µL) each dilution se pre-poured, pre-dried PDA plates par spread karein (sterile glass spreader ya disposable spreader use karein).</li>
                <li>Alternatively 1 mL pour plate technique (pour plate equally effective).</li>
                <li>Duplicate plates lagaayein.</li>
                <li>Plates ko 22–25°C par 5 din ke liye incubate karein (zyada temperature fungi growth suppress kar sakta hai). Invert mat karein (mold colonies aerial mycelium se Petri dish lid se attach ho jaate hain).</li>
                <li>Din 3 se daily observe karein. Spreading mold colonies adjacent colonies count mai interfere karte hain – note karo.</li>
              </ol>

              <h4 class="font-semibold mt-4 mb-2">Colony Identification</h4>
              <p>Yeasts: Generally small, convex, moist, creamy-white to pink colonies (Gram stain: large oval cells, 5–10 µm). Moulds: Fuzzy, cottony, spreading colonies with aerial hyphae. Colour depends on genus: White (<i>Mucor</i>), Green/Blue-green (<i>Penicillium, Aspergillus</i>), Black (<i>Rhizopus, Aspergillus niger</i>), Pink/Orange (<i>Fusarium</i>). Colony morphology aur microscopy (lactophenol cotton blue staining) se tentative identification karo.</p>
            `,
                calculation: `
              <code class="block p-3 bg-gray-100 rounded">Yeast/Mould Count (cfu/g or cfu/mL) = Average colony count (from duplicate) × (1/volume plated) × Dilution factor</code>
              <p class="mt-2 text-sm"><strong>Example (Spread plate, 0.1 mL):</strong> 10⁻² dilution se 45 yeast colonies (avg of duplicates). Count = 45 × (1/0.1) × 100 = 45,000 cfu/mL.</p>

              <h4 class="font-semibold mt-4 mb-2">Interpretation Standards</h4>
              <div class="overflow-x-auto mt-2">
                <table class="min-w-full text-sm border border-gray-300">
                  <thead class="bg-gray-100"><tr><th class="border px-3 py-2">Product</th><th class="border px-3 py-2">Acceptable Limit</th><th class="border px-3 py-2">Action Limit</th></tr></thead>
                  <tbody>
                    <tr><td class="border px-3 py-2">Yoghurt / Dahi</td><td class="border px-3 py-2">&lt;100 cfu/g</td><td class="border px-3 py-2">&gt;100 cfu/g = Investigate</td></tr>
                    <tr><td class="border px-3 py-2">Soft Cheese</td><td class="border px-3 py-2">&lt;100 cfu/g (surface)</td><td class="border px-3 py-2">Mould visible = Reject</td></tr>
                    <tr><td class="border px-3 py-2">Butter</td><td class="border px-3 py-2">&lt;10 cfu/g</td><td class="border px-3 py-2">&gt;10 = Poor packaging/cold chain</td></tr>
                    <tr><td class="border px-3 py-2">Milk Powder</td><td class="border px-3 py-2">&lt;100 cfu/g</td><td class="border px-3 py-2">Environmental contamination</td></tr>
                  </tbody>
                </table>
              </div>
            `,
            },
            {
                id: "media_prep",
                title: "Bacteriological Media ki Taiyari",
                principle: `Culture media wo nutrients ka mixture hai jo controlled artificial conditions mein microorganisms ke growth aur study ke liye use hota hai. Media ki taiyari quality control ka foundation hai – improper media se galat results milte hain. Media classification: (1) Consistency basis par: Liquid (broth), Semi-solid (0.3–0.5% agar), Solid (1.5–2% agar). (2) Composition basis par: Natural (potato infusion, blood, milk), Synthetic (chemically defined composition), Semi-synthetic (peptone + yeast extract base). (3) Purpose basis par: General/Non-selective (Nutrient agar – sabhi organisms), Selective (VRBA – coliforms only, MRS – LAB), Differential (Blood agar – hemolysis pattern), Enrichment (Selenite broth – Salmonella), Indicator/Chromogenic (Chromocult – instant color identification).`,
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">pH Adjustment: Critical Step</h4>
                <p>pH meter calibration (pH 4.0 aur 7.0 buffers) daily karein. Temperature compensation set karein (25°C). pH adjustment: NaOH (1N ya 0.1N) se increase, HCl (1N ya 0.1N) se decrease. <strong>Critical:</strong> Autoclave karne se pH slightly decrease hota hai (CO2 release se), isliye target pH se 0.1–0.2 high set karein. Post-sterilization pH check karo (sample tube lete hue).</p>

                <h4 class="font-semibold mt-4 mb-2">Nutrient Agar / Nutrient Broth</h4>
                <p><strong>Composition (per litre):</strong> Beef extract 3g, Peptone 5g, NaCl 5g (Broth). For agar, add Agar 15g. pH 7.3 ± 0.2.</p>
                <p><strong>Preparation:</strong> Ingredients dissolve karein. Agar ke liye boil aayein gently (agar dispersion ke liye). 121°C / 15 min autoclave. 50°C tak thanda karo (plates pour karne ke liye) ya liquid mein use karo. Sterility check: 37°C / 48h incubate karein ek tube – no turbidity = sterile.</p>

                <h4 class="font-semibold mt-4 mb-2">Plate Count Agar (PCA)</h4>
                <p>Composition (per litre): Tryptone 5g, Yeast Extract 2.5g, Glucose 1g, Agar 15g, pH 7.0. Standard agar for SPC testing.</p>

                <h4 class="font-semibold mt-4 mb-2">Violet Red Bile Agar (VRBA)</h4>
                <p>Selective for coliforms. Bile salts + Crystal Violet suppress Gram-positive aur non-fermenters. <strong>NEVER autoclave.</strong> Boil to dissolve, use at 45°C. Dark red colonies with bile halo = coliforms.</p>

                <h4 class="font-semibold mt-4 mb-2">MacConkey Agar (MCA)</h4>
                <p>Selective-differential. Bile salts + crystal violet Gram-positive inhibit karte hain. Neutral red pH indicator: Lactose fermenters = Pink/red colonies (<i>E. coli</i>, coliforms); Non-fermenters = Colorless (<i>Salmonella, Shigella</i>). pH 7.4. Autoclave 121°C/15 min.</p>

                <h4 class="font-semibold mt-4 mb-2">Potato Dextrose Agar (PDA)</h4>
                <p>Composition: Potato infusion 4g (or potato extract), Dextrose 20g, Agar 15g per litre. Low pH (3.5 with tartaric acid) bacterial growth rokata hai. Fungi ke liye optimal. Autoclave pehle (pH adjust nahin karein), phir agar cool karne ke baad tartaric acid add karein.</p>

                <h4 class="font-semibold mt-4 mb-2">MRS Agar (de Man, Rogosa, Sharpe)</h4>
                <p>Selective for Lactic Acid Bacteria. Contains: Peptone, Beef extract, Yeast extract, Glucose, Sorbitan mono-oleate, K₂HPO₄, Sodium acetate, Ammonium citrate, MgSO₄, MnSO₄, Agar. Low pH (6.2) aur acetate selective pressure. Anaerobic or 5% CO₂ incubation at 37°C or 42°C.</p>

                <h4 class="font-semibold mt-4 mb-2">Blood Agar</h4>
                <p>Blood agar base + 5–7% defibrinated sheep blood (aseptically added at 45°C). Hemolysis patterns: Alpha (partial, green zone), Beta (complete, clear zone), Gamma (no hemolysis). S. agalactiae beta-hemolytic hai – mastitis diagnosis mein use.</p>

                <h4 class="font-semibold mt-4 mb-2">Media Quality Control</h4>
                <p>Har batch ki media ke liye: (1) Sterility check (one unit 37°C/48h incubate karein), (2) Growth promotion test (reference organisms ka use), (3) pH verification, (4) Appearance check (clarity, color). ATCC reference strains maintain karein: E. coli ATCC 25922, Staphylococcus aureus ATCC 25923, etc.</p>
            `,
                calculation: "",
            },
            {
                id: "bacteriology_air",
                title: "Bacteriology of Air (Dairy Environment)",
                principle:
                    "Air itself microorganisms ke growth aur reproduction ke liye suitable environment nahi hai – ye desiccation, UV radiation aur lack of nutrients se deactivate ho jaate hain. Lekin bacteria, mold spores, ya yeast cells aero-sols ke through dust particles ke saath suspended rehte hain aur dairy processing environment mein contamination ka significant source ho sakte hain. Aerial microbial load ka pata lagana zaruri hai: (1) Post-pasteurization contamination (PPC) assessment, (2) CIP effectiveness monitoring, (3) New construction/renovation ke baad cleanliness verification, (4) Specific outbreak investigation. Settle plate method (passive air sampling) simplest hai – expose ki gayi plates par gravity se particles settle hote hain. Active air sampling (RCS sampler, Anderson impactor) more quantitative aur representative hain par specialized equipment ki zarurat hai.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Settle Plate Method (Passive Air Sampling)</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Nutrient agar plates (bacteria ke liye) aur Sabouraud Dextrose Agar plates (fungi ke liye) taiyaar karein. Pre-dry plates (15 min open in laminar flow) surface condensation remove karne ke liye.</li>
                    <li>Designated sampling locations identify karein (milking parlor, pasteurization room, filling area, cold store).</li>
                    <li>Plates ko sampling location par rakhein (floor level aur working height dono).</li>
                    <li>Lid open karein, designated exposure time ke liye open rakhein: Processing area: 15–30 min exposure; High-risk areas (filling lines): 15 min; Outdoor/comparative: 5 min.</li>
                    <li>Lid replace karein, label karein (location, time, date, exposure duration).</li>
                    <li>NA plates: 37°C / 48h incubate karein. SDA plates: 22°C / 5 days.</li>
                    <li>Colonies count karein.</li>
                </ol>

                <h4 class="font-semibold mt-4 mb-2">Active Air Sampling (RCS Centrifugal Sampler)</h4>
                <p>RCS sampler air ko known volumetric rate par aspirate karta hai (typically 40 L/min ya 100 L/min). Air mein suspended particles centrifugal force se agar strip par impinge hote hain. Known air volume sampled hone se cfu/m³ air calculate ki ja sakti hai. Ye settle plate se zyada accurate hai quantitative measurement ke liye.</p>

                <h4 class="font-semibold mt-4 mb-2">Surface Contamination aur Contact Plates (RODAC)</h4>
                <p>RODAC (Replicate Organism Detection and Counting) plates convex surface ke saath aate hain. Plate ko flat surface ke against firmly press karein (10 sec, uniform pressure). Ye contact plates equipment cleanliness aur personnel hand hygiene monitoring ke liye use hote hain.</p>
            `,
                calculation: `
                <h4 class="font-semibold mt-4 mb-2">Calculation – CFU/m³ (Active Sampling se)</h4>
                <code class="block p-3 bg-gray-100 rounded">CFU/m³ = (Colony count on strip × 1000) / (Flow rate L/min × Sampling time min)</code>

                <h4 class="font-semibold mt-4 mb-2">Interpretation – Settle Plate Results</h4>
                <div class="overflow-x-auto mt-2">
                  <table class="min-w-full text-sm border border-gray-300">
                    <thead class="bg-gray-100"><tr><th class="border px-3 py-2">Colony Count / Plate (30 min)</th><th class="border px-3 py-2">Air Quality</th><th class="border px-3 py-2">Action</th></tr></thead>
                    <tbody>
                      <tr><td class="border px-3 py-2">&lt; 5</td><td class="border px-3 py-2">Excellent</td><td class="border px-3 py-2">No action needed</td></tr>
                      <tr><td class="border px-3 py-2">5–10</td><td class="border px-3 py-2">Acceptable</td><td class="border px-3 py-2">Monitor regularly</td></tr>
                      <tr><td class="border px-3 py-2">10–25</td><td class="border px-3 py-2">Marginal</td><td class="border px-3 py-2">Investigate sources; improve ventilation/filtration</td></tr>
                      <tr><td class="border px-3 py-2">&gt; 25</td><td class="border px-3 py-2">Unacceptable</td><td class="border px-3 py-2">Immediate action: deep clean, air filter check</td></tr>
                    </tbody>
                  </table>
                </div>
                <p class="mt-2">Ye thresholds filling rooms aur pasteurized product areas ke liye hain. High-care areas (UHT filling) mein stricter standards apply hote hain. EU pharmaceutical cleanroom standards dairy industry mein sometimes reference ki jaati hain.</p>
            `,
            },
            {
                id: "sterility_equipment",
                title: "Plant aur Equipment ki Sterility ka Aakalan (Swab Method)",
                principle:
                    "Equipment sterility assessment CIP/SIP effectiveness verify karne ke liye essential monitoring tool hai. Swab method (ISO 18593:2018) – cotton swab ya sponge swab ek defined area se bacterial cells ko physically remove karta hai. In cells ko eluent mein release karke plate count se quantify kiya jaata hai. Yeh method: heat exchangers, pipelines, tanks, valves, conveyors ki sanitary condition assess karne ke liye use hota hai. Alternative: ATP Bioluminescence swab (5 min result, quantifies both microbial and food residues). Regular swab monitoring (daily, weekly) CIP effectiveness trend tracking allow karta hai.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Sampling Materials aur Preparation</h4>
                <ul class="list-disc list-outside pl-5 space-y-1">
                  <li>Sterile cotton-tipped swab ya pre-moistened sponge swab (Whirl-Pak sponge bags)</li>
                  <li>Eluent: 10 mL sterile 0.1% peptone water ya phosphate buffer in tube</li>
                  <li>Template: 10 cm × 10 cm (100 cm²) area mark karne ke liye sterile stainless steel template</li>
                </ul>

                <h4 class="font-semibold mt-4 mb-2">Sampling Technique</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Swab ko tube ke edge par rolling motion se excess liquid remove karein.</li>
                    <li>Template ko sampling surface par rakhein ya mentally 10×10 cm area mark karein.</li>
                    <li>Swab ko 45° angle par hold karein. Firm pressure ke saath horizontal direction mein 5 stripes karein. Rotate swab 90°, vertical direction mein 5 more stripes karein (zigzag double pass technique).</li>
                    <li>Corners include karein (bacteria wahan accumulate karte hain).</li>
                    <li>Swab turant eluent tube mein wapas rakhein. Cap tightly karein.</li>
                    <li>4°C par transport karein, 4 ghante ke andar test karein.</li>
                </ol>

                <h4 class="font-semibold mt-4 mb-2">Processing aur Plating</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Tube mein swab ko 1 min hand swirling se agitate karein (ya vortex 15 sec).</li>
                    <li>Is solution ki 10-fold serial dilutions banayein.</li>
                    <li>1 mL of neat aur diluted sample PCA plates par duplicate mein pour plate karein.</li>
                    <li>37°C / 48h incubate karein.</li>
                </ol>
            `,
                calculation: `
                <h4 class="font-semibold mt-4 mb-2">Calculation</h4>
                <code class="block p-3 bg-gray-100 rounded">Total count/area = Average plate count × Dilution factor × (Total eluent volume / Volume plated) / Area swabbed (cm²)</code>
                <p class="mt-1 text-sm">Example: Avg 64 colonies at 10⁻¹ dilution, 1 mL plated from 10 mL eluent, 100 cm² area swabbed = 64 × 10 × 10 / 100 = 64 cfu/cm²</p>

                <h4 class="font-semibold mt-4 mb-2">Interpretation – Per 100 cm² (Standard Area)</h4>
                <div class="overflow-x-auto mt-2">
                  <table class="min-w-full text-sm border border-gray-300">
                    <thead class="bg-gray-100"><tr><th class="border px-3 py-2">Colony Count per 100 cm²</th><th class="border px-3 py-2">Sanitary Status</th></tr></thead>
                    <tbody>
                      <tr><td class="border px-3 py-2">&lt; 50 (5000 per 900 cm²)</td><td class="border px-3 py-2">Santoshjanak (Satisfactory)</td></tr>
                      <tr><td class="border px-3 py-2">50–250 (5000–25000 per 900 cm²)</td><td class="border px-3 py-2">Kafi Santoshjanak (Fairly Satisfactory)</td></tr>
                      <tr><td class="border px-3 py-2">&gt; 250 (&gt;25000 per 900 cm²)</td><td class="border px-3 py-2">Asantoshjanak (Unsatisfactory) – CIP review karein</td></tr>
                    </tbody>
                  </table>
                </div>
                <p class="mt-2">ATP method: &lt;10 RLU/cm² = clean; 10–100 RLU = borderline; &gt;100 RLU = dirty. ATP test CIP validation aur pre-production verification ke liye faster alternative hai.</p>
            `,
            },
            {
                id: "sterility_bottles",
                title: "Doodh ki Botlon ki Sterility ka Aakalan (Rinse Method)",
                principle:
                    "Milk bottles ki sterility rinse technique se assess ki jaati hai. Known volume sterile rinse solution se bottle ki internal surface se bacteria remove kiye jaate hain aur rinse solution ka SPC se bacterial count estimate kiya jaata hai. Method ISO 6887 principles follow karta hai. Glass aur plastic bottles dono ke liye applicable. Bottles mechanical washing machines (hot water, detergent, final hot rinse ya sanitizer) se cleaned honi chahiye. Inadequately cleaned bottles post-pasteurization contamination ka major source hain. Regular sampling program: 10 bottles minimum per batch, after each washing cycle check karein.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure (Standard Rinse Method)</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Sterile rinse solution taiyaar karein: Ringer's solution (quarter strength: 2.25 g NaCl, 0.105 g KCl, 0.06 g CaCl₂·6H₂O per litre) ya 0.1% peptone water. Autoclave 121°C/15 min.</li>
                    <li>20 mL sterile rinse solution bottle mein add karein (sterile pipette se).</li>
                    <li>Sterile rubber stopper se band karein.</li>
                    <li>Horizontal position mein hold karein, ek direction mein 12 complete gentle rotations karein, phir lengthwise 12 back-and-forth shakings (total ~30 sec). Yeh internal surface uniformly wet karta hai.</li>
                    <li>15–30 min room temperature par stand karne dein (bacteria ka eluent mein transfer hone ke liye).</li>
                    <li>Again 12 gentle rotations karein.</li>
                    <li>Rinse solution sterile container mein transfer karein.</li>
                    <li>1 mL aur 5 mL portions duplicate Petri dishes mein transfer karein, PCA pour plate method se plate karein.</li>
                    <li>37°C / 48h incubate karein.</li>
                </ol>
            `,
                calculation: `
                <h4 class="font-semibold mt-4 mb-2">Calculation</h4>
                <p>1 mL plates se: <code>Count/bottle = Avg colonies × 20 (total rinse volume = 20 mL)</code></p>
                <p>5 mL plates se: <code>Count/bottle = Avg colonies × 4</code></p>
                <p class="mt-1 text-sm">Example: 1 mL plates mein avg 3 colonies → 3 × 20 = 60 colonies/bottle. Bottle capacity 500 mL → 60/500 = 0.12 cfu/mL capacity. This is acceptable (&lt;1/mL).</p>

                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p><strong>Acceptable:</strong> &lt;1 colony per mL of bottle capacity.</p>
                <p><strong>Example:</strong> 200 mL bottle mein &lt;200 colonies total = acceptable.</p>
                <p><strong>Rejection criterion:</strong> &gt;1 colony/mL bottle capacity = unsatisfactory sterility. Washing cycle review, sanitizer concentration check, rinse water quality verify karein.</p>
            `,
            },
            {
                id: "sterility_cans",
                title: "Doodh ke Cans ki Sterility ka Aakalan",
                principle:
                    "Milk cans (aluminium ya stainless steel) ka proper cleaning dairy supply chain mein essential hai. Dirty cans milk ke contamination ka major route hain. Rinse technique se cans ki internal sterility assess kiya jaata hai – similar principle as bottle rinse method but larger volume rinse solution used kiya jaata hai. Cans ka visual inspection bhi zaruri hai (dents, scratches, loose handles jo cleaning ko difficult banate hain). India mein bulk milk collection mein 30–40L stainless steel cans widely use hote hain.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Visual inspection: Dents, corrosion, loose lid seal, old milk residue visible toh khar karein cleaning process se.</li>
                    <li>Can ke andar lid ki taraf se 500 mL sterile Ringer's ya phosphate buffer solution (autoclave 121°C/15 min) daalein.</li>
                    <li>Lid tightly band karein.</li>
                    <li>Can apni side par letao (horizontal). Aage-peeche roll karein 12 complete revolutions (poori internal surface wet ho).</li>
                    <li>Rinse sample ko sterile bottle ya flask mein daalein.</li>
                    <li>Rinse solution ka 1:10 dilution taiyaar karein.</li>
                    <li>Neat sample aur dilution se 1 mL duplicate mein PCA par plate karein.</li>
                    <li>37°C / 48h incubate karein.</li>
                </ol>
            `,
                calculation: `
                <h4 class="font-semibold mt-4 mb-2">Calculation</h4>
                <code class="block p-3 bg-gray-100 rounded">Count per litre capacity = (Avg colonies from neat plates × 500) / Can capacity in litres</code>
                <p class="text-sm mt-1">Or if 1:10 dilution plates used: Avg colonies × 10 (dilution factor) = count per mL rinse → multiply by 500 mL → divide by capacity.</p>

                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <div class="overflow-x-auto mt-2">
                  <table class="min-w-full text-sm border border-gray-300">
                    <thead class="bg-gray-100"><tr><th class="border px-3 py-2">Count per Litre Capacity</th><th class="border px-3 py-2">Sterility Rating</th></tr></thead>
                    <tbody>
                      <tr><td class="border px-3 py-2">&lt; 1,000</td><td class="border px-3 py-2">Santoshjanak (Satisfactory)</td></tr>
                      <tr><td class="border px-3 py-2">1,000 – 5,000</td><td class="border px-3 py-2">Kafi Santoshjanak (Fairly Satisfactory)</td></tr>
                      <tr><td class="border px-3 py-2">&gt; 5,000</td><td class="border px-3 py-2">Asantoshjanak – Can reject aur re-wash karein</td></tr>
                    </tbody>
                  </table>
                </div>
              `,
            },
            {
                id: "fermented_products",
                title: "Fermented Milk Products ka Microbiological Analysis",
                principle:
                    "Dahi, yoghurt, cultured buttermilk, acidophilus milk aur cheese jaise fermented products ki microbiological quality ka assessment do dimensions mein hota hai: (1) Desired organisms (starter cultures – LAB) ki viability aur activity, (2) Undesirable organisms (coliforms, yeasts, moulds, pathogens) ki absence. Contamination sources mein: raw milk (if improperly pasteurized), starter culture contamination, unsterile equipment, environment, personnel shamil hain. Fermented products ka acidic pH (4.0–4.6) kuch pathogens inhibit karta hai lekin acid-tolerant organisms (yeasts, moulds, LAB, E. coli O157:H7) grow kar sakte hain.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Sample Preparation</h4>
                <p>10 g/mL sample lein. Dahi/yoghurt: 11 g sample + 99 mL sterile PBS = 10⁻¹ dilution. (Acidity ke kaaran pH already low hai – dilution lagbhag neutral pH par la deti hai.) Serial dilutions taiyaar karein: 10⁻², 10⁻³ as needed. Vortex karein ya stomacher se homogenize karein.</p>

                <h4 class="font-semibold mt-4 mb-2">Test 1: Total Viable Count (TVC)</h4>
                <p>PCA par standard pour plate. 37°C / 48h. Starter bacteria ki high counts (10⁸–10⁹ cfu/g) expected hain – yeh normal hai. Count mein se spoilage/pathogen differentiation ke liye selective media required hain.</p>

                <h4 class="font-semibold mt-4 mb-2">Test 2: Coliform Count (Presumptive)</h4>
                <p>VRBA method ya MacConkey broth (MPN method): 1:10, 1:100, 1:1000 dilutions se triple tubes inoculate karein MacConkey broth mein. 37°C / 48h. Gas production = presumptive positive. Confirmatory: BGLB broth at 44.5°C (fecal coliforms).</p>

                <h4 class="font-semibold mt-4 mb-2">Test 3: Yeast and Mould Count</h4>
                <p>Acidified PDA (pH 3.5) ya DRBC par spread plate method. 22°C / 5 days. Separate count karein (yeasts vs. moulds morphology se).</p>

                <h4 class="font-semibold mt-4 mb-2">Test 4: Starter Culture Viability (LAB Count)</h4>
                <p>MRS Agar (pH 6.2) par pour plate ya spread plate. 37°C / 48h anaerobic conditions mein (anaerobic jar ya 5% CO₂ incubator). Count: Lactobacillus + Lactococcus colonies. Minimum viable LAB count in probiotic dahi: 10⁶ cfu/g (FSSAI requirement for probiotic claims).</p>

                <h4 class="font-semibold mt-4 mb-2">Test 5: Staphylococcus aureus (Optional – if pathogen concern)</h4>
                <p>Baird-Parker Agar (BP Agar) par spread plate. 37°C / 48h. Black shiny colonies with halo = S. aureus. Coagulase test confirm karein. &gt;10² cfu/g = concern.</p>
            `,
                calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation Standards for Fermented Milk Products</h4>
                <div class="overflow-x-auto mt-2">
                  <table class="min-w-full text-sm border border-gray-300">
                    <thead class="bg-gray-100"><tr><th class="border px-3 py-2">Test</th><th class="border px-3 py-2">Acceptable</th><th class="border px-3 py-2">Unacceptable</th></tr></thead>
                    <tbody>
                      <tr><td class="border px-3 py-2">Total Viable Count</td><td class="border px-3 py-2">10⁷–10⁹ cfu/g (starter bacteria)</td><td class="border px-3 py-2">Abnormal ratio or unexpected organisms</td></tr>
                      <tr><td class="border px-3 py-2">Coliform Count</td><td class="border px-3 py-2">Absent in 0.1 g</td><td class="border px-3 py-2">Present = hygiene failure</td></tr>
                      <tr><td class="border px-3 py-2">Yeast + Mould</td><td class="border px-3 py-2">&lt; 100 cfu/g</td><td class="border px-3 py-2">&gt; 100 cfu/g = poor quality</td></tr>
                      <tr><td class="border px-3 py-2">LAB Count</td><td class="border px-3 py-2">&gt; 10⁶ cfu/g (probiotic products)</td><td class="border px-3 py-2">&lt; 10⁶ = dead culture</td></tr>
                      <tr><td class="border px-3 py-2">S. aureus</td><td class="border px-3 py-2">&lt; 10 cfu/g</td><td class="border px-3 py-2">&gt; 10² = potential toxin risk</td></tr>
                    </tbody>
                  </table>
                </div>
              `,
            },
            {
                id: "starter_cultures",
                title: "Starter Cultures ki Quality aur Activity Testing",
                principle:
                    "Starter cultures dairy products ki quality ka heart hain. Inki regular quality assessment zaroori hai kyonki: phage contamination se activity loss ho sakta hai, subculturing se genetic mutation aur selection ho sakti hai, contamination (coliforms, yeasts) secondary flavor defects cause karte hain, over-acidification ya under-acidification product defects cause karti hai. Three types of starter culture forms hain: (1) Liquid bulk starter (dairy-prepared, highest phage risk), (2) Lyophilized (freeze-dried) direct-set culture (lower phage risk, longer shelf life), (3) Deep-frozen concentrated DVS (Direct Vat Set) culture (minimal phage risk, controlled environment).",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Test 1: Acidification Activity (Acidity Test)</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Sterile 10 mL reconstituted skim milk (10% solids) lein.</li>
                    <li>0.3 mL (3% inoculum) starter culture add karein.</li>
                    <li>37°C par 3.5 hours incubate karein.</li>
                    <li>Titratable acidity measure karein: 9 mL milk + 0.5 mL phenolphthalein indicator (1% in 95% ethanol). 0.1N NaOH se titrate karein till pink color (endpoint 30 sec persistent). mL NaOH used × 0.09 = % lactic acid equivalent.</li>
                </ol>

                <h4 class="font-semibold mt-4 mb-2">Test 2: Methylene Blue Reduction (Activity Indicator)</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>10 mL sterile skim milk + 1 mL culture + 1 mL 0.05% MB solution.</li>
                    <li>Seal, mix, 37°C water bath mein incubate.</li>
                    <li>Decolorization time note karein. Short time (fast reduction) = highly active culture.</li>
                </ol>

                <h4 class="font-semibold mt-4 mb-2">Test 3: Diacetyl Production (Creatine Test)</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>2 mL culture (aroma culture: <i>Leuconostoc</i>, <i>Lc. lactis</i> subsp. <i>diacetylactis</i>) test tube mein lein.</li>
                    <li>Small amount creatine powder (1–2 mg) add karein.</li>
                    <li>Equal volume (2 mL) 30% KOH solution add karein. Mix karein.</li>
                    <li>15–30 min room temperature par rakhein. Surface observe karein.</li>
                    <li>Pink/red colour band surface par = diacetyl present = active flavor culture. Acetoin + creatine + KOH → red colour (Worms reaction).</li>
                </ol>

                <h4 class="font-semibold mt-4 mb-2">Test 4: Phage Testing</h4>
                <p>Bulk starter ko phage agar (double layer method) par test karein:</p>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Indicator organisms (sensitive LAB strains) ki log-phase culture 10 mL soft agar mein mix karein.</li>
                    <li>Pre-set hard agar plates par overlay karein.</li>
                    <li>Suspected phage sample (diluted milk, environment swab) se spots apply karein.</li>
                    <li>37°C / 12h incubate karein. Plaque formation = phage present.</li>
                </ol>
                <p>Commercial phage indicator kits bhi available hain (e.g., agar-based rapid phage detection strips).</p>
            `,
                calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <div class="overflow-x-auto mt-2">
                  <table class="min-w-full text-sm border border-gray-300">
                    <thead class="bg-gray-100"><tr><th class="border px-3 py-2">Test</th><th class="border px-3 py-2">Good Culture</th><th class="border px-3 py-2">Investigate / Reject</th></tr></thead>
                    <tbody>
                      <tr><td class="border px-3 py-2">Acidity after 3.5h</td><td class="border px-3 py-2">&ge; 0.35% lactic acid</td><td class="border px-3 py-2">&lt; 0.25% = inactive culture</td></tr>
                      <tr><td class="border px-3 py-2">MB Reduction time</td><td class="border px-3 py-2">&lt; 35 min (Excellent)</td><td class="border px-3 py-2">&gt; 60 min = weak activity</td></tr>
                      <tr><td class="border px-3 py-2">Creatine Test</td><td class="border px-3 py-2">Pink band within 30 min</td><td class="border px-3 py-2">No colour = no diacetyl production</td></tr>
                      <tr><td class="border px-3 py-2">Phage Test</td><td class="border px-3 py-2">No plaques</td><td class="border px-3 py-2">Any plaques = phage contamination – replace culture</td></tr>
                    </tbody>
                  </table>
                </div>
              `,
            },
            {
                id: "cream_analysis",
                title: "Bacteriological Analysis of Cream",
                principle:
                    "Cream milk se fat separation karke banai jaati hai (typically 35–60% fat). Cream ki microbiology milk se similar hai lekin kuch differences hain: (1) Higher fat content psychrotrophic lipase-producers ke liye zyada substrate provide karta hai. (2) Fat globules bacteria ki physical protection provide kar sakte hain (encapsulated bacteria). (3) Pasteurization temperature adjustment: Cream ki high fat content heat conductivity affect karti hai, isliye cream pasteurization slightly different time-temperature profiles use karti hai. (4) Cream ki high viscosity sampling aur dilution ko complex banati hai.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Sample Preparation</h4>
                <p>Cream samples high fat content ke kaaran proper dilution preparation critical hai. 40°C par warm karein (fat liquify karne ke liye). Vigorous mixing (vortex 30 sec). Liquid cream ke liye: direct dilution in PBS. Whipped/solid cream ke liye: 10g + 90mL PBS + stomacher 60 sec = 10⁻¹ dilution. Serial dilutions taiyaar karein.</p>

                <h4 class="font-semibold mt-4 mb-2">Standard Plate Count of Cream</h4>
                <p>PCA par pour plate, 37°C / 48h. Fresh cream expected count: raw &lt;5×10⁵ cfu/mL; pasteurized &lt;10⁴ cfu/mL. UHT cream: commercially sterile (&lt;10 cfu/mL).</p>

                <h4 class="font-semibold mt-4 mb-2">Psychrotrophic Count</h4>
                <p>PCA plates 7°C par 10 days incubate karein (ya 21°C / 25h as rapid method). Psychrotrophs ki count shelf life prediction ke liye critical hai. &gt;10⁴ psychrotrophs/mL = shortened shelf life even after pasteurization (enzyme residues).</p>

                <h4 class="font-semibold mt-4 mb-2">Coliform Count</h4>
                <p>VRBA method. Fresh cream: absence in 0.01 mL. Pasteurized cream: absence in 0.1 mL.</p>

                <h4 class="font-semibold mt-4 mb-2">Lipolysis Assessment (Indirect – Rancidity)</h4>
                <p>Free Fatty Acid (FFA) measurement: BDI (Fat Acidity) test ya titration method. High FFA (&gt;0.3 meq/100g fat) = rancidity from lipase activity. Also: Organoleptic assessment by trained panel (rancid, soapy, bitter odor/flavor).</p>

                <h4 class="font-semibold mt-4 mb-2">Methylene Blue Reduction Test (MBRT) for Cream</h4>
                <p>Triple concentration MB solution use karein (high fat dilutes the dye). Procedure same as milk MBRT. Interpretation slightly different due to high fat.</p>
            `,
                calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation Standards for Cream</h4>
                <div class="overflow-x-auto mt-2">
                  <table class="min-w-full text-sm border border-gray-300">
                    <thead class="bg-gray-100"><tr><th class="border px-3 py-2">Parameter</th><th class="border px-3 py-2">Raw Cream</th><th class="border px-3 py-2">Pasteurized Cream</th></tr></thead>
                    <tbody>
                      <tr><td class="border px-3 py-2">SPC</td><td class="border px-3 py-2">&lt; 5×10⁵ cfu/mL</td><td class="border px-3 py-2">&lt; 10⁴ cfu/mL</td></tr>
                      <tr><td class="border px-3 py-2">Coliforms</td><td class="border px-3 py-2">Absent in 0.01 mL</td><td class="border px-3 py-2">Absent in 0.1 mL</td></tr>
                      <tr><td class="border px-3 py-2">MBRT</td><td class="border px-3 py-2">&gt; 4h (good)</td><td class="border px-3 py-2">&gt; 6h (should be better than raw)</td></tr>
                      <tr><td class="border px-3 py-2">Yeast + Mould</td><td class="border px-3 py-2">&lt; 100 cfu/mL</td><td class="border px-3 py-2">&lt; 10 cfu/mL</td></tr>
                    </tbody>
                  </table>
                </div>
              `,
            },
            {
                id: "listeria_testing",
                title: "Listeria monocytogenes Detection",
                principle:
                    "Listeria monocytogenes dairy industry mein sabse feared pathogens mein se ek hai. Iska psychrotrophic nature (4°C par growth), high salt tolerance (10% NaCl), wide pH range (4.4–9.6) aur biofilm formation ability ise post-pasteurization environment mein persistent problem banati hai. Ready-to-eat (RTE) products (soft cheese, smoked salmon, deli meats) mein L. monocytogenes high-risk foods hain. Detection method: ISO 11290-1:2017 (qualitative – presence/absence) aur ISO 11290-2:2017 (quantitative – enumeration). Both methods use enrichment + selective plating.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">ISO 11290-1 Qualitative Detection Method</h4>
                <p><strong>Step 1: Primary Enrichment (24–26h)</strong></p>
                <p>25g sample + 225 mL Half Fraser Broth (HFB) mein stomach karein 60 sec. HFB mein: nalidixic acid (Gram-negative inhibit karta hai), acriflavine (other organisms inhibit), lithium chloride. 30°C par 24–26h incubate karein.</p>
                <p><strong>Step 2: Secondary Enrichment (24–26h)</strong></p>
                <p>0.1 mL primary enrichment → 10 mL Full Fraser Broth. 37°C / 24–26h. Fraser Broth mein esculin + ferric ammonium citrate: L. monocytogenes esculin hydrolyze karke esculetin produce karta hai jo iron salt ke saath black complex banata hai. Black discoloration = presumptive positive.</p>
                <p><strong>Step 3: Selective Plating</strong></p>
                <p>ALOA (Agar Listeria ottaviani Agosti) ya PALCAM agar par plate karein. ALOA mein chromogenic substrate: L. monocytogenes blue-green colonies with opaque halo (lecithinase activity). PALCAM: grey-green colonies with black precipitate.</p>
                <p><strong>Step 4: Confirmation</strong></p>
                <p>TSYEA par suspect colonies subculture. Biochemical tests: Hemolysis on blood agar (beta-hemolytic), CAMP test, carbohydrate utilization, motility at 25°C (characteristic tumbling motility – umbrella pattern in semi-solid agar). API Listeria ya VITEK identification.</p>
            `,
                calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation aur Regulatory Standards</h4>
                <p><strong>Qualitative result:</strong> Presence/absence in 25g sample.</p>
                <p><strong>Quantitative (ISO 11290-2):</strong> Direct plating of sample + enumeration. Log CFU/g mein express karein.</p>
                <div class="overflow-x-auto mt-2">
                  <table class="min-w-full text-sm border border-gray-300">
                    <thead class="bg-gray-100"><tr><th class="border px-3 py-2">Product Category</th><th class="border px-3 py-2">L. monocytogenes Limit</th><th class="border px-3 py-2">Regulation</th></tr></thead>
                    <tbody>
                      <tr><td class="border px-3 py-2">Pasteurized Milk</td><td class="border px-3 py-2">Absent in 25 mL</td><td class="border px-3 py-2">EC 2073/2005</td></tr>
                      <tr><td class="border px-3 py-2">Soft Cheese (RTE)</td><td class="border px-3 py-2">&lt;100 cfu/g (if pH &gt;4.4 aur a<sub>w</sub> &gt;0.92)</td><td class="border px-3 py-2">EC 2073/2005</td></tr>
                      <tr><td class="border px-3 py-2">Hard/Semi-hard Cheese</td><td class="border px-3 py-2">&lt;100 cfu/g</td><td class="border px-3 py-2">EC 2073/2005</td></tr>
                      <tr><td class="border px-3 py-2">Butter, Yoghurt</td><td class="border px-3 py-2">Absent in 25 g (zero tolerance)</td><td class="border px-3 py-2">FSSAI India</td></tr>
                    </tbody>
                  </table>
                </div>
                <p class="mt-2">Environmental Monitoring Program (EMP): Processing facility ki surfaces regular swab testing L. monocytogenes ke liye essential hai. "Harborage sites" (floor drains, conveyor belts, hollow rollers) identify karke eliminate karna critical hai.</p>
              `,
            },
            {
                id: "salmonella_testing",
                title: "Salmonella Detection in Dairy",
                principle:
                    "Salmonella dairy products mein significant pathogen hai particularly dried/powdered products (milk powder, infant formula) mein. Salmonella ki low infectious dose (10–10³ cells) aur dried environment mein extended survival (months to years at low water activity) ise powder manufacturing mein major risk factor banati hai. Detection method: ISO 6579-1:2017. Principle: Selective enrichment → selective plating → biochemical + serological confirmation. Salmonella ki detecting lag phase ko overcome karne ke liye 2-step enrichment (non-selective + selective) use ki jaati hai kyonki injured/stressed cells direct selective media par grow nahi karte.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">ISO 6579-1 Detection Procedure (5-day protocol)</h4>
                <p><strong>Day 1: Non-selective Pre-enrichment</strong></p>
                <p>25g sample + 225 mL Buffered Peptone Water (BPW) = 10⁻¹. 37°C / 18–24h. BPW neutral non-selective medium injured cells ko resuscitate karne ke liye. Milk powder samples: 100g in 1L BPW (1:10 ratio).</p>
                <p><strong>Day 2: Selective Enrichment (Parallel)</strong></p>
                <ul class="list-disc list-outside pl-5 space-y-1">
                  <li>MKTT (Modified Kauffmann-Tetrathionate Broth) ya RVS (Rappaport-Vassiliadis Soy Peptone Broth): Tetrathionate Salmonella ko selectively enrich karta hai other organisms ko inhibit karke. RVS: 41.5°C / 24h; MKTT: 37°C / 24h.</li>
                </ul>
                <p><strong>Day 3: Selective Plating</strong></p>
                <p>XLD (Xylose Lysine Desoxycholate Agar) aur MSRV (Modified Semi-solid Rappaport-Vassiliadis) ya BSA (Brilliant Green Agar). XLD par Salmonella: black centre (H₂S production) with pink/red surrounding halo (lysine decarboxylase positive).</p>
                <p><strong>Day 4–5: Confirmation</strong></p>
                <p>Biochemical: TSI (Triple Sugar Iron – alkaline slant/acid butt/H₂S positive), lysine decarboxylase positive, urease negative. Serological: O antigen aur H antigen agglutination. Automated identification: VITEK, API 20E, MALDI-TOF.</p>
            `,
                calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p><strong>Result:</strong> Presence/absence in 25g sample (qualitative). Salmonella detection = <strong>ZERO TOLERANCE</strong> in all dairy products.</p>
                <p>Dairy products mein Salmonella contamination findings mandatory recall require karta hai. Powdered products mein positive environmental monitoring = production halt aur deep cleaning protocol.</p>
                <p><strong>Rapid PCR Methods:</strong> Real-time PCR (BAX System, GENE-UP, Salmonella PCR kits) 4–8 hours mein qualitative result dete hain enrichment ke baad. ISO 22174:2005 PCR method validated hai. Culture confirmation still needed for regulatory reporting.</p>
              `,
            },
            {
                id: "milk_adulteration_tests",
                title: "Milk Adulteration Detection Tests",
                principle:
                    "Milk adulteration ek serious food fraud problem hai jisme milk ki quality/composition mein illegal manipulation ki jaati hai. Common adulterants: paani milana (dilution), urea milana (non-protein nitrogen se SNF increase), formalin milana (preservation, inhibit bacteria), hydrogen peroxide milana, ammonium sulphate/melamine (protein content artificially increase), neutralizers (NaHCO₃, Na₂CO₃ – acidity hide karna), synthetic milk (urea + detergent + refined oil). These adulterants public health risks paida karte hain aur consumer fraud hai. FSSAI India mein milk adulteration IPC section 272/273 ke under criminal offense hai.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Rapid Field Tests for Common Adulterants</h4>

                <h5 class="font-medium mt-3">1. Paani Milana (SNF/TS detection)</h5>
                <p>Lactometer se specific gravity (1.028–1.032 for pure milk) measure karein. Cryoscopy (freezing point depression – normal: -0.530 to -0.560°C; adulterated with water: less negative).</p>

                <h5 class="font-medium mt-3">2. Formalin Test (Hehner's Test)</h5>
                <p>5 mL milk + concentrated H₂SO₄ carefully layered (do not mix). Purple/violet ring at interface = formalin present (positive). Normal milk: no colour ring.</p>

                <h5 class="font-medium mt-3">3. Hydrogen Peroxide Test</h5>
                <p>5 mL milk + few drops Vanadium pentoxide solution (0.5% in H₂SO₄). Pink colour = H₂O₂ present. Or: para-phenylenediamine test (turns blue with H₂O₂).</p>

                <h5 class="font-medium mt-3">4. Urea Test (DMAB Test)</h5>
                <p>5 mL milk + p-dimethyl amino benzaldehyde (DMAB – 1.6 g in 100 mL concentrated HCl): Yellow colour in 15 min = high urea (added urea, not normal milk urea which is &lt;70 mg/100 mL).</p>

                <h5 class="font-medium mt-3">5. Detergent Test</h5>
                <p>3 mL milk + 5 drops methylene blue solution: Blue colour = detergent present (SDS, SLES, etc.).</p>

                <h5 class="font-medium mt-3">6. Neutralizer Test (Rosalic Acid Test)</h5>
                <p>5 mL milk + 5 mL alcohol + few drops rosalic acid (1% in alcohol): Rose/red colour = sodium carbonate/bicarbonate adulterant. Normal milk: pink colour.</p>

                <h5 class="font-medium mt-3">7. Melamine Detection</h5>
                <p>Rapid test: Rapid melamine test strips (ELISA-based). Confirmatory: HPLC-UV or LC-MS/MS. Melamine artificially raises nitrogen content → false high protein readings in Kjeldahl method.</p>

                <h5 class="font-medium mt-3">8. Synthetic Milk (Urea + Detergent)</h5>
                <p>Salty/bitter taste, soapy lather on shaking, pH &gt; 7, SNF normal but TS/fat ratio abnormal. Microscopy: no fat globules of uniform size.</p>
            `,
                calculation: `
                <h4 class="font-semibold mt-4 mb-2">Regulatory Standards aur Action</h4>
                <p>FSSAI FSS (Food Standards and Safety) Regulations 2011 ke under milk composition minimum standards:</p>
                <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
                  <li>Full cream milk: Fat &ge;6%, SNF &ge;9% (Buffalo milk)</li>
                  <li>Toned milk: Fat &ge;3%, SNF &ge;8.5%</li>
                  <li>Double toned milk: Fat &ge;1.5%, SNF &ge;9%</li>
                  <li>Skim milk: Fat &le;0.5%, SNF &ge;8.7%</li>
                </ul>
                <p class="mt-2">Any adulterant detection = immediate product seizure, FIR, prosecution under FSS Act 2006. Repeat offenses: imprisonment up to 7 years, fine up to Rs. 10 lakh. FSSAI Food Safety Officers random milk sampling program regularly conduct karte hain.</p>
              `,
            },
        ],
    },
};
    en: {
        title: "Common Microbiological Test Methods",
        intro:
            "Several standard microbiological tests are performed to ensure the safety and quality of dairy products. Here is an overview of some important test methods:",
        tests: [
            {
                id: "spc",
                title: "Standard Plate Count (SPC) of Milk",
                principle:
                    "Classically SPC procedures are employed for the determination of Total Plate Count (TPC) or Aerobic Plate Count (APC) or Total Viable Count (TVC). SPC is a standard method with which other screening tests are compared.",
                procedure: `
              <h4 class="font-semibold mt-4 mb-2">Preparation of Diluent-Phosphate Buffer Solution</h4>
              <p><strong>Stock Solution:</strong></p>
              <ul class="list-disc list-outside pl-5 space-y-1">
                <li>Potassium dihydrogen phosphate: 42.5g</li>
                <li>Distilled Water: 1000ml</li>
              </ul>
              <p>Dissolve the salt in 500ml distilled water. Adjust the pH using 1N NaOH or HCl solution so that after sterilization it will be 7.2 at 25°C. Dilute to 1000ml. Distribute in screw capped sample bottles. Sterilize them at 121°C for 15 minutes. Store the stock solution under refrigeration.</p>
              <p><strong>Bench Solution:</strong> Add 1ml of stock solution to 1000ml of water and use as diluent. Dispense 9 ml of diluent into test tubes. Plug the tubes and sterilize by autoclaving at 121°C for 15 minutes.</p>
              
              <h4 class="font-semibold mt-4 mb-2">Preparation of Medium:</h4>
              <p>Plate Count Agar or Standard Method Agar is used. Prepare the medium by dissolving the ingredients in distilled water. Adjust the pH of the medium, so that after sterilization it will be 7.0 ± 0.2 at 25°C.</p>

              <h4 class="font-semibold mt-4 mb-2">Preparation of test samples:</h4>
              <p>Shake the sample of raw milk or pasteurized milk thoroughly by inverting it rapidly 25 times to ensure uniform distribution of microorganisms.</p>

              <h4 class="font-semibold mt-4 mb-2">Preparation of decimal dilutions:</h4>
              <p>Take out 1ml of the test sample with a pipette and transfer to 9ml of diluent. Shake this primary dilution for 5 to 10 seconds using a mechanical shaker. Prepare further dilutions like 10⁻², 10⁻³, etc., using a fresh pipette for each dilution.</p>

              <h4 class="font-semibold mt-4 mb-2">Inoculation and Incubation:</h4>
              <p>Transfer 1ml from each suitable dilution to two sterile Petri dishes. Add about 15ml of plate-count medium (at 45°C) to each Petri dish. Mix the inoculum carefully with the medium and allow the mixture to solidify. After complete solidification, invert the prepared dish and incubate in an incubator at 37°C for 48h ± 3h.</p>
            `,
                calculation: `
              <h4 class="font-semibold mt-4 mb-2">Calculation and Expression of Results:</h4>
              <p>Retain dishes which contain between 15 and 300 colonies. Calculate the number of microorganisms, N, present in the test sample using the following equation:</p>
              <code>N = ΣC / { (n1 + 0.1 n2) d }</code>
              <p class="text-xs mt-2">Where ΣC = sum of colonies counted on all the dishes retained, n1 = number of dishes in the first dilution, n2 = number of dishes in the second dilution, d = dilution factor corresponding to the first dilution.</p>
              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <p>A count exceeding 35000 per milliliter of pasteurized milk indicates unsatisfactory conditions. For grading of raw milk the following standards have been suggested:</p>
              <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
                <li><strong>Very Good:</strong> Not exceeding 2,00,000</li>
                <li><strong>Good:</strong> 2,00,000 - 10,00,000</li>
                <li><strong>Fair:</strong> 10,00,000 - 50,00,000</li>
                <li><strong>Poor:</strong> Over 50,00,000</li>
              </ul>
            `,
            },
            {
                id: "coliform",
                title: "Coliform Count",
                principle:
                    "The coliform group of bacteria includes all aerobic and facultative anaerobic, gram-negative, non-spore forming rods which are capable of fermenting lactose with the production of acid and gas within 48 hours at 30°C, 35°C or 37°C. The presence of these coliforms in dairy products is an index of unsanitary conditions or practices during production, processing or storage.",
                procedure: `
              <h4 class="font-semibold mt-4 mb-2">Preparation of Medium:</h4>
              <p>Violet Red Bile Agar (VRBA) medium is used. Prepare the medium by dissolving the ingredients in distilled water. Bring to boil. Avoid overheating. Do not autoclave this medium.</p>
              <h4 class="font-semibold mt-4 mb-2">Inoculation and Incubation:</h4>
              <p>Transfer 1ml from each suitable dilution to two sterile Petri dishes. Add about 15ml of VRBA medium to each Petri dish, mix and allow to solidify. After complete solidification, pour about 4 ml of the VRBA medium on the surface. Incubate them at 37°C for 24h ± 2h. Do not retain dishes containing more than 150 colonies. Typical colonies of coliform are dark or purplish red in colour having a diameter of 0.5 mm or more and are sometimes surrounded by a reddish zone of precipitated bile.</p>
            `,
                calculation: `
              <h4 class="font-semibold mt-4 mb-2">Calculation and Expression of Result:</h4>
              <code>N = ΣC / { (n1 + 0.1 n2) d }</code>
              <p class="text-xs mt-2">Where ΣC = sum of typical colonies counted on all dishes retained, n1 = number of dishes in the first dilution, n2 = number of dishes in the second dilution, d = dilution factor corresponding to the first dilution.</p>
              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <p>Absence of coliform bacteria in 1/100 dilution (0.01 ml) in case of raw milk and in 1/10 dilution (0.1 ml) in case of pasteurized milk is considered as a criterion of satisfactory quality.</p>
            `,
            },
            {
                id: "dmscc",
                title: "Direct Microscopic Somatic Cell Count (DMSCC)",
                principle:
                    "The number of somatic cells in raw milk provides a measure of the presence and extent of mastitis or some other abnormal milk secretion. DMSCC is implemented as one of the officially recognized procedures for confirmation of somatic cell count.",
                procedure: `
              <h4 class="font-semibold mt-4 mb-2">Estimation of single strip factor (SSF):</h4>
              <p>Place a clean stage micrometer on the stage of the microscope. Determine the diameter (d) of the microscopic field in mm. Calculate the SSF: <code>SSF = 10000 / (area of a single strip)</code></p>
              <h4 class="font-semibold mt-4 mb-2">Preparation of milk films:</h4>
              <p>Warm the milk sample to 40°C. Shake well. Take out 0.01ml of milk using a pipette or calibrated loop. Spread the milk evenly over an area of 1cm² of the slide. Dry the films within 5 minutes at 40 to 45°C.</p>
              <h4 class="font-semibold mt-4 mb-2">Defatting, fixing and staining the smear:</h4>
              <p>Immerse the slides in a jar containing Newman's stain for ten minutes. Drain excess stain and allow the slides to dry thoroughly. Wash the slides in water until all the excess dye is washed out. Drain and air dry before examining the film under the microscope.</p>
              <h4 class="font-semibold mt-4 mb-2">Examination and counting of stained films:</h4>
              <p>Examine each film with an oil immersion objective. Count only those somatic cells that have a recognizably stained nucleus. For a single strip count, traverse the entire diameter of the milk film, counting all the cells within the strip and the cells touching one edge of the strip.</p>
            `,
                calculation: `
              <h4 class="font-semibold mt-4 mb-2">Calculation and Expression of Results:</h4>
              <code>DMSCC per ml = Number of somatic cells in a single strip × SSF</code>
              <p>Round the result to two significant figures.</p>
              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <p>The presence of more than 500,000 somatic cells per milliliter of milk is an indication of mastitis.</p>
            `,
            },
            {
                id: "drug_residues",
                title: "Veterinary Drug Residues (Delvotest)",
                principle:
                    "Delvotest is used to detect the presence of drug residues in milk. The principle is based on the germination and growth of spores of a specific bacterium (Bacillus-stearothermophilus var. calidolactis) embedded in agar in addition to nutrients and milk. If the milk is free of inhibitory substances, growth of these spores results in the production of acid, which turns the agar from purple to yellow. However, if the milk contains certain inhibitory substances, these will diffuse into the agar medium and prevent the growth of the bacteria and subsequent acid production and the medium will remain purple in colour.",
                procedure: `
              <h4 class="font-semibold mt-4 mb-2">Procedure:</h4>
              <p>Follow the manufacturer's protocol provided with each kit. Report the result for antibiotic drugs as negative if the colour of the medium has changed to yellow and positive for the presence of antibiotic drugs if the colour remains purple after the specified incubation period. The Delvotest can give a false positive reaction, if the milk has been adulterated with neutralizer, formalin, and hydrogen peroxide.</p>
            `,
                calculation: `
              <h4 class="font-semibold mt-4 mb-2">Interpretation:</h4>
              <p>After adding a 0.1 millilitre milk sample, the ampoule is incubated at 63°C to 66°C for 2.5 hours. In the absence of antimicrobial substances, the colour of the entire solid medium changes to yellow (negative), whereas in the presence of a sufficiently high concentration of antibiotic drugs it remains purple. In the case of doubtful results, the medium turns slightly yellow.</p>
            `,
            },
            {
                id: "yeast_mould",
                title: "Yeast and Mould Count",
                principle:
                    "Yeasts and moulds can grow in acidic environments, so an acidic medium (like Potato Dextrose Agar, PDA) is used for their enumeration.",
                procedure: `
               <ol class='list-decimal list-inside space-y-2 mt-2'>
                <li><strong>Sample & Dilutions:</strong> Prepare serial dilutions as for the SPC method.</li>
                <li><strong>Plating:</strong> Transfer 1ml from each dilution to sterile Petri plates (Spread Plate method is preferred).</li>
                <li><strong>Media:</strong> Plates should contain pre-poured Potato Dextrose Agar (PDA), acidified to a pH of ~3.5 (with tartaric acid) to inhibit bacterial growth.</li>
                <li><strong>Incubation:</strong> Incubate the plates at 22-25°C for 5 days.</li>
                <li><strong>Counting:</strong> Count the colonies of yeasts (typically shiny, round) and moulds (fuzzy, spreading) separately.</li>
              </ol>`,
                calculation:
                    "<code>Yeast/Mould Count/g (or ml) = Average no. of colonies × Dilution factor</code>",
            },
            {
                id: "media_prep",
                title: "Preparation of Media",
                principle: `Various culture media (liquid, semi-solid, and solid) are used in a bacteriological laboratory for the cultivation of microorganisms, for studying their growth and physiological characteristics, and for determining the number of viable organisms.`,
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Adjustment of reaction (pH) of media.</h4>
                <p>The reaction (pH) of the medium is one of the most important factors influencing the growth of microorganisms. Most species of bacteria grow well when the reaction is neither acidic nor alkaline, i.e., neutral (pH 7.0). Yeasts and moulds require a pronounced acid environment (pH 4 to 5) for their growth. In the preparation of culture media, adjustment of the reaction (pH) of the medium to the required level is a very important step.</p>
                <h4 class="font-semibold mt-4 mb-2">Preparation of nutrient broth and nutrient agar.</h4>
                <p>Nutrient broth is a liquid medium commonly used for the cultivation of aerobic organisms and also as a basal medium for a variety of physiological tests. Addition of agar to the broth gives a solid medium (nutrient agar) used for cultivation of several bacterial species and for determination of viable bacterial numbers.</p>
                <h4 class="font-semibold mt-4 mb-2">Preparation of potato dextrose agar.</h4>
                <p>Potato dextrose agar is a selective medium used for the cultivation of yeasts and molds. The use of a potato extract promotes the growth of yeasts and molds, and the low pH (3.5) helps to inhibit the growth of bacteria while favoring the growth of yeasts and molds.</p>
                <h4 class="font-semibold mt-4 mb-2">Preparation of Mac Conkey's bile salt broth and agar and desoxycholate agar.</h4>
                <p>This is a selective medium used for the cultivation of coliform organisms. The presence of sodium taurocholate (bile salt) in the medium lowers surface tension thereby favouring the growth of coliform bacteria. Hence it is of great value for performing the presumptive coliform test for milk and water samples.</p>
            `,
                calculation: "",
            },
            {
                id: "bacteriology_air",
                title: "Bacteriology of Air",
                principle:
                    "Air is not a natural environment for the growth and reproduction of micro-organisms but a few types of organisms (e.g. aerobic spore formers, micrococci, mold spores) may be found in association with dust particles suspended in the air. A knowledge of the numbers and types of micro-organisms present in the atmosphere inside dairies, cattle byres and food factories, is very important for controlling contamination of milk and milk products.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure :-</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Pour two plates with melted nutrient agar and two plates with sabouraud agar. Allow the media to set and harden.</li>
                    <li>Remove the tops from the plates.</li>
                    <li>Place one plate of each medium on the floor of the milking shed etc. and allow them to be exposed for 5 minutes. Immediately replace the tops.</li>
                    <li>Place one plate of each medium on the laboratory bench, allow the plates to be exposed for 15 minutes and immediately replace the tops.</li>
                    <li>Incubate the nutrient agar plates at 37°C for 2 days and the sabouraud agar plates at 22°C for 3 to 4 days.</li>
                    <li>At the end of the incubation period count the number of colonies in each plate.</li>
                </ol>
            `,
                calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Number of organisms per c.ft. per minute should not exceed one for satisfactory atmosphere.</p>
            `,
            },
            {
                id: "sterility_equipment",
                title: "Assessing Sterility of Plant and Equipment",
                principle:
                    "The sanitary condition of plant and equipment is tested by applying the swab technique. In this method a sterile cotton swab (wetted with buffer solution) is rubbed over the surface of the equipment and the bacterial cells removed from the surface are transferred into sterile buffer solution and their numbers estimated by standard plate count.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure :-</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Press the swab with a rolling motion against the side of the glass tube to remove the excess liquid and take it out of the tube.</li>
                    <li>Rub the swab with heavy pressure back and forth over the area to be examined so that all parts of the surface are treated twice.</li>
                    <li>After rubbing the required area return the swab to the solution in the tube in which it was originally placed.</li>
                    <li>Allow the swab to be immersed in the liquid for 5 minutes and mix by swirling the swab vigorously in the solution 6 times.</li>
                    <li>Prepare 1/10 dilution of the sample and plate 1ml portions of the swab sample and the dilution in duplicate.</li>
                    <li>Incubate the plates at 37°C for 48 hours.</li>
                </ol>
            `,
                calculation: `
                <p>The average of the counts in duplicate plates, multiplied by 25, gives the colony count of the total area swabbed. Express the result as colony count per 900 sq.cm area.</p>
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Colony Count per 900 sq.cm area | Sterility</p>
                <ul class="list-disc list-outside pl-5 space-y-1">
                    <li>Less than 5,000: Satisfactory</li>
                    <li>5,000 to 25,000: Fairly satisfactory</li>
                    <li>More than 25,000: Unsatisfactory</li>
                </ul>
            `,
            },
            {
                id: "sterility_bottles",
                title: "Assessing Sterility of Milk Bottles",
                principle:
                    "The sanitary condition (sterility) of milk bottles is tested by the rinse technique. In this method the bottle is rinsed with a known amount of sterile Ringer's or phosphate buffer solution to remove the bacterial cells remaining on the surface and their number estimated by taking standard plate counts of the rinse solutions.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure :-</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Add 20ml of Ringer's or buffer solution to the bottle and replace the bung.</li>
                    <li>Hold the bottle horizontally, rotate gently 12 times in one direction and also shake lengthwise 12 times to wet the whole of the internal surface.</li>
                    <li>Allow the bottle to stand for 15 to 30 minutes and again gently rotate 12 times to wet the internal surface thoroughly.</li>
                    <li>Transfer 1ml and 5ml portions of the rinse solution to two sets of petridishes in duplicate, pour the agar medium, and incubate the plates at 37°C for 48 hours.</li>
                </ol>
            `,
                calculation: `
                <p>The average of the counts in duplicate plates multiplied by 20 (for 1ml rinse) and by 4 (for 5ml rinse), gives the colony count per bottle.</p>
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Colony count of more than one colony per ml of the capacity of the bottle is an indication of unsatisfactory sterility.</p>
            `,
            },
            {
                id: "sterility_cans",
                title: "Assessing Sterility of Milk Cans",
                principle: "The sanitary condition of milk can is tested by the rinse technique.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Procedure :-</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Make a visual inspection of each can.</li>
                    <li>Pour 500ml of sterile Ringer's or buffer solution over the inside of the lid into the can.</li>
                    <li>Replace the lid, lay the can on its side and roll it to and fro so that it makes 12 complete revolutions.</li>
                    <li>Pour the rinse sample from the can into a sterile bottle or flask.</li>
                    <li>Prepare 1/10 dilution of the sample and plate 1ml of the sample and the dilution in duplicate.</li>
                    <li>Incubate the plates at 37°C for 48 hours.</li>
                </ol>
            `,
                calculation: `
                <p>The average of the counts in duplicate plates (multiplied by 10 in the case of 1/10 dilution) represents the colony count per ml of the rinse sample.</p>
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Colony Count per litre capacity | Sterility</p>
                <ul class="list-disc list-outside pl-5 space-y-1">
                    <li>Less than 1,000: Satisfactory</li>
                    <li>1,000 to 5,000: Fairly satisfactory</li>
                    <li>More than 5,000: Unsatisfactory</li>
                </ul>
            `,
            },
            {
                id: "fermented_products",
                title: "Microbiological Analysis of Fermented Milk Products",
                principle:
                    "The quality of dahi and other fermented milk preparations is likely to be seriously impaired if undesirable microorganisms (e.g. coliform bacteria, yeasts, molds) gain entry during manufacture.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Presumptive Coliform Test</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Prepare 1:10 and 1:100 dilutions of the dahi sample.</li>
                    <li>Transfer 1g portions of dahi and its dilutions into Mac Conkey's broth tubes in triplicate.</li>
                    <li>Incubate the tubes for 24 hours at 37°C and observe for the production of acid and gas.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Yeast and mold count</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Transfer 10 gram of dahi to 90 ml dilution blank to get 1:10 dilution.</li>
                    <li>Prepare further dilutions and plate on Potato Dextrose Agar (pH 3.5).</li>
                    <li>Incubate the plates at 21°C or 25°C for 5 days.</li>
                    <li>Count the number of colonies and calculate the number per gram.</li>
                </ol>
            `,
                calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Dahi of good quality should give a negative coliform test in 1/10 dilution. If yeast and mold count exceeds 100 per gram, poor quality is indicated.</p>
            `,
            },
            {
                id: "starter_cultures",
                title: "Starter Cultures",
                principle:
                    "Selected strains of lactic acid bacteria are used as starter cultures in the manufacture of several milk products. It is necessary to test periodically the activity of the cultures and their ability to produce acid or flavour compounds.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Acidity test:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Transfer 0.3ml of culture to 10ml of skim milk.</li>
                    <li>Incubate at 37°C for 3.5 hours.</li>
                    <li>Titrate against 0.1 N NaOH solution and calculate acidity.</li>
                </ol>
                <h4 class="font-semibold mt-4 mb-2">Dye Reduction Test:</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Transfer 1ml of culture to 10ml of sterile skim milk.</li>
                    <li>Add one ml MBR-solution and incubate at 37°C. Note the time of decolourisation.</li>
                </ol>
                 <h4 class="font-semibold mt-4 mb-2">Creatine Test (for diacetyl):</h4>
                <ol class="list-decimal list-outside pl-5 space-y-1">
                    <li>Transfer about 2-2.5ml of culture into a test tube and add a small quantity of creatine (1-2 mg).</li>
                    <li>Add equal quantity (2 to 2.5ml) of 30% potassium hydroxide solution and shake.</li>
                    <li>Observe for the formation of a pink band on the surface of milk and the time taken.</li>
                </ol>
            `,
                calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Acidity of 0.35% or more indicates a satisfactory culture. Methylene blue reduction time of less than 35 minutes is very good. Formation of a pink band in the Creatine test indicates active flavour production.</p>
            `,
            },
            {
                id: "cream_analysis",
                title: "Bacteriological Analysis of Cream",
                principle:
                    "Since cream is susceptible to contamination from various sources during its production, rapid growth of microorganisms occurs if it is held at warm temperatures during storage. The methods of bacteriological analysis of cream and the interpretation of results are similar to those adopted for milk.",
                procedure: `
                <h4 class="font-semibold mt-4 mb-2">Standard Plate Count of Cream</h4>
                <p>Prepare dilutions and plate on standard plate count agar. Incubate at 37°C for 48 hours.</p>
                <h4 class="font-semibold mt-4 mb-2">Presumptive Coliform test for Cream</h4>
                <p>Plate on Violet Red Bile Agar (VRBA) and incubate at 37°C for 24-48 hours. Count typical colonies.</p>
                <h4 class="font-semibold mt-4 mb-2">Methylene blue reduction test for cream</h4>
                <p>Use triple concentration Methylene blue solution and incubate at 37°C. Note the time of decolourisation.</p>
            `,
                calculation: `
                <h4 class="font-semibold mt-4 mb-2">Interpretation</h4>
                <p>Standards for raw and pasteurized cream have been suggested based on SPC, coliform test, and MBRT results.</p>
            `,
            },
        ],
    }
};

    
