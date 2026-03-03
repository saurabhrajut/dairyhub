
export const flavouredMilkContent = {
    en: {
        title: "Flavoured Milk Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Flavoured Milk</h3>
            <p>Flavoured milk is a value-added, sweetened dairy beverage manufactured by incorporating sugar, flavouring agents, colouring matter, and approved stabilizers into standardized milk. According to the <strong>Codex Alimentarius (CODEX STAN 243-2003)</strong>, flavoured milk falls under the category of composite milk products where non-dairy ingredients are added, provided the milk-derived portion constitutes the predominant component. It is commercially available as a pasteurized product (requiring cold-chain maintenance at ≤4°C) or as an ultra-high-temperature (UHT) treated product achieving commercial sterility for ambient shelf-stability.</p>
            <p class="mt-2">Flavoured milk serves as a nutritionally strategic vehicle, particularly for paediatric and adolescent populations, because it delivers the bioavailable calcium (~120 mg per 100 mL), high-quality whey and casein proteins (containing all essential amino acids including leucine critical for muscle protein synthesis), riboflavin (vitamin B₂), vitamin B₁₂, phosphorus, potassium, and vitamin D (when fortified) in a palatable format. Studies published in the <em>Journal of the American Dietetic Association</em> have demonstrated that flavoured milk consumption is associated with higher overall dairy intake and improved nutrient adequacy without significantly increasing total energy intake when consumed as part of a balanced diet (Murphy et al., 2008). The global flavoured milk market was valued at approximately USD 53.4 billion in 2023, with a compound annual growth rate (CAGR) of ~6.2%, driven by demand for convenience-based nutrition.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Classification of Flavoured Milk</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Classification Basis</th>
                            <th class="p-2 border">Type</th>
                            <th class="p-2 border">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border" rowspan="3"><strong>By Heat Treatment</strong></td>
                            <td class="p-2 border">Pasteurized Flavoured Milk</td>
                            <td class="p-2 border">HTST (72°C/15 s) or LTLT (63°C/30 min); shelf life 7–14 days at ≤4°C</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">UHT Flavoured Milk</td>
                            <td class="p-2 border">135–150°C for 2–4 seconds; aseptically packaged; shelf life 6–9 months ambient</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">In-Bottle Sterilized</td>
                            <td class="p-2 border">110–120°C for 15–20 minutes; shelf life 6–12 months ambient; more intense cooked flavour</td>
                        </tr>
                        <tr>
                            <td class="p-2 border" rowspan="5"><strong>By Flavour Type</strong></td>
                            <td class="p-2 border">Chocolate / Cocoa</td>
                            <td class="p-2 border">Most popular globally; uses cocoa powder (10–22% fat, alkalized or natural); requires suspension stability</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Strawberry</td>
                            <td class="p-2 border">Natural or nature-identical flavouring; often uses permitted red colour (e.g., carmine, beetroot red)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Vanilla</td>
                            <td class="p-2 border">Vanillin (synthetic) or vanilla extract; subtle flavour profile</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Banana</td>
                            <td class="p-2 border">Isoamyl acetate-based flavouring; popular in South Asian markets</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Elaichi (Cardamom) / Rose / Kesar</td>
                            <td class="p-2 border">Traditional Indian variants; use natural extracts; growing premium segment</td>
                        </tr>
                        <tr>
                            <td class="p-2 border" rowspan="3"><strong>By Fat Level</strong></td>
                            <td class="p-2 border">Full-fat Flavoured Milk</td>
                            <td class="p-2 border">≥3.0% fat (corresponding to standardized milk type)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Low-fat Flavoured Milk</td>
                            <td class="p-2 border">1.0–2.0% fat; marketed as "light" or "lite"</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Skimmed Flavoured Milk</td>
                            <td class="p-2 border">≤0.5% fat; lower calorie content</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Flavoured Milk</h3>
            <p>The Food Safety and Standards Authority of India (FSSAI), under the <strong>Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011</strong>, has defined flavoured milk under <strong>Clause 2.1.8</strong>. It states: <em>"Flavoured milk means the product prepared from milk which has been flavoured with approved flavouring, sweetening agents, and colours."</em> The key compositional and microbiological requirements are:</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Compositional Standards</h4>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Requirement</th>
                            <th class="p-2 border">Scientific Rationale</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat (% m/m)</strong></td>
                            <td class="p-2 border">Not less than the minimum prescribed for the corresponding milk type used (e.g., Toned ≥3.0%, Double Toned ≥1.5%, Standardized ≥4.5% for buffalo or ≥3.0% for cow, Skimmed ≤0.5%)</td>
                            <td class="p-2 border">Fat contributes to mouthfeel, body, flavour perception (fat-soluble aroma compounds partition into the lipid phase), and satiety signalling via cholecystokinin (CCK) release.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Solids-Not-Fat (SNF) (% m/m)</strong></td>
                            <td class="p-2 border">Not less than the minimum prescribed for the corresponding milk type (e.g., ≥8.5% for most types)</td>
                            <td class="p-2 border">SNF comprises proteins (casein ~80%, whey ~20%), lactose (~4.8%), minerals (~0.7%), and water-soluble vitamins. Adequate SNF ensures nutritional density and contributes to viscosity and colloidal stability.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Total Solids (% m/m)</strong></td>
                            <td class="p-2 border">Typically 14–18% (including added sugar and cocoa)</td>
                            <td class="p-2 border">Higher total solids improve body, viscosity, and overall sensory acceptance; also affects heat transfer efficiency during thermal processing.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sugar (Sucrose)</strong></td>
                            <td class="p-2 border">Permitted; typically 5–9% w/v; amount must be declared on the label as per FSSAI labelling regulations</td>
                            <td class="p-2 border">Sucrose (α-D-glucopyranosyl-(1→2)-β-D-fructofuranoside) enhances sweetness perception (relative sweetness = 1.0), masks the slight bitterness of cocoa (in chocolate milk), and contributes to osmotic balance affecting microbial water activity (a<sub>w</sub>).</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Cocoa/Chocolate Powder</strong></td>
                            <td class="p-2 border">0.5–1.5% w/v for chocolate flavoured milk</td>
                            <td class="p-2 border">Cocoa powder contains theobromine (3,7-dimethylxanthine), flavonoids (epicatechin, catechin), and polyphenols with antioxidant properties. Particle size (d₅₀ typically 10–30 µm) critically affects sedimentation rate and mouthfeel.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Permitted Stabilizers</strong></td>
                            <td class="p-2 border">Carrageenan (INS 407) — max 150 ppm (0.015%); Sodium Alginate (INS 401); Sodium CMC (INS 466); Gellan Gum (INS 418); as per Schedule VA of FSSAI regulations</td>
                            <td class="p-2 border">Hydrocolloids function as thickeners and suspension stabilizers; each has specific interaction mechanisms with casein micelles (detailed below).</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Permitted Colours</strong></td>
                            <td class="p-2 border">Only those listed under FSSAI Appendix A; e.g., Caramel colour (INS 150a/b/c/d) for chocolate milk, Ponceau 4R (INS 124) or Carmine (INS 120) for strawberry</td>
                            <td class="p-2 border">Colour significantly affects flavour perception — a cross-modal sensory phenomenon where visual cues modulate gustatory and olfactory processing in the orbitofrontal cortex.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Emulsifiers</strong></td>
                            <td class="p-2 border">Mono- and di-glycerides of fatty acids (INS 471); Lecithin (INS 322); as permitted</td>
                            <td class="p-2 border">Reduce interfacial tension between fat globules and aqueous phase; improve homogenization efficiency and emulsion stability.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Microbiological Standards (FSSAI)</h4>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Pasteurized Flavoured Milk</th>
                            <th class="p-2 border">UHT/Sterilized Flavoured Milk</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Total Plate Count (TPC)</strong></td>
                            <td class="p-2 border">≤30,000 CFU/mL (n=5, c=2, m=10,000, M=50,000)</td>
                            <td class="p-2 border">Commercially sterile — no growth after incubation at 37°C for 15 days and 55°C for 7 days</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Coliform Count</strong></td>
                            <td class="p-2 border">≤10 CFU/mL (n=5, c=1, m=1, M=10)</td>
                            <td class="p-2 border">Absent in 1 mL</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>E. coli</em></strong></td>
                            <td class="p-2 border">Absent in 1 mL</td>
                            <td class="p-2 border">Absent in 1 mL</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>Salmonella</em></strong></td>
                            <td class="p-2 border">Absent in 25 mL</td>
                            <td class="p-2 border">Absent in 25 mL</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>Staphylococcus aureus</em></strong></td>
                            <td class="p-2 border">≤10 CFU/mL</td>
                            <td class="p-2 border">Absent in 1 mL</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>Listeria monocytogenes</em></strong></td>
                            <td class="p-2 border">Absent in 25 mL</td>
                            <td class="p-2 border">Absent in 25 mL</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Yeast & Mould Count</strong></td>
                            <td class="p-2 border">≤10 CFU/mL</td>
                            <td class="p-2 border">Absent</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Phosphatase Test</strong></td>
                            <td class="p-2 border">Negative (must show inactivation of ALP)</td>
                            <td class="p-2 border">Negative</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Turbidity Test (for sterilized)</strong></td>
                            <td class="p-2 border">Not applicable</td>
                            <td class="p-2 border">Negative — clear supernatant after ammonium sulphate precipitation indicates complete whey protein denaturation</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2 text-sm text-gray-600"><strong>Note:</strong> In sampling plans, n = number of samples, c = maximum number of acceptable results between m and M, m = microbiological limit below which all results are considered satisfactory, M = maximum microbiological limit above which results are unsatisfactory (as per ICMSF two-class and three-class sampling plans).</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Science of Key Ingredients</h3>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">1. Stabilizers and Their Mechanism of Action</h4>
            <p>The most critical technological challenge in flavoured milk, particularly chocolate milk, is <strong>suspension stability</strong> — preventing the sedimentation of insoluble particles (cocoa, added minerals) and preventing fat separation (creaming). Hydrocolloid stabilizers address these challenges through distinct mechanisms:</p>

            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Stabilizer</th>
                            <th class="p-2 border">INS No.</th>
                            <th class="p-2 border">Typical Usage Level</th>
                            <th class="p-2 border">Mechanism in Milk Systems</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Kappa-Carrageenan (κ-carrageenan)</strong></td>
                            <td class="p-2 border">407</td>
                            <td class="p-2 border">100–300 ppm (0.01–0.03%)</td>
                            <td class="p-2 border">
                                Forms a <strong>weak, thixotropic gel network</strong> by electrostatic interaction between its sulphate ester groups (–OSO₃⁻) and the positively charged regions of <strong>κ-casein</strong> (particularly the para-κ-casein region, amino acid residues 1–105) on the surface of casein micelles. This creates a <em>three-dimensional casein-carrageenan network</em> that dramatically increases zero-shear viscosity (η₀) and yield stress (τ₀), suspending cocoa particles. The interaction is primarily electrostatic at pH 6.6–6.8 (milk pH) and is enhanced by calcium ions (Ca²⁺) which form bridges between carrageenan chains. This gel is <strong>pseudoplastic (shear-thinning)</strong>: viscosity decreases under shear (shaking/pouring) and recovers at rest (thixotropy).
                            </td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Lambda-Carrageenan (λ-carrageenan)</strong></td>
                            <td class="p-2 border">407</td>
                            <td class="p-2 border">100–500 ppm</td>
                            <td class="p-2 border">
                                Does not gel; instead acts as a <strong>viscosity builder</strong>. Has three sulphate groups per disaccharide repeat unit (vs. one for κ), providing stronger electrostatic interaction with casein micelles but without forming ordered helical structures needed for gelation. Creates viscous, pourable systems; preferred for drinking-style products where a pourable, non-gelled texture is desired.
                            </td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Microcrystalline Cellulose (MCC) + CMC</strong></td>
                            <td class="p-2 border">460(i) + 466</td>
                            <td class="p-2 border">0.05–0.3%</td>
                            <td class="p-2 border">
                                MCC particles form a <strong>colloidal network</strong> that physically traps and suspends cocoa particles. CMC acts as a co-stabilizer, coating MCC particles and preventing their aggregation. This system provides excellent suspension stability without significant viscosity increase — ideal for "thin" mouthfeel products. Operates via a <strong>network-forming mechanism</strong> rather than viscosity modification.
                            </td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Gellan Gum (Low-Acyl)</strong></td>
                            <td class="p-2 border">418</td>
                            <td class="p-2 border">100–250 ppm</td>
                            <td class="p-2 border">
                                Forms <strong>fluid gels</strong> — a suspension of microgel particles in a continuous liquid phase. These microgels provide a structured network at rest (suspending particles) but flow readily when shear is applied. Produces a very "clean" mouthfeel with quick flavour release. Gels in the presence of divalent cations (Ca²⁺, Mg²⁺) naturally present in milk. Increasingly popular for premium flavoured milk products.
                            </td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sodium Alginate</strong></td>
                            <td class="p-2 border">401</td>
                            <td class="p-2 border">0.01–0.1%</td>
                            <td class="p-2 border">
                                Linear polysaccharide of β-D-mannuronate (M) and α-L-guluronate (G) residues. G-blocks form <strong>"egg-box" junctions</strong> with Ca²⁺ ions. In milk systems, the Ca²⁺ from milk (~30 mM) can cause gelation, so it is typically used in combination with sequestrants (citrates, phosphates) to control gel strength.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p class="mt-3"><strong>Stokes' Law and Sedimentation:</strong> The sedimentation rate of cocoa particles in the absence of stabilizers can be estimated by <strong>Stokes' Law</strong>:</p>
            <div class="bg-gray-100 p-4 rounded mt-2 text-center font-mono">
                v = (2 × r² × (ρ<sub>p</sub> − ρ<sub>f</sub>) × g) / (9 × η)
            </div>
            <p class="mt-2">Where: <strong>v</strong> = sedimentation velocity (m/s), <strong>r</strong> = particle radius (m), <strong>ρ<sub>p</sub></strong> = particle density (cocoa ≈ 1,400 kg/m³), <strong>ρ<sub>f</sub></strong> = fluid density (milk ≈ 1,032 kg/m³), <strong>g</strong> = gravitational acceleration (9.81 m/s²), <strong>η</strong> = dynamic viscosity of the continuous phase (Pa·s).</p>
            <p class="mt-2">From this equation, sedimentation can be retarded by: (a) <strong>reducing particle size (r)</strong> through intense homogenization, (b) <strong>increasing viscosity (η)</strong> of the continuous phase through stabilizer addition, or (c) <strong>reducing density difference (ρ<sub>p</sub> − ρ<sub>f</sub>)</strong> by increasing total solids. A combination of all three strategies is used in practice. For a cocoa particle of radius 15 µm in unstabilized milk (η ≈ 0.002 Pa·s), v ≈ 0.09 mm/s, meaning complete sedimentation in a 200 mm carton would occur in ~37 minutes. With carrageenan stabilization (η₀ ≈ 0.05 Pa·s at rest), this extends to >15 hours, plus the yield stress of the gel network provides additional resistance.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">2. Cocoa Powder — Types and Behaviour</h4>
            <p><strong>Natural (Broma Process) Cocoa:</strong> pH 5.0–5.4; lighter brown colour; more acidic, fruity flavour; less soluble in milk; may cause slight protein destabilization near casein's isoelectric point (pH 4.6). <br/>
            <strong>Alkalized (Dutch-Process) Cocoa:</strong> Treated with alkali (K₂CO₃ or NaOH) to raise pH to 6.8–8.1; darker colour (Maillard products formed during alkalization); milder, smoother flavour; better dispersibility in milk due to higher wettability and pH compatibility with milk's native pH. <strong>Preferred for flavoured milk applications</strong> because it does not depress milk pH significantly and avoids acid-induced casein aggregation.</p>
            <p class="mt-2"><strong>Fat content of cocoa powder</strong> affects stability: Standard cocoa (10–12% fat) is easier to disperse than high-fat cocoa (20–24% fat). The surface fat creates a hydrophobic layer that resists wetting — pre-dispersion in warm sugar solution or use of lecithin as a wetting agent is recommended.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">3. Sugar — Role Beyond Sweetening</h4>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Water Activity Depression:</strong> Addition of 7% sucrose reduces a<sub>w</sub> from ~0.997 (plain milk) to ~0.990, providing a marginal but cumulative hurdle against microbial growth (hurdle technology principle of Leistner).</li>
                <li><strong>Viscosity Enhancement:</strong> A 7% sucrose solution increases viscosity by ~12% compared to water, contributing to mouthfeel.</li>
                <li><strong>Maillard Reaction Participation:</strong> During UHT/sterilization, sucrose undergoes partial inversion to glucose and fructose (catalyzed by heat and the slightly acidic conditions), and these reducing sugars participate in <strong>Maillard browning</strong> with milk proteins (primarily ε-amino groups of lysine in casein and β-lactoglobulin). This generates brown melanoidins, cooked/caramelized flavour notes (furfural, hydroxymethylfurfural/HMF, maltol), and can reduce nutritional quality (loss of available lysine — <strong>Maillard blockage</strong>).</li>
                <li><strong>Freezing Point Depression:</strong> Relevant for frozen flavoured milk products; 7% sucrose depresses the freezing point by approximately 0.6°C (colligative property).</li>
                <li><strong>Alternative Sweeteners:</strong> High-fructose corn syrup (HFCS 42 or 55), stevia glycosides (INS 960), sucralose (INS 955), or acesulfame-K (INS 950) may be used for reduced-calorie variants, subject to FSSAI permission. Stevia use requires careful flavour masking due to its liquorice-like aftertaste.</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Flavoured Milk with Food Safety Controls (HACCP-Based)</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">HACCP Terminology Review</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Term</th>
                            <th class="p-2 border">Full Form</th>
                            <th class="p-2 border">Definition (per ISO 22000:2018)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>PRP</strong></td>
                            <td class="p-2 border">Prerequisite Program</td>
                            <td class="p-2 border">Basic conditions and activities necessary to maintain a hygienic environment throughout the food chain. Not specific to a particular hazard. Examples: cleaning & sanitation, pest control, personal hygiene, equipment maintenance, water quality, waste management.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>oPRP</strong></td>
                            <td class="p-2 border">Operational Prerequisite Program</td>
                            <td class="p-2 border">A control measure identified by hazard analysis as essential to control a significant food safety hazard to acceptable levels, but which is <em>not</em> managed as a CCP. Has defined action criteria, monitoring, and corrections. Differs from CCP in that product disposition (e.g., hold/release) is not typically the outcome of a deviation.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>CCP</strong></td>
                            <td class="p-2 border">Critical Control Point</td>
                            <td class="p-2 border">A step at which a control measure can be applied and is essential to prevent or eliminate a food safety hazard or reduce it to an acceptable level. Has defined critical limits, continuous monitoring, and documented corrective actions including product disposition.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Flavoured Milk Production</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-50 border border-blue-200 rounded">Raw Milk Reception & Quality Testing <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-50 border border-blue-200 rounded">Pre-filtration / Clarification <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Standardization (Fat & SNF Adjustment) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-50 border border-blue-200 rounded">Pre-heating (60–65°C) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Ingredient Blending (Sugar, Cocoa, Stabilizers, Emulsifiers) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">De-aeration (Vacuum Chamber) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Homogenization (Two-Stage) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-red-100 border border-red-300 rounded"><strong>Heat Treatment (Pasteurization / UHT / Sterilization)</strong> <span class="font-sans text-xs bg-red-300 p-1 rounded font-bold">CCP-1 (B)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling (to 4°C for pasteurized / to 20–25°C for UHT) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Aseptic Flavour & Colour Addition (for UHT) / Pre-heat addition (for pasteurized) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-red-100 border border-red-300 rounded"><strong>Packaging (Aseptic Filling for UHT / Clean Filling for Pasteurized)</strong> <span class="font-sans text-xs bg-red-300 p-1 rounded font-bold">CCP-2 (B)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Metal Detection / X-ray Inspection <span class="font-sans text-xs bg-red-300 p-1 rounded font-bold">CCP-3 (P)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Storage (Refrigerated ≤4°C / Ambient ≤25°C for UHT)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Distribution (Cold Chain for Pasteurized / Ambient for UHT)</div>
            </div>
            <p class="mt-2 text-sm text-gray-600"><strong>Legend:</strong> (B) = Biological hazard; (P) = Physical hazard</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-6">
                <li>
                    <strong>Raw Milk Reception & Quality Testing (PRP):</strong>
                    <p class="mt-1">Incoming raw milk is subjected to platform tests before acceptance. These include:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Organoleptic examination:</strong> Visual inspection for colour, odour, and visible contamination. Rejection criteria: off-odours (rancid, sour, feed-taint), abnormal colour, visible foreign matter.</li>
                        <li><strong>Temperature check:</strong> Raw milk should arrive at ≤8°C (ideally ≤4°C). Higher temperatures indicate cold chain failure and potential microbial proliferation.</li>
                        <li><strong>COB (Clot-on-Boiling) Test / Alcohol Test (68–75% ethanol):</strong> Detects milk with high acidity (>0.18% lactic acid), high ionic calcium, or colostrum. <em>Principle:</em> Ethanol reduces the dielectric constant of the milk system, decreasing electrostatic repulsion between casein micelles and causing coagulation in unstable milk. Positive test → milk unsuitable for heat processing (will foul heat exchangers).</li>
                        <li><strong>Acidity (titratable):</strong> 0.13–0.16% lactic acid (fresh milk); >0.18% indicates developed acidity from bacterial fermentation (lactose → lactic acid by <em>Streptococcus</em>, <em>Lactobacillus</em> spp.).</li>
                        <li><strong>Fat (Gerber method):</strong> Confirms fat content for standardization calculations.</li>
                        <li><strong>SNF (by lactometer or infrared):</strong> Confirms solids-not-fat content.</li>
                        <li><strong>Adulteration tests:</strong> Starch (iodine test), urea (DMAB test), neutralizers (rosalic acid test), hydrogen peroxide (potassium dichromate test), water addition (freezing point depression by cryoscopy — pure milk: −0.520 to −0.540°C; added water raises FP toward 0°C).</li>
                        <li><strong>Methylene Blue Reduction Time (MBRT):</strong> Estimates bacterial load. Milk of good quality: decolourization >5 hours. <em>Principle:</em> Metabolically active bacteria produce reductases (NADH dehydrogenases, etc.) that transfer electrons from NADH to methylene blue (oxidized, blue) → leucomethylene blue (reduced, colourless). Faster decolourization = higher microbial load.</li>
                        <li><strong>Somatic Cell Count (SCC):</strong> >400,000 cells/mL indicates subclinical mastitis. High SCC milk has elevated proteases (plasmin) and lipases (lipoprotein lipase), causing bitterness and rancidity during storage.</li>
                        <li><strong>Antibiotic residue screening:</strong> Rapid tests (e.g., Delvotest, SNAP tests) for β-lactams, tetracyclines, sulfonamides. Presence above MRL (Maximum Residue Limits as per FSSAI) → rejection. Antibiotics inhibit starter cultures (relevant in fermented dairy) and pose public health risks (antimicrobial resistance, allergic reactions).</li>
                        <li><strong>Aflatoxin M₁ screening:</strong> Maximum permitted level: 0.5 µg/kg (FSSAI) / 0.05 µg/kg (EU). AFM₁ is the hydroxylated metabolite of Aflatoxin B₁ (produced by <em>Aspergillus flavus/parasiticus</em> in contaminated feed) formed in the liver of the animal and excreted in milk.</li>
                    </ul>
                </li>

                <li>
                    <strong>Pre-filtration / Clarification (PRP):</strong>
                    <p class="mt-1">Raw milk is passed through inline filters (mesh size ~100 µm) to remove gross physical contaminants (hair, straw, soil particles). A <strong>centrifugal clarifier</strong> (operating at 5,000–7,000 × g) is used to remove somatic cells, leucocytes, bacteria (to some extent — ~50% reduction, termed <strong>bactofugation</strong> when specifically designed), and sediment. The removed material is called <strong>clarifier sludge or slime</strong>.</p>
                </li>

                <li>
                    <strong>Milk Standardization (PRP):</strong>
                    <p class="mt-1">Standardization adjusts fat and SNF to target levels using the <strong>Pearson Square method</strong> or automated in-line standardization systems (e.g., Tetra Pak Standomat). For example, to produce toned milk (3.0% fat, 8.5% SNF), whole buffalo milk (6.5% fat) is blended with skim milk (0.1% fat). In-line systems use density meters and near-infrared (NIR) sensors for real-time composition monitoring and automatic adjustment of cream/skim ratios via proportional control valves.</p>
                    <p class="mt-1"><strong>SNF fortification:</strong> If SNF is below target, it can be increased by adding skim milk powder (SMP), milk protein concentrate (MPC), or by membrane concentration (reverse osmosis/ultrafiltration). For chocolate flavoured milk, the added cocoa and sugar contribute to total solids, so milk SNF may be slightly reduced to maintain desired viscosity and avoid an "overly thick" mouthfeel.</p>
                </li>

                <li>
                    <strong>Pre-heating (60–65°C) (PRP):</strong>
                    <p class="mt-1">The standardized milk is warmed in the regeneration section of a plate heat exchanger to 60–65°C. This serves multiple purposes:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Improved dissolution:</strong> Sugar solubility increases with temperature (sucrose: 67 g/100 mL at 20°C → 287 g/100 mL at 100°C). At 60°C, rapid dissolution of sugar and hydration of stabilizers (carrageenan requires ≥60°C for coil-to-helix transition and hydration).</li>
                        <li><strong>Reduced viscosity:</strong> Lower viscosity at elevated temperature improves mixing efficiency and homogenization.</li>
                        <li><strong>Cocoa wetting:</strong> Improved wetting and dispersion of cocoa powder, reducing lumps.</li>
                    </ul>
                </li>

                <li>
                    <strong>Ingredient Blending (oPRP):</strong>
                    <p class="mt-1">Dry ingredients are added to the pre-heated milk in a <strong>high-shear blending tank</strong> (e.g., Tetra Almix, Silverson mixer, or triblender). The order of addition is critical to prevent lumping and ensure uniform dispersion:</p>
                    <ol class="list-alpha list-outside pl-5 mt-2 space-y-2" style="list-style-type: lower-alpha;">
                        <li><strong>Dry-blend stabilizers with a portion of sugar (1:5 ratio by weight)</strong> — the sugar particles physically separate the stabilizer particles, preventing them from hydrating in clumps and forming "fish eyes" (lumps with dry centers surrounded by a hydrated outer layer). This is the <strong>dry-dispersion technique</strong>.</li>
                        <li><strong>Add the sugar-stabilizer premix to warm milk</strong> under high-shear agitation (tip speed ≥15 m/s).</li>
                        <li><strong>Add remaining sugar.</strong></li>
                        <li><strong>Add cocoa powder</strong> (pre-dispersed in warm water or sugar solution if using natural cocoa with lower wettability).</li>
                        <li><strong>Add emulsifiers</strong> (if used).</li>
                    </ol>
                    <p class="mt-2"><strong>Food Safety Control (oPRP):</strong> This step is classified as an oPRP because:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Chemical hazard:</strong> Incorrect addition of stabilizers/additives could result in exceeding FSSAI-permitted levels.</li>
                        <li><strong>Biological hazard:</strong> Dry ingredients (sugar, cocoa powder, SMP) can be sources of thermophilic spore-formers (<em>Bacillus cereus</em>, <em>Geobacillus stearothermophilus</em>), <em>Salmonella</em> (in cocoa), and <em>Cronobacter sakazakii</em> (in powdered dairy ingredients).</li>
                        <li><strong>Physical hazard:</strong> Foreign material in dry ingredients (string, plastic, insect fragments). Sieving of all dry ingredients through ≤2 mm screens before addition is mandatory.</li>
                    </ul>
                    <p class="mt-2"><strong>Action criteria:</strong> Verify batch records for ingredient weights (±2% tolerance), confirm supplier CoA (Certificate of Analysis) for each batch, verify sieve integrity before each run.</p>
                </li>

                <li>
                    <strong>De-aeration (PRP):</strong>
                    <p class="mt-1">The blended mix is passed through a <strong>vacuum de-aerator</strong> (operating at 0.3–0.5 bar absolute) to remove dissolved and entrained air. Air incorporation during mixing can be 5–8% by volume.</p>
                    <p class="mt-1"><strong>Scientific reasons for de-aeration:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Improved heat transfer:</strong> Air bubbles act as thermal insulators, reducing the effective heat transfer coefficient in heat exchangers by up to 20%, potentially leading to inadequate pasteurization/sterilization (under-processing).</li>
                        <li><strong>Prevents oxidation:</strong> Dissolved oxygen (DO) promotes <strong>lipid oxidation</strong> (autoxidation of unsaturated fatty acids via free radical chain reaction: initiation → propagation → termination), generating off-flavours (hexanal, pentanal, 2,4-decadienal — described as "cardboard", "metallic", "painty"). Target DO after de-aeration: <2 ppm.</li>
                        <li><strong>Prevents fouling:</strong> Air bubbles contribute to deposit formation on heat exchanger surfaces (particularly at the bubble-surface interface where proteins denature preferentially).</li>
                        <li><strong>Improved homogenization:</strong> Air is compressible, reducing the effective homogenization pressure at the valve and resulting in larger fat globule sizes. De-aerated product homogenizes more efficiently.</li>
                        <li><strong>Prevents foaming in filler:</strong> Excess air causes foaming during filling, leading to under-fills and inaccurate volume/weight.</li>
                    </ul>
                </li>

                <li>
                    <strong>Homogenization (oPRP):</strong>
                    <p class="mt-1">The mix is subjected to <strong>two-stage homogenization</strong> using a high-pressure homogenizer (e.g., Tetra Alex, GEA Ariete, APV Gaulin).</p>
                    <p class="mt-2"><strong>Mechanism of Homogenization:</strong> The mix is forced at high velocity through a narrow gap (typically 0.05–0.3 mm) between the valve seat and the homogenizing valve. The primary forces causing fat globule disruption are:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Turbulent micro-eddies (inertial forces):</strong> In the turbulent regime downstream of the gap, micro-eddies smaller than the fat globule cause deformation and fragmentation. This is the dominant mechanism at high Reynolds numbers (Re > 10,000).</li>
                        <li><strong>Cavitation:</strong> As the fluid accelerates through the gap, static pressure drops below the vapour pressure, forming vapour cavities that collapse violently downstream, generating intense localized shear forces and shock waves.</li>
                        <li><strong>Shear forces:</strong> The velocity gradient across the gap creates shear stress (τ = η × dv/dx) that deforms and elongates fat globules beyond their critical Weber number (We<sub>cr</sub>), causing breakup.</li>
                    </ul>
                    <p class="mt-2"><strong>Two-stage process parameters:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>First stage: 150–200 bar (2,200–2,900 PSI):</strong> Reduces average fat globule diameter from ~3.5 µm (d₃₂, Sauter mean diameter) to ~0.5–0.8 µm. This is below the minimum size at which creaming by gravity becomes negligible. Also reduces cocoa particle size. The newly formed small fat globules have enormously increased total surface area (by a factor of ~5–7×). This new surface is rapidly coated by adsorbed milk proteins — primarily <strong>caseins</strong> (which have amphiphilic structure with hydrophobic and hydrophilic segments) — forming a new membrane that replaces the native milk fat globule membrane (MFGM).</li>
                        <li><strong>Second stage: 30–50 bar (450–725 PSI):</strong> Disrupts clusters of fat globules that formed after the first stage due to sharing of newly adsorbed protein membrane between adjacent globules (a phenomenon called <strong>"bridging flocculation"</strong> or "clustering"). The second stage breaks these clusters apart, restoring individual globule identity. <strong>Without the second stage, the product would appear excessively viscous and may develop a "homogenization cluster cream layer"</strong> — a defect where clusters rise rapidly due to their large effective hydrodynamic diameter despite small individual globule size.</li>
                    </ul>
                    <p class="mt-2"><strong>Homogenization temperature:</strong> 60–70°C (above the melting point of milk fat, ~40°C). Fat must be in the liquid state for efficient disruption. Homogenizing cold milk (solid fat) is ineffective and damages the valve.</p>
                    <p class="mt-2"><strong>Homogenization position (relative to heat treatment):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Upstream homogenization (before heat treatment):</strong> Used for pasteurized flavoured milk. The homogenized mix then passes through the heating section. Risk: the non-sterile homogenizer may introduce contamination, but this is eliminated by subsequent heat treatment.</li>
                        <li><strong>Aseptic homogenization (after heat treatment):</strong> Used for UHT products. The homogenizer operates under sterile conditions (steam-sterilized before production). More expensive but eliminates re-contamination risk. Alternatively, <strong>downstream homogenization</strong> at the heating section outlet can be used where the homogenizer is positioned within the sterile zone.</li>
                    </ul>
                    <p class="mt-2"><strong>Food Safety Control (oPRP):</strong> Homogenization is an oPRP because inadequate homogenization leads to quality defects (fat separation, sedimentation) rather than direct safety hazards. However, for UHT products, aseptic integrity of the homogenizer is critical (monitoring includes sterility testing of the barrier fluid system).</p>
                </li>

                <li>
                    <strong>Heat Treatment — CCP-1 (Biological Hazard):</strong>
                    <p class="mt-1">This is the <strong>most critical step</strong> in the entire process, representing the primary intervention to eliminate pathogenic microorganisms. The heat treatment is the <strong>Critical Control Point (CCP-1)</strong>.</p>

                    <h5 class="text-md font-semibold text-gray-700 mt-3 mb-2">A. For Pasteurized Flavoured Milk — HTST Pasteurization</h5>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Specification</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Temperature</td><td class="p-2 border"><strong>72°C minimum</strong> (target: 74–76°C for safety margin)</td></tr>
                                <tr><td class="p-2 border">Holding Time</td><td class="p-2 border"><strong>15 seconds minimum</strong> (actual holding time verified by salt conductivity test)</td></tr>
                                <tr><td class="p-2 border">Equipment</td><td class="p-2 border">Plate Heat Exchanger (PHE) with holding tube</td></tr>
                                <tr><td class="p-2 border">Flow Control</td><td class="p-2 border">Magnetic flow meter + timing pump (positive displacement pump ensures constant flow rate)</td></tr>
                                <tr><td class="p-2 border">Safety Device</td><td class="p-2 border"><strong>Flow Diversion Valve (FDV)</strong> — automatically diverts under-processed milk back to raw milk balance tank if temperature at holding tube exit drops below 72°C</td></tr>
                                <tr><td class="p-2 border">Recording</td><td class="p-2 border">Continuous temperature recording on calibrated chart recorder or data logger (records retained for shelf life + 1 year minimum)</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p class="mt-2"><strong>Scientific Basis — Thermal Death Kinetics:</strong></p>
                    <p>Microbial inactivation follows <strong>first-order kinetics</strong> (log-linear model):</p>
                    <div class="bg-gray-100 p-3 rounded mt-1 text-center font-mono">
                        log₁₀(N/N₀) = −t/D<sub>T</sub>
                    </div>
                    <p class="mt-1">Where N₀ = initial count, N = count after time t, D<sub>T</sub> = decimal reduction time at temperature T (time to achieve 1-log or 90% reduction).</p>
                    <p class="mt-2">The <strong>z-value</strong> defines the temperature change needed to change D<sub>T</sub> by a factor of 10:</p>
                    <div class="bg-gray-100 p-3 rounded mt-1 text-center font-mono">
                        log₁₀(D<sub>T1</sub>/D<sub>T2</sub>) = (T₂ − T₁)/z
                    </div>

                    <div class="overflow-x-auto mt-3">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Target Organism</th>
                                    <th class="p-2 border">D<sub>72°C</sub> (seconds)</th>
                                    <th class="p-2 border">z-value (°C)</th>
                                    <th class="p-2 border">Log Reduction at 72°C/15s</th>
                                    <th class="p-2 border">Significance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong><em>Coxiella burnetii</em></strong> (Q fever agent)</td>
                                    <td class="p-2 border">~0.5–1.0</td>
                                    <td class="p-2 border">4.4–5.6</td>
                                    <td class="p-2 border">15–30 log</td>
                                    <td class="p-2 border"><strong>Historical design organism for pasteurization.</strong> Most heat-resistant non-spore-forming pathogen in milk. HTST 72°C/15s was originally designed to ensure its complete destruction.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong><em>Mycobacterium tuberculosis</em></strong></td>
                                    <td class="p-2 border">~0.3</td>
                                    <td class="p-2 border">4.5</td>
                                    <td class="p-2 border">>30 log</td>
                                    <td class="p-2 border">Cause of bovine tuberculosis; historically the most important milk-borne pathogen</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong><em>Listeria monocytogenes</em></strong></td>
                                    <td class="p-2 border">~0.2–0.4</td>
                                    <td class="p-2 border">5.5–6.5</td>
                                    <td class="p-2 border">>30 log</td>
                                    <td class="p-2 border">Psychrotrophic pathogen; can grow at refrigeration temperatures; causes listeriosis (meningitis, septicaemia, abortion)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong><em>Salmonella</em> spp.</strong></td>
                                    <td class="p-2 border">~0.1</td>
                                    <td class="p-2 border">4.5–5.5</td>
                                    <td class="p-2 border">>30 log</td>
                                    <td class="p-2 border">Enteric pathogen; low infectious dose (~10–100 cells for some serovars)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong><em>Escherichia coli</em> O157:H7</strong></td>
                                    <td class="p-2 border">~0.1</td>
                                    <td class="p-2 border">5.3</td>
                                    <td class="p-2 border">>30 log</td>
                                    <td class="p-2 border">STEC (Shiga toxin-producing); causes haemolytic uremic syndrome (HUS)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong><em>Campylobacter jejuni</em></strong></td>
                                    <td class="p-2 border">~0.02</td>
                                    <td class="p-2 border">5.4</td>
                                    <td class="p-2 border">>30 log</td>
                                    <td class="p-2 border">Most common bacterial cause of gastroenteritis globally; very heat-sensitive</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Alkaline Phosphatase (ALP)</strong> — indicator enzyme</td>
                                    <td class="p-2 border">~1.2 (at 72°C)</td>
                                    <td class="p-2 border">6.5</td>
                                    <td class="p-2 border">~12.5 log</td>
                                    <td class="p-2 border"><strong>ALP has D- and z-values slightly higher than <em>C. burnetii</em></strong>. Therefore, <strong>complete inactivation of ALP confirms adequate pasteurization</strong>. A negative phosphatase test (<4 µg p-nitrophenol/mL by Aschaffenburg-Mullen method or <350 mU/L by fluorometric method) is the <strong>gold standard verification of pasteurization adequacy</strong>.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p class="mt-3"><strong>Important Note — Effect of Added Sugar and Cocoa on Heat Resistance:</strong></p>
                    <p>The addition of sugar increases the <strong>water activity depression</strong> and <strong>total solids content</strong> of the mix, which can have a <strong>protective effect on microorganisms</strong> during heat treatment. Sugar creates a more hypertonic environment around bacterial cells, partially dehydrating them and increasing their thermal resistance (D-value increases). Studies have shown that D-values of <em>Salmonella</em> and <em>L. monocytogenes</em> increase by 1.5–3× in 10% sucrose solutions compared to buffer alone (Sumner et al., 1991). Similarly, fat content has a protective effect — fat coats bacterial cells, insulating them from heat. Therefore, for flavoured milk with high sugar and fat content, <strong>a safety margin above minimum pasteurization conditions is recommended</strong> — typically 74–76°C/15s or 72°C/25s.</p>

                    <h5 class="text-md font-semibold text-gray-700 mt-4 mb-2">B. For UHT Flavoured Milk</h5>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Direct System (Steam Injection/Infusion)</th>
                                    <th class="p-2 border">Indirect System (Tubular/Plate)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border"><strong>Temperature</strong></td><td class="p-2 border">140–150°C</td><td class="p-2 border">135–142°C</td></tr>
                                <tr><td class="p-2 border"><strong>Holding Time</strong></td><td class="p-2 border">2–4 seconds</td><td class="p-2 border">2–6 seconds</td></tr>
                                <tr><td class="p-2 border"><strong>Target F₀ value</strong></td><td class="p-2 border" colspan="2">≥5 minutes (equivalent to 5 minutes at 121.1°C with z = 10°C); ensures minimum 5-log reduction of <em>Clostridium botulinum</em> spores (12D process for botulinum cook is F₀ = 2.52 min; dairy industry uses F₀ ≥ 5 for extra safety margin, targeting thermophilic spores)</td></tr>
                                <tr><td class="p-2 border"><strong>B* (B-star) value</strong></td><td class="p-2 border" colspan="2">≥1 (indicating ≥9-log reduction of thermophilic spores with D<sub>135°C</sub> = 10.1s and z = 10.5°C) — <strong>this is the minimum sterilizing effect for commercial sterility</strong></td></tr>
                                <tr><td class="p-2 border"><strong>C* (C-star) value</strong></td><td class="p-2 border" colspan="2">≤1 (indicating ≤3% destruction of thiamine, the most heat-sensitive vitamin; used as an index of chemical/nutritional damage). Target: C* as low as possible. <strong>Direct systems achieve lower C* than indirect</strong> due to faster heating/cooling.</td></tr>
                                <tr><td class="p-2 border"><strong>Design principle</strong></td><td class="p-2 border" colspan="2"><strong>HHST (High Heat Short Time)</strong>: Because the z-value for spore inactivation (~10°C) is much lower than the z-value for chemical degradation (~25–35°C), increasing temperature while decreasing time achieves the same sterilizing effect (B* ≥ 1) while greatly reducing chemical damage (lower C*). This is the <strong>"HHST advantage"</strong> or <strong>"UHT window"</strong>.</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p class="mt-3"><strong>Direct vs. Indirect UHT Systems:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Direct (Steam Injection / Steam Infusion):</strong> Culinary-grade steam (no chemical contaminants) is injected directly into the product (injection) or the product falls as a thin film through a steam-filled chamber (infusion). Heating is <strong>near-instantaneous</strong> (~0.1s to reach 140°C), giving a very high B*/C* ratio (maximum sterilization, minimum chemical damage). The added water from condensed steam is removed in a <strong>flash cooling vacuum chamber</strong> (expansion vessel), which simultaneously cools the product from 140°C to ~70°C in <0.5 seconds. This flash cooling also removes volatile off-flavours (dimethyl sulfide, ketones) and dissolved oxygen — a beneficial "deodorizing" effect. <strong>Preferred for flavoured milk</strong> due to better flavour preservation.</li>
                        <li><strong>Indirect (Tubular or Plate Heat Exchangers):</strong> Heat is transferred through a stainless steel wall separating the product from the heating medium (hot water or steam). Slower heating profile than direct systems (several seconds for come-up). Higher C* values, more cooked flavour (β-lactoglobulin denaturation → exposure of free sulfhydryl groups → generation of hydrogen sulfide, methyl sulfide, dimethyl disulfide). More susceptible to fouling (denatured protein deposits, mineral deposits — "milkstone" composed primarily of calcium phosphate). However, lower operating costs (heat regeneration ≥90% possible) and simpler design.</li>
                    </ul>

                    <h5 class="text-md font-semibold text-gray-700 mt-4 mb-2">C. For In-Bottle Sterilized Flavoured Milk</h5>
                    <p><strong>110–120°C for 15–20 minutes</strong> in batch or continuous retorts (autoclaves). F₀ ≥ 5 minutes.</p>
                    <p class="mt-1"><strong>Disadvantages:</strong> Very high C* value; significant Maillard browning (brown colour, caramel/cooked flavour); substantial whey protein denaturation (>90% β-lactoglobulin denatured); loss of heat-labile vitamins (up to 50% vitamin C, 20% vitamin B₁, 30% vitamin B₁₂); reduced available lysine (up to 40% loss via Maillard blockage). <strong>Advantage:</strong> Very robust commercial sterility; minimal risk of post-process contamination since packaging is done before sterilization.</p>

                    <p class="mt-3"><strong>CCP-1 Monitoring and Critical Limits:</strong></p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Aspect</th>
                                    <th class="p-2 border">HTST Pasteurization</th>
                                    <th class="p-2 border">UHT Processing</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong>Critical Limit</strong></td>
                                    <td class="p-2 border">≥72°C at holding tube outlet for ≥15 seconds</td>
                                    <td class="p-2 border">≥135°C at holding tube outlet for ≥2 seconds (or equivalent F₀ ≥ 5)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Monitoring</strong></td>
                                    <td class="p-2 border">Continuous temperature recording (±0.1°C accuracy); flow rate monitoring; FDV position</td>
                                    <td class="p-2 border">Continuous temperature & pressure recording; holding tube differential pressure; flow rate</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Corrective Action (Deviation)</strong></td>
                                    <td class="p-2 border">Automatic FDV diversion → re-process or reject; identify root cause; verify sensor calibration</td>
                                    <td class="p-2 border">Automatic diversion → re-process or reject; identify root cause; full sterility check before restart</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Verification</strong></td>
                                    <td class="p-2 border">Daily phosphatase test (must be negative); weekly sensor calibration; annual holding time verification (salt conductivity test); finished product microbiology</td>
                                    <td class="p-2 border">Daily sterility incubation tests (37°C/15d + 55°C/7d); sensor calibration; commercial sterility of finished product</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Records</strong></td>
                                    <td class="p-2 border">Temperature charts, FDV records, phosphatase results, corrective action logs</td>
                                    <td class="p-2 border">Temperature-time profiles, sterility test reports, aseptic integrity records</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>

                <li>
                    <strong>Cooling (oPRP):</strong>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Pasteurized flavoured milk:</strong> Cooled to <strong>≤4°C</strong> within the PHE regeneration and cooling sections. Rapid cooling is critical to prevent outgrowth of surviving thermoduric spore-formers (<em>Bacillus cereus</em>, D<sub>100°C</sub> = 2.7–5.5 min for spores; psychrotrophic strains can germinate and grow at ≤7°C) and to minimize the duration spent in the temperature danger zone (8–60°C).</li>
                        <li><strong>UHT flavoured milk:</strong> Cooled to <strong>20–25°C</strong> (ambient temperature) for aseptic packaging. Overcooling of UHT milk before aseptic filling can cause condensation on packaging surfaces, compromising the aseptic environment.</li>
                    </ul>
                    <p class="mt-2"><strong>Food Safety Control (oPRP):</strong> Monitoring outlet temperature; deviation (temperature >4°C for pasteurized or >25°C for UHT) triggers investigation but not product rejection (hence oPRP, not CCP).</p>
                </li>

                <li>
                    <strong>Flavour & Colour Addition (oPRP):</strong>
                    <p class="mt-1">The timing and method of flavour and colour addition depends on the heat treatment type:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>For Pasteurized Flavoured Milk:</strong> Heat-stable flavours and colours can be added <strong>before pasteurization</strong> (in the blending tank). This simplifies the process and ensures uniform distribution. Volatile or heat-sensitive flavours should be added post-pasteurization in a sterile dosing system.</li>
                        <li><strong>For UHT Flavoured Milk:</strong> Flavours and colours are added <strong>after UHT treatment</strong> via an <strong>aseptic dosing system</strong>. This is critical because:
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li>Many flavour compounds are <strong>volatile esters and aldehydes</strong> (e.g., vanillin, ethyl butyrate for strawberry, isoamyl acetate for banana) with boiling points of 100–250°C that can partially evaporate or decompose at UHT temperatures (140–150°C).</li>
                                <li>Maillard reaction products from UHT processing can mask delicate flavours.</li>
                                <li><strong>Aseptic dosing</strong> involves: (a) sterilizing the flavour concentrate separately (by filtration through 0.2 µm sterile membrane filter, UV-C treatment, or thermal treatment), (b) injecting it into the sterile product line through a sterile injection port (typically a double-seat mix-proof valve with steam barrier), and (c) in-line static mixer for distribution.</li>
                            </ul>
                        </li>
                    </ul>
                    <p class="mt-2"><strong>Scientific detail on flavour-protein interactions:</strong> In milk, significant <strong>flavour binding</strong> occurs. β-lactoglobulin, the predominant whey protein, has a hydrophobic calyx (β-barrel) that binds non-polar flavour molecules (aldehydes, ketones, lactones) via hydrophobic interactions. This phenomenon, called <strong>"flavour scalping" or "flavour binding"</strong>, reduces the perceived flavour intensity and must be compensated for by adding 20–40% more flavouring than the amount needed in a water-based system. Caseins also bind flavour compounds, primarily through hydrophobic interactions with the non-polar regions of αs1-casein and β-casein. UHT processing partially unfolds β-lactoglobulin (>70% denatured at UHT conditions), exposing additional hydrophobic binding sites, which may increase flavour binding in UHT products.</p>
                </li>

                <li>
                    <strong>Packaging — CCP-2 (Biological Hazard):</strong>
                    <p class="mt-1">Packaging is the <strong>second Critical Control Point</strong>, especially for UHT flavoured milk where post-process contamination must be absolutely prevented to maintain commercial sterility.</p>

                    <h5 class="text-md font-semibold text-gray-700 mt-3 mb-2">UHT Flavoured Milk — Aseptic Packaging</h5>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Packaging materials:</strong> Multi-layer laminates (e.g., Tetra Pak Aseptic) consisting of: Polyethylene (PE, innermost — food contact, heat-sealable) → Aluminium foil (light and oxygen barrier — prevents photo-oxidation and oxidative rancidity) → Paperboard (structural rigidity) → PE (outermost — moisture barrier). Total of 6 layers.</li>
                        <li><strong>Packaging material sterilization:</strong> The packaging material is sterilized using <strong>35% hydrogen peroxide (H₂O₂)</strong> bath/spray at 70–80°C, followed by hot air (≥125°C) to evaporate residual H₂O₂ to <0.5 ppm (FSSAI/FDA limit). Alternative: combination of H₂O₂ and UV-C radiation (254 nm). The H₂O₂ acts as a strong oxidizer, destroying microbial cell membranes and DNA.</li>
                        <li><strong>Aseptic filling environment:</strong> Filling is performed in an <strong>aseptic chamber</strong> maintained under positive pressure with <strong>HEPA-filtered (99.97% efficiency at 0.3 µm) sterile air</strong> to prevent airborne contamination. The filling zone is pre-sterilized with H₂O₂ vapour or superheated steam.</li>
                        <li><strong>Seal integrity:</strong> The longitudinal seal (LS) and transverse seals (TS) are formed by induction heating of the PE-aluminium layers. Seal strength must be ≥8 N/15 mm (per Tetra Pak specifications). <strong>Seal integrity is paramount</strong> — a single compromised seal allows microbial ingress and loss of sterility.</li>
                    </ul>

                    <h5 class="text-md font-semibold text-gray-700 mt-3 mb-2">Pasteurized Flavoured Milk — Clean Packaging</h5>
                    <p>Packaged in bottles (HDPE, PET), pouches (LDPE/LLDPE), or gable-top cartons under <strong>clean (not necessarily aseptic) conditions</strong> in a sanitized environment. The product is not commercially sterile — it relies on cold chain for shelf life extension. Filling equipment is CIP (Clean-In-Place) treated and sanitized before production.</p>

                    <p class="mt-3"><strong>CCP-2 Critical Limits and Monitoring:</strong></p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Critical Limit (UHT Aseptic)</th>
                                    <th class="p-2 border">Monitoring Method</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border">H₂O₂ concentration</td>
                                    <td class="p-2 border">30–35% (w/w)</td>
                                    <td class="p-2 border">Hydrometer measurement every 4 hours</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">H₂O₂ bath temperature</td>
                                    <td class="p-2 border">≥70°C</td>
                                    <td class="p-2 border">Continuous temperature sensor</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Residual H₂O₂ in package</td>
                                    <td class="p-2 border"><0.5 ppm</td>
                                    <td class="p-2 border">Quantitative peroxide strip test (every 30 min)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Aseptic chamber air pressure</td>
                                    <td class="p-2 border">Positive pressure (≥3 Pa above ambient)</td>
                                    <td class="p-2 border">Differential pressure manometer (continuous)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Seal integrity</td>
                                    <td class="p-2 border">No leaks; seal strength ≥8 N/15 mm</td>
                                    <td class="p-2 border">Visual inspection; dye penetration test (periodic); tear-down test (every 30 min)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Package sterility</td>
                                    <td class="p-2 border">No microbial growth after incubation</td>
                                    <td class="p-2 border">Random sampling → incubation at 37°C/15d and 55°C/7d; one package per 1,000 produced</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>

                <li>
                    <strong>Metal Detection / X-ray Inspection — CCP-3 (Physical Hazard):</strong>
                    <p class="mt-1">All finished packages pass through a <strong>metal detector</strong> and/or <strong>X-ray inspection system</strong> to detect physical contaminants (metal fragments from equipment wear, wire bristles from cleaning brushes, stones, glass, dense plastic). This is a CCP for physical hazards.</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Detection System</th>
                                    <th class="p-2 border">Critical Limit</th>
                                    <th class="p-2 border">Verification</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border">Metal Detector</td>
                                    <td class="p-2 border">Ferrous: ≥1.5 mm; Non-ferrous: ≥2.0 mm; Stainless Steel 316: ≥2.5 mm</td>
                                    <td class="p-2 border">Test with certified test pieces at start, every 2 hours, and end of production. Automatic reject and reject confirmation must be verified.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">X-ray Inspection</td>
                                    <td class="p-2 border">Detection of metal, glass, stone, bone, dense plastic ≥2.0 mm</td>
                                    <td class="p-2 border">Test with density-specific test cards; sensitivity verification per shift</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2"><strong>Note:</strong> For aluminium-foil laminated packages (Tetra Pak), conventional metal detectors have limited sensitivity due to the aluminium layer. <strong>X-ray inspection is the preferred technology</strong> for such packages.</p>
                </li>

                <li>
                    <strong>Storage and Distribution:</strong>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Pasteurized flavoured milk:</strong> Stored at <strong>≤4°C</strong> in refrigerated cold stores. Cold chain must be maintained throughout distribution. Shelf life: <strong>7–14 days</strong> (can extend to 21 days with excellent hygiene and ESL — Extended Shelf Life technology, i.e., pasteurization at 123–127°C for 1–2 seconds + aseptic or ultra-clean filling).</li>
                        <li><strong>UHT flavoured milk:</strong> Stored at <strong>ambient temperature (≤25°C recommended; ≤30°C maximum)</strong>. Avoid direct sunlight exposure (even through packaging — UV radiation can penetrate thin paperboard and catalyze photo-oxidation of riboflavin, generating singlet oxygen that attacks methionine → methional → "sunlight flavour" or "light-induced off-flavour"). Shelf life: <strong>6–9 months</strong> (depending on product formulation, packaging integrity, and storage temperature).</li>
                        <li><strong>In-bottle sterilized:</strong> Ambient storage; shelf life: <strong>6–12 months</strong>.</li>
                    </ul>

                    <p class="mt-2"><strong>Temperature Abuse and Microbial Growth:</strong> In pasteurized flavoured milk, the primary spoilage concern is <strong>psychrotrophic bacteria</strong> — organisms that grow at ≤7°C even though their optimum growth temperature is higher (20–30°C). Key organisms include <em>Pseudomonas fluorescens/putida</em> (post-pasteurization contaminant; not a pathogen but produces heat-stable extracellular proteases and lipases that cause bitterness and rancidity even in UHT milk) and psychrotrophic strains of <em>Bacillus cereus</em> (spore-former; pathogenic; produces diarrheal enterotoxin at ≥4°C). Temperature abuse to >7°C dramatically reduces shelf life — Q₁₀ for bacterial growth is ~2–3, meaning each 10°C increase doubles to triples the growth rate.</p>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">HACCP Summary Table</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">CCP</th>
                            <th class="p-2 border">Step</th>
                            <th class="p-2 border">Hazard</th>
                            <th class="p-2 border">Critical Limit</th>
                            <th class="p-2 border">Monitoring</th>
                            <th class="p-2 border">Corrective Action</th>
                            <th class="p-2 border">Verification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>CCP-1</strong></td>
                            <td class="p-2 border">Heat Treatment</td>
                            <td class="p-2 border">Biological — survival of pathogens</td>
                            <td class="p-2 border">HTST: ≥72°C/15s; UHT: ≥135°C/2s</td>
                            <td class="p-2 border">Continuous T-t recording; FDV position</td>
                            <td class="p-2 border">Auto-divert; re-process; root cause analysis</td>
                            <td class="p-2 border">Phosphatase test; sterility incubation; sensor calibration</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>CCP-2</strong></td>
                            <td class="p-2 border">Packaging</td>
                            <td class="p-2 border">Biological — post-process contamination (UHT); Chemical — residual H₂O₂</td>
                            <td class="p-2 border">H₂O₂ ≥30%; bath ≥70°C; residual <0.5 ppm; positive chamber pressure; seal integrity</td>
                            <td class="p-2 border">T, concentration, pressure sensors; seal inspection</td>
                            <td class="p-2 border">Stop production; isolate suspect product; investigate; restart after full aseptic verification</td>
                            <td class="p-2 border">Incubation tests; H₂O₂ residual analysis; environmental monitoring</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>CCP-3</strong></td>
                            <td class="p-2 border">Metal/X-ray Detection</td>
                            <td class="p-2 border">Physical — foreign bodies (metal, glass, stone)</td>
                            <td class="p-2 border">Fe ≥1.5 mm; Non-Fe ≥2.0 mm; SS ≥2.5 mm detected and rejected</td>
                            <td class="p-2 border">Continuous; test piece verification every 2 hours</td>
                            <td class="p-2 border">Isolate rejected packs; hold and re-inspect product since last good test; investigate source</td>
                            <td class="p-2 border">Test piece records; reject count analysis; equipment maintenance logs</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Common Defects in Flavoured Milk — Causes and Prevention</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
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
                            <td class="p-2 border"><strong>Sedimentation</strong></td>
                            <td class="p-2 border">Cocoa/mineral particles settle to bottom forming a hard pack</td>
                            <td class="p-2 border">Inadequate stabilizer level; insufficient homogenization; particle size too large; low viscosity</td>
                            <td class="p-2 border">Optimize carrageenan/gellan gum level; ensure d₅₀ <15 µm; two-stage homogenization at ≥150 bar; increase total solids</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fat Separation (Creaming)</strong></td>
                            <td class="p-2 border">Cream layer or fat plug at top of package</td>
                            <td class="p-2 border">Inadequate homogenization; homogenizer valve worn; homogenization at too low temperature (fat crystallized)</td>
                            <td class="p-2 border">Maintain homogenization at 60–70°C; verify homogenization efficiency (NIZO value ≥80%); replace worn valve parts</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Gelation (Age Gelation)</strong></td>
                            <td class="p-2 border">Product becomes viscous and eventually forms a gel during storage (particularly UHT)</td>
                            <td class="p-2 border">Heat-resistant proteases from psychrotrophic bacteria (especially <em>Pseudomonas</em> spp.) in raw milk hydrolyze casein, eventually destabilizing the colloidal system. Also, β-lactoglobulin-κ-casein complexes slowly rearrange, cross-link, and aggregate.</td>
                            <td class="p-2 border">Ensure low raw milk bacterial count (<100,000 CFU/mL); minimize pre-processing storage time; consider adding sodium hexametaphosphate (SHMP, 0.05–0.1%) as a calcium sequestrant to improve protein stability; storage at <25°C (gelation is temperature-dependent, following Arrhenius kinetics)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Cooked/Caramelized Flavour</strong></td>
                            <td class="p-2 border">Pronounced cooked, caramel, or "eggy" taste</td>
                            <td class="p-2 border">Excessive heat treatment (high C* value); high sugar content accelerating Maillard reaction; indirect UHT with long come-up time</td>
                            <td class="p-2 border">Use direct UHT system; minimize C* value; use pre-crystallized sugar; reduce unnecessary heating</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Oxidized/Light Flavour</strong></td>
                            <td class="p-2 border">"Cardboard," "metallic," or "painty" off-flavour</td>
                            <td class="p-2 border">Lipid autoxidation catalyzed by dissolved oxygen, light exposure (riboflavin-sensitized photo-oxidation), copper/iron contamination</td>
                            <td class="p-2 border">De-aerate to <2 ppm DO; use light-barrier packaging (aluminium foil layer); avoid copper/iron contact surfaces; add permitted antioxidants (e.g., ascorbyl palmitate, tocopherols)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Bitter Flavour</strong></td>
                            <td class="p-2 border">Progressive bitterness developing during storage</td>
                            <td class="p-2 border">Proteolysis by heat-stable proteases (from <em>Pseudomonas</em>) or plasmin (indigenous milk enzyme); releases hydrophobic bitter peptides from casein, particularly from β-casein (C-terminal fragments rich in proline, valine, leucine)</td>
                            <td class="p-2 border">Good raw milk quality (low SCC, low psychrotrophic count); effective pre-pasteurization to inactivate plasminogen activators</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Colour Fading</strong></td>
                            <td class="p-2 border">Loss of colour intensity during storage</td>
                            <td class="p-2 border">Photo-degradation of colour compounds; Maillard reaction products masking original colour; pH shift affecting pH-sensitive colourants (e.g., anthocyanins in berry flavours)</td>
                            <td class="p-2 border">Use light-stable colours; protect from light; use alkalized cocoa (pH-stable); buffer pH if needed</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Package Swelling (Blown Packs)</strong></td>
                            <td class="p-2 border">Package visibly distended with gas</td>
                            <td class="p-2 border">Microbial growth — gas-producing organisms (coliforms, <em>Clostridium</em> spp., yeast); indicates packaging integrity failure (UHT) or post-contamination</td>
                            <td class="p-2 border">Verify aseptic packaging integrity; check seal quality; incubation testing; environmental monitoring of filling room</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fat Destabilization / Oiling Off</strong></td>
                            <td class="p-2 border">Free fat visible on surface; greasy mouthfeel</td>
                            <td class="p-2 border">Excessive homogenization pressure (>250 bar) causing "over-homogenization" — fat globules become too small, insufficient surface protein to cover them → coalescence; or damage to emulsion during pumping/transportation</td>
                            <td class="p-2 border">Optimize homogenization pressure (150–200 bar first stage); add emulsifiers; gentle post-homogenization handling</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Quality Control Tests for Flavoured Milk</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Test</th>
                            <th class="p-2 border">Method/Principle</th>
                            <th class="p-2 border">Frequency</th>
                            <th class="p-2 border">Standard/Target</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border">Fat Content</td>
                            <td class="p-2 border">Gerber method (BIS:1224-Part 1) or Mojonnier ether extraction or FTIR (Milkoscan)</td>
                            <td class="p-2 border">Every batch</td>
                            <td class="p-2 border">As per declared label; ±0.2% tolerance</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">SNF Content</td>
                            <td class="p-2 border">Gravimetric (IS:1479-Part II) or FTIR</td>
                            <td class="p-2 border">Every batch</td>
                            <td class="p-2 border">As per milk type standard</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Total Solids</td>
                            <td class="p-2 border">Oven drying (103°C for 3 hours) or refractometry</td>
                            <td class="p-2 border">Every batch</td>
                            <td class="p-2 border">As per formulation target</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Sucrose Content</td>
                            <td class="p-2 border">Polarimetry (Lane-Eynon method) or HPLC</td>
                            <td class="p-2 border">Every batch</td>
                            <td class="p-2 border">Within ±0.5% of declared value</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Viscosity</td>
                            <td class="p-2 border">Brookfield viscometer (spindle #1 or #2, 60 RPM, 20°C)</td>
                            <td class="p-2 border">Every batch</td>
                            <td class="p-2 border">Target: 10–50 mPa·s (varies by product; chocolate > vanilla)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">pH</td>
                            <td class="p-2 border">pH meter (calibrated with pH 4.0 and 7.0 buffers)</td>
                            <td class="p-2 border">Every batch</td>
                            <td class="p-2 border">6.4–6.8 (natural cocoa may lower to 6.2)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Colour (L*, a*, b*)</td>
                            <td class="p-2 border">Spectrophotometric colour measurement (CIE L*a*b* colour space) using Hunter Lab or Konica Minolta colorimeter</td>
                            <td class="p-2 border">Every batch</td>
                            <td class="p-2 border">Within ΔE <2.0 of standard (barely perceptible colour difference)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Homogenization Efficiency</td>
                            <td class="p-2 border">NIZO method (centrifuge at 1000 × g for 30 min; compare fat in upper and lower layers) or laser diffraction particle size analysis (Malvern Mastersizer)</td>
                            <td class="p-2 border">Every batch</td>
                            <td class="p-2 border">NIZO value ≥80%; d₃₂ (fat) ≤0.8 µm</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Sedimentation Test</td>
                            <td class="p-2 border">Centrifuge method (500 × g for 10 min; measure sediment volume) or shelf-life simulation (store at 25°C for 30 days, visually assess sedimentation)</td>
                            <td class="p-2 border">Every batch (centrifuge); accelerated shelf life studies (periodic)</td>
                            <td class="p-2 border">Sediment ≤0.5 mL per 100 mL</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Phosphatase Test</td>
                            <td class="p-2 border">Aschaffenburg-Mullen (colourimetric) or Fluorophos (fluorometric, IS:5765)</td>
                            <td class="p-2 border">Every batch (pasteurized)</td>
                            <td class="p-2 border">Negative (<350 mU/L)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Turbidity Test</td>
                            <td class="p-2 border">Ammonium sulphate method (for sterilized/UHT): add saturated (NH₄)₂SO₄ → if clear = all whey protein denatured = adequate sterilization; turbid = inadequate</td>
                            <td class="p-2 border">Every batch (UHT/sterilized)</td>
                            <td class="p-2 border">Negative (clear supernatant)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Sterility Test (UHT)</td>
                            <td class="p-2 border">Incubation: 37°C for 15 days (mesophiles) + 55°C for 7 days (thermophiles); visual inspection for swelling, off-odour, pH change (>0.5 unit), and plating on PCA/VRBA</td>
                            <td class="p-2 border">1 per 1,000 packages (minimum); all production represented</td>
                            <td class="p-2 border">No microbial growth; no pH change; no visual defects</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Sensory Evaluation</td>
                            <td class="p-2 border">Trained panel (6–10 panellists); descriptive profiling using a 9-point hedonic scale or quantitative descriptive analysis (QDA) for attributes: colour, sweetness, flavour intensity, body, mouthfeel, aftertaste</td>
                            <td class="p-2 border">Every batch (in-line); monthly detailed profiling</td>
                            <td class="p-2 border">Score ≥7/9 on hedonic scale; no off-flavours</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Typical Formulation Example — Chocolate Flavoured Milk (Toned Milk Base)</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Ingredient</th>
                            <th class="p-2 border">% (w/w)</th>
                            <th class="p-2 border">Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Toned Milk (3.0% fat, 8.5% SNF)</td><td class="p-2 border">86.47</td><td class="p-2 border">Base; provides protein, fat, lactose, minerals, vitamins</td></tr>
                        <tr><td class="p-2 border">Sucrose (refined sugar)</td><td class="p-2 border">7.00</td><td class="p-2 border">Sweetener; contributes to body and mouthfeel</td></tr>
                        <tr><td class="p-2 border">Skim Milk Powder (SMP)</td><td class="p-2 border">2.00</td><td class="p-2 border">SNF fortification; improves body and protein content</td></tr>
                        <tr><td class="p-2 border">Alkalized Cocoa Powder (10–12% fat)</td><td class="p-2 border">1.20</td><td class="p-2 border">Flavour and colour; source of polyphenols</td></tr>
                        <tr><td class="p-2 border">Liquid Glucose (DE 42)</td><td class="p-2 border">3.00</td><td class="p-2 border">Co-sweetener; reduces sweetness intensity; improves body; depresses water activity more effectively than sucrose per unit weight</td></tr>
                        <tr><td class="p-2 border">κ-Carrageenan (refined)</td><td class="p-2 border">0.020</td><td class="p-2 border">Suspension stabilizer; prevents cocoa sedimentation via casein-carrageenan gel network</td></tr>
                        <tr><td class="p-2 border">Microcrystalline Cellulose + CMC (co-processed)</td><td class="p-2 border">0.10</td><td class="p-2 border">Co-stabilizer; provides colloidal network for particle suspension without excessive viscosity</td></tr>
                        <tr><td class="p-2 border">Mono- and Diglycerides (GMS, INS 471)</td><td class="p-2 border">0.10</td><td class="p-2 border">Emulsifier; aids fat globule stability and improves mouthfeel</td></tr>
                        <tr><td class="p-2 border">Vanillin</td><td class="p-2 border">0.01</td><td class="p-2 border">Flavour enhancer; rounds out chocolate flavour profile</td></tr>
                        <tr><td class="p-2 border">Salt (NaCl)</td><td class="p-2 border">0.08</td><td class="p-2 border">Flavour enhancer; suppresses bitterness (ion-mediated taste modulation via ENaC channels)</td></tr>
                        <tr><td class="p-2 border"><strong>Total</strong></td><td class="p-2 border"><strong>100.00</strong></td><td class="p-2 border"></td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2"><strong>Calculated composition of final product:</strong> Fat ~2.72%, Protein ~3.35%, Total Solids ~17.2%, Energy ~85 kcal/100 mL</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Nutritional Comparison — Plain Milk vs. Flavoured Milk (per 100 mL)</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Nutrient</th>
                            <th class="p-2 border">Plain Toned Milk</th>
                            <th class="p-2 border">Chocolate Flavoured Milk (Toned Base)</th>
                            <th class="p-2 border">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Energy (kcal)</td><td class="p-2 border">58</td><td class="p-2 border">85</td><td class="p-2 border">+47% due to added sugar; however, studies show flavoured milk consumers still have better overall dairy nutrient intake</td></tr>
                        <tr><td class="p-2 border">Protein (g)</td><td class="p-2 border">3.2</td><td class="p-2 border">3.4</td><td class="p-2 border">Slightly higher due to SMP fortification</td></tr>
                        <tr><td class="p-2 border">Fat (g)</td><td class="p-2 border">3.0</td><td class="p-2 border">2.7</td><td class="p-2 border">Slightly lower due to dilution by non-fat ingredients</td></tr>
                        <tr><td class="p-2 border">Carbohydrate (g)</td><td class="p-2 border">4.9 (all lactose)</td><td class="p-2 border">12.0 (lactose + sucrose + glucose)</td><td class="p-2 border">Significant increase; added sugars ~7 g per 100 mL</td></tr>
                        <tr><td class="p-2 border">Calcium (mg)</td><td class="p-2 border">120</td><td class="p-2 border">108</td><td class="p-2 border">~10% reduction due to dilution; cocoa oxalates may slightly reduce calcium bioavailability</td></tr>
                        <tr><td class="p-2 border">Phosphorus (mg)</td><td class="p-2 border">93</td><td class="p-2 border">95</td><td class="p-2 border">Comparable; cocoa provides additional phosphorus</td></tr>
                        <tr><td class="p-2 border">Riboflavin (mg)</td><td class="p-2 border">0.17</td><td class="p-2 border">0.15</td><td class="p-2 border">Slight reduction; sensitive to light — aluminium foil packaging critical</td></tr>
                        <tr><td class="p-2 border">Vitamin B₁₂ (µg)</td><td class="p-2 border">0.5</td><td class="p-2 border">0.4</td><td class="p-2 border">Moderate heat loss during UHT processing</td></tr>
                        <tr><td class="p-2 border">Theobromine (mg)</td><td class="p-2 border">0</td><td class="p-2 border">15–20</td><td class="p-2 border">From cocoa; mild stimulant and vasodilator</td></tr>
                        <tr><td class="p-2 border">Polyphenols (mg GAE)</td><td class="p-2 border">Negligible</td><td class="p-2 border">20–35</td><td class="p-2 border">From cocoa; antioxidant properties; however, binding with casein may reduce bioavailability</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shelf Life Determinants and Degradation Kinetics</h3>
            <p>The shelf life of flavoured milk is determined by the <strong>rate-limiting deterioration mechanism</strong>, which differs by product type:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Product Type</th>
                            <th class="p-2 border">Primary Shelf Life Limiting Factor</th>
                            <th class="p-2 border">Secondary Factors</th>
                            <th class="p-2 border">Typical Shelf Life</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Pasteurized</strong></td>
                            <td class="p-2 border">Microbial spoilage (psychrotrophic bacteria — <em>Pseudomonas, Bacillus</em> spp.); follows sigmoidal growth curve; lag phase → log phase → stationary phase</td>
                            <td class="p-2 border">Lipid oxidation; colour fading; physical separation</td>
                            <td class="p-2 border">7–14 days at ≤4°C</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>UHT</strong></td>
                            <td class="p-2 border">Physico-chemical changes: age gelation (enzymatic and non-enzymatic protein cross-linking), sedimentation, Maillard browning (follows zero-order kinetics: colour change ΔE ∝ time), lipid oxidation</td>
                            <td class="p-2 border">Flavour change; vitamin degradation (first-order kinetics for vitamin C: C = C₀ × e^(-kt))</td>
                            <td class="p-2 border">6–9 months at ≤25°C</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>In-Bottle Sterilized</strong></td>
                            <td class="p-2 border">Maillard browning (extensive — already advanced due to severe heat treatment); physical sedimentation</td>
                            <td class="p-2 border">Vitamin loss; protein quality deterioration (lysine blockage)</td>
                            <td class="p-2 border">6–12 months at ambient</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p class="mt-3"><strong>Accelerated Shelf Life Testing (ASLT):</strong> For UHT products, shelf life is predicted using elevated temperature storage (37°C or 40°C) and applying the <strong>Arrhenius equation</strong> to extrapolate to actual storage temperature:</p>
            <div class="bg-gray-100 p-4 rounded mt-2 text-center font-mono">
                k = A × e^(−E<sub>a</sub> / RT)
            </div>
            <p class="mt-2">Where k = rate constant of degradation, A = pre-exponential factor, E<sub>a</sub> = activation energy (kJ/mol), R = gas constant (8.314 J/mol·K), T = absolute temperature (K). The <strong>Q₁₀ value</strong> (ratio of rate constants at temperatures 10°C apart) for Maillard browning in milk is typically 2.5–3.5, meaning storage at 37°C for 1 month approximates ~3 months at 25°C.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Clean-In-Place (CIP) for Flavoured Milk Processing Equipment</h3>
            <p>Flavoured milk, especially chocolate milk, creates more challenging fouling deposits than plain milk due to the combination of protein/mineral deposits (Type A and Type B fouling) plus cocoa particles and caramelized sugar. A typical CIP sequence for the UHT plant and homogenizer:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Step</th>
                            <th class="p-2 border">Agent</th>
                            <th class="p-2 border">Concentration</th>
                            <th class="p-2 border">Temperature</th>
                            <th class="p-2 border">Duration</th>
                            <th class="p-2 border">Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">1</td><td class="p-2 border">Warm water rinse</td><td class="p-2 border">—</td><td class="p-2 border">40–50°C</td><td class="p-2 border">10 min</td><td class="p-2 border">Remove gross residues; lower product loss</td></tr>
                        <tr><td class="p-2 border">2</td><td class="p-2 border">Caustic (NaOH)</td><td class="p-2 border">1.5–2.0% w/v</td><td class="p-2 border">75–85°C</td><td class="p-2 border">30 min</td><td class="p-2 border">Dissolve protein deposits (saponification of fats, hydrolysis/solubilization of denatured proteins, swelling and removal of biofilms); cocoa fat removal</td></tr>
                        <tr><td class="p-2 border">3</td><td class="p-2 border">Intermediate water rinse</td><td class="p-2 border">—</td><td class="p-2 border">Ambient</td><td class="p-2 border">5 min</td><td class="p-2 border">Remove alkali residues</td></tr>
                        <tr><td class="p-2 border">4</td><td class="p-2 border">Acid (HNO₃ or H₃PO₄)</td><td class="p-2 border">0.5–1.0% w/v</td><td class="p-2 border">65–70°C</td><td class="p-2 border">20 min</td><td class="p-2 border">Dissolve mineral deposits (milkstone — calcium phosphate, Ca₃(PO₄)₂); remove alkali-insoluble residues</td></tr>
                        <tr><td class="p-2 border">5</td><td class="p-2 border">Final water rinse</td><td class="p-2 border">—</td><td class="p-2 border">Ambient</td><td class="p-2 border">5 min</td><td class="p-2 border">Remove acid residues; verify conductivity ≤50 µS/cm (near potable water quality)</td></tr>
                        <tr><td class="p-2 border">6</td><td class="p-2 border">Hot water sanitization OR chemical sanitization (peracetic acid 0.1–0.15%)</td><td class="p-2 border">—</td><td class="p-2 border">90–95°C (hot water) / ambient (PAA)</td><td class="p-2 border">15–20 min / 10 min</td><td class="p-2 border">Destroy residual microorganisms; peracetic acid (CH₃COOOH) is preferred as it is effective at ambient temperature, breaks down to acetic acid + oxygen (no toxic residues), and is effective against biofilms</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2"><strong>CIP verification:</strong> Visual inspection (where possible), swab testing (ATP bioluminescence — pass threshold ≤10 RLU for product contact surfaces), allergen rinse testing (for lines shared with soy/nut-based beverages — ELISA testing for specific allergen proteins), chemical residual testing (titration for NaOH/acid in final rinse water).</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Emerging Trends in Flavoured Milk Technology</h3>
            <ul class="list-disc list-outside pl-5 space-y-3">
                <li><strong>Clean Label Stabilization:</strong> Consumer demand for "no artificial ingredients" is driving the use of clean-label alternatives such as <strong>citrus fibre, locust bean gum, gellan gum</strong>, and <strong>native starches</strong> to replace synthetic-sounding carrageenan and CMC. Pectin-casein complexation at pH 4.0–5.0 is being explored for acidified flavoured milk drinks.</li>
                <li><strong>High-Pressure Processing (HPP):</strong> Non-thermal pasteurization at 400–600 MPa for 3–5 minutes. Inactivates vegetative pathogens while preserving heat-sensitive flavours, colours, and vitamins. Does not inactivate spores (not equivalent to sterilization). Currently limited to refrigerated products. Preserves the native structure of whey proteins (no denaturation), resulting in better flavour and nutritional quality.</li>
                <li><strong>Pulsed Electric Field (PEF):</strong> Short pulses (µs) of high-voltage electric fields (20–40 kV/cm) cause electroporation of microbial cell membranes, leading to cell death. Temperature rise is minimal (<40°C). Preserves fresh-like quality. Being explored for flavoured milk as a pre-treatment to reduce microbial load before mild pasteurization.</li>
                <li><strong>Protein Fortification:</strong> Addition of <strong>whey protein concentrate (WPC 80)</strong>, <strong>micellar casein concentrate (MCC)</strong>, or <strong>milk protein isolate (MPI)</strong> to create "high-protein flavoured milk" (8–15 g protein per serving). Popular in sports nutrition segment. Requires careful formulation to avoid excessive viscosity and heat-induced gelation.</li>
                <li><strong>Sugar Reduction Strategies:</strong> Use of <strong>stevia + monk fruit extract</strong> blends (synergistic sweetness, reduced off-taste), <strong>sweet whey permeate</strong> (naturally contains lactose for sweetness), <strong>enzymatic lactose hydrolysis</strong> (glucose + galactose from lactase treatment — 70% sweeter than lactose), and <strong>flavour modulating compounds</strong> (e.g., Symrise Sweetness Enhancers) that amplify sweetness perception without adding sugar.</li>
                <li><strong>Probiotic Flavoured Milk:</strong> Incorporation of <em>Lactobacillus acidophilus</em>, <em>L. casei</em>, <em>Bifidobacterium lactis</em> at levels ≥10⁶ CFU/mL at end of shelf life. Must be added post-pasteurization; not compatible with UHT processing. Requires strict cold chain. FSSAI mandates minimum 10⁸ CFU/g at the time of manufacture for probiotic claims.</li>
                <li><strong>Fortification with Micronutrients:</strong> Vitamin D₃ (cholecalciferol, fat-soluble, added in oil emulsion; 200–400 IU per serving), iron (ferrous bisglycinate chelate — highest bioavailability, does not cause oxidation or off-flavour unlike ferrous sulphate), zinc, and omega-3 fatty acids (microencapsulated DHA/EPA) for functional flavoured milk targeting child nutrition.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Key Points Summary</h3>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li>Flavoured milk is a complex colloidal system requiring careful balance of emulsion stability (fat), suspension stability (cocoa/additives), and microbial safety.</li>
                <li>κ-Carrageenan at 100–300 ppm is the gold-standard stabilizer for chocolate milk due to its specific electrostatic interaction with κ-casein on casein micelle surfaces, creating a weak thixotropic gel that suspends cocoa particles.</li>
                <li>Two-stage homogenization (150–200 bar / 30–50 bar) is essential for emulsion stability and uniform texture; the second stage prevents bridging flocculation.</li>
                <li>HTST pasteurization (72°C/15s) is designed around the thermal resistance of <em>Coxiella burnetii</em>; alkaline phosphatase (ALP) inactivation serves as the verification indicator. Added sugar and fat increase microbial heat resistance — a safety margin is recommended.</li>
                <li>UHT processing (135–150°C/2–4s) achieves commercial sterility (B* ≥ 1) with minimal chemical damage (C* ≤ 1); direct systems (steam injection/infusion) offer superior flavour preservation over indirect systems.</li>
                <li>Aseptic packaging integrity is the second CCP — H₂O₂ sterilization of packaging material, HEPA-filtered positive-pressure filling zone, and rigorous seal integrity monitoring are critical.</li>
                <li>Post-process flavour addition via aseptic dosing preserves volatile flavour compounds in UHT products.</li>
                <li>Age gelation, sedimentation, Maillard browning, and lipid oxidation are the primary quality deterioration mechanisms during storage of UHT flavoured milk.</li>
            </ul>
        `
    },
    hi: {
        title: "Flavoured Milk Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Flavoured Milk ka Parichay (Introduction)</h3>
            <p>Flavoured milk ek value-added, meetha dairy beverage hai jo standardized milk mein sugar, flavouring agents, colouring matter, aur approved stabilizers milaakar banaya jaata hai. <strong>Codex Alimentarius (CODEX STAN 243-2003)</strong> ke anusaar, flavoured milk composite milk products ki category mein aata hai jahan non-dairy ingredients milaye jaate hain, lekin milk-derived portion predominant (mukhya) component hona chahiye. Ye commercially do forms mein available hota hai — pasteurized product (jise cold-chain ≤4°C par rakhna zaroori hai) ya phir ultra-high-temperature (UHT) treated product jo commercial sterility achieve karta hai aur ambient temperature par shelf-stable rehta hai.</p>
            <p class="mt-2">Flavoured milk ek nutritionally strategic vehicle hai, khaaskar paediatric (bachhon) aur adolescent (kishoron) population ke liye, kyunki ye bioavailable calcium (~120 mg per 100 mL), high-quality whey aur casein proteins (jismein sabhi essential amino acids hain including leucine jo muscle protein synthesis ke liye critical hai), riboflavin (vitamin B₂), vitamin B₁₂, phosphorus, potassium, aur vitamin D (jab fortified ho) ek palatable (swadisht) format mein deliver karta hai. <em>Journal of the American Dietetic Association</em> mein published studies ne dikhaya hai ki flavoured milk consumption se overall dairy intake badhta hai aur nutrient adequacy improve hoti hai bina total energy intake ko significantly badhaye jab ise balanced diet ke hisse ke roop mein liya jaaye (Murphy et al., 2008). Global flavoured milk market ki value 2023 mein lagbhag USD 53.4 billion thi, jismein compound annual growth rate (CAGR) ~6.2% hai, jo convenience-based nutrition ki demand se driven hai.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Flavoured Milk ka Classification (Vargikaran)</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Classification ka Aadhar</th>
                            <th class="p-2 border">Prakar (Type)</th>
                            <th class="p-2 border">Vivaran (Description)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border" rowspan="3"><strong>Heat Treatment ke Aadhar par</strong></td>
                            <td class="p-2 border">Pasteurized Flavoured Milk</td>
                            <td class="p-2 border">HTST (72°C/15 s) ya LTLT (63°C/30 min); shelf life 7–14 din ≤4°C par</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">UHT Flavoured Milk</td>
                            <td class="p-2 border">135–150°C par 2–4 seconds; aseptically packed; shelf life 6–9 mahine ambient temperature par</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">In-Bottle Sterilized</td>
                            <td class="p-2 border">110–120°C par 15–20 minute; shelf life 6–12 mahine ambient par; zyada intense cooked flavour aata hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border" rowspan="5"><strong>Flavour Type ke Aadhar par</strong></td>
                            <td class="p-2 border">Chocolate / Cocoa</td>
                            <td class="p-2 border">Duniya bhar mein sabse popular; cocoa powder (10–22% fat, alkalized ya natural) use hota hai; suspension stability chahiye</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Strawberry</td>
                            <td class="p-2 border">Natural ya nature-identical flavouring; permitted red colour use hota hai (jaise carmine, beetroot red)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Vanilla</td>
                            <td class="p-2 border">Vanillin (synthetic) ya vanilla extract; halka flavour profile</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Banana</td>
                            <td class="p-2 border">Isoamyl acetate-based flavouring; South Asian markets mein popular</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Elaichi / Gulab / Kesar</td>
                            <td class="p-2 border">Traditional Indian variants; natural extracts use hote hain; growing premium segment hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border" rowspan="3"><strong>Fat Level ke Aadhar par</strong></td>
                            <td class="p-2 border">Full-fat Flavoured Milk</td>
                            <td class="p-2 border">≥3.0% fat (corresponding standardized milk type ke anusaar)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Low-fat Flavoured Milk</td>
                            <td class="p-2 border">1.0–2.0% fat; "light" ya "lite" ke naam se market kiya jaata hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Skimmed Flavoured Milk</td>
                            <td class="p-2 border">≤0.5% fat; kam calorie content</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards Flavoured Milk ke liye</h3>
            <p>Food Safety and Standards Authority of India (FSSAI), <strong>Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011</strong> ke antargat, flavoured milk ko <strong>Clause 2.1.8</strong> mein define kiya hai. Isme likha hai: <em>"Flavoured milk ka matlab hai wo product jo milk se tayyar kiya gaya ho jismein approved flavouring, sweetening agents, aur colours milaye gaye hon."</em> Mukhya compositional aur microbiological requirements neeche di gayi hain:</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Compositional Standards (Sanrachna Manak)</h4>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Requirement (Aavashyakta)</th>
                            <th class="p-2 border">Vaigyanik Karan (Scientific Rationale)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat (% m/m)</strong></td>
                            <td class="p-2 border">Use kiye gaye milk type ke liye nirdharit minimum se kam nahi hona chahiye (jaise Toned ≥3.0%, Double Toned ≥1.5%, Standardized ≥4.5% bhains ka ya ≥3.0% gaay ka, Skimmed ≤0.5%)</td>
                            <td class="p-2 border">Fat mouthfeel, body, flavour perception mein yogdaan deta hai (fat-soluble aroma compounds lipid phase mein partition hote hain), aur satiety signalling mein madad karta hai cholecystokinin (CCK) release ke through.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Solids-Not-Fat (SNF) (% m/m)</strong></td>
                            <td class="p-2 border">Use kiye gaye milk type ke liye nirdharit minimum se kam nahi (jaise ≥8.5% adhiktar types ke liye)</td>
                            <td class="p-2 border">SNF mein proteins (casein ~80%, whey ~20%), lactose (~4.8%), minerals (~0.7%), aur water-soluble vitamins shamil hain. Paryaapt SNF nutritional density ensure karta hai aur viscosity aur colloidal stability mein yogdaan deta hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Total Solids (% m/m)</strong></td>
                            <td class="p-2 border">Typically 14–18% (added sugar aur cocoa ko milakar)</td>
                            <td class="p-2 border">Zyada total solids body, viscosity, aur overall sensory acceptance improve karte hain; ye thermal processing ke dauraan heat transfer efficiency ko bhi affect karta hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sugar (Sucrose)</strong></td>
                            <td class="p-2 border">Permitted hai; typically 5–9% w/v; amount label par declare karna zaroori hai FSSAI labelling regulations ke anusaar</td>
                            <td class="p-2 border">Sucrose (α-D-glucopyranosyl-(1→2)-β-D-fructofuranoside) sweetness perception badhata hai (relative sweetness = 1.0), cocoa ki halki bitterness ko mask karta hai (chocolate milk mein), aur osmotic balance mein yogdaan deta hai jo microbial water activity (a<sub>w</sub>) ko affect karta hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Cocoa/Chocolate Powder</strong></td>
                            <td class="p-2 border">0.5–1.5% w/v chocolate flavoured milk ke liye</td>
                            <td class="p-2 border">Cocoa powder mein theobromine (3,7-dimethylxanthine), flavonoids (epicatechin, catechin), aur polyphenols hote hain jinmein antioxidant properties hain. Particle size (d₅₀ typically 10–30 µm) sedimentation rate aur mouthfeel ko critically affect karta hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Permitted Stabilizers</strong></td>
                            <td class="p-2 border">Carrageenan (INS 407) — max 150 ppm (0.015%); Sodium Alginate (INS 401); Sodium CMC (INS 466); Gellan Gum (INS 418); FSSAI regulations ke Schedule VA ke anusaar</td>
                            <td class="p-2 border">Hydrocolloids thickeners aur suspension stabilizers ke roop mein kaam karte hain; har ek ka casein micelles ke saath specific interaction mechanism hota hai (neeche detail mein diya gaya hai).</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Permitted Colours</strong></td>
                            <td class="p-2 border">Sirf FSSAI Appendix A mein listed colours; jaise Caramel colour (INS 150a/b/c/d) chocolate milk ke liye, Ponceau 4R (INS 124) ya Carmine (INS 120) strawberry ke liye</td>
                            <td class="p-2 border">Colour flavour perception ko significantly affect karta hai — ye ek cross-modal sensory phenomenon hai jahan visual cues orbitofrontal cortex mein gustatory aur olfactory processing ko modulate karte hain.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Emulsifiers</strong></td>
                            <td class="p-2 border">Mono- aur di-glycerides of fatty acids (INS 471); Lecithin (INS 322); jaisa permitted ho</td>
                            <td class="p-2 border">Fat globules aur aqueous phase ke beech interfacial tension kam karte hain; homogenization efficiency aur emulsion stability improve karte hain.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Microbiological Standards (Sukhshm Jaivik Manak) — FSSAI</h4>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Pasteurized Flavoured Milk</th>
                            <th class="p-2 border">UHT/Sterilized Flavoured Milk</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Total Plate Count (TPC)</strong></td>
                            <td class="p-2 border">≤30,000 CFU/mL (n=5, c=2, m=10,000, M=50,000)</td>
                            <td class="p-2 border">Commercially sterile — 37°C par 15 din aur 55°C par 7 din incubation ke baad koi growth nahi honi chahiye</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Coliform Count</strong></td>
                            <td class="p-2 border">≤10 CFU/mL (n=5, c=1, m=1, M=10)</td>
                            <td class="p-2 border">1 mL mein absent hona chahiye</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>E. coli</em></strong></td>
                            <td class="p-2 border">1 mL mein absent</td>
                            <td class="p-2 border">1 mL mein absent</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>Salmonella</em></strong></td>
                            <td class="p-2 border">25 mL mein absent</td>
                            <td class="p-2 border">25 mL mein absent</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>Staphylococcus aureus</em></strong></td>
                            <td class="p-2 border">≤10 CFU/mL</td>
                            <td class="p-2 border">1 mL mein absent</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>Listeria monocytogenes</em></strong></td>
                            <td class="p-2 border">25 mL mein absent</td>
                            <td class="p-2 border">25 mL mein absent</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Yeast & Mould Count</strong></td>
                            <td class="p-2 border">≤10 CFU/mL</td>
                            <td class="p-2 border">Absent</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Phosphatase Test</strong></td>
                            <td class="p-2 border">Negative (ALP ka inactivation dikhna chahiye)</td>
                            <td class="p-2 border">Negative</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Turbidity Test (sterilized ke liye)</strong></td>
                            <td class="p-2 border">Applicable nahi</td>
                            <td class="p-2 border">Negative — ammonium sulphate precipitation ke baad clear supernatant ka matlab hai complete whey protein denaturation ho gaya hai</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2 text-sm text-gray-600"><strong>Note:</strong> Sampling plans mein, n = samples ki sankhya, c = m aur M ke beech acceptable results ki maximum sankhya, m = microbiological limit jiske neeche sabhi results satisfactory maane jaate hain, M = maximum microbiological limit jiske upar results unsatisfactory hain (ICMSF two-class aur three-class sampling plans ke anusaar).</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Mukhya Ingredients ka Vigyan (Science of Key Ingredients)</h3>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">1. Stabilizers aur Unka Karya Vidhi (Mechanism of Action)</h4>
            <p>Flavoured milk mein, khaaskar chocolate milk mein, sabse critical technological challenge hai <strong>suspension stability</strong> — insoluble particles (cocoa, added minerals) ki sedimentation rokna aur fat separation (creaming) rokna. Hydrocolloid stabilizers in challenges ko alag-alag mechanisms se address karte hain:</p>

            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Stabilizer</th>
                            <th class="p-2 border">INS No.</th>
                            <th class="p-2 border">Typical Usage Level</th>
                            <th class="p-2 border">Milk Systems mein Mechanism</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Kappa-Carrageenan (κ-carrageenan)</strong></td>
                            <td class="p-2 border">407</td>
                            <td class="p-2 border">100–300 ppm (0.01–0.03%)</td>
                            <td class="p-2 border">
                                Ye ek <strong>kamzor, thixotropic gel network</strong> banata hai apne sulphate ester groups (–OSO₃⁻) aur casein micelles ki surface par maujood <strong>κ-casein</strong> ke positively charged regions (khaaskar para-κ-casein region, amino acid residues 1–105) ke beech electrostatic interaction se. Isse ek <em>three-dimensional casein-carrageenan network</em> banta hai jo zero-shear viscosity (η₀) aur yield stress (τ₀) ko dramatically badha deta hai, aur cocoa particles ko suspend rakhta hai. Ye interaction primarily electrostatic hai pH 6.6–6.8 (milk ka pH) par aur calcium ions (Ca²⁺) se enhanced hota hai jo carrageenan chains ke beech bridges banate hain. Ye gel <strong>pseudoplastic (shear-thinning)</strong> hai: hilane/dhaalane par viscosity kam ho jaati hai aur rest par wapas aa jaati hai (thixotropy).
                            </td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Lambda-Carrageenan (λ-carrageenan)</strong></td>
                            <td class="p-2 border">407</td>
                            <td class="p-2 border">100–500 ppm</td>
                            <td class="p-2 border">
                                Ye gel nahi banata; balki ek <strong>viscosity builder</strong> ke roop mein kaam karta hai. Iske har disaccharide repeat unit mein teen sulphate groups hain (κ mein ek hota hai), isliye casein micelles ke saath zyada strong electrostatic interaction hota hai lekin gelation ke liye zaroori ordered helical structures nahi bante. Ye viscous, pourable systems banata hai; peene yogya products ke liye prefer kiya jaata hai jahan non-gelled texture chahiye.
                            </td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Microcrystalline Cellulose (MCC) + CMC</strong></td>
                            <td class="p-2 border">460(i) + 466</td>
                            <td class="p-2 border">0.05–0.3%</td>
                            <td class="p-2 border">
                                MCC particles ek <strong>colloidal network</strong> banate hain jo cocoa particles ko physically trap karke suspend rakhta hai. CMC co-stabilizer ke roop mein kaam karta hai, MCC particles ko coat karke unke aggregation ko rokta hai. Ye system bina significant viscosity increase ke excellent suspension stability deta hai — "patla" mouthfeel wale products ke liye ideal. Ye <strong>network-forming mechanism</strong> se kaam karta hai na ki viscosity modification se.
                            </td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Gellan Gum (Low-Acyl)</strong></td>
                            <td class="p-2 border">418</td>
                            <td class="p-2 border">100–250 ppm</td>
                            <td class="p-2 border">
                                <strong>Fluid gels</strong> banata hai — ye continuous liquid phase mein microgel particles ka suspension hai. Ye microgels rest par structured network provide karte hain (particles suspend karte hain) lekin shear lagane par aasaani se behte hain. Bahut "clean" mouthfeel deta hai quick flavour release ke saath. Milk mein naturally maujood divalent cations (Ca²⁺, Mg²⁺) ki presence mein gel banta hai. Premium flavoured milk products ke liye increasingly popular hai.
                            </td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sodium Alginate</strong></td>
                            <td class="p-2 border">401</td>
                            <td class="p-2 border">0.01–0.1%</td>
                            <td class="p-2 border">
                                Ye β-D-mannuronate (M) aur α-L-guluronate (G) residues ka linear polysaccharide hai. G-blocks Ca²⁺ ions ke saath <strong>"egg-box" junctions</strong> banate hain. Milk systems mein, milk ka Ca²⁺ (~30 mM) gelation cause kar sakta hai, isliye ise typically sequestrants (citrates, phosphates) ke saath use karte hain taaki gel strength control ho sake.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p class="mt-3"><strong>Stokes' Law aur Sedimentation:</strong> Stabilizers ki anupasthiti mein cocoa particles ki sedimentation rate ko <strong>Stokes' Law</strong> se estimate kiya ja sakta hai:</p>
            <div class="bg-gray-100 p-4 rounded mt-2 text-center font-mono">
                v = (2 × r² × (ρ<sub>p</sub> − ρ<sub>f</sub>) × g) / (9 × η)
            </div>
            <p class="mt-2">Jahan: <strong>v</strong> = sedimentation velocity (m/s), <strong>r</strong> = particle radius (m), <strong>ρ<sub>p</sub></strong> = particle density (cocoa ≈ 1,400 kg/m³), <strong>ρ<sub>f</sub></strong> = fluid density (milk ≈ 1,032 kg/m³), <strong>g</strong> = gravitational acceleration (9.81 m/s²), <strong>η</strong> = continuous phase ki dynamic viscosity (Pa·s).</p>
            <p class="mt-2">Is equation se samajh aata hai ki sedimentation ko rokne ke liye teen tarike hain: (a) <strong>particle size (r) kam karna</strong> intense homogenization se, (b) continuous phase ki <strong>viscosity (η) badhana</strong> stabilizer addition se, ya (c) <strong>density difference (ρ<sub>p</sub> − ρ<sub>f</sub>) kam karna</strong> total solids badhaakar. Practically inon teenon strategies ka combination use hota hai. Ek 15 µm radius ke cocoa particle ke liye unstabilized milk mein (η ≈ 0.002 Pa·s), v ≈ 0.09 mm/s hota hai, matlab ek 200 mm carton mein complete sedimentation lagbhag ~37 minute mein ho jayegi. Carrageenan stabilization ke saath (η₀ ≈ 0.05 Pa·s rest par), ye >15 ghante tak extend ho jaata hai, aur gel network ka yield stress additional resistance provide karta hai.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">2. Cocoa Powder — Prakar aur Vyavhaar (Types aur Behaviour)</h4>
            <p><strong>Natural (Broma Process) Cocoa:</strong> pH 5.0–5.4; halka brown colour; zyada acidic, fruity flavour; milk mein kam soluble; casein ke isoelectric point (pH 4.6) ke paas slight protein destabilization cause kar sakta hai. <br/>
            <strong>Alkalized (Dutch-Process) Cocoa:</strong> Alkali (K₂CO₃ ya NaOH) se treat kiya jaata hai pH badhaakar 6.8–8.1; gehera colour (alkalization ke dauraan Maillard products bante hain); halka, smooth flavour; milk mein behtar dispersibility kyunki zyada wettability hai aur pH milk ke natural pH ke saath compatible hai. <strong>Flavoured milk applications ke liye prefer kiya jaata hai</strong> kyunki ye milk pH ko significantly nahi girata aur acid-induced casein aggregation se bachata hai.</p>
            <p class="mt-2"><strong>Cocoa powder ka fat content</strong> stability ko affect karta hai: Standard cocoa (10–12% fat) ko disperse karna aasaan hai high-fat cocoa (20–24% fat) ki tulna mein. Surface fat ek hydrophobic layer banata hai jo wetting resist karta hai — garam sugar solution mein pre-dispersion ya lecithin ka wetting agent ke roop mein use karna recommend kiya jaata hai.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">3. Sugar — Sweetening ke Aage ka Role</h4>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Water Activity Depression:</strong> 7% sucrose ka addition a<sub>w</sub> ko ~0.997 (plain milk) se ~0.990 tak kam kar deta hai, jo microbial growth ke khilaf ek marginal lekin cumulative hurdle provide karta hai (Leistner ka hurdle technology principle).</li>
                <li><strong>Viscosity Enhancement:</strong> 7% sucrose solution viscosity ko paani ki tulna mein ~12% badhata hai, jo mouthfeel mein yogdaan deta hai.</li>
                <li><strong>Maillard Reaction mein Bhagidari:</strong> UHT/sterilization ke dauraan, sucrose partially invert hokar glucose aur fructose ban jaata hai (heat aur slightly acidic conditions se catalyzed), aur ye reducing sugars milk proteins ke saath <strong>Maillard browning</strong> mein bhag lete hain (mukhya roop se casein aur β-lactoglobulin mein lysine ke ε-amino groups). Isse brown melanoidins bante hain, cooked/caramelized flavour notes (furfural, hydroxymethylfurfural/HMF, maltol) aate hain, aur nutritional quality kam ho sakti hai (available lysine ka loss — <strong>Maillard blockage</strong>).</li>
                <li><strong>Freezing Point Depression:</strong> Frozen flavoured milk products ke liye relevant; 7% sucrose freezing point ko lagbhag 0.6°C se neeche gira deta hai (colligative property).</li>
                <li><strong>Alternative Sweeteners:</strong> High-fructose corn syrup (HFCS 42 ya 55), stevia glycosides (INS 960), sucralose (INS 955), ya acesulfame-K (INS 950) reduced-calorie variants ke liye use kiye ja sakte hain, FSSAI ki permission ke subject mein. Stevia ke use mein careful flavour masking chahiye kyunki iska liquorice jaisa aftertaste hota hai.</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Flavoured Milk ki Processing Food Safety Controls ke saath (HACCP-Based)</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">HACCP Terminology ki Samiksha (Review)</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Term</th>
                            <th class="p-2 border">Full Form</th>
                            <th class="p-2 border">Paribhasha (ISO 22000:2018 ke anusaar)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>PRP</strong></td>
                            <td class="p-2 border">Prerequisite Program</td>
                            <td class="p-2 border">Food chain mein swachh vatavaran banaye rakhne ke liye zaroori basic conditions aur activities. Kisi vishesh hazard ke liye specific nahi hain. Udaaharan: cleaning & sanitation, pest control, personal hygiene, equipment maintenance, paani ki quality, waste management.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>oPRP</strong></td>
                            <td class="p-2 border">Operational Prerequisite Program</td>
                            <td class="p-2 border">Ek control measure jo hazard analysis dwara ek significant food safety hazard ko acceptable levels tak control karne ke liye essential ke roop mein identify kiya gaya hai, lekin jo CCP ke roop mein manage <em>nahi</em> kiya jaata. Iske defined action criteria, monitoring, aur corrections hain. CCP se fark ye hai ki deviation ka outcome typically product disposition (jaise hold/release) nahi hota.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>CCP</strong></td>
                            <td class="p-2 border">Critical Control Point</td>
                            <td class="p-2 border">Ek step jahan ek control measure lagaya ja sakta hai aur jo ek food safety hazard ko rokne ya khatam karne ya ek acceptable level tak kam karne ke liye essential hai. Iske defined critical limits, continuous monitoring, aur documented corrective actions hain jinmein product disposition bhi shamil hai.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Flavoured Milk Production ka Processing Flowchart</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-50 border border-blue-200 rounded">Kachche Doodh ka Reception aur Quality Testing <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-50 border border-blue-200 rounded">Pre-filtration / Clarification <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Standardization (Fat & SNF Adjustment) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-50 border border-blue-200 rounded">Pre-heating (60–65°C) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Ingredient Blending (Sugar, Cocoa, Stabilizers, Emulsifiers) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">De-aeration (Vacuum Chamber) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Homogenization (Two-Stage) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-red-100 border border-red-300 rounded"><strong>Heat Treatment (Pasteurization / UHT / Sterilization)</strong> <span class="font-sans text-xs bg-red-300 p-1 rounded font-bold">CCP-1 (B)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling (Pasteurized ke liye 4°C / UHT ke liye 20–25°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Aseptic Flavour & Colour Addition (UHT ke liye) / Pre-heat addition (Pasteurized ke liye) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-red-100 border border-red-300 rounded"><strong>Packaging (UHT ke liye Aseptic Filling / Pasteurized ke liye Clean Filling)</strong> <span class="font-sans text-xs bg-red-300 p-1 rounded font-bold">CCP-2 (B)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Metal Detection / X-ray Inspection <span class="font-sans text-xs bg-red-300 p-1 rounded font-bold">CCP-3 (P)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Storage (Refrigerated ≤4°C / UHT ke liye Ambient ≤25°C)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Distribution (Pasteurized ke liye Cold Chain / UHT ke liye Ambient)</div>
            </div>
            <p class="mt-2 text-sm text-gray-600"><strong>Legend:</strong> (B) = Biological hazard; (P) = Physical hazard</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Steps ki Vistar se Vyakhya (Detailed Explanation)</h3>
            <ol class="list-decimal list-outside pl-5 space-y-6">
                <li>
                    <strong>Kachche Doodh ka Reception aur Quality Testing (PRP):</strong>
                    <p class="mt-1">Aane wale kachche doodh ko sweekaar karne se pehle platform tests kiye jaate hain. Inmein shamil hain:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Organoleptic jaanch (Indriya Parikshan):</strong> Colour, gandh (odour), aur dikhne wale contamination ki visual inspection. Rejection criteria: off-odours (rancid, khatta, feed-taint), asamanya colour, dikhne wala foreign matter.</li>
                        <li><strong>Temperature jaanch:</strong> Kachche doodh ko ≤8°C (ideally ≤4°C) par aana chahiye. Zyada temperature cold chain failure aur potential microbial proliferation (badhna) ko darshata hai.</li>
                        <li><strong>COB (Clot-on-Boiling) Test / Alcohol Test (68–75% ethanol):</strong> Zyada acidity (>0.18% lactic acid), zyada ionic calcium, ya colostrum wale doodh ka pata lagata hai. <em>Siddhant:</em> Ethanol milk system ka dielectric constant kam kar deta hai, casein micelles ke beech electrostatic repulsion kam hota hai aur unstable milk mein coagulation hota hai. Positive test → doodh heat processing ke liye unsuitable hai (heat exchangers ko foul karega).</li>
                        <li><strong>Acidity (titratable):</strong> 0.13–0.16% lactic acid (taaza doodh); >0.18% ka matlab hai bacterial fermentation se developed acidity (lactose → lactic acid <em>Streptococcus</em>, <em>Lactobacillus</em> spp. dwara).</li>
                        <li><strong>Fat (Gerber method):</strong> Standardization calculations ke liye fat content confirm karta hai.</li>
                        <li><strong>SNF (lactometer ya infrared se):</strong> Solids-not-fat content confirm karta hai.</li>
                        <li><strong>Milaavat (Adulteration) tests:</strong> Starch (iodine test), urea (DMAB test), neutralizers (rosalic acid test), hydrogen peroxide (potassium dichromate test), paani milana (cryoscopy se freezing point depression — shuddh doodh: −0.520 se −0.540°C; paani milane se FP 0°C ki taraf badhta hai).</li>
                        <li><strong>Methylene Blue Reduction Time (MBRT):</strong> Bacterial load ka anumaan lagata hai. Achhi quality ka doodh: decolourization >5 ghante. <em>Siddhant:</em> Metabolically active bacteria reductases (NADH dehydrogenases, aadi) produce karti hain jo NADH se electrons ko methylene blue (oxidized, neela) ko transfer karti hain → leucomethylene blue (reduced, rangaheen). Jitni jaldi decolourization = utni zyada microbial load.</li>
                        <li><strong>Somatic Cell Count (SCC):</strong> >400,000 cells/mL subclinical mastitis ko darshata hai. High SCC doodh mein elevated proteases (plasmin) aur lipases (lipoprotein lipase) hote hain, jo storage ke dauraan bitterness aur rancidity paida karte hain.</li>
                        <li><strong>Antibiotic residue screening:</strong> Rapid tests (jaise Delvotest, SNAP tests) β-lactams, tetracyclines, sulfonamides ke liye. MRL (Maximum Residue Limits FSSAI ke anusaar) se upar presence → rejection. Antibiotics starter cultures ko inhibit karte hain (fermented dairy mein relevant) aur public health risks pose karte hain (antimicrobial resistance, allergic reactions).</li>
                        <li><strong>Aflatoxin M₁ screening:</strong> Maximum permitted level: 0.5 µg/kg (FSSAI) / 0.05 µg/kg (EU). AFM₁ Aflatoxin B₁ (contaminated feed mein <em>Aspergillus flavus/parasiticus</em> dwara produced) ka hydroxylated metabolite hai jo jaanwar ke liver mein banta hai aur doodh mein excrete hota hai.</li>
                    </ul>
                </li>

                <li>
                    <strong>Pre-filtration / Clarification (PRP):</strong>
                    <p class="mt-1">Kachche doodh ko inline filters (mesh size ~100 µm) se guzaara jaata hai gross physical contaminants (baal, tinke, mitti ke kanan) hatane ke liye. Ek <strong>centrifugal clarifier</strong> (5,000–7,000 × g par operate hota hai) use kiya jaata hai somatic cells, leucocytes, bacteria (kuch had tak — ~50% reduction, jise specifically designed hone par <strong>bactofugation</strong> kehte hain), aur sediment hatane ke liye. Hataya gaya material <strong>clarifier sludge ya slime</strong> kehlata hai.</p>
                </li>

                <li>
                    <strong>Milk Standardization (PRP):</strong>
                    <p class="mt-1">Standardization fat aur SNF ko target levels par adjust karta hai <strong>Pearson Square method</strong> ya automated in-line standardization systems (jaise Tetra Pak Standomat) ka use karke. Udaaharan ke liye, toned milk (3.0% fat, 8.5% SNF) banana hai to, whole buffalo milk (6.5% fat) ko skim milk (0.1% fat) ke saath blend kiya jaata hai. In-line systems density meters aur near-infrared (NIR) sensors use karte hain real-time composition monitoring ke liye aur proportional control valves se automatic cream/skim ratio adjustment karte hain.</p>
                    <p class="mt-1"><strong>SNF fortification:</strong> Agar SNF target se neeche ho, to ise badhaya ja sakta hai skim milk powder (SMP), milk protein concentrate (MPC), ya membrane concentration (reverse osmosis/ultrafiltration) se. Chocolate flavoured milk ke liye, added cocoa aur sugar total solids mein yogdaan dete hain, isliye milk SNF ko thoda kam kiya ja sakta hai taaki desired viscosity banaye rakhein aur "bahut gaadha" mouthfeel na aaye.</p>
                </li>

                <li>
                    <strong>Pre-heating (60–65°C) (PRP):</strong>
                    <p class="mt-1">Standardized milk ko plate heat exchanger ke regeneration section mein 60–65°C tak garm kiya jaata hai. Iske kai uddeshya hain:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Behtar ghulansheelta (Improved dissolution):</strong> Temperature ke saath sugar ki solubility badhti hai (sucrose: 20°C par 67 g/100 mL → 100°C par 287 g/100 mL). 60°C par sugar ka tez ghulna aur stabilizers ka hydration (carrageenan ko coil-to-helix transition aur hydration ke liye ≥60°C chahiye).</li>
                        <li><strong>Kam viscosity:</strong> Badhey hue temperature par kam viscosity mixing efficiency aur homogenization ko improve karti hai.</li>
                        <li><strong>Cocoa ka bheegna (wetting):</strong> Cocoa powder ka better wetting aur dispersion, lumps kam hote hain.</li>
                    </ul>
                </li>

                <li>
                    <strong>Ingredient Blending (oPRP):</strong>
                    <p class="mt-1">Sookhi (dry) ingredients ko pre-heated milk mein ek <strong>high-shear blending tank</strong> (jaise Tetra Almix, Silverson mixer, ya triblender) mein milaya jaata hai. Addition ka kram (order) lumping rokne aur uniform dispersion ensure karne ke liye critical hai:</p>
                    <ol class="list-alpha list-outside pl-5 mt-2 space-y-2" style="list-style-type: lower-alpha;">
                        <li><strong>Dry-blend stabilizers ko sugar ke ek hisse ke saath (1:5 weight ratio)</strong> — sugar ke particles stabilizer particles ko physically alag karte hain, unhe clumps mein hydrate hone se rokte hain aur "fish eyes" (lumps jinke andar sookha center hota hai aur baahar hydrated layer) nahi bante. Ye <strong>dry-dispersion technique</strong> hai.</li>
                        <li><strong>Sugar-stabilizer premix ko garam doodh mein add karein</strong> high-shear agitation ke under (tip speed ≥15 m/s).</li>
                        <li><strong>Bachi hui sugar add karein.</strong></li>
                        <li><strong>Cocoa powder add karein</strong> (agar natural cocoa use ho raha hai jiska wettability kam hai to pehle garam paani ya sugar solution mein pre-disperse karein).</li>
                        <li><strong>Emulsifiers add karein</strong> (agar use ho rahe hain).</li>
                    </ol>
                    <p class="mt-2"><strong>Food Safety Control (oPRP):</strong> Ye step oPRP ke roop mein classify kiya gaya hai kyunki:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Chemical hazard:</strong> Stabilizers/additives ka galat addition FSSAI-permitted levels se exceed kar sakta hai.</li>
                        <li><strong>Biological hazard:</strong> Dry ingredients (sugar, cocoa powder, SMP) thermophilic spore-formers (<em>Bacillus cereus</em>, <em>Geobacillus stearothermophilus</em>), <em>Salmonella</em> (cocoa mein), aur <em>Cronobacter sakazakii</em> (powdered dairy ingredients mein) ke source ho sakte hain.</li>
                        <li><strong>Physical hazard:</strong> Dry ingredients mein foreign material (dhaaga, plastic, keede ke tukde). Addition se pehle sabhi dry ingredients ko ≤2 mm screens se chaanna (sieving) zaroori hai.</li>
                    </ul>
                    <p class="mt-2"><strong>Action criteria:</strong> Ingredient weights ke liye batch records verify karein (±2% tolerance), har batch ke liye supplier CoA (Certificate of Analysis) confirm karein, har run se pehle sieve integrity verify karein.</p>
                </li>

                <li>
                    <strong>De-aeration (Hawa Nikalna) (PRP):</strong>
                    <p class="mt-1">Blended mix ko ek <strong>vacuum de-aerator</strong> (0.3–0.5 bar absolute par operate hota hai) se guzaara jaata hai dissolved aur entrained hawa nikalne ke liye. Mixing ke dauraan air incorporation 5–8% by volume ho sakta hai.</p>
                    <p class="mt-1"><strong>De-aeration ke vaigyanik kaaran:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Behtar heat transfer:</strong> Hawa ke bubbles thermal insulators ke roop mein kaam karte hain, heat exchangers mein effective heat transfer coefficient ko 20% tak kam kar sakte hain, jisse inadequate pasteurization/sterilization (under-processing) ho sakti hai.</li>
                        <li><strong>Oxidation rokna:</strong> Dissolved oxygen (DO) <strong>lipid oxidation</strong> ko promote karta hai (unsaturated fatty acids ka autoxidation free radical chain reaction se: initiation → propagation → termination), jisse off-flavours aate hain (hexanal, pentanal, 2,4-decadienal — jo "cardboard", "metallic", "painty" describe kiye jaate hain). Target DO de-aeration ke baad: <2 ppm.</li>
                        <li><strong>Fouling rokna:</strong> Hawa ke bubbles heat exchanger surfaces par deposit formation mein yogdaan dete hain (khaaskar bubble-surface interface par jahan proteins preferentially denature hote hain).</li>
                        <li><strong>Behtar homogenization:</strong> Hawa compressible hai, valve par effective homogenization pressure kam kar deti hai aur bade fat globule sizes ka result hota hai. De-aerated product zyada efficiently homogenize hota hai.</li>
                        <li><strong>Filler mein foaming rokna:</strong> Zyada hawa filling ke dauraan foaming karti hai, jisse under-fills aur inaccurate volume/weight aate hain.</li>
                    </ul>
                </li>

                <li>
                    <strong>Homogenization (Samangikaran) (oPRP):</strong>
                    <p class="mt-1">Mix ko <strong>two-stage homogenization</strong> ke through guzaara jaata hai high-pressure homogenizer (jaise Tetra Alex, GEA Ariete, APV Gaulin) use karke.</p>
                    <p class="mt-2"><strong>Homogenization ka Mechanism:</strong> Mix ko uchh veg (high velocity) par ek sankeerna antar (narrow gap, typically 0.05–0.3 mm) se force kiya jaata hai valve seat aur homogenizing valve ke beech. Fat globule todne wali mukhya forces hain:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Turbulent micro-eddies (inertial forces):</strong> Gap ke downstream turbulent regime mein, fat globule se chhote micro-eddies deformation aur fragmentation cause karte hain. Ye high Reynolds numbers (Re > 10,000) par dominant mechanism hai.</li>
                        <li><strong>Cavitation:</strong> Jab fluid gap se accelerate hota hai, static pressure vapour pressure se neeche gir jaata hai, vapour cavities banti hain jo downstream violently collapse hoti hain, intense localized shear forces aur shock waves generate karte hain.</li>
                        <li><strong>Shear forces:</strong> Gap ke across velocity gradient shear stress (τ = η × dv/dx) create karta hai jo fat globules ko unke critical Weber number (We<sub>cr</sub>) ke aage deform aur elongate karta hai, jisse breakup hota hai.</li>
                    </ul>
                    <p class="mt-2"><strong>Two-stage process ke parameters:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Pehla stage: 150–200 bar (2,200–2,900 PSI):</strong> Average fat globule diameter ko ~3.5 µm (d₃₂, Sauter mean diameter) se ~0.5–0.8 µm tak kam kar deta hai. Ye us minimum size se neeche hai jahan gravity se creaming negligible ho jaati hai. Cocoa particle size ko bhi kam karta hai. Newly formed chhote fat globules ki total surface area bahut badh jaati hai (lagbhag 5–7× factor se). Is naye surface ko jaldi se adsorbed milk proteins — mukhya roop se <strong>caseins</strong> (jinki amphiphilic structure hai hydrophobic aur hydrophilic segments ke saath) — coat kar lete hain, ek naya membrane banaate hain jo native milk fat globule membrane (MFGM) ki jagah le leta hai.</li>
                        <li><strong>Doosra stage: 30–50 bar (450–725 PSI):</strong> Ye pehle stage ke baad bane fat globules ke clusters ko todta hai jo newly adsorbed protein membrane ke adjacent globules ke beech sharing ki wajah se bane the (is phenomenon ko <strong>"bridging flocculation"</strong> ya "clustering" kehte hain). Doosra stage in clusters ko tod deta hai, individual globule identity restore karta hai. <strong>Doosre stage ke bina, product excessively viscous dikhega aur "homogenization cluster cream layer" develop ho sakti hai</strong> — ye ek defect hai jahan clusters jaldi upar aa jaate hain apne bade effective hydrodynamic diameter ki wajah se, individual globule size chhota hone ke bawajood.</li>
                    </ul>
                    <p class="mt-2"><strong>Homogenization temperature:</strong> 60–70°C (milk fat ke melting point, ~40°C, se upar). Fat ko liquid state mein hona chahiye efficient disruption ke liye. Thande doodh (solid fat) ko homogenize karna ineffective hai aur valve ko damage karta hai.</p>
                    <p class="mt-2"><strong>Homogenization ki position (heat treatment ke relative):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Upstream homogenization (heat treatment se pehle):</strong> Pasteurized flavoured milk ke liye use hota hai. Homogenized mix phir heating section se guzarta hai. Risk: non-sterile homogenizer contamination introduce kar sakta hai, lekin ye baad ke heat treatment se khatam ho jaata hai.</li>
                        <li><strong>Aseptic homogenization (heat treatment ke baad):</strong> UHT products ke liye use hota hai. Homogenizer sterile conditions mein operate karta hai (production se pehle steam-sterilized). Zyada mehnga hai lekin re-contamination risk khatam karta hai. Vaikalpik roop se, <strong>downstream homogenization</strong> heating section ke outlet par kiya ja sakta hai jahan homogenizer sterile zone ke andar positioned hota hai.</li>
                    </ul>
                    <p class="mt-2"><strong>Food Safety Control (oPRP):</strong> Homogenization ek oPRP hai kyunki inadequate homogenization quality defects (fat separation, sedimentation) ka kaaran banta hai na ki seedhe safety hazards ka. Halaanki, UHT products ke liye, homogenizer ki aseptic integrity critical hai (monitoring mein barrier fluid system ki sterility testing shamil hai).</p>
                </li>

                <li>
                    <strong>Heat Treatment (Ushma Upchaar) — CCP-1 (Biological Hazard):</strong>
                    <p class="mt-1">Ye poori prakriya mein <strong>sabse critical step</strong> hai, jo pathogenic microorganisms ko khatam karne ka primary intervention hai. Heat treatment <strong>Critical Control Point (CCP-1)</strong> hai.</p>

                    <h5 class="text-md font-semibold text-gray-700 mt-3 mb-2">A. Pasteurized Flavoured Milk ke liye — HTST Pasteurization</h5>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Specification</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Temperature</td><td class="p-2 border"><strong>Minimum 72°C</strong> (target: 74–76°C safety margin ke liye)</td></tr>
                                <tr><td class="p-2 border">Holding Time</td><td class="p-2 border"><strong>Minimum 15 seconds</strong> (actual holding time salt conductivity test se verified)</td></tr>
                                <tr><td class="p-2 border">Equipment</td><td class="p-2 border">Plate Heat Exchanger (PHE) holding tube ke saath</td></tr>
                                <tr><td class="p-2 border">Flow Control</td><td class="p-2 border">Magnetic flow meter + timing pump (positive displacement pump constant flow rate ensure karta hai)</td></tr>
                                <tr><td class="p-2 border">Safety Device</td><td class="p-2 border"><strong>Flow Diversion Valve (FDV)</strong> — agar holding tube exit par temperature 72°C se neeche girta hai to automatically under-processed milk ko raw milk balance tank mein divert kar deta hai</td></tr>
                                <tr><td class="p-2 border">Recording</td><td class="p-2 border">Calibrated chart recorder ya data logger par continuous temperature recording (records shelf life + minimum 1 saal tak rakhne chahiye)</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p class="mt-2"><strong>Vaigyanik Aadhar — Thermal Death Kinetics (Taapiya Mrityu Gatiki):</strong></p>
                    <p>Microbial inactivation <strong>first-order kinetics</strong> (log-linear model) follow karta hai:</p>
                    <div class="bg-gray-100 p-3 rounded mt-1 text-center font-mono">
                        log₁₀(N/N₀) = −t/D<sub>T</sub>
                    </div>
                    <p class="mt-1">Jahan N₀ = initial count, N = time t ke baad count, D<sub>T</sub> = temperature T par decimal reduction time (1-log ya 90% reduction achieve karne ka samay).</p>
                    <p class="mt-2"><strong>z-value</strong> wo temperature change define karta hai jo D<sub>T</sub> ko 10 ke factor se badalne ke liye chahiye:</p>
                    <div class="bg-gray-100 p-3 rounded mt-1 text-center font-mono">
                        log₁₀(D<sub>T1</sub>/D<sub>T2</sub>) = (T₂ − T₁)/z
                    </div>

                    <div class="overflow-x-auto mt-3">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Target Organism</th>
                                    <th class="p-2 border">D<sub>72°C</sub> (seconds)</th>
                                    <th class="p-2 border">z-value (°C)</th>
                                    <th class="p-2 border">72°C/15s par Log Reduction</th>
                                    <th class="p-2 border">Mahatva (Significance)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong><em>Coxiella burnetii</em></strong> (Q fever ka kaarak)</td>
                                    <td class="p-2 border">~0.5–1.0</td>
                                    <td class="p-2 border">4.4–5.6</td>
                                    <td class="p-2 border">15–30 log</td>
                                    <td class="p-2 border"><strong>Pasteurization ke liye historical design organism.</strong> Doodh mein sabse zyada heat-resistant non-spore-forming pathogen. HTST 72°C/15s originally iske complete destruction ko ensure karne ke liye design kiya gaya tha.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong><em>Mycobacterium tuberculosis</em></strong></td>
                                    <td class="p-2 border">~0.3</td>
                                    <td class="p-2 border">4.5</td>
                                    <td class="p-2 border">>30 log</td>
                                    <td class="p-2 border">Bovine tuberculosis ka kaaran; historically sabse important milk-borne pathogen</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong><em>Listeria monocytogenes</em></strong></td>
                                    <td class="p-2 border">~0.2–0.4</td>
                                    <td class="p-2 border">5.5–6.5</td>
                                    <td class="p-2 border">>30 log</td>
                                    <td class="p-2 border">Psychrotrophic pathogen; refrigeration temperatures par grow kar sakta hai; listeriosis (meningitis, septicaemia, abortion) cause karta hai</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong><em>Salmonella</em> spp.</strong></td>
                                    <td class="p-2 border">~0.1</td>
                                    <td class="p-2 border">4.5–5.5</td>
                                    <td class="p-2 border">>30 log</td>
                                    <td class="p-2 border">Enteric pathogen; kam infectious dose (~10–100 cells kuch serovars ke liye)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong><em>Escherichia coli</em> O157:H7</strong></td>
                                    <td class="p-2 border">~0.1</td>
                                    <td class="p-2 border">5.3</td>
                                    <td class="p-2 border">>30 log</td>
                                    <td class="p-2 border">STEC (Shiga toxin-producing); haemolytic uremic syndrome (HUS) cause karta hai</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong><em>Campylobacter jejuni</em></strong></td>
                                    <td class="p-2 border">~0.02</td>
                                    <td class="p-2 border">5.4</td>
                                    <td class="p-2 border">>30 log</td>
                                    <td class="p-2 border">Globally gastroenteritis ka sabse common bacterial kaaran; bahut heat-sensitive</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Alkaline Phosphatase (ALP)</strong> — indicator enzyme</td>
                                    <td class="p-2 border">~1.2 (72°C par)</td>
                                    <td class="p-2 border">6.5</td>
                                    <td class="p-2 border">~12.5 log</td>
                                    <td class="p-2 border"><strong>ALP ke D- aur z-values <em>C. burnetii</em> se thode zyada hain</strong>. Isliye, <strong>ALP ka complete inactivation adequate pasteurization confirm karta hai</strong>. Negative phosphatase test (<4 µg p-nitrophenol/mL Aschaffenburg-Mullen method se ya <350 mU/L fluorometric method se) pasteurization adequacy ka <strong>gold standard verification</strong> hai.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p class="mt-3"><strong>Zaroori Note — Added Sugar aur Cocoa ka Heat Resistance par Prabhav:</strong></p>
                    <p>Sugar ka addition mix ka <strong>water activity depression</strong> aur <strong>total solids content</strong> badhata hai, jiska microorganisms par heat treatment ke dauraan <strong>protective effect</strong> ho sakta hai. Sugar microorganisms ke aas-paas ek zyada hypertonic vatavaran banata hai, unhe partially dehydrate karta hai aur unki thermal resistance badhata hai (D-value badh jaata hai). Studies ne dikhaya hai ki 10% sucrose solutions mein <em>Salmonella</em> aur <em>L. monocytogenes</em> ke D-values buffer ke mukable mein 1.5–3× badh jaate hain (Sumner et al., 1991). Isi tarah, fat content ka bhi protective effect hota hai — fat bacterial cells ko coat kar leti hai, unhe heat se insulate karti hai. Isliye, zyada sugar aur fat content wale flavoured milk ke liye, <strong>minimum pasteurization conditions se upar ek safety margin recommend kiya jaata hai</strong> — typically 74–76°C/15s ya 72°C/25s.</p>

                    <h5 class="text-md font-semibold text-gray-700 mt-4 mb-2">B. UHT Flavoured Milk ke liye</h5>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Direct System (Steam Injection/Infusion)</th>
                                    <th class="p-2 border">Indirect System (Tubular/Plate)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border"><strong>Temperature</strong></td><td class="p-2 border">140–150°C</td><td class="p-2 border">135–142°C</td></tr>
                                <tr><td class="p-2 border"><strong>Holding Time</strong></td><td class="p-2 border">2–4 seconds</td><td class="p-2 border">2–6 seconds</td></tr>
                                <tr><td class="p-2 border"><strong>Target F₀ value</strong></td><td class="p-2 border" colspan="2">≥5 minute (121.1°C par z = 10°C ke saath 5 minute ke barabar); <em>Clostridium botulinum</em> spores ka minimum 5-log reduction ensure karta hai (botulinum cook ke liye 12D process F₀ = 2.52 min hai; dairy industry F₀ ≥ 5 use karti hai extra safety margin ke liye, thermophilic spores ko target karte hue)</td></tr>
                                <tr><td class="p-2 border"><strong>B* (B-star) value</strong></td><td class="p-2 border" colspan="2">≥1 (matlab thermophilic spores ka ≥9-log reduction D<sub>135°C</sub> = 10.1s aur z = 10.5°C ke saath) — <strong>ye commercial sterility ke liye minimum sterilizing effect hai</strong></td></tr>
                                <tr><td class="p-2 border"><strong>C* (C-star) value</strong></td><td class="p-2 border" colspan="2">≤1 (matlab thiamine ka ≤3% destruction, jo sabse heat-sensitive vitamin hai; chemical/nutritional damage ka index ke roop mein use hota hai). Target: C* jitna kam ho sake utna achha. <strong>Direct systems indirect se kam C* achieve karte hain</strong> kyunki heating/cooling tez hota hai.</td></tr>
                                <tr><td class="p-2 border"><strong>Design ka siddhant</strong></td><td class="p-2 border" colspan="2"><strong>HHST (High Heat Short Time)</strong>: Kyunki spore inactivation ka z-value (~10°C) chemical degradation ke z-value (~25–35°C) se bahut kam hai, temperature badhaakar aur time kam karke same sterilizing effect (B* ≥ 1) achieve hota hai jabki chemical damage bahut kam hoti hai (lower C*). Ye <strong>"HHST advantage"</strong> ya <strong>"UHT window"</strong> hai.</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p class="mt-3"><strong>Direct vs. Indirect UHT Systems:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Direct (Steam Injection / Steam Infusion):</strong> Culinary-grade steam (koi chemical contaminants nahi) ko seedha product mein inject kiya jaata hai (injection) ya product ek patli film ke roop mein steam-filled chamber se guzarti hai (infusion). Heating <strong>lagbhag turant</strong> hoti hai (~0.1s mein 140°C tak pahunchna), jo bahut high B*/C* ratio deta hai (maximum sterilization, minimum chemical damage). Condensed steam se jo paani add hota hai wo ek <strong>flash cooling vacuum chamber</strong> (expansion vessel) mein nikala jaata hai, jo product ko 140°C se ~70°C tak <0.5 seconds mein simultaneously cool karta hai. Ye flash cooling volatile off-flavours (dimethyl sulfide, ketones) aur dissolved oxygen bhi remove karta hai — ye ek faydemand "deodorizing" prabhav hai. <strong>Flavoured milk ke liye prefer kiya jaata hai</strong> better flavour preservation ki wajah se.</li>
                        <li><strong>Indirect (Tubular ya Plate Heat Exchangers):</strong> Heat ek stainless steel diwar ke through transfer hoti hai jo product ko heating medium (garam paani ya steam) se alag karti hai. Direct systems se dhima heating profile (aane mein kai seconds lagte hain). Zyada C* values, zyada cooked flavour (β-lactoglobulin denaturation → free sulfhydryl groups ka exposure → hydrogen sulfide, methyl sulfide, dimethyl disulfide ka nirmaan). Fouling ke liye zyada susceptible (denatured protein deposits, mineral deposits — "milkstone" jo mukhya roop se calcium phosphate se bana hota hai). Halaanki, kam operating costs (heat regeneration ≥90% possible) aur simple design.</li>
                    </ul>

                    <h5 class="text-md font-semibold text-gray-700 mt-4 mb-2">C. In-Bottle Sterilized Flavoured Milk ke liye</h5>
                    <p><strong>110–120°C par 15–20 minute</strong> batch ya continuous retorts (autoclaves) mein. F₀ ≥ 5 minute.</p>
                    <p class="mt-1"><strong>Nuksan (Disadvantages):</strong> Bahut zyada C* value; significant Maillard browning (brown colour, caramel/cooked flavour); substantial whey protein denaturation (>90% β-lactoglobulin denature hota hai); heat-labile vitamins ka loss (vitamin C ka 50% tak, vitamin B₁ ka 20%, vitamin B₁₂ ka 30%); available lysine mein kami (Maillard blockage se 40% tak loss). <strong>Fayda (Advantage):</strong> Bahut robust commercial sterility; post-process contamination ka minimal risk kyunki packaging sterilization se pehle hoti hai.</p>

                    <p class="mt-3"><strong>CCP-1 ki Monitoring aur Critical Limits:</strong></p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Pehlu (Aspect)</th>
                                    <th class="p-2 border">HTST Pasteurization</th>
                                    <th class="p-2 border">UHT Processing</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong>Critical Limit</strong></td>
                                    <td class="p-2 border">Holding tube outlet par ≥72°C ≥15 seconds ke liye</td>
                                    <td class="p-2 border">Holding tube outlet par ≥135°C ≥2 seconds ke liye (ya equivalent F₀ ≥ 5)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Monitoring</strong></td>
                                    <td class="p-2 border">Continuous temperature recording (±0.1°C accuracy); flow rate monitoring; FDV position</td>
                                    <td class="p-2 border">Continuous temperature & pressure recording; holding tube differential pressure; flow rate</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Corrective Action (Deviation par)</strong></td>
                                    <td class="p-2 border">Automatic FDV diversion → re-process ya reject; root cause identify karein; sensor calibration verify karein</td>
                                    <td class="p-2 border">Automatic diversion → re-process ya reject; root cause identify karein; restart se pehle full sterility check</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Verification</strong></td>
                                    <td class="p-2 border">Daily phosphatase test (negative hona chahiye); weekly sensor calibration; annual holding time verification (salt conductivity test); finished product microbiology</td>
                                    <td class="p-2 border">Daily sterility incubation tests (37°C/15 din + 55°C/7 din); sensor calibration; finished product ki commercial sterility</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Records</strong></td>
                                    <td class="p-2 border">Temperature charts, FDV records, phosphatase results, corrective action logs</td>
                                    <td class="p-2 border">Temperature-time profiles, sterility test reports, aseptic integrity records</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>

                <li>
                    <strong>Cooling (Thandaa Karna) (oPRP):</strong>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Pasteurized flavoured milk:</strong> PHE regeneration aur cooling sections mein <strong>≤4°C</strong> tak cool kiya jaata hai. Tez cooling critical hai surviving thermoduric spore-formers (<em>Bacillus cereus</em>, spores ka D<sub>100°C</sub> = 2.7–5.5 min; psychrotrophic strains ≤7°C par germinate aur grow kar sakte hain) ke outgrowth rokne ke liye aur temperature danger zone (8–60°C) mein bitaaye gaye samay ko kam karne ke liye.</li>
                        <li><strong>UHT flavoured milk:</strong> Aseptic packaging ke liye <strong>20–25°C</strong> (ambient temperature) tak cool kiya jaata hai. UHT milk ko aseptic filling se pehle zyada thanda karne se packaging surfaces par condensation ho sakti hai, jo aseptic environment ko compromise kar sakti hai.</li>
                    </ul>
                    <p class="mt-2"><strong>Food Safety Control (oPRP):</strong> Outlet temperature monitor karna; deviation (pasteurized ke liye temperature >4°C ya UHT ke liye >25°C) investigation trigger karta hai lekin product rejection nahi (isliye oPRP, CCP nahi).</p>
                </li>

                <li>
                    <strong>Flavour aur Colour Addition (oPRP):</strong>
                    <p class="mt-1">Flavour aur colour addition ka samay aur method heat treatment type par depend karta hai:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Pasteurized Flavoured Milk ke liye:</strong> Heat-stable flavours aur colours ko <strong>pasteurization se pehle</strong> (blending tank mein) add kiya ja sakta hai. Ye process simple banata hai aur uniform distribution ensure karta hai. Volatile ya heat-sensitive flavours ko pasteurization ke baad sterile dosing system mein add karna chahiye.</li>
                        <li><strong>UHT Flavoured Milk ke liye:</strong> Flavours aur colours ko <strong>UHT treatment ke baad</strong> ek <strong>aseptic dosing system</strong> se add kiya jaata hai. Ye critical hai kyunki:
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li>Bahut se flavour compounds <strong>volatile esters aur aldehydes</strong> hain (jaise vanillin, ethyl butyrate strawberry ke liye, isoamyl acetate banana ke liye) jinke boiling points 100–250°C hain jo UHT temperatures (140–150°C) par partially evaporate ya decompose ho sakte hain.</li>
                                <li>UHT processing se bane Maillard reaction products delicate flavours ko mask kar sakte hain.</li>
                                <li><strong>Aseptic dosing</strong> mein shamil hai: (a) flavour concentrate ko separately sterilize karna (0.2 µm sterile membrane filter se filtration, UV-C treatment, ya thermal treatment se), (b) ise sterile product line mein sterile injection port se inject karna (typically double-seat mix-proof valve steam barrier ke saath), aur (c) distribution ke liye in-line static mixer.</li>
                            </ul>
                        </li>
                    </ul>
                    <p class="mt-2"><strong>Flavour-protein interactions par vaigyanik detail:</strong> Milk mein, significant <strong>flavour binding</strong> hota hai. β-lactoglobulin, predominant whey protein, ke paas ek hydrophobic calyx (β-barrel) hai jo non-polar flavour molecules (aldehydes, ketones, lactones) ko hydrophobic interactions se bind karta hai. Is phenomenon ko <strong>"flavour scalping" ya "flavour binding"</strong> kehte hain, ye perceived flavour intensity ko kam karta hai aur iske liye paani-based system mein zaroori amount se 20–40% zyada flavouring add karna padta hai. Caseins bhi flavour compounds bind karte hain, mukhya roop se αs1-casein aur β-casein ke non-polar regions ke saath hydrophobic interactions se. UHT processing β-lactoglobulin ko partially unfold karti hai (UHT conditions par >70% denature hota hai), additional hydrophobic binding sites expose karti hai, jo UHT products mein flavour binding badha sakti hai.</p>
                </li>

                <li>
                    <strong>Packaging (Paketbandi) — CCP-2 (Biological Hazard):</strong>
                    <p class="mt-1">Packaging <strong>doosra Critical Control Point</strong> hai, khaaskar UHT flavoured milk ke liye jahan commercial sterility banaye rakhne ke liye post-process contamination ko bilkul rokna zaroori hai.</p>

                    <h5 class="text-md font-semibold text-gray-700 mt-3 mb-2">UHT Flavoured Milk — Aseptic Packaging</h5>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Packaging materials:</strong> Multi-layer laminates (jaise Tetra Pak Aseptic) jinmein hain: Polyethylene (PE, sabse andar — food contact, heat-sealable) → Aluminium foil (light aur oxygen barrier — photo-oxidation aur oxidative rancidity rokta hai) → Paperboard (structural rigidity) → PE (sabse baahar — moisture barrier). Kul 6 layers.</li>
                        <li><strong>Packaging material ka sterilization:</strong> Packaging material ko <strong>35% hydrogen peroxide (H₂O₂)</strong> bath/spray se 70–80°C par sterilize kiya jaata hai, phir hot air (≥125°C) se residual H₂O₂ ko <0.5 ppm (FSSAI/FDA limit) tak evaporate kiya jaata hai. Vaikalpik: H₂O₂ aur UV-C radiation (254 nm) ka combination. H₂O₂ ek strong oxidizer hai jo microbial cell membranes aur DNA ko destroy karta hai.</li>
                        <li><strong>Aseptic filling environment:</strong> Filling ek <strong>aseptic chamber</strong> mein ki jaati hai jo <strong>HEPA-filtered (0.3 µm par 99.97% efficiency) sterile air</strong> se positive pressure mein rakhi jaati hai taaki airborne contamination na ho. Filling zone ko H₂O₂ vapour ya superheated steam se pre-sterilize kiya jaata hai.</li>
                        <li><strong>Seal integrity:</strong> Longitudinal seal (LS) aur transverse seals (TS) PE-aluminium layers ke induction heating se bante hain. Seal strength ≥8 N/15 mm honi chahiye (Tetra Pak specifications ke anusaar). <strong>Seal integrity sarvopari hai</strong> — ek bhi compromised seal microbial ingress ki ijazat deta hai aur sterility khatam ho jaati hai.</li>
                    </ul>

                    <h5 class="text-md font-semibold text-gray-700 mt-3 mb-2">Pasteurized Flavoured Milk — Clean Packaging</h5>
                    <p>Bottles (HDPE, PET), pouches (LDPE/LLDPE), ya gable-top cartons mein sanitized environment mein <strong>clean (zaruri nahi ki aseptic) conditions</strong> mein pack kiya jaata hai. Product commercially sterile nahi hai — ye shelf life extension ke liye cold chain par depend karta hai. Filling equipment CIP (Clean-In-Place) treated aur production se pehle sanitized hota hai.</p>

                    <p class="mt-3"><strong>CCP-2 ke Critical Limits aur Monitoring:</strong></p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Critical Limit (UHT Aseptic)</th>
                                    <th class="p-2 border">Monitoring Method</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border">H₂O₂ concentration</td>
                                    <td class="p-2 border">30–35% (w/w)</td>
                                    <td class="p-2 border">Har 4 ghante hydrometer measurement</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">H₂O₂ bath temperature</td>
                                    <td class="p-2 border">≥70°C</td>
                                    <td class="p-2 border">Continuous temperature sensor</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Package mein residual H₂O₂</td>
                                    <td class="p-2 border"><0.5 ppm</td>
                                    <td class="p-2 border">Quantitative peroxide strip test (har 30 min)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Aseptic chamber air pressure</td>
                                    <td class="p-2 border">Positive pressure (ambient se ≥3 Pa upar)</td>
                                    <td class="p-2 border">Differential pressure manometer (continuous)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Seal integrity</td>
                                    <td class="p-2 border">Koi leaks nahi; seal strength ≥8 N/15 mm</td>
                                    <td class="p-2 border">Visual inspection; dye penetration test (periodic); tear-down test (har 30 min)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Package sterility</td>
                                    <td class="p-2 border">Incubation ke baad koi microbial growth nahi</td>
                                    <td class="p-2 border">Random sampling → 37°C/15 din aur 55°C/7 din par incubation; har 1,000 produced mein se ek package</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>

                <li>
                    <strong>Metal Detection / X-ray Inspection — CCP-3 (Physical Hazard):</strong>
                    <p class="mt-1">Sabhi finished packages <strong>metal detector</strong> aur/ya <strong>X-ray inspection system</strong> se guzarte hain physical contaminants (equipment wear se metal ke tukde, cleaning brushes ke wire bristles, patthar, kaanch, dense plastic) detect karne ke liye. Ye physical hazards ke liye ek CCP hai.</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Detection System</th>
                                    <th class="p-2 border">Critical Limit</th>
                                    <th class="p-2 border">Verification</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border">Metal Detector</td>
                                    <td class="p-2 border">Ferrous: ≥1.5 mm; Non-ferrous: ≥2.0 mm; Stainless Steel 316: ≥2.5 mm</td>
                                    <td class="p-2 border">Certified test pieces se shuru mein, har 2 ghante, aur production ke ant mein test. Automatic reject aur reject confirmation verify honi chahiye.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">X-ray Inspection</td>
                                    <td class="p-2 border">Metal, glass, stone, bone, dense plastic ≥2.0 mm ka detection</td>
                                    <td class="p-2 border">Density-specific test cards se test; har shift mein sensitivity verification</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2"><strong>Note:</strong> Aluminium-foil laminated packages (Tetra Pak) ke liye, conventional metal detectors ki sensitivity limited hoti hai aluminium layer ki wajah se. <strong>Aise packages ke liye X-ray inspection preferred technology hai</strong>.</p>
                </li>

                <li>
                    <strong>Storage aur Distribution (Bhandaran aur Vitaran):</strong>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Pasteurized flavoured milk:</strong> Refrigerated cold stores mein <strong>≤4°C</strong> par store kiya jaata hai. Puri distribution mein cold chain banaye rakhna zaroori hai. Shelf life: <strong>7–14 din</strong> (excellent hygiene aur ESL — Extended Shelf Life technology, yani 123–127°C par 1–2 seconds pasteurization + aseptic ya ultra-clean filling ke saath 21 din tak extend ho sakti hai).</li>
                        <li><strong>UHT flavoured milk:</strong> <strong>Ambient temperature (≤25°C recommend; ≤30°C maximum)</strong> par store kiya jaata hai. Direct sunlight exposure se bachein (packaging ke through bhi — UV radiation patli paperboard se penetrate kar sakti hai aur riboflavin ki photo-oxidation catalyze kar sakti hai, singlet oxygen generate karti hai jo methionine par attack karta hai → methional → "sunlight flavour" ya "light-induced off-flavour"). Shelf life: <strong>6–9 mahine</strong> (product formulation, packaging integrity, aur storage temperature par depend karta hai).</li>
                        <li><strong>In-bottle sterilized:</strong> Ambient storage; shelf life: <strong>6–12 mahine</strong>.</li>
                    </ul>

                    <p class="mt-2"><strong>Temperature Abuse aur Microbial Growth:</strong> Pasteurized flavoured milk mein, primary spoilage concern <strong>psychrotrophic bacteria</strong> hain — wo organisms jo ≤7°C par grow karte hain halaanki unka optimum growth temperature zyada hota hai (20–30°C). Mukhya organisms mein <em>Pseudomonas fluorescens/putida</em> (post-pasteurization contaminant; pathogen nahi hai lekin heat-stable extracellular proteases aur lipases produce karta hai jo UHT milk mein bhi bitterness aur rancidity cause karte hain) aur psychrotrophic strains of <em>Bacillus cereus</em> (spore-former; pathogenic; ≥4°C par diarrheal enterotoxin produce karta hai) shamil hain. >7°C tak temperature abuse shelf life ko dramatically kam kar deti hai — bacterial growth ka Q₁₀ ~2–3 hai, matlab har 10°C increase growth rate ko double se triple karta hai.</p>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">HACCP Saransh Taalika (Summary Table)</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">CCP</th>
                            <th class="p-2 border">Step</th>
                            <th class="p-2 border">Hazard</th>
                            <th class="p-2 border">Critical Limit</th>
                            <th class="p-2 border">Monitoring</th>
                            <th class="p-2 border">Corrective Action</th>
                            <th class="p-2 border">Verification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>CCP-1</strong></td>
                            <td class="p-2 border">Heat Treatment</td>
                            <td class="p-2 border">Biological — pathogens ka bacha rehna</td>
                            <td class="p-2 border">HTST: ≥72°C/15s; UHT: ≥135°C/2s</td>
                            <td class="p-2 border">Continuous T-t recording; FDV position</td>
                            <td class="p-2 border">Auto-divert; re-process; root cause analysis</td>
                            <td class="p-2 border">Phosphatase test; sterility incubation; sensor calibration</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>CCP-2</strong></td>
                            <td class="p-2 border">Packaging</td>
                            <td class="p-2 border">Biological — post-process contamination (UHT); Chemical — residual H₂O₂</td>
                            <td class="p-2 border">H₂O₂ ≥30%; bath ≥70°C; residual <0.5 ppm; positive chamber pressure; seal integrity</td>
                            <td class="p-2 border">T, concentration, pressure sensors; seal inspection</td>
                            <td class="p-2 border">Production rok do; suspect product alag karo; investigation karo; full aseptic verification ke baad restart</td>
                            <td class="p-2 border">Incubation tests; H₂O₂ residual analysis; environmental monitoring</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>CCP-3</strong></td>
                            <td class="p-2 border">Metal/X-ray Detection</td>
                            <td class="p-2 border">Physical — foreign bodies (metal, glass, stone)</td>
                            <td class="p-2 border">Fe ≥1.5 mm; Non-Fe ≥2.0 mm; SS ≥2.5 mm detected aur rejected</td>
                            <td class="p-2 border">Continuous; har 2 ghante test piece verification</td>
                            <td class="p-2 border">Rejected packs alag karo; last good test ke baad ka product hold aur re-inspect karo; source investigate karo</td>
                            <td class="p-2 border">Test piece records; reject count analysis; equipment maintenance logs</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Flavoured Milk mein Aam Dosh (Common Defects) — Kaaran aur Roktham</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Dosh (Defect)</th>
                            <th class="p-2 border">Vivaran (Description)</th>
                            <th class="p-2 border">Kaaran (Cause)</th>
                            <th class="p-2 border">Roktham (Prevention)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Sedimentation (Talnchhat)</strong></td>
                            <td class="p-2 border">Cocoa/mineral particles neeche baith jaate hain aur ek sakht layer banate hain</td>
                            <td class="p-2 border">Stabilizer level kam; homogenization aparyaapt; particle size bahut bada; kam viscosity</td>
                            <td class="p-2 border">Carrageenan/gellan gum level optimize karein; d₅₀ <15 µm ensure karein; ≥150 bar par two-stage homogenization; total solids badhayein</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fat Separation (Creaming)</strong></td>
                            <td class="p-2 border">Package ke upar cream layer ya fat plug</td>
                            <td class="p-2 border">Aparyaapt homogenization; homogenizer valve ghis gaya; bahut kam temperature par homogenization (fat crystallized)</td>
                            <td class="p-2 border">60–70°C par homogenization maintain karein; homogenization efficiency verify karein (NIZO value ≥80%); ghise hue valve parts badlein</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Gelation (Age Gelation)</strong></td>
                            <td class="p-2 border">Storage ke dauraan product viscous ho jaata hai aur finally gel ban jaata hai (khaaskar UHT mein)</td>
                            <td class="p-2 border">Kachche doodh mein psychrotrophic bacteria (khaaskar <em>Pseudomonas</em> spp.) ke heat-resistant proteases casein ko hydrolyze karte hain, antmein colloidal system destabilize hota hai. Saath hi, β-lactoglobulin-κ-casein complexes dheere-dheere rearrange, cross-link, aur aggregate hote hain.</td>
                            <td class="p-2 border">Kachche doodh mein kam bacterial count ensure karein (<100,000 CFU/mL); pre-processing storage time minimize karein; protein stability improve karne ke liye sodium hexametaphosphate (SHMP, 0.05–0.1%) calcium sequestrant ke roop mein add karne par vichar karein; <25°C par storage (gelation temperature-dependent hai, Arrhenius kinetics follow karta hai)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Cooked/Caramelized Flavour</strong></td>
                            <td class="p-2 border">Pronounced cooked, caramel, ya "anda jaisa" swaad</td>
                            <td class="p-2 border">Zyada heat treatment (high C* value); zyada sugar content Maillard reaction accelerate karta hai; indirect UHT jismein lamba come-up time</td>
                            <td class="p-2 border">Direct UHT system use karein; C* value minimize karein; pre-crystallized sugar use karein; anaaavashyak heating kam karein</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Oxidized/Light Flavour</strong></td>
                            <td class="p-2 border">"Cardboard," "metallic," ya "painty" off-flavour</td>
                            <td class="p-2 border">Lipid autoxidation jo dissolved oxygen, light exposure (riboflavin-sensitized photo-oxidation), copper/iron contamination se catalyzed</td>
                            <td class="p-2 border"><2 ppm DO tak de-aerate karein; light-barrier packaging use karein (aluminium foil layer); copper/iron contact surfaces se bachein; permitted antioxidants add karein (jaise ascorbyl palmitate, tocopherols)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Kadwa Swaad (Bitter Flavour)</strong></td>
                            <td class="p-2 border">Storage ke dauraan dheere-dheere badhti kadwahat</td>
                            <td class="p-2 border">Heat-stable proteases (<em>Pseudomonas</em> se) ya plasmin (doodh ka indigenous enzyme) dwara proteolysis; casein se hydrophobic kadwe peptides nikalte hain, khaaskar β-casein se (C-terminal fragments jo proline, valine, leucine mein ameer hain)</td>
                            <td class="p-2 border">Achhi quality ka kachcha doodh (kam SCC, kam psychrotrophic count); plasminogen activators ko inactivate karne ke liye effective pre-pasteurization</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Rang ka Pheeka Padna (Colour Fading)</strong></td>
                            <td class="p-2 border">Storage ke dauraan colour intensity mein kami</td>
                            <td class="p-2 border">Colour compounds ka photo-degradation; Maillard reaction products original colour mask karte hain; pH shift pH-sensitive colourants ko affect karta hai (jaise berry flavours mein anthocyanins)</td>
                            <td class="p-2 border">Light-stable colours use karein; light se bachayein; alkalized cocoa use karein (pH-stable); zaroorat padne par pH buffer karein</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Package Swelling (Phule hue Pack)</strong></td>
                            <td class="p-2 border">Package gas se visibly distended (phula hua)</td>
                            <td class="p-2 border">Microbial growth — gas-producing organisms (coliforms, <em>Clostridium</em> spp., yeast); packaging integrity failure (UHT) ya post-contamination ko darshata hai</td>
                            <td class="p-2 border">Aseptic packaging integrity verify karein; seal quality check karein; incubation testing; filling room ka environmental monitoring</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fat Destabilization / Oiling Off</strong></td>
                            <td class="p-2 border">Surface par free fat dikhna; greasy mouthfeel</td>
                            <td class="p-2 border">Excessive homogenization pressure (>250 bar) jisse "over-homogenization" — fat globules bahut chhote ho jaate hain, unhe cover karne ke liye paryaapt surface protein nahi → coalescence; ya pumping/transportation ke dauraan emulsion ko damage</td>
                            <td class="p-2 border">Homogenization pressure optimize karein (first stage 150–200 bar); emulsifiers add karein; post-homogenization mein gentle handling</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Flavoured Milk ke liye Gunvatta Niyantran Parikshan (Quality Control Tests)</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Test</th>
                            <th class="p-2 border">Method/Siddhant (Principle)</th>
                            <th class="p-2 border">Aavriti (Frequency)</th>
                            <th class="p-2 border">Manak/Lakshya (Standard/Target)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border">Fat Content</td>
                            <td class="p-2 border">Gerber method (BIS:1224-Part 1) ya Mojonnier ether extraction ya FTIR (Milkoscan)</td>
                            <td class="p-2 border">Har batch</td>
                            <td class="p-2 border">Label par declared ke anusaar; ±0.2% tolerance</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">SNF Content</td>
                            <td class="p-2 border">Gravimetric (IS:1479-Part II) ya FTIR</td>
                            <td class="p-2 border">Har batch</td>
                            <td class="p-2 border">Milk type standard ke anusaar</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Total Solids</td>
                            <td class="p-2 border">Oven drying (103°C par 3 ghante) ya refractometry</td>
                            <td class="p-2 border">Har batch</td>
                            <td class="p-2 border">Formulation target ke anusaar</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Sucrose Content</td>
                            <td class="p-2 border">Polarimetry (Lane-Eynon method) ya HPLC</td>
                            <td class="p-2 border">Har batch</td>
                            <td class="p-2 border">Declared value ke ±0.5% ke andar</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Viscosity</td>
                            <td class="p-2 border">Brookfield viscometer (spindle #1 ya #2, 60 RPM, 20°C)</td>
                            <td class="p-2 border">Har batch</td>
                            <td class="p-2 border">Target: 10–50 mPa·s (product ke anusaar alag; chocolate > vanilla)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">pH</td>
                            <td class="p-2 border">pH meter (pH 4.0 aur 7.0 buffers se calibrated)</td>
                            <td class="p-2 border">Har batch</td>
                            <td class="p-2 border">6.4–6.8 (natural cocoa ise 6.2 tak neeche la sakta hai)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Colour (L*, a*, b*)</td>
                            <td class="p-2 border">Spectrophotometric colour measurement (CIE L*a*b* colour space) Hunter Lab ya Konica Minolta colorimeter se</td>
                            <td class="p-2 border">Har batch</td>
                            <td class="p-2 border">Standard ke ΔE <2.0 ke andar (mushkil se pata chalne wala colour difference)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Homogenization Efficiency</td>
                            <td class="p-2 border">NIZO method (1000 × g par 30 min centrifuge; upper aur lower layers mein fat compare karein) ya laser diffraction particle size analysis (Malvern Mastersizer)</td>
                            <td class="p-2 border">Har batch</td>
                            <td class="p-2 border">NIZO value ≥80%; d₃₂ (fat) ≤0.8 µm</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Sedimentation Test</td>
                            <td class="p-2 border">Centrifuge method (500 × g par 10 min; sediment volume measure karein) ya shelf-life simulation (25°C par 30 din store karke, sedimentation ka visual assessment)</td>
                            <td class="p-2 border">Har batch (centrifuge); accelerated shelf life studies (periodic)</td>
                            <td class="p-2 border">Sediment ≤0.5 mL per 100 mL</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Phosphatase Test</td>
                            <td class="p-2 border">Aschaffenburg-Mullen (colourimetric) ya Fluorophos (fluorometric, IS:5765)</td>
                            <td class="p-2 border">Har batch (pasteurized)</td>
                            <td class="p-2 border">Negative (<350 mU/L)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Turbidity Test</td>
                            <td class="p-2 border">Ammonium sulphate method (sterilized/UHT ke liye): saturated (NH₄)₂SO₄ add karein → agar clear ho = saara whey protein denature ho gaya = paryaapt sterilization; turbid = aparyaapt</td>
                            <td class="p-2 border">Har batch (UHT/sterilized)</td>
                            <td class="p-2 border">Negative (clear supernatant)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Sterility Test (UHT)</td>
                            <td class="p-2 border">Incubation: 37°C par 15 din (mesophiles) + 55°C par 7 din (thermophiles); swelling, off-odour, pH change (>0.5 unit) ke liye visual inspection, aur PCA/VRBA par plating</td>
                            <td class="p-2 border">Har 1,000 packages mein 1 (minimum); sabhi production represented honi chahiye</td>
                            <td class="p-2 border">Koi microbial growth nahi; koi pH change nahi; koi visual defects nahi</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Sensory Evaluation (Indriya Mulyankan)</td>
                            <td class="p-2 border">Trained panel (6–10 panellists); 9-point hedonic scale ya quantitative descriptive analysis (QDA) use karke attributes ke liye descriptive profiling: colour, sweetness, flavour intensity, body, mouthfeel, aftertaste</td>
                            <td class="p-2 border">Har batch (in-line); monthly detailed profiling</td>
                            <td class="p-2 border">Hedonic scale par score ≥7/9; koi off-flavours nahi</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Udaaharan Formulation — Chocolate Flavoured Milk (Toned Milk Base)</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Ingredient (Samagri)</th>
                            <th class="p-2 border">% (w/w)</th>
                            <th class="p-2 border">Karya (Function)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Toned Milk (3.0% fat, 8.5% SNF)</td><td class="p-2 border">86.47</td><td class="p-2 border">Base; protein, fat, lactose, minerals, vitamins provide karta hai</td></tr>
                        <tr><td class="p-2 border">Sucrose (refined sugar)</td><td class="p-2 border">7.00</td><td class="p-2 border">Meethaas dene wala; body aur mouthfeel mein yogdaan</td></tr>
                        <tr><td class="p-2 border">Skim Milk Powder (SMP)</td><td class="p-2 border">2.00</td><td class="p-2 border">SNF fortification; body aur protein content improve karta hai</td></tr>
                        <tr><td class="p-2 border">Alkalized Cocoa Powder (10–12% fat)</td><td class="p-2 border">1.20</td><td class="p-2 border">Flavour aur colour; polyphenols ka source</td></tr>
                        <tr><td class="p-2 border">Liquid Glucose (DE 42)</td><td class="p-2 border">3.00</td><td class="p-2 border">Co-sweetener; sweetness intensity kam karta hai; body improve karta hai; per unit weight sucrose se zyada effectively water activity depress karta hai</td></tr>
                        <tr><td class="p-2 border">κ-Carrageenan (refined)</td><td class="p-2 border">0.020</td><td class="p-2 border">Suspension stabilizer; casein-carrageenan gel network se cocoa sedimentation rokta hai</td></tr>
                        <tr><td class="p-2 border">Microcrystalline Cellulose + CMC (co-processed)</td><td class="p-2 border">0.10</td><td class="p-2 border">Co-stabilizer; zyada viscosity ke bina particle suspension ke liye colloidal network provide karta hai</td></tr>
                        <tr><td class="p-2 border">Mono- aur Diglycerides (GMS, INS 471)</td><td class="p-2 border">0.10</td><td class="p-2 border">Emulsifier; fat globule stability mein madad karta hai aur mouthfeel improve karta hai</td></tr>
                        <tr><td class="p-2 border">Vanillin</td><td class="p-2 border">0.01</td><td class="p-2 border">Flavour enhancer; chocolate flavour profile ko round out karta hai</td></tr>
                        <tr><td class="p-2 border">Namak (NaCl)</td><td class="p-2 border">0.08</td><td class="p-2 border">Flavour enhancer; kadwahat (bitterness) ko dabata hai (ENaC channels ke through ion-mediated taste modulation)</td></tr>
                        <tr><td class="p-2 border"><strong>Kul (Total)</strong></td><td class="p-2 border"><strong>100.00</strong></td><td class="p-2 border"></td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2"><strong>Final product ki calculated composition:</strong> Fat ~2.72%, Protein ~3.35%, Total Solids ~17.2%, Energy ~85 kcal/100 mL</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Poshak Tatva ki Tulna — Saada Doodh vs. Flavoured Milk (per 100 mL)</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Poshak Tatva (Nutrient)</th>
                            <th class="p-2 border">Saada Toned Milk</th>
                            <th class="p-2 border">Chocolate Flavoured Milk (Toned Base)</th>
                            <th class="p-2 border">Tippani (Remarks)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Energy (kcal)</td><td class="p-2 border">58</td><td class="p-2 border">85</td><td class="p-2 border">Added sugar ki wajah se +47%; halaanki, studies dikhate hain ki flavoured milk consumers ka overall dairy nutrient intake behtar hota hai</td></tr>
                        <tr><td class="p-2 border">Protein (g)</td><td class="p-2 border">3.2</td><td class="p-2 border">3.4</td><td class="p-2 border">SMP fortification ki wajah se thoda zyada</td></tr>
                        <tr><td class="p-2 border">Fat (g)</td><td class="p-2 border">3.0</td><td class="p-2 border">2.7</td><td class="p-2 border">Non-fat ingredients</td></tr>
                        <tr><td class="p-2 border">Carbohydrate (g)</td><td class="p-2 border">4.9 (all lactose)</td><td class="p-2 border">12.0 (lactose + sucrose + glucose)</td><td class="p-2 border">Significant increase; added sugars ~7 g per 100 mL</td></tr>
                        <tr><td class="p-2 border">Calcium (mg)</td><td class="p-2 border">120</td><td class="p-2 border">108</td><td class="p-2 border">~10% reduction due to dilution; cocoa oxalates may slightly reduce calcium bioavailability</td></tr>
                        <tr><td class="p-2 border">Phosphorus (mg)</td><td class="p-2 border">93</td><td class="p-2 border">95</td><td class="p-2 border">Comparable; cocoa provides additional phosphorus</td></tr>
                        <tr><td class="p-2 border">Riboflavin (mg)</td><td class="p-2 border">0.17</td><td class="p-2 border">0.15</td><td class="p-2 border">Slight reduction; sensitive to light — aluminium foil packaging critical</td></tr>
                        <tr><td class="p-2 border">Vitamin B₁₂ (µg)</td><td class="p-2 border">0.5</td><td class="p-2 border">0.4</td><td class="p-2 border">Moderate heat loss during UHT processing</td></tr>
                        <tr><td class="p-2 border">Theobromine (mg)</td><td class="p-2 border">0</td><td class="p-2 border">15–20</td><td class="p-2 border">From cocoa; mild stimulant and vasodilator</td></tr>
                        <tr><td class="p-2 border">Polyphenols (mg GAE)</td><td class="p-2 border">Negligible</td><td class="p-2 border">20–35</td><td class="p-2 border">From cocoa; antioxidant properties; however, binding with casein may reduce bioavailability</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shelf Life Determinants and Degradation Kinetics</h3>
            <p>The shelf life of flavoured milk is determined by the <strong>rate-limiting deterioration mechanism</strong>, which differs by product type:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Product Type</th>
                            <th class="p-2 border">Primary Shelf Life Limiting Factor</th>
                            <th class="p-2 border">Secondary Factors</th>
                            <th class="p-2 border">Typical Shelf Life</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Pasteurized</strong></td>
                            <td class="p-2 border">Microbial spoilage (psychrotrophic bacteria — <em>Pseudomonas, Bacillus</em> spp.); follows sigmoidal growth curve; lag phase → log phase → stationary phase</td>
                            <td class="p-2 border">Lipid oxidation; colour fading; physical separation</td>
                            <td class="p-2 border">7–14 days at ≤4°C</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>UHT</strong></td>
                            <td class="p-2 border">Physico-chemical changes: age gelation (enzymatic and non-enzymatic protein cross-linking), sedimentation, Maillard browning (follows zero-order kinetics: colour change ΔE ∝ time), lipid oxidation</td>
                            <td class="p-2 border">Flavour change; vitamin degradation (first-order kinetics for vitamin C: C = C₀ × e^(-kt))</td>
                            <td class="p-2 border">6–9 months at ≤25°C</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>In-Bottle Sterilized</strong></td>
                            <td class="p-2 border">Maillard browning (extensive — already advanced due to severe heat treatment); physical sedimentation</td>
                            <td class="p-2 border">Vitamin loss; protein quality deterioration (lysine blockage)</td>
                            <td class="p-2 border">6–12 months at ambient</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p class="mt-3"><strong>Accelerated Shelf Life Testing (ASLT):</strong> For UHT products, shelf life is predicted using elevated temperature storage (37°C or 40°C) and applying the <strong>Arrhenius equation</strong> to extrapolate to actual storage temperature:</p>
            <div class="bg-gray-100 p-4 rounded mt-2 text-center font-mono">
                k = A × e^(−E<sub>a</sub> / RT)
            </div>
            <p class="mt-2">Where k = rate constant of degradation, A = pre-exponential factor, E<sub>a</sub> = activation energy (kJ/mol), R = gas constant (8.314 J/mol·K), T = absolute temperature (K). The <strong>Q₁₀ value</strong> (ratio of rate constants at temperatures 10°C apart) for Maillard browning in milk is typically 2.5–3.5, meaning storage at 37°C for 1 month approximates ~3 months at 25°C.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Clean-In-Place (CIP) for Flavoured Milk Processing Equipment</h3>
            <p>Flavoured milk, especially chocolate milk, creates more challenging fouling deposits than plain milk due to the combination of protein/mineral deposits (Type A and Type B fouling) plus cocoa particles and caramelized sugar. A typical CIP sequence for the UHT plant and homogenizer:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Step</th>
                            <th class="p-2 border">Agent</th>
                            <th class="p-2 border">Concentration</th>
                            <th class="p-2 border">Temperature</th>
                            <th class="p-2 border">Duration</th>
                            <th class="p-2 border">Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">1</td><td class="p-2 border">Warm water rinse</td><td class="p-2 border">—</td><td class="p-2 border">40–50°C</td><td class="p-2 border">10 min</td><td class="p-2 border">Remove gross residues; lower product loss</td></tr>
                        <tr><td class="p-2 border">2</td><td class="p-2 border">Caustic (NaOH)</td><td class="p-2 border">1.5–2.0% w/v</td><td class="p-2 border">75–85°C</td><td class="p-2 border">30 min</td><td class="p-2 border">Dissolve protein deposits (saponification of fats, hydrolysis/solubilization of denatured proteins, swelling and removal of biofilms); cocoa fat removal</td></tr>
                        <tr><td class="p-2 border">3</td><td class="p-2 border">Intermediate water rinse</td><td class="p-2 border">—</td><td class="p-2 border">Ambient</td><td class="p-2 border">5 min</td><td class="p-2 border">Remove alkali residues</td></tr>
                        <tr><td class="p-2 border">4</td><td class="p-2 border">Acid (HNO₃ or H₃PO₄)</td><td class="p-2 border">0.5–1.0% w/v</td><td class="p-2 border">65–70°C</td><td class="p-2 border">20 min</td><td class="p-2 border">Dissolve mineral deposits (milkstone — calcium phosphate, Ca₃(PO₄)₂); remove alkali-insoluble residues</td></tr>
                        <tr><td class="p-2 border">5</td><td class="p-2 border">Final water rinse</td><td class="p-2 border">—</td><td class="p-2 border">Ambient</td><td class="p-2 border">5 min</td><td class="p-2 border">Remove acid residues; verify conductivity ≤50 µS/cm (near potable water quality)</td></tr>
                        <tr><td class="p-2 border">6</td><td class="p-2 border">Hot water sanitization OR chemical sanitization (peracetic acid 0.1–0.15%)</td><td class="p-2 border">—</td><td class="p-2 border">90–95°C (hot water) / ambient (PAA)</td><td class="p-2 border">15–20 min / 10 min</td><td class="p-2 border">Destroy residual microorganisms; peracetic acid (CH₃COOOH) is preferred as it is effective at ambient temperature, breaks down to acetic acid + oxygen (no toxic residues), and is effective against biofilms</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2"><strong>CIP verification:</strong> Visual inspection (where possible), swab testing (ATP bioluminescence — pass threshold ≤10 RLU for product contact surfaces), allergen rinse testing (for lines shared with soy/nut-based beverages — ELISA testing for specific allergen proteins), chemical residual testing (titration for NaOH/acid in final rinse water).</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Emerging Trends in Flavoured Milk Technology</h3>
            <ul class="list-disc list-outside pl-5 space-y-3">
                <li><strong>Clean Label Stabilization:</strong> Consumer demand for "no artificial ingredients" is driving the use of clean-label alternatives such as <strong>citrus fibre, locust bean gum, gellan gum</strong>, and <strong>native starches</strong> to replace synthetic-sounding carrageenan and CMC. Pectin-casein complexation at pH 4.0–5.0 is being explored for acidified flavoured milk drinks.</li>
                <li><strong>High-Pressure Processing (HPP):</strong> Non-thermal pasteurization at 400–600 MPa for 3–5 minutes. Inactivates vegetative pathogens while preserving heat-sensitive flavours, colours, and vitamins. Does not inactivate spores (not equivalent to sterilization). Currently limited to refrigerated products. Preserves the native structure of whey proteins (no denaturation), resulting in better flavour and nutritional quality.</li>
                <li><strong>Pulsed Electric Field (PEF):</strong> Short pulses (µs) of high-voltage electric fields (20–40 kV/cm) cause electroporation of microbial cell membranes, leading to cell death. Temperature rise is minimal (<40°C). Preserves fresh-like quality. Being explored for flavoured milk as a pre-treatment to reduce microbial load before mild pasteurization.</li>
                <li><strong>Protein Fortification:</strong> Addition of <strong>whey protein concentrate (WPC 80)</strong>, <strong>micellar casein concentrate (MCC)</strong>, or <strong>milk protein isolate (MPI)</strong> to create "high-protein flavoured milk" (8–15 g protein per serving). Popular in sports nutrition segment. Requires careful formulation to avoid excessive viscosity and heat-induced gelation.</li>
                <li><strong>Sugar Reduction Strategies:</strong> Use of <strong>stevia + monk fruit extract</strong> blends (synergistic sweetness, reduced off-taste), <strong>sweet whey permeate</strong> (naturally contains lactose for sweetness), <strong>enzymatic lactose hydrolysis</strong> (glucose + galactose from lactase treatment — 70% sweeter than lactose), and <strong>flavour modulating compounds</strong> (e.g., Symrise Sweetness Enhancers) that amplify sweetness perception without adding sugar.</li>
                <li><strong>Probiotic Flavoured Milk:</strong> Incorporation of <em>Lactobacillus acidophilus</em>, <em>L. casei</em>, <em>Bifidobacterium lactis</em> at levels ≥10⁶ CFU/mL at end of shelf life. Must be added post-pasteurization; not compatible with UHT processing. Requires strict cold chain. FSSAI mandates minimum 10⁸ CFU/g at the time of manufacture for probiotic claims.</li>
                <li><strong>Fortification with Micronutrients:</strong> Vitamin D₃ (cholecalciferol, fat-soluble, added in oil emulsion; 200–400 IU per serving), iron (ferrous bisglycinate chelate — highest bioavailability, does not cause oxidation or off-flavour unlike ferrous sulphate), zinc, and omega-3 fatty acids (microencapsulated DHA/EPA) for functional flavoured milk targeting child nutrition.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Key Points Summary</h3>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li>Flavoured milk is a complex colloidal system requiring careful balance of emulsion stability (fat), suspension stability (cocoa/additives), and microbial safety.</li>
                <li>κ-Carrageenan at 100–300 ppm is the gold-standard stabilizer for chocolate milk due to its specific electrostatic interaction with κ-casein on casein micelle surfaces, creating a weak thixotropic gel that suspends cocoa particles.</li>
                <li>Two-stage homogenization (150–200 bar / 30–50 bar) is essential for emulsion stability and uniform texture; the second stage prevents bridging flocculation.</li>
                <li>HTST pasteurization (72°C/15s) is designed around the thermal resistance of <em>Coxiella burnetii</em>; alkaline phosphatase (ALP) inactivation serves as the verification indicator. Added sugar and fat increase microbial heat resistance — a safety margin is recommended.</li>
                <li>UHT processing (135–150°C/2–4s) achieves commercial sterility (B* ≥ 1) with minimal chemical damage (C* ≤ 1); direct systems (steam injection/infusion) offer superior flavour preservation over indirect systems.</li>
                <li>Aseptic packaging integrity is the second CCP — H₂O₂ sterilization of packaging material, HEPA-filtered positive-pressure filling zone, and rigorous seal integrity monitoring are critical.</li>
                <li>Post-process flavour addition via aseptic dosing preserves volatile flavour compounds in UHT products.</li>
                <li>Age gelation, sedimentation, Maillard browning, and lipid oxidation are the primary quality deterioration mechanisms during storage of UHT flavoured milk.</li>
            </ul>
        `
    }
}
