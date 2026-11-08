export const infantFormulaContent = {
    en: {
        title: "Baby Food & Infant Formula Processing",
        subTopics: {
            "stage1-formula": {
                title: "A. Infant Milk Formula (Stage 1: 0–6 Months) - Humanized Milk",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. Introduction & The Paradigm of "Humanization" (Maternalization)</h3>
                    <p>Infant Milk Formula (IMF), designated internationally as <strong>Stage 1 Infant Formula (0 to 6 months of age)</strong>, is an advanced, bio-chemically engineered breast milk substitute. It is formulated to satisfy 100% of the physiological, metabolic, and nutritional requirements of neonates and young infants during the critical first half-year of extrauterine life when maternal breastfeeding is medically contraindicated, unavailable, or insufficient.</p>
                    <p class="mt-2">Unmodified bovine (cow or buffalo) milk is fundamentally unsuitable, nephrotoxic, and physiologically hazardous if fed directly to infants under 12 months. Raw or standard bovine milk has evolved biologically to support the rapid skeletal and muscular development of a quadrupedal calf (which doubles its birth weight in ~45 days), whereas human milk has evolved to support extraordinary brain and central nervous system development in a bipedal human infant (which doubles its birth weight slowly in ~180 days). Consequently, bovine milk contains:</p>
                    <ul class="list-disc list-inside space-y-1 ml-4 mt-2">
                        <li><strong>Excessive crude protein (3.2–3.5% vs. 0.9–1.2% in human milk):</strong> Generating toxic levels of blood urea nitrogen (BUN) and hyperaminoacidemia.</li>
                        <li><strong>An inverse whey-to-casein ratio (20:80 vs. 60:40 in mature human milk):</strong> Dominated by calcium-sensitive $\\alpha_{s1}$-casein, which precipitates into dense, rubbery, indigestible curds under neonatal gastric conditions.</li>
                        <li><strong>An overwhelming mineral and electrolyte concentration (Ash 0.75% vs. 0.20%):</strong> Resulting in a dangerously high <strong>Potential Renal Solute Load (PRSL > 300 mOsm/L)</strong> that vastly exceeds the excretory capacity of immature neonatal kidneys.</li>
                        <li><strong>A defective lipid profile:</strong> High in saturated long-chain fatty acids with palmitic acid esterified at the sn-1 and sn-3 positions (forming insoluble calcium soaps that cause severe constipation and hypocalcemia), with virtually zero docosahexaenoic acid (DHA) or arachidonic acid (ARA).</li>
                    </ul>
                    <p class="mt-2">In industrial dairy technology, transforming bovine milk into infant formula is known as <strong>"Humanization" (Maternalization)</strong>. This involves complete deconstruction of raw milk into base fractions, followed by precise molecular re-engineering, demineralization, micro-filtration, enzymatic structured lipid incorporation, and micro-nutrient fortification.</p>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. Detailed Biochemical Comparison: Bovine Milk vs. Human Milk vs. Stage 1 Formula</h3>
                    <div class="overflow-x-auto mt-3">
                        <table class="w-full text-left border-collapse text-xs sm:text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Nutritional Parameter</th>
                                    <th class="p-2 border">Cow Milk (Whole)</th>
                                    <th class="p-2 border">Mature Human Breast Milk</th>
                                    <th class="p-2 border">Stage 1 Infant Formula (Standard)</th>
                                    <th class="p-2 border">Scientific Rationale & Dairy Adaptation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong>Energy Density</strong></td>
                                    <td class="p-2 border">64–66 kcal/100 mL</td>
                                    <td class="p-2 border">65–70 kcal/100 mL</td>
                                    <td class="p-2 border"><strong>65–68 kcal/100 mL</strong> (500–520 kcal/100g powder)</td>
                                    <td class="p-2 border">Caloric density must match gastric volume capacity (~150 mL/kg/day intake).</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Total Protein</strong></td>
                                    <td class="p-2 border">3.2–3.5 g/100 mL</td>
                                    <td class="p-2 border">0.9–1.2 g/100 mL</td>
                                    <td class="p-2 border"><strong>1.3–1.5 g/100 mL</strong> (10.5–12.0 g/100g powder)</td>
                                    <td class="p-2 border">Bovine milk is diluted and fortified with demineralized whey to prevent neonatal metabolic acidosis.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Whey : Casein Ratio</strong></td>
                                    <td class="p-2 border">20 : 80</td>
                                    <td class="p-2 border"><strong>60 : 40</strong> (early colostrum 80:20)</td>
                                    <td class="p-2 border"><strong>60 : 40</strong> (or 70:30 in premium lines)</td>
                                    <td class="p-2 border">Addition of D90 Demineralized Whey Powder or $\\alpha$-Lactalbumin-enriched WPC-80 prevents rubbery gastric curd formation.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Dominant Casein Fraction</strong></td>
                                    <td class="p-2 border">$\\alpha_{s1}$-Casein (38%) + $\\beta$-Casein</td>
                                    <td class="p-2 border"><strong>$\\beta$-Casein (70%)</strong>; $\\alpha_{s1}$ is ABSENT (0%)</td>
                                    <td class="p-2 border">High $\\beta$-casein / low $\\alpha_{s1}$-casein</td>
                                    <td class="p-2 border">$\\alpha_{s1}$-casein forms tough clots with $Ca^{2+}$; human milk forms delicate, flocculent curds.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Dominant Whey Protein</strong></td>
                                    <td class="p-2 border">$\\beta$-Lactoglobulin (55%, absent in human)</td>
                                    <td class="p-2 border"><strong>$\\alpha$-Lactalbumin (41%)</strong> + Lactoferrin (17%)</td>
                                    <td class="p-2 border">Enriched $\\alpha$-Lactalbumin; minimized native $\\beta$-Lg</td>
                                    <td class="p-2 border">$\\alpha$-Lactalbumin provides essential L-cysteine and tryptophan while reducing allergenic burden.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Total Fat Content</strong></td>
                                    <td class="p-2 border">3.8–4.2 g/100 mL</td>
                                    <td class="p-2 border">3.6–4.4 g/100 mL</td>
                                    <td class="p-2 border"><strong>3.3–3.8 g/100 mL</strong> (26–28 g/100g powder)</td>
                                    <td class="p-2 border">Supplies 45–50% of total dietary energy; vital for lipid bilayer formation and myelin sheath.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Fatty Acid sn-2 Position</strong></td>
                                    <td class="p-2 border">40% Palmitic acid at sn-2</td>
                                    <td class="p-2 border"><strong>70–75% Palmitic acid at sn-2</strong></td>
                                    <td class="p-2 border"><strong>Structured OPO Triacylglycerols</strong> (sn-2 palmitate)</td>
                                    <td class="p-2 border">Prevents insoluble calcium soap formation, preventing stool hardening and calcium malabsorption.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>LC-PUFAs (DHA & ARA)</strong></td>
                                    <td class="p-2 border">Negligible (< 0.1%)</td>
                                    <td class="p-2 border">DHA 0.32–0.40%, ARA 0.45–0.60%</td>
                                    <td class="p-2 border"><strong>DHA: $\\ge 20$ mg/100 kcal; ARA: 1:1 to 2:1 ratio</strong></td>
                                    <td class="p-2 border">Algal oil (Crypthecodinium) and fungal oil (Mortierella alpina) addition for retinal and cerebral development.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Carbohydrates</strong></td>
                                    <td class="p-2 border">4.6–4.8 g/100 mL (100% Lactose)</td>
                                    <td class="p-2 border">7.0–7.4 g/100 mL (Lactose + HMOs)</td>
                                    <td class="p-2 border"><strong>7.0–7.5 g/100 mL</strong> (Lactose $\\ge 90\\%$)</td>
                                    <td class="p-2 border">Pure pharmaceutical $\\beta$-lactose addition; galactose essential for cerebroside synthesis in brain.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Oligosaccharides (Prebiotics)</strong></td>
                                    <td class="p-2 border">0.05 g/100 mL (Trace)</td>
                                    <td class="p-2 border">1.2–1.5 g/100 mL (2'-FL, LNnT, >200 HMOs)</td>
                                    <td class="p-2 border"><strong>0.8 g/100 mL (GOS:FOS 9:1 blend + 2'-FL)</strong></td>
                                    <td class="p-2 border">Promotes colonisation by Bifidobacterium infantis; decoy receptor preventing mucosal pathogen binding.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Total Ash / Minerals</strong></td>
                                    <td class="p-2 border">0.72–0.78% (Extremely high)</td>
                                    <td class="p-2 border">0.20–0.22%</td>
                                    <td class="p-2 border"><strong>0.25–0.30%</strong> (2.0–2.5 g/100g powder)</td>
                                    <td class="p-2 border">Electrodialysis and ion-exchange dematerialization lowers osmolar burden on kidneys.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Potential Renal Solute Load</strong></td>
                                    <td class="p-2 border">~308 mOsm/L (Dangerously high)</td>
                                    <td class="p-2 border">~93 mOsm/L</td>
                                    <td class="p-2 border"><strong>100–125 mOsm/L</strong></td>
                                    <td class="p-2 border">Prevents negative water balance, dehydration, and hypernatremic seizures during fever/heat.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. Physiological Science of Potential Renal Solute Load (PRSL)</h3>
                    <p>The concept of <strong>Potential Renal Solute Load (PRSL)</strong>, formalized by Ziegler and Fomon, is the definitive physiological criterion governing infant formula formulation. PRSL represents the sum of all dietary solutes that must be cleared by the kidneys if none were diverted for new tissue synthesis or lost via extra-renal pathways (sweat, stool).</p>
                    
                    <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-lg mt-3">
                        <p class="font-mono text-xs text-indigo-900"><strong>Ziegler-Fomon Equation for PRSL:</strong></p>
                        <p class="font-mono text-xs text-indigo-800 mt-1">PRSL (mOsm) = (Protein in g / 0.175) + Na (mmol) + Cl (mmol) + K (mmol) + Available P (mmol)</p>
                        <p class="text-xs text-indigo-700 mt-1">Where each gram of dietary protein metabolized yields approximately 5.7 mOsm of urea nitrogen ($1 / 0.175 \\approx 5.71$).</p>
                    </div>

                    <p class="mt-3"><strong>Why Neonates Cannot Tolerate High PRSL:</strong></p>
                    <ol class="list-decimal list-inside space-y-2 ml-4 mt-2">
                        <li><strong>Low Glomerular Filtration Rate (GFR):</strong> At birth, a neonate's GFR is only <strong>20 to 30 mL/min/1.73 m²</strong> (barely 20–25% of the adult value of 120 mL/min/1.73 m²). Full renal clearance maturation takes 12 to 24 months.</li>
                        <li><strong>Impaired Concentrating Ability:</strong> Neonatal loops of Henle are structurally short, and the medullary concentration gradient is poorly developed due to low expression of urea transporters (UT-A1, UT-A3) and aquaporin-2 water channels. Consequently, a newborn's maximal urinary concentrating capacity is capped at <strong>600 to 700 mOsm/kg H₂O</strong> (compared to 1,200 to 1,400 mOsm/kg H₂O in adults).</li>
                        <li><strong>Risk of Hypernatremic Dehydration:</strong> When fed unmodified cow milk (PRSL > 300 mOsm/L), the infant kidney must obligate ~500 mL of water per liter of intake simply to excrete the urea and electrolyte load. Under conditions of elevated ambient temperature, fever, or mild gastroenteritis, insensible water loss through the skin and lungs exceeds intake, plunging the infant into <strong>hypernatremic dehydration, oliguria, hyperkalemia, and renal venous thrombosis</strong>.</li>
                        <li><strong>Engineering Solution in Dairy Processing:</strong> By utilizing <strong>D90 Demineralized Whey (90% demineralized via cross-flow electrodialysis and strong cation/anion exchange resins)</strong>, the ash content is slashed from 8.5% down to < 1.0%, keeping the final reconstituted formula PRSL safely within <strong>100–125 mOsm/L</strong>.</li>
                    </ol>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. Casein Micelle Ultrastructure, Curd Tension & Gastric Coagulation Kinetics</h3>
                    <p>The biophysical behavior of milk protein inside the infant stomach dictates gastric emptying rates, peptide digestion kinetics, and gastrointestinal comfort.</p>

                    <p class="mt-2"><strong>The Molecular Difference in Casein Micelles:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Bovine Casein Micelles:</strong> Have a diameter of 150–250 nm and are composed of $\\alpha_{s1}$-casein (38%), $\\alpha_{s2}$-casein (10%), $\\beta$-casein (36%), and $\\kappa$-casein (13%), cemented together by nanoclusters of <strong>Colloidal Calcium Phosphate (CCP, ~6.5% of micellar dry weight)</strong>. The high density of phosphoserine residues on $\\alpha_{s1}$-casein makes it violently sensitive to calcium precipitation.</li>
                        <li><strong>Human Milk Casein Micelles:</strong> Are smaller (mean diameter 50–70 nm), possess substantially less CCP (only ~1.5%), and <strong>completely lack $\\alpha_{s1}$-casein</strong>. They are dominated by $\\beta$-casein (70%), which possesses high hydrophobicity and forms loose, flexible, porous micellar structures.</li>
                    </ul>

                    <p class="mt-3"><strong>Gastric Digestion Biophysics:</strong></p>
                    <p>In a neonate, basal gastric acid secretion is low; the postprandial gastric pH stabilizes at <strong>pH 4.5 to 5.5</strong> (buffered by milk proteins), and gastric pepsin output is less than 15% of adult levels. Under these weak acidic conditions:</p>
                    <ul class="list-disc list-inside space-y-2 ml-4 mt-2">
                        <li><strong>Cow Milk Clotting:</strong> $\\alpha_{s1}$-casein undergoes immediate cross-linking in the presence of free calcium, forming a hard, dense, elastic rubbery curd ball with a <strong>Curd Tension > 50–70 grams</strong> (measured by Hill's Curd-O-Meter). This dense matrix exhibits strong syneresis, squeezing out fluid and trapping unhydrolyzed proteins. Gastric emptying is severely delayed (> 4–6 hours), causing abdominal distension, colic, gastroesophageal reflux (GERD), and vomiting.</li>
                        <li><strong>Humanized Formula (60:40 Whey:Casein) Clotting:</strong> With $\\alpha$-lactalbumin-dominant whey and diluted bovine casein, the curd tension drops to <strong>< 5 grams (Zero-Tension Curd)</strong>. In the infant stomach, it forms fine, soft, flocculent micro-precipitates with high specific surface area. Gastric pepsin and duodenal trypsin rapidly penetrate the porous matrix, achieving complete gastric clearance in <strong>90 to 120 minutes</strong> (identical to breast milk).</li>
                    </ul>

                    <p class="mt-3"><strong>Amino Acid Profile Engineering:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>L-Cysteine as a Conditionally Essential Amino Acid:</strong> Neonates exhibit very low hepatic activity of the enzyme <strong>cystathionase</strong> (the transsulfuration pathway enzyme that converts methionine to cysteine). Cow milk has a high methionine:cysteine ratio (3:1). Supplementing with $\\alpha$-lactalbumin (which contains 8 cysteine residues forming 4 intramolecular disulfide bonds) guarantees adequate bioavailable cysteine for glutathione synthesis and liver detoxification.</li>
                        <li><strong>Taurine (2-Aminoethanesulfonic Acid):</strong> Neonates lack the enzyme <strong>cysteinesulfinate decarboxylase (CSAD)</strong> required to synthesize taurine. Taurine is mandatory in infant formula (Codex min. 40 mg/100 kcal) because neonates conjugate bile acids exclusively with taurine (taurocholic acid) rather than glycine. Without dietary taurine, lipid digestion and micellar fat absorption drop drastically, and retinal photoreceptor development is impaired.</li>
                        <li><strong>Tryptophan & Neurotransmission:</strong> $\\alpha$-Lactalbumin is the richest natural source of tryptophan (5.8% of amino acid sequence). Tryptophan crosses the blood-brain barrier via large neutral amino acid transporters (LNAAT) to synthesize <strong>serotonin (5-hydroxytryptamine) and melatonin</strong>, which regulate neonatal sleep-wake circadian rhythms and neurological mood stabilization.</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">5. Stereospecific Lipid Biochemistry: sn-2 Positional Isomerism & Insoluble Calcium Soaps</h3>
                    <p>The nutritional and physical efficacy of fats in infant formula does not depend solely on fatty acid chain length or degree of unsaturation; it is strictly governed by the <strong>stereospecific numbering (sn)</strong> of fatty acids on the glycerol backbone of triacylglycerols (TAGs).</p>

                    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-3">
                        <p class="text-xs text-amber-900 font-semibold">The Calcium Saponification Reaction in the Infant Gut:</p>
                        <p class="font-mono text-xs text-amber-800 mt-1">2 Free Palmitic Acid (C₁₅H₃₁COOH) + Ca²⁺ (ionized) ──[pH 7.0–7.5]──> Ca(C₁₅H₃₁COO)₂ ↓ (Insoluble Calcium-Palmitate Soap) + 2 H⁺</p>
                        <p class="text-xs text-amber-800 mt-1">Melting point of free Palmitic Acid = 63°C (solid at infant body temp 37°C); Calcium Palmitate Soap is an unabsorbable, wax-like solid stone.</p>
                    </div>

                    <p class="mt-3"><strong>The Mechanism of Saponification with Standard Vegetable Oils (Palm Olein):</strong></p>
                    <ol class="list-decimal list-inside space-y-2 ml-4 mt-2">
                        <li>In standard vegetable oils (such as palm oil, used historically to provide palmitic acid $C_{16:0}$), over <strong>80–85% of palmitic acid is esterified at the outer sn-1 and sn-3 positions</strong> of the glycerol molecule.</li>
                        <li>Infant digestion of fat relies on <strong>gastric lipase</strong> and <strong>pancreatic 1,3-specific lipase</strong>. These lipases selectively hydrolyze the ester bonds at the <strong>sn-1 and sn-3 positions</strong>, leaving a 2-monoacylglycerol (2-MAG) intact.</li>
                        <li>When palm oil is digested, palmitic acid is released as <strong>Free Palmitic Acid (FFA)</strong>. At intestinal luminal pH (7.0–7.5), free palmitic acid readily ionizes and binds with dietary calcium ions ($Ca^{2+}$), forming insoluble <strong>Calcium-Palmitate Soaps</strong>.</li>
                        <li><strong>Clinical Consequences:</strong> These insoluble soaps precipitate in the gut, causing <strong>severe constipation, dry hard stools (scybala), abdominal colic</strong>, and massive fecal excretion of both fat (up to 20% energy loss) and calcium (up to 30–40% loss of dietary calcium, leading to reduced bone mineral content).</li>
                    </ol>

                    <p class="mt-3"><strong>The Human Milk & Structured Lipid (sn-2 Palmitate / OPO) Advantage:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li>In mature human milk, <strong>70 to 75% of palmitic acid is located at the internal sn-2 position</strong> of the triacylglycerol, while unsaturated oleic acid ($C_{18:1}$) occupies the sn-1 and sn-3 positions (creating <strong>1,3-dioleoyl-2-palmitoyl glycerol or OPO</strong>).</li>
                        <li>When OPO is hydrolyzed by pancreatic lipase, the sn-1 and sn-3 oleic acids are released as free oleic acids (which have a low melting point of 13°C and do not form insoluble soaps at body temperature).</li>
                        <li>The palmitic acid remains esterified as <strong>sn-2 Monopalmitin (2-MAG)</strong>. 2-Monopalmitin has amphiphilic surfactant properties; it is spontaneously solubilized by bile salts into mixed micelles and rapidly absorbed across the enterocyte microvilli via passive diffusion and fatty acid transport proteins (FATP-4).</li>
                        <li><strong>Industrial Synthesis:</strong> Modern infant formulas use structured lipids (OPO / Betapol), manufactured via <strong>enzymatic transesterification</strong> of tripalmitin with high-oleic sunflower oil fatty acids using an immobilized, 1,3-position-specific lipase from <em>Rhizomucor miehei</em>. This achieves soft stools, normalized stool frequency, improved infant sleep, and enhanced bone mineral accretion.</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">6. LC-PUFA Biochemistry: DHA ($22:6\\,n-3$) and ARA ($20:4\\,n-6$) Pathways</h3>
                    <p>Long-Chain Polyunsaturated Fatty Acids (LC-PUFAs) containing 20 or more carbons and two or more double bonds are absolute structural determinants of brain synaptic membranes and retinal photoreceptors.</p>

                    <p class="mt-2"><strong>The Hepatic Desaturase Bottleneck:</strong></p>
                    <p>The human body possesses two essential parent fatty acid cascades:</p>
                    <ul class="list-disc list-inside space-y-1 ml-4 mt-2">
                        <li><strong>&omega;-6 Series:</strong> Linoleic Acid (LA, 18:2 n-6) &rarr; [&Delta;6-desaturase] &rarr; &gamma;-Linolenic Acid (18:3) &rarr; [elongase] &rarr; Dihomo-&gamma;-linolenic (20:3) &rarr; [&Delta;5-desaturase] &rarr; <strong>Arachidonic Acid (ARA, 20:4 n-6)</strong>.</li>
                        <li><strong>&omega;-3 Series:</strong> &alpha;-Linolenic Acid (ALA, 18:3 n-3) &rarr; [&Delta;6-desaturase] &rarr; Stearidonic (18:4) &rarr; [elongase] &rarr; Eicosatetraenoic &rarr; [&Delta;5-desaturase] &rarr; EPA (20:5) &rarr; [elongase] &rarr; Docosapentaenoic &rarr; [&Delta;6-desaturase / &beta;-oxidation] &rarr; <strong>Docosahexaenoic Acid (DHA, 22:6 n-3)</strong>.</li>
                    </ul>
                    <p class="mt-2">In infants born at term and especially pre-term, the expression and catalytic activity of hepatic <strong>$\\Delta 6$-desaturase and $\\Delta 5$-desaturase</strong> enzymes are extremely immature. Endogenous synthesis of DHA and ARA from parent vegetable oils (canola/soy) is quantitatively insufficient to meet the brain growth spurt (during which brain tissue accrues ~15 mg of DHA per week during the third trimester and early infancy).</p>

                    <p class="mt-3"><strong>Biological Functions & Regulatory Limits:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>DHA in Retinal Photoreceptors:</strong> DHA accounts for over <strong>50% of the total phospholipid fatty acids</strong> in the outer segment disc membranes of retinal rod cells. DHA provides exceptional membrane fluidity, enabling rapid conformational transition of the visual pigment <strong>rhodopsin to metarhodopsin II</strong> upon photon absorption, directly enhancing visual acuity (Teller visual acuity cards testing).</li>
                        <li><strong>ARA in Cerebral Vasculature & Membrane Growth:</strong> ARA represents 15% of the total fatty acids in the cerebral cortex. It is the mandatory precursor for 2-series prostaglandins and 4-series leukotrienes, modulating cerebral blood flow, synaptic long-term potentiation (memory), and immune cell proliferation.</li>
                        <li><strong>Codex Alimentarius & FSSAI Mandate:</strong> Formula must supply preformed DHA at a minimum of <strong>20 mg/100 kcal (0.3–0.5% of total fatty acids)</strong>. Crucially, when DHA is added, <strong>ARA must be added in at least a 1:1 to 2:1 ratio</strong>. Supplying DHA without ARA depletes tissue ARA reserves, leading to depressed immune cell membrane responsiveness and compromised infant growth.</li>
                        <li><strong>Industrial Sourcing:</strong> Sourced from pure microalgal oil (<em>Crypthecodinium cohnii</em> or <em>Schizochytrium sp.</em>) for DHA and non-pathogenic fungal oil (<em>Mortierella alpina</em>) for ARA, avoiding marine fish oil to eliminate heavy metal (methylmercury, PCB) risks and fishy off-odors.</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">7. Carbohydrate Biophysics & Microbiome Engineering: Lactose vs HMOs & GOS/FOS</h3>
                    <p>Carbohydrates supply 40 to 45% of total energy in infant nutrition while directing intestinal colonization and brain development.</p>

                    <p class="mt-2"><strong>The Biological Imperative of Lactose:</strong></p>
                    <p>Under FSSAI and Codex standards, <strong>Lactose must constitute at least 90% (min 4.5 g/100 kcal) of total carbohydrates</strong> in Stage 1 formula. Lactose is a disaccharide of $\\beta$-D-galactose and $\\alpha$-D-glucose linked via a $\\beta(1\\rightarrow4)$ glycosidic bond.</p>
                    <ul class="list-disc list-inside space-y-2 ml-4 mt-2">
                        <li><strong>The Galactose-Cerebroside Axis:</strong> Intestinal brush-border lactase-phlorizin hydrolase (LPH) cleaves lactose into glucose and galactose. Absorbed galactose is transported via the portal vein to hepatocytes and brain oligodendrocytes, entering the <strong>Leloir Pathway</strong> (Galactokinase $\\rightarrow$ Galactose-1-phosphate uridylyltransferase / GALT $\\rightarrow$ UDP-galactose). UDP-galactose is the obligate precursor for synthesizing <strong>galactosylceramides, sulfatides, and gangliosides</strong>, which form the protective myelin insulation wrapping cerebral axons. Replacing lactose with maltodextrin or corn syrup in healthy term infants deprives the developing brain of this structural galactose substrate.</li>
                        <li><strong>Physiological Colon Fermentation:</strong> A physiological fraction of ingested lactose escapes small intestinal absorption and reaches the ileocecal junction. There, colonic <em>Bifidobacterium</em> species ferment lactose into <strong>L-lactic acid and Short-Chain Fatty Acids (SCFAs: acetate, propionate, butyrate)</strong>. This reduces intestinal luminal pH to <strong>pH 4.5–5.2</strong>, creating an inhospitable, acidic barrier that suppresses enteropathogens (<em>Escherichia coli</em>, <em>Clostridium difficile</em>, <em>Shigella</em>) and increases calcium and magnesium bioavailability via ionization.</li>
                    </ul>

                    <p class="mt-3"><strong>Human Milk Oligosaccharides (HMOs) & Prebiotic GOS/FOS:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>The 2'-Fucosyllactose (2'-FL) Decoy Receptor Mechanism:</strong> 2'-FL is a trisaccharide (L-fucose linked $\\alpha(1\\rightarrow2)$ to D-galactose of lactose). Pathogenic mucosal bacteria (e.g., <em>Campylobacter jejuni</em>, enteropathogenic <em>E. coli</em>) and noroviruses recognize and bind to mucosal epithelial glycan receptors via surface fucose-binding adhesins. Soluble 2'-FL in formula acts as a <strong>molecular decoy</strong>; pathogens bind to the floating 2'-FL in the lumen instead of the intestinal wall and are harmlessly swept out in the feces.</li>
                        <li><strong>Prebiotic GOS:FOS (9:1 Blend):</strong> Galacto-oligosaccharides (GOS, degree of polymerization 2–8) synthesized via enzymatic transgalactosylation of lactose, combined with high-molecular-weight Fructo-oligosaccharides (FOS / chicory inulin, DP 10–60) in a <strong>9:1 ratio</strong>. This mimics the molecular size distribution of human milk oligosaccharides, stimulating the growth of beneficial <em>Bifidobacterium infantis</em> throughout both the proximal and distal colon.</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">8. Industrial Manufacturing Flowchart: 13-Step Process with Critical Control Points</h3>

    <div class="my-6 p-3 sm:p-5 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 rounded-2xl border-2 border-indigo-200/80 shadow-sm">
        <div class="flex items-center justify-between gap-2 flex-wrap pb-3 mb-4 border-b border-indigo-100">
            <div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm">
                        ⚡
                    </span>
                    <h4 class="!m-0 !p-0 !bg-none !border-none text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">
                        Stage 1 Infant Milk Formula (0–6 Months) — Industrial Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">Complete 13-Step Automated Continuous Manufacturing Process with Integrated PRPs, oPRPs, and CCPs</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                13-STEP CCP FLOWCHART
            </span>
        </div>
        
        <div class="flowchart-steps-wrapper max-w-3xl mx-auto">
            
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-blue-200 bg-blue-50/30 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-blue-600 text-white">
                    STEP 01
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-blue-950 font-bold">
                    Raw Milk Reception & High-Hygiene Screening
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: RAW INTAKE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Acceptance of Grade-A bovine milk strictly at $\\le 4^\\circ\\text{C}$. Immediate Charm Trio testing for antibiotic residues (Beta-lactams, Tetracyclines < 0.004 ppm), Aflatoxin M1 < 0.025 $\\mu$g/kg, and spore count < 50 CFU/mL.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≤ 4.0°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Antibiotics</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.0 ppm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Aflatoxin M1</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.025 µg/kg</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Total Spores</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 50 CFU/mL</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 02
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    Centrifugal Clarification, Bactofugation & Separation
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">PHYSICAL CLEANING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Clarification removes somatic cells and dirt. Hermetic bactofugation at 9,000×g removes 98.5% of heat-resistant anaerobic bacterial spores (Bacillus cereus and Clostridium) without thermal denaturation of native whey proteins.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Separator Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">55°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Bactofuge G-Force</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">9,000 × g</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Spore Reduction</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 98.5%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Fat Removal</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">To 0.05% Skim</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-amber-300 bg-amber-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-amber-500 text-white">
                    STEP 03
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-amber-950 font-bold">
                    Wet Recombination & Demineralized Whey Dosing
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: PROTEIN RATIO</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Skim milk is pumped into high-shear tri-blender tanks. D90 Demineralized Whey Powder (slashed ash < 1.0%) and pharmaceutical-grade beta-lactose are injected to precisely lock the Whey:Casein ratio to exactly 60:40.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Whey : Casein</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60 : 40</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Ash Reduction</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">90% Removed</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Carbohydrate</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">7.2% Lactose</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Target Solids</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">18–20% TS</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 04
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    Lipid Phase Preparation & Structured OPO Dosing
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">LIPID SYSTEM</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">In an auxiliary jacketed vessel at 60°C under nitrogen, the specialized lipid blend is prepared: Structured sn-2 OPO triacylglycerol, high-oleic sunflower, coconut, soybean, fungal ARA oil, and algal DHA oil with fat-soluble vitamins.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Oil Blend Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Atmosphere</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% N₂ Blanket</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">sn-2 Palmitate</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 70% at sn-2</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">DHA : ARA</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1 : 1.5 ratio</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 05
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    High-Shear In-line Emulsification & Pre-heating
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">EMULSION STAGE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">The lipid phase is metered into the aqueous protein-lactose stream using an in-line micro-dosing pump. A Silverson high-shear rotor-stator breaks coarse oil droplets down to d50 < 5 µm while preheating to 65°C.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Shear Speed</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">3,000 RPM</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Droplet Size</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">d50 < 5 µm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">In-line Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">65°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Deaeration</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Under Vacuum</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 06
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Two-Stage High-Pressure Homogenization
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: SUB-MICRON EMULSION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">High-pressure hydraulic shearing and cavitation. First stage at 180–200 bar shatters fat globules down to d32 < 0.8 µm. Second stage at 40–50 bar breaks clusters. Whey proteins instantly adsorb onto the fat interface, preventing free fat release.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">1st Stage Press</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">180–200 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">2nd Stage Press</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">40–50 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Fat Globule d32</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.8 µm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Free Fat Risk</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Eliminated</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 07
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Thermal Pasteurization / Direct Steam Injection
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: THERMAL KILL</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Critical thermal pasteurization via regenerative plate heat exchanger at 105°C for 30s (or DSI 125°C for 5s). Delivers a >12D log-reduction of Cronobacter sakazakii, Salmonella, and Listeria with minimal whey denaturation (< 15%).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Pasteurizer Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">105.0°C ± 0.5°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Holding Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">30 seconds</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Log Reduction</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 12D Kill</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">FDV Divert Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 104.5°C</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 08
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    Multi-Stage Falling Film Vacuum Evaporation
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">CONCENTRATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">4-effect falling film evaporator with MVR (Mechanical Vapor Recompression). Concentrates milk from 18% up to 48–52% Total Solids under high vacuum (52°C to 70°C) without heat scorching, lysine destruction, or Maillard browning.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Vacuum Level</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">-0.85 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Max Product Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">70°C down to 52°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Target Density</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">48–52% TS</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Steam Economy</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.2 kg steam/kg H₂O</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 09
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Vacuum Deaeration & High-Pressure Atomization
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: ATOMIZATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Vacuum deaeration extracts dissolved micro-air bubbles. High-pressure triplex plunger pump feeds concentrate at 180–220 bar through tungsten-carbide swirl nozzles, creating uniform droplet mist (Sauter mean diameter 60–90 µm).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Nozzle Pressure</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">180–220 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Droplet d32</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60–90 µm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Deaeration Vac</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">-0.90 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Concentrate Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">68°C</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 10
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    3-Stage Tall-Form Spray Drying & Agglomeration
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">DRYING STAGE 1 & 2</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Stage 1: Droplets meet HEPA-filtered hot air (Inlet 185–195°C, Exhaust 82–85°C) inside a tall-form drying tower. Moisture flashes off in 15s. Powder falls into Stage 2 (Internal Static Fluid Bed at 70°C). Fines are recycled to form agglomerates.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Air Inlet Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">185°C – 195°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Air Exhaust Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">82°C – 85°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Internal Bed Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">70°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Moisture Exit</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">~4.5%</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 11
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    External Fluid Bed Lecithination & Conditioning
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">INSTANTIZATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Stage 3: Plug-flow vibrating fluid bed. In the first zone, 0.2–0.3% fractionated sunflower lecithin is aerosolized onto warm granules to slash contact angle to < 15°. The second zone cools powder to 20°C using chilled dehumidified air.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Lecithin Dosing</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.2–0.3% w/w</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Final Moisture</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">2.5% – 2.8%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cooling Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">20°C – 22°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Wettability</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 10 seconds</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 12
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    In-line Sifting, 12,000 Gauss Magnet & Metal Detection
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-4: FOREIGN BODY CONTROL</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Powder passes through a sanitary rotary sifter (1.0 mm mesh) and continuous 12,000 Gauss Rare-Earth Neodymium magnetic grate. Checked by dual-frequency metal detectors sensitive to ≥ 0.8 mm Fe, ≥ 1.0 mm Non-Fe, and ≥ 1.2 mm SS 316.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Sifter Mesh</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.0 mm Stainless</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Magnetic Field</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12,000 Gauss</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Ferrous Detect</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 0.8 mm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">SS 316 Detect</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 1.2 mm</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 13
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Vacuum Nitrogen Flushing (MAP) & Can Double-Seaming
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-5: MAP OXYGEN CONTROL</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Inside ISO Class 7 cleanroom under positive pressure (+30 Pa). Can headspace is evacuated to -0.95 bar and flushed with 98% N₂ + 2% CO₂ gas. Double-seam hermetic closure. Residual oxygen verified at < 1.0% to prevent oxidation for 24 months.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Vacuum Depth</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">-0.95 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Flush Gas</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">98% N₂ + 2% CO₂</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Residual O₂</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.0% (target <0.5%)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Shelf Life</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">24 Months</strong></div></div>
    </div>
    
        </div>
    </div>
    
                    <p class="text-xs text-gray-600 mb-3">Below is the complete, industrial-grade engineering flowchart for Stage 1 Infant Formula powder manufacturing, indicating all Prerequisites (PRP), Operational PRPs (oPRP), and Critical Control Points (CCP).</p>

                    <div class="space-y-3 font-sans text-xs">
                        <div class="p-3 bg-white border-l-4 border-blue-500 rounded-r-lg shadow-sm">
                            <strong class="text-blue-900 block text-sm">Step 1: Raw Milk Reception & High-Hygiene Verification (PRP-1)</strong>
                            <p class="text-gray-700 mt-1">Acceptance only of Grade-A bovine milk tested negative for antibiotic residues (Beta-lactams, Tetracyclines < 0.004 ppm via Charm Trio test), total spore count < 50 CFU/mL, Aflatoxin M1 < 0.025 $\\mu$g/kg, and temperature maintained strictly at $\\le 4^\\circ\\text{C}$.</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-indigo-500 rounded-r-lg shadow-sm">
                            <strong class="text-indigo-900 block text-sm">Step 2: Centrifugal Clarification, Bactofugation & Fat Separation</strong>
                            <p class="text-gray-700 mt-1">Hermetic centrifugal separators at $55^\\circ\\text{C}$ separate raw milk into skim milk and heavy cream. A two-stage bactofuge eliminates $98.5\\%$ of anaerobic bacterial spores (<em>Bacillus cereus</em> and <em>Clostridium</em>) via high centrifugal g-force ($9,000\\times g$) without thermal denaturation.</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-teal-500 rounded-r-lg shadow-sm">
                            <strong class="text-teal-900 block text-sm">Step 3: Wet Recombination & Protein Ratio Standardization (oPRP-1)</strong>
                            <p class="text-gray-700 mt-1">Skim milk is pumped into high-shear tri-blender tanks. D90 Demineralized Whey Powder (or ultrafiltrated liquid whey) is precisely injected to reset the <strong>Whey:Casein ratio to exactly 60:40</strong>. Pharmaceutical-grade $\\beta$-lactose is added to achieve 7.2% carbohydrate content.</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-amber-500 rounded-r-lg shadow-sm">
                            <strong class="text-amber-900 block text-sm">Step 4: Oil Phase Preparation & Structured Lipid Dosing</strong>
                            <p class="text-gray-700 mt-1">In an auxiliary jacketed vessel at $60^\\circ\\text{C}$, the specialized oil blend is prepared: Structured sn-2 OPO lipid, high-oleic sunflower oil, coconut oil (providing lauric acid $C_{12:0}$), soybean oil, fungal ARA oil (<em>Mortierella alpina</em>), and algal DHA oil (<em>Crypthecodinium cohnii</em>). Fat-soluble vitamins (A, D3, E, K1) and natural antioxidant mixed tocopherols are dissolved.</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-orange-500 rounded-r-lg shadow-sm">
                            <strong class="text-orange-900 block text-sm">Step 5: High-Shear Emulsification & Pre-heating</strong>
                            <p class="text-gray-700 mt-1">The lipid phase is dosed into the aqueous protein-lactose stream using an in-line micro-dosing pump under a nitrogen blanket. A high-shear rotor-stator mixer (Silverson type) shears the coarse emulsion down to an oil droplet size of $d_{50} < 5\\,\\mu\\text{m}$, preheating the mixture to $65^\\circ\\text{C}$.</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-emerald-500 rounded-r-lg shadow-sm">
                            <strong class="text-emerald-900 block text-sm">Step 6: Two-Stage High-Pressure Homogenization (CCP-2)</strong>
                            <p class="text-gray-700 mt-1">The emulsion is subjected to high-pressure homogenization: <strong>First stage at 180–200 bar</strong> (hydraulic shearing and cavitation breaks oil droplets down to $d_{32} < 0.8\\,\\mu\\text{m}$), followed by <strong>Second stage at 40–50 bar</strong> (breaks cluster aggregates). Sub-micron droplets are instantly coated by whey proteins, preventing coalescence and eliminating free surface fat.</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-red-500 rounded-r-lg shadow-sm">
                            <strong class="text-red-900 block text-sm">Step 7: Thermal Pasteurization / Direct Steam Injection (CCP-1)</strong>
                            <p class="text-gray-700 mt-1"><strong>Critical Control Point 1:</strong> Thermal processing through a regenerative plate heat exchanger (PHE) at <strong>$105^\\circ\\text{C}$ for 30 seconds</strong> (or Direct Steam Injection DSI at $125^\\circ\\text{C}$ for 5 seconds). Ensures a $>12\\text{D}$ log-reduction of vegetative pathogens (including <em>Cronobacter sakazakii</em>, <em>Salmonella</em>, and <em>Listeria</em>) and inactivates native lipases/proteases with minimal whey protein denaturation ($< 15\\%$ denaturation).</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-cyan-500 rounded-r-lg shadow-sm">
                            <strong class="text-cyan-900 block text-sm">Step 8: Multi-Stage Falling Film Vacuum Evaporation</strong>
                            <p class="text-gray-700 mt-1">Thermal concentration in a 4-effect falling film evaporator with Mechanical Vapor Recompression (MVR). The concentrate boils under high vacuum ($70^\\circ\\text{C}$ down to $52^\\circ\\text{C}$ in the final effect) to concentrate the solids from $18\\%$ up to <strong>$48–52\\%$ Total Solids (TS)</strong> without Maillard browning or heat scorching.</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-purple-500 rounded-r-lg shadow-sm">
                            <strong class="text-purple-900 block text-sm">Step 9: Concentrate Deaeration & High-Pressure Atomization (CCP-3)</strong>
                            <p class="text-gray-700 mt-1">The concentrate is deaerated under vacuum to remove entrained micro-air bubbles (which cause particle hollow cores and fat oxidation). It is fed by a high-pressure piston pump at <strong>150 to 220 bar</strong> through tungsten-carbide swirl-chamber pressure nozzles at the top of the tall-form spray dryer.</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-pink-500 rounded-r-lg shadow-sm">
                            <strong class="text-pink-900 block text-sm">Step 10: 3-Stage Tall-Form Spray Drying & Agglomeration</strong>
                            <p class="text-gray-700 mt-1"><strong>Stage 1:</strong> Droplets contact filtered, HEPA-sanitized hot air ($185–195^\\circ\\text{C}$ inlet, $82–85^\\circ\\text{C}$ exhaust). Moisture flashes off in 15 seconds. Powder falls into the <strong>Internal Static Fluid Bed (Stage 2)</strong> at $70^\\circ\\text{C}$ for secondary drying to $4.5\\%$ moisture. Fines from cyclones are recycled into the atomization cloud to achieve <strong>agglomeration</strong> (grape-like porous clusters).</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-rose-500 rounded-r-lg shadow-sm">
                            <strong class="text-rose-900 block text-sm">Step 11: External Vibrating Fluid Bed Conditioning & Lecithination</strong>
                            <p class="text-gray-700 mt-1"><strong>Stage 3:</strong> Powder enters a plug-flow vibrating fluid bed. In the first zone, an aerosolized solution of fractionated sunflower lecithin ($0.2–0.3\\%$) in coconut oil is sprayed onto the warm granules for instantization. The second zone cools the powder using chilled, dehumidified HEPA air down to <strong>$20–22^\\circ\\text{C}$</strong>, setting final powder moisture at <strong>$2.5–2.8\\%$</strong> (safely below glass transition temperature $T_g$).</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-red-600 rounded-r-lg shadow-sm">
                            <strong class="text-red-900 block text-sm">Step 12: In-line Sifting, Rare-Earth Magnet & Dual Metal Detection (CCP-4)</strong>
                            <p class="text-gray-700 mt-1"><strong>Critical Control Point 4:</strong> Pneumatic dense-phase vacuum conveying to a sanitary rotary sifter ($1.0\\text{ mm}$ screen). Passes through <strong>12,000 Gauss Rare-Earth Neodymium In-line Magnets</strong> and dual-frequency Metal Detectors (sensitive to $\\ge 0.8\\text{ mm}$ Ferrous, $\\ge 1.0\\text{ mm}$ Non-Ferrous, $\\ge 1.2\\text{ mm}$ Stainless Steel 316).</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-emerald-600 rounded-r-lg shadow-sm">
                            <strong class="text-emerald-900 block text-sm">Step 13: Inert Gas Flushing (MAP), Can Seaming & Vision Inspection (CCP-5)</strong>
                            <p class="text-gray-700 mt-1"><strong>Critical Control Point 5:</strong> Filling inside an ISO Class 7 cleanroom under positive pressure ($+30\\text{ Pa}$). High-speed vacuum chamber gassing: Can headspace is evacuated to $-0.95\\text{ bar}$ and flushed with <strong>$98\\%\\text{ N}_2 + 2\\%\\text{ CO}_2$</strong>. Hermetic double-seam closure. <strong>Residual Headspace Oxygen must be $< 1.0\\%$</strong> to ensure 24 months shelf-life without lipid oxidation.</p>
                        </div>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">9. Spray Drying Physics, Glass Transition ($T_g$) & Lecithination Kinetics</h3>
                    <p>The manufacture of infant formula powder is governed by the thermodynamics of amorphous state glassy systems and droplet surface chemistry.</p>

                    <p class="mt-2"><strong>The Gordon-Taylor Equation & The Danger of Stickiness:</strong></p>
                    <p>Infant formula powder consists of approximately 55–60% lactose in a metastable <strong>amorphous (glassy) state</strong>, encapsulating sub-micron fat globules and protein chains. The physical stability of amorphous powder is dictated by its <strong>Glass Transition Temperature ($T_g$)</strong>, mathematically modeled by the Gordon-Taylor equation:</p>
                    
                    <div class="p-3 bg-slate-100 border border-slate-300 rounded-lg mt-2">
                        <p class="font-mono text-xs text-slate-900">T_g (blend) = (w₁ · T_{g1} + k · w₂ · T_{g2}) / (w₁ + k · w₂)</p>
                        <p class="text-xs text-slate-700 mt-1">Where $w_1$ and $w_2$ are weight fractions of dry amorphous lactose and water; $T_{g1} = 101^\\circ	ext{C}$ (pure anhydrous lactose), $T_{g2} = -135^\\circ	ext{C}$ (pure water), and $k pprox 6.7$ is the Gordon-Taylor constant.</p>
                    </div>

                    <p class="mt-3">Water is an extraordinarily powerful <strong>plasticizer</strong>. In an infant formula powder:</p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li>At <strong>2.5% moisture</strong>, $T_g pprox 58^\\circ	ext{C}$. The powder remains in a stable, brittle, free-flowing glassy state at ambient warehouse storage ($25–30^\\circ	ext{C}$).</li>
                        <li>If powder moisture rises to <strong>4.5%</strong> (due to incomplete fluid-bed drying or package humidity permeation), the $T_g$ collapses precipitously to <strong>$38–40^\\circ	ext{C}$</strong>!</li>
                        <li>When storage or processing temperature exceeds $T_g$ ($T - T_g > 10–20^\\circ	ext{C}$), the powder transitions from the solid glassy state into a rubbery, viscous supercooled liquid state. Molecular mobility jumps by five orders of magnitude. Amorphous lactose instantly begins <strong>crystallizing into $lpha$-lactose monohydrate</strong>.</li>
                        <li><strong>Caking & Fat Leakage:</strong> As lactose crystallizes into toothed crystals, the internal microstructural matrix collapses. The protective protein wall is ruptured, and the encapsulated core fat is violently squeezed onto the particle surface. <strong>Free Surface Fat skyrockets from < 1.0% to > 12%</strong>. The powder cakes into rock-hard lumps, flowability drops to zero, and the exposed surface fat undergoes rapid auto-oxidation, destroying Vitamin A and creating fishy, painty off-flavors within weeks.</li>
                    </ul>

                    <p class="mt-3"><strong>Instantization via Lecithin Agglomeration:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li>Infant formula powder contains ~27% fat. Fat-containing milk powders naturally exhibit poor wettability because hydrophobic triacylglycerols migrate to the air-water interface during atomization, forming an external hydrophobic oil boundary with a <strong>water contact angle $	heta > 90^\\circ$</strong>. When dumped into warm water ($40^\\circ	ext{C}$), the powder floats, clumps, and forms dry-centered "fish-eyes".</li>
                        <li>To achieve <strong>Instant Reconstitution (< 10 seconds wettability without clump formation)</strong>, the powder is agglomerated in an external vibrating fluid bed and sprayed with an aerosolized solution of <strong>fractionated soy or sunflower lecithin</strong> ($0.2–0.3\\%$ by weight, dissolved in refined coconut carrier oil).</li>
                        <li><strong>Surfactant Molecular Orientation:</strong> Phosphatidylcholine molecules in lecithin are amphiphilic. Their lipophilic fatty acid tails dissolve into the surface fat patches of the powder granule, while their polar, hydrophilic zwitterionic head groups (phosphate + choline) orient outward toward the air. This dramatically slashes the contact angle to <strong>$	heta < 15^\\circ$</strong>. Water capillary action instantly draws moisture into the porous agglomerate channels, causing instantaneous wetting, rapid sinking, and uniform dispersion.</li>
                    </ul>
`
            },
            "stage2-followup": {
                title: "B. Follow-Up Formula (Stage 2: 6–12 M) & Toddler Milk (Stage 3)",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. Physiological Science of Transition at 6 Months</h3>
                    <p>Follow-up Formula (designated as <strong>Stage 2: 6 to 12 months</strong>) and Toddler Growing-Up Milk (designated as <strong>Stage 3: 1 to 3 years</strong>) are scientifically calibrated for infants undergoing weaning (complementary feeding) and rapid motor advancement.</p>

                    <p class="mt-2"><strong>The 180-Day Physiological Turning Point:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Exhaustion of Hepatic Iron Stores:</strong> During the third trimester of pregnancy, the human fetus accumulates iron in the liver bound to ferritin (~250–300 mg elemental iron). By approximately <strong>180 days (6 months) of age</strong>, this transplacental iron endowment is virtually depleted. Concurrently, human breast milk iron concentration declines from ~0.5 mg/L in early lactation down to ~0.2–0.3 mg/L, while the infant's blood volume and hemoglobin mass expand dramatically due to rapid growth. If the infant remains on unfortified cow milk or low-iron milk, <strong>Iron Deficiency Anemia (IDA)</strong> develops, causing irreversible cognitive deficits, delayed myelinogenesis, and impaired psychomotor score (Bayley scales).</li>
                        <li><strong>Elevated Caloric & Motor Demand:</strong> Between 6 and 12 months, infant physical activity (rolling, crawling, pulling to stand) doubles basal energy expenditure, necessitating higher caloric density without causing fluid overload.</li>
                        <li><strong>Maturation of Gastrointestinal & Renal Function:</strong> By 6 months, infant gastric acid secretion and pepsin output triple, pancreatic amylase and colipase activities approach adult values, and the glomerular filtration rate (GFR) reaches 60–80% of adult capacity. The infant can safely digest a denser protein matrix and tolerate a slightly higher renal solute load.</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. Iron Biochemistry & The Pro-Oxidant Fenton Reaction Dilemma</h3>
                    <p>Fortifying milk powder with iron presents one of the most difficult challenges in food science due to iron's dual valency and catalytic oxidation potential.</p>

                    <div class="p-3 bg-red-50 border border-red-200 rounded-lg mt-3">
                        <p class="text-xs text-red-900 font-semibold">The Fenton Reaction in Dairy Powders:</p>
                        <p class="font-mono text-xs text-red-800 mt-1">Fe²⁺ (Ferrous) + H₂O₂ (or lipid hydroperoxides LOOH) ───> Fe³⁺ (Ferric) + OH• (Hydroxyl Free Radical) + OH⁻</p>
                        <p class="text-xs text-red-700 mt-1">The hydroxyl radical (OH•) is the most reactive radical known; it instantly attacks polyunsaturated fatty acids (PUFAs), triggering rapid rancidity and destruction of Vitamin A and E.</p>
                    </div>

                    <p class="mt-3"><strong>The Iron Trap:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Ferrous Salts ($FeSO_4$):</strong> Have high biological availability (~20%), but free $Fe^{2+}$ ions catalyze the <strong>Fenton Reaction</strong> in milk powder. Even in trace quantities of moisture ($a_w pprox 0.2$), ferrous ions react with lipid hydroperoxides, generating reactive hydroxyl radicals ($OH^ullet$) that initiate an auto-oxidative chain reaction with DHA, ARA, and linoleic acid. This produces <strong>hexanal, 2,4-decadienal, and propanal</strong>, creating repulsive metallic, painty, and cardboard off-flavors that render the formula unpalatable within 2 to 3 months.</li>
                        <li><strong>The Engineering Solution — Microencapsulated Iron:</strong> Modern Stage 2 formulas utilize <strong>micronized Ferric Pyrophosphate ($Fe_4(P_2O_7)_3$) or Ferrous Fumarate microencapsulated</strong> within a solid lipid shell (hydrogenated vegetable oil) or maltodextrin/lecithin envelope. The protective coating forms a physical barrier that isolates the iron from fat globules during its 24-month dry shelf life. Upon ingestion, gastric lipase and hydrochloric acid ($pH < 3$) dissolve the lipid envelope, releasing the iron in the duodenum for absorption.</li>
                        <li><strong>The Ascorbic Acid (Vitamin C) Synergism:</strong> Dietary non-heme iron requires reduction from the insoluble ferric state ($Fe^{3+}$) to the soluble ferrous state ($Fe^{2+}$) by duodenal cytochrome b (Dcytb) on the apical enterocyte membrane. Follow-up formula maintains a <strong>molar Vitamin C to Iron ratio $\\ge 2:1$ to $4:1$ (at least 8–10 mg Vitamin C per 1 mg Iron)</strong>. Ascorbic acid donates an electron, keeping iron in the reduced, absorbable $Fe^{2+}$ form and forming soluble iron-ascorbate chelates that prevent the precipitation of insoluble ferric hydroxides in the alkaline jejunum.</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. Whey : Casein Transition (60:40 &rarr; 50:50 &rarr; 20:80)</h3>
                    <p>As the infant transitions from liquid milk exclusivity toward family solid foods, the protein architecture is modified progressively:</p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Stage 2 (6–12 Months):</strong> The Whey:Casein ratio is adjusted to <strong>50:50</strong>. The protein level is set at <strong>1.6–2.0 g/100 kcal (13–15 g/100g powder)</strong>. Because gastric acid output has matured, the 50:50 ratio forms a moderately firm curd that empties in 2.5–3 hours, extending postprandial satiety between feedings.</li>
                        <li><strong>Stage 3 / Growing-Up Milk (1–3 Years):</strong> The ratio shifts to <strong>20:80</strong> (the natural ratio of bovine milk). The total protein is 2.2–2.8 g/100 kcal. This acclimates the toddler's brush-border digestive peptidases (aminopeptidase N, dipeptidyl peptidase IV) to standard cow's milk prior to complete transition to liquid pasteurized cow milk at 2–3 years of age.</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. Carbohydrate Engineering: Dextrose Equivalent (DE) & Osmolality Control</h3>
                    <p>In Stage 2 and Stage 3 formulas, pure lactose is partially replaced with <strong>Maltodextrin (10–15 DE)</strong> and glucose polymers.</p>
                    
                    <p class="mt-2"><strong>The Dextrose Equivalent (DE) Physics:</strong></p>
                    <p>Dextrose Equivalent measures the percentage of reducing sugars calculated as D-glucose on dry matter basis ($DE = 100$ for pure glucose, $DE = 0$ for starch). Maltodextrin with <strong>DE 10 to 15</strong> consists of linear and branched glucose oligosaccharides (degree of polymerization DP 6–12).</p>
                    <ul class="list-disc list-inside space-y-2 ml-4 mt-2">
                        <li><strong>Colligative Osmotic Pressure Reduction:</strong> Osmotic pressure ($\\Pi$) is a colligative property governed by the van 't Hoff equation: $\\Pi = i \\cdot M \\cdot R \\cdot T$. It depends purely on the number of dissolved solute particles per unit volume, not their molecular mass. One molecule of maltodextrin (DP 10) supplies 10 glucose units of energy while exerting only <strong>one-tenth the osmotic pressure</strong> of 10 free glucose molecules (or one-fifth of lactose).</li>
                        <li><strong>Preventing Osmotic Diarrhea:</strong> By replacing 30–40% of lactose with DE 12 maltodextrin, the formula's total osmolality is lowered from $> 340	ext{ mOsm/kg}$ down to a gentle <strong>260–280 mOsm/kg</strong>. This prevents hyperosmotic diarrhea in active toddlers consuming large feeding volumes.</li>
                        <li><strong>Sustained Glycemic Release:</strong> Intestinal glucoamylase and isomaltase cleave maltodextrin progressively from the non-reducing end, providing smooth, sustained energy release without triggering acute insulin spikes or reactive hypoglycemia.</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">5. Thermal Damage Kinetics & The Maillard Reaction (Furosine & HMF Limits)</h3>
                    <p>During the manufacturing of Stage 2 and 3 powders, reducing sugars (lactose, maltodextrin) are exposed to high heat in the presence of concentrated milk proteins. This triggers the <strong>Maillard Reaction (non-enzymatic browning)</strong>.</p>
                    
                    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-3">
                        <p class="text-xs text-amber-900 font-semibold">The Maillard Cascade in Infant Formula:</p>
                        <p class="font-mono text-xs text-amber-800 mt-1">Lysine-NH₂ (Milk Protein) + Reducing Sugar-C=O ──> Schiff Base ──> Amadori Compound (ε-N-deoxylactulosyl-lysine) ──> HMF + Advanced Glycation End-products (AGEs)</p>
                    </div>

                    <p class="mt-3"><strong>The Health Risks of Thermal Over-Processing:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Irreversible Loss of Available Lysine:</strong> Lysine is an essential, growth-limiting amino acid for infants. The nucleophilic $arepsilon$-amino group on the lysine side chain binds lactose to form the Amadori product $arepsilon$-N-deoxylactulosyl-lysine. This molecule cannot be recognized by intestinal carboxypeptidases; up to <strong>15–25% of dietary lysine can be irreversibly destroyed</strong> if evaporation and spray drying temperatures are improperly regulated.</li>
                        <li><strong>Formation of Advanced Glycation End-products (AGEs):</strong> Amadori products degrade into dicarbonyl intermediates (methylglyoxal) that synthesize <strong>$N^arepsilon$-carboxymethyl-lysine (CML)</strong>. Circulating dietary AGEs bind to the RAGE receptor on endothelial cells, inducing oxidative stress, microvascular inflammation, and placing stress on infant renal glomeruli.</li>
                        <li><strong>In-Line Analytical Release Parameters:</strong>
                            <ul class="list-disc list-inside ml-4 mt-1">
                                <li><strong>Furosine (HPLC):</strong> Must not exceed <strong>< 300 mg / 100g protein</strong> in spray-dried formulas (Furosine is the analytical acid-hydrolysis cleavage marker of blocked lactulosyl-lysine).</li>
                                <li><strong>Hydroxymethylfurfural (HMF):</strong> Free + total HMF must be <strong>< 15 $\\mu$mol / 100g protein</strong>. Values exceeding this indicate excessive evaporator residence times or scorched dryer nozzles.</li>
                            </ul>
                        </li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">6. Hybrid Wet-Mix / Dry-Blend Manufacturing Flowchart</h3>
                    <p class="text-xs text-gray-600 mb-2">Stage 2 and 3 formulas frequently utilize a hybrid process where heat-sensitive micro-nutrients, probiotics, and prebiotics are dry-blended post-spray drying to avoid thermal destruction.</p>
                    <div class="space-y-2 text-xs font-sans">
                        <div class="p-2.5 bg-white border-l-4 border-blue-500 rounded-r-lg shadow-sm">
                            <strong>Step 1: Wet-Base Preparation</strong> — Recombination of skim milk, whey, maltodextrin, oil blend, and heat-tolerant minerals.
                        </div>
                        <div class="p-2.5 bg-white border-l-4 border-emerald-500 rounded-r-lg shadow-sm">
                            <strong>Step 2: Homogenization & Pasteurization</strong> — 180 + 40 bar homogenization, pasteurization at 95°C for 20s (lower heat than Stage 1 to protect lysine).
                        </div>
                        <div class="p-2.5 bg-white border-l-4 border-purple-500 rounded-r-lg shadow-sm">
                            <strong>Step 3: Evaporation & Spray Drying</strong> — Concentrated to 50% TS; spray dried in a multi-stage dryer to yield "Base Powder" (2.8% moisture).
                        </div>
                        <div class="p-2.5 bg-white border-l-4 border-amber-500 rounded-r-lg shadow-sm">
                            <strong>Step 4: Cleanroom Dry Blending (High-Hygiene Zone)</strong> — Base powder is conveyed to a sanitary ribbon/tumble mixer. Microencapsulated iron, heat-sensitive vitamins (C, B12, Folic Acid), probiotics (<em>Bifidobacterium lactis</em> BB-12), and GOS/FOS prebiotics are dosed and homogenized under positive nitrogen pressure.
                        </div>
                        <div class="p-2.5 bg-white border-l-4 border-rose-500 rounded-r-lg shadow-sm">
                            <strong>Step 5: Vacuum Nitrogen Seaming</strong> — Final canned packing with residual $O_2 < 1.0\\%$.
                        </div>
                    </div>


    <div class="my-6 p-3 sm:p-5 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 rounded-2xl border-2 border-indigo-200/80 shadow-sm">
        <div class="flex items-center justify-between gap-2 flex-wrap pb-3 mb-4 border-b border-indigo-100">
            <div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm">
                        ⚡
                    </span>
                    <h4 class="!m-0 !p-0 !bg-none !border-none text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">
                        Stage 2 Follow-Up (6–12 M) & Stage 3 Toddler Formula — Hybrid Process Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">Wet-Mix Evaporation + Cleanroom Dry-Blending Hybrid Process Flowchart with Control Points</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                7-STEP HYBRID CCP FLOWCHART
            </span>
        </div>
        
        <div class="flowchart-steps-wrapper max-w-3xl mx-auto">
            
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 01
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    Base Wet-Mix Recombination & Protein Transition
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">STAGE 2 WET-MIX</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Skim milk is recombined with D70 demineralized whey to establish a 50:50 Whey:Casein ratio (13–15% protein). Part of the lactose is substituted with Maltodextrin (DE 10–15) to maintain caloric density with low osmolality.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Whey : Casein</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">50 : 50</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Carbohydrate</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Lactose + Maltodextrin</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">DE Range</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">DE 10 – 15</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Recombination Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60°C</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 02
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    In-line Vegetable Lipid Blending & Homogenization
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">EMULSION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">High-oleic sunflower, soybean, and coconut oils are blended with oil-soluble vitamins. Two-stage homogenization at 180 + 40 bar ensures fat droplets are dispersed down to < 1.0 µm without coalescence.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Homogenizer 1st Stage</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">180 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">2nd Stage</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">40 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Fat Content</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">22–24% dry basis</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Emulsion Stability</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 99%</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 03
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Low-Heat Thermal Pasteurization (Lysine Protection)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: THERMAL SAFETY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Regenerative pasteurization at 95°C for 20 seconds. Calibrated to achieve complete pathogen destruction (> 8D kill) while strictly restricting Maillard reaction kinetics (Furosine < 300 mg/100g, HMF < 15 µmol/100g).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Pasteurizer Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">95.0°C ± 0.5°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Holding Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">20 seconds</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Available Lysine</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 92% retention</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">HMF Target</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 15 µmol/100g</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 04
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    Multi-Effect Evaporation & Multi-Stage Spray Drying
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">BASE POWDER</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Vacuum concentration to 50% TS in a 3-effect falling film evaporator. Spray dried in a tall-form drying tower with integrated static fluid bed, discharging Base Powder at exactly 2.8% moisture.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Evaporator TS</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">48–50%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Inlet Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">190°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Exhaust Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">84°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Base Powder Moisture</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">2.8% ± 0.2%</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-amber-300 bg-amber-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-amber-500 text-white">
                    STEP 05
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-amber-950 font-bold">
                    Cleanroom Dry-Blending (Microencapsulated Nutrients)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: DRY BLEND</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Inside ISO Class 7 cleanroom: Base powder is fed into a sanitary tumble/ribbon mixer. Microencapsulated iron (ferric pyrophosphate in lipid shell), Vitamin C, Bifidobacterium lactis BB-12 probiotics, and GOS/FOS prebiotics are dosed.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Iron System</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Lipid-Coated Pyrophosphate</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Vit C : Iron</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">3 : 1 Molar Ratio</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Probiotics</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 10⁷ CFU/g BB-12</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Mix Uniformity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">CV < 3.0%</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 06
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    In-line Sifting, Rotary Magnet & Dual-Frequency Metal Detection
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: METAL TRAP</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Blended powder passes through a 1.0 mm sanitary sifter, 12,000 Gauss magnetic trap, and high-frequency metal detector with automatic rejection arm sensitive to ≥ 0.8 mm Fe, ≥ 1.0 mm Non-Fe, and ≥ 1.2 mm SS 316.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Sifter Screen</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.0 mm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Magnetic Strength</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12,000 Gauss</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Ferrous Sensitivity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 0.8 mm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Rejection Response</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 50 ms</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 07
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Modified Atmosphere Vacuum Canning with 98% N₂
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: MAP GAS FLUSH</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Tin cans are vacuum-evacuated to -0.95 bar and flushed with 98% N₂ + 2% CO₂ before double seaming. Headspace oxygen is verified at < 1.0% to prevent Fenton oxidation and guarantee 24 months shelf life.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Headspace O₂</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.0% (target <0.5%)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Can Seam Overlap</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 55%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Shelf Life</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">24 Months</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">MAP Gas</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">98% N₂ + 2% CO₂</strong></div></div>
    </div>
    
        </div>
    </div>
    `
            },
            "cereal-weaning": {
                title: "C. Cereal-Based Baby Foods & Weaning Foods (Cerelac Type)",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. Cereal Grain Selection, Decontamination & Heavy Metal Control</h3>
                    <p>Cereal-based baby foods (commonly referred to in clinical pediatrics and industry as <strong>Complementary Weaning Foods / Cerelac Type</strong>) are designed for infants from 6 months onwards as the bridge between exclusive liquid feeding and solid adult family meals.</p>

                    <p class="mt-2"><strong>Grain Selection Criteria:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Polished Broken Rice:</strong> The primary grain for early weaning due to its hypoallergenic profile (absence of gluten) and high digestibility. However, rice bioaccumulates inorganic arsenic from soil and irrigation groundwater via silicic acid transporters (Lsi1 and Lsi2). FSSAI and European Commission regulations strictly enforce an <strong>Inorganic Arsenic limit of $< 0.1	ext{ mg/kg}$ in infant rice products</strong> (compared to $0.2	ext{ mg/kg}$ for adults). Every batch must undergo ICP-MS testing.</li>
                        <li><strong>Durum Wheat Semolina:</strong> Introduced from 7–8 months to provide gluten proteins (gliadin and glutenin) in controlled micro-doses, establishing oral immune tolerance against celiac disease.</li>
                        <li><strong>Dehulled Ragi (Finger Millet - <em>Eleusine coracana</em>):</strong> Renowned in traditional Indian pediatric nutrition, ragi contains an extraordinary natural calcium content (<strong>344 mg / 100g</strong>, tenfold higher than rice or wheat). Industrial processing requires strict dehulling and hydrothermal steeping to remove seed-coat tannins and polyphenols, which bind dietary iron and zinc, inhibiting their intestinal absorption.</li>
                        <li><strong>Dehulled Moong Dal (Green Gram):</strong> Used as a complementary pulse to provide <strong>L-lysine</strong> (the primary limiting amino acid in wheat and rice), achieving a complete Protein Digestibility-Corrected Amino Acid Score (PDCAAS $pprox 1.0$).</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. Rheological Transformation of Cereal Starch: Enzymatic Liquefaction</h3>
                    <p>The central technological bottleneck in manufacturing cereal-based infant food is the <strong>viscosity-caloric density paradox</strong>.</p>

                    <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-lg mt-3">
                        <p class="text-xs text-indigo-900 font-semibold">The Viscosity-Caloric Paradox in Infant Weaning:</p>
                        <p class="text-xs text-indigo-800 mt-1">If native cereal flour is cooked with water, starch granules gelatinize at 65–75°C, swelling into an intractable, sticky paste with an apparent viscosity <strong>> 8,000 cP at only 10% dry matter</strong>. An infant’s small stomach (~200 mL) cannot hold enough dilute slurry to satisfy caloric needs (energy density is only ~0.35 kcal/mL), causing chronic undernutrition and high aspiration/choking risk.</p>
                    </div>

                    <p class="mt-3"><strong>The Biochemical Solution — Controlled $lpha$-Amylase Liquefaction:</strong></p>
                    <ol class="list-decimal list-inside space-y-2 ml-4 mt-2">
                        <li>The cereal flour-water slurry (30–35% solids) is pumped into a continuous jacketed enzymatic reactor at $70	ext{–}75^\\circ	ext{C}$.</li>
                        <li>A thermostable bacterial <strong>$lpha$-Amylase (1,4-$lpha$-D-glucan glucanohydrolase derived from <em>Bacillus licheniformis</em>)</strong> is injected at 0.05–0.1% by weight.</li>
                        <li>The endo-enzyme randomly cleaves internal $lpha(1
ightarrow4)$ glucosidic bonds in both branched amylopectin and linear amylose. It bypasses branch points, rapidly breaking giant macromolecular starch networks ($MW > 10^7	ext{ Da}$) into short-chain dextrins and maltodextrins (degree of polymerization DP 4–10).</li>
                        <li><strong>Rheological Collapse:</strong> Within 15 to 20 minutes, the slurry's apparent viscosity collapses from $> 8,000	ext{ cP}$ down to <strong>$< 200	ext{ cP}$ at a high dry matter concentration of 25 to 28%</strong>!</li>
                        <li><strong>Enzyme Inactivation:</strong> The liquefied slurry is pumped through a direct steam injection heater at <strong>$125^\\circ	ext{C}$ for 60 seconds</strong> to permanently denature the $lpha$-amylase, halting hydrolysis before excess mono- and disaccharides (which would cause osmotic diarrhea and hygroscopicity) are formed.</li>
                    </ol>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. Twin-Drum Roller Dryer (Roller Drying Technology) Engineering</h3>

    <div class="my-6 p-3 sm:p-5 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 rounded-2xl border-2 border-indigo-200/80 shadow-sm">
        <div class="flex items-center justify-between gap-2 flex-wrap pb-3 mb-4 border-b border-indigo-100">
            <div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm">
                        ⚡
                    </span>
                    <h4 class="!m-0 !p-0 !bg-none !border-none text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">
                        Cereal-Based Weaning Foods (Cerelac Type) — Enzymatic & Roller Drying Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">Continuous 8-Step Starch Liquefaction, Twin-Drum Roller Drying & Fortification Flowchart with CCPs</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                8-STEP ROLLER DRYING CCP FLOWCHART
            </span>
        </div>
        
        <div class="flowchart-steps-wrapper max-w-3xl mx-auto">
            
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-blue-200 bg-blue-50/30 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-blue-600 text-white">
                    STEP 01
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-blue-950 font-bold">
                    Grain Intake, Destoning & ICP-MS Heavy Metal Testing
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: GRAIN SAFETY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Polished broken rice, durum wheat, and dehulled ragi reception. Multi-deck gravity destoning and magnetic separation. Mandatory ICP-MS testing: Inorganic Arsenic strictly < 0.1 mg/kg, Lead < 0.02 mg/kg, Cadmium < 0.04 mg/kg.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Inorganic Arsenic</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.1 mg/kg</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Lead Limit</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.02 mg/kg</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Destoning</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Gravity Separation</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Magnetic Trap</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">10,000 Gauss</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 02
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    Precision Wet Milling & Slurry Preparation
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">SLURRY PREP</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Dehulled grains and pulses (moong dal) are wet-milled in high-purity Reverse Osmosis (RO) water to create a uniform 30–35% dry matter suspension with mean particle size d50 < 40 µm.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Slurry Dry Matter</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">30% – 35% TS</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Water Quality</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">RO Purified</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Particle Size d50</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 40 µm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Slurry Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">50°C – 55°C</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 03
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    High-Temperature Starch Gelatinization
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">GELATINIZATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">The slurry enters a jacketed heating vessel at 70°C to 75°C. Starch granules absorb water and swell, undergoing complete gelatinization. Apparent viscosity skyrockets to > 8,000 cP.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Gelatinization Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">70°C – 75°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Peak Viscosity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 8,000 cP</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Agitation Speed</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Anchor Scraper 45 RPM</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Holding Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">10 Minutes</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-amber-300 bg-amber-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-amber-500 text-white">
                    STEP 04
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-amber-950 font-bold">
                    Controlled Enzymatic Liquefaction (α-Amylase)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: VISCOSITY DROP</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Thermostable bacterial alpha-amylase (from Bacillus licheniformis) is dosed at 0.08% w/w. The enzyme randomly cleaves internal alpha(1-4) bonds, breaking starch chains into short dextrins (DP 4–10). Viscosity collapses to < 200 cP at 28% solids.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Enzyme Dosing</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.08% w/w</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Reaction Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">72°C ± 1°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Reaction Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">15 – 20 Minutes</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Final Viscosity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 200 cP</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 05
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Flash Thermal Direct Steam Enzyme Inactivation
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: ENZYME KILL</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">The liquefied cereal slurry is pumped through a Direct Steam Injection (DSI) heater at 125°C for 60 seconds. Permanently denatures alpha-amylase to stop hydrolysis before excess free sugars form, while delivering a commercial sterilization kill.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">DSI Temperature</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">125.0°C ± 1.0°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Holding Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60 Seconds</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Enzyme Activity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Zero Residual (Denatured)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Spore Reduction</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 6D Reduction</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 06
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Atmospheric Twin-Drum Roller Drying
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: ROLLER DEHYDRATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">The hot slurry feeds into the sump between two counter-rotating cast-iron drums heated internally by 4.5 bar steam (145°C). Forms a paper-thin film that flashes off moisture in 2.8 seconds, dropping moisture to < 3.0%. Inactivates lectins and trypsin inhibitors.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Drum Steam Press</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">4.5 – 5.0 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Surface Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">142°C – 148°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Contact Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">2.5 – 3.5 Seconds</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Discharge Moisture</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 3.0%</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 07
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    Doctor Blade Scraping, Oscillating Milling & Cooling
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">FLAKE FORMATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Hardened stationary doctor blades continuously peel the dehydrated paper-thin sheet off the drum cylinders. The dry sheet is fed through an oscillating sieve mill (0.8 mm screen) to yield uniform, instantly soluble porous cereal micro-flakes.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Doctor Blade Angle</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">32° Bevel</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Milling Screen</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.8 mm Oscillating</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Flake Density</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.35 – 0.40 g/mL</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Rehydration Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 15 Seconds</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 08
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Dry Vitamin Fortification & Nitrogen-Flushed Packaging
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: PACKAGING SAFETY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Inside ISO Class 7 packing room: Cereal flakes are blended with heat-sensitive vitamins (A, D3, C, B-complex), minerals (ferrous fumarate, calcium carbonate), and sealed in nitrogen-flushed barrier pouches or cans (O₂ < 1.5%).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cleanroom Class</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ISO Class 7</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Iron Fortification</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 5.0 mg / 100g</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Pouch Residual O₂</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.5%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Final Moisture</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 4.0% FSSAI</strong></div></div>
    </div>
    
        </div>
    </div>
    
                    <p>Unlike milk powders which are spray-dried, cereal weaning foods rely on <strong>Atmospheric Twin-Drum Roller Dryers</strong> to simultaneously cook, gelatinize, and dehydrate the starch slurry into instant, spoonable flakes.</p>

                    <div class="overflow-x-auto mt-3">
                        <table class="w-full text-left border-collapse text-xs sm:text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Operating Engineering Parameter</th>
                                    <th class="p-2 border">Industrial Specification</th>
                                    <th class="p-2 border">Physical & Chemical Rationale</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong>Cylinder Surface Temperature</strong></td>
                                    <td class="p-2 border"><strong>142°C – 148°C</strong></td>
                                    <td class="p-2 border">Maintained by internal saturated steam at 4.0 to 5.5 bar pressure; ensures complete starch gelatinization.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Drum Rotation Speed</strong></td>
                                    <td class="p-2 border"><strong>4.5 to 7.0 RPM</strong></td>
                                    <td class="p-2 border">Adjusted continuously to achieve optimal dry film formation without scorch or under-drying.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Slurry Dwell Time on Drum</strong></td>
                                    <td class="p-2 border"><strong>2.5 to 3.5 seconds</strong></td>
                                    <td class="p-2 border">Ultra-rapid conductive heat transfer flashes off moisture without destroying heat-sensitive amino acids.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Drum Nip Clearance Gap</strong></td>
                                    <td class="p-2 border"><strong>0.20 to 0.40 mm</strong></td>
                                    <td class="p-2 border">Controls the exact thickness of the dehydrated film; calibrated with pneumatic leveling knives.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Evaporation Rate</strong></td>
                                    <td class="p-2 border"><strong>70 to 100 kg H₂O / m² / hour</strong></td>
                                    <td class="p-2 border">High convective vapor hoods rapidly draw off steam to prevent condensation dripping back onto the sheet.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Discharge Sheet Moisture</strong></td>
                                    <td class="p-2 border"><strong>2.0% – 2.8% moisture</strong></td>
                                    <td class="p-2 border">Stationary hardened doctor blades peel the paper-thin sheet off the drum into cooling screw conveyors.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p class="mt-3"><strong>De-activation of Anti-Nutritional Factors:</strong></p>
                    <p>The intense thermal conductive flash ($145^\\circ	ext{C}$ under thin-film shear) provides vital biochemical deactivation:</p>
                    <ul class="list-disc list-inside space-y-1 ml-4 mt-1">
                        <li><strong>Inactivation of Phytohemagglutinins (Lectins):</strong> Denatures plant lectins that cause intestinal epithelial damage.</li>
                        <li><strong>Trypsin Inhibitor Inactivation:</strong> Destroys Kunitz and Bowman-Birk trypsin inhibitors in pulse flours by $>95\\%$, restoring normal protein digestibility.</li>
                        <li><strong>Phytate Hydrolysis:</strong> Reduces inositol hexakisphosphate (phytic acid) by 25–35%, liberating bound divalent cations ($Fe^{2+}, Zn^{2+}, Ca^{2+}$).</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. FSSAI Compositional Standards for Cereal-Based Infant Foods</h3>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-xs sm:text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Parameter (FSSAI 2020)</th>
                                    <th class="p-2 border">With Milk Solids (Cerelac Type)</th>
                                    <th class="p-2 border">Without Milk Solids</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td class="p-2 border"><strong>Moisture</strong></td><td class="p-2 border">Not more than 4.0% by weight</td><td class="p-2 border">Not more than 4.0% by weight</td></tr>
                                <tr><td class="p-2 border"><strong>Total Protein (N × 6.25)</strong></td><td class="p-2 border"><strong>Not less than 15.0%</strong> by weight</td><td class="p-2 border"><strong>Not less than 10.0%</strong> by weight</td></tr>
                                <tr><td class="p-2 border"><strong>Total Fat</strong></td><td class="p-2 border"><strong>Not less than 7.5%</strong> by weight</td><td class="p-2 border">Not less than 2.0% by weight</td></tr>
                                <tr><td class="p-2 border"><strong>Total Ash</strong></td><td class="p-2 border">Not more than 5.0% by weight</td><td class="p-2 border">Not more than 3.5% by weight</td></tr>
                                <tr><td class="p-2 border"><strong>Carbohydrates</strong></td><td class="p-2 border">Not less than 55.0% by weight</td><td class="p-2 border">Not less than 75.0% by weight</td></tr>
                                <tr><td class="p-2 border"><strong>Iron (as Fe)</strong></td><td class="p-2 border"><strong>Not less than 5.0 mg / 100g</strong></td><td class="p-2 border"><strong>Not less than 5.0 mg / 100g</strong></td></tr>
                                <tr><td class="p-2 border"><strong>Vitamin A (as Retinol)</strong></td><td class="p-2 border">350 – 500 $\\mu$g / 100g</td><td class="p-2 border">350 – 500 $\\mu$g / 100g</td></tr>
                                <tr><td class="p-2 border"><strong>Vitamin D</strong></td><td class="p-2 border">5.0 – 10.0 $\\mu$g / 100g</td><td class="p-2 border">5.0 – 10.0 $\\mu$g / 100g</td></tr>
                            </tbody>
                        </table>
                    </div>
`
            },
            "specialized-formula": {
                title: "D. Specialized & Therapeutic Infant Formulas (LF, HA, Preterm)",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. Lactose-Free (LF) Formula: Osmotic Diarrhea Pathophysiology</h3>
                    <p>Lactose-Free infant formulas are indicated for infants suffering from <strong>congenital alactasia</strong> or, far more commonly, <strong>secondary lactase deficiency</strong> following acute viral or bacterial gastroenteritis (e.g., Rotavirus, Norovirus, enteropathogenic <em>E. coli</em>).</p>

                    <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-lg mt-3">
                        <p class="text-xs text-indigo-900 font-semibold">Pathophysiology of Secondary Lactase Deficiency:</p>
                        <p class="text-xs text-indigo-800 mt-1">Rotavirus infects and lyses mature enterocytes at the tips of intestinal villi. The brush-border enzyme <strong>lactase-phlorizin hydrolase (LPH)</strong> is located at the apical brush-border microvilli and is the first enzyme destroyed during mucosal blunting. When regular formula is fed, intact unhydrolyzed lactose cannot cross the enterocyte membrane. It remains in the intestinal lumen, creating a severe osmotic gradient ($> 500	ext{ mOsm/kg}$ in the colon) that draws massive fluid from systemic circulation into the gut, producing <strong>explosive, acidic watery diarrhea ($pH < 5.0$), perianal skin excoriation, severe metabolic acidosis, and life-threatening hypovolemic dehydration</strong>.</p>
                    </div>

                    <p class="mt-3"><strong>Technological Formulation:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>100% Carbohydrate Replacement:</strong> All lactose is completely eliminated (< 0.1% residual lactose) and replaced by <strong>Maltodextrin (DE 10–15) and glucose polymers</strong>. Maltodextrin is hydrolyzed by <em>glucoamylase and maltase-glucoamylase</em> (enzymes located in the crypts of Lieberkühn, which are spared during rotaviral villous tip injury).</li>
                        <li><strong>Electrolyte Rebalancing:</strong> Formulated with elevated sodium and potassium citrate to compensate for high fecal electrolyte losses during diarrheal recovery.</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. Hypoallergenic (HA) & Extensively Hydrolyzed Formulas (eHF) for CMPA</h3>
                    <p>Cow’s Milk Protein Allergy (CMPA) is the most prevalent food allergy in infancy, affecting 2 to 3% of infants. It is an immunological hypersensitivity reaction mediated by milk protein-specific Immunoglobulin E (IgE) antibodies or cell-mediated T-lymphocyte pathways.</p>

                    <p class="mt-2"><strong>The Molecular Allergen Target — Bovine $eta$-Lactoglobulin:</strong></p>
                    <p>Bovine $eta$-lactoglobulin (18.4 kDa globular protein) is completely absent in human breast milk, making it the primary immunogenic trigger. $eta$-Lactoglobulin contains rigid conformational and linear epitopes (e.g., residues 41–49, 125–135) that bind to membrane-bound IgE on tissue mast cells and circulating basophils.</p>

                    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-3">
                        <p class="text-xs text-amber-900 font-semibold">The Molecular Biophysics of Mast Cell Degranulation:</p>
                        <p class="text-xs text-amber-800 mt-1">To trigger mast cell degranulation (anaphylaxis, hives, stridor, angioedema), an antigen must possess at least <strong>two IgE-binding epitopes separated by a physical distance $\\ge 1,500	ext{ Da}$ (or $\\ge 15	ext{ amino acids}$)</strong>. This allows the peptide to cross-link two adjacent IgE molecules bound to the high-affinity $Fcarepsilon RI$ receptor on the mast cell membrane, opening calcium ion channels that trigger immediate histamine, tryptase, and leukotriene release.</p>
                    </div>

                    <p class="mt-3"><strong>Bioreactor Enzymatic Hydrolysis & Ultrafiltration Technology:</strong></p>
                    <ol class="list-decimal list-inside space-y-2 ml-4 mt-2">
                        <li><strong>Thermal Denaturation:</strong> Bovine whey or casein solution is heated to $85	ext{–}90^\\circ	ext{C}$ for 10 minutes to unfold the tight globular tertiary structure of $eta$-lactoglobulin, exposing interior hydrophobic peptide cleavage sites.</li>
                        <li><strong>Dual-Enzyme Bioreactor Cleavage:</strong> The denatured protein is subjected to sequential digestion in an enzymatic membrane reactor using <strong>immobilized pharmaceutical-grade endopeptidases (porcine trypsin and chymotrypsin)</strong> followed by exopeptidases. Trypsin cleaves specifically at the carboxyl side of lysine and arginine, breaking long chains into short oligopeptides.</li>
                        <li><strong>Membrane Ultrafiltration (UF Cut-Off):</strong> The hydrolysate is pumped through a continuous <strong>5 to 10 kDa polysulfone cross-flow ultrafiltration membrane</strong>. All unhydrolyzed proteins and high-molecular-weight peptides ($> 1,500	ext{ Da}$) are rejected by the membrane and recycled back into the enzyme reactor.</li>
                        <li><strong>Final Product Profile (eHF):</strong> Over <strong>95% of peptides in Extensively Hydrolyzed Formula (eHF) have a molecular weight $< 1,500	ext{ Da}$</strong> (average chain length 3 to 8 amino acids). Because these small peptides cannot bridge two IgE receptors, <strong>the formula is 99.9% non-allergenic</strong> (< 1 ppm residual intact $eta$-lactoglobulin via competitive ELISA).</li>
                    </ol>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. Amino Acid-Based Formula (AAF)</h3>
                    <p>For the 5 to 10% of infants with severe refractory CMPA who react even to short peptides in eHF (presenting with failure to thrive, anaphylaxis, severe atopic dermatitis, or eosinophilic esophagitis), <strong>Amino Acid-Based Formulas (AAF)</strong> are required.</p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>100% Free Synthetic L-Amino Acids:</strong> Zero intact protein and zero peptides. Manufactured using individually crystallized USP-grade L-amino acids (L-glutamine, L-lysine, L-leucine, etc.).</li>
                        <li><strong>Absolute Hypoallergenicity:</strong> Single amino acids cannot trigger immune recognition or cross-link IgE receptors. Eliminates all gastrointestinal inflammation within 48 to 72 hours.</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. Preterm & Low Birth Weight (LBW) Formula: Medium-Chain Triglyceride (MCT) Biophysics</h3>
                    <p>Preterm infants (< 37 weeks gestation) and Low Birth Weight (LBW < 2,500 g) neonates possess immature gastrointestinal and metabolic capacities requiring specialized nutritional engineering.</p>

                    <p class="mt-2"><strong>The Digestive Deficits of Prematurity:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Depleted Bile Acid Pool:</strong> Preterm infants have an immature ileal bile salt reabsorption mechanism and low hepatic bile acid synthesis. The intraluminal bile acid concentration is frequently below the <strong>Critical Micellar Concentration (CMC $pprox 2–4	ext{ mmol/L}$)</strong>, impairing the digestion and absorption of standard long-chain triglycerides (LCTs).</li>
                        <li><strong>Deficient Pancreatic Enzymes:</strong> Pancreatic colipase and lipase outputs are less than 10% of adult capacity.</li>
                    </ul>

                    <div class="p-3 bg-teal-50 border border-teal-200 rounded-lg mt-3">
                        <p class="text-xs text-teal-900 font-semibold">The Biophysical Transport Superiority of Medium-Chain Triglycerides (MCTs):</p>
                        <p class="text-xs text-teal-800 mt-1">In Preterm formula, <strong>40% to 50% of the total fat is supplied as Medium-Chain Triglycerides (MCT oils: Caprylic Acid $C_{8:0}$ and Capric Acid $C_{10:0}$)</strong> fractionated from palm kernel and coconut oils.</p>
                        <ul class="list-disc list-inside space-y-1 ml-2 mt-1 text-xs text-teal-800">
                            <li><strong>Water Solubility:</strong> MCTs have a high water solubility (68 mg / 100 mL, hundreds of times higher than long-chain fats). They do not require bile acid micellar incorporation.</li>
                            <li><strong>Gastric Lipase Hydrolysis:</strong> Readily hydrolyzed in the stomach by lingual and gastric lipase alone, without needing pancreatic colipase.</li>
                            <li><strong>Direct Portal Transport:</strong> Unlike LCTs (which must be re-esterified inside enterocytes into chylomicrons and transported via the slow lymphatic thoracic duct), free medium-chain fatty acids cross the apical enterocyte membrane directly, bind to serum albumin, and flow <strong>straight into the portal vein directly to the liver</strong>!</li>
                            <li><strong>Carnitine-Independent Mitochondrial Oxidation:</strong> In hepatocytes, caprylic and capric acids cross the inner mitochondrial membrane freely, completely bypassing the <strong>Carnitine Palmitoyltransferase-1 (CPT-1)</strong> shuttle (which is severely deficient in premature infants), entering immediate $eta$-oxidation to generate rapid cellular ATP and ketone bodies for developing brain and cardiac tissue.</li>
                        </ul>
                    </div>

                    
    <div class="my-6 p-3 sm:p-5 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 rounded-2xl border-2 border-indigo-200/80 shadow-sm">
        <div class="flex items-center justify-between gap-2 flex-wrap pb-3 mb-4 border-b border-indigo-100">
            <div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm">
                        ⚡
                    </span>
                    <h4 class="!m-0 !p-0 !bg-none !border-none text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">
                        Specialized & Therapeutic Formulas (LF, eHF, Preterm) — Bioreactor Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">Enzymatic Membrane Reactor, 5-10 kDa Ultrafiltration & MCT Lipid Blending Process Flowchart</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                6-STEP THERAPEUTIC CCP FLOWCHART
            </span>
        </div>
        
        <div class="flowchart-steps-wrapper max-w-3xl mx-auto">
            
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 01
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    Protein Hydration & Thermal Unfolding
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">DENATURATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Whey protein isolate or casein solution is hydrated in RO water at 60°C. Thermally unfolded at 85°C to 90°C for 10 minutes to uncoil globular beta-lactoglobulin and expose cryptic hydrophobic cleavage sites.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Hydration Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Unfolding Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">85°C – 90°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Holding Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">10 Minutes</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Protein Dispersion</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">10% w/w</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 02
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    Dual-Enzyme Bioreactor Hydrolysis
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">ENZYME CLEAVAGE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">The unfolded protein enters an automated enzymatic membrane reactor. Sequential digestion using immobilized porcine trypsin (cleaving Lys/Arg) and chymotrypsin breaks macromolecular protein into short oligopeptides.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Enzyme System</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Immobilized Trypsin + Chymotrypsin</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Bioreactor Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">50°C ± 1°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">pH Regulation</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">pH 7.8 ± 0.1</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Degree of Hydrolysis</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">DH > 22%</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 03
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Cross-Flow Ultrafiltration Fractionation
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: ALLERGEN CUT-OFF</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Continuous cross-flow ultrafiltration using a 5 to 10 kDa polysulfone membrane. Retentate (> 1,500 Da intact epitopes) is recycled back into the bioreactor. Permeate containing exclusively peptides < 1,500 Da (> 99.9% non-allergenic) is harvested.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Membrane Material</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Polysulfone UF</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">MW Cut-Off</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">5 – 10 kDa</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Peptide Permeate</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1,500 Da (>95%)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Intact β-Lg</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1 ppm (ELISA)</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 04
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    Specialized Carbohydrate & Lipid Blending
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">THERAPEUTIC MATRIX</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">For Lactose-Free (LF): 100% Maltodextrin (DE 10–15) is added (Zero lactose). For Preterm: 40–50% MCT Oils (Caprylic C8 and Capric C10) + algal DHA/ARA are dosed with carnitine and taurine.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">LF Carbohydrate</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% Maltodextrin</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Residual Lactose</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.1%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Preterm MCT</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">40% – 50% of Fat</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Direct Absorption</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Direct Portal Vein</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 05
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    Two-Stage Homogenization & Aseptic Spray Drying
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">ASEPTIC DRYING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">High-pressure homogenization at 180 + 40 bar. Spray dried in an aseptic drying tower supplied with H14 HEPA sterile air (Inlet 180°C, Exhaust 80°C), discharging hypoallergenic base powder at 2.6% moisture.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Homogenizer Press</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">180 + 40 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Air Cleanliness</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">HEPA H14 Sterile</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Inlet Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">180°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Powder Moisture</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">2.6% ± 0.2%</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 06
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    In-Can Vacuum Nitrogen Seaming & Vision Seal Verification
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: PACKAGING INTEGRITY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Under ISO Class 7 cleanroom (+30 Pa): Cans are vacuum-evacuated to -0.95 bar and flushed with 98% N₂ + 2% CO₂ before hermetic double seaming. High-resolution optical vision inspection verifies 100% can seam overlap.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cleanroom Class</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ISO Class 7</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Vacuum Seam</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">-0.95 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Flush Gas</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">98% N₂ + 2% CO₂</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Headspace O₂</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.0%</strong></div></div>
    </div>
    
        </div>
    </div>
    
<h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">5. Comparison Matrix of Specialized Infant Formulas</h3>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-xs sm:text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Formula Type</th>
                                    <th class="p-2 border">Protein Source & Size</th>
                                    <th class="p-2 border">Carbohydrate Source</th>
                                    <th class="p-2 border">Lipid System</th>
                                    <th class="p-2 border">Clinical Indication</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong>Lactose-Free (LF)</strong></td>
                                    <td class="p-2 border">Intact Whey/Casein (60:40)</td>
                                    <td class="p-2 border"><strong>100% Maltodextrin</strong> (Zero lactose)</td>
                                    <td class="p-2 border">Standard vegetable blend</td>
                                    <td class="p-2 border">Rotaviral diarrhea, secondary lactase deficiency</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Extensively Hydrolyzed (eHF)</strong></td>
                                    <td class="p-2 border"><strong>Short Peptides < 1,500 Da</strong> (>95%)</td>
                                    <td class="p-2 border">Maltodextrin / modified starch</td>
                                    <td class="p-2 border">Veg oils + 20–30% MCT</td>
                                    <td class="p-2 border">Cow's Milk Protein Allergy (CMPA), malabsorption</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Amino Acid-Based (AAF)</strong></td>
                                    <td class="p-2 border"><strong>100% Free L-Amino Acids</strong></td>
                                    <td class="p-2 border">Maltodextrin, dried glucose syrup</td>
                                    <td class="p-2 border">Veg oils + 30–35% MCT</td>
                                    <td class="p-2 border">Severe refractory CMPA, anaphylaxis, eosinophilic esophagitis</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Preterm / LBW</strong></td>
                                    <td class="p-2 border">High Protein (2.2–2.6 g/100 kcal) 60:40 Whey:Casein</td>
                                    <td class="p-2 border">50% Lactose + 50% Maltodextrin</td>
                                    <td class="p-2 border"><strong>40–50% MCT Oils</strong> + DHA/ARA</td>
                                    <td class="p-2 border">Premature (< 37 weeks), Low Birth Weight (< 2,500g)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
`
            },
            "cleanroom-standards": {
                title: "E. Cleanroom Hygiene, Cronobacter Control & FSSAI / Codex Standards",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. 3-Zone Cleanroom Architectural Engineering</h3>
                    <p>Unlike standard dairy facilities, an infant formula powder plant is classified as a high-containment biological cleanroom. The manufacturing facility is partitioned into three strict thermodynamic and hygienic zones under ISO 14644-1 and EHEDG guidelines:</p>

                    <div class="overflow-x-auto mt-3">
                        <table class="w-full text-left border-collapse text-xs sm:text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Cleanroom Zone</th>
                                    <th class="p-2 border">Manufacturing Unit Operations</th>
                                    <th class="p-2 border">Air Filtration & Pressure Differential</th>
                                    <th class="p-2 border">Personnel Access Protocol</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong>Black Zone (Low Hygiene)</strong></td>
                                    <td class="p-2 border">Raw milk tanker reception, CIP chemical tanks, boiler rooms, refrigeration plants, warehouse shipping.</td>
                                    <td class="p-2 border">Standard ambient ventilation; negative pressure (-5 Pa) relative to grey zone.</td>
                                    <td class="p-2 border">Standard factory workwear, safety boots.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Grey Zone (Medium Hygiene)</strong></td>
                                    <td class="p-2 border">Pasteurization, homogenization, multi-effect vacuum evaporation, oil blending, wet recombination.</td>
                                    <td class="p-2 border">G4 + F8 mechanical filtration; positive pressure (+10 to +15 Pa) relative to black zone.</td>
                                    <td class="p-2 border">Captive shoes, white lab coats, hair nets, mandatory hand wash + 70% IPA sanitization.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Red Zone (High Hygiene Area)</strong></td>
                                    <td class="p-2 border">Spray dryer internal chamber, vibrating fluid beds, dense-phase powder conveying, dry blending, and high-speed can filling/seaming.</td>
                                    <td class="p-2 border"><strong>ISO Class 7 (at rest) / Class D (operational)</strong>. Terminal <strong>H14 HEPA Filters (99.995% efficiency at 0.3 $\\mu$m MPPS)</strong>. Positive pressure cascade <strong>+30 Pa relative to atmosphere</strong>. 25–30 air changes per hour (ACH). Humidity strictly controlled to RH < 40% (dew point < 8°C).</td>
                                    <td class="p-2 border">Triple interlocking airlocks (PAL). Full captive sterile bunny suits, nitrile gloves, FFP3 particulate respirators, sanitized boots, dynamic air shower (30s at 25 m/s air velocity). Zero street clothing or jewelry permitted.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    
    <div class="my-6 p-3 sm:p-5 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 rounded-2xl border-2 border-indigo-200/80 shadow-sm">
        <div class="flex items-center justify-between gap-2 flex-wrap pb-3 mb-4 border-b border-indigo-100">
            <div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm">
                        ⚡
                    </span>
                    <h4 class="!m-0 !p-0 !bg-none !border-none text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">
                        Cleanroom Zonation, Hygiene & Cronobacter Control — Facility Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">3-Zone Pressure Cascade, Personnel Decontamination & Zero-Tolerance Microbiological Release Flowchart</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                6-STEP CLEANROOM CCP FLOWCHART
            </span>
        </div>
        
        <div class="flowchart-steps-wrapper max-w-3xl mx-auto">
            
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-blue-200 bg-blue-50/30 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-blue-600 text-white">
                    STEP 01
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-blue-950 font-bold">
                    Black Zone Entry & Primary Personnel Air Lock (PAL-1)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: PERIMETER CONTROL</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Factory entry. Operators transition from street attire to captive factory labwear. Negative pressure (-5 Pa) in black zone relative to grey zone prevents outward aerosol drift from raw intake areas.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Zone Pressure</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">-5 Pa (Negative)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Attire</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Captive Factory Wear</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Access Door</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Magnetic Interlock</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Sanitization</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Boot Scrubbing Machine</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 02
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    Grey Zone Wet Processing & Decontamination Station
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">GREY ZONE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Housing pasteurization and evaporation. Air filtered through G4 pre-filters and F8 fine filters with +15 Pa positive pressure. Operators must perform automated 30s soap wash and 70% IPA hand sanitization before exit.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Air Filtration</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">G4 + F8 Filters</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Zone Pressure</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">+15 Pa (Positive)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Sanitizer</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">70% Isopropanol (IPA)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Wash Sensor</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Touchless Optoelectronic</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-amber-300 bg-amber-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-amber-500 text-white">
                    STEP 03
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-amber-950 font-bold">
                    Red Zone Personnel Air Lock 2 (Dynamic Air Shower)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: STERILE ATTIRE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Entry to High-Hygiene powder area: Operators don sterile full-body bunny suits, FFP3 particulate respirators, nitrile gloves, and sanitized cleanroom boots. Pass through 30-second Dynamic Air Shower (HEPA air jets at 25 m/s).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Air Shower Velocity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">25 m/s High-Velocity</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Shower Duration</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">30 Seconds</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Respiratory</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">FFP3 Respirator</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Garment</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Sterile Tyvek Bunny Suit</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 04
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    High-Hygiene Production Area (ISO Class 7 / Class D)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: CLEANROOM INTEGRITY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Housing spray dryer discharge, fluid beds, and can filling. Classified as ISO Class 7 (at rest) with terminal H14 HEPA filters (99.995% efficiency). Maintained under +30 Pa positive pressure cascade with 25–30 air changes/hour and RH < 40%.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cleanroom Class</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ISO Class 7 / Class D</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Air Filter</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Terminal H14 HEPA</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Pressure Cascade</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">+30 Pa Differential</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Relative Humidity</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 40% (dew point < 8°C)</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 05
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Strict 'Dry Cleaning Only' Sanitation Protocol
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: ZERO WATER RULE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Water, hoses, and wet mops are STRICTLY BANNED in the Red Zone. All loose powder is removed using DOP-tested, certified H14 HEPA industrial vacuum cleaners. Surfaces sanitized using 70% Isopropanol wipes that evaporate in 60s without moisture.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Water Ingress</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ABSOLUTE ZERO (Banned)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Vacuum Type</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Certified H14 HEPA</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cleaning Agent</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">70% IPA Lint-Free Wipes</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Biofilm Risk</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Completely Prevented</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 06
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Environmental Monitoring & Composite Microbiological Release
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: LOT RELEASE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Composite powder testing: Cronobacter sakazakii (ISO 22964, n=30, c=0, absent in 100g) and Salmonella (ISO 6579, n=30, c=0, absent in 375g). Positive lot isolation protocol holds inventory until final negative PCR certificate.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cronobacter Limit</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">n=30, c=0 (Absent/100g)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Salmonella Limit</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">n=30, c=0 (Absent/375g)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Enterobacteriaceae</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">n=10, c=0 (Absent/10g)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Lot Disposition</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Positive Hold Release</strong></div></div>
    </div>
    
        </div>
    </div>
    
<h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. <em>Cronobacter sakazakii</em> Pathophysiology & Survival Genetics</h3>
                    <p><em>Cronobacter sakazakii</em> (formerly <em>Enterobacter sakazakii</em>) is the most formidable microbial pathogen in pediatric dairy manufacturing. It is an opportunistic, Gram-negative, motile rod bacterium of the family <em>Enterobacteriaceae</em>.</p>

                    <div class="p-3 bg-red-50 border border-red-200 rounded-lg mt-3">
                        <p class="text-xs text-red-900 font-semibold">Clinical Pathophysiology in Neonates:</p>
                        <p class="text-xs text-red-800 mt-1"><em>Cronobacter sakazakii</em> possesses specialized virulence determinants: <strong>Outer Membrane Protein A (OmpA)</strong> and outer membrane protein X (OmpX). These proteins bind specifically to fibronectin on Human Brain Microvascular Endothelial Cells (HBMEC), facilitating invasion across the neonatal blood-brain barrier. In neonates under 2 months of age, infection causes <strong>necrotizing enterocolitis (NEC), severe brain liquefaction necrosis, cerebral abscesses, and purulent neonatal meningitis with a catastrophic mortality rate of 40% to 80%</strong>. Surviving infants suffer permanent neurological sequelae (hydrocephalus, quadriplegia, mental retardation).</p>
                    </div>

                    <p class="mt-3"><strong>The Genetics of Desiccation Resistance in Dry Milk Powder:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>The Trehalose & Osmoprotectant Operon:</strong> When spray-dried into powder with low water activity ($a_w \\le 0.3$), standard Gram-negative bacteria undergo fatal membrane desiccation and collapse. However, <em>C. sakazakii</em> activates the <strong>otsA and otsB operon</strong>, synthesizing massive intracellular concentrations of the disaccharide <strong>trehalose</strong>. Trehalose acts as a "water replacement molecule", stabilizing lipid bilayers and preventing protein denaturation during dehydration. It also accumulates proline and glycine betaine from the environment.</li>
                        <li><strong>Capsular Biofilm Shield:</strong> The bacterium secretes an extracellular polysaccharide (EPS) capsule matrix. In dry formula powder, <em>C. sakazakii</em> enters a metabolic dormancy state, capable of <strong>surviving in bone-dry milk powder ($a_w pprox 0.25$) for over 730 days (more than two years)</strong>!</li>
                        <li><strong>Thermal Inactivation Kinetics ($D$-value & $z$-value):</strong>
                            <ul class="list-disc list-inside ml-4 mt-1">
                                <li>$D_{60^\\circ	ext{C}} = 2.5	ext{ minutes}$ (time to reduce population by 90% at 60°C).</li>
                                <li>$D_{71.7^\\circ	ext{C}} = 1.5	ext{ seconds}$ (standard HTST pasteurization).</li>
                                <li>$z	ext{-value} = 5.6^\\circ	ext{C}$.</li>
                                <li>Thermal pasteurization in the wet mix stage ($105^\\circ	ext{C}$ for 30 seconds) delivers an astronomical <strong>$> 20	ext{D}$ log-reduction</strong>. Therefore, <strong>ZERO viable <em>Cronobacter</em> cells can survive the pasteurizer</strong>.</li>
                                <li><strong>Conclusion:</strong> 100% of <em>Cronobacter</em> contamination in industrial infant formula is due to <strong>post-pasteurization airborne or environmental cross-contamination</strong> in the dryer, fluid bed, conveying lines, or packaging room!</li>
                            </ul>
                        </li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. The Strict "Dry Cleaning Only" Rule in the High-Hygiene Zone</h3>
                    <p>The single most dangerous failure in infant formula manufacturing is introducing water into the dry processing zone.</p>
                    
                    <div class="p-3 bg-rose-50 border border-rose-200 rounded-lg mt-2">
                        <p class="text-xs text-rose-900 font-semibold">Why Water is Lethal in the Red Zone:</p>
                        <p class="text-xs text-rose-800 mt-1"><em>Cronobacter</em> and <em>Salmonella</em> cannot multiply in dry powder because water activity ($a_w < 0.30$) is below the minimum threshold for bacterial division ($a_w \\ge 0.94$). However, if water or wet mops are used to wash powder residue off floors, walls, or conveyor joints, water droplets seep into microscopic crevices, gaskets, and floor-wall coving, creating localized zones of $a_w > 0.85$. Combined with lactose and milk protein residues, <strong>a single surviving cell multiplies into millions within 24 hours, forming an impenetrable, sanitizer-resistant biofilm</strong> that sheds airborne bacterial cells into the spray-dryer fluid bed!</p>
                    </div>

                    <p class="mt-3"><strong>Sanitary Dry Cleaning Protocol:</strong></p>
                    <ol class="list-decimal list-inside space-y-1 ml-4 text-xs text-gray-700">
                        <li><strong>Zero Water Ingress:</strong> No hosepipes, water drains, or wet cleaning systems are permitted inside the Red Zone.</li>
                        <li><strong>Certified HEPA Industrial Vacuuming:</strong> All loose powder is removed using explosive-proof, certified H14 HEPA industrial vacuum cleaners (DOP tested).</li>
                        <li><strong>Alcohol Disinfection:</strong> Surfaces are sanitized using lint-free microfiber wipes pre-moistened with <strong>70% Isopropanol (IPA) or denatured ethanol</strong>. Alcohol denatures surface proteins and evaporates completely within 60 seconds without leaving residual moisture.</li>
                    </ol>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. Microbiological Zero-Tolerance Standards (FSSAI 2020 & Codex)</h3>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-xs sm:text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Microorganism</th>
                                    <th class="p-2 border">Sampling Plan ($n$)</th>
                                    <th class="p-2 border">Acceptance ($c$)</th>
                                    <th class="p-2 border">Microbiological Limit ($m$)</th>
                                    <th class="p-2 border">Analytical Method</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong><em>Cronobacter sakazakii</em></strong></td>
                                    <td class="p-2 border"><strong>$n = 30$</strong></td>
                                    <td class="p-2 border"><strong>$c = 0$</strong> (Zero tolerance)</td>
                                    <td class="p-2 border"><strong>Absent in 100g</strong> (m = 0)</td>
                                    <td class="p-2 border">ISO 22964 / Real-Time PCR confirmation</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong><em>Salmonella enterica</em></strong></td>
                                    <td class="p-2 border"><strong>$n = 30$</strong></td>
                                    <td class="p-2 border"><strong>$c = 0$</strong> (Zero tolerance)</td>
                                    <td class="p-2 border"><strong>Absent in 375g</strong> (m = 0)</td>
                                    <td class="p-2 border">ISO 6579 / Automated Immunoassay VIDAS</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong><em>Enterobacteriaceae</em></strong></td>
                                    <td class="p-2 border"><strong>$n = 10$</strong></td>
                                    <td class="p-2 border"><strong>$c = 0$</strong></td>
                                    <td class="p-2 border"><strong>Absent in 10g</strong> (m = 0)</td>
                                    <td class="p-2 border">ISO 21528-1 (VRBG Agar)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong><em>Listeria monocytogenes</em></strong></td>
                                    <td class="p-2 border">$n = 10$</td>
                                    <td class="p-2 border">$c = 0$</td>
                                    <td class="p-2 border"><strong>Absent in 25g</strong></td>
                                    <td class="p-2 border">ISO 11290-1</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong><em>Bacillus cereus</em> (Presumptive)</strong></td>
                                    <td class="p-2 border">$n = 5$</td>
                                    <td class="p-2 border">$c = 1$</td>
                                    <td class="p-2 border">$m = 50	ext{ CFU/g}$, $M = 100	ext{ CFU/g}$</td>
                                    <td class="p-2 border">ISO 7932 (MYP Agar)</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Total Plate Count (TPC)</strong></td>
                                    <td class="p-2 border">$n = 5$</td>
                                    <td class="p-2 border">$c = 2$</td>
                                    <td class="p-2 border">$m = 500	ext{ CFU/g}$, $M = 5,000	ext{ CFU/g}$</td>
                                    <td class="p-2 border">ISO 4833 (PCA at 30°C for 72h)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">5. FSSAI & Codex Contaminant Limits (Aflatoxin M1, Heavy Metals & Melamine)</h3>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-xs sm:text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">Toxic Chemical Contaminant</th>
                                    <th class="p-2 border">Maximum Permissible Limit</th>
                                    <th class="p-2 border">Toxicological Impact on Infant</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong>Aflatoxin M1</strong></td>
                                    <td class="p-2 border"><strong>$\\le 0.025\\,\\mu	ext{g/kg}$ (25 parts per trillion)</strong></td>
                                    <td class="p-2 border">Group-1 human carcinogen; causes acute infantile hepatic necrosis and stunting.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Lead (Pb)</strong></td>
                                    <td class="p-2 border"><strong>$\\le 0.01	ext{ mg/kg}$</strong></td>
                                    <td class="p-2 border">Irreversible neurotoxicity, encephalopathy, and permanent IQ reduction.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Cadmium (Cd)</strong></td>
                                    <td class="p-2 border"><strong>$\\le 0.01	ext{ mg/kg}$</strong></td>
                                    <td class="p-2 border">Proximal tubular renal toxicity and calcium demineralization.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Inorganic Arsenic (As)</strong></td>
                                    <td class="p-2 border"><strong>$\\le 0.01	ext{ mg/kg}$</strong></td>
                                    <td class="p-2 border">Epigenetic methylation disruption, immune suppression.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Melamine</strong></td>
                                    <td class="p-2 border"><strong>$\\le 1.0	ext{ mg/kg}$</strong></td>
                                    <td class="p-2 border">Crystallizes with cyanuric acid into insoluble stones causing acute renal failure.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Pesticide Residues (Individual)</strong></td>
                                    <td class="p-2 border"><strong>$\\le 0.01	ext{ mg/kg}$</strong> (Default zero)</td>
                                    <td class="p-2 border">Endocrine disruption, neurodevelopmental behavioral disorders.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">6. Modified Atmosphere Packaging (MAP) & Inert Gas Flushing Kinetics</h3>
                    <p>Infant formula powder contains approximately 27% encapsulated and free lipids, rich in polyunsaturated fatty acids (linoleic, DHA, ARA). In the presence of ambient oxygen ($20.9\\%	ext{ O}_2$) and light, PUFAs undergo spontaneous <strong>free-radical auto-oxidation</strong>:</p>
                    <p class="font-mono text-xs text-indigo-900 mt-1">RH (PUFA) + O₂ ──[UV / Fe³⁺]──> R• + •OOH ──> ROO• (Peroxyl Radical) ──> Hydroperoxides (ROOH) ──> Hexanal, 2,4-Decadienal</p>
                    <p class="mt-2">To guarantee a stable <strong>24-month commercial shelf life</strong> without synthetic chemical preservatives (which are strictly illegal in baby food):</p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>In-Line Vacuum Gassing Chamber:</strong> Filled tin cans enter a rotary vacuum chamber. The headspace is evacuated down to <strong>$-0.95	ext{ bar}$</strong> (pulling out entrained oxygen from the powder particle pores).</li>
                        <li><strong>Inert Gas Flushing:</strong> The vacuum is instantly broken by injecting high-purity food-grade <strong>Nitrogen ($98\\%	ext{ N}_2$) + Carbon Dioxide ($2\\%	ext{ CO}_2$)</strong>.</li>
                        <li><strong>Residual Headspace Oxygen Critical Limit (CCP-5):</strong> The remaining oxygen in the hermetically seamed tin can must be verified at <strong>$< 1.0\\%	ext{ O}_2$ (optimally $< 0.5\\%$)</strong> using non-destructive frequency-modulated laser spectroscopy (or destructive needle electrochemical sensors). At $< 1.0\\%	ext{ O}_2$, the rate of lipid auto-oxidation drops to near zero, preserving Vitamin A, DHA, and ARA freshness for up to two full years.</li>
                    </ul>
`
            }
        }
    },
    hi: {
        title: "Baby Food & Infant Formula Processing (Shishu Aahar & Formula Doodh Utpadan)",
        subTopics: {
            "stage1-formula": {
                title: "A. Infant Milk Formula (Stage 1: 0–6 Months) - Humanized Milk (Maternalization)",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. Introduction & The Paradigm of "Humanization" (Maternalization)</h3>
    <p>Infant Milk Formula (IMF), jise international pediatric science mein <strong>Stage 1 Infant Formula (0 to 6 months of age)</strong> kehte hain, ek highly advanced, bio-chemically engineered breast milk substitute hai. Isko is tarah design kiya gaya hai ki jab biological mother ka milk medically unavailable, contraindicated ya insufficient ho, toh ye newborn baby ki 100% nutritional, metabolic aur physiological requirements ko safely fulfill kar sake.</p>

    <p class="mt-2">Unmodified bovine (cow ya buffalo) milk 12 months se kam age ke newborn baby ke liye <strong>extremely hazardous, indigestible aur nephrotoxic (kidneys ke liye dangerous)</strong> hota hai. Nature ne cow milk ko ek quadrupedal calf (bacchde) ke fast skeletal aur muscular growth ke liye design kiya hai (jo sirf 45 days mein apna birth weight double karta hai), jabki human milk bipedal human infant ke extraordinarily complex brain aur central nervous system development ke liye bana hai (jo dheere-dheere ~180 days mein weight double karta hai). Resulting differences cow milk ko neonates ke liye unfit banati hain:</p>

    <ul class="list-disc list-inside space-y-1 ml-4 mt-2 text-xs text-gray-700">
        <li><strong>Excessive Crude Protein (3.2–3.5% vs. human milk mein 0.9–1.2%):</strong> Baby ke blood mein Blood Urea Nitrogen (BUN) aur toxic hyperaminoacidemia create karta hai.</li>
        <li><strong>Inverse Whey-to-Casein Ratio (20:80 vs. mature human milk mein 60:40):</strong> Cow milk mein calcium-sensitive $\\alpha_{s1}$-casein dominate karta hai, jo baby ke stomach ke acidic environment mein rubbery, dense aur indigestible curd clot bana deta hai.</li>
        <li><strong>Overwhelming Mineral &amp; Electrolyte Concentration (Ash 0.75% vs. 0.20%):</strong> Immature neonatal kidneys par dangerously high <strong>Potential Renal Solute Load (PRSL &gt; 300 mOsm/L)</strong> daalta hai, jisse dehydration aur renal failure ka risk rehta hai.</li>
        <li><strong>Defective Lipid Architecture:</strong> Cow milk mein palmitic acid sn-1 aur sn-3 positions par esterified hota hai. Gut mein lipase ise free palmitic acid mein tod deti hai jo calcium ke saath milkar insoluble calcium soaps (pathological constipation aur hypocalcemia) bana leta hai. Saath hi brain development ke essential fatty acids DHA aur ARA cow milk mein zero hote hain.</li>
    </ul>

    <p class="mt-2">Industrial dairy technology mein bovine milk ko molecular level par completely deconstruct karke human breast milk ke exact nutritional profile par re-engineer karne ki process ko <strong>"Humanization" ya "Maternalization"</strong> kaha jaata hai. Isme skim milk, demineralized whey powder, structured sn-2 lipids, algal DHA/ARA aur essential micronutrients ko precision se recombine kiya jaata hai.</p>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. Detailed Biochemical Comparison: Bovine Milk vs. Human Milk vs. Stage 1 Formula</h3>
    <div class="overflow-x-auto mt-3">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Nutritional Parameter</th>
                    <th class="p-2 border">Cow Milk (Whole)</th>
                    <th class="p-2 border">Mature Human Breast Milk</th>
                    <th class="p-2 border">Stage 1 Infant Formula (Standard)</th>
                    <th class="p-2 border">Scientific Rationale &amp; Dairy Adaptation</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2 border"><strong>Energy Density</strong></td>
                    <td class="p-2 border">64–66 kcal/100 mL</td>
                    <td class="p-2 border">65–70 kcal/100 mL</td>
                    <td class="p-2 border"><strong>65–68 kcal/100 mL</strong> (500–520 kcal/100g powder)</td>
                    <td class="p-2 border">Infant stomach volume capacity (~150 mL/kg/day intake) ke saath exact match karta hai.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Total Protein</strong></td>
                    <td class="p-2 border">3.2 &ndash; 3.5 g/100 mL</td>
                    <td class="p-2 border">0.9 &ndash; 1.2 g/100 mL</td>
                    <td class="p-2 border"><strong>1.3 &ndash; 1.5 g/100 mL</strong> (10.5–11.5 g/100g)</td>
                    <td class="p-2 border">Skim milk ko demineralized whey se dilute karke renal nitrogen overload prevent kiya jaata hai.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Whey : Casein Ratio</strong></td>
                    <td class="p-2 border"><strong>20 : 80</strong> (Curd dominant)</td>
                    <td class="p-2 border"><strong>60 : 40</strong> (Liquid whey dominant)</td>
                    <td class="p-2 border"><strong>60 : 40 &plusmn; 2</strong> (Engineered)</td>
                    <td class="p-2 border">D90 Demineralized Whey Solids inject karke soft flocculent gastric curd banaya jaata hai.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>&alpha;_{s1}-Casein Fraction</strong></td>
                    <td class="p-2 border">~38% of total casein</td>
                    <td class="p-2 border"><strong>0% (Virtually Absent)</strong></td>
                    <td class="p-2 border">Suppressed (&lt; 15% of casein)</td>
                    <td class="p-2 border">Human milk &beta;-casein dominant hota hai; bovine $lpha_{s1}$ gastric clotting ko harsh banata hai.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>&alpha;-Lactalbumin</strong></td>
                    <td class="p-2 border">~3% of total protein</td>
                    <td class="p-2 border"><strong>~28% of total protein</strong></td>
                    <td class="p-2 border">Fortified to 18% &ndash; 25%</td>
                    <td class="p-2 border">Essential amino acid tryptophan ka natural source; neuro-development ke liye critical.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Lactose (Carbohydrate)</strong></td>
                    <td class="p-2 border">4.6 &ndash; 4.8 g/100 mL</td>
                    <td class="p-2 border">6.8 &ndash; 7.2 g/100 mL</td>
                    <td class="p-2 border"><strong>7.0 &ndash; 7.4 g/100 mL</strong> (54–58 g/100g)</td>
                    <td class="p-2 border">High-purity pharmaceutical beta-lactose add karke gut acidification aur galactocerebroside brain synthesis promote hota hai.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Total Fat (Lipids)</strong></td>
                    <td class="p-2 border">3.6 &ndash; 3.9 g/100 mL</td>
                    <td class="p-2 border">3.5 &ndash; 4.0 g/100 mL</td>
                    <td class="p-2 border"><strong>3.4 &ndash; 3.6 g/100 mL</strong> (26–28 g/100g)</td>
                    <td class="p-2 border">Butterfat ko replace karke tailored vegetable oil blend (OPO, sunflower, coconut) use hota hai.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>sn-2 Palmitate (OPO)</strong></td>
                    <td class="p-2 border">&lt; 35% at sn-2 position</td>
                    <td class="p-2 border"><strong>&gt; 70% at sn-2 position</strong></td>
                    <td class="p-2 border"><strong>&gt; 65% at sn-2 position</strong></td>
                    <td class="p-2 border">Calcium-soap formation prevent karta hai, bone mineralization aur soft stools ensure karta hai.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>DHA (22:6 n-3)</strong></td>
                    <td class="p-2 border">Trace (&lt; 0.02%)</td>
                    <td class="p-2 border">0.32% &ndash; 0.40% of fat</td>
                    <td class="p-2 border"><strong>0.30% &ndash; 0.50% of total fat</strong></td>
                    <td class="p-2 border">Schizochytrium algal oil se fortify kiya jaata hai; visual acuity aur retinal membrane fluidity ke liye.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>ARA (20:4 n-6)</strong></td>
                    <td class="p-2 border">Trace (&lt; 0.05%)</td>
                    <td class="p-2 border">0.45% &ndash; 0.60% of fat</td>
                    <td class="p-2 border"><strong>0.45% &ndash; 0.70% of total fat</strong></td>
                    <td class="p-2 border">Mortierella alpina fungal oil se fortify kiya jaata hai (DHA:ARA target ratio 1:1.5 to 1:2).</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Total Ash (Minerals)</strong></td>
                    <td class="p-2 border">0.72 &ndash; 0.78% (Extremely high)</td>
                    <td class="p-2 border">0.18 &ndash; 0.22%</td>
                    <td class="p-2 border"><strong>0.25 &ndash; 0.30%</strong> (2.0–2.4 g/100g)</td>
                    <td class="p-2 border">Electrodialysis aur Nanofiltration se raw minerals ko 70–90% demineralize kiya jaata hai.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Calcium : Phosphorus Ratio</strong></td>
                    <td class="p-2 border">1.2 : 1 (Excess phosphorus)</td>
                    <td class="p-2 border">2.0 : 1</td>
                    <td class="p-2 border"><strong>1.8 : 1 to 2.0 : 1</strong></td>
                    <td class="p-2 border">Neonatal tetany aur hyperphosphatemia prevent karta hai; optimal bone mineralization.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Potential Renal Solute Load</strong></td>
                    <td class="p-2 border"><strong>&gt; 310 mOsm/L</strong> (Dangerous)</td>
                    <td class="p-2 border"><strong>~93 mOsm/L</strong></td>
                    <td class="p-2 border"><strong>120 &ndash; 140 mOsm/L</strong></td>
                    <td class="p-2 border">Newborn kidneys ki glomerular filtration capacity (GFR) ke safe margin ke andar.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. Physiological Science of Potential Renal Solute Load (PRSL)</h3>
    <p>Newborn baby ki kidneys adult kidneys ke mukable immature hoti hain (Glomerular Filtration Rate GFR adult capacity ka sirf 20–30% hota hai). Renal concentration capacity <strong>600–700 mOsm/kg H₂O</strong> tak limited hoti hai (adults 1,200–1,400 mOsm/kg). PRSL calculation clinical nutrition standard par based hai:</p>

    <div class="p-3 bg-blue-50 border border-blue-200 rounded-lg mt-3">
        <p class="text-xs text-blue-900 font-semibold">Ziegler &amp; Fomon PRSL Equation:</p>
        <p class="text-xs text-blue-900 font-mono mt-1 text-center font-bold">PRSL (mOsm) = Na + Cl + K + P_available + (N_unabsorbed / 28)</p>
        <p class="text-xs text-blue-800 mt-1">Industrial calculation for milk powder formulation:
            <br>$$	ext{PRSL} = 	ext{Na (mmol)} + 	ext{Cl (mmol)} + 	ext{K (mmol)} + 	ext{P (mmol)} + \\left[ rac{	ext{Dietary Protein (g)} 	imes 5.7}{28} ight]$$
        </p>
        <p class="text-xs text-blue-800 mt-1">Raw cow milk ka PRSL <strong>&gt; 310 mOsm/L</strong> hota hai, jo warm weather ya mild diarrhea mein infant ko acute hypertonic dehydration mein daal sakta hai. Industrial demineralization se Stage 1 formula ka PRSL <strong>125–135 mOsm/L</strong> maintain kiya jaata hai, jo baby ke kidneys ke liye 100% safe hai.</p>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. Casein Micelle Ultrastructure, Curd Tension & Gastric Coagulation Kinetics</h3>
    <p>Infant stomach ke andar milk protein ka biophysical behavior gastric emptying rate, digestion speed aur gastrointestinal comfort decide karta hai.</p>

    <p class="mt-2"><strong>Casein Micelles ka Molecular Difference:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Bovine Casein Micelles:</strong> Diameter 150–250 nm hota hai aur ye $lpha_{s1}$-casein (38%), $lpha_{s2}$-casein (10%), $eta$-casein (36%), aur $\\kappa$-casein (13%) se milkar bante hain, jo <strong>Colloidal Calcium Phosphate (CCP, ~6.5% of micellar dry weight)</strong> nanoclusters dwara cemented rehte hain. $lpha_{s1}$-casein par phosphoserine residues ki high density ise calcium precipitation ke liye violently sensitive banati hai.</li>
        <li><strong>Human Milk Casein Micelles:</strong> Kaafi chote hote hain (mean diameter 50–70 nm), inme CCP bohot kam (~1.5%) hota hai, aur <strong>$lpha_{s1}$-casein completely absent hota hai</strong>. Inme $eta$-casein (70%) dominate karta hai, jo high hydrophobicity ki wajah se loose, flexible aur porous micellar structure banata hai.</li>
    </ul>

    <p class="mt-3"><strong>Gastric Digestion Biophysics:</strong></p>
    <p class="text-xs text-gray-700">Newborn baby mein basal gastric acid secretion bohot kam hota hai; postprandial gastric pH <strong>pH 4.5 se 5.5</strong> par stabilize rehta hai (adults mein pH 1.5–2.0 hota hai). Neonatal stomach ka primary proteolytic enzyme <strong>pepsin</strong> hota hai (pH optimum 2.0; pH 4.5 par iski activity adult baseline ka sirf 10–20% hoti hai):</p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700 mt-1">
        <li><strong>Raw Cow Milk Clotting:</strong> Low pepsin aur pH 5.0 par cow milk ka 80% casein dense, tough, rubbery curd clot bana leta hai jiska <strong>Curd Tension &gt; 60 to 80 grams</strong> hota hai (measured via Hill Curd-O-Meter). Ye curd baby ke stomach mein 4 se 6 ghante tak trap rehta hai, causing gastric distension, colic, vomiting aur delayed emptying.</li>
        <li><strong>Humanized Stage 1 Formula Clotting:</strong> Whey:Casein ratio ko 60:40 adjust karne aur demineralized whey solids add karne se curd tension <strong>&lt; 20 grams</strong> ho jaata hai (soft flocculent curd). Gastric acid mein dense clot banne ke bajaye fine, flaky, porous precipitates bante hain jo low pepsin activity mein bhi surface erosion se rapidly digest ho jaate hain. Gastric emptying time <strong>75 se 90 minutes</strong> mein complete ho jaata hai, jo breast milk ke identical hai.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">5. Stereospecific Lipid Biochemistry: sn-2 Positional Isomerism & Insoluble Calcium Soaps</h3>
    <p>Infant formula lipids mein sabse important breakthrough <strong>sn-2 Palmitate (1,3-dioleoyl-2-palmitoyl glycerol / OPO / Betapol&reg;)</strong> ka inclusion hai.</p>

    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-3">
        <p class="text-xs text-amber-900 font-semibold">Enzymatic Stereospecificity &amp; Insoluble Soap Prevention:</p>
        <p class="text-xs text-amber-800 mt-1">Human pancreatic lipase enzyme <strong>regiospecific</strong> hota hai—ye triacylglycerol molecule ke sirf outer <strong>sn-1 aur sn-3 positions</strong> ko cleave karta hai aur middle <strong>sn-2 position</strong> ko untouched chhod deta hai:</p>
        <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-amber-800 mt-1">
            <li><strong>Standard Vegetable Oils / Palm Olein (Flawed Architecture):</strong> Palmitic acid ($C_{16:0}$) sn-1 aur sn-3 positions par hota hai. Pancreatic lipase ise cleave karke <strong>Free Palmitic Acid</strong> bana deta hai. Intestinal lumen ke alkaline pH par free palmitate dietary calcium ($Ca^{2+}$) aur magnesium ($Mg^{2+}$) ke saath react karke <strong>Insoluble Calcium-Fatty Acid Soaps</strong> precipitate kar deta hai:
                <br>$$2\\,	ext{Palmitic Acid} + Ca^{2+} \\longrightarrow 	ext{Calcium Dipalmitate Soap} \\downarrow\\;(	ext{Insoluble})$$
                Isse baby ko hard dry stools, painful constipation, aur calcium bone density loss hoti hai.
            </li>
            <li><strong>Human Breast Milk &amp; Structured OPO (The Optimal Solution):</strong> Palmitic acid natural form mein middle <strong>sn-2 position</strong> par esterified hota hai (&gt; 70%). Pancreatic lipase sn-1 aur sn-3 oleic acids ko cut karti hai, releasing <strong>2-Monopalmitin</strong>. 2-Monopalmitin bile salt micelles ke saath instantly absorb ho jaata hai bina free calcium ko soap banaye bind kiye. Stools perfectly soft rehte hain aur calcium absorption &gt; 90% reach karta hai.</li>
        </ul>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">6. LC-PUFA Biochemistry: DHA ($22:6\\,n-3$) and ARA ($20:4\\,n-6$) Pathways</h3>
    <p>Long-Chain Polyunsaturated Fatty Acids (LC-PUFAs) jisme 20 ya usse zyada carbons aur do ya zyada double bonds hote hain, brain synaptic membranes aur retinal photoreceptors ke structural architecture ke liye absolute determinants hain.</p>

    <p class="mt-2"><strong>The Hepatic Desaturase Bottleneck:</strong></p>
    <p class="text-xs text-gray-700">Human body mein do essential parent fatty acid cascades hote hain:</p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700 mt-1">
        <li><strong>&omega;-6 Series:</strong> Linoleic Acid (LA, 18:2 n-6) &rarr; [&Delta;6-desaturase] &rarr; &gamma;-Linolenic Acid (18:3) &rarr; [elongase] &rarr; Dihomo-&gamma;-linolenic (20:3) &rarr; [&Delta;5-desaturase] &rarr; <strong>Arachidonic Acid (ARA, 20:4 n-6)</strong>.</li>
        <li><strong>&omega;-3 Series:</strong> &alpha;-Linolenic Acid (ALA, 18:3 n-3) &rarr; [&Delta;6-desaturase] &rarr; Stearidonic Acid (18:4) &rarr; [elongase] &rarr; Eicosatetraenoic (20:4) &rarr; [&Delta;5-desaturase] &rarr; EPA (20:5) &rarr; [elongase/&beta;-oxidation] &rarr; <strong>Docosahexaenoic Acid (DHA, 22:6 n-3)</strong>.</li>
    </ul>
    <p class="text-xs text-gray-700 mt-2"><strong>The Clinical Bottleneck:</strong> Newborn infants, especially preterm infants, ke liver mein microsomal enzymes <strong>&Delta;6-desaturase (FADS2 gene)</strong> aur <strong>&Delta;5-desaturase (FADS1 gene)</strong> functional roop se immature hote hain. Baby ALA aur LA se sufficient DHA aur ARA convert nahi kar sakta (conversion rate &lt; 1%). Bina preformed DHA/ARA supplementation ke cerebral cortex aur retina mein membrane fluidity deficient reh jaati hai, causing cognitive and visual impairment.</p>
    <p class="text-xs text-gray-700 mt-1">Industrial dairy technology mein microalgae (<em>Schizochytrium sp.</em>) se extracted vegetarian DHA oil aur soil fungus (<em>Mortierella alpina</em>) se extracted ARA oil ko <strong>1:1.5 se 1:2 ratio</strong> mein infant formula lipid phase mein include kiya jaata hai under 100% nitrogen blanket to prevent autoxidation.</p>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">7. Carbohydrate Biophysics & Microbiome Engineering: Lactose vs HMOs & GOS/FOS</h3>
    <p>Carbohydrates infant formula mein 40 se 45% total energy provide karte hain aur saath hi intestinal colonization aur brain development ko guide karte hain.</p>

    <p class="mt-2"><strong>The Biological Imperative of Lactose:</strong></p>
    <p class="text-xs text-gray-700">Codex aur FSSAI standards ke mutabik Stage 1 formula mein <strong>Lactose total carbohydrates ka at least 90% (min 4.5 g/100 kcal) hona mandatory hai</strong>. Lactose $eta$-D-galactose aur $lpha$-D-glucose ka disaccharide hai linked via $eta(1ightarrow4)$ glycosidic bond.</p>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700 mt-1">
        <li><strong>The Galactose-Cerebroside Axis:</strong> Intestinal lactase enzyme lactose ko glucose aur galactose mein break karta hai. Absorbed galactose hepatocytes aur brain oligodendrocytes mein transport hokar <strong>Galactocerebrosides</strong> aur gangliosides banata hai, jo cerebral white matter aur neuronal axon myelin sheaths ke fundamental building blocks hain.</li>
        <li><strong>Gut Acidification & Mineral Bioavailability:</strong> Undigested residual lactose distal ileum aur colon mein enter karke lactic acid bacteria dwara L-lactic acid mein ferment hota hai. Ye luminal pH ko acidic (pH 5.0–5.5) banata hai, jisse calcium, magnesium aur phosphorus soluble rehte hain aur pathogen colonization inhibit hoti hai.</li>
    </ul>

    <p class="mt-3"><strong>Prebiotic Oligosaccharides (HMOs & GOS/FOS 9:1):</strong></p>
    <p class="text-xs text-gray-700">Mother's milk ke 200+ Human Milk Oligosaccharides (HMOs) ko mimic karne ke liye precision fermentation se <strong>2'-Fucosyllactose (2'-FL)</strong> aur enzymatically synthesised <strong>Short-chain GOS (DP 2–8 from lactose) + Long-chain FOS (DP 10–60 from chicory inulin) in a 9:1 ratio</strong> use kiya jaata hai. Ye combination <em>Bifidobacterium infantis</em> aur <em>Lactobacillus</em> ko selectively grow karati hai, jo mucosal immunoglobulins (sIgA) stimulate karte hain aur pathogens ke intestinal attachment ko block karte hain.</p>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">8. Industrial Manufacturing Flowchart: 13-Step Process with Critical Control Points</h3>
    <p class="text-xs text-gray-700 mb-2">Stage 1 Infant Milk Formula ka complete 13-step automated continuous manufacturing process with PRPs, oPRPs, aur CCPs:</p>
    
    <div class="my-6 p-3 sm:p-5 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 rounded-2xl border-2 border-indigo-200/80 shadow-sm">
        <div class="flex items-center justify-between gap-2 flex-wrap pb-3 mb-4 border-b border-indigo-100">
            <div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm">
                        ⚡
                    </span>
                    <h4 class="!m-0 !p-0 !bg-none !border-none text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">
                        Stage 1 Infant Milk Formula (0–6 Months) — Industrial Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">Complete 13-Step Automated Continuous Manufacturing Process with Integrated PRPs, oPRPs, and CCPs</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                13-STEP CCP FLOWCHART
            </span>
        </div>
        
        <div class="flowchart-steps-wrapper max-w-3xl mx-auto">
            
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-blue-200 bg-blue-50/30 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-blue-600 text-white">
                    STEP 01
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-blue-950 font-bold">
                    Raw Milk Reception & High-Hygiene Screening
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: RAW MILK INTAKE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Grade-A bovine milk strictly <= 4°C par receive karna. Rapid Charm Trio testing se antibiotic residues (Beta-lactams, Tetracyclines < 0.004 ppm), Aflatoxin M1 < 0.025 µg/kg aur total spore count < 50 CFU/mL verify karna.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≤ 4.0°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Antibiotics</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.0 ppm (Zero)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Aflatoxin M1</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.025 µg/kg</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Total Spores</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 50 CFU/mL</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 02
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    Centrifugal Clarification, Bactofugation & Separation
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">PHYSICAL CLEANING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Somatic cells aur debris nikalna. Hermetic bactofugation at 9,000×g se 98.5% heat-resistant bacterial spores (Bacillus cereus aur Clostridium) separate ho jaate hain bina native whey proteins ko heat-damage kiye.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Separator Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">55°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Bactofuge G-Force</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">9,000 × g</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Spore Reduction</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 98.5%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Fat Removal</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">To 0.05% Skim</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-amber-300 bg-amber-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-amber-500 text-white">
                    STEP 03
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-amber-950 font-bold">
                    Wet Recombination & Demineralized Whey (60:40 Ratio)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: PROTEIN RATIO</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Skim milk mein D90 Demineralized Whey Powder (90% minerals removed, ash < 1.0%) aur pharma-grade beta-lactose inject karke Whey:Casein ratio ko exactly 60:40 standard par lock kiya jaata hai (human breast milk ke barabar).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Whey : Casein</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60 : 40 Ratio</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Ash Reduction</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">90% Removed (D90)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Carbohydrate</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">7.2% Lactose</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Target Solids</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">18–20% TS</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 04
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    Lipid Phase Preparation & Structured sn-2 OPO Dosing
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">LIPID SYSTEM</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Nitrogen atmosphere mein 60°C par structured lipid blend prepare karna: Structured sn-2 OPO triacylglycerol, high-oleic sunflower, coconut, fungal ARA oil, aur algal DHA oil with fat-soluble vitamins (A, D, E, K).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Oil Blend Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Atmosphere</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% N₂ Blanket</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">sn-2 Palmitate</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 70% at sn-2</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">DHA : ARA</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1 : 1.5 ratio</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 05
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    High-Shear In-line Emulsification & Pre-heating
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">EMULSION STAGE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Specialized lipid phase ko aqueous protein-lactose stream mein in-line micro-dosing pump se inject karte hain. High-shear Silverson mixer oil droplets ko d50 < 5 µm tak todta hai aur 65°C par pre-heat karta hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Shear Speed</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">3,000 RPM</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Droplet Size</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">d50 < 5 µm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">In-line Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">65°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Deaeration</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Under Vacuum</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 06
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Two-Stage High-Pressure Homogenization
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: SUB-MICRON EMULSION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">High-pressure hydraulic cavitation. First stage 180–200 bar par fat globules ko d32 < 0.8 µm mein todti hai. Second stage 40–50 bar par fat clusters break karti hai. Whey proteins fat droplets par coat hokar free fat release prevent karte hain.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">1st Stage Press</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">180–200 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">2nd Stage Press</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">40–50 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Fat Globule d32</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.8 µm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Free Fat Risk</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Zero</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 07
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Thermal Pasteurization / Direct Steam Injection
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: THERMAL KILL</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Critical Control Point 1: Plate heat exchanger par 105°C for 30s (ya DSI 125°C for 5s) thermal kill. Cronobacter sakazakii, Salmonella aur Listeria ka >12D log-reduction achieve hota hai with minimal whey denaturation (< 15%).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Pasteurizer Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">105.0°C ± 0.5°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Holding Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">30 seconds</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Log Reduction</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 12D Kill</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">FDV Divert Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 104.5°C</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 08
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    Multi-Stage Falling Film Vacuum Evaporation
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">CONCENTRATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">MVR technology ke saath 4-effect falling film evaporator. High vacuum (-0.85 bar) aur low product temperature (52°C to 70°C) par milk ko 18% se concentrate karke 48–52% Total Solids banate hain bina lysine destruction ya Maillard browning ke.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Vacuum Level</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">-0.85 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Product Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">52°C to 70°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Target Density</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">48–52% TS</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Steam Economy</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">MVR Energy Saver</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 09
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Vacuum Deaeration & High-Pressure Atomization
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: ATOMIZATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Vacuum deaeration se micro-air bubbles remove karte hain. High-pressure triplex plunger pump concentrate ko 180–220 bar par tungsten carbide swirl nozzles se spray dryer mein ultra-fine mist (60–90 µm) ke roop mein inject karta hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Nozzle Pressure</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">180–220 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Droplet d32</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60–90 µm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Deaeration Vac</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">-0.90 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Concentrate Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">68°C</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 10
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    3-Stage Tall-Form Spray Drying & Agglomeration
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">DRYING STAGE 1 & 2</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Stage 1: Droplets HEPA-filtered hot air (Inlet 185–195°C, Exhaust 82–85°C) se contact karke 15s mein dry hote hain. Powder Stage 2 (Internal Static Fluid Bed at 70°C) mein girta hai. Fines ko recycle karke porous agglomerates banate hain.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Air Inlet Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">185°C – 195°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Air Exhaust Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">82°C – 85°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Internal Bed Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">70°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Moisture Exit</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">~4.5%</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 11
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    External Fluid Bed Lecithination & Conditioning
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">INSTANTIZATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Stage 3: Vibrating fluid bed. Pehle zone mein 0.2–0.3% fractionated sunflower lecithin warm granules par aerosolize kiya jaata hai (contact angle < 15°). Second zone mein dehumidified cold air se powder ko 20°C tak cool karte hain (moisture 2.5–2.8%).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Lecithin Dosing</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.2–0.3% w/w</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Final Moisture</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">2.5% – 2.8%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cooling Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">20°C – 22°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Wettability</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 10 seconds</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 12
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    In-line Sifting, 12,000 Gauss Magnet & Metal Detection
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-4: FOREIGN BODY CONTROL</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Powder 1.0 mm stainless rotary sifter aur 12,000 Gauss Rare-Earth neodymium magnetic grate se pass hota hai. Dual-frequency metal detectors sensitive to >= 0.8 mm Fe, >= 1.0 mm Non-Fe aur >= 1.2 mm SS 316 automatically reject foreign particles.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Sifter Mesh</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.0 mm Stainless</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Magnetic Field</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12,000 Gauss</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Ferrous Detect</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 0.8 mm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">SS 316 Detect</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 1.2 mm</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 13
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Vacuum Nitrogen Flushing (MAP) & Can Double-Seaming
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-5: MAP OXYGEN CONTROL</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">ISO Class 7 cleanroom (+30 Pa positive pressure) mein cans ko vacuum (-0.95 bar) karke 98% N₂ + 2% CO₂ gas flush karte hain. Double-seam hermetic closure. Residual headspace oxygen < 1.0% ensure karke 24 months shelf life lock ki jaati hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Vacuum Depth</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">-0.95 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Flush Gas</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">98% N₂ + 2% CO₂</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Residual O₂</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.0% (target <0.5%)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Shelf Life</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">24 Months</strong></div></div>
    </div>
    
        </div>
    </div>
    

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">9. Spray Drying Physics, Glass Transition ($T_g$) & Lecithination Kinetics</h3>
    <p>Infant formula powder manufacturing amorphous state glassy systems ke thermodynamics aur droplet surface chemistry se govern hoti hai.</p>

    <p class="mt-2"><strong>The Gordon-Taylor Equation & The Danger of Stickiness:</strong></p>
    <p class="text-xs text-gray-700">Infant formula powder mein lagbhag 55–60% lactose ek metastable <strong>amorphous (glassy) state</strong> mein rehta hai, jo sub-micron fat globules aur protein chains ko encapsulate karke rakhta hai. Amorphous powder ki physical stability uske <strong>Glass Transition Temperature ($T_g$)</strong> par depend karti hai, mathematically modeled by the Gordon-Taylor equation:</p>
    
    <div class="p-3 bg-slate-100 border border-slate-300 rounded-lg mt-2">
        <p class="font-mono text-xs text-slate-900 text-center font-bold">T_g (blend) = (w₁ · T_{g1} + k · w₂ · T_{g2}) / (w₁ + k · w₂)</p>
        <p class="text-xs text-slate-800 mt-1">Jahan $w_1$ dry solids mass fraction hai ($T_{g1} pprox 101^\\circ	ext{C}$ pure anhydrous amorphous lactose), $w_2$ water fraction hai ($T_{g2} pprox -135^\\circ	ext{C}$ for pure water), aur $k pprox 6.7$ constant hai. Water ek powerful plasticizer hai: moisture 2.5% se badh kar 5.0% hote hi powder ka $T_g$ <strong>65°C se gir kar 35°C</strong> par drop ho jaata hai!</p>
        <p class="text-xs text-slate-800 mt-1">Agar spray dryer chamber ya storage mein powder temperature uske $T_g$ se 20°C upar chala jaye ($T - T_g > 20^\\circ	ext{C}$), toh amorphous lactose instantly rubbery state mein transition kar jaata hai (The Sticky Curve). Powder dryer walls aur cyclones par permanently chipak jaata hai, caking hoti hai aur fat leak out hokar rapid rancidity generate karta hai.</p>
    </div>

    <p class="mt-3"><strong>Fluid Bed Lecithin Instantization Kinetics:</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li>Infant formula powder granules fat-rich surface ke kaaran intrinsically hydrophobic hote hain (water contact angle $	heta > 90^\\circ$). Paani daalne par granules float karte hain aur dissolve nahi hote.</li>
        <li>External vibrating fluid bed mein warm powder granules par <strong>0.2%–0.3% fractionated non-GMO sunflower lecithin</strong> (rich in phosphatidylcholine) aerosol spray kiya jaata hai. Lecithin ke polar phosphate heads water-oriented ho jaate hain, slashing the water contact angle from $	heta > 90^\\circ$ down to <strong>$	heta < 15^\\circ$</strong>.</li>
        <li>Result: Powder baby bottle mein warm water (40°C) daalte hi <strong>less than 10 seconds</strong> mein bina kisi lumps ke 100% instantly disperse ho jaata hai.</li>
    </ul>
    `
            },
            "stage2-followup": {
                title: "B. Follow-Up Formula (Stage 2: 6–12 Months) & Growing-Up Milk",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. Physiological Science of Transition at 6 Months</h3>
    <p>6 months of age par infant ki digestive, metabolic aur renal physiology significant milestone par enter karti hai. Is stage par diet ko transition karna pediatric science ka important rule hai:</p>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Renal Maturation:</strong> Glomerular Filtration Rate (GFR) adult capacity ke 70–80% tak reach kar jaati hai, jisse infant higher mineral load aur protein nitrogen waste ko easily concentrate aur excrete kar sakta hai.</li>
        <li><strong>Pancreatic Amylase Secretion:</strong> 6 months se pehle pancreatic &alpha;-amylase secretion minimal hota hai. 6 months ke baad exocrine pancreas mature ho jaata hai, allowing efficient digestion of complex starches aur maltodextrins.</li>
        <li><strong>Hepatic Iron Store Exhaustion:</strong> Fetal life ke last trimester mein liver mein store kiya gaya iron 4 se 6 months mein naturally exhaust ho jaata hai. Breast milk ya low-iron formula par strictly rehne se rapid iron-deficiency anemia develop ho sakti hai. Stage 2 follow-up formula higher iron concentration (<strong>1.0–1.3 mg/100 kcal</strong>) ke saath engineered hota hai.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. Iron Biochemistry & The Pro-Oxidant Fenton Reaction Dilemma</h3>
    <p>Stage 2 formulas mein high iron add karna lipid oxidation ka sabse bada cause ban sakta hai agar technology advanced na ho:</p>
    <div class="p-3 bg-red-50 border border-red-200 rounded-lg mt-2">
        <p class="text-xs text-red-900 font-semibold">The Fenton Reaction & DHA/ARA Peroxidation:</p>
        <p class="text-xs text-red-800 mt-1">Free ferrous iron ($Fe^{2+}$) unsaturated lipids ke saath react karke dangerous hydroxyl free radicals ($ullet OH$) produce karta hai:
            <br>$$Fe^{2+} + H_2O_2 \\longrightarrow Fe^{3+} + ullet OH + OH^- \\quad (	ext{Fenton Reaction})$$
            Ye radicals formula ke delicate DHA aur ARA ko oxidize karke rancid metallic fishy off-flavor create kar dete hain.
        </p>
        <p class="text-xs text-red-800 mt-1"><strong>The Solution: Micro-encapsulated Ferrous Bisglycinate:</strong> Iron atom do glycine molecules ke amino aur carboxyl groups se chemically chelate rehta hai. Ye neutral chelate lipid phase mein reactive free $Fe^{2+}$ ions liberate nahi karta aur stomach acid mein stable rehta hai. Small intestine ke mucin layer par directly intact absorb hokar <strong>4 times higher bioavailability</strong> deta hai bina kisi gastric irritation ya metallic taste ke.</p>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. Whey : Casein Transition (60:40 &rarr; 50:50 &rarr; 20:80)</h3>
    <p>Jaise-jaise infant liquid milk exclusivity se family solid foods ki taraf badhta hai, formula ka protein architecture progressively modify kiya jaata hai:</p>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Stage 2 (6–12 Months):</strong> Whey:Casein ratio ko <strong>50:50</strong> par adjust kiya jaata hai. Protein level <strong>1.6–2.0 g/100 kcal (13–15 g/100g powder)</strong> set kiya jaata hai. Gastric acid output mature hone ke kaaran 50:50 ratio moderately firm clot banata hai jo satiety duration prolong karta hai aur infant ko nighttime sleep mein hunger se awaken hone se bachata hai.</li>
        <li><strong>Stage 3 Toddler Growing-Up Milk (1–3 Years):</strong> Ratio ko <strong>40:60 ya 20:80 (Bovine Milk Parity)</strong> par laya jaata hai. Protein density 2.0–2.6 g/100 mL rehti hai, jo toddler ke rapid muscular growth aur active play ko fuel karti hai.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. Carbohydrate Engineering: Dextrose Equivalent (DE) & Osmolality Control</h3>
    <p>Stage 2 aur Stage 3 formulas mein pure lactose ko partially replace karke <strong>Maltodextrin (10–15 DE)</strong> aur glucose polymers include kiye jaate hain.</p>
    
    <p class="mt-2 text-xs text-gray-700"><strong>The Dextrose Equivalent (DE) Physics:</strong></p>
    <p class="text-xs text-gray-700">Dextrose Equivalent dry matter par reducing sugars ka percentage measure karta hai ($DE = 100$ for pure glucose, $DE = 0$ for raw starch). <strong>DE 10 to 15 Maltodextrin</strong> medium-chain glucose polymers (DP 6 to 10) se bana hota hai. Iska molecular weight lactose ($MW = 342	ext{ Da}$) se kaafi zyada hota hai:</p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700 mt-1">
        <li>Maltodextrin DE 10–15 formula solution ki <strong>osmolality ko isotonic (< 280 mOsm/kg)</strong> rakhta hai even at higher caloric densities.</li>
        <li>Ye pancreatic $lpha$-amylase dwara easily digest hota hai, delivering steady, non-spiking glucose curves to growing infants without provoking osmotic diarrhea.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">5. Thermal Damage Kinetics & The Maillard Reaction (Furosine & HMF Limits)</h3>
    <p>Stage 2 aur 3 powders ki manufacturing ke dauran reducing sugars (lactose, maltodextrin) concentrated milk proteins ke saath high heat par aate hain. Ye <strong>Maillard Reaction (non-enzymatic browning)</strong> trigger karta hai.</p>
    
    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-3">
        <p class="text-xs text-amber-900 font-semibold">The Maillard Cascade in Infant Formula:</p>
        <p class="text-xs text-amber-800 mt-1">Free lactose aldehyde group lysine ke $\\epsilon$-amino group se react karke Amadori compounds (lactulosyl-lysine) banata hai. Severe heat mein ye degrade hokar Advanced Glycation End-products (AGEs) aur toxic <strong>Hydroxymethylfurfural (HMF)</strong> generate karta hai.</p>
        <p class="text-xs text-amber-800 mt-1"><strong>The Nutritional Penalty:</strong> Lysine infant growth ke liye strictly essential amino acid hai. Amadori reaction se bound lysine biologically unavailable ho jaata hai. Premium manufacturing mein thermal damage ko strictly monitor kiya jaata hai:</p>
        <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-amber-800 mt-1">
            <li><strong>Furosine Limit:</strong> Acid hydrolysis ke baad furosine level strictly <strong>&lt; 250 mg / 100g protein</strong> hona chahiye (higher values indicate severe heat abuse).</li>
            <li><strong>Available Lysine:</strong> Total lysine ka at least <strong>&gt; 92% available</strong> hona mandatory hai. Low-temperature falling film evaporation (55°C) aur short-residence tall-form spray drying se thermal damage virtually zero rakha jaata hai.</li>
        </ul>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">6. Hybrid Wet-Mix / Dry-Blend Manufacturing Flowchart</h3>
    <p class="text-xs text-gray-700 mb-2">Stage 2 Follow-Up Formula ka complete 7-step industrial manufacturing flowchart with integrated CCPs:</p>
    
    <div class="my-6 p-3 sm:p-5 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 rounded-2xl border-2 border-indigo-200/80 shadow-sm">
        <div class="flex items-center justify-between gap-2 flex-wrap pb-3 mb-4 border-b border-indigo-100">
            <div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm">
                        ⚡
                    </span>
                    <h4 class="!m-0 !p-0 !bg-none !border-none text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">
                        Stage 2 Follow-Up Formula (6–12 Months & Toddler) — Manufacturing Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">Dual-Carbohydrate (Lactose + Malto DE 15), Micro-encapsulated Iron Fortification & Spray Drying Process Flowchart with CCPs</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                7-STEP FOLLOW-UP FORMULA FLOWCHART
            </span>
        </div>
        
        <div class="flowchart-steps-wrapper max-w-3xl mx-auto">
            
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-blue-200 bg-blue-50/30 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-blue-600 text-white">
                    STEP 01
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-blue-950 font-bold">
                    Bovine Skim Base Formulation (Casein-Dominant 50:50)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: BASE MIXING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">6–12 months infants ke liye higher protein (13–15 g/100g) formulation. Skim milk solids aur WPC-35/80 ko blend karke Whey:Casein ratio ko 50:50 ya 40:60 par standardize kiya jaata hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Whey : Casein</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">50 : 50 Ratio</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Protein Target</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">13.5 – 15.0 g/100g</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Ash Level</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 3.5%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Solids TS</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">20% – 22%</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 02
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    Maltodextrin DE 12–15 & Dual-Carbohydrate Blending
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">CARBOHYDRATE PHASE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Stage 2 mein pancreatic amylase mature ho jaata hai. Lactose ke saath low-DE Maltodextrin (DE 12–15, 30% of total carbs) blend kiya jaata hai to enhance energy density aur satiety without hypertonicity.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Maltodextrin DE</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">DE 12 – 15</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Carb Ratio</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">70% Lactose : 30% Malto</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Osmolality Target</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 280 mOsm/kg</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Solubility</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% at 50°C</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-amber-300 bg-amber-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-amber-500 text-white">
                    STEP 03
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-amber-950 font-bold">
                    Micro-encapsulated Ferrous Bisglycinate (Iron Fortification)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: IRON CONTROL</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">6 months ke baad neonatal liver iron stores deplete ho jaate hain. Micro-encapsulated Ferrous Bisglycinate ya Ferrous Fumarate (1.0–1.3 mg/100 kcal) inject kiya jaata hai lipid oxidation aur metallic off-flavor prevent karne ke liye.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Iron Level</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.0 – 1.3 mg/100 kcal</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Source</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Ferrous Bisglycinate</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Fat Oxidation</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Protected by Lipid Shell</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Zinc Co-Factor</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.7 mg/100 kcal</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 04
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    High-Pressure Emulsification & Homogenization
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: EMULSION INTEGRITY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Vegetable oils (palm-free oleic sunflower, coconut, soy) aur DHA/ARA blend ko aqueous slurry mein disperse karke 2-stage homogenizer (180/40 bar) se pass karte hain. Fat globule size < 1.0 µm achieve hota hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">1st Stage Press</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">180 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">2nd Stage Press</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">40 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Fat Globule d90</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.0 µm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Inlet Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">65°C</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 05
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    High-Temperature Short-Time (HTST) Pasteurization
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: MICROBIAL SAFETY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Slurry ko 105°C par 25 seconds HTST pasteurize karte hain to guarantee vegetative pathogen destruction. Direct steam vacuum flashing se off-odors strip out kiye jaate hain.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Pasteurizer Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">105.0°C ± 0.5°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Hold Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">25 Seconds</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Spore Inactivation</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 99.0%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Divert Setpoint</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 104.2°C</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 06
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    Multi-Effect Evaporation & Multi-Stage Spray Drying
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">DRYING & AGGLOMERATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Falling film MVR evaporator se 50% TS concentrate banakar tall-form spray dryer (Inlet 180°C, Exhaust 80°C) mein dry karte hain. Integrated fluid bed conditioning se instant dispersible powder banta hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Concentrate TS</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">48% – 50%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Dryer Inlet Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">180°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Exhaust Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">80°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Final Moisture</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">2.8% – 3.2%</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 07
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Sanitary Sifting, Rare-Earth Magnet & MAP Packaging
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: FOREIGN BODY & MAP</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">1.0 mm sifter, 12,000 Gauss magnetic trap, aur metal detector se pass karke nitrogen-flushed barrier tins (headspace O₂ < 1.5%) mein seal karte hain. Stage 2 complete nutritional profile locked.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Sifter Mesh</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.0 mm Stainless</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Magnetic Field</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12,000 Gauss</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Residual O₂</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.5%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Shelf Life</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">24 Months</strong></div></div>
    </div>
    
        </div>
    </div>
    
    `
            },
            "cereal-weaning": {
                title: "C. Infant Cereal Weaning Foods & Roller-Drying Technology",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. Cereal Grain Selection, Decontamination & Heavy Metal Control</h3>
    <p>Cereal-based baby foods (pediatrics aur dairy industry mein commonly <strong>Complementary Weaning Foods / Cerelac Type</strong>) 6 months onwards infants ke liye design kiye jaate hain as a bridge between exclusive liquid milk feeding and adult solid foods.</p>

    <p class="mt-2 text-xs text-gray-700"><strong>Grain Selection &amp; Heavy Metal Safety:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Polished Broken Rice &amp; Organic Wheat:</strong> Rice naturally hypoallergenic aur gluten-free hota hai, making it ideal first weaning food. Wheat high-protein structure provide karta hai.</li>
        <li><strong>Toxicological Decontamination Limits:</strong> Cereal crops soil se heavy metals aur mycotoxins absorb kar lete hain. Infant foods ke liye regulatory limits normal adult food se <strong>10 to 50 times stricter</strong> hoti hain:
            <br>&bull; <strong>Inorganic Arsenic (As):</strong> Maximum allowable limit strictly <strong>&le; 0.10 mg/kg (100 ppb)</strong> in dry cereal powder (FSSAI 2020 / EU 2016/1005).
            <br>&bull; <strong>Lead (Pb):</strong> Strictly <strong>&le; 0.05 mg/kg (50 ppb)</strong>.
            <br>&bull; <strong>Cadmium (Cd):</strong> Strictly <strong>&le; 0.04 mg/kg</strong>.
            <br>&bull; <strong>Mycotoxins (Fungal Toxins):</strong> Aflatoxin B1 strictly <strong>&le; 0.10 &mu;g/kg</strong> (adult limit 10–20 &mu;g/kg), Deoxynivalenol (DON) &le; 200 &mu;g/kg, Ochratoxin A &le; 0.50 &mu;g/kg. Raw grain lots ICP-MS aur LC-MS/MS testing pass karne ke baad hi storage silos mein unload hote hain.
        </li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. Rheological Transformation of Cereal Starch: Enzymatic Liquefaction</h3>
    <p>6 months of age ke baad complementary weaning foods introduce karna necessary ho jaata hai. Industrial infant cereal manufacturing (jaise Cerelac) mein sabse bada engineering hurdle hai <strong>Starch Viscosity vs. Nutrient Density Paradox</strong>:</p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li>Infant ka stomach volume limited hota hai (lagbhag <strong>200–250 mL per meal</strong>).</li>
        <li>Agar raw whole wheat, rice ya oat flour ko paani mein boil karke 10% se zyada solids par banaya jaye, toh starch granules gelatinize hokar ek thick, viscous, unswallowable paste bana dete hain jise chhota bacha nigal nahi sakta.</li>
        <li>Agar slurry ko thin rakha jaye, toh caloric density drop hokar &lt; 0.3 kcal/mL reh jaati hai, jisse infant malnourished ho jaata hai.</li>
    </ul>

    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-2">
        <p class="text-xs text-amber-900 font-semibold">Thermostable Alpha-Amylase Bioreactor Cleavage:</p>
        <p class="text-xs text-amber-800 mt-1">Cereal slurry (wheat, rice, ragi 32% TS) ko 80°C par thermal gelatinization ke baad 75°C par food-grade thermostable bacterial &alpha;-amylase (<em>Bacillus licheniformis</em>) se treat karte hain. Enzyme amylose aur amylopectin ke internal &alpha;-(1,4)-glucosidic bonds ko rapidly hydrolyze karta hai. Slurry ki viscosity <strong>15,000 cP se gir kar &lt; 1,500 cP</strong> ho jaati hai.</p>
        <p class="text-xs text-amber-800 mt-1">Isse <strong>32% to 35% Total Solids</strong> par bhi fluid slurry maintain rehti hai, delivering high caloric density (<strong>0.8–1.0 kcal/mL</strong>) in tiny gastric volume. Enzyme ko 115°C par 60 seconds heat dekar permanently deactivate kiya jaata hai.</p>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. Twin-Drum Roller Dryer (Roller Drying Technology) Engineering</h3>
    <p>Cereal baby foods ke liye spray drying ke bajaye <strong>Twin-Drum Roller Dryers</strong> use hote hain jo authentic porous flake structure deliver karte hain:</p>
    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Drum Dynamics:</strong> Do counter-rotating internally steam-heated cast-iron cylinders (Steam pressure 6–8 bar, drum surface temperature <strong>135°C–145°C</strong>, gap clearance 0.25–0.35 mm, rotation speed 4–6 RPM).</li>
        <li><strong>Flash Film Cooking:</strong> Liquefied cereal slurry drums ke nip mein feed hoti hai. Slurry <strong>2 se 4 seconds</strong> mein thin sheet ke roop mein flash cook aur dry ho jaati hai, achieving &gt; 98% complete starch gelatinization.</li>
        <li><strong>Doctor Knife Peeling &amp; Granulation:</strong> Hardened doctor knives continuous dried sheet ko roll surface se peel karte hain. Flakes rotary granulator mill mein pass hokar porous instant flakes ban jaati hain jo warm milk ya water daalte hi bina lumps ke instant smooth baby porridge banati hain.</li>
        <li><strong>Post-Drying Probiotic Fortification:</strong> Cleanroom packaging zone mein vacuum blender dwara heat-sensitive <em>Bifidobacterium lactis</em> BB-12 (&gt; 10⁶ CFU/g) aur freeze-dried real fruit powders blend kiye jaate hain.</li>
    </ul>

    <p class="text-xs text-gray-700 mt-3 mb-2">Cereal-Based Complementary Weaning Foods ka complete 8-step industrial flowchart with CCPs:</p>
    
    <div class="my-6 p-3 sm:p-5 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 rounded-2xl border-2 border-indigo-200/80 shadow-sm">
        <div class="flex items-center justify-between gap-2 flex-wrap pb-3 mb-4 border-b border-indigo-100">
            <div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm">
                        ⚡
                    </span>
                    <h4 class="!m-0 !p-0 !bg-none !border-none text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">
                        Cereal-Based Complementary Baby Foods (Weaning Foods / Cerelac Type) — Roller Drying Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">Enzymatic Starch Liquefaction, Twin-Drum Roller Dryer (140°C), Flaking & Probiotic Fortification Flowchart with CCPs</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                8-STEP ROLLER DRYING WEANING FLOWCHART
            </span>
        </div>
        
        <div class="flowchart-steps-wrapper max-w-3xl mx-auto">
            
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-blue-200 bg-blue-50/30 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-blue-600 text-white">
                    STEP 01
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-blue-950 font-bold">
                    Grain Reception, De-stoning & Dry Milling
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: GRAIN SAFETY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Whole grains (Wheat, Rice, Oats, Ragi, Corn) receive karke gravity separators se stones aur foreign grains remove karte hain. Hammer mills se multi-flour meal (< 250 µm particle size) grind karte hain. Deoxynivalenol (DON) < 200 µg/kg screen.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Moisture</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 12.0%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Mycotoxins</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 200 µg/kg</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Heavy Metals</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Pb < 0.05 ppm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Particle Size</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 250 µm Screen</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 02
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    Aqueous Slurry Reconstitution & Thermal Gelatinization
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">GELATINIZATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Cereal flour ko demineralized water mein 30–35% total solids par slurry banaya jaata hai. Slurry jacketed scraped-surface tank mein 80°C–85°C par 15 minutes heat hoti hai jisse raw starch granules completely gelatinize ho jaate hain.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Slurry Solids</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">30% – 35% TS</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Gelatinization Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">82°C – 85°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Hold Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">15 Minutes</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Starch State</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% Swollen Gel</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-amber-300 bg-amber-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-amber-500 text-white">
                    STEP 03
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-amber-950 font-bold">
                    Controlled Enzymatic Liquefaction (Bacterial Alpha-Amylase)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: VISCOSITY CONTROL</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Thermostable alpha-amylase (Bacillus licheniformis) 0.05% w/w par dose karke gelatinized starch ke &alpha;-(1,4) bonds ko cleave kiya jaata hai. Viscosity 15,000 cP se drop hokar < 1,500 cP ho jaati hai (high-energy density weaning food).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Enzyme Source</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Thermostable Alpha-Amylase</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Reaction Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">75°C ± 2°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Reaction Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12 – 15 Minutes</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Viscosity Drop</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">15,000 → 1,200 cP</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 04
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Thermal Enzyme Deactivation & Dairy-Lipid Blending
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: ENZYME KILL</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Slurry ko tubular heater mein 115°C par 60s pass karke alpha-amylase ko permanently kill kiya jaata hai. Dairy base (skim milk, WPC), vegetable oils, aur heat-stable vitamins slurry mein high-shear mix kiye jaate hain.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Kill Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">115.0°C ± 1.0°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Holding Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60 Seconds</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Residual Enzyme</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.0% Inactive</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Dairy Solids Added</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">To 40% TS</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 05
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Twin-Drum Roller Dryer Film Cooking & Flaking
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: ROLLER DRYING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Internally steam-heated cast-iron twin drums (Steam pressure 6–8 bar, surface temp 135°C–145°C, drum clearance 0.25–0.35 mm, rotation 4–6 RPM). Slurry 2–4 seconds mein thin sheet ban kar cook aur dry hoti hai. Doctor knives sheet peel karte hain.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Drum Surface Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">135°C – 145°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Steam Pressure</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">6 – 8 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Drum Clearance</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.25 – 0.35 mm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Film Moisture</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">2.5% – 3.0%</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 06
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    Granulator Milling & Particle Sizing
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">GRANULATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Dried cereal sheets sanitary granulator mill mein pass hokar uniform porous flakes ban jaati hain. Flakes instantly rehydrate hoti hain jab warm milk ya water add kiya jaata hai (instant baby porridge texture).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Flake Thickness</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.20 – 0.25 mm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Bulk Density</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.32 – 0.38 g/mL</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Reconstitution</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Instant smooth pap</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Screen Aperture</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.2 mm Stainless</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-amber-300 bg-amber-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-amber-500 text-white">
                    STEP 07
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-amber-950 font-bold">
                    Post-Drying Dry-Blending (Probiotics, Iron, Fruit Powders)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-2: HEAT-SENSITIVE BLEND</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Cleanroom zone mein vacuum pneumatic blender dwara heat-sensitive components add kiye jaate hain: Micro-encapsulated Bifidobacterium lactis BB-12 (10⁶ CFU/g), freeze-dried fruit powders, ascorbic acid, aur minerals.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Probiotic Viability</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 10⁶ CFU/g BB-12</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Fruit Solids</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Spray-Dried Real Fruit</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Uniformity RSD</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 2.5%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Moisture Control</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 3.0%</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 08
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    12,000 Gauss Magnet, Sifting & Nitrogen Barrier Packaging
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: PACKAGING INTEGRITY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">1.2 mm sifter, rare-earth magnet trap, aur metal detector se pass hokar aluminum laminate pouches ya bag-in-box tins mein nitrogen flush (O₂ < 2.0%) ke saath hermetically pack kiya jaata hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Magnet Field</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12,000 Gauss</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Residual O₂</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 2.0%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Moisture Barrier</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Alu-Foil Laminate</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Shelf Life</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">18 Months</strong></div></div>
    </div>
    
        </div>
    </div>
    

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. FSSAI Compositional Standards for Cereal-Based Infant Foods</h3>
    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Parameter (FSSAI 2020)</th>
                    <th class="p-2 border">With Milk Solids (Cerelac Type)</th>
                    <th class="p-2 border">Without Milk Solids</th>
                </tr>
            </thead>
            <tbody>
                <tr><td class="p-2 border"><strong>Moisture % by weight</strong></td><td class="p-2 border">Not more than 5.0%</td><td class="p-2 border">Not more than 5.0%</td></tr>
                <tr><td class="p-2 border"><strong>Protein (Dry Basis)</strong></td><td class="p-2 border"><strong>Not less than 15.0%</strong></td><td class="p-2 border">Not less than 10.0%</td></tr>
                <tr><td class="p-2 border"><strong>Total Fat % by weight</strong></td><td class="p-2 border"><strong>Not less than 7.5%</strong></td><td class="p-2 border">Not less than 2.0%</td></tr>
                <tr><td class="p-2 border"><strong>Total Carbohydrates</strong></td><td class="p-2 border">Not more than 68.0%</td><td class="p-2 border">Not more than 75.0%</td></tr>
                <tr><td class="p-2 border"><strong>Total Ash % by weight</strong></td><td class="p-2 border">Not more than 5.0%</td><td class="p-2 border">Not more than 3.0%</td></tr>
                <tr><td class="p-2 border"><strong>Iron (Fe) Fortification</strong></td><td class="p-2 border"><strong>5.0 – 12.0 mg / 100g</strong></td><td class="p-2 border">5.0 – 12.0 mg / 100g</td></tr>
                <tr><td class="p-2 border"><strong>Vitamin A (Retinol)</strong></td><td class="p-2 border">350 – 500 &mu;g / 100g</td><td class="p-2 border">350 – 500 &mu;g / 100g</td></tr>
                <tr><td class="p-2 border"><strong>Vitamin C (Ascorbic Acid)</strong></td><td class="p-2 border">Not less than 35 mg / 100g</td><td class="p-2 border">Not less than 35 mg / 100g</td></tr>
            </tbody>
        </table>
    </div>
    `
            },
            "specialized-formula": {
                title: "D. Specialized & Medical Infant Formulas (Lactose-Free, Hypoallergenic, Preterm)",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. Lactose-Free (LF) Formula: Osmotic Diarrhea Pathophysiology</h3>
    <p>Lactose-Free (LF) infant formulas un infants ke liye indicate hoti hain jo <strong>Congenital Alactasia</strong> (rare genetic absence of lactase) ya, far more commonly, <strong>Secondary Lactase Deficiency</strong> se suffer karte hain following acute viral gastroenteritis (jaise Rotavirus infection jo intestinal brush-border villi ko denude kar deta hai).</p>

    <div class="p-3 bg-blue-50 border border-blue-200 rounded-lg mt-2">
        <p class="text-xs text-blue-900 font-semibold">Lactose Osmotic Diarrhea Mechanism:</p>
        <p class="text-xs text-blue-800 mt-1">Jab damaged enterocytes lactase produce nahi kar paate, toh unabsorbed lactose lumen mein accumulate ho jaata hai. Ye osmotic gradient create karta hai jo systemic circulation se massive water ko bowel lumen mein kheench leta hai ($\\Delta \\Pi > 100	ext{ mOsm/kg}$). Colonic bacteria lactose ko ferment karke hydrogen gas ($H_2$) aur lactic acid banate hain, leading to explosive acidic diarrhea ($pH < 5.0$), severe perianal excoriation, dehydration aur electrolyte shock.</p>
        <p class="text-xs text-blue-800 mt-1"><strong>The Formulation Solution:</strong> 100% lactose replacement with pharmaceutical <strong>Maltodextrin (DE 10 to 15)</strong> aur glucose syrup solids. DE 10–15 polymers low osmolality provide karte hain jo damaged villi ko rest aur regenerate hone ka time dete hain. FSSAI limit: Residual lactose <strong>strictly &lt; 10 mg / 100 kcal</strong>.</p>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. Hypoallergenic (HA) & Extensively Hydrolyzed Formulas (eHF) for CMPA</h3>
    <p>Cow’s Milk Protein Allergy (CMPA) infancy ka sabse common food allergy hai (2% se 3% infants ko affect karta hai). Ye bovine milk proteins ($eta$-lactoglobulin aur $lpha_{s1}$-casein) ke against IgE-mediated ya cell-mediated hypersensitivity reaction hai (anaphylaxis, bloody stools, severe atopic eczema).</p>

    <ul class="list-disc list-inside space-y-2 ml-4 text-xs text-gray-700">
        <li><strong>Partially Hydrolyzed Formulas (pHF, MW 2,000–5,000 Da):</strong> Moderate enzymatic cleavage. Ye intact proteins se kam allergenic hote hain, lekin inme intact conformational epitopes present rehte hain. <em>pHF strictly high-risk infants mein CMPA prevention ke liye use hota hai; active CMPA wale infant ko pHF dena severe anaphylaxis trigger kar sakta hai.</em></li>
        <li><strong>Extensively Hydrolyzed Formulas (eHF, &gt; 95% peptides &lt; 1,500 Da):</strong> Industrial dual-enzyme bioreactor (endopeptidases + exopeptidases) ke baad ultrafiltration (cut-off 1.5–3.0 kDa). B-cell aur T-cell allergenic epitopes completely destroy ho jaate hain. Mild-to-moderate CMPA ke treatment ke liye worldwide first-line clinical prescription hai.</li>
    </ul>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. Amino Acid-Based Formula (AAF)</h3>
    <p>5% se 10% infants jinko severe refractory CMPA hota hai, wo eHF ke residual short peptides par bhi severe reaction dete hain (presenting with failure to thrive, anaphylaxis, severe atopic dermatitis, ya eosinophilic esophagitis). Inke liye <strong>Amino Acid-Based Formulas (AAF / Elemental Formulas)</strong> mandatory hote hain.</p>
    
    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-2">
        <p class="text-xs text-amber-900 font-semibold">100% Free Crystalline L-Amino Acids:</p>
        <p class="text-xs text-amber-800 mt-1">AAF mein koi cow milk ya soy protein nahi hota. Ye 100% pure synthetic crystalline L-amino acids se formulated hota hai. Because isme zero peptide fragments hote hain, immune system ise bilkul recognize nahi kar sakta (<strong>Zero Allergenicity</strong>). Disadvantage: Free amino acids solution ki osmolality badha dete hain, jisse caloric density aur hydration ko tightly balance karna padta hai.</p>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. Preterm & Low Birth Weight (LBW) Formula: Medium-Chain Triglyceride (MCT) Biophysics</h3>
    <p>Preterm infants (&lt; 37 weeks gestation) aur Low Birth Weight (LBW &lt; 2,500 g) neonates immature gastrointestinal aur renal capacities ke saath deliver hote hain:</p>

    <p class="mt-2 text-xs text-gray-700"><strong>The Preterm Digestive Bottleneck:</strong></p>
    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
        <li>Pancreatic lipase secretion adult capacity ka sirf 10–20% hota hai.</li>
        <li>Bile acid pool size bohot chhota hota hai aur ileal bile reabsorption immature hoti hai, leading to poor fat micellar solubilization.</li>
        <li>Gastric capacity tiny hoti hai (~20–30 mL), requiring high caloric density (<strong>80 kcal / 100 mL</strong> vs 65 standard).</li>
    </ul>

    <p class="mt-2 text-xs text-gray-700"><strong>The 50% Medium-Chain Triglyceride (MCT) Solution:</strong></p>
    <p class="text-xs text-gray-700">Preterm formulas mein total fat ka <strong>40% se 50% Medium-Chain Triglycerides (MCT Oil - Caprylic Acid $C_8$ aur Capric Acid $C_{10}$)</strong> ke roop mein fortify kiya jaata hai. MCTs water-soluble hote hain aur bina pancreatic lipase hydrolysis ya bile salt emulsification ke directly <strong>gastric mucosa aur hepatic portal vein</strong> se absorb ho jaate hain. Ye premature infants ko rapid cellular energy deliver karte hain for vital organ development and catch-up growth.</p>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">5. Comparison Matrix of Specialized Infant Formulas</h3>
    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Formula Category</th>
                    <th class="p-2 border">Protein Source</th>
                    <th class="p-2 border">Carbohydrate Source</th>
                    <th class="p-2 border">Fat Source</th>
                    <th class="p-2 border">Clinical Indications</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2 border"><strong>Lactose-Free (LF)</strong></td>
                    <td class="p-2 border">Intact Whey &plus; Casein</td>
                    <td class="p-2 border">100% Maltodextrin (DE 10–15)</td>
                    <td class="p-2 border">Vegetable Oils &plus; DHA/ARA</td>
                    <td class="p-2 border">Lactase deficiency, post-rotavirus gastroenteritis</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Extensively Hydrolyzed (eHF)</strong></td>
                    <td class="p-2 border">Hydrolyzed Whey/Casein (&lt; 1.5 kDa)</td>
                    <td class="p-2 border">Maltodextrin / Corn syrup solids</td>
                    <td class="p-2 border">Vegetable Oils &plus; MCTs (20–40%)</td>
                    <td class="p-2 border">First-line Cow's Milk Protein Allergy (CMPA)</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Amino Acid-Based (AAF)</strong></td>
                    <td class="p-2 border">100% Free Crystalline L-Amino Acids</td>
                    <td class="p-2 border">Glucose syrup solids, Maltodextrin</td>
                    <td class="p-2 border">Vegetable Oils &plus; MCTs</td>
                    <td class="p-2 border">Severe refractory CMPA, Eosinophilic Esophagitis</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Preterm / LBW</strong></td>
                    <td class="p-2 border">Whey-predominant (2.4–2.8 g/100 kcal)</td>
                    <td class="p-2 border">50% Lactose &plus; 50% Maltodextrin</td>
                    <td class="p-2 border"><strong>40% &ndash; 50% MCT Oil (C8/C10)</strong></td>
                    <td class="p-2 border">Preterm infants &lt; 37 weeks, Low Birth Weight</td>
                </tr>
            </tbody>
        </table>
    </div>

    <p class="text-xs text-gray-700 mt-3 mb-2">Specialized & Medical Infant Formulas ka complete 6-step manufacturing process with CCPs:</p>
    
    <div class="my-6 p-3 sm:p-5 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 rounded-2xl border-2 border-indigo-200/80 shadow-sm">
        <div class="flex items-center justify-between gap-2 flex-wrap pb-3 mb-4 border-b border-indigo-100">
            <div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm">
                        ⚡
                    </span>
                    <h4 class="!m-0 !p-0 !bg-none !border-none text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">
                        Specialized & Medical Infant Formulas (Lactose-Free, Hydrolyzed, Preterm) — Manufacturing Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">Elemental Free Amino Acids, 50% MCT Oil Lipid Matrix, Low-Heat Spray Drying & Nitrogen Packaging Flowchart with CCPs</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                6-STEP SPECIALIZED FORMULA FLOWCHART
            </span>
        </div>
        
        <div class="flowchart-steps-wrapper max-w-3xl mx-auto">
            
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-blue-200 bg-blue-50/30 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-blue-600 text-white">
                    STEP 01
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-blue-950 font-bold">
                    Specialized Substrate Selection (Pure Amino Acids, WPH, Soy)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: ALLERGEN CONTROL</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Hypoallergenic / Elemental formula production ke liye high-purity substrates: Crystalline free L-amino acids (100% non-allergenic), extensively hydrolyzed whey/casein peptides (< 1,500 Da), ya isolated soy protein isolate (100% cow milk protein free).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Protein System</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Free AA / Extensively Hydrolyzed</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Peptide Mass</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1,500 Da (> 95%)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Milk Protein Residue</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1 ppm (ELISA)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Dedicated Line</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Zero Cross-Contamination</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-slate-200 bg-white transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-indigo-600 text-white">
                    STEP 02
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-slate-800 font-bold">
                    Alternative Carbohydrate Dosing (Lactose-Free System)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">CARBOHYDRATE PHASE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Galactosemia aur Congenital Lactase Deficiency ke liye: 100% lactose replacement with pharmaceutical-grade Maltodextrin (DE 10–19), glucose syrup solids, aur sucrose. Residual lactose limit: < 10 mg/100 kcal (Lactose-Free Certified).</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Carb Source</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% Maltodextrin DE 10–15</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Residual Lactose</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 10 mg/100 kcal</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Osmolality Target</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">260 – 290 mOsm/kg</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Galactose</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Undetectable</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-amber-300 bg-amber-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-amber-500 text-white">
                    STEP 03
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-amber-950 font-bold">
                    Preterm Lipid System (50% Medium-Chain Triglycerides - MCTs)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: MCT DOSING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Preterm / Low Birth Weight (LBW) infants ke liye jinki bile acid secretion immature hoti hai: 40%–50% of total fat as Medium-Chain Triglycerides (MCT Oil C8/C10). MCTs directly portal vein se absorb hote hain bina pancreatic lipase ya bile salts ke.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">MCT Level</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">40% – 50% of Total Fat</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Fatty Acid Profile</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Caprylic C8 & Capric C10</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Pancreatic Lipase</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Independent Absorption</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Caloric Density</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">80 kcal/100 mL</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 04
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    High-Shear Emulsification & Two-Stage Homogenization
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: EMULSION FORMATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Slurry ko Silverson high-shear mixer aur two-stage high-pressure homogenizer (200/50 bar) se process karte hain. Emulsion stability critically maintained hoti hai jisse oil separation prevent ho sake.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">1st Stage Press</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">200 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">2nd Stage Press</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">50 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Particle Size d32</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.6 µm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Inlet Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">65°C</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 05
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Gentle Spray Drying & Low-Temperature Agglomeration
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: AMINO ACID PRESERVATION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Free amino acids aur hydrolyzed peptides heat-sensitive hote hain aur easily Maillard browning mein chale jaate hain. Low-heat tall-form spray dryer (Inlet 165°C–170°C, Exhaust 72°C–75°C) mein dry karke powder banate hain.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Dryer Inlet Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">165°C – 170°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Exhaust Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">72°C – 75°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Available Lysine</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 95% Preserved</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Final Moisture</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 3.0%</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 06
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Pharmaceutical Sifting, Magnet Trap & Vacuum MAP Packaging
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: CLEAN PACKAGING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Pharma-grade cleanroom environment mein 1.0 mm sifter, 12,000 Gauss magnet trap, aur metal detector inspection ke baad vacuum nitrogen flushed barrier tins (headspace O₂ < 1.0%) mein hermetically pack karte hain.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cleanroom Class</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ISO Class 7 / Grade C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Magnet Field</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12,000 Gauss</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Residual O₂</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.0%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Medical Special</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Prescription Ready</strong></div></div>
    </div>
    
        </div>
    </div>
    
    `
            },
            "cleanroom-standards": {
                title: "E. Cleanroom Engineering, Pathogen Control & Strict Quality Standards",
                content: `
    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. 3-Zone Cleanroom Architectural Engineering</h3>
    <p>Standard dairy plants ke mukable infant formula powder plant ko biological containment cleanroom ki tarah engineer kiya jaata hai. ISO 14644-1 aur European Hygienic Engineering &amp; Design Group (EHEDG) guidelines ke according plant 3 strictly partitioned hygiene zones mein divided hota hai:</p>

    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Hygiene Zone</th>
                    <th class="p-2 border">Cleanroom Class</th>
                    <th class="p-2 border">Differential Pressure</th>
                    <th class="p-2 border">Air Filtration</th>
                    <th class="p-2 border">Operational Activities</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2 border"><strong>Zone 1: Basic Hygiene</strong></td>
                    <td class="p-2 border">Unclassified / CNC</td>
                    <td class="p-2 border">0 Pa (Baseline)</td>
                    <td class="p-2 border">Standard G4 coarse filters</td>
                    <td class="p-2 border">Raw milk reception bays, raw storage silos, utility rooms, boiler houses.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Zone 2: Medium Hygiene</strong></td>
                    <td class="p-2 border">ISO Class 8 (Class D)</td>
                    <td class="p-2 border"><strong>&plus;20 to &plus;25 Pa</strong></td>
                    <td class="p-2 border">F7 pre-filters &plus; F9 fine filters</td>
                    <td class="p-2 border">Pasteurization, evaporation, wet recombination, oil batching. Wet cleaning permitted.</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Zone 3: High Hygiene (Red Zone)</strong></td>
                    <td class="p-2 border"><strong>ISO Class 7 / Class C</strong></td>
                    <td class="p-2 border"><strong>&plus;40 to &plus;50 Pa</strong></td>
                    <td class="p-2 border"><strong>HEPA H14 (99.995% @ 0.3 &mu;m)</strong></td>
                    <td class="p-2 border">Spray dryer base, fluid beds, powder filling, can seaming. <strong>Strict ZERO WATER policy.</strong></td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. <em>Cronobacter sakazakii</em> Pathophysiology &amp; Survival Genetics</h3>
    <p><em>Cronobacter sakazakii</em> (formerly <em>Enterobacter sakazakii</em>) pediatric dairy manufacturing ka sabse formidable microbial pathogen hai. Ye Gram-negative, motile rod bacterium of the family <em>Enterobacteriaceae</em> hai.</p>

    <div class="p-3 bg-red-50 border border-red-200 rounded-lg mt-2">
        <p class="text-xs text-red-900 font-semibold">Neonatal Pathogenicity &amp; Desiccation Survival:</p>
        <p class="text-xs text-red-800 mt-1"><em>Cronobacter sakazakii</em> neonates ke blood-brain barrier ko cross karke acute necrotizing enterocolitis (NEC), brain abscesses, aur severe neonatal meningitis induce karta hai jisme <strong>mortality rate 40% se 80%</strong> tak hoti hai. Surviving infants mein profound neurological damage (hydrocephalus, quadriplegia) develop hoti hai.</p>
        <p class="text-xs text-red-800 mt-1"><strong>The Desiccation Survival Enigma:</strong> Most vegetative pathogens (jaise <em>E. coli</em> ya <em>Listeria</em>) dry powder environment ($a_w &lt; 0.60$) mein weeks ke andar die out ho jaate hain. Lekin <em>Cronobacter sakazakii</em> dry infant formula powder ($a_w &lt; 0.20$) mein <strong>2 saal se zyada survive</strong> kar sakta hai. Iske do genetic mechanisms hain:
            <br>1. Intracellular accumulation of compatible osmoprotectant sugars (especially <strong>Trehalose</strong>), jo dehydrated membranes ko stabilize karte hain.
            <br>2. Heavy synthesis of <strong>capsular polysaccharide (colanic acid)</strong>, jo cells ke around thick biofilm barrier bana kar complete desiccation aur osmotic shock se protect karta hai.
        </p>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. The Strict "Dry Cleaning Only" Rule in the High-Hygiene Zone</h3>
    <p>Infant formula manufacturing mein sabse dangerous catastrophic failure hota hai dry processing zone (Zone 3) mein paani introduce karna.</p>
    
    <div class="p-3 bg-rose-50 border border-rose-200 rounded-lg mt-2">
        <p class="text-xs text-rose-900 font-semibold">Water = Pathogen Explosion:</p>
        <p class="text-xs text-rose-800 mt-1"><em>Cronobacter sakazakii</em> completely dry state mein grow ya divide nahi kar sakta (it merely survives). Lekin jaise hi dry powder residue ko paani milta hai—chahe floor wash hose se ho, aerosol droplets se, ya air duct condensation se—<em>Cronobacter</em> ka lag phase <strong>less than 2 hours</strong> hota hai! Room temperature par ye har <strong>20 minutes mein double</strong> hone lagta hai, rapidly colonizing equipment crevices, seams, aur packing conveyors.</p>
        <p class="text-xs text-rose-800 mt-1"><strong>The Dry-Cleaning Protocol:</strong> Zone 3 mein water hose pipes completely ban hote hain. Cleaning strictly mechanical scraping, industrial HEPA-filtered vacuuming, heated dehumidified air purging, aur localized spot-cleaning with <strong>70% Isopropanol (IPA) alcohol wipes</strong> se hoti hai (jo instantly evaporate ho jaata hai bina free water chhore).</p>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. Microbiological Zero-Tolerance Standards (FSSAI 2020 &amp; Codex)</h3>
    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Microorganism</th>
                    <th class="p-2 border">Sampling Plan (n, c)</th>
                    <th class="p-2 border">Microbiological Limit (m, M)</th>
                    <th class="p-2 border">Regulatory Mandate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2 border"><strong><em>Cronobacter sakazakii</em></strong></td>
                    <td class="p-2 border"><strong>n = 30, c = 0</strong></td>
                    <td class="p-2 border"><strong>Absent in 300g (0 / 10g composite)</strong></td>
                    <td class="p-2 border">Codex Stan 72-1981 / FSSAI (Absolute Zero Tolerance)</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong><em>Salmonella</em> spp.</strong></td>
                    <td class="p-2 border"><strong>n = 60, c = 0</strong></td>
                    <td class="p-2 border"><strong>Absent in 1,500g (0 / 25g composite)</strong></td>
                    <td class="p-2 border">Zero tolerance across all global jurisdictions</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Enterobacteriaceae</strong></td>
                    <td class="p-2 border"><strong>n = 5, c = 0</strong></td>
                    <td class="p-2 border"><strong>Absent in 10g (m = 0, M = 0)</strong></td>
                    <td class="p-2 border">Hygiene verification parameter</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Standard Plate Count (SPC)</strong></td>
                    <td class="p-2 border">n = 5, c = 2</td>
                    <td class="p-2 border">m = 500 CFU/g, M = 5,000 CFU/g</td>
                    <td class="p-2 border">General microbial quality</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong><em>Bacillus cereus</em></strong></td>
                    <td class="p-2 border">n = 5, c = 1</td>
                    <td class="p-2 border">m = 50 CFU/g, M = 100 CFU/g</td>
                    <td class="p-2 border">Spore-forming emetic toxin former</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">5. FSSAI &amp; Codex Contaminant Limits (Aflatoxin M1, Heavy Metals &amp; Melamine)</h3>
    <div class="overflow-x-auto mt-2">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
            <thead class="bg-muted">
                <tr>
                    <th class="p-2 border">Chemical / Toxic Contaminant</th>
                    <th class="p-2 border">Maximum Permissible Limit</th>
                    <th class="p-2 border">Testing Methodology</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-2 border"><strong>Aflatoxin M1</strong></td>
                    <td class="p-2 border"><strong>&le; 0.025 &mu;g/kg (25 parts per trillion)</strong></td>
                    <td class="p-2 border">Immunoaffinity column cleanup &plus; HPLC-FLD</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Lead (Pb)</strong></td>
                    <td class="p-2 border"><strong>&le; 0.05 mg/kg (50 ppb)</strong></td>
                    <td class="p-2 border">Microwave acid digestion &plus; ICP-MS</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Cadmium (Cd)</strong></td>
                    <td class="p-2 border"><strong>&le; 0.01 mg/kg (10 ppb)</strong></td>
                    <td class="p-2 border">ICP-MS</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Melamine</strong></td>
                    <td class="p-2 border"><strong>&le; 1.0 mg/kg (1.0 ppm)</strong></td>
                    <td class="p-2 border">LC-MS/MS (AOAC 2012.08)</td>
                </tr>
                <tr>
                    <td class="p-2 border"><strong>Pesticide Residues (Each)</strong></td>
                    <td class="p-2 border"><strong>&le; 0.01 mg/kg (Zero tolerance)</strong></td>
                    <td class="p-2 border">Multi-residue GC-MS/MS &plus; LC-MS/MS</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">6. Modified Atmosphere Packaging (MAP) &amp; Inert Gas Flushing Kinetics</h3>
    <p>Infant formula powder mein lagbhag 27% lipids hote hain, jo polyunsaturated fatty acids (Linoleic, DHA, ARA) se rich hote hain. Ambient oxygen ($20.9\\%\\text{ O}_2$) ki presence mein ye lipids free-radical autoxidation undergo karte hain, producing rancid hydroperoxides, hexanal off-odors, aur available vitamins (A, C, E) ka destruction.</p>

    <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-lg mt-2">
        <p class="text-xs text-indigo-900 font-semibold">Vacuum Gassing &amp; The Residual Oxygen Limit:</p>
        <p class="text-xs text-indigo-800 mt-1">24-month shelf life ensure karne ke liye powder ko hermetic tin cans ya multi-laminate aluminum pouches mein <strong>Modified Atmosphere Packaging (MAP)</strong> dwara seal kiya jaata hai:</p>
        <ol class="list-decimal list-inside space-y-1 ml-4 text-xs text-indigo-800 mt-1">
            <li>Can seaming chamber ko <strong>-0.95 bar vacuum</strong> par evacuate kiya jaata hai to strip headspace aur interstitial powder pore air.</li>
            <li>Chamber ko ultra-high purity inert gas mixture (<strong>98% Nitrogen &plus; 2% Carbon Dioxide</strong>) se backflush kiya jaata hai.</li>
            <li>Double-seamer can ko hermetically lock karta hai under positive gas blanket.</li>
            <li><strong>Headspace Residual Oxygen Limit:</strong> Residual $O_2$ strictly <strong>&lt; 1.0% (target &lt; 0.5%)</strong> maintain kiya jaata hai. Continuous in-line optical laser oxygen sensors har batch ko verify karte hain.</li>
        </ol>
    </div>

    <p class="text-xs text-gray-700 mt-3 mb-2">Infant Formula Cleanroom Hygiene, Cronobacter Exclusion &amp; MAP Packaging Process Flowchart:</p>
    
    <div class="my-6 p-3 sm:p-5 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 rounded-2xl border-2 border-indigo-200/80 shadow-sm">
        <div class="flex items-center justify-between gap-2 flex-wrap pb-3 mb-4 border-b border-indigo-100">
            <div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm">
                        ⚡
                    </span>
                    <h4 class="!m-0 !p-0 !bg-none !border-none text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">
                        Infant Formula Cleanroom Hygiene, Cronobacter Control & Pathogen Exclusion Flowchart
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">3-Zone Positive Pressure (+45 Pa), HEPA H14, 100% Dry Cleaning, >12D Kill & Real-Time qPCR Flowchart with CCPs</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                6-STEP CLEANROOM & PATHOGEN FLOWCHART
            </span>
        </div>
        
        <div class="flowchart-steps-wrapper max-w-3xl mx-auto">
            
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-blue-200 bg-blue-50/30 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-blue-600 text-white">
                    STEP 01
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-blue-950 font-bold">
                    Zoning Architecture & Differential Pressure Cascade
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: FACILITY ZONING</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Plant 3 distinct hygiene zones mein divided hota hai: Zone 1 (Low Hygiene / Wet reception), Zone 2 (Medium Hygiene / Evaporation), aur Zone 3 (High Hygiene Red Zone / Spray dryer, Powder packing). Zone 3 mein +45 Pa positive air pressure cascade maintain hota hai.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Zone 3 Pressure</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">+45 Pa Overpressure</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Zone 2 Pressure</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">+25 Pa</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Zone 1 Pressure</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0 Pa Baseline</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Air Flow Direction</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Zone 3 → Zone 2 → Zone 1</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-amber-300 bg-amber-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-amber-500 text-white">
                    STEP 02
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-amber-950 font-bold">
                    HEPA H14 Air Filtration & 100% Dry-Cleaning Protocol
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: CRONOBACTER EXCLUSION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Zone 3 high-hygiene area mein supply air HEPA H14 filters (99.995% efficiency down to 0.3 µm) se aati hai. Relative humidity strictly < 40% maintain hoti hai. Strict ZERO-WATER dry cleaning policy: Cronobacter sakazakii water ke bina multiply nahi kar sakta.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">HEPA Filter Class</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">HEPA H14 (99.995%)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Air Changes</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 20 Air Changes/hr</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Room RH</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 40% Relative Humidity</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Water in Zone 3</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Strict Zero-Water Policy</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 03
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Thermal Inactivation Validation (> 12D Kill Kinetics)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: THERMAL DESTRUCTION</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Continuous thermal process validation: Cronobacter sakazakii ka D-value 60°C par D60 = 2.5 minutes, z-value = 5.8°C hai. 105°C par 30 seconds treatment > 12D log-reduction deliver karta hai, guaranteeing absolute vegetative sterility in liquid phase.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Process Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">105.0°C ± 0.5°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Holding Time</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">30 Seconds</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cronobacter D60</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">2.5 Minutes</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Log Reduction</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 12D Elimination</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border border-amber-300 bg-amber-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-amber-500 text-white">
                    STEP 04
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-amber-950 font-bold">
                    Spray Dryer Chamber & Fluid Bed Continuous Hygiene
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-2: DRYER INTEGRITY</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Tall-form drying chamber aur fluid bed continuously insulated aur trace-heated rehte hain taaki walls par condensation na bane. Condensation droplets Cronobacter ke breeding ground ban sakte hain. Pneumatic air-hammers wall deposits prevent karte hain.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Dryer Wall Temp</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 85°C (Above Dew Point)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Condensation</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% Prevented</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Air Hammer Cycle</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Every 30 Seconds</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Inspection</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Endoscopic Camera Audit</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 05
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Automated Environmental Swabbing & Real-Time qPCR
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: PATHOGEN SURVEILLANCE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Zone 3 ke floors, air vents, equipment seams, aur powder contact surfaces se daily 50+ composite swabs liye jaate hain. Automated Real-Time qPCR testing 12 hours mein result deti hai: Cronobacter sakazakii Negative, Salmonella Negative.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Daily Swab Points</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 50 Strategic Sites</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Testing Method</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Real-Time qPCR</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cronobacter Limit</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Zero Tolerance (Absent)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Salmonella Limit</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Zero Tolerance (Absent)</strong></div></div>
    </div>
    
    <div class="flex flex-col items-center justify-center my-1.5 sm:my-2">
        <div class="w-0.5 h-4 sm:h-6 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
        <svg class="w-4 h-4 text-indigo-600 -mt-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    </div>
    
    <div class="flowchart-step-card rounded-xl p-3 sm:p-4 shadow-sm border-2 border-rose-400 bg-rose-50/40 transition-all">
        <div class="flex items-center justify-between gap-2 flex-wrap mb-1.5">
            <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider bg-rose-600 text-white">
                    STEP 06
                </span>
                <h5 class="!m-0 !p-0 !bg-none !border-none text-xs sm:text-sm text-rose-950 font-black">
                    Composite Finished Powder Release Testing (CoA Certification)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: FINAL BATCH RELEASE</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">Har commercial batch se statistical composite sample (30 × 25g = 750g) ISO 22964 / FSSAI standards ke according test hota hai: Cronobacter sakazakii Absent in 300g, Salmonella Absent in 375g, Enterobacteriaceae n=5, c=0, m=0. Signed CoA batch release.</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Cronobacter Powder</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Absent in 300g (n=30)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Salmonella Powder</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Absent in 375g (n=5)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Enterobacteriaceae</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">n=5, c=0, m=0 / 10g</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">CoA Approval</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">Mandatory Batch Quarantine</strong></div></div>
    </div>
    
        </div>
    </div>
    
    `
            }
        }
    }
};
