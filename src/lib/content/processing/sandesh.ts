
export const sandeshContent = {
    en: {
        title: "Sandesh Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Sandesh</h3>
            <p>Sandesh (also spelled <em>Sondesh</em>) is a classic Bengali confection, renowned for its delicate, melt-in-the-mouth texture and subtle sweetness. It is prepared from fresh, soft chhana (acid-coagulated milk solids, often termed Indian cottage cheese) which is kneaded with sugar and cooked at a controlled low temperature to achieve its characteristic smooth, fudge-like body and clean dairy flavor. Unlike many other Indian sweets (mithai), sandesh is neither deep-fried nor soaked in sugar syrup, making it a comparatively lighter dessert with a distinct identity rooted in the colloidal and rheological properties of heat-acid coagulated casein.</p>
            <p class="mt-2">Historically documented since the 16th century in Bengali literature, sandesh represents a remarkable example of empirical food science — the transformation of a liquid (milk) into a solid confection through controlled protein denaturation, acid coagulation, mechanical working, and thermal processing. Modern dairy science has since elucidated the physicochemical principles underlying each of these steps.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Classification & Varieties</h3>
            <p>Sandesh can be broadly classified based on the degree of thermal processing applied to the chhana–sugar mixture:</p>
            <div class="overflow-x-auto mt-4 mb-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Type</th>
                            <th class="p-2 border">Heat Treatment</th>
                            <th class="p-2 border">Characteristics</th>
                            <th class="p-2 border">Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Kachagolla (Raw/Uncooked)</strong></td>
                            <td class="p-2 border">Minimal or no cooking</td>
                            <td class="p-2 border">Extremely soft, moist, crumbly; very short shelf life (6–12 h at ambient)</td>
                            <td class="p-2 border">Kachagolla of Natore</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Nolen Gurer Sandesh</strong></td>
                            <td class="p-2 border">Moderate cooking with date palm jaggery</td>
                            <td class="p-2 border">Characteristic smoky-caramel flavor from nolen gur; seasonal (winter)</td>
                            <td class="p-2 border">Nolen Gurer Sandesh</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Makha Sandesh (Kneaded)</strong></td>
                            <td class="p-2 border">Light cooking</td>
                            <td class="p-2 border">Smooth, slightly firm, retains moisture; moderate shelf life</td>
                            <td class="p-2 border">Jol Bhora, Abar Khabo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Naram Pak (Soft cook)</strong></td>
                            <td class="p-2 border">Moderate cooking (75–85°C)</td>
                            <td class="p-2 border">Firm yet tender body; the most common commercial variety</td>
                            <td class="p-2 border">Moulded sandesh, Chandrapuli</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Kara Pak (Hard cook)</strong></td>
                            <td class="p-2 border">Extended cooking at higher temperature</td>
                            <td class="p-2 border">Hard, dry, chewy; longest shelf life; may show browning</td>
                            <td class="p-2 border">Kara Pak Sandesh, Magaj</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Regulatory Standards for Sandesh</h3>
            <p>Sandesh falls under the category of <strong>'Chhana-based sweets'</strong> as defined in the <strong>Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011</strong> under FSSAI. BIS standard <strong>IS 12257:1987</strong> (Specification for Sandesh) also provides compositional and quality guidelines.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">FSSAI Requirement</th>
                            <th class="p-2 border">Scientific Rationale</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Moisture (max, %)</strong></td>
                            <td class="p-2 border">50.0</td>
                            <td class="p-2 border">Controls water activity (a<sub>w</sub>); higher moisture increases microbial risk and reduces shelf life</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat (on dry basis, min, %)</strong></td>
                            <td class="p-2 border">20.0</td>
                            <td class="p-2 border">Ensures use of whole/standardized milk; fat contributes to smooth mouthfeel and flavor perception</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sucrose (on dry basis, max, %)</strong></td>
                            <td class="p-2 border">40.0</td>
                            <td class="p-2 border">Prevents excessive sweetness; limits sugar substitution for milk solids; impacts a<sub>w</sub> depression</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Total Plate Count (max, cfu/g)</strong></td>
                            <td class="p-2 border">50,000</td>
                            <td class="p-2 border">Indicator of general hygienic quality during production and handling</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Coliform Count (max, cfu/g)</strong></td>
                            <td class="p-2 border">100</td>
                            <td class="p-2 border">Indicator of post-processing contamination and sanitation adequacy</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Yeast & Mould Count (max, cfu/g)</strong></td>
                            <td class="p-2 border">100</td>
                            <td class="p-2 border">Important due to moderate a<sub>w</sub> (0.85–0.95) favoring fungal growth</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>E. coli</em></strong></td>
                            <td class="p-2 border">Absent in 1 g</td>
                            <td class="p-2 border">Indicator of fecal contamination; pathogen risk</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>Staphylococcus aureus</em></strong></td>
                            <td class="p-2 border">Absent in 1 g</td>
                            <td class="p-2 border">Heat-stable enterotoxin producer; relevant due to manual handling during shaping</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>Salmonella</em></strong></td>
                            <td class="p-2 border">Absent in 25 g</td>
                            <td class="p-2 border">Primary pathogen of concern in dairy products</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Typical Proximate Composition of Sandesh</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Component</th>
                            <th class="p-2 border">Approximate Range (%)</th>
                            <th class="p-2 border">Functional Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Moisture</td><td class="p-2 border">18–35</td><td class="p-2 border">Determines texture (soft vs. hard); drives a<sub>w</sub></td></tr>
                        <tr><td class="p-2 border">Fat</td><td class="p-2 border">10–18</td><td class="p-2 border">Lubricity, mouthfeel, flavor carrier (short-chain fatty acids: butyric, caproic)</td></tr>
                        <tr><td class="p-2 border">Protein</td><td class="p-2 border">12–20</td><td class="p-2 border">Structural matrix (casein network); responsible for body and texture</td></tr>
                        <tr><td class="p-2 border">Lactose</td><td class="p-2 border">1–3</td><td class="p-2 border">Residual; contributes to Maillard browning during cooking</td></tr>
                        <tr><td class="p-2 border">Sucrose (added)</td><td class="p-2 border">20–35</td><td class="p-2 border">Sweetness, humectant, a<sub>w</sub> depressant, texture modifier</td></tr>
                        <tr><td class="p-2 border">Minerals (Ash)</td><td class="p-2 border">1.0–2.5</td><td class="p-2 border">Calcium, phosphorus from milk; affect protein hydration and texture</td></tr>
                        <tr><td class="p-2 border">Energy (kcal/100 g)</td><td class="p-2 border">280–380</td><td class="p-2 border">—</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Science of Chhana — The Foundation of Sandesh</h2>
            <p>Chhana is the foundational raw material, and its physicochemical quality directly dictates the quality of sandesh. Understanding chhana formation requires knowledge of milk protein chemistry.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Milk Protein System</h4>
            <p>Bovine milk contains approximately 3.3–3.5% protein, broadly classified into:</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Caseins (~80%):</strong> αs1-casein, αs2-casein, β-casein, and κ-casein. These exist as <strong>casein micelles</strong> — colloidal aggregates (50–600 nm diameter) stabilized by:
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li><strong>Colloidal calcium phosphate (CCP)</strong> nanoclusters acting as intra-micellar cross-links</li>
                        <li><strong>κ-casein</strong> "hairy layer" on the micelle surface providing steric and electrostatic stabilization (zeta potential ≈ −20 mV at native pH 6.7)</li>
                        <li>Hydrophobic interactions among the casein monomers</li>
                    </ul>
                </li>
                <li><strong>Whey Proteins (~20%):</strong> β-lactoglobulin (β-Lg), α-lactalbumin (α-La), BSA, immunoglobulins. These are globular, soluble proteins that denature upon heating above ~70°C, exposing buried sulfhydryl (–SH) groups.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Mechanism of Acid-Heat Coagulation (Chhana Formation)</h4>
            <p>Chhana formation involves a <strong>dual destabilization mechanism</strong>:</p>
            <ol class="list-decimal list-outside pl-5 space-y-3">
                <li><strong>Thermal denaturation of whey proteins (pre-heating step):</strong>
                    <p>When milk is heated to 85–90°C for 5–10 minutes:</p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li>β-Lg unfolds (T<sub>d</sub> ≈ 78°C), exposing reactive –SH groups (Cys<sup>121</sup>)</li>
                        <li>Denatured β-Lg forms <strong>disulfide-linked complexes</strong> with κ-casein on the micelle surface via –SH/S–S interchange reactions</li>
                        <li>This β-Lg–κ-casein interaction alters the micelle surface, making it more susceptible to acid coagulation and increasing the protein recovery in the coagulum</li>
                        <li>α-La (T<sub>d</sub> ≈ 62°C) also denatures and can aggregate with β-Lg</li>
                        <li>The net effect: whey proteins are <strong>co-precipitated</strong> with casein, increasing chhana yield by 5–8%</li>
                    </ul>
                </li>
                <li><strong>Acid coagulation (addition of coagulant at 70–80°C):</strong>
                    <p>An acidulant (citric acid, lactic acid, or sour whey) is added to reduce pH from ~6.7 to ~5.2–5.4:</p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li>As pH approaches the <strong>isoelectric point (pI) of casein (≈ pH 4.6)</strong>, the net negative charge on casein micelles is progressively neutralized</li>
                        <li>Colloidal calcium phosphate (CCP) dissolves as pH decreases (Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> + 6H<sup>+</sup> → 3Ca<sup>2+</sup> + 2H<sub>3</sub>PO<sub>4</sub>), weakening intra-micellar bonds</li>
                        <li>The κ-casein "hairy layer" loses its charge-based repulsion; steric stabilization is compromised</li>
                        <li>Combined thermal-acid destabilization causes <strong>rapid, irreversible coagulation</strong> at pH values well above the pI (5.2–5.4 vs. 4.6), unlike pure acid-set systems (e.g., yogurt) that coagulate near pI</li>
                        <li>The resulting coagulum entraps fat globules (both native and partially coalesced due to heat) within the protein network</li>
                    </ul>
                </li>
            </ol>
            <p class="mt-3"><strong>Critical pH for Sandesh-quality Chhana:</strong> pH 5.2–5.4 is optimal. Below pH 5.0, excessive calcium dissolution produces a hard, crumbly, acidic chhana. Above pH 5.6, incomplete coagulation leads to a soft, pasty product with high whey losses. The target pH balances protein aggregation, mineral retention, and textural attributes.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Factors Affecting Chhana Quality for Sandesh</h4>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Factor</th>
                            <th class="p-2 border">Optimal Condition</th>
                            <th class="p-2 border">Scientific Basis</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border">Species of milk</td>
                            <td class="p-2 border">Cow milk preferred</td>
                            <td class="p-2 border">Cow milk chhana is softer due to smaller fat globules (avg. 3–4 µm), lower casein content, and a higher proportion of β-casein. Buffalo milk produces harder chhana due to larger fat globules (avg. 5–8 µm), higher casein, and greater calcium content.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Fat content of milk</td>
                            <td class="p-2 border">4.0–5.0% fat (standardized)</td>
                            <td class="p-2 border">Fat globules act as "fillers" in the casein matrix, interrupting protein–protein bonds and imparting softness and lubricity. Too low fat → hard, dry chhana. Too high fat → greasy, weak structure.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">SNF content</td>
                            <td class="p-2 border">8.5–9.0%</td>
                            <td class="p-2 border">Higher SNF increases protein recovery and yield; however, excessively high lactose can lead to sandiness.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Heating temperature</td>
                            <td class="p-2 border">85–90°C / no hold or 5 min</td>
                            <td class="p-2 border">Ensures ≥90% whey protein denaturation for co-precipitation with casein. Over-heating (>95°C, prolonged) can cause excessive denaturation and a rubbery texture.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Coagulation temperature</td>
                            <td class="p-2 border">70–80°C</td>
                            <td class="p-2 border">At this temperature range, denatured whey proteins are efficiently incorporated. Below 60°C, coagulation is slow and whey protein recovery decreases. Above 90°C, fat leakage increases and texture becomes hard.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Type of coagulant</td>
                            <td class="p-2 border">Citric acid (1–2% solution) preferred</td>
                            <td class="p-2 border">Citric acid (pKa₁ = 3.13, pKa₂ = 4.76, pKa₃ = 6.40) provides better buffering and more gradual pH decline than lactic or acetic acid, resulting in a smoother, more cohesive chhana. Lemon juice (containing citric acid) is traditional.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Coagulation pH</td>
                            <td class="p-2 border">5.2–5.4</td>
                            <td class="p-2 border">Optimal balance between protein aggregation and mineral retention. At this pH, ~60–70% of colloidal calcium is still associated with casein, giving a cohesive (not crumbly) body.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Rate of acid addition</td>
                            <td class="p-2 border">Slow, with gentle stirring</td>
                            <td class="p-2 border">Rapid acid addition creates localized low-pH zones, leading to heterogeneous coagulation, fine curd particles, and higher fines losses in whey.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Draining time & pressing</td>
                            <td class="p-2 border">Hang in muslin 15–30 min; light pressing (1–2 kg weight)</td>
                            <td class="p-2 border">Target moisture in chhana: 53–58%. Over-pressing removes too much moisture and whey-soluble components (lactose, minerals, whey proteins), yielding dry, hard chhana.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Sandesh with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Sandesh Production</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception & Quality Testing <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Filtration / Clarification <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Standardization (Fat: 4.0–5.0%, SNF: 8.5%) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Heating to 85–90°C</strong> (5 min hold) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-xs text-gray-500 italic">Pathogen elimination: ≥6-log reduction of <em>L. monocytogenes</em>, <em>Salmonella</em>, <em>E. coli</em> O157:H7</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling to Coagulation Temperature (70–80°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Acid Coagulation</strong> (pH 5.2–5.4, T: 70–80°C) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-xs text-gray-500 italic">Controls texture, yield, and complete protein recovery</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Settling (5 min), Draining & Pressing in Muslin (15–30 min)</div>
                <div class="text-xs text-gray-500 italic">Target chhana moisture: 53–58%</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Kneading of Chhana</strong> (manual or mechanical, 8–12 min) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-xs text-gray-500 italic">Protein matrix disruption → smooth paste; hygiene critical (hand contact)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Sugar Mixing</strong> (25–35% of chhana weight) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-xs text-gray-500 italic">Powdered sugar; uniform dissolution critical for texture</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Low-Temperature Cooking</strong> (75–85°C, 10–20 min, continuous stirring) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
                <div class="text-xs text-gray-500 italic">Moisture reduction, sugar integration, flavor development, pathogen reduction</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cooling (to ~40–50°C) and Flavoring (optional: cardamom, saffron, rose water)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Shaping / Moulding (decorative moulds)</div>
                <div class="text-xs text-gray-500 italic">Must be done while warm (>35°C); protein matrix is pliable above glass transition</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Garnishing (Optional: pistachios, saffron strands, silver leaf)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded"><strong>Packaging & Refrigerated Storage</strong> (5 ± 2°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-xs text-gray-500 italic">Shelf life: 5–7 days (refrigerated); up to 30 days (MAP/vacuum + refrigeration)</div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps with Scientific Basis</h3>
            <ol class="list-decimal list-outside pl-5 space-y-6">
                <li><strong>Milk Reception, Testing & Standardization (PRP):</strong>
                    <p>Incoming milk is tested for quality parameters: fat (Gerber method), SNF (lactometer), acidity (titratable acidity ≤ 0.14% lactic acid), COB test (clot-on-boiling, must be negative), MBRT (methylene blue reduction time ≥ 2 h for Grade I), and adulteration tests (water, starch, urea, neutralizers). Milk is filtered or clarified to remove physical impurities.</p>
                    <p class="mt-2">Standardization to <strong>Fat: 4.0–5.0%, SNF: 8.5%</strong> is performed. The fat-to-protein ratio is critical — a ratio of approximately 1.2–1.5:1 yields chhana with optimal plasticity for sandesh. Higher fat levels increase the proportion of "active filler" particles in the protein gel, which soften the texture. Cow milk is strongly preferred because:</p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li>Smaller fat globule size distribution (mode ≈ 3.5 µm vs. 5–8 µm in buffalo milk) provides better emulsion stability and smoother texture</li>
                        <li>Lower calcium and casein content produces a more pliable curd</li>
                        <li>Higher proportion of β-casein (which is more hydrophobic and less calcium-sensitive) favors a softer network</li>
                        <li>White color (lack of carotene in buffalo milk fat gives a whiter product from buffalo, but cow milk's yellow tint is culturally preferred)</li>
                    </ul>
                </li>

                <li><strong>Heating of Milk to 85–90°C (CCP-1 — Pathogen Elimination):</strong>
                    <p>This step serves a <strong>dual purpose</strong>:</p>
                    <p><strong>(a) Microbiological Safety:</strong> This is the primary kill step. Heating to 85°C for 5 minutes delivers a thermal process equivalent to:</p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li>> 6 log<sub>10</sub> reduction of <em>Listeria monocytogenes</em> (D<sub>72°C</sub> = 1–4 s; target is well exceeded)</li>
                        <li>> 8 log<sub>10</sub> reduction of <em>Salmonella</em> spp. (D<sub>72°C</sub> = 0.5–1 s)</li>
                        <li>> 6 log<sub>10</sub> reduction of <em>E. coli</em> O157:H7 (D<sub>72°C</sub> = 1–2 s)</li>
                        <li>Effective elimination of <em>Campylobacter</em>, <em>Yersinia</em>, and most vegetative pathogens</li>
                        <li>Note: <em>Bacillus cereus</em> and <em>Clostridium perfringens</em> spores survive but are controlled by subsequent refrigeration</li>
                    </ul>
                    <p class="mt-2"><strong>(b) Whey Protein Denaturation for Enhanced Yield:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li>At 85°C/5 min, approximately <strong>85–92% of β-Lg</strong> and <strong>>95% of α-La</strong> are denatured</li>
                        <li>Denatured β-Lg forms <strong>β-Lg–κ-casein complexes</strong> via disulfide bonds (Cys<sup>121</sup> of β-Lg with Cys<sup>11</sup>–Cys<sup>88</sup> of κ-casein), coating the micelle surface</li>
                        <li>These complexes become part of the acid coagulum, increasing chhana yield by 5–8% compared to HTST (72°C/15 s) pasteurization</li>
                        <li>The whey protein–coated micelles also aggregate at a higher pH (5.3–5.4 vs. 4.6 for pure casein), which is the basis of heat-acid coagulation occurring well above the pI</li>
                    </ul>
                    <p class="mt-2"><strong>Critical Limits:</strong> T ≥ 85°C, hold time ≥ 5 min. Monitored by calibrated thermometer/RTD with continuous recording. Corrective action: re-heat if temperature drops below 85°C.</p>
                </li>

                <li><strong>Cooling to Coagulation Temperature (70–80°C) (oPRP):</strong>
                    <p>Milk is cooled to 70–80°C before acid addition. This temperature range is optimal because:</p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li>Sufficient thermal energy ensures rapid, complete coagulation of the now-denatured whey protein–casein complexes</li>
                        <li>Fat is still liquid at this temperature, allowing fat globules to be efficiently entrapped in the forming protein network rather than being expelled</li>
                        <li>Below 60°C, coagulation becomes sluggish, whey protein incorporation decreases, and the resulting chhana is soft and mushy with poor moulding properties</li>
                        <li>Above 85°C, vigorous boiling disrupts the curd, causes fat leakage ("oiling off"), and the chhana becomes hard and grainy</li>
                    </ul>
                </li>

                <li><strong>Acid Coagulation (CCP-2 — Texture and Quality Control):</strong>
                    <p>A 1–2% citric acid solution (or fresh lemon juice) is added slowly with gentle stirring until pH reaches <strong>5.2–5.4</strong> and a clear, greenish-yellow whey separates cleanly from the curd.</p>
                    <p class="mt-2"><strong>Colloidal Chemistry of Coagulation:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li><strong>Charge neutralization:</strong> As pH decreases, the zeta potential of casein micelles approaches zero. At native pH 6.7, zeta potential ≈ −20 mV; at pH 5.4, it falls to approximately −5 to −8 mV, greatly reducing electrostatic repulsion</li>
                        <li><strong>CCP dissolution:</strong> Approximately 40–60% of colloidal calcium phosphate dissolves at pH 5.3, partially disrupting the micellar framework. However, ~40–60% remains, providing residual cohesion that gives chhana its characteristic plastic (mouldable) texture — unlike pure acid casein (pH 4.6) where nearly all CCP is dissolved, yielding a crumbly product</li>
                        <li><strong>Hydrophobic aggregation:</strong> With charge repulsion minimized, hydrophobic interactions between exposed casein surfaces drive protein–protein aggregation into a continuous gel network</li>
                        <li><strong>Fat entrapment:</strong> Milk fat globules (now partially coalesced due to heat treatment) become physically trapped in the casein network. The fat acts as an "active filler" — globules that interact with the matrix and reduce its rigidity, contributing to the smooth, short texture of chhana</li>
                    </ul>
                    <p class="mt-2"><strong>Critical Limits:</strong> pH = 5.2–5.4; Coagulation temperature = 70–80°C. Monitored by calibrated pH meter. Corrective action: if pH < 5.0, the batch should be evaluated for excessive hardness; if pH > 5.6, additional coagulant is added cautiously.</p>
                    <p class="mt-2"><strong>Whey Composition:</strong> The separated whey has a greenish-yellow color (from riboflavin), pH ~5.2–5.4, and contains residual lactose (~4.5%), minerals, water-soluble vitamins, and traces of undenatured whey proteins. This whey can be utilized for beverage preparation or as a coagulant for subsequent batches (sour whey method).</p>
                </li>

                <li><strong>Settling, Draining & Pressing:</strong>
                    <p>The coagulated mass is allowed to settle for 5 minutes, then carefully transferred to a muslin cloth. It is hung for 15–30 minutes or pressed gently with 1–2 kg weight to drain excess whey.</p>
                    <p class="mt-2"><strong>Target moisture in chhana: 53–58%.</strong> This is critical for sandesh quality. Moisture content is influenced by:</p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li>Draining/pressing time and applied force</li>
                        <li>Coagulation pH (lower pH → more moisture expulsion due to greater protein contraction)</li>
                        <li>Fat content (higher fat → moisture is physically retained)</li>
                        <li>Temperature of whey drainage (higher → faster drainage)</li>
                    </ul>
                    <p class="mt-2">The fresh chhana should immediately be immersed in chilled water (4–8°C) for 5–10 minutes to halt further acidification and firm up the structure through rapid cooling of the fat phase (fat crystallization at < 15°C increases structural rigidity).</p>
                </li>

                <li><strong>Kneading of Chhana (oPRP — Texture Development):</strong>
                    <p>This is perhaps the most scientifically interesting and skill-dependent step. Fresh chhana is kneaded manually (on a stone slab, traditionally) or mechanically using a planetary mixer for <strong>8–12 minutes</strong> until it transforms from a granular, crumbly mass into a <strong>smooth, homogeneous, glossy paste</strong>.</p>
                    <p class="mt-2"><strong>Rheological and Structural Transformations During Kneading:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Disruption of protein aggregates:</strong> The coarse casein aggregate network formed during coagulation is progressively broken down by the shear forces of kneading. Large protein clusters (50–500 µm) are fragmented into much smaller particles (<10 µm), creating a fine, smooth dispersion.</li>
                        <li><strong>Fat redistribution:</strong> Entrapped fat globules are released from protein aggregates and redistributed throughout the matrix. Some fat globules coalesce, and free fat is generated, which coats the protein particles and acts as a lubricant. This creates the characteristic "short" (non-elastic, smooth) texture.</li>
                        <li><strong>Moisture redistribution:</strong> Bound and entrapped water is redistributed uniformly. Localized pockets of whey are dispersed into a continuous aqueous phase surrounding the protein-fat particles.</li>
                        <li><strong>Protein hydration:</strong> Mechanical working increases the surface area of protein particles exposed to the aqueous phase, improving hydration. Hydrated casein particles swell slightly and become more cohesive.</li>
                        <li><strong>Transition from particulate gel to paste:</strong> The system transitions from a particulate protein gel (where discrete protein aggregates are linked by weak bonds) to a concentrated <strong>protein paste/suspension</strong> — a continuous fat-moisture phase with finely dispersed protein particles. Rheologically, the material changes from a brittle solid to a <strong>viscoelastic paste</strong> with significant yield stress.</li>
                    </ul>
                    <p class="mt-2"><strong>Endpoint indicator:</strong> The kneaded chhana should feel smooth (no graininess when pressed between fingers), slightly glossy (surface fat), and should not stick to the palm. Under-kneading results in a grainy sandesh; over-kneading may cause excessive fat separation (oily texture).</p>
                    <p class="mt-2"><strong>oPRP considerations:</strong> This step involves extensive hand contact (in traditional production), creating a high-risk point for <em>Staphylococcus aureus</em> contamination from skin, hands, and nasal carriers. Controls include: mandatory hand washing and sanitization, use of food-grade gloves, health screening of workers, and maintaining chhana temperature < 40°C to limit microbial proliferation. In mechanized operations, use of sanitized stainless-steel planetary mixers eliminates direct hand contact.</p>
                </li>

                <li><strong>Sugar Mixing (oPRP):</strong>
                    <p>Powdered sugar (25–35% by weight of chhana, depending on desired sweetness and variety) is added to the kneaded chhana and mixed uniformly.</p>
                    <p class="mt-2"><strong>Role of Sugar:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Sweetness:</strong> Primary taste attribute; sucrose concentration in the final product governs sweetness intensity (detection threshold ~1%; recognition threshold ~2%)</li>
                        <li><strong>Water activity (a<sub>w</sub>) depression:</strong> Dissolved sucrose lowers a<sub>w</sub> by increasing the osmotic pressure of the aqueous phase. Each 10% sucrose addition reduces a<sub>w</sub> by approximately 0.03–0.04 units. In the final product, a<sub>w</sub> typically ranges from 0.85–0.92, which is below the growth minimum for many pathogens but still permits yeast and mold growth.</li>
                        <li><strong>Texture modification:</strong> Sugar competes with protein for water, reducing protein hydration and contributing to a firmer texture. During cooling, dissolved sucrose may partially recrystallize (especially in kara pak sandesh), contributing to the "short" bite.</li>
                        <li><strong>Humectant effect:</strong> In moderate concentrations, sugar retains moisture and delays surface drying.</li>
                        <li><strong>Maillard reaction substrate:</strong> Sucrose is not directly reactive in Maillard reactions (it is a non-reducing sugar). However, at the cooking temperatures and low pH of the sandesh system, partial inversion of sucrose to glucose + fructose occurs (sucrose hydrolysis), and these reducing sugars can participate in Maillard browning with free amino groups (ε-NH<sub>2</sub> of lysine residues on casein).</li>
                    </ul>
                    <p class="mt-2">Powdered (icing) sugar is preferred over granulated sugar because the fine particle size (<200 µm) ensures rapid dissolution in the limited moisture of the chhana, preventing a gritty texture (undissolved sugar crystals would be organoleptically detectable at >15 µm).</p>
                </li>

                <li><strong>Low-Temperature Cooking (CCP-3 — Product Safety & Texture):</strong>
                    <p>The chhana–sugar mixture is transferred to a heavy-bottomed pan (traditionally a <em>kadhai</em> or non-stick pan) and cooked at <strong>75–85°C for 10–20 minutes</strong> with continuous stirring and scraping to prevent localized overheating and sticking.</p>
                    <p class="mt-2"><strong>Physicochemical Transformations During Cooking:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Moisture evaporation:</strong> The primary physical change. Moisture content decreases from ~50–55% (chhana + sugar mix) to ~20–35% in the finished sandesh (depending on naram vs. kara pak). This concentrates the solids, increases a<sub>w</sub> depression (typical final a<sub>w</sub> = 0.85–0.90), and firms the texture. Evaporation rate depends on pan surface area, heating rate, and stirring efficiency.</li>
                        <li><strong>Sugar dissolution and distribution:</strong> Any remaining undissolved sugar crystals dissolve completely in the heated aqueous phase. The resulting concentrated sugar solution (60–70% sucrose in the aqueous phase) acts as a continuous binding medium for the protein-fat particles.</li>
                        <li><strong>Protein denaturation and aggregation:</strong> Further thermal denaturation of any residual native whey proteins occurs. Existing protein aggregates may undergo further cross-linking via hydrophobic interactions and disulfide bond formation at the elevated temperature, contributing to the setting of the product upon cooling.</li>
                        <li><strong>Fat melting and redistribution:</strong> At cooking temperatures, all milk fat is in the liquid state (complete melting above ~40°C for cow milk fat). This allows further redistribution and coating of protein particles, enhancing smoothness.</li>
                        <li><strong>Maillard reaction:</strong> At 75–85°C, slow Maillard reactions occur between reducing sugars (from sucrose inversion) and amino groups on casein, producing:
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>Amadori rearrangement products → Strecker aldehydes → melanoidins</li>
                                <li>Volatile flavor compounds (e.g., furfural, maltol, diacetyl) that contribute to the characteristic "cooked milk" aroma</li>
                                <li>Light brown coloration (in extended cooking/kara pak); for naram pak, cooking time is limited to minimize browning</li>
                            </ul>
                        </li>
                        <li><strong>Sucrose inversion:</strong> At pH ~5.2–5.4 and 80°C, sucrose undergoes acid-catalyzed hydrolysis: Sucrose → Glucose + Fructose. The rate of inversion is significant (t<sub>½</sub> ≈ several hours at 80°C, pH 5.0), resulting in ~5–15% inversion depending on cooking time. Inversion sugars increase sweetness perception (fructose is 1.7× sweeter than sucrose), reduce a<sub>w</sub> more effectively (more osmoles per gram), and contribute to Maillard browning.</li>
                        <li><strong>Microbial safety:</strong> Cooking at 75–85°C provides an additional thermal kill step. Any post-coagulation contamination (from kneading, sugar addition, utensils) is addressed. Vegetative pathogens (<em>S. aureus</em>, <em>E. coli</em>, <em>Salmonella</em>) have D-values of <1 s at these temperatures, so effective elimination occurs within seconds of reaching temperature. However, pre-formed <em>S. aureus</em> enterotoxins (SEA, SEB, etc.) are heat-stable and would survive — hence prevention of <em>S. aureus</em> growth and toxin production during the kneading/mixing stage is essential (oPRP controls).</li>
                    </ul>
                    <p class="mt-2"><strong>Endpoint Determination:</strong> The mixture is cooked until:</p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li>The mass cleanly leaves the sides and bottom of the pan</li>
                        <li>A ball can be formed that does not stick to the palm</li>
                        <li>The texture is pliable but firm, not runny or overly dry</li>
                        <li>For naram pak: slight moisture sheen on surface; for kara pak: completely dry and slightly hard</li>
                    </ul>
                    <p class="mt-2"><strong>Critical Limits:</strong> Core temperature ≥ 75°C for ≥ 10 min; moisture content at endpoint ≤ 35% (naram pak) or ≤ 20% (kara pak). Monitored by calibrated thermometer and endpoint observation. Corrective action: if under-cooked, continue heating; if over-cooked, the batch may need to be diverted (hard texture, excessive browning).</p>
                </li>

                <li><strong>Cooling and Flavoring:</strong>
                    <p>The cooked mass is transferred to a clean, sanitized surface (stainless steel or marble slab) and cooled to ~40–50°C. During this cooling phase:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Fat crystallization:</strong> As temperature drops below ~40°C, milk fat begins to crystallize (cow milk fat has a wide melting range: 10–40°C). The crystallizing fat within the protein matrix provides structural rigidity to the final product. The extent of crystallization depends on the cooling rate — slow cooling allows formation of larger, more stable β′ and β polymorphic crystals, giving a firmer product.</li>
                        <li><strong>Sugar supersaturation and microcrystallization:</strong> As temperature decreases, the sugar solution phase becomes supersaturated. Fine sucrose microcrystals may nucleate, contributing to the characteristic slightly grainy (in a pleasant way) or "short" texture of some sandesh varieties. If crystals grow too large (>15 µm), an unpleasant sandy texture results. Rapid cooling and the presence of milk proteins (which act as crystallization inhibitors) help maintain fine crystal size.</li>
                        <li><strong>Protein matrix setting:</strong> Hydrophobic interactions strengthen at lower temperatures (entropy-driven effect), and the protein network achieves its final set structure.</li>
                    </ul>
                    <p class="mt-2">Flavoring agents are added during this cooling phase to minimize volatile loss:</p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li><strong>Cardamom (elaichi):</strong> Contains 1,8-cineole, α-terpinyl acetate, limonene; added as ground powder at 0.3–0.5%</li>
                        <li><strong>Saffron (kesar):</strong> Contains crocin (color), picrocrocin (bitter taste), safranal (aroma); steeped in warm milk</li>
                        <li><strong>Rose water (gulab jal):</strong> Contains citronellol, geraniol, nerol; added at 1–2%</li>
                        <li><strong>Mango pulp, pista paste, chocolate</strong> — for flavored varieties</li>
                    </ul>
                </li>

                <li><strong>Shaping and Moulding:</strong>
                    <p>While still warm and pliable (above the glass transition temperature of the sugar-protein matrix, approximately 30–40°C depending on moisture), the mass is portioned and pressed into decorative moulds. Traditional moulds are carved from wood (<em>sãch</em>); food-grade silicone or polycarbonate moulds are used in modern production.</p>
                    <p class="mt-2">The rheological behavior during moulding can be described as a <strong>Herschel-Bulkley fluid</strong> (yield stress + shear-thinning behavior): the material requires an initial force to initiate flow (yield stress), after which it flows and fills the mould details. Upon release, it retains its shape due to the yield stress and rapid structural recovery (thixotropy).</p>
                </li>

                <li><strong>Garnishing (Optional):</strong>
                    <p>Garnishes include sliced pistachios, almonds, saffron strands, dried rose petals, or edible silver leaf (<em>vark</em>). These ingredients must comply with FSSAI standards for food-grade quality and must be stored and handled hygienically to avoid introducing contaminants at this late, post-thermal-treatment stage.</p>
                </li>

                <li><strong>Packaging and Storage (oPRP):</strong>
                    <p>Sandesh is a <strong>perishable product</strong> with a high water activity (a<sub>w</sub> = 0.85–0.92) and near-neutral to mildly acidic pH (5.5–6.0 in the finished product), placing it in the zone susceptible to:</p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li>Spoilage by <em>Pseudomonas</em> spp., lactic acid bacteria, yeasts (<em>Candida</em>, <em>Rhodotorula</em>), and molds (<em>Penicillium</em>, <em>Aspergillus</em>, <em>Mucor</em>)</li>
                        <li>Potential growth of <em>Staphylococcus aureus</em> (min a<sub>w</sub> = 0.83), <em>Bacillus cereus</em>, <em>Listeria monocytogenes</em> (if recontaminated post-cooking)</li>
                    </ul>
                    <p class="mt-2"><strong>Packaging strategies:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Traditional:</strong> Cardboard boxes with parchment paper lining; shelf life 2–3 days at ambient (25–30°C), 5–7 days refrigerated (5 ± 2°C)</li>
                        <li><strong>Modified Atmosphere Packaging (MAP):</strong> N<sub>2</sub> or CO<sub>2</sub> flushing (70% N<sub>2</sub> + 30% CO<sub>2</sub>) in PET/PE trays extends shelf life to 15–30 days at 5°C by inhibiting aerobic spoilage organisms and molds</li>
                        <li><strong>Vacuum packaging:</strong> Reduces O<sub>2</sub> to <1%, inhibiting aerobic organisms and lipid oxidation; shelf life ~20–25 days at 5°C</li>
                        <li><strong>Active packaging:</strong> Incorporation of oxygen scavengers (iron-based sachets) or antimicrobial agents (nisin-coated films, essential oil-infused packaging) can further extend shelf life</li>
                    </ul>
                    <p class="mt-2"><strong>Storage temperature:</strong> Refrigeration at 5 ± 2°C is mandatory. The Q<sub>10</sub> for microbial growth in sandesh is approximately 2–3, meaning each 10°C increase in storage temperature approximately doubles to triples the rate of spoilage. At 30°C, shelf life may be <24 hours; at 5°C, 5–7 days (unpackaged).</p>
                    <p class="mt-2"><strong>Lipid oxidation:</strong> The milk fat in sandesh is susceptible to oxidative deterioration (auto-oxidation of unsaturated fatty acids, particularly oleic acid C18:1 and linoleic acid C18:2), leading to off-flavors (rancid, cardboard-like). Light exposure accelerates photo-oxidation via riboflavin sensitization. Therefore, light-barrier packaging (opaque or amber) is recommended.</p>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">HACCP-Based Hazard Analysis Summary</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Step</th>
                            <th class="p-2 border">Hazard Type</th>
                            <th class="p-2 border">Specific Hazard</th>
                            <th class="p-2 border">Control Measure</th>
                            <th class="p-2 border">Classification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border">Milk Reception</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border"><em>Salmonella</em>, <em>Brucella</em>, <em>M. bovis</em>, <em>L. monocytogenes</em>, <em>E. coli</em> O157:H7</td>
                            <td class="p-2 border">Supplier qualification, MBRT, COB test, platform tests</td>
                            <td class="p-2 border">PRP</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Milk Reception</td>
                            <td class="p-2 border">Chemical</td>
                            <td class="p-2 border">Antibiotic residues, pesticides, aflatoxin M1, adulterants (urea, melamine, neutralizers)</td>
                            <td class="p-2 border">Supplier testing, rapid screening kits, FSSAI limits compliance</td>
                            <td class="p-2 border">PRP</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Milk Reception</td>
                            <td class="p-2 border">Physical</td>
                            <td class="p-2 border">Dirt, hair, insects, metal fragments</td>
                            <td class="p-2 border">Filtration, sedimentation test</td>
                            <td class="p-2 border">PRP</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Heating (85–90°C)</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border">Survival of vegetative pathogens</td>
                            <td class="p-2 border">T ≥ 85°C, t ≥ 5 min; continuous monitoring</td>
                            <td class="p-2 border font-bold text-red-600">CCP-1</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Coagulation</td>
                            <td class="p-2 border">Quality / Biological</td>
                            <td class="p-2 border">Incorrect pH → poor texture; too high pH → incomplete coagulation & microbial risk</td>
                            <td class="p-2 border">pH 5.2–5.4; calibrated pH meter; trained operator</td>
                            <td class="p-2 border font-bold text-red-600">CCP-2</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Draining & Pressing</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border">Recontamination from muslin cloth, environment</td>
                            <td class="p-2 border">Use of sanitized cloths; clean environment; rapid processing</td>
                            <td class="p-2 border">oPRP</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Kneading</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border"><em>S. aureus</em> from hand contact; environmental contamination</td>
                            <td class="p-2 border">Hand hygiene, gloves, health screening; mechanical kneading preferred</td>
                            <td class="p-2 border">oPRP</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Sugar Addition</td>
                            <td class="p-2 border">Physical / Chemical</td>
                            <td class="p-2 border">Foreign matter in sugar; non-permitted sweeteners</td>
                            <td class="p-2 border">Sieving; supplier COA; FSSAI-compliant sugar</td>
                            <td class="p-2 border">PRP</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Cooking (75–85°C)</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border">Survival of post-contamination pathogens</td>
                            <td class="p-2 border">T ≥ 75°C, t ≥ 10 min; continuous stirring</td>
                            <td class="p-2 border font-bold text-red-600">CCP-3</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Cooling, Moulding, Garnishing</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border">Post-process recontamination (hands, moulds, garnishes, air)</td>
                            <td class="p-2 border">Sanitized equipment; personnel hygiene; clean room conditions; rapid cooling through danger zone (60–10°C within 2 h)</td>
                            <td class="p-2 border">oPRP</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Packaging & Storage</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border">Microbial proliferation during storage; yeast/mold spoilage</td>
                            <td class="p-2 border">Refrigeration (5 ± 2°C); MAP/vacuum packaging; cold chain maintenance</td>
                            <td class="p-2 border">oPRP</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Water Activity (a<sub>w</sub>) and Shelf Life Relationship</h3>
            <p>Water activity is the single most important intrinsic factor governing the shelf life and microbial safety of sandesh. The a<sub>w</sub> of sandesh is determined by the combined effect of dissolved solutes (primarily sucrose, lactose, and mineral salts) and the interaction of water with the protein matrix (bound water via hydrogen bonding to polar groups on casein).</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Sandesh Type</th>
                            <th class="p-2 border">Typical Moisture (%)</th>
                            <th class="p-2 border">Typical a<sub>w</sub></th>
                            <th class="p-2 border">Shelf Life (5°C)</th>
                            <th class="p-2 border">Dominant Spoilage Flora</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border">Kachagolla (raw)</td>
                            <td class="p-2 border">35–45</td>
                            <td class="p-2 border">0.92–0.96</td>
                            <td class="p-2 border">2–3 days</td>
                            <td class="p-2 border"><em>Pseudomonas</em>, coliforms, yeasts</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Naram Pak</td>
                            <td class="p-2 border">25–35</td>
                            <td class="p-2 border">0.87–0.92</td>
                            <td class="p-2 border">5–7 days</td>
                            <td class="p-2 border">Yeasts, molds, LAB</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Kara Pak</td>
                            <td class="p-2 border">15–20</td>
                            <td class="p-2 border">0.80–0.87</td>
                            <td class="p-2 border">15–30 days</td>
                            <td class="p-2 border">Xerophilic molds (<em>Aspergillus</em>), osmophilic yeasts</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3">The <strong>moisture sorption isotherm</strong> of sandesh follows a Type II (sigmoid) curve, with the BET monolayer moisture content at approximately 4–6% (corresponding to a<sub>w</sub> ≈ 0.2–0.3). Below this moisture, the product is extremely stable but organoleptically unacceptable (hard, dry). The target a<sub>w</sub> for naram pak sandesh (0.87–0.92) falls in the region where:</p>
            <ul class="list-disc list-outside pl-5 mt-1">
                <li>Most bacteria are inhibited (min a<sub>w</sub> for <em>Salmonella</em> = 0.94; <em>E. coli</em> = 0.95; <em>C. botulinum</em> type A = 0.94)</li>
                <li><em>S. aureus</em> can still grow (min a<sub>w</sub> = 0.83 for growth, 0.86 for toxin production) — reinforcing the need for refrigeration</li>
                <li>Yeasts and molds remain active (min a<sub>w</sub> = 0.61–0.80 for most species)</li>
                <li>Enzymatic browning and lipid oxidation rates are moderate but significant over storage periods >7 days</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Texture Profile Analysis (TPA) of Sandesh</h3>
            <p>Instrumental Texture Profile Analysis (TPA) using a texture analyzer (e.g., TA.XT Plus, Stable Micro Systems) provides objective characterization of sandesh quality. Typical TPA parameters for good quality naram pak sandesh:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">TPA Parameter</th>
                            <th class="p-2 border">Typical Range</th>
                            <th class="p-2 border">Significance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Hardness (N)</td><td class="p-2 border">5–25</td><td class="p-2 border">Force required for first compression; directly correlates with moisture content and degree of cooking</td></tr>
                        <tr><td class="p-2 border">Cohesiveness</td><td class="p-2 border">0.3–0.6</td><td class="p-2 border">Ratio of positive force area during second compression to first; reflects internal binding strength of the protein-fat-sugar matrix</td></tr>
                        <tr><td class="p-2 border">Springiness</td><td class="p-2 border">0.4–0.7</td><td class="p-2 border">Recovery between compressions; low values indicate a "short" (non-elastic) texture — desirable for sandesh</td></tr>
                        <tr><td class="p-2 border">Gumminess (N)</td><td class="p-2 border">2–12</td><td class="p-2 border">Hardness × Cohesiveness; energy needed to disintegrate the product for swallowing</td></tr>
                        <tr><td class="p-2 border">Chewiness (N·mm)</td><td class="p-2 border">1–8</td><td class="p-2 border">Gumminess × Springiness; total work required to chew</td></tr>
                        <tr><td class="p-2 border">Adhesiveness (N·s)</td><td class="p-2 border">< 0.5 (low)</td><td class="p-2 border">Tendency to stick to teeth/palate; should be minimal in good sandesh</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3">Factors that increase hardness: lower moisture, higher cooking time/temperature, higher sugar proportion, lower fat content, use of buffalo milk. Factors that decrease hardness: higher moisture, higher fat, shorter cooking, use of cow milk, addition of khoa or cream.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shelf Life Extension Technologies</h3>
            <p>Traditional sandesh has a very limited shelf life (2–7 days even under refrigeration), limiting its market reach. Several technological interventions have been investigated:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Technology</th>
                            <th class="p-2 border">Principle</th>
                            <th class="p-2 border">Reported Shelf Life Extension</th>
                            <th class="p-2 border">Limitations</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border">Modified Atmosphere Packaging (MAP)</td>
                            <td class="p-2 border">Replace air with N<sub>2</sub>/CO<sub>2</sub>; inhibit aerobes and molds</td>
                            <td class="p-2 border">20–30 days at 6°C (vs. 5–7 days control)</td>
                            <td class="p-2 border">Equipment cost; CO<sub>2</sub> can cause slight acidic off-taste at high concentrations; package integrity critical</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Vacuum Packaging</td>
                            <td class="p-2 border">Remove O<sub>2</sub>; inhibit aerobes and oxidation</td>
                            <td class="p-2 border">20–25 days at 6°C</td>
                            <td class="p-2 border">Anaerobic spoilers may grow; package collapse may affect shape</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Nisin addition</td>
                            <td class="p-2 border">Bacteriocin from <em>Lactococcus lactis</em>; pore-forming activity on Gram-positive bacteria</td>
                            <td class="p-2 border">25–35 days at 6°C (at 100–200 IU/g)</td>
                            <td class="p-2 border">Limited spectrum (Gram-positives only); regulatory status as food additive; consumer perception of "additives"</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Potassium sorbate (0.1%)</td>
                            <td class="p-2 border">Inhibits yeasts and molds by interfering with enzyme systems (dehydrogenases)</td>
                            <td class="p-2 border">15–20 days at ambient, 30+ days at 6°C</td>
                            <td class="p-2 border">Must comply with FSSAI limits (max 1000 ppm as sorbic acid); off-taste at higher concentrations</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Natamycin (surface treatment)</td>
                            <td class="p-2 border">Polyene antifungal; binds ergosterol in fungal cell membranes</td>
                            <td class="p-2 border">Effective mold inhibition for 20–30 days</td>
                            <td class="p-2 border">Surface application only; not effective against bacteria; regulatory approval needed</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Retort processing</td>
                            <td class="p-2 border">Thermal sterilization (121°C/15 min equivalent F<sub>0</sub>)</td>
                            <td class="p-2 border">3–6 months at ambient</td>
                            <td class="p-2 border">Severe texture degradation (browning, hardening); changes flavor profile significantly; not commercially viable for traditional sandesh</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">High Hydrostatic Pressure (HHP)</td>
                            <td class="p-2 border">Non-thermal; 400–600 MPa for 5–15 min; disrupts microbial cell membranes and denatures enzymes</td>
                            <td class="p-2 border">30–45 days at 4°C (laboratory studies)</td>
                            <td class="p-2 border">High capital cost; may alter protein structure and texture; limited commercial adoption in India</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">UV-C surface decontamination</td>
                            <td class="p-2 border">254 nm UV radiation; causes pyrimidine dimers in microbial DNA</td>
                            <td class="p-2 border">Additional 3–5 days extension over control</td>
                            <td class="p-2 border">Surface treatment only; limited penetration; may cause lipid photo-oxidation; color changes</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Edible coatings (chitosan, whey protein isolate)</td>
                            <td class="p-2 border">Barrier to moisture and gas exchange; chitosan has inherent antimicrobial activity</td>
                            <td class="p-2 border">Additional 5–10 days at 6°C</td>
                            <td class="p-2 border">May affect surface texture and appearance; consumer awareness needed</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Quality Defects in Sandesh — Causes and Prevention</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Defect</th>
                            <th class="p-2 border">Cause(s)</th>
                            <th class="p-2 border">Scientific Explanation</th>
                            <th class="p-2 border">Prevention</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border">Grainy / Sandy texture</td>
                            <td class="p-2 border">Under-kneading; large sugar crystals; excessive lactose</td>
                            <td class="p-2 border">Protein aggregates >25 µm are detectable by tongue; sucrose crystals >15 µm feel gritty; lactose crystals (α-lactose monohydrate) are inherently sandy (low solubility, 17 g/100 mL at 20°C)</td>
                            <td class="p-2 border">Thorough kneading (8–12 min); use powdered sugar; control lactose via milk quality</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Hard / Dry texture</td>
                            <td class="p-2 border">Over-cooking; low fat chhana; buffalo milk; excessive pressing</td>
                            <td class="p-2 border">Excessive moisture removal concentrates the protein matrix beyond optimal; reduced fat means fewer "active filler" particles to interrupt protein–protein bonds</td>
                            <td class="p-2 border">Control cooking time/temperature; use cow milk with 4–5% fat; target chhana moisture 53–58%</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Soft / Pasty / Sticky</td>
                            <td class="p-2 border">Under-cooking; high moisture chhana; incomplete coagulation (high pH)</td>
                            <td class="p-2 border">Insufficient moisture removal leaves excess free water; high pH chhana has weaker protein aggregation</td>
                            <td class="p-2 border">Ensure adequate cooking to correct endpoint; maintain coagulation pH 5.2–5.4; proper draining</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Crumbly (no cohesion)</td>
                            <td class="p-2 border">Over-acidification (pH < 5.0); excessive CCP dissolution</td>
                            <td class="p-2 border">At pH < 5.0, nearly all colloidal calcium phosphate dissolves, and casein micelles lose their internal cross-links. The result is a highly aggregated but non-cohesive, crumbly protein mass similar to acid casein.</td>
                            <td class="p-2 border">Strict pH control during coagulation (5.2–5.4); use buffered coagulant (citric acid preferred over HCl or strong acids)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Excessive browning</td>
                            <td class="p-2 border">High cooking temperature; prolonged cooking; high reducing sugar content</td>
                            <td class="p-2 border">Maillard reaction rate increases exponentially with temperature (approximately doubling every 10°C). Inverted sucrose provides more reducing sugars as Maillard substrates.</td>
                            <td class="p-2 border">Control cooking temperature (≤85°C for naram pak); avoid prolonged heating; use freshly prepared sugar solutions</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Sour / Acidic taste</td>
                            <td class="p-2 border">Excess coagulant; delayed processing; microbial acid production</td>
                            <td class="p-2 border">Residual citric acid in chhana imparts tanginess; LAB can produce lactic acid during holding</td>
                            <td class="p-2 border">Precise acid addition; wash chhana in cold water post-draining; process immediately</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Oily / Greasy surface</td>
                            <td class="p-2 border">Excessive fat; high cooking temperature; over-kneading</td>
                            <td class="p-2 border">Free fat released from damaged fat globule membranes migrates to surface; high temperature melts fat completely and disrupts protein-fat binding</td>
                            <td class="p-2 border">Standardize milk fat to 4–5%; avoid rapid/high-temperature cooking; optimize kneading time</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Surface mold growth</td>
                            <td class="p-2 border">Inadequate packaging; storage at ambient temperature; post-process contamination</td>
                            <td class="p-2 border">Sandesh a<sub>w</sub> (0.85–0.92) supports mold growth; <em>Penicillium</em> and <em>Aspergillus</em> spores are ubiquitous in air</td>
                            <td class="p-2 border">MAP/vacuum packaging; strict refrigeration; clean room moulding; potassium sorbate (if permitted)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Off-flavor (rancid, stale)</td>
                            <td class="p-2 border">Lipid oxidation; use of old/stored chhana; light exposure</td>
                            <td class="p-2 border">Auto-oxidation of unsaturated FAs produces hydroperoxides → aldehydes (hexanal, nonanal); lipolysis by residual milk lipase releases short-chain FAs (butyric, caproic) causing rancid flavor</td>
                            <td class="p-2 border">Use freshly prepared chhana; opaque packaging; refrigeration slows oxidation (activation energy effect)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Yield Calculation</h3>
            <p>The yield of chhana from milk and subsequently sandesh from chhana can be estimated:</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Chhana yield from milk:</strong> Typically 15–18 g chhana per 100 mL of cow milk (at 4.5% fat, 8.5% SNF), i.e., approximately <strong>15–18% yield</strong>. Recovery of milk solids in chhana is approximately 50–55% of total solids.</li>
                <li><strong>Sandesh yield from chhana:</strong> With 25–30% sugar addition and 10–20% moisture loss during cooking, approximately <strong>110–120 g sandesh per 100 g chhana</strong> (for naram pak).</li>
                <li><strong>Overall:</strong> Approximately <strong>1 kg of cow milk yields 150–180 g of chhana, which produces ~170–210 g of naram pak sandesh.</strong></li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Microbiological Considerations and Spoilage Pattern</h3>
            <p>The spoilage microbiology of sandesh follows a predictable succession pattern determined by the product's intrinsic parameters (a<sub>w</sub>, pH, nutrient availability) and storage conditions:</p>
            <ol class="list-decimal list-outside pl-5 space-y-2">
                <li><strong>Day 0–2 (Lag Phase):</strong> Initial microbial load (from post-cooking recontamination) is low. TPC typically 10²–10³ cfu/g. Product quality is at its peak.</li>
                <li><strong>Day 2–5 (Early Spoilage at 5°C):</strong> Psychrotrophic bacteria (<em>Pseudomonas</em> spp.) begin multiplication if present. Surface yeasts (<em>Candida</em>, <em>Debaryomyces</em>) start visible colony formation. Slight sour taste may develop from LAB (<em>Lactobacillus</em>, <em>Streptococcus</em>) activity.</li>
                <li><strong>Day 5–7 (Active Spoilage):</strong> TPC exceeds 10⁵ cfu/g. Visible mold spots (<em>Penicillium</em>, <em>Aspergillus</em>, <em>Mucor</em>) appear on surfaces. Off-flavors become pronounced (sour, yeasty, musty). Surface becomes slimy from bacterial exopolysaccharides. Product is no longer acceptable.</li>
                <li><strong>Day 7+ (Advanced Spoilage):</strong> Extensive mold growth, proteolysis (bitter peptides from casein degradation), lipolysis (rancid flavors), gas production from yeasts (swelling in sealed packages).</li>
            </ol>
            <p class="mt-2">At ambient temperature (25–30°C), this entire spoilage sequence is compressed into 12–36 hours, underscoring the absolute necessity of cold chain maintenance.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Sensory Evaluation Parameters</h3>
            <p>Sensory evaluation of sandesh is typically performed using a 9-point hedonic scale or descriptive analysis with the following attributes:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Attribute</th>
                            <th class="p-2 border">Ideal Description</th>
                            <th class="p-2 border">Weight in Overall Score (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Color & Appearance</td><td class="p-2 border">Uniform creamy white to light yellow; smooth, glossy surface; well-defined mould impressions; no cracks or surface drying</td><td class="p-2 border">15</td></tr>
                        <tr><td class="p-2 border">Body & Texture</td><td class="p-2 border">Smooth, firm yet tender; melt-in-mouth; not grainy, hard, crumbly, or sticky; short (non-elastic) bite</td><td class="p-2 border">35</td></tr>
                        <tr><td class="p-2 border">Flavor & Taste</td><td class="p-2 border">Balanced sweetness; clean dairy/milk flavor; subtle cooked note; no sourness, bitterness, or off-flavors</td><td class="p-2 border">40</td></tr>
                        <tr><td class="p-2 border">Overall Acceptability</td><td class="p-2 border">Integrated perception of all attributes</td><td class="p-2 border">10</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Recent Research and Innovations</h3>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Low-calorie / Diabetic sandesh:</strong> Replacement of sucrose with stevia (steviol glycosides), sucralose, or polydextrose. Studies report acceptable sensory quality at up to 50% sucrose replacement with stevia, though slight bitter aftertaste remains a challenge. The reduced a<sub>w</sub> depression requires compensatory antimicrobial strategies.</li>
                <li><strong>Fortification:</strong> Incorporation of micronutrients (iron as ferrous fumarate or NaFeEDTA, vitamin A, vitamin D) and bioactive compounds (omega-3 fatty acids from flaxseed oil, probiotics encapsulated in alginate beads) to enhance nutritional value.</li>
                <li><strong>Fruit-flavored variants:</strong> Addition of mango pulp, strawberry puree, jackfruit, or pineapple at 5–15% levels. These introduce additional reducing sugars, organic acids, and moisture that affect a<sub>w</sub>, browning, and shelf life.</li>
                <li><strong>Mechanization:</strong> Continuous chhana-making machines (developed at NDRI, Karnal, and ICAR-NDRI) with automated acid dosing and pH control, followed by continuous kneading and cooking in scraped-surface heat exchangers, enable large-scale, consistent production with reduced labor and contamination risk.</li>
                <li><strong>Frozen sandesh:</strong> Quick-freezing (blast freezing at −35°C) followed by storage at −18°C extends shelf life to 3–6 months. Key challenge: ice crystal formation during freezing can disrupt the protein-fat matrix, causing textural damage (crumbling, moisture separation) upon thawing. Use of cryoprotectants (trehalose, sorbitol at 2–5%) and rapid freezing rates (to promote intracellular/fine ice crystal formation) mitigate this.</li>
                <li><strong>Herbal/functional sandesh:</strong> Incorporation of turmeric (curcumin), ashwagandha extract, moringa leaf powder, or green tea catechins for added health benefits. The antioxidant activity of these additions can also delay lipid oxidation during storage.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Key References</h3>
            <ul class="list-disc list-outside pl-5 space-y-1 text-sm">
                <li>De, S. (2004). <em>Outlines of Dairy Technology.</em> Oxford University Press, New Delhi.</li>
                <li>Aneja, R. P., Mathur, B. N., Chandan, R. C., & Banerjee, A. K. (2002). <em>Technology of Indian Milk Products.</em> Dairy India Yearbook, New Delhi.</li>
                <li>Rajorhia, G. S. (2014). Technology of chhana-based sweets. In <em>Handbook of Indigenous Dairy Products.</em> ICAR-NDRI, Karnal.</li>
                <li>Bhattacharya, D. C., & Raj, D. (1980). Studies on the production of sandesh from cow milk. <em>Indian Journal of Dairy Science</em>, 33(2), 187–192.</li>
                <li>Bandyopadhyay, M., Chakraborty, R., & Raychaudhuri, U. (2007). A process for preparing a natural antioxidant enriched dairy product (sandesh). <em>LWT-Food Science and Technology</em>, 40(5), 842–851.</li>
                <li>FSSAI. (2011). <em>Food Safety and Standards (Food Products Standards and Food Additives) Regulations.</em> Government of India.</li>
                <li>BIS. (1987). IS 12257: Specification for Sandesh. Bureau of Indian Standards, New Delhi.</li>
                <li>Kumar, S., Rai, D. C., & Singh, D. (2012). Effect of packaging on shelf life of sandesh. <em>Journal of Dairying, Foods & Home Sciences</em>, 31(3), 175–180.</li>
            </ul>
        `
    },
    hi: {
        title: "Sandesh Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Sandesh ka Introduction</h3>
            <p>Sandesh (ya <em>Sondesh</em>) ek classic Bengali mithai hai, jo apni delicate, muh mein ghul jaane wali texture aur halki meethas ke liye mashoor hai. Yeh fresh, soft chhana (acid se jamaya hua milk solids, jise Indian cottage cheese bhi kehte hain) se banta hai, jisme sugar milaakar controlled low temperature pe cook kiya jaata hai taaki uski characteristic smooth, fudge jaisi body aur clean dairy flavor aaye. Bahut saari Indian sweets (mithai) ke opposite, sandesh na toh deep-fry hota hai na hi sugar syrup mein soaked hota hai, isliye yeh ek comparatively halka dessert hai jiska apna unique identity hai jo heat-acid coagulated casein ke colloidal aur rheological properties pe based hai.</p>
            <p class="mt-2">Historically 16th century se Bengali literature mein documented hai, sandesh ek remarkable example hai empirical food science ka — liquid (milk) ko solid confection mein transform karna controlled protein denaturation, acid coagulation, mechanical working, aur thermal processing ke through. Modern dairy science ne tab se in saare steps ke peeche ke physicochemical principles ko samjha diya hai.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Classification aur Varieties</h3>
            <p>Sandesh ko broadly classify kar sakte hain chhana–sugar mixture ko kitna thermal processing diya gaya hai uske basis pe:</p>
            <div class="overflow-x-auto mt-4 mb-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Type</th>
                            <th class="p-2 border">Heat Treatment</th>
                            <th class="p-2 border">Characteristics</th>
                            <th class="p-2 border">Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Kachagolla (Raw/Uncooked)</strong></td>
                            <td class="p-2 border">Bahut kam ya bilkul nahi cooking</td>
                            <td class="p-2 border">Bahut soft, moist, crumbly; bahut short shelf life (6–12 h ambient pe)</td>
                            <td class="p-2 border">Natore ka Kachagolla</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Nolen Gurer Sandesh</strong></td>
                            <td class="p-2 border">Moderate cooking date palm jaggery ke saath</td>
                            <td class="p-2 border">Characteristic smoky-caramel flavor nolen gur se; seasonal (winter)</td>
                            <td class="p-2 border">Nolen Gurer Sandesh</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Makha Sandesh (Kneaded)</strong></td>
                            <td class="p-2 border">Halki cooking</td>
                            <td class="p-2 border">Smooth, thoda firm, moisture retain karta hai; moderate shelf life</td>
                            <td class="p-2 border">Jol Bhora, Abar Khabo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Naram Pak (Soft cook)</strong></td>
                            <td class="p-2 border">Moderate cooking (75–85°C)</td>
                            <td class="p-2 border">Firm lekin tender body; sabse common commercial variety</td>
                            <td class="p-2 border">Moulded sandesh, Chandrapuli</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Kara Pak (Hard cook)</strong></td>
                            <td class="p-2 border">Zyada time tak higher temperature pe cooking</td>
                            <td class="p-2 border">Hard, dry, chewy; sabse lamba shelf life; browning ho sakti hai</td>
                            <td class="p-2 border">Kara Pak Sandesh, Magaj</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Sandesh ke liye Regulatory Standards</h3>
            <p>Sandesh <strong>'Chhana-based sweets'</strong> ki category mein aata hai jaisa <strong>Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011</strong> under FSSAI mein define kiya gaya hai. BIS standard <strong>IS 12257:1987</strong> (Specification for Sandesh) bhi compositional aur quality guidelines deta hai.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">FSSAI Requirement</th>
                            <th class="p-2 border">Scientific Rationale</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Moisture (max, %)</strong></td>
                            <td class="p-2 border">50.0</td>
                            <td class="p-2 border">Water activity (a<sub>w</sub>) control karta hai; zyada moisture se microbial risk badhta hai aur shelf life kam hoti hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat (dry basis pe, min, %)</strong></td>
                            <td class="p-2 border">20.0</td>
                            <td class="p-2 border">Whole/standardized milk ka use ensure karta hai; fat smooth mouthfeel aur flavor perception mein contribute karta hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sucrose (dry basis pe, max, %)</strong></td>
                            <td class="p-2 border">40.0</td>
                            <td class="p-2 border">Excessive meethas rokta hai; milk solids ke jagah sugar substitution limit karta hai; a<sub>w</sub> depression pe impact</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Total Plate Count (max, cfu/g)</strong></td>
                            <td class="p-2 border">50,000</td>
                            <td class="p-2 border">Production aur handling ke dauran general hygienic quality ka indicator</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Coliform Count (max, cfu/g)</strong></td>
                            <td class="p-2 border">100</td>
                            <td class="p-2 border">Post-processing contamination aur sanitation adequacy ka indicator</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Yeast & Mould Count (max, cfu/g)</strong></td>
                            <td class="p-2 border">100</td>
                            <td class="p-2 border">Important hai kyunki moderate a<sub>w</sub> (0.85–0.95) fungal growth favor karta hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>E. coli</em></strong></td>
                            <td class="p-2 border">1 g mein Absent</td>
                            <td class="p-2 border">Fecal contamination ka indicator; pathogen risk hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>Staphylococcus aureus</em></strong></td>
                            <td class="p-2 border">1 g mein Absent</td>
                            <td class="p-2 border">Heat-stable enterotoxin produce karta hai; shaping ke time manual handling ki wajah se relevant hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>Salmonella</em></strong></td>
                            <td class="p-2 border">25 g mein Absent</td>
                            <td class="p-2 border">Dairy products mein primary pathogen of concern</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Sandesh ki Typical Proximate Composition</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Component</th>
                            <th class="p-2 border">Approximate Range (%)</th>
                            <th class="p-2 border">Functional Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Moisture</td><td class="p-2 border">18–35</td><td class="p-2 border">Texture decide karta hai (soft vs. hard); a<sub>w</sub> ko drive karta hai</td></tr>
                        <tr><td class="p-2 border">Fat</td><td class="p-2 border">10–18</td><td class="p-2 border">Lubricity, mouthfeel, flavor carrier (short-chain fatty acids: butyric, caproic)</td></tr>
                        <tr><td class="p-2 border">Protein</td><td class="p-2 border">12–20</td><td class="p-2 border">Structural matrix (casein network); body aur texture ke liye zimmedaar</td></tr>
                        <tr><td class="p-2 border">Lactose</td><td class="p-2 border">1–3</td><td class="p-2 border">Residual; cooking ke dauran Maillard browning mein contribute karta hai</td></tr>
                        <tr><td class="p-2 border">Sucrose (added)</td><td class="p-2 border">20–35</td><td class="p-2 border">Meethas, humectant, a<sub>w</sub> depressant, texture modifier</td></tr>
                        <tr><td class="p-2 border">Minerals (Ash)</td><td class="p-2 border">1.0–2.5</td><td class="p-2 border">Milk se Calcium, phosphorus; protein hydration aur texture pe affect karta hai</td></tr>
                        <tr><td class="p-2 border">Energy (kcal/100 g)</td><td class="p-2 border">280–380</td><td class="p-2 border">—</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Chhana ka Science — Sandesh ki Foundation</h2>
            <p>Chhana sandesh ka foundational raw material hai, aur iski physicochemical quality directly sandesh ki quality decide karti hai. Chhana formation samajhne ke liye milk protein chemistry ka knowledge zaroori hai.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Milk Protein System</h4>
            <p>Bovine milk mein lagbhag 3.3–3.5% protein hota hai, jo broadly classify hota hai:</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Caseins (~80%):</strong> αs1-casein, αs2-casein, β-casein, aur κ-casein. Yeh <strong>casein micelles</strong> ke roop mein exist karte hain — colloidal aggregates (50–600 nm diameter) jo stabilize hote hain:
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li><strong>Colloidal calcium phosphate (CCP)</strong> nanoclusters jo intra-micellar cross-links ka kaam karte hain</li>
                        <li><strong>κ-casein</strong> "hairy layer" micelle surface pe jo steric aur electrostatic stabilization provide karta hai (zeta potential ≈ −20 mV native pH 6.7 pe)</li>
                        <li>Casein monomers ke beech hydrophobic interactions</li>
                    </ul>
                </li>
                <li><strong>Whey Proteins (~20%):</strong> β-lactoglobulin (β-Lg), α-lactalbumin (α-La), BSA, immunoglobulins. Yeh globular, soluble proteins hain jo ~70°C se upar heat karne pe denature ho jaate hain, buried sulfhydryl (–SH) groups expose karte hain.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Acid-Heat Coagulation ka Mechanism (Chhana Formation)</h4>
            <p>Chhana formation mein <strong>dual destabilization mechanism</strong> involve hota hai:</p>
            <ol class="list-decimal list-outside pl-5 space-y-3">
                <li><strong>Whey proteins ka thermal denaturation (pre-heating step):</strong>
                    <p>Jab milk ko 85–90°C pe 5–10 minutes heat karte hain:</p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li>β-Lg unfold hota hai (T<sub>d</sub> ≈ 78°C), reactive –SH groups (Cys<sup>121</sup>) expose hote hain</li>
                        <li>Denatured β-Lg micelle surface pe κ-casein ke saath <strong>disulfide-linked complexes</strong> banata hai –SH/S–S interchange reactions ke through</li>
                        <li>Yeh β-Lg–κ-casein interaction micelle surface ko alter karta hai, ise acid coagulation ke liye zyada susceptible banata hai aur coagulum mein protein recovery increase karta hai</li>
                        <li>α-La (T<sub>d</sub> ≈ 62°C) bhi denature hota hai aur β-Lg ke saath aggregate kar sakta hai</li>
                        <li>Net effect: whey proteins casein ke saath <strong>co-precipitate</strong> ho jaate hain, chhana yield 5–8% tak increase hota hai</li>
                    </ul>
                </li>
                <li><strong>Acid coagulation (70–80°C pe coagulant add karna):</strong>
                    <p>Ek acidulant (citric acid, lactic acid, ya sour whey) add kiya jaata hai taaki pH ~6.7 se ~5.2–5.4 tak kam ho:</p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li>Jaise pH <strong>casein ke isoelectric point (pI) (≈ pH 4.6)</strong> ke paas jaata hai, casein micelles pe net negative charge dheere dheere neutralize hota hai</li>
                        <li>pH kam hone pe Colloidal calcium phosphate (CCP) dissolve hota hai (Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub> + 6H<sup>+</sup> → 3Ca<sup>2+</sup> + 2H<sub>3</sub>PO<sub>4</sub>), intra-micellar bonds kamzor hote hain</li>
                        <li>κ-casein "hairy layer" apni charge-based repulsion kho deta hai; steric stabilization compromised ho jaata hai</li>
                        <li>Combined thermal-acid destabilization se pI se kaafi upar pH values pe (5.2–5.4 vs. 4.6) <strong>rapid, irreversible coagulation</strong> hota hai, pure acid-set systems (jaise yogurt) ke opposite jo pI ke paas coagulate hote hain</li>
                        <li>Resulting coagulum protein network ke andar fat globules (native aur heat ki wajah se partially coalesced dono) ko entrap karta hai</li>
                    </ul>
                </li>
            </ol>
            <p class="mt-3"><strong>Sandesh-quality Chhana ke liye Critical pH:</strong> pH 5.2–5.4 optimal hai. pH 5.0 se neeche, excessive calcium dissolution hard, crumbly, acidic chhana produce karta hai. pH 5.6 se upar, incomplete coagulation se soft, pasty product banta hai jisme whey losses zyada hoti hain. Target pH protein aggregation, mineral retention, aur textural attributes ka balance rakhta hai.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Sandesh ke liye Chhana Quality ko Affect karne wale Factors</h4>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Factor</th>
                            <th class="p-2 border">Optimal Condition</th>
                            <th class="p-2 border">Scientific Basis</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border">Milk ki species</td>
                            <td class="p-2 border">Cow milk preferred hai</td>
                            <td class="p-2 border">Cow milk chhana softer hota hai kyunki fat globules chhote hote hain (avg. 3–4 µm), casein content kam hota hai, aur β-casein ka proportion zyada hota hai. Buffalo milk se harder chhana banta hai kyunki fat globules bade hote hain (avg. 5–8 µm), casein zyada hota hai, aur calcium content greater hota hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Milk ka Fat content</td>
                            <td class="p-2 border">4.0–5.0% fat (standardized)</td>
                            <td class="p-2 border">Fat globules casein matrix mein "fillers" ka kaam karte hain, protein–protein bonds ko interrupt karte hain aur softness aur lubricity dete hain. Bahut kam fat → hard, dry chhana. Bahut zyada fat → greasy, weak structure.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">SNF content</td>
                            <td class="p-2 border">8.5–9.0%</td>
                            <td class="p-2 border">Zyada SNF se protein recovery aur yield increase hoti hai; lekin excessively high lactose se sandiness aa sakti hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Heating temperature</td>
                            <td class="p-2 border">85–90°C / no hold ya 5 min</td>
                            <td class="p-2 border">≥90% whey protein denaturation ensure karta hai casein ke saath co-precipitation ke liye. Over-heating (>95°C, prolonged) se excessive denaturation aur rubbery texture aa sakta hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Coagulation temperature</td>
                            <td class="p-2 border">70–80°C</td>
                            <td class="p-2 border">Is temperature range mein denatured whey proteins efficiently incorporate hote hain. 60°C se neeche, coagulation slow hota hai aur whey protein recovery decrease hoti hai. 90°C se upar, fat leakage badhti hai aur texture hard ho jaata hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Coagulant ka type</td>
                            <td class="p-2 border">Citric acid (1–2% solution) preferred</td>
                            <td class="p-2 border">Citric acid (pKa₁ = 3.13, pKa₂ = 4.76, pKa₃ = 6.40) lactic ya acetic acid se better buffering aur zyada gradual pH decline provide karta hai, jisse smoother, zyada cohesive chhana banta hai. Nimbu ka ras (jismein citric acid hota hai) traditional hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Coagulation pH</td>
                            <td class="p-2 border">5.2–5.4</td>
                            <td class="p-2 border">Protein aggregation aur mineral retention ke beech optimal balance. Is pH pe, ~60–70% colloidal calcium abhi bhi casein ke saath associated hai, jo cohesive (crumbly nahi) body deta hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Acid add karne ki rate</td>
                            <td class="p-2 border">Dheere, gentle stirring ke saath</td>
                            <td class="p-2 border">Rapid acid addition se localized low-pH zones ban jaate hain, jisse heterogeneous coagulation, fine curd particles, aur whey mein zyada fines loss hota hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Draining time aur pressing</td>
                            <td class="p-2 border">Muslin mein 15–30 min latkaao; halka pressing (1–2 kg weight)</td>
                            <td class="p-2 border">Chhana mein target moisture: 53–58%. Zyada pressing se bahut zyada moisture aur whey-soluble components (lactose, minerals, whey proteins) nikal jaate hain, dry, hard chhana banta hai.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Sandesh ki Processing with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Sandesh Production ka Processing Flowchart</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception & Quality Testing <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Filtration / Clarification <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Standardization (Fat: 4.0–5.0%, SNF: 8.5%) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>85–90°C tak Heating</strong> (5 min hold) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-xs text-gray-500 italic">Pathogen elimination: <em>L. monocytogenes</em>, <em>Salmonella</em>, <em>E. coli</em> O157:H7 ka ≥6-log reduction</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Coagulation Temperature (70–80°C) tak Cooling <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Acid Coagulation</strong> (pH 5.2–5.4, T: 70–80°C) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-xs text-gray-500 italic">Texture, yield, aur complete protein recovery control karta hai</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Settling (5 min), Muslin mein Draining & Pressing (15–30 min)</div>
                <div class="text-xs text-gray-500 italic">Target chhana moisture: 53–58%</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Chhana ki Kneading</strong> (haath se ya machine se, 8–12 min) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-xs text-gray-500 italic">Protein matrix disruption → smooth paste; hygiene bahut critical (haath ka contact)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Sugar Mixing</strong> (chhana ke weight ka 25–35%) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-xs text-gray-500 italic">Powdered sugar; uniform dissolution texture ke liye critical hai</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Low-Temperature Cooking</strong> (75–85°C, 10–20 min, continuous stirring) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
                <div class="text-xs text-gray-500 italic">Moisture reduction, sugar integration, flavor development, pathogen reduction</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cooling (~40–50°C tak) aur Flavoring (optional: elaichi, kesar, gulab jal)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Shaping / Moulding (decorative moulds)</div>
                <div class="text-xs text-gray-500 italic">Garam rehte hue karna zaroori (>35°C); protein matrix glass transition ke upar pliable hota hai</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Garnishing (Optional: pista, kesar ke dhage, silver leaf)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded"><strong>Packaging & Refrigerated Storage</strong> (5 ± 2°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-xs text-gray-500 italic">Shelf life: 5–7 din (refrigerated); 30 din tak (MAP/vacuum + refrigeration)</div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Steps ki Detailed Explanation with Scientific Basis</h3>
            <ol class="list-decimal list-outside pl-5 space-y-6">
                <li><strong>Milk Reception, Testing & Standardization (PRP):</strong>
                    <p>Aane wale milk ko quality parameters ke liye test kiya jaata hai: fat (Gerber method), SNF (lactometer), acidity (titratable acidity ≤ 0.14% lactic acid), COB test (clot-on-boiling, negative hona chahiye), MBRT (methylene blue reduction time ≥ 2 h Grade I ke liye), aur adulteration tests (paani, starch, urea, neutralizers). Milk ko filter ya clarify kiya jaata hai physical impurities hatane ke liye.</p>
                    <p class="mt-2">Standardization <strong>Fat: 4.0–5.0%, SNF: 8.5%</strong> pe ki jaati hai. Fat-to-protein ratio critical hai — lagbhag 1.2–1.5:1 ratio sandesh ke liye optimal plasticity wala chhana deta hai. Higher fat levels protein gel mein "active filler" particles ka proportion badhate hain, jo texture ko soften karte hain. Cow milk ko strongly prefer kiya jaata hai kyunki:</p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li>Chhote fat globule size distribution (mode ≈ 3.5 µm vs. buffalo milk mein 5–8 µm) better emulsion stability aur smoother texture deta hai</li>
                        <li>Kam calcium aur casein content se zyada pliable curd banta hai</li>
                        <li>β-casein ka higher proportion (jo zyada hydrophobic aur kam calcium-sensitive hai) softer network favor karta hai</li>
                        <li>Safed rang (buffalo milk fat mein carotene nahi hota isliye buffalo se zyada safed product banta hai, lekin cow milk ka halka peela rang culturally preferred hai)</li>
                    </ul>
                </li>

                <li><strong>Milk ko 85–90°C tak Heating (CCP-1 — Pathogen Elimination):</strong>
                    <p>Yeh step <strong>dual purpose</strong> serve karta hai:</p>
                    <p><strong>(a) Microbiological Safety:</strong> Yeh primary kill step hai. 85°C pe 5 minutes heating se thermal process milta hai jo equivalent hai:</p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li><em>Listeria monocytogenes</em> ka > 6 log<sub>10</sub> reduction (D<sub>72°C</sub> = 1–4 s; target bahut zyada exceed hota hai)</li>
                        <li><em>Salmonella</em> spp. ka > 8 log<sub>10</sub> reduction (D<sub>72°C</sub> = 0.5–1 s)</li>
                        <li><em>E. coli</em> O157:H7 ka > 6 log<sub>10</sub> reduction (D<sub>72°C</sub> = 1–2 s)</li>
                        <li><em>Campylobacter</em>, <em>Yersinia</em>, aur zyaadatar vegetative pathogens ki effective elimination</li>
                        <li>Note: <em>Bacillus cereus</em> aur <em>Clostridium perfringens</em> ke spores survive karte hain lekin baad mein refrigeration se control hote hain</li>
                    </ul>
                    <p class="mt-2"><strong>(b) Enhanced Yield ke liye Whey Protein Denaturation:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li>85°C/5 min pe, lagbhag <strong>85–92% β-Lg</strong> aur <strong>>95% α-La</strong> denature ho jaata hai</li>
                        <li>Denatured β-Lg disulfide bonds ke through <strong>β-Lg–κ-casein complexes</strong> banata hai (β-Lg ka Cys<sup>121</sup> κ-casein ke Cys<sup>11</sup>–Cys<sup>88</sup> ke saath), micelle surface ko coat karta hai</li>
                        <li>Yeh complexes acid coagulum ka hissa ban jaate hain, HTST (72°C/15 s) pasteurization ki tulna mein chhana yield 5–8% increase karte hain</li>
                        <li>Whey protein-coated micelles zyada pH pe aggregate hote hain (5.3–5.4 vs. pure casein ke liye 4.6), yahi basis hai heat-acid coagulation ka jo pI se bahut upar hota hai</li>
                    </ul>
                    <p class="mt-2"><strong>Critical Limits:</strong> T ≥ 85°C, hold time ≥ 5 min. Calibrated thermometer/RTD se continuous recording ke saath monitor kiya jaata hai. Corrective action: agar temperature 85°C se neeche girta hai toh re-heat karo.</p>
                </li>

                <li><strong>Coagulation Temperature (70–80°C) tak Cooling (oPRP):</strong>
                    <p>Acid add karne se pehle milk ko 70–80°C tak cool kiya jaata hai. Yeh temperature range optimal hai kyunki:</p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li>Sufficient thermal energy ensure karti hai ki ab-denatured whey protein-casein complexes ka rapid, complete coagulation ho</li>
                        <li>Is temperature pe fat abhi liquid hai, isliye fat globules forming protein network mein efficiently entrap ho jaate hain bahar nikalne ki jagah</li>
                        <li>60°C se neeche, coagulation sluggish ho jaata hai, whey protein incorporation decrease hota hai, aur resulting chhana soft aur mushy hota hai jisko mould karna mushkil hota hai</li>
                        <li>85°C se upar, vigorous boiling curd ko disrupt karta hai, fat leakage ("oiling off") hoti hai, aur chhana hard aur grainy ho jaata hai</li>
                    </ul>
                </li>

                <li><strong>Acid Coagulation (CCP-2 — Texture aur Quality Control):</strong>
                    <p>1–2% citric acid solution (ya fresh nimbu ka ras) dheere dheere gentle stirring ke saath add kiya jaata hai jab tak pH <strong>5.2–5.4</strong> na ho jaaye aur clear, greenish-yellow whey curd se saaf alag na ho jaaye.</p>
                    <p class="mt-2"><strong>Coagulation ki Colloidal Chemistry:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li><strong>Charge neutralization:</strong> Jaise pH decrease hota hai, casein micelles ka zeta potential zero ki taraf jaata hai. Native pH 6.7 pe, zeta potential ≈ −20 mV; pH 5.4 pe, yeh lagbhag −5 se −8 mV tak gir jaata hai, electrostatic repulsion bahut kam ho jaata hai</li>
                        <li><strong>CCP dissolution:</strong> pH 5.3 pe lagbhag 40–60% colloidal calcium phosphate dissolve ho jaata hai, micellar framework ko partially disrupt karta hai. Lekin, ~40–60% rehta hai, jo residual cohesion provide karta hai jo chhana ko uski characteristic plastic (mouldable) texture deta hai — pure acid casein (pH 4.6) ke opposite jahaan lagbhag saara CCP dissolve ho jaata hai, crumbly product deta hai</li>
                        <li><strong>Hydrophobic aggregation:</strong> Charge repulsion minimize hone ke baad, exposed casein surfaces ke beech hydrophobic interactions protein–protein aggregation ko drive karte hain ek continuous gel network mein</li>
                        <li><strong>Fat entrapment:</strong> Milk fat globules (jo ab heat treatment ki wajah se partially coalesced hain) casein network mein physically trap ho jaate hain. Fat "active filler" ka kaam karta hai — globules jo matrix ke saath interact karte hain aur uski rigidity kam karte hain, chhana ki smooth, short texture mein contribute karte hain</li>
                    </ul>
                    <p class="mt-2"><strong>Critical Limits:</strong> pH = 5.2–5.4; Coagulation temperature = 70–80°C. Calibrated pH meter se monitor kiya jaata hai. Corrective action: agar pH < 5.0 hai, toh batch ko excessive hardness ke liye evaluate karo; agar pH > 5.6 hai, toh cautiously aur coagulant add karo.</p>
                    <p class="mt-2"><strong>Whey Composition:</strong> Alag hui whey ka greenish-yellow rang hota hai (riboflavin se), pH ~5.2–5.4, aur ismein residual lactose (~4.5%), minerals, water-soluble vitamins, aur traces of undenatured whey proteins hote hain. Is whey ko beverage preparation ya subsequent batches ke liye coagulant ke roop mein use kiya ja sakta hai (sour whey method).</p>
                </li>

                <li><strong>Settling, Draining & Pressing:</strong>
                    <p>Coagulated mass ko 5 minute settle hone dete hain, phir dhyaan se muslin cloth mein transfer karte hain. 15–30 minute latkaaya jaata hai ya 1–2 kg weight se halka press kiya jaata hai extra whey nikalne ke liye.</p>
                    <p class="mt-2"><strong>Chhana mein target moisture: 53–58%.</strong> Yeh sandesh quality ke liye critical hai. Moisture content in cheezon se influence hota hai:</p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li>Draining/pressing time aur applied force</li>
                        <li>Coagulation pH (lower pH → zyada moisture expulsion kyunki protein zyada contract hota hai)</li>
                        <li>Fat content (higher fat → moisture physically retain hota hai)</li>
                        <li>Whey drainage ka temperature (higher → faster drainage)</li>
                    </ul>
                    <p class="mt-2">Fresh chhana ko turant chilled water (4–8°C) mein 5–10 minute ke liye daalein taaki aage acidification ruke aur structure firm ho jaaye fat phase ki rapid cooling se (15°C se neeche fat crystallization se structural rigidity badhti hai).</p>
                </li>

                <li><strong>Chhana ki Kneading (oPRP — Texture Development):</strong>
                    <p>Yeh shayad sabse scientifically interesting aur skill-dependent step hai. Fresh chhana ko haath se (traditionally pathhar ki slab pe) ya mechanically planetary mixer se <strong>8–12 minutes</strong> tak knead kiya jaata hai jab tak yeh granular, crumbly mass se <strong>smooth, homogeneous, glossy paste</strong> mein transform na ho jaaye.</p>
                    <p class="mt-2"><strong>Kneading ke Dauran Rheological aur Structural Transformations:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Protein aggregates ka disruption:</strong> Coagulation ke dauran bane coarse casein aggregate network ko kneading ke shear forces se progressively tod diya jaata hai. Bade protein clusters (50–500 µm) chhote particles (<10 µm) mein fragment ho jaate hain, ek fine, smooth dispersion create karte hain.</li>
                        <li><strong>Fat redistribution:</strong> Protein aggregates mein entrapped fat globules release hote hain aur poore matrix mein redistribute ho jaate hain. Kuch fat globules coalesce ho jaate hain, aur free fat generate hota hai, jo protein particles ko coat karta hai aur lubricant ka kaam karta hai. Isse characteristic "short" (non-elastic, smooth) texture aata hai.</li>
                        <li><strong>Moisture redistribution:</strong> Bound aur entrapped paani uniformly redistribute hota hai. Whey ke localized pockets protein-fat particles ke aas-paas continuous aqueous phase mein disperse ho jaate hain.</li>
                        <li><strong>Protein hydration:</strong> Mechanical working se aqueous phase ke sampark mein aane wale protein particles ka surface area badh jaata hai, hydration improve hoti hai. Hydrated casein particles thode swell hote hain aur zyada cohesive ban jaate hain.</li>
                        <li><strong>Particulate gel se paste mein transition:</strong> System particulate protein gel se (jahaan discrete protein aggregates weak bonds se linked hain) concentrated <strong>protein paste/suspension</strong> mein transition hota hai — continuous fat-moisture phase jismein finely dispersed protein particles hain. Rheologically, material brittle solid se <strong>viscoelastic paste</strong> mein change hota hai jismein significant yield stress hota hai.</li>
                    </ul>
                    <p class="mt-2"><strong>Endpoint indicator:</strong> Knead kiya hua chhana smooth feel hona chahiye (ungliyon ke beech dabane pe koi graininess nahi), thoda glossy (surface fat), aur hatheli pe chipakna nahi chahiye. Under-kneading se grainy sandesh banta hai; over-kneading se excessive fat separation (oily texture) ho sakta hai.</p>
                    <p class="mt-2"><strong>oPRP considerations:</strong> Is step mein extensive hand contact hota hai (traditional production mein), <em>Staphylococcus aureus</em> contamination ka high-risk point banata hai skin, haath, aur nasal carriers se. Controls mein shamil hain: mandatory haath dhona aur sanitization, food-grade gloves ka use, workers ki health screening, aur chhana temperature < 40°C rakhna microbial proliferation limit karne ke liye. Mechanized operations mein, sanitized stainless-steel planetary mixers ka use direct hand contact eliminate karta hai.</p>
                </li>

                <li><strong>Sugar Mixing (oPRP):</strong>
                    <p>Powdered sugar (chhana ke weight ka 25–35%, desired meethas aur variety ke according) kneaded chhana mein add kiya jaata hai aur uniformly mix kiya jaata hai.</p>
                    <p class="mt-2"><strong>Sugar ka Role:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Meethas:</strong> Primary taste attribute; final product mein sucrose concentration sweetness intensity govern karti hai (detection threshold ~1%; recognition threshold ~2%)</li>
                        <li><strong>Water activity (a<sub>w</sub>) depression:</strong> Dissolved sucrose aqueous phase ki osmotic pressure badhaakar a<sub>w</sub> kam karta hai. Har 10% sucrose addition se a<sub>w</sub> lagbhag 0.03–0.04 units kam hota hai. Final product mein, a<sub>w</sub> typically 0.85–0.92 range mein hota hai, jo bahut saare pathogens ke growth minimum se neeche hai lekin yeast aur mold growth abhi bhi permit karta hai.</li>
                        <li><strong>Texture modification:</strong> Sugar paani ke liye protein se compete karta hai, protein hydration kam karti hai aur firmer texture mein contribute karta hai. Cooling ke dauran, dissolved sucrose partially recrystallize ho sakta hai (specially kara pak sandesh mein), "short" bite mein contribute karta hai.</li>
                        <li><strong>Humectant effect:</strong> Moderate concentrations mein, sugar moisture retain karta hai aur surface drying delay karta hai.</li>
                        <li><strong>Maillard reaction substrate:</strong> Sucrose directly Maillard reactions mein reactive nahi hai (yeh non-reducing sugar hai). Lekin, sandesh system ke cooking temperatures aur low pH pe, sucrose ka partial inversion glucose + fructose mein hota hai (sucrose hydrolysis), aur yeh reducing sugars casein pe free amino groups (lysine residues ka ε-NH<sub>2</sub>) ke saath Maillard browning mein participate kar sakte hain.</li>
                    </ul>
                    <p class="mt-2">Powdered (icing) sugar ko granulated sugar se prefer kiya jaata hai kyunki fine particle size (<200 µm) limited moisture wale chhana mein rapid dissolution ensure karta hai, gritty texture rokt hai (undissolved sugar crystals >15 µm pe organoleptically detectable hote hain).</p>
                </li>

                <li><strong>Low-Temperature Cooking (CCP-3 — Product Safety & Texture):</strong>
                    <p>Chhana–sugar mixture ko heavy-bottomed pan (traditionally <em>kadhai</em> ya non-stick pan) mein transfer kiya jaata hai aur <strong>75–85°C pe 10–20 minutes</strong> tak continuous stirring aur scraping ke saath cook kiya jaata hai taaki localized overheating aur sticking na ho.</p>
                    <p class="mt-2"><strong>Cooking ke Dauran Physicochemical Transformations:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Moisture evaporation:</strong> Primary physical change. Moisture content ~50–55% (chhana + sugar mix) se ~20–35% finished sandesh mein decrease hota hai (naram vs. kara pak pe depend karta hai). Isse solids concentrate hote hain, a<sub>w</sub> depression increase hoti hai (typical final a<sub>w</sub> = 0.85–0.90), aur texture firm hota hai. Evaporation rate pan surface area, heating rate, aur stirring efficiency pe depend karti hai.</li>
                        <li><strong>Sugar dissolution aur distribution:</strong> Koi bhi remaining undissolved sugar crystals heated aqueous phase mein completely dissolve ho jaate hain. Resulting concentrated sugar solution (aqueous phase mein 60–70% sucrose) protein-fat particles ke liye continuous binding medium ka kaam karti hai.</li>
                        <li><strong>Protein denaturation aur aggregation:</strong> Kisi bhi residual native whey proteins ka further thermal denaturation hota hai. Existing protein aggregates elevated temperature pe hydrophobic interactions aur disulfide bond formation ke through further cross-linking undergo kar sakte hain, cooling pe product ke setting mein contribute karte hain.</li>
                        <li><strong>Fat melting aur redistribution:</strong> Cooking temperatures pe, saara milk fat liquid state mein hota hai (cow milk fat ke liye ~40°C se upar complete melting). Isse protein particles ki further redistribution aur coating hoti hai, smoothness enhance hoti hai.</li>
                        <li><strong>Maillard reaction:</strong> 75–85°C pe, reducing sugars (sucrose inversion se) aur casein pe amino groups ke beech slow Maillard reactions hoti hain, produce karti hain:
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>Amadori rearrangement products → Strecker aldehydes → melanoidins</li>
                                <li>Volatile flavor compounds (jaise furfural, maltol, diacetyl) jo characteristic "cooked milk" aroma mein contribute karte hain</li>
                                <li>Halka brown rang (extended cooking/kara pak mein); naram pak ke liye, cooking time limited rakhte hain browning minimize karne ke liye</li>
                            </ul>
                        </li>
                        <li><strong>Sucrose inversion:</strong> pH ~5.2–5.4 aur 80°C pe, sucrose acid-catalyzed hydrolysis undergo karta hai: Sucrose → Glucose + Fructose. Inversion ki rate significant hai (t<sub>½</sub> ≈ kuch ghante 80°C, pH 5.0 pe), cooking time ke according ~5–15% inversion hota hai. Inversion sugars sweetness perception badhate hain (fructose sucrose se 1.7× zyada meetha hai), a<sub>w</sub> zyada effectively kam karte hain (per gram zyada osmoles), aur Maillard browning mein contribute karte hain.</li>
                        <li><strong>Microbial safety:</strong> 75–85°C pe cooking ek additional thermal kill step provide karti hai. Post-coagulation contamination (kneading, sugar addition, bartan se) address hota hai. Vegetative pathogens (<em>S. aureus</em>, <em>E. coli</em>, <em>Salmonella</em>) ke in temperatures pe D-values <1 s hain, toh temperature reach hone ke seconds mein effective elimination hoti hai. Lekin, pehle se bane <em>S. aureus</em> enterotoxins (SEA, SEB, etc.) heat-stable hain aur survive karenge — isliye kneading/mixing stage ke dauran <em>S. aureus</em> growth aur toxin production ki prevention essential hai (oPRP controls).</li>
                    </ul>
                    <p class="mt-2"><strong>Endpoint Determination:</strong> Mixture tab tak cook kiya jaata hai jab tak:</p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li>Mass pan ke sides aur bottom se saaf chhode</li>
                        <li>Ek ball banaayi ja sake jo hatheli pe chipke nahi</li>
                        <li>Texture pliable lekin firm ho, runny ya excessively dry nahi</li>
                        <li>Naram pak ke liye: surface pe slight moisture sheen; kara pak ke liye: completely dry aur thoda hard</li>
                    </ul>
                    <p class="mt-2"><strong>Critical Limits:</strong> Core temperature ≥ 75°C ≥ 10 min ke liye; endpoint pe moisture content ≤ 35% (naram pak) ya ≤ 20% (kara pak). Calibrated thermometer aur endpoint observation se monitor kiya jaata hai. Corrective action: agar under-cooked hai, toh heating continue karo; agar over-cooked hai, toh batch ko divert karna pad sakta hai (hard texture, excessive browning).</p>
                </li>

                <li><strong>Cooling aur Flavoring:</strong>
                    <p>Cooked mass ko clean, sanitized surface (stainless steel ya marble slab) pe transfer karte hain aur ~40–50°C tak cool karte hain. Is cooling phase mein:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Fat crystallization:</strong> Jaise temperature ~40°C se neeche girta hai, milk fat crystallize hona shuru hota hai (cow milk fat ki wide melting range hai: 10–40°C). Protein matrix ke andar crystallize hota hua fat final product ko structural rigidity provide karta hai. Crystallization ki extent cooling rate pe depend karti hai — slow cooling se bade, zyada stable β′ aur β polymorphic crystals bante hain, jo firmer product dete hain.</li>
                        <li><strong>Sugar supersaturation aur microcrystallization:</strong> Temperature decrease hone pe, sugar solution phase supersaturated ho jaata hai. Fine sucrose microcrystals nucleate ho sakte hain, kuch sandesh varieties ki characteristic slightly grainy (pleasant tarike se) ya "short" texture mein contribute karte hain. Agar crystals bahut bade ho jaayein (>15 µm), toh unpleasant sandy texture aata hai. Rapid cooling aur milk proteins ki presence (jo crystallization inhibitors ka kaam karte hain) fine crystal size maintain karne mein madad karte hain.</li>
                        <li><strong>Protein matrix setting:</strong> Kam temperatures pe hydrophobic interactions strengthen hote hain (entropy-driven effect), aur protein network apna final set structure achieve karta hai.</li>
                    </ul>
                    <p class="mt-2">Flavoring agents is cooling phase mein add kiye jaate hain volatile loss minimize karne ke liye:</p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li><strong>Elaichi (cardamom):</strong> Ismein 1,8-cineole, α-terpinyl acetate, limonene hota hai; ground powder ke roop mein 0.3–0.5% add kiya jaata hai</li>
                        <li><strong>Kesar (saffron):</strong> Ismein crocin (rang), picrocrocin (kadwa taste), safranal (aroma) hota hai; garam doodh mein bheega kar add kiya jaata hai</li>
                        <li><strong>Gulab jal (rose water):</strong> Ismein citronellol, geraniol, nerol hota hai; 1–2% add kiya jaata hai</li>
                        <li><strong>Aam ka pulp, pista paste, chocolate</strong> — flavored varieties ke liye</li>
                    </ul>
                </li>

                <li><strong>Shaping aur Moulding:</strong>
                    <p>Jab tak garam aur pliable hai (sugar-protein matrix ke glass transition temperature se upar, lagbhag 30–40°C moisture pe depend karta hai), mass ko portion karke decorative moulds mein press kiya jaata hai. Traditional moulds lakdi se carved hote hain (<em>sãch</em>); food-grade silicone ya polycarbonate moulds modern production mein use hote hain.</p>
                    <p class="mt-2">Moulding ke dauran rheological behavior ko <strong>Herschel-Bulkley fluid</strong> ke roop mein describe kiya ja sakta hai (yield stress + shear-thinning behavior): material ko flow initiate karne ke liye initial force chahiye (yield stress), uske baad yeh flow karta hai aur mould details ko fill karta hai. Release hone pe, yield stress aur rapid structural recovery (thixotropy) ki wajah se shape retain karta hai.</p>
                </li>

                <li><strong>Garnishing (Optional):</strong>
                    <p>Garnishes mein sliced pista, badam, kesar ke dhage, sukhe gulab ki pattiyan, ya edible silver leaf (<em>vark</em>) shamil hain. In ingredients ko FSSAI standards ke according food-grade quality comply karna chahiye aur hygienically store aur handle karna chahiye taaki is late, post-thermal-treatment stage pe contaminants introduce na hon.</p>
                </li>

                <li><strong>Packaging aur Storage (oPRP):</strong>
                    <p>Sandesh ek <strong>perishable product</strong> hai jismein high water activity (a<sub>w</sub> = 0.85–0.92) aur near-neutral se mildly acidic pH (finished product mein 5.5–6.0) hota hai, jisse yeh in cheezon ke liye susceptible zone mein aata hai:</p>
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li><em>Pseudomonas</em> spp., lactic acid bacteria, yeasts (<em>Candida</em>, <em>Rhodotorula</em>), aur molds (<em>Penicillium</em>, <em>Aspergillus</em>, <em>Mucor</em>) se spoilage</li>
                        <li><em>Staphylococcus aureus</em> (min a<sub>w</sub> = 0.83), <em>Bacillus cereus</em>, <em>Listeria monocytogenes</em> ki potential growth (agar post-cooking recontaminate ho)</li>
                    </ul>
                    <p class="mt-2"><strong>Packaging strategies:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Traditional:</strong> Parchment paper lining wale cardboard boxes; shelf life 2–3 din ambient pe (25–30°C), 5–7 din refrigerated (5 ± 2°C)</li>
                        <li><strong>Modified Atmosphere Packaging (MAP):</strong> PET/PE trays mein N<sub>2</sub> ya CO<sub>2</sub> flushing (70% N<sub>2</sub> + 30% CO<sub>2</sub>) se shelf life 5°C pe 15–30 din tak extend hoti hai aerobic spoilage organisms aur molds ko inhibit karke</li>
                        <li><strong>Vacuum packaging:</strong> O<sub>2</sub> ko <1% tak reduce karta hai, aerobic organisms aur lipid oxidation inhibit karta hai; shelf life ~20–25 din 5°C pe</li>
                        <li><strong>Active packaging:</strong> Oxygen scavengers (iron-based sachets) ya antimicrobial agents (nisin-coated films, essential oil-infused packaging) ka incorporation shelf life aur extend kar sakta hai</li>
                    </ul>
                    <p class="mt-2"><strong>Storage temperature:</strong> 5 ± 2°C pe refrigeration mandatory hai. Sandesh mein microbial growth ke liye Q<sub>10</sub> lagbhag 2–3 hai, matlab har 10°C storage temperature mein increase se spoilage ki rate lagbhag double se triple ho jaati hai. 30°C pe, shelf life <24 ghante ho sakta hai; 5°C pe, 5–7 din (unpackaged).</p>
                    <p class="mt-2"><strong>Lipid oxidation:</strong> Sandesh mein milk fat oxidative deterioration ke liye susceptible hai (unsaturated fatty acids ka auto-oxidation, particularly oleic acid C18:1 aur linoleic acid C18:2), jisse off-flavors aate hain (rancid, cardboard jaisa). Light exposure riboflavin sensitization ke through photo-oxidation accelerate karta hai. Isliye, light-barrier packaging (opaque ya amber) recommend ki jaati hai.</p>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">HACCP-Based Hazard Analysis Summary</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Step</th>
                            <th class="p-2 border">Hazard Type</th>
                            <th class="p-2 border">Specific Hazard</th>
                            <th class="p-2 border">Control Measure</th>
                            <th class="p-2 border">Classification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border">Milk Reception</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border"><em>Salmonella</em>, <em>Brucella</em>, <em>M. bovis</em>, <em>L. monocytogenes</em>, <em>E. coli</em> O157:H7</td>
                            <td class="p-2 border">Supplier qualification, MBRT, COB test, platform tests</td>
                            <td class="p-2 border">PRP</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Milk Reception</td>
                            <td class="p-2 border">Chemical</td>
                            <td class="p-2 border">Antibiotic residues, pesticides, aflatoxin M1, adulterants (urea, melamine, neutralizers)</td>
                            <td class="p-2 border">Supplier testing, rapid screening kits, FSSAI limits compliance</td>
                            <td class="p-2 border">PRP</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Milk Reception</td>
                            <td class="p-2 border">Physical</td>
                            <td class="p-2 border">Dhool-mitti, baal, keede, metal fragments</td>
                            <td class="p-2 border">Filtration, sedimentation test</td>
                            <td class="p-2 border">PRP</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Heating (85–90°C)</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border">Vegetative pathogens ka survival</td>
                            <td class="p-2 border">T ≥ 85°C, t ≥ 5 min; continuous monitoring</td>
                            <td class="p-2 border font-bold text-red-600">CCP-1</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Coagulation</td>
                            <td class="p-2 border">Quality / Biological</td>
                            <td class="p-2 border">Galat pH → kharab texture; bahut high pH → incomplete coagulation & microbial risk</td>
                            <td class="p-2 border">pH 5.2–5.4; calibrated pH meter; trained operator</td>
                            <td class="p-2 border font-bold text-red-600">CCP-2</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Draining & Pressing</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border">Muslin cloth, environment se recontamination</td>
                            <td class="p-2 border">Sanitized cloths ka use; saaf environment; rapid processing</td>
                            <td class="p-2 border">oPRP</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Kneading</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border">Haath ke contact se <em>S. aureus</em>; environmental contamination</td>
                            <td class="p-2 border">Haath ki hygiene, gloves, health screening; mechanical kneading preferred</td>
                            <td class="p-2 border">oPRP</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Sugar Addition</td>
                            <td class="p-2 border">Physical / Chemical</td>
                            <td class="p-2 border">Sugar mein foreign matter; non-permitted sweeteners</td>
                            <td class="p-2 border">Chhaanna (sieving); supplier COA; FSSAI-compliant sugar</td>
                            <td class="p-2 border">PRP</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Cooking (75–85°C)</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border">Post-contamination pathogens ka survival</td>
                            <td class="p-2 border">T ≥ 75°C, t ≥ 10 min; continuous stirring</td>
                            <td class="p-2 border font-bold text-red-600">CCP-3</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Cooling, Moulding, Garnishing</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border">Post-process recontamination (haath, moulds, garnishes, hawa)</td>
                            <td class="p-2 border">Sanitized equipment; personnel hygiene; clean room conditions; danger zone (60–10°C) se 2 ghante mein rapid cooling</td>
                            <td class="p-2 border">oPRP</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Packaging & Storage</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border">Storage ke dauran microbial proliferation; yeast/mold spoilage</td>
                            <td class="p-2 border">Refrigeration (5 ± 2°C); MAP/vacuum packaging; cold chain maintenance</td>
                            <td class="p-2 border">oPRP</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Water Activity (a<sub>w</sub>) aur Shelf Life ka Relationship</h3>
            <p>Water activity sandesh ki shelf life aur microbial safety govern karne wala sabse important intrinsic factor hai. Sandesh ki a<sub>w</sub> dissolved solutes (primarily sucrose, lactose, aur mineral salts) ke combined effect aur paani ki protein matrix ke saath interaction (casein pe polar groups ke saath hydrogen bonding ke through bound water) se determine hoti hai.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Sandesh Type</th>
                            <th class="p-2 border">Typical Moisture (%)</th>
                            <th class="p-2 border">Typical a<sub>w</sub></th>
                            <th class="p-2 border">Shelf Life (5°C)</th>
                            <th class="p-2 border">Dominant Spoilage Flora</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border">Kachagolla (raw)</td>
                            <td class="p-2 border">35–45</td>
                            <td class="p-2 border">0.92–0.96</td>
                            <td class="p-2 border">2–3 din</td>
                            <td class="p-2 border"><em>Pseudomonas</em>, coliforms, yeasts</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Naram Pak</td>
                            <td class="p-2 border">25–35</td>
                            <td class="p-2 border">0.87–0.92</td>
                            <td class="p-2 border">5–7 din</td>
                            <td class="p-2 border">Yeasts, molds, LAB</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Kara Pak</td>
                            <td class="p-2 border">15–20</td>
                            <td class="p-2 border">0.80–0.87</td>
                            <td class="p-2 border">15–30 din</td>
                            <td class="p-2 border">Xerophilic molds (<em>Aspergillus</em>), osmophilic yeasts</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3">Sandesh ka <strong>moisture sorption isotherm</strong> Type II (sigmoid) curve follow karta hai, BET monolayer moisture content lagbhag 4–6% pe (a<sub>w</sub> ≈ 0.2–0.3 ke corresponding). Is moisture se neeche, product extremely stable hai lekin organoleptically unacceptable hai (hard, dry). Naram pak sandesh ke liye target a<sub>w</sub> (0.87–0.92) us region mein hai jahaan:</p>
            <ul class="list-disc list-outside pl-5 mt-1">
                <li>Zyaadatar bacteria inhibited hain (min a<sub>w</sub> <em>Salmonella</em> ke liye = 0.94; <em>E. coli</em> = 0.95; <em>C. botulinum</em> type A = 0.94)</li>
                <li><em>S. aureus</em> abhi bhi grow kar sakta hai (growth ke liye min a<sub>w</sub> = 0.83, toxin production ke liye 0.86) — refrigeration ki zaroorat reinforce karta hai</li>
                <li>Yeasts aur molds active rehte hain (zyaadatar species ke liye min a<sub>w</sub> = 0.61–0.80)</li>
                <li>Enzymatic browning aur lipid oxidation rates moderate lekin significant hain 7 din se zyada storage periods pe</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Sandesh ka Texture Profile Analysis (TPA)</h3>
            <p>Texture analyzer (jaise TA.XT Plus, Stable Micro Systems) ka use karke Instrumental Texture Profile Analysis (TPA) sandesh quality ki objective characterization deta hai. Achhi quality naram pak sandesh ke typical TPA parameters:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">TPA Parameter</th>
                            <th class="p-2 border">Typical Range</th>
                            <th class="p-2 border">Significance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Hardness (N)</td><td class="p-2 border">5–25</td><td class="p-2 border">Pehli compression ke liye required force; moisture content aur cooking ki degree se directly correlate karta hai</td></tr>
                        <tr><td class="p-2 border">Cohesiveness</td><td class="p-2 border">0.3–0.6</td><td class="p-2 border">Doosri compression ke dauran positive force area ka pehli se ratio; protein-fat-sugar matrix ki internal binding strength reflect karta hai</td></tr>
                        <tr><td class="p-2 border">Springiness</td><td class="p-2 border">0.4–0.7</td><td class="p-2 border">Compressions ke beech recovery; kam values "short" (non-elastic) texture indicate karte hain — sandesh ke liye desirable</td></tr>
                        <tr><td class="p-2 border">Gumminess (N)</td><td class="p-2 border">2–12</td><td class="p-2 border">Hardness × Cohesiveness; product ko nigalne ke liye disintegrate karne mein lagni wali energy</td></tr>
                        <tr><td class="p-2 border">Chewiness (N·mm)</td><td class="p-2 border">1–8</td><td class="p-2 border">Gumminess × Springiness; chabane ke liye required total work</td></tr>
                        <tr><td class="p-2 border">Adhesiveness (N·s)</td><td class="p-2 border">< 0.5 (low)</td><td class="p-2 border">Daanton/taaloo pe chipakne ki tendency; achhe sandesh mein minimal honi chahiye</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3">Jo factors hardness badhate hain: kam moisture, zyada cooking time/temperature, zyada sugar proportion, kam fat content, buffalo milk ka use. Jo factors hardness kam karte hain: zyada moisture, zyada fat, chhoti cooking, cow milk ka use, khoa ya cream add karna.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shelf Life Extension Technologies</h3>
            <p>Traditional sandesh ki shelf life bahut limited hai (refrigeration mein bhi 2–7 din), jo iski market reach ko limit karta hai. Kai technological interventions investigate ki gayi hain:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Technology</th>
                            <th class="p-2 border">Principle</th>
                            <th class="p-2 border">Reported Shelf Life Extension</th>
                            <th class="p-2 border">Limitations</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border">Modified Atmosphere Packaging (MAP)</td>
                            <td class="p-2 border">Hawa ko N<sub>2</sub>/CO<sub>2</sub> se replace karo; aerobes aur molds inhibit karo</td>
                            <td class="p-2 border">6°C pe 20–30 din (vs. 5–7 din control)</td>
                            <td class="p-2 border">Equipment cost; zyada concentration pe CO<sub>2</sub> se slight acidic off-taste; package integrity critical</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Vacuum Packaging</td>
                            <td class="p-2 border">O<sub>2</sub> hataao; aerobes aur oxidation inhibit karo</td>
                            <td class="p-2 border">6°C pe 20–25 din</td>
                            <td class="p-2 border">Anaerobic spoilers grow kar sakte hain; package collapse se shape affect ho sakta hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Nisin addition</td>
                            <td class="p-2 border"><em>Lactococcus lactis</em> se bacteriocin; Gram-positive bacteria pe pore-forming activity</td>
                            <td class="p-2 border">6°C pe 25–35 din (100–200 IU/g pe)</td>
                            <td class="p-2 border">Limited spectrum (sirf Gram-positives); food additive ke roop mein regulatory status; "additives" ko lekar consumer perception</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Potassium sorbate (0.1%)</td>
                            <td class="p-2 border">Enzyme systems (dehydrogenases) mein interfere karke yeasts aur molds inhibit karta hai</td>
                            <td class="p-2 border">Ambient pe 15–20 din, 6°C pe 30+ din</td>
                            <td class="p-2 border">FSSAI limits comply karna zaroori (sorbic acid ke roop mein max 1000 ppm); zyada concentrations pe off-taste</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Natamycin (surface treatment)</td>
                            <td class="p-2 border">Polyene antifungal; fungal cell membranes mein ergosterol se bind hota hai</td>
                            <td class="p-2 border">20–30 din tak effective mold inhibition</td>
                            <td class="p-2 border">Sirf surface application; bacteria ke khilaaf effective nahi; regulatory approval chahiye</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Retort processing</td>
                            <td class="p-2 border">Thermal sterilization (121°C/15 min equivalent F<sub>0</sub>)</td>
                            <td class="p-2 border">Ambient pe 3–6 mahine</td>
                            <td class="p-2 border">Severe texture degradation (browning, hardening); flavor profile significantly change; traditional sandesh ke liye commercially viable nahi</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">High Hydrostatic Pressure (HHP)</td>
                            <td class="p-2 border">Non-thermal; 400–600 MPa 5–15 min ke liye; microbial cell membranes disrupt karta hai aur enzymes denature karta hai</td>
                            <td class="p-2 border">4°C pe 30–45 din (laboratory studies)</td>
                            <td class="p-2 border">High capital cost; protein structure aur texture alter ho sakta hai; India mein limited commercial adoption</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">UV-C surface decontamination</td>
                            <td class="p-2 border">254 nm UV radiation; microbial DNA mein pyrimidine dimers banata hai</td>
                            <td class="p-2 border">Control ke upar additional 3–5 din extension</td>
                            <td class="p-2 border">Sirf surface treatment; limited penetration; lipid photo-oxidation cause kar sakta hai; rang mein changes</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Edible coatings (chitosan, whey protein isolate)</td>
                            <td class="p-2 border">Moisture aur gas exchange ke liye barrier; chitosan mein inherent antimicrobial activity hai</td>
                            <td class="p-2 border">6°C pe additional 5–10 din</td>
                            <td class="p-2 border">Surface texture aur appearance affect ho sakta hai; consumer awareness chahiye</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Sandesh mein Quality Defects — Karan aur Roktham</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Defect</th>
                            <th class="p-2 border">Karan</th>
                            <th class="p-2 border">Scientific Explanation</th>
                            <th class="p-2 border">Roktham (Prevention)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border">Grainy / Sandy texture</td>
                            <td class="p-2 border">Kam kneading; bade sugar crystals; excessive lactose</td>
                            <td class="p-2 border">25 µm se bade protein aggregates jeebh ko detect hote hain; 15 µm se bade sucrose crystals gritty feel hote hain; lactose crystals (α-lactose monohydrate) inherently sandy hote hain (kam solubility, 20°C pe 17 g/100 mL)</td>
                            <td class="p-2 border">Acchi tarah kneading (8–12 min); powdered sugar use karo; milk quality se lactose control karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Hard / Dry texture</td>
                            <td class="p-2 border">Zyada cooking; kam fat chhana; buffalo milk; excessive pressing</td>
                            <td class="p-2 border">Excessive moisture removal se protein matrix optimal se zyada concentrate ho jaata hai; kam fat matlab protein–protein bonds interrupt karne ke liye kam "active filler" particles</td>
                            <td class="p-2 border">Cooking time/temperature control karo; 4–5% fat wala cow milk use karo; chhana moisture 53–58% target karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Soft / Pasty / Sticky</td>
                            <td class="p-2 border">Kam cooking; high moisture chhana; incomplete coagulation (high pH)</td>
                            <td class="p-2 border">Insufficient moisture removal se excess free water rehta hai; high pH chhana mein kamzor protein aggregation hoti hai</td>
                            <td class="p-2 border">Sahi endpoint tak adequate cooking ensure karo; coagulation pH 5.2–5.4 maintain karo; proper draining karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Crumbly (cohesion nahi)</td>
                            <td class="p-2 border">Over-acidification (pH < 5.0); excessive CCP dissolution</td>
                            <td class="p-2 border">pH < 5.0 pe, lagbhag saara colloidal calcium phosphate dissolve ho jaata hai, aur casein micelles apne internal cross-links kho dete hain. Result highly aggregated lekin non-cohesive, crumbly protein mass hota hai acid casein jaisa.</td>
                            <td class="p-2 border">Coagulation ke dauran strict pH control (5.2–5.4); buffered coagulant use karo (citric acid preferred hai HCl ya strong acids se)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Excessive browning</td>
                            <td class="p-2 border">High cooking temperature; prolonged cooking; high reducing sugar content</td>
                            <td class="p-2 border">Maillard reaction rate temperature ke saath exponentially increase hoti hai (lagbhag har 10°C pe double). Inverted sucrose Maillard substrates ke roop mein zyada reducing sugars provide karta hai.</td>
                            <td class="p-2 border">Cooking temperature control karo (naram pak ke liye ≤85°C); prolonged heating avoid karo; freshly prepared sugar solutions use karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Khatta / Acidic taste</td>
                            <td class="p-2 border">Excess coagulant; delayed processing; microbial acid production</td>
                            <td class="p-2 border">Chhana mein residual citric acid tanginess deta hai; LAB holding ke dauran lactic acid produce kar sakte hain</td>
                            <td class="p-2 border">Precise acid addition; draining ke baad chhana ko thande paani mein dho lo; turant process karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Oily / Greasy surface</td>
                            <td class="p-2 border">Excessive fat; high cooking temperature; over-kneading</td>
                            <td class="p-2 border">Damaged fat globule membranes se release hua free fat surface pe migrate karta hai; high temperature se fat completely pighal jaata hai aur protein-fat binding disrupt hota hai</td>
                            <td class="p-2 border">Milk fat ko 4–5% pe standardize karo; rapid/high-temperature cooking avoid karo; kneading time optimize karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Surface pe mold growth</td>
                            <td class="p-2 border">Inadequate packaging; ambient temperature pe storage; post-process contamination</td>
                            <td class="p-2 border">Sandesh a<sub>w</sub> (0.85–0.92) mold growth support karta hai; <em>Penicillium</em> aur <em>Aspergillus</em> ke spores hawa mein har jagah hote hain</td>
                            <td class="p-2 border">MAP/vacuum packaging; strict refrigeration; clean room mein moulding; potassium sorbate (agar permitted ho)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Off-flavor (rancid, baasi)</td>
                            <td class="p-2 border">Lipid oxidation; purane/stored chhana ka use; light exposure</td>
                            <td class="p-2 border">Unsaturated FAs ka auto-oxidation hydroperoxides produce karta hai → aldehydes (hexanal, nonanal); residual milk lipase ke through lipolysis se short-chain FAs (butyric, caproic) release hote hain jo rancid flavor dete hain</td>
                            <td class="p-2 border">Freshly prepared chhana use karo; opaque packaging; refrigeration oxidation slow karta hai (activation energy effect)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Yield Calculation</h3>
            <p>Milk se chhana ka yield aur phir chhana se sandesh ka yield estimate kar sakte hain:</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Milk se Chhana yield:</strong> Typically 100 mL cow milk (4.5% fat, 8.5% SNF pe) se 15–18 g chhana banta hai, matlab lagbhag <strong>15–18% yield</strong>. Chhana mein milk solids ki recovery total solids ka lagbhag 50–55% hai.</li>
                <li><strong>Chhana se Sandesh yield:</strong> 25–30% sugar addition aur cooking ke dauran 10–20% moisture loss ke saath, lagbhag <strong>100 g chhana se 110–120 g sandesh</strong> (naram pak ke liye).</li>
                <li><strong>Overall:</strong> Lagbhag <strong>1 kg cow milk se 150–180 g chhana banta hai, jisse ~170–210 g naram pak sandesh produce hota hai.</strong></li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Microbiological Considerations aur Spoilage Pattern</h3>
            <p>Sandesh ki spoilage microbiology ek predictable succession pattern follow karti hai jo product ke intrinsic parameters (a<sub>w</sub>, pH, nutrient availability) aur storage conditions se determine hoti hai:</p>
            <ol class="list-decimal list-outside pl-5 space-y-2">
                <li><strong>Day 0–2 (Lag Phase):</strong> Initial microbial load (post-cooking recontamination se) low hota hai. TPC typically 10²–10³ cfu/g. Product quality apne peak pe hoti hai.</li>
                <li><strong>Day 2–5 (5°C pe Early Spoilage):</strong> Psychrotrophic bacteria (<em>Pseudomonas</em> spp.) agar present hain toh multiplication shuru karte hain. Surface yeasts (<em>Candida</em>, <em>Debaryomyces</em>) visible colony formation shuru karte hain. LAB (<em>Lactobacillus</em>, <em>Streptococcus</em>) activity se slight khatta taste develop ho sakta hai.</li>
                <li><strong>Day 5–7 (Active Spoilage):</strong> TPC 10⁵ cfu/g se exceed ho jaata hai. Surfaces pe visible mold spots (<em>Penicillium</em>, <em>Aspergillus</em>, <em>Mucor</em>) dikhte hain. Off-flavors pronounced ho jaate hain (khatta, yeasty, musty). Bacterial exopolysaccharides se surface slimy ho jaata hai. Product ab acceptable nahi rahta.</li>
                <li><strong>Day 7+ (Advanced Spoilage):</strong> Extensive mold growth, proteolysis (casein degradation se bitter peptides), lipolysis (rancid flavors), yeasts se gas production (sealed packages mein swelling).</li>
            </ol>
            <p class="mt-2">Ambient temperature (25–30°C) pe, yeh poora spoilage sequence 12–36 ghanton mein compress ho jaata hai, cold chain maintenance ki absolute necessity ko reinforce karta hai.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Sensory Evaluation Parameters</h3>
            <p>Sandesh ki sensory evaluation typically 9-point hedonic scale ya descriptive analysis se ki jaati hai in attributes ke saath:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Attribute</th>
                            <th class="p-2 border">Ideal Description</th>
                            <th class="p-2 border">Overall Score mein Weight (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Rang aur Dikhawat (Color & Appearance)</td><td class="p-2 border">Uniform creamy white se light yellow; smooth, glossy surface; well-defined mould impressions; koi cracks ya surface drying nahi</td><td class="p-2 border">15</td></tr>
                        <tr><td class="p-2 border">Body aur Texture</td><td class="p-2 border">Smooth, firm lekin tender; muh mein ghulne wala; grainy, hard, crumbly, ya sticky nahi; short (non-elastic) bite</td><td class="p-2 border">35</td></tr>
                        <tr><td class="p-2 border">Flavor aur Taste</td><td class="p-2 border">Balanced meethas; clean dairy/milk flavor; subtle cooked note; koi sourness, bitterness, ya off-flavors nahi</td><td class="p-2 border">40</td></tr>
                        <tr><td class="p-2 border">Overall Acceptability</td><td class="p-2 border">Saare attributes ka integrated perception</td><td class="p-2 border">10</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Recent Research aur Innovations</h3>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Low-calorie / Diabetic sandesh:</strong> Sucrose ko stevia (steviol glycosides), sucralose, ya polydextrose se replace karna. Studies mein stevia ke saath 50% tak sucrose replacement pe acceptable sensory quality report hui hai, lekin slight bitter aftertaste abhi bhi challenge hai. Reduced a<sub>w</sub> depression ke liye compensatory antimicrobial strategies chahiye.</li>
                <li><strong>Fortification:</strong> Micronutrients (iron as ferrous fumarate ya NaFeEDTA, vitamin A, vitamin D) aur bioactive compounds (flaxseed oil se omega-3 fatty acids, alginate beads mein encapsulated probiotics) ka incorporation nutritional value enhance karne ke liye.</li>
                <li><strong>Fruit-flavored variants:</strong> Aam ka pulp, strawberry puree, jackfruit, ya pineapple 5–15% levels pe add karna. Yeh additional reducing sugars, organic acids, aur moisture introduce karte hain jo a<sub>w</sub>, browning, aur shelf life affect karte hain.</li>
                <li><strong>Mechanization:</strong> Continuous chhana-making machines (NDRI, Karnal, aur ICAR-NDRI mein developed) automated acid dosing aur pH control ke saath, followed by scraped-surface heat exchangers mein continuous kneading aur cooking, large-scale, consistent production enable karti hain kam labor aur contamination risk ke saath.</li>
                <li><strong>Frozen sandesh:</strong> Quick-freezing (−35°C pe blast freezing) followed by −18°C pe storage se shelf life 3–6 mahine tak extend hoti hai. Key challenge: freezing ke dauran ice crystal formation protein-fat matrix ko disrupt kar sakta hai, thawing pe textural damage (crumbling, moisture separation) cause karta hai. Cryoprotectants (trehalose, sorbitol 2–5% pe) ka use aur rapid freezing rates (intracellular/fine ice crystal formation promote karne ke liye) ise mitigate karte hain.</li>
                <li><strong>Herbal/functional sandesh:</strong> Haldi (curcumin), ashwagandha extract, moringa leaf powder, ya green tea catechins ka incorporation added health benefits ke liye. In additions ki antioxidant activity storage ke dauran lipid oxidation bhi delay kar sakti hai.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Key References</h3>
            <ul class="list-disc list-outside pl-5 space-y-1 text-sm">
                <li>De, S. (2004). <em>Outlines of Dairy Technology.</em> Oxford University Press, New Delhi.</li>
                <li>Aneja, R. P., Mathur, B. N., Chandan, R. C., & Banerjee, A. K. (2002). <em>Technology of Indian Milk Products.</em> Dairy India Yearbook, New Delhi.</li>
                <li>Rajorhia, G. S. (2014). Technology of chhana-based sweets. In <em>Handbook of Indigenous Dairy Products.</em> ICAR-NDRI, Karnal.</li>
                <li>Bhattacharya, D. C., & Raj, D. (1980). Studies on the production of sandesh from cow milk. <em>Indian Journal of Dairy Science</em>, 33(2), 187–192.</li>
                <li>Bandyopadhyay, M., Chakraborty, R., & Raychaudhuri, U. (2007). A process for preparing a natural antioxidant enriched dairy product (sandesh). <em>LWT-Food Science and Technology</em>, 40(5), 842–851.</li>
                <li>FSSAI. (2011). <em>Food Safety and Standards (Food Products Standards and Food Additives) Regulations.</em> Government of India.</li>
                <li>BIS. (1987). IS 12257: Specification for Sandesh. Bureau of Indian Standards, New Delhi.</li>
                <li>Kumar, S., Rai, D. C., & Singh, D. (2012). Effect of packaging on shelf life of sandesh. <em>Journal of Dairying, Foods & Home Sciences</em>, 31(3), 175–180.</li>
            </ul>
        `
    }
}

    
