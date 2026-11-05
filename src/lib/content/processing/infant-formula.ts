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
                        <li><strong>An inverse whey-to-casein ratio (20:80 vs. 60:40 in mature human milk):</strong> Dominated by calcium-sensitive $\alpha_{s1}$-casein, which precipitates into dense, rubbery, indigestible curds under neonatal gastric conditions.</li>
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
                                    <td class="p-2 border">Addition of D90 Demineralized Whey Powder or $\alpha$-Lactalbumin-enriched WPC-80 prevents rubbery gastric curd formation.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Dominant Casein Fraction</strong></td>
                                    <td class="p-2 border">$\alpha_{s1}$-Casein (38%) + $\beta$-Casein</td>
                                    <td class="p-2 border"><strong>$\beta$-Casein (70%)</strong>; $\alpha_{s1}$ is ABSENT (0%)</td>
                                    <td class="p-2 border">High $\beta$-casein / low $\alpha_{s1}$-casein</td>
                                    <td class="p-2 border">$\alpha_{s1}$-casein forms tough clots with $Ca^{2+}$; human milk forms delicate, flocculent curds.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Dominant Whey Protein</strong></td>
                                    <td class="p-2 border">$\beta$-Lactoglobulin (55%, absent in human)</td>
                                    <td class="p-2 border"><strong>$\alpha$-Lactalbumin (41%)</strong> + Lactoferrin (17%)</td>
                                    <td class="p-2 border">Enriched $\alpha$-Lactalbumin; minimized native $\beta$-Lg</td>
                                    <td class="p-2 border">$\alpha$-Lactalbumin provides essential L-cysteine and tryptophan while reducing allergenic burden.</td>
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
                                    <td class="p-2 border"><strong>DHA: $\ge 20$ mg/100 kcal; ARA: 1:1 to 2:1 ratio</strong></td>
                                    <td class="p-2 border">Algal oil (Crypthecodinium) and fungal oil (Mortierella alpina) addition for retinal and cerebral development.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Carbohydrates</strong></td>
                                    <td class="p-2 border">4.6–4.8 g/100 mL (100% Lactose)</td>
                                    <td class="p-2 border">7.0–7.4 g/100 mL (Lactose + HMOs)</td>
                                    <td class="p-2 border"><strong>7.0–7.5 g/100 mL</strong> (Lactose $\ge 90\%$)</td>
                                    <td class="p-2 border">Pure pharmaceutical $\beta$-lactose addition; galactose essential for cerebroside synthesis in brain.</td>
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
                        <p class="text-xs text-indigo-700 mt-1">Where each gram of dietary protein metabolized yields approximately 5.7 mOsm of urea nitrogen ($1 / 0.175 \approx 5.71$).</p>
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
                        <li><strong>Bovine Casein Micelles:</strong> Have a diameter of 150–250 nm and are composed of $\alpha_{s1}$-casein (38%), $\alpha_{s2}$-casein (10%), $\beta$-casein (36%), and $\kappa$-casein (13%), cemented together by nanoclusters of <strong>Colloidal Calcium Phosphate (CCP, ~6.5% of micellar dry weight)</strong>. The high density of phosphoserine residues on $\alpha_{s1}$-casein makes it violently sensitive to calcium precipitation.</li>
                        <li><strong>Human Milk Casein Micelles:</strong> Are smaller (mean diameter 50–70 nm), possess substantially less CCP (only ~1.5%), and <strong>completely lack $\alpha_{s1}$-casein</strong>. They are dominated by $\beta$-casein (70%), which possesses high hydrophobicity and forms loose, flexible, porous micellar structures.</li>
                    </ul>

                    <p class="mt-3"><strong>Gastric Digestion Biophysics:</strong></p>
                    <p>In a neonate, basal gastric acid secretion is low; the postprandial gastric pH stabilizes at <strong>pH 4.5 to 5.5</strong> (buffered by milk proteins), and gastric pepsin output is less than 15% of adult levels. Under these weak acidic conditions:</p>
                    <ul class="list-disc list-inside space-y-2 ml-4 mt-2">
                        <li><strong>Cow Milk Clotting:</strong> $\alpha_{s1}$-casein undergoes immediate cross-linking in the presence of free calcium, forming a hard, dense, elastic rubbery curd ball with a <strong>Curd Tension > 50–70 grams</strong> (measured by Hill's Curd-O-Meter). This dense matrix exhibits strong syneresis, squeezing out fluid and trapping unhydrolyzed proteins. Gastric emptying is severely delayed (> 4–6 hours), causing abdominal distension, colic, gastroesophageal reflux (GERD), and vomiting.</li>
                        <li><strong>Humanized Formula (60:40 Whey:Casein) Clotting:</strong> With $\alpha$-lactalbumin-dominant whey and diluted bovine casein, the curd tension drops to <strong>< 5 grams (Zero-Tension Curd)</strong>. In the infant stomach, it forms fine, soft, flocculent micro-precipitates with high specific surface area. Gastric pepsin and duodenal trypsin rapidly penetrate the porous matrix, achieving complete gastric clearance in <strong>90 to 120 minutes</strong> (identical to breast milk).</li>
                    </ul>

                    <p class="mt-3"><strong>Amino Acid Profile Engineering:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>L-Cysteine as a Conditionally Essential Amino Acid:</strong> Neonates exhibit very low hepatic activity of the enzyme <strong>cystathionase</strong> (the transsulfuration pathway enzyme that converts methionine to cysteine). Cow milk has a high methionine:cysteine ratio (3:1). Supplementing with $\alpha$-lactalbumin (which contains 8 cysteine residues forming 4 intramolecular disulfide bonds) guarantees adequate bioavailable cysteine for glutathione synthesis and liver detoxification.</li>
                        <li><strong>Taurine (2-Aminoethanesulfonic Acid):</strong> Neonates lack the enzyme <strong>cysteinesulfinate decarboxylase (CSAD)</strong> required to synthesize taurine. Taurine is mandatory in infant formula (Codex min. 40 mg/100 kcal) because neonates conjugate bile acids exclusively with taurine (taurocholic acid) rather than glycine. Without dietary taurine, lipid digestion and micellar fat absorption drop drastically, and retinal photoreceptor development is impaired.</li>
                        <li><strong>Tryptophan & Neurotransmission:</strong> $\alpha$-Lactalbumin is the richest natural source of tryptophan (5.8% of amino acid sequence). Tryptophan crosses the blood-brain barrier via large neutral amino acid transporters (LNAAT) to synthesize <strong>serotonin (5-hydroxytryptamine) and melatonin</strong>, which regulate neonatal sleep-wake circadian rhythms and neurological mood stabilization.</li>
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

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">6. LC-PUFA Biochemistry: DHA ($22:6\,n-3$) and ARA ($20:4\,n-6$) Pathways</h3>
                    <p>Long-Chain Polyunsaturated Fatty Acids (LC-PUFAs) containing 20 or more carbons and two or more double bonds are absolute structural determinants of brain synaptic membranes and retinal photoreceptors.</p>

                    <p class="mt-2"><strong>The Hepatic Desaturase Bottleneck:</strong></p>
                    <p>The human body possesses two essential parent fatty acid cascades:</p>
                    <ul class="list-disc list-inside space-y-1 ml-4 mt-2">
                        <li><strong>&omega;-6 Series:</strong> Linoleic Acid (LA, 18:2 n-6) &rarr; [&Delta;6-desaturase] &rarr; &gamma;-Linolenic Acid (18:3) &rarr; [elongase] &rarr; Dihomo-&gamma;-linolenic (20:3) &rarr; [&Delta;5-desaturase] &rarr; <strong>Arachidonic Acid (ARA, 20:4 n-6)</strong>.</li>
                        <li><strong>&omega;-3 Series:</strong> &alpha;-Linolenic Acid (ALA, 18:3 n-3) &rarr; [&Delta;6-desaturase] &rarr; Stearidonic (18:4) &rarr; [elongase] &rarr; Eicosatetraenoic &rarr; [&Delta;5-desaturase] &rarr; EPA (20:5) &rarr; [elongase] &rarr; Docosapentaenoic &rarr; [&Delta;6-desaturase / &beta;-oxidation] &rarr; <strong>Docosahexaenoic Acid (DHA, 22:6 n-3)</strong>.</li>
                    </ul>
                    <p class="mt-2">In infants born at term and especially pre-term, the expression and catalytic activity of hepatic <strong>$\Delta 6$-desaturase and $\Delta 5$-desaturase</strong> enzymes are extremely immature. Endogenous synthesis of DHA and ARA from parent vegetable oils (canola/soy) is quantitatively insufficient to meet the brain growth spurt (during which brain tissue accrues ~15 mg of DHA per week during the third trimester and early infancy).</p>

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
                    <p>Under FSSAI and Codex standards, <strong>Lactose must constitute at least 90% (min 4.5 g/100 kcal) of total carbohydrates</strong> in Stage 1 formula. Lactose is a disaccharide of $\beta$-D-galactose and $\alpha$-D-glucose linked via a $\beta(1\rightarrow4)$ glycosidic bond.</p>
                    <ul class="list-disc list-inside space-y-2 ml-4 mt-2">
                        <li><strong>The Galactose-Cerebroside Axis:</strong> Intestinal brush-border lactase-phlorizin hydrolase (LPH) cleaves lactose into glucose and galactose. Absorbed galactose is transported via the portal vein to hepatocytes and brain oligodendrocytes, entering the <strong>Leloir Pathway</strong> (Galactokinase $\rightarrow$ Galactose-1-phosphate uridylyltransferase / GALT $\rightarrow$ UDP-galactose). UDP-galactose is the obligate precursor for synthesizing <strong>galactosylceramides, sulfatides, and gangliosides</strong>, which form the protective myelin insulation wrapping cerebral axons. Replacing lactose with maltodextrin or corn syrup in healthy term infants deprives the developing brain of this structural galactose substrate.</li>
                        <li><strong>Physiological Colon Fermentation:</strong> A physiological fraction of ingested lactose escapes small intestinal absorption and reaches the ileocecal junction. There, colonic <em>Bifidobacterium</em> species ferment lactose into <strong>L-lactic acid and Short-Chain Fatty Acids (SCFAs: acetate, propionate, butyrate)</strong>. This reduces intestinal luminal pH to <strong>pH 4.5–5.2</strong>, creating an inhospitable, acidic barrier that suppresses enteropathogens (<em>Escherichia coli</em>, <em>Clostridium difficile</em>, <em>Shigella</em>) and increases calcium and magnesium bioavailability via ionization.</li>
                    </ul>

                    <p class="mt-3"><strong>Human Milk Oligosaccharides (HMOs) & Prebiotic GOS/FOS:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>The 2'-Fucosyllactose (2'-FL) Decoy Receptor Mechanism:</strong> 2'-FL is a trisaccharide (L-fucose linked $\alpha(1\rightarrow2)$ to D-galactose of lactose). Pathogenic mucosal bacteria (e.g., <em>Campylobacter jejuni</em>, enteropathogenic <em>E. coli</em>) and noroviruses recognize and bind to mucosal epithelial glycan receptors via surface fucose-binding adhesins. Soluble 2'-FL in formula acts as a <strong>molecular decoy</strong>; pathogens bind to the floating 2'-FL in the lumen instead of the intestinal wall and are harmlessly swept out in the feces.</li>
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
        <p class="text-xs text-slate-600 leading-relaxed m-0">Acceptance of Grade-A bovine milk strictly at $\le 4^\circ\text{C}$. Immediate Charm Trio testing for antibiotic residues (Beta-lactams, Tetracyclines < 0.004 ppm), Aflatoxin M1 < 0.025 $\mu$g/kg, and spore count < 50 CFU/mL.</p>
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
                            <p class="text-gray-700 mt-1">Acceptance only of Grade-A bovine milk tested negative for antibiotic residues (Beta-lactams, Tetracyclines < 0.004 ppm via Charm Trio test), total spore count < 50 CFU/mL, Aflatoxin M1 < 0.025 $\mu$g/kg, and temperature maintained strictly at $\le 4^\circ\text{C}$.</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-indigo-500 rounded-r-lg shadow-sm">
                            <strong class="text-indigo-900 block text-sm">Step 2: Centrifugal Clarification, Bactofugation & Fat Separation</strong>
                            <p class="text-gray-700 mt-1">Hermetic centrifugal separators at $55^\circ\text{C}$ separate raw milk into skim milk and heavy cream. A two-stage bactofuge eliminates $98.5\%$ of anaerobic bacterial spores (<em>Bacillus cereus</em> and <em>Clostridium</em>) via high centrifugal g-force ($9,000\times g$) without thermal denaturation.</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-teal-500 rounded-r-lg shadow-sm">
                            <strong class="text-teal-900 block text-sm">Step 3: Wet Recombination & Protein Ratio Standardization (oPRP-1)</strong>
                            <p class="text-gray-700 mt-1">Skim milk is pumped into high-shear tri-blender tanks. D90 Demineralized Whey Powder (or ultrafiltrated liquid whey) is precisely injected to reset the <strong>Whey:Casein ratio to exactly 60:40</strong>. Pharmaceutical-grade $\beta$-lactose is added to achieve 7.2% carbohydrate content.</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-amber-500 rounded-r-lg shadow-sm">
                            <strong class="text-amber-900 block text-sm">Step 4: Oil Phase Preparation & Structured Lipid Dosing</strong>
                            <p class="text-gray-700 mt-1">In an auxiliary jacketed vessel at $60^\circ\text{C}$, the specialized oil blend is prepared: Structured sn-2 OPO lipid, high-oleic sunflower oil, coconut oil (providing lauric acid $C_{12:0}$), soybean oil, fungal ARA oil (<em>Mortierella alpina</em>), and algal DHA oil (<em>Crypthecodinium cohnii</em>). Fat-soluble vitamins (A, D3, E, K1) and natural antioxidant mixed tocopherols are dissolved.</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-orange-500 rounded-r-lg shadow-sm">
                            <strong class="text-orange-900 block text-sm">Step 5: High-Shear Emulsification & Pre-heating</strong>
                            <p class="text-gray-700 mt-1">The lipid phase is dosed into the aqueous protein-lactose stream using an in-line micro-dosing pump under a nitrogen blanket. A high-shear rotor-stator mixer (Silverson type) shears the coarse emulsion down to an oil droplet size of $d_{50} < 5\,\mu\text{m}$, preheating the mixture to $65^\circ\text{C}$.</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-emerald-500 rounded-r-lg shadow-sm">
                            <strong class="text-emerald-900 block text-sm">Step 6: Two-Stage High-Pressure Homogenization (CCP-2)</strong>
                            <p class="text-gray-700 mt-1">The emulsion is subjected to high-pressure homogenization: <strong>First stage at 180–200 bar</strong> (hydraulic shearing and cavitation breaks oil droplets down to $d_{32} < 0.8\,\mu\text{m}$), followed by <strong>Second stage at 40–50 bar</strong> (breaks cluster aggregates). Sub-micron droplets are instantly coated by whey proteins, preventing coalescence and eliminating free surface fat.</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-red-500 rounded-r-lg shadow-sm">
                            <strong class="text-red-900 block text-sm">Step 7: Thermal Pasteurization / Direct Steam Injection (CCP-1)</strong>
                            <p class="text-gray-700 mt-1"><strong>Critical Control Point 1:</strong> Thermal processing through a regenerative plate heat exchanger (PHE) at <strong>$105^\circ\text{C}$ for 30 seconds</strong> (or Direct Steam Injection DSI at $125^\circ\text{C}$ for 5 seconds). Ensures a $>12\text{D}$ log-reduction of vegetative pathogens (including <em>Cronobacter sakazakii</em>, <em>Salmonella</em>, and <em>Listeria</em>) and inactivates native lipases/proteases with minimal whey protein denaturation ($< 15\%$ denaturation).</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-cyan-500 rounded-r-lg shadow-sm">
                            <strong class="text-cyan-900 block text-sm">Step 8: Multi-Stage Falling Film Vacuum Evaporation</strong>
                            <p class="text-gray-700 mt-1">Thermal concentration in a 4-effect falling film evaporator with Mechanical Vapor Recompression (MVR). The concentrate boils under high vacuum ($70^\circ\text{C}$ down to $52^\circ\text{C}$ in the final effect) to concentrate the solids from $18\%$ up to <strong>$48–52\%$ Total Solids (TS)</strong> without Maillard browning or heat scorching.</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-purple-500 rounded-r-lg shadow-sm">
                            <strong class="text-purple-900 block text-sm">Step 9: Concentrate Deaeration & High-Pressure Atomization (CCP-3)</strong>
                            <p class="text-gray-700 mt-1">The concentrate is deaerated under vacuum to remove entrained micro-air bubbles (which cause particle hollow cores and fat oxidation). It is fed by a high-pressure piston pump at <strong>150 to 220 bar</strong> through tungsten-carbide swirl-chamber pressure nozzles at the top of the tall-form spray dryer.</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-pink-500 rounded-r-lg shadow-sm">
                            <strong class="text-pink-900 block text-sm">Step 10: 3-Stage Tall-Form Spray Drying & Agglomeration</strong>
                            <p class="text-gray-700 mt-1"><strong>Stage 1:</strong> Droplets contact filtered, HEPA-sanitized hot air ($185–195^\circ\text{C}$ inlet, $82–85^\circ\text{C}$ exhaust). Moisture flashes off in 15 seconds. Powder falls into the <strong>Internal Static Fluid Bed (Stage 2)</strong> at $70^\circ\text{C}$ for secondary drying to $4.5\%$ moisture. Fines from cyclones are recycled into the atomization cloud to achieve <strong>agglomeration</strong> (grape-like porous clusters).</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-rose-500 rounded-r-lg shadow-sm">
                            <strong class="text-rose-900 block text-sm">Step 11: External Vibrating Fluid Bed Conditioning & Lecithination</strong>
                            <p class="text-gray-700 mt-1"><strong>Stage 3:</strong> Powder enters a plug-flow vibrating fluid bed. In the first zone, an aerosolized solution of fractionated sunflower lecithin ($0.2–0.3\%$) in coconut oil is sprayed onto the warm granules for instantization. The second zone cools the powder using chilled, dehumidified HEPA air down to <strong>$20–22^\circ\text{C}$</strong>, setting final powder moisture at <strong>$2.5–2.8\%$</strong> (safely below glass transition temperature $T_g$).</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-red-600 rounded-r-lg shadow-sm">
                            <strong class="text-red-900 block text-sm">Step 12: In-line Sifting, Rare-Earth Magnet & Dual Metal Detection (CCP-4)</strong>
                            <p class="text-gray-700 mt-1"><strong>Critical Control Point 4:</strong> Pneumatic dense-phase vacuum conveying to a sanitary rotary sifter ($1.0\text{ mm}$ screen). Passes through <strong>12,000 Gauss Rare-Earth Neodymium In-line Magnets</strong> and dual-frequency Metal Detectors (sensitive to $\ge 0.8\text{ mm}$ Ferrous, $\ge 1.0\text{ mm}$ Non-Ferrous, $\ge 1.2\text{ mm}$ Stainless Steel 316).</p>
                        </div>

                        <div class="p-3 bg-white border-l-4 border-emerald-600 rounded-r-lg shadow-sm">
                            <strong class="text-emerald-900 block text-sm">Step 13: Inert Gas Flushing (MAP), Can Seaming & Vision Inspection (CCP-5)</strong>
                            <p class="text-gray-700 mt-1"><strong>Critical Control Point 5:</strong> Filling inside an ISO Class 7 cleanroom under positive pressure ($+30\text{ Pa}$). High-speed vacuum chamber gassing: Can headspace is evacuated to $-0.95\text{ bar}$ and flushed with <strong>$98\%\text{ N}_2 + 2\%\text{ CO}_2$</strong>. Hermetic double-seam closure. <strong>Residual Headspace Oxygen must be $< 1.0\%$</strong> to ensure 24 months shelf-life without lipid oxidation.</p>
                        </div>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">9. Spray Drying Physics, Glass Transition ($T_g$) & Lecithination Kinetics</h3>
                    <p>The manufacture of infant formula powder is governed by the thermodynamics of amorphous state glassy systems and droplet surface chemistry.</p>

                    <p class="mt-2"><strong>The Gordon-Taylor Equation & The Danger of Stickiness:</strong></p>
                    <p>Infant formula powder consists of approximately 55–60% lactose in a metastable <strong>amorphous (glassy) state</strong>, encapsulating sub-micron fat globules and protein chains. The physical stability of amorphous powder is dictated by its <strong>Glass Transition Temperature ($T_g$)</strong>, mathematically modeled by the Gordon-Taylor equation:</p>
                    
                    <div class="p-3 bg-slate-100 border border-slate-300 rounded-lg mt-2">
                        <p class="font-mono text-xs text-slate-900">T_g (blend) = (w₁ · T_{g1} + k · w₂ · T_{g2}) / (w₁ + k · w₂)</p>
                        <p class="text-xs text-slate-700 mt-1">Where $w_1$ and $w_2$ are weight fractions of dry amorphous lactose and water; $T_{g1} = 101^\circ	ext{C}$ (pure anhydrous lactose), $T_{g2} = -135^\circ	ext{C}$ (pure water), and $k pprox 6.7$ is the Gordon-Taylor constant.</p>
                    </div>

                    <p class="mt-3">Water is an extraordinarily powerful <strong>plasticizer</strong>. In an infant formula powder:</p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li>At <strong>2.5% moisture</strong>, $T_g pprox 58^\circ	ext{C}$. The powder remains in a stable, brittle, free-flowing glassy state at ambient warehouse storage ($25–30^\circ	ext{C}$).</li>
                        <li>If powder moisture rises to <strong>4.5%</strong> (due to incomplete fluid-bed drying or package humidity permeation), the $T_g$ collapses precipitously to <strong>$38–40^\circ	ext{C}$</strong>!</li>
                        <li>When storage or processing temperature exceeds $T_g$ ($T - T_g > 10–20^\circ	ext{C}$), the powder transitions from the solid glassy state into a rubbery, viscous supercooled liquid state. Molecular mobility jumps by five orders of magnitude. Amorphous lactose instantly begins <strong>crystallizing into $lpha$-lactose monohydrate</strong>.</li>
                        <li><strong>Caking & Fat Leakage:</strong> As lactose crystallizes into toothed crystals, the internal microstructural matrix collapses. The protective protein wall is ruptured, and the encapsulated core fat is violently squeezed onto the particle surface. <strong>Free Surface Fat skyrockets from < 1.0% to > 12%</strong>. The powder cakes into rock-hard lumps, flowability drops to zero, and the exposed surface fat undergoes rapid auto-oxidation, destroying Vitamin A and creating fishy, painty off-flavors within weeks.</li>
                    </ul>

                    <p class="mt-3"><strong>Instantization via Lecithin Agglomeration:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li>Infant formula powder contains ~27% fat. Fat-containing milk powders naturally exhibit poor wettability because hydrophobic triacylglycerols migrate to the air-water interface during atomization, forming an external hydrophobic oil boundary with a <strong>water contact angle $	heta > 90^\circ$</strong>. When dumped into warm water ($40^\circ	ext{C}$), the powder floats, clumps, and forms dry-centered "fish-eyes".</li>
                        <li>To achieve <strong>Instant Reconstitution (< 10 seconds wettability without clump formation)</strong>, the powder is agglomerated in an external vibrating fluid bed and sprayed with an aerosolized solution of <strong>fractionated soy or sunflower lecithin</strong> ($0.2–0.3\%$ by weight, dissolved in refined coconut carrier oil).</li>
                        <li><strong>Surfactant Molecular Orientation:</strong> Phosphatidylcholine molecules in lecithin are amphiphilic. Their lipophilic fatty acid tails dissolve into the surface fat patches of the powder granule, while their polar, hydrophilic zwitterionic head groups (phosphate + choline) orient outward toward the air. This dramatically slashes the contact angle to <strong>$	heta < 15^\circ$</strong>. Water capillary action instantly draws moisture into the porous agglomerate channels, causing instantaneous wetting, rapid sinking, and uniform dispersion.</li>
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
                        <li><strong>The Ascorbic Acid (Vitamin C) Synergism:</strong> Dietary non-heme iron requires reduction from the insoluble ferric state ($Fe^{3+}$) to the soluble ferrous state ($Fe^{2+}$) by duodenal cytochrome b (Dcytb) on the apical enterocyte membrane. Follow-up formula maintains a <strong>molar Vitamin C to Iron ratio $\ge 2:1$ to $4:1$ (at least 8–10 mg Vitamin C per 1 mg Iron)</strong>. Ascorbic acid donates an electron, keeping iron in the reduced, absorbable $Fe^{2+}$ form and forming soluble iron-ascorbate chelates that prevent the precipitation of insoluble ferric hydroxides in the alkaline jejunum.</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. Whey : Casein Transition (60:40 $ightarrow$ 50:50 $ightarrow$ 20:80)</h3>
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
                        <li><strong>Colligative Osmotic Pressure Reduction:</strong> Osmotic pressure ($\Pi$) is a colligative property governed by the van 't Hoff equation: $\Pi = i \cdot M \cdot R \cdot T$. It depends purely on the number of dissolved solute particles per unit volume, not their molecular mass. One molecule of maltodextrin (DP 10) supplies 10 glucose units of energy while exerting only <strong>one-tenth the osmotic pressure</strong> of 10 free glucose molecules (or one-fifth of lactose).</li>
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
                                <li><strong>Hydroxymethylfurfural (HMF):</strong> Free + total HMF must be <strong>< 15 $\mu$mol / 100g protein</strong>. Values exceeding this indicate excessive evaporator residence times or scorched dryer nozzles.</li>
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
                            <strong>Step 5: Vacuum Nitrogen Seaming</strong> — Final canned packing with residual $O_2 < 1.0\%$.
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
                        <li>The cereal flour-water slurry (30–35% solids) is pumped into a continuous jacketed enzymatic reactor at $70	ext{–}75^\circ	ext{C}$.</li>
                        <li>A thermostable bacterial <strong>$lpha$-Amylase (1,4-$lpha$-D-glucan glucanohydrolase derived from <em>Bacillus licheniformis</em>)</strong> is injected at 0.05–0.1% by weight.</li>
                        <li>The endo-enzyme randomly cleaves internal $lpha(1ightarrow4)$ glucosidic bonds in both branched amylopectin and linear amylose. It bypasses branch points, rapidly breaking giant macromolecular starch networks ($MW > 10^7	ext{ Da}$) into short-chain dextrins and maltodextrins (degree of polymerization DP 4–10).</li>
                        <li><strong>Rheological Collapse:</strong> Within 15 to 20 minutes, the slurry's apparent viscosity collapses from $> 8,000	ext{ cP}$ down to <strong>$< 200	ext{ cP}$ at a high dry matter concentration of 25 to 28%</strong>!</li>
                        <li><strong>Enzyme Inactivation:</strong> The liquefied slurry is pumped through a direct steam injection heater at <strong>$125^\circ	ext{C}$ for 60 seconds</strong> to permanently denature the $lpha$-amylase, halting hydrolysis before excess mono- and disaccharides (which would cause osmotic diarrhea and hygroscopicity) are formed.</li>
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
                    <p>The intense thermal conductive flash ($145^\circ	ext{C}$ under thin-film shear) provides vital biochemical deactivation:</p>
                    <ul class="list-disc list-inside space-y-1 ml-4 mt-1">
                        <li><strong>Inactivation of Phytohemagglutinins (Lectins):</strong> Denatures plant lectins that cause intestinal epithelial damage.</li>
                        <li><strong>Trypsin Inhibitor Inactivation:</strong> Destroys Kunitz and Bowman-Birk trypsin inhibitors in pulse flours by $>95\%$, restoring normal protein digestibility.</li>
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
                                <tr><td class="p-2 border"><strong>Vitamin A (as Retinol)</strong></td><td class="p-2 border">350 – 500 $\mu$g / 100g</td><td class="p-2 border">350 – 500 $\mu$g / 100g</td></tr>
                                <tr><td class="p-2 border"><strong>Vitamin D</strong></td><td class="p-2 border">5.0 – 10.0 $\mu$g / 100g</td><td class="p-2 border">5.0 – 10.0 $\mu$g / 100g</td></tr>
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
                        <p class="text-xs text-amber-800 mt-1">To trigger mast cell degranulation (anaphylaxis, hives, stridor, angioedema), an antigen must possess at least <strong>two IgE-binding epitopes separated by a physical distance $\ge 1,500	ext{ Da}$ (or $\ge 15	ext{ amino acids}$)</strong>. This allows the peptide to cross-link two adjacent IgE molecules bound to the high-affinity $Fcarepsilon RI$ receptor on the mast cell membrane, opening calcium ion channels that trigger immediate histamine, tryptase, and leukotriene release.</p>
                    </div>

                    <p class="mt-3"><strong>Bioreactor Enzymatic Hydrolysis & Ultrafiltration Technology:</strong></p>
                    <ol class="list-decimal list-inside space-y-2 ml-4 mt-2">
                        <li><strong>Thermal Denaturation:</strong> Bovine whey or casein solution is heated to $85	ext{–}90^\circ	ext{C}$ for 10 minutes to unfold the tight globular tertiary structure of $eta$-lactoglobulin, exposing interior hydrophobic peptide cleavage sites.</li>
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
                                    <td class="p-2 border"><strong>ISO Class 7 (at rest) / Class D (operational)</strong>. Terminal <strong>H14 HEPA Filters (99.995% efficiency at 0.3 $\mu$m MPPS)</strong>. Positive pressure cascade <strong>+30 Pa relative to atmosphere</strong>. 25–30 air changes per hour (ACH). Humidity strictly controlled to RH < 40% (dew point < 8°C).</td>
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
                        <li><strong>The Trehalose & Osmoprotectant Operon:</strong> When spray-dried into powder with low water activity ($a_w \le 0.3$), standard Gram-negative bacteria undergo fatal membrane desiccation and collapse. However, <em>C. sakazakii</em> activates the <strong>otsA and otsB operon</strong>, synthesizing massive intracellular concentrations of the disaccharide <strong>trehalose</strong>. Trehalose acts as a "water replacement molecule", stabilizing lipid bilayers and preventing protein denaturation during dehydration. It also accumulates proline and glycine betaine from the environment.</li>
                        <li><strong>Capsular Biofilm Shield:</strong> The bacterium secretes an extracellular polysaccharide (EPS) capsule matrix. In dry formula powder, <em>C. sakazakii</em> enters a metabolic dormancy state, capable of <strong>surviving in bone-dry milk powder ($a_w pprox 0.25$) for over 730 days (more than two years)</strong>!</li>
                        <li><strong>Thermal Inactivation Kinetics ($D$-value & $z$-value):</strong>
                            <ul class="list-disc list-inside ml-4 mt-1">
                                <li>$D_{60^\circ	ext{C}} = 2.5	ext{ minutes}$ (time to reduce population by 90% at 60°C).</li>
                                <li>$D_{71.7^\circ	ext{C}} = 1.5	ext{ seconds}$ (standard HTST pasteurization).</li>
                                <li>$z	ext{-value} = 5.6^\circ	ext{C}$.</li>
                                <li>Thermal pasteurization in the wet mix stage ($105^\circ	ext{C}$ for 30 seconds) delivers an astronomical <strong>$> 20	ext{D}$ log-reduction</strong>. Therefore, <strong>ZERO viable <em>Cronobacter</em> cells can survive the pasteurizer</strong>.</li>
                                <li><strong>Conclusion:</strong> 100% of <em>Cronobacter</em> contamination in industrial infant formula is due to <strong>post-pasteurization airborne or environmental cross-contamination</strong> in the dryer, fluid bed, conveying lines, or packaging room!</li>
                            </ul>
                        </li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. The Strict "Dry Cleaning Only" Rule in the High-Hygiene Zone</h3>
                    <p>The single most dangerous failure in infant formula manufacturing is introducing water into the dry processing zone.</p>
                    
                    <div class="p-3 bg-rose-50 border border-rose-200 rounded-lg mt-2">
                        <p class="text-xs text-rose-900 font-semibold">Why Water is Lethal in the Red Zone:</p>
                        <p class="text-xs text-rose-800 mt-1"><em>Cronobacter</em> and <em>Salmonella</em> cannot multiply in dry powder because water activity ($a_w < 0.30$) is below the minimum threshold for bacterial division ($a_w \ge 0.94$). However, if water or wet mops are used to wash powder residue off floors, walls, or conveyor joints, water droplets seep into microscopic crevices, gaskets, and floor-wall coving, creating localized zones of $a_w > 0.85$. Combined with lactose and milk protein residues, <strong>a single surviving cell multiplies into millions within 24 hours, forming an impenetrable, sanitizer-resistant biofilm</strong> that sheds airborne bacterial cells into the spray-dryer fluid bed!</p>
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
                                    <td class="p-2 border"><strong>$\le 0.025\,\mu	ext{g/kg}$ (25 parts per trillion)</strong></td>
                                    <td class="p-2 border">Group-1 human carcinogen; causes acute infantile hepatic necrosis and stunting.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Lead (Pb)</strong></td>
                                    <td class="p-2 border"><strong>$\le 0.01	ext{ mg/kg}$</strong></td>
                                    <td class="p-2 border">Irreversible neurotoxicity, encephalopathy, and permanent IQ reduction.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Cadmium (Cd)</strong></td>
                                    <td class="p-2 border"><strong>$\le 0.01	ext{ mg/kg}$</strong></td>
                                    <td class="p-2 border">Proximal tubular renal toxicity and calcium demineralization.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Inorganic Arsenic (As)</strong></td>
                                    <td class="p-2 border"><strong>$\le 0.01	ext{ mg/kg}$</strong></td>
                                    <td class="p-2 border">Epigenetic methylation disruption, immune suppression.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Melamine</strong></td>
                                    <td class="p-2 border"><strong>$\le 1.0	ext{ mg/kg}$</strong></td>
                                    <td class="p-2 border">Crystallizes with cyanuric acid into insoluble stones causing acute renal failure.</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>Pesticide Residues (Individual)</strong></td>
                                    <td class="p-2 border"><strong>$\le 0.01	ext{ mg/kg}$</strong> (Default zero)</td>
                                    <td class="p-2 border">Endocrine disruption, neurodevelopmental behavioral disorders.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">6. Modified Atmosphere Packaging (MAP) & Inert Gas Flushing Kinetics</h3>
                    <p>Infant formula powder contains approximately 27% encapsulated and free lipids, rich in polyunsaturated fatty acids (linoleic, DHA, ARA). In the presence of ambient oxygen ($20.9\%	ext{ O}_2$) and light, PUFAs undergo spontaneous <strong>free-radical auto-oxidation</strong>:</p>
                    <p class="font-mono text-xs text-indigo-900 mt-1">RH (PUFA) + O₂ ──[UV / Fe³⁺]──> R• + •OOH ──> ROO• (Peroxyl Radical) ──> Hydroperoxides (ROOH) ──> Hexanal, 2,4-Decadienal</p>
                    <p class="mt-2">To guarantee a stable <strong>24-month commercial shelf life</strong> without synthetic chemical preservatives (which are strictly illegal in baby food):</p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>In-Line Vacuum Gassing Chamber:</strong> Filled tin cans enter a rotary vacuum chamber. The headspace is evacuated down to <strong>$-0.95	ext{ bar}$</strong> (pulling out entrained oxygen from the powder particle pores).</li>
                        <li><strong>Inert Gas Flushing:</strong> The vacuum is instantly broken by injecting high-purity food-grade <strong>Nitrogen ($98\%	ext{ N}_2$) + Carbon Dioxide ($2\%	ext{ CO}_2$)</strong>.</li>
                        <li><strong>Residual Headspace Oxygen Critical Limit (CCP-5):</strong> The remaining oxygen in the hermetically seamed tin can must be verified at <strong>$< 1.0\%	ext{ O}_2$ (optimally $< 0.5\%$)</strong> using non-destructive frequency-modulated laser spectroscopy (or destructive needle electrochemical sensors). At $< 1.0\%	ext{ O}_2$, the rate of lipid auto-oxidation drops to near zero, preserving Vitamin A, DHA, and ARA freshness for up to two full years.</li>
                    </ul>
`
            }
        }
    },
    hi: {
        title: "शिशु आहार एवं इन्फेंट फॉर्मूला निर्माण (Baby Food & Infant Formula)",
        subTopics: {
            "stage1-formula": {
                title: "A. इन्फेंट मिल्क फॉर्मूला (Stage 1: 0–6 माह) - ह्यूमनाइज्ड मिल्क",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. परिचय एवं दूध का मानवीकरण ("ह्यूमनाइजेशन" / Maternalization)</h3>
                    <p><strong>इन्फेंट मिल्क फॉर्मूला (Stage 1 Infant Formula: 0 से 6 माह)</strong> एक अत्यंत जटिल, बायो-केमिकल एवं पोषण वैज्ञानिक पद्धति से तैयार किया गया शिशु दुग्ध आहार है। इसे उस परिस्थिति में नवजात शिशु के संपूर्ण पोषण, शारीरिक विकास एवं मेटाबॉलिक आवश्यकताओं की पूर्ति के लिए डिजाइन किया गया है जब मां का दूध किसी गंभीर चिकित्सीय कारणवश उपलब्ध न हो या अपर्याप्त हो।</p>
                    <p class="mt-2">गाय या भैंस का कच्चा या साधारण उबला दूध 12 माह से कम उम्र के नवजात शिशु के लिए <strong>अत्यंत खतरनाक, अनुपयुक्त एवं नेफ्रोटॉक्सिक (गुर्दों को नुकसान पहुंचाने वाला)</strong> होता है। प्रकृति ने गाय के दूध को एक चौपाया बछड़े के तीव्र कंकाल एवं मांसपेशी विकास के लिए बनाया है (जो मात्र 45 दिनों में अपना वजन दोगुना कर लेता है), जबकि मानव शिशु का मस्तिष्क अत्यधिक जटिल होता है और वह अपना वजन बहुत धीमी गति से (लगभग 180 दिनों में) दोगुना करता है। परिणामस्वरूप, गाय के दूध में निम्नलिखित गंभीर विसंगतियां होती हैं:</p>
                    <ul class="list-disc list-inside space-y-1 ml-4 mt-2">
                        <li><strong>अत्यधिक प्रोटीन (3.2–3.5% बनाम मां के दूध में 0.9–1.2%):</strong> जिससे शिशु के खून में यूरिया और नाइट्रोजन का स्तर खतरनाक रूप से बढ़ जाता है।</li>
                        <li><strong>उल्टा व्हे-टू-कैसिइन अनुपात (20:80 बनाम मां के दूध में 60:40):</strong> गाय के दूध में कैल्शियम-संवेदी $\alpha_{s1}$-कैसिइन प्रचुर मात्रा में होता है, जो पेट में जाकर कड़ा, रबड़ जैसा रबर-थक्का (hard curd) बनाता है जिसे शिशु का पेट पचा नहीं पाता।</li>
                        <li><strong>अत्यधिक मिनरल्स एवं इलेक्ट्रोलाइट्स (Ash 0.75% बनाम 0.20%):</strong> अत्यधिक मिनरल्स के कारण शिशु के अपरिपक्व गुर्दों पर जानलेवा <strong>रीनल सॉल्यूट लोड (PRSL > 300 mOsm/L)</strong> पड़ता है।</li>
                        <li><strong>दोषपूर्ण फैट संरचना:</strong> गाय के दूध में पाल्मिटिक एसिड sn-1 और sn-3 स्थान पर होता है, जो पेट में जाकर कैल्शियम के साथ अघुलनशील साबुन (Calcium Soaps) बना देता है, जिससे भयंकर कब्ज और कैल्शियम की कमी हो जाती है। इसमें मस्तिष्क के विकास के लिए जरूरी DHA और ARA शून्य होते हैं।</li>
                    </ul>
                    <p class="mt-2">डेयरी टेक्नोलॉजी में गाय/भैंस के दूध की संरचना को आणविक स्तर पर पूरी तरह बदलकर मां के दूध के समान बनाने की प्रक्रिया को <strong>दूध का मानवीकरण या "ह्यूमनाइजेशन" (Humanization / Maternalization of Milk)</strong> कहा जाता है। इसमें दूध को अलग-अलग घटकों में तोड़कर, डीमिनरलाइज्ड व्हे, स्ट्रक्चर्ड लिपिड्स, एल्गल DHA/ARA और आवश्यक विटामिन्स मिलाकर री-इंजीनियर किया जाता है।</p>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. विस्तृत तुलनात्मक चार्ट: गाय का दूध vs. मां का दूध vs. स्टेज 1 इन्फेंट फॉर्मूला</h3>
                    <div class="overflow-x-auto mt-3">
                        <table class="w-full text-left border-collapse text-xs sm:text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">पोषक पैरामीटर</th>
                                    <th class="p-2 border">गाय का दूध (पूर्ण)</th>
                                    <th class="p-2 border">मां का दूध (HBM)</th>
                                    <th class="p-2 border">स्टेज 1 इन्फेंट फॉर्मूला मानक</th>
                                    <th class="p-2 border">वैज्ञानिक कारण एवं डेयरी प्रोसेसिंग समाधान</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong>ऊर्जा घनत्व (Energy)</strong></td>
                                    <td class="p-2 border">64–66 kcal/100 mL</td>
                                    <td class="p-2 border">65–70 kcal/100 mL</td>
                                    <td class="p-2 border"><strong>65–68 kcal/100 mL</strong> (500–520 kcal/100g)</td>
                                    <td class="p-2 border">शिशु के आमाशय के आकार (150 mL/kg/दिन) के अनुसार ऊर्जा को सटीक संतुलित किया जाता है।</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>कुल प्रोटीन (Protein)</strong></td>
                                    <td class="p-2 border">3.2–3.5 g/100 mL (घातक)</td>
                                    <td class="p-2 border">0.9–1.2 g/100 mL (आदर्श)</td>
                                    <td class="p-2 border"><strong>1.3–1.5 g/100 mL</strong> (10.5–12.0 g/100g)</td>
                                    <td class="p-2 border">दूध को डाइल्यूट करके और डीमिनरलाइज्ड व्हे मिलाकर प्रोटीन विषाक्तता रोकी जाती है।</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>व्हे : कैसिइन अनुपात</strong></td>
                                    <td class="p-2 border">20 : 80 (कठोर थक्का)</td>
                                    <td class="p-2 border"><strong>60 : 40</strong> (मुलायम थक्का)</td>
                                    <td class="p-2 border"><strong>60 : 40</strong> (प्रीमियम में 70:30)</td>
                                    <td class="p-2 border">D90 डीमिनरलाइज्ड व्हे पाउडर मिलाकर 60:40 अनुपात सेट किया जाता है ताकि पेट में कड़ा थक्का न जमे।</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>मुख्य कैसिइन प्रकार</strong></td>
                                    <td class="p-2 border">$\alpha_{s1}$-कैसिइन (38%) + $\beta$-कैसिइन</td>
                                    <td class="p-2 border"><strong>$\beta$-कैसिइन (70%)</strong>; $\alpha_{s1}$ शून्य (0%)</td>
                                    <td class="p-2 border">उच्च $\beta$-कैसिइन / न्यूनतम $\alpha_{s1}$-कैसिइन</td>
                                    <td class="p-2 border">$\alpha_{s1}$-कैसिइन कैल्शियम के साथ मिलकर कठोर थक्का बनाता है; मां के दूध में यह बिल्कुल नहीं होता।</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>मुख्य व्हे प्रोटीन</strong></td>
                                    <td class="p-2 border">$\beta$-लैक्टोग्लोबुलिन (55%, एलर्जी कारक)</td>
                                    <td class="p-2 border"><strong>$\alpha$-लैक्टाल्ब्यूमिन (41%)</strong> + लैक्टोफेरिन</td>
                                    <td class="p-2 border">$\alpha$-लैक्टाल्ब्यूमिन संवर्धित WPC-80</td>
                                    <td class="p-2 border">शिशु के लिए आवश्यक सिस्टीन व ट्रिप्टोफैन अमीनो एसिड प्रदान करता है और एलर्जी घटाता है।</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>कुल फैट (वसा)</strong></td>
                                    <td class="p-2 border">3.8–4.2 g/100 mL</td>
                                    <td class="p-2 border">3.6–4.4 g/100 mL</td>
                                    <td class="p-2 border"><strong>3.3–3.8 g/100 mL</strong> (26–28 g/100g)</td>
                                    <td class="p-2 border">कुल कैलोरी का 50% फैट से आता है, जो नर्वस सिस्टम व माइलिन शीथ निर्माण के लिए अनिवार्य है।</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>sn-2 पोजिशन फैटी एसिड</strong></td>
                                    <td class="p-2 border">40% पाल्मिटिक एसिड sn-2 पर</td>
                                    <td class="p-2 border"><strong>70–75% पाल्मिटिक sn-2 पर</strong></td>
                                    <td class="p-2 border"><strong>स्ट्रक्चर्ड OPO लिपिड्स</strong> (sn-2 पाल्मिटेट)</td>
                                    <td class="p-2 border">कैल्शियम-पाल्मिटेट साबुन नहीं बनता; मल मुलायम रहता है और हड्डियों को पूरा कैल्शियम मिलता है।</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>LC-PUFA (DHA और ARA)</strong></td>
                                    <td class="p-2 border">शून्य (< 0.1%)</td>
                                    <td class="p-2 border">DHA 0.35%, ARA 0.50%</td>
                                    <td class="p-2 border"><strong>DHA: $\ge 20$ mg/100 kcal; ARA: 1:1 से 2:1</strong></td>
                                    <td class="p-2 border">एल्गल ऑयल व फंगल ऑयल मिलाकर मस्तिष्क न्यूरॉन्स और आंखों की रेटिना का विकास किया जाता है।</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>कार्बोहाइड्रेट (लैक्टोज)</strong></td>
                                    <td class="p-2 border">4.6–4.8 g/100 mL (कम)</td>
                                    <td class="p-2 border">7.0–7.4 g/100 mL (लैक्टोज + HMOs)</td>
                                    <td class="p-2 border"><strong>7.0–7.5 g/100 mL</strong> (लैक्टोज $\ge 90\%$)</td>
                                    <td class="p-2 border">फार्मास्युटिकल लैक्टोज मिलाया जाता है; गैलेक्टोज मस्तिष्क में सेरेब्रोसाइड्स का निर्माण करता है।</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>प्रीबायोटिक्स (HMOs)</strong></td>
                                    <td class="p-2 border">नगण्य (0.05 g/100 mL)</td>
                                    <td class="p-2 border">1.2–1.5 g/100 mL (2'-FL, LNnT)</td>
                                    <td class="p-2 border"><strong>0.8 g/100 mL (GOS:FOS 9:1 + 2'-FL)</strong></td>
                                    <td class="p-2 border">आंतों में बिफिडोबैक्टीरिया बढ़ाता है और पैथोजेनिक बैक्टीरिया को चिपकने से रोकता है।</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>कुल भस्म/खनिज (Ash)</strong></td>
                                    <td class="p-2 border">0.75% (अत्यधिक भारी लोड)</td>
                                    <td class="p-2 border">0.20–0.22%</td>
                                    <td class="p-2 border"><strong>0.25–0.30%</strong> (2.0–2.5 g/100g)</td>
                                    <td class="p-2 border">इलेक्ट्रोडायलिसिस से 90% मिनरल्स निकाले जाते हैं ताकि गुर्दों पर रीनल लोड न पड़े।</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>रीनल सॉल्यूट लोड (PRSL)</strong></td>
                                    <td class="p-2 border">~308 mOsm/L (खतरनाक)</td>
                                    <td class="p-2 border">~93 mOsm/L</td>
                                    <td class="p-2 border"><strong>100–125 mOsm/L</strong></td>
                                    <td class="p-2 border">बुखार या गर्मी में शिशु को निर्जलीकरण (Dehydration) और हाइपरनेट्रेमिया से बचाता है।</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. रीनल सॉल्यूट लोड (PRSL) का फिजियोलॉजिकल विज्ञान</h3>
                    <p>शिशु आहार निर्माण में <strong>पोटेंशियल रीनल सॉल्यूट लोड (Potential Renal Solute Load - PRSL)</strong> सबसे महत्वपूर्ण वैज्ञानिक पैमाना है। यह आहार में मौजूद उन सभी घुलनशील तत्वों का योग है जिन्हें मूत्र के माध्यम से गुर्दों द्वारा बाहर निकालना आवश्यक होता है।</p>

                    <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-lg mt-3">
                        <p class="font-mono text-xs text-indigo-900"><strong>जिगलर-फोमोन समीकरण (Ziegler-Fomon Equation):</strong></p>
                        <p class="font-mono text-xs text-indigo-800 mt-1">PRSL (mOsm) = (प्रोटीन ग्राम में / 0.175) + सोडियम (mmol) + क्लोराइड (mmol) + पोटैशियम (mmol) + फॉस्फोरस (mmol)</p>
                        <p class="text-xs text-indigo-700 mt-1">प्रत्येक ग्राम प्रोटीन के मेटाबॉलिज्म से लगभग 5.7 mOsm यूरिया नाइट्रोजन उत्सर्जित होता है।</p>
                    </div>

                    <p class="mt-3"><strong>नवजात शिशु अधिक PRSL क्यों नहीं झेल सकता?</strong></p>
                    <ol class="list-decimal list-inside space-y-2 ml-4 mt-2">
                        <li><strong>कम ग्लोमेरुलर फिल्ट्रेशन दर (Low GFR):</strong> जन्म के समय नवजात शिशु की किडनी की कार्यक्षमता (GFR) केवल <strong>20 से 30 mL/min/1.73 m²</strong> होती है (वयस्क के 120 mL/min का केवल 20%)। किडनी को पूरी तरह परिपक्व होने में 12 से 24 महीने का समय लगता है।</li>
                        <li><strong>सीमित मूत्र सांद्रण क्षमता (Poor Concentrating Ability):</strong> नवजात शिशु की किडनी में हेनले का लूप (Loop of Henle) छोटा होता है और यूरिया ट्रांसपोर्टर्स अविकसित होते हैं। इसलिए नवजात शिशु का मूत्र सांद्रण अधिकतम <strong>600 से 700 mOsm/kg</strong> तक ही हो सकता है (जबकि वयस्क 1400 mOsm/kg तक सांद्र कर सकता है)।</li>
                        <li><strong>हाइपरनेट्रेमिक डिहाइड्रेशन का खतरा:</strong> यदि नवजात शिशु को गाय का दूध दिया जाए (PRSL > 300 mOsm/L), तो किडनी को अतिरिक्त यूरिया व लवण बाहर निकालने के लिए शरीर का पूरा पानी खींचना पड़ता है। दस्त, गर्मी या बुखार होने पर शिशु गंभीर <strong>हाइपरनेट्रेमिक डिहाइड्रेशन, सेरेब्रल एडिमा (दिमाग में सूजन) और रीनल वेन थ्रॉम्बोसिस</strong> का शिकार हो सकता है।</li>
                        <li><strong>डेयरी इंजीनियरिंग समाधान:</strong> फॉर्मूलेशन में <strong>D90 डीमिनरलाइज्ड व्हे पाउडर</strong> का उपयोग किया जाता है। इलेक्ट्रोडायलिसिस और आयन-एक्सचेंज रेजिन द्वारा 90% अवांछित लवण बाहर निकाल दिए जाते हैं, जिससे रीकॉन्स्टिट्यूटेड फॉर्मूला का PRSL सुरक्षित रूप से <strong>100–125 mOsm/L</strong> पर आ जाता है।</li>
                    </ol>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. कैसिइन मिसेल की आणविक संरचना, कर्ड टेंशन एवं आमाशय पाचन काइनेटिक्स</h3>
                    <p>दूध का प्रोटीन पेट में जाकर कैसा थक्का बनाता है, यह सीधे शिशु की पाचन गति, पेट दर्द और उल्टी को नियंत्रित करता है।</p>

                    <p class="mt-2"><strong>कैसिइन मिसेल में आणविक अंतर:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>गाय का कैसिइन मिसेल:</strong> इसका आकार 150–250 nm होता है और इसमें 38% $\alpha_{s1}$-कैसिइन होता है, जो <strong>कोलॉइडल कैल्शियम फॉस्फेट (Colloidal Calcium Phosphate - CCP, 6.5%)</strong> द्वारा कसकर बंधा होता है। कैल्शियम की उपस्थिति में यह तुरंत सख्त थक्का बनाता है।</li>
                        <li><strong>मां के दूध का कैसिइन मिसेल:</strong> इसका आकार बहुत छोटा (50–70 nm) होता है, इसमें CCP मात्र 1.5% होता है और इसमें <strong>$\alpha_{s1}$-कैसिइन पूरी तरह अनुपस्थित (0%)</strong> होता है। इसमें 70% $\beta$-कैसिइन होता है जो मुलायम और लचीला होता है।</li>
                    </ul>

                    <p class="mt-3"><strong>आमाशय पाचन का बायोफिज़िक्स:</strong></p>
                    <p>नवजात शिशु के पेट में एसिड उत्पादन कम होता है और दूध पीने के बाद पेट का pH <strong>4.5 से 5.5</strong> रहता है, जहां पेप्सिन एंजाइम की सक्रियता केवल 10-15% होती है:</p>
                    <ul class="list-disc list-inside space-y-2 ml-4 mt-2">
                        <li><strong>गाय के दूध का थक्का:</strong> $\alpha_{s1}$-कैसिइन कैल्शियम के साथ क्रिया करके पेट में रबड़ जैसा कड़ा, कठोर गोला बना लेता है, जिसका <strong>कर्ड टेंशन > 50–70 ग्राम</strong> होता है। यह थक्का पेट में 4 से 6 घंटे तक फंसा रहता है, जिससे शिशु को पेट में गैस, पेट फूलना (colic), दर्द और उल्टी (GERD) होती है।</li>
                        <li><strong>ह्यूमनाइज्ड फॉर्मूला (60:40 अनुपात) का थक्का:</strong> $\alpha$-लैक्टाल्ब्यूमिन व्हे और कम कैसिइन के कारण कर्ड टेंशन <strong>< 5 ग्राम (शून्य कर्ड टेंशन)</strong> हो जाता है। पेट में यह दूध कड़े थक्के के बजाय मुलायम, छिद्रयुक्त सूक्ष्म कणों में बिखर जाता है। एंजाइम इसे मात्र <strong>90 से 120 मिनट में</strong> पूरी तरह पचाकर आंतों में भेज देते हैं।</li>
                    </ul>

                    <p class="mt-3"><strong>अमीनो एसिड संतुलन का बायोकेमिस्ट्री:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>एल-सिस्टीन (L-Cysteine):</strong> नवजात शिशु में <em>सिस्टाथायोनेज (Cystathionase)</em> एंजाइम अविकसित होता है, जिससे वह मिथायोनीन से सिस्टीन नहीं बना पाता। मां के दूध के समान $\alpha$-लैक्टाल्ब्यूमिन मिलाने से प्रचुर सिस्टीन मिलता है जो लिवर डिटॉक्सिफिकेशन और ग्लूटाथायोन एंटीऑक्सीडेंट के लिए अनिवार्य है।</li>
                        <li><strong>टॉरिन (Taurine):</strong> नवजात शिशु टॉरिन खुद संश्लेषित नहीं कर सकता। शिशु फॉर्मूला में टॉरिन (min 40 mg/100 kcal) मिलाना कानूनी रूप से अनिवार्य है। टॉरिन पित्त लवणों (Bile acids) के साथ जुड़कर <em>टॉरोकोलिक एसिड</em> बनाता है, जिसके बिना शिशु फैट (वसा) का अवशोषण नहीं कर सकता। यह आंखों की रेटिना और मस्तिष्क के लिए भी आवश्यक है।</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">5. स्टीरियोस्पेसिफिक लिपिड बायोकेमिस्ट्री: sn-2 पोजिशन एवं अघुलनशील कैल्शियम साबुन</h3>
                    <p>शिशु आहार में फैट की प्रभावशीलता केवल फैटी एसिड पर निर्भर नहीं करती, बल्कि यह इस बात पर निर्भर करती है कि ग्लिसरॉल रीढ़ की हड्डी पर फैटी एसिड किस पोजीशन (sn-1, sn-2 या sn-3) पर जुड़ा हुआ है।</p>

                    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-3">
                        <p class="text-xs text-amber-900 font-semibold">शिशु की आंत में कैल्सीफिकेशन/सैपोनिफिकेशन रासायनिक क्रिया:</p>
                        <p class="font-mono text-xs text-amber-800 mt-1">2 मुक्त पाल्मिटिक एसिड (C₁₅H₃₁COOH) + Ca²⁺ ──[pH 7.0–7.5]──> Ca(C₁₅H₃₁COO)₂ ↓ (अघुलनशील कैल्शियम-पाल्मिटेट साबुन) + 2 H⁺</p>
                        <p class="text-xs text-amber-800 mt-1">मुक्त पाल्मिटिक एसिड का गलनांक 63°C होता है (शिशु शरीर 37°C पर ठोस पत्थर बन जाता है); यह आंतों में कड़ा मल और कब्ज पैदा करता है।</p>
                    </div>

                    <p class="mt-3"><strong>वेजिटेबल ऑयल (पाम ऑयल) की समस्या:</strong></p>
                    <ol class="list-decimal list-inside space-y-2 ml-4 mt-2">
                        <li>साधारण पाम ऑयल में 85% पाल्मिटिक एसिड बाहरी <strong>sn-1 और sn-3 पोजीशन</strong> पर होता है।</li>
                        <li>शिशु के अग्न्याशय का <em>पैंक्रियाटिक लाइपेस</em> एंजाइम केवल sn-1 और sn-3 बॉन्ड को तोड़ता है। परिणामस्वरूप बड़ी मात्रा में <strong>मुक्त पाल्मिटिक एसिड (Free Palmitic Acid)</strong> अलग हो जाता है।</li>
                        <li>आंतों के क्षारीय वातावरण (pH 7.2) में यह मुक्त एसिड दूध के कैल्शियम ($Ca^{2+}$) के साथ रासायनिक क्रिया करके <strong>अघुलनशील कैल्शियम साबुन (Insoluble Soaps)</strong> बना देता है।</li>
                        <li><strong>हानिकारक परिणाम:</strong> यह मोम जैसा कठोर साबुन आंतों में सूख जाता है, जिससे शिशु को <strong>भयंकर कब्ज, पत्थर जैसा कड़ा मल और पेट दर्द</strong> होता है। साथ ही 30-40% कैल्शियम मल के साथ बाहर बह जाता है, जिससे शिशु की हड्डियां कमजोर रह जाती हैं।</li>
                    </ol>

                    <p class="mt-3"><strong>स्ट्रक्चर्ड लिपिड्स (sn-2 OPO) का वैज्ञानिक चमत्कार:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li>मां के दूध में <strong>70 से 75% पाल्मिटिक एसिड बीच वाली sn-2 पोजीशन पर</strong> होता है और sn-1 व sn-3 पर ओलिक एसिड होता है (जिसे <strong>OPO स्ट्रक्चर</strong> कहते हैं)।</li>
                        <li>पाचन के समय लाइपेस एंजाइम sn-1 और sn-3 के ओलिक एसिड को काटता है (जो 13°C पर पिघला रहता है और साबुन नहीं बनाता)। पाल्मिटिक एसिड <strong>sn-2 मोनोपाल्मिटिन</strong> के रूप में जुड़ा रहता है।</li>
                        <li>2-मोनोपाल्मिटिन पित्त लवणों के साथ मिलकर तुरंत मिसेल बना लेता है और बिना किसी रुकावट के आंतों की कोशिकाओं द्वारा सीधे अवशोषित हो जाता है। कोई अघुलनशील साबुन नहीं बनता!</li>
                        <li><strong>औद्योगिक निर्माण:</strong> आधुनिक प्रीमियम फॉर्मूला में <em>Rhizomucor miehei</em> एंजाइम द्वारा ट्रांसएस्टरीफिकेशन कराकर स्ट्रक्चर्ड OPO फैट तैयार किया जाता है, जिससे शिशु का पेट बिल्कुल साफ रहता है और मल मां के दूध जैसा मुलायम रहता है।</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">6. LC-PUFA बायोकेमिस्ट्री: DHA ($22:6\,n-3$) एवं ARA ($20:4\,n-6$) पाथवे</h3>
                    <p>मस्तिष्क की 60% संरचना लिपिड से बनी होती है, जिसमें 20 से अधिक कार्बन वाले पॉलीअनसैचुरेटेड फैटी एसिड्स (DHA एवं ARA) सबसे महत्वपूर्ण बिल्डिंग ब्लॉक्स हैं।</p>

                    <p class="mt-2"><strong>शिशु के लिवर में डेसेच्युरेज एंजाइम की कमी:</strong></p>
                    <p>साधारण वनस्पति तेलों से शरीर में DHA और ARA बनने के दो मार्ग होते हैं:</p>
                    <ul class="list-disc list-inside space-y-1 ml-4 mt-2">
                        <li><strong>&omega;-6 पाथवे:</strong> लिनोलिक एसिड &rarr; [&Delta;6-डेसेच्युरेज] &rarr; &gamma;-लिनोलेनिक &rarr; [एलॉन्गेज] &rarr; DGLA &rarr; [&Delta;5-डेसेच्युरेज] &rarr; <strong>अराकिडोनिक एसिड (ARA, 20:4 n-6)</strong></li>
                        <li><strong>&omega;-3 पाथवे:</strong> अल्फा-लिनोलेनिक एसिड &rarr; [&Delta;6-डेसेच्युरेज] &rarr; EPA &rarr; [&Delta;5-डेसेच्युरेज] &rarr; <strong>डोकोसाहेक्साएनोइक एसिड (DHA, 22:6 n-3)</strong></li>
                    </ul>
                    <p class="mt-2">नवजात शिशु के लिवर में <strong>$\Delta 6$-डेसेच्युरेज और $\Delta 5$-डेसेच्युरेज</strong> एंजाइम बहुत कम सक्रिय होते हैं। इसलिए शिशु सोयाबीन या कैनोला तेल से स्वयं आवश्यक मात्रा में DHA/ARA नहीं बना सकता।</p>

                    <p class="mt-3"><strong>जैविक कार्य एवं नियम:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>आंखों की रेटिना में DHA:</strong> रेटिना की रॉड कोशिकाओं में 50% से अधिक फैटी एसिड DHA होता है। यह झिल्ली को लचीला रखता है जिससे प्रकाश पड़ते ही <em>रोडोप्सिन</em> प्रोटीन सक्रिय हो सके। DHA की कमी से दृष्टि कमजोर रह जाती है।</li>
                        <li><strong>मस्तिष्क में ARA:</strong> सेरेब्रल कॉर्टेक्स के विस्तार, न्यूरॉन सिनैप्सिस और इम्यून सिग्नलिंग के लिए ARA अनिवार्य है।</li>
                        <li><strong>FSSAI एवं कोडेक्स नियम:</strong> फॉर्मूला में DHA न्यूनतम <strong>20 mg/100 kcal</strong> होना अनिवार्य है। साथ ही <strong>ARA को कम से कम 1:1 से 2:1 के अनुपात में</strong> मिलाना अनिवार्य है, क्योंकि बिना ARA के केवल DHA देने से शिशु की शारीरिक वृद्धि रुक जाती है।</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">7. कार्बोहाइड्रेट बायोफिज़िक्स: लैक्टोज vs HMOs (2'-FL)</h3>
                    <p>FSSAI नियमों के अनुसार स्टेज 1 फॉर्मूला में <strong>न्यूनतम 90% कार्बोहाइड्रेट शुद्ध लैक्टोज</strong> होना चाहिए।</p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>मस्तिष्क विकास के लिए गैलेक्टोज:</strong> लैक्टोज पचने पर ग्लूकोज और गैलेक्टोज देता है। गैलेक्टोज लिवर के <em>लेलोइर पाथवे (Leloir Pathway)</em> द्वारा UDP-गैलेक्टोज में बदलकर मस्तिष्क के न्यूरॉन्स की रक्षा करने वाली <strong>माइलिन शीथ (Myelin Sheath) और सेरेब्रोसाइड्स</strong> का निर्माण करता है। यदि लैक्टोज की जगह माल्टोडेक्सट्रिन दिया जाए तो मस्तिष्क इस आवश्यक घटक से वंचित रह जाता है।</li>
                        <li><strong>2'-FL का डिमॉय (Decoy) रिसेप्टर विज्ञान:</strong> ह्यूमन मिल्क ओलिगोसैकराइड (2'-FL) आंतों में हानिकारक बैक्टीरिया (जैसे <em>Campylobacter</em> या <em>E. coli</em>) को आंत की दीवार पर चिपकने से रोकता है। बैक्टीरिया 2'-FL को आंत की कोशिका समझकर उससे चिपक जाते हैं और मल के साथ बाहर निकल जाते हैं।</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">8. औद्योगिक निर्माण फ्लोचार्ट (13-चरणीय प्रक्रिया एवं CCP)</h3>

    <div class="my-6 p-3 sm:p-5 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 rounded-2xl border-2 border-indigo-200/80 shadow-sm">
        <div class="flex items-center justify-between gap-2 flex-wrap pb-3 mb-4 border-b border-indigo-100">
            <div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm">
                        ⚡
                    </span>
                    <h4 class="!m-0 !p-0 !bg-none !border-none text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">
                        स्टेज 1 इन्फेंट मिल्क फॉर्मूला (0–6 माह) — संपूर्ण औद्योगिक फ्लोचार्ट
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">13-चरणीय स्वचालित सतत निर्माण प्रक्रिया (PRP, oPRP एवं CCP नियंत्रण बिंदुओं सहित)</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                13-चरणीय CCP फ्लोचार्ट
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
                    कच्चा दूध रिसेप्शन एवं उच्च-स्वच्छता स्क्रीनिंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: कच्चा दूध परीक्षण</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">गाय के दूध को सख्त रूप से $\le 4^\circ\text{C}$ पर स्वीकार करना। एंटीबायोटिक अवशेषों (Charm Trio टेस्ट < 0.004 ppm), एफ्लाटॉक्सिन M1 < 0.025 $\mu$g/kg और कुल स्पोर्स < 50 CFU/mL का तत्काल परीक्षण।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≤ 4.0°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">एंटीबायोटिक</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">शून्य (0.0 ppm)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">एफ्लाटॉक्सिन M1</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.025 µg/kg</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">स्पोर्स</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 50 CFU/mL</strong></div></div>
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
                    अपकेंद्री क्लेरिफिकेशन, बैक्टोफ्यूगेशन एवं फैट सेपरेशन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">भौतिक शुद्धिकरण</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">सैल्युलर मलबे को निकालना। हर्मेटिक बैक्टोफ्यूज द्वारा 9,000×g अपकेंद्री बल लगाकर 98.5% ताप-प्रतिरोधी स्पोर्स (Bacillus cereus) को व्हे प्रोटीन को बिना जलाए अलग करना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">सेपरेटर तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">55°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">बैक्टोफ्यूज बल</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">9,000 × g</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">स्पोर कमी</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 98.5%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">स्किम्ड फैट</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.05%</strong></div></div>
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
                    वेट रीकॉम्बिनेशन एवं व्हे:कैसिइन 60:40 मानकीकरण
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: प्रोटीन अनुपात</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">स्किम्ड दूध में D90 डीमिनरलाइज्ड व्हे पाउडर (90% मिनरल्स मुक्त) और फार्मास्युटिकल लैक्टोज मिलाकर व्हे:कैसिइन अनुपात को मां के दूध के समान ठीक 60:40 पर सेट करना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">व्हे : कैसिइन</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60 : 40</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">मिनरल्स कमी</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">90% कम (D90)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">लैक्टोज</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">7.2% लक्षित</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">टोटल सॉलिड्स</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">18–20% TS</strong></div></div>
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
                    ऑयल फेज तैयारी एवं स्ट्रक्चर्ड OPO लिपिड डोजिंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">लिपिड सिस्टम</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">नाइट्रोजन वातावरण में 60°C पर स्ट्रक्चर्ड sn-2 OPO फैट, हाई-ओलिक सनफ्लावर, नारियल तेल, सोयाबीन तेल, फंगल ARA और एल्गल DHA तेल को फैट-घुलनशील विटामिन्स सहित मिलाना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ऑयल तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">वातावरण</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% नाइट्रोजन</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">sn-2 पाल्मिटेट</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 70% sn-2 पर</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">DHA : ARA</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1 : 1.5 अनुपात</strong></div></div>
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
                    हाई-शीयर इन-लाइन इमल्सीफिकेशन एवं प्री-हीटिंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">इमल्शन स्टेज</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">नाइट्रोजन की मौजूदगी में इन-लाइन माइक्रो-डोजिंग पंप द्वारा ऑयल को लिक्विड दूध में मिलाना। हाई-शीयर मिक्सर द्वारा फैट की बूंदों को d50 < 5 µm तक तोड़ना और 65°C प्री-हीट करना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">शीयर गति</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">3,000 RPM</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ड्रॉपलेट आकार</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">d50 < 5 µm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">प्री-हीट तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">65°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">डी-एरेशन</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">वैक्यूम में</strong></div></div>
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
                    टू-स्टेज हाई-प्रेशर होमोजिनाइजेशन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: सब-माइक्रोन इमल्शन</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">हाई-प्रेशर हाइड्रोलिक शीयरिंग। प्रथम स्टेज 180–200 bar पर फैट बूंदों को d32 < 0.8 µm में तोड़ती है। द्वितीय स्टेज 40–50 bar पर क्लस्टर्स को अलग करती है। व्हे प्रोटीन तुरंत फैट पर कोट हो जाता है।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">प्रथम स्टेज</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">180–200 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">द्वितीय स्टेज</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">40–50 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ड्रॉपलेट d32</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.8 µm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">फ्री फैट रिस्क</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">शून्य</strong></div></div>
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
                    थर्मल पाश्चुरीकरण / डायरेक्ट स्टीम इंजेक्शन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: बैक्टीरिया का पूर्ण खात्मा</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">क्रिटिकल कंट्रोल पॉइंट 1: प्लेट हीट एक्सचेंजर द्वारा 105°C पर 30 सेकंड (या DSI 125°C/5s) गर्म करना। Cronobacter sakazakii और Salmonella का >12D पूर्ण खात्मा (व्हे डिनेचुरेशन < 15%)।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">105.0°C ± 0.5°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">होल्डिंग समय</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">30 सेकंड</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">लॉग कमी</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 12D Kill</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">FDV डायवर्ट</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 104.5°C</strong></div></div>
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
                    मल्टी-स्टेज फॉलिंग फिल्म वैक्यूम इवैपोरेशन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">सांद्रण</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">MVR युक्त 4-इफेक्ट फॉलिंग फिल्म इवैपोरेटर। उच्च वैक्यूम (52°C से 70°C) में दूध को 18% से बढ़ाकर 48–52% टोटल सॉलिड्स (TS) तक गाढ़ा करना बिना मेलार्ड रिएक्शन या लाइसिन के नुकसान के।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">वैक्यूम स्तर</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">-0.85 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">उत्पाद तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">52°C से 70°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">अंतिम गाढ़ापन</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">48–52% TS</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">भाप बचत</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">MVR पावर्ड</strong></div></div>
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
                    वैक्यूम डी-एरेशन एवं हाई-प्रेशर एटोमाइजेशन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: नोजल एटोमाइजेशन</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">वैक्यूम डी-एरेशन से हवा के बुलबुले निकालना। हाई-प्रेशर प्लंजर पंप द्वारा 180–220 bar दबाव पर टंगस्टन कार्बाइड नोजल से महीन धुंध (60–90 µm) के रूप में ड्रायर में स्प्रे करना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">नोजल दबाव</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">180–220 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ड्रॉपलेट आकार</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60–90 µm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">डी-एरेशन वैक्यूम</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">-0.90 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">मिल्क तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">68°C</strong></div></div>
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
                    3-स्टेज टॉल-फॉर्म स्प्रे ड्राइंग एवं एग्लोमरेशन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">ड्राइंग स्टेज 1 एवं 2</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">स्टेज 1: गर्म छनी हुई हवा (इनलेट 185–195°C, एग्जॉस्ट 82–85°C) से 15 सेकंड में पानी उड़ाना। पाउडर स्टेज 2 (इंटरनल फ्लुइड बेड 70°C) में गिरता है। साइक्लोन से महीन पाउडर रिसाइकिल कर दानेदार एग्लोमरेट्स बनाना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">इनलेट तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">185°C – 195°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">एग्जॉस्ट तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">82°C – 85°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">इंटरनल बेड</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">70°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">नमी स्तर</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">~4.5%</strong></div></div>
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
                    एक्सटर्नल वाइब्रेटिंग फ्लुइड बेड लेसिथिनेशन एवं कंडीशनिंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">त्वरित घुलनशीलता</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">स्टेज 3: प्लग-फ्लो वाइब्रेटिंग बेड। प्रथम भाग में 0.2–0.3% सनफ्लावर लेसिथिन स्प्रे कर संपर्क कोण < 15° करना। दूसरे भाग में ठंडी शुष्क हवा से पाउडर को 20°C पर ठंडा करना (नमी 2.5–2.8%)।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">लेसिथिन स्प्रे</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.2–0.3% w/w</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">अंतिम नमी</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">2.5% – 2.8%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ठंडा तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">20°C – 22°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">घुलने का समय</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 10 सेकंड</strong></div></div>
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
                    इन-लाइन सिफ्टिंग, 12,000 गॉस मैग्नेट एवं मेटल डिटेक्शन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-4: बाहरी तत्व नियंत्रण</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">पाउडर को 1.0 mm रोटरी छलनी और 12,000 गॉस रेयर-अर्थ मैग्नेटिक जाली से गुजारना। डुअल मेटल डिटेक्टर द्वारा ≥ 0.8 mm Fe, ≥ 1.0 mm Non-Fe और ≥ 1.2 mm SS 316 का स्वचालित रिजेक्शन।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">छलनी जाली</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.0 mm स्टेनलेस</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">मैग्नेटिक क्षमता</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12,000 गॉस</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">आयरन डिटेक्शन</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 0.8 mm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">SS डिटेक्शन</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 1.2 mm</strong></div></div>
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
                    वैक्यूम नाइट्रोजन पैकिंग (MAP) एवं कैन सीमिंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-5: ऑक्सीजन नियंत्रण</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">ISO Class 7 क्लीनरूम (+30 Pa) में डिब्बे को वैक्यूम (-0.95 bar) करके उसमें 98% N₂ + 2% CO₂ भरना। डबल-सीमिंग लॉक। अवशिष्ट ऑक्सीजन < 1.0% सुनिश्चित करना (24 माह शेल्फ लाइफ)।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">वैक्यूम गहराई</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">-0.95 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">गैस मिश्रण</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">98% N₂ + 2% CO₂</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">अवशिष्ट ऑक्सीजन</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.0% (लक्ष्य <0.5%)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">शेल्फ लाइफ</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">24 माह</strong></div></div>
    </div>
    
        </div>
    </div>
    
                    <div class="space-y-3 font-sans text-xs">
                        <div class="p-3 bg-white border-l-4 border-blue-500 rounded-r-lg shadow-sm">
                            <strong class="text-blue-900 block text-sm">स्टेप 1: कच्चा दूध रिसेप्शन एवं परीक्षण (PRP-1)</strong>
                            <p class="text-gray-700 mt-1">एंटीबायोटिक अवशेष शून्य, एफ्लाटॉक्सिन M1 < 0.025 $\mu$g/kg, तापमान $\le 4^\circ\text{C}$।</p>
                        </div>
                        <div class="p-3 bg-white border-l-4 border-indigo-500 rounded-r-lg shadow-sm">
                            <strong class="text-indigo-900 block text-sm">स्टेप 2: बैक्टोफ्यूगेशन एवं सेपरेशन</strong>
                            <p class="text-gray-700 mt-1">हर्मेटिक सेपरेटर व बैक्टोफ्यूज द्वारा 98.5% बैक्टीरियल स्पोर्स (<em>Bacillus cereus</em>) को अपकेंद्री बल द्वारा अलग करना।</p>
                        </div>
                        <div class="p-3 bg-white border-l-4 border-teal-500 rounded-r-lg shadow-sm">
                            <strong class="text-teal-900 block text-sm">स्टेप 3: वेट रीकॉम्बिनेशन एवं व्हे:कैसिइन मानकीकरण (oPRP-1)</strong>
                            <p class="text-gray-700 mt-1">D90 डीमिनरलाइज्ड व्हे और फार्मा लैक्टोज मिलाकर <strong>व्हे:कैसिइन अनुपात को ठीक 60:40</strong> पर सेट करना।</p>
                        </div>
                        <div class="p-3 bg-white border-l-4 border-amber-500 rounded-r-lg shadow-sm">
                            <strong class="text-amber-900 block text-sm">स्टेप 4: ऑयल फेज एवं स्ट्रक्चर्ड OPO ब्लेंडिंग</strong>
                            <p class="text-gray-700 mt-1">OPO स्ट्रक्चर्ड लिपिड, सनफ्लावर, नारियल, सोयाबीन, एल्गल DHA एवं फंगल ARA ऑयल को $60^\circ\text{C}$ पर विटामिन्स सहित मिलाना।</p>
                        </div>
                        <div class="p-3 bg-white border-l-4 border-orange-500 rounded-r-lg shadow-sm">
                            <strong class="text-orange-900 block text-sm">स्टेप 5: हाई-शीयर इमल्सीफिकेशन एवं प्री-हीटिंग</strong>
                            <p class="text-gray-700 mt-1">नाइट्रोजन वातावरण में हाई-शीयर मिक्सर द्वारा ऑयल ड्रॉपलेट को $5\,\mu\text{m}$ से छोटा करना, $65^\circ\text{C}$ प्री-हीट।</p>
                        </div>
                        <div class="p-3 bg-white border-l-4 border-emerald-500 rounded-r-lg shadow-sm">
                            <strong class="text-emerald-900 block text-sm">स्टेप 6: टू-स्टेज हाई-प्रेशर होमोजिनाइजेशन (CCP-2)</strong>
                            <p class="text-gray-700 mt-1">प्रथम स्टेज 180–200 bar, द्वितीय स्टेज 40–50 bar। ऑयल ड्रॉपलेट्स $0.8\,\mu\text{m}$ से छोटे हो जाते हैं और व्हे प्रोटीन से कोट हो जाते हैं।</p>
                        </div>
                        <div class="p-3 bg-white border-l-4 border-red-500 rounded-r-lg shadow-sm">
                            <strong class="text-red-900 block text-sm">स्टेप 7: थर्मल पाश्चुरीकरण (CCP-1)</strong>
                            <p class="text-gray-700 mt-1"><strong>$105^\circ\text{C}$ पर 30 सेकंड</strong> (या DSI $125^\circ\text{C}$/5s)। <em>Cronobacter</em> और <em>Salmonella</em> का $>12\text{D}$ पूर्ण खात्मा।</p>
                        </div>
                        <div class="p-3 bg-white border-l-4 border-cyan-500 rounded-r-lg shadow-sm">
                            <strong class="text-cyan-900 block text-sm">स्टेप 8: फॉलिंग फिल्म वैक्यूम इवैपोरेशन</strong>
                            <p class="text-gray-700 mt-1">वैक्यूम में कम तापमान ($52–70^\circ\text{C}$) पर सांद्रण करके <strong>48–52% टोटल सॉलिड्स (TS)</strong> प्राप्त करना।</p>
                        </div>
                        <div class="p-3 bg-white border-l-4 border-purple-500 rounded-r-lg shadow-sm">
                            <strong class="text-purple-900 block text-sm">स्टेप 9: डी-एरेशन एवं हाई-प्रेशर एटोमाइजेशन (CCP-3)</strong>
                            <p class="text-gray-700 mt-1">वैक्यूम डी-एरेशन द्वारा हवा के बुलबुले निकालना और 180–220 bar प्रेशर नोजल द्वारा स्प्रे करना।</p>
                        </div>
                        <div class="p-3 bg-white border-l-4 border-pink-500 rounded-r-lg shadow-sm">
                            <strong class="text-pink-900 block text-sm">स्टेप 10: 3-स्टेज टॉल-फॉर्म स्प्रे ड्राइंग एवं एग्लोमरेशन</strong>
                            <p class="text-gray-700 mt-1">इनलेट $185–195^\circ\text{C}$, एग्जॉस्ट $82–85^\circ\text{C}$। इंटरनल फ्लुइड बेड ($70^\circ\text{C}$) द्वारा दानेदार एग्लोमरेट्स बनाना।</p>
                        </div>
                        <div class="p-3 bg-white border-l-4 border-rose-500 rounded-r-lg shadow-sm">
                            <strong class="text-rose-900 block text-sm">स्टेप 11: एक्सटर्नल फ्लुइड बेड कंडीशनिंग एवं लेसिथिनेशन</strong>
                            <p class="text-gray-700 mt-1">सनफ्लावर लेसिथिन ($0.2–0.3\%$) स्प्रे करके पाउडर को इंस्टेंट घुलनशील बनाना। ठंडी शुष्क हवा ($20^\circ\text{C}$) से ठंडा करना (नमी $2.5–2.8\%$) ताकि ग्लास ट्रांजिशन सुरक्षित रहे।</p>
                        </div>
                        <div class="p-3 bg-white border-l-4 border-red-600 rounded-r-lg shadow-sm">
                            <strong class="text-red-900 block text-sm">स्टेप 12: इन-लाइन सिफ्टिंग, मैग्नेट एवं मेटल डिटेक्शन (CCP-4)</strong>
                            <p class="text-gray-700 mt-1">12,000 गॉस रेयर-अर्थ मैग्नेट एवं डुअल मेटल डिटेक्टर ($0.8\text{ mm}$ Fe, $1.0\text{ mm}$ Non-Fe, $1.2\text{ mm}$ SS)।</p>
                        </div>
                        <div class="p-3 bg-white border-l-4 border-emerald-600 rounded-r-lg shadow-sm">
                            <strong class="text-emerald-900 block text-sm">स्टेप 13: इनर्ट गैस पैकिंग (MAP), कैन सीमिंग (CCP-5)</strong>
                            <p class="text-gray-700 mt-1">ISO Class 7 क्लीनरूम में डिब्बे को वैक्यूम करके <strong>$98\%\text{ N}_2 + 2\%\text{ CO}_2$</strong> भरना। अवशिष्ट ऑक्सीजन <strong>$< 1.0\%$</strong> सुनिश्चित करना।</p>
                        </div>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">9. स्प्रे ड्राइंग भौतिकी, ग्लास ट्रांजिशन ($T_g$) एवं लेसिथिनेशन</h3>
                    <p>पाउडर का स्थायित्व <strong>ग्लास ट्रांजिशन तापमान ($T_g$)</strong> पर निर्भर करता है (गॉर्डन-टेलर समीकरण):</p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>ग्लास स्टेट में स्थिरता:</strong> 2.5% नमी पर लैक्टोज का $T_g pprox 58^\circ	ext{C}$ होता है, जिससे पाउडर कमरे के तापमान (25–30°C) पर कड़क, सूखा और स्वतंत्र बहने वाला रहता है।</li>
                        <li><strong>केंकिंग व फैट लीकेज का खतरा:</strong> यदि नमी बढ़कर 4.5% हो जाए, तो $T_g$ गिरकर 38°C पर आ जाता है। तापमान $T_g$ से ऊपर जाते ही लैक्टोज क्रिस्टलाइज होने लगता है और अंदर बंद फैट बाहर निकलकर पाउडर की सतह पर आ जाता है। <strong>फ्री सरफेस फैट 1% से बढ़कर 12% हो जाता है</strong>, पाउडर के पत्थर जैसे ढेले बन जाते हैं और तेल का ऑक्सीडेशन होकर बदबू आने लगती है। इसलिए नमी को 3% से नीचे रखना अनिवार्य है।</li>
                        <li><strong>लेसिथिनेशन (त्वरित घुलनशीलता):</strong> पाउडर के कणों पर सनफ्लावर लेसिथिन की आणविक परत चढ़ाई जाती है। लेसिथिन का हाइड्रोफिलिक सिरा बाहर रहता है जिससे पानी का संपर्क कोण (Contact Angle) $90^\circ$ से घटकर <strong>$< 15^\circ$</strong> रह जाता है और पाउडर 10 सेकंड में बिना गांठ बने पानी में घुल जाता है।</li>
                    </ul>
`
            },
            "stage2-followup": {
                title: "B. फॉलो-अप फॉर्मूला (Stage 2: 6–12 माह) एवं टॉडलर मिल्क (Stage 3)",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. 6 माह पर आहार परिवर्तन का फिजियोलॉजिकल विज्ञान</h3>
                    <p><strong>फॉलो-अप फॉर्मूला (Stage 2: 6 से 12 माह)</strong> और <strong>टॉडलर मिल्क (Stage 3: 1 से 3 वर्ष)</strong> का निर्माण उन शिशुओं के लिए किया जाता है जो मां के दूध के साथ-साथ ऊपरी अर्ध-ठोस आहार (वीजिंग/पूरक पोषण) लेना शुरू करते हैं।</p>

                    <p class="mt-2"><strong>180 दिनों पर शरीर में होने वाले शारीरिक बदलाव:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>लिवर में प्राकृतिक आयरन डिप्लीशन (आयरन की समाप्ति):</strong> गर्भावस्था के तीसरे ट्राइमेस्टर में गर्भस्थ शिशु अपनी मां से लगभग 250–300 mg आयरन लिवर में <em>फेरिटिन</em> के रूप में जमा करता है। जन्म के <strong>लगभग 180 दिनों (6 माह) में यह संचित आयरन पूरी तरह समाप्त हो जाता है</strong>। दूसरी ओर, मां के दूध में आयरन की मात्रा घटकर केवल 0.2–0.3 mg/L रह जाती है। इस समय शिशु का वजन तेजी से बढ़ता है और खून की मात्रा दोगुनी होती है। यदि उसे अतिरिक्त आयरन युक्त फॉलो-अप फॉर्मूला न दिया जाए, तो शिशु को <strong>आयरन डेफिशिएंसी एनीमिया (IDA)</strong> हो जाता है, जिससे मस्तिष्क और बौद्धिक विकास (Cognitive Development) हमेशा के लिए धीमा हो सकता है।</li>
                        <li><strong>ऊर्जा की बढ़ी हुई मांग:</strong> 6 माह के बाद शिशु घुटनों के बल चलना, बैठना और खड़ा होना शुरू करता है, जिससे उसकी कैलोरी की खपत बहुत बढ़ जाती है।</li>
                        <li><strong>पाचन तंत्र का विकास:</strong> 6 माह तक शिशु के आमाशय में एसिड और पेप्सिन एंजाइम का स्राव तीन गुना बढ़ जाता है, और किडनी की कार्यक्षमता वयस्क के 70% तक पहुंच जाती है। इसलिए वह अधिक गाढ़ा प्रोटीन और दूध आसानी से पचा सकता है।</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. आयरन बायोकेमिस्ट्री एवं फेंटन रिएक्शन का संकट (Fenton Reaction)</h3>
                    <p>दूध के पाउडर में आयरन मिलाना फूड साइंस की सबसे कठिन चुनौतियों में से एक है क्योंकि आयरन फैट के साथ मिलकर तुरंत बदबू पैदा कर देता है।</p>

                    <div class="p-3 bg-red-50 border border-red-200 rounded-lg mt-3">
                        <p class="text-xs text-red-900 font-semibold">दूध के पाउडर में होने वाली फेंटन रासायनिक क्रिया:</p>
                        <p class="font-mono text-xs text-red-800 mt-1">Fe²⁺ (फेरस आयरन) + H₂O₂ (या लिपिड पेरोक्साइड) ───> Fe³⁺ (फेरिक) + OH• (हाइड्रॉक्सिल फ्री रेडिकल) + OH⁻</p>
                        <p class="text-xs text-red-700 mt-1">हाइड्रॉक्सिल रेडिकल (OH•) प्रकृति का सबसे खतरनाक फ्री रेडिकल है; यह दूध के अनसैचुरेटेड फैट (DHA, ARA) पर हमला करके उसे सड़ा देता है।</p>
                    </div>

                    <p class="mt-3"><strong>आयरन ऑक्सीडेशन का संकट एवं तकनीकी समाधान:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>साधारण फेरस सल्फेट की समस्या:</strong> यदि साधारण फेरस सल्फेट ($FeSO_4$) मिलाया जाए, तो मुक्त $Fe^{2+}$ आयन पाउडर में मौजूद DHA, ARA और तेलों के साथ क्रिया करके <strong>फेंटन रिएक्शन</strong> शुरू कर देते हैं। इससे <em>हेक्सानेल और प्रोपेनेल</em> जैसी गैसें बनती हैं, जिससे डिब्बा खोलने पर जंग, सड़े पेंट और गत्ते जैसी भयानक दुर्गंध (Rancidity) आती है और विटामिन A व E नष्ट हो जाते हैं।</li>
                        <li><strong>माइक्रोएनकैप्सुलेटेड आयरन (Microencapsulated Iron) तकनीक:</strong> आधुनिक स्टेज 2 फॉर्मूला में <strong>फेरिक पाइरोफॉस्फेट या फेरस फ्यूमरेट को सूक्ष्म कणों में तोड़कर उसके ऊपर हाइड्रोजनेटेड वनस्पति लिपिड या माल्टोडेक्सट्रिन की सूक्ष्म कोटिंग</strong> चढ़ाई जाती है। यह कोटिंग आयरन को दूध के फैट से 24 महीने तक अलग रखती है। जब शिशु दूध पीता है, तो पेट का एसिड (pH < 3) इस कोटिंग को पिघला देता है और आयरन छोटी आंत में जाकर बिना किसी बदबू के अवशोषित हो जाता है।</li>
                        <li><strong>विटामिन C और आयरन का मोलर अनुपात:</strong> पौधों या पाउडर का आयरन $Fe^{3+}$ (फेरिक) रूप में होता है जिसे आंतें सीधे नहीं सोख सकतीं। फॉर्मूला में <strong>विटामिन C और आयरन का अनुपात 2:1 से 4:1 (कम से कम 8–10 mg विटामिन C प्रति 1 mg आयरन)</strong> रखा जाता है। विटामिन C आयरन को तुरंत घुलनशील $Fe^{2+}$ में बदल देता है, जिससे आंतों में इसका 100% अवशोषण होता है।</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. व्हे : कैसिइन अनुपात का बदलाव (60:40 $ightarrow$ 50:50 $ightarrow$ 20:80)</h3>
                    <p>शिशु की उम्र बढ़ने के साथ प्रोटीन संरचना को धीरे-धीरे वयस्क दूध की ओर बदला जाता है:</p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>स्टेज 2 (6–12 माह):</strong> व्हे:कैसिइन अनुपात को <strong>50:50</strong> किया जाता है और प्रोटीन की मात्रा बढ़ाकर <strong>1.6–2.0 g/100 kcal</strong> की जाती है। यह पेट में मध्यम थक्का बनाता है जो 2.5–3 घंटे में पचता है, जिससे शिशु को लंबे समय तक तृप्ति (satiety) मिलती है।</li>
                        <li><strong>स्टेज 3 / टॉडलर मिल्क (1–3 वर्ष):</strong> अनुपात को गाय के प्राकृतिक अनुपात <strong>20:80</strong> पर लाया जाता है। यह बच्चे के पेट के एंजाइम्स को पारिवारिक भोजन और सामान्य गाय/भैंस के दूध के लिए पूरी तरह तैयार कर देता है।</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. कार्बोहाइड्रेट इंजीनियरिंग: माल्टोडेक्सट्रिन (DE 10–15) एवं ऑस्मोलैरिटी</h3>
                    <p>स्टेज 2 और 3 में लैक्टोज के एक हिस्से को <strong>माल्टोडेक्सट्रिन (Dextrose Equivalent 10–15)</strong> से बदला जाता है।</p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>ऑस्मोटिक प्रेशर को नियंत्रित करना:</strong> वैन 'ट हॉफ के भौतिक नियम के अनुसार, पानी में जितने ज्यादा स्वतंत्र अणु होंगे, उतना ज्यादा ऑस्मोटिक दबाव पड़ेगा। माल्टोडेक्सट्रिन 6 से 12 ग्लूकोज अणुओं की लंबी श्रृंखला होती है। यह लैक्टोज की तुलना में <strong>आंतों पर पांच गुना कम ऑस्मोटिक दबाव</strong> डालता है।</li>
                        <li><strong>ऑस्मोटिक डायरिया की रोकथाम:</strong> माल्टोडेक्सट्रिन मिलाने से फॉर्मूला की ऑस्मोलैरिटी घटकर <strong>260–280 mOsm/kg</strong> रह जाती है, जिससे सक्रिय शिशुओं को दस्त (Osmotic Diarrhea) नहीं होते और उन्हें लंबे समय तक स्थिर ऊर्जा मिलती रहती है।</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">5. थर्मल डैमेज एवं मेलार्ड रिएक्शन (फ्यूरोसिन एवं HMF सीमाएं)</h3>
                    <p>निर्माण के दौरान ज्यादा गर्मी देने पर दूध की शुगर और प्रोटीन आपस में चिपक जाते हैं, जिसे <strong>मेलार्ड रिएक्शन (Maillard Reaction)</strong> कहते हैं:</p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>आवश्यक अमीनो एसिड (लाइसिन) का विनाश:</strong> दूध का लाइसिन शुगर के साथ जुड़कर <em>Amadori Product</em> बना लेता है, जिसे शिशु की आंतें नहीं पचा सकतीं। अत्यधिक गर्मी से <strong>15–25% लाइसिन हमेशा के लिए नष्ट हो जाता है</strong>।</li>
                        <li><strong>टॉक्सिक AGEs का निर्माण:</strong> इससे <em>CML (Carboxymethyl-lysine)</em> जैसे विषाक्त तत्व बनते हैं जो शिशु की रक्त वाहिकाओं और किडनी पर सूजन पैदा करते हैं।</li>
                        <li><strong>गुणवत्ता परीक्षण मानक:</strong> फॉर्मूला पाउडर में <strong>Furosine < 300 mg / 100g प्रोटीन</strong> और <strong>HMF < 15 $\mu$mol / 100g</strong> होना चाहिए। इससे अधिक मान यह दर्शाता है कि ड्रायर में तापमान बहुत अधिक था और दूध जल चुका है।</li>
                    </ul>


    <div class="my-6 p-3 sm:p-5 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 rounded-2xl border-2 border-indigo-200/80 shadow-sm">
        <div class="flex items-center justify-between gap-2 flex-wrap pb-3 mb-4 border-b border-indigo-100">
            <div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm">
                        ⚡
                    </span>
                    <h4 class="!m-0 !p-0 !bg-none !border-none text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">
                        स्टेज 2 फॉलो-अप (6–12 माह) एवं स्टेज 3 टॉडलर फॉर्मूला — हाइब्रिड फ्लोचार्ट
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">वेट-मिक्स स्प्रे ड्राइंग + क्लीनरूम ड्राई-ब्लेंडिंग सतत प्रक्रिया फ्लोचार्ट (कंट्रोल पॉइंट्स सहित)</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                7-चरणीय हाइब्रिड CCP फ्लोचार्ट
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
                    बेस वेट-मिक्स रीकॉम्बिनेशन एवं प्रोटीन बदलाव
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">स्टेज 2 वेट मिक्स</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">स्किम्ड दूध में D70 डीमिनरलाइज्ड व्हे मिलाकर 50:50 व्हे:कैसिइन अनुपात तैयार करना। लैक्टोज के साथ माल्टोडेक्सट्रिन (DE 10–15) मिलाकर ऑस्मोलैरिटी को संतुलित रखना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">व्हे : कैसिइन</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">50 : 50</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">कार्बोहाइड्रेट</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">लैक्टोज + माल्टोडेक्सट्रिन</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">DE सीमा</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">DE 10 – 15</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">घोल तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60°C</strong></div></div>
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
                    इन-लाइन वनस्पति तेल ब्लेंडिंग एवं होमोजिनाइजेशन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">इमल्शन</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">सनफ्लावर, सोयाबीन और नारियल तेल को विटामिन्स सहित मिलाना। 180 + 40 bar पर टू-स्टेज होमोजिनाइजेशन द्वारा फैट ड्रॉपलेट्स को < 1.0 µm में तोड़ना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">होमोजिनाइजर स्टेज 1</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">180 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">स्टेज 2</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">40 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">फैट प्रतिशत</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">22–24% शुष्क भार</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">इमल्शन स्थिरता</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 99%</strong></div></div>
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
                    लो-हीट थर्मल पाश्चुरीकरण (लाइसिन सुरक्षा)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: थर्मल सुरक्षा</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">95°C पर 20 सेकंड पाश्चुरीकरण। बैक्टीरिया का पूर्ण खात्मा (>8D kill) करते हुए मेलार्ड रिएक्शन को रोकना ताकि लाइसिन अमीनो एसिड न जले (Furosine < 300 mg, HMF < 15 µmol)।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">पाश्चुराइजर तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">95.0°C ± 0.5°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">होल्डिंग समय</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">20 सेकंड</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">लाइसिन सुरक्षा</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 92% सुरक्षित</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">HMF सीमा</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 15 µmol/100g</strong></div></div>
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
                    मल्टी-इफेक्ट इवैपोरेशन एवं स्प्रे ड्राइंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">बेस पाउडर</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">वैक्यूम इवैपोरेटर में 50% TS तक सांद्रण। टॉल-फॉर्म स्प्रे ड्रायर और इंटरनल फ्लुइड बेड द्वारा सुखाकर 2.8% नमी वाला बेस पाउडर प्राप्त करना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">इवैपोरेटर TS</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">48–50%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">इनलेट तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">190°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">एग्जॉस्ट तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">84°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">बेस पाउडर नमी</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">2.8% ± 0.2%</strong></div></div>
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
                    क्लीनरूम ड्राई-ब्लेंडिंग (माइक्रोएनकैप्सुलेटेड पोषक तत्व)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: ड्राई ब्लेंड</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">ISO Class 7 क्लीनरूम में: बेस पाउडर में माइक्रोएनकैप्सुलेटेड आयरन (लिपिड शेल कोटेड), विटामिन C, Bifidobacterium lactis BB-12 प्रोबायोटिक्स और GOS/FOS प्रीबायोटिक्स को मिक्सर में मिलाना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">आयरन सिस्टम</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">लिपिड-कोटेड पाइरोफॉस्फेट</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">विटामिन C : Fe</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">3 : 1 मोलर अनुपात</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">प्रोबायोटिक्स</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 10⁷ CFU/g BB-12</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">मिश्रण एकरूपता</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">CV < 3.0%</strong></div></div>
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
                    इन-लाइन सिफ्टिंग, रोटरी मैग्नेट एवं मेटल डिटेक्शन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: मेटल डिटेक्शन</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">पाउडर को 1.0 mm छलनी, 12,000 गॉस मैग्नेट और हाई-फ्रीक्वेंसी मेटल डिटेक्टर से गुजारना (≥ 0.8 mm Fe, ≥ 1.0 mm Non-Fe, ≥ 1.2 mm SS 316 का स्वचालित रिजेक्शन)।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">छलनी आकार</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">1.0 mm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">चुंबकीय क्षमता</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">12,000 गॉस</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">आयरन संवेदनशीलता</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 0.8 mm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">रिजेक्शन गति</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 50 ms</strong></div></div>
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
                    मॉडिफाइड एटमॉस्फियर वैक्यूम कैनिंग (98% N₂)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: नाइट्रोजन पैकिंग</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">डिब्बे को -0.95 bar वैक्यूम करके 98% N₂ + 2% CO₂ भरना। अवशिष्ट ऑक्सीजन < 1.0% सुनिश्चित करना ताकि 24 महीने तक आयरन से फैट का ऑक्सीडेशन न हो।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">अवशिष्ट O₂</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.0% (लक्ष्य <0.5%)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">कैन सीम ओवरलैप</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 55%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">शेल्फ लाइफ</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">24 माह</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">गैस संरचना</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">98% N₂ + 2% CO₂</strong></div></div>
    </div>
    
        </div>
    </div>
    `
            },
            "cereal-weaning": {
                title: "C. अनाज आधारित शिशु आहार एवं पूरक पोषण (Cerelac Type)",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. अनाज का चयन, शुद्धिकरण एवं भारी धातुओं (आर्सेनिक) का नियंत्रण</h3>
                    <p>अनाज आधारित शिशु आहार (जिन्हें सामान्यतः <strong>वीनिंग फूड्स / Cerelac टाइप</strong> कहा जाता है) 6 माह से बड़े शिशुओं के लिए दूध से ठोस पारिवारिक भोजन की ओर बढ़ने का पहला पुल होते हैं।</p>

                    <p class="mt-2"><strong>कच्चे माल का चयन एवं वैज्ञानिक मापदंड:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>पॉलिश किया चावल (Rice):</strong> चावल में ग्लूटेन नहीं होता, इसलिए यह एलर्जी-मुक्त और अत्यंत सुपाच्य होता है। परंतु चावल की जड़ें मिट्टी से आर्सेनिक को सोखती हैं। FSSAI और अंतर्राष्ट्रीय नियमों के अनुसार शिशु चावल में <strong>अकार्बनिक आर्सेनिक (Inorganic Arsenic) की अधिकतम सीमा $< 0.1	ext{ mg/kg}$</strong> निर्धारित है (वयस्कों से आधी)। प्रत्येक बैच का ICP-MS द्वारा परीक्षण अनिवार्य है।</li>
                        <li><strong>ड्यूरम गेहूं (Wheat Semolina):</strong> 7-8 माह पर दिया जाता है ताकि गेहूं के <em>ग्लूटेन</em> प्रोटीन से शिशु के इम्यून सिस्टम को परिचित कराया जा सके और सीलिएक रोग से बचाव हो सके।</li>
                        <li><strong>रागी (Finger Millet - नाचनी):</strong> भारतीय पारंपरिक शिशु आहार का अमृत, जिसमें चावल और गेहूं से <strong>दस गुना अधिक प्राकृतिक कैल्शियम (344 mg / 100g)</strong> होता है। रागी के छिलके में टैनिन और पॉलीफेनोल्स होते हैं जो आयरन और जिंक के अवशोषण को रोकते हैं। इसलिए इसे डी-हल (छिलका उतारना) और हाइड्रोथर्मल ट्रीटमेंट देना अनिवार्य होता है।</li>
                        <li><strong>धुली मूंग दाल:</strong> दालों में <strong>लाइसिन</strong> प्रचुर मात्रा में होता है (जो अनाजों में कम होता है)। चावल/गेहूं के साथ मूंग दाल मिलाने से प्रोटीन स्कोर (PDCAAS) 1.0 (सर्वश्रेष्ठ) हो जाता है।</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. अनाज के स्टार्च का एंजाइमेटिक रूपांतरण (Liquefaction)</h3>
                    <p>शिशु आहार निर्माण की सबसे बड़ी वैज्ञानिक समस्या <strong>विस्कोसिटी और कैलोरी घनत्व का विरोधाभास</strong> है।</p>

                    <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-lg mt-3">
                        <p class="text-xs text-indigo-900 font-semibold">शिशु पोषण में विस्कोसिटी का संकट:</p>
                        <p class="text-xs text-indigo-800 mt-1">यदि साधारण अनाज के आटे को पानी में पकाया जाए, तो 65–75°C पर उसका स्टार्च फूलकर गाढ़ा चिपकने वाला लेई (Gel) बना लेता है, जिसकी विस्कोसिटी <strong>10% आटे में ही 8,000 cP से अधिक</strong> हो जाती है। शिशु का आमाशय केवल 200 mL का होता है; इतना गाढ़ा भोजन वह निगल नहीं सकता और पतला करने पर उसे आवश्यक कैलोरी नहीं मिलती, जिससे कुपोषण का खतरा पैदा हो जाता है।</p>
                    </div>

                    <p class="mt-3"><strong>अल्फा-एमाइलेज एंजाइम द्वारा समाधान:</strong></p>
                    <ol class="list-decimal list-inside space-y-2 ml-4 mt-2">
                        <li>आटे और पानी के घोल (30% सॉलिड्स) को $70	ext{–}75^\circ	ext{C}$ पर रिएक्टर में भेजा जाता है।</li>
                        <li>इसमें <em>Bacillus licheniformis</em> से प्राप्त थर्मोस्टेबल <strong>$lpha$-एमाइलेज एंजाइम</strong> मिलाया जाता है।</li>
                        <li>यह एंजाइम स्टार्च के जटिल अणुओं को 15 मिनट के भीतर छोटे-छोटे डेक्सट्रिन अणुओं में काट देता है।</li>
                        <li><strong>विस्कोसिटी का पतन:</strong> घोल की विस्कोसिटी 8,000 cP से अचानक गिरकर <strong>25% सॉलिड्स पर भी मात्र $< 200	ext{ cP}$</strong> रह जाती है। अब शिशु बिना गले में फंसे उच्च कैलोरी वाला गाढ़ा आहार आसानी से चम्मच से खा सकता है।</li>
                        <li>घोल को $125^\circ	ext{C}$ पर 60 सेकंड गर्म करके एंजाइम को हमेशा के लिए निष्क्रिय कर दिया जाता है।</li>
                    </ol>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. ट्विन-ड्रम रोलर ड्रायर टेक्नोलॉजी (Roller Drying)</h3>

    <div class="my-6 p-3 sm:p-5 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 rounded-2xl border-2 border-indigo-200/80 shadow-sm">
        <div class="flex items-center justify-between gap-2 flex-wrap pb-3 mb-4 border-b border-indigo-100">
            <div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm">
                        ⚡
                    </span>
                    <h4 class="!m-0 !p-0 !bg-none !border-none text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">
                        अनाज आधारित शिशु आहार (Cerelac Type) — लिक्विफैक्शन एवं रोलर ड्रायर फ्लोचार्ट
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">सतत 8-चरणीय स्टार्च एंजाइमेटिक हाइड्रोलिसिस, ट्विन-ड्रम रोलर ड्राइंग एवं फोर्टिफिकेशन फ्लोचार्ट (CCPs सहित)</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                8-चरणीय रोलर ड्राइंग CCP फ्लोचार्ट
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
                    अनाज रिसेप्शन, डी-स्टोनिंग एवं ICP-MS भारी धातु परीक्षण
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: अनाज सुरक्षा</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">चावल, गेहूं और रागी का रिसेप्शन। मल्टी-डेक डी-स्टोनर द्वारा कंकड़-पत्थर अलग करना और 10,000 गॉस मैग्नेट। ICP-MS परीक्षण: अकार्बनिक आर्सेनिक strictly < 0.1 mg/kg, लेड < 0.02 mg/kg।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">अकार्बनिक आर्सेनिक</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.1 mg/kg</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">लेड सीमा</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.02 mg/kg</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">डी-स्टोनिंग</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ग्रेविटी सेपरेशन</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">मैग्नेटिक ट्रैप</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">10,000 गॉस</strong></div></div>
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
                    प्रिसिजन वेट मिलिंग एवं स्लरी तैयारी
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">घोल तैयारी</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">अनाज और मूंग दाल को शुद्ध RO पानी में वेट-मिलिंग करके 30–35% ड्राई मैटर का एकसमान घोल तैयार करना (ड्रॉपलेट साइज d50 < 40 µm)।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">घोल सॉलिड्स</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">30% – 35% TS</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">पानी शुद्धता</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">RO प्यूरीफाइड</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">कण आकार d50</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 40 µm</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">घोल तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">50°C – 55°C</strong></div></div>
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
                    हाई-टेम्परेचर स्टार्च जिलेटिनाइजेशन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">स्टार्च फूलना</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">घोल को 70°C से 75°C पर गर्म करना। स्टार्च के दाने पानी सोखकर पूरी तरह फूल जाते हैं। घोल अत्यंत गाढ़ा हो जाता है और विस्कोसिटी > 8,000 cP पहुंच जाती है।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">70°C – 75°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">अधिकतम विस्कोसिटी</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 8,000 cP</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">मिक्सर गति</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">45 RPM</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">होल्डिंग समय</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">10 मिनट</strong></div></div>
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
                    नियंत्रित एंजाइमेटिक लिक्विफैक्शन (अल्फा-एमाइलेज)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: विस्कोसिटी पतन</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">घोल में थर्मोस्टेबल अल्फा-एमाइलेज एंजाइम (0.08% w/w) मिलाना। एंजाइम स्टार्च के आंतरिक बॉन्ड्स को काटकर डेक्सट्रिन बनाता है। 28% सॉलिड्स पर भी विस्कोसिटी 8,000 cP से गिरकर < 200 cP रह जाती है।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">एंजाइम डोजिंग</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.08% w/w</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">प्रतिक्रिया तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">72°C ± 1°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">प्रतिक्रिया समय</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">15 – 20 मिनट</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">अंतिम विस्कोसिटी</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 200 cP</strong></div></div>
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
                    डायरेक्ट स्टीम इंजेक्शन एंजाइम निष्क्रियन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: एंजाइम खात्मा</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">घोल को DSI हीटर में 125°C पर 60 सेकंड गर्म करना। अल्फा-एमाइलेज हमेशा के लिए नष्ट हो जाता है जिससे अधिक शुगर नहीं बनती, साथ ही सभी बैक्टीरिया नष्ट हो जाते हैं।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">DSI तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">125.0°C ± 1.0°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">होल्डिंग समय</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60 सेकंड</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">अवशिष्ट एंजाइम</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">शून्य (निष्क्रिय)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">स्पोर कमी</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">> 6D कमी</strong></div></div>
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
                    एटमॉस्फेरिक ट्विन-ड्रम रोलर ड्राइंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: रोलर ड्राइंग</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">घोल 4.5 bar भाप से गर्म विपरीत दिशा में घूमते दो रोलर्स (सतह तापमान 145°C) पर गिरता है। मात्र 2.8 सेकंड में पानी उड़ जाता है और नमी < 3.0% रह जाती है। लेक्टिन व ट्रिप्सिन इनहिबिटर नष्ट हो जाते हैं।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">भाप दबाव</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">4.5 – 5.0 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">सतह तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">142°C – 148°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">संपर्क समय</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">2.5 – 3.5 सेकंड</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">अंतिम नमी</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 3.0%</strong></div></div>
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
                    डॉक्टर ब्लेड स्क्रैपिंग, ऑसिलेटिंग मिलिंग एवं कूलिंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">फ्लेक्स निर्माण</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">स्थिर डॉक्टर ब्लेड सूखे हुए पतले पापड़ जैसी परत को खुरच कर अलग करता है। ऑसिलेटिंग चलनी (0.8 mm) द्वारा इसे तुरंत घुलने वाले दानेदार फ्लेक्स (Flakes) में बदला जाता है।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ब्लेड कोण</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">32° बेवल</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">छलनी जाली</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.8 mm ऑसिलेटिंग</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">फ्लेक घनत्व</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">0.35 – 0.40 g/mL</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">घुलने का समय</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 15 सेकंड</strong></div></div>
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
                    ड्राई विटामिन फोर्टिफिकेशन एवं नाइट्रोजन पैकिंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: पैकेजिंग सुरक्षा</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">ISO Class 7 पैकिंग रूम में: फ्लेक्स में विटामिन्स (A, D3, C), मिनरल्स (आयरन, कैल्शियम) मिलाकर नाइट्रोजन-फ्लश पाउच या कैन में सील करना (O₂ < 1.5%)।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">क्लीनरूम क्लास</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ISO Class 7</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">आयरन फोर्टिफिकेशन</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">≥ 5.0 mg / 100g</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">पाउच अवशिष्ट O₂</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.5%</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">अंतिम नमी</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 4.0% FSSAI</strong></div></div>
    </div>
    
        </div>
    </div>
    
                    <p>अनाज के घोल को सुखाने के लिए स्प्रे ड्रायर के बजाय <strong>ट्विन-ड्रम रोलर ड्रायर</strong> का उपयोग किया जाता है।</p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>ऑपरेटिंग सिद्धांत:</strong> अंदर से भाप द्वारा गर्म किए गए दो क्रोम-प्लेटेड रोलर्स (सतह तापमान <strong>142°C – 148°C</strong>) विपरीत दिशा में घूमते हैं।</li>
                        <li>घोल दोनों रोलर्स के बीच गिरता है और रोलर की सतह पर एक कागज जैसी पतली फिल्म बन जाती है।</li>
                        <li><strong>अति-तीव्र निर्जलीकरण:</strong> मात्र <strong>2.5 से 3.5 सेकंड</strong> के भीतर सारा पानी भाप बनकर उड़ जाता है और नमी 3% से कम रह जाती है।</li>
                        <li>एक स्थिर डॉक्टर ब्लेड (Scraper) सूखे हुए पतले पापड़ जैसी परत को खुरच कर अलग कर देता है। इसके बाद इसे छलनी से छानकर तुरंत घुलने वाले सूक्ष्म फ्लेक्स (Instant Soluble Flakes) बना लिए जाते हैं।</li>
                        <li>यह तीव्र गर्मी अनाज के एंटी-न्यूट्रिएंट्स (ट्रिप्सिन इनहिबिटर्स, लेक्टिन्स) को 95% तक नष्ट कर देती है, जिससे प्रोटीन पूरी तरह सुपाच्य हो जाता है।</li>
                    </ul>
`
            },
            "specialized-formula": {
                title: "D. विशिष्ट चिकित्सीय शिशु फॉर्मूला (Lactose-Free, HA, Preterm)",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. लैक्टोज-फ्री फॉर्मूला (Lactose-Free): ऑस्मोटिक डायरिया का पैथोफिजियोलॉजी</h3>
                    <p><strong>लैक्टोज-फ्री फॉर्मूला (LF)</strong> गंभीर डायरिया (जैसे रोटावायरस इन्फेक्शन) के बाद होने वाली <strong>सेकेंडरी लैक्टेज डेफिशिएंसी</strong> के उपचार के लिए दिया जाता है।</p>

                    <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-lg mt-3">
                        <p class="text-xs text-indigo-900 font-semibold">रोटावायरस डायरिया में आंतों का पैथोफिजियोलॉजी:</p>
                        <p class="text-xs text-indigo-800 mt-1">रोटावायरस आंतों की कोशिकाओं (Villi) की ऊपरी सतह को पूरी तरह छील देता है। लैक्टोज को पचाने वाला <strong>लैक्टेज एंजाइम</strong> आंतों के इन्हीं सबसे ऊपरी सिरों पर होता है जो डायरिया में नष्ट हो जाता है। यदि ऐसे शिशु को सामान्य दूध दिया जाए, तो बिना पचा लैक्टोज बड़ी आंत में जाकर तीव्र ऑस्मोटिक दबाव बनाता है। यह शरीर का सारा पानी खींचकर <strong>पानी जैसा खट्टा, विस्फोटक दस्त (Acidic Watery Diarrhea, pH < 5.0)</strong> पैदा करता है, जिससे शिशु के गुदा द्वार की त्वचा छिल जाती है और वह गंभीर निर्जलीकरण (Dehydration) का शिकार हो जाता है।</p>
                    </div>

                    <p class="mt-3"><strong>वैज्ञानिक फॉर्मूलेशन समाधान:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>100% लैक्टोज रिप्लेसमेंट:</strong> फॉर्मूला से लैक्टोज को शून्य (< 0.1%) कर दिया जाता है और उसकी जगह <strong>माल्टोडेक्सट्रिन (DE 10–15)</strong> मिलाया जाता है। माल्टोडेक्सट्रिन को पचाने वाला एंजाइम (Glucoamylase) आंतों की गहराई (Crypts) में होता है जो रोटावायरस में सुरक्षित रहता है। इससे शिशु को तुरंत ऊर्जा मिलती है और दस्त रुक जाते हैं।</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. हाइपोएलर्जेनिक (HA) एवं एक्सटेंसिवली हाइड्रोलाइज्ड फॉर्मूला (eHF)</h3>
                    <p>गाय के दूध की प्रोटीन से होने वाली एलर्जी (Cow’s Milk Protein Allergy - CMPA) 2 से 3% शिशुओं में पाई जाती है। इसमें शिशु का इम्यून सिस्टम दूध की प्रोटीन को खतरनाक बैक्टीरिया समझकर उस पर हमला कर देता है।</p>

                    <p class="mt-2"><strong>एलर्जी का मुख्य कारक — $eta$-लैक्टोग्लोबुलिन:</strong></p>
                    <p>गाय के व्हे में मौजूद $eta$-लैक्टोग्लोबुलिन प्रोटीन मां के दूध में बिल्कुल नहीं होती। यह प्रोटीन शिशु के मास्ट सेल्स (Mast Cells) पर मौजूद IgE एंटीबॉडीज से जुड़कर एलर्जी शुरू करती है।</p>

                    <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-3">
                        <p class="text-xs text-amber-900 font-semibold">मास्ट सेल डिग्रेन्युलेशन का आणविक विज्ञान:</p>
                        <p class="text-xs text-amber-800 mt-1">एलर्जी रिएक्शन (एनाफिलेक्सिस, चेहरे पर सूजन, पित्ती, उल्टी) तब शुरू होती है जब प्रोटीन का अणु इतना बड़ा (कम से कम <strong>1,500 Da या 15 अमीनो एसिड लंबा</strong>) हो कि वह मास्ट सेल की सतह पर मौजूद दो अलग-अलग IgE एंटीबॉडीज को आपस में जोड़ (Cross-link) सके। यह जोड़ बनते ही मास्ट सेल फट जाती है और <em>हिस्टामाइन</em> रसायन बाहर निकलकर सांस फूलना और सूजन पैदा करता है।</p>
                    </div>

                    <p class="mt-3"><strong>बायोरिएक्टर हाइड्रोलिसिस एवं अल्ट्राफिल्ट्रेशन तकनीक:</strong></p>
                    <ol class="list-decimal list-inside space-y-2 ml-4 mt-2">
                        <li><strong>थर्मल अनफोल्डिंग:</strong> व्हे प्रोटीन को $85	ext{–}90^\circ	ext{C}$ पर गर्म करके उसके कुंडलित आकार को खोला जाता है।</li>
                        <li><strong>एंजाइम डाइजेशन:</strong> फार्मास्युटिकल ट्रिप्सिन और काइमोट्रिप्सिन एंजाइम द्वारा प्रोटीन श्रृंखला को छोटे-छोटे पेप्टाइड्स में काटा जाता है।</li>
                        <li><strong>अल्ट्राफिल्ट्रेशन (UF 5–10 kDa):</strong> घोल को 5–10 kDa के नैनो-फिल्टर से गुजारा जाता है। बड़े अनपचे अणु रोक लिए जाते हैं।</li>
                        <li><strong>अंतिम eHF फॉर्मूला:</strong> 95% से अधिक पेप्टाइड्स <strong>1,500 डाल्टन से छोटे (3 से 8 अमीनो एसिड लंबे)</strong> होते हैं। चूंकि ये पेप्टाइड्स दो एंटीबॉडीज को आपस में जोड़ नहीं सकते, इसलिए <strong>मास्ट सेल हिस्टामाइन नहीं छोड़ती और 99.9% मामलों में एलर्जी नहीं होती</strong>।</li>
                    </ol>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. प्रीटर्म एवं कम वजन वाले शिशुओं के लिए MCT फैट का विज्ञान</h3>
                    <p>समय से पूर्व जन्मे (Preterm < 37 सप्ताह) और कम वजन (LBW < 2,500 ग्राम) वाले शिशुओं में फैट पचाने की क्षमता अविकसित होती है:</p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>कम बाइल एसिड्स:</strong> प्रीटर्म शिशु में लिवर पर्याप्त पित्त (Bile) नहीं बना पाता, जिससे वह साधारण वनस्पति तेलों के लंबे फैट्स (LCT) का मिसेल नहीं बना पाता।</li>
                        <li><strong>MCT ऑयल्स ($C_8$ कैप्रिलिक एवं $C_{10}$ कैप्रिक) का वैज्ञानिक चमत्कार:</strong> प्रीटर्म फॉर्मूला में <strong>40 से 50% फैट MCT के रूप में</strong> दिया जाता है।
                            <ul class="list-disc list-inside ml-4 mt-1">
                                <li>MCT पानी में आसानी से घुल जाते हैं और इन्हें पचाने के लिए पित्त या पैंक्रियाटिक एंजाइम की आवश्यकता नहीं होती।</li>
                                <li>ये साधारण तेलों की तरह लसिका वाहिकाओं (Lymphatics) में घूमने के बजाय <strong>सीधे पोर्टल वेन द्वारा लिवर में प्रवेश करते हैं</strong>।</li>
                                <li>लिवर में ये बिना किसी कार्निटिन शटल के सीधे माइटोकॉन्ड्रिया में जाकर तुरंत ATP ऊर्जा और कीटोन बॉडीज बनाते हैं, जिससे कमजोर शिशु का वजन तेजी से बढ़ता है।</li>
                            </ul>
                        </li>
                    </ul>


    <div class="my-6 p-3 sm:p-5 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 rounded-2xl border-2 border-indigo-200/80 shadow-sm">
        <div class="flex items-center justify-between gap-2 flex-wrap pb-3 mb-4 border-b border-indigo-100">
            <div>
                <div class="flex items-center gap-2">
                    <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-bold shadow-sm">
                        ⚡
                    </span>
                    <h4 class="!m-0 !p-0 !bg-none !border-none text-sm sm:text-base font-extrabold text-slate-800 tracking-tight">
                        विशिष्ट चिकित्सीय फॉर्मूला (LF, eHF, Preterm) — बायोरिएक्टर फ्लोचार्ट
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">एंजाइमेटिक मेम्ब्रेन रिएक्टर, 5-10 kDa अल्ट्राफिल्ट्रेशन एवं MCT लिपिड ब्लेंडिंग फ्लोचार्ट</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                6-चरणीय चिकित्सीय CCP फ्लोचार्ट
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
                    प्रोटीन हाइड्रेशन एवं थर्मल अनफोल्डिंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">डिनेचुरेशन</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">व्हे प्रोटीन आइसोलेट या कैसिइन को 60°C पर RO पानी में घोलना। 85°C से 90°C पर 10 मिनट गर्म करके $\beta$-लैक्टोग्लोबुलिन के कुंडलित आकार को खोलना ताकि एंजाइम अंदर तक पहुंच सके।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">घोल तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">60°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">अनफोल्डिंग तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">85°C – 90°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">समय</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">10 मिनट</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">प्रोटीन सांद्रता</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">10% w/w</strong></div></div>
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
                    बायोरिएक्टर एंजाइमेटिक हाइड्रोलिसिस
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">एंजाइम कटिंग</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">घोल को एंजाइमेटिक बायोरिएक्टर में भेजना। फार्मास्युटिकल ट्रिप्सिन और काइमोट्रिप्सिन एंजाइम द्वारा प्रोटीन श्रृंखला को छोटे-छोटे पेप्टाइड्स में तोड़ना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">एंजाइम सिस्टम</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ट्रिप्सिन + काइमोट्रिप्सिन</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">रिएक्टर तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">50°C ± 1°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">pH नियंत्रण</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">pH 7.8 ± 0.1</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">हाइड्रोलिसिस स्तर</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">DH > 22%</strong></div></div>
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
                    क्रॉस-फ्लो अल्ट्राफिल्ट्रेशन फ्रैक्शनेशन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: एलर्जी कणों की छंटनी</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">घोल को 5 से 10 kDa के अल्ट्राफिल्टर से गुजारना। बड़े एलर्जी कण (> 1,500 Da) रोककर वापस रिएक्टर में भेजे जाते हैं। 1,500 डाल्टन से छोटे पेप्टाइड्स (< 1 ppm $\beta$-Lg) अलग कर लिए जाते हैं।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">फिल्टर जाली</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">5 – 10 kDa UF</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">पेप्टाइड आकार</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1,500 Da (>95%)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">अवशिष्ट $\beta$-Lg</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1 ppm (ELISA)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">एलर्जी सुरक्षा</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">99.9% एलर्जी-मुक्त</strong></div></div>
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
                    विशिष्ट कार्बोहाइड्रेट एवं MCT फैट ब्लेंडिंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">चिकित्सीय मैट्रिक्स</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">लैक्टोज-फ्री (LF) के लिए: 100% माल्टोडेक्सट्रिन मिलाना (शून्य लैक्टोज)। प्रीटर्म के लिए: 40–50% MCT ऑयल्स ($C_8$ एवं $C_{10}$) + DHA/ARA और टॉरिन मिलाना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">LF कार्बोहाइड्रेट</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% माल्टोडेक्सट्रिन</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">अवशिष्ट लैक्टोज</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 0.1% (शून्य)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">प्रीटर्म MCT</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">40% – 50% कुल फैट</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">अवशोषण मार्ग</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">सीधे पोर्टल वेन</strong></div></div>
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
                    टू-स्टेज होमोजिनाइजेशन एवं एसेप्टिक स्प्रे ड्राइंग
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">एसेप्टिक ड्राइंग</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">180 + 40 bar पर होमोजिनाइजेशन। H14 HEPA जीवाणुरहित हवा से युक्त एसेप्टिक स्प्रे ड्रायर (इनलेट 180°C, एग्जॉस्ट 80°C) द्वारा सुखाकर 2.6% नमी वाला पाउडर प्राप्त करना।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">होमोजिनाइजर दबाव</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">180 + 40 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">हवा शुद्धता</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">HEPA H14 स्टेराइल</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">इनलेट तापमान</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">180°C</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">पाउडर नमी</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">2.6% ± 0.2%</strong></div></div>
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
                    वैक्यूम नाइट्रोजन कैनिंग एवं सीम वेरिफिकेशन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: कैनिंग सील</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">ISO Class 7 क्लीनरूम में डिब्बे को -0.95 bar वैक्यूम करके 98% N₂ + 2% CO₂ भरना और डबल सीमिंग करना। हाई-स्पीड विजन कैमरा द्वारा कैन सीम ओवरलैप की 100% जांच।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">क्लीनरूम क्लास</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ISO Class 7</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">वैक्यूम सीम</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">-0.95 bar</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">नाइट्रोजन गैस</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">98% N₂ + 2% CO₂</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">अवशिष्ट ऑक्सीजन</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 1.0%</strong></div></div>
    </div>
    
        </div>
    </div>
    `
            },
            "cleanroom-standards": {
                title: "E. 3-ज़ोन क्लीनरूम, क्रोनोबैक्टर नियंत्रण एवं FSSAI मानक",
                content: `
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">1. 3-ज़ोन क्लीनरूम आर्किटेक्चरल इंजीनियरिंग</h3>
                    <p>शिशु आहार निर्माण संयंत्र सामान्य डेयरी प्लांट से पूरी तरह अलग होता है। इसे ISO 14644-1 और EHEDG मानकों के तहत तीन अलग-अलग हाइजीन ज़ोन में विभाजित किया जाता है:</p>

                    <div class="overflow-x-auto mt-3">
                        <table class="w-full text-left border-collapse text-xs sm:text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">क्लीनरूम ज़ोन</th>
                                    <th class="p-2 border">संचालित प्रक्रियाएं</th>
                                    <th class="p-2 border">वायु निस्पंदन एवं दबाव</th>
                                    <th class="p-2 border">कार्मिक प्रवेश नियम</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong>ब्लैक ज़ोन (निम्न स्वच्छता)</strong></td>
                                    <td class="p-2 border">दूध टैंकर अनलोडिंग, बॉयलर, यूटिलिटीज, गोदाम।</td>
                                    <td class="p-2 border">सामान्य वायु वेंटिलेशन; हल्का नकारात्मक दबाव (-5 Pa)।</td>
                                    <td class="p-2 border">सामान्य फैक्ट्री वर्दी व सुरक्षा जूते।</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>ग्रे ज़ोन (मध्यम स्वच्छता)</strong></td>
                                    <td class="p-2 border">पाश्चुरीकरण, इवैपोरेशन, होमोजिनाइजेशन (गीला क्षेत्र)।</td>
                                    <td class="p-2 border">G4 + F8 फिल्टर्स; सकारात्मक दबाव (+10 से +15 Pa)।</td>
                                    <td class="p-2 border">सफेद कोट, हेयर कैप, हैंड-वॉश व 70% सैनिटाइजर।</td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong>रेड ज़ोन (अति-उच्च स्वच्छता)</strong></td>
                                    <td class="p-2 border">स्प्रे ड्रायर चैंबर, फ्लुइड बेड, पाउडर कन्वेयिंग, कैन पैकिंग।</td>
                                    <td class="p-2 border"><strong>ISO Class 7 / Class D क्लीनरूम</strong>। <strong>H14 HEPA फिल्टर्स (99.995% शुद्धता)</strong>। धनात्मक वायु दबाव <strong>+30 Pa</strong>। नमी RH < 40%।</td>
                                    <td class="p-2 border">स्टेराइल बन्नी सूट, FFP3 मास्क, डबल ग्लव्स, एयर शावर (30s at 25 m/s)।</td>
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
                        क्लीनरूम ज़ोनेशन, स्वच्छता एवं क्रोनोबैक्टर नियंत्रण — फैसिलिटी फ्लोचार्ट
                    </h4>
                </div>
                <p class="text-[11px] sm:text-xs text-slate-500 mt-0.5">3-ज़ोन प्रेशर कैस्केड, कार्मिक परिशोधन एवं शून्य-सहिष्णुता माइक्रोबायोलॉजिकल रिलीज फ्लोचार्ट</p>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                6-चरणीय क्लीनरूम CCP फ्लोचार्ट
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
                    ब्लैक ज़ोन प्रवेश एवं प्राथमिक एयरलॉक (PAL-1)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200">PRP-1: परिधि नियंत्रण</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">फैक्ट्री में प्रवेश। कर्मचारी बाहर के कपड़े उतारकर फैक्ट्री वर्कवियर पहनते हैं। कच्चे दूध क्षेत्र से हवा बाहर न जा सके, इसके लिए ब्लैक ज़ोन में हल्का नकारात्मक दबाव (-5 Pa) रखा जाता है।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ज़ोन दबाव</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">-5 Pa (नकारात्मक)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">पहनावा</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">फैक्ट्री वर्कवियर</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">दरवाजा</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">मैग्नेटिक इंटरलॉक</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">बूट क्लीनर</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">स्वचालित बूट स्क्रबर</strong></div></div>
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
                    ग्रे ज़ोन प्रोसेसिंग एवं सैनिटाइजेशन स्टेशन
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">ग्रे ज़ोन</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">पाश्चुरीकरण एवं इवैपोरेशन का क्षेत्र। G4 एवं F8 फिल्टर्स द्वारा स्वच्छ हवा (+15 Pa धनात्मक दबाव)। आगे बढ़ने से पहले 30 सेकंड स्वचालित हैंड-वॉश और 70% IPA सैनिटाइजेशन अनिवार्य।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">हवा निस्पंदन</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">G4 + F8 फिल्टर्स</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">ज़ोन दबाव</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">+15 Pa (धनात्मक)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">सैनिटाइजर</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">70% आइसोप्रोपिल अल्कोहल</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">सेंसर</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">टचलेस ऑप्टिकल</strong></div></div>
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
                    रेड ज़ोन एयरलॉक 2 (डायनामिक एयर शावर)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">oPRP-1: स्टेराइल ड्रेसिंग</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">हाई-हाइजीन पाउडर क्षेत्र में प्रवेश: कर्मचारी स्टेराइल बन्नी सूट, FFP3 मास्क, डबल ग्लव्स और विशेष बूट पहनते हैं। 30 सेकंड के डायनामिक एयर शावर (25 m/s तेज HEPA हवा) से गुजरना अनिवार्य।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">एयर शावर गति</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">25 m/s तीव्र वेग</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">शावर अवधि</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">30 सेकंड</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">मास्क</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">FFP3 रेस्पिरेटर</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">सूट</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">स्टेराइल टायवेक बन्नी सूट</strong></div></div>
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
                    हाई-हाइजीन उत्पादन क्षेत्र (ISO Class 7 / Class D)
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-1: क्लीनरूम शुद्धता</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">स्प्रे ड्रायर डिस्चार्ज, फ्लुइड बेड और कैन फिलिंग का क्षेत्र। टर्मिनल H14 HEPA फिल्टर्स (99.995% शुद्धता)। बाहर की गंदी हवा को रोकने के लिए +30 Pa धनात्मक दबाव और आर्द्रता RH < 40%।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">क्लीनरूम क्लास</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">ISO Class 7 / Class D</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">एयर फिल्टर</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">टर्मिनल H14 HEPA</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">धनात्मक दबाव</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">+30 Pa प्रेशराइज्ड</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">आर्द्रता</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">< 40% RH (ड्यू पॉइंट <8°C)</strong></div></div>
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
                    सख्त 'ड्राई क्लीनिंग ओनली' सैनिटेशन नियम
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-2: शून्य पानी नियम</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">रेड ज़ोन में पानी, पाइप या गीला पोछा लगाना पूरी तरह प्रतिबंधित है। गिरा हुआ पाउडर केवल H14 HEPA वैक्यूम क्लीनर से साफ किया जाता है। सतहों को 70% IPA वाइप्स से पोछा जाता है जो 60s में सूख जाता है।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">पानी का प्रवेश</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">पूरी तरह प्रतिबंधित (शून्य)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">वैक्यूम प्रकार</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">सर्टिफाइड H14 HEPA</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">क्लीनिंग वाइप</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">70% IPA लिंट-फ्री वाइप</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">बायोफिल्म खतरा</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">100% सुरक्षित</strong></div></div>
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
                    पर्यावरणीय निगरानी एवं लॉट रिलीज माइक्रोबायोलॉजी
                </h5>
            </div>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-600 text-white shadow-sm">🔴 CCP-3: लॉट रिलीज</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed m-0">पाउडर परीक्षण: Cronobacter sakazakii (ISO 22964, n=30, c=0, 100 ग्राम में शून्य) और Salmonella (ISO 6579, n=30, c=0, 375 ग्राम में शून्य)। निगेटिव रिपोर्ट आने तक पूरा लॉट होल्ड पर रहता है।</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mt-2.5"><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">क्रोनोबैक्टर सीमा</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">n=30, c=0 (100g में शून्य)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">साल्मोनेला सीमा</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">n=30, c=0 (375g में शून्य)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">एंटरोबैक्टीरिया</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">n=10, c=0 (10g में शून्य)</strong></div><div class="bg-white/80 p-1.5 rounded border border-slate-200/60"><span class="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">लॉट सुरक्षा</span><strong class="text-slate-700 text-[10px] sm:text-[11px] block truncate">पॉजिटिव होल्ड रिलीज</strong></div></div>
    </div>
    
        </div>
    </div>
    
<h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">2. <em>Cronobacter sakazakii</em> का पैथोफिजियोलॉजी एवं आनुवंशिकी</h3>
                    <p><em>Cronobacter sakazakii</em> शिशु दुग्ध उद्योग का सबसे घातक बैक्टीरिया है। यह नवजात शिशुओं (विशेषकर 2 माह से छोटे) के लिए जानलेवा साबित होता है।</p>

                    <div class="p-3 bg-red-50 border border-red-200 rounded-lg mt-3">
                        <p class="text-xs text-red-900 font-semibold">नवजात शिशु में घातक पैथोफिजियोलॉजी:</p>
                        <p class="text-xs text-red-800 mt-1"><em>Cronobacter</em> में <strong>Outer Membrane Protein A (OmpA)</strong> होता है जो नवजात शिशु के मस्तिष्क की रक्त नलिकाओं की कोशिकाओं पर चिपक जाता है और <strong>ब्लड-ब्रेन बैरियर (Blood-Brain Barrier) को भेदकर सीधे दिमाग में घुस जाता है</strong>। इससे शिशु को <em>नेक्रोटाइजिंग एंटरोकोलाइटिस (आंतों का सड़ना), दिमाग में मवाद के फोड़े और मेनिनजाइटिस (मस्तिष्क ज्वर)</em> होता है, जिसमें <strong>मृत्यु दर 40% से 80%</strong> होती है!</p>
                    </div>

                    <p class="mt-3"><strong>सूखे पाउडर में जीवित रहने का आनुवंशिक रहस्य:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>ट्रेहालोस (Trehalose) जीन का सक्रिय होना:</strong> साधारण बैक्टीरिया सूखे पाउडर में मर जाते हैं, लेकिन <em>C. sakazakii</em> अपने <strong>otsA/otsB जीन</strong> को सक्रिय करके भारी मात्रा में <em>ट्रेहालोस शुगर</em> और प्रोलीन जमा कर लेता है। यह पानी के अणुओं की जगह लेकर बैक्टीरिया की कोशिका झिल्ली को मरने से बचा लेता है।</li>
                        <li><strong>2 वर्ष तक जीवित रहना:</strong> यह बैक्टीरिया एक सुरक्षात्मक बायोफिल्म कैप्सूल बना लेता है और सूखे दूध के पाउडर ($a_w pprox 0.25$) में <strong>730 दिनों (2 वर्ष से अधिक) तक जीवित रह सकता है</strong>!</li>
                        <li><strong>थर्मल इनएक्टिवेशन (गर्मी में तुरंत मृत्यु):</strong> 
                            <ul class="list-disc list-inside ml-4 mt-1">
                                <li>$60^\circ	ext{C}$ पर इसका D-value 2.5 मिनट है और $71.7^\circ	ext{C}$ पर मात्र 1.5 सेकंड।</li>
                                <li>दूध को जब पाश्चुराइज ($105^\circ	ext{C}$ पर 30s) किया जाता है, तो <strong>इसका 100% खात्मा हो जाता है</strong>। पाश्चुराइजर के बाद एक भी <em>Cronobacter</em> जीवित नहीं बचता।</li>
                                <li><strong>निष्कर्ष:</strong> शिशु आहार में क्रोनोबैक्टर का आना पाश्चुरीकरण के बाद हवा, ऑपरेटर के कपड़े, जूतों या ड्रायर के बाद की गंदी सतहों से होता है।</li>
                            </ul>
                        </li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">3. रेड ज़ोन में सख्त "ड्राई क्लीनिंग ओनली" नियम</h3>
                    <p>शिशु आहार पाउडर प्लांट में पानी का प्रवेश सबसे बड़ा अपराध माना जाता है:</p>
                    <div class="p-3 bg-rose-50 border border-rose-200 rounded-lg mt-2">
                        <p class="text-xs text-rose-900 font-semibold">गीली सफाई क्यों जानलेवा है?</p>
                        <p class="text-xs text-rose-800 mt-1">सूखे पाउडर में बैक्टीरिया वंशवृद्धि नहीं कर सकता। लेकिन यदि रेड ज़ोन में पानी या पोछा लगाया जाए, तो फर्श और मशीनों की दरारों में नमी ($a_w > 0.85$) पहुंच जाती है। दूध के पाउडर और नमी को पाकर <strong>क्रोनोबैक्टर बैक्टीरिया 24 घंटे में लाखों की संख्या में फैलकर बायोफिल्म बना लेता है</strong>, जो हवा में उड़कर पाउडर को संक्रमित कर देता है।</p>
                    </div>

                    <p class="mt-3"><strong>ड्राई क्लीनिंग प्रोटोकॉल:</strong></p>
                    <ul class="list-disc list-inside space-y-1 ml-4 text-xs text-gray-700">
                        <li><strong>शून्य पानी:</strong> रेड ज़ोन में पानी का पाइप या नाली पूरी तरह प्रतिबंधित होती है।</li>
                        <li><strong>HEPA वैक्यूम क्लीनर:</strong> गिरा हुआ पाउडर केवल सर्टिफाइड H14 HEPA वैक्यूम क्लीनर से साफ किया जाता है।</li>
                        <li><strong>70% अल्कोहल वाइप्स:</strong> मशीनों को केवल 70% आइसोप्रोपिल अल्कोहल (IPA) से साफ किया जाता है, जो बैक्टीरिया को मारकर 60 सेकंड में बिना नमी छोड़े उड़ जाता है।</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">4. माइक्रोबायोलॉजिकल शून्य-सहनशीलता मानक (FSSAI 2020)</h3>
                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-left border-collapse text-xs sm:text-sm">
                            <thead class="bg-muted">
                                <tr>
                                    <th class="p-2 border">सूक्ष्मजीव</th>
                                    <th class="p-2 border">सैंपलिंग ($n$)</th>
                                    <th class="p-2 border">स्वीकृति ($c$)</th>
                                    <th class="p-2 border">माइक्रोबायोलॉजिकल सीमा ($m$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-2 border"><strong><em>Cronobacter sakazakii</em></strong></td>
                                    <td class="p-2 border"><strong>$n = 30$</strong></td>
                                    <td class="p-2 border"><strong>$c = 0$ (शून्य सहिष्णुता)</strong></td>
                                    <td class="p-2 border"><strong>100 ग्राम में शून्य (अनुपस्थित)</strong></td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong><em>Salmonella</em></strong></td>
                                    <td class="p-2 border"><strong>$n = 30$</strong></td>
                                    <td class="p-2 border"><strong>$c = 0$ (शून्य सहिष्णुता)</strong></td>
                                    <td class="p-2 border"><strong>375 ग्राम में शून्य (अनुपस्थित)</strong></td>
                                </tr>
                                <tr>
                                    <td class="p-2 border"><strong><em>Enterobacteriaceae</em></strong></td>
                                    <td class="p-2 border"><strong>$n = 10$</strong></td>
                                    <td class="p-2 border"><strong>$c = 0$</strong></td>
                                    <td class="p-2 border"><strong>10 ग्राम में शून्य</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">5. मॉडिफाइड एटमॉस्फियर पैकेजिंग (MAP): इनर्ट नाइट्रोजन पैकिंग</h3>
                    <p>शिशु फॉर्मूला में 28% तक फैट (DHA/ARA सहित) होता है। यदि डिब्बे में हवा रह जाए, तो <em>ऑक्सीडेशन</em> होकर बदबू आने लगती है और विटामिन A नष्ट हो जाते हैं:</p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li><strong>वैक्यूम एवं नाइट्रोजन फ्लशिंग (CCP-5):</strong> डिब्बे को वैक्यूम चैंबर में ले जाकर $-0.95	ext{ bar}$ वैक्यूम खींचा जाता है और उसमें <strong>98% शुद्ध नाइट्रोजन ($N_2$) + 2% $CO_2$</strong> गैस भरी जाती है।</li>
                        <li><strong>अवशिष्ट ऑक्सीजन सीमा:</strong> डिब्बे में बची हुई ऑक्सीजन को <strong>1.0% से कम (आदर्श रूप से < 0.5%)</strong> रखना अनिवार्य है। इससे बिना किसी प्रिजर्वेटिव के पाउडर 24 महीने तक पूरी तरह सुरक्षित और ताजा रहता है।</li>
                    </ul>
`
            }
        }
    }
};
