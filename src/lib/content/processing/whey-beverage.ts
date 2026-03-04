
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
        title: "Whey-based Beverage Processing (Chhaach/Mattha Aadharit Pey Padaarth)",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Whey-based Beverages ka Parichay (Introduction)</h3>
            <p>Whey yaani mattha/chhaach woh paani jaisa liquid hota hai jo dudh se paneer, chhana ya cheese banate waqt curd (casein coagulum) se alag hota hai. Duniya bhar mein har saal lagbhag 180–190 million tonnes liquid whey produce hota hai, jismein se lagbhag 50% abhi bhi barbaad kar diya jaata hai ya sahi se use nahi hota. Yeh ek bahut badi environmental problem hai kyunki iska Biological Oxygen Demand (BOD) 30,000–50,000 mg/L aur Chemical Oxygen Demand (COD) 60,000–80,000 mg/L hota hai. Isliye whey ko value-added beverages mein convert karna environment aur economy dono ke liye bahut zaroori hai.</p>

            <p class="mt-3">Whey mein dudh ke total nutrients ka lagbhag 55% hissa retain hota hai. Iske dry matter content (6.0–7.0% w/v) mein lactose (4.5–5.0%), soluble whey proteins (0.6–1.0%), minerals (0.5–0.7%), lactic acid (acid whey mein 0.8% tak), aur thoda sa milk fat (0.05–0.5%) hota hai. Iska protein fraction exceptionally high quality ka hota hai — Protein Digestibility Corrected Amino Acid Score (PDCAAS) 1.0 hai — jo ki sabse highest possible value hai — aur Biological Value (BV) 104 hai, jo ande (egg BV 100) aur casein (BV 77) se bhi zyada hai.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Whey ke Prakar (Types of Whey)</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2 text-left">Parameter</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Sweet Whey (Rennet Whey / Meetha Mattha)</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Acid Whey (Paneer/Chhana Whey / Khatta Mattha)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-4 py-2">Source (Srot)</td><td class="border border-gray-300 px-4 py-2">Cheese banane se (enzymatic coagulation yaani rennet enzyme se jamana)</td><td class="border border-gray-300 px-4 py-2">Paneer, Chhana, Strained yoghurt, Cottage cheese banane se (acid/heat coagulation yaani acid aur garmi se jamana)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">pH</td><td class="border border-gray-300 px-4 py-2">6.0–6.6</td><td class="border border-gray-300 px-4 py-2">4.0–5.0</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Titratable Acidity (% lactic acid)</td><td class="border border-gray-300 px-4 py-2">0.10–0.15%</td><td class="border border-gray-300 px-4 py-2">0.40–0.80%</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Total Solids (%)</td><td class="border border-gray-300 px-4 py-2">6.3–7.0</td><td class="border border-gray-300 px-4 py-2">5.5–6.5</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Lactose (%)</td><td class="border border-gray-300 px-4 py-2">4.5–5.2</td><td class="border border-gray-300 px-4 py-2">3.8–4.5</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Protein (%)</td><td class="border border-gray-300 px-4 py-2">0.6–1.0</td><td class="border border-gray-300 px-4 py-2">0.5–0.8</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Fat (%)</td><td class="border border-gray-300 px-4 py-2">0.2–0.5</td><td class="border border-gray-300 px-4 py-2">0.05–0.3</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Ash / Minerals (%)</td><td class="border border-gray-300 px-4 py-2">0.5–0.7</td><td class="border border-gray-300 px-4 py-2">0.6–0.8</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Calcium (mg/L)</td><td class="border border-gray-300 px-4 py-2">400–600</td><td class="border border-gray-300 px-4 py-2">800–1200 (zyada hota hai kyunki acid casein micelle se calcium ghula deta hai)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Caseinomacropeptide (CMP)</td><td class="border border-gray-300 px-4 py-2">Maujood hota hai (total whey protein ka 15–20%)</td><td class="border border-gray-300 px-4 py-2">Nahi hota (Absent)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Swaad (Flavour Profile)</td><td class="border border-gray-300 px-4 py-2">Halka, thoda meetha, neutral</td><td class="border border-gray-300 px-4 py-2">Saaph khatta, teekha, tangy</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Beverage ke liye Suitability</td><td class="border border-gray-300 px-4 py-2">Neutral/meethe beverages ke liye best; formulation aasaan hoti hai</td><td class="border border-gray-300 px-4 py-2">Tangy/citrus beverages ke liye achha; zyada sugar/flavour masking chahiye</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3 text-sm text-gray-600"><strong>Note:</strong> India mein acid whey (paneer aur chhana production se) sabse zyada milta hai. India mein har saal lagbhag 5 million tonnes paneer banta hai, jisse lagbhag 25–30 million tonnes acid whey nikalta hai, jismein se bahut bada hissa abhi bhi naaliyon mein baha diya jaata hai.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Pramukh Whey Protein Fractions aur Unka Functional Mahatva</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2 text-left">Protein</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Total Whey Protein ka %</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Molecular Weight (kDa)</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Isoelectric Point (pI)</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Denaturation Temp. (°C)</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Mukhya Bioactivities aur Functions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">β-Lactoglobulin (β-Lg)</td><td class="border border-gray-300 px-4 py-2">50–55%</td><td class="border border-gray-300 px-4 py-2">18.3</td><td class="border border-gray-300 px-4 py-2">5.2</td><td class="border border-gray-300 px-4 py-2">~78°C</td><td class="border border-gray-300 px-4 py-2">Retinol aur fatty acid binding, gelation, foaming; sabse zyada heat-sensitive major whey protein; garmi se hone wali aggregation aur turbidity ka main kaaran</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">α-Lactalbumin (α-La)</td><td class="border border-gray-300 px-4 py-2">20–25%</td><td class="border border-gray-300 px-4 py-2">14.2</td><td class="border border-gray-300 px-4 py-2">4.2–4.5</td><td class="border border-gray-300 px-4 py-2">~62°C (lekin reversible hota hai)</td><td class="border border-gray-300 px-4 py-2">Lactose synthase regulatory subunit; tryptophan se bharpoor (4 residues); neend aur anxiety mein faydemand; anti-tumour (HAMLET complex); achha Ca²⁺ binding</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Bovine Serum Albumin (BSA)</td><td class="border border-gray-300 px-4 py-2">5–7%</td><td class="border border-gray-300 px-4 py-2">66.4</td><td class="border border-gray-300 px-4 py-2">4.7–4.9</td><td class="border border-gray-300 px-4 py-2">~64°C</td><td class="border border-gray-300 px-4 py-2">Fatty acid transport, antioxidant (free thiol group ki wajah se), emulsification</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Immunoglobulins (IgG, IgA, IgM)</td><td class="border border-gray-300 px-4 py-2">10–15%</td><td class="border border-gray-300 px-4 py-2">150–1000</td><td class="border border-gray-300 px-4 py-2">5.5–8.3</td><td class="border border-gray-300 px-4 py-2">~72°C</td><td class="border border-gray-300 px-4 py-2">Passive immunity deta hai, antimicrobial, immune system ko modulate karta hai</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Lactoferrin (LF)</td><td class="border border-gray-300 px-4 py-2">1–3%</td><td class="border border-gray-300 px-4 py-2">80</td><td class="border border-gray-300 px-4 py-2">8.0–8.5</td><td class="border border-gray-300 px-4 py-2">~65°C (apo-form); ~90°C (holo-form)</td><td class="border border-gray-300 px-4 py-2">Iron bind karta hai aur transport karta hai, bacteriostatic (bacteria se iron chheen leta hai), anti-viral, anti-inflammatory, prebiotic activity bhi hai</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Lactoperoxidase (LP)</td><td class="border border-gray-300 px-4 py-2">0.5–1%</td><td class="border border-gray-300 px-4 py-2">78</td><td class="border border-gray-300 px-4 py-2">9.6</td><td class="border border-gray-300 px-4 py-2">~78°C</td><td class="border border-gray-300 px-4 py-2">Antimicrobial enzyme (LP system SCN⁻ aur H₂O₂ ke saath kaam karta hai); natural biopreservative ki tarah kaam karta hai</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Glycomacropeptide (GMP/CMP)</td><td class="border border-gray-300 px-4 py-2">10–20% (sirf sweet whey mein)</td><td class="border border-gray-300 px-4 py-2">6.7–8.0</td><td class="border border-gray-300 px-4 py-2"><3.8</td><td class="border border-gray-300 px-4 py-2">Heat stable hota hai</td><td class="border border-gray-300 px-4 py-2">Pet bharaa hone ka hormone (CCK) release karata hai, anti-cariogenic (daanton ko bachata hai), prebiotic (bifidogenic), PKU patients ke liye suitable (Phe-free hai)</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3"><strong>Processing ke liye Sabse Important Baat:</strong> β-Lactoglobulin, jo sabse zyada maatra mein hota hai whey mein, beverage processing mein sabse zyada problem deta hai. Jab temperature 68°C se upar jaata hai neutral pH par, toh β-Lg irreversibly denature ho jaata hai: iska free sulfhydryl group (Cys-121) expose ho jaata hai, jisse thiol-disulfide interchange reactions hoti hain, protein aggregate ho jaata hai, aur unwanted turbidity (dhundlapan), sedimentation (talne ki problem), aur cooked flavour (pakka hua swaad) aa jaata hai. Yeh clear whey beverage banane mein sabse badi scientific challenge hai. Lekin jab pH < 4.0 ho (pI 5.2 se neeche), toh β-Lg par strong net positive charge aa jaata hai, jisse molecules ke beech electrostatic repulsion hota hai, aur heat stability bahut badh jaati hai — bina aggregation ke heat treatment de sakte hain — yahi principle hai acidified clear whey drinks ke peeche.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Whey Processing ke Dauraan Release Hone Wale Bioactive Peptides</h3>
            <p>Whey proteins ka enzymatic hydrolysis aur fermentation karne se bioactive peptides release hote hain jinke proven health benefits hain:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>ACE-Inhibitory Peptides (Blood Pressure Kam Karne Wale):</strong> β-Lg hydrolysis se Ile-Pro-Ala (IPA) aur Ala-Leu-Pro-Met-His-Ile-Arg jaise peptides nikalte hain jo Angiotensin-Converting Enzyme (ACE) ko inhibit karte hain. Inke IC₅₀ values 42–580 μM range mein hote hain, jo blood pressure kam karne mein madad karte hain.</li>
                <li><strong>Opioid Peptides (α-Lactorphin, β-Lactorphin):</strong> Yeh α-La aur β-Lg se bante hain; opioid receptor binding ke zariye dard kam karne (analgesic) aur blood pressure kam karne ka kaam karte hain.</li>
                <li><strong>Antimicrobial Peptides (Lactoferricin B):</strong> Lactoferrin ka pepsin se digestion karne par ye bante hain; Gram-positive aur Gram-negative bacteria, yeasts, aur fungi ke khilaaf active hain — MIC values 0.3–150 μg/mL.</li>
                <li><strong>Immunomodulatory Peptides:</strong> Lymphocyte proliferation badhate hain, macrophages ki phagocytic activity enhance karte hain, aur cytokine production ko modulate karte hain.</li>
                <li><strong>Antioxidant Peptides:</strong> Inme cysteine residues hote hain jo glutathione (GSH) synthesis ke precursors hain — GSH shareer ka master intracellular antioxidant hai.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Whey ka Vitamin aur Mineral Profile</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2 text-left">Nutrient (Poshak Tatva)</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Maatra per Litre Whey</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Mahatva (Significance)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-4 py-2">Calcium</td><td class="border border-gray-300 px-4 py-2">400–1200 mg (acid whey mein zyada)</td><td class="border border-gray-300 px-4 py-2">Haddiyon ki mazbooti; acid whey mein zyada ionic/soluble Ca²⁺ hota hai</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Phosphorus</td><td class="border border-gray-300 px-4 py-2">350–600 mg</td><td class="border border-gray-300 px-4 py-2">Haddi aur daant; energy metabolism (ATP)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Potassium</td><td class="border border-gray-300 px-4 py-2">1300–1600 mg</td><td class="border border-gray-300 px-4 py-2">Electrolyte balance; whey ko sports/rehydration drinks ke liye suitable banata hai</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Sodium</td><td class="border border-gray-300 px-4 py-2">400–550 mg</td><td class="border border-gray-300 px-4 py-2">Electrolyte; rehydration mein madad</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Magnesium</td><td class="border border-gray-300 px-4 py-2">60–90 mg</td><td class="border border-gray-300 px-4 py-2">Enzymatic cofactor, muscle function</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Zinc</td><td class="border border-gray-300 px-4 py-2">1.5–3.5 mg</td><td class="border border-gray-300 px-4 py-2">Immune function, ghaaon ka bharna (wound healing)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Riboflavin (B₂)</td><td class="border border-gray-300 px-4 py-2">1.2–1.8 mg</td><td class="border border-gray-300 px-4 py-2">Energy metabolism; whey ko hara-peela rang deta hai (520 nm par fluorescence)</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Pantothenic acid (B₅)</td><td class="border border-gray-300 px-4 py-2">3.0–4.0 mg</td><td class="border border-gray-300 px-4 py-2">CoA synthesis mein zaruri</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Pyridoxine (B₆)</td><td class="border border-gray-300 px-4 py-2">0.4–0.6 mg</td><td class="border border-gray-300 px-4 py-2">Amino acid metabolism</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Cobalamin (B₁₂)</td><td class="border border-gray-300 px-4 py-2">2.0–4.0 μg</td><td class="border border-gray-300 px-4 py-2">Red blood cell banana, neural function</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Ascorbic acid (Vitamin C)</td><td class="border border-gray-300 px-4 py-2">1.0–2.0 mg</td><td class="border border-gray-300 px-4 py-2">Antioxidant (beverages mein aksar alag se milaya jaata hai)</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Whey-based Beverages ka Vargikaran (Classification)</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2 text-left">Shreni (Category)</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Vivaran (Description)</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">pH Range</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Protein Clarity</th>
                            <th class="border border-gray-300 px-4 py-2 text-left">Udaharan (Examples)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Clear/Transparent Whey Drinks (Saaf Paardarshi)</td><td class="border border-gray-300 px-4 py-2">Acid se clarify kiya hua, deproteinized ya kam pH par protein stable; soft-drink jaisa dikhta hai</td><td class="border border-gray-300 px-4 py-2">2.8–3.5</td><td class="border border-gray-300 px-4 py-2">Paardarshi ya thoda sa dhundla</td><td class="border border-gray-300 px-4 py-2">Rivella (Switzerland), Fruity Whey (concept), Lemon-lime whey soda</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Cloudy/Opaque Whey Drinks (Dhundla/Adh-Paardarshi)</td><td class="border border-gray-300 px-4 py-2">Protein retain rehta hai; hydrocolloids se stabilize kiya jaata hai; juice jaisa lagta hai</td><td class="border border-gray-300 px-4 py-2">3.5–4.5</td><td class="border border-gray-300 px-4 py-2">Dhundla/opaque</td><td class="border border-gray-300 px-4 py-2">Aam whey drink, whey-amrood beverage, whey-santra beverage</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Fermented Whey Beverages (Khameer Kiya Hua)</td><td class="border border-gray-300 px-4 py-2">Whey ko probiotic/lactic cultures se ferment kiya jaata hai</td><td class="border border-gray-300 px-4 py-2">3.8–4.5</td><td class="border border-gray-300 px-4 py-2">Dhundla</td><td class="border border-gray-300 px-4 py-2">Probiotic whey drink (L. acidophilus), whey kefir</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Whey-Fruit Juice Blends (Whey-Phal Ras Mishran)</td><td class="border border-gray-300 px-4 py-2">Whey ko fruit juice/pulp ke saath milaya jaata hai (aamtaur par 20–40% juice)</td><td class="border border-gray-300 px-4 py-2">3.0–4.2</td><td class="border border-gray-300 px-4 py-2">Alag-alag</td><td class="border border-gray-300 px-4 py-2">Whey-aam, whey-ananas, whey-anaar</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Carbonated Whey Beverages (CO₂ Wala)</td><td class="border border-gray-300 px-4 py-2">Clear whey drink mein CO₂ inject kiya jaata hai (2.5–4.0 volumes CO₂)</td><td class="border border-gray-300 px-4 py-2">2.8–3.5</td><td class="border border-gray-300 px-4 py-2">Saaf/sparkling</td><td class="border border-gray-300 px-4 py-2">Whey cola, sparkling whey nimbu paani</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Sports/Protein-enriched Whey Drinks</td><td class="border border-gray-300 px-4 py-2">WPC/WPI se fortify kiya hua taaki zyada protein ho (8–15 g/serving); isotonic ya hypertonic</td><td class="border border-gray-300 px-4 py-2">3.0–4.0</td><td class="border border-gray-300 px-4 py-2">Clear ya cloudy</td><td class="border border-gray-300 px-4 py-2">Protein water, recovery whey drink, isotonic whey sports drink</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2 font-semibold">Whey-based Dairy Beverages (Lassi-type)</td><td class="border border-gray-300 px-4 py-2">Whey ko buttermilk, dahi, ya SMP ke saath mila ke dairy-type drink banana</td><td class="border border-gray-300 px-4 py-2">4.0–4.8</td><td class="border border-gray-300 px-4 py-2">Opaque (adh-paardarshi)</td><td class="border border-gray-300 px-4 py-2">Whey lassi, whey chaas, reconstituted whey-SMP drink</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards aur Regulatory Framework — Whey Beverages ke liye</h3>
            <p>FSSAI ke paas specifically "Whey Beverage" naam se koi ek dedicated standard nahi hai, lekin product ko kai regulations follow karne padte hain:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-3">
                <li><strong>FSS (Food Products Standards and Food Additives) Regulations, 2011:</strong>
                    <ul class="list-circle list-outside pl-5 mt-1 space-y-1">
                        <li>Agar yeh non-carbonated water-based beverage ke roop mein position kiya jaaye, toh Section 2.3.30 mein aata hai — <em>"Non-carbonated water based beverages (non-alcoholic, ready to serve)"</em>, jismein agar kisi fruit ka naam claim karte ho toh minimum 10% (m/m) fruit juice content hona chahiye.</li>
                        <li>Agar dairy product ya dairy-based beverage ke roop mein position kiya jaaye, toh Section 2.1 (Dairy Products) standards ke compositional requirements follow karne padte hain.</li>
                        <li><strong>Whey Protein Concentrate (WPC)</strong> jo formulations mein use hota hai, woh IS 15894:2010 ke anuroop hona chahiye — WPC-34 mein Total protein content ≥ 34% dry basis par, WPC-80 mein ≥ 80%.</li>
                    </ul>
                </li>
                <li><strong>Permitted Additives (Anumat Additives) (Schedule VA aur VB ke anusaar):</strong>
                    <ul class="list-circle list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Preservatives (Pariksharak):</strong> Sodium benzoate (INS 211) — max 200 ppm; Potassium sorbate (INS 202) — max 300 ppm; dono milakar max 300 ppm. Nisin (INS 234) — max 12.5 mg/kg.</li>
                        <li><strong>Acidulants (Amlakaarak):</strong> Citric acid (INS 330), Malic acid (INS 296), Lactic acid (INS 270) — GMP levels par.</li>
                        <li><strong>Stabilizers/Emulsifiers (Sthirikarak):</strong> Pectin (INS 440) — max 3000 ppm; CMC (INS 466) — max 5000 ppm; Xanthan gum (INS 415) — max 5000 ppm; Carrageenan (INS 407) — max 5000 ppm.</li>
                        <li><strong>Colours (Rang):</strong> Sirf FSSAI-permitted colours (jaise Tartrazine INS 102 max 100 ppm, Sunset Yellow FCF INS 110 max 100 ppm, ya natural colours jaise β-carotene).</li>
                        <li><strong>Flavouring agents (Swaad dene wale):</strong> Schedule VD ke anuroop; natural, nature-identical, ya artificial flavours allowed hain category ke hisaab se.</li>
                        <li><strong>Sweeteners (Meethakaarak — agar sugar-free/diet variant ho):</strong> Aspartame (INS 951) max 600 ppm; Sucralose (INS 955) max 300 ppm; Stevia glycosides (INS 960) max 200 ppm.</li>
                    </ul>
                </li>
                <li><strong>Microbiological Standards (Sookshma-Jeev Maanak) (FSS Regulations, Schedule 2):</strong>
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
                                <tr><td class="border border-gray-300 px-3 py-1">Yeast aur Mould</td><td class="border border-gray-300 px-3 py-1">5</td><td class="border border-gray-300 px-3 py-1">2</td><td class="border border-gray-300 px-3 py-1">10 CFU/mL</td><td class="border border-gray-300 px-3 py-1">100 CFU/mL</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="text-xs text-gray-500 mt-1">n = samples ki sankhya; c = maximum kitne defective samples chalenge; m = microbiological limit jiske neeche sab results acceptable hain; M = iske upar ke results unacceptable hain.</p>
                </li>
                <li><strong>Labelling Requirements (Label ki Zarooraten) (FSS (Labelling and Display) Regulations, 2020):</strong> Yeh sab declare karna zaroori hai — product ka naam aur type, ingredients ki list ghatte kram mein (descending order), nutritional information per 100 mL aur per serving, best before/use by date, storage conditions, FSSAI license number aur logo, allergen declaration (isme hai: <em>DUDH/MILK</em>), net volume, batch/lot number, manufacturer ki detail, vegetarian logo (green dot).</li>
                <li><strong>Contaminant Limits (Dushit Padaarthon ki Seema):</strong> Lead — max 0.5 mg/kg; Arsenic — max 0.1 mg/kg; Tin (agar canned ho) — max 250 mg/kg; Aflatoxin M₁ — max 0.5 μg/kg.</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Whey-based Beverages ki Processing — Food Safety Controls ke Saath</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Whey Beverage Production ka Generalized Processing Flowchart</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Raw Whey Reception (Paneer/Cheese se aaya hua kachcha mattha) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-50 border border-blue-200 rounded">Preliminary Straining/Filtration (Curd ke tukdon ko hatana) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Centrifuge se Clarification & Fat Separation (Saaf karna aur fat alag karna) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Pehla Pasteurization (72°C × 15 sec ya 63°C × 30 min) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1 (B)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-50 border border-purple-200 rounded">Deproteinization (sirf clear drinks ke liye: 90°C/pH 4.5 par garmi → centrifuge se alag karna) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Ingredient Blending (Cheeni, Acid, Stabilizers, Flavors, Rang, Fortification milana) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-50 border border-green-200 rounded">pH Adjustment aur Verification (target: pH 3.0–4.2) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-50 border border-yellow-200 rounded">Homogenization (cloudy/fruit-pulp beverages ke liye: 150–200 bar / 15–20 MPa, 2-stage) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">De-aeration (Vacuum chamber, dissolved O₂ ko <1 ppm tak hatana) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-red-100 border border-red-300 rounded">Final Heat Treatment — Pasteurization (85–95°C × 15–30 sec) ya UHT (135–142°C × 4–6 sec) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2 (B)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Thanda Karna / Cooling (pasteurized ke liye 4–8°C; UHT/aseptic ke liye 20–25°C)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging — Aseptic filling (UHT ke liye) ya Hot-fill (>82°C) ya Cold-fill (refrigerated) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3 (B) (sirf aseptic filling ke liye)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-orange-50 border border-orange-200 rounded">Metal Detection / X-ray Inspection <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-4 (P)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Storage & Distribution (pasteurized ke liye 4±2°C; UHT ke liye ambient/normal temperature)</div>
            </div>
            <p class="text-xs text-gray-500 mt-2">CCP designations: (B) = Biological hazard (jeev-vaigyanik khatraa), (P) = Physical hazard (bhautik khatraa). PRP = Prerequisite Program (poorv-apekshit karyakram), oPRP = Operational Prerequisite Program (parichalanaat-mak poorv-apekshit karyakram).</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Har Processing Step ka Vistar se Vaigyanik Vyakhya</h3>
            <ol class="list-decimal list-outside pl-5 space-y-6">
                <li><strong>Whey Reception aur Prarambhik Quality Assessment (PRP)</strong>
                    <p>Taza whey ko coagulation ke turant baad collect karna chahiye aur <strong>2–4 ghante ke andar</strong> ambient temperature par process kar lena chahiye, ya fir agar deri ho toh <strong>1 ghante ke andar ≤7°C</strong> tak thanda kar dena chahiye. Deri se processing karne par bacteria bahut tezi se badhte hain (shuruat mein load: 10⁴–10⁶ CFU/mL, mukhya roop se <em>Lactobacillus</em>, <em>Streptococcus thermophilus</em>, <em>E. coli</em>, aur coliforms cheese/paneer process se aate hain) aur lactose aur amino acids ke beech Maillard browning reactions hoti hain jisse rang badal jaata hai.</p>
                    <p class="mt-2"><strong>Reception par Quality Checks:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>pH: 4.5–6.5 (type ke hisaab se); agar < 3.5 ho toh reject karo (zyada acid develop ho gaya hai)</li>
                        <li>Titratable acidity: ≤0.20% LA (sweet whey), ≤0.80% LA (acid whey)</li>
                        <li>Temperature: ≤10°C (agar store kiya ho) ya ≤35°C (agar process se seedha aaya ho)</li>
                        <li>Total solids: 5.5–7.0% (refractometer/hydrometer se check karo)</li>
                        <li>Organoleptic: Koi kharab swaad nahi hona chahiye (butyric, sada hua), rang normal hona chahiye</li>
                        <li>MBRT (Methylene Blue Reduction Test): ≥2 ghante acceptable quality ke liye</li>
                        <li>Phosphatase test: Positive (kachche whey mein); Negative (agar pehle se pasteurize kiya ho)</li>
                    </ul>
                    <div class="bg-blue-50 p-3 rounded mt-2">
                        <strong>Food Safety Chinta (Concern):</strong> Kachche whey mein <em>Salmonella</em>, <em>Listeria monocytogenes</em>, <em>E. coli</em> O157:H7, <em>S. aureus</em> (agar infected udder se aaya ho), aur <em>Bacillus cereus</em> spores ho sakte hain. Is stage par sabse bada khatraa microbiological hai. Iske alaawa, chemical hazards mein antibiotic residues, aflatoxin M₁, aur pesticide residues ho sakte hain jo original milk se carry-over hote hain. Physical hazards mein baal, dhatu ke tukde (metal fragments), aur curd particles shamil hain.
                    </div>
                </li>

                <li><strong>Prarambhik Filtration aur Straining (PRP)</strong>
                    <p>Whey ko vibrating screen ya nylon filter (mesh size: 60–100 mesh / 150–250 μm) se pass kiya jaata hai taaki bade curd ke tukde, fat globules, aur koi bhi bahari cheez (extraneous matter) hata di jaaye. Yeh step downstream equipment ki efficiency badhata hai aur heat exchangers mein fouling (jamna) kam karta hai. Typical recovery: whey volume ka 98–99%.</p>
                </li>

                <li><strong>Clarification aur Fat Separation (oPRP)</strong>
                    <p>Ek high-speed cream separator/clarifier (aamtaur par 5000–7000 × g par chalta hai) do kaam karta hai: (a) bacha hua fat hatana (fat content 0.3–0.5% se <0.04% tak kam karna), aur (b) clarification yaani baareek suspended particles aur denatured protein aggregates ko hatana.</p>
                    <p class="mt-2"><strong>Vaigyanik Karan (Scientific Rationale):</strong> Bacha hua fat storage ke dauraan lipid oxidation ki wajah se kharab swaad (off-flavour) paida karta hai. Yeh oxidation light-activated riboflavin ke kaaran hoti hai jo photosensitizer ka kaam karta hai aur singlet oxygen ¹O₂ produce karta hai, jo unsaturated fatty acids par attack karta hai. Fat globules roshni ko bhi scatter karte hain, jisse clear beverage formulations mein unwanted haze (dhundlapan) aata hai. Clear whey drinks ke liye fat content < 0.04% target hai.</p>
                    <p class="mt-2"><strong>oPRP Classification kyun:</strong> Yeh step oPRP hai kyunki inadequate fat removal seedha product ki safety (oxidized lipids mein toxic aldehydes jaise malondialdehyde aur 4-hydroxynonenal bante hain zyada levels par) aur quality ko affect karta hai, lekin yeh CCP nahi hai kyunki baad mein pasteurization biological hazard ko address kar deta hai.</p>
                </li>

                <li><strong>Pehla Pasteurization — CCP-1 (Biological)</strong>
                    <p>Clarified whey ko plate heat exchanger (PHE) use karke HTST pasteurize kiya jaata hai.</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="min-w-full border border-gray-300 text-sm">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Tarika (Method)</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Temperature</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Holding Time</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Log Reduction (target pathogen)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border border-gray-300 px-3 py-1">LTLT (Batch)</td><td class="border border-gray-300 px-3 py-1">63°C</td><td class="border border-gray-300 px-3 py-1">30 min</td><td class="border border-gray-300 px-3 py-1">≥5 log₁₀ <em>Coxiella burnetii</em> ke liye</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">HTST (Continuous)</td><td class="border border-gray-300 px-3 py-1">72°C</td><td class="border border-gray-300 px-3 py-1">15 sec</td><td class="border border-gray-300 px-3 py-1">≥5 log₁₀ <em>C. burnetii</em> ke liye, >12 log₁₀ <em>Salmonella</em> ke liye</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2"><strong>Mukhya pathogens ke D-values whey mein 72°C par:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><em>Coxiella burnetii</em> (dudh mein sabse zyada heat-resistant non-spore-forming pathogen): D₇₂ = 0.01 sec → 15 sec hold par >1500D process milta hai</li>
                        <li><em>Listeria monocytogenes</em>: D₇₂ = 0.2–0.4 sec</li>
                        <li><em>Salmonella</em> spp.: D₇₂ = 0.06–0.1 sec</li>
                        <li><em>E. coli</em> O157:H7: D₇₂ = 0.07–0.15 sec</li>
                        <li><em>S. aureus</em>: D₇₂ = 0.1–0.3 sec</li>
                    </ul>
                    <p class="mt-2"><strong>Verification (Satyaapan):</strong> Phosphatase test (negative hona chahiye); temperature continuously record hona chahiye calibrated chart recorder ya data logger se; flow diversion valve (FDV) ko product divert kar dena chahiye agar temperature 72°C se neeche gire.</p>
                    <div class="bg-red-50 p-3 rounded mt-2 border-l-4 border-red-500">
                        <strong>CCP-1 Monitoring:</strong><br>
                        • <strong>Kya:</strong> Pasteurization ka temperature aur time<br>
                        • <strong>Kaise:</strong> Calibrated thermometer/RTD sensors holding tube mein + flow meter<br>
                        • <strong>Kab:</strong> Lagaataar (har batch / continuous ke liye har second)<br>
                        • <strong>Kaun:</strong> Trained pasteurizer operator<br>
                        • <strong>Critical Limits:</strong> ≥72°C par ≥15 seconds<br>
                        • <strong>Corrective Action (Sudharaatmak Kaarvaahi):</strong> Sub-standard product ko raw balance tank mein divert karo re-pasteurization ke liye; karan jaanch karo aur theek karo; ghatna document karo
                    </div>
                    <p class="mt-2"><strong>Whey proteins par thermal effects ka note:</strong> 72°C/15s par, lagbhag 5–10% β-Lg denature hota hai. Yeh acceptable hai aur is stage par dikhaayi dene waali turbidity nahi aati. Lekin 75°C se upar protein denaturation tezai se badhti hai (β-Lg denaturation ka z-value ≈ 6.5°C hai).</p>
                </li>

                <li><strong>Deproteinization (Sirf Clear Whey Beverages ke liye) — oPRP</strong>
                    <p>Clear, transparent whey drinks ke liye, bache hue whey proteins ko hatana ya soluble rakhna zaroori hai taaki haze (dhundlapan) aur sedimentation (talna) na ho. Iske do mukhya tarike hain:</p>
                    <p class="mt-2"><strong>Tarika A — Thermal Acid Deproteinization (Sabse Aam Tarika):</strong></p>
                    <ol class="list-alpha list-outside pl-5 mt-1 space-y-1">
                        <li>Whey ka pH 4.5–4.6 par adjust karo (β-Lg ke pI = 5.2 ke paas, lekin doosre proteins ke saath co-precipitation ko dhyan mein rakhte hue) citric acid ya HCl use karke.</li>
                        <li>90–95°C par 15–20 minute tak garmi do, dheere-dheere hilaate hue. Isse whey proteins ka lagbhag complete denaturation aur aggregation hota hai (β-Lg aur α-La ka >95% denature ho jaata hai) hydrophobic interactions aur disulfide bond formation ke zariye.</li>
                        <li>40–50°C tak thanda karo aur flocculated protein aggregates ko centrifugation (3000–5000 × g) ya kapda/membrane filtration se alag karo.</li>
                        <li>Jo saaf supernatant (deproteinized whey) milta hai usme lactose, minerals, water-soluble vitamins, aur organic acids rehte hain lekin protein content < 0.1% tak kam ho jaata hai.</li>
                    </ol>
                    <p class="mt-2"><strong>Tarika B — Membrane Filtration (Ultrafiltration):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>10–30 kDa MWCO (Molecular Weight Cut-Off) waali UF membranes whey proteins ko retentate mein retain karti hain (jinhe WPC mein process kiya ja sakta hai) jabki permeate (jismein lactose, minerals, aur paani hota hai) clear beverages ka base ban sakta hai.</li>
                        <li>Faayda: valuable protein co-product ke roop mein recover hota hai (WPC); bahut saaf permeate milta hai.</li>
                        <li>Operating parameters: TMP (Transmembrane Pressure) = 1–4 bar; temperature = 10–50°C; flux = 20–60 L/m²/h.</li>
                    </ul>
                    <p class="mt-2"><strong>Tarika C — Cloudy/Opaque Beverages ke liye:</strong> Yeh step <strong>bilkul skip kar diya jaata hai</strong>. Iske bajaye, proteins ko pH 3.0–3.8 par formulate karke (pI se kaafi neeche) aur pectin jaise stabilizers use karke stable kiya jaata hai jo positively charged proteins ke saath electrostatic complexes banate hain aur aggregation rokh dete hain.</p>

                    <div class="bg-yellow-50 p-3 rounded mt-2 border-l-4 border-yellow-500">
                        <strong>Pectin-Protein Stabilization ka Vigyan:</strong> Jab pH, pI se neeche ho (β-Lg ke liye ~5.0 se neeche), whey proteins par net positive charge (+) hota hai. High-methoxyl (HM) pectin par strong negative charge (−) hota hai ionized carboxyl groups ki wajah se. Electrostatic attraction se soluble pectin-protein complexes bante hain jo protein-protein aggregation rokh dete hain. Optimal pectin:protein ratio aamtaur par 0.5:1 se 1:1 (w/w) hota hai, HM pectin ka Degree of Esterification (DE) > 70% hona chahiye. Pectin viscosity bhi badhata hai, jo sedimentation ke khilaaf steric stabilization deta hai.
                    </div>
                </li>

                <li><strong>Ingredient Blending aur Formulation (PRP)</strong>
                    <p>Pasteurized (aur optional deproteinized) whey base ko jacketed, agitated blending tank mein transfer kiya jaata hai (variable-speed impeller 100–300 rpm par chalta hai). Ingredients ek specific kram mein milaye jaate hain taaki interactions na hon:</p>

                    <p class="mt-3"><strong>Step 1 — Sugar/Sweetener Ghulana:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Sucrose: Aam matra — meethe beverages ke liye 8–14% (w/v); garm whey (40–50°C) mein jaldi ghul jaata hai.</li>
                        <li>High Fructose Corn Syrup (HFCS 55): Vikalp ke taur par 6–10% (zyada meetha: fructose ki relative sweetness = 1.7 vs sucrose = 1.0).</li>
                        <li>Kam calorie waale variants ke liye: Stevia glycosides (rebaudioside A) 200–400 ppm par 8–10% sucrose ke barabar meethas deti hain.</li>
                    </ul>

                    <p class="mt-3"><strong>Step 2 — Stabilizer/Hydrocolloid Failaana (Dispersion):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>High-Methoxyl Pectin (DE > 70%):</strong> 0.1–0.5% (w/v); acidic whey beverages ka primary stabilizer; lumps se bachne ke liye pehle 5 guna sugar mein dry mix karo, fir garam paani (80°C) mein hydrate karo, uske baad acidic whey base mein daalo.</li>
                        <li><strong>Carboxymethyl Cellulose (CMC):</strong> 0.1–0.3%; viscosity aur suspension capability deta hai; alag se hydrate karna zaroori hai.</li>
                        <li><strong>Xanthan Gum:</strong> 0.05–0.15%; CMC ke saath synergistic hai; shear-thinning pseudoplastic behaviour deta hai jisse dhalna (pouring) aasaan hota hai.</li>
                        <li><strong>Microcrystalline Cellulose (MCC):</strong> 0.1–0.3%; fruit-whey blends mein pulp jaisa mouthfeel deta hai.</li>
                    </ul>

                    <p class="mt-3"><strong>Step 3 — Acidification (Amlikaran):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Zyaadatar whey beverages ka target pH: <strong>3.0–4.2</strong> (microbial safety aur protein stability ke liye bahut zaroori).</li>
                        <li><strong>Citric acid (anhydrous):</strong> Sabse aam acidulant; typical addition 0.2–0.6% (w/v); taaza, citrus jaisa khattapan deta hai; calcium ko chelate karta hai (jo warna turbidity paida kar sakta hai).</li>
                        <li><strong>Malic acid:</strong> Zyada smooth, kam teekhi acidity deta hai; 0.1–0.4% par use hota hai; seb/aam flavoured variants ke liye accha hai.</li>
                        <li><strong>Phosphoric acid:</strong> Teekhi acidity; cola-type formulations ke liye 0.05–0.08% par use hota hai.</li>
                        <li><strong>Lactic acid:</strong> Acid whey mein naturally present hota hai; aur milaya ja sakta hai; rounded, halki khattaas deta hai.</li>
                        <li><strong>Buffering considerations:</strong> Whey mein achhi khasi buffering capacity hoti hai (mukhya roop se phosphates aur proteins se). Henderson-Hasselbalch equation pH govern karta hai: pH = pKa + log([A⁻]/[HA]). Citric acid (pKa₁ = 3.13, pKa₂ = 4.76, pKa₃ = 6.40) target pH range mein achhi buffering deta hai.</li>
                    </ul>

                    <p class="mt-3"><strong>Step 4 — Flavouring aur Colouring:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Natural flavours: Aam oleoresin (0.05–0.15%), nimbu oil (0.02–0.05%), santra essence (0.1–0.3%), ananas flavour (0.08–0.12%).</li>
                        <li>Flavours blending ke ant mein daalne chahiye (ya final heat treatment ke baad agar volatile hon) taaki flavour loss kam ho.</li>
                        <li>Colours: β-carotene (0.5–2 ppm yellow-orange ke liye), annatto (orange ke liye), anthocyanin extracts (purple/red ke liye), chlorophyll (green ke liye).</li>
                    </ul>

                    <p class="mt-3"><strong>Step 5 — Fruit Juice/Pulp Milana (fruit-whey blends ke liye):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Aamtaur par addition: 10–40% (v/v) pasteurized fruit juice ya 5–15% fruit pulp.</li>
                        <li>Fruit natural sugars, organic acids, vitamins (khaas taur par ascorbic acid), polyphenols, aur rang contribute karta hai.</li>
                        <li>Popular Indian combinations: Aam (20–30% Alphonso pulp), Amrood (15–25%), Litchi (20%), Ananas (15–20%), Anaar (10–15%).</li>
                    </ul>

                    <p class="mt-3"><strong>Step 6 — Optional Fortification (Samvriddhi):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>WPC/WPI milana:</strong> Protein-enriched variants ke liye; WPC-80 ko 2–5% (w/v) par milana se protein 3–8 g/100 mL tak badh jaata hai; alag se hydrate karo aur dheere-dheere daalo taaki foam aur aggregation na ho.</li>
                        <li><strong>Vitamin C (ascorbic acid):</strong> Fortification ke liye 30–100 mg/100 mL; antioxidant (oxygen scavenger) aur reducing agent ki tarah bhi kaam karta hai.</li>
                        <li><strong>Prebiotic fibre:</strong> Inulin (2–5%), polydextrose (1–3%), ya FOS (Fructo-oligosaccharides) (1–3%) prebiotic claim ke liye aur behtar mouthfeel/body ke liye.</li>
                        <li><strong>Probiotic cultures:</strong> Fermented variants ke liye — <em>Lactobacillus acidophilus</em>, <em>L. rhamnosus GG</em>, <em>Bifidobacterium lactis</em> — pasteurization ke baad 10⁸–10⁹ CFU/mL par milaye jaate hain taaki shelf life ke ant mein bhi ≥10⁶ CFU/mL rahe.</li>
                        <li><strong>Minerals:</strong> Calcium lactate (0.2–0.5%) ya tricalcium phosphate calcium fortification ke liye; zinc sulfate zinc ke liye.</li>
                    </ul>

                    <p class="mt-3"><strong>Aam Whey Beverage ki Typical Formulation (Research-Optimized):</strong></p>
                    <div class="overflow-x-auto mt-2">
                        <table class="min-w-full border border-gray-300 text-sm">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Ingredient (Samagri)</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Maatra (per 100 mL)</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Kaam (Function)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border border-gray-300 px-3 py-1">Clarified Paneer Whey</td><td class="border border-gray-300 px-3 py-1">55–65 mL</td><td class="border border-gray-300 px-3 py-1">Base liquid (protein, minerals, lactose)</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Aam ka pulp (Totapuri/Alphonso)</td><td class="border border-gray-300 px-3 py-1">20–30 mL</td><td class="border border-gray-300 px-3 py-1">Swaad, rang, vitamin A & C, fibre</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Cheeni (Sucrose)</td><td class="border border-gray-300 px-3 py-1">8–12 g</td><td class="border border-gray-300 px-3 py-1">Meethas, mouthfeel, osmotic preservation</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Citric acid</td><td class="border border-gray-300 px-3 py-1">0.2–0.4 g</td><td class="border border-gray-300 px-3 py-1">pH adjustment (target 3.8–4.0), khattapan</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">HM Pectin (DE > 72%)</td><td class="border border-gray-300 px-3 py-1">0.15–0.30 g</td><td class="border border-gray-300 px-3 py-1">Protein stabilization, viscosity, mouthfeel</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">CMC</td><td class="border border-gray-300 px-3 py-1">0.10–0.20 g</td><td class="border border-gray-300 px-3 py-1">Suspension, viscosity</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Potassium sorbate</td><td class="border border-gray-300 px-3 py-1">0.02–0.03 g (200–300 ppm)</td><td class="border border-gray-300 px-3 py-1">Preservative (yeast aur mould ke khilaaf)</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Aam flavour (natural)</td><td class="border border-gray-300 px-3 py-1">0.05–0.10 mL</td><td class="border border-gray-300 px-3 py-1">Swaad badhana</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Paani (RO treated)</td><td class="border border-gray-300 px-3 py-1">q.s. 100 mL tak</td><td class="border border-gray-300 px-3 py-1">Volume adjust karna</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2 text-sm"><strong>Anumanit Final Composition:</strong> TSS: 15–18°Brix; pH: 3.8–4.0; Protein: 0.4–0.7%; Total Solids: 18–22%; Viscosity: 15–40 cP (25°C par, 60 rpm, Brookfield); Rang: golden-yellow se orange (L* = 55–65, a* = 5–15, b* = 40–55 CIE Lab mein).</p>
                </li>

                <li><strong>pH Adjustment aur Verification (oPRP)</strong>
                    <p>Blending ke baad, pH ko precisely measure kiya jaata hai aur target range mein adjust kiya jaata hai — food-grade citric acid se (pH kam karne ke liye) ya sodium citrate/sodium hydroxide se (pH badhane ke liye). Yeh step <strong>oPRP</strong> hai kyunki:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>pH < 4.6 woh critical dividing line hai jismein low-acid foods (jahaan <em>Clostridium botulinum</em> grow kar sakta hai aur toxin bana sakta hai) aur acid foods (jahaan <em>C. botulinum</em> growth ruk jaati hai) mein fark hota hai.</li>
                        <li>pH < 4.6 par, agar thermal processing inadequate bhi ho, toh bhi botulism ka khatraa khatam ho jaata hai — yeh ek intrinsic safety barrier hai.</li>
                        <li>Lekin, aciduric organisms (<em>Alicyclobacillus acidoterrestris</em>, yeasts, moulds) pH 3.0–4.5 par bhi grow kar sakte hain.</li>
                        <li>Zyaadatar whey beverages ke liye optimal pH: <strong>3.0–3.8</strong> clear drinks ke liye; <strong>3.5–4.2</strong> cloudy/fruit-based drinks ke liye.</li>
                    </ul>
                    <p class="mt-2"><strong>Monitoring:</strong> Calibrated digital pH meter (accuracy ±0.01 pH units) se 25°C par pH maapa jaata hai; meter rozana standard buffers (pH 4.00 aur 7.00) se calibrate karna zaroori hai.</p>
                </li>

                <li><strong>Homogenization (PRP — Cloudy/Fruit-pulp Beverages ke liye)</strong>
                    <p>Do-stage high-pressure homogenization se stable, uniform suspension banayi jaati hai:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Pehla stage:</strong> 150–200 bar (15–20 MPa) — fat globules (agar hon) aur fruit pulp particles ko < 1 μm tak tod deta hai; fine emulsion banta hai.</li>
                        <li><strong>Doosra stage:</strong> 30–50 bar (3–5 MPa) — pehle stage mein bane clusters ko tod deta hai; uniform particle size distribution ensure karta hai.</li>
                        <li><strong>Temperature:</strong> 55–70°C (garm homogenization efficiency badhati hai aur viscosity kam karti hai jisse processing aasaan hoti hai).</li>
                    </ul>
                    <p class="mt-2"><strong>Vaigyanik Aadhaar:</strong> Stokes' Law sedimentation govern karta hai: v = (2r²(ρₚ - ρ_f)g) / 9η, jahaan v = sedimentation velocity (talchhat ki raftaar), r = particle radius (kana ka aakar), ρₚ = particle density (kana ka ghantva), ρ_f = fluid density (drav ka ghantva), g = gravitational acceleration (gurutvaakarshan), η = fluid viscosity (drav ki gadhaapan). Homogenization r (particle radius) ko 10–100× kam karta hai, jisse sedimentation velocity 100–10,000× kam ho jaati hai. Saath hi, stabilizers η (viscosity) badhate hain, jo settling ko aur rok deta hai.</p>
                    <p class="mt-2">Clear beverages ke liye, homogenization nahi kiya jaata kyunki yeh stable turbid emulsion banaata hai jo desired transparent appearance ke virudh hai.</p>
                </li>

                <li><strong>De-aeration (Hawa Nikalna) (PRP)</strong>
                    <p>Blended product ko vacuum de-aerator se pass kiya jaata hai (0.3–0.5 bar absolute pressure par, 50–60°C par) taaki dissolved aur entrained oxygen nikal jaaye.</p>
                    <p class="mt-2"><strong>Vaigyanik Karan:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Dissolved O₂ ascorbic acid (agar fortify kiya ho) ke oxidative degradation ko badhata hai: ascorbic acid → dehydroascorbic acid → 2,3-diketogulonic acid (irreversible loss; first-order kinetics follow karta hai aur k [O₂] ke proportional hota hai).</li>
                        <li>Oxygen Maillard browning aur lipid oxidation ko catalyze karta hai, jisse rang gahera ho jaata hai aur kharab swaad aata hai (hexanal, nonanal).</li>
                        <li>Dissolved O₂ filling ke dauraan foaming bhi karta hai, jisse under-filling aur headspace ki samasya hoti hai.</li>
                        <li>Target: dissolved O₂ < 1 ppm (optical dissolved oxygen sensor se maapa jaata hai).</li>
                    </ul>
                </li>

                <li><strong>Final Heat Treatment — CCP-2 (Biological)</strong>
                    <p>Product ki safety ke liye yeh sabse critical step hai. Treatment ki intensity desired shelf life aur distribution conditions par depend karti hai:</p>

                    <div class="overflow-x-auto mt-2">
                        <table class="min-w-full border border-gray-300 text-sm">
                            <thead class="bg-gray-100">
                                <tr>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Treatment ka Prakar</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Conditions</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Target Organisms</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Shelf Life</th>
                                    <th class="border border-gray-300 px-3 py-1 text-left">Storage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="border border-gray-300 px-3 py-1">Standard Pasteurization</td><td class="border border-gray-300 px-3 py-1">72°C × 15 sec</td><td class="border border-gray-300 px-3 py-1">Vegetative pathogens</td><td class="border border-gray-300 px-3 py-1">15–21 din</td><td class="border border-gray-300 px-3 py-1">Refrigerated (2–6°C)</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">High Pasteurization</td><td class="border border-gray-300 px-3 py-1">85–95°C × 15–30 sec</td><td class="border border-gray-300 px-3 py-1">Vegetative pathogens + zyaadatar spoilage organisms</td><td class="border border-gray-300 px-3 py-1">30–60 din</td><td class="border border-gray-300 px-3 py-1">Refrigerated (2–6°C)</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">ESL (Extended Shelf Life)</td><td class="border border-gray-300 px-3 py-1">125–130°C × 2–4 sec</td><td class="border border-gray-300 px-3 py-1">Vegetative + zyaadatar spores</td><td class="border border-gray-300 px-3 py-1">60–90 din</td><td class="border border-gray-300 px-3 py-1">Refrigerated</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">UHT</td><td class="border border-gray-300 px-3 py-1">135–142°C × 4–6 sec</td><td class="border border-gray-300 px-3 py-1">Sabhi vegetative cells + spores (commercial sterility: F₀ ≥ 5 min)</td><td class="border border-gray-300 px-3 py-1">6–9 mahine</td><td class="border border-gray-300 px-3 py-1">Ambient (fridge ki zaroorat nahi)</td></tr>
                                <tr><td class="border border-gray-300 px-3 py-1">Hot-fill-hold (acid beverages pH < 4.0 ke liye)</td><td class="border border-gray-300 px-3 py-1">88–95°C par bharo → 2–3 min ruko → container ulta karo</td><td class="border border-gray-300 px-3 py-1">Vegetative + acid-tolerant spoilage (<em>A. acidoterrestris</em> spores target)</td><td class="border border-gray-300 px-3 py-1">6–12 mahine</td><td class="border border-gray-300 px-3 py-1">Ambient</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p class="mt-3"><strong>pH < 4.5 par Mukhya Thermal Destruction Kinetics:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Kam pH par, <em>C. botulinum</em> spores ki heat resistance bahut kam ho jaati hai (D₁₂₁ pH 7.0 par 0.21 min se ghat kar pH 4.0 par 0.04 min ho jaata hai), jisse commercial sterility bahut kam process intensity par bhi mil jaati hai.</li>
                        <li><em>Alicyclobacillus acidoterrestris</em> — ek thermoacidophilic, spore-forming bacterium — acidic shelf-stable beverages mein sabse bada spoilage concern hai. D₉₅ = 2–16 min; z = 7.7–12.4°C. Yeh pathogen nahi hai, lekin guaiacol aur halophenols produce karta hai jo medicinal off-flavours paida karte hain (detection threshold: sirf 2 ppb). ≥93°C par hot-fill ≥2 min hold ke saath aamtaur par kaafi control deta hai.</li>
                        <li>Yeasts (jaise <em>Saccharomyces</em>, <em>Zygosaccharomyces bailii</em>) aur moulds (jaise <em>Byssochlamys fulva</em>, <em>Neosartorya fischeri</em>) important spoilage organisms hain. <em>B. fulva</em> ascospores: D₉₀ = 1–12 min, D₈₅ = 6–60 min. <em>Z. bailii</em> preservative-resistant hone ke liye badnaam hai.</li>
                    </ul>

                    <div class="bg-red-50 p-3 rounded mt-3 border-l-4 border-red-500">
                        <strong>CCP-2 Monitoring:</strong><br>
                        • <strong>Kya:</strong> Final heat treatment ka temperature aur holding time<br>
                        • <strong>Kaise:</strong> Holding tube ke inlet aur outlet par calibrated RTD sensors; flow rate verification ke liye magnetic flow meter; UHT plants mein: additional pressure transmitters<br>
                        • <strong>Kab:</strong> Lagaataar monitoring data logging ke saath<br>
                        • <strong>Kaun:</strong> Process operator + automated PLC system<br>
                        • <strong>Critical Limits:</strong> Product par depend karta hai (jaise ≥90°C ≥15 sec high-pasteurized ke liye; ≥137°C ≥4 sec UHT ke liye)<br>
                        • <strong>Corrective Action:</strong> Automatic flow diversion; product "non-conforming" ke roop mein hold karo disposition ke liye; equipment inspect karo; records review karo<br>
                        • <strong>Verification:</strong> Saalon mein sabhi sensors ki calibration (NABL-accredited lab se); haftewaari certified reference thermometer se check; UHT products ke liye commercial sterility testing (37°C/7 din + 55°C/7 din par incubation)
                    </div>

                    <p class="mt-3"><strong>Alag-alag Heat Treatments par Whey Protein Denaturation ka Asar (pH ~3.5 par):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>72°C/15s: ~3–5% β-Lg denaturation (kam pH par clarity par kam asar)</li>
                        <li>85°C/30s: ~15–25% β-Lg denaturation</li>
                        <li>95°C/30s: ~50–70% β-Lg denaturation</li>
                        <li>137°C/4s: ~70–90% β-Lg denaturation</li>
                    </ul>
                    <p class="mt-1 text-sm text-gray-600">pH < 4.0 par, bahut zyada denature hua β-Lg bhi zyaadatar soluble rehta hai strong electrostatic repulsion ki wajah se (net positive charge >> 0), jisse dikhaayi dene waali aggregation nahi hoti. Isliye heat treatment se pehle acidification bahut zaroori hai clear whey beverages ke liye.</p>
                </li>

                <li><strong>Thanda Karna (Cooling)</strong>
                    <p>Heat treatment ke baad, product ko PHE ke regeneration section se tezi se thanda kiya jaata hai (85–92% heat recovery milti hai) target temperature tak:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Pasteurized products: <strong>4–8°C</strong> tak thanda karo filling se pehle</li>
                        <li>UHT/aseptic products: <strong>20–25°C</strong> tak thanda karo (pack surface par condensation rokne ke liye)</li>
                        <li>Hot-fill products: Filling se pehle <strong>thanda nahi karte</strong>; ≥85°C par hi bharte hain</li>
                    </ul>
                    <p class="mt-2">Tez cooling heat-sensitive nutrients (khaas taur par vitamins B₁, C, aur folic acid) ko thermal damage se bachata hai aur Maillard reactions aur sulfhydryl oxidation se hone waale cooked-flavour ko rokta hai.</p>
                </li>

                <li><strong>Packaging — CCP-3 (Sirf Aseptic Systems ke liye) (Biological)</strong>
                    <p>Packaging microbiologically safe product aur bahari vatavaran ke beech aakhiri critical barrier hai.</p>

                    <p class="mt-2"><strong>Option 1 — Aseptic Filling (UHT products ke liye):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Product ko sterile conditions mein pre-sterilized containers mein bhara jaata hai Class 100 (ISO 5) clean room environment mein.</li>
                        <li><strong>Container sterilization:</strong> Tetra Pak cartons — H₂O₂ (35%, 70°C) spray + hot air (280–330°C) drying; PET bottles — peracetic acid (PAA, 0.1–0.2%) ya electron beam; HDPE bottles — H₂O₂ vapor.</li>
                        <li><strong>CCP-3 monitoring:</strong> H₂O₂ concentration ≥ 35% (refractometer se har 30 min check karo); contact temperature ≥ 70°C; carton par bacha hua H₂O₂ < 0.5 ppm (peroxide strip test se verify karo); aseptic chamber mein positive pressure maintain karo (ΔP > 10 Pa).</li>
                        <li>Shelf life: Ambient temperature par 6–9 mahine.</li>
                    </ul>

                    <p class="mt-2"><strong>Option 2 — Hot-Fill-Hold (acid products, pH < 4.0 ke liye):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>88–95°C par garam product ko seedha bottles mein ≥85°C par bhara jaata hai.</li>
                        <li>Container ko turant cap kiya jaata hai aur 2–3 minute ke liye ulta kar diya jaata hai taaki closure aur headspace sterilize ho jaaye.</li>
                        <li>Fir cooling tunnel (paani spray ya forced air) se 40°C tak thanda kiya jaata hai.</li>
                        <li>Container material: PET (heat-set bottles jo >85°C seh sakti hain), glass, ya HDPE.</li>
                        <li>Shelf life: Ambient par 6–12 mahine.</li>
                    </ul>

                    <p class="mt-2"><strong>Option 3 — Cold Fill (pasteurized, refrigerated products ke liye):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Thanda kiya hua product (4–8°C) sanitized PET bottles, HDPE pouches, ya glass bottles mein bhara jaata hai.</li>
                        <li>Filling environment: HEPA-filtered hawa; filling nozzles batches ke beech peracetic acid ya steam se sanitize kiye jaate hain.</li>
                        <li>Shelf life: 2–6°C par 15–30 din.</li>
                    </ul>

                    <p class="mt-2"><strong>Container Size Options:</strong> 100 mL (single serve), 200 mL (India mein popular), 500 mL, 1 litre; pouches (200 mL, 500 mL) economy segments ke liye.</p>
                </li>

                <li><strong>Metal Detection / X-ray Inspection — CCP-4 (Physical)</strong>
                    <p>Sabhi packaged products metal detector (sensitivity: ferrous ≥ 1.5 mm, non-ferrous ≥ 2.0 mm, stainless steel ≥ 2.5 mm) ya X-ray inspection system (jo metals ke alaawa glass, patthar, haddi, dense plastics ≥ 2 mm bhi detect kar sakta hai) se guzarte hain.</p>
                    <div class="bg-red-50 p-3 rounded mt-2 border-l-4 border-red-500">
                        <strong>CCP-4 Monitoring:</strong><br>
                        • <strong>Kya:</strong> Physical contaminants (dhatu, kaanch, patthar) ki maujoodgi<br>
                        • <strong>Kaise:</strong> Metal detector ya X-ray system<br>
                        • <strong>Kab:</strong> Har package, lagaataar<br>
                        • <strong>Kaun:</strong> Line operator + automatic reject system<br>
                        • <strong>Critical Limits:</strong> Ferrous ≥1.5mm, Non-ferrous ≥2.0mm, SS ≥2.5mm (detect hona aur reject hona chahiye)<br>
                        • <strong>Corrective Action:</strong> Rejected packs ko jaanch ke liye alag rakho (quarantine); source pehchaan karo aur theek karo; pichle safal test ke baad ke sabhi packs dobara jaanch karo<br>
                        • <strong>Verification:</strong> Certified test pieces se start-up par, production ke dauraan har 1–2 ghante, aur run ke ant mein test karo
                    </div>
                </li>

                <li><strong>Storage aur Distribution (Bhandaran aur Vitran)</strong>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Pasteurized products:</strong> Cold chain 2–6°C par poore storage aur distribution ke dauraan maintain karna zaroori hai. Temperature abuse (>10°C 4 ghante se zyada samay tak) product ko unsafe bana sakta hai.</li>
                        <li><strong>UHT/Aseptic products:</strong> Ambient storage (ideally 15–30°C); >40°C temperature se bachein (Maillard browning aur flavour kharab hone ki raftaar tez ho jaati hai; har 10°C badhne par rate lagbhag dugna ho jaata hai — Q₁₀ ≈ 2.0–2.5).</li>
                        <li><strong>Roshni se bachaao:</strong> Opaque ya UV-barrier packaging use karo. Riboflavin (λ_max absorption = 445 nm, 375 nm) photosensitizer ka kaam karta hai, singlet oxygen generate karta hai jo vitamins (khaas taur par B₂ khud, C, A) ko degrade karta hai aur light-struck flavour (methionine oxidation se methional aur dimethyl disulfide) paida karta hai.</li>
                        <li><strong>FIFO (First In, First Out) niyam:</strong> Stock rotation ke liye zaroori hai — jo pehle aaya woh pehle jaaye.</li>
                    </ul>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Whey Beverages ke liye Poora HACCP Plan Summary</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-xs">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-2 py-1">CCP</th>
                            <th class="border border-gray-300 px-2 py-1">Step (Charan)</th>
                            <th class="border border-gray-300 px-2 py-1">Hazard (Khatraa)</th>
                            <th class="border border-gray-300 px-2 py-1">Critical Limit</th>
                            <th class="border border-gray-300 px-2 py-1">Monitoring (Nigrani)</th>
                            <th class="border border-gray-300 px-2 py-1">Corrective Action (Sudharaatmak Kaarvaahi)</th>
                            <th class="border border-gray-300 px-2 py-1">Verification (Satyaapan)</th>
                            <th class="border border-gray-300 px-2 py-1">Records (Abhilekh)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-300 px-2 py-1 font-bold">CCP-1 (B)</td>
                            <td class="border border-gray-300 px-2 py-1">Pehla Pasteurization</td>
                            <td class="border border-gray-300 px-2 py-1">Vegetative pathogens ka bach jaana (<em>Salmonella, Listeria, E. coli</em>)</td>
                            <td class="border border-gray-300 px-2 py-1">≥72°C ≥15 sec ke liye</td>
                            <td class="border border-gray-300 px-2 py-1">Lagaataar temp & flow monitoring; chart recorder</td>
                            <td class="border border-gray-300 px-2 py-1">Divert karo aur re-pasteurize karo; hold karo aur evaluate karo</td>
                            <td class="border border-gray-300 px-2 py-1">Phosphatase test (negative hona chahiye); sensor calibration quarterly</td>
                            <td class="border border-gray-300 px-2 py-1">Pasteurization log; FDV activation log; calibration records</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-2 py-1 font-bold">CCP-2 (B)</td>
                            <td class="border border-gray-300 px-2 py-1">Final Heat Treatment</td>
                            <td class="border border-gray-300 px-2 py-1">Pathogens & spoilage organisms ka bach jaana; spore survival (UHT mein)</td>
                            <td class="border border-gray-300 px-2 py-1">Product-specific (jaise ≥90°C/15s ya ≥137°C/4s)</td>
                            <td class="border border-gray-300 px-2 py-1">Lagaataar temp/time; flow rate; pressure (UHT)</td>
                            <td class="border border-gray-300 px-2 py-1">Divert karo; quarantine karo; jaanch karo; agar possible ho toh re-process karo</td>
                            <td class="border border-gray-300 px-2 py-1">Incubation test (37°C/7d + 55°C/7d UHT ke liye); micro sampling; calibration</td>
                            <td class="border border-gray-300 px-2 py-1">UHT/Pasteurization charts; incubation results; deviation reports</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-2 py-1 font-bold">CCP-3 (B)</td>
                            <td class="border border-gray-300 px-2 py-1">Aseptic Filling (sirf UHT)</td>
                            <td class="border border-gray-300 px-2 py-1">Non-sterile container/environment se post-process contamination</td>
                            <td class="border border-gray-300 px-2 py-1">H₂O₂ conc. ≥35%; contact temp ≥70°C; bacha hua H₂O₂ <0.5 ppm; chamber positive pressure</td>
                            <td class="border border-gray-300 px-2 py-1">H₂O₂ concentration (refractometer); temp sensor; residual test strips; ΔP gauge</td>
                            <td class="border border-gray-300 px-2 py-1">Filling roko; affected packs quarantine karo; sterility restore karo; verification ke baad restart karo</td>
                            <td class="border border-gray-300 px-2 py-1">Package integrity testing (dye/pressure test); commercial sterility incubation</td>
                            <td class="border border-gray-300 px-2 py-1">Filling logs; H₂O₂ test records; sterility test results</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-2 py-1 font-bold">CCP-4 (P)</td>
                            <td class="border border-gray-300 px-2 py-1">Metal Detection / X-ray</td>
                            <td class="border border-gray-300 px-2 py-1">Physical contamination (dhatu, kaanch ke tukde)</td>
                            <td class="border border-gray-300 px-2 py-1">Fe ≥1.5mm, Non-Fe ≥2.0mm, SS ≥2.5mm</td>
                            <td class="border border-gray-300 px-2 py-1">Har pack; test pieces har 1–2 ghante</td>
                            <td class="border border-gray-300 px-2 py-1">Reject karo; quarantine karo; source jaanch karo; pichle pass check ke baad ke sabhi packs re-test karo</td>
                            <td class="border border-gray-300 px-2 py-1">Test piece verification log; reject log review; saalon mein detector calibration</td>
                            <td class="border border-gray-300 px-2 py-1">Metal detection test log; reject records; maintenance records</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Operational Prerequisite Programs (oPRPs) ka Summary</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-3 py-1 text-left">oPRP</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Step (Charan)</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Khatraa (Hazard Addressed)</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Control Measure (Niyantran Upaay)</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Monitoring (Nigrani)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-3 py-1">oPRP-1</td><td class="border border-gray-300 px-3 py-1">Clarification & Fat Separation</td><td class="border border-gray-300 px-3 py-1">Chemical (lipid oxidation products)</td><td class="border border-gray-300 px-3 py-1">Centrifugal separation karke fat <0.04% karna</td><td class="border border-gray-300 px-3 py-1">Har batch mein fat content Gerber/IR se check karo</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">oPRP-2</td><td class="border border-gray-300 px-3 py-1">pH Adjustment</td><td class="border border-gray-300 px-3 py-1">Biological (<em>C. botulinum</em> pH >4.6 par)</td><td class="border border-gray-300 px-3 py-1">Acidification karke pH <4.6 (target <4.0)</td><td class="border border-gray-300 px-3 py-1">Har batch mein pH meter reading, 2 independent measurements</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">oPRP-3</td><td class="border border-gray-300 px-3 py-1">Deproteinization (clear drinks)</td><td class="border border-gray-300 px-3 py-1">Quality (haze, sedimentation)</td><td class="border border-gray-300 px-3 py-1">Heat-acid treatment + centrifugation</td><td class="border border-gray-300 px-3 py-1">Turbidity (NTU < 5 clear ke liye), visual check</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">oPRP-4</td><td class="border border-gray-300 px-3 py-1">Ingredient Receiving</td><td class="border border-gray-300 px-3 py-1">Chemical (allergens, contaminants), Biological (cheeni mein spores)</td><td class="border border-gray-300 px-3 py-1">Supplier approval; COA verification; incoming inspection</td><td class="border border-gray-300 px-3 py-1">Har batch mein COA review; periodic third-party testing</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">oPRP-5</td><td class="border border-gray-300 px-3 py-1">CIP (Clean-in-Place)</td><td class="border border-gray-300 px-3 py-1">Biological (biofilm, cross-contamination)</td><td class="border border-gray-300 px-3 py-1">Validated CIP cycle (alkali → rinse → acid → rinse → sanitize)</td><td class="border border-gray-300 px-3 py-1">Har CIP cycle mein Temperature, concentration, flow rate, contact time; ATP swab verification</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Finished Product ke Quality Parameters aur Testing Schedule</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-3 py-1 text-left">Parameter</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Specification (Maanak)</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Test Method (Parikshan Vidhi)</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Frequency (Aavritti)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-3 py-1">pH</td><td class="border border-gray-300 px-3 py-1">3.0–4.2 (product-specific)</td><td class="border border-gray-300 px-3 py-1">Digital pH meter (IS 14434)</td><td class="border border-gray-300 px-3 py-1">Har batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">TSS (°Brix)</td><td class="border border-gray-300 px-3 py-1">12–20°Brix (product-specific)</td><td class="border border-gray-300 px-3 py-1">Digital refractometer</td><td class="border border-gray-300 px-3 py-1">Har batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Titratable Acidity</td><td class="border border-gray-300 px-3 py-1">0.3–0.8% (citric acid ke roop mein)</td><td class="border border-gray-300 px-3 py-1">0.1N NaOH se Titration</td><td class="border border-gray-300 px-3 py-1">Har batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Protein Content</td><td class="border border-gray-300 px-3 py-1">0.3–0.8% (standard); 5–8% tak (protein-enriched)</td><td class="border border-gray-300 px-3 py-1">Kjeldahl (N × 6.38) ya Dumas method</td><td class="border border-gray-300 px-3 py-1">Har batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Total Solids</td><td class="border border-gray-300 px-3 py-1">12–22%</td><td class="border border-gray-300 px-3 py-1">Oven drying (105°C constant weight tak)</td><td class="border border-gray-300 px-3 py-1">Daily composite</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Fat</td><td class="border border-gray-300 px-3 py-1"><0.1% (clear); <0.5% (cloudy)</td><td class="border border-gray-300 px-3 py-1">Gerber method / Mojonnier</td><td class="border border-gray-300 px-3 py-1">Har batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Turbidity (sirf clear type ke liye)</td><td class="border border-gray-300 px-3 py-1"><10 NTU</td><td class="border border-gray-300 px-3 py-1">Nephelometer</td><td class="border border-gray-300 px-3 py-1">Har batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Viscosity</td><td class="border border-gray-300 px-3 py-1">5–50 cP 25°C par (product-specific)</td><td class="border border-gray-300 px-3 py-1">Brookfield viscometer (60 rpm, spindle #1)</td><td class="border border-gray-300 px-3 py-1">Daily composite</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Rang (Colour) (L*, a*, b*)</td><td class="border border-gray-300 px-3 py-1">Product-specific (standard se ΔE < 3.0)</td><td class="border border-gray-300 px-3 py-1">Hunter Lab colorimeter</td><td class="border border-gray-300 px-3 py-1">Har batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Sediment / Sedimentation Index</td><td class="border border-gray-300 px-3 py-1">4°C par 24 ghante baad <5%</td><td class="border border-gray-300 px-3 py-1">Graduated cylinder (100 mL, 24h khada rakhein)</td><td class="border border-gray-300 px-3 py-1">Har batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Sensory Evaluation (Swaad Parikshan)</td><td class="border border-gray-300 px-3 py-1">9-point hedonic scale par Score ≥7/9</td><td class="border border-gray-300 px-3 py-1">Trained panel (kam se kam 6 panelists)</td><td class="border border-gray-300 px-3 py-1">Har batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">TPC</td><td class="border border-gray-300 px-3 py-1"><100 CFU/mL (pasteurized); sterile (UHT)</td><td class="border border-gray-300 px-3 py-1">Pour plate (PCA, 37°C, 48h)</td><td class="border border-gray-300 px-3 py-1">Har batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Coliforms</td><td class="border border-gray-300 px-3 py-1"><10 CFU/mL (pasteurized); absent (UHT)</td><td class="border border-gray-300 px-3 py-1">VRBA / LST broth</td><td class="border border-gray-300 px-3 py-1">Har batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Yeast & Mould</td><td class="border border-gray-300 px-3 py-1"><10 CFU/mL</td><td class="border border-gray-300 px-3 py-1">DRBC agar, 25°C, 5 din</td><td class="border border-gray-300 px-3 py-1">Har batch</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Commercial Sterility (UHT)</td><td class="border border-gray-300 px-3 py-1">37°C/7 din + 55°C/7 din par koi growth nahi; pack phoolna nahi chahiye</td><td class="border border-gray-300 px-3 py-1">IS 2795 ke anusaar incubation</td><td class="border border-gray-300 px-3 py-1">Har batch se 5 packs</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Preservative Residue</td><td class="border border-gray-300 px-3 py-1">Benzoate <200 ppm; Sorbate <300 ppm</td><td class="border border-gray-300 px-3 py-1">HPLC / UV spectrophotometry</td><td class="border border-gray-300 px-3 py-1">Haftewaari</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Heavy Metals (Pb, As)</td><td class="border border-gray-300 px-3 py-1">Pb <0.5 ppm; As <0.1 ppm</td><td class="border border-gray-300 px-3 py-1">AAS / ICP-MS</td><td class="border border-gray-300 px-3 py-1">Maheenawaari / har supplier lot par</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Aflatoxin M₁</td><td class="border border-gray-300 px-3 py-1"><0.5 μg/kg</td><td class="border border-gray-300 px-3 py-1">ELISA / HPLC</td><td class="border border-gray-300 px-3 py-1">Maheenawaari</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Whey Beverages mein Aam Dosh (Common Defects): Kaaran aur Upaay</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-3 py-1 text-left">Dosh (Defect)</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Vaigyanik Kaaran (Scientific Cause)</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Upaay (Remedy)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Protein ka talna / dhundlapan (sedimentation / haze)</td><td class="border border-gray-300 px-3 py-1">Adhuri deproteinization; pH pI ke bahut kareeb (4.2–5.2); kam stabilizer; adhura homogenization; neutral pH par garmi se β-Lg aggregation</td><td class="border border-gray-300 px-3 py-1">pH <3.8 tak kam karo; pectin 0.3–0.5% tak badhao; sahi homogenization ensure karo (>150 bar); clear drinks ke liye puri deproteinization karo</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Storage mein browning / rang gahera hona</td><td class="border border-gray-300 px-3 py-1">Non-enzymatic Maillard reaction — reducing sugars (lactose) aur free amino groups (whey proteins mein lysine residues) ke beech; zyada temperature, zyada pH, aur kam water activity par tez hoti hai</td><td class="border border-gray-300 px-3 py-1">Storage temperature <25°C rakho; lactose kam karo (UF permeate se); non-reducing sweeteners use karo (sucralose); pH kam rakho; dissolved O₂ minimize karo</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Oxidized / gatte jaisa swaad (cardboard flavour)</td><td class="border border-gray-300 px-3 py-1">Bache hue fat ka lipid autoxidation; riboflavin dwara photosensitized oxidation (Type II mechanism: riboflavin* + ³O₂ → riboflavin + ¹O₂); dhatu se catalyzed (Cu²⁺, Fe²⁺)</td><td class="border border-gray-300 px-3 py-1">Fat <0.04% tak kam karo; opaque packaging use karo; ascorbic acid daalo (O₂ scavenger); de-aerate karo; metals ko citric acid/EDTA se chelate karo</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Paka hua / gandhak jaisa swaad (cooked / sulfurous flavour)</td><td class="border border-gray-300 px-3 py-1">β-Lg denaturation se free sulfhydryl groups (Cys-121) ka expose hona; >75°C par H₂S aur dimethyl sulfide banana</td><td class="border border-gray-300 px-3 py-1">Thermal exposure minimize karo (LTLT ki jagah HTST use karo); garmi se pehle acidify karo (same temperature par denaturation kam hota hai); indirect UHT ki jagah direct UHT (steam injection) use karo</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Phase separation (paani alag hona)</td><td class="border border-gray-300 px-3 py-1">Non-adsorbing polysaccharides ki zyada concentration se proteins ka depletion flocculation; kam stabilizer; zyada storage time</td><td class="border border-gray-300 px-3 py-1">Stabilizer ki concentration aur type optimize karo; sahi homogenization ensure karo; suspension ke liye MCC daalo; particle size kam karo</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Kasaila / chalky mouthfeel (Astringent)</td><td class="border border-gray-300 px-3 py-1">Kam pH par whey protein ka salivary proteins (mucin) ke saath interaction (precipitation); zyada mineral (Ca²⁺) content; zyada acidity</td><td class="border border-gray-300 px-3 py-1">Kasailapan mask karne ke liye sweetener daalo; buffering salts (sodium citrate) use karo; pH optimize karo; zaroorat na ho toh protein kam karo; lubrication ke liye fat ya pectin daalo</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Gas banna / pack phoolna</td><td class="border border-gray-300 px-3 py-1">Post-pasteurization contamination yeasts (<em>Saccharomyces, Candida</em>) ya heterofermentative LAB se; bachi hui lactose ka fermentation se CO₂ aur ethanol banana</td><td class="border border-gray-300 px-3 py-1">Filler aur closures ki sanitation improve karo; pasteurization ki adequacy verify karo (CCP-2); potassium sorbate daalo (anti-yeast); filling hygiene ensure karo</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Davaayi jaisa / dhuaandaar kharab swaad (Medicinal off-flavour)</td><td class="border border-gray-300 px-3 py-1"><em>Alicyclobacillus acidoterrestris</em> ka spoilage — guaiacol (2-methoxyphenol) aur 2,6-dibromophenol produce karta hai; thermoacidophilic spore-former hot-fill mein bhi bach jaata hai</td><td class="border border-gray-300 px-3 py-1">Fruit pulp/sugar suppliers ko <em>Alicyclobacillus</em> contamination ke liye screen karo; hot-fill temperature ≥93°C badhao ≥3 min hold ke saath; nisin addition consider karo; raw materials test karo (BAM method)</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1 font-semibold">Zyada meetha / asantulit swaad</td><td class="border border-gray-300 px-3 py-1">Zyada bachi hui lactose (4.5–5.0%) plus added sugar; balance karne ke liye kam acidity</td><td class="border border-gray-300 px-3 py-1">Lactose ko β-galactosidase se hydrolyze karo (perceived sweetness 40% badh jaati hai — glucose + galactose lactose se meethe hain); uske anusaar added sugar kam karo; sugar:acid ratio balance karo (optimal range: 12–18 TSS : 0.3–0.6% acidity)</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shelf Life ke Nirdhaarak aur Kinetic Considerations</h3>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-3">
                <li><strong>Microbial Shelf Life:</strong> Sabse zyada heat-resistant bach jaane waala organism decide karta hai. Pasteurized whey beverages (pH 3.5–4.0) mein, psychrotrophic spoilage organisms (jaise <em>Pseudomonas</em>) aur yeasts primary limiters hain. Growth Baranyi model follow karti hai: λ (lag phase) = 5°C par yeasts ke liye 2–7 din; μ_max (maximum growth rate) = 5°C par 0.02–0.06 h⁻¹. Shelf life ka ant aamtaur par total count 10⁵–10⁶ CFU/mL pahunchne ya sensory rejection hone par mana jaata hai.</li>
                <li><strong>Chemical Shelf Life:</strong> Maillard browning concentrated systems mein zero-order kinetics aur dilute systems mein first-order kinetics follow karti hai. Rate constant k_browning 25°C par ≈ 0.001–0.005 absorbance units (420 nm par) per din whey beverages mein. Whey systems mein Maillard browning ke liye Activation energy (Eₐ): 80–120 kJ/mol.</li>
                <li><strong>Physical Shelf Life:</strong> Sedimentation Stokes' Law follow karta hai (upar bataya gaya). Bache hue fat globules ka creaming: v_cream = (2r²Δρg)/(9η) — rate homogenization aur stabilizers se badhne waali viscosity se kam hota hai.</li>
                <li><strong>Nutritional Shelf Life:</strong> Vitamin C (ascorbic acid) degradation first-order kinetics follow karta hai: C(t) = C₀ × e^(−kt). pH 3.5 par aerated whey beverage mein 25°C par, t₁/₂ ≈ 30–60 din. De-aerated, roshni se bachaye packaging mein, t₁/₂ 90–180 din tak badh jaata hai.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Accelerated Shelf Life Testing (ASLT) Protocol</h3>
            <p>Poori avadhi tak intezaar kiye bina shelf life predict karne ke liye:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Samples ko 3 elevated temperatures par (jaise 25°C, 35°C, 45°C) normal storage temperature (pasteurized ke liye 5°C, UHT ke liye 25°C) ke alaawa store karo.</li>
                <li>Quality parameters (pH, acidity, colour-ΔE, microbial count, sensory score, vitamin C retention) ko niyamit antral par monitor karo.</li>
                <li>Arrhenius equation apply karo: k = A × e^(−Eₐ/RT) — isse degradation rates ko target storage temperature par extrapolate kar sakte hain.</li>
                <li>Whey beverages mein zyaadatar quality parameters ka Q₁₀: 1.8–3.0 (matlab har 10°C storage temperature badhne par shelf life lagbhag aadhi se tihaai ho jaati hai).</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Ek Typical Whey Beverage ka Nutritional Profile (per 200 mL Serving)</h3>
            <div class="overflow-x-auto mt-3">
                <table class="min-w-full border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border border-gray-300 px-3 py-1 text-left">Poshak Tatva (Nutrient)</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Standard Whey Drink</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">Protein-Enriched Variant</th>
                            <th class="border border-gray-300 px-3 py-1 text-left">% RDA (Standard)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-3 py-1">Urja / Energy (kcal)</td><td class="border border-gray-300 px-3 py-1">80–120</td><td class="border border-gray-300 px-3 py-1">100–150</td><td class="border border-gray-300 px-3 py-1">4–6%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Total Carbohydrates (g)</td><td class="border border-gray-300 px-3 py-1">18–28</td><td class="border border-gray-300 px-3 py-1">15–22</td><td class="border border-gray-300 px-3 py-1">—</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">  jismein se Sugars (g)</td><td class="border border-gray-300 px-3 py-1">16–26</td><td class="border border-gray-300 px-3 py-1">12–18</td><td class="border border-gray-300 px-3 py-1">—</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Protein (g)</td><td class="border border-gray-300 px-3 py-1">1.0–1.8</td><td class="border border-gray-300 px-3 py-1">6–16</td><td class="border border-gray-300 px-3 py-1">2–3% / 10–30%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Total Fat (g)</td><td class="border border-gray-300 px-3 py-1"><0.2</td><td class="border border-gray-300 px-3 py-1"><0.5</td><td class="border border-gray-300 px-3 py-1"><1%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Calcium (mg)</td><td class="border border-gray-300 px-3 py-1">80–200</td><td class="border border-gray-300 px-3 py-1">100–250</td><td class="border border-gray-300 px-3 py-1">8–20%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Potassium (mg)</td><td class="border border-gray-300 px-3 py-1">200–350</td><td class="border border-gray-300 px-3 py-1">250–400</td><td class="border border-gray-300 px-3 py-1">6–10%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Phosphorus (mg)</td><td class="border border-gray-300 px-3 py-1">80–150</td><td class="border border-gray-300 px-3 py-1">100–200</td><td class="border border-gray-300 px-3 py-1">8–15%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Vitamin B₂ (mg)</td><td class="border border-gray-300 px-3 py-1">0.2–0.4</td><td class="border border-gray-300 px-3 py-1">0.3–0.5</td><td class="border border-gray-300 px-3 py-1">15–30%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Vitamin C (mg) (agar fortified ho)</td><td class="border border-gray-300 px-3 py-1">20–60</td><td class="border border-gray-300 px-3 py-1">30–80</td><td class="border border-gray-300 px-3 py-1">25–100%</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">Sodium (mg)</td><td class="border border-gray-300 px-3 py-1">80–120</td><td class="border border-gray-300 px-3 py-1">90–140</td><td class="border border-gray-300 px-3 py-1">4–6%</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Navachar aur Ubharti Technologies (Innovations and Emerging Technologies)</h3>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-3">
                <li><strong>High-Pressure Processing (HPP):</strong> Non-thermal pasteurization — 400–600 MPa par 1–5 minute ke liye; vegetative pathogens ko maarta hai jabki heat-sensitive vitamins, rang, aur taza swaad bachaata hai. HPP 600 MPa/3 min par whey-based beverages mein <em>E. coli</em>, <em>Salmonella</em>, aur <em>Listeria</em> mein >5 log reduction milta hai. β-Lg HPP mein conformational changes se guzarta hai (>200 MPa par tertiary structure unfold hoti hai) lekin pH &lt;4.0 par visible aggregates nahi bante, jisse HPP acidic whey drinks ke liye ideal hai.</li>
                <li><strong>Pulsed Electric Field (PEF):</strong> Electric field pulses (20–40 kV/cm, 1–100 μs pulse width, total treatment time &lt;1 ms) microbial cell membranes mein electroporation karte hain. Kam thermal input (&lt;40°C) ke saath 3–6 log reduction milta hai. Native whey protein structure >95% bachta hai aur vitamin C >98% retain hota hai.</li>
                <li><strong>UV-C Processing:</strong> Thin-film reactors (Dean flow ya coiled tube design) mein 254 nm par continuous-flow UV treatment (dose: 20–50 mJ/cm²). Vegetative bacteria aur yeasts ke against effective hai. Challenge: turbid beverages mein UV transmittance kam hoti hai — yeh primarily clear/deproteinized whey drinks ke liye effective hai (>70% transmittance at 254 nm).</li>
                <li><strong>Enzymatic Lactose Hydrolysis:</strong> β-galactosidase se treatment (<em>Kluyveromyces lactis</em> ya <em>Aspergillus oryzae</em> se; 2000–5000 NLU/L at 37°C for 2–4 hours ya 4°C for 12–18 hours) lactose ko glucose + galactose mein hydrolyze karta hai. Fayde: (a) lactose-intolerant consumers ke liye suitable (~70% Indian population mein kuch degree ki lactase deficiency hoti hai); (b) sweetness perception ~40% badhti hai (added sugar ki zarurat kam hoti hai); (c) frozen whey beverages ke liye freezing point depression improve hota hai; (d) Maillard browning substrate reduce hota hai (glucose lactose se tezi se brown hota hai, lekin net effect formulation par depend karta hai).</li>
                <li><strong>Microencapsulated Probiotics:</strong> Alginate-chitosan microcapsules (diameter: 100–500 μm) mein <em>Lactobacillus rhamnosus</em> GG ya <em>Bifidobacterium longum</em> ka encapsulation, cultures ko whey beverages ke low pH (pH 3.0–4.0) se bachata hai — 4°C par 6–8 weeks tak >10⁶ CFU/mL viability maintain hoti hai, jabki free cells 2 weeks baad &lt;10⁴ CFU/mL reh jaate hain.</li>
                <li><strong>Membrane Processing Integration:</strong> Nanofiltration (NF, MWCO 150–300 Da) selectively lactose aur minerals concentrate kar sakti hai jabki whey ko partially demineralize karti hai (40–60% mineral removal) — isse excessive saltiness kam hoti hai aur sports drink applications ke liye customized mineral profiles mil sakti hain.</li>
                <li><strong>Supercritical CO₂ Processing:</strong> SC-CO₂ (pressure: 100–250 bar; temperature: 35–60°C; time: 10–60 min) simultaneously whey beverages ko pasteurize aur carbonate karta hai — preservative-free, naturally sparkling product milta hai jisme microbial count mein 3–5 log reduction hoti hai.</li>
                <li><strong>Whey Protein Nanofibrils:</strong> pH 2.0 par β-Lg ko 80°C par 5–10 hours heating karne se amyloid-like protein nanofibrils bante hain (length: 1–10 μm, diameter: 2–4 nm) jinmein exceptional thickening, gelling, aur foam-stabilizing properties hoti hain. Inhe whey beverages mein synthetic stabilizers ki jagah natural functional ingredients ke roop mein use kiya ja sakta hai.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Environmental aur Economic Considerations</h3>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>BOD/COD Reduction:</strong> Liquid whey (BOD ~35,000 mg/L) ko beverage mein convert karne se effluent load 100% reduce ho jaata hai. Ek tonne liquid whey agar water body mein discharge ki jaaye, toh yeh 450 logon ke sewage ke barabar hai — ek din ka.</li>
                <li><strong>Value Addition:</strong> Liquid whey as animal feed: ₹1–2/litre. Packaged whey beverage ke roop mein: ₹15–30/200 mL (retail). Value multiplication factor: 15–60×.</li>
                <li><strong>Water Footprint:</strong> Kyunki whey mein pehle se ~93% water hota hai, whey beverages ka water footprint conventional beverages se kaafi kam hota hai. Estimated water footprint: 0.2–0.5 L water/L beverage (conventional soft drinks ke 1.5–3.0 L/L ke comparison mein).</li>
                <li><strong>Carbon Footprint:</strong> Existing cheese/paneer operations se whey beverage production mein sirf 0.05–0.15 kg CO₂e per litre add hota hai (marginal processing energy). Whey ko anaerobic wastewater treatment mein jaane se rokne par methane (CH₄) emissions bhi avoid hote hain (GWP = 28× CO₂).</li>
                <li><strong>Circular Economy:</strong> Deproteinization ke dauran alag kiya gaya protein WPC mein dry kiya ja sakta hai; separated fat recombined dairy products mein use ho sakta hai; excess minerals animal feed supplementation mein kaam aate hain — isse near-zero waste achieve hota hai.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Clean-in-Place (CIP) Protocol — Whey Beverage Processing Equipment ke liye</h3>
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
                        <tr><td class="border border-gray-300 px-3 py-1">1</td><td class="border border-gray-300 px-3 py-1">Pre-rinse (paani)</td><td class="border border-gray-300 px-3 py-1">—</td><td class="border border-gray-300 px-3 py-1">40–50</td><td class="border border-gray-300 px-3 py-1">5–10</td><td class="border border-gray-300 px-3 py-1">Gross soil remove karna (sugars, proteins)</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">2</td><td class="border border-gray-300 px-3 py-1">Caustic wash (NaOH)</td><td class="border border-gray-300 px-3 py-1">1.0–2.0%</td><td class="border border-gray-300 px-3 py-1">70–85</td><td class="border border-gray-300 px-3 py-1">15–30</td><td class="border border-gray-300 px-3 py-1">Fats saponify karna; denatured proteins solubilize karna; biofilm matrix remove karna</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">3</td><td class="border border-gray-300 px-3 py-1">Intermediate rinse (paani)</td><td class="border border-gray-300 px-3 py-1">—</td><td class="border border-gray-300 px-3 py-1">40–50</td><td class="border border-gray-300 px-3 py-1">5–10</td><td class="border border-gray-300 px-3 py-1">Alkali residues remove karna</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">4</td><td class="border border-gray-300 px-3 py-1">Acid wash (HNO₃ ya phosphoric acid)</td><td class="border border-gray-300 px-3 py-1">0.5–1.5%</td><td class="border border-gray-300 px-3 py-1">55–70</td><td class="border border-gray-300 px-3 py-1">10–20</td><td class="border border-gray-300 px-3 py-1">Mineral deposits dissolve karna (calcium phosphate, milkstone); scale buildup rokna</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">5</td><td class="border border-gray-300 px-3 py-1">Final rinse (paani)</td><td class="border border-gray-300 px-3 py-1">—</td><td class="border border-gray-300 px-3 py-1">Ambient</td><td class="border border-gray-300 px-3 py-1">5–10</td><td class="border border-gray-300 px-3 py-1">Acid residues remove karna (conductivity &lt;50 μS/cm)</td></tr>
                        <tr><td class="border border-gray-300 px-3 py-1">6</td><td class="border border-gray-300 px-3 py-1">Sanitize (Peracetic acid ya hot water)</td><td class="border border-gray-300 px-3 py-1">PAA: 100–200 ppm; ya Hot water: 90–95°C</td><td class="border border-gray-300 px-3 py-1">Ambient (PAA) / 90–95 (hot water)</td><td class="border border-gray-300 px-3 py-1">10–15</td><td class="border border-gray-300 px-3 py-1">Remaining microorganisms ko khatam karna; PAA ke liye rinse ki zarurat nahi ≤200 ppm par (self-decomposing hota hai)</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2"><strong>CIP Verification:</strong> CIP ke baad equipment surfaces par ATP bioluminescence swabs — target: &lt;150 RLU (Relative Light Units); visual inspection; final rinse water pH (6.5–7.5) aur conductivity (&lt;50 μS/cm); microbiological swabs (TPC &lt;1 CFU/cm²) weekly.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Whey Beverage Manufacturing mein Key Scientific Principles ka Summary</h3>
            <div class="bg-gray-50 p-4 rounded mt-3 space-y-3">
                <p><strong>1. Protein Chemistry:</strong> β-Lg (pI = 5.2) ka alag-alag pH values par behaviour beverage clarity govern karta hai. pH 4.0 se neeche, electrostatic repulsion severe heat treatment ke dauran bhi aggregation rokti hai. Yeh clear whey beverages ke liye sabse important principle hai.</p>
                <p><strong>2. Hurdle Technology:</strong> Whey beverages mein multiple preservation hurdles use hote hain: low pH (&lt;4.5, <em>C. botulinum</em> inhibit karta hai), thermal processing (vegetative cells aur spores destroy karta hai), chemical preservatives (sorbate/benzoate yeasts/moulds inhibit karte hain), low water activity (added sugars se, a_w 0.94–0.98), aur refrigeration (pasteurized products ke liye). Koi bhi akela hurdle kaafi nahi hota; synergistic combination hi safety aur stability ensure karta hai.</p>
                <p><strong>3. Colloidal Stability:</strong> Whey beverages complex colloidal systems hain. Stability DLVO theory par depend karti hai (van der Waals attractive forces aur electrical double-layer repulsive forces ka balance), adsorbed polymers (pectin, CMC) se steric stabilization, aur gravitational effects (Stokes' Law). Formulation aur processing teeno ko optimize karni chahiye.</p>
                <p><strong>4. Thermal Processing Optimization:</strong> z-value concept optimization allow karta hai: β-Lg denaturation ke liye z ≈ 6.5°C (quality factor), jabki most pathogens ke liye z ≈ 5–10°C (safety factor). Kyunki z-values similar hain, low-pH formulation (jo ek given temperature par protein denaturation dramatically reduce karta hai) quality maximize karte hue safety ensure karne ki key strategy hai.</p>
                <p><strong>5. Maillard Browning:</strong> Whey systems mein dominant chemical deterioration pathway — temperature (Arrhenius kinetics, Eₐ = 80–120 kJ/mol), pH (higher pH par accelerated), water activity (a_w 0.6–0.8 par maximum), aur reactant concentrations se govern hota hai. Low pH aur low storage temperature primary control measures hain.</p>
            </div>
        `
    }
}

    
