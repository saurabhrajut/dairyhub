
export const yoghurtContent = {
    en: {
        title: "Yoghurt Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Yoghurt</h3>
            <p>Yoghurt is a globally popular fermented milk product produced by the controlled bacterial fermentation of milk. The word "yoghurt" is derived from the Turkish word <em>"yoğurmak"</em>, meaning to thicken or curdle. Historical evidence suggests that yoghurt originated in Mesopotamia around 5000 BCE, where warm climatic conditions and natural contamination of milk with thermophilic bacteria led to spontaneous fermentation.</p>
            <p class="mt-2">What distinguishes yoghurt from Dahi (Indian curd) is the use of a <strong>defined, specific pair of thermophilic bacteria</strong> for its fermentation: <strong><i>Lactobacillus delbrueckii</i> subsp. <i>bulgaricus</i></strong> and <strong><i>Streptococcus thermophilus</i></strong>. According to the <strong>Codex Alimentarius (CODEX STAN 243-2003)</strong>, a product can only be designated as "yoghurt" if these two specific organisms are used and are present alive in the final product at a minimum level of <strong>10<sup>7</sup> CFU/g</strong> at the time of consumption. These two bacteria work in a classical proto-cooperative symbiosis to produce the characteristic thick, viscous texture and tangy, aromatic flavor profile of yoghurt.</p>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded-r">
                <h4 class="font-bold text-blue-800">Yoghurt vs. Dahi: Key Scientific Distinction</h4>
                <p class="text-sm mt-1"><strong>Dahi</strong> is produced using a mixed, undefined mesophilic and thermophilic culture that may contain various species of <i>Lactobacillus</i>, <i>Lactococcus</i>, <i>Leuconostoc</i>, and <i>Streptococcus</i>. The culture is traditionally back-slopped from a previous batch. <strong>Yoghurt</strong>, by contrast, requires exclusively <i>L. bulgaricus</i> and <i>S. thermophilus</i> as defined by international (Codex) and national (FSSAI) standards. This defined culture ensures a standardized, reproducible fermentation with predictable organoleptic attributes.</p>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Classification of Yoghurt</h3>
            <p>Yoghurt can be classified on multiple bases:</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">A. Based on Fat Content</h4>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Type</th>
                            <th class="p-2 border">Fat % (m/m)</th>
                            <th class="p-2 border">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Full-fat / Whole Milk Yoghurt</td><td class="p-2 border">≥ 3.0</td><td class="p-2 border">Rich, creamy mouthfeel</td></tr>
                        <tr><td class="p-2 border">Partly Skimmed Yoghurt</td><td class="p-2 border">> 0.5 and < 3.0</td><td class="p-2 border">Reduced calorie</td></tr>
                        <tr><td class="p-2 border">Skimmed Yoghurt</td><td class="p-2 border">≤ 0.5</td><td class="p-2 border">Lowest calorie; may require stabilizers for texture</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">B. Based on Physical Structure / Method of Production</h4>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Type</th>
                            <th class="p-2 border">Production Method</th>
                            <th class="p-2 border">Texture Characteristics</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border"><strong>Set Yoghurt</strong></td><td class="p-2 border">Inoculated milk filled into retail containers, then incubated in situ. Gel forms undisturbed inside the cup.</td><td class="p-2 border">Firm, custard-like, continuous gel; spoonable. Higher gel firmness (typically 30–80 g force by texture analyzer).</td></tr>
                        <tr><td class="p-2 border"><strong>Stirred Yoghurt</strong></td><td class="p-2 border">Fermentation occurs in large vats (5,000–20,000 L). After incubation, the gel is broken by gentle stirring/agitation, cooled, and then packaged.</td><td class="p-2 border">Smooth, viscous, semi-fluid; gel is disrupted. Viscosity typically 2,000–10,000 mPa·s. Can exhibit thixotropic behavior.</td></tr>
                        <tr><td class="p-2 border"><strong>Drinking Yoghurt</strong></td><td class="p-2 border">Similar to stirred yoghurt but the gel is broken more intensely (homogenization or vigorous agitation) to achieve a pourable, liquid consistency.</td><td class="p-2 border">Pourable, low viscosity (50–500 mPa·s). Often flavored.</td></tr>
                        <tr><td class="p-2 border"><strong>Strained / Greek-style Yoghurt</strong></td><td class="p-2 border">Stirred yoghurt is mechanically concentrated by removing whey through cloth bags, centrifugal separators, or ultrafiltration (UF) membranes. Alternatively, milk is pre-concentrated by UF before fermentation.</td><td class="p-2 border">Very thick, creamy, high protein (8–12%), low lactose. Total solids 20–25%. Protein:fat ratio is higher.</td></tr>
                        <tr><td class="p-2 border"><strong>Frozen Yoghurt</strong></td><td class="p-2 border">Yoghurt mix is frozen in a continuous freezer with air incorporation (overrun 30–100%).</td><td class="p-2 border">Ice-cream-like texture. Viable culture count may decrease during freezing (log 1–2 reduction).</td></tr>
                        <tr><td class="p-2 border"><strong>Concentrated / Labneh</strong></td><td class="p-2 border">Strained to 22–26% total solids. Traditional in Middle Eastern cuisine.</td><td class="p-2 border">Spreadable, cheese-like consistency. Titratable acidity 1.5–2.5% lactic acid.</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">C. Based on Flavor Additions</h4>
            <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Plain / Natural Yoghurt:</strong> No added flavors, sweeteners, or fruit.</li>
                <li><strong>Flavored Yoghurt:</strong> Contains added sugar/sweeteners and natural or artificial flavors (e.g., vanilla, strawberry).</li>
                <li><strong>Fruit Yoghurt:</strong> Contains fruit preparations (typically 5–15% w/w). Fruit prep is always pre-sterilized/pasteurized separately to prevent contamination and phage introduction.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">D. Based on Post-Fermentation Treatment</h4>
            <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Standard Yoghurt:</strong> Contains live cultures at consumption.</li>
                <li><strong>Long-life / Heat-treated Yoghurt:</strong> Subjected to post-fermentation heat treatment (e.g., 65°C/30 min or UHT) to extend shelf life. Kills viable cultures. Permitted in some countries but NOT considered "yoghurt" under Codex if live culture criterion is not met.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Regulatory Standards</h3>
            
            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">FSSAI Standards (India)</h4>
            <p>The Food Safety and Standards Authority of India (FSSAI), under <strong>Food Safety and Standards (Food Products Standards and Food Additives) Regulations</strong>, provides compositional standards for different types of yoghurt.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Type of Yoghurt</th>
                            <th class="p-2 border">Minimum Milk Fat % (m/m)</th>
                            <th class="p-2 border">Minimum Milk SNF % (m/m)</th>
                            <th class="p-2 border">Titratable Acidity (% LA)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Yoghurt (whole milk)</strong></td>
                            <td class="p-2 border">≥ 3.0 and ≤ 15.0</td>
                            <td class="p-2 border">8.5</td>
                            <td class="p-2 border">≥ 0.6</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Partly Skimmed Yoghurt</strong></td>
                            <td class="p-2 border">> 0.5 and < 3.0</td>
                            <td class="p-2 border">8.5</td>
                            <td class="p-2 border">≥ 0.6</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Skimmed Yoghurt</strong></td>
                            <td class="p-2 border">≤ 0.5</td>
                            <td class="p-2 border">8.5</td>
                            <td class="p-2 border">≥ 0.6</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2 text-sm"><strong>Additional FSSAI Requirements:</strong> The product shall contain a minimum of <strong>10<sup>7</sup> CFU/g</strong> of viable yoghurt culture organisms (sum of <i>L. bulgaricus</i> and <i>S. thermophilus</i>). Permitted additives include stabilizers (gelatin, pectin, starch — max 1%), sweeteners, colors, and flavors as per Schedule.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Codex Alimentarius Standard (CODEX STAN 243-2003)</h4>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Requirement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Milk Protein</td><td class="p-2 border">≥ 2.7% (m/m)</td></tr>
                        <tr><td class="p-2 border">Titratable Acidity</td><td class="p-2 border">≥ 0.6% (expressed as lactic acid)</td></tr>
                        <tr><td class="p-2 border">Starter Culture</td><td class="p-2 border">Symbiotic cultures of <i>S. thermophilus</i> and <i>L. bulgaricus</i></td></tr>
                        <tr><td class="p-2 border">Viable Culture Count</td><td class="p-2 border">≥ 10<sup>7</sup> CFU/g (total of both organisms)</td></tr>
                        <tr><td class="p-2 border">Labelling</td><td class="p-2 border">If heat-treated after fermentation, product shall NOT be called "yoghurt" unless national legislation allows</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Microbiology of Yoghurt Starter Cultures</h3>
            
            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">The Two Essential Organisms</h4>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Characteristic</th>
                            <th class="p-2 border"><i>Streptococcus thermophilus</i></th>
                            <th class="p-2 border"><i>Lactobacillus delbrueckii</i> subsp. <i>bulgaricus</i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Taxonomy</td><td class="p-2 border">Phylum Firmicutes, Family Streptococcaceae</td><td class="p-2 border">Phylum Firmicutes, Family Lactobacillaceae</td></tr>
                        <tr><td class="p-2 border">Cell Morphology</td><td class="p-2 border">Gram-positive cocci, in pairs or chains</td><td class="p-2 border">Gram-positive rods, often in chains</td></tr>
                        <tr><td class="p-2 border">Optimum Growth Temp.</td><td class="p-2 border">40–45°C (range: 20–50°C)</td><td class="p-2 border">42–47°C (range: 22–52°C)</td></tr>
                        <tr><td class="p-2 border">Optimum pH</td><td class="p-2 border">6.5 (growth ceases ~pH 4.2–4.5)</td><td class="p-2 border">5.5–6.0 (can grow at pH 3.5–4.0; more acid-tolerant)</td></tr>
                        <tr><td class="p-2 border">Fermentation Type</td><td class="p-2 border">Homofermentative</td><td class="p-2 border">Obligately homofermentative</td></tr>
                        <tr><td class="p-2 border">Fermentation Pathway</td><td class="p-2 border">Embden-Meyerhof-Parnas (EMP) pathway; ferments glucose moiety of lactose to L(+)-lactic acid</td><td class="p-2 border">EMP pathway; ferments glucose moiety to D(−)-lactic acid (and some L(+) form)</td></tr>
                        <tr><td class="p-2 border">Lactose Utilization</td><td class="p-2 border">Has lactose permease (LacS) and β-galactosidase; metabolizes only glucose moiety, expels galactose into medium</td><td class="p-2 border">Has lactose permease and β-galactosidase; metabolizes both glucose and galactose moieties</td></tr>
                        <tr><td class="p-2 border">Proteolytic Activity</td><td class="p-2 border">Weak; limited extracellular protease activity. Relies on free amino acids and peptides.</td><td class="p-2 border"><strong>Strong</strong>; possesses cell-envelope proteinase (PrtB) that degrades caseins into peptides and free amino acids</td></tr>
                        <tr><td class="p-2 border">Key Flavor Contribution</td><td class="p-2 border">Produces formic acid, CO₂, diacetyl (buttery note), and some acetaldehyde</td><td class="p-2 border">Primary producer of <strong>acetaldehyde</strong> (characteristic yoghurt aroma), also produces acetoin</td></tr>
                        <tr><td class="p-2 border">EPS Production</td><td class="p-2 border">Many strains produce exopolysaccharides (EPS); major contributor to viscosity and ropiness</td><td class="p-2 border">Some strains produce EPS; contributes to texture</td></tr>
                        <tr><td class="p-2 border">Genome Size</td><td class="p-2 border">~1.8 Mb (highly adapted to milk; reductive evolution)</td><td class="p-2 border">~1.8–2.3 Mb</td></tr>
                        <tr><td class="p-2 border">GRAS/QPS Status</td><td class="p-2 border">GRAS (FDA); QPS (EFSA)</td><td class="p-2 border">GRAS (FDA); QPS (EFSA)</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Proto-Cooperative Symbiosis (Mutualism)</h4>
            <p>The interaction between <i>S. thermophilus</i> and <i>L. bulgaricus</i> is one of the most extensively studied microbial symbioses in food science. It is termed <strong>proto-cooperation</strong> — both organisms benefit from each other's metabolic activities, but neither is obligately dependent on the other for survival.</p>
            
            <div class="bg-green-50 border border-green-200 rounded-lg p-4 mt-3">
                <h5 class="font-bold text-green-800 mb-2">Mechanism of Symbiosis — Detailed Biochemistry</h5>
                <ol class="list-decimal list-outside pl-5 space-y-3 text-sm">
                    <li><strong>Phase 1 — <i>S. thermophilus</i> initiates growth:</strong>
                        <p><i>S. thermophilus</i> grows first because it is more sensitive to acid and thrives at the near-neutral pH (~6.5) of fresh milk. During its initial exponential growth phase, it:</p>
                        <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                            <li>Consumes dissolved oxygen in milk through NADH oxidase activity, creating a more <strong>anaerobic/microaerophilic environment</strong> favorable for the strictly anaerobic <i>L. bulgaricus</i>.</li>
                            <li>Produces <strong>formic acid (formate)</strong> via the enzyme pyruvate formate-lyase (PFL). Formate acts as a critical growth stimulant for <i>L. bulgaricus</i>, serving as a one-carbon (C1) donor for purine biosynthesis (formation of folic acid and nucleotides).</li>
                            <li>Generates <strong>CO₂</strong>, which also stimulates <i>L. bulgaricus</i> growth by serving as a carbon source for carboxylation reactions.</li>
                            <li>Produces <strong>L(+)-lactic acid</strong>, gradually lowering the pH toward 5.0–5.5 — the optimum range for <i>L. bulgaricus</i> proteinase activity.</li>
                        </ul>
                    </li>
                    <li><strong>Phase 2 — <i>L. bulgaricus</i> accelerates and stimulates <i>S. thermophilus</i>:</strong>
                        <p>As pH decreases and the environment becomes more anaerobic:</p>
                        <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                            <li><i>L. bulgaricus</i> activates its <strong>cell-envelope proteinase (CEP, specifically PrtB)</strong>, a serine proteinase anchored to the cell wall. PrtB has a preference for <strong>β-casein and αs1-casein</strong>, cleaving them into oligopeptides (4–30 amino acid residues).</li>
                            <li>These oligopeptides are further degraded by intracellular peptidases (PepN, PepX, PepO, PepC, PepT, PepQ) into <strong>free amino acids</strong>, particularly <strong>valine, histidine, glycine, leucine, and isoleucine</strong>.</li>
                            <li><i>S. thermophilus</i>, which is <strong>auxotrophic for several amino acids</strong> (especially histidine, methionine, cysteine, valine, leucine, isoleucine, and glutamic acid) and has very limited proteolytic capability, depends on these liberated amino acids and peptides for continued growth.</li>
                            <li>The availability of these nutrients causes a <strong>second exponential growth phase of <i>S. thermophilus</i></strong>, leading to a faster rate of acid production than either organism could achieve alone. In co-culture, the rate of acidification can be <strong>2–3× faster</strong> than in monoculture.</li>
                        </ul>
                    </li>
                    <li><strong>Phase 3 — Acid inhibition and cessation:</strong>
                        <p>As pH drops below 4.5, <i>S. thermophilus</i> growth is progressively inhibited (it is less acid-tolerant). <i>L. bulgaricus</i>, being more acid-tolerant, continues to produce acid (post-acidification) until pH reaches ~3.5–4.0 if not cooled promptly. This is why <strong>rapid cooling after target pH is critical</strong>.</p>
                    </li>
                </ol>
            </div>

            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4 rounded-r">
                <h5 class="font-bold text-yellow-800">Ratio of S. thermophilus : L. bulgaricus</h5>
                <p class="text-sm mt-1">The initial inoculation ratio is typically <strong>1:1</strong>, but during fermentation, <i>S. thermophilus</i> grows faster and often dominates numerically in a ratio of <strong>3:1 to 5:1</strong> in the final product. This ratio affects flavor: a higher proportion of <i>L. bulgaricus</i> leads to more acetaldehyde and higher acidity (sharper taste), while a higher proportion of <i>S. thermophilus</i> produces a milder, less acidic yoghurt with more diacetyl (buttery) notes. Commercial manufacturers manipulate this ratio to achieve desired sensory profiles.</p>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Biochemistry of Yoghurt Fermentation</h3>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">1. Lactose Metabolism (Glycolysis)</h4>
            <p>Both organisms are <strong>obligately homofermentative</strong>, converting lactose to lactic acid via the <strong>Embden-Meyerhof-Parnas (EMP) glycolytic pathway</strong>:</p>
            <div class="bg-gray-100 p-4 rounded mt-2 font-mono text-sm text-center">
                <p><strong>Step 1: Lactose Transport and Hydrolysis</strong></p>
                <p>Lactose (extracellular) → [LacS permease / antiport with galactose] → Lactose (intracellular)</p>
                <p>Lactose → [β-galactosidase (LacZ)] → <strong>Glucose</strong> + <strong>Galactose</strong></p>
                <p class="mt-3"><strong>Step 2: Glycolysis (EMP Pathway)</strong></p>
                <p>Glucose → [10-step EMP pathway] → 2 Pyruvate</p>
                <p>Net yield: 2 ATP + 2 NADH per glucose</p>
                <p class="mt-3"><strong>Step 3: Pyruvate Reduction</strong></p>
                <p>Pyruvate + NADH → [Lactate dehydrogenase (LDH)] → <strong>Lactic Acid</strong> + NAD⁺</p>
                <p class="mt-3"><strong>Overall Equation:</strong></p>
                <p>C₁₂H₂₂O₁₁ (Lactose) + H₂O → 4 CH₃CHOHCOOH (Lactic Acid)</p>
                <p class="text-xs mt-1">(Theoretical yield: 1 mol lactose → 4 mol lactic acid; actual yield ~3.5–3.8 mol due to biomass diversion)</p>
            </div>
            <p class="mt-3"><strong>Note on Galactose metabolism:</strong> <i>S. thermophilus</i> typically lacks a functional Leloir pathway (galactokinase, GalK) and therefore <strong>expels galactose</strong> into the medium via the LacS antiporter (lactose/galactose exchange). This results in <strong>accumulation of free galactose in yoghurt</strong> (typically 1.5–2.5 g/100g). <i>L. bulgaricus</i> can metabolize galactose through the Leloir pathway, but does so slowly. The presence of residual galactose is of clinical interest as it has been linked to potential health implications (galactose and cataract formation in susceptible populations), though this remains debated at dietary levels.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">2. Flavor Compound Production</h4>
            <p>The characteristic flavor of yoghurt results from a complex mixture of over <strong>90 volatile compounds</strong>. The key compounds are:</p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Compound</th>
                            <th class="p-2 border">Concentration (ppm)</th>
                            <th class="p-2 border">Flavor Note</th>
                            <th class="p-2 border">Primary Producer</th>
                            <th class="p-2 border">Biosynthetic Pathway</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border"><strong>Acetaldehyde</strong></td><td class="p-2 border">10–40 (ideal: 23–41 ppm)</td><td class="p-2 border">Green apple, fresh, characteristic yoghurt flavor</td><td class="p-2 border"><i>L. bulgaricus</i> (primary); <i>S. thermophilus</i> (minor)</td><td class="p-2 border">From threonine by <strong>threonine aldolase</strong> (threonine → acetaldehyde + glycine). Also from pyruvate via pyruvate decarboxylase.</td></tr>
                        <tr><td class="p-2 border"><strong>Diacetyl</strong> (2,3-butanedione)</td><td class="p-2 border">0.5–5</td><td class="p-2 border">Buttery, creamy</td><td class="p-2 border"><i>S. thermophilus</i></td><td class="p-2 border">From citrate metabolism or from α-acetolactate (non-enzymatic oxidative decarboxylation). Citrate → oxaloacetate → pyruvate → α-acetolactate → diacetyl</td></tr>
                        <tr><td class="p-2 border"><strong>Acetoin</strong> (3-hydroxy-2-butanone)</td><td class="p-2 border">2–10</td><td class="p-2 border">Mild buttery, creamy</td><td class="p-2 border">Both</td><td class="p-2 border">Reduction of diacetyl by diacetyl reductase, or from α-acetolactate by α-acetolactate decarboxylase</td></tr>
                        <tr><td class="p-2 border"><strong>Lactic Acid</strong></td><td class="p-2 border">6,000–12,000</td><td class="p-2 border">Sour, tangy, clean acid</td><td class="p-2 border">Both</td><td class="p-2 border">EMP pathway (see above)</td></tr>
                        <tr><td class="p-2 border"><strong>Acetic Acid</strong></td><td class="p-2 border">1–30</td><td class="p-2 border">Vinegary (undesirable at high levels)</td><td class="p-2 border"><i>L. bulgaricus</i></td><td class="p-2 border">From pyruvate via pyruvate oxidase; or amino acid degradation</td></tr>
                        <tr><td class="p-2 border"><strong>Formic Acid</strong></td><td class="p-2 border">5–40</td><td class="p-2 border">Slightly pungent</td><td class="p-2 border"><i>S. thermophilus</i></td><td class="p-2 border">Pyruvate formate-lyase (PFL): pyruvate → formate + acetyl-CoA</td></tr>
                        <tr><td class="p-2 border"><strong>2,3-Pentanedione</strong></td><td class="p-2 border">Trace</td><td class="p-2 border">Buttery</td><td class="p-2 border">Both</td><td class="p-2 border">Similar to diacetyl pathway</td></tr>
                        <tr><td class="p-2 border"><strong>Free Fatty Acids</strong></td><td class="p-2 border">Trace-moderate</td><td class="p-2 border">Cheesy, rancid (if excessive)</td><td class="p-2 border"><i>L. bulgaricus</i></td><td class="p-2 border">Weak lipolysis of milk triglycerides by esterases</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2 text-sm"><strong>Optimal Flavor Balance:</strong> The ratio of <strong>acetaldehyde to diacetyl + acetoin</strong> determines the perceived flavor. An acetaldehyde content of ~23–40 ppm is considered optimal. If acetaldehyde is too low, yoghurt tastes "flat"; if too high (>45 ppm), it can be perceived as "harsh" or "green."</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">3. Exopolysaccharide (EPS) Production</h4>
            <p>Many strains of <i>S. thermophilus</i> and some strains of <i>L. bulgaricus</i> produce <strong>exopolysaccharides (EPS)</strong> — high molecular weight (10<sup>4</sup>–10<sup>6</sup> Da) sugar polymers secreted into the milk medium. EPS are of immense technological importance as they naturally enhance the <strong>viscosity, texture, mouthfeel, and water-holding capacity</strong> of yoghurt, reducing or eliminating the need for added stabilizers.</p>
            <div class="bg-purple-50 border border-purple-200 rounded-lg p-4 mt-3">
                <h5 class="font-bold text-purple-800 mb-2">EPS — Detailed Science</h5>
                <ul class="list-disc list-outside pl-5 space-y-2 text-sm">
                    <li><strong>Types:</strong> EPS can be <strong>capsular</strong> (tightly associated with the cell surface, forming a capsule) or <strong>ropy/free</strong> (released into the medium, creating a "stringy" texture). Ropy strains are preferred for stirred yoghurt production.</li>
                    <li><strong>Composition:</strong> Heteropolysaccharides composed of repeating units of 2–8 sugar monomers including <strong>D-glucose, D-galactose, L-rhamnose, L-fucose, N-acetylglucosamine, and N-acetylgalactosamine</strong>. The sugar-nucleotide precursors (UDP-glucose, UDP-galactose, dTDP-rhamnose) are synthesized from the Leloir pathway intermediates.</li>
                    <li><strong>Biosynthesis:</strong> EPS repeating units are assembled on a lipid carrier (undecaprenyl phosphate, C₅₅-P) at the cytoplasmic membrane by glycosyltransferases (encoded by the <em>eps</em> gene cluster), then polymerized and exported across the membrane by a Wzx/Wzy-dependent mechanism.</li>
                    <li><strong>Yield:</strong> Typically 50–600 mg/L in yoghurt milk (some hyper-producing strains: up to 1,500 mg/L).</li>
                    <li><strong>Functional Effect:</strong> EPS molecules interact with the protein network through depletion flocculation and/or bridging effects, creating a more interconnected microstructure. They increase apparent viscosity by 2–10× and significantly reduce syneresis (whey separation) by entrapping water within the gel matrix.</li>
                    <li><strong>Health Claims:</strong> Some EPS have demonstrated <strong>immunomodulatory, anti-tumor, cholesterol-lowering, and prebiotic</strong> properties in vitro, though evidence in vivo in humans is still emerging.</li>
                </ul>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Protein Chemistry and Gel Formation in Yoghurt</h3>
            <p>The transformation of liquid milk into a semi-solid yoghurt gel is fundamentally a process of <strong>acid-induced protein gelation</strong>. Understanding this requires knowledge of casein micelle structure and its destabilization.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Casein Micelle Structure (Brief Review)</h4>
            <ul class="list-disc list-outside pl-5 space-y-2 text-sm">
                <li>Casein constitutes ~80% of total milk protein (~2.6 g/100 mL). It exists as <strong>colloidal aggregates called casein micelles</strong> (diameter 50–500 nm, average ~150 nm).</li>
                <li>Micelles are composed of <strong>αs1-casein, αs2-casein, β-casein, and κ-casein</strong> held together by <strong>calcium phosphate nanoclusters (colloidal calcium phosphate, CCP)</strong> and hydrophobic interactions.</li>
                <li><strong>κ-casein</strong> is located predominantly on the micelle surface. Its hydrophilic, glycosylated C-terminal segment (the <strong>glycomacropeptide, GMP</strong>) extends into the serum phase, creating a <strong>"hairy layer"</strong> that provides <strong>steric and electrostatic stabilization</strong>, preventing micelle aggregation.</li>
                <li>At native milk pH (~6.7), casein micelles carry a <strong>net negative charge</strong> (zeta potential approximately −20 mV), contributing to colloidal stability via electrostatic repulsion.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">The Acid-Induced Gelation Process</h4>
            <p>During yoghurt fermentation, lactic acid production progressively lowers the pH. The following pH-dependent events occur:</p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">pH Range</th>
                            <th class="p-2 border">Key Physicochemical Events</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">6.7 → 6.0</td><td class="p-2 border">Gradual solubilization of <strong>colloidal calcium phosphate (CCP)</strong> from casein micelles. Ca²⁺ and phosphate ions are released into the serum phase. Micelles begin to lose internal structural integrity. Slight decrease in micelle size observed by dynamic light scattering.</td></tr>
                        <tr><td class="p-2 border">6.0 → 5.3</td><td class="p-2 border">Continued CCP solubilization (~80% dissolved by pH 5.2). <strong>β-casein begins to dissociate</strong> from micelles due to weakened calcium bridges. Net negative charge on micelles decreases progressively. If heat-denatured whey proteins are present on the surface (from pre-heating), they participate in cross-linking. Micelles begin to swell.</td></tr>
                        <tr><td class="p-2 border">5.3 → 5.0</td><td class="p-2 border"><strong>Onset of gelation (gel point).</strong> Electrostatic repulsion between micelles is sufficiently reduced. Hydrophobic interactions and calcium bridging begin to dominate. Casein particles begin to aggregate into <strong>chains and clusters</strong>. Rheologically, the storage modulus (G') begins to increase.</td></tr>
                        <tr><td class="p-2 border">5.0 → 4.6</td><td class="p-2 border">Rapid gelation phase. At <strong>pH 4.6 (isoelectric point of casein)</strong>, the net charge is zero. Maximum aggregation occurs. Caseins aggregate into a <strong>three-dimensional particulate gel network</strong> — an interconnected matrix of casein strands and clusters entrapping serum (whey), fat globules, and bacteria. The gel firms rapidly. G' increases exponentially.</td></tr>
                        <tr><td class="p-2 border">< 4.6</td><td class="p-2 border">Continued acidification leads to a net positive charge on casein. Over-acidification (pH < 4.2) can weaken the gel due to excessive charge repulsion and protein rearrangements. The gel becomes brittle and prone to syneresis.</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Role of Heat Treatment in Gel Quality (Critical Science)</h4>
            <p>The high heat treatment (90–95°C for 5–10 min) applied to milk before fermentation is arguably the <strong>most important processing step</strong> for yoghurt gel quality. Its effects go far beyond mere pasteurization:</p>
            <ol class="list-decimal list-outside pl-5 space-y-3 text-sm mt-2">
                <li><strong>Whey Protein Denaturation (>80°C):</strong>
                    <p>Major whey proteins, <strong>β-lactoglobulin (β-Lg)</strong> and <strong>α-lactalbumin (α-La)</strong>, have denaturation temperatures of approximately 78°C and 62°C respectively. At 90–95°C, approximately <strong>85–95% of β-Lg</strong> and <strong>70–85% of α-La</strong> are denatured (unfolded). The unfolding exposes buried <strong>reactive sulfhydryl (-SH) groups</strong> (especially Cys-121 and Cys-119 in β-Lg).</p>
                </li>
                <li><strong>Whey Protein – Casein Interaction (κ-casein–β-Lg complex):</strong>
                    <p>Denatured β-Lg interacts with <strong>κ-casein on the micelle surface</strong> through <strong>thiol-disulfide exchange reactions</strong> (β-Lg Cys-121 reacts with κ-casein Cys-11 or Cys-88). This forms <strong>covalent disulfide-bonded β-Lg/κ-casein complexes</strong> on the micelle surface.</p>
                    <p>Additionally, denatured whey protein aggregates form in the serum phase and can attach to micelles through hydrophobic interactions.</p>
                </li>
                <li><strong>Consequences for Gel Structure:</strong>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>The attached denatured whey proteins <strong>increase the effective volume fraction</strong> of the casein particles, creating a denser, more connected gel network.</li>
                        <li>They provide <strong>additional cross-linking points</strong> via disulfide bonds, making the gel stronger (higher G' — storage modulus — and higher fracture stress).</li>
                        <li>The denatured whey proteins have excellent <strong>water-binding capacity</strong>, entrapping more serum within the gel and dramatically <strong>reducing syneresis (whey separation)</strong>.</li>
                        <li>Gel firmness can increase by <strong>2–4×</strong> compared to unheated or mildly pasteurized milk.</li>
                    </ul>
                </li>
                <li><strong>Without adequate heat treatment:</strong>
                    <p>If milk is only HTST pasteurized (72°C/15s), whey proteins remain largely native (only ~10–15% denatured). The resulting yoghurt gel is <strong>weak, fragile, and exhibits extensive whey separation</strong> — commercially unacceptable for most yoghurt formats.</p>
                </li>
            </ol>

            <div class="bg-orange-50 border-l-4 border-orange-500 p-4 mt-4 rounded-r">
                <h5 class="font-bold text-orange-800">Gel Firmness Factors — Summary</h5>
                <p class="text-sm mt-1">Yoghurt gel firmness (measured by penetrometry, texture profile analysis, or oscillatory rheology) depends on: <strong>(1)</strong> Total protein/casein content (↑ protein → ↑ firmness), <strong>(2)</strong> Degree of whey protein denaturation (↑ denaturation → ↑ firmness), <strong>(3)</strong> Incubation temperature (higher temps → faster gelation but coarser, weaker gel; lower temps → slower, finer, stronger gel), <strong>(4)</strong> Final pH (optimum ~4.4–4.6), <strong>(5)</strong> Fat content (fat globules act as "active" or "inactive" fillers depending on homogenization), <strong>(6)</strong> EPS production by cultures, <strong>(7)</strong> Addition of stabilizers (pectin, starch, gelatin).</p>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Role of Fortification and Additives</h3>
            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">SNF/Protein Fortification</h4>
            <p>Yoghurt milk is routinely fortified to increase total solids from the typical 12.5% (for whole milk) to <strong>14–18%</strong>. Methods include:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 text-sm mt-2">
                <li><strong>Addition of skim milk powder (SMP):</strong> Most common. Increases casein and whey protein content. Typical addition: 2–4% SMP (increases total protein to 4.5–5.5%).</li>
                <li><strong>Addition of milk protein concentrate (MPC) or whey protein concentrate (WPC):</strong> MPC increases casein proportion (stronger gel); WPC increases whey protein (better water-binding after heat treatment).</li>
                <li><strong>Evaporation/vacuum concentration:</strong> Removes water under vacuum (50–60°C) to increase total solids without altering composition ratios. Energy-intensive but produces excellent quality.</li>
                <li><strong>Membrane concentration (Ultrafiltration, UF):</strong> Concentrates proteins and fat while permeating lactose, water, minerals. Used especially for Greek-style yoghurt. UF with 10 kDa MWCO membrane typically achieves 2–3× protein concentration.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Stabilizers and Hydrocolloids</h4>
            <p>Used in some commercial yoghurts (especially low-fat and stirred types) to improve texture and prevent syneresis:</p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Stabilizer</th>
                            <th class="p-2 border">Usage Level</th>
                            <th class="p-2 border">Mechanism</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Gelatin</td><td class="p-2 border">0.3–0.5%</td><td class="p-2 border">Forms a secondary gel network (below 35°C) that reinforces the casein gel. Excellent water binding. Thermoreversible.</td></tr>
                        <tr><td class="p-2 border">Pectin (HM or LM)</td><td class="p-2 border">0.1–0.5%</td><td class="p-2 border">At acidic pH (<4.6), pectin (negatively charged) electrostatically binds to casein (positively charged regions), forming a protective layer that prevents aggregation and syneresis. Excellent for drinking yoghurt.</td></tr>
                        <tr><td class="p-2 border">Modified starch</td><td class="p-2 border">0.5–2.0%</td><td class="p-2 border">Swells during heat treatment, increasing viscosity. Acts as an inert filler in the gel matrix, preventing whey drainage. Cross-linked starches resist acidic conditions.</td></tr>
                        <tr><td class="p-2 border">Agar</td><td class="p-2 border">0.1–0.5%</td><td class="p-2 border">Forms thermally stable gel; increases firmness. Less commonly used due to brittle texture.</td></tr>
                        <tr><td class="p-2 border">Carrageenan (κ or ι)</td><td class="p-2 border">0.01–0.05%</td><td class="p-2 border">Interacts with κ-casein on micelle surface, preventing whey separation. Very effective at low concentrations.</td></tr>
                        <tr><td class="p-2 border">Inulin / Polydextrose</td><td class="p-2 border">1–3%</td><td class="p-2 border">Prebiotic fibers that increase viscosity, provide fat-mimicking mouthfeel in low-fat yoghurts, and offer additional health benefits.</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Yoghurt with Food Safety Controls (HACCP)</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Processing Flowchart</h3>
            <div class="space-y-2 font-mono text-center text-sm">
                <div class="p-3 bg-gray-100 border border-gray-300 rounded"><strong>Raw Milk Reception & Testing</strong> (Fat, SNF, Acidity, MBRT, Antibiotic residues, Somatic cell count, Temperature) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-100 border border-gray-300 rounded"><strong>Pre-filtration / Clarification</strong> (Removal of physical impurities via inline filters or centrifugal clarifier) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded"><strong>Milk Standardization</strong> (Fat adjusted to target; SNF fortified to 14–16% using SMP/MPC/evaporation/UF) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded"><strong>Addition of Stabilizers/Sweeteners</strong> (If applicable: gelatin, pectin, starch, sugar — blended with portion of milk or dry-blended) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-50 border border-blue-300 rounded"><strong>Homogenization</strong> (2-stage: 150–200 bar (1st) + 50 bar (2nd) at 55–65°C, upstream or downstream of heat treatment) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>High Heat Treatment</strong> (85–95°C for 5–30 min; or 80°C/30 min) <span class="font-sans text-xs bg-red-200 p-1 rounded font-bold">CCP-1 (B)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Cooling to Incubation Temperature</strong> (42–45°C for thermophilic culture; 30°C if using mesophilic adjuncts) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Inoculation with Yoghurt Starter Culture</strong> (DVS or bulk starter; 1–3% inoculation rate; <i>S. thermophilus</i> + <i>L. bulgaricus</i> at 1:1 ratio) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓ ←—— Branching Point</div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div class="space-y-2">
                        <div class="p-2 bg-indigo-100 border border-indigo-300 rounded text-center font-bold">SET YOGHURT PATHWAY</div>
                        <div class="p-2 bg-indigo-50 border border-indigo-200 rounded">Filling into retail cups (with or without fruit base at bottom)</div>
                        <div class="text-xl text-center">↓</div>
                        <div class="p-2 bg-indigo-50 border border-indigo-200 rounded">Incubation in warm room / tunnel (42–45°C, 3–6 hours until pH 4.5–4.6) <span class="font-sans text-xs bg-red-200 p-1 rounded font-bold">CCP-2</span></div>
                        <div class="text-xl text-center">↓</div>
                        <div class="p-2 bg-indigo-50 border border-indigo-200 rounded">Rapid cooling in blast chiller/cold tunnel (to <10°C within 1–2 hours) <span class="font-sans text-xs bg-red-200 p-1 rounded font-bold">CCP-3</span></div>
                    </div>
                    <div class="space-y-2">
                        <div class="p-2 bg-teal-100 border border-teal-300 rounded text-center font-bold">STIRRED YOGHURT PATHWAY</div>
                        <div class="p-2 bg-teal-50 border border-teal-200 rounded">Incubation in jacketed tank (42–45°C, 3–6 hours until pH 4.5–4.6) <span class="font-sans text-xs bg-red-200 p-1 rounded font-bold">CCP-2</span></div>
                        <div class="text-xl text-center">↓</div>
                        <div class="p-2 bg-teal-50 border border-teal-200 rounded">Gel breaking by gentle stirring (low RPM agitator)</div>
                        <div class="text-xl text-center">↓</div>
                        <div class="p-2 bg-teal-50 border border-teal-200 rounded">Cooling in PHE or tubular cooler (to 15–20°C)</div>
                        <div class="text-xl text-center">↓</div>
                        <div class="p-2 bg-teal-50 border border-teal-200 rounded">Addition of fruit preparation / flavors (inline dosing and static mixing) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-xl text-center">↓</div>
                        <div class="p-2 bg-teal-50 border border-teal-200 rounded">Packaging (aseptic or clean-fill into cups, pouches, bottles)</div>
                        <div class="text-xl text-center">↓</div>
                        <div class="p-2 bg-teal-50 border border-teal-200 rounded">Final cooling and cold storage (<5°C) <span class="font-sans text-xs bg-red-200 p-1 rounded font-bold">CCP-3</span></div>
                    </div>
                </div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Explanation of Processing Steps</h3>
            <ol class="list-decimal list-outside pl-5 space-y-6">
                <li><strong>Raw Milk Reception and Quality Testing (PRP):</strong>
                    <p>Incoming raw milk is tested for:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1 text-sm">
                        <li><strong>Platform tests:</strong> Organoleptic evaluation (smell, taste, visual), temperature (should be ≤8°C if transported chilled), clot-on-boiling (COB), alcohol test (68–72% ethanol).</li>
                        <li><strong>Compositional tests:</strong> Fat (Gerber method/IR), SNF (lactometer/IR), protein (Kjeldahl/Dumas/IR), lactose, total solids.</li>
                        <li><strong>Microbiological quality:</strong> MBRT (Methylene Blue Reduction Test — should be >2 hours for Good quality), SPC (Standard Plate Count — target <2×10⁵ CFU/mL for Grade A), somatic cell count (<4×10⁵ cells/mL indicating absence of mastitis).</li>
                        <li><strong>Antibiotic residues:</strong> Tested using rapid screening kits (Delvotest, SNAP test). Antibiotics inhibit starter culture growth and are a serious food safety concern. Positive samples must be rejected. This testing can itself be considered a <strong>CCP or oPRP</strong> in some HACCP plans.</li>
                        <li><strong>Adulterants:</strong> Urea, starch, neutralizers (tested per FSSAI requirements).</li>
                    </ul>
                </li>

                <li><strong>Homogenization (PRP):</strong>
                    <p>Homogenization serves several critical functions in yoghurt manufacture:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2 text-sm">
                        <li><strong>Fat globule size reduction:</strong> Native milk fat globules (1–10 µm diameter, average ~3.5 µm) are reduced to <strong>< 1 µm</strong> (typically 0.3–0.8 µm) by forcing milk through a narrow valve under high pressure (150–200 bar first stage, 50 bar second stage).</li>
                        <li><strong>MFGM disruption and casein adsorption:</strong> The native milk fat globule membrane (MFGM) is disrupted and replaced by a new surface layer composed primarily of <strong>casein micelles and whey proteins</strong>. This creates <strong>"protein-coated fat globules"</strong> that behave as <strong>pseudo-protein particles</strong> in the gel matrix.</li>
                        <li><strong>Active filler effect:</strong> These homogenized fat globules become <strong>"active fillers"</strong> in the yoghurt gel — they are incorporated into the casein network through their protein surface coat, reinforcing the gel and <strong>increasing firmness by 30–100%</strong> compared to unhomogenized milk yoghurt.</li>
                        <li><strong>Prevention of creaming:</strong> Smaller fat globules have reduced buoyancy (Stokes' law: sedimentation velocity ∝ r²), preventing fat layer formation during incubation.</li>
                        <li><strong>Improved whiteness:</strong> Smaller fat globules scatter light more efficiently, giving yoghurt a whiter, more opaque appearance.</li>
                    </ul>
                    <p class="mt-2 text-sm"><strong>Upstream vs. Downstream Homogenization:</strong> In yoghurt production, homogenization is typically performed <strong>upstream (before) or simultaneously with heat treatment</strong>. Downstream homogenization (after heat treatment) is generally avoided for set yoghurt as it can disrupt the gel structure, but may be used for drinking yoghurt.</p>
                </li>

                <li><strong>High Heat Treatment (CCP-1 — Biological Hazard):</strong>
                    <p>This is a <strong>Critical Control Point</strong> for controlling <strong>biological hazards</strong> (pathogenic and spoilage microorganisms).</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Specification</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Critical Limit</td><td class="p-2 border"><strong>85°C for 30 min</strong> or <strong>90–95°C for 5–10 min</strong> (most common industrial practice)</td></tr>
                                <tr><td class="p-2 border">Target Pathogens</td><td class="p-2 border"><i>Mycobacterium bovis</i> (D₇₂ = 15–20 s); <i>Coxiella burnetii</i> (D₇₂ = 6–12 s); <i>Salmonella</i> spp.; <i>E. coli</i> O157:H7; <i>L. monocytogenes</i> (D₇₂ = 2–3 s); <i>S. aureus</i>; <i>Campylobacter</i> spp.</td></tr>
                                <tr><td class="p-2 border">Log Reduction Achieved</td><td class="p-2 border">> 12-log (12D) reduction of <i>C. burnetii</i> (most heat-resistant non-spore-forming pathogen in milk)</td></tr>
                                <tr><td class="p-2 border">Monitoring</td><td class="p-2 border">Continuous temperature recording (calibrated thermocouples with alarm systems); flow diversion valve (FDV) if using continuous system</td></tr>
                                <tr><td class="p-2 border">Corrective Action</td><td class="p-2 border">If temperature falls below CL: re-process or divert milk; recalibrate instruments; investigate root cause</td></tr>
                                <tr><td class="p-2 border">Verification</td><td class="p-2 border">Review temperature charts; <strong>alkaline phosphatase test (must be negative)</strong>; <strong>lactoperoxidase test (may be negative at >80°C)</strong>; microbiological testing of final product</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-3"><strong>Additional benefits of high heat treatment (beyond pathogen kill):</strong></p>
                    <ul class="list-disc list-outside pl-5 space-y-1 text-sm">
                        <li>Denaturation of ~85–95% of β-lactoglobulin and ~70–85% of α-lactalbumin → improved gel texture (as detailed above).</li>
                        <li>Inactivation of indigenous milk enzymes: lipase, protease, xanthine oxidase, alkaline phosphatase.</li>
                        <li>Destruction of bacteriophages that could attack starter cultures (critical for consistent fermentation).</li>
                        <li>Removal of dissolved oxygen and production of reactive sulfhydryl groups (from denatured whey proteins), creating a <strong>reducing environment</strong> favorable for the growth of the (micro)anaerobic starter bacteria.</li>
                        <li>Generation of stimulatory compounds: formate, pyruvate, and free amino acids from thermal breakdown of milk components.</li>
                        <li>Inactivation of natural antimicrobial systems: <strong>lactoperoxidase system (LP system)</strong> and <strong>immunoglobulins</strong> that could otherwise inhibit starter culture growth.</li>
                    </ul>
                </li>

                <li><strong>Cooling to Incubation Temperature (oPRP):</strong>
                    <p>After heat treatment, the milk is cooled in a plate heat exchanger (PHE) or tubular heat exchanger to the optimum incubation temperature of <strong>42–45°C</strong> (optimal for thermophilic culture). This step is an <strong>Operational Prerequisite Program (oPRP)</strong>:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1 text-sm">
                        <li><strong>Temperature too high (>47°C):</strong> Thermal injury or death of starter bacteria; <i>S. thermophilus</i> is particularly sensitive (max growth temperature ~50°C for most strains).</li>
                        <li><strong>Temperature too low (<38°C):</strong> Very slow growth of thermophilic culture; extended fermentation time; potential for contamination by psychrotrophic organisms; inconsistent gel quality.</li>
                        <li><strong>Monitoring:</strong> Inline temperature sensors, CIP-cleaned cooling equipment.</li>
                    </ul>
                </li>

                <li><strong>Inoculation with Yoghurt Starter Culture (oPRP):</strong>
                    <p>The specific yoghurt starter culture is added. Modern industrial practice uses <strong>Direct Vat Set (DVS)</strong> cultures — freeze-dried or deep-frozen concentrated cultures that are added directly to the vat without requiring intermediate propagation.</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Specification</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Inoculation Rate</td><td class="p-2 border">DVS cultures: as per supplier recommendation (typically delivers 10⁶–10⁷ CFU/mL in milk). Bulk starter: 1–3% (v/v).</td></tr>
                                <tr><td class="p-2 border">Culture Ratio</td><td class="p-2 border"><i>S. thermophilus</i> : <i>L. bulgaricus</i> = 1:1 (initial inoculation). Some manufacturers use 2:1 or 3:1 for milder products.</td></tr>
                                <tr><td class="p-2 border">Culture Activity Test</td><td class="p-2 border">Before use, culture activity is verified: inoculated milk should reach pH 4.5 within 4–5 hours at 42°C (ΔpH test).</td></tr>
                                <tr><td class="p-2 border">Storage of DVS</td><td class="p-2 border">Freeze-dried: ≤ −18°C; Frozen pellets: ≤ −45°C. Never thaw and refreeze.</td></tr>
                                <tr><td class="p-2 border">Why oPRP?</td><td class="p-2 border">Culture contamination (wrong organisms, phage contamination, low viability) would lead to fermentation failure, atypical product, or safety issues. Supplier certification, storage conditions, and aseptic handling are critical controls.</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-3"><strong>Probiotic Adjunct Cultures (Optional):</strong> Some yoghurts contain additional <strong>probiotic organisms</strong> such as <i>Lactobacillus acidophilus</i>, <i>Lactobacillus rhamnosus</i> GG, <i>Lactobacillus casei</i>, <i>Bifidobacterium lactis</i> (BB-12), or <i>Bifidobacterium longum</i>. These are added alongside the mandatory yoghurt culture and must survive at <strong>≥10⁶ CFU/g</strong> at the time of consumption to provide potential health benefits. The product may be labeled as "Probiotic Yoghurt" subject to national regulations. Note: <i>L. bulgaricus</i> and <i>S. thermophilus</i> themselves are not typically classified as probiotics under ISAPP (International Scientific Association for Probiotics and Prebiotics) definition, as their survival through the GI tract is limited, although they do exert some beneficial effects.</p>
                </li>

                <li><strong>Incubation / Fermentation (CCP-2 — Biological Hazard):</strong>
                    <p>This is the core transformation step. The inoculated milk is held at 42–45°C to allow the starter bacteria to ferment lactose to lactic acid.</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Set Yoghurt</th>
                                    <th class="p-2 border">Stirred Yoghurt</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Vessel</td><td class="p-2 border">Retail cups in warm room/incubation tunnel</td><td class="p-2 border">Jacketed stainless steel fermentation tanks (5,000–20,000 L)</td></tr>
                                <tr><td class="p-2 border">Temperature</td><td class="p-2 border">42–45°C (±0.5°C uniformity required)</td><td class="p-2 border">42–45°C (jacket temperature controlled)</td></tr>
                                <tr><td class="p-2 border">Duration</td><td class="p-2 border">3–6 hours (typically 3.5–4.5 hours)</td><td class="p-2 border">3–6 hours</td></tr>
                                <tr><td class="p-2 border">Endpoint</td><td class="p-2 border">pH 4.5–4.6 (titratable acidity ~0.85–0.95% lactic acid)</td><td class="p-2 border">pH 4.5–4.6</td></tr>
                                <tr><td class="p-2 border">Critical Limit</td><td class="p-2 border">pH must reach ≤4.6 within 6 hours of inoculation</td><td class="p-2 border">Same</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h5 class="font-semibold text-gray-700 mt-4 mb-2">Fermentation Kinetics — Acidification Profile</h5>
                    <p class="text-sm">The acidification curve (pH vs. time) during yoghurt fermentation follows a characteristic <strong>sigmoidal pattern</strong>:</p>
                    <ul class="list-disc list-outside pl-5 space-y-2 text-sm mt-2">
                        <li><strong>Lag phase (0–1 hr):</strong> Bacteria adapt to the milk environment. Minimal acid production. pH remains ~6.4–6.6.</li>
                        <li><strong>Exponential acidification phase (1–3.5 hr):</strong> Rapid lactic acid production. <i>S. thermophilus</i> dominates. pH drops rapidly from ~6.0 to ~4.8. Rate of pH decrease: −0.3 to −0.6 pH units/hour. Maximum acidification rate (Vmax) typically occurs at pH ~5.2–5.5.</li>
                        <li><strong>Deceleration phase (3.5–5 hr):</strong> <i>S. thermophilus</i> growth slows due to acid inhibition. <i>L. bulgaricus</i> continues acid production. pH approaches 4.6. Gel point reached. Rate decreases.</li>
                        <li><strong>Stationary phase (>5 hr):</strong> Both organisms enter stationary phase. Minimal further acid production if temperature is maintained. However, if not cooled, <i>L. bulgaricus</i> continues slow acid production (post-acidification), pushing pH below 4.3.</li>
                    </ul>
                    <p class="text-sm mt-2"><strong>Kinetic Parameters (Measured by CinAc system or similar):</strong></p>
                    <ul class="list-disc list-outside pl-5 space-y-1 text-sm">
                        <li><strong>Vmax</strong> (maximum rate of acidification): −15 to −25 × 10⁻³ upH/min for fast cultures</li>
                        <li><strong>t<sub>Vmax</sub></strong> (time to reach Vmax): 100–180 min</li>
                        <li><strong>pH at Vmax</strong>: 5.2–5.6</li>
                        <li><strong>t<sub>pH4.6</sub></strong> (time to reach pH 4.6): 200–350 min for standard cultures at 42°C</li>
                    </ul>

                    <h5 class="font-semibold text-gray-700 mt-4 mb-2">Why is CCP-2 Critical?</h5>
                    <ul class="list-disc list-outside pl-5 space-y-2 text-sm">
                        <li><strong>Pathogen control:</strong> If the starter culture fails to acidify the milk rapidly (due to phage attack, antibiotic residues, or temperature deviation), the milk remains in the <strong>"danger zone" (20–45°C with pH >4.6)</strong> for an extended time, allowing potential pathogens to multiply to dangerous levels. The pH drop to ≤4.6 within 6 hours is the critical limit that ensures pathogen inhibition.</li>
                        <li><strong>If CCP fails:</strong> <i>Staphylococcus aureus</i> can grow in warm milk and produce <strong>heat-stable enterotoxin</strong> (active at pH >4.5 and temperatures 10–45°C). <i>E. coli</i> and <i>Salmonella</i> can proliferate at 42°C at neutral pH.</li>
                        <li><strong>Corrective actions:</strong> If pH does not reach 4.6 within 6 hours → product must be destroyed or reprocessed. Root cause (culture activity, phage, temperature, antibiotic residues) must be investigated.</li>
                    </ul>
                </li>

                <li><strong>Flavoured Yoghurt — Fruit Preparation Addition:</strong>
                    <p>For flavoured yoghurt, a sterilized fruit preparation is added. Key considerations:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2 text-sm">
                        <li><strong>Fruit-at-the-bottom (Set yoghurt):</strong> Pre-sterilized fruit preparation (typically heat-treated at 95–105°C, pH <4.0, water activity <0.94, Brix 40–65°) is dosed into the bottom of the cup (10–18% of cup volume) before the inoculated milk is filled on top. During incubation, the gel forms above the fruit layer.</li>
                        <li><strong>Blended/Stirred yoghurt:</strong> After incubation and gel-breaking in the tank, the cooled yoghurt (15–20°C) is blended with fruit preparation (typically 10–15% w/w) using an inline static mixer or dynamic mixer. Gentle mixing is essential to avoid excessive shear, which would thin the product irreversibly.</li>
                        <li><strong>Fruit preparation requirements:</strong> Must be commercially sterile, low pH (<4.0), high sugar concentration. Must be free from yeasts and molds (<1 CFU/g), osmophilic yeasts, and bacteriophages. Typically preserved with potassium sorbate (max 300 ppm in final product) or pasteurized immediately before use.</li>
                        <li><strong>Sweeteners:</strong> Sugar (sucrose) at 5–12% in final product. For diet/low-calorie yoghurt, high-intensity sweeteners such as aspartame, sucralose, stevia glycosides, or acesulfame-K may be used per FSSAI permitted limits.</li>
                    </ul>
                </li>

                <li><strong>Gel Breaking and Smoothing (Stirred Yoghurt Only):</strong>
                    <p>After incubation, the set gel in the tank is broken by slow-speed agitation (low RPM, typically 10–30 RPM, using anchor or gate-type agitators). The broken gel is then passed through a <strong>smoothing device</strong> (back-pressure valve, smoothing screen with 0.5–1.0 mm mesh, or rotor-stator type smoothing head) to ensure a uniform, smooth texture free of lumps.</p>
                    <p class="mt-2 text-sm"><strong>Rheological consideration:</strong> Yoghurt gel is <strong>thixotropic</strong> — its viscosity decreases under shear and partially recovers over time at rest. Excessive mechanical treatment (high shear rates, prolonged mixing, pumping through long pipelines, high-speed centrifugal pumps) irreversibly damages the gel structure, leading to a thin, watery product. <strong>Positive displacement pumps (rotary lobe or progressive cavity)</strong> are preferred for transporting yoghurt to minimize shear.</p>
                </li>

                <li><strong>Cooling and Cold Storage (CCP-3 — Biological Hazard):</strong>
                    <p>Once the desired acidity (pH 4.5–4.6, titratable acidity ~0.85–0.95% lactic acid) and firmness are achieved, the yoghurt must be rapidly cooled.</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Specification</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Critical Limit</td><td class="p-2 border">Product temperature must reach <strong>≤10°C within 2 hours</strong> of end of incubation (ideally <5°C within 1–2 hours for stirred yoghurt)</td></tr>
                                <tr><td class="p-2 border">Cooling Method (Set)</td><td class="p-2 border">Blast chiller / cold tunnel with forced air circulation at 0–2°C</td></tr>
                                <tr><td class="p-2 border">Cooling Method (Stirred)</td><td class="p-2 border">Plate heat exchanger (PHE) or tubular heat exchanger; surface scraped heat exchanger (SSHE) for viscous products</td></tr>
                                <tr><td class="p-2 border">Storage Temperature</td><td class="p-2 border">2–5°C throughout distribution chain (cold chain integrity)</td></tr>
                                <tr><td class="p-2 border">Why Critical?</td><td class="p-2 border">Prevents <strong>post-acidification</strong> by <i>L. bulgaricus</i> (which can continue producing acid at temperatures >10°C). Excessive post-acidification leads to pH <4.0, harsh acidic taste, syneresis, and altered texture. Also prevents growth of contaminating yeasts and molds.</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-3 text-sm"><strong>Post-acidification (ΔpH):</strong> Defined as the pH decrease that occurs during cold storage after cooling. Ideally ΔpH should be <0.1–0.2 units over the shelf life. Cultures with low post-acidification characteristics (mild cultures) are selected when longer shelf life is desired. Genetically, post-acidification is linked to the acid tolerance of <i>L. bulgaricus</i> — strains with lower acid tolerance produce less acid after cooling.</p>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">HACCP Summary Table for Yoghurt</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Step</th>
                            <th class="p-2 border">Hazard Type</th>
                            <th class="p-2 border">Control Type</th>
                            <th class="p-2 border">Critical Limit</th>
                            <th class="p-2 border">Monitoring</th>
                            <th class="p-2 border">Corrective Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Heat Treatment</td><td class="p-2 border">Biological (pathogens)</td><td class="p-2 border"><strong>CCP-1</strong></td><td class="p-2 border">≥90°C for ≥5 min (or equivalent)</td><td class="p-2 border">Continuous temperature recording; FDV</td><td class="p-2 border">Divert/re-process; recalibrate</td></tr>
                        <tr><td class="p-2 border">Incubation</td><td class="p-2 border">Biological (toxin production if culture fails)</td><td class="p-2 border"><strong>CCP-2</strong></td><td class="p-2 border">pH ≤4.6 within 6 hours at 42–45°C</td><td class="p-2 border">pH measurement (inline or grab sample every 1 hr); temperature recording</td><td class="p-2 border">Destroy product if pH target not met; investigate cause</td></tr>
                        <tr><td class="p-2 border">Cooling & Cold Storage</td><td class="p-2 border">Biological (post-acidification; spoilage growth)</td><td class="p-2 border"><strong>CCP-3</strong></td><td class="p-2 border">≤10°C within 2 hrs; storage ≤5°C</td><td class="p-2 border">Temperature sensors; cold chain monitoring</td><td class="p-2 border">Adjust cooling system; evaluate product safety</td></tr>
                        <tr><td class="p-2 border">Cooling after heat treatment</td><td class="p-2 border">Biological (contamination if not aseptic)</td><td class="p-2 border"><strong>oPRP</strong></td><td class="p-2 border">42–45°C (±1°C)</td><td class="p-2 border">Temperature sensors</td><td class="p-2 border">Adjust cooling; re-verify</td></tr>
                        <tr><td class="p-2 border">Culture inoculation</td><td class="p-2 border">Biological (wrong culture, phage, low activity)</td><td class="p-2 border"><strong>oPRP</strong></td><td class="p-2 border">Verified culture identity and activity; phage testing</td><td class="p-2 border">Culture supplier CoA; activity tests; phage monitoring</td><td class="p-2 border">Replace culture; use phage-resistant rotation program</td></tr>
                        <tr><td class="p-2 border">Raw material, equipment sanitation, personal hygiene, water quality, pest control</td><td class="p-2 border">Various</td><td class="p-2 border"><strong>PRP</strong></td><td class="p-2 border">Per GMP/GHP requirements</td><td class="p-2 border">Routine inspections, audits, environmental monitoring</td><td class="p-2 border">Per SOP</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Bacteriophage (Phage) — A Major Threat to Yoghurt Production</h3>
            <p>Bacteriophages are viruses that infect and lyse bacteria. Phage infection of yoghurt starter cultures, particularly <i>S. thermophilus</i>, is the <strong>single most common cause of fermentation failure</strong> in the dairy industry. Understanding phage biology is essential for yoghurt manufacturers.</p>
            <div class="bg-red-50 border border-red-200 rounded-lg p-4 mt-3">
                <ul class="list-disc list-outside pl-5 space-y-2 text-sm">
                    <li><strong>Prevalence:</strong> <i>S. thermophilus</i> phages belong mainly to the <em>cos</em>-type (Sfi21-like) and <em>pac</em>-type (Sfi11-like) groups. They are ubiquitous in dairy environments (raw milk, whey, air, surfaces).</li>
                    <li><strong>Symptoms of phage attack:</strong> Slow or incomplete acidification (pH fails to reach 4.6 within target time); weak gel; atypical flavor; inconsistent product batch-to-batch.</li>
                    <li><strong>Phage Control Strategies:</strong>
                        <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                            <li><strong>Culture rotation:</strong> Use of multiple phage-unrelated strains on a rotating schedule (e.g., 4-day rotation) to prevent phage buildup against any single strain.</li>
                            <li><strong>DVS cultures:</strong> Direct Vat Set cultures eliminate the need for in-house bulk starter propagation, greatly reducing phage exposure.</li>
                            <li><strong>Adequate heat treatment:</strong> Ensures phage destruction in incoming milk. Most <i>S. thermophilus</i> phages are inactivated at 72°C/15 s, but some are heat-resistant (surviving 80°C/5 min). The yoghurt heat treatment (90–95°C/5–10 min) provides a large safety margin.</li>
                            <li><strong>Aseptic inoculation:</strong> Culture addition in a closed system with filtered (HEPA) air to prevent airborne phage contamination.</li>
                            <li><strong>Plant hygiene:</strong> Thorough CIP (cleaning-in-place) with caustic (NaOH 1–2%, 75°C) followed by acid (HNO₃ 0.5–1%) and sanitation (peracetic acid or chlorine). Phages are highly resistant to many sanitizers; peracetic acid is more effective than chlorine.</li>
                            <li><strong>Phage monitoring:</strong> Regular testing of whey/product for phage presence using plaque assay, PCR, or impedance-based methods.</li>
                            <li><strong>Physical separation:</strong> The culture preparation area should be physically separated from the production area (separate air handling, positive pressure).</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Greek-Style / Strained Yoghurt — Detailed Science</h3>
            <p>Greek-style yoghurt (also called strained yoghurt, labneh, or concentrated yoghurt) has gained enormous market share globally. It is produced by removing a significant portion of the whey from standard yoghurt.</p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Standard Yoghurt</th>
                            <th class="p-2 border">Greek-Style Yoghurt</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Total Solids (%)</td><td class="p-2 border">12–16</td><td class="p-2 border">20–26</td></tr>
                        <tr><td class="p-2 border">Protein (%)</td><td class="p-2 border">3.5–5.5</td><td class="p-2 border">8–12</td></tr>
                        <tr><td class="p-2 border">Fat (%)</td><td class="p-2 border">0.5–3.5</td><td class="p-2 border">0–10 (varies)</td></tr>
                        <tr><td class="p-2 border">Lactose (%)</td><td class="p-2 border">3.5–4.5</td><td class="p-2 border">2.0–3.5 (reduced by whey removal)</td></tr>
                        <tr><td class="p-2 border">Calcium (mg/100g)</td><td class="p-2 border">120–150</td><td class="p-2 border">100–130 (some Ca lost with acid whey)</td></tr>
                        <tr><td class="p-2 border">Yield</td><td class="p-2 border">—</td><td class="p-2 border">~3 kg milk → 1 kg Greek yoghurt (2 kg acid whey by-product)</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3"><strong>Production Methods:</strong></p>
            <ul class="list-disc list-outside pl-5 space-y-2 text-sm">
                <li><strong>Traditional straining:</strong> Fermented yoghurt is poured into muslin/cheesecloth bags and hung to drain whey by gravity for 12–24 hours at <5°C. Labor-intensive; used for artisanal production.</li>
                <li><strong>Centrifugal separation:</strong> Stirred yoghurt is fed into a quarg separator (Nozzle type or hermetic centrifugal separator) that separates acid whey from concentrated yoghurt. Continuous process, high throughput. Temperature maintained at <15°C.</li>
                <li><strong>Ultrafiltration (UF):</strong> Yoghurt is passed through UF membranes (10–50 kDa MWCO) under low pressure (1–3 bar) to remove water, lactose, and minerals while retaining protein and fat. Tubular or spiral-wound membranes. Can also be applied to milk <em>before</em> fermentation (fortification approach).</li>
            </ul>
            <p class="mt-3"><strong>Acid Whey Challenge:</strong> Greek yoghurt production generates large volumes of <strong>acid whey</strong> (pH 4.2–4.6), which is a significant environmental challenge. Acid whey has high BOD (35,000–50,000 mg/L), high lactose content (4–5%), and high mineral content. It cannot be disposed into municipal wastewater systems. Solutions include: concentration and spray-drying (expensive), biogas production via anaerobic digestion, lactose recovery, use as animal feed ingredient, or fermentation to produce lactic acid or ethanol.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Quality Parameters and Shelf Life</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Ideal Range / Specification</th>
                            <th class="p-2 border">Test Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">pH</td><td class="p-2 border">4.0–4.6 (typical: 4.2–4.4)</td><td class="p-2 border">pH meter (calibrated)</td></tr>
                        <tr><td class="p-2 border">Titratable Acidity</td><td class="p-2 border">0.8–1.2% lactic acid (FSSAI min: 0.6%)</td><td class="p-2 border">Titration with 0.1N NaOH (phenolphthalein indicator)</td></tr>
                        <tr><td class="p-2 border">Viable Starter Count</td><td class="p-2 border">≥10⁷ CFU/g at consumption</td><td class="p-2 border">Pour plate: MRS agar (37°C/72hr anaerobic) for <i>L. bulgaricus</i>; M17 agar (37°C/48hr aerobic) for <i>S. thermophilus</i></td></tr>
                        <tr><td class="p-2 border">Coliform Count</td><td class="p-2 border"><10 CFU/g (FSSAI limit)</td><td class="p-2 border">VRBA agar, 37°C/24–48 hr</td></tr>
                        <tr><td class="p-2 border">Yeast and Mold Count</td><td class="p-2 border"><100 CFU/g (at production); <10⁴ during shelf life</td><td class="p-2 border">DRBC or OGYA agar, 25°C/5 days</td></tr>
                        <tr><td class="p-2 border"><i>E. coli</i></td><td class="p-2 border">Absent in 1 g</td><td class="p-2 border">EMB/TBX agar</td></tr>
                        <tr><td class="p-2 border"><i>Salmonella</i></td><td class="p-2 border">Absent in 25 g</td><td class="p-2 border">ISO 6579 / BAM method</td></tr>
                        <tr><td class="p-2 border"><i>S. aureus</i></td><td class="p-2 border"><100 CFU/g</td><td class="p-2 border">Baird-Parker agar</td></tr>
                        <tr><td class="p-2 border"><i>L. monocytogenes</i></td><td class="p-2 border">Absent in 25 g</td><td class="p-2 border">ISO 11290</td></tr>
                        <tr><td class="p-2 border">Viscosity (Stirred)</td><td class="p-2 border">2,000–10,000 mPa·s (Brookfield, spindle 4, 20 RPM, 10°C)</td><td class="p-2 border">Rotational viscometer</td></tr>
                        <tr><td class="p-2 border">Gel Firmness (Set)</td><td class="p-2 border">30–80 g force (penetration test, 10mm probe, 1 mm/s)</td><td class="p-2 border">Texture Analyzer (TA.XT, Instron)</td></tr>
                        <tr><td class="p-2 border">Syneresis</td><td class="p-2 border"><5% spontaneous whey separation (centrifugal method: <30%)</td><td class="p-2 border">Drainage/centrifugation method</td></tr>
                        <tr><td class="p-2 border">Color</td><td class="p-2 border">White to creamy-white (L* 85–95, a* −2 to 0, b* 8–14)</td><td class="p-2 border">Colorimeter (CIE L*a*b*)</td></tr>
                        <tr><td class="p-2 border">Acetaldehyde</td><td class="p-2 border">10–40 ppm</td><td class="p-2 border">GC-FID or SPME-GC-MS</td></tr>
                        <tr><td class="p-2 border">Shelf Life</td><td class="p-2 border">21–45 days at 2–5°C (plain yoghurt; depends on hygiene level and packaging)</td><td class="p-2 border">Shelf life studies: monitor pH, microbiology, sensory at intervals</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Common Defects in Yoghurt and Their Causes</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Defect</th>
                            <th class="p-2 border">Description</th>
                            <th class="p-2 border">Causes</th>
                            <th class="p-2 border">Remedial Measures</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Syneresis (Wheying-off)</strong></td>
                            <td class="p-2 border">Visible clear/yellowish liquid (whey) on surface or in pockets within the gel</td>
                            <td class="p-2 border">Insufficient heat treatment (low whey protein denaturation); low total solids/protein; too high incubation temperature (>46°C — coarse gel); over-acidification (pH<4.0); mechanical disturbance of set gel during transport; no stabilizer</td>
                            <td class="p-2 border">Increase heat treatment to 90–95°C/5–10 min; fortify TS to >14%; use EPS-producing cultures; add stabilizers; avoid vibration during set yoghurt incubation</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Weak/Thin Body</strong></td>
                            <td class="p-2 border">Gel lacks firmness; watery consistency</td>
                            <td class="p-2 border">Low total solids (<12%); inadequate heat treatment; low culture activity; incubation temperature too high; contamination; insufficient incubation time</td>
                            <td class="p-2 border">Fortify TS; increase heat treatment; verify culture activity; optimize incubation conditions</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Excessive Acidity (Sour/Harsh taste)</strong></td>
                            <td class="p-2 border">pH <4.0; sharp sour taste</td>
                            <td class="p-2 border">Over-incubation (too long or too high temperature); slow/insufficient cooling; high <i>L. bulgaricus</i> ratio; post-acidification during storage; storage temperature >5°C</td>
                            <td class="p-2 border">Cool promptly at pH 4.5–4.6; use mild (low post-acidification) cultures; strict cold chain (<5°C)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Flat/Insipid Flavor</strong></td>
                            <td class="p-2 border">Lacks characteristic yoghurt aroma</td>
                            <td class="p-2 border">Low acetaldehyde production; excessive <i>S. thermophilus</i> dominance; insufficient incubation; use of flavor-negative strains</td>
                            <td class="p-2 border">Adjust culture ratio (increase <i>L. bulgaricus</i>); select high-acetaldehyde-producing strains; optimize incubation</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Ropy/Slimy Texture</strong></td>
                            <td class="p-2 border">Excessively stringy, stretchy consistency</td>
                            <td class="p-2 border">Excessive EPS production by ropy strains</td>
                            <td class="p-2 border">Select strains with moderate/capsular EPS production; adjust culture combination</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Grainy/Lumpy Texture</strong></td>
                            <td class="p-2 border">Gritty mouthfeel; visible protein particles in stirred yoghurt</td>
                            <td class="p-2 border">Excessive heat treatment causing whey protein aggregation into large particles; poor smoothing after gel breaking; non-uniform culture distribution; localized over-acidification</td>
                            <td class="p-2 border">Optimize heat treatment; ensure proper smoothing; homogeneous mixing during inoculation</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Yeasty/Fruity Off-Flavor</strong></td>
                            <td class="p-2 border">Fermented fruit, bread-like, or alcoholic flavor</td>
                            <td class="p-2 border">Yeast contamination (common: <i>Candida</i>, <i>Kluyveromyces</i>, <i>Rhodotorula</i>); contaminated fruit preparation; poor packaging hygiene</td>
                            <td class="p-2 border">Improve sanitation; test fruit prep for yeast/mold; improve packaging area hygiene</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Mold Growth</strong></td>
                            <td class="p-2 border">Visible colonies (white, green, black) on surface</td>
                            <td class="p-2 border">Airborne mold spores during filling; contaminated packaging material; poor cold room hygiene</td>
                            <td class="p-2 border">HEPA filtration in filling room; UV treatment of packaging; cold room sanitation; consider potassium sorbate (within legal limits)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Blown/Swollen Packs</strong></td>
                            <td class="p-2 border">Pack distended due to gas production</td>
                            <td class="p-2 border">Coliform contamination (produce CO₂ + H₂); yeast fermentation (produce CO₂ + ethanol)</td>
                            <td class="p-2 border">Improve heat treatment effectiveness; post-contamination control; verify packaging seal integrity</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Bitter Taste</strong></td>
                            <td class="p-2 border">Unpleasant bitter aftertaste</td>
                            <td class="p-2 border">Excessive proteolysis by <i>L. bulgaricus</i> (formation of hydrophobic bitter peptides from β-casein); psychrotrophic contamination of raw milk (heat-stable proteases); poor quality milk powder</td>
                            <td class="p-2 border">Control <i>L. bulgaricus</i> ratio; improve raw milk quality; use fresh SMP</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Nutritional Profile and Health Benefits of Yoghurt</h3>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Typical Nutritional Composition (per 100g)</h4>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Nutrient</th>
                            <th class="p-2 border">Plain Whole Milk Yoghurt</th>
                            <th class="p-2 border">Low-Fat Yoghurt</th>
                            <th class="p-2 border">Greek Yoghurt (0% fat)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Energy (kcal)</td><td class="p-2 border">61–70</td><td class="p-2 border">50–56</td><td class="p-2 border">54–59</td></tr>
                        <tr><td class="p-2 border">Protein (g)</td><td class="p-2 border">3.5–5.0</td><td class="p-2 border">4.0–5.5</td><td class="p-2 border">8.0–10.0</td></tr>
                        <tr><td class="p-2 border">Fat (g)</td><td class="p-2 border">3.0–3.5</td><td class="p-2 border">1.0–1.8</td><td class="p-2 border">0–0.7</td></tr>
                        <tr><td class="p-2 border">Carbohydrate (g)</td><td class="p-2 border">4.0–5.0</td><td class="p-2 border">5.0–7.0</td><td class="p-2 border">3.5–4.5</td></tr>
                        <tr><td class="p-2 border">Lactose (g)</td><td class="p-2 border">3.5–4.5</td><td class="p-2 border">3.5–5.0</td><td class="p-2 border">2.0–3.5</td></tr>
                        <tr><td class="p-2 border">Calcium (mg)</td><td class="p-2 border">120–150</td><td class="p-2 border">140–170</td><td class="p-2 border">100–130</td></tr>
                        <tr><td class="p-2 border">Phosphorus (mg)</td><td class="p-2 border">90–110</td><td class="p-2 border">100–130</td><td class="p-2 border">130–160</td></tr>
                        <tr><td class="p-2 border">Potassium (mg)</td><td class="p-2 border">155–180</td><td class="p-2 border">180–220</td><td class="p-2 border">140–160</td></tr>
                        <tr><td class="p-2 border">Riboflavin/B₂ (mg)</td><td class="p-2 border">0.14–0.20</td><td class="p-2 border">0.17–0.22</td><td class="p-2 border">0.15–0.20</td></tr>
                        <tr><td class="p-2 border">Vitamin B₁₂ (µg)</td><td class="p-2 border">0.4–0.6</td><td class="p-2 border">0.5–0.7</td><td class="p-2 border">0.6–0.8</td></tr>
                        <tr><td class="p-2 border">Folic Acid/B₉ (µg)</td><td class="p-2 border">8–18 (increased by <i>S. thermophilus</i>)</td><td class="p-2 border">10–20</td><td class="p-2 border">7–12</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2 text-sm"><strong>Note:</strong> Fermentation increases folic acid (vitamin B₉) content by 2–10× over unfermented milk, primarily due to <i>S. thermophilus</i> biosynthesis. Vitamin B₁₂ content may decrease slightly due to utilization by <i>L. bulgaricus</i>.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Established and Emerging Health Benefits</h4>
            <div class="space-y-4 mt-2">
                <div class="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                    <h5 class="font-bold text-green-800">1. Improved Lactose Digestion (Strong Evidence — EFSA approved claim)</h5>
                    <p class="text-sm mt-1">Yoghurt is significantly better tolerated than milk by <strong>lactose-intolerant individuals</strong>. This is because: (a) ~20–30% of lactose is already hydrolyzed during fermentation, (b) the live <i>S. thermophilus</i> and <i>L. bulgaricus</i> cells contain intracellular <strong>β-galactosidase</strong> which is released in the small intestine when cells are lysed by bile salts, continuing lactose digestion in vivo, and (c) the semi-solid viscous texture of yoghurt slows gastric emptying, allowing more time for lactose digestion. EFSA Scientific Opinion (2010) approved the health claim: <em>"Live yoghurt cultures in yoghurt improve digestion of lactose in yoghurt in individuals with lactose maldigestion."</em></p>
                </div>
                <div class="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                    <h5 class="font-bold text-green-800">2. Bone Health and Calcium Bioavailability</h5>
                    <p class="text-sm mt-1">Yoghurt is an excellent source of <strong>bioavailable calcium</strong> (~120–170 mg/100g). The acidic pH of yoghurt keeps calcium in the soluble, ionized form (Ca²⁺), enhancing intestinal absorption compared to milk. The presence of casein phosphopeptides (CPPs, released during fermentation) further enhances calcium absorption by preventing precipitation of calcium phosphate in the intestinal lumen. Several epidemiological studies (meta-analyses) associate regular yoghurt consumption with improved bone mineral density (BMD) and reduced fracture risk, particularly in postmenopausal women and elderly populations.</p>
                </div>
                <div class="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                    <h5 class="font-bold text-green-800">3. Gut Health and Microbiome Modulation</h5>
                    <p class="text-sm mt-1">While <i>S. thermophilus</i> and <i>L. bulgaricus</i> are not classical probiotics (limited GI survival), they do exert <strong>transient beneficial effects</strong>: (a) They produce bacteriocin-like inhibitory substances (BLIS) against pathogens, (b) they stimulate local and systemic immune responses (increased IgA production, enhanced NK cell activity, modulation of cytokine profiles — increased IL-10, decreased TNF-α), (c) fermentation products (organic acids, peptides, EPS) may serve as <strong>postbiotics</strong> that positively modulate the resident gut microbiota. When combined with probiotic strains (<i>L. rhamnosus</i> GG, <i>B. lactis</i> BB-12), yoghurt becomes a more potent functional food.</p>
                </div>
                <div class="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                    <h5 class="font-bold text-green-800">4. Cardiovascular Health</h5>
                    <p class="text-sm mt-1">Meta-analyses of prospective cohort studies suggest that yoghurt consumption (1–2 servings/day) is associated with a <strong>reduced risk of type 2 diabetes (14–28% reduction)</strong> and a modest reduction in blood pressure. Proposed mechanisms include: (a) Generation of <strong>bioactive peptides (ACE-inhibitory peptides)</strong> such as VPP (Val-Pro-Pro) and IPP (Ile-Pro-Pro) from casein hydrolysis by <i>L. bulgaricus</i> proteinases — these peptides inhibit angiotensin-converting enzyme (ACE), lowering blood pressure; (b) Improved insulin sensitivity via gut microbiome modulation; (c) Calcium-mediated effects on lipid metabolism (increased fecal fat excretion by forming insoluble calcium soaps). The evidence, while promising, is mostly observational.</p>
                </div>
                <div class="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                    <h5 class="font-bold text-green-800">5. Weight Management</h5>
                    <p class="text-sm mt-1">High-protein yoghurts (especially Greek yoghurt) promote <strong>satiety</strong> through multiple mechanisms: high protein content stimulates gut peptide release (GLP-1, PYY, cholecystokinin), slowing gastric emptying. The thick, viscous texture contributes to orosensory satiation. Epidemiological data consistently associates yoghurt consumption with lower BMI, smaller waist circumference, and reduced risk of obesity, though causality is difficult to establish from observational studies.</p>
                </div>
                <div class="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                    <h5 class="font-bold text-green-800">6. Bioactive Peptide Generation</h5>
                    <p class="text-sm mt-1">During fermentation, the proteolytic activity of <i>L. bulgaricus</i> (via PrtB proteinase) generates numerous <strong>bioactive peptides</strong> from caseins. Identified bioactivities include: <strong>ACE-inhibitory</strong> (antihypertensive), <strong>antioxidant</strong> (radical scavenging, metal chelation), <strong>antimicrobial</strong>, <strong>immunomodulatory</strong>, <strong>opioid agonist</strong> (casomorphins from β-casein — may affect GI motility), and <strong>mineral-binding</strong> (caseinophosphopeptides). The bioavailability and physiological significance of these peptides in vivo remains an active area of research (many are further degraded by GI proteases before absorption).</p>
                </div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Advanced and Emerging Technologies in Yoghurt Processing</h3>
            <ul class="list-disc list-outside pl-5 space-y-3 text-sm mt-2">
                <li><strong>High-Pressure Processing (HPP):</strong> Application of 400–600 MPa for 1–10 minutes at <25°C to extend shelf life (inactivates yeasts, molds, and vegetative bacteria by 3–6 log) without heat damage. Preserves live yoghurt cultures (LAB are more barotolerant than spoilage organisms). Can modify whey protein structure (pressure-induced denaturation of β-Lg at >200 MPa), potentially replacing thermal pretreatment.</li>
                <li><strong>Ultrasound-Assisted Fermentation:</strong> Low-frequency ultrasound (20–40 kHz, 2–10 W/cm²) applied during or before fermentation can reduce fermentation time by 15–30% by enhancing nutrient diffusion, increasing cell membrane permeability, and stimulating metabolic activity. It also improves texture by creating a finer gel microstructure.</li>
                <li><strong>Microencapsulation of Probiotics:</strong> Probiotic strains added to yoghurt can be encapsulated in alginate, chitosan, whey protein, or gellan gum microspheres (100–1000 µm) to protect them from acid damage during storage and GI transit, increasing their survival by 1–3 log at the point of consumption.</li>
                <li><strong>Membrane Technology:</strong> Microfiltration (MF, 0.1–1.4 µm) of milk before yoghurt production can reduce initial microbial load by 3–4 log, acting as a "cold pasteurization." Nanofiltration (NF) can selectively remove lactose while retaining minerals, creating a reduced-lactose yoghurt base.</li>
                <li><strong>Genomics and Strain Selection:</strong> Whole-genome sequencing (WGS) and comparative genomics are used to select strains with desirable traits: high EPS production, specific flavor profiles (high acetaldehyde/low diacetyl or vice versa), phage resistance (CRISPR-Cas systems), low post-acidification, and probiotic characteristics. Metagenomics of yoghurt microbiomes reveals strain-level diversity even in apparently simple two-species cultures.</li>
                <li><strong>3D-Printed Yoghurt:</strong> Emerging food printing technology allows deposition of yoghurt in complex shapes and structures, enabling personalized nutrition and novel product formats. Yoghurt's rheological properties (yield stress, thixotropy) make it suitable for extrusion-based 3D printing.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Summary — Key Differentiating Science of Yoghurt</h3>
            <div class="bg-gray-100 border border-gray-300 rounded-lg p-4 mt-3">
                <ul class="list-disc list-outside pl-5 space-y-2 text-sm">
                    <li>Yoghurt is defined by its <strong>specific starter culture</strong>: <i>S. thermophilus</i> + <i>L. bulgaricus</i> in proto-cooperative symbiosis.</li>
                    <li>The <strong>high heat treatment</strong> (90–95°C/5–10 min) denatures whey proteins, enabling their interaction with casein micelles via <strong>thiol-disulfide exchange</strong>, creating a stronger gel with less syneresis.</li>
                    <li><strong>Acid-induced gelation</strong> at pH 4.6 (casein isoelectric point) creates the characteristic semi-solid texture through casein micelle aggregation.</li>
                    <li>Flavor is determined by the balance of <strong>acetaldehyde</strong> (yoghurt aroma), <strong>diacetyl</strong> (buttery), and <strong>lactic acid</strong> (sour).</li>
                    <li><strong>EPS</strong> produced by starter cultures provide natural thickening and water-binding.</li>
                    <li><strong>Three CCPs</strong> in HACCP: heat treatment (pathogen kill), incubation (timely acidification), and cooling (preventing post-acidification and contamination growth).</li>
                    <li>Yoghurt offers <strong>proven health benefits</strong>: improved lactose digestion (EFSA-approved), enhanced calcium bioavailability, generation of bioactive peptides, and potential benefits for cardiovascular and metabolic health.</li>
                </ul>
            </div>
        `
    },
    hi: {
        title: "Yoghurt Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Yoghurt ka Introduction</h3>
            <p>Yoghurt ek globally popular fermented milk product hai jo milk ke bacterial fermentation se produce hota hai. "Yoghurt" word Turkish word <em>"yoğurmak"</em> se aaya hai, jiska matlab hota hai gaadha karna ya jamana. Historical evidence ke according yoghurt ka origin Mesopotamia mein lagbhag 5000 BCE ke aas-paas hua tha, jahan garam climate aur milk mein naturally present thermophilic bacteria ki wajah se spontaneous fermentation ho jaata tha.</p>
            <p class="mt-2">Yoghurt ko Dahi (Indian curd) se jo cheez alag karti hai wo hai ek <strong>defined, specific pair of thermophilic bacteria</strong> ka use fermentation ke liye: <strong><i>Lactobacillus delbrueckii</i> subsp. <i>bulgaricus</i></strong> aur <strong><i>Streptococcus thermophilus</i></strong>. <strong>Codex Alimentarius (CODEX STAN 243-2003)</strong> ke according, kisi bhi product ko tabhi "yoghurt" kaha ja sakta hai jab ye dono specific organisms use kiye gaye hon aur final product mein alive hon minimum <strong>10<sup>7</sup> CFU/g</strong> ke level par consumption ke time. Ye dono bacteria ek classical proto-cooperative symbiosis mein kaam karte hain aur yoghurt ki characteristic thick, viscous texture aur tangy, aromatic flavor produce karte hain.</p>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded-r">
                <h4 class="font-bold text-blue-800">Yoghurt vs. Dahi: Key Scientific Difference</h4>
                <p class="text-sm mt-1"><strong>Dahi</strong> ek mixed, undefined mesophilic aur thermophilic culture se banta hai jismein <i>Lactobacillus</i>, <i>Lactococcus</i>, <i>Leuconostoc</i>, aur <i>Streptococcus</i> ki various species ho sakti hain. Dahi ki culture traditionally previous batch se back-slop karke li jaati hai. <strong>Yoghurt</strong> mein, iske opposite, exclusively sirf <i>L. bulgaricus</i> aur <i>S. thermophilus</i> use hote hain jaise ki international (Codex) aur national (FSSAI) standards mein define kiya gaya hai. Ye defined culture ek standardized, reproducible fermentation ensure karti hai jismein predictable organoleptic attributes hote hain.</p>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Yoghurt ka Classification</h3>
            <p>Yoghurt ko kai bases par classify kiya ja sakta hai:</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">A. Fat Content ke Basis par</h4>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Type</th>
                            <th class="p-2 border">Fat % (m/m)</th>
                            <th class="p-2 border">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Full-fat / Whole Milk Yoghurt</td><td class="p-2 border">≥ 3.0</td><td class="p-2 border">Rich, creamy mouthfeel</td></tr>
                        <tr><td class="p-2 border">Partly Skimmed Yoghurt</td><td class="p-2 border">> 0.5 aur < 3.0</td><td class="p-2 border">Reduced calorie</td></tr>
                        <tr><td class="p-2 border">Skimmed Yoghurt</td><td class="p-2 border">≤ 0.5</td><td class="p-2 border">Sabse kam calorie; texture ke liye stabilizers ki zaroorat pad sakti hai</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">B. Physical Structure / Production Method ke Basis par</h4>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Type</th>
                            <th class="p-2 border">Production Method</th>
                            <th class="p-2 border">Texture Characteristics</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border"><strong>Set Yoghurt</strong></td><td class="p-2 border">Inoculated milk ko retail containers mein bhara jaata hai, phir unhi cups mein incubate kiya jaata hai. Gel undisturbed cup ke andar banta hai.</td><td class="p-2 border">Firm, custard jaisa, continuous gel; spoon se khaya jaata hai. Higher gel firmness (typically 30–80 g force by texture analyzer).</td></tr>
                        <tr><td class="p-2 border"><strong>Stirred Yoghurt</strong></td><td class="p-2 border">Fermentation bade vats mein hoti hai (5,000–20,000 L). Incubation ke baad, gel ko gentle stirring/agitation se toda jaata hai, cool kiya jaata hai, phir package kiya jaata hai.</td><td class="p-2 border">Smooth, viscous, semi-fluid; gel toot chuki hoti hai. Viscosity typically 2,000–10,000 mPa·s. Thixotropic behavior dikha sakti hai.</td></tr>
                        <tr><td class="p-2 border"><strong>Drinking Yoghurt</strong></td><td class="p-2 border">Stirred yoghurt jaisa hi hai lekin gel ko zyada intensely toda jaata hai (homogenization ya vigorous agitation se) taaki pourable, liquid consistency mile.</td><td class="p-2 border">Pourable, low viscosity (50–500 mPa·s). Aksar flavored hota hai.</td></tr>
                        <tr><td class="p-2 border"><strong>Strained / Greek-style Yoghurt</strong></td><td class="p-2 border">Stirred yoghurt ko mechanically concentrate kiya jaata hai whey nikaal kar — cloth bags, centrifugal separators, ya ultrafiltration (UF) membranes se. Ya phir milk ko fermentation se pehle UF se pre-concentrate kar lete hain.</td><td class="p-2 border">Bahut thick, creamy, high protein (8–12%), low lactose. Total solids 20–25%.</td></tr>
                        <tr><td class="p-2 border"><strong>Frozen Yoghurt</strong></td><td class="p-2 border">Yoghurt mix ko continuous freezer mein freeze kiya jaata hai air incorporation ke saath (overrun 30–100%).</td><td class="p-2 border">Ice-cream jaisi texture. Freezing ke dauran viable culture count kam ho sakta hai (log 1–2 reduction).</td></tr>
                        <tr><td class="p-2 border"><strong>Concentrated / Labneh</strong></td><td class="p-2 border">22–26% total solids tak strain kiya jaata hai. Middle Eastern cuisine mein traditional hai.</td><td class="p-2 border">Spreadable, cheese jaisi consistency. Titratable acidity 1.5–2.5% lactic acid.</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">C. Flavor Additions ke Basis par</h4>
            <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Plain / Natural Yoghurt:</strong> Koi bhi added flavors, sweeteners, ya fruit nahi hota.</li>
                <li><strong>Flavored Yoghurt:</strong> Isme sugar/sweeteners aur natural ya artificial flavors add hote hain (jaise vanilla, strawberry).</li>
                <li><strong>Fruit Yoghurt:</strong> Isme fruit preparations hoti hain (typically 5–15% w/w). Fruit prep hamesha separately pre-sterilized/pasteurized ki jaati hai taaki contamination aur phage introduction na ho.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">D. Post-Fermentation Treatment ke Basis par</h4>
            <ul class="list-disc list-outside pl-5 space-y-1">
                <li><strong>Standard Yoghurt:</strong> Consumption ke time live cultures hoti hain.</li>
                <li><strong>Long-life / Heat-treated Yoghurt:</strong> Fermentation ke baad heat treatment diya jaata hai (jaise 65°C/30 min ya UHT) shelf life badhane ke liye. Viable cultures mar jaati hain. Kuch countries mein allowed hai lekin Codex ke under agar live culture criterion meet nahi hota toh ise "yoghurt" nahi kah sakte.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Regulatory Standards</h3>
            
            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">FSSAI Standards (India)</h4>
            <p>Food Safety and Standards Authority of India (FSSAI), <strong>Food Safety and Standards (Food Products Standards and Food Additives) Regulations</strong> ke under, different types ke yoghurt ke liye compositional standards provide karta hai.</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Yoghurt ka Type</th>
                            <th class="p-2 border">Minimum Milk Fat % (m/m)</th>
                            <th class="p-2 border">Minimum Milk SNF % (m/m)</th>
                            <th class="p-2 border">Titratable Acidity (% LA)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Yoghurt (whole milk)</strong></td>
                            <td class="p-2 border">≥ 3.0 aur ≤ 15.0</td>
                            <td class="p-2 border">8.5</td>
                            <td class="p-2 border">≥ 0.6</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Partly Skimmed Yoghurt</strong></td>
                            <td class="p-2 border">> 0.5 aur < 3.0</td>
                            <td class="p-2 border">8.5</td>
                            <td class="p-2 border">≥ 0.6</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Skimmed Yoghurt</strong></td>
                            <td class="p-2 border">≤ 0.5</td>
                            <td class="p-2 border">8.5</td>
                            <td class="p-2 border">≥ 0.6</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2 text-sm"><strong>FSSAI ki Additional Requirements:</strong> Product mein minimum <strong>10<sup>7</sup> CFU/g</strong> viable yoghurt culture organisms (dono <i>L. bulgaricus</i> aur <i>S. thermophilus</i> ka sum) hona chahiye. Permitted additives mein stabilizers (gelatin, pectin, starch — max 1%), sweeteners, colors, aur flavors hain jaise Schedule mein define kiya gaya hai.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Codex Alimentarius Standard (CODEX STAN 243-2003)</h4>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Requirement</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Milk Protein</td><td class="p-2 border">≥ 2.7% (m/m)</td></tr>
                        <tr><td class="p-2 border">Titratable Acidity</td><td class="p-2 border">≥ 0.6% (lactic acid ke roop mein express kiya jaata hai)</td></tr>
                        <tr><td class="p-2 border">Starter Culture</td><td class="p-2 border"><i>S. thermophilus</i> aur <i>L. bulgaricus</i> ki symbiotic cultures</td></tr>
                        <tr><td class="p-2 border">Viable Culture Count</td><td class="p-2 border">≥ 10<sup>7</sup> CFU/g (dono organisms ka total)</td></tr>
                        <tr><td class="p-2 border">Labelling</td><td class="p-2 border">Agar fermentation ke baad heat treatment diya gaya ho, toh product ko "yoghurt" nahi kaha jaayega jab tak national legislation allow na kare</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Yoghurt Starter Cultures ki Microbiology</h3>
            
            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Do Essential Organisms</h4>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Characteristic</th>
                            <th class="p-2 border"><i>Streptococcus thermophilus</i></th>
                            <th class="p-2 border"><i>Lactobacillus delbrueckii</i> subsp. <i>bulgaricus</i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Taxonomy</td><td class="p-2 border">Phylum Firmicutes, Family Streptococcaceae</td><td class="p-2 border">Phylum Firmicutes, Family Lactobacillaceae</td></tr>
                        <tr><td class="p-2 border">Cell Morphology</td><td class="p-2 border">Gram-positive cocci, pairs ya chains mein</td><td class="p-2 border">Gram-positive rods, aksar chains mein</td></tr>
                        <tr><td class="p-2 border">Optimum Growth Temp.</td><td class="p-2 border">40–45°C (range: 20–50°C)</td><td class="p-2 border">42–47°C (range: 22–52°C)</td></tr>
                        <tr><td class="p-2 border">Optimum pH</td><td class="p-2 border">6.5 (growth ~pH 4.2–4.5 par ruk jaata hai)</td><td class="p-2 border">5.5–6.0 (pH 3.5–4.0 par bhi grow kar sakta hai; zyada acid-tolerant hai)</td></tr>
                        <tr><td class="p-2 border">Fermentation Type</td><td class="p-2 border">Homofermentative</td><td class="p-2 border">Obligately homofermentative</td></tr>
                        <tr><td class="p-2 border">Fermentation Pathway</td><td class="p-2 border">Embden-Meyerhof-Parnas (EMP) pathway; lactose ke glucose moiety ko L(+)-lactic acid mein ferment karta hai</td><td class="p-2 border">EMP pathway; glucose moiety ko D(−)-lactic acid mein ferment karta hai (kuch L(+) form bhi)</td></tr>
                        <tr><td class="p-2 border">Lactose Utilization</td><td class="p-2 border">Lactose permease (LacS) aur β-galactosidase hai; sirf glucose moiety metabolize karta hai, galactose ko medium mein bahar nikal deta hai</td><td class="p-2 border">Lactose permease aur β-galactosidase hai; glucose aur galactose dono moieties metabolize karta hai</td></tr>
                        <tr><td class="p-2 border">Proteolytic Activity</td><td class="p-2 border">Weak; limited extracellular protease activity. Free amino acids aur peptides par depend karta hai.</td><td class="p-2 border"><strong>Strong</strong>; cell-envelope proteinase (PrtB) hai jo caseins ko peptides aur free amino acids mein degrade karta hai</td></tr>
                        <tr><td class="p-2 border">Key Flavor Contribution</td><td class="p-2 border">Formic acid, CO₂, diacetyl (buttery note), aur kuch acetaldehyde produce karta hai</td><td class="p-2 border"><strong>Acetaldehyde</strong> ka primary producer (characteristic yoghurt aroma), acetoin bhi produce karta hai</td></tr>
                        <tr><td class="p-2 border">EPS Production</td><td class="p-2 border">Kai strains exopolysaccharides (EPS) produce karti hain; viscosity aur ropiness mein major contributor</td><td class="p-2 border">Kuch strains EPS produce karti hain; texture mein contribute karta hai</td></tr>
                        <tr><td class="p-2 border">Genome Size</td><td class="p-2 border">~1.8 Mb (milk mein highly adapted; reductive evolution)</td><td class="p-2 border">~1.8–2.3 Mb</td></tr>
                        <tr><td class="p-2 border">GRAS/QPS Status</td><td class="p-2 border">GRAS (FDA); QPS (EFSA)</td><td class="p-2 border">GRAS (FDA); QPS (EFSA)</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Proto-Cooperative Symbiosis (Mutualism)</h4>
            <p><i>S. thermophilus</i> aur <i>L. bulgaricus</i> ke beech ka interaction food science mein sabse extensively studied microbial symbioses mein se ek hai. Ise <strong>proto-cooperation</strong> kehte hain — dono organisms ek doosre ki metabolic activities se benefit karte hain, lekin koi bhi dusre par survival ke liye obligately dependent nahi hai.</p>
            
            <div class="bg-green-50 border border-green-200 rounded-lg p-4 mt-3">
                <h5 class="font-bold text-green-800 mb-2">Symbiosis ka Mechanism — Detailed Biochemistry</h5>
                <ol class="list-decimal list-outside pl-5 space-y-3 text-sm">
                    <li><strong>Phase 1 — <i>S. thermophilus</i> pehle growth shuru karta hai:</strong>
                        <p><i>S. thermophilus</i> sabse pehle grow karta hai kyunki ye acid ke prati zyada sensitive hai aur fresh milk ke near-neutral pH (~6.5) mein thrive karta hai. Apne initial exponential growth phase mein ye:</p>
                        <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                            <li>Milk mein dissolved oxygen ko NADH oxidase activity ke through consume kar leta hai, jisse ek zyada <strong>anaerobic/microaerophilic environment</strong> ban jaata hai jo strictly anaerobic <i>L. bulgaricus</i> ke liye favorable hota hai.</li>
                            <li><strong>Formic acid (formate)</strong> produce karta hai enzyme pyruvate formate-lyase (PFL) ke through. Formate <i>L. bulgaricus</i> ke liye ek critical growth stimulant ka kaam karta hai, ye purine biosynthesis ke liye one-carbon (C1) donor ki tarah kaam karta hai (folic acid aur nucleotides banana).</li>
                            <li><strong>CO₂</strong> generate karta hai, jo <i>L. bulgaricus</i> ki growth ko bhi stimulate karta hai kyunki ye carboxylation reactions ke liye carbon source ka kaam karta hai.</li>
                            <li><strong>L(+)-lactic acid</strong> produce karta hai, dheere-dheere pH ko 5.0–5.5 ki taraf lata hai — jo <i>L. bulgaricus</i> ki proteinase activity ke liye optimum range hai.</li>
                        </ul>
                    </li>
                    <li><strong>Phase 2 — <i>L. bulgaricus</i> accelerate hota hai aur <i>S. thermophilus</i> ko stimulate karta hai:</strong>
                        <p>Jaise-jaise pH decrease hota hai aur environment zyada anaerobic hota jaata hai:</p>
                        <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                            <li><i>L. bulgaricus</i> apna <strong>cell-envelope proteinase (CEP, specifically PrtB)</strong> activate karta hai, ye ek serine proteinase hai jo cell wall se anchored hoti hai. PrtB ki preference <strong>β-casein aur αs1-casein</strong> ke liye hoti hai, inhe oligopeptides (4–30 amino acid residues) mein cleave karta hai.</li>
                            <li>Ye oligopeptides phir intracellular peptidases (PepN, PepX, PepO, PepC, PepT, PepQ) dwara aur degrade hoke <strong>free amino acids</strong> ban jaate hain, khaas taur par <strong>valine, histidine, glycine, leucine, aur isoleucine</strong>.</li>
                            <li><i>S. thermophilus</i>, jo <strong>kai amino acids ke liye auxotrophic</strong> hai (khaas taur par histidine, methionine, cysteine, valine, leucine, isoleucine, aur glutamic acid) aur jiski proteolytic capability bahut limited hai, ye in liberated amino acids aur peptides par depend karta hai continued growth ke liye.</li>
                            <li>In nutrients ki availability ki wajah se <i>S. thermophilus</i> ka ek <strong>second exponential growth phase</strong> shuru hota hai, jisse acid production ki rate pehle se bahut tez ho jaati hai. Co-culture mein, acidification ki rate monoculture ke comparison mein <strong>2–3× faster</strong> ho sakti hai.</li>
                        </ul>
                    </li>
                    <li><strong>Phase 3 — Acid inhibition aur cessation:</strong>
                        <p>Jab pH 4.5 se neeche jaata hai, <i>S. thermophilus</i> ki growth progressively inhibit hoti hai (ye kam acid-tolerant hai). <i>L. bulgaricus</i>, jo zyada acid-tolerant hai, acid produce karta rehta hai (post-acidification) jab tak pH ~3.5–4.0 nahi aa jaata agar timely cool nahi kiya gaya. Isliye <strong>target pH achieve hone ke baad rapid cooling bahut critical hai</strong>.</p>
                    </li>
                </ol>
            </div>

            <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4 rounded-r">
                <h5 class="font-bold text-yellow-800">S. thermophilus : L. bulgaricus ka Ratio</h5>
                <p class="text-sm mt-1">Initial inoculation ratio typically <strong>1:1</strong> hota hai, lekin fermentation ke dauran <i>S. thermophilus</i> tez grow karta hai aur final product mein aksar numerically dominate karta hai ratio mein <strong>3:1 se 5:1</strong> tak. Ye ratio flavor ko affect karta hai: zyada <i>L. bulgaricus</i> ka proportion zyada acetaldehyde aur higher acidity (sharper taste) deta hai, jabki zyada <i>S. thermophilus</i> ka proportion milder, kam acidic yoghurt produce karta hai zyada diacetyl (buttery) notes ke saath. Commercial manufacturers is ratio ko manipulate karte hain desired sensory profile achieve karne ke liye.</p>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Yoghurt Fermentation ki Biochemistry</h3>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">1. Lactose Metabolism (Glycolysis)</h4>
            <p>Dono organisms <strong>obligately homofermentative</strong> hain, jo lactose ko lactic acid mein convert karte hain <strong>Embden-Meyerhof-Parnas (EMP) glycolytic pathway</strong> ke through:</p>
            <div class="bg-gray-100 p-4 rounded mt-2 font-mono text-sm text-center">
                <p><strong>Step 1: Lactose Transport aur Hydrolysis</strong></p>
                <p>Lactose (extracellular) → [LacS permease / galactose ke saath antiport] → Lactose (intracellular)</p>
                <p>Lactose → [β-galactosidase (LacZ)] → <strong>Glucose</strong> + <strong>Galactose</strong></p>
                <p class="mt-3"><strong>Step 2: Glycolysis (EMP Pathway)</strong></p>
                <p>Glucose → [10-step EMP pathway] → 2 Pyruvate</p>
                <p>Net yield: 2 ATP + 2 NADH per glucose</p>
                <p class="mt-3"><strong>Step 3: Pyruvate Reduction</strong></p>
                <p>Pyruvate + NADH → [Lactate dehydrogenase (LDH)] → <strong>Lactic Acid</strong> + NAD⁺</p>
                <p class="mt-3"><strong>Overall Equation:</strong></p>
                <p>C₁₂H₂₂O₁₁ (Lactose) + H₂O → 4 CH₃CHOHCOOH (Lactic Acid)</p>
                <p class="text-xs mt-1">(Theoretical yield: 1 mol lactose → 4 mol lactic acid; actual yield ~3.5–3.8 mol biomass diversion ki wajah se)</p>
            </div>
            <p class="mt-3"><strong>Galactose metabolism ke baare mein Note:</strong> <i>S. thermophilus</i> mein typically functional Leloir pathway (galactokinase, GalK) nahi hoti aur isliye ye <strong>galactose ko bahar nikal deta hai</strong> medium mein LacS antiporter (lactose/galactose exchange) ke through. Iska result hota hai <strong>yoghurt mein free galactose ka accumulation</strong> (typically 1.5–2.5 g/100g). <i>L. bulgaricus</i> galactose ko Leloir pathway ke through metabolize kar sakta hai, lekin bahut slowly. Residual galactose ki presence clinically interesting hai kyunki ise potential health implications se link kiya gaya hai (galactose aur susceptible populations mein cataract formation), haalanki dietary levels par ye debated rehta hai.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">2. Flavor Compound Production</h4>
            <p>Yoghurt ka characteristic flavor <strong>90 se zyada volatile compounds</strong> ke complex mixture se aata hai. Key compounds ye hain:</p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Compound</th>
                            <th class="p-2 border">Concentration (ppm)</th>
                            <th class="p-2 border">Flavor Note</th>
                            <th class="p-2 border">Primary Producer</th>
                            <th class="p-2 border">Biosynthetic Pathway</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border"><strong>Acetaldehyde</strong></td><td class="p-2 border">10–40 (ideal: 23–41 ppm)</td><td class="p-2 border">Green apple, fresh, characteristic yoghurt flavor</td><td class="p-2 border"><i>L. bulgaricus</i> (primary); <i>S. thermophilus</i> (minor)</td><td class="p-2 border">Threonine se <strong>threonine aldolase</strong> ke through (threonine → acetaldehyde + glycine). Pyruvate se bhi pyruvate decarboxylase ke through.</td></tr>
                        <tr><td class="p-2 border"><strong>Diacetyl</strong> (2,3-butanedione)</td><td class="p-2 border">0.5–5</td><td class="p-2 border">Buttery, creamy</td><td class="p-2 border"><i>S. thermophilus</i></td><td class="p-2 border">Citrate metabolism se ya α-acetolactate se (non-enzymatic oxidative decarboxylation). Citrate → oxaloacetate → pyruvate → α-acetolactate → diacetyl</td></tr>
                        <tr><td class="p-2 border"><strong>Acetoin</strong> (3-hydroxy-2-butanone)</td><td class="p-2 border">2–10</td><td class="p-2 border">Mild buttery, creamy</td><td class="p-2 border">Dono</td><td class="p-2 border">Diacetyl ka reduction diacetyl reductase dwara, ya α-acetolactate se α-acetolactate decarboxylase dwara</td></tr>
                        <tr><td class="p-2 border"><strong>Lactic Acid</strong></td><td class="p-2 border">6,000–12,000</td><td class="p-2 border">Sour, tangy, clean acid</td><td class="p-2 border">Dono</td><td class="p-2 border">EMP pathway (upar dekhen)</td></tr>
                        <tr><td class="p-2 border"><strong>Acetic Acid</strong></td><td class="p-2 border">1–30</td><td class="p-2 border">Vinegary (high levels par undesirable)</td><td class="p-2 border"><i>L. bulgaricus</i></td><td class="p-2 border">Pyruvate se pyruvate oxidase ke through; ya amino acid degradation se</td></tr>
                        <tr><td class="p-2 border"><strong>Formic Acid</strong></td><td class="p-2 border">5–40</td><td class="p-2 border">Halka pungent</td><td class="p-2 border"><i>S. thermophilus</i></td><td class="p-2 border">Pyruvate formate-lyase (PFL): pyruvate → formate + acetyl-CoA</td></tr>
                        <tr><td class="p-2 border"><strong>Free Fatty Acids</strong></td><td class="p-2 border">Trace-moderate</td><td class="p-2 border">Cheesy, rancid (agar excessive ho toh)</td><td class="p-2 border"><i>L. bulgaricus</i></td><td class="p-2 border">Milk triglycerides ki weak lipolysis esterases dwara</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2 text-sm"><strong>Optimal Flavor Balance:</strong> <strong>Acetaldehyde ka diacetyl + acetoin ke saath ratio</strong> perceived flavor decide karta hai. Acetaldehyde content ~23–40 ppm optimal maana jaata hai. Agar acetaldehyde bahut kam ho toh yoghurt "flat" lagta hai; agar bahut zyada ho (>45 ppm) toh "harsh" ya "green" perceive hota hai.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">3. Exopolysaccharide (EPS) Production</h4>
            <p><i>S. thermophilus</i> ki kai strains aur <i>L. bulgaricus</i> ki kuch strains <strong>exopolysaccharides (EPS)</strong> produce karti hain — ye high molecular weight (10<sup>4</sup>–10<sup>6</sup> Da) sugar polymers hote hain jo milk medium mein secrete kiye jaate hain. EPS technologically bahut important hain kyunki ye naturally yoghurt ki <strong>viscosity, texture, mouthfeel, aur water-holding capacity</strong> enhance karte hain, added stabilizers ki zaroorat kam ya khatam kar dete hain.</p>
            <div class="bg-purple-50 border border-purple-200 rounded-lg p-4 mt-3">
                <h5 class="font-bold text-purple-800 mb-2">EPS — Detailed Science</h5>
                <ul class="list-disc list-outside pl-5 space-y-2 text-sm">
                    <li><strong>Types:</strong> EPS <strong>capsular</strong> (cell surface se tightly associated, capsule banata hai) ya <strong>ropy/free</strong> (medium mein release hota hai, "stringy" texture create karta hai) ho sakta hai. Stirred yoghurt production ke liye ropy strains prefer ki jaati hain.</li>
                    <li><strong>Composition:</strong> Heteropolysaccharides hote hain jo 2–8 sugar monomers ki repeating units se bane hote hain jismein <strong>D-glucose, D-galactose, L-rhamnose, L-fucose, N-acetylglucosamine, aur N-acetylgalactosamine</strong> shamil hain. Sugar-nucleotide precursors (UDP-glucose, UDP-galactose, dTDP-rhamnose) Leloir pathway intermediates se synthesize hote hain.</li>
                    <li><strong>Biosynthesis:</strong> EPS repeating units ek lipid carrier (undecaprenyl phosphate, C₅₅-P) par cytoplasmic membrane par glycosyltransferases (<em>eps</em> gene cluster dwara encoded) dwara assemble hoti hain, phir polymerize hoke Wzx/Wzy-dependent mechanism se membrane ke paar export ho jaati hain.</li>
                    <li><strong>Yield:</strong> Typically yoghurt milk mein 50–600 mg/L (kuch hyper-producing strains: 1,500 mg/L tak).</li>
                    <li><strong>Functional Effect:</strong> EPS molecules protein network ke saath depletion flocculation aur/ya bridging effects ke through interact karte hain, ek zyada interconnected microstructure create karte hain. Ye apparent viscosity 2–10× badhate hain aur syneresis (whey separation) significantly reduce karte hain gel matrix ke andar paani entrap karke.</li>
                    <li><strong>Health Claims:</strong> Kuch EPS ne in vitro mein <strong>immunomodulatory, anti-tumor, cholesterol-lowering, aur prebiotic</strong> properties demonstrate ki hain, haalanki in vivo humans mein evidence abhi bhi emerging hai.</li>
                </ul>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Yoghurt mein Protein Chemistry aur Gel Formation</h3>
            <p>Liquid milk ka semi-solid yoghurt gel mein badalna fundamentally <strong>acid-induced protein gelation</strong> ka process hai. Ise samajhne ke liye casein micelle structure aur uski destabilization ka knowledge zaroori hai.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Casein Micelle Structure (Brief Review)</h4>
            <ul class="list-disc list-outside pl-5 space-y-2 text-sm">
                <li>Casein total milk protein ka ~80% hota hai (~2.6 g/100 mL). Ye <strong>colloidal aggregates ke roop mein exist karta hai jise casein micelles</strong> kehte hain (diameter 50–500 nm, average ~150 nm).</li>
                <li>Micelles <strong>αs1-casein, αs2-casein, β-casein, aur κ-casein</strong> se bane hote hain jo <strong>calcium phosphate nanoclusters (colloidal calcium phosphate, CCP)</strong> aur hydrophobic interactions se ek saath jude rehte hain.</li>
                <li><strong>κ-casein</strong> predominantly micelle ki surface par hota hai. Iska hydrophilic, glycosylated C-terminal segment (the <strong>glycomacropeptide, GMP</strong>) serum phase mein extend hota hai, ek <strong>"hairy layer"</strong> create karta hai jo <strong>steric aur electrostatic stabilization</strong> provide karta hai, micelle aggregation rokta hai.</li>
                <li>Native milk pH (~6.7) par, casein micelles <strong>net negative charge</strong> carry karte hain (zeta potential approximately −20 mV), jo electrostatic repulsion ke through colloidal stability mein contribute karta hai.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Acid-Induced Gelation Process</h4>
            <p>Yoghurt fermentation ke dauran, lactic acid production progressively pH ko lower karti hai. Neeche diye gaye pH-dependent events hote hain:</p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">pH Range</th>
                            <th class="p-2 border">Key Physicochemical Events</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">6.7 → 6.0</td><td class="p-2 border">Casein micelles se <strong>colloidal calcium phosphate (CCP)</strong> ka gradual solubilization. Ca²⁺ aur phosphate ions serum phase mein release hote hain. Micelles apni internal structural integrity khona shuru kar dete hain. Dynamic light scattering se micelle size mein halki kami observe hoti hai.</td></tr>
                        <tr><td class="p-2 border">6.0 → 5.3</td><td class="p-2 border">CCP solubilization jaari rehta hai (~80% pH 5.2 tak dissolve ho jaata hai). Weakened calcium bridges ki wajah se <strong>β-casein micelles se dissociate hona shuru hota hai</strong>. Micelles par net negative charge progressively decrease hota hai. Agar heat-denatured whey proteins surface par present hain (pre-heating se), toh wo cross-linking mein participate karte hain. Micelles swell hona shuru hote hain.</td></tr>
                        <tr><td class="p-2 border">5.3 → 5.0</td><td class="p-2 border"><strong>Gelation ki shuruat (gel point).</strong> Micelles ke beech electrostatic repulsion kaafi kam ho jaata hai. Hydrophobic interactions aur calcium bridging dominate karna shuru kar dete hain. Casein particles <strong>chains aur clusters</strong> mein aggregate hona shuru hote hain. Rheologically, storage modulus (G') badhna shuru hota hai.</td></tr>
                        <tr><td class="p-2 border">5.0 → 4.6</td><td class="p-2 border">Rapid gelation phase. <strong>pH 4.6 (casein ka isoelectric point)</strong> par net charge zero hota hai. Maximum aggregation hoti hai. Caseins ek <strong>three-dimensional particulate gel network</strong> mein aggregate hote hain — casein strands aur clusters ka ek interconnected matrix jo serum (whey), fat globules, aur bacteria ko entrap karta hai. Gel tezi se firm hota hai. G' exponentially badhta hai.</td></tr>
                        <tr><td class="p-2 border">< 4.6</td><td class="p-2 border">Continued acidification se casein par net positive charge aa jaata hai. Over-acidification (pH < 4.2) gel ko kamzor kar sakti hai excessive charge repulsion aur protein rearrangements ki wajah se. Gel brittle ho jaata hai aur syneresis ka chance badh jaata hai.</td></tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Gel Quality mein Heat Treatment ka Role (Critical Science)</h4>
            <p>Fermentation se pehle milk ko diya jaane wala high heat treatment (90–95°C for 5–10 min) yoghurt gel quality ke liye arguably <strong>sabse important processing step</strong> hai. Iske effects sirf pasteurization se kaafi aage jaate hain:</p>
            <ol class="list-decimal list-outside pl-5 space-y-3 text-sm mt-2">
                <li><strong>Whey Protein Denaturation (>80°C):</strong>
                    <p>Major whey proteins, <strong>β-lactoglobulin (β-Lg)</strong> aur <strong>α-lactalbumin (α-La)</strong>, ke denaturation temperatures approximately 78°C aur 62°C hain respectively. 90–95°C par, approximately <strong>85–95% β-Lg</strong> aur <strong>70–85% α-La</strong> denature (unfold) ho jaate hain. Unfolding se buried <strong>reactive sulfhydryl (-SH) groups</strong> expose hote hain (khaas taur par β-Lg mein Cys-121 aur Cys-119).</p>
                </li>
                <li><strong>Whey Protein – Casein Interaction (κ-casein–β-Lg complex):</strong>
                    <p>Denatured β-Lg <strong>micelle surface par κ-casein</strong> ke saath interact karta hai <strong>thiol-disulfide exchange reactions</strong> ke through (β-Lg Cys-121 react karta hai κ-casein Cys-11 ya Cys-88 ke saath). Isse micelle surface par <strong>covalent disulfide-bonded β-Lg/κ-casein complexes</strong> bante hain.</p>
                    <p>Iske alawa, denatured whey protein aggregates serum phase mein bante hain aur hydrophobic interactions ke through micelles se attach ho sakte hain.</p>
                </li>
                <li><strong>Gel Structure ke liye Consequences:</strong>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Attached denatured whey proteins casein particles ka <strong>effective volume fraction badhate hain</strong>, ek denser, zyada connected gel network create karte hain.</li>
                        <li>Ye disulfide bonds ke through <strong>additional cross-linking points</strong> provide karte hain, gel ko stronger banate hain (higher G' — storage modulus — aur higher fracture stress).</li>
                        <li>Denatured whey proteins ki excellent <strong>water-binding capacity</strong> hoti hai, gel ke andar zyada serum entrap karte hain aur dramatically <strong>syneresis (whey separation) reduce</strong> karte hain.</li>
                        <li>Gel firmness unheated ya mildly pasteurized milk ke comparison mein <strong>2–4× tak badh sakti hai</strong>.</li>
                    </ul>
                </li>
                <li><strong>Adequate heat treatment ke bina:</strong>
                    <p>Agar milk ko sirf HTST pasteurize kiya jaaye (72°C/15s), toh whey proteins largely native rehte hain (sirf ~10–15% denature hote hain). Resulting yoghurt gel <strong>weak, fragile hota hai aur extensive whey separation dikhata hai</strong> — ye commercially most yoghurt formats ke liye unacceptable hai.</p>
                </li>
            </ol>

            <div class="bg-orange-50 border-l-4 border-orange-500 p-4 mt-4 rounded-r">
                <h5 class="font-bold text-orange-800">Gel Firmness Factors — Summary</h5>
                <p class="text-sm mt-1">Yoghurt gel firmness (penetrometry, texture profile analysis, ya oscillatory rheology se measured) depend karta hai: <strong>(1)</strong> Total protein/casein content (↑ protein → ↑ firmness), <strong>(2)</strong> Whey protein denaturation ki degree (↑ denaturation → ↑ firmness), <strong>(3)</strong> Incubation temperature (higher temps → faster gelation lekin coarser, weaker gel; lower temps → slower, finer, stronger gel), <strong>(4)</strong> Final pH (optimum ~4.4–4.6), <strong>(5)</strong> Fat content (fat globules homogenization ke basis par "active" ya "inactive" fillers ki tarah kaam karte hain), <strong>(6)</strong> Cultures dwara EPS production, <strong>(7)</strong> Stabilizers ka addition (pectin, starch, gelatin).</p>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Fortification aur Additives ka Role</h3>
            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">SNF/Protein Fortification</h4>
            <p>Yoghurt milk ko routinely fortify kiya jaata hai total solids badhane ke liye typical 12.5% (whole milk ke liye) se <strong>14–18%</strong> tak. Methods ye hain:</p>
            <ul class="list-disc list-outside pl-5 space-y-2 text-sm mt-2">
                <li><strong>Skim milk powder (SMP) ka addition:</strong> Sabse common. Casein aur whey protein content badhata hai. Typical addition: 2–4% SMP (total protein 4.5–5.5% tak badh jaata hai).</li>
                <li><strong>Milk protein concentrate (MPC) ya whey protein concentrate (WPC) ka addition:</strong> MPC casein proportion badhata hai (stronger gel); WPC whey protein badhata hai (heat treatment ke baad better water-binding).</li>
                <li><strong>Evaporation/vacuum concentration:</strong> Vacuum mein (50–60°C) paani nikaalta hai total solids badhane ke liye bina composition ratios badle. Energy-intensive hai lekin excellent quality produce karta hai.</li>
                <li><strong>Membrane concentration (Ultrafiltration, UF):</strong> Proteins aur fat ko concentrate karta hai jabki lactose, water, minerals permeate ho jaate hain. Khaas taur par Greek-style yoghurt ke liye use hota hai. 10 kDa MWCO membrane wala UF typically 2–3× protein concentration achieve karta hai.</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Stabilizers aur Hydrocolloids</h4>
            <p>Kuch commercial yoghurts mein (khaas taur par low-fat aur stirred types) texture improve karne aur syneresis rokne ke liye use hote hain:</p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Stabilizer</th>
                            <th class="p-2 border">Usage Level</th>
                            <th class="p-2 border">Mechanism</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Gelatin</td><td class="p-2 border">0.3–0.5%</td><td class="p-2 border">Ek secondary gel network banata hai (35°C se neeche) jo casein gel ko reinforce karta hai. Excellent water binding. Thermoreversible hai.</td></tr>
                        <tr><td class="p-2 border">Pectin (HM ya LM)</td><td class="p-2 border">0.1–0.5%</td><td class="p-2 border">Acidic pH (<4.6) par, pectin (negatively charged) electrostatically casein (positively charged regions) se bind hota hai, ek protective layer banata hai jo aggregation aur syneresis rokta hai. Drinking yoghurt ke liye excellent.</td></tr>
                        <tr><td class="p-2 border">Modified starch</td><td class="p-2 border">0.5–2.0%</td><td class="p-2 border">Heat treatment ke dauran swell hota hai, viscosity badhata hai. Gel matrix mein inert filler ki tarah kaam karta hai, whey drainage rokta hai. Cross-linked starches acidic conditions resist karti hain.</td></tr>
                        <tr><td class="p-2 border">Agar</td><td class="p-2 border">0.1–0.5%</td><td class="p-2 border">Thermally stable gel banata hai; firmness badhata hai. Brittle texture ki wajah se kam use hota hai.</td></tr>
                        <tr><td class="p-2 border">Carrageenan (κ ya ι)</td><td class="p-2 border">0.01–0.05%</td><td class="p-2 border">Micelle surface par κ-casein ke saath interact karta hai, whey separation rokta hai. Low concentrations par bhi bahut effective.</td></tr>
                        <tr><td class="p-2 border">Inulin / Polydextrose</td><td class="p-2 border">1–3%</td><td class="p-2 border">Prebiotic fibers jo viscosity badhate hain, low-fat yoghurts mein fat-mimicking mouthfeel dete hain, aur additional health benefits offer karte hain.</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Yoghurt ki Processing with Food Safety Controls (HACCP)</h2>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Processing Flowchart</h3>
            <div class="space-y-2 font-mono text-center text-sm">
                <div class="p-3 bg-gray-100 border border-gray-300 rounded"><strong>Raw Milk Reception & Testing</strong> (Fat, SNF, Acidity, MBRT, Antibiotic residues, Somatic cell count, Temperature) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-100 border border-gray-300 rounded"><strong>Pre-filtration / Clarification</strong> (Physical impurities ko inline filters ya centrifugal clarifier se nikaalna) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded"><strong>Milk Standardization</strong> (Fat target ke hisaab se adjust; SNF ko SMP/MPC/evaporation/UF se 14–16% tak fortify karna) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded"><strong>Stabilizers/Sweeteners ka Addition</strong> (Agar applicable ho: gelatin, pectin, starch, sugar — milk ke portion ke saath blend ya dry-blend karna) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-50 border border-blue-300 rounded"><strong>Homogenization</strong> (2-stage: 150–200 bar (1st) + 50 bar (2nd) at 55–65°C, heat treatment se pehle ya saath mein) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded"><strong>High Heat Treatment</strong> (85–95°C for 5–30 min; ya 80°C/30 min) <span class="font-sans text-xs bg-red-200 p-1 rounded font-bold">CCP-1 (B)</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Incubation Temperature tak Cooling</strong> (Thermophilic culture ke liye 42–45°C; mesophilic adjuncts use ho toh 30°C) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded"><strong>Yoghurt Starter Culture se Inoculation</strong> (DVS ya bulk starter; 1–3% inoculation rate; <i>S. thermophilus</i> + <i>L. bulgaricus</i> 1:1 ratio mein) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                <div class="text-2xl">↓ ←—— Branching Point</div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div class="space-y-2">
                        <div class="p-2 bg-indigo-100 border border-indigo-300 rounded text-center font-bold">SET YOGHURT PATHWAY</div>
                        <div class="p-2 bg-indigo-50 border border-indigo-200 rounded">Retail cups mein filling (bottom mein fruit base ke saath ya bina)</div>
                        <div class="text-xl text-center">↓</div>
                        <div class="p-2 bg-indigo-50 border border-indigo-200 rounded">Warm room / tunnel mein Incubation (42–45°C, 3–6 ghante jab tak pH 4.5–4.6 na aa jaaye) <span class="font-sans text-xs bg-red-200 p-1 rounded font-bold">CCP-2</span></div>
                        <div class="text-xl text-center">↓</div>
                        <div class="p-2 bg-indigo-50 border border-indigo-200 rounded">Blast chiller/cold tunnel mein Rapid cooling (1–2 ghanton mein <10°C tak) <span class="font-sans text-xs bg-red-200 p-1 rounded font-bold">CCP-3</span></div>
                    </div>
                    <div class="space-y-2">
                        <div class="p-2 bg-teal-100 border border-teal-300 rounded text-center font-bold">STIRRED YOGHURT PATHWAY</div>
                        <div class="p-2 bg-teal-50 border border-teal-200 rounded">Jacketed tank mein Incubation (42–45°C, 3–6 ghante jab tak pH 4.5–4.6) <span class="font-sans text-xs bg-red-200 p-1 rounded font-bold">CCP-2</span></div>
                        <div class="text-xl text-center">↓</div>
                        <div class="p-2 bg-teal-50 border border-teal-200 rounded">Gentle stirring se gel breaking (low RPM agitator)</div>
                        <div class="text-xl text-center">↓</div>
                        <div class="p-2 bg-teal-50 border border-teal-200 rounded">PHE ya tubular cooler mein Cooling (15–20°C tak)</div>
                        <div class="text-xl text-center">↓</div>
                        <div class="p-2 bg-teal-50 border border-teal-200 rounded">Fruit preparation / flavors ka addition (inline dosing aur static mixing) <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-xl text-center">↓</div>
                        <div class="p-2 bg-teal-50 border border-teal-200 rounded">Packaging (aseptic ya clean-fill cups, pouches, bottles mein)</div>
                        <div class="text-xl text-center">↓</div>
                        <div class="p-2 bg-teal-50 border border-teal-200 rounded">Final cooling aur cold storage (<5°C) <span class="font-sans text-xs bg-red-200 p-1 rounded font-bold">CCP-3</span></div>
                    </div>
                </div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Steps ki Detailed Explanation</h3>
            <ol class="list-decimal list-outside pl-5 space-y-6">
                <li><strong>Raw Milk Reception aur Quality Testing (PRP):</strong>
                    <p>Incoming raw milk ko in cheezon ke liye test kiya jaata hai:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1 text-sm">
                        <li><strong>Platform tests:</strong> Organoleptic evaluation (smell, taste, visual), temperature (chilled transport mein ≤8°C hona chahiye), clot-on-boiling (COB), alcohol test (68–72% ethanol).</li>
                        <li><strong>Compositional tests:</strong> Fat (Gerber method/IR), SNF (lactometer/IR), protein (Kjeldahl/Dumas/IR), lactose, total solids.</li>
                        <li><strong>Microbiological quality:</strong> MBRT (Methylene Blue Reduction Test — Good quality ke liye >2 ghante hona chahiye), SPC (Standard Plate Count — Grade A ke liye target <2×10⁵ CFU/mL), somatic cell count (<4×10⁵ cells/mL jo mastitis ki absence indicate karta hai).</li>
                        <li><strong>Antibiotic residues:</strong> Rapid screening kits se test hota hai (Delvotest, SNAP test). Antibiotics starter culture ki growth inhibit karte hain aur ek serious food safety concern hain. Positive samples reject hone chahiye. Ye testing khud ek <strong>CCP ya oPRP</strong> ho sakti hai kuch HACCP plans mein.</li>
                        <li><strong>Adulterants:</strong> Urea, starch, neutralizers (FSSAI requirements ke hisaab se test).</li>
                    </ul>
                </li>

                <li><strong>Homogenization (PRP):</strong>
                    <p>Homogenization yoghurt manufacture mein kai critical functions serve karta hai:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2 text-sm">
                        <li><strong>Fat globule size reduction:</strong> Native milk fat globules (1–10 µm diameter, average ~3.5 µm) ko <strong>< 1 µm</strong> (typically 0.3–0.8 µm) tak reduce kiya jaata hai milk ko narrow valve se high pressure mein force karke (150–200 bar first stage, 50 bar second stage).</li>
                        <li><strong>MFGM disruption aur casein adsorption:</strong> Native milk fat globule membrane (MFGM) disrupt ho jaati hai aur uski jagah ek nayi surface layer ban jaati hai jo mainly <strong>casein micelles aur whey proteins</strong> se bani hoti hai. Isse <strong>"protein-coated fat globules"</strong> create hote hain jo gel matrix mein <strong>pseudo-protein particles</strong> ki tarah behave karte hain.</li>
                        <li><strong>Active filler effect:</strong> Ye homogenized fat globules yoghurt gel mein <strong>"active fillers"</strong> ban jaate hain — apne protein surface coat ke through casein network mein incorporate ho jaate hain, gel ko reinforce karte hain aur unhomogenized milk yoghurt ke comparison mein <strong>firmness 30–100% tak badhate hain</strong>.</li>
                        <li><strong>Creaming ki prevention:</strong> Chhote fat globules ki buoyancy kam hoti hai (Stokes' law: sedimentation velocity ∝ r²), incubation ke dauran fat layer formation rokti hai.</li>
                        <li><strong>Improved whiteness:</strong> Chhote fat globules light ko zyada efficiently scatter karte hain, yoghurt ko whiter, zyada opaque appearance dete hain.</li>
                    </ul>
                    <p class="mt-2 text-sm"><strong>Upstream vs. Downstream Homogenization:</strong> Yoghurt production mein, homogenization typically <strong>heat treatment se pehle (upstream) ya simultaneously</strong> ki jaati hai. Downstream homogenization (heat treatment ke baad) generally set yoghurt ke liye avoid ki jaati hai kyunki ye gel structure disrupt kar sakti hai, lekin drinking yoghurt ke liye use ho sakti hai.</p>
                </li>

                <li><strong>High Heat Treatment (CCP-1 — Biological Hazard):</strong>
                    <p>Ye ek <strong>Critical Control Point</strong> hai <strong>biological hazards</strong> (pathogenic aur spoilage microorganisms) ko control karne ke liye.</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Specification</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Critical Limit</td><td class="p-2 border"><strong>85°C for 30 min</strong> ya <strong>90–95°C for 5–10 min</strong> (sabse common industrial practice)</td></tr>
                                <tr><td class="p-2 border">Target Pathogens</td><td class="p-2 border"><i>Mycobacterium bovis</i> (D₇₂ = 15–20 s); <i>Coxiella burnetii</i> (D₇₂ = 6–12 s); <i>Salmonella</i> spp.; <i>E. coli</i> O157:H7; <i>L. monocytogenes</i> (D₇₂ = 2–3 s); <i>S. aureus</i>; <i>Campylobacter</i> spp.</td></tr>
                                <tr><td class="p-2 border">Log Reduction Achieved</td><td class="p-2 border"><i>C. burnetii</i> (milk mein sabse heat-resistant non-spore-forming pathogen) ka > 12-log (12D) reduction</td></tr>
                                <tr><td class="p-2 border">Monitoring</td><td class="p-2 border">Continuous temperature recording (calibrated thermocouples alarm systems ke saath); continuous system use ho toh flow diversion valve (FDV)</td></tr>
                                <tr><td class="p-2 border">Corrective Action</td><td class="p-2 border">Agar temperature CL se neeche gire: re-process ya milk divert karo; instruments recalibrate karo; root cause investigate karo</td></tr>
                                <tr><td class="p-2 border">Verification</td><td class="p-2 border">Temperature charts review; <strong>alkaline phosphatase test (negative hona chahiye)</strong>; <strong>lactoperoxidase test (>80°C par negative ho sakta hai)</strong>; final product ki microbiological testing</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-3"><strong>High heat treatment ke additional benefits (pathogen kill ke alawa):</strong></p>
                    <ul class="list-disc list-outside pl-5 space-y-1 text-sm">
                        <li>~85–95% β-lactoglobulin aur ~70–85% α-lactalbumin ka denaturation → improved gel texture (jaise upar detail mein bataya).</li>
                        <li>Indigenous milk enzymes ka inactivation: lipase, protease, xanthine oxidase, alkaline phosphatase.</li>
                        <li>Bacteriophages ka destruction jo starter cultures par attack kar sakte hain (consistent fermentation ke liye critical).</li>
                        <li>Dissolved oxygen ka removal aur reactive sulfhydryl groups ka production (denatured whey proteins se), ek <strong>reducing environment</strong> create hota hai jo (micro)anaerobic starter bacteria ki growth ke liye favorable hai.</li>
                        <li>Stimulatory compounds ka generation: formate, pyruvate, aur free amino acids milk components ke thermal breakdown se.</li>
                        <li>Natural antimicrobial systems ka inactivation: <strong>lactoperoxidase system (LP system)</strong> aur <strong>immunoglobulins</strong> jo warna starter culture growth ko inhibit kar sakte the.</li>
                    </ul>
                </li>

                <li><strong>Incubation Temperature tak Cooling (oPRP):</strong>
                    <p>Heat treatment ke baad, milk ko plate heat exchanger (PHE) ya tubular heat exchanger mein optimum incubation temperature <strong>42–45°C</strong> (thermophilic culture ke liye optimal) tak cool kiya jaata hai. Ye step ek <strong>Operational Prerequisite Program (oPRP)</strong> hai:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1 text-sm">
                        <li><strong>Temperature bahut high (>47°C):</strong> Starter bacteria ko thermal injury ya death; <i>S. thermophilus</i> particularly sensitive hai (max growth temperature ~50°C most strains ke liye).</li>
                        <li><strong>Temperature bahut low (<38°C):</strong> Thermophilic culture ki bahut slow growth; extended fermentation time; psychrotrophic organisms se contamination ka potential; inconsistent gel quality.</li>
                        <li><strong>Monitoring:</strong> Inline temperature sensors, CIP-cleaned cooling equipment.</li>
                    </ul>
                </li>

                <li><strong>Yoghurt Starter Culture se Inoculation (oPRP):</strong>
                    <p>Specific yoghurt starter culture add ki jaati hai. Modern industrial practice mein <strong>Direct Vat Set (DVS)</strong> cultures use hoti hain — freeze-dried ya deep-frozen concentrated cultures jo directly vat mein add ki jaati hain bina intermediate propagation ki zaroorat ke.</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Specification</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Inoculation Rate</td><td class="p-2 border">DVS cultures: supplier recommendation ke hisaab se (typically milk mein 10⁶–10⁷ CFU/mL deliver karta hai). Bulk starter: 1–3% (v/v).</td></tr>
                                <tr><td class="p-2 border">Culture Ratio</td><td class="p-2 border"><i>S. thermophilus</i> : <i>L. bulgaricus</i> = 1:1 (initial inoculation). Kuch manufacturers milder products ke liye 2:1 ya 3:1 use karte hain.</td></tr>
                                <tr><td class="p-2 border">Culture Activity Test</td><td class="p-2 border">Use se pehle, culture activity verify ki jaati hai: inoculated milk ko 42°C par 4–5 ghanton mein pH 4.5 tak pahunchna chahiye (ΔpH test).</td></tr>
                                <tr><td class="p-2 border">DVS ka Storage</td><td class="p-2 border">Freeze-dried: ≤ −18°C; Frozen pellets: ≤ −45°C. Kabhi thaw karke refreeze mat karo.</td></tr>
                                <tr><td class="p-2 border">oPRP kyun hai?</td><td class="p-2 border">Culture contamination (galat organisms, phage contamination, low viability) fermentation failure, atypical product, ya safety issues lead kar sakta hai. Supplier certification, storage conditions, aur aseptic handling critical controls hain.</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-3"><strong>Probiotic Adjunct Cultures (Optional):</strong> Kuch yoghurts mein additional <strong>probiotic organisms</strong> jaise <i>Lactobacillus acidophilus</i>, <i>Lactobacillus rhamnosus</i> GG, <i>Lactobacillus casei</i>, <i>Bifidobacterium lactis</i> (BB-12), ya <i>Bifidobacterium longum</i> hote hain. Ye mandatory yoghurt culture ke saath add kiye jaate hain aur consumption ke time <strong>≥10⁶ CFU/g</strong> par survive hone chahiye potential health benefits provide karne ke liye. Product ko "Probiotic Yoghurt" label kiya ja sakta hai national regulations ke subject to. Note: <i>L. bulgaricus</i> aur <i>S. thermophilus</i> khud typically probiotics classify nahi hote ISAPP (International Scientific Association for Probiotics and Prebiotics) definition ke under, kyunki GI tract se unka survival limited hai, haalanki kuch beneficial effects zaroor exert karte hain.</p>
                </li>

                <li><strong>Incubation / Fermentation (CCP-2 — Biological Hazard):</strong>
                    <p>Ye core transformation step hai. Inoculated milk ko 42–45°C par rakha jaata hai taaki starter bacteria lactose ko lactic acid mein ferment karein.</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Set Yoghurt</th>
                                    <th class="p-2 border">Stirred Yoghurt</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Vessel</td><td class="p-2 border">Warm room/incubation tunnel mein retail cups</td><td class="p-2 border">Jacketed stainless steel fermentation tanks (5,000–20,000 L)</td></tr>
                                <tr><td class="p-2 border">Temperature</td><td class="p-2 border">42–45°C (±0.5°C uniformity zaroori hai)</td><td class="p-2 border">42–45°C (jacket temperature controlled)</td></tr>
                                <tr><td class="p-2 border">Duration</td><td class="p-2 border">3–6 ghante (typically 3.5–4.5 ghante)</td><td class="p-2 border">3–6 ghante</td></tr>
                                <tr><td class="p-2 border">Endpoint</td><td class="p-2 border">pH 4.5–4.6 (titratable acidity ~0.85–0.95% lactic acid)</td><td class="p-2 border">pH 4.5–4.6</td></tr>
                                <tr><td class="p-2 border">Critical Limit</td><td class="p-2 border">pH ko inoculation ke 6 ghanton ke andar ≤4.6 tak pahunchna chahiye</td><td class="p-2 border">Same</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h5 class="font-semibold text-gray-700 mt-4 mb-2">Fermentation Kinetics — Acidification Profile</h5>
                    <p class="text-sm">Yoghurt fermentation ke dauran acidification curve (pH vs. time) ek characteristic <strong>sigmoidal pattern</strong> follow karta hai:</p>
                    <ul class="list-disc list-outside pl-5 space-y-2 text-sm mt-2">
                        <li><strong>Lag phase (0–1 hr):</strong> Bacteria milk environment mein adapt hote hain. Minimal acid production. pH ~6.4–6.6 rehta hai.</li>
                        <li><strong>Exponential acidification phase (1–3.5 hr):</strong> Rapid lactic acid production. <i>S. thermophilus</i> dominate karta hai. pH tezi se ~6.0 se ~4.8 tak gir jaata hai. pH decrease ki rate: −0.3 se −0.6 pH units/hour. Maximum acidification rate (Vmax) typically pH ~5.2–5.5 par hoti hai.</li>
                        <li><strong>Deceleration phase (3.5–5 hr):</strong> Acid inhibition ki wajah se <i>S. thermophilus</i> ki growth slow ho jaati hai. <i>L. bulgaricus</i> acid production jaari rakhta hai. pH 4.6 ke paas aata hai. Gel point reach hota hai. Rate decrease hoti hai.</li>
                        <li><strong>Stationary phase (>5 hr):</strong> Dono organisms stationary phase mein enter karte hain. Agar temperature maintain ho toh minimal further acid production. Lekin, agar cool nahi kiya toh <i>L. bulgaricus</i> slow acid production jaari rakhta hai (post-acidification), pH 4.3 se neeche push karta hai.</li>
                    </ul>
                    <p class="text-sm mt-2"><strong>Kinetic Parameters (CinAc system ya similar se measured):</strong></p>
                    <ul class="list-disc list-outside pl-5 space-y-1 text-sm">
                        <li><strong>Vmax</strong> (maximum rate of acidification): fast cultures ke liye −15 se −25 × 10⁻³ upH/min</li>
                        <li><strong>t<sub>Vmax</sub></strong> (Vmax tak pahunchne ka time): 100–180 min</li>
                        <li><strong>Vmax par pH</strong>: 5.2–5.6</li>
                        <li><strong>t<sub>pH4.6</sub></strong> (pH 4.6 tak pahunchne ka time): 42°C par standard cultures ke liye 200–350 min</li>
                    </ul>

                    <h5 class="font-semibold text-gray-700 mt-4 mb-2">CCP-2 Critical kyun hai?</h5>
                    <ul class="list-disc list-outside pl-5 space-y-2 text-sm">
                        <li><strong>Pathogen control:</strong> Agar starter culture milk ko rapidly acidify karne mein fail ho jaaye (phage attack, antibiotic residues, ya temperature deviation ki wajah se), toh milk extended time ke liye <strong>"danger zone" (20–45°C with pH >4.6)</strong> mein rehta hai, jahan potential pathogens dangerous levels tak multiply kar sakte hain. 6 ghanton ke andar pH ka ≤4.6 tak girna wo critical limit hai jo pathogen inhibition ensure karta hai.</li>
                        <li><strong>Agar CCP fail ho jaaye:</strong> <i>Staphylococcus aureus</i> warm milk mein grow kar sakta hai aur <strong>heat-stable enterotoxin</strong> produce kar sakta hai (pH >4.5 aur temperatures 10–45°C par active). <i>E. coli</i> aur <i>Salmonella</i> 42°C par neutral pH par proliferate kar sakte hain.</li>
                        <li><strong>Corrective actions:</strong> Agar pH 6 ghanton mein 4.6 tak nahi pahunche → product destroy ya reprocess hona chahiye. Root cause (culture activity, phage, temperature, antibiotic residues) investigate hona chahiye.</li>
                    </ul>
                </li>

                <li><strong>Flavoured Yoghurt — Fruit Preparation ka Addition:</strong>
                    <p>Flavoured yoghurt ke liye, ek sterilized fruit preparation add ki jaati hai. Key considerations:</p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2 text-sm">
                        <li><strong>Fruit-at-the-bottom (Set yoghurt):</strong> Pre-sterilized fruit preparation (typically 95–105°C par heat-treated, pH <4.0, water activity <0.94, Brix 40–65°) ko cup ke bottom mein dose kiya jaata hai (cup volume ka 10–18%) inoculated milk bharne se pehle. Incubation ke dauran, fruit layer ke upar gel banta hai.</li>
                        <li><strong>Blended/Stirred yoghurt:</strong> Tank mein incubation aur gel-breaking ke baad, cooled yoghurt (15–20°C) ko fruit preparation (typically 10–15% w/w) ke saath inline static mixer ya dynamic mixer se blend kiya jaata hai. Gentle mixing zaroori hai excessive shear se bachne ke liye, jo product ko irreversibly thin kar dega.</li>
                        <li><strong>Fruit preparation requirements:</strong> Commercially sterile honi chahiye, low pH (<4.0), high sugar concentration. Yeasts aur molds se free hona chahiye (<1 CFU/g), osmophilic yeasts, aur bacteriophages se bhi. Typically potassium sorbate (final product mein max 300 ppm) se preserve hoti hai ya use se turant pehle pasteurize ki jaati hai.</li>
                        <li><strong>Sweeteners:</strong> Final product mein Sugar (sucrose) 5–12% par. Diet/low-calorie yoghurt ke liye, high-intensity sweeteners jaise aspartame, sucralose, stevia glycosides, ya acesulfame-K FSSAI permitted limits ke hisaab se use ho sakte hain.</li>
                    </ul>
                </li>

                <li><strong>Gel Breaking aur Smoothing (Sirf Stirred Yoghurt ke liye):</strong>
                    <p>Incubation ke baad, tank mein set gel ko slow-speed agitation se toda jaata hai (low RPM, typically 10–30 RPM, anchor ya gate-type agitators use karke). Tota hua gel phir ek <strong>smoothing device</strong> (back-pressure valve, 0.5–1.0 mm mesh wali smoothing screen, ya rotor-stator type smoothing head) se pass kiya jaata hai taaki lumps ke bina uniform, smooth texture mile.</p>
                    <p class="mt-2 text-sm"><strong>Rheological consideration:</strong> Yoghurt gel <strong>thixotropic</strong> hota hai — shear ke under iska viscosity decrease hota hai aur rest par partially recover hota hai. Excessive mechanical treatment (high shear rates, prolonged mixing, lambe pipelines se pumping, high-speed centrifugal pumps) gel structure ko irreversibly damage karta hai, thin, watery product ban jaata hai. Yoghurt transport ke liye shear minimize karne ke liye <strong>Positive displacement pumps (rotary lobe ya progressive cavity)</strong> prefer ki jaati hain.</p>
                </li>

                <li><strong>Cooling aur Cold Storage (CCP-3 — Biological Hazard):</strong>
                    <p>Jab desired acidity (pH 4.5–4.6, titratable acidity ~0.85–0.95% lactic acid) aur firmness achieve ho jaaye, yoghurt ko rapidly cool karna zaroori hai.</p>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter</th>
                                    <th class="p-2 border">Specification</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border">Critical Limit</td><td class="p-2 border">Product temperature incubation ke end ke <strong>2 ghanton ke andar ≤10°C</strong> tak pahunchna chahiye (ideally stirred yoghurt ke liye 1–2 ghanton mein <5°C)</td></tr>
                                <tr><td class="p-2 border">Cooling Method (Set)</td><td class="p-2 border">0–2°C par forced air circulation wala Blast chiller / cold tunnel</td></tr>
                                <tr><td class="p-2 border">Cooling Method (Stirred)</td><td class="p-2 border">Plate heat exchanger (PHE) ya tubular heat exchanger; viscous products ke liye surface scraped heat exchanger (SSHE)</td></tr>
                                <tr><td class="p-2 border">Storage Temperature</td><td class="p-2 border">Poori distribution chain mein 2–5°C (cold chain integrity)</td></tr>
                                <tr><td class="p-2 border">Critical kyun hai?</td><td class="p-2 border"><i>L. bulgaricus</i> dwara <strong>post-acidification</strong> rokta hai (jo >10°C par acid produce karta reh sakta hai). Excessive post-acidification se pH <4.0, harsh acidic taste, syneresis, aur altered texture ho jaati hai. Contaminating yeasts aur molds ki growth bhi rokta hai.</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="mt-3 text-sm"><strong>Post-acidification (ΔpH):</strong> Ye pH decrease hai jo cooling ke baad cold storage ke dauran hoti hai. Ideally ΔpH shelf life mein <0.1–0.2 units hona chahiye. Jab longer shelf life desired ho toh low post-acidification characteristics wali cultures (mild cultures) select ki jaati hain. Genetically, post-acidification <i>L. bulgaricus</i> ki acid tolerance se linked hai — kam acid tolerance wali strains cooling ke baad kam acid produce karti hain.</p>
                </li>
            </ol>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Yoghurt ke liye HACCP Summary Table</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Step</th>
                            <th class="p-2 border">Hazard Type</th>
                            <th class="p-2 border">Control Type</th>
                            <th class="p-2 border">Critical Limit</th>
                            <th class="p-2 border">Monitoring</th>
                            <th class="p-2 border">Corrective Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Heat Treatment</td><td class="p-2 border">Biological (pathogens)</td><td class="p-2 border"><strong>CCP-1</strong></td><td class="p-2 border">≥90°C for ≥5 min (ya equivalent)</td><td class="p-2 border">Continuous temperature recording; FDV</td><td class="p-2 border">Divert/re-process; recalibrate</td></tr>
                        <tr><td class="p-2 border">Incubation</td><td class="p-2 border">Biological (culture fail hone par toxin production)</td><td class="p-2 border"><strong>CCP-2</strong></td><td class="p-2 border">42–45°C par 6 ghanton mein pH ≤4.6</td><td class="p-2 border">pH measurement (inline ya grab sample har 1 hr); temperature recording</td><td class="p-2 border">pH target meet na ho toh product destroy karo; cause investigate karo</td></tr>
                        <tr><td class="p-2 border">Cooling & Cold Storage</td><td class="p-2 border">Biological (post-acidification; spoilage growth)</td><td class="p-2 border"><strong>CCP-3</strong></td><td class="p-2 border">2 hrs mein ≤10°C; storage ≤5°C</td><td class="p-2 border">Temperature sensors; cold chain monitoring</td><td class="p-2 border">Cooling system adjust karo; product safety evaluate karo</td></tr>
                        <tr><td class="p-2 border">Heat treatment ke baad cooling</td><td class="p-2 border">Biological (aseptic na ho toh contamination)</td><td class="p-2 border"><strong>oPRP</strong></td><td class="p-2 border">42–45°C (±1°C)</td><td class="p-2 border">Temperature sensors</td><td class="p-2 border">Cooling adjust karo; re-verify</td></tr>
                        <tr><td class="p-2 border">Culture inoculation</td><td class="p-2 border">Biological (galat culture, phage, low activity)</td><td class="p-2 border"><strong>oPRP</strong></td><td class="p-2 border">Verified culture identity aur activity; phage testing</td><td class="p-2 border">Culture supplier CoA; activity tests; phage monitoring</td><td class="p-2 border">Culture replace karo; phage-resistant rotation program use karo</td></tr>
                        <tr><td class="p-2 border">Raw material, equipment sanitation, personal hygiene, water quality, pest control</td><td class="p-2 border">Various</td><td class="p-2 border"><strong>PRP</strong></td><td class="p-2 border">GMP/GHP requirements ke hisaab se</td><td class="p-2 border">Routine inspections, audits, environmental monitoring</td><td class="p-2 border">SOP ke hisaab se</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Bacteriophage (Phage) — Yoghurt Production ke liye Sabse Bada Khatra</h3>
            <p>Bacteriophages aise viruses hain jo bacteria ko infect aur lyse karte hain. Yoghurt starter cultures ka phage infection, khaas taur par <i>S. thermophilus</i> ka, dairy industry mein <strong>fermentation failure ka sabse common cause</strong> hai. Yoghurt manufacturers ke liye phage biology samajhna bahut zaroori hai.</p>
            <div class="bg-red-50 border border-red-200 rounded-lg p-4 mt-3">
                <ul class="list-disc list-outside pl-5 space-y-2 text-sm">
                    <li><strong>Prevalence:</strong> <i>S. thermophilus</i> ke phages mainly <em>cos</em>-type (Sfi21-like) aur <em>pac</em>-type (Sfi11-like) groups mein aate hain. Ye dairy environments mein ubiquitous hain (raw milk, whey, air, surfaces).</li>
                    <li><strong>Phage attack ke symptoms:</strong> Slow ya incomplete acidification (pH target time mein 4.6 tak nahi pahunchta); weak gel; atypical flavor; batch-to-batch inconsistent product.</li>
                    <li><strong>Phage Control Strategies:</strong>
                        <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                            <li><strong>Culture rotation:</strong> Multiple phage-unrelated strains ka rotating schedule par use (jaise 4-day rotation) taaki kisi ek strain ke khilaf phage buildup na ho.</li>
                            <li><strong>DVS cultures:</strong> Direct Vat Set cultures in-house bulk starter propagation ki zaroorat khatam karte hain, phage exposure bahut kam hota hai.</li>
                            <li><strong>Adequate heat treatment:</strong> Incoming milk mein phage destruction ensure karta hai. Zyaadatar <i>S. thermophilus</i> phages 72°C/15 s par inactivate ho jaate hain, lekin kuch heat-resistant hain (80°C/5 min survive kar sakte hain). Yoghurt ka heat treatment (90–95°C/5–10 min) ek bada safety margin deta hai.</li>
                            <li><strong>Aseptic inoculation:</strong> Closed system mein filtered (HEPA) air ke saath culture addition taaki airborne phage contamination na ho.</li>
                            <li><strong>Plant hygiene:</strong> Thorough CIP (cleaning-in-place) caustic (NaOH 1–2%, 75°C) ke baad acid (HNO₃ 0.5–1%) aur sanitation (peracetic acid ya chlorine) se. Phages kai sanitizers ke prati bahut resistant hain; peracetic acid chlorine se zyada effective hai.</li>
                            <li><strong>Phage monitoring:</strong> Whey/product mein phage presence ki regular testing plaque assay, PCR, ya impedance-based methods se.</li>
                            <li><strong>Physical separation:</strong> Culture preparation area production area se physically alag hona chahiye (separate air handling, positive pressure).</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Greek-Style / Strained Yoghurt — Detailed Science</h3>
            <p>Greek-style yoghurt (jise strained yoghurt, labneh, ya concentrated yoghurt bhi kehte hain) ne globally bahut bada market share gain kiya hai. Ye standard yoghurt se whey ka significant portion nikaal kar banaya jaata hai.</p>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Standard Yoghurt</th>
                            <th class="p-2 border">Greek-Style Yoghurt</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Total Solids (%)</td><td class="p-2 border">12–16</td><td class="p-2 border">20–26</td></tr>
                        <tr><td class="p-2 border">Protein (%)</td><td class="p-2 border">3.5–5.5</td><td class="p-2 border">8–12</td></tr>
                        <tr><td class="p-2 border">Fat (%)</td><td class="p-2 border">0.5–3.5</td><td class="p-2 border">0–10 (varies)</td></tr>
                        <tr><td class="p-2 border">Lactose (%)</td><td class="p-2 border">3.5–4.5</td><td class="p-2 border">2.0–3.5 (whey removal se reduce hota hai)</td></tr>
                        <tr><td class="p-2 border">Calcium (mg/100g)</td><td class="p-2 border">120–150</td><td class="p-2 border">100–130 (kuch Ca acid whey ke saath nikal jaata hai)</td></tr>
                        <tr><td class="p-2 border">Yield</td><td class="p-2 border">—</td><td class="p-2 border">~3 kg milk → 1 kg Greek yoghurt (2 kg acid whey by-product)</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-3"><strong>Production Methods:</strong></p>
            <ul class="list-disc list-outside pl-5 space-y-2 text-sm">
                <li><strong>Traditional straining:</strong> Fermented yoghurt ko muslin/cheesecloth bags mein daalke latka diya jaata hai gravity se whey drain karne ke liye 12–24 ghante tak <5°C par. Labor-intensive; artisanal production ke liye.</li>
                <li><strong>Centrifugal separation:</strong> Stirred yoghurt ko quarg separator (Nozzle type ya hermetic centrifugal separator) mein feed kiya jaata hai jo acid whey ko concentrated yoghurt se alag karta hai. Continuous process, high throughput. Temperature <15°C maintain.</li>
                <li><strong>Ultrafiltration (UF):</strong> Yoghurt ko UF membranes (10–50 kDa MWCO) se low pressure (1–3 bar) mein pass kiya jaata hai water, lactose, aur minerals nikalne ke liye jabki protein aur fat retain ho jaate hain. Tubular ya spiral-wound membranes. Fermentation se <em>pehle</em> milk par bhi apply kiya ja sakta hai (fortification approach).</li>
            </ul>
            <p class="mt-3"><strong>Acid Whey Challenge:</strong> Greek yoghurt production bade volumes mein <strong>acid whey</strong> (pH 4.2–4.6) generate karta hai, jo ek significant environmental challenge hai. Acid whey mein high BOD (35,000–50,000 mg/L), high lactose content (4–5%), aur high mineral content hota hai. Ise municipal wastewater systems mein dispose nahi kiya ja sakta. Solutions mein shamil hain: concentration aur spray-drying (expensive), anaerobic digestion ke through biogas production, lactose recovery, animal feed ingredient ke roop mein use, ya lactic acid ya ethanol produce karne ke liye fermentation.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Quality Parameters aur Shelf Life</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Parameter</th>
                            <th class="p-2 border">Ideal Range / Specification</th>
                            <th class="p-2 border">Test Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">pH</td><td class="p-2 border">4.0–4.6 (typical: 4.2–4.4)</td><td class="p-2 border">pH meter (calibrated)</td></tr>
                        <tr><td class="p-2 border">Titratable Acidity</td><td class="p-2 border">0.8–1.2% lactic acid (FSSAI min: 0.6%)</td><td class="p-2 border">0.1N NaOH se titration (phenolphthalein indicator)</td></tr>
                        <tr><td class="p-2 border">Viable Starter Count</td><td class="p-2 border">Consumption par ≥10⁷ CFU/g</td><td class="p-2 border">Pour plate: MRS agar (37°C/72hr anaerobic) <i>L. bulgaricus</i> ke liye; M17 agar (37°C/48hr aerobic) <i>S. thermophilus</i> ke liye</td></tr>
                        <tr><td class="p-2 border">Coliform Count</td><td class="p-2 border"><10 CFU/g (FSSAI limit)</td><td class="p-2 border">VRBA agar, 37°C/24–48 hr</td></tr>
                        <tr><td class="p-2 border">Yeast aur Mold Count</td><td class="p-2 border"><100 CFU/g (production par); shelf life mein <10⁴</td><td class="p-2 border">DRBC ya OGYA agar, 25°C/5 din</td></tr>
                        <tr><td class="p-2 border"><i>E. coli</i></td><td class="p-2 border">1 g mein absent</td><td class="p-2 border">EMB/TBX agar</td></tr>
                        <tr><td class="p-2 border"><i>Salmonella</i></td><td class="p-2 border">25 g mein absent</td><td class="p-2 border">ISO 6579 / BAM method</td></tr>
                        <tr><td class="p-2 border"><i>S. aureus</i></td><td class="p-2 border"><100 CFU/g</td><td class="p-2 border">Baird-Parker agar</td></tr>
                        <tr><td class="p-2 border"><i>L. monocytogenes</i></td><td class="p-2 border">25 g mein absent</td><td class="p-2 border">ISO 11290</td></tr>
                        <tr><td class="p-2 border">Viscosity (Stirred)</td><td class="p-2 border">2,000–10,000 mPa·s (Brookfield, spindle 4, 20 RPM, 10°C)</td><td class="p-2 border">Rotational viscometer</td></tr>
                        <tr><td class="p-2 border">Gel Firmness (Set)</td><td class="p-2 border">30–80 g force (penetration test, 10mm probe, 1 mm/s)</td><td class="p-2 border">Texture Analyzer (TA.XT, Instron)</td></tr>
                        <tr><td class="p-2 border">Syneresis</td><td class="p-2 border"><5% spontaneous whey separation (centrifugal method: <30%)</td><td class="p-2 border">Drainage/centrifugation method</td></tr>
                        <tr><td class="p-2 border">Color</td><td class="p-2 border">White se creamy-white (L* 85–95, a* −2 se 0, b* 8–14)</td><td class="p-2 border">Colorimeter (CIE L*a*b*)</td></tr>
                        <tr><td class="p-2 border">Acetaldehyde</td><td class="p-2 border">10–40 ppm</td><td class="p-2 border">GC-FID ya SPME-GC-MS</td></tr>
                        <tr><td class="p-2 border">Shelf Life</td><td class="p-2 border">2–5°C par 21–45 din (plain yoghurt; hygiene level aur packaging par depend karta hai)</td><td class="p-2 border">Shelf life studies: intervals par pH, microbiology, sensory monitor karo</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Yoghurt mein Common Defects aur Unke Causes</h3>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Defect</th>
                            <th class="p-2 border">Description</th>
                            <th class="p-2 border">Causes</th>
                            <th class="p-2 border">Remedial Measures</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Syneresis (Wheying-off)</strong></td>
                            <td class="p-2 border">Surface par ya gel ke andar pockets mein dikhne wala clear/yellowish liquid (whey)</td>
                            <td class="p-2 border">Insufficient heat treatment (low whey protein denaturation); low total solids/protein; bahut high incubation temperature (>46°C — coarse gel); over-acidification (pH<4.0); transport ke dauran set gel ka mechanical disturbance; koi stabilizer nahi</td>
                            <td class="p-2 border">Heat treatment 90–95°C/5–10 min tak badhaao; TS >14% tak fortify karo; EPS-producing cultures use karo; stabilizers add karo; set yoghurt incubation ke dauran vibration se bachaao</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Weak/Thin Body</strong></td>
                            <td class="p-2 border">Gel mein firmness ki kami; watery consistency</td>
                            <td class="p-2 border">Low total solids (<12%); inadequate heat treatment; low culture activity; bahut high incubation temperature; contamination; insufficient incubation time</td>
                            <td class="p-2 border">TS fortify karo; heat treatment badhaao; culture activity verify karo; incubation conditions optimize karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Excessive Acidity (Sour/Harsh taste)</strong></td>
                            <td class="p-2 border">pH <4.0; tez khatta taste</td>
                            <td class="p-2 border">Over-incubation (bahut lamba ya bahut high temperature); slow/insufficient cooling; high <i>L. bulgaricus</i> ratio; storage ke dauran post-acidification; storage temperature >5°C</td>
                            <td class="p-2 border">pH 4.5–4.6 par promptly cool karo; mild (low post-acidification) cultures use karo; strict cold chain (<5°C)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Flat/Insipid Flavor</strong></td>
                            <td class="p-2 border">Characteristic yoghurt aroma ki kami</td>
                            <td class="p-2 border">Low acetaldehyde production; excessive <i>S. thermophilus</i> dominance; insufficient incubation; flavor-negative strains ka use</td>
                            <td class="p-2 border">Culture ratio adjust karo (<i>L. bulgaricus</i> badhaao); high-acetaldehyde-producing strains select karo; incubation optimize karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Ropy/Slimy Texture</strong></td>
                            <td class="p-2 border">Excessively stringy, stretchy consistency</td>
                            <td class="p-2 border">Ropy strains dwara excessive EPS production</td>
                            <td class="p-2 border">Moderate/capsular EPS production wali strains select karo; culture combination adjust karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Grainy/Lumpy Texture</strong></td>
                            <td class="p-2 border">Gritty mouthfeel; stirred yoghurt mein visible protein particles</td>
                            <td class="p-2 border">Excessive heat treatment se whey protein large particles mein aggregate hona; gel breaking ke baad poor smoothing; non-uniform culture distribution; localized over-acidification</td>
                            <td class="p-2 border">Heat treatment optimize karo; proper smoothing ensure karo; inoculation ke dauran homogeneous mixing</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Yeasty/Fruity Off-Flavor</strong></td>
                            <td class="p-2 border">Fermented fruit, bread jaisa, ya alcoholic flavor</td>
                            <td class="p-2 border">Yeast contamination (common: <i>Candida</i>, <i>Kluyveromyces</i>, <i>Rhodotorula</i>); contaminated fruit preparation; poor packaging hygiene</td>
                            <td class="p-2 border">Sanitation improve karo; fruit prep ko yeast/mold ke liye test karo; packaging area hygiene improve karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Mold Growth</strong></td>
                            <td class="p-2 border">Surface par visible colonies (white, green, black)</td>
                            <td class="p-2 border">Filling ke dauran airborne mold spores; contaminated packaging material; poor cold room hygiene</td>
                            <td class="p-2 border">Filling room mein HEPA filtration; packaging ka UV treatment; cold room sanitation; potassium sorbate consider karo (legal limits ke andar)</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Blown/Swollen Packs</strong></td>
                            <td class="p-2 border">Gas production ki wajah se pack phool jaata hai</td>
                            <td class="p-2 border">Coliform contamination (CO₂ + H₂ produce karte hain); yeast fermentation (CO₂ + ethanol produce karti hai)</td>
                            <td class="p-2 border">Heat treatment effectiveness improve karo; post-contamination control; packaging seal integrity verify karo</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Bitter Taste</strong></td>
                            <td class="p-2 border">Unpleasant bitter aftertaste</td>
                            <td class="p-2 border"><i>L. bulgaricus</i> dwara excessive proteolysis (β-casein se hydrophobic bitter peptides ka formation); raw milk ka psychrotrophic contamination (heat-stable proteases); poor quality milk powder</td>
                            <td class="p-2 border"><i>L. bulgaricus</i> ratio control karo; raw milk quality improve karo; fresh SMP use karo</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Yoghurt ka Nutritional Profile aur Health Benefits</h3>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Typical Nutritional Composition (per 100g)</h4>
            <div class="overflow-x-auto mt-2">
                <table class="w-full text-left border-collapse text-sm">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Nutrient</th>
                            <th class="p-2 border">Plain Whole Milk Yoghurt</th>
                            <th class="p-2 border">Low-Fat Yoghurt</th>
                            <th class="p-2 border">Greek Yoghurt (0% fat)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-2 border">Energy (kcal)</td><td class="p-2 border">61–70</td><td class="p-2 border">50–56</td><td class="p-2 border">54–59</td></tr>
                        <tr><td class="p-2 border">Protein (g)</td><td class="p-2 border">3.5–5.0</td><td class="p-2 border">4.0–5.5</td><td class="p-2 border">8.0–10.0</td></tr>
                        <tr><td class="p-2 border">Fat (g)</td><td class="p-2 border">3.0–3.5</td><td class="p-2 border">1.0–1.8</td><td class="p-2 border">0–0.7</td></tr>
                        <tr><td class="p-2 border">Carbohydrate (g)</td><td class="p-2 border">4.0–5.0</td><td class="p-2 border">5.0–7.0</td><td class="p-2 border">3.5–4.5</td></tr>
                        <tr><td class="p-2 border">Lactose (g)</td><td class="p-2 border">3.5–4.5</td><td class="p-2 border">3.5–5.0</td><td class="p-2 border">2.0–3.5</td></tr>
                        <tr><td class="p-2 border">Calcium (mg)</td><td class="p-2 border">120–150</td><td class="p-2 border">140–170</td><td class="p-2 border">100–130</td></tr>
                        <tr><td class="p-2 border">Phosphorus (mg)</td><td class="p-2 border">90–110</td><td class="p-2 border">100–130</td><td class="p-2 border">130–160</td></tr>
                        <tr><td class="p-2 border">Potassium (mg)</td><td class="p-2 border">155–180</td><td class="p-2 border">180–220</td><td class="p-2 border">140–160</td></tr>
                        <tr><td class="p-2 border">Riboflavin/B₂ (mg)</td><td class="p-2 border">0.14–0.20</td><td class="p-2 border">0.17–0.22</td><td class="p-2 border">0.15–0.20</td></tr>
                        <tr><td class="p-2 border">Vitamin B₁₂ (µg)</td><td class="p-2 border">0.4–0.6</td><td class="p-2 border">0.5–0.7</td><td class="p-2 border">0.6–0.8</td></tr>
                        <tr><td class="p-2 border">Folic Acid/B₉ (µg)</td><td class="p-2 border">8–18 (<i>S. thermophilus</i> se increase hota hai)</td><td class="p-2 border">10–20</td><td class="p-2 border">7–12</td></tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2 text-sm"><strong>Note:</strong> Fermentation folic acid (vitamin B₉) content ko unfermented milk se 2–10× badha deti hai, primarily <i>S. thermophilus</i> biosynthesis ki wajah se. Vitamin B₁₂ content <i>L. bulgaricus</i> dwara utilization ki wajah se halka decrease ho sakta hai.</p>

            <h4 class="text-lg font-semibold text-gray-700 mt-4 mb-2">Established aur Emerging Health Benefits</h4>
            <div class="space-y-4 mt-2">
                <div class="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                    <h5 class="font-bold text-green-800">1. Improved Lactose Digestion (Strong Evidence — EFSA approved claim)</h5>
                    <p class="text-sm mt-1">Yoghurt <strong>lactose-intolerant individuals</strong> dwara milk ke comparison mein significantly better tolerate kiya jaata hai. Iska reason ye hai: (a) Fermentation ke dauran ~20–30% lactose pehle se hydrolyzed ho chuka hota hai, (b) live <i>S. thermophilus</i> aur <i>L. bulgaricus</i> cells mein intracellular <strong>β-galactosidase</strong> hota hai jo small intestine mein release hota hai jab cells bile salts se lyse hote hain, in vivo lactose digestion jaari rakhta hai, aur (c) yoghurt ki semi-solid viscous texture gastric emptying slow karti hai, lactose digestion ke liye zyada time milta hai. EFSA Scientific Opinion (2010) ne ye health claim approve kiya: <em>"Yoghurt mein live yoghurt cultures lactose maldigestion wale individuals mein yoghurt ke lactose ka digestion improve karti hain."</em></p>
                </div>
                <div class="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                    <h5 class="font-bold text-green-800">2. Bone Health aur Calcium Bioavailability</h5>
                    <p class="text-sm mt-1">Yoghurt <strong>bioavailable calcium</strong> ka excellent source hai (~120–170 mg/100g). Yoghurt ka acidic pH calcium ko soluble, ionized form (Ca²⁺) mein rakhta hai, jisse milk ke comparison mein intestinal absorption enhance hota hai. Fermentation ke dauran release hone wale casein phosphopeptides (CPPs) calcium absorption ko aur enhance karte hain intestinal lumen mein calcium phosphate precipitation rokke. Kai epidemiological studies (meta-analyses) regular yoghurt consumption ko improved bone mineral density (BMD) aur reduced fracture risk se associate karti hain, khaas taur par postmenopausal women aur elderly populations mein.</p>
                </div>
                <div class="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                    <h5 class="font-bold text-green-800">3. Gut Health aur Microbiome Modulation</h5>
                    <p class="text-sm mt-1">Jabki <i>S. thermophilus</i> aur <i>L. bulgaricus</i> classical probiotics nahi hain (limited GI survival), ye <strong>transient beneficial effects</strong> zaroor exert karte hain: (a) Ye pathogens ke khilaf bacteriocin-like inhibitory substances (BLIS) produce karte hain, (b) ye local aur systemic immune responses stimulate karte hain (increased IgA production, enhanced NK cell activity, cytokine profiles ka modulation — increased IL-10, decreased TNF-α), (c) fermentation products (organic acids, peptides, EPS) <strong>postbiotics</strong> ki tarah kaam kar sakte hain jo resident gut microbiota ko positively modulate karte hain. Jab probiotic strains (<i>L. rhamnosus</i> GG, <i>B. lactis</i> BB-12) ke saath combine kiya jaaye, toh yoghurt ek zyada potent functional food ban jaata hai.</p>
                </div>
                <div class="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                    <h5 class="font-bold text-green-800">4. Cardiovascular Health</h5>
                    <p class="text-sm mt-1">Prospective cohort studies ki meta-analyses suggest karti hain ki yoghurt consumption (1–2 servings/day) <strong>type 2 diabetes ke reduced risk (14–28% reduction)</strong> aur blood pressure mein modest reduction se associated hai. Proposed mechanisms mein shamil hain: (a) <i>L. bulgaricus</i> proteinases dwara casein hydrolysis se <strong>bioactive peptides (ACE-inhibitory peptides)</strong> jaise VPP (Val-Pro-Pro) aur IPP (Ile-Pro-Pro) ka generation — ye peptides angiotensin-converting enzyme (ACE) ko inhibit karte hain, blood pressure kam karte hain; (b) Gut microbiome modulation ke through improved insulin sensitivity; (c) Lipid metabolism par calcium-mediated effects (insoluble calcium soaps banakar fecal fat excretion badhana). Evidence, promising hone ke baavjood, mostly observational hai.</p>
                </div>
                <div class="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                    <h5 class="font-bold text-green-800">5. Weight Management</h5>
                    <p class="text-sm mt-1">High-protein yoghurts (khaas taur par Greek yoghurt) multiple mechanisms se <strong>satiety</strong> promote karte hain: high protein content gut peptide release (GLP-1, PYY, cholecystokinin) stimulate karta hai, gastric emptying slow karta hai. Thick, viscous texture orosensory satiation mein contribute karti hai. Epidemiological data consistently yoghurt consumption ko lower BMI, smaller waist circumference, aur reduced risk of obesity se associate karta hai, haalanki observational studies se causality establish karna mushkil hai.</p>
                </div>
                <div class="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                    <h5 class="font-bold text-green-800">6. Bioactive Peptide Generation</h5>
                    <p class="text-sm mt-1">Fermentation ke dauran, <i>L. bulgaricus</i> ki proteolytic activity (PrtB proteinase ke through) caseins se numerous <strong>bioactive peptides</strong> generate karti hai. Identified bioactivities mein shamil hain: <strong>ACE-inhibitory</strong> (antihypertensive), <strong>antioxidant</strong> (radical scavenging, metal chelation), <strong>antimicrobial</strong>, <strong>immunomodulatory</strong>, <strong>opioid agonist</strong> (β-casein se casomorphins — GI motility affect kar sakte hain), aur <strong>mineral-binding</strong> (caseinophosphopeptides). In peptides ki bioavailability aur physiological significance in vivo research ka ek active area hai (bahut se absorption se pehle GI proteases dwara aur degrade ho jaate hain).</p>
                </div>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Yoghurt Processing mein Advanced aur Emerging Technologies</h3>
            <ul class="list-disc list-outside pl-5 space-y-3 text-sm mt-2">
                <li><strong>High-Pressure Processing (HPP):</strong> 400–600 MPa pressure ka application 1–10 minutes ke liye <25°C par shelf life extend karne ke liye (yeasts, molds, aur vegetative bacteria ko 3–6 log inactivate karta hai) bina heat damage ke. Live yoghurt cultures preserve hoti hain (LAB spoilage organisms se zyada barotolerant hain). Whey protein structure ko modify kar sakta hai (>200 MPa par β-Lg ka pressure-induced denaturation), potentially thermal pretreatment ki jagah le sakta hai.</li>
                <li><strong>Ultrasound-Assisted Fermentation:</strong> Low-frequency ultrasound (20–40 kHz, 2–10 W/cm²) fermentation ke dauran ya pehle apply karna fermentation time 15–30% tak reduce kar sakta hai nutrient diffusion enhance karke, cell membrane permeability badhaake, aur metabolic activity stimulate karke. Ye finer gel microstructure create karke texture bhi improve karta hai.</li>
                <li><strong>Probiotics ka Microencapsulation:</strong> Yoghurt mein add kiye gaye probiotic strains ko alginate, chitosan, whey protein, ya gellan gum microspheres (100–1000 µm) mein encapsulate kiya ja sakta hai taaki storage aur GI transit ke dauran acid damage se protect ho sakein, consumption ke point par unka survival 1–3 log badh jaata hai.</li>
                <li><strong>Membrane Technology:</strong> Yoghurt production se pehle milk ki Microfiltration (MF, 0.1–1.4 µm) initial microbial load ko 3–4 log reduce kar sakti hai, "cold pasteurization" ki tarah kaam karti hai. Nanofiltration (NF) selectively lactose remove kar sakti hai jabki minerals retain hote hain, ek reduced-lactose yoghurt base create karta hai.</li>
                <li><strong>Genomics aur Strain Selection:</strong> Whole-genome sequencing (WGS) aur comparative genomics desired traits wali strains select karne ke liye use hoti hain: high EPS production, specific flavor profiles (high acetaldehyde/low diacetyl ya vice versa), phage resistance (CRISPR-Cas systems), low post-acidification, aur probiotic characteristics. Yoghurt microbiomes ki metagenomics apparently simple two-species cultures mein bhi strain-level diversity reveal karti hai.</li>
                <li><strong>3D-Printed Yoghurt:</strong> Emerging food printing technology yoghurt ko complex shapes aur structures mein deposit karne ki permission deti hai, personalized nutrition aur novel product formats enable karti hai. Yoghurt ki rheological properties (yield stress, thixotropy) ise extrusion-based 3D printing ke liye suitable banati hain.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Summary — Yoghurt ki Key Differentiating Science</h3>
                <ul class="list-disc list-outside pl-5 space-y-2 text-sm">
                    <li>Yoghurt is defined by its <strong>specific starter culture</strong>: <i>S. thermophilus</i> + <i>L. bulgaricus</i> in proto-cooperative symbiosis.</li>
                    <li>The <strong>high heat treatment</strong> (90–95°C/5–10 min) denatures whey proteins, enabling their interaction with casein micelles via <strong>thiol-disulfide exchange</strong>, creating a stronger gel with less syneresis.</li>
                    <li><strong>Acid-induced gelation</strong> at pH 4.6 (casein isoelectric point) creates the characteristic semi-solid texture through casein micelle aggregation.</li>
                    <li>Flavor is determined by the balance of <strong>acetaldehyde</strong> (yoghurt aroma), <strong>diacetyl</strong> (buttery), and <strong>lactic acid</strong> (sour).</li>
                    <li><strong>EPS</strong> produced by starter cultures provide natural thickening and water-binding.</li>
                    <li><strong>Three CCPs</strong> in HACCP: heat treatment (pathogen kill), incubation (timely acidification), and cooling (preventing post-acidification and contamination growth).</li>
                    <li>Yoghurt offers <strong>proven health benefits</strong>: improved lactose digestion (EFSA-approved), enhanced calcium bioavailability, generation of bioactive peptides, and potential benefits for cardiovascular and metabolic health.</li>
                </ul>
            </div>
        `
    }
}

  
