
export const butterContent = {
    en: {
        title: "Butter Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Butter</h3>
            <p>Butter is a fat-rich dairy product made by churning fresh or fermented cream or milk. It is primarily a <strong>water-in-oil (W/O) emulsion</strong>, a result of the inversion of the oil-in-water (O/W) emulsion of cream. Its characteristic flavor, texture, and nutritional value make it a staple in cuisines worldwide. The processing of butter is a classic dairy operation involving a fascinating and scientifically complex phase inversion process.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Composition of Butter</h4>
            <p>The typical composition of commercial butter is approximately:</p>
            <ul class="list-disc list-inside ml-4 space-y-1">
                <li><strong>Milk fat:</strong> 80–82% (minimum 80% by most international standards)</li>
                <li><strong>Water:</strong> 15–16% (maximum 16%)</li>
                <li><strong>Milk solids-not-fat (MSNF):</strong> 1–2% (proteins, lactose, minerals)</li>
                <li><strong>Salt:</strong> 0–2.5% (in salted butter)</li>
            </ul>
            <p class="mt-2">From a colloidal chemistry perspective, butter is a complex multiphase system consisting of:</p>
            <ul class="list-disc list-inside ml-4 space-y-1">
                <li>A <strong>continuous fat phase</strong> (mixture of crystalline fat, liquid oil, and intact fat globules)</li>
                <li><strong>Dispersed aqueous droplets</strong> (typically 1–10 µm in diameter)</li>
                <li><strong>Air cells</strong> incorporated during working</li>
                <li><strong>Fat crystals</strong> forming a three-dimensional network that provides structural rigidity</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Fatty Acid Profile of Butter Fat</h4>
            <p>Butter fat (also called anhydrous milk fat or AMF) has one of the most complex fatty acid compositions of any natural fat, containing over <strong>400 individual fatty acids</strong>. However, approximately 15 fatty acids account for the major portion:</p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Fatty Acid</th>
                            <th class="p-2 border">Carbon Chain</th>
                            <th class="p-2 border">Approx. % (w/w)</th>
                            <th class="p-2 border">Significance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Butyric acid</td><td class="p-2 border">C4:0</td><td class="p-2 border">3–4%</td><td class="p-2 border">Unique to milk fat; contributes to characteristic flavor; used as an indicator of milk fat authenticity (Reichert-Meissl value)</td></tr>
                        <tr><td class="p-2 border">Caproic acid</td><td class="p-2 border">C6:0</td><td class="p-2 border">1–3%</td><td class="p-2 border">Short-chain FA; contributes to Polenske value</td></tr>
                        <tr><td class="p-2 border">Caprylic acid</td><td class="p-2 border">C8:0</td><td class="p-2 border">1–2%</td><td class="p-2 border">Medium-chain FA; rapidly metabolized</td></tr>
                        <tr><td class="p-2 border">Capric acid</td><td class="p-2 border">C10:0</td><td class="p-2 border">2–3%</td><td class="p-2 border">Medium-chain triglyceride (MCT) component</td></tr>
                        <tr><td class="p-2 border">Lauric acid</td><td class="p-2 border">C12:0</td><td class="p-2 border">2–4%</td><td class="p-2 border">Antimicrobial properties</td></tr>
                        <tr><td class="p-2 border">Myristic acid</td><td class="p-2 border">C14:0</td><td class="p-2 border">8–14%</td><td class="p-2 border">Major saturated FA</td></tr>
                        <tr><td class="p-2 border">Palmitic acid</td><td class="p-2 border">C16:0</td><td class="p-2 border">25–32%</td><td class="p-2 border">Most abundant fatty acid in milk fat</td></tr>
                        <tr><td class="p-2 border">Stearic acid</td><td class="p-2 border">C18:0</td><td class="p-2 border">10–15%</td><td class="p-2 border">Long-chain saturated FA; neutral effect on blood cholesterol</td></tr>
                        <tr><td class="p-2 border">Oleic acid</td><td class="p-2 border">C18:1</td><td class="p-2 border">20–30%</td><td class="p-2 border">Principal unsaturated FA; major influence on melting properties; higher in pasture-fed cows</td></tr>
                        <tr><td class="p-2 border">Linoleic acid</td><td class="p-2 border">C18:2</td><td class="p-2 border">1–3%</td><td class="p-2 border">Essential fatty acid (omega-6)</td></tr>
                        <tr><td class="p-2 border">Conjugated Linoleic Acid (CLA)</td><td class="p-2 border">C18:2 (conjugated)</td><td class="p-2 border">0.3–1.0%</td><td class="p-2 border">Anticarcinogenic, anti-atherogenic properties; higher in pasture-fed butter</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2">Overall, milk fat contains approximately <strong>65–70% saturated fatty acids (SFA), 25–30% monounsaturated fatty acids (MUFA), and 3–5% polyunsaturated fatty acids (PUFA)</strong>. The ratio of short-chain to long-chain fatty acids significantly influences the melting behavior, crystal polymorphism, and spreadability of butter.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Nutritional Significance</h4>
            <p>Beyond its fatty acid profile, butter is a significant source of fat-soluble vitamins:</p>
            <ul class="list-disc list-inside ml-4 space-y-1">
                <li><strong>Vitamin A (Retinol):</strong> 684 µg per 100 g (provides the yellow color via β-carotene, a precursor; content varies with feed — pasture-fed butter is more yellow)</li>
                <li><strong>Vitamin D₃:</strong> ~1.5 µg per 100 g</li>
                <li><strong>Vitamin E (α-tocopherol):</strong> ~2.3 mg per 100 g (acts as a natural antioxidant in the fat phase)</li>
                <li><strong>Vitamin K₂ (Menaquinone):</strong> Present in significant amounts, particularly in grass-fed butter; involved in calcium metabolism and bone health</li>
                <li><strong>Cholesterol:</strong> ~215 mg per 100 g</li>
            </ul>
            <p class="mt-2">Butter also contains <strong>sphingolipids</strong> and <strong>phospholipids</strong> from the milk fat globule membrane (MFGM), which have been associated with beneficial effects on gut health and cholesterol metabolism.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Butter</h3>
            <p>In India, the Food Safety and Standards Authority of India (FSSAI) under the <strong>Food Safety and Standards (Food Products Standards and Food Additives) Regulations</strong> primarily defines two categories of butter:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Table Butter</th>
                            <th class="p-2 border">White Butter / Cooking Butter</th>
                            <th class="p-2 border">Key Difference</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat (min, % m/m)</strong></td>
                            <td class="p-2 border">80.0</td>
                            <td class="p-2 border">76.0</td>
                            <td class="p-2 border">Table butter has a higher minimum fat content, making it richer and more suited for direct consumption.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Moisture (max, % m/m)</strong></td>
                            <td class="p-2 border">16.0</td>
                            <td class="p-2 border">- (Not specified)</td>
                            <td class="p-2 border">Moisture is strictly controlled in table butter for better shelf life, microbial stability, and consistency.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Common Salt (max, % m/m)</strong></td>
                            <td class="p-2 border">3.0</td>
                            <td class="p-2 border">- (Not specified)</td>
                            <td class="p-2 border">Table butter is typically salted for flavor enhancement and preservation (salt reduces water activity, aₓ).</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Solids-Not-Fat (max, % m/m)</strong></td>
                            <td class="p-2 border">2.0</td>
                            <td class="p-2 border">- (Not specified)</td>
                            <td class="p-2 border">This refers to protein (casein, whey proteins) and lactose content, which is limited in table butter to prevent Maillard browning and off-flavors during storage.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">International Standards Comparison</h4>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Standard</th>
                            <th class="p-2 border">Min. Fat (%)</th>
                            <th class="p-2 border">Max. Moisture (%)</th>
                            <th class="p-2 border">Max. MSNF (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Codex Alimentarius (CODEX STAN 279-1971)</td><td class="p-2 border">80</td><td class="p-2 border">16</td><td class="p-2 border">2</td></tr>
                        <tr><td class="p-2 border">EU Regulation (EC No. 1308/2013)</td><td class="p-2 border">80 (82 for "butter")</td><td class="p-2 border">16</td><td class="p-2 border">2</td></tr>
                        <tr><td class="p-2 border">USDA (21 CFR 101.67)</td><td class="p-2 border">80</td><td class="p-2 border">16</td><td class="p-2 border">-</td></tr>
                        <tr><td class="p-2 border">FSSAI (Table Butter)</td><td class="p-2 border">80</td><td class="p-2 border">16</td><td class="p-2 border">2</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Key Analytical Tests for Butter Quality</h4>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Test</th>
                            <th class="p-2 border">Principle</th>
                            <th class="p-2 border">Typical Value for Butter Fat</th>
                            <th class="p-2 border">Significance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Reichert-Meissl (RM) Value</td><td class="p-2 border">Measures volatile, water-soluble fatty acids (C4:0, C6:0)</td><td class="p-2 border">26–32</td><td class="p-2 border">Authenticity test; uniquely high for milk fat due to butyric acid content</td></tr>
                        <tr><td class="p-2 border">Polenske Value</td><td class="p-2 border">Measures volatile, water-insoluble fatty acids (C8:0–C12:0)</td><td class="p-2 border">1.0–2.0</td><td class="p-2 border">Detects adulteration with coconut or palm kernel oil (which have high Polenske values)</td></tr>
                        <tr><td class="p-2 border">Iodine Value (Wijs method)</td><td class="p-2 border">Measures degree of unsaturation (C=C double bonds)</td><td class="p-2 border">26–38 g I₂/100g</td><td class="p-2 border">Indicates unsaturation level; varies with feed (higher in pasture-fed)</td></tr>
                        <tr><td class="p-2 border">Saponification Value</td><td class="p-2 border">mg KOH required to saponify 1 g of fat</td><td class="p-2 border">220–235</td><td class="p-2 border">Higher than most fats due to short-chain FAs (lower MW = more molecules per gram)</td></tr>
                        <tr><td class="p-2 border">Butyro-Refractometer Reading (BR) at 40°C</td><td class="p-2 border">Refractive index measurement</td><td class="p-2 border">40–44</td><td class="p-2 border">Quick screening test for purity of milk fat</td></tr>
                        <tr><td class="p-2 border">Peroxide Value</td><td class="p-2 border">Measures primary oxidation products (hydroperoxides)</td><td class="p-2 border">< 1.0 meq O₂/kg (fresh)</td><td class="p-2 border">Indicator of oxidative rancidity; should be < 0.3 meq/kg in fresh butter</td></tr>
                        <tr><td class="p-2 border">Free Fatty Acid (Acid Value)</td><td class="p-2 border">Measures liberated fatty acids from lipolysis</td><td class="p-2 border">< 0.3% as oleic acid</td><td class="p-2 border">Indicator of hydrolytic (lipolytic) rancidity</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Butter with Food Safety Controls</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Butter Production</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception & Quality Testing <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Pre-heating (40–45°C) & Cream Separation <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Cream Standardization (35–42% Fat) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Neutralization of Cream (if acidity > 0.3% LA) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Pasteurization of Cream (95°C/15 sec or 68°C/30 min)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Vacuum De-aeration / Deodorization (Optional)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling & Physical Aging/Tempering (for Fat Crystallization)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><em>Optional:</em> Inoculation & Biological Ripening (for Cultured Butter)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded"><strong>Temperature Adjustment to Churning Temp (8–14°C)</strong> <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded"><strong>Churning (Phase Inversion: O/W → W/O)</strong></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Buttermilk Draining & Collection</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Washing of Butter Grains (1–3 washes with cold potable water)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Salting (if applicable) & Working (Kneading) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Quality Testing (Moisture, Fat, Salt, Microbiology) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging (Light-proof, Oxygen-barrier materials) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Cold Storage (≤ 5°C for retail; -20 to -25°C for long-term) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Scientific Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-6">
                <li><strong>Milk Reception, Quality Testing & Cream Separation (PRP & oPRP):</strong>
                    <p>The process begins with high-quality raw milk. At reception, platform tests are performed including the <strong>Methylene Blue Reduction Test (MBRT)</strong> — good quality cream should have MBRT > 4 hours — along with acidity testing (should be < 0.2% lactic acid for sweet cream butter) and organoleptic evaluation.</p>
                    <p>The milk is pre-heated to <strong>40–45°C</strong> to liquefy the fat (milk fat melting range: 28–38°C; at 40°C virtually all fat is liquid). At this temperature, the viscosity of milk decreases significantly, optimizing separation efficiency.</p>
                    
                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Physics of Cream Separation — Stoke's Law:</h4>
                    <p>Cream separation in a centrifugal separator is governed by a modified form of <strong>Stoke's Law</strong>:</p>
                    <div class="bg-gray-100 p-3 rounded mt-2 font-mono text-center">
                        v = [d² × (ρₛ − ρ_f) × ω² × r] / (18 × η)
                    </div>
                    <p class="mt-2">Where:</p>
                    <ul class="list-disc list-inside ml-4 space-y-1 text-sm">
                        <li><strong>v</strong> = velocity of fat globule separation (m/s)</li>
                        <li><strong>d</strong> = diameter of fat globule (average ~3.5 µm; range 0.1–15 µm)</li>
                        <li><strong>ρₛ</strong> = density of skim milk plasma (~1,036 kg/m³ at 40°C)</li>
                        <li><strong>ρ_f</strong> = density of fat (~930 kg/m³ at 40°C)</li>
                        <li><strong>ω</strong> = angular velocity of the centrifuge (rad/s); typically 5,000–7,000 rpm</li>
                        <li><strong>r</strong> = radius of rotation (m)</li>
                        <li><strong>η</strong> = dynamic viscosity of the continuous phase (~1.0 × 10⁻³ Pa·s at 40°C)</li>
                    </ul>
                    <p class="mt-2">The centrifugal force in a modern separator can be <strong>5,000–10,000 × g</strong> (where g = 9.81 m/s²), making separation extremely efficient. Since velocity is proportional to <strong>d²</strong>, larger fat globules separate much faster. This is why buffalo milk cream separates more efficiently — buffalo fat globules are larger (average ~5 µm vs. ~3.5 µm for cow).</p>
                    <p class="mt-2">The cream is then <strong>standardized to 35–42% fat</strong>. This fat content is optimal because:</p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li>Below 30% fat: churning is inefficient, excessive buttermilk loss</li>
                        <li>Above 45% fat: cream is too viscous, poor agitation, incomplete phase inversion</li>
                        <li>Optimal range allows sufficient globule collision frequency during churning</li>
                    </ul>
                </li>

                <li><strong>Neutralization of Cream (oPRP):</strong>
                    <p>If the cream has developed acidity > 0.3% lactic acid (due to bacterial growth or delayed processing), it may be <strong>neutralized</strong> before pasteurization. Common neutralizers include:</p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Sodium bicarbonate (NaHCO₃)</strong> — most common</li>
                        <li><strong>Calcium hydroxide (Ca(OH)₂)</strong></li>
                        <li><strong>Sodium carbonate (Na₂CO₃)</strong></li>
                    </ul>
                    <p class="mt-2">The chemical reaction with lactic acid:</p>
                    <div class="bg-gray-100 p-2 rounded mt-1 font-mono text-sm text-center">
                        2 CH₃CHOHCOOH + Ca(OH)₂ → (CH₃CHOHCOO)₂Ca + 2H₂O
                    </div>
                    <p class="mt-2"><strong>Scientific rationale:</strong> High-acid cream (> 0.3% LA) causes problems during pasteurization — proteins denature and coagulate at lower temperatures when pH is low (protein stability decreases as pH approaches isoelectric point of casein, pH 4.6). This leads to "feathering" or burnt deposits on heat exchangers, off-flavors, and reduced heat transfer efficiency.</p>
                    <p><strong>Note:</strong> Over-neutralization (pH > 7.0) must be avoided as it produces a soapy, alkaline flavor and may mask adulteration. FSSAI permits neutralization but the finished butter should not show a pH above natural levels.</p>
                </li>

                <li><strong>Pasteurization of Cream (CCP-1 — Critical Control Point):</strong>
                    <p>Cream pasteurization is the most critical safety step. The cream is heated to <strong>95°C for 15 seconds</strong> (or equivalent combinations like 68°C for 30 minutes for batch pasteurization). This is significantly higher than milk pasteurization (72°C/15 s) for several important scientific reasons:</p>
                    
                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Why Higher Temperature for Cream?</h4>
                    <ul class="list-disc list-inside ml-4 space-y-2">
                        <li><strong>Protective effect of fat:</strong> Fat globules physically shield bacteria from heat. Microorganisms can be embedded within fat globules or protected by the MFGM, requiring higher temperatures for equivalent kill. Studies show that the <strong>D-value</strong> (decimal reduction time) of pathogens increases by 1.5–3× in high-fat substrates compared to skim milk.</li>
                        <li><strong>Lower thermal conductivity of fat:</strong> Fat has a thermal conductivity of ~0.17 W/(m·K) vs. ~0.57 W/(m·K) for water, meaning heat penetrates fat more slowly.</li>
                        <li><strong>Lower water activity:</strong> The reduced water content in cream contributes to slightly higher thermal resistance of microorganisms.</li>
                        <li><strong>Complete inactivation of lipases:</strong> Both native milk lipase (lipoprotein lipase, LPL) and bacterial lipases (especially heat-stable lipases from psychrotrophs like <em>Pseudomonas</em> spp.) must be inactivated. LPL is fully inactivated at 78°C/10 s, but some bacterial lipases from <em>Pseudomonas fluorescens</em> can survive even UHT treatment (they require > 100°C for complete inactivation).</li>
                    </ul>

                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Thermal Inactivation Kinetics of Target Organisms in Cream:</h4>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Target Organism</th>
                                    <th class="p-2 border">D-value in Cream</th>
                                    <th class="p-2 border">z-value</th>
                                    <th class="p-2 border">Log Reduction at 95°C/15s</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border"><em>Mycobacterium tuberculosis</em></td><td class="p-2 border">D₆₅ ≈ 0.3 min</td><td class="p-2 border">~4.5°C</td><td class="p-2 border">> 15 log (complete kill)</td></tr>
                                <tr><td class="p-2 border"><em>Coxiella burnetii</em> (Q fever)</td><td class="p-2 border">D₇₂ ≈ 0.02 min (in cream)</td><td class="p-2 border">~5.5°C</td><td class="p-2 border">> 15 log (complete kill)</td></tr>
                                <tr><td class="p-2 border"><em>Listeria monocytogenes</em></td><td class="p-2 border">D₇₂ ≈ 0.05 min (in cream)</td><td class="p-2 border">~6.0°C</td><td class="p-2 border">> 15 log</td></tr>
                                <tr><td class="p-2 border"><em>Salmonella</em> spp.</td><td class="p-2 border">D₆₅ ≈ 0.04 min</td><td class="p-2 border">~5.5°C</td><td class="p-2 border">> 15 log</td></tr>
                                <tr><td class="p-2 border"><em>Staphylococcus aureus</em></td><td class="p-2 border">D₆₅ ≈ 0.2 min</td><td class="p-2 border">~5.5°C</td><td class="p-2 border">> 15 log</td></tr>
                                <tr><td class="p-2 border">Alkaline Phosphatase (ALP)</td><td class="p-2 border">D₆₂.₈ ≈ 0.58 min</td><td class="p-2 border">~5.6°C</td><td class="p-2 border">Completely inactivated (used as pasteurization marker)</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2"><strong>Pasteurization verification:</strong> The <strong>Alkaline Phosphatase (ALP) test</strong> (negative = properly pasteurized) is the standard method. However, for cream pasteurized at 95°C, the <strong>peroxidase test</strong> may also be negative (peroxidase is inactivated at > 80°C), so ALP remains the definitive indicator.</p>
                    <p class="mt-2"><strong>Additional benefit of high-temperature pasteurization:</strong> At 95°C, significant <strong>whey protein denaturation</strong> occurs (especially β-lactoglobulin, which denatures above 78°C). These denatured whey proteins expose sulfhydryl (-SH) groups that act as <strong>natural antioxidants</strong>, providing a "cooked" or "heated" flavor and significantly improving the <strong>oxidative stability</strong> of butter during storage.</p>
                    <p>The formation of <strong>sulfhydryl compounds</strong> follows the reaction:</p>
                    <div class="bg-gray-100 p-2 rounded mt-1 font-mono text-sm text-center">
                        β-Lg (native, SH buried) → β-Lg (denatured, SH exposed) → R-SH (free sulfhydryl groups)
                    </div>
                    <p class="mt-1 text-sm">These -SH groups scavenge free radicals and chelate pro-oxidant metals (Cu²⁺, Fe³⁺), acting as sacrificial antioxidants.</p>
                </li>

                <li><strong>Vacuum De-aeration / Deodorization (Optional):</strong>
                    <p>After pasteurization, the hot cream may be subjected to <strong>vacuum treatment</strong> (vacreation) at reduced pressure. This process:</p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li>Removes volatile off-flavors (feed flavors, onion/garlic taints, oxidized flavors)</li>
                        <li>Removes dissolved oxygen, which is a pro-oxidant (O₂ initiates lipid oxidation)</li>
                        <li>Reduces dissolved gases (CO₂) that can cause foaming during churning</li>
                    </ul>
                    <p class="mt-1">The <strong>principle</strong> is based on Henry's Law — the solubility of gases in a liquid is proportional to the partial pressure of the gas above the liquid. By reducing pressure (to ~0.5 bar absolute), volatile compounds with low boiling points are flashed off with the steam.</p>
                </li>

                <li><strong>Cooling, Aging, and Fat Crystallization — The Science of Tempering:</strong>
                    <p>This is one of the most scientifically complex and critical stages in butter manufacture. After pasteurization, the cream is rapidly cooled and held (aged) to allow controlled <strong>fat crystallization</strong> within the fat globules.</p>
                    
                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Fat Crystal Polymorphism:</h4>
                    <p>Milk fat can crystallize in three main polymorphic forms, each with distinct crystal packing arrangements:</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Polymorph</th>
                                    <th class="p-2 border">Crystal Packing</th>
                                    <th class="p-2 border">Stability</th>
                                    <th class="p-2 border">Melting Point</th>
                                    <th class="p-2 border">Relevance to Butter</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border"><strong>α (alpha)</strong></td><td class="p-2 border">Hexagonal</td><td class="p-2 border">Least stable</td><td class="p-2 border">Lowest</td><td class="p-2 border">Forms first during rapid cooling; small, numerous crystals; soft texture</td></tr>
                                <tr><td class="p-2 border"><strong>β' (beta-prime)</strong></td><td class="p-2 border">Orthorhombic perpendicular</td><td class="p-2 border">Intermediate</td><td class="p-2 border">Intermediate</td><td class="p-2 border"><strong>DESIRED form for butter</strong>; fine, needle-like crystals; smooth texture; good spreadability</td></tr>
                                <tr><td class="p-2 border"><strong>β (beta)</strong></td><td class="p-2 border">Triclinic parallel</td><td class="p-2 border">Most stable</td><td class="p-2 border">Highest</td><td class="p-2 border">Large, coarse crystals; grainy, sandy texture; undesirable in butter</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2">The transition follows: <strong>α → β' → β</strong> (monotropic transition — irreversible under normal conditions). The goal of aging/tempering is to promote <strong>β' crystal formation</strong> while preventing transition to β.</p>

                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Solid Fat Content (SFC) and Its Importance:</h4>
                    <p>The ratio of solid to liquid fat at the churning temperature is critically important. This is measured as <strong>Solid Fat Content (SFC)</strong> or <strong>Solid Fat Index (SFI)</strong> using pulsed Nuclear Magnetic Resonance (pNMR) or Differential Scanning Calorimetry (DSC).</p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li>At churning temperature (10°C): SFC should ideally be <strong>30–50%</strong></li>
                        <li>If SFC > 50%: fat globules are too rigid → poor destabilization, difficult churning, hard butter</li>
                        <li>If SFC < 25%: globules are too soft → excessive fat loss in buttermilk, soft/greasy butter</li>
                    </ul>

                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Common Aging/Tempering Programs:</h4>
                    <p>Different time-temperature programs have been developed based on the <strong>iodine value (IV)</strong> of the cream fat, which reflects the degree of unsaturation and therefore the hardness of the fat:</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Program</th>
                                    <th class="p-2 border">Iodine Value</th>
                                    <th class="p-2 border">Fat Character</th>
                                    <th class="p-2 border">Tempering Regime</th>
                                    <th class="p-2 border">Churning Temp</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border"><strong>Swedish (Summer)</strong></td><td class="p-2 border">> 39 (soft fat)</td><td class="p-2 border">High unsaturation</td><td class="p-2 border">Cool to 8°C, hold 2h → warm to 20°C, hold 2h → cool to 11°C</td><td class="p-2 border">8–11°C</td></tr>
                                <tr><td class="p-2 border"><strong>Swedish (Winter)</strong></td><td class="p-2 border">< 32 (hard fat)</td><td class="p-2 border">High saturation</td><td class="p-2 border">Cool to 8°C, hold 2h → warm to 21°C, hold 2h → cool to 16°C</td><td class="p-2 border">12–16°C</td></tr>
                                <tr><td class="p-2 border"><strong>Alnarp (for soft fat)</strong></td><td class="p-2 border">> 40</td><td class="p-2 border">Very soft</td><td class="p-2 border">Cool to 7°C, hold 5h → warm to 13°C, hold 2h → cool to 10°C</td><td class="p-2 border">8–10°C</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2"><strong>Scientific basis of warm-cold cycling:</strong> The initial cooling step causes rapid crystallization, predominantly in the α form. The subsequent warming step melts the most unstable α crystals while allowing the more stable β' crystals to grow (a process called <strong>Ostwald ripening</strong>). The final cooling step solidifies the desired crystal network. This creates the optimal solid:liquid fat ratio for efficient churning and good butter consistency.</p>
                    <p class="mt-2"><strong>Seasonal variation (India):</strong> In India, buffalo milk fat (IV: 28–34) is harder than cow milk fat (IV: 32–38), and within cow breeds, fat composition varies with feed. During summer (green fodder, high oleic acid), fat is softer; during winter (dry feed), fat is harder. The tempering program must be adjusted accordingly.</p>
                </li>

                <li><strong>Biological Ripening — For Cultured/Ripened Butter (Optional):</strong>
                    <p>Cultured butter is produced by fermenting the cream with specific <strong>lactic acid bacteria (LAB)</strong> starter cultures before churning. This step imparts the characteristic tangy, aromatic flavor profile.</p>
                    
                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Starter Cultures Used:</h4>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Organism</th>
                                    <th class="p-2 border">Role</th>
                                    <th class="p-2 border">Key Metabolite</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border"><em>Lactococcus lactis</em> subsp. <em>lactis</em></td><td class="p-2 border">Acid producer (primary)</td><td class="p-2 border">Lactic acid (from lactose)</td></tr>
                                <tr><td class="p-2 border"><em>Lactococcus lactis</em> subsp. <em>cremoris</em></td><td class="p-2 border">Acid producer (milder)</td><td class="p-2 border">Lactic acid (from lactose)</td></tr>
                                <tr><td class="p-2 border"><em>Lactococcus lactis</em> subsp. <em>lactis</em> biovar <em>diacetylactis</em></td><td class="p-2 border">Aroma producer</td><td class="p-2 border">Diacetyl, acetoin, CO₂ (from citrate)</td></tr>
                                <tr><td class="p-2 border"><em>Leuconostoc mesenteroides</em> subsp. <em>cremoris</em></td><td class="p-2 border">Aroma producer</td><td class="p-2 border">Diacetyl, acetoin, CO₂, ethanol (from citrate & sugars)</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Biochemistry of Flavor Development — The Citrate Pathway:</h4>
                    <p>The key aroma compound in cultured butter is <strong>diacetyl (2,3-butanedione, CH₃COCOCH₃)</strong>. It is produced via the <strong>citrate fermentation pathway</strong>:</p>
                    <div class="bg-yellow-50 p-3 rounded mt-2 border border-yellow-200">
                        <p class="font-mono text-sm text-center">
                            <strong>Citrate</strong> (in milk: ~1.8 g/L)
                            <br>↓ <em>citrate permease (CitP)</em>
                            <br><strong>Oxaloacetate</strong> + <strong>Acetate</strong>
                            <br>↓ <em>oxaloacetate decarboxylase</em>
                            <br><strong>Pyruvate</strong> + <strong>CO₂</strong>
                            <br>↓ <em>α-acetolactate synthase (ALS)</em>
                            <br><strong>α-Acetolactate</strong>
                            <br>↙ ↘
                            <br><em>(oxidative decarboxylation)</em> &nbsp; <em>(α-acetolactate decarboxylase)</em>
                            <br><strong>DIACETYL</strong> + CO₂ &nbsp;&nbsp;&nbsp; <strong>Acetoin</strong> + CO₂
                            <br>↓ <em>(diacetyl reductase)</em>
                            <br><strong>Acetoin</strong>
                            <br>↓ <em>(acetoin reductase / 2,3-butanediol dehydrogenase)</em>
                            <br><strong>2,3-Butanediol</strong> (flavorless)
                        </p>
                    </div>

                    <p class="mt-3"><strong>Key points about diacetyl production:</strong></p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Diacetyl threshold:</strong> Very low flavor threshold (~0.005 ppm in air; ~2–5 ppm in butter for detectable buttery flavor). Target in cultured butter: 1.5–4 ppm.</li>
                        <li><strong>Diacetyl is unstable:</strong> It is rapidly reduced to acetoin (much less flavor-active) and then to 2,3-butanediol (flavorless) by bacterial reductases. Therefore, <strong>conditions that favor diacetyl accumulation</strong> are critical:
                            <ul class="list-disc list-inside ml-6 space-y-1">
                                <li><strong>Low pH (< 5.5):</strong> Inhibits diacetyl reductase activity</li>
                                <li><strong>Oxidative conditions:</strong> O₂ promotes non-enzymatic oxidative decarboxylation of α-acetolactate directly to diacetyl</li>
                                <li><strong>Lower temperature:</strong> Slows enzymatic reduction of diacetyl</li>
                            </ul>
                        </li>
                        <li><strong>CO₂ production</strong> from citrate metabolism creates small gas pockets that assist in the mechanical disruption of fat globules during subsequent churning.</li>
                    </ul>

                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Ripening Conditions:</h4>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Inoculation rate:</strong> 1–5% starter culture (v/v)</li>
                        <li><strong>Temperature:</strong> 20–22°C (mesophilic cultures)</li>
                        <li><strong>Duration:</strong> 12–16 hours (or until acidity reaches 0.3–0.5% lactic acid; pH ~4.6–5.0)</li>
                        <li><strong>Final titratable acidity target:</strong> 0.30–0.35% lactic acid for mild-flavored butter</li>
                    </ul>
                </li>

                <li><strong>Cooling to Churning Temperature (oPRP):</strong>
                    <p>After aging/ripening, the cream is adjusted to the optimal churning temperature, typically <strong>8–14°C</strong> (varies with fat composition and season). This is an <strong>oPRP</strong>.</p>
                    <p>The churning temperature has a profound effect on the process:</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Condition</th>
                                    <th class="p-2 border">Churning Temp Too Low (< 7°C)</th>
                                    <th class="p-2 border">Optimal (8–14°C)</th>
                                    <th class="p-2 border">Churning Temp Too High (> 16°C)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">SFC</td><td class="p-2 border">> 55%</td><td class="p-2 border">30–50%</td><td class="p-2 border">< 25%</td></tr>
                                <tr><td class="p-2 border">Churning time</td><td class="p-2 border">Very long (> 60 min)</td><td class="p-2 border">30–45 min (batch)</td><td class="p-2 border">Very short (< 15 min)</td></tr>
                                <tr><td class="p-2 border">Butter character</td><td class="p-2 border">Hard, crumbly, brittle</td><td class="p-2 border">Smooth, waxy, spreadable</td><td class="p-2 border">Soft, greasy, sticky</td></tr>
                                <tr><td class="p-2 border">Fat loss in buttermilk</td><td class="p-2 border">Low (0.2–0.3%)</td><td class="p-2 border">Normal (0.3–0.5%)</td><td class="p-2 border">High (> 0.7%)</td></tr>
                                <tr><td class="p-2 border">Moisture control</td><td class="p-2 border">Difficult (high moisture)</td><td class="p-2 border">Good control</td><td class="p-2 border">Low moisture but poor dispersion</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2"><strong>Rule of thumb:</strong> Use lower churning temperature for soft fat (summer/cow milk/high IV) and higher churning temperature for hard fat (winter/buffalo milk/low IV).</p>
                </li>

                <li><strong>Churning — Phase Inversion (The Core Process):</strong>
                    <p>Churning is the heart of butter manufacture. It is the process by which the <strong>oil-in-water (O/W) emulsion of cream is converted (inverted) into the water-in-oil (W/O) emulsion of butter</strong>.</p>
                    
                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">The Milk Fat Globule Membrane (MFGM):</h4>
                    <p>Understanding the MFGM is essential to understanding churning. Each fat globule in milk is surrounded by a complex trilayer biological membrane called the <strong>MFGM</strong>, which is 10–20 nm thick and composed of:</p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Inner layer:</strong> Polar lipids (phospholipids), proteins adsorbed from the endoplasmic reticulum of the mammary cell</li>
                        <li><strong>Middle layer:</strong> Coat proteins and high-melting triglycerides</li>
                        <li><strong>Outer layer:</strong> A bilayer membrane derived from the apical plasma membrane of the mammary epithelial cell during secretion. Contains:
                            <ul class="list-disc list-inside ml-6">
                                <li><strong>Phospholipids:</strong> Phosphatidylcholine (PC), phosphatidylethanolamine (PE), sphingomyelin (SM)</li>
                                <li><strong>Glycoproteins:</strong> Mucin 1 (MUC1), butyrophilin (BTN), PAS 6/7 (lactadherin), xanthine oxidoreductase (XOR/XDH)</li>
                                <li><strong>Cholesterol:</strong> ~40% of total membrane lipids</li>
                                <li><strong>Glycolipids and gangliosides</strong></li>
                            </ul>
                        </li>
                    </ul>
                    <p class="mt-2">The MFGM acts as a natural <strong>emulsifier</strong>, stabilizing the fat globules in the aqueous phase of milk and preventing coalescence. <strong>Churning is fundamentally the process of disrupting and destroying this membrane.</strong></p>

                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Mechanism of Churning — Four Stages:</h4>
                    <div class="bg-blue-50 p-4 rounded mt-2 border border-blue-200 space-y-3">
                        <p><strong>Stage 1: Incorporation of Air & Foam Formation</strong><br>
                        As the cream is agitated, air is incorporated, forming a foam. Fat globules migrate to the air-water interface (air bubble surfaces) due to their surface-active MFGM. The globules become concentrated at these interfaces. The mechanical shear and the surface tension forces begin to distort the fat globules.</p>

                        <p><strong>Stage 2: Destabilization & Partial Coalescence</strong><br>
                        The intense mechanical agitation, combined with repeated collision of fat globules, causes the MFGM to be progressively damaged and stripped away. Solid fat crystals within the globules <strong>puncture</strong> neighboring globules (a process called <strong>"partial coalescence"</strong> or <strong>"fat crystal-mediated clumping"</strong>). This is why the presence of solid fat crystals (from proper aging) is absolutely essential — without them, the globules would simply deform and bounce back without merging. The protruding crystal pierces the MFGM of an adjacent globule, creating a bridge of liquid fat between globules. These bridges solidify, forming <strong>clumps</strong> of fat globules.</p>

                        <p><strong>Stage 3: Foam Collapse & Grain Formation</strong><br>
                        As clumps grow larger, the foam structure becomes unstable and collapses. The clumps begin to aggregate into visible <strong>butter grains</strong> (initially ~1–3 mm diameter). At this point, the aqueous phase (buttermilk) becomes visually separated from the fat grains. This is the <strong>"break point"</strong> — the moment when the churn operator sees the cream transform from a thick, opaque liquid into distinct grains in a watery liquid.</p>

                        <p><strong>Stage 4: Phase Inversion</strong><br>
                        As the butter grains are worked together, the remaining free liquid fat (from disrupted globules) acts as a "cement," filling the spaces between the clumped globules and crystals. The aqueous phase, which was previously the continuous phase, becomes <strong>entrapped as fine droplets</strong> (1–10 µm) within the now continuous fat phase. This is the <strong>phase inversion</strong>: O/W → W/O.</p>
                    </div>

                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Structure of Butter After Churning (King Model):</h4>
                    <p>The classical <strong>King model</strong> describes butter as consisting of four structural elements:</p>
                    <ol class="list-decimal list-inside ml-4 space-y-1">
                        <li><strong>Continuous fat phase:</strong> Free liquid fat that was released from disrupted globules</li>
                        <li><strong>Fat crystal network:</strong> Crystalline fat forming a three-dimensional network that gives butter its firmness</li>
                        <li><strong>Intact and partially disrupted fat globules:</strong> Some globules survive churning with their MFGM partially intact, embedded within the continuous fat phase</li>
                        <li><strong>Dispersed aqueous droplets:</strong> Small droplets of buttermilk (water, dissolved salts, lactose, proteins) dispersed throughout the fat phase</li>
                    </ol>

                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Types of Churning Equipment:</h4>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Feature</th>
                                    <th class="p-2 border">Batch Churn (Traditional)</th>
                                    <th class="p-2 border">Continuous Butter Maker (Fritz Process)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Capacity</td><td class="p-2 border">100–5,000 L per batch</td><td class="p-2 border">1,000–15,000 kg/hr</td></tr>
                                <tr><td class="p-2 border">Churning time</td><td class="p-2 border">30–60 minutes</td><td class="p-2 border">~2–5 seconds (in churning cylinder)</td></tr>
                                <tr><td class="p-2 border">Speed</td><td class="p-2 border">15–25 rpm</td><td class="p-2 border">~1,000–3,000 rpm (beater speed)</td></tr>
                                <tr><td class="p-2 border">Principle</td><td class="p-2 border">Tumbling action in partially filled rotating cylinder</td><td class="p-2 border">High-speed beating in a cylindrical churning section, followed by working in a separate section</td></tr>
                                <tr><td class="p-2 border">Fat in buttermilk</td><td class="p-2 border">0.3–0.5%</td><td class="p-2 border">0.4–0.7% (slightly higher)</td></tr>
                                <tr><td class="p-2 border">Modern usage</td><td class="p-2 border">Artisanal, small-scale</td><td class="p-2 border">Industrial standard worldwide</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2"><strong>The Fritz continuous butter maker</strong> (developed in Germany in the 1940s) consists of three main sections:</p>
                    <ol class="list-decimal list-inside ml-4 space-y-1">
                        <li><strong>Churning cylinder:</strong> A high-speed beater (~1,000–3,000 rpm) churns the cream in seconds</li>
                        <li><strong>Separation section:</strong> Butter grains are separated from buttermilk via a perforated plate or squeeze-drying section</li>
                        <li><strong>Working section(s):</strong> One or two stages of auger-type workers compact, knead, and standardize the butter (salt and moisture injection can occur here)</li>
                    </ol>
                </li>

                <li><strong>Buttermilk Draining & Washing:</strong>
                    <p>After churning, the buttermilk is drained off. <strong>Churned buttermilk</strong> differs from <strong>cultured buttermilk</strong> — it is the aqueous phase released during churning and typically contains:</p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Fat:</strong> 0.3–0.7% (mostly as small globules and MFGM fragments)</li>
                        <li><strong>Protein:</strong> ~3.3% (casein and whey proteins)</li>
                        <li><strong>Lactose:</strong> ~4.5%</li>
                        <li><strong>MFGM phospholipids:</strong> Enriched 5–10× compared to whole milk (making buttermilk a valuable source of bioactive phospholipids)</li>
                        <li><strong>Total solids:</strong> ~9%</li>
                    </ul>
                    <p class="mt-2">The butter grains are then <strong>washed</strong> 1–3 times with <strong>chilled (4–7°C), pasteurized, potable water</strong>. The volume of wash water is typically equal to the volume of buttermilk removed.</p>
                    <p><strong>Purpose of washing:</strong></p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li>Remove residual buttermilk (source of lactose and casein — substrates for microbial growth and Maillard browning)</li>
                        <li>Reduce MSNF content to < 2%</li>
                        <li>Lower microbial load in the moisture droplets</li>
                        <li>Improve keeping quality (unwashed butter spoils 2–3× faster)</li>
                    </ul>
                    <p class="mt-2"><strong>Caution:</strong> Over-washing removes flavor compounds (diacetyl, lactic acid) and can make butter bland. It also slightly reduces yield. For cultured butter, washing may be minimal or omitted to preserve flavor.</p>
                </li>

                <li><strong>Salting (oPRP):</strong>
                    <p>Salt (NaCl) is added at 1.0–2.5% (w/w) for salted butter. Salt can be added as:</p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Dry salt:</strong> Fine-grained, food-grade, added directly to butter grains (batch process)</li>
                        <li><strong>Brine:</strong> Saturated salt solution (~26% NaCl) injected during working (continuous process)</li>
                    </ul>
                    <p class="mt-2"><strong>Functions of salt in butter:</strong></p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Flavor enhancement:</strong> Primary purpose; salt enhances butter flavor perception</li>
                        <li><strong>Preservation:</strong> Salt dissolves exclusively in the aqueous phase. Since water is only ~16% of butter, a 2% salt content in butter translates to approximately <strong>12.5% salt in the aqueous phase</strong> (2/16 × 100 = 12.5%). This dramatically reduces the <strong>water activity (aₓ)</strong> of the moisture droplets from ~0.99 to ~0.92–0.94, inhibiting most spoilage bacteria.</li>
                        <li><strong>Pro-oxidant caution:</strong> NaCl is a mild pro-oxidant — it can catalyze lipid oxidation by promoting the release of iron from proteins (ferritin). Therefore, excess salt can paradoxically reduce shelf life through oxidative rancidity.</li>
                    </ul>
                    <p class="mt-2"><strong>Water activity (aₓ) concept:</strong></p>
                    <div class="bg-gray-100 p-2 rounded mt-1 font-mono text-sm text-center">
                        aₓ = P/P₀ ≈ n_water / (n_water + n_solute)
                    </div>
                    <p class="text-sm mt-1">Where P = vapor pressure of water in food, P₀ = vapor pressure of pure water, n = moles. Most bacteria require aₓ > 0.91; most molds require aₓ > 0.80. Salted butter has aqueous phase aₓ ≈ 0.92–0.94, which is marginal for many bacteria, providing a hurdle to microbial growth.</p>
                </li>

                <li><strong>Working (Kneading) — oPRP:</strong>
                    <p>Working is the final mechanical treatment of butter. It is performed after (or simultaneously with) salting. The butter grains are kneaded under controlled conditions.</p>
                    
                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Objectives of Working:</h4>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Transform butter grains into a cohesive, continuous mass:</strong> The free fat and clumped globules are kneaded together to form a homogeneous matrix</li>
                        <li><strong>Uniform salt distribution:</strong> Salt must be dissolved and evenly dispersed throughout the aqueous phase</li>
                        <li><strong>Moisture droplet size reduction:</strong> Working breaks large aqueous droplets into fine ones (target: < 10 µm). This is critical for:
                            <ul class="list-disc list-inside ml-6">
                                <li><strong>Microbial safety:</strong> Smaller droplets limit nutrient availability and space for microbial growth (each droplet becomes an isolated "microenvironment")</li>
                                <li><strong>Appearance:</strong> Large droplets (> 50 µm) are visible as "free moisture" or "leakiness" — a serious defect</li>
                                <li><strong>Shelf life:</strong> Fine dispersion prevents localized microbial colonies</li>
                            </ul>
                        </li>
                        <li><strong>Moisture standardization:</strong> Working intensity affects moisture content — under-working retains more moisture (> 16%), over-working expels too much (< 14%)</li>
                        <li><strong>Texture development:</strong> Creates the desired smooth, waxy body and close texture</li>
                    </ul>

                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Science of Moisture Dispersion:</h4>
                    <p>During working, the moisture droplets are subjected to <strong>elongational and shear flow</strong>. The <strong>Weber number (We)</strong> and <strong>Capillary number (Ca)</strong> govern droplet breakup:</p>
                    <div class="bg-gray-100 p-2 rounded mt-1 font-mono text-sm text-center">
                        Ca = (η_c × γ̇ × R) / σ
                    </div>
                    <p class="text-sm mt-1">Where η_c = viscosity of continuous phase (fat), γ̇ = shear rate, R = droplet radius, σ = interfacial tension. When Ca exceeds a critical value (Ca_crit), the droplet deforms and breaks up. The high viscosity of the fat phase and the mechanical shear during working provide the conditions for droplet breakup.</p>

                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Effect of Working Intensity:</h4>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Condition</th>
                                    <th class="p-2 border">Under-Worked</th>
                                    <th class="p-2 border">Optimally Worked</th>
                                    <th class="p-2 border">Over-Worked</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Moisture droplets</td><td class="p-2 border">Large, irregular (> 50 µm)</td><td class="p-2 border">Fine, uniform (< 10 µm)</td><td class="p-2 border">Extremely fine (< 2 µm) — becomes "greasy"</td></tr>
                                <tr><td class="p-2 border">Appearance</td><td class="p-2 border">"Leaky" — visible free moisture; mottled</td><td class="p-2 border">Smooth, waxy, uniform color</td><td class="p-2 border">Greasy, sticky, translucent appearance</td></tr>
                                <tr><td class="p-2 border">Salt distribution</td><td class="p-2 border">Uneven — "mottled" or streaky</td><td class="p-2 border">Uniform</td><td class="p-2 border">Uniform but texture degraded</td></tr>
                                <tr><td class="p-2 border">Crystal structure</td><td class="p-2 border">Intact — firm</td><td class="p-2 border">Partially disrupted — smooth</td><td class="p-2 border">Extensively disrupted — loss of body</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2"><strong>"Mottling" or "waviness"</strong> is a common defect where uneven salt distribution causes uneven moisture content, which in turn causes color variation (regions with more moisture appear lighter/more translucent). This is a working defect, not a compositional one.</p>
                </li>

                <li><strong>Packaging (PRP):</strong>
                    <p>Packaging is a <strong>PRP</strong> that protects butter from:</p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Light-induced oxidation:</strong> UV and visible light (especially wavelengths 350–550 nm) catalyze lipid oxidation via photosensitizers (riboflavin in the aqueous phase). This produces <strong>"light-activated flavor"</strong> or <strong>"sunlight flavor"</strong> — a metallic, oxidized off-flavor. Opaque packaging (aluminum foil laminate, parchment paper with foil backing) is essential.</li>
                        <li><strong>Oxygen:</strong> Atmospheric O₂ drives autoxidation of unsaturated fatty acids. Vacuum packaging or nitrogen flushing can extend shelf life.</li>
                        <li><strong>Moisture loss:</strong> Prevents surface drying and crust formation.</li>
                        <li><strong>Absorption of foreign odors:</strong> Butter fat readily absorbs volatiles from the environment due to its lipophilic nature.</li>
                    </ul>
                    <p class="mt-2"><strong>Packaging materials:</strong></p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Vegetable parchment paper:</strong> Traditional; provides moisture barrier but poor light/oxygen barrier</li>
                        <li><strong>Aluminum foil laminate:</strong> Excellent light and oxygen barrier; industry standard for retail butter</li>
                        <li><strong>Polypropylene/polyethylene tubs:</strong> Used for soft/spreadable butter; may include aluminum seal for oxygen barrier</li>
                    </ul>
                </li>

                <li><strong>Cold Storage (CCP-2 — Critical Control Point):</strong>
                    <p>The finished butter must be stored under strict temperature control:</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Storage Type</th>
                                    <th class="p-2 border">Temperature</th>
                                    <th class="p-2 border">Expected Shelf Life</th>
                                    <th class="p-2 border">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Retail (refrigerated)</td><td class="p-2 border">≤ 5°C</td><td class="p-2 border">6–8 weeks (salted); 3–4 weeks (unsalted)</td><td class="p-2 border">Standard for consumer purchase</td></tr>
                                <tr><td class="p-2 border">Commercial cold store</td><td class="p-2 border">-10 to -15°C</td><td class="p-2 border">4–6 months</td><td class="p-2 border">Used for seasonal storage/surplus management</td></tr>
                                <tr><td class="p-2 border">Deep freeze / long-term</td><td class="p-2 border">-20 to -25°C</td><td class="p-2 border">9–12 months (or longer)</td><td class="p-2 border">Quality may decline due to oxidation and crystal coarsening; protect from temperature fluctuations</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2"><strong>This is CCP-2</strong> because temperature abuse during storage can lead to:</p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Microbial growth:</strong> Psychrotrophic organisms (e.g., <em>Pseudomonas</em>, molds) can grow at 5–10°C. At > 10°C, pathogenic organisms like <em>Listeria monocytogenes</em> (which can grow at 1°C but much faster at > 10°C) and <em>Staphylococcus aureus</em> (> 10°C for growth; > 15°C for toxin production) become a concern.</li>
                        <li><strong>Accelerated lipid oxidation:</strong> The rate of autoxidation doubles for every 10°C rise (following Arrhenius kinetics: k = A × e^(-Ea/RT)).</li>
                        <li><strong>Lipolysis:</strong> Residual lipases (native or microbial) are more active at higher temperatures, releasing free fatty acids (butyric acid → rancid flavor).</li>
                        <li><strong>Crystal polymorphic transitions:</strong> Temperature fluctuations promote α → β' → β transitions, leading to grainy texture.</li>
                    </ul>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Common Defects in Butter</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Defect Category</th>
                            <th class="p-2 border">Defect</th>
                            <th class="p-2 border">Cause</th>
                            <th class="p-2 border">Scientific Basis</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border" rowspan="3"><strong>Flavor Defects</strong></td>
                            <td class="p-2 border">Rancid (hydrolytic)</td><td class="p-2 border">Lipase activity (native LPL or microbial lipases)</td><td class="p-2 border">Release of short-chain FAs (butyric C4:0, caproic C6:0) — extremely potent off-flavors even at low concentrations (threshold for butyric acid: ~0.5–1.0 ppm)</td></tr>
                        <tr><td class="p-2 border">Oxidized / Tallowy / Metallic</td><td class="p-2 border">Lipid oxidation (autoxidation, photo-oxidation)</td><td class="p-2 border">Free radical chain reaction: Initiation → Propagation → Termination. Produces hydroperoxides → aldehydes (hexanal, nonanal), ketones. Catalyzed by Cu²⁺ (> 0.05 ppm), Fe³⁺, light, O₂</td></tr>
                        <tr><td class="p-2 border">Fishy / Oily</td><td class="p-2 border">Oxidation of phospholipids (especially those rich in PUFA)</td><td class="p-2 border">Trimethylamine (TMA) formation from lecithin oxidation; common in unsalted butter with high PUFA content</td></tr>
                        <tr><td class="p-2 border" rowspan="3"><strong>Body & Texture Defects</strong></td>
                            <td class="p-2 border">Greasy / Sticky</td><td class="p-2 border">Churning or working temperature too high; over-working</td><td class="p-2 border">Excessive liquid fat; destruction of crystal network; low SFC</td></tr>
                        <tr><td class="p-2 border">Crumbly / Brittle</td><td class="p-2 border">Churning temperature too low; insufficient working</td><td class="p-2 border">Excessive solid fat (high SFC); inadequate bonding between fat crystal clusters</td></tr>
                        <tr><td class="p-2 border">Sandy / Grainy</td><td class="p-2 border">Temperature fluctuations during storage</td><td class="p-2 border">β' → β polymorphic transition; large β crystals (> 30 µm) are perceived as "sandy" on the palate</td></tr>
                        <tr><td class="p-2 border" rowspan="2"><strong>Color/Appearance Defects</strong></td>
                            <td class="p-2 border">Mottled / Wavy</td><td class="p-2 border">Uneven salt and moisture distribution</td><td class="p-2 border">Regions with higher moisture appear lighter (more light scattering); under-working defect</td></tr>
                        <tr><td class="p-2 border">Surface discoloration (yellowing/darkening)</td><td class="p-2 border">Surface oxidation; dehydration</td><td class="p-2 border">Oxidation of carotenoids; Maillard browning of surface proteins; "surface taint"</td></tr>
                        <tr><td class="p-2 border"><strong>Microbial Defects</strong></td>
                            <td class="p-2 border">Surface mold growth / "Buttons"</td><td class="p-2 border">Post-pasteurization contamination; inadequate packaging</td><td class="p-2 border"><em>Cladosporium</em>, <em>Alternaria</em>, <em>Aspergillus</em> spp. can grow on butter surface at low aₓ (~0.80); "buttons" are raised mold colonies</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Lipid Oxidation in Butter — Detailed Mechanism</h3>
            <p>Lipid oxidation is the primary chemical deterioration pathway in butter and is responsible for "tallowy," "metallic," and "cardboard" off-flavors. Understanding its mechanism is essential for quality control:</p>
            <div class="bg-red-50 p-4 rounded mt-2 border border-red-200">
                <p><strong>1. Initiation:</strong></p>
                <div class="font-mono text-sm ml-4">RH + Initiator (light, heat, metal ions) → R• + H•</div>
                <p class="text-sm ml-4">Where RH = unsaturated fatty acid; R• = lipid free radical</p>
                
                <p class="mt-2"><strong>2. Propagation (chain reaction):</strong></p>
                <div class="font-mono text-sm ml-4">R• + O₂ → ROO• (peroxyl radical) <em>[very fast, diffusion-controlled]</em></div>
                <div class="font-mono text-sm ml-4">ROO• + RH → ROOH + R• <em>[rate-limiting step]</em></div>
                <p class="text-sm ml-4">ROOH = lipid hydroperoxide (primary oxidation product — measured by Peroxide Value)</p>
                
                <p class="mt-2"><strong>3. Termination:</strong></p>
                <div class="font-mono text-sm ml-4">R• + R• → R-R</div>
                <div class="font-mono text-sm ml-4">R• + ROO• → ROOR</div>
                <div class="font-mono text-sm ml-4">ROO• + ROO• → ROOR + O₂</div>
                
                <p class="mt-2"><strong>4. Decomposition of hydroperoxides:</strong></p>
                <div class="font-mono text-sm ml-4">ROOH → RO• + •OH (homolytic cleavage)</div>
                <div class="font-mono text-sm ml-4">→ Aldehydes, ketones, alcohols, hydrocarbons (secondary products)</div>
                <p class="text-sm ml-4">Key flavor-impact compounds: <strong>hexanal</strong> (green/grassy), <strong>nonanal</strong> (tallowy), <strong>2,4-decadienal</strong> (fried/fatty), <strong>1-octen-3-one</strong> (metallic)</p>
            </div>
            <p class="mt-2"><strong>Factors accelerating oxidation in butter:</strong> Pro-oxidant metals (Cu²⁺ > 0.05 ppm is detrimental; stainless steel equipment is mandatory), light exposure (riboflavin acts as photosensitizer for singlet oxygen ¹O₂ pathway), high storage temperature, high PUFA content, dissolved oxygen.</p>
            <p><strong>Antioxidant strategies in butter:</strong> High-temperature pasteurization (generates -SH groups), addition of permitted antioxidants (e.g., BHA, BHT, TBHQ — where permitted by regulation), vacuum/nitrogen packaging, opaque packaging materials, copper-free equipment.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Spreadability and Rheology of Butter</h3>
            <p>The spreadability of butter is a key consumer-perceived quality attribute and is governed by its <strong>rheological properties</strong>, which in turn depend on:</p>
            <ul class="list-disc list-inside ml-4 space-y-1">
                <li><strong>Solid Fat Content (SFC)</strong> at the temperature of use (refrigerator: 5°C → SFC ~55–65%; room temperature: 20°C → SFC ~20–30%)</li>
                <li><strong>Crystal polymorphic form</strong> (β' gives smooth, spreadable texture)</li>
                <li><strong>Fat crystal network microstructure</strong> (determined by processing history)</li>
                <li><strong>Fatty acid composition</strong> (more C18:1 oleic acid → softer, more spreadable butter)</li>
            </ul>
            <p class="mt-2">Butter is a <strong>viscoelastic, plastic material</strong> exhibiting a <strong>yield stress</strong> — below the yield stress it behaves as a solid (elastic), above it flows (plastic). The yield stress at 5°C is typically <strong>30–100 kPa</strong>; at 15°C it drops to <strong>5–15 kPa</strong>.</p>
            <p class="mt-2">Spreadability can be quantified using:</p>
            <ul class="list-disc list-inside ml-4 space-y-1">
                <li><strong>Penetrometry:</strong> Cone or needle penetration depth at specified temperature (higher penetration = softer butter)</li>
                <li><strong>Texture Profile Analysis (TPA):</strong> Using a texture analyzer (e.g., TA.XT Plus) — measures hardness, adhesiveness, cohesiveness</li>
                <li><strong>Oscillatory rheometry:</strong> Measures storage modulus (G') and loss modulus (G'') — G'/G'' ratio (tan δ) indicates elastic vs. viscous behavior</li>
            </ul>
            <p class="mt-2"><strong>Improving spreadability:</strong> Technologies for producing more spreadable butter include:</p>
            <ul class="list-disc list-inside ml-4 space-y-1">
                <li>Modified tempering programs (longer warm-holding to promote α → β' transition)</li>
                <li>Fractionation of milk fat (using the low-melting fraction, olein, which is richer in oleic acid)</li>
                <li>Blending with vegetable oils (creates "butter blends" or "spreadable butter" — regulated separately)</li>
                <li>Texturization through intensive working at controlled temperatures</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Microbiological Standards for Butter</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Microbiological Parameter</th>
                            <th class="p-2 border">FSSAI Limit</th>
                            <th class="p-2 border">Significance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Total Plate Count (TPC)</td><td class="p-2 border">≤ 50,000 CFU/g (pasteurized)</td><td class="p-2 border">General hygiene indicator</td></tr>
                        <tr><td class="p-2 border">Coliform count</td><td class="p-2 border">≤ 10 CFU/g</td><td class="p-2 border">Post-pasteurization contamination indicator</td></tr>
                        <tr><td class="p-2 border"><em>E. coli</em></td><td class="p-2 border">Absent in 1 g</td><td class="p-2 border">Fecal contamination indicator</td></tr>
                        <tr><td class="p-2 border"><em>Salmonella</em></td><td class="p-2 border">Absent in 25 g</td><td class="p-2 border">Pathogen — food safety</td></tr>
                        <tr><td class="p-2 border"><em>Listeria monocytogenes</em></td><td class="p-2 border">Absent in 25 g</td><td class="p-2 border">Pathogen — can grow at refrigeration temperatures</td></tr>
                        <tr><td class="p-2 border"><em>Staphylococcus aureus</em></td><td class="p-2 border">≤ 100 CFU/g</td><td class="p-2 border">Enterotoxin producer; common skin/nasal flora — indicates handling hygiene</td></tr>
                        <tr><td class="p-2 border">Yeast & Mold count</td><td class="p-2 border">≤ 50 CFU/g</td><td class="p-2 border">Spoilage organisms; can grow at low aₓ; indicates packaging/storage integrity</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">HACCP Summary Table for Butter Production</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Step</th>
                            <th class="p-2 border">Hazard</th>
                            <th class="p-2 border">Control Measure</th>
                            <th class="p-2 border">Category</th>
                            <th class="p-2 border">Critical Limit</th>
                            <th class="p-2 border">Monitoring</th>
                            <th class="p-2 border">Corrective Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border">Milk/Cream Reception</td>
                            <td class="p-2 border">Biological (pathogens), Chemical (antibiotics, pesticides, aflatoxin M1)</td>
                            <td class="p-2 border">Supplier approval, platform tests, antibiotic screening</td>
                            <td class="p-2 border">PRP</td>
                            <td class="p-2 border">Antibiotics: absent; Aflatoxin M1: < 0.5 µg/kg; Acidity < 0.2% LA</td>
                            <td class="p-2 border">Every lot</td>
                            <td class="p-2 border">Reject non-conforming milk</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Cream Pasteurization</strong></td>
                            <td class="p-2 border">Biological (vegetative pathogens: <em>Salmonella, Listeria, E. coli</em> O157:H7)</td>
                            <td class="p-2 border">Time-temperature control</td>
                            <td class="p-2 border"><strong>CCP-1</strong></td>
                            <td class="p-2 border">≥ 95°C for ≥ 15 sec (HTST); ALP test negative</td>
                            <td class="p-2 border">Continuous T recording; flow diversion valve</td>
                            <td class="p-2 border">Divert cream for re-pasteurization; calibrate instruments</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Churning Temperature</td>
                            <td class="p-2 border">Quality (not safety) — affects texture and fat loss</td>
                            <td class="p-2 border">Temperature control</td>
                            <td class="p-2 border">oPRP</td>
                            <td class="p-2 border">8–14°C (adjusted by season/fat composition)</td>
                            <td class="p-2 border">Temperature check before churning</td>
                            <td class="p-2 border">Adjust temperature; hold cream longer</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Working & Moisture Control</td>
                            <td class="p-2 border">Quality (moisture %, droplet size); Chemical (uneven salt)</td>
                            <td class="p-2 border">Working time/intensity; moisture analysis</td>
                            <td class="p-2 border">oPRP</td>
                            <td class="p-2 border">Moisture ≤ 16%; Salt ≤ 3%; No visible free moisture</td>
                            <td class="p-2 border">Moisture analysis (rapid method/microwave) every batch</td>
                            <td class="p-2 border">Adjust working time; re-work butter</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Packaging</td>
                            <td class="p-2 border">Physical (foreign matter); Biological (post-process contamination)</td>
                            <td class="p-2 border">Metal detection; hygienic design; food-grade materials</td>
                            <td class="p-2 border">PRP</td>
                            <td class="p-2 border">No metal > 2 mm; packaging integrity</td>
                            <td class="p-2 border">Metal detector on every pack; visual checks</td>
                            <td class="p-2 border">Reject affected packs; investigate source</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Cold Storage</strong></td>
                            <td class="p-2 border">Biological (psychrotrophic growth, <em>Listeria</em>); Chemical (oxidation)</td>
                            <td class="p-2 border">Temperature control</td>
                            <td class="p-2 border"><strong>CCP-2</strong></td>
                            <td class="p-2 border">≤ 5°C (retail); ≤ -18°C (long-term)</td>
                            <td class="p-2 border">Continuous temperature recording with alarms</td>
                            <td class="p-2 border">Segregate and evaluate product; repair cold chain</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Types of Butter — Classification</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Type</th>
                            <th class="p-2 border">Description</th>
                            <th class="p-2 border">Key Feature</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Sweet Cream Butter</td><td class="p-2 border">Made from fresh (unfermented) pasteurized cream</td><td class="p-2 border">Clean, mild, creamy flavor; most common type globally</td></tr>
                        <tr><td class="p-2 border">Cultured/Ripened Butter</td><td class="p-2 border">Made from cream fermented with LAB starter cultures</td><td class="p-2 border">Tangy, complex flavor; diacetyl-rich aroma; traditional European style</td></tr>
                        <tr><td class="p-2 border">Salted Butter</td><td class="p-2 border">Salt added (1–2.5%)</td><td class="p-2 border">Enhanced flavor; longer shelf life due to reduced aₓ</td></tr>
                        <tr><td class="p-2 border">Unsalted / Sweet Butter</td><td class="p-2 border">No salt added</td><td class="p-2 border">Preferred for baking (precise salt control); shorter shelf life</td></tr>
                        <tr><td class="p-2 border">Whey Butter</td><td class="p-2 border">Made from whey cream (by-product of cheese making)</td><td class="p-2 border">Slightly different flavor profile; often used in processed foods; may have cheese-like notes</td></tr>
                        <tr><td class="p-2 border">White Butter (Makhan)</td><td class="p-2 border">Traditional Indian butter from curd/dahi (yogurt) churning</td><td class="p-2 border">Made from fermented whole milk (not separated cream); higher MSNF; used to make ghee</td></tr>
                        <tr><td class="p-2 border">European-Style Butter</td><td class="p-2 border">Higher fat content (82–86%); typically cultured</td><td class="p-2 border">Richer, more buttery; lower moisture (12–14%); preferred in pastry</td></tr>
                        <tr><td class="p-2 border">Spreadable Butter</td><td class="p-2 border">Modified processing or blended with vegetable oil</td><td class="p-2 border">Softer at refrigerator temperatures; higher proportion of low-melting triglycerides</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Summary of Key Scientific Principles in Butter Making</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Process Step</th>
                            <th class="p-2 border">Key Scientific Principle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Cream Separation</td><td class="p-2 border">Stoke's Law (centrifugal modification); density difference (Δρ ≈ 0.1 g/cm³)</td></tr>
                        <tr><td class="p-2 border">Pasteurization</td><td class="p-2 border">First-order thermal inactivation kinetics (D-value, z-value); protective effect of fat on microorganisms</td></tr>
                        <tr><td class="p-2 border">Fat Crystallization/Aging</td><td class="p-2 border">Crystal polymorphism (α → β' → β); nucleation and crystal growth theory; Ostwald ripening; solid fat content (SFC)</td></tr>
                        <tr><td class="p-2 border">Biological Ripening</td><td class="p-2 border">Citrate metabolism; diacetyl biochemistry; lactic acid fermentation (glycolysis → pyruvate → lactate)</td></tr>
                        <tr><td class="p-2 border">Churning</td><td class="p-2 border">Phase inversion (O/W → W/O); MFGM disruption; partial coalescence theory; foam formation and collapse</td></tr>
                        <tr><td class="p-2 border">Working</td><td class="p-2 border">Rheology (yield stress, viscoelasticity); Capillary number for droplet breakup; moisture dispersion</td></tr>
                        <tr><td class="p-2 border">Salting</td><td class="p-2 border">Water activity (aₓ) reduction; Raoult's Law (colligative property of dissolved solute)</td></tr>
                        <tr><td class="p-2 border">Packaging</td><td class="p-2 border">Photo-oxidation (singlet oxygen ¹O₂); oxygen permeability of packaging materials</td></tr>
                        <tr><td class="p-2 border">Cold Storage</td><td class="p-2 border">Arrhenius kinetics of oxidation and microbial growth; Q₁₀ concept (rate doubles per 10°C rise)</td></tr>
                    </tbody>
                </table>
            </div>
        `
    },
    hi: {
        title: "Butter Processing (Makkhan Prashanskaaran)",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Butter ka Parichay (Introduction)</h3>
            <p>Butter ek fat-rich dairy product hai jo fresh ya fermented cream ya milk ko churn karke banaya jaata hai. Yeh mainly ek <strong>water-in-oil (W/O) emulsion</strong> hai, jo cream ke oil-in-water (O/W) emulsion ke inversion ka result hai. Iska characteristic flavor, texture, aur nutritional value ise duniya bhar ke cuisines mein ek staple banaata hai. Butter ki processing ek classic dairy operation hai jismein ek fascinating aur scientifically complex phase inversion process hota hai.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Butter ka Composition (Sanrachna)</h4>
            <p>Commercial butter ka typical composition lagbhag aise hota hai:</p>
            <ul class="list-disc list-inside ml-4 space-y-1">
                <li><strong>Milk fat:</strong> 80–82% (jyadatar international standards ke anusaar minimum 80%)</li>
                <li><strong>Water (Paani):</strong> 15–16% (maximum 16%)</li>
                <li><strong>Milk solids-not-fat (MSNF):</strong> 1–2% (proteins, lactose, minerals)</li>
                <li><strong>Salt (Namak):</strong> 0–2.5% (salted butter mein)</li>
            </ul>
            <p class="mt-2">Colloidal chemistry ke nazariye se, butter ek complex multiphase system hai jismein yeh cheezein hoti hain:</p>
            <ul class="list-disc list-inside ml-4 space-y-1">
                <li>Ek <strong>continuous fat phase</strong> (crystalline fat, liquid oil, aur intact fat globules ka mixture)</li>
                <li><strong>Dispersed aqueous droplets</strong> (typically 1–10 µm diameter ke)</li>
                <li><strong>Air cells</strong> jo working ke dauraan incorporate hote hain</li>
                <li><strong>Fat crystals</strong> jo ek three-dimensional network banaate hain aur butter ko structural rigidity dete hain</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Butter Fat ka Fatty Acid Profile</h4>
            <p>Butter fat (jise anhydrous milk fat ya AMF bhi kehte hain) ka fatty acid composition kisi bhi natural fat mein sabse complex hai, jismein <strong>400 se zyada individual fatty acids</strong> hote hain. Lekin lagbhag 15 fatty acids major portion ke liye responsible hain:</p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Fatty Acid</th>
                            <th class="p-2 border">Carbon Chain</th>
                            <th class="p-2 border">Approx. % (w/w)</th>
                            <th class="p-2 border">Mahatva (Significance)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Butyric acid</td><td class="p-2 border">C4:0</td><td class="p-2 border">3–4%</td><td class="p-2 border">Sirf milk fat mein paaya jaata hai; characteristic flavor deta hai; milk fat ki authenticity ka indicator hai (Reichert-Meissl value)</td></tr>
                        <tr><td class="p-2 border">Caproic acid</td><td class="p-2 border">C6:0</td><td class="p-2 border">1–3%</td><td class="p-2 border">Short-chain FA; Polenske value mein contribute karta hai</td></tr>
                        <tr><td class="p-2 border">Caprylic acid</td><td class="p-2 border">C8:0</td><td class="p-2 border">1–2%</td><td class="p-2 border">Medium-chain FA; tezi se metabolize hota hai</td></tr>
                        <tr><td class="p-2 border">Capric acid</td><td class="p-2 border">C10:0</td><td class="p-2 border">2–3%</td><td class="p-2 border">Medium-chain triglyceride (MCT) ka component</td></tr>
                        <tr><td class="p-2 border">Lauric acid</td><td class="p-2 border">C12:0</td><td class="p-2 border">2–4%</td><td class="p-2 border">Antimicrobial properties rakhta hai</td></tr>
                        <tr><td class="p-2 border">Myristic acid</td><td class="p-2 border">C14:0</td><td class="p-2 border">8–14%</td><td class="p-2 border">Major saturated FA</td></tr>
                        <tr><td class="p-2 border">Palmitic acid</td><td class="p-2 border">C16:0</td><td class="p-2 border">25–32%</td><td class="p-2 border">Milk fat mein sabse zyada abundant fatty acid</td></tr>
                        <tr><td class="p-2 border">Stearic acid</td><td class="p-2 border">C18:0</td><td class="p-2 border">10–15%</td><td class="p-2 border">Long-chain saturated FA; blood cholesterol par neutral effect</td></tr>
                        <tr><td class="p-2 border">Oleic acid</td><td class="p-2 border">C18:1</td><td class="p-2 border">20–30%</td><td class="p-2 border">Principal unsaturated FA; melting properties par major influence; pasture-fed gaayo mein zyada</td></tr>
                        <tr><td class="p-2 border">Linoleic acid</td><td class="p-2 border">C18:2</td><td class="p-2 border">1–3%</td><td class="p-2 border">Essential fatty acid (omega-6)</td></tr>
                        <tr><td class="p-2 border">Conjugated Linoleic Acid (CLA)</td><td class="p-2 border">C18:2 (conjugated)</td><td class="p-2 border">0.3–1.0%</td><td class="p-2 border">Anticarcinogenic, anti-atherogenic properties; pasture-fed butter mein zyada</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2">Overall, milk fat mein lagbhag <strong>65–70% saturated fatty acids (SFA), 25–30% monounsaturated fatty acids (MUFA), aur 3–5% polyunsaturated fatty acids (PUFA)</strong> hote hain. Short-chain se long-chain fatty acids ka ratio butter ke melting behavior, crystal polymorphism, aur spreadability ko significantly influence karta hai.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Nutritional Mahatva (Significance)</h4>
            <p>Fatty acid profile ke alawa, butter fat-soluble vitamins ka bhi ek important source hai:</p>
            <ul class="list-disc list-inside ml-4 space-y-1">
                <li><strong>Vitamin A (Retinol):</strong> 684 µg per 100 g (yellow color β-carotene se aata hai, jo ek precursor hai; content feed ke saath vary karta hai — pasture-fed butter zyada yellow hota hai)</li>
                <li><strong>Vitamin D₃:</strong> ~1.5 µg per 100 g</li>
                <li><strong>Vitamin E (α-tocopherol):</strong> ~2.3 mg per 100 g (fat phase mein natural antioxidant ka kaam karta hai)</li>
                <li><strong>Vitamin K₂ (Menaquinone):</strong> Significant amounts mein present, khaas taur par grass-fed butter mein; calcium metabolism aur bone health mein involved hai</li>
                <li><strong>Cholesterol:</strong> ~215 mg per 100 g</li>
            </ul>
            <p class="mt-2">Butter mein milk fat globule membrane (MFGM) se <strong>sphingolipids</strong> aur <strong>phospholipids</strong> bhi hote hain, jo gut health aur cholesterol metabolism par beneficial effects ke saath associated hain.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Butter</h3>
            <p>India mein, Food Safety and Standards Authority of India (FSSAI) <strong>Food Safety and Standards (Food Products Standards and Food Additives) Regulations</strong> ke tahat mainly butter ki do categories define karta hai:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Table Butter</th>
                            <th class="p-2 border">White Butter / Cooking Butter</th>
                            <th class="p-2 border">Key Difference (Mukhya Antar)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat (min, % m/m)</strong></td>
                            <td class="p-2 border">80.0</td>
                            <td class="p-2 border">76.0</td>
                            <td class="p-2 border">Table butter mein minimum fat content zyada hai, jisse yeh richer hota hai aur direct consumption ke liye zyada suitable hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Moisture (max, % m/m)</strong></td>
                            <td class="p-2 border">16.0</td>
                            <td class="p-2 border">- (Specified nahi)</td>
                            <td class="p-2 border">Table butter mein moisture strictly control kiya jaata hai better shelf life, microbial stability, aur consistency ke liye.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Common Salt (max, % m/m)</strong></td>
                            <td class="p-2 border">3.0</td>
                            <td class="p-2 border">- (Specified nahi)</td>
                            <td class="p-2 border">Table butter typically salted hota hai flavor enhancement aur preservation ke liye (salt water activity, aₓ ko reduce karta hai).</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Solids-Not-Fat (max, % m/m)</strong></td>
                            <td class="p-2 border">2.0</td>
                            <td class="p-2 border">- (Specified nahi)</td>
                            <td class="p-2 border">Yeh protein (casein, whey proteins) aur lactose content ko refer karta hai, jo table butter mein limited rakha jaata hai taaki storage ke dauraan Maillard browning aur off-flavors na ho.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">International Standards ki Tulna (Comparison)</h4>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Standard</th>
                            <th class="p-2 border">Min. Fat (%)</th>
                            <th class="p-2 border">Max. Moisture (%)</th>
                            <th class="p-2 border">Max. MSNF (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Codex Alimentarius (CODEX STAN 279-1971)</td><td class="p-2 border">80</td><td class="p-2 border">16</td><td class="p-2 border">2</td></tr>
                        <tr><td class="p-2 border">EU Regulation (EC No. 1308/2013)</td><td class="p-2 border">80 (82 "butter" ke liye)</td><td class="p-2 border">16</td><td class="p-2 border">2</td></tr>
                        <tr><td class="p-2 border">USDA (21 CFR 101.67)</td><td class="p-2 border">80</td><td class="p-2 border">16</td><td class="p-2 border">-</td></tr>
                        <tr><td class="p-2 border">FSSAI (Table Butter)</td><td class="p-2 border">80</td><td class="p-2 border">16</td><td class="p-2 border">2</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Butter Quality ke Liye Key Analytical Tests</h4>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Test</th>
                            <th class="p-2 border">Siddhant (Principle)</th>
                            <th class="p-2 border">Butter Fat ke Liye Typical Value</th>
                            <th class="p-2 border">Mahatva (Significance)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Reichert-Meissl (RM) Value</td><td class="p-2 border">Volatile, water-soluble fatty acids (C4:0, C6:0) measure karta hai</td><td class="p-2 border">26–32</td><td class="p-2 border">Authenticity test; milk fat ke liye uniquely high hai kyunki butyric acid content zyada hota hai</td></tr>
                        <tr><td class="p-2 border">Polenske Value</td><td class="p-2 border">Volatile, water-insoluble fatty acids (C8:0–C12:0) measure karta hai</td><td class="p-2 border">1.0–2.0</td><td class="p-2 border">Coconut ya palm kernel oil se adulteration detect karta hai (jinki Polenske values high hoti hain)</td></tr>
                        <tr><td class="p-2 border">Iodine Value (Wijs method)</td><td class="p-2 border">Unsaturation ki degree (C=C double bonds) measure karta hai</td><td class="p-2 border">26–38 g I₂/100g</td><td class="p-2 border">Unsaturation level indicate karta hai; feed ke saath vary karta hai (pasture-fed mein higher)</td></tr>
                        <tr><td class="p-2 border">Saponification Value</td><td class="p-2 border">1 g fat ko saponify karne ke liye kitne mg KOH chahiye</td><td class="p-2 border">220–235</td><td class="p-2 border">Jyadatar fats se higher hai kyunki short-chain FAs hain (lower MW = per gram zyada molecules)</td></tr>
                        <tr><td class="p-2 border">Butyro-Refractometer Reading (BR) at 40°C</td><td class="p-2 border">Refractive index measurement</td><td class="p-2 border">40–44</td><td class="p-2 border">Milk fat ki purity ka quick screening test</td></tr>
                        <tr><td class="p-2 border">Peroxide Value</td><td class="p-2 border">Primary oxidation products (hydroperoxides) measure karta hai</td><td class="p-2 border">< 1.0 meq O₂/kg (fresh)</td><td class="p-2 border">Oxidative rancidity ka indicator; fresh butter mein < 0.3 meq/kg hona chahiye</td></tr>
                        <tr><td class="p-2 border">Free Fatty Acid (Acid Value)</td><td class="p-2 border">Lipolysis se released fatty acids measure karta hai</td><td class="p-2 border">< 0.3% as oleic acid</td><td class="p-2 border">Hydrolytic (lipolytic) rancidity ka indicator</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Food Safety Controls ke Saath Butter ki Processing</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Butter Production ka Processing Flowchart</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception & Quality Testing <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Pre-heating (40–45°C) & Cream Separation <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Cream Standardization (35–42% Fat) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Cream ka Neutralization (agar acidity > 0.3% LA ho) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Cream ki Pasteurization (95°C/15 sec ya 68°C/30 min)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Vacuum De-aeration / Deodorization (Optional)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling & Physical Aging/Tempering (Fat Crystallization ke liye)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><em>Optional:</em> Inoculation & Biological Ripening (Cultured Butter ke liye)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded"><strong>Churning Temperature tak Adjustment (8–14°C)</strong> <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded"><strong>Churning (Phase Inversion: O/W → W/O)</strong></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Buttermilk Draining & Collection</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Butter Grains ki Washing (1–3 washes cold potable water se)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Salting (agar applicable ho) & Working (Kneading) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Quality Testing (Moisture, Fat, Salt, Microbiology) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging (Light-proof, Oxygen-barrier materials) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">Cold Storage (≤ 5°C retail ke liye; -20 se -25°C long-term ke liye) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Steps ki Detailed Scientific Vyakhya (Explanation)</h3>
            <ol class="list-decimal list-outside pl-5 space-y-6">
                <li><strong>Milk Reception, Quality Testing & Cream Separation (PRP & oPRP):</strong>
                    <p>Process high-quality raw milk se shuru hota hai. Reception par platform tests kiye jaate hain jismein <strong>Methylene Blue Reduction Test (MBRT)</strong> shamil hai — achhi quality ki cream ka MBRT > 4 ghante hona chahiye — saath hi acidity testing (sweet cream butter ke liye < 0.2% lactic acid honi chahiye) aur organoleptic evaluation bhi ki jaati hai.</p>
                    <p>Milk ko <strong>40–45°C</strong> tak pre-heat kiya jaata hai taaki fat liquid ho jaye (milk fat ka melting range: 28–38°C; 40°C par virtually saara fat liquid ho jaata hai). Is temperature par milk ki viscosity significantly kam ho jaati hai, jisse separation efficiency optimize hoti hai.</p>
                    
                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Cream Separation ka Physics — Stoke's Law:</h4>
                    <p>Centrifugal separator mein cream separation <strong>Stoke's Law</strong> ke modified form se govern hota hai:</p>
                    <div class="bg-gray-100 p-3 rounded mt-2 font-mono text-center">
                        v = [d² × (ρₛ − ρ_f) × ω² × r] / (18 × η)
                    </div>
                    <p class="mt-2">Jahaan:</p>
                    <ul class="list-disc list-inside ml-4 space-y-1 text-sm">
                        <li><strong>v</strong> = fat globule ke separation ki velocity (m/s)</li>
                        <li><strong>d</strong> = fat globule ka diameter (average ~3.5 µm; range 0.1–15 µm)</li>
                        <li><strong>ρₛ</strong> = skim milk plasma ki density (~1,036 kg/m³ at 40°C)</li>
                        <li><strong>ρ_f</strong> = fat ki density (~930 kg/m³ at 40°C)</li>
                        <li><strong>ω</strong> = centrifuge ki angular velocity (rad/s); typically 5,000–7,000 rpm</li>
                        <li><strong>r</strong> = rotation ka radius (m)</li>
                        <li><strong>η</strong> = continuous phase ki dynamic viscosity (~1.0 × 10⁻³ Pa·s at 40°C)</li>
                    </ul>
                    <p class="mt-2">Modern separator mein centrifugal force <strong>5,000–10,000 × g</strong> (jahaan g = 9.81 m/s²) tak ho sakta hai, jisse separation bahut efficient ho jaata hai. Kyunki velocity <strong>d²</strong> ke proportional hai, bade fat globules bahut tezi se separate hote hain. Yahi karan hai ki buffalo milk ki cream zyada efficiently separate hoti hai — buffalo ke fat globules bade hote hain (average ~5 µm vs. cow ke ~3.5 µm).</p>
                    <p class="mt-2">Phir cream ko <strong>35–42% fat</strong> par standardize kiya jaata hai. Yeh fat content optimal hai kyunki:</p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li>30% fat se kam: churning inefficient hoti hai, buttermilk mein excessive fat loss</li>
                        <li>45% fat se zyada: cream bahut viscous ho jaati hai, poor agitation, incomplete phase inversion</li>
                        <li>Optimal range churning ke dauraan sufficient globule collision frequency allow karta hai</li>
                    </ul>
                </li>

                <li><strong>Cream ka Neutralization (oPRP):</strong>
                    <p>Agar cream mein acidity > 0.3% lactic acid develop ho gayi hai (bacterial growth ya delayed processing ki wajah se), toh pasteurization se pehle ise <strong>neutralize</strong> kiya ja sakta hai. Common neutralizers mein shamil hain:</p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Sodium bicarbonate (NaHCO₃)</strong> — sabse common (meetha soda)</li>
                        <li><strong>Calcium hydroxide (Ca(OH)₂)</strong> — choona paani</li>
                        <li><strong>Sodium carbonate (Na₂CO₃)</strong> — dhulai ka soda</li>
                    </ul>
                    <p class="mt-2">Lactic acid ke saath chemical reaction:</p>
                    <div class="bg-gray-100 p-2 rounded mt-1 font-mono text-sm text-center">
                        2 CH₃CHOHCOOH + Ca(OH)₂ → (CH₃CHOHCOO)₂Ca + 2H₂O
                    </div>
                    <p class="mt-2"><strong>Scientific karan:</strong> High-acid cream (> 0.3% LA) pasteurization ke dauraan problems create karti hai — proteins kam temperature par denature aur coagulate ho jaate hain jab pH low hota hai (protein stability casein ke isoelectric point, pH 4.6, ke paas aane par kam ho jaati hai). Isse heat exchangers par "feathering" ya burnt deposits, off-flavors, aur reduced heat transfer efficiency hoti hai.</p>
                    <p><strong>Dhyan dein:</strong> Over-neutralization (pH > 7.0) se bachna chahiye kyunki isse soapy, alkaline flavor aata hai aur adulteration mask ho sakti hai. FSSAI neutralization ki permission deta hai lekin finished butter ka pH natural levels se upar nahi hona chahiye.</p>
                </li>

                <li><strong>Cream ki Pasteurization (CCP-1 — Critical Control Point):</strong>
                    <p>Cream pasteurization sabse critical safety step hai. Cream ko <strong>95°C par 15 seconds</strong> ke liye heat kiya jaata hai (ya equivalent combinations jaise 68°C par 30 minutes batch pasteurization ke liye). Yeh milk pasteurization (72°C/15 s) se significantly higher hai, aur iske kai important scientific karan hain:</p>
                    
                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Cream ke Liye Higher Temperature Kyun?</h4>
                    <ul class="list-disc list-inside ml-4 space-y-2">
                        <li><strong>Fat ka protective effect:</strong> Fat globules physically bacteria ko heat se shield karte hain. Microorganisms fat globules ke andar embedded ho sakte hain ya MFGM dwara protected ho sakte hain, jiske liye equivalent kill ke liye higher temperatures chahiye. Studies dikhati hain ki pathogens ka <strong>D-value</strong> (decimal reduction time) high-fat substrates mein skim milk ki tulna mein 1.5–3× badh jaata hai.</li>
                        <li><strong>Fat ki lower thermal conductivity:</strong> Fat ki thermal conductivity ~0.17 W/(m·K) hai vs. water ki ~0.57 W/(m·K), matlab heat fat mein slowly penetrate karta hai.</li>
                        <li><strong>Lower water activity:</strong> Cream mein reduced water content microorganisms ki slightly higher thermal resistance mein contribute karta hai.</li>
                        <li><strong>Lipases ki complete inactivation:</strong> Dono native milk lipase (lipoprotein lipase, LPL) aur bacterial lipases (khaas taur par psychrotrophs jaise <em>Pseudomonas</em> spp. ke heat-stable lipases) ko inactivate karna zaroori hai. LPL 78°C/10 s par fully inactivate ho jaata hai, lekin kuch bacterial lipases <em>Pseudomonas fluorescens</em> se UHT treatment bhi survive kar sakti hain (complete inactivation ke liye > 100°C chahiye).</li>
                    </ul>

                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Cream mein Target Organisms ki Thermal Inactivation Kinetics:</h4>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Target Organism</th>
                                    <th class="p-2 border">Cream mein D-value</th>
                                    <th class="p-2 border">z-value</th>
                                    <th class="p-2 border">95°C/15s par Log Reduction</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border"><em>Mycobacterium tuberculosis</em></td><td class="p-2 border">D₆₅ ≈ 0.3 min</td><td class="p-2 border">~4.5°C</td><td class="p-2 border">> 15 log (complete kill)</td></tr>
                                <tr><td class="p-2 border"><em>Coxiella burnetii</em> (Q fever)</td><td class="p-2 border">D₇₂ ≈ 0.02 min (cream mein)</td><td class="p-2 border">~5.5°C</td><td class="p-2 border">> 15 log (complete kill)</td></tr>
                                <tr><td class="p-2 border"><em>Listeria monocytogenes</em></td><td class="p-2 border">D₇₂ ≈ 0.05 min (cream mein)</td><td class="p-2 border">~6.0°C</td><td class="p-2 border">> 15 log</td></tr>
                                <tr><td class="p-2 border"><em>Salmonella</em> spp.</td><td class="p-2 border">D₆₅ ≈ 0.04 min</td><td class="p-2 border">~5.5°C</td><td class="p-2 border">> 15 log</td></tr>
                                <tr><td class="p-2 border"><em>Staphylococcus aureus</em></td><td class="p-2 border">D₆₅ ≈ 0.2 min</td><td class="p-2 border">~5.5°C</td><td class="p-2 border">> 15 log</td></tr>
                                <tr><td class="p-2 border">Alkaline Phosphatase (ALP)</td><td class="p-2 border">D₆₂.₈ ≈ 0.58 min</td><td class="p-2 border">~5.6°C</td><td class="p-2 border">Completely inactivated (pasteurization marker ke roop mein use hota hai)</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2"><strong>Pasteurization verification:</strong> <strong>Alkaline Phosphatase (ALP) test</strong> (negative = sahi se pasteurized) standard method hai. Lekin 95°C par pasteurized cream ke liye, <strong>peroxidase test</strong> bhi negative ho sakta hai (peroxidase > 80°C par inactivate ho jaata hai), isliye ALP definitive indicator rehta hai.</p>
                    <p class="mt-2"><strong>High-temperature pasteurization ka additional fayda:</strong> 95°C par significant <strong>whey protein denaturation</strong> hoti hai (khaas taur par β-lactoglobulin, jo 78°C se upar denature hota hai). Ye denatured whey proteins sulfhydryl (-SH) groups expose karte hain jo <strong>natural antioxidants</strong> ka kaam karte hain, "cooked" ya "heated" flavor dete hain aur storage ke dauraan butter ki <strong>oxidative stability</strong> ko significantly improve karte hain.</p>
                    <p><strong>Sulfhydryl compounds</strong> ka formation is reaction se hota hai:</p>
                    <div class="bg-gray-100 p-2 rounded mt-1 font-mono text-sm text-center">
                        β-Lg (native, SH chhupa hua) → β-Lg (denatured, SH exposed) → R-SH (free sulfhydryl groups)
                    </div>
                    <p class="mt-1 text-sm">Ye -SH groups free radicals ko scavenge karte hain aur pro-oxidant metals (Cu²⁺, Fe³⁺) ko chelate karte hain, sacrificial antioxidants ka kaam karte hain.</p>
                </li>

                <li><strong>Vacuum De-aeration / Deodorization (Optional):</strong>
                    <p>Pasteurization ke baad, hot cream ko <strong>vacuum treatment</strong> (vacreation) diya ja sakta hai reduced pressure par. Yeh process:</p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li>Volatile off-flavors remove karta hai (feed flavors, onion/garlic taints, oxidized flavors)</li>
                        <li>Dissolved oxygen remove karta hai, jo ek pro-oxidant hai (O₂ lipid oxidation initiate karta hai)</li>
                        <li>Dissolved gases (CO₂) reduce karta hai jo churning ke dauraan foaming cause kar sakte hain</li>
                    </ul>
                    <p class="mt-1"><strong>Siddhant (Principle)</strong> Henry's Law par based hai — kisi liquid mein gases ki solubility liquid ke upar gas ke partial pressure ke proportional hoti hai. Pressure reduce karke (~0.5 bar absolute tak), low boiling points wale volatile compounds steam ke saath flash off ho jaate hain.</p>
                </li>

                <li><strong>Cooling, Aging, aur Fat Crystallization — Tempering ka Vigyan (Science):</strong>
                    <p>Yeh butter manufacture ke scientifically sabse complex aur critical stages mein se ek hai. Pasteurization ke baad, cream ko rapidly cool kiya jaata hai aur hold (age) kiya jaata hai taaki fat globules ke andar controlled <strong>fat crystallization</strong> ho sake.</p>
                    
                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Fat Crystal Polymorphism:</h4>
                    <p>Milk fat teen main polymorphic forms mein crystallize ho sakta hai, har ek ki distinct crystal packing arrangements hoti hain:</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Polymorph</th>
                                    <th class="p-2 border">Crystal Packing</th>
                                    <th class="p-2 border">Sthirata (Stability)</th>
                                    <th class="p-2 border">Melting Point</th>
                                    <th class="p-2 border">Butter mein Relevance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border"><strong>α (alpha)</strong></td><td class="p-2 border">Hexagonal</td><td class="p-2 border">Sabse kam stable</td><td class="p-2 border">Sabse kam</td><td class="p-2 border">Rapid cooling ke dauraan sabse pehle banta hai; chote, zyada crystals; soft texture</td></tr>
                                <tr><td class="p-2 border"><strong>β' (beta-prime)</strong></td><td class="p-2 border">Orthorhombic perpendicular</td><td class="p-2 border">Madhyam (Intermediate)</td><td class="p-2 border">Madhyam</td><td class="p-2 border"><strong>BUTTER KE LIYE CHAHIYE WALA form</strong>; fine, needle-like crystals; smooth texture; achhi spreadability</td></tr>
                                <tr><td class="p-2 border"><strong>β (beta)</strong></td><td class="p-2 border">Triclinic parallel</td><td class="p-2 border">Sabse zyada stable</td><td class="p-2 border">Sabse zyada</td><td class="p-2 border">Bade, coarse crystals; grainy, sandy texture; butter mein undesirable</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2">Transition aise hota hai: <strong>α → β' → β</strong> (monotropic transition — normal conditions mein irreversible). Aging/tempering ka goal <strong>β' crystal formation</strong> ko promote karna hai jabki β mein transition ko rokna hai.</p>

                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Solid Fat Content (SFC) aur Iska Mahatva:</h4>
                    <p>Churning temperature par solid aur liquid fat ka ratio bahut important hai. Ise <strong>Solid Fat Content (SFC)</strong> ya <strong>Solid Fat Index (SFI)</strong> ke roop mein measure kiya jaata hai pulsed Nuclear Magnetic Resonance (pNMR) ya Differential Scanning Calorimetry (DSC) se.</p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li>Churning temperature (10°C) par: SFC ideally <strong>30–50%</strong> hona chahiye</li>
                        <li>Agar SFC > 50%: fat globules bahut rigid hain → poor destabilization, mushkil churning, hard butter</li>
                        <li>Agar SFC < 25%: globules bahut soft hain → buttermilk mein excessive fat loss, soft/greasy butter</li>
                    </ul>

                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Common Aging/Tempering Programs:</h4>
                    <p>Cream fat ke <strong>iodine value (IV)</strong> ke base par alag-alag time-temperature programs develop kiye gaye hain, jo unsaturation ki degree aur isliye fat ki hardness ko reflect karta hai:</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Program</th>
                                    <th class="p-2 border">Iodine Value</th>
                                    <th class="p-2 border">Fat ka Character</th>
                                    <th class="p-2 border">Tempering Regime</th>
                                    <th class="p-2 border">Churning Temp</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border"><strong>Swedish (Summer)</strong></td><td class="p-2 border">> 39 (soft fat)</td><td class="p-2 border">High unsaturation</td><td class="p-2 border">8°C tak cool karo, 2h hold → 20°C tak garam karo, 2h hold → 11°C tak cool karo</td><td class="p-2 border">8–11°C</td></tr>
                                <tr><td class="p-2 border"><strong>Swedish (Winter)</strong></td><td class="p-2 border">< 32 (hard fat)</td><td class="p-2 border">High saturation</td><td class="p-2 border">8°C tak cool karo, 2h hold → 21°C tak garam karo, 2h hold → 16°C tak cool karo</td><td class="p-2 border">12–16°C</td></tr>
                                <tr><td class="p-2 border"><strong>Alnarp (soft fat ke liye)</strong></td><td class="p-2 border">> 40</td><td class="p-2 border">Bahut soft</td><td class="p-2 border">7°C tak cool karo, 5h hold → 13°C tak garam karo, 2h hold → 10°C tak cool karo</td><td class="p-2 border">8–10°C</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2"><strong>Warm-cold cycling ka scientific basis:</strong> Pehla cooling step rapid crystallization karta hai, predominantly α form mein. Uske baad warming step sabse unstable α crystals ko melt karta hai jabki zyada stable β' crystals ko grow hone deta hai (ek process jo <strong>Ostwald ripening</strong> kehlata hai). Final cooling step desired crystal network ko solidify karta hai. Isse efficient churning aur achhi butter consistency ke liye optimal solid:liquid fat ratio banta hai.</p>
                    <p class="mt-2"><strong>Mausami variation (India):</strong> India mein, buffalo milk fat (IV: 28–34) cow milk fat (IV: 32–38) se harder hoti hai, aur cow breeds ke andar bhi, fat composition feed ke saath vary karta hai. Summer mein (hari chaara/fodder, high oleic acid), fat softer hoti hai; winter mein (sookha chaara), fat harder hoti hai. Tempering program ko accordingly adjust karna padta hai.</p>
                </li>

                <li><strong>Biological Ripening — Cultured/Ripened Butter ke liye (Optional):</strong>
                    <p>Cultured butter churning se pehle cream ko specific <strong>lactic acid bacteria (LAB)</strong> starter cultures se ferment karke banaya jaata hai. Yeh step characteristic tangy, aromatic flavor profile deta hai.</p>
                    
                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Use Hone Wale Starter Cultures:</h4>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Organism</th>
                                    <th class="p-2 border">Bhumika (Role)</th>
                                    <th class="p-2 border">Key Metabolite</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border"><em>Lactococcus lactis</em> subsp. <em>lactis</em></td><td class="p-2 border">Acid producer (primary)</td><td class="p-2 border">Lactic acid (lactose se)</td></tr>
                                <tr><td class="p-2 border"><em>Lactococcus lactis</em> subsp. <em>cremoris</em></td><td class="p-2 border">Acid producer (milder)</td><td class="p-2 border">Lactic acid (lactose se)</td></tr>
                                <tr><td class="p-2 border"><em>Lactococcus lactis</em> subsp. <em>lactis</em> biovar <em>diacetylactis</em></td><td class="p-2 border">Aroma producer</td><td class="p-2 border">Diacetyl, acetoin, CO₂ (citrate se)</td></tr>
                                <tr><td class="p-2 border"><em>Leuconostoc mesenteroides</em> subsp. <em>cremoris</em></td><td class="p-2 border">Aroma producer</td><td class="p-2 border">Diacetyl, acetoin, CO₂, ethanol (citrate & sugars se)</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Flavor Development ki Biochemistry — Citrate Pathway:</h4>
                    <p>Cultured butter mein key aroma compound <strong>diacetyl (2,3-butanedione, CH₃COCOCH₃)</strong> hai. Yeh <strong>citrate fermentation pathway</strong> ke through produce hota hai:</p>
                    <div class="bg-yellow-50 p-3 rounded mt-2 border border-yellow-200">
                        <p class="font-mono text-sm text-center">
                            <strong>Citrate</strong> (milk mein: ~1.8 g/L)
                            <br>↓ <em>citrate permease (CitP)</em>
                            <br><strong>Oxaloacetate</strong> + <strong>Acetate</strong>
                            <br>↓ <em>oxaloacetate decarboxylase</em>
                            <br><strong>Pyruvate</strong> + <strong>CO₂</strong>
                            <br>↓ <em>α-acetolactate synthase (ALS)</em>
                            <br><strong>α-Acetolactate</strong>
                            <br>↙ ↘
                            <br><em>(oxidative decarboxylation)</em> &nbsp; <em>(α-acetolactate decarboxylase)</em>
                            <br><strong>DIACETYL</strong> + CO₂ &nbsp;&nbsp;&nbsp; <strong>Acetoin</strong> + CO₂
                            <br>↓ <em>(diacetyl reductase)</em>
                            <br><strong>Acetoin</strong>
                            <br>↓ <em>(acetoin reductase / 2,3-butanediol dehydrogenase)</em>
                            <br><strong>2,3-Butanediol</strong> (flavorless / bina swaad ka)
                        </p>
                    </div>

                    <p class="mt-3"><strong>Diacetyl production ke baare mein key points:</strong></p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Diacetyl ka threshold:</strong> Bahut kam flavor threshold (~0.005 ppm hawa mein; ~2–5 ppm butter mein detectable buttery flavor ke liye). Cultured butter mein target: 1.5–4 ppm.</li>
                        <li><strong>Diacetyl unstable hai:</strong> Yeh bacterial reductases dwara rapidly acetoin (bahut kam flavor-active) mein reduce ho jaata hai aur phir 2,3-butanediol (flavorless) mein. Isliye, <strong>diacetyl accumulation ko favor karne wali conditions</strong> bahut important hain:
                            <ul class="list-disc list-inside ml-6 space-y-1">
                                <li><strong>Low pH (< 5.5):</strong> Diacetyl reductase activity ko inhibit karta hai</li>
                                <li><strong>Oxidative conditions:</strong> O₂ α-acetolactate ki non-enzymatic oxidative decarboxylation ko directly diacetyl mein promote karta hai</li>
                                <li><strong>Kam temperature:</strong> Diacetyl ki enzymatic reduction ko slow karta hai</li>
                            </ul>
                        </li>
                        <li><strong>CO₂ production</strong> citrate metabolism se chhote gas pockets create karta hai jo subsequent churning mein fat globules ki mechanical disruption mein madad karte hain.</li>
                    </ul>

                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Ripening ki Conditions:</h4>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Inoculation rate:</strong> 1–5% starter culture (v/v)</li>
                        <li><strong>Temperature:</strong> 20–22°C (mesophilic cultures)</li>
                        <li><strong>Duration:</strong> 12–16 ghante (ya jab tak acidity 0.3–0.5% lactic acid tak na pahunch jaye; pH ~4.6–5.0)</li>
                        <li><strong>Final titratable acidity target:</strong> Mild-flavored butter ke liye 0.30–0.35% lactic acid</li>
                    </ul>
                </li>

                <li><strong>Churning Temperature tak Cooling (oPRP):</strong>
                    <p>Aging/ripening ke baad, cream ko optimal churning temperature tak adjust kiya jaata hai, jo typically <strong>8–14°C</strong> hota hai (fat composition aur season ke saath vary karta hai). Yeh ek <strong>oPRP</strong> hai.</p>
                    <p>Churning temperature process par gahra prabhav dalta hai:</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Condition</th>
                                    <th class="p-2 border">Churning Temp Bahut Kam (< 7°C)</th>
                                    <th class="p-2 border">Optimal (8–14°C)</th>
                                    <th class="p-2 border">Churning Temp Bahut Zyada (> 16°C)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">SFC</td><td class="p-2 border">> 55%</td><td class="p-2 border">30–50%</td><td class="p-2 border">< 25%</td></tr>
                                <tr><td class="p-2 border">Churning time</td><td class="p-2 border">Bahut lamba (> 60 min)</td><td class="p-2 border">30–45 min (batch)</td><td class="p-2 border">Bahut chhota (< 15 min)</td></tr>
                                <tr><td class="p-2 border">Butter ka character</td><td class="p-2 border">Hard, crumbly, brittle (tootne wala)</td><td class="p-2 border">Smooth, waxy, spreadable</td><td class="p-2 border">Soft, greasy, sticky (chipchipa)</td></tr>
                                <tr><td class="p-2 border">Buttermilk mein fat loss</td><td class="p-2 border">Kam (0.2–0.3%)</td><td class="p-2 border">Normal (0.3–0.5%)</td><td class="p-2 border">Zyada (> 0.7%)</td></tr>
                                <tr><td class="p-2 border">Moisture control</td><td class="p-2 border">Mushkil (high moisture)</td><td class="p-2 border">Achha control</td><td class="p-2 border">Low moisture lekin poor dispersion</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2"><strong>Aam niyam (Rule of thumb):</strong> Soft fat (summer/cow milk/high IV) ke liye kam churning temperature aur hard fat (winter/buffalo milk/low IV) ke liye zyada churning temperature use karo.</p>
                </li>

                <li><strong>Churning — Phase Inversion (Core Process / Mul Prakriya):</strong>
                    <p>Churning butter manufacturing ka dil hai. Yeh woh process hai jismein <strong>cream ka oil-in-water (O/W) emulsion convert (invert) hota hai butter ke water-in-oil (W/O) emulsion mein</strong>.</p>
                    
                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Milk Fat Globule Membrane (MFGM):</h4>
                    <p>MFGM ko samajhna churning ko samajhne ke liye zaroori hai. Milk mein har fat globule ek complex trilayer biological membrane se ghira hota hai jise <strong>MFGM</strong> kehte hain, jo 10–20 nm mota hota hai aur isme yeh hote hain:</p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Inner layer (Andaruni tah):</strong> Polar lipids (phospholipids), mammary cell ke endoplasmic reticulum se adsorbed proteins</li>
                        <li><strong>Middle layer (Beech ki tah):</strong> Coat proteins aur high-melting triglycerides</li>
                        <li><strong>Outer layer (Bahari tah):</strong> Ek bilayer membrane jo mammary epithelial cell ki apical plasma membrane se secretion ke dauraan derived hota hai. Isme hote hain:
                            <ul class="list-disc list-inside ml-6">
                                <li><strong>Phospholipids:</strong> Phosphatidylcholine (PC), phosphatidylethanolamine (PE), sphingomyelin (SM)</li>
                                <li><strong>Glycoproteins:</strong> Mucin 1 (MUC1), butyrophilin (BTN), PAS 6/7 (lactadherin), xanthine oxidoreductase (XOR/XDH)</li>
                                <li><strong>Cholesterol:</strong> Total membrane lipids ka ~40%</li>
                                <li><strong>Glycolipids aur gangliosides</strong></li>
                            </ul>
                        </li>
                    </ul>
                    <p class="mt-2">MFGM ek natural <strong>emulsifier</strong> ka kaam karta hai, milk ke aqueous phase mein fat globules ko stabilize karta hai aur coalescence ko rokta hai. <strong>Churning basically is membrane ko disrupt aur destroy karne ka process hai.</strong></p>

                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Churning ka Mechanism — Chaar Stages:</h4>
                    <div class="bg-blue-50 p-4 rounded mt-2 border border-blue-200 space-y-3">
                        <p><strong>Stage 1: Air ka Incorporation & Foam Formation (Jhag Banana)</strong><br>
                        Jab cream ko agitate kiya jaata hai, hawa andar jaati hai aur foam banta hai. Fat globules apne surface-active MFGM ki wajah se air-water interface (air bubble ki surface) par migrate karte hain. Globules in interfaces par concentrate ho jaate hain. Mechanical shear aur surface tension forces fat globules ko distort karna shuru karte hain.</p>

                        <p><strong>Stage 2: Destabilization & Partial Coalescence (Anshik Sanyojan)</strong><br>
                        Intense mechanical agitation, fat globules ke baar-baar collision ke saath milkar, MFGM ko progressively damage aur strip karta hai. Fat globules ke andar solid fat crystals padosi globules ko <strong>puncture</strong> karte hain (ek process jo <strong>"partial coalescence"</strong> ya <strong>"fat crystal-mediated clumping"</strong> kehlata hai). Yahi karan hai ki solid fat crystals ki maujoodgi (proper aging se) bilkul zaroori hai — unke bina, globules sirf deform hoke wapas aa jayenge bina merge hue. Protruding crystal padosi globule ke MFGM ko chhed deta hai, do globules ke beech ek liquid fat ka bridge create karta hai. Ye bridges solidify ho jaate hain, fat globules ke <strong>clumps</strong> banate hain.</p>

                        <p><strong>Stage 3: Foam Collapse & Grain Formation (Dane Banana)</strong><br>
                        Jaise-jaise clumps bade hote hain, foam structure unstable ho jaata hai aur collapse ho jaata hai. Clumps visible <strong>butter grains</strong> (shuru mein ~1–3 mm diameter ke) mein aggregate hone lagte hain. Is point par, aqueous phase (buttermilk) fat grains se visually alag ho jaata hai. Yeh <strong>"break point"</strong> hai — woh moment jab churn operator dekhta hai ki cream ek moti, opaque liquid se distinct grains mein badal gayi hai jo ek watery liquid mein tair rahe hain.</p>

                        <p><strong>Stage 4: Phase Inversion (Charan Ulta)</strong><br>
                        Jab butter grains ko saath mein work kiya jaata hai, remaining free liquid fat (disrupted globules se) ek "cement" ka kaam karti hai, clumped globules aur crystals ke beech ke spaces ko fill karti hai. Aqueous phase, jo pehle continuous phase tha, ab continuous fat phase ke andar <strong>fine droplets</strong> (1–10 µm) ke roop mein <strong>entrap</strong> ho jaata hai. Yeh hai <strong>phase inversion</strong>: O/W → W/O.</p>
                    </div>

                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Churning ke Baad Butter ki Structure (King Model):</h4>
                    <p>Classical <strong>King model</strong> butter ko chaar structural elements se describe karta hai:</p>
                    <ol class="list-decimal list-inside ml-4 space-y-1">
                        <li><strong>Continuous fat phase:</strong> Disrupted globules se released free liquid fat</li>
                        <li><strong>Fat crystal network:</strong> Crystalline fat jo ek three-dimensional network banata hai aur butter ko firmness deta hai</li>
                        <li><strong>Intact aur partially disrupted fat globules:</strong> Kuch globules churning survive karte hain apne MFGM ke saath partially intact, continuous fat phase mein embedded</li>
                        <li><strong>Dispersed aqueous droplets:</strong> Buttermilk ki chhoti boondein (paani, dissolved salts, lactose, proteins) jo fat phase mein dispersed hain</li>
                    </ol>

                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Churning Equipment ke Prakar (Types):</h4>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Feature</th>
                                    <th class="p-2 border">Batch Churn (Paramparik / Traditional)</th>
                                    <th class="p-2 border">Continuous Butter Maker (Fritz Process)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Capacity</td><td class="p-2 border">100–5,000 L per batch</td><td class="p-2 border">1,000–15,000 kg/hr</td></tr>
                                <tr><td class="p-2 border">Churning time</td><td class="p-2 border">30–60 minutes</td><td class="p-2 border">~2–5 seconds (churning cylinder mein)</td></tr>
                                <tr><td class="p-2 border">Speed</td><td class="p-2 border">15–25 rpm</td><td class="p-2 border">~1,000–3,000 rpm (beater speed)</td></tr>
                                <tr><td class="p-2 border">Siddhant (Principle)</td><td class="p-2 border">Partially filled rotating cylinder mein tumbling action</td><td class="p-2 border">Cylindrical churning section mein high-speed beating, phir alag section mein working</td></tr>
                                <tr><td class="p-2 border">Buttermilk mein fat</td><td class="p-2 border">0.3–0.5%</td><td class="p-2 border">0.4–0.7% (thoda zyada)</td></tr>
                                <tr><td class="p-2 border">Aaj kal ka use</td><td class="p-2 border">Artisanal, chhote scale</td><td class="p-2 border">Duniya bhar mein industrial standard</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2"><strong>Fritz continuous butter maker</strong> (Germany mein 1940s mein develop hua) ke teen main sections hote hain:</p>
                    <ol class="list-decimal list-inside ml-4 space-y-1">
                        <li><strong>Churning cylinder:</strong> Ek high-speed beater (~1,000–3,000 rpm) cream ko seconds mein churn karta hai</li>
                        <li><strong>Separation section:</strong> Butter grains ko buttermilk se perforated plate ya squeeze-drying section ke through alag kiya jaata hai</li>
                        <li><strong>Working section(s):</strong> Ek ya do stages ke auger-type workers butter ko compact, knead, aur standardize karte hain (salt aur moisture injection yahan ho sakta hai)</li>
                    </ol>
                </li>

                <li><strong>Buttermilk Draining & Washing (Dhulai):</strong>
                    <p>Churning ke baad, buttermilk drain kar diya jaata hai. <strong>Churned buttermilk</strong> <strong>cultured buttermilk</strong> se alag hota hai — yeh woh aqueous phase hai jo churning ke dauraan release hota hai aur typically isme hota hai:</p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Fat:</strong> 0.3–0.7% (mostly chhote globules aur MFGM fragments ke roop mein)</li>
                        <li><strong>Protein:</strong> ~3.3% (casein aur whey proteins)</li>
                        <li><strong>Lactose:</strong> ~4.5%</li>
                        <li><strong>MFGM phospholipids:</strong> Whole milk ki tulna mein 5–10× enriched (buttermilk ko bioactive phospholipids ka valuable source banata hai)</li>
                        <li><strong>Total solids:</strong> ~9%</li>
                    </ul>
                    <p class="mt-2">Phir butter grains ko <strong>thande (4–7°C), pasteurized, peene yogya paani</strong> se 1–3 baar <strong>dhoya</strong> jaata hai. Dhone ke paani ki volume typically drain ki gayi buttermilk ki volume ke barabar hoti hai.</p>
                    <p><strong>Dhone ka uddeshya (Purpose of washing):</strong></p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li>Bachi hui buttermilk remove karna (lactose aur casein ka source — microbial growth aur Maillard browning ke substrates)</li>
                        <li>MSNF content ko < 2% tak kam karna</li>
                        <li>Moisture droplets mein microbial load kam karna</li>
                        <li>Keeping quality improve karna (bina dhoye butter 2–3× jaldi kharab hota hai)</li>
                    </ul>
                    <p class="mt-2"><strong>Savdhani:</strong> Zyada dhone se flavor compounds (diacetyl, lactic acid) nikal jaate hain aur butter feeka ho sakta hai. Yield bhi thoda kam hota hai. Cultured butter ke liye, washing minimal ya bilkul nahi ki jaati flavor preserve karne ke liye.</p>
                </li>

                <li><strong>Salting / Namak Milana (oPRP):</strong>
                    <p>Salted butter ke liye 1.0–2.5% (w/w) namak (NaCl) milaya jaata hai. Namak aise milaya ja sakta hai:</p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Dry salt:</strong> Fine-grained, food-grade, directly butter grains mein milaya jaata hai (batch process)</li>
                        <li><strong>Brine:</strong> Saturated salt solution (~26% NaCl) working ke dauraan inject kiya jaata hai (continuous process)</li>
                    </ul>
                    <p class="mt-2"><strong>Butter mein namak ke kaam (Functions of salt):</strong></p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Flavor enhancement (swaad badhana):</strong> Primary purpose; namak butter ke flavor ki perception ko badhata hai</li>
                        <li><strong>Preservation (sanrakshan):</strong> Namak exclusively aqueous phase mein dissolve hota hai. Kyunki paani butter ka sirf ~16% hai, butter mein 2% salt content approximately <strong>aqueous phase mein 12.5% salt</strong> ke barabar hai (2/16 × 100 = 12.5%). Yeh moisture droplets ki <strong>water activity (aₓ)</strong> ko dramatically ~0.99 se ~0.92–0.94 tak reduce karta hai, jisse jyadatar spoilage bacteria inhibit ho jaate hain.</li>
                        <li><strong>Pro-oxidant ka khayal rakhein:</strong> NaCl ek mild pro-oxidant hai — yeh proteins (ferritin) se iron ki release ko promote karke lipid oxidation ko catalyze kar sakta hai. Isliye, excess salt paradoxically oxidative rancidity ke through shelf life reduce kar sakta hai.</li>
                    </ul>
                    <p class="mt-2"><strong>Water activity (aₓ) ka concept:</strong></p>
                    <div class="bg-gray-100 p-2 rounded mt-1 font-mono text-sm text-center">
                        aₓ = P/P₀ ≈ n_water / (n_water + n_solute)
                    </div>
                    <p class="text-sm mt-1">Jahaan P = food mein paani ka vapor pressure, P₀ = pure paani ka vapor pressure, n = moles. Jyadatar bacteria ko aₓ > 0.91 chahiye; jyadatar molds ko aₓ > 0.80 chahiye. Salted butter ki aqueous phase ka aₓ ≈ 0.92–0.94 hai, jo bahut se bacteria ke liye marginal hai, microbial growth ke liye ek hurdle provide karta hai.</p>
                </li>

                <li><strong>Working (Kneading / Masalna) — oPRP:</strong>
                    <p>Working butter ka final mechanical treatment hai. Yeh salting ke baad (ya saath mein) kiya jaata hai. Butter grains ko controlled conditions mein knead kiya jaata hai.</p>
                    
                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Working ke Uddeshya (Objectives):</h4>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Butter grains ko ek cohesive, continuous mass mein badalna:</strong> Free fat aur clumped globules ko milaakar ek homogeneous matrix banaya jaata hai</li>
                        <li><strong>Namak ka uniform distribution:</strong> Namak puri aqueous phase mein dissolve aur evenly disperse hona chahiye</li>
                        <li><strong>Moisture droplet size reduction (nami ki boondo ko chota karna):</strong> Working badi aqueous droplets ko fine ones mein todta hai (target: < 10 µm). Yeh is liye important hai:
                            <ul class="list-disc list-inside ml-6">
                                <li><strong>Microbial safety:</strong> Chhoti droplets nutrient availability aur microbial growth ke liye space ko limit karti hain (har droplet ek isolated "microenvironment" ban jaata hai)</li>
                                <li><strong>Appearance (dikhawat):</strong> Badi droplets (> 50 µm) "free moisture" ya "leakiness" ke roop mein dikhti hain — ek serious defect</li>
                                <li><strong>Shelf life:</strong> Fine dispersion localized microbial colonies ko rokta hai</li>
                            </ul>
                        </li>
                        <li><strong>Moisture standardization:</strong> Working intensity moisture content ko affect karti hai — under-working zyada moisture retain karti hai (> 16%), over-working bahut zyada nikal deta hai (< 14%)</li>
                        <li><strong>Texture development:</strong> Desired smooth, waxy body aur close texture create karta hai</li>
                    </ul>

                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Moisture Dispersion ka Vigyan (Science):</h4>
                    <p>Working ke dauraan, moisture droplets ko <strong>elongational aur shear flow</strong> ka saamna karna padta hai. <strong>Weber number (We)</strong> aur <strong>Capillary number (Ca)</strong> droplet breakup ko govern karte hain:</p>
                    <div class="bg-gray-100 p-2 rounded mt-1 font-mono text-sm text-center">
                        Ca = (η_c × γ̇ × R) / σ
                    </div>
                    <p class="text-sm mt-1">Jahaan η_c = continuous phase (fat) ki viscosity, γ̇ = shear rate, R = droplet radius, σ = interfacial tension. Jab Ca ek critical value (Ca_crit) se zyada hota hai, toh droplet deform hoke toot jaata hai. Fat phase ki high viscosity aur working ke dauraan mechanical shear droplet breakup ke liye conditions provide karte hain.</p>

                    <h4 class="text-md font-semibold text-gray-700 mt-3 mb-1">Working Intensity ka Prabhav (Effect):</h4>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Sthiti (Condition)</th>
                                    <th class="p-2 border">Under-Worked (Kam kaam kiya)</th>
                                    <th class="p-2 border">Optimally Worked (Sahi tarah kaam kiya)</th>
                                    <th class="p-2 border">Over-Worked (Bahut zyada kaam kiya)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Moisture droplets</td><td class="p-2 border">Badi, irregular (> 50 µm)</td><td class="p-2 border">Fine, uniform (< 10 µm)</td><td class="p-2 border">Extremely fine (< 2 µm) — "greasy" ho jaata hai</td></tr>
                                <tr><td class="p-2 border">Dikhawat (Appearance)</td><td class="p-2 border">"Leaky" — visible free moisture; mottled (dhabbedaar)</td><td class="p-2 border">Smooth, waxy, uniform color</td><td class="p-2 border">Greasy, sticky, translucent dikhta hai</td></tr>
                                <tr><td class="p-2 border">Salt distribution</td><td class="p-2 border">Asaman — "mottled" ya streaky</td><td class="p-2 border">Uniform (eksamaan)</td><td class="p-2 border">Uniform lekin texture kharab</td></tr>
                                <tr><td class="p-2 border">Crystal structure</td><td class="p-2 border">Intact — firm (mazboot)</td><td class="p-2 border">Partially disrupted — smooth</td><td class="p-2 border">Extensively disrupted — body ka loss</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2"><strong>"Mottling" ya "waviness"</strong> ek common defect hai jahaan uneven salt distribution uneven moisture content ka karan banta hai, jo baari mein color variation cause karta hai (zyada moisture wale regions lighter/zyada translucent dikhte hain). Yeh ek working defect hai, compositional nahi.</p>
                </li>

                <li><strong>Packaging / Packing (PRP):</strong>
                    <p>Packaging ek <strong>PRP</strong> hai jo butter ko in cheezon se protect karta hai:</p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Light-induced oxidation (roshni se oxidation):</strong> UV aur visible light (khaas taur par wavelengths 350–550 nm) photosensitizers (aqueous phase mein riboflavin) ke through lipid oxidation catalyze karte hain. Isse <strong>"light-activated flavor"</strong> ya <strong>"sunlight flavor"</strong> aata hai — ek metallic, oxidized off-flavor. Opaque packaging (aluminum foil laminate, foil backing wala parchment paper) zaroori hai.</li>
                        <li><strong>Oxygen:</strong> Atmospheric O₂ unsaturated fatty acids ki autoxidation drive karta hai. Vacuum packaging ya nitrogen flushing shelf life badha sakti hai.</li>
                        <li><strong>Moisture loss (nami ka jaana):</strong> Surface drying aur crust formation rokta hai.</li>
                        <li><strong>Bahari gaandh ka absorption:</strong> Butter fat apne lipophilic nature ki wajah se environment se volatiles ko readily absorb karta hai.</li>
                    </ul>
                    <p class="mt-2"><strong>Packaging materials:</strong></p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Vegetable parchment paper:</strong> Paramparik (traditional); moisture barrier deta hai lekin light/oxygen barrier kamzor</li>
                        <li><strong>Aluminum foil laminate:</strong> Excellent light aur oxygen barrier; retail butter ke liye industry standard</li>
                        <li><strong>Polypropylene/polyethylene tubs:</strong> Soft/spreadable butter ke liye use hota hai; oxygen barrier ke liye aluminum seal ho sakta hai</li>
                    </ul>
                </li>

                <li><strong>Cold Storage / Thandi Jagah Rakhna (CCP-2 — Critical Control Point):</strong>
                    <p>Bana hua butter strict temperature control mein rakhna zaroori hai:</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Storage ka Prakar (Type)</th>
                                    <th class="p-2 border">Temperature</th>
                                    <th class="p-2 border">Expected Shelf Life</th>
                                    <th class="p-2 border">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Retail (refrigerated)</td><td class="p-2 border">≤ 5°C</td><td class="p-2 border">6–8 hafta (salted); 3–4 hafta (unsalted)</td><td class="p-2 border">Consumer purchase ke liye standard</td></tr>
                                <tr><td class="p-2 border">Commercial cold store</td><td class="p-2 border">-10 se -15°C</td><td class="p-2 border">4–6 mahine</td><td class="p-2 border">Seasonal storage/surplus management ke liye use hota hai</td></tr>
                                <tr><td class="p-2 border">Deep freeze / long-term</td><td class="p-2 border">-20 se -25°C</td><td class="p-2 border">9–12 mahine (ya zyada)</td><td class="p-2 border">Oxidation aur crystal coarsening se quality gir sakti hai; temperature fluctuations se bachein</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-2"><strong>Yeh CCP-2 hai</strong> kyunki storage ke dauraan temperature abuse se yeh ho sakta hai:</p>
                    <ul class="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Microbial growth (jeevanu vridhi):</strong> Psychrotrophic organisms (jaise <em>Pseudomonas</em>, molds) 5–10°C par grow kar sakte hain. > 10°C par, pathogenic organisms jaise <em>Listeria monocytogenes</em> (jo 1°C par grow kar sakta hai lekin > 10°C par bahut tezi se) aur <em>Staphylococcus aureus</em> (growth ke liye > 10°C; toxin production ke liye > 15°C) ek concern ban jaate hain.</li>
                        <li><strong>Lipid oxidation mein tezi:</strong> Autoxidation ki rate har 10°C badhne par double ho jaati hai (Arrhenius kinetics follow karti hai: k = A × e^(-Ea/RT)).</li>
                        <li><strong>Lipolysis:</strong> Residual lipases (native ya microbial) zyada temperature par zyada active hote hain, free fatty acids release karte hain (butyric acid → rancid swaad).</li>
                        <li><strong>Crystal polymorphic transitions:</strong> Temperature fluctuations α → β' → β transitions ko promote karti hain, jisse grainy texture aata hai.</li>
                    </ul>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Butter mein Common Defects (Aam Dosh)</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Defect Category (Dosh Shreni)</th>
                            <th class="p-2 border">Defect (Dosh)</th>
                            <th class="p-2 border">Karan (Cause)</th>
                            <th class="p-2 border">Scientific Basis (Vaigyanik Aadhar)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border" rowspan="3"><strong>Flavor Defects (Swaad ke Dosh)</strong></td>
                            <td class="p-2 border">Rancid (Baasi swaad) — hydrolytic</td><td class="p-2 border">Lipase activity (native LPL ya microbial lipases)</td><td class="p-2 border">Short-chain FAs ka release (butyric C4:0, caproic C6:0) — kam concentration mein bhi bahut strong off-flavors (butyric acid ka threshold: ~0.5–1.0 ppm)</td></tr>
                        <tr><td class="p-2 border">Oxidized / Tallowy / Metallic</td><td class="p-2 border">Lipid oxidation (autoxidation, photo-oxidation)</td><td class="p-2 border">Free radical chain reaction: Initiation → Propagation → Termination. Hydroperoxides → aldehydes (hexanal, nonanal), ketones produce hote hain. Cu²⁺ (> 0.05 ppm), Fe³⁺, light, O₂ catalyze karte hain</td></tr>
                        <tr><td class="p-2 border">Fishy / Oily (Machli jaisa)</td><td class="p-2 border">Phospholipids ka oxidation (khaas taur par jo PUFA se bhari hain)</td><td class="p-2 border">Lecithin oxidation se Trimethylamine (TMA) formation; unsalted butter mein common jismein high PUFA content ho</td></tr>
                        <tr><td class="p-2 border" rowspan="3"><strong>Body & Texture Defects (Banawat ke Dosh)</strong></td>
                            <td class="p-2 border">Greasy / Sticky (Chipchipa)</td><td class="p-2 border">Churning ya working temperature bahut zyada; over-working</td><td class="p-2 border">Excessive liquid fat; crystal network ka destruction; kam SFC</td></tr>
                        <tr><td class="p-2 border">Crumbly / Brittle (Tootne wala)</td><td class="p-2 border">Churning temperature bahut kam; insufficient working</td><td class="p-2 border">Excessive solid fat (high SFC); fat crystal clusters ke beech inadequate bonding</td></tr>
                        <tr><td class="p-2 border">Sandy / Grainy (Rehlui / Daanedaar)</td><td class="p-2 border">Storage ke dauraan temperature fluctuations</td><td class="p-2 border">β' → β polymorphic transition; bade β crystals (> 30 µm) munh mein "sandy" feel hote hain</td></tr>
                        <tr><td class="p-2 border" rowspan="2"><strong>Color/Appearance Defects (Rang/Dikhawat ke Dosh)</strong></td>
                            <td class="p-2 border">Mottled / Wavy (Dhabbedaar / Lehardaar)</td><td class="p-2 border">Asaman salt aur moisture distribution</td><td class="p-2 border">Zyada moisture wale regions lighter dikhte hain (zyada light scattering); under-working defect</td></tr>
                        <tr><td class="p-2 border">Surface discoloration (Satah ka rang badalna)</td><td class="p-2 border">Surface oxidation; dehydration</td><td class="p-2 border">Carotenoids ka oxidation; surface proteins ka Maillard browning; "surface taint"</td></tr>
                        <tr><td class="p-2 border"><strong>Microbial Defects (Jeevanu Dosh)</strong></td>
                            <td class="p-2 border">Surface mold growth / "Buttons"</td><td class="p-2 border">Post-pasteurization contamination; inadequate packaging</td><td class="p-2 border"><em>Cladosporium</em>, <em>Alternaria</em>, <em>Aspergillus</em> spp. butter surface par kam aₓ (~0.80) par bhi grow kar sakte hain; "buttons" ubhri hui mold colonies hain</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Butter mein Lipid Oxidation — Vistrit Mechanism (Detailed)</h3>
            <p>Lipid oxidation butter mein primary chemical deterioration pathway hai aur yeh "tallowy," "metallic," aur "cardboard" off-flavors ke liye zimmedar hai. Iska mechanism samajhna quality control ke liye zaroori hai:</p>
            <div class="bg-red-50 p-4 rounded mt-2 border border-red-200">
                <p><strong>1. Initiation (Shuruat):</strong></p>
                <div class="font-mono text-sm ml-4">RH + Initiator (light, heat, metal ions) → R• + H•</div>
                <p class="text-sm ml-4">Jahaan RH = unsaturated fatty acid; R• = lipid free radical</p>
                
                <p class="mt-2"><strong>2. Propagation (Failaav / chain reaction):</strong></p>
                <div class="font-mono text-sm ml-4">R• + O₂ → ROO• (peroxyl radical) <em>[bahut tez, diffusion-controlled]</em></div>
                <div class="font-mono text-sm ml-4">ROO• + RH → ROOH + R• <em>[rate-limiting step]</em></div>
                <p class="text-sm ml-4">ROOH = lipid hydroperoxide (primary oxidation product — Peroxide Value se measure hota hai)</p>
                
                <p class="mt-2"><strong>3. Termination (Samaapti):</strong></p>
                <div class="font-mono text-sm ml-4">R• + R• → R-R</div>
                <div class="font-mono text-sm ml-4">R• + ROO• → ROOR</div>
                <div class="font-mono text-sm ml-4">ROO• + ROO• → ROOR + O₂</div>
                
                <p class="mt-2"><strong>4. Hydroperoxides ka Decomposition (Vibhajan):</strong></p>
                <div class="font-mono text-sm ml-4">ROOH → RO• + •OH (homolytic cleavage)</div>
                <div class="font-mono text-sm ml-4">→ Aldehydes, ketones, alcohols, hydrocarbons (secondary products)</div>
                <p class="text-sm ml-4">Key flavor-impact compounds: <strong>hexanal</strong> (green/ghasi), <strong>nonanal</strong> (tallowy/charbi jaisa), <strong>2,4-decadienal</strong> (tala hua/fatty), <strong>1-octen-3-one</strong> (metallic/lohe jaisa)</p>
            </div>
            <p class="mt-2"><strong>Butter mein oxidation tez karne wale kaarak (factors):</strong> Pro-oxidant metals (Cu²⁺ > 0.05 ppm nuksan-dayak hai; stainless steel equipment zaroori hai), light exposure (riboflavin singlet oxygen ¹O₂ pathway ke liye photosensitizer ka kaam karta hai), zyada storage temperature, high PUFA content, dissolved oxygen.</p>
            <p><strong>Butter mein antioxidant strategies:</strong> High-temperature pasteurization (-SH groups generate karti hai), permitted antioxidants ka addition (jaise BHA, BHT, TBHQ — jahaan regulation allow kare), vacuum/nitrogen packaging, opaque packaging materials, copper-free equipment.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Spreadability aur Butter ki Rheology</h3>
            <p>Butter ki spreadability (failane ki kshamta) ek key consumer-perceived quality attribute hai aur yeh uski <strong>rheological properties</strong> se govern hoti hai, jo baari mein in par depend karti hain:</p>
            <ul class="list-disc list-inside ml-4 space-y-1">
                <li><strong>Solid Fat Content (SFC)</strong> use ki jaane wali temperature par (fridge: 5°C → SFC ~55–65%; room temperature: 20°C → SFC ~20–30%)</li>
                <li><strong>Crystal polymorphic form</strong> (β' smooth, spreadable texture deta hai)</li>
                <li><strong>Fat crystal network microstructure</strong> (processing history se determine hota hai)</li>
                <li><strong>Fatty acid composition</strong> (zyada C18:1 oleic acid → naram, zyada spreadable butter)</li>
            </ul>
            <p class="mt-2">Butter ek <strong>viscoelastic, plastic material</strong> hai jo ek <strong>yield stress</strong> exhibit karta hai — yield stress se neeche yeh solid (elastic) ki tarah behave karta hai, upar flow (plastic) karta hai. 5°C par yield stress typically <strong>30–100 kPa</strong> hota hai; 15°C par yeh gir ke <strong>5–15 kPa</strong> ho jaata hai.</p>
            <p class="mt-2">Spreadability ko aise measure kiya ja sakta hai:</p>
            <ul class="list-disc list-inside ml-4 space-y-1">
                <li><strong>Penetrometry:</strong> Specified temperature par cone ya needle ki penetration depth (zyada penetration = naram butter)</li>
                <li><strong>Texture Profile Analysis (TPA):</strong> Texture analyzer (jaise TA.XT Plus) use karke — hardness, adhesiveness, cohesiveness measure karta hai</li>
                <li><strong>Oscillatory rheometry:</strong> Storage modulus (G') aur loss modulus (G'') measure karta hai — G'/G'' ratio (tan δ) elastic vs. viscous behavior indicate karta hai</li>
            </ul>
            <p class="mt-2"><strong>Spreadability improve karne ke tarike:</strong></p>
            <ul class="list-disc list-inside ml-4 space-y-1">
                <li>Modified tempering programs (α → β' transition promote karne ke liye lamba warm-holding)</li>
                <li>Milk fat ka fractionation (low-melting fraction, olein, use karna jo oleic acid mein richer hai)</li>
                <li>Vegetable oils ke saath blending ("butter blends" ya "spreadable butter" banata hai — alag se regulated hai)</li>
                <li>Controlled temperatures par intensive working ke through texturization</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Butter ke Liye Microbiological Standards (Jeevanu Maanak)</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Microbiological Parameter</th>
                            <th class="p-2 border">FSSAI Limit</th>
                            <th class="p-2 border">Mahatva (Significance)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Total Plate Count (TPC)</td><td class="p-2 border">≤ 50,000 CFU/g (pasteurized)</td><td class="p-2 border">General hygiene (safai) indicator</td></tr>
                        <tr><td class="p-2 border">Coliform count</td><td class="p-2 border">≤ 10 CFU/g</td><td class="p-2 border">Post-pasteurization contamination ka indicator</td></tr>
                        <tr><td class="p-2 border"><em>E. coli</em></td><td class="p-2 border">1 g mein absent</td><td class="p-2 border">Fecal contamination (mala-visarjan se pradushan) ka indicator</td></tr>
                        <tr><td class="p-2 border"><em>Salmonella</em></td><td class="p-2 border">25 g mein absent</td><td class="p-2 border">Pathogen (rogjaanak) — food safety</td></tr>
                        <tr><td class="p-2 border"><em>Listeria monocytogenes</em></td><td class="p-2 border">25 g mein absent</td><td class="p-2 border">Pathogen — refrigeration temperatures par bhi grow kar sakta hai</td></tr>
                        <tr><td class="p-2 border"><em>Staphylococcus aureus</em></td><td class="p-2 border">≤ 100 CFU/g</td><td class="p-2 border">Enterotoxin producer; common skin/nasal flora — handling hygiene indicate karta hai</td></tr>
                        <tr><td class="p-2 border">Yeast & Mold count</td><td class="p-2 border">≤ 50 CFU/g</td><td class="p-2 border">Spoilage organisms; kam aₓ par grow kar sakte hain; packaging/storage integrity indicate karta hai</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Butter Production ke Liye HACCP Summary Table</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Step (Charan)</th>
                            <th class="p-2 border">Hazard (Khatraa)</th>
                            <th class="p-2 border">Control Measure (Niyantran Upay)</th>
                            <th class="p-2 border">Category (Shreni)</th>
                            <th class="p-2 border">Critical Limit</th>
                            <th class="p-2 border">Monitoring (Nigraani)</th>
                            <th class="p-2 border">Corrective Action (Sudhar Kadam)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border">Milk/Cream Reception</td>
                            <td class="p-2 border">Biological (pathogens), Chemical (antibiotics, pesticides, aflatoxin M1)</td>
                            <td class="p-2 border">Supplier approval, platform tests, antibiotic screening</td>
                            <td class="p-2 border">PRP</td>
                            <td class="p-2 border">Antibiotics: absent; Aflatoxin M1: < 0.5 µg/kg; Acidity < 0.2% LA</td>
                            <td class="p-2 border">Har lot par</td>
                            <td class="p-2 border">Non-conforming milk reject karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Cream Pasteurization</strong></td>
                            <td class="p-2 border">Biological (vegetative pathogens: <em>Salmonella, Listeria, E. coli</em> O157:H7)</td>
                            <td class="p-2 border">Time-temperature control</td>
                            <td class="p-2 border"><strong>CCP-1</strong></td>
                            <td class="p-2 border">≥ 95°C kam se kam 15 sec ke liye (HTST); ALP test negative</td>
                            <td class="p-2 border">Continuous T recording; flow diversion valve</td>
                            <td class="p-2 border">Cream ko re-pasteurization ke liye divert karo; instruments calibrate karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Churning Temperature</td>
                            <td class="p-2 border">Quality (safety nahi) — texture aur fat loss ko affect karta hai</td>
                            <td class="p-2 border">Temperature control</td>
                            <td class="p-2 border">oPRP</td>
                            <td class="p-2 border">8–14°C (season/fat composition ke anusaar adjust kiya)</td>
                            <td class="p-2 border">Churning se pehle temperature check</td>
                            <td class="p-2 border">Temperature adjust karo; cream ko zyada der hold karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Working & Moisture Control</td>
                            <td class="p-2 border">Quality (moisture %, droplet size); Chemical (uneven salt)</td>
                            <td class="p-2 border">Working time/intensity; moisture analysis</td>
                            <td class="p-2 border">oPRP</td>
                            <td class="p-2 border">Moisture ≤ 16%; Salt ≤ 3%; Visible free moisture nahi hona chahiye</td>
                            <td class="p-2 border">Moisture analysis (rapid method/microwave) har batch par</td>
                            <td class="p-2 border">Working time adjust karo; butter dobara work karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border">Packaging</td>
                            <td class="p-2 border">Physical (foreign matter/videshi padaarth); Biological (post-process contamination)</td>
                            <td class="p-2 border">Metal detection; hygienic design; food-grade materials</td>
                            <td class="p-2 border">PRP</td>
                            <td class="p-2 border">2 mm se bada koi metal nahi; packaging integrity</td>
                            <td class="p-2 border">Har pack par metal detector; visual checks</td>
                            <td class="p-2 border">Affected packs reject karo; source investigate karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Cold Storage</strong></td>
                            <td class="p-2 border">Biological (psychrotrophic growth, <em>Listeria</em>); Chemical (oxidation)</td>
                            <td class="p-2 border">Temperature control</td>
                            <td class="p-2 border"><strong>CCP-2</strong></td>
                            <td class="p-2 border">≤ 5°C (retail); ≤ -18°C (long-term)</td>
                            <td class="p-2 border">Alarms ke saath continuous temperature recording</td>
                            <td class="p-2 border">Product ko alag karo aur evaluate karo; cold chain repair karo</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Butter ke Prakar — Vargikaran (Types — Classification)</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Prakar (Type)</th>
                            <th class="p-2 border">Vivaran (Description)</th>
                            <th class="p-2 border">Key Feature (Mukhya Visheshta)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Sweet Cream Butter</td><td class="p-2 border">Fresh (unfermented) pasteurized cream se banta hai</td><td class="p-2 border">Saaf, halka, creamy swaad; duniya bhar mein sabse common type</td></tr>
                        <tr><td class="p-2 border">Cultured/Ripened Butter</td><td class="p-2 border">LAB starter cultures se fermented cream se banta hai</td><td class="p-2 border">Tangy, complex swaad; diacetyl-rich khushbu; paramparik European style</td></tr>
                        <tr><td class="p-2 border">Salted Butter (Namkeen)</td><td class="p-2 border">Namak milaya jaata hai (1–2.5%)</td><td class="p-2 border">Badhaa hua swaad; kam aₓ ki wajah se lambi shelf life</td></tr>
                        <tr><td class="p-2 border">Unsalted / Sweet Butter</td><td class="p-2 border">Namak nahi milaya jaata</td><td class="p-2 border">Baking ke liye preferred (precise salt control); chhoti shelf life</td></tr>
                        <tr><td class="p-2 border">Whey Butter</td><td class="p-2 border">Whey cream (cheese making ka by-product) se banta hai</td><td class="p-2 border">Thoda alag flavor profile; aksar processed foods mein use hota hai; cheese jaisi notes ho sakti hain</td></tr>
                        <tr><td class="p-2 border">White Butter (Makhan)</td><td class="p-2 border">Paramparik Indian butter jo dahi (yogurt) ki biloyi (churning) se banta hai</td><td class="p-2 border">Fermented whole milk se banta hai (separated cream se nahi); zyada MSNF; ghee banane ke liye use hota hai</td></tr>
                        <tr><td class="p-2 border">European-Style Butter</td><td class="p-2 border">Zyada fat content (82–86%); typically cultured</td><td class="p-2 border">Richer, zyada buttery; kam moisture (12–14%); pastry mein preferred</td></tr>
                        <tr><td class="p-2 border">Spreadable Butter</td><td class="p-2 border">Modified processing ya vegetable oil ke saath blended</td><td class="p-2 border">Fridge ke temperature par naram; low-melting triglycerides ka zyada proportion</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Butter Banane mein Key Scientific Principles ka Saransh (Summary)</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Process Step (Charan)</th>
                            <th class="p-2 border">Key Scientific Principle (Mukhya Vaigyanik Siddhant)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Cream Separation</td><td class="p-2 border">Stoke's Law (centrifugal modification); density difference (Δρ ≈ 0.1 g/cm³)</td></tr>
                        <tr><td class="p-2 border">Pasteurization</td><td class="p-2 border">First-order thermal inactivation kinetics (D-value, z-value); microorganisms par fat ka protective effect</td></tr>
                        <tr><td class="p-2 border">Fat Crystallization/Aging</td><td class="p-2 border">Crystal polymorphism (α → β' → β); nucleation aur crystal growth theory; Ostwald ripening; solid fat content (SFC)</td></tr>
                        <tr><td class="p-2 border">Biological Ripening</td><td class="p-2 border">Citrate metabolism; diacetyl biochemistry; lactic acid fermentation (glycolysis → pyruvate → lactate)</td></tr>
                        <tr><td class="p-2 border">Churning</td><td class="p-2 border">Phase inversion (O/W → W/O); MFGM disruption; partial coalescence theory; foam formation aur collapse</td></tr>
                        <tr><td class="p-2 border">Working</td><td class="p-2 border">Rheology (yield stress, viscoelasticity); droplet breakup ke liye Capillary number; moisture dispersion</td></tr>
                        <tr><td class="p-2 border">Salting</td><td class="p-2 border">Water activity (aₓ) mein kami; Raoult's Law (dissolved solute ki colligative property)</td></tr>
                        <tr><td class="p-2 border">Packaging</td><td class="p-2 border">Photo-oxidation (singlet oxygen ¹O₂); packaging materials ki oxygen permeability</td></tr>
                        <tr><td class="p-2 border">Cold Storage</td><td class="p-2 border">Oxidation aur microbial growth ki Arrhenius kinetics; Q₁₀ concept (har 10°C badhne par rate double)</td></tr>
                    </tbody>
                </table>
            </div>
        `
    }
}

    
