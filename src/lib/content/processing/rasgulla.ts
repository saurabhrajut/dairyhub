
export const rasgullaContent = {
    en: {
        title: "Rasgulla Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Rasgulla</h3>
            <p>Rasgulla (also spelled <em>Rasagolla</em>) is an iconic syrupy dessert of the Indian subcontinent, consisting of soft, spongy ball-shaped dumplings of <strong>chhana</strong> (acid-coagulated milk solids) cooked and soaked in a light sugar syrup. It holds GI (Geographical Indication) status — both Odisha (<em>Odisha Rasagola</em>, GI 2019) and West Bengal (<em>Banglar Rasogolla</em>, GI 2017) have registered variants, reflecting its deep cultural significance.</p>
            <p class="mt-2">From a food science perspective, rasgulla is a fascinating product because its characteristic <strong>spongy, elastic texture</strong> arises from the interplay of acid-coagulated casein microstructure, mechanical kneading, and osmotically driven hydration in sugar syrup. The finished product is a high-moisture, intermediate-sugar sweet with a water activity (a<sub>w</sub>) typically between <strong>0.90–0.94</strong>, placing it in the category of perishable to semi-perishable products.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Classification of Rasgulla</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Type</th>
                            <th class="p-2 border">Characteristics</th>
                            <th class="p-2 border">Shelf Life</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Fresh Rasgulla</strong></td>
                            <td class="p-2 border">Soft, spongy; soaked in light syrup (25–40 °Brix); white to off-white colour</td>
                            <td class="p-2 border">3–5 days (refrigerated)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Canned/Tinned Rasgulla</strong></td>
                            <td class="p-2 border">Commercially sterilised in hermetically sealed containers; syrup 40–55 °Brix</td>
                            <td class="p-2 border">6–12 months (ambient)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Long-Life / Retort-Pouch Rasgulla</strong></td>
                            <td class="p-2 border">Retort-processed in flexible pouches; UHT equivalent thermal treatment</td>
                            <td class="p-2 border">3–6 months (ambient)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Science of Milk Selection: Why Cow Milk?</h3>
            <p>The choice of milk fundamentally governs the texture of rasgulla through its influence on chhana properties. <strong>Cow milk</strong> is strongly preferred over buffalo milk for the following scientifically established reasons:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Cow Milk</th>
                            <th class="p-2 border">Buffalo Milk</th>
                            <th class="p-2 border">Impact on Rasgulla</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Fat (%)</strong></td>
                            <td class="p-2 border">3.5–4.5</td>
                            <td class="p-2 border">6.0–8.0</td>
                            <td class="p-2 border">Lower fat → softer, more spongy chhana with greater water-holding capacity</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Casein Micelle Size (nm)</strong></td>
                            <td class="p-2 border">150–180</td>
                            <td class="p-2 border">180–220</td>
                            <td class="p-2 border">Smaller micelles → finer, smoother coagulum; better kneading behaviour</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>β-Casein : κ-Casein Ratio</strong></td>
                            <td class="p-2 border">Lower</td>
                            <td class="p-2 border">Higher</td>
                            <td class="p-2 border">More κ-casein in cow milk → better colloidal stability, softer curd</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fat Globule Diameter (μm)</strong></td>
                            <td class="p-2 border">3.0–4.0</td>
                            <td class="p-2 border">4.5–8.0</td>
                            <td class="p-2 border">Smaller globules distribute more uniformly within the casein matrix</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Calcium Content (mg/100 mL)</strong></td>
                            <td class="p-2 border">120</td>
                            <td class="p-2 border">195</td>
                            <td class="p-2 border">Lower Ca²⁺ → weaker casein cross-linking → softer coagulum</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Chhana Yield (%)</strong></td>
                            <td class="p-2 border">15–17</td>
                            <td class="p-2 border">20–23</td>
                            <td class="p-2 border">Buffalo chhana is harder, grainier; produces dense, rubbery rasgulla</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3"><strong>Scientific Basis:</strong> Cow milk casein micelles have a higher ratio of κ-casein (the micelle-stabilising fraction) and lower colloidal calcium phosphate (CCP) bridging. Upon acid coagulation near the <strong>isoelectric point (pH ~4.6 for casein)</strong>, cow milk forms a <em>fragile, open-structured coagulum</em> with high moisture retention (55–60%). Buffalo milk, by contrast, forms a dense, compact curd due to higher CCP cross-linking and larger fat globules that disrupt the protein network differently, yielding a hard chhana unsuitable for spongy rasgulla.</p>
            <p class="mt-2">For standardised commercial production, milk is typically standardised to <strong>3.5–4.0% fat and 8.5% SNF</strong> to achieve optimal chhana composition.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI & BIS Standards for Rasgulla</h3>
            <p>Quality specifications for canned rasgulla are defined under <strong>FSSAI Regulations (Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011)</strong> and <strong>BIS IS:12974</strong>.</p>
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
                            <td class="p-2 border"><strong>Drained Weight (min, %)</strong></td>
                            <td class="p-2 border">55.0</td>
                            <td class="p-2 border">Ensures adequate product-to-syrup ratio; prevents excess syrup used as filler</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Total Solids (min, %)</strong></td>
                            <td class="p-2 border">45.0</td>
                            <td class="p-2 border">Reflects adequate milk solid incorporation and proper syrup concentration</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fat on Dry Basis (min, %)</strong></td>
                            <td class="p-2 border">5.0</td>
                            <td class="p-2 border">Confirms use of whole milk (not skim milk adulteration); contributes to mouthfeel</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sucrose (max, %)</strong></td>
                            <td class="p-2 border">55.0</td>
                            <td class="p-2 border">Controls excessive sweetness; prevents crystallisation in the syrup during storage</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Total Ash (max, %)</strong></td>
                            <td class="p-2 border">1.5</td>
                            <td class="p-2 border">Indicator of mineral content; excessively high values suggest adulteration</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Texture</strong></td>
                            <td class="p-2 border">Soft and spongy</td>
                            <td class="p-2 border">Must compress ≥30% under finger pressure and return to shape (elastic recovery)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Colour</strong></td>
                            <td class="p-2 border">White to light cream</td>
                            <td class="p-2 border">Browning indicates excessive Maillard reaction or caramelisation</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Microbiological Standards (FSSAI)</h4>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Microorganism</th>
                            <th class="p-2 border">Limit (cfu/g)</th>
                            <th class="p-2 border">Significance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Total Plate Count</strong></td>
                            <td class="p-2 border">5 × 10⁴ (fresh); Nil (canned)</td>
                            <td class="p-2 border">Overall hygiene indicator</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Coliform Count</strong></td>
                            <td class="p-2 border">10 (fresh); Nil (canned)</td>
                            <td class="p-2 border">Indicator of post-processing contamination</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>E. coli</em></strong></td>
                            <td class="p-2 border">Absent/g</td>
                            <td class="p-2 border">Faecal contamination indicator</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Yeast & Mould</strong></td>
                            <td class="p-2 border">50 (fresh); Nil (canned)</td>
                            <td class="p-2 border">Spoilage organisms; osmophilic yeasts can grow in high-sugar environment</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>Staphylococcus aureus</em></strong></td>
                            <td class="p-2 border">100</td>
                            <td class="p-2 border">Indicates poor handling hygiene; produces heat-stable enterotoxins</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>Salmonella</em></strong></td>
                            <td class="p-2 border">Absent/25 g</td>
                            <td class="p-2 border">Pathogen of concern in dairy products</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Detailed Processing of Rasgulla with HACCP-Based Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Comprehensive Processing Flowchart</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">📥 Milk Reception, Testing & Standardisation (3.5% Fat, 8.5% SNF) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">🧹 Filtration / Clarification <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">🔥 Heating Milk to 80–90°C (Pasteurisation) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">🌡️ Cooling to Coagulation Temperature (70–80°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">🧪 Acid Coagulation (1–2% Citric Acid; target pH 5.3–5.5) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">⏳ Settling (5–10 min), Draining & Pressing of Whey</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">🚿 Washing Chhana with Cold Water (removes residual acid, cools mass)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">🤲 Kneading of Chhana (8–12 min until smooth, homogeneous, crack-free) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">⚖️ Portioning (10–15 g each) & Ball Formation (smooth, crack-free spheres)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">🫧 Stage 1 Cooking: Thin Syrup (40–50 °Brix), 100°C, 10–15 min (Swelling Phase) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">🍯 Stage 2 Cooking: Thick Syrup (55–60 °Brix), 100°C, 5–8 min (Firming Phase) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">❄️ Equilibration — Soaking & Cooling in Syrup (40–45 °Brix) for 2–4 hours</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">🥫 Hot Filling into Cans/Pouches with Syrup at ≥82°C <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-4</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">🔒 Hermetic Seaming / Sealing <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP-3</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">🧫 Retort Sterilisation (115–121°C, F₀ = 5–8 min) — for canned product <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-5</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">💧 Cooling (to ≤40°C), Labelling, Coding & Storage</div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Scientific Explanation of Each Processing Step</h3>
            <ol class="list-decimal list-outside pl-5 space-y-6">

                <li><strong>Milk Reception, Testing & Standardisation (PRP)</strong>
                    <p>Fresh cow milk (or standardised mixed milk) is received and subjected to platform tests:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Organoleptic test:</strong> Colour, odour, taste (detects off-flavours from mastitis, feed taints, or adulteration)</li>
                        <li><strong>COB (Clot-on-Boiling) test:</strong> Detects high-acid milk (pH < 6.4) or colostrum; positive results indicate instability of casein under heat</li>
                        <li><strong>Alcohol test (68–75% ethanol):</strong> Screens for calcium ion imbalance and low heat stability</li>
                        <li><strong>Lactometer reading:</strong> Specific gravity 1.028–1.032 at 20°C (detects water addition)</li>
                        <li><strong>Fat (Gerber method):</strong> Standardised to 3.5–4.0%</li>
                        <li><strong>Acidity (titratable):</strong> 0.13–0.15% lactic acid (fresh milk)</li>
                        <li><strong>Adulteration tests:</strong> Starch, urea, neutralisers, detergents</li>
                        <li><strong>Antibiotic residues:</strong> Rapid screening kits (Delvotest, Charm II) — antibiotics can inhibit coagulation and pose public health risks</li>
                        <li><strong>Somatic Cell Count (SCC):</strong> < 4 × 10⁵ cells/mL (high SCC indicates mastitis; mastitic milk has altered protein profile with elevated whey proteins and plasmin activity, resulting in poor chhana quality)</li>
                    </ul>
                    <p class="mt-2"><strong>Standardisation rationale:</strong> Fat is standardised to 3.5–4.0% because excess fat (>5%) makes chhana greasy and difficult to knead, while very low fat (<2%) produces dry, hard chhana. SNF is maintained at ~8.5% to ensure adequate casein content for proper coagulum formation. The <strong>casein-to-fat ratio</strong> of approximately 0.75:1 is considered optimal.</p>
                </li>

                <li><strong>Filtration / Clarification (PRP)</strong>
                    <p>Milk is passed through in-line filters or centrifugal clarifiers to remove physical contaminants (hair, dust, udder tissue, insects). Modern plants use bactofugation (centrifugal removal at 9,000–12,000 × g) which can reduce spore counts by up to 98%, improving the safety margin for the final thermal process.</p>
                </li>

                <li><strong>Heating of Milk — 80–90°C (CCP-1: Pasteurisation & Protein Modification)</strong>
                    <p>Milk is heated to <strong>80–90°C and held for 5 minutes</strong>. This step serves multiple critical functions:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Pathogen Destruction:</strong> Achieves >5-log reduction of vegetative pathogens including <em>Salmonella</em> spp., <em>Listeria monocytogenes</em> (D<sub>72°C</sub> = 0.5–2 s), <em>E. coli</em> O157:H7, <em>Campylobacter</em> spp., and <em>Staphylococcus aureus</em>. Note: Heat-stable staphylococcal enterotoxins (SE-A to SE-E) can survive even this treatment if pre-formed in high-SCC or improperly stored milk.</li>
                        <li><strong>Whey Protein Denaturation:</strong> At temperatures >70°C, β-lactoglobulin (β-Lg) undergoes irreversible unfolding, exposing its free sulfhydryl (-SH) group (Cys-121). Denatured β-Lg interacts with κ-casein on the micelle surface via <strong>disulphide (S–S) interchange reactions</strong>, forming β-Lg/κ-casein complexes. This modification is crucial because:
                            <ul class="list-circle list-outside pl-5 mt-1">
                                <li>It changes the mode of coagulation from purely rennet-type to acid-heat type</li>
                                <li>Denatured whey proteins co-precipitate with casein, <strong>increasing chhana yield by 4–6%</strong></li>
                                <li>The trapped whey proteins increase the water-holding capacity of chhana, contributing to spongy texture</li>
                            </ul>
                        </li>
                        <li><strong>Enzyme Inactivation:</strong> Destroys native milk lipase (prevents lipolysis and rancidity), alkaline phosphatase (ALP — used as pasteurisation verification marker), and plasmin precursors</li>
                        <li><strong>Calcium Equilibrium Shift:</strong> Heating causes migration of soluble calcium to the colloidal phase (Ca²⁺ + HPO₄²⁻ → Ca₃(PO₄)₂ on micelle), which influences coagulation behaviour upon subsequent acidification</li>
                    </ul>
                    <div class="bg-red-50 border-l-4 border-red-400 p-3 mt-3">
                        <strong>CCP-1 Control Parameters:</strong><br>
                        • Critical Limit: ≥80°C for ≥5 minutes<br>
                        • Monitoring: Continuous temperature recording (RTD sensors), flow diversion valve<br>
                        • Corrective Action: Re-process milk if temperature falls below 80°C; divert to balance tank<br>
                        • Verification: ALP test (must be negative — ALP is inactivated at 72°C/15s)
                    </div>
                    <p class="mt-3"><strong>Note on Over-Heating:</strong> Exceeding 95°C or prolonging holding time >10 min causes excessive Maillard browning (lactose + lysine residues of casein → Amadori compounds → melanoidins), resulting in off-white/yellowish chhana with cooked flavour. It also increases casein cross-linking density, producing hard chhana.</p>
                </li>

                <li><strong>Cooling to Coagulation Temperature — 70–80°C (oPRP-1)</strong>
                    <p>The heated milk is cooled to <strong>70–80°C</strong> before acid addition. This temperature range is critical because:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Below 60°C:</strong> Coagulation is slow; casein micelles reaggregate poorly; fine, dispersed curds form that are difficult to drain → low-yield, high-moisture chhana with weak body</li>
                        <li><strong>70–80°C (optimal):</strong> Rapid, complete coagulation; large, well-defined curd particles form; efficient whey expulsion; optimal moisture (55–60%) in chhana</li>
                        <li><strong>Above 90°C:</strong> Excessively rapid coagulation; curds become tough and rubbery due to excessive protein denaturation and cross-linking; calcium phosphate precipitation is excessive</li>
                    </ul>
                    <p class="mt-2"><strong>Scientific Explanation:</strong> At 70–80°C, the combined effects of heat-induced disulphide bonding and acid-mediated charge neutralisation (as pH drops toward pI) produce a coagulum with an <em>optimal balance of firmness and porosity</em>. The casein micelles, already partially destabilised by heat (κ-casein/β-Lg complex formation), aggregate rapidly upon acid addition through hydrophobic interactions and calcium bridging.</p>
                </li>

                <li><strong>Acid Coagulation — pH 5.3–5.5 (CCP-2)</strong>
                    <p>A food-grade acid solution is added to the hot milk with gentle stirring to initiate coagulation. Common coagulants include:</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Coagulant</th>
                                    <th class="p-2 border">Typical Concentration</th>
                                    <th class="p-2 border">Rate Used</th>
                                    <th class="p-2 border">Effect on Chhana Quality</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong>Citric Acid</strong></td>
                                    <td class="p-2 border">1–2% w/v solution</td>
                                    <td class="p-2 border">2–3 g/L milk</td>
                                    <td class="p-2 border">Preferred — produces soft, smooth chhana; chelates Ca²⁺ ions, loosening casein network</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Lactic Acid</strong></td>
                                    <td class="p-2 border">1% v/v</td>
                                    <td class="p-2 border">2–3 mL/L milk</td>
                                    <td class="p-2 border">Milder flavour; produces slightly firmer chhana than citric acid</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Calcium Lactate / Tartaric Acid</strong></td>
                                    <td class="p-2 border">1% solution</td>
                                    <td class="p-2 border">Variable</td>
                                    <td class="p-2 border">Less common; calcium lactate adds Ca²⁺ → harder curd</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Whey (Sour)</strong></td>
                                    <td class="p-2 border">Natural acidity (~0.5% LA)</td>
                                    <td class="p-2 border">~20% v/v of milk</td>
                                    <td class="p-2 border">Traditional method; inconsistent pH control; higher contamination risk</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p class="mt-3"><strong>Coagulation Chemistry:</strong></p>
                    <p>The mechanism of acid coagulation involves multiple concurrent physicochemical processes:</p>
                    <ol class="list-decimal list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Charge Neutralisation:</strong> Native casein micelles carry a net negative charge (zeta potential ≈ −20 mV at pH 6.7) due to ionised phosphoserine residues and the protruding C-terminal of κ-casein (the "hairy layer" providing steric/electrostatic stabilisation). As pH decreases from 6.7 → 5.3, the carboxyl and phosphate groups become progressively protonated, reducing the net negative charge. At the <strong>isoelectric point (pI ≈ 4.6)</strong>, the net charge is zero and electrostatic repulsion is minimal. However, coagulation begins well above pI (at pH ~5.3–5.5) because:
                            <ul class="list-circle list-outside pl-5 mt-1">
                                <li>At 70–80°C, hydrophobic interactions are significantly enhanced</li>
                                <li>The κ-casein "hairy layer" has already been partially compromised by β-Lg binding</li>
                                <li>Combined heat + acid destabilisation requires less charge neutralisation than cold acid alone</li>
                            </ul>
                        </li>
                        <li><strong>Colloidal Calcium Phosphate (CCP) Dissolution:</strong> CCP nanocluster (Ca₉(PO₄)₆ complexes) cement the casein sub-micelles together. Acid dissolves CCP: Ca₃(PO₄)₂ + 6H⁺ → 3Ca²⁺ + 2H₃PO₄. This weakens the internal micellar structure, causing progressive dissociation. The released Ca²⁺ ions then participate in intermolecular bridging between carboxyl groups of adjacent casein molecules, contributing to gel/curd formation.</li>
                        <li><strong>Hydrophobic Aggregation:</strong> As charge repulsion diminishes, exposed hydrophobic patches on αs1-, αs2-, and β-casein mediate rapid aggregation via hydrophobic interactions (ΔG < 0 at elevated temperature).</li>
                    </ol>

                    <p class="mt-3"><strong>Why pH 5.3–5.5 and NOT Lower?</strong></p>
                    <p>This is the single most critical parameter determining rasgulla quality:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>pH > 5.8:</strong> Incomplete coagulation; excessive casein and fat loss in whey (>1.2% protein in whey); mushy, weak chhana that disintegrates during cooking</li>
                        <li><strong>pH 5.3–5.5 (OPTIMAL):</strong> Complete casein precipitation with co-precipitation of denatured whey proteins; fat retention >90%; chhana has cohesive, slightly elastic structure ideal for kneading. The casein network retains sufficient water within its porous structure.</li>
                        <li><strong>pH < 5.0:</strong> Excessive acidification causes over-contraction of the casein matrix (syneresis); chhana becomes dry, crumbly, and acidic in taste; excessive calcium is released into whey → very weak internal bonding → rasgulla crumbles during cooking</li>
                        <li><strong>pH < 4.6 (at/below pI):</strong> Maximum casein compaction; extremely hard, dry, and sour chhana; completely unusable for rasgulla</li>
                    </ul>
                    
                    <div class="bg-red-50 border-l-4 border-red-400 p-3 mt-3">
                        <strong>CCP-2 Control Parameters:</strong><br>
                        • Critical Limit: Whey pH 5.3–5.5; clear, greenish-yellow whey (indicates complete coagulation without over-acidification)<br>
                        • Monitoring: pH meter calibrated against buffer standards (pH 4.0 and 7.0); visual assessment of whey clarity<br>
                        • Corrective Action: If pH > 5.6 → add more acid slowly; if pH < 5.2 → dilute with water or blend with fresh batch<br>
                        • Verification: Periodic titration of whey; fat-in-whey analysis (should be < 0.5%)
                    </div>
                </li>

                <li><strong>Settling, Draining & Pressing</strong>
                    <p>After coagulation, the mixture is allowed to <strong>settle for 5–10 minutes</strong> to allow curd particles to aggregate. The coagulum is then drained through muslin cloth or a perforated stainless-steel vessel. The whey is removed by gentle pressing — applying excessive pressure must be avoided as it leads to over-dehydration.</p>
                    <p class="mt-2"><strong>Target moisture in drained chhana: 55–60%</strong></p>
                    <p class="mt-1">The scientific basis for this moisture range: at 55–60% moisture, the casein network exists as a <em>hydrated, open gel</em> where water is both mechanically trapped in capillary spaces and chemically bound to polar groups on casein. This level of hydration provides:
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li>Sufficient plasticity for kneading without cracking</li>
                        <li>Enough free water to facilitate swelling during osmotic cooking</li>
                        <li>Structural integrity to prevent disintegration in boiling syrup</li>
                    </ul>
                </li>

                <li><strong>Washing with Cold Water</strong>
                    <p>The drained chhana is washed under running cold water (10–15°C) for 3–5 minutes. This step serves three purposes:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Acid Removal:</strong> Eliminates residual citric/lactic acid, preventing continued acidification that would harden the chhana matrix during storage before kneading</li>
                        <li><strong>Temperature Reduction:</strong> Rapidly cools the chhana from ~70°C to ~25–30°C. This is important because casein gels undergo <strong>structural relaxation and partial re-arrangement</strong> upon cooling, becoming more workable</li>
                        <li><strong>Whey Protein Precipitation:</strong> Cold shock causes any remaining soluble aggregated whey proteins to associate with the casein matrix, marginally improving yield</li>
                    </ul>
                </li>

                <li><strong>Kneading of Chhana — 8–12 Minutes (oPRP-2)</strong>
                    <p>This is arguably the <strong>most critical step for determining rasgulla texture</strong>. The drained, cooled chhana is kneaded vigorously — traditionally with the heel of the palm on a flat stone or steel surface, or in modern facilities using a planetary mixer or specialized chhana-kneading machine.</p>
                    
                    <p class="mt-3"><strong>Scientific Basis of Kneading:</strong></p>
                    <p>The raw chhana has a <em>coarse, granular, heterogeneous</em> structure composed of casein aggregates (~10–100 μm), entrapped fat globules, and pockets of whey. Kneading induces the following transformations:</p>
                    <ol class="list-decimal list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Breakdown of Coarse Aggregates:</strong> Mechanical shear breaks large casein aggregate clusters into submicron-scale particles, creating a <em>fine, homogeneous paste</em>. Electron microscopy studies show that well-kneaded chhana has a protein matrix with uniform pore sizes of 1–5 μm, compared to 10–50 μm in unkneaded chhana.</li>
                        <li><strong>Fat Redistribution:</strong> Free fat and disrupted fat globules become evenly dispersed throughout the casein matrix, acting as plasticisers. This reduces the effective protein-protein contact area, improving plasticity and reducing hardness. The fat lubricates the casein strands during ball formation.</li>
                        <li><strong>Expulsion of Entrapped Air & Free Whey:</strong> Kneading removes air pockets that would otherwise expand during cooking and cause surface cracking or crumbling. Small amounts of residual whey are also expressed.</li>
                        <li><strong>Development of Protein Alignment:</strong> Analogous (though not identical) to gluten development in wheat dough, kneading aligns casein molecules into a more ordered, slightly fibrous structure. While casein does not form the disulphide-bonded viscoelastic network that gluten does, the repeated shearing creates <strong>oriented hydrophobic domains</strong> and <strong>calcium-mediated ionic cross-links</strong> that give the kneaded mass a <em>smooth, cohesive, slightly elastic character</em>.</li>
                        <li><strong>Moisture Equilibration:</strong> Kneading ensures uniform distribution of water between bound (non-freezable) and free (freezable) water phases, which is critical for even osmotic response during cooking.</li>
                    </ol>

                    <p class="mt-3"><strong>Endpoint Determination:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>The mass should feel smooth, slightly glossy, and non-sticky</li>
                        <li>A small portion (10–12 g) should roll into a perfectly smooth sphere <strong>without visible cracks</strong></li>
                        <li>When pressed between thumb and forefinger, the mass should deform smoothly without crumbling</li>
                        <li>Instrumental assessment: Texture profile analysis (TPA) showing hardness < 1.5 N, adhesiveness < 0.3 N·s, cohesiveness > 0.5</li>
                    </ul>

                    <p class="mt-3"><strong>Under-kneading:</strong> Coarse texture → balls crack during cooking → disintegrate in syrup</p>
                    <p><strong>Over-kneading:</strong> Excessive protein orientation → too elastic, tough rasgulla; also excessive fat expression makes surface oily</p>

                    <div class="bg-orange-50 border-l-4 border-orange-400 p-3 mt-3">
                        <strong>oPRP-2 Control Parameters:</strong><br>
                        • Operational Limit: 8–12 minutes of kneading; smooth, crack-free ball formation test<br>
                        • Monitoring: Trained operator assessment (visual + tactile); periodic TPA measurement for process validation<br>
                        • Corrective Action: Continue kneading if ball-formation test fails; if over-kneaded, blend with fresh chhana
                    </div>
                </li>

                <li><strong>Portioning (10–15 g) & Ball Formation</strong>
                    <p>The kneaded chhana is divided into <strong>uniform portions of 10–15 g</strong> (for standard-sized rasgulla) and rolled between the palms to form smooth, crack-free spheres. Uniformity of size is critical because:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>Non-uniform sizes lead to differential cooking — small balls become overcooked (tough/rubbery) while large ones remain undercooked (dense/raw-tasting centre)</li>
                        <li>Osmotic equilibration time is proportional to the square of the radius (Fick's second law: t ∝ r²/D, where D is the effective diffusivity of sucrose)</li>
                        <li>For canning, uniform drained weight requires uniform ball size</li>
                    </ul>
                    <p class="mt-2"><strong>Note:</strong> Some manufacturers add <strong>1–2% semolina (suji/rava)</strong> or <strong>refined wheat flour (maida)</strong> to the chhana before ball formation. The starch granules gelatinise during cooking, absorbing water and swelling, which enhances sponginess. However, excessive starch addition (>5%) leads to gummy texture and loss of the characteristic dairy flavour.</p>
                </li>

                <li><strong>Two-Stage Cooking in Sugar Syrup (CCP-3) — The Core Transformation</strong>
                    <p>This step transforms raw chhana balls into spongy, syrup-saturated rasgulla through a carefully controlled osmotic and thermal process.</p>
                    
                    <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Stage 1: Swelling Phase — Thin Syrup (40–50 °Brix), 100°C, 10–15 min</h4>
                    <p>The chhana balls are gently lowered into <strong>vigorously boiling thin sugar syrup</strong> (40–50 °Brix, i.e., 40–50 g sucrose per 100 g solution). The pot is covered to maintain a continuous rolling boil.</p>
                    
                    <p class="mt-2"><strong>Scientific Mechanisms at Play:</strong></p>
                    <ol class="list-decimal list-outside pl-5 mt-2 space-y-3">
                        <li><strong>Osmosis & Water Absorption:</strong>
                            <p>This is the dominant mechanism controlling rasgulla swelling. The chhana ball interior contains:
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>~55–60% water (with dissolved lactose ~4.5%, minerals ~1.5%, organic acids)</li>
                                <li>Effective internal concentration: ~10–12 °Brix</li>
                            </ul>
                            The surrounding syrup is at 40–50 °Brix. Despite the syrup being more concentrated, the <strong>casein-protein network acts as a semi-permeable membrane</strong>, selectively allowing water molecules (and some small solutes) to enter while partially excluding large sucrose molecules (MW 342 Da). The osmotic pressure difference (Δπ) drives water from the relatively dilute outer syrup into the chhana ball:
                            </p>
                            <p class="mt-1 font-mono text-sm">Δπ = (C<sub>syrup</sub> − C<sub>internal</sub>) × RT / V<sub>m</sub></p>
                            <p class="mt-1">where C is molar concentration, R is the gas constant, T is temperature, and V<sub>m</sub> is the partial molar volume of water.</p>
                            <p class="mt-1">This water influx causes the balls to swell to <strong>1.5–2.5 times their original volume</strong> (and approximately 2–3 times their original weight).</p>
                        </li>
                        <li><strong>Steam Generation & Internal Pore Formation:</strong>
                            <p>At 100°C, water within the chhana ball reaches its boiling point. <strong>Micro-bubbles of steam</strong> form within the protein matrix, creating an internal porous, spongy structure — similar to the principle behind bread or cake leavening. The protein network, softened by heat and hydration, stretches to accommodate these steam pockets without rupturing (provided kneading was adequate). This is the primary mechanism responsible for the characteristic <strong>spongy, springy texture</strong> of rasgulla. When compressed, these air cells recoil, giving the "squeeze-and-release" sensation.</p>
                        </li>
                        <li><strong>Protein Matrix Modification:</strong>
                            <p>Prolonged boiling at 100°C causes further denaturation and aggregation of casein and residual whey proteins. The protein network transitions from a relatively <em>fragile gel</em> to a more <em>robust, elastic, cross-linked matrix</em> that:
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>Can withstand internal steam pressure without crumbling</li>
                                <li>Maintains structural integrity during handling and packaging</li>
                                <li>Develops sufficient elasticity for the desired "bounce-back" texture</li>
                            </ul>
                            The heat-induced formation of <strong>lysinoalanine (LAL)</strong> cross-links and <strong>isopeptide bonds</strong> (ε-(γ-glutamyl)lysine) contributes to the structural rigidity.</p>
                        </li>
                        <li><strong>Sucrose Diffusion (Slow):</strong>
                            <p>While water rapidly enters the ball, sucrose diffusion inward is much slower (D<sub>sucrose</sub> ≈ 5 × 10⁻¹⁰ m²/s at 100°C vs. D<sub>water</sub> ≈ 6 × 10⁻⁹ m²/s). This differential transport rate is what drives net swelling. Over time, sucrose does gradually penetrate, contributing to sweetness throughout the ball.</p>
                        </li>
                    </ol>

                    <p class="mt-3"><strong>Critical Process Variables — Stage 1:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Syrup concentration too low (<35 °Brix):</strong> Excessive osmotic water influx → balls swell too rapidly, protein network ruptures → disintegration</li>
                        <li><strong>Syrup concentration too high (>55 °Brix):</strong> Reverse osmosis occurs → water exits balls → they shrink and become dense, hard, and non-spongy</li>
                        <li><strong>Temperature below boiling:</strong> Insufficient steam generation → no internal pore formation → dense, doughy texture</li>
                        <li><strong>Lid off during cooking:</strong> Temperature drops, boiling is not sustained, steam cannot be trapped → poor expansion</li>
                    </ul>

                    <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Stage 2: Firming Phase — Thick Syrup (55–60 °Brix), 100°C, 5–8 min</h4>
                    <p>The swollen rasgullas are carefully transferred to a <strong>thicker sugar syrup (55–60 °Brix)</strong> and boiled for 5–8 minutes.</p>
                    
                    <p class="mt-2"><strong>Scientific Purpose:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Controlled Dehydration (Reverse Osmosis):</strong> The high-concentration syrup now has a <em>lower</em> water activity (a<sub>w</sub> ≈ 0.86 at 60 °Brix) than the swollen ball interior (a<sub>w</sub> ≈ 0.97–0.98). This drives water <em>out</em> of the rasgulla, causing partial shrinkage (typically 10–15% volume reduction). This controlled dehydration firms the protein structure and prevents the rasgulla from being overly soft or fragile.</li>
                        <li><strong>Sugar Infusion:</strong> The high concentration gradient now favours inward diffusion of sucrose. The rasgulla absorbs sugar, which lowers its internal a<sub>w</sub>, contributing to preservation. The final internal sucrose concentration equilibrates to approximately 35–45 °Brix.</li>
                        <li><strong>Structural Consolidation:</strong> The combination of partial dehydration and sugar penetration "sets" the protein matrix, creating a firmer but still elastic and spongy structure. The sugar acts as a <em>plasticiser</em> within the protein network, preventing excessive hardening.</li>
                    </ul>

                    <div class="bg-red-50 border-l-4 border-red-400 p-3 mt-3">
                        <strong>CCP-3 Control Parameters:</strong><br>
                        • Critical Limits: Stage 1: 40–50 °Brix, rolling boil (≥98°C), 10–15 min; Stage 2: 55–60 °Brix, rolling boil, 5–8 min<br>
                        • Monitoring: Calibrated refractometer for syrup Brix; thermometer/thermocouple for temperature; timer; visual observation of swelling (1.5–2× volume increase)<br>
                        • Corrective Action: Adjust Brix with water (if too high) or sugar (if too low); extend/reduce cooking time based on ball texture assessment<br>
                        • Verification: Periodic internal temperature check of rasgulla balls; texture and weight measurements
                    </div>
                </li>

                <li><strong>Equilibration — Soaking & Cooling in Light Syrup (2–4 hours)</strong>
                    <p>After two-stage cooking, the rasgullas are transferred to a <strong>light syrup (40–45 °Brix)</strong> and allowed to soak and cool gradually to room temperature over 2–4 hours.</p>
                    <p class="mt-2"><strong>Scientific Purpose:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Osmotic Equilibration:</strong> During soaking, the internal concentration of the rasgulla gradually equilibrates with the surrounding syrup. Since the ball interior (from Stage 2) may be at ~35–45 °Brix and the soaking syrup is at 40–45 °Brix, the net osmotic driving force is minimal, allowing gentle re-hydration and softening of any over-firmed surface layers.</li>
                        <li><strong>Sucrose Penetration Completion:</strong> Fick's second law governs the continued diffusion of sucrose into the ball centre. At lower temperatures, diffusion is slower, but the extended soaking time compensates. Uniform sweetness throughout the cross-section is achieved.</li>
                        <li><strong>Protein Relaxation:</strong> As temperature drops, the thermally expanded protein network contracts slightly and undergoes stress relaxation, achieving its final equilibrium conformation. This determines the final firmness and elasticity at serving temperature.</li>
                        <li><strong>Flavour Development:</strong> Subtle caramel and dairy flavour notes equilibrate between the syrup and the chhana matrix.</li>
                    </ul>
                </li>

                <li><strong>Hot Filling into Cans/Pouches (CCP-4)</strong>
                    <p>For shelf-stable products, the rasgullas are carefully placed into pre-cleaned, sanitised <strong>tinplate cans (internally lacquered)</strong> or <strong>retortable pouches (PET/Al/PP laminate)</strong>, and the container is filled with hot sugar syrup at <strong>≥82°C</strong> (typically 85–90°C).</p>
                    <p class="mt-2"><strong>Scientific Basis of Hot Filling:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Headspace De-aeration:</strong> Hot syrup displaces dissolved oxygen and trapped air in the headspace. Upon cooling, the steam in the headspace condenses, creating a <strong>partial vacuum (200–400 mm Hg)</strong>. This vacuum:
                            <ul class="list-circle list-outside pl-5 mt-1">
                                <li>Retards oxidative deterioration (lipid oxidation, browning)</li>
                                <li>Prevents can bulging at high altitudes or during thermal processing</li>
                                <li>Inhibits growth of obligate aerobes</li>
                            </ul>
                        </li>
                        <li><strong>Thermal Inactivation of Surface Contaminants:</strong> Hot fill sterilises the inner surface of the container and the rasgulla surface, reducing initial microbial load before retorting</li>
                        <li><strong>Improved Heat Transfer during Retorting:</strong> Hot contents reduce the come-up time during retort sterilisation, ensuring more uniform thermal treatment</li>
                    </ul>
                    <div class="bg-red-50 border-l-4 border-red-400 p-3 mt-3">
                        <strong>CCP-4 Control Parameters:</strong><br>
                        • Critical Limit: Fill temperature ≥82°C; headspace 6–10 mm<br>
                        • Monitoring: Fill temperature probe; headspace gauge<br>
                        • Corrective Action: Reject containers filled below 82°C; adjust headspace
                    </div>
                </li>

                <li><strong>Hermetic Seaming / Sealing (oPRP-3)</strong>
                    <p>Cans are sealed using a <strong>double-seam</strong> operation (first operation: interlocking of can body flange and end curl; second operation: compression into a tight, hermetic seal). For pouches, <strong>impulse or continuous heat sealing</strong> is used.</p>
                    <p class="mt-2"><strong>Quality Control:</strong> Double-seam dimensions are critical for hermeticity:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Seam thickness:</strong> Measured with seam micrometer; must be within ±0.05 mm of specification</li>
                        <li><strong>Seam overlap (OL%):</strong> Minimum 45% (typically >50%) — calculated as: OL% = [(BH + CH) − (ST − 1.1 × t<sub>e</sub>)] / [(3 × t<sub>e</sub>) − (ST − 1.1 × t<sub>e</sub>)] × 100</li>
                        <li><strong>Body hook and cover hook tightness ratings:</strong> Must score ≥80% on visual/cross-section evaluation</li>
                        <li><strong>Wrinkle rating:</strong> <50% (excessive wrinkling → microchannels → post-process contamination)</li>
                    </ul>
                    <p class="mt-2">Visual and destructive seam examinations are conducted every 30 minutes during production. Any seam defect (droop, cut-over, false seam, spinner) constitutes a critical failure requiring immediate line stoppage.</p>
                </li>

                <li><strong>Retort Sterilisation — 115–121°C, F₀ = 5–8 min (CCP-5)</strong>
                    <p>Sealed containers are subjected to <strong>commercial sterilisation</strong> in a retort (batch or continuous) to achieve shelf stability at ambient temperature.</p>
                    
                    <p class="mt-2"><strong>Target Microorganism:</strong> <em>Clostridium botulinum</em> (Type A & B) — the most heat-resistant pathogen of public health significance in low-acid canned foods (pH > 4.6). Since rasgulla in syrup has a pH of approximately <strong>5.5–6.5</strong> (well above 4.6), it is classified as a <strong>low-acid food</strong> requiring a botulinum cook.</p>
                    
                    <p class="mt-2"><strong>Thermal Processing Parameters:</strong></p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Value</th>
                                    <th class="p-2 border">Scientific Basis</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong>Target F₀ Value</strong></td>
                                    <td class="p-2 border">5–8 minutes (at z = 10°C)</td>
                                    <td class="p-2 border">Minimum 12D reduction of <em>C. botulinum</em> spores (D<sub>121°C</sub> = 0.21 min; 12D = 2.52 min). Higher F₀ provides safety margin for spoilage organisms like <em>B. stearothermophilus</em> (D<sub>121°C</sub> = 4–5 min)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Retort Temperature</strong></td>
                                    <td class="p-2 border">115–121°C</td>
                                    <td class="p-2 border">Achieved under steam pressure (103–207 kPa gauge). Higher temp → shorter process → less quality degradation</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Process Time (total)</strong></td>
                                    <td class="p-2 border">15–30 min (depends on can size)</td>
                                    <td class="p-2 border">Includes come-up time + holding time. Determined by heat penetration study at the <strong>cold point</strong> (geometric centre of can)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Heating Medium</strong></td>
                                    <td class="p-2 border">Saturated steam or steam-air mixture (for pouches)</td>
                                    <td class="p-2 border">Steam provides highest heat transfer coefficient (h ≈ 10,000–15,000 W/m²K)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Over-pressure (for pouches)</strong></td>
                                    <td class="p-2 border">150–200 kPa</td>
                                    <td class="p-2 border">Prevents pouch swelling/seal failure due to internal steam pressure</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <p class="mt-3"><strong>Heat Penetration Characteristics:</strong> Rasgulla in syrup is a <strong>broken-heating product</strong> — initially, heat transfer is by convection through the syrup (rapid), but within the rasgulla ball itself, heat transfer is primarily by <strong>conduction</strong> (slow). The cold point is located at the <strong>thermal centre of the largest rasgulla ball</strong> positioned at the geometric centre of the can. Heat penetration studies (using thermocouples at the cold point) typically show:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>f<sub>h</sub> (heating rate index) = 15–25 min</li>
                        <li>j<sub>h</sub> (heating lag factor) = 1.2–1.8</li>
                    </ul>
                    <p class="mt-2">Process lethality calculations use the <strong>General Method (numerical integration)</strong> or <strong>Ball Formula Method</strong> to ensure the cold point receives the minimum F₀.</p>

                    <div class="bg-red-50 border-l-4 border-red-400 p-3 mt-3">
                        <strong>CCP-5 Control Parameters:</strong><br>
                        • Critical Limits: Retort temperature ≥115°C; process time as per scheduled process (determined by heat penetration study); F₀ ≥ 5 min at cold point<br>
                        • Monitoring: Mercury-in-glass (MIG) thermometer (official reference), RTD sensors with continuous recording, pressure gauges<br>
                        • Corrective Action: If temperature deviation occurs → extend process time using deviation tables; quarantine and evaluate affected batch using C<sub>A</sub>-C<sub>B</sub> method<br>
                        • Verification: Incubation testing (37°C/10 days and 55°C/5 days); periodic F₀ validation with calibrated data loggers; retort temperature distribution studies
                    </div>

                    <p class="mt-3"><strong>Quality Implications of Retort Processing:</strong> Excessive thermal treatment (F₀ > 12) causes:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Darkening of rasgulla due to Maillard reaction (reducing sugars + amino acids) and caramelisation of sucrose at >160°C (localised at can wall)</li>
                        <li>Textural hardening due to excessive protein cross-linking</li>
                        <li>Development of "cooked" or "sterilised" flavour (from sulphur-containing amino acid degradation → H₂S, methyl mercaptan)</li>
                        <li>Loss of vitamin C (if present in syrup as antioxidant) — D<sub>121°C</sub> of ascorbic acid ≈ 3–5 min</li>
                    </ul>
                    <p class="mt-1">Therefore, HTST (Higher Temperature Short Time) retorting (e.g., 121°C with minimum holding) is preferred to minimise quality loss while achieving adequate F₀.</p>
                </li>

                <li><strong>Cooling, Labelling & Storage</strong>
                    <p>Immediately after retorting, containers are cooled with <strong>chlorinated water (2–5 ppm residual chlorine)</strong> to a core temperature of <strong>≤40°C</strong> within 30 minutes.</p>
                    <p class="mt-2"><strong>Scientific Reasons for Rapid Cooling:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Arrest Thermal Degradation:</strong> Continued cooking during slow cooling adds to the cumulative F₀, causing over-processing. The "cooling leg" of the thermal process can contribute 20–40% of total lethality if not controlled.</li>
                        <li><strong>Prevention of Thermophilic Spoilage:</strong> Thermophilic spore-formers like <em>B. stearothermophilus</em> and <em>B. coagulans</em> can germinate and grow if the product remains in the 55–40°C range for extended periods ("thermophilic spoilage zone")</li>
                        <li><strong>Seam Integrity:</strong> Cooling water must be chlorinated because during cooling, as internal pressure drops below external pressure, a <strong>transient negative pressure differential</strong> can draw cooling water inward through the seam. Chlorination ensures this water is not a source of post-process contamination (Codex Alimentarius recommends ≥2 ppm free chlorine at the point of contact).</li>
                    </ul>
                    <p class="mt-2">After cooling, containers are dried, labelled with <strong>batch code, manufacturing date, best-before date, lot number, and nutritional information</strong>, and stored at <strong>ambient temperature (15–30°C)</strong> in a dry, well-ventilated warehouse.</p>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Comprehensive HACCP Summary Table</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Step</th>
                            <th class="p-2 border">Hazard</th>
                            <th class="p-2 border">Type</th>
                            <th class="p-2 border">Control Point</th>
                            <th class="p-2 border">Critical Limit</th>
                            <th class="p-2 border">Monitoring</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border">Milk Reception</td>
                            <td class="p-2 border">Antibiotics, aflatoxin M1, adulterants</td>
                            <td class="p-2 border">Chemical</td>
                            <td class="p-2 border">PRP</td>
                            <td class="p-2 border">AFM1 < 0.5 μg/kg; no antibiotics</td>
                            <td class="p-2 border">Rapid test kits; supplier COA</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Heating (80–90°C)</td>
                            <td class="p-2 border">Survival of vegetative pathogens</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border"><strong>CCP-1</strong></td>
                            <td class="p-2 border">≥80°C / ≥5 min</td>
                            <td class="p-2 border">Temperature recorder; ALP test</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Acid Coagulation</td>
                            <td class="p-2 border">Improper coagulation → quality failure; chemical residue if non-food-grade acid</td>
                            <td class="p-2 border">Chemical / Quality</td>
                            <td class="p-2 border"><strong>CCP-2</strong></td>
                            <td class="p-2 border">pH 5.3–5.5; food-grade coagulant only</td>
                            <td class="p-2 border">pH meter; supplier certification</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Kneading</td>
                            <td class="p-2 border">Foreign body (from equipment); texture defect</td>
                            <td class="p-2 border">Physical / Quality</td>
                            <td class="p-2 border"><strong>oPRP-2</strong></td>
                            <td class="p-2 border">8–12 min; crack-free ball test</td>
                            <td class="p-2 border">Operator check; metal detector downstream</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Cooking in Syrup</td>
                            <td class="p-2 border">Inadequate cooking → microbial survival; texture failure</td>
                            <td class="p-2 border">Biological / Quality</td>
                            <td class="p-2 border"><strong>CCP-3</strong></td>
                            <td class="p-2 border">Stage 1: 40–50 °Brix, ≥98°C, 10–15 min; Stage 2: 55–60 °Brix, ≥98°C, 5–8 min</td>
                            <td class="p-2 border">Refractometer; thermometer; timer</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Hot Filling</td>
                            <td class="p-2 border">Post-process contamination; inadequate vacuum</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border"><strong>CCP-4</strong></td>
                            <td class="p-2 border">Fill temp ≥82°C; headspace 6–10 mm</td>
                            <td class="p-2 border">Fill temperature probe; headspace check</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Seaming</td>
                            <td class="p-2 border">Seal failure → post-process contamination</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border"><strong>oPRP-3</strong></td>
                            <td class="p-2 border">OL% ≥ 45%; wrinkle < 50%</td>
                            <td class="p-2 border">Visual + destructive seam exam every 30 min</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Retort Sterilisation</td>
                            <td class="p-2 border"><em>C. botulinum</em> spore survival</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border"><strong>CCP-5</strong></td>
                            <td class="p-2 border">F₀ ≥ 5 min; retort temp ≥115°C</td>
                            <td class="p-2 border">MIG thermometer; continuous recording; pressure gauge</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Cooling</td>
                            <td class="p-2 border">Post-process contamination via cooling water</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border">PRP</td>
                            <td class="p-2 border">Chlorine ≥ 2 ppm; cool to ≤40°C</td>
                            <td class="p-2 border">Chlorine test kit; product temp</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Nutritional Composition of Rasgulla</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Nutrient</th>
                            <th class="p-2 border">Per 100 g (including syrup)</th>
                            <th class="p-2 border">Per Ball (~30 g drained)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Energy</strong></td>
                            <td class="p-2 border">186–220 kcal</td>
                            <td class="p-2 border">55–66 kcal</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Carbohydrates (total)</strong></td>
                            <td class="p-2 border">38–45 g</td>
                            <td class="p-2 border">11–14 g</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">&nbsp;&nbsp;— Sucrose</td>
                            <td class="p-2 border">35–42 g</td>
                            <td class="p-2 border">10–13 g</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Protein</strong></td>
                            <td class="p-2 border">5–8 g</td>
                            <td class="p-2 border">1.5–2.4 g</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fat</strong></td>
                            <td class="p-2 border">2–5 g</td>
                            <td class="p-2 border">0.6–1.5 g</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Calcium</strong></td>
                            <td class="p-2 border">60–120 mg</td>
                            <td class="p-2 border">18–36 mg</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Phosphorus</strong></td>
                            <td class="p-2 border">50–90 mg</td>
                            <td class="p-2 border">15–27 mg</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Moisture</strong></td>
                            <td class="p-2 border">45–55%</td>
                            <td class="p-2 border">—</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Water Activity (a<sub>w</sub>)</strong></td>
                            <td class="p-2 border">0.90–0.94</td>
                            <td class="p-2 border">—</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2 text-sm text-gray-600">Note: Values are approximate and vary with formulation (syrup concentration, fat content, ball size). Source: IFCT (Indian Food Composition Tables), NIN-ICMR, 2017.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Role of Key Ingredients — Scientific Analysis</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Ingredient</th>
                            <th class="p-2 border">Function</th>
                            <th class="p-2 border">Scientific Mechanism</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Casein (from Milk)</strong></td>
                            <td class="p-2 border">Structural matrix; provides sponginess and elasticity</td>
                            <td class="p-2 border">Acid-denatured casein forms a porous gel network; hydrophobic interactions and Ca²⁺ bridges create elasticity; steam-expanded pores give sponginess</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Whey Proteins (co-precipitated)</strong></td>
                            <td class="p-2 border">Improve water-holding; increase yield</td>
                            <td class="p-2 border">Denatured β-Lg/α-La form aggregates with casein; their high hydration capacity (3–4 g water/g protein) enhances moisture retention in the matrix</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat</strong></td>
                            <td class="p-2 border">Plasticiser; mouthfeel enhancer; flavour carrier</td>
                            <td class="p-2 border">Fat globules (and free fat from disrupted membranes) interrupt the continuous casein network, reducing hardness; fat contributes unctuous mouthfeel and carries fat-soluble flavour compounds (diacetyl, δ-decalactone)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sucrose (Sugar)</strong></td>
                            <td class="p-2 border">Sweetness; preservative; texturiser; osmotic agent</td>
                            <td class="p-2 border">Lowers a<sub>w</sub> (each 10 °Brix reduces a<sub>w</sub> by ~0.06); drives osmotic swelling/firming; plasticises protein matrix by replacing protein-protein hydrogen bonds with protein-sucrose bonds; depresses freezing point</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Citric Acid</strong></td>
                            <td class="p-2 border">Coagulant; chelator</td>
                            <td class="p-2 border">Protonates carboxyl groups on casein → charge neutralisation → aggregation. Also chelates Ca²⁺ via its three carboxylate groups, weakening CCP bridges → softer curd compared to HCl or lactic acid</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Semolina / Maida (optional)</strong></td>
                            <td class="p-2 border">Binding agent; enhances sponginess</td>
                            <td class="p-2 border">Starch granules gelatinise at 60–70°C during cooking, absorbing 10–15× their weight in water, swelling and creating additional porous structure. Amylose leaches out and forms a gel that reinforces the casein network.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Common Defects in Rasgulla — Causes & Scientific Remedies</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Defect</th>
                            <th class="p-2 border">Possible Causes</th>
                            <th class="p-2 border">Scientific Explanation</th>
                            <th class="p-2 border">Remedy</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Hard / Rubbery Texture</strong></td>
                            <td class="p-2 border">Buffalo milk used; excess coagulation temperature (>90°C); over-acidification (pH <5.0); over-pressing of chhana; over-cooking in syrup</td>
                            <td class="p-2 border">Excessive casein cross-linking via hydrophobic bonds, disulphide bridges, and CCP precipitation → rigid, dense network with low water-holding capacity</td>
                            <td class="p-2 border">Use cow milk; coagulate at 70–80°C; control pH to 5.3–5.5; gentle pressing to 55–60% moisture; optimise cooking time</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Disintegration in Syrup</strong></td>
                            <td class="p-2 border">Under-acidification (pH >5.8); excess moisture in chhana (>65%); insufficient kneading; cracks on ball surface; syrup too thin (<35 °Brix)</td>
                            <td class="p-2 border">Weak casein network with large pores cannot withstand osmotic pressure and steam expansion → structural failure</td>
                            <td class="p-2 border">Ensure complete coagulation (clear whey); press to target moisture; knead until crack-free; use 40–50 °Brix syrup</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Flat / Dense (Non-Spongy)</strong></td>
                            <td class="p-2 border">Syrup concentration too high (>55 °Brix in Stage 1); cooking without lid; insufficient boiling intensity</td>
                            <td class="p-2 border">Reverse osmosis in concentrated syrup removes water from ball → no swelling. Without lid, temperature drops below 100°C → insufficient steam generation for internal pore formation</td>
                            <td class="p-2 border">Use thin syrup (40–50 °Brix) for Stage 1; maintain vigorous rolling boil with lid on</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Yellowish / Brown Colour</strong></td>
                            <td class="p-2 border">Over-heating of milk (>95°C for >10 min); caramelisation of syrup; Maillard reaction during retorting</td>
                            <td class="p-2 border">Maillard reaction: Reducing sugars (lactose) + ε-amino group of lysine → Schiff base → Amadori rearrangement → melanoidins (brown pigments). Caramelisation: Sucrose → glucose + fructose → furfural → humic substances at >160°C</td>
                            <td class="p-2 border">Heat milk to 80–85°C (not higher); use refined white sugar; optimise retort F₀ to minimum required</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Acidic / Sour Taste</strong></td>
                            <td class="p-2 border">Excessive acid use; poor washing of chhana; microbial (LAB) growth in syrup</td>
                            <td class="p-2 border">Residual citric/lactic acid in chhana matrix; fermentation of sucrose/lactose by <em>Lactobacillus</em>, <em>Leuconostoc</em> spp. producing lactic acid</td>
                            <td class="p-2 border">Wash chhana thoroughly with cold water; use minimum acid to reach pH 5.3–5.5; ensure adequate heat treatment and hygiene</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Syrup Crystallisation</strong></td>
                            <td class="p-2 border">Sucrose concentration >67 °Brix; temperature fluctuation during storage; lack of invert sugar</td>
                            <td class="p-2 border">Sucrose solubility at 20°C is ~67 g/100 g solution. Concentrations above this are supersaturated and prone to crystal nucleation, especially with temperature cycling. Invert sugar (glucose + fructose from acid/enzyme hydrolysis of sucrose) increases solubility and inhibits crystal growth by disrupting the sucrose crystal lattice.</td>
                            <td class="p-2 border">Maintain syrup at 40–55 °Brix; add 5–10% invert sugar or 0.1% citric acid to syrup to promote in-situ inversion; store at constant temperature</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Cheesy / Off-Flavour</strong></td>
                            <td class="p-2 border">Use of stale milk; lipolysis; proteolysis; microbial contamination</td>
                            <td class="p-2 border">Lipase activity → free fatty acids (butyric, caproic, caprylic acid) → rancid/cheesy flavour. Protease (plasmin) activity → bitter peptides. Psychrotrophic <em>Pseudomonas</em> spp. produce heat-stable lipases/proteases that survive pasteurisation.</td>
                            <td class="p-2 border">Use fresh milk (<6 h from milking or <4°C stored); adequate pasteurisation; good milking hygiene; low SCC milk</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shelf Life & Preservation Science</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Product Type</th>
                            <th class="p-2 border">Shelf Life</th>
                            <th class="p-2 border">Preservation Principle(s)</th>
                            <th class="p-2 border">Spoilage Risks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Fresh (ambient)</strong></td>
                            <td class="p-2 border">1–2 days</td>
                            <td class="p-2 border">Sugar (a<sub>w</sub> ~0.93); cooking (partial sterilisation)</td>
                            <td class="p-2 border"><em>Bacillus cereus</em>, LAB, yeasts, moulds; rapid at >30°C</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fresh (refrigerated, 4°C)</strong></td>
                            <td class="p-2 border">5–7 days</td>
                            <td class="p-2 border">Low temperature + sugar; psychrotrophs remain a risk</td>
                            <td class="p-2 border"><em>Pseudomonas</em>, psychrotrophic <em>Bacillus</em> spp., moulds</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Canned (retorted)</strong></td>
                            <td class="p-2 border">6–12 months (ambient)</td>
                            <td class="p-2 border">Commercial sterilisation (F₀ ≥ 5); hermetic seal; vacuum; a<sub>w</sub> depression by sugar</td>
                            <td class="p-2 border">Under-processing → <em>C. botulinum</em>, <em>C. perfringens</em>; post-process contamination (leaker spoilage) → mixed flora; thermophilic flat sour (<em>B. stearothermophilus</em>) if stored >40°C</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Retort Pouch</strong></td>
                            <td class="p-2 border">3–6 months</td>
                            <td class="p-2 border">Same as canned; shorter life due to higher oxygen permeability of pouch material</td>
                            <td class="p-2 border">Oxidative changes; seal failure; light-induced degradation</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3"><strong>Hurdle Technology Approach:</strong> Modern rasgulla preservation employs the <strong>hurdle concept (Leistner, 1992)</strong> — combining multiple sub-lethal preservation factors (hurdles) that collectively inhibit microbial growth:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Hurdle 1:</strong> Reduced a<sub>w</sub> (0.90–0.94 from sugar)</li>
                <li><strong>Hurdle 2:</strong> Thermal processing (cooking + retorting)</li>
                <li><strong>Hurdle 3:</strong> Hermetic packaging (anaerobic environment)</li>
                <li><strong>Hurdle 4:</strong> Vacuum (inhibits aerobes)</li>
                <li><strong>Hurdle 5:</strong> Low storage temperature (for fresh products)</li>
                <li><strong>Hurdle 6:</strong> Permitted preservatives (sorbic acid/potassium sorbate at ≤500 ppm, where allowed by regulation)</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Quality Evaluation Methods</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Method</th>
                            <th class="p-2 border">Expected Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Sponginess (Texture)</strong></td>
                            <td class="p-2 border">Texture Profile Analysis (TPA) using TA.XT Plus; 50% compression, 1 mm/s crosshead speed; or manual squeeze test</td>
                            <td class="p-2 border">Hardness: 1.0–3.0 N; Springiness: >0.70; Cohesiveness: >0.50; Chewiness: 0.5–1.5 N</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Syrup Absorption</strong></td>
                            <td class="p-2 border">Weight ratio method: (Weight after cooking − Weight before cooking) / Weight before cooking × 100</td>
                            <td class="p-2 border">150–250% weight gain</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Colour</strong></td>
                            <td class="p-2 border">Hunter Lab colorimeter (L*, a*, b* values)</td>
                            <td class="p-2 border">L* > 85 (whiteness); a* ≈ −1 to 0; b* < 10 (low yellowness)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Drained Weight</strong></td>
                            <td class="p-2 border">AOAC method: drain on No. 8 sieve for 2 min; weigh</td>
                            <td class="p-2 border">≥55% of net weight</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Total Solids</strong></td>
                            <td class="p-2 border">Oven drying at 105°C to constant weight (AOAC 925.23)</td>
                            <td class="p-2 border">≥45%</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fat Content</strong></td>
                            <td class="p-2 border">Mojonnier / Gerber method (IS:1224)</td>
                            <td class="p-2 border">≥5% on dry basis</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sucrose</strong></td>
                            <td class="p-2 border">Lane-Eynon or HPLC method</td>
                            <td class="p-2 border">≤55%</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sensory Evaluation</strong></td>
                            <td class="p-2 border">9-point hedonic scale or descriptive analysis; trained panel (n ≥ 8)</td>
                            <td class="p-2 border">Overall acceptability score >7.0/9.0; flavour: sweet, clean dairy; texture: spongy, elastic; colour: white to off-white</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Commercial Sterility (canned)</strong></td>
                            <td class="p-2 border">Incubation at 37°C/10 days + 55°C/5 days; visual (swelling, leakage); pH change; microbial plating</td>
                            <td class="p-2 border">No swelling, no pH change (>0.2 units), no viable organisms on plating</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Recent Advances & Research Trends</h3>
            <ul class="list-disc list-outside pl-5 space-y-3">
                <li><strong>Low-Calorie / Sugar-Free Rasgulla:</strong> Replacement of sucrose with polyols (sorbitol, maltitol) and high-intensity sweeteners (sucralose, stevia glycosides). Challenges include maintaining osmotic driving force for swelling (polyols have lower molecular weight → different osmotic behaviour) and preventing crystallisation. Studies report acceptable quality with 50–75% sucrose replacement using maltitol syrup (Chawla et al., 2014).</li>
                <li><strong>Use of Ultrafiltered (UF) Milk:</strong> UF retentate (2–5× concentrated) bypasses traditional coagulation, providing standardised composition. However, higher casein concentration requires adjusted coagulation pH and kneading parameters. UF-based rasgulla shows improved protein content but may have firmer texture.</li>
                <li><strong>Enzyme-Modified Chhana:</strong> Use of transglutaminase (TGase, EC 2.3.2.13) to introduce ε-(γ-glutamyl)lysine isopeptide bonds in chhana protein → improved structural integrity, reduced disintegration during cooking, and enhanced elasticity (Sharma et al., 2019).</li>
                <li><strong>Soy-Blended / Vegan Rasgulla:</strong> Partial or complete replacement of dairy chhana with soy paneer (tofu coagulated with calcium sulphate or GDL). Soy protein isolate (SPI) gels have different viscoelastic properties; kneading and cooking parameters must be significantly modified. Acceptability is generally lower for 100% soy but reasonable at 20–30% substitution.</li>
                <li><strong>Nanotechnology-Based Packaging:</strong> Nano-ZnO or nano-Ag incorporated into packaging films for antimicrobial effect, extending shelf life of fresh rasgulla by 2–3 days at refrigerated storage (Pathania et al., 2020).</li>
                <li><strong>Ohmic Heating for Cooking:</strong> Volumetric heating via electrical current passing through the conductive sugar syrup → more uniform cooking, reduced surface browning, and 20–30% energy savings compared to conventional kettle cooking.</li>
                <li><strong>3D Printing of Chhana:</strong> Emerging research on extrusion-based 3D printing of kneaded chhana for customised shapes and portion control. Rheological optimisation (yield stress 200–500 Pa, viscosity 50–200 Pa·s) is required for printability.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Key Formulation for Canned Rasgulla (Standard Recipe)</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Ingredient</th>
                            <th class="p-2 border">Quantity (for ~1 kg finished product)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Cow Milk (3.5% fat, 8.5% SNF)</strong></td>
                            <td class="p-2 border">3.0–3.5 L</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Citric Acid (food grade)</strong></td>
                            <td class="p-2 border">6–10 g (as 1% solution)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sugar (for syrup)</strong></td>
                            <td class="p-2 border">500–600 g</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Water (for syrup)</strong></td>
                            <td class="p-2 border">700–800 mL</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Semolina (optional)</strong></td>
                            <td class="p-2 border">5–10 g (1–2% of chhana weight)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Rose Water / Cardamom (optional, for flavour)</strong></td>
                            <td class="p-2 border">2–3 mL / 1–2 pods</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2"><strong>Expected Yield:</strong> 3 L cow milk → ~450–500 g chhana → 15–18 rasgulla balls (after swelling, ~25–30 g each) → ~550–600 g drained rasgulla + ~400–450 g syrup = ~1 kg canned product.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Summary of Critical Scientific Principles</h3>
            <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mt-3">
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li><strong>Acid Coagulation at pH 5.3–5.5</strong> — Charge neutralisation + CCP dissolution → soft, porous casein gel with optimal moisture retention</li>
                    <li><strong>Whey Protein Co-precipitation (80–90°C heating)</strong> — β-Lg/κ-casein disulphide bonding → increased yield and water-holding capacity</li>
                    <li><strong>Kneading</strong> — Mechanical homogenisation of the protein-fat-water system → aligned, smooth, elastic matrix capable of withstanding osmotic and thermal stresses</li>
                    <li><strong>Two-Stage Osmotic Cooking</strong> — Stage 1 (thin syrup): Water influx + steam generation → swelling + pore formation. Stage 2 (thick syrup): Controlled dehydration + sugar infusion → structural firming + preservation</li>
                    <li><strong>Retort Sterilisation (F₀ ≥ 5)</strong> — 12D destruction of <em>C. botulinum</em> spores → commercial sterility for ambient storage of this low-acid food (pH > 4.6)</li>
                    <li><strong>Water Activity Control (a<sub>w</sub> ~0.92)</strong> — Sugar-mediated a<sub>w</sub> depression → inhibition of most bacteria while permitting soft texture; combined with thermal treatment as part of hurdle technology</li>
                </ol>
            </div>
        `
    },
    hi: {
        title: "Rasgulla Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Rasgulla ka Introduction</h3>
            <p>Rasgulla (ya <em>Rasagolla</em>) Indian subcontinent ki ek iconic syrupy mithai hai, jo soft, spongy ball-shaped dumplings se banti hai. Ye dumplings <strong>chhana</strong> (acid se bana hua milk solids) se bante hain aur halke sugar syrup mein cook hoke syrup absorb karte hain. Isko GI (Geographical Indication) status bhi mila hai — Odisha (<em>Odisha Rasagola</em>, GI 2019) aur West Bengal (<em>Banglar Rasogolla</em>, GI 2017) dono ne apne variants register karaye hain, jo iska deep cultural significance dikhata hai.</p>
            <p class="mt-2">Food science ke perspective se, rasgulla ek bahut hi fascinating product hai kyunki iski characteristic <strong>spongy, elastic texture</strong> teen cheezon ke interplay se aati hai — acid-coagulated casein microstructure, mechanical kneading, aur sugar syrup mein osmotically driven hydration. Final product ek high-moisture, intermediate-sugar sweet hai jiska water activity (a<sub>w</sub>) typically <strong>0.90–0.94</strong> ke beech hota hai, jo isko perishable se semi-perishable category mein rakhta hai.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Rasgulla ka Classification</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Type</th>
                            <th class="p-2 border">Characteristics</th>
                            <th class="p-2 border">Shelf Life</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Fresh Rasgulla</strong></td>
                            <td class="p-2 border">Soft, spongy; halke syrup (25–40 °Brix) mein soaked; white se off-white colour</td>
                            <td class="p-2 border">3–5 din (refrigerated)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Canned/Tinned Rasgulla</strong></td>
                            <td class="p-2 border">Commercially sterilised, hermetically sealed containers mein; syrup 40–55 °Brix</td>
                            <td class="p-2 border">6–12 mahine (ambient)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Long-Life / Retort-Pouch Rasgulla</strong></td>
                            <td class="p-2 border">Retort-processed flexible pouches mein; UHT equivalent thermal treatment</td>
                            <td class="p-2 border">3–6 mahine (ambient)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Milk Selection ka Science: Cow Milk Kyun?</h3>
            <p>Milk ka choice rasgulla ki texture ko fundamentally govern karta hai kyunki ye chhana ki properties ko directly affect karta hai. <strong>Cow milk</strong> ko buffalo milk ke comparison mein strongly prefer kiya jaata hai aur iski scientifically established reasons hain:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Cow Milk</th>
                            <th class="p-2 border">Buffalo Milk</th>
                            <th class="p-2 border">Rasgulla par Impact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Fat (%)</strong></td>
                            <td class="p-2 border">3.5–4.5</td>
                            <td class="p-2 border">6.0–8.0</td>
                            <td class="p-2 border">Kam fat → softer, zyada spongy chhana jismein water-holding capacity zyada hoti hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Casein Micelle Size (nm)</strong></td>
                            <td class="p-2 border">150–180</td>
                            <td class="p-2 border">180–220</td>
                            <td class="p-2 border">Chhote micelles → finer, smoother coagulum; kneading mein behtar behaviour</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>β-Casein : κ-Casein Ratio</strong></td>
                            <td class="p-2 border">Lower</td>
                            <td class="p-2 border">Higher</td>
                            <td class="p-2 border">Cow milk mein zyada κ-casein → better colloidal stability, softer curd</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fat Globule Diameter (μm)</strong></td>
                            <td class="p-2 border">3.0–4.0</td>
                            <td class="p-2 border">4.5–8.0</td>
                            <td class="p-2 border">Chhote globules casein matrix mein zyada uniformly distribute hote hain</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Calcium Content (mg/100 mL)</strong></td>
                            <td class="p-2 border">120</td>
                            <td class="p-2 border">195</td>
                            <td class="p-2 border">Kam Ca²⁺ → kamzor casein cross-linking → softer coagulum banta hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Chhana Yield (%)</strong></td>
                            <td class="p-2 border">15–17</td>
                            <td class="p-2 border">20–23</td>
                            <td class="p-2 border">Buffalo chhana harder, grainier hota hai; dense, rubbery rasgulla banta hai</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3"><strong>Scientific Basis:</strong> Cow milk ke casein micelles mein κ-casein (micelle-stabilising fraction) ka ratio zyada hota hai aur colloidal calcium phosphate (CCP) bridging kam hoti hai. Jab acid coagulation <strong>isoelectric point (pH ~4.6 casein ke liye)</strong> ke paas hota hai, tab cow milk ek <em>fragile, open-structured coagulum</em> banata hai jismein moisture retention zyada hoti hai (55–60%). Buffalo milk, iske opposite, ek dense, compact curd banata hai kyunki CCP cross-linking zyada hoti hai aur fat globules bade hote hain jo protein network ko alag tarah se disrupt karte hain, jis se hard chhana banta hai jo spongy rasgulla ke liye suitable nahi hai.</p>
            <p class="mt-2">Standardised commercial production ke liye, milk ko typically <strong>3.5–4.0% fat aur 8.5% SNF</strong> par standardise kiya jaata hai taaki optimal chhana composition mile.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI & BIS Standards for Rasgulla</h3>
            <p>Canned rasgulla ke quality specifications <strong>FSSAI Regulations (Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011)</strong> aur <strong>BIS IS:12974</strong> ke under define kiye gaye hain.</p>
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
                            <td class="p-2 border"><strong>Drained Weight (min, %)</strong></td>
                            <td class="p-2 border">55.0</td>
                            <td class="p-2 border">Adequate product-to-syrup ratio ensure karta hai; excess syrup as filler use hone se rokta hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Total Solids (min, %)</strong></td>
                            <td class="p-2 border">45.0</td>
                            <td class="p-2 border">Adequate milk solid incorporation aur proper syrup concentration reflect karta hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fat on Dry Basis (min, %)</strong></td>
                            <td class="p-2 border">5.0</td>
                            <td class="p-2 border">Whole milk ka use confirm karta hai (skim milk adulteration nahi); mouthfeel mein contribute karta hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sucrose (max, %)</strong></td>
                            <td class="p-2 border">55.0</td>
                            <td class="p-2 border">Excessive sweetness control karta hai; storage ke dauran syrup mein crystallisation rokta hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Total Ash (max, %)</strong></td>
                            <td class="p-2 border">1.5</td>
                            <td class="p-2 border">Mineral content ka indicator; bahut zyada values adulteration suggest karti hain</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Texture</strong></td>
                            <td class="p-2 border">Soft aur spongy</td>
                            <td class="p-2 border">Finger pressure mein ≥30% compress hona chahiye aur shape mein wapas aana chahiye (elastic recovery)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Colour</strong></td>
                            <td class="p-2 border">White se light cream</td>
                            <td class="p-2 border">Browning excessive Maillard reaction ya caramelisation indicate karta hai</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Microbiological Standards (FSSAI)</h4>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Microorganism</th>
                            <th class="p-2 border">Limit (cfu/g)</th>
                            <th class="p-2 border">Significance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Total Plate Count</strong></td>
                            <td class="p-2 border">5 × 10⁴ (fresh); Nil (canned)</td>
                            <td class="p-2 border">Overall hygiene ka indicator</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Coliform Count</strong></td>
                            <td class="p-2 border">10 (fresh); Nil (canned)</td>
                            <td class="p-2 border">Post-processing contamination ka indicator</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>E. coli</em></strong></td>
                            <td class="p-2 border">Absent/g</td>
                            <td class="p-2 border">Faecal contamination ka indicator</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Yeast & Mould</strong></td>
                            <td class="p-2 border">50 (fresh); Nil (canned)</td>
                            <td class="p-2 border">Spoilage organisms; osmophilic yeasts high-sugar environment mein grow kar sakti hain</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>Staphylococcus aureus</em></strong></td>
                            <td class="p-2 border">100</td>
                            <td class="p-2 border">Poor handling hygiene indicate karta hai; heat-stable enterotoxins produce karta hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong><em>Salmonella</em></strong></td>
                            <td class="p-2 border">Absent/25 g</td>
                            <td class="p-2 border">Dairy products mein concern ka pathogen</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Rasgulla ki Detailed Processing with HACCP-Based Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Comprehensive Processing Flowchart</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">📥 Milk Reception, Testing & Standardisation (3.5% Fat, 8.5% SNF) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">🧹 Filtration / Clarification <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">🔥 Milk ko 80–90°C tak Heat karna (Pasteurisation) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">🌡️ Coagulation Temperature tak Cool karna (70–80°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">🧪 Acid Coagulation (1–2% Citric Acid; target pH 5.3–5.5) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">⏳ Settling (5–10 min), Whey ko Drain aur Press karna</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">🚿 Chhana ko Thande Paani se Dhona (residual acid nikalta hai, mass cool hota hai)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">🤲 Chhana ki Kneading (8–12 min jab tak smooth, homogeneous, crack-free na ho) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP-2</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">⚖️ Portioning (10–15 g har ek) & Gole Ball Banana (smooth, crack-free spheres)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">🫧 Stage 1 Cooking: Patla Syrup (40–50 °Brix), 100°C, 10–15 min (Swelling Phase) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">🍯 Stage 2 Cooking: Gadha Syrup (55–60 °Brix), 100°C, 5–8 min (Firming Phase) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">❄️ Equilibration — Syrup (40–45 °Brix) mein Soaking & Cooling 2–4 ghante</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">🥫 Cans/Pouches mein Hot Filling Syrup ke saath ≥82°C par <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-4</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">🔒 Hermetic Seaming / Sealing <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP-3</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">🧫 Retort Sterilisation (115–121°C, F₀ = 5–8 min) — canned product ke liye <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-5</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">💧 Cooling (≤40°C tak), Labelling, Coding & Storage</div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Har Processing Step ki Detailed Scientific Explanation</h3>
            <ol class="list-decimal list-outside pl-5 space-y-6">

                <li><strong>Milk Reception, Testing & Standardisation (PRP)</strong>
                    <p>Fresh cow milk (ya standardised mixed milk) receive karke platform tests kiye jaate hain:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Organoleptic test:</strong> Colour, smell, taste (off-flavours detect karta hai jo mastitis, feed taints, ya adulteration se aa sakti hain)</li>
                        <li><strong>COB (Clot-on-Boiling) test:</strong> High-acid milk (pH < 6.4) ya colostrum detect karta hai; positive results matlab casein heat ke under unstable hai</li>
                        <li><strong>Alcohol test (68–75% ethanol):</strong> Calcium ion imbalance aur low heat stability screen karta hai</li>
                        <li><strong>Lactometer reading:</strong> Specific gravity 1.028–1.032 at 20°C (paani milawat detect karta hai)</li>
                        <li><strong>Fat (Gerber method):</strong> 3.5–4.0% par standardise kiya jaata hai</li>
                        <li><strong>Acidity (titratable):</strong> 0.13–0.15% lactic acid (fresh milk ke liye)</li>
                        <li><strong>Adulteration tests:</strong> Starch, urea, neutralisers, detergents ke liye</li>
                        <li><strong>Antibiotic residues:</strong> Rapid screening kits (Delvotest, Charm II) — antibiotics coagulation ko inhibit kar sakte hain aur public health risks pose karte hain</li>
                        <li><strong>Somatic Cell Count (SCC):</strong> < 4 × 10⁵ cells/mL (high SCC mastitis indicate karta hai; mastitic milk mein altered protein profile hota hai jismein whey proteins aur plasmin activity elevated hoti hai, jis se poor quality chhana banta hai)</li>
                    </ul>
                    <p class="mt-2"><strong>Standardisation ka rationale:</strong> Fat ko 3.5–4.0% par isliye standardise karte hain kyunki excess fat (>5%) chhana ko greasy aur knead karne mein mushkil banata hai, jabki bahut kam fat (<2%) dry, hard chhana produce karta hai. SNF ~8.5% maintain kiya jaata hai taaki proper coagulum formation ke liye adequate casein content ho. <strong>Casein-to-fat ratio</strong> approximately 0.75:1 optimal maana jaata hai.</p>
                </li>

                <li><strong>Filtration / Clarification (PRP)</strong>
                    <p>Milk ko in-line filters ya centrifugal clarifiers se pass kiya jaata hai taaki physical contaminants (baal, dhool, udder tissue, keede) nikal jaayein. Modern plants mein bactofugation (9,000–12,000 × g par centrifugal removal) use hoti hai jo spore counts ko 98% tak reduce kar sakti hai, jis se final thermal process ka safety margin improve hota hai.</p>
                </li>

                <li><strong>Milk ko Heat karna — 80–90°C (CCP-1: Pasteurisation & Protein Modification)</strong>
                    <p>Milk ko <strong>80–90°C par heat karke 5 minute hold</strong> kiya jaata hai. Is step ke multiple critical functions hain:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Pathogen Destruction:</strong> Vegetative pathogens ka >5-log reduction achieve hota hai jismein <em>Salmonella</em> spp., <em>Listeria monocytogenes</em> (D<sub>72°C</sub> = 0.5–2 s), <em>E. coli</em> O157:H7, <em>Campylobacter</em> spp., aur <em>Staphylococcus aureus</em> shamil hain. Note: Heat-stable staphylococcal enterotoxins (SE-A se SE-E) is treatment ko bhi survive kar sakte hain agar ye pehle se high-SCC ya improperly stored milk mein ban chuke hon.</li>
                        <li><strong>Whey Protein Denaturation:</strong> >70°C temperature par β-lactoglobulin (β-Lg) irreversible unfolding se guzarta hai, jismein uska free sulfhydryl (-SH) group (Cys-121) expose hota hai. Denatured β-Lg micelle surface par κ-casein ke saath <strong>disulphide (S–S) interchange reactions</strong> ke through interact karta hai, β-Lg/κ-casein complexes banata hai. Ye modification isliye crucial hai kyunki:
                            <ul class="list-circle list-outside pl-5 mt-1">
                                <li>Ye coagulation ka mode purely rennet-type se acid-heat type mein change kar deta hai</li>
                                <li>Denatured whey proteins casein ke saath co-precipitate hote hain, <strong>chhana yield 4–6% badha dete hain</strong></li>
                                <li>Trapped whey proteins chhana ki water-holding capacity badhate hain, jo spongy texture mein contribute karta hai</li>
                            </ul>
                        </li>
                        <li><strong>Enzyme Inactivation:</strong> Native milk lipase destroy ho jaata hai (lipolysis aur rancidity rokta hai), alkaline phosphatase (ALP — pasteurisation verification marker ke roop mein use hota hai), aur plasmin precursors bhi</li>
                        <li><strong>Calcium Equilibrium Shift:</strong> Heating se soluble calcium colloidal phase mein migrate hota hai (Ca²⁺ + HPO₄²⁻ → Ca₃(PO₄)₂ micelle par), jo baad mein acidification ke dauran coagulation behaviour ko influence karta hai</li>
                    </ul>
                    <div class="bg-red-50 border-l-4 border-red-400 p-3 mt-3">
                        <strong>CCP-1 Control Parameters:</strong><br>
                        • Critical Limit: ≥80°C for ≥5 minutes<br>
                        • Monitoring: Continuous temperature recording (RTD sensors), flow diversion valve<br>
                        • Corrective Action: Agar temperature 80°C se neeche gir jaaye to milk re-process karo; balance tank mein divert karo<br>
                        • Verification: ALP test (negative hona chahiye — ALP 72°C/15s par inactivate ho jaata hai)
                    </div>
                    <p class="mt-3"><strong>Over-Heating ka Note:</strong> 95°C se zyada ya holding time >10 min se excessive Maillard browning hoti hai (lactose + casein ke lysine residues → Amadori compounds → melanoidins), jis se off-white/yellowish chhana aur cooked flavour aata hai. Ye casein cross-linking density bhi badhata hai, jo hard chhana produce karta hai.</p>
                </li>

                <li><strong>Coagulation Temperature tak Cool karna — 70–80°C (oPRP-1)</strong>
                    <p>Heated milk ko acid addition se pehle <strong>70–80°C</strong> tak cool kiya jaata hai. Ye temperature range isliye critical hai:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>60°C se neeche:</strong> Coagulation slow hota hai; casein micelles theek se reaggregate nahi karte; fine, dispersed curds bante hain jo drain karna mushkil hota hai → low-yield, high-moisture chhana jismein weak body hoti hai</li>
                        <li><strong>70–80°C (optimal):</strong> Rapid, complete coagulation; bade, well-defined curd particles bante hain; efficient whey expulsion; optimal moisture (55–60%) chhana mein</li>
                        <li><strong>90°C se zyada:</strong> Bahut zyada rapid coagulation; curds tough aur rubbery ho jaate hain excessive protein denaturation aur cross-linking ki wajah se; calcium phosphate precipitation bhi bahut zyada hoti hai</li>
                    </ul>
                    <p class="mt-2"><strong>Scientific Explanation:</strong> 70–80°C par, heat-induced disulphide bonding aur acid-mediated charge neutralisation (jaise pH pI ki taraf girta hai) ke combined effects ek aisa coagulum produce karte hain jismein <em>firmness aur porosity ka optimal balance</em> hota hai. Casein micelles, jo pehle se heat se partially destabilised hain (κ-casein/β-Lg complex formation ki wajah se), acid addition par hydrophobic interactions aur calcium bridging ke through rapidly aggregate ho jaate hain.</p>
                </li>

                <li><strong>Acid Coagulation — pH 5.3–5.5 (CCP-2)</strong>
                    <p>Food-grade acid solution hot milk mein gentle stirring ke saath add ki jaati hai taaki coagulation start ho. Common coagulants mein shamil hain:</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Coagulant</th>
                                    <th class="p-2 border">Typical Concentration</th>
                                    <th class="p-2 border">Rate Used</th>
                                    <th class="p-2 border">Chhana Quality par Effect</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong>Citric Acid</strong></td>
                                    <td class="p-2 border">1–2% w/v solution</td>
                                    <td class="p-2 border">2–3 g/L milk</td>
                                    <td class="p-2 border">Preferred — soft, smooth chhana banata hai; Ca²⁺ ions ko chelate karta hai, casein network loose karta hai</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Lactic Acid</strong></td>
                                    <td class="p-2 border">1% v/v</td>
                                    <td class="p-2 border">2–3 mL/L milk</td>
                                    <td class="p-2 border">Milder flavour; citric acid ki tulna mein thoda firmer chhana banata hai</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Calcium Lactate / Tartaric Acid</strong></td>
                                    <td class="p-2 border">1% solution</td>
                                    <td class="p-2 border">Variable</td>
                                    <td class="p-2 border">Kam common; calcium lactate Ca²⁺ add karta hai → harder curd</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Whey (Khatta)</strong></td>
                                    <td class="p-2 border">Natural acidity (~0.5% LA)</td>
                                    <td class="p-2 border">~20% v/v milk ka</td>
                                    <td class="p-2 border">Traditional method; inconsistent pH control; contamination risk zyada</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p class="mt-3"><strong>Coagulation Chemistry:</strong></p>
                    <p>Acid coagulation ke mechanism mein multiple concurrent physicochemical processes involve hain:</p>
                    <ol class="list-decimal list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Charge Neutralisation:</strong> Native casein micelles par net negative charge hota hai (zeta potential ≈ −20 mV at pH 6.7) jo ionised phosphoserine residues aur κ-casein ke protruding C-terminal ("hairy layer" jo steric/electrostatic stabilisation deta hai) ki wajah se. Jaise pH 6.7 se 5.3 ki taraf girta hai, carboxyl aur phosphate groups progressively protonate ho jaate hain, jo net negative charge reduce karta hai. <strong>Isoelectric point (pI ≈ 4.6)</strong> par net charge zero hota hai aur electrostatic repulsion minimum. Lekin coagulation pI se bahut upar (pH ~5.3–5.5) par hi shuru ho jaata hai kyunki:
                            <ul class="list-circle list-outside pl-5 mt-1">
                                <li>70–80°C par hydrophobic interactions significantly enhanced hote hain</li>
                                <li>κ-casein "hairy layer" pehle se β-Lg binding se partially compromised ho chuka hai</li>
                                <li>Combined heat + acid destabilisation mein cold acid alone ki tulna mein kam charge neutralisation chahiye</li>
                            </ul>
                        </li>
                        <li><strong>Colloidal Calcium Phosphate (CCP) Dissolution:</strong> CCP nanocluster (Ca₉(PO₄)₆ complexes) casein sub-micelles ko aapas mein cement karte hain. Acid CCP ko dissolve karta hai: Ca₃(PO₄)₂ + 6H⁺ → 3Ca²⁺ + 2H₃PO₄. Ye internal micellar structure ko weaken karta hai, progressive dissociation cause karta hai. Released Ca²⁺ ions phir adjacent casein molecules ke carboxyl groups ke beech intermolecular bridging mein participate karte hain, jo gel/curd formation mein contribute karta hai.</li>
                        <li><strong>Hydrophobic Aggregation:</strong> Jaise charge repulsion kam hoti hai, αs1-, αs2-, aur β-casein par exposed hydrophobic patches hydrophobic interactions ke through rapid aggregation mediate karte hain (elevated temperature par ΔG < 0).</li>
                    </ol>

                    <p class="mt-3"><strong>pH 5.3–5.5 kyun aur Neeche Kyun NAHI?</strong></p>
                    <p>Ye single most critical parameter hai jo rasgulla quality determine karta hai:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>pH > 5.8:</strong> Incomplete coagulation; whey mein excessive casein aur fat loss (whey mein >1.2% protein); mushy, weak chhana jo cooking mein bikhar jaata hai</li>
                        <li><strong>pH 5.3–5.5 (OPTIMAL):</strong> Complete casein precipitation denatured whey proteins ke co-precipitation ke saath; fat retention >90%; chhana ki cohesive, slightly elastic structure kneading ke liye ideal. Casein network apne porous structure mein sufficient water retain karta hai.</li>
                        <li><strong>pH < 5.0:</strong> Excessive acidification casein matrix ka over-contraction (syneresis) cause karti hai; chhana dry, crumbly, aur acidic taste ka ho jaata hai; whey mein excessive calcium release hota hai → bahut weak internal bonding → rasgulla cooking mein toot jaata hai</li>
                        <li><strong>pH < 4.6 (pI par ya neeche):</strong> Maximum casein compaction; extremely hard, dry, aur sour chhana; rasgulla ke liye bilkul unusable</li>
                    </ul>
                    
                    <div class="bg-red-50 border-l-4 border-red-400 p-3 mt-3">
                        <strong>CCP-2 Control Parameters:</strong><br>
                        • Critical Limit: Whey pH 5.3–5.5; clear, greenish-yellow whey (complete coagulation without over-acidification indicate karta hai)<br>
                        • Monitoring: pH meter buffer standards (pH 4.0 aur 7.0) ke against calibrated; whey clarity ki visual assessment<br>
                        • Corrective Action: Agar pH > 5.6 → aur acid slowly add karo; agar pH < 5.2 → paani se dilute karo ya fresh batch ke saath blend karo<br>
                        • Verification: Periodic whey titration; fat-in-whey analysis (< 0.5% hona chahiye)
                    </div>
                </li>

                <li><strong>Settling, Draining & Pressing</strong>
                    <p>Coagulation ke baad, mixture ko <strong>5–10 minute settle</strong> hone diya jaata hai taaki curd particles aggregate ho jaayein. Phir coagulum ko muslin cloth ya perforated stainless-steel vessel se drain kiya jaata hai. Gentle pressing se whey nikali jaati hai — excessive pressure se bachna chahiye kyunki isse over-dehydration hota hai.</p>
                    <p class="mt-2"><strong>Drained chhana mein target moisture: 55–60%</strong></p>
                    <p class="mt-1">Is moisture range ka scientific basis: 55–60% moisture par, casein network ek <em>hydrated, open gel</em> ke roop mein exist karta hai jahan paani mechanically capillary spaces mein trapped hai aur chemically casein ke polar groups se bound hai. Is level ki hydration se milta hai:
                    <ul class="list-disc list-outside pl-5 mt-1">
                        <li>Kneading ke liye sufficient plasticity bina cracking ke</li>
                        <li>Osmotic cooking ke dauran swelling facilitate karne ke liye enough free water</li>
                        <li>Boiling syrup mein disintegration rokne ke liye structural integrity</li>
                    </ul>
                </li>

                <li><strong>Thande Paani se Dhona (Washing)</strong>
                    <p>Drained chhana ko running cold water (10–15°C) ke neeche 3–5 minute dhoya jaata hai. Is step ke teen purposes hain:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Acid Removal:</strong> Residual citric/lactic acid nikal jaata hai, jo kneading se pehle storage ke dauran chhana matrix ko harden kar sakta tha continuous acidification se</li>
                        <li><strong>Temperature Reduction:</strong> Chhana ko ~70°C se ~25–30°C tak rapidly cool karta hai. Ye important hai kyunki casein gels cooling par <strong>structural relaxation aur partial re-arrangement</strong> undergo karte hain, zyada workable ban jaate hain</li>
                        <li><strong>Whey Protein Precipitation:</strong> Cold shock se koi bhi remaining soluble aggregated whey proteins casein matrix ke saath associate ho jaate hain, yield marginally improve hota hai</li>
                    </ul>
                </li>

                <li><strong>Chhana ki Kneading — 8–12 Minute (oPRP-2)</strong>
                    <p>Ye arguably <strong>rasgulla texture determine karne ke liye sabse critical step</strong> hai. Drained, cooled chhana ko vigorously knead kiya jaata hai — traditionally hatheli ki heel se flat stone ya steel surface par, ya modern facilities mein planetary mixer ya specialized chhana-kneading machine se.</p>
                    
                    <p class="mt-3"><strong>Kneading ka Scientific Basis:</strong></p>
                    <p>Raw chhana ki ek <em>coarse, granular, heterogeneous</em> structure hoti hai jo casein aggregates (~10–100 μm), entrapped fat globules, aur whey ke pockets se bani hoti hai. Kneading se ye transformations hote hain:</p>
                    <ol class="list-decimal list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Coarse Aggregates ka Breakdown:</strong> Mechanical shear bade casein aggregate clusters ko submicron-scale particles mein tod deta hai, ek <em>fine, homogeneous paste</em> create karta hai. Electron microscopy studies dikhate hain ki well-kneaded chhana mein protein matrix mein uniform pore sizes 1–5 μm hoti hain, jabki unkneaded chhana mein 10–50 μm.</li>
                        <li><strong>Fat Redistribution:</strong> Free fat aur disrupted fat globules evenly casein matrix mein disperse ho jaate hain, plasticisers ki tarah kaam karte hain. Ye effective protein-protein contact area reduce karta hai, plasticity improve karta hai aur hardness kam karta hai. Fat ball formation ke dauran casein strands ko lubricate karta hai.</li>
                        <li><strong>Entrapped Air & Free Whey ka Expulsion:</strong> Kneading se air pockets nikal jaate hain jo nahi to cooking ke dauran expand hoke surface cracking ya crumbling cause karte. Thodi si residual whey bhi express hoti hai.</li>
                        <li><strong>Protein Alignment ka Development:</strong> Wheat dough mein gluten development ke analogous (lekin identical nahi), kneading casein molecules ko ek zyada ordered, slightly fibrous structure mein align karta hai. Jabki casein wo disulphide-bonded viscoelastic network nahi banata jo gluten banata hai, repeated shearing se <strong>oriented hydrophobic domains</strong> aur <strong>calcium-mediated ionic cross-links</strong> create hote hain jo kneaded mass ko <em>smooth, cohesive, slightly elastic character</em> dete hain.</li>
                        <li><strong>Moisture Equilibration:</strong> Kneading se bound (non-freezable) aur free (freezable) water phases ke beech uniform distribution ensure hoti hai, jo cooking ke dauran even osmotic response ke liye critical hai.</li>
                    </ol>

                    <p class="mt-3"><strong>Endpoint Determination:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Mass smooth, slightly glossy, aur non-sticky feel hona chahiye</li>
                        <li>Chhota portion (10–12 g) ek perfectly smooth sphere mein <strong>bina visible cracks ke</strong> roll hona chahiye</li>
                        <li>Jab thumb aur forefinger ke beech press karo, mass smoothly deform ho bina crumble hue</li>
                        <li>Instrumental assessment: Texture profile analysis (TPA) showing hardness < 1.5 N, adhesiveness < 0.3 N·s, cohesiveness > 0.5</li>
                    </ul>

                    <p class="mt-3"><strong>Under-kneading:</strong> Coarse texture → balls cooking mein crack hote hain → syrup mein bikhar jaate hain</p>
                    <p><strong>Over-kneading:</strong> Excessive protein orientation → bahut elastic, tough rasgulla; saath hi excessive fat expression surface ko oily banata hai</p>

                    <div class="bg-orange-50 border-l-4 border-orange-400 p-3 mt-3">
                        <strong>oPRP-2 Control Parameters:</strong><br>
                        • Operational Limit: 8–12 minute kneading; crack-free ball formation test<br>
                        • Monitoring: Trained operator assessment (visual + tactile); process validation ke liye periodic TPA measurement<br>
                        • Corrective Action: Agar ball-formation test fail ho to kneading continue karo; agar over-kneaded ho to fresh chhana ke saath blend karo
                    </div>
                </li>

                <li><strong>Portioning (10–15 g) & Ball Formation</strong>
                    <p>Kneaded chhana ko <strong>uniform portions 10–15 g ke</strong> (standard-sized rasgulla ke liye) mein divide karke hatheli ke beech smooth, crack-free spheres mein roll kiya jaata hai. Size ki uniformity isliye critical hai:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>Non-uniform sizes se differential cooking hota hai — chhote balls overcooked (tough/rubbery) ho jaate hain jabki bade ones undercooked (dense/raw-tasting centre) rehte hain</li>
                        <li>Osmotic equilibration time radius ke square ke proportional hota hai (Fick's second law: t ∝ r²/D, jahan D sucrose ki effective diffusivity hai)</li>
                        <li>Canning ke liye, uniform drained weight ke liye uniform ball size zaroori hai</li>
                    </ul>
                    <p class="mt-2"><strong>Note:</strong> Kuch manufacturers ball formation se pehle chhana mein <strong>1–2% semolina (suji/rava)</strong> ya <strong>refined wheat flour (maida)</strong> add karte hain. Starch granules cooking ke dauran 60–70°C par gelatinise hote hain, apne weight ka 10–15× paani absorb karte hain, swell hote hain aur additional porous structure create karte hain. Lekin excessive starch addition (>5%) gummy texture aur characteristic dairy flavour ka loss cause karta hai.</p>
                </li>

                <li><strong>Two-Stage Sugar Syrup mein Cooking (CCP-3) — Core Transformation</strong>
                    <p>Ye step raw chhana balls ko spongy, syrup-saturated rasgulla mein transform karta hai ek carefully controlled osmotic aur thermal process ke through.</p>
                    
                    <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Stage 1: Swelling Phase — Patla Syrup (40–50 °Brix), 100°C, 10–15 min</h4>
                    <p>Chhana balls ko dheere se <strong>vigorously boiling patla sugar syrup</strong> (40–50 °Brix, matlab 40–50 g sucrose per 100 g solution) mein utara jaata hai. Bartan ko dhakkan se dhak diya jaata hai taaki continuous rolling boil maintain rahe.</p>
                    
                    <p class="mt-2"><strong>Yahan Kaam Karne Wale Scientific Mechanisms:</strong></p>
                    <ol class="list-decimal list-outside pl-5 mt-2 space-y-3">
                        <li><strong>Osmosis & Water Absorption:</strong>
                            <p>Ye rasgulla swelling ko control karne wala dominant mechanism hai. Chhana ball ke andar hai:
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>~55–60% paani (dissolved lactose ~4.5%, minerals ~1.5%, organic acids ke saath)</li>
                                <li>Effective internal concentration: ~10–12 °Brix</li>
                            </ul>
                            Surrounding syrup 40–50 °Brix par hai. Syrup zyada concentrated hone ke baawajood, <strong>casein-protein network ek semi-permeable membrane ki tarah kaam karta hai</strong>, selectively water molecules (aur kuch chhote solutes) ko andar aane deta hai jabki bade sucrose molecules (MW 342 Da) ko partially exclude karta hai. Osmotic pressure difference (Δπ) relatively dilute outer syrup se chhana ball mein paani drive karta hai:
                            </p>
                            <p class="mt-1 font-mono text-sm">Δπ = (C<sub>syrup</sub> − C<sub>internal</sub>) × RT / V<sub>m</sub></p>
                            <p class="mt-1">jahan C molar concentration hai, R gas constant hai, T temperature hai, aur V<sub>m</sub> paani ka partial molar volume hai.</p>
                            <p class="mt-1">Is water influx se balls <strong>apne original volume ka 1.5–2.5 guna</strong> (aur approximately apne original weight ka 2–3 guna) swell ho jaate hain.</p>
                        </li>
                        <li><strong>Steam Generation & Internal Pore Formation:</strong>
                            <p>100°C par, chhana ball ke andar ka paani apne boiling point par pahunch jaata hai. Protein matrix ke andar <strong>steam ke micro-bubbles</strong> bante hain, ek internal porous, spongy structure create karte hain — bread ya cake leavening ke principle ke similar. Heat aur hydration se softened protein network in steam pockets ko accommodate karne ke liye stretch hota hai bina rupture hue (provided kneading adequate thi). Ye rasgulla ki characteristic <strong>spongy, springy texture</strong> ke liye responsible primary mechanism hai. Jab compress karte hain, ye air cells recoil karte hain, "squeeze-and-release" sensation dete hain.</p>
                        </li>
                        <li><strong>Protein Matrix Modification:</strong>
                            <p>100°C par prolonged boiling se casein aur residual whey proteins ka further denaturation aur aggregation hota hai. Protein network ek relatively <em>fragile gel</em> se ek zyada <em>robust, elastic, cross-linked matrix</em> mein transition karta hai jo:
                            <ul class="list-disc list-outside pl-5 mt-1">
                                <li>Internal steam pressure ko crumble hue bina withstand kar sake</li>
                                <li>Handling aur packaging ke dauran structural integrity maintain kare</li>
                                <li>Desired "bounce-back" texture ke liye sufficient elasticity develop kare</li>
                            </ul>
                            Heat-induced <strong>lysinoalanine (LAL)</strong> cross-links aur <strong>isopeptide bonds</strong> (ε-(γ-glutamyl)lysine) ka formation structural rigidity mein contribute karta hai.</p>
                        </li>
                        <li><strong>Sucrose Diffusion (Slow):</strong>
                            <p>Jabki paani rapidly ball mein enter karta hai, sucrose ka inward diffusion bahut slow hai (D<sub>sucrose</sub> ≈ 5 × 10⁻¹⁰ m²/s at 100°C vs. D<sub>water</sub> ≈ 6 × 10⁻⁹ m²/s). Ye differential transport rate hi hai jo net swelling drive karta hai. Time ke saath, sucrose gradually penetrate karta hai, poori ball mein sweetness contribute karta hai.</p>
                        </li>
                    </ol>

                    <p class="mt-3"><strong>Critical Process Variables — Stage 1:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Syrup concentration bahut kam (<35 °Brix):</strong> Excessive osmotic water influx → balls bahut rapidly swell hote hain, protein network rupture ho jaata hai → bikhar jaate hain</li>
                        <li><strong>Syrup concentration bahut zyada (>55 °Brix):</strong> Reverse osmosis hota hai → paani balls se bahar nikalta hai → wo shrink ho jaate hain aur dense, hard, aur non-spongy ban jaate hain</li>
                        <li><strong>Temperature boiling se neeche:</strong> Insufficient steam generation → internal pore formation nahi hota → dense, doughy texture</li>
                        <li><strong>Cooking ke dauran dhakkan khula:</strong> Temperature gir jaata hai, boiling sustain nahi hoti, steam trap nahi hota → poor expansion</li>
                    </ul>

                    <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Stage 2: Firming Phase — Gadha Syrup (55–60 °Brix), 100°C, 5–8 min</h4>
                    <p>Swollen rasgullas ko carefully <strong>gadhe sugar syrup (55–60 °Brix)</strong> mein transfer karke 5–8 minute ubala jaata hai.</p>
                    
                    <p class="mt-2"><strong>Scientific Purpose:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Controlled Dehydration (Reverse Osmosis):</strong> High-concentration syrup ki ab water activity (a<sub>w</sub> ≈ 0.86 at 60 °Brix) swollen ball interior (a<sub>w</sub> ≈ 0.97–0.98) se <em>kam</em> hai. Ye paani ko rasgulla se <em>bahar</em> drive karta hai, partial shrinkage cause karta hai (typically 10–15% volume reduction). Ye controlled dehydration protein structure ko firm karta hai aur rasgulla ko overly soft ya fragile hone se rokta hai.</li>
                        <li><strong>Sugar Infusion:</strong> High concentration gradient ab sucrose ke inward diffusion ko favour karta hai. Rasgulla sugar absorb karta hai, jo iska internal a<sub>w</sub> lower karta hai, preservation mein contribute karta hai. Final internal sucrose concentration approximately 35–45 °Brix par equilibrate hota hai.</li>
                        <li><strong>Structural Consolidation:</strong> Partial dehydration aur sugar penetration ka combination protein matrix ko "set" karta hai, ek firmer lekin phir bhi elastic aur spongy structure create karta hai. Sugar protein network ke andar ek <em>plasticiser</em> ki tarah kaam karta hai, excessive hardening rokta hai.</li>
                    </ul>

                    <div class="bg-red-50 border-l-4 border-red-400 p-3 mt-3">
                        <strong>CCP-3 Control Parameters:</strong><br>
                        • Critical Limits: Stage 1: 40–50 °Brix, rolling boil (≥98°C), 10–15 min; Stage 2: 55–60 °Brix, rolling boil, 5–8 min<br>
                        • Monitoring: Syrup Brix ke liye calibrated refractometer; temperature ke liye thermometer/thermocouple; timer; swelling ka visual observation (1.5–2× volume increase)<br>
                        • Corrective Action: Brix adjust karo paani se (agar zyada hai) ya sugar se (agar kam hai); ball texture assessment ke basis par cooking time extend/reduce karo<br>
                        • Verification: Rasgulla balls ka periodic internal temperature check; texture aur weight measurements
                    </div>
                </li>

                <li><strong>Equilibration — Halke Syrup mein Soaking & Cooling (2–4 ghante)</strong>
                    <p>Two-stage cooking ke baad, rasgullas ko <strong>halke syrup (40–45 °Brix)</strong> mein transfer karke 2–4 ghante mein gradually room temperature tak soak aur cool hone diya jaata hai.</p>
                    <p class="mt-2"><strong>Scientific Purpose:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Osmotic Equilibration:</strong> Soaking ke dauran, rasgulla ki internal concentration gradually surrounding syrup ke saath equilibrate hoti hai. Kyunki ball interior (Stage 2 se) ~35–45 °Brix par ho sakta hai aur soaking syrup 40–45 °Brix par hai, net osmotic driving force minimal hai, jo gentle re-hydration aur kisi bhi over-firmed surface layers ki softening allow karta hai.</li>
                        <li><strong>Sucrose Penetration Completion:</strong> Fick's second law ball centre mein sucrose ke continued diffusion ko govern karta hai. Lower temperatures par diffusion slow hota hai, lekin extended soaking time compensate karta hai. Poore cross-section mein uniform sweetness achieve hoti hai.</li>
                        <li><strong>Protein Relaxation:</strong> Jaise temperature girta hai, thermally expanded protein network slightly contract hota hai aur stress relaxation undergo karta hai, apni final equilibrium conformation achieve karta hai. Ye serving temperature par final firmness aur elasticity determine karta hai.</li>
                        <li><strong>Flavour Development:</strong> Subtle caramel aur dairy flavour notes syrup aur chhana matrix ke beech equilibrate hote hain.</li>
                    </ul>
                </li>

                <li><strong>Cans/Pouches mein Hot Filling (CCP-4)</strong>
                    <p>Shelf-stable products ke liye, rasgullas ko carefully pre-cleaned, sanitised <strong>tinplate cans (internally lacquered)</strong> ya <strong>retortable pouches (PET/Al/PP laminate)</strong> mein rakha jaata hai, aur container ko hot sugar syrup se <strong>≥82°C</strong> (typically 85–90°C) par fill kiya jaata hai.</p>
                    <p class="mt-2"><strong>Hot Filling ka Scientific Basis:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Headspace De-aeration:</strong> Hot syrup headspace mein dissolved oxygen aur trapped air ko displace karta hai. Cooling par, headspace mein steam condense hota hai, ek <strong>partial vacuum (200–400 mm Hg)</strong> create karta hai. Ye vacuum:
                            <ul class="list-circle list-outside pl-5 mt-1">
                                <li>Oxidative deterioration (lipid oxidation, browning) retard karta hai</li>
                                <li>High altitudes par ya thermal processing ke dauran can bulging rokta hai</li>
                                <li>Obligate aerobes ki growth inhibit karta hai</li>
                            </ul>
                        </li>
                        <li><strong>Surface Contaminants ka Thermal Inactivation:</strong> Hot fill container ki inner surface aur rasgulla ki surface ko sterilise karta hai, retorting se pehle initial microbial load reduce karta hai</li>
                        <li><strong>Retorting ke dauran Improved Heat Transfer:</strong> Hot contents retort sterilisation ke dauran come-up time reduce karte hain, zyada uniform thermal treatment ensure karte hain</li>
                    </ul>
                    <div class="bg-red-50 border-l-4 border-red-400 p-3 mt-3">
                        <strong>CCP-4 Control Parameters:</strong><br>
                        • Critical Limit: Fill temperature ≥82°C; headspace 6–10 mm<br>
                        • Monitoring: Fill temperature probe; headspace gauge<br>
                        • Corrective Action: 82°C se neeche fill hue containers reject karo; headspace adjust karo
                    </div>
                </li>

                <li><strong>Hermetic Seaming / Sealing (oPRP-3)</strong>
                    <p>Cans ko <strong>double-seam</strong> operation se seal kiya jaata hai (pehla operation: can body flange aur end curl ka interlocking; doosra operation: tight, hermetic seal mein compression). Pouches ke liye, <strong>impulse ya continuous heat sealing</strong> use hoti hai.</p>
                    <p class="mt-2"><strong>Quality Control:</strong> Hermeticity ke liye double-seam dimensions critical hain:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Seam thickness:</strong> Seam micrometer se measure hota hai; specification ke ±0.05 mm ke andar hona chahiye</li>
                        <li><strong>Seam overlap (OL%):</strong> Minimum 45% (typically >50%) — formula: OL% = [(BH + CH) − (ST − 1.1 × t<sub>e</sub>)] / [(3 × t<sub>e</sub>) − (ST − 1.1 × t<sub>e</sub>)] × 100</li>
                        <li><strong>Body hook aur cover hook tightness ratings:</strong> Visual/cross-section evaluation par ≥80% score hona chahiye</li>
                        <li><strong>Wrinkle rating:</strong> <50% (excessive wrinkling → microchannels → post-process contamination)</li>
                    </ul>
                    <p class="mt-2">Visual aur destructive seam examinations production ke dauran har 30 minute conduct kiye jaate hain. Koi bhi seam defect (droop, cut-over, false seam, spinner) ek critical failure hai jismein immediate line stoppage zaroori hai.</p>
                </li>

                <li><strong>Retort Sterilisation — 115–121°C, F₀ = 5–8 min (CCP-5)</strong>
                    <p>Sealed containers ko retort (batch ya continuous) mein <strong>commercial sterilisation</strong> di jaati hai taaki ambient temperature par shelf stability achieve ho.</p>
                    
                    <p class="mt-2"><strong>Target Microorganism:</strong> <em>Clostridium botulinum</em> (Type A & B) — low-acid canned foods (pH > 4.6) mein public health significance ka sabse heat-resistant pathogen. Kyunki rasgulla syrup mein approximately <strong>pH 5.5–6.5</strong> (4.6 se bahut zyada) par hai, isko <strong>low-acid food</strong> classify kiya jaata hai jisko botulinum cook chahiye.</p>
                    
                    <p class="mt-2"><strong>Thermal Processing Parameters:</strong></p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Value</th>
                                    <th class="p-2 border">Scientific Basis</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong>Target F₀ Value</strong></td>
                                    <td class="p-2 border">5–8 minutes (z = 10°C par)</td>
                                    <td class="p-2 border">Minimum 12D reduction <em>C. botulinum</em> spores ka (D<sub>121°C</sub> = 0.21 min; 12D = 2.52 min). Higher F₀ spoilage organisms jaise <em>B. stearothermophilus</em> (D<sub>121°C</sub> = 4–5 min) ke liye safety margin deta hai</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Retort Temperature</strong></td>
                                    <td class="p-2 border">115–121°C</td>
                                    <td class="p-2 border">Steam pressure (103–207 kPa gauge) ke under achieve hota hai. Higher temp → shorter process → kam quality degradation</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Process Time (total)</strong></td>
                                    <td class="p-2 border">15–30 min (can size par depend karta hai)</td>
                                    <td class="p-2 border">Come-up time + holding time shamil hai. <strong>Cold point</strong> (can ka geometric centre) par heat penetration study se determine hota hai</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Heating Medium</strong></td>
                                    <td class="p-2 border">Saturated steam ya steam-air mixture (pouches ke liye)</td>
                                    <td class="p-2 border">Steam sabse zyada heat transfer coefficient deta hai (h ≈ 10,000–15,000 W/m²K)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Over-pressure (pouches ke liye)</strong></td>
                                    <td class="p-2 border">150–200 kPa</td>
                                    <td class="p-2 border">Internal steam pressure se pouch swelling/seal failure rokta hai</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <p class="mt-3"><strong>Heat Penetration Characteristics:</strong> Syrup mein rasgulla ek <strong>broken-heating product</strong> hai — initially, heat transfer syrup ke through convection se hota hai (rapid), lekin rasgulla ball ke andar heat transfer primarily <strong>conduction</strong> se hota hai (slow). Cold point can ke geometric centre par positioned <strong>sabse bade rasgulla ball ke thermal centre</strong> par located hota hai. Heat penetration studies (cold point par thermocouples use karke) typically dikhate hain:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>f<sub>h</sub> (heating rate index) = 15–25 min</li>
                        <li>j<sub>h</sub> (heating lag factor) = 1.2–1.8</li>
                    </ul>
                    <p class="mt-2">Process lethality calculations <strong>General Method (numerical integration)</strong> ya <strong>Ball Formula Method</strong> use karte hain taaki ensure ho ki cold point ko minimum F₀ mile.</p>

                    <div class="bg-red-50 border-l-4 border-red-400 p-3 mt-3">
                        <strong>CCP-5 Control Parameters:</strong><br>
                        • Critical Limits: Retort temperature ≥115°C; scheduled process ke according process time (heat penetration study se determined); cold point par F₀ ≥ 5 min<br>
                        • Monitoring: Mercury-in-glass (MIG) thermometer (official reference), continuous recording ke saath RTD sensors, pressure gauges<br>
                        • Corrective Action: Agar temperature deviation ho → deviation tables use karke process time extend karo; affected batch ko quarantine karke C<sub>A</sub>-C<sub>B</sub> method se evaluate karo<br>
                        • Verification: Incubation testing (37°C/10 din aur 55°C/5 din); calibrated data loggers se periodic F₀ validation; retort temperature distribution studies
                    </div>

                    <p class="mt-3"><strong>Retort Processing ke Quality Implications:</strong> Excessive thermal treatment (F₀ > 12) se hota hai:</p>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Maillard reaction (reducing sugars + amino acids) aur sucrose ki caramelisation >160°C par (can wall par localised) se rasgulla ka darkening</li>
                        <li>Excessive protein cross-linking se textural hardening</li>
                        <li>"Cooked" ya "sterilised" flavour ka development (sulphur-containing amino acid degradation se → H₂S, methyl mercaptan)</li>
                        <li>Vitamin C ka loss (agar syrup mein antioxidant ke roop mein present hai) — ascorbic acid ka D<sub>121°C</sub> ≈ 3–5 min</li>
                    </ul>
                    <p class="mt-1">Isliye, HTST (Higher Temperature Short Time) retorting (jaise 121°C minimum holding ke saath) prefer ki jaati hai taaki adequate F₀ achieve karte hue quality loss minimise ho.</p>
                </li>

                <li><strong>Cooling, Labelling & Storage</strong>
                    <p>Retorting ke turant baad, containers ko <strong>chlorinated water (2–5 ppm residual chlorine)</strong> se <strong>30 minute ke andar core temperature ≤40°C</strong> tak cool kiya jaata hai.</p>
                    <p class="mt-2"><strong>Rapid Cooling ke Scientific Reasons:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li><strong>Thermal Degradation Rokna:</strong> Slow cooling ke dauran continued cooking cumulative F₀ mein add hota hai, over-processing cause karta hai. Thermal process ki "cooling leg" total lethality ka 20–40% contribute kar sakti hai agar control na kiya jaaye.</li>
                        <li><strong>Thermophilic Spoilage ki Prevention:</strong> Thermophilic spore-formers jaise <em>B. stearothermophilus</em> aur <em>B. coagulans</em> germinate aur grow kar sakte hain agar product 55–40°C range mein extended periods tak rahe ("thermophilic spoilage zone")</li>
                        <li><strong>Seam Integrity:</strong> Cooling water chlorinated hona chahiye kyunki cooling ke dauran, jab internal pressure external pressure se neeche girta hai, ek <strong>transient negative pressure differential</strong> cooling water ko seam ke through andar kheench sakta hai. Chlorination ensure karta hai ki ye paani post-process contamination ka source na ho (Codex Alimentarius contact point par ≥2 ppm free chlorine recommend karta hai).</li>
                    </ul>
                    <p class="mt-2">Cooling ke baad, containers dry karke, <strong>batch code, manufacturing date, best-before date, lot number, aur nutritional information</strong> ke saath label karke, <strong>ambient temperature (15–30°C)</strong> par dry, well-ventilated warehouse mein store kiye jaate hain.</p>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Comprehensive HACCP Summary Table</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Step</th>
                            <th class="p-2 border">Hazard</th>
                            <th class="p-2 border">Type</th>
                            <th class="p-2 border">Control Point</th>
                            <th class="p-2 border">Critical Limit</th>
                            <th class="p-2 border">Monitoring</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border">Milk Reception</td>
                            <td class="p-2 border">Antibiotics, aflatoxin M1, adulterants</td>
                            <td class="p-2 border">Chemical</td>
                            <td class="p-2 border">PRP</td>
                            <td class="p-2 border">AFM1 < 0.5 μg/kg; no antibiotics</td>
                            <td class="p-2 border">Rapid test kits; supplier COA</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Heating (80–90°C)</td>
                            <td class="p-2 border">Vegetative pathogens ka survival</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border"><strong>CCP-1</strong></td>
                            <td class="p-2 border">≥80°C / ≥5 min</td>
                            <td class="p-2 border">Temperature recorder; ALP test</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Acid Coagulation</td>
                            <td class="p-2 border">Improper coagulation → quality failure; non-food-grade acid se chemical residue</td>
                            <td class="p-2 border">Chemical / Quality</td>
                            <td class="p-2 border"><strong>CCP-2</strong></td>
                            <td class="p-2 border">pH 5.3–5.5; sirf food-grade coagulant</td>
                            <td class="p-2 border">pH meter; supplier certification</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Kneading</td>
                            <td class="p-2 border">Foreign body (equipment se); texture defect</td>
                            <td class="p-2 border">Physical / Quality</td>
                            <td class="p-2 border"><strong>oPRP-2</strong></td>
                            <td class="p-2 border">8–12 min; crack-free ball test</td>
                            <td class="p-2 border">Operator check; downstream metal detector</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Syrup mein Cooking</td>
                            <td class="p-2 border">Inadequate cooking → microbial survival; texture failure</td>
                            <td class="p-2 border">Biological / Quality</td>
                            <td class="p-2 border"><strong>CCP-3</strong></td>
                            <td class="p-2 border">Stage 1: 40–50 °Brix, ≥98°C, 10–15 min; Stage 2: 55–60 °Brix, ≥98°C, 5–8 min</td>
                            <td class="p-2 border">Refractometer; thermometer; timer</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Hot Filling</td>
                            <td class="p-2 border">Post-process contamination; inadequate vacuum</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border"><strong>CCP-4</strong></td>
                            <td class="p-2 border">Fill temp ≥82°C; headspace 6–10 mm</td>
                            <td class="p-2 border">Fill temperature probe; headspace check</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Seaming</td>
                            <td class="p-2 border">Seal failure → post-process contamination</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border"><strong>oPRP-3</strong></td>
                            <td class="p-2 border">OL% ≥ 45%; wrinkle < 50%</td>
                            <td class="p-2 border">Har 30 min visual + destructive seam exam</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Retort Sterilisation</td>
                            <td class="p-2 border"><em>C. botulinum</em> spore survival</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border"><strong>CCP-5</strong></td>
                            <td class="p-2 border">F₀ ≥ 5 min; retort temp ≥115°C</td>
                            <td class="p-2 border">MIG thermometer; continuous recording; pressure gauge</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Cooling</td>
                            <td class="p-2 border">Cooling water se post-process contamination</td>
                            <td class="p-2 border">Biological</td>
                            <td class="p-2 border">PRP</td>
                            <td class="p-2 border">Chlorine ≥ 2 ppm; ≤40°C tak cool karo</td>
                            <td class="p-2 border">Chlorine test kit; product temp</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Rasgulla ki Nutritional Composition</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Nutrient</th>
                            <th class="p-2 border">Per 100 g (syrup ke saath)</th>
                            <th class="p-2 border">Per Ball (~30 g drained)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Energy</strong></td>
                            <td class="p-2 border">186–220 kcal</td>
                            <td class="p-2 border">55–66 kcal</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Carbohydrates (total)</strong></td>
                            <td class="p-2 border">38–45 g</td>
                            <td class="p-2 border">11–14 g</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">&nbsp;&nbsp;— Sucrose</td>
                            <td class="p-2 border">35–42 g</td>
                            <td class="p-2 border">10–13 g</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Protein</strong></td>
                            <td class="p-2 border">5–8 g</td>
                            <td class="p-2 border">1.5–2.4 g</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fat</strong></td>
                            <td class="p-2 border">2–5 g</td>
                            <td class="p-2 border">0.6–1.5 g</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Calcium</strong></td>
                            <td class="p-2 border">60–120 mg</td>
                            <td class="p-2 border">18–36 mg</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Phosphorus</strong></td>
                            <td class="p-2 border">50–90 mg</td>
                            <td class="p-2 border">15–27 mg</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Moisture</strong></td>
                            <td class="p-2 border">45–55%</td>
                            <td class="p-2 border">—</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Water Activity (a<sub>w</sub>)</strong></td>
                            <td class="p-2 border">0.90–0.94</td>
                            <td class="p-2 border">—</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2 text-sm text-gray-600">Note: Values approximate hain aur formulation (syrup concentration, fat content, ball size) ke saath vary karti hain. Source: IFCT (Indian Food Composition Tables), NIN-ICMR, 2017.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Key Ingredients ka Role — Scientific Analysis</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Ingredient</th>
                            <th class="p-2 border">Function</th>
                            <th class="p-2 border">Scientific Mechanism</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Casein (Milk se)</strong></td>
                            <td class="p-2 border">Structural matrix; sponginess aur elasticity deta hai</td>
                            <td class="p-2 border">Acid-denatured casein ek porous gel network banata hai; hydrophobic interactions aur Ca²⁺ bridges elasticity create karte hain; steam-expanded pores sponginess dete hain</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Whey Proteins (co-precipitated)</strong></td>
                            <td class="p-2 border">Water-holding improve karte hain; yield badhate hain</td>
                            <td class="p-2 border">Denatured β-Lg/α-La casein ke saath aggregates banate hain; inki high hydration capacity (3–4 g water/g protein) matrix mein moisture retention enhance karti hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat</strong></td>
                            <td class="p-2 border">Plasticiser; mouthfeel enhancer; flavour carrier</td>
                            <td class="p-2 border">Fat globules (aur disrupted membranes se free fat) continuous casein network interrupt karte hain, hardness reduce karte hain; fat unctuous mouthfeel contribute karta hai aur fat-soluble flavour compounds (diacetyl, δ-decalactone) carry karta hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sucrose (Cheeni)</strong></td>
                            <td class="p-2 border">Sweetness; preservative; texturiser; osmotic agent</td>
                            <td class="p-2 border">a<sub>w</sub> lower karta hai (har 10 °Brix se a<sub>w</sub> ~0.06 kam hota hai); osmotic swelling/firming drive karta hai; protein-protein hydrogen bonds ko protein-sucrose bonds se replace karke protein matrix plasticise karta hai; freezing point depress karta hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Citric Acid</strong></td>
                            <td class="p-2 border">Coagulant; chelator</td>
                            <td class="p-2 border">Casein par carboxyl groups protonate karta hai → charge neutralisation → aggregation. Apne teen carboxylate groups ke through Ca²⁺ bhi chelate karta hai, CCP bridges weaken karta hai → HCl ya lactic acid ki tulna mein softer curd</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Semolina / Maida (optional)</strong></td>
                            <td class="p-2 border">Binding agent; sponginess enhance karta hai</td>
                            <td class="p-2 border">Starch granules cooking ke dauran 60–70°C par gelatinise hote hain, apne weight ka 10–15× paani absorb karte hain, swell hoke additional porous structure create karte hain. Amylose leach out hoke gel banata hai jo casein network reinforce karta hai.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Rasgulla mein Common Defects — Causes & Scientific Remedies</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Defect</th>
                            <th class="p-2 border">Possible Causes</th>
                            <th class="p-2 border">Scientific Explanation</th>
                            <th class="p-2 border">Remedy</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Hard / Rubbery Texture</strong></td>
                            <td class="p-2 border">Buffalo milk use; excess coagulation temperature (>90°C); over-acidification (pH <5.0); chhana ki over-pressing; syrup mein over-cooking</td>
                            <td class="p-2 border">Hydrophobic bonds, disulphide bridges, aur CCP precipitation ke through excessive casein cross-linking → rigid, dense network jismein kam water-holding capacity</td>
                            <td class="p-2 border">Cow milk use karo; 70–80°C par coagulate karo; pH 5.3–5.5 control karo; 55–60% moisture tak gentle pressing; cooking time optimise karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Syrup mein Bikhar Jaana (Disintegration)</strong></td>
                            <td class="p-2 border">Under-acidification (pH >5.8); chhana mein excess moisture (>65%); insufficient kneading; ball surface par cracks; syrup bahut patla (<35 °Brix)</td>
                            <td class="p-2 border">Weak casein network jismein bade pores hain osmotic pressure aur steam expansion withstand nahi kar sakta → structural failure</td>
                            <td class="p-2 border">Complete coagulation ensure karo (clear whey); target moisture tak press karo; crack-free hone tak knead karo; 40–50 °Brix syrup use karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Flat / Dense (Non-Spongy)</strong></td>
                            <td class="p-2 border">Stage 1 mein syrup concentration bahut zyada (>55 °Brix); bina dhakkan ke cooking; insufficient boiling intensity</td>
                            <td class="p-2 border">Concentrated syrup mein reverse osmosis ball se paani nikalti hai → swelling nahi. Bina dhakkan ke temperature 100°C se neeche girta hai → internal pore formation ke liye insufficient steam generation</td>
                            <td class="p-2 border">Stage 1 ke liye patla syrup (40–50 °Brix) use karo; dhakkan ke saath vigorous rolling boil maintain karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Yellowish / Brown Colour</strong></td>
                            <td class="p-2 border">Milk ka over-heating (>95°C for >10 min); syrup ki caramelisation; retorting ke dauran Maillard reaction</td>
                            <td class="p-2 border">Maillard reaction: Reducing sugars (lactose) + lysine ka ε-amino group → Schiff base → Amadori rearrangement → melanoidins (brown pigments). Caramelisation: Sucrose → glucose + fructose → furfural → humic substances >160°C par</td>
                            <td class="p-2 border">Milk ko 80–85°C tak heat karo (zyada nahi); refined white sugar use karo; retort F₀ minimum required tak optimise karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Acidic / Khatta Taste</strong></td>
                            <td class="p-2 border">Excessive acid use; chhana ki poor washing; syrup mein microbial (LAB) growth</td>
                            <td class="p-2 border">Chhana matrix mein residual citric/lactic acid; <em>Lactobacillus</em>, <em>Leuconostoc</em> spp. dwara sucrose/lactose ka fermentation se lactic acid production</td>
                            <td class="p-2 border">Chhana ko cold water se achhe se dho; pH 5.3–5.5 reach karne ke liye minimum acid use karo; adequate heat treatment aur hygiene ensure karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Syrup Crystallisation</strong></td>
                            <td class="p-2 border">Sucrose concentration >67 °Brix; storage ke dauran temperature fluctuation; invert sugar ki kami</td>
                            <td class="p-2 border">20°C par sucrose ki solubility ~67 g/100 g solution hai. Isse upar ki concentrations supersaturated hain aur crystal nucleation prone, especially temperature cycling ke saath. Invert sugar (sucrose ke acid/enzyme hydrolysis se glucose + fructose) solubility badhata hai aur sucrose crystal lattice disrupt karke crystal growth inhibit karta hai.</td>
                            <td class="p-2 border">Syrup 40–55 °Brix par maintain karo; 5–10% invert sugar ya 0.1% citric acid syrup mein add karo taaki in-situ inversion promote ho; constant temperature par store karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Cheesy / Off-Flavour</strong></td>
                            <td class="p-2 border">Baasi milk ka use; lipolysis; proteolysis; microbial contamination</td>
                            <td class="p-2 border">Lipase activity → free fatty acids (butyric, caproic, caprylic acid) → rancid/cheesy flavour. Protease (plasmin) activity → bitter peptides. Psychrotrophic <em>Pseudomonas</em> spp. heat-stable lipases/proteases produce karte hain jo pasteurisation survive karte hain.</td>
                            <td class="p-2 border">Fresh milk use karo (<6 h milking se ya <4°C stored); adequate pasteurisation; achhi milking hygiene; low SCC milk</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shelf Life & Preservation Science</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Product Type</th>
                            <th class="p-2 border">Shelf Life</th>
                            <th class="p-2 border">Preservation Principle(s)</th>
                            <th class="p-2 border">Spoilage Risks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Fresh (ambient)</strong></td>
                            <td class="p-2 border">1–2 din</td>
                            <td class="p-2 border">Sugar (a<sub>w</sub> ~0.93); cooking (partial sterilisation)</td>
                            <td class="p-2 border"><em>Bacillus cereus</em>, LAB, yeasts, moulds; >30°C par rapid</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fresh (refrigerated, 4°C)</strong></td>
                            <td class="p-2 border">5–7 din</td>
                            <td class="p-2 border">Low temperature + sugar; psychrotrophs risk mein rehte hain</td>
                            <td class="p-2 border"><em>Pseudomonas</em>, psychrotrophic <em>Bacillus</em> spp., moulds</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Canned (retorted)</strong></td>
                            <td class="p-2 border">6–12 mahine (ambient)</td>
                            <td class="p-2 border">Commercial sterilisation (F₀ ≥ 5); hermetic seal; vacuum; sugar se a<sub>w</sub> depression</td>
                            <td class="p-2 border">Under-processing → <em>C. botulinum</em>, <em>C. perfringens</em>; post-process contamination (leaker spoilage) → mixed flora; thermophilic flat sour (<em>B. stearothermophilus</em>) agar >40°C par stored</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Retort Pouch</strong></td>
                            <td class="p-2 border">3–6 mahine</td>
                            <td class="p-2 border">Canned jaisa hi; shorter life pouch material ki higher oxygen permeability ki wajah se</td>
                            <td class="p-2 border">Oxidative changes; seal failure; light-induced degradation</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3"><strong>Hurdle Technology Approach:</strong> Modern rasgulla preservation <strong>hurdle concept (Leistner, 1992)</strong> use karta hai — multiple sub-lethal preservation factors (hurdles) combine karta hai jo collectively microbial growth inhibit karte hain:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Hurdle 1:</strong> Sugar se reduced a<sub>w</sub> (0.90–0.94)</li>
                <li><strong>Hurdle 2:</strong> Thermal processing (cooking + retorting)</li>
                <li><strong>Hurdle 3:</strong> Hermetic packaging (anaerobic environment)</li>
                <li><strong>Hurdle 4:</strong> Vacuum (aerobes inhibit karta hai)</li>
                <li><strong>Hurdle 5:</strong> Low storage temperature (fresh products ke liye)</li>
                <li><strong>Hurdle 6:</strong> Permitted preservatives (sorbic acid/potassium sorbate ≤500 ppm par, jahan regulation allow kare)</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Quality Evaluation ke Methods</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Method</th>
                            <th class="p-2 border">Expected Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Sponginess (Texture)</strong></td>
                            <td class="p-2 border">Texture Profile Analysis (TPA) TA.XT Plus se; 50% compression, 1 mm/s crosshead speed; ya manual squeeze test</td>
                            <td class="p-2 border">Hardness: 1.0–3.0 N; Springiness: >0.70; Cohesiveness: >0.50; Chewiness: 0.5–1.5 N</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Syrup Absorption</strong></td>
                            <td class="p-2 border">Weight ratio method: (Cooking ke baad weight − Cooking se pehle weight) / Cooking se pehle weight × 100</td>
                            <td class="p-2 border">150–250% weight gain</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Colour</strong></td>
                            <td class="p-2 border">Hunter Lab colorimeter (L*, a*, b* values)</td>
                            <td class="p-2 border">L* > 85 (whiteness); a* ≈ −1 to 0; b* < 10 (low yellowness)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Drained Weight</strong></td>
                            <td class="p-2 border">AOAC method: No. 8 sieve par 2 min drain karo; weigh karo</td>
                            <td class="p-2 border">Net weight ka ≥55%</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Total Solids</strong></td>
                            <td class="p-2 border">105°C par constant weight tak oven drying (AOAC 925.23)</td>
                            <td class="p-2 border">≥45%</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fat Content</strong></td>
                            <td class="p-2 border">Mojonnier / Gerber method (IS:1224)</td>
                            <td class="p-2 border">Dry basis par ≥5%</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sucrose</strong></td>
                            <td class="p-2 border">Lane-Eynon ya HPLC method</td>
                            <td class="p-2 border">≤55%</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sensory Evaluation</strong></td>
                            <td class="p-2 border">9-point hedonic scale ya descriptive analysis; trained panel (n ≥ 8)</td>
                            <td class="p-2 border">Overall acceptability score >7.0/9.0; flavour: sweet, clean dairy; texture: spongy, elastic; colour: white se off-white</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Commercial Sterility (canned)</strong></td>
                            <td class="p-2 border">37°C/10 din + 55°C/5 din incubation; visual (swelling, leakage); pH change; microbial plating</td>
                            <td class="p-2 border">Koi swelling nahi, koi pH change nahi (>0.2 units), plating par koi viable organisms nahi</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Recent Advances & Research Trends</h3>
            <ul class="list-disc list-outside pl-5 space-y-3">
                <li><strong>Low-Calorie / Sugar-Free Rasgulla:</strong> Sucrose ko polyols (sorbitol, maltitol) aur high-intensity sweeteners (sucralose, stevia glycosides) se replace karna. Challenges mein swelling ke liye osmotic driving force maintain karna (polyols ka molecular weight kam hai → alag osmotic behaviour) aur crystallisation rokna shamil hai. Studies report karti hain ki maltitol syrup use karke 50–75% sucrose replacement se acceptable quality milti hai (Chawla et al., 2014).</li>
                <li><strong>Ultrafiltered (UF) Milk ka Use:</strong> UF retentate (2–5× concentrated) traditional coagulation bypass karta hai, standardised composition provide karta hai. Lekin, higher casein concentration ke liye adjusted coagulation pH aur kneading parameters chahiye. UF-based rasgulla mein improved protein content dikhta hai lekin firmer texture ho sakta hai.</li>
                <li><strong>Enzyme-Modified Chhana:</strong> Transglutaminase (TGase, EC 2.3.2.13) use karke chhana protein mein ε-(γ-glutamyl)lysine isopeptide bonds introduce karna → improved structural integrity, cooking ke dauran kam disintegration, aur enhanced elasticity (Sharma et al., 2019).</li>
                <li><strong>Soy-Blended / Vegan Rasgulla:</strong> Dairy chhana ka partial ya complete replacement soy paneer (calcium sulphate ya GDL se coagulated tofu) se. Soy protein isolate (SPI) gels ki alag viscoelastic properties hoti hain; kneading aur cooking parameters mein significantly modification chahiye. 100% soy ke liye acceptability generally lower hai lekin 20–30% substitution par reasonable hai.</li>
                <li><strong>Nanotechnology-Based Packaging:</strong> Packaging films mein Nano-ZnO ya nano-Ag incorporate karke antimicrobial effect ke liye, jo refrigerated storage mein fresh rasgulla ki shelf life 2–3 din extend karta hai (Pathania et al., 2020).</li>
                <li><strong>Ohmic Heating for Cooking:</strong> Conductive sugar syrup ke through electrical current pass karke volumetric heating → zyada uniform cooking, kam surface browning, aur conventional kettle cooking ki tulna mein 20–30% energy savings.</li>
                <li><strong>3D Printing of Chhana:</strong> Customised shapes aur portion control ke liye kneaded chhana ki extrusion-based 3D printing par emerging research. Printability ke liye rheological optimisation (yield stress 200–500 Pa, viscosity 50–200 Pa·s) zaroori hai.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Canned Rasgulla ki Key Formulation (Standard Recipe)</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Ingredient</th>
                            <th class="p-2 border">Quantity (~1 kg finished product ke liye)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Cow Milk (3.5% fat, 8.5% SNF)</strong></td>
                            <td class="p-2 border">3.0–3.5 L</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Citric Acid (food grade)</strong></td>
                            <td class="p-2 border">6–10 g (1% solution ke roop mein)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sugar (syrup ke liye)</strong></td>
                            <td class="p-2 border">500–600 g</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Paani (syrup ke liye)</strong></td>
                            <td class="p-2 border">700–800 mL</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Semolina / Suji (optional)</strong></td>
                            <td class="p-2 border">5–10 g (chhana weight ka 1–2%)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Gulab Jal / Elaichi (optional, flavour ke liye)</strong></td>
                            <td class="p-2 border">2–3 mL / 1–2 pods</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2"><strong>Expected Yield:</strong> 3 L cow milk → ~450–500 g chhana → 15–18 rasgulla balls (swelling ke baad, ~25–30 g har ek) → ~550–600 g drained rasgulla + ~400–450 g syrup = ~1 kg canned product.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Critical Scientific Principles ka Summary</h3>
            <div class="bg-blue-50 border-l-4 border-blue-400 p-4 mt-3">
                <ol class="list-decimal list-outside pl-5 space-y-2">
                    <li><strong>pH 5.3–5.5 par Acid Coagulation</strong> — Charge neutralisation + CCP dissolution → soft, porous casein gel jismein optimal moisture retention hai</li>
                    <li><strong>Whey Protein Co-precipitation (80–90°C heating)</strong> — β-Lg/κ-casein disulphide bonding → increased yield aur water-holding capacity</li>
                    <li><strong>Kneading</strong> — Protein-fat-water system ka mechanical homogenisation → aligned, smooth, elastic matrix jo osmotic aur thermal stresses withstand kar sake</li>
                    <li><strong>Two-Stage Osmotic Cooking</strong> — Stage 1 (patla syrup): Water influx + steam generation → swelling + pore formation. Stage 2 (gadha syrup): Controlled dehydration + sugar infusion → structural firming + preservation</li>
                    <li><strong>Retort Sterilisation (F₀ ≥ 5)</strong> — <em>C. botulinum</em> spores ka 12D destruction → is low-acid food (pH > 4.6) ke ambient storage ke liye commercial sterility</li>
                    <li><strong>Water Activity Control (a<sub>w</sub> ~0.92)</strong> — Sugar-mediated a<sub>w</sub> depression → zyada tar bacteria inhibit hote hain jabki soft texture permit rehti hai; hurdle technology ke part ke roop mein thermal treatment ke saath combine kiya jaata hai</li>
                </ol>
            </div>
        `
    }
}

    
