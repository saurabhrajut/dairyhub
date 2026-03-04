
export const milkPowderContent = {
    en: {
        title: "Milk Powder Processing",
        subTopics: {
            smp: {
                title: "A. Skimmed Milk Powder (SMP) Processing",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Skimmed Milk Powder</h3>
                    <p>Skimmed Milk Powder (SMP) is a highly versatile dairy ingredient produced by removing water from pasteurized skim milk. The process reduces the water activity (a<sub>w</sub>) from approximately 0.997 in fluid milk to below 0.3 in the finished powder, effectively inhibiting microbial growth and enzymatic degradation. Due to its long shelf life (12–18 months under proper conditions), ease of transport, high protein content (~36%), and low fat content (≤1.5%), SMP is widely used in the manufacturing of reconstituted milk, yoghurts, ice cream, bakery products, confectionery, infant formula base, and as a protein fortifier in numerous food systems.</p>
                    <p class="mt-2">Chemically, SMP is a complex matrix of casein micelles (~80% of total protein), whey proteins (~20%), lactose (~52%), minerals (~8%), and residual moisture. The state of these components—particularly the degree of whey protein denaturation and the physical state of lactose (amorphous vs. crystalline)—is critically determined by the processing parameters and directly governs the powder's functional properties such as solubility, heat stability, foaming, and emulsification capacity.</p>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Typical Composition of SMP</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Component</th>
                                    <th class="p-2 border">Typical Range (%)</th>
                                    <th class="p-2 border">Significance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Protein (N × 6.38)</td><td class="p-2 border">34–37</td><td class="p-2 border">Primary functional component; casein:whey ratio ~80:20</td></tr>
                                <tr><td class="p-2 border">Lactose</td><td class="p-2 border">49–54</td><td class="p-2 border">Present predominantly in amorphous glassy state; susceptible to crystallization and Maillard reaction</td></tr>
                                <tr><td class="p-2 border">Fat</td><td class="p-2 border">0.6–1.25</td><td class="p-2 border">Residual fat; primarily entrapped within protein matrix</td></tr>
                                <tr><td class="p-2 border">Moisture</td><td class="p-2 border">3.0–4.5</td><td class="p-2 border">Critical for storage stability; relates to glass transition temperature (T<sub>g</sub>)</td></tr>
                                <tr><td class="p-2 border">Ash (minerals)</td><td class="p-2 border">7.5–8.5</td><td class="p-2 border">Ca, P, Mg, K, Na; Ca:P ratio ~1.3:1</td></tr>
                                <tr><td class="p-2 border">Titratable Acidity (% lactic acid)</td><td class="p-2 border">≤1.5 (of reconstituted milk)</td><td class="p-2 border">Indicator of raw milk quality and microbial activity</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Regulatory Standards for SMP</h3>
                    <p>Several national and international bodies have laid down standards for SMP to ensure quality, safety, and fair trade practices.</p>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">FSSAI (India)</th>
                                    <th class="p-2 border">Codex Alimentarius (CODEX STAN 207-1999)</th>
                                    <th class="p-2 border">IS 13334 (Part 2) / BIS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border"><strong>Moisture (max, %)</strong></td><td class="p-2 border">5.0</td><td class="p-2 border">5.0</td><td class="p-2 border">5.0</td></tr>
                                <tr><td class="p-2 border"><strong>Milk Fat (max, % m/m)</strong></td><td class="p-2 border">1.5</td><td class="p-2 border">1.5</td><td class="p-2 border">1.5</td></tr>
                                <tr><td class="p-2 border"><strong>Milk Protein in SNF (min, %)</strong></td><td class="p-2 border">34.0</td><td class="p-2 border">34.0</td><td class="p-2 border">34.0</td></tr>
                                <tr><td class="p-2 border"><strong>Insolubility Index (max, ml)</strong></td><td class="p-2 border">2.0</td><td class="p-2 border">2.0 (spray), 1.0 (roller)</td><td class="p-2 border">2.0</td></tr>
                                <tr><td class="p-2 border"><strong>Total Ash (max, %)</strong></td><td class="p-2 border">8.2</td><td class="p-2 border">—</td><td class="p-2 border">8.2</td></tr>
                                <tr><td class="p-2 border"><strong>Scorched Particles (max, mg)</strong></td><td class="p-2 border">—</td><td class="p-2 border">22.5 (Disc B) / 15.0 (Disc A)</td><td class="p-2 border">15.0 (Disc B)</td></tr>
                                <tr><td class="p-2 border"><strong>TPC (max, cfu/g)</strong></td><td class="p-2 border">40,000</td><td class="p-2 border">50,000</td><td class="p-2 border">40,000</td></tr>
                                <tr><td class="p-2 border"><strong>Coliforms (max, cfu/g)</strong></td><td class="p-2 border">10</td><td class="p-2 border">10</td><td class="p-2 border">10</td></tr>
                                <tr><td class="p-2 border"><strong>Salmonella (/25g)</strong></td><td class="p-2 border">Absent</td><td class="p-2 border">Absent in 25g</td><td class="p-2 border">Absent</td></tr>
                                <tr><td class="p-2 border"><strong>Listeria monocytogenes (/25g)</strong></td><td class="p-2 border">Absent</td><td class="p-2 border">Absent in 25g</td><td class="p-2 border">Absent</td></tr>
                                <tr><td class="p-2 border"><strong>S. aureus (max, cfu/g)</strong></td><td class="p-2 border">50</td><td class="p-2 border">—</td><td class="p-2 border">50</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Heat Classification of SMP (ADPI / Codex)</h3>
                    <p>SMP is classified based on the severity of heat treatment applied before drying, quantified by the <strong>Whey Protein Nitrogen Index (WPNI)</strong>. The WPNI measures undenatured whey protein nitrogen remaining per gram of SMP. Higher pre-heat treatments denature more whey proteins, yielding a lower WPNI value.</p>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Classification</th>
                                    <th class="p-2 border">WPNI (mg/g SMP)</th>
                                    <th class="p-2 border">Typical Pre-heat Treatment</th>
                                    <th class="p-2 border">β-Lactoglobulin Denaturation (%)</th>
                                    <th class="p-2 border">Primary Applications</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border"><strong>Low Heat (LH)</strong></td><td class="p-2 border">≥ 6.0</td><td class="p-2 border">70°C / 15 sec (HTST only)</td><td class="p-2 border">&lt; 10</td><td class="p-2 border">Cheese making, cultured products, high-protein beverages, infant formula</td></tr>
                                <tr><td class="p-2 border"><strong>Medium Heat (MH)</strong></td><td class="p-2 border">1.51 – 5.99</td><td class="p-2 border">85°C / 1–2 min or 90°C / 30 sec</td><td class="p-2 border">10–75</td><td class="p-2 border">Ice cream, confectionery, general-purpose ingredient</td></tr>
                                <tr><td class="p-2 border"><strong>High Heat (HH)</strong></td><td class="p-2 border">≤ 1.5</td><td class="p-2 border">90–120°C / 2–10 min or DSI 120°C / 2 sec</td><td class="p-2 border">&gt; 80–95</td><td class="p-2 border">Bakery, recombined evaporated milk, meat products (high heat stability)</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2 text-sm text-gray-600"><strong>Scientific Basis:</strong> β-Lactoglobulin (β-Lg), comprising ~50% of total whey protein, has a denaturation temperature onset of ~78°C. Upon thermal unfolding, exposed thiol groups (-SH) of β-Lg form disulfide bonds with κ-casein on the micelle surface, fundamentally altering the colloidal behavior of the reconstituted milk. In high-heat SMP, the extensive casein–whey protein complex improves heat stability (e.g., resists coagulation at UHT/sterilization temperatures), while low-heat SMP retains native whey protein functionality critical for rennet coagulation and acid gelation.</p>

                    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of SMP with Food Safety Controls</h2>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for SMP Production</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Raw Milk Reception & Quality Testing <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Chilled Storage (≤4°C, max 24–48 hrs) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Pre-heating (45–55°C) & Cream Separation <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Pasteurization of Skim Milk (72°C × 15 sec / 63°C × 30 min)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1 (Biological)</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Pre-heating / Forewarming (70–120°C × 2 sec to 20 min)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2 (Biological + Quality)</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Multi-Effect Falling-Film Evaporation (to 45–52% TS) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Concentrate Holding & Homogenization (optional for SMP) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Spray Drying (Inlet: 180–220°C; Outlet: 80–98°C)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3 (Biological + Chemical)</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Fluidized Bed Drying / Cooling (Vibro-Fluidizer) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Fines Return to Drying Chamber (for Agglomeration / Instantization) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Powder Separation (Cyclones / Bag Filters) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Sifting (Vibro-Sifter, 300–500 µm screen) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP (Physical Hazard)</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-red-100 border border-red-300 rounded"><strong>Metal Detection / X-ray Inspection</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-4 (Physical)</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging (Multi-layer bags / N₂ flushing if required) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Storage (Cool, dry: ≤25°C, RH &lt;65%) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Scientific Explanation of Processing Steps</h3>
                    <ol class="list-decimal list-outside pl-5 space-y-6">
                        <li>
                            <strong>Milk Reception & Quality Assessment (PRP):</strong>
                            <p class="mt-1">High-quality raw milk is the foundation of quality powder. This is a <strong>Prerequisite Programme (PRP)</strong>. All incoming milk is subjected to rapid platform tests:</p>
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                <li><strong>Organoleptic test:</strong> Visual assessment for color, odor, and general appearance. Rejection of milk with off-flavors, abnormal color, or visible contamination.</li>
                                <li><strong>Clot-on-boiling (COB) test:</strong> Detects high-acid or colostrum milk that would coagulate during heat treatment.</li>
                                <li><strong>Alcohol test (68–75% ethanol):</strong> Assesses protein stability. Milk that clots indicates poor heat stability (high acidity, high ionic calcium, or colostrum). Based on Ramsdell's principle—ethanol reduces the dielectric constant, destabilizing the colloidal calcium phosphate.</li>
                                <li><strong>Acidity test (titrable acidity):</strong> Normal bovine milk: 0.13–0.16% lactic acid. Values > 0.18% indicate microbial fermentation.</li>
                                <li><strong>Fat & SNF (Gerber/Milkoscan):</strong> Determines payment and process routing.</li>
                                <li><strong>Antibiotic residue screening (Delvotest, SNAP test):</strong> β-lactam, tetracycline, sulfonamide screening. Positive lots are rejected.</li>
                                <li><strong>Somatic Cell Count (SCC):</strong> Indicator of udder health. SCC >400,000 cells/mL indicates subclinical mastitis; such milk has elevated plasmin, lipase, and immunoglobulins that reduce powder quality and shelf life.</li>
                                <li><strong>Methylene Blue Reduction Test (MBRT):</strong> Milk should not decolorize before 4 hours (Grade I). Reflects the microbial load indirectly—viable bacteria reduce the dye via their metabolic reductases.</li>
                                <li><strong>Adulterant screening:</strong> Urea, starch, maltodextrin, hydrogen peroxide, neutralizers (sodium bicarbonate, NaOH), detergents.</li>
                                <li><strong>Aflatoxin M1 testing (periodic):</strong> FSSAI limit: 0.5 µg/kg; Codex limit: 0.5 µg/kg. Aflatoxin M1 is a hydroxylated metabolite of Aflatoxin B1, excreted in milk when cattle consume contaminated feed.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Chilled Storage (PRP):</strong>
                            <p class="mt-1">Raw milk is cooled to ≤4°C within 2–3 hours of reception and stored in insulated silos. At this temperature, psychrotrophic bacteria (e.g., <em>Pseudomonas fluorescens</em>, <em>P. fragi</em>) can still grow, producing heat-stable extracellular proteases and lipases (active even after UHT treatment) that cause bitterness, gelation, and rancidity in the final powder. Therefore, cold storage should not exceed 48 hours. The generation time of psychrotrophs at 4°C is ~12–18 hours, and significant enzymatic activity occurs above 10<sup>6</sup> cfu/mL.</p>
                        </li>
                        <li>
                            <strong>Pre-heating & Cream Separation (oPRP):</strong>
                            <p class="mt-1">Milk is warmed to 45–55°C in a plate heat exchanger (PHE) to reduce viscosity and optimize separation efficiency. At this temperature, fat exists in a partially liquid state, facilitating coalescence in the centrifugal separator.</p>
                            <p class="mt-1"><strong>Centrifugal Separator:</strong> Modern hermetic disc-stack separators operate at 6,000–8,000 rpm, generating centrifugal forces up to 6,000–8,000 × g. The principle relies on Stokes' Law:</p>
                            <p class="mt-1 text-center font-mono">v = [d²(ρ<sub>p</sub> − ρ<sub>f</sub>) × ω²r] / 18η</p>
                            <p class="mt-1 text-sm text-gray-600">Where v = separation velocity, d = fat globule diameter, ρ<sub>p</sub> and ρ<sub>f</sub> = densities of plasma and fat, ω = angular velocity, r = radial distance, η = viscosity. Larger fat globules separate faster. The separator reduces skim milk fat to ~0.05–0.1%.</p>
                            <p class="mt-1">This step is an <strong>oPRP</strong> because effective separation controls the fat content—a quality parameter and contributes to the oxidative stability of the final powder. It also serves as a clarification step, removing somatic cells, debris, and some spores (bactofugation principle).</p>
                        </li>
                        <li>
                            <strong>Pasteurization (CCP-1 — Biological Hazard):</strong>
                            <p class="mt-1">The skim milk is pasteurized using HTST (High Temperature Short Time: 72°C × 15 sec) or holder method (63°C × 30 min). This is a <strong>Critical Control Point (CCP-1)</strong>.</p>
                            <p class="mt-1"><strong>Scientific basis:</strong> Pasteurization is designed to achieve a minimum 5-log<sub>10</sub> (99.999%) reduction of <em>Coxiella burnetii</em>, the most heat-resistant non-spore-forming pathogen in milk (D<sub>72°C</sub> = 0.5–1.0 sec). At 72°C × 15 sec, all vegetative pathogens (<em>Salmonella</em>, <em>E. coli</em> O157:H7, <em>Listeria monocytogenes</em>, <em>Campylobacter</em>, <em>Mycobacterium bovis</em>) are destroyed.</p>
                            <p class="mt-1"><strong>Monitoring:</strong> Continuous recording of temperature by calibrated RTD (Resistance Temperature Detector) sensors at the exit of the holding tube. Flow diversion valve (FDV) automatically diverts under-processed milk back to the balance tank if temperature falls below set point.</p>
                            <p class="mt-1"><strong>Verification:</strong></p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Alkaline Phosphatase (ALP) test:</strong> Must be negative (≤350 mU/L per Codex). ALP is a naturally occurring enzyme in raw milk with D<sub>72°C</sub> ≈ 3 sec. Its inactivation confirms adequate pasteurization.</li>
                                <li><strong>Lactoperoxidase (LPO) test:</strong> Should be positive after HTST pasteurization (LPO D<sub>72°C</sub> ≈ 30 sec; inactivated at >80°C). A positive LPO with negative ALP confirms proper HTST without excessive heat treatment.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Pre-heating / Forewarming (CCP-2 — Biological + Quality):</strong>
                            <p class="mt-1">Before evaporation, the pasteurized skim milk is subjected to a specific, controlled heat treatment beyond pasteurization. This is a <strong>CCP-2</strong> because it provides additional microbiological safety (especially reducing thermophilic spore counts) and critically determines the heat classification (LH, MH, HH) and functional properties of the final powder.</p>
                            <div class="overflow-x-auto mt-2">
                                <table class="w-full text-left border-collapse text-sm">
                                    <thead class="bg-muted">
                                        <tr>
                                            <th class="p-2 border">Target Heat Class</th>
                                            <th class="p-2 border">Temperature × Time</th>
                                            <th class="p-2 border">Equipment</th>
                                            <th class="p-2 border">Key Protein Changes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td class="p-2 border">Low Heat</td><td class="p-2 border">72°C × 15 sec (pasteurization only)</td><td class="p-2 border">PHE</td><td class="p-2 border">Minimal denaturation (&lt;10% β-Lg). Native whey proteins retained.</td></tr>
                                        <tr><td class="p-2 border">Medium Heat</td><td class="p-2 border">85–90°C × 30 sec to 2 min</td><td class="p-2 border">PHE / THE</td><td class="p-2 border">Moderate denaturation (30–75% β-Lg). Intermediate functionality.</td></tr>
                                        <tr><td class="p-2 border">High Heat</td><td class="p-2 border">90–95°C × 5–10 min or 120°C × 1–2 sec (DSI)</td><td class="p-2 border">THE / DSI</td><td class="p-2 border">Extensive denaturation (>80% β-Lg). Formation of κ-casein/β-Lg complexes via disulfide interchange. Sulfhydryl groups (-SH) exposed → antioxidant effect.</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p class="mt-2"><strong>Direct Steam Injection (DSI):</strong> Live culinary steam (≥99.5% quality, food-grade) is injected directly into the milk, achieving near-instantaneous heating to 120–150°C. This is followed by flash cooling in a vacuum vessel, which also removes the added water (steam condensate), dissolved gases, and some volatile off-flavors. DSI provides very precise temperature control and minimizes thermal damage compared to indirect methods at equivalent temperatures. It is preferred for high-heat SMP production.</p>
                            <p class="mt-2"><strong>Tubular Heat Exchanger (THE):</strong> Used for high-viscosity or high-temperature applications where PHE gasket limitations apply. THE provides longer holding times at lower temperatures for medium/high-heat classification.</p>
                        </li>
                        <li>
                            <strong>Multi-Effect Falling-Film Evaporation (oPRP):</strong>
                            <p class="mt-1">This is the most energy-efficient step for water removal and a critical <strong>oPRP</strong>. The pre-heated skim milk is concentrated from ~9% TS to 45–52% TS in a multi-effect evaporator (typically 3 to 7 effects). Concentrating before spray drying is essential because evaporation is approximately 10× more energy-efficient than spray drying for water removal (evaporator: ~0.15–0.25 kJ/kg water; spray dryer: ~3.5–5.0 kJ/kg water in terms of steam economy).</p>
                            
                            <h4 class="font-semibold mt-3 mb-1">Principle of Multi-Effect Evaporation:</h4>
                            <p>Each "effect" operates at a progressively lower pressure and temperature. Fresh steam drives the first effect. The vapor generated from boiling milk in the first effect serves as the heating medium for the second effect, and so on. This cascade achieves a steam economy of 3–7 kg water evaporated per kg steam consumed (vs. 1.0 for single-effect).</p>
                            
                            <h4 class="font-semibold mt-3 mb-1">Key Equipment Components:</h4>
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                                <li><strong>Falling-Film Evaporator (Calandria):</strong> This is the heart of each effect. It consists of a vertical tube bundle (tubes typically 50 mm diameter × 8–12 m length) enclosed in a shell. Steam flows on the shell side; milk is distributed as a thin film (1–3 mm) on the inner surface of the tubes by a distribution plate at the top, and flows downward by gravity. The large surface area and thin film enable rapid heat transfer (overall U = 1,500–3,000 W/m²·K) at short residence times (seconds per pass), minimizing thermal damage. Boiling occurs at low temperatures (40–70°C) due to the reduced pressure.</li>
                                <li><strong>Vapor Separator (Cyclone):</strong> Each effect has a separator to disengage the concentrated milk from the generated water vapor, preventing liquid carryover (entrainment) into the next effect's heating medium.</li>
                                <li><strong>Thermocompressor (TVR) / Mechanical Vapor Recompressor (MVR):</strong>
                                    <ul class="list-circle pl-5 mt-1 space-y-1">
                                        <li><strong>TVR (Thermal Vapor Recompression):</strong> A steam-jet thermocompressor uses high-pressure motive steam to entrain and recompress low-pressure vapor from a later effect, recycling it as a heating medium. Increases steam economy by 1.5–2×.</li>
                                        <li><strong>MVR (Mechanical Vapor Recompression):</strong> An electrically driven compressor (turbo-fan) recompresses all the vapor from the single effect to a higher pressure/temperature, eliminating the need for live steam entirely after startup. Achieves steam economies equivalent to 20–40 effects. Capital-intensive but highly energy-efficient; used in large-scale plants.</li>
                                    </ul>
                                </li>
                                <li><strong>Surface Condenser:</strong> The final vapor from the last effect is condensed in a surface condenser (shell-and-tube type) using cooling water. This condenser creates and maintains the vacuum in the system. The condensate (cow water) is a pure water stream that can be reused for CIP (cleaning-in-place) or boiler feed water.</li>
                                <li><strong>Vacuum System:</strong> Maintained by the condenser and aided by a liquid ring vacuum pump or steam ejector to remove non-condensable gases (air, CO₂) that would otherwise reduce heat transfer efficiency and raise the boiling point.</li>
                            </ul>
                            
                            <h4 class="font-semibold mt-3 mb-1">Critical Quality Considerations During Evaporation:</h4>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Viscosity management:</strong> As concentration increases beyond ~45% TS, viscosity rises sharply (exponentially above 48–50% TS for skim milk), which reduces heat transfer and flow rates. Age-thickening of the concentrate (due to casein micelle interaction) can further increase viscosity during holding.</li>
                                <li><strong>Maillard reaction onset:</strong> At elevated temperatures and high concentration, the Maillard reaction between lactose (reducing sugar) and lysine residues of proteins accelerates, causing browning, loss of nutritional value (reduced available lysine), and off-flavors. Operating under vacuum at low temperatures (40–70°C) minimizes this.</li>
                                <li><strong>Fouling:</strong> Protein and mineral deposits on evaporator tubes reduce heat transfer. Regular CIP cycles (every 10–20 hours of operation) using alternating alkaline (NaOH 1–2%, 70–80°C) and acid (HNO₃ 0.5–1%, 65–70°C) washes are essential.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Spray Drying (CCP-3 — Biological + Chemical Hazard):</strong>
                            <p class="mt-1">This is the core of the powder manufacturing process and a <strong>CCP-3</strong>. The concentrated milk (~48% TS) is atomized into fine droplets and dried in contact with hot air. The rapid moisture removal converts the liquid concentrate into a free-flowing powder.</p>
                            
                            <h4 class="font-semibold mt-3 mb-1">Stages of Spray Drying:</h4>
                            <p><strong>a) Atomization:</strong> The concentrate is broken into millions of fine droplets (10–200 µm diameter, with mean ~50–80 µm for standard SMP) to maximize the surface-area-to-volume ratio, enabling rapid and uniform drying.</p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Pressure Nozzle Atomization (Single-fluid):</strong> A high-pressure pump (150–300 bar) forces the concentrate through a small orifice (swirl chamber + orifice insert, typically 0.5–2 mm diameter) in a nozzle. The liquid emerges as a thin conical sheet that breaks into droplets due to aerodynamic instability (Rayleigh-Taylor instability). Produces relatively uniform, spherical particles with a dense internal structure. Particle size is controlled by pressure, orifice size, and feed concentration.</li>
                                <li><strong>Two-fluid (Pneumatic) Nozzle:</strong> Compressed air (2–6 bar) is used to shatter the liquid stream. Produces finer droplets but consumes more energy; used for specialty powders.</li>
                                <li><strong>Rotary (Centrifugal) Atomizer:</strong> The concentrate is fed to the center of a high-speed spinning disc (10,000–30,000 rpm, disc diameter 50–200 mm). Centrifugal force spreads the liquid to the edge, forming a thin film that disintegrates into droplets. Produces a wider particle size distribution; better suited for sticky/viscous feeds.</li>
                            </ul>

                            <p class="mt-2"><strong>b) Drying Chamber:</strong> The atomized droplets encounter hot air in a large cylindrical chamber (diameter 6–12 m, height 15–30 m in large installations). Two principal air-flow configurations exist:</p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Co-current flow:</strong> Hot air and droplets travel in the same direction (both enter from the top). The hottest air contacts the wettest droplets, preventing overheating. This is the most common configuration for dairy powders and produces the most heat-sensitive product, as particle temperature never exceeds the outlet air temperature (~80–98°C). The wet-bulb temperature of the drying air determines the droplet temperature during the constant-rate drying period (~45–55°C), and the dry-bulb outlet air temperature (~80–98°C) dictates the final particle temperature and moisture content during the falling-rate period.</li>
                                <li><strong>Counter-current flow:</strong> Air enters from the bottom, product from the top. Hot air contacts the driest powder, achieving lower moisture but risking heat damage. Rarely used alone for dairy.</li>
                                <li><strong>Mixed-flow:</strong> Combines elements of both; used in some compact dryer designs.</li>
                            </ul>

                            <p class="mt-2"><strong>c) Drying Kinetics:</strong> The drying of a droplet proceeds in two phases:</p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Constant Rate Period:</strong> Surface water evaporates freely. The droplet temperature remains at the wet-bulb temperature of the air (~45–55°C). Heat transfer drives evaporation: Q = h·A·(T<sub>air</sub> – T<sub>wb</sub>). This is the dominant phase, during which ~90% of the moisture is removed in milliseconds to seconds.</li>
                                <li><strong>Falling Rate Period:</strong> A dry surface crust forms, and moisture transport becomes diffusion-limited. The particle temperature rises toward the outlet air temperature (80–98°C). This phase determines the final moisture content and is critical for avoiding thermal damage (Maillard browning, protein denaturation, lactose crystallization in SMP). The glass transition temperature (T<sub>g</sub>) of the amorphous lactose matrix becomes relevant here.</li>
                            </ul>

                            <p class="mt-2"><strong>d) Air Heating System:</strong> Inlet air is heated to 180–220°C using:</p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li>Indirect steam heaters (steam coils at 10–15 bar)</li>
                                <li>Direct gas burners (natural gas/LPG) — careful control needed to avoid combustion by-products (NO<sub>x</sub>)</li>
                                <li>Air is filtered through HEPA/EPA filters (EU class H13/E11) to remove microorganisms and particulates before entering the chamber</li>
                            </ul>

                            <h4 class="font-semibold mt-3 mb-1">CCP-3 Hazard Analysis & Controls:</h4>
                            <div class="overflow-x-auto mt-2">
                                <table class="w-full text-left border-collapse text-sm">
                                    <thead class="bg-muted">
                                        <tr>
                                            <th class="p-2 border">Hazard</th>
                                            <th class="p-2 border">Critical Limit</th>
                                            <th class="p-2 border">Monitoring</th>
                                            <th class="p-2 border">Corrective Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td class="p-2 border">Survival of thermophilic spores (B. cereus, B. licheniformis, Clostridium spp.)</td><td class="p-2 border">Outlet air temp ≥ 80°C; Powder moisture ≤ 5.0%</td><td class="p-2 border">Continuous recording of inlet/outlet air temps; online moisture analyzer (NIR)</td><td class="p-2 border">Divert product; increase inlet temp or reduce feed rate; investigate and recalibrate</td></tr>
                                        <tr><td class="p-2 border">Maillard reaction products (chemical – loss of lysine, furosine/HMF formation)</td><td class="p-2 border">Outlet air temp ≤ 98°C; Powder temperature ≤ 45°C at discharge</td><td class="p-2 border">Outlet temp monitoring; periodic furosine/lactulose analysis</td><td class="p-2 border">Reduce inlet air temperature; increase feed flow rate</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h4 class="font-semibold mt-3 mb-1">Thermophilic Spore Contamination — A Key Concern:</h4>
                            <p>Thermophilic spore-forming bacteria (<em>Bacillus stearothermophilus</em>, <em>B. licheniformis</em>, <em>Geobacillus</em> spp.) thrive in the warm, wet zones of evaporators and dryers. They form biofilms in dead legs, gaskets, and on surfaces where temperature is 40–65°C. Spore counts in finished SMP should be &lt;1,000 per gram (customer specifications often &lt;500/g). Control strategies: limiting production run lengths (max 18–20 hours between CIP), proper CIP with sporicide, and avoiding condensation zones.</p>
                        </li>
                        <li>
                            <strong>Fluidized Bed Drying / Cooling (oPRP):</strong>
                            <p class="mt-1">In modern two-stage or three-stage drying systems, the primary spray dryer removes moisture to ~6–8%. The powder then falls into an integrated or external <strong>vibro-fluidized bed</strong> (VFB) where:</p>
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                <li><strong>Second Stage (Drying):</strong> Warm air (60–80°C) gently fluidizes the powder bed, reducing moisture to 3.5–4.5% with much less thermal stress than in the spray chamber. The low air velocity and gentle movement allow for agglomeration if lecithin or steam is applied.</li>
                                <li><strong>Third Stage (Cooling):</strong> Cool dehumidified air (10–20°C) cools the powder to ≤30°C, well below the glass transition temperature (T<sub>g</sub>) of the amorphous lactose (~40–50°C at 3–4% moisture). This is crucial to prevent caking and ensure free-flowing powder.</li>
                            </ul>
                            <p class="mt-2"><strong>Glass Transition Temperature (T<sub>g</sub>):</strong> SMP contains ~52% lactose, which exists in an amorphous (glassy) state after spray drying. T<sub>g</sub> is the temperature at which the amorphous matrix transitions from a rigid glassy state to a rubbery, sticky state. If powder temperature exceeds T<sub>g</sub> (due to high moisture, high temperature, or high humidity), lactose molecules gain mobility, leading to: (i) stickiness and caking, (ii) crystallization of amorphous lactose (releasing bound water, accelerating degradation), and (iii) structural collapse. The Gordon-Taylor equation is used to predict T<sub>g</sub> as a function of moisture content. For SMP at 4% moisture, T<sub>g</sub> ≈ 45–50°C.</p>
                        </li>
                        <li>
                            <strong>Fines Return & Instantization (PRP / oPRP):</strong>
                            <p class="mt-1">Fine particles (&lt;50 µm) collected by cyclones and bag filters are pneumatically conveyed back to the top of the drying chamber or the atomization zone. These fines collide with the wet atomized droplets, forming agglomerated (larger, porous) particles (150–400 µm). This process is called <strong>straight-through agglomeration</strong> and produces "instant" powder with improved reconstitution properties.</p>
                            <p class="mt-1">For enhanced instantization of SMP (which is inherently difficult to wet due to its high protein content and hydrophobic surface), <strong>lecithin (soy or sunflower, 0.1–0.5% by weight)</strong> may be sprayed onto the agglomerated powder in the fluidized bed. Lecithin is an amphiphilic phospholipid that orients at the particle surface with its hydrophilic head outward, dramatically improving wettability (wetting time reduction from >120 sec to &lt;15 sec).</p>
                        </li>
                        <li>
                            <strong>Powder Separation (PRP):</strong>
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                <li><strong>Cyclones:</strong> Centrifugal separators that use the vortex principle to separate powder particles from the exhaust air stream. The air-powder mixture enters tangentially; heavier particles are thrown to the wall and spiral down to a collection hopper, while clean air exits from the top. Collection efficiency: 95–99% for particles >10 µm.</li>
                                <li><strong>Bag Filters (Baghouse):</strong> Fabric filter bags (polyphenylene sulfide, PTFE, polyester) capture the finest particles (&lt;10 µm) that escape cyclones. Collection efficiency: >99.9%. Critical for emission control, product recovery, and preventing environmental contamination. Bags are periodically cleaned by reverse pulse-jet compressed air.</li>
                                <li><strong>Roots Blower (Rotary Lobe Blower):</strong> A positive-displacement blower used to create the necessary air pressure differential (suction/pressure) for pneumatic powder conveying from cyclones to the sifter/packing line. It also aids in maintaining the pressure balance within the drying system.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Sifting (PRP — Physical Hazard Control):</strong>
                            <p class="mt-1">The powder passes through a <strong>vibro-sifter</strong> (vibratory screen separator) with a screen size of 300–500 µm (depending on whether regular or instant grade). This removes oversized particles, lumps, scorched particles, and any foreign matter. It is a PRP for physical hazard control.</p>
                        </li>
                        <li>
                            <strong>Metal Detection / X-Ray Inspection (CCP-4 — Physical Hazard):</strong>
                            <p class="mt-1">An inline metal detector (or increasingly, X-ray inspection system) scans the packaged or in-line product for metallic foreign bodies (from equipment wear, maintenance, or raw material contamination). This is designated as <strong>CCP-4</strong> for physical hazard control.</p>
                            <div class="overflow-x-auto mt-2">
                                <table class="w-full text-left border-collapse text-sm">
                                    <thead class="bg-muted">
                                        <tr>
                                            <th class="p-2 border">Contaminant Type</th>
                                            <th class="p-2 border">Metal Detector Sensitivity (typical)</th>
                                            <th class="p-2 border">X-Ray Sensitivity (typical)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td class="p-2 border">Ferrous metals</td><td class="p-2 border">≥ 1.5 mm</td><td class="p-2 border">≥ 1.0 mm</td></tr>
                                        <tr><td class="p-2 border">Non-ferrous metals (Al, Cu)</td><td class="p-2 border">≥ 2.0 mm</td><td class="p-2 border">≥ 1.5 mm</td></tr>
                                        <tr><td class="p-2 border">Stainless steel (316)</td><td class="p-2 border">≥ 2.5 mm</td><td class="p-2 border">≥ 1.5 mm</td></tr>
                                        <tr><td class="p-2 border">Glass, stone, dense plastic</td><td class="p-2 border">Not detected</td><td class="p-2 border">≥ 2.0–3.0 mm</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                        <li>
                            <strong>Packaging (PRP):</strong>
                            <p class="mt-1">Powder is packed into multi-layer bags (typically 3-ply kraft paper with a polyethylene (PE) inner liner, or 25 kg multi-wall bags) for bulk supply, or into consumer packs (laminated pouches, tin cans with N₂ flush). The PE liner acts as a moisture and oxygen barrier.</p>
                            <p class="mt-1"><strong>Modified Atmosphere Packaging (MAP):</strong> For extended shelf life, headspace air is replaced with nitrogen (N₂) or a N₂/CO₂ mixture using gas flushing. Target residual oxygen: &lt;2% (ideally &lt;1%). This is especially important for WMP but also beneficial for SMP to retard Maillard browning and oxidative degradation of residual fat.</p>
                            <p class="mt-1">Packaging area hygiene (positive air pressure, HEPA-filtered air, controlled access) is a critical PRP to prevent post-process contamination, particularly by <em>Salmonella</em>, <em>Cronobacter sakazakii</em> (formerly <em>Enterobacter sakazakii</em>), and other environmental pathogens.</p>
                        </li>
                        <li>
                            <strong>Storage (PRP):</strong>
                            <p class="mt-1">Finished SMP should be stored in cool (≤25°C), dry (RH &lt;65%), well-ventilated warehouses, away from direct sunlight, odorous materials, and chemicals. Shelf life is typically 12–18 months for SMP and 6–12 months for WMP.</p>
                            <p class="mt-1"><strong>Storage stability factors:</strong></p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Moisture uptake:</strong> Amorphous lactose is hygroscopic. Moisture absorption raises a<sub>w</sub> and depresses T<sub>g</sub>, leading to caking, lactose crystallization, and accelerated Maillard browning. Critical a<sub>w</sub> for lactose crystallization ≈ 0.37–0.44 at 25°C.</li>
                                <li><strong>Maillard browning:</strong> Non-enzymatic reaction between reducing sugars (lactose) and free amino groups (lysine residues). Rate increases with temperature, moisture, and a<sub>w</sub>. Leads to brown discoloration, off-flavors (stale, caramelized), and loss of nutritional value (blocked lysine). Monitored by furosine (early indicator) and HMF (5-hydroxymethylfurfural) levels.</li>
                                <li><strong>Temperature abuse:</strong> Storage above 30°C dramatically accelerates all deteriorative reactions.</li>
                            </ul>
                        </li>
                    </ol>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Quality Testing of Finished SMP</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Test Parameter</th>
                                    <th class="p-2 border">Method</th>
                                    <th class="p-2 border">Typical Specification</th>
                                    <th class="p-2 border">Significance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Moisture</td><td class="p-2 border">IS 11623 / IDF 26 (Oven method, 102°C × 2h) or Karl Fischer</td><td class="p-2 border">≤ 4.0–5.0%</td><td class="p-2 border">Storage stability, T<sub>g</sub></td></tr>
                                <tr><td class="p-2 border">Fat (free fat, total fat)</td><td class="p-2 border">Röse-Gottlieb (IS 12333 / IDF 9C) / Mojonnier</td><td class="p-2 border">Total fat ≤ 1.5%; Free fat: varies</td><td class="p-2 border">Oxidative stability, compliance</td></tr>
                                <tr><td class="p-2 border">Protein (N × 6.38)</td><td class="p-2 border">Kjeldahl (IS 7219 / IDF 20B) / Dumas combustion</td><td class="p-2 border">≥ 34% of SNF</td><td class="p-2 border">Nutritional value, functionality</td></tr>
                                <tr><td class="p-2 border">WPNI</td><td class="p-2 border">ADPI method / Harland-Ashworth (turbidimetric at pH 4.6)</td><td class="p-2 border">LH: ≥6.0; MH: 1.51–5.99; HH: ≤1.5 mg/g</td><td class="p-2 border">Heat classification & end-use suitability</td></tr>
                                <tr><td class="p-2 border">Insolubility Index</td><td class="p-2 border">IDF 129 / ADPI (reconstitute + centrifuge)</td><td class="p-2 border">≤ 1.0–2.0 mL</td><td class="p-2 border">Reconstitution quality</td></tr>
                                <tr><td class="p-2 border">Scorched Particles</td><td class="p-2 border">ADPI / GEA Niro (filter disc comparison)</td><td class="p-2 border">Disc A or B (≤15 mg)</td><td class="p-2 border">Indicator of dryer fouling and process control</td></tr>
                                <tr><td class="p-2 border">Bulk Density (loose/tapped)</td><td class="p-2 border">IDF 134 / graduated cylinder method</td><td class="p-2 border">Regular: 550–650 g/L; Instant: 350–500 g/L</td><td class="p-2 border">Packaging efficiency, reconstitution</td></tr>
                                <tr><td class="p-2 border">Wettability</td><td class="p-2 border">IDF 87 (time for powder to sink below water surface)</td><td class="p-2 border">Instant: ≤ 15 sec; Regular: ≤ 60 sec</td><td class="p-2 border">Consumer convenience</td></tr>
                                <tr><td class="p-2 border">Dispersibility</td><td class="p-2 border">IDF 87 (% dissolved after reconstitution)</td><td class="p-2 border">≥ 85%</td><td class="p-2 border">Reconstitution completeness</td></tr>
                                <tr><td class="p-2 border">Titratable Acidity</td><td class="p-2 border">AOAC / IS 1166 (reconstituted to 10% TS)</td><td class="p-2 border">≤ 0.15% lactic acid (18°T)</td><td class="p-2 border">Raw milk quality indicator</td></tr>
                                <tr><td class="p-2 border">TPC</td><td class="p-2 border">IS 5402 / IDF 100 (pour plate, 30°C × 72h)</td><td class="p-2 border">≤ 40,000 cfu/g</td><td class="p-2 border">Overall hygienic quality</td></tr>
                                <tr><td class="p-2 border">Thermophilic spore count</td><td class="p-2 border">Heat at 80°C × 10 min + pour plate at 55°C × 48h</td><td class="p-2 border">≤ 500–1,000 cfu/g</td><td class="p-2 border">Process hygiene, run length indicator</td></tr>
                                <tr><td class="p-2 border">Coliforms</td><td class="p-2 border">VRBA / IS 5401 (32°C × 24h)</td><td class="p-2 border">≤ 10 cfu/g</td><td class="p-2 border">Post-pasteurization contamination indicator</td></tr>
                                <tr><td class="p-2 border">Salmonella</td><td class="p-2 border">ISO 6579 / BAM (enrichment + PCR/immunoassay)</td><td class="p-2 border">Absent in 25 g (n=5, c=0)</td><td class="p-2 border">Pathogen safety</td></tr>
                                <tr><td class="p-2 border">Cronobacter sakazakii</td><td class="p-2 border">ISO/TS 22964 (for infant formula grade)</td><td class="p-2 border">Absent in 10 g (n=30, c=0)</td><td class="p-2 border">Infant safety</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Comprehensive HACCP Hazard Analysis Summary for SMP</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Step</th>
                                    <th class="p-2 border">Hazard Type</th>
                                    <th class="p-2 border">Specific Hazard</th>
                                    <th class="p-2 border">Classification</th>
                                    <th class="p-2 border">Critical Limit</th>
                                    <th class="p-2 border">Monitoring</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Raw Milk Reception</td><td class="p-2 border">B, C, P</td><td class="p-2 border">Pathogens, antibiotics, aflatoxin M1, physical contaminants</td><td class="p-2 border">PRP</td><td class="p-2 border">—</td><td class="p-2 border">Platform tests, supplier approval, MBRT, antibiotic test</td></tr>
                                <tr><td class="p-2 border">Cold Storage</td><td class="p-2 border">B</td><td class="p-2 border">Psychrotrophic growth, protease/lipase production</td><td class="p-2 border">PRP</td><td class="p-2 border">≤4°C, max 48h</td><td class="p-2 border">Temp recording, duration log</td></tr>
                                <tr><td class="p-2 border">Separation</td><td class="p-2 border">P</td><td class="p-2 border">Physical contamination from separator</td><td class="p-2 border">oPRP</td><td class="p-2 border">—</td><td class="p-2 border">Equipment maintenance, CIP</td></tr>
                                <tr><td class="p-2 border">Pasteurization</td><td class="p-2 border">B</td><td class="p-2 border">Survival of vegetative pathogens</td><td class="p-2 border"><strong>CCP-1</strong></td><td class="p-2 border">≥72°C × 15 sec</td><td class="p-2 border">Continuous temp recording, FDV, ALP test</td></tr>
                                <tr><td class="p-2 border">Pre-heating</td><td class="p-2 border">B</td><td class="p-2 border">Insufficient spore reduction; incorrect heat class</td><td class="p-2 border"><strong>CCP-2</strong></td><td class="p-2 border">Per target heat class (e.g., ≥90°C × 5 min for HH)</td><td class="p-2 border">Temp/time recording, WPNI verification</td></tr>
                                <tr><td class="p-2 border">Evaporation</td><td class="p-2 border">B</td><td class="p-2 border">Thermophilic spore growth in warm zones</td><td class="p-2 border">oPRP</td><td class="p-2 border">Run time ≤18–20h; CIP protocol</td><td class="p-2 border">Run time log, spore count trending</td></tr>
                                <tr><td class="p-2 border">Spray Drying</td><td class="p-2 border">B, C</td><td class="p-2 border">Insufficient drying (spore survival); Maillard products</td><td class="p-2 border"><strong>CCP-3</strong></td><td class="p-2 border">Outlet temp ≥80°C; Moisture ≤5%; Outlet temp ≤98°C</td><td class="p-2 border">Continuous temp, online moisture (NIR)</td></tr>
                                <tr><td class="p-2 border">Fluidized Bed</td><td class="p-2 border">B</td><td class="p-2 border">Recontamination from air; condensation</td><td class="p-2 border">oPRP</td><td class="p-2 border">Air filtration, T<sub>powder</sub> ≤ T<sub>g</sub></td><td class="p-2 border">Air filter integrity, powder temp</td></tr>
                                <tr><td class="p-2 border">Metal Detection</td><td class="p-2 border">P</td><td class="p-2 border">Metal foreign bodies</td><td class="p-2 border"><strong>CCP-4</strong></td><td class="p-2 border">Fe ≥1.5mm, Non-Fe ≥2.0mm, SS ≥2.5mm</td><td class="p-2 border">Test piece validation every 1–2h, reject/alarm log</td></tr>
                                <tr><td class="p-2 border">Packaging</td><td class="p-2 border">B, P</td><td class="p-2 border">Environmental contamination (Salmonella, Cronobacter), physical hazards</td><td class="p-2 border">PRP</td><td class="p-2 border">—</td><td class="p-2 border">Zoning, air monitoring, environmental swabs</td></tr>
                                <tr><td class="p-2 border">Storage</td><td class="p-2 border">C</td><td class="p-2 border">Moisture uptake, Maillard browning, caking</td><td class="p-2 border">PRP</td><td class="p-2 border">≤25°C, RH &lt;65%</td><td class="p-2 border">Temp/RH logging, FIFO, periodic quality checks</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2 text-sm text-gray-600">B = Biological, C = Chemical, P = Physical</p>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Energy Considerations & Sustainability</h3>
                    <p>Milk powder production is energy-intensive. Typical specific energy consumption:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>Evaporation: 0.2–0.4 kWh/kg water removed (with MVR: 0.015–0.02 kWh/kg)</li>
                        <li>Spray Drying: 1.0–1.5 kWh/kg water removed</li>
                        <li>Total energy to produce 1 kg SMP: ~8–12 MJ (including all utilities)</li>
                    </ul>
                    <p class="mt-2">Modern plants employ heat recovery (regeneration in PHE: 90–95%), MVR evaporation, waste heat recovery from dryer exhaust, and CHP (combined heat and power) systems to minimize energy consumption and carbon footprint.</p>
                `
            },
            wmp: {
                title: "B. Whole Milk Powder (WMP) Processing",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Whole Milk Powder</h3>
                    <p>Whole Milk Powder (WMP), also known as full cream milk powder, is produced by removing water from pasteurized, homogenized whole milk. It contains both milk fat (~26–28.5%) and milk solids non-fat (~68–70%), making it a convenient base for reconstituting full cream milk and a key ingredient in confectionery, chocolate, infant formula, bakery products, ice cream, and recombined dairy products (recombined UHT milk, yoghurt, evaporated milk).</p>
                    <p class="mt-2">The presence of approximately 26–28.5% milk fat (predominantly triacylglycerols with ~65% saturated fatty acids, ~30% monounsaturated, and ~5% polyunsaturated) makes WMP production and storage significantly more challenging than SMP. The primary quality challenge is <strong>oxidative deterioration of lipids</strong>, leading to off-flavors (oxidized, tallowy, cardboard-like) through auto-oxidation and photo-oxidation mechanisms. Processing parameters—particularly pre-heat treatment (for sulfhydryl-mediated antioxidant protection), homogenization (to reduce free fat), and packaging (inert atmosphere)—are specifically designed to maximize oxidative stability.</p>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Typical Composition of WMP</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Component</th>
                                    <th class="p-2 border">Typical Range (%)</th>
                                    <th class="p-2 border">Significance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Fat</td><td class="p-2 border">26.0–28.5</td><td class="p-2 border">Primary energy source; determines shelf life (oxidation susceptibility)</td></tr>
                                <tr><td class="p-2 border">Protein (N × 6.38)</td><td class="p-2 border">24.5–27.0</td><td class="p-2 border">Casein:whey ~80:20; forms protective matrix around fat globules</td></tr>
                                <tr><td class="p-2 border">Lactose</td><td class="p-2 border">36–39</td><td class="p-2 border">Amorphous state; hygroscopic; Maillard reactant</td></tr>
                                <tr><td class="p-2 border">Moisture</td><td class="p-2 border">2.5–4.0</td><td class="p-2 border">Optimal at 2.5–3.5% for maximum shelf life (lower than SMP)</td></tr>
                                <tr><td class="p-2 border">Ash</td><td class="p-2 border">5.5–6.5</td><td class="p-2 border">Minerals; Ca, P, K as major elements</td></tr>
                                <tr><td class="p-2 border">Free Fat (% of total fat)</td><td class="p-2 border">1–4 (target &lt;2%)</td><td class="p-2 border">Fat not protected by protein-lactose matrix; highly susceptible to oxidation; key quality parameter</td></tr>
                                <tr><td class="p-2 border">Peroxide Value (meq O₂/kg fat)</td><td class="p-2 border">≤ 0.3 (fresh); &lt;1.0 (acceptable)</td><td class="p-2 border">Primary oxidation indicator</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Regulatory Standards for WMP</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">FSSAI (India)</th>
                                    <th class="p-2 border">Codex (CODEX STAN 207-1999)</th>
                                    <th class="p-2 border">IS 13334 (Part 1) / BIS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border"><strong>Moisture (max, %)</strong></td><td class="p-2 border">5.0</td><td class="p-2 border">5.0</td><td class="p-2 border">4.0</td></tr>
                                <tr><td class="p-2 border"><strong>Milk Fat (min, % m/m)</strong></td><td class="p-2 border">26.0</td><td class="p-2 border">26.0</td><td class="p-2 border">26.0</td></tr>
                                <tr><td class="p-2 border"><strong>Milk Protein in SNF (min, %)</strong></td><td class="p-2 border">34.0</td><td class="p-2 border">34.0</td><td class="p-2 border">34.0</td></tr>
                                <tr><td class="p-2 border"><strong>Insolubility Index (max, ml)</strong></td><td class="p-2 border">2.0</td><td class="p-2 border">2.0 (spray)</td><td class="p-2 border">2.0</td></tr>
                                <tr><td class="p-2 border"><strong>Titratable Acidity (max, % LA)</strong></td><td class="p-2 border">1.5</td><td class="p-2 border">—</td><td class="p-2 border">1.5</td></tr>
                                <tr><td class="p-2 border"><strong>Scorched Particles (max, mg)</strong></td><td class="p-2 border">—</td><td class="p-2 border">22.5 (Disc B)</td><td class="p-2 border">15.0</td></tr>
                                <tr><td class="p-2 border"><strong>TPC (max, cfu/g)</strong></td><td class="p-2 border">40,000</td><td class="p-2 border">50,000</td><td class="p-2 border">40,000</td></tr>
                                <tr><td class="p-2 border"><strong>Coliforms (max, cfu/g)</strong></td><td class="p-2 border">10</td><td class="p-2 border">10</td><td class="p-2 border">10</td></tr>
                                <tr><td class="p-2 border"><strong>Salmonella (/25g)</strong></td><td class="p-2 border">Absent</td><td class="p-2 border">Absent</td><td class="p-2 border">Absent</td></tr>
                                <tr><td class="p-2 border"><strong>S. aureus (max, cfu/g)</strong></td><td class="p-2 border">50</td><td class="p-2 border">—</td><td class="p-2 border">50</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Key Differences Between WMP and SMP Processing</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Aspect</th>
                                    <th class="p-2 border">SMP</th>
                                    <th class="p-2 border">WMP</th>
                                    <th class="p-2 border">Scientific Reason</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Starting material</td><td class="p-2 border">Skim milk (~0.05% fat)</td><td class="p-2 border">Standardized whole milk (~3.0–3.5% fat)</td><td class="p-2 border">—</td></tr>
                                <tr><td class="p-2 border">Pre-heat treatment</td><td class="p-2 border">Variable (LH/MH/HH per application)</td><td class="p-2 border">Almost always High Heat (≥85°C × 15–30 min or DSI 120°C)</td><td class="p-2 border">Intense heating denatures β-Lg, exposing -SH groups that act as antioxidants, scavenging oxygen radicals and binding pro-oxidant copper ions. This is the single most important factor for WMP shelf life.</td></tr>
                                <tr><td class="p-2 border">Homogenization</td><td class="p-2 border">Generally not required</td><td class="p-2 border"><strong>Essential</strong> (two-stage: 150/50 bar)</td><td class="p-2 border">Reduces fat globule size from 3–5 µm to &lt;1 µm. Creates new fat globule membrane from casein + whey protein, encapsulating fat within a protective protein layer. Reduces free fat from ~80% (unhomogenized) to &lt;4% (homogenized).</td></tr>
                                <tr><td class="p-2 border">Evaporation (max TS)</td><td class="p-2 border">48–52% TS</td><td class="p-2 border">42–48% TS (lower due to higher viscosity from fat)</td><td class="p-2 border">Fat increases viscosity and stickiness at high concentrations, limiting pumpability and atomization quality.</td></tr>
                                <tr><td class="p-2 border">Spray drying outlet temp</td><td class="p-2 border">80–98°C</td><td class="p-2 border">75–90°C (slightly lower)</td><td class="p-2 border">Fat acts as a plasticizer, lowering T<sub>g</sub> of the powder matrix. Lower outlet temp reduces lipid oxidation initiation and maintains powder flowability.</td></tr>
                                <tr><td class="p-2 border">Packaging atmosphere</td><td class="p-2 border">Air or N₂ (optional)</td><td class="p-2 border"><strong>N₂ flush mandatory</strong> (residual O₂ &lt;2%)</td><td class="p-2 border">Removing oxygen delays the initiation phase of auto-oxidation. Peroxide formation rate is directly proportional to O₂ partial pressure.</td></tr>
                                <tr><td class="p-2 border">Shelf life</td><td class="p-2 border">18–24 months</td><td class="p-2 border">6–12 months (air); 18–24 months (N₂ flush)</td><td class="p-2 border">Lipid oxidation is the shelf-life-limiting factor for WMP.</td></tr>
                                <tr><td class="p-2 border">Target moisture</td><td class="p-2 border">3.5–4.5%</td><td class="p-2 border">2.5–3.5%</td><td class="p-2 border">Lower moisture reduces a<sub>w</sub> and helps maintain amorphous lactose state in the presence of plasticizing fat.</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of WMP with Food Safety Controls</h2>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for WMP Production</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Raw Milk Reception & Quality Testing <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Chilled Storage (≤4°C, max 24 hrs) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Standardization of Fat:SNF Ratio (e.g., 0.375 for 26% fat WMP) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Pre-heating & Pasteurization (≥85°C × 15–30 min or 90°C × 5 min or DSI 120°C × 2 sec)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1 (Biological + Chemical/Quality)</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Two-Stage Homogenization (150/50 bar at 65–75°C)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">oPRP (Critical Quality)</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Multi-Effect Falling-Film Evaporation (to 42–48% TS) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Concentrate Homogenization (optional second stage, 50–100 bar) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Spray Drying (Inlet: 170–200°C; Outlet: 75–90°C)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2 (Biological + Chemical)</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Vibro-Fluidized Bed Drying & Cooling (Lecithin application for instant grade) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Cyclone Separation & Fines Return <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Sifting (Vibro-Sifter) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-red-100 border border-red-300 rounded"><strong>Metal Detection / X-ray Inspection</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3 (Physical)</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Packaging with N₂ Gas Flushing (Residual O₂ ≤ 2%)</strong> <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP (Critical Quality)</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Storage (Cool, dry: ≤25°C, RH &lt;65%, away from light) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Scientific Explanation of WMP Processing Steps</h3>
                    <ol class="list-decimal list-outside pl-5 space-y-6">
                        <li>
                            <strong>Milk Reception, Storage & Standardization (PRP, oPRP):</strong>
                            <p class="mt-1">Same platform tests as SMP. For WMP, special attention is given to:</p>
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                <li><strong>Lipolysis assessment:</strong> Free fatty acid (FFA) content or acid degree value (ADV). High FFA indicates lipase activity (from bacterial lipases or native lipoprotein lipase activated by agitation, foaming, or temperature fluctuation). FFA &gt;1.0 meq/100g fat is undesirable. Lipolyzed fat produces soapy, rancid, goaty off-flavors that carry through to the powder.</li>
                                <li><strong>Copper & iron content:</strong> These transition metals are potent pro-oxidants. Cu²⁺ at levels as low as 0.05 ppm in milk can significantly accelerate lipid oxidation in WMP. Stainless steel (grade 304/316) equipment is mandatory; copper/brass fittings are prohibited in WMP lines.</li>
                            </ul>
                            <p class="mt-2"><strong>Standardization (oPRP):</strong> The fat-to-SNF ratio of whole milk is adjusted to achieve the target composition in the final powder. For WMP with 26% fat and 70% SNF, the ratio is:</p>
                            <p class="mt-1 text-center font-mono">Fat:SNF ratio = 26/70 = 0.371</p>
                            <p class="mt-1">Since the typical ratio in whole milk (~3.5% fat, ~8.5% SNF = 0.412) is higher than required, some skim milk may be added to standardize downward. Alternatively, for higher-fat WMP (28.5%), less adjustment is needed. Inline standardization using density meters and fat analyzers (NIR/FTIR) with automatic blending valves is standard in modern plants.</p>
                        </li>
                        <li>
                            <strong>Pre-heating & Pasteurization (CCP-1 — Biological + Chemical/Quality):</strong>
                            <p class="mt-1">This is the <strong>most critical processing step for WMP quality and safety</strong>. For WMP, a high-heat treatment is almost universally applied, combining pasteurization with forewarming in a single, more intense step. This is <strong>CCP-1</strong>.</p>
                            
                            <h4 class="font-semibold mt-3 mb-1">Typical WMP Pre-heat Treatments:</h4>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li>85–90°C × 15–30 minutes (indirect, PHE/THE + holding tube/holding tank)</li>
                                <li>90–95°C × 5–10 minutes</li>
                                <li>120–130°C × 1–2 seconds (Direct Steam Injection) followed by flash cooling</li>
                            </ul>

                            <h4 class="font-semibold mt-3 mb-1">Multiple Purposes of High-Heat Treatment for WMP:</h4>
                            <ol class="list-alpha list-outside pl-5 mt-1 space-y-2">
                                <li><strong>Microbiological Safety:</strong> Destruction of all vegetative pathogens and significant reduction of thermophilic spores. At 90°C × 5 min, a >8-log reduction of <em>Listeria</em>, <em>Salmonella</em>, and <em>E. coli</em> O157:H7 is achieved.</li>
                                <li><strong>Lipase Inactivation:</strong> Native bovine milk lipoprotein lipase (LPL) is a relatively heat-labile enzyme, inactivated at ~72°C × 15 sec. However, bacterial lipases (from <em>Pseudomonas</em> spp.) are extremely heat-stable (surviving even UHT at 140°C). High pre-heating helps but cannot fully inactivate these. Therefore, starting with low-count, fresh milk is paramount.</li>
                                <li><strong>Antioxidant Generation (Sulfhydryl Groups):</strong> This is the unique and critical function for WMP. β-Lactoglobulin denaturation at temperatures ≥80°C exposes reactive free thiol (-SH) groups (Cys<sub>121</sub> of β-Lg). These -SH groups function as:
                                    <ul class="list-circle pl-5 mt-1 space-y-1">
                                        <li><strong>Oxygen scavengers:</strong> -SH + ½O₂ → -SOH (sulfenic acid) → further oxidation to -SO₂H, -SO₃H. This consumes dissolved oxygen before it can attack unsaturated fatty acids.</li>
                                        <li><strong>Free radical scavengers:</strong> -SH + R• → -S• + RH (termination of radical chain propagation in lipid auto-oxidation)</li>
                                        <li><strong>Metal chelators:</strong> Thiol groups can bind pro-oxidant transition metal ions (Cu²⁺, Fe²⁺), reducing their catalytic activity in initiating lipid oxidation.</li>
                                    </ul>
                                    <p class="mt-1">The antioxidant capacity of WMP is directly proportional to the number of exposed -SH groups and inversely proportional to WPNI. WMP with WPNI ≤ 1.5 mg/g (high heat) has the best oxidative stability, with shelf life extension of 2–3× compared to low-heat WMP.</p>
                                </li>
                                <li><strong>Release of Volatile Sulfur Compounds:</strong> The heating produces H₂S, dimethyl sulfide, and other volatile sulfur compounds that contribute a "cooked" or "heated" flavor initially but are also potent antioxidants. These volatiles gradually dissipate during the first few weeks of storage, at which point the exposed -SH groups on proteins take over as the primary antioxidant defense.</li>
                            </ol>
                        </li>
                        <li>
                            <strong>Homogenization (oPRP — Critical for Quality):</strong>
                            <p class="mt-1">Homogenization is an <strong>essential oPRP</strong> unique to WMP processing. It is performed after pre-heating (at 65–75°C, when fat is fully liquid) and is critical for controlling the <strong>"free fat"</strong> content of the finished powder.</p>
                            
                            <h4 class="font-semibold mt-3 mb-1">Principle:</h4>
                            <p>The hot milk is forced through a narrow gap (0.1–0.3 mm) in a high-pressure homogenizer valve at 150–200 bar (first stage) + 30–50 bar (second stage). Fat globules are disrupted by a combination of:</p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Turbulence:</strong> Intense turbulent eddies created by the high velocity of the fluid stream (~100–300 m/s) exert shear forces that deform and break up fat globules.</li>
                                <li><strong>Cavitation:</strong> The sudden pressure drop across the valve creates vapor bubbles that collapse violently, generating shockwaves that further fragment fat globules.</li>
                                <li><strong>Shear:</strong> High velocity gradient across the narrow gap subjects globules to intense shear stress.</li>
                            </ul>
                            <p class="mt-2"><strong>Result:</strong> Fat globule diameter is reduced from a native 3–5 µm (d<sub>3,2</sub>) to &lt;1 µm. The total fat globule surface area increases by ~6–10×. This newly created surface is immediately coated by adsorbed casein micelles and whey proteins (primarily β-Lg and α-La), forming a new, protein-based fat globule membrane.</p>

                            <h4 class="font-semibold mt-3 mb-1">Two-Stage Homogenization:</h4>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>First stage (150 bar):</strong> Breaks down fat globules. However, newly created small globules tend to cluster together into aggregates (clumps) due to incomplete surface coverage (bridging by casein submicelles spanning multiple globules).</li>
                                <li><strong>Second stage (50 bar):</strong> Breaks up these fat globule clusters, ensuring a uniform, disaggregated fat distribution.</li>
                            </ul>

                            <h4 class="font-semibold mt-3 mb-1">Impact on Free Fat:</h4>
                            <p>"Free fat" is the fraction of fat in the powder that is not encapsulated within the protein-lactose matrix and can be extracted by an organic solvent (petroleum ether) without prior digestion. It is measured by solvent extraction of the powder surface (e.g., ISO 8070 / IDF 123).</p>
                            <div class="overflow-x-auto mt-2">
                                <table class="w-full text-left border-collapse text-sm">
                                    <thead class="bg-muted">
                                        <tr>
                                            <th class="p-2 border">Condition</th>
                                            <th class="p-2 border">Free Fat (% of total fat)</th>
                                            <th class="p-2 border">Consequence</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td class="p-2 border">No homogenization</td><td class="p-2 border">50–95%</td><td class="p-2 border">Rapid oxidation, poor solubility, greasy/sticky powder, rapid rancidity</td></tr>
                                        <tr><td class="p-2 border">Single-stage homogenization (100 bar)</td><td class="p-2 border">5–15%</td><td class="p-2 border">Moderate protection</td></tr>
                                        <tr><td class="p-2 border">Two-stage homogenization (150/50 bar)</td><td class="p-2 border">1–4%</td><td class="p-2 border">Good encapsulation, extended shelf life, good reconstitution</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p class="mt-2">Free fat on the particle surface is directly exposed to oxygen and is the primary substrate for auto-oxidation. It also makes the powder surface hydrophobic, reducing wettability and dispersibility. Target free fat for commercial WMP: &lt;2% of total fat.</p>

                            <h4 class="font-semibold mt-3 mb-1">Timing of Homogenization:</h4>
                            <p>Homogenization can be performed:</p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Before evaporation (upstream):</strong> More common. Better protein coverage of fat globules. However, the smaller globules increase the viscosity of the concentrate during evaporation.</li>
                                <li><strong>After evaporation (downstream):</strong> Concentrate at 45–48% TS is homogenized. The higher viscosity of the concentrate provides better mechanical disruption but may cause incomplete protein adsorption and higher free fat in the powder. A lower pressure (50–100 bar) is used for concentrate homogenization.</li>
                                <li><strong>Both (upstream + downstream):</strong> Some plants use two-stage homogenization upstream and a gentle downstream homogenization for optimal results.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Evaporation (oPRP):</strong>
                            <p class="mt-1">Similar to SMP, but the maximum achievable concentration is typically lower (42–48% TS vs. 48–52% for SMP) due to the higher viscosity contributed by the fat phase. The presence of fat also affects boiling characteristics and fouling patterns. Equipment and principles (falling-film evaporator, MVR/TVR, vacuum, surface condenser) are identical to those described for SMP.</p>
                            <p class="mt-1"><strong>Additional consideration for WMP:</strong> Fat can accumulate in dead zones of the evaporator and deposit on heat transfer surfaces, reducing efficiency and creating potential for burnt/scorched flavors. More frequent CIP cycles may be required.</p>
                        </li>
                        <li>
                            <strong>Spray Drying (CCP-2 — Biological + Chemical):</strong>
                            <p class="mt-1">The concentrate is spray dried using the same principles as SMP but with modified parameters:</p>
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                <li><strong>Inlet air temperature:</strong> 170–200°C (slightly lower than SMP to reduce lipid oxidation and browning)</li>
                                <li><strong>Outlet air temperature:</strong> 75–90°C (carefully controlled to minimize fat oxidation while ensuring adequate drying)</li>
                                <li><strong>Target powder moisture:</strong> 2.5–3.5% (lower than SMP because the fat phase depresses T<sub>g</sub>, and lower moisture is needed to maintain the glassy state and prevent caking)</li>
                                <li><strong>Atomization:</strong> Pressure nozzle atomization is generally preferred over rotary atomization for WMP because it produces more spherical, dense particles with better fat encapsulation (less surface fat) and higher bulk density. Typical nozzle pressure: 180–250 bar.</li>
                            </ul>
                            
                            <h4 class="font-semibold mt-3 mb-1">Particle Morphology & Fat Distribution:</h4>
                            <p>WMP particles have a characteristic vacuolated structure (internal air vacuoles) formed by the expansion of entrapped air/steam during drying. The fat is ideally distributed in three locations:</p>
                            <ol class="list-alpha list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Encapsulated fat:</strong> Fat globules fully surrounded by the protein-lactose matrix within the particle interior. This is the most protected fraction (~60–80% of total fat in well-processed WMP).</li>
                                <li><strong>Inner free fat:</strong> Fat that has leaked from ruptured globules during drying but remains within the particle interior. Moderately protected.</li>
                                <li><strong>Surface free fat:</strong> Fat present on the outer surface of the particle. This is the most vulnerable fraction and the primary target for oxidation. It is extracted by the free fat test and should be minimized (&lt;2% of total fat).</li>
                            </ol>
                            <p class="mt-1">Confocal Laser Scanning Microscopy (CLSM) with Nile Red staining is used to visualize fat distribution within powder particles, providing invaluable insights for process optimization.</p>
                        </li>
                        <li>
                            <strong>Fluidized Bed Drying, Cooling & Instantization (oPRP):</strong>
                            <p class="mt-1">Similar to SMP. For instant WMP, lecithin (0.2–0.5%) is applied in the fluidized bed stage via a heated spray system. Lecithin is particularly important for WMP because the surface free fat makes the powder inherently hydrophobic and difficult to wet.</p>
                            <p class="mt-1">The cooling section must bring the powder temperature below 30°C (ideally &lt;25°C) before packaging. This is critical because:</p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li>Warm powder accelerates lipid oxidation (Arrhenius kinetics: rate doubles every ~10°C increase)</li>
                                <li>Warm powder may exceed T<sub>g</sub> (lower in WMP due to fat), causing stickiness and caking</li>
                                <li>Warm powder in a sealed package creates condensation during cooling, increasing local a<sub>w</sub></li>
                            </ul>
                        </li>
                        <li>
                            <strong>Packaging with N₂ Gas Flushing (oPRP — Critical Quality):</strong>
                            <p class="mt-1">This is a critical quality control step unique to WMP (though also used for SMP in some markets).</p>
                            <h4 class="font-semibold mt-3 mb-1">Science of Gas Flushing:</h4>
                            <p>Auto-oxidation of milk fat follows a free radical chain reaction mechanism:</p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Initiation:</strong> RH + O₂ (or catalyst: Cu²⁺, light, heat) → R• + •OH</li>
                                <li><strong>Propagation:</strong> R• + O₂ → ROO• (peroxy radical); ROO• + RH → ROOH + R• (hydroperoxide formation, cyclic)</li>
                                <li><strong>Termination:</strong> R• + R• → R-R; ROO• + ROO• → non-radical products</li>
                            </ul>
                            <p class="mt-2">Oxygen is essential for the propagation step. By reducing headspace O₂ from 21% (air) to &lt;2% (N₂ flush), the rate of peroxy radical formation is drastically reduced, extending the induction period (the lag phase before perceptible rancidity) by 3–5×.</p>
                            
                            <h4 class="font-semibold mt-3 mb-1">Practical Implementation:</h4>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Bulk bags (25 kg):</strong> After filling, a lance is inserted into the bag to inject N₂ while simultaneously evacuating air. Process may be repeated 2–3 times (flushing cycles). Target: residual O₂ &lt;2% in headspace.</li>
                                <li><strong>Consumer tins/cans:</strong> Filled in a N₂-blanketed atmosphere. Headspace is gas-flushed before seaming/sealing. Target: residual O₂ &lt;1%.</li>
                                <li><strong>Pouches (laminates):</strong> MAP (Modified Atmosphere Packaging) using a flow-wrap or form-fill-seal system with N₂ injection.</li>
                                <li><strong>Monitoring:</strong> Headspace oxygen is measured using a Mocon or PBI Dansensor oxygen analyzer (piercing or non-destructive laser method) on sampled packages.</li>
                            </ul>
                            <p class="mt-2"><strong>Note:</strong> Even with N₂ flushing, some dissolved oxygen remains in the interstitial spaces between powder particles (occluded air) and within the amorphous matrix. This "internal oxygen" slowly migrates and participates in oxidation. DSI pre-treatment helps by creating an initial reducing environment (-SH groups).</p>
                        </li>
                        <li>
                            <strong>Quality Testing Specific to WMP:</strong>
                            <p class="mt-1">In addition to all tests listed for SMP, WMP requires:</p>
                            <div class="overflow-x-auto mt-2">
                                <table class="w-full text-left border-collapse text-sm">
                                    <thead class="bg-muted">
                                        <tr>
                                            <th class="p-2 border">Test</th>
                                            <th class="p-2 border">Method</th>
                                            <th class="p-2 border">Specification</th>
                                            <th class="p-2 border">Significance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td class="p-2 border">Free Fat</td><td class="p-2 border">Solvent extraction (petroleum ether, 40–60°C) without prior digestion</td><td class="p-2 border">&lt;2% of total fat</td><td class="p-2 border">Surface fat susceptible to oxidation; indicator of homogenization efficiency</td></tr>
                                        <tr><td class="p-2 border">Peroxide Value (PV)</td><td class="p-2 border">IDF 74A / AOAC (iodometric titration of extracted fat)</td><td class="p-2 border">&lt;0.3 meq O₂/kg fat (fresh); &lt;1.0 (acceptable)</td><td class="p-2 border">Primary oxidation products (hydroperoxides); early indicator of oxidative rancidity</td></tr>
                                        <tr><td class="p-2 border">Thiobarbituric Acid Value (TBA/TBARS)</td><td class="p-2 border">Spectrophotometric (532 nm)</td><td class="p-2 border">&lt;0.5 mg MDA/kg</td><td class="p-2 border">Secondary oxidation products (malondialdehyde); correlates with off-flavor perception</td></tr>
                                        <tr><td class="p-2 border">Free Fatty Acids (FFA/ADV)</td><td class="p-2 border">BDI method / titration of extracted fat</td><td class="p-2 border">&lt;1.0 meq/100g fat</td><td class="p-2 border">Lipolytic rancidity; indicator of lipase activity in raw milk</td></tr>
                                        <tr><td class="p-2 border">Headspace Oxygen</td><td class="p-2 border">Gas analyzer (Mocon/Dansensor)</td><td class="p-2 border">&lt;2% (bulk); &lt;1% (retail)</td><td class="p-2 border">Determines oxidation potential during storage</td></tr>
                                        <tr><td class="p-2 border">Sensory (Flavor Score)</td><td class="p-2 border">ADPI scorecard / trained panel (reconstituted to 12% TS)</td><td class="p-2 border">≥ 38/45 (no oxidized, rancid, or stale off-flavors)</td><td class="p-2 border">Consumer acceptance; most sensitive method for detecting early oxidation</td></tr>
                                        <tr><td class="p-2 border">Volatile Compounds (GC-MS)</td><td class="p-2 border">SPME-GC-MS (solid-phase microextraction)</td><td class="p-2 border">Low hexanal, pentanal, 2-heptanone</td><td class="p-2 border">Hexanal is a marker for lipid oxidation (from linoleic acid); &gt;5 µg/g indicates unacceptable oxidation</td></tr>
                                        <tr><td class="p-2 border">Vacuole Volume (particle porosity)</td><td class="p-2 border">SEM, particle density measurement</td><td class="p-2 border">Varies</td><td class="p-2 border">Affects bulk density, flowability, and occluded air (O₂ reservoir for oxidation)</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ol>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Lipid Oxidation in WMP — Detailed Mechanism & Prevention Strategy</h3>
                    <p>Understanding lipid oxidation is paramount for WMP producers, as it is the single most important factor limiting shelf life.</p>
                    
                    <h4 class="font-semibold mt-3 mb-1">Auto-oxidation Mechanism (Free Radical Chain Reaction):</h4>
                    <div class="bg-gray-50 p-4 rounded-lg mt-2 font-mono text-sm">
                        <p><strong>Initiation:</strong></p>
                        <p>RH + initiator (heat, light, Cu²⁺, Fe²⁺) → R• + H•</p>
                        <p class="mt-2"><strong>Propagation:</strong></p>
                        <p>R• + O₂ → ROO• (peroxyl radical) [very fast, diffusion-controlled]</p>
                        <p>ROO• + RH → ROOH (hydroperoxide) + R• [rate-limiting step]</p>
                        <p class="mt-2"><strong>Branching (Decomposition):</strong></p>
                        <p>ROOH → RO• + •OH [homolytic cleavage, accelerated by heat/metals]</p>
                        <p>RO• → aldehydes (hexanal, nonanal, pentanal) + alkyl radicals [responsible for off-flavors]</p>
                        <p class="mt-2"><strong>Termination:</strong></p>
                        <p>R• + R• → R-R</p>
                        <p>ROO• + ROO• → non-radical products + O₂</p>
                        <p>ROO• + AH → ROOH + A• [antioxidant scavenging]</p>
                    </div>

                    <h4 class="font-semibold mt-3 mb-1">Multi-Hurdle Approach to Oxidation Prevention in WMP:</h4>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Hurdle</th>
                                    <th class="p-2 border">Processing Step</th>
                                    <th class="p-2 border">Mechanism</th>
                                    <th class="p-2 border">Quantitative Impact</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">1. Raw milk quality</td><td class="p-2 border">Reception</td><td class="p-2 border">Low FFA, low SCC, low Cu²⁺/Fe²⁺, no light exposure</td><td class="p-2 border">Eliminates pro-oxidant load at source</td></tr>
                                <tr><td class="p-2 border">2. High pre-heat treatment</td><td class="p-2 border">Pasteurization/forewarming</td><td class="p-2 border">-SH group exposure (antioxidant); lipase inactivation</td><td class="p-2 border">Extends induction period by 2–3×</td></tr>
                                <tr><td class="p-2 border">3. Homogenization</td><td class="p-2 border">Homogenizer</td><td class="p-2 border">Reduces free fat from ~80% to &lt;4%</td><td class="p-2 border">Eliminates primary oxidation substrate</td></tr>
                                <tr><td class="p-2 border">4. Low outlet temp & moisture</td><td class="p-2 border">Spray drying</td><td class="p-2 border">Minimizes thermal initiation; optimal a<sub>w</sub> for stability</td><td class="p-2 border">a<sub>w</sub> 0.2–0.3 is the minimum oxidation rate zone (BET monolayer)</td></tr>
                                <tr><td class="p-2 border">5. N₂ gas flushing</td><td class="p-2 border">Packaging</td><td class="p-2 border">Removes O₂ (&lt;2%), starving the propagation step</td><td class="p-2 border">Extends shelf life from 6–9 months to 18–24 months</td></tr>
                                <tr><td class="p-2 border">6. Cool, dark storage</td><td class="p-2 border">Warehousing</td><td class="p-2 border">Reduces reaction rate (Arrhenius); prevents photo-oxidation</td><td class="p-2 border">Every 10°C reduction halves oxidation rate</td></tr>
                                <tr><td class="p-2 border">7. Light-barrier packaging</td><td class="p-2 border">Packaging material</td><td class="p-2 border">Blocks UV/visible light (riboflavin-sensitized singlet oxygen pathway)</td><td class="p-2 border">Aluminum foil laminate or opaque PE</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2 text-sm text-gray-600"><strong>Photo-oxidation pathway:</strong> Riboflavin (vitamin B2) in milk acts as a photosensitizer. Upon absorbing UV/blue light (λ ~350–520 nm), it transfers energy to triplet oxygen (³O₂), generating singlet oxygen (¹O₂), which reacts directly with unsaturated fatty acids (1500× faster than ³O₂) without the need for a radical initiator. This is why light-barrier packaging is essential.</p>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Comprehensive HACCP Summary for WMP</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Step</th>
                                    <th class="p-2 border">Hazard</th>
                                    <th class="p-2 border">Classification</th>
                                    <th class="p-2 border">Critical Limit</th>
                                    <th class="p-2 border">Monitoring</th>
                                    <th class="p-2 border">Corrective Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Raw Milk Reception</td><td class="p-2 border">B: Pathogens; C: Antibiotics, aflatoxin M1, pesticides; P: Physical contaminants</td><td class="p-2 border">PRP</td><td class="p-2 border">Per FSSAI raw milk specs</td><td class="p-2 border">Platform tests, supplier audit</td><td class="p-2 border">Reject non-conforming lots</td></tr>
                                <tr><td class="p-2 border">Cold Storage</td><td class="p-2 border">B: Psychrotrophic protease/lipase production</td><td class="p-2 border">PRP</td><td class="p-2 border">≤4°C, ≤24h (WMP stricter)</td><td class="p-2 border">Temp recording, time log</td><td class="p-2 border">Prioritize processing; reject if >48h</td></tr>
                                <tr><td class="p-2 border">Standardization</td><td class="p-2 border">Quality: incorrect composition</td><td class="p-2 border">oPRP</td><td class="p-2 border">Fat:SNF = 0.371 ± 0.005</td><td class="p-2 border">Inline Milkoscan/density meter</td><td class="p-2 border">Adjust blend ratio</td></tr>
                                <tr><td class="p-2 border"><strong>Pre-heat + Pasteurization</strong></td><td class="p-2 border">B: Vegetative pathogen survival; C: Insufficient -SH generation</td><td class="p-2 border"><strong>CCP-1</strong></td><td class="p-2 border">≥85°C × 15 min (or equivalent); ALP negative</td><td class="p-2 border">Continuous temp/time recording, FDV, ALP test</td><td class="p-2 border">Divert; reprocess; investigate cause</td></tr>
                                <tr><td class="p-2 border">Homogenization</td><td class="p-2 border">Quality: High free fat → rapid oxidation</td><td class="p-2 border">oPRP</td><td class="p-2 border">Pressure ≥150/50 bar; Free fat &lt;2%</td><td class="p-2 border">Pressure gauge recording; periodic free fat testing</td><td class="p-2 border">Check valve condition; increase pressure; divert concentrate</td></tr>
                                <tr><td class="p-2 border">Evaporation</td><td class="p-2 border">B: Thermophilic spore growth</td><td class="p-2 border">oPRP</td><td class="p-2 border">Run time ≤18h; CIP frequency</td><td class="p-2 border">Run time log; TPC/spore trending</td><td class="p-2 border">Initiate CIP; reduce run length</td></tr>
                                <tr><td class="p-2 border"><strong>Spray Drying</strong></td><td class="p-2 border">B: Insufficient drying (microbial survival); C: Excessive heat (Maillard, lipid oxidation)</td><td class="p-2 border"><strong>CCP-2</strong></td><td class="p-2 border">Outlet temp 75–90°C; Moisture ≤ 3.5%; Inlet temp ≤ 200°C</td><td class="p-2 border">Continuous temp recording; NIR moisture; periodic PV/TBA</td><td class="p-2 border">Adjust feed rate/inlet temp; divert product</td></tr>
                                <tr><td class="p-2 border">Fluidized Bed</td><td class="p-2 border">B: Recontamination; C: Insufficient cooling → oxidation</td><td class="p-2 border">oPRP</td><td class="p-2 border">Powder exit temp ≤ 25°C; HEPA-filtered air</td><td class="p-2 border">Powder temp; air filter integrity</td><td class="p-2 border">Extend cooling; replace filters</td></tr>
                                <tr><td class="p-2 border"><strong>Metal Detection</strong></td><td class="p-2 border">P: Metal foreign bodies</td><td class="p-2 border"><strong>CCP-3</strong></td><td class="p-2 border">Fe ≥1.5mm, Non-Fe ≥2.0mm, SS ≥2.5mm</td><td class="p-2 border">Test piece verification every 1h</td><td class="p-2 border">Quarantine, reinspect, investigate source</td></tr>
                                <tr><td class="p-2 border">N₂ Flushing & Packaging</td><td class="p-2 border">C: Residual O₂ → oxidation; B: Environmental contamination</td><td class="p-2 border">oPRP</td><td class="p-2 border">Headspace O₂ ≤ 2%; packaging room hygiene</td><td class="p-2 border">O₂ analyzer; environmental swabs</td><td class="p-2 border">Adjust N₂ flow; reflush; deep clean area</td></tr>
                                <tr><td class="p-2 border">Storage</td><td class="p-2 border">C: Oxidation, Maillard browning, caking</td><td class="p-2 border">PRP</td><td class="p-2 border">≤25°C, RH &lt;65%, no light</td><td class="p-2 border">Temp/RH data logger; FIFO</td><td class="p-2 border">Relocate stock; use climate-controlled warehouse</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Advanced Powder Properties & Characterization</h3>
                    <p>Both SMP and WMP are characterized by several physical and functional properties beyond basic composition:</p>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Property</th>
                                    <th class="p-2 border">SMP (Typical)</th>
                                    <th class="p-2 border">WMP (Typical)</th>
                                    <th class="p-2 border">Measurement Method</th>
                                    <th class="p-2 border">Process Factors</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Particle Size d<sub>50</sub> (µm)</td><td class="p-2 border">40–80 (regular); 150–300 (instant)</td><td class="p-2 border">60–100 (regular); 150–400 (instant)</td><td class="p-2 border">Laser diffraction (Malvern Mastersizer)</td><td class="p-2 border">Atomization pressure, feed concentration, agglomeration</td></tr>
                                <tr><td class="p-2 border">Bulk Density—Loose (g/L)</td><td class="p-2 border">550–680 (regular); 350–450 (instant)</td><td class="p-2 border">500–620 (regular); 350–450 (instant)</td><td class="p-2 border">IDF 134 / Scott Volumeter</td><td class="p-2 border">Particle size, vacuole volume, agglomeration degree</td></tr>
                                <tr><td class="p-2 border">Occluded Air (mL/100g)</td><td class="p-2 border">50–150</td><td class="p-2 border">30–100</td><td class="p-2 border">Air pycnometer</td><td class="p-2 border">Atomization type, feed temperature; lower is better for WMP (less O₂)</td></tr>
                                <tr><td class="p-2 border">Wettability (sec)</td><td class="p-2 border">60–120 (regular); &lt;15 (instant + lecithin)</td><td class="p-2 border">120+ (regular); &lt;20 (instant + lecithin)</td><td class="p-2 border">IDF 87 (sink test)</td><td class="p-2 border">Surface composition (protein vs. fat vs. lecithin), particle size</td></tr>
                                <tr><td class="p-2 border">Dispersibility (%)</td><td class="p-2 border">85–98</td><td class="p-2 border">80–95</td><td class="p-2 border">IDF 87 (sieve residue after reconstitution)</td><td class="p-2 border">Agglomeration, particle porosity, insolubility index</td></tr>
                                <tr><td class="p-2 border">Flowability (Carr Index)</td><td class="p-2 border">15–25 (good to fair)</td><td class="p-2 border">20–35 (fair to poor; sticky surface fat)</td><td class="p-2 border">Tapped/loose density ratio</td><td class="p-2 border">Moisture, fat, particle shape, temperature</td></tr>
                                <tr><td class="p-2 border">Water Activity (a<sub>w</sub>)</td><td class="p-2 border">0.20–0.25</td><td class="p-2 border">0.18–0.22</td><td class="p-2 border">Dew point hygrometer (AquaLab)</td><td class="p-2 border">Drying intensity; critical for storage stability</td></tr>
                                <tr><td class="p-2 border">Glass Transition Temp T<sub>g</sub> (°C)</td><td class="p-2 border">40–55 (at 3–4% moisture)</td><td class="p-2 border">30–45 (fat depresses T<sub>g</sub>)</td><td class="p-2 border">DSC (Differential Scanning Calorimetry)</td><td class="p-2 border">Moisture, composition; must store below T<sub>g</sub> to prevent caking</td></tr>
                                <tr><td class="p-2 border">Color (L*, a*, b*)</td><td class="p-2 border">L*: 93–96; b*: 10–13</td><td class="p-2 border">L*: 90–94; b*: 13–17 (slightly more yellow due to fat-soluble carotenoids)</td><td class="p-2 border">Colorimeter (Hunter Lab / Minolta)</td><td class="p-2 border">Maillard browning (heat), carotenoid content (feed), oxidation</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Environmental & Sustainability Considerations in WMP Production</h3>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Water footprint:</strong> ~1,000–1,500 liters of milk are required to produce 1 kg of WMP (considering ~12.5% TS in milk). CIP water, cooling water, and cow water (evaporator condensate) recovery are key sustainability measures.</li>
                        <li><strong>Energy:</strong> WMP production requires ~10–15 MJ/kg powder. MVR evaporation, heat integration, and waste heat recovery from dryer exhaust (for pre-heating air or milk) can reduce this by 30–40%.</li>
                        <li><strong>Emission control:</strong> Fine powder particles in exhaust air are captured by bag filters (>99.9% efficiency). Volatile organic compounds (VOCs) from Maillard reactions are minimal at proper process conditions.</li>
                        <li><strong>CIP chemical management:</strong> NaOH and HNO₃ used for CIP are neutralized and treated in the effluent treatment plant (ETP). Biodegradable detergents and enzymatic CIP solutions are gaining adoption.</li>
                    </ul>
                `
            }
        }
    },
    hi: {
        title: "Milk Powder Processing",
        subTopics: {
            smp: {
                title: "A. Skimmed Milk Powder (SMP) Processing",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Skimmed Milk Powder ka Parichay (Introduction)</h3>
                    <p>Skimmed Milk Powder (SMP) ek bahut hi versatile dairy ingredient hai jo pasteurized skim milk se paani nikaalkar banaya jaata hai. Is process mein water activity (a<sub>w</sub>) lagbhag 0.997 (fluid milk mein) se ghatkar 0.3 se neeche aa jaati hai finished powder mein, jisse microbial growth aur enzymatic degradation effectively ruk jaata hai. Iska lambi shelf life (12–18 mahine sahi conditions mein), transport mein aasaani, high protein content (~36%), aur low fat content (≤1.5%) hone ki wajah se iska use reconstituted milk, yoghurt, ice cream, bakery products, confectionery, infant formula base, aur kai food systems mein protein fortifier ke roop mein hota hai.</p>
                    <p class="mt-2">Chemical taur par, SMP ek complex matrix hai jismein casein micelles (~80% total protein ka), whey proteins (~20%), lactose (~52%), minerals (~8%), aur residual moisture hota hai. In components ki state—khaaskar whey protein denaturation ka degree aur lactose ki physical state (amorphous vs. crystalline)—processing parameters se critically decide hoti hai aur yeh powder ki functional properties jaise solubility, heat stability, foaming, aur emulsification capacity ko directly govern karti hai.</p>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">SMP ki Typical Composition</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Component</th>
                                    <th class="p-2 border">Typical Range (%)</th>
                                    <th class="p-2 border">Mahatva (Significance)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Protein (N × 6.38)</td><td class="p-2 border">34–37</td><td class="p-2 border">Primary functional component; casein:whey ratio ~80:20</td></tr>
                                <tr><td class="p-2 border">Lactose</td><td class="p-2 border">49–54</td><td class="p-2 border">Mukhya roop se amorphous glassy state mein hota hai; crystallization aur Maillard reaction ke liye susceptible</td></tr>
                                <tr><td class="p-2 border">Fat</td><td class="p-2 border">0.6–1.25</td><td class="p-2 border">Bacha hua fat; mukhya roop se protein matrix ke andar entrapped</td></tr>
                                <tr><td class="p-2 border">Moisture</td><td class="p-2 border">3.0–4.5</td><td class="p-2 border">Storage stability ke liye critical; glass transition temperature (T<sub>g</sub>) se related</td></tr>
                                <tr><td class="p-2 border">Ash (minerals)</td><td class="p-2 border">7.5–8.5</td><td class="p-2 border">Ca, P, Mg, K, Na; Ca:P ratio ~1.3:1</td></tr>
                                <tr><td class="p-2 border">Titratable Acidity (% lactic acid)</td><td class="p-2 border">≤1.5 (reconstituted milk ka)</td><td class="p-2 border">Raw milk quality aur microbial activity ka indicator</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">SMP ke Regulatory Standards</h3>
                    <p>Kai national aur international bodies ne SMP ke liye quality, safety, aur fair trade practices ensure karne ke liye standards banaye hain.</p>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">FSSAI (India)</th>
                                    <th class="p-2 border">Codex Alimentarius (CODEX STAN 207-1999)</th>
                                    <th class="p-2 border">IS 13334 (Part 2) / BIS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border"><strong>Moisture (max, %)</strong></td><td class="p-2 border">5.0</td><td class="p-2 border">5.0</td><td class="p-2 border">5.0</td></tr>
                                <tr><td class="p-2 border"><strong>Milk Fat (max, % m/m)</strong></td><td class="p-2 border">1.5</td><td class="p-2 border">1.5</td><td class="p-2 border">1.5</td></tr>
                                <tr><td class="p-2 border"><strong>Milk Protein in SNF (min, %)</strong></td><td class="p-2 border">34.0</td><td class="p-2 border">34.0</td><td class="p-2 border">34.0</td></tr>
                                <tr><td class="p-2 border"><strong>Insolubility Index (max, ml)</strong></td><td class="p-2 border">2.0</td><td class="p-2 border">2.0 (spray), 1.0 (roller)</td><td class="p-2 border">2.0</td></tr>
                                <tr><td class="p-2 border"><strong>Total Ash (max, %)</strong></td><td class="p-2 border">8.2</td><td class="p-2 border">—</td><td class="p-2 border">8.2</td></tr>
                                <tr><td class="p-2 border"><strong>Scorched Particles (max, mg)</strong></td><td class="p-2 border">—</td><td class="p-2 border">22.5 (Disc B) / 15.0 (Disc A)</td><td class="p-2 border">15.0 (Disc B)</td></tr>
                                <tr><td class="p-2 border"><strong>TPC (max, cfu/g)</strong></td><td class="p-2 border">40,000</td><td class="p-2 border">50,000</td><td class="p-2 border">40,000</td></tr>
                                <tr><td class="p-2 border"><strong>Coliforms (max, cfu/g)</strong></td><td class="p-2 border">10</td><td class="p-2 border">10</td><td class="p-2 border">10</td></tr>
                                <tr><td class="p-2 border"><strong>Salmonella (/25g)</strong></td><td class="p-2 border">Absent</td><td class="p-2 border">25g mein Absent</td><td class="p-2 border">Absent</td></tr>
                                <tr><td class="p-2 border"><strong>Listeria monocytogenes (/25g)</strong></td><td class="p-2 border">Absent</td><td class="p-2 border">25g mein Absent</td><td class="p-2 border">Absent</td></tr>
                                <tr><td class="p-2 border"><strong>S. aureus (max, cfu/g)</strong></td><td class="p-2 border">50</td><td class="p-2 border">—</td><td class="p-2 border">50</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">SMP ka Heat Classification (ADPI / Codex)</h3>
                    <p>SMP ko drying se pehle diye gaye heat treatment ki severity ke aadhar par classify kiya jaata hai, jise <strong>Whey Protein Nitrogen Index (WPNI)</strong> se measure kiya jaata hai. WPNI per gram SMP mein undenatured whey protein nitrogen ko measure karta hai. Zyada pre-heat treatments zyada whey proteins denature karte hain, jisse WPNI value kam hoti hai.</p>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Classification</th>
                                    <th class="p-2 border">WPNI (mg/g SMP)</th>
                                    <th class="p-2 border">Typical Pre-heat Treatment</th>
                                    <th class="p-2 border">β-Lactoglobulin Denaturation (%)</th>
                                    <th class="p-2 border">Mukhya Upyog (Primary Applications)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border"><strong>Low Heat (LH)</strong></td><td class="p-2 border">≥ 6.0</td><td class="p-2 border">70°C / 15 sec (sirf HTST)</td><td class="p-2 border">&lt; 10</td><td class="p-2 border">Cheese making, cultured products, high-protein beverages, infant formula</td></tr>
                                <tr><td class="p-2 border"><strong>Medium Heat (MH)</strong></td><td class="p-2 border">1.51 – 5.99</td><td class="p-2 border">85°C / 1–2 min ya 90°C / 30 sec</td><td class="p-2 border">10–75</td><td class="p-2 border">Ice cream, confectionery, general-purpose ingredient</td></tr>
                                <tr><td class="p-2 border"><strong>High Heat (HH)</strong></td><td class="p-2 border">≤ 1.5</td><td class="p-2 border">90–120°C / 2–10 min ya DSI 120°C / 2 sec</td><td class="p-2 border">&gt; 80–95</td><td class="p-2 border">Bakery, recombined evaporated milk, meat products (high heat stability)</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2 text-sm text-gray-600"><strong>Scientific Basis:</strong> β-Lactoglobulin (β-Lg), jo total whey protein ka ~50% hota hai, iska denaturation temperature onset ~78°C hai. Thermal unfolding par, β-Lg ke exposed thiol groups (-SH) micelle surface par κ-casein ke saath disulfide bonds banate hain, jisse reconstituted milk ka colloidal behavior fundamentally badal jaata hai. High-heat SMP mein, extensive casein–whey protein complex heat stability improve karta hai (jaise UHT/sterilization temperatures par coagulation resist karta hai), jabki low-heat SMP native whey protein functionality retain karta hai jo rennet coagulation aur acid gelation ke liye zaroori hai.</p>

                    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Food Safety Controls ke saath SMP ki Processing</h2>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">SMP Production ka Processing Flowchart</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Raw Milk Reception & Quality Testing <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Chilled Storage (≤4°C, max 24–48 ghante) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Pre-heating (45–55°C) & Cream Separation <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Skim Milk ka Pasteurization (72°C × 15 sec / 63°C × 30 min)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1 (Biological)</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Pre-heating / Forewarming (70–120°C × 2 sec se 20 min)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2 (Biological + Quality)</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Multi-Effect Falling-Film Evaporation (45–52% TS tak) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Concentrate Holding & Homogenization (SMP ke liye optional) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Spray Drying (Inlet: 180–220°C; Outlet: 80–98°C)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3 (Biological + Chemical)</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Fluidized Bed Drying / Cooling (Vibro-Fluidizer) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Fines Return to Drying Chamber (Agglomeration / Instantization ke liye) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Powder Separation (Cyclones / Bag Filters) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Sifting (Vibro-Sifter, 300–500 µm screen) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP (Physical Hazard)</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-red-100 border border-red-300 rounded"><strong>Metal Detection / X-ray Inspection</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-4 (Physical)</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging (Multi-layer bags / zaroorat par N₂ flushing) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Storage (Thanda, sukha: ≤25°C, RH &lt;65%) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Steps ka Vistar se Scientific Explanation</h3>
                    <ol class="list-decimal list-outside pl-5 space-y-6">
                        <li>
                            <strong>Milk Reception & Quality Assessment (PRP):</strong>
                            <p class="mt-1">Acchi quality ka raw milk quality powder ki neenv hai. Yeh ek <strong>Prerequisite Programme (PRP)</strong> hai. Sabhi incoming milk par rapid platform tests kiye jaate hain:</p>
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                <li><strong>Organoleptic test:</strong> Color, smell, aur general dikhawat ka visual assessment. Off-flavors, abnormal color, ya visible contamination wali milk reject kari jaati hai.</li>
                                <li><strong>Clot-on-boiling (COB) test:</strong> High-acid ya colostrum milk detect karta hai jo heat treatment ke dauran jam (coagulate) ho jaayegi.</li>
                                <li><strong>Alcohol test (68–75% ethanol):</strong> Protein stability assess karta hai. Jo milk clot ho jaaye uska matlab hai ki uski heat stability kharab hai (zyada acidity, zyada ionic calcium, ya colostrum). Ramsdell ke principle par based hai—ethanol dielectric constant kam kar deta hai, jisse colloidal calcium phosphate destabilize ho jaata hai.</li>
                                <li><strong>Acidity test (titrable acidity):</strong> Normal bovine milk: 0.13–0.16% lactic acid. 0.18% se zyada values microbial fermentation indicate karti hain.</li>
                                <li><strong>Fat & SNF (Gerber/Milkoscan):</strong> Payment aur process routing decide karta hai.</li>
                                <li><strong>Antibiotic residue screening (Delvotest, SNAP test):</strong> β-lactam, tetracycline, sulfonamide screening. Positive lots reject kiye jaate hain.</li>
                                <li><strong>Somatic Cell Count (SCC):</strong> Udder health ka indicator. SCC >400,000 cells/mL subclinical mastitis indicate karta hai; aisi milk mein plasmin, lipase, aur immunoglobulins badhe hue hote hain jo powder quality aur shelf life kam karte hain.</li>
                                <li><strong>Methylene Blue Reduction Test (MBRT):</strong> Milk 4 ghante se pehle decolorize nahi honi chahiye (Grade I). Microbial load ko indirectly reflect karta hai—viable bacteria apni metabolic reductases ke through dye ko reduce kar dete hain.</li>
                                <li><strong>Adulterant screening:</strong> Urea, starch, maltodextrin, hydrogen peroxide, neutralizers (sodium bicarbonate, NaOH), detergents ki jaanch.</li>
                                <li><strong>Aflatoxin M1 testing (periodic):</strong> FSSAI limit: 0.5 µg/kg; Codex limit: 0.5 µg/kg. Aflatoxin M1, Aflatoxin B1 ka hydroxylated metabolite hai, jo doodh mein tab excrete hota hai jab cattle contaminated feed khaate hain.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Chilled Storage (PRP):</strong>
                            <p class="mt-1">Raw milk ko reception ke 2–3 ghante ke andar ≤4°C tak thanda karke insulated silos mein store kiya jaata hai. Is temperature par, psychrotrophic bacteria (jaise <em>Pseudomonas fluorescens</em>, <em>P. fragi</em>) ab bhi grow kar sakte hain, jo heat-stable extracellular proteases aur lipases produce karte hain (UHT treatment ke baad bhi active rehte hain) jo final powder mein bitterness, gelation, aur rancidity ka kaaran bante hain. Isliye, cold storage 48 ghante se zyada nahi hona chahiye. 4°C par psychrotrophs ka generation time ~12–18 ghante hai, aur significant enzymatic activity 10<sup>6</sup> cfu/mL ke upar hoti hai.</p>
                        </li>
                        <li>
                            <strong>Pre-heating & Cream Separation (oPRP):</strong>
                            <p class="mt-1">Milk ko plate heat exchanger (PHE) mein 45–55°C tak garam kiya jaata hai taaki viscosity kam ho aur separation efficiency optimize ho. Is temperature par, fat partially liquid state mein hota hai, jo centrifugal separator mein coalescence ko aasaan banata hai.</p>
                            <p class="mt-1"><strong>Centrifugal Separator:</strong> Modern hermetic disc-stack separators 6,000–8,000 rpm par operate karte hain, jo 6,000–8,000 × g tak centrifugal forces generate karte hain. Principle Stokes' Law par depend karta hai:</p>
                            <p class="mt-1 text-center font-mono">v = [d²(ρ<sub>p</sub> − ρ<sub>f</sub>) × ω²r] / 18η</p>
                            <p class="mt-1 text-sm text-gray-600">Jahaan v = separation velocity, d = fat globule diameter, ρ<sub>p</sub> aur ρ<sub>f</sub> = plasma aur fat ki densities, ω = angular velocity, r = radial distance, η = viscosity. Bade fat globules tezi se separate hote hain. Separator skim milk fat ko ~0.05–0.1% tak kam kar deta hai.</p>
                            <p class="mt-1">Yeh step ek <strong>oPRP</strong> hai kyunki effective separation fat content ko control karti hai—ek quality parameter aur final powder ki oxidative stability mein yogdaan deti hai. Yeh clarification step ka kaam bhi karti hai, somatic cells, debris, aur kuch spores ko hata deti hai (bactofugation principle).</p>
                        </li>
                        <li>
                            <strong>Pasteurization (CCP-1 — Biological Hazard):</strong>
                            <p class="mt-1">Skim milk ko HTST (High Temperature Short Time: 72°C × 15 sec) ya holder method (63°C × 30 min) se pasteurize kiya jaata hai. Yeh ek <strong>Critical Control Point (CCP-1)</strong> hai.</p>
                            <p class="mt-1"><strong>Scientific basis:</strong> Pasteurization <em>Coxiella burnetii</em> ka minimum 5-log<sub>10</sub> (99.999%) reduction achieve karne ke liye design kiya gaya hai, jo milk mein sabse zyada heat-resistant non-spore-forming pathogen hai (D<sub>72°C</sub> = 0.5–1.0 sec). 72°C × 15 sec par, sabhi vegetative pathogens (<em>Salmonella</em>, <em>E. coli</em> O157:H7, <em>Listeria monocytogenes</em>, <em>Campylobacter</em>, <em>Mycobacterium bovis</em>) destroy ho jaate hain.</p>
                            <p class="mt-1"><strong>Monitoring:</strong> Holding tube ke exit par calibrated RTD (Resistance Temperature Detector) sensors se temperature ki continuous recording. Agar temperature set point se neeche gire to Flow diversion valve (FDV) automatically under-processed milk ko balance tank mein wapas divert kar deta hai.</p>
                            <p class="mt-1"><strong>Verification:</strong></p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Alkaline Phosphatase (ALP) test:</strong> Negative hona chahiye (≤350 mU/L Codex ke anusaar). ALP raw milk mein naturally hone wala enzyme hai jiska D<sub>72°C</sub> ≈ 3 sec hai. Iska inactivation adequate pasteurization confirm karta hai.</li>
                                <li><strong>Lactoperoxidase (LPO) test:</strong> HTST pasteurization ke baad positive hona chahiye (LPO D<sub>72°C</sub> ≈ 30 sec; >80°C par inactivate hota hai). ALP negative ke saath positive LPO confirm karta hai ki sahi HTST hua hai bina excessive heat treatment ke.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Pre-heating / Forewarming (CCP-2 — Biological + Quality):</strong>
                            <p class="mt-1">Evaporation se pehle, pasteurized skim milk ko pasteurization se aage ek specific, controlled heat treatment diya jaata hai. Yeh ek <strong>CCP-2</strong> hai kyunki yeh additional microbiological safety provide karta hai (khaaskar thermophilic spore counts kam karna) aur critically final powder ki heat classification (LH, MH, HH) aur functional properties decide karta hai.</p>
                            <div class="overflow-x-auto mt-2">
                                <table class="w-full text-left border-collapse text-sm">
                                    <thead class="bg-muted">
                                        <tr>
                                            <th class="p-2 border">Target Heat Class</th>
                                            <th class="p-2 border">Temperature × Time</th>
                                            <th class="p-2 border">Equipment</th>
                                            <th class="p-2 border">Mukhya Protein Changes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td class="p-2 border">Low Heat</td><td class="p-2 border">72°C × 15 sec (sirf pasteurization)</td><td class="p-2 border">PHE</td><td class="p-2 border">Minimal denaturation (&lt;10% β-Lg). Native whey proteins bache rehte hain.</td></tr>
                                        <tr><td class="p-2 border">Medium Heat</td><td class="p-2 border">85–90°C × 30 sec se 2 min</td><td class="p-2 border">PHE / THE</td><td class="p-2 border">Moderate denaturation (30–75% β-Lg). Intermediate functionality.</td></tr>
                                        <tr><td class="p-2 border">High Heat</td><td class="p-2 border">90–95°C × 5–10 min ya 120°C × 1–2 sec (DSI)</td><td class="p-2 border">THE / DSI</td><td class="p-2 border">Extensive denaturation (>80% β-Lg). κ-casein/β-Lg complexes ka formation disulfide interchange ke through. Sulfhydryl groups (-SH) exposed → antioxidant effect.</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p class="mt-2"><strong>Direct Steam Injection (DSI):</strong> Live culinary steam (≥99.5% quality, food-grade) seedha milk mein inject kiya jaata hai, jisse lagbhag turant 120–150°C tak heating hoti hai. Iske baad vacuum vessel mein flash cooling hoti hai, jo added water (steam condensate), dissolved gases, aur kuch volatile off-flavors ko bhi hata deti hai. DSI bahut precise temperature control provide karta hai aur equivalent temperatures par indirect methods ki tulna mein thermal damage ko minimize karta hai. High-heat SMP production ke liye yeh preferred hai.</p>
                            <p class="mt-2"><strong>Tubular Heat Exchanger (THE):</strong> High-viscosity ya high-temperature applications ke liye use hota hai jahaan PHE gasket limitations aati hain. THE medium/high-heat classification ke liye lower temperatures par longer holding times provide karta hai.</p>
                        </li>
                        <li>
                            <strong>Multi-Effect Falling-Film Evaporation (oPRP):</strong>
                            <p class="mt-1">Yeh paani nikalne ka sabse energy-efficient step hai aur ek critical <strong>oPRP</strong> hai. Pre-heated skim milk ko ~9% TS se 45–52% TS tak multi-effect evaporator (typically 3 se 7 effects) mein concentrate kiya jaata hai. Spray drying se pehle concentrate karna zaroori hai kyunki evaporation paani nikalne mein spray drying se lagbhag 10× zyada energy-efficient hai (evaporator: ~0.15–0.25 kJ/kg paani; spray dryer: ~3.5–5.0 kJ/kg paani steam economy ke hisaab se).</p>
                            
                            <h4 class="font-semibold mt-3 mb-1">Multi-Effect Evaporation ka Principle:</h4>
                            <p>Har "effect" progressively lower pressure aur temperature par operate karta hai. Fresh steam pehle effect ko chalata hai. Pehle effect mein ubalti milk se jo vapour generate hota hai woh doosre effect ke liye heating medium ka kaam karta hai, aur aise hi aage. Yeh cascade 3–7 kg paani evaporated per kg steam consumed ki steam economy achieve karta hai (single-effect ke liye 1.0 ke mukable).</p>
                            
                            <h4 class="font-semibold mt-3 mb-1">Mukhya Equipment Components:</h4>
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                                <li><strong>Falling-Film Evaporator (Calandria):</strong> Yeh har effect ka dil hai. Ismein ek vertical tube bundle hota hai (tubes typically 50 mm diameter × 8–12 m length) jo ek shell mein enclosed hota hai. Steam shell side par flow hota hai; milk top par ek distribution plate se tubes ki inner surface par patli film (1–3 mm) ke roop mein distribute hoti hai, aur gravity se neeche behti hai. Badi surface area aur patli film rapid heat transfer enable karte hain (overall U = 1,500–3,000 W/m²·K) chhoti residence times par (seconds per pass), jisse thermal damage minimize hota hai. Kam pressure ki wajah se low temperatures (40–70°C) par boiling hoti hai.</li>
                                <li><strong>Vapor Separator (Cyclone):</strong> Har effect mein ek separator hota hai jo concentrated milk ko generated water vapor se alag karta hai, jisse agale effect ke heating medium mein liquid carryover (entrainment) na ho.</li>
                                <li><strong>Thermocompressor (TVR) / Mechanical Vapor Recompressor (MVR):</strong>
                                    <ul class="list-circle pl-5 mt-1 space-y-1">
                                        <li><strong>TVR (Thermal Vapor Recompression):</strong> Ek steam-jet thermocompressor high-pressure motive steam use karta hai taaki baad ke effect se low-pressure vapor ko entrain aur recompress kare, ise heating medium ke roop mein recycle kare. Steam economy 1.5–2× tak badhta hai.</li>
                                        <li><strong>MVR (Mechanical Vapor Recompression):</strong> Ek electrically driven compressor (turbo-fan) single effect se sabhi vapor ko higher pressure/temperature tak recompress karta hai, startup ke baad live steam ki zaroorat khatam kar deta hai. 20–40 effects ke barabar steam economies achieve karta hai. Capital-intensive hai lekin bahut energy-efficient; bade plants mein use hota hai.</li>
                                    </ul>
                                </li>
                                <li><strong>Surface Condenser:</strong> Last effect se final vapor ko cooling water use karke surface condenser (shell-and-tube type) mein condense kiya jaata hai. Yeh condenser system mein vacuum create aur maintain karta hai. Condensate (cow water) ek pure water stream hai jise CIP (cleaning-in-place) ya boiler feed water ke liye reuse kiya ja sakta hai.</li>
                                <li><strong>Vacuum System:</strong> Condenser se maintain hota hai aur liquid ring vacuum pump ya steam ejector non-condensable gases (air, CO₂) ko nikalne mein madad karta hai jo nahi to heat transfer efficiency kam karenge aur boiling point badha denge.</li>
                            </ul>
                            
                            <h4 class="font-semibold mt-3 mb-1">Evaporation ke Dauran Critical Quality Considerations:</h4>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Viscosity management:</strong> ~45% TS se aage concentration badhne par, viscosity tezi se badhti hai (skim milk ke liye 48–50% TS se upar exponentially), jo heat transfer aur flow rates kam karti hai. Concentrate ki age-thickening (casein micelle interaction ki wajah se) holding ke dauran viscosity aur badha sakti hai.</li>
                                <li><strong>Maillard reaction onset:</strong> Elevated temperatures aur high concentration par, lactose (reducing sugar) aur proteins ke lysine residues ke beech Maillard reaction accelerate hoti hai, jisse browning, nutritional value ka loss (available lysine kam hota hai), aur off-flavors aate hain. Vacuum mein low temperatures (40–70°C) par operate karne se yeh minimize hota hai.</li>
                                <li><strong>Fouling:</strong> Evaporator tubes par protein aur mineral deposits heat transfer kam karte hain. Alternating alkaline (NaOH 1–2%, 70–80°C) aur acid (HNO₃ 0.5–1%, 65–70°C) washes se regular CIP cycles (har 10–20 ghante operation ke baad) zaroori hain.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Spray Drying (CCP-3 — Biological + Chemical Hazard):</strong>
                            <p class="mt-1">Yeh powder manufacturing process ka core hai aur ek <strong>CCP-3</strong> hai. Concentrated milk (~48% TS) ko fine droplets mein atomize karke hot air ke sampark mein dry kiya jaata hai. Rapid moisture removal liquid concentrate ko free-flowing powder mein convert kar deta hai.</p>
                            
                            <h4 class="font-semibold mt-3 mb-1">Spray Drying ke Stages:</h4>
                            <p><strong>a) Atomization:</strong> Concentrate ko laakhon fine droplets (10–200 µm diameter, mean ~50–80 µm standard SMP ke liye) mein toda jaata hai taaki surface-area-to-volume ratio maximize ho aur rapid uniform drying ho sake.</p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Pressure Nozzle Atomization (Single-fluid):</strong> High-pressure pump (150–300 bar) concentrate ko nozzle mein ek chhote orifice (swirl chamber + orifice insert, typically 0.5–2 mm diameter) se force karta hai. Liquid ek patli conical sheet ke roop mein nikalti hai jo aerodynamic instability (Rayleigh-Taylor instability) ki wajah se droplets mein toot jaati hai. Relatively uniform, spherical particles banate hain dense internal structure ke saath. Particle size pressure, orifice size, aur feed concentration se control hota hai.</li>
                                <li><strong>Two-fluid (Pneumatic) Nozzle:</strong> Compressed air (2–6 bar) liquid stream ko todne ke liye use hota hai. Finer droplets produce karta hai lekin zyada energy consume karta hai; specialty powders ke liye use hota hai.</li>
                                <li><strong>Rotary (Centrifugal) Atomizer:</strong> Concentrate ko high-speed spinning disc (10,000–30,000 rpm, disc diameter 50–200 mm) ke center mein feed kiya jaata hai. Centrifugal force liquid ko edge tak failati hai, ek thin film banati hai jo droplets mein disintegrate ho jaati hai. Wider particle size distribution produce karta hai; sticky/viscous feeds ke liye behtar.</li>
                            </ul>

                            <p class="mt-2"><strong>b) Drying Chamber:</strong> Atomized droplets ek bade cylindrical chamber (diameter 6–12 m, height 15–30 m bade installations mein) mein hot air se milte hain. Do prakar ke air-flow configurations hain:</p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Co-current flow:</strong> Hot air aur droplets ek hi direction mein travel karte hain (dono top se enter karte hain). Sabse garam hawa sabse geeli droplets se contact karti hai, jisse overheating se bachav hota hai. Dairy powders ke liye yeh sabse common configuration hai aur sabse zyada heat-sensitive product produce karta hai, kyunki particle temperature kabhi bhi outlet air temperature (~80–98°C) se zyada nahi hoti. Drying air ka wet-bulb temperature constant-rate drying period ke dauran droplet temperature (~45–55°C) decide karta hai, aur dry-bulb outlet air temperature (~80–98°C) falling-rate period ke dauran final particle temperature aur moisture content decide karta hai.</li>
                                <li><strong>Counter-current flow:</strong> Air neeche se enter hoti hai, product upar se. Hot air sabse dry powder se contact karti hai, kam moisture achieve karta hai lekin heat damage ka risk hota hai. Dairy ke liye akele mein rarely use hota hai.</li>
                                <li><strong>Mixed-flow:</strong> Dono ke elements combine karta hai; kuch compact dryer designs mein use hota hai.</li>
                            </ul>

                            <p class="mt-2"><strong>c) Drying Kinetics:</strong> Ek droplet ki drying do phases mein hoti hai:</p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Constant Rate Period:</strong> Surface water freely evaporate hota hai. Droplet temperature hawa ke wet-bulb temperature (~45–55°C) par rehta hai. Heat transfer evaporation drive karta hai: Q = h·A·(T<sub>air</sub> – T<sub>wb</sub>). Yeh dominant phase hai, jismein ~90% moisture milliseconds se seconds mein nikal jaata hai.</li>
                                <li><strong>Falling Rate Period:</strong> Ek dry surface crust ban jaata hai, aur moisture transport diffusion-limited ho jaata hai. Particle temperature outlet air temperature (80–98°C) ki taraf badhta hai. Yeh phase final moisture content decide karta hai aur thermal damage (Maillard browning, protein denaturation, SMP mein lactose crystallization) se bachne ke liye critical hai. Amorphous lactose matrix ka glass transition temperature (T<sub>g</sub>) yahan relevant ho jaata hai.</li>
                            </ul>

                            <p class="mt-2"><strong>d) Air Heating System:</strong> Inlet air ko 180–220°C tak garam kiya jaata hai:</p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li>Indirect steam heaters (steam coils 10–15 bar par)</li>
                                <li>Direct gas burners (natural gas/LPG) — combustion by-products (NO<sub>x</sub>) se bachne ke liye careful control zaroori</li>
                                <li>Air ko HEPA/EPA filters (EU class H13/E11) se filter kiya jaata hai taaki chamber mein enter karne se pehle microorganisms aur particulates nikal jaayein</li>
                            </ul>

                            <h4 class="font-semibold mt-3 mb-1">CCP-3 Hazard Analysis & Controls:</h4>
                            <div class="overflow-x-auto mt-2">
                                <table class="w-full text-left border-collapse text-sm">
                                    <thead class="bg-muted">
                                        <tr>
                                            <th class="p-2 border">Hazard</th>
                                            <th class="p-2 border">Critical Limit</th>
                                            <th class="p-2 border">Monitoring</th>
                                            <th class="p-2 border">Corrective Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td class="p-2 border">Thermophilic spores ka survival (B. cereus, B. licheniformis, Clostridium spp.)</td><td class="p-2 border">Outlet air temp ≥ 80°C; Powder moisture ≤ 5.0%</td><td class="p-2 border">Inlet/outlet air temps ki continuous recording; online moisture analyzer (NIR)</td><td class="p-2 border">Product divert karo; inlet temp badhao ya feed rate kam karo; investigate aur recalibrate karo</td></tr>
                                        <tr><td class="p-2 border">Maillard reaction products (chemical – lysine loss, furosine/HMF formation)</td><td class="p-2 border">Outlet air temp ≤ 98°C; Discharge par Powder temperature ≤ 45°C</td><td class="p-2 border">Outlet temp monitoring; periodic furosine/lactulose analysis</td><td class="p-2 border">Inlet air temperature kam karo; feed flow rate badhao</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h4 class="font-semibold mt-3 mb-1">Thermophilic Spore Contamination — Ek Mukhya Chinta:</h4>
                            <p>Thermophilic spore-forming bacteria (<em>Bacillus stearothermophilus</em>, <em>B. licheniformis</em>, <em>Geobacillus</em> spp.) evaporators aur dryers ke garam, geele zones mein palte hain. Ye dead legs, gaskets, aur un surfaces par biofilms banate hain jahaan temperature 40–65°C hota hai. Finished SMP mein spore counts &lt;1,000 per gram hone chahiye (customer specifications aksar &lt;500/g). Control strategies: production run lengths limit karna (CIP ke beech max 18–20 ghante), sporicide ke saath proper CIP, aur condensation zones se bachna.</p>
                        </li>
                        <li>
                            <strong>Fluidized Bed Drying / Cooling (oPRP):</strong>
                            <p class="mt-1">Modern two-stage ya three-stage drying systems mein, primary spray dryer moisture ko ~6–8% tak kam karta hai. Phir powder ek integrated ya external <strong>vibro-fluidized bed</strong> (VFB) mein girta hai jahaan:</p>
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                <li><strong>Second Stage (Drying):</strong> Garam hawa (60–80°C) gently powder bed ko fluidize karti hai, moisture ko 3.5–4.5% tak kam karti hai spray chamber ki tulna mein bahut kam thermal stress ke saath. Kam air velocity aur gentle movement agglomeration allow karti hai agar lecithin ya steam apply ho.</li>
                                <li><strong>Third Stage (Cooling):</strong> Cool dehumidified air (10–20°C) powder ko ≤30°C tak thanda karti hai, jo amorphous lactose ke glass transition temperature (T<sub>g</sub>) (~40–50°C at 3–4% moisture) se achchi tarah neeche hai. Yeh caking rokne aur free-flowing powder ensure karne ke liye bahut zaroori hai.</li>
                            </ul>
                            <p class="mt-2"><strong>Glass Transition Temperature (T<sub>g</sub>):</strong> SMP mein ~52% lactose hota hai, jo spray drying ke baad amorphous (glassy) state mein hota hai. T<sub>g</sub> woh temperature hai jis par amorphous matrix rigid glassy state se rubbery, sticky state mein badalta hai. Agar powder temperature T<sub>g</sub> se zyada ho jaaye (high moisture, high temperature, ya high humidity ki wajah se), lactose molecules ko mobility mil jaati hai, jisse hota hai: (i) stickiness aur caking, (ii) amorphous lactose ka crystallization (bound water release hota hai, degradation accelerate hoti hai), aur (iii) structural collapse. Gordon-Taylor equation moisture content ke function mein T<sub>g</sub> predict karne ke liye use hota hai. 4% moisture par SMP ke liye, T<sub>g</sub> ≈ 45–50°C.</p>
                        </li>
                        <li>
                            <strong>Fines Return & Instantization (PRP / oPRP):</strong>
                            <p class="mt-1">Fine particles (&lt;50 µm) jo cyclones aur bag filters se collect hote hain unhe pneumatically drying chamber ke top ya atomization zone tak wapas bheja jaata hai. Ye fines wet atomized droplets se takrate hain, jisse agglomerated (bade, porous) particles (150–400 µm) bante hain. Is process ko <strong>straight-through agglomeration</strong> kehte hain aur yeh improved reconstitution properties wala "instant" powder produce karta hai.</p>
                            <p class="mt-1">SMP ki enhanced instantization ke liye (jo inherently wet hone mein mushkil hai high protein content aur hydrophobic surface ki wajah se), <strong>lecithin (soy ya sunflower, 0.1–0.5% weight ke hisaab se)</strong> agglomerated powder par fluidized bed mein spray kiya ja sakta hai. Lecithin ek amphiphilic phospholipid hai jo particle surface par apne hydrophilic head ko bahar orient karta hai, jisse wettability dramatically improve hoti hai (wetting time >120 sec se &lt;15 sec tak kam ho jaata hai).</p>
                        </li>
                        <li>
                            <strong>Powder Separation (PRP):</strong>
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                <li><strong>Cyclones:</strong> Centrifugal separators jo vortex principle use karke exhaust air stream se powder particles alag karte hain. Air-powder mixture tangentially enter karta hai; bhaari particles deewar ki taraf fenkhe jaate hain aur neeche collection hopper mein spiral karke aate hain, jabki saaf hawa upar se nikalti hai. Collection efficiency: >10 µm particles ke liye 95–99%.</li>
                                <li><strong>Bag Filters (Baghouse):</strong> Fabric filter bags (polyphenylene sulfide, PTFE, polyester) sabse fine particles (&lt;10 µm) capture karte hain jo cyclones se nikal jaate hain. Collection efficiency: >99.9%. Emission control, product recovery, aur environmental contamination rokne ke liye critical. Bags periodically reverse pulse-jet compressed air se clean kiye jaate hain.</li>
                                <li><strong>Roots Blower (Rotary Lobe Blower):</strong> Ek positive-displacement blower jo cyclones se sifter/packing line tak pneumatic powder conveying ke liye zaroori air pressure differential (suction/pressure) create karta hai. Yeh drying system ke andar pressure balance maintain karne mein bhi madad karta hai.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Sifting (PRP — Physical Hazard Control):</strong>
                            <p class="mt-1">Powder ek <strong>vibro-sifter</strong> (vibratory screen separator) se guzarta hai jismein 300–500 µm ka screen hota hai (regular ya instant grade ke hisaab se). Yeh oversized particles, lumps, scorched particles, aur koi bhi foreign matter hata deta hai. Yeh physical hazard control ke liye PRP hai.</p>
                        </li>
                        <li>
                            <strong>Metal Detection / X-Ray Inspection (CCP-4 — Physical Hazard):</strong>
                            <p class="mt-1">Ek inline metal detector (ya badhte taur par, X-ray inspection system) packaged ya in-line product ko metallic foreign bodies ke liye scan karta hai (equipment wear, maintenance, ya raw material contamination se). Yeh physical hazard control ke liye <strong>CCP-4</strong> designate kiya gaya hai.</p>
                            <div class="overflow-x-auto mt-2">
                                <table class="w-full text-left border-collapse text-sm">
                                    <thead class="bg-muted">
                                        <tr>
                                            <th class="p-2 border">Contaminant Type</th>
                                            <th class="p-2 border">Metal Detector Sensitivity (typical)</th>
                                            <th class="p-2 border">X-Ray Sensitivity (typical)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td class="p-2 border">Ferrous metals</td><td class="p-2 border">≥ 1.5 mm</td><td class="p-2 border">≥ 1.0 mm</td></tr>
                                        <tr><td class="p-2 border">Non-ferrous metals (Al, Cu)</td><td class="p-2 border">≥ 2.0 mm</td><td class="p-2 border">≥ 1.5 mm</td></tr>
                                        <tr><td class="p-2 border">Stainless steel (316)</td><td class="p-2 border">≥ 2.5 mm</td><td class="p-2 border">≥ 1.5 mm</td></tr>
                                        <tr><td class="p-2 border">Glass, stone, dense plastic</td><td class="p-2 border">Detect nahi hota</td><td class="p-2 border">≥ 2.0–3.0 mm</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                        <li>
                            <strong>Packaging (PRP):</strong>
                            <p class="mt-1">Powder ko multi-layer bags (typically 3-ply kraft paper polyethylene (PE) inner liner ke saath, ya 25 kg multi-wall bags) mein bulk supply ke liye, ya consumer packs (laminated pouches, N₂ flush wali tin cans) mein pack kiya jaata hai. PE liner moisture aur oxygen barrier ka kaam karti hai.</p>
                            <p class="mt-1"><strong>Modified Atmosphere Packaging (MAP):</strong> Extended shelf life ke liye, headspace air ko nitrogen (N₂) ya N₂/CO₂ mixture se gas flushing karke replace kiya jaata hai. Target residual oxygen: &lt;2% (ideally &lt;1%). Yeh WMP ke liye khaaskar zaroori hai lekin SMP ke liye bhi Maillard browning aur residual fat ki oxidative degradation rokne ke liye faydemand hai.</p>
                            <p class="mt-1">Packaging area hygiene (positive air pressure, HEPA-filtered air, controlled access) post-process contamination rokne ke liye ek critical PRP hai, khaaskar <em>Salmonella</em>, <em>Cronobacter sakazakii</em> (pehle <em>Enterobacter sakazakii</em>), aur doosre environmental pathogens se.</p>
                        </li>
                        <li>
                            <strong>Storage (PRP):</strong>
                            <p class="mt-1">Finished SMP ko thande (≤25°C), sukhe (RH &lt;65%), achchi hawa wale warehouses mein store karna chahiye, seedhi dhoop, smelly materials, aur chemicals se door. Shelf life typically SMP ke liye 12–18 mahine aur WMP ke liye 6–12 mahine hoti hai.</p>
                            <p class="mt-1"><strong>Storage stability factors:</strong></p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Moisture uptake:</strong> Amorphous lactose hygroscopic hota hai. Moisture absorption a<sub>w</sub> badhata hai aur T<sub>g</sub> kam karta hai, jisse caking, lactose crystallization, aur accelerated Maillard browning hoti hai. Lactose crystallization ke liye critical a<sub>w</sub> ≈ 0.37–0.44 at 25°C.</li>
                                <li><strong>Maillard browning:</strong> Reducing sugars (lactose) aur free amino groups (lysine residues) ke beech non-enzymatic reaction. Temperature, moisture, aur a<sub>w</sub> ke saath rate badhta hai. Brown discoloration, off-flavors (baasi, caramelized), aur nutritional value ka loss (blocked lysine) hota hai. Furosine (early indicator) aur HMF (5-hydroxymethylfurfural) levels se monitor hota hai.</li>
                                <li><strong>Temperature abuse:</strong> 30°C se zyada par storage sabhi deteriorative reactions ko dramatically accelerate karta hai.</li>
                            </ul>
                        </li>
                    </ol>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Finished SMP ki Quality Testing</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Test Parameter</th>
                                    <th class="p-2 border">Method</th>
                                    <th class="p-2 border">Typical Specification</th>
                                    <th class="p-2 border">Mahatva (Significance)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Moisture</td><td class="p-2 border">IS 11623 / IDF 26 (Oven method, 102°C × 2h) ya Karl Fischer</td><td class="p-2 border">≤ 4.0–5.0%</td><td class="p-2 border">Storage stability, T<sub>g</sub></td></tr>
                                <tr><td class="p-2 border">Fat (free fat, total fat)</td><td class="p-2 border">Röse-Gottlieb (IS 12333 / IDF 9C) / Mojonnier</td><td class="p-2 border">Total fat ≤ 1.5%; Free fat: varies</td><td class="p-2 border">Oxidative stability, compliance</td></tr>
                                <tr><td class="p-2 border">Protein (N × 6.38)</td><td class="p-2 border">Kjeldahl (IS 7219 / IDF 20B) / Dumas combustion</td><td class="p-2 border">≥ 34% of SNF</td><td class="p-2 border">Nutritional value, functionality</td></tr>
                                <tr><td class="p-2 border">WPNI</td><td class="p-2 border">ADPI method / Harland-Ashworth (turbidimetric at pH 4.6)</td><td class="p-2 border">LH: ≥6.0; MH: 1.51–5.99; HH: ≤1.5 mg/g</td><td class="p-2 border">Heat classification & end-use suitability</td></tr>
                                <tr><td class="p-2 border">Insolubility Index</td><td class="p-2 border">IDF 129 / ADPI (reconstitute + centrifuge)</td><td class="p-2 border">≤ 1.0–2.0 mL</td><td class="p-2 border">Reconstitution quality</td></tr>
                                <tr><td class="p-2 border">Scorched Particles</td><td class="p-2 border">ADPI / GEA Niro (filter disc comparison)</td><td class="p-2 border">Disc A ya B (≤15 mg)</td><td class="p-2 border">Dryer fouling aur process control ka indicator</td></tr>
                                <tr><td class="p-2 border">Bulk Density (loose/tapped)</td><td class="p-2 border">IDF 134 / graduated cylinder method</td><td class="p-2 border">Regular: 550–650 g/L; Instant: 350–500 g/L</td><td class="p-2 border">Packaging efficiency, reconstitution</td></tr>
                                <tr><td class="p-2 border">Wettability</td><td class="p-2 border">IDF 87 (powder ko paani ki satah ke neeche doobne ka samay)</td><td class="p-2 border">Instant: ≤ 15 sec; Regular: ≤ 60 sec</td><td class="p-2 border">Consumer convenience</td></tr>
                                <tr><td class="p-2 border">Dispersibility</td><td class="p-2 border">IDF 87 (reconstitution ke baad % dissolved)</td><td class="p-2 border">≥ 85%</td><td class="p-2 border">Reconstitution completeness</td></tr>
                                <tr><td class="p-2 border">Titratable Acidity</td><td class="p-2 border">AOAC / IS 1166 (10% TS tak reconstituted)</td><td class="p-2 border">≤ 0.15% lactic acid (18°T)</td><td class="p-2 border">Raw milk quality indicator</td></tr>
                                <tr><td class="p-2 border">TPC</td><td class="p-2 border">IS 5402 / IDF 100 (pour plate, 30°C × 72h)</td><td class="p-2 border">≤ 40,000 cfu/g</td><td class="p-2 border">Overall hygienic quality</td></tr>
                                <tr><td class="p-2 border">Thermophilic spore count</td><td class="p-2 border">80°C × 10 min par heat + pour plate at 55°C × 48h</td><td class="p-2 border">≤ 500–1,000 cfu/g</td><td class="p-2 border">Process hygiene, run length indicator</td></tr>
                                <tr><td class="p-2 border">Coliforms</td><td class="p-2 border">VRBA / IS 5401 (32°C × 24h)</td><td class="p-2 border">≤ 10 cfu/g</td><td class="p-2 border">Post-pasteurization contamination indicator</td></tr>
                                <tr><td class="p-2 border">Salmonella</td><td class="p-2 border">ISO 6579 / BAM (enrichment + PCR/immunoassay)</td><td class="p-2 border">25 g mein Absent (n=5, c=0)</td><td class="p-2 border">Pathogen safety</td></tr>
                                <tr><td class="p-2 border">Cronobacter sakazakii</td><td class="p-2 border">ISO/TS 22964 (infant formula grade ke liye)</td><td class="p-2 border">10 g mein Absent (n=30, c=0)</td><td class="p-2 border">Infant safety</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">SMP ke liye Comprehensive HACCP Hazard Analysis Summary</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Step</th>
                                    <th class="p-2 border">Hazard Type</th>
                                    <th class="p-2 border">Specific Hazard</th>
                                    <th class="p-2 border">Classification</th>
                                    <th class="p-2 border">Critical Limit</th>
                                    <th class="p-2 border">Monitoring</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Raw Milk Reception</td><td class="p-2 border">B, C, P</td><td class="p-2 border">Pathogens, antibiotics, aflatoxin M1, physical contaminants</td><td class="p-2 border">PRP</td><td class="p-2 border">—</td><td class="p-2 border">Platform tests, supplier approval, MBRT, antibiotic test</td></tr>
                                <tr><td class="p-2 border">Cold Storage</td><td class="p-2 border">B</td><td class="p-2 border">Psychrotrophic growth, protease/lipase production</td><td class="p-2 border">PRP</td><td class="p-2 border">≤4°C, max 48h</td><td class="p-2 border">Temp recording, duration log</td></tr>
                                <tr><td class="p-2 border">Separation</td><td class="p-2 border">P</td><td class="p-2 border">Separator se physical contamination</td><td class="p-2 border">oPRP</td><td class="p-2 border">—</td><td class="p-2 border">Equipment maintenance, CIP</td></tr>
                                <tr><td class="p-2 border">Pasteurization</td><td class="p-2 border">B</td><td class="p-2 border">Vegetative pathogens ka survival</td><td class="p-2 border"><strong>CCP-1</strong></td><td class="p-2 border">≥72°C × 15 sec</td><td class="p-2 border">Continuous temp recording, FDV, ALP test</td></tr>
                                <tr><td class="p-2 border">Pre-heating</td><td class="p-2 border">B</td><td class="p-2 border">Insufficient spore reduction; galat heat class</td><td class="p-2 border"><strong>CCP-2</strong></td><td class="p-2 border">Target heat class ke anusaar (jaise HH ke liye ≥90°C × 5 min)</td><td class="p-2 border">Temp/time recording, WPNI verification</td></tr>
                                <tr><td class="p-2 border">Evaporation</td><td class="p-2 border">B</td><td class="p-2 border">Warm zones mein thermophilic spore growth</td><td class="p-2 border">oPRP</td><td class="p-2 border">Run time ≤18–20h; CIP protocol</td><td class="p-2 border">Run time log, spore count trending</td></tr>
                                <tr><td class="p-2 border">Spray Drying</td><td class="p-2 border">B, C</td><td class="p-2 border">Insufficient drying (spore survival); Maillard products</td><td class="p-2 border"><strong>CCP-3</strong></td><td class="p-2 border">Outlet temp ≥80°C; Moisture ≤5%; Outlet temp ≤98°C</td><td class="p-2 border">Continuous temp, online moisture (NIR)</td></tr>
                                <tr><td class="p-2 border">Fluidized Bed</td><td class="p-2 border">B</td><td class="p-2 border">Air se recontamination; condensation</td><td class="p-2 border">oPRP</td><td class="p-2 border">Air filtration, T<sub>powder</sub> ≤ T<sub>g</sub></td><td class="p-2 border">Air filter integrity, powder temp</td></tr>
                                <tr><td class="p-2 border">Metal Detection</td><td class="p-2 border">P</td><td class="p-2 border">Metal foreign bodies</td><td class="p-2 border"><strong>CCP-4</strong></td><td class="p-2 border">Fe ≥1.5mm, Non-Fe ≥2.0mm, SS ≥2.5mm</td><td class="p-2 border">Har 1–2h test piece validation, reject/alarm log</td></tr>
                                <tr><td class="p-2 border">Packaging</td><td class="p-2 border">B, P</td><td class="p-2 border">Environmental contamination (Salmonella, Cronobacter), physical hazards</td><td class="p-2 border">PRP</td><td class="p-2 border">—</td><td class="p-2 border">Zoning, air monitoring, environmental swabs</td></tr>
                                <tr><td class="p-2 border">Storage</td><td class="p-2 border">C</td><td class="p-2 border">Moisture uptake, Maillard browning, caking</td><td class="p-2 border">PRP</td><td class="p-2 border">≤25°C, RH &lt;65%</td><td class="p-2 border">Temp/RH logging, FIFO, periodic quality checks</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2 text-sm text-gray-600">B = Biological, C = Chemical, P = Physical</p>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Energy Considerations & Sustainability</h3>
                    <p>Milk powder production energy-intensive hai. Typical specific energy consumption:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>Evaporation: 0.2–0.4 kWh/kg paani nikala gaya (MVR ke saath: 0.015–0.02 kWh/kg)</li>
                        <li>Spray Drying: 1.0–1.5 kWh/kg paani nikala gaya</li>
                        <li>1 kg SMP banane ke liye total energy: ~8–12 MJ (sabhi utilities samil)</li>
                    </ul>
                    <p class="mt-2">Modern plants PHE mein heat recovery (regeneration: 90–95%), MVR evaporation, dryer exhaust se waste heat recovery, aur CHP (combined heat and power) systems use karte hain taaki energy consumption aur carbon footprint minimize ho.</p>
                `
            },
            wmp: {
                title: "B. Whole Milk Powder (WMP) Processing",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Whole Milk Powder ka Parichay (Introduction)</h3>
                    <p>Whole Milk Powder (WMP), jise full cream milk powder bhi kehte hain, pasteurized, homogenized whole milk se paani nikaalkar banaya jaata hai. Ismein milk fat (~26–28.5%) aur milk solids non-fat (~68–70%) dono hote hain, jisse yeh full cream milk reconstitute karne ke liye ek convenient base banta hai aur confectionery, chocolate, infant formula, bakery products, ice cream, aur recombined dairy products (recombined UHT milk, yoghurt, evaporated milk) mein ek key ingredient hai.</p>
                    <p class="mt-2">Lagbhag 26–28.5% milk fat (mukhya roop se triacylglycerols jismein ~65% saturated fatty acids, ~30% monounsaturated, aur ~5% polyunsaturated) ki maujoodgi WMP production aur storage ko SMP se kaafi zyada challenging bana deti hai. Primary quality challenge hai <strong>lipids ki oxidative deterioration</strong>, jisse auto-oxidation aur photo-oxidation mechanisms ke through off-flavors (oxidized, tallowy, cardboard jaisi smell) aate hain. Processing parameters—khaaskar pre-heat treatment (sulfhydryl-mediated antioxidant protection ke liye), homogenization (free fat kam karne ke liye), aur packaging (inert atmosphere)—specifically oxidative stability maximize karne ke liye design kiye gaye hain.</p>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">WMP ki Typical Composition</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Component</th>
                                    <th class="p-2 border">Typical Range (%)</th>
                                    <th class="p-2 border">Mahatva (Significance)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Fat</td><td class="p-2 border">26.0–28.5</td><td class="p-2 border">Primary energy source; shelf life decide karta hai (oxidation susceptibility)</td></tr>
                                <tr><td class="p-2 border">Protein (N × 6.38)</td><td class="p-2 border">24.5–27.0</td><td class="p-2 border">Casein:whey ~80:20; fat globules ke around protective matrix banata hai</td></tr>
                                <tr><td class="p-2 border">Lactose</td><td class="p-2 border">36–39</td><td class="p-2 border">Amorphous state; hygroscopic; Maillard reactant</td></tr>
                                <tr><td class="p-2 border">Moisture</td><td class="p-2 border">2.5–4.0</td><td class="p-2 border">Maximum shelf life ke liye 2.5–3.5% par optimal (SMP se kam)</td></tr>
                                <tr><td class="p-2 border">Ash</td><td class="p-2 border">5.5–6.5</td><td class="p-2 border">Minerals; Ca, P, K major elements ke roop mein</td></tr>
                                <tr><td class="p-2 border">Free Fat (% of total fat)</td><td class="p-2 border">1–4 (target &lt;2%)</td><td class="p-2 border">Fat jo protein-lactose matrix se protected nahi hai; oxidation ke liye bahut susceptible; key quality parameter</td></tr>
                                <tr><td class="p-2 border">Peroxide Value (meq O₂/kg fat)</td><td class="p-2 border">≤ 0.3 (taaza); &lt;1.0 (acceptable)</td><td class="p-2 border">Primary oxidation indicator</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">WMP ke Regulatory Standards</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">FSSAI (India)</th>
                                    <th class="p-2 border">Codex (CODEX STAN 207-1999)</th>
                                    <th class="p-2 border">IS 13334 (Part 1) / BIS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border"><strong>Moisture (max, %)</strong></td><td class="p-2 border">5.0</td><td class="p-2 border">5.0</td><td class="p-2 border">4.0</td></tr>
                                <tr><td class="p-2 border"><strong>Milk Fat (min, % m/m)</strong></td><td class="p-2 border">26.0</td><td class="p-2 border">26.0</td><td class="p-2 border">26.0</td></tr>
                                <tr><td class="p-2 border"><strong>Milk Protein in SNF (min, %)</strong></td><td class="p-2 border">34.0</td><td class="p-2 border">34.0</td><td class="p-2 border">34.0</td></tr>
                                <tr><td class="p-2 border"><strong>Insolubility Index (max, ml)</strong></td><td class="p-2 border">2.0</td><td class="p-2 border">2.0 (spray)</td><td class="p-2 border">2.0</td></tr>
                                <tr><td class="p-2 border"><strong>Titratable Acidity (max, % LA)</strong></td><td class="p-2 border">1.5</td><td class="p-2 border">—</td><td class="p-2 border">1.5</td></tr>
                                <tr><td class="p-2 border"><strong>Scorched Particles (max, mg)</strong></td><td class="p-2 border">—</td><td class="p-2 border">22.5 (Disc B)</td><td class="p-2 border">15.0</td></tr>
                                <tr><td class="p-2 border"><strong>TPC (max, cfu/g)</strong></td><td class="p-2 border">40,000</td><td class="p-2 border">50,000</td><td class="p-2 border">40,000</td></tr>
                                <tr><td class="p-2 border"><strong>Coliforms (max, cfu/g)</strong></td><td class="p-2 border">10</td><td class="p-2 border">10</td><td class="p-2 border">10</td></tr>
                                <tr><td class="p-2 border"><strong>Salmonella (/25g)</strong></td><td class="p-2 border">Absent</td><td class="p-2 border">Absent</td><td class="p-2 border">Absent</td></tr>
                                <tr><td class="p-2 border"><strong>S. aureus (max, cfu/g)</strong></td><td class="p-2 border">50</td><td class="p-2 border">—</td><td class="p-2 border">50</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">WMP aur SMP Processing ke Beech Mukhya Antar</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Paksh (Aspect)</th>
                                    <th class="p-2 border">SMP</th>
                                    <th class="p-2 border">WMP</th>
                                    <th class="p-2 border">Scientific Kaaran</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Starting material</td><td class="p-2 border">Skim milk (~0.05% fat)</td><td class="p-2 border">Standardized whole milk (~3.0–3.5% fat)</td><td class="p-2 border">—</td></tr>
                                <tr><td class="p-2 border">Pre-heat treatment</td><td class="p-2 border">Variable (LH/MH/HH application ke hisaab se)</td><td class="p-2 border">Lagbhag hamesha High Heat (≥85°C × 15–30 min ya DSI 120°C)</td><td class="p-2 border">Intense heating β-Lg denature karta hai, -SH groups expose karta hai jo antioxidants ki tarah kaam karte hain, oxygen radicals scavenge karte hain aur pro-oxidant copper ions bind karte hain. WMP shelf life ke liye yeh sabse zaroori factor hai.</td></tr>
                                <tr><td class="p-2 border">Homogenization</td><td class="p-2 border">Generally zaroorat nahi</td><td class="p-2 border"><strong>Bahut zaroori</strong> (two-stage: 150/50 bar)</td><td class="p-2 border">Fat globule size 3–5 µm se &lt;1 µm tak kam karta hai. Casein + whey protein se naya fat globule membrane banata hai, fat ko protective protein layer mein encapsulate karta hai. Free fat ~80% (unhomogenized) se &lt;4% (homogenized) tak kam hota hai.</td></tr>
                                <tr><td class="p-2 border">Evaporation (max TS)</td><td class="p-2 border">48–52% TS</td><td class="p-2 border">42–48% TS (fat ki wajah se higher viscosity ke kaaran kam)</td><td class="p-2 border">Fat high concentrations par viscosity aur stickiness badhata hai, jisse pumpability aur atomization quality limit hoti hai.</td></tr>
                                <tr><td class="p-2 border">Spray drying outlet temp</td><td class="p-2 border">80–98°C</td><td class="p-2 border">75–90°C (thoda kam)</td><td class="p-2 border">Fat ek plasticizer ki tarah kaam karta hai, powder matrix ka T<sub>g</sub> kam karta hai. Kam outlet temp lipid oxidation initiation kam karta hai aur powder flowability maintain karta hai.</td></tr>
                                <tr><td class="p-2 border">Packaging atmosphere</td><td class="p-2 border">Air ya N₂ (optional)</td><td class="p-2 border"><strong>N₂ flush zaroor chahiye</strong> (residual O₂ &lt;2%)</td><td class="p-2 border">Oxygen nikalne se auto-oxidation ka initiation phase delay hota hai. Peroxide formation rate seedha O₂ partial pressure ke proportional hai.</td></tr>
                                <tr><td class="p-2 border">Shelf life</td><td class="p-2 border">18–24 mahine</td><td class="p-2 border">6–12 mahine (air); 18–24 mahine (N₂ flush)</td><td class="p-2 border">Lipid oxidation WMP ka shelf-life-limiting factor hai.</td></tr>
                                <tr><td class="p-2 border">Target moisture</td><td class="p-2 border">3.5–4.5%</td><td class="p-2 border">2.5–3.5%</td><td class="p-2 border">Kam moisture a<sub>w</sub> kam karta hai aur plasticizing fat ki maujoodgi mein amorphous lactose state maintain karne mein madad karta hai.</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Food Safety Controls ke saath WMP ki Processing</h2>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">WMP Production ka Processing Flowchart</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Raw Milk Reception & Quality Testing <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Chilled Storage (≤4°C, max 24 ghante) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Fat:SNF Ratio ka Standardization (jaise 26% fat WMP ke liye 0.375) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Pre-heating & Pasteurization (≥85°C × 15–30 min ya 90°C × 5 min ya DSI 120°C × 2 sec)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1 (Biological + Chemical/Quality)</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Two-Stage Homogenization (150/50 bar at 65–75°C)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">oPRP (Critical Quality)</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Multi-Effect Falling-Film Evaporation (42–48% TS tak) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Concentrate Homogenization (optional second stage, 50–100 bar) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Spray Drying (Inlet: 170–200°C; Outlet: 75–90°C)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2 (Biological + Chemical)</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Vibro-Fluidized Bed Drying & Cooling (Instant grade ke liye Lecithin application) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Cyclone Separation & Fines Return <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Sifting (Vibro-Sifter) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-red-100 border border-red-300 rounded"><strong>Metal Detection / X-ray Inspection</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3 (Physical)</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>N₂ Gas Flushing ke saath Packaging (Residual O₂ ≤ 2%)</strong> <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP (Critical Quality)</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Storage (Thanda, sukha: ≤25°C, RH &lt;65%, roshni se door) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">WMP Processing Steps ka Vistar se Scientific Explanation</h3>
                    <ol class="list-decimal list-outside pl-5 space-y-6">
                        <li>
                            <strong>Milk Reception, Storage & Standardization (PRP, oPRP):</strong>
                            <p class="mt-1">SMP jaisi hi platform tests. WMP ke liye, khaas dhyan diya jaata hai:</p>
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                <li><strong>Lipolysis assessment:</strong> Free fatty acid (FFA) content ya acid degree value (ADV). High FFA lipase activity indicate karta hai (bacterial lipases ya native lipoprotein lipase jo agitation, foaming, ya temperature fluctuation se activate hota hai). FFA &gt;1.0 meq/100g fat undesirable hai. Lipolyzed fat soapy, rancid, goaty off-flavors produce karta hai jo powder mein bhi aate hain.</li>
                                <li><strong>Copper & iron content:</strong> Ye transition metals potent pro-oxidants hain. Cu²⁺ milk mein 0.05 ppm jaisi kam level par bhi WMP mein lipid oxidation ko significantly accelerate kar sakta hai. Stainless steel (grade 304/316) equipment zaroori hai; copper/brass fittings WMP lines mein mana hain.</li>
                            </ul>
                            <p class="mt-2"><strong>Standardization (oPRP):</strong> Whole milk ka fat-to-SNF ratio adjust kiya jaata hai taaki final powder mein target composition aaye. 26% fat aur 70% SNF wali WMP ke liye, ratio hai:</p>
                            <p class="mt-1 text-center font-mono">Fat:SNF ratio = 26/70 = 0.371</p>
                            <p class="mt-1">Kyunki whole milk mein typical ratio (~3.5% fat, ~8.5% SNF = 0.412) zaroorat se zyada hota hai, kuch skim milk daalkar neeche standardize kiya ja sakta hai. Alternatively, zyada fat wali WMP (28.5%) ke liye kam adjustment chahiye. Modern plants mein inline standardization density meters aur fat analyzers (NIR/FTIR) ke saath automatic blending valves se hoti hai.</p>
                        </li>
                        <li>
                            <strong>Pre-heating & Pasteurization (CCP-1 — Biological + Chemical/Quality):</strong>
                            <p class="mt-1">Yeh <strong>WMP quality aur safety ke liye sabse critical processing step</strong> hai. WMP ke liye, high-heat treatment lagbhag universally apply hota hai, pasteurization ko forewarming ke saath ek single, zyada intense step mein combine karke. Yeh <strong>CCP-1</strong> hai.</p>
                            
                            <h4 class="font-semibold mt-3 mb-1">Typical WMP Pre-heat Treatments:</h4>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li>85–90°C × 15–30 minute (indirect, PHE/THE + holding tube/holding tank)</li>
                                <li>90–95°C × 5–10 minute</li>
                                <li>120–130°C × 1–2 second (Direct Steam Injection) uske baad flash cooling</li>
                            </ul>

                            <h4 class="font-semibold mt-3 mb-1">WMP ke liye High-Heat Treatment ke Kai Uddeshya:</h4>
                            <ol class="list-alpha list-outside pl-5 mt-1 space-y-2">
                                <li><strong>Microbiological Safety:</strong> Sabhi vegetative pathogens ka destruction aur thermophilic spore counts mein significant reduction. 90°C × 5 min par, <em>Listeria</em>, <em>Salmonella</em>, aur <em>E. coli</em> O157:H7 ka >8-log reduction achieve hota hai.</li>
                                <li><strong>Lipase Inactivation:</strong> Native bovine milk lipoprotein lipase (LPL) ek relatively heat-labile enzyme hai, jo ~72°C × 15 sec par inactivate ho jaata hai. Lekin, bacterial lipases (<em>Pseudomonas</em> spp. se) extremely heat-stable hote hain (UHT 140°C par bhi survive karte hain). High pre-heating madad karta hai lekin inhe poori tarah inactivate nahi kar sakta. Isliye, kam count wale, taaze milk se shuru karna sabse zaroori hai.</li>
                                <li><strong>Antioxidant Generation (Sulfhydryl Groups):</strong> WMP ke liye yeh unique aur critical function hai. ≥80°C par β-Lactoglobulin denaturation reactive free thiol (-SH) groups expose karta hai (β-Lg ka Cys<sub>121</sub>). Ye -SH groups kaam karte hain:
                                    <ul class="list-circle pl-5 mt-1 space-y-1">
                                        <li><strong>Oxygen scavengers ke roop mein:</strong> -SH + ½O₂ → -SOH (sulfenic acid) → aur oxidation -SO₂H, -SO₃H tak. Yeh dissolved oxygen ko consume kar leta hai isse pehle ki woh unsaturated fatty acids par attack kare.</li>
                                        <li><strong>Free radical scavengers ke roop mein:</strong> -SH + R• → -S• + RH (lipid auto-oxidation mein radical chain propagation ka termination)</li>
                                        <li><strong>Metal chelators ke roop mein:</strong> Thiol groups pro-oxidant transition metal ions (Cu²⁺, Fe²⁺) ko bind kar sakte hain, unki lipid oxidation initiate karne ki catalytic activity kam karte hain.</li>
                                    </ul>
                                    <p class="mt-1">WMP ki antioxidant capacity exposed -SH groups ki sankhya ke seedhe proportional hai aur WPNI ke ulte proportional hai. WPNI ≤ 1.5 mg/g (high heat) wali WMP ki sabse achchi oxidative stability hoti hai, low-heat WMP ke mukable 2–3× shelf life extension ke saath.</p>
                                </li>
                                <li><strong>Volatile Sulfur Compounds ka Release:</strong> Heating H₂S, dimethyl sulfide, aur doosre volatile sulfur compounds produce karti hai jo initially "cooked" ya "heated" flavor dete hain lekin potent antioxidants bhi hain. Ye volatiles storage ke pehle kuch hafton mein dheere-dheere khatam ho jaate hain, jis point par proteins par exposed -SH groups primary antioxidant defense ka kaam sambhalte hain.</li>
                            </ol>
                        </li>
                        <li>
                            <strong>Homogenization (oPRP — Quality ke liye Critical):</strong>
                            <p class="mt-1">Homogenization ek <strong>essential oPRP</strong> hai jo WMP processing ke liye unique hai. Yeh pre-heating ke baad (65–75°C par, jab fat poori tarah liquid hota hai) perform hota hai aur finished powder ki <strong>"free fat"</strong> content control karne ke liye critical hai.</p>
                            
                            <h4 class="font-semibold mt-3 mb-1">Principle:</h4>
                            <p>Garam milk ko high-pressure homogenizer valve mein ek narrow gap (0.1–0.3 mm) se 150–200 bar (first stage) + 30–50 bar (second stage) par force kiya jaata hai. Fat globules combination se disrupt hote hain:</p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Turbulence:</strong> Fluid stream ki high velocity (~100–300 m/s) se bane intense turbulent eddies shear forces lagate hain jo fat globules ko deform aur tod dete hain.</li>
                                <li><strong>Cavitation:</strong> Valve ke paar achanak pressure drop vapor bubbles create karta hai jo violently collapse hote hain, shockwaves generate karte hain jo fat globules ko aur fragment karte hain.</li>
                                <li><strong>Shear:</strong> Narrow gap mein high velocity gradient globules ko intense shear stress deta hai.</li>
                            </ul>
                            <p class="mt-2"><strong>Result:</strong> Fat globule diameter native 3–5 µm (d<sub>3,2</sub>) se ghatkar &lt;1 µm ho jaata hai. Total fat globule surface area ~6–10× badh jaata hai. Yeh newly created surface turant adsorbed casein micelles aur whey proteins (mukhya roop se β-Lg aur α-La) se coat ho jaati hai, ek naya, protein-based fat globule membrane banate hain.</p>

                            <h4 class="font-semibold mt-3 mb-1">Two-Stage Homogenization:</h4>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Pehla stage (150 bar):</strong> Fat globules tod deta hai. Lekin, newly created chhote globules clusters (groups) mein ek saath chipak jaate hain incomplete surface coverage ki wajah se (casein submicelles multiple globules ko span karke bridging karte hain).</li>
                                <li><strong>Doosra stage (50 bar):</strong> In fat globule clusters ko tod deta hai, uniform, disaggregated fat distribution ensure karta hai.</li>
                            </ul>

                            <h4 class="font-semibold mt-3 mb-1">Free Fat par Impact:</h4>
                            <p>"Free fat" powder mein fat ka woh fraction hai jo protein-lactose matrix ke andar encapsulated nahi hai aur organic solvent (petroleum ether) se bina prior digestion ke extract ho sakta hai. Ise powder surface ki solvent extraction (jaise ISO 8070 / IDF 123) se measure kiya jaata hai.</p>
                            <div class="overflow-x-auto mt-2">
                                <table class="w-full text-left border-collapse text-sm">
                                    <thead class="bg-muted">
                                        <tr>
                                            <th class="p-2 border">Condition</th>
                                            <th class="p-2 border">Free Fat (% of total fat)</th>
                                            <th class="p-2 border">Parinaam (Consequence)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td class="p-2 border">Homogenization nahi</td><td class="p-2 border">50–95%</td><td class="p-2 border">Rapid oxidation, poor solubility, greasy/sticky powder, jaldi rancidity</td></tr>
                                        <tr><td class="p-2 border">Single-stage homogenization (100 bar)</td><td class="p-2 border">5–15%</td><td class="p-2 border">Moderate protection</td></tr>
                                        <tr><td class="p-2 border">Two-stage homogenization (150/50 bar)</td><td class="p-2 border">1–4%</td><td class="p-2 border">Achcha encapsulation, extended shelf life, achchi reconstitution</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p class="mt-2">Particle surface par free fat seedha oxygen ke samne exposed hota hai aur auto-oxidation ka primary substrate hai. Yeh powder surface ko hydrophobic bhi banata hai, wettability aur dispersibility kam karti hai. Commercial WMP ke liye target free fat: total fat ka &lt;2%.</p>

                            <h4 class="font-semibold mt-3 mb-1">Homogenization ka Timing:</h4>
                            <p>Homogenization perform ho sakta hai:</p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Evaporation se pehle (upstream):</strong> Zyada common. Fat globules ka behtar protein coverage. Lekin, chhote globules evaporation ke dauran concentrate ki viscosity badhate hain.</li>
                                <li><strong>Evaporation ke baad (downstream):</strong> 45–48% TS par concentrate ko homogenize kiya jaata hai. Concentrate ki zyada viscosity behtar mechanical disruption deti hai lekin incomplete protein adsorption aur powder mein zyada free fat ho sakta hai. Concentrate homogenization ke liye kam pressure (50–100 bar) use hota hai.</li>
                                <li><strong>Dono (upstream + downstream):</strong> Kuch plants upstream mein two-stage homogenization aur gentle downstream homogenization use karte hain optimal results ke liye.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Evaporation (oPRP):</strong>
                            <p class="mt-1">SMP jaisa hi, lekin maximum achievable concentration typically kam hoti hai (42–48% TS vs. SMP ke liye 48–52%) fat phase ki higher viscosity contribution ki wajah se. Fat ki maujoodgi boiling characteristics aur fouling patterns ko bhi affect karti hai. Equipment aur principles (falling-film evaporator, MVR/TVR, vacuum, surface condenser) SMP ke liye describe kiye gaye jaisi hi hain.</p>
                            <p class="mt-1"><strong>WMP ke liye additional consideration:</strong> Fat evaporator ke dead zones mein accumulate ho sakta hai aur heat transfer surfaces par deposit ho sakta hai, efficiency kam karta hai aur burnt/scorched flavors ka potential create karta hai. Zyada frequent CIP cycles chahiye ho sakte hain.</p>
                        </li>
                        <li>
                            <strong>Spray Drying (CCP-2 — Biological + Chemical):</strong>
                            <p class="mt-1">Concentrate ko SMP jaisi hi principles se spray dry kiya jaata hai lekin modified parameters ke saath:</p>
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                <li><strong>Inlet air temperature:</strong> 170–200°C (SMP se thoda kam lipid oxidation aur browning kam karne ke liye)</li>
                                <li><strong>Outlet air temperature:</strong> 75–90°C (fat oxidation minimize karne ke liye carefully controlled jabki adequate drying ensure ho)</li>
                                <li><strong>Target powder moisture:</strong> 2.5–3.5% (SMP se kam kyunki fat phase T<sub>g</sub> depress karta hai, aur glassy state maintain karne aur caking rokne ke liye kam moisture chahiye)</li>
                                <li><strong>Atomization:</strong> WMP ke liye pressure nozzle atomization ko generally rotary atomization se prefer kiya jaata hai kyunki yeh zyada spherical, dense particles banata hai behtar fat encapsulation (kam surface fat) aur zyada bulk density ke saath. Typical nozzle pressure: 180–250 bar.</li>
                            </ul>
                            
                            <h4 class="font-semibold mt-3 mb-1">Particle Morphology & Fat Distribution:</h4>
                            <p>WMP particles ki characteristic vacuolated structure hoti hai (internal air vacuoles) jo drying ke dauran entrapped air/steam ke expansion se banti hai. Fat ideally teen jagah distributed hota hai:</p>
                            <ol class="list-alpha list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Encapsulated fat:</strong> Fat globules jo particle interior mein protein-lactose matrix se poori tarah ghire hue hain. Yeh sabse protected fraction hai (~60–80% total fat well-processed WMP mein).</li>
                                <li><strong>Inner free fat:</strong> Fat jo ruptured globules se drying ke dauran leak hua hai lekin particle interior mein hi hai. Moderate protection.</li>
                                <li><strong>Surface free fat:</strong> Particle ki outer surface par maujood fat. Yeh sabse vulnerable fraction hai aur oxidation ka primary target. Yeh free fat test mein extract hota hai aur ise minimize karna chahiye (total fat ka &lt;2%).</li>
                            </ol>
                            <p class="mt-1">Confocal Laser Scanning Microscopy (CLSM) Nile Red staining ke saath powder particles ke andar fat distribution visualize karne ke liye use hoti hai, jo process optimization ke liye invaluable insights deti hai.</p>
                        </li>
                        <li>
                            <strong>Fluidized Bed Drying, Cooling & Instantization (oPRP):</strong>
                            <p class="mt-1">SMP jaisa hi. Instant WMP ke liye, lecithin (0.2–0.5%) fluidized bed stage mein heated spray system ke through apply kiya jaata hai. Lecithin WMP ke liye khaas taur par zaroori hai kyunki surface free fat powder ko inherently hydrophobic aur wet hone mein mushkil banata hai.</p>
                            <p class="mt-1">Cooling section ko packaging se pehle powder temperature 30°C se neeche (ideally &lt;25°C) laana chahiye. Yeh critical hai kyunki:</p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li>Garam powder lipid oxidation accelerate karta hai (Arrhenius kinetics: har ~10°C increase par rate double)</li>
                                <li>Garam powder T<sub>g</sub> se zyada ho sakta hai (WMP mein fat ki wajah se kam), jisse stickiness aur caking hoti hai</li>
                                <li>Sealed package mein garam powder cooling ke dauran condensation create karta hai, local a<sub>w</sub> badhata hai</li>
                            </ul>
                        </li>
                        <li>
                            <strong>N₂ Gas Flushing ke saath Packaging (oPRP — Critical Quality):</strong>
                            <p class="mt-1">Yeh WMP ke liye unique critical quality control step hai (halaanki kuch markets mein SMP ke liye bhi use hota hai).</p>
                            <h4 class="font-semibold mt-3 mb-1">Gas Flushing ka Science:</h4>
                            <p>Milk fat ka auto-oxidation free radical chain reaction mechanism follow karta hai:</p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Initiation:</strong> RH + O₂ (ya catalyst: Cu²⁺, light, heat) → R• + •OH</li>
                                <li><strong>Propagation:</strong> R• + O₂ → ROO• (peroxy radical); ROO• + RH → ROOH + R• (hydroperoxide formation, cyclic)</li>
                                <li><strong>Termination:</strong> R• + R• → R-R; ROO• + ROO• → non-radical products</li>
                            </ul>
                            <p class="mt-2">Propagation step ke liye oxygen zaroori hai. Headspace O₂ ko 21% (air) se &lt;2% (N₂ flush) tak kam karke, peroxy radical formation ki rate drastically kam ho jaati hai, induction period (detectable rancidity se pehle ka lag phase) 3–5× badh jaata hai.</p>
                            
                            <h4 class="font-semibold mt-3 mb-1">Practical Implementation:</h4>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Bulk bags (25 kg):</strong> Filling ke baad, bag mein ek lance daalkar N₂ inject kiya jaata hai jabki air simultaneously nikaali jaati hai. Process 2–3 baar repeat ho sakta hai (flushing cycles). Target: headspace mein residual O₂ &lt;2%.</li>
                                <li><strong>Consumer tins/cans:</strong> N₂-blanketed atmosphere mein fill kiye jaate hain. Seaming/sealing se pehle headspace gas-flush hota hai. Target: residual O₂ &lt;1%.</li>
                                <li><strong>Pouches (laminates):</strong> N₂ injection ke saath flow-wrap ya form-fill-seal system use karke MAP (Modified Atmosphere Packaging).</li>
                                <li><strong>Monitoring:</strong> Headspace oxygen ko Mocon ya PBI Dansensor oxygen analyzer (piercing ya non-destructive laser method) se sampled packages par measure kiya jaata hai.</li>
                            </ul>
                            <p class="mt-2"><strong>Note:</strong> N₂ flushing ke saath bhi, kuch dissolved oxygen powder particles ke beech interstitial spaces (occluded air) mein aur amorphous matrix ke andar rehta hai. Yeh "internal oxygen" dheere-dheere migrate karta hai aur oxidation mein participate karta hai. DSI pre-treatment initial reducing environment (-SH groups) banakar madad karta hai.</p>
                        </li>
                        <li>
                            <strong>WMP ke liye Specific Quality Testing:</strong>
                            <p class="mt-1">SMP ke liye list kiye gaye sabhi tests ke alawa, WMP ke liye ye zaroori hain:</p>
                            <div class="overflow-x-auto mt-2">
                                <table class="w-full text-left border-collapse text-sm">
                                    <thead class="bg-muted">
                                        <tr>
                                            <th class="p-2 border">Test</th>
                                            <th class="p-2 border">Method</th>
                                            <th class="p-2 border">Specification</th>
                                            <th class="p-2 border">Mahatva (Significance)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td class="p-2 border">Free Fat</td><td class="p-2 border">Solvent extraction (petroleum ether, 40–60°C) bina prior digestion ke</td><td class="p-2 border">Total fat ka &lt;2%</td><td class="p-2 border">Oxidation ke susceptible surface fat; homogenization efficiency ka indicator</td></tr>
                                        <tr><td class="p-2 border">Peroxide Value (PV)</td><td class="p-2 border">IDF 74A / AOAC (extracted fat ka iodometric titration)</td><td class="p-2 border">&lt;0.3 meq O₂/kg fat (taaza); &lt;1.0 (acceptable)</td><td class="p-2 border">Primary oxidation products (hydroperoxides); oxidative rancidity ka early indicator</td></tr>
                                        <tr><td class="p-2 border">Thiobarbituric Acid Value (TBA/TBARS)</td><td class="p-2 border">Spectrophotometric (532 nm)</td><td class="p-2 border">&lt;0.5 mg MDA/kg</td><td class="p-2 border">Secondary oxidation products (malondialdehyde); off-flavor perception se correlate karta hai</td></tr>
                                        <tr><td class="p-2 border">Free Fatty Acids (FFA/ADV)</td><td class="p-2 border">BDI method / extracted fat ka titration</td><td class="p-2 border">&lt;1.0 meq/100g fat</td><td class="p-2 border">Lipolytic rancidity; raw milk mein lipase activity ka indicator</td></tr>
                                        <tr><td class="p-2 border">Headspace Oxygen</td><td class="p-2 border">Gas analyzer (Mocon/Dansensor)</td><td class="p-2 border">&lt;2% (bulk); &lt;1% (retail)</td><td class="p-2 border">Storage ke dauran oxidation potential decide karta hai</td></tr>
                                        <tr><td class="p-2 border">Sensory (Flavor Score)</td><td class="p-2 border">ADPI scorecard / trained panel (12% TS tak reconstituted)</td><td class="p-2 border">≥ 38/45 (koi oxidized, rancid, ya stale off-flavors nahi)</td><td class="p-2 border">Consumer acceptance; early oxidation detect karne ka sabse sensitive method</td></tr>
                                        <tr><td class="p-2 border">Volatile Compounds (GC-MS)</td><td class="p-2 border">SPME-GC-MS (solid-phase microextraction)</td><td class="p-2 border">Kam hexanal, pentanal, 2-heptanone</td><td class="p-2 border">Hexanal lipid oxidation ka marker hai (linoleic acid se); &gt;5 µg/g unacceptable oxidation indicate karta hai</td></tr>
                                        <tr><td class="p-2 border">Vacuole Volume (particle porosity)</td><td class="p-2 border">SEM, particle density measurement</td><td class="p-2 border">Varies</td><td class="p-2 border">Bulk density, flowability, aur occluded air (oxidation ke liye O₂ reservoir) ko affect karta hai</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ol>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">WMP mein Lipid Oxidation — Vistar se Mechanism & Prevention Strategy</h3>
                    <p>Lipid oxidation ko samajhna WMP producers ke liye sabse zaroori hai, kyunki yeh shelf life limit karne wala sabse important factor hai.</p>
                    
                    <h4 class="font-semibold mt-3 mb-1">Auto-oxidation Mechanism (Free Radical Chain Reaction):</h4>
                    <div class="bg-gray-50 p-4 rounded-lg mt-2 font-mono text-sm">
                        <p><strong>Initiation:</strong></p>
                        <p>RH + initiator (heat, light, Cu²⁺, Fe²⁺) → R• + H•</p>
                        <p class="mt-2"><strong>Propagation:</strong></p>
                        <p>R• + O₂ → ROO• (peroxyl radical) [bahut tez, diffusion-controlled]</p>
                        <p>ROO• + RH → ROOH (hydroperoxide) + R• [rate-limiting step]</p>
                        <p class="mt-2"><strong>Branching (Decomposition):</strong></p>
                        <p>ROOH → RO• + •OH [homolytic cleavage, heat/metals se accelerated]</p>
                        <p>RO• → aldehydes (hexanal, nonanal, pentanal) + alkyl radicals [off-flavors ke zimmedaar]</p>
                        <p class="mt-2"><strong>Termination:</strong></p>
                        <p>R• + R• → R-R</p>
                        <p>ROO• + ROO• → non-radical products + O₂</p>
                        <p>ROO• + AH → ROOH + A• [antioxidant scavenging]</p>
                    </div>

                    <h4 class="font-semibold mt-3 mb-1">WMP mein Oxidation Prevention ke liye Multi-Hurdle Approach:</h4>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Hurdle</th>
                                    <th class="p-2 border">Processing Step</th>
                                    <th class="p-2 border">Mechanism</th>
                                    <th class="p-2 border">Quantitative Impact</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">1. Raw milk quality</td><td class="p-2 border">Reception</td><td class="p-2 border">Kam FFA, kam SCC, kam Cu²⁺/Fe²⁺, light exposure nahi</td><td class="p-2 border">Source par hi pro-oxidant load khatam karta hai</td></tr>
                                <tr><td class="p-2 border">2. High pre-heat treatment</td><td class="p-2 border">Pasteurization/forewarming</td><td class="p-2 border">-SH group exposure (antioxidant); lipase inactivation</td><td class="p-2 border">Induction period 2–3× badha deta hai</td></tr>
                                <tr><td class="p-2 border">3. Homogenization</td><td class="p-2 border">Homogenizer</td><td class="p-2 border">Free fat ~80% se &lt;4% tak kam karta hai</td><td class="p-2 border">Primary oxidation substrate khatam karta hai</td></tr>
                                <tr><td class="p-2 border">4. Kam outlet temp & moisture</td><td class="p-2 border">Spray drying</td><td class="p-2 border">Thermal initiation minimize karta hai; stability ke liye optimal a<sub>w</sub></td><td class="p-2 border">a<sub>w</sub> 0.2–0.3 minimum oxidation rate zone hai (BET monolayer)</td></tr>
                                <tr><td class="p-2 border">5. N₂ gas flushing</td><td class="p-2 border">Packaging</td><td class="p-2 border">O₂ nikalta hai (&lt;2%), propagation step ko bhookha rakhta hai</td><td class="p-2 border">Shelf life 6–9 mahine se 18–24 mahine tak extend karta hai</td></tr>
                                <tr><td class="p-2 border">6. Thanda, andhera storage</td><td class="p-2 border">Warehousing</td><td class="p-2 border">Reaction rate kam karta hai (Arrhenius); photo-oxidation rokta hai</td><td class="p-2 border">Har 10°C reduction oxidation rate aadhi kar deta hai</td></tr>
                                <tr><td class="p-2 border">7. Light-barrier packaging</td><td class="p-2 border">Packaging material</td><td class="p-2 border">UV/visible light block karta hai (riboflavin-sensitized singlet oxygen pathway)</td><td class="p-2 border">Aluminum foil laminate ya opaque PE</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2 text-sm text-gray-600"><strong>Photo-oxidation pathway:</strong> Milk mein Riboflavin (vitamin B2) photosensitizer ka kaam karta hai. UV/blue light (λ ~350–520 nm) absorb karne par, yeh triplet oxygen (³O₂) ko energy transfer karta hai, singlet oxygen (¹O₂) generate karta hai, jo unsaturated fatty acids ke saath seedha react karta hai (³O₂ se 1500× tezi se) bina radical initiator ki zaroorat ke. Isliye light-barrier packaging zaroori hai.</p>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">WMP ke liye Comprehensive HACCP Summary</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Step</th>
                                    <th class="p-2 border">Hazard</th>
                                    <th class="p-2 border">Classification</th>
                                    <th class="p-2 border">Critical Limit</th>
                                    <th class="p-2 border">Monitoring</th>
                                    <th class="p-2 border">Corrective Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Raw Milk Reception</td><td class="p-2 border">B: Pathogens; C: Antibiotics, aflatoxin M1, pesticides; P: Physical contaminants</td><td class="p-2 border">PRP</td><td class="p-2 border">FSSAI raw milk specs ke anusaar</td><td class="p-2 border">Platform tests, supplier audit</td><td class="p-2 border">Non-conforming lots reject karo</td></tr>
                                <tr><td class="p-2 border">Cold Storage</td><td class="p-2 border">B: Psychrotrophic protease/lipase production</td><td class="p-2 border">PRP</td><td class="p-2 border">≤4°C, ≤24h (WMP ke liye stricter)</td><td class="p-2 border">Temp recording, time log</td><td class="p-2 border">Processing priority do; >48h ho to reject karo</td></tr>
                                <tr><td class="p-2 border">Standardization</td><td class="p-2 border">Quality: galat composition</td><td class="p-2 border">oPRP</td><td class="p-2 border">Fat:SNF = 0.371 ± 0.005</td><td class="p-2 border">Inline Milkoscan/density meter</td><td class="p-2 border">Blend ratio adjust karo</td></tr>
                                <tr><td class="p-2 border"><strong>Pre-heat + Pasteurization</strong></td><td class="p-2 border">B: Vegetative pathogen survival; C: Insufficient -SH generation</td><td class="p-2 border"><strong>CCP-1</strong></td><td class="p-2 border">≥85°C × 15 min (ya equivalent); ALP negative</td><td class="p-2 border">Continuous temp/time recording, FDV, ALP test</td><td class="p-2 border">Divert karo; reprocess karo; kaaran investigate karo</td></tr>
                                <tr><td class="p-2 border">Homogenization</td><td class="p-2 border">Quality: High free fat → rapid oxidation</td><td class="p-2 border">oPRP</td><td class="p-2 border">Pressure ≥150/50 bar; Free fat &lt;2%</td><td class="p-2 border">Pressure gauge recording; periodic free fat testing</td><td class="p-2 border">Check valve condition; increase pressure; divert concentrate</td></tr>
                                <tr><td class="p-2 border">Evaporation</td><td class="p-2 border">B: Thermophilic spore growth</td><td class="p-2 border">oPRP</td><td class="p-2 border">Run time ≤18h; CIP frequency</td><td class="p-2 border">Run time log; TPC/spore trending</td><td class="p-2 border">Initiate CIP; reduce run length</td></tr>
                                <tr><td class="p-2 border"><strong>Spray Drying</strong></td><td class="p-2 border">B: Insufficient drying (microbial survival); C: Excessive heat (Maillard, lipid oxidation)</td><td class="p-2 border"><strong>CCP-2</strong></td><td class="p-2 border">Outlet temp 75–90°C; Moisture ≤ 3.5%; Inlet temp ≤ 200°C</td><td class="p-2 border">Continuous temp recording; NIR moisture; periodic PV/TBA</td><td class="p-2 border">Adjust feed rate/inlet temp; divert product</td></tr>
                                <tr><td class="p-2 border">Fluidized Bed</td><td class="p-2 border">B: Recontamination; C: Insufficient cooling → oxidation</td><td class="p-2 border">oPRP</td><td class="p-2 border">Powder exit temp ≤ 25°C; HEPA-filtered air</td><td class="p-2 border">Powder temp; air filter integrity</td><td class="p-2 border">Extend cooling; replace filters</td></tr>
                                <tr><td class="p-2 border"><strong>Metal Detection</strong></td><td class="p-2 border">P: Metal foreign bodies</td><td class="p-2 border"><strong>CCP-3</strong></td><td class="p-2 border">Fe ≥1.5mm, Non-Fe ≥2.0mm, SS ≥2.5mm</td><td class="p-2 border">Test piece verification every 1h</td><td class="p-2 border">Quarantine, reinspect, investigate source</td></tr>
                                <tr><td class="p-2 border">N₂ Flushing & Packaging</td><td class="p-2 border">C: Residual O₂ → oxidation; B: Environmental contamination</td><td class="p-2 border">oPRP</td><td class="p-2 border">Headspace O₂ ≤ 2%; packaging room hygiene</td><td class="p-2 border">O₂ analyzer; environmental swabs</td><td class="p-2 border">Adjust N₂ flow; reflush; deep clean area</td></tr>
                                <tr><td class="p-2 border">Storage</td><td class="p-2 border">C: Oxidation, Maillard browning, caking</td><td class="p-2 border">PRP</td><td class="p-2 border">≤25°C, RH &lt;65%, no light</td><td class="p-2 border">Temp/RH data logger; FIFO</td><td class="p-2 border">Relocate stock; use climate-controlled warehouse</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Advanced Powder Properties & Characterization</h3>
                    <p>Both SMP and WMP are characterized by several physical and functional properties beyond basic composition:</p>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Property</th>
                                    <th class="p-2 border">SMP (Typical)</th>
                                    <th class="p-2 border">WMP (Typical)</th>
                                    <th class="p-2 border">Measurement Method</th>
                                    <th class="p-2 border">Process Factors</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Particle Size d<sub>50</sub> (µm)</td><td class="p-2 border">40–80 (regular); 150–300 (instant)</td><td class="p-2 border">60–100 (regular); 150–400 (instant)</td><td class="p-2 border">Laser diffraction (Malvern Mastersizer)</td><td class="p-2 border">Atomization pressure, feed concentration, agglomeration</td></tr>
                                <tr><td class="p-2 border">Bulk Density—Loose (g/L)</td><td class="p-2 border">550–680 (regular); 350–450 (instant)</td><td class="p-2 border">500–620 (regular); 350–450 (instant)</td><td class="p-2 border">IDF 134 / Scott Volumeter</td><td class="p-2 border">Particle size, vacuole volume, agglomeration degree</td></tr>
                                <tr><td class="p-2 border">Occluded Air (mL/100g)</td><td class="p-2 border">50–150</td><td class="p-2 border">30–100</td><td class="p-2 border">Air pycnometer</td><td class="p-2 border">Atomization type, feed temperature; lower is better for WMP (less O₂)</td></tr>
                                <tr><td class="p-2 border">Wettability (sec)</td><td class="p-2 border">60–120 (regular); &lt;15 (instant + lecithin)</td><td class="p-2 border">120+ (regular); &lt;20 (instant + lecithin)</td><td class="p-2 border">IDF 87 (sink test)</td><td class="p-2 border">Surface composition (protein vs. fat vs. lecithin), particle size</td></tr>
                                <tr><td class="p-2 border">Dispersibility (%)</td><td class="p-2 border">85–98</td><td class="p-2 border">80–95</td><td class="p-2 border">IDF 87 (sieve residue after reconstitution)</td><td class="p-2 border">Agglomeration, particle porosity, insolubility index</td></tr>
                                <tr><td class="p-2 border">Flowability (Carr Index)</td><td class="p-2 border">15–25 (good to fair)</td><td class="p-2 border">20–35 (fair to poor; sticky surface fat)</td><td class="p-2 border">Tapped/loose density ratio</td><td class="p-2 border">Moisture, fat, particle shape, temperature</td></tr>
                                <tr><td class="p-2 border">Water Activity (a<sub>w</sub>)</td><td class="p-2 border">0.20–0.25</td><td class="p-2 border">0.18–0.22</td><td class="p-2 border">Dew point hygrometer (AquaLab)</td><td class="p-2 border">Drying intensity; critical for storage stability</td></tr>
                                <tr><td class="p-2 border">Glass Transition Temp T<sub>g</sub> (°C)</td><td class="p-2 border">40–55 (at 3–4% moisture)</td><td class="p-2 border">30–45 (fat depresses T<sub>g</sub>)</td><td class="p-2 border">DSC (Differential Scanning Calorimetry)</td><td class="p-2 border">Moisture, composition; must store below T<sub>g</sub> to prevent caking</td></tr>
                                <tr><td class="p-2 border">Color (L*, a*, b*)</td><td class="p-2 border">L*: 93–96; b*: 10–13</td><td class="p-2 border">L*: 90–94; b*: 13–17 (slightly more yellow due to fat-soluble carotenoids)</td><td class="p-2 border">Colorimeter (Hunter Lab / Minolta)</td><td class="p-2 border">Maillard browning (heat), carotenoid content (feed), oxidation</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Environmental & Sustainability Considerations in WMP Production</h3>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Water footprint:</strong> ~1,000–1,500 liters of milk are required to produce 1 kg of WMP (considering ~12.5% TS in milk). CIP water, cooling water, and cow water (evaporator condensate) recovery are key sustainability measures.</li>
                        <li><strong>Energy:</strong> WMP production requires ~10–15 MJ/kg powder. MVR evaporation, heat integration, and waste heat recovery from dryer exhaust (for pre-heating air or milk) can reduce this by 30–40%.</li>
                        <li><strong>Emission control:</strong> Fine powder particles in exhaust air are captured by bag filters (>99.9% efficiency). Volatile organic compounds (VOCs) from Maillard reactions are minimal at proper process conditions.</li>
                        <li><strong>CIP chemical management:</strong> NaOH and HNO₃ used for CIP are neutralized and treated in the effluent treatment plant (ETP). Biodegradable detergents and enzymatic CIP solutions are gaining adoption.</li>
                    </ul>
                `
            }
        }
    }
}

    
