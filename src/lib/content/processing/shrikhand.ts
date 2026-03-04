
export const shrikhandContent = {
    en: {
        title: "Shrikhand Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Shrikhand</h3>
            <p>Shrikhand is a semi-soft, sweetish-sour, whole milk fermented dairy product traditional to the western Indian states of Gujarat, Maharashtra, and Karnataka. Etymologically, the word is derived from the Sanskrit <em>"Shri"</em> (meaning prosperity/auspicious) and <em>"Khand"</em> (meaning a portion or sugar), reflecting its status as a celebratory dessert. It is prepared from <strong>'Chakka'</strong> (strained curd / concentrated dahi), which serves as the base matrix. The process involves fermenting milk with mesophilic lactic acid bacteria to form dahi (curd), straining the whey to yield chakka (containing 70–80% total solids depending on the extent of drainage), and then blending the chakka with sugar (sucrose), cream, and flavorings (cardamom, saffron, nutmeg, fruit pulp) to achieve a smooth, rich, and creamy consistency.</p>
            <p class="mt-2">Shrikhand is classified as a fermented concentrated sweetened dairy product. According to <strong>IS 16507:2017 (BIS Standard)</strong>, it is defined as the product obtained from dahi (curd) by draining the whey and adding sugar, with or without the addition of cream, color, flavoring, fruits, and nuts. The product is characterized by its high total solids content (≥58%), smooth body, pleasant acid-sweet taste, and a shelf life of 30–40 days under refrigeration (≤5°C).</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Historical and Cultural Significance</h4>
            <p>Historically, Shrikhand preparation dates back centuries in Indian culinary tradition. The earliest references appear in Marathi and Gujarati texts describing the draining of curd through cloth bags. In traditional households, dahi was hung in muslin cloth overnight to produce <em>mattha</em> (whey) and <em>chakka</em>. The chakka was then hand-ground with sugar on a stone slab (<em>pata-warwanta</em>) to produce Shrikhand. Modern industrial production has mechanized these steps while preserving the fundamental biochemical transformations.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Biochemical Basis of Shrikhand</h4>
            <p>Shrikhand is fundamentally a product of <strong>homo-lactic fermentation</strong>, wherein lactose (C₁₂H₂₂O₁₁) is metabolized by lactic acid bacteria (LAB) via the <strong>Embden–Meyerhof–Parnas (EMP) glycolytic pathway</strong> to yield primarily L(+)-lactic acid:</p>
            <div class="bg-gray-100 p-3 rounded mt-2 text-center font-mono text-sm">
                C₁₂H₂₂O₁₁ + H₂O → 2 C₆H₁₂O₆ (glucose + galactose) → 4 CH₃CHOHCOOH (lactic acid)
            </div>
            <p class="mt-2">The accumulation of lactic acid reduces the pH from ~6.6 (fresh milk) to ~4.5–4.7, causing destabilization of the casein micelle structure. At the <strong>isoelectric point of casein (pH 4.6)</strong>, the net charge on κ-casein approaches zero, collapsing the electrostatic repulsion between micelles. This leads to aggregation of casein into a continuous gel network (coagulum/dahi). The subsequent drainage of whey from this gel (syneresis) concentrates the casein–fat matrix to form chakka.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Regulatory Standards for Shrikhand</h3>
            
            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">FSSAI Standards (FSSR 2011, as amended)</h4>
            <p>The Food Safety and Standards Authority of India (FSSAI) under the <strong>Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011</strong> has defined standards for Shrikhand to ensure its quality and safety for the consumer.</p>
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
                            <td class="p-2 border"><strong>Total Solids (min, %)</strong></td>
                            <td class="p-2 border">58.0</td>
                            <td class="p-2 border">Ensures adequate concentration; lower TS indicates insufficient whey drainage or excess dilution. High TS reduces water activity (a<sub>w</sub>), contributing to microbial stability.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat (on dry basis, min, %)</strong></td>
                            <td class="p-2 border">8.5</td>
                            <td class="p-2 border">Minimum fat ensures characteristic smooth, creamy mouthfeel. Fat globules act as active fillers in the casein gel network, influencing rheology and flavor release.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Protein (on dry basis, min, %)</strong></td>
                            <td class="p-2 border">9.0</td>
                            <td class="p-2 border">Ensures the product is genuinely derived from milk/dahi and not merely a sugar–starch paste. Casein provides the structural matrix and contributes to textural firmness.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sucrose (on dry basis, max, %)</strong></td>
                            <td class="p-2 border">72.5</td>
                            <td class="p-2 border">Upper limit prevents the product from being excessively sweet and ensures a minimum proportion of milk-derived solids. High sucrose also depresses a<sub>w</sub>.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Total Ash (on dry basis, max, %)</strong></td>
                            <td class="p-2 border">0.9</td>
                            <td class="p-2 border">Indicates mineral content from milk solids. Unusually high ash may indicate adulteration with mineral salts or impure sugar.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Titratable Acidity (% lactic acid)</strong></td>
                            <td class="p-2 border">1.0–2.0 (typical)</td>
                            <td class="p-2 border">Reflects adequate fermentation. Acidity below 1.0% suggests under-fermentation; above 2.0% suggests over-fermentation or excessive culture activity.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">BIS Standards (IS 16507:2017)</h4>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Fruit Shrikhand</th>
                            <th class="p-2 border">Plain Shrikhand</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Total Solids (min, %)</strong></td>
                            <td class="p-2 border">55.0</td>
                            <td class="p-2 border">58.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat (on dry basis, min, %)</strong></td>
                            <td class="p-2 border">5.0</td>
                            <td class="p-2 border">8.5</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fruit content (min, %)</strong></td>
                            <td class="p-2 border">10.0</td>
                            <td class="p-2 border">Not applicable</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Microbiological Standards</h4>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Microorganism</th>
                            <th class="p-2 border">Limit (per g)</th>
                            <th class="p-2 border">Significance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Total Plate Count</strong></td>
                            <td class="p-2 border">≤ 5 × 10⁴ CFU/g</td>
                            <td class="p-2 border">General hygiene indicator</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Coliform Count</strong></td>
                            <td class="p-2 border">≤ 10 CFU/g</td>
                            <td class="p-2 border">Indicator of post-pasteurization contamination or fecal origin</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>E. coli</em></strong></td>
                            <td class="p-2 border">Absent in 1 g</td>
                            <td class="p-2 border">Fecal contamination indicator; potential pathogen</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>Staphylococcus aureus</em></strong></td>
                            <td class="p-2 border">≤ 100 CFU/g</td>
                            <td class="p-2 border">Enterotoxin-producing pathogen; heat-stable toxins survive pasteurization</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>Salmonella</em></strong></td>
                            <td class="p-2 border">Absent in 25 g</td>
                            <td class="p-2 border">Pathogenic; zero tolerance in ready-to-eat dairy products</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>Listeria monocytogenes</em></strong></td>
                            <td class="p-2 border">Absent in 25 g</td>
                            <td class="p-2 border">Psychrotrophic pathogen capable of growth at refrigeration temperatures</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Yeast & Mold</strong></td>
                            <td class="p-2 border">≤ 50 CFU/g</td>
                            <td class="p-2 border">Spoilage organisms; osmotolerant yeasts can grow in high-sugar environment</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Starter Cultures and Microbiology of Fermentation</h3>
            <p>The fermentation of milk to produce dahi (and subsequently chakka) relies on carefully selected <strong>lactic acid bacteria (LAB)</strong> starter cultures. The choice of culture profoundly impacts the acidity profile, flavor development, texture, and aroma of the final Shrikhand.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Organisms Used</h4>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Organism</th>
                            <th class="p-2 border">Type</th>
                            <th class="p-2 border">Optimum Temp (°C)</th>
                            <th class="p-2 border">Primary Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><em>Lactococcus lactis</em> subsp. <em>lactis</em></td>
                            <td class="p-2 border">Mesophilic, homofermentative</td>
                            <td class="p-2 border">28–32</td>
                            <td class="p-2 border">Primary acid production (L-lactic acid); rapid pH drop</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><em>Lactococcus lactis</em> subsp. <em>cremoris</em></td>
                            <td class="p-2 border">Mesophilic, homofermentative</td>
                            <td class="p-2 border">22–30</td>
                            <td class="p-2 border">Milder acid production; contributes to smoother body and creamier texture</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><em>Lactococcus lactis</em> subsp. <em>lactis</em> biovar <em>diacetylactis</em></td>
                            <td class="p-2 border">Mesophilic, citrate-fermenting</td>
                            <td class="p-2 border">25–30</td>
                            <td class="p-2 border">Produces diacetyl (2,3-butanedione) and CO₂ from citrate; key butter/cream aroma compound</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><em>Leuconostoc mesenteroides</em> subsp. <em>cremoris</em></td>
                            <td class="p-2 border">Mesophilic, heterofermentative</td>
                            <td class="p-2 border">20–30</td>
                            <td class="p-2 border">Produces diacetyl, acetoin, ethanol, CO₂; contributes to complex flavor profile and slight effervescence in dahi</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><em>Streptococcus thermophilus</em></td>
                            <td class="p-2 border">Thermophilic, homofermentative</td>
                            <td class="p-2 border">40–45</td>
                            <td class="p-2 border">Used in some industrial formulations; rapid acid producer; exopolysaccharide (EPS) production improves viscosity</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><em>Lactobacillus delbrueckii</em> subsp. <em>bulgaricus</em></td>
                            <td class="p-2 border">Thermophilic, homofermentative</td>
                            <td class="p-2 border">40–45</td>
                            <td class="p-2 border">Strong acid producer; proteolytic activity releases amino acids contributing to flavor complexity; produces acetaldehyde (yogurt-like aroma)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Biochemistry of Flavor Development</h4>
            <p>The characteristic flavor of Shrikhand arises from a complex interplay of metabolic pathways in LAB:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Lactic acid (primary metabolite):</strong> Provides the clean acidic taste. Concentration in chakka ranges from 1.2–1.8% (as lactic acid). The L(+) isomer predominates with mesophilic cultures, which is nutritionally preferred as it is readily metabolized by human L-lactate dehydrogenase.</li>
                <li><strong>Diacetyl (2,3-butanedione, C₄H₆O₂):</strong> The signature buttery/creamy aroma compound. Produced by <em>Lc. lactis</em> biovar <em>diacetylactis</em> and <em>Leuconostoc</em> spp. from citrate via the intermediate α-acetolactate. Typical concentration: 1–5 mg/kg in good-quality dahi. The pathway is:
                    <div class="bg-gray-100 p-2 rounded mt-1 text-sm font-mono">
                        Citrate → Oxaloacetate → Pyruvate → α-Acetolactate → Diacetyl (oxidative decarboxylation) or Acetoin (non-oxidative decarboxylation)
                    </div>
                </li>
                <li><strong>Acetaldehyde (CH₃CHO):</strong> Provides a green-apple / yogurt-like note. Produced primarily by <em>Lb. delbrueckii</em> subsp. <em>bulgaricus</em> from threonine via threonine aldolase. Typical concentration in dahi: 5–40 mg/kg.</li>
                <li><strong>Acetic acid:</strong> Minor contributor; produced by heterofermentative LAB. Enhances sharpness at low levels but is considered a defect at high levels (>0.1%).</li>
                <li><strong>Free amino acids and peptides:</strong> Proteolysis by LAB cell-envelope proteinases (CEP, e.g., PrtP) releases peptides and free amino acids (especially proline, leucine, glutamate) that contribute to savory (umami) and complex background flavors. These also serve as precursors for volatile compounds via Strecker degradation during storage.</li>
                <li><strong>Free fatty acids:</strong> Limited lipolysis by LAB esterases releases short-chain fatty acids (C₄:₀ butyric, C₆:₀ caproic, C₈:₀ caprylic) that contribute to characteristic dairy flavor notes.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Exopolysaccharide (EPS) Production and Texture</h4>
            <p>Certain LAB strains (particularly ropy strains of <em>S. thermophilus</em> and <em>Lc. lactis</em> subsp. <em>cremoris</em>) produce exopolysaccharides (EPS) during fermentation. These are high-molecular-weight polysaccharides (10⁴–10⁶ Da) composed of repeating units of glucose, galactose, and rhamnose. EPS bind water, increase viscosity, reduce syneresis in the dahi, and contribute to a smoother, creamier mouthfeel in the final Shrikhand. Research (Purohit et al., 2009; Patel & Prajapati, 2013) has shown that EPS-producing cultures can increase the yield of chakka by 3–5% due to enhanced water-holding capacity.</p>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Shrikhand with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Shrikhand Production</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception, Testing & Filtration <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Standardization (Fat: 4.5–5.0%, SNF: 8.5–9.0%) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Pre-heating (60–65°C) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Homogenization (150–200 kg/cm² at 60°C) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Heat Treatment (90°C / 10 min or 85°C / 30 min)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded font-bold">CCP-1 (Biological)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling to Incubation Temperature (28–32°C for mesophilic; 42–45°C for thermophilic) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Inoculation with Lactic Starter Culture (1.5–2.0% v/v) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded"><strong>Incubation & Curd Formation (8–12 h mesophilic / 4–6 h thermophilic; target pH 4.4–4.7, acidity 0.7–0.9% LA)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded font-bold">CCP-2 (Biological)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Breaking of Curd & Draining of Whey — Muslin Cloth / Quarg Separator / Centrifuge <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-200 border border-purple-400 rounded"><strong>Chakka</strong> (TS: 25–30%; Fat: 12–15% on dry basis; Acidity: 1.2–1.8% LA; pH 4.0–4.5)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Mixing Chakka with Sugar (40–45% w/w), Cream, Color & Flavorings <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Blending / Homogenization (Colloid Mill / Planetary Mixer)</strong> <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Finished Shrikhand</strong> (TS: ≥58%; pH 3.8–4.5; a<sub>w</sub>: 0.83–0.87)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Filling & Packaging (Aseptic / Clean-fill into PP/PS cups, hermetic seal) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded"><strong>Cold Storage & Distribution (≤5°C; shelf life: 30–40 days)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded font-bold">CCP-3 (Biological)</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps with Scientific Rationale</h3>
            <ol class="list-decimal list-outside pl-5 space-y-6">
                <li><strong>Milk Reception, Testing, and Standardization (PRP)</strong>
                    <p>Only high-quality milk meeting FSSAI standards (Fat ≥ 3.0% for toned, ≥ 6.0% for buffalo; SNF ≥ 8.5%) is accepted. Platform tests include:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Organoleptic evaluation:</strong> Appearance, odor, taste — to reject milk with off-flavors (rancid, oxidized, feed-related).</li>
                        <li><strong>Clot-on-boiling (COB) test:</strong> Detects milk with high acidity (>0.18% LA) or abnormal salt balance; such milk would produce a weak, grainy curd.</li>
                        <li><strong>Alcohol test (68% or 75% ethanol):</strong> Screens for high-acidity or colostral milk unsuitable for heat treatment.</li>
                        <li><strong>Methylene blue reduction test (MBRT):</strong> MBRT > 2 hours indicates acceptable microbial quality (< 5 × 10⁶ CFU/mL).</li>
                        <li><strong>Lactometer reading:</strong> Detects water adulteration; corrected lactometer reading (CLR) at 27°C should be ≥ 26 for cow milk and ≥ 28 for buffalo milk.</li>
                        <li><strong>Fat (Gerber method) and SNF (by formula or IR analyzer):</strong> For standardization to target composition.</li>
                        <li><strong>Somatic Cell Count (SCC):</strong> SCC > 400,000 cells/mL indicates subclinical mastitis; such milk has elevated plasmin activity, reduced casein content, and higher whey protein, leading to soft, weak curd with poor whey drainage — directly impacting chakka yield and quality.</li>
                    </ul>
                    <p class="mt-2"><strong>Standardization:</strong> Milk is standardized to <strong>Fat: 4.5–5.0%</strong> and <strong>SNF: 8.5–9.0%</strong> using Pearson's square method. Buffalo milk (Fat: 6–8%, SNF: 9–10%) is traditionally preferred for Shrikhand due to its higher casein content (3.5–4.0% vs. 2.5–3.0% in cow milk), which produces a firmer curd, higher chakka yield (20–22% from buffalo vs. 15–18% from cow milk), and a richer, whiter product. The higher calcium content in buffalo milk casein micelles (35 mg Ca/g casein vs. 30 mg/g in cow milk) also contributes to a firmer gel structure.</p>
                </li>

                <li><strong>Pre-heating and Homogenization (PRP)</strong>
                    <p>Milk is pre-heated to <strong>60–65°C</strong> and then homogenized at <strong>150–200 kg/cm² (first stage: 150 kg/cm², second stage: 50 kg/cm²)</strong>.</p>
                    <p class="mt-2"><strong>Scientific rationale:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Homogenization reduces the average fat globule diameter from 3–5 μm to < 1 μm, increasing the total fat-surface area by 4–6 fold.</li>
                        <li>The newly created fat globule surfaces are coated with casein micelle fragments and whey proteins (predominantly β-lactoglobulin and α-lactalbumin), forming a new membrane (recombined membrane).</li>
                        <li>These casein-coated fat globules now behave as "pseudo-protein particles" and participate actively in the acid-gel network during fermentation, acting as <strong>active fillers</strong>. This results in a firmer, more viscous dahi with reduced free whey separation.</li>
                        <li>Prevents cream layer formation during incubation.</li>
                        <li>Improves the whiteness and opacity of the final Shrikhand due to enhanced light scattering by smaller fat globules.</li>
                    </ul>
                </li>

                <li><strong>Heat Treatment — CCP-1 (Biological Hazard)</strong>
                    <p>The standardized and homogenized milk is heated to <strong>90°C for 10 minutes</strong> (or equivalently 85°C for 30 minutes). This is the most critical processing step.</p>
                    <p class="mt-2"><strong>Critical Limits:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Temperature: ≥ 90°C (monitored by calibrated RTD/thermocouple sensors integrated with PLC)</li>
                        <li>Holding time: ≥ 10 minutes (verified by flow rate and holding tube design)</li>
                        <li>Automatic flow diversion valve (FDV) diverts under-heated milk back to the balance tank</li>
                    </ul>
                    <p class="mt-2"><strong>Scientific rationale and effects:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                        <li><strong>Pathogen destruction:</strong> This treatment provides a >12D kill of <em>Coxiella burnetii</em> (the most heat-resistant non-spore-forming pathogen in milk; D₇₂ = 0.01 s) and >6D kill of <em>Mycobacterium tuberculosis</em>, <em>Salmonella</em> spp., <em>Listeria monocytogenes</em> (D₇₂ = 0.5–2.0 s), and <em>E. coli</em> O157:H7 (D₆₄ = 9.6 s). The process achieves commercial sterility for vegetative pathogens.</li>
                        <li><strong>Whey protein denaturation:</strong> At 90°C/10 min, approximately <strong>85–95% of β-lactoglobulin (β-Lg)</strong> and <strong>70–80% of α-lactalbumin (α-La)</strong> are denatured. The denatured whey proteins, particularly β-Lg, form disulfide-linked complexes with κ-casein on the surface of casein micelles via thiol-disulfide interchange reactions (the sulfhydryl group of β-Lg Cys-121 reacts with the disulfide bond of κ-casein Cys-11–Cys-88). This:
                            <ul class="list-circle list-outside pl-5 mt-1 space-y-1">
                                <li>Increases the <strong>water-holding capacity (WHC)</strong> of the acid gel by 15–25%</li>
                                <li>Increases <strong>chakka yield by 10–15%</strong> compared to low-heat-treated milk</li>
                                <li>Produces a firmer, more cohesive gel with reduced syneresis</li>
                                <li>Creates a smoother, creamier mouthfeel in the final Shrikhand</li>
                            </ul>
                        </li>
                        <li><strong>Lactoperoxidase inactivation:</strong> Destroys indigenous enzyme lactoperoxidase (inactivated at >78°C), confirming adequate heat treatment (negative LP test).</li>
                        <li><strong>Destruction of indigenous lipases and proteases:</strong> Native milk lipoprotein lipase (LPL) is inactivated at >72°C. However, bacterial heat-stable proteases (from psychrotrophic <em>Pseudomonas</em> spp., if present in raw milk at >10⁶ CFU/mL) may survive 90°C and cause bitter peptide formation during storage.</li>
                        <li><strong>Elimination of bacteriophages:</strong> Destroys lactic bacteriophages that could lyse the starter culture and cause slow/dead vat (fermentation failure). Most dairy phages are inactivated at >72°C/15 s.</li>
                        <li><strong>Maillard reaction (limited):</strong> At 90°C/10 min, slight Maillard browning occurs between lactose and lysine residues in casein, contributing a subtle cooked/caramelized note. Excessive heat (e.g., UHT conditions) would cause undesirable browning and off-flavors.</li>
                    </ul>
                    <p class="mt-2"><strong>Monitoring & Corrective Actions:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Continuous temperature recording with chart recorder/data logger</li>
                        <li>Automatic FDV activation if T < 90°C</li>
                        <li>Phosphatase test (must be negative; bovine alkaline phosphatase is inactivated at 72°C/15 s) and Turbidity test (must be positive; indicates whey protein denaturation > 80°C) to verify post-process</li>
                        <li>If CCP is breached: re-pasteurize, investigate root cause, hold product for disposition</li>
                    </ul>
                </li>

                <li><strong>Cooling to Incubation Temperature (oPRP)</strong>
                    <p>The heat-treated milk must be cooled rapidly (within 30 minutes) to the <strong>incubation temperature</strong>:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>28–32°C</strong> for mesophilic cultures (<em>Lactococcus</em> spp., <em>Leuconostoc</em> spp.)</li>
                        <li><strong>42–45°C</strong> for thermophilic cultures (<em>S. thermophilus</em>, <em>Lb. bulgaricus</em>)</li>
                    </ul>
                    <p class="mt-2"><strong>Scientific rationale:</strong> Rapid cooling through the <strong>"danger zone" (20–45°C)</strong> for mesophilic spoilage organisms is essential. Cooling is achieved using plate heat exchangers (PHE) with chilled water. Slow cooling allows growth of thermoduric or surviving spore-forming organisms (<em>Bacillus cereus</em>, which has spores surviving 90°C/10 min with D₁₀₀ = 2.7 min) and potential bacteriophage contamination from the environment.</p>
                    <p class="mt-2"><strong>oPRP Control:</strong> Temperature monitored at PHE outlet; if temperature deviates from target (±2°C), cooling water flow rate is adjusted. If inoculation temperature is too high (>35°C for mesophilic), it will selectively favor thermophilic contaminants and damage mesophilic starter cells, leading to a harsh, excessively acidic product.</p>
                </li>

                <li><strong>Inoculation with Starter Culture (oPRP)</strong>
                    <p>Lactic starter culture is added at <strong>1.5–2.0% (v/v)</strong> of bulk starter or <strong>DVS (Direct Vat Set) freeze-dried culture</strong> at manufacturer-recommended dosage (typically 10–50 U per 1000 L). The culture is dispersed uniformly using in-line mixing or gentle agitation for 5–10 minutes.</p>
                    <p class="mt-2"><strong>oPRP Controls:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Starter activity is verified before use (acid production test: the bulk starter should develop ≥ 0.70% LA in 6 h at 30°C)</li>
                        <li>Rotation of culture strains (phage-unrelated strains) to prevent bacteriophage accumulation in the plant environment</li>
                        <li>Use of phage-resistant media for bulk starter preparation (containing phosphate buffers to chelate Ca²⁺ required for phage adsorption)</li>
                        <li>DVS cultures are handled aseptically; foil packaging opened just before use in a clean zone with HEPA filtration</li>
                    </ul>
                </li>

                <li><strong>Incubation and Curd Formation — CCP-2 (Biological Hazard)</strong>
                    <p>The inoculated milk is held undisturbed (quiescent incubation) in jacketed stainless steel vats or incubation tanks at the set temperature for the required duration:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Mesophilic (30°C):</strong> 8–12 hours; target endpoint pH 4.4–4.7, titratable acidity 0.70–0.90% LA</li>
                        <li><strong>Thermophilic (43°C):</strong> 4–6 hours; target endpoint pH 4.3–4.6, titratable acidity 0.80–1.00% LA</li>
                    </ul>
                    <p class="mt-2"><strong>Critical Limits:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>pH at end of incubation: ≤ 4.6 (below the isoelectric point of casein)</li>
                        <li>Time to reach pH 4.6: ≤ 12 hours (mesophilic) / ≤ 6 hours (thermophilic)</li>
                        <li>Incubation temperature maintained within ±1°C of set point</li>
                    </ul>
                    <p class="mt-2"><strong>Scientific rationale — Why is pH 4.6 critical for safety?</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                        <li>A pH ≤ 4.6 is the <strong>growth/toxin boundary for <em>Clostridium botulinum</em></strong>. Below this pH, <em>C. botulinum</em> cannot germinate from spores or produce botulinum toxin. This makes pH 4.6 the single most critical food safety parameter in acid/fermented foods.</li>
                        <li><em>Staphylococcus aureus</em> enterotoxin production ceases below pH 4.5 (growth minimum pH: 4.0 in aerobic conditions, but toxin production stops at 4.5).</li>
                        <li><em>Salmonella</em> spp. minimum growth pH is 3.8–4.0 but is effectively inhibited below 4.6 in the presence of lactic acid (which has a pKa of 3.86; at pH 4.6, approximately 85% of lactic acid is in the undissociated form, which can permeate the bacterial cell membrane and acidify the cytoplasm).</li>
                        <li><em>Listeria monocytogenes</em> minimum growth pH is 4.3–4.4; the combination of pH < 4.6 and refrigeration (< 5°C) provides a double hurdle.</li>
                    </ul>
                    <p class="mt-2"><strong>Gel Formation Mechanism (detailed):</strong></p>
                    <p>As pH drops from 6.6 to 4.6 during fermentation, the following sequential physicochemical changes occur in the casein micelle system:</p>
                    <ol class="list-decimal list-outside pl-5 mt-1 space-y-1">
                        <li><strong>pH 6.6–6.0:</strong> Dissolution of colloidal calcium phosphate (CCP) from the micelle interior begins. CCP (micellar calcium phosphate nanoclusters, ~2.5 nm, composed of Ca₉(PO₄)₆ linked to phosphoserine residues of αs1-, αs2-, and β-caseins) starts dissolving as [H⁺] increases, destabilizing internal micellar cross-links.</li>
                        <li><strong>pH 6.0–5.5:</strong> CCP dissolution accelerates; ~50% of micellar Ca²⁺ is solubilized. Micelles begin to swell as internal cohesion decreases. The hairy layer of κ-casein (C-terminal glycomacropeptide, GMP) starts to collapse as its charge decreases.</li>
                        <li><strong>pH 5.5–5.0:</strong> Near-complete dissolution of CCP. Micelles lose their internal nanocluster cross-links. The zeta potential of casein approaches zero (isoelectric range: 4.6 for β-casein, 4.9 for αs1-casein). Electrostatic repulsion diminishes. Hydrophobic interactions between caseins become dominant, leading to micelle–micelle aggregation.</li>
                        <li><strong>pH 5.0–4.6:</strong> Massive aggregation occurs. The denatured whey protein–κ-casein complexes (formed during heat treatment) act as bridging agents between aggregating micelles, creating a continuous three-dimensional gel network. Fat globules (coated with casein from homogenization) are entrapped as structural elements within this network.</li>
                        <li><strong>pH < 4.6:</strong> Gel is fully formed. Further acidification increases gel firmness slightly but also increases syneresis tendency as the gel network contracts. Optimal endpoint for chakka preparation is pH 4.4–4.6.</li>
                    </ol>
                    <p class="mt-2"><strong>Monitoring & Corrective Actions:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>pH monitored every 2 hours during incubation using calibrated pH meter (electrode calibrated at pH 4.0 and 7.0)</li>
                        <li>If pH 4.6 is not achieved within the specified time: investigate culture activity (phage attack, antibiotic residues in milk, sanitizer carryover). Corrective action: discard batch; never extend incubation indefinitely, as this allows extended time in the danger zone.</li>
                        <li>Records: pH/time/temperature log for each batch; retained for product shelf life + 1 year.</li>
                    </ul>
                </li>

                <li><strong>Breaking of Curd and Draining of Whey — Chakka Production (oPRP)</strong>
                    <p>The firm dahi is broken gently (to avoid excessive fat loss into whey) and whey is drained. Three methods are used industrially:</p>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Method</th>
                                    <th class="p-2 border">Principle</th>
                                    <th class="p-2 border">Advantages</th>
                                    <th class="p-2 border">Limitations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong>Muslin Cloth (Traditional)</strong></td>
                                    <td class="p-2 border">Gravity drainage; curd hung in cloth for 8–12 h at < 10°C</td>
                                    <td class="p-2 border">Simple; no capital cost</td>
                                    <td class="p-2 border">Time-consuming; labor-intensive; hygiene concerns; variable drainage; batch-to-batch inconsistency</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Basket Centrifuge</strong></td>
                                    <td class="p-2 border">Centrifugal separation; curd spun in perforated basket at 1000–2000 rpm</td>
                                    <td class="p-2 border">Faster (1–2 h); better hygiene; controlled drainage</td>
                                    <td class="p-2 border">Higher fat loss in whey; heat generation may increase acidity; batch operation</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Quarg Separator (e.g., Westfalia)</strong></td>
                                    <td class="p-2 border">Mechanical separation using self-desludging separator; continuous operation at 3000–5000 rpm</td>
                                    <td class="p-2 border">Continuous; hygienic (enclosed system); consistent TS in chakka; highest throughput; minimal fat loss</td>
                                    <td class="p-2 border">High capital cost; requires trained operators; product may be slightly smoother than traditional (some consumers prefer grainy texture)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2"><strong>oPRP Controls:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Drainage must be conducted at <strong>< 10°C</strong> (if traditional method) to prevent microbial growth during the extended drainage period</li>
                        <li>Target chakka composition: <strong>TS: 25–30%; Fat: 12–15% (dry basis); Acidity: 1.2–1.8% LA; pH: 4.0–4.5</strong></li>
                        <li>Whey drained is approximately 50–60% of the original curd weight. This acid whey (pH 4.5–4.7) contains lactose, soluble whey proteins, minerals (Ca, P, K), and lactic acid and requires proper valorization (discussed later).</li>
                        <li>Chakka should be used within 24 h of preparation if stored at < 5°C, or frozen at -18°C for extended storage (up to 3 months)</li>
                    </ul>

                    <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Material Balance for Chakka and Shrikhand Production</h4>
                    <p>Starting from 100 kg of standardized buffalo milk (Fat: 6.0%, SNF: 9.0%, TS: 15.0%):</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Stage</th>
                                    <th class="p-2 border">Input (kg)</th>
                                    <th class="p-2 border">Output (kg)</th>
                                    <th class="p-2 border">TS (%)</th>
                                    <th class="p-2 border">Yield (%)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border">Standardized milk</td>
                                    <td class="p-2 border">100.0</td>
                                    <td class="p-2 border">—</td>
                                    <td class="p-2 border">15.0</td>
                                    <td class="p-2 border">—</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Dahi (after fermentation)</td>
                                    <td class="p-2 border">—</td>
                                    <td class="p-2 border">~100.0</td>
                                    <td class="p-2 border">~15.0</td>
                                    <td class="p-2 border">~100%</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Chakka (after whey drainage)</td>
                                    <td class="p-2 border">—</td>
                                    <td class="p-2 border">20–22</td>
                                    <td class="p-2 border">25–30</td>
                                    <td class="p-2 border">20–22%</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Acid whey</td>
                                    <td class="p-2 border">—</td>
                                    <td class="p-2 border">78–80</td>
                                    <td class="p-2 border">5.5–6.0</td>
                                    <td class="p-2 border">—</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Shrikhand (chakka + 45% sugar + cream)</td>
                                    <td class="p-2 border">20 kg chakka + 16–18 kg sugar + 2 kg cream</td>
                                    <td class="p-2 border">38–40</td>
                                    <td class="p-2 border">58–65</td>
                                    <td class="p-2 border">38–40% of milk weight</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>

                <li><strong>Mixing Chakka with Sugar, Cream, and Flavorings (oPRP)</strong>
                    <p>Fresh chakka is transferred to a <strong>planetary mixer</strong> (e.g., Stephan mixer, ribbon blender, or sigma blade mixer). The following ingredients are added sequentially:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Sugar (powdered/icing sugar):</strong> 40–50% of the total Shrikhand weight. Powdered sugar (particle size < 100 μm) is preferred over granulated sugar because:
                            <ul class="list-circle list-outside pl-5 mt-1 space-y-1">
                                <li>Rapid dissolution in the cold, viscous chakka matrix</li>
                                <li>Eliminates grittiness (particle size perception threshold in dairy products: ~20–25 μm; above this, particles are perceived as gritty)</li>
                                <li>Sugar serves multiple functions: sweetness, osmotic preservation (reduces a<sub>w</sub> from ~0.97 in chakka to 0.83–0.87 in Shrikhand), body/viscosity enhancement (increases total solids), and masks excessive acidity</li>
                            </ul>
                        </li>
                        <li><strong>Cream (25–40% fat):</strong> Added to adjust the final fat content to meet FSSAI minimum (8.5% on dry basis). Cream contributes to mouthfeel (lubricity), flavor release, and smooth texture. It also provides fat-soluble vitamins (A, D, E, K).</li>
                        <li><strong>Flavorings:</strong>
                            <ul class="list-circle list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Cardamom (elaichi):</strong> 0.1–0.3%; contains 1,8-cineole (eucalyptol) and α-terpinyl acetate as primary flavor compounds</li>
                                <li><strong>Saffron (kesar):</strong> 0.01–0.05%; contains crocin (color, water-soluble carotenoid glycoside), picrocrocin (bitter taste), and safranal (aroma)</li>
                                <li><strong>Nutmeg (jaiphal):</strong> 0.05–0.1%; contains myristicin and elemicin</li>
                                <li><strong>Rose water:</strong> 0.5–1.0%; contains 2-phenylethanol and citronellol</li>
                                <li><strong>Fruit pulp (for fruit Shrikhand):</strong> ≥ 10% by weight as per BIS; mango (Alphonso), strawberry, pineapple are common. Fruit addition requires pH adjustment (fruit acid + lactic acid should not drop product pH below 3.8, which causes excessive tartness and protein aggregation)</li>
                            </ul>
                        </li>
                        <li><strong>Color (if added):</strong> Only FSSAI-permitted food colors (e.g., β-carotene, annatto, turmeric) at levels ≤ GMP. Artificial colors are increasingly avoided in premium products.</li>
                        <li><strong>Stabilizers/Emulsifiers (optional):</strong> Permitted stabilizers include CMC (carboxymethyl cellulose, 0.1–0.3%), pectin (0.1–0.2%), gelatin (0.1–0.5%), and guar gum (0.1–0.2%). These improve shelf-life stability by reducing syneresis and maintaining smooth texture during storage. Mono- and di-glycerides (0.1–0.2%) may be added as emulsifiers to improve fat distribution.</li>
                    </ul>
                </li>

                <li><strong>Blending / Homogenization for Smooth Texture (oPRP)</strong>
                    <p>The mixed mass is processed through one or more of the following to achieve a <strong>completely homogenous, smooth, lump-free paste</strong>:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Planetary mixer:</strong> Medium-speed mixing for 15–30 minutes to dissolve sugar and distribute cream uniformly.</li>
                        <li><strong>Colloid mill:</strong> The mixture is passed through a colloid mill (gap setting: 0.05–0.1 mm; rotor speed: 3000–5000 rpm). This subjects the product to intense shear forces, breaking down any casein aggregates, undissolved sugar crystals, or cream clusters. The resulting product has a particle size < 25 μm (imperceptible on the palate).</li>
                        <li><strong>High-pressure homogenizer (optional):</strong> Passage at 50–100 kg/cm² further refines the texture. Excessive homogenization pressure (> 150 kg/cm²) can break down the casein gel network excessively, resulting in a thin, runny product.</li>
                    </ul>
                    <p class="mt-2"><strong>oPRP Controls:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Product temperature during mixing/milling should be maintained at < 15°C to prevent microbial growth and excessive acid development</li>
                        <li>Final product testing: TS (refractometer or oven drying, target ≥ 58%), pH (target 3.8–4.5), acidity, fat, and sensory evaluation (smooth body, no grittiness, balanced sweet-sour taste)</li>
                    </ul>
                </li>

                <li><strong>Filling, Packaging, and Sealing (PRP)</strong>
                    <p>The finished Shrikhand is packaged into pre-sanitized containers using <strong>clean-fill or aseptic filling systems</strong>:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Packaging materials:</strong> Polypropylene (PP) or polystyrene (PS) cups (100g, 200g, 500g); HDPE containers for bulk; or aluminum-foil-laminated cups. The packaging must provide an effective barrier against moisture, oxygen, and light (UV protection to prevent oxidation of fat and vitamins).</li>
                        <li><strong>Filling environment:</strong> Positive-pressure clean room (ISO Class 7/8) with HEPA-filtered air to minimize airborne microbial contamination (target: < 10 CFU/m³).</li>
                        <li><strong>Sealing:</strong> Heat-sealed aluminum foil lids ensure hermetic closure. Seal integrity testing (dye penetration test, vacuum/pressure decay test) is performed at defined frequency (e.g., every 30 minutes or every 500 cups).</li>
                        <li><strong>Labeling:</strong> FSSAI-compliant labels with product name, ingredients list (descending order of proportion), nutritional information, FSSAI license number, batch/lot code, date of manufacture, best-before date, storage instructions ("Store at or below 5°C"), net weight, and allergen declaration (contains milk).</li>
                    </ul>
                    <p class="mt-2"><strong>PRP Controls:</strong> CIP/COP of filling machine components; UV/ozone sanitization of packaging material; personal hygiene of operators (gloves, masks, hair nets, sanitized aprons).</p>
                </li>

                <li><strong>Cold Storage and Distribution — CCP-3 (Biological Hazard)</strong>
                    <p>The packaged Shrikhand is immediately placed in a cold store maintained at <strong>≤ 5°C (target: 2–4°C)</strong>.</p>
                    <p class="mt-2"><strong>Critical Limits:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Cold store temperature: ≤ 5°C at all times</li>
                        <li>Product core temperature should reach ≤ 5°C within 4 hours of filling</li>
                        <li>Cold chain integrity maintained throughout distribution (refrigerated trucks at 2–5°C)</li>
                    </ul>
                    <p class="mt-2"><strong>Scientific rationale:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                        <li>Shrikhand has an a<sub>w</sub> of 0.83–0.87 and pH of 3.8–4.5. These conditions are hostile to most pathogenic bacteria but not to all spoilage organisms:
                            <ul class="list-circle list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Osmotolerant/osmophilic yeasts</strong> (e.g., <em>Zygosaccharomyces rouxii</em>, <em>Torulaspora delbrueckii</em>): Can grow at a<sub>w</sub> as low as 0.62; low pH and high sugar are not inhibitory. These are the <strong>primary spoilage organisms</strong> of Shrikhand, causing gas production (bloating of containers), off-flavors (alcoholic, yeasty), and surface film formation.</li>
                                <li><strong>Xerophilic molds</strong> (e.g., <em>Aspergillus</em>, <em>Penicillium</em>): Can grow at a<sub>w</sub> < 0.85 if oxygen is available (surface growth).</li>
                                <li><strong>Psychrotrophic bacteria:</strong> <em>Pseudomonas</em> spp. are inhibited by the low pH, but some psychrotrophic LAB (<em>Lactobacillus</em> spp.) may continue slow acid production, causing excessive sourness over time.</li>
                            </ul>
                        </li>
                        <li>At ≤ 5°C, the growth rate of osmotolerant yeasts is reduced by > 90% compared to 25°C (generation time increases from ~2 h at 25°C to > 24 h at 5°C). This, combined with the inherent hurdles (low pH, low a<sub>w</sub>, lactic acid), ensures a shelf life of <strong>30–40 days</strong>.</li>
                        <li>Temperature abuse (> 10°C even temporarily) dramatically reduces shelf life — yeast doubling time at 15°C is ~6–8 h, and visible spoilage can occur within 7–10 days.</li>
                    </ul>
                    <p class="mt-2"><strong>Monitoring & Corrective Actions:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Continuous temperature monitoring via data loggers with automated alarms (alert at > 5°C; alarm at > 8°C)</li>
                        <li>Daily manual verification with calibrated thermometers</li>
                        <li>Distribution vehicles equipped with GPS-enabled temperature loggers; temperature records shared with manufacturer</li>
                        <li>If cold chain is breached (> 8°C for > 2 hours): product is quarantined, assessed for microbiological quality, and condemned if yeast/mold count exceeds limits</li>
                    </ul>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">HACCP Plan Summary for Shrikhand</h3>
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
                            <td class="p-2 border font-bold">CCP-1</td>
                            <td class="p-2 border">Heat Treatment</td>
                            <td class="p-2 border">Biological: survival of vegetative pathogens (<em>Salmonella</em>, <em>Listeria</em>, <em>E. coli</em> O157:H7, <em>S. aureus</em>)</td>
                            <td class="p-2 border">≥ 90°C for ≥ 10 min</td>
                            <td class="p-2 border">Continuous T recording; FDV status; flow rate</td>
                            <td class="p-2 border">Divert & re-process; investigate PHE/boiler; hold product</td>
                            <td class="p-2 border">Phosphatase test (−ve); Turbidity test (+ve); thermometer calibration (weekly); chart review (each batch)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border font-bold">CCP-2</td>
                            <td class="p-2 border">Incubation / Fermentation</td>
                            <td class="p-2 border">Biological: insufficient acidification allowing pathogen survival/growth (<em>C. botulinum</em>, <em>S. aureus</em> toxin, <em>Salmonella</em>)</td>
                            <td class="p-2 border">pH ≤ 4.6 within 12 h (mesophilic) or 6 h (thermophilic)</td>
                            <td class="p-2 border">pH measurement every 2 h; T monitoring; visual assessment of curd firmness</td>
                            <td class="p-2 border">If pH > 4.6 at max time: condemn batch; investigate culture (phage, antibiotics, sanitizer); re-inoculate if within safe time window</td>
                            <td class="p-2 border">Starter activity testing (daily); pH meter calibration (daily); phage testing (weekly); antibiotic residue testing of incoming milk (SNAP test)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border font-bold">CCP-3</td>
                            <td class="p-2 border">Cold Storage & Distribution</td>
                            <td class="p-2 border">Biological: growth of osmotolerant yeasts, molds; potential growth of <em>L. monocytogenes</em> (psychrotroph) if pH > 4.4</td>
                            <td class="p-2 border">≤ 5°C throughout storage and distribution</td>
                            <td class="p-2 border">Continuous data logger; daily manual check; distribution vehicle T records</td>
                            <td class="p-2 border">Quarantine product if T > 8°C for > 2 h; test for yeast/mold/pathogens; reduce shelf life or condemn</td>
                            <td class="p-2 border">Monthly microbiological testing of finished product; end-of-shelf-life studies; logger calibration (quarterly)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Rheological and Textural Properties</h3>
            <p>Shrikhand exhibits <strong>pseudoplastic (shear-thinning) behavior</strong>, meaning its apparent viscosity decreases with increasing shear rate. This is desirable — the product appears thick and rich in the cup but flows easily on the spoon and in the mouth.</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Flow behavior index (n):</strong> 0.25–0.45 (n < 1 confirms shear-thinning; n = 1 would be Newtonian). Values are described by the <strong>Power Law model: τ = K·γ̇ⁿ</strong>, where τ = shear stress, K = consistency coefficient, and γ̇ = shear rate.</li>
                <li><strong>Consistency coefficient (K):</strong> 50–200 Pa·sⁿ (higher K = thicker product). K increases with total solids, fat content, and protein content.</li>
                <li><strong>Thixotropy:</strong> Shrikhand shows significant thixotropy (hysteresis area between the up-curve and down-curve in a shear rate sweep), indicating time-dependent structural breakdown. This means vigorous stirring reduces viscosity, which only partially recovers on standing.</li>
                <li><strong>Yield stress (τ₀):</strong> 5–25 Pa. The product requires a minimum stress to initiate flow, contributing to its ability to hold its shape in a cup.</li>
                <li><strong>Texture Profile Analysis (TPA):</strong>
                    <ul class="list-circle list-outside pl-5 mt-1 space-y-1">
                        <li>Firmness: 0.5–2.0 N (measured by TA.XT Plus with 25 mm cylinder probe at 1 mm/s penetration)</li>
                        <li>Cohesiveness: 0.4–0.6</li>
                        <li>Adhesiveness: −0.5 to −2.0 N·s (negative values indicate product sticks to the probe; higher adhesiveness = stickier product)</li>
                        <li>Spreadability: Good Shrikhand spreads easily on a roti or puri without tearing</li>
                    </ul>
                </li>
            </ul>
            <p class="mt-2"><strong>Factors affecting texture:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                <li>Higher fat content → smoother, creamier mouthfeel (fat lubricates and weakens gel structure)</li>
                <li>Higher sugar content → firmer body (sugar increases TS and viscosity) but softer gel (sugar competes with casein for water, reducing gel strength)</li>
                <li>Higher protein (casein) → firmer gel, more cohesive</li>
                <li>Heat treatment intensity → more whey protein denaturation → firmer, more elastic gel</li>
                <li>Homogenization → smaller fat globules → more active filler particles → firmer gel</li>
                <li>EPS-producing cultures → higher viscosity, reduced syneresis</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Nutritional Profile of Shrikhand</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Nutrient</th>
                            <th class="p-2 border">Per 100 g (Typical)</th>
                            <th class="p-2 border">Significance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border">Energy</td>
                            <td class="p-2 border">250–320 kcal</td>
                            <td class="p-2 border">Energy-dense; primarily from sugar and fat</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Total Carbohydrates</td>
                            <td class="p-2 border">45–55 g</td>
                            <td class="p-2 border">Mainly sucrose (added) and residual lactose (~1–2%). Lactose is partially hydrolyzed by LAB β-galactosidase during fermentation (~20–30% reduction), improving tolerance for lactose-maldigesters.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Protein</td>
                            <td class="p-2 border">5–8 g</td>
                            <td class="p-2 border">High-quality milk protein (casein + whey). PDCAAS close to 1.0. Partial proteolysis during fermentation increases free amino acid content and may improve digestibility.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Fat</td>
                            <td class="p-2 border">5–10 g</td>
                            <td class="p-2 border">Milk fat with characteristic short- and medium-chain fatty acids (butyric C₄:₀, caproic C₆:₀). Contains conjugated linoleic acid (CLA, 4–7 mg/g fat) with potential anti-carcinogenic properties.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Calcium</td>
                            <td class="p-2 border">80–120 mg</td>
                            <td class="p-2 border">Lower than equivalent milk due to Ca²⁺ loss into acid whey (~30–40% loss). Remaining Ca is primarily colloidal (bound to casein). The acidic pH improves calcium bioavailability by maintaining Ca²⁺ in soluble form in the gut.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Phosphorus</td>
                            <td class="p-2 border">60–100 mg</td>
                            <td class="p-2 border">Organic P (casein-bound phosphoserine) and inorganic P. Ca:P ratio ≈ 1.2:1</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Riboflavin (B₂)</td>
                            <td class="p-2 border">0.1–0.2 mg</td>
                            <td class="p-2 border">Retained from milk; heat-stable. Some LAB strains (e.g., <em>Lc. lactis</em>) synthesize additional riboflavin.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Vitamin B₁₂</td>
                            <td class="p-2 border">0.2–0.5 μg</td>
                            <td class="p-2 border">Retained from milk; not synthesized by LAB. Important for vegetarian consumers.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Probiotics</td>
                            <td class="p-2 border">10⁶–10⁸ CFU/g (if probiotic strains used)</td>
                            <td class="p-2 border">Traditional Shrikhand contains live LAB; probiotic variants incorporate <em>Lb. acidophilus</em>, <em>Lb. rhamnosus</em> GG, <em>Bifidobacterium</em> spp. Viability may decline during storage due to low pH and high sugar osmotic stress.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Bioactive Compounds and Health Benefits</h4>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Bioactive peptides:</strong> Proteolysis by LAB releases bioactive peptides from casein, including ACE-inhibitory peptides (e.g., VPP, IPP from β-casein with antihypertensive potential), caseinophosphopeptides (CPP; enhance mineral absorption), and immunomodulatory peptides.</li>
                <li><strong>Conjugated Linoleic Acid (CLA):</strong> Buffalo milk fat contains 4–7 mg CLA/g fat, predominantly the cis-9, trans-11 isomer (rumenic acid), which has demonstrated anti-carcinogenic, anti-atherogenic, and anti-diabetic properties in animal models.</li>
                <li><strong>Sphingolipids:</strong> Milk fat globule membrane (MFGM) lipids including sphingomyelin have been associated with improved gut barrier function and reduced colon cancer risk.</li>
                <li><strong>Lactic acid bacteria metabolites:</strong> Bacteriocins (e.g., nisin from <em>Lc. lactis</em>), organic acids, and hydrogen peroxide produced by LAB contribute to natural preservative action and may support gut health.</li>
                <li><strong>Reduced lactose content:</strong> Fermentation reduces lactose by 20–30%; combined with the presence of microbial β-galactosidase (which continues to function in the gut), Shrikhand is better tolerated by lactose-maldigesters than fresh milk.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Quality Defects in Shrikhand: Causes and Prevention</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Defect</th>
                            <th class="p-2 border">Description</th>
                            <th class="p-2 border">Causes</th>
                            <th class="p-2 border">Prevention</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Excessive sourness</strong></td>
                            <td class="p-2 border">Sharp, unpleasant acid taste dominating sweetness</td>
                            <td class="p-2 border">Over-fermentation (incubation too long or at too high temperature); insufficient sugar addition; use of highly acidogenic thermophilic cultures</td>
                            <td class="p-2 border">Strict incubation time/pH endpoint control; adequate sugar addition (40–50%); culture selection with controlled acid production rate</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Gritty/sandy texture</strong></td>
                            <td class="p-2 border">Perception of granules on the palate</td>
                            <td class="p-2 border">Use of granulated sugar (particle size > 100 μm); incomplete sugar dissolution; casein aggregate formation due to excessive incubation</td>
                            <td class="p-2 border">Use powdered/icing sugar; adequate mixing time; passage through colloid mill; controlled fermentation</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Wheying off (syneresis)</strong></td>
                            <td class="p-2 border">Free whey separation on surface during storage</td>
                            <td class="p-2 border">Insufficient TS; low protein content; weak gel structure; temperature fluctuations during storage; excessive mechanical working</td>
                            <td class="p-2 border">Ensure TS ≥ 58%; adequate heat treatment (90°C/10 min for WHC); use stabilizers (CMC, pectin); maintain cold chain stability; use EPS-producing cultures</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Flat/insipid flavor</strong></td>
                            <td class="p-2 border">Lack of characteristic dairy/fermented flavor; tastes only of sugar</td>
                            <td class="p-2 border">Under-fermentation; use of inactive culture; excessive sugar masking acid notes; absence of diacetyl-producing strains</td>
                            <td class="p-2 border">Adequate fermentation (pH 4.4–4.7); include <em>Lc. lactis</em> biovar <em>diacetylactis</em> in culture blend; optimize sugar:acid balance</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Yeasty / alcoholic off-flavor</strong></td>
                            <td class="p-2 border">Fermented, bread-like, or alcoholic flavor; container may be bloated</td>
                            <td class="p-2 border">Contamination by osmotolerant yeasts (<em>Zygosaccharomyces rouxii</em>, <em>Candida</em> spp.); inadequate packaging hygiene; cold chain break</td>
                            <td class="p-2 border">Strict hygienic filling; effective CIP/COP; environmental monitoring for yeasts; maintain cold chain (≤ 5°C); potassium sorbate (200 ppm, if permitted)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Rancid flavor</strong></td>
                            <td class="p-2 border">Soapy, butyric, unpleasant taste</td>
                            <td class="p-2 border">Lipase activity (native milk LPL not fully inactivated; microbial lipases from psychrotrophic bacteria in raw milk surviving heat treatment)</td>
                            <td class="p-2 border">Ensure adequate heat treatment (LPL inactivated at > 72°C); use raw milk with low psychrotrophic count (< 10⁴ CFU/mL); avoid homogenization before heat treatment (exposes fat to native lipase)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Bitter taste</strong></td>
                            <td class="p-2 border">Persistent bitter aftertaste</td>
                            <td class="p-2 border">Proteolysis producing hydrophobic bitter peptides (e.g., from β-casein f193-209); excessive protease activity from certain LAB strains; contamination with <em>Pseudomonas</em> spp. proteases</td>
                            <td class="p-2 border">Select non-bitter culture strains (with peptidase activity to degrade bitter peptides); use high-quality raw milk with low psychrotrophic count; adequate heat treatment</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Mold growth</strong></td>
                            <td class="p-2 border">Visible colored spots (green, black, white) on surface</td>
                            <td class="p-2 border">Contamination during filling; inadequate seal integrity; airborne spores</td>
                            <td class="p-2 border">HEPA filtration in filling area; seal integrity testing; clean-fill or aseptic filling; natamycin surface treatment (if permitted)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Oxidized / tallowy flavor</strong></td>
                            <td class="p-2 border">Cardboard-like, metallic taste</td>
                            <td class="p-2 border">Auto-oxidation of unsaturated fatty acids catalyzed by Cu²⁺/Fe²⁺ contamination, light exposure, or oxygen ingress</td>
                            <td class="p-2 border">Use opaque packaging; minimize headspace; avoid contact with copper/iron equipment; use stainless steel (SS 304/316)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shelf Life Extension Technologies</h3>
            <p>The typical shelf life of Shrikhand is 30–40 days at ≤ 5°C. Various technologies have been investigated to extend this:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Technology</th>
                            <th class="p-2 border">Mechanism</th>
                            <th class="p-2 border">Shelf Life Achieved</th>
                            <th class="p-2 border">Limitations</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Thermization (65–70°C, 15–30 s)</strong></td>
                            <td class="p-2 border">Mild heat treatment of finished Shrikhand to reduce yeast/mold count by 2–3 log</td>
                            <td class="p-2 border">60–90 days at ≤ 5°C</td>
                            <td class="p-2 border">May cause textural changes (thinning); kills live LAB (no longer "fermented")</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Chemical preservatives</strong></td>
                            <td class="p-2 border">Potassium sorbate (200 ppm) or sodium benzoate (250 ppm); effective against yeasts and molds at low pH</td>
                            <td class="p-2 border">45–60 days at ≤ 5°C</td>
                            <td class="p-2 border">Consumer perception (clean label trend); regulatory limits; may affect flavor at high levels</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Biopreservation (nisin)</strong></td>
                            <td class="p-2 border">Nisin (bacteriocin from <em>Lc. lactis</em>; 100–200 IU/g) inhibits Gram-positive bacteria and some LAB. Combined with low pH, effective against <em>Listeria</em>.</td>
                            <td class="p-2 border">45–60 days</td>
                            <td class="p-2 border">Ineffective against yeasts and molds (Gram-negative outer membrane excludes nisin); must be combined with other hurdles</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Modified Atmosphere Packaging (MAP)</strong></td>
                            <td class="p-2 border">Packaging under CO₂/N₂ atmosphere (e.g., 60% CO₂ / 40% N₂) to inhibit aerobic molds and yeasts; CO₂ dissolves in product and lowers pH slightly</td>
                            <td class="p-2 border">60–90 days</td>
                            <td class="p-2 border">Specialized packaging equipment required; CO₂ may cause slight carbonation/tingling sensation; package collapse as CO₂ is absorbed</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Retort processing (UHT Shrikhand)</strong></td>
                            <td class="p-2 border">Heating to 121°C/15 min (F₀ ≥ 3) or equivalent in retort pouches</td>
                            <td class="p-2 border">6–12 months at ambient temperature</td>
                            <td class="p-2 border">Significant change in flavor (cooked, caramelized), color (browning), and texture (runny); consumer acceptance is lower; high processing cost</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Freezing (-18°C)</strong></td>
                            <td class="p-2 border">Stops all microbial growth; Shrikhand can be frozen as "frozen dessert" form</td>
                            <td class="p-2 border">6–12 months at -18°C</td>
                            <td class="p-2 border">Textural changes on thawing (ice crystal damage to gel network); freeze-thaw instability; requires stabilizers (CMC, guar gum)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>High Pressure Processing (HPP)</strong></td>
                            <td class="p-2 border">400–600 MPa for 3–5 minutes at ambient/chilled temperature; inactivates vegetative microorganisms (yeasts, molds, bacteria) by disrupting cell membranes and denaturing enzymes</td>
                            <td class="p-2 border">60–120 days at ≤ 5°C</td>
                            <td class="p-2 border">Very high capital cost (HPP units: $0.5–3 million); batch process; may alter casein micelle structure (pressure-induced dissociation); not effective against bacterial spores at 600 MPa (would need > 800 MPa or combined with heat)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Acid Whey Valorization</h3>
            <p>Shrikhand production generates <strong>large quantities of acid whey</strong> (~4–5 kg of whey per kg of chakka). Unlike sweet whey from cheese production (pH 6.0–6.5), acid whey from Shrikhand/chakka has a pH of 4.5–4.7, high lactic acid content (0.5–0.8%), lower protein content, and high mineral (Ca, P) and lactose content. Disposal as wastewater is environmentally problematic (BOD: 30,000–50,000 mg/L; COD: 60,000–80,000 mg/L).</p>
            <p class="mt-2"><strong>Utilization options:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Whey beverages:</strong> Neutralization (with NaHCO₃ to pH 6.0), pasteurization, addition of fruit juice/pulp, sugar, and citric acid to produce refreshing whey drinks (e.g., whey lemonade, whey-mango drink). These retain whey proteins, minerals, and water-soluble vitamins.</li>
                <li><strong>Lactose recovery:</strong> Concentration by evaporation followed by crystallization yields food-grade lactose. Acid whey lactose can be further converted enzymatically (β-galactosidase) to galacto-oligosaccharides (GOS), which are prebiotic.</li>
                <li><strong>Lactic acid recovery:</strong> Membrane separation (nanofiltration) or ion exchange chromatography can recover lactic acid for industrial use (biodegradable plastics/PLA, food acidulant).</li>
                <li><strong>Animal feed:</strong> Direct use as animal feed supplement (mixed with grain) provides lactose as an energy source and minerals.</li>
                <li><strong>Biogas production:</strong> Anaerobic digestion of acid whey produces methane (biogas), with a typical methane yield of 30–40 m³ CH₄/m³ whey.</li>
                <li><strong>Whey protein recovery:</strong> Although acid whey has lower protein than sweet whey, ultrafiltration (10 kDa MWCO) can concentrate the remaining whey proteins (α-La, BSA, immunoglobulins) for use in nutritional supplements.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Variants and Innovations in Shrikhand</h3>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Amrakhand:</strong> Shrikhand blended with Alphonso mango pulp (≥ 10% fruit). The natural acidity of mango (citric and malic acid) complements the lactic acid, and mango carotenoids (β-carotene) provide natural color.</li>
                <li><strong>Low-fat / low-sugar Shrikhand:</strong> Prepared using skim milk or partially skimmed milk; sugar partially replaced with high-intensity sweeteners (sucralose, steviol glycosides) and bulking agents (polydextrose, inulin). Fat mimetics (microparticulated whey protein, Simplesse) can be used to simulate fat mouthfeel.</li>
                <li><strong>Probiotic Shrikhand:</strong> Incorporation of probiotic strains (<em>Lactobacillus acidophilus</em> NCDC-15, <em>Lactobacillus rhamnosus</em> GG, <em>Bifidobacterium lactis</em> Bb-12) during the chakka–sugar mixing stage (not during fermentation, as the harsh conditions may reduce viability). Target: ≥ 10⁶ CFU/g at end of shelf life. Microencapsulation of probiotics in alginate-chitosan beads or whey protein isolate matrices can improve survival during the acidic, high-osmolality conditions of Shrikhand.</li>
                <li><strong>Prebiotic Shrikhand:</strong> Enrichment with inulin (3–5%), fructo-oligosaccharides (FOS, 2–4%), or galacto-oligosaccharides (GOS). These prebiotics also serve as fat replacers and improve texture by increasing viscosity and water retention.</li>
                <li><strong>Synbiotic Shrikhand:</strong> Combination of probiotics + prebiotics. Studies have shown that inulin supplementation (3%) improves viability of <em>Lb. acidophilus</em> in Shrikhand by 1–2 log cycles during 30-day storage, likely by serving as a fermentable substrate and reducing osmotic stress on the probiotic cells.</li>
                <li><strong>Fortified Shrikhand:</strong> Fortification with iron (ferrous fumarate encapsulated in lecithin to prevent oxidized flavor), vitamin D₃ (cholecalciferol), omega-3 fatty acids (microencapsulated fish oil or algal DHA), and dietary fiber (oat β-glucan, psyllium).</li>
                <li><strong>Herbal Shrikhand:</strong> Incorporation of bioactive herbal extracts — ashwagandha (<em>Withania somnifera</em>), turmeric (curcumin), ginger (gingerols), or moringa (<em>Moringa oleifera</em>) leaf powder — for added functional properties.</li>
                <li><strong>Long-life (UHT) Shrikhand:</strong> Processed at 135–140°C for 2–4 seconds and filled aseptically. Allows ambient distribution but significantly alters the sensory profile (more cooked flavor, darker color).</li>
                <li><strong>Shrikhand powder:</strong> Spray drying or freeze drying of Shrikhand to produce a shelf-stable powder (a<sub>w</sub> < 0.3) that can be reconstituted with water or milk. Spray drying conditions: inlet temperature 180°C, outlet temperature 80°C; maltodextrin (10–15%) or gum arabic used as carrier to improve powder properties and prevent stickiness due to high sugar content.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Water Activity (a<sub>w</sub>) and Hurdle Technology in Shrikhand</h3>
            <p>Shrikhand is an excellent example of <strong>Leistner's Hurdle Technology</strong>, where multiple preservation factors (hurdles) work synergistically to ensure microbial safety and stability:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Hurdle</th>
                            <th class="p-2 border">Value in Shrikhand</th>
                            <th class="p-2 border">Microorganisms Inhibited</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>pH (acidity)</strong></td>
                            <td class="p-2 border">3.8–4.5</td>
                            <td class="p-2 border"><em>Clostridium botulinum</em> (min pH 4.6), <em>Salmonella</em> (min 3.8), <em>S. aureus</em> toxin (min 4.5), most Gram-negative bacteria</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Water activity (a<sub>w</sub>)</strong></td>
                            <td class="p-2 border">0.83–0.87</td>
                            <td class="p-2 border">Most bacteria (min a<sub>w</sub> > 0.90), <em>S. aureus</em> (min 0.86 for growth, 0.87 for toxin); yeasts (most: min 0.88; but <em>Z. rouxii</em>: min 0.62 — hence yeasts remain the primary risk)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Low temperature</strong></td>
                            <td class="p-2 border">≤ 5°C (storage)</td>
                            <td class="p-2 border">Reduces growth rate of all microorganisms; most mesophilic pathogens cannot grow below 5°C (exception: <em>L. monocytogenes</em>, min ~−0.4°C; <em>Y. enterocolitica</em>, min ~−1.3°C)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Competitive microflora</strong></td>
                            <td class="p-2 border">10⁷–10⁸ CFU/g LAB</td>
                            <td class="p-2 border">LAB produce lactic acid, bacteriocins (nisin), H₂O₂, and compete for nutrients, suppressing spoilage and pathogenic organisms</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Undissociated lactic acid</strong></td>
                            <td class="p-2 border">~85% at pH 4.5 (pKa = 3.86)</td>
                            <td class="p-2 border">Undissociated acid permeates cell membranes, acidifies cytoplasm, and disrupts cellular metabolism — more antimicrobial than equivalent mineral acid at same pH</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>High sugar (osmotic pressure)</strong></td>
                            <td class="p-2 border">40–50% sucrose</td>
                            <td class="p-2 border">Creates osmotic stress; plasmolysis of cells unable to accumulate compatible solutes; supplements a<sub>w</sub> reduction</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2">The <strong>multi-hurdle approach</strong> ensures that even if one hurdle is partially breached (e.g., slight temperature abuse), the remaining hurdles still prevent pathogen growth. The synergistic effect means that each individual hurdle can be set at a milder level than would be required if it were the sole preservation factor, thereby preserving the sensory quality of the product.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Sensory Evaluation of Shrikhand</h3>
            <p>Sensory evaluation is conducted by trained panels using a <strong>25-point hedonic scale</strong> (BIS method) or a <strong>9-point hedonic scale</strong> (international). The key sensory attributes evaluated are:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Attribute</th>
                            <th class="p-2 border">Max Score (25-pt)</th>
                            <th class="p-2 border">Ideal Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Flavor & Taste</strong></td>
                            <td class="p-2 border">10</td>
                            <td class="p-2 border">Pleasant blend of sweet and mildly acidic; characteristic dairy/fermented flavor with notes of added flavoring (cardamom/saffron); no off-flavors (sour, bitter, yeasty, rancid, oxidized)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Body & Texture</strong></td>
                            <td class="p-2 border">5</td>
                            <td class="p-2 border">Smooth, homogeneous, creamy, moderately firm; no grittiness, lumpiness, or excessive stickiness; good spreadability</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Color & Appearance</strong></td>
                            <td class="p-2 border">5</td>
                            <td class="p-2 border">Uniform light cream to white (plain) or characteristic fruit/saffron color; glossy surface; no surface whey, discoloration, or mold spots</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Packaging</strong></td>
                            <td class="p-2 border">5</td>
                            <td class="p-2 border">Clean, undamaged, properly sealed; clear labeling; no leakage or bloating</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Key Analytical Methods for Shrikhand Quality Control</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Method</th>
                            <th class="p-2 border">Reference Standard</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border">Total Solids</td>
                            <td class="p-2 border">Gravimetric (oven drying at 102 ± 2°C to constant weight) or rapid moisture analyzer</td>
                            <td class="p-2 border">IS 1479 (Part II)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Fat</td>
                            <td class="p-2 border">Gerber method (butyrometer) or Mojonnier (gravimetric ether extraction)</td>
                            <td class="p-2 border">IS 1224 (Part I/II)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Protein</td>
                            <td class="p-2 border">Kjeldahl method (N × 6.38 for milk protein)</td>
                            <td class="p-2 border">IS 1479 (Part II)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Sucrose</td>
                            <td class="p-2 border">Polarimetric method (before and after inversion with HCl) or HPLC</td>
                            <td class="p-2 border">IS 1479 (Part II)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Titratable Acidity</td>
                            <td class="p-2 border">Titration with 0.1N NaOH using phenolphthalein indicator; expressed as % lactic acid</td>
                            <td class="p-2 border">IS 1479 (Part I)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">pH</td>
                            <td class="p-2 border">Potentiometric (pH meter with glass electrode calibrated at pH 4.0 and 7.0)</td>
                            <td class="p-2 border">IS 1479 (Part I)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Ash</td>
                            <td class="p-2 border">Dry ashing in muffle furnace at 550°C for 3–5 h</td>
                            <td class="p-2 border">IS 1479 (Part II)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Total Plate Count</td>
                            <td class="p-2 border">Pour plate on Plate Count Agar (PCA); 37°C / 48 h</td>
                            <td class="p-2 border">IS 5402</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Coliform Count</td>
                            <td class="p-2 border">Pour plate on Violet Red Bile Agar (VRBA); 37°C / 24 h</td>
                            <td class="p-2 border">IS 5401</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Yeast & Mold</td>
                            <td class="p-2 border">Spread plate on Potato Dextrose Agar (PDA) acidified with tartaric acid; 25°C / 5 days</td>
                            <td class="p-2 border">IS 5403</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Water Activity</td>
                            <td class="p-2 border">Dew point hygrometer (e.g., AquaLab 4TE; accuracy ± 0.003 a<sub>w</sub>)</td>
                            <td class="p-2 border">ISO 21807</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Texture (Firmness)</td>
                            <td class="p-2 border">Texture Analyzer (TA.XT Plus); back extrusion test or penetration test</td>
                            <td class="p-2 border">In-house method</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Viscosity</td>
                            <td class="p-2 border">Brookfield viscometer (spindle #6 or #7, 20 rpm, 10°C) or controlled stress rheometer (flow curve)</td>
                            <td class="p-2 border">In-house method</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Summary of Key Scientific Parameters</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Typical Value / Range</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Total Solids</td><td class="p-2 border">58–68%</td></tr>
                        <tr><td class="p-2 border">Moisture</td><td class="p-2 border">32–42%</td></tr>
                        <tr><td class="p-2 border">Fat (as is)</td><td class="p-2 border">5–10%</td></tr>
                        <tr><td class="p-2 border">Protein (as is)</td><td class="p-2 border">5–8%</td></tr>
                        <tr><td class="p-2 border">Sucrose (as is)</td><td class="p-2 border">40–50%</td></tr>
                        <tr><td class="p-2 border">Lactic acid</td><td class="p-2 border">0.8–1.5%</td></tr>
                        <tr><td class="p-2 border">pH</td><td class="p-2 border">3.8–4.5</td></tr>
                        <tr><td class="p-2 border">Water activity (a<sub>w</sub>)</td><td class="p-2 border">0.83–0.87</td></tr>
                        <tr><td class="p-2 border">Energy</td><td class="p-2 border">250–320 kcal/100g</td></tr>
                        <tr><td class="p-2 border">Viscosity (20 rpm, 10°C)</td><td class="p-2 border">10,000–50,000 cP</td></tr>
                        <tr><td class="p-2 border">Shelf life (≤ 5°C)</td><td class="p-2 border">30–40 days</td></tr>
                        <tr><td class="p-2 border">Chakka yield (from buffalo milk)</td><td class="p-2 border">20–22%</td></tr>
                        <tr><td class="p-2 border">Shrikhand yield (from 100 kg milk)</td><td class="p-2 border">38–42 kg</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">References and Further Reading</h3>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1 text-sm">
                <li>Patel, R.S. & Chakraborty, B.K. (1985). Shrikhand — A review. <em>Indian Journal of Dairy Science</em>, 38(4), 287–295.</li>
                <li>Boghra, V.R. & Mathur, O.N. (2000). Physico-chemical status of major milk constituents and minerals at various stages of Shrikhand preparation. <em>Journal of Food Science and Technology</em>, 37(2), 111–115.</li>
                <li>Prajapati, J.B. & Nair, B.M. (2003). The history of fermented foods. In E.R. Farnworth (Ed.), <em>Handbook of Fermented Functional Foods</em>. CRC Press.</li>
                <li>Aneja, R.P., Mathur, B.N., Chandan, R.C. & Banerjee, A.K. (2002). <em>Technology of Indian Milk Products</em>. Dairy India Yearbook.</li>
                <li>De, S. (2004). <em>Outlines of Dairy Technology</em>. Oxford University Press, New Delhi.</li>
                <li>FSSAI. (2011). <em>Food Safety and Standards (Food Products Standards and Food Additives) Regulations</em>. Government of India.</li>
                <li>BIS. (2017). <em>IS 16507:2017 — Shrikhand — Specification</em>. Bureau of Indian Standards.</li>
                <li>Lucey, J.A. (2004). Formation, structural properties and rheology of acid-coagulated milk gels. In P.F. Fox et al. (Eds.), <em>Cheese: Chemistry, Physics and Microbiology</em> (3rd ed., Vol. 1). Elsevier.</li>
                <li>Leistner, L. (2000). Basic aspects of food preservation by hurdle technology. <em>International Journal of Food Microbiology</em>, 55(1–3), 181–186.</li>
                <li>Dave, R.I. & Shah, N.P. (1997). Viability of yoghurt and probiotic bacteria in yoghurts made from commercial starter cultures. <em>International Dairy Journal</em>, 7(1), 31–41.</li>
            </ul>
        `
    },
    hi: {
        title: "Shrikhand Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shrikhand ka Introduction</h3>
            <p>Shrikhand ek semi-soft, meetha-khatta, whole milk se bana fermented dairy product hai jo traditionally Western India ke states — Gujarat, Maharashtra aur Karnataka mein banaya jaata hai. Iska naam Sanskrit ke <em>"Shri"</em> (matlab prosperity/shubh) aur <em>"Khand"</em> (matlab hissa ya cheeni) se aaya hai, jo isko ek celebratory dessert ka status deta hai. Ye <strong>'Chakka'</strong> (strained curd / concentrated dahi) se banaya jaata hai jo iska base matrix hai. Process mein milk ko mesophilic lactic acid bacteria se ferment karke dahi banate hain, phir whey strain karke chakka nikalte hain (jismein 70–80% total solids hote hain drainage ke extent ke hisaab se), aur phir chakka ko sugar (sucrose), cream, aur flavorings (elaichi, kesar, jaiphal, fruit pulp) ke saath blend karke smooth, rich aur creamy consistency achieve karte hain.</p>
            <p class="mt-2">Shrikhand ko ek fermented concentrated sweetened dairy product ki category mein rakha jaata hai. <strong>IS 16507:2017 (BIS Standard)</strong> ke according, ye woh product hai jo dahi (curd) se whey drain karke aur sugar add karke banaya jaata hai, cream, color, flavoring, fruits aur nuts ke saath ya bina. Product ki khaas baat hai ki iska total solids content zyada hota hai (≥58%), smooth body hoti hai, pleasant acid-sweet taste hota hai, aur refrigeration (≤5°C) mein 30–40 din ki shelf life hoti hai.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Historical aur Cultural Significance</h4>
            <p>Historically, Shrikhand ki preparation ka Indian culinary tradition mein sadiyon purana itihaas hai. Sabse pehle references Marathi aur Gujarati texts mein milte hain jahan dahi ko kapde ki thaili mein latka ke drain karne ka varnan hai. Traditional gharon mein, dahi ko muslin cloth mein raat bhar latka ke <em>mattha</em> (whey) aur <em>chakka</em> banaya jaata tha. Phir chakke ko haath se pathar ki sil (<em>pata-warwanta</em>) pe cheeni ke saath grind karke Shrikhand banate the. Modern industrial production mein ye saare steps mechanize ho gaye hain lekin fundamental biochemical transformations wahi rahte hain.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Shrikhand ka Biochemical Basis</h4>
            <p>Shrikhand basically <strong>homo-lactic fermentation</strong> ka product hai, jismein lactose (C₁₂H₂₂O₁₁) ko lactic acid bacteria (LAB) <strong>Embden–Meyerhof–Parnas (EMP) glycolytic pathway</strong> ke through metabolize karke primarily L(+)-lactic acid banati hain:</p>
            <div class="bg-gray-100 p-3 rounded mt-2 text-center font-mono text-sm">
                C₁₂H₂₂O₁₁ + H₂O → 2 C₆H₁₂O₆ (glucose + galactose) → 4 CH₃CHOHCOOH (lactic acid)
            </div>
            <p class="mt-2">Lactic acid ke accumulate hone se pH ~6.6 (fresh milk) se gir ke ~4.5–4.7 ho jaata hai, jisse casein micelle structure destabilize ho jaata hai. <strong>Casein ke isoelectric point (pH 4.6)</strong> pe, κ-casein pe net charge zero ke paas aa jaata hai, jisse micelles ke beech electrostatic repulsion khatam ho jaata hai. Isse casein ek continuous gel network (coagulum/dahi) mein aggregate ho jaata hai. Phir is gel se whey ka drainage (syneresis) casein–fat matrix ko concentrate karke chakka banata hai.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shrikhand ke Regulatory Standards</h3>
            
            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">FSSAI Standards (FSSR 2011, as amended)</h4>
            <p>Food Safety and Standards Authority of India (FSSAI) ne <strong>Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011</strong> ke under Shrikhand ke standards define kiye hain taaki consumer ke liye quality aur safety ensure ho sake.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Requirement</th>
                            <th class="p-2 border">Scientific Reason Kya Hai</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Total Solids (min, %)</strong></td>
                            <td class="p-2 border">58.0</td>
                            <td class="p-2 border">Adequate concentration ensure karta hai; kam TS matlab whey theek se drain nahi hua ya zyada dilution ho gaya. High TS se water activity (a<sub>w</sub>) kam hoti hai, jo microbial stability mein contribute karta hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat (on dry basis, min, %)</strong></td>
                            <td class="p-2 border">8.5</td>
                            <td class="p-2 border">Minimum fat se characteristic smooth, creamy mouthfeel aata hai. Fat globules casein gel network mein active fillers ki tarah kaam karte hain, jo rheology aur flavor release ko influence karte hain.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Protein (on dry basis, min, %)</strong></td>
                            <td class="p-2 border">9.0</td>
                            <td class="p-2 border">Ye ensure karta hai ki product genuinely milk/dahi se bana hai aur sirf sugar-starch paste nahi hai. Casein structural matrix provide karta hai aur textural firmness mein contribute karta hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sucrose (on dry basis, max, %)</strong></td>
                            <td class="p-2 border">72.5</td>
                            <td class="p-2 border">Upper limit se product excessively sweet nahi hoga aur milk-derived solids ka minimum proportion ensure hoga. High sucrose a<sub>w</sub> bhi kam karta hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Total Ash (on dry basis, max, %)</strong></td>
                            <td class="p-2 border">0.9</td>
                            <td class="p-2 border">Milk solids se mineral content indicate karta hai. Unusually high ash ka matlab mineral salts ya impure sugar se adulteration ho sakti hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Titratable Acidity (% lactic acid)</strong></td>
                            <td class="p-2 border">1.0–2.0 (typical)</td>
                            <td class="p-2 border">Adequate fermentation ko reflect karta hai. 1.0% se neeche matlab under-fermentation; 2.0% se upar matlab over-fermentation ya excessive culture activity.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">BIS Standards (IS 16507:2017)</h4>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Fruit Shrikhand</th>
                            <th class="p-2 border">Plain Shrikhand</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Total Solids (min, %)</strong></td>
                            <td class="p-2 border">55.0</td>
                            <td class="p-2 border">58.0</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat (on dry basis, min, %)</strong></td>
                            <td class="p-2 border">5.0</td>
                            <td class="p-2 border">8.5</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fruit content (min, %)</strong></td>
                            <td class="p-2 border">10.0</td>
                            <td class="p-2 border">Applicable nahi hai</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Microbiological Standards</h4>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Microorganism</th>
                            <th class="p-2 border">Limit (per g)</th>
                            <th class="p-2 border">Kya Significance Hai</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Total Plate Count</strong></td>
                            <td class="p-2 border">≤ 5 × 10⁴ CFU/g</td>
                            <td class="p-2 border">General hygiene ka indicator hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Coliform Count</strong></td>
                            <td class="p-2 border">≤ 10 CFU/g</td>
                            <td class="p-2 border">Post-pasteurization contamination ya fecal origin ka indicator</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>E. coli</em></strong></td>
                            <td class="p-2 border">1 g mein absent hona chahiye</td>
                            <td class="p-2 border">Fecal contamination ka indicator; potential pathogen hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>Staphylococcus aureus</em></strong></td>
                            <td class="p-2 border">≤ 100 CFU/g</td>
                            <td class="p-2 border">Enterotoxin-producing pathogen hai; heat-stable toxins pasteurization ke baad bhi survive karti hain</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>Salmonella</em></strong></td>
                            <td class="p-2 border">25 g mein absent hona chahiye</td>
                            <td class="p-2 border">Pathogenic hai; ready-to-eat dairy products mein zero tolerance hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>Listeria monocytogenes</em></strong></td>
                            <td class="p-2 border">25 g mein absent hona chahiye</td>
                            <td class="p-2 border">Psychrotrophic pathogen hai jo refrigeration temperature pe bhi grow kar sakta hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Yeast & Mold</strong></td>
                            <td class="p-2 border">≤ 50 CFU/g</td>
                            <td class="p-2 border">Spoilage organisms hain; osmotolerant yeasts high-sugar environment mein bhi grow kar sakte hain</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Starter Cultures aur Fermentation ki Microbiology</h3>
            <p>Milk ko ferment karke dahi (aur usse chakka) banane ke liye carefully selected <strong>lactic acid bacteria (LAB)</strong> starter cultures ka use hota hai. Culture ka choice product ki acidity profile, flavor development, texture aur aroma ko bahut zyada impact karta hai.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Kaunse Organisms Use Hote Hain</h4>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Organism</th>
                            <th class="p-2 border">Type</th>
                            <th class="p-2 border">Optimum Temp (°C)</th>
                            <th class="p-2 border">Primary Function Kya Hai</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><em>Lactococcus lactis</em> subsp. <em>lactis</em></td>
                            <td class="p-2 border">Mesophilic, homofermentative</td>
                            <td class="p-2 border">28–32</td>
                            <td class="p-2 border">Primary acid production (L-lactic acid); rapid pH drop karta hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><em>Lactococcus lactis</em> subsp. <em>cremoris</em></td>
                            <td class="p-2 border">Mesophilic, homofermentative</td>
                            <td class="p-2 border">22–30</td>
                            <td class="p-2 border">Halka acid produce karta hai; smoother body aur creamier texture mein contribute karta hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><em>Lactococcus lactis</em> subsp. <em>lactis</em> biovar <em>diacetylactis</em></td>
                            <td class="p-2 border">Mesophilic, citrate-fermenting</td>
                            <td class="p-2 border">25–30</td>
                            <td class="p-2 border">Citrate se diacetyl (2,3-butanedione) aur CO₂ produce karta hai; ye butter/cream wala key aroma compound hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><em>Leuconostoc mesenteroides</em> subsp. <em>cremoris</em></td>
                            <td class="p-2 border">Mesophilic, heterofermentative</td>
                            <td class="p-2 border">20–30</td>
                            <td class="p-2 border">Diacetyl, acetoin, ethanol, CO₂ produce karta hai; complex flavor profile aur dahi mein halki effervescence deta hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><em>Streptococcus thermophilus</em></td>
                            <td class="p-2 border">Thermophilic, homofermentative</td>
                            <td class="p-2 border">40–45</td>
                            <td class="p-2 border">Kuch industrial formulations mein use hota hai; rapid acid producer hai; exopolysaccharide (EPS) production se viscosity improve hoti hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><em>Lactobacillus delbrueckii</em> subsp. <em>bulgaricus</em></td>
                            <td class="p-2 border">Thermophilic, homofermentative</td>
                            <td class="p-2 border">40–45</td>
                            <td class="p-2 border">Strong acid producer hai; proteolytic activity se amino acids release hote hain jo flavor complexity mein contribute karte hain; acetaldehyde produce karta hai (yogurt-jaisa aroma)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Flavor Development ki Biochemistry</h4>
            <p>Shrikhand ka characteristic flavor LAB ke metabolic pathways ke complex interplay se aata hai:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Lactic acid (primary metabolite):</strong> Clean acidic taste provide karta hai. Chakka mein concentration 1.2–1.8% (as lactic acid) hoti hai. Mesophilic cultures ke saath L(+) isomer predominate karta hai, jo nutritionally preferred hai kyunki ye human L-lactate dehydrogenase se readily metabolize hota hai.</li>
                <li><strong>Diacetyl (2,3-butanedione, C₄H₆O₂):</strong> Ye signature buttery/creamy aroma compound hai. <em>Lc. lactis</em> biovar <em>diacetylactis</em> aur <em>Leuconostoc</em> spp. citrate se intermediate α-acetolactate ke through ise produce karte hain. Typical concentration: acche quality ke dahi mein 1–5 mg/kg. Pathway ye hai:
                    <div class="bg-gray-100 p-2 rounded mt-1 text-sm font-mono">
                        Citrate → Oxaloacetate → Pyruvate → α-Acetolactate → Diacetyl (oxidative decarboxylation) ya Acetoin (non-oxidative decarboxylation)
                    </div>
                </li>
                <li><strong>Acetaldehyde (CH₃CHO):</strong> Green-apple / yogurt jaisa note deta hai. Primarily <em>Lb. delbrueckii</em> subsp. <em>bulgaricus</em> threonine se threonine aldolase ke through produce karta hai. Dahi mein typical concentration: 5–40 mg/kg.</li>
                <li><strong>Acetic acid:</strong> Minor contributor hai; heterofermentative LAB produce karte hain. Low levels pe sharpness enhance karta hai lekin high levels (>0.1%) pe defect mana jaata hai.</li>
                <li><strong>Free amino acids aur peptides:</strong> LAB ke cell-envelope proteinases (CEP, jaise PrtP) ke through proteolysis se peptides aur free amino acids (khaas taur pe proline, leucine, glutamate) release hote hain jo savory (umami) aur complex background flavors mein contribute karte hain. Ye storage ke dauraan Strecker degradation ke through volatile compounds ke precursors bhi hain.</li>
                <li><strong>Free fatty acids:</strong> LAB esterases ke through limited lipolysis se short-chain fatty acids (C₄:₀ butyric, C₆:₀ caproic, C₈:₀ caprylic) release hote hain jo characteristic dairy flavor notes mein contribute karte hain.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Exopolysaccharide (EPS) Production aur Texture</h4>
            <p>Kuch LAB strains (khaas taur pe <em>S. thermophilus</em> aur <em>Lc. lactis</em> subsp. <em>cremoris</em> ke ropy strains) fermentation ke dauraan exopolysaccharides (EPS) produce karte hain. Ye high-molecular-weight polysaccharides (10⁴–10⁶ Da) hain jo glucose, galactose aur rhamnose ke repeating units se bane hote hain. EPS paani bind karte hain, viscosity badhate hain, dahi mein syneresis kam karte hain, aur final Shrikhand mein smoother, creamier mouthfeel contribute karte hain. Research (Purohit et al., 2009; Patel & Prajapati, 2013) ne dikhaya hai ki EPS-producing cultures chakka ki yield ko 3–5% tak badha sakte hain enhanced water-holding capacity ki wajah se.</p>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Food Safety Controls ke Saath Shrikhand ki Processing</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shrikhand Production ka Processing Flowchart</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception, Testing & Filtration <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Standardization (Fat: 4.5–5.0%, SNF: 8.5–9.0%) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Pre-heating (60–65°C) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Homogenization (150–200 kg/cm² at 60°C) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Heat Treatment (90°C / 10 min ya 85°C / 30 min)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded font-bold">CCP-1 (Biological)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Incubation Temperature tak Cooling (Mesophilic ke liye 28–32°C; Thermophilic ke liye 42–45°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Lactic Starter Culture se Inoculation (1.5–2.0% v/v) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded"><strong>Incubation & Curd Formation (Mesophilic 8–12 h / Thermophilic 4–6 h; target pH 4.4–4.7, acidity 0.7–0.9% LA)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded font-bold">CCP-2 (Biological)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Curd Todna & Whey Drain Karna — Muslin Cloth / Quarg Separator / Centrifuge <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-200 border border-purple-400 rounded"><strong>Chakka</strong> (TS: 25–30%; Fat: 12–15% dry basis pe; Acidity: 1.2–1.8% LA; pH 4.0–4.5)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Chakka ko Sugar (40–45% w/w), Cream, Color & Flavorings ke saath Mix Karna <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Blending / Homogenization (Colloid Mill / Planetary Mixer)</strong> <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Finished Shrikhand</strong> (TS: ≥58%; pH 3.8–4.5; a<sub>w</sub>: 0.83–0.87)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Filling & Packaging (PP/PS cups mein Aseptic / Clean-fill, hermetic seal) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded"><strong>Cold Storage & Distribution (≤5°C; shelf life: 30–40 din)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded font-bold">CCP-3 (Biological)</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Steps ki Detailed Scientific Explanation</h3>
            <ol class="list-decimal list-outside pl-5 space-y-6">
                <li><strong>Milk Reception, Testing aur Standardization (PRP)</strong>
                    <p>Sirf wahi high-quality milk accept hota hai jo FSSAI standards meet karta hai (Toned ke liye Fat ≥ 3.0%, Buffalo ke liye ≥ 6.0%; SNF ≥ 8.5%). Platform tests mein ye sab include hain:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Organoleptic evaluation:</strong> Dikhawat, smell, taste — taaki off-flavors wala milk (rancid, oxidized, feed-related) reject kar sakein.</li>
                        <li><strong>Clot-on-boiling (COB) test:</strong> High acidity (>0.18% LA) ya abnormal salt balance wala milk detect karta hai; aisa milk kamzor, grainy curd banata hai.</li>
                        <li><strong>Alcohol test (68% ya 75% ethanol):</strong> High-acidity ya colostral milk ko screen karta hai jo heat treatment ke liye suitable nahi hai.</li>
                        <li><strong>Methylene blue reduction test (MBRT):</strong> MBRT > 2 ghante matlab acceptable microbial quality (< 5 × 10⁶ CFU/mL).</li>
                        <li><strong>Lactometer reading:</strong> Paani ki milawat detect karta hai; 27°C pe corrected lactometer reading (CLR) cow milk ke liye ≥ 26 aur buffalo milk ke liye ≥ 28 honi chahiye.</li>
                        <li><strong>Fat (Gerber method) aur SNF (formula ya IR analyzer se):</strong> Target composition ke liye standardization ke liye.</li>
                        <li><strong>Somatic Cell Count (SCC):</strong> SCC > 400,000 cells/mL subclinical mastitis indicate karta hai; aise milk mein plasmin activity zyada hoti hai, casein content kam hota hai, aur whey protein zyada hota hai, jisse soft, kamzor curd banta hai aur whey drainage kharaab hota hai — iska seedha asar chakka yield aur quality pe padta hai.</li>
                    </ul>
                    <p class="mt-2"><strong>Standardization:</strong> Milk ko <strong>Fat: 4.5–5.0%</strong> aur <strong>SNF: 8.5–9.0%</strong> pe standardize karte hain Pearson's square method se. Buffalo milk (Fat: 6–8%, SNF: 9–10%) traditionally Shrikhand ke liye prefer kiya jaata hai kyunki ismein casein content zyada hota hai (3.5–4.0% vs. cow milk mein 2.5–3.0%), jo firmer curd banata hai, chakka yield zyada deta hai (buffalo se 20–22% vs. cow milk se 15–18%), aur richer, whiter product banata hai. Buffalo milk casein micelles mein calcium content bhi zyada hota hai (35 mg Ca/g casein vs. cow milk mein 30 mg/g) jo firmer gel structure mein contribute karta hai.</p>
                </li>

                <li><strong>Pre-heating aur Homogenization (PRP)</strong>
                    <p>Milk ko <strong>60–65°C</strong> pe pre-heat karke phir <strong>150–200 kg/cm² (first stage: 150 kg/cm², second stage: 50 kg/cm²)</strong> pe homogenize karte hain.</p>
                    <p class="mt-2"><strong>Scientific reason kya hai:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Homogenization se average fat globule diameter 3–5 μm se ghat ke < 1 μm ho jaata hai, total fat-surface area 4–6 guna badh jaata hai.</li>
                        <li>Newly created fat globule surfaces pe casein micelle fragments aur whey proteins (mainly β-lactoglobulin aur α-lactalbumin) coat ho jaate hain, ek naya membrane (recombined membrane) bana ke.</li>
                        <li>Ye casein-coated fat globules ab "pseudo-protein particles" ki tarah behave karte hain aur fermentation ke dauraan acid-gel network mein actively participate karte hain, <strong>active fillers</strong> ki tarah kaam karte hain. Isse firmer, zyada viscous dahi banta hai jismein free whey separation kam hota hai.</li>
                        <li>Incubation ke dauraan cream layer formation prevent hota hai.</li>
                        <li>Final Shrikhand ki whiteness aur opacity improve hoti hai kyunki chhote fat globules se light scattering badh jaati hai.</li>
                    </ul>
                </li>

                <li><strong>Heat Treatment — CCP-1 (Biological Hazard)</strong>
                    <p>Standardized aur homogenized milk ko <strong>90°C pe 10 minute</strong> tak (ya equivalent 85°C pe 30 minute) heat karte hain. Ye sabse critical processing step hai.</p>
                    <p class="mt-2"><strong>Critical Limits:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Temperature: ≥ 90°C (calibrated RTD/thermocouple sensors jo PLC se integrated hain unse monitor hota hai)</li>
                        <li>Holding time: ≥ 10 minutes (flow rate aur holding tube design se verify hota hai)</li>
                        <li>Automatic flow diversion valve (FDV) under-heated milk ko wapas balance tank mein divert karta hai</li>
                    </ul>
                    <p class="mt-2"><strong>Scientific rationale aur effects:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                        <li><strong>Pathogen destruction:</strong> Ye treatment <em>Coxiella burnetii</em> (milk mein sabse zyada heat-resistant non-spore-forming pathogen; D₇₂ = 0.01 s) ka >12D kill deta hai aur <em>Mycobacterium tuberculosis</em>, <em>Salmonella</em> spp., <em>Listeria monocytogenes</em> (D₇₂ = 0.5–2.0 s), aur <em>E. coli</em> O157:H7 (D₆₄ = 9.6 s) ka >6D kill deta hai. Process vegetative pathogens ke liye commercial sterility achieve karta hai.</li>
                        <li><strong>Whey protein denaturation:</strong> 90°C/10 min pe, lagbhag <strong>85–95% β-lactoglobulin (β-Lg)</strong> aur <strong>70–80% α-lactalbumin (α-La)</strong> denature ho jaate hain. Denatured whey proteins, khaas taur pe β-Lg, casein micelles ki surface pe κ-casein ke saath disulfide-linked complexes banate hain thiol-disulfide interchange reactions ke through (β-Lg ke Cys-121 ka sulfhydryl group κ-casein ke Cys-11–Cys-88 disulfide bond ke saath react karta hai). Isse:
                            <ul class="list-circle list-outside pl-5 mt-1 space-y-1">
                                <li>Acid gel ki <strong>water-holding capacity (WHC)</strong> 15–25% badh jaati hai</li>
                                <li>Low-heat-treated milk ke comparison mein <strong>chakka yield 10–15% zyada</strong> hoti hai</li>
                                <li>Firmer, zyada cohesive gel banta hai jismein syneresis kam hoti hai</li>
                                <li>Final Shrikhand mein smoother, creamier mouthfeel aata hai</li>
                            </ul>
                        </li>
                        <li><strong>Lactoperoxidase inactivation:</strong> Indigenous enzyme lactoperoxidase ko destroy karta hai (>78°C pe inactivate hota hai), adequate heat treatment confirm karta hai (negative LP test).</li>
                        <li><strong>Indigenous lipases aur proteases ka destruction:</strong> Native milk lipoprotein lipase (LPL) >72°C pe inactivate ho jaata hai. Lekin bacterial heat-stable proteases (psychrotrophic <em>Pseudomonas</em> spp. se, agar raw milk mein >10⁶ CFU/mL hain) 90°C survive kar sakte hain aur storage ke dauraan bitter peptide formation cause kar sakte hain.</li>
                        <li><strong>Bacteriophages ka elimination:</strong> Lactic bacteriophages ko destroy karta hai jo starter culture ko lyse karke slow/dead vat (fermentation failure) cause kar sakte hain. Zyada-tar dairy phages >72°C/15 s pe inactivate ho jaate hain.</li>
                        <li><strong>Maillard reaction (limited):</strong> 90°C/10 min pe, lactose aur casein ke lysine residues ke beech halka Maillard browning hota hai, jo subtle cooked/caramelized note deta hai. Excessive heat (jaise UHT conditions) se undesirable browning aur off-flavors aate hain.</li>
                    </ul>
                    <p class="mt-2"><strong>Monitoring & Corrective Actions:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Chart recorder/data logger se continuous temperature recording</li>
                        <li>Agar T < 90°C toh automatic FDV activate ho jaata hai</li>
                        <li>Phosphatase test (negative hona chahiye; bovine alkaline phosphatase 72°C/15 s pe inactivate hota hai) aur Turbidity test (positive hona chahiye; > 80°C pe whey protein denaturation indicate karta hai) post-process verify karne ke liye</li>
                        <li>Agar CCP breach ho jaaye: re-pasteurize karo, root cause investigate karo, product ko disposition ke liye hold karo</li>
                    </ul>
                </li>

                <li><strong>Incubation Temperature tak Cooling (oPRP)</strong>
                    <p>Heat-treated milk ko jaldi se (30 minute ke andar) <strong>incubation temperature</strong> tak cool karna zaroori hai:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Mesophilic cultures ke liye (<em>Lactococcus</em> spp., <em>Leuconostoc</em> spp.): <strong>28–32°C</strong></li>
                        <li>Thermophilic cultures ke liye (<em>S. thermophilus</em>, <em>Lb. bulgaricus</em>): <strong>42–45°C</strong></li>
                    </ul>
                    <p class="mt-2"><strong>Scientific reason:</strong> Mesophilic spoilage organisms ke liye <strong>"danger zone" (20–45°C)</strong> se rapid cooling bahut zaroori hai. Cooling plate heat exchangers (PHE) mein chilled water se hoti hai. Dheere cooling se thermoduric ya surviving spore-forming organisms (<em>Bacillus cereus</em>, jiske spores 90°C/10 min survive karte hain D₁₀₀ = 2.7 min ke saath) ka growth hota hai aur environment se potential bacteriophage contamination bhi ho sakta hai.</p>
                    <p class="mt-2"><strong>oPRP Control:</strong> PHE outlet pe temperature monitor hota hai; agar temperature target se deviate kare (±2°C), toh cooling water flow rate adjust karte hain. Agar inoculation temperature bahut zyada ho jaaye (mesophilic ke liye >35°C), toh ye selectively thermophilic contaminants ko favour karega aur mesophilic starter cells ko damage karega, jisse harsh, excessively acidic product banega.</p>
                </li>

                <li><strong>Starter Culture se Inoculation (oPRP)</strong>
                    <p>Lactic starter culture <strong>1.5–2.0% (v/v)</strong> bulk starter ya <strong>DVS (Direct Vat Set) freeze-dried culture</strong> manufacturer ki recommended dosage pe (typically 10–50 U per 1000 L) add karte hain. Culture ko in-line mixing ya gentle agitation se 5–10 minute ke liye uniformly disperse karte hain.</p>
                    <p class="mt-2"><strong>oPRP Controls:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Use karne se pehle starter activity verify hoti hai (acid production test: bulk starter ko 30°C pe 6 h mein ≥ 0.70% LA develop karna chahiye)</li>
                        <li>Bacteriophage accumulation rokne ke liye culture strains ki rotation (phage-unrelated strains)</li>
                        <li>Bulk starter preparation ke liye phage-resistant media ka use (jo phosphate buffers contain karte hain Ca²⁺ chelate karne ke liye jo phage adsorption ke liye zaroor hai)</li>
                        <li>DVS cultures ko aseptically handle karte hain; foil packaging HEPA filtration wale clean zone mein use se just pehle kholi jaati hai</li>
                    </ul>
                </li>

                <li><strong>Incubation aur Curd Formation — CCP-2 (Biological Hazard)</strong>
                    <p>Inoculated milk ko set temperature pe required duration ke liye jacketed stainless steel vats ya incubation tanks mein bina hilaye (quiescent incubation) rakha jaata hai:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Mesophilic (30°C):</strong> 8–12 ghante; target endpoint pH 4.4–4.7, titratable acidity 0.70–0.90% LA</li>
                        <li><strong>Thermophilic (43°C):</strong> 4–6 ghante; target endpoint pH 4.3–4.6, titratable acidity 0.80–1.00% LA</li>
                    </ul>
                    <p class="mt-2"><strong>Critical Limits:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Incubation ke end mein pH: ≤ 4.6 (casein ke isoelectric point se neeche)</li>
                        <li>pH 4.6 reach karne ka time: ≤ 12 ghante (mesophilic) / ≤ 6 ghante (thermophilic)</li>
                        <li>Incubation temperature set point ke ±1°C ke andar maintain</li>
                    </ul>
                    <p class="mt-2"><strong>Scientific reason — pH 4.6 safety ke liye itna critical kyun hai?</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                        <li>pH ≤ 4.6 <strong><em>Clostridium botulinum</em> ka growth/toxin boundary</strong> hai. Is pH se neeche, <em>C. botulinum</em> spores se germinate nahi kar sakta aur na hi botulinum toxin produce kar sakta hai. Ye pH 4.6 acid/fermented foods mein sabse critical food safety parameter hai.</li>
                        <li><em>Staphylococcus aureus</em> enterotoxin production pH 4.5 se neeche band ho jaati hai (growth minimum pH: aerobic conditions mein 4.0, lekin toxin production 4.5 pe ruk jaati hai).</li>
                        <li><em>Salmonella</em> spp. ka minimum growth pH 3.8–4.0 hai lekin lactic acid ki presence mein 4.6 se neeche effectively inhibit ho jaati hai (lactic acid ka pKa 3.86 hai; pH 4.6 pe, lagbhag 85% lactic acid undissociated form mein hota hai, jo bacterial cell membrane penetrate karke cytoplasm ko acidify kar sakta hai).</li>
                        <li><em>Listeria monocytogenes</em> ka minimum growth pH 4.3–4.4 hai; pH < 4.6 aur refrigeration (< 5°C) ka combination double hurdle provide karta hai.</li>
                    </ul>
                    <p class="mt-2"><strong>Gel Formation ka Mechanism (detailed):</strong></p>
                    <p>Jab fermentation ke dauraan pH 6.6 se 4.6 tak girti hai, casein micelle system mein ye sequential physicochemical changes hote hain:</p>
                    <ol class="list-decimal list-outside pl-5 mt-1 space-y-1">
                        <li><strong>pH 6.6–6.0:</strong> Micelle ke andar se colloidal calcium phosphate (CCP) ka dissolution shuru hota hai. CCP (micellar calcium phosphate nanoclusters, ~2.5 nm, Ca₉(PO₄)₆ se bane jo αs1-, αs2-, aur β-caseins ke phosphoserine residues se linked hain) [H⁺] badhne se dissolve hona shuru karte hain, internal micellar cross-links destabilize hote hain.</li>
                        <li><strong>pH 6.0–5.5:</strong> CCP dissolution tez hota hai; ~50% micellar Ca²⁺ solubilize ho jaata hai. Internal cohesion kam hone se micelles swell hone lagte hain. κ-casein ki hairy layer (C-terminal glycomacropeptide, GMP) apna charge kam hone se collapse hone lagti hai.</li>
                        <li><strong>pH 5.5–5.0:</strong> CCP ka near-complete dissolution. Micelles apne internal nanocluster cross-links kho dete hain. Casein ka zeta potential zero ke paas aa jaata hai (isoelectric range: β-casein ke liye 4.6, αs1-casein ke liye 4.9). Electrostatic repulsion khatam ho jaata hai. Caseins ke beech hydrophobic interactions dominant ho jaate hain, jisse micelle–micelle aggregation hoti hai.</li>
                        <li><strong>pH 5.0–4.6:</strong> Massive aggregation hoti hai. Heat treatment ke dauraan bane denatured whey protein–κ-casein complexes aggregating micelles ke beech bridging agents ki tarah kaam karte hain, ek continuous three-dimensional gel network banate hain. Homogenization se casein-coated fat globules is network ke andar structural elements ki tarah entrap ho jaate hain.</li>
                        <li><strong>pH < 4.6:</strong> Gel poori tarah ban jaata hai. Aur acidification se gel firmness thodi badh jaati hai lekin syneresis tendency bhi badhti hai kyunki gel network contract karta hai. Chakka preparation ke liye optimal endpoint pH 4.4–4.6 hai.</li>
                    </ol>
                    <p class="mt-2"><strong>Monitoring & Corrective Actions:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Incubation ke dauraan har 2 ghante mein calibrated pH meter se pH check hota hai (electrode pH 4.0 aur 7.0 pe calibrate)</li>
                        <li>Agar specified time mein pH 4.6 achieve na ho: culture activity investigate karo (phage attack, milk mein antibiotic residues, sanitizer carryover). Corrective action: batch condemn karo; kabhi bhi incubation indefinitely extend mat karo, kyunki isse danger zone mein extended time milta hai.</li>
                        <li>Records: har batch ka pH/time/temperature log; product shelf life + 1 saal tak retain karo.</li>
                    </ul>
                </li>

                <li><strong>Curd Todna aur Whey Drain Karna — Chakka Production (oPRP)</strong>
                    <p>Firm dahi ko gently todna hai (excessive fat loss whey mein hone se bachane ke liye) aur whey drain karna hai. Industrially teen methods use hote hain:</p>
                    <div class="overflow-x-auto mt-4">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Method</th>
                                    <th class="p-2 border">Principle</th>
                                    <th class="p-2 border">Fayde</th>
                                    <th class="p-2 border">Limitations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong>Muslin Cloth (Traditional)</strong></td>
                                    <td class="p-2 border">Gravity drainage; curd ko kapde mein 8–12 h tak < 10°C pe latka ke rakhte hain</td>
                                    <td class="p-2 border">Simple hai; koi capital cost nahi</td>
                                    <td class="p-2 border">Time lagta hai; labor-intensive; hygiene concerns; variable drainage; batch-to-batch inconsistency</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Basket Centrifuge</strong></td>
                                    <td class="p-2 border">Centrifugal separation; curd ko perforated basket mein 1000–2000 rpm pe spin karte hain</td>
                                    <td class="p-2 border">Tez hai (1–2 h); better hygiene; controlled drainage</td>
                                    <td class="p-2 border">Whey mein zyada fat loss; heat generation se acidity badh sakti hai; batch operation</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Quarg Separator (jaise Westfalia)</strong></td>
                                    <td class="p-2 border">Self-desludging separator se mechanical separation; 3000–5000 rpm pe continuous operation</td>
                                    <td class="p-2 border">Continuous hai; hygienic (enclosed system); chakka mein consistent TS; highest throughput; minimal fat loss</td>
                                    <td class="p-2 border">High capital cost; trained operators chahiye; product traditional se thoda smoother ho sakta hai (kuch consumers grainy texture prefer karte hain)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2"><strong>oPRP Controls:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Drainage <strong>< 10°C</strong> pe hona chahiye (agar traditional method hai) taaki extended drainage period mein microbial growth na ho</li>
                        <li>Target chakka composition: <strong>TS: 25–30%; Fat: 12–15% (dry basis); Acidity: 1.2–1.8% LA; pH: 4.0–4.5</strong></li>
                        <li>Drain hua whey original curd weight ka lagbhag 50–60% hota hai. Ye acid whey (pH 4.5–4.7) mein lactose, soluble whey proteins, minerals (Ca, P, K), aur lactic acid hote hain aur iska proper valorization zaroori hai (baad mein discuss kiya hai).</li>
                        <li>Chakka ko < 5°C pe store karne pe 24 h ke andar use karna chahiye, ya extended storage ke liye -18°C pe freeze karna chahiye (3 months tak)</li>
                    </ul>

                    <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Chakka aur Shrikhand Production ka Material Balance</h4>
                    <p>100 kg standardized buffalo milk se shuru karte hain (Fat: 6.0%, SNF: 9.0%, TS: 15.0%):</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Stage</th>
                                    <th class="p-2 border">Input (kg)</th>
                                    <th class="p-2 border">Output (kg)</th>
                                    <th class="p-2 border">TS (%)</th>
                                    <th class="p-2 border">Yield (%)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border">Standardized milk</td>
                                    <td class="p-2 border">100.0</td>
                                    <td class="p-2 border">—</td>
                                    <td class="p-2 border">15.0</td>
                                    <td class="p-2 border">—</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Dahi (fermentation ke baad)</td>
                                    <td class="p-2 border">—</td>
                                    <td class="p-2 border">~100.0</td>
                                    <td class="p-2 border">~15.0</td>
                                    <td class="p-2 border">~100%</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Chakka (whey drainage ke baad)</td>
                                    <td class="p-2 border">—</td>
                                    <td class="p-2 border">20–22</td>
                                    <td class="p-2 border">25–30</td>
                                    <td class="p-2 border">20–22%</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Acid whey</td>
                                    <td class="p-2 border">—</td>
                                    <td class="p-2 border">78–80</td>
                                    <td class="p-2 border">5.5–6.0</td>
                                    <td class="p-2 border">—</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border">Shrikhand (chakka + 45% sugar + cream)</td>
                                    <td class="p-2 border">20 kg chakka + 16–18 kg sugar + 2 kg cream</td>
                                    <td class="p-2 border">38–40</td>
                                    <td class="p-2 border">58–65</td>
                                    <td class="p-2 border">Milk weight ka 38–40%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>

                <li><strong>Chakka ko Sugar, Cream aur Flavorings ke saath Mix Karna (oPRP)</strong>
                    <p>Fresh chakka ko <strong>planetary mixer</strong> (jaise Stephan mixer, ribbon blender, ya sigma blade mixer) mein transfer karte hain. Ye ingredients sequentially add hote hain:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Sugar (powdered/icing sugar):</strong> Total Shrikhand weight ka 40–50%. Powdered sugar (particle size < 100 μm) granulated sugar se isliye prefer hoti hai kyunki:
                            <ul class="list-circle list-outside pl-5 mt-1 space-y-1">
                                <li>Cold, viscous chakka matrix mein jaldi dissolve hoti hai</li>
                                <li>Grittiness eliminate hoti hai (dairy products mein particle size perception threshold: ~20–25 μm; isse upar ke particles gritty feel hote hain)</li>
                                <li>Sugar ke multiple functions hain: sweetness, osmotic preservation (a<sub>w</sub> ko chakka ke ~0.97 se Shrikhand mein 0.83–0.87 tak reduce karta hai), body/viscosity enhancement (total solids badhata hai), aur excessive acidity ko mask karta hai</li>
                            </ul>
                        </li>
                        <li><strong>Cream (25–40% fat):</strong> Final fat content ko FSSAI minimum (dry basis pe 8.5%) meet karne ke liye add hoti hai. Cream mouthfeel (lubricity), flavor release, aur smooth texture mein contribute karti hai. Fat-soluble vitamins (A, D, E, K) bhi deti hai.</li>
                        <li><strong>Flavorings:</strong>
                            <ul class="list-circle list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Elaichi (cardamom):</strong> 0.1–0.3%; ismein 1,8-cineole (eucalyptol) aur α-terpinyl acetate primary flavor compounds hain</li>
                                <li><strong>Kesar (saffron):</strong> 0.01–0.05%; ismein crocin (color, water-soluble carotenoid glycoside), picrocrocin (kadwa swad), aur safranal (khooshboo) hote hain</li>
                                <li><strong>Jaiphal (nutmeg):</strong> 0.05–0.1%; ismein myristicin aur elemicin hote hain</li>
                                <li><strong>Gulaab jal (rose water):</strong> 0.5–1.0%; ismein 2-phenylethanol aur citronellol hote hain</li>
                                <li><strong>Fruit pulp (fruit Shrikhand ke liye):</strong> BIS ke according weight ka ≥ 10%; aam (Alphonso), strawberry, pineapple common hain. Fruit add karne se pH adjustment zaroori hai (fruit acid + lactic acid milke product pH 3.8 se neeche nahi girna chahiye, warna excessive tartness aur protein aggregation hoti hai)</li>
                            </ul>
                        </li>
                        <li><strong>Color (agar add karna ho):</strong> Sirf FSSAI-permitted food colors (jaise β-carotene, annatto, turmeric) GMP levels pe ya usse kam. Premium products mein artificial colors se bachne ka trend hai.</li>
                        <li><strong>Stabilizers/Emulsifiers (optional):</strong> Permitted stabilizers mein CMC (carboxymethyl cellulose, 0.1–0.3%), pectin (0.1–0.2%), gelatin (0.1–0.5%), aur guar gum (0.1–0.2%) hain. Ye shelf-life stability improve karte hain syneresis kam karke aur storage ke dauraan smooth texture maintain karke. Mono- aur di-glycerides (0.1–0.2%) fat distribution improve karne ke liye emulsifiers ki tarah add ho sakte hain.</li>
                    </ul>
                </li>

                <li><strong>Smooth Texture ke liye Blending / Homogenization (oPRP)</strong>
                    <p>Mixed mass ko in mein se ek ya zyada se process karte hain taaki <strong>completely homogenous, smooth, lump-free paste</strong> ban sake:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Planetary mixer:</strong> Medium-speed mixing 15–30 minute ke liye taaki sugar dissolve ho jaaye aur cream uniformly distribute ho jaaye.</li>
                        <li><strong>Colloid mill:</strong> Mixture ko colloid mill se guzaarte hain (gap setting: 0.05–0.1 mm; rotor speed: 3000–5000 rpm). Ye product ko intense shear forces deta hai, jisse koi bhi casein aggregates, undissolved sugar crystals, ya cream clusters toot jaate hain. Result mein product ki particle size < 25 μm hoti hai (jibh pe mehsoos nahi hota).</li>
                        <li><strong>High-pressure homogenizer (optional):</strong> 50–100 kg/cm² pe passage se texture aur refine hota hai. Excessive homogenization pressure (> 150 kg/cm²) casein gel network ko zyada tod sakta hai, jisse patla, runny product ban sakta hai.</li>
                    </ul>
                    <p class="mt-2"><strong>oPRP Controls:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Mixing/milling ke dauraan product temperature < 15°C maintain karna chahiye taaki microbial growth aur excessive acid development na ho</li>
                        <li>Final product testing: TS (refractometer ya oven drying, target ≥ 58%), pH (target 3.8–4.5), acidity, fat, aur sensory evaluation (smooth body, koi grittiness nahi, balanced meetha-khatta taste)</li>
                    </ul>
                </li>

                <li><strong>Filling, Packaging aur Sealing (PRP)</strong>
                    <p>Finished Shrikhand ko pre-sanitized containers mein <strong>clean-fill ya aseptic filling systems</strong> se pack karte hain:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Packaging materials:</strong> Polypropylene (PP) ya polystyrene (PS) cups (100g, 200g, 500g); bulk ke liye HDPE containers; ya aluminum-foil-laminated cups. Packaging ko moisture, oxygen aur light (fat aur vitamins ke oxidation rokne ke liye UV protection) ke khilaf effective barrier dena chahiye.</li>
                        <li><strong>Filling environment:</strong> HEPA-filtered air wala positive-pressure clean room (ISO Class 7/8) taaki airborne microbial contamination minimize ho (target: < 10 CFU/m³).</li>
                        <li><strong>Sealing:</strong> Heat-sealed aluminum foil lids hermetic closure ensure karte hain. Seal integrity testing (dye penetration test, vacuum/pressure decay test) defined frequency pe hoti hai (jaise har 30 minute ya har 500 cups pe).</li>
                        <li><strong>Labeling:</strong> FSSAI-compliant labels jismein product name, ingredients list (proportion ke descending order mein), nutritional information, FSSAI license number, batch/lot code, manufacture date, best-before date, storage instructions ("5°C ya usse neeche store karein"), net weight, aur allergen declaration (milk contain karta hai) hona chahiye.</li>
                    </ul>
                    <p class="mt-2"><strong>PRP Controls:</strong> Filling machine components ki CIP/COP; packaging material ki UV/ozone sanitization; operators ki personal hygiene (gloves, masks, hair nets, sanitized aprons).</p>
                </li>

                <li><strong>Cold Storage aur Distribution — CCP-3 (Biological Hazard)</strong>
                    <p>Packaged Shrikhand ko turant cold store mein rakhte hain jo <strong>≤ 5°C (target: 2–4°C)</strong> pe maintain hota hai.</p>
                    <p class="mt-2"><strong>Critical Limits:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Cold store temperature: har waqt ≤ 5°C</li>
                        <li>Product core temperature filling ke 4 ghante ke andar ≤ 5°C reach karna chahiye</li>
                        <li>Poori distribution mein cold chain integrity maintain (refrigerated trucks 2–5°C pe)</li>
                    </ul>
                    <p class="mt-2"><strong>Scientific reason:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                        <li>Shrikhand ki a<sub>w</sub> 0.83–0.87 hai aur pH 3.8–4.5 hai. Ye conditions zyada-tar pathogenic bacteria ke liye hostile hain lekin saare spoilage organisms ke liye nahi:
                            <ul class="list-circle list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Osmotolerant/osmophilic yeasts</strong> (jaise <em>Zygosaccharomyces rouxii</em>, <em>Torulaspora delbrueckii</em>): a<sub>w</sub> 0.62 tak bhi grow kar sakte hain; low pH aur high sugar inhibitory nahi hain. Ye Shrikhand ke <strong>primary spoilage organisms</strong> hain, jo gas production (containers ka bloating), off-flavors (alcoholic, yeasty), aur surface film formation cause karte hain.</li>
                                <li><strong>Xerophilic molds</strong> (jaise <em>Aspergillus</em>, <em>Penicillium</em>): a<sub>w</sub> < 0.85 pe bhi grow kar sakte hain agar oxygen available ho (surface growth).</li>
                                <li><strong>Psychrotrophic bacteria:</strong> <em>Pseudomonas</em> spp. low pH se inhibit hote hain, lekin kuch psychrotrophic LAB (<em>Lactobacillus</em> spp.) dheere-dheere acid produce karte reh sakte hain, jisse time ke saath excessive sourness aa sakti hai.</li>
                            </ul>
                        </li>
                        <li>≤ 5°C pe, osmotolerant yeasts ki growth rate 25°C ke comparison mein > 90% kam ho jaati hai (generation time 25°C pe ~2 h se badh ke 5°C pe > 24 h ho jaata hai). Ye, inherent hurdles (low pH, low a<sub>w</sub>, lactic acid) ke saath milke, <strong>30–40 din</strong> ki shelf life ensure karta hai.</li>
                        <li>Temperature abuse (> 10°C temporarily bhi) se shelf life dramatically kam ho jaati hai — 15°C pe yeast doubling time ~6–8 h hai, aur 7–10 din ke andar visible spoilage ho sakta hai.</li>
                    </ul>
                    <p class="mt-2"><strong>Monitoring & Corrective Actions:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Automated alarms ke saath data loggers se continuous temperature monitoring (> 5°C pe alert; > 8°C pe alarm)</li>
                        <li>Calibrated thermometers se daily manual verification</li>
                        <li>Distribution vehicles mein GPS-enabled temperature loggers; temperature records manufacturer ke saath share hote hain</li>
                        <li>Agar cold chain breach ho jaaye (> 8°C se zyada > 2 ghante ke liye): product quarantine karo, microbiological quality assess karo, aur agar yeast/mold count limits se zyada ho toh condemn karo</li>
                    </ul>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shrikhand ke liye HACCP Plan Summary</h3>
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
                            <td class="p-2 border font-bold">CCP-1</td>
                            <td class="p-2 border">Heat Treatment</td>
                            <td class="p-2 border">Biological: vegetative pathogens ka survival (<em>Salmonella</em>, <em>Listeria</em>, <em>E. coli</em> O157:H7, <em>S. aureus</em>)</td>
                            <td class="p-2 border">≥ 90°C, ≥ 10 min ke liye</td>
                            <td class="p-2 border">Continuous T recording; FDV status; flow rate</td>
                            <td class="p-2 border">Divert & re-process karo; PHE/boiler investigate karo; product hold karo</td>
                            <td class="p-2 border">Phosphatase test (−ve); Turbidity test (+ve); thermometer calibration (weekly); chart review (har batch)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border font-bold">CCP-2</td>
                            <td class="p-2 border">Incubation / Fermentation</td>
                            <td class="p-2 border">Biological: insufficient acidification se pathogen survival/growth (<em>C. botulinum</em>, <em>S. aureus</em> toxin, <em>Salmonella</em>)</td>
                            <td class="p-2 border">12 h (mesophilic) ya 6 h (thermophilic) mein pH ≤ 4.6</td>
                            <td class="p-2 border">Har 2 h mein pH measurement; T monitoring; curd firmness ka visual assessment</td>
                            <td class="p-2 border">Agar max time pe pH > 4.6: batch condemn karo; culture investigate karo (phage, antibiotics, sanitizer); agar safe time window mein ho toh re-inoculate karo</td>
                            <td class="p-2 border">Starter activity testing (daily); pH meter calibration (daily); phage testing (weekly); incoming milk ki antibiotic residue testing (SNAP test)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border font-bold">CCP-3</td>
                            <td class="p-2 border">Cold Storage & Distribution</td>
                            <td class="p-2 border">Biological: osmotolerant yeasts, molds ka growth; agar pH > 4.4 ho toh <em>L. monocytogenes</em> (psychrotroph) ka potential growth</td>
                            <td class="p-2 border">Storage aur distribution mein har jagah ≤ 5°C</td>
                            <td class="p-2 border">Continuous data logger; daily manual check; distribution vehicle ke T records</td>
                            <td class="p-2 border">Agar T > 8°C > 2 h ke liye: product quarantine karo; yeast/mold/pathogens test karo; shelf life reduce karo ya condemn karo</td>
                            <td class="p-2 border">Monthly microbiological testing of finished product; end-of-shelf-life studies; logger calibration (quarterly)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Rheological aur Textural Properties</h3>
            <p>Shrikhand <strong>pseudoplastic (shear-thinning) behavior</strong> dikhata hai, matlab iska apparent viscosity shear rate badhne se kam hota hai. Ye desirable hai — product cup mein thick aur rich dikhta hai lekin chamach pe aur munh mein aasani se flow karta hai.</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Flow behavior index (n):</strong> 0.25–0.45 (n < 1 shear-thinning confirm karta hai; n = 1 Newtonian hoga). Values <strong>Power Law model: τ = K·γ̇ⁿ</strong> se describe hote hain, jahan τ = shear stress, K = consistency coefficient, aur γ̇ = shear rate.</li>
                <li><strong>Consistency coefficient (K):</strong> 50–200 Pa·sⁿ (zyada K = motaa product). K total solids, fat content aur protein content badhne se badhta hai.</li>
                <li><strong>Thixotropy:</strong> Shrikhand significant thixotropy dikhata hai (shear rate sweep mein up-curve aur down-curve ke beech hysteresis area), jo time-dependent structural breakdown indicate karta hai. Matlab zyada zyada hilane se viscosity kam ho jaati hai, jo rakhne pe partially hi wapas aati hai.</li>
                <li><strong>Yield stress (τ₀):</strong> 5–25 Pa. Product ko flow shuru karne ke liye ek minimum stress chahiye, jo cup mein apni shape hold karne mein madad karta hai.</li>
                <li><strong>Texture Profile Analysis (TPA):</strong>
                    <ul class="list-circle list-outside pl-5 mt-1 space-y-1">
                        <li>Firmness: 0.5–2.0 N (TA.XT Plus se 25 mm cylinder probe ke saath 1 mm/s penetration pe measure hota hai)</li>
                        <li>Cohesiveness: 0.4–0.6</li>
                        <li>Adhesiveness: −0.5 to −2.0 N·s (negative values matlab product probe se chipakta hai; zyada adhesiveness = zyada chipchipa product)</li>
                        <li>Spreadability: Accha Shrikhand roti ya puri pe bina todhe aasani se spread hota hai</li>
                    </ul>
                </li>
            </ul>
            <p class="mt-2"><strong>Texture ko affect karne wale factors:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                <li>Zyada fat content → smoother, creamier mouthfeel (fat lubricate karta hai aur gel structure kamzor karta hai)</li>
                <li>Zyada sugar content → firmer body (sugar TS aur viscosity badhata hai) lekin softer gel (sugar casein ke saath paani ke liye compete karta hai, gel strength kam hoti hai)</li>
                <li>Zyada protein (casein) → firmer gel, zyada cohesive</li>
                <li>Heat treatment intensity → zyada whey protein denaturation → firmer, zyada elastic gel</li>
                <li>Homogenization → chhote fat globules → zyada active filler particles → firmer gel</li>
                <li>EPS-producing cultures → zyada viscosity, kam syneresis</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shrikhand ka Nutritional Profile</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Nutrient</th>
                            <th class="p-2 border">Per 100 g (Typical)</th>
                            <th class="p-2 border">Kya Significance Hai</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border">Energy</td>
                            <td class="p-2 border">250–320 kcal</td>
                            <td class="p-2 border">Energy-dense hai; mainly sugar aur fat se aata hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Total Carbohydrates</td>
                            <td class="p-2 border">45–55 g</td>
                            <td class="p-2 border">Mainly sucrose (added) aur residual lactose (~1–2%). Fermentation ke dauraan LAB β-galactosidase se lactose partially hydrolyzed hota hai (~20–30% reduction), jisse lactose-maldigesters ke liye tolerance improve hoti hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Protein</td>
                            <td class="p-2 border">5–8 g</td>
                            <td class="p-2 border">High-quality milk protein (casein + whey). PDCAAS 1.0 ke karib. Fermentation ke dauraan partial proteolysis se free amino acid content badhta hai aur digestibility improve ho sakti hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Fat</td>
                            <td class="p-2 border">5–10 g</td>
                            <td class="p-2 border">Milk fat jismein characteristic short- aur medium-chain fatty acids hain (butyric C₄:₀, caproic C₆:₀). Ismein conjugated linoleic acid (CLA, 4–7 mg/g fat) hai jismein potential anti-carcinogenic properties hain.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Calcium</td>
                            <td class="p-2 border">80–120 mg</td>
                            <td class="p-2 border">Equivalent milk se kam kyunki Ca²⁺ acid whey mein nikal jaata hai (~30–40% loss). Bacha hua Ca primarily colloidal hai (casein se bound). Acidic pH calcium bioavailability improve karta hai kyunki gut mein Ca²⁺ soluble form mein rehta hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Phosphorus</td>
                            <td class="p-2 border">60–100 mg</td>
                            <td class="p-2 border">Organic P (casein-bound phosphoserine) aur inorganic P. Ca:P ratio ≈ 1.2:1</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Riboflavin (B₂)</td>
                            <td class="p-2 border">0.1–0.2 mg</td>
                            <td class="p-2 border">Milk se retained; heat-stable hai. Kuch LAB strains (jaise <em>Lc. lactis</em>) additional riboflavin synthesize karte hain.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Vitamin B₁₂</td>
                            <td class="p-2 border">0.2–0.5 μg</td>
                            <td class="p-2 border">Milk se retained; LAB synthesize nahi karte. Vegetarian consumers ke liye important hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Probiotics</td>
                            <td class="p-2 border">10⁶–10⁸ CFU/g (agar probiotic strains use kiye hain)</td>
                            <td class="p-2 border">Traditional Shrikhand mein live LAB hote hain; probiotic variants mein <em>Lb. acidophilus</em>, <em>Lb. rhamnosus</em> GG, <em>Bifidobacterium</em> spp. milaye jaate hain. Low pH aur high sugar osmotic stress ki wajah se storage ke dauraan viability kam ho sakti hai.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Bioactive Compounds aur Health Benefits</h4>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Bioactive peptides:</strong> LAB ke through proteolysis se casein se bioactive peptides release hote hain, jaise ACE-inhibitory peptides (jaise VPP, IPP β-casein se jo antihypertensive potential rakhte hain), caseinophosphopeptides (CPP; mineral absorption badhate hain), aur immunomodulatory peptides.</li>
                <li><strong>Conjugated Linoleic Acid (CLA):</strong> Buffalo milk fat mein 4–7 mg CLA/g fat hota hai, predominantly cis-9, trans-11 isomer (rumenic acid), jismein anti-carcinogenic, anti-atherogenic aur anti-diabetic properties animal models mein demonstrated hain.</li>
                <li><strong>Sphingolipids:</strong> Milk fat globule membrane (MFGM) lipids jaise sphingomyelin improved gut barrier function aur reduced colon cancer risk se associate kiye gaye hain.</li>
                <li><strong>Lactic acid bacteria metabolites:</strong> LAB ke dwara produce kiye bacteriocins (jaise nisin <em>Lc. lactis</em> se), organic acids, aur hydrogen peroxide natural preservative action mein contribute karte hain aur gut health support kar sakte hain.</li>
                <li><strong>Reduced lactose content:</strong> Fermentation se lactose 20–30% kam hota hai; microbial β-galactosidase ki presence (jo gut mein bhi kaam karti rehti hai) ke saath milke, Shrikhand fresh milk ke comparison mein lactose-maldigesters ke liye better tolerate hota hai.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shrikhand mein Quality Defects: Kaaran aur Prevention</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Defect</th>
                            <th class="p-2 border">Description</th>
                            <th class="p-2 border">Kaaran Kya Hain</th>
                            <th class="p-2 border">Kaise Rokein</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Zyada khattapan (Excessive sourness)</strong></td>
                            <td class="p-2 border">Teez, unpleasant acid taste jo sweetness dominate kare</td>
                            <td class="p-2 border">Over-fermentation (incubation bahut lamba ya bahut zyada temperature pe); insufficient sugar addition; highly acidogenic thermophilic cultures ka use</td>
                            <td class="p-2 border">Strict incubation time/pH endpoint control; adequate sugar addition (40–50%); controlled acid production rate wali culture select karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Gritty/sandy texture (Daanedar)</strong></td>
                            <td class="p-2 border">Taalwe pe daane feel hona</td>
                            <td class="p-2 border">Granulated sugar ka use (particle size > 100 μm); sugar poori tarah dissolve nahi hua; excessive incubation se casein aggregate formation</td>
                            <td class="p-2 border">Powdered/icing sugar use karo; adequate mixing time do; colloid mill se guzaaro; controlled fermentation</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Wheying off (Syneresis — paani chhootna)</strong></td>
                            <td class="p-2 border">Storage ke dauraan surface pe free whey alag hona</td>
                            <td class="p-2 border">Insufficient TS; low protein content; kamzor gel structure; storage ke dauraan temperature fluctuations; excessive mechanical working</td>
                            <td class="p-2 border">TS ≥ 58% ensure karo; adequate heat treatment (90°C/10 min WHC ke liye); stabilizers (CMC, pectin) use karo; cold chain stability maintain karo; EPS-producing cultures use karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Flat/insipid flavor (Pheeka)</strong></td>
                            <td class="p-2 border">Characteristic dairy/fermented flavor ka na hona; sirf cheeni ka taste</td>
                            <td class="p-2 border">Under-fermentation; inactive culture ka use; excessive sugar masking acid notes; diacetyl-producing strains ka na hona</td>
                            <td class="p-2 border">Adequate fermentation (pH 4.4–4.7); culture blend mein <em>Lc. lactis</em> biovar <em>diacetylactis</em> include karo; sugar:acid balance optimize karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Yeasty / alcoholic off-flavor (Khameer jaisi badboo)</strong></td>
                            <td class="p-2 border">Fermented, bread-jaisa ya alcoholic flavor; container phool sakta hai</td>
                            <td class="p-2 border">Osmotolerant yeasts (<em>Zygosaccharomyces rouxii</em>, <em>Candida</em> spp.) se contamination; packaging hygiene adequate nahi; cold chain break</td>
                            <td class="p-2 border">Strict hygienic filling; effective CIP/COP; yeasts ke liye environmental monitoring; cold chain (≤ 5°C) maintain karo; potassium sorbate (200 ppm, agar permitted ho)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Rancid flavor (Saabun jaisa)</strong></td>
                            <td class="p-2 border">Soapy, butyric, unpleasant taste</td>
                            <td class="p-2 border">Lipase activity (native milk LPL poori tarah inactivate nahi hua; raw milk mein psychrotrophic bacteria se microbial lipases jo heat treatment survive kar gayi)</td>
                            <td class="p-2 border">Adequate heat treatment ensure karo (LPL > 72°C pe inactivate hota hai); low psychrotrophic count (< 10⁴ CFU/mL) wala raw milk use karo; heat treatment se pehle homogenization avoid karo (fat ko native lipase ke expose karta hai)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Kadwa taste (Bitter taste)</strong></td>
                            <td class="p-2 border">Lamba tikne wala kadwa aftertaste</td>
                            <td class="p-2 border">Hydrophobic bitter peptides (jaise β-casein f193-209) produce karne wali proteolysis; certain LAB strains se excessive protease activity; <em>Pseudomonas</em> spp. proteases se contamination</td>
                            <td class="p-2 border">Non-bitter culture strains select karo (jinmein bitter peptides degrade karne ke liye peptidase activity ho); high-quality raw milk use karo jismein psychrotrophic count kam ho; adequate heat treatment</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Mold growth (Phaphoond)</strong></td>
                            <td class="p-2 border">Surface pe dikhne wale colored spots (green, black, white)</td>
                            <td class="p-2 border">Filling ke dauraan contamination; seal integrity adequate nahi; airborne spores</td>
                            <td class="p-2 border">Filling area mein HEPA filtration; seal integrity testing; clean-fill ya aseptic filling; natamycin surface treatment (agar permitted ho)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Oxidized / tallowy flavor</strong></td>
                            <td class="p-2 border">Cardboard-jaisa, metallic taste</td>
                            <td class="p-2 border">Cu²⁺/Fe²⁺ contamination, light exposure, ya oxygen ingress se unsaturated fatty acids ka auto-oxidation</td>
                            <td class="p-2 border">Opaque packaging use karo; headspace minimize karo; copper/iron equipment ke contact se bachao; stainless steel (SS 304/316) use karo</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shelf Life Extension Technologies</h3>
            <p>Shrikhand ki typical shelf life ≤ 5°C pe 30–40 din hoti hai. Isko extend karne ke liye various technologies investigate ki gayi hain:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Technology</th>
                            <th class="p-2 border">Mechanism</th>
                            <th class="p-2 border">Kitni Shelf Life Milti Hai</th>
                            <th class="p-2 border">Limitations</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Thermization (65–70°C, 15–30 s)</strong></td>
                            <td class="p-2 border">Finished Shrikhand ka mild heat treatment jisse yeast/mold count 2–3 log kam hota hai</td>
                            <td class="p-2 border">≤ 5°C pe 60–90 din</td>
                            <td class="p-2 border">Textural changes ho sakte hain (patla ho sakta hai); live LAB mar jaate hain (ab "fermented" nahi rehta)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Chemical preservatives</strong></td>
                            <td class="p-2 border">Potassium sorbate (200 ppm) ya sodium benzoate (250 ppm); low pH pe yeasts aur molds ke khilaaf effective</td>
                            <td class="p-2 border">≤ 5°C pe 45–60 din</td>
                            <td class="p-2 border">Consumer perception (clean label trend); regulatory limits; high levels pe flavor affect kar sakte hain</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Biopreservation (nisin)</strong></td>
                            <td class="p-2 border">Nisin (<em>Lc. lactis</em> ka bacteriocin; 100–200 IU/g) Gram-positive bacteria aur kuch LAB inhibit karta hai. Low pH ke saath milke <em>Listeria</em> ke khilaaf effective.</td>
                            <td class="p-2 border">45–60 din</td>
                            <td class="p-2 border">Yeasts aur molds ke khilaaf ineffective (Gram-negative outer membrane nisin ko exclude karti hai); doosre hurdles ke saath combine karna zaroori</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Modified Atmosphere Packaging (MAP)</strong></td>
                            <td class="p-2 border">CO₂/N₂ atmosphere mein packaging (jaise 60% CO₂ / 40% N₂) taaki aerobic molds aur yeasts inhibit hon; CO₂ product mein dissolve hoke pH thoda kam karta hai</td>
                            <td class="p-2 border">60–90 din</td>
                            <td class="p-2 border">Specialized packaging equipment chahiye; CO₂ se halki carbonation/tingling sensation aa sakti hai; CO₂ absorb hone se package collapse ho sakta hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Retort processing (UHT Shrikhand)</strong></td>
                            <td class="p-2 border">Retort pouches mein 121°C/15 min (F₀ ≥ 3) ya equivalent heating</td>
                            <td class="p-2 border">Ambient temperature pe 6–12 mahine</td>
                            <td class="p-2 border">Flavor mein significant change (cooked, caramelized), color (browning), aur texture (runny); consumer acceptance kam hoti hai; high processing cost</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Freezing (-18°C)</strong></td>
                            <td class="p-2 border">Saari microbial growth ruk jaati hai; Shrikhand ko "frozen dessert" form mein freeze kar sakte hain</td>
                            <td class="p-2 border">-18°C pe 6–12 mahine</td>
                            <td class="p-2 border">Thawing pe textural changes (gel network mein ice crystal damage); freeze-thaw instability; stabilizers (CMC, guar gum) chahiye</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>High Pressure Processing (HPP)</strong></td>
                            <td class="p-2 border">Ambient/chilled temperature pe 400–600 MPa 3–5 minute ke liye; cell membranes disrupt aur enzymes denature karke vegetative microorganisms (yeasts, molds, bacteria) ko inactivate karta hai</td>
                            <td class="p-2 border">≤ 5°C pe 60–120 din</td>
                            <td class="p-2 border">Bahut zyada capital cost (HPP units: $0.5–3 million); batch process hai; casein micelle structure alter ho sakta hai (pressure-induced dissociation); 600 MPa pe bacterial spores ke khilaaf effective nahi (> 800 MPa chahiye ya heat ke saath combine karna padega)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Acid Whey ka Valorization</h3>
            <p>Shrikhand production mein <strong>bahut zyada acid whey</strong> banta hai (~4–5 kg whey per kg chakka). Cheese production ke sweet whey (pH 6.0–6.5) ke unlike, Shrikhand/chakka ka acid whey ka pH 4.5–4.7 hota hai, lactic acid content zyada (0.5–0.8%), protein content kam, aur mineral (Ca, P) aur lactose content zyada hota hai. Isko wastewater ki tarah dispose karna environmentally problematic hai (BOD: 30,000–50,000 mg/L; COD: 60,000–80,000 mg/L).</p>
            <p class="mt-2"><strong>Kaise use kar sakte hain:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Whey beverages:</strong> Neutralization (NaHCO₃ se pH 6.0 tak), pasteurization, fruit juice/pulp, sugar aur citric acid milake refreshing whey drinks banao (jaise whey nimbu paani, whey-mango drink). Ye whey proteins, minerals aur water-soluble vitamins retain karte hain.</li>
                <li><strong>Lactose recovery:</strong> Evaporation se concentrate karna phir crystallization se food-grade lactose milta hai. Acid whey lactose ko enzymatically (β-galactosidase se) galacto-oligosaccharides (GOS) mein convert kar sakte hain, jo prebiotic hain.</li>
                <li><strong>Lactic acid recovery:</strong> Membrane separation (nanofiltration) ya ion exchange chromatography se lactic acid recover hota hai industrial use ke liye (biodegradable plastics/PLA, food acidulant).</li>
                <li><strong>Animal feed:</strong> Directly animal feed supplement ki tarah use (grain ke saath mila ke) lactose energy source aur minerals provide karta hai.</li>
                <li><strong>Biogas production:</strong> Acid whey ki anaerobic digestion se methane (biogas) banta hai, typical methane yield 30–40 m³ CH₄/m³ whey hai.</li>
                <li><strong>Whey protein recovery:</strong> Acid whey mein protein sweet whey se kam hota hai lekin ultrafiltration (10 kDa MWCO) se bacha hua whey proteins (α-La, BSA, immunoglobulins) concentrate karke nutritional supplements mein use ho sakta hai.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shrikhand ke Variants aur Innovations</h3>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Amrakhand:</strong> Alphonso aam pulp ke saath blend kiya Shrikhand (≥ 10% fruit). Aam ki natural acidity (citric aur malic acid) lactic acid ko complement karti hai, aur mango carotenoids (β-carotene) natural color dete hain.</li>
                <li><strong>Low-fat / low-sugar Shrikhand:</strong> Skim milk ya partially skimmed milk se banaya jaata hai; sugar partially high-intensity sweeteners (sucralose, steviol glycosides) aur bulking agents (polydextrose, inulin) se replace hoti hai. Fat mimetics (microparticulated whey protein, Simplesse) fat ka mouthfeel simulate karne ke liye use ho sakte hain.</li>
                <li><strong>Probiotic Shrikhand:</strong> Chakka–sugar mixing stage ke dauraan probiotic strains (<em>Lactobacillus acidophilus</em> NCDC-15, <em>Lactobacillus rhamnosus</em> GG, <em>Bifidobacterium lactis</em> Bb-12) milaye jaate hain (fermentation ke dauraan nahi, kyunki harsh conditions viability kam kar sakte hain). Target: shelf life ke end pe ≥ 10⁶ CFU/g. Probiotics ki microencapsulation alginate-chitosan beads ya whey protein isolate matrices mein Shrikhand ki acidic, high-osmolality conditions mein survival improve kar sakti hai.</li>
                <li><strong>Prebiotic Shrikhand:</strong> Inulin (3–5%), fructo-oligosaccharides (FOS, 2–4%), ya galacto-oligosaccharides (GOS) se enrichment. Ye prebiotics fat replacers ka bhi kaam karte hain aur viscosity aur water retention badha ke texture improve karte hain.</li>
                <li><strong>Synbiotic Shrikhand:</strong> Probiotics + prebiotics ka combination. Studies ne dikhaya hai ki inulin supplementation (3%) Shrikhand mein <em>Lb. acidophilus</em> ki viability ko 30-din storage mein 1–2 log cycles improve karti hai, probably fermentable substrate provide karke aur probiotic cells pe osmotic stress kam karke.</li>
                <li><strong>Fortified Shrikhand:</strong> Iron (ferrous fumarate lecithin mein encapsulate karke oxidized flavor rokne ke liye), vitamin D₃ (cholecalciferol), omega-3 fatty acids (microencapsulated fish oil ya algal DHA), aur dietary fiber (oat β-glucan, psyllium) se fortification.</li>
                <li><strong>Herbal Shrikhand:</strong> Bioactive herbal extracts milana — ashwagandha (<em>Withania somnifera</em>), haldi (curcumin), adrak (gingerols), ya moringa (<em>Moringa oleifera</em>) leaf powder — added functional properties ke liye.</li>
                <li><strong>Long-life (UHT) Shrikhand:</strong> 135–140°C pe 2–4 seconds process karke aseptically fill kiya jaata hai. Ambient distribution possible ho jaata hai lekin sensory profile significantly alter hota hai (zyada cooked flavor, dark color).</li>
                <li><strong>Shrikhand powder:</strong> Shrikhand ko spray drying ya freeze drying se shelf-stable powder banate hain (a<sub>w</sub> < 0.3) jo paani ya doodh mein reconstitute ho sakta hai. Spray drying conditions: inlet temperature 180°C, outlet temperature 80°C; maltodextrin (10–15%) ya gum arabic carrier ki tarah use hota hai powder properties improve karne aur high sugar content ki wajah se stickiness rokne ke liye.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shrikhand mein Water Activity (a<sub>w</sub>) aur Hurdle Technology</h3>
            <p>Shrikhand <strong>Leistner ki Hurdle Technology</strong> ka ek behtareen example hai, jismein multiple preservation factors (hurdles) synergistically kaam karte hain microbial safety aur stability ensure karne ke liye:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Hurdle</th>
                            <th class="p-2 border">Shrikhand mein Value</th>
                            <th class="p-2 border">Kaunse Microorganisms Inhibit Hote Hain</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>pH (acidity)</strong></td>
                            <td class="p-2 border">3.8–4.5</td>
                            <td class="p-2 border"><em>Clostridium botulinum</em> (min pH 4.6), <em>Salmonella</em> (min 3.8), <em>S. aureus</em> toxin (min 4.5), zyada-tar Gram-negative bacteria</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Water activity (a<sub>w</sub>)</strong></td>
                            <td class="p-2 border">0.83–0.87</td>
                            <td class="p-2 border">Zyada-tar bacteria (min a<sub>w</sub> > 0.90), <em>S. aureus</em> (growth ke liye min 0.86, toxin ke liye 0.87); yeasts (zyada-tar: min 0.88; lekin <em>Z. rouxii</em>: min 0.62 — isliye yeasts primary risk rehte hain)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Low temperature</strong></td>
                            <td class="p-2 border">≤ 5°C (storage)</td>
                            <td class="p-2 border">Saare microorganisms ki growth rate kam hoti hai; zyada-tar mesophilic pathogens 5°C se neeche grow nahi kar sakte (exception: <em>L. monocytogenes</em>, min ~−0.4°C; <em>Y. enterocolitica</em>, min ~−1.3°C)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Competitive microflora</strong></td>
                            <td class="p-2 border">10⁷–10⁸ CFU/g LAB</td>
                            <td class="p-2 border">LAB lactic acid, bacteriocins (nisin), H₂O₂ produce karte hain aur nutrients ke liye compete karte hain, spoilage aur pathogenic organisms ko suppress karte hain</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Undissociated lactic acid</strong></td>
                            <td class="p-2 border">pH 4.5 pe ~85% (pKa = 3.86)</td>
                            <td class="p-2 border">Undissociated acid cell membranes se penetrate karta hai, cytoplasm ko acidify karta hai, aur cellular metabolism disrupt karta hai — same pH pe equivalent mineral acid se zyada antimicrobial hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>High sugar (osmotic pressure)</strong></td>
                            <td class="p-2 border">40–50% sucrose</td>
                            <td class="p-2 border">Osmotic stress create karta hai; jo cells compatible solutes accumulate nahi kar sakte unka plasmolysis hota hai; a<sub>w</sub> reduction ko supplement karta hai</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2"><strong>Multi-hurdle approach</strong> ensure karta hai ki agar ek hurdle partially breach bhi ho jaaye (jaise thoda temperature abuse), toh baaki hurdles phir bhi pathogen growth prevent karte hain. Synergistic effect ka matlab hai ki har individual hurdle ko utna strict nahi rakhna padta jitna rakhna padta agar wo akela preservation factor hota, jisse product ki sensory quality preserve hoti hai.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shrikhand ki Sensory Evaluation</h3>
            <p>Sensory evaluation trained panels <strong>25-point hedonic scale</strong> (BIS method) ya <strong>9-point hedonic scale</strong> (international) se karte hain. Key sensory attributes ye evaluate hote hain:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Attribute</th>
                            <th class="p-2 border">Max Score (25-pt)</th>
                            <th class="p-2 border">Ideal Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Flavor & Taste</strong></td>
                            <td class="p-2 border">10</td>
                            <td class="p-2 border">Meethe aur halke khatte ka pleasant blend; characteristic dairy/fermented flavor jismein added flavoring (elaichi/kesar) ke notes hon; koi off-flavors nahi (khatta, kadwa, yeasty, rancid, oxidized)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Body & Texture</strong></td>
                            <td class="p-2 border">5</td>
                            <td class="p-2 border">Smooth, homogeneous, creamy, moderately firm; koi grittiness, lumpiness ya excessive stickiness nahi; acchi spreadability</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Color & Appearance</strong></td>
                            <td class="p-2 border">5</td>
                            <td class="p-2 border">Uniform halka cream se white (plain) ya characteristic fruit/kesar color; glossy surface; koi surface whey, discoloration ya mold spots nahi</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Packaging</strong></td>
                            <td class="p-2 border">5</td>
                            <td class="p-2 border">Saaf, undamaged, properly sealed; clear labeling; koi leakage ya bloating nahi</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shrikhand Quality Control ke Key Analytical Methods</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Method</th>
                            <th class="p-2 border">Reference Standard</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border">Total Solids</td>
                            <td class="p-2 border">Gravimetric (102 ± 2°C pe oven drying constant weight tak) ya rapid moisture analyzer</td>
                            <td class="p-2 border">IS 1479 (Part II)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Fat</td>
                            <td class="p-2 border">Gerber method (butyrometer) ya Mojonnier (gravimetric ether extraction)</td>
                            <td class="p-2 border">IS 1224 (Part I/II)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Protein</td>
                            <td class="p-2 border">Kjeldahl method (N × 6.38 milk protein ke liye)</td>
                            <td class="p-2 border">IS 1479 (Part II)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Sucrose</td>
                            <td class="p-2 border">Polarimetric method (HCl se inversion ke pehle aur baad) ya HPLC</td>
                            <td class="p-2 border">IS 1479 (Part II)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Titratable Acidity</td>
                            <td class="p-2 border">0.1N NaOH se titration phenolphthalein indicator ke saath; % lactic acid mein express hota hai</td>
                            <td class="p-2 border">IS 1479 (Part I)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">pH</td>
                            <td class="p-2 border">Potentiometric (glass electrode wala pH meter pH 4.0 aur 7.0 pe calibrate)</td>
                            <td class="p-2 border">IS 1479 (Part I)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Ash</td>
                            <td class="p-2 border">550°C pe 3–5 h muffle furnace mein dry ashing</td>
                            <td class="p-2 border">IS 1479 (Part II)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Total Plate Count</td>
                            <td class="p-2 border">Plate Count Agar (PCA) pe pour plate; 37°C / 48 h</td>
                            <td class="p-2 border">IS 5402</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Coliform Count</td>
                            <td class="p-2 border">Violet Red Bile Agar (VRBA) pe pour plate; 37°C / 24 h</td>
                            <td class="p-2 border">IS 5401</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Yeast & Mold</td>
                            <td class="p-2 border">Tartaric acid se acidified Potato Dextrose Agar (PDA) pe spread plate; 25°C / 5 din</td>
                            <td class="p-2 border">IS 5403</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Water Activity</td>
                            <td class="p-2 border">Dew point hygrometer (jaise AquaLab 4TE; accuracy ± 0.003 a<sub>w</sub>)</td>
                            <td class="p-2 border">ISO 21807</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Texture (Firmness)</td>
                            <td class="p-2 border">Texture Analyzer (TA.XT Plus); back extrusion test ya penetration test</td>
                            <td class="p-2 border">In-house method</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Viscosity</td>
                            <td class="p-2 border">Brookfield viscometer (spindle #6 ya #7, 20 rpm, 10°C) ya controlled stress rheometer (flow curve)</td>
                            <td class="p-2 border">In-house method</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Key Scientific Parameters ka Summary</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Typical Value / Range</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Total Solids</td><td class="p-2 border">58–68%</td></tr>
                        <tr><td class="p-2 border">Moisture</td><td class="p-2 border">32–42%</td></tr>
                        <tr><td class="p-2 border">Fat (as is)</td><td class="p-2 border">5–10%</td></tr>
                        <tr><td class="p-2 border">Protein (as is)</td><td class="p-2 border">5–8%</td></tr>
                        <tr><td class="p-2 border">Sucrose (as is)</td><td class="p-2 border">40–50%</td></tr>
                        <tr><td class="p-2 border">Lactic acid</td><td class="p-2 border">0.8–1.5%</td></tr>
                        <tr><td class="p-2 border">pH</td><td class="p-2 border">3.8–4.5</td></tr>
                        <tr><td class="p-2 border">Water activity (a<sub>w</sub>)</td><td class="p-2 border">0.83–0.87</td></tr>
                        <tr><td class="p-2 border">Energy</td><td class="p-2 border">250–320 kcal/100g</td></tr>
                        <tr><td class="p-2 border">Viscosity (20 rpm, 10°C)</td><td class="p-2 border">10,000–50,000 cP</td></tr>
                        <tr><td class="p-2 border">Shelf life (≤ 5°C)</td><td class="p-2 border">30–40 din</td></tr>
                        <tr><td class="p-2 border">Chakka yield (buffalo milk se)</td><td class="p-2 border">20–22%</td></tr>
                        <tr><td class="p-2 border">Shrikhand yield (100 kg milk se)</td><td class="p-2 border">38–42 kg</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">References aur Further Reading</h3>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1 text-sm">
                <li>Patel, R.S. & Chakraborty, B.K. (1985). Shrikhand — A review. <em>Indian Journal of Dairy Science</em>, 38(4), 287–295.</li>
                <li>Boghra, V.R. & Mathur, O.N. (2000). Physico-chemical status of major milk constituents and minerals at various stages of Shrikhand preparation. <em>Journal of Food Science and Technology</em>, 37(2), 111–115.</li>
                <li>Prajapati, J.B. & Nair, B.M. (2003). The history of fermented foods. In E.R. Farnworth (Ed.), <em>Handbook of Fermented Functional Foods</em>. CRC Press.</li>
                <li>Aneja, R.P., Mathur, B.N., Chandan, R.C. & Banerjee, A.K. (2002). <em>Technology of Indian Milk Products</em>. Dairy India Yearbook.</li>
                <li>De, S. (2004). <em>Outlines of Dairy Technology</em>. Oxford University Press, New Delhi.</li>
                <li>FSSAI. (2011). <em>Food Safety and Standards (Food Products Standards and Food Additives) Regulations</em>. Government of India.</li>
                <li>BIS. (2017). <em>IS 16507:2017 — Shrikhand — Specification</em>. Bureau of Indian Standards.</li>
                <li>Lucey, J.A. (2004). Formation, structural properties and rheology of acid-coagulated milk gels. In P.F. Fox et al. (Eds.), <em>Cheese: Chemistry, Physics and Microbiology</em> (3rd ed., Vol. 1). Elsevier.</li>
                <li>Leistner, L. (2000). Basic aspects of food preservation by hurdle technology. <em>International Journal of Food Microbiology</em>, 55(1–3), 181–186.</li>
                <li>Dave, R.I. & Shah, N.P. (1997). Viability of yoghurt and probiotic bacteria in yoghurts made from commercial starter cultures. <em>International Dairy Journal</em>, 7(1), 31–41.</li>
            </ul>
        `
    }
};

    
