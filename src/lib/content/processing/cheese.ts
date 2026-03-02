
export const cheeseContent = {
    en: {
        title: "Cheese Processing",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Cheese</h3>
            <p>Cheese is a concentrated, fermented dairy product derived from milk through the selective coagulation and concentration of the casein protein fraction, with simultaneous entrapment of milk fat, minerals, and water within the protein matrix. It represents one of humanity's oldest biotechnological achievements — evidence of cheese making dates back to ~7,000 BCE in the Fertile Crescent (modern-day Turkey/Iraq), predating written history. Cheese making is fundamentally a <strong>dehydration and preservation process</strong> that converts perishable liquid milk (shelf life: 2-5 days) into a stable, nutrient-dense solid food (shelf life: weeks to years depending on variety).</p>

            <p><strong>Scientific Definition:</strong> Cheese is the fresh or ripened product obtained by coagulating milk proteins (primarily casein) through the action of rennet (enzymatic coagulation), acid (acid coagulation), or a combination thereof, followed by partial dehydration of the resulting coagulum (curd) through whey expulsion (syneresis), with or without further biochemical transformation during ripening/aging.</p>

            <p><strong>Global Market Context:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li>Global cheese production: ~22-24 million metric tons annually (2023)</li>
                <li>Global market value: ~$85-95 billion (growing at 3-4% CAGR)</li>
                <li>Top producers: USA (~6.0 MMT), Germany (~2.4 MMT), France (~1.9 MMT), Italy (~1.3 MMT), Netherlands (~0.9 MMT)</li>
                <li>India's cheese market: ~$0.8-1.0 billion (growing at 15-18% CAGR — one of the fastest globally)</li>
                <li>Indian per capita cheese consumption: ~0.2 kg/year (vs. France: 27 kg, USA: 18 kg, global average: 3 kg) — enormous growth potential</li>
                <li>Over <strong>1,800 named varieties</strong> worldwide, classified by texture, fat content, ripening method, milk source, and manufacturing technique</li>
                <li>Approximately 10 liters of milk produces 1 kg of cheese (concentration factor: ~10×)</li>
            </ul>

            <p><strong>Classification of Cheese:</strong></p>
            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Classification Basis</th>
                        <th class="border border-gray-300 px-4 py-2">Category</th>
                        <th class="border border-gray-300 px-4 py-2">Moisture (%)</th>
                        <th class="border border-gray-300 px-4 py-2">Examples</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2" rowspan="5"><strong>By Moisture/Texture (Codex Alimentarius)</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Extra-Hard</td>
                        <td class="border border-gray-300 px-4 py-2"><36%</td>
                        <td class="border border-gray-300 px-4 py-2">Parmesan (Parmigiano-Reggiano), Grana Padano</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Hard</td>
                        <td class="border border-gray-300 px-4 py-2">36-40%</td>
                        <td class="border border-gray-300 px-4 py-2">Cheddar, Gouda, Emmental, Swiss</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Semi-Hard</td>
                        <td class="border border-gray-300 px-4 py-2">40-50%</td>
                        <td class="border border-gray-300 px-4 py-2">Edam, Provolone, Havarti</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Semi-Soft</td>
                        <td class="border border-gray-300 px-4 py-2">50-60%</td>
                        <td class="border border-gray-300 px-4 py-2">Mozzarella, Morbier, Limburger</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Soft</td>
                        <td class="border border-gray-300 px-4 py-2">>60%</td>
                        <td class="border border-gray-300 px-4 py-2">Brie, Camembert, Cream Cheese, Paneer, Cottage Cheese</td>
                    </tr>
                </tbody>
            </table>

            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Classification Basis</th>
                        <th class="border border-gray-300 px-4 py-2">Category</th>
                        <th class="border border-gray-300 px-4 py-2">Examples</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2" rowspan="4"><strong>By Ripening Method</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Unripened (Fresh)</td>
                        <td class="border border-gray-300 px-4 py-2">Paneer, Cottage Cheese, Ricotta, Cream Cheese, Queso Fresco</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Bacteria-Ripened (Interior)</td>
                        <td class="border border-gray-300 px-4 py-2">Cheddar, Gouda, Emmental (with Propionibacterium for eyes/holes)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Mold-Ripened (Surface)</td>
                        <td class="border border-gray-300 px-4 py-2">Brie, Camembert (Penicillium camemberti — white mold)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Mold-Ripened (Internal/Blue)</td>
                        <td class="border border-gray-300 px-4 py-2">Roquefort, Gorgonzola, Stilton (Penicillium roqueforti — blue-green mold)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2" rowspan="3"><strong>By Coagulation Method</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Enzymatic (Rennet)</td>
                        <td class="border border-gray-300 px-4 py-2">Cheddar, Mozzarella, Gouda, Parmesan (most world cheeses)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Acid</td>
                        <td class="border border-gray-300 px-4 py-2">Cottage Cheese, Quark, Paneer (heat-acid), Cream Cheese</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Combined (Rennet + Acid)</td>
                        <td class="border border-gray-300 px-4 py-2">Many fresh cheeses, some Feta varieties</td>
                    </tr>
                </tbody>
            </table>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Fundamental Science of Cheese Making</h3>

            <h4 class="font-semibold mt-4 mb-2">1. Casein Chemistry — The Foundation of Cheese</h4>

            <p>Casein proteins constitute ~80% of total milk protein (26-28 g/L in cow's milk) and are the <strong>primary structural component of cheese</strong>. Understanding casein structure is essential to understanding cheese making.</p>

            <p><strong>Casein Micelle Structure:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Composition:</strong> Casein micelles are large colloidal aggregates (50-500 nm diameter, average ~150 nm) containing four types of casein proteins: α<sub>s1</sub>-casein (38%), α<sub>s2</sub>-casein (10%), β-casein (36%), and κ-casein (13%), plus colloidal calcium phosphate (CCP, ~8% of micelle dry weight)</li>
                <li><strong>Internal Structure:</strong> α<sub>s1</sub>, α<sub>s2</sub>, and β-caseins are calcium-sensitive — they aggregate in presence of Ca²⁺ ions. They form the interior core of the micelle, held together by hydrophobic interactions, calcium bridges (Ca²⁺ linking phosphoserine residues on different casein molecules), and CCP nanoclusters (amorphous calcium phosphate particles ~2-3 nm diameter, ~800 per micelle)</li>
                <li><strong>Surface Layer:</strong> κ-casein is uniquely NOT calcium-sensitive (lacks phosphoserine clusters). It sits preferentially on the micelle surface, acting as a <strong>protective hairy layer</strong>. Its hydrophilic C-terminal region (the "glycomacropeptide" or GMP, amino acids 106-169) extends outward into the serum phase like bristles</li>
                <li><strong>Colloidal Stability:</strong> The κ-casein hairy layer provides TWO stabilization mechanisms:
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Steric Stabilization:</strong> The extended GMP bristles physically prevent micelles from approaching close enough to aggregate (steric repulsion, effective range: 5-10 nm)</li>
                        <li><strong>Electrostatic Stabilization:</strong> GMP is negatively charged at milk pH (6.7) due to sialic acid residues (N-acetylneuraminic acid, pKa ~2.6) and phosphoserine residues → net negative surface charge (zeta potential: -15 to -20 mV) → electrostatic repulsion between micelles</li>
                    </ul>
                </li>
                <li><strong>Result:</strong> In native milk, casein micelles remain dispersed as a stable colloidal suspension — milk does NOT coagulate spontaneously. To make cheese, we must <strong>destabilize</strong> this colloidal system!</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">2. Coagulation Mechanisms — Destabilizing the Micelle</h4>

            <p><strong>A) Enzymatic (Rennet) Coagulation — Primary Method for Most Cheeses:</strong></p>

            <p><strong>The Enzyme:</strong> Chymosin (EC 3.4.23.4), also called rennin, is an aspartic protease originally extracted from the abomasum (fourth stomach) of unweaned calves. It is now predominantly produced by microbial fermentation (fermentation-produced chymosin — FPC, using genetically modified Aspergillus niger or Kluyveromyces lactis expressing bovine chymosin gene). FPC accounts for >90% of global rennet supply.</p>

            <p><strong>Mechanism of Action — Two-Phase Process:</strong></p>

            <p><strong>Phase 1: Enzymatic (Primary) Phase — κ-Casein Hydrolysis</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li>Chymosin specifically cleaves the <strong>Phe₁₀₅-Met₁₀₆ peptide bond</strong> of κ-casein — the single most important bond in all of cheese making!</li>
                <li>This splits κ-casein into two fragments:
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Para-κ-casein</strong> (residues 1-105): Hydrophobic, remains attached to micelle surface. Lost its protective function</li>
                        <li><strong>Glycomacropeptide/CMP</strong> (residues 106-169): Hydrophilic, highly glycosylated, diffuses into serum (whey). This is the protective "hairy" portion — its removal is devastating to micelle stability!</li>
                    </ul>
                </li>
                <li><strong>Kinetics:</strong> The enzymatic phase follows Michaelis-Menten kinetics. At typical cheese making conditions (30-32°C, pH 6.5, 200 mL rennet per 1000 L milk), ~85% of κ-casein is hydrolyzed within 15-20 minutes. Coagulation requires >80% κ-casein cleavage</li>
                <li><strong>Specificity:</strong> Chymosin's remarkable specificity for Phe₁₀₅-Met₁₀₆ is due to complementary binding interactions with surrounding amino acid sequence. Other proteases (pepsin, microbial proteases) are less specific → cleave additional bonds → higher non-specific proteolysis → bitter peptide generation → flavor defects</li>
            </ul>

            <p><strong>Phase 2: Non-Enzymatic (Secondary) Phase — Aggregation</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li>Once ~85% of κ-casein is cleaved, destabilized (para-κ-casein-coated) micelles begin aggregating</li>
                <li><strong>Driving Forces for Aggregation:</strong>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Loss of steric repulsion (GMP removed → no more bristle barrier)</li>
                        <li>Reduced electrostatic repulsion (sialic acid removed with GMP → less negative charge)</li>
                        <li>Exposed hydrophobic patches on para-κ-casein → hydrophobic attractions between micelles</li>
                        <li>Calcium bridging: Ca²⁺ ions in serum bridge negatively charged sites on adjacent micelles → cross-linking</li>
                    </ul>
                </li>
                <li><strong>Gel Formation:</strong> Aggregating micelles form chains → chains branch → branched chains form 3D network → continuous gel (like a sponge). This gel entraps fat globules and serum within its pores → the "coagulum" or "curd"</li>
                <li><strong>Time to Gel Point:</strong> Typically 25-40 minutes at 30-32°C after rennet addition. Gel strength continues increasing after initial gelation</li>
                <li><strong>Calcium Requirement:</strong> Ca²⁺ ions are essential for Phase 2 aggregation. Added CaCl₂ (0.01-0.02%, 10-20 g per 100 L milk) ensures sufficient ionic calcium for proper coagulation, especially in pasteurized milk (pasteurization causes slight calcium shift from colloidal to soluble phase, then precipitation of soluble calcium on cooling)</li>
            </ul>

            <p><strong>Factors Affecting Rennet Coagulation:</strong></p>
            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Factor</th>
                        <th class="border border-gray-300 px-4 py-2">Effect on Coagulation</th>
                        <th class="border border-gray-300 px-4 py-2">Optimal Range</th>
                        <th class="border border-gray-300 px-4 py-2">Scientific Explanation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Temperature</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Higher temp → faster coagulation (up to 42°C)</td>
                        <td class="border border-gray-300 px-4 py-2">30-35°C</td>
                        <td class="border border-gray-300 px-4 py-2">Enzyme activity increases with temperature (Q₁₀ ≈ 2). Hydrophobic interactions for aggregation also stronger at higher T. Above 42°C: enzyme denaturation begins</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>pH</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Lower pH → faster coagulation, firmer gel</td>
                        <td class="border border-gray-300 px-4 py-2">6.0-6.5 (natural milk: 6.6-6.7)</td>
                        <td class="border border-gray-300 px-4 py-2">Chymosin pH optimum: ~4.0, but activity significant at pH 6.0-6.5. Lower pH also reduces electrostatic repulsion (closer to casein isoelectric point: 4.6) → faster aggregation. CCP begins dissolving below pH 5.8 → weakens micelle</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Calcium (Ca²⁺)</strong></td>
                        <td class="border border-gray-300 px-4 py-2">More Ca²⁺ → faster, firmer coagulation</td>
                        <td class="border border-gray-300 px-4 py-2">Addition of 0.01-0.02% CaCl₂</td>
                        <td class="border border-gray-300 px-4 py-2">Ca²⁺ bridges required for Phase 2 micelle aggregation. Also neutralizes negative charges → reduces repulsion. Excess Ca²⁺ (>0.05%) → excessively firm, rubbery curd</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Casein Concentration</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Higher casein → faster, firmer gel</td>
                        <td class="border border-gray-300 px-4 py-2">2.4-2.8% casein</td>
                        <td class="border border-gray-300 px-4 py-2">More micelles = shorter distance between them = faster collision/aggregation. Denser gel network → firmer curd → higher cheese yield</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Rennet Concentration</strong></td>
                        <td class="border border-gray-300 px-4 py-2">More rennet → faster Phase 1 (enzyme phase)</td>
                        <td class="border border-gray-300 px-4 py-2">15-30 mL/100L milk</td>
                        <td class="border border-gray-300 px-4 py-2">More enzyme molecules → faster κ-casein cleavage → faster onset of Phase 2. Does NOT affect Phase 2 rate (non-enzymatic). Excess rennet → excessive proteolysis during aging → bitterness</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Heat Treatment of Milk</strong></td>
                        <td class="border border-gray-300 px-4 py-2">Higher heat → weaker/slower coagulation</td>
                        <td class="border border-gray-300 px-4 py-2">HTST: 72°C/15s (standard)</td>
                        <td class="border border-gray-300 px-4 py-2">Heat denatures whey proteins → β-LG complexes with κ-casein via disulfide bonds → blocks chymosin access to Phe₁₀₅-Met₁₀₆ bond → impaired coagulation. UHT milk: essentially non-coagulable by rennet</td>
                    </tr>
                </tbody>
            </table>

            <p class="mt-4"><strong>B) Acid Coagulation — For Fresh Cheeses (Paneer, Cottage Cheese):</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Mechanism:</strong> Lowering pH toward casein isoelectric point (pI = 4.6) → progressive neutralization of negative charges on casein micelles → electrostatic repulsion eliminated → micelles aggregate</li>
                <li><strong>CCP Dissolution:</strong> Below pH 5.0, colloidal calcium phosphate (CCP) dissolves completely → casein micelles disintegrate into individual casein molecules → these re-aggregate into an acid gel/precipitate</li>
                <li><strong>Gel Properties:</strong> Acid gels are fundamentally different from rennet gels — they are weaker, more fragile, higher moisture (lack calcium cross-bridges), no syneresis tendency (whey must be expelled mechanically)</li>
                <li><strong>Applications:</strong> Paneer (heat-acid coagulation: hot milk + acid → simultaneous denaturation + coagulation → firm texture), Cottage Cheese (acid + mild rennet), Cream Cheese, Quark, Chenna</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">3. Syneresis — Whey Expulsion</h4>
            <p>After coagulation, the gel (curd) must lose whey to concentrate the solids and reduce moisture to the desired level for the cheese variety. This process is called <strong>syneresis</strong>.</p>

            <p><strong>Mechanism:</strong> The casein gel network is a dynamic structure that continuously rearranges — protein strands contract, fuse, and form tighter bonds → network shrinks → whey squeezed out of pores. Think of wringing a sponge — the casein network "wrings itself."</p>

            <p><strong>Factors That Increase Syneresis (Reduce Cheese Moisture):</strong></p>
            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Factor</th>
                        <th class="border border-gray-300 px-4 py-2">Effect</th>
                        <th class="border border-gray-300 px-4 py-2">Scientific Mechanism</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Smaller curd pieces (finer cutting)</td>
                        <td class="border border-gray-300 px-4 py-2">↑↑ syneresis</td>
                        <td class="border border-gray-300 px-4 py-2">Greater surface area → shorter diffusion path for whey → faster moisture loss</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Higher cooking temperature</td>
                        <td class="border border-gray-300 px-4 py-2">↑↑ syneresis</td>
                        <td class="border border-gray-300 px-4 py-2">Increased hydrophobic interactions → protein network contracts more → squeezes out more whey. Also increases enzymatic/microbial activity → more acid → more contraction</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Lower pH (more acid)</td>
                        <td class="border border-gray-300 px-4 py-2">↑↑ syneresis</td>
                        <td class="border border-gray-300 px-4 py-2">CCP dissolves → protein network loses structural hydration → contracts → whey expelled. Also reduces charge repulsion → protein strands approach more closely</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">More stirring/agitation</td>
                        <td class="border border-gray-300 px-4 py-2">↑ syneresis</td>
                        <td class="border border-gray-300 px-4 py-2">Mechanical action promotes curd contraction and prevents whey pooling around curd particles</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">More pressing force</td>
                        <td class="border border-gray-300 px-4 py-2">↑ syneresis</td>
                        <td class="border border-gray-300 px-4 py-2">External pressure physically forces whey out of gel pores</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2">Salt addition</td>
                        <td class="border border-gray-300 px-4 py-2">↑ syneresis</td>
                        <td class="border border-gray-300 px-4 py-2">Osmotic effect: NaCl draws water from curd. Also promotes protein-protein interactions (salting out effect)</td>
                    </tr>
                </tbody>
            </table>

            <p class="mt-3"><strong>Cheese Variety and Syneresis Control:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>High-moisture cheese (Mozzarella, 52-60%):</strong> Gentle cutting, low cooking temperature, minimal pressing → retain moisture</li>
                <li><strong>Medium-moisture cheese (Cheddar, 36-39%):</strong> Moderate cutting, cooking to 38-42°C, cheddaring process, moderate pressing</li>
                <li><strong>Low-moisture cheese (Parmesan, <32%):</strong> Fine cutting, high cooking (48-55°C), extended pressing, long brining → maximum moisture removal</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">4. Starter Culture Microbiology</h4>
            <p>Starter cultures are defined populations of lactic acid bacteria (LAB) deliberately added to cheese milk to initiate and control acidification, contribute to flavor development, and influence texture.</p>

            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Culture Type</th>
                        <th class="border border-gray-300 px-4 py-2">Organisms</th>
                        <th class="border border-gray-300 px-4 py-2">Optimal Temperature</th>
                        <th class="border border-gray-300 px-4 py-2">Cheese Applications</th>
                        <th class="border border-gray-300 px-4 py-2">Key Metabolic Activities</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Mesophilic</strong></td>
                        <td class="border border-gray-300 px-4 py-2"><em>Lactococcus lactis</em> subsp. <em>lactis</em>, <em>L. lactis</em> subsp. <em>cremoris</em>, <em>Leuconostoc mesenteroides</em></td>
                        <td class="border border-gray-300 px-4 py-2">25-35°C</td>
                        <td class="border border-gray-300 px-4 py-2">Cheddar, Gouda, Edam, Cottage Cheese, Feta</td>
                        <td class="border border-gray-300 px-4 py-2">Lactose → Lactic acid (homofermentative). Citrate → Diacetyl + CO₂ (flavor + eye formation in some cheeses)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 px-4 py-2"><strong>Thermophilic</strong></td>
                        <td class="border border-gray-300 px-4 py-2"><em>Streptococcus thermophilus</em>, <em>Lactobacillus delbrueckii</em> subsp. <em>bulgaricus</em>, <em>L. helveticus</em></td>
                        <td class="border border-gray-300 px-4 py-2">37-45°C</td>
                        <td class="border border-gray-300 px-4 py-2">Mozzarella, Parmesan, Swiss/Emmental, Provolone</td>
                        <td class="border border-gray-300 px-4 py-2">Lactose → Lactic acid at higher temperatures. L. helveticus produces highly proteolytic enzymes → accelerated ripening, reduced bitterness</td>
                    </tr>
                </tbody>
            </table>

            <p class="mt-3"><strong>Lactic Acid Production — The Central Biochemical Reaction:</strong></p>
            <p class="font-mono">Lactose (C₁₂H₂₂O₁₁) → 4 Lactic Acid (C₃H₆O₃)</p>
            <p>Pathway: Lactose → (β-galactosidase) → Glucose + Galactose → (Embden-Meyerhof glycolysis) → Pyruvate → (lactate dehydrogenase) → L(+)-Lactic Acid</p>
            <p><strong>Typical pH changes during cheese making:</strong> Milk pH 6.65 → After ripening: 6.50 → At cutting: 6.45 → At draining: 6.20-6.40 → During cheddaring/acidification: pH drops to 5.2-5.4 → Final cheese after pressing: pH 5.0-5.3</p>

            <h4 class="font-semibold mt-4 mb-2">5. Role of Salt (NaCl) in Cheese</h4>
            <p>Salt is added to cheese at rates of 1.5-3.0% (w/w) of final cheese and serves multiple critical functions:</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Flavor Enhancement:</strong> Salt suppresses bitterness (masks bitter peptides from proteolysis), enhances perception of savory/umami notes, and contributes its own salty taste at concentrations >0.5%</li>
                <li><strong>Preservation:</strong> NaCl reduces water activity (a<sub>w</sub> reduction: ~0.005 per 1% salt in moisture phase). At 4-6% salt-in-moisture (S/M), most spoilage bacteria and pathogens are inhibited. Also directly toxic to some bacteria at high S/M concentrations</li>
                <li><strong>Moisture Control:</strong> Osmotic effect draws water from curd → promotes syneresis → controls final moisture content</li>
                <li><strong>Enzyme Activity Modulation:</strong> Salt concentration affects activity of residual rennet and microbial enzymes during ripening → controls rate and pattern of proteolysis and lipolysis → influences flavor development</li>
                <li><strong>Texture Modification:</strong> Na⁺ ions exchange with Ca²⁺ in the casein matrix (ion exchange effect) → hydrates protein → affects cheese body/texture. At 4-5% S/M: optimal texture. Above 6%: excessive protein hydration → soft, wet texture</li>
            </ul>

            <p><strong>Salting Methods:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Dry Salting:</strong> Granular salt mixed directly with milled curd (Cheddar method) — fast, uniform for small-piece cheeses</li>
                <li><strong>Brine Salting:</strong> Cheese immersed in saturated NaCl solution (20-23% w/v, 10-15°C) for hours to days (Gouda, Mozzarella, Swiss). Salt absorption by diffusion → concentration gradient from surface to center</li>
                <li><strong>Surface Rubbing:</strong> Dry salt rubbed on cheese surface (Parmesan, some artisanal cheeses) — repeated over days/weeks</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">General FSSAI Standards for Cheese</h3>
            <p>FSSAI defines standards for various types of cheese under <strong>FSS (Food Products Standards and Food Additives) Regulations, 2011</strong>. Below are examples for common categories:</p>
            <div class="overflow-x-auto mt-4">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-muted">
                        <tr>
                            <th class="p-2 border">Product</th>
                            <th class="p-2 border">Moisture, Max, % (m/m)</th>
                            <th class="p-2 border">Milk fat, Min, % (on dry basis)</th>
                            <th class="p-2 border">Scientific Rationale</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-2 border"><strong>Hard-Pressed Cheese</strong></td>
                            <td class="p-2 border">39.0</td>
                            <td class="p-2 border">48.0</td>
                            <td class="p-2 border">Low moisture ensures firmness, low a<sub>w</sub> for long shelf life; high fat-in-dry-matter (FDM) ensures rich flavor and smooth body</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Cheddar Cheese</strong></td>
                            <td class="p-2 border">39.0</td>
                            <td class="p-2 border">48.0</td>
                            <td class="p-2 border">MNFS (moisture in non-fat substance): 52-54% controls texture and ripening rate</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Mozzarella Cheese</strong></td>
                            <td class="p-2 border">60.0</td>
                            <td class="p-2 border">35.0</td>
                            <td class="p-2 border">Higher moisture essential for stretching properties; lower FDM acceptable as fat interferes with fibrous protein alignment needed for stretchability</td>
                        </tr>
                        <tr>
                            <td class="p-2 border"><strong>Processed Cheese</strong></td>
                            <td class="p-2 border">47.0</td>
                            <td class="p-2 border">40.0</td>
                            <td class="p-2 border">Emulsifying salts allow higher moisture incorporation while maintaining smooth, homogeneous body; lower FDM reflects additional non-fat ingredients (emulsifying salts, stabilizers)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p class="mt-3"><strong>Additional FSSAI Microbiological Standards for Cheese:</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Coliform count: <100 CFU/g (for pasteurized milk cheese)</li>
                <li><em>E. coli</em>: <100 CFU/g</li>
                <li><em>Staphylococcus aureus</em>: <100 CFU/g (enterotoxin producer → food poisoning risk)</li>
                <li><em>Salmonella</em>: Absent in 25g</li>
                <li><em>Listeria monocytogenes</em>: Absent in 25g (critical for soft/fresh cheeses)</li>
                <li>Yeast & Mold: <500 CFU/g</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Cheese Ripening/Aging — The Flavor Factory</h3>

            <p>Ripening (maturation/aging) is the period after manufacture during which the cheese undergoes profound biochemical transformations that develop its characteristic flavor, aroma, texture, and appearance. Ripening involves three primary biochemical pathways:</p>

            <h4 class="font-semibold mt-4 mb-2">A) Proteolysis — The Most Important Ripening Event</h4>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Definition:</strong> Enzymatic degradation of casein protein into progressively smaller fragments: intact casein → large peptides → small peptides → free amino acids</li>
                <li><strong>Enzymes Involved:</strong>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li><strong>Residual rennet (chymosin):</strong> Cleaves α<sub>s1</sub>-casein at Phe₂₃-Phe₂₄ → produces α<sub>s1</sub>-I casein (first detectable proteolysis product, within 1-2 weeks). Also cleaves β-casein slowly</li>
                        <li><strong>Plasmin (native milk protease):</strong> Heat-stable serine protease; cleaves β-casein → γ-caseins + proteose-peptones. More active in high-cook cheeses (Swiss, Parmesan) where starter bacteria are heat-killed</li>
                        <li><strong>Starter culture enzymes:</strong> LAB contain proteinases (CEP — cell envelope proteinase) and peptidases (aminopeptidases, dipeptidases, tripeptidases). After LAB lyse (die and release contents), these enzymes degrade peptides to free amino acids → critical for flavor development</li>
                        <li><strong>Non-starter LAB (NSLAB) enzymes:</strong> Adventitious lactobacilli (Lb. casei, Lb. paracasei, Lb. plantarum) grow in cheese during ripening → contribute additional peptidase activity → degrade bitter peptides → improve flavor</li>
                    </ul>
                </li>
                <li><strong>Flavor Compounds from Amino Acid Catabolism:</strong>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Leucine → 3-methylbutanal, 3-methylbutanol (malty, fruity)</li>
                        <li>Methionine → Methanethiol, dimethyl sulfide (sulfurous, "Cheddar" notes)</li>
                        <li>Phenylalanine → Phenylacetaldehyde (floral, rosy)</li>
                        <li>Tryptophan → Indole, skatole (fecal at high concentration — washed-rind cheeses)</li>
                        <li>Glutamate → Umami taste sensation (aged cheeses are naturally rich in glutamate)</li>
                    </ul>
                </li>
                <li><strong>Bitterness Problem:</strong> Hydrophobic peptides (rich in Leu, Ile, Val, Phe, Pro) with molecular weight 500-3000 Da taste bitter. These are normal intermediates but should be degraded by peptidases. Excessive bitterness = imbalance between proteinase activity (generating bitter peptides) and peptidase activity (degrading them). Causes: excess rennet, wrong starter, insufficient ripening time</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">B) Lipolysis — Fat Breakdown</h4>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Definition:</strong> Enzymatic hydrolysis of milk fat triglycerides → free fatty acids (FFA) + glycerol</li>
                <li><strong>Enzymes:</strong> Lipases from milk (lipoprotein lipase — heat-labile, mostly destroyed by pasteurization), starter bacteria (esterases), mold enzymes (Penicillium roqueforti lipase in blue cheeses → extensive lipolysis)</li>
                <li><strong>Flavor Contribution of Free Fatty Acids:</strong>
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Butyric acid (C4:0): Rancid, cheesy, sharp (key Cheddar note at low concentration)</li>
                        <li>Caproic acid (C6:0): Goaty, pungent</li>
                        <li>Caprylic (C8:0) & Capric acid (C10:0): Goaty, waxy (characteristic of goat cheese)</li>
                        <li>Short-chain FFA are volatile, aromatic, and contribute characteristic cheese aroma even at low concentrations (threshold: 0.5-15 mg/kg)</li>
                    </ul>
                </li>
                <li><strong>Degree of Lipolysis:</strong> Very low in Cheddar/Gouda (FFA: 500-1500 mg/kg); moderate in Parmesan (1500-4000 mg/kg); extensive in Blue cheeses (25,000-40,000 mg/kg) and Italian cheeses like Provolone</li>
            </ul>

            <h4 class="font-semibold mt-4 mb-2">C) Lactose and Citrate Metabolism</h4>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                <li><strong>Lactose:</strong> Residual lactose in fresh curd (0.5-1.5%) is rapidly fermented to lactic acid by starter bacteria within 1-3 days after pressing. Complete lactose consumption → pH stabilizes at 5.0-5.3. Aged cheeses are essentially lactose-free (important for lactose-intolerant consumers)</li>
                <li><strong>Citrate Metabolism:</strong> Milk contains ~1.8 g/L citrate. Certain starter bacteria (Leuconostoc, Lactococcus diacetylactis) ferment citrate → CO₂ (gas eyes in Gouda, Havarti) + diacetyl (buttery flavor) + acetoin + acetate</li>
                <li><strong>Lactate Metabolism:</strong> During extended ripening, lactic acid can be metabolized:
                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Propionibacterium freudenreichii (Swiss cheese): Lactate → Propionate + Acetate + CO₂ (the CO₂ forms the characteristic large "eyes"/holes in Swiss cheese; propionate contributes sweet, nutty flavor)</li>
                        <li>Calcium lactate crystallization: If pH >5.1 and lactate concentration high, calcium lactate crystals (white spots) can form on cheese surface during storage — cosmetic defect but harmless</li>
                    </ul>
                </li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Cheese Yield Calculation</h3>
            <p>Cheese yield is a critical economic parameter. It can be predicted using various formulae:</p>

            <p><strong>Van Slyke & Price Formula (Most Widely Used):</strong></p>
            <p class="font-mono bg-gray-100 p-3 rounded mt-2">Y = [(0.93 × F + C - 0.1) × 1.09] / (1 - M/100)</p>
            <p>Where: Y = cheese yield (kg cheese per 100 kg milk), F = fat content of milk (%), C = casein content of milk (%), M = moisture content of cheese (%), 0.93 = fat recovery factor (93% of milk fat retained in cheese), 0.1 = loss factor for casein lost in whey, 1.09 = factor accounting for other solids (minerals, whey proteins trapped in curd)</p>

            <p><strong>Example Calculation (Cheddar):</strong></p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li>Milk: 3.5% fat, 2.5% casein, Cheddar moisture target: 37%</li>
                <li>Y = [(0.93 × 3.5 + 2.5 - 0.1) × 1.09] / (1 - 37/100)</li>
                <li>Y = [(3.255 + 2.4) × 1.09] / 0.63</li>
                <li>Y = [6.164] / 0.63 = <strong>9.78 kg cheese per 100 kg milk</strong></li>
                <li>Approximately <strong>10 kg of milk produces 1 kg of Cheddar cheese</strong></li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Nutritional Composition of Cheese</h3>
            <table class="min-w-full border-collapse border border-gray-300 mt-3">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border border-gray-300 px-4 py-2">Nutrient</th>
                        <th class="border border-gray-300 px-4 py-2">Cheddar (per 100g)</th>
                        <th class="border border-gray-300 px-4 py-2">Mozzarella (per 100g)</th>
                        <th class="border border-gray-300 px-4 py-2">Parmesan (per 100g)</th>
                        <th class="border border-gray-300 px-4 py-2">Cottage Cheese (per 100g)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td class="border border-gray-300 px-4 py-2">Energy (kcal)</td><td class="border border-gray-300 px-4 py-2">403</td><td class="border border-gray-300 px-4 py-2">280</td><td class="border border-gray-300 px-4 py-2">431</td><td class="border border-gray-300 px-4 py-2">98</td></tr>
                    <tr><td class="border border-gray-300 px-4 py-2">Protein (g)</td><td class="border border-gray-300 px-4 py-2">24.9</td><td class="border border-gray-300 px-4 py-2">22.2</td><td class="border border-gray-300 px-4 py-2">35.8</td><td class="border border-gray-300 px-4 py-2">11.1</td></tr>
                    <tr><td class="border border-gray-300 px-4 py-2">Fat (g)</td><td class="border border-gray-300 px-4 py-2">33.1</td><td class="border border-gray-300 px-4 py-2">17.1</td><td class="border border-gray-300 px-4 py-2">28.6</td><td class="border border-gray-300 px-4 py-2">4.3</td></tr>
                    <tr><td class="border border-gray-300 px-4 py-2">Carbohydrate (g)</td><td class="border border-gray-300 px-4 py-2">1.3</td><td class="border border-gray-300 px-4 py-2">2.2</td><td class="border border-gray-300 px-4 py-2">3.2</td><td class="border border-gray-300 px-4 py-2">3.4</td></tr>
                    <tr><td class="border border-gray-300 px-4 py-2">Calcium (mg)</td><td class="border border-gray-300 px-4 py-2">721</td><td class="border border-gray-300 px-4 py-2">505</td><td class="border border-gray-300 px-4 py-2">1184</td><td class="border border-gray-300 px-4 py-2">83</td></tr>
                    <tr><td class="border border-gray-300 px-4 py-2">Sodium (mg)</td><td class="border border-gray-300 px-4 py-2">621</td><td class="border border-gray-300 px-4 py-2">627</td><td class="border border-gray-300 px-4 py-2">1602</td><td class="border border-gray-300 px-4 py-2">364</td></tr>
                    <tr><td class="border border-gray-300 px-4 py-2">Vitamin A (μg RAE)</td><td class="border border-gray-300 px-4 py-2">337</td><td class="border border-gray-300 px-4 py-2">174</td><td class="border border-gray-300 px-4 py-2">207</td><td class="border border-gray-300 px-4 py-2">37</td></tr>
                    <tr><td class="border border-gray-300 px-4 py-2">Vitamin B12 (μg)</td><td class="border border-gray-300 px-4 py-2">0.83</td><td class="border border-gray-300 px-4 py-2">2.28</td><td class="border border-gray-300 px-4 py-2">1.20</td><td class="border border-gray-300 px-4 py-2">0.43</td></tr>
                    <tr><td class="border border-gray-300 px-4 py-2">Water Activity (a<sub>w</sub>)</td><td class="border border-gray-300 px-4 py-2">0.95-0.96</td><td class="border border-gray-300 px-4 py-2">0.97</td><td class="border border-gray-300 px-4 py-2">0.90-0.92</td><td class="border border-gray-300 px-4 py-2">0.99</td></tr>
                </tbody>
            </table>
        `,
        subTopics: {
            cheddar: {
                title: "A. Cheddar Cheese Processing",
                content: `
                    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Cheddar Cheese — Comprehensive Scientific Analysis</h2>
                    <p>Cheddar cheese is a hard, natural, internally bacteria-ripened cheese that originated in the English village of Cheddar in Somerset (~12th century). It is the <strong>most widely produced and consumed cheese variety globally</strong>, accounting for ~35% of world cheese production. Cheddar is characterized by its close-knit, smooth body, firm yet somewhat crumbly texture, and sharp, tangy flavor that intensifies dramatically with aging (mild: 2-3 months, medium: 6-9 months, sharp/mature: 12-24 months, extra-sharp/vintage: 2-5+ years).</p>

                    <p><strong>Key Distinguishing Feature:</strong> The <strong>cheddaring process</strong> — a unique curd-handling step involving stacking, turning, and matting of drained curd slabs under their own weight, allowing controlled acid development and creating the characteristic smooth, close-textured body. No other cheese variety uses this exact technique.</p>

                    <p><strong>Composition Targets (Codex Standard 263-1966, FSSAI):</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>Moisture: 36-39% (maximum 39%)</li>
                        <li>Fat-in-dry-matter (FDM): ≥48%</li>
                        <li>Moisture in non-fat substance (MNFS): 52-54% (critical parameter controlling texture and ripening rate)</li>
                        <li>Salt-in-moisture (S/M): 4.0-6.0% (optimal: 4.5-5.5%)</li>
                        <li>pH at pressing: 5.15-5.25 (target: 5.20)</li>
                        <li>pH during ripening: 5.0-5.3 (rises slightly during aging due to proteolysis generating ammonia)</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Cheddar Cheese</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception, Testing & Standardization <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Pasteurization (72°C/15s HTST) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling to 30-32°C + CaCl₂ Addition (0.01-0.02%) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">Starter Culture Inoculation (1-2% mesophilic LAB)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">Ripening (30-60 min, acid development to pH 6.50)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Rennet Addition & Coagulation (25-40 min) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cutting the Curd (6-12 mm cubes, wire knives)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Healing (5 min rest) → Gentle Stirring (10-15 min)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cooking/Scalding (38-42°C over 30-40 min, 0.2°C/min) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Draining of Whey (at pH 6.15-6.25)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Cheddaring — Stacking & Turning Curd Slabs (pH 6.2→5.3, 1.5-2.5 hrs)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border teal-300 rounded">Milling (curd slabs → finger-sized chips, at pH 5.2-5.4)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded">Salting (2.0-3.0% NaCl of curd weight, mixed 20-30 min)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-orange-100 border border-orange-300 rounded">Hooping & Pressing (3-12 hrs, 150-300 kPa) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-orange-100 border border-orange-300 rounded">Vacuum Packaging (barrier film, O₂ <1%)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-gray-200 border border-gray-400 rounded">Ripening/Aging (6-12°C, 60-90% RH, 2 months to 5+ years) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-4</span></div>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Scientific Explanation of Each Processing Step</h3>
                    <ol class="list-decimal list-outside pl-5 space-y-6">
                        <li>
                            <strong>Milk Standardization & Pasteurization (CCP-1):</strong>
                            <p class="mt-2"><strong>Standardization:</strong> Milk is adjusted to a specific <strong>casein-to-fat ratio (C/F)</strong> of approximately 0.68-0.72 (equivalent to protein-to-fat ratio ~0.92-0.96) to ensure consistent cheese composition. This is done by:
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li>Separating milk into skim milk and cream</li>
                                <li>Recombining to target fat level (typically 3.0-3.2% fat for Cheddar from 3.5% whole milk)</li>
                                <li>Higher C/F → harder, more proteolysis-prone cheese; Lower C/F → softer, fattier cheese</li>
                            </ul></p>

                            <p class="mt-2"><strong>Pasteurization (CCP-1):</strong></p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                                <li><strong>Condition:</strong> HTST 72°C for 15 seconds (minimum legal requirement for cheese milk in most countries including India)</li>
                                <li><strong>Microbial Kill:</strong> 99.99% reduction (4-5 log reduction) of vegetative pathogens: Mycobacterium tuberculosis (most heat-resistant non-spore-forming pathogen), Coxiella burnetii (Q fever), Salmonella, Listeria monocytogenes, E. coli O157:H7, Campylobacter. Also destroys >99% of spoilage bacteria</li>
                                <li><strong>Enzyme Inactivation:</strong> Destroys native milk lipase (prevents excessive lipolysis/rancidity), alkaline phosphatase (indicator enzyme: negative ALP test = adequate pasteurization)</li>
                                <li><strong>Effect on Cheese Making:</strong> Pasteurization causes ~15-20% whey protein denaturation (mainly β-LG) → β-LG-κ-casein complexes form → slightly impaired rennet coagulation (addressed by CaCl₂ addition). Also destroys native milk microflora → makes starter culture addition essential for controlled acidification</li>
                                <li><strong>Critical Limit:</strong> ≥72°C for ≥15 seconds. Monitored by: temperature recording chart, flow diversion valve (automatically diverts milk if <72°C), ALP test (must be negative)</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Cooling, CaCl₂ Addition & Starter Inoculation:</strong>
                            <p class="mt-2"><strong>Cooling:</strong> Pasteurized milk cooled to 30-32°C (optimal temperature for mesophilic starter growth and rennet activity) using plate heat exchanger.</p>
                            <p class="mt-2"><strong>CaCl₂ Addition (0.01-0.02%):</strong> Compensates for calcium equilibrium shift during pasteurization and cold storage. Provides additional Ca²⁺ for proper rennet gel firmness. Excess CaCl₂ (>0.05%) → excessively firm, rubbery curd → moisture retention problems.</p>
                            <p class="mt-2"><strong>Starter Culture:</strong></p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                                <li><strong>Type:</strong> Mesophilic mixed-strain cultures: Lactococcus lactis subsp. cremoris (primary acid producer, mild flavor), L. lactis subsp. lactis (acid producer, slightly more flavor contribution), Leuconostoc mesenteroides subsp. cremoris (citrate fermenter → diacetyl + CO₂ → flavor + small mechanical openness)</li>
                                <li><strong>Inoculation Rate:</strong> 1-2% of milk volume (direct vat inoculant/DVI or bulk starter)</li>
                                <li><strong>Acid Production Rate:</strong> Target: pH drop of 0.10-0.15 units during ripening period (30-60 min before rennet addition). Too fast → acid at rennet addition → weak gel, excessive fines loss. Too slow → delayed process, risk of bacteriophage (virus) attack on slow starters</li>
                                <li><strong>Phage Management:</strong> Bacteriophages (viruses that infect and kill LAB) are the #1 operational risk in cheese making. Attack can completely stop acidification → "dead vat" → total product loss. Prevention: strict hygiene, culture rotation (different phage-unrelated strains on alternate days), use of phage-resistant strains, air filtration in vat room</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Rennet Addition & Coagulation (CCP-2):</strong>
                            <p class="mt-2"><strong>Rennet Type:</strong> FPC (fermentation-produced chymosin) at 15-25 mL per 100L milk, diluted 1:10 in cold water, added with thorough mixing (2-3 min stirring), then stirring stopped to allow undisturbed gel formation.</p>
                            <p class="mt-2"><strong>Coagulation Time:</strong> 25-40 minutes at 30-32°C. Gel firmness increases with time after initial gelation.</p>
                            <p class="mt-2"><strong>Cutting Time Determination:</strong> Critical for cheese quality and yield!</p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li><strong>Traditional Method:</strong> "Finger test" — insert sanitized finger at 45° angle and lift → if curd splits cleanly with smooth fracture and clear (not milky) whey in fracture → ready to cut. If curd is mushy/doesn't split → too early. If curd is very firm/rubbery → too late (excessive syneresis already occurred)</li>
                                <li><strong>Instrumental Method:</strong> Formagraph, CoaguSens (measures gel firmness continuously via oscillating rheometry). Cut at 2× flocculation time or at target gel firmness (G' = 30-50 Pa)</li>
                            </ul>
                            <p class="mt-2"><strong>CCP-2 Rationale:</strong> Proper coagulation ensures: (a) optimal fat/casein recovery in curd (yield), (b) correct moisture retention, (c) desired texture development. Under-coagulation → weak gel → fines/fat loss in whey → poor yield. Over-coagulation → too firm → difficult cutting → poor moisture control</p>
                        </li>

                        <li>
                            <strong>Cutting, Healing, Stirring & Cooking:</strong>

                            <p class="mt-2"><strong>Cutting:</strong></p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                                <li>Coagulum cut using horizontal and vertical wire knives into <strong>6-12 mm cubes</strong></li>
                                <li>Curd cube size directly controls moisture: smaller cubes → more surface area → more whey loss → drier cheese. For Cheddar (target ~37% moisture): 9-12 mm cubes</li>
                                <li>Cutting speed: Moderate — too fast → curd shatters → fines loss (small curd fragments) → yield loss (0.5-2% fat loss possible). Too slow → uneven cube sizes → inconsistent moisture</li>
                            </ul>

                            <p class="mt-2"><strong>Healing (5 min):</strong> After cutting, curd cubes rest undisturbed for 5 minutes. Purpose: allow cut surfaces to "skin over" — casein matrix at surface contracts and forms a thin protein film (membrane) → reduces fat/fines loss during subsequent stirring</p>

                            <p class="mt-2"><strong>Gentle Stirring (10-15 min):</strong> Begin very gentle agitation to prevent curd settling (compaction) and promote uniform whey expulsion. Gradually increase stirring speed as curd firms</p>

                            <p class="mt-2"><strong>Cooking/Scalding (oPRP):</strong></p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                                <li><strong>Temperature Profile:</strong> Gradually raise temperature from 30-32°C to 38-42°C (target: 39°C for standard Cheddar) over 30-40 minutes at rate of 0.2-0.5°C per minute. <strong>NEVER exceed 1°C/min</strong> — sudden temperature increase causes "case hardening" (surface dries faster than interior → moisture trapped inside → wet, weak cheese)</li>
                                <li><strong>Scientific Effects of Cooking:</strong>
                                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                        <li>Increased syneresis: higher temperature → stronger hydrophobic interactions → protein network contracts → more whey expelled</li>
                                        <li>Starter culture modulation: mesophilic LAB (optimal 30°C) gradually inhibited above 38°C → slows acid production → prevents excessive acidification during cooking</li>
                                        <li>Curd firmness increase: cooking "sets" the protein matrix → firmer, more elastic curd particles that resist breaking during subsequent handling</li>
                                        <li>Moisture control: the single most important tool for controlling final cheese moisture. Higher cook temp → lower moisture. Every 1°C increase in cook temp ≈ 0.5-1.0% decrease in final cheese moisture</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>Whey Draining:</strong>
                            <p class="mt-2">When curd reaches target firmness and pH (6.15-6.25), free whey is drained from the vat. Curd settles to bottom (matting).</p>
                            <p class="mt-2"><strong>Whey Composition:</strong> ~93% water, 0.3% fat, 0.8% protein (mainly whey proteins: β-LG, α-LA, BSA), 4.8% lactose, 0.6% minerals. Whey represents ~85-90% of milk volume but only ~50% of milk solids → significant nutrient stream → recovered for whey powder, WPC, WPI, lactose production</p>
                        </li>

                        <li>
                            <strong>Cheddaring (CCP-3) — The Defining Step:</strong>
                            <p class="mt-2">Cheddaring is a <strong>Critical Control Point</strong> because it controls the final pH, texture, and body of the cheese through precisely managed acid development and mechanical manipulation of the curd.</p>

                            <p class="mt-2"><strong>Procedure (Traditional):</strong></p>
                            <ol class="list-decimal list-outside pl-5 space-y-2">
                                <li>After whey drainage, the matted curd mass is cut into <strong>rectangular slabs</strong> (~15 cm wide, 30-40 cm long, 10-15 cm thick)</li>
                                <li>Slabs are <strong>stacked 2-3 high</strong> on the vat floor. Their own weight provides gentle pressing → whey expulsion continues</li>
                                <li>Every <strong>10-15 minutes</strong>, the stack is <strong>turned</strong> (top slab moved to bottom, middle rotated). This ensures: (a) uniform acid development, (b) uniform temperature, (c) uniform mechanical compression, (d) uniform moisture loss</li>
                                <li>Process continues for <strong>1.5-2.5 hours</strong> until curd reaches target pH of <strong>5.2-5.4</strong></li>
                            </ol>

                            <p class="mt-2"><strong>Biochemical/Physical Changes During Cheddaring:</strong></p>
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                                <li><strong>pH Drop (6.2 → 5.2-5.4):</strong> Continued lactic acid production by starter LAB. At pH 5.2-5.4: ~75-80% of colloidal calcium phosphate (CCP) has dissolved from casein micelles → micelles lose internal structural support → casein molecules become more mobile and can flow/align under mechanical force</li>
                                <li><strong>Texture Transformation:</strong> Initially: crumbly, open, granular texture (pH 6.2) → Progressively: protein matrix becomes plasticized as CCP dissolves → casein molecules begin flowing → curd becomes smooth, pliable, and develops a <strong>characteristic fibrous/layered ("chicken breast")</strong> structure → this is the hallmark of properly cheddared curd</li>
                                <li><strong>Moisture Reduction:</strong> Whey continues seeping from curd under the weight of stacking → moisture decreases from ~40-42% to ~37-39% by end of cheddaring</li>
                                <li><strong>Temperature Maintenance:</strong> Curd kept at 35-38°C throughout cheddaring to maintain starter activity and optimal casein plasticity</li>
                            </ul>

                            <p class="mt-2"><strong>Endpoint Indicators:</strong></p>
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                <li><strong>pH:</strong> 5.2-5.4 (measured with calibrated pH meter — most reliable)</li>
                                <li><strong>"Hot Iron" Test (Traditional):</strong> Touch hot iron/spatula to curd surface → press and pull away → properly cheddared curd produces <strong>smooth, stringy threads 1-2 cm long</strong> (like mozzarella but shorter). Under-cheddared: no threads (too little acid, CCP still intact). Over-cheddared: curd crumbles (too much acid, pH <5.0, excessive CCP loss, protein dehydrated)</li>
                                <li><strong>Texture:</strong> Curd has smooth, fibrous, "chicken breast" appearance; tears in parallel layers</li>
                                <li><strong>Titratable Acidity:</strong> Whey from curd: 0.55-0.65% lactic acid</li>
                            </ul>

                            <p class="mt-2"><strong>CCP-3 Critical Limits and Corrective Actions:</strong></p>
                            <table class="min-w-full border-collapse border border-gray-300 mt-2">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="border border-gray-300 px-4 py-2">Parameter</th>
                                        <th class="border border-gray-300 px-4 py-2">Critical Limit</th>
                                        <th class="border border-gray-300 px-4 py-2">Corrective Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">Curd pH at milling</td>
                                        <td class="border border-gray-300 px-4 py-2">5.2-5.4</td>
                                        <td class="border border-gray-300 px-4 py-2">If >5.4: continue cheddaring (slow acid development → check starter activity, temperature). If <5.1: mill immediately (excessive acid → sour, crumbly cheese likely)</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">Cheddaring temperature</td>
                                        <td class="border border-gray-300 px-4 py-2">35-38°C</td>
                                        <td class="border border-gray-300 px-4 py-2">If <32°C: slow acid production → apply warm water to vat walls. If >40°C: starter killed → no further acid → rinse with cool water</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">Texture at milling</td>
                                        <td class="border border-gray-300 px-4 py-2">Smooth, fibrous, stringy on hot iron</td>
                                        <td class="border border-gray-300 px-4 py-2">If open/crumbly: insufficient acid development → continue cheddaring or adjust process for next batch</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>

                        <li>
                            <strong>Milling:</strong>
                            <p class="mt-2">The cheddared curd slabs (now smooth, fibrous) are fed through a <strong>curd mill</strong> that tears/cuts them into <strong>finger-sized chips</strong> (~1.5 × 1.5 × 5 cm). Purpose: (a) expose fresh surface area for uniform salt absorption, (b) create pieces small enough to pack tightly into molds, (c) promote whey drainage from freshly exposed surfaces.</p>
                        </li>

                        <li>
                            <strong>Salting:</strong>
                            <p class="mt-2"><strong>Method:</strong> Dry salting — granular NaCl (non-iodized, food-grade, flake or fine grain) mixed with milled curd at <strong>2.0-3.0% of curd weight</strong> (typically 2.5%). Mixed thoroughly by tumbling for 20-30 minutes to allow salt dissolution and absorption.</p>
                            <p class="mt-2"><strong>Target:</strong> Final cheese: 1.5-1.8% salt (w/w), salt-in-moisture (S/M): 4.5-5.5%</p>
                            <p class="mt-2"><strong>Effects:</strong></p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li>Draws 1-2% additional moisture from curd (osmotic syneresis)</li>
                                <li>Inhibits starter culture (most LAB inhibited above 4% S/M → acid production stops → pH stabilizes)</li>
                                <li>Inhibits spoilage/pathogenic bacteria (protective S/M >4.0%)</li>
                                <li>Enhances flavor, suppresses bitterness</li>
                                <li>Causes partial protein hydration → influences body/texture during ripening</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Hooping & Pressing (oPRP):</strong>
                            <p class="mt-2">Salted curd chips packed into stainless steel or food-grade plastic molds (hoops) lined with cheesecloth. Pressed using pneumatic or hydraulic presses:</p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li>Initial pressure: 70-100 kPa (1 hour) — light pressing to form initial block shape without trapping whey pockets</li>
                                <li>Full pressure: 150-300 kPa (3-12 hours, often overnight) — forms final consolidated block</li>
                                <li>Block turns: Molds turned (inverted) 1-2 times during pressing to ensure symmetric shape and uniform surface</li>
                                <li>Final block: 18-20 kg (standard) or 290 kg (barrel) depending on market</li>
                            </ul>
                            <p class="mt-2"><strong>oPRP Rationale:</strong> Proper pressing ensures: (a) air excluded (trapped air → holes → mold growth sites), (b) smooth, closed rind (barrier against contamination), (c) uniform moisture distribution, (d) final mechanical whey expulsion</p>
                        </li>

                        <li>
                            <strong>Packaging:</strong>
                            <p class="mt-2">Modern Cheddar is vacuum-packaged in multi-layer barrier film (PA/PE or PVDC laminate) immediately after pressing → excludes oxygen → prevents surface mold growth → allows "rindless" ripening. Traditional: waxed or cloth-bound (bandaged Cheddar) → develops natural rind → allows gas exchange during ripening → different flavor profile</p>
                        </li>

                        <li>
                            <strong>Ripening/Aging (CCP-4):</strong>
                            <p class="mt-2">This is where Cheddar develops its characteristic flavor, and it is designated <strong>CCP-4</strong> because temperature control during this extended period is critical for product safety and quality.</p>

                            <p class="mt-2"><strong>Ripening Conditions:</strong></p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li>Temperature: 6-12°C (lower: slower ripening, milder flavor, less risk of defects; higher: faster ripening, stronger flavor, more risk of off-flavors/gas formation)</li>
                                <li>Humidity: 85-95% RH (prevents excessive surface drying)</li>
                                <li>Duration: 2-24+ months depending on desired intensity</li>
                            </ul>

                            <p class="mt-2"><strong>Ripening Stages and Flavor Development:</strong></p>
                            <table class="min-w-full border-collapse border border-gray-300 mt-2">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="border border-gray-300 px-4 py-2">Age</th>
                                        <th class="border border-gray-300 px-4 py-2">Description</th>
                                        <th class="border border-gray-300 px-4 py-2">Key Biochemical Events</th>
                                        <th class="border border-gray-300 px-4 py-2">Flavor Profile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">0-2 weeks</td>
                                        <td class="border border-gray-300 px-4 py-2">Fresh/Green</td>
                                        <td class="border border-gray-300 px-4 py-2">Residual lactose fully consumed by LAB. pH stabilizes at 5.0-5.2. LAB population peaks then begins declining (autolysis begins)</td>
                                        <td class="border border-gray-300 px-4 py-2">Mild, acidic, bland, diacetyl (buttery) notes</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">2-8 weeks</td>
                                        <td class="border border-gray-300 px-4 py-2">Young/Mild</td>
                                        <td class="border border-gray-300 px-4 py-2">Initial proteolysis by residual rennet (α<sub>s1</sub>-casein → α<sub>s1</sub>-I). LAB lysis releases intracellular peptidases. NSLAB begin growing (10⁴→10⁷ CFU/g)</td>
                                        <td class="border border-gray-300 px-4 py-2">Mild, clean, slightly tangy, developing complexity</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">3-6 months</td>
                                        <td class="border border-gray-300 px-4 py-2">Medium/Standard</td>
                                        <td class="border border-gray-300 px-4 py-2">Significant proteolysis → accumulation of small peptides and free amino acids. Amino acid catabolism begins → volatile sulfur compounds (methanethiol), branched-chain aldehydes</td>
                                        <td class="border border-gray-300 px-4 py-2">Moderate sharpness, balanced, buttery, beginning of "Cheddar" character</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">6-12 months</td>
                                        <td class="border border-gray-300 px-4 py-2">Mature/Sharp</td>
                                        <td class="border border-gray-300 px-4 py-2">Advanced proteolysis. Extensive amino acid catabolism. Free fatty acid accumulation. Texture becomes more crumbly as protein matrix weakens</td>
                                        <td class="border border-gray-300 px-4 py-2">Sharp, complex, pungent, sulfurous notes, crystalline texture (tyrosine/calcium lactate crystals beginning)</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">12-24+ months</td>
                                        <td class="border border-gray-300 px-4 py-2">Extra-Sharp/Vintage</td>
                                        <td class="border border-gray-300 px-4 py-2">Near-complete α<sub>s1</sub>-casein breakdown. Tyrosine crystals visible as white spots. Calcium lactate crystals possible. Complex volatile profile: 200+ identified compounds</td>
                                        <td class="border border-gray-300 px-4 py-2">Very sharp, intense, complex, umami-rich (glutamate), crystalline crunch, lingering aftertaste</td>
                                    </tr>
                                </tbody>
                            </table>

                            <p class="mt-3"><strong>CCP-4 Critical Limits:</strong></p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li>Ripening temperature: ≤12°C (above 12°C → risk of Clostridium tyrobutyricum growth → late gas blowing defect, butyric acid off-flavor)</li>
                                <li>Vacuum integrity: Maintained throughout (broken seal → mold growth → surface defect, potential mycotoxin risk)</li>
                                <li>Regular quality checks: pH, flavor assessment (grading), visual inspection for defects</li>
                            </ul>
                        </li>
                    </ol>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Common Defects in Cheddar Cheese</h3>
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
                                <td class="border border-gray-300 px-4 py-2"><strong>Bitterness</strong></td>
                                <td class="border border-gray-300 px-4 py-2">Accumulation of hydrophobic bitter peptides (from α<sub>s1</sub>- and β-casein) not degraded by peptidases. Causes: excess rennet, slow/insufficient LAB autolysis, low NSLAB population, high cook temp (killing LAB prematurely)</td>
                                <td class="border border-gray-300 px-4 py-2">Optimize rennet dosage, use starter strains with high autolytic tendency (release intracellular peptidases), ensure adequate NSLAB development, proper S/M ratio (4.5-5.5%)</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2"><strong>Open/Mechanical Holes</strong></td>
                                <td class="border border-gray-300 px-4 py-2">Trapped air during pressing (inadequate vacuum, poor curd fusion). NOT gas production</td>
                                <td class="border border-gray-300 px-4 py-2">Adequate pressing pressure and duration. Vacuum-assisted pressing. Ensure curd at correct pH for good fusion (5.2-5.4)</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2"><strong>Gas Blowing (Late)</strong></td>
                                <td class="border border-gray-300 px-4 py-2">Clostridium tyrobutyricum spores (from silage-fed milk) germinate in cheese → ferment lactate → butyric acid + H₂ + CO₂ → large splits/cracks, rancid/foul odor. Occurs after 4-8 weeks aging</td>
                                <td class="border border-gray-300 px-4 py-2">Source milk from non-silage-fed cows. Bactofugation (removes 95%+ spores). Lysozyme addition (permitted in some countries). Nitrate addition (KNO₃, <50 mg/kg — inhibits clostridia)</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2"><strong>Weak/Pasty Body</strong></td>
                                <td class="border border-gray-300 px-4 py-2">Excessive moisture (MNFS >56%). Excessive proteolysis (too much rennet or ripening temp too high). Low S/M (<4.0%) → rapid, uncontrolled proteolysis</td>
                                <td class="border border-gray-300 px-4 py-2">Proper moisture control (cooking, cheddaring, pressing). Optimize rennet dose. Maintain S/M 4.5-5.5%. Ripen at ≤10°C for mild cheese</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2"><strong>Acid/Sour Flavor</strong></td>
                                <td class="border border-gray-300 px-4 py-2">Excessive acid development: pH <5.0 at pressing. Causes: too much starter, too fast acid production, over-cheddaring, insufficient salt (S/M <4.0%)</td>
                                <td class="border border-gray-300 px-4 py-2">Optimize starter rate (1-1.5%). Monitor pH during cheddaring. Mill at pH 5.3-5.4 (not lower). Ensure proper salting (2.5-3.0% of curd weight)</td>
                            </tr>
                        </tbody>
                    </table>
                `
            },
            mozzarella: {
                title: "B. Mozzarella Cheese Processing",
                content: `
                    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Mozzarella Cheese — Comprehensive Scientific Analysis</h2>
                    <p>Mozzarella is a semi-soft, <strong>pasta filata</strong> (stretched curd/spun paste) cheese that originated in southern Italy (Campania region, 16th century). Traditional Mozzarella di Bufala is made from Italian water buffalo milk (PDO protected); however, the vast majority of global Mozzarella production uses cow's milk (often called "Mozzarella" or "Pizza cheese" in commercial contexts).</p>

                    <p>Mozzarella is the <strong>single most consumed cheese variety globally</strong>, driven primarily by the pizza industry (pizza accounts for >70% of Mozzarella consumption). Global Mozzarella production exceeds 4 million metric tons annually, with the USA alone producing >2 million MT.</p>

                    <p><strong>Key Distinguishing Features:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                        <li><strong>Pasta Filata Process:</strong> Acidified curd is kneaded and stretched in hot water → creates unique <strong>aligned parallel fiber structure</strong> of casein proteins → responsible for characteristic stretching, melting, and peeling properties</li>
                        <li><strong>Functional Properties:</strong> Mozzarella is valued primarily for its <strong>functionality</strong> (meltability, stretchability, browning, oiling off) rather than flavor complexity</li>
                        <li><strong>pH Sensitivity:</strong> The stretching process is critically dependent on curd pH reaching exactly 5.1-5.4 — outside this range, stretching fails completely</li>
                    </ul>

                    <p><strong>Types of Mozzarella:</strong></p>
                    <table class="min-w-full border-collapse border border-gray-300 mt-3">
                        <thead>
                            <tr class="bg-gray-100">
                                <th class="border border-gray-300 px-4 py-2">Type</th>
                                <th class="border border-gray-300 px-4 py-2">Moisture (%)</th>
                                <th class="border border-gray-300 px-4 py-2">FDM (%)</th>
                                <th class="border border-gray-300 px-4 py-2">Application</th>
                                <th class="border border-gray-300 px-4 py-2">Shelf Life</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2">High-Moisture Mozzarella (Fresh)</td>
                                <td class="border border-gray-300 px-4 py-2">52-60%</td>
                                <td class="border border-gray-300 px-4 py-2">40-50%</td>
                                <td class="border border-gray-300 px-4 py-2">Fresh eating (Caprese salad), artisanal pizza</td>
                                <td class="border border-gray-300 px-4 py-2">7-21 days (refrigerated, in brine/water)</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2"><strong>Low-Moisture Mozzarella (LMMC)</strong></td>
                                <td class="border border-gray-300 px-4 py-2">45-52%</td>
                                <td class="border border-gray-300 px-4 py-2">≥45%</td>
                                <td class="border border-gray-300 px-4 py-2"><strong>Pizza, frozen foods, shredded cheese (primary commercial product)</strong></td>
                                <td class="border border-gray-300 px-4 py-2">4-8 weeks (vacuum-packed, refrigerated)</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2">Part-Skim Mozzarella</td>
                                <td class="border border-gray-300 px-4 py-2">52-60%</td>
                                <td class="border border-gray-300 px-4 py-2">30-45%</td>
                                <td class="border border-gray-300 px-4 py-2">Reduced-fat applications</td>
                                <td class="border border-gray-300 px-4 py-2">Similar to high-moisture</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Mozzarella Cheese</h3>
                    <div class="space-y-2 font-mono text-center">
                        <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Standardization (C/F: 0.90-1.15) & Pasteurization (72°C/15s) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling to 32-37°C + CaCl₂ (0.01-0.02%) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">Inoculation with Thermophilic Starter Culture (S. thermophilus + L. bulgaricus/helveticus)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-green-100 border border-green-300 rounded">Ripening (15-30 min, pH to 6.40-6.50)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Rennet Addition & Coagulation (20-30 min at 35-37°C) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cutting (10-15 mm cubes) → Healing (5 min)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cooking/Scalding (to 40-45°C over 15-25 min) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-purple-100 border border-purple-300 rounded">Whey Draining</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Curd Matting & Acid Development (pH 6.1→5.1-5.4, 1-3 hrs)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-red-100 border border-red-300 rounded"><strong>Stretching/Kneading (Pasta Filata) in Hot Water/Steam (68-80°C, 3-8 min)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-4</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-orange-100 border border-orange-300 rounded">Molding (balls, blocks, shredded)</div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-orange-100 border border-orange-300 rounded">Cooling in Cold Brine (4-10°C, 10-23% NaCl, 30 min-24 hrs) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                        <div class="text-2xl">↓</div>
                        <div class="p-3 bg-gray-200 border border-gray-400 rounded">Packaging (vacuum or in brine/water) & Refrigerated Storage (2-4°C)</div>
                    </div>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Scientific Explanation of Processing Steps</h3>
                    <ol class="list-decimal list-outside pl-5 space-y-6">
                        <li>
                            <strong>Milk Standardization & Pasteurization (CCP-1):</strong>
                            <p class="mt-2"><strong>Casein-to-Fat Ratio:</strong> Adjusted to 0.90-1.15 depending on desired fat content. Higher C/F (>1.0) → more protein relative to fat → better stretching (less fat interference with protein fiber alignment), lower meltability (desirable for pizza). Lower C/F (<0.95) → more fat → better melting, more oiling off (may be defect on pizza)</p>
                            <p class="mt-2"><strong>Pasteurization:</strong> Standard HTST (72°C/15s). Same principles as Cheddar. Critical for eliminating pathogens while minimizing whey protein denaturation (which impairs stretching)</p>
                        </li>

                        <li>
                            <strong>Starter Culture — Thermophilic System:</strong>
                            <p class="mt-2"><strong>Culture Composition:</strong></p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                                <li><strong>Streptococcus thermophilus:</strong> Primary acid producer. Ferments lactose (glucose moiety only) → L-lactic acid. Produces exopolysaccharides (EPS) → improves cheese moisture retention and texture. Optimal: 42-45°C</li>
                                <li><strong>Lactobacillus delbrueckii subsp. bulgaricus:</strong> Secondary acid producer. Ferments both glucose and galactose from lactose. Produces D-lactic acid. More proteolytic than S. thermophilus → contributes to flavor development. Optimal: 42-45°C</li>
                                <li><strong>Symbiotic Relationship (Protocooperation):</strong> S. thermophilus grows first (less acid-sensitive), producing formate and CO₂ that stimulate L. bulgaricus growth. L. bulgaricus's protease activity releases peptides/amino acids that stimulate S. thermophilus growth → mutual benefit → faster combined acid production than either alone</li>
                            </ul>
                            <p class="mt-2"><strong>Alternative: Direct Acidification</strong></p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li>Some industrial Mozzarella is made without starter cultures — instead, food-grade acid (citric acid, acetic acid, or lactic acid) is added directly to cold milk (pH adjusted to 5.5-5.8) before heating and rennet addition</li>
                                <li>Advantages: Faster process (no waiting for acid development), more consistent pH control, no phage risk</li>
                                <li>Disadvantages: Less complex flavor (no microbial metabolites), different texture (no EPS), regulatory restrictions in some countries (must declare "made with direct acidification")</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Coagulation, Cutting & Cooking:</strong>
                            <p class="mt-2">Similar principles to Cheddar but with differences:</p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                <li>Higher temperature (35-37°C vs. 30-32°C for Cheddar) — suits thermophilic starters</li>
                                <li>Larger curd pieces (10-15 mm vs. 6-12 mm for Cheddar) — retain more moisture (Mozzarella target: 52-60% vs. 36-39%)</li>
                                <li>Higher cook temperature (40-45°C vs. 38-42°C for Cheddar) — suits thermophilic organisms, promotes syneresis</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Acid Development — The Critical Pre-Stretch Step (CCP-3):</strong>
                            <p class="mt-2">This is arguably the most critical step in Mozzarella making. After whey drainage, the curd mat is held at 35-40°C to allow continued lactic acid production. The pH must reach <strong>exactly 5.1-5.4</strong> before stretching.</p>

                            <p class="mt-2"><strong>Why pH 5.1-5.4 is Critical — The Science of Stretchability:</strong></p>
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-3">
                                <li><strong>Colloidal Calcium Phosphate (CCP) Dissolution:</strong> At pH 6.7 (native milk), casein micelles contain ~7-8 mg CCP per g casein. As pH decreases:
                                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                        <li>pH 6.0: ~50% CCP dissolved → micelles begin loosening</li>
                                        <li>pH 5.5: ~70% CCP dissolved → significant structural loosening</li>
                                        <li><strong>pH 5.1-5.4: ~80-90% CCP dissolved → micelle internal structure largely destroyed → casein proteins become free to realign and flow under shear force → STRETCHABLE!</strong></li>
                                        <li>pH <5.0: >95% CCP dissolved + approaching isoelectric point (4.6) → excessive protein dehydration → casein matrix becomes brittle, crumbly, NON-stretchable</li>
                                    </ul>
                                </li>
                                <li><strong>Charge State of Casein:</strong> At pH 5.1-5.4, casein carries minimal net charge (close to but above isoelectric point) → reduced electrostatic repulsion between molecules → proteins can approach closely and form new hydrophobic/hydrogen-bond interactions upon heating → essential for fiber formation during stretching</li>
                                <li><strong>Calcium Content in Curd:</strong> At pH 5.2: curd retains ~25-28 mg Ca per g protein (vs. ~30 mg at pH 6.0). This intermediate calcium level is critical:
                                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                        <li>Too much Ca (high pH >5.6): protein matrix too rigid → doesn't soften in hot water → no stretching</li>
                                        <li>Optimal Ca (pH 5.1-5.4): enough Ca for protein interaction but enough CCP dissolved for plasticity → perfect stretching</li>
                                        <li>Too little Ca (low pH <5.0): excessive CCP dissolution → weak protein interactions → curd disintegrates in hot water instead of stretching</li>
                                    </ul>
                                </li>
                            </ul>

                            <p class="mt-2"><strong>CCP-3 Critical Limits:</strong></p>
                            <table class="min-w-full border-collapse border border-gray-300 mt-2">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="border border-gray-300 px-4 py-2">Parameter</th>
                                        <th class="border border-gray-300 px-4 py-2">Critical Limit</th>
                                        <th class="border border-gray-300 px-4 py-2">Monitoring</th>
                                        <th class="border border-gray-300 px-4 py-2">Corrective Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">Curd pH at stretching</td>
                                        <td class="border border-gray-300 px-4 py-2">5.1-5.4</td>
                                        <td class="border border-gray-300 px-4 py-2">pH meter every 15 min</td>
                                        <td class="border border-gray-300 px-4 py-2">If >5.4: wait for further acid development. If <5.0: stretch immediately (may be too acidic → crumbly texture → downgrade product)</td>
                                    </tr>
                                </tbody>
                            </table>

                            <p class="mt-2"><strong>Stretch Test (Quality Check Before Stretching):</strong> Take small piece of curd, immerse in 80°C water for 30 seconds → knead and pull. If it stretches into <strong>smooth, continuous, glossy strand 30-50 cm long without breaking</strong> → pH is correct, proceed to stretching. If it breaks/crumbles → pH not yet correct (check and wait) or too low (proceed cautiously)</p>
                        </li>

                        <li>
                            <strong>Pasta Filata — Stretching/Kneading (CCP-4) — The Defining Step:</strong>

                            <p class="mt-2">The pasta filata process is the <strong>most distinctive and scientifically fascinating step</strong> in Mozzarella production. It creates the unique fibrous protein structure responsible for Mozzarella's functional properties.</p>

                            <p class="mt-2"><strong>Process Description:</strong></p>
                            <ol class="list-decimal list-outside pl-5 space-y-2">
                                <li>Acidified curd (pH 5.1-5.4) is cut/milled into small pieces</li>
                                <li>Curd pieces immersed in <strong>hot water (68-80°C)</strong> or exposed to <strong>direct steam injection</strong> in a cooker/stretcher machine</li>
                                <li>The curd mass is <strong>mechanically kneaded and stretched</strong> using single-screw or twin-screw auger systems (industrial) or manually pulled and folded (artisanal)</li>
                                <li>Processing time: <strong>3-8 minutes</strong> at internal curd temperature of 57-65°C</li>
                                <li>The hot, plastic mass is then extruded or molded into desired shapes</li>
                            </ol>

                            <p class="mt-2"><strong>Scientific Mechanism of Fiber Formation:</strong></p>
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-3">
                                <li><strong>Heat Effect on Casein (57-65°C):</strong> At this temperature and at pH 5.1-5.4:
                                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                        <li>Hydrophobic interactions between casein molecules are maximized (hydrophobic interactions become stronger with increasing temperature up to ~60-70°C)</li>
                                        <li>Remaining calcium bridges become more labile (dynamic) → allow molecular rearrangement</li>
                                        <li>Casein matrix transitions from a <strong>rigid gel</strong> to a <strong>viscoelastic fluid</strong> (glass transition/softening) → flows under mechanical force</li>
                                    </ul>
                                </li>
                                <li><strong>Shear-Induced Alignment:</strong> When the softened casein mass is subjected to unidirectional mechanical stretching:
                                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                        <li>Randomly oriented casein aggregates/sub-micelles are forced to <strong>align parallel to the direction of stretch</strong></li>
                                        <li>The aligned proteins form continuous <strong>protein fibers</strong> (5-20 μm diameter, extending hundreds of microns in length)</li>
                                        <li>Between the protein fibers: <strong>channels of serum (water) and elongated fat globules</strong> also aligned parallel → creates a layered, anisotropic microstructure</li>
                                    </ul>
                                </li>
                                <li><strong>Fat Phase Behavior:</strong> During stretching at 57-65°C:
                                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                        <li>Most milk fat is liquid at this temperature (milk fat melting range: 28-40°C)</li>
                                        <li>Fat globules deform and elongate in the direction of stretch → form elongated pools/channels between protein fibers</li>
                                        <li>Some fat globule membrane disruption occurs → free fat release → contributes to oiling-off during pizza baking (desirable characteristic)</li>
                                    </ul>
                                </li>
                            </ul>

                            <p class="mt-2"><strong>Microstructure of Stretched Mozzarella (SEM/CLSM Studies):</strong></p>
                            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                <li>Parallel protein fibers (casein) — continuous phase providing strength</li>
                                <li>Elongated fat channels between fibers — lubricant, flavor carrier</li>
                                <li>Serum (water) channels — moisture retention, heat transfer during melting</li>
                                <li>Structure is <strong>highly anisotropic</strong> — properties differ in parallel vs. perpendicular direction to fibers</li>
                                <li>This is fundamentally different from Cheddar (isotropic, no fiber alignment) → explains different functional behavior</li>
                            </ul>

                            <p class="mt-2"><strong>CCP-4 Critical Parameters:</strong></p>
                            <table class="min-w-full border-collapse border border-gray-300 mt-2">
                                <thead>
                                    <tr class="bg-gray-100">
                                        <th class="border border-gray-300 px-4 py-2">Parameter</th>
                                        <th class="border border-gray-300 px-4 py-2">Optimal Range</th>
                                        <th class="border border-gray-300 px-4 py-2">Effect of Deviation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">Water/steam temperature</td>
                                        <td class="border border-gray-300 px-4 py-2">68-80°C</td>
                                        <td class="border border-gray-300 px-4 py-2">Too low (<65°C): insufficient plasticization → tough, non-stretchy. Too high (>85°C): excessive fat loss into water, surface scorching, protein degradation</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">Internal curd temperature</td>
                                        <td class="border border-gray-300 px-4 py-2">57-65°C</td>
                                        <td class="border border-gray-300 px-4 py-2">Critical window for optimal casein flow and fiber formation</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">Stretching time</td>
                                        <td class="border border-gray-300 px-4 py-2">3-8 min</td>
                                        <td class="border border-gray-300 px-4 py-2">Too short: incomplete fiber formation → poor stretch on pizza. Too long: excessive fat loss, tough texture, browning</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-300 px-4 py-2">Curd pH at stretching</td>
                                        <td class="border border-gray-300 px-4 py-2">5.1-5.4</td>
                                        <td class="border border-gray-300 px-4 py-2">As described above — most critical single parameter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>

                        <li>
                            <strong>Molding and Cooling in Brine:</strong>
                            <p class="mt-2"><strong>Molding:</strong> The hot, plastic curd (57-65°C) is extruded, cut, and shaped into desired forms: balls (bocconcini: 30g, cherry-sized; standard: 125g; ovoline: 250g), blocks (2.5-10 kg for industrial shredding), logs, or braids. Shape given by molds or mechanical formers.</p>

                            <p class="mt-2"><strong>Cooling in Brine:</strong></p>
                            <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                                <li><strong>Brine Composition:</strong> Saturated or near-saturated NaCl solution (18-23% w/v), maintained at 4-10°C, pH adjusted to 5.2 with lactic acid (prevents surface softening)</li>
                                <li><strong>Cooling Time:</strong> 30 min for small balls → 6-24 hours for large blocks. Core temperature target: <10°C</li>
                                <li><strong>Dual Function:</strong>
                                    <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                        <li><strong>Rapid cooling:</strong> Stops stretching process, solidifies fat, "sets" the fibrous structure, prevents further acid development by LAB</li>
                                        <li><strong>Salt absorption:</strong> NaCl diffuses into cheese surface → salt gradient from rind to center (equilibrates over days-weeks). Target final salt: 1.0-1.8% (w/w)</li>
                                    </ul>
                                </li>
                                <li><strong>Salt Diffusion:</strong> Follows Fick's second law of diffusion. Diffusion coefficient of NaCl in Mozzarella: ~2.5-3.5 × 10⁻¹⁰ m²/s at 10°C. Equilibration time: 3-7 days for 2.5 kg block</li>
                            </ul>
                        </li>

                        <li>
                            <strong>Packaging and Storage:</strong>
                            <p class="mt-2"><strong>Fresh/High-Moisture Mozzarella:</strong> Packaged in water, light brine (2-4% NaCl), or whey. Stored at 2-4°C. Shelf life: 7-21 days. Must maintain cold chain rigorously (a<sub>w</sub> ~0.97 → supports microbial growth if temperature abused)</p>
                            <p class="mt-2"><strong>Low-Moisture Mozzarella (LMMC):</strong> Vacuum-packaged in barrier film. Stored at 2-4°C. Requires <strong>aging for 7-21 days before use on pizza</strong> — during this period, limited proteolysis occurs → improves meltability and reduces rubbery texture of fresh LMMC.</p>
                        </li>
                    </ol>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Mozzarella Functional Properties — Pizza Performance Science</h3>

                    <p>Mozzarella's commercial value is determined primarily by its <strong>functional performance on pizza</strong>. Key functional properties:</p>

                    <table class="min-w-full border-collapse border border-gray-300 mt-3">
                        <thead>
                            <tr class="bg-gray-100">
                                <th class="border border-gray-300 px-4 py-2">Property</th>
                                <th class="border border-gray-300 px-4 py-2">Definition</th>
                                <th class="border border-gray-300 px-4 py-2">Optimal Behavior</th>
                                <th class="border border-gray-300 px-4 py-2">Scientific Basis</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2"><strong>Meltability</strong></td>
                                <td class="border border-gray-300 px-4 py-2">Ease and extent of flow when heated</td>
                                <td class="border border-gray-300 px-4 py-2">Uniform melting, smooth flow, no charring</td>
                                <td class="border border-gray-300 px-4 py-2">At >60°C: hydrophobic interactions weaken → casein matrix softens → flows. Higher fat → more melt. More proteolysis (aging) → weaker matrix → more melt. Lower Ca → less cross-linking → more melt</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2"><strong>Stretchability</strong></td>
                                <td class="border border-gray-300 px-4 py-2">Ability to form long, continuous strands when pulled</td>
                                <td class="border border-gray-300 px-4 py-2">20-40 cm stretch without breaking at 60-70°C</td>
                                <td class="border border-gray-300 px-4 py-2">Aligned protein fibers (from pasta filata) act as reinforcing elements → resist breaking → form long strands. Optimal at intermediate proteolysis level (7-14 days age)</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2"><strong>Browning</strong></td>
                                <td class="border border-gray-300 px-4 py-2">Development of golden-brown color during baking</td>
                                <td class="border border-gray-300 px-4 py-2">Uniform golden-brown spots, not black/charred</td>
                                <td class="border border-gray-300 px-4 py-2">Maillard reaction between residual reducing sugars (galactose, lactose) and milk proteins at oven temperatures (250-300°C). More residual galactose → more browning. S. thermophilus-only cultures leave galactose unfermented → excessive browning!</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2"><strong>Oiling Off</strong></td>
                                <td class="border border-gray-300 px-4 py-2">Release of free fat on surface during heating</td>
                                <td class="border border-gray-300 px-4 py-2">Moderate (glossy, appetizing appearance) but not excessive (greasy, pooling)</td>
                                <td class="border border-gray-300 px-4 py-2">Fat melts at ~32-37°C → disrupted MFGM → free fat released from protein matrix. Higher FDM → more oiling off. More proteolysis → weaker matrix → easier fat release</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2"><strong>Blistering</strong></td>
                                <td class="border border-gray-300 px-4 py-2">Formation of brown spots/bubbles on surface</td>
                                <td class="border border-gray-300 px-4 py-2">Small, numerous, uniform blisters (aesthetic appeal)</td>
                                <td class="border border-gray-300 px-4 py-2">Water near surface evaporates → steam trapped under melting cheese skin → lifts surface → exposed area browns via Maillard. More moisture → larger blisters</td>
                            </tr>
                        </tbody>
                    </table>

                    <p class="mt-3"><strong>The Browning Problem — Galactose Accumulation:</strong></p>
                    <p>A critical issue in Mozzarella manufacturing: <em>S. thermophilus</em> (primary starter) ferments ONLY the glucose moiety of lactose → galactose accumulates in cheese (up to 1.0-1.5% w/w). Galactose is a highly reactive reducing sugar → participates readily in Maillard browning at pizza oven temperatures → excessive, uncontrolled browning → scorched appearance → consumer rejection.</p>

                    <p><strong>Solutions:</strong></p>
                    <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                        <li>Use galactose-fermenting <em>L. helveticus</em> alongside <em>S. thermophilus</em> → metabolizes accumulated galactose → reduces browning</li>
                        <li>Select galactose-positive mutant strains of <em>S. thermophilus</em> (Gal+ strains) → ferment both glucose and galactose</li>
                        <li>Extended aging (>14 days) → allows NSLAB to ferment residual galactose</li>
                        <li>Washing curd with water before stretching → dilutes galactose in serum → reduces browning potential</li>
                    </ul>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Common Defects in Mozzarella Cheese</h3>
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
                                <td class="border border-gray-300 px-4 py-2"><strong>Poor Stretchability</strong></td>
                                <td class="border border-gray-300 px-4 py-2">pH too high (>5.5: insufficient CCP dissolution → rigid matrix). pH too low (<5.0: excessive CCP loss → weak, crumbly). Excessive proteolysis (over-aged). Low casein content</td>
                                <td class="border border-gray-300 px-4 py-2">Precise pH control (5.1-5.4 at stretching). Age optimization (7-14 days for pizza use). Adequate casein in milk (C/F ≥0.90)</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2"><strong>Excessive Browning</strong></td>
                                <td class="border border-gray-300 px-4 py-2">High residual galactose (from S. thermophilus-only cultures). High lactose retention. Low pH (accelerates Maillard)</td>
                                <td class="border border-gray-300 px-4 py-2">Use Gal+ starters or include L. helveticus. Curd washing. Extended aging to consume residual sugars</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2"><strong>Excessive Oiling Off</strong></td>
                                <td class="border border-gray-300 px-4 py-2">High FDM (>50%). Extensive MFGM disruption during stretching. Excessive proteolysis → weak protein matrix cannot hold fat</td>
                                <td class="border border-gray-300 px-4 py-2">Standardize milk to appropriate C/F. Minimize stretching time. Use within optimal age window</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2"><strong>Rubbery/Tough Texture</strong></td>
                                <td class="border border-gray-300 px-4 py-2">Too fresh (insufficient proteolysis for matrix softening). Low moisture. High calcium (high pH at stretching). Excessive stretching time/temperature</td>
                                <td class="border border-gray-300 px-4 py-2">Age minimum 7-10 days before pizza use. Target higher moisture. Optimize stretching conditions. Ensure proper pH development</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2"><strong>Pink Discoloration</strong></td>
                                <td class="border border-gray-300 px-4 py-2">Maillard reaction between galactose and amino acids at alkaline micro-environments (surface pH variation). Annatto color interaction with reducing sugars. Light-induced reactions</td>
                                <td class="border border-gray-300 px-4 py-2">Reduce galactose (Gal+ starters). Avoid annatto. Opaque packaging. Uniform pH throughout cheese</td>
                            </tr>
                        </tbody>
                    </table>
                `
            }
        }
    },
        hi: {
            title: "Cheese Processing",
            content: `
                <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Cheese</h3>
                <p>Cheese is a concentrated, fermented dairy product derived from milk through the selective coagulation and concentration of the casein protein fraction, with simultaneous entrapment of milk fat, minerals, and water within the protein matrix. It represents one of humanity's oldest biotechnological achievements — evidence of cheese making dates back to ~7,000 BCE in the Fertile Crescent (modern-day Turkey/Iraq), predating written history. Cheese making is fundamentally a <strong>dehydration and preservation process</strong> that converts perishable liquid milk (shelf life: 2-5 days) into a stable, nutrient-dense solid food (shelf life: weeks to years depending on variety).</p>
    
                <p><strong>Scientific Definition:</strong> Cheese is the fresh or ripened product obtained by coagulating milk proteins (primarily casein) through the action of rennet (enzymatic coagulation), acid (acid coagulation), or a combination thereof, followed by partial dehydration of the resulting coagulum (curd) through whey expulsion (syneresis), with or without further biochemical transformation during ripening/aging.</p>
    
                <p><strong>Global Market Context:</strong></p>
                <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                    <li>Global cheese production: ~22-24 million metric tons annually (2023)</li>
                    <li>Global market value: ~$85-95 billion (growing at 3-4% CAGR)</li>
                    <li>Top producers: USA (~6.0 MMT), Germany (~2.4 MMT), France (~1.9 MMT), Italy (~1.3 MMT), Netherlands (~0.9 MMT)</li>
                    <li>India's cheese market: ~$0.8-1.0 billion (growing at 15-18% CAGR — one of the fastest globally)</li>
                    <li>Indian per capita cheese consumption: ~0.2 kg/year (vs. France: 27 kg, USA: 18 kg, global average: 3 kg) — enormous growth potential</li>
                    <li>Over <strong>1,800 named varieties</strong> worldwide, classified by texture, fat content, ripening method, milk source, and manufacturing technique</li>
                    <li>Approximately 10 liters of milk produces 1 kg of cheese (concentration factor: ~10×)</li>
                </ul>
    
                <p><strong>Classification of Cheese:</strong></p>
                <table class="min-w-full border-collapse border border-gray-300 mt-3">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="border border-gray-300 px-4 py-2">Classification Basis</th>
                            <th class="border border-gray-300 px-4 py-2">Category</th>
                            <th class="border border-gray-300 px-4 py-2">Moisture (%)</th>
                            <th class="border border-gray-300 px-4 py-2">Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2" rowspan="5"><strong>By Moisture/Texture (Codex Alimentarius)</strong></td>
                            <td class="border border-gray-300 px-4 py-2">Extra-Hard</td>
                            <td class="border border-gray-300 px-4 py-2"><36%</td>
                            <td class="border border-gray-300 px-4 py-2">Parmesan (Parmigiano-Reggiano), Grana Padano</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Hard</td>
                            <td class="border border-gray-300 px-4 py-2">36-40%</td>
                            <td class="border border-gray-300 px-4 py-2">Cheddar, Gouda, Emmental, Swiss</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Semi-Hard</td>
                            <td class="border border-gray-300 px-4 py-2">40-50%</td>
                            <td class="border border-gray-300 px-4 py-2">Edam, Provolone, Havarti</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Semi-Soft</td>
                            <td class="border border-gray-300 px-4 py-2">50-60%</td>
                            <td class="border border-gray-300 px-4 py-2">Mozzarella, Morbier, Limburger</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Soft</td>
                            <td class="border border-gray-300 px-4 py-2">>60%</td>
                            <td class="border border-gray-300 px-4 py-2">Brie, Camembert, Cream Cheese, Paneer, Cottage Cheese</td>
                        </tr>
                    </tbody>
                </table>
    
                <table class="min-w-full border-collapse border border-gray-300 mt-3">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="border border-gray-300 px-4 py-2">Classification Basis</th>
                            <th class="border border-gray-300 px-4 py-2">Category</th>
                            <th class="border border-gray-300 px-4 py-2">Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2" rowspan="4"><strong>By Ripening Method</strong></td>
                            <td class="border border-gray-300 px-4 py-2">Unripened (Fresh)</td>
                            <td class="border border-gray-300 px-4 py-2">Paneer, Cottage Cheese, Ricotta, Cream Cheese, Queso Fresco</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Bacteria-Ripened (Interior)</td>
                            <td class="border border-gray-300 px-4 py-2">Cheddar, Gouda, Emmental (with Propionibacterium for eyes/holes)</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Mold-Ripened (Surface)</td>
                            <td class="border border-gray-300 px-4 py-2">Brie, Camembert (Penicillium camemberti — white mold)</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Mold-Ripened (Internal/Blue)</td>
                            <td class="border border-gray-300 px-4 py-2">Roquefort, Gorgonzola, Stilton (Penicillium roqueforti — blue-green mold)</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2" rowspan="3"><strong>By Coagulation Method</strong></td>
                            <td class="border border-gray-300 px-4 py-2">Enzymatic (Rennet)</td>
                            <td class="border border-gray-300 px-4 py-2">Cheddar, Mozzarella, Gouda, Parmesan (most world cheeses)</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Acid</td>
                            <td class="border border-gray-300 px-4 py-2">Cottage Cheese, Quark, Paneer (heat-acid), Cream Cheese</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Combined (Rennet + Acid)</td>
                            <td class="border border-gray-300 px-4 py-2">Many fresh cheeses, some Feta varieties</td>
                        </tr>
                    </tbody>
                </table>
    
                <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Fundamental Science of Cheese Making</h3>
    
                <h4 class="font-semibold mt-4 mb-2">1. Casein Chemistry — The Foundation of Cheese</h4>
    
                <p>Casein proteins constitute ~80% of total milk protein (26-28 g/L in cow's milk) and are the <strong>primary structural component of cheese</strong>. Understanding casein structure is essential to understanding cheese making.</p>
    
                <p><strong>Casein Micelle Structure:</strong></p>
                <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                    <li><strong>Composition:</strong> Casein micelles are large colloidal aggregates (50-500 nm diameter, average ~150 nm) containing four types of casein proteins: α<sub>s1</sub>-casein (38%), α<sub>s2</sub>-casein (10%), β-casein (36%), and κ-casein (13%), plus colloidal calcium phosphate (CCP, ~8% of micelle dry weight)</li>
                    <li><strong>Internal Structure:</strong> α<sub>s1</sub>, α<sub>s2</sub>, and β-caseins are calcium-sensitive — they aggregate in presence of Ca²⁺ ions. They form the interior core of the micelle, held together by hydrophobic interactions, calcium bridges (Ca²⁺ linking phosphoserine residues on different casein molecules), and CCP nanoclusters (amorphous calcium phosphate particles ~2-3 nm diameter, ~800 per micelle)</li>
                    <li><strong>Surface Layer:</strong> κ-casein is uniquely NOT calcium-sensitive (lacks phosphoserine clusters). It sits preferentially on the micelle surface, acting as a <strong>protective hairy layer</strong>. Its hydrophilic C-terminal region (the "glycomacropeptide" or GMP, amino acids 106-169) extends outward into the serum phase like bristles</li>
                    <li><strong>Colloidal Stability:</strong> The κ-casein hairy layer provides TWO stabilization mechanisms:
                        <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                            <li><strong>Steric Stabilization:</strong> The extended GMP bristles physically prevent micelles from approaching close enough to aggregate (steric repulsion, effective range: 5-10 nm)</li>
                            <li><strong>Electrostatic Stabilization:</strong> GMP is negatively charged at milk pH (6.7) due to sialic acid residues (N-acetylneuraminic acid, pKa ~2.6) and phosphoserine residues → net negative surface charge (zeta potential: -15 to -20 mV) → electrostatic repulsion between micelles</li>
                        </ul>
                    </li>
                    <li><strong>Result:</strong> In native milk, casein micelles remain dispersed as a stable colloidal suspension — milk does NOT coagulate spontaneously. To make cheese, we must <strong>destabilize</strong> this colloidal system!</li>
                </ul>
    
                <h4 class="font-semibold mt-4 mb-2">2. Coagulation Mechanisms — Destabilizing the Micelle</h4>
    
                <p><strong>A) Enzymatic (Rennet) Coagulation — Primary Method for Most Cheeses:</strong></p>
    
                <p><strong>The Enzyme:</strong> Chymosin (EC 3.4.23.4), also called rennin, is an aspartic protease originally extracted from the abomasum (fourth stomach) of unweaned calves. It is now predominantly produced by microbial fermentation (fermentation-produced chymosin — FPC, using genetically modified Aspergillus niger or Kluyveromyces lactis expressing bovine chymosin gene). FPC accounts for >90% of global rennet supply.</p>
    
                <p><strong>Mechanism of Action — Two-Phase Process:</strong></p>
    
                <p><strong>Phase 1: Enzymatic (Primary) Phase — κ-Casein Hydrolysis</strong></p>
                <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                    <li>Chymosin specifically cleaves the <strong>Phe₁₀₅-Met₁₀₆ peptide bond</strong> of κ-casein — the single most important bond in all of cheese making!</li>
                    <li>This splits κ-casein into two fragments:
                        <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                            <li><strong>Para-κ-casein</strong> (residues 1-105): Hydrophobic, remains attached to micelle surface. Lost its protective function</li>
                            <li><strong>Glycomacropeptide/CMP</strong> (residues 106-169): Hydrophilic, highly glycosylated, diffuses into serum (whey). This is the protective "hairy" portion — its removal is devastating to micelle stability!</li>
                        </ul>
                    </li>
                    <li><strong>Kinetics:</strong> The enzymatic phase follows Michaelis-Menten kinetics. At typical cheese making conditions (30-32°C, pH 6.5, 200 mL rennet per 1000 L milk), ~85% of κ-casein is hydrolyzed within 15-20 minutes. Coagulation requires >80% κ-casein cleavage</li>
                    <li><strong>Specificity:</strong> Chymosin's remarkable specificity for Phe₁₀₅-Met₁₀₆ is due to complementary binding interactions with surrounding amino acid sequence. Other proteases (pepsin, microbial proteases) are less specific → cleave additional bonds → higher non-specific proteolysis → bitter peptide generation → flavor defects</li>
                </ul>
    
                <p><strong>Phase 2: Non-Enzymatic (Secondary) Phase — Aggregation</strong></p>
                <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                    <li>Once ~85% of κ-casein is cleaved, destabilized (para-κ-casein-coated) micelles begin aggregating</li>
                    <li><strong>Driving Forces for Aggregation:</strong>
                        <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                            <li>Loss of steric repulsion (GMP removed → no more bristle barrier)</li>
                            <li>Reduced electrostatic repulsion (sialic acid removed with GMP → less negative charge)</li>
                            <li>Exposed hydrophobic patches on para-κ-casein → hydrophobic attractions between micelles</li>
                            <li>Calcium bridging: Ca²⁺ ions in serum bridge negatively charged sites on adjacent micelles → cross-linking</li>
                        </ul>
                    </li>
                    <li><strong>Gel Formation:</strong> Aggregating micelles form chains → chains branch → branched chains form 3D network → continuous gel (like a sponge). This gel entraps fat globules and serum within its pores → the "coagulum" or "curd"</li>
                    <li><strong>Time to Gel Point:</strong> Typically 25-40 minutes at 30-32°C after rennet addition. Gel strength continues increasing after initial gelation</li>
                    <li><strong>Calcium Requirement:</strong> Ca²⁺ ions are essential for Phase 2 aggregation. Added CaCl₂ (0.01-0.02%, 10-20 g per 100 L milk) ensures sufficient ionic calcium for proper coagulation, especially in pasteurized milk (pasteurization causes slight calcium shift from colloidal to soluble phase, then precipitation of soluble calcium on cooling)</li>
                </ul>
    
                <p><strong>Factors Affecting Rennet Coagulation:</strong></p>
                <table class="min-w-full border-collapse border border-gray-300 mt-3">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="border border-gray-300 px-4 py-2">Factor</th>
                            <th class="border border-gray-300 px-4 py-2">Effect on Coagulation</th>
                            <th class="border border-gray-300 px-4 py-2">Optimal Range</th>
                            <th class="border border-gray-300 px-4 py-2">Scientific Explanation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2"><strong>Temperature</strong></td>
                            <td class="border border-gray-300 px-4 py-2">Higher temp → faster coagulation (up to 42°C)</td>
                            <td class="border border-gray-300 px-4 py-2">30-35°C</td>
                            <td class="border border-gray-300 px-4 py-2">Enzyme activity increases with temperature (Q₁₀ ≈ 2). Hydrophobic interactions for aggregation also stronger at higher T. Above 42°C: enzyme denaturation begins</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2"><strong>pH</strong></td>
                            <td class="border border-gray-300 px-4 py-2">Lower pH → faster coagulation, firmer gel</td>
                            <td class="border border-gray-300 px-4 py-2">6.0-6.5 (natural milk: 6.6-6.7)</td>
                            <td class="border border-gray-300 px-4 py-2">Chymosin pH optimum: ~4.0, but activity significant at pH 6.0-6.5. Lower pH also reduces electrostatic repulsion (closer to casein isoelectric point: 4.6) → faster aggregation. CCP begins dissolving below pH 5.8 → weakens micelle</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2"><strong>Calcium (Ca²⁺)</strong></td>
                            <td class="border border-gray-300 px-4 py-2">More Ca²⁺ → faster, firmer coagulation</td>
                            <td class="border border-gray-300 px-4 py-2">Addition of 0.01-0.02% CaCl₂</td>
                            <td class="border border-gray-300 px-4 py-2">Ca²⁺ bridges required for Phase 2 micelle aggregation. Also neutralizes negative charges → reduces repulsion. Excess Ca²⁺ (>0.05%) → excessively firm, rubbery curd</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2"><strong>Casein Concentration</strong></td>
                            <td class="border border-gray-300 px-4 py-2">Higher casein → faster, firmer gel</td>
                            <td class="border border-gray-300 px-4 py-2">2.4-2.8% casein</td>
                            <td class="border border-gray-300 px-4 py-2">More micelles = shorter distance between them = faster collision/aggregation. Denser gel network → firmer curd → higher cheese yield</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2"><strong>Rennet Concentration</strong></td>
                            <td class="border border-gray-300 px-4 py-2">More rennet → faster Phase 1 (enzyme phase)</td>
                            <td class="border border-gray-300 px-4 py-2">15-30 mL/100L milk</td>
                            <td class="border border-gray-300 px-4 py-2">More enzyme molecules → faster κ-casein cleavage → faster onset of Phase 2. Does NOT affect Phase 2 rate (non-enzymatic). Excess rennet → excessive proteolysis during aging → bitterness</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2"><strong>Heat Treatment of Milk</strong></td>
                            <td class="border border-gray-300 px-4 py-2">Higher heat → weaker/slower coagulation</td>
                            <td class="border border-gray-300 px-4 py-2">HTST: 72°C/15s (standard)</td>
                            <td class="border border-gray-300 px-4 py-2">Heat denatures whey proteins → β-LG complexes with κ-casein via disulfide bonds → blocks chymosin access to Phe₁₀₅-Met₁₀₆ bond → impaired coagulation. UHT milk: essentially non-coagulable by rennet</td>
                        </tr>
                    </tbody>
                </table>
    
                <p class="mt-4"><strong>B) Acid Coagulation — For Fresh Cheeses (Paneer, Cottage Cheese):</strong></p>
                <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                    <li><strong>Mechanism:</strong> Lowering pH toward casein isoelectric point (pI = 4.6) → progressive neutralization of negative charges on casein micelles → electrostatic repulsion eliminated → micelles aggregate</li>
                    <li><strong>CCP Dissolution:</strong> Below pH 5.0, colloidal calcium phosphate (CCP) dissolves completely → casein micelles disintegrate into individual casein molecules → these re-aggregate into an acid gel/precipitate</li>
                    <li><strong>Gel Properties:</strong> Acid gels are fundamentally different from rennet gels — they are weaker, more fragile, higher moisture (lack calcium cross-bridges), no syneresis tendency (whey must be expelled mechanically)</li>
                    <li><strong>Applications:</strong> Paneer (heat-acid coagulation: hot milk + acid → simultaneous denaturation + coagulation → firm texture), Cottage Cheese (acid + mild rennet), Cream Cheese, Quark, Chenna</li>
                </ul>
    
                <h4 class="font-semibold mt-4 mb-2">3. Syneresis — Whey Expulsion</h4>
                <p>After coagulation, the gel (curd) must lose whey to concentrate the solids and reduce moisture to the desired level for the cheese variety. This process is called <strong>syneresis</strong>.</p>
    
                <p><strong>Mechanism:</strong> The casein gel network is a dynamic structure that continuously rearranges — protein strands contract, fuse, and form tighter bonds → network shrinks → whey squeezed out of pores. Think of wringing a sponge — the casein network "wrings itself."</p>
    
                <p><strong>Factors That Increase Syneresis (Reduce Cheese Moisture):</strong></p>
                <table class="min-w-full border-collapse border border-gray-300 mt-3">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="border border-gray-300 px-4 py-2">Factor</th>
                            <th class="border border-gray-300 px-4 py-2">Effect</th>
                            <th class="border border-gray-300 px-4 py-2">Scientific Mechanism</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Smaller curd pieces (finer cutting)</td>
                            <td class="border border-gray-300 px-4 py-2">↑↑ syneresis</td>
                            <td class="border border-gray-300 px-4 py-2">Greater surface area → shorter diffusion path for whey → faster moisture loss</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Higher cooking temperature</td>
                            <td class="border border-gray-300 px-4 py-2">↑↑ syneresis</td>
                            <td class="border border-gray-300 px-4 py-2">Increased hydrophobic interactions → protein network contracts more → squeezes out more whey. Also increases enzymatic/microbial activity → more acid → more contraction</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Lower pH (more acid)</td>
                            <td class="border border-gray-300 px-4 py-2">↑↑ syneresis</td>
                            <td class="border border-gray-300 px-4 py-2">CCP dissolves → protein network loses structural hydration → contracts → whey expelled. Also reduces charge repulsion → protein strands approach more closely</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">More stirring/agitation</td>
                            <td class="border border-gray-300 px-4 py-2">↑ syneresis</td>
                            <td class="border border-gray-300 px-4 py-2">Mechanical action promotes curd contraction and prevents whey pooling around curd particles</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">More pressing force</td>
                            <td class="border border-gray-300 px-4 py-2">↑ syneresis</td>
                            <td class="border border-gray-300 px-4 py-2">External pressure physically forces whey out of gel pores</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Salt addition</td>
                            <td class="border border-gray-300 px-4 py-2">↑ syneresis</td>
                            <td class="border border-gray-300 px-4 py-2">Osmotic effect: NaCl draws water from curd. Also promotes protein-protein interactions (salting out effect)</td>
                        </tr>
                    </tbody>
                </table>
    
                <p class="mt-3"><strong>Cheese Variety and Syneresis Control:</strong></p>
                <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                    <li><strong>High-moisture cheese (Mozzarella, 52-60%):</strong> Gentle cutting, low cooking temperature, minimal pressing → retain moisture</li>
                    <li><strong>Medium-moisture cheese (Cheddar, 36-39%):</strong> Moderate cutting, cooking to 38-42°C, cheddaring process, moderate pressing</li>
                    <li><strong>Low-moisture cheese (Parmesan, <32%):</strong> Fine cutting, high cooking (48-55°C), extended pressing, long brining → maximum moisture removal</li>
                </ul>
    
                <h4 class="font-semibold mt-4 mb-2">4. Starter Culture Microbiology</h4>
                <p>Starter cultures are defined populations of lactic acid bacteria (LAB) deliberately added to cheese milk to initiate and control acidification, contribute to flavor development, and influence texture.</p>
    
                <table class="min-w-full border-collapse border border-gray-300 mt-3">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="border border-gray-300 px-4 py-2">Culture Type</th>
                            <th class="border border-gray-300 px-4 py-2">Organisms</th>
                            <th class="border border-gray-300 px-4 py-2">Optimal Temperature</th>
                            <th class="border border-gray-300 px-4 py-2">Cheese Applications</th>
                            <th class="border border-gray-300 px-4 py-2">Key Metabolic Activities</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2"><strong>Mesophilic</strong></td>
                            <td class="border border-gray-300 px-4 py-2"><em>Lactococcus lactis</em> subsp. <em>lactis</em>, <em>L. lactis</em> subsp. <em>cremoris</em>, <em>Leuconostoc mesenteroides</em></td>
                            <td class="border border-gray-300 px-4 py-2">25-35°C</td>
                            <td class="border border-gray-300 px-4 py-2">Cheddar, Gouda, Edam, Cottage Cheese, Feta</td>
                            <td class="border border-gray-300 px-4 py-2">Lactose → Lactic acid (homofermentative). Citrate → Diacetyl + CO₂ (flavor + eye formation in some cheeses)</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2"><strong>Thermophilic</strong></td>
                            <td class="border border-gray-300 px-4 py-2"><em>Streptococcus thermophilus</em>, <em>Lactobacillus delbrueckii</em> subsp. <em>bulgaricus</em>, <em>L. helveticus</em></td>
                            <td class="border border-gray-300 px-4 py-2">37-45°C</td>
                            <td class="border border-gray-300 px-4 py-2">Mozzarella, Parmesan, Swiss/Emmental, Provolone</td>
                            <td class="border border-gray-300 px-4 py-2">Lactose → Lactic acid at higher temperatures. L. helveticus produces highly proteolytic enzymes → accelerated ripening, reduced bitterness</td>
                        </tr>
                    </tbody>
                </table>
    
                <p class="mt-3"><strong>Lactic Acid Production — The Central Biochemical Reaction:</strong></p>
                <p class="font-mono">Lactose (C₁₂H₂₂O₁₁) → 4 Lactic Acid (C₃H₆O₃)</p>
                <p>Pathway: Lactose → (β-galactosidase) → Glucose + Galactose → (Embden-Meyerhof glycolysis) → Pyruvate → (lactate dehydrogenase) → L(+)-Lactic Acid</p>
                <p><strong>Typical pH changes during cheese making:</strong> Milk pH 6.65 → After ripening: 6.50 → At cutting: 6.45 → At draining: 6.20-6.40 → During cheddaring/acidification: pH drops to 5.2-5.4 → Final cheese after pressing: pH 5.0-5.3</p>
    
                <h4 class="font-semibold mt-4 mb-2">5. Role of Salt (NaCl) in Cheese</h4>
                <p>Salt is added to cheese at rates of 1.5-3.0% (w/w) of final cheese and serves multiple critical functions:</p>
                <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                    <li><strong>Flavor Enhancement:</strong> Salt suppresses bitterness (masks bitter peptides from proteolysis), enhances perception of savory/umami notes, and contributes its own salty taste at concentrations >0.5%</li>
                    <li><strong>Preservation:</strong> NaCl reduces water activity (a<sub>w</sub> reduction: ~0.005 per 1% salt in moisture phase). At 4-6% salt-in-moisture (S/M), most spoilage bacteria and pathogens are inhibited. Also directly toxic to some bacteria at high S/M concentrations</li>
                    <li><strong>Moisture Control:</strong> Osmotic effect draws water from curd → promotes syneresis → controls final moisture content</li>
                    <li><strong>Enzyme Activity Modulation:</strong> Salt concentration affects activity of residual rennet and microbial enzymes during ripening → controls rate and pattern of proteolysis and lipolysis → influences flavor development</li>
                    <li><strong>Texture Modification:</strong> Na⁺ ions exchange with Ca²⁺ in the casein matrix (ion exchange effect) → hydrates protein → affects cheese body/texture. At 4-5% S/M: optimal texture. Above 6%: excessive protein hydration → soft, wet texture</li>
                </ul>
    
                <p><strong>Salting Methods:</strong></p>
                <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                    <li><strong>Dry Salting:</strong> Granular salt mixed directly with milled curd (Cheddar method) — fast, uniform for small-piece cheeses</li>
                    <li><strong>Brine Salting:</strong> Cheese immersed in saturated NaCl solution (20-23% w/v, 10-15°C) for hours to days (Gouda, Mozzarella, Swiss). Salt absorption by diffusion → concentration gradient from surface to center</li>
                    <li><strong>Surface Rubbing:</strong> Dry salt rubbed on cheese surface (Parmesan, some artisanal cheeses) — repeated over days/weeks</li>
                </ul>
    
                <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">General FSSAI Standards for Cheese</h3>
                <p>FSSAI defines standards for various types of cheese under <strong>FSS (Food Products Standards and Food Additives) Regulations, 2011</strong>. Below are examples for common categories:</p>
                <div class="overflow-x-auto mt-4">
                    <table class="w-full text-left border-collapse">
                        <thead class="bg-muted">
                            <tr>
                                <th class="p-2 border">Product</th>
                                <th class="p-2 border">Moisture, Max, % (m/m)</th>
                                <th class="p-2 border">Milk fat, Min, % (on dry basis)</th>
                                <th class="p-2 border">Scientific Rationale</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="p-2 border"><strong>Hard-Pressed Cheese</strong></td>
                                <td class="p-2 border">39.0</td>
                                <td class="p-2 border">48.0</td>
                                <td class="p-2 border">Low moisture ensures firmness, low a<sub>w</sub> for long shelf life; high fat-in-dry-matter (FDM) ensures rich flavor and smooth body</td>
                            </tr>
                            <tr>
                                <td class="p-2 border"><strong>Cheddar Cheese</strong></td>
                                <td class="p-2 border">39.0</td>
                                <td class="p-2 border">48.0</td>
                                <td class="p-2 border">MNFS (moisture in non-fat substance): 52-54% controls texture and ripening rate</td>
                            </tr>
                            <tr>
                                <td class="p-2 border"><strong>Mozzarella Cheese</strong></td>
                                <td class="p-2 border">60.0</td>
                                <td class="p-2 border">35.0</td>
                                <td class="p-2 border">Higher moisture essential for stretching properties; lower FDM acceptable as fat interferes with fibrous protein alignment needed for stretchability</td>
                            </tr>
                            <tr>
                                <td class="p-2 border"><strong>Processed Cheese</strong></td>
                                <td class="p-2 border">47.0</td>
                                <td class="p-2 border">40.0</td>
                                <td class="p-2 border">Emulsifying salts allow higher moisture incorporation while maintaining smooth, homogeneous body; lower FDM reflects additional non-fat ingredients (emulsifying salts, stabilizers)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    
                <p class="mt-3"><strong>Additional FSSAI Microbiological Standards for Cheese:</strong></p>
                <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                    <li>Coliform count: <100 CFU/g (for pasteurized milk cheese)</li>
                    <li><em>E. coli</em>: <100 CFU/g</li>
                    <li><em>Staphylococcus aureus</em>: <100 CFU/g (enterotoxin producer → food poisoning risk)</li>
                    <li><em>Salmonella</em>: Absent in 25g</li>
                    <li><em>Listeria monocytogenes</em>: Absent in 25g (critical for soft/fresh cheeses)</li>
                    <li>Yeast & Mold: <500 CFU/g</li>
                </ul>
    
                <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Cheese Ripening/Aging — The Flavor Factory</h3>
    
                <p>Ripening (maturation/aging) is the period after manufacture during which the cheese undergoes profound biochemical transformations that develop its characteristic flavor, aroma, texture, and appearance. Ripening involves three primary biochemical pathways:</p>
    
                <h4 class="font-semibold mt-4 mb-2">A) Proteolysis — The Most Important Ripening Event</h4>
                <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                    <li><strong>Definition:</strong> Enzymatic degradation of casein protein into progressively smaller fragments: intact casein → large peptides → small peptides → free amino acids</li>
                    <li><strong>Enzymes Involved:</strong>
                        <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                            <li><strong>Residual rennet (chymosin):</strong> Cleaves α<sub>s1</sub>-casein at Phe₂₃-Phe₂₄ → produces α<sub>s1</sub>-I casein (first detectable proteolysis product, within 1-2 weeks). Also cleaves β-casein slowly</li>
                            <li><strong>Plasmin (native milk protease):</strong> Heat-stable serine protease; cleaves β-casein → γ-caseins + proteose-peptones. More active in high-cook cheeses (Swiss, Parmesan) where starter bacteria are heat-killed</li>
                            <li><strong>Starter culture enzymes:</strong> LAB contain proteinases (CEP — cell envelope proteinase) and peptidases (aminopeptidases, dipeptidases, tripeptidases). After LAB lyse (die and release contents), these enzymes degrade peptides to free amino acids → critical for flavor development</li>
                            <li><strong>Non-starter LAB (NSLAB) enzymes:</strong> Adventitious lactobacilli (Lb. casei, Lb. paracasei, Lb. plantarum) grow in cheese during ripening → contribute additional peptidase activity → degrade bitter peptides → improve flavor</li>
                        </ul>
                    </li>
                    <li><strong>Flavor Compounds from Amino Acid Catabolism:</strong>
                        <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                            <li>Leucine → 3-methylbutanal, 3-methylbutanol (malty, fruity)</li>
                            <li>Methionine → Methanethiol, dimethyl sulfide (sulfurous, "Cheddar" notes)</li>
                            <li>Phenylalanine → Phenylacetaldehyde (floral, rosy)</li>
                            <li>Tryptophan → Indole, skatole (fecal at high concentration — washed-rind cheeses)</li>
                            <li>Glutamate → Umami taste sensation (aged cheeses are naturally rich in glutamate)</li>
                        </ul>
                    </li>
                    <li><strong>Bitterness Problem:</strong> Hydrophobic peptides (rich in Leu, Ile, Val, Phe, Pro) with molecular weight 500-3000 Da taste bitter. These are normal intermediates but should be degraded by peptidases. Excessive bitterness = imbalance between proteinase activity (generating bitter peptides) and peptidase activity (degrading them). Causes: excess rennet, wrong starter, insufficient ripening time</li>
                </ul>
    
                <h4 class="font-semibold mt-4 mb-2">B) Lipolysis — Fat Breakdown</h4>
                <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                    <li><strong>Definition:</strong> Enzymatic hydrolysis of milk fat triglycerides → free fatty acids (FFA) + glycerol</li>
                    <li><strong>Enzymes:</strong> Lipases from milk (lipoprotein lipase — heat-labile, mostly destroyed by pasteurization), starter bacteria (esterases), mold enzymes (Penicillium roqueforti lipase in blue cheeses → extensive lipolysis)</li>
                    <li><strong>Flavor Contribution of Free Fatty Acids:</strong>
                        <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                            <li>Butyric acid (C4:0): Rancid, cheesy, sharp (key Cheddar note at low concentration)</li>
                            <li>Caproic acid (C6:0): Goaty, pungent</li>
                            <li>Caprylic (C8:0) & Capric acid (C10:0): Goaty, waxy (characteristic of goat cheese)</li>
                            <li>Short-chain FFA are volatile, aromatic, and contribute characteristic cheese aroma even at low concentrations (threshold: 0.5-15 mg/kg)</li>
                        </ul>
                    </li>
                    <li><strong>Degree of Lipolysis:</strong> Very low in Cheddar/Gouda (FFA: 500-1500 mg/kg); moderate in Parmesan (1500-4000 mg/kg); extensive in Blue cheeses (25,000-40,000 mg/kg) and Italian cheeses like Provolone</li>
                </ul>
    
                <h4 class="font-semibold mt-4 mb-2">C) Lactose and Citrate Metabolism</h4>
                <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                    <li><strong>Lactose:</strong> Residual lactose in fresh curd (0.5-1.5%) is rapidly fermented to lactic acid by starter bacteria within 1-3 days after pressing. Complete lactose consumption → pH stabilizes at 5.0-5.3. Aged cheeses are essentially lactose-free (important for lactose-intolerant consumers)</li>
                    <li><strong>Citrate Metabolism:</strong> Milk contains ~1.8 g/L citrate. Certain starter bacteria (Leuconostoc, Lactococcus diacetylactis) ferment citrate → CO₂ (gas eyes in Gouda, Havarti) + diacetyl (buttery flavor) + acetoin + acetate</li>
                    <li><strong>Lactate Metabolism:</strong> During extended ripening, lactic acid can be metabolized:
                        <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                            <li>Propionibacterium freudenreichii (Swiss cheese): Lactate → Propionate + Acetate + CO₂ (the CO₂ forms the characteristic large "eyes"/holes in Swiss cheese; propionate contributes sweet, nutty flavor)</li>
                            <li>Calcium lactate crystallization: If pH >5.1 and lactate concentration high, calcium lactate crystals (white spots) can form on cheese surface during storage — cosmetic defect but harmless</li>
                        </ul>
                    </li>
                </ul>
    
                <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Cheese Yield Calculation</h3>
                <p>Cheese yield is a critical economic parameter. It can be predicted using various formulae:</p>
    
                <p><strong>Van Slyke & Price Formula (Most Widely Used):</strong></p>
                <p class="font-mono bg-gray-100 p-3 rounded mt-2">Y = [(0.93 × F + C - 0.1) × 1.09] / (1 - M/100)</p>
                <p>Where: Y = cheese yield (kg cheese per 100 kg milk), F = fat content of milk (%), C = casein content of milk (%), M = moisture content of cheese (%), 0.93 = fat recovery factor (93% of milk fat retained in cheese), 0.1 = loss factor for casein lost in whey, 1.09 = factor accounting for other solids (minerals, whey proteins trapped in curd)</p>
    
                <p><strong>Example Calculation (Cheddar):</strong></p>
                <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                    <li>Milk: 3.5% fat, 2.5% casein, Cheddar moisture target: 37%</li>
                    <li>Y = [(0.93 × 3.5 + 2.5 - 0.1) × 1.09] / (1 - 37/100)</li>
                    <li>Y = [(3.255 + 2.4) × 1.09] / 0.63</li>
                    <li>Y = [6.164] / 0.63 = <strong>9.78 kg cheese per 100 kg milk</strong></li>
                    <li>Approximately <strong>10 kg of milk produces 1 kg of Cheddar cheese</strong></li>
                </ul>
    
                <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Nutritional Composition of Cheese</h3>
                <table class="min-w-full border-collapse border border-gray-300 mt-3">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="border border-gray-300 px-4 py-2">Nutrient</th>
                            <th class="border border-gray-300 px-4 py-2">Cheddar (per 100g)</th>
                            <th class="border border-gray-300 px-4 py-2">Mozzarella (per 100g)</th>
                            <th class="border border-gray-300 px-4 py-2">Parmesan (per 100g)</th>
                            <th class="border border-gray-300 px-4 py-2">Cottage Cheese (per 100g)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="border border-gray-300 px-4 py-2">Energy (kcal)</td><td class="border border-gray-300 px-4 py-2">403</td><td class="border border-gray-300 px-4 py-2">280</td><td class="border border-gray-300 px-4 py-2">431</td><td class="border border-gray-300 px-4 py-2">98</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Protein (g)</td><td class="border border-gray-300 px-4 py-2">24.9</td><td class="border border-gray-300 px-4 py-2">22.2</td><td class="border border-gray-300 px-4 py-2">35.8</td><td class="border border-gray-300 px-4 py-2">11.1</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Fat (g)</td><td class="border border-gray-300 px-4 py-2">33.1</td><td class="border border-gray-300 px-4 py-2">17.1</td><td class="border border-gray-300 px-4 py-2">28.6</td><td class="border border-gray-300 px-4 py-2">4.3</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Carbohydrate (g)</td><td class="border border-gray-300 px-4 py-2">1.3</td><td class="border border-gray-300 px-4 py-2">2.2</td><td class="border border-gray-300 px-4 py-2">3.2</td><td class="border border-gray-300 px-4 py-2">3.4</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Calcium (mg)</td><td class="border border-gray-300 px-4 py-2">721</td><td class="border border-gray-300 px-4 py-2">505</td><td class="border border-gray-300 px-4 py-2">1184</td><td class="border border-gray-300 px-4 py-2">83</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Sodium (mg)</td><td class="border border-gray-300 px-4 py-2">621</td><td class="border border-gray-300 px-4 py-2">627</td><td class="border border-gray-300 px-4 py-2">1602</td><td class="border border-gray-300 px-4 py-2">364</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Vitamin A (μg RAE)</td><td class="border border-gray-300 px-4 py-2">337</td><td class="border border-gray-300 px-4 py-2">174</td><td class="border border-gray-300 px-4 py-2">207</td><td class="border border-gray-300 px-4 py-2">37</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Vitamin B12 (μg)</td><td class="border border-gray-300 px-4 py-2">0.83</td><td class="border border-gray-300 px-4 py-2">2.28</td><td class="border border-gray-300 px-4 py-2">1.20</td><td class="border border-gray-300 px-4 py-2">0.43</td></tr>
                        <tr><td class="border border-gray-300 px-4 py-2">Water Activity (a<sub>w</sub>)</td><td class="border border-gray-300 px-4 py-2">0.95-0.96</td><td class="border border-gray-300 px-4 py-2">0.97</td><td class="border border-gray-300 px-4 py-2">0.90-0.92</td><td class="border border-gray-300 px-4 py-2">0.99</td></tr>
                    </tbody>
                </table>
            `,
            subTopics: {
                cheddar: {
                    title: "A. Cheddar Cheese Processing",
                    content: `
                        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Cheddar Cheese — Comprehensive Scientific Analysis</h2>
                        <p>Cheddar cheese is a hard, natural, internally bacteria-ripened cheese that originated in the English village of Cheddar in Somerset (~12th century). It is the <strong>most widely produced and consumed cheese variety globally</strong>, accounting for ~35% of world cheese production. Cheddar is characterized by its close-knit, smooth body, firm yet somewhat crumbly texture, and sharp, tangy flavor that intensifies dramatically with aging (mild: 2-3 months, medium: 6-9 months, sharp/mature: 12-24 months, extra-sharp/vintage: 2-5+ years).</p>
    
                        <p><strong>Key Distinguishing Feature:</strong> The <strong>cheddaring process</strong> — a unique curd-handling step involving stacking, turning, and matting of drained curd slabs under their own weight, allowing controlled acid development and creating the characteristic smooth, close-textured body. No other cheese variety uses this exact technique.</p>
    
                        <p><strong>Composition Targets (Codex Standard 263-1966, FSSAI):</strong></p>
                        <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                            <li>Moisture: 36-39% (maximum 39%)</li>
                            <li>Fat-in-dry-matter (FDM): ≥48%</li>
                            <li>Moisture in non-fat substance (MNFS): 52-54% (critical parameter controlling texture and ripening rate)</li>
                            <li>Salt-in-moisture (S/M): 4.0-6.0% (optimal: 4.5-5.5%)</li>
                            <li>pH at pressing: 5.15-5.25 (target: 5.20)</li>
                            <li>pH during ripening: 5.0-5.3 (rises slightly during aging due to proteolysis generating ammonia)</li>
                        </ul>
    
                        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Cheddar Cheese</h3>
                        <div class="space-y-2 font-mono text-center">
                            <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Reception, Testing & Standardization <span class="font-sans text-xs bg-gray-200 p-1 rounded">PRP</span></div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-blue-100 border border-blue-300 rounded">Pasteurization (72°C/15s HTST) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling to 30-32°C + CaCl₂ Addition (0.01-0.02%) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-green-100 border border-green-300 rounded">Starter Culture Inoculation (1-2% mesophilic LAB)</div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-green-100 border border-green-300 rounded">Ripening (30-60 min, acid development to pH 6.50)</div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Rennet Addition & Coagulation (25-40 min) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cutting the Curd (6-12 mm cubes, wire knives)</div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-purple-100 border border-purple-300 rounded">Healing (5 min rest) → Gentle Stirring (10-15 min)</div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cooking/Scalding (38-42°C over 30-40 min, 0.2°C/min) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-purple-100 border border-purple-300 rounded">Draining of Whey (at pH 6.15-6.25)</div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Cheddaring — Stacking & Turning Curd Slabs (pH 6.2→5.3, 1.5-2.5 hrs)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-teal-100 border teal-300 rounded">Milling (curd slabs → finger-sized chips, at pH 5.2-5.4)</div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-teal-100 border border-teal-300 rounded">Salting (2.0-3.0% NaCl of curd weight, mixed 20-30 min)</div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-orange-100 border border-orange-300 rounded">Hooping & Pressing (3-12 hrs, 150-300 kPa) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-orange-100 border border-orange-300 rounded">Vacuum Packaging (barrier film, O₂ <1%)</div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-gray-200 border border-gray-400 rounded">Ripening/Aging (6-12°C, 60-90% RH, 2 months to 5+ years) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-4</span></div>
                        </div>
    
                        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Scientific Explanation of Each Processing Step</h3>
                        <ol class="list-decimal list-outside pl-5 space-y-6">
                            <li>
                                <strong>Milk Standardization & Pasteurization (CCP-1):</strong>
                                <p class="mt-2"><strong>Standardization:</strong> Milk is adjusted to a specific <strong>casein-to-fat ratio (C/F)</strong> of approximately 0.68-0.72 (equivalent to protein-to-fat ratio ~0.92-0.96) to ensure consistent cheese composition. This is done by:
                                <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                    <li>Separating milk into skim milk and cream</li>
                                    <li>Recombining to target fat level (typically 3.0-3.2% fat for Cheddar from 3.5% whole milk)</li>
                                    <li>Higher C/F → harder, more proteolysis-prone cheese; Lower C/F → softer, fattier cheese</li>
                                </ul></p>
    
                                <p class="mt-2"><strong>Pasteurization (CCP-1):</strong></p>
                                <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                                    <li><strong>Condition:</strong> HTST 72°C for 15 seconds (minimum legal requirement for cheese milk in most countries including India)</li>
                                    <li><strong>Microbial Kill:</strong> 99.99% reduction (4-5 log reduction) of vegetative pathogens: Mycobacterium tuberculosis (most heat-resistant non-spore-forming pathogen), Coxiella burnetii (Q fever), Salmonella, Listeria monocytogenes, E. coli O157:H7, Campylobacter. Also destroys >99% of spoilage bacteria</li>
                                    <li><strong>Enzyme Inactivation:</strong> Destroys native milk lipase (prevents excessive lipolysis/rancidity), alkaline phosphatase (indicator enzyme: negative ALP test = adequate pasteurization)</li>
                                    <li><strong>Effect on Cheese Making:</strong> Pasteurization causes ~15-20% whey protein denaturation (mainly β-LG) → β-LG-κ-casein complexes form → slightly impaired rennet coagulation (addressed by CaCl₂ addition). Also destroys native milk microflora → makes starter culture addition essential for controlled acidification</li>
                                    <li><strong>Critical Limit:</strong> ≥72°C for ≥15 seconds. Monitored by: temperature recording chart, flow diversion valve (automatically diverts milk if <72°C), ALP test (must be negative)</li>
                                </ul>
                            </li>
    
                            <li>
                                <strong>Cooling, CaCl₂ Addition & Starter Inoculation:</strong>
                                <p class="mt-2"><strong>Cooling:</strong> Pasteurized milk cooled to 30-32°C (optimal temperature for mesophilic starter growth and rennet activity) using plate heat exchanger.</p>
                                <p class="mt-2"><strong>CaCl₂ Addition (0.01-0.02%):</strong> Compensates for calcium equilibrium shift during pasteurization and cold storage. Provides additional Ca²⁺ for proper rennet gel firmness. Excess CaCl₂ (>0.05%) → excessively firm, rubbery curd → moisture retention problems.</p>
                                <p class="mt-2"><strong>Starter Culture:</strong></p>
                                <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                                    <li><strong>Type:</strong> Mesophilic mixed-strain cultures: Lactococcus lactis subsp. cremoris (primary acid producer, mild flavor), L. lactis subsp. lactis (acid producer, slightly more flavor contribution), Leuconostoc mesenteroides subsp. cremoris (citrate fermenter → diacetyl + CO₂ → flavor + small mechanical openness)</li>
                                    <li><strong>Inoculation Rate:</strong> 1-2% of milk volume (direct vat inoculant/DVI or bulk starter)</li>
                                    <li><strong>Acid Production Rate:</strong> Target: pH drop of 0.10-0.15 units during ripening period (30-60 min before rennet addition). Too fast → acid at rennet addition → weak gel, excessive fines loss. Too slow → delayed process, risk of bacteriophage (virus) attack on slow starters</li>
                                    <li><strong>Phage Management:</strong> Bacteriophages (viruses that infect and kill LAB) are the #1 operational risk in cheese making. Attack can completely stop acidification → "dead vat" → total product loss. Prevention: strict hygiene, culture rotation (different phage-unrelated strains on alternate days), use of phage-resistant strains, air filtration in vat room</li>
                                </ul>
                            </li>
    
                            <li>
                                <strong>Rennet Addition & Coagulation (CCP-2):</strong>
                                <p class="mt-2"><strong>Rennet Type:</strong> FPC (fermentation-produced chymosin) at 15-25 mL per 100L milk, diluted 1:10 in cold water, added with thorough mixing (2-3 min stirring), then stirring stopped to allow undisturbed gel formation.</p>
                                <p class="mt-2"><strong>Coagulation Time:</strong> 25-40 minutes at 30-32°C. Gel firmness increases with time after initial gelation.</p>
                                <p class="mt-2"><strong>Cutting Time Determination:</strong> Critical for cheese quality and yield!</p>
                                <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                    <li><strong>Traditional Method:</strong> "Finger test" — insert sanitized finger at 45° angle and lift → if curd splits cleanly with smooth fracture and clear (not milky) whey in fracture → ready to cut. If curd is mushy/doesn't split → too early. If curd is very firm/rubbery → too late (excessive syneresis already occurred)</li>
                                    <li><strong>Instrumental Method:</strong> Formagraph, CoaguSens (measures gel firmness continuously via oscillating rheometry). Cut at 2× flocculation time or at target gel firmness (G' = 30-50 Pa)</li>
                                </ul>
                                <p class="mt-2"><strong>CCP-2 Rationale:</strong> Proper coagulation ensures: (a) optimal fat/casein recovery in curd (yield), (b) correct moisture retention, (c) desired texture development. Under-coagulation → weak gel → fines/fat loss in whey → poor yield. Over-coagulation → too firm → difficult cutting → poor moisture control</p>
                            </li>
    
                            <li>
                                <strong>Cutting, Healing, Stirring & Cooking:</strong>
    
                                <p class="mt-2"><strong>Cutting:</strong></p>
                                <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                                    <li>Coagulum cut using horizontal and vertical wire knives into <strong>6-12 mm cubes</strong></li>
                                    <li>Curd cube size directly controls moisture: smaller cubes → more surface area → more whey loss → drier cheese. For Cheddar (target ~37% moisture): 9-12 mm cubes</li>
                                    <li>Cutting speed: Moderate — too fast → curd shatters → fines loss (small curd fragments) → yield loss (0.5-2% fat loss possible). Too slow → uneven cube sizes → inconsistent moisture</li>
                                </ul>
    
                                <p class="mt-2"><strong>Healing (5 min):</strong> After cutting, curd cubes rest undisturbed for 5 minutes. Purpose: allow cut surfaces to "skin over" — casein matrix at surface contracts and forms a thin protein film (membrane) → reduces fat/fines loss during subsequent stirring</p>
    
                                <p class="mt-2"><strong>Gentle Stirring (10-15 min):</strong> Begin very gentle agitation to prevent curd settling (compaction) and promote uniform whey expulsion. Gradually increase stirring speed as curd firms</p>
    
                                <p class="mt-2"><strong>Cooking/Scalding (oPRP):</strong></p>
                                <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                                    <li><strong>Temperature Profile:</strong> Gradually raise temperature from 30-32°C to 38-42°C (target: 39°C for standard Cheddar) over 30-40 minutes at rate of 0.2-0.5°C per minute. <strong>NEVER exceed 1°C/min</strong> — sudden temperature increase causes "case hardening" (surface dries faster than interior → moisture trapped inside → wet, weak cheese)</li>
                                    <li><strong>Scientific Effects of Cooking:</strong>
                                        <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                            <li>Increased syneresis: higher temperature → stronger hydrophobic interactions → protein network contracts → more whey expelled</li>
                                            <li>Starter culture modulation: mesophilic LAB (optimal 30°C) gradually inhibited above 38°C → slows acid production → prevents excessive acidification during cooking</li>
                                            <li>Curd firmness increase: cooking "sets" the protein matrix → firmer, more elastic curd particles that resist breaking during subsequent handling</li>
                                            <li>Moisture control: the single most important tool for controlling final cheese moisture. Higher cook temp → lower moisture. Every 1°C increase in cook temp ≈ 0.5-1.0% decrease in final cheese moisture</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
    
                            <li>
                                <strong>Whey Draining:</strong>
                                <p class="mt-2">When curd reaches target firmness and pH (6.15-6.25), free whey is drained from the vat. Curd settles to bottom (matting).</p>
                                <p class="mt-2"><strong>Whey Composition:</strong> ~93% water, 0.3% fat, 0.8% protein (mainly whey proteins: β-LG, α-LA, BSA), 4.8% lactose, 0.6% minerals. Whey represents ~85-90% of milk volume but only ~50% of milk solids → significant nutrient stream → recovered for whey powder, WPC, WPI, lactose production</p>
                            </li>
    
                            <li>
                                <strong>Cheddaring (CCP-3) — The Defining Step:</strong>
                                <p class="mt-2">Cheddaring is a <strong>Critical Control Point</strong> because it controls the final pH, texture, and body of the cheese through precisely managed acid development and mechanical manipulation of the curd.</p>
    
                                <p class="mt-2"><strong>Procedure (Traditional):</strong></p>
                                <ol class="list-decimal list-outside pl-5 space-y-2">
                                    <li>After whey drainage, the matted curd mass is cut into <strong>rectangular slabs</strong> (~15 cm wide, 30-40 cm long, 10-15 cm thick)</li>
                                    <li>Slabs are <strong>stacked 2-3 high</strong> on the vat floor. Their own weight provides gentle pressing → whey expulsion continues</li>
                                    <li>Every <strong>10-15 minutes</strong>, the stack is <strong>turned</strong> (top slab moved to bottom, middle rotated). This ensures: (a) uniform acid development, (b) uniform temperature, (c) uniform mechanical compression, (d) uniform moisture loss</li>
                                    <li>Process continues for <strong>1.5-2.5 hours</strong> until curd reaches target pH of <strong>5.2-5.4</strong></li>
                                </ol>
    
                                <p class="mt-2"><strong>Biochemical/Physical Changes During Cheddaring:</strong></p>
                                <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                                    <li><strong>pH Drop (6.2 → 5.2-5.4):</strong> Continued lactic acid production by starter LAB. At pH 5.2-5.4: ~75-80% of colloidal calcium phosphate (CCP) has dissolved from casein micelles → micelles lose internal structural support → casein molecules become more mobile and can flow/align under mechanical force</li>
                                    <li><strong>Texture Transformation:</strong> Initially: crumbly, open, granular texture (pH 6.2) → Progressively: protein matrix becomes plasticized as CCP dissolves → casein molecules begin flowing → curd becomes smooth, pliable, and develops a <strong>characteristic fibrous/layered ("chicken breast")</strong> structure → this is the hallmark of properly cheddared curd</li>
                                    <li><strong>Moisture Reduction:</strong> Whey continues seeping from curd under the weight of stacking → moisture decreases from ~40-42% to ~37-39% by end of cheddaring</li>
                                    <li><strong>Temperature Maintenance:</strong> Curd kept at 35-38°C throughout cheddaring to maintain starter activity and optimal casein plasticity</li>
                                </ul>
    
                                <p class="mt-2"><strong>Endpoint Indicators:</strong></p>
                                <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                    <li><strong>pH:</strong> 5.2-5.4 (measured with calibrated pH meter — most reliable)</li>
                                    <li><strong>"Hot Iron" Test (Traditional):</strong> Touch hot iron/spatula to curd surface → press and pull away → properly cheddared curd produces <strong>smooth, stringy threads 1-2 cm long</strong> (like mozzarella but shorter). Under-cheddared: no threads (too little acid, CCP still intact). Over-cheddared: curd crumbles (too much acid, pH <5.0, excessive CCP loss, protein dehydrated)</li>
                                    <li><strong>Texture:</strong> Curd has smooth, fibrous, "chicken breast" appearance; tears in parallel layers</li>
                                    <li><strong>Titratable Acidity:</strong> Whey from curd: 0.55-0.65% lactic acid</li>
                                </ul>
    
                                <p class="mt-2"><strong>CCP-3 Critical Limits and Corrective Actions:</strong></p>
                                <table class="min-w-full border-collapse border border-gray-300 mt-2">
                                    <thead>
                                        <tr class="bg-gray-100">
                                            <th class="border border-gray-300 px-4 py-2">Parameter</th>
                                            <th class="border border-gray-300 px-4 py-2">Critical Limit</th>
                                            <th class="border border-gray-300 px-4 py-2">Corrective Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border border-gray-300 px-4 py-2">Curd pH at milling</td>
                                            <td class="border border-gray-300 px-4 py-2">5.2-5.4</td>
                                            <td class="border border-gray-300 px-4 py-2">If >5.4: continue cheddaring (slow acid development → check starter activity, temperature). If <5.1: mill immediately (excessive acid → sour, crumbly cheese likely)</td>
                                        </tr>
                                        <tr>
                                            <td class="border border-gray-300 px-4 py-2">Cheddaring temperature</td>
                                            <td class="border border-gray-300 px-4 py-2">35-38°C</td>
                                            <td class="border border-gray-300 px-4 py-2">If <32°C: slow acid production → apply warm water to vat walls. If >40°C: starter killed → no further acid → rinse with cool water</td>
                                        </tr>
                                        <tr>
                                            <td class="border border-gray-300 px-4 py-2">Texture at milling</td>
                                            <td class="border border-gray-300 px-4 py-2">Smooth, fibrous, stringy on hot iron</td>
                                            <td class="border border-gray-300 px-4 py-2">If open/crumbly: insufficient acid development → continue cheddaring or adjust process for next batch</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
    
                            <li>
                                <strong>Milling:</strong>
                                <p class="mt-2">The cheddared curd slabs (now smooth, fibrous) are fed through a <strong>curd mill</strong> that tears/cuts them into <strong>finger-sized chips</strong> (~1.5 × 1.5 × 5 cm). Purpose: (a) expose fresh surface area for uniform salt absorption, (b) create pieces small enough to pack tightly into molds, (c) promote whey drainage from freshly exposed surfaces.</p>
                            </li>
    
                            <li>
                                <strong>Salting:</strong>
                                <p class="mt-2"><strong>Method:</strong> Dry salting — granular NaCl (non-iodized, food-grade, flake or fine grain) mixed with milled curd at <strong>2.0-3.0% of curd weight</strong> (typically 2.5%). Mixed thoroughly by tumbling for 20-30 minutes to allow salt dissolution and absorption.</p>
                                <p class="mt-2"><strong>Target:</strong> Final cheese: 1.5-1.8% salt (w/w), salt-in-moisture (S/M): 4.5-5.5%</p>
                                <p class="mt-2"><strong>Effects:</strong></p>
                                <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                    <li>Draws 1-2% additional moisture from curd (osmotic syneresis)</li>
                                    <li>Inhibits starter culture (most LAB inhibited above 4% S/M → acid production stops → pH stabilizes)</li>
                                    <li>Inhibits spoilage/pathogenic bacteria (protective S/M >4.0%)</li>
                                    <li>Enhances flavor, suppresses bitterness</li>
                                    <li>Causes partial protein hydration → influences body/texture during ripening</li>
                                </ul>
                            </li>
    
                            <li>
                                <strong>Hooping & Pressing (oPRP):</strong>
                                <p class="mt-2">Salted curd chips packed into stainless steel or food-grade plastic molds (hoops) lined with cheesecloth. Pressed using pneumatic or hydraulic presses:</p>
                                <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                    <li>Initial pressure: 70-100 kPa (1 hour) — light pressing to form initial block shape without trapping whey pockets</li>
                                    <li>Full pressure: 150-300 kPa (3-12 hours, often overnight) — forms final consolidated block</li>
                                    <li>Block turns: Molds turned (inverted) 1-2 times during pressing to ensure symmetric shape and uniform surface</li>
                                    <li>Final block: 18-20 kg (standard) or 290 kg (barrel) depending on market</li>
                                </ul>
                                <p class="mt-2"><strong>oPRP Rationale:</strong> Proper pressing ensures: (a) air excluded (trapped air → holes → mold growth sites), (b) smooth, closed rind (barrier against contamination), (c) uniform moisture distribution, (d) final mechanical whey expulsion</p>
                            </li>
    
                            <li>
                                <strong>Packaging:</strong>
                                <p class="mt-2">Modern Cheddar is vacuum-packaged in multi-layer barrier film (PA/PE or PVDC laminate) immediately after pressing → excludes oxygen → prevents surface mold growth → allows "rindless" ripening. Traditional: waxed or cloth-bound (bandaged Cheddar) → develops natural rind → allows gas exchange during ripening → different flavor profile</p>
                            </li>
    
                            <li>
                                <strong>Ripening/Aging (CCP-4):</strong>
                                <p class="mt-2">This is where Cheddar develops its characteristic flavor, and it is designated <strong>CCP-4</strong> because temperature control during this extended period is critical for product safety and quality.</p>
    
                                <p class="mt-2"><strong>Ripening Conditions:</strong></p>
                                <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                    <li>Temperature: 6-12°C (lower: slower ripening, milder flavor, less risk of defects; higher: faster ripening, stronger flavor, more risk of off-flavors/gas formation)</li>
                                    <li>Humidity: 85-95% RH (prevents excessive surface drying)</li>
                                    <li>Duration: 2-24+ months depending on desired intensity</li>
                                </ul>
    
                                <p class="mt-2"><strong>Ripening Stages and Flavor Development:</strong></p>
                                <table class="min-w-full border-collapse border border-gray-300 mt-2">
                                    <thead>
                                        <tr class="bg-gray-100">
                                            <th class="border border-gray-300 px-4 py-2">Age</th>
                                            <th class="border border-gray-300 px-4 py-2">Description</th>
                                            <th class="border border-gray-300 px-4 py-2">Key Biochemical Events</th>
                                            <th class="border border-gray-300 px-4 py-2">Flavor Profile</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border border-gray-300 px-4 py-2">0-2 weeks</td>
                                            <td class="border border-gray-300 px-4 py-2">Fresh/Green</td>
                                            <td class="border border-gray-300 px-4 py-2">Residual lactose fully consumed by LAB. pH stabilizes at 5.0-5.2. LAB population peaks then begins declining (autolysis begins)</td>
                                            <td class="border border-gray-300 px-4 py-2">Mild, acidic, bland, diacetyl (buttery) notes</td>
                                        </tr>
                                        <tr>
                                            <td class="border border-gray-300 px-4 py-2">2-8 weeks</td>
                                            <td class="border border-gray-300 px-4 py-2">Young/Mild</td>
                                            <td class="border border-gray-300 px-4 py-2">Initial proteolysis by residual rennet (α<sub>s1</sub>-casein → α<sub>s1</sub>-I). LAB lysis releases intracellular peptidases. NSLAB begin growing (10⁴→10⁷ CFU/g)</td>
                                            <td class="border border-gray-300 px-4 py-2">Mild, clean, slightly tangy, developing complexity</td>
                                        </tr>
                                        <tr>
                                            <td class="border border-gray-300 px-4 py-2">3-6 months</td>
                                            <td class="border border-gray-300 px-4 py-2">Medium/Standard</td>
                                            <td class="border border-gray-300 px-4 py-2">Significant proteolysis → accumulation of small peptides and free amino acids. Amino acid catabolism begins → volatile sulfur compounds (methanethiol), branched-chain aldehydes</td>
                                            <td class="border border-gray-300 px-4 py-2">Moderate sharpness, balanced, buttery, beginning of "Cheddar" character</td>
                                        </tr>
                                        <tr>
                                            <td class="border border-gray-300 px-4 py-2">6-12 months</td>
                                            <td class="border border-gray-300 px-4 py-2">Mature/Sharp</td>
                                            <td class="border border-gray-300 px-4 py-2">Advanced proteolysis. Extensive amino acid catabolism. Free fatty acid accumulation. Texture becomes more crumbly as protein matrix weakens</td>
                                            <td class="border border-gray-300 px-4 py-2">Sharp, complex, pungent, sulfurous notes, crystalline texture (tyrosine/calcium lactate crystals beginning)</td>
                                        </tr>
                                        <tr>
                                            <td class="border border-gray-300 px-4 py-2">12-24+ months</td>
                                            <td class="border border-gray-300 px-4 py-2">Extra-Sharp/Vintage</td>
                                            <td class="border border-gray-300 px-4 py-2">Near-complete α<sub>s1</sub>-casein breakdown. Tyrosine crystals visible as white spots. Calcium lactate crystals possible. Complex volatile profile: 200+ identified compounds</td>
                                            <td class="border border-gray-300 px-4 py-2">Very sharp, intense, complex, umami-rich (glutamate), crystalline crunch, lingering aftertaste</td>
                                        </tr>
                                    </tbody>
                                </table>
    
                                <p class="mt-3"><strong>CCP-4 Critical Limits:</strong></p>
                                <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                    <li>Ripening temperature: ≤12°C (above 12°C → risk of Clostridium tyrobutyricum growth → late gas blowing defect, butyric acid off-flavor)</li>
                                    <li>Vacuum integrity: Maintained throughout (broken seal → mold growth → surface defect, potential mycotoxin risk)</li>
                                    <li>Regular quality checks: pH, flavor assessment (grading), visual inspection for defects</li>
                                </ul>
                            </li>
                        </ol>
    
                        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Common Defects in Cheddar Cheese</h3>
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
                                    <td class="border border-gray-300 px-4 py-2"><strong>Bitterness</strong></td>
                                    <td class="border border-gray-300 px-4 py-2">Accumulation of hydrophobic bitter peptides (from α<sub>s1</sub>- and β-casein) not degraded by peptidases. Causes: excess rennet, slow/insufficient LAB autolysis, low NSLAB population, high cook temp (killing LAB prematurely)</td>
                                    <td class="border border-gray-300 px-4 py-2">Optimize rennet dosage, use starter strains with high autolytic tendency (release intracellular peptidases), ensure adequate NSLAB development, proper S/M ratio (4.5-5.5%)</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2"><strong>Open/Mechanical Holes</strong></td>
                                    <td class="border border-gray-300 px-4 py-2">Trapped air during pressing (inadequate vacuum, poor curd fusion). NOT gas production</td>
                                    <td class="border border-gray-300 px-4 py-2">Adequate pressing pressure and duration. Vacuum-assisted pressing. Ensure curd at correct pH for good fusion (5.2-5.4)</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2"><strong>Gas Blowing (Late)</strong></td>
                                    <td class="border border-gray-300 px-4 py-2">Clostridium tyrobutyricum spores (from silage-fed milk) germinate in cheese → ferment lactate → butyric acid + H₂ + CO₂ → large splits/cracks, rancid/foul odor. Occurs after 4-8 weeks aging</td>
                                    <td class="border border-gray-300 px-4 py-2">Source milk from non-silage-fed cows. Bactofugation (removes 95%+ spores). Lysozyme addition (permitted in some countries). Nitrate addition (KNO₃, <50 mg/kg — inhibits clostridia)</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2"><strong>Weak/Pasty Body</strong></td>
                                    <td class="border border-gray-300 px-4 py-2">Excessive moisture (MNFS >56%). Excessive proteolysis (too much rennet or ripening temp too high). Low S/M (<4.0%) → rapid, uncontrolled proteolysis</td>
                                    <td class="border border-gray-300 px-4 py-2">Proper moisture control (cooking, cheddaring, pressing). Optimize rennet dose. Maintain S/M 4.5-5.5%. Ripen at ≤10°C for mild cheese</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2"><strong>Acid/Sour Flavor</strong></td>
                                    <td class="border border-gray-300 px-4 py-2">Excessive acid development: pH <5.0 at pressing. Causes: too much starter, too fast acid production, over-cheddaring, insufficient salt (S/M <4.0%)</td>
                                    <td class="border border-gray-300 px-4 py-2">Optimize starter rate (1-1.5%). Monitor pH during cheddaring. Mill at pH 5.3-5.4 (not lower). Ensure proper salting (2.5-3.0% of curd weight)</td>
                                </tr>
                            </tbody>
                        </table>
                    `
                },
                mozzarella: {
                    title: "B. Mozzarella Cheese Processing",
                    content: `
                        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4 border-b-2 pb-2">Processing of Mozzarella Cheese — Comprehensive Scientific Analysis</h2>
                        <p>Mozzarella is a semi-soft, <strong>pasta filata</strong> (stretched curd/spun paste) cheese that originated in southern Italy (Campania region, 16th century). Traditional Mozzarella di Bufala is made from Italian water buffalo milk (PDO protected); however, the vast majority of global Mozzarella production uses cow's milk (often called "Mozzarella" or "Pizza cheese" in commercial contexts).</p>
    
                        <p>Mozzarella is the <strong>single most consumed cheese variety globally</strong>, driven primarily by the pizza industry (pizza accounts for >70% of Mozzarella consumption). Global Mozzarella production exceeds 4 million metric tons annually, with the USA alone producing >2 million MT.</p>
    
                        <p><strong>Key Distinguishing Features:</strong></p>
                        <ul class="list-disc list-outside pl-5 mt-2 space-y-2">
                            <li><strong>Pasta Filata Process:</strong> Acidified curd is kneaded and stretched in hot water → creates unique <strong>aligned parallel fiber structure</strong> of casein proteins → responsible for characteristic stretching, melting, and peeling properties</li>
                            <li><strong>Functional Properties:</strong> Mozzarella is valued primarily for its <strong>functionality</strong> (meltability, stretchability, browning, oiling off) rather than flavor complexity</li>
                            <li><strong>pH Sensitivity:</strong> The stretching process is critically dependent on curd pH reaching exactly 5.1-5.4 — outside this range, stretching fails completely</li>
                        </ul>
    
                        <p><strong>Types of Mozzarella:</strong></p>
                        <table class="min-w-full border-collapse border border-gray-300 mt-3">
                            <thead>
                                <tr class="bg-gray-100">
                                    <th class="border border-gray-300 px-4 py-2">Type</th>
                                    <th class="border border-gray-300 px-4 py-2">Moisture (%)</th>
                                    <th class="border border-gray-300 px-4 py-2">FDM (%)</th>
                                    <th class="border border-gray-300 px-4 py-2">Application</th>
                                    <th class="border border-gray-300 px-4 py-2">Shelf Life</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2">High-Moisture Mozzarella (Fresh)</td>
                                    <td class="border border-gray-300 px-4 py-2">52-60%</td>
                                    <td class="border border-gray-300 px-4 py-2">40-50%</td>
                                    <td class="border border-gray-300 px-4 py-2">Fresh eating (Caprese salad), artisanal pizza</td>
                                    <td class="border border-gray-300 px-4 py-2">7-21 days (refrigerated, in brine/water)</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2"><strong>Low-Moisture Mozzarella (LMMC)</strong></td>
                                    <td class="border border-gray-300 px-4 py-2">45-52%</td>
                                    <td class="border border-gray-300 px-4 py-2">≥45%</td>
                                    <td class="border border-gray-300 px-4 py-2"><strong>Pizza, frozen foods, shredded cheese (primary commercial product)</strong></td>
                                    <td class="border border-gray-300 px-4 py-2">4-8 weeks (vacuum-packed, refrigerated)</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2">Part-Skim Mozzarella</td>
                                    <td class="border border-gray-300 px-4 py-2">52-60%</td>
                                    <td class="border border-gray-300 px-4 py-2">30-45%</td>
                                    <td class="border border-gray-300 px-4 py-2">Reduced-fat applications</td>
                                    <td class="border border-gray-300 px-4 py-2">Similar to high-moisture</td>
                                </tr>
                            </tbody>
                        </table>
    
                        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Processing Flowchart for Mozzarella Cheese</h3>
                        <div class="space-y-2 font-mono text-center">
                            <div class="p-3 bg-blue-100 border border-blue-300 rounded">Milk Standardization (C/F: 0.90-1.15) & Pasteurization (72°C/15s) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-1</span></div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-green-100 border border-green-300 rounded">Cooling to 32-37°C + CaCl₂ (0.01-0.02%) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-green-100 border border-green-300 rounded">Inoculation with Thermophilic Starter Culture (S. thermophilus + L. bulgaricus/helveticus)</div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-green-100 border border-green-300 rounded">Ripening (15-30 min, pH to 6.40-6.50)</div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">Rennet Addition & Coagulation (20-30 min at 35-37°C) <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-2</span></div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cutting (10-15 mm cubes) → Healing (5 min)</div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-purple-100 border border-purple-300 rounded">Cooking/Scalding (to 40-45°C over 15-25 min) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-purple-100 border border-purple-300 rounded">Whey Draining</div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-teal-100 border border-teal-300 rounded"><strong>Curd Matting & Acid Development (pH 6.1→5.1-5.4, 1-3 hrs)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-3</span></div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-red-100 border border-red-300 rounded"><strong>Stretching/Kneading (Pasta Filata) in Hot Water/Steam (68-80°C, 3-8 min)</strong> <span class="font-sans text-xs bg-red-200 p-1 rounded">CCP-4</span></div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-orange-100 border border-orange-300 rounded">Molding (balls, blocks, shredded)</div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-orange-100 border border-orange-300 rounded">Cooling in Cold Brine (4-10°C, 10-23% NaCl, 30 min-24 hrs) <span class="font-sans text-xs bg-orange-200 p-1 rounded">oPRP</span></div>
                            <div class="text-2xl">↓</div>
                            <div class="p-3 bg-gray-200 border border-gray-400 rounded">Packaging (vacuum or in brine/water) & Refrigerated Storage (2-4°C)</div>
                        </div>
    
                        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Detailed Scientific Explanation of Processing Steps</h3>
                        <ol class="list-decimal list-outside pl-5 space-y-6">
                            <li>
                                <strong>Milk Standardization & Pasteurization (CCP-1):</strong>
                                <p class="mt-2"><strong>Casein-to-Fat Ratio:</strong> Adjusted to 0.90-1.15 depending on desired fat content. Higher C/F (>1.0) → more protein relative to fat → better stretching (less fat interference with protein fiber alignment), lower meltability (desirable for pizza). Lower C/F (<0.95) → more fat → better melting, more oiling off (may be defect on pizza)</p>
                                <p class="mt-2"><strong>Pasteurization:</strong> Standard HTST (72°C/15s). Same principles as Cheddar. Critical for eliminating pathogens while minimizing whey protein denaturation (which impairs stretching)</p>
                            </li>
    
                            <li>
                                <strong>Starter Culture — Thermophilic System:</strong>
                                <p class="mt-2"><strong>Culture Composition:</strong></p>
                                <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                                    <li><strong>Streptococcus thermophilus:</strong> Primary acid producer. Ferments lactose (glucose moiety only) → L-lactic acid. Produces exopolysaccharides (EPS) → improves cheese moisture retention and texture. Optimal: 42-45°C</li>
                                    <li><strong>Lactobacillus delbrueckii subsp. bulgaricus:</strong> Secondary acid producer. Ferments both glucose and galactose from lactose. Produces D-lactic acid. More proteolytic than S. thermophilus → contributes to flavor development. Optimal: 42-45°C</li>
                                    <li><strong>Symbiotic Relationship (Protocooperation):</strong> S. thermophilus grows first (less acid-sensitive), producing formate and CO₂ that stimulate L. bulgaricus growth. L. bulgaricus's protease activity releases peptides/amino acids that stimulate S. thermophilus growth → mutual benefit → faster combined acid production than either alone</li>
                                </ul>
                                <p class="mt-2"><strong>Alternative: Direct Acidification</strong></p>
                                <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                    <li>Some industrial Mozzarella is made without starter cultures — instead, food-grade acid (citric acid, acetic acid, or lactic acid) is added directly to cold milk (pH adjusted to 5.5-5.8) before heating and rennet addition</li>
                                    <li>Advantages: Faster process (no waiting for acid development), more consistent pH control, no phage risk</li>
                                    <li>Disadvantages: Less complex flavor (no microbial metabolites), different texture (no EPS), regulatory restrictions in some countries (must declare "made with direct acidification")</li>
                                </ul>
                            </li>
    
                            <li>
                                <strong>Coagulation, Cutting & Cooking:</strong>
                                <p class="mt-2">Similar principles to Cheddar but with differences:</p>
                                <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                    <li>Higher temperature (35-37°C vs. 30-32°C for Cheddar) — suits thermophilic starters</li>
                                    <li>Larger curd pieces (10-15 mm vs. 6-12 mm for Cheddar) — retain more moisture (Mozzarella target: 52-60% vs. 36-39%)</li>
                                    <li>Higher cook temperature (40-45°C vs. 38-42°C for Cheddar) — suits thermophilic organisms, promotes syneresis</li>
                                </ul>
                            </li>
    
                            <li>
                                <strong>Acid Development — The Critical Pre-Stretch Step (CCP-3):</strong>
                                <p class="mt-2">This is arguably the most critical step in Mozzarella making. After whey drainage, the curd mat is held at 35-40°C to allow continued lactic acid production. The pH must reach <strong>exactly 5.1-5.4</strong> before stretching.</p>
    
                                <p class="mt-2"><strong>Why pH 5.1-5.4 is Critical — The Science of Stretchability:</strong></p>
                                <ul class="list-disc list-outside pl-5 mt-2 space-y-3">
                                    <li><strong>Colloidal Calcium Phosphate (CCP) Dissolution:</strong> At pH 6.7 (native milk), casein micelles contain ~7-8 mg CCP per g casein. As pH decreases:
                                        <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                            <li>pH 6.0: ~50% CCP dissolved → micelles begin loosening</li>
                                            <li>pH 5.5: ~70% CCP dissolved → significant structural loosening</li>
                                            <li><strong>pH 5.1-5.4: ~80-90% CCP dissolved → micelle internal structure largely destroyed → casein proteins become free to realign and flow under shear force → STRETCHABLE!</strong></li>
                                            <li>pH <5.0: >95% CCP dissolved + approaching isoelectric point (4.6) → excessive protein dehydration → casein matrix becomes brittle, crumbly, NON-stretchable</li>
                                        </ul>
                                    </li>
                                    <li><strong>Charge State of Casein:</strong> At pH 5.1-5.4, casein carries minimal net charge (close to but above isoelectric point) → reduced electrostatic repulsion between molecules → proteins can approach closely and form new hydrophobic/hydrogen-bond interactions upon heating → essential for fiber formation during stretching</li>
                                    <li><strong>Calcium Content in Curd:</strong> At pH 5.2: curd retains ~25-28 mg Ca per g protein (vs. ~30 mg at pH 6.0). This intermediate calcium level is critical:
                                        <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                            <li>Too much Ca (high pH >5.6): protein matrix too rigid → doesn't soften in hot water → no stretching</li>
                                            <li>Optimal Ca (pH 5.1-5.4): enough Ca for protein interaction but enough CCP dissolved for plasticity → perfect stretching</li>
                                            <li>Too little Ca (low pH <5.0): excessive CCP dissolution → weak protein interactions → curd disintegrates in hot water instead of stretching</li>
                                        </ul>
                                    </li>
                                </ul>
    
                                <p class="mt-2"><strong>CCP-3 Critical Limits:</strong></p>
                                <table class="min-w-full border-collapse border border-gray-300 mt-2">
                                    <thead>
                                        <tr class="bg-gray-100">
                                            <th class="border border-gray-300 px-4 py-2">Parameter</th>
                                            <th class="border border-gray-300 px-4 py-2">Critical Limit</th>
                                            <th class="border border-gray-300 px-4 py-2">Monitoring</th>
                                            <th class="border border-gray-300 px-4 py-2">Corrective Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border border-gray-300 px-4 py-2">Curd pH at stretching</td>
                                            <td class="border border-gray-300 px-4 py-2">5.1-5.4</td>
                                            <td class="border border-gray-300 px-4 py-2">pH meter every 15 min</td>
                                            <td class="border border-gray-300 px-4 py-2">If >5.4: wait for further acid development. If <5.0: stretch immediately (may be too acidic → crumbly texture → downgrade product)</td>
                                        </tr>
                                    </tbody>
                                </table>
    
                                <p class="mt-2"><strong>Stretch Test (Quality Check Before Stretching):</strong> Take small piece of curd, immerse in 80°C water for 30 seconds → knead and pull. If it stretches into <strong>smooth, continuous, glossy strand 30-50 cm long without breaking</strong> → pH is correct, proceed to stretching. If it breaks/crumbles → pH not yet correct (check and wait) or too low (proceed cautiously)</p>
                            </li>
    
                            <li>
                                <strong>Pasta Filata — Stretching/Kneading (CCP-4) — The Defining Step:</strong>
    
                                <p class="mt-2">The pasta filata process is the <strong>most distinctive and scientifically fascinating step</strong> in Mozzarella production. It creates the unique fibrous protein structure responsible for Mozzarella's functional properties.</p>
    
                                <p class="mt-2"><strong>Process Description:</strong></p>
                                <ol class="list-decimal list-outside pl-5 space-y-2">
                                    <li>Acidified curd (pH 5.1-5.4) is cut/milled into small pieces</li>
                                    <li>Curd pieces immersed in <strong>hot water (68-80°C)</strong> or exposed to <strong>direct steam injection</strong> in a cooker/stretcher machine</li>
                                    <li>The curd mass is <strong>mechanically kneaded and stretched</strong> using single-screw or twin-screw auger systems (industrial) or manually pulled and folded (artisanal)</li>
                                    <li>Processing time: <strong>3-8 minutes</strong> at internal curd temperature of 57-65°C</li>
                                    <li>The hot, plastic mass is then extruded or molded into desired shapes</li>
                                </ol>
    
                                <p class="mt-2"><strong>Scientific Mechanism of Fiber Formation:</strong></p>
                                <ul class="list-disc list-outside pl-5 mt-2 space-y-3">
                                    <li><strong>Heat Effect on Casein (57-65°C):</strong> At this temperature and at pH 5.1-5.4:
                                        <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                            <li>Hydrophobic interactions between casein molecules are maximized (hydrophobic interactions become stronger with increasing temperature up to ~60-70°C)</li>
                                            <li>Remaining calcium bridges become more labile (dynamic) → allow molecular rearrangement</li>
                                            <li>Casein matrix transitions from a <strong>rigid gel</strong> to a <strong>viscoelastic fluid</strong> (glass transition/softening) → flows under mechanical force</li>
                                        </ul>
                                    </li>
                                    <li><strong>Shear-Induced Alignment:</strong> When the softened casein mass is subjected to unidirectional mechanical stretching:
                                        <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                            <li>Randomly oriented casein aggregates/sub-micelles are forced to <strong>align parallel to the direction of stretch</strong></li>
                                            <li>The aligned proteins form continuous <strong>protein fibers</strong> (5-20 μm diameter, extending hundreds of microns in length)</li>
                                            <li>Between the protein fibers: <strong>channels of serum (water) and elongated fat globules</strong> also aligned parallel → creates a layered, anisotropic microstructure</li>
                                        </ul>
                                    </li>
                                    <li><strong>Fat Phase Behavior:</strong> During stretching at 57-65°C:
                                        <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                            <li>Most milk fat is liquid at this temperature (milk fat melting range: 28-40°C)</li>
                                            <li>Fat globules deform and elongate in the direction of stretch → form elongated pools/channels between protein fibers</li>
                                            <li>Some fat globule membrane disruption occurs → free fat release → contributes to oiling-off during pizza baking (desirable characteristic)</li>
                                        </ul>
                                    </li>
                                </ul>
    
                                <p class="mt-2"><strong>Microstructure of Stretched Mozzarella (SEM/CLSM Studies):</strong></p>
                                <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                                    <li>Parallel protein fibers (casein) — continuous phase providing strength</li>
                                    <li>Elongated fat channels between fibers — lubricant, flavor carrier</li>
                                    <li>Serum (water) channels — moisture retention, heat transfer during melting</li>
                                    <li>Structure is <strong>highly anisotropic</strong> — properties differ in parallel vs. perpendicular direction to fibers</li>
                                    <li>This is fundamentally different from Cheddar (isotropic, no fiber alignment) → explains different functional behavior</li>
                                </ul>
    
                                <p class="mt-2"><strong>CCP-4 Critical Parameters:</strong></p>
                                <table class="min-w-full border-collapse border border-gray-300 mt-2">
                                    <thead>
                                        <tr class="bg-gray-100">
                                            <th class="border border-gray-300 px-4 py-2">Parameter</th>
                                            <th class="border border-gray-300 px-4 py-2">Optimal Range</th>
                                            <th class="border border-gray-300 px-4 py-2">Effect of Deviation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border border-gray-300 px-4 py-2">Water/steam temperature</td>
                                            <td class="border border-gray-300 px-4 py-2">68-80°C</td>
                                            <td class="border border-gray-300 px-4 py-2">Too low (<65°C): insufficient plasticization → tough, non-stretchy. Too high (>85°C): excessive fat loss into water, surface scorching, protein degradation</td>
                                        </tr>
                                        <tr>
                                            <td class="border border-gray-300 px-4 py-2">Internal curd temperature</td>
                                            <td class="border border-gray-300 px-4 py-2">57-65°C</td>
                                            <td class="border border-gray-300 px-4 py-2">Critical window for optimal casein flow and fiber formation</td>
                                        </tr>
                                        <tr>
                                            <td class="border border-gray-300 px-4 py-2">Stretching time</td>
                                            <td class="border border-gray-300 px-4 py-2">3-8 min</td>
                                            <td class="border border-gray-300 px-4 py-2">Too short: incomplete fiber formation → poor stretch on pizza. Too long: excessive fat loss, tough texture, browning</td>
                                        </tr>
                                        <tr>
                                            <td class="border border-gray-300 px-4 py-2">Curd pH at stretching</td>
                                            <td class="border border-gray-300 px-4 py-2">5.1-5.4</td>
                                            <td class="border border-gray-300 px-4 py-2">As described above — most critical single parameter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>
    
                            <li>
                                <strong>Molding and Cooling in Brine:</strong>
                                <p class="mt-2"><strong>Molding:</strong> The hot, plastic curd (57-65°C) is extruded, cut, and shaped into desired forms: balls (bocconcini: 30g, cherry-sized; standard: 125g; ovoline: 250g), blocks (2.5-10 kg for industrial shredding), logs, or braids. Shape given by molds or mechanical formers.</p>
    
                                <p class="mt-2"><strong>Cooling in Brine:</strong></p>
                                <ul class="list-disc list-outside pl-5 mt-1 space-y-2">
                                    <li><strong>Brine Composition:</strong> Saturated or near-saturated NaCl solution (18-23% w/v), maintained at 4-10°C, pH adjusted to 5.2 with lactic acid (prevents surface softening)</li>
                                    <li><strong>Cooling Time:</strong> 30 min for small balls → 6-24 hours for large blocks. Core temperature target: <10°C</li>
                                    <li><strong>Dual Function:</strong>
                                        <ul class="list-disc list-outside pl-5 mt-1 space-y-1">
                                            <li><strong>Rapid cooling:</strong> Stops stretching process, solidifies fat, "sets" the fibrous structure, prevents further acid development by LAB</li>
                                            <li><strong>Salt absorption:</strong> NaCl diffuses into cheese surface → salt gradient from rind to center (equilibrates over days-weeks). Target final salt: 1.0-1.8% (w/w)</li>
                                        </ul>
                                    </li>
                                    <li><strong>Salt Diffusion:</strong> Follows Fick's second law of diffusion. Diffusion coefficient of NaCl in Mozzarella: ~2.5-3.5 × 10⁻¹⁰ m²/s at 10°C. Equilibration time: 3-7 days for 2.5 kg block</li>
                                </ul>
                            </li>
    
                            <li>
                                <strong>Packaging and Storage:</strong>
                                <p class="mt-2"><strong>Fresh/High-Moisture Mozzarella:</strong> Packaged in water, light brine (2-4% NaCl), or whey. Stored at 2-4°C. Shelf life: 7-21 days. Must maintain cold chain rigorously (a<sub>w</sub> ~0.97 → supports microbial growth if temperature abused)</p>
                                <p class="mt-2"><strong>Low-Moisture Mozzarella (LMMC):</strong> Vacuum-packaged in barrier film. Stored at 2-4°C. Requires <strong>aging for 7-21 days before use on pizza</strong> — during this period, limited proteolysis occurs → improves meltability and reduces rubbery texture of fresh LMMC.</p>
                            </li>
                        </ol>
    
                        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Mozzarella Functional Properties — Pizza Performance Science</h3>
    
                        <p>Mozzarella's commercial value is determined primarily by its <strong>functional performance on pizza</strong>. Key functional properties:</p>
    
                        <table class="min-w-full border-collapse border border-gray-300 mt-3">
                            <thead>
                                <tr class="bg-gray-100">
                                    <th class="border border-gray-300 px-4 py-2">Property</th>
                                    <th class="border border-gray-300 px-4 py-2">Definition</th>
                                    <th class="border border-gray-300 px-4 py-2">Optimal Behavior</th>
                                    <th class="border border-gray-300 px-4 py-2">Scientific Basis</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2"><strong>Meltability</strong></td>
                                    <td class="border border-gray-300 px-4 py-2">Ease and extent of flow when heated</td>
                                    <td class="border border-gray-300 px-4 py-2">Uniform melting, smooth flow, no charring</td>
                                    <td class="border border-gray-300 px-4 py-2">At >60°C: hydrophobic interactions weaken → casein matrix softens → flows. Higher fat → more melt. More proteolysis (aging) → weaker matrix → more melt. Lower Ca → less cross-linking → more melt</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2"><strong>Stretchability</strong></td>
                                    <td class="border border-gray-300 px-4 py-2">Ability to form long, continuous strands when pulled</td>
                                    <td class="border border-gray-300 px-4 py-2">20-40 cm stretch without breaking at 60-70°C</td>
                                    <td class="border border-gray-300 px-4 py-2">Aligned protein fibers (from pasta filata) act as reinforcing elements → resist breaking → form long strands. Optimal at intermediate proteolysis level (7-14 days age)</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2"><strong>Browning</strong></td>
                                    <td class="border border-gray-300 px-4 py-2">Development of golden-brown color during baking</td>
                                    <td class="border border-gray-300 px-4 py-2">Uniform golden-brown spots, not black/charred</td>
                                    <td class="border border-gray-300 px-4 py-2">Maillard reaction between residual reducing sugars (galactose, lactose) and milk proteins at oven temperatures (250-300°C). More residual galactose → more browning. S. thermophilus-only cultures leave galactose unfermented → excessive browning!</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2"><strong>Oiling Off</strong></td>
                                    <td class="border border-gray-300 px-4 py-2">Release of free fat on surface during heating</td>
                                    <td class="border border-gray-300 px-4 py-2">Moderate (glossy, appetizing appearance) but not excessive (greasy, pooling)</td>
                                    <td class="border border-gray-300 px-4 py-2">Fat melts at ~32-37°C → disrupted MFGM → free fat released from protein matrix. Higher FDM → more oiling off. More proteolysis → weaker matrix → easier fat release</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2"><strong>Blistering</strong></td>
                                    <td class="border border-gray-300 px-4 py-2">Formation of brown spots/bubbles on surface</td>
                                    <td class="border border-gray-300 px-4 py-2">Small, numerous, uniform blisters (aesthetic appeal)</td>
                                    <td class="border border-gray-300 px-4 py-2">Water near surface evaporates → steam trapped under melting cheese skin → lifts surface → exposed area browns via Maillard. More moisture → larger blisters</td>
                                </tr>
                            </tbody>
                        </table>
    
                        <p class="mt-3"><strong>The Browning Problem — Galactose Accumulation:</strong></p>
                        <p>A critical issue in Mozzarella manufacturing: <em>S. thermophilus</em> (primary starter) ferments ONLY the glucose moiety of lactose → galactose accumulates in cheese (up to 1.0-1.5% w/w). Galactose is a highly reactive reducing sugar → participates readily in Maillard browning at pizza oven temperatures → excessive, uncontrolled browning → scorched appearance → consumer rejection.</p>
    
                        <p><strong>Solutions:</strong></p>
                        <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                            <li>Use galactose-fermenting <em>L. helveticus</em> alongside <em>S. thermophilus</em> → metabolizes accumulated galactose → reduces browning</li>
                            <li>Select galactose-positive mutant strains of <em>S. thermophilus</em> (Gal+ strains) → ferment both glucose and galactose</li>
                            <li>Extended aging (>14 days) → allows NSLAB to ferment residual galactose</li>
                            <li>Washing curd with water before stretching → dilutes galactose in serum → reduces browning potential</li>
                        </ul>
    
                        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Common Defects in Mozzarella Cheese</h3>
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
                                    <td class="border border-gray-300 px-4 py-2"><strong>Poor Stretchability</strong></td>
                                    <td class="border border-gray-300 px-4 py-2">pH too high (>5.5: insufficient CCP dissolution → rigid matrix). pH too low (<5.0: excessive CCP loss → weak, crumbly). Excessive proteolysis (over-aged). Low casein content</td>
                                    <td class="border border-gray-300 px-4 py-2">Precise pH control (5.1-5.4 at stretching). Age optimization (7-14 days for pizza use). Adequate casein in milk (C/F ≥0.90)</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2"><strong>Excessive Browning</strong></td>
                                    <td class="border border-gray-300 px-4 py-2">High residual galactose (from S. thermophilus-only cultures). High lactose retention. Low pH (accelerates Maillard)</td>
                                    <td class="border border-gray-300 px-4 py-2">Use Gal+ starters or include L. helveticus. Curd washing. Extended aging to consume residual sugars</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2"><strong>Excessive Oiling Off</strong></td>
                                    <td class="border border-gray-300 px-4 py-2">High FDM (>50%). Extensive MFGM disruption during stretching. Excessive proteolysis → weak protein matrix cannot hold fat</td>
                                    <td class="border border-gray-300 px-4 py-2">Standardize milk to appropriate C/F. Minimize stretching time. Use within optimal age window</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2"><strong>Rubbery/Tough Texture</strong></td>
                                    <td class="border border-gray-300 px-4 py-2">Too fresh (insufficient proteolysis for matrix softening). Low moisture. High calcium (high pH at stretching). Excessive stretching time/temperature</td>
                                    <td class="border border-gray-300 px-4 py-2">Age minimum 7-10 days before pizza use. Target higher moisture. Optimize stretching conditions. Ensure proper pH development</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 px-4 py-2"><strong>Pink Discoloration</strong></td>
                                    <td class="border border-gray-300 px-4 py-2">Maillard reaction between galactose and amino acids at alkaline micro-environments (surface pH variation). Annatto color interaction with reducing sugars. Light-induced reactions</td>
                                    <td class="border border-gray-300 px-4 py-2">Reduce galactose (Gal+ starters). Avoid annatto. Opaque packaging. Uniform pH throughout cheese</td>
                                </tr>
                            </tbody>
                        </table>
                    `
                }
            }
        },
}

    

