
export const gheeContent = {
    en: {
        title: "Ghee Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Ghee</h3>
            <p>Ghee, also known as clarified butter or anhydrous milk fat (AMF), is a class of clarified butter that originated in ancient India, with references dating back to the Vedic period (~1500 BCE). It is a premium, shelf-stable fat product obtained by heating butter or cream to remove almost all the water (~80% of the original butter's weight as water and MSNF is removed) and milk solids-not-fat (MSNF), leaving behind essentially pure milk fat (>99.5%). Its distinct nutty, aromatic flavor — attributable to Maillard reaction products and short-chain carbonyl compounds — and high smoke point (~250°C / 482°F, compared to ~175°C for butter) make it a staple in South Asian cuisine, Ayurvedic medicine, and an important value-added product in the dairy industry.</p>
            <p class="mt-2">India is the world's largest producer and consumer of ghee, utilizing approximately 30-35% of its total milk production for ghee manufacture. Annual ghee production in India exceeds 5 million metric tonnes, with the organized sector contributing about 10-15% and the rest produced by the traditional (unorganized) sector.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Chemical Composition of Ghee</h3>
            <p>Ghee is one of the most complex natural fats, containing over 400 different fatty acids and numerous bioactive compounds. Understanding its composition is fundamental to processing, quality control, and adulteration detection.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Component</th>
                            <th class="p-2 border">Approximate Concentration</th>
                            <th class="p-2 border">Scientific Significance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Triglycerides</strong></td>
                            <td class="p-2 border">~98% of total lipids</td>
                            <td class="p-2 border">The primary constituent. Triacylglycerols with mixed chain-length fatty acids (C₄–C₁₈) are responsible for the unique melting behavior and crystallization polymorphism of ghee.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Diglycerides</strong></td>
                            <td class="p-2 border">~0.25–0.40%</td>
                            <td class="p-2 border">1,2- and 1,3-diacylglycerols formed by partial hydrolysis; their ratio can indicate storage abuse or adulteration.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Free Fatty Acids</strong></td>
                            <td class="p-2 border">≤2.0% (as oleic acid)</td>
                            <td class="p-2 border">Products of lipolysis by endogenous or microbial lipases. Elevated FFA indicates poor quality raw material or improper storage.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Phospholipids</strong></td>
                            <td class="p-2 border">~0.2–1.0%</td>
                            <td class="p-2 border">Primarily phosphatidylcholine and phosphatidylethanolamine. Most are removed during clarification. Residual phospholipids can promote oxidation.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Cholesterol</strong></td>
                            <td class="p-2 border">~0.5% (≈330 mg/100g)</td>
                            <td class="p-2 border">Present as free cholesterol and cholesteryl esters. Can form cholesterol oxides (COPs) during high-temperature processing — a food safety concern.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fat-Soluble Vitamins</strong></td>
                            <td class="p-2 border">Variable</td>
                            <td class="p-2 border">Vitamin A (retinol): 600–700 IU/100g; Vitamin D₃: 40–60 IU/100g; Vitamin E (α-tocopherol): 2.4–3.6 mg/100g; Vitamin K₂ (menaquinone): 8–10 µg/100g. Vitamins A and E also serve as natural antioxidants.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Carotenoids (β-carotene)</strong></td>
                            <td class="p-2 border">3.2–7.4 µg/g</td>
                            <td class="p-2 border">Responsible for the yellow color. Concentration varies with breed, feed (pasture-fed > stall-fed), and season (summer > winter). β-carotene is a provitamin A and a potent singlet oxygen quencher.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Conjugated Linoleic Acid (CLA)</strong></td>
                            <td class="p-2 border">0.4–0.8% of total fat</td>
                            <td class="p-2 border">Primarily the c9,t11-CLA isomer (rumenic acid). Formed by biohydrogenation in the rumen and by Δ⁹-desaturase in the mammary gland. Attributed with anti-carcinogenic, anti-atherogenic, and immunomodulatory properties.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Butyric Acid (C₄:₀)</strong></td>
                            <td class="p-2 border">3.0–4.5% of total fatty acids</td>
                            <td class="p-2 border">A short-chain fatty acid (SCFA) unique to ruminant milk fat. Serves as an energy source for colonocytes, exhibits anti-inflammatory properties, and is a histone deacetylase (HDAC) inhibitor. It is the basis of the Reichert-Meissl (RM) value test for purity.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Carbonyl Compounds</strong></td>
                            <td class="p-2 border">Trace quantities</td>
                            <td class="p-2 border">Diacetyl, δ-lactones (C₁₀, C₁₂, C₁₄), 2-alkanones, and aldehydes are formed during heating. These Maillard and lipid-oxidation products constitute the characteristic flavor profile of ghee.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Moisture</strong></td>
                            <td class="p-2 border">≤0.5%</td>
                            <td class="p-2 border">Residual moisture after clarification. Water activity (a<sub>w</sub>) of properly prepared ghee is <0.2, which is below the threshold for microbial growth and most enzymatic reactions.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Fatty Acid Profile of Ghee</h3>
            <p>Milk fat has one of the most complex fatty acid profiles of any natural fat, containing fatty acids ranging from C₄:₀ (butyric) to C₂₂:₀ (behenic). The profile varies significantly with animal breed, diet, lactation stage, and season.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Fatty Acid Category</th>
                            <th class="p-2 border">% of Total Fatty Acids (Approx.)</th>
                            <th class="p-2 border">Key Fatty Acids</th>
                            <th class="p-2 border">Functional Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Short-Chain (C₄–C₆)</strong></td>
                            <td class="p-2 border">5–8%</td>
                            <td class="p-2 border">Butyric (C₄:₀), Caproic (C₆:₀)</td>
                            <td class="p-2 border">Unique to milk fat. Volatile, contribute to aroma. Basis of RM value. Butyric acid has epigenetic regulatory roles (HDAC inhibition).</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Medium-Chain (C₈–C₁₂)</strong></td>
                            <td class="p-2 border">7–12%</td>
                            <td class="p-2 border">Caprylic (C₈:₀), Capric (C₁₀:₀), Lauric (C₁₂:₀)</td>
                            <td class="p-2 border">Rapidly absorbed via portal vein; readily oxidized for energy (ketogenic). MCTs contribute to the Polenske value.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Long-Chain Saturated (C₁₄–C₁₈)</strong></td>
                            <td class="p-2 border">45–55%</td>
                            <td class="p-2 border">Myristic (C₁₄:₀, ~11%), Palmitic (C₁₆:₀, ~28%), Stearic (C₁₈:₀, ~12%)</td>
                            <td class="p-2 border">Major structural fatty acids. Palmitic acid is the most abundant. Stearic acid is considered neutral regarding cardiovascular risk as it is readily desaturated to oleic acid (C₁₈:₁) by Δ⁹-desaturase in vivo.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Monounsaturated (MUFA)</strong></td>
                            <td class="p-2 border">22–30%</td>
                            <td class="p-2 border">Oleic acid (C₁₈:₁ cis-9, ~24%)</td>
                            <td class="p-2 border">The primary unsaturated fatty acid. Higher in pasture-fed animals. Contributes to the lower melting point fraction and liquidity of ghee.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Polyunsaturated (PUFA)</strong></td>
                            <td class="p-2 border">2–5%</td>
                            <td class="p-2 border">Linoleic (C₁₈:₂, ~2%), α-Linolenic (C₁₈:₃, ~0.5%)</td>
                            <td class="p-2 border">Essential fatty acids. Relatively low in ghee, which contributes to its excellent oxidative stability compared to vegetable oils.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Trans Fatty Acids (TFA)</strong></td>
                            <td class="p-2 border">2–6%</td>
                            <td class="p-2 border">Vaccenic acid (C₁₈:₁ t11, ~3%), other trans-C₁₈:₁ isomers</td>
                            <td class="p-2 border">Natural ruminant TFAs (rTFAs) formed by ruminal biohydrogenation. Vaccenic acid is the precursor of CLA (c9,t11) via Δ⁹-desaturase. Epidemiological evidence suggests rTFAs may not carry the same cardiovascular risk as industrial TFAs (iTFAs from partial hydrogenation).</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Odd & Branched-Chain FA</strong></td>
                            <td class="p-2 border">2–3%</td>
                            <td class="p-2 border">Pentadecanoic (C₁₅:₀), Heptadecanoic (C₁₇:₀), iso- and anteiso- branched chains</td>
                            <td class="p-2 border">Synthesized by rumen microorganisms. Serve as biomarkers for dairy fat intake in nutritional epidemiology. Used to differentiate milk fat from vegetable/animal body fats.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3 text-sm text-gray-600"><strong>Note:</strong> Overall, ghee contains approximately 60–65% saturated fatty acids (SFA), 25–30% monounsaturated fatty acids (MUFA), and 3–5% polyunsaturated fatty acids (PUFA). The high SFA content, while historically viewed negatively, provides exceptional oxidative stability and a long shelf life without the need for antioxidant additives.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Ghee</h3>
            <p>The Food Safety and Standards Authority of India (FSSAI), under the <strong>Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011</strong>, has laid down specific physico-chemical standards to ensure the purity and quality of ghee. Additionally, the <strong>Bureau of Indian Standards (BIS) IS 3508:2019</strong> and <strong>AGMARK</strong> grading provide complementary quality frameworks. These standards are largely based on the unique fatty acid composition of milk fat, particularly its content of short-chain volatile fatty acids.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">FSSAI Requirement</th>
                            <th class="p-2 border">Scientific Significance & Principle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Moisture (max)</strong></td>
                            <td class="p-2 border">0.5%</td>
                            <td class="p-2 border">Low moisture ensures water activity (a<sub>w</sub>) < 0.2, well below the minimum for bacterial growth (a<sub>w</sub> ≈ 0.91 for most bacteria, 0.80 for most molds, 0.60 for osmophilic yeasts). This is the primary reason for ghee's extended shelf life (6–12 months at ambient temperature). Determined by heating a known weight of ghee at 105°C until constant weight.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat (min)</strong></td>
                            <td class="p-2 border">99.5%</td>
                            <td class="p-2 border">Ensures the product is almost pure milk fat with minimal MSNF (≤0.5%). Calculated as: Milk Fat (%) = 100 − (Moisture % + MSNF %). The extremely low MSNF content also removes the substrate for Maillard browning post-manufacture and eliminates the protein that could serve as a microbial nutrient.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Free Fatty Acids (FFA) as Oleic Acid (max)</strong></td>
                            <td class="p-2 border">2.0% (by mass)</td>
                            <td class="p-2 border">FFA content indicates the extent of <strong>lipolytic rancidity</strong> (hydrolysis of ester bonds in triglycerides). Hydrolysis is catalyzed by endogenous lipoprotein lipase (LPL) in milk or by microbial lipases from psychrotrophic bacteria (e.g., <em>Pseudomonas</em> spp.). Elevated FFA results in soapy, rancid off-flavors. Determined by titration with standardized NaOH using phenolphthalein indicator. Fresh, good-quality ghee typically has FFA < 0.5%.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Peroxide Value (max)</strong></td>
                            <td class="p-2 border">Not specified by FSSAI for ghee (but BIS recommends monitoring)</td>
                            <td class="p-2 border">Measures primary <strong>oxidative rancidity</strong> — specifically, the concentration of lipid hydroperoxides (ROOH) formed during the propagation phase of autoxidation. Expressed in milliequivalents of active oxygen per kg of fat. Fresh ghee: <1 meq O₂/kg. Values >10 meq O₂/kg indicate significant oxidative deterioration. Determined by iodometric titration (AOAC method).</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Butyro-refractometer (BR) Reading at 40°C</strong></td>
                            <td class="p-2 border">40.0 to 44.0</td>
                            <td class="p-2 border">Measures the <strong>refractive index (RI)</strong>, which is characteristic of the fatty acid composition. The RI depends on molecular weight, degree of unsaturation, and chain length of fatty acids. Pure milk fat has a characteristic BR reading range. Adulteration with most vegetable oils (which have higher RI due to greater unsaturation — e.g., soybean oil BR ~58–60) raises the reading above 44.0. Adulteration with coconut oil (lower RI, BR ~34–36) would lower it below 40.0. The instrument uses the principle of total internal reflection at a glass-fat interface.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Reichert-Meissl (RM) Value (min)</strong></td>
                            <td class="p-2 border">24.0</td>
                            <td class="p-2 border">Measures <strong>volatile, water-soluble fatty acids (C₄:₀ butyric and C₆:₀ caproic)</strong>. The RM value is defined as the mL of 0.1N aqueous NaOH required to neutralize the volatile, water-soluble acids obtained from 5g of fat under standardized conditions. Since butyric and caproic acids are <em>unique to ruminant milk fat</em> (no vegetable or non-ruminant animal fat contains them in significant quantities), a low RM value (<24) strongly suggests adulteration with non-milk fats. Pure cow ghee typically has RM values of 26–32; buffalo ghee: 24–29.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Polenske Value (PV)</strong></td>
                            <td class="p-2 border">1.0 – 2.0</td>
                            <td class="p-2 border">Measures <strong>volatile, water-insoluble fatty acids (C₈:₀ to C₁₂:₀)</strong> — caprylic, capric, and lauric acids. The PV is the mL of 0.1N aqueous NaOH required to neutralize these acids. Unlike RM value which detects dilution with most oils, the Polenske value is particularly useful for detecting adulteration with <strong>coconut oil or palm kernel oil</strong>, which are rich in lauric acid (C₁₂:₀). Coconut oil adulteration raises PV above 2.0 while maintaining an apparently normal RM value.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Iodine Value (Wijs method)</strong></td>
                            <td class="p-2 border">26–38</td>
                            <td class="p-2 border">Measures the <strong>degree of unsaturation</strong> of the fat, expressed as grams of iodine absorbed per 100g of fat. Each double bond in a fatty acid chain reacts with one molecule of iodine monochloride (Wijs reagent: ICl in glacial acetic acid). Higher values indicate more unsaturated fatty acids. Most vegetable oils have IV > 80 (e.g., soybean oil ~130, mustard oil ~100), so significant adulteration with these would raise the IV of ghee beyond 38.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Saponification Value</strong></td>
                            <td class="p-2 border">220–235</td>
                            <td class="p-2 border">Defined as mg of KOH required to completely saponify (hydrolyze) 1g of fat. It is inversely proportional to the <strong>average molecular weight</strong> of the constituent fatty acids. Milk fat has a characteristically <em>high</em> saponification value (220–235) compared to most vegetable oils (180–200) because it contains a significant proportion of <strong>short- and medium-chain fatty acids</strong> (C₄–C₁₂), which have lower molecular weights and thus more ester bonds per gram of fat.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Baudouin Test</strong></td>
                            <td class="p-2 border">Negative</td>
                            <td class="p-2 border">Detects <strong>vanaspati (hydrogenated vegetable oil/vegetable ghee)</strong>. Vanaspati in India is required to contain 5% sesame oil as a marker. The Baudouin test detects <strong>sesamol</strong> (2-methylenedioxy-4-hydroxybenzene), a lignan present in sesame oil. The test involves shaking the fat sample with concentrated HCl and a 2% furfural solution in ethanol. Sesamol reacts with furfural in the presence of HCl to form a <strong>pink/crimson color</strong>. A positive result indicates adulteration with vanaspati.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Phytosterol Test (Bömer Test)</strong></td>
                            <td class="p-2 border">Negative</td>
                            <td class="p-2 border">Detects adulteration with <strong>any vegetable oil</strong>. Vegetable oils contain phytosterols (β-sitosterol, stigmasterol, campesterol), whereas milk fat contains only cholesterol (a zoosterol). The unsaponifiable fraction is isolated, and sterols are separated. The melting point of the acetylated sterol fraction is determined: pure milk fat sterols (cholesterol acetate) melt at 114.3–114.8°C, while phytosterol acetates have higher melting points (127–137°C). A melting point >117°C indicates vegetable oil adulteration.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">AGMARK Grading of Ghee</h3>
            <p>The Directorate of Marketing and Inspection (DMI), Government of India, provides <strong>AGMARK</strong> (Agricultural Produce Grading and Marking) certification for ghee quality. AGMARK grades ghee into two main categories:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Special Grade</th>
                            <th class="p-2 border">General Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Moisture (%)</td><td class="p-2 border">≤ 0.3</td><td class="p-2 border">≤ 0.5</td></tr>
                        <tr><td class="p-2 border">FFA as Oleic Acid (%)</td><td class="p-2 border">≤ 1.4</td><td class="p-2 border">≤ 2.5</td></tr>
                        <tr><td class="p-2 border">BR Reading at 40°C (Cow)</td><td class="p-2 border">40.0–43.0</td><td class="p-2 border">40.0–43.0</td></tr>
                        <tr><td class="p-2 border">BR Reading at 40°C (Buffalo)</td><td class="p-2 border">40.0–43.5</td><td class="p-2 border">40.0–44.0</td></tr>
                        <tr><td class="p-2 border">RM Value (min)</td><td class="p-2 border">28.0 (cow) / 26.0 (buffalo)</td><td class="p-2 border">24.0</td></tr>
                        <tr><td class="p-2 border">Baudouin Test</td><td class="p-2 border">Negative</td><td class="p-2 border">Negative</td></tr>
                        <tr><td class="p-2 border">Flavor & Aroma</td><td class="p-2 border">Pleasant, characteristic</td><td class="p-2 border">Reasonably good</td></tr>
                        <tr><td class="p-2 border">Color</td><td class="p-2 border">Uniform</td><td class="p-2 border">Uniform</td></tr>
                        <tr><td class="p-2 border">Texture/Grain</td><td class="p-2 border">Medium to large grained</td><td class="p-2 border">Acceptable</td></tr>
                    </tbody>
                </table>
            </div>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Ghee</h2>
            <p>There are four main industrial methods for ghee production, each differing in raw material, equipment, energy efficiency, and the flavor profile of the final product:</p>
            <ol class="list-decimal list-outside pl-5 space-y-4 mt-4">
                <li><strong>Direct Cream Method (DC Method):</strong>
                    <p>Fresh cream with a high fat content (60–80%) is heated directly in a steam-jacketed ghee kettle. The cream is heated slowly, first evaporating the moisture phase, then browning the MSNF (protein + lactose) at 110–114°C. This method is quick, avoids the intermediate butter-making step, and yields a ghee with a strong, cooked flavor due to the higher MSNF content in cream versus butter. However, it is less common in large-scale operations due to higher heating costs (cream has more water than butter) and difficulty in controlling the endpoint. <strong>Yield: ~700–800g ghee per kg of cream (at 80% fat).</strong></p>
                </li>
                <li><strong>Creamery Butter Method (CB Method):</strong>
                    <p>Unsalted (sweet cream) butter is used as the raw material. This is the <strong>most prevalent method in the organized dairy sector</strong> as it decouples butter production from ghee manufacture, allowing butter to be stored (at −18 to −23°C for up to 12 months) and converted to ghee as per market demand. The butter (80–82% fat, 15–16% moisture, 2% MSNF) is melted and heated in a ghee kettle to 114°C. Due to lower MSNF compared to cream, the Maillard browning is moderate, producing a balanced flavor. <strong>Yield: ~820–850g ghee per kg of butter (at 82% fat).</strong></p>
                </li>
                <li><strong>Pre-stratification Method (PS Method):</strong>
                    <p>An energy-efficient modification of the CB method. Butter is melted and held at 80–85°C without agitation for 30–60 minutes, allowing gravitational separation into three layers: a top layer of denatured protein (scum), a middle layer of clear fat (~85% of total volume), and a bottom layer of buttermilk-serum containing dissolved lactose, whey proteins, and minerals. The bottom serum is drained, the fat layer is transferred to another kettle for final heating to 114°C, and the top scum is incorporated. This method reduces energy consumption by 25–30% since only the fat layer (not the entire serum phase) is heated to the final clarification temperature. This method was developed at the <strong>National Dairy Research Institute (NDRI), Karnal</strong>.</p>
                </li>
                <li><strong>Desi (Indigenous/Traditional) Method:</strong>
                    <p>The traditional Indian method involves a unique raw material pathway: whole milk → curd (dahi, fermented by <em>Lactococcus lactis</em>, <em>Lactobacillus</em> spp., and <em>Leuconostoc</em> spp.) → churning to produce 'makkhan' (desi butter, ~75% fat). The makkhan is then heated in a heavy-bottomed vessel to produce ghee. The fermentation step produces diacetyl, acetoin, lactic acid, and other metabolites that, upon heating, contribute to the very rich, complex, and distinctive aromatic flavor profile of desi ghee — widely preferred by consumers. However, the fermentation and manual churning steps result in higher FFA levels and lower yield compared to industrial methods. <strong>Yield: ~1 kg ghee per 25–30 liters of cow milk.</strong></p>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Comparison of Ghee-Making Methods</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Desi Method</th>
                            <th class="p-2 border">Direct Cream</th>
                            <th class="p-2 border">Creamery Butter</th>
                            <th class="p-2 border">Pre-stratification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Raw Material</td><td class="p-2 border">Desi makkhan (from curd)</td><td class="p-2 border">Fresh cream (60–80% fat)</td><td class="p-2 border">Unsalted butter (80–82% fat)</td><td class="p-2 border">Unsalted butter</td></tr>
                        <tr><td class="p-2 border">Scale</td><td class="p-2 border">Household / small-scale</td><td class="p-2 border">Medium</td><td class="p-2 border">Large-scale industrial</td><td class="p-2 border">Large-scale industrial</td></tr>
                        <tr><td class="p-2 border">Flavor Intensity</td><td class="p-2 border">Very strong, rich, aromatic</td><td class="p-2 border">Strong, cooked</td><td class="p-2 border">Moderate, clean</td><td class="p-2 border">Moderate, clean</td></tr>
                        <tr><td class="p-2 border">FFA Level</td><td class="p-2 border">Higher (0.5–2.0%)</td><td class="p-2 border">Moderate</td><td class="p-2 border">Low (0.2–0.5%)</td><td class="p-2 border">Low</td></tr>
                        <tr><td class="p-2 border">Energy Efficiency</td><td class="p-2 border">Low</td><td class="p-2 border">Low (more water to evaporate)</td><td class="p-2 border">Moderate</td><td class="p-2 border">High (25–30% energy saving)</td></tr>
                        <tr><td class="p-2 border">Shelf Life</td><td class="p-2 border">Shorter</td><td class="p-2 border">Good</td><td class="p-2 border">Excellent</td><td class="p-2 border">Excellent</td></tr>
                        <tr><td class="p-2 border">Ghee Residue</td><td class="p-2 border">Higher quantity</td><td class="p-2 border">Moderate</td><td class="p-2 border">Low (~2% of butter wt.)</td><td class="p-2 border">Very low in final step</td></tr>
                    </tbody>
                </table>
            </div>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart (Creamery Butter Method with HACCP Integration)</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception & Quality Testing <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span><br/><span class="text-xs font-sans text-gray-600">(Platform tests: COB, Acidity, Fat%, Adulteration screening)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Pre-heating (35–40°C) & Cream Separation <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span><br/><span class="text-xs font-sans text-gray-600">(Centrifugal separator, cream standardized to 35–40% fat)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Cream Pasteurization (95°C / no hold) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span><br/><span class="text-xs font-sans text-gray-600">(Destroys pathogens & inactivates lipase to prevent lipolysis)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling (7–10°C) → Aging (2–4 hrs) → Churning<br/><span class="text-xs font-sans text-gray-600">(Phase inversion: O/W emulsion → W/O emulsion → butter grains + buttermilk)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Unsalted White Butter (80–82% fat, 15–16% moisture, ~2% MSNF)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Melting of Butter in Steam-Jacketed Ghee Kettle (60–80°C)<br/><span class="text-xs font-sans text-gray-600">(Agitation provided by stirrer; steam pressure: 2–3 kg/cm²)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-2 bg-gray-200 border-l-4 border-gray-400 rounded text-sm text-left"><strong>Optional: Pre-stratification Path</strong><br/>Hold at 80–85°C for 30–60 min without agitation → Three-layer separation<br/>Top: Scum (denatured casein, whey proteins) → Skim off<br/>Middle: Clear fat layer (~85% volume) → Transfer to clarification kettle<br/>Bottom: Buttermilk serum (lactose, soluble proteins, minerals) → Drain<br/><em>Energy saving: ~25–30% (only fat layer heated to 114°C)</em></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Heating & Clarification</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span><br/><span class="text-xs font-sans text-gray-600"><strong>Stage 1:</strong> 60–90°C → Emulsion breaking, MSNF separation<br/><strong>Stage 2:</strong> 100–102°C → Vigorous effervescence (free water boiling)<br/><strong>Stage 3:</strong> 110–114°C → Maillard browning + caramelization + flavor development<br/>(Final temp: 110–114°C for cow butter; 112–116°C for buffalo butter)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Settling (5–10 min)</strong><br/><span class="text-xs font-sans text-gray-600">(Ghee residue sediments to bottom by gravity; clear fat layer above)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Filtration <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span><br/><span class="text-xs font-sans text-gray-600">(Muslin cloth / clarifier / plate & frame filter press; removes ghee residue)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Controlled Cooling & Granulation <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span><br/><span class="text-xs font-sans text-gray-600">(Cool slowly to 55–60°C → seed/inoculate with ghee grains → hold at 28–32°C for crystallization → β' → β polymorph transitions)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Packaging in Inert/Opaque Containers <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span><br/><span class="text-xs font-sans text-gray-600">(Tin cans, glass jars, N₂-flushed multilayer pouches; protection from light, O₂, moisture)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-100 border border-gray-300 rounded">Storage (Cool, dark place; 15–25°C)<br/><span class="text-xs font-sans text-gray-600">(Shelf life: 6–9 months at ambient; 12+ months under refrigeration or N₂ atmosphere)</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Scientific Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-6">
                <li><strong>Butter Melting & Pre-stratification:</strong>
                    <p>Unsalted butter is loaded into a steam-jacketed, stainless steel (SS 304/316) ghee kettle equipped with a mechanical stirrer. The kettle has a capacity of 500–2000 kg in industrial settings. Steam at 2–3 kg/cm² gauge pressure is admitted into the jacket, and the butter is heated to 60–80°C with continuous agitation.</p>
                    <p class="mt-2"><strong>Physical Chemistry of Melting:</strong> Butter is a water-in-oil (W/O) emulsion where water droplets (15–16%) are dispersed in a continuous fat phase. Upon melting, the crystalline fat network that stabilizes this emulsion collapses. The fat becomes liquid, and the emulsion breaks. The milk serum (aqueous phase containing dissolved lactose ~4.5%, whey proteins, casein micelle fragments, and minerals) begins to coalesce and separate from the fat phase due to density differences (density of serum ≈ 1.03 g/mL vs. fat ≈ 0.91 g/mL).</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Standard Method:</strong> Proceed directly to high-temperature clarification without a holding step. The entire mass (fat + serum + MSNF) is heated together to 114°C.</li>
                        <li><strong>Pre-stratification Method:</strong> The molten butter is held quiescently at 80–85°C for 30–60 minutes without agitation. This isothermal hold allows the emulsion to separate into three distinct layers based on <strong>Stokes' Law</strong>: the velocity of particle separation is proportional to the square of particle diameter and the density difference, and inversely proportional to viscosity. <em>V = (2r²(ρ₁ - ρ₂)g) / 9η</em>. Higher-density serum settles to the bottom, lower-density fat occupies the middle, and air-incorporated denatured protein floats to the top.
                            <ul class="list-disc pl-5 mt-1 space-y-1 text-sm">
                                <li><strong>Top Layer (Scum):</strong> Denatured whey proteins and casein — light, fluffy, and air-incorporated.</li>
                                <li><strong>Middle Layer (Fat):</strong> Clear, golden liquid fat — comprises ~85% of total volume. This is the desired fraction.</li>
                                <li><strong>Bottom Layer (Serum/Buttermilk):</strong> Aqueous phase containing dissolved lactose (~70–80% of total lactose in butter), soluble whey proteins, minerals (Ca, P, Na, K), and water-soluble vitamins (B₂, B₁₂). This is drained via a bottom valve.</li>
                            </ul>
                        The clear fat layer is then transferred to a second kettle for final clarification. This method provides <strong>25–30% energy savings</strong> since only the fat layer (~85% volume, with much less water) needs to be heated to 114°C, and the bulk of the water has already been separated without requiring phase change (boiling).</li>
                    </ul>
                </li>
                <li><strong>Heating & Clarification (CCP-2) — The Heart of Ghee Making:</strong>
                    <p>This is the most critical processing step, involving complex physicochemical transformations. The process can be scientifically divided into three distinct stages based on temperature and the dominant reactions occurring:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-4">
                        <li><strong>Stage 1 — Emulsion Breaking & MSNF Separation (60–90°C):</strong>
                            <p>The W/O emulsion progressively breaks. Fat crystalline networks melt completely. Casein and whey proteins denature (β-lactoglobulin denaturation temperature: ~78°C; α-lactalbumin: ~62°C; casein: ~>100°C but aggregation begins). Denatured proteins aggregate into visible curd-like particles. The system transitions from an emulsion to a suspension of protein particles in liquid fat, with free water trapped between them. Agitation is maintained to ensure uniform heating and prevent localized charring. Fat color changes from opaque/white (due to light scattering by dispersed water droplets and protein) to translucent yellow as the emulsion breaks.</p>
                        </li>
                        <li><strong>Stage 2 — Moisture Evaporation Phase (100–102°C):</strong>
                            <p>When the temperature reaches 100°C, free water begins to boil. The temperature remains essentially constant at 100–102°C (slightly above 100°C due to the boiling point elevation from dissolved solutes — a <strong>colligative property</strong>). This stage is characterized by vigorous <strong>effervescence</strong> (bubbling) as steam escapes from the fat. The rate of evaporation depends on the heat input (steam pressure), surface area, and agitation intensity. This is the most energy-intensive phase as it requires the <strong>latent heat of vaporization</strong> of water (2,260 kJ/kg at 100°C). A typical batch of 500 kg butter contains ~80 kg water, requiring approximately 180,000 kJ just for water evaporation. As the free water boils off, bound water (associated with proteins) remains temporarily. The effervescence gradually decreases as the residual water content drops below ~1%. <strong>Steam economy is important:</strong> energy for this phase can be reduced by pre-stratification (which removes 60–70% of the water without requiring boiling).</p>
                        </li>
                        <li><strong>Stage 3 — Clarification, Browning & Flavor Development (~110–114°C):</strong>
                            <p>Once most of the free water has evaporated (moisture < 0.5%), the temperature rises rapidly above 100°C. This is the <strong>most critical stage</strong>, as the characteristic flavor, aroma, and color of ghee develop here through several concurrent non-enzymatic browning reactions:</p>
                            <ul class="list-disc pl-5 mt-2 space-y-2 text-sm">
                                <li><strong>Maillard Reaction:</strong> A complex cascade of non-enzymatic reactions between the carbonyl group of reducing sugars (primarily lactose, a disaccharide of galactose and glucose) and the free amino groups (ε-NH₂ of lysine residues) of milk proteins. The reaction proceeds through:
                                    <ol class="list-decimal pl-5 mt-1">
                                        <li><strong>Initial Stage:</strong> Amadori rearrangement — formation of glycosylamine followed by rearrangement to 1-amino-1-deoxy-2-ketose (Amadori compound).</li>
                                        <li><strong>Intermediate Stage:</strong> Dehydration, fragmentation, and Strecker degradation of amino acids, producing α-dicarbonyl compounds (diacetyl, pyruvaldehyde), Strecker aldehydes (2-methylbutanal, 3-methylbutanal from leucine/isoleucine), and furfural derivatives.</li>
                                        <li><strong>Final Stage:</strong> Polymerization and cyclization reactions forming melanoidins — high molecular weight, brown-colored, nitrogen-containing polymers responsible for the golden-brown color.</li>
                                    </ol>
                                    Key flavor compounds produced: diacetyl (buttery), 2-alkanones (C₅–C₁₃, blue cheese-like), δ-lactones (C₈–C₁₆, creamy/peach-like), furanones (caramel-like), pyrazines (nutty/roasty), and various aldehydes.
                                </li>
                                <li><strong>Caramelization:</strong> Thermal decomposition of lactose (occurring at >160°C for pure sugars, but at lower temperatures in the presence of catalysts like amino acids and minerals present in milk). Produces caramel color (brown polymers), hydroxymethylfurfural (HMF), and various caramel-flavor compounds (diacetyl, maltol, furanones).</li>
                                <li><strong>Lipid Oxidation (controlled):</strong> Thermal oxidation of unsaturated fatty acids (primarily oleic and linoleic) generates aldehydes (hexanal, nonanal, 2,4-decadienal), ketones (2-heptanone, 2-nonanone — via β-keto acid decarboxylation), and lactones. These contribute to the overall flavor complexity. 2-Alkanones (methyl ketones) are particularly characteristic of ghee aroma — formed by the thermal decarboxylation of β-keto fatty acids derived from β-oxidation of saturated fatty acids.</li>
                                <li><strong>Lactonization:</strong> δ- and γ-hydroxy fatty acids (present in milk fat as esterified hydroxy acids) cyclize to form lactones (δ-decalactone, δ-dodecalactone, δ-tetradecalactone) upon heating, contributing creamy, peach, and coconut-like notes.</li>
                            </ul>
                            <p class="mt-2"><strong>Physical changes:</strong> The protein coagulates fully, forming brown particles known as 'ghee residue' or 'morcha' that settle at the bottom. The effervescence ceases almost entirely (only occasional small bubbles from residual bound water and volatile flavor compounds). The fat becomes crystal clear with a golden-amber color.</p>
                            <p class="mt-2"><strong>Endpoint Determination:</strong> Traditionally determined by sensory cues — cessation of effervescence, appearance of the brown residue, and development of the characteristic aroma. In modern plants, endpoint is also determined by measuring:
                                <ul class="list-disc pl-5 mt-1 text-sm">
                                    <li>Final temperature: 110–114°C for cow ghee; 112–116°C for buffalo ghee (buffalo butter has slightly higher moisture and MSNF)</li>
                                    <li>Residual moisture: < 0.3% (measured by Karl Fischer titration or infrared moisture analyzer)</li>
                                    <li>Color: spectrophotometric measurement (absorbance at 450 nm for yellow, 550 nm for brown)</li>
                                </ul>
                            </p>
                            <p class="mt-2 text-sm bg-yellow-50 p-2 rounded border border-yellow-200"><strong>⚠ Critical Note:</strong> Overheating beyond 120°C leads to excessive browning, bitter/burnt off-flavors, formation of potentially harmful compounds (acrolein from glycerol decomposition at >200°C, polycyclic aromatic hydrocarbons (PAHs), and increased cholesterol oxidation products — COPs), and loss of natural antioxidants (tocopherols, carotenoids). Underheating (<108°C) results in incomplete moisture removal, poor flavor development, and reduced shelf life. This stage is therefore a <strong>Critical Control Point (CCP-2)</strong>.</p>
                        </li>
                    </ul>
                </li>
                <li><strong>Settling of Ghee Residue (5–10 minutes):</strong>
                    <p>After heating is stopped (steam shut off), the ghee is allowed to stand undisturbed for 5–10 minutes. During this quiescent period, the heavier, browned solid particles (ghee residue — density ~1.1–1.2 g/mL) settle to the bottom of the kettle by gravitational sedimentation (Stokes' Law), leaving a clear layer of pure fat (density ~0.87–0.89 g/mL at ~110°C) on top. The large density difference (~0.25 g/mL) and the low viscosity of the hot fat facilitate rapid settling. This step greatly improves the efficiency of the subsequent filtration step.</p>
                    <p class="mt-2"><strong>Ghee Residue (By-product):</strong> Constitutes 1.5–2.5% of the weight of butter used. Composition: ~50–60% fat, 25–30% protein (highly denatured, cross-linked), 5–10% lactose (caramelized), and 3–5% moisture. It is utilized as a flavoring agent in confectionery, as animal feed, or for fat recovery by solvent extraction.</p>
                </li>
                <li><strong>Filtration (oPRP):</strong>
                    <p>Once settling is complete, the hot, clear supernatant ghee is carefully decanted or pumped through a filtration system to remove all suspended particles (ghee residue, undissolved protein aggregates, any extraneous matter). This is classified as an <strong>Operational Prerequisite Program (oPRP)</strong> because failure to filter properly results in hazy ghee with suspended particles that promote oxidative rancidity and reduce shelf life.</p>
                    <ul class="list-disc pl-5 mt-2 space-y-1 text-sm">
                        <li><strong>Traditional:</strong> Filtration through multi-layered muslin cloth; effective but labor-intensive and batch-limited.</li>
                        <li><strong>Industrial:</strong> Plate-and-frame filter press with filter aid (diatomaceous earth / perlite); vibrating screen filters; or centrifugal clarifiers (hermetic separators operating at 6,000–8,000 RPM). The centrifugal clarifier is most efficient, capable of removing particles down to 1–5 µm and handling continuous throughput.</li>
                    </ul>
                    <p class="mt-2">The goal is to obtain a perfectly clear, brilliant liquid fat with <strong>turbidity < 0.5 NTU</strong> and <strong>insoluble impurities < 0.05%</strong>. Residual phospholipids and protein fragments, if not removed, act as pro-oxidants (phospholipids provide a polar interface where oxygen can interact with the lipid, and protein-bound metals like iron and copper catalyze Fenton-type radical generation).</p>
                </li>
                <li><strong>Cooling & Granulation (oPRP) — Crystallization Science:</strong>
                    <p>The filtered ghee is cooled in a controlled manner. This step is a crucial <strong>oPRP</strong> for developing the desirable granular texture, which is a key consumer-quality attribute. The science of ghee crystallization is governed by the principles of <strong>lipid polymorphism</strong> and <strong>nucleation kinetics</strong>.</p>
                    <ul class="list-disc pl-5 mt-2 space-y-2">
                        <li><strong>Lipid Polymorphism:</strong> Triglycerides can crystallize into three main polymorphic forms:
                            <ol class="list-decimal pl-5 mt-1 text-sm">
                                <li><strong>α-form (hexagonal subcell):</strong> Least stable, lowest melting point, forms rapidly upon fast cooling. Gives a smooth, waxy texture.</li>
                                <li><strong>β'-form (orthorhombic perpendicular subcell):</strong> Intermediate stability and melting point. Produces fine, needle-like crystals that give a smooth, homogeneous texture. <em>This is the predominant form in freshly granulated ghee.</em></li>
                                <li><strong>β-form (triclinic parallel subcell):</strong> Most stable, highest melting point, forms slowly. Produces large, coarse, plate-like crystals. <em>Gradual transformation from β' to β during storage is responsible for the large-grained appearance of well-aged ghee.</em></li>
                            </ol>
                        </li>
                        <li><strong>Nucleation & Crystal Growth:</strong> As ghee cools below its cloud point (~40–45°C), the high-melting-point triglycerides (those rich in long-chain SFA like C₁₆:₀ and C₁₈:₀) become supersaturated and begin to nucleate. The rate of nucleation is controlled by:
                            <ul class="list-disc pl-5 text-sm">
                                <li><strong>Degree of supercooling (ΔT):</strong> Greater ΔT → more nucleation sites → finer crystals.</li>
                                <li><strong>Cooling rate:</strong> Slow cooling → fewer nuclei, larger crystals (desired granular texture). Rapid cooling → many nuclei, very fine crystals (smooth, pasty texture — undesirable).</li>
                                <li><strong>Seeding (inoculation):</strong> Addition of 0.1–0.5% pre-formed ghee crystals (seed crystals) at 55–60°C provides heterogeneous nucleation sites, initiating controlled crystallization and promoting uniform grain formation.</li>
                                <li><strong>Agitation:</strong> Gentle stirring during the crystallization window distributes nuclei uniformly and promotes even crystal growth.</li>
                            </ul>
                        </li>
                        <li><strong>Optimal Granulation Protocol:</strong>
                            <ol class="list-decimal pl-5 text-sm mt-1">
                                <li>Cool filtered ghee to ~60°C in the settling tank.</li>
                                <li>Transfer to a crystallization vat / cooling tank with cold water jacket.</li>
                                <li>At 55–60°C, add seed crystals (0.1–0.5% w/w of previously granulated ghee). The seed must be at the stable β or β' form.</li>
                                <li>Cool slowly (0.5–1°C per minute) with gentle agitation to 28–32°C.</li>
                                <li>Hold at 28–32°C for 1–2 hours to allow crystal growth and polymorphic stabilization.</li>
                                <li>Package at a semi-solid consistency when ~60–70% of the fat has crystallized.</li>
                            </ol>
                        </li>
                        <li class="mt-2"><strong>Temperature for Granulation:</strong>
                            <ul class="list-disc pl-5 text-sm">
                                <li><strong>Cow ghee:</strong> Optimal granulation at 27–30°C (lower melting point due to higher unsaturation).</li>
                                <li><strong>Buffalo ghee:</strong> Optimal granulation at 30–35°C (higher melting point due to lower unsaturation and higher palmitic acid content).</li>
                            </ul>
                        </li>
                    </ul>
                    <p class="mt-2 text-sm"><strong>Grain structure:</strong> Well-granulated ghee shows distinct, medium to large-sized crystals (0.5–2 mm) in a matrix of liquid oil. The crystal network entraps liquid oil by capillary forces. Under polarized light microscopy, the crystals appear as bright birefringent structures (Maltese cross pattern) against a dark background.</p>
                </li>
                <li><strong>Packaging (PRP):</strong>
                    <p>The granulated ghee is filled into suitable containers that protect it from the three primary causes of quality deterioration: <strong>light</strong> (photooxidation), <strong>oxygen</strong> (autoxidation), and <strong>moisture</strong> (hydrolysis).</p>
                    <ul class="list-disc pl-5 mt-2 space-y-1 text-sm">
                        <li><strong>Tinplate containers (with lacquer lining):</strong> Excellent barrier properties; opaque (blocks UV/visible light); prevents oxygen ingress. The food-grade epoxy-phenolic lacquer prevents interaction between the fatty acids and the tin surface. Standard sizes: 500 mL, 1 L, 5 L, 15 kg.</li>
                        <li><strong>Glass jars (amber or green):</strong> Inert, impermeable, reusable. Amber/green glass filters UV radiation (wavelengths <500 nm) that catalyzes photooxidation via singlet oxygen sensitization by riboflavin (if traces remain) or direct photolysis of lipid hydroperoxides.</li>
                        <li><strong>Multi-layered flexible pouches:</strong> Typically PET (12 µm) / Al foil (9–12 µm) / LDPE (50–75 µm) laminate. The aluminum layer provides an absolute barrier to light, oxygen (OTR ~0), and moisture (WVTR ~0). Cost-effective for retail packaging.</li>
                        <li><strong>Nitrogen flushing / Vacuum packaging:</strong> Headspace oxygen is displaced with food-grade N₂ gas (99.9% purity) before sealing, reducing the initial O₂ content to <2%. This significantly retards the initiation phase of autoxidation. Alternatively, vacuum packaging removes headspace air entirely. Both methods can extend shelf life by 30–50%.</li>
                    </ul>
                    <p class="mt-2">Fill temperature: 35–40°C (semi-solid state) to ensure uniform filling without air pocket incorporation.</p>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shelf Life & Deterioration Mechanisms</h3>
            <p>Ghee is remarkably stable compared to most edible fats due to its low moisture (a<sub>w</sub> < 0.2), absence of protein and lactose (which prevents microbial growth and non-enzymatic browning during storage), high saturated fatty acid content, and presence of natural antioxidants. Nevertheless, it does undergo gradual quality deterioration through the following mechanisms:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Mechanism</th>
                            <th class="p-2 border">Chemistry</th>
                            <th class="p-2 border">Influencing Factors</th>
                            <th class="p-2 border">Detection</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Autoxidation (primary deterioration)</strong></td>
                            <td class="p-2 border">Free-radical chain reaction: <strong>Initiation</strong> (RH → R• + H•, catalyzed by heat/light/metals) → <strong>Propagation</strong> (R• + O₂ → ROO•; ROO• + RH → ROOH + R•) → <strong>Termination</strong> (radical recombination). Primary products: lipid hydroperoxides (ROOH). Secondary decomposition of ROOH → aldehydes (hexanal, propanal, 4-hydroxynonenal), ketones, epoxides, alcohols → off-flavors.</td>
                            <td class="p-2 border">O₂ availability, light (UV), temperature, pro-oxidant metals (Fe²⁺, Cu²⁺ — even at ppb levels via Fenton reaction), low antioxidant levels, high PUFA content.</td>
                            <td class="p-2 border">Peroxide Value (PV) — primary oxidation. p-Anisidine Value (AV) — secondary oxidation. TOTOX = 2PV + AV. Thiobarbituric Acid Reactive Substances (TBARS) — malondialdehyde. Sensory: cardboard, painty, metallic flavors.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Photooxidation</strong></td>
                            <td class="p-2 border">Type II photosensitized oxidation: Riboflavin (if traces remain) acts as a <strong>photosensitizer</strong>, absorbing light (λ ~450 nm) and transferring energy to ground-state triplet oxygen (³O₂) to generate highly reactive <strong>singlet oxygen (¹O₂)</strong>. ¹O₂ reacts with PUFA ~1,500× faster than ³O₂ via a concerted 'ene' reaction, requiring no radical initiation and proceeding even at low temperatures.</td>
                            <td class="p-2 border">Light intensity and wavelength (UV > visible), presence of photosensitizers (riboflavin, chlorophyll derivatives), transparent/clear packaging.</td>
                            <td class="p-2 border">Same as autoxidation, but develops faster under light. β-carotene and tocopherols act as singlet oxygen quenchers (physical quenching).</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Hydrolytic Rancidity</strong></td>
                            <td class="p-2 border">Hydrolysis of ester bonds in triglycerides by residual moisture (if >0.5%) and heat, releasing free fatty acids. Short-chain FFAs (butyric, caproic, caprylic) have low flavor thresholds and contribute soapy, rancid, goaty off-flavors. <em>TAG + H₂O → DAG + FFA</em></td>
                            <td class="p-2 border">Moisture content (primary factor), temperature, residual lipase activity (should be fully inactivated during heating to 114°C), contact with moisture-laden surfaces.</td>
                            <td class="p-2 border">Free Fatty Acid (FFA) content — expressed as % oleic acid. Acid value (mg KOH/g fat). Sensory: soapy, rancid, sweaty.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Cholesterol Oxidation</strong></td>
                            <td class="p-2 border">Formation of cholesterol oxidation products (COPs) — oxysterols — including 7-ketocholesterol, 7α/β-hydroxycholesterol, 5,6-epoxycholesterol, and cholestane-triol. These are formed by the same radical oxidation and singlet oxygen pathways that attack fatty acids, but targeting the sterol ring system.</td>
                            <td class="p-2 border">High temperature during processing (>120°C accelerates COP formation), prolonged storage with light/oxygen exposure, high surface-area-to-volume ratio.</td>
                            <td class="p-2 border">GC-MS or HPLC analysis. COPs are cytotoxic, pro-atherogenic, pro-inflammatory, and mutagenic at µg levels — a food safety concern. Total COPs in fresh ghee: 10–30 µg/g; can increase to 50–100 µg/g with improper storage.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Flavor Reversion</strong></td>
                            <td class="p-2 border">Development of specific off-flavors (beany, fishy, grassy) due to oxidation of linolenic acid (C₁₈:₃) and its positional isomers, producing 2,4,7-decatrienal and other low-threshold volatile compounds.</td>
                            <td class="p-2 border">Relatively minor in ghee due to low linolenic acid content (~0.5%); more significant in soybean or linseed oils.</td>
                            <td class="p-2 border">Sensory evaluation (trained panel). GC-Olfactometry.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3 text-sm"><strong>Natural Antioxidant System in Ghee:</strong> Ghee contains endogenous antioxidants — α-tocopherol (2–4 mg/100g), β-carotene (3–7 µg/g), and small amounts of phospholipids (which have pro-oxidant AND antioxidant roles depending on concentration). α-Tocopherol acts as a chain-breaking antioxidant (donating H• to ROO• radical: ROO• + α-TocOH → ROOH + α-TocO•). β-Carotene is a singlet oxygen quencher and radical scavenger. During high-temperature processing, 15–25% of these antioxidants are lost.</p>
            <p class="mt-2 text-sm"><strong>Expected Shelf Life:</strong> 6–9 months at ambient temperature (25–30°C) in opaque packaging; 12+ months under refrigeration (4–7°C) or with nitrogen-flushed packaging. Deterioration follows a sigmoidal curve — there is an <strong>induction period</strong> (lag phase, length depends on antioxidant content and storage conditions) followed by a rapid exponential increase in oxidation products.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Adulteration Detection — Advanced Analytical Methods</h3>
            <p>Ghee adulteration is a significant economic and food safety concern. Common adulterants include vegetable oils (soybean, cottonseed, palm, coconut), animal body fats (tallow, lard), vanaspati (hydrogenated vegetable fat), and synthetic colors. Modern analytical techniques complement the classical chemical tests (RM, BR, Baudouin) described in the FSSAI standards section:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Method</th>
                            <th class="p-2 border">Principle</th>
                            <th class="p-2 border">Adulterant Detected</th>
                            <th class="p-2 border">Detection Limit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Gas Chromatography (GC-FID)</strong></td>
                            <td class="p-2 border">Fatty acid methyl esters (FAME) separated by carbon chain length and unsaturation on a polar capillary column (e.g., SP-2560, 100 m × 0.25 mm). Quantifies individual fatty acids. Butyric acid (C₄:₀) content < 3% or absence of odd-chain FA (C₁₅:₀, C₁₇:₀) indicates adulteration.</td>
                            <td class="p-2 border">All vegetable oils, animal body fats</td>
                            <td class="p-2 border">~5% adulteration</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>GC-MS of Sterols (Sterol Profile)</strong></td>
                            <td class="p-2 border">Unsaponifiable matter is isolated; sterols are derivatized (TMS ethers) and analyzed by GC-MS. Milk fat contains only cholesterol; vegetable oils contain β-sitosterol, stigmasterol, campesterol, brassicasterol (in rapeseed). Detection of any phytosterol confirms vegetable oil adulteration.</td>
                            <td class="p-2 border">All vegetable oils (highly specific)</td>
                            <td class="p-2 border">~2% adulteration</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Triglyceride Profile (GC or HPLC)</strong></td>
                            <td class="p-2 border">Intact triglycerides separated by carbon number (CN = total acyl carbons). Milk fat has a unique broad distribution (CN 24–54) due to short-chain FA. Vegetable oils show narrow distribution (CN 48–54). Ratios like CN 48/CN 50 are diagnostic.</td>
                            <td class="p-2 border">Vegetable oils, especially when FAME profile is inconclusive</td>
                            <td class="p-2 border">~3–5%</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>FTIR Spectroscopy (Mid-IR / NIR)</strong></td>
                            <td class="p-2 border">Fourier-Transform Infrared spectroscopy measures absorption of IR radiation by molecular bonds (C=O, C-H, O-H). Chemometric models (PLS, PCA, SIMCA) are trained on pure and adulterated ghee spectra. Key regions: 3000–2800 cm⁻¹ (C-H stretching), 1745 cm⁻¹ (C=O ester), 1160–1000 cm⁻¹ (C-O stretching, fingerprint region).</td>
                            <td class="p-2 border">Rapid screening for most adulterants</td>
                            <td class="p-2 border">~5–10% (with chemometrics, can be improved to ~1–2%)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Differential Scanning Calorimetry (DSC)</strong></td>
                            <td class="p-2 border">Measures heat flow associated with thermal transitions (melting, crystallization). Pure ghee has characteristic melting and crystallization thermograms with specific peak temperatures and enthalpies. Adulteration alters the thermal profile — additional or shifted peaks appear.</td>
                            <td class="p-2 border">All fats/oils (complementary technique)</td>
                            <td class="p-2 border">~5–10%</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Electronic Nose (e-Nose)</strong></td>
                            <td class="p-2 border">Array of semi-selective gas sensors (metal oxide semiconductor, conducting polymer, or quartz crystal microbalance) detect volatile compounds in the headspace above heated ghee. Pattern recognition algorithms (ANN, SVM) classify samples as pure or adulterated based on sensor response patterns.</td>
                            <td class="p-2 border">Rapid screening; particularly effective for vanaspati and vegetable oil adulterants with distinct volatile profiles</td>
                            <td class="p-2 border">~10–15%</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>DNA-based Methods (PCR)</strong></td>
                            <td class="p-2 border">Species-specific PCR targeting mitochondrial DNA markers (e.g., cytochrome b gene) can detect adulteration with fats from non-bovine species (pig lard, goat tallow). DNA extraction from fat is challenging due to low nucleic acid content after rendering.</td>
                            <td class="p-2 border">Animal body fats (pig lard, goat/sheep tallow) — important for Halal/Kosher verification</td>
                            <td class="p-2 border">~1% (if DNA is intact)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Raman Spectroscopy</strong></td>
                            <td class="p-2 border">Complementary to FTIR; measures inelastic scattering of monochromatic light. Strong Raman bands at 1655 cm⁻¹ (C=C stretching — degree of unsaturation) and 1440 cm⁻¹ (CH₂ deformation) are sensitive to fatty acid composition changes.</td>
                            <td class="p-2 border">Vegetable oils (especially high-oleic/linoleic oils)</td>
                            <td class="p-2 border">~5% with chemometrics</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Nutritional & Health Aspects of Ghee — A Scientific Perspective</h3>
            <p>The nutritional significance of ghee has been debated extensively. While traditional Ayurvedic medicine attributes numerous health benefits to ghee, modern nutritional science provides a more nuanced view:</p>
            <ul class="list-disc pl-5 space-y-3 mt-3">
                <li><strong>Energy Value:</strong> ~900 kcal per 100g (37.6 kJ/g) — essentially pure fat.</li>
                <li><strong>Saturated Fat & Cardiovascular Health:</strong> Ghee contains ~60–65% SFA. The traditional "diet-heart hypothesis" postulated that dietary SFA raises serum LDL-cholesterol, increasing cardiovascular disease (CVD) risk. However, recent meta-analyses (Siri-Tarino et al., 2010, AJCN; de Souza et al., 2015, BMJ) have found <strong>insufficient evidence</strong> to directly link SFA intake with CVD events when replacing SFA with complex carbohydrates. The SFA in ghee is heterogeneous: stearic acid (C₁₈:₀, ~12%) is considered neutral as it is desaturated to oleic acid in vivo; short- and medium-chain SFA (C₄–C₁₂, ~15%) are metabolized differently (portal vein → liver for rapid β-oxidation) than long-chain SFA. Nevertheless, moderation is advised, and the WHO recommends keeping SFA intake <10% of total energy.</li>
                <li><strong>Butyric Acid (C₄:₀):</strong> A major bioactive component (~3–4% of ghee fatty acids). Acts as a histone deacetylase (HDAC) inhibitor — epigenetically regulating gene expression involved in cell differentiation, apoptosis, and anti-inflammation. Serves as the primary energy source for colonocytes. Has demonstrated anti-inflammatory effects by inhibiting NF-κB signaling in intestinal epithelial cells (Canani et al., 2011, WJG). Shows anti-neoplastic activity in colorectal cell lines ("butyrate paradox" — promotes differentiation in cancerous colonocytes while supporting proliferation in normal colonocytes).</li>
                <li><strong>Conjugated Linoleic Acid (CLA):</strong> Ghee from pasture-fed animals contains 0.4–0.8% CLA (primarily c9,t11-isomer — rumenic acid). Attributed with anti-carcinogenic effects (inhibits initiation, promotion, and metastasis in animal models), anti-atherogenic properties (reduces atherosclerotic lesion formation in animal models), improved insulin sensitivity, and modulation of immune response. However, effective doses used in animal studies (0.5–1% of diet) are difficult to achieve through dietary ghee alone.</li>
                <li><strong>Fat-Soluble Vitamins:</strong> Ghee is a significant dietary source of Vitamins A, D, E, and K₂ (menaquinone-4). Vitamin K₂ directs calcium to bones and teeth rather than arteries (activates osteocalcin and matrix Gla protein), potentially reducing vascular calcification risk.</li>
                <li><strong>High Smoke Point:</strong> ~250°C, significantly higher than butter (~175°C), olive oil (~190°C), and most vegetable oils (~200–230°C). This makes ghee suitable for high-temperature cooking (deep frying, sautéing) with minimal formation of harmful thermal decomposition products (acrolein, HNE, polar compounds). At temperatures above the smoke point, triglycerides decompose to glycerol (which dehydrates to acrolein — a respiratory irritant and possible carcinogen) and free fatty acids.</li>
                <li><strong>Lactose and Casein Free:</strong> The clarification process removes virtually all lactose and casein proteins, making ghee generally well-tolerated by individuals with <strong>lactose intolerance</strong> (lactase deficiency) and many with <strong>cow milk protein allergy (CMPA)</strong>. However, trace amounts of casein may remain (< 2.5 µg/g), and highly sensitive individuals should exercise caution.</li>
                <li><strong>Cholesterol Content:</strong> ~330 mg per 100g. Dietary cholesterol has a modest effect on serum cholesterol for most individuals (hypo-responders, ~75% of population), as hepatic cholesterol synthesis is downregulated by dietary intake (negative feedback via SREBP-2 pathway). However, in hyper-responders (~25%), dietary cholesterol significantly raises both LDL and HDL cholesterol.</li>
                <li><strong>Ayurvedic Significance:</strong> In Ayurveda, ghee is termed 'Ghrita' and is considered 'Sattvic' (pure). It is used as a vehicle (anupana) for herbal medicines to enhance their bioavailability — the lipid carrier facilitates absorption of lipophilic active compounds. Aged ghee ('Purana Ghrita') is especially valued. Scientific basis: the lipid matrix of ghee may enhance the oral bioavailability of lipophilic drugs/phytochemicals through lymphatic absorption (bypassing hepatic first-pass metabolism via chylomicron formation in the intestinal epithelium).</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Continuous Ghee Making — Modern Industrial Processes</h3>
            <p>While traditional batch processing remains common, continuous ghee-making systems have been developed for large-scale operations (capacity: 1,000–5,000 kg/hr). Two prominent continuous systems are:</p>
            <ol class="list-decimal pl-5 space-y-3 mt-3">
                <li><strong>Scraped Surface Heat Exchanger (SSHE) Method:</strong>
                    <p>Molten butter is pumped through a series of scraped-surface heat exchangers (also called Votator or Kombinator type). The thin-film heating in SSHE provides rapid, uniform heat transfer (overall heat transfer coefficient: 800–1200 W/m²K) with continuous scraping preventing fouling and localized overheating. The process involves:
                    <ol class="list-decimal pl-5 mt-1 text-sm">
                        <li>Pre-heating section: 80–90°C (emulsion breaking)</li>
                        <li>Flash evaporation section: reduced pressure (~0.5 bar absolute) at 90–100°C to remove moisture efficiently at lower temperature</li>
                        <li>High-temperature clarification section: 110–120°C in a cylindrical holding tube</li>
                        <li>Centrifugal separation: hermetic separator removes ghee residue</li>
                        <li>Vacuum deaeration: removes dissolved oxygen to improve oxidative stability</li>
                        <li>Cooling and crystallization in a Kombinator (SSHE in cooling mode)</li>
                    </ol>
                    <strong>Advantages:</strong> Consistent product quality, high throughput, energy-efficient, reduced labor, closed system (hygiene), better control over final temperature. <strong>Developed by: SPX Flow, GEA, Alfa Laval.</strong></p>
                </li>
                <li><strong>Thin-Film Evaporator Method:</strong>
                    <p>Molten butter is fed into a thin-film evaporator (agitated or wiped-film type) where it spreads as a thin film (~1–3 mm) on a heated cylindrical surface. The thin film ensures rapid moisture evaporation with minimal thermal damage. The vapors are continuously removed by vacuum or a condenser. The concentrated fat is then passed through a high-temperature holding tube for final clarification. This method is particularly energy-efficient and produces ghee with minimal thermal abuse (lower COPs and better antioxidant retention).</p>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">HACCP Plan Summary for Ghee (Creamery Butter Method)</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">CCP/oPRP</th>
                            <th class="p-2 border">Hazard</th>
                            <th class="p-2 border">Critical Limit</th>
                            <th class="p-2 border">Monitoring</th>
                            <th class="p-2 border">Corrective Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>CCP-1:</strong> Cream Pasteurization</td>
                            <td class="p-2 border">Biological: Survival of pathogens (<em>Salmonella</em>, <em>Listeria monocytogenes</em>, <em>E. coli</em> O157:H7, <em>S. aureus</em>); survival of lipase enzyme</td>
                            <td class="p-2 border">Min. 95°C for 15 sec (or equivalent: 72°C/15 sec for HTST pasteurization — but higher temp preferred for lipase inactivation)</td>
                            <td class="p-2 border">Continuous recording of temperature (RTD sensor) and flow rate; flow diversion valve (FDV) activated if T < critical limit; alkaline phosphatase test (negative = adequate pasteurization)</td>
                            <td class="p-2 border">Divert under-processed cream; recalibrate equipment; hold and reprocess</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>CCP-2:</strong> Heating & Clarification</td>
                            <td class="p-2 border">Biological: Survival of spore-forming bacteria (<em>Bacillus cereus</em>, <em>Clostridium perfringens</em>) — though risk is minimal due to final a<sub>w</sub> < 0.2. Chemical: Inadequate moisture removal → microbial growth potential; overheating → COPs, acrolein, PAHs.</td>
                            <td class="p-2 border">Final temperature: 110–114°C; Final moisture: ≤ 0.5%; FFA ≤ 2.0% (as oleic acid)</td>
                            <td class="p-2 border">Continuous temperature monitoring (calibrated thermocouple in kettle); moisture analysis of each batch (Karl Fischer / IR moisture meter); sensory endpoint verification</td>
                            <td class="p-2 border">If moisture > 0.5%: continue heating; if overheated (>120°C): segregate batch, test for COPs/acrolein, downgrade or dispose</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>oPRP-1:</strong> Filtration</td>
                            <td class="p-2 border">Physical: Suspended particles, metal fragments (from kettle/stirrer wear); Chemical: Residual phospholipids promoting oxidation</td>
                            <td class="p-2 border">Filtered ghee clarity: turbidity < 0.5 NTU; visual inspection: clear, brilliant; metal detector: no ferrous/non-ferrous particles > 1.5 mm</td>
                            <td class="p-2 border">Visual inspection + turbidity measurement of each batch; periodic integrity testing of filter media; in-line metal detector after filling</td>
                            <td class="p-2 border">Re-filter if turbidity exceeds limit; replace damaged filter media; reject contaminated product</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>oPRP-2:</strong> Cooling & Granulation</td>
                            <td class="p-2 border">Quality: Improper grain size (too fine = pasty; too coarse = oily separation)</td>
                            <td class="p-2 border">Granulation temperature: 28–32°C; holding time: 1–2 hrs; grain size: medium to large (visual standard)</td>
                            <td class="p-2 border">Temperature monitoring during cooling; visual comparison with reference standard</td>
                            <td class="p-2 border">Adjust cooling rate; add seed crystals; if unsatisfactory, remelt and re-granulate</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Differences Between Cow and Buffalo Ghee</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Cow Ghee</th>
                            <th class="p-2 border">Buffalo Ghee</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Color</td><td class="p-2 border">Golden yellow (due to β-carotene — cows convert less β-carotene to retinol)</td><td class="p-2 border">White to creamy white (buffalo converts nearly all dietary β-carotene to retinol — hence no residual pigment)</td></tr>
                        <tr><td class="p-2 border">Texture</td><td class="p-2 border">Soft, fine-grained</td><td class="p-2 border">Hard, coarse-grained</td></tr>
                        <tr><td class="p-2 border">Melting Point</td><td class="p-2 border">32–36°C</td><td class="p-2 border">35–40°C</td></tr>
                        <tr><td class="p-2 border">Iodine Value</td><td class="p-2 border">30–38 (higher unsaturation)</td><td class="p-2 border">26–34 (lower unsaturation)</td></tr>
                        <tr><td class="p-2 border">RM Value</td><td class="p-2 border">26–32 (higher butyric acid content)</td><td class="p-2 border">24–29</td></tr>
                        <tr><td class="p-2 border">BR Reading (40°C)</td><td class="p-2 border">40.0–43.0</td><td class="p-2 border">40.0–44.0</td></tr>
                        <tr><td class="p-2 border">Saponification Value</td><td class="p-2 border">225–232</td><td class="p-2 border">220–230</td></tr>
                        <tr><td class="p-2 border">Palmitic Acid (C₁₆:₀)</td><td class="p-2 border">~25–28%</td><td class="p-2 border">~28–35% (higher — contributes to harder texture)</td></tr>
                        <tr><td class="p-2 border">Oleic Acid (C₁₈:₁)</td><td class="p-2 border">~24–28%</td><td class="p-2 border">~20–24% (lower — contributes to higher melting point)</td></tr>
                        <tr><td class="p-2 border">CLA Content</td><td class="p-2 border">Higher (~0.5–0.8%)</td><td class="p-2 border">Lower (~0.3–0.5%)</td></tr>
                        <tr><td class="p-2 border">Cholesterol</td><td class="p-2 border">~330 mg/100g</td><td class="p-2 border">~275 mg/100g</td></tr>
                        <tr><td class="p-2 border">Vitamin A (as retinol)</td><td class="p-2 border">~600 IU/100g + β-carotene</td><td class="p-2 border">~700 IU/100g (as retinol; no β-carotene)</td></tr>
                        <tr><td class="p-2 border">Flavor</td><td class="p-2 border">Mild, sweet, slightly nutty</td><td class="p-2 border">Strong, heavy, rich</td></tr>
                        <tr><td class="p-2 border">Consumer Preference</td><td class="p-2 border">Generally preferred in North India, globally</td><td class="p-2 border">Preferred in parts of South India, Gujarat</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Ghee Residue — Composition & Utilization</h3>
            <p>Ghee residue (also called 'ghee sediment', 'morcha', or 'chhurpi') is the brownish deposit that settles at the bottom of the ghee kettle after clarification. It is a by-product of the process and constitutes <strong>1.5–2.5% of the weight of butter used</strong> (or about 5–8% in the direct cream method due to higher MSNF in cream).</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Component</th>
                            <th class="p-2 border">Percentage (approx.)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Fat (entrapped ghee)</td><td class="p-2 border">50–65%</td></tr>
                        <tr><td class="p-2 border">Protein (highly denatured, cross-linked)</td><td class="p-2 border">20–30%</td></tr>
                        <tr><td class="p-2 border">Lactose (caramelized)</td><td class="p-2 border">5–12%</td></tr>
                        <tr><td class="p-2 border">Moisture</td><td class="p-2 border">3–5%</td></tr>
                        <tr><td class="p-2 border">Minerals (Ash)</td><td class="p-2 border">2–4%</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3"><strong>Utilization:</strong></p>
            <ul class="list-disc pl-5 space-y-1 text-sm">
                <li><strong>Fat Recovery:</strong> Solvent extraction (using food-grade hexane or petroleum ether) can recover 50–60% of the residue weight as fat, which can be used in confectionery or soap manufacture.</li>
                <li><strong>Confectionery:</strong> Directly used as a flavoring ingredient in traditional Indian sweets (ladoo, barfi, halwa) due to its rich, caramelized flavor.</li>
                <li><strong>Animal Feed:</strong> After fat extraction, the defatted residue (rich in protein and minerals) can be used as a protein supplement in animal feed.</li>
                <li><strong>Baked Goods:</strong> Used in cookies, cakes, and bread for flavor and color enhancement.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Key Differences: Ghee vs. Clarified Butter vs. Anhydrous Milk Fat (AMF)</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Ghee</th>
                            <th class="p-2 border">Clarified Butter (Western)</th>
                            <th class="p-2 border">Anhydrous Milk Fat (AMF)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Heating Temperature</td><td class="p-2 border">110–120°C (browning occurs)</td><td class="p-2 border">~100°C (no browning)</td><td class="p-2 border">~100°C under vacuum (no browning)</td></tr>
                        <tr><td class="p-2 border">Maillard Browning</td><td class="p-2 border"><strong>Yes</strong> — critical for flavor</td><td class="p-2 border">No — solids removed before browning</td><td class="p-2 border">No</td></tr>
                        <tr><td class="p-2 border">Flavor</td><td class="p-2 border">Characteristic nutty, caramelized, rich</td><td class="p-2 border">Mild buttery</td><td class="p-2 border">Bland, neutral</td></tr>
                        <tr><td class="p-2 border">Color</td><td class="p-2 border">Golden amber (Maillard pigments)</td><td class="p-2 border">Light yellow</td><td class="p-2 border">Pale yellow</td></tr>
                        <tr><td class="p-2 border">Moisture</td><td class="p-2 border">≤ 0.5%</td><td class="p-2 border">≤ 0.5%</td><td class="p-2 border">≤ 0.1% (Codex standard)</td></tr>
                        <tr><td class="p-2 border">Milk Fat</td><td class="p-2 border">≥ 99.5%</td><td class="p-2 border">≥ 99%</td><td class="p-2 border">≥ 99.8%</td></tr>
                        <tr><td class="p-2 border">Application</td><td class="p-2 border">Cooking, religious rituals, Ayurveda</td><td class="p-2 border">Cooking, sauce-making</td><td class="p-2 border">Recombined dairy products, chocolate, bakery, ice cream</td></tr>
                        <tr><td class="p-2 border">Codex Standard</td><td class="p-2 border">No separate Codex standard (FSSAI governs)</td><td class="p-2 border">—</td><td class="p-2 border">Codex STAN 280-1973</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Summary of Key Scientific Concepts in Ghee Processing</h3>
            <ul class="list-disc pl-5 space-y-2 mt-3">
                <li><strong>Phase Inversion:</strong> Butter making involves O/W → W/O emulsion inversion during churning.</li>
                <li><strong>Colligative Properties:</strong> Boiling point elevation of the serum phase due to dissolved lactose and minerals.</li>
                <li><strong>Stokes' Law:</strong> Governs the gravitational settling of protein particles and serum separation in pre-stratification.</li>
                <li><strong>Maillard Reaction:</strong> Non-enzymatic browning between lactose (reducing sugar) and lysine residues of milk proteins — the single most important flavor-generating reaction in ghee making.</li>
                <li><strong>Lipid Polymorphism:</strong> α → β' → β crystalline transitions during cooling determine ghee texture and grain.</li>
                <li><strong>Autoxidation Chain Reaction:</strong> Free-radical mechanism of lipid deterioration during storage; controlled by antioxidants and packaging.</li>
                <li><strong>Water Activity (a<sub>w</sub>):</strong> The critical parameter for microbiological stability — ghee's a<sub>w</sub> < 0.2 prevents virtually all microbial growth.</li>
                <li><strong>Latent Heat of Vaporization:</strong> The dominant energy cost in ghee making (2,260 kJ/kg water); pre-stratification reduces this energy demand significantly.</li>
                <li><strong>Reichert-Meissl Chemistry:</strong> Exploits the unique presence of volatile, water-soluble short-chain fatty acids (C₄, C₆) in milk fat for authenticity verification.</li>
            </ul>
        `
    },
    hi: {
        title: "Ghee Processing (Ghee Banane ki Prakriya)",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Ghee ka Introduction</h3>
            <p>Ghee, jise clarified butter ya anhydrous milk fat (AMF) bhi kehte hain, ek bahut purana dairy product hai jo ancient India mein originate hua tha. Vedic period (~1500 BCE) se iska reference milta hai. Ye ek premium, shelf-stable fat product hai jo butter ya cream ko garam karke banaya jaata hai — isme se lagbhag saara paani (~80% of butter's weight as water aur MSNF) aur milk solids-not-fat (MSNF) nikal diye jaate hain, aur sirf pure milk fat (>99.5%) bach jaata hai.</p>
            <p class="mt-2">Iska distinct nutty, aromatic flavor — jo mainly Maillard reaction products aur short-chain carbonyl compounds ki wajah se hota hai — aur iska bahut high smoke point (~250°C / 482°F, jabki butter ka sirf ~175°C hota hai) ise South Asian cuisine, Ayurvedic medicine, aur dairy industry mein ek important value-added product banata hai.</p>
            <p class="mt-2">India duniya ka sabse bada ghee producer aur consumer hai. Apne total milk production ka lagbhag 30-35% ghee banane mein use karta hai. India mein annual ghee production 5 million metric tonnes se zyada hai, jismein organized sector ka contribution sirf 10-15% hai aur baaki sab traditional (unorganized) sector se aata hai.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Ghee ki Chemical Composition</h3>
            <p>Ghee sabse complex natural fats mein se ek hai — isme 400 se zyada different fatty acids aur bohot saare bioactive compounds hote hain. Iski composition samajhna processing, quality control, aur adulteration detection ke liye bahut zaroori hai.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Component</th>
                            <th class="p-2 border">Approximate Concentration</th>
                            <th class="p-2 border">Scientific Significance (Vaigyanik Mahatva)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Triglycerides</strong></td>
                            <td class="p-2 border">~98% of total lipids</td>
                            <td class="p-2 border">Ye primary constituent hai. Mixed chain-length fatty acids (C₄–C₁₈) wale triacylglycerols ghee ke unique melting behavior aur crystallization polymorphism ke liye responsible hain.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Diglycerides</strong></td>
                            <td class="p-2 border">~0.25–0.40%</td>
                            <td class="p-2 border">1,2- aur 1,3-diacylglycerols jo partial hydrolysis se bante hain; inka ratio storage abuse ya adulteration indicate kar sakta hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Free Fatty Acids (FFA)</strong></td>
                            <td class="p-2 border">≤2.0% (as oleic acid)</td>
                            <td class="p-2 border">Ye lipolysis ke products hain jo endogenous ya microbial lipases se bante hain. Zyada FFA matlab kharab quality raw material ya galat storage.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Phospholipids</strong></td>
                            <td class="p-2 border">~0.2–1.0%</td>
                            <td class="p-2 border">Mainly phosphatidylcholine aur phosphatidylethanolamine hote hain. Zyada tar clarification mein nikal jaate hain. Jo bache hue hain wo oxidation promote kar sakte hain (pro-oxidant effect).</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Cholesterol</strong></td>
                            <td class="p-2 border">~0.5% (≈330 mg/100g)</td>
                            <td class="p-2 border">Free cholesterol aur cholesteryl esters ke roop mein present hota hai. High-temperature processing ke dauran cholesterol oxides (COPs) ban sakte hain — ye ek food safety concern hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Fat-Soluble Vitamins</strong></td>
                            <td class="p-2 border">Variable</td>
                            <td class="p-2 border">Vitamin A (retinol): 600–700 IU/100g; Vitamin D₃: 40–60 IU/100g; Vitamin E (α-tocopherol): 2.4–3.6 mg/100g; Vitamin K₂ (menaquinone): 8–10 µg/100g. Vitamins A aur E natural antioxidants ki tarah bhi kaam karte hain.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Carotenoids (β-carotene)</strong></td>
                            <td class="p-2 border">3.2–7.4 µg/g</td>
                            <td class="p-2 border">Ghee ke yellow color ke liye responsible hai. Concentration breed, feed (pasture-fed > stall-fed), aur season (summer > winter) se vary karta hai. β-carotene ek provitamin A hai aur powerful singlet oxygen quencher hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Conjugated Linoleic Acid (CLA)</strong></td>
                            <td class="p-2 border">0.4–0.8% of total fat</td>
                            <td class="p-2 border">Mainly c9,t11-CLA isomer (rumenic acid) hota hai. Ye rumen mein biohydrogenation se aur mammary gland mein Δ⁹-desaturase se banta hai. Iske anti-carcinogenic, anti-atherogenic, aur immunomodulatory properties bataye gaye hain.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Butyric Acid (C₄:₀)</strong></td>
                            <td class="p-2 border">3.0–4.5% of total fatty acids</td>
                            <td class="p-2 border">Ek short-chain fatty acid (SCFA) jo sirf ruminant milk fat mein hota hai — ye ghee ki pehchaan hai. Colonocytes ke liye energy source hai, anti-inflammatory properties hain, aur histone deacetylase (HDAC) inhibitor hai. Yahi Reichert-Meissl (RM) value test ka basis hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Carbonyl Compounds</strong></td>
                            <td class="p-2 border">Trace quantities</td>
                            <td class="p-2 border">Diacetyl, δ-lactones (C₁₀, C₁₂, C₁₄), 2-alkanones, aur aldehydes heating ke dauran bante hain. Ye Maillard aur lipid-oxidation products ghee ke characteristic flavor profile banate hain.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Moisture (Nami)</strong></td>
                            <td class="p-2 border">≤0.5%</td>
                            <td class="p-2 border">Clarification ke baad bachne wali residual moisture. Sahi tarike se bane ghee ki water activity (a<sub>w</sub>) <0.2 hoti hai, jo microbial growth aur zyada tar enzymatic reactions ke threshold se bahut neeche hai.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Ghee ka Fatty Acid Profile</h3>
            <p>Milk fat ka fatty acid profile sabse complex natural fats mein se ek hai — isme C₄:₀ (butyric) se lekar C₂₂:₀ (behenic) tak ke fatty acids hote hain. Ye profile animal breed, diet, lactation stage, aur season ke saath significantly vary karta hai.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Fatty Acid Category</th>
                            <th class="p-2 border">% of Total FA (Approx.)</th>
                            <th class="p-2 border">Key Fatty Acids</th>
                            <th class="p-2 border">Functional Role (Kaam)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Short-Chain (C₄–C₆)</strong></td>
                            <td class="p-2 border">5–8%</td>
                            <td class="p-2 border">Butyric (C₄:₀), Caproic (C₆:₀)</td>
                            <td class="p-2 border">Sirf milk fat mein milte hain — ye ghee ki uniqueness hai. Volatile hain, aroma mein contribute karte hain. RM value ka basis hain. Butyric acid ke epigenetic regulatory roles hain (HDAC inhibition).</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Medium-Chain (C₈–C₁₂)</strong></td>
                            <td class="p-2 border">7–12%</td>
                            <td class="p-2 border">Caprylic (C₈:₀), Capric (C₁₀:₀), Lauric (C₁₂:₀)</td>
                            <td class="p-2 border">Jaldi absorb ho jaate hain portal vein ke through; readily oxidize hoke energy dete hain (ketogenic). MCTs Polenske value mein contribute karte hain.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Long-Chain Saturated (C₁₄–C₁₈)</strong></td>
                            <td class="p-2 border">45–55%</td>
                            <td class="p-2 border">Myristic (C₁₄:₀, ~11%), Palmitic (C₁₆:₀, ~28%), Stearic (C₁₈:₀, ~12%)</td>
                            <td class="p-2 border">Major structural fatty acids hain. Palmitic acid sabse zyada abundant hai. Stearic acid ko cardiovascular risk ke mamle mein neutral maana jaata hai kyunki ye body mein Δ⁹-desaturase se oleic acid (C₁₈:₁) mein convert ho jaata hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Monounsaturated (MUFA)</strong></td>
                            <td class="p-2 border">22–30%</td>
                            <td class="p-2 border">Oleic acid (C₁₈:₁ cis-9, ~24%)</td>
                            <td class="p-2 border">Primary unsaturated fatty acid hai. Pasture-fed animals mein zyada hota hai. Ghee ke lower melting point fraction aur liquidity mein contribute karta hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Polyunsaturated (PUFA)</strong></td>
                            <td class="p-2 border">2–5%</td>
                            <td class="p-2 border">Linoleic (C₁₈:₂, ~2%), α-Linolenic (C₁₈:₃, ~0.5%)</td>
                            <td class="p-2 border">Essential fatty acids hain. Ghee mein relatively kam hain, isiliye vegetable oils ke comparison mein ghee ki oxidative stability bahut acchi hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Trans Fatty Acids (TFA)</strong></td>
                            <td class="p-2 border">2–6%</td>
                            <td class="p-2 border">Vaccenic acid (C₁₈:₁ t11, ~3%), other trans-C₁₈:₁ isomers</td>
                            <td class="p-2 border">Natural ruminant TFAs (rTFAs) jo ruminal biohydrogenation se bante hain. Vaccenic acid Δ⁹-desaturase ke through CLA (c9,t11) ka precursor hai. Epidemiological evidence suggest karta hai ki rTFAs mein industrial TFAs (iTFAs — partial hydrogenation se bane) jaisa cardiovascular risk nahi hota.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Odd & Branched-Chain FA</strong></td>
                            <td class="p-2 border">2–3%</td>
                            <td class="p-2 border">Pentadecanoic (C₁₅:₀), Heptadecanoic (C₁₇:₀), iso- aur anteiso- branched chains</td>
                            <td class="p-2 border">Rumen microorganisms dwara synthesize hote hain. Nutritional epidemiology mein dairy fat intake ke biomarkers ke roop mein kaam aate hain. Milk fat ko vegetable/animal body fats se differentiate karne mein help karte hain.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3 text-sm text-gray-600"><strong>Note:</strong> Overall, ghee mein lagbhag 60–65% saturated fatty acids (SFA), 25–30% monounsaturated fatty acids (MUFA), aur 3–5% polyunsaturated fatty acids (PUFA) hote hain. High SFA content — jo historically negative maana jaata tha — actually exceptional oxidative stability aur lambi shelf life deta hai bina kisi antioxidant additive ke.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">FSSAI Standards for Ghee (Ghee ke FSSAI Maapdand)</h3>
            <p>Food Safety and Standards Authority of India (FSSAI) ne <strong>Food Safety and Standards (Food Products Standards and Food Additives) Regulations, 2011</strong> ke under ghee ki purity aur quality ensure karne ke liye specific physico-chemical standards tay kiye hain. Iske alawa, <strong>Bureau of Indian Standards (BIS) IS 3508:2019</strong> aur <strong>AGMARK</strong> grading complementary quality frameworks provide karte hain. Ye standards mainly milk fat ki unique fatty acid composition — khaas taur par short-chain volatile fatty acids ke content — par based hain.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">FSSAI Requirement</th>
                            <th class="p-2 border">Scientific Significance aur Principle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Moisture (max)</strong></td>
                            <td class="p-2 border">0.5%</td>
                            <td class="p-2 border">Kam moisture se water activity (a<sub>w</sub>) < 0.2 rehti hai, jo bacteria ke growth ke minimum (a<sub>w</sub> ≈ 0.91), molds ke (a<sub>w</sub> 0.80), aur osmophilic yeasts ke (a<sub>w</sub> 0.60) se bahut neeche hai. Yahi main reason hai ki ghee itni lambi shelf life (6–12 months at ambient temperature) deta hai. Ise measure karne ke liye ghee ko 105°C par constant weight tak heat karte hain.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Milk Fat (min)</strong></td>
                            <td class="p-2 border">99.5%</td>
                            <td class="p-2 border">Ye ensure karta hai ki product lagbhag pure milk fat hai jisme minimal MSNF (≤0.5%) ho. Formula: Milk Fat (%) = 100 − (Moisture % + MSNF %). Bahut kam MSNF hone se manufacture ke baad Maillard browning ka substrate hat jaata hai aur protein — jo microbial nutrient ka kaam karta hai — bhi nikal jaata hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Free Fatty Acids (FFA) as Oleic Acid (max)</strong></td>
                            <td class="p-2 border">2.0% (by mass)</td>
                            <td class="p-2 border">FFA content <strong>lipolytic rancidity</strong> (triglycerides mein ester bonds ka hydrolysis) ki extent batata hai. Hydrolysis ko milk mein endogenous lipoprotein lipase (LPL) ya psychrotrophic bacteria (jaise <em>Pseudomonas</em> spp.) ke microbial lipases catalyze karte hain. Zyada FFA se soapy, rancid off-flavors aate hain. Ise standardized NaOH se phenolphthalein indicator use karke titration se measure karte hain. Fresh, acchi quality wale ghee mein FFA typically < 0.5% hota hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Peroxide Value (max)</strong></td>
                            <td class="p-2 border">FSSAI ne ghee ke liye specify nahi kiya (lekin BIS monitoring recommend karta hai)</td>
                            <td class="p-2 border">Primary <strong>oxidative rancidity</strong> measure karta hai — specifically, lipid hydroperoxides (ROOH) ki concentration jo autoxidation ke propagation phase mein bante hain. Milliequivalents of active oxygen per kg fat mein express hota hai. Fresh ghee: <1 meq O₂/kg. Values >10 meq O₂/kg significant oxidative deterioration indicate karti hain. Iodometric titration (AOAC method) se determine hota hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Butyro-refractometer (BR) Reading at 40°C</strong></td>
                            <td class="p-2 border">40.0 to 44.0</td>
                            <td class="p-2 border"><strong>Refractive index (RI)</strong> measure karta hai, jo fatty acid composition ki characteristic hai. RI fatty acids ke molecular weight, degree of unsaturation, aur chain length par depend karta hai. Pure milk fat ka ek characteristic BR reading range hota hai. Zyada tar vegetable oils se adulteration (jinka RI higher hota hai — jaise soybean oil BR ~58–60) se reading 44.0 se upar chali jaati hai. Coconut oil se adulteration (lower RI, BR ~34–36) se reading 40.0 se neeche aa jaati hai. Instrument total internal reflection ke principle par kaam karta hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Reichert-Meissl (RM) Value (min)</strong></td>
                            <td class="p-2 border">24.0</td>
                            <td class="p-2 border"><strong>Volatile, water-soluble fatty acids (C₄:₀ butyric aur C₆:₀ caproic)</strong> measure karta hai. RM value ka matlab hai — 5g fat se standardized conditions mein nikale gaye volatile, water-soluble acids ko neutralize karne ke liye kitne mL 0.1N aqueous NaOH chahiye. Kyunki butyric aur caproic acids <em>sirf ruminant milk fat mein</em> significant quantities mein hote hain (koi bhi vegetable ya non-ruminant animal fat mein itne nahi hote), kam RM value (<24) strongly adulteration suggest karta hai. Pure cow ghee mein RM values typically 26–32 hote hain; buffalo ghee mein: 24–29.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Polenske Value (PV)</strong></td>
                            <td class="p-2 border">1.0 – 2.0</td>
                            <td class="p-2 border"><strong>Volatile, water-insoluble fatty acids (C₈:₀ to C₁₂:₀)</strong> — caprylic, capric, aur lauric acids measure karta hai. PV wo mL 0.1N aqueous NaOH hai jo in acids ko neutralize karne ke liye chahiye. RM value ke opposite, Polenske value khaas taur par <strong>coconut oil ya palm kernel oil</strong> se adulteration detect karne ke liye useful hai — kyunki ye lauric acid (C₁₂:₀) mein rich hote hain. Coconut oil milane se PV 2.0 se upar chala jaata hai jabki RM value normal lag sakti hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Iodine Value (Wijs method)</strong></td>
                            <td class="p-2 border">26–38</td>
                            <td class="p-2 border">Fat ki <strong>degree of unsaturation</strong> measure karta hai, grams of iodine absorbed per 100g fat mein express hota hai. Fatty acid chain mein har ek double bond ek molecule iodine monochloride (Wijs reagent: ICl in glacial acetic acid) se react karta hai. Zyada values matlab zyada unsaturated fatty acids. Zyada tar vegetable oils ka IV > 80 hota hai (jaise soybean oil ~130, mustard oil ~100), toh zyada adulteration se ghee ki IV 38 se upar chali jaayegi.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Saponification Value</strong></td>
                            <td class="p-2 border">220–235</td>
                            <td class="p-2 border">1g fat ko completely saponify (hydrolyze) karne ke liye kitne mg KOH chahiye, wo batata hai. Ye constituent fatty acids ke <strong>average molecular weight</strong> ke inversely proportional hai. Milk fat ki saponification value characteristically <em>high</em> (220–235) hoti hai compared to zyada tar vegetable oils (180–200) kyunki isme significant proportion <strong>short- aur medium-chain fatty acids</strong> (C₄–C₁₂) hote hain — jinke molecular weights kam hain aur toh per gram fat mein zyada ester bonds hain.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Baudouin Test</strong></td>
                            <td class="p-2 border">Negative</td>
                            <td class="p-2 border"><strong>Vanaspati (hydrogenated vegetable oil/vegetable ghee)</strong> detect karta hai. India mein vanaspati mein marker ke taur par 5% sesame oil milana mandatory hai. Baudouin test <strong>sesamol</strong> (2-methylenedioxy-4-hydroxybenzene) detect karta hai, jo sesame oil mein present ek lignan hai. Test mein fat sample ko concentrated HCl aur 2% furfural solution in ethanol ke saath shake karte hain. Sesamol HCl ki presence mein furfural se react karke <strong>pink/crimson color</strong> deta hai. Positive result matlab vanaspati se adulteration hai.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Phytosterol Test (Bömer Test)</strong></td>
                            <td class="p-2 border">Negative</td>
                            <td class="p-2 border"><strong>Kisi bhi vegetable oil</strong> se adulteration detect karta hai. Vegetable oils mein phytosterols (β-sitosterol, stigmasterol, campesterol) hote hain, jabki milk fat mein sirf cholesterol (ek zoosterol) hota hai. Unsaponifiable fraction isolate karke sterols alag karte hain. Acetylated sterol fraction ka melting point determine karte hain: pure milk fat sterols (cholesterol acetate) 114.3–114.8°C par melt hota hai, jabki phytosterol acetates ka melting point higher hota hai (127–137°C). Agar melting point >117°C aaye toh vegetable oil adulteration confirm hai.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Ghee ki AGMARK Grading</h3>
            <p>Directorate of Marketing and Inspection (DMI), Government of India, ghee quality ke liye <strong>AGMARK</strong> (Agricultural Produce Grading and Marking) certification deta hai. AGMARK ghee ko do main categories mein grade karta hai:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Special Grade</th>
                            <th class="p-2 border">General Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Moisture (%)</td><td class="p-2 border">≤ 0.3</td><td class="p-2 border">≤ 0.5</td></tr>
                        <tr><td class="p-2 border">FFA as Oleic Acid (%)</td><td class="p-2 border">≤ 1.4</td><td class="p-2 border">≤ 2.5</td></tr>
                        <tr><td class="p-2 border">BR Reading at 40°C (Cow)</td><td class="p-2 border">40.0–43.0</td><td class="p-2 border">40.0–43.0</td></tr>
                        <tr><td class="p-2 border">BR Reading at 40°C (Buffalo)</td><td class="p-2 border">40.0–43.5</td><td class="p-2 border">40.0–44.0</td></tr>
                        <tr><td class="p-2 border">RM Value (min)</td><td class="p-2 border">28.0 (cow) / 26.0 (buffalo)</td><td class="p-2 border">24.0</td></tr>
                        <tr><td class="p-2 border">Baudouin Test</td><td class="p-2 border">Negative</td><td class="p-2 border">Negative</td></tr>
                        <tr><td class="p-2 border">Flavor & Aroma</td><td class="p-2 border">Pleasant, characteristic</td><td class="p-2 border">Reasonably good</td></tr>
                        <tr><td class="p-2 border">Color (Rang)</td><td class="p-2 border">Uniform (ek jaisa)</td><td class="p-2 border">Uniform</td></tr>
                        <tr><td class="p-2 border">Texture/Grain (Daana)</td><td class="p-2 border">Medium to large grained</td><td class="p-2 border">Acceptable</td></tr>
                    </tbody>
                </table>
            </div>
            
            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Ghee ki Processing (Ghee Banane ka Tarika)</h2>
            <p>Ghee banane ki chaar main industrial methods hain, jo raw material, equipment, energy efficiency, aur final product ke flavor profile mein alag-alag hain:</p>
            <ol class="list-decimal list-outside pl-5 space-y-4 mt-4">
                <li><strong>Direct Cream Method (DC Method):</strong>
                    <p>Fresh cream jiska fat content high (60–80%) ho, use seedha steam-jacketed ghee kettle mein heat karte hain. Cream ko dheere-dheere garam karte hain, pehle moisture phase evaporate hota hai, phir MSNF (protein + lactose) 110–114°C par brown hota hai. Ye method quick hai, beech mein butter banane ki zaroorat nahi padti, aur isse ghee ko strong, cooked flavor milta hai kyunki cream mein butter se zyada MSNF hota hai. Lekin large-scale operations mein ye kam common hai kyunki heating costs zyada hain (cream mein butter se zyada paani hai) aur endpoint control mushkil hai. <strong>Yield: ~700–800g ghee per kg cream (80% fat par).</strong></p>
                </li>
                <li><strong>Creamery Butter Method (CB Method):</strong>
                    <p>Unsalted (sweet cream) butter raw material ke roop mein use hota hai. Ye <strong>organized dairy sector mein sabse zyada prevalent method</strong> hai kyunki ye butter production ko ghee manufacture se decouple kar deta hai — butter ko store karke (−18 to −23°C par 12 months tak) market demand ke according ghee mein convert kar sakte hain. Butter (80–82% fat, 15–16% moisture, 2% MSNF) ko ghee kettle mein melt karke 114°C tak heat karte hain. Cream ke comparison mein kam MSNF hone se Maillard browning moderate hoti hai, aur balanced flavor aata hai. <strong>Yield: ~820–850g ghee per kg butter (82% fat par).</strong></p>
                </li>
                <li><strong>Pre-stratification Method (PS Method):</strong>
                    <p>CB method ka ek energy-efficient modification hai. Butter ko melt karke 80–85°C par 30–60 minutes tak bina hilaye (without agitation) rakha jaata hai, jisse gravitational separation hoti hai — teen layers mein: top par denatured protein (scum), beech mein clear fat (~85% of total volume), aur neeche buttermilk-serum jisme dissolved lactose, whey proteins, aur minerals hote hain. Neeche ka serum drain kar dete hain, fat layer ko dusre kettle mein transfer karke 114°C tak final heating dete hain. Ye method energy consumption 25–30% tak reduce karta hai kyunki sirf fat layer (not entire serum phase) ko final high temperature tak heat karna padta hai. Ye method <strong>National Dairy Research Institute (NDRI), Karnal</strong> mein develop hui thi.</p>
                </li>
                <li><strong>Desi (Indigenous/Traditional) Method:</strong>
                    <p>Ye traditional Indian method hai jisme unique raw material pathway hota hai: whole milk → dahi (curd, <em>Lactococcus lactis</em>, <em>Lactobacillus</em> spp., aur <em>Leuconostoc</em> spp. se fermented) → churning se 'makkhan' (desi butter, ~75% fat) banate hain. Phir makkhan ko heavy-bottomed bartan mein heat karke ghee banaate hain. Fermentation step mein diacetyl, acetoin, lactic acid, aur doosre metabolites bante hain jo heating par bahut rich, complex, aur distinctive aromatic flavor dete hain — consumers ise sabse zyada pasand karte hain. Lekin fermentation aur manual churning ki wajah se FFA levels zyada aur yield kam hoti hai industrial methods ke comparison mein. <strong>Yield: ~1 kg ghee per 25–30 liters cow milk.</strong></p>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Ghee Banane ke Methods ki Comparison</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Desi Method</th>
                            <th class="p-2 border">Direct Cream</th>
                            <th class="p-2 border">Creamery Butter</th>
                            <th class="p-2 border">Pre-stratification</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Raw Material</td><td class="p-2 border">Desi makkhan (dahi se)</td><td class="p-2 border">Fresh cream (60–80% fat)</td><td class="p-2 border">Unsalted butter (80–82% fat)</td><td class="p-2 border">Unsalted butter</td></tr>
                        <tr><td class="p-2 border">Scale (Paimana)</td><td class="p-2 border">Ghar / small-scale</td><td class="p-2 border">Medium</td><td class="p-2 border">Large-scale industrial</td><td class="p-2 border">Large-scale industrial</td></tr>
                        <tr><td class="p-2 border">Flavor Intensity</td><td class="p-2 border">Bahut strong, rich, aromatic</td><td class="p-2 border">Strong, cooked</td><td class="p-2 border">Moderate, clean</td><td class="p-2 border">Moderate, clean</td></tr>
                        <tr><td class="p-2 border">FFA Level</td><td class="p-2 border">Zyada (0.5–2.0%)</td><td class="p-2 border">Moderate</td><td class="p-2 border">Kam (0.2–0.5%)</td><td class="p-2 border">Kam</td></tr>
                        <tr><td class="p-2 border">Energy Efficiency</td><td class="p-2 border">Kam</td><td class="p-2 border">Kam (zyada paani evaporate karna padta hai)</td><td class="p-2 border">Moderate</td><td class="p-2 border">High (25–30% energy bachti hai)</td></tr>
                        <tr><td class="p-2 border">Shelf Life</td><td class="p-2 border">Chhota</td><td class="p-2 border">Accha</td><td class="p-2 border">Bahut Accha</td><td class="p-2 border">Bahut Accha</td></tr>
                        <tr><td class="p-2 border">Ghee Residue</td><td class="p-2 border">Zyada quantity</td><td class="p-2 border">Moderate</td><td class="p-2 border">Kam (~2% of butter wt.)</td><td class="p-2 border">Bahut kam final step mein</td></tr>
                    </tbody>
                </table>
            </div>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart (Creamery Butter Method with HACCP Integration)</h3>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception & Quality Testing <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span><br/><span class="text-xs font-sans text-gray-600">(Platform tests: COB, Acidity, Fat%, Adulteration screening)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Pre-heating (35–40°C) & Cream Separation <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span><br/><span class="text-xs font-sans text-gray-600">(Centrifugal separator, cream ko 35–40% fat par standardize karte hain)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Cream Pasteurization (95°C / no hold) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span><br/><span class="text-xs font-sans text-gray-600">(Pathogens ko marta hai & lipase ko inactivate karta hai taaki lipolysis na ho)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling (7–10°C) → Aging (2–4 hrs) → Churning<br/><span class="text-xs font-sans text-gray-600">(Phase inversion: O/W emulsion → W/O emulsion → butter grains + buttermilk)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">Unsalted White Butter (80–82% fat, 15–16% moisture, ~2% MSNF)</div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Butter ko Steam-Jacketed Ghee Kettle mein melt karna (60–80°C)<br/><span class="text-xs font-sans text-gray-600">(Stirrer se agitation; steam pressure: 2–3 kg/cm²)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-2 bg-gray-200 border-l-4 border-gray-400 rounded text-sm text-left"><strong>Optional: Pre-stratification Path</strong><br/>80–85°C par 30–60 min bina hilaye rakhna → Teen layers mein separation<br/>Top: Scum (denatured casein, whey proteins) → Upar se hata do<br/>Middle: Clear fat layer (~85% volume) → Clarification kettle mein bhejo<br/>Bottom: Buttermilk serum (lactose, soluble proteins, minerals) → Neeche se drain karo<br/><em>Energy saving: ~25–30% (sirf fat layer ko 114°C tak heat karna padta hai)</em></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>Heating & Clarification</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span><br/><span class="text-xs font-sans text-gray-600"><strong>Stage 1:</strong> 60–90°C → Emulsion tootta hai, MSNF alag hota hai<br/><strong>Stage 2:</strong> 100–102°C → Zor se uble (free water boiling — effervescence)<br/><strong>Stage 3:</strong> 110–114°C → Maillard browning + caramelization + flavor development<br/>(Final temp: cow butter ke liye 110–114°C; buffalo butter ke liye 112–116°C)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Settling (5–10 min)</strong><br/><span class="text-xs font-sans text-gray-600">(Ghee residue gravity se neeche baithta hai; upar clear fat layer)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">Filtration (Chaanna) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span><br/><span class="text-xs font-sans text-gray-600">(Muslin cloth / clarifier / plate & frame filter press; ghee residue nikalta hai)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-purple-100 border border-purple-300 rounded">Controlled Cooling & Granulation (Daana banana) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span><br/><span class="text-xs font-sans text-gray-600">(Dheere dheere 55–60°C tak thanda karo → seed/ghee ke dane dalo → 28–32°C par rakh ke crystallization hone do → β' → β polymorph transitions)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-teal-100 border border-teal-300 rounded">Inert/Opaque Containers mein Packaging <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span><br/><span class="text-xs font-sans text-gray-600">(Tin cans, glass jars, N₂-flushed multilayer pouches; light, O₂, moisture se bachao)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-100 border border-gray-300 rounded">Storage (Thandi, andheri jagah; 15–25°C)<br/><span class="text-xs font-sans text-gray-600">(Shelf life: ambient par 6–9 months; refrigeration ya N₂ atmosphere mein 12+ months)</span></div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Steps ki Detailed Scientific Explanation</h3>
            <ol class="list-decimal list-outside pl-5 space-y-6">
                <li><strong>Butter Melting & Pre-stratification:</strong>
                    <p>Unsalted butter ko ek steam-jacketed, stainless steel (SS 304/316) ghee kettle mein daalte hain jismein mechanical stirrer laga hota hai. Industrial settings mein kettle ki capacity 500–2000 kg hoti hai. Jacket mein 2–3 kg/cm² gauge pressure par steam daalte hain, aur butter ko continuous agitation ke saath 60–80°C tak heat karte hain.</p>
                    <p class="mt-2"><strong>Melting ki Physical Chemistry:</strong> Butter ek water-in-oil (W/O) emulsion hai jahan paani ki boondein (15–16%) ek continuous fat phase mein dispersed hoti hain. Melt hone par, wo crystalline fat network jo is emulsion ko stable rakhta tha, collapse ho jaata hai. Fat liquid ho jaata hai, aur emulsion toot jaata hai. Milk serum (aqueous phase jismein dissolved lactose ~4.5%, whey proteins, casein micelle fragments, aur minerals hote hain) coalesce hone lagta hai aur density difference ki wajah se fat phase se alag hone lagta hai (serum ki density ≈ 1.03 g/mL vs. fat ki density ≈ 0.91 g/mL).</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Standard Method:</strong> Seedha high-temperature clarification par jaate hain bina kisi holding step ke. Poora mass (fat + serum + MSNF) saath mein 114°C tak heat hota hai.</li>
                        <li><strong>Pre-stratification Method:</strong> Molten butter ko 80–85°C par 30–60 minutes tak bina hilaye shant chhod dete hain (quiescent hold). Ye isothermal hold emulsion ko teen alag layers mein separate hone deta hai <strong>Stokes' Law</strong> ke according: particle separation ki velocity particle diameter ke square aur density difference ke proportional hai, aur viscosity ke inversely proportional hai. <em>V = (2r²(ρ₁ - ρ₂)g) / 9η</em>. Higher-density serum neeche baithta hai, lower-density fat beech mein rehta hai, aur air-incorporated denatured protein upar tairta hai.
                            <ul class="list-disc pl-5 mt-1 space-y-1 text-sm">
                                <li><strong>Top Layer (Scum):</strong> Denatured whey proteins aur casein — halka, fluffy, air-incorporated.</li>
                                <li><strong>Middle Layer (Fat):</strong> Clear, golden liquid fat — total volume ka ~85%. Ye desired fraction hai.</li>
                                <li><strong>Bottom Layer (Serum/Buttermilk):</strong> Aqueous phase jismein dissolved lactose (~70–80% of total lactose in butter), soluble whey proteins, minerals (Ca, P, Na, K), aur water-soluble vitamins (B₂, B₁₂) hote hain. Ise neeche ke valve se drain karte hain.</li>
                            </ul>
                        Clear fat layer ko phir dusre kettle mein final clarification ke liye transfer karte hain. Ye method <strong>25–30% energy savings</strong> deta hai kyunki sirf fat layer (~85% volume, jisme bahut kam paani hai) ko 114°C tak heat karna padta hai, aur zyada tar paani pehle se hi bina phase change (boiling) ke alag ho chuka hai.</li>
                    </ul>
                </li>
                <li><strong>Heating & Clarification (CCP-2) — Ghee Banane ka Dil:</strong>
                    <p>Ye sabse critical processing step hai, jismein complex physicochemical transformations hoti hain. Is process ko scientifically teen distinct stages mein baant sakte hain — temperature aur dominant reactions ke basis par:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-4">
                        <li><strong>Stage 1 — Emulsion Tootna & MSNF Separation (60–90°C):</strong>
                            <p>W/O emulsion progressively tootata hai. Fat ke crystalline networks poore melt ho jaate hain. Casein aur whey proteins denature hote hain (β-lactoglobulin denaturation temperature: ~78°C; α-lactalbumin: ~62°C; casein: ~>100°C lekin aggregation shuru ho jaata hai). Denatured proteins aggregate hokar visible curd-jaisi particles bana lete hain. System ek emulsion se change hokar protein particles ka liquid fat mein suspension ban jaata hai, jismein free water unke beech mein trapped rehta hai. Uniform heating ke liye agitation jaari rehta hai taaki localized charring na ho. Fat ka rang opaque/white (dispersed water droplets aur protein se light scattering ki wajah se) se translucent yellow mein badalta hai jaise jaise emulsion tootata hai.</p>
                        </li>
                        <li><strong>Stage 2 — Moisture Evaporation Phase (Paani ka Udna) (100–102°C):</strong>
                            <p>Jab temperature 100°C tak pahunchta hai, free water ubalne lagta hai. Temperature essentially 100–102°C par constant rehta hai (100°C se thoda upar kyunki dissolved solutes se boiling point badh jaata hai — ye ek <strong>colligative property</strong> hai). Is stage mein bahut zor ka <strong>effervescence</strong> (bubbling) hota hai jab steam fat se bahar nikalti hai. Evaporation ki rate heat input (steam pressure), surface area, aur agitation intensity par depend karti hai. Ye sabse zyada energy-intensive phase hai kyunki isme paani ki <strong>latent heat of vaporization</strong> (100°C par 2,260 kJ/kg) chahiye. Ek typical batch mein 500 kg butter mein ~80 kg paani hota hai, jise evaporate karne ke liye lagbhag 180,000 kJ sirf paani evaporation ke liye chahiye. Jaise jaise free water uad jaata hai, bound water (proteins ke saath associated) temporarily bach jaata hai. Effervescence dheere dheere kam hoti hai jab residual water content ~1% se neeche aata hai. <strong>Steam economy zaroori hai:</strong> is phase ke liye energy pre-stratification se reduce ho sakti hai (jo 60–70% paani ko bina ubale alag kar deta hai).</p>
                        </li>
                        <li><strong>Stage 3 — Clarification, Browning & Flavor Development (Rang aur Khushbu ka Vikas) (~110–114°C):</strong>
                            <p>Jab zyada tar free water evaporate ho jaata hai (moisture < 0.5%), temperature 100°C se upar tezi se badhta hai. Ye <strong>sabse critical stage</strong> hai, kyunki yahan ghee ka characteristic flavor, aroma, aur color develop hota hai — kai concurrent non-enzymatic browning reactions ke through:</p>
                            <ul class="list-disc pl-5 mt-2 space-y-2 text-sm">
                                <li><strong>Maillard Reaction:</strong> Reducing sugars (mainly lactose — galactose aur glucose ka disaccharide) ke carbonyl group aur milk proteins ke free amino groups (lysine residues ka ε-NH₂) ke beech hone wali complex non-enzymatic reactions ka cascade. Reaction aise proceed karta hai:
                                    <ol class="list-decimal pl-5 mt-1">
                                        <li><strong>Initial Stage:</strong> Amadori rearrangement — pehle glycosylamine banta hai phir 1-amino-1-deoxy-2-ketose (Amadori compound) mein rearrange hota hai.</li>
                                        <li><strong>Intermediate Stage:</strong> Dehydration, fragmentation, aur amino acids ka Strecker degradation hota hai, jisse α-dicarbonyl compounds (diacetyl, pyruvaldehyde), Strecker aldehydes (leucine/isoleucine se 2-methylbutanal, 3-methylbutanal), aur furfural derivatives bante hain.</li>
                                        <li><strong>Final Stage:</strong> Polymerization aur cyclization reactions se melanoidins bante hain — high molecular weight, brown-colored, nitrogen-containing polymers jo golden-brown color ke liye responsible hain.</li>
                                    </ol>
                                    Key flavor compounds jo bante hain: diacetyl (buttery smell), 2-alkanones (C₅–C₁₃, blue cheese-jaisa), δ-lactones (C₈–C₁₆, creamy/peach-jaisa), furanones (caramel-jaisa), pyrazines (nutty/bhuna-jaisa), aur various aldehydes.
                                </li>
                                <li><strong>Caramelization:</strong> Lactose ka thermal decomposition (pure sugars mein >160°C par hota hai, lekin amino acids aur minerals ki presence mein lower temperatures par hota hai). Isse caramel color (brown polymers), hydroxymethylfurfural (HMF), aur various caramel-flavor compounds (diacetyl, maltol, furanones) bante hain.</li>
                                <li><strong>Lipid Oxidation (controlled):</strong> Unsaturated fatty acids (mainly oleic aur linoleic) ka thermal oxidation aldehydes (hexanal, nonanal, 2,4-decadienal), ketones (2-heptanone, 2-nonanone — β-keto acid decarboxylation se), aur lactones generate karta hai. Ye overall flavor complexity mein contribute karte hain. 2-Alkanones (methyl ketones) khaas taur par ghee aroma ke characteristic hain — ye saturated fatty acids ke β-oxidation se bane β-keto fatty acids ke thermal decarboxylation se bante hain.</li>
                                <li><strong>Lactonization:</strong> δ- aur γ-hydroxy fatty acids (milk fat mein esterified hydroxy acids ke roop mein present) heating par cyclize hokar lactones (δ-decalactone, δ-dodecalactone, δ-tetradecalactone) banate hain, jo creamy, peach, aur coconut-jaisi khushbu dete hain.</li>
                            </ul>
                            <p class="mt-2"><strong>Physical changes:</strong> Protein poora coagulate ho jaata hai, brown particles ban jaate hain jo 'ghee residue' ya 'morcha' kehlaate hain aur neeche baith jaate hain. Effervescence lagbhag band ho jaati hai (sirf kabhi kabhi chhoti bubbles residual bound water aur volatile flavor compounds se). Fat crystal clear ho jaata hai golden-amber color ke saath.</p>
                            <p class="mt-2"><strong>Endpoint Kaise Pata Karte Hain:</strong> Traditionally sensory cues se determine karte hain — effervescence ka band hona, brown residue ka dikhna, aur characteristic aroma ka development. Modern plants mein endpoint ye bhi measure karke determine karte hain:
                                <ul class="list-disc pl-5 mt-1 text-sm">
                                    <li>Final temperature: cow ghee ke liye 110–114°C; buffalo ghee ke liye 112–116°C</li>
                                    <li>Residual moisture: < 0.3% (Karl Fischer titration ya infrared moisture analyzer se measure karte hain)</li>
                                    <li>Color: spectrophotometric measurement (450 nm par yellow ke liye, 550 nm par brown ke liye absorbance)</li>
                                </ul>
                            </p>
                            <p class="mt-2 text-sm bg-yellow-50 p-2 rounded border border-yellow-200"><strong>⚠ Important Warning:</strong> 120°C se zyada heat karne par bahut zyada browning, bitter/jala hua off-flavors, potentially harmful compounds (glycerol ke decomposition se acrolein >200°C par, polycyclic aromatic hydrocarbons (PAHs), aur zyada cholesterol oxidation products — COPs) bante hain, aur natural antioxidants (tocopherols, carotenoids) ka loss hota hai. Kam heat karna (<108°C) se incomplete moisture removal, kharab flavor development, aur kam shelf life hoti hai. Isiliye ye stage ek <strong>Critical Control Point (CCP-2)</strong> hai.</p>
                        </li>
                    </ul>
                </li>
                <li><strong>Ghee Residue ka Settling (5–10 minutes):</strong>
                    <p>Heating band karne ke baad (steam shut off), ghee ko 5–10 minutes tak bina hilaye shant chhod dete hain. Is quiescent period mein, bhaari, brown solid particles (ghee residue — density ~1.1–1.2 g/mL) gravitational sedimentation (Stokes' Law) se kettle ke neeche baith jaate hain, aur upar clear pure fat (density ~0.87–0.89 g/mL at ~110°C) ki layer reh jaati hai. Density ka bada difference (~0.25 g/mL) aur hot fat ki kam viscosity tezi se settling ko facilitate karti hai. Ye step agle filtration step ki efficiency bahut badha deta hai.</p>
                    <p class="mt-2"><strong>Ghee Residue (By-product):</strong> Ye use kiye gaye butter ke weight ka 1.5–2.5% hota hai. Composition: ~50–60% fat, 25–30% protein (highly denatured, cross-linked), 5–10% lactose (caramelized), aur 3–5% moisture. Ise confectionery mein flavoring agent ke roop mein, animal feed mein, ya solvent extraction se fat recovery ke liye use karte hain.</p>
                </li>
                <li><strong>Filtration — Chaanna (oPRP):</strong>
                    <p>Settling poora hone ke baad, garam, clear supernatant ghee ko dhyan se decant ya pump karke filtration system se guzarte hain taaki saari suspended particles (ghee residue, undissolved protein aggregates, koi bhi extraneous matter) nikal jaayein. Ise <strong>Operational Prerequisite Program (oPRP)</strong> classify kiya gaya hai kyunki sahi se filter na karne par ghee dhuudhla (hazy) rehta hai jisme suspended particles oxidative rancidity promote karte hain aur shelf life kam hoti hai.</p>
                    <ul class="list-disc pl-5 mt-2 space-y-1 text-sm">
                        <li><strong>Traditional:</strong> Multi-layered muslin cloth se filtration; effective hai lekin mehnat zyada lagti hai aur batch-limited hai.</li>
                        <li><strong>Industrial:</strong> Plate-and-frame filter press with filter aid (diatomaceous earth / perlite); vibrating screen filters; ya centrifugal clarifiers (hermetic separators jo 6,000–8,000 RPM par chalte hain). Centrifugal clarifier sabse efficient hai, 1–5 µm tak ke particles remove kar sakta hai aur continuous throughput handle karta hai.</li>
                    </ul>
                    <p class="mt-2">Goal hai ek perfectly clear, brilliant liquid fat paana jisme <strong>turbidity < 0.5 NTU</strong> aur <strong>insoluble impurities < 0.05%</strong> hon. Residual phospholipids aur protein fragments — agar remove na hon — toh pro-oxidants ki tarah kaam karte hain (phospholipids ek polar interface provide karte hain jahan oxygen lipid ke saath interact kar sake, aur protein-bound metals jaise iron aur copper Fenton-type radical generation catalyze karte hain).</p>
                </li>
                <li><strong>Cooling & Granulation — Daana Banana (oPRP) — Crystallization Science:</strong>
                    <p>Filtered ghee ko controlled tarike se thanda karte hain. Ye step desirable granular texture (crystallization) develop karne ke liye ek important <strong>oPRP</strong> hai — ye ek key consumer-quality attribute hai. Ghee ki crystallization ka science <strong>lipid polymorphism</strong> aur <strong>nucleation kinetics</strong> ke principles par based hai.</p>
                    <ul class="list-disc pl-5 mt-2 space-y-2">
                        <li><strong>Lipid Polymorphism (Ek hi cheez ke alag-alag roop):</strong> Triglycerides teen main polymorphic forms mein crystallize ho sakte hain:
                            <ol class="list-decimal pl-5 mt-1 text-sm">
                                <li><strong>α-form (hexagonal subcell):</strong> Sabse kam stable, sabse kam melting point, fast cooling par jaldi banta hai. Smooth, waxy texture deta hai.</li>
                                <li><strong>β'-form (orthorhombic perpendicular subcell):</strong> Intermediate stability aur melting point. Fine, needle-like crystals banata hai jo smooth, homogeneous texture dete hain. <em>Ye freshly granulated ghee mein predominant form hai.</em></li>
                                <li><strong>β-form (triclinic parallel subcell):</strong> Sabse zyada stable, sabse high melting point, dheere dheere banta hai. Large, coarse, plate-like crystals banata hai. <em>Storage ke dauran β' se β mein dheere dheere transformation well-aged ghee ke large-grained appearance ke liye responsible hai.</em></li>
                            </ol>
                        </li>
                        <li><strong>Nucleation & Crystal Growth (Dane ka banana aur badhna):</strong> Jab ghee apne cloud point (~40–45°C) se neeche thanda hota hai, toh high-melting-point triglycerides (jo long-chain SFA jaise C₁₆:₀ aur C₁₈:₀ mein rich hain) supersaturated ho jaate hain aur nucleate hona shuru karte hain. Nucleation ki rate in cheezon se control hoti hai:
                            <ul class="list-disc pl-5 text-sm">
                                <li><strong>Degree of supercooling (ΔT):</strong> Zyada ΔT → zyada nucleation sites → finer crystals.</li>
                                <li><strong>Cooling rate:</strong> Dheere cooling → kam nuclei, bade crystals (ye desired granular texture hai). Tezi se cooling → bohot saare nuclei, bahut fine crystals (smooth, pasty texture — ye undesirable hai).</li>
                                <li><strong>Seeding (beej dalna):</strong> 55–60°C par 0.1–0.5% pehle se bane ghee ke crystals (seed crystals) dalna heterogeneous nucleation sites provide karta hai, controlled crystallization shuru karta hai aur uniform grain formation promote karta hai.</li>
                                <li><strong>Agitation (hilana):</strong> Crystallization window ke dauran gentle stirring nuclei ko uniformly distribute karta hai aur even crystal growth promote karta hai.</li>
                            </ul>
                        </li>
                        <li><strong>Best Granulation Protocol:</strong>
                            <ol class="list-decimal pl-5 text-sm mt-1">
                                <li>Filtered ghee ko settling tank mein ~60°C tak thanda karo.</li>
                                <li>Crystallization vat / cooling tank mein transfer karo jismein cold water jacket ho.</li>
                                <li>55–60°C par, seed crystals daalo (0.1–0.5% w/w pehle se granulated ghee ka). Seed stable β ya β' form mein hona chahiye.</li>
                                <li>Gentle agitation ke saath dheere dheere (0.5–1°C per minute) 28–32°C tak thanda karo.</li>
                                <li>28–32°C par 1–2 ghante hold karo taaki crystal growth aur polymorphic stabilization ho sake.</li>
                                <li>Semi-solid consistency par package karo jab ~60–70% fat crystallize ho chuka ho.</li>
                            </ol>
                        </li>
                        <li class="mt-2"><strong>Granulation Temperature:</strong>
                            <ul class="list-disc pl-5 text-sm">
                                <li><strong>Cow ghee:</strong> Optimal granulation 27–30°C par (zyada unsaturation ki wajah se lower melting point).</li>
                                <li><strong>Buffalo ghee:</strong> Optimal granulation 30–35°C par (kam unsaturation aur zyada palmitic acid content ki wajah se higher melting point).</li>
                            </ul>
                        </li>
                    </ul>
                    <p class="mt-2 text-sm"><strong>Grain structure:</strong> Acchi tarah se granulated ghee mein distinct, medium to large-sized crystals (0.5–2 mm) liquid oil ke matrix mein dikhte hain. Crystal network capillary forces se liquid oil ko trap karta hai. Polarized light microscopy mein, crystals bright birefringent structures (Maltese cross pattern) ki tarah dark background ke against dikhte hain.</p>
                </li>
                <li><strong>Packaging — Packing (PRP):</strong>
                    <p>Granulated ghee ko aise containers mein bharte hain jo use quality deterioration ke teen primary karanon — <strong>light</strong> (photooxidation), <strong>oxygen</strong> (autoxidation), aur <strong>moisture</strong> (hydrolysis) — se bachaaye.</p>
                    <ul class="list-disc pl-5 mt-2 space-y-1 text-sm">
                        <li><strong>Tinplate containers (lacquer lining ke saath):</strong> Excellent barrier properties; opaque (UV/visible light block karta hai); oxygen ingress rokta hai. Food-grade epoxy-phenolic lacquer fatty acids aur tin surface ke beech interaction rokti hai. Standard sizes: 500 mL, 1 L, 5 L, 15 kg.</li>
                        <li><strong>Glass jars (amber ya green):</strong> Inert, impermeable, reusable. Amber/green glass UV radiation (wavelengths <500 nm) filter karta hai jo riboflavin (agar traces bache hain) se singlet oxygen sensitization ke through ya lipid hydroperoxides ke direct photolysis se photooxidation catalyze karta hai.</li>
                        <li><strong>Multi-layered flexible pouches:</strong> Typically PET (12 µm) / Al foil (9–12 µm) / LDPE (50–75 µm) laminate. Aluminum layer light, oxygen (OTR ~0), aur moisture (WVTR ~0) ke liye absolute barrier provide karta hai. Retail packaging ke liye cost-effective.</li>
                        <li><strong>Nitrogen flushing / Vacuum packaging:</strong> Sealing se pehle headspace oxygen ko food-grade N₂ gas (99.9% purity) se displace karte hain, initial O₂ content ko <2% tak kam karte hain. Ye autoxidation ke initiation phase ko significantly retard karta hai. Ya fir, vacuum packaging headspace air ko poori tarah se remove karta hai. Dono methods shelf life ko 30–50% tak extend kar sakte hain.</li>
                    </ul>
                    <p class="mt-2">Fill temperature: 35–40°C (semi-solid state) taaki uniform filling ho bina air pocket ke.</p>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Shelf Life & Deterioration Mechanisms (Shelf Life aur Kharab Hone ke Tarike)</h3>
            <p>Ghee zyada tar edible fats ke comparison mein remarkably stable hai — iski kam moisture (a<sub>w</sub> < 0.2), protein aur lactose ki absence (jo microbial growth aur non-enzymatic browning rokti hai storage mein), high saturated fatty acid content, aur natural antioxidants ki presence ki wajah se. Lekin phir bhi ye dheere dheere quality deterioration se guzarta hai in mechanisms ke through:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Mechanism</th>
                            <th class="p-2 border">Chemistry (Rasayan Vigyan)</th>
                            <th class="p-2 border">Asar Dalne Wale Factors</th>
                            <th class="p-2 border">Pata Kaise Lagayein (Detection)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Autoxidation (primary deterioration)</strong></td>
                            <td class="p-2 border">Free-radical chain reaction: <strong>Initiation</strong> (RH → R• + H•, heat/light/metals se catalyze hota hai) → <strong>Propagation</strong> (R• + O₂ → ROO•; ROO• + RH → ROOH + R•) → <strong>Termination</strong> (radical recombination). Primary products: lipid hydroperoxides (ROOH). ROOH ka secondary decomposition → aldehydes (hexanal, propanal, 4-hydroxynonenal), ketones, epoxides, alcohols → bure flavors.</td>
                            <td class="p-2 border">O₂ ki availability, light (UV), temperature, pro-oxidant metals (Fe²⁺, Cu²⁺ — ppb levels par bhi Fenton reaction ke through), kam antioxidant levels, zyada PUFA content.</td>
                            <td class="p-2 border">Peroxide Value (PV) — primary oxidation. p-Anisidine Value (AV) — secondary oxidation. TOTOX = 2PV + AV. Thiobarbituric Acid Reactive Substances (TBARS) — malondialdehyde. Sensory: cardboard, painty, metallic flavors.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Photooxidation (Light se hone wala oxidation)</strong></td>
                            <td class="p-2 border">Type II photosensitized oxidation: Riboflavin (agar traces bach gaye hain) <strong>photosensitizer</strong> ka kaam karta hai, light (λ ~450 nm) absorb karke ground-state triplet oxygen (³O₂) ko energy transfer karta hai — jisse highly reactive <strong>singlet oxygen (¹O₂)</strong> banta hai. ¹O₂ PUFA ke saath ³O₂ se ~1,500× tez react karta hai ek concerted 'ene' reaction ke through — bina radical initiation ke aur kam temperature par bhi proceed karta hai.</td>
                            <td class="p-2 border">Light intensity aur wavelength (UV > visible), photosensitizers ki presence (riboflavin, chlorophyll derivatives), transparent/clear packaging.</td>
                            <td class="p-2 border">Autoxidation jaisa hi detect hota hai, lekin light mein zyada tez develop hota hai. β-carotene aur tocopherols singlet oxygen quenchers ka kaam karte hain (physical quenching).</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Hydrolytic Rancidity (Paani se hone wala kharab hona)</strong></td>
                            <td class="p-2 border">Triglycerides mein ester bonds ka hydrolysis residual moisture (agar >0.5%) aur heat se hota hai, jisse free fatty acids release hote hain. Short-chain FFAs (butyric, caproic, caprylic) ke flavor thresholds bahut kam hain aur ye soapy, rancid, bakri jaisi off-flavors dete hain. <em>TAG + H₂O → DAG + FFA</em></td>
                            <td class="p-2 border">Moisture content (primary factor), temperature, residual lipase activity (jo 114°C tak heating ke dauran poori tarah inactivate honi chahiye), moisture-laden surfaces ke saath contact.</td>
                            <td class="p-2 border">Free Fatty Acid (FFA) content — % oleic acid mein express hota hai. Acid value (mg KOH/g fat). Sensory: soapy, rancid, paseene jaisi smell.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Cholesterol Oxidation</strong></td>
                            <td class="p-2 border">Cholesterol oxidation products (COPs) — oxysterols — ka formation, jaise 7-ketocholesterol, 7α/β-hydroxycholesterol, 5,6-epoxycholesterol, aur cholestane-triol. Ye usi radical oxidation aur singlet oxygen pathways se bante hain jo fatty acids ko attack karte hain, lekin sterol ring system ko target karte hain.</td>
                            <td class="p-2 border">Processing ke dauran high temperature (>120°C se COPs ka formation accelerate hota hai), lambi storage light/oxygen exposure ke saath, high surface-area-to-volume ratio.</td>
                            <td class="p-2 border">GC-MS ya HPLC analysis. COPs cytotoxic, pro-atherogenic, pro-inflammatory, aur mutagenic hain µg levels par — ye ek food safety concern hai. Fresh ghee mein total COPs: 10–30 µg/g; galat storage se 50–100 µg/g tak badh sakti hain.</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Flavor Reversion (Swaad ka bigadna)</strong></td>
                            <td class="p-2 border">Linolenic acid (C₁₈:₃) aur uske positional isomers ke oxidation se specific off-flavors (beany, fishy, grassy) develop hote hain, jo 2,4,7-decatrienal aur doosre low-threshold volatile compounds produce karte hain.</td>
                            <td class="p-2 border">Ghee mein relatively minor hai kyunki linolenic acid content kam hai (~0.5%); soybean ya linseed oils mein zyada significant hai.</td>
                            <td class="p-2 border">Sensory evaluation (trained panel). GC-Olfactometry.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3 text-sm"><strong>Ghee ka Natural Antioxidant System:</strong> Ghee mein endogenous antioxidants hote hain — α-tocopherol (2–4 mg/100g), β-carotene (3–7 µg/g), aur thodi matra mein phospholipids (jo concentration ke according pro-oxidant AUR antioxidant dono roles rakhte hain). α-Tocopherol ek chain-breaking antioxidant hai (ROO• radical ko H• donate karta hai: ROO• + α-TocOH → ROOH + α-TocO•). β-Carotene singlet oxygen quencher aur radical scavenger hai. High-temperature processing ke dauran in antioxidants ka 15–25% loss hota hai.</p>
            <p class="mt-2 text-sm"><strong>Expected Shelf Life:</strong> Opaque packaging mein ambient temperature (25–30°C) par 6–9 months; refrigeration (4–7°C) ya nitrogen-flushed packaging mein 12+ months. Deterioration ek sigmoidal curve follow karta hai — ek <strong>induction period</strong> (lag phase — iski length antioxidant content aur storage conditions par depend karti hai) hota hai uske baad oxidation products mein rapid exponential increase hota hai.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Adulteration Detection — Advanced Analytical Methods (Milavat Pakadne ke Tarike)</h3>
            <p>Ghee mein milavat ek significant economic aur food safety concern hai. Common adulterants mein vegetable oils (soybean, cottonseed, palm, coconut), animal body fats (tallow, lard), vanaspati (hydrogenated vegetable fat), aur synthetic colors shaamil hain. Modern analytical techniques classical chemical tests (RM, BR, Baudouin) ko complement karti hain:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Method (Tarika)</th>
                            <th class="p-2 border">Principle (Siddhant)</th>
                            <th class="p-2 border">Kaun sa Adulterant Detect Hota Hai</th>
                            <th class="p-2 border">Detection Limit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Gas Chromatography (GC-FID)</strong></td>
                            <td class="p-2 border">Fatty acid methyl esters (FAME) ko carbon chain length aur unsaturation ke basis par polar capillary column (jaise SP-2560, 100 m × 0.25 mm) par alag karte hain. Individual fatty acids quantify karte hain. Butyric acid (C₄:₀) content < 3% ya odd-chain FA (C₁₅:₀, C₁₇:₀) ki absence adulteration indicate karti hai.</td>
                            <td class="p-2 border">Sabhi vegetable oils, animal body fats</td>
                            <td class="p-2 border">~5% adulteration</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>GC-MS of Sterols (Sterol Profile)</strong></td>
                            <td class="p-2 border">Unsaponifiable matter isolate karte hain; sterols ko derivatize (TMS ethers) karke GC-MS se analyze karte hain. Milk fat mein sirf cholesterol hota hai; vegetable oils mein β-sitosterol, stigmasterol, campesterol, brassicasterol (rapeseed mein) hote hain. Kisi bhi phytosterol ka detect hona vegetable oil adulteration confirm karta hai.</td>
                            <td class="p-2 border">Sabhi vegetable oils (highly specific)</td>
                            <td class="p-2 border">~2% adulteration</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Triglyceride Profile (GC ya HPLC)</strong></td>
                            <td class="p-2 border">Intact triglycerides ko carbon number (CN = total acyl carbons) ke basis par separate karte hain. Milk fat ka unique broad distribution (CN 24–54) hota hai short-chain FA ki wajah se. Vegetable oils ka narrow distribution (CN 48–54) hota hai. CN 48/CN 50 jaisi ratios diagnostic hain.</td>
                            <td class="p-2 border">Vegetable oils, khaas taur par jab FAME profile inconclusive ho</td>
                            <td class="p-2 border">~3–5%</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>FTIR Spectroscopy (Mid-IR / NIR)</strong></td>
                            <td class="p-2 border">Fourier-Transform Infrared spectroscopy molecular bonds (C=O, C-H, O-H) dwara IR radiation ka absorption measure karti hai. Chemometric models (PLS, PCA, SIMCA) pure aur adulterated ghee spectra par train kiye jaate hain. Key regions: 3000–2800 cm⁻¹ (C-H stretching), 1745 cm⁻¹ (C=O ester), 1160–1000 cm⁻¹ (C-O stretching, fingerprint region).</td>
                            <td class="p-2 border">Zyada tar adulterants ke liye rapid screening</td>
                            <td class="p-2 border">~5–10% (chemometrics se ~1–2% tak improve ho sakta hai)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Differential Scanning Calorimetry (DSC)</strong></td>
                            <td class="p-2 border">Thermal transitions (melting, crystallization) ke saath associated heat flow measure karta hai. Pure ghee ke characteristic melting aur crystallization thermograms specific peak temperatures aur enthalpies ke saath hote hain. Adulteration thermal profile ko alter karta hai — additional ya shifted peaks dikhte hain.</td>
                            <td class="p-2 border">Sabhi fats/oils (complementary technique)</td>
                            <td class="p-2 border">~5–10%</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Electronic Nose (e-Nose)</strong></td>
                            <td class="p-2 border">Semi-selective gas sensors (metal oxide semiconductor, conducting polymer, ya quartz crystal microbalance) ka array heated ghee ke upar headspace mein volatile compounds detect karta hai. Pattern recognition algorithms (ANN, SVM) sensor response patterns ke basis par samples ko pure ya adulterated classify karte hain.</td>
                            <td class="p-2 border">Rapid screening; khaas taur par vanaspati aur vegetable oil adulterants ke liye effective jinke distinct volatile profiles hain</td>
                            <td class="p-2 border">~10–15%</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>DNA-based Methods (PCR)</strong></td>
                            <td class="p-2 border">Species-specific PCR jo mitochondrial DNA markers (jaise cytochrome b gene) target karti hai, non-bovine species ke fats (pig lard, goat tallow) se adulteration detect kar sakti hai. Fat se DNA extraction challenging hai kyunki rendering ke baad nucleic acid content bahut kam hota hai.</td>
                            <td class="p-2 border">Animal body fats (pig lard, goat/sheep tallow) — Halal/Kosher verification ke liye important</td>
                            <td class="p-2 border">~1% (agar DNA intact ho)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Raman Spectroscopy</strong></td>
                            <td class="p-2 border">FTIR ki complementary hai; monochromatic light ka inelastic scattering measure karta hai. 1655 cm⁻¹ (C=C stretching — degree of unsaturation) aur 1440 cm⁻¹ (CH₂ deformation) par strong Raman bands fatty acid composition changes ke liye sensitive hain.</td>
                            <td class="p-2 border">Vegetable oils (khaas taur par high-oleic/linoleic oils)</td>
                            <td class="p-2 border">Chemometrics ke saath ~5%</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Ghee ke Nutritional & Health Aspects — Scientific Nazariya</h3>
            <p>Ghee ki nutritional significance par bahut debate hua hai. Traditional Ayurvedic medicine ghee ko kai health benefits attribute karti hai, jabki modern nutritional science ek zyada nuanced view deta hai:</p>
            <ul class="list-disc pl-5 space-y-3 mt-3">
                <li><strong>Energy Value:</strong> ~900 kcal per 100g (37.6 kJ/g) — essentially pure fat hai.</li>
                <li><strong>Saturated Fat & Cardiovascular Health (Dil ki Sehat):</strong> Ghee mein ~60–65% SFA hota hai. Purani "diet-heart hypothesis" kehti thi ki dietary SFA serum LDL-cholesterol badhata hai, jisse cardiovascular disease (CVD) ka risk badhta hai. Lekin recent meta-analyses (Siri-Tarino et al., 2010, AJCN; de Souza et al., 2015, BMJ) ne <strong>insufficient evidence</strong> paaya hai ki SFA intake ko CVD events se directly link kare — jab SFA ko complex carbohydrates se replace karte hain. Ghee mein SFA heterogeneous hai: stearic acid (C₁₈:₀, ~12%) ko neutral maana jaata hai kyunki ye body mein oleic acid mein convert ho jaata hai; short- aur medium-chain SFA (C₄–C₁₂, ~15%) ka metabolism long-chain SFA se alag hota hai (portal vein → liver mein rapid β-oxidation). Phir bhi moderation ki salah di jaati hai, aur WHO SFA intake ko total energy ke <10% rakhne ki recommendation karta hai.</li>
                <li><strong>Butyric Acid (C₄:₀) — Ghee ka Hero Component:</strong> Ek major bioactive component (~3–4% of ghee fatty acids). Histone deacetylase (HDAC) inhibitor ki tarah kaam karta hai — epigenetically gene expression ko regulate karta hai jo cell differentiation, apoptosis, aur anti-inflammation mein involved hai. Colonocytes ke liye primary energy source hai. Intestinal epithelial cells mein NF-κB signaling ko inhibit karke anti-inflammatory effects dikhata hai (Canani et al., 2011, WJG). Colorectal cell lines mein anti-neoplastic activity dikhata hai ("butyrate paradox" — cancerous colonocytes mein differentiation promote karta hai jabki normal colonocytes mein proliferation support karta hai).</li>
                <li><strong>Conjugated Linoleic Acid (CLA):</strong> Pasture-fed animals ke ghee mein 0.4–0.8% CLA hota hai (mainly c9,t11-isomer — rumenic acid). Iske anti-carcinogenic effects (animal models mein initiation, promotion, aur metastasis inhibit karta hai), anti-atherogenic properties (animal models mein atherosclerotic lesion formation reduce karta hai), improved insulin sensitivity, aur immune response modulation bataye gaye hain. Lekin animal studies mein use ki jaane wali effective doses (diet ka 0.5–1%) dietary ghee se akele achieve karna mushkil hai.</li>
                <li><strong>Fat-Soluble Vitamins:</strong> Ghee Vitamins A, D, E, aur K₂ (menaquinone-4) ka significant dietary source hai. Vitamin K₂ calcium ko bones aur teeth ki taraf direct karta hai arteries ki jagah (osteocalcin aur matrix Gla protein ko activate karta hai), potentially vascular calcification risk reduce karta hai.</li>
                <li><strong>High Smoke Point (Bahut Zyada Dhuaan Point):</strong> ~250°C, jo butter (~175°C), olive oil (~190°C), aur zyada tar vegetable oils (~200–230°C) se significantly zyada hai. Ye ghee ko high-temperature cooking (deep frying, sautéing) ke liye suitable banata hai jisme harmful thermal decomposition products (acrolein, HNE, polar compounds) minimum bante hain. Smoke point se upar ke temperatures par, triglycerides glycerol mein decompose hote hain (jo acrolein mein dehydrate hota hai — ek respiratory irritant aur possible carcinogen) aur free fatty acids mein.</li>
                <li><strong>Lactose aur Casein Free:</strong> Clarification process virtually sabhi lactose aur casein proteins ko remove kar deta hai, jisse ghee generally <strong>lactose intolerance</strong> (lactase deficiency) wale logon aur bahut se <strong>cow milk protein allergy (CMPA)</strong> wale logon ke liye well-tolerated hota hai. Lekin trace amounts casein ki bach sakti hain (< 2.5 µg/g), aur highly sensitive individuals ko savdhan rehna chahiye.</li>
                <li><strong>Cholesterol Content:</strong> ~330 mg per 100g. Dietary cholesterol ka serum cholesterol par modest effect hota hai zyada tar individuals ke liye (hypo-responders, ~75% population), kyunki hepatic cholesterol synthesis dietary intake se downregulate hoti hai (SREBP-2 pathway ke through negative feedback). Lekin hyper-responders (~25%) mein, dietary cholesterol significantly LDL aur HDL dono cholesterol badhata hai.</li>
                <li><strong>Ayurvedic Significance (Ayurvedic Mahatva):</strong> Ayurveda mein ghee ko 'Ghrita' kehte hain aur ise 'Sattvic' (pavitra) maana jaata hai. Ise herbal medicines ke saath vehicle (anupana) ke roop mein use karte hain taaki unki bioavailability badhe — lipid carrier lipophilic active compounds ka absorption facilitate karta hai. Purana Ghrita (aged ghee) ko khaas taur par valued maana jaata hai. Scientific basis: ghee ka lipid matrix lipophilic drugs/phytochemicals ki oral bioavailability ko lymphatic absorption ke through enhance kar sakta hai (intestinal epithelium mein chylomicron formation ke through hepatic first-pass metabolism ko bypass karta hai).</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Continuous Ghee Making — Modern Industrial Processes</h3>
            <p>Jabki traditional batch processing abhi bhi common hai, continuous ghee-making systems large-scale operations ke liye develop kiye gaye hain (capacity: 1,000–5,000 kg/hr). Do prominent continuous systems hain:</p>
            <ol class="list-decimal pl-5 space-y-3 mt-3">
                <li><strong>Scraped Surface Heat Exchanger (SSHE) Method:</strong>
                    <p>Molten butter ko ek series of scraped-surface heat exchangers (Votator ya Kombinator type bhi kehte hain) ke through pump karte hain. SSHE mein thin-film heating rapid, uniform heat transfer (overall heat transfer coefficient: 800–1200 W/m²K) deta hai jisme continuous scraping fouling aur localized overheating rokti hai. Process mein ye steps hain:
                    <ol class="list-decimal pl-5 mt-1 text-sm">
                        <li>Pre-heating section: 80–90°C (emulsion tootna)</li>
                        <li>Flash evaporation section: kam pressure (~0.5 bar absolute) par 90–100°C par taaki kam temperature par efficiently moisture nikal sake</li>
                        <li>High-temperature clarification section: 110–120°C ek cylindrical holding tube mein</li>
                        <li>Centrifugal separation: hermetic separator ghee residue nikalta hai</li>
                        <li>Vacuum deaeration: dissolved oxygen nikalta hai taaki oxidative stability improve ho</li>
                        <li>Kombinator (SSHE cooling mode mein) mein cooling aur crystallization</li>
                    </ol>
                    <strong>Fayde:</strong> Consistent product quality, high throughput, energy-efficient, kam labour, closed system (hygiene), final temperature par better control. <strong>Developed by: SPX Flow, GEA, Alfa Laval.</strong></p>
                </li>
                <li><strong>Thin-Film Evaporator Method:</strong>
                    <p>Molten butter ko ek thin-film evaporator (agitated ya wiped-film type) mein feed karte hain jahan ye heated cylindrical surface par ek patli film (~1–3 mm) ke roop mein failta hai. Patli film rapid moisture evaporation ensure karti hai minimal thermal damage ke saath. Vapors continuously vacuum ya condenser se remove hote hain. Concentrated fat phir ek high-temperature holding tube se guzarta hai final clarification ke liye. Ye method khaas taur par energy-efficient hai aur minimal thermal abuse wala ghee produce karta hai (kam COPs aur better antioxidant retention).</p>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">HACCP Plan Summary for Ghee (Creamery Butter Method)</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">CCP/oPRP</th>
                            <th class="p-2 border">Khatre (Hazard)</th>
                            <th class="p-2 border">Critical Limit</th>
                            <th class="p-2 border">Monitoring (Nigrani)</th>
                            <th class="p-2 border">Corrective Action (Sudhar)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>CCP-1:</strong> Cream Pasteurization</td>
                            <td class="p-2 border">Biological: Pathogens ka bachna (<em>Salmonella</em>, <em>Listeria monocytogenes</em>, <em>E. coli</em> O157:H7, <em>S. aureus</em>); lipase enzyme ka bachna</td>
                            <td class="p-2 border">Min. 95°C 15 sec ke liye (ya equivalent: HTST pasteurization ke liye 72°C/15 sec — lekin lipase inactivation ke liye higher temp prefer hota hai)</td>
                            <td class="p-2 border">Temperature (RTD sensor) aur flow rate ki continuous recording; agar T < critical limit ho toh flow diversion valve (FDV) activate hota hai; alkaline phosphatase test (negative = adequate pasteurization)</td>
                            <td class="p-2 border">Under-processed cream ko divert karo; equipment recalibrate karo; hold karke reprocess karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>CCP-2:</strong> Heating & Clarification</td>
                            <td class="p-2 border">Biological: Spore-forming bacteria ka bachna (<em>Bacillus cereus</em>, <em>Clostridium perfringens</em>) — lekin risk minimal hai kyunki final a<sub>w</sub> < 0.2. Chemical: Inadequate moisture removal → microbial growth potential; overheating → COPs, acrolein, PAHs.</td>
                            <td class="p-2 border">Final temperature: 110–114°C; Final moisture: ≤ 0.5%; FFA ≤ 2.0% (as oleic acid)</td>
                            <td class="p-2 border">Continuous temperature monitoring (kettle mein calibrated thermocouple); har batch ki moisture analysis (Karl Fischer / IR moisture meter); sensory endpoint verification</td>
                            <td class="p-2 border">Agar moisture > 0.5%: heating jaari rakho; agar overheated (>120°C): batch alag karo, COPs/acrolein test karo, downgrade ya dispose karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>oPRP-1:</strong> Filtration</td>
                            <td class="p-2 border">Physical: Suspended particles, metal fragments (kettle/stirrer wear se); Chemical: Residual phospholipids jo oxidation promote karte hain</td>
                            <td class="p-2 border">Filtered ghee clarity: turbidity < 0.5 NTU; visual inspection: clear, brilliant; metal detector: >1.5 mm ferrous/non-ferrous particles nahi hone chahiye</td>
                            <td class="p-2 border">Har batch ki visual inspection + turbidity measurement; filter media ki periodic integrity testing; filling ke baad in-line metal detector</td>
                            <td class="p-2 border">Agar turbidity limit se zyada ho toh re-filter karo; damaged filter media replace karo; contaminated product reject karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>oPRP-2:</strong> Cooling & Granulation</td>
                            <td class="p-2 border">Quality: Galat grain size (bahut fine = pasty; bahut coarse = oily separation)</td>
                            <td class="p-2 border">Granulation temperature: 28–32°C; holding time: 1–2 hrs; grain size: medium to large (visual standard)</td>
                            <td class="p-2 border">Cooling ke dauran temperature monitoring; reference standard se visual comparison</td>
                            <td class="p-2 border">Cooling rate adjust karo; seed crystals daalo; agar satisfactory na ho toh phir se melt karke re-granulate karo</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Cow aur Buffalo Ghee mein Antar (Differences)</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Cow Ghee (Gaay ka Ghee)</th>
                            <th class="p-2 border">Buffalo Ghee (Bhains ka Ghee)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Rang (Color)</td><td class="p-2 border">Golden yellow (β-carotene ki wajah se — gaayein kam β-carotene ko retinol mein convert karti hain)</td><td class="p-2 border">Safed se creamy safed (bhains lagbhag saara dietary β-carotene retinol mein convert kar leti hai — isiliye koi pigment nahi bachta)</td></tr>
                        <tr><td class="p-2 border">Texture (Banawat)</td><td class="p-2 border">Soft, fine-grained (naram, chote daane)</td><td class="p-2 border">Hard, coarse-grained (sakht, bade daane)</td></tr>
                        <tr><td class="p-2 border">Melting Point (Pighlne ka Taapman)</td><td class="p-2 border">32–36°C</td><td class="p-2 border">35–40°C</td></tr>
                        <tr><td class="p-2 border">Iodine Value</td><td class="p-2 border">30–38 (zyada unsaturation)</td><td class="p-2 border">26–34 (kam unsaturation)</td></tr>
                        <tr><td class="p-2 border">RM Value</td><td class="p-2 border">26–32 (zyada butyric acid content)</td><td class="p-2 border">24–29</td></tr>
                        <tr><td class="p-2 border">BR Reading (40°C)</td><td class="p-2 border">40.0–43.0</td><td class="p-2 border">40.0–44.0</td></tr>
                        <tr><td class="p-2 border">Saponification Value</td><td class="p-2 border">225–232</td><td class="p-2 border">220–230</td></tr>
                        <tr><td class="p-2 border">Palmitic Acid (C₁₆:₀)</td><td class="p-2 border">~25–28%</td><td class="p-2 border">~28–35% (zyada — harder texture mein contribute karta hai)</td></tr>
                        <tr><td class="p-2 border">Oleic Acid (C₁₈:₁)</td><td class="p-2 border">~24–28%</td><td class="p-2 border">~20–24% (kam — higher melting point mein contribute karta hai)</td></tr>
                        <tr><td class="p-2 border">CLA Content</td><td class="p-2 border">Zyada (~0.5–0.8%)</td><td class="p-2 border">Kam (~0.3–0.5%)</td></tr>
                        <tr><td class="p-2 border">Cholesterol</td><td class="p-2 border">~330 mg/100g</td><td class="p-2 border">~275 mg/100g</td></tr>
                        <tr><td class="p-2 border">Vitamin A (as retinol)</td><td class="p-2 border">~600 IU/100g + β-carotene</td><td class="p-2 border">~700 IU/100g (as retinol; β-carotene nahi)</td></tr>
                        <tr><td class="p-2 border">Swaad (Flavor)</td><td class="p-2 border">Halka, meetha, thoda nutty</td><td class="p-2 border">Strong, bhaari, rich</td></tr>
                        <tr><td class="p-2 border">Consumer Preference</td><td class="p-2 border">Aam taur par North India mein, globally pasand kiya jaata hai</td><td class="p-2 border">South India ke kuchh hisson, Gujarat mein pasand kiya jaata hai</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Ghee Residue — Composition & Upyog (Utilization)</h3>
            <p>Ghee residue (jise 'ghee sediment', 'morcha', ya 'chhurpi' bhi kehte hain) wo brownish deposit hai jo clarification ke baad ghee kettle ke neeche baithta hai. Ye process ka ek by-product hai aur use kiye gaye butter ke weight ka <strong>1.5–2.5%</strong> hota hai (ya direct cream method mein lagbhag 5–8% kyunki cream mein zyada MSNF hota hai).</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Component (Tarkib)</th>
                            <th class="p-2 border">Percentage (lagbhag)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Fat (phansa hua ghee)</td><td class="p-2 border">50–65%</td></tr>
                        <tr><td class="p-2 border">Protein (bahut zyada denatured, cross-linked)</td><td class="p-2 border">20–30%</td></tr>
                        <tr><td class="p-2 border">Lactose (caramelized)</td><td class="p-2 border">5–12%</td></tr>
                        <tr><td class="p-2 border">Moisture (Nami)</td><td class="p-2 border">3–5%</td></tr>
                        <tr><td class="p-2 border">Minerals (Raakh/Ash)</td><td class="p-2 border">2–4%</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3"><strong>Upyog (Utilization):</strong></p>
            <ul class="list-disc pl-5 space-y-1 text-sm">
                <li><strong>Fat Recovery:</strong> Solvent extraction (food-grade hexane ya petroleum ether use karke) se residue ke weight ka 50–60% fat recover ho sakta hai, jo confectionery ya sabun banane mein use hota hai.</li>
                <li><strong>Mithai (Confectionery):</strong> Traditional Indian sweets (ladoo, barfi, halwa) mein directly flavoring ingredient ke roop mein use hota hai — iski rich, caramelized flavor ki wajah se.</li>
                <li><strong>Animal Feed (Pashu Aahar):</strong> Fat extraction ke baad, defatted residue (jo protein aur minerals se bhi rich hai) animal feed mein protein supplement ke roop mein use ho sakta hai.</li>
                <li><strong>Baked Goods:</strong> Cookies, cakes, aur bread mein flavor aur color enhancement ke liye use hota hai.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Ghee vs. Clarified Butter vs. Anhydrous Milk Fat (AMF) — Key Differences</h3>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Ghee</th>
                            <th class="p-2 border">Clarified Butter (Western)</th>
                            <th class="p-2 border">Anhydrous Milk Fat (AMF)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Heating Temperature</td><td class="p-2 border">110–120°C (browning hota hai)</td><td class="p-2 border">~100°C (browning nahi hota)</td><td class="p-2 border">~100°C vacuum mein (browning nahi hota)</td></tr>
                        <tr><td class="p-2 border">Maillard Browning</td><td class="p-2 border"><strong>Haan</strong> — flavor ke liye critical hai</td><td class="p-2 border">Nahi — browning se pehle solids hata dete hain</td><td class="p-2 border">Nahi</td></tr>
                        <tr><td class="p-2 border">Swaad (Flavor)</td><td class="p-2 border">Characteristic nutty, caramelized, rich</td><td class="p-2 border">Halka buttery</td><td class="p-2 border">Feeka, neutral</td></tr>
                        <tr><td class="p-2 border">Rang (Color)</td><td class="p-2 border">Golden amber (Maillard pigments)</td><td class="p-2 border">Halka yellow</td><td class="p-2 border">Peela yellow</td></tr>
                        <tr><td class="p-2 border">Moisture</td><td class="p-2 border">≤ 0.5%</td><td class="p-2 border">≤ 0.5%</td><td class="p-2 border">≤ 0.1% (Codex standard)</td></tr>
                        <tr><td class="p-2 border">Milk Fat</td><td class="p-2 border">≥ 99.5%</td><td class="p-2 border">≥ 99%</td><td class="p-2 border">≥ 99.8%</td></tr>
                        <tr><td class="p-2 border">Upyog (Application)</td><td class="p-2 border">Khana banana, dharmik anushthan, Ayurveda</td><td class="p-2 border">Khana banana, sauce-making</td><td class="p-2 border">Recombined dairy products, chocolate, bakery, ice cream</td></tr>
                        <tr><td class="p-2 border">Codex Standard</td><td class="p-2 border">Alag Codex standard nahi hai (FSSAI govern karta hai)</td><td class="p-2 border">—</td><td class="p-2 border">Codex STAN 280-1973</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Ghee Processing mein Key Scientific Concepts ka Summary</h3>
            <ul class="list-disc pl-5 space-y-2 mt-3">
                <li><strong>Phase Inversion (Dasha Ulat):</strong> Butter banane mein churning ke dauran O/W → W/O emulsion inversion hota hai.</li>
                <li><strong>Colligative Properties:</strong> Dissolved lactose aur minerals ki wajah se serum phase ka boiling point elevation hota hai.</li>
                <li><strong>Stokes' Law:</strong> Pre-stratification mein protein particles ke gravitational settling aur serum separation ko govern karta hai.</li>
                <li><strong>Maillard Reaction:</strong> Lactose (reducing sugar) aur milk proteins ke lysine residues ke beech non-enzymatic browning — ghee banane mein sabse important flavor-generating reaction hai.</li>
                <li><strong>Lipid Polymorphism:</strong> Cooling ke dauran α → β' → β crystalline transitions ghee ki texture aur grain determine karti hain.</li>
                <li><strong>Autoxidation Chain Reaction:</strong> Storage ke dauran lipid deterioration ka free-radical mechanism; antioxidants aur packaging se control hota hai.</li>
                <li><strong>Water Activity (a<sub>w</sub>):</strong> Microbiological stability ke liye critical parameter — ghee ki a<sub>w</sub> < 0.2 hone se virtually saara microbial growth ruk jaata hai.</li>
                <li><strong>Latent Heat of Vaporization:</strong> Ghee banane mein sabse zyada energy cost (2,260 kJ/kg water); pre-stratification is energy demand ko significantly reduce karta hai.</li>
                <li><strong>Reichert-Meissl Chemistry:</strong> Milk fat mein unique presence of volatile, water-soluble short-chain fatty acids (C₄, C₆) ko authenticity verification ke liye exploit karta hai.</li>
            </ul>
        `
    }
}

    
