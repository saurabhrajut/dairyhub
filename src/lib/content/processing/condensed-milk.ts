
export const condensedMilkContent = {
    en: {
        title: "Condensed & Evaporated Milk Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Condensed Milk</h3>
            <p>Condensed milk products are concentrated dairy systems from which a significant fraction of water (approximately 60%) has been removed by vacuum evaporation, with or without the addition of nutritive sweeteners. These products occupy a unique position in food preservation science, as they exploit two distinct hurdle technology strategies to achieve microbiological stability:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Sweetened Condensed Milk (SCM):</strong> Achieves preservation primarily through <em>water activity (a<sub>w</sub>) depression</em>. The combination of high sucrose concentration (approximately 44–46% w/w in the aqueous phase, equivalent to 62–65% sugar-in-water) and dissolved milk solids reduces the a<sub>w</sub> to approximately <strong>0.83–0.85</strong>, which is below the growth threshold of most spoilage bacteria (<em>a<sub>w</sub></em> &lt; 0.91) and many yeasts (<em>a<sub>w</sub></em> &lt; 0.88). The product is <em>not</em> commercially sterile and relies entirely on this physicochemical barrier.</li>
                <li><strong>Evaporated Milk (EM):</strong> Contains no added sugar and achieves preservation through <strong>in-container sterilization</strong> (typically 115–120°C for 15–20 min, delivering an F<sub>0</sub> value of 5–7 minutes), rendering the product commercially sterile. The a<sub>w</sub> of evaporated milk remains relatively high (~0.96), necessitating the thermal process.</li>
            </ul>
            <p class="mt-3">The scientific foundation of concentrated milks was established by <strong>Gail Borden</strong> in 1856 (US Patent No. 15,553), who pioneered vacuum evaporation of sweetened milk. Nicolas Appert's earlier work on thermal preservation (1810) underpins evaporated milk technology. Today, these products are governed by <strong>Codex Alimentarius Standard CXS 281-1971</strong> (for evaporated milks) and <strong>CXS 282-1971</strong> (for sweetened condensed milks), in addition to national regulations.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">The Science of Water Activity and Preservation</h3>
            <p>Water activity (a<sub>w</sub>) is the thermodynamic measure of the energy status of water in a system, defined as the ratio of the vapor pressure of water in the food (p) to the vapor pressure of pure water (p₀) at the same temperature:</p>
            <div class="bg-gray-100 p-3 rounded text-center my-3 font-mono">
                a<sub>w</sub> = p / p₀ = γ · X<sub>w</sub>
            </div>
            <p>where γ is the activity coefficient and X<sub>w</sub> is the mole fraction of water. In sweetened condensed milk, the depression of a<sub>w</sub> follows <strong>Raoult's Law</strong> (modified for non-ideal solutions). Sucrose molecules hydrogen-bond extensively with water, reducing the number of free water molecules available for microbial metabolism. The relationship between sucrose concentration and a<sub>w</sub> at 25°C can be approximated by the <strong>Norrish equation</strong>:</p>
            <div class="bg-gray-100 p-3 rounded text-center my-3 font-mono">
                a<sub>w</sub> = X<sub>w</sub> · exp(−K · X<sub>s</sub>²)
            </div>
            <p>where X<sub>s</sub> is the mole fraction of sucrose and K is the Norrish constant for sucrose (K ≈ 6.47). The following table illustrates the minimum a<sub>w</sub> for growth of key microorganisms relevant to condensed milk:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Microorganism</th>
                            <th class="p-2 border">Minimum a<sub>w</sub> for Growth</th>
                            <th class="p-2 border">Relevance to SCM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border"><em>Clostridium botulinum</em> (Type A)</td><td class="p-2 border">0.94</td><td class="p-2 border">Inhibited by SCM a<sub>w</sub></td></tr>
                        <tr><td class="p-2 border"><em>Salmonella</em> spp.</td><td class="p-2 border">0.94</td><td class="p-2 border">Inhibited</td></tr>
                        <tr><td class="p-2 border"><em>Staphylococcus aureus</em> (toxin production)</td><td class="p-2 border">0.86</td><td class="p-2 border">Marginal – close to SCM a<sub>w</sub></td></tr>
                        <tr><td class="p-2 border">Most spoilage bacteria</td><td class="p-2 border">0.91</td><td class="p-2 border">Inhibited</td></tr>
                        <tr><td class="p-2 border">Most yeasts</td><td class="p-2 border">0.88</td><td class="p-2 border">Inhibited</td></tr>
                        <tr><td class="p-2 border"><strong>Osmophilic yeasts</strong> (<em>Torulopsis</em>, <em>Zygosaccharomyces</em>)</td><td class="p-2 border">0.62–0.65</td><td class="p-2 border"><strong>Primary spoilage risk</strong></td></tr>
                        <tr><td class="p-2 border">Xerophilic molds (<em>Aspergillus</em>)</td><td class="p-2 border">0.65</td><td class="p-2 border">Surface spoilage risk</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3 bg-yellow-50 p-3 rounded border-l-4 border-yellow-400"><strong>⚠ Critical Note:</strong> While SCM's a<sub>w</sub> of ~0.83 inhibits most pathogens and spoilage organisms, <em>osmophilic yeasts</em> (particularly <em>Torulopsis</em> spp.) can grow at a<sub>w</sub> values as low as 0.62. These are the <strong>principal spoilage organisms</strong> of SCM and are controlled through stringent hygiene during post-evaporation handling, cooling, and packaging. Their presence causes gas production ("blown cans"), off-flavors, and visible surface colonies.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Regulatory Standards: FSSAI and Codex Alimentarius</h3>
            <p>The Food Safety and Standards Authority of India (FSSAI) under <strong>FSS (Food Products Standards and Food Additives) Regulations, 2011</strong> establishes compositional requirements for concentrated milks. These are broadly aligned with Codex standards (CXS 281 and CXS 282) but with some India-specific modifications.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Product Type</th>
                            <th class="p-2 border">Min. Total Milk Solids % (m/m)</th>
                            <th class="p-2 border">Min. Milk Fat % (m/m)</th>
                            <th class="p-2 border">Sucrose % (m/m)</th>
                            <th class="p-2 border">Codex Standard Reference</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Sweetened Condensed Milk (Full cream)</strong></td>
                            <td class="p-2 border">31.0 (FSSAI) / 28.0 (Codex)</td>
                            <td class="p-2 border">9.0 (FSSAI) / 8.0 (Codex)</td>
                            <td class="p-2 border">Min. 40.0</td>
                            <td class="p-2 border">CXS 282-1971</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sweetened Condensed Partly Skimmed Milk</strong></td>
                            <td class="p-2 border">28.0</td>
                            <td class="p-2 border">1.0 – 8.0</td>
                            <td class="p-2 border">Min. 40.0</td>
                            <td class="p-2 border">CXS 282-1971</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sweetened Condensed Skimmed Milk</strong></td>
                            <td class="p-2 border">26.0 (FSSAI) / 24.0 (Codex)</td>
                            <td class="p-2 border">Max 0.5 (FSSAI) / Max 1.0 (Codex)</td>
                            <td class="p-2 border">Min. 40.0</td>
                            <td class="p-2 border">CXS 282-1971</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Evaporated Milk</strong></td>
                            <td class="p-2 border">26.0 (FSSAI) / 25.0 (Codex)</td>
                            <td class="p-2 border">8.0 (FSSAI) / 7.5 (Codex)</td>
                            <td class="p-2 border">N/A</td>
                            <td class="p-2 border">CXS 281-1971</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Evaporated Skimmed Milk</strong></td>
                            <td class="p-2 border">20.0</td>
                            <td class="p-2 border">Max 1.0</td>
                            <td class="p-2 border">N/A</td>
                            <td class="p-2 border">CXS 281-1971</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3"><strong>Microbiological Standards (FSSAI):</strong></p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">SCM Limit</th>
                            <th class="p-2 border">Evaporated Milk Limit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Total Plate Count (cfu/g)</td><td class="p-2 border">Max 50,000</td><td class="p-2 border">Commercially sterile</td></tr>
                        <tr><td class="p-2 border">Coliform count (cfu/g)</td><td class="p-2 border">Max 10</td><td class="p-2 border">Absent</td></tr>
                        <tr><td class="p-2 border">Yeast & Mold count (cfu/g)</td><td class="p-2 border">Max 10</td><td class="p-2 border">Absent</td></tr>
                        <tr><td class="p-2 border"><em>E. coli</em></td><td class="p-2 border">Absent in 1g</td><td class="p-2 border">Absent</td></tr>
                        <tr><td class="p-2 border"><em>Salmonella</em></td><td class="p-2 border">Absent in 25g</td><td class="p-2 border">Absent</td></tr>
                        <tr><td class="p-2 border"><em>Staphylococcus aureus</em></td><td class="p-2 border">Max 10 cfu/g</td><td class="p-2 border">Absent</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3"><strong>Permitted Additives (as per FSSAI/Codex):</strong></p>
            <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
                <li><strong>Stabilizers (for evaporated milk only):</strong> Sodium/potassium citrates, sodium/potassium phosphates (mono-, di-, tri-), sodium bicarbonate – max 0.2% (w/w) individually or in combination. These regulate the <strong>calcium-casein equilibrium</strong> during sterilization.</li>
                <li><strong>Emulsifiers:</strong> Lecithin – max 0.5% for evaporated milk.</li>
                <li><strong>Vitamins:</strong> Vitamin D₃ may be added (up to 8.5 µg/100 mL reconstituted).</li>
                <li><strong>Sugars (for SCM):</strong> Sucrose, glucose, fructose, lactose – subject to minimum total sugar requirements.</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">PART I: Sweetened Condensed Milk (SCM) – Detailed Processing Science</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Raw Material Requirements</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Specification</th>
                            <th class="p-2 border">Scientific Rationale</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Acidity</td><td class="p-2 border">≤0.15% lactic acid</td><td class="p-2 border">Higher acidity indicates microbial degradation of lactose; increases protein instability during heating</td></tr>
                        <tr><td class="p-2 border">Alcohol stability</td><td class="p-2 border">Stable to 75% ethanol</td><td class="p-2 border">Assesses heat stability of casein micelles; ethanol disrupts the κ-casein hairy layer</td></tr>
                        <tr><td class="p-2 border">COB test (Clot-on-Boiling)</td><td class="p-2 border">Negative</td><td class="p-2 border">Confirms milk will not coagulate during pre-heating</td></tr>
                        <tr><td class="p-2 border">SPC (Standard Plate Count)</td><td class="p-2 border">≤200,000 cfu/mL</td><td class="p-2 border">Lower initial bioburden = fewer surviving spores; less enzyme (protease/lipase) contamination</td></tr>
                        <tr><td class="p-2 border">Thermoduric count</td><td class="p-2 border">≤10,000 cfu/mL</td><td class="p-2 border">Heat-resistant organisms (spore-formers) survive pre-heating</td></tr>
                        <tr><td class="p-2 border">Somatic Cell Count</td><td class="p-2 border">≤400,000/mL</td><td class="p-2 border">High SCC indicates subclinical mastitis; elevated plasmin (heat-stable protease) and altered salt balance</td></tr>
                        <tr><td class="p-2 border">Fat:SNF ratio</td><td class="p-2 border">~1:2.44 (for full-cream SCM)</td><td class="p-2 border">Ensures final product meets compositional standards after water removal</td></tr>
                        <tr><td class="p-2 border">Sugar quality</td><td class="p-2 border">Refined cane sugar, ≤0.03% ash, ≤0.05% moisture, ≤200 ICUMSA color</td><td class="p-2 border">Low moisture prevents osmophilic yeast carriage; low ash prevents flavor defects</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart with HACCP Integration</h3>
            <div class="space-y-2 font-mono text-center text-sm">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">
                    <strong>1. Milk Reception, Testing & Filtration/Clarification</strong>
                    <br><span class="font-sans text-xs bg-gray-200 p-1 rounded mt-1 inline-block">PRP – Supplier Approval, Platform Tests</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">
                    <strong>2. Chilled Storage (≤4°C, max 24h)</strong>
                    <br><span class="font-sans text-xs bg-gray-200 p-1 rounded mt-1 inline-block">PRP – Temperature Monitoring</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">
                    <strong>3. Standardization (Fat:SNF = 1:2.44)</strong>
                    <br><span class="font-sans text-xs bg-gray-200 p-1 rounded mt-1 inline-block">PRP – Compositional Control</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">
                    <strong>4. Pre-heating / Forewarming (110–120°C / 2–5 sec, or 85–90°C / 15–30 min)</strong>
                    <br><span class="font-sans text-xs bg-red-200 p-1 rounded mt-1 inline-block">CCP-1: Thermal Process – Pathogen Kill & Protein Stabilization</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">
                    <strong>5. Sugar Addition (as filtered 65°Brix syrup at 80°C)</strong>
                    <br><span class="font-sans text-xs bg-orange-200 p-1 rounded mt-1 inline-block">oPRP – Sugar Quality & Dissolution Control</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">
                    <strong>6. Vacuum Evaporation (45–65°C, vacuum 600–700 mmHg)</strong>
                    <br>Concentration to 72–74% total solids
                    <br><span class="font-sans text-xs bg-orange-200 p-1 rounded mt-1 inline-block">oPRP – Endpoint Control (Brix, Density)</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">
                    <strong>7. Forced Cooling & Seeded Lactose Crystallization</strong>
                    <br>Cool to 30°C rapidly; seed at ~30–35°C with 0.02% ground lactose
                    <br><span class="font-sans text-xs bg-red-200 p-1 rounded mt-1 inline-block">CCP-2: Crystal Size Control (&lt;10 µm)</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">
                    <strong>8. Filling & Seaming into Pre-sterilized Cans</strong>
                    <br><span class="font-sans text-xs bg-red-200 p-1 rounded mt-1 inline-block">CCP-3: Post-process Contamination Control</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">
                    <strong>9. Storage (15–25°C recommended, max 12–24 months)</strong>
                </div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Scientific Explanation of Each Processing Step</h3>

            <h4 class="text-lg font-semibold text-gray-700 mt-5 mb-2">Step 1–3: Milk Reception, Storage & Standardization</h4>
            <p>Incoming milk is tested using <strong>platform tests</strong> (organoleptic evaluation, COB, alcohol test, acidity, adulterant screening via lactometer and SNF calculation). Clarification removes somatic cells, leucocytes, and particulate foreign matter using hermetic disc-type centrifugal clarifiers operating at 6,000–7,000 rpm.</p>
            <p class="mt-2"><strong>Standardization Science:</strong> The fat-to-SNF ratio in the raw milk must be adjusted using Pearson's square or mass-balance equations so that upon concentration (typically 2.5:1 volume reduction), the final product meets the compositional specifications. For SCM with 9% fat and 22% SNF (total milk solids 31%), starting from milk with ~12.8% total solids, the concentration ratio is:</p>
            <div class="bg-gray-100 p-3 rounded text-center my-3 font-mono">
                Concentration Ratio = Total Solids in SCM (milk solids portion) / Total Solids in standardized milk
                <br>= (31% of ~73% milk portion) / 12.8% ≈ 2.5×
            </div>
            <p>The fat:SNF ratio in raw milk is standardized to match the <em>desired ratio in the final product</em>, typically around <strong>1:2.44</strong> (i.e., 9/22). Since fat and SNF concentrate proportionally during evaporation, this ratio is maintained throughout processing.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-5 mb-2">Step 4: Pre-heating / Forewarming (CCP-1)</h4>
            <p>Pre-heating serves multiple critical functions simultaneously:</p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Function</th>
                            <th class="p-2 border">Scientific Mechanism</th>
                            <th class="p-2 border">Process Parameter</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Pathogen destruction</strong></td>
                            <td class="p-2 border">Thermal denaturation of cellular proteins and disruption of cell membranes. At 110°C, the D-value for <em>C. botulinum</em> spores is ~0.21 min (at 121°C, D = 0.204 min). At 115°C for 3 sec, all vegetative pathogens are destroyed with >12-log reduction.</td>
                            <td class="p-2 border">110–120°C / 2–5 sec (HTST-UHT range)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Enzyme inactivation</strong></td>
                            <td class="p-2 border"><strong>Lipase:</strong> Native milk lipoprotein lipase (LPL, EC 3.1.1.34) is inactivated at 78°C/10s. <strong>Bacterial lipases</strong> from psychrotrophs (<em>Pseudomonas fluorescens</em>) are far more heat-resistant (may survive 150°C). <strong>Plasmin</strong> (EC 3.4.21.7, a serine protease from blood) partially survives pasteurization; denatured at >90°C. These enzymes cause <em>rancidity</em> and <em>age gelation</em> respectively.</td>
                            <td class="p-2 border">≥90°C for enzyme kill; higher for bacterial enzymes</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Whey protein denaturation & complexation</strong></td>
                            <td class="p-2 border">β-Lactoglobulin (β-Lg) denatures above 70°C (T<sub>d</sub> ≈ 78°C) and forms <strong>disulfide-linked complexes with κ-casein</strong> on the casein micelle surface via the Cys<sub>121</sub> residue of β-Lg reacting with Cys<sub>11</sub>–Cys<sub>88</sub> of κ-casein. This <strong>"pre-coats"</strong> the micelle, increasing its heat stability and preventing gelation during storage (age thickening).</td>
                            <td class="p-2 border">85–90°C / 15–30 min (batch) or 110–120°C / 2–5 sec (continuous)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Controlled protein aggregation</strong></td>
                            <td class="p-2 border">The degree of whey protein denaturation (WPD%) controls the <em>viscosity development profile</em> during storage. Higher pre-heat temperatures (>100°C) yield >90% WPD, producing SCM that thins slightly during storage. Lower pre-heat (~80°C, ~60% WPD) produces SCM that thickens. Target: <strong>85–95% WPD</strong>.</td>
                            <td class="p-2 border">Verified by WPNI (Whey Protein Nitrogen Index)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Vacuum efficiency improvement</strong></td>
                            <td class="p-2 border">Dissolved gases (O₂, N₂, CO₂) are expelled at high temperatures, preventing foaming during vacuum evaporation and improving heat transfer. Dissolved O₂ removal also reduces <em>oxidative browning</em> during storage.</td>
                            <td class="p-2 border">Inherent at ≥85°C</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3 bg-blue-50 p-3 rounded border-l-4 border-blue-400"><strong>🔬 Kinetic Detail:</strong> The thermal destruction of microorganisms follows <strong>first-order kinetics</strong>: log(N/N₀) = −t/D, where D is the decimal reduction time. The temperature sensitivity is described by the <strong>z-value</strong> (temperature change for a 10-fold change in D). For <em>C. botulinum</em> spores: D₁₂₁ = 0.204 min, z = 10°C. At 115°C: D₁₁₅ = D₁₂₁ × 10<sup>(121−115)/10</sup> = 0.204 × 10<sup>0.6</sup> ≈ 0.81 min. A 3-second hold at 115°C provides approximately 0.05/0.81 ≈ 0.06 log reductions for <em>C. botulinum</em> spores. However, the primary safety factor in SCM is not thermal lethality alone but the <strong>combination of thermal treatment + low a<sub>w</sub></strong> (hurdle technology). Vegetative pathogens receive >12-log reductions.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-5 mb-2">Step 5: Sugar Addition (oPRP)</h4>
            <p>Sucrose serves as the primary preservative in SCM. Its addition requires careful scientific consideration:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Sugar Ratio (SR):</strong> The critical parameter is the <em>sugar ratio</em>, defined as the percentage of sugar in the water phase of the final product:
                    <div class="bg-gray-100 p-3 rounded text-center my-2 font-mono">
                        Sugar Ratio = [Sugar / (Sugar + Water)] × 100 = 62.5–64.5%
                    </div>
                    <p>If SR < 62.5%: insufficient a<sub>w</sub> depression → risk of microbial spoilage. If SR > 65.5%: excessive supersaturation → spontaneous, uncontrolled lactose crystallization (sandy texture).</p>
                </li>
                <li><strong>Sugar quantity calculation:</strong> For 100 kg of standardized milk (12.8% TS), concentrated ~2.5× to ~40 kg concentrated mass, approximately 18–19 kg of sugar must be added to achieve the target SR of ~63%. The total product weight would be ~40 + 19 = ~59 kg SCM, with composition: ~31% milk solids, ~44% sugar, ~25% water.</li>
                <li><strong>Timing of addition:</strong> Sugar can be added (a) before evaporation (most common industrially – added to the hot milk after forewarming), (b) during evaporation, or (c) after evaporation. Addition before evaporation elevates the boiling point and reduces evaporative efficiency but ensures uniform distribution. The sugar is typically dissolved as a <strong>65–67°Brix syrup</strong> at 80°C, filtered through 200-mesh screens, and added to the hot forewarmed milk.</li>
                <li><strong>Effect on boiling point elevation (BPE):</strong> The BPE of the concentrated sugar-milk solution is significant. By Dühring's rule, at 60°C pure water boiling point (under vacuum), a 64% sugar solution boils at approximately 68–70°C, and the combined effect of milk solids + sugar can elevate the boiling point by 8–12°C above the vacuum-adjusted boiling point of pure water.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-5 mb-2">Step 6: Vacuum Evaporation (oPRP)</h4>
            <p>Evaporation is the core unit operation and involves sophisticated heat and mass transfer engineering.</p>
            
            <p class="mt-2"><strong>Thermodynamic Principle:</strong> At atmospheric pressure (101.3 kPa), water boils at 100°C, causing severe thermal damage to milk components (Maillard browning, caramelization, protein denaturation). By applying vacuum (typically 15–25 kPa absolute, equivalent to 600–700 mmHg gauge vacuum), the boiling point is depressed to <strong>45–65°C</strong>, enabling gentle concentration with minimal thermal degradation.</p>
            <p class="mt-2">The Clausius-Clapeyron relation governs the boiling point shift:</p>
            <div class="bg-gray-100 p-3 rounded text-center my-3 font-mono">
                ln(P₂/P₁) = (ΔH<sub>vap</sub>/R) × (1/T₁ − 1/T₂)
            </div>
            <p>where ΔH<sub>vap</sub> for water ≈ 40.7 kJ/mol, R = 8.314 J/mol·K.</p>

            <p class="mt-3"><strong>Types of Evaporators Used:</strong></p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Evaporator Type</th>
                            <th class="p-2 border">Design Features</th>
                            <th class="p-2 border">Heat Transfer Coefficient (U)</th>
                            <th class="p-2 border">Advantages</th>
                            <th class="p-2 border">Application</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Falling-film tubular</strong></td>
                            <td class="p-2 border">Thin film of liquid flows downward by gravity inside vertical tubes; steam outside. Tube length: 8–15 m, diameter: 25–50 mm</td>
                            <td class="p-2 border">2,000–5,000 W/m²·K</td>
                            <td class="p-2 border">Very short residence time (10–30 sec), low thermal damage, high capacity</td>
                            <td class="p-2 border">Most common for milk concentration; used for initial concentration stages</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Rising-film tubular</strong></td>
                            <td class="p-2 border">Liquid climbs tubes by vapor bubble action; tube length: 4–7 m</td>
                            <td class="p-2 border">1,200–3,000 W/m²·K</td>
                            <td class="p-2 border">Self-circulating, good for moderate viscosities</td>
                            <td class="p-2 border">Older installations; supplementary effects</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Plate evaporator</strong></td>
                            <td class="p-2 border">Corrugated plates with narrow gaps (3–6 mm); high turbulence</td>
                            <td class="p-2 border">3,000–6,000 W/m²·K</td>
                            <td class="p-2 border">Compact, easy CIP, flexible capacity</td>
                            <td class="p-2 border">Small-to-medium scale; finishing concentration</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Forced-circulation</strong></td>
                            <td class="p-2 border">External pump forces liquid through heat exchanger at high velocity (2–5 m/s)</td>
                            <td class="p-2 border">1,500–3,500 W/m²·K</td>
                            <td class="p-2 border">Handles very viscous products without fouling</td>
                            <td class="p-2 border">Final stage for SCM (high viscosity at 72–74% TS)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p class="mt-3"><strong>Multi-Effect Evaporation & Thermal Vapor Recompression (TVR):</strong> Industrial SCM production uses <strong>2–7 effect evaporators</strong> to maximize steam economy. In a multi-effect system, vapor generated in the first effect (at highest pressure/temperature) is used as the heating medium in the second effect (at lower pressure), and so on. Steam economy increases approximately linearly with the number of effects:</p>
            <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
                <li>Single-effect: ~1 kg steam evaporates ~1 kg water (steam economy ≈ 0.9)</li>
                <li>Triple-effect: steam economy ≈ 2.5–2.7</li>
                <li>Seven-effect with TVR: steam economy ≈ <strong>15–20</strong></li>
            </ul>
            <p class="mt-2"><strong>Thermal Vapor Recompression (TVR)</strong> uses a thermocompressor (steam jet ejector) to boost the pressure and saturation temperature of the vapor from a downstream effect, mixing it with live steam before feeding it to an upstream effect. <strong>Mechanical Vapor Recompression (MVR)</strong> uses a centrifugal compressor to mechanically compress all the vapor produced, raising its condensation temperature by 5–8°C and recycling it as the sole heating medium. MVR-equipped single-effect systems can achieve steam economies equivalent to 15–30 effects.</p>

            <p class="mt-3"><strong>Endpoint Determination:</strong> The concentration is continuously monitored using:</p>
            <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
                <li><strong>In-line refractometry</strong> (°Brix, correlated to total solids) – target: 72–74°Brix</li>
                <li><strong>In-line density measurement</strong> (Coriolis flow meter) – target density at 50°C: ~1.30–1.32 g/cm³</li>
                <li><strong>Boiling Point Elevation (BPE):</strong> The ΔT between the vapor temperature and the product temperature at the same location indicates concentration. For SCM at 73% TS, BPE ≈ 8–12°C.</li>
                <li><strong>Hydrometer (Baumé scale):</strong> Traditional method; final product at 55–60°C should read 30–31°Bé.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-5 mb-2">Step 7: Forced Cooling & Seeded Lactose Crystallization (CCP-2)</h4>
            <p>This is arguably the most scientifically complex and quality-critical step in SCM manufacture. It determines the <strong>smooth or sandy mouthfeel</strong> of the final product.</p>

            <p class="mt-2"><strong>The Lactose Supersaturation Problem:</strong></p>
            <p>Lactose (4-O-β-D-galactopyranosyl-D-glucose, C₁₂H₂₂O₁₁·H₂O) has a relatively <strong>low solubility</strong> compared to sucrose:</p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Temperature (°C)</th>
                            <th class="p-2 border">Lactose Solubility (g/100g water)</th>
                            <th class="p-2 border">Sucrose Solubility (g/100g water)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">15</td><td class="p-2 border">15.1</td><td class="p-2 border">197</td></tr>
                        <tr><td class="p-2 border">25</td><td class="p-2 border">21.6</td><td class="p-2 border">211</td></tr>
                        <tr><td class="p-2 border">40</td><td class="p-2 border">30.4</td><td class="p-2 border">238</td></tr>
                        <tr><td class="p-2 border">60</td><td class="p-2 border">58.9</td><td class="p-2 border">287</td></tr>
                        <tr><td class="p-2 border">80</td><td class="p-2 border">94.7</td><td class="p-2 border">362</td></tr>
                        <tr><td class="p-2 border">100</td><td class="p-2 border">148.5</td><td class="p-2 border">487</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2">In a typical SCM (25% water, ~11% lactose in total, meaning ~44 g lactose per 100 g water), at storage temperature (25°C), only 21.6 g/100 g water can remain dissolved. The excess (~22.4 g/100g water) must crystallize out. The presence of sucrose <em>further reduces</em> lactose solubility by approximately 2.5 g per 100 g water for every 10 g sucrose present (salting-out effect), increasing the degree of supersaturation.</p>
            <p class="mt-2">The <strong>supersaturation ratio (β)</strong> at 25°C is:</p>
            <div class="bg-gray-100 p-3 rounded text-center my-3 font-mono">
                β = C / C<sub>sat</sub> ≈ 44 / 17* ≈ 2.6
                <br><span class="text-xs">(*adjusted for sucrose depression of lactose solubility)</span>
            </div>

            <p class="mt-2"><strong>Nucleation and Crystal Growth Theory:</strong></p>
            <p>Crystallization proceeds in two stages governed by distinct thermodynamic and kinetic mechanisms:</p>
            <ol class="list-decimal list-outside pl-5 space-y-3 mt-2">
                <li><strong>Nucleation:</strong> The formation of new crystal nuclei. In SCM processing, <em>secondary nucleation</em> is deliberately induced by <strong>seeding</strong>. Finely ground α-lactose monohydrate crystals (particle size ≤5 µm, typically 0.02–0.05% of product weight) are added at the <strong>optimal seeding temperature of 30–35°C</strong>. This temperature is below the metastable zone limit but high enough to allow adequate molecular mobility for crystal growth. The seeding introduces ~10⁸–10¹⁰ nucleation sites per gram of product.
                    <p class="mt-1">The nucleation rate (J) follows classical nucleation theory:</p>
                    <div class="bg-gray-100 p-3 rounded text-center my-2 font-mono text-xs">
                        J = A · exp[−16πγ³V<sub>m</sub>²/(3k³T³(ln β)²)]
                    </div>
                    <p>where γ = crystal-solution interfacial energy (~4.9 mJ/m²), V<sub>m</sub> = molecular volume of lactose, β = supersaturation ratio. High β and seeding maximize J, producing many nuclei.</p>
                </li>
                <li><strong>Crystal Growth:</strong> Once nuclei form, they grow by diffusion of lactose molecules from the supersaturated solution to the crystal surface. The growth rate (G) follows:
                    <div class="bg-gray-100 p-3 rounded text-center my-2 font-mono text-xs">
                        G = dL/dt = k<sub>g</sub> · (C − C<sub>sat</sub>)<sup>n</sup>
                    </div>
                    <p>where k<sub>g</sub> is the growth rate constant, n ≈ 1–2 for lactose. <strong>Vigorous agitation</strong> is essential to: (a) distribute seed crystals uniformly, (b) reduce the diffusion boundary layer thickness (δ) around growing crystals, and (c) maintain uniform temperature. With many nuclei competing for the available supersaturated lactose, individual crystals remain <em>small</em>.</p>
                </li>
            </ol>
            <p class="mt-3"><strong>Target Crystal Size and Sensory Impact:</strong></p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Crystal Size (µm)</th>
                            <th class="p-2 border">Sensory Perception</th>
                            <th class="p-2 border">Texture Classification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border"><strong>&lt;10</strong></td><td class="p-2 border">Imperceptible on tongue</td><td class="p-2 border"><strong>Smooth (ideal)</strong></td></tr>
                        <tr><td class="p-2 border">10–15</td><td class="p-2 border">Barely detectable; acceptable</td><td class="p-2 border">Slightly mealy</td></tr>
                        <tr><td class="p-2 border">15–25</td><td class="p-2 border">Noticeable graininess</td><td class="p-2 border">Mealy/Grainy</td></tr>
                        <tr><td class="p-2 border">25–40</td><td class="p-2 border">Distinctly sandy</td><td class="p-2 border">Sandy</td></tr>
                        <tr><td class="p-2 border">&gt;40</td><td class="p-2 border">Coarse, gritty, objectionable</td><td class="p-2 border">Gritty (rejected)</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3"><strong>Cooling Protocol:</strong></p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li>Product exits the evaporator at 50–55°C</li>
                <li>Transfer to a crystallization tank (jacketed, with scraping agitator operating at 15–20 rpm)</li>
                <li>Cool to <strong>30–35°C within 30 minutes</strong> using chilled water (2–5°C) in the jacket</li>
                <li>Add seed lactose (0.02% w/w, particle size ≤5 µm) at <strong>30–32°C</strong></li>
                <li>Continue agitation for 1–2 hours with controlled cooling to 18–20°C</li>
                <li>Flash cooling (some modern processes): product is spread on a cooled drum or passed through a scraped-surface heat exchanger (SSHE) like a Votator, cooling from 50°C to 18°C in minutes</li>
            </ul>

            <p class="mt-3"><strong>Mutarotation Consideration:</strong> Lactose exists in two anomeric forms: α-lactose (mp 202°C) and β-lactose (mp 252°C). In solution, they exist in equilibrium with a ratio of ~37% α : 63% β at 25°C. Only the <strong>α-lactose monohydrate</strong> form crystallizes from solution below 93.5°C. The mutarotation rate (α ⇌ β conversion) is temperature-dependent and is rate-limiting for crystallization at low temperatures. At 25°C, the mutarotation half-life is ~6.5 hours, meaning complete equilibrium takes ~30 hours. At 40°C, the half-life is ~1.5 hours. This is why seeding at 30–35°C is optimal – sufficient mutarotation rate to supply α-lactose to growing crystals.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-5 mb-2">Step 8: Packaging (CCP-3)</h4>
            <p>Since SCM is not commercially sterile, post-processing contamination is a critical concern. The product must be filled into containers using aseptic or near-aseptic techniques:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Metal cans:</strong> Tin-plated steel or aluminum, internally lacquered (food-grade epoxy-phenolic or acrylic coating). Cans are sterilized using superheated steam (180–200°C) or UV. Can integrity (double seam quality) is inspected per <strong>IS 9396</strong> (first operation, second operation overlap, body hook, cover hook, seam thickness measurements).</li>
                <li><strong>Laminated tubes:</strong> Aluminum-laminated (Al-PET-PE) tubes for consumer packs; filling head sterilized with H₂O₂ (35%) and hot air.</li>
                <li><strong>Flexible pouches:</strong> Metalized PET/PE laminates; nitrogen flushing to reduce headspace O₂.</li>
                <li><strong>Temperature at filling:</strong> 18–22°C (product must be adequately cooled post-crystallization to prevent condensation on inner can surface, which creates localized high-a<sub>w</sub> zones susceptible to mold growth).</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">HACCP Plan Summary for SCM</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">CCP</th>
                            <th class="p-2 border">Hazard</th>
                            <th class="p-2 border">Critical Limit</th>
                            <th class="p-2 border">Monitoring</th>
                            <th class="p-2 border">Corrective Action</th>
                            <th class="p-2 border">Verification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>CCP-1: Pre-heating</strong></td>
                            <td class="p-2 border">B: Survival of vegetative pathogens (<em>Salmonella, E. coli, Listeria, S. aureus</em>)</td>
                            <td class="p-2 border">≥110°C for ≥2 sec OR ≥85°C for ≥15 min</td>
                            <td class="p-2 border">Continuous temperature recording (RTD/thermocouple at outlet of holding tube); flow rate monitoring</td>
                            <td class="p-2 border">Divert non-conforming product back to balance tank; recalibrate; hold product for re-processing</td>
                            <td class="p-2 border">Daily calibration of temperature sensors (±0.5°C); annual holding tube validation; phosphatase test (must be negative)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>CCP-2: Cooling & Crystallization</strong></td>
                            <td class="p-2 border">Q: Lactose crystal size >10 µm (sandy texture); also B: if cooling too slow, thermophilic organisms may grow</td>
                            <td class="p-2 border">Product must reach ≤30°C within 45 min; seed added at 30±2°C; crystal size ≤10 µm</td>
                            <td class="p-2 border">Temperature profile recording; crystal size by microscopy (every batch, polarized light at 100×); seed particle size certificate of analysis</td>
                            <td class="p-2 border">If crystals >15 µm: product may be reworked by re-heating to 50°C to re-dissolve and re-seeding; adjust cooling rate</td>
                            <td class="p-2 border">Monthly audit of crystal size trend data; annual particle size analysis of seed stock</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>CCP-3: Filling/Seaming</strong></td>
                            <td class="p-2 border">B: Post-process contamination by osmophilic yeasts (<em>Torulopsis</em>, <em>Zygosaccharomyces</em>), molds</td>
                            <td class="p-2 border">Can internal environment: ≤10 cfu aerobic organisms post-sterilization; double seam: overlap ≥1.02 mm, tightness rating ≥70%</td>
                            <td class="p-2 border">Environmental swabs (filling room, hourly); can rinse tests (every 30 min); seam teardown (3 cans per 4-hour run, per seam station)</td>
                            <td class="p-2 border">Stop filling; re-sterilize cans; identify contamination source; quarantine affected production</td>
                            <td class="p-2 border">Monthly incubation test (37°C/14 days + 55°C/7 days) of finished product; annual environmental monitoring trend analysis</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">PART II: Evaporated Milk – Detailed Processing Science</h2>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Key Differences from SCM</h3>
            <p>Evaporated milk differs fundamentally from SCM in that it contains <strong>no added sugar</strong> and relies entirely on <strong>commercial sterilization</strong> for preservation. This creates unique scientific challenges:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Heat stability of casein:</strong> The product must withstand severe sterilization (~118°C/15 min) without coagulating. This is the central technological challenge.</li>
                <li><strong>Fat emulsion stability:</strong> Homogenization is essential to prevent fat separation in the concentrated product during sterilization and storage.</li>
                <li><strong>Color and flavor:</strong> Extensive Maillard browning occurs during sterilization, producing the characteristic tan color and "cooked" flavor.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Evaporated Milk Processing Flowchart</h3>
            <div class="space-y-2 font-mono text-center text-sm">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">
                    <strong>1. Milk Reception, Standardization (Fat:SNF = 1:2.25)</strong>
                    <br><span class="font-sans text-xs bg-gray-200 p-1 rounded mt-1 inline-block">PRP</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">
                    <strong>2. Forewarming (90–95°C / 10–25 min or 115–120°C / 2–5 sec)</strong>
                    <br><span class="font-sans text-xs bg-red-200 p-1 rounded mt-1 inline-block">CCP-1: Protein Stabilization & Pathogen Reduction</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">
                    <strong>3. Vacuum Evaporation (2–3 effects; 45–65°C)</strong>
                    <br>Concentration to 25–28% total solids
                    <br><span class="font-sans text-xs bg-orange-200 p-1 rounded mt-1 inline-block">oPRP</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">
                    <strong>4. Homogenization (two-stage: 125–175 / 25–35 bar)</strong>
                    <br><span class="font-sans text-xs bg-orange-200 p-1 rounded mt-1 inline-block">oPRP – Emulsion Stability</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">
                    <strong>5. Stabilizer Addition & Standardization</strong>
                    <br>Na₂HPO₄ / Na₃C₆H₅O₇ addition; pilot sterilization test
                    <br><span class="font-sans text-xs bg-orange-200 p-1 rounded mt-1 inline-block">oPRP</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">
                    <strong>6. Filling into Cans & Seaming</strong>
                    <br><span class="font-sans text-xs bg-gray-200 p-1 rounded mt-1 inline-block">PRP</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-red-100 border border-red-300 rounded">
                    <strong>7. In-Can Sterilization (115–120°C / 15–20 min; F₀ = 5–7)</strong>
                    <br>OR UHT (135–150°C / 4–8 sec) + Aseptic Filling
                    <br><span class="font-sans text-xs bg-red-200 p-1 rounded mt-1 inline-block">CCP-2: Commercial Sterility</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">
                    <strong>8. Cooling (to ≤35°C within 20 min) & Can Inversion</strong>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">
                    <strong>9. Labeling, Incubation Testing & Storage</strong>
                </div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Critical Process Science for Evaporated Milk</h3>

            <h4 class="text-lg font-semibold text-gray-700 mt-5 mb-2">A. Heat Stability and Protein Chemistry</h4>
            <p>The heat stability of milk is defined as the time required for visible coagulation at a given temperature (typically measured as the <strong>Heat Coagulation Time, HCT</strong>, at 140°C). The HCT of bovine milk shows a characteristic <strong>Type A profile</strong> with a <em>maximum at pH 6.7</em> and a <em>minimum at pH 6.9</em> when plotted against pH. This is governed by:</p>
            <ol class="list-decimal list-outside pl-5 space-y-2 mt-2">
                <li><strong>κ-Casein dissociation:</strong> At pH > 6.7, κ-casein (the micelle-stabilizing surface protein) dissociates from the micelle, exposing the calcium-sensitive α<sub>s1</sub>- and β-caseins, leading to calcium-mediated coagulation.</li>
                <li><strong>β-Lactoglobulin–κ-casein complexation:</strong> During forewarming (>70°C), denatured β-Lg forms disulfide bonds with κ-casein on the micelle surface, creating a "heat-stable" coating. This is the <em>primary mechanism</em> by which forewarming improves the heat stability of evaporated milk.</li>
                <li><strong>Calcium ion activity:</strong> Free Ca²⁺ promotes casein aggregation. Forewarming reduces ionic calcium by precipitating it as <strong>calcium phosphate</strong> (Ca₃(PO₄)₂) within the micelle (colloidal calcium phosphate, CCP), shifting the calcium equilibrium.</li>
                <li><strong>Urea:</strong> Natural urea in milk (20–40 mg/100 mL) decomposes at high temperatures to NH₃ and CO₂, increasing pH during sterilization and acting as a natural heat stabilizer.</li>
            </ol>
            <p class="mt-3"><strong>Salt Balance Adjustment (Stabilization):</strong></p>
            <p>After concentration, a small quantity of the concentrate is subjected to a <strong>pilot sterilization test</strong>: several sealed test tubes containing the concentrate with varying additions of stabilizer salts (typically disodium hydrogen phosphate, Na₂HPO₄, or trisodium citrate, Na₃C₆H₅O₇) are autoclaved at 115°C for 15 minutes. The minimum salt addition that prevents coagulation (while avoiding excessive viscosity or color changes) is selected. The mechanism:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Phosphates:</strong> Sequester Ca²⁺ ions → Ca₃(PO₄)₂ precipitation → reduce ionic Ca²⁺ → reduce calcium-bridging of casein → improve stability. They also raise pH slightly toward the HCT maximum.</li>
                <li><strong>Citrates:</strong> Similarly chelate Ca²⁺ (calcium citrate, Ca₃(C₆H₅O₇)₂) and adjust pH. Citrate is more effective at raising pH but may impart slight flavor changes.</li>
                <li>Typical addition levels: 0.05–0.15% (w/w) of the concentrate.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-5 mb-2">B. Homogenization Science</h4>
            <p>Homogenization of concentrated milk (25–28% total solids, 8–9% fat) is essential because:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li>Concentration increases the <strong>fat volume fraction (φ)</strong> from ~0.04 in raw milk to ~0.09 in evaporated milk, increasing the probability of droplet collision and coalescence.</li>
                <li>During sterilization (118°C/15 min), <strong>native milk fat globule membrane (MFGM)</strong> proteins are denatured, destabilizing the emulsion. Homogenization creates new, smaller fat globules (0.5–2 µm, down from native 1–10 µm) coated with a <strong>secondary membrane</strong> composed primarily of caseins and whey proteins adsorbed from the serum phase.</li>
                <li>According to <strong>Stokes' Law</strong>, the creaming velocity (v) is: v = 2r²(ρ<sub>p</sub> − ρ<sub>f</sub>)g / 9η. Reducing the fat globule radius (r) from 2 µm to 0.5 µm reduces creaming velocity by <strong>16-fold</strong> (v ∝ r²).</li>
            </ul>
            <p class="mt-2"><strong>Two-stage homogenization</strong> is used at 60–65°C:</p>
            <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
                <li><strong>First stage:</strong> 125–175 bar – disrupts fat globules</li>
                <li><strong>Second stage:</strong> 25–35 bar – breaks up fat globule clusters formed by shared casein bridges (prevents "homogenization clustering" which would increase apparent viscosity and promote creaming)</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-5 mb-2">C. In-Can Sterilization (CCP-2)</h4>
            <p>The thermal process for evaporated milk is designed to achieve <strong>commercial sterility</strong>, targeting <em>Clostridium botulinum</em> (the most heat-resistant pathogen of public health significance) and <em>Bacillus stearothermophilus</em> (now <em>Geobacillus stearothermophilus</em>, the most heat-resistant thermophilic spoilage organism).</p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Target Organism</th>
                            <th class="p-2 border">D₁₂₁ (min)</th>
                            <th class="p-2 border">z-value (°C)</th>
                            <th class="p-2 border">Required Reduction</th>
                            <th class="p-2 border">Process Requirement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><em>C. botulinum</em></td>
                            <td class="p-2 border">0.21</td>
                            <td class="p-2 border">10</td>
                            <td class="p-2 border">12D (bot cook)</td>
                            <td class="p-2 border">F₀ = 12 × 0.21 = 2.52 min</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><em>G. stearothermophilus</em></td>
                            <td class="p-2 border">4.0–5.0</td>
                            <td class="p-2 border">10</td>
                            <td class="p-2 border">5D minimum</td>
                            <td class="p-2 border">F₀ = 5 × 5 = 25 min</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2">Evaporated milk sterilization typically delivers <strong>F₀ = 5–7 minutes</strong>, which provides a 12D process for <em>C. botulinum</em> with a safety margin, but only about 1–1.5D for <em>G. stearothermophilus</em>. This is acceptable because thermophilic spoilage organisms only grow at temperatures >45°C, and the product is stored below this temperature.</p>
            <p class="mt-2">The F₀ value is calculated by integrating the lethal rate (L) over the entire thermal process:</p>
            <div class="bg-gray-100 p-3 rounded text-center my-3 font-mono">
                F₀ = ∫₀ᵗ 10<sup>(T(t)−121)/z</sup> dt
            </div>
            <p>where T(t) is the product temperature at time t at the <strong>slowest-heating point</strong> (typically the geometric center for conduction-heated products).</p>

            <p class="mt-3"><strong>Sterilization Equipment:</strong></p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Batch retort (still retort):</strong> Cans stacked on racks; steam at 115–120°C; processing time: 15–20 min at temperature + come-up and cool-down. Limited to small-scale operations.</li>
                <li><strong>Continuous rotary sterilizer (hydrostatic):</strong> Cans travel on a conveyor through a hydrostatic water column that maintains steam pressure. Can rotation (<strong>end-over-end or axial rotation at 15–25 rpm</strong>) promotes internal convection currents, reducing process time by 30–40% and improving uniformity. Typical cycle: ~13 min at 118°C with rotation.</li>
                <li><strong>UHT processing:</strong> Modern alternative; milk is sterilized at <strong>135–150°C for 4–8 seconds</strong> using direct (steam injection/infusion) or indirect (tubular/plate) heat exchangers, followed by aseptic packaging. UHT evaporated milk has less browning, better nutritional retention, but requires stringent aseptic packaging.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-5 mb-2">D. Maillard Browning During Sterilization</h4>
            <p>The characteristic brown color and caramel-like flavor of evaporated milk result from the <strong>Maillard reaction</strong> (non-enzymatic browning) between:</p>
            <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
                <li><strong>Reducing sugars:</strong> Primarily lactose (a reducing disaccharide, containing a free hemiacetal/hemiketal group)</li>
                <li><strong>Free amino groups:</strong> ε-amino groups of lysine residues in casein and whey proteins (also α-amino groups of free amino acids)</li>
            </ul>
            <p class="mt-2"><strong>Reaction Pathway:</strong></p>
            <ol class="list-decimal list-outside pl-5 space-y-2 mt-2">
                <li><strong>Initial condensation:</strong> Lactose + R-NH₂ → lactulosyl-lysine (Amadori product) – no color change</li>
                <li><strong>Amadori rearrangement & degradation:</strong> Lactulosyl-lysine → deoxysones → furfural, hydroxymethylfurfural (HMF), reductones</li>
                <li><strong>Advanced Maillard products:</strong> Strecker degradation → aldehydes, pyrazines (flavor compounds); polymerization → melanoidins (brown polymers, MW 10,000–100,000 Da)</li>
            </ol>
            <p class="mt-2">The rate of Maillard browning follows Arrhenius kinetics with activation energy E<sub>a</sub> ≈ 100–130 kJ/mol and Q₁₀ ≈ 2.5–3.5. This means browning roughly triples for each 10°C increase. UHT processing (higher temperature, much shorter time) produces <strong>less browning</strong> than retort sterilization because the high activation energy means browning is more temperature-sensitive than microbial destruction (which has E<sub>a</sub> ≈ 250–350 kJ/mol for spores). This is the fundamental thermodynamic advantage of HTST/UHT processing.</p>

            <p class="mt-2"><strong>Nutritional Consequences of Maillard Reaction:</strong></p>
            <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
                <li><strong>Lysine blockage:</strong> 15–25% of available lysine is rendered nutritionally unavailable (Amadori product formation). Measured by reactive lysine assay (FDNB or homoarginine method).</li>
                <li><strong>Vitamin destruction:</strong> Thiamine (B₁): 30–50% loss; Vitamin C: 60–80% loss; Vitamin B₁₂: 10–20% loss. Riboflavin (B₂) and niacin are relatively stable.</li>
                <li><strong>Lactulose formation:</strong> Heat-induced isomerization of lactose → lactulose (a non-absorbable disaccharide). Lactulose content serves as an indicator of heat treatment intensity: UHT milk ~50–200 mg/L; retort-sterilized evaporated milk: 800–1400 mg/L; raw milk: none.</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">PART III: Quality Defects, Storage Changes & Troubleshooting</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Defects in Sweetened Condensed Milk</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Defect</th>
                            <th class="p-2 border">Scientific Cause</th>
                            <th class="p-2 border">Prevention/Control</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Sandy/Gritty texture</strong></td>
                            <td class="p-2 border">Large lactose crystals (>15 µm) due to: slow cooling, insufficient seeding, inadequate agitation, or sugar ratio >65% (excessive supersaturation)</td>
                            <td class="p-2 border">Rapid cooling; seed at 30°C with 0.02% fine lactose (≤5 µm); vigorous agitation; control sugar ratio 62.5–64.5%</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Age thickening / Gelation</strong></td>
                            <td class="p-2 border">Progressive increase in viscosity during storage due to: (1) protein-protein interactions (disulfide cross-linking), (2) Maillard cross-linking of proteins, (3) crystallization of calcium phosphate shifting Ca²⁺ equilibrium. Insufficient forewarming leaves reactive β-Lg that continues to aggregate.</td>
                            <td class="p-2 border">Adequate forewarming (>100°C for >90% WPD); store at ≤25°C; avoid temperature cycling; reduce protein/lactose ratio</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Browning</strong></td>
                            <td class="p-2 border">Maillard reaction between lactose and lysine residues. Rate accelerated by: high storage temperature, high pH, presence of Cu/Fe catalysts, O₂ presence</td>
                            <td class="p-2 border">Store at ≤25°C; minimize headspace O₂ (N₂ flushing); use food-grade lacquered cans (prevent metal leaching); optimize forewarming to minimize HMF precursors</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sugar crystallization (sucrose)</strong></td>
                            <td class="p-2 border">Sucrose supersaturation at low temperatures; temperature cycling causes dissolution and recrystallization at nucleation sites</td>
                            <td class="p-2 border">Control sugar ratio ≤64.5%; store at constant temperature; avoid storage below 10°C</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>"Buttons" (white lumps)</strong></td>
                            <td class="p-2 border">Localized casein coagulation at the air-product interface due to surface drying and concentration; often associated with <em>Micrococcus</em> or <em>Staphylococcus</em> contamination that locally alters pH</td>
                            <td class="p-2 border">Minimize headspace; hygienic filling; invert cans periodically during storage</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Blown/Swollen cans</strong></td>
                            <td class="p-2 border">Gas (CO₂) production by <strong>osmophilic yeasts</strong> (<em>Torulopsis</em>, <em>Zygosaccharomyces bailii</em>) fermenting sucrose; or by <em>Cladosporium</em> and <em>Aspergillus</em> molds</td>
                            <td class="p-2 border">Stringent hygiene post-evaporation; sterilize filling equipment; microbiological testing of sugar supply; environmental monitoring of filling room</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Rancid/Soapy flavor</strong></td>
                            <td class="p-2 border">Lipolysis by residual heat-stable bacterial lipases (from psychrotrophic contamination of raw milk); releases short-chain fatty acids (C₄:₀ butyric, C₆:₀ caproic, C₈:₀ caprylic)</td>
                            <td class="p-2 border">Low psychrotrophic count in raw milk (<10,000/mL); high-temperature forewarming; minimize cold storage of raw milk (≤48 hours)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fat separation</strong></td>
                            <td class="p-2 border">Free fat layer due to insufficient emulsion stability; inadequate or absent homogenization; high storage temperature reduces viscosity → enhanced Stokes creaming</td>
                            <td class="p-2 border">Single-stage homogenization at 70–100 bar before or after evaporation; maintain product viscosity via adequate forewarming</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Defects in Evaporated Milk</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Defect</th>
                            <th class="p-2 border">Scientific Cause</th>
                            <th class="p-2 border">Prevention/Control</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Coagulation during sterilization</strong></td>
                            <td class="p-2 border">Heat-induced casein destabilization: κ-casein dissociation, Ca²⁺ bridging of para-casein, collapse of CCP equilibrium. Often due to: milk from late-lactation cows (high ionic Ca, low κ-casein), high mineral content, pH too high or too low, inadequate forewarming</td>
                            <td class="p-2 border">Pilot sterilization test; Na₂HPO₄/citrate addition (0.05–0.15%); adequate forewarming; reject late-lactation/mastitic milk; adjust pH to 6.5–6.6</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Age gelation (during storage)</strong></td>
                            <td class="p-2 border">Three-dimensional protein gel formation during storage (months to years): (1) κ-casein–β-Lg complexes slowly aggregate; (2) residual heat-stable proteases (bacterial plasmin-like enzymes) hydrolyze casein, producing para-κ-casein which lacks steric stabilization; (3) Maillard cross-linking</td>
                            <td class="p-2 border">Use milk with low SPC and low psychrotrophic count; high forewarming temperature; store at 15–25°C; avoid >30°C storage</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fat separation / "Oiling off"</strong></td>
                            <td class="p-2 border">Incomplete or ineffective homogenization; fat globules >2 µm cream according to Stokes' Law; exacerbated if product stored without rotation</td>
                            <td class="p-2 border">Two-stage homogenization at correct pressure (125–175/25–35 bar); homogenize at 60–65°C; store cans inverted or rotate monthly</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Excessive browning</strong></td>
                            <td class="p-2 border">Over-sterilization (F₀ >10); high pH (>6.7); Cu/Fe contamination (catalyze Maillard); high initial lactose content</td>
                            <td class="p-2 border">Optimize F₀ (target 5–7); pH control; stainless steel equipment; no copper fittings</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Flat sour spoilage</strong></td>
                            <td class="p-2 border"><em>Bacillus coagulans</em> or <em>B. licheniformis</em> spore survival + germination; acid production without gas → no can swelling but curdled, sour product</td>
                            <td class="p-2 border">Adequate F₀; rapid cooling post-sterilization; low initial spore load in milk</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Thermophilic spoilage (TA/TNS)</strong></td>
                            <td class="p-2 border"><em>G. stearothermophilus</em> (thermophilic acid, TA) or <em>Clostridium thermosaccharolyticum</em> (thermophilic non-sulfide, TNS, gas + acid) growth if product stored at >40°C</td>
                            <td class="p-2 border">Rapid cooling after sterilization to ≤35°C; store at ≤30°C; incubation testing at 55°C/7 days</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shelf Life and Storage Science</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">SCM</th>
                            <th class="p-2 border">Evaporated Milk</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border"><strong>Shelf life (typical)</strong></td><td class="p-2 border">12–24 months at ≤25°C</td><td class="p-2 border">12–18 months at ≤25°C</td></tr>
                        <tr><td class="p-2 border"><strong>Primary limiting factors</strong></td><td class="p-2 border">Age thickening, browning, crystal growth</td><td class="p-2 border">Age gelation, browning, fat separation</td></tr>
                        <tr><td class="p-2 border"><strong>Temperature coefficient (Q₁₀) for browning</strong></td><td class="p-2 border">~2.5–3.0 (shelf life halves for every 10°C increase)</td><td class="p-2 border">~2.5–3.0</td></tr>
                        <tr><td class="p-2 border"><strong>Optimal storage temperature</strong></td><td class="p-2 border">15–20°C (avoid <10°C: sucrose crystallization risk)</td><td class="p-2 border">15–25°C (avoid >30°C: accelerated gelation)</td></tr>
                        <tr><td class="p-2 border"><strong>After opening</strong></td><td class="p-2 border">Refrigerate (2–4°C), use within 2 weeks</td><td class="p-2 border">Refrigerate, use within 3–5 days</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Rheological Properties</h3>
            <p>SCM is a <strong>non-Newtonian, pseudoplastic (shear-thinning) fluid</strong> whose apparent viscosity depends on shear rate, temperature, and composition:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Apparent viscosity at 25°C:</strong> 2,000–5,000 mPa·s (varies with total solids, forewarming, and age)</li>
                <li><strong>Power law model:</strong> τ = K · γ̇<sup>n</sup>, where K = consistency index (Pa·s<sup>n</sup>), n = flow behavior index (~0.7–0.85 for SCM, confirming pseudoplastic behavior)</li>
                <li><strong>Thixotropy:</strong> SCM shows mild thixotropic behavior (viscosity decreases with time at constant shear and recovers upon rest) due to disruption and reformation of lactose crystal–protein aggregation networks</li>
                <li>Viscosity increases during storage due to age thickening (protein cross-linking and Maillard polymerization)</li>
            </ul>
            <p class="mt-2">Evaporated milk is also pseudoplastic but with lower viscosity (~10–40 mPa·s at 25°C when freshly processed). After sterilization, viscosity increases to ~40–100 mPa·s due to heat-induced protein aggregation.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Compositional Analysis of Typical Products</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Component</th>
                            <th class="p-2 border">Whole Milk</th>
                            <th class="p-2 border">Sweetened Condensed Milk</th>
                            <th class="p-2 border">Evaporated Milk</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Water (%)</td><td class="p-2 border">87.3</td><td class="p-2 border">25–27</td><td class="p-2 border">73–74</td></tr>
                        <tr><td class="p-2 border">Milk Fat (%)</td><td class="p-2 border">3.9</td><td class="p-2 border">8.5–9.5</td><td class="p-2 border">7.5–8.5</td></tr>
                        <tr><td class="p-2 border">Protein (%)</td><td class="p-2 border">3.3</td><td class="p-2 border">7.5–8.5</td><td class="p-2 border">6.5–7.5</td></tr>
                        <tr><td class="p-2 border">Lactose (%)</td><td class="p-2 border">4.7</td><td class="p-2 border">10.5–12.5</td><td class="p-2 border">9.5–10.5</td></tr>
                        <tr><td class="p-2 border">Sucrose (%)</td><td class="p-2 border">0</td><td class="p-2 border">43–45</td><td class="p-2 border">0</td></tr>
                        <tr><td class="p-2 border">Ash/Minerals (%)</td><td class="p-2 border">0.7</td><td class="p-2 border">1.5–1.8</td><td class="p-2 border">1.5–1.8</td></tr>
                        <tr><td class="p-2 border">Total Solids (%)</td><td class="p-2 border">12.7</td><td class="p-2 border">73–75</td><td class="p-2 border">26–28</td></tr>
                        <tr><td class="p-2 border">Energy (kcal/100g)</td><td class="p-2 border">62</td><td class="p-2 border">320–330</td><td class="p-2 border">134–140</td></tr>
                        <tr><td class="p-2 border">Water Activity (a<sub>w</sub>)</td><td class="p-2 border">0.993</td><td class="p-2 border">0.83–0.85</td><td class="p-2 border">0.96</td></tr>
                        <tr><td class="p-2 border">pH</td><td class="p-2 border">6.6–6.7</td><td class="p-2 border">6.3–6.5</td><td class="p-2 border">6.2–6.4 (post-sterilization)</td></tr>
                        <tr><td class="p-2 border">Titratable Acidity (%LA)</td><td class="p-2 border">0.14–0.16</td><td class="p-2 border">0.35–0.45</td><td class="p-2 border">0.30–0.40</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Analytical Methods for Quality Control</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Test Parameter</th>
                            <th class="p-2 border">Method</th>
                            <th class="p-2 border">Standard Reference</th>
                            <th class="p-2 border">Specification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Total Solids</td><td class="p-2 border">Gravimetric (oven-drying at 100°C to constant weight); refractometry for rapid screening</td><td class="p-2 border">IS:1166 / AOAC 920.115</td><td class="p-2 border">SCM: ≥72%; EM: ≥25%</td></tr>
                        <tr><td class="p-2 border">Milk Fat</td><td class="p-2 border">Gerber method (butyrometric); Rose-Gottlieb (gravimetric, reference)</td><td class="p-2 border">IS:1224 / AOAC 905.02</td><td class="p-2 border">SCM: ≥9.0%; EM: ≥8.0%</td></tr>
                        <tr><td class="p-2 border">Sucrose</td><td class="p-2 border">Polarimetric (Lane-Eynon for total reducing sugars before and after inversion); HPLC for precision</td><td class="p-2 border">IS:1479 Part III / AOAC 896.01</td><td class="p-2 border">SCM: ≥40%</td></tr>
                        <tr><td class="p-2 border">Lactose crystal size</td><td class="p-2 border">Polarized light microscopy (100× magnification); image analysis with calibrated micrometer eyepiece or digital imaging</td><td class="p-2 border">In-house / ADMI method</td><td class="p-2 border">≤10 µm (max. 90th percentile)</td></tr>
                        <tr><td class="p-2 border">Viscosity</td><td class="p-2 border">Brookfield viscometer (spindle #4, 12 rpm, 25°C); falling ball method; capillary viscometry</td><td class="p-2 border">In-house</td><td class="p-2 border">SCM: 2000–5000 mPa·s; EM: 40–100 mPa·s</td></tr>
                        <tr><td class="p-2 border">HMF (Hydroxymethylfurfural)</td><td class="p-2 border">Spectrophotometric (Keeney & Bassette method, A284nm after TCA precipitation); HPLC</td><td class="p-2 border">AOAC / IDF</td><td class="p-2 border">Indicator of heat treatment intensity</td></tr>
                        <tr><td class="p-2 border">Commercial sterility (EM)</td><td class="p-2 border">Incubation test: 37°C/14 days (mesophiles) + 55°C/7 days (thermophiles); visual inspection (swelling, leakage) + microbial analysis</td><td class="p-2 border">IS:2551 / FDA 21 CFR 113</td><td class="p-2 border">No microbial growth; no can defects</td></tr>
                        <tr><td class="p-2 border">Can seam integrity</td><td class="p-2 border">Double seam teardown and measurement (seam thickness, seam length, body hook, cover hook, overlap, tightness %)</td><td class="p-2 border">IS:9396 / ASTM E2520</td><td class="p-2 border">Overlap ≥1.02 mm; tightness ≥70%</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Mass Balance and Yield Calculations</h3>
            <p><strong>Example: Production of 1,000 kg Sweetened Condensed Milk</strong></p>
            <p>Target composition: 9% fat, 22% SNF, 44% sucrose, 25% water (Total solids: 75%)</p>
            <div class="bg-gray-100 p-4 rounded my-3 font-mono text-sm">
                <strong>Given:</strong>
                <br>Standardized milk: 3.6% fat, 8.8% SNF (fat:SNF = 1:2.44)
                <br>Target SCM: 9% fat, 22% SNF, 44% sucrose, 25% water
                <br><br>
                <strong>Step 1: Milk solids required in 1000 kg SCM</strong>
                <br>Fat = 90 kg; SNF = 220 kg; Total milk solids = 310 kg
                <br><br>
                <strong>Step 2: Milk required</strong>
                <br>From fat: 90/0.036 = 2,500 kg
                <br>Check SNF: 2,500 × 0.088 = 220 kg ✓
                <br><br>
                <strong>Step 3: Sugar required</strong>
                <br>Sucrose in 1000 kg SCM = 440 kg
                <br><br>
                <strong>Step 4: Water to be removed</strong>
                <br>Water in milk: 2,500 × (1 − 0.124) = 2,190 kg
                <br>Water in sugar syrup (65°Brix): 440/0.65 = 677 kg syrup → 237 kg water from syrup
                <br>Total water in = 2,190 + 237 = 2,427 kg
                <br>Water in final product = 250 kg
                <br><strong>Water to evaporate = 2,427 − 250 = 2,177 kg</strong>
                <br><br>
                <strong>Step 5: Concentration ratio</strong>
                <br>Volume reduction ≈ 2,500 / (1000 − 440) ≈ 4.5:1 (volume of milk per volume of milk portion in SCM)
                <br><br>
                <strong>Step 6: Sugar ratio check</strong>
                <br>Sugar ratio = 440 / (440 + 250) × 100 = <strong>63.8%</strong> ✓ (within 62.5–64.5%)
                <br><br>
                <strong>Step 7: Steam requirement (for triple-effect evaporator with TVR)</strong>
                <br>Steam economy ≈ 3.0
                <br>Steam required = 2,177 / 3.0 ≈ <strong>726 kg steam</strong>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Environmental and Sustainability Considerations</h3>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Energy consumption:</strong> Evaporation is the most energy-intensive unit operation in SCM production. A single-effect evaporator requires ~2,700 kJ/kg water evaporated (≈ latent heat of vaporization). Multi-effect systems with MVR can reduce this to &lt;200 kJ/kg water evaporated.</li>
                <li><strong>Condensate recovery:</strong> Vapor condensate from the evaporator is essentially distilled water and is recovered for CIP, boiler feed water, or cow drinking water, reducing freshwater consumption.</li>
                <li><strong>BOD/COD of effluent:</strong> Dairy processing wastewater from condensed milk plants has a BOD₅ of 1,500–3,000 mg/L and COD of 3,000–6,000 mg/L, primarily from milk solid losses. Treatment involves screening → fat removal (DAF) → biological treatment (activated sludge/UASB).</li>
                <li><strong>Carbon footprint:</strong> Approximately 1.2–2.0 kg CO₂-eq per kg of SCM (including farm-gate emissions), of which ~25% is attributable to processing energy.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Recent Advances and Innovations</h3>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Membrane pre-concentration:</strong> Reverse osmosis (RO) or nanofiltration (NF) is increasingly used to pre-concentrate milk from 12% to 25–30% total solids <em>before</em> evaporation. RO operates at ambient temperature (5–50°C) and 20–40 bar pressure, consuming only electrical energy (~8–15 kWh/m³ permeate, equivalent to ~30–55 kJ/kg water removed). This reduces the evaporator load by 50–70% and virtually eliminates thermal damage during pre-concentration.</li>
                <li><strong>Ohmic heating:</strong> Volumetric heating using electrical resistance of the product (no heat transfer surface → no fouling). Being explored for forewarming and UHT treatment of concentrated milks.</li>
                <li><strong>Ultrasound-assisted crystallization:</strong> Power ultrasound (20–40 kHz, 10–50 W/cm²) applied during cooling enhances nucleation rate and produces finer lactose crystals without seeding, potentially replacing the seeding step.</li>
                <li><strong>Clean-label SCM:</strong> Development of reduced-sugar or alternative-sweetener SCM (using trehalose, erythritol, or stevia) while maintaining microbiological safety through multi-hurdle approaches (a<sub>w</sub> + pH + preservatives).</li>
                <li><strong>Plant-based condensed milks:</strong> Coconut, soy, and oat-based condensed milk analogues require different processing parameters due to different protein chemistry (no casein micelle system), fat droplet characteristics, and Maillard precursor profiles.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Key References</h3>
            <ul class="list-disc list-outside pl-5 space-y-1 mt-2 text-sm">
                <li>Bylund, G. (2015). <em>Dairy Processing Handbook</em>. Tetra Pak Processing Systems AB, Lund, Sweden.</li>
                <li>Fox, P.F., Uniacke-Lowe, T., McSweeney, P.L.H., & O'Mahony, J.A. (2015). <em>Dairy Chemistry and Biochemistry</em>. 2nd ed. Springer, Cham.</li>
                <li>Walstra, P., Wouters, J.T.M., & Geurts, T.J. (2006). <em>Dairy Science and Technology</em>. 2nd ed. CRC Press, Boca Raton.</li>
                <li>Singh, H. (2004). Heat stability of milk. <em>International Journal of Dairy Technology</em>, 57(2-3), 111–119.</li>
                <li>Nickerson, T.A. (1974). Lactose crystallization in ice cream. IV. Factors responsible for reduced sandiness. <em>Journal of Dairy Science</em>, 57(12), 1334–1339.</li>
                <li>Codex Alimentarius Commission. CXS 281-1971 (Evaporated Milks); CXS 282-1971 (Sweetened Condensed Milks).</li>
                <li>FSSAI. Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011. Schedule I, Part I.</li>
                <li>FDA. 21 CFR Part 113 – Thermally Processed Low-Acid Foods Packaged in Hermetically Sealed Containers.</li>
            </ul>
        `
    },
    hi: {
        title: "Condensed & Evaporated Milk Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Condensed Milk ka Introduction</h3>
            <p>Condensed milk products woh dairy products hain jinmein se paani ko partially remove kar diya jaata hai vacuum evaporation ke through (lagbhag 60% paani nikal diya jaata hai), aur inmein sugar milaya bhi ja sakta hai ya nahi bhi. Ye products food preservation science mein ek unique position rakhte hain, kyunki ye do alag-alag <strong>hurdle technology</strong> strategies use karte hain microbiological stability achieve karne ke liye:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Sweetened Condensed Milk (SCM):</strong> Iska preservation primarily <em>water activity (a<sub>w</sub>) depression</em> se hota hai. High sucrose concentration (aqueous phase mein lagbhag 44–46% w/w, matlab sugar-in-water ratio 62–65%) aur dissolved milk solids milke a<sub>w</sub> ko approximately <strong>0.83–0.85</strong> tak gira dete hain. Ye value zyaadatar spoilage bacteria ke growth threshold (<em>a<sub>w</sub></em> &lt; 0.91) aur bahut si yeasts (<em>a<sub>w</sub></em> &lt; 0.88) se neeche hai. Product <em>commercially sterile nahi hota</em> – sirf isi physicochemical barrier pe depend karta hai.</li>
                <li><strong>Evaporated Milk (EM):</strong> Ismein koi added sugar nahi hota aur preservation <strong>in-container sterilization</strong> se achieve hota hai (typically 115–120°C for 15–20 min, F<sub>0</sub> value 5–7 minutes deliver karta hai), jisse product commercially sterile ban jaata hai. Evaporated milk ka a<sub>w</sub> kaafi high rehta hai (~0.96), isliye thermal process zaroori hai.</li>
            </ul>
            <p class="mt-3">Concentrated milks ki scientific foundation <strong>Gail Borden</strong> ne 1856 mein establish ki thi (US Patent No. 15,553), jinhone sweetened milk ka vacuum evaporation pioneer kiya. Nicolas Appert ka pehle ka kaam thermal preservation pe (1810) evaporated milk technology ka base hai. Aaj ke time mein, ye products <strong>Codex Alimentarius Standard CXS 281-1971</strong> (evaporated milks ke liye) aur <strong>CXS 282-1971</strong> (sweetened condensed milks ke liye) se govern hote hain, saath mein national regulations bhi laagu hote hain.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Water Activity aur Preservation ka Science</h3>
            <p>Water activity (a<sub>w</sub>) ek thermodynamic measure hai jo batata hai ki food system mein paani ki energy status kya hai. Ise define karte hain food mein water ke vapor pressure (p) aur pure water ke vapor pressure (p₀) ke ratio se, same temperature pe:</p>
            <div class="bg-gray-100 p-3 rounded text-center my-3 font-mono">
                a<sub>w</sub> = p / p₀ = γ · X<sub>w</sub>
            </div>
            <p>Yahaan γ activity coefficient hai aur X<sub>w</sub> water ka mole fraction hai. Sweetened condensed milk mein, a<sub>w</sub> ki depression <strong>Raoult's Law</strong> follow karti hai (non-ideal solutions ke liye modified). Sucrose ke molecules paani ke saath bahut extensively hydrogen-bond karte hain, jisse microbial metabolism ke liye available free water molecules ki sankhya kam ho jaati hai. Sucrose concentration aur a<sub>w</sub> ka 25°C pe relationship <strong>Norrish equation</strong> se approximate kiya ja sakta hai:</p>
            <div class="bg-gray-100 p-3 rounded text-center my-3 font-mono">
                a<sub>w</sub> = X<sub>w</sub> · exp(−K · X<sub>s</sub>²)
            </div>
            <p>Yahaan X<sub>s</sub> sucrose ka mole fraction hai aur K sucrose ke liye Norrish constant hai (K ≈ 6.47). Neeche di gayi table mein condensed milk ke liye relevant key microorganisms ke growth ke liye minimum a<sub>w</sub> dikhaya gaya hai:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Microorganism</th>
                            <th class="p-2 border">Growth ke liye Minimum a<sub>w</sub></th>
                            <th class="p-2 border">SCM mein Relevance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border"><em>Clostridium botulinum</em> (Type A)</td><td class="p-2 border">0.94</td><td class="p-2 border">SCM ke a<sub>w</sub> se inhibit ho jaata hai</td></tr>
                        <tr><td class="p-2 border"><em>Salmonella</em> spp.</td><td class="p-2 border">0.94</td><td class="p-2 border">Inhibit ho jaata hai</td></tr>
                        <tr><td class="p-2 border"><em>Staphylococcus aureus</em> (toxin production)</td><td class="p-2 border">0.86</td><td class="p-2 border">Marginal – SCM ke a<sub>w</sub> ke karib hai</td></tr>
                        <tr><td class="p-2 border">Zyaadatar spoilage bacteria</td><td class="p-2 border">0.91</td><td class="p-2 border">Inhibit ho jaate hain</td></tr>
                        <tr><td class="p-2 border">Zyaadatar yeasts</td><td class="p-2 border">0.88</td><td class="p-2 border">Inhibit ho jaati hain</td></tr>
                        <tr><td class="p-2 border"><strong>Osmophilic yeasts</strong> (<em>Torulopsis</em>, <em>Zygosaccharomyces</em>)</td><td class="p-2 border">0.62–0.65</td><td class="p-2 border"><strong>Sabse bada spoilage risk</strong></td></tr>
                        <tr><td class="p-2 border">Xerophilic molds (<em>Aspergillus</em>)</td><td class="p-2 border">0.65</td><td class="p-2 border">Surface pe spoilage ka risk</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3 bg-yellow-50 p-3 rounded border-l-4 border-yellow-400"><strong>⚠ Zaroori Baat:</strong> SCM ka a<sub>w</sub> ~0.83 hone se zyaadatar pathogens aur spoilage organisms inhibit ho jaate hain, lekin <em>osmophilic yeasts</em> (khaas taur pe <em>Torulopsis</em> spp.) a<sub>w</sub> 0.62 jitne kam pe bhi grow kar sakti hain. Ye SCM ke <strong>sabse pramukh spoilage organisms</strong> hain aur inhe post-evaporation handling, cooling, aur packaging ke dauran strict hygiene se control kiya jaata hai. Inki presence se gas production ("blown cans"), off-flavors, aur visible surface colonies hoti hain.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Regulatory Standards: FSSAI aur Codex Alimentarius</h3>
            <p>Food Safety and Standards Authority of India (FSSAI) ne <strong>FSS (Food Products Standards and Food Additives) Regulations, 2011</strong> ke under concentrated milks ke liye compositional requirements set kiye hain. Ye broadly Codex standards (CXS 281 aur CXS 282) se aligned hain lekin kuch India-specific modifications ke saath.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Product Type</th>
                            <th class="p-2 border">Min. Total Milk Solids % (m/m)</th>
                            <th class="p-2 border">Min. Milk Fat % (m/m)</th>
                            <th class="p-2 border">Sucrose % (m/m)</th>
                            <th class="p-2 border">Codex Standard Reference</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Sweetened Condensed Milk (Full cream)</strong></td>
                            <td class="p-2 border">31.0 (FSSAI) / 28.0 (Codex)</td>
                            <td class="p-2 border">9.0 (FSSAI) / 8.0 (Codex)</td>
                            <td class="p-2 border">Min. 40.0</td>
                            <td class="p-2 border">CXS 282-1971</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sweetened Condensed Partly Skimmed Milk</strong></td>
                            <td class="p-2 border">28.0</td>
                            <td class="p-2 border">1.0 – 8.0</td>
                            <td class="p-2 border">Min. 40.0</td>
                            <td class="p-2 border">CXS 282-1971</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sweetened Condensed Skimmed Milk</strong></td>
                            <td class="p-2 border">26.0 (FSSAI) / 24.0 (Codex)</td>
                            <td class="p-2 border">Max 0.5 (FSSAI) / Max 1.0 (Codex)</td>
                            <td class="p-2 border">Min. 40.0</td>
                            <td class="p-2 border">CXS 282-1971</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Evaporated Milk</strong></td>
                            <td class="p-2 border">26.0 (FSSAI) / 25.0 (Codex)</td>
                            <td class="p-2 border">8.0 (FSSAI) / 7.5 (Codex)</td>
                            <td class="p-2 border">N/A</td>
                            <td class="p-2 border">CXS 281-1971</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Evaporated Skimmed Milk</strong></td>
                            <td class="p-2 border">20.0</td>
                            <td class="p-2 border">Max 1.0</td>
                            <td class="p-2 border">N/A</td>
                            <td class="p-2 border">CXS 281-1971</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3"><strong>Microbiological Standards (FSSAI):</strong></p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">SCM ki Limit</th>
                            <th class="p-2 border">Evaporated Milk ki Limit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Total Plate Count (cfu/g)</td><td class="p-2 border">Max 50,000</td><td class="p-2 border">Commercially sterile</td></tr>
                        <tr><td class="p-2 border">Coliform count (cfu/g)</td><td class="p-2 border">Max 10</td><td class="p-2 border">Absent</td></tr>
                        <tr><td class="p-2 border">Yeast & Mold count (cfu/g)</td><td class="p-2 border">Max 10</td><td class="p-2 border">Absent</td></tr>
                        <tr><td class="p-2 border"><em>E. coli</em></td><td class="p-2 border">1g mein Absent</td><td class="p-2 border">Absent</td></tr>
                        <tr><td class="p-2 border"><em>Salmonella</em></td><td class="p-2 border">25g mein Absent</td><td class="p-2 border">Absent</td></tr>
                        <tr><td class="p-2 border"><em>Staphylococcus aureus</em></td><td class="p-2 border">Max 10 cfu/g</td><td class="p-2 border">Absent</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3"><strong>Permitted Additives (FSSAI/Codex ke anusaar):</strong></p>
            <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
                <li><strong>Stabilizers (sirf evaporated milk ke liye):</strong> Sodium/potassium citrates, sodium/potassium phosphates (mono-, di-, tri-), sodium bicarbonate – max 0.2% (w/w) individually ya combination mein. Ye sterilization ke dauran <strong>calcium-casein equilibrium</strong> ko regulate karte hain.</li>
                <li><strong>Emulsifiers:</strong> Lecithin – max 0.5% evaporated milk ke liye.</li>
                <li><strong>Vitamins:</strong> Vitamin D₃ add kiya ja sakta hai (reconstituted mein max 8.5 µg/100 mL tak).</li>
                <li><strong>Sugars (SCM ke liye):</strong> Sucrose, glucose, fructose, lactose – minimum total sugar requirements ke subject mein.</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">PART I: Sweetened Condensed Milk (SCM) – Detailed Processing Science</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Raw Material ki Requirements</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Specification</th>
                            <th class="p-2 border">Scientific Wajah</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Acidity</td><td class="p-2 border">≤0.15% lactic acid</td><td class="p-2 border">Zyada acidity batata hai ki lactose ka microbial degradation ho chuka hai; heating ke dauran protein instability badhti hai</td></tr>
                        <tr><td class="p-2 border">Alcohol stability</td><td class="p-2 border">75% ethanol mein stable</td><td class="p-2 border">Casein micelles ki heat stability assess karta hai; ethanol κ-casein ki hairy layer ko disrupt karta hai</td></tr>
                        <tr><td class="p-2 border">COB test (Clot-on-Boiling)</td><td class="p-2 border">Negative</td><td class="p-2 border">Confirm karta hai ki pre-heating ke dauran doodh jam nahi hoga (coagulate nahi hoga)</td></tr>
                        <tr><td class="p-2 border">SPC (Standard Plate Count)</td><td class="p-2 border">≤200,000 cfu/mL</td><td class="p-2 border">Kam initial bioburden = kam surviving spores; kam enzyme (protease/lipase) contamination</td></tr>
                        <tr><td class="p-2 border">Thermoduric count</td><td class="p-2 border">≤10,000 cfu/mL</td><td class="p-2 border">Heat-resistant organisms (spore-formers) pre-heating mein survive kar lete hain</td></tr>
                        <tr><td class="p-2 border">Somatic Cell Count</td><td class="p-2 border">≤400,000/mL</td><td class="p-2 border">High SCC subclinical mastitis dikhata hai; isme plasmin (heat-stable protease) badha hua hota hai aur salt balance bhi badal jaata hai</td></tr>
                        <tr><td class="p-2 border">Fat:SNF ratio</td><td class="p-2 border">~1:2.44 (full-cream SCM ke liye)</td><td class="p-2 border">Ye ensure karta hai ki paani hatane ke baad final product compositional standards meet kare</td></tr>
                        <tr><td class="p-2 border">Sugar quality</td><td class="p-2 border">Refined cane sugar, ≤0.03% ash, ≤0.05% moisture, ≤200 ICUMSA color</td><td class="p-2 border">Kam moisture osmophilic yeast ka carriage rokta hai; kam ash flavor defects prevent karta hai</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart with HACCP Integration</h3>
            <div class="space-y-2 font-mono text-center text-sm">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">
                    <strong>1. Milk Reception, Testing & Filtration/Clarification</strong>
                    <br><span class="font-sans text-xs bg-gray-200 p-1 rounded mt-1 inline-block">PRP – Supplier Approval, Platform Tests</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">
                    <strong>2. Chilled Storage (≤4°C, max 24 ghante)</strong>
                    <br><span class="font-sans text-xs bg-gray-200 p-1 rounded mt-1 inline-block">PRP – Temperature Monitoring</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">
                    <strong>3. Standardization (Fat:SNF = 1:2.44)</strong>
                    <br><span class="font-sans text-xs bg-gray-200 p-1 rounded mt-1 inline-block">PRP – Compositional Control</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">
                    <strong>4. Pre-heating / Forewarming (110–120°C / 2–5 sec, ya 85–90°C / 15–30 min)</strong>
                    <br><span class="font-sans text-xs bg-red-200 p-1 rounded mt-1 inline-block">CCP-1: Thermal Process – Pathogen Kill & Protein Stabilization</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">
                    <strong>5. Sugar Addition (filtered 65°Brix syrup 80°C pe)</strong>
                    <br><span class="font-sans text-xs bg-orange-200 p-1 rounded mt-1 inline-block">oPRP – Sugar Quality & Dissolution Control</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">
                    <strong>6. Vacuum Evaporation (45–65°C, vacuum 600–700 mmHg)</strong>
                    <br>72–74% total solids tak concentrate karna
                    <br><span class="font-sans text-xs bg-orange-200 p-1 rounded mt-1 inline-block">oPRP – Endpoint Control (Brix, Density)</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">
                    <strong>7. Forced Cooling & Seeded Lactose Crystallization</strong>
                    <br>Tezi se 30°C tak thanda karna; ~30–35°C pe 0.02% ground lactose ka seeding
                    <br><span class="font-sans text-xs bg-red-200 p-1 rounded mt-1 inline-block">CCP-2: Crystal Size Control (&lt;10 µm)</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">
                    <strong>8. Pre-sterilized Cans mein Filling & Seaming</strong>
                    <br><span class="font-sans text-xs bg-red-200 p-1 rounded mt-1 inline-block">CCP-3: Post-process Contamination Control</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">
                    <strong>9. Storage (15–25°C recommended, max 12–24 mahine)</strong>
                </div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Har Processing Step ka Detailed Scientific Explanation</h3>

            <h4 class="text-lg font-semibold text-gray-700 mt-5 mb-2">Step 1–3: Milk Reception, Storage & Standardization</h4>
            <p>Aane wale doodh ko <strong>platform tests</strong> se check kiya jaata hai (organoleptic evaluation matlab dekhna-sunghna, COB test, alcohol test, acidity, lactometer aur SNF calculation se adulterant screening). Clarification mein somatic cells, leucocytes, aur particulate foreign matter ko hermetic disc-type centrifugal clarifiers se hata diya jaata hai jo 6,000–7,000 rpm pe chalte hain.</p>
            <p class="mt-2"><strong>Standardization ka Science:</strong> Raw milk mein fat-to-SNF ratio ko Pearson's square ya mass-balance equations use karke adjust karna padta hai taaki concentration ke baad (typically 2.5:1 volume reduction), final product compositional specifications meet kare. SCM jo 9% fat aur 22% SNF rakhta hai (total milk solids 31%), agar ~12.8% total solids wale doodh se shuru karein, toh concentration ratio hoga:</p>
            <div class="bg-gray-100 p-3 rounded text-center my-3 font-mono">
                Concentration Ratio = SCM mein Total Milk Solids (milk solids portion) / Standardized milk mein Total Solids
                <br>= (31% of ~73% milk portion) / 12.8% ≈ 2.5×
            </div>
            <p>Raw milk ka fat:SNF ratio <em>final product mein desired ratio</em> se match karana hota hai, typically around <strong>1:2.44</strong> (matlab 9/22). Kyunki fat aur SNF evaporation ke dauran proportionally concentrate hote hain, ye ratio poore processing mein maintain rehta hai.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-5 mb-2">Step 4: Pre-heating / Forewarming (CCP-1)</h4>
            <p>Pre-heating ek saath kai critical functions serve karta hai:</p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Function</th>
                            <th class="p-2 border">Scientific Mechanism</th>
                            <th class="p-2 border">Process Parameter</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Pathogen destruction</strong></td>
                            <td class="p-2 border">Cellular proteins ka thermal denaturation aur cell membranes ka disruption. 110°C pe, <em>C. botulinum</em> spores ki D-value ~0.21 min hai (121°C pe, D = 0.204 min). 115°C pe 3 sec ke liye, saare vegetative pathogens >12-log reduction ke saath destroy ho jaate hain.</td>
                            <td class="p-2 border">110–120°C / 2–5 sec (HTST-UHT range)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Enzyme inactivation</strong></td>
                            <td class="p-2 border"><strong>Lipase:</strong> Native milk lipoprotein lipase (LPL, EC 3.1.1.34) 78°C/10s pe inactivate ho jaata hai. <strong>Bacterial lipases</strong> psychrotrophs se (<em>Pseudomonas fluorescens</em>) bahut zyada heat-resistant hain (150°C bhi survive kar sakte hain). <strong>Plasmin</strong> (EC 3.4.21.7, blood se aane wala serine protease) pasteurization mein partially survive karta hai; >90°C pe denature hota hai. Ye enzymes <em>rancidity</em> aur <em>age gelation</em> karte hain respectively.</td>
                            <td class="p-2 border">Enzyme kill ke liye ≥90°C; bacterial enzymes ke liye aur zyada</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Whey protein denaturation & complexation</strong></td>
                            <td class="p-2 border">β-Lactoglobulin (β-Lg) 70°C se upar denature hota hai (T<sub>d</sub> ≈ 78°C) aur casein micelle surface pe <strong>κ-casein ke saath disulfide-linked complexes</strong> banata hai – β-Lg ka Cys<sub>121</sub> residue κ-casein ke Cys<sub>11</sub>–Cys<sub>88</sub> ke saath react karta hai. Ye micelle ko <strong>"pre-coat"</strong> kar deta hai, jisse uski heat stability badh jaati hai aur storage ke dauran gelation (age thickening) nahi hota.</td>
                            <td class="p-2 border">85–90°C / 15–30 min (batch) ya 110–120°C / 2–5 sec (continuous)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Controlled protein aggregation</strong></td>
                            <td class="p-2 border">Whey protein denaturation ka degree (WPD%) storage ke dauran <em>viscosity development profile</em> ko control karta hai. Zyada pre-heat temperatures (>100°C) >90% WPD dete hain – aisa SCM storage mein thoda thin hota hai. Kam pre-heat (~80°C, ~60% WPD) wala SCM thick hota jaata hai. Target: <strong>85–95% WPD</strong>.</td>
                            <td class="p-2 border">WPNI (Whey Protein Nitrogen Index) se verify hota hai</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Vacuum efficiency improvement</strong></td>
                            <td class="p-2 border">Dissolved gases (O₂, N₂, CO₂) high temperatures pe nikal jaati hain, jisse vacuum evaporation ke dauran foaming nahi hoti aur heat transfer improve hota hai. Dissolved O₂ hatane se storage ke dauran <em>oxidative browning</em> bhi kam hoti hai.</td>
                            <td class="p-2 border">≥85°C pe inherent</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3 bg-blue-50 p-3 rounded border-l-4 border-blue-400"><strong>🔬 Kinetic Detail:</strong> Microorganisms ka thermal destruction <strong>first-order kinetics</strong> follow karta hai: log(N/N₀) = −t/D, jahaan D decimal reduction time hai. Temperature sensitivity ko <strong>z-value</strong> se describe karte hain (D mein 10 guna change ke liye kitna temperature change chahiye). <em>C. botulinum</em> spores ke liye: D₁₂₁ = 0.204 min, z = 10°C. 115°C pe: D₁₁₅ = D₁₂₁ × 10<sup>(121−115)/10</sup> = 0.204 × 10<sup>0.6</sup> ≈ 0.81 min. 115°C pe 3-second hold lagbhag 0.05/0.81 ≈ 0.06 log reductions <em>C. botulinum</em> spores ke liye provide karta hai. Lekin SCM mein primary safety factor sirf thermal lethality nahi hai – ye <strong>thermal treatment + low a<sub>w</sub> ka combination</strong> hai (hurdle technology). Vegetative pathogens ko >12-log reductions milti hain.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-5 mb-2">Step 5: Sugar Addition (oPRP)</h4>
            <p>Sucrose SCM mein primary preservative ka kaam karta hai. Ise add karne mein careful scientific consideration zaroori hai:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Sugar Ratio (SR):</strong> Sabse critical parameter hai <em>sugar ratio</em>, jo define hota hai final product ke water phase mein sugar ka percentage:
                    <div class="bg-gray-100 p-3 rounded text-center my-2 font-mono">
                        Sugar Ratio = [Sugar / (Sugar + Water)] × 100 = 62.5–64.5%
                    </div>
                    <p>Agar SR < 62.5%: insufficient a<sub>w</sub> depression → microbial spoilage ka risk. Agar SR > 65.5%: excessive supersaturation → apne aap uncontrolled lactose crystallization (sandy texture).</p>
                </li>
                <li><strong>Sugar quantity calculation:</strong> 100 kg standardized milk (12.8% TS) ke liye, ~2.5× concentrate karke ~40 kg concentrated mass banegi, approximately 18–19 kg sugar add karna padega target SR ~63% achieve karne ke liye. Total product weight hogi ~40 + 19 = ~59 kg SCM, jismein composition: ~31% milk solids, ~44% sugar, ~25% water.</li>
                <li><strong>Addition ka timing:</strong> Sugar add kiya ja sakta hai (a) evaporation se pehle (industrially sabse common – forewarming ke baad hot milk mein milaya jaata hai), (b) evaporation ke dauran, ya (c) evaporation ke baad. Evaporation se pehle add karne se boiling point badh jaata hai aur evaporative efficiency ghat jaati hai lekin uniform distribution ensure hota hai. Sugar typically <strong>65–67°Brix syrup</strong> ki form mein 80°C pe dissolve karke, 200-mesh screens se filter karke, hot forewarmed milk mein milaya jaata hai.</li>
                <li><strong>Boiling point elevation (BPE) pe asar:</strong> Concentrated sugar-milk solution ka BPE kaafi significant hota hai. Dühring's rule ke according, 60°C pure water boiling point pe (vacuum ke under), 64% sugar solution lagbhag 68–70°C pe boil hota hai, aur milk solids + sugar ka combined effect pure water ke vacuum-adjusted boiling point se 8–12°C upar boiling point elevate kar sakta hai.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-5 mb-2">Step 6: Vacuum Evaporation (oPRP)</h4>
            <p>Evaporation core unit operation hai aur ismein sophisticated heat aur mass transfer engineering lagti hai.</p>
            
            <p class="mt-2"><strong>Thermodynamic Principle:</strong> Atmospheric pressure (101.3 kPa) pe paani 100°C pe boil hota hai, jisse milk components ko severe thermal damage hota hai (Maillard browning, caramelization, protein denaturation). Vacuum lagane se (typically 15–25 kPa absolute, matlab 600–700 mmHg gauge vacuum), boiling point <strong>45–65°C</strong> tak gir jaata hai, jisse minimum thermal degradation ke saath gentle concentration ho paati hai.</p>
            <p class="mt-2">Boiling point shift ko Clausius-Clapeyron relation govern karta hai:</p>
            <div class="bg-gray-100 p-3 rounded text-center my-3 font-mono">
                ln(P₂/P₁) = (ΔH<sub>vap</sub>/R) × (1/T₁ − 1/T₂)
            </div>
            <p>jahaan ΔH<sub>vap</sub> water ke liye ≈ 40.7 kJ/mol, R = 8.314 J/mol·K.</p>

            <p class="mt-3"><strong>Use Hone Wale Evaporators ke Types:</strong></p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Evaporator Type</th>
                            <th class="p-2 border">Design Features</th>
                            <th class="p-2 border">Heat Transfer Coefficient (U)</th>
                            <th class="p-2 border">Fayde</th>
                            <th class="p-2 border">Kahan use hota hai</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Falling-film tubular</strong></td>
                            <td class="p-2 border">Patli film liquid ki gravity se vertical tubes ke andar neeche behti hai; steam bahar hoti hai. Tube length: 8–15 m, diameter: 25–50 mm</td>
                            <td class="p-2 border">2,000–5,000 W/m²·K</td>
                            <td class="p-2 border">Bahut kam residence time (10–30 sec), kam thermal damage, high capacity</td>
                            <td class="p-2 border">Milk concentration ke liye sabse common; initial concentration stages mein</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Rising-film tubular</strong></td>
                            <td class="p-2 border">Liquid vapor bubble action se tubes mein upar chadhti hai; tube length: 4–7 m</td>
                            <td class="p-2 border">1,200–3,000 W/m²·K</td>
                            <td class="p-2 border">Self-circulating, moderate viscosities ke liye achha</td>
                            <td class="p-2 border">Purane installations; supplementary effects</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Plate evaporator</strong></td>
                            <td class="p-2 border">Corrugated plates narrow gaps (3–6 mm) ke saath; high turbulence</td>
                            <td class="p-2 border">3,000–6,000 W/m²·K</td>
                            <td class="p-2 border">Compact, easy CIP, flexible capacity</td>
                            <td class="p-2 border">Small-to-medium scale; finishing concentration</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Forced-circulation</strong></td>
                            <td class="p-2 border">External pump liquid ko high velocity (2–5 m/s) pe heat exchanger se force karta hai</td>
                            <td class="p-2 border">1,500–3,500 W/m²·K</td>
                            <td class="p-2 border">Bahut viscous products bina fouling ke handle karta hai</td>
                            <td class="p-2 border">SCM ke liye final stage (72–74% TS pe high viscosity)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p class="mt-3"><strong>Multi-Effect Evaporation & Thermal Vapor Recompression (TVR):</strong> Industrial SCM production <strong>2–7 effect evaporators</strong> use karti hai steam economy maximize karne ke liye. Multi-effect system mein, pehle effect mein (sabse high pressure/temperature pe) generate hua vapor doosre effect mein (lower pressure pe) heating medium ki tarah use hota hai, aur aise hi aage. Steam economy effects ke number ke saath lagbhag linearly badhti hai:</p>
            <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
                <li>Single-effect: ~1 kg steam ~1 kg water evaporate karta hai (steam economy ≈ 0.9)</li>
                <li>Triple-effect: steam economy ≈ 2.5–2.7</li>
                <li>Seven-effect with TVR: steam economy ≈ <strong>15–20</strong></li>
            </ul>
            <p class="mt-2"><strong>Thermal Vapor Recompression (TVR)</strong> ek thermocompressor (steam jet ejector) use karta hai downstream effect ke vapor ki pressure aur saturation temperature ko boost karne ke liye, ise live steam ke saath mix karke upstream effect ko feed karta hai. <strong>Mechanical Vapor Recompression (MVR)</strong> ek centrifugal compressor use karta hai jo saara generated vapor mechanically compress karta hai, uski condensation temperature 5–8°C se badha ke sole heating medium ki tarah recycle karta hai. MVR wale single-effect systems 15–30 effects ke barabar steam economy achieve kar sakte hain.</p>

            <p class="mt-3"><strong>Endpoint Determination:</strong> Concentration ko continuously monitor kiya jaata hai:</p>
            <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
                <li><strong>In-line refractometry</strong> (°Brix, total solids se correlated) – target: 72–74°Brix</li>
                <li><strong>In-line density measurement</strong> (Coriolis flow meter) – 50°C pe target density: ~1.30–1.32 g/cm³</li>
                <li><strong>Boiling Point Elevation (BPE):</strong> Vapor temperature aur product temperature ke beech ka ΔT same location pe concentration indicate karta hai. 73% TS pe SCM ke liye, BPE ≈ 8–12°C.</li>
                <li><strong>Hydrometer (Baumé scale):</strong> Traditional method; 55–60°C pe final product ko 30–31°Bé dikhana chahiye.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-5 mb-2">Step 7: Forced Cooling & Seeded Lactose Crystallization (CCP-2)</h4>
            <p>Ye arguably SCM manufacture mein sabse scientifically complex aur quality ke liye sabse critical step hai. Ye final product ki <strong>smooth ya sandy mouthfeel</strong> decide karta hai.</p>

            <p class="mt-2"><strong>Lactose Supersaturation Problem:</strong></p>
            <p>Lactose (4-O-β-D-galactopyranosyl-D-glucose, C₁₂H₂₂O₁₁·H₂O) ki solubility sucrose ke comparison mein <strong>kaafi kam</strong> hai:</p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Temperature (°C)</th>
                            <th class="p-2 border">Lactose Solubility (g/100g paani)</th>
                            <th class="p-2 border">Sucrose Solubility (g/100g paani)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">15</td><td class="p-2 border">15.1</td><td class="p-2 border">197</td></tr>
                        <tr><td class="p-2 border">25</td><td class="p-2 border">21.6</td><td class="p-2 border">211</td></tr>
                        <tr><td class="p-2 border">40</td><td class="p-2 border">30.4</td><td class="p-2 border">238</td></tr>
                        <tr><td class="p-2 border">60</td><td class="p-2 border">58.9</td><td class="p-2 border">287</td></tr>
                        <tr><td class="p-2 border">80</td><td class="p-2 border">94.7</td><td class="p-2 border">362</td></tr>
                        <tr><td class="p-2 border">100</td><td class="p-2 border">148.5</td><td class="p-2 border">487</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2">Ek typical SCM mein (25% paani, ~11% total mein lactose, matlab ~44 g lactose per 100 g paani), storage temperature (25°C) pe, sirf 21.6 g/100 g paani dissolved reh sakta hai. Baaki (~22.4 g/100g paani) crystallize hona zaroori hai. Sucrose ki maujoodgi lactose ki solubility ko <em>aur bhi kam</em> karti hai – har 10 g sucrose ke liye lagbhag 2.5 g per 100 g paani (salting-out effect), jisse supersaturation ki degree aur badh jaati hai.</p>
            <p class="mt-2">25°C pe <strong>supersaturation ratio (β)</strong> hai:</p>
            <div class="bg-gray-100 p-3 rounded text-center my-3 font-mono">
                β = C / C<sub>sat</sub> ≈ 44 / 17* ≈ 2.6
                <br><span class="text-xs">(*sucrose ke lactose solubility depression ke liye adjusted)</span>
            </div>

            <p class="mt-2"><strong>Nucleation aur Crystal Growth Theory:</strong></p>
            <p>Crystallization do stages mein hoti hai jo alag-alag thermodynamic aur kinetic mechanisms se govern hoti hain:</p>
            <ol class="list-decimal list-outside pl-5 space-y-3 mt-2">
                <li><strong>Nucleation:</strong> Naye crystal nuclei ka banna. SCM processing mein, <em>secondary nucleation</em> jaanboojhkar <strong>seeding</strong> se induce kiya jaata hai. Baareek pisa hua α-lactose monohydrate crystals (particle size ≤5 µm, typically product weight ka 0.02–0.05%) <strong>30–35°C ke optimal seeding temperature</strong> pe add kiye jaate hain. Ye temperature metastable zone limit se neeche hai lekin itna high hai ki crystal growth ke liye adequate molecular mobility mile. Seeding product ke har gram mein ~10⁸–10¹⁰ nucleation sites introduce karta hai.
                    <p class="mt-1">Nucleation rate (J) classical nucleation theory follow karta hai:</p>
                    <div class="bg-gray-100 p-3 rounded text-center my-2 font-mono text-xs">
                        J = A · exp[−16πγ³V<sub>m</sub>²/(3k³T³(ln β)²)]
                    </div>
                    <p>jahaan γ = crystal-solution interfacial energy (~4.9 mJ/m²), V<sub>m</sub> = lactose ka molecular volume, β = supersaturation ratio. High β aur seeding J ko maximize karte hain, bahut saare nuclei produce karte hain.</p>
                </li>
                <li><strong>Crystal Growth:</strong> Jab nuclei ban jaate hain, toh woh supersaturated solution se lactose molecules ke crystal surface pe diffusion se grow karte hain. Growth rate (G) follow karta hai:
                    <div class="bg-gray-100 p-3 rounded text-center my-2 font-mono text-xs">
                        G = dL/dt = k<sub>g</sub> · (C − C<sub>sat</sub>)<sup>n</sup>
                    </div>
                    <p>jahaan k<sub>g</sub> growth rate constant hai, n ≈ 1–2 lactose ke liye. <strong>Tez agitation</strong> bahut zaroori hai: (a) seed crystals uniformly distribute karne ke liye, (b) growing crystals ke aas-paas diffusion boundary layer ki thickness (δ) kam karne ke liye, aur (c) uniform temperature maintain karne ke liye. Bahut saare nuclei available supersaturated lactose ke liye compete karte hain, isliye individual crystals <em>chhote</em> rehte hain.</p>
                </li>
            </ol>
            <p class="mt-3"><strong>Target Crystal Size aur Sensory Impact:</strong></p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Crystal Size (µm)</th>
                            <th class="p-2 border">Sensory Perception</th>
                            <th class="p-2 border">Texture Classification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border"><strong>&lt;10</strong></td><td class="p-2 border">Jeebh pe mehsoos nahi hota</td><td class="p-2 border"><strong>Smooth (ideal)</strong></td></tr>
                        <tr><td class="p-2 border">10–15</td><td class="p-2 border">Mushkil se pata chalta hai; acceptable</td><td class="p-2 border">Thoda mealy</td></tr>
                        <tr><td class="p-2 border">15–25</td><td class="p-2 border">Noticeable graininess</td><td class="p-2 border">Mealy/Grainy</td></tr>
                        <tr><td class="p-2 border">25–40</td><td class="p-2 border">Clearly sandy</td><td class="p-2 border">Sandy (retla)</td></tr>
                        <tr><td class="p-2 border">&gt;40</td><td class="p-2 border">Mota, kharkhara, objectionable</td><td class="p-2 border">Gritty (reject)</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3"><strong>Cooling Protocol:</strong></p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li>Product evaporator se 50–55°C pe nikalta hai</li>
                <li>Crystallization tank mein transfer karna (jacketed, scraping agitator 15–20 rpm pe chalte hue)</li>
                <li>Jacket mein chilled water (2–5°C) use karke <strong>30 minute ke andar 30–35°C tak cool karna</strong></li>
                <li><strong>30–32°C pe</strong> seed lactose add karna (0.02% w/w, particle size ≤5 µm)</li>
                <li>1–2 ghante tak agitation jaari rakhna controlled cooling ke saath 18–20°C tak</li>
                <li>Flash cooling (kuch modern processes mein): product cooled drum pe failaya jaata hai ya scraped-surface heat exchanger (SSHE) jaise Votator se guzara jaata hai, 50°C se 18°C tak minutes mein cool hota hai</li>
            </ul>

            <p class="mt-3"><strong>Mutarotation ka Consideration:</strong> Lactose do anomeric forms mein hota hai: α-lactose (mp 202°C) aur β-lactose (mp 252°C). Solution mein, ye equilibrium mein rehte hain 25°C pe ~37% α : 63% β ke ratio mein. Sirf <strong>α-lactose monohydrate</strong> form 93.5°C se neeche solution se crystallize hota hai. Mutarotation rate (α ⇌ β conversion) temperature-dependent hai aur low temperatures pe crystallization ke liye rate-limiting hai. 25°C pe, mutarotation half-life ~6.5 ghante hai, matlab complete equilibrium ~30 ghante lagta hai. 40°C pe, half-life ~1.5 ghante hai. Isliye 30–35°C pe seeding optimal hai – growing crystals ko α-lactose supply karne ke liye sufficient mutarotation rate milta hai.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-5 mb-2">Step 8: Packaging (CCP-3)</h4>
            <p>Kyunki SCM commercially sterile nahi hai, post-processing contamination ek critical concern hai. Product ko containers mein aseptic ya near-aseptic techniques se bharna zaroori hai:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Metal cans:</strong> Tin-plated steel ya aluminum, andar se lacquered (food-grade epoxy-phenolic ya acrylic coating). Cans ko superheated steam (180–200°C) ya UV se sterilize kiya jaata hai. Can integrity (double seam quality) ko <strong>IS 9396</strong> ke according inspect kiya jaata hai (first operation, second operation overlap, body hook, cover hook, seam thickness measurements).</li>
                <li><strong>Laminated tubes:</strong> Aluminum-laminated (Al-PET-PE) tubes consumer packs ke liye; filling head H₂O₂ (35%) aur hot air se sterilize hota hai.</li>
                <li><strong>Flexible pouches:</strong> Metalized PET/PE laminates; headspace O₂ kam karne ke liye nitrogen flushing.</li>
                <li><strong>Filling ke waqt temperature:</strong> 18–22°C (product crystallization ke baad adequately cool hona chahiye taaki can ke andar condensation na ho, jo localized high-a<sub>w</sub> zones create karega jahan mold grow kar sakta hai).</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">SCM ke liye HACCP Plan Summary</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">CCP</th>
                            <th class="p-2 border">Hazard</th>
                            <th class="p-2 border">Critical Limit</th>
                            <th class="p-2 border">Monitoring</th>
                            <th class="p-2 border">Corrective Action</th>
                            <th class="p-2 border">Verification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>CCP-1: Pre-heating</strong></td>
                            <td class="p-2 border">B: Vegetative pathogens ka survive karna (<em>Salmonella, E. coli, Listeria, S. aureus</em>)</td>
                            <td class="p-2 border">≥110°C ≥2 sec ke liye YA ≥85°C ≥15 min ke liye</td>
                            <td class="p-2 border">Continuous temperature recording (holding tube ke outlet pe RTD/thermocouple); flow rate monitoring</td>
                            <td class="p-2 border">Non-conforming product ko balance tank mein wapas divert karna; recalibrate karna; product hold karna re-processing ke liye</td>
                            <td class="p-2 border">Temperature sensors ka daily calibration (±0.5°C); annual holding tube validation; phosphatase test (negative hona chahiye)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>CCP-2: Cooling & Crystallization</strong></td>
                            <td class="p-2 border">Q: Lactose crystal size >10 µm (sandy texture); B bhi: agar cooling bahut slow ho toh thermophilic organisms grow ho sakte hain</td>
                            <td class="p-2 border">Product 45 min ke andar ≤30°C tak pahunchna chahiye; seed 30±2°C pe add karna; crystal size ≤10 µm</td>
                            <td class="p-2 border">Temperature profile recording; har batch mein crystal size microscopy se (polarized light 100× pe); seed particle size certificate of analysis</td>
                            <td class="p-2 border">Agar crystals >15 µm: product ko 50°C tak re-heat karke re-dissolve kar sakte hain phir se seeding karke; cooling rate adjust karna</td>
                            <td class="p-2 border">Crystal size trend data ka monthly audit; seed stock ka annual particle size analysis</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>CCP-3: Filling/Seaming</strong></td>
                            <td class="p-2 border">B: Osmophilic yeasts (<em>Torulopsis</em>, <em>Zygosaccharomyces</em>), molds se post-process contamination</td>
                            <td class="p-2 border">Can ka internal environment: sterilization ke baad ≤10 cfu aerobic organisms; double seam: overlap ≥1.02 mm, tightness rating ≥70%</td>
                            <td class="p-2 border">Environmental swabs (filling room mein, hourly); can rinse tests (har 30 min); seam teardown (har 4-hour run mein 3 cans, har seam station se)</td>
                            <td class="p-2 border">Filling rokna; cans re-sterilize karna; contamination source identify karna; affected production quarantine karna</td>
                            <td class="p-2 border">Finished product ka monthly incubation test (37°C/14 din + 55°C/7 din); annual environmental monitoring trend analysis</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">PART II: Evaporated Milk – Detailed Processing Science</h2>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">SCM se Key Differences</h3>
            <p>Evaporated milk fundamentally SCM se alag hai kyunki ismein <strong>koi added sugar nahi</strong> hoti aur preservation ke liye puri tarah <strong>commercial sterilization</strong> pe depend karta hai. Isse kuch unique scientific challenges aati hain:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Casein ki heat stability:</strong> Product ko severe sterilization (~118°C/15 min) bina coagulate hue handle karna padta hai. Ye sabse badi technological challenge hai.</li>
                <li><strong>Fat emulsion stability:</strong> Concentrated product mein sterilization aur storage ke dauran fat separation rokne ke liye homogenization zaroori hai.</li>
                <li><strong>Color aur flavor:</strong> Sterilization ke dauran extensive Maillard browning hoti hai, jisse tan color aur "cooked" flavor aata hai jo evaporated milk ki pehchaan hai.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Evaporated Milk Processing Flowchart</h3>
            <div class="space-y-2 font-mono text-center text-sm">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">
                    <strong>1. Milk Reception, Standardization (Fat:SNF = 1:2.25)</strong>
                    <br><span class="font-sans text-xs bg-gray-200 p-1 rounded mt-1 inline-block">PRP</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">
                    <strong>2. Forewarming (90–95°C / 10–25 min ya 115–120°C / 2–5 sec)</strong>
                    <br><span class="font-sans text-xs bg-red-200 p-1 rounded mt-1 inline-block">CCP-1: Protein Stabilization & Pathogen Reduction</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">
                    <strong>3. Vacuum Evaporation (2–3 effects; 45–65°C)</strong>
                    <br>25–28% total solids tak concentrate karna
                    <br><span class="font-sans text-xs bg-orange-200 p-1 rounded mt-1 inline-block">oPRP</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">
                    <strong>4. Homogenization (two-stage: 125–175 / 25–35 bar)</strong>
                    <br><span class="font-sans text-xs bg-orange-200 p-1 rounded mt-1 inline-block">oPRP – Emulsion Stability</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">
                    <strong>5. Stabilizer Addition & Standardization</strong>
                    <br>Na₂HPO₄ / Na₃C₆H₅O₇ addition; pilot sterilization test
                    <br><span class="font-sans text-xs bg-orange-200 p-1 rounded mt-1 inline-block">oPRP</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">
                    <strong>6. Cans mein Filling & Seaming</strong>
                    <br><span class="font-sans text-xs bg-gray-200 p-1 rounded mt-1 inline-block">PRP</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-red-100 border border-red-300 rounded">
                    <strong>7. In-Can Sterilization (115–120°C / 15–20 min; F₀ = 5–7)</strong>
                    <br>YA UHT (135–150°C / 4–8 sec) + Aseptic Filling
                    <br><span class="font-sans text-xs bg-red-200 p-1 rounded mt-1 inline-block">CCP-2: Commercial Sterility</span>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">
                    <strong>8. Cooling (20 min ke andar ≤35°C tak) & Can Inversion</strong>
                </div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">
                    <strong>9. Labeling, Incubation Testing & Storage</strong>
                </div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Evaporated Milk ke liye Critical Process Science</h3>

            <h4 class="text-lg font-semibold text-gray-700 mt-5 mb-2">A. Heat Stability aur Protein Chemistry</h4>
            <p>Doodh ki heat stability ko define karte hain us time se jo visible coagulation ke liye lagta hai given temperature pe (typically <strong>Heat Coagulation Time, HCT</strong> se measure hota hai, 140°C pe). Bovine milk ka HCT pH ke against plot karne pe characteristic <strong>Type A profile</strong> dikhata hai jismein <em>pH 6.7 pe maximum</em> aur <em>pH 6.9 pe minimum</em> hota hai. Ye govern hota hai:</p>
            <ol class="list-decimal list-outside pl-5 space-y-2 mt-2">
                <li><strong>κ-Casein dissociation:</strong> pH > 6.7 pe, κ-casein (micelle-stabilizing surface protein) micelle se dissociate ho jaata hai, calcium-sensitive α<sub>s1</sub>- aur β-caseins expose ho jaate hain, jisse calcium-mediated coagulation hota hai.</li>
                <li><strong>β-Lactoglobulin–κ-casein complexation:</strong> Forewarming (>70°C) ke dauran, denatured β-Lg micelle surface pe κ-casein ke saath disulfide bonds banata hai, ek "heat-stable" coating create karta hai. Ye <em>primary mechanism</em> hai jisse forewarming evaporated milk ki heat stability improve karti hai.</li>
                <li><strong>Calcium ion activity:</strong> Free Ca²⁺ casein aggregation promote karta hai. Forewarming ionic calcium ko kam karti hai ise <strong>calcium phosphate</strong> (Ca₃(PO₄)₂) ki tarah micelle ke andar precipitate karke (colloidal calcium phosphate, CCP), jisse calcium equilibrium shift hota hai.</li>
                <li><strong>Urea:</strong> Doodh mein natural urea (20–40 mg/100 mL) high temperatures pe NH₃ aur CO₂ mein decompose hota hai, sterilization ke dauran pH badhata hai aur natural heat stabilizer ka kaam karta hai.</li>
            </ol>
            <p class="mt-3"><strong>Salt Balance Adjustment (Stabilization):</strong></p>
            <p>Concentration ke baad, concentrate ki thodi quantity ko <strong>pilot sterilization test</strong> mein daala jaata hai: kai sealed test tubes mein concentrate hota hai jismein alag-alag maatra mein stabilizer salts (typically disodium hydrogen phosphate, Na₂HPO₄, ya trisodium citrate, Na₃C₆H₅O₇) milaye jaate hain aur 115°C pe 15 min autoclave kiye jaate hain. Wo minimum salt addition select kiya jaata hai jo coagulation prevent kare (lekin excessive viscosity ya color changes na kare). Mechanism:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Phosphates:</strong> Ca²⁺ ions ko sequester karte hain → Ca₃(PO₄)₂ precipitation → ionic Ca²⁺ kam hota hai → casein ka calcium-bridging kam hota hai → stability improve hoti hai. Ye pH ko bhi thoda HCT maximum ki taraf raise karte hain.</li>
                <li><strong>Citrates:</strong> Similarly Ca²⁺ chelate karte hain (calcium citrate, Ca₃(C₆H₅O₇)₂) aur pH adjust karte hain. Citrate pH badhane mein zyada effective hai lekin thoda flavor change ho sakta hai.</li>
                <li>Typical addition levels: concentrate ka 0.05–0.15% (w/w).</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-5 mb-2">B. Homogenization ka Science</h4>
            <p>Concentrated milk (25–28% total solids, 8–9% fat) ka homogenization isliye zaroori hai kyunki:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li>Concentration <strong>fat volume fraction (φ)</strong> ko raw milk mein ~0.04 se badhake evaporated milk mein ~0.09 kar deti hai, jisse droplet collision aur coalescence ki probability badh jaati hai.</li>
                <li>Sterilization (118°C/15 min) ke dauran, <strong>native milk fat globule membrane (MFGM)</strong> proteins denature ho jaate hain, emulsion unstable ho jaati hai. Homogenization naye, chhote fat globules banata hai (0.5–2 µm, native 1–10 µm se) jo ek <strong>secondary membrane</strong> se coated hote hain – ye membrane primarily caseins aur whey proteins se bani hoti hai jo serum phase se adsorb hote hain.</li>
                <li><strong>Stokes' Law</strong> ke according, creaming velocity (v) hai: v = 2r²(ρ<sub>p</sub> − ρ<sub>f</sub>)g / 9η. Fat globule radius (r) ko 2 µm se 0.5 µm tak kam karne se creaming velocity <strong>16 guna kam</strong> ho jaati hai (v ∝ r²).</li>
            </ul>
            <p class="mt-2"><strong>Two-stage homogenization</strong> 60–65°C pe use hota hai:</p>
            <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
                <li><strong>Pehla stage:</strong> 125–175 bar – fat globules ko tod deta hai</li>
                <li><strong>Doosra stage:</strong> 25–35 bar – shared casein bridges se bane fat globule clusters ko tod deta hai ("homogenization clustering" prevent karta hai jo apparent viscosity badhata aur creaming promote karta)</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-5 mb-2">C. In-Can Sterilization (CCP-2)</h4>
            <p>Evaporated milk ke liye thermal process <strong>commercial sterility</strong> achieve karne ke liye design kiya jaata hai, <em>Clostridium botulinum</em> (public health significance ka sabse heat-resistant pathogen) aur <em>Bacillus stearothermophilus</em> (ab <em>Geobacillus stearothermophilus</em>, sabse heat-resistant thermophilic spoilage organism) ko target karta hai.</p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Target Organism</th>
                            <th class="p-2 border">D₁₂₁ (min)</th>
                            <th class="p-2 border">z-value (°C)</th>
                            <th class="p-2 border">Required Reduction</th>
                            <th class="p-2 border">Process Requirement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><em>C. botulinum</em></td>
                            <td class="p-2 border">0.21</td>
                            <td class="p-2 border">10</td>
                            <td class="p-2 border">12D (bot cook)</td>
                            <td class="p-2 border">F₀ = 12 × 0.21 = 2.52 min</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><em>G. stearothermophilus</em></td>
                            <td class="p-2 border">4.0–5.0</td>
                            <td class="p-2 border">10</td>
                            <td class="p-2 border">Minimum 5D</td>
                            <td class="p-2 border">F₀ = 5 × 5 = 25 min</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2">Evaporated milk sterilization typically <strong>F₀ = 5–7 minutes</strong> deliver karta hai, jo <em>C. botulinum</em> ke liye 12D process safety margin ke saath provide karta hai, lekin <em>G. stearothermophilus</em> ke liye sirf 1–1.5D. Ye acceptable hai kyunki thermophilic spoilage organisms sirf >45°C pe grow karte hain, aur product isse neeche store hota hai.</p>
            <p class="mt-2">F₀ value poore thermal process mein lethal rate (L) ko integrate karke calculate hoti hai:</p>
            <div class="bg-gray-100 p-3 rounded text-center my-3 font-mono">
                F₀ = ∫₀ᵗ 10<sup>(T(t)−121)/z</sup> dt
            </div>
            <p>jahaan T(t) time t pe product ka temperature hai <strong>slowest-heating point</strong> pe (typically conduction-heated products ke liye geometric center).</p>

            <p class="mt-3"><strong>Sterilization Equipment:</strong></p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Batch retort (still retort):</strong> Cans racks pe stack hote hain; 115–120°C pe steam; processing time: temperature pe 15–20 min + come-up aur cool-down. Sirf small-scale operations ke liye.</li>
                <li><strong>Continuous rotary sterilizer (hydrostatic):</strong> Cans ek conveyor pe travel karte hain hydrostatic water column se jo steam pressure maintain karta hai. Can rotation (<strong>end-over-end ya axial rotation 15–25 rpm pe</strong>) internal convection currents promote karta hai, process time 30–40% kam hota hai aur uniformity improve hoti hai. Typical cycle: ~13 min 118°C pe rotation ke saath.</li>
                <li><strong>UHT processing:</strong> Modern alternative; doodh ko <strong>135–150°C pe 4–8 seconds</strong> ke liye sterilize kiya jaata hai direct (steam injection/infusion) ya indirect (tubular/plate) heat exchangers se, phir aseptic packaging. UHT evaporated milk mein kam browning hoti hai, better nutritional retention hoti hai, lekin stringent aseptic packaging chahiye.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-5 mb-2">D. Sterilization ke Dauran Maillard Browning</h4>
            <p>Evaporated milk ka characteristic brown color aur caramel jaisa flavor <strong>Maillard reaction</strong> (non-enzymatic browning) ka result hai, jo hoti hai:</p>
            <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
                <li><strong>Reducing sugars:</strong> Primarily lactose (ek reducing disaccharide, jismein free hemiacetal/hemiketal group hota hai)</li>
                <li><strong>Free amino groups:</strong> Casein aur whey proteins mein lysine residues ke ε-amino groups (free amino acids ke α-amino groups bhi)</li>
            </ul>
            <p class="mt-2"><strong>Reaction Pathway:</strong></p>
            <ol class="list-decimal list-outside pl-5 space-y-2 mt-2">
                <li><strong>Initial condensation:</strong> Lactose + R-NH₂ → lactulosyl-lysine (Amadori product) – koi color change nahi</li>
                <li><strong>Amadori rearrangement & degradation:</strong> Lactulosyl-lysine → deoxysones → furfural, hydroxymethylfurfural (HMF), reductones</li>
                <li><strong>Advanced Maillard products:</strong> Strecker degradation → aldehydes, pyrazines (flavor compounds); polymerization → melanoidins (brown polymers, MW 10,000–100,000 Da)</li>
            </ol>
            <p class="mt-2">Maillard browning ki rate Arrhenius kinetics follow karti hai activation energy E<sub>a</sub> ≈ 100–130 kJ/mol aur Q₁₀ ≈ 2.5–3.5 ke saath. Matlab browning har 10°C badhne pe lagbhag teen guna ho jaati hai. UHT processing (zyada temperature, bahut kam time) retort sterilization se <strong>kam browning</strong> produce karta hai kyunki high activation energy ka matlab hai browning zyada temperature-sensitive hai microbial destruction ke comparison mein (spores ke liye E<sub>a</sub> ≈ 250–350 kJ/mol). Ye HTST/UHT processing ka fundamental thermodynamic advantage hai.</p>

            <p class="mt-2"><strong>Maillard Reaction ke Nutritional Consequences:</strong></p>
            <ul class="list-disc list-outside pl-5 space-y-1 mt-2">
                <li><strong>Lysine blockage:</strong> Available lysine ka 15–25% nutritionally unavailable ho jaata hai (Amadori product formation). Reactive lysine assay (FDNB ya homoarginine method) se measure hota hai.</li>
                <li><strong>Vitamin destruction:</strong> Thiamine (B₁): 30–50% loss; Vitamin C: 60–80% loss; Vitamin B₁₂: 10–20% loss. Riboflavin (B₂) aur niacin relatively stable hain.</li>
                <li><strong>Lactulose formation:</strong> Heat-induced isomerization se lactose → lactulose (ek non-absorbable disaccharide). Lactulose content heat treatment intensity ka indicator hai: UHT milk ~50–200 mg/L; retort-sterilized evaporated milk: 800–1400 mg/L; raw milk: nil.</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">PART III: Quality Defects, Storage Changes & Troubleshooting</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Sweetened Condensed Milk ke Defects</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Defect</th>
                            <th class="p-2 border">Scientific Wajah</th>
                            <th class="p-2 border">Prevention/Control</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Sandy/Gritty texture</strong></td>
                            <td class="p-2 border">Bade lactose crystals (>15 µm) – wajah: slow cooling, insufficient seeding, inadequate agitation, ya sugar ratio >65% (excessive supersaturation)</td>
                            <td class="p-2 border">Rapid cooling; 30°C pe 0.02% fine lactose (≤5 µm) se seed karna; vigorous agitation; sugar ratio 62.5–64.5% control karna</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Age thickening / Gelation</strong></td>
                            <td class="p-2 border">Storage ke dauran viscosity ka progressive increase: (1) protein-protein interactions (disulfide cross-linking), (2) proteins ka Maillard cross-linking, (3) calcium phosphate crystallization se Ca²⁺ equilibrium shift. Insufficient forewarming reactive β-Lg chhod deta hai jo aggregate hota rehta hai.</td>
                            <td class="p-2 border">Adequate forewarming (>100°C >90% WPD ke liye); ≤25°C pe store karna; temperature cycling avoid karna; protein/lactose ratio kam karna</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Browning</strong></td>
                            <td class="p-2 border">Lactose aur lysine residues ke beech Maillard reaction. Rate badh jaati hai: high storage temperature, high pH, Cu/Fe catalysts ki maujoodgi, O₂ ki maujoodgi se</td>
                            <td class="p-2 border">≤25°C pe store karna; headspace O₂ minimize karna (N₂ flushing); food-grade lacquered cans use karna (metal leaching prevent karne ke liye); forewarming optimize karna HMF precursors minimize karne ke liye</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Sugar crystallization (sucrose)</strong></td>
                            <td class="p-2 border">Low temperatures pe sucrose supersaturation; temperature cycling se dissolution aur nucleation sites pe recrystallization hoti hai</td>
                            <td class="p-2 border">Sugar ratio ≤64.5% control karna; constant temperature pe store karna; 10°C se neeche storage avoid karna</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>"Buttons" (safed lumps)</strong></td>
                            <td class="p-2 border">Air-product interface pe localized casein coagulation surface drying aur concentration se; aksar <em>Micrococcus</em> ya <em>Staphylococcus</em> contamination se associated jo locally pH badal deta hai</td>
                            <td class="p-2 border">Headspace minimize karna; hygienic filling; storage ke dauran cans periodically invert karna</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Blown/Swollen cans (foole hue)</strong></td>
                            <td class="p-2 border"><strong>Osmophilic yeasts</strong> (<em>Torulopsis</em>, <em>Zygosaccharomyces bailii</em>) sucrose ferment karke gas (CO₂) produce karti hain; ya <em>Cladosporium</em> aur <em>Aspergillus</em> molds</td>
                            <td class="p-2 border">Post-evaporation stringent hygiene; filling equipment sterilize karna; sugar supply ki microbiological testing; filling room ki environmental monitoring</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Rancid/Soapy flavor (basi/saabun jaisa)</strong></td>
                            <td class="p-2 border">Residual heat-stable bacterial lipases se lipolysis (raw milk mein psychrotrophic contamination se); short-chain fatty acids release hote hain (C₄:₀ butyric, C₆:₀ caproic, C₈:₀ caprylic)</td>
                            <td class="p-2 border">Raw milk mein low psychrotrophic count (<10,000/mL); high-temperature forewarming; raw milk ki cold storage minimize karna (≤48 ghante)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fat separation</strong></td>
                            <td class="p-2 border">Insufficient emulsion stability se free fat layer; inadequate ya absent homogenization; high storage temperature viscosity kam karta hai → Stokes creaming badh jaati hai</td>
                            <td class="p-2 border">Evaporation se pehle ya baad mein 70–100 bar pe single-stage homogenization; adequate forewarming se product viscosity maintain karna</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Evaporated Milk ke Defects</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Defect</th>
                            <th class="p-2 border">Scientific Wajah</th>
                            <th class="p-2 border">Prevention/Control</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Sterilization ke dauran coagulation</strong></td>
                            <td class="p-2 border">Heat-induced casein destabilization: κ-casein dissociation, Ca²⁺ bridging of para-casein, CCP equilibrium collapse. Aksar wajah: late-lactation cows ka doodh (high ionic Ca, low κ-casein), high mineral content, pH bahut high ya low, inadequate forewarming</td>
                            <td class="p-2 border">Pilot sterilization test; Na₂HPO₄/citrate addition (0.05–0.15%); adequate forewarming; late-lactation/mastitic doodh reject karna; pH 6.5–6.6 pe adjust karna</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Age gelation (storage ke dauran)</strong></td>
                            <td class="p-2 border">Storage ke dauran (mahine se saal) three-dimensional protein gel banna: (1) κ-casein–β-Lg complexes dhire-dhire aggregate hote hain; (2) residual heat-stable proteases (bacterial plasmin-like enzymes) casein ko hydrolyze karte hain, para-κ-casein produce hota hai jismein steric stabilization nahi hoti; (3) Maillard cross-linking</td>
                            <td class="p-2 border">Low SPC aur low psychrotrophic count wala doodh use karna; high forewarming temperature; 15–25°C pe store karna; >30°C storage avoid karna</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fat separation / "Oiling off"</strong></td>
                            <td class="p-2 border">Incomplete ya ineffective homogenization; >2 µm fat globules Stokes' Law ke according cream karte hain; agar product bina rotation ke store ho toh aur badh jaata hai</td>
                            <td class="p-2 border">Sahi pressure pe two-stage homogenization (125–175/25–35 bar); 60–65°C pe homogenize karna; cans inverted store karna ya monthly rotate karna</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Excessive browning</strong></td>
                            <td class="p-2 border">Over-sterilization (F₀ >10); high pH (>6.7); Cu/Fe contamination (Maillard catalyze karte hain); high initial lactose content</td>
                            <td class="p-2 border">F₀ optimize karna (target 5–7); pH control; stainless steel equipment; koi copper fittings nahi</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Flat sour spoilage</strong></td>
                            <td class="p-2 border"><em>Bacillus coagulans</em> ya <em>B. licheniformis</em> spore survival + germination; bina gas ke acid production → can swell nahi hota lekin product curdled aur khatta hota hai</td>
                            <td class="p-2 border">Adequate F₀; sterilization ke baad rapid cooling; doodh mein low initial spore load</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Thermophilic spoilage (TA/TNS)</strong></td>
                            <td class="p-2 border"><em>G. stearothermophilus</em> (thermophilic acid, TA) ya <em>Clostridium thermosaccharolyticum</em> (thermophilic non-sulfide, TNS, gas + acid) >40°C pe store karne pe grow hote hain</td>
                            <td class="p-2 border">Sterilization ke baad rapid cooling ≤35°C tak; ≤30°C pe store karna; 55°C/7 din pe incubation testing</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shelf Life aur Storage ka Science</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">SCM</th>
                            <th class="p-2 border">Evaporated Milk</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border"><strong>Shelf life (typical)</strong></td><td class="p-2 border">≤25°C pe 12–24 mahine</td><td class="p-2 border">≤25°C pe 12–18 mahine</td></tr>
                        <tr><td class="p-2 border"><strong>Primary limiting factors</strong></td><td class="p-2 border">Age thickening, browning, crystal growth</td><td class="p-2 border">Age gelation, browning, fat separation</td></tr>
                        <tr><td class="p-2 border"><strong>Browning ke liye Temperature coefficient (Q₁₀)</strong></td><td class="p-2 border">~2.5–3.0 (har 10°C badhne pe shelf life aadhi ho jaati hai)</td><td class="p-2 border">~2.5–3.0</td></tr>
                        <tr><td class="p-2 border"><strong>Optimal storage temperature</strong></td><td class="p-2 border">15–20°C (<10°C avoid karna: sucrose crystallization risk)</td><td class="p-2 border">15–25°C (>30°C avoid karna: accelerated gelation)</td></tr>
                        <tr><td class="p-2 border"><strong>Kholne ke baad</strong></td><td class="p-2 border">Refrigerate karna (2–4°C), 2 hafte mein use karna</td><td class="p-2 border">Refrigerate karna, 3–5 din mein use karna</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Rheological Properties</h3>
            <p>SCM ek <strong>non-Newtonian, pseudoplastic (shear-thinning) fluid</strong> hai jiska apparent viscosity shear rate, temperature, aur composition pe depend karta hai:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>25°C pe Apparent viscosity:</strong> 2,000–5,000 mPa·s (total solids, forewarming, aur age ke saath vary karta hai)</li>
                <li><strong>Power law model:</strong> τ = K · γ̇<sup>n</sup>, jahaan K = consistency index (Pa·s<sup>n</sup>), n = flow behavior index (~0.7–0.85 SCM ke liye, pseudoplastic behavior confirm karta hai)</li>
                <li><strong>Thixotropy:</strong> SCM mild thixotropic behavior dikhata hai (constant shear pe time ke saath viscosity kam hoti hai aur rest pe recover hoti hai) – ye lactose crystal–protein aggregation networks ke disruption aur reformation se hota hai</li>
                <li>Storage ke dauran age thickening (protein cross-linking aur Maillard polymerization) se viscosity badhti hai</li>
            </ul>
            <p class="mt-2">Evaporated milk bhi pseudoplastic hai lekin kam viscosity ke saath (~10–40 mPa·s 25°C pe freshly processed hone pe). Sterilization ke baad, heat-induced protein aggregation se viscosity ~40–100 mPa·s tak badh jaati hai.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Typical Products ka Compositional Analysis</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Component</th>
                            <th class="p-2 border">Whole Milk</th>
                            <th class="p-2 border">Sweetened Condensed Milk</th>
                            <th class="p-2 border">Evaporated Milk</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Paani (%)</td><td class="p-2 border">87.3</td><td class="p-2 border">25–27</td><td class="p-2 border">73–74</td></tr>
                        <tr><td class="p-2 border">Milk Fat (%)</td><td class="p-2 border">3.9</td><td class="p-2 border">8.5–9.5</td><td class="p-2 border">7.5–8.5</td></tr>
                        <tr><td class="p-2 border">Protein (%)</td><td class="p-2 border">3.3</td><td class="p-2 border">7.5–8.5</td><td class="p-2 border">6.5–7.5</td></tr>
                        <tr><td class="p-2 border">Lactose (%)</td><td class="p-2 border">4.7</td><td class="p-2 border">10.5–12.5</td><td class="p-2 border">9.5–10.5</td></tr>
                        <tr><td class="p-2 border">Sucrose (%)</td><td class="p-2 border">0</td><td class="p-2 border">43–45</td><td class="p-2 border">0</td></tr>
                        <tr><td class="p-2 border">Ash/Minerals (%)</td><td class="p-2 border">0.7</td><td class="p-2 border">1.5–1.8</td><td class="p-2 border">1.5–1.8</td></tr>
                        <tr><td class="p-2 border">Total Solids (%)</td><td class="p-2 border">12.7</td><td class="p-2 border">73–75</td><td class="p-2 border">26–28</td></tr>
                        <tr><td class="p-2 border">Energy (kcal/100g)</td><td class="p-2 border">62</td><td class="p-2 border">320–330</td><td class="p-2 border">134–140</td></tr>
                        <tr><td class="p-2 border">Water Activity (a<sub>w</sub>)</td><td class="p-2 border">0.993</td><td class="p-2 border">0.83–0.85</td><td class="p-2 border">0.96</td></tr>
                        <tr><td class="p-2 border">pH</td><td class="p-2 border">6.6–6.7</td><td class="p-2 border">6.3–6.5</td><td class="p-2 border">6.2–6.4 (post-sterilization)</td></tr>
                        <tr><td class="p-2 border">Titratable Acidity (%LA)</td><td class="p-2 border">0.14–0.16</td><td class="p-2 border">0.35–0.45</td><td class="p-2 border">0.30–0.40</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Quality Control ke liye Analytical Methods</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Test Parameter</th>
                            <th class="p-2 border">Method</th>
                            <th class="p-2 border">Standard Reference</th>
                            <th class="p-2 border">Specification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Total Solids</td><td class="p-2 border">Gravimetric (oven-drying 100°C pe constant weight tak); rapid screening ke liye refractometry</td><td class="p-2 border">IS:1166 / AOAC 920.115</td><td class="p-2 border">SCM: ≥72%; EM: ≥25%</td></tr>
                        <tr><td class="p-2 border">Milk Fat</td><td class="p-2 border">Gerber method (butyrometric); Rose-Gottlieb (gravimetric, reference)</td><td class="p-2 border">IS:1224 / AOAC 905.02</td><td class="p-2 border">SCM: ≥9.0%; EM: ≥8.0%</td></tr>
                        <tr><td class="p-2 border">Sucrose</td><td class="p-2 border">Polarimetric (inversion ke pehle aur baad total reducing sugars ke liye Lane-Eynon); precision ke liye HPLC</td><td class="p-2 border">IS:1479 Part III / AOAC 896.01</td><td class="p-2 border">SCM: ≥40%</td></tr>
                        <tr><td class="p-2 border">Lactose crystal size</td><td class="p-2 border">Polarized light microscopy (100× magnification); calibrated micrometer eyepiece ya digital imaging se image analysis</td><td class="p-2 border">In-house / ADMI method</td><td class="p-2 border">≤10 µm (max. 90th percentile)</td></tr>
                        <tr><td class="p-2 border">Viscosity</td><td class="p-2 border">Brookfield viscometer (spindle #4, 12 rpm, 25°C); falling ball method; capillary viscometry</td><td class="p-2 border">In-house</td><td class="p-2 border">SCM: 2000–5000 mPa·s; EM: 40–100 mPa·s</td></tr>
                        <tr><td class="p-2 border">HMF (Hydroxymethylfurfural)</td><td class="p-2 border">Spectrophotometric (Keeney & Bassette method, A284nm TCA precipitation ke baad); HPLC</td><td class="p-2 border">AOAC / IDF</td><td class="p-2 border">Heat treatment intensity ka indicator</td></tr>
                        <tr><td class="p-2 border">Commercial sterility (EM)</td><td class="p-2 border">Incubation test: 37°C/14 din (mesophiles) + 55°C/7 din (thermophiles); visual inspection (swelling, leakage) + microbial analysis</td><td class="p-2 border">IS:2551 / FDA 21 CFR 113</td><td class="p-2 border">Koi microbial growth nahi; koi can defects nahi</td></tr>
                        <tr><td class="p-2 border">Can seam integrity</td><td class="p-2 border">Double seam teardown aur measurement (seam thickness, seam length, body hook, cover hook, overlap, tightness %)</td><td class="p-2 border">IS:9396 / ASTM E2520</td><td class="p-2 border">Overlap ≥1.02 mm; tightness ≥70%</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Mass Balance aur Yield Calculations</h3>
            <p><strong>Example: 1,000 kg Sweetened Condensed Milk ka Production</strong></p>
            <p>Target composition: 9% fat, 22% SNF, 44% sucrose, 25% paani (Total solids: 75%)</p>
            <div class="bg-gray-100 p-4 rounded my-3 font-mono text-sm">
                <strong>Diya gaya hai:</strong>
                <br>Standardized milk: 3.6% fat, 8.8% SNF (fat:SNF = 1:2.44)
                <br>Target SCM: 9% fat, 22% SNF, 44% sucrose, 25% paani
                <br><br>
                <strong>Step 1: 1000 kg SCM mein chahiye milk solids</strong>
                <br>Fat = 90 kg; SNF = 220 kg; Total milk solids = 310 kg
                <br><br>
                <strong>Step 2: Kitna doodh chahiye</strong>
                <br>Fat se: 90/0.036 = 2,500 kg
                <br>SNF check: 2,500 × 0.088 = 220 kg ✓
                <br><br>
                <strong>Step 3: Kitni cheeni chahiye</strong>
                <br>1000 kg SCM mein Sucrose = 440 kg
                <br><br>
                <strong>Step 4: Kitna paani nikalka hai</strong>
                <br>Doodh mein paani: 2,500 × (1 − 0.124) = 2,190 kg
                <br>Sugar syrup (65°Brix) mein paani: 440/0.65 = 677 kg syrup → 237 kg paani syrup se
                <br>Total paani andar = 2,190 + 237 = 2,427 kg
                <br>Final product mein paani = 250 kg
                <br><strong>Evaporate karna hai paani = 2,427 − 250 = 2,177 kg</strong>
                <br><br>
                <strong>Step 5: Concentration ratio</strong>
                <br>Volume reduction ≈ 2,500 / (1000 − 440) ≈ 4.5:1 (SCM mein milk portion ke volume ke liye doodh ka volume)
                <br><br>
                <strong>Step 6: Sugar ratio check</strong>
                <br>Sugar ratio = 440 / (440 + 250) × 100 = <strong>63.8%</strong> ✓ (62.5–64.5% ke andar hai)
                <br><br>
                <strong>Step 7: Steam requirement (triple-effect evaporator TVR ke saath)</strong>
                <br>Steam economy ≈ 3.0
                <br>Steam chahiye = 2,177 / 3.0 ≈ <strong>726 kg steam</strong>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Environmental aur Sustainability Considerations</h3>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Energy consumption:</strong> SCM production mein evaporation sabse zyada energy khane wali unit operation hai. Single-effect evaporator ~2,700 kJ/kg paani evaporate karne mein lagata hai (≈ latent heat of vaporization). MVR wale multi-effect systems ise &lt;200 kJ/kg paani evaporate tak kam kar sakte hain.</li>
                <li><strong>Condensate recovery:</strong> Evaporator se nikla vapor condensate essentially distilled water hota hai aur ise CIP, boiler feed water, ya gaay peene ke paani ke liye recover kiya jaata hai, jisse freshwater consumption kam hota hai.</li>
                <li><strong>Effluent ka BOD/COD:</strong> Condensed milk plants se dairy processing wastewater ka BOD₅ 1,500–3,000 mg/L aur COD 3,000–6,000 mg/L hota hai, primarily milk solid losses se. Treatment mein screening → fat removal (DAF) → biological treatment (activated sludge/UASB) hota hai.</li>
                <li><strong>Carbon footprint:</strong> Per kg SCM approximately 1.2–2.0 kg CO₂-eq (farm-gate emissions include karke), jismein ~25% processing energy se attributable hai.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Recent Advances aur Innovations</h3>
            <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                <li><strong>Membrane pre-concentration:</strong> Reverse osmosis (RO) ya nanofiltration (NF) ka use badhta jaa raha hai evaporation se <em>pehle</em> doodh ko 12% se 25–30% total solids tak pre-concentrate karne ke liye. RO ambient temperature (5–50°C) pe aur 20–40 bar pressure pe operate hota hai, sirf electrical energy khaata hai (~8–15 kWh/m³ permeate, matlab ~30–55 kJ/kg paani removed). Ye evaporator load 50–70% kam karta hai aur pre-concentration ke dauran virtually koi thermal damage nahi hota.</li>
                <li><strong>Ohmic heating:</strong> Product ki electrical resistance use karke volumetric heating (koi heat transfer surface nahi → koi fouling nahi). Concentrated milks ke forewarming aur UHT treatment ke liye explore ho raha hai.</li>
                <li><strong>Ultrasound-assisted crystallization:</strong> Cooling ke dauran power ultrasound (20–40 kHz, 10–50 W/cm²) lagane se nucleation rate enhance hoti hai aur bina seeding ke finer lactose crystals bante hain, potentially seeding step ko replace kar sakta hai.</li>
                <li><strong>Clean-label SCM:</strong> Reduced-sugar ya alternative-sweetener SCM ka development (trehalose, erythritol, ya stevia use karke) microbiological safety maintain karte hue multi-hurdle approaches se (a<sub>w</sub> + pH + preservatives).</li>
                <li><strong>Plant-based condensed milks:</strong> Coconut, soy, aur oat-based condensed milk analogues ko different processing parameters chahiye kyunki inki protein chemistry alag hai (koi casein micelle system nahi), fat droplet characteristics alag hain, aur Maillard precursor profiles bhi alag hain.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Key References</h3>
            <ul class="list-disc list-outside pl-5 space-y-1 mt-2 text-sm">
                <li>Bylund, G. (2015). <em>Dairy Processing Handbook</em>. Tetra Pak Processing Systems AB, Lund, Sweden.</li>
                <li>Fox, P.F., Uniacke-Lowe, T., McSweeney, P.L.H., & O'Mahony, J.A. (2015). <em>Dairy Chemistry and Biochemistry</em>. 2nd ed. Springer, Cham.</li>
                <li>Walstra, P., Wouters, J.T.M., & Geurts, T.J. (2006). <em>Dairy Science and Technology</em>. 2nd ed. CRC Press, Boca Raton.</li>
                <li>Singh, H. (2004). Heat stability of milk. <em>International Journal of Dairy Technology</em>, 57(2-3), 111–119.</li>
                <li>Nickerson, T.A. (1974). Lactose crystallization in ice cream. IV. Factors responsible for reduced sandiness. <em>Journal of Dairy Science</em>, 57(12), 1334–1339.</li>
                <li>Codex Alimentarius Commission. CXS 281-1971 (Evaporated Milks); CXS 282-1971 (Sweetened Condensed Milks).</li>
                <li>FSSAI. Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011. Schedule I, Part I.</li>
                <li>FDA. 21 CFR Part 113 – Thermally Processed Low-Acid Foods Packaged in Hermetically Sealed Containers.</li>
            </ul>
        `
    },
};

    
