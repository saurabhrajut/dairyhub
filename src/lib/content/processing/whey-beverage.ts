
export const wheyBeverageContent = {
    en: {
        title: "Whey-based Beverage Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Whey-based Beverages</h3>
            <p>Whey is the aqueous fraction of milk that separates from the curd (casein coagulum) during cheese, paneer, or chhana manufacturing. Globally, approximately 180–190 million tonnes of liquid whey are produced annually, with nearly 50% of this volume still being discarded or underutilized, posing significant environmental challenges owing to its high Biological Oxygen Demand (BOD) of 30,000–50,000 mg/L and Chemical Oxygen Demand (COD) of 60,000–80,000 mg/L. Converting whey into value-added beverages is both an environmental and economic imperative.</p>

            <p class="mt-3">Whey retains approximately 55% of the total milk nutrients. Its dry matter content (6.0–7.0% w/v) comprises lactose (4.5–5.0%), soluble whey proteins (0.6–1.0%), minerals (0.5–0.7%), lactic acid (up to 0.8% in acid whey), and residual milk fat (0.05–0.5%). The protein fraction is of exceptional biological quality, with a Protein Digestibility Corrected Amino Acid Score (PDCAAS) of 1.0 — the highest possible value — and a Biological Value (BV) of 104, surpassing egg (BV 100) and casein (BV 77).</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Types of Whey</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2 text-left">Parameter</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Sweet Whey (Rennet Whey)</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Acid Whey (Paneer/Chhana Whey)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-4 py-2">Source</td><td class="border border-gray-300 px-4 py-2">Cheese making (enzymatic coagulation)</td><td class="border border-gray-300 px-4 py-2">Paneer, Chhana, Strained yoghurt, Cottage cheese (acid/heat coagulation)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">pH</td><td class="border border-gray-300 px-4 py-2">6.0–6.6</td><td class="border border-gray-300 px-4 py-2">4.0–5.0</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Titratable Acidity (% lactic acid)</td><td class="border border-gray-300 px-4 py-2">0.10–0.15%</td><td class="border border-gray-300 px-4 py-2">0.40–0.80%</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Total Solids (%)</td><td class="border border-gray-300 px-4 py-2">6.3–7.0</td><td class="border border-gray-300 px-4 py-2">5.5–6.5</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Lactose (%)</td><td class="border border-gray-300 px-4 py-2">4.5–5.2</td><td class="border border-gray-300 px-4 py-2">3.8–4.5</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Protein (%)</td><td class="border border-gray-300 px-4 py-2">0.6–1.0</td><td class="border border-gray-300 px-4 py-2">0.5–0.8</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Fat (%)</td><td class="border border-gray-300 px-4 py-2">0.2–0.5</td><td class="border border-gray-300 px-4 py-2">0.05–0.3</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Ash / Minerals (%)</td><td class="border border-gray-300 px-4 py-2">0.5–0.7</td><td class="border border-gray-300 px-4 py-2">0.6–0.8</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Calcium (mg/L)</td><td class="border border-gray-300 px-4 py-2">400–600</td><td class="border border-gray-300 px-4 py-2">800–1200 (higher due to acid solubilization from casein micelle)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Caseinomacropeptide (CMP)</td><td class="border border-gray-300 px-4 py-2">Present (15–20% of total whey protein)</td><td class="border border-gray-300 px-4 py-2">Absent</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Flavour Profile</td><td class="border border-gray-300 px-4 py-2">Mild, slightly sweet, neutral</td><td class="border border-gray-300 px-4 py-2">Distinctly sour, sharp, tangy</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Beverage Suitability</td><td class="border border-gray-300 px-4 py-2">Excellent for neutral/sweet beverages; easier formulation</td><td class="border border-gray-300 px-4 py-2">Good for tangy/citrus beverages; requires more sugar/flavour masking</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3 text-sm text-gray-600"><strong>Note:</strong> In India, acid whey from paneer and chhana production is the dominant form. India produces approximately 5 million tonnes of paneer annually, generating roughly 25–30 million tonnes of acid whey, much of which is currently discarded into drains.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Major Whey Protein Fractions and Their Functional Significance</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2 text-left">Protein</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">% of Total Whey Protein</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Molecular Weight (kDa)</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Isoelectric Point (pI)</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Denaturation Temp. (°C)</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Key Bioactivities & Functions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">β-Lactoglobulin (β-Lg)</td><td class="border border-gray-300 px-4 py-2">50–55%</td><td class="border border-gray-300 px-4 py-2">18.3</td><td class="border border-gray-300 px-4 py-2">5.2</td><td class="border border-gray-300 px-4 py-2">~78°C</td><td class="border border-gray-300 px-4 py-2">Retinol and fatty acid binding, gelation, foaming; most heat-sensitive major whey protein; primary contributor to heat-induced aggregation and turbidity</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">α-Lactalbumin (α-La)</td><td class="border border-gray-300 px-4 py-2">20–25%</td><td class="border border-gray-300 px-4 py-2">14.2</td><td class="border border-gray-300 px-4 py-2">4.2–4.5</td><td class="border border-gray-300 px-4 py-2">~62°C (but reversible)</td><td class="border border-gray-300 px-4 py-2">Lactose synthase regulatory subunit; rich in tryptophan (4 residues); promotes sleep, anxiety reduction; anti-tumour (HAMLET complex); high Ca²⁺ binding</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Bovine Serum Albumin (BSA)</td><td class="border border-gray-300 px-4 py-2">5–7%</td><td class="border border-gray-300 px-4 py-2">66.4</td><td class="border border-gray-300 px-4 py-2">4.7–4.9</td><td class="border border-gray-300 px-4 py-2">~64°C</td><td class="border border-gray-300 px-4 py-2">Fatty acid transport, antioxidant (free thiol group), emulsification</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Immunoglobulins (IgG, IgA, IgM)</td><td class="border border-gray-300 px-4 py-2">10–15%</td><td class="border border-gray-300 px-4 py-2">150–1000</td><td class="border border-gray-300 px-4 py-2">5.5–8.3</td><td class="border border-gray-300 px-4 py-2">~72°C</td><td class="border border-gray-300 px-4 py-2">Passive immunity, antimicrobial, immune modulation</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Lactoferrin (LF)</td><td class="border border-gray-300 px-4 py-2">1–3%</td><td class="border border-gray-300 px-4 py-2">80</td><td class="border border-gray-300 px-4 py-2">8.0–8.5</td><td class="border border-gray-300 px-4 py-2">~65°C (apo-form); ~90°C (holo-form)</td><td class="border border-gray-300 px-4 py-2">Iron binding and transport, bacteriostatic (deprives bacteria of iron), anti-viral, anti-inflammatory, prebiotic activity</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Lactoperoxidase (LP)</td><td class="border border-gray-300 px-4 py-2">0.5–1%</td><td class="border border-gray-300 px-4 py-2">78</td><td class="border border-gray-300 px-4 py-2">9.6</td><td class="border border-gray-300 px-4 py-2">~78°C</td><td class="border border-gray-300 px-4 py-2">Antimicrobial enzyme (LP system with SCN⁻ and H₂O₂); natural biopreservative</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Glycomacropeptide (GMP/CMP)</td><td class="border border-gray-300 px-4 py-2">10–20% (sweet whey only)</td><td class="border border-gray-300 px-4 py-2">6.7–8.0</td><td class="border border-gray-300 px-4 py-2"><3.8</td><td class="border border-gray-300 px-4 py-2">Heat stable</td><td class="border border-gray-300 px-4 py-2">Satiety hormone (CCK) release, anti-cariogenic, prebiotic (bifidogenic), suitable for PKU patients (Phe-free)</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3"><strong>Critical Processing Implication:</strong> β-Lactoglobulin, the dominant whey protein, is the most problematic during beverage processing. At temperatures above 68°C at neutral pH, β-Lg undergoes irreversible denaturation: its free sulfhydryl group (Cys-121) is exposed, leading to thiol-disulfide interchange reactions, protein aggregation, and the development of undesirable turbidity, sedimentation, and cooked flavour. This is the fundamental scientific challenge in clear whey beverage production. At pH < 4.0 (below the pI of 5.2), however, β-Lg carries a strong net positive charge, which causes electrostatic repulsion between molecules, dramatically increasing heat stability and enabling heat treatment without aggregation — the principle underlying acidified clear whey drinks.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Bioactive Peptides Released During Whey Processing</h3>
            <p>Enzymatic hydrolysis and fermentation of whey proteins release bioactive peptides with demonstrated health benefits:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>ACE-Inhibitory Peptides (Antihypertensive):</strong> Peptides such as Ile-Pro-Ala (IPA) and Ala-Leu-Pro-Met-His-Ile-Arg from β-Lg hydrolysis inhibit Angiotensin-Converting Enzyme (ACE), with IC₅₀ values ranging from 42–580 μM, contributing to blood pressure reduction.</li>
                <li><strong>Opioid Peptides (α-Lactorphin, β-Lactorphin):</strong> Derived from α-La and β-Lg respectively; exhibit analgesic and antihypertensive effects via opioid receptor binding.</li>
                <li><strong>Antimicrobial Peptides (Lactoferricin B):</strong> Generated from pepsin digestion of lactoferrin; active against Gram-positive and Gram-negative bacteria, yeasts, and fungi at MIC values of 0.3–150 μg/mL.</li>
                <li><strong>Immunomodulatory Peptides:</strong> Stimulate lymphocyte proliferation, enhance phagocytic activity of macrophages, and modulate cytokine production.</li>
                <li><strong>Antioxidant Peptides:</strong> Contain cysteine residues that serve as precursors for glutathione (GSH) synthesis, the body's master intracellular antioxidant.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Vitamin and Mineral Profile of Whey</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2 text-left">Nutrient</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Amount per Litre of Whey</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Significance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-4 py-2">Calcium</td><td class="border border-gray-300 px-4 py-2">400–1200 mg (higher in acid whey)</td><td class="border border-gray-300 px-4 py-2">Bone health; acid whey contains more ionic/soluble Ca²⁺</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Phosphorus</td><td class="border border-gray-300 px-4 py-2">350–600 mg</td><td class="border border-gray-300 px-4 py-2">Bone and teeth; energy metabolism (ATP)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Potassium</td><td class="border border-gray-300 px-4 py-2">1300–1600 mg</td><td class="border border-gray-300 px-4 py-2">Electrolyte balance; makes whey suitable for sports/rehydration drinks</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Sodium</td><td class="border border-gray-300 px-4 py-2">400–550 mg</td><td class="border border-gray-300 px-4 py-2">Electrolyte; rehydration</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Magnesium</td><td class="border border-gray-300 px-4 py-2">60–90 mg</td><td class="border border-gray-300 px-4 py-2">Enzymatic cofactor, muscle function</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Zinc</td><td class="border border-gray-300 px-4 py-2">1.5–3.5 mg</td><td class="border border-gray-300 px-4 py-2">Immune function, wound healing</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Riboflavin (B₂)</td><td class="border border-gray-300 px-4 py-2">1.2–1.8 mg</td><td class="border border-gray-300 px-4 py-2">Energy metabolism; gives whey its greenish-yellow colour (fluorescence at 520 nm)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Pantothenic acid (B₅)</td><td class="border border-gray-300 px-4 py-2">3.0–4.0 mg</td><td class="border border-gray-300 px-4 py-2">CoA synthesis</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Pyridoxine (B₆)</td><td class="border border-gray-300 px-4 py-2">0.4–0.6 mg</td><td class="border border-gray-300 px-4 py-2">Amino acid metabolism</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Cobalamin (B₁₂)</td><td class="border border-gray-300 px-4 py-2">2.0–4.0 μg</td><td class="border border-gray-300 px-4 py-2">Red blood cell formation, neural function</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Ascorbic acid (Vitamin C)</td><td class="border border-gray-300 px-4 py-2">1.0–2.0 mg</td><td class="border border-gray-300 px-4 py-2">Antioxidant (often supplemented in beverages)</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Classification of Whey-based Beverages</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2 text-left">Category</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Description</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">pH Range</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Protein Clarity</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Clear/Transparent Whey Drinks</td><td class="border border-gray-300 px-4 py-2">Acid-clarified, deproteinized or protein-stable at low pH; soft-drink-like</td><td class="border border-gray-300 px-4 py-2">2.8–3.5</td><td class="border border-gray-300 px-4 py-2">Transparent or slightly hazy</td><td class="border border-gray-300 px-4 py-2">Rivella (Switzerland), Fruity Whey (concept), Lemon-lime whey soda</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Cloudy/Opaque Whey Drinks</td><td class="border border-gray-300 px-4 py-2">Protein retained; stabilized with hydrocolloids; juice-like appearance</td><td class="border border-gray-300 px-4 py-2">3.5–4.5</td><td class="border border-gray-300 px-4 py-2">Turbid/opaque</td><td class="border border-gray-300 px-4 py-2">Mango whey drink, whey-guava beverage, whey-orange beverage</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Fermented Whey Beverages</td><td class="border border-gray-300 px-4 py-2">Whey fermented with probiotic/lactic cultures</td><td class="border border-gray-300 px-4 py-2">3.8–4.5</td><td class="border border-gray-300 px-4 py-2">Turbid</td><td class="border border-gray-300 px-4 py-2">Probiotic whey drink (L. acidophilus), whey kefir</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Whey-Fruit Juice Blends</td><td class="border border-gray-300 px-4 py-2">Whey blended with fruit juice/pulp (typically 20–40% juice)</td><td class="border border-gray-300 px-4 py-2">3.0–4.2</td><td class="border border-gray-300 px-4 py-2">Variable</td><td class="border border-gray-300 px-4 py-2">Whey-mango, whey-pineapple, whey-pomegranate</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Carbonated Whey Beverages</td><td class="border border-gray-300 px-4 py-2">Clear whey drink with CO₂ injection (2.5–4.0 volumes CO₂)</td><td class="border border-gray-300 px-4 py-2">2.8–3.5</td><td class="border border-gray-300 px-4 py-2">Clear/sparkling</td><td class="border border-gray-300 px-4 py-2">Whey cola, sparkling whey lemonade</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Sports/Protein-enriched Whey Drinks</td><td class="border border-gray-300 px-4 py-2">Fortified with WPC/WPI for higher protein (8–15 g/serving); isotonic or hypertonic</td><td class="border border-gray-300 px-4 py-2">3.0–4.0</td><td class="border border-gray-300 px-4 py-2">Clear or cloudy</td><td class="border border-gray-300 px-4 py-2">Protein water, recovery whey drink, isotonic whey sports drink</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Whey-based Dairy Beverages (Lassi-type)</td><td class="border border-gray-300 px-4 py-2">Whey blended with buttermilk, dahi, or SMP to create dairy-type drinks</td><td class="border border-gray-300 px-4 py-2">4.0–4.8</td><td class="border border-gray-300 px-4 py-2">Opaque</td><td class="border border-gray-300 px-4 py-2">Whey lassi, whey chaas, reconstituted whey-SMP drink</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards and Regulatory Framework for Whey Beverages</h3>
            <p>While FSSAI does not have a single dedicated standard titled "Whey Beverage," the product must comply with multiple regulatory provisions:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-3">
                <li><strong>FSS (Food Products Standards and Food Additives) Regulations, 2011:</strong>
                    <ul class="list-circle list-outside pl-5 mt-1 space-y-1">
                        <li>If positioned as a non-carbonated water-based beverage, it falls under Section 2.3.30 — <em>"Non-carbonated water based beverages (non-alcoholic, ready to serve)"</em>, requiring minimum 10% (m/m) fruit juice content if claiming any fruit name.</li>
                        <li>If positioned as a dairy product or dairy-based beverage, it may align with Section 2.1 (Dairy Products) standards for compositional requirements.</li>
                        <li><strong>Whey Protein Concentrate (WPC)</strong> used in formulations must conform to IS 15894:2010 — Total protein content ≥ 34% on dry basis for WPC-34, ≥ 80% for WPC-80.</li>
                    </ul>
                </li>
                <li><strong>Permitted Additives (as per Schedule VA and VB):</strong>
                    <ul class="list-circle list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Preservatives:</strong> Sodium benzoate (INS 211) — max 200 ppm; Potassium sorbate (INS 202) — max 300 ppm; combined max 300 ppm. Nisin (INS 234) — max 12.5 mg/kg.</li>
                        <li><strong>Acidulants:</strong> Citric acid (INS 330), Malic acid (INS 296), Lactic acid (INS 270) — GMP levels.</li>
                        <li><strong>Stabilizers/Emulsifiers:</strong> Pectin (INS 440) — max 3000 ppm; CMC (INS 466) — max 5000 ppm; Xanthan gum (INS 415) — max 5000 ppm; Carrageenan (INS 407) — max 5000 ppm.</li>
                        <li><strong>Colours:</strong> Only FSSAI-permitted colours (e.g., Tartrazine INS 102 max 100 ppm, Sunset Yellow FCF INS 110 max 100 ppm, or natural colours like β-carotene).</li>
                        <li><strong>Flavouring agents:</strong> Must comply with Schedule VD; natural, nature-identical, or artificial flavours allowed as per category.</li>
                        <li><strong>Sweeteners (if sugar-free/diet variant):</strong> Aspartame (INS 951) max 600 ppm; Sucralose (INS 955) max 300 ppm; Stevia glycosides (INS 960) max 200 ppm.</li>
                    </ul>
                </li>
                <li><strong>Microbiological Standards (FSS Regulations, Schedule 2):</strong>
                    <div class="overflow-x-auto mt-2">
                        <table class="min-w-full border border-gray-300 text-sm">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Parameter</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">n</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">c</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">m</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">M</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border border-gray-300 px-3 py-1">Total Plate Count (TPC)</td><td class="border border-gray-300 px-3 py-1">5</td><td class="border border-gray-300 px-3 py-1">2</td><td class="border border-gray-300 px-3 py-1">10⁴ CFU/mL</td><td class="border border-gray-300 px-3 py-1">10⁵ CFU/mL</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Coliforms</td><td class="border border-gray-300 px-3 py-1">5</td><td class="border border-gray-300 px-3 py-1">2</td><td class="border border-gray-300 px-3 py-1">10 CFU/mL</td><td class="border border-gray-300 px-3 py-1">100 CFU/mL</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1"><em>E. coli</em></td><td class="border border-gray-300 px-3 py-1">5</td><td class="border border-gray-300 px-3 py-1">0</td><td class="border border-gray-300 px-3 py-1">Absent/mL</td><td class="border border-gray-300 px-3 py-1">—</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1"><em>Salmonella</em></td><td class="border border-gray-300 px-3 py-1">5</td><td class="border border-gray-300 px-3 py-1">0</td><td class="border border-gray-300 px-3 py-1">Absent/25 mL</td><td class="border border-gray-300 px-3 py-1">—</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1"><em>S. aureus</em></td><td class="border border-gray-300 px-3 py-1">5</td><td class="border border-gray-300 px-3 py-1">1</td><td class="border border-gray-300 px-3 py-1">10 CFU/mL</td><td class="border border-gray-300 px-3 py-1">100 CFU/mL</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1"><em>Listeria monocytogenes</em></td><td class="border border-gray-300 px-3 py-1">5</td><td class="border border-gray-300 px-3 py-1">0</td><td class="border border-gray-300 px-3 py-1">Absent/25 mL</td><td class="border border-gray-300 px-3 py-1">—</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Yeast and Mould</td><td class="border border-gray-300 px-3 py-1">5</td><td class="border border-gray-300 px-3 py-1">2</td><td class="border border-gray-300 px-3 py-1">10 CFU/mL</td><td class="border border-gray-300 px-3 py-1">100 CFU/mL</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="text-xs text-gray-500 mt-1">n = number of samples; c = maximum allowable number of defective samples; m = microbiological limit below which all results are acceptable; M = limit above which results are unacceptable.</p>
                </li>
                <li><strong>Labelling Requirements (FSS (Labelling and Display) Regulations, 2020):</strong> Must declare — product name and type, list of ingredients in descending order, nutritional information per 100 mL and per serving, best before/use by date, storage conditions, FSSAI license number and logo, allergen declaration (contains: <em>MILK</em>), net volume, batch/lot number, manufacturer details, vegetarian logo (green dot).</li>
                <li><strong>Contaminant Limits:</strong> Lead — max 0.5 mg/kg; Arsenic — max 0.1 mg/kg; Tin (if canned) — max 250 mg/kg; Aflatoxin M₁ — max 0.5 μg/kg.</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Whey-based Beverages with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Generalized Processing Flowchart for Whey Beverage Production</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Raw Whey Reception (from Paneer/Cheese making) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-50 border border-blue-200 rounded">Preliminary Straining/Filtration (Removal of curd fines) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Clarification by Centrifugation & Fat Separation <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Initial Pasteurization (72°C × 15 sec or 63°C × 30 min) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1 (B)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-50 border border-purple-200 rounded">Deproteinization (for clear drinks only: thermal denaturation at 90°C/pH 4.5 → centrifugation) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Ingredient Blending (Sugar, Acid, Stabilizers, Flavors, Colours, Fortification) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-50 border border-green-200 rounded">pH Adjustment and Verification (target: pH 3.0–4.2) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-50 border border-yellow-200 rounded">Homogenization (for cloudy/fruit-pulp beverages: 150–200 bar / 15–20 MPa, 2-stage) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">De-aeration (Vacuum chamber, removal of dissolved O₂ to <1 ppm) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-red-100 border border-red-300 rounded">Final Heat Treatment — Pasteurization (85–95°C × 15–30 sec) or UHT (135–142°C × 4–6 sec) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2 (B)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cooling (to 4–8°C for pasteurized; to 20–25°C for UHT/aseptic)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging — Aseptic filling (for UHT) or Hot-fill (>82°C) or Cold-fill (refrigerated) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3 (B) (for aseptic filling)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-orange-50 border border-orange-200 rounded">Metal Detection / X-ray Inspection <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-4 (P)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Storage & Distribution (4±2°C for pasteurized; ambient for UHT)</div>
            </div>
            <p class="text-xs text-gray-500 mt-2">CCP designations: (B) = Biological hazard, (P) = Physical hazard. PRP = Prerequisite Program, oPRP = Operational Prerequisite Program.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Scientific Explanation of Each Processing Step</h3>
            <ol class="list-decimal list-outside pl-5 space-y-6">
                <li><strong>Whey Reception and Initial Quality Assessment (PRP)</strong>
                    <p>Fresh whey must be collected immediately after coagulation and processed within <strong>2–4 hours</strong> at ambient temperature, or cooled to <strong>≤7°C</strong> within 1 hour if delays are anticipated. Delayed processing causes rapid microbial proliferation (initial load: 10⁴–10⁶ CFU/mL, primarily <em>Lactobacillus</em>, <em>Streptococcus thermophilus</em>, <em>E. coli</em>, and coliforms from the cheese/paneer process) and Maillard browning reactions between lactose and amino acids.</p>
                    <p class="mt-2"><strong>Quality Checks at Reception:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>pH: 4.5–6.5 (type-dependent); reject if < 3.5 (excessive acid development)</li>
                        <li>Titratable acidity: ≤0.20% LA (sweet whey), ≤0.80% LA (acid whey)</li>
                        <li>Temperature: ≤10°C (if stored) or ≤35°C (if fresh from process)</li>
                        <li>Total solids: 5.5–7.0% (refractometer/hydrometer)</li>
                        <li>Organoleptic: No off-flavours (butyric, putrid), no abnormal colour</li>
                        <li>MBRT (Methylene Blue Reduction Test): ≥2 hours for acceptable quality</li>
                        <li>Phosphatase test: Positive (raw whey); Negative (if pre-pasteurized)</li>
                    </ul>
                    <div class="bg-blue-50 p-3 rounded mt-2">
                        <strong>Food Safety Concern:</strong> Raw whey can harbour <em>Salmonella</em>, <em>Listeria monocytogenes</em>, <em>E. coli</em> O157:H7, <em>S. aureus</em> (if originating from infected udder), and <em>Bacillus cereus</em> spores. The primary hazard at this stage is microbiological. Additionally, chemical hazards include potential antibiotic residues, aflatoxin M₁, and pesticide residues carried over from the original milk. Physical hazards include hair, metal fragments, and curd particles.
                    </div>
                </li>

                <li><strong>Preliminary Filtration and Straining (PRP)</strong>
                    <p>Whey is passed through a vibrating screen or nylon filter (mesh size: 60–100 mesh / 150–250 μm) to remove coarse curd fines, fat globules, and any extraneous matter. This step improves downstream equipment efficiency and reduces fouling of heat exchangers. Typical recovery: 98–99% of whey volume.</p>
                </li>

                <li><strong>Clarification and Fat Separation (oPRP)</strong>
                    <p>A high-speed cream separator/clarifier (typically operating at 5000–7000 × g) performs dual functions: (a) removal of residual fat (reducing fat content from 0.3–0.5% to <0.04%), and (b) clarification by removing fine suspended particles and denatured protein aggregates.</p>
                    <p class="mt-2"><strong>Scientific Rationale:</strong> Residual fat causes off-flavour development during storage through lipid oxidation (autoxidation catalyzed by light-activated riboflavin acting as a photosensitizer, producing singlet oxygen ¹O₂ which attacks unsaturated fatty acids). Fat globules also scatter light, causing undesirable haze in clear beverage formulations. Fat content < 0.04% is the target for clear whey drinks.</p>
                    <p class="mt-2"><strong>oPRP Classification:</strong> This step is an oPRP because inadequate fat removal directly affects product safety (oxidized lipids produce toxic aldehydes like malondialdehyde and 4-hydroxynonenal at high levels) and quality, but is not a CCP since subsequent pasteurization addresses the biological hazard.</p>
                </li>

                <li><strong>Initial Pasteurization — CCP-1 (Biological)</strong>
                    <p>The clarified whey undergoes HTST pasteurization using a plate heat exchanger (PHE).</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="min-w-full border border-gray-300 text-sm">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Method</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Temperature</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Holding Time</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Log Reduction (target pathogen)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border border-gray-300 px-3 py-1">LTLT (Batch)</td><td class="border border-gray-300 px-3 py-1">63°C</td><td class="border border-gray-300 px-3 py-1">30 min</td><td class="border border-gray-300 px-3 py-1">≥5 log₁₀ for <em>Coxiella burnetii</em></td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">HTST (Continuous)</td><td class="border border-gray-300 px-3 py-1">72°C</td><td class="border border-gray-300 px-3 py-1">15 sec</td><td class="border border-gray-300 px-3 py-1">≥5 log₁₀ for <em>C. burnetii</em>, >12 log₁₀ for <em>Salmonella</em></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2"><strong>D-values of key pathogens in whey at 72°C:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><em>Coxiella burnetii</em> (most heat-resistant non-spore-forming pathogen in milk): D₇₂ = 0.01 sec → 15 sec hold provides >1500D process</li>
                        <li><em>Listeria monocytogenes</em>: D₇₂ = 0.2–0.4 sec</li>
                        <li><em>Salmonella</em> spp.: D₇₂ = 0.06–0.1 sec</li>
                        <li><em>E. coli</em> O157:H7: D₇₂ = 0.07–0.15 sec</li>
                        <li><em>S. aureus</em>: D₇₂ = 0.1–0.3 sec</li>
                    </ul>
                    <p class="mt-2"><strong>Verification:</strong> Phosphatase test (must be negative); temperature recorded continuously using calibrated chart recorder or data logger; flow diversion valve (FDV) must divert product if temperature drops below 72°C.</p>
                    <div class="bg-red-50 p-3 rounded mt-2 border-l-4 border-red-500">
                        <strong>CCP-1 Monitoring:</strong><br>
                        • <strong>What:</strong> Temperature and time of pasteurization<br>
                        • <strong>How:</strong> Calibrated thermometer/RTD sensors in holding tube + flow meter<br>
                        • <strong>When:</strong> Continuously (every batch / every second for continuous)<br>
                        • <strong>Who:</strong> Trained pasteurizer operator<br>
                        • <strong>Critical Limits:</strong> ≥72°C for ≥15 seconds<br>
                        • <strong>Corrective Action:</strong> Divert sub-standard product back to raw balance tank for re-pasteurization; investigate and rectify cause; document incident
                    </div>
                    <p class="mt-2"><strong>Note on thermal effects on whey proteins:</strong> At 72°C/15s, approximately 5–10% of β-Lg undergoes denaturation. This is acceptable and does not cause visible turbidity at this stage. However, protein denaturation increases sharply above 75°C (z-value for β-Lg denaturation ≈ 6.5°C).</p>
                </li>

                <li><strong>Deproteinization (for Clear Whey Beverages Only) — oPRP</strong>
                    <p>For clear, transparent whey drinks, residual whey proteins must be removed or rendered soluble to prevent haze and sedimentation. There are two principal approaches:</p>
                    <p class="mt-2"><strong>Method A — Thermal Acid Deproteinization (Most Common):</strong></p>
                    <ol class="list-alpha list-outside pl-5 mt-1 space-y-1">
                        <li>Adjust pH of whey to 4.5–4.6 (near the pI of β-Lg = 5.2, but accounting for co-precipitation with other proteins) using citric acid or HCl.</li>
                        <li>Heat to 90–95°C for 15–20 minutes with gentle agitation. This causes near-complete denaturation and aggregation of whey proteins (>95% denaturation of β-Lg and α-La) through hydrophobic interactions and disulfide bond formation.</li>
                        <li>Cool to 40–50°C and separate the flocculated protein aggregates by centrifugation (3000–5000 × g) or cloth/membrane filtration.</li>
                        <li>The resulting clear supernatant (deproteinized whey) retains lactose, minerals, water-soluble vitamins, and organic acids but has protein content reduced to < 0.1%.</li>
                    </ol>
                    <p class="mt-2"><strong>Method B — Membrane Filtration (Ultrafiltration):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>UF membranes with MWCO (Molecular Weight Cut-Off) of 10–30 kDa retain whey proteins in the retentate (which can be processed into WPC) while the permeate (containing lactose, minerals, and water) serves as the base for clear beverages.</li>
                        <li>Advantage: recovers valuable protein as a co-product (WPC); produces a very clean permeate.</li>
                        <li>Operating parameters: TMP (Transmembrane Pressure) = 1–4 bar; temperature = 10–50°C; flux = 20–60 L/m²/h.</li>
                    </ul>
                    <p class="mt-2"><strong>Method C — For Cloudy/Opaque Beverages:</strong> This step is <strong>skipped entirely</strong>. Instead, proteins are stabilized by formulating at pH 3.0–3.8 (well below pI) and using stabilizers like pectin that form electrostatic complexes with positively charged proteins, preventing aggregation.</p>

                    <div class="bg-yellow-50 p-3 rounded mt-2 border-l-4 border-yellow-500">
                        <strong>Science of Pectin-Protein Stabilization:</strong> At pH < pI (below ~5.0 for β-Lg), whey proteins carry a net positive charge (+). High-methoxyl (HM) pectin carries a strong negative charge (−) due to ionized carboxyl groups. Electrostatic attraction forms soluble pectin-protein complexes that prevent protein-protein aggregation. Optimal pectin:protein ratio is typically 0.5:1 to 1:1 (w/w) with HM pectin of Degree of Esterification (DE) > 70%. Pectin also increases viscosity, providing steric stabilization against sedimentation.
                    </div>
                </li>

                <li><strong>Ingredient Blending and Formulation (PRP)</strong>
                    <p>The pasteurized (and optionally deproteinized) whey base is transferred to a jacketed, agitated blending tank (with variable-speed impeller operating at 100–300 rpm). Ingredients are added in a specific sequence to avoid interactions:</p>

                    <p class="mt-3"><strong>Step 1 — Dry Sugar/Sweetener Dissolution:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Sucrose: Typical addition — 8–14% (w/v) for sweet beverages; dissolved in warm whey (40–50°C) for rapid dissolution.</li>
                        <li>High Fructose Corn Syrup (HFCS 55): Alternative at 6–10% (higher sweetness intensity: relative sweetness of fructose = 1.7 vs sucrose = 1.0).</li>
                        <li>For reduced-calorie variants: Stevia glycosides (rebaudioside A) at 200–400 ppm provide equivalent sweetness to 8–10% sucrose.</li>
                    </ul>

                    <p class="mt-3"><strong>Step 2 — Stabilizer/Hydrocolloid Dispersion:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>High-Methoxyl Pectin (DE > 70%):</strong> 0.1–0.5% (w/v); primary stabilizer for acidic whey beverages; must be pre-dispersed in 5× its weight of sugar to prevent lumping, then hydrated in hot water (80°C) before adding to the acidic whey base.</li>
                        <li><strong>Carboxymethyl Cellulose (CMC):</strong> 0.1–0.3%; provides viscosity and suspension capability; must be hydrated separately.</li>
                        <li><strong>Xanthan Gum:</strong> 0.05–0.15%; synergistic with CMC; provides shear-thinning pseudoplastic behaviour for improved pouring.</li>
                        <li><strong>Microcrystalline Cellulose (MCC):</strong> 0.1–0.3%; provides pulp-like mouthfeel in fruit-whey blends.</li>
                    </ul>

                    <p class="mt-3"><strong>Step 3 — Acidification:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Target pH for most whey beverages: <strong>3.0–4.2</strong> (critical for microbial safety and protein stability).</li>
                        <li><strong>Citric acid (anhydrous):</strong> Most common acidulant; typical addition 0.2–0.6% (w/v); provides fresh, citrus-like sourness; chelates calcium (which can otherwise cause turbidity).</li>
                        <li><strong>Malic acid:</strong> Provides smoother, less sharp acidity; used at 0.1–0.4%; preferred for apple/mango flavoured variants.</li>
                        <li><strong>Phosphoric acid:</strong> Sharp acidity; used for cola-type formulations at 0.05–0.08%.</li>
                        <li><strong>Lactic acid:</strong> Naturally present in acid whey; may be supplemented; provides a rounded, mild sourness.</li>
                        <li><strong>Buffering considerations:</strong> Whey has significant buffering capacity (primarily from phosphates and proteins). The Henderson-Hasselbalch equation governs pH: pH = pKa + log([A⁻]/[HA]). Citric acid (pKa₁ = 3.13, pKa₂ = 4.76, pKa₃ = 6.40) provides good buffering in the target pH range.</li>
                    </ul>

                    <p class="mt-3"><strong>Step 4 — Flavouring and Colouring:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Natural flavours: Mango oleoresin (0.05–0.15%), lemon oil (0.02–0.05%), orange essence (0.1–0.3%), pineapple flavour (0.08–0.12%).</li>
                        <li>Flavours should be added at the end of blending (or after final heat treatment if volatile) to minimize flavour loss.</li>
                        <li>Colours: β-carotene (0.5–2 ppm for yellow-orange), annatto (for orange), anthocyanin extracts (for purple/red), chlorophyll (for green).</li>
                    </ul>

                    <p class="mt-3"><strong>Step 5 — Fruit Juice/Pulp Addition (for fruit-whey blends):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Typical addition: 10–40% (v/v) of pasteurized fruit juice or 5–15% fruit pulp.</li>
                        <li>Fruit contributes natural sugars, organic acids, vitamins (especially ascorbic acid), polyphenols, and colour.</li>
                        <li>Popular Indian combinations: Mango (20–30% Alphonso pulp), Guava (15–25%), Litchi (20%), Pineapple (15–20%), Pomegranate (10–15%).</li>
                    </ul>

                    <p class="mt-3"><strong>Step 6 — Optional Fortification:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>WPC/WPI addition:</strong> For protein-enriched variants; WPC-80 at 2–5% (w/v) to boost protein to 3–8 g/100 mL; must be hydrated separately and added slowly to prevent foaming and aggregation.</li>
                        <li><strong>Vitamin C (ascorbic acid):</strong> 30–100 mg/100 mL for fortification; also acts as antioxidant (oxygen scavenger) and reducing agent.</li>
                        <li><strong>Prebiotic fibre:</strong> Inulin (2–5%), polydextrose (1–3%), or FOS (Fructo-oligosaccharides) (1–3%) for prebiotic claim and improved mouthfeel/body.</li>
                        <li><strong>Probiotic cultures:</strong> For fermented variants — <em>Lactobacillus acidophilus</em>, <em>L. rhamnosus GG</em>, <em>Bifidobacterium lactis</em> — added post-pasteurization at 10⁸–10⁹ CFU/mL to ensure ≥10⁶ CFU/mL at end of shelf life.</li>
                        <li><strong>Minerals:</strong> Calcium lactate (0.2–0.5%) or tricalcium phosphate for calcium fortification; zinc sulfate for zinc.</li>
                    </ul>

                    <p class="mt-3"><strong>Typical Formulation for a Mango Whey Beverage (Research-Optimized):</strong></p>
                    <div class="overflow-x-auto mt-2">
                        <table class="min-w-full border border-gray-300 text-sm">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Ingredient</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Quantity (per 100 mL)</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border border-gray-300 px-3 py-1">Clarified Paneer Whey</td><td class="border border-gray-300 px-3 py-1">55–65 mL</td><td class="border border-gray-300 px-3 py-1">Base liquid (protein, minerals, lactose)</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Mango pulp (Totapuri/Alphonso)</td><td class="border border-gray-300 px-3 py-1">20–30 mL</td><td class="border border-gray-300 px-3 py-1">Flavour, colour, vitamin A & C, fibre</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Sugar (sucrose)</td><td class="border border-gray-300 px-3 py-1">8–12 g</td><td class="border border-gray-300 px-3 py-1">Sweetness, mouthfeel, osmotic preservation</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Citric acid</td><td class="border border-gray-300 px-3 py-1">0.2–0.4 g</td><td class="border border-gray-300 px-3 py-1">pH adjustment (target 3.8–4.0), tartness</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">HM Pectin (DE > 72%)</td><td class="border border-gray-300 px-3 py-1">0.15–0.30 g</td><td class="border border-gray-300 px-3 py-1">Protein stabilization, viscosity, mouthfeel</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">CMC</td><td class="border border-gray-300 px-3 py-1">0.10–0.20 g</td><td class="border border-gray-300 px-3 py-1">Suspension, viscosity</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Potassium sorbate</td><td class="border border-gray-300 px-3 py-1">0.02–0.03 g (200–300 ppm)</td><td class="border border-gray-300 px-3 py-1">Preservative (anti-yeast, anti-mould)</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Mango flavour (natural)</td><td class="border border-gray-300 px-3 py-1">0.05–0.10 mL</td><td class="border border-gray-300 px-3 py-1">Flavour reinforcement</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Water (RO treated)</td><td class="border border-gray-300 px-3 py-1">q.s. to 100 mL</td><td class="border border-gray-300 px-3 py-1">Volume adjustment</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2 text-sm"><strong>Expected Final Composition:</strong> TSS: 15–18°Brix; pH: 3.8–4.0; Protein: 0.4–0.7%; Total Solids: 18–22%; Viscosity: 15–40 cP (at 25°C, 60 rpm, Brookfield); Colour: golden-yellow to orange (L* = 55–65, a* = 5–15, b* = 40–55 in CIE Lab).</p>
                </li>

                <li><strong>pH Adjustment and Verification (oPRP)</strong>
                    <p>After blending, the pH is precisely measured and adjusted to the target range using food-grade citric acid (to decrease pH) or sodium citrate/sodium hydroxide (to increase pH). This step is classified as an <strong>oPRP</strong> because:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>pH < 4.6 is the critical dividing line between low-acid foods (where <em>Clostridium botulinum</em> can grow and produce toxin) and acid foods (where <em>C. botulinum</em> growth is inhibited).</li>
                        <li>At pH < 4.6, even if thermal processing is inadequate, the risk of botulism is eliminated, providing an intrinsic safety barrier.</li>
                        <li>However, aciduric organisms (<em>Alicyclobacillus acidoterrestris</em>, yeasts, moulds) can still grow at pH 3.0–4.5.</li>
                        <li>Optimal pH for most whey beverages: <strong>3.0–3.8</strong> for clear drinks; <strong>3.5–4.2</strong> for cloudy/fruit-based drinks.</li>
                    </ul>
                    <p class="mt-2"><strong>Monitoring:</strong> pH measured with calibrated digital pH meter (accuracy ±0.01 pH units) at 25°C; meter calibrated daily with standard buffers (pH 4.00 and 7.00).</p>
                </li>

                <li><strong>Homogenization (PRP — for Cloudy/Fruit-pulp Beverages)</strong>
                    <p>Two-stage high-pressure homogenization is applied to create a stable, uniform suspension:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>First stage:</strong> 150–200 bar (15–20 MPa) — disrupts fat globules (if any) and fruit pulp particles to < 1 μm; creates fine emulsion.</li>
                        <li><strong>Second stage:</strong> 30–50 bar (3–5 MPa) — breaks up clusters formed in first stage; ensures uniform particle size distribution.</li>
                        <li><strong>Temperature:</strong> 55–70°C (warm homogenization improves efficiency and reduces viscosity for easier processing).</li>
                    </ul>
                    <p class="mt-2"><strong>Scientific Basis:</strong> Stokes' Law governs sedimentation: v = (2r²(ρₚ - ρ_f)g) / 9η, where v = sedimentation velocity, r = particle radius, ρₚ = particle density, ρ_f = fluid density, g = gravitational acceleration, η = fluid viscosity. Homogenization reduces r (particle radius) by 10–100×, reducing sedimentation velocity by 100–10,000×. Simultaneously, stabilizers increase η (viscosity), further retarding settling.</p>
                    <p class="mt-2">For clear beverages, homogenization is avoided as it creates a stable turbid emulsion rather than the desired transparent appearance.</p>
                </li>

                <li><strong>De-aeration (PRP)</strong>
                    <p>The blended product is passed through a vacuum de-aerator (operating at 0.3–0.5 bar absolute pressure, 50–60°C) to remove dissolved and entrained oxygen.</p>
                    <p class="mt-2"><strong>Scientific Rationale:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Dissolved O₂ promotes oxidative degradation of ascorbic acid (if fortified): ascorbic acid → dehydroascorbic acid → 2,3-diketogulonic acid (irreversible loss; follows first-order kinetics with k proportional to [O₂]).</li>
                        <li>Oxygen catalyzes Maillard browning and lipid oxidation, causing colour darkening and off-flavours (hexanal, nonanal).</li>
                        <li>Dissolved O₂ also causes foaming during filling, leading to under-filling and headspace issues.</li>
                        <li>Target: dissolved O₂ < 1 ppm (measured by optical dissolved oxygen sensor).</li>
                    </ul>
                </li>

                <li><strong>Final Heat Treatment — CCP-2 (Biological)</strong>
                    <p>This is the most critical step for product safety. The treatment intensity depends on the desired shelf life and distribution conditions:</p>

                    <div class="overflow-x-auto mt-2">
                        <table class="min-w-full border border-gray-300 text-sm">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Treatment Type</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Conditions</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Target Organisms</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Shelf Life</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Storage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border border-gray-300 px-3 py-1">Standard Pasteurization</td><td class="border border-gray-300 px-3 py-1">72°C × 15 sec</td><td class="border border-gray-300 px-3 py-1">Vegetative pathogens</td><td class="border border-gray-300 px-3 py-1">15–21 days</td><td class="border border-gray-300 px-3 py-1">Refrigerated (2–6°C)</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">High Pasteurization</td><td class="border border-gray-300 px-3 py-1">85–95°C × 15–30 sec</td><td class="border border-gray-300 px-3 py-1">Vegetative pathogens + most spoilage organisms</td><td class="border border-gray-300 px-3 py-1">30–60 days</td><td class="border border-gray-300 px-3 py-1">Refrigerated (2–6°C)</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">ESL (Extended Shelf Life)</td><td class="border border-gray-300 px-3 py-1">125–130°C × 2–4 sec</td><td class="border border-gray-300 px-3 py-1">Vegetative + most spores</td><td class="border border-gray-300 px-3 py-1">60–90 days</td><td class="border border-gray-300 px-3 py-1">Refrigerated</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">UHT</td><td class="border border-gray-300 px-3 py-1">135–142°C × 4–6 sec</td><td class="border border-gray-300 px-3 py-1">All vegetative cells + spores (commercial sterility: F₀ ≥ 5 min)</td><td class="border border-gray-300 px-3 py-1">6–9 months</td><td class="border border-gray-300 px-3 py-1">Ambient (no refrigeration needed)</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Hot-fill-hold (for acid beverages pH < 4.0)</td><td class="border border-gray-300 px-3 py-1">88–95°C fill → hold 2–3 min → invert container</td><td class="border border-gray-300 px-3 py-1">Vegetative + acid-tolerant spoilage (<em>A. acidoterrestris</em> spores targeted)</td><td class="border border-gray-300 px-3 py-1">6–12 months</td><td class="border border-gray-300 px-3 py-1">Ambient</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p class="mt-3"><strong>Key Thermal Destruction Kinetics at pH < 4.5:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>At low pH, the heat resistance of <em>C. botulinum</em> spores is dramatically reduced (D₁₂₁ drops from 0.21 min at pH 7.0 to 0.04 min at pH 4.0), making commercial sterility achievable at much lower process intensities.</li>
                        <li><em>Alicyclobacillus acidoterrestris</em> — a thermoacidophilic, spore-forming bacterium — is the primary spoilage concern in acidic shelf-stable beverages. D₉₅ = 2–16 min; z = 7.7–12.4°C. While not a pathogen, it produces guaiacol and halophenols that cause medicinal off-flavours (detection threshold: 2 ppb). Hot-fill at ≥93°C with hold ≥2 min typically provides sufficient control.</li>
                        <li>Yeasts (e.g., <em>Saccharomyces</em>, <em>Zygosaccharomyces bailii</em>) and moulds (e.g., <em>Byssochlamys fulva</em>, <em>Neosartorya fischeri</em>) are significant spoilage organisms. <em>B. fulva</em> ascospores: D₉₀ = 1–12 min, D₈₅ = 6–60 min. <em>Z. bailii</em> is notoriously preservative-resistant.</li>
                    </ul>

                    <div class="bg-red-50 p-3 rounded mt-3 border-l-4 border-red-500">
                        <strong>CCP-2 Monitoring:</strong><br>
                        • <strong>What:</strong> Temperature and holding time of final heat treatment<br>
                        • <strong>How:</strong> Calibrated RTD sensors at inlet and outlet of holding tube; magnetic flow meter for flow rate verification; UHT plants: additional pressure transmitters<br>
                        • <strong>When:</strong> Continuous monitoring with data logging<br>
                        • <strong>Who:</strong> Process operator + automated PLC system<br>
                        • <strong>Critical Limits:</strong> Product-dependent (e.g., ≥90°C for ≥15 sec for high-pasteurized; ≥137°C for ≥4 sec for UHT)<br>
                        • <strong>Corrective Action:</strong> Automatic flow diversion; product held as "non-conforming" for disposition; equipment inspection; records review<br>
                        • <strong>Verification:</strong> Annual calibration of all sensors (NABL-accredited lab); weekly check with certified reference thermometer; commercial sterility testing (incubation at 37°C/7 days + 55°C/7 days for UHT products)
                    </div>

                    <p class="mt-3"><strong>Impact on Whey Protein Denaturation at Different Heat Treatments (at pH ~3.5):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>72°C/15s: ~3–5% β-Lg denaturation (minimal impact on clarity at low pH)</li>
                        <li>85°C/30s: ~15–25% β-Lg denaturation</li>
                        <li>95°C/30s: ~50–70% β-Lg denaturation</li>
                        <li>137°C/4s: ~70–90% β-Lg denaturation</li>
                    </ul>
                    <p class="mt-1 text-sm text-gray-600">At pH < 4.0, even extensively denatured β-Lg remains largely soluble due to strong electrostatic repulsion (net positive charge >> 0), preventing visible aggregation. This is why acidification before heat treatment is critical for clear whey beverages.</p>
                </li>

                <li><strong>Cooling</strong>
                    <p>After heat treatment, the product is cooled rapidly through the regeneration section of the PHE (achieving 85–92% heat recovery) to the target temperature:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Pasteurized products: Cool to <strong>4–8°C</strong> before filling</li>
                        <li>UHT/aseptic products: Cool to <strong>20–25°C</strong> (to prevent condensation on pack surface)</li>
                        <li>Hot-fill products: <strong>Not cooled</strong> before filling; filled at ≥85°C</li>
                    </ul>
                    <p class="mt-2">Rapid cooling minimizes thermal damage to heat-sensitive nutrients (especially vitamins B₁, C, and folic acid) and prevents cooked-flavour development from continued Maillard reactions and sulfhydryl oxidation.</p>
                </li>

                <li><strong>Packaging — CCP-3 (for Aseptic Systems Only) (Biological)</strong>
                    <p>Packaging is the final critical barrier between the microbiologically safe product and the external environment.</p>

                    <p class="mt-2"><strong>Option 1 — Aseptic Filling (for UHT products):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Product is filled under sterile conditions into pre-sterilized containers in a Class 100 (ISO 5) clean room environment.</li>
                        <li><strong>Container sterilization:</strong> Tetra Pak cartons — H₂O₂ (35%, 70°C) spray + hot air (280–330°C) drying; PET bottles — peracetic acid (PAA, 0.1–0.2%) or electron beam; HDPE bottles — H₂O₂ vapor.</li>
                        <li><strong>CCP-3 monitoring:</strong> H₂O₂ concentration ≥ 35% (refractometer check every 30 min); contact temperature ≥ 70°C; residual H₂O₂ on carton < 0.5 ppm (verified by peroxide strip test); positive pressure maintained inside aseptic chamber (ΔP > 10 Pa).</li>
                        <li>Shelf life: 6–9 months at ambient temperature.</li>
                    </ul>

                    <p class="mt-2"><strong>Option 2 — Hot-Fill-Hold (for acid products, pH < 4.0):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Product heated to 88–95°C is filled directly into bottles at ≥85°C.</li>
                        <li>Container is immediately capped and inverted for 2–3 minutes to sterilize the closure and headspace.</li>
                        <li>Then cooled to 40°C through a cooling tunnel (water spray or forced air).</li>
                        <li>Container material: PET (heat-set bottles resistant to >85°C), glass, or HDPE.</li>
                        <li>Shelf life: 6–12 months at ambient.</li>
                    </ul>

                    <p class="mt-2"><strong>Option 3 — Cold Fill (for pasteurized, refrigerated products):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Cooled product (4–8°C) is filled into sanitized PET bottles, HDPE pouches, or glass bottles.</li>
                        <li>Filling environment: HEPA-filtered air; filling nozzles sanitized with peracetic acid or steam between batches.</li>
                        <li>Shelf life: 15–30 days at 2–6°C.</li>
                    </ul>

                    <p class="mt-2"><strong>Container Size Options:</strong> 100 mL (single serve), 200 mL (popular in India), 500 mL, 1 litre; pouches (200 mL, 500 mL) for economy segments.</p>
                </li>

                <li><strong>Metal Detection / X-ray Inspection — CCP-4 (Physical)</strong>
                    <p>All packaged products pass through a metal detector (sensitivity: ferrous ≥ 1.5 mm, non-ferrous ≥ 2.0 mm, stainless steel ≥ 2.5 mm) or X-ray inspection system (capable of detecting glass, stone, bone, dense plastics ≥ 2 mm in addition to metals).</p>
                    <div class="bg-red-50 p-3 rounded mt-2 border-l-4 border-red-500">
                        <strong>CCP-4 Monitoring:</strong><br>
                        • <strong>What:</strong> Presence of physical contaminants (metal, glass, stone)<br>
                        • <strong>How:</strong> Metal detector or X-ray system<br>
                        • <strong>When:</strong> Every package, continuously<br>
                        • <strong>Who:</strong> Line operator + automatic reject system<br>
                        • <strong>Critical Limits:</strong> Ferrous ≥1.5mm, Non-ferrous ≥2.0mm, SS ≥2.5mm (detected and rejected)<br>
                        • <strong>Corrective Action:</strong> Rejected packs quarantined for investigation; source identified and rectified; preceding packs since last successful test re-inspected<br>
                        • <strong>Verification:</strong> Test with certified test pieces at start-up, every 1–2 hours during production, and at end of run
                    </div>
                </li>

                <li><strong>Storage and Distribution</strong>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Pasteurized products:</strong> Cold chain must be maintained at 2–6°C throughout storage and distribution. Temperature abuse (>10°C for >4 hours cumulative) may render the product unsafe.</li>
                        <li><strong>UHT/Aseptic products:</strong> Ambient storage (ideally 15–30°C); avoid temperatures >40°C (accelerates Maillard browning and flavour deterioration; rate approximately doubles for every 10°C increase — Q₁₀ ≈ 2.0–2.5).</li>
                        <li><strong>Protect from light:</strong> Use opaque or UV-barrier packaging. Riboflavin (λ_max absorption = 445 nm, 375 nm) acts as photosensitizer, generating singlet oxygen that degrades vitamins (especially B₂ itself, C, A) and causes light-struck flavour (methional and dimethyl disulfide from methionine oxidation).</li>
                        <li><strong>FIFO (First In, First Out) principle:</strong> Essential for stock rotation.</li>
                    </ul>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Complete HACCP Plan Summary for Whey Beverages</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-xs">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-2 py-1">CCP</th>
                            <th class="border border-gray-300 px-2 py-1">Step</th>
                            <th class="border border-gray-300 px-2 py-1">Hazard</th>
                            <th class="border border-gray-300 px-2 py-1">Critical Limit</th>
                            <th class="border border-gray-300 px-2 py-1">Monitoring</th>
                            <th class="border border-gray-300 px-2 py-1">Corrective Action</th>
                            <th class="border border-gray-300 px-2 py-1">Verification</th>
                            <th class="border border-gray-300 px-2 py-1">Records</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-300 px-2 py-1 font-bold">CCP-1 (B)</td>
                            <td class="border border-gray-300 px-2 py-1">Initial Pasteurization</td>
                            <td class="border border-gray-300 px-2 py-1">Survival of vegetative pathogens (<em>Salmonella, Listeria, E. coli</em>)</td>
                            <td class="border border-gray-300 px-2 py-1">≥72°C for ≥15 sec</td>
                            <td class="border border-gray-300 px-2 py-1">Continuous temp & flow monitoring; chart recorder</td>
                            <td class="border border-gray-300 px-2 py-1">Divert & re-pasteurize; hold & evaluate</td>
                            <td class="border border-gray-300 px-2 py-1">Phosphatase test (negative); sensor calibration quarterly</td>
                            <td class="border border-gray-300 px-2 py-1">Pasteurization log; FDV activation log; calibration records</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-2 py-1 font-bold">CCP-2 (B)</td>
                            <td class="border border-gray-300 px-2 py-1">Final Heat Treatment</td>
                            <td class="border border-gray-300 px-2 py-1">Survival of pathogens & spoilage organisms; spore survival (UHT)</td>
                            <td class="border border-gray-300 px-2 py-1">Product-specific (e.g., ≥90°C/15s or ≥137°C/4s)</td>
                            <td class="border border-gray-300 px-2 py-1">Continuous temp/time; flow rate; pressure (UHT)</td>
                            <td class="border border-gray-300 px-2 py-1">Divert; quarantine; investigate; re-process if feasible</td>
                            <td class="border border-gray-300 px-2 py-1">Incubation test (37°C/7d + 55°C/7d for UHT); micro sampling; calibration</td>
                            <td class="border border-gray-300 px-2 py-1">UHT/Pasteurization charts; incubation results; deviation reports</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-2 py-1 font-bold">CCP-3 (B)</td>
                            <td class="border border-gray-300 px-2 py-1">Aseptic Filling (UHT only)</td>
                            <td class="border border-gray-300 px-2 py-1">Post-process contamination from non-sterile container/environment</td>
                            <td class="border border-gray-300 px-2 py-1">H₂O₂ conc. ≥35%; contact temp ≥70°C; residual H₂O₂ <0.5 ppm; chamber positive pressure</td>
                            <td class="border border-gray-300 px-2 py-1">H₂O₂ concentration (refractometer); temp sensor; residual test strips; ΔP gauge</td>
                            <td class="border border-gray-300 px-2 py-1">Stop filling; quarantine affected packs; restore sterility; re-start after verification</td>
                            <td class="border border-gray-300 px-2 py-1">Package integrity testing (dye/pressure test); commercial sterility incubation</td>
                            <td class="border border-gray-300 px-2 py-1">Filling logs; H₂O₂ test records; sterility test results</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-2 py-1 font-bold">CCP-4 (P)</td>
                            <td class="border border-gray-300 px-2 py-1">Metal Detection / X-ray</td>
                            <td class="border border-gray-300 px-2 py-1">Physical contamination (metal, glass fragments)</td>
                            <td class="border border-gray-300 px-2 py-1">Fe ≥1.5mm, Non-Fe ≥2.0mm, SS ≥2.5mm</td>
                            <td class="border border-gray-300 px-2 py-1">Every pack; test pieces every 1–2 hours</td>
                            <td class="border border-gray-300 px-2 py-1">Reject; quarantine; investigate source; re-test since last passed check</td>
                            <td class="border border-gray-300 px-2 py-1">Test piece verification log; reject log review; annual detector calibration</td>
                            <td class="border border-gray-300 px-2 py-1">Metal detection test log; reject records; maintenance records</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Operational Prerequisite Programs (oPRPs) Summary</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-3 py-1 text-left">oPRP</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Step</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Hazard Addressed</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Control Measure</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Monitoring</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-3 py-1">oPRP-1</td><td class="border border-gray-300 px-3 py-1">Clarification & Fat Separation</td><td class="border border-gray-300 px-3 py-1">Chemical (lipid oxidation products)</td><td class="border border-gray-300 px-3 py-1">Centrifugal separation to <0.04% fat</td><td class="border border-gray-300 px-3 py-1">Fat content by Gerber/IR every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">oPRP-2</td><td class="border border-gray-300 px-3 py-1">pH Adjustment</td><td class="border border-gray-300 px-3 py-1">Biological (<em>C. botulinum</em> at pH >4.6)</td><td class="border border-gray-300 px-3 py-1">Acidification to pH <4.6 (target <4.0)</td><td class="border border-gray-300 px-3 py-1">pH meter reading every batch, 2 independent measurements</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">oPRP-3</td><td class="border border-gray-300 px-3 py-1">Deproteinization (clear drinks)</td><td class="border border-gray-300 px-3 py-1">Quality (haze, sedimentation)</td><td class="border border-gray-300 px-3 py-1">Heat-acid treatment + centrifugation</td><td class="border border-gray-300 px-3 py-1">Turbidity (NTU < 5 for clear), visual check</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">oPRP-4</td><td class="border border-gray-300 px-3 py-1">Ingredient Receiving</td><td class="border border-gray-300 px-3 py-1">Chemical (allergens, contaminants), Biological (spores in sugar)</td><td class="border border-gray-300 px-3 py-1">Supplier approval; COA verification; incoming inspection</td><td class="border border-gray-300 px-3 py-1">COA review per batch; periodic third-party testing</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">oPRP-5</td><td class="border border-gray-300 px-3 py-1">CIP (Clean-in-Place)</td><td class="border border-gray-300 px-3 py-1">Biological (biofilm, cross-contamination)</td><td class="border border-gray-300 px-3 py-1">Validated CIP cycle (alkali → rinse → acid → rinse → sanitize)</td><td class="border border-gray-300 px-3 py-1">Temperature, concentration, flow rate, contact time per CIP cycle; ATP swab verification</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Quality Parameters and Testing Schedule for Finished Product</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-3 py-1 text-left">Parameter</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Specification</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Test Method</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-3 py-1">pH</td><td class="border border-gray-300 px-3 py-1">3.0–4.2 (product-specific)</td><td class="border border-gray-300 px-3 py-1">Digital pH meter (IS 14434)</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">TSS (°Brix)</td><td class="border border-gray-300 px-3 py-1">12–20°Brix (product-specific)</td><td class="border border-gray-300 px-3 py-1">Digital refractometer</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Titratable Acidity</td><td class="border border-gray-300 px-3 py-1">0.3–0.8% (as citric acid)</td><td class="border border-gray-300 px-3 py-1">Titration with 0.1N NaOH</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Protein Content</td><td class="border border-gray-300 px-3 py-1">0.3–0.8% (standard); up to 5–8% (protein-enriched)</td><td class="border border-gray-300 px-3 py-1">Kjeldahl (N × 6.38) or Dumas method</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Total Solids</td><td class="border border-gray-300 px-3 py-1">12–22%</td><td class="border border-gray-300 px-3 py-1">Oven drying (105°C to constant weight)</td><td class="border border-gray-300 px-3 py-1">Daily composite</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Fat</td><td class="border border-gray-300 px-3 py-1"><0.1% (clear); <0.5% (cloudy)</td><td class="border border-gray-300 px-3 py-1">Gerber method / Mojonnier</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Turbidity (clear type only)</td><td class="border border-gray-300 px-3 py-1"><10 NTU</td><td class="border border-gray-300 px-3 py-1">Nephelometer</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Viscosity</td><td class="border border-gray-300 px-3 py-1">5–50 cP at 25°C (product-specific)</td><td class="border border-gray-300 px-3 py-1">Brookfield viscometer (60 rpm, spindle #1)</td><td class="border border-gray-300 px-3 py-1">Daily composite</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Colour (L*, a*, b*)</td><td class="border border-gray-300 px-3 py-1">Product-specific (ΔE < 3.0 from standard)</td><td class="border border-gray-300 px-3 py-1">Hunter Lab colorimeter</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Sediment / Sedimentation Index</td><td class="border border-gray-300 px-3 py-1"><5% after 24h at 4°C</td><td class="border border-gray-300 px-3 py-1">Graduated cylinder (100 mL, 24h stand)</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Sensory Evaluation</td><td class="border border-gray-300 px-3 py-1">Score ≥7/9 on 9-point hedonic scale</td><td class="border border-gray-300 px-3 py-1">Trained panel (minimum 6 panelists)</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">TPC</td><td class="border border-gray-300 px-3 py-1"><100 CFU/mL (pasteurized); sterile (UHT)</td><td class="border border-gray-300 px-3 py-1">Pour plate (PCA, 37°C, 48h)</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Coliforms</td><td class="border border-gray-300 px-3 py-1"><10 CFU/mL (pasteurized); absent (UHT)</td><td class="border border-gray-300 px-3 py-1">VRBA / LST broth</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Yeast & Mould</td><td class="border border-gray-300 px-3 py-1"><10 CFU/mL</td><td class="border border-gray-300 px-3 py-1">DRBC agar, 25°C, 5 days</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Commercial Sterility (UHT)</td><td class="border border-gray-300 px-3 py-1">No growth at 37°C/7d + 55°C/7d; no pack swelling</td><td class="border border-gray-300 px-3 py-1">Incubation per IS 2795</td><td class="border border-gray-300 px-3 py-1">5 packs per batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Preservative Residue</td><td class="border border-gray-300 px-3 py-1">Benzoate <200 ppm; Sorbate <300 ppm</td><td class="border border-gray-300 px-3 py-1">HPLC / UV spectrophotometry</td><td class="border border-gray-300 px-3 py-1">Weekly</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Heavy Metals (Pb, As)</td><td class="border border-gray-300 px-3 py-1">Pb <0.5 ppm; As <0.1 ppm</td><td class="border border-gray-300 px-3 py-1">AAS / ICP-MS</td><td class="border border-gray-300 px-3 py-1">Monthly / per supplier lot</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Aflatoxin M₁</td><td class="border border-gray-300 px-3 py-1"><0.5 μg/kg</td><td class="border border-gray-300 px-3 py-1">ELISA / HPLC</td><td class="border border-gray-300 px-3 py-1">Monthly</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Common Defects in Whey Beverages: Causes and Remedies</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-3 py-1 text-left">Defect</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Scientific Cause</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Remedy</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Protein sedimentation / haze</td><td class="border border-gray-300 px-3 py-1">Incomplete deproteinization; pH too close to pI (4.2–5.2); insufficient stabilizer; inadequate homogenization; heat-induced β-Lg aggregation at neutral pH</td><td class="border border-gray-300 px-3 py-1">Lower pH to <3.8; increase pectin to 0.3–0.5%; ensure adequate homogenization (>150 bar); complete deproteinization for clear drinks</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Browning / darkening during storage</td><td class="border border-gray-300 px-3 py-1">Non-enzymatic Maillard reaction between reducing sugars (lactose) and free amino groups (lysine residues in whey proteins); accelerated at high temperature, high pH, low water activity</td><td class="border border-gray-300 px-3 py-1">Maintain storage temperature <25°C; reduce lactose (UF permeate); use non-reducing sweeteners (sucralose); lower pH; minimize dissolved O₂</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Oxidized / cardboard flavour</td><td class="border border-gray-300 px-3 py-1">Lipid autoxidation of residual fat; photosensitized oxidation by riboflavin (Type II mechanism: riboflavin* + ³O₂ → riboflavin + ¹O₂); metal-catalyzed (Cu²⁺, Fe²⁺)</td><td class="border border-gray-300 px-3 py-1">Reduce fat to <0.04%; use opaque packaging; add ascorbic acid (O₂ scavenger); de-aerate; chelate metals with citric acid/EDTA</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Cooked / sulfurous flavour</td><td class="border border-gray-300 px-3 py-1">Exposure of free sulfhydryl groups from β-Lg denaturation (Cys-121); H₂S and dimethyl sulfide formation at >75°C</td><td class="border border-gray-300 px-3 py-1">Minimize thermal exposure (use HTST not LTLT); acidify before heating (reduces denaturation at same temperature); use direct UHT (steam injection) over indirect</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Phase separation (serum separation)</td><td class="border border-gray-300 px-3 py-1">Depletion flocculation of proteins by non-adsorbing polysaccharides at high concentration; insufficient stabilizer; excessive storage time</td><td class="border border-gray-300 px-3 py-1">Optimize stabilizer concentration and type; ensure proper homogenization; add MCC for suspension; reduce particle size</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Astringent / chalky mouthfeel</td><td class="border border-gray-300 px-3 py-1">Whey protein interaction with salivary proteins (mucin precipitation at low pH); high mineral (Ca²⁺) content; excessive acidity</td><td class="border border-gray-300 px-3 py-1">Add sweetener to mask astringency; use buffering salts (sodium citrate); optimize pH; reduce protein if not needed; add fat or pectin for lubrication</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Gas production / pack swelling</td><td class="border border-gray-300 px-3 py-1">Post-pasteurization contamination by yeasts (<em>Saccharomyces, Candida</em>) or heterofermentative LAB; fermentation of residual lactose producing CO₂ and ethanol</td><td class="border border-gray-300 px-3 py-1">Improve sanitation of filler and closures; verify pasteurization adequacy (CCP-2); add potassium sorbate (anti-yeast); ensure filling hygiene</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Medicinal / smoky off-flavour</td><td class="border border-gray-300 px-3 py-1"><em>Alicyclobacillus acidoterrestris</em> spoilage — produces guaiacol (2-methoxyphenol) and 2,6-dibromophenol; thermoacidophilic spore-former survives hot-fill</td><td class="border border-gray-300 px-3 py-1">Screen fruit pulp/sugar suppliers for <em>Alicyclobacillus</em> contamination; increase hot-fill temperature to ≥93°C with ≥3 min hold; consider nisin addition; test raw materials (BAM method)</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Excessive sweetness / unbalanced taste</td><td class="border border-gray-300 px-3 py-1">High residual lactose (4.5–5.0%) plus added sugar; insufficient acidity to balance</td><td class="border border-gray-300 px-3 py-1">Hydrolyze lactose with β-galactosidase (increases perceived sweetness by 40% — glucose + galactose are sweeter than lactose); reduce added sugar accordingly; balance sugar:acid ratio (optimal range: 12–18 TSS : 0.3–0.6% acidity)</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shelf Life Determinants and Kinetic Considerations</h3>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-3">
                <li><strong>Microbial Shelf Life:</strong> Determined by the most heat-resistant surviving organism. For pasteurized whey beverages at pH 3.5–4.0, psychrotrophic spoilage organisms (e.g., <em>Pseudomonas</em>) and yeasts are the primary limiters. Growth follows the Baranyi model: λ (lag phase) = 2–7 days at 5°C for yeasts; μ_max (maximum growth rate) = 0.02–0.06 h⁻¹ at 5°C. End of shelf life typically defined as total count reaching 10⁵–10⁶ CFU/mL or sensory rejection.</li>
                <li><strong>Chemical Shelf Life:</strong> Maillard browning follows zero-order kinetics in concentrated systems and first-order in dilute systems. The rate constant k_browning at 25°C ≈ 0.001–0.005 absorbance units (at 420 nm) per day in whey beverages. Activation energy (Eₐ) for Maillard browning in whey systems: 80–120 kJ/mol.</li>
                <li><strong>Physical Shelf Life:</strong> Sedimentation follows Stokes' Law (as described above). Creaming of residual fat globules: v_cream = (2r²Δρg)/(9η) — rate decreases with homogenization and increased viscosity from stabilizers.</li>
                <li><strong>Nutritional Shelf Life:</strong> Vitamin C (ascorbic acid) degradation follows first-order kinetics: C(t) = C₀ × e^(−kt). At 25°C in an aerated whey beverage at pH 3.5, t₁/₂ ≈ 30–60 days. In de-aerated, light-protected packaging, t₁/₂ extends to 90–180 days.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Accelerated Shelf Life Testing (ASLT) Protocol</h3>
            <p>To predict shelf life without waiting the full duration:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Store samples at 3 elevated temperatures (e.g., 25°C, 35°C, 45°C) in addition to the normal storage temperature (5°C for pasteurized, 25°C for UHT).</li>
                <li>Monitor quality parameters (pH, acidity, colour-ΔE, microbial count, sensory score, vitamin C retention) at regular intervals.</li>
                <li>Apply the Arrhenius equation: k = A × e^(−Eₐ/RT) to extrapolate degradation rates to the target storage temperature.</li>
                <li>Q₁₀ for most quality parameters in whey beverages: 1.8–3.0 (meaning shelf life roughly halves to thirds for every 10°C increase in storage temperature).</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Nutritional Profile of a Typical Whey Beverage (per 200 mL Serving)</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-3 py-1 text-left">Nutrient</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Standard Whey Drink</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Protein-Enriched Variant</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">% RDA (Standard)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-3 py-1">Energy (kcal)</td><td class="border border-gray-300 px-3 py-1">80–120</td><td class="border border-gray-300 px-3 py-1">100–150</td><td class="border border-gray-300 px-3 py-1">4–6%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Total Carbohydrates (g)</td><td class="border border-gray-300 px-3 py-1">18–28</td><td class="border border-gray-300 px-3 py-1">15–22</td><td class="border border-gray-300 px-3 py-1">—</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">  of which Sugars (g)</td><td class="border border-gray-300 px-3 py-1">16–26</td><td class="border border-gray-300 px-3 py-1">12–18</td><td class="border border-gray-300 px-3 py-1">—</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Protein (g)</td><td class="border border-gray-300 px-3 py-1">1.0–1.8</td><td class="border border-gray-300 px-3 py-1">6–16</td><td class="border border-gray-300 px-3 py-1">2–3% / 10–30%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Total Fat (g)</td><td class="border border-gray-300 px-3 py-1"><0.2</td><td class="border border-gray-300 px-3 py-1"><0.5</td><td class="border border-gray-300 px-3 py-1"><1%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Calcium (mg)</td><td class="border border-gray-300 px-3 py-1">80–200</td><td class="border border-gray-300 px-3 py-1">100–250</td><td class="border border-gray-300 px-3 py-1">8–20%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Potassium (mg)</td><td class="border border-gray-300 px-3 py-1">200–350</td><td class="border border-gray-300 px-3 py-1">250–400</td><td class="border border-gray-300 px-3 py-1">6–10%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Phosphorus (mg)</td><td class="border border-gray-300 px-3 py-1">80–150</td><td class="border border-gray-300 px-3 py-1">100–200</td><td class="border border-gray-300 px-3 py-1">8–15%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Vitamin B₂ (mg)</td><td class="border border-gray-300 px-3 py-1">0.2–0.4</td><td class="border border-gray-300 px-3 py-1">0.3–0.5</td><td class="border border-gray-300 px-3 py-1">15–30%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Vitamin C (mg) (if fortified)</td><td class="border border-gray-300 px-3 py-1">20–60</td><td class="border border-gray-300 px-3 py-1">30–80</td><td class="border border-gray-300 px-3 py-1">25–100%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Sodium (mg)</td><td class="border border-gray-300 px-3 py-1">80–120</td><td class="border border-gray-300 px-3 py-1">90–140</td><td class="border border-gray-300 px-3 py-1">4–6%</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Innovations and Emerging Technologies</h3>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-3">
                <li><strong>High-Pressure Processing (HPP):</strong> Non-thermal pasteurization at 400–600 MPa for 1–5 minutes; inactivates vegetative pathogens while preserving heat-sensitive vitamins, colour, and fresh flavour. HPP at 600 MPa/3 min achieves >5 log reduction of <em>E. coli</em>, <em>Salmonella</em>, and <em>Listeria</em> in whey-based beverages. β-Lg undergoes conformational changes under HPP (unfolding of tertiary structure at >200 MPa) but does not form visible aggregates at pH <4.0, making HPP ideal for acidic whey drinks.</li>
                <li><strong>Pulsed Electric Field (PEF):</strong> Electric field pulses (20–40 kV/cm, 1–100 μs pulse width, total treatment time <1 ms) cause electroporation of microbial cell membranes. Achieves 3–6 log reduction with minimal thermal input (<40°C). Preserves native whey protein structure >95% and retains >98% of vitamin C.</li>
                <li><strong>UV-C Processing:</strong> Continuous-flow UV treatment at 254 nm (dose: 20–50 mJ/cm²) in thin-film reactors (Dean flow or coiled tube design). Effective against vegetative bacteria and yeasts. Challenge: turbid beverages have low UV transmittance — effective primarily for clear/deproteinized whey drinks (>70% transmittance at 254 nm).</li>
                <li><strong>Enzymatic Lactose Hydrolysis:</strong> Treatment with β-galactosidase (from <em>Kluyveromyces lactis</em> or <em>Aspergillus oryzae</em>; 2000–5000 NLU/L at 37°C for 2–4 hours or 4°C for 12–18 hours) hydrolyzes lactose to glucose + galactose. Benefits: (a) suitable for lactose-intolerant consumers (~70% of Indian population has some degree of lactase deficiency); (b) increases sweetness perception by ~40% (reducing need for added sugar); (c) improves freezing point depression for frozen whey beverages; (d) reduces Maillard browning substrate (glucose browns faster than lactose, but net effect depends on formulation).</li>
                <li><strong>Microencapsulated Probiotics:</strong> Encapsulation of <em>Lactobacillus rhamnosus</em> GG or <em>Bifidobacterium longum</em> in alginate-chitosan microcapsules (diameter: 100–500 μm) protects cultures from the low pH of whey beverages (pH 3.0–4.0), maintaining viability at >10⁶ CFU/mL for 6–8 weeks at 4°C, compared to <10⁴ CFU/mL for free cells after 2 weeks.</li>
                <li><strong>Membrane Processing Integration:</strong> Nanofiltration (NF, MWCO 150–300 Da) can selectively concentrate lactose and minerals while partially demineralizing whey (40–60% mineral removal), improving taste by reducing excessive saltiness and allowing customized mineral profiles for sports drink applications.</li>
                <li><strong>Supercritical CO₂ Processing:</strong> SC-CO₂ (pressure: 100–250 bar; temperature: 35–60°C; time: 10–60 min) simultaneously pasteurizes and carbonates whey beverages, creating a preservative-free, naturally sparkling product with 3–5 log reduction in microbial count.</li>
                <li><strong>Whey Protein Nanofibrils:</strong> Heating β-Lg at pH 2.0, 80°C for 5–10 hours produces amyloid-like protein nanofibrils (length: 1–10 μm, diameter: 2–4 nm) with exceptional thickening, gelling, and foam-stabilizing properties. These can be used as natural functional ingredients in whey beverages to replace synthetic stabilizers.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Environmental and Economic Considerations</h3>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>BOD/COD Reduction:</strong> Converting liquid whey (BOD ~35,000 mg/L) into a beverage reduces effluent load by 100%. One tonne of liquid whey, if discharged into a water body, is equivalent to the sewage from 450 people/day.</li>
                <li><strong>Value Addition:</strong> Liquid whey as animal feed: ₹1–2/litre. As a packaged whey beverage: ₹15–30/200 mL (retail). Value multiplication factor: 15–60×.</li>
                <li><strong>Water Footprint:</strong> Since whey already contains ~93% water, whey beverages have significantly lower water footprint compared to beverages made from water + raw materials. Estimated water footprint: 0.2–0.5 L water/L beverage (vs. 1.5–3.0 L/L for conventional soft drinks).</li>
                <li><strong>Carbon Footprint:</strong> Whey beverage production from existing cheese/paneer operations adds only 0.05–0.15 kg CO₂e per litre (marginal processing energy). Preventing whey from entering anaerobic wastewater treatment avoids methane (CH₄) emissions (GWP = 28× CO₂).</li>
                <li><strong>Circular Economy:</strong> The protein separated during deproteinization can be dried into WPC; the separated fat can be used in recombined dairy products; excess minerals can be used in animal feed supplementation — achieving near-zero waste.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Clean-in-Place (CIP) Protocol for Whey Beverage Processing Equipment</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-3 py-1 text-left">Step</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Solution</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Concentration</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Temperature (°C)</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Duration (min)</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-3 py-1">1</td><td class="border border-gray-300 px-3 py-1">Pre-rinse (water)</td><td class="border border-gray-300 px-3 py-1">—</td><td class="border border-gray-300 px-3 py-1">40–50</td><td class="border border-gray-300 px-3 py-1">5–10</td><td class="border border-gray-300 px-3 py-1">Remove gross soil (sugars, proteins)</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">2</td><td class="border border-gray-300 px-3 py-1">Caustic wash (NaOH)</td><td class="border border-gray-300 px-3 py-1">1.0–2.0%</td><td class="border border-gray-300 px-3 py-1">70–85</td><td class="border border-gray-300 px-3 py-1">15–30</td><td class="border border-gray-300 px-3 py-1">Saponify fats; solubilize denatured proteins; remove biofilm matrix</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">3</td><td class="border border-gray-300 px-3 py-1">Intermediate rinse (water)</td><td class="border border-gray-300 px-3 py-1">—</td><td class="border border-gray-300 px-3 py-1">40–50</td><td class="border border-gray-300 px-3 py-1">5–10</td><td class="border border-gray-300 px-3 py-1">Remove alkali residues</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">4</td><td class="border border-gray-300 px-3 py-1">Acid wash (HNO₃ or phosphoric acid)</td><td class="border border-gray-300 px-3 py-1">0.5–1.5%</td><td class="border border-gray-300 px-3 py-1">55–70</td><td class="border border-gray-300 px-3 py-1">10–20</td><td class="border border-gray-300 px-3 py-1">Dissolve mineral deposits (calcium phosphate, milkstone); prevent scale buildup</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">5</td><td class="border border-gray-300 px-3 py-1">Final rinse (water)</td><td class="border border-gray-300 px-3 py-1">—</td><td class="border border-gray-300 px-3 py-1">Ambient</td><td class="border border-gray-300 px-3 py-1">5–10</td><td class="border border-gray-300 px-3 py-1">Remove acid residues (conductivity <50 μS/cm)</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">6</td><td class="border border-gray-300 px-3 py-1">Sanitize (Peracetic acid or hot water)</td><td class="border border-gray-300 px-3 py-1">PAA: 100–200 ppm; or Hot water: 90–95°C</td><td class="border border-gray-300 px-3 py-1">Ambient (PAA) / 90–95 (hot water)</td><td class="border border-gray-300 px-3 py-1">10–15</td><td class="border border-gray-300 px-3 py-1">Kill residual microorganisms; no rinse needed for PAA at ≤200 ppm (self-decomposing)</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2"><strong>CIP Verification:</strong> ATP bioluminescence swabs on equipment surfaces after CIP — target: < 150 RLU (Relative Light Units); visual inspection; final rinse water pH (6.5–7.5) and conductivity (<50 μS/cm); microbiological swabs (TPC <1 CFU/cm²) weekly.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Summary of Key Scientific Principles in Whey Beverage Manufacturing</h3>
            <div class="bg-gray-50 p-4 rounded mt-3 space-y-3">
                <p><strong>1. Protein Chemistry:</strong> The behaviour of β-Lg (pI = 5.2) at different pH values governs beverage clarity. Below pH 4.0, electrostatic repulsion prevents aggregation even during severe heat treatment. This is the single most important principle for clear whey beverages.</p>
                <p><strong>2. Hurdle Technology:</strong> Whey beverages employ multiple preservation hurdles: low pH (<4.5, inhibiting <em>C. botulinum</em>), thermal processing (destroying vegetative cells and spores), chemical preservatives (sorbate/benzoate inhibiting yeasts/moulds), low water activity (from added sugars, a_w 0.94–0.98), and refrigeration (for pasteurized products). No single hurdle is sufficient; the synergistic combination ensures safety and stability.</p>
                <p><strong>3. Colloidal Stability:</strong> Whey beverages are complex colloidal systems. Stability depends on DLVO theory (balance of van der Waals attractive forces and electrical double-layer repulsive forces), steric stabilization by adsorbed polymers (pectin, CMC), and gravitational effects (Stokes' Law). Formulation and processing must optimize all three.</p>
                <p><strong>4. Thermal Processing Optimization:</strong> The z-value concept allows optimization: for β-Lg denaturation z ≈ 6.5°C (quality factor), while for most pathogens z ≈ 5–10°C (safety factor). Since z-values are similar, low-pH formulation (which dramatically reduces protein denaturation at a given temperature) is the key strategy to maximize quality while ensuring safety.</p>
                <p><strong>5. Maillard Browning:</strong> The dominant chemical deterioration pathway in whey systems, governed by temperature (Arrhenius kinetics, Eₐ = 80–120 kJ/mol), pH (accelerated at higher pH), water activity (maximum at a_w 0.6–0.8), and reactant concentrations. Low pH and low storage temperature are the primary control measures.</p>
            </div>
        `
    },
    hi: {
        title: "Whey-based Beverage Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Whey-based Beverages</h3>
            <p>Whey is the aqueous fraction of milk that separates from the curd (casein coagulum) during cheese, paneer, or chhana manufacturing. Globally, approximately 180–190 million tonnes of liquid whey are produced annually, with nearly 50% of this volume still being discarded or underutilized, posing significant environmental challenges owing to its high Biological Oxygen Demand (BOD) of 30,000–50,000 mg/L and Chemical Oxygen Demand (COD) of 60,000–80,000 mg/L. Converting whey into value-added beverages is both an environmental and economic imperative.</p>

            <p class="mt-3">Whey retains approximately 55% of the total milk nutrients. Its dry matter content (6.0–7.0% w/v) comprises lactose (4.5–5.0%), soluble whey proteins (0.6–1.0%), minerals (0.5–0.7%), lactic acid (up to 0.8% in acid whey), and residual milk fat (0.05–0.5%). The protein fraction is of exceptional biological quality, with a Protein Digestibility Corrected Amino Acid Score (PDCAAS) of 1.0 — the highest possible value — and a Biological Value (BV) of 104, surpassing egg (BV 100) and casein (BV 77).</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Types of Whey</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2 text-left">Parameter</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Sweet Whey (Rennet Whey)</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Acid Whey (Paneer/Chhana Whey)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-4 py-2">Source</td><td class="border border-gray-300 px-4 py-2">Cheese making (enzymatic coagulation)</td><td class="border border-gray-300 px-4 py-2">Paneer, Chhana, Strained yoghurt, Cottage cheese (acid/heat coagulation)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">pH</td><td class="border border-gray-300 px-4 py-2">6.0–6.6</td><td class="border border-gray-300 px-4 py-2">4.0–5.0</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Titratable Acidity (% lactic acid)</td><td class="border border-gray-300 px-4 py-2">0.10–0.15%</td><td class="border border-gray-300 px-4 py-2">0.40–0.80%</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Total Solids (%)</td><td class="border border-gray-300 px-4 py-2">6.3–7.0</td><td class="border border-gray-300 px-4 py-2">5.5–6.5</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Lactose (%)</td><td class="border border-gray-300 px-4 py-2">4.5–5.2</td><td class="border border-gray-300 px-4 py-2">3.8–4.5</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Protein (%)</td><td class="border border-gray-300 px-4 py-2">0.6–1.0</td><td class="border border-gray-300 px-4 py-2">0.5–0.8</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Fat (%)</td><td class="border border-gray-300 px-4 py-2">0.2–0.5</td><td class="border border-gray-300 px-4 py-2">0.05–0.3</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Ash / Minerals (%)</td><td class="border border-gray-300 px-4 py-2">0.5–0.7</td><td class="border border-gray-300 px-4 py-2">0.6–0.8</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Calcium (mg/L)</td><td class="border border-gray-300 px-4 py-2">400–600</td><td class="border border-gray-300 px-4 py-2">800–1200 (higher due to acid solubilization from casein micelle)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Caseinomacropeptide (CMP)</td><td class="border border-gray-300 px-4 py-2">Present (15–20% of total whey protein)</td><td class="border border-gray-300 px-4 py-2">Absent</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Flavour Profile</td><td class="border border-gray-300 px-4 py-2">Mild, slightly sweet, neutral</td><td class="border border-gray-300 px-4 py-2">Distinctly sour, sharp, tangy</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Beverage Suitability</td><td class="border border-gray-300 px-4 py-2">Excellent for neutral/sweet beverages; easier formulation</td><td class="border border-gray-300 px-4 py-2">Good for tangy/citrus beverages; requires more sugar/flavour masking</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3 text-sm text-gray-600"><strong>Note:</strong> In India, acid whey from paneer and chhana production is the dominant form. India produces approximately 5 million tonnes of paneer annually, generating roughly 25–30 million tonnes of acid whey, much of which is currently discarded into drains.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Major Whey Protein Fractions and Their Functional Significance</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2 text-left">Protein</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">% of Total Whey Protein</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Molecular Weight (kDa)</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Isoelectric Point (pI)</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Denaturation Temp. (°C)</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Key Bioactivities & Functions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">β-Lactoglobulin (β-Lg)</td><td class="border border-gray-300 px-4 py-2">50–55%</td><td class="border border-gray-300 px-4 py-2">18.3</td><td class="border border-gray-300 px-4 py-2">5.2</td><td class="border border-gray-300 px-4 py-2">~78°C</td><td class="border border-gray-300 px-4 py-2">Retinol and fatty acid binding, gelation, foaming; most heat-sensitive major whey protein; primary contributor to heat-induced aggregation and turbidity</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">α-Lactalbumin (α-La)</td><td class="border border-gray-300 px-4 py-2">20–25%</td><td class="border border-gray-300 px-4 py-2">14.2</td><td class="border border-gray-300 px-4 py-2">4.2–4.5</td><td class="border border-gray-300 px-4 py-2">~62°C (but reversible)</td><td class="border border-gray-300 px-4 py-2">Lactose synthase regulatory subunit; rich in tryptophan (4 residues); promotes sleep, anxiety reduction; anti-tumour (HAMLET complex); high Ca²⁺ binding</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Bovine Serum Albumin (BSA)</td><td class="border border-gray-300 px-4 py-2">5–7%</td><td class="border border-gray-300 px-4 py-2">66.4</td><td class="border border-gray-300 px-4 py-2">4.7–4.9</td><td class="border border-gray-300 px-4 py-2">~64°C</td><td class="border border-gray-300 px-4 py-2">Fatty acid transport, antioxidant (free thiol group), emulsification</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Immunoglobulins (IgG, IgA, IgM)</td><td class="border border-gray-300 px-4 py-2">10–15%</td><td class="border border-gray-300 px-4 py-2">150–1000</td><td class="border border-gray-300 px-4 py-2">5.5–8.3</td><td class="border border-gray-300 px-4 py-2">~72°C</td><td class="border border-gray-300 px-4 py-2">Passive immunity, antimicrobial, immune modulation</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Lactoferrin (LF)</td><td class="border border-gray-300 px-4 py-2">1–3%</td><td class="border border-gray-300 px-4 py-2">80</td><td class="border border-gray-300 px-4 py-2">8.0–8.5</td><td class="border border-gray-300 px-4 py-2">~65°C (apo-form); ~90°C (holo-form)</td><td class="border border-gray-300 px-4 py-2">Iron binding and transport, bacteriostatic (deprives bacteria of iron), anti-viral, anti-inflammatory, prebiotic activity</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Lactoperoxidase (LP)</td><td class="border border-gray-300 px-4 py-2">0.5–1%</td><td class="border border-gray-300 px-4 py-2">78</td><td class="border border-gray-300 px-4 py-2">9.6</td><td class="border border-gray-300 px-4 py-2">~78°C</td><td class="border border-gray-300 px-4 py-2">Antimicrobial enzyme (LP system with SCN⁻ and H₂O₂); natural biopreservative</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Glycomacropeptide (GMP/CMP)</td><td class="border border-gray-300 px-4 py-2">10–20% (sweet whey only)</td><td class="border border-gray-300 px-4 py-2">6.7–8.0</td><td class="border border-gray-300 px-4 py-2"><3.8</td><td class="border border-gray-300 px-4 py-2">Heat stable</td><td class="border border-gray-300 px-4 py-2">Satiety hormone (CCK) release, anti-cariogenic, prebiotic (bifidogenic), suitable for PKU patients (Phe-free)</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3"><strong>Critical Processing Implication:</strong> β-Lactoglobulin, the dominant whey protein, is the most problematic during beverage processing. At temperatures above 68°C at neutral pH, β-Lg undergoes irreversible denaturation: its free sulfhydryl group (Cys-121) is exposed, leading to thiol-disulfide interchange reactions, protein aggregation, and the development of undesirable turbidity, sedimentation, and cooked flavour. This is the fundamental scientific challenge in clear whey beverage production. At pH < 4.0 (below the pI of 5.2), however, β-Lg carries a strong net positive charge, which causes electrostatic repulsion between molecules, dramatically increasing heat stability and enabling heat treatment without aggregation — the principle underlying acidified clear whey drinks.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Bioactive Peptides Released During Whey Processing</h3>
            <p>Enzymatic hydrolysis and fermentation of whey proteins release bioactive peptides with demonstrated health benefits:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>ACE-Inhibitory Peptides (Antihypertensive):</strong> Peptides such as Ile-Pro-Ala (IPA) and Ala-Leu-Pro-Met-His-Ile-Arg from β-Lg hydrolysis inhibit Angiotensin-Converting Enzyme (ACE), with IC₅₀ values ranging from 42–580 μM, contributing to blood pressure reduction.</li>
                <li><strong>Opioid Peptides (α-Lactorphin, β-Lactorphin):</strong> Derived from α-La and β-Lg respectively; exhibit analgesic and antihypertensive effects via opioid receptor binding.</li>
                <li><strong>Antimicrobial Peptides (Lactoferricin B):</strong> Generated from pepsin digestion of lactoferrin; active against Gram-positive and Gram-negative bacteria, yeasts, and fungi at MIC values of 0.3–150 μg/mL.</li>
                <li><strong>Immunomodulatory Peptides:</strong> Stimulate lymphocyte proliferation, enhance phagocytic activity of macrophages, and modulate cytokine production.</li>
                <li><strong>Antioxidant Peptides:</strong> Contain cysteine residues that serve as precursors for glutathione (GSH) synthesis, the body's master intracellular antioxidant.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Vitamin and Mineral Profile of Whey</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2 text-left">Nutrient</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Amount per Litre of Whey</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Significance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-4 py-2">Calcium</td><td class="border border-gray-300 px-4 py-2">400–1200 mg (higher in acid whey)</td><td class="border border-gray-300 px-4 py-2">Bone health; acid whey contains more ionic/soluble Ca²⁺</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Phosphorus</td><td class="border border-gray-300 px-4 py-2">350–600 mg</td><td class="border border-gray-300 px-4 py-2">Bone and teeth; energy metabolism (ATP)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Potassium</td><td class="border border-gray-300 px-4 py-2">1300–1600 mg</td><td class="border border-gray-300 px-4 py-2">Electrolyte balance; makes whey suitable for sports/rehydration drinks</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Sodium</td><td class="border border-gray-300 px-4 py-2">400–550 mg</td><td class="border border-gray-300 px-4 py-2">Electrolyte; rehydration</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Magnesium</td><td class="border border-gray-300 px-4 py-2">60–90 mg</td><td class="border border-gray-300 px-4 py-2">Enzymatic cofactor, muscle function</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Zinc</td><td class="border border-gray-300 px-4 py-2">1.5–3.5 mg</td><td class="border border-gray-300 px-4 py-2">Immune function, wound healing</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Riboflavin (B₂)</td><td class="border border-gray-300 px-4 py-2">1.2–1.8 mg</td><td class="border border-gray-300 px-4 py-2">Energy metabolism; gives whey its greenish-yellow colour (fluorescence at 520 nm)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Pantothenic acid (B₅)</td><td class="border border-gray-300 px-4 py-2">3.0–4.0 mg</td><td class="border border-gray-300 px-4 py-2">CoA synthesis</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Pyridoxine (B₆)</td><td class="border border-gray-300 px-4 py-2">0.4–0.6 mg</td><td class="border border-gray-300 px-4 py-2">Amino acid metabolism</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Cobalamin (B₁₂)</td><td class="border border-gray-300 px-4 py-2">2.0–4.0 μg</td><td class="border border-gray-300 px-4 py-2">Red blood cell formation, neural function</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Ascorbic acid (Vitamin C)</td><td class="border border-gray-300 px-4 py-2">1.0–2.0 mg</td><td class="border border-gray-300 px-4 py-2">Antioxidant (often supplemented in beverages)</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Classification of Whey-based Beverages</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2 text-left">Category</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Description</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">pH Range</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Protein Clarity</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Clear/Transparent Whey Drinks</td><td class="border border-gray-300 px-4 py-2">Acid-clarified, deproteinized or protein-stable at low pH; soft-drink-like</td><td class="border border-gray-300 px-4 py-2">2.8–3.5</td><td class="border border-gray-300 px-4 py-2">Transparent or slightly hazy</td><td class="border border-gray-300 px-4 py-2">Rivella (Switzerland), Fruity Whey (concept), Lemon-lime whey soda</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Cloudy/Opaque Whey Drinks</td><td class="border border-gray-300 px-4 py-2">Protein retained; stabilized with hydrocolloids; juice-like appearance</td><td class="border border-gray-300 px-4 py-2">3.5–4.5</td><td class="border border-gray-300 px-4 py-2">Turbid/opaque</td><td class="border border-gray-300 px-4 py-2">Mango whey drink, whey-guava beverage, whey-orange beverage</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Fermented Whey Beverages</td><td class="border border-gray-300 px-4 py-2">Whey fermented with probiotic/lactic cultures</td><td class="border border-gray-300 px-4 py-2">3.8–4.5</td><td class="border border-gray-300 px-4 py-2">Turbid</td><td class="border border-gray-300 px-4 py-2">Probiotic whey drink (L. acidophilus), whey kefir</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Whey-Fruit Juice Blends</td><td class="border border-gray-300 px-4 py-2">Whey blended with fruit juice/pulp (typically 20–40% juice)</td><td class="border border-gray-300 px-4 py-2">3.0–4.2</td><td class="border border-gray-300 px-4 py-2">Variable</td><td class="border border-gray-300 px-4 py-2">Whey-mango, whey-pineapple, whey-pomegranate</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Carbonated Whey Beverages</td><td class="border border-gray-300 px-4 py-2">Clear whey drink with CO₂ injection (2.5–4.0 volumes CO₂)</td><td class="border border-gray-300 px-4 py-2">2.8–3.5</td><td class="border border-gray-300 px-4 py-2">Clear/sparkling</td><td class="border border-gray-300 px-4 py-2">Whey cola, sparkling whey lemonade</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Sports/Protein-enriched Whey Drinks</td><td class="border border-gray-300 px-4 py-2">Fortified with WPC/WPI for higher protein (8–15 g/serving); isotonic or hypertonic</td><td class="border border-gray-300 px-4 py-2">3.0–4.0</td><td class="border border-gray-300 px-4 py-2">Clear or cloudy</td><td class="border border-gray-300 px-4 py-2">Protein water, recovery whey drink, isotonic whey sports drink</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Whey-based Dairy Beverages (Lassi-type)</td><td class="border border-gray-300 px-4 py-2">Whey blended with buttermilk, dahi, or SMP to create dairy-type drinks</td><td class="border border-gray-300 px-4 py-2">4.0–4.8</td><td class="border border-gray-300 px-4 py-2">Opaque</td><td class="border border-gray-300 px-4 py-2">Whey lassi, whey chaas, reconstituted whey-SMP drink</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards and Regulatory Framework for Whey Beverages</h3>
            <p>While FSSAI does not have a single dedicated standard titled "Whey Beverage," the product must comply with multiple regulatory provisions:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-3">
                <li><strong>FSS (Food Products Standards and Food Additives) Regulations, 2011:</strong>
                    <ul class="list-circle list-outside pl-5 mt-1 space-y-1">
                        <li>If positioned as a non-carbonated water-based beverage, it falls under Section 2.3.30 — <em>"Non-carbonated water based beverages (non-alcoholic, ready to serve)"</em>, requiring minimum 10% (m/m) fruit juice content if claiming any fruit name.</li>
                        <li>If positioned as a dairy product or dairy-based beverage, it may align with Section 2.1 (Dairy Products) standards for compositional requirements.</li>
                        <li><strong>Whey Protein Concentrate (WPC)</strong> used in formulations must conform to IS 15894:2010 — Total protein content ≥ 34% on dry basis for WPC-34, ≥ 80% for WPC-80.</li>
                    </ul>
                </li>
                <li><strong>Permitted Additives (as per Schedule VA and VB):</strong>
                    <ul class="list-circle list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Preservatives:</strong> Sodium benzoate (INS 211) — max 200 ppm; Potassium sorbate (INS 202) — max 300 ppm; combined max 300 ppm. Nisin (INS 234) — max 12.5 mg/kg.</li>
                        <li><strong>Acidulants:</strong> Citric acid (INS 330), Malic acid (INS 296), Lactic acid (INS 270) — GMP levels.</li>
                        <li><strong>Stabilizers/Emulsifiers:</strong> Pectin (INS 440) — max 3000 ppm; CMC (INS 466) — max 5000 ppm; Xanthan gum (INS 415) — max 5000 ppm; Carrageenan (INS 407) — max 5000 ppm.</li>
                        <li><strong>Colours:</strong> Only FSSAI-permitted colours (e.g., Tartrazine INS 102 max 100 ppm, Sunset Yellow FCF INS 110 max 100 ppm, or natural colours like β-carotene).</li>
                        <li><strong>Flavouring agents:</strong> Must comply with Schedule VD; natural, nature-identical, or artificial flavours allowed as per category.</li>
                        <li><strong>Sweeteners (if sugar-free/diet variant):</strong> Aspartame (INS 951) max 600 ppm; Sucralose (INS 955) max 300 ppm; Stevia glycosides (INS 960) max 200 ppm.</li>
                    </ul>
                </li>
                <li><strong>Microbiological Standards (FSS Regulations, Schedule 2):</strong>
                    <div class="overflow-x-auto mt-2">
                        <table class="min-w-full border border-gray-300 text-sm">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Parameter</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">n</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">c</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">m</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">M</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border border-gray-300 px-3 py-1">Total Plate Count (TPC)</td><td class="border border-gray-300 px-3 py-1">5</td><td class="border border-gray-300 px-3 py-1">2</td><td class="border border-gray-300 px-3 py-1">10⁴ CFU/mL</td><td class="border border-gray-300 px-3 py-1">10⁵ CFU/mL</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Coliforms</td><td class="border border-gray-300 px-3 py-1">5</td><td class="border border-gray-300 px-3 py-1">2</td><td class="border border-gray-300 px-3 py-1">10 CFU/mL</td><td class="border border-gray-300 px-3 py-1">100 CFU/mL</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1"><em>E. coli</em></td><td class="border border-gray-300 px-3 py-1">5</td><td class="border border-gray-300 px-3 py-1">0</td><td class="border border-gray-300 px-3 py-1">Absent/mL</td><td class="border border-gray-300 px-3 py-1">—</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1"><em>Salmonella</em></td><td class="border border-gray-300 px-3 py-1">5</td><td class="border border-gray-300 px-3 py-1">0</td><td class="border border-gray-300 px-3 py-1">Absent/25 mL</td><td class="border border-gray-300 px-3 py-1">—</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1"><em>S. aureus</em></td><td class="border border-gray-300 px-3 py-1">5</td><td class="border border-gray-300 px-3 py-1">1</td><td class="border border-gray-300 px-3 py-1">10 CFU/mL</td><td class="border border-gray-300 px-3 py-1">100 CFU/mL</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1"><em>Listeria monocytogenes</em></td><td class="border border-gray-300 px-3 py-1">5</td><td class="border border-gray-300 px-3 py-1">0</td><td class="border border-gray-300 px-3 py-1">Absent/25 mL</td><td class="border border-gray-300 px-3 py-1">—</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Yeast and Mould</td><td class="border border-gray-300 px-3 py-1">5</td><td class="border border-gray-300 px-3 py-1">2</td><td class="border border-gray-300 px-3 py-1">10 CFU/mL</td><td class="border border-gray-300 px-3 py-1">100 CFU/mL</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="text-xs text-gray-500 mt-1">n = number of samples; c = maximum allowable number of defective samples; m = microbiological limit below which all results are acceptable; M = limit above which results are unacceptable.</p>
                </li>
                <li><strong>Labelling Requirements (FSS (Labelling and Display) Regulations, 2020):</strong> Must declare — product name and type, list of ingredients in descending order, nutritional information per 100 mL and per serving, best before/use by date, storage conditions, FSSAI license number and logo, allergen declaration (contains: <em>MILK</em>), net volume, batch/lot number, manufacturer details, vegetarian logo (green dot).</li>
                <li><strong>Contaminant Limits:</strong> Lead — max 0.5 mg/kg; Arsenic — max 0.1 mg/kg; Tin (if canned) — max 250 mg/kg; Aflatoxin M₁ — max 0.5 μg/kg.</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Whey-based Beverages with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Generalized Processing Flowchart for Whey Beverage Production</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Raw Whey Reception (from Paneer/Cheese making) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-50 border border-blue-200 rounded">Preliminary Straining/Filtration (Removal of curd fines) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Clarification by Centrifugation & Fat Separation <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Initial Pasteurization (72°C × 15 sec or 63°C × 30 min) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1 (B)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-50 border border-purple-200 rounded">Deproteinization (for clear drinks only: thermal denaturation at 90°C/pH 4.5 → centrifugation) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Ingredient Blending (Sugar, Acid, Stabilizers, Flavors, Colours, Fortification) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-50 border border-green-200 rounded">pH Adjustment and Verification (target: pH 3.0–4.2) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-50 border border-yellow-200 rounded">Homogenization (for cloudy/fruit-pulp beverages: 150–200 bar / 15–20 MPa, 2-stage) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">De-aeration (Vacuum chamber, removal of dissolved O₂ to <1 ppm) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-red-100 border border-red-300 rounded">Final Heat Treatment — Pasteurization (85–95°C × 15–30 sec) or UHT (135–142°C × 4–6 sec) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2 (B)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cooling (to 4–8°C for pasteurized; to 20–25°C for UHT/aseptic)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging — Aseptic filling (for UHT) or Hot-fill (>82°C) or Cold-fill (refrigerated) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3 (B) (for aseptic filling)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-orange-50 border border-orange-200 rounded">Metal Detection / X-ray Inspection <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-4 (P)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Storage & Distribution (4±2°C for pasteurized; ambient for UHT)</div>
            </div>
            <p class="text-xs text-gray-500 mt-2">CCP designations: (B) = Biological hazard, (P) = Physical hazard. PRP = Prerequisite Program, oPRP = Operational Prerequisite Program.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Scientific Explanation of Each Processing Step</h3>
            <ol class="list-decimal list-outside pl-5 space-y-6">
                <li><strong>Whey Reception and Initial Quality Assessment (PRP)</strong>
                    <p>Fresh whey must be collected immediately after coagulation and processed within <strong>2–4 hours</strong> at ambient temperature, or cooled to <strong>≤7°C</strong> within 1 hour if delays are anticipated. Delayed processing causes rapid microbial proliferation (initial load: 10⁴–10⁶ CFU/mL, primarily <em>Lactobacillus</em>, <em>Streptococcus thermophilus</em>, <em>E. coli</em>, and coliforms from the cheese/paneer process) and Maillard browning reactions between lactose and amino acids.</p>
                    <p class="mt-2"><strong>Quality Checks at Reception:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>pH: 4.5–6.5 (type-dependent); reject if < 3.5 (excessive acid development)</li>
                        <li>Titratable acidity: ≤0.20% LA (sweet whey), ≤0.80% LA (acid whey)</li>
                        <li>Temperature: ≤10°C (if stored) or ≤35°C (if fresh from process)</li>
                        <li>Total solids: 5.5–7.0% (refractometer/hydrometer)</li>
                        <li>Organoleptic: No off-flavours (butyric, putrid), no abnormal colour</li>
                        <li>MBRT (Methylene Blue Reduction Test): ≥2 hours for acceptable quality</li>
                        <li>Phosphatase test: Positive (raw whey); Negative (if pre-pasteurized)</li>
                    </ul>
                    <div class="bg-blue-50 p-3 rounded mt-2">
                        <strong>Food Safety Concern:</strong> Raw whey can harbour <em>Salmonella</em>, <em>Listeria monocytogenes</em>, <em>E. coli</em> O157:H7, <em>S. aureus</em> (if originating from infected udder), and <em>Bacillus cereus</em> spores. The primary hazard at this stage is microbiological. Additionally, chemical hazards include potential antibiotic residues, aflatoxin M₁, and pesticide residues carried over from the original milk. Physical hazards include hair, metal fragments, and curd particles.
                    </div>
                </li>

                <li><strong>Preliminary Filtration and Straining (PRP)</strong>
                    <p>Whey is passed through a vibrating screen or nylon filter (mesh size: 60–100 mesh / 150–250 μm) to remove coarse curd fines, fat globules, and any extraneous matter. This step improves downstream equipment efficiency and reduces fouling of heat exchangers. Typical recovery: 98–99% of whey volume.</p>
                </li>

                <li><strong>Clarification and Fat Separation (oPRP)</strong>
                    <p>A high-speed cream separator/clarifier (typically operating at 5000–7000 × g) performs dual functions: (a) removal of residual fat (reducing fat content from 0.3–0.5% to <0.04%), and (b) clarification by removing fine suspended particles and denatured protein aggregates.</p>
                    <p class="mt-2"><strong>Scientific Rationale:</strong> Residual fat causes off-flavour development during storage through lipid oxidation (autoxidation catalyzed by light-activated riboflavin acting as a photosensitizer, producing singlet oxygen ¹O₂ which attacks unsaturated fatty acids). Fat globules also scatter light, causing undesirable haze in clear beverage formulations. Fat content < 0.04% is the target for clear whey drinks.</p>
                    <p class="mt-2"><strong>oPRP Classification:</strong> This step is an oPRP because inadequate fat removal directly affects product safety (oxidized lipids produce toxic aldehydes like malondialdehyde and 4-hydroxynonenal at high levels) and quality, but is not a CCP since subsequent pasteurization addresses the biological hazard.</p>
                </li>

                <li><strong>Initial Pasteurization — CCP-1 (Biological)</strong>
                    <p>The clarified whey undergoes HTST pasteurization using a plate heat exchanger (PHE).</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="min-w-full border border-gray-300 text-sm">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Method</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Temperature</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Holding Time</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Log Reduction (target pathogen)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border border-gray-300 px-3 py-1">LTLT (Batch)</td><td class="border border-gray-300 px-3 py-1">63°C</td><td class="border border-gray-300 px-3 py-1">30 min</td><td class="border border-gray-300 px-3 py-1">≥5 log₁₀ for <em>Coxiella burnetii</em></td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">HTST (Continuous)</td><td class="border border-gray-300 px-3 py-1">72°C</td><td class="border border-gray-300 px-3 py-1">15 sec</td><td class="border border-gray-300 px-3 py-1">≥5 log₁₀ for <em>C. burnetii</em>, >12 log₁₀ for <em>Salmonella</em></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2"><strong>D-values of key pathogens in whey at 72°C:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><em>Coxiella burnetii</em> (most heat-resistant non-spore-forming pathogen in milk): D₇₂ = 0.01 sec → 15 sec hold provides >1500D process</li>
                        <li><em>Listeria monocytogenes</em>: D₇₂ = 0.2–0.4 sec</li>
                        <li><em>Salmonella</em> spp.: D₇₂ = 0.06–0.1 sec</li>
                        <li><em>E. coli</em> O157:H7: D₇₂ = 0.07–0.15 sec</li>
                        <li><em>S. aureus</em>: D₇₂ = 0.1–0.3 sec</li>
                    </ul>
                    <p class="mt-2"><strong>Verification:</strong> Phosphatase test (must be negative); temperature recorded continuously using calibrated chart recorder or data logger; flow diversion valve (FDV) must divert product if temperature drops below 72°C.</p>
                    <div class="bg-red-50 p-3 rounded mt-2 border-l-4 border-red-500">
                        <strong>CCP-1 Monitoring:</strong><br>
                        • <strong>What:</strong> Temperature and time of pasteurization<br>
                        • <strong>How:</strong> Calibrated thermometer/RTD sensors in holding tube + flow meter<br>
                        • <strong>When:</strong> Continuously (every batch / every second for continuous)<br>
                        • <strong>Who:</strong> Trained pasteurizer operator<br>
                        • <strong>Critical Limits:</strong> ≥72°C for ≥15 seconds<br>
                        • <strong>Corrective Action:</strong> Divert sub-standard product back to raw balance tank for re-pasteurization; investigate and rectify cause; document incident
                    </div>
                    <p class="mt-2"><strong>Note on thermal effects on whey proteins:</strong> At 72°C/15s, approximately 5–10% of β-Lg undergoes denaturation. This is acceptable and does not cause visible turbidity at this stage. However, protein denaturation increases sharply above 75°C (z-value for β-Lg denaturation ≈ 6.5°C).</p>
                </li>

                <li><strong>Deproteinization (for Clear Whey Beverages Only) — oPRP</strong>
                    <p>For clear, transparent whey drinks, residual whey proteins must be removed or rendered soluble to prevent haze and sedimentation. There are two principal approaches:</p>
                    <p class="mt-2"><strong>Method A — Thermal Acid Deproteinization (Most Common):</strong></p>
                    <ol class="list-alpha list-outside pl-5 mt-1 space-y-1">
                        <li>Adjust pH of whey to 4.5–4.6 (near the pI of β-Lg = 5.2, but accounting for co-precipitation with other proteins) using citric acid or HCl.</li>
                        <li>Heat to 90–95°C for 15–20 minutes with gentle agitation. This causes near-complete denaturation and aggregation of whey proteins (>95% denaturation of β-Lg and α-La) through hydrophobic interactions and disulfide bond formation.</li>
                        <li>Cool to 40–50°C and separate the flocculated protein aggregates by centrifugation (3000–5000 × g) or cloth/membrane filtration.</li>
                        <li>The resulting clear supernatant (deproteinized whey) retains lactose, minerals, water-soluble vitamins, and organic acids but has protein content reduced to < 0.1%.</li>
                    </ol>
                    <p class="mt-2"><strong>Method B — Membrane Filtration (Ultrafiltration):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>UF membranes with MWCO (Molecular Weight Cut-Off) of 10–30 kDa retain whey proteins in the retentate (which can be processed into WPC) while the permeate (containing lactose, minerals, and water) serves as the base for clear beverages.</li>
                        <li>Advantage: recovers valuable protein as a co-product (WPC); produces a very clean permeate.</li>
                        <li>Operating parameters: TMP (Transmembrane Pressure) = 1–4 bar; temperature = 10–50°C; flux = 20–60 L/m²/h.</li>
                    </ul>
                    <p class="mt-2"><strong>Method C — For Cloudy/Opaque Beverages:</strong> This step is <strong>skipped entirely</strong>. Instead, proteins are stabilized by formulating at pH 3.0–3.8 (well below pI) and using stabilizers like pectin that form electrostatic complexes with positively charged proteins, preventing aggregation.</p>

                    <div class="bg-yellow-50 p-3 rounded mt-2 border-l-4 border-yellow-500">
                        <strong>Science of Pectin-Protein Stabilization:</strong> At pH < pI (below ~5.0 for β-Lg), whey proteins carry a net positive charge (+). High-methoxyl (HM) pectin carries a strong negative charge (−) due to ionized carboxyl groups. Electrostatic attraction forms soluble pectin-protein complexes that prevent protein-protein aggregation. Optimal pectin:protein ratio is typically 0.5:1 to 1:1 (w/w) with HM pectin of Degree of Esterification (DE) > 70%. Pectin also increases viscosity, providing steric stabilization against sedimentation.
                    </div>
                </li>

                <li><strong>Ingredient Blending and Formulation (PRP)</strong>
                    <p>The pasteurized (and optionally deproteinized) whey base is transferred to a jacketed, agitated blending tank (with variable-speed impeller operating at 100–300 rpm). Ingredients are added in a specific sequence to avoid interactions:</p>

                    <p class="mt-3"><strong>Step 1 — Dry Sugar/Sweetener Dissolution:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Sucrose: Typical addition — 8–14% (w/v) for sweet beverages; dissolved in warm whey (40–50°C) for rapid dissolution.</li>
                        <li>High Fructose Corn Syrup (HFCS 55): Alternative at 6–10% (higher sweetness intensity: relative sweetness of fructose = 1.7 vs sucrose = 1.0).</li>
                        <li>For reduced-calorie variants: Stevia glycosides (rebaudioside A) at 200–400 ppm provide equivalent sweetness to 8–10% sucrose.</li>
                    </ul>

                    <p class="mt-3"><strong>Step 2 — Stabilizer/Hydrocolloid Dispersion:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>High-Methoxyl Pectin (DE > 70%):</strong> 0.1–0.5% (w/v); primary stabilizer for acidic whey beverages; must be pre-dispersed in 5× its weight of sugar to prevent lumping, then hydrated in hot water (80°C) before adding to the acidic whey base.</li>
                        <li><strong>Carboxymethyl Cellulose (CMC):</strong> 0.1–0.3%; provides viscosity and suspension capability; must be hydrated separately.</li>
                        <li><strong>Xanthan Gum:</strong> 0.05–0.15%; synergistic with CMC; provides shear-thinning pseudoplastic behaviour for improved pouring.</li>
                        <li><strong>Microcrystalline Cellulose (MCC):</strong> 0.1–0.3%; provides pulp-like mouthfeel in fruit-whey blends.</li>
                    </ul>

                    <p class="mt-3"><strong>Step 3 — Acidification:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Target pH for most whey beverages: <strong>3.0–4.2</strong> (critical for microbial safety and protein stability).</li>
                        <li><strong>Citric acid (anhydrous):</strong> Most common acidulant; typical addition 0.2–0.6% (w/v); provides fresh, citrus-like sourness; chelates calcium (which can otherwise cause turbidity).</li>
                        <li><strong>Malic acid:</strong> Provides smoother, less sharp acidity; used at 0.1–0.4%; preferred for apple/mango flavoured variants.</li>
                        <li><strong>Phosphoric acid:</strong> Sharp acidity; used for cola-type formulations at 0.05–0.08%.</li>
                        <li><strong>Lactic acid:</strong> Naturally present in acid whey; may be supplemented; provides a rounded, mild sourness.</li>
                        <li><strong>Buffering considerations:</strong> Whey has significant buffering capacity (primarily from phosphates and proteins). The Henderson-Hasselbalch equation governs pH: pH = pKa + log([A⁻]/[HA]). Citric acid (pKa₁ = 3.13, pKa₂ = 4.76, pKa₃ = 6.40) provides good buffering in the target pH range.</li>
                    </ul>

                    <p class="mt-3"><strong>Step 4 — Flavouring and Colouring:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Natural flavours: Mango oleoresin (0.05–0.15%), lemon oil (0.02–0.05%), orange essence (0.1–0.3%), pineapple flavour (0.08–0.12%).</li>
                        <li>Flavours should be added at the end of blending (or after final heat treatment if volatile) to minimize flavour loss.</li>
                        <li>Colours: β-carotene (0.5–2 ppm for yellow-orange), annatto (for orange), anthocyanin extracts (for purple/red), chlorophyll (for green).</li>
                    </ul>

                    <p class="mt-3"><strong>Step 5 — Fruit Juice/Pulp Addition (for fruit-whey blends):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Typical addition: 10–40% (v/v) of pasteurized fruit juice or 5–15% fruit pulp.</li>
                        <li>Fruit contributes natural sugars, organic acids, vitamins (especially ascorbic acid), polyphenols, and colour.</li>
                        <li>Popular Indian combinations: Mango (20–30% Alphonso pulp), Guava (15–25%), Litchi (20%), Pineapple (15–20%), Pomegranate (10–15%).</li>
                    </ul>

                    <p class="mt-3"><strong>Step 6 — Optional Fortification:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>WPC/WPI addition:</strong> For protein-enriched variants; WPC-80 at 2–5% (w/v) to boost protein to 3–8 g/100 mL; must be hydrated separately and added slowly to prevent foaming and aggregation.</li>
                        <li><strong>Vitamin C (ascorbic acid):</strong> 30–100 mg/100 mL for fortification; also acts as antioxidant (oxygen scavenger) and reducing agent.</li>
                        <li><strong>Prebiotic fibre:</strong> Inulin (2–5%), polydextrose (1–3%), or FOS (Fructo-oligosaccharides) (1–3%) for prebiotic claim and improved mouthfeel/body.</li>
                        <li><strong>Probiotic cultures:</strong> For fermented variants — <em>Lactobacillus acidophilus</em>, <em>L. rhamnosus GG</em>, <em>Bifidobacterium lactis</em> — added post-pasteurization at 10⁸–10⁹ CFU/mL to ensure ≥10⁶ CFU/mL at end of shelf life.</li>
                        <li><strong>Minerals:</strong> Calcium lactate (0.2–0.5%) or tricalcium phosphate for calcium fortification; zinc sulfate for zinc.</li>
                    </ul>

                    <p class="mt-3"><strong>Typical Formulation for a Mango Whey Beverage (Research-Optimized):</strong></p>
                    <div class="overflow-x-auto mt-2">
                        <table class="min-w-full border border-gray-300 text-sm">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Ingredient</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Quantity (per 100 mL)</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border border-gray-300 px-3 py-1">Clarified Paneer Whey</td><td class="border border-gray-300 px-3 py-1">55–65 mL</td><td class="border border-gray-300 px-3 py-1">Base liquid (protein, minerals, lactose)</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Mango pulp (Totapuri/Alphonso)</td><td class="border border-gray-300 px-3 py-1">20–30 mL</td><td class="border border-gray-300 px-3 py-1">Flavour, colour, vitamin A & C, fibre</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Sugar (sucrose)</td><td class="border border-gray-300 px-3 py-1">8–12 g</td><td class="border border-gray-300 px-3 py-1">Sweetness, mouthfeel, osmotic preservation</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Citric acid</td><td class="border border-gray-300 px-3 py-1">0.2–0.4 g</td><td class="border border-gray-300 px-3 py-1">pH adjustment (target 3.8–4.0), tartness</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">HM Pectin (DE > 72%)</td><td class="border border-gray-300 px-3 py-1">0.15–0.30 g</td><td class="border border-gray-300 px-3 py-1">Protein stabilization, viscosity, mouthfeel</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">CMC</td><td class="border border-gray-300 px-3 py-1">0.10–0.20 g</td><td class="border border-gray-300 px-3 py-1">Suspension, viscosity</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Potassium sorbate</td><td class="border border-gray-300 px-3 py-1">0.02–0.03 g (200–300 ppm)</td><td class="border border-gray-300 px-3 py-1">Preservative (anti-yeast, anti-mould)</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Mango flavour (natural)</td><td class="border border-gray-300 px-3 py-1">0.05–0.10 mL</td><td class="border border-gray-300 px-3 py-1">Flavour reinforcement</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Water (RO treated)</td><td class="border border-gray-300 px-3 py-1">q.s. to 100 mL</td><td class="border border-gray-300 px-3 py-1">Volume adjustment</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2 text-sm"><strong>Expected Final Composition:</strong> TSS: 15–18°Brix; pH: 3.8–4.0; Protein: 0.4–0.7%; Total Solids: 18–22%; Viscosity: 15–40 cP (at 25°C, 60 rpm, Brookfield); Colour: golden-yellow to orange (L* = 55–65, a* = 5–15, b* = 40–55 in CIE Lab).</p>
                </li>

                <li><strong>pH Adjustment and Verification (oPRP)</strong>
                    <p>After blending, the pH is precisely measured and adjusted to the target range using food-grade citric acid (to decrease pH) or sodium citrate/sodium hydroxide (to increase pH). This step is classified as an <strong>oPRP</strong> because:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>pH < 4.6 is the critical dividing line between low-acid foods (where <em>Clostridium botulinum</em> can grow and produce toxin) and acid foods (where <em>C. botulinum</em> growth is inhibited).</li>
                        <li>At pH < 4.6, even if thermal processing is inadequate, the risk of botulism is eliminated, providing an intrinsic safety barrier.</li>
                        <li>However, aciduric organisms (<em>Alicyclobacillus acidoterrestris</em>, yeasts, moulds) can still grow at pH 3.0–4.5.</li>
                        <li>Optimal pH for most whey beverages: <strong>3.0–3.8</strong> for clear drinks; <strong>3.5–4.2</strong> for cloudy/fruit-based drinks.</li>
                    </ul>
                    <p class="mt-2"><strong>Monitoring:</strong> pH measured with calibrated digital pH meter (accuracy ±0.01 pH units) at 25°C; meter calibrated daily with standard buffers (pH 4.00 and 7.00).</p>
                </li>

                <li><strong>Homogenization (PRP — for Cloudy/Fruit-pulp Beverages)</strong>
                    <p>Two-stage high-pressure homogenization is applied to create a stable, uniform suspension:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>First stage:</strong> 150–200 bar (15–20 MPa) — disrupts fat globules (if any) and fruit pulp particles to < 1 μm; creates fine emulsion.</li>
                        <li><strong>Second stage:</strong> 30–50 bar (3–5 MPa) — breaks up clusters formed in first stage; ensures uniform particle size distribution.</li>
                        <li><strong>Temperature:</strong> 55–70°C (warm homogenization improves efficiency and reduces viscosity for easier processing).</li>
                    </ul>
                    <p class="mt-2"><strong>Scientific Basis:</strong> Stokes' Law governs sedimentation: v = (2r²(ρₚ - ρ_f)g) / 9η, where v = sedimentation velocity, r = particle radius, ρₚ = particle density, ρ_f = fluid density, g = gravitational acceleration, η = fluid viscosity. Homogenization reduces r (particle radius) by 10–100×, reducing sedimentation velocity by 100–10,000×. Simultaneously, stabilizers increase η (viscosity), further retarding settling.</p>
                    <p class="mt-2">For clear beverages, homogenization is avoided as it creates a stable turbid emulsion rather than the desired transparent appearance.</p>
                </li>

                <li><strong>De-aeration (PRP)</strong>
                    <p>The blended product is passed through a vacuum de-aerator (operating at 0.3–0.5 bar absolute pressure, 50–60°C) to remove dissolved and entrained oxygen.</p>
                    <p class="mt-2"><strong>Scientific Rationale:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Dissolved O₂ promotes oxidative degradation of ascorbic acid (if fortified): ascorbic acid → dehydroascorbic acid → 2,3-diketogulonic acid (irreversible loss; follows first-order kinetics with k proportional to [O₂]).</li>
                        <li>Oxygen catalyzes Maillard browning and lipid oxidation, causing colour darkening and off-flavours (hexanal, nonanal).</li>
                        <li>Dissolved O₂ also causes foaming during filling, leading to under-filling and headspace issues.</li>
                        <li>Target: dissolved O₂ < 1 ppm (measured by optical dissolved oxygen sensor).</li>
                    </ul>
                </li>

                <li><strong>Final Heat Treatment — CCP-2 (Biological)</strong>
                    <p>This is the most critical step for product safety. The treatment intensity depends on the desired shelf life and distribution conditions:</p>

                    <div class="overflow-x-auto mt-2">
                        <table class="min-w-full border border-gray-300 text-sm">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Treatment Type</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Conditions</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Target Organisms</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Shelf Life</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Storage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border border-gray-300 px-3 py-1">Standard Pasteurization</td><td class="border border-gray-300 px-3 py-1">72°C × 15 sec</td><td class="border border-gray-300 px-3 py-1">Vegetative pathogens</td><td class="border border-gray-300 px-3 py-1">15–21 days</td><td class="border border-gray-300 px-3 py-1">Refrigerated (2–6°C)</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">High Pasteurization</td><td class="border border-gray-300 px-3 py-1">85–95°C × 15–30 sec</td><td class="border border-gray-300 px-3 py-1">Vegetative pathogens + most spoilage organisms</td><td class="border border-gray-300 px-3 py-1">30–60 days</td><td class="border border-gray-300 px-3 py-1">Refrigerated (2–6°C)</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">ESL (Extended Shelf Life)</td><td class="border border-gray-300 px-3 py-1">125–130°C × 2–4 sec</td><td class="border border-gray-300 px-3 py-1">Vegetative + most spores</td><td class="border border-gray-300 px-3 py-1">60–90 days</td><td class="border border-gray-300 px-3 py-1">Refrigerated</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">UHT</td><td class="border border-gray-300 px-3 py-1">135–142°C × 4–6 sec</td><td class="border border-gray-300 px-3 py-1">All vegetative cells + spores (commercial sterility: F₀ ≥ 5 min)</td><td class="border border-gray-300 px-3 py-1">6–9 months</td><td class="border border-gray-300 px-3 py-1">Ambient (no refrigeration needed)</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Hot-fill-hold (for acid beverages pH < 4.0)</td><td class="border border-gray-300 px-3 py-1">88–95°C fill → hold 2–3 min → invert container</td><td class="border border-gray-300 px-3 py-1">Vegetative + acid-tolerant spoilage (<em>A. acidoterrestris</em> spores targeted)</td><td class="border border-gray-300 px-3 py-1">6–12 months</td><td class="border border-gray-300 px-3 py-1">Ambient</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p class="mt-3"><strong>Key Thermal Destruction Kinetics at pH < 4.5:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>At low pH, the heat resistance of <em>C. botulinum</em> spores is dramatically reduced (D₁₂₁ drops from 0.21 min at pH 7.0 to 0.04 min at pH 4.0), making commercial sterility achievable at much lower process intensities.</li>
                        <li><em>Alicyclobacillus acidoterrestris</em> — a thermoacidophilic, spore-forming bacterium — is the primary spoilage concern in acidic shelf-stable beverages. D₉₅ = 2–16 min; z = 7.7–12.4°C. While not a pathogen, it produces guaiacol and halophenols that cause medicinal off-flavours (detection threshold: 2 ppb). Hot-fill at ≥93°C with hold ≥2 min typically provides sufficient control.</li>
                        <li>Yeasts (e.g., <em>Saccharomyces</em>, <em>Zygosaccharomyces bailii</em>) and moulds (e.g., <em>Byssochlamys fulva</em>, <em>Neosartorya fischeri</em>) are significant spoilage organisms. <em>B. fulva</em> ascospores: D₉₀ = 1–12 min, D₈₅ = 6–60 min. <em>Z. bailii</em> is notoriously preservative-resistant.</li>
                    </ul>

                    <div class="bg-red-50 p-3 rounded mt-3 border-l-4 border-red-500">
                        <strong>CCP-2 Monitoring:</strong><br>
                        • <strong>What:</strong> Temperature and holding time of final heat treatment<br>
                        • <strong>How:</strong> Calibrated RTD sensors at inlet and outlet of holding tube; magnetic flow meter for flow rate verification; UHT plants: additional pressure transmitters<br>
                        • <strong>When:</strong> Continuous monitoring with data logging<br>
                        • <strong>Who:</strong> Process operator + automated PLC system<br>
                        • <strong>Critical Limits:</strong> Product-dependent (e.g., ≥90°C for ≥15 sec for high-pasteurized; ≥137°C for ≥4 sec for UHT)<br>
                        • <strong>Corrective Action:</strong> Automatic flow diversion; product held as "non-conforming" for disposition; equipment inspection; records review<br>
                        • <strong>Verification:</strong> Annual calibration of all sensors (NABL-accredited lab); weekly check with certified reference thermometer; commercial sterility testing (incubation at 37°C/7 days + 55°C/7 days for UHT products)
                    </div>

                    <p class="mt-3"><strong>Impact on Whey Protein Denaturation at Different Heat Treatments (at pH ~3.5):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>72°C/15s: ~3–5% β-Lg denaturation (minimal impact on clarity at low pH)</li>
                        <li>85°C/30s: ~15–25% β-Lg denaturation</li>
                        <li>95°C/30s: ~50–70% β-Lg denaturation</li>
                        <li>137°C/4s: ~70–90% β-Lg denaturation</li>
                    </ul>
                    <p class="mt-1 text-sm text-gray-600">At pH < 4.0, even extensively denatured β-Lg remains largely soluble due to strong electrostatic repulsion (net positive charge >> 0), preventing visible aggregation. This is why acidification before heat treatment is critical for clear whey beverages.</p>
                </li>

                <li><strong>Cooling</strong>
                    <p>After heat treatment, the product is cooled rapidly through the regeneration section of the PHE (achieving 85–92% heat recovery) to the target temperature:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Pasteurized products: Cool to <strong>4–8°C</strong> before filling</li>
                        <li>UHT/aseptic products: Cool to <strong>20–25°C</strong> (to prevent condensation on pack surface)</li>
                        <li>Hot-fill products: <strong>Not cooled</strong> before filling; filled at ≥85°C</li>
                    </ul>
                    <p class="mt-2">Rapid cooling minimizes thermal damage to heat-sensitive nutrients (especially vitamins B₁, C, and folic acid) and prevents cooked-flavour development from continued Maillard reactions and sulfhydryl oxidation.</p>
                </li>

                <li><strong>Packaging — CCP-3 (for Aseptic Systems Only) (Biological)</strong>
                    <p>Packaging is the final critical barrier between the microbiologically safe product and the external environment.</p>

                    <p class="mt-2"><strong>Option 1 — Aseptic Filling (for UHT products):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Product is filled under sterile conditions into pre-sterilized containers in a Class 100 (ISO 5) clean room environment.</li>
                        <li><strong>Container sterilization:</strong> Tetra Pak cartons — H₂O₂ (35%, 70°C) spray + hot air (280–330°C) drying; PET bottles — peracetic acid (PAA, 0.1–0.2%) or electron beam; HDPE bottles — H₂O₂ vapor.</li>
                        <li><strong>CCP-3 monitoring:</strong> H₂O₂ concentration ≥ 35% (refractometer check every 30 min); contact temperature ≥ 70°C; residual H₂O₂ on carton < 0.5 ppm (verified by peroxide strip test); positive pressure maintained inside aseptic chamber (ΔP > 10 Pa).</li>
                        <li>Shelf life: 6–9 months at ambient temperature.</li>
                    </ul>

                    <p class="mt-2"><strong>Option 2 — Hot-Fill-Hold (for acid products, pH < 4.0):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Product heated to 88–95°C is filled directly into bottles at ≥85°C.</li>
                        <li>Container is immediately capped and inverted for 2–3 minutes to sterilize the closure and headspace.</li>
                        <li>Then cooled to 40°C through a cooling tunnel (water spray or forced air).</li>
                        <li>Container material: PET (heat-set bottles resistant to >85°C), glass, or HDPE.</li>
                        <li>Shelf life: 6–12 months at ambient.</li>
                    </ul>

                    <p class="mt-2"><strong>Option 3 — Cold Fill (for pasteurized, refrigerated products):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Cooled product (4–8°C) is filled into sanitized PET bottles, HDPE pouches, or glass bottles.</li>
                        <li>Filling environment: HEPA-filtered air; filling nozzles sanitized with peracetic acid or steam between batches.</li>
                        <li>Shelf life: 15–30 days at 2–6°C.</li>
                    </ul>

                    <p class="mt-2"><strong>Container Size Options:</strong> 100 mL (single serve), 200 mL (popular in India), 500 mL, 1 litre; pouches (200 mL, 500 mL) for economy segments.</p>
                </li>

                <li><strong>Metal Detection / X-ray Inspection — CCP-4 (Physical)</strong>
                    <p>All packaged products pass through a metal detector (sensitivity: ferrous ≥ 1.5 mm, non-ferrous ≥ 2.0 mm, stainless steel ≥ 2.5 mm) or X-ray inspection system (capable of detecting glass, stone, bone, dense plastics ≥ 2 mm in addition to metals).</p>
                    <div class="bg-red-50 p-3 rounded mt-2 border-l-4 border-red-500">
                        <strong>CCP-4 Monitoring:</strong><br>
                        • <strong>What:</strong> Presence of physical contaminants (metal, glass, stone)<br>
                        • <strong>How:</strong> Metal detector or X-ray system<br>
                        • <strong>When:</strong> Every package, continuously<br>
                        • <strong>Who:</strong> Line operator + automatic reject system<br>
                        • <strong>Critical Limits:</strong> Ferrous ≥1.5mm, Non-ferrous ≥2.0mm, SS ≥2.5mm (detected and rejected)<br>
                        • <strong>Corrective Action:</strong> Rejected packs quarantined for investigation; source identified and rectified; preceding packs since last successful test re-inspected<br>
                        • <strong>Verification:</strong> Test with certified test pieces at start-up, every 1–2 hours during production, and at end of run
                    </div>
                </li>

                <li><strong>Storage and Distribution</strong>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Pasteurized products:</strong> Cold chain must be maintained at 2–6°C throughout storage and distribution. Temperature abuse (>10°C for >4 hours cumulative) may render the product unsafe.</li>
                        <li><strong>UHT/Aseptic products:</strong> Ambient storage (ideally 15–30°C); avoid temperatures >40°C (accelerates Maillard browning and flavour deterioration; rate approximately doubles for every 10°C increase — Q₁₀ ≈ 2.0–2.5).</li>
                        <li><strong>Protect from light:</strong> Use opaque or UV-barrier packaging. Riboflavin (λ_max absorption = 445 nm, 375 nm) acts as photosensitizer, generating singlet oxygen that degrades vitamins (especially B₂ itself, C, A) and causes light-struck flavour (methional and dimethyl disulfide from methionine oxidation).</li>
                        <li><strong>FIFO (First In, First Out) principle:</strong> Essential for stock rotation.</li>
                    </ul>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Complete HACCP Plan Summary for Whey Beverages</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-xs">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-2 py-1">CCP</th>
                            <th class="border border-gray-300 px-2 py-1">Step</th>
                            <th class="border border-gray-300 px-2 py-1">Hazard</th>
                            <th class="border border-gray-300 px-2 py-1">Critical Limit</th>
                            <th class="border border-gray-300 px-2 py-1">Monitoring</th>
                            <th class="border border-gray-300 px-2 py-1">Corrective Action</th>
                            <th class="border border-gray-300 px-2 py-1">Verification</th>
                            <th class="border border-gray-300 px-2 py-1">Records</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-300 px-2 py-1 font-bold">CCP-1 (B)</td>
                            <td class="border border-gray-300 px-2 py-1">Initial Pasteurization</td>
                            <td class="border border-gray-300 px-2 py-1">Survival of vegetative pathogens (<em>Salmonella, Listeria, E. coli</em>)</td>
                            <td class="border border-gray-300 px-2 py-1">≥72°C for ≥15 sec</td>
                            <td class="border border-gray-300 px-2 py-1">Continuous temp & flow monitoring; chart recorder</td>
                            <td class="border border-gray-300 px-2 py-1">Divert & re-pasteurize; hold & evaluate</td>
                            <td class="border border-gray-300 px-2 py-1">Phosphatase test (negative); sensor calibration quarterly</td>
                            <td class="border border-gray-300 px-2 py-1">Pasteurization log; FDV activation log; calibration records</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-2 py-1 font-bold">CCP-2 (B)</td>
                            <td class="border border-gray-300 px-2 py-1">Final Heat Treatment</td>
                            <td class="border border-gray-300 px-2 py-1">Survival of pathogens & spoilage organisms; spore survival (UHT)</td>
                            <td class="border border-gray-300 px-2 py-1">Product-specific (e.g., ≥90°C/15s or ≥137°C/4s)</td>
                            <td class="border border-gray-300 px-2 py-1">Continuous temp/time; flow rate; pressure (UHT)</td>
                            <td class="border border-gray-300 px-2 py-1">Divert; quarantine; investigate; re-process if feasible</td>
                            <td class="border border-gray-300 px-2 py-1">Incubation test (37°C/7d + 55°C/7d for UHT); micro sampling; calibration</td>
                            <td class="border border-gray-300 px-2 py-1">UHT/Pasteurization charts; incubation results; deviation reports</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-2 py-1 font-bold">CCP-3 (B)</td>
                            <td class="border border-gray-300 px-2 py-1">Aseptic Filling (UHT only)</td>
                            <td class="border border-gray-300 px-2 py-1">Post-process contamination from non-sterile container/environment</td>
                            <td class="border border-gray-300 px-2 py-1">H₂O₂ conc. ≥35%; contact temp ≥70°C; residual H₂O₂ <0.5 ppm; chamber positive pressure</td>
                            <td class="border border-gray-300 px-2 py-1">H₂O₂ concentration (refractometer); temp sensor; residual test strips; ΔP gauge</td>
                            <td class="border border-gray-300 px-2 py-1">Stop filling; quarantine affected packs; restore sterility; re-start after verification</td>
                            <td class="border border-gray-300 px-2 py-1">Package integrity testing (dye/pressure test); commercial sterility incubation</td>
                            <td class="border border-gray-300 px-2 py-1">Filling logs; H₂O₂ test records; sterility test results</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-2 py-1 font-bold">CCP-4 (P)</td>
                            <td class="border border-gray-300 px-2 py-1">Metal Detection / X-ray</td>
                            <td class="border border-gray-300 px-2 py-1">Physical contamination (metal, glass fragments)</td>
                            <td class="border border-gray-300 px-2 py-1">Fe ≥1.5mm, Non-Fe ≥2.0mm, SS ≥2.5mm</td>
                            <td class="border border-gray-300 px-2 py-1">Every pack; test pieces every 1–2 hours</td>
                            <td class="border border-gray-300 px-2 py-1">Reject; quarantine; investigate source; re-test since last passed check</td>
                            <td class="border border-gray-300 px-2 py-1">Test piece verification log; reject log review; annual detector calibration</td>
                            <td class="border border-gray-300 px-2 py-1">Metal detection test log; reject records; maintenance records</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Operational Prerequisite Programs (oPRPs) Summary</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-3 py-1 text-left">oPRP</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Step</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Hazard Addressed</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Control Measure</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Monitoring</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-3 py-1">oPRP-1</td><td class="border border-gray-300 px-3 py-1">Clarification & Fat Separation</td><td class="border border-gray-300 px-3 py-1">Chemical (lipid oxidation products)</td><td class="border border-gray-300 px-3 py-1">Centrifugal separation to <0.04% fat</td><td class="border border-gray-300 px-3 py-1">Fat content by Gerber/IR every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">oPRP-2</td><td class="border border-gray-300 px-3 py-1">pH Adjustment</td><td class="border border-gray-300 px-3 py-1">Biological (<em>C. botulinum</em> at pH >4.6)</td><td class="border border-gray-300 px-3 py-1">Acidification to pH <4.6 (target <4.0)</td><td class="border border-gray-300 px-3 py-1">pH meter reading every batch, 2 independent measurements</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">oPRP-3</td><td class="border border-gray-300 px-3 py-1">Deproteinization (clear drinks)</td><td class="border border-gray-300 px-3 py-1">Quality (haze, sedimentation)</td><td class="border border-gray-300 px-3 py-1">Heat-acid treatment + centrifugation</td><td class="border border-gray-300 px-3 py-1">Turbidity (NTU < 5 for clear), visual check</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">oPRP-4</td><td class="border border-gray-300 px-3 py-1">Ingredient Receiving</td><td class="border border-gray-300 px-3 py-1">Chemical (allergens, contaminants), Biological (spores in sugar)</td><td class="border border-gray-300 px-3 py-1">Supplier approval; COA verification; incoming inspection</td><td class="border border-gray-300 px-3 py-1">COA review per batch; periodic third-party testing</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">oPRP-5</td><td class="border border-gray-300 px-3 py-1">CIP (Clean-in-Place)</td><td class="border border-gray-300 px-3 py-1">Biological (biofilm, cross-contamination)</td><td class="border border-gray-300 px-3 py-1">Validated CIP cycle (alkali → rinse → acid → rinse → sanitize)</td><td class="border border-gray-300 px-3 py-1">Temperature, concentration, flow rate, contact time per CIP cycle; ATP swab verification</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Quality Parameters and Testing Schedule for Finished Product</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-3 py-1 text-left">Parameter</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Specification</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Test Method</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-3 py-1">pH</td><td class="border border-gray-300 px-3 py-1">3.0–4.2 (product-specific)</td><td class="border border-gray-300 px-3 py-1">Digital pH meter (IS 14434)</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">TSS (°Brix)</td><td class="border border-gray-300 px-3 py-1">12–20°Brix (product-specific)</td><td class="border border-gray-300 px-3 py-1">Digital refractometer</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Titratable Acidity</td><td class="border border-gray-300 px-3 py-1">0.3–0.8% (as citric acid)</td><td class="border border-gray-300 px-3 py-1">Titration with 0.1N NaOH</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Protein Content</td><td class="border border-gray-300 px-3 py-1">0.3–0.8% (standard); up to 5–8% (protein-enriched)</td><td class="border border-gray-300 px-3 py-1">Kjeldahl (N × 6.38) or Dumas method</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Total Solids</td><td class="border border-gray-300 px-3 py-1">12–22%</td><td class="border border-gray-300 px-3 py-1">Oven drying (105°C to constant weight)</td><td class="border border-gray-300 px-3 py-1">Daily composite</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Fat</td><td class="border border-gray-300 px-3 py-1"><0.1% (clear); <0.5% (cloudy)</td><td class="border border-gray-300 px-3 py-1">Gerber method / Mojonnier</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Turbidity (clear type only)</td><td class="border border-gray-300 px-3 py-1"><10 NTU</td><td class="border border-gray-300 px-3 py-1">Nephelometer</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Viscosity</td><td class="border border-gray-300 px-3 py-1">5–50 cP at 25°C (product-specific)</td><td class="border border-gray-300 px-3 py-1">Brookfield viscometer (60 rpm, spindle #1)</td><td class="border border-gray-300 px-3 py-1">Daily composite</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Colour (L*, a*, b*)</td><td class="border border-gray-300 px-3 py-1">Product-specific (ΔE < 3.0 from standard)</td><td class="border border-gray-300 px-3 py-1">Hunter Lab colorimeter</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Sediment / Sedimentation Index</td><td class="border border-gray-300 px-3 py-1"><5% after 24h at 4°C</td><td class="border border-gray-300 px-3 py-1">Graduated cylinder (100 mL, 24h stand)</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Sensory Evaluation</td><td class="border border-gray-300 px-3 py-1">Score ≥7/9 on 9-point hedonic scale</td><td class="border border-gray-300 px-3 py-1">Trained panel (minimum 6 panelists)</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">TPC</td><td class="border border-gray-300 px-3 py-1"><100 CFU/mL (pasteurized); sterile (UHT)</td><td class="border border-gray-300 px-3 py-1">Pour plate (PCA, 37°C, 48h)</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Coliforms</td><td class="border border-gray-300 px-3 py-1"><10 CFU/mL (pasteurized); absent (UHT)</td><td class="border border-gray-300 px-3 py-1">VRBA / LST broth</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Yeast & Mould</td><td class="border border-gray-300 px-3 py-1"><10 CFU/mL</td><td class="border border-gray-300 px-3 py-1">DRBC agar, 25°C, 5 days</td><td class="border border-gray-300 px-3 py-1">Every batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Commercial Sterility (UHT)</td><td class="border border-gray-300 px-3 py-1">No growth at 37°C/7d + 55°C/7d; no pack swelling</td><td class="border border-gray-300 px-3 py-1">Incubation per IS 2795</td><td class="border border-gray-300 px-3 py-1">5 packs per batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Preservative Residue</td><td class="border border-gray-300 px-3 py-1">Benzoate <200 ppm; Sorbate <300 ppm</td><td class="border border-gray-300 px-3 py-1">HPLC / UV spectrophotometry</td><td class="border border-gray-300 px-3 py-1">Weekly</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Heavy Metals (Pb, As)</td><td class="border border-gray-300 px-3 py-1">Pb <0.5 ppm; As <0.1 ppm</td><td class="border border-gray-300 px-3 py-1">AAS / ICP-MS</td><td class="border border-gray-300 px-3 py-1">Monthly / per supplier lot</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Aflatoxin M₁</td><td class="border border-gray-300 px-3 py-1"><0.5 μg/kg</td><td class="border border-gray-300 px-3 py-1">ELISA / HPLC</td><td class="border border-gray-300 px-3 py-1">Monthly</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Common Defects in Whey Beverages: Causes and Remedies</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-3 py-1 text-left">Defect</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Scientific Cause</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Remedy</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Protein sedimentation / haze</td><td class="border border-gray-300 px-3 py-1">Incomplete deproteinization; pH too close to pI (4.2–5.2); insufficient stabilizer; inadequate homogenization; heat-induced β-Lg aggregation at neutral pH</td><td class="border border-gray-300 px-3 py-1">Lower pH to <3.8; increase pectin to 0.3–0.5%; ensure adequate homogenization (>150 bar); complete deproteinization for clear drinks</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Browning / darkening during storage</td><td class="border border-gray-300 px-3 py-1">Non-enzymatic Maillard reaction between reducing sugars (lactose) and free amino groups (lysine residues in whey proteins); accelerated at high temperature, high pH, low water activity</td><td class="border border-gray-300 px-3 py-1">Maintain storage temperature <25°C; reduce lactose (UF permeate); use non-reducing sweeteners (sucralose); lower pH; minimize dissolved O₂</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Oxidized / cardboard flavour</td><td class="border border-gray-300 px-3 py-1">Lipid autoxidation of residual fat; photosensitized oxidation by riboflavin (Type II mechanism: riboflavin* + ³O₂ → riboflavin + ¹O₂); metal-catalyzed (Cu²⁺, Fe²⁺)</td><td class="border border-gray-300 px-3 py-1">Reduce fat to <0.04%; use opaque packaging; add ascorbic acid (O₂ scavenger); de-aerate; chelate metals with citric acid/EDTA</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Cooked / sulfurous flavour</td><td class="border border-gray-300 px-3 py-1">Exposure of free sulfhydryl groups from β-Lg denaturation (Cys-121); H₂S and dimethyl sulfide formation at >75°C</td><td class="border border-gray-300 px-3 py-1">Minimize thermal exposure (use HTST not LTLT); acidify before heating (reduces denaturation at same temperature); use direct UHT (steam injection) over indirect</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Phase separation (serum separation)</td><td class="border border-gray-300 px-3 py-1">Depletion flocculation of proteins by non-adsorbing polysaccharides at high concentration; insufficient stabilizer; excessive storage time</td><td class="border border-gray-300 px-3 py-1">Optimize stabilizer concentration and type; ensure proper homogenization; add MCC for suspension; reduce particle size</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Astringent / chalky mouthfeel</td><td class="border border-gray-300 px-3 py-1">Whey protein interaction with salivary proteins (mucin precipitation at low pH); high mineral (Ca²⁺) content; excessive acidity</td><td class="border border-gray-300 px-3 py-1">Add sweetener to mask astringency; use buffering salts (sodium citrate); optimize pH; reduce protein if not needed; add fat or pectin for lubrication</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Gas production / pack swelling</td><td class="border border-gray-300 px-3 py-1">Post-pasteurization contamination by yeasts (<em>Saccharomyces, Candida</em>) or heterofermentative LAB; fermentation of residual lactose producing CO₂ and ethanol</td><td class="border border-gray-300 px-3 py-1">Improve sanitation of filler and closures; verify pasteurization adequacy (CCP-2); add potassium sorbate (anti-yeast); ensure filling hygiene</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Medicinal / smoky off-flavour</td><td class="border border-gray-300 px-3 py-1"><em>Alicyclobacillus acidoterrestris</em> spoilage — produces guaiacol (2-methoxyphenol) and 2,6-dibromophenol; thermoacidophilic spore-former survives hot-fill</td><td class="border border-gray-300 px-3 py-1">Screen fruit pulp/sugar suppliers for <em>Alicyclobacillus</em> contamination; increase hot-fill temperature to ≥93°C with ≥3 min hold; consider nisin addition; test raw materials (BAM method)</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Excessive sweetness / unbalanced taste</td><td class="border border-gray-300 px-3 py-1">High residual lactose (4.5–5.0%) plus added sugar; insufficient acidity to balance</td><td class="border border-gray-300 px-3 py-1">Hydrolyze lactose with β-galactosidase (increases perceived sweetness by 40% — glucose + galactose are sweeter than lactose); reduce added sugar accordingly; balance sugar:acid ratio (optimal range: 12–18 TSS : 0.3–0.6% acidity)</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shelf Life Determinants and Kinetic Considerations</h3>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-3">
                <li><strong>Microbial Shelf Life:</strong> Determined by the most heat-resistant surviving organism. For pasteurized whey beverages at pH 3.5–4.0, psychrotrophic spoilage organisms (e.g., <em>Pseudomonas</em>) and yeasts are the primary limiters. Growth follows the Baranyi model: λ (lag phase) = 2–7 days at 5°C for yeasts; μ_max (maximum growth rate) = 0.02–0.06 h⁻¹ at 5°C. End of shelf life typically defined as total count reaching 10⁵–10⁶ CFU/mL or sensory rejection.</li>
                <li><strong>Chemical Shelf Life:</strong> Maillard browning follows zero-order kinetics in concentrated systems and first-order in dilute systems. The rate constant k_browning at 25°C ≈ 0.001–0.005 absorbance units (at 420 nm) per day in whey beverages. Activation energy (Eₐ) for Maillard browning in whey systems: 80–120 kJ/mol.</li>
                <li><strong>Physical Shelf Life:</strong> Sedimentation follows Stokes' Law (as described above). Creaming of residual fat globules: v_cream = (2r²Δρg)/(9η) — rate decreases with homogenization and increased viscosity from stabilizers.</li>
                <li><strong>Nutritional Shelf Life:</strong> Vitamin C (ascorbic acid) degradation follows first-order kinetics: C(t) = C₀ × e^(−kt). At 25°C in an aerated whey beverage at pH 3.5, t₁/₂ ≈ 30–60 days. In de-aerated, light-protected packaging, t₁/₂ extends to 90–180 days.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Accelerated Shelf Life Testing (ASLT) Protocol</h3>
            <p>To predict shelf life without waiting the full duration:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Store samples at 3 elevated temperatures (e.g., 25°C, 35°C, 45°C) in addition to the normal storage temperature (5°C for pasteurized, 25°C for UHT).</li>
                <li>Monitor quality parameters (pH, acidity, colour-ΔE, microbial count, sensory score, vitamin C retention) at regular intervals.</li>
                <li>Apply the Arrhenius equation: k = A × e^(−Eₐ/RT) to extrapolate degradation rates to the target storage temperature.</li>
                <li>Q₁₀ for most quality parameters in whey beverages: 1.8–3.0 (meaning shelf life roughly halves to thirds for every 10°C increase in storage temperature).</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Nutritional Profile of a Typical Whey Beverage (per 200 mL Serving)</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-3 py-1 text-left">Nutrient</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Standard Whey Drink</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Protein-Enriched Variant</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">% RDA (Standard)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-3 py-1">Energy (kcal)</td><td class="border border-gray-300 px-3 py-1">80–120</td><td class="border border-gray-300 px-3 py-1">100–150</td><td class="border border-gray-300 px-3 py-1">4–6%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Total Carbohydrates (g)</td><td class="border border-gray-300 px-3 py-1">18–28</td><td class="border border-gray-300 px-3 py-1">15–22</td><td class="border border-gray-300 px-3 py-1">—</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">  of which Sugars (g)</td><td class="border border-gray-300 px-3 py-1">16–26</td><td class="border border-gray-300 px-3 py-1">12–18</td><td class="border border-gray-300 px-3 py-1">—</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Protein (g)</td><td class="border border-gray-300 px-3 py-1">1.0–1.8</td><td class="border border-gray-300 px-3 py-1">6–16</td><td class="border border-gray-300 px-3 py-1">2–3% / 10–30%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Total Fat (g)</td><td class="border border-gray-300 px-3 py-1"><0.2</td><td class="border border-gray-300 px-3 py-1"><0.5</td><td class="border border-gray-300 px-3 py-1"><1%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Calcium (mg)</td><td class="border border-gray-300 px-3 py-1">80–200</td><td class="border border-gray-300 px-3 py-1">100–250</td><td class="border border-gray-300 px-3 py-1">8–20%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Potassium (mg)</td><td class="border border-gray-300 px-3 py-1">200–350</td><td class="border border-gray-300 px-3 py-1">250–400</td><td class="border border-gray-300 px-3 py-1">6–10%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Phosphorus (mg)</td><td class="border border-gray-300 px-3 py-1">80–150</td><td class="border border-gray-300 px-3 py-1">100–200</td><td class="border border-gray-300 px-3 py-1">8–15%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Vitamin B₂ (mg)</td><td class="border border-gray-300 px-3 py-1">0.2–0.4</td><td class="border border-gray-300 px-3 py-1">0.3–0.5</td><td class="border border-gray-300 px-3 py-1">15–30%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Vitamin C (mg) (if fortified)</td><td class="border border-gray-300 px-3 py-1">20–60</td><td class="border border-gray-300 px-3 py-1">30–80</td><td class="border border-gray-300 px-3 py-1">25–100%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Sodium (mg)</td><td class="border border-gray-300 px-3 py-1">80–120</td><td class="border border-gray-300 px-3 py-1">90–140</td><td class="border border-gray-300 px-3 py-1">4–6%</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Innovations and Emerging Technologies</h3>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-3">
                <li><strong>High-Pressure Processing (HPP):</strong> Non-thermal pasteurization at 400–600 MPa for 1–5 minutes; inactivates vegetative pathogens while preserving heat-sensitive vitamins, colour, and fresh flavour. HPP at 600 MPa/3 min achieves >5 log reduction of <em>E. coli</em>, <em>Salmonella</em>, and <em>Listeria</em> in whey-based beverages. β-Lg undergoes conformational changes under HPP (unfolding of tertiary structure at >200 MPa) but does not form visible aggregates at pH <4.0, making HPP ideal for acidic whey drinks.</li>
                <li><strong>Pulsed Electric Field (PEF):</strong> Electric field pulses (20–40 kV/cm, 1–100 μs pulse width, total treatment time <1 ms) cause electroporation of microbial cell membranes. Achieves 3–6 log reduction with minimal thermal input (<40°C). Preserves native whey protein structure >95% and retains >98% of vitamin C.</li>
                <li><strong>UV-C Processing:</strong> Continuous-flow UV treatment at 254 nm (dose: 20–50 mJ/cm²) in thin-film reactors (Dean flow or coiled tube design). Effective against vegetative bacteria and yeasts. Challenge: turbid beverages have low UV transmittance — effective primarily for clear/deproteinized whey drinks (>70% transmittance at 254 nm).</li>
                <li><strong>Enzymatic Lactose Hydrolysis:</strong> Treatment with β-galactosidase (from <em>Kluyveromyces lactis</em> or <em>Aspergillus oryzae</em>; 2000–5000 NLU/L at 37°C for 2–4 hours or 4°C for 12–18 hours) hydrolyzes lactose to glucose + galactose. Benefits: (a) suitable for lactose-intolerant consumers (~70% of Indian population has some degree of lactase deficiency); (b) increases sweetness perception by ~40% (reducing need for added sugar); (c) improves freezing point depression for frozen whey beverages; (d) reduces Maillard browning substrate (glucose browns faster than lactose, but net effect depends on formulation).</li>
                <li><strong>Microencapsulated Probiotics:</strong> Encapsulation of <em>Lactobacillus rhamnosus</em> GG or <em>Bifidobacterium longum</em> in alginate-chitosan microcapsules (diameter: 100–500 μm) protects cultures from the low pH of whey beverages (pH 3.0–4.0), maintaining viability at >10⁶ CFU/mL for 6–8 weeks at 4°C, compared to <10⁴ CFU/mL for free cells after 2 weeks.</li>
                <li><strong>Membrane Processing Integration:</strong> Nanofiltration (NF, MWCO 150–300 Da) can selectively concentrate lactose and minerals while partially demineralizing whey (40–60% mineral removal), improving taste by reducing excessive saltiness and allowing customized mineral profiles for sports drink applications.</li>
                <li><strong>Supercritical CO₂ Processing:</strong> SC-CO₂ (pressure: 100–250 bar; temperature: 35–60°C; time: 10–60 min) simultaneously pasteurizes and carbonates whey beverages, creating a preservative-free, naturally sparkling product with 3–5 log reduction in microbial count.</li>
                <li><strong>Whey Protein Nanofibrils:</strong> Heating β-Lg at pH 2.0, 80°C for 5–10 hours produces amyloid-like protein nanofibrils (length: 1–10 μm, diameter: 2–4 nm) with exceptional thickening, gelling, and foam-stabilizing properties. These can be used as natural functional ingredients in whey beverages to replace synthetic stabilizers.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Environmental and Economic Considerations</h3>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>BOD/COD Reduction:</strong> Converting liquid whey (BOD ~35,000 mg/L) into a beverage reduces effluent load by 100%. One tonne of liquid whey, if discharged into a water body, is equivalent to the sewage from 450 people/day.</li>
                <li><strong>Value Addition:</strong> Liquid whey as animal feed: ₹1–2/litre. As a packaged whey beverage: ₹15–30/200 mL (retail). Value multiplication factor: 15–60×.</li>
                <li><strong>Water Footprint:</strong> Since whey already contains ~93% water, whey beverages have significantly lower water footprint compared to beverages made from water + raw materials. Estimated water footprint: 0.2–0.5 L water/L beverage (vs. 1.5–3.0 L/L for conventional soft drinks).</li>
                <li><strong>Carbon Footprint:</strong> Whey beverage production from existing cheese/paneer operations adds only 0.05–0.15 kg CO₂e per litre (marginal processing energy). Preventing whey from entering anaerobic wastewater treatment avoids methane (CH₄) emissions (GWP = 28× CO₂).</li>
                <li><strong>Circular Economy:</strong> The protein separated during deproteinization can be dried into WPC; the separated fat can be used in recombined dairy products; excess minerals can be used in animal feed supplementation — achieving near-zero waste.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Clean-in-Place (CIP) Protocol for Whey Beverage Processing Equipment</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-3 py-1 text-left">Step</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Solution</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Concentration</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Temperature (°C)</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Duration (min)</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-3 py-1">1</td><td class="border border-gray-300 px-3 py-1">Pre-rinse (water)</td><td class="border border-gray-300 px-3 py-1">—</td><td class="border border-gray-300 px-3 py-1">40–50</td><td class="border border-gray-300 px-3 py-1">5–10</td><td class="border border-gray-300 px-3 py-1">Remove gross soil (sugars, proteins)</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">2</td><td class="border border-gray-300 px-3 py-1">Caustic wash (NaOH)</td><td class="border border-gray-300 px-3 py-1">1.0–2.0%</td><td class="border border-gray-300 px-3 py-1">70–85</td><td class="border border-gray-300 px-3 py-1">15–30</td><td class="border border-gray-300 px-3 py-1">Saponify fats; solubilize denatured proteins; remove biofilm matrix</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">3</td><td class="border border-gray-300 px-3 py-1">Intermediate rinse (water)</td><td class="border border-gray-300 px-3 py-1">—</td><td class="border border-gray-300 px-3 py-1">40–50</td><td class="border border-gray-300 px-3 py-1">5–10</td><td class="border border-gray-300 px-3 py-1">Remove alkali residues</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">4</td><td class="border border-gray-300 px-3 py-1">Acid wash (HNO₃ or phosphoric acid)</td><td class="border border-gray-300 px-3 py-1">0.5–1.5%</td><td class="border border-gray-300 px-3 py-1">55–70</td><td class="border border-gray-300 px-3 py-1">10–20</td><td class="border border-gray-300 px-3 py-1">Dissolve mineral deposits (calcium phosphate, milkstone); prevent scale buildup</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">5</td><td class="border border-gray-300 px-3 py-1">Final rinse (water)</td><td class="border border-gray-300 px-3 py-1">—</td><td class="border border-gray-300 px-3 py-1">Ambient</td><td class="border border-gray-300 px-3 py-1">5–10</td><td class="border border-gray-300 px-3 py-1">Remove acid residues (conductivity <50 μS/cm)</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">6</td><td class="border border-gray-300 px-3 py-1">Sanitize (Peracetic acid or hot water)</td><td class="border border-gray-300 px-3 py-1">PAA: 100–200 ppm; or Hot water: 90–95°C</td><td class="border border-gray-300 px-3 py-1">Ambient (PAA) / 90–95 (hot water)</td><td class="border border-gray-300 px-3 py-1">10–15</td><td class="border border-gray-300 px-3 py-1">Kill residual microorganisms; no rinse needed for PAA at ≤200 ppm (self-decomposing)</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2"><strong>CIP Verification:</strong> ATP bioluminescence swabs on equipment surfaces after CIP — target: < 150 RLU (Relative Light Units); visual inspection; final rinse water pH (6.5–7.5) and conductivity (<50 μS/cm); microbiological swabs (TPC <1 CFU/cm²) weekly.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Summary of Key Scientific Principles in Whey Beverage Manufacturing</h3>
            <div class="bg-gray-50 p-4 rounded mt-3 space-y-3">
                <p><strong>1. Protein Chemistry:</strong> The behaviour of β-Lg (pI = 5.2) at different pH values governs beverage clarity. Below pH 4.0, electrostatic repulsion prevents aggregation even during severe heat treatment. This is the single most important principle for clear whey beverages.</p>
                <p><strong>2. Hurdle Technology:</strong> Whey beverages employ multiple preservation hurdles: low pH (<4.5, inhibiting <em>C. botulinum</em>), thermal processing (destroying vegetative cells and spores), chemical preservatives (sorbate/benzoate inhibiting yeasts/moulds), low water activity (from added sugars, a_w 0.94–0.98), and refrigeration (for pasteurized products). No single hurdle is sufficient; the synergistic combination ensures safety and stability.</p>
                <p><strong>3. Colloidal Stability:</strong> Whey beverages are complex colloidal systems. Stability depends on DLVO theory (balance of van der Waals attractive forces and electrical double-layer repulsive forces), steric stabilization by adsorbed polymers (pectin, CMC), and gravitational effects (Stokes' Law). Formulation and processing must optimize all three.</p>
                <p><strong>4. Thermal Processing Optimization:</strong> The z-value concept allows optimization: for β-Lg denaturation z ≈ 6.5°C (quality factor), while for most pathogens z ≈ 5–10°C (safety factor). Since z-values are similar, low-pH formulation (which dramatically reduces protein denaturation at a given temperature) is the key strategy to maximize quality while ensuring safety.</p>
                <p><strong>5. Maillard Browning:</strong> The dominant chemical deterioration pathway in whey systems, governed by temperature (Arrhenius kinetics, Eₐ = 80–120 kJ/mol), pH (accelerated at higher pH), water activity (maximum at a_w 0.6–0.8), and reactant concentrations. Low pH and low storage temperature are the primary control measures.</p>
            </div>
        `
    }
}

    
