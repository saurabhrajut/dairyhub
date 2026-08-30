
export const creamContent = {
    en: {
        title: "Cream Processing",
        subTopics: {
            pasteurized: {
                title: "A. Processing of Pasteurized (Fresh) Cream",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Cream</h3>
                    <p>Cream is the fat-enriched fraction of milk obtained by physical separation of the oil-in-water (O/W) emulsion that constitutes whole milk. Bovine milk typically contains 3.5–5.0% fat, and cream is the concentrated product in which the fat content has been elevated—ranging from 10% to over 70% depending on type and intended use. Cream is both a finished consumer product and a critical intermediate for the manufacture of butter, ghee, anhydrous milk fat (AMF), ice cream, and recombined dairy products.</p>
                    <p class="mt-2">From a colloidal science perspective, cream remains an oil-in-water emulsion, but with a dramatically increased dispersed-phase volume fraction (φ). Whole milk has φ ≈ 0.04, whereas heavy cream (40% fat) has φ ≈ 0.44. As φ increases beyond ~0.3, the rheological behaviour shifts from Newtonian to shear-thinning (pseudoplastic), and the system becomes increasingly susceptible to destabilisation phenomena such as flocculation, coalescence, and partial coalescence.</p>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Composition and Structure of Cream</h3>
                    <p>The composition of cream varies primarily with its fat content, which in turn determines the proportions of all other constituents on a mass basis.</p>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Component</th>
                                    <th class="p-2 border">Low Fat Cream (10% fat)</th>
                                    <th class="p-2 border">Medium Fat Cream (25% fat)</th>
                                    <th class="p-2 border">High Fat Cream (40% fat)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Fat (%)</td><td class="p-2 border">10.0</td><td class="p-2 border">25.0</td><td class="p-2 border">40.0</td></tr>
                                <tr><td class="p-2 border">Protein (%)</td><td class="p-2 border">2.9</td><td class="p-2 border">2.4</td><td class="p-2 border">1.9</td></tr>
                                <tr><td class="p-2 border">Lactose (%)</td><td class="p-2 border">4.3</td><td class="p-2 border">3.6</td><td class="p-2 border">2.9</td></tr>
                                <tr><td class="p-2 border">Minerals/Ash (%)</td><td class="p-2 border">0.7</td><td class="p-2 border">0.6</td><td class="p-2 border">0.5</td></tr>
                                <tr><td class="p-2 border">Water (%)</td><td class="p-2 border">82.1</td><td class="p-2 border">68.4</td><td class="p-2 border">54.7</td></tr>
                                <tr><td class="p-2 border">Energy (kcal/100g)</td><td class="p-2 border">~120</td><td class="p-2 border">~245</td><td class="p-2 border">~380</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="font-bold mt-4 mb-2">Milk Fat Globule Membrane (MFGM) – The Emulsifier of Cream</h4>
                    <p>Each fat globule in cream (mean diameter 3–5 µm; range 0.2–15 µm) is enveloped by the <strong>Milk Fat Globule Membrane (MFGM)</strong>, a trilaminar biological membrane 10–20 nm thick. The MFGM is composed of:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1">
                        <li><strong>Phospholipids (~30% of MFGM dry matter):</strong> Primarily phosphatidylcholine (PC), phosphatidylethanolamine (PE), sphingomyelin (SM), and phosphatidylserine (PS). These amphiphilic molecules orient with their hydrophilic head groups toward the aqueous phase and hydrophobic tails toward the lipid core, stabilising the emulsion.</li>
                        <li><strong>Glycoproteins (~70% of MFGM dry matter):</strong> Including butyrophilin (BTN, ~40% of total protein), xanthine dehydrogenase/oxidase (XDH/XO), periodic acid–Schiff glycoproteins (PAS III, PAS 6/7), CD36 (PAS IV), and mucins (MUC1, MUC15). These contribute to steric and electrostatic stabilisation (ζ-potential of native MFGM ≈ −13 mV at pH 6.7).</li>
                        <li><strong>Neutral lipids:</strong> Cholesterol and glycerolipids intercalated within the phospholipid bilayer.</li>
                        <li><strong>Enzymes:</strong> Including alkaline phosphatase (ALP), γ-glutamyl transpeptidase (GGTP), and 5'-nucleotidase, some of which serve as pasteurisation indicators.</li>
                    </ul>
                    <p class="mt-2">The integrity of the MFGM is paramount to cream stability. Mechanical damage (pumping, agitation) or thermal processing can disrupt the MFGM, leading to free fat release, coalescence, and off-flavour development (oxidative rancidity due to exposed unsaturated fatty acids).</p>

                    <h4 class="font-bold mt-4 mb-2">Fatty Acid Profile of Milk Fat</h4>
                    <p>Milk fat is one of the most complex natural fats, containing over 400 different fatty acids. Key characteristics include:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1">
                        <li><strong>Short-chain fatty acids (C4–C8):</strong> ~12% of total fatty acids; unique to ruminant milk fat. Butyric acid (C4:0, 3–4%) is responsible for the characteristic flavour of butter and ghee. These SCFAs lower the melting point of milk fat.</li>
                        <li><strong>Medium-chain fatty acids (C10–C14):</strong> ~20%; including capric (C10:0), lauric (C12:0), and myristic (C14:0).</li>
                        <li><strong>Long-chain fatty acids (≥C16):</strong> ~60%; dominated by palmitic acid (C16:0, ~30%), oleic acid (C18:1, ~25%), and stearic acid (C18:0, ~12%).</li>
                        <li><strong>Unsaturated fatty acids:</strong> ~30–35% of total; oleic acid dominates. Conjugated linoleic acid (CLA, mainly rumenic acid C18:2 c9,t11) at 0.3–1.0% has attracted research interest for potential anti-carcinogenic and anti-atherogenic properties.</li>
                    </ul>
                    <p class="mt-2">The broad melting range of milk fat (−40°C to +40°C) means it exists as a mixture of solid crystalline fat and liquid oil at any temperature between these extremes. The <strong>Solid Fat Content (SFC)</strong> at a given temperature critically influences cream's functional properties—especially whipping performance, mouthfeel, and butter-making efficiency. Typical SFC values: ~65% at 0°C, ~40% at 10°C, ~20% at 20°C, ~3% at 35°C.</p>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Types of Cream (Regulatory Standards)</h3>
                    <h4 class="font-bold mt-4 mb-2">FSSAI Standards (India)</h4>
                    <p>The Food Safety and Standards Authority of India (FSSAI), under the <em>Food Safety and Standards (Food Products Standards and Food Additives) Regulations</em>, categorizes cream based on its milk fat content:</p>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Type of Cream</th>
                                    <th class="p-2 border">Min. Milk Fat % (m/m)</th>
                                    <th class="p-2 border">Functional Description & Common Uses</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong>Low Fat Cream</strong></td>
                                    <td class="p-2 border">≥ 10.0</td>
                                    <td class="p-2 border">'Table cream' or 'coffee cream'. Low viscosity, pourable consistency. Used in beverages, soups, sauces, and dressings. Cannot be whipped effectively due to insufficient fat for structural stabilisation (φ too low for partial coalescence network).</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Medium Fat Cream</strong></td>
                                    <td class="p-2 border">≥ 25.0</td>
                                    <td class="p-2 border">'Whipping cream'. The workhorse of the patisserie. Contains sufficient fat (φ ≈ 0.27–0.39) to form a stable whipped structure through partial coalescence. Used for dessert toppings, fillings, and culinary enrichment.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>High Fat Cream</strong></td>
                                    <td class="p-2 border">≥ 40.0</td>
                                    <td class="p-2 border">'Heavy cream' or 'double cream'. Very rich, with high viscosity and excellent whipping performance (overrun 80–120%). Primary use: butter and ghee manufacture. Also used in ganaches, truffles, and premium ice cream mixes. High φ value means rapid whipping but risk of over-whipping (butter granule formation).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="font-bold mt-4 mb-2">Codex Alimentarius Standards (International)</h4>
                    <p>The <em>Codex Standard for Cream and Prepared Creams (CODEX STAN 288-1976)</em> provides the international framework:</p>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Designation</th>
                                    <th class="p-2 border">Fat Content</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Half cream / Half-and-half</td><td class="p-2 border">10–18%</td></tr>
                                <tr><td class="p-2 border">Light (single) cream</td><td class="p-2 border">18–25%</td></tr>
                                <tr><td class="p-2 border">Whipping cream</td><td class="p-2 border">28–35%</td></tr>
                                <tr><td class="p-2 border">Heavy (double) cream</td><td class="p-2 border">≥ 36%</td></tr>
                                <tr><td class="p-2 border">Extra heavy cream / Clotted cream</td><td class="p-2 border">≥ 45–55%</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2"><strong>Note:</strong> Additives permitted in cream under FSSAI include stabilisers (sodium alginate ≤0.15%, carrageenan ≤0.15%, gelatin ≤0.15%), emulsifiers (polysorbates ≤0.1%), and permitted colours/flavours where applicable. Codex permits similar additives under GMP conditions.</p>

                    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">A. Processing of Pasteurized (Fresh) Cream</h2>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Pasteurized Cream</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Raw Milk Reception & Platform Tests <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Filtration / Clarification <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Chilling (to ≤4°C) & Cold Storage <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Pre-heating (to 40–45°C) in PHE</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">Cream Separation (Centrifugal, 5000–10000 RPM) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">Standardization (Fat % Adjustment via Skim Milk Addition) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Pasteurization</strong><br/>(LTLT: 63°C/30 min OR HTST: 80–85°C/15–25 sec) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Homogenization (Optional: Single-stage 10–15 MPa, or Two-stage 10+3 MPa) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Rapid Cooling (to ≤5°C) in PHE <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Aging / Tempering (2–5°C for 4–24 hours) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Packaging (HDPE cups, pouches, Tetra Rex) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-gray-200 border border-gray-400 rounded">Cold Storage & Distribution (≤5°C, shelf life 15–20 days) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                    </div>

                    <h4 class="font-bold mt-6 mb-2">Detailed Scientific Explanation of Each Processing Step:</h4>
                    <ol class="list-decimal list-outside pl-5 space-y-4">
                        <li>
                            <strong>Raw Milk Reception & Quality Testing (PRP):</strong>
                            <p class="mt-1">High-quality raw milk is the foundation of cream processing. This is a <strong>Prerequisite Program (PRP)</strong>. Upon arrival at the dairy, milk undergoes a battery of <strong>platform tests</strong> to assess its suitability:</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>Organoleptic evaluation:</strong> Visual inspection (colour, appearance) and smell for off-odours indicating spoilage, mastitis, or adulteration.</li>
                                <li><strong>Temperature check:</strong> Should arrive at ≤10°C (ideally ≤5°C). Higher temperatures indicate poor farm-level cold chain management and potential for elevated microbial loads.</li>
                                <li><strong>Acidity (titrable):</strong> Normal range 0.13–0.16% lactic acid (Dornic degree 13–16°D). Elevated acidity (&gt;0.18%) indicates microbial fermentation of lactose and potential protein instability during heating.</li>
                                <li><strong>Alcohol test (68% or 75% ethanol):</strong> Detects protein instability. Positive result (coagulation) indicates high acidity, abnormal salt balance, or colostrum. Such milk will likely curdle during pasteurization.</li>
                                <li><strong>Clot-on-boiling (COB) test:</strong> A more stringent heat stability test. Milk that clots when boiled has developed acidity ≥0.20% LA.</li>
                                <li><strong>Methylene blue reduction test (MBRT):</strong> Indicative of microbial load. Reduction time &gt;5 hours (Grade 1, Very Good); &lt;2 hours indicates poor quality (&gt;4 × 10⁶ CFU/mL estimated).</li>
                                <li><strong>Fat content (Gerber method):</strong> Volumetric estimation using butyrometer, sulfuric acid, and amyl alcohol. Essential for payment and process planning.</li>
                                <li><strong>Somatic Cell Count (SCC):</strong> Indicator of udder health. FSSAI limit: ≤5 × 10⁵ cells/mL. Elevated SCC indicates subclinical mastitis, which increases proteolytic and lipolytic enzyme activity, leading to off-flavours and reduced cream stability.</li>
                                <li><strong>Adulterant screening:</strong> Tests for added water (freezing point depression, cryoscopy; normal −0.530 to −0.560°C), neutralisers (rosalic acid test for soda), starch, urea, detergents, and hydrogen peroxide.</li>
                                <li><strong>Antibiotic residue screening:</strong> Rapid immunoassay kits (e.g., β-lactam/tetracycline dipstick tests). Antibiotic residues inhibit starter cultures in fermented cream products and pose public health concerns regarding antimicrobial resistance.</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Filtration/Clarification (PRP):</strong>
                            <p class="mt-1">Milk is passed through in-line filters (mesh size 100–200 µm) to remove gross particulate matter (hair, straw, sediment, somatic cell clumps). In larger dairies, a <strong>centrifugal clarifier</strong> operating at 5,000–7,000 RPM is used. The clarifier removes finer particles, leucocytes, and bacteria (bactofugation can remove up to 90–95% of spore-forming bacteria like <em>Bacillus cereus</em> and <em>Clostridium</em> spp.). This is a <strong>PRP</strong> that improves the microbiological quality of the starting material and prevents sediment accumulation in downstream equipment.</p>
                        </li>

                        <li>
                            <strong>Chilling & Cold Storage (PRP):</strong>
                            <p class="mt-1">Milk is rapidly cooled to ≤4°C using a plate heat exchanger (PHE) with chilled water or glycol as the cooling medium. At ≤4°C, the growth of most mesophilic spoilage bacteria (<em>Lactobacillus</em>, <em>E. coli</em>, <em>Staphylococcus aureus</em>) is effectively arrested (generation time → ∞). However, <strong>psychrotrophic bacteria</strong> (<em>Pseudomonas fluorescens</em>, <em>P. fragi</em>, <em>Serratia</em>, <em>Acinetobacter</em> spp.) can still proliferate at refrigeration temperatures (doubling time ~8–12 hours at 4°C). These organisms produce potent extracellular <strong>heat-stable lipases and proteases</strong> that survive pasteurization (D₁₄₀ values up to 300 seconds for some lipases). Therefore, raw milk storage before cream separation should be minimised to &lt;24–48 hours. This step is a <strong>PRP</strong>.</p>
                            <p class="mt-1"><strong>Critical Note:</strong> Psychrotrophic lipases (particularly from <em>Pseudomonas</em>) hydrolyse triglycerides at the sn-1 and sn-3 positions, releasing short-chain fatty acids (butyric C4:0, caproic C6:0, caprylic C8:0) that cause "rancid" and "soapy" off-flavours even at concentrations as low as 5–10 ppm free fatty acid (FFA). This is termed <strong>hydrolytic rancidity</strong> and is irreversible. Hence, minimising psychrotrophic growth pre-processing is critical.</p>
                        </li>

                        <li>
                            <strong>Pre-heating (40–45°C):</strong>
                            <p class="mt-1">Before separation, milk is warmed to 40–45°C in the regeneration section of a PHE. This temperature is carefully chosen for multiple physicochemical reasons:</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>Viscosity reduction:</strong> The dynamic viscosity of milk decreases from ~2.1 mPa·s at 5°C to ~1.3 mPa·s at 40°C (following the Arrhenius equation: η = A·e^(Eₐ/RT)). Lower viscosity facilitates more efficient separation.</li>
                                <li><strong>Fat liquefaction:</strong> At 40–45°C, the solid fat content (SFC) of milk fat drops to ~5–10%. The fat globules become largely liquid, reducing their effective viscosity and making them more deformable and easier to separate.</li>
                                <li><strong>Density differential maximisation:</strong> While both phases become less dense with heating, the density difference (Δρ = ρ_skim − ρ_fat) remains sufficient (~0.07 g/cm³) for efficient separation.</li>
                                <li><strong>Avoiding protein denaturation:</strong> Temperature is kept below 50°C to avoid denaturation of whey proteins (β-lactoglobulin begins unfolding at ~60°C) and to prevent damage to the MFGM.</li>
                                <li><strong>Below lipolysis risk threshold:</strong> Native milk lipoprotein lipase (LPL) is optimally active at 37°C but requires substrate (damaged fat globules) to act. Pre-heating briefly above 40°C and rapidly proceeding to separation and pasteurization minimises lipolysis risk.</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Cream Separation — Centrifugal Separation (oPRP):</strong>
                            <p class="mt-1">This is the core unit operation in cream processing and is classified as an <strong>Operational Prerequisite Program (oPRP)</strong>. Separation is achieved using a hermetic centrifugal cream separator operating at 5,000–10,000 RPM.</p>

                            <h5 class="font-semibold mt-3 mb-1">The Science: Stokes' Law & Centrifugal Separation</h5>
                            <p>The principle of cream separation is governed by <strong>Stokes' Law</strong>, which describes the velocity of a spherical particle moving through a viscous fluid under the influence of a gravitational (or centrifugal) field. In a gravity field, the velocity of rise of a fat globule is:</p>
                            <div class="bg-gray-100 p-3 rounded mt-2 text-center font-mono">
                                v_g = (2 · r² · (ρ_p − ρ_f) · g) / (9 · η)
                            </div>
                            <p class="mt-2">Where:</p>
                            <ul class="list-disc list-inside ml-4 space-y-1 text-sm">
                                <li><strong>v_g</strong> = velocity of fat globule rise (m/s)</li>
                                <li><strong>r</strong> = radius of the fat globule (m); mean ≈ 2 µm = 2 × 10⁻⁶ m</li>
                                <li><strong>ρ_p</strong> = density of skim milk (plasma phase) ≈ 1,036 kg/m³ at 40°C</li>
                                <li><strong>ρ_f</strong> = density of fat globule ≈ 930 kg/m³ at 40°C</li>
                                <li><strong>g</strong> = gravitational acceleration = 9.81 m/s²</li>
                                <li><strong>η</strong> = dynamic viscosity of skim milk ≈ 1.2 × 10⁻³ Pa·s at 40°C</li>
                            </ul>
                            <p class="mt-2"><strong>Example (gravity):</strong> v_g = [2 × (2 × 10⁻⁶)² × (1036 − 930) × 9.81] / [9 × 1.2 × 10⁻³] = <strong>~7.7 × 10⁻⁷ m/s ≈ 0.066 m/day</strong>. This extremely slow velocity is why gravity creaming takes 12–24 hours and is inherently inefficient.</p>

                            <p class="mt-3">In a <strong>centrifugal separator</strong>, gravitational acceleration (g) is replaced by centrifugal acceleration (ω²R), which is thousands of times greater:</p>
                            <div class="bg-gray-100 p-3 rounded mt-2 text-center font-mono">
                                v_c = (2 · r² · (ρ_p − ρ_f) · ω² · R) / (9 · η)
                            </div>
                            <p class="mt-2">Where:</p>
                            <ul class="list-disc list-inside ml-4 space-y-1 text-sm">
                                <li><strong>ω</strong> = angular velocity (rad/s) = 2πN/60 (N in RPM)</li>
                                <li><strong>R</strong> = radial distance from axis of rotation (m)</li>
                            </ul>
                            <p class="mt-2"><strong>Example (centrifuge at 6,000 RPM, R = 0.2 m):</strong></p>
                            <p class="ml-4 text-sm">ω = 2π × 6000/60 = 628.3 rad/s</p>
                            <p class="ml-4 text-sm">ω²R = (628.3)² × 0.2 = 78,952 m/s²</p>
                            <p class="ml-4 text-sm">Separation factor = ω²R/g = 78,952/9.81 ≈ <strong>8,048 × g</strong></p>
                            <p class="mt-2">Thus the centrifugal velocity is ~8,000 times faster than gravity creaming, enabling continuous separation at throughputs of 5,000–50,000 L/h in modern separators.</p>

                            <p class="mt-3"><strong>Key factors affecting separation efficiency (derived from Stokes' Law):</strong></p>
                            <ul class="list-disc list-inside ml-4 space-y-1">
                                <li><strong>Fat globule size (r²):</strong> Velocity is proportional to r². Larger globules separate faster. Very small globules (&lt;1 µm) are poorly separated—this is why some fat always remains in skim milk (typically 0.05–0.10%). Homogenised milk cannot be effectively separated.</li>
                                <li><strong>Density difference (Δρ):</strong> Must be maintained. Heating to 40–45°C optimises this.</li>
                                <li><strong>Rotational speed (ω²):</strong> Higher RPM dramatically increases separation force. Modern disc-stack separators use conical disc inserts (40–120 discs spaced 0.4–1.0 mm apart) to reduce the effective settling distance and increase separation area.</li>
                                <li><strong>Viscosity (η):</strong> Lower viscosity improves separation. Temperature increase reduces viscosity.</li>
                            </ul>

                            <p class="mt-3">The fat content of the separated cream is controlled by adjusting the <strong>cream screw (throttle valve)</strong> on the cream outlet. A more restricted cream outlet yields a higher-fat cream with lower volume flow; a more open cream outlet yields lower-fat cream at higher volume flow.</p>
                        </li>

                        <li>
                            <strong>Standardization (oPRP):</strong>
                            <p class="mt-1">After separation, cream is standardized to the target fat percentage. This is an <strong>oPRP</strong> for product consistency and regulatory compliance. Standardization is achieved by one of two methods:</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>Batch method:</strong> Calculated volumes of skim milk are blended back into high-fat cream using the <strong>Pearson's Square method</strong>.</li>
                                <li><strong>In-line automatic standardization:</strong> Modern dairies use in-line density meters (Coriolis or oscillating U-tube type) and flow meters to continuously monitor and adjust the fat content by automatically proportioning cream and skim milk streams via servo-controlled valves. Accuracy of ±0.05% fat is achievable.</li>
                            </ul>
                            <div class="bg-gray-100 p-3 rounded mt-3">
                                <p class="font-semibold">Pearson's Square Example:</p>
                                <p class="text-sm mt-1">To prepare cream with 25% fat from separated cream (50% fat) and skim milk (0.1% fat):</p>
                                <p class="text-sm ml-4 mt-1">Parts of 50% cream = 25 − 0.1 = 24.9</p>
                                <p class="text-sm ml-4">Parts of 0.1% skim = 50 − 25 = 25.0</p>
                                <p class="text-sm ml-4">Ratio: 24.9 : 25.0 ≈ 1 : 1 (equal parts by mass)</p>
                            </div>
                        </li>

                        <li>
                            <strong>Pasteurization (CCP-1):</strong>
                            <p class="mt-1">Pasteurization of cream is the <strong>Critical Control Point (CCP-1)</strong>—the step specifically designed to eliminate pathogenic microorganisms and reduce spoilage flora to safe levels. Cream pasteurization requires <strong>more intense heat treatment than milk</strong> for several scientifically important reasons:</p>

                            <h5 class="font-semibold mt-3 mb-1">Why Cream Needs Higher Pasteurization Temperatures</h5>
                            <ul class="list-disc list-inside mt-2 space-y-2 ml-4">
                                <li><strong>Thermoprotective effect of fat:</strong> Fat globules provide a hydrophobic micro-environment that can shield bacteria, particularly those associated with the MFGM or embedded within fat globule clusters. The lower water activity (a_w) within the fat phase and the reduced heat transfer coefficient of fat (thermal conductivity of fat ≈ 0.17 W/m·K vs. water ≈ 0.60 W/m·K) necessitate higher temperatures or longer holding times to achieve equivalent lethality.</li>
                                <li><strong>Lower thermal conductivity:</strong> The overall thermal conductivity of cream decreases with increasing fat content (cream at 40% fat ≈ 0.34 W/m·K vs. whole milk ≈ 0.56 W/m·K). This means heat penetration to the geometric centre of the product stream is slower, requiring a higher temperature to ensure all elements receive adequate treatment.</li>
                                <li><strong>Target pathogen — <em>Coxiella burnetii</em>:</strong> The benchmark organism for pasteurization. Its D₆₃ value in cream is higher than in skim milk due to the thermoprotective effect of fat.</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">Pasteurization Regimes for Cream</h5>
                            <div class="overflow-x-auto mt-2">
                                <table class="w-full text-left border-collapse text-sm">
                                    <thead class="bg-muted">
                                        <tr>
                                            <th class="p-2 border">Method</th>
                                            <th class="p-2 border">Temperature</th>
                                            <th class="p-2 border">Holding Time</th>
                                            <th class="p-2 border">Equipment</th>
                                            <th class="p-2 border">Application</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="p-2 border">LTLT (Batch/Vat)</td>
                                            <td class="p-2 border">63°C</td>
                                            <td class="p-2 border">30 minutes</td>
                                            <td class="p-2 border">Jacketed vat with agitator</td>
                                            <td class="p-2 border">Small-scale, artisanal; cream for butter</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border">HTST</td>
                                            <td class="p-2 border">72°C</td>
                                            <td class="p-2 border">15 seconds</td>
                                            <td class="p-2 border">PHE (standard)</td>
                                            <td class="p-2 border">Cream with &lt;20% fat</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border"><strong>HTST (Cream)</strong></td>
                                            <td class="p-2 border"><strong>80–85°C</strong></td>
                                            <td class="p-2 border"><strong>15–25 seconds</strong></td>
                                            <td class="p-2 border">PHE (extended holding tube)</td>
                                            <td class="p-2 border"><strong>Standard for cream &gt;20% fat</strong></td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border">High-heat</td>
                                            <td class="p-2 border">90–95°C</td>
                                            <td class="p-2 border">15–30 seconds</td>
                                            <td class="p-2 border">PHE or tubular</td>
                                            <td class="p-2 border">Cream for extended shelf life (ESL); cream for butter (to develop cooked/sulphydryl flavour notes preferred in some markets)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h5 class="font-semibold mt-3 mb-1">Thermal Destruction Kinetics</h5>
                            <p>The effectiveness of pasteurization is quantified using thermal destruction parameters:</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>D-value (Decimal Reduction Time):</strong> Time at a given temperature to reduce the microbial population by 90% (1 log cycle). For <em>Coxiella burnetii</em> in cream: D₆₃ ≈ 0.5–0.6 min.</li>
                                <li><strong>z-value:</strong> Temperature increase required to reduce the D-value by 90% (1 log cycle). For <em>C. burnetii</em>: z ≈ 4.5–6.0°C.</li>
                                <li><strong>Lethality:</strong> Cream pasteurization at 80°C/15 sec achieves approximately 12–16 log reductions of <em>C. burnetii</em>, providing a substantial safety margin. It also achieves &gt;7 log reductions of <em>Listeria monocytogenes</em> (D₇₂ ≈ 0.5–2 sec in cream) and <em>Salmonella</em> spp.</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">Enzyme Inactivation</h5>
                            <p>Beyond microbial safety, pasteurization targets key native milk enzymes:</p>
                            <ul class="list-disc list-inside mt-2 space-y-2 ml-4">
                                <li><strong>Alkaline phosphatase (ALP):</strong> D₆₃ ≈ 0.48 min (slightly more heat-resistant than <em>C. burnetii</em>). Its complete inactivation is the <strong>gold standard indicator</strong> of adequate pasteurization. Post-pasteurization, cream must test <strong>negative for phosphatase</strong> (≤4 µg p-nitrophenol/mL by Aschaffenburg-Mullen test, or ≤350 mU/L by fluorometric method per ISO 11816). A positive phosphatase test indicates under-processing or post-pasteurization contamination with raw cream.</li>
                                <li><strong>Lipoprotein lipase (LPL):</strong> Completely inactivated at 72°C/15 sec. LPL is a potent enzyme (Km ≈ 0.2 mM for tributyrin) that catalyses hydrolysis of ester bonds in triglycerides at the oil-water interface. If not inactivated, it causes rapid development of <strong>hydrolytic rancidity</strong>—release of butyric acid (rancid odour threshold ~0.5–1.0 ppm FFA) and other short-chain fatty acids. In cream with high fat content, the substrate surface area is enormous, making LPL inactivation critical.</li>
                                <li><strong>Peroxidase (lactoperoxidase):</strong> More heat-stable than ALP; inactivated at >80°C/15 sec. A negative peroxidase test (Storch test) indicates heating above 80°C. For cream pasteurization at 80–85°C, peroxidase may or may not be inactivated. A <strong>phosphatase-negative, peroxidase-positive</strong> result indicates correct pasteurization range (72–80°C). A <strong>phosphatase-negative, peroxidase-negative</strong> result indicates heating ≥80°C (acceptable for cream).</li>
                                <li><strong>Xanthine oxidase (XO):</strong> MFGM-associated; partially inactivated at pasteurization temperatures. Residual XO can generate reactive oxygen species (ROS), particularly superoxide (O₂⁻) and hydrogen peroxide (H₂O₂), contributing to oxidative deterioration during storage.</li>
                                <li><strong>Plasmin system:</strong> Plasmin (milk's native serine protease, optimum pH 7.5, 37°C) is heat-stable (survives HTST pasteurization). Its precursor plasminogen is activated by plasminogen activators (PAs). In cream, residual plasmin activity can cause slow casein proteolysis, leading to bitter peptides during extended storage.</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">Effects of Pasteurization on Cream Components</h5>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>Whey proteins:</strong> At 80–85°C, ~60–80% of β-lactoglobulin (β-Lg) undergoes irreversible denaturation (unfolding of tertiary structure, exposure of free sulfhydryl group at Cys121, formation of intermolecular disulfide bonds with κ-casein on micelle surfaces). This β-Lg–κ-casein complex can adsorb onto fat globule surfaces during homogenization, affecting cream viscosity and whipping properties.</li>
                                <li><strong>Cooked/sulphydryl flavour:</strong> The exposed −SH groups from denatured β-Lg generate volatile sulphur compounds (hydrogen sulfide, dimethyl sulfide) responsible for the "cooked" flavour note. This dissipates within 1–2 days at refrigeration temperatures.</li>
                                <li><strong>Maillard reaction:</strong> Minimal at pasteurization temperatures; negligible browning or flavour impact at 80–85°C/15 sec.</li>
                                <li><strong>Vitamins:</strong> Losses are minimal: &lt;10% loss of vitamin C (ascorbic acid), &lt;5% loss of thiamine (B1), negligible losses of fat-soluble vitamins (A, D, E, K) which are protected within the fat phase.</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Homogenization (oPRP — Conditional Application):</strong>
                            <p class="mt-1">Homogenization is an <strong>oPRP</strong> whose application is conditional on the cream's intended end use. It involves forcing cream through a narrow valve gap under high pressure, creating intense mechanical forces that reduce fat globule size.</p>

                            <h5 class="font-semibold mt-3 mb-1">Mechanism of Homogenization</h5>
                            <p>Cream is forced through a homogenizing valve at pressures of 10–25 MPa (100–250 bar). The valve gap is typically 15–100 µm. Fat globule disruption occurs through three simultaneous mechanisms:</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>Turbulence:</strong> Intense turbulent eddies (Reynolds number &gt;10,000 in the valve gap) create fluctuating pressure and velocity fields that deform and rupture globules.</li>
                                <li><strong>Cavitation:</strong> As the cream passes through the narrow gap, velocity increases dramatically (Bernoulli's principle), causing local pressure to drop below the vapour pressure of the fat. Vapour bubbles form and then violently collapse (cavitation), generating intense localised shear forces and pressure waves up to 1 GPa that fragment fat globules.</li>
                                <li><strong>Shear:</strong> The velocity gradient across the narrow gap creates high shear rates (10⁵–10⁷ s⁻¹), physically elongating and breaking globules through viscous shear stress.</li>
                            </ul>

                            <p class="mt-2"><strong>Result:</strong> Mean fat globule diameter is reduced from ~3.5 µm (native) to ~0.5–1.0 µm (homogenised). The total fat globule surface area increases by approximately 6–10-fold (surface area ∝ d² while volume ∝ d³; halving diameter doubles surface area per unit volume, etc.).</p>

                            <p class="mt-2"><strong>Surface Coverage:</strong> The native MFGM cannot cover the dramatically increased surface area. Caseins and whey proteins from the aqueous phase rapidly adsorb onto newly created fat globule surfaces, forming a new, protein-dominated membrane. This casein-coated surface gives homogenised cream fat globules different properties from native globules—they behave more like casein micelles, participating in acid-gel networks and having altered surface charge (ζ-potential shifts to approximately −20 mV).</p>

                            <h5 class="font-semibold mt-3 mb-1">Two-Stage Homogenization</h5>
                            <p>In cream processing, <strong>two-stage homogenization</strong> is preferred:</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>1st stage (10–15 MPa):</strong> Fat globule size reduction.</li>
                                <li><strong>2nd stage (3–5 MPa):</strong> Disrupts fat globule clusters (homogenization clusters) formed in the first stage. Without the second stage, newly formed small globules share adsorbed casein bridges and clump together, increasing apparent viscosity and causing "homogenization clustering".</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">Application Rules for Cream Homogenization</h5>
                            <div class="overflow-x-auto mt-2">
                                <table class="w-full text-left border-collapse text-sm">
                                    <thead class="bg-muted">
                                        <tr>
                                            <th class="p-2 border">Cream Type</th>
                                            <th class="p-2 border">Homogenize?</th>
                                            <th class="p-2 border">Scientific Rationale</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="p-2 border">Table/Coffee cream (10–18% fat)</td>
                                            <td class="p-2 border"><strong>YES</strong></td>
                                            <td class="p-2 border">Prevents visible fat separation (creaming velocity ∝ r²; reducing r dramatically reduces creaming). Creates smooth, viscous, pourable product. Prevents "fat plug" formation in cartons.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border">Whipping cream (25–35% fat)</td>
                                            <td class="p-2 border"><strong>NO</strong></td>
                                            <td class="p-2 border">Homogenization destroys whipping ability. The reduced globule size and protein-dominated new membrane prevent the partial coalescence mechanism essential for foam stabilisation (see Aging section). Homogenised cream produces weak, unstable foam with poor overrun.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border">Heavy cream (&gt;36% fat)</td>
                                            <td class="p-2 border"><strong>NO</strong></td>
                                            <td class="p-2 border">Same as above; additionally, at high fat volume fractions, homogenization creates severe clustering and extremely high viscosity—cream may become semi-solid and unpourable ("homogenization-induced thickening").</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border">Cream for butter making</td>
                                            <td class="p-2 border"><strong>NO</strong></td>
                                            <td class="p-2 border">Butter making requires phase inversion via churning. Homogenised globules resist partial coalescence and cannot be churned into butter effectively.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>

                        <li>
                            <strong>Cooling and Aging/Tempering (oPRP):</strong>
                            <p class="mt-1">After pasteurization (and optional homogenization), cream is rapidly cooled to 2–5°C using a PHE and then held at this temperature for 4–24 hours. This "aging" or "tempering" step is classified as an <strong>oPRP</strong> and is critically important for whipping cream.</p>

                            <h5 class="font-semibold mt-3 mb-1">Science of Fat Crystallization During Aging</h5>
                            <p>Milk fat is a complex mixture of over 200 different triglyceride species with widely varying melting points. During cooling and aging, fat crystallization occurs within each fat globule:</p>

                            <ul class="list-disc list-inside mt-2 space-y-2 ml-4">
                                <li><strong>Nucleation:</strong> As temperature decreases below the melting point of individual triglyceride species, crystal nuclei form. Heterogeneous nucleation (catalysed by existing solid surfaces, MFGM components, or high-melting triglyceride crystals) predominates. Nucleation rate is highly temperature-dependent: faster cooling produces many small crystals; slower cooling produces fewer, larger crystals.</li>
                                <li><strong>Crystal growth:</strong> Nuclei grow by accretion of crystallisable triglycerides from the liquid oil phase. Growth rate depends on the degree of supercooling (ΔT = T_melting − T_actual), diffusion rate of triglycerides to crystal surfaces, and crystal packing geometry.</li>
                                <li><strong>Polymorphism:</strong> Milk fat crystals can exist in three main polymorphic forms:
                                    <ul class="list-circle list-inside ml-4 mt-1 space-y-1">
                                        <li><strong>α (alpha):</strong> Hexagonal packing. Least stable, lowest melting point. Forms rapidly upon fast cooling. Loosely packed, needle-like crystals.</li>
                                        <li><strong>β' (beta-prime):</strong> Orthorhombic perpendicular packing. Intermediate stability. <strong>Most desirable for cream and butter</strong>. Fine, needle-like crystals that create a good semi-solid network. Gives smooth texture, good spreadability.</li>
                                        <li><strong>β (beta):</strong> Triclinic packing. Most stable, highest melting point. Large, coarse crystals. Gives grainy, sandy texture. Undesirable in cream products.</li>
                                    </ul>
                                </li>
                                <li><strong>Polymorphic transition:</strong> α → β' → β (Ostwald's step rule—less stable forms crystallize first, then transform to more stable forms). The goal of controlled aging is to promote the α → β' transition while avoiding excessive β crystal growth. Holding at 2–5°C for 4–24 hours favours β' crystal formation.</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">Role of Fat Crystals in Whipping</h5>
                            <p>Fat crystals formed during aging serve a crucial structural role during whipping:</p>
                            <ol class="list-decimal list-inside mt-2 space-y-2 ml-4">
                                <li>During aging, solid fat crystals (especially needle-like β' crystals) orient at the inner surface of the MFGM, protruding slightly outward.</li>
                                <li>During whipping, mechanical agitation introduces air bubbles and brings fat globules into close contact at bubble surfaces.</li>
                                <li>The protruding fat crystals from one globule <strong>pierce the MFGM of adjacent globules</strong>, creating bridges of shared liquid fat between globules. This is the <strong>partial coalescence mechanism</strong> (Boode & Walstra, 1993).</li>
                                <li>Partially coalesced fat globule networks form a scaffold around air bubbles, stabilising the foam structure. The interlocking crystal-globule network also gives the whipped cream its body, rigidity, and stand-up properties.</li>
                                <li>Complete coalescence (full merging of globules into large fat pools) is prevented by the crystal network providing rigidity—the interlocking crystals act as "spacers" maintaining globule identity.</li>
                            </ol>

                            <p class="mt-3"><strong>Optimal conditions for whipping performance:</strong></p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li>Cream temperature during whipping: 4–8°C (SFC ≈ 40–55%)</li>
                                <li>Fat content: ≥30% (preferably 35–40%)</li>
                                <li>Aging time: minimum 4 hours, optimally 12–24 hours at 4°C</li>
                                <li>SFC too low (&lt;30%): insufficient crystals for partial coalescence → weak, runny foam</li>
                                <li>SFC too high (&gt;60%): globules are too rigid, may shatter rather than partially coalesce → grainy texture, rapid over-whipping to butter</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">Overrun and Foam Stability</h5>
                            <p><strong>Overrun</strong> is the measure of air incorporation during whipping:</p>
                            <div class="bg-gray-100 p-3 rounded mt-2 text-center font-mono text-sm">
                                Overrun (%) = [(Volume of whipped cream − Volume of liquid cream) / Volume of liquid cream] × 100
                            </div>
                            <p class="mt-2">Typical overrun values: 80–120% for well-made whipped cream (i.e., the volume roughly doubles). Overrun depends on fat content, temperature, aging, whipping speed, whipping time, and the presence of emulsifiers/stabilisers.</p>
                            <p class="mt-2"><strong>Foam stability</strong> is assessed by measuring serum drainage (volume of liquid that drains from the foam under gravity over time, typically measured at 1 hour and 24 hours at 20°C). Well-made whipped cream should show &lt;10% drainage after 1 hour at 20°C.</p>
                        </li>

                        <li>
                            <strong>Packaging (PRP):</strong>
                            <p class="mt-1">Packaging is a <strong>PRP</strong> that protects cream from environmental contamination, light-induced oxidation, moisture loss, and physical damage. Packaging materials must be food-grade, inert, and provide adequate barrier properties.</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>HDPE/PP cups with foil lids:</strong> Common for retail cream (200 mL, 500 mL). Provide good moisture barrier but limited light protection. UV-absorbing pigments (TiO₂) may be incorporated.</li>
                                <li><strong>Multilayer pouches:</strong> Co-extruded PE/PA/PE for sachets. Low cost but limited mechanical protection.</li>
                                <li><strong>Tetra Rex / Gable-top cartons:</strong> PE-coated paperboard. Good light barrier, stackable. Common for 200 mL to 1 L packs.</li>
                                <li><strong>Glass bottles:</strong> Excellent chemical inertness but heavy, fragile, and expensive. Used for premium/artisanal products.</li>
                                <li><strong>Light protection:</strong> Critical to prevent photo-oxidation of riboflavin (vitamin B2) → singlet oxygen generation → oxidation of unsaturated fatty acids → development of "light-struck" or "sunlight" flavour (methional, dimethyl disulfide). Opaque or UV-blocking packaging is preferred.</li>
                            </ul>
                            <p class="mt-2"><strong>Filling:</strong> Cream is filled at ≤5°C using volumetric or gravimetric fillers in a hygienic (Class 100,000) or clean-room environment. Modified Atmosphere Packaging (MAP) with N₂ or N₂/CO₂ gas flush can extend shelf life by reducing headspace oxygen (reducing oxidative rancidity).</p>
                        </li>

                        <li>
                            <strong>Cold Storage & Distribution (CCP-2):</strong>
                            <p class="mt-1">Maintaining the cold chain (≤5°C, ideally 2–4°C) from packaging through distribution to consumer is classified as a <strong>CCP-2</strong>. This is critical because pasteurized cream is <strong>not commercially sterile</strong>—it contains surviving thermoduric organisms and may acquire post-pasteurization contaminants (PPCs).</p>

                            <h5 class="font-semibold mt-3 mb-1">Microbiological Considerations During Storage</h5>
                            <ul class="list-disc list-inside mt-2 space-y-2 ml-4">
                                <li><strong>Thermoduric bacteria (survive pasteurization):</strong> <em>Microbacterium lacticum</em>, <em>Enterococcus</em> spp., <em>Micrococcus</em> spp., heat-resistant streptococci. These grow slowly at refrigeration temperatures and generally have minimal impact if cold chain is maintained.</li>
                                <li><strong>Spore-formers (survive pasteurization):</strong> <em>Bacillus cereus</em> (psychrotrophic strains can grow at 4–7°C, producing diarrheal enterotoxin; infective dose ~10⁵ CFU/g), <em>B. licheniformis</em>, <em>Paenibacillus</em> spp. These are the <strong>primary shelf-life limiting organisms</strong> in pasteurized cream. At 5°C, <em>B. cereus</em> generation time is ~12–18 hours.</li>
                                <li><strong>Post-Pasteurization Contaminants (PPCs):</strong> Gram-negative psychrotrophs (<em>Pseudomonas</em>, coliforms) introduced after pasteurization through biofilms in filling equipment, contaminated packaging, or environmental exposure. These can grow rapidly at refrigeration temperatures, causing proteolytic (bitter, putrid) and lipolytic (rancid) spoilage. Even low initial levels (1–10 CFU/mL) can reach spoilage levels (&gt;10⁶ CFU/mL) within 10–14 days at 4°C.</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">Shelf Life of Pasteurized Cream</h5>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li>At ≤5°C, continuously refrigerated: <strong>15–20 days</strong> (depending on initial microbial load, post-pasteurization hygiene, and packaging integrity).</li>
                                <li>Temperature abuse (e.g., 10°C for several hours) dramatically shortens shelf life. <strong>Q₁₀ for bacterial growth ≈ 2–3</strong> (doubling the growth rate for each 10°C temperature rise).</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">Quality Deterioration During Storage</h5>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>Oxidative rancidity:</strong> Auto-oxidation of unsaturated fatty acids (oleic, linoleic, linolenic) via free radical chain reaction. Initiated by light, metal ions (Cu²⁺, Fe³⁺), residual dissolved oxygen, or enzymatic catalysis (XO, LPO). Products include hydroperoxides (primary), aldehydes (hexanal, nonanal—"cardboard" flavour), and ketones (secondary). Monitored by Peroxide Value (PV) and Thiobarbituric Acid Reactive Substances (TBARS).</li>
                                <li><strong>Hydrolytic rancidity:</strong> From residual heat-stable microbial lipases (see Step 3). Release of FFA measured by acid degree value (ADV) or copper soap method.</li>
                                <li><strong>Physical instability:</strong> Fat separation (creaming) in non-homogenised cream; serum separation; viscosity changes.</li>
                            </ul>
                        </li>
                    </ol>

                    <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 font-headline">HACCP Summary for Pasteurized Cream</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Step</th>
                                    <th class="p-2 border">Classification</th>
                                    <th class="p-2 border">Hazard</th>
                                    <th class="p-2 border">Critical Limit</th>
                                    <th class="p-2 border">Monitoring</th>
                                    <th class="p-2 border">Corrective Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border">Pasteurization</td>
                                    <td class="p-2 border"><strong>CCP-1</strong></td>
                                    <td class="p-2 border">Survival of pathogens (biological)</td>
                                    <td class="p-2 border">≥80°C for ≥15 sec; Phosphatase-negative</td>
                                    <td class="p-2 border">Continuous temperature recording (calibrated thermometer/RTD in holding tube); FDV position; Phosphatase test every batch</td>
                                    <td class="p-2 border">Automatic divert valve returns product to balance tank for re-processing; Hold and investigate; Recalibrate instruments</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Cold Storage & Distribution</td>
                                    <td class="p-2 border"><strong>CCP-2</strong></td>
                                    <td class="p-2 border">Growth of surviving pathogens (esp. <em>B. cereus</em>, <em>L. monocytogenes</em>)</td>
                                    <td class="p-2 border">Product temperature ≤5°C at all times</td>
                                    <td class="p-2 border">Continuous cold room temperature logging; Spot-check product temperature at dispatch; Distribution vehicle temperature logging</td>
                                    <td class="p-2 border">Reject/quarantine product exposed to &gt;8°C for &gt;2 hours; Investigate and repair cold chain breach; Reduce shelf life if marginal deviation</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 font-headline">Common Defects in Pasteurized Cream</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Defect</th>
                                    <th class="p-2 border">Description</th>
                                    <th class="p-2 border">Cause</th>
                                    <th class="p-2 border">Prevention</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border">Rancid/soapy flavour</td>
                                    <td class="p-2 border">Unpleasant, pungent, soapy taste and odour</td>
                                    <td class="p-2 border">Hydrolytic rancidity: release of short-chain FFA by lipases (native LPL or microbial)</td>
                                    <td class="p-2 border">Ensure adequate pasteurization (LPL inactivation); minimise raw milk storage time; avoid mechanical damage to MFGM pre-pasteurization</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Oxidised/metallic/cardboard flavour</td>
                                    <td class="p-2 border">Stale, metallic, or cardboard-like taste</td>
                                    <td class="p-2 border">Auto-oxidation of unsaturated fatty acids catalysed by light, Cu²⁺/Fe³⁺ ions, or dissolved O₂</td>
                                    <td class="p-2 border">Use opaque/UV-blocking packaging; deaerate cream; avoid copper/iron contact surfaces; minimise headspace oxygen</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Bitter flavour</td>
                                    <td class="p-2 border">Persistent bitter taste</td>
                                    <td class="p-2 border">Proteolysis by psychrotrophic bacterial proteases (heat-stable) or plasmin, producing bitter hydrophobic peptides</td>
                                    <td class="p-2 border">Ensure low psychrotrophic count in raw milk (&lt;10⁴ CFU/mL); minimise raw milk cold storage duration</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Fat separation / oiling off</td>
                                    <td class="p-2 border">Visible fat layer on surface</td>
                                    <td class="p-2 border">Insufficient or absent homogenization in table cream; temperature abuse (fat melting and re-coalescence)</td>
                                    <td class="p-2 border">Appropriate homogenization pressure for table cream; maintain cold chain</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Poor whipping / low overrun</td>
                                    <td class="p-2 border">Cream fails to form stiff foam, or collapses rapidly</td>
                                    <td class="p-2 border">Insufficient fat (&lt;28%); inadequate aging (insufficient SFC); homogenization; cream too warm during whipping</td>
                                    <td class="p-2 border">Ensure correct fat level; age ≥4h at ≤5°C; do not homogenise whipping cream; whip at 4–8°C</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Feathering (in coffee)</td>
                                    <td class="p-2 border">Cream forms white flecks/curds when added to hot coffee</td>
                                    <td class="p-2 border">Protein instability from developed acidity (aged raw milk), calcium imbalance, or interaction with coffee acids (pH ~4.8–5.1 at cream surface)</td>
                                    <td class="p-2 border">Use fresh, high-quality raw milk; avoid high-acidity milk; add stabilisers (sodium citrate, sodium bicarbonate)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            uht: {
                title: "B. Processing of UHT (Long-Life) Cream",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to UHT Cream</h3>
                    <p>UHT (Ultra-High Temperature) cream is a <strong>commercially sterile</strong> product that can be stored at ambient temperature (without refrigeration) for extended periods (typically 3–9 months). This is achieved by combining an intense but brief thermal treatment (≥135°C for ≥1 second, per Codex/EU regulations; typically 140–145°C for 3–6 seconds) with <strong>aseptic processing and packaging</strong>. The UHT process is designed to maximise microbial destruction while minimising heat-induced chemical changes (browning, vitamin loss, protein denaturation) by exploiting the different temperature sensitivities (z-values) of microbial kill vs. chemical reactions.</p>

                    <h4 class="font-bold mt-4 mb-2">The "UHT Window" Concept</h4>
                    <p>The scientific basis for UHT processing lies in the different z-values for bacterial spore destruction vs. chemical reactions:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                        <li><strong>Bacterial spore inactivation:</strong> z ≈ 10–12°C (steep temperature dependence)</li>
                        <li><strong>Chemical reactions</strong> (browning, vitamin destruction, protein denaturation): z ≈ 25–35°C (more gradual temperature dependence)</li>
                    </ul>
                    <p class="mt-2">This means that increasing temperature is proportionally more effective at killing spores than at causing chemical damage. At 140°C/4s, the bacterial kill (F₀ value, equivalent minutes at 121.1°C) may be 5–8 minutes, providing >9 log reduction of <em>Bacillus stearothermophilus</em> spores (the most heat-resistant non-pathogenic indicator organism, D₁₂₁ ≈ 4 min, z ≈ 10°C), while the equivalent chemical damage is far less than if the same kill were achieved at lower temperatures with longer holding times. This is the fundamental advantage of UHT over in-container sterilization (e.g., retorting at 115–120°C for 10–20 min).</p>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for UHT Cream</h3>
                    <div class="space-y-2 font-mono text-center mt-4">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Standardized Cream (from separation/standardization)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Addition of Stabilisers/Emulsifiers (if required) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-orange-100 border border-orange-300 rounded">Pre-heating (70–80°C in PHE regeneration section)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-orange-100 border border-orange-300 rounded">Upstream Homogenization (Optional: 15–20 MPa, 1st stage + 5 MPa 2nd stage) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-red-100 border border-red-300 rounded"><strong>UHT Treatment</strong><br/>(Direct: Steam Injection/Infusion 140–145°C / 3–6 sec<br/>OR Indirect: PHE/Tubular/Scraped-Surface 137–142°C / 4–10 sec) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Flash Cooling / Vacuum Chamber (Direct systems: 70–80°C; removes added steam condensate) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Aseptic Homogenization (Downstream)</strong><br/>(10–25 MPa total; 2-stage preferred) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Aseptic Cooling (to 20–25°C via PHE with sterile barriers)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Aseptic Buffer Tank (sterile, pressurised with sterile air/N₂)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Aseptic Packaging</strong><br/>(Tetra Pak, combibloc, aseptic PET/cups) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-gray-200 border border-gray-400 rounded">Ambient Storage & Distribution (Shelf life 3–9 months at 15–30°C)</div>
                    </div>

                    <h4 class="font-bold mt-6 mb-2">Detailed Scientific Explanation of UHT Cream Processing:</h4>
                    <ol class="list-decimal list-outside pl-5 space-y-4">
                        <li>
                            <strong>Addition of Stabilisers and Emulsifiers (PRP):</strong>
                            <p class="mt-1">UHT cream often requires the addition of stabilisers and emulsifiers to maintain physical stability over its long ambient shelf life. Without stabilisers, UHT cream is susceptible to fat separation (creaming), protein sedimentation, and age gelation.</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>Stabilisers:</strong> Sodium alginate (E401, ≤0.15%), carrageenan (E407, ≤0.15%, typically κ-carrageenan which interacts with κ-casein on casein micelle surfaces, forming a weak gel network that inhibits creaming), microcrystalline cellulose (E460), gellan gum (E418), or xanthan gum (E415). These hydrocolloids increase the viscosity of the aqueous phase, slowing creaming velocity (v ∝ 1/η from Stokes' Law).</li>
                                <li><strong>Emulsifiers:</strong> Mono- and diglycerides of fatty acids (E471), polysorbates (E432–E436, ≤0.1%), lecithin (E322). These adsorb at the oil-water interface, reducing interfacial tension (γ) and stabilising fat globules against coalescence. They also help maintain emulsion stability during the thermal shock of UHT processing.</li>
                                <li><strong>Buffering salts:</strong> Disodium hydrogen phosphate (E339ii) or trisodium citrate (E331iii) at 0.05–0.15% to improve heat stability of cream proteins. These salts sequester calcium ions (Ca²⁺), shifting the calcium-phosphate equilibrium and increasing the charge repulsion between casein micelles, thereby preventing heat-induced coagulation. This is critical because UHT temperatures can cause calcium phosphate precipitation onto casein micelles, leading to protein aggregation.</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Pre-heating (70–80°C):</strong>
                            <p class="mt-1">Cream is pre-heated in stages using the regeneration sections of a plate or tubular heat exchanger. This serves to:</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li>Reduce the thermal load on the final UHT heating section, improving energy efficiency (regeneration efficiency &gt;85% in modern UHT plants).</li>
                                <li>Begin denaturation of whey proteins (β-Lg begins unfolding at ~60°C, irreversible denaturation accelerates above 70°C). Pre-denaturation at 70–80°C can reduce fouling in the UHT heating section by allowing whey protein aggregation to occur in the pre-heater rather than in the high-temperature section where fouling is more problematic.</li>
                                <li>Activate the sulfhydryl-disulfide interchange reaction (exposed Cys121 of β-Lg reacts with κ-casein), which can improve heat stability for the subsequent UHT step.</li>
                            </ul>
                        </li>

                        <li>
                            <strong>UHT Treatment (CCP-1):</strong>
                            <p class="mt-1">The UHT heating step is the <strong>CCP-1</strong>—the primary step to achieve <strong>commercial sterility</strong>. Two main categories of UHT systems exist:</p>

                            <h5 class="font-semibold mt-3 mb-1">A. Direct Heating Systems</h5>
                            <p>Product comes into direct contact with food-grade culinary steam:</p>
                            <ul class="list-disc list-inside mt-2 space-y-2 ml-4">
                                <li><strong>Steam injection:</strong> Live steam is injected into a stream of pre-heated cream. The steam condenses instantly, raising the cream temperature from ~80°C to ~140–145°C in &lt;0.5 seconds. The virtually instantaneous heating minimises heat-induced chemical changes (browning, vitamin loss).</li>
                                <li><strong>Steam infusion:</strong> Pre-heated cream is sprayed or falls as a thin film into a chamber filled with pressurised steam. The cream is heated by condensing steam. Produces an even faster and more uniform heating than injection.</li>
                                <li><strong>Advantages:</strong> Fastest heating rate (0.1–0.5 sec to reach UHT temperature); minimal browning; best flavour quality; fewer heat-induced chemical changes.</li>
                                <li><strong>Disadvantages:</strong> Added water from steam condensation must be removed (flash cooling in vacuum chamber); higher steam consumption; more complex equipment; higher capital cost; risk of dilution if vacuum chamber parameters are not precisely controlled.</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">B. Indirect Heating Systems</h5>
                            <p>Heat is transferred through a wall separating the heating medium (steam or hot water) from the product:</p>
                            <ul class="list-disc list-inside mt-2 space-y-2 ml-4">
                                <li><strong>Plate Heat Exchangers (PHE):</strong> Corrugated stainless steel plates creating thin channels. High heat transfer coefficient (U ≈ 3,000–5,000 W/m²·K). Economical and compact. However, prone to fouling at UHT temperatures (protein deposition, mineral scaling). Maximum practical temperature ~140°C.</li>
                                <li><strong>Tubular Heat Exchangers (THE):</strong> Concentric tubes or multi-tube designs. Can handle higher viscosity products and higher temperatures (&gt;140°C). More resistant to fouling. Better for cream due to its higher viscosity. U ≈ 1,500–3,000 W/m²·K.</li>
                                <li><strong>Scraped-Surface Heat Exchangers (SSHE):</strong> A rotating shaft with scraper blades continuously removes product from the heated wall, preventing fouling and ensuring uniform heating. Essential for very viscous or particulate-containing products. U ≈ 500–1,500 W/m²·K. Highest capital and operating cost.</li>
                                <li><strong>Advantages:</strong> No water addition (no flash cooling needed); lower operating cost; simpler operation.</li>
                                <li><strong>Disadvantages:</strong> Slower heating rate (5–30 sec to reach UHT temperature); greater extent of chemical changes (more browning, vitamin loss); shorter continuous run times due to fouling (typically 6–12 hours before CIP is needed).</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">Fouling in UHT Systems</h5>
                            <p>Fouling is the accumulation of deposits on heat exchanger surfaces, reducing heat transfer efficiency, increasing pressure drop, and eventually requiring shutdown for CIP (Clean-In-Place). Two types of fouling deposits are recognised:</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>Type A (Protein-based, "milkstone"):</strong> Predominates at 75–110°C. Composed mainly of denatured whey proteins (β-Lg, α-La) and occluded fat. White/cream-coloured, soft, spongy. Removed by alkaline CIP (1–2% NaOH at 70–80°C).</li>
                                <li><strong>Type B (Mineral-based):</strong> Predominates at &gt;110°C. Composed mainly of calcium phosphate [Ca₃(PO₄)₂] and hydroxyapatite [Ca₅(PO₄)₃OH], with some protein. Grey/brown, hard, crystalline. Due to the inverse solubility of calcium phosphate (decreasing solubility with increasing temperature). Removed by acid CIP (0.5–1% HNO₃ at 60–70°C).</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">Microbiological Targets in UHT Processing</h5>
                            <div class="overflow-x-auto mt-2">
                                <table class="w-full text-left border-collapse text-sm">
                                    <thead class="bg-muted">
                                        <tr>
                                            <th class="p-2 border">Target Organism</th>
                                            <th class="p-2 border">Significance</th>
                                            <th class="p-2 border">D₁₂₁ (seconds)</th>
                                            <th class="p-2 border">z-value (°C)</th>
                                            <th class="p-2 border">Log reduction at 140°C/4s</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="p-2 border"><em>Geobacillus stearothermophilus</em> spores</td>
                                            <td class="p-2 border">Non-pathogenic; most heat-resistant mesophilic/thermophilic spore-former; indicator organism for UHT process validation</td>
                                            <td class="p-2 border">240–300</td>
                                            <td class="p-2 border">9–10</td>
                                            <td class="p-2 border">~9–12</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border"><em>Bacillus subtilis</em> spores</td>
                                            <td class="p-2 border">Mesophilic spore-former; common contaminant</td>
                                            <td class="p-2 border">30–40</td>
                                            <td class="p-2 border">8–10</td>
                                            <td class="p-2 border">&gt;15</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border"><em>Clostridium botulinum</em> spores (Type A)</td>
                                            <td class="p-2 border">Most dangerous pathogenic spore-former; target for commercial sterility ("botulinum cook")</td>
                                            <td class="p-2 border">12–15</td>
                                            <td class="p-2 border">10</td>
                                            <td class="p-2 border">&gt;20 (12D₁₂₁ = F₀ ≈ 3 min; UHT provides F₀ ≈ 5–8 min)</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border"><em>Bacillus cereus</em> spores</td>
                                            <td class="p-2 border">Food poisoning pathogen; common in dairy</td>
                                            <td class="p-2 border">3–5</td>
                                            <td class="p-2 border">8–10</td>
                                            <td class="p-2 border">&gt;30</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p class="mt-2"><strong>Commercial sterility</strong> is defined as the condition achieved by application of heat, sufficient alone or in combination with other treatments, to render the product free of viable microorganisms (including spores) capable of growing in the product under normal non-refrigerated storage and distribution conditions. A commercially sterile product is <strong>not</strong> necessarily "sterile" in the absolute microbiological sense—extremely heat-resistant spores may survive but cannot germinate and grow under the product's conditions (pH, a_w, storage temperature).</p>
                        </li>

                        <li>
                            <strong>Flash Cooling / Vacuum Chamber (Direct Systems Only, oPRP):</strong>
                            <p class="mt-1">In direct UHT systems, the added steam condensate (typically 10–15% w/w water addition) must be removed to restore the cream's original solids concentration. This is achieved by <strong>flash cooling</strong> in a vacuum chamber:</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li>The hot cream (140–145°C) is released into a vacuum vessel maintained at a pressure corresponding to a boiling point of 70–80°C.</li>
                                <li>The sudden pressure drop causes instantaneous boiling (flashing) of water from the cream, removing latent heat and cooling the cream rapidly from ~140°C to ~70–80°C in &lt;0.5 seconds.</li>
                                <li>The amount of water evaporated equals (approximately) the amount of steam condensate added during heating, restoring the original concentration.</li>
                                <li>This flash cooling also removes dissolved gases and volatile off-flavours (e.g., dimethyl sulfide, hydrogen sulfide), improving flavour quality—a process known as <strong>deaeration</strong> or <strong>deodorisation</strong>.</li>
                                <li>The vacuum must be precisely controlled (±0.5 kPa) to ensure exact water balance. Over-evaporation concentrates the cream; under-evaporation dilutes it. In-line density measurement provides feedback control.</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Aseptic Homogenization — Downstream (oPRP):</strong>
                            <p class="mt-1">For UHT cream, homogenization is preferably performed <strong>downstream</strong> (after UHT heating), termed <strong>aseptic homogenization</strong>. This is a critical <strong>oPRP</strong>.</p>

                            <h5 class="font-semibold mt-3 mb-1">Why Downstream (Aseptic) Homogenization for UHT Cream?</h5>
                            <ul class="list-disc list-inside mt-2 space-y-2 ml-4">
                                <li><strong>If homogenization is upstream (before UHT):</strong> The UHT heating step causes denaturation of the newly adsorbed casein/whey protein layer on homogenised globules. This leads to formation of large fat globule aggregates during heating (heat-induced clustering) and destabilisation of the emulsion during long ambient storage. Fat separation and "oiling off" result.</li>
                                <li><strong>If homogenization is downstream (after UHT):</strong> The cream is homogenised after the most intense thermal treatment. The newly formed protein-stabilised fat globule surfaces are not subjected to further heat stress. This produces a more stable emulsion for long-term ambient storage.</li>
                                <li><strong>Aseptic requirement:</strong> The homogeniser is positioned in the sterile section of the UHT line (between the UHT heater and the aseptic filler). The homogeniser itself must be sterilised prior to production (typically by circulating hot water at ≥130°C for 30 min or steam sterilisation). It must have <strong>aseptic design</strong> features: sterile piston seals, aseptic barriers (steam-sterilised gaskets), and sterile lubrication. Any failure of aseptic integrity here would recontaminate the commercially sterile product.</li>
                            </ul>

                            <p class="mt-2"><strong>Typical conditions:</strong> Two-stage, total pressure 15–25 MPa (150–250 bar). Higher pressures may be needed for cream due to its higher viscosity and fat content. Product temperature at homogenization: ~65–75°C (post flash-cooling in direct systems, or at an intermediate point in indirect systems).</p>
                        </li>

                        <li>
                            <strong>Aseptic Cooling & Aseptic Buffer Tank:</strong>
                            <p class="mt-1">After aseptic homogenization, the cream is cooled to 20–25°C (ambient storage temperature) via a PHE with sterile barriers (double-seat valves, sterile water barriers) separating the product side from the cooling water side. The cooled cream may be held in an <strong>aseptic buffer tank</strong>—a sterile, pressurised vessel (overpressure with sterile filtered air or nitrogen gas at 0.5–1.0 bar gauge) that provides a buffer between the continuous UHT process and the (potentially intermittent) aseptic filling machine. The tank allows for brief pauses in filling without stopping the UHT process.</p>
                        </li>

                        <li>
                            <strong>Aseptic Packaging (CCP-2):</strong>
                            <p class="mt-1">The commercially sterile cream is filled into pre-sterilised containers in a sterile filling environment. This is <strong>CCP-2</strong>—any failure at this stage will recontaminate the sterile product, leading to spoilage during ambient storage. "One non-sterile container in a million" is the target reliability level.</p>

                            <h5 class="font-semibold mt-3 mb-1">Packaging Systems for UHT Cream</h5>
                            <div class="overflow-x-auto mt-2">
                                <table class="w-full text-left border-collapse text-sm">
                                    <thead class="bg-muted">
                                        <tr>
                                            <th class="p-2 border">System</th>
                                            <th class="p-2 border">Material</th>
                                            <th class="p-2 border">Sterilisation Method</th>
                                            <th class="p-2 border">Barrier Properties</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="p-2 border"><strong>Tetra Pak Aseptic (TBA / TCA)</strong></td>
                                            <td class="p-2 border">6-layer laminate: PE/paperboard/PE/aluminium foil (6.5 µm)/PE/PE</td>
                                            <td class="p-2 border">Packaging material sterilised by H₂O₂ bath (35% w/w, 70°C) or spray, followed by hot air drying (>100°C) and UV irradiation</td>
                                            <td class="p-2 border">Excellent O₂ barrier (Al foil); excellent light barrier; good moisture barrier. OTR &lt;0.5 cm³/m²/day.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border"><strong>Combibloc (SIG)</strong></td>
                                            <td class="p-2 border">Similar laminate structure to Tetra Pak</td>
                                            <td class="p-2 border">H₂O₂ vapour sterilisation of pre-formed carton sleeves</td>
                                            <td class="p-2 border">Comparable to Tetra Pak</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border"><strong>Aseptic PET bottles</strong></td>
                                            <td class="p-2 border">PET (mono or multilayer with EVOH barrier)</td>
                                            <td class="p-2 border">Peracetic acid (PAA) spray/rinse or H₂O₂ vapour</td>
                                            <td class="p-2 border">Moderate O₂ barrier (unless EVOH layer included); transparent (requires UV absorber or pigment for light protection)</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border"><strong>Aseptic HDPE/PP cups</strong></td>
                                            <td class="p-2 border">Thermoformed or injection-moulded cups with foil-laminate lids</td>
                                            <td class="p-2 border">H₂O₂ or PAA with UV or heat</td>
                                            <td class="p-2 border">Good for single-serve portions</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h5 class="font-semibold mt-3 mb-1">Sterilisation of Packaging Material</h5>
                            <p>The packaging material sterilisation must achieve a minimum of <strong>4–5 log reduction</strong> of the most resistant contaminants (typically <em>Bacillus</em> spores). The H₂O₂ sterilisation process involves:</p>
                            <ol class="list-decimal list-inside ml-4 space-y-1 mt-2 text-sm">
                                <li>Application of 35% H₂O₂ solution at 70°C to the packaging surface (dip, spray, or roller application)</li>
                                <li>Heating to >100°C with hot sterile air to decompose residual H₂O₂ to water and oxygen (H₂O₂ → H₂O + ½O₂)</li>
                                <li>Residual H₂O₂ on the package must be &lt;0.5 ppm (FSSAI/FDA limit) to ensure food safety</li>
                            </ol>

                            <p class="mt-2"><strong>Filling environment:</strong> The aseptic zone around the filling head is maintained at positive pressure with HEPA-filtered (Class 100 / ISO 5) sterile air to prevent airborne contamination. The sterile zone integrity is continuously monitored.</p>
                        </li>

                        <li>
                            <strong>Ambient Storage & Distribution:</strong>
                            <p class="mt-1">Correctly processed and packaged UHT cream can be stored at ambient temperature (15–30°C) for <strong>3–9 months</strong> (manufacturer-determined shelf life, depending on formulation and packaging quality). No refrigeration is required until the package is opened. After opening, UHT cream must be refrigerated (≤5°C) and consumed within 3–5 days.</p>

                            <h5 class="font-semibold mt-3 mb-1">Quality Changes During Ambient Storage</h5>
                            <p>While UHT cream is microbiologically stable, it undergoes slow <strong>physicochemical and biochemical deterioration</strong> during storage:</p>
                            <ul class="list-disc list-inside mt-2 space-y-2 ml-4">
                                <li>
                                    <strong>Age Gelation:</strong> The most significant quality defect in UHT cream. After 2–6 months of ambient storage, UHT cream may develop an irreversible gel, transforming from a pourable liquid to a solid or semi-solid custard-like consistency. Two mechanisms are proposed:
                                    <ul class="list-circle list-inside ml-4 mt-1 space-y-1">
                                        <li><strong>Enzymatic (proteolytic) gelation:</strong> Caused by heat-stable extracellular proteases from psychrotrophic bacteria (esp. <em>Pseudomonas fluorescens</em>) present in the raw milk before UHT processing. These metalloproteinases (Zn²⁺-dependent) have extremely high thermostability (D₁₄₀ > 300 sec). Even residual activity of 1–2% of original enzyme level can slowly hydrolyse κ-casein on casein micelle surfaces during months of storage, destabilising the casein micelle → aggregation → gelation. <strong>Prevention:</strong> Use raw milk with very low psychrotrophic count (&lt;10⁴ CFU/mL, ideally &lt;10³); process milk within 24h of milking; avoid prolonged cold storage of raw milk.</li>
                                        <li><strong>Non-enzymatic (physicochemical) gelation:</strong> Caused by slow polymerisation of casein and whey proteins via intermolecular cross-linking (disulfide bonds, Maillard-type cross-links, dehydroalanine-lysine cross-links). β-Lg-κ-casein complexes formed during UHT processing slowly rearrange and cross-link during storage. This mechanism is more prominent in indirect UHT products (higher thermal load) and at higher storage temperatures.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Maillard Reaction (Non-Enzymatic Browning):</strong> During storage at ambient temperature, the Maillard reaction between lactose (reducing sugar) and lysine residues of milk proteins proceeds slowly. This causes:
                                    <ul class="list-circle list-inside ml-4 mt-1 space-y-1">
                                        <li>Progressive browning (increase in Hunter 'b' value and absorbance at 420 nm)</li>
                                        <li>Development of "stale" or "cooked" off-flavours</li>
                                        <li>Formation of advanced glycation end-products (AGEs) including carboxymethyl-lysine (CML) and furosine (a Maillard intermediate)</li>
                                        <li>Nutritional loss: ~10–15% of available lysine may be blocked (Amadori products) after 6 months at 25°C</li>
                                    </ul>
                                    <p class="mt-1"><strong>Monitoring:</strong> Furosine content (mg/100g protein) is used as a marker of heat treatment intensity and Maillard progression. Fresh UHT cream: ~50–200 mg furosine/100g protein. After 6 months storage: 200–500 mg/100g protein.</p>
                                </li>
                                <li>
                                    <strong>Lipid Oxidation:</strong> Despite the oxygen barrier of aluminium-foil-laminated packaging, trace dissolved oxygen (~2–5 ppm) and headspace oxygen can drive slow auto-oxidation of unsaturated fatty acids. Products include hexanal, pentanal, and 2-nonenal (cardboard flavour). UHT heating also partially inactivates natural antioxidants (tocopherols, β-carotene partially degraded). Higher storage temperatures (>25°C) accelerate oxidation.
                                </li>
                                <li>
                                    <strong>Fat Separation:</strong> Despite homogenization, slow creaming can occur over months of storage, especially if homogenization was inadequate. A visible cream layer at the top of the carton is a common consumer complaint. More severe cases involve "fat plug" formation—a dense plug of aggregated fat at the top of the carton.
                                </li>
                                <li>
                                    <strong>Sediment Formation:</strong> Calcium phosphate (precipitated during UHT heating due to inverse solubility) can slowly aggregate and sediment during storage, forming a white/grey deposit at the bottom of the carton. Addition of stabilising salts (citrate, phosphate) and effective homogenization mitigates this.
                                </li>
                            </ul>
                        </li>
                    </ol>

                    <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 font-headline">HACCP Summary for UHT Cream</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Step</th>
                                    <th class="p-2 border">Classification</th>
                                    <th class="p-2 border">Hazard</th>
                                    <th class="p-2 border">Critical Limit</th>
                                    <th class="p-2 border">Monitoring</th>
                                    <th class="p-2 border">Corrective Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border">UHT Treatment</td>
                                    <td class="p-2 border"><strong>CCP-1</strong></td>
                                    <td class="p-2 border">Survival of pathogenic and spoilage spores</td>
                                    <td class="p-2 border">≥140°C for ≥4 sec (or equivalent F₀ ≥ 5 min); Product temperature ≥135°C at holding tube exit</td>
                                    <td class="p-2 border">Continuous temperature recording at holding tube inlet and outlet (calibrated Pt100 RTDs ±0.1°C); Flow rate monitoring (positive displacement pump speed); Steam pressure/temperature in heating section</td>
                                    <td class="p-2 border">Automatic diversion of under-processed product to non-sterile drain; Alarm and line shutdown; Investigation and recalibration; CIP and re-sterilisation of line before restart</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Aseptic Packaging</td>
                                    <td class="p-2 border"><strong>CCP-2</strong></td>
                                    <td class="p-2 border">Post-sterilisation recontamination; Non-sterile packages</td>
                                    <td class="p-2 border">Package sterility: ≥4 log reduction on packaging material; H₂O₂ residual &lt;0.5 ppm; Aseptic zone positive air pressure ≥5 Pa; Seal integrity (no leakers)</td>
                                    <td class="p-2 border">H₂O₂ bath temperature and concentration (refractometer); Drying air temperature; Aseptic zone differential pressure sensors; In-line seal integrity (pressure decay test or high-voltage detection); Microbiological sterility testing (incubation test: 37°C/7 days + 55°C/7 days on sample packs)</td>
                                    <td class="p-2 border">Stop filler immediately if aseptic breach detected; Quarantine and reject affected production lot; Re-sterilise filler; Investigate root cause (splice failure, H₂O₂ concentration drift, HEPA filter integrity, seal jaw wear)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 font-headline">Incubation (Sterility) Testing for UHT Cream</h3>
                    <p>Since UHT cream is intended for ambient storage, its commercial sterility must be verified through incubation testing on every production batch:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                        <li><strong>Sample size:</strong> Statistically representative sample (typically 1 unit per 3,000–5,000 produced, minimum 5 per batch; more for initial production qualification).</li>
                        <li><strong>Incubation conditions:</strong>
                            <ul class="list-circle list-inside ml-4 mt-1 space-y-1">
                                <li>37°C for 7 days (detects mesophilic organisms)</li>
                                <li>55°C for 7 days (detects thermophilic organisms, primarily <em>G. stearothermophilus</em>)</li>
                            </ul>
                        </li>
                        <li><strong>Assessment criteria:</strong> After incubation, units are examined for:
                            <ul class="list-circle list-inside ml-4 mt-1 space-y-1">
                                <li>Package swelling (gas production from microbial metabolism; CO₂, H₂)</li>
                                <li>pH change (&gt;0.5 unit decrease from reference indicates acid-producing organisms)</li>
                                <li>Organoleptic changes (off-odour, off-flavour, colour change, texture change)</li>
                                <li>Microscopic examination and plate count of incubated sample (should show &lt;10 CFU/0.1 mL; ideally 0)</li>
                            </ul>
                        </li>
                        <li><strong>Acceptance criterion:</strong> A batch is "commercially sterile" if all incubated units show no signs of microbial growth. Non-sterile units indicate process failure at CCP-1 (under-processing) or CCP-2 (packaging contamination), triggering investigation, recall of the affected batch, and corrective action.</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 font-headline">Comparison: Pasteurized vs. UHT Cream</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Pasteurized Cream</th>
                                    <th class="p-2 border">UHT Cream</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Heat treatment</td><td class="p-2 border">80–85°C / 15–25 sec</td><td class="p-2 border">140–145°C / 3–6 sec</td></tr>
                                <tr><td class="p-2 border">Microbial status</td><td class="p-2 border">Pasteurized (vegetative pathogens destroyed; spores survive)</td><td class="p-2 border">Commercially sterile (spores destroyed)</td></tr>
                                <tr><td class="p-2 border">Storage</td><td class="p-2 border">Refrigerated (≤5°C) mandatory</td><td class="p-2 border">Ambient (15–30°C); refrigerate after opening</td></tr>
                                <tr><td class="p-2 border">Shelf life</td><td class="p-2 border">15–20 days</td><td class="p-2 border">3–9 months</td></tr>
                                <tr><td class="p-2 border">Packaging</td><td class="p-2 border">Conventional (cups, pouches, cartons)</td><td class="p-2 border">Aseptic packaging (Tetra Pak, etc.)</td></tr>
                                <tr><td class="p-2 border">Flavour profile</td><td class="p-2 border">Fresh, mild cooked note; closest to raw cream</td><td class="p-2 border">More pronounced cooked/caramelised note; sulphydryl flavour initially, stale/Maillard flavour on prolonged storage</td></tr>
                                <tr><td class="p-2 border">Whey protein denaturation</td><td class="p-2 border">60–80% of β-Lg</td><td class="p-2 border">&gt;90% of β-Lg (essentially complete)</td></tr>
                                <tr><td class="p-2 border">Browning (ΔA₄₂₀)</td><td class="p-2 border">Negligible</td><td class="p-2 border">Slight initially; increases during storage</td></tr>
                                <tr><td class="p-2 border">Vitamin C loss</td><td class="p-2 border">~10%</td><td class="p-2 border">~20–30% initially; up to 100% after 3–6 months storage</td></tr>
                                <tr><td class="p-2 border">Furosine (mg/100g protein)</td><td class="p-2 border">&lt;12</td><td class="p-2 border">50–200 (fresh); 200–500 (after storage)</td></tr>
                                <tr><td class="p-2 border">Lactulose (mg/L)</td><td class="p-2 border">&lt;50 (typically undetectable)</td><td class="p-2 border">200–1000 (Maillard indicator; used to distinguish UHT from pasteurized)</td></tr>
                                <tr><td class="p-2 border">Cost</td><td class="p-2 border">Lower processing cost; higher distribution cost (cold chain)</td><td class="p-2 border">Higher processing cost (equipment, energy, aseptic packaging); lower distribution cost (no cold chain)</td></tr>
                                <tr><td class="p-2 border">Whipping performance</td><td class="p-2 border">Excellent (if not homogenised, properly aged)</td><td class="p-2 border">Generally inferior; requires stabilisers/emulsifiers for acceptable whipping; over-whipping risk due to homogenised globule instability</td></tr>
                                <tr><td class="p-2 border">Key quality risk</td><td class="p-2 border">Microbial spoilage (cold-chain failure)</td><td class="p-2 border">Age gelation; Maillard browning; fat separation</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 font-headline">Common Defects in UHT Cream</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Defect</th>
                                    <th class="p-2 border">Description</th>
                                    <th class="p-2 border">Root Cause</th>
                                    <th class="p-2 border">Prevention</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border">Non-sterility (spoilage)</td>
                                    <td class="p-2 border">Package swelling, off-odour, acid/bitter taste, gas bubbles</td>
                                    <td class="p-2 border">Under-processing (CCP-1 failure) or post-sterilisation contamination (CCP-2 failure: packaging seal defect, non-sterile filler)</td>
                                    <td class="p-2 border">Validate and monitor CCP-1 and CCP-2; incubation testing; seal integrity testing</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Age gelation</td>
                                    <td class="p-2 border">Product thickens to custard-like or gel consistency during storage</td>
                                    <td class="p-2 border">Heat-stable proteases from psychrotrophic bacteria in raw milk; and/or physicochemical protein cross-linking</td>
                                    <td class="p-2 border">Use high-quality raw milk (low psychrotrophic count &lt;10³ CFU/mL); minimise raw milk storage time; add sodium polyphosphate (0.05–0.1%); higher UHT temperature (higher protein denaturation may delay enzymatic gelation but promote physicochemical gelation—complex balance)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Fat separation / fat plug</td>
                                    <td class="p-2 border">Visible cream layer or solid fat mass at top of package</td>
                                    <td class="p-2 border">Inadequate homogenization (insufficient pressure, worn valve); fat globule re-coalescence during storage</td>
                                    <td class="p-2 border">Optimise homogenization pressure (20–25 MPa for UHT cream); use two-stage homogenization; add κ-carrageenan stabiliser; ensure downstream homogenization</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Browning</td>
                                    <td class="p-2 border">Darkening of cream colour over storage period</td>
                                    <td class="p-2 border">Maillard reaction between lactose and protein lysine residues; accelerated at higher storage temperatures</td>
                                    <td class="p-2 border">Store at ≤25°C (FIFO inventory management); minimise total thermal load (prefer direct UHT over indirect); use opaque packaging</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Cooked/stale flavour</td>
                                    <td class="p-2 border">Distinct "cooked" taste initially; "stale" or "cardboard" flavour during prolonged storage</td>
                                    <td class="p-2 border">Sulphydryl compounds from β-Lg denaturation (initial); Maillard reaction volatiles and lipid oxidation products (storage)</td>
                                    <td class="p-2 border">Direct heating systems produce less cooked flavour; flash cooling removes volatile sulfides; minimise headspace O₂ and storage temperature</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Sediment / white deposits</td>
                                    <td class="p-2 border">White or grey granular deposit at bottom of package</td>
                                    <td class="p-2 border">Precipitation of calcium phosphate (inverse solubility at UHT temperatures); aggregation of denatured protein-mineral complexes</td>
                                    <td class="p-2 border">Add stabilising salts (citrate, phosphate) to sequester calcium; optimise homogenization</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            }
        }
    },  
    hi: {
        title: "Cream Processing",
        subTopics: {
            pasteurized: {
                title: "A. Pasteurized (Fresh) Cream ki Processing",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Cream ka Introduction</h3>
                    <p>Cream milk ka fat-rich portion hota hai jo whole milk se separate kiya jaata hai. Scientifically dekhen toh, cream ek oil-in-water (O/W) emulsion hai — matlab fat ke globules paani wale phase (serum/plasma) mein disperse hote hain. Bovine milk mein normally 3.5–5.0% fat hota hai, aur cream basically iska concentrated form hai jismein fat content 10% se lekar 70% se bhi zyada ho sakta hai — ye depend karta hai ki kis type ki cream banana hai aur uska use kya hoga.</p>
                    <p class="mt-2">Cream ka use bahut versatile hai — ye ek finished consumer product bhi hai (table cream, whipping cream) aur bahut saare dairy products ka intermediate raw material bhi hai jaise ki <strong>butter, ghee, anhydrous milk fat (AMF), ice cream, aur recombined dairy products</strong>.</p>
                    <p class="mt-2">Agar hum <strong>colloidal science</strong> ki language mein baat karein toh, cream ek O/W emulsion hi rehta hai, lekin iska <strong>dispersed-phase volume fraction (φ)</strong> bahut zyada hota hai compared to whole milk. Whole milk mein φ ≈ 0.04 hota hai (matlab sirf 4% volume fat globules ka hai), jabki heavy cream (40% fat) mein φ ≈ 0.44 hota hai. Jab φ value ~0.3 se zyada ho jaata hai, toh cream ka <strong>rheological behaviour</strong> change hota hai — ye <strong>Newtonian</strong> se <strong>shear-thinning (pseudoplastic)</strong> ho jaata hai, matlab jab aap cream ko stir karenge toh uski viscosity kam ho jaayegi. Aur saath hi, cream zyada susceptible ho jaati hai destabilisation phenomena ke liye jaise ki <strong>flocculation</strong> (globules ka jhund banana), <strong>coalescence</strong> (globules ka merge hona), aur <strong>partial coalescence</strong> (aadha merge hona — ye whipping mein important hai).</p>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Cream ki Composition aur Structure</h3>
                    <p>Cream ki composition mainly uske fat content pe depend karti hai. Jaise-jaise fat content badhta hai, baaki components (protein, lactose, minerals, water) ka proportion proportionally kam hota hai kyunki fat unki jagah le leta hai.</p>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Component</th>
                                    <th class="p-2 border">Low Fat Cream (10% fat)</th>
                                    <th class="p-2 border">Medium Fat Cream (25% fat)</th>
                                    <th class="p-2 border">High Fat Cream (40% fat)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Fat (%)</td><td class="p-2 border">10.0</td><td class="p-2 border">25.0</td><td class="p-2 border">40.0</td></tr>
                                <tr><td class="p-2 border">Protein (%)</td><td class="p-2 border">2.9</td><td class="p-2 border">2.4</td><td class="p-2 border">1.9</td></tr>
                                <tr><td class="p-2 border">Lactose (%)</td><td class="p-2 border">4.3</td><td class="p-2 border">3.6</td><td class="p-2 border">2.9</td></tr>
                                <tr><td class="p-2 border">Minerals/Ash (%)</td><td class="p-2 border">0.7</td><td class="p-2 border">0.6</td><td class="p-2 border">0.5</td></tr>
                                <tr><td class="p-2 border">Water (%)</td><td class="p-2 border">82.1</td><td class="p-2 border">68.4</td><td class="p-2 border">54.7</td></tr>
                                <tr><td class="p-2 border">Energy (kcal/100g)</td><td class="p-2 border">~120</td><td class="p-2 border">~245</td><td class="p-2 border">~380</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="font-bold mt-4 mb-2">Milk Fat Globule Membrane (MFGM) — Cream ka Natural Emulsifier</h4>
                    <p>Cream mein har ek fat globule (average diameter 3–5 µm; range 0.2–15 µm) ke upar ek biological membrane hoti hai jise <strong>Milk Fat Globule Membrane (MFGM)</strong> kehte hain. Ye membrane 10–20 nm moti hoti hai aur trilaminar structure mein hoti hai. Basically ye MFGM hi hai jo fat globules ko ek dusre se alag rakhti hai aur emulsion ko stable rakhti hai. Agar ye membrane damage ho jaaye toh fat globules merge ho jaayenge aur cream kharab ho jaayegi.</p>
                    <p class="mt-2">MFGM ki composition:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1">
                        <li><strong>Phospholipids (~30% MFGM dry matter):</strong> Main phospholipids hain — phosphatidylcholine (PC), phosphatidylethanolamine (PE), sphingomyelin (SM), aur phosphatidylserine (PS). Ye amphiphilic molecules hain matlab inke do parts hote hain — ek hydrophilic head jo paani ki taraf face karta hai, aur ek hydrophobic tail jo fat ki taraf point karta hai. Yahi arrangement emulsion ko stable rakhta hai.</li>
                        <li><strong>Glycoproteins (~70% MFGM dry matter):</strong> Isme shamil hain — butyrophilin (BTN, lagbhag 40% total MFGM protein), xanthine dehydrogenase/oxidase (XDH/XO), PAS III, PAS 6/7, CD36 (PAS IV), aur mucins (MUC1, MUC15). Ye proteins <strong>steric aur electrostatic stabilisation</strong> provide karte hain. Native MFGM ka <strong>ζ-potential (zeta potential)</strong> lagbhag −13 mV hota hai pH 6.7 pe — ye negative charge fat globules ko ek dusre se repel karta hai aur coalescence rokta hai.</li>
                        <li><strong>Neutral lipids:</strong> Cholesterol aur glycerolipids jo phospholipid bilayer mein intercalated hote hain (beech mein ghuse rehte hain).</li>
                        <li><strong>Enzymes:</strong> Jaise ki alkaline phosphatase (ALP), γ-glutamyl transpeptidase (GGTP), aur 5'-nucleotidase. ALP ka role bahut important hai — ye <strong>pasteurization indicator enzyme</strong> hai. Agar pasteurization theek se hua hai toh ALP inactive ho jaana chahiye.</li>
                    </ul>
                    <p class="mt-2"><strong>Important point:</strong> MFGM ki integrity cream stability ke liye sabse zyada zaroori hai. Mechanical damage (jaise pumping, zyada agitation, pipeline mein rough handling) ya thermal processing MFGM ko disrupt kar sakta hai, jisse <strong>free fat</strong> release hota hai, fat globules merge hone lagte hain (coalescence), aur exposed unsaturated fatty acids ki wajah se <strong>oxidative rancidity</strong> develop hoti hai (baasi, metallic type smell/taste).</p>

                    <h4 class="font-bold mt-4 mb-2">Milk Fat ka Fatty Acid Profile</h4>
                    <p>Milk fat duniya ke sabse complex natural fats mein se ek hai — isme <strong>400 se zyada different fatty acids</strong> paaye jaate hain! Ye uniqueness ise doosre fats (jaise vegetable oils, lard) se alag banati hai. Key points:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1">
                        <li><strong>Short-chain fatty acids (C4–C8):</strong> Lagbhag 12% total fatty acids ka. Ye sirf ruminant animals (cow, buffalo, goat) ke milk fat mein milte hain — vegetable oils mein nahi milte. Sabse important hai <strong>butyric acid (C4:0, 3–4%)</strong> — ye butter aur ghee ki characteristic flavour ka reason hai. Ye SCFAs milk fat ka melting point kam karte hain.</li>
                        <li><strong>Medium-chain fatty acids (C10–C14):</strong> Lagbhag 20%. Isme capric (C10:0), lauric (C12:0), aur myristic (C14:0) acid shamil hain.</li>
                        <li><strong>Long-chain fatty acids (≥C16):</strong> Lagbhag 60%. Sabse dominant hai <strong>palmitic acid (C16:0, ~30%)</strong>, fir <strong>oleic acid (C18:1, ~25%)</strong>, aur <strong>stearic acid (C18:0, ~12%)</strong>.</li>
                        <li><strong>Unsaturated fatty acids:</strong> Total ka ~30–35%. Oleic acid sabse zyada hota hai. <strong>Conjugated Linoleic Acid (CLA, mainly rumenic acid C18:2 c9,t11)</strong> 0.3–1.0% hota hai — is par bahut research ho rahi hai kyunki iske potential anti-carcinogenic (cancer rokne wale) aur anti-atherogenic (heart disease rokne wale) properties hain.</li>
                    </ul>
                    <p class="mt-2">Milk fat ka <strong>melting range bahut broad hai (−40°C se +40°C)</strong>. Iska matlab ye hai ki kisi bhi temperature pe (is range ke andar) milk fat mein kuch solid crystalline fat hoga aur kuch liquid oil hoga. Is mixture mein kitna solid hai aur kitna liquid, ye <strong>Solid Fat Content (SFC)</strong> se measure hota hai. SFC cream ki functional properties ko directly affect karta hai — jaise ki whipping performance, mouthfeel, spreadability, aur butter-making efficiency.</p>
                    <p class="mt-1"><strong>Typical SFC values:</strong> 0°C pe ~65%, 10°C pe ~40%, 20°C pe ~20%, 35°C pe ~3%. Ye samajhna bahut important hai — agar cream mein SFC zyada hai (thand mein) toh fat globules rigid honge, aur agar SFC kam hai (garam mein) toh globules soft aur liquid honge.</p>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Cream ke Types (Regulatory Standards)</h3>
                    <h4 class="font-bold mt-4 mb-2">FSSAI Standards (India)</h4>
                    <p>FSSAI (Food Safety and Standards Authority of India) ne <em>Food Safety and Standards (Food Products Standards and Food Additives) Regulations</em> ke under cream ko uske milk fat content ke basis pe classify kiya hai:</p>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Cream ka Type</th>
                                    <th class="p-2 border">Min. Milk Fat % (m/m)</th>
                                    <th class="p-2 border">Functional Description aur Common Uses</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong>Low Fat Cream</strong></td>
                                    <td class="p-2 border">≥ 10.0</td>
                                    <td class="p-2 border">'Table cream' ya 'coffee cream' bhi kehte hain. Ye patli (low viscosity) hoti hai, easily pour ho jaati hai. Coffee, soup, sauces, aur dressings mein use hoti hai. Ise whip nahi kar sakte kyunki isme itna fat nahi hai ki stable foam ban sake (φ bahut kam hai partial coalescence network banane ke liye).</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Medium Fat Cream</strong></td>
                                    <td class="p-2 border">≥ 25.0</td>
                                    <td class="p-2 border">'Whipping cream' — ye bakery aur patisserie ki jaan hai! Isme kaafi fat hota hai (φ ≈ 0.27–0.39) toh ye partial coalescence ke through stable whipped structure bana sakti hai. Dessert toppings, cake fillings, aur culinary enrichment ke liye use hoti hai.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>High Fat Cream</strong></td>
                                    <td class="p-2 border">≥ 40.0</td>
                                    <td class="p-2 border">'Heavy cream' ya 'double cream'. Bahut rich aur thick hoti hai, excellent whipping performance deti hai (overrun 80–120%). Primary use: <strong>butter aur ghee banana</strong>. Ganaches, truffles, aur premium ice cream mixes mein bhi use hoti hai. High φ value ki wajah se bahut jaldi whip ho jaati hai lekin risk bhi hai ki over-whip ho jaaye (butter granules ban jaayein!).</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="font-bold mt-4 mb-2">Codex Alimentarius Standards (International)</h4>
                    <p><em>Codex Standard for Cream and Prepared Creams (CODEX STAN 288-1976)</em> international framework provide karta hai:</p>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Designation</th>
                                    <th class="p-2 border">Fat Content</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Half cream / Half-and-half</td><td class="p-2 border">10–18%</td></tr>
                                <tr><td class="p-2 border">Light (single) cream</td><td class="p-2 border">18–25%</td></tr>
                                <tr><td class="p-2 border">Whipping cream</td><td class="p-2 border">28–35%</td></tr>
                                <tr><td class="p-2 border">Heavy (double) cream</td><td class="p-2 border">≥ 36%</td></tr>
                                <tr><td class="p-2 border">Extra heavy cream / Clotted cream</td><td class="p-2 border">≥ 45–55%</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2"><strong>Note:</strong> FSSAI ke under cream mein permitted additives hain — stabilisers (sodium alginate ≤0.15%, carrageenan ≤0.15%, gelatin ≤0.15%), emulsifiers (polysorbates ≤0.1%), aur permitted colours/flavours jahan applicable ho. Codex bhi similar additives allow karta hai GMP conditions ke under.</p>

                    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">A. Pasteurized (Fresh) Cream ki Processing</h2>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Pasteurized Cream ka Processing Flowchart</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Raw Milk Reception & Platform Tests <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Filtration / Clarification <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Chilling (≤4°C tak) & Cold Storage <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Pre-heating (40–45°C tak) PHE mein</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">Cream Separation (Centrifugal, 5000–10000 RPM) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">Standardization (Skim Milk daalke Fat % adjust karna) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Pasteurization</strong><br/>(LTLT: 63°C/30 min YA HTST: 80–85°C/15–25 sec) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Homogenization (Optional: Single-stage 10–15 MPa, ya Two-stage 10+3 MPa) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Rapid Cooling (≤5°C tak) PHE mein <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Aging / Tempering (2–5°C pe 4–24 ghante) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Packaging (HDPE cups, pouches, Tetra Rex) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-gray-200 border border-gray-400 rounded">Cold Storage & Distribution (≤5°C, shelf life 15–20 din) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                    </div>

                    <h4 class="font-bold mt-6 mb-2">Har Processing Step ki Detailed Scientific Explanation:</h4>
                    <ol class="list-decimal list-outside pl-5 space-y-4">
                        <li>
                            <strong>Raw Milk Reception & Quality Testing (PRP):</strong>
                            <p class="mt-1">High-quality raw milk cream processing ki neenv hai — agar milk hi kharab hai toh cream kabhi acchi nahi banegi. Ye ek <strong>Prerequisite Program (PRP)</strong> hai. Dairy mein milk aate hi uske upar bahut saare <strong>platform tests</strong> kiye jaate hain taaki pata chale ki milk processing ke layak hai ya nahi:</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>Organoleptic evaluation (sense-based):</strong> Pehle dekhte hain milk ka colour kaisa hai, appearance kaisi hai (koi foreign matter toh nahi?), aur smell karte hain ki koi off-odour toh nahi hai. Off-odour ka matlab ho sakta hai ki milk spoiled hai, mastitis wali cow ka hai, ya adulterated hai.</li>
                                <li><strong>Temperature check:</strong> Milk ≤10°C pe aana chahiye (ideally ≤5°C). Agar temperature zyada hai toh iska matlab farm level pe cold chain maintain nahi hua aur bacteria bahut zyada multiply ho chuke honge.</li>
                                <li><strong>Acidity (titrable acidity):</strong> Normal range 0.13–0.16% lactic acid (Dornic degree 13–16°D) hota hai. Agar acidity zyada hai (&gt;0.18%) toh iska matlab bacteria ne lactose ko ferment karke lactic acid bana diya hai. Aisi milk ko garam karenge toh protein curdle ho sakta hai — ye processing mein bahut problem deta hai.</li>
                                <li><strong>Alcohol test (68% ya 75% ethanol):</strong> Ye protein stability check karta hai. Thoda sa milk liya, thoda sa alcohol milaya — agar milk curdle ho jaaye (thakke ban jaayein) toh milk unstable hai. Isme high acidity, abnormal salt balance, ya colostrum (first milk after calving) ho sakta hai. Aisi milk pasteurization mein curdle ho jaayegi.</li>
                                <li><strong>Clot-on-boiling (COB) test:</strong> Alcohol test se bhi strict test. Milk ko boil karo — agar thakke ban jaayein toh acidity ≥0.20% LA develop ho chuki hai. Ye milk processing ke layak nahi hai.</li>
                                <li><strong>Methylene blue reduction test (MBRT):</strong> Ye milk mein kitne bacteria hain uska indirect estimate deta hai. Bacteria oxygen consume karte hain aur methylene blue dye ko reduce karke colourless bana dete hain. Agar dye 5 ghante se zyada tak blue rahe (Grade 1, Very Good) toh milk acchi hai. Agar 2 ghante se kam mein colour chala jaaye toh bacteria bahut zyada hain (estimated &gt;4 × 10⁶ CFU/mL) — poor quality milk hai.</li>
                                <li><strong>Fat content (Gerber method):</strong> Butyrometer use karke volumetric estimation hoti hai — sulphuric acid aur amyl alcohol use hote hain. Ye fat content jaanna zaroori hai farmers ko payment ke liye aur process planning ke liye (kitni cream niklegi).</li>
                                <li><strong>Somatic Cell Count (SCC):</strong> Ye cow ke udder ki health ka indicator hai. FSSAI limit hai ≤5 × 10⁵ cells/mL. Agar SCC zyada hai toh iska matlab cow ko subclinical mastitis hai. Mastitis wale milk mein proteolytic aur lipolytic enzyme activity badh jaati hai — ye cream ki stability aur flavour kharab karte hain.</li>
                                <li><strong>Adulterant screening:</strong> Added water ka test (freezing point depression/cryoscopy; normal −0.530 to −0.560°C — paani milane se ye zero ki taraf shift hota hai), neutralisers ka test (rosalic acid test — agar kisi ne soda milaya hai developed acidity chhupaane ke liye), starch, urea, detergents, aur hydrogen peroxide ka test.</li>
                                <li><strong>Antibiotic residue screening:</strong> Rapid immunoassay kits se (jaise β-lactam/tetracycline dipstick tests). Antibiotic residues do tarah se problematic hain — (1) ye fermented cream products mein starter cultures ko inhibit kar dete hain, (2) public health concern hai antimicrobial resistance ka development.</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Filtration/Clarification (PRP):</strong>
                            <p class="mt-1">Milk ko in-line filters se pass kiya jaata hai (mesh size 100–200 µm) taaki gross particles nikal jaayein — jaise baal, tinka, sediment, somatic cell ke clumps. Bade dairies mein ek <strong>centrifugal clarifier</strong> use hota hai jo 5,000–7,000 RPM pe ghoomta hai. Clarifier fine particles, leucocytes (WBCs), aur bacteria bhi nikal sakta hai. <strong>Bactofugation</strong> (special type ki centrifugation) se 90–95% tak spore-forming bacteria (<em>Bacillus cereus</em>, <em>Clostridium</em> spp.) remove ho sakte hain. Ye ek <strong>PRP</strong> hai jo starting material ki microbiological quality improve karta hai aur downstream equipment mein sediment buildup rokta hai.</p>
                        </li>

                        <li>
                            <strong>Chilling & Cold Storage (PRP):</strong>
                            <p class="mt-1">Milk ko jaldi se jaldi ≤4°C tak cool kiya jaata hai ek plate heat exchanger (PHE) mein jisme chilled water ya glycol cooling medium hota hai. 4°C ya usse kam temperature pe, zyaadatar <strong>mesophilic spoilage bacteria</strong> (<em>Lactobacillus</em>, <em>E. coli</em>, <em>Staphylococcus aureus</em>) ki growth practically ruk jaati hai (generation time → infinity, matlab ye divide hi nahi kar paate).</p>
                            <p class="mt-1"><strong>LEKIN</strong> — aur ye bahut important hai — <strong>psychrotrophic bacteria</strong> (<em>Pseudomonas fluorescens</em>, <em>P. fragi</em>, <em>Serratia</em>, <em>Acinetobacter</em> spp.) fridge temperature pe bhi grow kar sakte hain! Inki doubling time 4°C pe lagbhag 8–12 ghante hoti hai. Ye organisms bahut potent extracellular <strong>heat-stable lipases aur proteases</strong> produce karte hain jo pasteurization survive kar jaate hain (kuch lipases ka D₁₄₀ value 300 seconds tak hota hai — matlab 140°C pe bhi 5 minute lagenge inhe 90% reduce karne mein!). Isliye raw milk ka storage cream separation se pehle <strong>24–48 ghante se kam</strong> rakhna chahiye. Ye step ek <strong>PRP</strong> hai.</p>
                            <p class="mt-1"><strong>Critical Note — Hydrolytic Rancidity:</strong> Psychrotrophic bacteria ki lipases (khaaskar <em>Pseudomonas</em> se) triglycerides ko sn-1 aur sn-3 positions pe hydrolyse karti hain, jisse short-chain fatty acids release hote hain (butyric acid C4:0, caproic acid C6:0, caprylic acid C8:0). Ye acids "rancid" aur "soapy" (sabun jaisi) off-flavour dete hain — aur ye itne potent hain ki sirf 5–10 ppm free fatty acid (FFA) mein bhi detect ho jaata hai ye taste! Is defect ko <strong>hydrolytic rancidity</strong> kehte hain aur ye <strong>irreversible</strong> hai — ek baar ho gayi toh theek nahi ho sakti. Isliye raw milk mein psychrotrophic growth ko minimise karna creamery ke liye sabse pehli priority hai.</p>
                        </li>

                        <li>
                            <strong>Pre-heating (40–45°C):</strong>
                            <p class="mt-1">Separation se pehle milk ko PHE ke regeneration section mein 40–45°C tak garam kiya jaata hai. Ye temperature bahut carefully chosen hai — iske peeche kaafi physicochemical reasons hain:</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>Viscosity kam hoti hai:</strong> Milk ki dynamic viscosity 5°C pe ~2.1 mPa·s hoti hai jo 40°C pe ghat ke ~1.3 mPa·s ho jaati hai (Arrhenius equation follow karti hai: η = A·e^(Eₐ/RT)). Kam viscosity mein separation zyada efficient hoti hai — fat globules paani ke through zyada aasaani se move kar paate hain.</li>
                                <li><strong>Fat pighal jaata hai:</strong> 40–45°C pe milk fat ka solid fat content (SFC) sirf ~5–10% reh jaata hai. Matlab fat globules lagbhag poore liquid ho jaate hain, unki internal viscosity kam ho jaati hai, aur wo zyada deformable ho jaate hain — separation aasan ho jaati hai.</li>
                                <li><strong>Density difference kaafi rehta hai:</strong> Heating se dono phases (fat aur skim) ki density kam hoti hai, lekin unke beech ka <strong>density difference (Δρ = ρ_skim − ρ_fat)</strong> kaafi rehta hai (~0.07 g/cm³) jo efficient separation ke liye enough hai.</li>
                                <li><strong>Protein denaturation nahi hota:</strong> Temperature 50°C se neeche rakhte hain taaki whey proteins (β-lactoglobulin 60°C pe unfold hona shuru hota hai) aur MFGM damage na ho.</li>
                                <li><strong>Lipolysis risk kam rehta hai:</strong> Milk ki native lipoprotein lipase (LPL) 37°C pe optimally active hai, lekin ise substrate chahiye (damaged fat globules). 40°C ke upar briefly heat karke fir quickly separation aur pasteurization mein le jaane se lipolysis risk minimize hota hai.</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Cream Separation — Centrifugal Separation (oPRP):</strong>
                            <p class="mt-1">Ye cream processing ka <strong>sabse core unit operation</strong> hai aur ise <strong>Operational Prerequisite Program (oPRP)</strong> classify kiya gaya hai. Separation ek hermetic centrifugal cream separator use karke ki jaati hai jo 5,000–10,000 RPM pe spin karta hai.</p>

                            <h5 class="font-semibold mt-3 mb-1">Science: Stokes' Law & Centrifugal Separation</h5>
                            <p>Cream separation ka principle <strong>Stokes' Law</strong> pe based hai. Ye law batata hai ki ek spherical particle kisi viscous fluid mein gravitational (ya centrifugal) force ke under kitni speed se upar uthega ya neeche jaayega. Gravity field mein ek fat globule ke upar uthne ki velocity hai:</p>
                            <div class="bg-gray-100 p-3 rounded mt-2 text-center font-mono">
                                v_g = (2 · r² · (ρ_p − ρ_f) · g) / (9 · η)
                            </div>
                            <p class="mt-2">Yahan:</p>
                            <ul class="list-disc list-inside ml-4 space-y-1 text-sm">
                                <li><strong>v_g</strong> = fat globule ke upar uthne ki velocity (m/s)</li>
                                <li><strong>r</strong> = fat globule ka radius (m); average ≈ 2 µm = 2 × 10⁻⁶ m</li>
                                <li><strong>ρ_p</strong> = skim milk (plasma phase) ki density ≈ 1,036 kg/m³ at 40°C</li>
                                <li><strong>ρ_f</strong> = fat globule ki density ≈ 930 kg/m³ at 40°C</li>
                                <li><strong>g</strong> = gravitational acceleration = 9.81 m/s²</li>
                                <li><strong>η</strong> = skim milk ki dynamic viscosity ≈ 1.2 × 10⁻³ Pa·s at 40°C</li>
                            </ul>
                            <p class="mt-2"><strong>Example (gravity mein):</strong> v_g = [2 × (2 × 10⁻⁶)² × (1036 − 930) × 9.81] / [9 × 1.2 × 10⁻³] = <strong>~7.7 × 10⁻⁷ m/s ≈ 0.066 m/day</strong>. Ye kitni slow velocity hai! Matlab gravity creaming mein 12–24 ghante lagte hain aur tab bhi puri cream nahi nikalti — bilkul inefficient process hai.</p>

                            <p class="mt-3"><strong>Centrifugal separator</strong> mein gravitational acceleration (g) ki jagah centrifugal acceleration (ω²R) use hota hai — jo hazaaron guna zyada hota hai:</p>
                            <div class="bg-gray-100 p-3 rounded mt-2 text-center font-mono">
                                v_c = (2 · r² · (ρ_p − ρ_f) · ω² · R) / (9 · η)
                            </div>
                            <p class="mt-2">Yahan:</p>
                            <ul class="list-disc list-inside ml-4 space-y-1 text-sm">
                                <li><strong>ω</strong> = angular velocity (rad/s) = 2πN/60 (N RPM mein hai)</li>
                                <li><strong>R</strong> = rotation axis se radial distance (m)</li>
                            </ul>
                            <p class="mt-2"><strong>Example (centrifuge at 6,000 RPM, R = 0.2 m):</strong></p>
                            <p class="ml-4 text-sm">ω = 2π × 6000/60 = 628.3 rad/s</p>
                            <p class="ml-4 text-sm">ω²R = (628.3)² × 0.2 = 78,952 m/s²</p>
                            <p class="ml-4 text-sm">Separation factor = ω²R/g = 78,952/9.81 ≈ <strong>8,048 × g</strong></p>
                            <p class="mt-2">Matlab centrifugal velocity gravity creaming se <strong>~8,000 guna zyada tez</strong> hai! Isliye modern separators 5,000–50,000 L/h ki throughput pe continuously separation kar sakte hain.</p>

                            <p class="mt-3"><strong>Separation efficiency ko affect karne wale key factors (Stokes' Law se):</strong></p>
                            <ul class="list-disc list-inside ml-4 space-y-1">
                                <li><strong>Fat globule size (r²):</strong> Velocity r² ke proportional hai. Bade globules tez separate hote hain. Bahut chhote globules (&lt;1 µm) acche se separate nahi hote — isliye skim milk mein hamesha thoda fat reh jaata hai (typically 0.05–0.10%). <strong>Homogenised milk ko separate nahi kar sakte</strong> kyunki usme globules bahut chhote hain!</li>
                                <li><strong>Density difference (Δρ):</strong> Ye maintain rehna chahiye. 40–45°C pe heat karne se ye optimise hota hai.</li>
                                <li><strong>Rotational speed (ω²):</strong> RPM badhane se separation force dramatically badhti hai. Modern disc-stack separators mein 40–120 conical discs hote hain jo 0.4–1.0 mm apart hote hain — ye discs effective settling distance reduce karte hain aur separation area badhate hain.</li>
                                <li><strong>Viscosity (η):</strong> Kam viscosity better separation deti hai. Temperature badhane se viscosity kam hoti hai — isliye 40–45°C pe heat karte hain.</li>
                            </ul>

                            <p class="mt-3">Separated cream ka fat content <strong>cream screw (throttle valve)</strong> adjust karke control kiya jaata hai. Cream outlet zyada restrict karenge toh zyada fat wali cream milegi kam volume mein; zyada open karenge toh kam fat wali cream milegi zyada volume mein.</p>
                        </li>

                        <li>
                            <strong>Standardization (oPRP):</strong>
                            <p class="mt-1">Separation ke baad cream ko target fat percentage pe laana hota hai. Ye ek <strong>oPRP</strong> hai product consistency aur regulatory compliance ke liye. Do methods se hota hai:</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>Batch method:</strong> Calculated amount mein skim milk ko high-fat cream mein mila dete hain. Calculation ke liye <strong>Pearson's Square method</strong> use hota hai.</li>
                                <li><strong>In-line automatic standardization:</strong> Modern dairies mein in-line density meters (Coriolis type ya oscillating U-tube type) aur flow meters laage hote hain. Ye continuously fat content monitor karte hain aur automatically servo-controlled valves se cream aur skim milk ko mix karte hain. ±0.05% fat ki accuracy milti hai.</li>
                            </ul>
                            <div class="bg-gray-100 p-3 rounded mt-3">
                                <p class="font-semibold">Pearson's Square Example:</p>
                                <p class="text-sm mt-1">Agar humein 25% fat wali cream banana hai 50% fat wali separated cream aur 0.1% fat wale skim milk se:</p>
                                <p class="text-sm ml-4 mt-1">50% cream ke parts = 25 − 0.1 = 24.9</p>
                                <p class="text-sm ml-4">0.1% skim ke parts = 50 − 25 = 25.0</p>
                                <p class="text-sm ml-4">Ratio: 24.9 : 25.0 ≈ 1 : 1 (lagbhag barabar mass mein milao)</p>
                            </div>
                        </li>

                        <li>
                            <strong>Pasteurization (CCP-1):</strong>
                            <p class="mt-1">Cream ki pasteurization <strong>Critical Control Point (CCP-1)</strong> hai — ye wo step hai jo specifically pathogenic microorganisms ko khatam karne ke liye design kiya gaya hai aur spoilage flora ko safe levels tak reduce karta hai. Cream ki pasteurization mein <strong>milk se zyada intense heat treatment lagti hai</strong> — iske peeche kaafi scientific reasons hain:</p>

                            <h5 class="font-semibold mt-3 mb-1">Cream ko Higher Pasteurization Temperature kyun chahiye?</h5>
                            <ul class="list-disc list-inside mt-2 space-y-2 ml-4">
                                <li><strong>Fat ka thermoprotective effect:</strong> Fat globules ek hydrophobic micro-environment provide karte hain jo bacteria ko shield kar sakta hai — khaaskar wo bacteria jo MFGM ke saath associated hain ya fat globule clusters ke andar embed hain. Fat phase mein water activity (a_w) kam hoti hai aur fat ka heat transfer coefficient bhi kam hota hai (fat ki thermal conductivity ≈ 0.17 W/m·K jabki paani ki ≈ 0.60 W/m·K). Matlab fat heat ko slow transfer karta hai — isliye zyada temperature ya zyada time chahiye same lethality achieve karne ke liye.</li>
                                <li><strong>Lower thermal conductivity:</strong> Cream ki overall thermal conductivity fat content badhne ke saath kam hoti hai (40% fat wali cream ≈ 0.34 W/m·K vs whole milk ≈ 0.56 W/m·K). Iska matlab hai ki product stream ke geometric centre tak heat penetration slow hoti hai, toh higher temperature zaroori hai taaki har jagah adequate treatment mile.</li>
                                <li><strong>Target pathogen — <em>Coxiella burnetii</em>:</strong> Ye pasteurization ka benchmark organism hai (Q fever ka causative agent). Cream mein iska D₆₃ value skim milk se zyada hota hai fat ke thermoprotective effect ki wajah se.</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">Cream ke liye Pasteurization Regimes</h5>
                            <div class="overflow-x-auto mt-2">
                                <table class="w-full text-left border-collapse text-sm">
                                    <thead class="bg-muted">
                                        <tr>
                                            <th class="p-2 border">Method</th>
                                            <th class="p-2 border">Temperature</th>
                                            <th class="p-2 border">Holding Time</th>
                                            <th class="p-2 border">Equipment</th>
                                            <th class="p-2 border">Kahan use hota hai</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="p-2 border">LTLT (Batch/Vat)</td>
                                            <td class="p-2 border">63°C</td>
                                            <td class="p-2 border">30 minute</td>
                                            <td class="p-2 border">Jacketed vat with agitator</td>
                                            <td class="p-2 border">Small-scale, artisanal dairy; butter ke liye cream</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border">HTST</td>
                                            <td class="p-2 border">72°C</td>
                                            <td class="p-2 border">15 seconds</td>
                                            <td class="p-2 border">PHE (standard)</td>
                                            <td class="p-2 border">&lt;20% fat wali cream</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border"><strong>HTST (Cream)</strong></td>
                                            <td class="p-2 border"><strong>80–85°C</strong></td>
                                            <td class="p-2 border"><strong>15–25 seconds</strong></td>
                                            <td class="p-2 border">PHE (extended holding tube)</td>
                                            <td class="p-2 border"><strong>&gt;20% fat wali cream ke liye standard</strong></td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border">High-heat</td>
                                            <td class="p-2 border">90–95°C</td>
                                            <td class="p-2 border">15–30 seconds</td>
                                            <td class="p-2 border">PHE ya tubular</td>
                                            <td class="p-2 border">ESL cream ke liye; butter ke liye cream (cooked/sulphydryl flavour notes develop karne ke liye jo kuch markets mein prefer hota hai)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h5 class="font-semibold mt-3 mb-1">Thermal Destruction Kinetics (Bacteria kaise marte hain)</h5>
                            <p>Pasteurization kitni effective hai ye thermal destruction parameters se quantify hota hai:</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>D-value (Decimal Reduction Time):</strong> Kisi given temperature pe bacteria ki population ko 90% (1 log cycle) kam karne mein lagane wala time. <em>Coxiella burnetii</em> ke liye cream mein: D₆₃ ≈ 0.5–0.6 min. Matlab 63°C pe 0.5 minute mein 90% C. burnetii mar jaate hain.</li>
                                <li><strong>z-value:</strong> Kitne degree temperature badhaane se D-value 90% (1 log cycle) kam ho jaata hai. <em>C. burnetii</em> ke liye z ≈ 4.5–6.0°C. Matlab agar 4.5°C temperature badhayenge toh destruction rate 10 guna badh jaayega.</li>
                                <li><strong>Lethality:</strong> Cream pasteurization 80°C/15 sec pe lagbhag <strong>12–16 log reductions</strong> deta hai <em>C. burnetii</em> ka — bahut bada safety margin hai! <em>Listeria monocytogenes</em> ke &gt;7 log reductions (D₇₂ ≈ 0.5–2 sec cream mein) aur <em>Salmonella</em> spp. ke bhi &gt;7 log reductions milte hain.</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">Enzyme Inactivation (Enzymes kaise inactive hote hain)</h5>
                            <p>Microbes maarne ke alawa, pasteurization ka ek aur important kaam hai key native milk enzymes ko inactive karna:</p>
                            <ul class="list-disc list-inside mt-2 space-y-2 ml-4">
                                <li><strong>Alkaline phosphatase (ALP):</strong> D₆₃ ≈ 0.48 min (ye <em>C. burnetii</em> se thoda zyada heat-resistant hai). ALP ki complete inactivation <strong>pasteurization ka gold standard indicator</strong> hai. Pasteurization ke baad cream ka phosphatase test <strong>NEGATIVE aana chahiye</strong> (≤4 µg p-nitrophenol/mL Aschaffenburg-Mullen test se, ya ≤350 mU/L fluorometric method se per ISO 11816). Agar positive aaye toh matlab ya toh under-processing hui ya post-pasteurization contamination ho gayi raw cream se.</li>
                                <li><strong>Lipoprotein lipase (LPL):</strong> 72°C/15 sec pe completely inactive ho jaata hai. LPL bahut potent enzyme hai (Km ≈ 0.2 mM tributyrin ke liye) jo triglycerides ke ester bonds ko oil-water interface pe hydrolyse karta hai. Agar ye inactive na ho toh bahut jaldi <strong>hydrolytic rancidity</strong> develop hogi — butyric acid release hoga (iska rancid odour threshold sirf ~0.5–1.0 ppm FFA hai!) aur doosre short-chain fatty acids bhi release honge. High fat cream mein substrate ki surface area bahut zyada hoti hai, toh LPL inactivation aur bhi critical hai.</li>
                                <li><strong>Peroxidase (lactoperoxidase):</strong> ALP se zyada heat-stable hai — >80°C/15 sec pe inactivate hota hai. Negative peroxidase test (Storch test) indicate karta hai ki heating 80°C se upar hui hai. Cream pasteurization 80–85°C pe hota hai toh peroxidase inactivate ho bhi sakta hai aur nahi bhi. 
                                <br/>• <strong>Phosphatase-negative + Peroxidase-positive</strong> = sahi pasteurization range (72–80°C)
                                <br/>• <strong>Phosphatase-negative + Peroxidase-negative</strong> = heating ≥80°C hui (cream ke liye acceptable hai)</li>
                                <li><strong>Xanthine oxidase (XO):</strong> Ye MFGM-associated enzyme hai; pasteurization temperatures pe partially inactivate hota hai. Residual XO reactive oxygen species (ROS) generate kar sakta hai, khaaskar superoxide (O₂⁻) aur hydrogen peroxide (H₂O₂), jo storage ke dauran oxidative deterioration mein contribute karte hain.</li>
                                <li><strong>Plasmin system:</strong> Plasmin milk ka native serine protease hai (optimum pH 7.5, 37°C) — ye bahut heat-stable hai (HTST pasteurization survive kar jaata hai!). Iska precursor plasminogen hota hai jo plasminogen activators (PAs) se activate hota hai. Cream mein residual plasmin activity slow casein proteolysis kar sakti hai, jisse bitter hydrophobic peptides ban jaate hain extended storage mein.</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">Pasteurization ka Cream Components pe Effect</h5>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>Whey proteins:</strong> 80–85°C pe ~60–80% β-lactoglobulin (β-Lg) irreversible denaturation se guzarta hai — iska tertiary structure unfold ho jaata hai, free sulfhydryl group (Cys121) expose ho jaata hai, aur ye κ-casein ke saath intermolecular disulfide bonds banata hai casein micelle ki surface pe. Ye β-Lg–κ-casein complex homogenization ke dauran fat globule surfaces pe adsorb ho sakta hai, jisse cream ki viscosity aur whipping properties affect hoti hain.</li>
                                <li><strong>Cooked/sulphydryl flavour:</strong> Denatured β-Lg ke exposed −SH groups se volatile sulphur compounds bante hain (hydrogen sulfide, dimethyl sulfide) — ye "cooked" flavour ka reason hai. Lekin ye flavour 1–2 din mein refrigeration temperatures pe dissipate ho jaata hai.</li>
                                <li><strong>Maillard reaction:</strong> Pasteurization temperatures pe minimal hoti hai — 80–85°C/15 sec pe browning ya flavour impact negligible hai.</li>
                                <li><strong>Vitamins:</strong> Losses minimal hain: vitamin C (ascorbic acid) ka &lt;10% loss, thiamine (B1) ka &lt;5% loss, fat-soluble vitamins (A, D, E, K) ka negligible loss kyunki ye fat phase mein protected rehte hain.</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Homogenization (oPRP — Conditional Application):</strong>
                            <p class="mt-1">Homogenization ek <strong>oPRP</strong> hai jiska application cream ke intended end use pe depend karta hai. Isme cream ko ek narrow valve gap se high pressure pe force kiya jaata hai, jisse intense mechanical forces generate hoti hain jo fat globule ka size chhota kar deti hain.</p>

                            <h5 class="font-semibold mt-3 mb-1">Homogenization ka Mechanism</h5>
                            <p>Cream ko 10–25 MPa (100–250 bar) pressure pe ek homogenizing valve se force kiya jaata hai. Valve gap typically 15–100 µm hota hai. Fat globule ka breakup teen simultaneous mechanisms se hota hai:</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>Turbulence:</strong> Valve gap mein intense turbulent eddies bante hain (Reynolds number &gt;10,000). Ye fluctuating pressure aur velocity fields create karte hain jo globules ko deform aur rupture karte hain.</li>
                                <li><strong>Cavitation:</strong> Jab cream narrow gap se guzarti hai toh velocity bahut badh jaati hai (Bernoulli's principle). Is wajah se local pressure fat ke vapour pressure se neeche gir jaata hai. Vapour bubbles bante hain aur fir violently collapse hote hain (cavitation) — isse intense localised shear forces aur pressure waves (1 GPa tak) generate hoti hain jo fat globules ko tod deti hain.</li>
                                <li><strong>Shear:</strong> Narrow gap mein velocity gradient bahut high shear rates create karta hai (10⁵–10⁷ s⁻¹). Ye viscous shear stress fat globules ko physically elongate karke tod deta hai.</li>
                            </ul>

                            <p class="mt-2"><strong>Result:</strong> Mean fat globule diameter ~3.5 µm (native) se ghat ke ~0.5–1.0 µm (homogenised) ho jaata hai. Total fat globule surface area lagbhag <strong>6–10 guna badh jaata hai</strong> (surface area ∝ d², volume ∝ d³; agar diameter aadha karoge toh per unit volume surface area double ho jaata hai).</p>

                            <p class="mt-2"><strong>Surface Coverage ka problem:</strong> Native MFGM ke paas itna material nahi hai ki wo dramatically badi hui surface area ko cover kar sake. Toh kya hota hai? Aqueous phase se <strong>caseins aur whey proteins</strong> jaldi se newly created fat globule surfaces pe adsorb ho jaate hain, ek nayi protein-dominated membrane banate hain. Ye casein-coated surface homogenised cream ke fat globules ko alag properties deta hai native globules se — ye casein micelles jaisa behave karte hain, acid-gel networks mein participate karte hain, aur inki surface charge bhi change ho jaati hai (ζ-potential shift hoke lagbhag −20 mV ho jaata hai).</p>

                            <h5 class="font-semibold mt-3 mb-1">Two-Stage Homogenization</h5>
                            <p>Cream processing mein <strong>two-stage homogenization</strong> prefer ki jaati hai:</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>1st stage (10–15 MPa):</strong> Fat globule ka size chhota karna — ye main kaam hai.</li>
                                <li><strong>2nd stage (3–5 MPa):</strong> Pehle stage mein bane fat globule clusters (homogenization clusters) ko todna. Agar 2nd stage na ho toh kya hota hai? Newly formed chhote globules adsorbed casein ke bridges share karte hain aur aapas mein clump ho jaate hain — isse apparent viscosity bahut badh jaati hai aur "homogenization clustering" hoti hai. 2nd stage in clusters ko tod deta hai.</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">Cream Homogenization ke Application Rules</h5>
                            <div class="overflow-x-auto mt-2">
                                <table class="w-full text-left border-collapse text-sm">
                                    <thead class="bg-muted">
                                        <tr>
                                            <th class="p-2 border">Cream Type</th>
                                            <th class="p-2 border">Homogenize?</th>
                                            <th class="p-2 border">Scientific Reason</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="p-2 border">Table/Coffee cream (10–18% fat)</td>
                                            <td class="p-2 border"><strong>HAAN</strong></td>
                                            <td class="p-2 border">Visible fat separation rokna hai (creaming velocity ∝ r²; r chhota karenge toh creaming dramatically slow ho jaayegi). Smooth, viscous, pourable product banta hai. Cartons mein "fat plug" formation rokta hai.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border">Whipping cream (25–35% fat)</td>
                                            <td class="p-2 border"><strong>NAHI</strong></td>
                                            <td class="p-2 border">Homogenization whipping ability DESTROY kar deta hai! Chhote globule size aur protein-dominated nayi membrane partial coalescence mechanism ko rok deti hai jo foam stabilisation ke liye essential hai (aage Aging section mein detail). Homogenised cream weak, unstable foam deta hai jiska overrun bhi kam hota hai.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border">Heavy cream (&gt;36% fat)</td>
                                            <td class="p-2 border"><strong>NAHI</strong></td>
                                            <td class="p-2 border">Same reason; plus high fat volume fractions pe homogenization severe clustering create karta hai aur viscosity itni badh jaati hai ki cream semi-solid ho jaati hai aur pour hi nahi hoti — "homogenization-induced thickening" kehte hain ise.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border">Butter banane ke liye cream</td>
                                            <td class="p-2 border"><strong>NAHI</strong></td>
                                            <td class="p-2 border">Butter making mein churning se phase inversion chahiye (O/W se W/O). Homogenised globules partial coalescence resist karte hain aur effectively churn nahi ho paate butter mein.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>

                        <li>
                            <strong>Cooling aur Aging/Tempering (oPRP):</strong>
                            <p class="mt-1">Pasteurization (aur optional homogenization) ke baad cream ko jaldi se 2–5°C tak cool kiya jaata hai PHE mein aur fir is temperature pe 4–24 ghante hold kiya jaata hai. Is "aging" ya "tempering" step ko <strong>oPRP</strong> classify kiya gaya hai aur ye whipping cream ke liye <strong>bahut bahut important</strong> hai.</p>

                            <h5 class="font-semibold mt-3 mb-1">Fat Crystallization ki Science During Aging</h5>
                            <p>Milk fat ek complex mixture hai 200+ different triglyceride species ka jinke melting points bahut vary karte hain. Cooling aur aging ke dauran har fat globule ke andar fat crystallization hoti hai:</p>

                            <ul class="list-disc list-inside mt-2 space-y-2 ml-4">
                                <li><strong>Nucleation (crystal ke beej banna):</strong> Jaise-jaise temperature individual triglyceride species ke melting point se neeche jaata hai, crystal nuclei bante hain. <strong>Heterogeneous nucleation</strong> (jo existing solid surfaces, MFGM components, ya high-melting triglyceride crystals se catalyse hoti hai) dominant hoti hai. Nucleation rate temperature pe bahut depend karta hai: fast cooling se bahut saare chhote crystals bante hain; slow cooling se kam lekin bade crystals bante hain.</li>
                                <li><strong>Crystal growth (crystal ka badhna):</strong> Nuclei ke upar crystallisable triglycerides liquid oil phase se aake jamte hain aur crystal badhta hai. Growth rate depend karta hai supercooling ke degree pe (ΔT = T_melting − T_actual), triglycerides ki diffusion rate pe crystal surfaces tak, aur crystal packing geometry pe.</li>
                                <li><strong>Polymorphism (ek hi fat ke alag crystal forms):</strong> Milk fat crystals teen main polymorphic forms mein exist kar sakte hain:
                                    <ul class="list-circle list-inside ml-4 mt-1 space-y-1">
                                        <li><strong>α (alpha):</strong> Hexagonal packing. Sabse kam stable, sabse kam melting point. Fast cooling pe jaldi ban jaata hai. Loosely packed, needle-like crystals.</li>
                                        <li><strong>β' (beta-prime):</strong> Orthorhombic perpendicular packing. Intermediate stability. <strong>Cream aur butter ke liye SABSE desirable form!</strong> Fine, needle-like crystals jo accha semi-solid network banate hain. Smooth texture aur acchi spreadability deta hai.</li>
                                        <li><strong>β (beta):</strong> Triclinic packing. Sabse zyada stable, sabse high melting point. Bade, coarse crystals. Grainy, sandy texture deta hai. Cream products mein <strong>UNDESIRABLE</strong> hai — kisi ko bhi sandy mouthfeel nahi chahiye!</li>
                                    </ul>
                                </li>
                                <li><strong>Polymorphic transition:</strong> α → β' → β (ye <strong>Ostwald's step rule</strong> follow karta hai — kam stable forms pehle crystallize hote hain, fir dheere dheere zyada stable forms mein convert hote hain). Controlled aging ka goal ye hai ki α → β' transition promote karo lekin excessive β crystal growth avoid karo. <strong>2–5°C pe 4–24 ghante hold karne se β' crystal formation favour hoti hai</strong> — ye exact wahi hai jo humein chahiye.</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">Whipping mein Fat Crystals ka Role — Partial Coalescence Mechanism</h5>
                            <p>Aging ke dauran bane fat crystals whipping mein ek crucial structural role play karte hain. Aao samjhte hain step by step:</p>
                            <ol class="list-decimal list-inside mt-2 space-y-2 ml-4">
                                <li>Aging ke dauran, solid fat crystals (khaaskar needle-like β' crystals) MFGM ki inner surface pe orient ho jaate hain, thoda bahar ki taraf protrude karte hue — jaise chhote chhote kaante.</li>
                                <li>Whipping ke dauran, mechanical agitation se air bubbles introduce hote hain aur fat globules air bubble ki surfaces pe close contact mein aate hain.</li>
                                <li>Ek globule ke protruding fat crystals <strong>adjacent globules ki MFGM ko chhhed dete hain (pierce karte hain)</strong>, jisse globules ke beech shared liquid fat ke bridges ban jaate hain. Is phenomenon ko <strong>partial coalescence</strong> kehte hain (Boode & Walstra, 1993).</li>
                                <li>Partially coalesced fat globule networks air bubbles ke around ek scaffold banate hain jo foam structure ko stabilise karta hai. Ye interlocking crystal-globule network hi whipped cream ko uska body, rigidity, aur "stand-up" properties deta hai — jab aap cream pipe karte hain cake pe toh ye isi wajah se khada rehta hai!</li>
                                <li>Complete coalescence (globules ka fully merge hoke bade fat pools ban jaana) nahi hota kyunki crystal network rigidity provide karta hai — interlocking crystals "spacers" ki tarah kaam karte hain jo globule ki identity maintain karte hain.</li>
                            </ol>

                            <p class="mt-3"><strong>Optimal whipping performance ke liye conditions:</strong></p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li>Whipping ke waqt cream ka temperature: 4–8°C (SFC ≈ 40–55%)</li>
                                <li>Fat content: ≥30% (preferably 35–40%)</li>
                                <li>Aging time: minimum 4 ghante, optimally 12–24 ghante at 4°C</li>
                                <li>Agar SFC bahut kam hai (&lt;30%): crystals kaafi nahi hain partial coalescence ke liye → weak, runny foam banega</li>
                                <li>Agar SFC bahut zyada hai (&gt;60%): globules bahut rigid hain, shatter ho jayenge instead of partially coalescing → grainy texture aayegi, jaldi over-whip hoke butter ban jaayega</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">Overrun aur Foam Stability</h5>
                            <p><strong>Overrun</strong> whipping mein kitni air incorporate hui uska measure hai:</p>
                            <div class="bg-gray-100 p-3 rounded mt-2 text-center font-mono text-sm">
                                Overrun (%) = [(Whipped cream ka Volume − Liquid cream ka Volume) / Liquid cream ka Volume] × 100
                            </div>
                            <p class="mt-2">Typical overrun values: acchi whipped cream ke liye <strong>80–120%</strong> (matlab volume lagbhag double ho jaata hai). Overrun fat content, temperature, aging, whipping speed, whipping time, aur emulsifiers/stabilisers ki presence pe depend karta hai.</p>
                            <p class="mt-2"><strong>Foam stability</strong> measure karte hain serum drainage se (kitna liquid foam se gravity ke under drain hota hai ek certain time mein, usually 1 ghante aur 24 ghante pe 20°C pe measure karte hain). Acchi whipped cream mein 1 ghante baad 20°C pe <strong>&lt;10% drainage</strong> hona chahiye.</p>
                        </li>

                        <li>
                            <strong>Packaging (PRP):</strong>
                            <p class="mt-1">Packaging ek <strong>PRP</strong> hai jo cream ko environmental contamination, light-induced oxidation, moisture loss, aur physical damage se protect karta hai. Packaging materials food-grade, inert, aur adequate barrier properties wale hone chahiye.</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>HDPE/PP cups with foil lids:</strong> Retail cream ke liye common hai (200 mL, 500 mL). Accha moisture barrier dete hain lekin light protection limited hoti hai. UV-absorbing pigments (TiO₂) add kiye ja sakte hain.</li>
                                <li><strong>Multilayer pouches:</strong> Co-extruded PE/PA/PE sachets. Kam cost hoti hai lekin mechanical protection limited hai.</li>
                                <li><strong>Tetra Rex / Gable-top cartons:</strong> PE-coated paperboard. Accha light barrier, stackable. 200 mL se 1 L packs ke liye common.</li>
                                <li><strong>Glass bottles:</strong> Excellent chemical inertness lekin bhaari, fragile, aur expensive. Premium/artisanal products ke liye use hota hai.</li>
                                <li><strong>Light protection kyun zaroori hai:</strong> Light se <strong>photo-oxidation</strong> hoti hai — riboflavin (vitamin B2) light absorb karta hai → singlet oxygen generate hota hai → ye unsaturated fatty acids ko oxidise karta hai → "light-struck" ya "sunlight" flavour develop hota hai (methional, dimethyl disulfide compounds se). Isliye opaque ya UV-blocking packaging prefer ki jaati hai.</li>
                            </ul>
                            <p class="mt-2"><strong>Filling:</strong> Cream ko ≤5°C pe fill kiya jaata hai volumetric ya gravimetric fillers se ek hygienic (Class 100,000) ya clean-room environment mein. <strong>Modified Atmosphere Packaging (MAP)</strong> jismein N₂ ya N₂/CO₂ gas flush hota hai, shelf life extend kar sakta hai headspace oxygen reduce karke (oxidative rancidity kam hoti hai).</p>
                        </li>

                        <li>
                            <strong>Cold Storage & Distribution (CCP-2):</strong>
                            <p class="mt-1">Packaging se lekar distribution aur consumer tak cold chain maintain karna (≤5°C, ideally 2–4°C) <strong>CCP-2</strong> hai. Ye isliye critical hai kyunki pasteurized cream <strong>commercially sterile NAHI hai</strong> — usme surviving thermoduric organisms hote hain aur post-pasteurization contaminants (PPCs) bhi aa sakte hain.</p>

                            <h5 class="font-semibold mt-3 mb-1">Storage ke dauran Microbiological Considerations</h5>
                            <ul class="list-disc list-inside mt-2 space-y-2 ml-4">
                                <li><strong>Thermoduric bacteria (pasteurization survive karte hain):</strong> <em>Microbacterium lacticum</em>, <em>Enterococcus</em> spp., <em>Micrococcus</em> spp., heat-resistant streptococci. Ye refrigeration temperatures pe slowly grow karte hain aur agar cold chain maintain hai toh generally minimal impact karte hain.</li>
                                <li><strong>Spore-formers (pasteurization survive karte hain):</strong> <em>Bacillus cereus</em> (psychrotrophic strains 4–7°C pe grow kar sakte hain, diarrheal enterotoxin produce karte hain; infective dose ~10⁵ CFU/g), <em>B. licheniformis</em>, <em>Paenibacillus</em> spp. Ye <strong>pasteurized cream ki shelf life ko limit karne wale primary organisms</strong> hain. 5°C pe <em>B. cereus</em> ki generation time ~12–18 ghante hoti hai.</li>
                                <li><strong>Post-Pasteurization Contaminants (PPCs):</strong> Gram-negative psychrotrophs (<em>Pseudomonas</em>, coliforms) jo pasteurization ke baad introduce hote hain — filling equipment mein biofilms se, contaminated packaging se, ya environmental exposure se. Ye refrigeration temperatures pe rapidly grow kar sakte hain, proteolytic (bitter, putrid) aur lipolytic (rancid) spoilage cause karte hain. Even low initial levels (1–10 CFU/mL) bhi 10–14 din mein 4°C pe spoilage levels (&gt;10⁶ CFU/mL) tak pahunch sakte hain.</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">Pasteurized Cream ki Shelf Life</h5>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li>≤5°C pe, continuously refrigerated: <strong>15–20 din</strong> (initial microbial load, post-pasteurization hygiene, aur packaging integrity pe depend karta hai).</li>
                                <li>Temperature abuse (jaise 10°C pe kuch ghante) shelf life dramatically kam kar deta hai. <strong>Q₁₀ for bacterial growth ≈ 2–3</strong> (har 10°C temperature badhne pe growth rate double ya triple ho jaata hai).</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">Storage ke dauran Quality Deterioration</h5>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>Oxidative rancidity:</strong> Unsaturated fatty acids (oleic, linoleic, linolenic) ka auto-oxidation free radical chain reaction se hota hai. Light, metal ions (Cu²⁺, Fe³⁺), residual dissolved oxygen, ya enzymatic catalysis (XO, LPO) se initiate hota hai. Products mein hydroperoxides (primary), aldehydes (hexanal, nonanal — "cardboard" flavour), aur ketones (secondary) aate hain. Monitoring: Peroxide Value (PV) aur Thiobarbituric Acid Reactive Substances (TBARS) se.</li>
                                <li><strong>Hydrolytic rancidity:</strong> Residual heat-stable microbial lipases se (Step 3 mein explain kiya). FFA release hote hain — acid degree value (ADV) ya copper soap method se measure karte hain.</li>
                                <li><strong>Physical instability:</strong> Non-homogenised cream mein fat separation (creaming); serum separation; viscosity changes.</li>
                            </ul>
                        </li>
                    </ol>

                    <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 font-headline">Pasteurized Cream ka HACCP Summary</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Step</th>
                                    <th class="p-2 border">Classification</th>
                                    <th class="p-2 border">Hazard</th>
                                    <th class="p-2 border">Critical Limit</th>
                                    <th class="p-2 border">Monitoring</th>
                                    <th class="p-2 border">Corrective Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border">Pasteurization</td>
                                    <td class="p-2 border"><strong>CCP-1</strong></td>
                                    <td class="p-2 border">Pathogens ka survival (biological hazard)</td>
                                    <td class="p-2 border">≥80°C for ≥15 sec; Phosphatase test negative</td>
                                    <td class="p-2 border">Holding tube mein continuous temperature recording (calibrated thermometer/RTD); FDV ki position check; Har batch pe phosphatase test</td>
                                    <td class="p-2 border">Automatic divert valve product ko balance tank mein wapas bhejta hai re-processing ke liye; Hold karo aur investigate karo; Instruments recalibrate karo</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Cold Storage & Distribution</td>
                                    <td class="p-2 border"><strong>CCP-2</strong></td>
                                    <td class="p-2 border">Surviving pathogens ki growth (esp. <em>B. cereus</em>, <em>L. monocytogenes</em>)</td>
                                    <td class="p-2 border">Product temperature har waqt ≤5°C</td>
                                    <td class="p-2 border">Cold room temperature ki continuous logging; Dispatch pe product temperature ki spot-check; Distribution vehicle mein temperature logging</td>
                                    <td class="p-2 border">&gt;8°C pe &gt;2 ghante exposed product ko reject/quarantine karo; Cold chain breach investigate karo aur repair karo; Marginal deviation pe shelf life reduce karo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 font-headline">Pasteurized Cream ke Common Defects</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Defect</th>
                                    <th class="p-2 border">Description</th>
                                    <th class="p-2 border">Cause (Kaaranr)</th>
                                    <th class="p-2 border">Prevention (Rokne ka Tarika)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border">Rancid/soapy flavour</td>
                                    <td class="p-2 border">Unpleasant, pungent, sabun jaisi taste aur smell</td>
                                    <td class="p-2 border">Hydrolytic rancidity: lipases (native LPL ya microbial) se short-chain FFA release</td>
                                    <td class="p-2 border">Adequate pasteurization ensure karo (LPL inactivation); raw milk storage time minimise karo; pre-pasteurization mein MFGM ko mechanical damage se bachao</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Oxidised/metallic/cardboard flavour</td>
                                    <td class="p-2 border">Baasi, metallic, ya cardboard jaisi taste</td>
                                    <td class="p-2 border">Unsaturated fatty acids ka auto-oxidation — light, Cu²⁺/Fe³⁺ ions, ya dissolved O₂ se catalyse hota hai</td>
                                    <td class="p-2 border">Opaque/UV-blocking packaging use karo; cream deaerate karo; copper/iron contact surfaces avoid karo; headspace oxygen minimise karo</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Bitter flavour</td>
                                    <td class="p-2 border">Persistent kadwa taste</td>
                                    <td class="p-2 border">Psychrotrophic bacterial proteases (heat-stable) ya plasmin se proteolysis, jisse bitter hydrophobic peptides bante hain</td>
                                    <td class="p-2 border">Raw milk mein low psychrotrophic count ensure karo (&lt;10⁴ CFU/mL); raw milk cold storage duration minimise karo</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Fat separation / oiling off</td>
                                    <td class="p-2 border">Surface pe visible fat layer</td>
                                    <td class="p-2 border">Table cream mein insufficient ya absent homogenization; temperature abuse (fat pighalke re-coalesce hona)</td>
                                    <td class="p-2 border">Table cream ke liye appropriate homogenization pressure; cold chain maintain karo</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Poor whipping / low overrun</td>
                                    <td class="p-2 border">Cream stiff foam nahi banati, ya jaldi collapse ho jaata hai</td>
                                    <td class="p-2 border">Fat kaafi nahi (&lt;28%); aging inadequate (SFC kaafi nahi); homogenization ho gayi; whipping ke waqt cream bahut garam hai</td>
                                    <td class="p-2 border">Sahi fat level ensure karo; ≥4 ghante ≤5°C pe age karo; whipping cream ko homogenise MAT karo; 4–8°C pe whip karo</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Feathering (coffee mein)</td>
                                    <td class="p-2 border">Hot coffee mein cream daalne pe white flecks/curds bante hain</td>
                                    <td class="p-2 border">Developed acidity (purani raw milk) se protein instability, calcium imbalance, ya coffee acids ke saath interaction (pH cream surface pe ~4.8–5.1 ho jaata hai)</td>
                                    <td class="p-2 border">Fresh, high-quality raw milk use karo; high-acidity milk avoid karo; stabilisers add karo (sodium citrate, sodium bicarbonate)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            },
            uht: {
                title: "B. UHT (Long-Life) Cream ki Processing",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">UHT Cream ka Introduction</h3>
                    <p>UHT (Ultra-High Temperature) cream ek <strong>commercially sterile</strong> product hai — matlab ise kholne se pehle fridge mein rakhne ki zaroorat NAHI hai. Ye ambient temperature (room temperature) pe mahino tak safe rehta hai. Ye achieve hota hai ek bahut intense lekin bahut chhoti duration ki heat treatment se (≥135°C for ≥1 second, Codex/EU regulations ke mutaabik; practically 140–145°C for 3–6 seconds hoti hai) aur saath mein <strong>aseptic processing aur packaging</strong> se.</p>
                    <p class="mt-2">UHT process ka design ek smart scientific strategy pe based hai — <strong>maximum microbial destruction achieve karo jabki minimum heat-induced chemical changes hon</strong> (browning, vitamin loss, protein denaturation). Ye kaise possible hai? Bacteria maarne aur chemical reactions ke <strong>alag-alag temperature sensitivities (z-values)</strong> ka faayda uthaake!</p>

                    <h4 class="font-bold mt-4 mb-2">"UHT Window" ka Concept</h4>
                    <p>UHT processing ki scientific basis ye hai ki bacterial spore destruction aur chemical reactions ke z-values alag hote hain:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                        <li><strong>Bacterial spore inactivation ka z ≈ 10–12°C</strong> (steep temperature dependence — thoda temperature badhao toh bacterial killing bahut zyada badh jaata hai)</li>
                        <li><strong>Chemical reactions ka z ≈ 25–35°C</strong> (browning, vitamin destruction, protein denaturation — zyada gradual temperature dependence, matlab temperature badhane ka chemical damage pe utna dramatic effect nahi hota)</li>
                    </ul>
                    <p class="mt-2">Iska matlab kya hua? <strong>Temperature badhana spores maarne mein proportionally zyada effective hai bajaaye chemical damage karne ke.</strong> Matlab agar hum bahut high temperature pe bahut kam time ke liye process karein (jaise 140°C/4 sec) toh F₀ value (equivalent minutes at 121.1°C) lagbhag 5–8 minutes milta hai — ye <em>Bacillus stearothermophilus</em> spores ke &gt;9 log reductions deta hai (jo sabse heat-resistant non-pathogenic indicator organism hai, D₁₂₁ ≈ 4 min, z ≈ 10°C). Lekin utne time mein chemical damage bahut kam hota hai compared to agar same kill lower temperature pe longer time mein achieve ki jaaye. <strong>Yahi UHT ka fundamental advantage hai</strong> in-container sterilization ke comparison mein (jaise retorting at 115–120°C for 10–20 min — usme chemical damage bahut zyada hota hai).</p>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">UHT Cream ka Processing Flowchart</h3>
                    <div class="space-y-2 font-mono text-center mt-4">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Standardized Cream (separation/standardization se)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Stabilisers/Emulsifiers ka Addition (agar zaroorat ho) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-orange-100 border border-orange-300 rounded">Pre-heating (70–80°C PHE ke regeneration section mein)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-orange-100 border border-orange-300 rounded">Upstream Homogenization (Optional: 15–20 MPa 1st stage + 5 MPa 2nd stage) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-red-100 border border-red-300 rounded"><strong>UHT Treatment</strong><br/>(Direct: Steam Injection/Infusion 140–145°C / 3–6 sec<br/>YA Indirect: PHE/Tubular/Scraped-Surface 137–142°C / 4–10 sec) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Flash Cooling / Vacuum Chamber (Direct systems: 70–80°C; added steam condensate nikalta hai) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Aseptic Homogenization (Downstream)</strong><br/>(10–25 MPa total; 2-stage preferred) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Aseptic Cooling (20–25°C tak PHE mein sterile barriers ke saath)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Aseptic Buffer Tank (sterile, pressurised sterile air/N₂ se)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Aseptic Packaging</strong><br/>(Tetra Pak, Combibloc, Aseptic PET/cups) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-gray-200 border border-gray-400 rounded">Ambient Storage & Distribution (Shelf life 3–9 mahine at 15–30°C)</div>
                    </div>

                    <h4 class="font-bold mt-6 mb-2">UHT Cream Processing ki Detailed Scientific Explanation:</h4>
                    <ol class="list-decimal list-outside pl-5 space-y-4">
                        <li>
                            <strong>Stabilisers aur Emulsifiers ka Addition (PRP):</strong>
                            <p class="mt-1">UHT cream mein aksar stabilisers aur emulsifiers add karne padte hain taaki long ambient shelf life ke dauran physical stability maintain rahe. Bina stabilisers ke UHT cream mein fat separation (creaming), protein sedimentation, aur <strong>age gelation</strong> (dheere dheere jamna) ho sakta hai.</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>Stabilisers:</strong> Sodium alginate (E401, ≤0.15%), carrageenan (E407, ≤0.15% — khaaskar <strong>κ-carrageenan</strong> jo casein micelle ki surface pe κ-casein ke saath interact karta hai, ek weak gel network banata hai jo creaming rokta hai), microcrystalline cellulose (E460), gellan gum (E418), ya xanthan gum (E415). Ye sab hydrocolloids aqueous phase ki viscosity badhate hain — aur Stokes' Law ke according (v ∝ 1/η), viscosity badhane se creaming velocity kam hoti hai.</li>
                                <li><strong>Emulsifiers:</strong> Mono- aur diglycerides (E471), polysorbates (E432–E436, ≤0.1%), lecithin (E322). Ye oil-water interface pe adsorb hote hain, interfacial tension (γ) reduce karte hain, aur fat globules ko coalescence se bachate hain. Ye UHT processing ke thermal shock ke dauran bhi emulsion stability maintain karne mein madad karte hain.</li>
                                <li><strong>Buffering salts:</strong> Disodium hydrogen phosphate (E339ii) ya trisodium citrate (E331iii) 0.05–0.15% pe — ye cream proteins ki heat stability improve karte hain. Ye salts <strong>calcium ions (Ca²⁺) ko sequester (bind)</strong> karte hain, jisse calcium-phosphate equilibrium shift hota hai aur casein micelles ke beech charge repulsion badh jaata hai. Isse heat-induced coagulation prevent hota hai. Ye isliye zaroori hai kyunki UHT temperatures pe calcium phosphate precipitation hoti hai casein micelles pe, jo protein aggregation cause karti hai.</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Pre-heating (70–80°C):</strong>
                            <p class="mt-1">Cream ko stages mein PHE ke regeneration sections mein pre-heat kiya jaata hai. Iske teen kaam hain:</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li>Final UHT heating section pe thermal load reduce karna — energy efficiency improve hoti hai (modern UHT plants mein regeneration efficiency &gt;85% hai).</li>
                                <li>Whey proteins ki denaturation shuru karna (β-Lg 60°C pe unfold hona shuru hota hai, 70°C ke upar irreversible denaturation accelerate hota hai). Pre-heater mein pre-denaturation karne se UHT high-temperature section mein fouling kam hoti hai kyunki whey protein aggregation pehle hi ho jaata hai jahan fouling utni problematic nahi hai.</li>
                                <li>Sulfhydryl-disulfide interchange reaction activate karna (β-Lg ka exposed Cys121 κ-casein ke saath react karta hai) — ye subsequent UHT step ke liye heat stability improve kar sakta hai.</li>
                            </ul>
                        </li>

                        <li>
                            <strong>UHT Treatment (CCP-1):</strong>
                            <p class="mt-1">UHT heating step <strong>CCP-1</strong> hai — ye wo primary step hai jo <strong>commercial sterility</strong> achieve karta hai. Do main categories ke UHT systems hain:</p>

                            <h5 class="font-semibold mt-3 mb-1">A. Direct Heating Systems</h5>
                            <p>Product directly food-grade culinary steam ke contact mein aata hai:</p>
                            <ul class="list-disc list-inside mt-2 space-y-2 ml-4">
                                <li><strong>Steam injection:</strong> Live steam ko pre-heated cream ki stream mein inject kiya jaata hai. Steam instantly condense ho jaata hai aur cream ka temperature ~80°C se ~140–145°C tak &lt;0.5 second mein pahunch jaata hai. Ye virtually instantaneous heating heat-induced chemical changes (browning, vitamin loss) minimise karti hai.</li>
                                <li><strong>Steam infusion:</strong> Pre-heated cream ko spray kiya jaata hai ya thin film ki tarah ek chamber mein giraaya jaata hai jo pressurised steam se bhari hoti hai. Condensing steam se cream heat hoti hai. Injection se bhi zyada fast aur uniform heating hoti hai.</li>
                                <li><strong>Advantages:</strong> Sabse fastest heating rate (0.1–0.5 sec mein UHT temperature reach); minimum browning; sabse acchi flavour quality; sabse kam heat-induced chemical changes.</li>
                                <li><strong>Disadvantages:</strong> Steam condensation se jo paani add hota hai wo nikalna padta hai (flash cooling vacuum chamber mein); zyada steam consumption; complex equipment; zyada capital cost; agar vacuum chamber parameters precisely control na hon toh dilution ka risk.</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">B. Indirect Heating Systems</h5>
                            <p>Heat ek wall ke through transfer hoti hai jo heating medium (steam ya hot water) ko product se alag karti hai:</p>
                            <ul class="list-disc list-inside mt-2 space-y-2 ml-4">
                                <li><strong>Plate Heat Exchangers (PHE):</strong> Corrugated stainless steel plates thin channels banate hain. High heat transfer coefficient (U ≈ 3,000–5,000 W/m²·K). Economical aur compact. Lekin UHT temperatures pe fouling ka problem hota hai (protein deposit, mineral scaling). Maximum practical temperature ~140°C.</li>
                                <li><strong>Tubular Heat Exchangers (THE):</strong> Concentric tubes ya multi-tube designs. Higher viscosity products aur higher temperatures (&gt;140°C) handle kar sakte hain. Fouling ke against zyada resistant hain. Cream ke liye better hain uski higher viscosity ki wajah se. U ≈ 1,500–3,000 W/m²·K.</li>
                                <li><strong>Scraped-Surface Heat Exchangers (SSHE):</strong> Ek rotating shaft with scraper blades continuously product ko heated wall se hataata rehta hai — isse fouling prevent hoti hai aur uniform heating ensure hoti hai. Bahut viscous ya particulate-containing products ke liye essential hai. U ≈ 500–1,500 W/m²·K. Sabse zyada capital aur operating cost.</li>
                                <li><strong>Advantages:</strong> Paani add nahi hota (flash cooling ki zaroorat nahi); kam operating cost; simpler operation.</li>
                                <li><strong>Disadvantages:</strong> Slow heating rate (5–30 sec mein UHT temperature reach); zyada chemical changes (zyada browning, vitamin loss); fouling ki wajah se shorter continuous run times (typically 6–12 ghante, fir CIP karna padta hai).</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">UHT Systems mein Fouling</h5>
                            <p>Fouling matlab heat exchanger ki surfaces pe deposits ka jamna. Isse heat transfer efficiency kam hoti hai, pressure drop badhta hai, aur eventually line band karke CIP (Clean-In-Place) karna padta hai. Do types ke fouling deposits hote hain:</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li><strong>Type A (Protein-based, "milkstone"):</strong> 75–110°C pe predominate karta hai. Mainly denatured whey proteins (β-Lg, α-La) aur occluded fat se bana hota hai. White/cream-coloured, soft, spongy. <strong>Alkaline CIP se nikalta hai</strong> (1–2% NaOH at 70–80°C).</li>
                                <li><strong>Type B (Mineral-based):</strong> &gt;110°C pe predominate karta hai. Mainly calcium phosphate [Ca₃(PO₄)₂] aur hydroxyapatite [Ca₅(PO₄)₃OH] se bana hota hai, kuch protein ke saath. Grey/brown, hard, crystalline. Ye calcium phosphate ki <strong>inverse solubility</strong> ki wajah se hota hai (temperature badhne pe solubility GHATATI hai — ye unusual hai!). <strong>Acid CIP se nikalta hai</strong> (0.5–1% HNO₃ at 60–70°C).</li>
                            </ul>

                            <h5 class="font-semibold mt-3 mb-1">UHT Processing ke Microbiological Targets</h5>
                            <div class="overflow-x-auto mt-2">
                                <table class="w-full text-left border-collapse text-sm">
                                    <thead class="bg-muted">
                                        <tr>
                                            <th class="p-2 border">Target Organism</th>
                                            <th class="p-2 border">Significance (kyun important hai)</th>
                                            <th class="p-2 border">D₁₂₁ (seconds)</th>
                                            <th class="p-2 border">z-value (°C)</th>
                                            <th class="p-2 border">140°C/4s pe Log reduction</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="p-2 border"><em>Geobacillus stearothermophilus</em> spores</td>
                                            <td class="p-2 border">Non-pathogenic; sabse heat-resistant spore-former; UHT process validation ke liye indicator organism</td>
                                            <td class="p-2 border">240–300</td>
                                            <td class="p-2 border">9–10</td>
                                            <td class="p-2 border">~9–12</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border"><em>Bacillus subtilis</em> spores</td>
                                            <td class="p-2 border">Mesophilic spore-former; common contaminant</td>
                                            <td class="p-2 border">30–40</td>
                                            <td class="p-2 border">8–10</td>
                                            <td class="p-2 border">&gt;15</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border"><em>Clostridium botulinum</em> spores (Type A)</td>
                                            <td class="p-2 border">Sabse dangerous pathogenic spore-former; commercial sterility ka target ("botulinum cook")</td>
                                            <td class="p-2 border">12–15</td>
                                            <td class="p-2 border">10</td>
                                            <td class="p-2 border">&gt;20 (12D₁₂₁ = F₀ ≈ 3 min; UHT F₀ ≈ 5–8 min deta hai)</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border"><em>Bacillus cereus</em> spores</td>
                                            <td class="p-2 border">Food poisoning pathogen; dairy mein common</td>
                                            <td class="p-2 border">3–5</td>
                                            <td class="p-2 border">8–10</td>
                                            <td class="p-2 border">&gt;30</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p class="mt-2"><strong>Commercial sterility</strong> ki definition: Ye wo condition hai jo heat application se achieve hoti hai (akele ya doosre treatments ke saath), jisse product viable microorganisms (spores bhi shamil) se free ho jaata hai jo product mein normal non-refrigerated storage aur distribution conditions mein grow kar sakein. Commercially sterile product <strong>absolutely sterile NAHI hai</strong> — kuch extremely heat-resistant spores survive kar sakte hain lekin wo product ki conditions (pH, a_w, storage temperature) mein germinate aur grow nahi kar sakte.</p>
                        </li>

                        <li>
                            <strong>Flash Cooling / Vacuum Chamber (Sirf Direct Systems mein, oPRP):</strong>
                            <p class="mt-1">Direct UHT systems mein jo steam condensate add hua (typically 10–15% w/w paani) wo nikalna padta hai taaki cream ki original solids concentration restore ho. Ye <strong>flash cooling</strong> se hota hai ek vacuum chamber mein:</p>
                            <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                                <li>Hot cream (140–145°C) ko ek vacuum vessel mein release kiya jaata hai jiska pressure utna maintain kiya jaata hai jis pe boiling point 70–80°C hota hai.</li>
                                <li>Achanak pressure drop ki wajah se cream mein se paani instantaneously boil hona shuru ho jaata hai (flashing). Ye boiling latent heat absorb karti hai aur cream <strong>&lt;0.5 second mein ~140°C se ~70–80°C tak cool</strong> ho jaati hai.</li>
                                <li>Jitna paani evaporate hota hai wo lagbhag utna hi hota hai jitna steam condensate heating mein add hua tha — toh original concentration restore ho jaati hai.</li>
                                <li>Ye flash cooling dissolved gases aur volatile off-flavours bhi remove kar deta hai (jaise dimethyl sulfide, hydrogen sulfide) — flavour quality improve hoti hai. Ise <strong>deaeration ya deodorisation</strong> bhi kehte hain.</li>
                                <li>Vacuum ko precisely control karna hota hai (±0.5 kPa) taaki exact water balance ho. Zyada evaporation cream ko concentrate kar dega; kam evaporation dilute rakh dega. In-line density measurement se feedback control milta hai.</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Aseptic Homogenization — Downstream (oPRP):</strong>
                            <p class="mt-1">UHT cream ke liye homogenization preferably <strong>downstream</strong> (UHT heating ke BAAD) perform ki jaati hai — ise <strong>aseptic homogenization</strong> kehte hain. Ye ek critical <strong>oPRP</strong> hai.</p>

                            <h5 class="font-semibold mt-3 mb-1">UHT Cream ke liye Downstream (Aseptic) Homogenization kyun?</h5>
                            <ul class="list-disc list-inside mt-2 space-y-2 ml-4">
                                <li><strong>Agar homogenization upstream (UHT se PEHLE) ki jaaye:</strong> UHT heating step newly adsorbed casein/whey protein layer ko denature kar deta hai homogenised globules pe. Isse heating ke dauran large fat globule aggregates bante hain (heat-induced clustering) aur long ambient storage mein emulsion destabilise ho jaata hai. Fat separation aur "oiling off" hota hai. Ye NAHI chahiye!</li>
                                <li><strong>Agar homogenization downstream (UHT ke BAAD) ki jaaye:</strong> Cream sabse intense thermal treatment ke BAAD homogenise hoti hai. Newly formed protein-stabilised fat globule surfaces ko aur koi heat stress nahi milta. Isse ek zyada stable emulsion banta hai long-term ambient storage ke liye. Ye CHAHIYE!</li>
                                <li><strong>Aseptic requirement:</strong> Homogeniser UHT line ke sterile section mein positioned hota hai (UHT heater aur aseptic filler ke beech). Homogeniser ko production se pehle sterilise karna padta hai (typically hot water circulate karke ≥130°C pe 30 min tak ya steam sterilisation se). Isme <strong>aseptic design features</strong> hone chahiye: sterile piston seals, aseptic barriers (steam-sterilised gaskets), aur sterile lubrication. Agar yahan aseptic integrity fail ho jaaye toh commercially sterile product re-contaminate ho jaayega — bahut bada risk hai!</li>
                            </ul>

                            <p class="mt-2"><strong>Typical conditions:</strong> Two-stage, total pressure 15–25 MPa (150–250 bar). Cream ke liye higher pressures chahiye uski higher viscosity aur fat content ki wajah se. Homogenization ke waqt product temperature: ~65–75°C (direct systems mein flash-cooling ke baad, ya indirect systems mein ek intermediate point pe).</p>
                        </li>

                        <li>
                            <strong>Aseptic Cooling & Aseptic Buffer Tank:</strong>
                            <p class="mt-1">Aseptic homogenization ke baad cream ko 20–25°C tak cool kiya jaata hai (ambient storage temperature) ek PHE mein jisme <strong>sterile barriers</strong> hote hain (double-seat valves, sterile water barriers) jo product side ko cooling water side se alag karte hain. Cooled cream ko ek <strong>aseptic buffer tank</strong> mein hold kiya ja sakta hai — ye ek sterile, pressurised vessel hai (sterile filtered air ya nitrogen gas se 0.5–1.0 bar gauge pe overpressure) jo continuous UHT process aur (possibly intermittent) aseptic filling machine ke beech buffer provide karta hai. Matlab agar filling machine mein thodi der ke liye pause ho toh UHT process band nahi karna padta.</p>
                        </li>

                        <li>
                            <strong>Aseptic Packaging (CCP-2):</strong>
                            <p class="mt-1">Commercially sterile cream ko pre-sterilised containers mein ek sterile filling environment mein fill kiya jaata hai. Ye <strong>CCP-2</strong> hai — is stage pe koi bhi failure sterile product ko re-contaminate kar dega, aur ambient storage mein spoilage ho jaayega. Target reliability level hai <strong>"ek million mein se ek non-sterile container"</strong> — itni strict quality chahiye!</p>

                            <h5 class="font-semibold mt-3 mb-1">UHT Cream ke liye Packaging Systems</h5>
                            <div class="overflow-x-auto mt-2">
                                <table class="w-full text-left border-collapse text-sm">
                                    <thead class="bg-muted">
                                        <tr>
                                            <th class="p-2 border">System</th>
                                            <th class="p-2 border">Material</th>
                                            <th class="p-2 border">Sterilisation Method</th>
                                            <th class="p-2 border">Barrier Properties</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="p-2 border"><strong>Tetra Pak Aseptic (TBA/TCA)</strong></td>
                                            <td class="p-2 border">6-layer laminate: PE/paperboard/PE/aluminium foil (6.5 µm)/PE/PE</td>
                                            <td class="p-2 border">Packaging material H₂O₂ bath mein sterilise hota hai (35% w/w, 70°C) ya spray, fir hot air drying (&gt;100°C) aur UV irradiation</td>
                                            <td class="p-2 border">Excellent O₂ barrier (Al foil); excellent light barrier; accha moisture barrier. OTR &lt;0.5 cm³/m²/day.</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border"><strong>Combibloc (SIG)</strong></td>
                                            <td class="p-2 border">Tetra Pak jaisa similar laminate structure</td>
                                            <td class="p-2 border">Pre-formed carton sleeves ka H₂O₂ vapour se sterilisation</td>
                                            <td class="p-2 border">Tetra Pak ke comparable</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border"><strong>Aseptic PET bottles</strong></td>
                                            <td class="p-2 border">PET (mono ya multilayer with EVOH barrier)</td>
                                            <td class="p-2 border">Peracetic acid (PAA) spray/rinse ya H₂O₂ vapour</td>
                                            <td class="p-2 border">Moderate O₂ barrier (jab tak EVOH layer na ho); transparent hai (light protection ke liye UV absorber ya pigment chahiye)</td>
                                        </tr>
                                        <tr>
                                            <td class="p-2 border"><strong>Aseptic HDPE/PP cups</strong></td>
                                            <td class="p-2 border">Thermoformed ya injection-moulded cups with foil-laminate lids</td>
                                            <td class="p-2 border">H₂O₂ ya PAA with UV ya heat</td>
                                            <td class="p-2 border">Single-serve portions ke liye accha</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h5 class="font-semibold mt-3 mb-1">Packaging Material ki Sterilisation</h5>
                            <p>Packaging material ki sterilisation mein minimum <strong>4–5 log reduction</strong> achieve karni hoti hai sabse resistant contaminants ki (typically <em>Bacillus</em> spores). H₂O₂ sterilisation process mein:</p>
                            <ol class="list-decimal list-inside ml-4 space-y-1 mt-2 text-sm">
                                <li>35% H₂O₂ solution ko 70°C pe packaging surface pe lagaana (dip, spray, ya roller application)</li>
                                <li>&gt;100°C pe hot sterile air se heat karna taaki residual H₂O₂ decompose ho jaaye paani aur oxygen mein (H₂O₂ → H₂O + ½O₂)</li>
                                <li>Package pe residual H₂O₂ &lt;0.5 ppm hona chahiye (FSSAI/FDA limit) food safety ensure karne ke liye</li>
                            </ol>

                            <p class="mt-2"><strong>Filling environment:</strong> The aseptic zone around the filling head is maintained at positive pressure with HEPA-filtered (Class 100 / ISO 5) sterile air to prevent airborne contamination. The sterile zone integrity is continuously monitored.</p>
                        </li>

                        <li>
                            <strong>Ambient Storage & Distribution:</strong>
                            <p class="mt-1">Correctly processed and packaged UHT cream can be stored at ambient temperature (15–30°C) for <strong>3–9 months</strong> (manufacturer-determined shelf life, depending on formulation and packaging quality). No refrigeration is required until the package is opened. After opening, UHT cream must be refrigerated (≤5°C) and consumed within 3–5 days.</p>

                            <h5 class="font-semibold mt-3 mb-1">Quality Changes During Ambient Storage</h5>
                            <p>While UHT cream is microbiologically stable, it undergoes slow <strong>physicochemical and biochemical deterioration</strong> during storage:</p>
                            <ul class="list-disc list-inside mt-2 space-y-2 ml-4">
                                <li>
                                    <strong>Age Gelation:</strong> The most significant quality defect in UHT cream. After 2–6 months of ambient storage, UHT cream may develop an irreversible gel, transforming from a pourable liquid to a solid or semi-solid custard-like consistency. Two mechanisms are proposed:
                                    <ul class="list-circle list-inside ml-4 mt-1 space-y-1">
                                        <li><strong>Enzymatic (proteolytic) gelation:</strong> Caused by heat-stable extracellular proteases from psychrotrophic bacteria (esp. <em>Pseudomonas fluorescens</em>) present in the raw milk before UHT processing. These metalloproteinases (Zn²⁺-dependent) have extremely high thermostability (D₁₄₀ > 300 sec). Even residual activity of 1–2% of original enzyme level can slowly hydrolyse κ-casein on casein micelle surfaces during months of storage, destabilising the casein micelle → aggregation → gelation. <strong>Prevention:</strong> Use raw milk with very low psychrotrophic count (&lt;10⁴ CFU/mL, ideally &lt;10³); process milk within 24h of milking; avoid prolonged cold storage of raw milk.</li>
                                        <li><strong>Non-enzymatic (physicochemical) gelation:</strong> Caused by slow polymerisation of casein and whey proteins via intermolecular cross-linking (disulfide bonds, Maillard-type cross-links, dehydroalanine-lysine cross-links). β-Lg-κ-casein complexes formed during UHT processing slowly rearrange and cross-link during storage. This mechanism is more prominent in indirect UHT products (higher thermal load) and at higher storage temperatures.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Maillard Reaction (Non-Enzymatic Browning):</strong> During storage at ambient temperature, the Maillard reaction between lactose (reducing sugar) and lysine residues of milk proteins proceeds slowly. This causes:
                                    <ul class="list-circle list-inside ml-4 mt-1 space-y-1">
                                        <li>Progressive browning (increase in Hunter 'b' value and absorbance at 420 nm)</li>
                                        <li>Development of "stale" or "cooked" off-flavours</li>
                                        <li>Formation of advanced glycation end-products (AGEs) including carboxymethyl-lysine (CML) and furosine (a Maillard intermediate)</li>
                                        <li>Nutritional loss: ~10–15% of available lysine may be blocked (Amadori products) after 6 months at 25°C</li>
                                    </ul>
                                    <p class="mt-1"><strong>Monitoring:</strong> Furosine content (mg/100g protein) is used as a marker of heat treatment intensity and Maillard progression. Fresh UHT cream: ~50–200 mg furosine/100g protein. After 6 months storage: 200–500 mg/100g protein.</p>
                                </li>
                                <li>
                                    <strong>Lipid Oxidation:</strong> Despite the oxygen barrier of aluminium-foil-laminated packaging, trace dissolved oxygen (~2–5 ppm) and headspace oxygen can drive slow auto-oxidation of unsaturated fatty acids. Products include hexanal, pentanal, and 2-nonenal (cardboard flavour). UHT heating also partially inactivates natural antioxidants (tocopherols, β-carotene partially degraded). Higher storage temperatures (>25°C) accelerate oxidation.
                                </li>
                                <li>
                                    <strong>Fat Separation:</strong> Despite homogenization, slow creaming can occur over months of storage, especially if homogenization was inadequate. A visible cream layer at the top of the carton is a common consumer complaint. More severe cases involve "fat plug" formation—a dense plug of aggregated fat at the top of the carton.
                                </li>
                                <li>
                                    <strong>Sediment Formation:</strong> Calcium phosphate (precipitated during UHT heating due to inverse solubility) can slowly aggregate and sediment during storage, forming a white/grey deposit at the bottom of the carton. Addition of stabilising salts (citrate, phosphate) and effective homogenization mitigates this.
                                </li>
                            </ul>
                        </li>
                    </ol>

                    <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 font-headline">HACCP Summary for UHT Cream</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Step</th>
                                    <th class="p-2 border">Classification</th>
                                    <th class="p-2 border">Hazard</th>
                                    <th class="p-2 border">Critical Limit</th>
                                    <th class="p-2 border">Monitoring</th>
                                    <th class="p-2 border">Corrective Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border">UHT Treatment</td>
                                    <td class="p-2 border"><strong>CCP-1</strong></td>
                                    <td class="p-2 border">Survival of pathogenic and spoilage spores</td>
                                    <td class="p-2 border">≥140°C for ≥4 sec (or equivalent F₀ ≥ 5 min); Product temperature ≥135°C at holding tube exit</td>
                                    <td class="p-2 border">Continuous temperature recording at holding tube inlet and outlet (calibrated Pt100 RTDs ±0.1°C); Flow rate monitoring (positive displacement pump speed); Steam pressure/temperature in heating section</td>
                                    <td class="p-2 border">Automatic diversion of under-processed product to non-sterile drain; Alarm and line shutdown; Investigation and recalibration; CIP and re-sterilisation of line before restart</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Aseptic Packaging</td>
                                    <td class="p-2 border"><strong>CCP-2</strong></td>
                                    <td class="p-2 border">Post-sterilisation recontamination; Non-sterile packages</td>
                                    <td class="p-2 border">Package sterility: ≥4 log reduction on packaging material; H₂O₂ residual &lt;0.5 ppm; Aseptic zone positive air pressure ≥5 Pa; Seal integrity (no leakers)</td>
                                    <td class="p-2 border">H₂O₂ bath temperature and concentration (refractometer); Drying air temperature; Aseptic zone differential pressure sensors; In-line seal integrity (pressure decay test or high-voltage detection); Microbiological sterility testing (incubation test: 37°C/7 days + 55°C/7 days on sample packs)</td>
                                    <td class="p-2 border">Stop filler immediately if aseptic breach detected; Quarantine and reject affected production lot; Re-sterilise filler; Investigate root cause (splice failure, H₂O₂ concentration drift, HEPA filter integrity, seal jaw wear)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 font-headline">Incubation (Sterility) Testing for UHT Cream</h3>
                    <p>Since UHT cream is intended for ambient storage, its commercial sterility must be verified through incubation testing on every production batch:</p>
                    <ul class="list-disc list-inside mt-2 space-y-1 ml-4">
                        <li><strong>Sample size:</strong> Statistically representative sample (typically 1 unit per 3,000–5,000 produced, minimum 5 per batch; more for initial production qualification).</li>
                        <li><strong>Incubation conditions:</strong>
                            <ul class="list-circle list-inside ml-4 mt-1 space-y-1">
                                <li>37°C for 7 days (detects mesophilic organisms)</li>
                                <li>55°C for 7 days (detects thermophilic organisms, primarily <em>G. stearothermophilus</em>)</li>
                            </ul>
                        </li>
                        <li><strong>Assessment criteria:</strong> After incubation, units are examined for:
                            <ul class="list-circle list-inside ml-4 mt-1 space-y-1">
                                <li>Package swelling (gas production from microbial metabolism; CO₂, H₂)</li>
                                <li>pH change (&gt;0.5 unit decrease from reference indicates acid-producing organisms)</li>
                                <li>Organoleptic changes (off-odour, off-flavour, colour change, texture change)</li>
                                <li>Microscopic examination and plate count of incubated sample (should show &lt;10 CFU/0.1 mL; ideally 0)</li>
                            </ul>
                        </li>
                        <li><strong>Acceptance criterion:</strong> A batch is "commercially sterile" if all incubated units show no signs of microbial growth. Non-sterile units indicate process failure at CCP-1 (under-processing) or CCP-2 (packaging contamination), triggering investigation, recall of the affected batch, and corrective action.</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 font-headline">Comparison: Pasteurized vs. UHT Cream</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Pasteurized Cream</th>
                                    <th class="p-2 border">UHT Cream</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Heat treatment</td><td class="p-2 border">80–85°C / 15–25 sec</td><td class="p-2 border">140–145°C / 3–6 sec</td></tr>
                                <tr><td class="p-2 border">Microbial status</td><td class="p-2 border">Pasteurized (vegetative pathogens destroyed; spores survive)</td><td class="p-2 border">Commercially sterile (spores destroyed)</td></tr>
                                <tr><td class="p-2 border">Storage</td><td class="p-2 border">Refrigerated (≤5°C) mandatory</td><td class="p-2 border">Ambient (15–30°C); refrigerate after opening</td></tr>
                                <tr><td class="p-2 border">Shelf life</td><td class="p-2 border">15–20 days</td><td class="p-2 border">3–9 months</td></tr>
                                <tr><td class="p-2 border">Packaging</td><td class="p-2 border">Conventional (cups, pouches, cartons)</td><td class="p-2 border">Aseptic packaging (Tetra Pak, etc.)</td></tr>
                                <tr><td class="p-2 border">Flavour profile</td><td class="p-2 border">Fresh, mild cooked note; closest to raw cream</td><td class="p-2 border">More pronounced cooked/caramelised note; sulphydryl flavour initially, stale/Maillard flavour on prolonged storage</td></tr>
                                <tr><td class="p-2 border">Whey protein denaturation</td><td class="p-2 border">60–80% of β-Lg</td><td class="p-2 border">&gt;90% of β-Lg (essentially complete)</td></tr>
                                <tr><td class="p-2 border">Browning (ΔA₄₂₀)</td><td class="p-2 border">Negligible</td><td class="p-2 border">Slight initially; increases during storage</td></tr>
                                <tr><td class="p-2 border">Vitamin C loss</td><td class="p-2 border">~10%</td><td class="p-2 border">~20–30% initially; up to 100% after 3–6 months storage</td></tr>
                                <tr><td class="p-2 border">Furosine (mg/100g protein)</td><td class="p-2 border">&lt;12</td><td class="p-2 border">50–200 (fresh); 200–500 (after storage)</td></tr>
                                <tr><td class="p-2 border">Lactulose (mg/L)</td><td class="p-2 border">&lt;50 (typically undetectable)</td><td class="p-2 border">200–1000 (Maillard indicator; used to distinguish UHT from pasteurized)</td></tr>
                                <tr><td class="p-2 border">Cost</td><td class="p-2 border">Lower processing cost; higher distribution cost (cold chain)</td><td class="p-2 border">Higher processing cost (equipment, energy, aseptic packaging); lower distribution cost (no cold chain)</td></tr>
                                <tr><td class="p-2 border">Whipping performance</td><td class="p-2 border">Excellent (if not homogenised, properly aged)</td><td class="p-2 border">Generally inferior; requires stabilisers/emulsifiers for acceptable whipping; over-whipping risk due to homogenised globule instability</td></tr>
                                <tr><td class="p-2 border">Key quality risk</td><td class="p-2 border">Microbial spoilage (cold-chain failure)</td><td class="p-2 border">Age gelation; Maillard browning; fat separation</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-3 font-headline">Common Defects in UHT Cream</h3>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Defect</th>
                                    <th class="p-2 border">Description</th>
                                    <th class="p-2 border">Root Cause</th>
                                    <th class="p-2 border">Prevention</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border">Non-sterility (spoilage)</td>
                                    <td class="p-2 border">Package swelling, off-odour, acid/bitter taste, gas bubbles</td>
                                    <td class="p-2 border">Under-processing (CCP-1 failure) or post-sterilisation contamination (CCP-2 failure: packaging seal defect, non-sterile filler)</td>
                                    <td class="p-2 border">Validate and monitor CCP-1 and CCP-2; incubation testing; seal integrity testing</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Age gelation</td>
                                    <td class="p-2 border">Product thickens to custard-like or gel consistency during storage</td>
                                    <td class="p-2 border">Heat-stable proteases from psychrotrophic bacteria in raw milk; and/or physicochemical protein cross-linking</td>
                                    <td class="p-2 border">Use high-quality raw milk (low psychrotrophic count &lt;10³ CFU/mL); minimise raw milk storage time; add sodium polyphosphate (0.05–0.1%); higher UHT temperature (higher protein denaturation may delay enzymatic gelation but promote physicochemical gelation—complex balance)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Fat separation / fat plug</td>
                                    <td class="p-2 border">Visible cream layer or solid fat mass at top of package</td>
                                    <td class="p-2 border">Inadequate homogenization (insufficient pressure, worn valve); fat globule re-coalescence during storage</td>
                                    <td class="p-2 border">Optimise homogenization pressure (20–25 MPa for UHT cream); use two-stage homogenization; add κ-carrageenan stabiliser; ensure downstream homogenization</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Browning</td>
                                    <td class="p-2 border">Darkening of cream colour over storage period</td>
                                    <td class="p-2 border">Maillard reaction between lactose and protein lysine residues; accelerated at higher storage temperatures</td>
                                    <td class="p-2 border">Store at ≤25°C (FIFO inventory management); minimise total thermal load (prefer direct UHT over indirect); use opaque packaging</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Cooked/stale flavour</td>
                                    <td class="p-2 border">Distinct "cooked" taste initially; "stale" or "cardboard" flavour during prolonged storage</td>
                                    <td class="p-2 border">Sulphydryl compounds from β-Lg denaturation (initial); Maillard reaction volatiles and lipid oxidation products (storage)</td>
                                    <td class="p-2 border">Direct heating systems produce less cooked flavour; flash cooling removes volatile sulfides; minimise headspace O₂ and storage temperature</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Sediment / white deposits</td>
                                    <td class="p-2 border">White or grey granular deposit at bottom of package</td>
                                    <td class="p-2 border">Precipitation of calcium phosphate (inverse solubility at UHT temperatures); aggregation of denatured protein-mineral complexes</td>
                                    <td class="p-2 border">Add stabilising salts (citrate, phosphate) to sequester calcium; optimise homogenization</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                `
            }
        }
    }
}
