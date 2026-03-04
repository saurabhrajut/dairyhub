export const barfiContent = {
    en: {
        title: "Barfi Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Barfi</h3>
            <p>Barfi (also spelled Burfi or Barfee) is one of the most iconic and widely consumed traditional Indian milk-based confections, classified as a semi-solid indigenous dairy product (IDP). It belongs to the category of khoa-based sweets and represents one of the oldest forms of milk preservation through concentration and sugar addition. Barfi is essentially a milk fudge produced by the controlled desiccation of milk (via khoa) combined with sugar, followed by precise cooling to achieve its characteristic firm yet smooth, slightly granular texture.</p>

            <p>Its name is derived from the Persian word <strong>'barf'</strong> (برف), meaning snow, alluding to its traditionally white, opaque appearance. However, modern variants exhibit diverse colors and flavors depending on added ingredients (saffron/kesar barfi, pistachio barfi, chocolate barfi, coconut barfi, cashew barfi, etc.).</p>

            <p><strong>Historical and Cultural Significance:</strong> Barfi has been an integral part of Indian culinary heritage for centuries, with references in medieval texts. It is indispensable during festivals (Diwali, Eid, Holi, Raksha Bandhan), weddings, religious ceremonies, and social celebrations. India produces an estimated 1.5-2.0 million metric tons of khoa-based sweets annually, with barfi constituting approximately 30-40% of this volume.</p>

            <p><strong>Market Context:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li>Indian traditional sweets market: >$10 billion annually (growing 15-20% per year)</li>
                <li>Approximately 35-40% of India's total milk production (~55 million tons) is converted into traditional dairy products</li>
                <li>Barfi accounts for ~12-15% of all khoa consumption in India</li>
                <li>Organized sector contribution: Growing from <10% to ~25% as branded sweet companies expand</li>
                <li>Export potential: Increasing demand from Indian diaspora in USA, UK, UAE, Singapore, Australia</li>
            </ul>

            <p><strong>Scientific Classification:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Product Category:</strong> Heat-desiccated, sugar-added, semi-solid dairy confection</li>
                <li><strong>Water Activity (a<sub>w</sub>):</strong> 0.80-0.90 (intermediate moisture food)</li>
                <li><strong>pH:</strong> 6.2-6.8 (near neutral, slightly acidic due to Maillard reaction products)</li>
                <li><strong>Shelf Life:</strong> 7-15 days at ambient temperature (25-30°C), 30-60 days under refrigeration (4-7°C)</li>
                <li><strong>Preservation Principle:</strong> Reduced water activity through concentration + sugar addition (hurdle technology)</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Barfi</h3>
            <p>Barfi falls under the category of <strong>'Khoa based sweets'</strong> in the FSSAI (Food Safety and Standards Authority of India) regulations under <strong>FSS (Food Products Standards and Food Additives) Regulations, 2011</strong>. The standards ensure compositional integrity, nutritional quality, and consumer protection against adulteration.</p>
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
                        <tr><td class="p-2 border"><strong>Total Solids (min, %)</strong></td><td class="p-2 border">75.0</td><td class="p-2 border">Ensures sufficient desiccation for a<sub>w</sub> reduction (<0.90) → microbial stability, proper texture development</td></tr>
                        <tr><td class="p-2 border"><strong>Milk Fat (on dry basis, min, %)</strong></td><td class="p-2 border">17.5</td><td class="p-2 border">Ensures genuine milk origin, prevents substitution with cheaper fats; contributes to flavor, mouthfeel, and smooth texture</td></tr>
                        <tr><td class="p-2 border"><strong>Sucrose (on dry basis, max, %)</strong></td><td class="p-2 border">35.0</td><td class="p-2 border">Prevents excessive sugar addition to mask poor quality khoa; maintains milk solid-to-sugar ratio for authentic taste and nutritional profile</td></tr>
                    </tbody>
                </table>
            </div>

            <p class="mt-4"><strong>Additional Regulatory Requirements (BIS: IS 5560:1990, FSSAI):</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Moisture:</strong> Maximum 25% (ensures adequate preservation; >25% leads to rapid microbial spoilage)</li>
                <li><strong>Titratable Acidity:</strong> Maximum 0.5% (as lactic acid) — high acidity indicates stale khoa or microbial contamination</li>
                <li><strong>Total Ash:</strong> Maximum 3.5% — excessive ash indicates adulteration with starch, chalk, or other mineral adulterants</li>
                <li><strong>Added Starch:</strong> Not permitted (commonly used adulterant to increase bulk and reduce cost)</li>
                <li><strong>Permitted Additives:</strong> Natural colors (saffron, turmeric), flavors (cardamom, rose water), nuts (pistachios, almonds, cashews), silver leaf (varak)</li>
                <li><strong>Microbiological Standards:</strong> Total Plate Count <50,000 CFU/g, Coliform count <100 CFU/g, Yeast & Mold <100 CFU/g, E. coli: Absent/g, Salmonella: Absent/25g, Staphylococcus aureus: <100 CFU/g</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Science of Barfi Making: Fundamental Principles</h3>

            <h4 class="font-semibold mt-4 mb-2">1. The Role of Khoa as Base Material</h4>
            <p>Khoa (also called mawa or khoya) is the essential base ingredient of barfi. It is a heat-desiccated dairy product obtained by continuous boiling and stirring of milk in an open pan until the total solids reach 65-72%. Understanding khoa's physicochemical properties is critical to understanding barfi quality.</p>

            <p><strong>Types of Khoa Used for Barfi:</strong></p>
            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Khoa Type</th>
                        <th class="border border-gray-300 px-4 py-2">Moisture (%)</th>
                        <th class="border border-gray-300 px-4 py-2">Fat (%)</th>
                        <th class="border border-gray-300 px-4 py-2">Texture</th>
                        <th class="border border-gray-300 px-4 py-2">Best Suited For</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Pindi</strong></td>
                        <td class="border border-gray-300 px-4 py-2">20-25</td>
                        <td class="border border-gray-300 px-4 py-2">25-30</td>
                        <td class="border border-gray-300 px-4 py-2">Hard, circular pat, smooth, cohesive body</td>
                        <td class="border border-gray-300 px-4 py-2"><strong>Barfi (primary choice)</strong>, Peda</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Danedar</strong></td>
                        <td class="border border-gray-300 px-4 py-2">25-30</td>
                        <td class="border border-gray-300 px-4 py-2">20-25</td>
                        <td class="border border-gray-300 px-4 py-2">Granular, loose grains</td>
                        <td class="border border-gray-300 px-4 py-2">Kalakand, some barfi variants</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Dhap</strong></td>
                        <td class="border border-gray-300 px-4 py-2">40-50</td>
                        <td class="border border-gray-300 px-4 py-2">22-28</td>
                        <td class="border border-gray-300 px-4 py-2">Soft, sticky, pasty</td>
                        <td class="border border-gray-300 px-4 py-2">Gulab Jamun (NOT barfi — too wet)</td>
                    </tr>
                </tbody>
            </table>

            <p class="mt-3"><strong>Why Pindi Khoa is Ideal for Barfi:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Lower Moisture (20-25%):</strong> Provides firm body; less water to evaporate during cooking → better control, less risk of over/under-cooking</li>
                <li><strong>Smooth, Cohesive Texture:</strong> Casein micelles have been extensively heat-denatured and concentrated → form continuous protein matrix → smooth mouthfeel in final barfi</li>
                <li><strong>Higher Fat Content:</strong> Fat globules entrapped in protein matrix contribute to richness, smooth texture, and characteristic flavor release</li>
                <li><strong>Good Kneadability:</strong> Plastic, pliable body allows uniform mixing with sugar and other ingredients</li>
            </ul>

            <p><strong>Physicochemical State of Khoa Components:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Proteins (Casein ~80%, Whey Proteins ~20% of total protein):</strong> During khoa making, extensive heat treatment (>95°C for 30-60 min) causes complete whey protein denaturation (β-lactoglobulin, α-lactalbumin unfold and aggregate). Whey proteins form disulfide-linked complexes with κ-casein on casein micelle surface. Casein micelles partially dissociate, re-aggregate into large clusters → create the continuous protein matrix that gives khoa its body and structure</li>
                <li><strong>Fat (25-30%):</strong> Milk fat globule membrane (MFGM) partially disrupted during boiling/stirring → free fat released → coats protein matrix → contributes to smooth, lubricous texture. Fat exists as: (a) globular fat within remnant MFGM, (b) free/released fat coating protein surfaces, (c) crystalline fat (at <35°C, higher melting triglycerides crystallize → contributes to firmness)</li>
                <li><strong>Lactose (35-40% of solids):</strong> Present in supersaturated solution in fresh khoa (due to concentration). Upon cooling, lactose crystallizes → crystal size and distribution critically affect barfi texture (see crystallization section below)</li>
                <li><strong>Minerals (mainly Ca, P as colloidal calcium phosphate - CCP):</strong> CCP partially solubilized during heating → affects casein micelle structure and protein interactions</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">2. Sugar Science in Barfi</h4>

            <p><strong>Role of Sucrose (Table Sugar):</strong></p>
            <p>Sugar is not merely a sweetener in barfi — it serves multiple critical physicochemical functions:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Water Activity Depression:</strong> Sucrose is highly hydrophilic (each molecule binds ~5-6 water molecules via hydrogen bonding). At 25-30% concentration in the aqueous phase of barfi, sucrose reduces a<sub>w</sub> from ~0.95 (khoa alone) to 0.80-0.88 → significantly inhibits microbial growth (most bacteria require a<sub>w</sub> >0.90, yeasts >0.85, molds >0.80)</li>
                <li><strong>Texture Modification:</strong> Sucrose crystallization during cooling creates microcrystalline network that contributes to barfi's characteristic firm yet slightly crumbly (short) texture. Crystal size: 10-30 μm (imperceptible on tongue → smooth mouthfeel); >50 μm → grainy, sandy texture (defect)</li>
                <li><strong>Maillard Reaction Participation:</strong> Sucrose itself doesn't participate in Maillard reaction (non-reducing sugar). However, during cooking at elevated temperatures (>100°C), sucrose undergoes partial acid-catalyzed hydrolysis (inversion) → produces glucose + fructose (reducing sugars) → these readily react with milk proteins (lysine residues) via Maillard reaction → brown color development, caramelized/cooked flavor notes</li>
                <li><strong>Preservation (Osmotic Effect):</strong> High sugar concentration creates hypertonic environment → causes osmotic stress on microbial cells → plasmolysis (cell shrinkage) → inhibits growth and reproduction</li>
                <li><strong>Humectant Action:</strong> Maintains moisture equilibrium within product → prevents excessive drying/hardening during storage</li>
                <li><strong>Glass Transition Contribution:</strong> Amorphous sugar fraction raises glass transition temperature (T<sub>g</sub>) of the matrix → contributes to product stability and textural properties</li>
            </ul>

            <p><strong>Sucrose Inversion During Cooking:</strong></p>
            <p>C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> + H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (Glucose) + C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (Fructose)</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li>Rate increases with: temperature (doubles per 10°C rise), acidity (lactic acid in khoa catalyzes), and time</li>
                <li>Typical inversion in barfi cooking: 5-15% of total sucrose → produces sufficient reducing sugars for moderate Maillard browning without excessive darkening</li>
                <li>Invert sugar (glucose + fructose mixture) is more soluble than sucrose → reduces tendency for large crystal formation during cooling → smoother texture</li>
                <li>Fructose is 1.7× sweeter than sucrose → slight enhancement of perceived sweetness despite same sugar weight</li>
            </ul>

            <p><strong>Optimal Khoa-to-Sugar Ratio:</strong></p>
            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Ratio (Khoa:Sugar by weight)</th>
                        <th class="border border-gray-300 px-4 py-2">Characteristics</th>
                        <th class="border border-gray-300 px-4 py-2">Application</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">5:1</td>
                        <td class="border border-gray-300 px-4 py-2">Low sweetness, milky flavor dominant, softer texture</td>
                        <td class="border border-gray-300 px-4 py-2">Premium/artisanal barfi</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>4:1 to 3:1</strong></td>
                        <td class="border border-gray-300 px-4 py-2"><strong>Balanced sweetness, good body, optimal texture</strong></td>
                        <td class="border border-gray-300 px-4 py-2"><strong>Standard barfi (most common)</strong></td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">2:1</td>
                        <td class="border border-gray-300 px-4 py-2">Very sweet, harder/more crystalline texture, longer shelf life</td>
                        <td class="border border-gray-300 px-4 py-2">Budget/commercial barfi, extended shelf life required</td>
                    </tr>
                </tbody>
            </table>

            <h4 class="font-semibold mt-4 mb-2">3. Maillard Reaction and Flavor Development</h4>
            <p>The Maillard reaction is arguably the most important chemical reaction in barfi making, responsible for its characteristic cooked/caramelized flavor, golden-brown color, and distinctive aroma.</p>

            <p><strong>Maillard Reaction Mechanism in Barfi:</strong></p>
            <ol class="list-decimal list-outside pl-5 space-y-2">
                <li><strong>Initial Stage (Condensation):</strong> Reducing sugars (lactose in khoa, glucose/fructose from sucrose inversion) react with free amino groups (ε-amino group of lysine residues in casein/whey proteins) → form Schiff base (N-glycosylamine). This is reversible and occurs even at moderate temperatures (50-80°C)</li>
                <li><strong>Amadori Rearrangement:</strong> Schiff base undergoes irreversible rearrangement → Amadori compounds (1-amino-1-deoxy-2-ketose). These are relatively stable intermediates that accumulate during cooking</li>
                <li><strong>Advanced Stage:</strong> Amadori compounds undergo further degradation through multiple pathways:
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>1,2-enolization (pH <7, favored in barfi) → furfurals, reductones, diacetyl</li>
                        <li>2,3-enolization (pH >7)</li>
                        <li>Strecker degradation: α-amino acids + dicarbonyl compounds → aldehydes + CO<sub>2</sub> (key flavor compounds!)</li>
                    </ul>
                </li>
                <li><strong>Final Stage:</strong> Polymerization of reactive intermediates → melanoidins (brown polymeric compounds responsible for color). Also: pyrazines, pyrroles, furanones → complex flavor/aroma profile</li>
            </ol>

            <p><strong>Key Flavor Compounds Generated:</strong></p>
            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Compound</th>
                        <th class="border border-gray-300 px-4 py-2">Flavor Contribution</th>
                        <th class="border border-gray-300 px-4 py-2">Formation Pathway</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Diacetyl (2,3-butanedione)</td>
                        <td class="border border-gray-300 px-4 py-2">Buttery, creamy</td>
                        <td class="border border-gray-300 px-4 py-2">Strecker degradation of alanine</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Furfural / HMF</td>
                        <td class="border border-gray-300 px-4 py-2">Caramel, sweet, baked</td>
                        <td class="border border-gray-300 px-4 py-2">Sugar dehydration / Amadori degradation</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Maltol</td>
                        <td class="border border-gray-300 px-4 py-2">Sweet, caramel, cotton candy</td>
                        <td class="border border-gray-300 px-4 py-2">Maillard intermediate</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">2-Acetylpyrroline</td>
                        <td class="border border-gray-300 px-4 py-2">Roasted, nutty, popcorn-like</td>
                        <td class="border border-gray-300 px-4 py-2">Proline + sugar reaction</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">δ-Decalactone</td>
                        <td class="border border-gray-300 px-4 py-2">Creamy, coconut-like, fatty</td>
                        <td class="border border-gray-300 px-4 py-2">Fat oxidation / lipid-Maillard interaction</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Vanillin</td>
                        <td class="border border-gray-300 px-4 py-2">Vanilla, sweet</td>
                        <td class="border border-gray-300 px-4 py-2">Ferulic acid degradation</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Melanoidins (polymeric)</td>
                        <td class="border border-gray-300 px-4 py-2">Brown color, slight bitterness at high concentration</td>
                        <td class="border border-gray-300 px-4 py-2">Advanced Maillard polymerization</td>
                    </tr>
                </tbody>
            </table>

            <p class="mt-3"><strong>Factors Affecting Maillard Reaction Intensity in Barfi:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Temperature:</strong> Rate doubles for every 10°C increase (Q<sub>10</sub> ≈ 2-3). Cooking at 110-120°C vs. 95-100°C dramatically increases browning</li>
                <li><strong>Time:</strong> Longer cooking → more browning. Balance needed: sufficient for flavor development, not excessive for burnt taste</li>
                <li><strong>Reducing Sugar Concentration:</strong> Lactose in khoa (~38% of khoa solids) is a reducing disaccharide → major participant. More lactose = more browning potential</li>
                <li><strong>pH:</strong> Maillard reaction favored at higher pH. Khoa pH (6.4-6.6) is near optimal. Stale/acidic khoa (pH <6.0) shows less browning</li>
                <li><strong>Water Activity:</strong> Maximum Maillard rate at a<sub>w</sub> 0.5-0.8 (exactly the range of barfi during cooking!) → explains why barfi develops intense flavor despite relatively moderate temperatures</li>
                <li><strong>Protein Type:</strong> Lysine-rich proteins (casein has ~8% lysine) are most reactive → milk proteins are excellent Maillard substrates</li>
            </ul>

            <p><strong>Nutritional Impact of Maillard Reaction:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Lysine (essential amino acid) is consumed in the reaction → 10-25% lysine loss in barfi making (higher with excessive cooking)</li>
                <li>Reduced protein digestibility due to cross-linking (lysinoalanine, advanced glycation end products - AGEs)</li>
                <li>Formation of HMF (5-hydroxymethylfurfural): marker of heat treatment intensity, potential health concern at very high levels</li>
                <li>Antioxidant activity of melanoidins: some beneficial effect (counteracts lipid oxidation in storage)</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">4. Sugar Crystallization Science</h4>
            <p>Sugar crystallization during cooling is one of the most critical phenomena determining barfi texture and quality. The crystallization process must be carefully controlled to achieve the desired fine, smooth texture.</p>

            <p><strong>Supersaturation and Crystal Nucleation:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li>During cooking at elevated temperatures (95-115°C), sucrose and lactose are fully dissolved in the limited water phase → saturated or slightly supersaturated solution</li>
                <li>Upon cooling, solubility of sugars decreases → solution becomes supersaturated → thermodynamic driving force for crystallization</li>
                <li>Degree of supersaturation (S) = C/C<sub>sat</sub>, where C = actual concentration, C<sub>sat</sub> = saturation concentration at that temperature</li>
                <li>Crystal nucleation requires S > 1.2-1.3 for sucrose (metastable zone width) and S > 1.6-2.0 for lactose (wider metastable zone → lactose crystallizes more slowly)</li>
            </ul>

            <p><strong>Lactose Crystallization Behavior:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li>Lactose exists in two anomeric forms: α-lactose monohydrate (stable crystal form below 93.5°C) and β-lactose (stable above 93.5°C)</li>
                <li>In solution, α and β forms exist in equilibrium (mutarotation): α-lactose ⇌ β-lactose (equilibrium ratio: ~37% α, 63% β at 20°C)</li>
                <li>During cooling from cooking temperature, lactose solution becomes supersaturated → α-lactose monohydrate crystallizes preferentially</li>
                <li>As α-form crystallizes out, β → α mutarotation occurs to maintain equilibrium → more α-form available for crystallization → process continues</li>
                <li><strong>Critical:</strong> Lactose crystallization is inherently slow (days-weeks if uncontrolled) due to high viscosity of concentrated dairy matrix and slow mutarotation rate</li>
            </ul>

            <p><strong>Crystal Size Control — The Key to Smooth Barfi:</strong></p>
            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Crystal Size (μm)</th>
                        <th class="border border-gray-300 px-4 py-2">Sensory Perception</th>
                        <th class="border border-gray-300 px-4 py-2">Quality Assessment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><10</td>
                        <td class="border border-gray-300 px-4 py-2">Imperceptible, ultra-smooth</td>
                        <td class="border border-gray-300 px-4 py-2">Excellent (ideal)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">10-30</td>
                        <td class="border border-gray-300 px-4 py-2">Smooth with slight grain (pleasant)</td>
                        <td class="border border-gray-300 px-4 py-2">Good (acceptable)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">30-50</td>
                        <td class="border border-gray-300 px-4 py-2">Noticeably grainy</td>
                        <td class="border border-gray-300 px-4 py-2">Fair (borderline defect)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">>50</td>
                        <td class="border border-gray-300 px-4 py-2">Sandy, gritty, unpleasant</td>
                        <td class="border border-gray-300 px-4 py-2">Defective (sandiness defect)</td>
                    </tr>
                </tbody>
            </table>

            <p class="mt-3"><strong>Strategies for Fine Crystal Formation:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Rapid Initial Cooling:</strong> Cool cooked mass quickly from cooking temperature to 50-60°C → creates high supersaturation → promotes massive nucleation → many small nuclei form simultaneously → each grows to small final size</li>
                <li><strong>Continuous Stirring/Kneading During Cooling:</strong> Mechanical agitation (a) distributes nuclei uniformly, (b) breaks large crystals into smaller fragments (secondary nucleation), (c) prevents crystal agglomeration, (d) ensures uniform temperature distribution</li>
                <li><strong>Seeding (Optional - Advanced Technique):</strong> Add small amount (0.1-0.5%) of finely powdered sugar or previously ground barfi as "seed crystals" during cooling → provides pre-formed nuclei → promotes uniform fine crystallization</li>
                <li><strong>Use of Glucose/Invert Sugar (5-10% of total sugar):</strong> Glucose and fructose interfere with sucrose crystal lattice formation → act as crystal growth inhibitors → produce smaller crystals → smoother product. This is a well-known confectionery principle (doctoring agents)</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">5. Protein Matrix and Texture Science</h4>
            <p>Barfi's texture is fundamentally a composite material: a continuous casein protein network embedded with sugar crystals, fat globules/free fat, and air cells.</p>

            <p><strong>Microstructural Organization (SEM Studies):</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Continuous Phase:</strong> Heat-denatured casein-whey protein matrix forming an interconnected network → provides structural integrity, firmness, cohesiveness</li>
                <li><strong>Dispersed Fat Phase:</strong> Fat globules (1-10 μm) and free fat pools distributed throughout protein matrix → acts as plasticizer, reduces hardness, contributes to smooth mouthfeel during mastication (fat melts at body temperature → creamy sensation)</li>
                <li><strong>Sugar Crystal Phase:</strong> Sucrose and lactose crystals (5-30 μm ideally) embedded within protein-fat matrix → provides firmness, slight crumbliness (short texture), sweetness release upon dissolution in saliva</li>
                <li><strong>Air Cells:</strong> Small air voids (5-50 μm) incorporated during kneading → reduce density, lighten texture, improve mouthfeel</li>
            </ul>

            <p><strong>Rheological Properties:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Barfi behaves as a viscoelastic solid with yield stress</li>
                <li>Hardness (Texture Profile Analysis): 15-40 N (product-specific)</li>
                <li>Cohesiveness: 0.3-0.6 (moderate — holds together but can be bitten/cut easily)</li>
                <li>Springiness: 0.2-0.4 (low — does not spring back, non-elastic)</li>
                <li>Chewiness: 3-15 N (moderate effort to chew, dissolves in mouth)</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">6. Water Activity and Preservation Science</h4>
            <p>Barfi is classified as an <strong>Intermediate Moisture Food (IMF)</strong>, and its preservation relies on the hurdle technology concept — multiple preservation factors acting synergistically.</p>

            <p><strong>Hurdle Technology in Barfi:</strong></p>
            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Hurdle (Preservation Factor)</th>
                        <th class="border border-gray-300 px-4 py-2">Value in Barfi</th>
                        <th class="border border-gray-300 px-4 py-2">Mechanism of Preservation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Water Activity (a<sub>w</sub>)</strong></td>
                        <td class="border border-gray-300 px-4 py-2">0.80-0.90</td>
                        <td class="border border-gray-300 px-4 py-2">Below growth minimum for most pathogenic bacteria (Salmonella: 0.94, E. coli: 0.95, S. aureus: 0.86). Yeasts and molds can grow at a<sub>w</sub> 0.80-0.85 → these are primary spoilage organisms</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Heat Treatment</strong></td>
                        <td class="border border-gray-300 px-4 py-2">95-120°C during cooking</td>
                        <td class="border border-gray-300 px-4 py-2">Kills vegetative pathogens and most spoilage organisms. Does not destroy bacterial spores (Bacillus, Clostridium) → these can survive but cannot grow at a<sub>w</sub> <0.93</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Sugar Concentration</strong></td>
                        <td class="border border-gray-300 px-4 py-2">25-35% (dry basis)</td>
                        <td class="border border-gray-300 px-4 py-2">Osmotic stress on microbial cells → plasmolysis → inhibits growth. Also reduces a<sub>w</sub></td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Low Moisture</strong></td>
                        <td class="border border-gray-300 px-4 py-2">20-25%</td>
                        <td class="border border-gray-300 px-4 py-2">Insufficient free water for microbial metabolism. Combined with sugar binding → very low free water available</td>
                    </tr>
                </tbody>
            </table>

            <p class="mt-3"><strong>Water Activity Calculation (Simplified):</strong></p>
            <p>For sugar solutions: a<sub>w</sub> ≈ 1 - (0.0052 × sucrose concentration in g/100g water) - (0.003 × lactose concentration in g/100g water)</p>
            <p>For barfi with ~25% moisture, ~30% sugar, ~35% lactose: a<sub>w</sub> ≈ 0.82-0.87 (consistent with measured values)</p>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Barfi with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Barfi Production</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Receiving & Quality Testing of Raw Milk <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Khoa Preparation (see Khoa processing) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Quality Assessment of Khoa (Moisture, Fat, Acidity, Sensory)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Kneading of Khoa (5-10 min, until smooth, lump-free)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Sugar Grinding & Sieving (powdered, 100-200 mesh)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Sugar Addition & Mixing (Khoa:Sugar = 3:1 to 4:1 w/w) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Cooking/Desiccation (95-120°C, 15-30 min, continuous stirring)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Addition of Flavors/Nuts (cardamom, saffron, pistachios) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cooling with Kneading (110°C → 50°C, controlled rate) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Setting in Greased Trays (spread 15-20 mm thick)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Complete Cooling to Room Temperature (25-30°C, 1-2 hrs)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Garnishing (silver varak, nuts, edible decorations)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cutting into Pieces (squares/diamonds, 25-30g each)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging & Storage <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps with Scientific Basis</h3>
            <ol class="list-decimal list-outside pl-5 space-y-6">
                <li>
                    <strong>Khoa Preparation (PRP):</strong>
                    <p class="mt-2">High-quality, fresh Pindi-type khoa is the primary raw material. Its quality (moisture content: 20-25%, fat content: 25-30%, and texture: smooth, cohesive) directly impacts the final barfi. This is a <strong>Prerequisite Program (PRP)</strong> because consistent raw material quality is the foundation of product quality.</p>
                    <p class="mt-2"><strong>Scientific Quality Parameters for Incoming Khoa:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Moisture: 20-25% (measured by hot air oven method at 100°C for 4-5 hours)</li>
                        <li>Fat: ≥25% (Gerber method or Mojonnier method)</li>
                        <li>Acidity: ≤0.3% lactic acid (titrimetric method). Higher acidity → stale khoa → poor barfi quality, off-flavors, crumbly texture</li>
                        <li>Sensory: Clean, sweet, cooked milk flavor; no rancid, sour, or stale notes; smooth body, free from graininess</li>
                        <li>Adulteration tests: Starch test (iodine test — negative), added sugar test (Barfoed's test), vanaspati/non-milk fat detection (Baudouin test — negative)</li>
                    </ul>
                </li>

                <li>
                    <strong>Kneading of Khoa:</strong>
                    <p class="mt-2">Khoa is kneaded manually or mechanically for 5-10 minutes to create a smooth, homogeneous, lump-free mass.</p>
                    <p class="mt-2"><strong>Scientific Purpose of Kneading:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                        <li><strong>Structural Homogenization:</strong> Khoa has heterogeneous microstructure with protein aggregates, fat pockets, and lactose crystals. Kneading mechanically disrupts large aggregates, redistributes fat uniformly, and creates a more homogeneous matrix</li>
                        <li><strong>Breaking Lactose Crystal Clusters:</strong> Any large lactose crystals formed during khoa storage are broken down by shear forces during kneading</li>
                        <li><strong>Air Incorporation:</strong> Controlled air incorporation during kneading slightly reduces density and improves texture (lighter mouthfeel)</li>
                        <li><strong>Temperature Equilibration:</strong> Ensures uniform temperature throughout the mass before cooking begins</li>
                        <li><strong>Plasticity Development:</strong> Mechanical working of the protein-fat matrix develops plastic, pliable consistency → enables uniform mixing with sugar</li>
                    </ul>
                </li>

                <li>
                    <strong>Sugar Addition & Mixing (oPRP):</strong>
                    <p class="mt-2">Powdered/ground sugar (not granulated — dissolution would be too slow) is added to kneaded khoa and mixed thoroughly. This is an <strong>Operational Prerequisite Program (oPRP)</strong> as uniform mixing is essential for consistent sweetness, texture, and crystallization behavior.</p>
                    <p class="mt-2"><strong>Critical Considerations:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                        <li><strong>Sugar Form:</strong> Powdered sugar (100-200 mesh, particle size <150 μm) dissolves faster during cooking → more uniform distribution → better final texture. Granulated sugar (500-1000 μm) dissolves slowly → potential for undissolved crystals → grainy barfi</li>
                        <li><strong>Mixing Uniformity:</strong> Non-uniform mixing → pockets of high/low sugar concentration → inconsistent sweetness, uneven texture, variable crystallization during cooling. Target: Coefficient of variation of sugar distribution <5%</li>
                        <li><strong>Sugar Quality:</strong> Refined white sugar (≥99.5% sucrose) preferred. Raw/brown sugar introduces color, flavor variations, and mineral impurities that may affect crystallization. Jaggery (gur) sometimes used for specialty barfi → introduces molasses flavor, dark color</li>
                        <li><strong>Ratio Precision:</strong> Khoa:Sugar = 3:1 to 4:1 by weight (most common: 3.5:1). Measured accurately (±2%) to maintain consistent product quality batch to batch</li>
                    </ul>
                </li>

                <li>
                    <strong>Cooking/Desiccation (CCP-1) — The Critical Step:</strong>
                    <p class="mt-2">The khoa-sugar mixture is cooked in a heavy-bottomed pan (karahi) or steam-jacketed kettle with continuous stirring over controlled heat. This is designated <strong>Critical Control Point (CCP-1)</strong> because it simultaneously achieves microbial safety, develops characteristic flavor/color (Maillard reaction), reduces moisture to target level, and determines final product texture.</p>

                    <p class="mt-2"><strong>CCP-1 Critical Limits:</strong></p>
                    <table class="min-w-full border-collapse border border-gray-300 mt-3">
                        <thead>
                            <tr class="bg-gray-100">
                                <th class="border border-gray-300 px-4 py-2">Parameter</th>
                                <th class="border border-gray-300 px-4 py-2">Critical Limit</th>
                                <th class="border border-gray-300 px-4 py-2">Monitoring Method</th>
                                <th class="border border-gray-300 px-4 py-2">Frequency</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2">Cooking Temperature</td>
                                <td class="border border-gray-300 px-4 py-2">≥95°C (mass temp.) for ≥10 min</td>
                                <td class="border border-gray-300 px-4 py-2">Calibrated thermometer / IR thermometer</td>
                                <td class="border border-gray-300 px-4 py-2">Every 5 minutes during cooking</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2">Final Product Temperature</td>
                                <td class="border border-gray-300 px-4 py-2">108-118°C (endpoint)</td>
                                <td class="border border-gray-300 px-4 py-2">Thermometer in mass center</td>
                                <td class="border border-gray-300 px-4 py-2">Continuous during final phase</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2">Cooking Time</td>
                                <td class="border border-gray-300 px-4 py-2">15-30 min (batch-dependent)</td>
                                <td class="border border-gray-300 px-4 py-2">Timer</td>
                                <td class="border border-gray-300 px-4 py-2">Each batch</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2">Endpoint Test</td>
                                <td class="border border-gray-300 px-4 py-2">Mass leaves pan sides cleanly, forms firm ball in cold water</td>
                                <td class="border border-gray-300 px-4 py-2">Visual + manual (ball test)</td>
                                <td class="border border-gray-300 px-4 py-2">Frequent in final 5 min</td>
                            </tr>
                        </tbody>
                    </table>

                    <p class="mt-3"><strong>Scientific Processes During Cooking:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-3">
                        <li><strong>Moisture Evaporation:</strong> Water content decreases from ~30-35% (khoa+sugar mixture) to 18-22% (finished barfi mass). Evaporation rate: initially high (free water), then slowing as moisture becomes bound. Energy requirement: ~2,260 kJ/kg water evaporated (latent heat). Steam generation visible as vigorous bubbling → gradually subsides as moisture decreases</li>
                        <li><strong>Sugar Dissolution and Concentration:</strong> Powdered sugar dissolves completely in available moisture at cooking temperature → forms concentrated syrup within the khoa matrix. As water evaporates, sugar solution becomes increasingly concentrated → approaches supersaturation (critical for subsequent crystallization during cooling)</li>
                        <li><strong>Maillard Browning:</strong> As described above — lactose + proteins → brown melanoidins, flavor compounds. Visually: color changes from white/cream (raw mixture) → light golden → golden brown (optimal endpoint). Overcooking → dark brown/burnt → bitter, scorched flavor (defect)</li>
                        <li><strong>Caramelization (Minor):</strong> At temperatures >110°C, some direct thermal decomposition of sugars occurs (independent of amino acids). Sucrose → caramel compounds (caramelin, caramelen, caramelin). Contributes: butterscotch/toffee notes to flavor profile</li>
                        <li><strong>Fat Rendering and Redistribution:</strong> At cooking temperatures, all milk fat is liquid → migrates freely through protein matrix → some fat separates to surface (visible as oil film). Proper stirring re-incorporates separated fat. Well-distributed fat → smooth, rich barfi. Excessive fat separation → oily, greasy defect</li>
                        <li><strong>Protein Denaturation and Cross-linking:</strong> Further heat treatment beyond khoa-making stage → additional protein aggregation, Maillard cross-links (lysine-sugar bridges) → increases firmness of final protein matrix → harder barfi with extended cooking</li>
                        <li><strong>Viscosity Changes:</strong> Initial mixture: relatively fluid (500-2,000 cP at 95°C) → as moisture evaporates and solids concentrate → viscosity increases exponentially → final mass: 50,000-200,000 cP → extremely thick, stiff, leaves pan sides</li>
                    </ul>

                    <p class="mt-3"><strong>Endpoint Determination — Traditional and Scientific Methods:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Traditional "Pat Test":</strong> Small amount of cooked mass pressed between thumb and forefinger → should form smooth, non-sticky layer that peels cleanly. If sticky → underdone; if crumbly → overdone</li>
                        <li><strong>Ball-in-Cold-Water Test:</strong> Drop small amount into cold water → should form firm, pliable ball (soft-ball stage: ~112-116°C). If dissolves → underdone; if hard/brittle → overdone (hard-crack stage: >150°C)</li>
                        <li><strong>Refractometer:</strong> Total solids measured by digital refractometer. Target: 78-82°Brix at cooking endpoint</li>
                        <li><strong>Temperature Endpoint:</strong> Mass temperature of 110-118°C corresponds to ~78-82% total solids (boiling point elevation due to dissolved solids: ΔT<sub>b</sub> = K<sub>b</sub> × m, where K<sub>b</sub> = ebullioscopic constant of water = 0.512°C/molal, m = molality of solution). Higher endpoint temp → drier, harder barfi</li>
                    </ul>

                    <p class="mt-3"><strong>Corrective Actions if CCP Limits Not Met:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>Undercooking (temp <95°C or <10 min): Continue cooking until target reached. If product already discharged → re-cook</li>
                        <li>Overcooking (temp >120°C, dark brown): Batch cannot be corrected → product rejected or downgraded for use in lower-quality products</li>
                        <li>Uneven cooking (lumps, burnt spots): Indicates inadequate stirring → improve stirring frequency/intensity in subsequent batches</li>
                    </ul>
                </li>

                <li>
                    <strong>Addition of Flavors and Nuts (oPRP):</strong>
                    <p class="mt-2">After cooking reaches endpoint, heat is reduced and flavoring agents are added:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Cardamom (Elaichi):</strong> 0.2-0.5% finely ground cardamom powder. Contains volatile oils (1,8-cineole, α-terpinyl acetate, linalool) → characteristic sweet, aromatic flavor. Added near end to preserve volatile compounds (early addition → evaporative loss of aromatics)</li>
                        <li><strong>Saffron (Kesar):</strong> 0.01-0.05% dissolved in warm milk/water. Contains crocin (yellow-orange color), picrocrocin (bitter flavor), safranal (aroma). Premium ingredient: $3,000-10,000/kg → used sparingly. Provides golden color, subtle bitter-sweet flavor, characteristic aroma</li>
                        <li><strong>Rose Water (Gulab Jal):</strong> 0.5-1.0% added. Contains citronellol, geraniol → floral aroma. Must be food-grade (not synthetic perfume!)</li>
                        <li><strong>Nuts (Pistachios, Almonds, Cashews):</strong> 3-10% chopped/sliced. Added late → preserve crunch texture. Nuts should be food-grade, checked for aflatoxin contamination (especially pistachios — threshold: <10 μg/kg total aflatoxins)</li>
                        <li><strong>oPRP Rationale:</strong> Flavoring agents and nuts must be from approved suppliers, stored properly (dry, cool conditions), and free from chemical/biological contamination. Allergen management critical for nut-containing variants (must declare on label per FSSAI labeling regulations)</li>
                    </ul>
                </li>

                <li>
                    <strong>Cooling and Setting (oPRP) — Critical Texture Development Phase:</strong>
                    <p class="mt-2">The cooked mass is transferred to greased (ghee-lined) stainless steel trays and spread evenly to 15-20 mm thickness. Controlled cooling determines crystallization behavior and final texture.</p>

                    <p class="mt-2"><strong>Cooling Profile and Its Impact:</strong></p>
                    <table class="min-w-full border-collapse border border-gray-300 mt-3">
                        <thead>
                            <tr class="bg-gray-100">
                                <th class="border border-gray-300 px-4 py-2">Cooling Phase</th>
                                <th class="border border-gray-300 px-4 py-2">Temperature Range</th>
                                <th class="border border-gray-300 px-4 py-2">Duration</th>
                                <th class="border border-gray-300 px-4 py-2">Key Phenomena</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2">Phase 1: Hot Mass</td>
                                <td class="border border-gray-300 px-4 py-2">110°C → 80°C</td>
                                <td class="border border-gray-300 px-4 py-2">5-10 min</td>
                                <td class="border border-gray-300 px-4 py-2">Rapid cooling with kneading. Sugar supersaturation increases. Fat begins crystallizing (high-melting triglycerides). Maillard reaction slowing</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2">Phase 2: Nucleation</td>
                                <td class="border border-gray-300 px-4 py-2">80°C → 55°C</td>
                                <td class="border border-gray-300 px-4 py-2">10-20 min</td>
                                <td class="border border-gray-300 px-4 py-2"><strong>CRITICAL: Massive crystal nucleation zone.</strong> Sugar solution crosses metastable limit → spontaneous nucleation → millions of tiny crystal nuclei form. Kneading during this phase = fine crystals. No kneading = fewer, larger crystals (defect!)</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2">Phase 3: Crystal Growth</td>
                                <td class="border border-gray-300 px-4 py-2">55°C → 35°C</td>
                                <td class="border border-gray-300 px-4 py-2">15-30 min</td>
                                <td class="border border-gray-300 px-4 py-2">Crystal nuclei grow to final size. Fat solidification continues. Protein matrix sets into semi-rigid network. Product acquires characteristic body and firmness</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2">Phase 4: Setting</td>
                                <td class="border border-gray-300 px-4 py-2">35°C → 25°C</td>
                                <td class="border border-gray-300 px-4 py-2">30-60 min</td>
                                <td class="border border-gray-300 px-4 py-2">Final firming. Fat fully crystallized. Product reaches stable, cuttable consistency. Moisture equilibrates within product</td>
                            </tr>
                        </tbody>
                    </table>

                    <p class="mt-3"><strong>oPRP Rationale:</strong> This step is an Operational Prerequisite Program because:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>Uncontrolled cooling → large sugar crystals → sandy/gritty texture (quality defect)</li>
                        <li>Too rapid cooling (cold room/refrigerator) → thermal shock → surface cracking, moisture condensation → microbial contamination risk</li>
                        <li>Too slow cooling → extended time at 40-60°C → possible microbial multiplication if recontamination occurs (temperature danger zone for thermophilic spore-formers)</li>
                        <li>Proper cooling in clean, covered trays in controlled environment (20-30°C, <60% RH) → optimal quality and safety</li>
                    </ul>
                </li>

                <li>
                    <strong>Garnishing:</strong>
                    <p class="mt-2">Once partially set but still slightly warm (30-35°C), surface is decorated with:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Silver Leaf (Varak):</strong> Edible silver foil (99.9% pure silver, 0.2-0.3 μm thick). Traditional garnish. FSSAI regulates: must be pure silver (not aluminum masquerading as silver), no lead contamination (<10 ppm)</li>
                        <li><strong>Nuts:</strong> Sliced almonds, pistachio slivers, cashew halves pressed gently into surface</li>
                        <li><strong>Dried Rose Petals:</strong> For premium variants</li>
                    </ul>
                </li>

                <li>
                    <strong>Cutting into Pieces:</strong>
                    <p class="mt-2">Once fully set and firm (room temperature, 25-30°C), the barfi slab is cut into desired shapes using clean, sanitized knives or cutting frames:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Standard shapes: Squares (3×3 cm), diamonds/rhombus (4×3 cm), rectangles (4×2 cm)</li>
                        <li>Piece weight: 20-35g each (standardized for pricing and packaging)</li>
                        <li>Clean cuts without crumbling indicate proper cooking and cooling (quality indicator)</li>
                    </ul>
                </li>

                <li>
                    <strong>Packaging and Storage (PRP):</strong>
                    <p class="mt-2">Packaging is a Prerequisite Program ensuring product protection, food safety, and shelf life.</p>

                    <p class="mt-2"><strong>Packaging Options and Scientific Considerations:</strong></p>
                    <table class="min-w-full border-collapse border border-gray-300 mt-3">
                        <thead>
                            <tr class="bg-gray-100">
                                <th class="border border-gray-300 px-4 py-2">Packaging Type</th>
                                <th class="border border-gray-300 px-4 py-2">Barrier Properties</th>
                                <th class="border border-gray-300 px-4 py-2">Shelf Life Extension</th>
                                <th class="border border-gray-300 px-4 py-2">Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2">Cardboard box + butter paper</td>
                                <td class="border border-gray-300 px-4 py-2">Low (permeable to moisture, O<sub>2</sub>)</td>
                                <td class="border border-gray-300 px-4 py-2">5-7 days (ambient)</td>
                                <td class="border border-gray-300 px-4 py-2">Low</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2">Polypropylene (PP) tray + lidding film</td>
                                <td class="border border-gray-300 px-4 py-2">Moderate moisture barrier</td>
                                <td class="border border-gray-300 px-4 py-2">10-15 days (ambient)</td>
                                <td class="border border-gray-300 px-4 py-2">Moderate</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2">Modified Atmosphere Packaging (MAP: N<sub>2</sub> flush)</td>
                                <td class="border border-gray-300 px-4 py-2">High (O<sub>2</sub> <2%, moisture barrier)</td>
                                <td class="border border-gray-300 px-4 py-2">30-45 days (ambient), 60-90 days (refrigerated)</td>
                                <td class="border border-gray-300 px-4 py-2">High</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2">Vacuum packaging (PET/PE laminate)</td>
                                <td class="border border-gray-300 px-4 py-2">High (O<sub>2</sub> excluded)</td>
                                <td class="border border-gray-300 px-4 py-2">45-60 days (refrigerated)</td>
                                <td class="border border-gray-300 px-4 py-2">High</td>
                            </tr>
                        </tbody>
                    </table>

                    <p class="mt-3"><strong>Storage Conditions:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Ambient Storage (25-30°C):</strong> Shelf life 7-15 days. Primary spoilage: mold growth (Aspergillus, Penicillium, Mucor) on surface; yeast fermentation (gas production, off-flavors); bacterial growth (Staphylococcus aureus if a<sub>w</sub> >0.86)</li>
                        <li><strong>Refrigerated Storage (4-7°C):</strong> Shelf life 30-60 days. Microbial growth rate reduced 3-5× per 10°C reduction. Mold growth nearly arrested below 5°C. However: potential for moisture condensation on surface upon removal from refrigerator (condensation → localized high a<sub>w</sub> → mold colonization point)</li>
                        <li><strong>Frozen Storage (-18°C):</strong> Shelf life 6-12 months. Not common for barfi (texture changes upon thawing: fat bloom, crumbling due to ice crystal-induced structural damage)</li>
                    </ul>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Common Defects in Barfi: Causes and Remedies</h3>

            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Defect</th>
                        <th class="border border-gray-300 px-4 py-2">Description</th>
                        <th class="border border-gray-300 px-4 py-2">Scientific Cause</th>
                        <th class="border border-gray-300 px-4 py-2">Prevention/Remedy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Sandiness / Grittiness</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Rough, sandy texture on tongue</td>
                        <td class="border border-gray-300 px-4 py-2">Large sugar/lactose crystals (>50 μm) formed due to slow, uncontrolled cooling without kneading. Low nucleation rate → few crystals grow large</td>
                        <td class="border border-gray-300 px-4 py-2">Controlled rapid cooling with continuous kneading/stirring during 80-55°C zone. Add 5-10% glucose as crystal inhibitor. Seed with fine sugar powder</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Hard / Dry Texture</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Excessively firm, difficult to bite, dry mouthfeel</td>
                        <td class="border border-gray-300 px-4 py-2">Over-cooking (too high endpoint temperature >120°C → excessive moisture removal → TS >85%). Excessive protein cross-linking from prolonged heating → rigid matrix</td>
                        <td class="border border-gray-300 px-4 py-2">Precise endpoint temperature control (110-116°C). Use refractometer to target 78-82°Brix. Reduce cooking time</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Soft / Sticky / Won't Set</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Too soft, sticks to wrapper, doesn't hold shape when cut</td>
                        <td class="border border-gray-300 px-4 py-2">Under-cooking (endpoint <108°C → insufficient moisture removal → TS <75%). Insufficient sugar crystallization for structural support</td>
                        <td class="border border-gray-300 px-4 py-2">Continue cooking until proper endpoint. Verify with ball-in-water test and refractometer</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Oily / Greasy</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Free oil on surface, greasy to touch</td>
                        <td class="border border-gray-300 px-4 py-2">Fat separation during cooking (excessive heating rate, inadequate stirring → MFGM disruption → free fat pools that cannot be re-emulsified). High-fat khoa without proper protein matrix to hold fat</td>
                        <td class="border border-gray-300 px-4 py-2">Use moderate heating rate. Continuous gentle stirring. Proper kneading of khoa before cooking. Use khoa with adequate protein content</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Dark / Scorched Color</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Excessively brown or blackened areas</td>
                        <td class="border border-gray-300 px-4 py-2">Excessive Maillard reaction and/or caramelization. Local overheating at pan contact surface (inadequate stirring → localized burning). Stale khoa with high acidity accelerates browning</td>
                        <td class="border border-gray-300 px-4 py-2">Use fresh, low-acidity khoa. Continuous stirring especially near pan bottom. Use steam-jacketed kettle for uniform heat distribution. Moderate heat intensity</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Sour / Off-Flavor</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Acidic, fermented, or rancid taste</td>
                        <td class="border border-gray-300 px-4 py-2">Stale khoa (high lactic acid from microbial fermentation). Rancid khoa (lipase action → free fatty acids → soapy/rancid flavor). Post-production microbial spoilage</td>
                        <td class="border border-gray-300 px-4 py-2">Use only fresh khoa (acidity <0.3% LA). Proper cold chain for khoa. Reject khoa with off-flavors. Good packaging and storage practices</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Mold Growth</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Visible mold colonies (green, black, white) on surface</td>
                        <td class="border border-gray-300 px-4 py-2">Post-process contamination from environment (airborne mold spores). Moisture condensation on surface. Inadequate packaging barrier. a<sub>w</sub> >0.80 supports mold growth</td>
                        <td class="border border-gray-300 px-4 py-2">Hygienic production environment (HEPA-filtered air in packaging area). Proper packaging with moisture barrier. Refrigerated storage. Potassium sorbate surface spray (0.1-0.3%, if permitted)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Sugar Blooming</strong></td>
                        <td class="border border-gray-300 px-4 py-2">White powdery surface coating during storage</td>
                        <td class="border border-gray-300 px-4 py-2">Surface moisture loss → sugar solution at surface becomes supersaturated → crystallizes as white efflorescence. Temperature cycling during storage (condensation-evaporation cycles) exacerbates this</td>
                        <td class="border border-gray-300 px-4 py-2">Moisture-barrier packaging. Stable storage temperature (avoid temperature fluctuations). Proper cooling before packaging (avoid internal moisture migration)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Crumbling</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Falls apart when cut or handled, no cohesion</td>
                        <td class="border border-gray-300 px-4 py-2">Insufficient protein matrix development (inadequate kneading). Too much sugar (sugar crystals dominate, insufficient protein binder). Over-dried product. Use of stale/acidic khoa (protein precipitation → weak matrix)</td>
                        <td class="border border-gray-300 px-4 py-2">Thorough kneading. Maintain optimal khoa:sugar ratio (3:1 to 4:1). Avoid overcooking. Use fresh khoa with intact protein functionality</td>
                    </tr>
                </tbody>
            </table>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Nutritional Composition of Barfi</h3>

            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Nutrient</th>
                        <th class="border border-gray-300 px-4 py-2">Plain Barfi (per 100g)</th>
                        <th class="border border-gray-300 px-4 py-2">Kaju (Cashew) Barfi (per 100g)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Energy (kcal)</td>
                        <td class="border border-gray-300 px-4 py-2">380-420</td>
                        <td class="border border-gray-300 px-4 py-2">450-500</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Moisture (%)</td>
                        <td class="border border-gray-300 px-4 py-2">18-22</td>
                        <td class="border border-gray-300 px-4 py-2">12-18</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Total Fat (g)</td>
                        <td class="border border-gray-300 px-4 py-2">15-20</td>
                        <td class="border border-gray-300 px-4 py-2">22-28</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Protein (g)</td>
                        <td class="border border-gray-300 px-4 py-2">10-14</td>
                        <td class="border border-gray-300 px-4 py-2">12-16</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Carbohydrates (g)</td>
                        <td class="border border-gray-300 px-4 py-2">45-55</td>
                        <td class="border border-gray-300 px-4 py-2">40-48</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Sugars (g)</td>
                        <td class="border border-gray-300 px-4 py-2">35-45</td>
                        <td class="border border-gray-300 px-4 py-2">30-40</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Calcium (mg)</td>
                        <td class="border border-gray-300 px-4 py-2">200-350</td>
                        <td class="border border-gray-300 px-4 py-2">150-250</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Phosphorus (mg)</td>
                        <td class="border border-gray-300 px-4 py-2">180-280</td>
                        <td class="border border-gray-300 px-4 py-2">200-300</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Cholesterol (mg)</td>
                        <td class="border border-gray-300 px-4 py-2">40-80</td>
                        <td class="border border-gray-300 px-4 py-2">30-60</td>
                    </tr>
                </tbody>
            </table>

            <p class="mt-3"><strong>Nutritional Significance:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li>Barfi is a <strong>calorie-dense food</strong> (380-500 kcal/100g) — provides quick energy but should be consumed in moderation</li>
                <li><strong>Good source of calcium and phosphorus</strong> (from concentrated milk) — beneficial for bone health</li>
                <li><strong>Complete protein source</strong> (casein + whey proteins from milk) — contains all essential amino acids (though some lysine lost to Maillard reaction)</li>
                <li><strong>High in saturated fat</strong> (milk fat: ~65% saturated fatty acids) — health concern with excessive consumption</li>
                <li><strong>High glycemic index (GI: ~65-75)</strong> due to high sugar and lactose content → rapid blood sugar rise → caution for diabetic consumers</li>
                <li><strong>Fat-soluble vitamins:</strong> Retains Vitamin A (from milk fat, 150-300 μg/100g), Vitamin D (trace), Vitamin K. Water-soluble vitamins largely destroyed during extended heating</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shelf Life Extension Technologies</h3>

            <p>Traditional barfi has limited shelf life (7-15 days at ambient) due to its intermediate moisture content and near-neutral pH. Modern technologies to extend shelf life:</p>

            <ul class="list-disc list-outside pl-5 mt-2 space-y-3">
                <li><strong>Modified Atmosphere Packaging (MAP):</strong> Replace air with N<sub>2</sub>/CO<sub>2</sub> mixture (70:30) → inhibits aerobic spoilage organisms (molds, aerobic bacteria). Oxygen scavenger sachets in package → maintain O<sub>2</sub> <1%. Shelf life: 30-45 days at 30°C, 60-90 days at 7°C</li>
                <li><strong>Preservatives (where permitted):</strong> Potassium sorbate (0.1-0.3%): effective against yeasts and molds at pH <6.5. Calcium propionate (0.1-0.2%): anti-mold. Nisin (natural antimicrobial from Lactococcus lactis, 100-250 IU/g): effective against Gram-positive bacteria including Bacillus, Listeria, Staphylococcus. Must comply with FSSAI permissible limits</li>
                <li><strong>Active Packaging:</strong> Oxygen absorbers (iron-based sachets): reduce O<sub>2</sub> to <0.1% → prevent mold growth and oxidative rancidity. Ethanol emitters: surface sterilization effect → inhibit mold. Antimicrobial films (chitosan, lysozyme-incorporated packaging materials): emerging technology</li>
                <li><strong>Hurdle Optimization:</strong> Reducing a<sub>w</sub> to 0.80-0.82 (slightly drier formulation) + mild heat treatment in final packaging (80°C/5 min in sealed package) → 45-60 days shelf life without chemical preservatives</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Mechanization and Industrial Production</h3>

            <p>Traditional barfi making is labor-intensive (manual stirring, visual endpoint detection, hand cutting). Modern large-scale production employs:</p>

            <ul class="list-disc list-outside pl-5 mt-2 space-y-3">
                <li><strong>Continuous Khoa Making Machines:</strong> Thin-film scraped surface evaporators (e.g., SSP Pvt. Ltd., Dodla Dairy models) → continuous khoa production at 100-500 kg/hr. Advantages: uniform quality, energy-efficient (steam-heated, 15-20% less fuel than open-pan), CIP-cleanable, reduced labor</li>
                <li><strong>Planetary Mixer/Cooker:</strong> Steam-jacketed vessels with planetary stirring mechanism → heating, mixing, and cooking in single equipment. Capacity: 50-500 kg batch. Temperature control: PID-controlled steam → precise endpoint achievement (±1°C)</li>
                <li><strong>Automatic Cooling-Kneading Line:</strong> Continuous cooling belt with integrated kneading rollers → controlled cooling rate, uniform crystallization → consistent texture</li>
                <li><strong>Ultrasonic Cutting Systems:</strong> Ultrasonic vibration-assisted cutting blades → clean cuts without crumbling, deformation, or sticking → higher yield, better appearance</li>
                <li><strong>Automatic Packaging Lines:</strong> Flow-wrap machines, tray-sealing with MAP capability → 60-200 pieces/minute → hygienic, consistent packaging</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Varieties of Barfi</h3>

            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Variety</th>
                        <th class="border border-gray-300 px-4 py-2">Key Ingredient/Modification</th>
                        <th class="border border-gray-300 px-4 py-2">Distinguishing Characteristics</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Plain (Doodh) Barfi</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Khoa + Sugar only</td>
                        <td class="border border-gray-300 px-4 py-2">White/cream color, pure milk flavor, classic</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Kaju Barfi</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Cashew nut paste (major component)</td>
                        <td class="border border-gray-300 px-4 py-2">Premium, smooth, rich, diamond-shaped, silver varak</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Pista Barfi</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Pistachio paste/pieces</td>
                        <td class="border border-gray-300 px-4 py-2">Green color (natural chlorophyll), nutty flavor</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Badam Barfi</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Almond paste/pieces</td>
                        <td class="border border-gray-300 px-4 py-2">Light cream color, almond flavor, slightly chewy</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Coconut Barfi</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Desiccated/fresh coconut</td>
                        <td class="border border-gray-300 px-4 py-2">White, coconut aroma, shredded texture</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Besan Barfi</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Roasted gram flour (besan)</td>
                        <td class="border border-gray-300 px-4 py-2">Yellow color, roasted flavor, slightly crumbly</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Chocolate Barfi</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Cocoa powder/chocolate</td>
                        <td class="border border-gray-300 px-4 py-2">Brown color, fusion of traditional + modern, popular with younger generation</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Kesar (Saffron) Barfi</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Saffron strands infused</td>
                        <td class="border border-gray-300 px-4 py-2">Golden-orange color, delicate saffron aroma, premium</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Mawa Barfi (Kalakand-style)</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Danedar khoa, light cooking</td>
                        <td class="border border-gray-300 px-4 py-2">Grainy texture (intentional), moist, milky, less sweet</td>
                    </tr>
                </tbody>
            </table>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Adulteration Detection in Barfi</h3>

            <p>Barfi is unfortunately susceptible to various forms of adulteration due to the high cost of genuine milk-based ingredients. Common adulterants and their detection:</p>

            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Adulterant</th>
                        <th class="border border-gray-300 px-4 py-2">Purpose of Addition</th>
                        <th class="border border-gray-300 px-4 py-2">Detection Method</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Starch</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Bulk increase, moisture retention, cheaper filler</td>
                        <td class="border border-gray-300 px-4 py-2">Iodine test: Add 2-3 drops of iodine solution → blue-black color = starch present (genuine barfi → no color change)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Vanaspati / Vegetable Fat</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Replace expensive milk fat with cheaper hydrogenated vegetable oil</td>
                        <td class="border border-gray-300 px-4 py-2">Baudouin test (detects sesame oil marker in vanaspati). HPLC fatty acid profile (milk fat has characteristic butyric acid C4:0, absent in vegetable fat). Reichert-Meissl value <24 indicates adulteration</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Artificial Sweeteners (Saccharin)</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Reduce expensive sugar while maintaining sweetness</td>
                        <td class="border border-gray-300 px-4 py-2">HPLC analysis for saccharin/aspartame. Not permitted in traditional sweets per FSSAI</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Non-permitted Colors (Metanil Yellow)</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Impart attractive color (especially in kesar barfi to simulate saffron)</td>
                        <td class="border border-gray-300 px-4 py-2">Add concentrated HCl to sample solution → immediate pink/magenta color = metanil yellow present. TLC/HPLC for specific color identification</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Aluminum Varak (as silver)</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Cheap substitute for expensive silver leaf</td>
                        <td class="border border-gray-300 px-4 py-2">Flame test: genuine silver melts without burning; aluminum burns with white flame. XRF analysis for elemental confirmation</td>
                    </tr>
                </tbody>
            </table>
        `
    },
    hi: {
        title: "Barfi Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Barfi ka Introduction</h3>
            <p>Barfi (jise barfee ya burfee bhi likha jaata hai) sabse prestigious aur widely consumed traditional Indian milk-based sweets mein se ek hai, jise semi-solid desi dairy product (IDP) ke roop mein classify kiya gaya hai. Yeh khoya-based sweets ki category mein aati hai aur concentration aur sugar milakar milk preservation ke sabse purane forms mein se ek hai. Barfi basically ek milk fudge hai jo milk (khoya ke through) ke controlled desiccation (sukhane) aur sugar ke combination se banti hai, iske baad precise cooling se iski distinctive firm lekin smooth, halki grainy texture milti hai.</p>

            <p>Iska naam Persian word <strong>'barf'</strong> (برف) se liya gaya hai, jiska matlab hai snow (barf), jo iski traditionally white, opaque appearance ki taraf point karta hai.</p>

            <p><strong>Market Context:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li>Indian traditional sweets market: >$10 billion annually (15-20% per year grow ho raha hai)</li>
                <li>India ke total milk production (~55 million tonnes) ka lagbhag 35-40% traditional dairy products mein convert hota hai</li>
                <li>Barfi India mein total khoya consumption ka ~12-15% hai</li>
                <li>Water activity (a<sub>w</sub>): 0.80-0.90 (intermediate moisture food)</li>
                <li>Shelf life: Ambient temperature (25-30°C) par 7-15 din, Refrigeration (4-7°C) par 30-60 din</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Barfi ke liye FSSAI Standards</h3>
            <p>Barfi FSSAI ke regulations mein <strong>'Khoya based sweet'</strong> ki category mein aati hai. Standards iski quality aur composition ensure karte hain.</p>
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
                        <tr><td class="p-2 border"><strong>Total Solids (Minimum, %)</strong></td><td class="p-2 border">75.0</td><td class="p-2 border">a<sub>w</sub> kam karna (<0.90) → microbial stability, proper texture development ensure karta hai</td></tr>
                        <tr><td class="p-2 border"><strong>Milk Fat (Dry basis par, Minimum, %)</strong></td><td class="p-2 border">17.5</td><td class="p-2 border">Genuine milk origin ensure karta hai; flavour, mouthfeel aur smooth texture mein contribute karta hai</td></tr>
                        <tr><td class="p-2 border"><strong>Sucrose (Dry basis par, Maximum, %)</strong></td><td class="p-2 border">35.0</td><td class="p-2 border">Poor quality khoya ko chhupane ke liye excessive sugar milane se rokta hai</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Barfi Banane ka Science: Fundamental Principles</h3>

            <h4 class="font-semibold mt-4 mb-2">1. Base Material ke roop mein Khoya ki Role</h4>
            <p>Khoya barfi ka essential base component hai. Barfi ke liye <strong>Pindi Khoya</strong> (Moisture: 20-25%, Fat: 25-30%) sabse suitable hai kyunki:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Low Moisture:</strong> Firm body provide karta hai; cooking ke dauran kam paani evaporate karna → better control</li>
                <li><strong>Smooth Texture:</strong> Casein micelles extensively heat-denatured aur concentrated → continuous protein matrix banate hain</li>
                <li><strong>High Fat:</strong> Protein matrix mein trapped fat globules richness, smooth texture aur flavour mein contribute karte hain</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">2. Barfi mein Sugar ka Science</h4>
            <p>Sugar barfi mein sirf sweetener nahi — yeh kayi important physico-chemical functions perform karti hai:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Water Activity Reduction:</strong> Sucrose highly hydrophilic hai → a<sub>w</sub> ko 0.95 se 0.80-0.88 tak reduce karta hai → microbial growth rokta hai</li>
                <li><strong>Texture Modification:</strong> Cooling ke dauran sucrose crystallization micro-crystalline network banata hai → barfi ki firm lekin halki crumbly texture</li>
                <li><strong>Maillard Reaction Participation:</strong> Cooking ke dauran sucrose ka partial acid-catalyzed hydrolysis → Glucose + Fructose → ye milk proteins ke saath Maillard reaction karte hain → brown colour, cooked flavours</li>
                <li><strong>Osmotic Effect:</strong> High sugar concentration → microbial cells par osmotic stress → plasmolysis → growth rokta hai</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">3. Maillard Reaction aur Flavour Development</h4>
            <p>Maillard reaction barfi banane mein sabse important chemical reaction hai:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Initial Stage:</strong> Reducing sugars (khoya mein lactose) + amino groups (casein mein lysine) → Schiff base → Amadori compounds</li>
                <li><strong>Advanced Stage:</strong> Strecker degradation → Aldehydes + CO<sub>2</sub> (major flavour compounds)</li>
                <li><strong>Final Stage:</strong> Melanoidins (brown polymer compounds) bante hain → colour aur flavour</li>
                <li><strong>Key Flavour Compounds:</strong> Diacetyl (buttery), Furfural (caramel), Maltol (sweet), 2-Acetylpyrroline (roasted)</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">4. Sugar Crystallization Science</h4>
            <p>Cooling ke dauran sugar crystallization barfi ki texture determine karne wali sabse important event hai:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Crystal size <10 μm:</strong> Invisible, ultra-smooth → Excellent (ideal)</li>
                <li><strong>10-30 μm:</strong> Halka grain (pleasant) → Good</li>
                <li><strong>30-50 μm:</strong> Clearly grainy → Marginal defect</li>
                <li><strong>>50 μm:</strong> Sandy, rough → Defective</li>
            </ul>
            <p><strong>Fine crystals ke liye:</strong> Fast initial cooling (80°C→55°C) + continuous kneading + 5-10% glucose as crystal inhibitor</p>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Food Safety Controls ke saath Barfi ki Processing</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Barfi Production ke liye Processing Flow Diagram</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Raw Milk Reception aur Quality Testing <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Khoya Preparation (Khoya Processing dekhein) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Khoya ki Quality Check (Moisture, Fat, Acidity, Sensory)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Khoya ko Kneading (5-10 min, smooth, lump-free hone tak)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Sugar Grinding aur Sieving (powdered, 100-200 mesh)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Sugar Mixing aur Blending (Khoya:Sugar = 3:1 se 4:1 w/w) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Cooking/Desiccation (95-120°C, 15-30 min, continuously stirring karte hue)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Flavour/Nuts Addition (Elaichi, Kesar, Pista) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Kneading ke saath Cooling (110°C → 50°C, controlled rate) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Greased Tray mein Setting (15-20 mm thick spread karein)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Room Temperature tak Complete Cooling (25-30°C, 1-2 hours)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Decoration (Silver Vark, Nuts, Edible Decorations)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Pieces mein Cutting (Square/Diamond, har ek 25-30g)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging aur Storage <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Steps ka Detailed Scientific Description</h3>
            <ol class="list-decimal list-outside pl-5 space-y-6">
                <li>
                    <strong>Khoya Preparation (PRP):</strong>
                    <p class="mt-2">High quality wala, fresh Pindi type ka khoya primary raw material hai. Iski quality (Moisture: 20-25%, Fat: ≥25%, Acidity: ≤0.3% Lactic Acid) directly final barfi ko affect karti hai. Yeh ek <strong>Pre-Requisite Programme (PRP)</strong> hai.</p>
                    <p class="mt-2"><strong>Quality Testing:</strong> Moisture (Hot Air Oven), Fat (Gerber method), Acidity (Titration), Adulteration (Starch ke liye Iodine test — negative hona chahiye), Sensory (clean, sweet, cooked milk flavour)</p>
                </li>

                <li>
                    <strong>Khoya ko Kneading:</strong>
                    <p class="mt-2">Khoya ko 5-10 minutes tak knead kiya jaata hai. <strong>Scientific Purpose:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Structural Homogenization:</strong> Bade aggregates todhta hai, fat uniformly distribute karta hai</li>
                        <li><strong>Lactose Crystal Clusters todhna:</strong> Shear forces dwara bade crystals toothhte hain</li>
                        <li><strong>Air Incorporation:</strong> Light texture ke liye controlled air incorporation</li>
                        <li><strong>Pliability Development:</strong> Protein-fat matrix ka mechanical working → sugar ke saath uniform mixing</li>
                    </ul>
                </li>

                <li>
                    <strong>Sugar Mixing aur Blending (oPRP):</strong>
                    <p class="mt-2">Powdered sugar (100-200 mesh, <150 μm) kneaded khoya mein milayi jaati hai. Yeh <strong>oPRP</strong> hai kyunki uniform mixing consistent sweetness, texture aur crystallization ke liye zaroori hai.</p>
                    <p class="mt-2">Khoya:Sugar = 3:1 se 4:1 (sabse common: 3.5:1). Powdered sugar cooking ke dauran jaldi dissolve hoti hai → better distribution → better final texture.</p>
                </li>

                <li>
                    <strong>Cooking/Desiccation (CCP-1) — Sabse Important Step:</strong>
                    <p class="mt-2">Khoya-sugar mixture ko heavy-bottomed kadhai ya steam-jacketed kettle mein controlled heat par continuously stirring karte hue cook kiya jaata hai. Yeh <strong>CCP-1</strong> hai.</p>

                    <p class="mt-2"><strong>CCP-1 Critical Limits:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Cooking Temperature: ≥95°C (mass temperature) ≥10 minutes ke liye</li>
                        <li>Final Product Temperature: 108-118°C (end point)</li>
                        <li>Cooking Time: 15-30 minutes</li>
                        <li>End Point Test: Mass pan ke sides chhodhta hai, thande paani mein firm ball banata hai</li>
                    </ul>

                    <p class="mt-2"><strong>Cooking ke Dauran Scientific Processes:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                        <li><strong>Moisture Evaporation:</strong> Water content ~30-35% se 18-22% tak ghatti hai. Energy: ~2,260 kJ/kg paani evaporate</li>
                        <li><strong>Sugar Dissolution aur Concentration:</strong> Sugar completely dissolve hoti hai → concentrated syrup → supersaturation ki taraf (cooling ke dauran crystallization ke liye)</li>
                        <li><strong>Maillard Browning:</strong> Lactose + Protein → Melanoidins → brown colour, cooked flavour compounds</li>
                        <li><strong>Caramelization:</strong> >110°C par kuch direct sugar decomposition → butterscotch/toffee flavour</li>
                        <li><strong>Fat Redistribution:</strong> Saari milk fat liquid → protein matrix mein freely move karti hai → kuch surface par separate. Proper stirring re-incorporate karta hai</li>
                        <li><strong>Viscosity Change:</strong> 500-2,000 cP (initial) → 50,000-200,000 cP (final) → bahut thick</li>
                    </ul>

                    <p class="mt-2"><strong>End Point Determination:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Traditional "Pat Test":</strong> Thumb aur index finger ke beech dabayein → smooth, non-sticky layer banana chahiye</li>
                        <li><strong>Cold Water Ball Test:</strong> Thande paani mein daalein → firm, pliable ball (112-116°C)</li>
                        <li><strong>Refractometer:</strong> Target: 78-82°Brix</li>
                        <li><strong>Temperature:</strong> 110-118°C ka mass temperature ~78-82% total solids se match karta hai</li>
                    </ul>
                </li>

                <li>
                    <strong>Flavour aur Nuts Addition (oPRP):</strong>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Elaichi (Cardamom):</strong> 0.2-0.5% powdered. Volatile oils (1,8-Cineole, Linalool) → sweet, aromatic flavour. End mein milayein (volatile compounds preserve karne ke liye)</li>
                        <li><strong>Kesar (Saffron):</strong> 0.01-0.05% garam doodh mein ghol kar. Crocin (colour), Picrocrocin (flavour), Safranal (aroma)</li>
                        <li><strong>Nuts (Pista, Badam, Kaju):</strong> 3-10% chopped/sliced. Crunchy texture maintain karne ke liye late mein milayein</li>
                    </ul>
                </li>

                <li>
                    <strong>Cooling aur Setting (oPRP) — Important Texture Development Stage:</strong>
                    <p class="mt-2">Cooked mass ko ghee lagi tray mein 15-20 mm thickness tak spread kiya jaata hai.</p>

                    <p class="mt-2"><strong>Cooling Profile:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                        <li><strong>Phase 1 (110°C→80°C, 5-10 min):</strong> Kneading ke saath fast cooling. Sugar supersaturation badhti hai</li>
                        <li><strong>Phase 2 (80°C→55°C, 10-20 min):</strong> <strong>Critical: Massive crystal nucleation zone.</strong> Is phase mein kneading = fine crystals. Kneading nahi = few, large crystals (defect!)</li>
                        <li><strong>Phase 3 (55°C→35°C, 15-30 min):</strong> Crystal nuclei final size tak grow karte hain. Fat solidification jaari. Protein matrix semi-rigid network mein set</li>
                        <li><strong>Phase 4 (35°C→25°C, 30-60 min):</strong> Final firming. Fat completely crystallized. Cuttable consistency</li>
                    </ul>
                </li>

                <li>
                    <strong>Decoration aur Cutting:</strong>
                    <p class="mt-2">Partially set hone par (30-35°C) silver vark, nuts lagayein. Completely set hone par (25-30°C) desired shapes (square/diamond, 25-30g each) mein cut karein.</p>
                </li>

                <li>
                    <strong>Packaging aur Storage (PRP):</strong>
                    <p class="mt-2"><strong>Storage Conditions:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Ambient (25-30°C): Shelf life 7-15 din. Main spoilage: mould growth, yeast fermentation</li>
                        <li>Refrigerated (4-7°C): Shelf life 30-60 din. Microbial growth rate 3-5× kam</li>
                        <li>MAP (N<sub>2</sub> flush): Shelf life 30-45 din (ambient), 60-90 din (refrigerated)</li>
                    </ul>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Barfi mein Common Defects</h3>
            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Defect</th>
                        <th class="border border-gray-300 px-4 py-2">Scientific Cause</th>
                        <th class="border border-gray-300 px-4 py-2">Prevention</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Sandiness (Reteelapan)</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Bade sugar/lactose crystals (>50 μm) — slow, uncontrolled cooling</td>
                        <td class="border border-gray-300 px-4 py-2">80-55°C par continuous kneading ke saath controlled fast cooling. 5-10% glucose milayein</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Hard/Dry Texture</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Over-cooking (>120°C → excessive moisture removal → TS >85%)</td>
                        <td class="border border-gray-300 px-4 py-2">Precise end-point temperature control (110-116°C). Refractometer se 78-82°Brix target</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Soft/Sticky</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Under-cooking (<108°C → insufficient moisture removal → TS <75%)</td>
                        <td class="border border-gray-300 px-4 py-2">Proper end point tak cooking continue karein</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Oily/Greasy</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Cooking ke dauran fat separation — excessive heating rate, insufficient stirring</td>
                        <td class="border border-gray-300 px-4 py-2">Moderate heating rate. Continuous slow stirring. Cooking se pehle khoya ko achhe se knead karna</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Dark/Burnt Colour</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Excessive Maillard reaction. Pan contact surface par localized overheating</td>
                        <td class="border border-gray-300 px-4 py-2">Fresh, low acidity wala khoya. Pan bottom ke paas continuous stirring. Uniform heat distribution ke liye steam-jacketed kettle</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Sour/Off-flavour</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Stale khoya (high lactic acid). Rancid khoya (lipase → free fatty acids)</td>
                        <td class="border border-gray-300 px-4 py-2">Sirf fresh khoya use karein (acidity <0.3% LA). Proper cold chain</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Mould Growth</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Post-production contamination, surface moisture condensation, a<sub>w</sub> >0.80</td>
                        <td class="border border-gray-300 px-4 py-2">Hygienic production environment. Moisture-barrier packaging. Refrigerated storage</td>
                    </tr>
                </tbody>
            </table>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Barfi ki Nutritional Composition</h3>
            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Nutrient</th>
                        <th class="border border-gray-300 px-4 py-2">Plain Barfi (per 100g)</th>
                        <th class="border border-gray-300 px-4 py-2">Kaju Barfi (per 100g)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td class="border border-gray-300 px-4 py-2">Energy (kcal)</td><td class="border border-gray-300 px-4 py-2">380-420</td><td class="border border-gray-300 px-4 py-2">450-500</td></tr>
                    <tr><td class="border border-gray-300 px-4 py-2">Moisture (%)</td><td class="border border-gray-300 px-4 py-2">18-22</td><td class="border border-gray-300 px-4 py-2">12-18</td></tr>
                    <tr><td class="border border-gray-300 px-4 py-2">Total Fat (g)</td><td class="border border-gray-300 px-4 py-2">15-20</td><td class="border border-gray-300 px-4 py-2">22-28</td></tr>
                    <tr><td class="border border-gray-300 px-4 py-2">Protein (g)</td><td class="border border-gray-300 px-4 py-2">10-14</td><td class="border border-gray-300 px-4 py-2">12-16</td></tr>
                    <tr><td class="border border-gray-300 px-4 py-2">Carbohydrate (g)</td><td class="border border-gray-300 px-4 py-2">45-55</td><td class="border border-gray-300 px-4 py-2">40-48</td></tr>
                    <tr><td class="border border-gray-300 px-4 py-2">Calcium (mg)</td><td class="border border-gray-300 px-4 py-2">200-350</td><td class="border border-gray-300 px-4 py-2">150-250</td></tr>
                </tbody>
            </table>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Barfi mein Adulteration Detection</h3>
            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Adulterant</th>
                        <th class="border border-gray-300 px-4 py-2">Purpose</th>
                        <th class="border border-gray-300 px-4 py-2">Detection Method</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Starch</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Quantity badhana, cheap filler</td>
                        <td class="border border-gray-300 px-4 py-2">Iodine Test: Blue-black colour = Starch present</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Vanaspati/Vegetable Fat</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Expensive milk fat ki jagah</td>
                        <td class="border border-gray-300 px-4 py-2">Baudouin Test. HPLC Fatty Acid Profile. Reichert-Meissl value <24</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Artificial Colour (Metanil Yellow)</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Attractive colour (Kesar barfi mein saffron ki nakal)</td>
                        <td class="border border-gray-300 px-4 py-2">Concentrated HCl milayein → turant pink/magenta colour = Metanil Yellow present</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Aluminium Vark (Silver ke roop mein)</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Expensive silver leaf ka cheap substitute</td>
                        <td class="border border-gray-300 px-4 py-2">Flame Test: Asli silver bina jale pighalti hai; Aluminium white flame se jalta hai</td>
                    </tr>
                </tbody>
            </table>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Barfi ki Varieties</h3>
            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Variety</th>
                        <th class="border border-gray-300 px-4 py-2">Main Ingredients</th>
                        <th class="border border-gray-300 px-4 py-2">Characteristics</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td class="border border-gray-300 px-4 py-2"><strong>Plain (Milk) Barfi</strong></td><td class="border border-gray-300 px-4 py-2">Khoya + Sugar</td><td class="border border-gray-300 px-4 py-2">White/cream colour, pure milk flavour</td></tr>
                    <tr><td class="border border-gray-300 px-4 py-2"><strong>Kaju Barfi</strong></td><td class="border border-gray-300 px-4 py-2">Cashew Paste</td><td class="border border-gray-300 px-4 py-2">Premium, smooth, rich, diamond shape, silver vark</td></tr>
                    <tr><td class="border border-gray-300 px-4 py-2"><strong>Pista Barfi</strong></td><td class="border border-gray-300 px-4 py-2">Pistachio Paste/Pieces</td><td class="border border-gray-300 px-4 py-2">Green colour (natural chlorophyll), nutty flavour</td></tr>
                    <tr><td class="border border-gray-300 px-4 py-2"><strong>Besan Barfi</strong></td><td class="border border-gray-300 px-4 py-2">Roasted Gram Flour</td><td class="border border-gray-300 px-4 py-2">Yellow colour, roasted flavour, slightly crumbly</td></tr>
                    <tr><td class="border border-gray-300 px-4 py-2"><strong>Coconut Barfi</strong></td><td class="border border-gray-300 px-4 py-2">Dry/Fresh Coconut</td><td class="border border-gray-300 px-4 py-2">White, coconut aroma, shredded texture</td></tr>
                    <tr><td class="border border-gray-300 px-4 py-2"><strong>Kesar Barfi</strong></td><td class="border border-gray-300 px-4 py-2">Saffron Strands</td><td class="border border-gray-300 px-4 py-2">Golden-orange colour, delicate aroma, premium</td></tr>
                    <tr><td class="border border-gray-300 px-4 py-2"><strong>Chocolate Barfi</strong></td><td class="border border-gray-300 px-4 py-2">Cocoa Powder/Chocolate</td><td class="border border-gray-300 px-4 py-2">Brown colour, traditional + modern fusion</td></tr>
                </tbody>
            </table>
        `
    }
};
